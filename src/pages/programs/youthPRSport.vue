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
                                <q-tooltip># of unique children</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of total children</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of unique youth</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip># of total youth</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 5
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
                              :color="(youthPRSportJanContents.kpi1 == null)?'grey-2':(youthPRSportJanContents.kpi1 >= '0' && youthPRSportJanContents.kpi1 <= '2.4')?'red':(youthPRSportJanContents.kpi1 > '2.4' && youthPRSportJanContents.kpi1 <= '3.2')?'orange':(youthPRSportJanContents.kpi1 > '3.2' && youthPRSportJanContents.kpi1 < '4')?'yellow-7':(youthPRSportJanContents.kpi1 >= '4' && youthPRSportJanContents.kpi1 < '4.8')?'green':(youthPRSportJanContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJanContents.kpi2 == null)?'grey-2':(youthPRSportJanContents.kpi2 >= '0' && youthPRSportJanContents.kpi2 <= '0.6')?'red':(youthPRSportJanContents.kpi2 > '0.6' && youthPRSportJanContents.kpi2 <= '0.8')?'orange':(youthPRSportJanContents.kpi2 > '0.8' && youthPRSportJanContents.kpi2 < '1')?'yellow-7':(youthPRSportJanContents.kpi2 >= '1' && youthPRSportJanContents.kpi2 < '1.2')?'green':(youthPRSportJanContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJanContents.kpi3 == null)?'grey-2':(youthPRSportJanContents.kpi3 >= '0' && youthPRSportJanContents.kpi3 <= '0.6')?'red':(youthPRSportJanContents.kpi3 > '0.6' && youthPRSportJanContents.kpi3 <= '0.8')?'orange':(youthPRSportJanContents.kpi3 > '0.8' && youthPRSportJanContents.kpi3 < '1')?'yellow-7':(youthPRSportJanContents.kpi3 >= '1' && youthPRSportJanContents.kpi3 < '1.2')?'green':(youthPRSportJanContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJanContents.kpi4 == null)?'grey-2':(youthPRSportJanContents.kpi4 >= '0' && youthPRSportJanContents.kpi4 <= '0.6')?'red':(youthPRSportJanContents.kpi4 > '0.6' && youthPRSportJanContents.kpi4 <= '0.8')?'orange':(youthPRSportJanContents.kpi4 > '0.8' && youthPRSportJanContents.kpi4 < '1')?'yellow-7':(youthPRSportJanContents.kpi4 >= '1' && youthPRSportJanContents.kpi4 < '1.2')?'green':(youthPRSportJanContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJanContents.kpi5 == null)?'grey-2':(youthPRSportJanContents.kpi5 >= '0' && youthPRSportJanContents.kpi5 <= '0.6')?'red':(youthPRSportJanContents.kpi5 > '0.6' && youthPRSportJanContents.kpi5 <= '0.8')?'orange':(youthPRSportJanContents.kpi5 > '0.8' && youthPRSportJanContents.kpi5 < '1')?'yellow-7':(youthPRSportJanContents.kpi5 >= '1' && youthPRSportJanContents.kpi5 < '1.2')?'green':(youthPRSportJanContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi5}}
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
                              :color="(youthPRSportFebContents.kpi1 == null)?'grey-2':(youthPRSportFebContents.kpi1 >= '0' && youthPRSportFebContents.kpi1 <= '2.4')?'red':(youthPRSportFebContents.kpi1 > '2.4' && youthPRSportFebContents.kpi1 <= '3.2')?'orange':(youthPRSportFebContents.kpi1 > '3.2' && youthPRSportFebContents.kpi1 < '4')?'yellow-7':(youthPRSportFebContents.kpi1 >= '4' && youthPRSportFebContents.kpi1 < '4.8')?'green':(youthPRSportFebContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportFebContents.kpi2 == null)?'grey-2':(youthPRSportFebContents.kpi2 >= '0' && youthPRSportFebContents.kpi2 <= '0.6')?'red':(youthPRSportFebContents.kpi2 > '0.6' && youthPRSportFebContents.kpi2 <= '0.8')?'orange':(youthPRSportFebContents.kpi2 > '0.8' && youthPRSportFebContents.kpi2 < '1')?'yellow-7':(youthPRSportFebContents.kpi2 >= '1' && youthPRSportFebContents.kpi2 < '1.2')?'green':(youthPRSportFebContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportFebContents.kpi3 == null)?'grey-2':(youthPRSportFebContents.kpi3 >= '0' && youthPRSportFebContents.kpi3 <= '0.6')?'red':(youthPRSportFebContents.kpi3 > '0.6' && youthPRSportFebContents.kpi3 <= '0.8')?'orange':(youthPRSportFebContents.kpi3 > '0.8' && youthPRSportFebContents.kpi3 < '1')?'yellow-7':(youthPRSportFebContents.kpi3 >= '1' && youthPRSportFebContents.kpi3 < '1.2')?'green':(youthPRSportFebContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportFebContents.kpi4 == null)?'grey-2':(youthPRSportFebContents.kpi4 >= '0' && youthPRSportFebContents.kpi4 <= '0.6')?'red':(youthPRSportFebContents.kpi4 > '0.6' && youthPRSportFebContents.kpi4 <= '0.8')?'orange':(youthPRSportFebContents.kpi4 > '0.8' && youthPRSportFebContents.kpi4 < '1')?'yellow-7':(youthPRSportFebContents.kpi4 >= '1' && youthPRSportFebContents.kpi4 < '1.2')?'green':(youthPRSportFebContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportFebContents.kpi5 == null)?'grey-2':(youthPRSportFebContents.kpi5 >= '0' && youthPRSportFebContents.kpi5 <= '0.6')?'red':(youthPRSportFebContents.kpi5 > '0.6' && youthPRSportFebContents.kpi5 <= '0.8')?'orange':(youthPRSportFebContents.kpi5 > '0.8' && youthPRSportFebContents.kpi5 < '1')?'yellow-7':(youthPRSportFebContents.kpi5 >= '1' && youthPRSportFebContents.kpi5 < '1.2')?'green':(youthPRSportFebContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi5}}
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
                              :color="(youthPRSportMarContents.kpi1 == null)?'grey-2':(youthPRSportMarContents.kpi1 >= '0' && youthPRSportMarContents.kpi1 <= '2.4')?'red':(youthPRSportMarContents.kpi1 > '2.4' && youthPRSportMarContents.kpi1 <= '3.2')?'orange':(youthPRSportMarContents.kpi1 > '3.2' && youthPRSportMarContents.kpi1 < '4')?'yellow-7':(youthPRSportMarContents.kpi1 >= '4' && youthPRSportMarContents.kpi1 < '4.8')?'green':(youthPRSportMarContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMarContents.kpi2 == null)?'grey-2':(youthPRSportMarContents.kpi2 >= '0' && youthPRSportMarContents.kpi2 <= '0.6')?'red':(youthPRSportMarContents.kpi2 > '0.6' && youthPRSportMarContents.kpi2 <= '0.8')?'orange':(youthPRSportMarContents.kpi2 > '0.8' && youthPRSportMarContents.kpi2 < '1')?'yellow-7':(youthPRSportMarContents.kpi2 >= '1' && youthPRSportMarContents.kpi2 < '1.2')?'green':(youthPRSportMarContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMarContents.kpi3 == null)?'grey-2':(youthPRSportMarContents.kpi3 >= '0' && youthPRSportMarContents.kpi3 <= '0.6')?'red':(youthPRSportMarContents.kpi3 > '0.6' && youthPRSportMarContents.kpi3 <= '0.8')?'orange':(youthPRSportMarContents.kpi3 > '0.8' && youthPRSportMarContents.kpi3 < '1')?'yellow-7':(youthPRSportMarContents.kpi3 >= '1' && youthPRSportMarContents.kpi3 < '1.2')?'green':(youthPRSportMarContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMarContents.kpi4 == null)?'grey-2':(youthPRSportMarContents.kpi4 >= '0' && youthPRSportMarContents.kpi4 <= '0.6')?'red':(youthPRSportMarContents.kpi4 > '0.6' && youthPRSportMarContents.kpi4 <= '0.8')?'orange':(youthPRSportMarContents.kpi4 > '0.8' && youthPRSportMarContents.kpi4 < '1')?'yellow-7':(youthPRSportMarContents.kpi4 >= '1' && youthPRSportMarContents.kpi4 < '1.2')?'green':(youthPRSportMarContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMarContents.kpi5 == null)?'grey-2':(youthPRSportMarContents.kpi5 >= '0' && youthPRSportMarContents.kpi5 <= '0.6')?'red':(youthPRSportMarContents.kpi5 > '0.6' && youthPRSportMarContents.kpi5 <= '0.8')?'orange':(youthPRSportMarContents.kpi5 > '0.8' && youthPRSportMarContents.kpi5 < '1')?'yellow-7':(youthPRSportMarContents.kpi5 >= '1' && youthPRSportMarContents.kpi5 < '1.2')?'green':(youthPRSportMarContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi5}}
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
                              :color="(youthPRSportAprContents.kpi1 == null)?'grey-2':(youthPRSportAprContents.kpi1 >= '0' && youthPRSportAprContents.kpi1 <= '2.4')?'red':(youthPRSportAprContents.kpi1 > '2.4' && youthPRSportAprContents.kpi1 <= '3.2')?'orange':(youthPRSportAprContents.kpi1 > '3.2' && youthPRSportAprContents.kpi1 < '4')?'yellow-7':(youthPRSportAprContents.kpi1 >= '4' && youthPRSportAprContents.kpi1 < '4.8')?'green':(youthPRSportAprContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAprContents.kpi2 == null)?'grey-2':(youthPRSportAprContents.kpi2 >= '0' && youthPRSportAprContents.kpi2 <= '0.6')?'red':(youthPRSportAprContents.kpi2 > '0.6' && youthPRSportAprContents.kpi2 <= '0.8')?'orange':(youthPRSportAprContents.kpi2 > '0.8' && youthPRSportAprContents.kpi2 < '1')?'yellow-7':(youthPRSportAprContents.kpi2 >= '1' && youthPRSportAprContents.kpi2 < '1.2')?'green':(youthPRSportAprContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAprContents.kpi3 == null)?'grey-2':(youthPRSportAprContents.kpi3 >= '0' && youthPRSportAprContents.kpi3 <= '0.6')?'red':(youthPRSportAprContents.kpi3 > '0.6' && youthPRSportAprContents.kpi3 <= '0.8')?'orange':(youthPRSportAprContents.kpi3 > '0.8' && youthPRSportAprContents.kpi3 < '1')?'yellow-7':(youthPRSportAprContents.kpi3 >= '1' && youthPRSportAprContents.kpi3 < '1.2')?'green':(youthPRSportAprContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAprContents.kpi4 == null)?'grey-2':(youthPRSportAprContents.kpi4 >= '0' && youthPRSportAprContents.kpi4 <= '0.6')?'red':(youthPRSportAprContents.kpi4 > '0.6' && youthPRSportAprContents.kpi4 <= '0.8')?'orange':(youthPRSportAprContents.kpi4 > '0.8' && youthPRSportAprContents.kpi4 < '1')?'yellow-7':(youthPRSportAprContents.kpi4 >= '1' && youthPRSportAprContents.kpi4 < '1.2')?'green':(youthPRSportAprContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAprContents.kpi5 == null)?'grey-2':(youthPRSportAprContents.kpi5 >= '0' && youthPRSportAprContents.kpi5 <= '0.6')?'red':(youthPRSportAprContents.kpi5 > '0.6' && youthPRSportAprContents.kpi5 <= '0.8')?'orange':(youthPRSportAprContents.kpi5 > '0.8' && youthPRSportAprContents.kpi5 < '1')?'yellow-7':(youthPRSportAprContents.kpi5 >= '1' && youthPRSportAprContents.kpi5 < '1.2')?'green':(youthPRSportAprContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi5}}
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
                              :color="(youthPRSportMayContents.kpi1 == null)?'grey-2':(youthPRSportMayContents.kpi1 >= '0' && youthPRSportMayContents.kpi1 <= '2.4')?'red':(youthPRSportMayContents.kpi1 > '2.4' && youthPRSportMayContents.kpi1 <= '3.2')?'orange':(youthPRSportMayContents.kpi1 > '3.2' && youthPRSportMayContents.kpi1 < '4')?'yellow-7':(youthPRSportMayContents.kpi1 >= '4' && youthPRSportMayContents.kpi1 < '4.8')?'green':(youthPRSportMayContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMayContents.kpi2 == null)?'grey-2':(youthPRSportMayContents.kpi2 >= '0' && youthPRSportMayContents.kpi2 <= '0.6')?'red':(youthPRSportMayContents.kpi2 > '0.6' && youthPRSportMayContents.kpi2 <= '0.8')?'orange':(youthPRSportMayContents.kpi2 > '0.8' && youthPRSportMayContents.kpi2 < '1')?'yellow-7':(youthPRSportMayContents.kpi2 >= '1' && youthPRSportMayContents.kpi2 < '1.2')?'green':(youthPRSportMayContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMayContents.kpi3 == null)?'grey-2':(youthPRSportMayContents.kpi3 >= '0' && youthPRSportMayContents.kpi3 <= '0.6')?'red':(youthPRSportMayContents.kpi3 > '0.6' && youthPRSportMayContents.kpi3 <= '0.8')?'orange':(youthPRSportMayContents.kpi3 > '0.8' && youthPRSportMayContents.kpi3 < '1')?'yellow-7':(youthPRSportMayContents.kpi3 >= '1' && youthPRSportMayContents.kpi3 < '1.2')?'green':(youthPRSportMayContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMayContents.kpi4 == null)?'grey-2':(youthPRSportMayContents.kpi4 >= '0' && youthPRSportMayContents.kpi4 <= '0.6')?'red':(youthPRSportMayContents.kpi4 > '0.6' && youthPRSportMayContents.kpi4 <= '0.8')?'orange':(youthPRSportMayContents.kpi4 > '0.8' && youthPRSportMayContents.kpi4 < '1')?'yellow-7':(youthPRSportMayContents.kpi4 >= '1' && youthPRSportMayContents.kpi4 < '1.2')?'green':(youthPRSportMayContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMayContents.kpi5 == null)?'grey-2':(youthPRSportMayContents.kpi5 >= '0' && youthPRSportMayContents.kpi5 <= '0.6')?'red':(youthPRSportMayContents.kpi5 > '0.6' && youthPRSportMayContents.kpi5 <= '0.8')?'orange':(youthPRSportMayContents.kpi5 > '0.8' && youthPRSportMayContents.kpi5 < '1')?'yellow-7':(youthPRSportMayContents.kpi5 >= '1' && youthPRSportMayContents.kpi5 < '1.2')?'green':(youthPRSportMayContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi5}}
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
                              :color="(youthPRSportJunContents.kpi1 == null)?'grey-2':(youthPRSportJunContents.kpi1 >= '0' && youthPRSportJunContents.kpi1 <= '2.4')?'red':(youthPRSportJunContents.kpi1 > '2.4' && youthPRSportJunContents.kpi1 <= '3.2')?'orange':(youthPRSportJunContents.kpi1 > '3.2' && youthPRSportJunContents.kpi1 < '4')?'yellow-7':(youthPRSportJunContents.kpi1 >= '4' && youthPRSportJunContents.kpi1 < '4.8')?'green':(youthPRSportJunContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJunContents.kpi2 == null)?'grey-2':(youthPRSportJunContents.kpi2 >= '0' && youthPRSportJunContents.kpi2 <= '0.6')?'red':(youthPRSportJunContents.kpi2 > '0.6' && youthPRSportJunContents.kpi2 <= '0.8')?'orange':(youthPRSportJunContents.kpi2 > '0.8' && youthPRSportJunContents.kpi2 < '1')?'yellow-7':(youthPRSportJunContents.kpi2 >= '1' && youthPRSportJunContents.kpi2 < '1.2')?'green':(youthPRSportJunContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJunContents.kpi3 == null)?'grey-2':(youthPRSportJunContents.kpi3 >= '0' && youthPRSportJunContents.kpi3 <= '0.6')?'red':(youthPRSportJunContents.kpi3 > '0.6' && youthPRSportJunContents.kpi3 <= '0.8')?'orange':(youthPRSportJunContents.kpi3 > '0.8' && youthPRSportJunContents.kpi3 < '1')?'yellow-7':(youthPRSportJunContents.kpi3 >= '1' && youthPRSportJunContents.kpi3 < '1.2')?'green':(youthPRSportJunContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJunContents.kpi4 == null)?'grey-2':(youthPRSportJunContents.kpi4 >= '0' && youthPRSportJunContents.kpi4 <= '0.6')?'red':(youthPRSportJunContents.kpi4 > '0.6' && youthPRSportJunContents.kpi4 <= '0.8')?'orange':(youthPRSportJunContents.kpi4 > '0.8' && youthPRSportJunContents.kpi4 < '1')?'yellow-7':(youthPRSportJunContents.kpi4 >= '1' && youthPRSportJunContents.kpi4 < '1.2')?'green':(youthPRSportJunContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJunContents.kpi5 == null)?'grey-2':(youthPRSportJunContents.kpi5 >= '0' && youthPRSportJunContents.kpi5 <= '0.6')?'red':(youthPRSportJunContents.kpi5 > '0.6' && youthPRSportJunContents.kpi5 <= '0.8')?'orange':(youthPRSportJunContents.kpi5 > '0.8' && youthPRSportJunContents.kpi5 < '1')?'yellow-7':(youthPRSportJunContents.kpi5 >= '1' && youthPRSportJunContents.kpi5 < '1.2')?'green':(youthPRSportJunContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi5}}
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
                              :color="(youthPRSportJulContents.kpi1 == null)?'grey-2':(youthPRSportJulContents.kpi1 >= '0' && youthPRSportJulContents.kpi1 <= '2.4')?'red':(youthPRSportJulContents.kpi1 > '2.4' && youthPRSportJulContents.kpi1 <= '3.2')?'orange':(youthPRSportJulContents.kpi1 > '3.2' && youthPRSportJulContents.kpi1 < '4')?'yellow-7':(youthPRSportJulContents.kpi1 >= '4' && youthPRSportJulContents.kpi1 < '4.8')?'green':(youthPRSportJulContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJulContents.kpi2 == null)?'grey-2':(youthPRSportJulContents.kpi2 >= '0' && youthPRSportJulContents.kpi2 <= '0.6')?'red':(youthPRSportJulContents.kpi2 > '0.6' && youthPRSportJulContents.kpi2 <= '0.8')?'orange':(youthPRSportJulContents.kpi2 > '0.8' && youthPRSportJulContents.kpi2 < '1')?'yellow-7':(youthPRSportJulContents.kpi2 >= '1' && youthPRSportJulContents.kpi2 < '1.2')?'green':(youthPRSportJulContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJulContents.kpi3 == null)?'grey-2':(youthPRSportJulContents.kpi3 >= '0' && youthPRSportJulContents.kpi3 <= '0.6')?'red':(youthPRSportJulContents.kpi3 > '0.6' && youthPRSportJulContents.kpi3 <= '0.8')?'orange':(youthPRSportJulContents.kpi3 > '0.8' && youthPRSportJulContents.kpi3 < '1')?'yellow-7':(youthPRSportJulContents.kpi3 >= '1' && youthPRSportJulContents.kpi3 < '1.2')?'green':(youthPRSportJulContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJulContents.kpi4 == null)?'grey-2':(youthPRSportJulContents.kpi4 >= '0' && youthPRSportJulContents.kpi4 <= '0.6')?'red':(youthPRSportJulContents.kpi4 > '0.6' && youthPRSportJulContents.kpi4 <= '0.8')?'orange':(youthPRSportJulContents.kpi4 > '0.8' && youthPRSportJulContents.kpi4 < '1')?'yellow-7':(youthPRSportJulContents.kpi4 >= '1' && youthPRSportJulContents.kpi4 < '1.2')?'green':(youthPRSportJulContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJulContents.kpi5 == null)?'grey-2':(youthPRSportJulContents.kpi5 >= '0' && youthPRSportJulContents.kpi5 <= '0.6')?'red':(youthPRSportJulContents.kpi5 > '0.6' && youthPRSportJulContents.kpi5 <= '0.8')?'orange':(youthPRSportJulContents.kpi5 > '0.8' && youthPRSportJulContents.kpi5 < '1')?'yellow-7':(youthPRSportJulContents.kpi5 >= '1' && youthPRSportJulContents.kpi5 < '1.2')?'green':(youthPRSportJulContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi5}}
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
                              :color="(youthPRSportAugContents.kpi1 == null)?'grey-2':(youthPRSportAugContents.kpi1 >= '0' && youthPRSportAugContents.kpi1 <= '2.4')?'red':(youthPRSportAugContents.kpi1 > '2.4' && youthPRSportAugContents.kpi1 <= '3.2')?'orange':(youthPRSportAugContents.kpi1 > '3.2' && youthPRSportAugContents.kpi1 < '4')?'yellow-7':(youthPRSportAugContents.kpi1 >= '4' && youthPRSportAugContents.kpi1 < '4.8')?'green':(youthPRSportAugContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAugContents.kpi2 == null)?'grey-2':(youthPRSportAugContents.kpi2 >= '0' && youthPRSportAugContents.kpi2 <= '0.6')?'red':(youthPRSportAugContents.kpi2 > '0.6' && youthPRSportAugContents.kpi2 <= '0.8')?'orange':(youthPRSportAugContents.kpi2 > '0.8' && youthPRSportAugContents.kpi2 < '1')?'yellow-7':(youthPRSportAugContents.kpi2 >= '1' && youthPRSportAugContents.kpi2 < '1.2')?'green':(youthPRSportAugContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAugContents.kpi3 == null)?'grey-2':(youthPRSportAugContents.kpi3 >= '0' && youthPRSportAugContents.kpi3 <= '0.6')?'red':(youthPRSportAugContents.kpi3 > '0.6' && youthPRSportAugContents.kpi3 <= '0.8')?'orange':(youthPRSportAugContents.kpi3 > '0.8' && youthPRSportAugContents.kpi3 < '1')?'yellow-7':(youthPRSportAugContents.kpi3 >= '1' && youthPRSportAugContents.kpi3 < '1.2')?'green':(youthPRSportAugContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAugContents.kpi4 == null)?'grey-2':(youthPRSportAugContents.kpi4 >= '0' && youthPRSportAugContents.kpi4 <= '0.6')?'red':(youthPRSportAugContents.kpi4 > '0.6' && youthPRSportAugContents.kpi4 <= '0.8')?'orange':(youthPRSportAugContents.kpi4 > '0.8' && youthPRSportAugContents.kpi4 < '1')?'yellow-7':(youthPRSportAugContents.kpi4 >= '1' && youthPRSportAugContents.kpi4 < '1.2')?'green':(youthPRSportAugContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAugContents.kpi5 == null)?'grey-2':(youthPRSportAugContents.kpi5 >= '0' && youthPRSportAugContents.kpi5 <= '0.6')?'red':(youthPRSportAugContents.kpi5 > '0.6' && youthPRSportAugContents.kpi5 <= '0.8')?'orange':(youthPRSportAugContents.kpi5 > '0.8' && youthPRSportAugContents.kpi5 < '1')?'yellow-7':(youthPRSportAugContents.kpi5 >= '1' && youthPRSportAugContents.kpi5 < '1.2')?'green':(youthPRSportAugContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi5}}
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
                              :color="(youthPRSportSepContents.kpi1 == null)?'grey-2':(youthPRSportSepContents.kpi1 >= '0' && youthPRSportSepContents.kpi1 <= '2.4')?'red':(youthPRSportSepContents.kpi1 > '2.4' && youthPRSportSepContents.kpi1 <= '3.2')?'orange':(youthPRSportSepContents.kpi1 > '3.2' && youthPRSportSepContents.kpi1 < '4')?'yellow-7':(youthPRSportSepContents.kpi1 >= '4' && youthPRSportSepContents.kpi1 < '4.8')?'green':(youthPRSportSepContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportSepContents.kpi2 == null)?'grey-2':(youthPRSportSepContents.kpi2 >= '0' && youthPRSportSepContents.kpi2 <= '0.6')?'red':(youthPRSportSepContents.kpi2 > '0.6' && youthPRSportSepContents.kpi2 <= '0.8')?'orange':(youthPRSportSepContents.kpi2 > '0.8' && youthPRSportSepContents.kpi2 < '1')?'yellow-7':(youthPRSportSepContents.kpi2 >= '1' && youthPRSportSepContents.kpi2 < '1.2')?'green':(youthPRSportSepContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportSepContents.kpi3 == null)?'grey-2':(youthPRSportSepContents.kpi3 >= '0' && youthPRSportSepContents.kpi3 <= '0.6')?'red':(youthPRSportSepContents.kpi3 > '0.6' && youthPRSportSepContents.kpi3 <= '0.8')?'orange':(youthPRSportSepContents.kpi3 > '0.8' && youthPRSportSepContents.kpi3 < '1')?'yellow-7':(youthPRSportSepContents.kpi3 >= '1' && youthPRSportSepContents.kpi3 < '1.2')?'green':(youthPRSportSepContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportSepContents.kpi4 == null)?'grey-2':(youthPRSportSepContents.kpi4 >= '0' && youthPRSportSepContents.kpi4 <= '0.6')?'red':(youthPRSportSepContents.kpi4 > '0.6' && youthPRSportSepContents.kpi4 <= '0.8')?'orange':(youthPRSportSepContents.kpi4 > '0.8' && youthPRSportSepContents.kpi4 < '1')?'yellow-7':(youthPRSportSepContents.kpi4 >= '1' && youthPRSportSepContents.kpi4 < '1.2')?'green':(youthPRSportSepContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportSepContents.kpi5 == null)?'grey-2':(youthPRSportSepContents.kpi5 >= '0' && youthPRSportSepContents.kpi5 <= '0.6')?'red':(youthPRSportSepContents.kpi5 > '0.6' && youthPRSportSepContents.kpi5 <= '0.8')?'orange':(youthPRSportSepContents.kpi5 > '0.8' && youthPRSportSepContents.kpi5 < '1')?'yellow-7':(youthPRSportSepContents.kpi5 >= '1' && youthPRSportSepContents.kpi5 < '1.2')?'green':(youthPRSportSepContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi5}}
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
                              :color="(youthPRSportOctContents.kpi1 == null)?'grey-2':(youthPRSportOctContents.kpi1 >= '0' && youthPRSportOctContents.kpi1 <= '2.4')?'red':(youthPRSportOctContents.kpi1 > '2.4' && youthPRSportOctContents.kpi1 <= '3.2')?'orange':(youthPRSportOctContents.kpi1 > '3.2' && youthPRSportOctContents.kpi1 < '4')?'yellow-7':(youthPRSportOctContents.kpi1 >= '4' && youthPRSportOctContents.kpi1 < '4.8')?'green':(youthPRSportOctContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportOctContents.kpi2 == null)?'grey-2':(youthPRSportOctContents.kpi2 >= '0' && youthPRSportOctContents.kpi2 <= '0.6')?'red':(youthPRSportOctContents.kpi2 > '0.6' && youthPRSportOctContents.kpi2 <= '0.8')?'orange':(youthPRSportOctContents.kpi2 > '0.8' && youthPRSportOctContents.kpi2 < '1')?'yellow-7':(youthPRSportOctContents.kpi2 >= '1' && youthPRSportOctContents.kpi2 < '1.2')?'green':(youthPRSportOctContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportOctContents.kpi3 == null)?'grey-2':(youthPRSportOctContents.kpi3 >= '0' && youthPRSportOctContents.kpi3 <= '0.6')?'red':(youthPRSportOctContents.kpi3 > '0.6' && youthPRSportOctContents.kpi3 <= '0.8')?'orange':(youthPRSportOctContents.kpi3 > '0.8' && youthPRSportOctContents.kpi3 < '1')?'yellow-7':(youthPRSportOctContents.kpi3 >= '1' && youthPRSportOctContents.kpi3 < '1.2')?'green':(youthPRSportOctContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportOctContents.kpi4 == null)?'grey-2':(youthPRSportOctContents.kpi4 >= '0' && youthPRSportOctContents.kpi4 <= '0.6')?'red':(youthPRSportOctContents.kpi4 > '0.6' && youthPRSportOctContents.kpi4 <= '0.8')?'orange':(youthPRSportOctContents.kpi4 > '0.8' && youthPRSportOctContents.kpi4 < '1')?'yellow-7':(youthPRSportOctContents.kpi4 >= '1' && youthPRSportOctContents.kpi4 < '1.2')?'green':(youthPRSportOctContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportOctContents.kpi5 == null)?'grey-2':(youthPRSportOctContents.kpi5 >= '0' && youthPRSportOctContents.kpi5 <= '0.6')?'red':(youthPRSportOctContents.kpi5 > '0.6' && youthPRSportOctContents.kpi5 <= '0.8')?'orange':(youthPRSportOctContents.kpi5 > '0.8' && youthPRSportOctContents.kpi5 < '1')?'yellow-7':(youthPRSportOctContents.kpi5 >= '1' && youthPRSportOctContents.kpi5 < '1.2')?'green':(youthPRSportOctContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi5}}
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
                              :color="(youthPRSportNovContents.kpi1 == null)?'grey-2':(youthPRSportNovContents.kpi1 >= '0' && youthPRSportNovContents.kpi1 <= '2.4')?'red':(youthPRSportNovContents.kpi1 > '2.4' && youthPRSportNovContents.kpi1 <= '3.2')?'orange':(youthPRSportNovContents.kpi1 > '3.2' && youthPRSportNovContents.kpi1 < '4')?'yellow-7':(youthPRSportNovContents.kpi1 >= '4' && youthPRSportNovContents.kpi1 < '4.8')?'green':(youthPRSportNovContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportNovContents.kpi2 == null)?'grey-2':(youthPRSportNovContents.kpi2 >= '0' && youthPRSportNovContents.kpi2 <= '0.6')?'red':(youthPRSportNovContents.kpi2 > '0.6' && youthPRSportNovContents.kpi2 <= '0.8')?'orange':(youthPRSportNovContents.kpi2 > '0.8' && youthPRSportNovContents.kpi2 < '1')?'yellow-7':(youthPRSportNovContents.kpi2 >= '1' && youthPRSportNovContents.kpi2 < '1.2')?'green':(youthPRSportNovContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportNovContents.kpi3 == null)?'grey-2':(youthPRSportNovContents.kpi3 >= '0' && youthPRSportNovContents.kpi3 <= '0.6')?'red':(youthPRSportNovContents.kpi3 > '0.6' && youthPRSportNovContents.kpi3 <= '0.8')?'orange':(youthPRSportNovContents.kpi3 > '0.8' && youthPRSportNovContents.kpi3 < '1')?'yellow-7':(youthPRSportNovContents.kpi3 >= '1' && youthPRSportNovContents.kpi3 < '1.2')?'green':(youthPRSportNovContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportNovContents.kpi4 == null)?'grey-2':(youthPRSportNovContents.kpi4 >= '0' && youthPRSportNovContents.kpi4 <= '0.6')?'red':(youthPRSportNovContents.kpi4 > '0.6' && youthPRSportNovContents.kpi4 <= '0.8')?'orange':(youthPRSportNovContents.kpi4 > '0.8' && youthPRSportNovContents.kpi4 < '1')?'yellow-7':(youthPRSportNovContents.kpi4 >= '1' && youthPRSportNovContents.kpi4 < '1.2')?'green':(youthPRSportNovContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportNovContents.kpi5 == null)?'grey-2':(youthPRSportNovContents.kpi5 >= '0' && youthPRSportNovContents.kpi5 <= '0.6')?'red':(youthPRSportNovContents.kpi5 > '0.6' && youthPRSportNovContents.kpi5 <= '0.8')?'orange':(youthPRSportNovContents.kpi5 > '0.8' && youthPRSportNovContents.kpi5 < '1')?'yellow-7':(youthPRSportNovContents.kpi5 >= '1' && youthPRSportNovContents.kpi5 < '1.2')?'green':(youthPRSportNovContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi5}}
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
                              :color="(youthPRSportDecContents.kpi1 == null)?'grey-2':(youthPRSportDecContents.kpi1 >= '0' && youthPRSportDecContents.kpi1 <= '2.4')?'red':(youthPRSportDecContents.kpi1 > '2.4' && youthPRSportDecContents.kpi1 <= '3.2')?'orange':(youthPRSportDecContents.kpi1 > '3.2' && youthPRSportDecContents.kpi1 < '4')?'yellow-7':(youthPRSportDecContents.kpi1 >= '4' && youthPRSportDecContents.kpi1 < '4.8')?'green':(youthPRSportDecContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportDecContents.kpi2 == null)?'grey-2':(youthPRSportDecContents.kpi2 >= '0' && youthPRSportDecContents.kpi2 <= '0.6')?'red':(youthPRSportDecContents.kpi2 > '0.6' && youthPRSportDecContents.kpi2 <= '0.8')?'orange':(youthPRSportDecContents.kpi2 > '0.8' && youthPRSportDecContents.kpi2 < '1')?'yellow-7':(youthPRSportDecContents.kpi2 >= '1' && youthPRSportDecContents.kpi2 < '1.2')?'green':(youthPRSportDecContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportDecContents.kpi3 == null)?'grey-2':(youthPRSportDecContents.kpi3 >= '0' && youthPRSportDecContents.kpi3 <= '0.6')?'red':(youthPRSportDecContents.kpi3 > '0.6' && youthPRSportDecContents.kpi3 <= '0.8')?'orange':(youthPRSportDecContents.kpi3 > '0.8' && youthPRSportDecContents.kpi3 < '1')?'yellow-7':(youthPRSportDecContents.kpi3 >= '1' && youthPRSportDecContents.kpi3 < '1.2')?'green':(youthPRSportDecContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportDecContents.kpi4 == null)?'grey-2':(youthPRSportDecContents.kpi4 >= '0' && youthPRSportDecContents.kpi4 <= '0.6')?'red':(youthPRSportDecContents.kpi4 > '0.6' && youthPRSportDecContents.kpi4 <= '0.8')?'orange':(youthPRSportDecContents.kpi4 > '0.8' && youthPRSportDecContents.kpi4 < '1')?'yellow-7':(youthPRSportDecContents.kpi4 >= '1' && youthPRSportDecContents.kpi4 < '1.2')?'green':(youthPRSportDecContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportDecContents.kpi5 == null)?'grey-2':(youthPRSportDecContents.kpi5 >= '0' && youthPRSportDecContents.kpi5 <= '0.6')?'red':(youthPRSportDecContents.kpi5 > '0.6' && youthPRSportDecContents.kpi5 <= '0.8')?'orange':(youthPRSportDecContents.kpi5 > '0.8' && youthPRSportDecContents.kpi5 < '1')?'yellow-7':(youthPRSportDecContents.kpi5 >= '1' && youthPRSportDecContents.kpi5 < '1.2')?'green':(youthPRSportDecContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi5}}
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
                                <q-tooltip># of unique children</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of total children</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of unique youth</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip># of total youth</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 5
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
                              :color="(youthPRSportJanContents.kpi1 == null)?'grey-2':(youthPRSportJanContents.kpi1 >= '0' && youthPRSportJanContents.kpi1 <= '2.4')?'red':(youthPRSportJanContents.kpi1 > '2.4' && youthPRSportJanContents.kpi1 <= '3.2')?'orange':(youthPRSportJanContents.kpi1 > '3.2' && youthPRSportJanContents.kpi1 < '4')?'yellow-7':(youthPRSportJanContents.kpi1 >= '4' && youthPRSportJanContents.kpi1 < '4.8')?'green':(youthPRSportJanContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJanContents.kpi2 == null)?'grey-2':(youthPRSportJanContents.kpi2 >= '0' && youthPRSportJanContents.kpi2 <= '0.6')?'red':(youthPRSportJanContents.kpi2 > '0.6' && youthPRSportJanContents.kpi2 <= '0.8')?'orange':(youthPRSportJanContents.kpi2 > '0.8' && youthPRSportJanContents.kpi2 < '1')?'yellow-7':(youthPRSportJanContents.kpi2 >= '1' && youthPRSportJanContents.kpi2 < '1.2')?'green':(youthPRSportJanContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJanContents.kpi3 == null)?'grey-2':(youthPRSportJanContents.kpi3 >= '0' && youthPRSportJanContents.kpi3 <= '0.6')?'red':(youthPRSportJanContents.kpi3 > '0.6' && youthPRSportJanContents.kpi3 <= '0.8')?'orange':(youthPRSportJanContents.kpi3 > '0.8' && youthPRSportJanContents.kpi3 < '1')?'yellow-7':(youthPRSportJanContents.kpi3 >= '1' && youthPRSportJanContents.kpi3 < '1.2')?'green':(youthPRSportJanContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJanContents.kpi4 == null)?'grey-2':(youthPRSportJanContents.kpi4 >= '0' && youthPRSportJanContents.kpi4 <= '0.6')?'red':(youthPRSportJanContents.kpi4 > '0.6' && youthPRSportJanContents.kpi4 <= '0.8')?'orange':(youthPRSportJanContents.kpi4 > '0.8' && youthPRSportJanContents.kpi4 < '1')?'yellow-7':(youthPRSportJanContents.kpi4 >= '1' && youthPRSportJanContents.kpi4 < '1.2')?'green':(youthPRSportJanContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJanContents.kpi5 == null)?'grey-2':(youthPRSportJanContents.kpi5 >= '0' && youthPRSportJanContents.kpi5 <= '0.6')?'red':(youthPRSportJanContents.kpi5 > '0.6' && youthPRSportJanContents.kpi5 <= '0.8')?'orange':(youthPRSportJanContents.kpi5 > '0.8' && youthPRSportJanContents.kpi5 < '1')?'yellow-7':(youthPRSportJanContents.kpi5 >= '1' && youthPRSportJanContents.kpi5 < '1.2')?'green':(youthPRSportJanContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi5}}
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
                              :color="(youthPRSportFebContents.kpi1 == null)?'grey-2':(youthPRSportFebContents.kpi1 >= '0' && youthPRSportFebContents.kpi1 <= '2.4')?'red':(youthPRSportFebContents.kpi1 > '2.4' && youthPRSportFebContents.kpi1 <= '3.2')?'orange':(youthPRSportFebContents.kpi1 > '3.2' && youthPRSportFebContents.kpi1 < '4')?'yellow-7':(youthPRSportFebContents.kpi1 >= '4' && youthPRSportFebContents.kpi1 < '4.8')?'green':(youthPRSportFebContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportFebContents.kpi2 == null)?'grey-2':(youthPRSportFebContents.kpi2 >= '0' && youthPRSportFebContents.kpi2 <= '0.6')?'red':(youthPRSportFebContents.kpi2 > '0.6' && youthPRSportFebContents.kpi2 <= '0.8')?'orange':(youthPRSportFebContents.kpi2 > '0.8' && youthPRSportFebContents.kpi2 < '1')?'yellow-7':(youthPRSportFebContents.kpi2 >= '1' && youthPRSportFebContents.kpi2 < '1.2')?'green':(youthPRSportFebContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportFebContents.kpi3 == null)?'grey-2':(youthPRSportFebContents.kpi3 >= '0' && youthPRSportFebContents.kpi3 <= '0.6')?'red':(youthPRSportFebContents.kpi3 > '0.6' && youthPRSportFebContents.kpi3 <= '0.8')?'orange':(youthPRSportFebContents.kpi3 > '0.8' && youthPRSportFebContents.kpi3 < '1')?'yellow-7':(youthPRSportFebContents.kpi3 >= '1' && youthPRSportFebContents.kpi3 < '1.2')?'green':(youthPRSportFebContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportFebContents.kpi4 == null)?'grey-2':(youthPRSportFebContents.kpi4 >= '0' && youthPRSportFebContents.kpi4 <= '0.6')?'red':(youthPRSportFebContents.kpi4 > '0.6' && youthPRSportFebContents.kpi4 <= '0.8')?'orange':(youthPRSportFebContents.kpi4 > '0.8' && youthPRSportFebContents.kpi4 < '1')?'yellow-7':(youthPRSportFebContents.kpi4 >= '1' && youthPRSportFebContents.kpi4 < '1.2')?'green':(youthPRSportFebContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportFebContents.kpi5 == null)?'grey-2':(youthPRSportFebContents.kpi5 >= '0' && youthPRSportFebContents.kpi5 <= '0.6')?'red':(youthPRSportFebContents.kpi5 > '0.6' && youthPRSportFebContents.kpi5 <= '0.8')?'orange':(youthPRSportFebContents.kpi5 > '0.8' && youthPRSportFebContents.kpi5 < '1')?'yellow-7':(youthPRSportFebContents.kpi5 >= '1' && youthPRSportFebContents.kpi5 < '1.2')?'green':(youthPRSportFebContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi5}}
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
                              :color="(youthPRSportMarContents.kpi1 == null)?'grey-2':(youthPRSportMarContents.kpi1 >= '0' && youthPRSportMarContents.kpi1 <= '2.4')?'red':(youthPRSportMarContents.kpi1 > '2.4' && youthPRSportMarContents.kpi1 <= '3.2')?'orange':(youthPRSportMarContents.kpi1 > '3.2' && youthPRSportMarContents.kpi1 < '4')?'yellow-7':(youthPRSportMarContents.kpi1 >= '4' && youthPRSportMarContents.kpi1 < '4.8')?'green':(youthPRSportMarContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMarContents.kpi2 == null)?'grey-2':(youthPRSportMarContents.kpi2 >= '0' && youthPRSportMarContents.kpi2 <= '0.6')?'red':(youthPRSportMarContents.kpi2 > '0.6' && youthPRSportMarContents.kpi2 <= '0.8')?'orange':(youthPRSportMarContents.kpi2 > '0.8' && youthPRSportMarContents.kpi2 < '1')?'yellow-7':(youthPRSportMarContents.kpi2 >= '1' && youthPRSportMarContents.kpi2 < '1.2')?'green':(youthPRSportMarContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMarContents.kpi3 == null)?'grey-2':(youthPRSportMarContents.kpi3 >= '0' && youthPRSportMarContents.kpi3 <= '0.6')?'red':(youthPRSportMarContents.kpi3 > '0.6' && youthPRSportMarContents.kpi3 <= '0.8')?'orange':(youthPRSportMarContents.kpi3 > '0.8' && youthPRSportMarContents.kpi3 < '1')?'yellow-7':(youthPRSportMarContents.kpi3 >= '1' && youthPRSportMarContents.kpi3 < '1.2')?'green':(youthPRSportMarContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMarContents.kpi4 == null)?'grey-2':(youthPRSportMarContents.kpi4 >= '0' && youthPRSportMarContents.kpi4 <= '0.6')?'red':(youthPRSportMarContents.kpi4 > '0.6' && youthPRSportMarContents.kpi4 <= '0.8')?'orange':(youthPRSportMarContents.kpi4 > '0.8' && youthPRSportMarContents.kpi4 < '1')?'yellow-7':(youthPRSportMarContents.kpi4 >= '1' && youthPRSportMarContents.kpi4 < '1.2')?'green':(youthPRSportMarContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMarContents.kpi5 == null)?'grey-2':(youthPRSportMarContents.kpi5 >= '0' && youthPRSportMarContents.kpi5 <= '0.6')?'red':(youthPRSportMarContents.kpi5 > '0.6' && youthPRSportMarContents.kpi5 <= '0.8')?'orange':(youthPRSportMarContents.kpi5 > '0.8' && youthPRSportMarContents.kpi5 < '1')?'yellow-7':(youthPRSportMarContents.kpi5 >= '1' && youthPRSportMarContents.kpi5 < '1.2')?'green':(youthPRSportMarContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi5}}
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
                              :color="(youthPRSportAprContents.kpi1 == null)?'grey-2':(youthPRSportAprContents.kpi1 >= '0' && youthPRSportAprContents.kpi1 <= '2.4')?'red':(youthPRSportAprContents.kpi1 > '2.4' && youthPRSportAprContents.kpi1 <= '3.2')?'orange':(youthPRSportAprContents.kpi1 > '3.2' && youthPRSportAprContents.kpi1 < '4')?'yellow-7':(youthPRSportAprContents.kpi1 >= '4' && youthPRSportAprContents.kpi1 < '4.8')?'green':(youthPRSportAprContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAprContents.kpi2 == null)?'grey-2':(youthPRSportAprContents.kpi2 >= '0' && youthPRSportAprContents.kpi2 <= '0.6')?'red':(youthPRSportAprContents.kpi2 > '0.6' && youthPRSportAprContents.kpi2 <= '0.8')?'orange':(youthPRSportAprContents.kpi2 > '0.8' && youthPRSportAprContents.kpi2 < '1')?'yellow-7':(youthPRSportAprContents.kpi2 >= '1' && youthPRSportAprContents.kpi2 < '1.2')?'green':(youthPRSportAprContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAprContents.kpi3 == null)?'grey-2':(youthPRSportAprContents.kpi3 >= '0' && youthPRSportAprContents.kpi3 <= '0.6')?'red':(youthPRSportAprContents.kpi3 > '0.6' && youthPRSportAprContents.kpi3 <= '0.8')?'orange':(youthPRSportAprContents.kpi3 > '0.8' && youthPRSportAprContents.kpi3 < '1')?'yellow-7':(youthPRSportAprContents.kpi3 >= '1' && youthPRSportAprContents.kpi3 < '1.2')?'green':(youthPRSportAprContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAprContents.kpi4 == null)?'grey-2':(youthPRSportAprContents.kpi4 >= '0' && youthPRSportAprContents.kpi4 <= '0.6')?'red':(youthPRSportAprContents.kpi4 > '0.6' && youthPRSportAprContents.kpi4 <= '0.8')?'orange':(youthPRSportAprContents.kpi4 > '0.8' && youthPRSportAprContents.kpi4 < '1')?'yellow-7':(youthPRSportAprContents.kpi4 >= '1' && youthPRSportAprContents.kpi4 < '1.2')?'green':(youthPRSportAprContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAprContents.kpi5 == null)?'grey-2':(youthPRSportAprContents.kpi5 >= '0' && youthPRSportAprContents.kpi5 <= '0.6')?'red':(youthPRSportAprContents.kpi5 > '0.6' && youthPRSportAprContents.kpi5 <= '0.8')?'orange':(youthPRSportAprContents.kpi5 > '0.8' && youthPRSportAprContents.kpi5 < '1')?'yellow-7':(youthPRSportAprContents.kpi5 >= '1' && youthPRSportAprContents.kpi5 < '1.2')?'green':(youthPRSportAprContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi5}}
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
                              :color="(youthPRSportMayContents.kpi1 == null)?'grey-2':(youthPRSportMayContents.kpi1 >= '0' && youthPRSportMayContents.kpi1 <= '2.4')?'red':(youthPRSportMayContents.kpi1 > '2.4' && youthPRSportMayContents.kpi1 <= '3.2')?'orange':(youthPRSportMayContents.kpi1 > '3.2' && youthPRSportMayContents.kpi1 < '4')?'yellow-7':(youthPRSportMayContents.kpi1 >= '4' && youthPRSportMayContents.kpi1 < '4.8')?'green':(youthPRSportMayContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMayContents.kpi2 == null)?'grey-2':(youthPRSportMayContents.kpi2 >= '0' && youthPRSportMayContents.kpi2 <= '0.6')?'red':(youthPRSportMayContents.kpi2 > '0.6' && youthPRSportMayContents.kpi2 <= '0.8')?'orange':(youthPRSportMayContents.kpi2 > '0.8' && youthPRSportMayContents.kpi2 < '1')?'yellow-7':(youthPRSportMayContents.kpi2 >= '1' && youthPRSportMayContents.kpi2 < '1.2')?'green':(youthPRSportMayContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMayContents.kpi3 == null)?'grey-2':(youthPRSportMayContents.kpi3 >= '0' && youthPRSportMayContents.kpi3 <= '0.6')?'red':(youthPRSportMayContents.kpi3 > '0.6' && youthPRSportMayContents.kpi3 <= '0.8')?'orange':(youthPRSportMayContents.kpi3 > '0.8' && youthPRSportMayContents.kpi3 < '1')?'yellow-7':(youthPRSportMayContents.kpi3 >= '1' && youthPRSportMayContents.kpi3 < '1.2')?'green':(youthPRSportMayContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMayContents.kpi4 == null)?'grey-2':(youthPRSportMayContents.kpi4 >= '0' && youthPRSportMayContents.kpi4 <= '0.6')?'red':(youthPRSportMayContents.kpi4 > '0.6' && youthPRSportMayContents.kpi4 <= '0.8')?'orange':(youthPRSportMayContents.kpi4 > '0.8' && youthPRSportMayContents.kpi4 < '1')?'yellow-7':(youthPRSportMayContents.kpi4 >= '1' && youthPRSportMayContents.kpi4 < '1.2')?'green':(youthPRSportMayContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMayContents.kpi5 == null)?'grey-2':(youthPRSportMayContents.kpi5 >= '0' && youthPRSportMayContents.kpi5 <= '0.6')?'red':(youthPRSportMayContents.kpi5 > '0.6' && youthPRSportMayContents.kpi5 <= '0.8')?'orange':(youthPRSportMayContents.kpi5 > '0.8' && youthPRSportMayContents.kpi5 < '1')?'yellow-7':(youthPRSportMayContents.kpi5 >= '1' && youthPRSportMayContents.kpi5 < '1.2')?'green':(youthPRSportMayContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi5}}
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
                              :color="(youthPRSportJunContents.kpi1 == null)?'grey-2':(youthPRSportJunContents.kpi1 >= '0' && youthPRSportJunContents.kpi1 <= '2.4')?'red':(youthPRSportJunContents.kpi1 > '2.4' && youthPRSportJunContents.kpi1 <= '3.2')?'orange':(youthPRSportJunContents.kpi1 > '3.2' && youthPRSportJunContents.kpi1 < '4')?'yellow-7':(youthPRSportJunContents.kpi1 >= '4' && youthPRSportJunContents.kpi1 < '4.8')?'green':(youthPRSportJunContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJunContents.kpi2 == null)?'grey-2':(youthPRSportJunContents.kpi2 >= '0' && youthPRSportJunContents.kpi2 <= '0.6')?'red':(youthPRSportJunContents.kpi2 > '0.6' && youthPRSportJunContents.kpi2 <= '0.8')?'orange':(youthPRSportJunContents.kpi2 > '0.8' && youthPRSportJunContents.kpi2 < '1')?'yellow-7':(youthPRSportJunContents.kpi2 >= '1' && youthPRSportJunContents.kpi2 < '1.2')?'green':(youthPRSportJunContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJunContents.kpi3 == null)?'grey-2':(youthPRSportJunContents.kpi3 >= '0' && youthPRSportJunContents.kpi3 <= '0.6')?'red':(youthPRSportJunContents.kpi3 > '0.6' && youthPRSportJunContents.kpi3 <= '0.8')?'orange':(youthPRSportJunContents.kpi3 > '0.8' && youthPRSportJunContents.kpi3 < '1')?'yellow-7':(youthPRSportJunContents.kpi3 >= '1' && youthPRSportJunContents.kpi3 < '1.2')?'green':(youthPRSportJunContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJunContents.kpi4 == null)?'grey-2':(youthPRSportJunContents.kpi4 >= '0' && youthPRSportJunContents.kpi4 <= '0.6')?'red':(youthPRSportJunContents.kpi4 > '0.6' && youthPRSportJunContents.kpi4 <= '0.8')?'orange':(youthPRSportJunContents.kpi4 > '0.8' && youthPRSportJunContents.kpi4 < '1')?'yellow-7':(youthPRSportJunContents.kpi4 >= '1' && youthPRSportJunContents.kpi4 < '1.2')?'green':(youthPRSportJunContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJunContents.kpi5 == null)?'grey-2':(youthPRSportJunContents.kpi5 >= '0' && youthPRSportJunContents.kpi5 <= '0.6')?'red':(youthPRSportJunContents.kpi5 > '0.6' && youthPRSportJunContents.kpi5 <= '0.8')?'orange':(youthPRSportJunContents.kpi5 > '0.8' && youthPRSportJunContents.kpi5 < '1')?'yellow-7':(youthPRSportJunContents.kpi5 >= '1' && youthPRSportJunContents.kpi5 < '1.2')?'green':(youthPRSportJunContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi5}}
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
                              :color="(youthPRSportJulContents.kpi1 == null)?'grey-2':(youthPRSportJulContents.kpi1 >= '0' && youthPRSportJulContents.kpi1 <= '2.4')?'red':(youthPRSportJulContents.kpi1 > '2.4' && youthPRSportJulContents.kpi1 <= '3.2')?'orange':(youthPRSportJulContents.kpi1 > '3.2' && youthPRSportJulContents.kpi1 < '4')?'yellow-7':(youthPRSportJulContents.kpi1 >= '4' && youthPRSportJulContents.kpi1 < '4.8')?'green':(youthPRSportJulContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJulContents.kpi2 == null)?'grey-2':(youthPRSportJulContents.kpi2 >= '0' && youthPRSportJulContents.kpi2 <= '0.6')?'red':(youthPRSportJulContents.kpi2 > '0.6' && youthPRSportJulContents.kpi2 <= '0.8')?'orange':(youthPRSportJulContents.kpi2 > '0.8' && youthPRSportJulContents.kpi2 < '1')?'yellow-7':(youthPRSportJulContents.kpi2 >= '1' && youthPRSportJulContents.kpi2 < '1.2')?'green':(youthPRSportJulContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJulContents.kpi3 == null)?'grey-2':(youthPRSportJulContents.kpi3 >= '0' && youthPRSportJulContents.kpi3 <= '0.6')?'red':(youthPRSportJulContents.kpi3 > '0.6' && youthPRSportJulContents.kpi3 <= '0.8')?'orange':(youthPRSportJulContents.kpi3 > '0.8' && youthPRSportJulContents.kpi3 < '1')?'yellow-7':(youthPRSportJulContents.kpi3 >= '1' && youthPRSportJulContents.kpi3 < '1.2')?'green':(youthPRSportJulContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJulContents.kpi4 == null)?'grey-2':(youthPRSportJulContents.kpi4 >= '0' && youthPRSportJulContents.kpi4 <= '0.6')?'red':(youthPRSportJulContents.kpi4 > '0.6' && youthPRSportJulContents.kpi4 <= '0.8')?'orange':(youthPRSportJulContents.kpi4 > '0.8' && youthPRSportJulContents.kpi4 < '1')?'yellow-7':(youthPRSportJulContents.kpi4 >= '1' && youthPRSportJulContents.kpi4 < '1.2')?'green':(youthPRSportJulContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJulContents.kpi5 == null)?'grey-2':(youthPRSportJulContents.kpi5 >= '0' && youthPRSportJulContents.kpi5 <= '0.6')?'red':(youthPRSportJulContents.kpi5 > '0.6' && youthPRSportJulContents.kpi5 <= '0.8')?'orange':(youthPRSportJulContents.kpi5 > '0.8' && youthPRSportJulContents.kpi5 < '1')?'yellow-7':(youthPRSportJulContents.kpi5 >= '1' && youthPRSportJulContents.kpi5 < '1.2')?'green':(youthPRSportJulContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi5}}
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
                              :color="(youthPRSportAugContents.kpi1 == null)?'grey-2':(youthPRSportAugContents.kpi1 >= '0' && youthPRSportAugContents.kpi1 <= '2.4')?'red':(youthPRSportAugContents.kpi1 > '2.4' && youthPRSportAugContents.kpi1 <= '3.2')?'orange':(youthPRSportAugContents.kpi1 > '3.2' && youthPRSportAugContents.kpi1 < '4')?'yellow-7':(youthPRSportAugContents.kpi1 >= '4' && youthPRSportAugContents.kpi1 < '4.8')?'green':(youthPRSportAugContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAugContents.kpi2 == null)?'grey-2':(youthPRSportAugContents.kpi2 >= '0' && youthPRSportAugContents.kpi2 <= '0.6')?'red':(youthPRSportAugContents.kpi2 > '0.6' && youthPRSportAugContents.kpi2 <= '0.8')?'orange':(youthPRSportAugContents.kpi2 > '0.8' && youthPRSportAugContents.kpi2 < '1')?'yellow-7':(youthPRSportAugContents.kpi2 >= '1' && youthPRSportAugContents.kpi2 < '1.2')?'green':(youthPRSportAugContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAugContents.kpi3 == null)?'grey-2':(youthPRSportAugContents.kpi3 >= '0' && youthPRSportAugContents.kpi3 <= '0.6')?'red':(youthPRSportAugContents.kpi3 > '0.6' && youthPRSportAugContents.kpi3 <= '0.8')?'orange':(youthPRSportAugContents.kpi3 > '0.8' && youthPRSportAugContents.kpi3 < '1')?'yellow-7':(youthPRSportAugContents.kpi3 >= '1' && youthPRSportAugContents.kpi3 < '1.2')?'green':(youthPRSportAugContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAugContents.kpi4 == null)?'grey-2':(youthPRSportAugContents.kpi4 >= '0' && youthPRSportAugContents.kpi4 <= '0.6')?'red':(youthPRSportAugContents.kpi4 > '0.6' && youthPRSportAugContents.kpi4 <= '0.8')?'orange':(youthPRSportAugContents.kpi4 > '0.8' && youthPRSportAugContents.kpi4 < '1')?'yellow-7':(youthPRSportAugContents.kpi4 >= '1' && youthPRSportAugContents.kpi4 < '1.2')?'green':(youthPRSportAugContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAugContents.kpi5 == null)?'grey-2':(youthPRSportAugContents.kpi5 >= '0' && youthPRSportAugContents.kpi5 <= '0.6')?'red':(youthPRSportAugContents.kpi5 > '0.6' && youthPRSportAugContents.kpi5 <= '0.8')?'orange':(youthPRSportAugContents.kpi5 > '0.8' && youthPRSportAugContents.kpi5 < '1')?'yellow-7':(youthPRSportAugContents.kpi5 >= '1' && youthPRSportAugContents.kpi5 < '1.2')?'green':(youthPRSportAugContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi5}}
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
                              :color="(youthPRSportSepContents.kpi1 == null)?'grey-2':(youthPRSportSepContents.kpi1 >= '0' && youthPRSportSepContents.kpi1 <= '2.4')?'red':(youthPRSportSepContents.kpi1 > '2.4' && youthPRSportSepContents.kpi1 <= '3.2')?'orange':(youthPRSportSepContents.kpi1 > '3.2' && youthPRSportSepContents.kpi1 < '4')?'yellow-7':(youthPRSportSepContents.kpi1 >= '4' && youthPRSportSepContents.kpi1 < '4.8')?'green':(youthPRSportSepContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportSepContents.kpi2 == null)?'grey-2':(youthPRSportSepContents.kpi2 >= '0' && youthPRSportSepContents.kpi2 <= '0.6')?'red':(youthPRSportSepContents.kpi2 > '0.6' && youthPRSportSepContents.kpi2 <= '0.8')?'orange':(youthPRSportSepContents.kpi2 > '0.8' && youthPRSportSepContents.kpi2 < '1')?'yellow-7':(youthPRSportSepContents.kpi2 >= '1' && youthPRSportSepContents.kpi2 < '1.2')?'green':(youthPRSportSepContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportSepContents.kpi3 == null)?'grey-2':(youthPRSportSepContents.kpi3 >= '0' && youthPRSportSepContents.kpi3 <= '0.6')?'red':(youthPRSportSepContents.kpi3 > '0.6' && youthPRSportSepContents.kpi3 <= '0.8')?'orange':(youthPRSportSepContents.kpi3 > '0.8' && youthPRSportSepContents.kpi3 < '1')?'yellow-7':(youthPRSportSepContents.kpi3 >= '1' && youthPRSportSepContents.kpi3 < '1.2')?'green':(youthPRSportSepContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportSepContents.kpi4 == null)?'grey-2':(youthPRSportSepContents.kpi4 >= '0' && youthPRSportSepContents.kpi4 <= '0.6')?'red':(youthPRSportSepContents.kpi4 > '0.6' && youthPRSportSepContents.kpi4 <= '0.8')?'orange':(youthPRSportSepContents.kpi4 > '0.8' && youthPRSportSepContents.kpi4 < '1')?'yellow-7':(youthPRSportSepContents.kpi4 >= '1' && youthPRSportSepContents.kpi4 < '1.2')?'green':(youthPRSportSepContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportSepContents.kpi5 == null)?'grey-2':(youthPRSportSepContents.kpi5 >= '0' && youthPRSportSepContents.kpi5 <= '0.6')?'red':(youthPRSportSepContents.kpi5 > '0.6' && youthPRSportSepContents.kpi5 <= '0.8')?'orange':(youthPRSportSepContents.kpi5 > '0.8' && youthPRSportSepContents.kpi5 < '1')?'yellow-7':(youthPRSportSepContents.kpi5 >= '1' && youthPRSportSepContents.kpi5 < '1.2')?'green':(youthPRSportSepContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi5}}
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
                              :color="(youthPRSportOctContents.kpi1 == null)?'grey-2':(youthPRSportOctContents.kpi1 >= '0' && youthPRSportOctContents.kpi1 <= '2.4')?'red':(youthPRSportOctContents.kpi1 > '2.4' && youthPRSportOctContents.kpi1 <= '3.2')?'orange':(youthPRSportOctContents.kpi1 > '3.2' && youthPRSportOctContents.kpi1 < '4')?'yellow-7':(youthPRSportOctContents.kpi1 >= '4' && youthPRSportOctContents.kpi1 < '4.8')?'green':(youthPRSportOctContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportOctContents.kpi2 == null)?'grey-2':(youthPRSportOctContents.kpi2 >= '0' && youthPRSportOctContents.kpi2 <= '0.6')?'red':(youthPRSportOctContents.kpi2 > '0.6' && youthPRSportOctContents.kpi2 <= '0.8')?'orange':(youthPRSportOctContents.kpi2 > '0.8' && youthPRSportOctContents.kpi2 < '1')?'yellow-7':(youthPRSportOctContents.kpi2 >= '1' && youthPRSportOctContents.kpi2 < '1.2')?'green':(youthPRSportOctContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportOctContents.kpi3 == null)?'grey-2':(youthPRSportOctContents.kpi3 >= '0' && youthPRSportOctContents.kpi3 <= '0.6')?'red':(youthPRSportOctContents.kpi3 > '0.6' && youthPRSportOctContents.kpi3 <= '0.8')?'orange':(youthPRSportOctContents.kpi3 > '0.8' && youthPRSportOctContents.kpi3 < '1')?'yellow-7':(youthPRSportOctContents.kpi3 >= '1' && youthPRSportOctContents.kpi3 < '1.2')?'green':(youthPRSportOctContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportOctContents.kpi4 == null)?'grey-2':(youthPRSportOctContents.kpi4 >= '0' && youthPRSportOctContents.kpi4 <= '0.6')?'red':(youthPRSportOctContents.kpi4 > '0.6' && youthPRSportOctContents.kpi4 <= '0.8')?'orange':(youthPRSportOctContents.kpi4 > '0.8' && youthPRSportOctContents.kpi4 < '1')?'yellow-7':(youthPRSportOctContents.kpi4 >= '1' && youthPRSportOctContents.kpi4 < '1.2')?'green':(youthPRSportOctContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportOctContents.kpi5 == null)?'grey-2':(youthPRSportOctContents.kpi5 >= '0' && youthPRSportOctContents.kpi5 <= '0.6')?'red':(youthPRSportOctContents.kpi5 > '0.6' && youthPRSportOctContents.kpi5 <= '0.8')?'orange':(youthPRSportOctContents.kpi5 > '0.8' && youthPRSportOctContents.kpi5 < '1')?'yellow-7':(youthPRSportOctContents.kpi5 >= '1' && youthPRSportOctContents.kpi5 < '1.2')?'green':(youthPRSportOctContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi5}}
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
                              :color="(youthPRSportNovContents.kpi1 == null)?'grey-2':(youthPRSportNovContents.kpi1 >= '0' && youthPRSportNovContents.kpi1 <= '2.4')?'red':(youthPRSportNovContents.kpi1 > '2.4' && youthPRSportNovContents.kpi1 <= '3.2')?'orange':(youthPRSportNovContents.kpi1 > '3.2' && youthPRSportNovContents.kpi1 < '4')?'yellow-7':(youthPRSportNovContents.kpi1 >= '4' && youthPRSportNovContents.kpi1 < '4.8')?'green':(youthPRSportNovContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportNovContents.kpi2 == null)?'grey-2':(youthPRSportNovContents.kpi2 >= '0' && youthPRSportNovContents.kpi2 <= '0.6')?'red':(youthPRSportNovContents.kpi2 > '0.6' && youthPRSportNovContents.kpi2 <= '0.8')?'orange':(youthPRSportNovContents.kpi2 > '0.8' && youthPRSportNovContents.kpi2 < '1')?'yellow-7':(youthPRSportNovContents.kpi2 >= '1' && youthPRSportNovContents.kpi2 < '1.2')?'green':(youthPRSportNovContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportNovContents.kpi3 == null)?'grey-2':(youthPRSportNovContents.kpi3 >= '0' && youthPRSportNovContents.kpi3 <= '0.6')?'red':(youthPRSportNovContents.kpi3 > '0.6' && youthPRSportNovContents.kpi3 <= '0.8')?'orange':(youthPRSportNovContents.kpi3 > '0.8' && youthPRSportNovContents.kpi3 < '1')?'yellow-7':(youthPRSportNovContents.kpi3 >= '1' && youthPRSportNovContents.kpi3 < '1.2')?'green':(youthPRSportNovContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportNovContents.kpi4 == null)?'grey-2':(youthPRSportNovContents.kpi4 >= '0' && youthPRSportNovContents.kpi4 <= '0.6')?'red':(youthPRSportNovContents.kpi4 > '0.6' && youthPRSportNovContents.kpi4 <= '0.8')?'orange':(youthPRSportNovContents.kpi4 > '0.8' && youthPRSportNovContents.kpi4 < '1')?'yellow-7':(youthPRSportNovContents.kpi4 >= '1' && youthPRSportNovContents.kpi4 < '1.2')?'green':(youthPRSportNovContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportNovContents.kpi5 == null)?'grey-2':(youthPRSportNovContents.kpi5 >= '0' && youthPRSportNovContents.kpi5 <= '0.6')?'red':(youthPRSportNovContents.kpi5 > '0.6' && youthPRSportNovContents.kpi5 <= '0.8')?'orange':(youthPRSportNovContents.kpi5 > '0.8' && youthPRSportNovContents.kpi5 < '1')?'yellow-7':(youthPRSportNovContents.kpi5 >= '1' && youthPRSportNovContents.kpi5 < '1.2')?'green':(youthPRSportNovContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi5}}
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
                              :color="(youthPRSportDecContents.kpi1 == null)?'grey-2':(youthPRSportDecContents.kpi1 >= '0' && youthPRSportDecContents.kpi1 <= '2.4')?'red':(youthPRSportDecContents.kpi1 > '2.4' && youthPRSportDecContents.kpi1 <= '3.2')?'orange':(youthPRSportDecContents.kpi1 > '3.2' && youthPRSportDecContents.kpi1 < '4')?'yellow-7':(youthPRSportDecContents.kpi1 >= '4' && youthPRSportDecContents.kpi1 < '4.8')?'green':(youthPRSportDecContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportDecContents.kpi2 == null)?'grey-2':(youthPRSportDecContents.kpi2 >= '0' && youthPRSportDecContents.kpi2 <= '0.6')?'red':(youthPRSportDecContents.kpi2 > '0.6' && youthPRSportDecContents.kpi2 <= '0.8')?'orange':(youthPRSportDecContents.kpi2 > '0.8' && youthPRSportDecContents.kpi2 < '1')?'yellow-7':(youthPRSportDecContents.kpi2 >= '1' && youthPRSportDecContents.kpi2 < '1.2')?'green':(youthPRSportDecContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportDecContents.kpi3 == null)?'grey-2':(youthPRSportDecContents.kpi3 >= '0' && youthPRSportDecContents.kpi3 <= '0.6')?'red':(youthPRSportDecContents.kpi3 > '0.6' && youthPRSportDecContents.kpi3 <= '0.8')?'orange':(youthPRSportDecContents.kpi3 > '0.8' && youthPRSportDecContents.kpi3 < '1')?'yellow-7':(youthPRSportDecContents.kpi3 >= '1' && youthPRSportDecContents.kpi3 < '1.2')?'green':(youthPRSportDecContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportDecContents.kpi4 == null)?'grey-2':(youthPRSportDecContents.kpi4 >= '0' && youthPRSportDecContents.kpi4 <= '0.6')?'red':(youthPRSportDecContents.kpi4 > '0.6' && youthPRSportDecContents.kpi4 <= '0.8')?'orange':(youthPRSportDecContents.kpi4 > '0.8' && youthPRSportDecContents.kpi4 < '1')?'yellow-7':(youthPRSportDecContents.kpi4 >= '1' && youthPRSportDecContents.kpi4 < '1.2')?'green':(youthPRSportDecContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportDecContents.kpi5 == null)?'grey-2':(youthPRSportDecContents.kpi5 >= '0' && youthPRSportDecContents.kpi5 <= '0.6')?'red':(youthPRSportDecContents.kpi5 > '0.6' && youthPRSportDecContents.kpi5 <= '0.8')?'orange':(youthPRSportDecContents.kpi5 > '0.8' && youthPRSportDecContents.kpi5 < '1')?'yellow-7':(youthPRSportDecContents.kpi5 >= '1' && youthPRSportDecContents.kpi5 < '1.2')?'green':(youthPRSportDecContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi5}}
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
                                <q-tooltip># of unique children</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of total children</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of unique youth</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip># of total youth</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 5
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
                              :color="(youthPRSportJanContents.kpi1 == null)?'grey-2':(youthPRSportJanContents.kpi1 >= '0' && youthPRSportJanContents.kpi1 <= '2.4')?'red':(youthPRSportJanContents.kpi1 > '2.4' && youthPRSportJanContents.kpi1 <= '3.2')?'orange':(youthPRSportJanContents.kpi1 > '3.2' && youthPRSportJanContents.kpi1 < '4')?'yellow-7':(youthPRSportJanContents.kpi1 >= '4' && youthPRSportJanContents.kpi1 < '4.8')?'green':(youthPRSportJanContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJanContents.kpi2 == null)?'grey-2':(youthPRSportJanContents.kpi2 >= '0' && youthPRSportJanContents.kpi2 <= '0.6')?'red':(youthPRSportJanContents.kpi2 > '0.6' && youthPRSportJanContents.kpi2 <= '0.8')?'orange':(youthPRSportJanContents.kpi2 > '0.8' && youthPRSportJanContents.kpi2 < '1')?'yellow-7':(youthPRSportJanContents.kpi2 >= '1' && youthPRSportJanContents.kpi2 < '1.2')?'green':(youthPRSportJanContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJanContents.kpi3 == null)?'grey-2':(youthPRSportJanContents.kpi3 >= '0' && youthPRSportJanContents.kpi3 <= '0.6')?'red':(youthPRSportJanContents.kpi3 > '0.6' && youthPRSportJanContents.kpi3 <= '0.8')?'orange':(youthPRSportJanContents.kpi3 > '0.8' && youthPRSportJanContents.kpi3 < '1')?'yellow-7':(youthPRSportJanContents.kpi3 >= '1' && youthPRSportJanContents.kpi3 < '1.2')?'green':(youthPRSportJanContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJanContents.kpi4 == null)?'grey-2':(youthPRSportJanContents.kpi4 >= '0' && youthPRSportJanContents.kpi4 <= '0.6')?'red':(youthPRSportJanContents.kpi4 > '0.6' && youthPRSportJanContents.kpi4 <= '0.8')?'orange':(youthPRSportJanContents.kpi4 > '0.8' && youthPRSportJanContents.kpi4 < '1')?'yellow-7':(youthPRSportJanContents.kpi4 >= '1' && youthPRSportJanContents.kpi4 < '1.2')?'green':(youthPRSportJanContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJanContents.kpi5 == null)?'grey-2':(youthPRSportJanContents.kpi5 >= '0' && youthPRSportJanContents.kpi5 <= '0.6')?'red':(youthPRSportJanContents.kpi5 > '0.6' && youthPRSportJanContents.kpi5 <= '0.8')?'orange':(youthPRSportJanContents.kpi5 > '0.8' && youthPRSportJanContents.kpi5 < '1')?'yellow-7':(youthPRSportJanContents.kpi5 >= '1' && youthPRSportJanContents.kpi5 < '1.2')?'green':(youthPRSportJanContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi5}}
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
                              :color="(youthPRSportFebContents.kpi1 == null)?'grey-2':(youthPRSportFebContents.kpi1 >= '0' && youthPRSportFebContents.kpi1 <= '2.4')?'red':(youthPRSportFebContents.kpi1 > '2.4' && youthPRSportFebContents.kpi1 <= '3.2')?'orange':(youthPRSportFebContents.kpi1 > '3.2' && youthPRSportFebContents.kpi1 < '4')?'yellow-7':(youthPRSportFebContents.kpi1 >= '4' && youthPRSportFebContents.kpi1 < '4.8')?'green':(youthPRSportFebContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportFebContents.kpi2 == null)?'grey-2':(youthPRSportFebContents.kpi2 >= '0' && youthPRSportFebContents.kpi2 <= '0.6')?'red':(youthPRSportFebContents.kpi2 > '0.6' && youthPRSportFebContents.kpi2 <= '0.8')?'orange':(youthPRSportFebContents.kpi2 > '0.8' && youthPRSportFebContents.kpi2 < '1')?'yellow-7':(youthPRSportFebContents.kpi2 >= '1' && youthPRSportFebContents.kpi2 < '1.2')?'green':(youthPRSportFebContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportFebContents.kpi3 == null)?'grey-2':(youthPRSportFebContents.kpi3 >= '0' && youthPRSportFebContents.kpi3 <= '0.6')?'red':(youthPRSportFebContents.kpi3 > '0.6' && youthPRSportFebContents.kpi3 <= '0.8')?'orange':(youthPRSportFebContents.kpi3 > '0.8' && youthPRSportFebContents.kpi3 < '1')?'yellow-7':(youthPRSportFebContents.kpi3 >= '1' && youthPRSportFebContents.kpi3 < '1.2')?'green':(youthPRSportFebContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportFebContents.kpi4 == null)?'grey-2':(youthPRSportFebContents.kpi4 >= '0' && youthPRSportFebContents.kpi4 <= '0.6')?'red':(youthPRSportFebContents.kpi4 > '0.6' && youthPRSportFebContents.kpi4 <= '0.8')?'orange':(youthPRSportFebContents.kpi4 > '0.8' && youthPRSportFebContents.kpi4 < '1')?'yellow-7':(youthPRSportFebContents.kpi4 >= '1' && youthPRSportFebContents.kpi4 < '1.2')?'green':(youthPRSportFebContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportFebContents.kpi5 == null)?'grey-2':(youthPRSportFebContents.kpi5 >= '0' && youthPRSportFebContents.kpi5 <= '0.6')?'red':(youthPRSportFebContents.kpi5 > '0.6' && youthPRSportFebContents.kpi5 <= '0.8')?'orange':(youthPRSportFebContents.kpi5 > '0.8' && youthPRSportFebContents.kpi5 < '1')?'yellow-7':(youthPRSportFebContents.kpi5 >= '1' && youthPRSportFebContents.kpi5 < '1.2')?'green':(youthPRSportFebContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi5}}
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
                              :color="(youthPRSportMarContents.kpi1 == null)?'grey-2':(youthPRSportMarContents.kpi1 >= '0' && youthPRSportMarContents.kpi1 <= '2.4')?'red':(youthPRSportMarContents.kpi1 > '2.4' && youthPRSportMarContents.kpi1 <= '3.2')?'orange':(youthPRSportMarContents.kpi1 > '3.2' && youthPRSportMarContents.kpi1 < '4')?'yellow-7':(youthPRSportMarContents.kpi1 >= '4' && youthPRSportMarContents.kpi1 < '4.8')?'green':(youthPRSportMarContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMarContents.kpi2 == null)?'grey-2':(youthPRSportMarContents.kpi2 >= '0' && youthPRSportMarContents.kpi2 <= '0.6')?'red':(youthPRSportMarContents.kpi2 > '0.6' && youthPRSportMarContents.kpi2 <= '0.8')?'orange':(youthPRSportMarContents.kpi2 > '0.8' && youthPRSportMarContents.kpi2 < '1')?'yellow-7':(youthPRSportMarContents.kpi2 >= '1' && youthPRSportMarContents.kpi2 < '1.2')?'green':(youthPRSportMarContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMarContents.kpi3 == null)?'grey-2':(youthPRSportMarContents.kpi3 >= '0' && youthPRSportMarContents.kpi3 <= '0.6')?'red':(youthPRSportMarContents.kpi3 > '0.6' && youthPRSportMarContents.kpi3 <= '0.8')?'orange':(youthPRSportMarContents.kpi3 > '0.8' && youthPRSportMarContents.kpi3 < '1')?'yellow-7':(youthPRSportMarContents.kpi3 >= '1' && youthPRSportMarContents.kpi3 < '1.2')?'green':(youthPRSportMarContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMarContents.kpi4 == null)?'grey-2':(youthPRSportMarContents.kpi4 >= '0' && youthPRSportMarContents.kpi4 <= '0.6')?'red':(youthPRSportMarContents.kpi4 > '0.6' && youthPRSportMarContents.kpi4 <= '0.8')?'orange':(youthPRSportMarContents.kpi4 > '0.8' && youthPRSportMarContents.kpi4 < '1')?'yellow-7':(youthPRSportMarContents.kpi4 >= '1' && youthPRSportMarContents.kpi4 < '1.2')?'green':(youthPRSportMarContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMarContents.kpi5 == null)?'grey-2':(youthPRSportMarContents.kpi5 >= '0' && youthPRSportMarContents.kpi5 <= '0.6')?'red':(youthPRSportMarContents.kpi5 > '0.6' && youthPRSportMarContents.kpi5 <= '0.8')?'orange':(youthPRSportMarContents.kpi5 > '0.8' && youthPRSportMarContents.kpi5 < '1')?'yellow-7':(youthPRSportMarContents.kpi5 >= '1' && youthPRSportMarContents.kpi5 < '1.2')?'green':(youthPRSportMarContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi5}}
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
                              :color="(youthPRSportAprContents.kpi1 == null)?'grey-2':(youthPRSportAprContents.kpi1 >= '0' && youthPRSportAprContents.kpi1 <= '2.4')?'red':(youthPRSportAprContents.kpi1 > '2.4' && youthPRSportAprContents.kpi1 <= '3.2')?'orange':(youthPRSportAprContents.kpi1 > '3.2' && youthPRSportAprContents.kpi1 < '4')?'yellow-7':(youthPRSportAprContents.kpi1 >= '4' && youthPRSportAprContents.kpi1 < '4.8')?'green':(youthPRSportAprContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAprContents.kpi2 == null)?'grey-2':(youthPRSportAprContents.kpi2 >= '0' && youthPRSportAprContents.kpi2 <= '0.6')?'red':(youthPRSportAprContents.kpi2 > '0.6' && youthPRSportAprContents.kpi2 <= '0.8')?'orange':(youthPRSportAprContents.kpi2 > '0.8' && youthPRSportAprContents.kpi2 < '1')?'yellow-7':(youthPRSportAprContents.kpi2 >= '1' && youthPRSportAprContents.kpi2 < '1.2')?'green':(youthPRSportAprContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAprContents.kpi3 == null)?'grey-2':(youthPRSportAprContents.kpi3 >= '0' && youthPRSportAprContents.kpi3 <= '0.6')?'red':(youthPRSportAprContents.kpi3 > '0.6' && youthPRSportAprContents.kpi3 <= '0.8')?'orange':(youthPRSportAprContents.kpi3 > '0.8' && youthPRSportAprContents.kpi3 < '1')?'yellow-7':(youthPRSportAprContents.kpi3 >= '1' && youthPRSportAprContents.kpi3 < '1.2')?'green':(youthPRSportAprContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAprContents.kpi4 == null)?'grey-2':(youthPRSportAprContents.kpi4 >= '0' && youthPRSportAprContents.kpi4 <= '0.6')?'red':(youthPRSportAprContents.kpi4 > '0.6' && youthPRSportAprContents.kpi4 <= '0.8')?'orange':(youthPRSportAprContents.kpi4 > '0.8' && youthPRSportAprContents.kpi4 < '1')?'yellow-7':(youthPRSportAprContents.kpi4 >= '1' && youthPRSportAprContents.kpi4 < '1.2')?'green':(youthPRSportAprContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAprContents.kpi5 == null)?'grey-2':(youthPRSportAprContents.kpi5 >= '0' && youthPRSportAprContents.kpi5 <= '0.6')?'red':(youthPRSportAprContents.kpi5 > '0.6' && youthPRSportAprContents.kpi5 <= '0.8')?'orange':(youthPRSportAprContents.kpi5 > '0.8' && youthPRSportAprContents.kpi5 < '1')?'yellow-7':(youthPRSportAprContents.kpi5 >= '1' && youthPRSportAprContents.kpi5 < '1.2')?'green':(youthPRSportAprContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi5}}
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
                              :color="(youthPRSportMayContents.kpi1 == null)?'grey-2':(youthPRSportMayContents.kpi1 >= '0' && youthPRSportMayContents.kpi1 <= '2.4')?'red':(youthPRSportMayContents.kpi1 > '2.4' && youthPRSportMayContents.kpi1 <= '3.2')?'orange':(youthPRSportMayContents.kpi1 > '3.2' && youthPRSportMayContents.kpi1 < '4')?'yellow-7':(youthPRSportMayContents.kpi1 >= '4' && youthPRSportMayContents.kpi1 < '4.8')?'green':(youthPRSportMayContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMayContents.kpi2 == null)?'grey-2':(youthPRSportMayContents.kpi2 >= '0' && youthPRSportMayContents.kpi2 <= '0.6')?'red':(youthPRSportMayContents.kpi2 > '0.6' && youthPRSportMayContents.kpi2 <= '0.8')?'orange':(youthPRSportMayContents.kpi2 > '0.8' && youthPRSportMayContents.kpi2 < '1')?'yellow-7':(youthPRSportMayContents.kpi2 >= '1' && youthPRSportMayContents.kpi2 < '1.2')?'green':(youthPRSportMayContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMayContents.kpi3 == null)?'grey-2':(youthPRSportMayContents.kpi3 >= '0' && youthPRSportMayContents.kpi3 <= '0.6')?'red':(youthPRSportMayContents.kpi3 > '0.6' && youthPRSportMayContents.kpi3 <= '0.8')?'orange':(youthPRSportMayContents.kpi3 > '0.8' && youthPRSportMayContents.kpi3 < '1')?'yellow-7':(youthPRSportMayContents.kpi3 >= '1' && youthPRSportMayContents.kpi3 < '1.2')?'green':(youthPRSportMayContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMayContents.kpi4 == null)?'grey-2':(youthPRSportMayContents.kpi4 >= '0' && youthPRSportMayContents.kpi4 <= '0.6')?'red':(youthPRSportMayContents.kpi4 > '0.6' && youthPRSportMayContents.kpi4 <= '0.8')?'orange':(youthPRSportMayContents.kpi4 > '0.8' && youthPRSportMayContents.kpi4 < '1')?'yellow-7':(youthPRSportMayContents.kpi4 >= '1' && youthPRSportMayContents.kpi4 < '1.2')?'green':(youthPRSportMayContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMayContents.kpi5 == null)?'grey-2':(youthPRSportMayContents.kpi5 >= '0' && youthPRSportMayContents.kpi5 <= '0.6')?'red':(youthPRSportMayContents.kpi5 > '0.6' && youthPRSportMayContents.kpi5 <= '0.8')?'orange':(youthPRSportMayContents.kpi5 > '0.8' && youthPRSportMayContents.kpi5 < '1')?'yellow-7':(youthPRSportMayContents.kpi5 >= '1' && youthPRSportMayContents.kpi5 < '1.2')?'green':(youthPRSportMayContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi5}}
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
                              :color="(youthPRSportJunContents.kpi1 == null)?'grey-2':(youthPRSportJunContents.kpi1 >= '0' && youthPRSportJunContents.kpi1 <= '2.4')?'red':(youthPRSportJunContents.kpi1 > '2.4' && youthPRSportJunContents.kpi1 <= '3.2')?'orange':(youthPRSportJunContents.kpi1 > '3.2' && youthPRSportJunContents.kpi1 < '4')?'yellow-7':(youthPRSportJunContents.kpi1 >= '4' && youthPRSportJunContents.kpi1 < '4.8')?'green':(youthPRSportJunContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJunContents.kpi2 == null)?'grey-2':(youthPRSportJunContents.kpi2 >= '0' && youthPRSportJunContents.kpi2 <= '0.6')?'red':(youthPRSportJunContents.kpi2 > '0.6' && youthPRSportJunContents.kpi2 <= '0.8')?'orange':(youthPRSportJunContents.kpi2 > '0.8' && youthPRSportJunContents.kpi2 < '1')?'yellow-7':(youthPRSportJunContents.kpi2 >= '1' && youthPRSportJunContents.kpi2 < '1.2')?'green':(youthPRSportJunContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJunContents.kpi3 == null)?'grey-2':(youthPRSportJunContents.kpi3 >= '0' && youthPRSportJunContents.kpi3 <= '0.6')?'red':(youthPRSportJunContents.kpi3 > '0.6' && youthPRSportJunContents.kpi3 <= '0.8')?'orange':(youthPRSportJunContents.kpi3 > '0.8' && youthPRSportJunContents.kpi3 < '1')?'yellow-7':(youthPRSportJunContents.kpi3 >= '1' && youthPRSportJunContents.kpi3 < '1.2')?'green':(youthPRSportJunContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJunContents.kpi4 == null)?'grey-2':(youthPRSportJunContents.kpi4 >= '0' && youthPRSportJunContents.kpi4 <= '0.6')?'red':(youthPRSportJunContents.kpi4 > '0.6' && youthPRSportJunContents.kpi4 <= '0.8')?'orange':(youthPRSportJunContents.kpi4 > '0.8' && youthPRSportJunContents.kpi4 < '1')?'yellow-7':(youthPRSportJunContents.kpi4 >= '1' && youthPRSportJunContents.kpi4 < '1.2')?'green':(youthPRSportJunContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJunContents.kpi5 == null)?'grey-2':(youthPRSportJunContents.kpi5 >= '0' && youthPRSportJunContents.kpi5 <= '0.6')?'red':(youthPRSportJunContents.kpi5 > '0.6' && youthPRSportJunContents.kpi5 <= '0.8')?'orange':(youthPRSportJunContents.kpi5 > '0.8' && youthPRSportJunContents.kpi5 < '1')?'yellow-7':(youthPRSportJunContents.kpi5 >= '1' && youthPRSportJunContents.kpi5 < '1.2')?'green':(youthPRSportJunContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi5}}
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
                              :color="(youthPRSportJulContents.kpi1 == null)?'grey-2':(youthPRSportJulContents.kpi1 >= '0' && youthPRSportJulContents.kpi1 <= '2.4')?'red':(youthPRSportJulContents.kpi1 > '2.4' && youthPRSportJulContents.kpi1 <= '3.2')?'orange':(youthPRSportJulContents.kpi1 > '3.2' && youthPRSportJulContents.kpi1 < '4')?'yellow-7':(youthPRSportJulContents.kpi1 >= '4' && youthPRSportJulContents.kpi1 < '4.8')?'green':(youthPRSportJulContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJulContents.kpi2 == null)?'grey-2':(youthPRSportJulContents.kpi2 >= '0' && youthPRSportJulContents.kpi2 <= '0.6')?'red':(youthPRSportJulContents.kpi2 > '0.6' && youthPRSportJulContents.kpi2 <= '0.8')?'orange':(youthPRSportJulContents.kpi2 > '0.8' && youthPRSportJulContents.kpi2 < '1')?'yellow-7':(youthPRSportJulContents.kpi2 >= '1' && youthPRSportJulContents.kpi2 < '1.2')?'green':(youthPRSportJulContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJulContents.kpi3 == null)?'grey-2':(youthPRSportJulContents.kpi3 >= '0' && youthPRSportJulContents.kpi3 <= '0.6')?'red':(youthPRSportJulContents.kpi3 > '0.6' && youthPRSportJulContents.kpi3 <= '0.8')?'orange':(youthPRSportJulContents.kpi3 > '0.8' && youthPRSportJulContents.kpi3 < '1')?'yellow-7':(youthPRSportJulContents.kpi3 >= '1' && youthPRSportJulContents.kpi3 < '1.2')?'green':(youthPRSportJulContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJulContents.kpi4 == null)?'grey-2':(youthPRSportJulContents.kpi4 >= '0' && youthPRSportJulContents.kpi4 <= '0.6')?'red':(youthPRSportJulContents.kpi4 > '0.6' && youthPRSportJulContents.kpi4 <= '0.8')?'orange':(youthPRSportJulContents.kpi4 > '0.8' && youthPRSportJulContents.kpi4 < '1')?'yellow-7':(youthPRSportJulContents.kpi4 >= '1' && youthPRSportJulContents.kpi4 < '1.2')?'green':(youthPRSportJulContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJulContents.kpi5 == null)?'grey-2':(youthPRSportJulContents.kpi5 >= '0' && youthPRSportJulContents.kpi5 <= '0.6')?'red':(youthPRSportJulContents.kpi5 > '0.6' && youthPRSportJulContents.kpi5 <= '0.8')?'orange':(youthPRSportJulContents.kpi5 > '0.8' && youthPRSportJulContents.kpi5 < '1')?'yellow-7':(youthPRSportJulContents.kpi5 >= '1' && youthPRSportJulContents.kpi5 < '1.2')?'green':(youthPRSportJulContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi5}}
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
                              :color="(youthPRSportAugContents.kpi1 == null)?'grey-2':(youthPRSportAugContents.kpi1 >= '0' && youthPRSportAugContents.kpi1 <= '2.4')?'red':(youthPRSportAugContents.kpi1 > '2.4' && youthPRSportAugContents.kpi1 <= '3.2')?'orange':(youthPRSportAugContents.kpi1 > '3.2' && youthPRSportAugContents.kpi1 < '4')?'yellow-7':(youthPRSportAugContents.kpi1 >= '4' && youthPRSportAugContents.kpi1 < '4.8')?'green':(youthPRSportAugContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAugContents.kpi2 == null)?'grey-2':(youthPRSportAugContents.kpi2 >= '0' && youthPRSportAugContents.kpi2 <= '0.6')?'red':(youthPRSportAugContents.kpi2 > '0.6' && youthPRSportAugContents.kpi2 <= '0.8')?'orange':(youthPRSportAugContents.kpi2 > '0.8' && youthPRSportAugContents.kpi2 < '1')?'yellow-7':(youthPRSportAugContents.kpi2 >= '1' && youthPRSportAugContents.kpi2 < '1.2')?'green':(youthPRSportAugContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAugContents.kpi3 == null)?'grey-2':(youthPRSportAugContents.kpi3 >= '0' && youthPRSportAugContents.kpi3 <= '0.6')?'red':(youthPRSportAugContents.kpi3 > '0.6' && youthPRSportAugContents.kpi3 <= '0.8')?'orange':(youthPRSportAugContents.kpi3 > '0.8' && youthPRSportAugContents.kpi3 < '1')?'yellow-7':(youthPRSportAugContents.kpi3 >= '1' && youthPRSportAugContents.kpi3 < '1.2')?'green':(youthPRSportAugContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAugContents.kpi4 == null)?'grey-2':(youthPRSportAugContents.kpi4 >= '0' && youthPRSportAugContents.kpi4 <= '0.6')?'red':(youthPRSportAugContents.kpi4 > '0.6' && youthPRSportAugContents.kpi4 <= '0.8')?'orange':(youthPRSportAugContents.kpi4 > '0.8' && youthPRSportAugContents.kpi4 < '1')?'yellow-7':(youthPRSportAugContents.kpi4 >= '1' && youthPRSportAugContents.kpi4 < '1.2')?'green':(youthPRSportAugContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAugContents.kpi5 == null)?'grey-2':(youthPRSportAugContents.kpi5 >= '0' && youthPRSportAugContents.kpi5 <= '0.6')?'red':(youthPRSportAugContents.kpi5 > '0.6' && youthPRSportAugContents.kpi5 <= '0.8')?'orange':(youthPRSportAugContents.kpi5 > '0.8' && youthPRSportAugContents.kpi5 < '1')?'yellow-7':(youthPRSportAugContents.kpi5 >= '1' && youthPRSportAugContents.kpi5 < '1.2')?'green':(youthPRSportAugContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi5}}
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
                              :color="(youthPRSportSepContents.kpi1 == null)?'grey-2':(youthPRSportSepContents.kpi1 >= '0' && youthPRSportSepContents.kpi1 <= '2.4')?'red':(youthPRSportSepContents.kpi1 > '2.4' && youthPRSportSepContents.kpi1 <= '3.2')?'orange':(youthPRSportSepContents.kpi1 > '3.2' && youthPRSportSepContents.kpi1 < '4')?'yellow-7':(youthPRSportSepContents.kpi1 >= '4' && youthPRSportSepContents.kpi1 < '4.8')?'green':(youthPRSportSepContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportSepContents.kpi2 == null)?'grey-2':(youthPRSportSepContents.kpi2 >= '0' && youthPRSportSepContents.kpi2 <= '0.6')?'red':(youthPRSportSepContents.kpi2 > '0.6' && youthPRSportSepContents.kpi2 <= '0.8')?'orange':(youthPRSportSepContents.kpi2 > '0.8' && youthPRSportSepContents.kpi2 < '1')?'yellow-7':(youthPRSportSepContents.kpi2 >= '1' && youthPRSportSepContents.kpi2 < '1.2')?'green':(youthPRSportSepContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportSepContents.kpi3 == null)?'grey-2':(youthPRSportSepContents.kpi3 >= '0' && youthPRSportSepContents.kpi3 <= '0.6')?'red':(youthPRSportSepContents.kpi3 > '0.6' && youthPRSportSepContents.kpi3 <= '0.8')?'orange':(youthPRSportSepContents.kpi3 > '0.8' && youthPRSportSepContents.kpi3 < '1')?'yellow-7':(youthPRSportSepContents.kpi3 >= '1' && youthPRSportSepContents.kpi3 < '1.2')?'green':(youthPRSportSepContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportSepContents.kpi4 == null)?'grey-2':(youthPRSportSepContents.kpi4 >= '0' && youthPRSportSepContents.kpi4 <= '0.6')?'red':(youthPRSportSepContents.kpi4 > '0.6' && youthPRSportSepContents.kpi4 <= '0.8')?'orange':(youthPRSportSepContents.kpi4 > '0.8' && youthPRSportSepContents.kpi4 < '1')?'yellow-7':(youthPRSportSepContents.kpi4 >= '1' && youthPRSportSepContents.kpi4 < '1.2')?'green':(youthPRSportSepContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportSepContents.kpi5 == null)?'grey-2':(youthPRSportSepContents.kpi5 >= '0' && youthPRSportSepContents.kpi5 <= '0.6')?'red':(youthPRSportSepContents.kpi5 > '0.6' && youthPRSportSepContents.kpi5 <= '0.8')?'orange':(youthPRSportSepContents.kpi5 > '0.8' && youthPRSportSepContents.kpi5 < '1')?'yellow-7':(youthPRSportSepContents.kpi5 >= '1' && youthPRSportSepContents.kpi5 < '1.2')?'green':(youthPRSportSepContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi5}}
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
                              :color="(youthPRSportOctContents.kpi1 == null)?'grey-2':(youthPRSportOctContents.kpi1 >= '0' && youthPRSportOctContents.kpi1 <= '2.4')?'red':(youthPRSportOctContents.kpi1 > '2.4' && youthPRSportOctContents.kpi1 <= '3.2')?'orange':(youthPRSportOctContents.kpi1 > '3.2' && youthPRSportOctContents.kpi1 < '4')?'yellow-7':(youthPRSportOctContents.kpi1 >= '4' && youthPRSportOctContents.kpi1 < '4.8')?'green':(youthPRSportOctContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportOctContents.kpi2 == null)?'grey-2':(youthPRSportOctContents.kpi2 >= '0' && youthPRSportOctContents.kpi2 <= '0.6')?'red':(youthPRSportOctContents.kpi2 > '0.6' && youthPRSportOctContents.kpi2 <= '0.8')?'orange':(youthPRSportOctContents.kpi2 > '0.8' && youthPRSportOctContents.kpi2 < '1')?'yellow-7':(youthPRSportOctContents.kpi2 >= '1' && youthPRSportOctContents.kpi2 < '1.2')?'green':(youthPRSportOctContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportOctContents.kpi3 == null)?'grey-2':(youthPRSportOctContents.kpi3 >= '0' && youthPRSportOctContents.kpi3 <= '0.6')?'red':(youthPRSportOctContents.kpi3 > '0.6' && youthPRSportOctContents.kpi3 <= '0.8')?'orange':(youthPRSportOctContents.kpi3 > '0.8' && youthPRSportOctContents.kpi3 < '1')?'yellow-7':(youthPRSportOctContents.kpi3 >= '1' && youthPRSportOctContents.kpi3 < '1.2')?'green':(youthPRSportOctContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportOctContents.kpi4 == null)?'grey-2':(youthPRSportOctContents.kpi4 >= '0' && youthPRSportOctContents.kpi4 <= '0.6')?'red':(youthPRSportOctContents.kpi4 > '0.6' && youthPRSportOctContents.kpi4 <= '0.8')?'orange':(youthPRSportOctContents.kpi4 > '0.8' && youthPRSportOctContents.kpi4 < '1')?'yellow-7':(youthPRSportOctContents.kpi4 >= '1' && youthPRSportOctContents.kpi4 < '1.2')?'green':(youthPRSportOctContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportOctContents.kpi5 == null)?'grey-2':(youthPRSportOctContents.kpi5 >= '0' && youthPRSportOctContents.kpi5 <= '0.6')?'red':(youthPRSportOctContents.kpi5 > '0.6' && youthPRSportOctContents.kpi5 <= '0.8')?'orange':(youthPRSportOctContents.kpi5 > '0.8' && youthPRSportOctContents.kpi5 < '1')?'yellow-7':(youthPRSportOctContents.kpi5 >= '1' && youthPRSportOctContents.kpi5 < '1.2')?'green':(youthPRSportOctContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi5}}
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
                              :color="(youthPRSportNovContents.kpi1 == null)?'grey-2':(youthPRSportNovContents.kpi1 >= '0' && youthPRSportNovContents.kpi1 <= '2.4')?'red':(youthPRSportNovContents.kpi1 > '2.4' && youthPRSportNovContents.kpi1 <= '3.2')?'orange':(youthPRSportNovContents.kpi1 > '3.2' && youthPRSportNovContents.kpi1 < '4')?'yellow-7':(youthPRSportNovContents.kpi1 >= '4' && youthPRSportNovContents.kpi1 < '4.8')?'green':(youthPRSportNovContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportNovContents.kpi2 == null)?'grey-2':(youthPRSportNovContents.kpi2 >= '0' && youthPRSportNovContents.kpi2 <= '0.6')?'red':(youthPRSportNovContents.kpi2 > '0.6' && youthPRSportNovContents.kpi2 <= '0.8')?'orange':(youthPRSportNovContents.kpi2 > '0.8' && youthPRSportNovContents.kpi2 < '1')?'yellow-7':(youthPRSportNovContents.kpi2 >= '1' && youthPRSportNovContents.kpi2 < '1.2')?'green':(youthPRSportNovContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportNovContents.kpi3 == null)?'grey-2':(youthPRSportNovContents.kpi3 >= '0' && youthPRSportNovContents.kpi3 <= '0.6')?'red':(youthPRSportNovContents.kpi3 > '0.6' && youthPRSportNovContents.kpi3 <= '0.8')?'orange':(youthPRSportNovContents.kpi3 > '0.8' && youthPRSportNovContents.kpi3 < '1')?'yellow-7':(youthPRSportNovContents.kpi3 >= '1' && youthPRSportNovContents.kpi3 < '1.2')?'green':(youthPRSportNovContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportNovContents.kpi4 == null)?'grey-2':(youthPRSportNovContents.kpi4 >= '0' && youthPRSportNovContents.kpi4 <= '0.6')?'red':(youthPRSportNovContents.kpi4 > '0.6' && youthPRSportNovContents.kpi4 <= '0.8')?'orange':(youthPRSportNovContents.kpi4 > '0.8' && youthPRSportNovContents.kpi4 < '1')?'yellow-7':(youthPRSportNovContents.kpi4 >= '1' && youthPRSportNovContents.kpi4 < '1.2')?'green':(youthPRSportNovContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportNovContents.kpi5 == null)?'grey-2':(youthPRSportNovContents.kpi5 >= '0' && youthPRSportNovContents.kpi5 <= '0.6')?'red':(youthPRSportNovContents.kpi5 > '0.6' && youthPRSportNovContents.kpi5 <= '0.8')?'orange':(youthPRSportNovContents.kpi5 > '0.8' && youthPRSportNovContents.kpi5 < '1')?'yellow-7':(youthPRSportNovContents.kpi5 >= '1' && youthPRSportNovContents.kpi5 < '1.2')?'green':(youthPRSportNovContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi5}}
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
                              :color="(youthPRSportDecContents.kpi1 == null)?'grey-2':(youthPRSportDecContents.kpi1 >= '0' && youthPRSportDecContents.kpi1 <= '2.4')?'red':(youthPRSportDecContents.kpi1 > '2.4' && youthPRSportDecContents.kpi1 <= '3.2')?'orange':(youthPRSportDecContents.kpi1 > '3.2' && youthPRSportDecContents.kpi1 < '4')?'yellow-7':(youthPRSportDecContents.kpi1 >= '4' && youthPRSportDecContents.kpi1 < '4.8')?'green':(youthPRSportDecContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportDecContents.kpi2 == null)?'grey-2':(youthPRSportDecContents.kpi2 >= '0' && youthPRSportDecContents.kpi2 <= '0.6')?'red':(youthPRSportDecContents.kpi2 > '0.6' && youthPRSportDecContents.kpi2 <= '0.8')?'orange':(youthPRSportDecContents.kpi2 > '0.8' && youthPRSportDecContents.kpi2 < '1')?'yellow-7':(youthPRSportDecContents.kpi2 >= '1' && youthPRSportDecContents.kpi2 < '1.2')?'green':(youthPRSportDecContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportDecContents.kpi3 == null)?'grey-2':(youthPRSportDecContents.kpi3 >= '0' && youthPRSportDecContents.kpi3 <= '0.6')?'red':(youthPRSportDecContents.kpi3 > '0.6' && youthPRSportDecContents.kpi3 <= '0.8')?'orange':(youthPRSportDecContents.kpi3 > '0.8' && youthPRSportDecContents.kpi3 < '1')?'yellow-7':(youthPRSportDecContents.kpi3 >= '1' && youthPRSportDecContents.kpi3 < '1.2')?'green':(youthPRSportDecContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportDecContents.kpi4 == null)?'grey-2':(youthPRSportDecContents.kpi4 >= '0' && youthPRSportDecContents.kpi4 <= '0.6')?'red':(youthPRSportDecContents.kpi4 > '0.6' && youthPRSportDecContents.kpi4 <= '0.8')?'orange':(youthPRSportDecContents.kpi4 > '0.8' && youthPRSportDecContents.kpi4 < '1')?'yellow-7':(youthPRSportDecContents.kpi4 >= '1' && youthPRSportDecContents.kpi4 < '1.2')?'green':(youthPRSportDecContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportDecContents.kpi5 == null)?'grey-2':(youthPRSportDecContents.kpi5 >= '0' && youthPRSportDecContents.kpi5 <= '0.6')?'red':(youthPRSportDecContents.kpi5 > '0.6' && youthPRSportDecContents.kpi5 <= '0.8')?'orange':(youthPRSportDecContents.kpi5 > '0.8' && youthPRSportDecContents.kpi5 < '1')?'yellow-7':(youthPRSportDecContents.kpi5 >= '1' && youthPRSportDecContents.kpi5 < '1.2')?'green':(youthPRSportDecContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi5}}
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
                                <q-tooltip># of unique children</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of total children</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of unique youth</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip># of total youth</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 5
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
                              :color="(youthPRSportJanContents.kpi1 == null)?'grey-2':(youthPRSportJanContents.kpi1 >= '0' && youthPRSportJanContents.kpi1 <= '2.4')?'red':(youthPRSportJanContents.kpi1 > '2.4' && youthPRSportJanContents.kpi1 <= '3.2')?'orange':(youthPRSportJanContents.kpi1 > '3.2' && youthPRSportJanContents.kpi1 < '4')?'yellow-7':(youthPRSportJanContents.kpi1 >= '4' && youthPRSportJanContents.kpi1 < '4.8')?'green':(youthPRSportJanContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJanContents.kpi2 == null)?'grey-2':(youthPRSportJanContents.kpi2 >= '0' && youthPRSportJanContents.kpi2 <= '0.6')?'red':(youthPRSportJanContents.kpi2 > '0.6' && youthPRSportJanContents.kpi2 <= '0.8')?'orange':(youthPRSportJanContents.kpi2 > '0.8' && youthPRSportJanContents.kpi2 < '1')?'yellow-7':(youthPRSportJanContents.kpi2 >= '1' && youthPRSportJanContents.kpi2 < '1.2')?'green':(youthPRSportJanContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJanContents.kpi3 == null)?'grey-2':(youthPRSportJanContents.kpi3 >= '0' && youthPRSportJanContents.kpi3 <= '0.6')?'red':(youthPRSportJanContents.kpi3 > '0.6' && youthPRSportJanContents.kpi3 <= '0.8')?'orange':(youthPRSportJanContents.kpi3 > '0.8' && youthPRSportJanContents.kpi3 < '1')?'yellow-7':(youthPRSportJanContents.kpi3 >= '1' && youthPRSportJanContents.kpi3 < '1.2')?'green':(youthPRSportJanContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJanContents.kpi4 == null)?'grey-2':(youthPRSportJanContents.kpi4 >= '0' && youthPRSportJanContents.kpi4 <= '0.6')?'red':(youthPRSportJanContents.kpi4 > '0.6' && youthPRSportJanContents.kpi4 <= '0.8')?'orange':(youthPRSportJanContents.kpi4 > '0.8' && youthPRSportJanContents.kpi4 < '1')?'yellow-7':(youthPRSportJanContents.kpi4 >= '1' && youthPRSportJanContents.kpi4 < '1.2')?'green':(youthPRSportJanContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJanContents.kpi5 == null)?'grey-2':(youthPRSportJanContents.kpi5 >= '0' && youthPRSportJanContents.kpi5 <= '0.6')?'red':(youthPRSportJanContents.kpi5 > '0.6' && youthPRSportJanContents.kpi5 <= '0.8')?'orange':(youthPRSportJanContents.kpi5 > '0.8' && youthPRSportJanContents.kpi5 < '1')?'yellow-7':(youthPRSportJanContents.kpi5 >= '1' && youthPRSportJanContents.kpi5 < '1.2')?'green':(youthPRSportJanContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi5}}
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
                              :color="(youthPRSportFebContents.kpi1 == null)?'grey-2':(youthPRSportFebContents.kpi1 >= '0' && youthPRSportFebContents.kpi1 <= '2.4')?'red':(youthPRSportFebContents.kpi1 > '2.4' && youthPRSportFebContents.kpi1 <= '3.2')?'orange':(youthPRSportFebContents.kpi1 > '3.2' && youthPRSportFebContents.kpi1 < '4')?'yellow-7':(youthPRSportFebContents.kpi1 >= '4' && youthPRSportFebContents.kpi1 < '4.8')?'green':(youthPRSportFebContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportFebContents.kpi2 == null)?'grey-2':(youthPRSportFebContents.kpi2 >= '0' && youthPRSportFebContents.kpi2 <= '0.6')?'red':(youthPRSportFebContents.kpi2 > '0.6' && youthPRSportFebContents.kpi2 <= '0.8')?'orange':(youthPRSportFebContents.kpi2 > '0.8' && youthPRSportFebContents.kpi2 < '1')?'yellow-7':(youthPRSportFebContents.kpi2 >= '1' && youthPRSportFebContents.kpi2 < '1.2')?'green':(youthPRSportFebContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportFebContents.kpi3 == null)?'grey-2':(youthPRSportFebContents.kpi3 >= '0' && youthPRSportFebContents.kpi3 <= '0.6')?'red':(youthPRSportFebContents.kpi3 > '0.6' && youthPRSportFebContents.kpi3 <= '0.8')?'orange':(youthPRSportFebContents.kpi3 > '0.8' && youthPRSportFebContents.kpi3 < '1')?'yellow-7':(youthPRSportFebContents.kpi3 >= '1' && youthPRSportFebContents.kpi3 < '1.2')?'green':(youthPRSportFebContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportFebContents.kpi4 == null)?'grey-2':(youthPRSportFebContents.kpi4 >= '0' && youthPRSportFebContents.kpi4 <= '0.6')?'red':(youthPRSportFebContents.kpi4 > '0.6' && youthPRSportFebContents.kpi4 <= '0.8')?'orange':(youthPRSportFebContents.kpi4 > '0.8' && youthPRSportFebContents.kpi4 < '1')?'yellow-7':(youthPRSportFebContents.kpi4 >= '1' && youthPRSportFebContents.kpi4 < '1.2')?'green':(youthPRSportFebContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportFebContents.kpi5 == null)?'grey-2':(youthPRSportFebContents.kpi5 >= '0' && youthPRSportFebContents.kpi5 <= '0.6')?'red':(youthPRSportFebContents.kpi5 > '0.6' && youthPRSportFebContents.kpi5 <= '0.8')?'orange':(youthPRSportFebContents.kpi5 > '0.8' && youthPRSportFebContents.kpi5 < '1')?'yellow-7':(youthPRSportFebContents.kpi5 >= '1' && youthPRSportFebContents.kpi5 < '1.2')?'green':(youthPRSportFebContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi5}}
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
                              :color="(youthPRSportMarContents.kpi1 == null)?'grey-2':(youthPRSportMarContents.kpi1 >= '0' && youthPRSportMarContents.kpi1 <= '2.4')?'red':(youthPRSportMarContents.kpi1 > '2.4' && youthPRSportMarContents.kpi1 <= '3.2')?'orange':(youthPRSportMarContents.kpi1 > '3.2' && youthPRSportMarContents.kpi1 < '4')?'yellow-7':(youthPRSportMarContents.kpi1 >= '4' && youthPRSportMarContents.kpi1 < '4.8')?'green':(youthPRSportMarContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMarContents.kpi2 == null)?'grey-2':(youthPRSportMarContents.kpi2 >= '0' && youthPRSportMarContents.kpi2 <= '0.6')?'red':(youthPRSportMarContents.kpi2 > '0.6' && youthPRSportMarContents.kpi2 <= '0.8')?'orange':(youthPRSportMarContents.kpi2 > '0.8' && youthPRSportMarContents.kpi2 < '1')?'yellow-7':(youthPRSportMarContents.kpi2 >= '1' && youthPRSportMarContents.kpi2 < '1.2')?'green':(youthPRSportMarContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMarContents.kpi3 == null)?'grey-2':(youthPRSportMarContents.kpi3 >= '0' && youthPRSportMarContents.kpi3 <= '0.6')?'red':(youthPRSportMarContents.kpi3 > '0.6' && youthPRSportMarContents.kpi3 <= '0.8')?'orange':(youthPRSportMarContents.kpi3 > '0.8' && youthPRSportMarContents.kpi3 < '1')?'yellow-7':(youthPRSportMarContents.kpi3 >= '1' && youthPRSportMarContents.kpi3 < '1.2')?'green':(youthPRSportMarContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMarContents.kpi4 == null)?'grey-2':(youthPRSportMarContents.kpi4 >= '0' && youthPRSportMarContents.kpi4 <= '0.6')?'red':(youthPRSportMarContents.kpi4 > '0.6' && youthPRSportMarContents.kpi4 <= '0.8')?'orange':(youthPRSportMarContents.kpi4 > '0.8' && youthPRSportMarContents.kpi4 < '1')?'yellow-7':(youthPRSportMarContents.kpi4 >= '1' && youthPRSportMarContents.kpi4 < '1.2')?'green':(youthPRSportMarContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMarContents.kpi5 == null)?'grey-2':(youthPRSportMarContents.kpi5 >= '0' && youthPRSportMarContents.kpi5 <= '0.6')?'red':(youthPRSportMarContents.kpi5 > '0.6' && youthPRSportMarContents.kpi5 <= '0.8')?'orange':(youthPRSportMarContents.kpi5 > '0.8' && youthPRSportMarContents.kpi5 < '1')?'yellow-7':(youthPRSportMarContents.kpi5 >= '1' && youthPRSportMarContents.kpi5 < '1.2')?'green':(youthPRSportMarContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi5}}
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
                              :color="(youthPRSportAprContents.kpi1 == null)?'grey-2':(youthPRSportAprContents.kpi1 >= '0' && youthPRSportAprContents.kpi1 <= '2.4')?'red':(youthPRSportAprContents.kpi1 > '2.4' && youthPRSportAprContents.kpi1 <= '3.2')?'orange':(youthPRSportAprContents.kpi1 > '3.2' && youthPRSportAprContents.kpi1 < '4')?'yellow-7':(youthPRSportAprContents.kpi1 >= '4' && youthPRSportAprContents.kpi1 < '4.8')?'green':(youthPRSportAprContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAprContents.kpi2 == null)?'grey-2':(youthPRSportAprContents.kpi2 >= '0' && youthPRSportAprContents.kpi2 <= '0.6')?'red':(youthPRSportAprContents.kpi2 > '0.6' && youthPRSportAprContents.kpi2 <= '0.8')?'orange':(youthPRSportAprContents.kpi2 > '0.8' && youthPRSportAprContents.kpi2 < '1')?'yellow-7':(youthPRSportAprContents.kpi2 >= '1' && youthPRSportAprContents.kpi2 < '1.2')?'green':(youthPRSportAprContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAprContents.kpi3 == null)?'grey-2':(youthPRSportAprContents.kpi3 >= '0' && youthPRSportAprContents.kpi3 <= '0.6')?'red':(youthPRSportAprContents.kpi3 > '0.6' && youthPRSportAprContents.kpi3 <= '0.8')?'orange':(youthPRSportAprContents.kpi3 > '0.8' && youthPRSportAprContents.kpi3 < '1')?'yellow-7':(youthPRSportAprContents.kpi3 >= '1' && youthPRSportAprContents.kpi3 < '1.2')?'green':(youthPRSportAprContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAprContents.kpi4 == null)?'grey-2':(youthPRSportAprContents.kpi4 >= '0' && youthPRSportAprContents.kpi4 <= '0.6')?'red':(youthPRSportAprContents.kpi4 > '0.6' && youthPRSportAprContents.kpi4 <= '0.8')?'orange':(youthPRSportAprContents.kpi4 > '0.8' && youthPRSportAprContents.kpi4 < '1')?'yellow-7':(youthPRSportAprContents.kpi4 >= '1' && youthPRSportAprContents.kpi4 < '1.2')?'green':(youthPRSportAprContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAprContents.kpi5 == null)?'grey-2':(youthPRSportAprContents.kpi5 >= '0' && youthPRSportAprContents.kpi5 <= '0.6')?'red':(youthPRSportAprContents.kpi5 > '0.6' && youthPRSportAprContents.kpi5 <= '0.8')?'orange':(youthPRSportAprContents.kpi5 > '0.8' && youthPRSportAprContents.kpi5 < '1')?'yellow-7':(youthPRSportAprContents.kpi5 >= '1' && youthPRSportAprContents.kpi5 < '1.2')?'green':(youthPRSportAprContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi5}}
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
                              :color="(youthPRSportMayContents.kpi1 == null)?'grey-2':(youthPRSportMayContents.kpi1 >= '0' && youthPRSportMayContents.kpi1 <= '2.4')?'red':(youthPRSportMayContents.kpi1 > '2.4' && youthPRSportMayContents.kpi1 <= '3.2')?'orange':(youthPRSportMayContents.kpi1 > '3.2' && youthPRSportMayContents.kpi1 < '4')?'yellow-7':(youthPRSportMayContents.kpi1 >= '4' && youthPRSportMayContents.kpi1 < '4.8')?'green':(youthPRSportMayContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMayContents.kpi2 == null)?'grey-2':(youthPRSportMayContents.kpi2 >= '0' && youthPRSportMayContents.kpi2 <= '0.6')?'red':(youthPRSportMayContents.kpi2 > '0.6' && youthPRSportMayContents.kpi2 <= '0.8')?'orange':(youthPRSportMayContents.kpi2 > '0.8' && youthPRSportMayContents.kpi2 < '1')?'yellow-7':(youthPRSportMayContents.kpi2 >= '1' && youthPRSportMayContents.kpi2 < '1.2')?'green':(youthPRSportMayContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMayContents.kpi3 == null)?'grey-2':(youthPRSportMayContents.kpi3 >= '0' && youthPRSportMayContents.kpi3 <= '0.6')?'red':(youthPRSportMayContents.kpi3 > '0.6' && youthPRSportMayContents.kpi3 <= '0.8')?'orange':(youthPRSportMayContents.kpi3 > '0.8' && youthPRSportMayContents.kpi3 < '1')?'yellow-7':(youthPRSportMayContents.kpi3 >= '1' && youthPRSportMayContents.kpi3 < '1.2')?'green':(youthPRSportMayContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMayContents.kpi4 == null)?'grey-2':(youthPRSportMayContents.kpi4 >= '0' && youthPRSportMayContents.kpi4 <= '0.6')?'red':(youthPRSportMayContents.kpi4 > '0.6' && youthPRSportMayContents.kpi4 <= '0.8')?'orange':(youthPRSportMayContents.kpi4 > '0.8' && youthPRSportMayContents.kpi4 < '1')?'yellow-7':(youthPRSportMayContents.kpi4 >= '1' && youthPRSportMayContents.kpi4 < '1.2')?'green':(youthPRSportMayContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMayContents.kpi5 == null)?'grey-2':(youthPRSportMayContents.kpi5 >= '0' && youthPRSportMayContents.kpi5 <= '0.6')?'red':(youthPRSportMayContents.kpi5 > '0.6' && youthPRSportMayContents.kpi5 <= '0.8')?'orange':(youthPRSportMayContents.kpi5 > '0.8' && youthPRSportMayContents.kpi5 < '1')?'yellow-7':(youthPRSportMayContents.kpi5 >= '1' && youthPRSportMayContents.kpi5 < '1.2')?'green':(youthPRSportMayContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi5}}
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
                              :color="(youthPRSportJunContents.kpi1 == null)?'grey-2':(youthPRSportJunContents.kpi1 >= '0' && youthPRSportJunContents.kpi1 <= '2.4')?'red':(youthPRSportJunContents.kpi1 > '2.4' && youthPRSportJunContents.kpi1 <= '3.2')?'orange':(youthPRSportJunContents.kpi1 > '3.2' && youthPRSportJunContents.kpi1 < '4')?'yellow-7':(youthPRSportJunContents.kpi1 >= '4' && youthPRSportJunContents.kpi1 < '4.8')?'green':(youthPRSportJunContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJunContents.kpi2 == null)?'grey-2':(youthPRSportJunContents.kpi2 >= '0' && youthPRSportJunContents.kpi2 <= '0.6')?'red':(youthPRSportJunContents.kpi2 > '0.6' && youthPRSportJunContents.kpi2 <= '0.8')?'orange':(youthPRSportJunContents.kpi2 > '0.8' && youthPRSportJunContents.kpi2 < '1')?'yellow-7':(youthPRSportJunContents.kpi2 >= '1' && youthPRSportJunContents.kpi2 < '1.2')?'green':(youthPRSportJunContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJunContents.kpi3 == null)?'grey-2':(youthPRSportJunContents.kpi3 >= '0' && youthPRSportJunContents.kpi3 <= '0.6')?'red':(youthPRSportJunContents.kpi3 > '0.6' && youthPRSportJunContents.kpi3 <= '0.8')?'orange':(youthPRSportJunContents.kpi3 > '0.8' && youthPRSportJunContents.kpi3 < '1')?'yellow-7':(youthPRSportJunContents.kpi3 >= '1' && youthPRSportJunContents.kpi3 < '1.2')?'green':(youthPRSportJunContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJunContents.kpi4 == null)?'grey-2':(youthPRSportJunContents.kpi4 >= '0' && youthPRSportJunContents.kpi4 <= '0.6')?'red':(youthPRSportJunContents.kpi4 > '0.6' && youthPRSportJunContents.kpi4 <= '0.8')?'orange':(youthPRSportJunContents.kpi4 > '0.8' && youthPRSportJunContents.kpi4 < '1')?'yellow-7':(youthPRSportJunContents.kpi4 >= '1' && youthPRSportJunContents.kpi4 < '1.2')?'green':(youthPRSportJunContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJunContents.kpi5 == null)?'grey-2':(youthPRSportJunContents.kpi5 >= '0' && youthPRSportJunContents.kpi5 <= '0.6')?'red':(youthPRSportJunContents.kpi5 > '0.6' && youthPRSportJunContents.kpi5 <= '0.8')?'orange':(youthPRSportJunContents.kpi5 > '0.8' && youthPRSportJunContents.kpi5 < '1')?'yellow-7':(youthPRSportJunContents.kpi5 >= '1' && youthPRSportJunContents.kpi5 < '1.2')?'green':(youthPRSportJunContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi5}}
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
                              :color="(youthPRSportJulContents.kpi1 == null)?'grey-2':(youthPRSportJulContents.kpi1 >= '0' && youthPRSportJulContents.kpi1 <= '2.4')?'red':(youthPRSportJulContents.kpi1 > '2.4' && youthPRSportJulContents.kpi1 <= '3.2')?'orange':(youthPRSportJulContents.kpi1 > '3.2' && youthPRSportJulContents.kpi1 < '4')?'yellow-7':(youthPRSportJulContents.kpi1 >= '4' && youthPRSportJulContents.kpi1 < '4.8')?'green':(youthPRSportJulContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJulContents.kpi2 == null)?'grey-2':(youthPRSportJulContents.kpi2 >= '0' && youthPRSportJulContents.kpi2 <= '0.6')?'red':(youthPRSportJulContents.kpi2 > '0.6' && youthPRSportJulContents.kpi2 <= '0.8')?'orange':(youthPRSportJulContents.kpi2 > '0.8' && youthPRSportJulContents.kpi2 < '1')?'yellow-7':(youthPRSportJulContents.kpi2 >= '1' && youthPRSportJulContents.kpi2 < '1.2')?'green':(youthPRSportJulContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJulContents.kpi3 == null)?'grey-2':(youthPRSportJulContents.kpi3 >= '0' && youthPRSportJulContents.kpi3 <= '0.6')?'red':(youthPRSportJulContents.kpi3 > '0.6' && youthPRSportJulContents.kpi3 <= '0.8')?'orange':(youthPRSportJulContents.kpi3 > '0.8' && youthPRSportJulContents.kpi3 < '1')?'yellow-7':(youthPRSportJulContents.kpi3 >= '1' && youthPRSportJulContents.kpi3 < '1.2')?'green':(youthPRSportJulContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJulContents.kpi4 == null)?'grey-2':(youthPRSportJulContents.kpi4 >= '0' && youthPRSportJulContents.kpi4 <= '0.6')?'red':(youthPRSportJulContents.kpi4 > '0.6' && youthPRSportJulContents.kpi4 <= '0.8')?'orange':(youthPRSportJulContents.kpi4 > '0.8' && youthPRSportJulContents.kpi4 < '1')?'yellow-7':(youthPRSportJulContents.kpi4 >= '1' && youthPRSportJulContents.kpi4 < '1.2')?'green':(youthPRSportJulContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJulContents.kpi5 == null)?'grey-2':(youthPRSportJulContents.kpi5 >= '0' && youthPRSportJulContents.kpi5 <= '0.6')?'red':(youthPRSportJulContents.kpi5 > '0.6' && youthPRSportJulContents.kpi5 <= '0.8')?'orange':(youthPRSportJulContents.kpi5 > '0.8' && youthPRSportJulContents.kpi5 < '1')?'yellow-7':(youthPRSportJulContents.kpi5 >= '1' && youthPRSportJulContents.kpi5 < '1.2')?'green':(youthPRSportJulContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi5}}
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
                              :color="(youthPRSportAugContents.kpi1 == null)?'grey-2':(youthPRSportAugContents.kpi1 >= '0' && youthPRSportAugContents.kpi1 <= '2.4')?'red':(youthPRSportAugContents.kpi1 > '2.4' && youthPRSportAugContents.kpi1 <= '3.2')?'orange':(youthPRSportAugContents.kpi1 > '3.2' && youthPRSportAugContents.kpi1 < '4')?'yellow-7':(youthPRSportAugContents.kpi1 >= '4' && youthPRSportAugContents.kpi1 < '4.8')?'green':(youthPRSportAugContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAugContents.kpi2 == null)?'grey-2':(youthPRSportAugContents.kpi2 >= '0' && youthPRSportAugContents.kpi2 <= '0.6')?'red':(youthPRSportAugContents.kpi2 > '0.6' && youthPRSportAugContents.kpi2 <= '0.8')?'orange':(youthPRSportAugContents.kpi2 > '0.8' && youthPRSportAugContents.kpi2 < '1')?'yellow-7':(youthPRSportAugContents.kpi2 >= '1' && youthPRSportAugContents.kpi2 < '1.2')?'green':(youthPRSportAugContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAugContents.kpi3 == null)?'grey-2':(youthPRSportAugContents.kpi3 >= '0' && youthPRSportAugContents.kpi3 <= '0.6')?'red':(youthPRSportAugContents.kpi3 > '0.6' && youthPRSportAugContents.kpi3 <= '0.8')?'orange':(youthPRSportAugContents.kpi3 > '0.8' && youthPRSportAugContents.kpi3 < '1')?'yellow-7':(youthPRSportAugContents.kpi3 >= '1' && youthPRSportAugContents.kpi3 < '1.2')?'green':(youthPRSportAugContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAugContents.kpi4 == null)?'grey-2':(youthPRSportAugContents.kpi4 >= '0' && youthPRSportAugContents.kpi4 <= '0.6')?'red':(youthPRSportAugContents.kpi4 > '0.6' && youthPRSportAugContents.kpi4 <= '0.8')?'orange':(youthPRSportAugContents.kpi4 > '0.8' && youthPRSportAugContents.kpi4 < '1')?'yellow-7':(youthPRSportAugContents.kpi4 >= '1' && youthPRSportAugContents.kpi4 < '1.2')?'green':(youthPRSportAugContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAugContents.kpi5 == null)?'grey-2':(youthPRSportAugContents.kpi5 >= '0' && youthPRSportAugContents.kpi5 <= '0.6')?'red':(youthPRSportAugContents.kpi5 > '0.6' && youthPRSportAugContents.kpi5 <= '0.8')?'orange':(youthPRSportAugContents.kpi5 > '0.8' && youthPRSportAugContents.kpi5 < '1')?'yellow-7':(youthPRSportAugContents.kpi5 >= '1' && youthPRSportAugContents.kpi5 < '1.2')?'green':(youthPRSportAugContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi5}}
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
                              :color="(youthPRSportSepContents.kpi1 == null)?'grey-2':(youthPRSportSepContents.kpi1 >= '0' && youthPRSportSepContents.kpi1 <= '2.4')?'red':(youthPRSportSepContents.kpi1 > '2.4' && youthPRSportSepContents.kpi1 <= '3.2')?'orange':(youthPRSportSepContents.kpi1 > '3.2' && youthPRSportSepContents.kpi1 < '4')?'yellow-7':(youthPRSportSepContents.kpi1 >= '4' && youthPRSportSepContents.kpi1 < '4.8')?'green':(youthPRSportSepContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportSepContents.kpi2 == null)?'grey-2':(youthPRSportSepContents.kpi2 >= '0' && youthPRSportSepContents.kpi2 <= '0.6')?'red':(youthPRSportSepContents.kpi2 > '0.6' && youthPRSportSepContents.kpi2 <= '0.8')?'orange':(youthPRSportSepContents.kpi2 > '0.8' && youthPRSportSepContents.kpi2 < '1')?'yellow-7':(youthPRSportSepContents.kpi2 >= '1' && youthPRSportSepContents.kpi2 < '1.2')?'green':(youthPRSportSepContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportSepContents.kpi3 == null)?'grey-2':(youthPRSportSepContents.kpi3 >= '0' && youthPRSportSepContents.kpi3 <= '0.6')?'red':(youthPRSportSepContents.kpi3 > '0.6' && youthPRSportSepContents.kpi3 <= '0.8')?'orange':(youthPRSportSepContents.kpi3 > '0.8' && youthPRSportSepContents.kpi3 < '1')?'yellow-7':(youthPRSportSepContents.kpi3 >= '1' && youthPRSportSepContents.kpi3 < '1.2')?'green':(youthPRSportSepContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportSepContents.kpi4 == null)?'grey-2':(youthPRSportSepContents.kpi4 >= '0' && youthPRSportSepContents.kpi4 <= '0.6')?'red':(youthPRSportSepContents.kpi4 > '0.6' && youthPRSportSepContents.kpi4 <= '0.8')?'orange':(youthPRSportSepContents.kpi4 > '0.8' && youthPRSportSepContents.kpi4 < '1')?'yellow-7':(youthPRSportSepContents.kpi4 >= '1' && youthPRSportSepContents.kpi4 < '1.2')?'green':(youthPRSportSepContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportSepContents.kpi5 == null)?'grey-2':(youthPRSportSepContents.kpi5 >= '0' && youthPRSportSepContents.kpi5 <= '0.6')?'red':(youthPRSportSepContents.kpi5 > '0.6' && youthPRSportSepContents.kpi5 <= '0.8')?'orange':(youthPRSportSepContents.kpi5 > '0.8' && youthPRSportSepContents.kpi5 < '1')?'yellow-7':(youthPRSportSepContents.kpi5 >= '1' && youthPRSportSepContents.kpi5 < '1.2')?'green':(youthPRSportSepContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi5}}
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
                              :color="(youthPRSportOctContents.kpi1 == null)?'grey-2':(youthPRSportOctContents.kpi1 >= '0' && youthPRSportOctContents.kpi1 <= '2.4')?'red':(youthPRSportOctContents.kpi1 > '2.4' && youthPRSportOctContents.kpi1 <= '3.2')?'orange':(youthPRSportOctContents.kpi1 > '3.2' && youthPRSportOctContents.kpi1 < '4')?'yellow-7':(youthPRSportOctContents.kpi1 >= '4' && youthPRSportOctContents.kpi1 < '4.8')?'green':(youthPRSportOctContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportOctContents.kpi2 == null)?'grey-2':(youthPRSportOctContents.kpi2 >= '0' && youthPRSportOctContents.kpi2 <= '0.6')?'red':(youthPRSportOctContents.kpi2 > '0.6' && youthPRSportOctContents.kpi2 <= '0.8')?'orange':(youthPRSportOctContents.kpi2 > '0.8' && youthPRSportOctContents.kpi2 < '1')?'yellow-7':(youthPRSportOctContents.kpi2 >= '1' && youthPRSportOctContents.kpi2 < '1.2')?'green':(youthPRSportOctContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportOctContents.kpi3 == null)?'grey-2':(youthPRSportOctContents.kpi3 >= '0' && youthPRSportOctContents.kpi3 <= '0.6')?'red':(youthPRSportOctContents.kpi3 > '0.6' && youthPRSportOctContents.kpi3 <= '0.8')?'orange':(youthPRSportOctContents.kpi3 > '0.8' && youthPRSportOctContents.kpi3 < '1')?'yellow-7':(youthPRSportOctContents.kpi3 >= '1' && youthPRSportOctContents.kpi3 < '1.2')?'green':(youthPRSportOctContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportOctContents.kpi4 == null)?'grey-2':(youthPRSportOctContents.kpi4 >= '0' && youthPRSportOctContents.kpi4 <= '0.6')?'red':(youthPRSportOctContents.kpi4 > '0.6' && youthPRSportOctContents.kpi4 <= '0.8')?'orange':(youthPRSportOctContents.kpi4 > '0.8' && youthPRSportOctContents.kpi4 < '1')?'yellow-7':(youthPRSportOctContents.kpi4 >= '1' && youthPRSportOctContents.kpi4 < '1.2')?'green':(youthPRSportOctContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportOctContents.kpi5 == null)?'grey-2':(youthPRSportOctContents.kpi5 >= '0' && youthPRSportOctContents.kpi5 <= '0.6')?'red':(youthPRSportOctContents.kpi5 > '0.6' && youthPRSportOctContents.kpi5 <= '0.8')?'orange':(youthPRSportOctContents.kpi5 > '0.8' && youthPRSportOctContents.kpi5 < '1')?'yellow-7':(youthPRSportOctContents.kpi5 >= '1' && youthPRSportOctContents.kpi5 < '1.2')?'green':(youthPRSportOctContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi5}}
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
                              :color="(youthPRSportNovContents.kpi1 == null)?'grey-2':(youthPRSportNovContents.kpi1 >= '0' && youthPRSportNovContents.kpi1 <= '2.4')?'red':(youthPRSportNovContents.kpi1 > '2.4' && youthPRSportNovContents.kpi1 <= '3.2')?'orange':(youthPRSportNovContents.kpi1 > '3.2' && youthPRSportNovContents.kpi1 < '4')?'yellow-7':(youthPRSportNovContents.kpi1 >= '4' && youthPRSportNovContents.kpi1 < '4.8')?'green':(youthPRSportNovContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportNovContents.kpi2 == null)?'grey-2':(youthPRSportNovContents.kpi2 >= '0' && youthPRSportNovContents.kpi2 <= '0.6')?'red':(youthPRSportNovContents.kpi2 > '0.6' && youthPRSportNovContents.kpi2 <= '0.8')?'orange':(youthPRSportNovContents.kpi2 > '0.8' && youthPRSportNovContents.kpi2 < '1')?'yellow-7':(youthPRSportNovContents.kpi2 >= '1' && youthPRSportNovContents.kpi2 < '1.2')?'green':(youthPRSportNovContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportNovContents.kpi3 == null)?'grey-2':(youthPRSportNovContents.kpi3 >= '0' && youthPRSportNovContents.kpi3 <= '0.6')?'red':(youthPRSportNovContents.kpi3 > '0.6' && youthPRSportNovContents.kpi3 <= '0.8')?'orange':(youthPRSportNovContents.kpi3 > '0.8' && youthPRSportNovContents.kpi3 < '1')?'yellow-7':(youthPRSportNovContents.kpi3 >= '1' && youthPRSportNovContents.kpi3 < '1.2')?'green':(youthPRSportNovContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportNovContents.kpi4 == null)?'grey-2':(youthPRSportNovContents.kpi4 >= '0' && youthPRSportNovContents.kpi4 <= '0.6')?'red':(youthPRSportNovContents.kpi4 > '0.6' && youthPRSportNovContents.kpi4 <= '0.8')?'orange':(youthPRSportNovContents.kpi4 > '0.8' && youthPRSportNovContents.kpi4 < '1')?'yellow-7':(youthPRSportNovContents.kpi4 >= '1' && youthPRSportNovContents.kpi4 < '1.2')?'green':(youthPRSportNovContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportNovContents.kpi5 == null)?'grey-2':(youthPRSportNovContents.kpi5 >= '0' && youthPRSportNovContents.kpi5 <= '0.6')?'red':(youthPRSportNovContents.kpi5 > '0.6' && youthPRSportNovContents.kpi5 <= '0.8')?'orange':(youthPRSportNovContents.kpi5 > '0.8' && youthPRSportNovContents.kpi5 < '1')?'yellow-7':(youthPRSportNovContents.kpi5 >= '1' && youthPRSportNovContents.kpi5 < '1.2')?'green':(youthPRSportNovContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi5}}
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
                              :color="(youthPRSportDecContents.kpi1 == null)?'grey-2':(youthPRSportDecContents.kpi1 >= '0' && youthPRSportDecContents.kpi1 <= '2.4')?'red':(youthPRSportDecContents.kpi1 > '2.4' && youthPRSportDecContents.kpi1 <= '3.2')?'orange':(youthPRSportDecContents.kpi1 > '3.2' && youthPRSportDecContents.kpi1 < '4')?'yellow-7':(youthPRSportDecContents.kpi1 >= '4' && youthPRSportDecContents.kpi1 < '4.8')?'green':(youthPRSportDecContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportDecContents.kpi2 == null)?'grey-2':(youthPRSportDecContents.kpi2 >= '0' && youthPRSportDecContents.kpi2 <= '0.6')?'red':(youthPRSportDecContents.kpi2 > '0.6' && youthPRSportDecContents.kpi2 <= '0.8')?'orange':(youthPRSportDecContents.kpi2 > '0.8' && youthPRSportDecContents.kpi2 < '1')?'yellow-7':(youthPRSportDecContents.kpi2 >= '1' && youthPRSportDecContents.kpi2 < '1.2')?'green':(youthPRSportDecContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportDecContents.kpi3 == null)?'grey-2':(youthPRSportDecContents.kpi3 >= '0' && youthPRSportDecContents.kpi3 <= '0.6')?'red':(youthPRSportDecContents.kpi3 > '0.6' && youthPRSportDecContents.kpi3 <= '0.8')?'orange':(youthPRSportDecContents.kpi3 > '0.8' && youthPRSportDecContents.kpi3 < '1')?'yellow-7':(youthPRSportDecContents.kpi3 >= '1' && youthPRSportDecContents.kpi3 < '1.2')?'green':(youthPRSportDecContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportDecContents.kpi4 == null)?'grey-2':(youthPRSportDecContents.kpi4 >= '0' && youthPRSportDecContents.kpi4 <= '0.6')?'red':(youthPRSportDecContents.kpi4 > '0.6' && youthPRSportDecContents.kpi4 <= '0.8')?'orange':(youthPRSportDecContents.kpi4 > '0.8' && youthPRSportDecContents.kpi4 < '1')?'yellow-7':(youthPRSportDecContents.kpi4 >= '1' && youthPRSportDecContents.kpi4 < '1.2')?'green':(youthPRSportDecContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportDecContents.kpi5 == null)?'grey-2':(youthPRSportDecContents.kpi5 >= '0' && youthPRSportDecContents.kpi5 <= '0.6')?'red':(youthPRSportDecContents.kpi5 > '0.6' && youthPRSportDecContents.kpi5 <= '0.8')?'orange':(youthPRSportDecContents.kpi5 > '0.8' && youthPRSportDecContents.kpi5 < '1')?'yellow-7':(youthPRSportDecContents.kpi5 >= '1' && youthPRSportDecContents.kpi5 < '1.2')?'green':(youthPRSportDecContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi5}}
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
                                <q-tooltip># of unique children</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of total children</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of unique youth</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip># of total youth</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 5
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
                              :color="(youthPRSportJanContents.kpi1 == null)?'grey-2':(youthPRSportJanContents.kpi1 >= '0' && youthPRSportJanContents.kpi1 <= '2.4')?'red':(youthPRSportJanContents.kpi1 > '2.4' && youthPRSportJanContents.kpi1 <= '3.2')?'orange':(youthPRSportJanContents.kpi1 > '3.2' && youthPRSportJanContents.kpi1 < '4')?'yellow-7':(youthPRSportJanContents.kpi1 >= '4' && youthPRSportJanContents.kpi1 < '4.8')?'green':(youthPRSportJanContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJanContents.kpi2 == null)?'grey-2':(youthPRSportJanContents.kpi2 >= '0' && youthPRSportJanContents.kpi2 <= '0.6')?'red':(youthPRSportJanContents.kpi2 > '0.6' && youthPRSportJanContents.kpi2 <= '0.8')?'orange':(youthPRSportJanContents.kpi2 > '0.8' && youthPRSportJanContents.kpi2 < '1')?'yellow-7':(youthPRSportJanContents.kpi2 >= '1' && youthPRSportJanContents.kpi2 < '1.2')?'green':(youthPRSportJanContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJanContents.kpi3 == null)?'grey-2':(youthPRSportJanContents.kpi3 >= '0' && youthPRSportJanContents.kpi3 <= '0.6')?'red':(youthPRSportJanContents.kpi3 > '0.6' && youthPRSportJanContents.kpi3 <= '0.8')?'orange':(youthPRSportJanContents.kpi3 > '0.8' && youthPRSportJanContents.kpi3 < '1')?'yellow-7':(youthPRSportJanContents.kpi3 >= '1' && youthPRSportJanContents.kpi3 < '1.2')?'green':(youthPRSportJanContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJanContents.kpi4 == null)?'grey-2':(youthPRSportJanContents.kpi4 >= '0' && youthPRSportJanContents.kpi4 <= '0.6')?'red':(youthPRSportJanContents.kpi4 > '0.6' && youthPRSportJanContents.kpi4 <= '0.8')?'orange':(youthPRSportJanContents.kpi4 > '0.8' && youthPRSportJanContents.kpi4 < '1')?'yellow-7':(youthPRSportJanContents.kpi4 >= '1' && youthPRSportJanContents.kpi4 < '1.2')?'green':(youthPRSportJanContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJanContents.kpi5 == null)?'grey-2':(youthPRSportJanContents.kpi5 >= '0' && youthPRSportJanContents.kpi5 <= '0.6')?'red':(youthPRSportJanContents.kpi5 > '0.6' && youthPRSportJanContents.kpi5 <= '0.8')?'orange':(youthPRSportJanContents.kpi5 > '0.8' && youthPRSportJanContents.kpi5 < '1')?'yellow-7':(youthPRSportJanContents.kpi5 >= '1' && youthPRSportJanContents.kpi5 < '1.2')?'green':(youthPRSportJanContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi5}}
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
                              :color="(youthPRSportFebContents.kpi1 == null)?'grey-2':(youthPRSportFebContents.kpi1 >= '0' && youthPRSportFebContents.kpi1 <= '2.4')?'red':(youthPRSportFebContents.kpi1 > '2.4' && youthPRSportFebContents.kpi1 <= '3.2')?'orange':(youthPRSportFebContents.kpi1 > '3.2' && youthPRSportFebContents.kpi1 < '4')?'yellow-7':(youthPRSportFebContents.kpi1 >= '4' && youthPRSportFebContents.kpi1 < '4.8')?'green':(youthPRSportFebContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportFebContents.kpi2 == null)?'grey-2':(youthPRSportFebContents.kpi2 >= '0' && youthPRSportFebContents.kpi2 <= '0.6')?'red':(youthPRSportFebContents.kpi2 > '0.6' && youthPRSportFebContents.kpi2 <= '0.8')?'orange':(youthPRSportFebContents.kpi2 > '0.8' && youthPRSportFebContents.kpi2 < '1')?'yellow-7':(youthPRSportFebContents.kpi2 >= '1' && youthPRSportFebContents.kpi2 < '1.2')?'green':(youthPRSportFebContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportFebContents.kpi3 == null)?'grey-2':(youthPRSportFebContents.kpi3 >= '0' && youthPRSportFebContents.kpi3 <= '0.6')?'red':(youthPRSportFebContents.kpi3 > '0.6' && youthPRSportFebContents.kpi3 <= '0.8')?'orange':(youthPRSportFebContents.kpi3 > '0.8' && youthPRSportFebContents.kpi3 < '1')?'yellow-7':(youthPRSportFebContents.kpi3 >= '1' && youthPRSportFebContents.kpi3 < '1.2')?'green':(youthPRSportFebContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportFebContents.kpi4 == null)?'grey-2':(youthPRSportFebContents.kpi4 >= '0' && youthPRSportFebContents.kpi4 <= '0.6')?'red':(youthPRSportFebContents.kpi4 > '0.6' && youthPRSportFebContents.kpi4 <= '0.8')?'orange':(youthPRSportFebContents.kpi4 > '0.8' && youthPRSportFebContents.kpi4 < '1')?'yellow-7':(youthPRSportFebContents.kpi4 >= '1' && youthPRSportFebContents.kpi4 < '1.2')?'green':(youthPRSportFebContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportFebContents.kpi5 == null)?'grey-2':(youthPRSportFebContents.kpi5 >= '0' && youthPRSportFebContents.kpi5 <= '0.6')?'red':(youthPRSportFebContents.kpi5 > '0.6' && youthPRSportFebContents.kpi5 <= '0.8')?'orange':(youthPRSportFebContents.kpi5 > '0.8' && youthPRSportFebContents.kpi5 < '1')?'yellow-7':(youthPRSportFebContents.kpi5 >= '1' && youthPRSportFebContents.kpi5 < '1.2')?'green':(youthPRSportFebContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi5}}
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
                              :color="(youthPRSportMarContents.kpi1 == null)?'grey-2':(youthPRSportMarContents.kpi1 >= '0' && youthPRSportMarContents.kpi1 <= '2.4')?'red':(youthPRSportMarContents.kpi1 > '2.4' && youthPRSportMarContents.kpi1 <= '3.2')?'orange':(youthPRSportMarContents.kpi1 > '3.2' && youthPRSportMarContents.kpi1 < '4')?'yellow-7':(youthPRSportMarContents.kpi1 >= '4' && youthPRSportMarContents.kpi1 < '4.8')?'green':(youthPRSportMarContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMarContents.kpi2 == null)?'grey-2':(youthPRSportMarContents.kpi2 >= '0' && youthPRSportMarContents.kpi2 <= '0.6')?'red':(youthPRSportMarContents.kpi2 > '0.6' && youthPRSportMarContents.kpi2 <= '0.8')?'orange':(youthPRSportMarContents.kpi2 > '0.8' && youthPRSportMarContents.kpi2 < '1')?'yellow-7':(youthPRSportMarContents.kpi2 >= '1' && youthPRSportMarContents.kpi2 < '1.2')?'green':(youthPRSportMarContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMarContents.kpi3 == null)?'grey-2':(youthPRSportMarContents.kpi3 >= '0' && youthPRSportMarContents.kpi3 <= '0.6')?'red':(youthPRSportMarContents.kpi3 > '0.6' && youthPRSportMarContents.kpi3 <= '0.8')?'orange':(youthPRSportMarContents.kpi3 > '0.8' && youthPRSportMarContents.kpi3 < '1')?'yellow-7':(youthPRSportMarContents.kpi3 >= '1' && youthPRSportMarContents.kpi3 < '1.2')?'green':(youthPRSportMarContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMarContents.kpi4 == null)?'grey-2':(youthPRSportMarContents.kpi4 >= '0' && youthPRSportMarContents.kpi4 <= '0.6')?'red':(youthPRSportMarContents.kpi4 > '0.6' && youthPRSportMarContents.kpi4 <= '0.8')?'orange':(youthPRSportMarContents.kpi4 > '0.8' && youthPRSportMarContents.kpi4 < '1')?'yellow-7':(youthPRSportMarContents.kpi4 >= '1' && youthPRSportMarContents.kpi4 < '1.2')?'green':(youthPRSportMarContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMarContents.kpi5 == null)?'grey-2':(youthPRSportMarContents.kpi5 >= '0' && youthPRSportMarContents.kpi5 <= '0.6')?'red':(youthPRSportMarContents.kpi5 > '0.6' && youthPRSportMarContents.kpi5 <= '0.8')?'orange':(youthPRSportMarContents.kpi5 > '0.8' && youthPRSportMarContents.kpi5 < '1')?'yellow-7':(youthPRSportMarContents.kpi5 >= '1' && youthPRSportMarContents.kpi5 < '1.2')?'green':(youthPRSportMarContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi5}}
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
                              :color="(youthPRSportAprContents.kpi1 == null)?'grey-2':(youthPRSportAprContents.kpi1 >= '0' && youthPRSportAprContents.kpi1 <= '2.4')?'red':(youthPRSportAprContents.kpi1 > '2.4' && youthPRSportAprContents.kpi1 <= '3.2')?'orange':(youthPRSportAprContents.kpi1 > '3.2' && youthPRSportAprContents.kpi1 < '4')?'yellow-7':(youthPRSportAprContents.kpi1 >= '4' && youthPRSportAprContents.kpi1 < '4.8')?'green':(youthPRSportAprContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAprContents.kpi2 == null)?'grey-2':(youthPRSportAprContents.kpi2 >= '0' && youthPRSportAprContents.kpi2 <= '0.6')?'red':(youthPRSportAprContents.kpi2 > '0.6' && youthPRSportAprContents.kpi2 <= '0.8')?'orange':(youthPRSportAprContents.kpi2 > '0.8' && youthPRSportAprContents.kpi2 < '1')?'yellow-7':(youthPRSportAprContents.kpi2 >= '1' && youthPRSportAprContents.kpi2 < '1.2')?'green':(youthPRSportAprContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAprContents.kpi3 == null)?'grey-2':(youthPRSportAprContents.kpi3 >= '0' && youthPRSportAprContents.kpi3 <= '0.6')?'red':(youthPRSportAprContents.kpi3 > '0.6' && youthPRSportAprContents.kpi3 <= '0.8')?'orange':(youthPRSportAprContents.kpi3 > '0.8' && youthPRSportAprContents.kpi3 < '1')?'yellow-7':(youthPRSportAprContents.kpi3 >= '1' && youthPRSportAprContents.kpi3 < '1.2')?'green':(youthPRSportAprContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAprContents.kpi4 == null)?'grey-2':(youthPRSportAprContents.kpi4 >= '0' && youthPRSportAprContents.kpi4 <= '0.6')?'red':(youthPRSportAprContents.kpi4 > '0.6' && youthPRSportAprContents.kpi4 <= '0.8')?'orange':(youthPRSportAprContents.kpi4 > '0.8' && youthPRSportAprContents.kpi4 < '1')?'yellow-7':(youthPRSportAprContents.kpi4 >= '1' && youthPRSportAprContents.kpi4 < '1.2')?'green':(youthPRSportAprContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAprContents.kpi5 == null)?'grey-2':(youthPRSportAprContents.kpi5 >= '0' && youthPRSportAprContents.kpi5 <= '0.6')?'red':(youthPRSportAprContents.kpi5 > '0.6' && youthPRSportAprContents.kpi5 <= '0.8')?'orange':(youthPRSportAprContents.kpi5 > '0.8' && youthPRSportAprContents.kpi5 < '1')?'yellow-7':(youthPRSportAprContents.kpi5 >= '1' && youthPRSportAprContents.kpi5 < '1.2')?'green':(youthPRSportAprContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi5}}
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
                              :color="(youthPRSportMayContents.kpi1 == null)?'grey-2':(youthPRSportMayContents.kpi1 >= '0' && youthPRSportMayContents.kpi1 <= '2.4')?'red':(youthPRSportMayContents.kpi1 > '2.4' && youthPRSportMayContents.kpi1 <= '3.2')?'orange':(youthPRSportMayContents.kpi1 > '3.2' && youthPRSportMayContents.kpi1 < '4')?'yellow-7':(youthPRSportMayContents.kpi1 >= '4' && youthPRSportMayContents.kpi1 < '4.8')?'green':(youthPRSportMayContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMayContents.kpi2 == null)?'grey-2':(youthPRSportMayContents.kpi2 >= '0' && youthPRSportMayContents.kpi2 <= '0.6')?'red':(youthPRSportMayContents.kpi2 > '0.6' && youthPRSportMayContents.kpi2 <= '0.8')?'orange':(youthPRSportMayContents.kpi2 > '0.8' && youthPRSportMayContents.kpi2 < '1')?'yellow-7':(youthPRSportMayContents.kpi2 >= '1' && youthPRSportMayContents.kpi2 < '1.2')?'green':(youthPRSportMayContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMayContents.kpi3 == null)?'grey-2':(youthPRSportMayContents.kpi3 >= '0' && youthPRSportMayContents.kpi3 <= '0.6')?'red':(youthPRSportMayContents.kpi3 > '0.6' && youthPRSportMayContents.kpi3 <= '0.8')?'orange':(youthPRSportMayContents.kpi3 > '0.8' && youthPRSportMayContents.kpi3 < '1')?'yellow-7':(youthPRSportMayContents.kpi3 >= '1' && youthPRSportMayContents.kpi3 < '1.2')?'green':(youthPRSportMayContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMayContents.kpi4 == null)?'grey-2':(youthPRSportMayContents.kpi4 >= '0' && youthPRSportMayContents.kpi4 <= '0.6')?'red':(youthPRSportMayContents.kpi4 > '0.6' && youthPRSportMayContents.kpi4 <= '0.8')?'orange':(youthPRSportMayContents.kpi4 > '0.8' && youthPRSportMayContents.kpi4 < '1')?'yellow-7':(youthPRSportMayContents.kpi4 >= '1' && youthPRSportMayContents.kpi4 < '1.2')?'green':(youthPRSportMayContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMayContents.kpi5 == null)?'grey-2':(youthPRSportMayContents.kpi5 >= '0' && youthPRSportMayContents.kpi5 <= '0.6')?'red':(youthPRSportMayContents.kpi5 > '0.6' && youthPRSportMayContents.kpi5 <= '0.8')?'orange':(youthPRSportMayContents.kpi5 > '0.8' && youthPRSportMayContents.kpi5 < '1')?'yellow-7':(youthPRSportMayContents.kpi5 >= '1' && youthPRSportMayContents.kpi5 < '1.2')?'green':(youthPRSportMayContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi5}}
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
                              :color="(youthPRSportJunContents.kpi1 == null)?'grey-2':(youthPRSportJunContents.kpi1 >= '0' && youthPRSportJunContents.kpi1 <= '2.4')?'red':(youthPRSportJunContents.kpi1 > '2.4' && youthPRSportJunContents.kpi1 <= '3.2')?'orange':(youthPRSportJunContents.kpi1 > '3.2' && youthPRSportJunContents.kpi1 < '4')?'yellow-7':(youthPRSportJunContents.kpi1 >= '4' && youthPRSportJunContents.kpi1 < '4.8')?'green':(youthPRSportJunContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJunContents.kpi2 == null)?'grey-2':(youthPRSportJunContents.kpi2 >= '0' && youthPRSportJunContents.kpi2 <= '0.6')?'red':(youthPRSportJunContents.kpi2 > '0.6' && youthPRSportJunContents.kpi2 <= '0.8')?'orange':(youthPRSportJunContents.kpi2 > '0.8' && youthPRSportJunContents.kpi2 < '1')?'yellow-7':(youthPRSportJunContents.kpi2 >= '1' && youthPRSportJunContents.kpi2 < '1.2')?'green':(youthPRSportJunContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJunContents.kpi3 == null)?'grey-2':(youthPRSportJunContents.kpi3 >= '0' && youthPRSportJunContents.kpi3 <= '0.6')?'red':(youthPRSportJunContents.kpi3 > '0.6' && youthPRSportJunContents.kpi3 <= '0.8')?'orange':(youthPRSportJunContents.kpi3 > '0.8' && youthPRSportJunContents.kpi3 < '1')?'yellow-7':(youthPRSportJunContents.kpi3 >= '1' && youthPRSportJunContents.kpi3 < '1.2')?'green':(youthPRSportJunContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJunContents.kpi4 == null)?'grey-2':(youthPRSportJunContents.kpi4 >= '0' && youthPRSportJunContents.kpi4 <= '0.6')?'red':(youthPRSportJunContents.kpi4 > '0.6' && youthPRSportJunContents.kpi4 <= '0.8')?'orange':(youthPRSportJunContents.kpi4 > '0.8' && youthPRSportJunContents.kpi4 < '1')?'yellow-7':(youthPRSportJunContents.kpi4 >= '1' && youthPRSportJunContents.kpi4 < '1.2')?'green':(youthPRSportJunContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJunContents.kpi5 == null)?'grey-2':(youthPRSportJunContents.kpi5 >= '0' && youthPRSportJunContents.kpi5 <= '0.6')?'red':(youthPRSportJunContents.kpi5 > '0.6' && youthPRSportJunContents.kpi5 <= '0.8')?'orange':(youthPRSportJunContents.kpi5 > '0.8' && youthPRSportJunContents.kpi5 < '1')?'yellow-7':(youthPRSportJunContents.kpi5 >= '1' && youthPRSportJunContents.kpi5 < '1.2')?'green':(youthPRSportJunContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi5}}
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
                              :color="(youthPRSportJulContents.kpi1 == null)?'grey-2':(youthPRSportJulContents.kpi1 >= '0' && youthPRSportJulContents.kpi1 <= '2.4')?'red':(youthPRSportJulContents.kpi1 > '2.4' && youthPRSportJulContents.kpi1 <= '3.2')?'orange':(youthPRSportJulContents.kpi1 > '3.2' && youthPRSportJulContents.kpi1 < '4')?'yellow-7':(youthPRSportJulContents.kpi1 >= '4' && youthPRSportJulContents.kpi1 < '4.8')?'green':(youthPRSportJulContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJulContents.kpi2 == null)?'grey-2':(youthPRSportJulContents.kpi2 >= '0' && youthPRSportJulContents.kpi2 <= '0.6')?'red':(youthPRSportJulContents.kpi2 > '0.6' && youthPRSportJulContents.kpi2 <= '0.8')?'orange':(youthPRSportJulContents.kpi2 > '0.8' && youthPRSportJulContents.kpi2 < '1')?'yellow-7':(youthPRSportJulContents.kpi2 >= '1' && youthPRSportJulContents.kpi2 < '1.2')?'green':(youthPRSportJulContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJulContents.kpi3 == null)?'grey-2':(youthPRSportJulContents.kpi3 >= '0' && youthPRSportJulContents.kpi3 <= '0.6')?'red':(youthPRSportJulContents.kpi3 > '0.6' && youthPRSportJulContents.kpi3 <= '0.8')?'orange':(youthPRSportJulContents.kpi3 > '0.8' && youthPRSportJulContents.kpi3 < '1')?'yellow-7':(youthPRSportJulContents.kpi3 >= '1' && youthPRSportJulContents.kpi3 < '1.2')?'green':(youthPRSportJulContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJulContents.kpi4 == null)?'grey-2':(youthPRSportJulContents.kpi4 >= '0' && youthPRSportJulContents.kpi4 <= '0.6')?'red':(youthPRSportJulContents.kpi4 > '0.6' && youthPRSportJulContents.kpi4 <= '0.8')?'orange':(youthPRSportJulContents.kpi4 > '0.8' && youthPRSportJulContents.kpi4 < '1')?'yellow-7':(youthPRSportJulContents.kpi4 >= '1' && youthPRSportJulContents.kpi4 < '1.2')?'green':(youthPRSportJulContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJulContents.kpi5 == null)?'grey-2':(youthPRSportJulContents.kpi5 >= '0' && youthPRSportJulContents.kpi5 <= '0.6')?'red':(youthPRSportJulContents.kpi5 > '0.6' && youthPRSportJulContents.kpi5 <= '0.8')?'orange':(youthPRSportJulContents.kpi5 > '0.8' && youthPRSportJulContents.kpi5 < '1')?'yellow-7':(youthPRSportJulContents.kpi5 >= '1' && youthPRSportJulContents.kpi5 < '1.2')?'green':(youthPRSportJulContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi5}}
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
                              :color="(youthPRSportAugContents.kpi1 == null)?'grey-2':(youthPRSportAugContents.kpi1 >= '0' && youthPRSportAugContents.kpi1 <= '2.4')?'red':(youthPRSportAugContents.kpi1 > '2.4' && youthPRSportAugContents.kpi1 <= '3.2')?'orange':(youthPRSportAugContents.kpi1 > '3.2' && youthPRSportAugContents.kpi1 < '4')?'yellow-7':(youthPRSportAugContents.kpi1 >= '4' && youthPRSportAugContents.kpi1 < '4.8')?'green':(youthPRSportAugContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAugContents.kpi2 == null)?'grey-2':(youthPRSportAugContents.kpi2 >= '0' && youthPRSportAugContents.kpi2 <= '0.6')?'red':(youthPRSportAugContents.kpi2 > '0.6' && youthPRSportAugContents.kpi2 <= '0.8')?'orange':(youthPRSportAugContents.kpi2 > '0.8' && youthPRSportAugContents.kpi2 < '1')?'yellow-7':(youthPRSportAugContents.kpi2 >= '1' && youthPRSportAugContents.kpi2 < '1.2')?'green':(youthPRSportAugContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAugContents.kpi3 == null)?'grey-2':(youthPRSportAugContents.kpi3 >= '0' && youthPRSportAugContents.kpi3 <= '0.6')?'red':(youthPRSportAugContents.kpi3 > '0.6' && youthPRSportAugContents.kpi3 <= '0.8')?'orange':(youthPRSportAugContents.kpi3 > '0.8' && youthPRSportAugContents.kpi3 < '1')?'yellow-7':(youthPRSportAugContents.kpi3 >= '1' && youthPRSportAugContents.kpi3 < '1.2')?'green':(youthPRSportAugContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAugContents.kpi4 == null)?'grey-2':(youthPRSportAugContents.kpi4 >= '0' && youthPRSportAugContents.kpi4 <= '0.6')?'red':(youthPRSportAugContents.kpi4 > '0.6' && youthPRSportAugContents.kpi4 <= '0.8')?'orange':(youthPRSportAugContents.kpi4 > '0.8' && youthPRSportAugContents.kpi4 < '1')?'yellow-7':(youthPRSportAugContents.kpi4 >= '1' && youthPRSportAugContents.kpi4 < '1.2')?'green':(youthPRSportAugContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAugContents.kpi5 == null)?'grey-2':(youthPRSportAugContents.kpi5 >= '0' && youthPRSportAugContents.kpi5 <= '0.6')?'red':(youthPRSportAugContents.kpi5 > '0.6' && youthPRSportAugContents.kpi5 <= '0.8')?'orange':(youthPRSportAugContents.kpi5 > '0.8' && youthPRSportAugContents.kpi5 < '1')?'yellow-7':(youthPRSportAugContents.kpi5 >= '1' && youthPRSportAugContents.kpi5 < '1.2')?'green':(youthPRSportAugContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi5}}
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
                              :color="(youthPRSportSepContents.kpi1 == null)?'grey-2':(youthPRSportSepContents.kpi1 >= '0' && youthPRSportSepContents.kpi1 <= '2.4')?'red':(youthPRSportSepContents.kpi1 > '2.4' && youthPRSportSepContents.kpi1 <= '3.2')?'orange':(youthPRSportSepContents.kpi1 > '3.2' && youthPRSportSepContents.kpi1 < '4')?'yellow-7':(youthPRSportSepContents.kpi1 >= '4' && youthPRSportSepContents.kpi1 < '4.8')?'green':(youthPRSportSepContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportSepContents.kpi2 == null)?'grey-2':(youthPRSportSepContents.kpi2 >= '0' && youthPRSportSepContents.kpi2 <= '0.6')?'red':(youthPRSportSepContents.kpi2 > '0.6' && youthPRSportSepContents.kpi2 <= '0.8')?'orange':(youthPRSportSepContents.kpi2 > '0.8' && youthPRSportSepContents.kpi2 < '1')?'yellow-7':(youthPRSportSepContents.kpi2 >= '1' && youthPRSportSepContents.kpi2 < '1.2')?'green':(youthPRSportSepContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportSepContents.kpi3 == null)?'grey-2':(youthPRSportSepContents.kpi3 >= '0' && youthPRSportSepContents.kpi3 <= '0.6')?'red':(youthPRSportSepContents.kpi3 > '0.6' && youthPRSportSepContents.kpi3 <= '0.8')?'orange':(youthPRSportSepContents.kpi3 > '0.8' && youthPRSportSepContents.kpi3 < '1')?'yellow-7':(youthPRSportSepContents.kpi3 >= '1' && youthPRSportSepContents.kpi3 < '1.2')?'green':(youthPRSportSepContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportSepContents.kpi4 == null)?'grey-2':(youthPRSportSepContents.kpi4 >= '0' && youthPRSportSepContents.kpi4 <= '0.6')?'red':(youthPRSportSepContents.kpi4 > '0.6' && youthPRSportSepContents.kpi4 <= '0.8')?'orange':(youthPRSportSepContents.kpi4 > '0.8' && youthPRSportSepContents.kpi4 < '1')?'yellow-7':(youthPRSportSepContents.kpi4 >= '1' && youthPRSportSepContents.kpi4 < '1.2')?'green':(youthPRSportSepContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportSepContents.kpi5 == null)?'grey-2':(youthPRSportSepContents.kpi5 >= '0' && youthPRSportSepContents.kpi5 <= '0.6')?'red':(youthPRSportSepContents.kpi5 > '0.6' && youthPRSportSepContents.kpi5 <= '0.8')?'orange':(youthPRSportSepContents.kpi5 > '0.8' && youthPRSportSepContents.kpi5 < '1')?'yellow-7':(youthPRSportSepContents.kpi5 >= '1' && youthPRSportSepContents.kpi5 < '1.2')?'green':(youthPRSportSepContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi5}}
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
                              :color="(youthPRSportOctContents.kpi1 == null)?'grey-2':(youthPRSportOctContents.kpi1 >= '0' && youthPRSportOctContents.kpi1 <= '2.4')?'red':(youthPRSportOctContents.kpi1 > '2.4' && youthPRSportOctContents.kpi1 <= '3.2')?'orange':(youthPRSportOctContents.kpi1 > '3.2' && youthPRSportOctContents.kpi1 < '4')?'yellow-7':(youthPRSportOctContents.kpi1 >= '4' && youthPRSportOctContents.kpi1 < '4.8')?'green':(youthPRSportOctContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportOctContents.kpi2 == null)?'grey-2':(youthPRSportOctContents.kpi2 >= '0' && youthPRSportOctContents.kpi2 <= '0.6')?'red':(youthPRSportOctContents.kpi2 > '0.6' && youthPRSportOctContents.kpi2 <= '0.8')?'orange':(youthPRSportOctContents.kpi2 > '0.8' && youthPRSportOctContents.kpi2 < '1')?'yellow-7':(youthPRSportOctContents.kpi2 >= '1' && youthPRSportOctContents.kpi2 < '1.2')?'green':(youthPRSportOctContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportOctContents.kpi3 == null)?'grey-2':(youthPRSportOctContents.kpi3 >= '0' && youthPRSportOctContents.kpi3 <= '0.6')?'red':(youthPRSportOctContents.kpi3 > '0.6' && youthPRSportOctContents.kpi3 <= '0.8')?'orange':(youthPRSportOctContents.kpi3 > '0.8' && youthPRSportOctContents.kpi3 < '1')?'yellow-7':(youthPRSportOctContents.kpi3 >= '1' && youthPRSportOctContents.kpi3 < '1.2')?'green':(youthPRSportOctContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportOctContents.kpi4 == null)?'grey-2':(youthPRSportOctContents.kpi4 >= '0' && youthPRSportOctContents.kpi4 <= '0.6')?'red':(youthPRSportOctContents.kpi4 > '0.6' && youthPRSportOctContents.kpi4 <= '0.8')?'orange':(youthPRSportOctContents.kpi4 > '0.8' && youthPRSportOctContents.kpi4 < '1')?'yellow-7':(youthPRSportOctContents.kpi4 >= '1' && youthPRSportOctContents.kpi4 < '1.2')?'green':(youthPRSportOctContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportOctContents.kpi5 == null)?'grey-2':(youthPRSportOctContents.kpi5 >= '0' && youthPRSportOctContents.kpi5 <= '0.6')?'red':(youthPRSportOctContents.kpi5 > '0.6' && youthPRSportOctContents.kpi5 <= '0.8')?'orange':(youthPRSportOctContents.kpi5 > '0.8' && youthPRSportOctContents.kpi5 < '1')?'yellow-7':(youthPRSportOctContents.kpi5 >= '1' && youthPRSportOctContents.kpi5 < '1.2')?'green':(youthPRSportOctContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi5}}
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
                              :color="(youthPRSportNovContents.kpi1 == null)?'grey-2':(youthPRSportNovContents.kpi1 >= '0' && youthPRSportNovContents.kpi1 <= '2.4')?'red':(youthPRSportNovContents.kpi1 > '2.4' && youthPRSportNovContents.kpi1 <= '3.2')?'orange':(youthPRSportNovContents.kpi1 > '3.2' && youthPRSportNovContents.kpi1 < '4')?'yellow-7':(youthPRSportNovContents.kpi1 >= '4' && youthPRSportNovContents.kpi1 < '4.8')?'green':(youthPRSportNovContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportNovContents.kpi2 == null)?'grey-2':(youthPRSportNovContents.kpi2 >= '0' && youthPRSportNovContents.kpi2 <= '0.6')?'red':(youthPRSportNovContents.kpi2 > '0.6' && youthPRSportNovContents.kpi2 <= '0.8')?'orange':(youthPRSportNovContents.kpi2 > '0.8' && youthPRSportNovContents.kpi2 < '1')?'yellow-7':(youthPRSportNovContents.kpi2 >= '1' && youthPRSportNovContents.kpi2 < '1.2')?'green':(youthPRSportNovContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportNovContents.kpi3 == null)?'grey-2':(youthPRSportNovContents.kpi3 >= '0' && youthPRSportNovContents.kpi3 <= '0.6')?'red':(youthPRSportNovContents.kpi3 > '0.6' && youthPRSportNovContents.kpi3 <= '0.8')?'orange':(youthPRSportNovContents.kpi3 > '0.8' && youthPRSportNovContents.kpi3 < '1')?'yellow-7':(youthPRSportNovContents.kpi3 >= '1' && youthPRSportNovContents.kpi3 < '1.2')?'green':(youthPRSportNovContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportNovContents.kpi4 == null)?'grey-2':(youthPRSportNovContents.kpi4 >= '0' && youthPRSportNovContents.kpi4 <= '0.6')?'red':(youthPRSportNovContents.kpi4 > '0.6' && youthPRSportNovContents.kpi4 <= '0.8')?'orange':(youthPRSportNovContents.kpi4 > '0.8' && youthPRSportNovContents.kpi4 < '1')?'yellow-7':(youthPRSportNovContents.kpi4 >= '1' && youthPRSportNovContents.kpi4 < '1.2')?'green':(youthPRSportNovContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportNovContents.kpi5 == null)?'grey-2':(youthPRSportNovContents.kpi5 >= '0' && youthPRSportNovContents.kpi5 <= '0.6')?'red':(youthPRSportNovContents.kpi5 > '0.6' && youthPRSportNovContents.kpi5 <= '0.8')?'orange':(youthPRSportNovContents.kpi5 > '0.8' && youthPRSportNovContents.kpi5 < '1')?'yellow-7':(youthPRSportNovContents.kpi5 >= '1' && youthPRSportNovContents.kpi5 < '1.2')?'green':(youthPRSportNovContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi5}}
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
                              :color="(youthPRSportDecContents.kpi1 == null)?'grey-2':(youthPRSportDecContents.kpi1 >= '0' && youthPRSportDecContents.kpi1 <= '2.4')?'red':(youthPRSportDecContents.kpi1 > '2.4' && youthPRSportDecContents.kpi1 <= '3.2')?'orange':(youthPRSportDecContents.kpi1 > '3.2' && youthPRSportDecContents.kpi1 < '4')?'yellow-7':(youthPRSportDecContents.kpi1 >= '4' && youthPRSportDecContents.kpi1 < '4.8')?'green':(youthPRSportDecContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportDecContents.kpi2 == null)?'grey-2':(youthPRSportDecContents.kpi2 >= '0' && youthPRSportDecContents.kpi2 <= '0.6')?'red':(youthPRSportDecContents.kpi2 > '0.6' && youthPRSportDecContents.kpi2 <= '0.8')?'orange':(youthPRSportDecContents.kpi2 > '0.8' && youthPRSportDecContents.kpi2 < '1')?'yellow-7':(youthPRSportDecContents.kpi2 >= '1' && youthPRSportDecContents.kpi2 < '1.2')?'green':(youthPRSportDecContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportDecContents.kpi3 == null)?'grey-2':(youthPRSportDecContents.kpi3 >= '0' && youthPRSportDecContents.kpi3 <= '0.6')?'red':(youthPRSportDecContents.kpi3 > '0.6' && youthPRSportDecContents.kpi3 <= '0.8')?'orange':(youthPRSportDecContents.kpi3 > '0.8' && youthPRSportDecContents.kpi3 < '1')?'yellow-7':(youthPRSportDecContents.kpi3 >= '1' && youthPRSportDecContents.kpi3 < '1.2')?'green':(youthPRSportDecContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportDecContents.kpi4 == null)?'grey-2':(youthPRSportDecContents.kpi4 >= '0' && youthPRSportDecContents.kpi4 <= '0.6')?'red':(youthPRSportDecContents.kpi4 > '0.6' && youthPRSportDecContents.kpi4 <= '0.8')?'orange':(youthPRSportDecContents.kpi4 > '0.8' && youthPRSportDecContents.kpi4 < '1')?'yellow-7':(youthPRSportDecContents.kpi4 >= '1' && youthPRSportDecContents.kpi4 < '1.2')?'green':(youthPRSportDecContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportDecContents.kpi5 == null)?'grey-2':(youthPRSportDecContents.kpi5 >= '0' && youthPRSportDecContents.kpi5 <= '0.6')?'red':(youthPRSportDecContents.kpi5 > '0.6' && youthPRSportDecContents.kpi5 <= '0.8')?'orange':(youthPRSportDecContents.kpi5 > '0.8' && youthPRSportDecContents.kpi5 < '1')?'yellow-7':(youthPRSportDecContents.kpi5 >= '1' && youthPRSportDecContents.kpi5 < '1.2')?'green':(youthPRSportDecContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi5}}
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
                                <q-tooltip># of unique children</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of total children</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of unique youth</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip># of total youth</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 5
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
                              :color="(youthPRSportJanContents.kpi1 == null)?'grey-2':(youthPRSportJanContents.kpi1 >= '0' && youthPRSportJanContents.kpi1 <= '2.4')?'red':(youthPRSportJanContents.kpi1 > '2.4' && youthPRSportJanContents.kpi1 <= '3.2')?'orange':(youthPRSportJanContents.kpi1 > '3.2' && youthPRSportJanContents.kpi1 < '4')?'yellow-7':(youthPRSportJanContents.kpi1 >= '4' && youthPRSportJanContents.kpi1 < '4.8')?'green':(youthPRSportJanContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJanContents.kpi2 == null)?'grey-2':(youthPRSportJanContents.kpi2 >= '0' && youthPRSportJanContents.kpi2 <= '0.6')?'red':(youthPRSportJanContents.kpi2 > '0.6' && youthPRSportJanContents.kpi2 <= '0.8')?'orange':(youthPRSportJanContents.kpi2 > '0.8' && youthPRSportJanContents.kpi2 < '1')?'yellow-7':(youthPRSportJanContents.kpi2 >= '1' && youthPRSportJanContents.kpi2 < '1.2')?'green':(youthPRSportJanContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJanContents.kpi3 == null)?'grey-2':(youthPRSportJanContents.kpi3 >= '0' && youthPRSportJanContents.kpi3 <= '0.6')?'red':(youthPRSportJanContents.kpi3 > '0.6' && youthPRSportJanContents.kpi3 <= '0.8')?'orange':(youthPRSportJanContents.kpi3 > '0.8' && youthPRSportJanContents.kpi3 < '1')?'yellow-7':(youthPRSportJanContents.kpi3 >= '1' && youthPRSportJanContents.kpi3 < '1.2')?'green':(youthPRSportJanContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJanContents.kpi4 == null)?'grey-2':(youthPRSportJanContents.kpi4 >= '0' && youthPRSportJanContents.kpi4 <= '0.6')?'red':(youthPRSportJanContents.kpi4 > '0.6' && youthPRSportJanContents.kpi4 <= '0.8')?'orange':(youthPRSportJanContents.kpi4 > '0.8' && youthPRSportJanContents.kpi4 < '1')?'yellow-7':(youthPRSportJanContents.kpi4 >= '1' && youthPRSportJanContents.kpi4 < '1.2')?'green':(youthPRSportJanContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJanContents.kpi5 == null)?'grey-2':(youthPRSportJanContents.kpi5 >= '0' && youthPRSportJanContents.kpi5 <= '0.6')?'red':(youthPRSportJanContents.kpi5 > '0.6' && youthPRSportJanContents.kpi5 <= '0.8')?'orange':(youthPRSportJanContents.kpi5 > '0.8' && youthPRSportJanContents.kpi5 < '1')?'yellow-7':(youthPRSportJanContents.kpi5 >= '1' && youthPRSportJanContents.kpi5 < '1.2')?'green':(youthPRSportJanContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi5}}
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
                              :color="(youthPRSportFebContents.kpi1 == null)?'grey-2':(youthPRSportFebContents.kpi1 >= '0' && youthPRSportFebContents.kpi1 <= '2.4')?'red':(youthPRSportFebContents.kpi1 > '2.4' && youthPRSportFebContents.kpi1 <= '3.2')?'orange':(youthPRSportFebContents.kpi1 > '3.2' && youthPRSportFebContents.kpi1 < '4')?'yellow-7':(youthPRSportFebContents.kpi1 >= '4' && youthPRSportFebContents.kpi1 < '4.8')?'green':(youthPRSportFebContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportFebContents.kpi2 == null)?'grey-2':(youthPRSportFebContents.kpi2 >= '0' && youthPRSportFebContents.kpi2 <= '0.6')?'red':(youthPRSportFebContents.kpi2 > '0.6' && youthPRSportFebContents.kpi2 <= '0.8')?'orange':(youthPRSportFebContents.kpi2 > '0.8' && youthPRSportFebContents.kpi2 < '1')?'yellow-7':(youthPRSportFebContents.kpi2 >= '1' && youthPRSportFebContents.kpi2 < '1.2')?'green':(youthPRSportFebContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportFebContents.kpi3 == null)?'grey-2':(youthPRSportFebContents.kpi3 >= '0' && youthPRSportFebContents.kpi3 <= '0.6')?'red':(youthPRSportFebContents.kpi3 > '0.6' && youthPRSportFebContents.kpi3 <= '0.8')?'orange':(youthPRSportFebContents.kpi3 > '0.8' && youthPRSportFebContents.kpi3 < '1')?'yellow-7':(youthPRSportFebContents.kpi3 >= '1' && youthPRSportFebContents.kpi3 < '1.2')?'green':(youthPRSportFebContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportFebContents.kpi4 == null)?'grey-2':(youthPRSportFebContents.kpi4 >= '0' && youthPRSportFebContents.kpi4 <= '0.6')?'red':(youthPRSportFebContents.kpi4 > '0.6' && youthPRSportFebContents.kpi4 <= '0.8')?'orange':(youthPRSportFebContents.kpi4 > '0.8' && youthPRSportFebContents.kpi4 < '1')?'yellow-7':(youthPRSportFebContents.kpi4 >= '1' && youthPRSportFebContents.kpi4 < '1.2')?'green':(youthPRSportFebContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportFebContents.kpi5 == null)?'grey-2':(youthPRSportFebContents.kpi5 >= '0' && youthPRSportFebContents.kpi5 <= '0.6')?'red':(youthPRSportFebContents.kpi5 > '0.6' && youthPRSportFebContents.kpi5 <= '0.8')?'orange':(youthPRSportFebContents.kpi5 > '0.8' && youthPRSportFebContents.kpi5 < '1')?'yellow-7':(youthPRSportFebContents.kpi5 >= '1' && youthPRSportFebContents.kpi5 < '1.2')?'green':(youthPRSportFebContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi5}}
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
                              :color="(youthPRSportMarContents.kpi1 == null)?'grey-2':(youthPRSportMarContents.kpi1 >= '0' && youthPRSportMarContents.kpi1 <= '2.4')?'red':(youthPRSportMarContents.kpi1 > '2.4' && youthPRSportMarContents.kpi1 <= '3.2')?'orange':(youthPRSportMarContents.kpi1 > '3.2' && youthPRSportMarContents.kpi1 < '4')?'yellow-7':(youthPRSportMarContents.kpi1 >= '4' && youthPRSportMarContents.kpi1 < '4.8')?'green':(youthPRSportMarContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMarContents.kpi2 == null)?'grey-2':(youthPRSportMarContents.kpi2 >= '0' && youthPRSportMarContents.kpi2 <= '0.6')?'red':(youthPRSportMarContents.kpi2 > '0.6' && youthPRSportMarContents.kpi2 <= '0.8')?'orange':(youthPRSportMarContents.kpi2 > '0.8' && youthPRSportMarContents.kpi2 < '1')?'yellow-7':(youthPRSportMarContents.kpi2 >= '1' && youthPRSportMarContents.kpi2 < '1.2')?'green':(youthPRSportMarContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMarContents.kpi3 == null)?'grey-2':(youthPRSportMarContents.kpi3 >= '0' && youthPRSportMarContents.kpi3 <= '0.6')?'red':(youthPRSportMarContents.kpi3 > '0.6' && youthPRSportMarContents.kpi3 <= '0.8')?'orange':(youthPRSportMarContents.kpi3 > '0.8' && youthPRSportMarContents.kpi3 < '1')?'yellow-7':(youthPRSportMarContents.kpi3 >= '1' && youthPRSportMarContents.kpi3 < '1.2')?'green':(youthPRSportMarContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMarContents.kpi4 == null)?'grey-2':(youthPRSportMarContents.kpi4 >= '0' && youthPRSportMarContents.kpi4 <= '0.6')?'red':(youthPRSportMarContents.kpi4 > '0.6' && youthPRSportMarContents.kpi4 <= '0.8')?'orange':(youthPRSportMarContents.kpi4 > '0.8' && youthPRSportMarContents.kpi4 < '1')?'yellow-7':(youthPRSportMarContents.kpi4 >= '1' && youthPRSportMarContents.kpi4 < '1.2')?'green':(youthPRSportMarContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMarContents.kpi5 == null)?'grey-2':(youthPRSportMarContents.kpi5 >= '0' && youthPRSportMarContents.kpi5 <= '0.6')?'red':(youthPRSportMarContents.kpi5 > '0.6' && youthPRSportMarContents.kpi5 <= '0.8')?'orange':(youthPRSportMarContents.kpi5 > '0.8' && youthPRSportMarContents.kpi5 < '1')?'yellow-7':(youthPRSportMarContents.kpi5 >= '1' && youthPRSportMarContents.kpi5 < '1.2')?'green':(youthPRSportMarContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi5}}
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
                              :color="(youthPRSportAprContents.kpi1 == null)?'grey-2':(youthPRSportAprContents.kpi1 >= '0' && youthPRSportAprContents.kpi1 <= '2.4')?'red':(youthPRSportAprContents.kpi1 > '2.4' && youthPRSportAprContents.kpi1 <= '3.2')?'orange':(youthPRSportAprContents.kpi1 > '3.2' && youthPRSportAprContents.kpi1 < '4')?'yellow-7':(youthPRSportAprContents.kpi1 >= '4' && youthPRSportAprContents.kpi1 < '4.8')?'green':(youthPRSportAprContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAprContents.kpi2 == null)?'grey-2':(youthPRSportAprContents.kpi2 >= '0' && youthPRSportAprContents.kpi2 <= '0.6')?'red':(youthPRSportAprContents.kpi2 > '0.6' && youthPRSportAprContents.kpi2 <= '0.8')?'orange':(youthPRSportAprContents.kpi2 > '0.8' && youthPRSportAprContents.kpi2 < '1')?'yellow-7':(youthPRSportAprContents.kpi2 >= '1' && youthPRSportAprContents.kpi2 < '1.2')?'green':(youthPRSportAprContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAprContents.kpi3 == null)?'grey-2':(youthPRSportAprContents.kpi3 >= '0' && youthPRSportAprContents.kpi3 <= '0.6')?'red':(youthPRSportAprContents.kpi3 > '0.6' && youthPRSportAprContents.kpi3 <= '0.8')?'orange':(youthPRSportAprContents.kpi3 > '0.8' && youthPRSportAprContents.kpi3 < '1')?'yellow-7':(youthPRSportAprContents.kpi3 >= '1' && youthPRSportAprContents.kpi3 < '1.2')?'green':(youthPRSportAprContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAprContents.kpi4 == null)?'grey-2':(youthPRSportAprContents.kpi4 >= '0' && youthPRSportAprContents.kpi4 <= '0.6')?'red':(youthPRSportAprContents.kpi4 > '0.6' && youthPRSportAprContents.kpi4 <= '0.8')?'orange':(youthPRSportAprContents.kpi4 > '0.8' && youthPRSportAprContents.kpi4 < '1')?'yellow-7':(youthPRSportAprContents.kpi4 >= '1' && youthPRSportAprContents.kpi4 < '1.2')?'green':(youthPRSportAprContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAprContents.kpi5 == null)?'grey-2':(youthPRSportAprContents.kpi5 >= '0' && youthPRSportAprContents.kpi5 <= '0.6')?'red':(youthPRSportAprContents.kpi5 > '0.6' && youthPRSportAprContents.kpi5 <= '0.8')?'orange':(youthPRSportAprContents.kpi5 > '0.8' && youthPRSportAprContents.kpi5 < '1')?'yellow-7':(youthPRSportAprContents.kpi5 >= '1' && youthPRSportAprContents.kpi5 < '1.2')?'green':(youthPRSportAprContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi5}}
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
                              :color="(youthPRSportMayContents.kpi1 == null)?'grey-2':(youthPRSportMayContents.kpi1 >= '0' && youthPRSportMayContents.kpi1 <= '2.4')?'red':(youthPRSportMayContents.kpi1 > '2.4' && youthPRSportMayContents.kpi1 <= '3.2')?'orange':(youthPRSportMayContents.kpi1 > '3.2' && youthPRSportMayContents.kpi1 < '4')?'yellow-7':(youthPRSportMayContents.kpi1 >= '4' && youthPRSportMayContents.kpi1 < '4.8')?'green':(youthPRSportMayContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMayContents.kpi2 == null)?'grey-2':(youthPRSportMayContents.kpi2 >= '0' && youthPRSportMayContents.kpi2 <= '0.6')?'red':(youthPRSportMayContents.kpi2 > '0.6' && youthPRSportMayContents.kpi2 <= '0.8')?'orange':(youthPRSportMayContents.kpi2 > '0.8' && youthPRSportMayContents.kpi2 < '1')?'yellow-7':(youthPRSportMayContents.kpi2 >= '1' && youthPRSportMayContents.kpi2 < '1.2')?'green':(youthPRSportMayContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMayContents.kpi3 == null)?'grey-2':(youthPRSportMayContents.kpi3 >= '0' && youthPRSportMayContents.kpi3 <= '0.6')?'red':(youthPRSportMayContents.kpi3 > '0.6' && youthPRSportMayContents.kpi3 <= '0.8')?'orange':(youthPRSportMayContents.kpi3 > '0.8' && youthPRSportMayContents.kpi3 < '1')?'yellow-7':(youthPRSportMayContents.kpi3 >= '1' && youthPRSportMayContents.kpi3 < '1.2')?'green':(youthPRSportMayContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMayContents.kpi4 == null)?'grey-2':(youthPRSportMayContents.kpi4 >= '0' && youthPRSportMayContents.kpi4 <= '0.6')?'red':(youthPRSportMayContents.kpi4 > '0.6' && youthPRSportMayContents.kpi4 <= '0.8')?'orange':(youthPRSportMayContents.kpi4 > '0.8' && youthPRSportMayContents.kpi4 < '1')?'yellow-7':(youthPRSportMayContents.kpi4 >= '1' && youthPRSportMayContents.kpi4 < '1.2')?'green':(youthPRSportMayContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMayContents.kpi5 == null)?'grey-2':(youthPRSportMayContents.kpi5 >= '0' && youthPRSportMayContents.kpi5 <= '0.6')?'red':(youthPRSportMayContents.kpi5 > '0.6' && youthPRSportMayContents.kpi5 <= '0.8')?'orange':(youthPRSportMayContents.kpi5 > '0.8' && youthPRSportMayContents.kpi5 < '1')?'yellow-7':(youthPRSportMayContents.kpi5 >= '1' && youthPRSportMayContents.kpi5 < '1.2')?'green':(youthPRSportMayContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi5}}
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
                              :color="(youthPRSportJunContents.kpi1 == null)?'grey-2':(youthPRSportJunContents.kpi1 >= '0' && youthPRSportJunContents.kpi1 <= '2.4')?'red':(youthPRSportJunContents.kpi1 > '2.4' && youthPRSportJunContents.kpi1 <= '3.2')?'orange':(youthPRSportJunContents.kpi1 > '3.2' && youthPRSportJunContents.kpi1 < '4')?'yellow-7':(youthPRSportJunContents.kpi1 >= '4' && youthPRSportJunContents.kpi1 < '4.8')?'green':(youthPRSportJunContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJunContents.kpi2 == null)?'grey-2':(youthPRSportJunContents.kpi2 >= '0' && youthPRSportJunContents.kpi2 <= '0.6')?'red':(youthPRSportJunContents.kpi2 > '0.6' && youthPRSportJunContents.kpi2 <= '0.8')?'orange':(youthPRSportJunContents.kpi2 > '0.8' && youthPRSportJunContents.kpi2 < '1')?'yellow-7':(youthPRSportJunContents.kpi2 >= '1' && youthPRSportJunContents.kpi2 < '1.2')?'green':(youthPRSportJunContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJunContents.kpi3 == null)?'grey-2':(youthPRSportJunContents.kpi3 >= '0' && youthPRSportJunContents.kpi3 <= '0.6')?'red':(youthPRSportJunContents.kpi3 > '0.6' && youthPRSportJunContents.kpi3 <= '0.8')?'orange':(youthPRSportJunContents.kpi3 > '0.8' && youthPRSportJunContents.kpi3 < '1')?'yellow-7':(youthPRSportJunContents.kpi3 >= '1' && youthPRSportJunContents.kpi3 < '1.2')?'green':(youthPRSportJunContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJunContents.kpi4 == null)?'grey-2':(youthPRSportJunContents.kpi4 >= '0' && youthPRSportJunContents.kpi4 <= '0.6')?'red':(youthPRSportJunContents.kpi4 > '0.6' && youthPRSportJunContents.kpi4 <= '0.8')?'orange':(youthPRSportJunContents.kpi4 > '0.8' && youthPRSportJunContents.kpi4 < '1')?'yellow-7':(youthPRSportJunContents.kpi4 >= '1' && youthPRSportJunContents.kpi4 < '1.2')?'green':(youthPRSportJunContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJunContents.kpi5 == null)?'grey-2':(youthPRSportJunContents.kpi5 >= '0' && youthPRSportJunContents.kpi5 <= '0.6')?'red':(youthPRSportJunContents.kpi5 > '0.6' && youthPRSportJunContents.kpi5 <= '0.8')?'orange':(youthPRSportJunContents.kpi5 > '0.8' && youthPRSportJunContents.kpi5 < '1')?'yellow-7':(youthPRSportJunContents.kpi5 >= '1' && youthPRSportJunContents.kpi5 < '1.2')?'green':(youthPRSportJunContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi5}}
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
                              :color="(youthPRSportJulContents.kpi1 == null)?'grey-2':(youthPRSportJulContents.kpi1 >= '0' && youthPRSportJulContents.kpi1 <= '2.4')?'red':(youthPRSportJulContents.kpi1 > '2.4' && youthPRSportJulContents.kpi1 <= '3.2')?'orange':(youthPRSportJulContents.kpi1 > '3.2' && youthPRSportJulContents.kpi1 < '4')?'yellow-7':(youthPRSportJulContents.kpi1 >= '4' && youthPRSportJulContents.kpi1 < '4.8')?'green':(youthPRSportJulContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJulContents.kpi2 == null)?'grey-2':(youthPRSportJulContents.kpi2 >= '0' && youthPRSportJulContents.kpi2 <= '0.6')?'red':(youthPRSportJulContents.kpi2 > '0.6' && youthPRSportJulContents.kpi2 <= '0.8')?'orange':(youthPRSportJulContents.kpi2 > '0.8' && youthPRSportJulContents.kpi2 < '1')?'yellow-7':(youthPRSportJulContents.kpi2 >= '1' && youthPRSportJulContents.kpi2 < '1.2')?'green':(youthPRSportJulContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJulContents.kpi3 == null)?'grey-2':(youthPRSportJulContents.kpi3 >= '0' && youthPRSportJulContents.kpi3 <= '0.6')?'red':(youthPRSportJulContents.kpi3 > '0.6' && youthPRSportJulContents.kpi3 <= '0.8')?'orange':(youthPRSportJulContents.kpi3 > '0.8' && youthPRSportJulContents.kpi3 < '1')?'yellow-7':(youthPRSportJulContents.kpi3 >= '1' && youthPRSportJulContents.kpi3 < '1.2')?'green':(youthPRSportJulContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJulContents.kpi4 == null)?'grey-2':(youthPRSportJulContents.kpi4 >= '0' && youthPRSportJulContents.kpi4 <= '0.6')?'red':(youthPRSportJulContents.kpi4 > '0.6' && youthPRSportJulContents.kpi4 <= '0.8')?'orange':(youthPRSportJulContents.kpi4 > '0.8' && youthPRSportJulContents.kpi4 < '1')?'yellow-7':(youthPRSportJulContents.kpi4 >= '1' && youthPRSportJulContents.kpi4 < '1.2')?'green':(youthPRSportJulContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJulContents.kpi5 == null)?'grey-2':(youthPRSportJulContents.kpi5 >= '0' && youthPRSportJulContents.kpi5 <= '0.6')?'red':(youthPRSportJulContents.kpi5 > '0.6' && youthPRSportJulContents.kpi5 <= '0.8')?'orange':(youthPRSportJulContents.kpi5 > '0.8' && youthPRSportJulContents.kpi5 < '1')?'yellow-7':(youthPRSportJulContents.kpi5 >= '1' && youthPRSportJulContents.kpi5 < '1.2')?'green':(youthPRSportJulContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi5}}
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
                              :color="(youthPRSportAugContents.kpi1 == null)?'grey-2':(youthPRSportAugContents.kpi1 >= '0' && youthPRSportAugContents.kpi1 <= '2.4')?'red':(youthPRSportAugContents.kpi1 > '2.4' && youthPRSportAugContents.kpi1 <= '3.2')?'orange':(youthPRSportAugContents.kpi1 > '3.2' && youthPRSportAugContents.kpi1 < '4')?'yellow-7':(youthPRSportAugContents.kpi1 >= '4' && youthPRSportAugContents.kpi1 < '4.8')?'green':(youthPRSportAugContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAugContents.kpi2 == null)?'grey-2':(youthPRSportAugContents.kpi2 >= '0' && youthPRSportAugContents.kpi2 <= '0.6')?'red':(youthPRSportAugContents.kpi2 > '0.6' && youthPRSportAugContents.kpi2 <= '0.8')?'orange':(youthPRSportAugContents.kpi2 > '0.8' && youthPRSportAugContents.kpi2 < '1')?'yellow-7':(youthPRSportAugContents.kpi2 >= '1' && youthPRSportAugContents.kpi2 < '1.2')?'green':(youthPRSportAugContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAugContents.kpi3 == null)?'grey-2':(youthPRSportAugContents.kpi3 >= '0' && youthPRSportAugContents.kpi3 <= '0.6')?'red':(youthPRSportAugContents.kpi3 > '0.6' && youthPRSportAugContents.kpi3 <= '0.8')?'orange':(youthPRSportAugContents.kpi3 > '0.8' && youthPRSportAugContents.kpi3 < '1')?'yellow-7':(youthPRSportAugContents.kpi3 >= '1' && youthPRSportAugContents.kpi3 < '1.2')?'green':(youthPRSportAugContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAugContents.kpi4 == null)?'grey-2':(youthPRSportAugContents.kpi4 >= '0' && youthPRSportAugContents.kpi4 <= '0.6')?'red':(youthPRSportAugContents.kpi4 > '0.6' && youthPRSportAugContents.kpi4 <= '0.8')?'orange':(youthPRSportAugContents.kpi4 > '0.8' && youthPRSportAugContents.kpi4 < '1')?'yellow-7':(youthPRSportAugContents.kpi4 >= '1' && youthPRSportAugContents.kpi4 < '1.2')?'green':(youthPRSportAugContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAugContents.kpi5 == null)?'grey-2':(youthPRSportAugContents.kpi5 >= '0' && youthPRSportAugContents.kpi5 <= '0.6')?'red':(youthPRSportAugContents.kpi5 > '0.6' && youthPRSportAugContents.kpi5 <= '0.8')?'orange':(youthPRSportAugContents.kpi5 > '0.8' && youthPRSportAugContents.kpi5 < '1')?'yellow-7':(youthPRSportAugContents.kpi5 >= '1' && youthPRSportAugContents.kpi5 < '1.2')?'green':(youthPRSportAugContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi5}}
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
                              :color="(youthPRSportSepContents.kpi1 == null)?'grey-2':(youthPRSportSepContents.kpi1 >= '0' && youthPRSportSepContents.kpi1 <= '2.4')?'red':(youthPRSportSepContents.kpi1 > '2.4' && youthPRSportSepContents.kpi1 <= '3.2')?'orange':(youthPRSportSepContents.kpi1 > '3.2' && youthPRSportSepContents.kpi1 < '4')?'yellow-7':(youthPRSportSepContents.kpi1 >= '4' && youthPRSportSepContents.kpi1 < '4.8')?'green':(youthPRSportSepContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportSepContents.kpi2 == null)?'grey-2':(youthPRSportSepContents.kpi2 >= '0' && youthPRSportSepContents.kpi2 <= '0.6')?'red':(youthPRSportSepContents.kpi2 > '0.6' && youthPRSportSepContents.kpi2 <= '0.8')?'orange':(youthPRSportSepContents.kpi2 > '0.8' && youthPRSportSepContents.kpi2 < '1')?'yellow-7':(youthPRSportSepContents.kpi2 >= '1' && youthPRSportSepContents.kpi2 < '1.2')?'green':(youthPRSportSepContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportSepContents.kpi3 == null)?'grey-2':(youthPRSportSepContents.kpi3 >= '0' && youthPRSportSepContents.kpi3 <= '0.6')?'red':(youthPRSportSepContents.kpi3 > '0.6' && youthPRSportSepContents.kpi3 <= '0.8')?'orange':(youthPRSportSepContents.kpi3 > '0.8' && youthPRSportSepContents.kpi3 < '1')?'yellow-7':(youthPRSportSepContents.kpi3 >= '1' && youthPRSportSepContents.kpi3 < '1.2')?'green':(youthPRSportSepContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportSepContents.kpi4 == null)?'grey-2':(youthPRSportSepContents.kpi4 >= '0' && youthPRSportSepContents.kpi4 <= '0.6')?'red':(youthPRSportSepContents.kpi4 > '0.6' && youthPRSportSepContents.kpi4 <= '0.8')?'orange':(youthPRSportSepContents.kpi4 > '0.8' && youthPRSportSepContents.kpi4 < '1')?'yellow-7':(youthPRSportSepContents.kpi4 >= '1' && youthPRSportSepContents.kpi4 < '1.2')?'green':(youthPRSportSepContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportSepContents.kpi5 == null)?'grey-2':(youthPRSportSepContents.kpi5 >= '0' && youthPRSportSepContents.kpi5 <= '0.6')?'red':(youthPRSportSepContents.kpi5 > '0.6' && youthPRSportSepContents.kpi5 <= '0.8')?'orange':(youthPRSportSepContents.kpi5 > '0.8' && youthPRSportSepContents.kpi5 < '1')?'yellow-7':(youthPRSportSepContents.kpi5 >= '1' && youthPRSportSepContents.kpi5 < '1.2')?'green':(youthPRSportSepContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi5}}
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
                              :color="(youthPRSportOctContents.kpi1 == null)?'grey-2':(youthPRSportOctContents.kpi1 >= '0' && youthPRSportOctContents.kpi1 <= '2.4')?'red':(youthPRSportOctContents.kpi1 > '2.4' && youthPRSportOctContents.kpi1 <= '3.2')?'orange':(youthPRSportOctContents.kpi1 > '3.2' && youthPRSportOctContents.kpi1 < '4')?'yellow-7':(youthPRSportOctContents.kpi1 >= '4' && youthPRSportOctContents.kpi1 < '4.8')?'green':(youthPRSportOctContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportOctContents.kpi2 == null)?'grey-2':(youthPRSportOctContents.kpi2 >= '0' && youthPRSportOctContents.kpi2 <= '0.6')?'red':(youthPRSportOctContents.kpi2 > '0.6' && youthPRSportOctContents.kpi2 <= '0.8')?'orange':(youthPRSportOctContents.kpi2 > '0.8' && youthPRSportOctContents.kpi2 < '1')?'yellow-7':(youthPRSportOctContents.kpi2 >= '1' && youthPRSportOctContents.kpi2 < '1.2')?'green':(youthPRSportOctContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportOctContents.kpi3 == null)?'grey-2':(youthPRSportOctContents.kpi3 >= '0' && youthPRSportOctContents.kpi3 <= '0.6')?'red':(youthPRSportOctContents.kpi3 > '0.6' && youthPRSportOctContents.kpi3 <= '0.8')?'orange':(youthPRSportOctContents.kpi3 > '0.8' && youthPRSportOctContents.kpi3 < '1')?'yellow-7':(youthPRSportOctContents.kpi3 >= '1' && youthPRSportOctContents.kpi3 < '1.2')?'green':(youthPRSportOctContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportOctContents.kpi4 == null)?'grey-2':(youthPRSportOctContents.kpi4 >= '0' && youthPRSportOctContents.kpi4 <= '0.6')?'red':(youthPRSportOctContents.kpi4 > '0.6' && youthPRSportOctContents.kpi4 <= '0.8')?'orange':(youthPRSportOctContents.kpi4 > '0.8' && youthPRSportOctContents.kpi4 < '1')?'yellow-7':(youthPRSportOctContents.kpi4 >= '1' && youthPRSportOctContents.kpi4 < '1.2')?'green':(youthPRSportOctContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportOctContents.kpi5 == null)?'grey-2':(youthPRSportOctContents.kpi5 >= '0' && youthPRSportOctContents.kpi5 <= '0.6')?'red':(youthPRSportOctContents.kpi5 > '0.6' && youthPRSportOctContents.kpi5 <= '0.8')?'orange':(youthPRSportOctContents.kpi5 > '0.8' && youthPRSportOctContents.kpi5 < '1')?'yellow-7':(youthPRSportOctContents.kpi5 >= '1' && youthPRSportOctContents.kpi5 < '1.2')?'green':(youthPRSportOctContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi5}}
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
                              :color="(youthPRSportNovContents.kpi1 == null)?'grey-2':(youthPRSportNovContents.kpi1 >= '0' && youthPRSportNovContents.kpi1 <= '2.4')?'red':(youthPRSportNovContents.kpi1 > '2.4' && youthPRSportNovContents.kpi1 <= '3.2')?'orange':(youthPRSportNovContents.kpi1 > '3.2' && youthPRSportNovContents.kpi1 < '4')?'yellow-7':(youthPRSportNovContents.kpi1 >= '4' && youthPRSportNovContents.kpi1 < '4.8')?'green':(youthPRSportNovContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportNovContents.kpi2 == null)?'grey-2':(youthPRSportNovContents.kpi2 >= '0' && youthPRSportNovContents.kpi2 <= '0.6')?'red':(youthPRSportNovContents.kpi2 > '0.6' && youthPRSportNovContents.kpi2 <= '0.8')?'orange':(youthPRSportNovContents.kpi2 > '0.8' && youthPRSportNovContents.kpi2 < '1')?'yellow-7':(youthPRSportNovContents.kpi2 >= '1' && youthPRSportNovContents.kpi2 < '1.2')?'green':(youthPRSportNovContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportNovContents.kpi3 == null)?'grey-2':(youthPRSportNovContents.kpi3 >= '0' && youthPRSportNovContents.kpi3 <= '0.6')?'red':(youthPRSportNovContents.kpi3 > '0.6' && youthPRSportNovContents.kpi3 <= '0.8')?'orange':(youthPRSportNovContents.kpi3 > '0.8' && youthPRSportNovContents.kpi3 < '1')?'yellow-7':(youthPRSportNovContents.kpi3 >= '1' && youthPRSportNovContents.kpi3 < '1.2')?'green':(youthPRSportNovContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportNovContents.kpi4 == null)?'grey-2':(youthPRSportNovContents.kpi4 >= '0' && youthPRSportNovContents.kpi4 <= '0.6')?'red':(youthPRSportNovContents.kpi4 > '0.6' && youthPRSportNovContents.kpi4 <= '0.8')?'orange':(youthPRSportNovContents.kpi4 > '0.8' && youthPRSportNovContents.kpi4 < '1')?'yellow-7':(youthPRSportNovContents.kpi4 >= '1' && youthPRSportNovContents.kpi4 < '1.2')?'green':(youthPRSportNovContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportNovContents.kpi5 == null)?'grey-2':(youthPRSportNovContents.kpi5 >= '0' && youthPRSportNovContents.kpi5 <= '0.6')?'red':(youthPRSportNovContents.kpi5 > '0.6' && youthPRSportNovContents.kpi5 <= '0.8')?'orange':(youthPRSportNovContents.kpi5 > '0.8' && youthPRSportNovContents.kpi5 < '1')?'yellow-7':(youthPRSportNovContents.kpi5 >= '1' && youthPRSportNovContents.kpi5 < '1.2')?'green':(youthPRSportNovContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi5}}
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
                              :color="(youthPRSportDecContents.kpi1 == null)?'grey-2':(youthPRSportDecContents.kpi1 >= '0' && youthPRSportDecContents.kpi1 <= '2.4')?'red':(youthPRSportDecContents.kpi1 > '2.4' && youthPRSportDecContents.kpi1 <= '3.2')?'orange':(youthPRSportDecContents.kpi1 > '3.2' && youthPRSportDecContents.kpi1 < '4')?'yellow-7':(youthPRSportDecContents.kpi1 >= '4' && youthPRSportDecContents.kpi1 < '4.8')?'green':(youthPRSportDecContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportDecContents.kpi2 == null)?'grey-2':(youthPRSportDecContents.kpi2 >= '0' && youthPRSportDecContents.kpi2 <= '0.6')?'red':(youthPRSportDecContents.kpi2 > '0.6' && youthPRSportDecContents.kpi2 <= '0.8')?'orange':(youthPRSportDecContents.kpi2 > '0.8' && youthPRSportDecContents.kpi2 < '1')?'yellow-7':(youthPRSportDecContents.kpi2 >= '1' && youthPRSportDecContents.kpi2 < '1.2')?'green':(youthPRSportDecContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportDecContents.kpi3 == null)?'grey-2':(youthPRSportDecContents.kpi3 >= '0' && youthPRSportDecContents.kpi3 <= '0.6')?'red':(youthPRSportDecContents.kpi3 > '0.6' && youthPRSportDecContents.kpi3 <= '0.8')?'orange':(youthPRSportDecContents.kpi3 > '0.8' && youthPRSportDecContents.kpi3 < '1')?'yellow-7':(youthPRSportDecContents.kpi3 >= '1' && youthPRSportDecContents.kpi3 < '1.2')?'green':(youthPRSportDecContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportDecContents.kpi4 == null)?'grey-2':(youthPRSportDecContents.kpi4 >= '0' && youthPRSportDecContents.kpi4 <= '0.6')?'red':(youthPRSportDecContents.kpi4 > '0.6' && youthPRSportDecContents.kpi4 <= '0.8')?'orange':(youthPRSportDecContents.kpi4 > '0.8' && youthPRSportDecContents.kpi4 < '1')?'yellow-7':(youthPRSportDecContents.kpi4 >= '1' && youthPRSportDecContents.kpi4 < '1.2')?'green':(youthPRSportDecContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportDecContents.kpi5 == null)?'grey-2':(youthPRSportDecContents.kpi5 >= '0' && youthPRSportDecContents.kpi5 <= '0.6')?'red':(youthPRSportDecContents.kpi5 > '0.6' && youthPRSportDecContents.kpi5 <= '0.8')?'orange':(youthPRSportDecContents.kpi5 > '0.8' && youthPRSportDecContents.kpi5 < '1')?'yellow-7':(youthPRSportDecContents.kpi5 >= '1' && youthPRSportDecContents.kpi5 < '1.2')?'green':(youthPRSportDecContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi5}}
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
                                <q-tooltip># of unique children</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of total children</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of unique youth</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip># of total youth</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 5
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
                              :color="(youthPRSportJanContents.kpi1 == null)?'grey-2':(youthPRSportJanContents.kpi1 >= '0' && youthPRSportJanContents.kpi1 <= '2.4')?'red':(youthPRSportJanContents.kpi1 > '2.4' && youthPRSportJanContents.kpi1 <= '3.2')?'orange':(youthPRSportJanContents.kpi1 > '3.2' && youthPRSportJanContents.kpi1 < '4')?'yellow-7':(youthPRSportJanContents.kpi1 >= '4' && youthPRSportJanContents.kpi1 < '4.8')?'green':(youthPRSportJanContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJanContents.kpi2 == null)?'grey-2':(youthPRSportJanContents.kpi2 >= '0' && youthPRSportJanContents.kpi2 <= '0.6')?'red':(youthPRSportJanContents.kpi2 > '0.6' && youthPRSportJanContents.kpi2 <= '0.8')?'orange':(youthPRSportJanContents.kpi2 > '0.8' && youthPRSportJanContents.kpi2 < '1')?'yellow-7':(youthPRSportJanContents.kpi2 >= '1' && youthPRSportJanContents.kpi2 < '1.2')?'green':(youthPRSportJanContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJanContents.kpi3 == null)?'grey-2':(youthPRSportJanContents.kpi3 >= '0' && youthPRSportJanContents.kpi3 <= '0.6')?'red':(youthPRSportJanContents.kpi3 > '0.6' && youthPRSportJanContents.kpi3 <= '0.8')?'orange':(youthPRSportJanContents.kpi3 > '0.8' && youthPRSportJanContents.kpi3 < '1')?'yellow-7':(youthPRSportJanContents.kpi3 >= '1' && youthPRSportJanContents.kpi3 < '1.2')?'green':(youthPRSportJanContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJanContents.kpi4 == null)?'grey-2':(youthPRSportJanContents.kpi4 >= '0' && youthPRSportJanContents.kpi4 <= '0.6')?'red':(youthPRSportJanContents.kpi4 > '0.6' && youthPRSportJanContents.kpi4 <= '0.8')?'orange':(youthPRSportJanContents.kpi4 > '0.8' && youthPRSportJanContents.kpi4 < '1')?'yellow-7':(youthPRSportJanContents.kpi4 >= '1' && youthPRSportJanContents.kpi4 < '1.2')?'green':(youthPRSportJanContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJanContents.kpi5 == null)?'grey-2':(youthPRSportJanContents.kpi5 >= '0' && youthPRSportJanContents.kpi5 <= '0.6')?'red':(youthPRSportJanContents.kpi5 > '0.6' && youthPRSportJanContents.kpi5 <= '0.8')?'orange':(youthPRSportJanContents.kpi5 > '0.8' && youthPRSportJanContents.kpi5 < '1')?'yellow-7':(youthPRSportJanContents.kpi5 >= '1' && youthPRSportJanContents.kpi5 < '1.2')?'green':(youthPRSportJanContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi5}}
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
                              :color="(youthPRSportFebContents.kpi1 == null)?'grey-2':(youthPRSportFebContents.kpi1 >= '0' && youthPRSportFebContents.kpi1 <= '2.4')?'red':(youthPRSportFebContents.kpi1 > '2.4' && youthPRSportFebContents.kpi1 <= '3.2')?'orange':(youthPRSportFebContents.kpi1 > '3.2' && youthPRSportFebContents.kpi1 < '4')?'yellow-7':(youthPRSportFebContents.kpi1 >= '4' && youthPRSportFebContents.kpi1 < '4.8')?'green':(youthPRSportFebContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportFebContents.kpi2 == null)?'grey-2':(youthPRSportFebContents.kpi2 >= '0' && youthPRSportFebContents.kpi2 <= '0.6')?'red':(youthPRSportFebContents.kpi2 > '0.6' && youthPRSportFebContents.kpi2 <= '0.8')?'orange':(youthPRSportFebContents.kpi2 > '0.8' && youthPRSportFebContents.kpi2 < '1')?'yellow-7':(youthPRSportFebContents.kpi2 >= '1' && youthPRSportFebContents.kpi2 < '1.2')?'green':(youthPRSportFebContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportFebContents.kpi3 == null)?'grey-2':(youthPRSportFebContents.kpi3 >= '0' && youthPRSportFebContents.kpi3 <= '0.6')?'red':(youthPRSportFebContents.kpi3 > '0.6' && youthPRSportFebContents.kpi3 <= '0.8')?'orange':(youthPRSportFebContents.kpi3 > '0.8' && youthPRSportFebContents.kpi3 < '1')?'yellow-7':(youthPRSportFebContents.kpi3 >= '1' && youthPRSportFebContents.kpi3 < '1.2')?'green':(youthPRSportFebContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportFebContents.kpi4 == null)?'grey-2':(youthPRSportFebContents.kpi4 >= '0' && youthPRSportFebContents.kpi4 <= '0.6')?'red':(youthPRSportFebContents.kpi4 > '0.6' && youthPRSportFebContents.kpi4 <= '0.8')?'orange':(youthPRSportFebContents.kpi4 > '0.8' && youthPRSportFebContents.kpi4 < '1')?'yellow-7':(youthPRSportFebContents.kpi4 >= '1' && youthPRSportFebContents.kpi4 < '1.2')?'green':(youthPRSportFebContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportFebContents.kpi5 == null)?'grey-2':(youthPRSportFebContents.kpi5 >= '0' && youthPRSportFebContents.kpi5 <= '0.6')?'red':(youthPRSportFebContents.kpi5 > '0.6' && youthPRSportFebContents.kpi5 <= '0.8')?'orange':(youthPRSportFebContents.kpi5 > '0.8' && youthPRSportFebContents.kpi5 < '1')?'yellow-7':(youthPRSportFebContents.kpi5 >= '1' && youthPRSportFebContents.kpi5 < '1.2')?'green':(youthPRSportFebContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi5}}
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
                              :color="(youthPRSportMarContents.kpi1 == null)?'grey-2':(youthPRSportMarContents.kpi1 >= '0' && youthPRSportMarContents.kpi1 <= '2.4')?'red':(youthPRSportMarContents.kpi1 > '2.4' && youthPRSportMarContents.kpi1 <= '3.2')?'orange':(youthPRSportMarContents.kpi1 > '3.2' && youthPRSportMarContents.kpi1 < '4')?'yellow-7':(youthPRSportMarContents.kpi1 >= '4' && youthPRSportMarContents.kpi1 < '4.8')?'green':(youthPRSportMarContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMarContents.kpi2 == null)?'grey-2':(youthPRSportMarContents.kpi2 >= '0' && youthPRSportMarContents.kpi2 <= '0.6')?'red':(youthPRSportMarContents.kpi2 > '0.6' && youthPRSportMarContents.kpi2 <= '0.8')?'orange':(youthPRSportMarContents.kpi2 > '0.8' && youthPRSportMarContents.kpi2 < '1')?'yellow-7':(youthPRSportMarContents.kpi2 >= '1' && youthPRSportMarContents.kpi2 < '1.2')?'green':(youthPRSportMarContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMarContents.kpi3 == null)?'grey-2':(youthPRSportMarContents.kpi3 >= '0' && youthPRSportMarContents.kpi3 <= '0.6')?'red':(youthPRSportMarContents.kpi3 > '0.6' && youthPRSportMarContents.kpi3 <= '0.8')?'orange':(youthPRSportMarContents.kpi3 > '0.8' && youthPRSportMarContents.kpi3 < '1')?'yellow-7':(youthPRSportMarContents.kpi3 >= '1' && youthPRSportMarContents.kpi3 < '1.2')?'green':(youthPRSportMarContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMarContents.kpi4 == null)?'grey-2':(youthPRSportMarContents.kpi4 >= '0' && youthPRSportMarContents.kpi4 <= '0.6')?'red':(youthPRSportMarContents.kpi4 > '0.6' && youthPRSportMarContents.kpi4 <= '0.8')?'orange':(youthPRSportMarContents.kpi4 > '0.8' && youthPRSportMarContents.kpi4 < '1')?'yellow-7':(youthPRSportMarContents.kpi4 >= '1' && youthPRSportMarContents.kpi4 < '1.2')?'green':(youthPRSportMarContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMarContents.kpi5 == null)?'grey-2':(youthPRSportMarContents.kpi5 >= '0' && youthPRSportMarContents.kpi5 <= '0.6')?'red':(youthPRSportMarContents.kpi5 > '0.6' && youthPRSportMarContents.kpi5 <= '0.8')?'orange':(youthPRSportMarContents.kpi5 > '0.8' && youthPRSportMarContents.kpi5 < '1')?'yellow-7':(youthPRSportMarContents.kpi5 >= '1' && youthPRSportMarContents.kpi5 < '1.2')?'green':(youthPRSportMarContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi5}}
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
                              :color="(youthPRSportAprContents.kpi1 == null)?'grey-2':(youthPRSportAprContents.kpi1 >= '0' && youthPRSportAprContents.kpi1 <= '2.4')?'red':(youthPRSportAprContents.kpi1 > '2.4' && youthPRSportAprContents.kpi1 <= '3.2')?'orange':(youthPRSportAprContents.kpi1 > '3.2' && youthPRSportAprContents.kpi1 < '4')?'yellow-7':(youthPRSportAprContents.kpi1 >= '4' && youthPRSportAprContents.kpi1 < '4.8')?'green':(youthPRSportAprContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAprContents.kpi2 == null)?'grey-2':(youthPRSportAprContents.kpi2 >= '0' && youthPRSportAprContents.kpi2 <= '0.6')?'red':(youthPRSportAprContents.kpi2 > '0.6' && youthPRSportAprContents.kpi2 <= '0.8')?'orange':(youthPRSportAprContents.kpi2 > '0.8' && youthPRSportAprContents.kpi2 < '1')?'yellow-7':(youthPRSportAprContents.kpi2 >= '1' && youthPRSportAprContents.kpi2 < '1.2')?'green':(youthPRSportAprContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAprContents.kpi3 == null)?'grey-2':(youthPRSportAprContents.kpi3 >= '0' && youthPRSportAprContents.kpi3 <= '0.6')?'red':(youthPRSportAprContents.kpi3 > '0.6' && youthPRSportAprContents.kpi3 <= '0.8')?'orange':(youthPRSportAprContents.kpi3 > '0.8' && youthPRSportAprContents.kpi3 < '1')?'yellow-7':(youthPRSportAprContents.kpi3 >= '1' && youthPRSportAprContents.kpi3 < '1.2')?'green':(youthPRSportAprContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAprContents.kpi4 == null)?'grey-2':(youthPRSportAprContents.kpi4 >= '0' && youthPRSportAprContents.kpi4 <= '0.6')?'red':(youthPRSportAprContents.kpi4 > '0.6' && youthPRSportAprContents.kpi4 <= '0.8')?'orange':(youthPRSportAprContents.kpi4 > '0.8' && youthPRSportAprContents.kpi4 < '1')?'yellow-7':(youthPRSportAprContents.kpi4 >= '1' && youthPRSportAprContents.kpi4 < '1.2')?'green':(youthPRSportAprContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAprContents.kpi5 == null)?'grey-2':(youthPRSportAprContents.kpi5 >= '0' && youthPRSportAprContents.kpi5 <= '0.6')?'red':(youthPRSportAprContents.kpi5 > '0.6' && youthPRSportAprContents.kpi5 <= '0.8')?'orange':(youthPRSportAprContents.kpi5 > '0.8' && youthPRSportAprContents.kpi5 < '1')?'yellow-7':(youthPRSportAprContents.kpi5 >= '1' && youthPRSportAprContents.kpi5 < '1.2')?'green':(youthPRSportAprContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi5}}
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
                              :color="(youthPRSportMayContents.kpi1 == null)?'grey-2':(youthPRSportMayContents.kpi1 >= '0' && youthPRSportMayContents.kpi1 <= '2.4')?'red':(youthPRSportMayContents.kpi1 > '2.4' && youthPRSportMayContents.kpi1 <= '3.2')?'orange':(youthPRSportMayContents.kpi1 > '3.2' && youthPRSportMayContents.kpi1 < '4')?'yellow-7':(youthPRSportMayContents.kpi1 >= '4' && youthPRSportMayContents.kpi1 < '4.8')?'green':(youthPRSportMayContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMayContents.kpi2 == null)?'grey-2':(youthPRSportMayContents.kpi2 >= '0' && youthPRSportMayContents.kpi2 <= '0.6')?'red':(youthPRSportMayContents.kpi2 > '0.6' && youthPRSportMayContents.kpi2 <= '0.8')?'orange':(youthPRSportMayContents.kpi2 > '0.8' && youthPRSportMayContents.kpi2 < '1')?'yellow-7':(youthPRSportMayContents.kpi2 >= '1' && youthPRSportMayContents.kpi2 < '1.2')?'green':(youthPRSportMayContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMayContents.kpi3 == null)?'grey-2':(youthPRSportMayContents.kpi3 >= '0' && youthPRSportMayContents.kpi3 <= '0.6')?'red':(youthPRSportMayContents.kpi3 > '0.6' && youthPRSportMayContents.kpi3 <= '0.8')?'orange':(youthPRSportMayContents.kpi3 > '0.8' && youthPRSportMayContents.kpi3 < '1')?'yellow-7':(youthPRSportMayContents.kpi3 >= '1' && youthPRSportMayContents.kpi3 < '1.2')?'green':(youthPRSportMayContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMayContents.kpi4 == null)?'grey-2':(youthPRSportMayContents.kpi4 >= '0' && youthPRSportMayContents.kpi4 <= '0.6')?'red':(youthPRSportMayContents.kpi4 > '0.6' && youthPRSportMayContents.kpi4 <= '0.8')?'orange':(youthPRSportMayContents.kpi4 > '0.8' && youthPRSportMayContents.kpi4 < '1')?'yellow-7':(youthPRSportMayContents.kpi4 >= '1' && youthPRSportMayContents.kpi4 < '1.2')?'green':(youthPRSportMayContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMayContents.kpi5 == null)?'grey-2':(youthPRSportMayContents.kpi5 >= '0' && youthPRSportMayContents.kpi5 <= '0.6')?'red':(youthPRSportMayContents.kpi5 > '0.6' && youthPRSportMayContents.kpi5 <= '0.8')?'orange':(youthPRSportMayContents.kpi5 > '0.8' && youthPRSportMayContents.kpi5 < '1')?'yellow-7':(youthPRSportMayContents.kpi5 >= '1' && youthPRSportMayContents.kpi5 < '1.2')?'green':(youthPRSportMayContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi5}}
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
                              :color="(youthPRSportJunContents.kpi1 == null)?'grey-2':(youthPRSportJunContents.kpi1 >= '0' && youthPRSportJunContents.kpi1 <= '2.4')?'red':(youthPRSportJunContents.kpi1 > '2.4' && youthPRSportJunContents.kpi1 <= '3.2')?'orange':(youthPRSportJunContents.kpi1 > '3.2' && youthPRSportJunContents.kpi1 < '4')?'yellow-7':(youthPRSportJunContents.kpi1 >= '4' && youthPRSportJunContents.kpi1 < '4.8')?'green':(youthPRSportJunContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJunContents.kpi2 == null)?'grey-2':(youthPRSportJunContents.kpi2 >= '0' && youthPRSportJunContents.kpi2 <= '0.6')?'red':(youthPRSportJunContents.kpi2 > '0.6' && youthPRSportJunContents.kpi2 <= '0.8')?'orange':(youthPRSportJunContents.kpi2 > '0.8' && youthPRSportJunContents.kpi2 < '1')?'yellow-7':(youthPRSportJunContents.kpi2 >= '1' && youthPRSportJunContents.kpi2 < '1.2')?'green':(youthPRSportJunContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJunContents.kpi3 == null)?'grey-2':(youthPRSportJunContents.kpi3 >= '0' && youthPRSportJunContents.kpi3 <= '0.6')?'red':(youthPRSportJunContents.kpi3 > '0.6' && youthPRSportJunContents.kpi3 <= '0.8')?'orange':(youthPRSportJunContents.kpi3 > '0.8' && youthPRSportJunContents.kpi3 < '1')?'yellow-7':(youthPRSportJunContents.kpi3 >= '1' && youthPRSportJunContents.kpi3 < '1.2')?'green':(youthPRSportJunContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJunContents.kpi4 == null)?'grey-2':(youthPRSportJunContents.kpi4 >= '0' && youthPRSportJunContents.kpi4 <= '0.6')?'red':(youthPRSportJunContents.kpi4 > '0.6' && youthPRSportJunContents.kpi4 <= '0.8')?'orange':(youthPRSportJunContents.kpi4 > '0.8' && youthPRSportJunContents.kpi4 < '1')?'yellow-7':(youthPRSportJunContents.kpi4 >= '1' && youthPRSportJunContents.kpi4 < '1.2')?'green':(youthPRSportJunContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJunContents.kpi5 == null)?'grey-2':(youthPRSportJunContents.kpi5 >= '0' && youthPRSportJunContents.kpi5 <= '0.6')?'red':(youthPRSportJunContents.kpi5 > '0.6' && youthPRSportJunContents.kpi5 <= '0.8')?'orange':(youthPRSportJunContents.kpi5 > '0.8' && youthPRSportJunContents.kpi5 < '1')?'yellow-7':(youthPRSportJunContents.kpi5 >= '1' && youthPRSportJunContents.kpi5 < '1.2')?'green':(youthPRSportJunContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi5}}
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
                              :color="(youthPRSportJulContents.kpi1 == null)?'grey-2':(youthPRSportJulContents.kpi1 >= '0' && youthPRSportJulContents.kpi1 <= '2.4')?'red':(youthPRSportJulContents.kpi1 > '2.4' && youthPRSportJulContents.kpi1 <= '3.2')?'orange':(youthPRSportJulContents.kpi1 > '3.2' && youthPRSportJulContents.kpi1 < '4')?'yellow-7':(youthPRSportJulContents.kpi1 >= '4' && youthPRSportJulContents.kpi1 < '4.8')?'green':(youthPRSportJulContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJulContents.kpi2 == null)?'grey-2':(youthPRSportJulContents.kpi2 >= '0' && youthPRSportJulContents.kpi2 <= '0.6')?'red':(youthPRSportJulContents.kpi2 > '0.6' && youthPRSportJulContents.kpi2 <= '0.8')?'orange':(youthPRSportJulContents.kpi2 > '0.8' && youthPRSportJulContents.kpi2 < '1')?'yellow-7':(youthPRSportJulContents.kpi2 >= '1' && youthPRSportJulContents.kpi2 < '1.2')?'green':(youthPRSportJulContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJulContents.kpi3 == null)?'grey-2':(youthPRSportJulContents.kpi3 >= '0' && youthPRSportJulContents.kpi3 <= '0.6')?'red':(youthPRSportJulContents.kpi3 > '0.6' && youthPRSportJulContents.kpi3 <= '0.8')?'orange':(youthPRSportJulContents.kpi3 > '0.8' && youthPRSportJulContents.kpi3 < '1')?'yellow-7':(youthPRSportJulContents.kpi3 >= '1' && youthPRSportJulContents.kpi3 < '1.2')?'green':(youthPRSportJulContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJulContents.kpi4 == null)?'grey-2':(youthPRSportJulContents.kpi4 >= '0' && youthPRSportJulContents.kpi4 <= '0.6')?'red':(youthPRSportJulContents.kpi4 > '0.6' && youthPRSportJulContents.kpi4 <= '0.8')?'orange':(youthPRSportJulContents.kpi4 > '0.8' && youthPRSportJulContents.kpi4 < '1')?'yellow-7':(youthPRSportJulContents.kpi4 >= '1' && youthPRSportJulContents.kpi4 < '1.2')?'green':(youthPRSportJulContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJulContents.kpi5 == null)?'grey-2':(youthPRSportJulContents.kpi5 >= '0' && youthPRSportJulContents.kpi5 <= '0.6')?'red':(youthPRSportJulContents.kpi5 > '0.6' && youthPRSportJulContents.kpi5 <= '0.8')?'orange':(youthPRSportJulContents.kpi5 > '0.8' && youthPRSportJulContents.kpi5 < '1')?'yellow-7':(youthPRSportJulContents.kpi5 >= '1' && youthPRSportJulContents.kpi5 < '1.2')?'green':(youthPRSportJulContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi5}}
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
                              :color="(youthPRSportAugContents.kpi1 == null)?'grey-2':(youthPRSportAugContents.kpi1 >= '0' && youthPRSportAugContents.kpi1 <= '2.4')?'red':(youthPRSportAugContents.kpi1 > '2.4' && youthPRSportAugContents.kpi1 <= '3.2')?'orange':(youthPRSportAugContents.kpi1 > '3.2' && youthPRSportAugContents.kpi1 < '4')?'yellow-7':(youthPRSportAugContents.kpi1 >= '4' && youthPRSportAugContents.kpi1 < '4.8')?'green':(youthPRSportAugContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAugContents.kpi2 == null)?'grey-2':(youthPRSportAugContents.kpi2 >= '0' && youthPRSportAugContents.kpi2 <= '0.6')?'red':(youthPRSportAugContents.kpi2 > '0.6' && youthPRSportAugContents.kpi2 <= '0.8')?'orange':(youthPRSportAugContents.kpi2 > '0.8' && youthPRSportAugContents.kpi2 < '1')?'yellow-7':(youthPRSportAugContents.kpi2 >= '1' && youthPRSportAugContents.kpi2 < '1.2')?'green':(youthPRSportAugContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAugContents.kpi3 == null)?'grey-2':(youthPRSportAugContents.kpi3 >= '0' && youthPRSportAugContents.kpi3 <= '0.6')?'red':(youthPRSportAugContents.kpi3 > '0.6' && youthPRSportAugContents.kpi3 <= '0.8')?'orange':(youthPRSportAugContents.kpi3 > '0.8' && youthPRSportAugContents.kpi3 < '1')?'yellow-7':(youthPRSportAugContents.kpi3 >= '1' && youthPRSportAugContents.kpi3 < '1.2')?'green':(youthPRSportAugContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAugContents.kpi4 == null)?'grey-2':(youthPRSportAugContents.kpi4 >= '0' && youthPRSportAugContents.kpi4 <= '0.6')?'red':(youthPRSportAugContents.kpi4 > '0.6' && youthPRSportAugContents.kpi4 <= '0.8')?'orange':(youthPRSportAugContents.kpi4 > '0.8' && youthPRSportAugContents.kpi4 < '1')?'yellow-7':(youthPRSportAugContents.kpi4 >= '1' && youthPRSportAugContents.kpi4 < '1.2')?'green':(youthPRSportAugContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAugContents.kpi5 == null)?'grey-2':(youthPRSportAugContents.kpi5 >= '0' && youthPRSportAugContents.kpi5 <= '0.6')?'red':(youthPRSportAugContents.kpi5 > '0.6' && youthPRSportAugContents.kpi5 <= '0.8')?'orange':(youthPRSportAugContents.kpi5 > '0.8' && youthPRSportAugContents.kpi5 < '1')?'yellow-7':(youthPRSportAugContents.kpi5 >= '1' && youthPRSportAugContents.kpi5 < '1.2')?'green':(youthPRSportAugContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi5}}
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
                              :color="(youthPRSportSepContents.kpi1 == null)?'grey-2':(youthPRSportSepContents.kpi1 >= '0' && youthPRSportSepContents.kpi1 <= '2.4')?'red':(youthPRSportSepContents.kpi1 > '2.4' && youthPRSportSepContents.kpi1 <= '3.2')?'orange':(youthPRSportSepContents.kpi1 > '3.2' && youthPRSportSepContents.kpi1 < '4')?'yellow-7':(youthPRSportSepContents.kpi1 >= '4' && youthPRSportSepContents.kpi1 < '4.8')?'green':(youthPRSportSepContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportSepContents.kpi2 == null)?'grey-2':(youthPRSportSepContents.kpi2 >= '0' && youthPRSportSepContents.kpi2 <= '0.6')?'red':(youthPRSportSepContents.kpi2 > '0.6' && youthPRSportSepContents.kpi2 <= '0.8')?'orange':(youthPRSportSepContents.kpi2 > '0.8' && youthPRSportSepContents.kpi2 < '1')?'yellow-7':(youthPRSportSepContents.kpi2 >= '1' && youthPRSportSepContents.kpi2 < '1.2')?'green':(youthPRSportSepContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportSepContents.kpi3 == null)?'grey-2':(youthPRSportSepContents.kpi3 >= '0' && youthPRSportSepContents.kpi3 <= '0.6')?'red':(youthPRSportSepContents.kpi3 > '0.6' && youthPRSportSepContents.kpi3 <= '0.8')?'orange':(youthPRSportSepContents.kpi3 > '0.8' && youthPRSportSepContents.kpi3 < '1')?'yellow-7':(youthPRSportSepContents.kpi3 >= '1' && youthPRSportSepContents.kpi3 < '1.2')?'green':(youthPRSportSepContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportSepContents.kpi4 == null)?'grey-2':(youthPRSportSepContents.kpi4 >= '0' && youthPRSportSepContents.kpi4 <= '0.6')?'red':(youthPRSportSepContents.kpi4 > '0.6' && youthPRSportSepContents.kpi4 <= '0.8')?'orange':(youthPRSportSepContents.kpi4 > '0.8' && youthPRSportSepContents.kpi4 < '1')?'yellow-7':(youthPRSportSepContents.kpi4 >= '1' && youthPRSportSepContents.kpi4 < '1.2')?'green':(youthPRSportSepContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportSepContents.kpi5 == null)?'grey-2':(youthPRSportSepContents.kpi5 >= '0' && youthPRSportSepContents.kpi5 <= '0.6')?'red':(youthPRSportSepContents.kpi5 > '0.6' && youthPRSportSepContents.kpi5 <= '0.8')?'orange':(youthPRSportSepContents.kpi5 > '0.8' && youthPRSportSepContents.kpi5 < '1')?'yellow-7':(youthPRSportSepContents.kpi5 >= '1' && youthPRSportSepContents.kpi5 < '1.2')?'green':(youthPRSportSepContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi5}}
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
                              :color="(youthPRSportOctContents.kpi1 == null)?'grey-2':(youthPRSportOctContents.kpi1 >= '0' && youthPRSportOctContents.kpi1 <= '2.4')?'red':(youthPRSportOctContents.kpi1 > '2.4' && youthPRSportOctContents.kpi1 <= '3.2')?'orange':(youthPRSportOctContents.kpi1 > '3.2' && youthPRSportOctContents.kpi1 < '4')?'yellow-7':(youthPRSportOctContents.kpi1 >= '4' && youthPRSportOctContents.kpi1 < '4.8')?'green':(youthPRSportOctContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportOctContents.kpi2 == null)?'grey-2':(youthPRSportOctContents.kpi2 >= '0' && youthPRSportOctContents.kpi2 <= '0.6')?'red':(youthPRSportOctContents.kpi2 > '0.6' && youthPRSportOctContents.kpi2 <= '0.8')?'orange':(youthPRSportOctContents.kpi2 > '0.8' && youthPRSportOctContents.kpi2 < '1')?'yellow-7':(youthPRSportOctContents.kpi2 >= '1' && youthPRSportOctContents.kpi2 < '1.2')?'green':(youthPRSportOctContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportOctContents.kpi3 == null)?'grey-2':(youthPRSportOctContents.kpi3 >= '0' && youthPRSportOctContents.kpi3 <= '0.6')?'red':(youthPRSportOctContents.kpi3 > '0.6' && youthPRSportOctContents.kpi3 <= '0.8')?'orange':(youthPRSportOctContents.kpi3 > '0.8' && youthPRSportOctContents.kpi3 < '1')?'yellow-7':(youthPRSportOctContents.kpi3 >= '1' && youthPRSportOctContents.kpi3 < '1.2')?'green':(youthPRSportOctContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportOctContents.kpi4 == null)?'grey-2':(youthPRSportOctContents.kpi4 >= '0' && youthPRSportOctContents.kpi4 <= '0.6')?'red':(youthPRSportOctContents.kpi4 > '0.6' && youthPRSportOctContents.kpi4 <= '0.8')?'orange':(youthPRSportOctContents.kpi4 > '0.8' && youthPRSportOctContents.kpi4 < '1')?'yellow-7':(youthPRSportOctContents.kpi4 >= '1' && youthPRSportOctContents.kpi4 < '1.2')?'green':(youthPRSportOctContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportOctContents.kpi5 == null)?'grey-2':(youthPRSportOctContents.kpi5 >= '0' && youthPRSportOctContents.kpi5 <= '0.6')?'red':(youthPRSportOctContents.kpi5 > '0.6' && youthPRSportOctContents.kpi5 <= '0.8')?'orange':(youthPRSportOctContents.kpi5 > '0.8' && youthPRSportOctContents.kpi5 < '1')?'yellow-7':(youthPRSportOctContents.kpi5 >= '1' && youthPRSportOctContents.kpi5 < '1.2')?'green':(youthPRSportOctContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi5}}
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
                              :color="(youthPRSportNovContents.kpi1 == null)?'grey-2':(youthPRSportNovContents.kpi1 >= '0' && youthPRSportNovContents.kpi1 <= '2.4')?'red':(youthPRSportNovContents.kpi1 > '2.4' && youthPRSportNovContents.kpi1 <= '3.2')?'orange':(youthPRSportNovContents.kpi1 > '3.2' && youthPRSportNovContents.kpi1 < '4')?'yellow-7':(youthPRSportNovContents.kpi1 >= '4' && youthPRSportNovContents.kpi1 < '4.8')?'green':(youthPRSportNovContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportNovContents.kpi2 == null)?'grey-2':(youthPRSportNovContents.kpi2 >= '0' && youthPRSportNovContents.kpi2 <= '0.6')?'red':(youthPRSportNovContents.kpi2 > '0.6' && youthPRSportNovContents.kpi2 <= '0.8')?'orange':(youthPRSportNovContents.kpi2 > '0.8' && youthPRSportNovContents.kpi2 < '1')?'yellow-7':(youthPRSportNovContents.kpi2 >= '1' && youthPRSportNovContents.kpi2 < '1.2')?'green':(youthPRSportNovContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportNovContents.kpi3 == null)?'grey-2':(youthPRSportNovContents.kpi3 >= '0' && youthPRSportNovContents.kpi3 <= '0.6')?'red':(youthPRSportNovContents.kpi3 > '0.6' && youthPRSportNovContents.kpi3 <= '0.8')?'orange':(youthPRSportNovContents.kpi3 > '0.8' && youthPRSportNovContents.kpi3 < '1')?'yellow-7':(youthPRSportNovContents.kpi3 >= '1' && youthPRSportNovContents.kpi3 < '1.2')?'green':(youthPRSportNovContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportNovContents.kpi4 == null)?'grey-2':(youthPRSportNovContents.kpi4 >= '0' && youthPRSportNovContents.kpi4 <= '0.6')?'red':(youthPRSportNovContents.kpi4 > '0.6' && youthPRSportNovContents.kpi4 <= '0.8')?'orange':(youthPRSportNovContents.kpi4 > '0.8' && youthPRSportNovContents.kpi4 < '1')?'yellow-7':(youthPRSportNovContents.kpi4 >= '1' && youthPRSportNovContents.kpi4 < '1.2')?'green':(youthPRSportNovContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportNovContents.kpi5 == null)?'grey-2':(youthPRSportNovContents.kpi5 >= '0' && youthPRSportNovContents.kpi5 <= '0.6')?'red':(youthPRSportNovContents.kpi5 > '0.6' && youthPRSportNovContents.kpi5 <= '0.8')?'orange':(youthPRSportNovContents.kpi5 > '0.8' && youthPRSportNovContents.kpi5 < '1')?'yellow-7':(youthPRSportNovContents.kpi5 >= '1' && youthPRSportNovContents.kpi5 < '1.2')?'green':(youthPRSportNovContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi5}}
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
                              :color="(youthPRSportDecContents.kpi1 == null)?'grey-2':(youthPRSportDecContents.kpi1 >= '0' && youthPRSportDecContents.kpi1 <= '2.4')?'red':(youthPRSportDecContents.kpi1 > '2.4' && youthPRSportDecContents.kpi1 <= '3.2')?'orange':(youthPRSportDecContents.kpi1 > '3.2' && youthPRSportDecContents.kpi1 < '4')?'yellow-7':(youthPRSportDecContents.kpi1 >= '4' && youthPRSportDecContents.kpi1 < '4.8')?'green':(youthPRSportDecContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportDecContents.kpi2 == null)?'grey-2':(youthPRSportDecContents.kpi2 >= '0' && youthPRSportDecContents.kpi2 <= '0.6')?'red':(youthPRSportDecContents.kpi2 > '0.6' && youthPRSportDecContents.kpi2 <= '0.8')?'orange':(youthPRSportDecContents.kpi2 > '0.8' && youthPRSportDecContents.kpi2 < '1')?'yellow-7':(youthPRSportDecContents.kpi2 >= '1' && youthPRSportDecContents.kpi2 < '1.2')?'green':(youthPRSportDecContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportDecContents.kpi3 == null)?'grey-2':(youthPRSportDecContents.kpi3 >= '0' && youthPRSportDecContents.kpi3 <= '0.6')?'red':(youthPRSportDecContents.kpi3 > '0.6' && youthPRSportDecContents.kpi3 <= '0.8')?'orange':(youthPRSportDecContents.kpi3 > '0.8' && youthPRSportDecContents.kpi3 < '1')?'yellow-7':(youthPRSportDecContents.kpi3 >= '1' && youthPRSportDecContents.kpi3 < '1.2')?'green':(youthPRSportDecContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportDecContents.kpi4 == null)?'grey-2':(youthPRSportDecContents.kpi4 >= '0' && youthPRSportDecContents.kpi4 <= '0.6')?'red':(youthPRSportDecContents.kpi4 > '0.6' && youthPRSportDecContents.kpi4 <= '0.8')?'orange':(youthPRSportDecContents.kpi4 > '0.8' && youthPRSportDecContents.kpi4 < '1')?'yellow-7':(youthPRSportDecContents.kpi4 >= '1' && youthPRSportDecContents.kpi4 < '1.2')?'green':(youthPRSportDecContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportDecContents.kpi5 == null)?'grey-2':(youthPRSportDecContents.kpi5 >= '0' && youthPRSportDecContents.kpi5 <= '0.6')?'red':(youthPRSportDecContents.kpi5 > '0.6' && youthPRSportDecContents.kpi5 <= '0.8')?'orange':(youthPRSportDecContents.kpi5 > '0.8' && youthPRSportDecContents.kpi5 < '1')?'yellow-7':(youthPRSportDecContents.kpi5 >= '1' && youthPRSportDecContents.kpi5 < '1.2')?'green':(youthPRSportDecContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi5}}
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
                                <q-tooltip># of unique children</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of total children</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of unique youth</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip># of total youth</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 5
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
                              :color="(youthPRSportJanContents.kpi1 == null)?'grey-2':(youthPRSportJanContents.kpi1 >= '0' && youthPRSportJanContents.kpi1 <= '2.4')?'red':(youthPRSportJanContents.kpi1 > '2.4' && youthPRSportJanContents.kpi1 <= '3.2')?'orange':(youthPRSportJanContents.kpi1 > '3.2' && youthPRSportJanContents.kpi1 < '4')?'yellow-7':(youthPRSportJanContents.kpi1 >= '4' && youthPRSportJanContents.kpi1 < '4.8')?'green':(youthPRSportJanContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJanContents.kpi2 == null)?'grey-2':(youthPRSportJanContents.kpi2 >= '0' && youthPRSportJanContents.kpi2 <= '0.6')?'red':(youthPRSportJanContents.kpi2 > '0.6' && youthPRSportJanContents.kpi2 <= '0.8')?'orange':(youthPRSportJanContents.kpi2 > '0.8' && youthPRSportJanContents.kpi2 < '1')?'yellow-7':(youthPRSportJanContents.kpi2 >= '1' && youthPRSportJanContents.kpi2 < '1.2')?'green':(youthPRSportJanContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJanContents.kpi3 == null)?'grey-2':(youthPRSportJanContents.kpi3 >= '0' && youthPRSportJanContents.kpi3 <= '0.6')?'red':(youthPRSportJanContents.kpi3 > '0.6' && youthPRSportJanContents.kpi3 <= '0.8')?'orange':(youthPRSportJanContents.kpi3 > '0.8' && youthPRSportJanContents.kpi3 < '1')?'yellow-7':(youthPRSportJanContents.kpi3 >= '1' && youthPRSportJanContents.kpi3 < '1.2')?'green':(youthPRSportJanContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJanContents.kpi4 == null)?'grey-2':(youthPRSportJanContents.kpi4 >= '0' && youthPRSportJanContents.kpi4 <= '0.6')?'red':(youthPRSportJanContents.kpi4 > '0.6' && youthPRSportJanContents.kpi4 <= '0.8')?'orange':(youthPRSportJanContents.kpi4 > '0.8' && youthPRSportJanContents.kpi4 < '1')?'yellow-7':(youthPRSportJanContents.kpi4 >= '1' && youthPRSportJanContents.kpi4 < '1.2')?'green':(youthPRSportJanContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJanContents.kpi5 == null)?'grey-2':(youthPRSportJanContents.kpi5 >= '0' && youthPRSportJanContents.kpi5 <= '0.6')?'red':(youthPRSportJanContents.kpi5 > '0.6' && youthPRSportJanContents.kpi5 <= '0.8')?'orange':(youthPRSportJanContents.kpi5 > '0.8' && youthPRSportJanContents.kpi5 < '1')?'yellow-7':(youthPRSportJanContents.kpi5 >= '1' && youthPRSportJanContents.kpi5 < '1.2')?'green':(youthPRSportJanContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi5}}
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
                              :color="(youthPRSportFebContents.kpi1 == null)?'grey-2':(youthPRSportFebContents.kpi1 >= '0' && youthPRSportFebContents.kpi1 <= '2.4')?'red':(youthPRSportFebContents.kpi1 > '2.4' && youthPRSportFebContents.kpi1 <= '3.2')?'orange':(youthPRSportFebContents.kpi1 > '3.2' && youthPRSportFebContents.kpi1 < '4')?'yellow-7':(youthPRSportFebContents.kpi1 >= '4' && youthPRSportFebContents.kpi1 < '4.8')?'green':(youthPRSportFebContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportFebContents.kpi2 == null)?'grey-2':(youthPRSportFebContents.kpi2 >= '0' && youthPRSportFebContents.kpi2 <= '0.6')?'red':(youthPRSportFebContents.kpi2 > '0.6' && youthPRSportFebContents.kpi2 <= '0.8')?'orange':(youthPRSportFebContents.kpi2 > '0.8' && youthPRSportFebContents.kpi2 < '1')?'yellow-7':(youthPRSportFebContents.kpi2 >= '1' && youthPRSportFebContents.kpi2 < '1.2')?'green':(youthPRSportFebContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportFebContents.kpi3 == null)?'grey-2':(youthPRSportFebContents.kpi3 >= '0' && youthPRSportFebContents.kpi3 <= '0.6')?'red':(youthPRSportFebContents.kpi3 > '0.6' && youthPRSportFebContents.kpi3 <= '0.8')?'orange':(youthPRSportFebContents.kpi3 > '0.8' && youthPRSportFebContents.kpi3 < '1')?'yellow-7':(youthPRSportFebContents.kpi3 >= '1' && youthPRSportFebContents.kpi3 < '1.2')?'green':(youthPRSportFebContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportFebContents.kpi4 == null)?'grey-2':(youthPRSportFebContents.kpi4 >= '0' && youthPRSportFebContents.kpi4 <= '0.6')?'red':(youthPRSportFebContents.kpi4 > '0.6' && youthPRSportFebContents.kpi4 <= '0.8')?'orange':(youthPRSportFebContents.kpi4 > '0.8' && youthPRSportFebContents.kpi4 < '1')?'yellow-7':(youthPRSportFebContents.kpi4 >= '1' && youthPRSportFebContents.kpi4 < '1.2')?'green':(youthPRSportFebContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportFebContents.kpi5 == null)?'grey-2':(youthPRSportFebContents.kpi5 >= '0' && youthPRSportFebContents.kpi5 <= '0.6')?'red':(youthPRSportFebContents.kpi5 > '0.6' && youthPRSportFebContents.kpi5 <= '0.8')?'orange':(youthPRSportFebContents.kpi5 > '0.8' && youthPRSportFebContents.kpi5 < '1')?'yellow-7':(youthPRSportFebContents.kpi5 >= '1' && youthPRSportFebContents.kpi5 < '1.2')?'green':(youthPRSportFebContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi5}}
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
                              :color="(youthPRSportMarContents.kpi1 == null)?'grey-2':(youthPRSportMarContents.kpi1 >= '0' && youthPRSportMarContents.kpi1 <= '2.4')?'red':(youthPRSportMarContents.kpi1 > '2.4' && youthPRSportMarContents.kpi1 <= '3.2')?'orange':(youthPRSportMarContents.kpi1 > '3.2' && youthPRSportMarContents.kpi1 < '4')?'yellow-7':(youthPRSportMarContents.kpi1 >= '4' && youthPRSportMarContents.kpi1 < '4.8')?'green':(youthPRSportMarContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMarContents.kpi2 == null)?'grey-2':(youthPRSportMarContents.kpi2 >= '0' && youthPRSportMarContents.kpi2 <= '0.6')?'red':(youthPRSportMarContents.kpi2 > '0.6' && youthPRSportMarContents.kpi2 <= '0.8')?'orange':(youthPRSportMarContents.kpi2 > '0.8' && youthPRSportMarContents.kpi2 < '1')?'yellow-7':(youthPRSportMarContents.kpi2 >= '1' && youthPRSportMarContents.kpi2 < '1.2')?'green':(youthPRSportMarContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMarContents.kpi3 == null)?'grey-2':(youthPRSportMarContents.kpi3 >= '0' && youthPRSportMarContents.kpi3 <= '0.6')?'red':(youthPRSportMarContents.kpi3 > '0.6' && youthPRSportMarContents.kpi3 <= '0.8')?'orange':(youthPRSportMarContents.kpi3 > '0.8' && youthPRSportMarContents.kpi3 < '1')?'yellow-7':(youthPRSportMarContents.kpi3 >= '1' && youthPRSportMarContents.kpi3 < '1.2')?'green':(youthPRSportMarContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMarContents.kpi4 == null)?'grey-2':(youthPRSportMarContents.kpi4 >= '0' && youthPRSportMarContents.kpi4 <= '0.6')?'red':(youthPRSportMarContents.kpi4 > '0.6' && youthPRSportMarContents.kpi4 <= '0.8')?'orange':(youthPRSportMarContents.kpi4 > '0.8' && youthPRSportMarContents.kpi4 < '1')?'yellow-7':(youthPRSportMarContents.kpi4 >= '1' && youthPRSportMarContents.kpi4 < '1.2')?'green':(youthPRSportMarContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMarContents.kpi5 == null)?'grey-2':(youthPRSportMarContents.kpi5 >= '0' && youthPRSportMarContents.kpi5 <= '0.6')?'red':(youthPRSportMarContents.kpi5 > '0.6' && youthPRSportMarContents.kpi5 <= '0.8')?'orange':(youthPRSportMarContents.kpi5 > '0.8' && youthPRSportMarContents.kpi5 < '1')?'yellow-7':(youthPRSportMarContents.kpi5 >= '1' && youthPRSportMarContents.kpi5 < '1.2')?'green':(youthPRSportMarContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi5}}
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
                              :color="(youthPRSportAprContents.kpi1 == null)?'grey-2':(youthPRSportAprContents.kpi1 >= '0' && youthPRSportAprContents.kpi1 <= '2.4')?'red':(youthPRSportAprContents.kpi1 > '2.4' && youthPRSportAprContents.kpi1 <= '3.2')?'orange':(youthPRSportAprContents.kpi1 > '3.2' && youthPRSportAprContents.kpi1 < '4')?'yellow-7':(youthPRSportAprContents.kpi1 >= '4' && youthPRSportAprContents.kpi1 < '4.8')?'green':(youthPRSportAprContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAprContents.kpi2 == null)?'grey-2':(youthPRSportAprContents.kpi2 >= '0' && youthPRSportAprContents.kpi2 <= '0.6')?'red':(youthPRSportAprContents.kpi2 > '0.6' && youthPRSportAprContents.kpi2 <= '0.8')?'orange':(youthPRSportAprContents.kpi2 > '0.8' && youthPRSportAprContents.kpi2 < '1')?'yellow-7':(youthPRSportAprContents.kpi2 >= '1' && youthPRSportAprContents.kpi2 < '1.2')?'green':(youthPRSportAprContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAprContents.kpi3 == null)?'grey-2':(youthPRSportAprContents.kpi3 >= '0' && youthPRSportAprContents.kpi3 <= '0.6')?'red':(youthPRSportAprContents.kpi3 > '0.6' && youthPRSportAprContents.kpi3 <= '0.8')?'orange':(youthPRSportAprContents.kpi3 > '0.8' && youthPRSportAprContents.kpi3 < '1')?'yellow-7':(youthPRSportAprContents.kpi3 >= '1' && youthPRSportAprContents.kpi3 < '1.2')?'green':(youthPRSportAprContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAprContents.kpi4 == null)?'grey-2':(youthPRSportAprContents.kpi4 >= '0' && youthPRSportAprContents.kpi4 <= '0.6')?'red':(youthPRSportAprContents.kpi4 > '0.6' && youthPRSportAprContents.kpi4 <= '0.8')?'orange':(youthPRSportAprContents.kpi4 > '0.8' && youthPRSportAprContents.kpi4 < '1')?'yellow-7':(youthPRSportAprContents.kpi4 >= '1' && youthPRSportAprContents.kpi4 < '1.2')?'green':(youthPRSportAprContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAprContents.kpi5 == null)?'grey-2':(youthPRSportAprContents.kpi5 >= '0' && youthPRSportAprContents.kpi5 <= '0.6')?'red':(youthPRSportAprContents.kpi5 > '0.6' && youthPRSportAprContents.kpi5 <= '0.8')?'orange':(youthPRSportAprContents.kpi5 > '0.8' && youthPRSportAprContents.kpi5 < '1')?'yellow-7':(youthPRSportAprContents.kpi5 >= '1' && youthPRSportAprContents.kpi5 < '1.2')?'green':(youthPRSportAprContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi5}}
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
                              :color="(youthPRSportMayContents.kpi1 == null)?'grey-2':(youthPRSportMayContents.kpi1 >= '0' && youthPRSportMayContents.kpi1 <= '2.4')?'red':(youthPRSportMayContents.kpi1 > '2.4' && youthPRSportMayContents.kpi1 <= '3.2')?'orange':(youthPRSportMayContents.kpi1 > '3.2' && youthPRSportMayContents.kpi1 < '4')?'yellow-7':(youthPRSportMayContents.kpi1 >= '4' && youthPRSportMayContents.kpi1 < '4.8')?'green':(youthPRSportMayContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMayContents.kpi2 == null)?'grey-2':(youthPRSportMayContents.kpi2 >= '0' && youthPRSportMayContents.kpi2 <= '0.6')?'red':(youthPRSportMayContents.kpi2 > '0.6' && youthPRSportMayContents.kpi2 <= '0.8')?'orange':(youthPRSportMayContents.kpi2 > '0.8' && youthPRSportMayContents.kpi2 < '1')?'yellow-7':(youthPRSportMayContents.kpi2 >= '1' && youthPRSportMayContents.kpi2 < '1.2')?'green':(youthPRSportMayContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMayContents.kpi3 == null)?'grey-2':(youthPRSportMayContents.kpi3 >= '0' && youthPRSportMayContents.kpi3 <= '0.6')?'red':(youthPRSportMayContents.kpi3 > '0.6' && youthPRSportMayContents.kpi3 <= '0.8')?'orange':(youthPRSportMayContents.kpi3 > '0.8' && youthPRSportMayContents.kpi3 < '1')?'yellow-7':(youthPRSportMayContents.kpi3 >= '1' && youthPRSportMayContents.kpi3 < '1.2')?'green':(youthPRSportMayContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMayContents.kpi4 == null)?'grey-2':(youthPRSportMayContents.kpi4 >= '0' && youthPRSportMayContents.kpi4 <= '0.6')?'red':(youthPRSportMayContents.kpi4 > '0.6' && youthPRSportMayContents.kpi4 <= '0.8')?'orange':(youthPRSportMayContents.kpi4 > '0.8' && youthPRSportMayContents.kpi4 < '1')?'yellow-7':(youthPRSportMayContents.kpi4 >= '1' && youthPRSportMayContents.kpi4 < '1.2')?'green':(youthPRSportMayContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMayContents.kpi5 == null)?'grey-2':(youthPRSportMayContents.kpi5 >= '0' && youthPRSportMayContents.kpi5 <= '0.6')?'red':(youthPRSportMayContents.kpi5 > '0.6' && youthPRSportMayContents.kpi5 <= '0.8')?'orange':(youthPRSportMayContents.kpi5 > '0.8' && youthPRSportMayContents.kpi5 < '1')?'yellow-7':(youthPRSportMayContents.kpi5 >= '1' && youthPRSportMayContents.kpi5 < '1.2')?'green':(youthPRSportMayContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi5}}
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
                              :color="(youthPRSportJunContents.kpi1 == null)?'grey-2':(youthPRSportJunContents.kpi1 >= '0' && youthPRSportJunContents.kpi1 <= '2.4')?'red':(youthPRSportJunContents.kpi1 > '2.4' && youthPRSportJunContents.kpi1 <= '3.2')?'orange':(youthPRSportJunContents.kpi1 > '3.2' && youthPRSportJunContents.kpi1 < '4')?'yellow-7':(youthPRSportJunContents.kpi1 >= '4' && youthPRSportJunContents.kpi1 < '4.8')?'green':(youthPRSportJunContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJunContents.kpi2 == null)?'grey-2':(youthPRSportJunContents.kpi2 >= '0' && youthPRSportJunContents.kpi2 <= '0.6')?'red':(youthPRSportJunContents.kpi2 > '0.6' && youthPRSportJunContents.kpi2 <= '0.8')?'orange':(youthPRSportJunContents.kpi2 > '0.8' && youthPRSportJunContents.kpi2 < '1')?'yellow-7':(youthPRSportJunContents.kpi2 >= '1' && youthPRSportJunContents.kpi2 < '1.2')?'green':(youthPRSportJunContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJunContents.kpi3 == null)?'grey-2':(youthPRSportJunContents.kpi3 >= '0' && youthPRSportJunContents.kpi3 <= '0.6')?'red':(youthPRSportJunContents.kpi3 > '0.6' && youthPRSportJunContents.kpi3 <= '0.8')?'orange':(youthPRSportJunContents.kpi3 > '0.8' && youthPRSportJunContents.kpi3 < '1')?'yellow-7':(youthPRSportJunContents.kpi3 >= '1' && youthPRSportJunContents.kpi3 < '1.2')?'green':(youthPRSportJunContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJunContents.kpi4 == null)?'grey-2':(youthPRSportJunContents.kpi4 >= '0' && youthPRSportJunContents.kpi4 <= '0.6')?'red':(youthPRSportJunContents.kpi4 > '0.6' && youthPRSportJunContents.kpi4 <= '0.8')?'orange':(youthPRSportJunContents.kpi4 > '0.8' && youthPRSportJunContents.kpi4 < '1')?'yellow-7':(youthPRSportJunContents.kpi4 >= '1' && youthPRSportJunContents.kpi4 < '1.2')?'green':(youthPRSportJunContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJunContents.kpi5 == null)?'grey-2':(youthPRSportJunContents.kpi5 >= '0' && youthPRSportJunContents.kpi5 <= '0.6')?'red':(youthPRSportJunContents.kpi5 > '0.6' && youthPRSportJunContents.kpi5 <= '0.8')?'orange':(youthPRSportJunContents.kpi5 > '0.8' && youthPRSportJunContents.kpi5 < '1')?'yellow-7':(youthPRSportJunContents.kpi5 >= '1' && youthPRSportJunContents.kpi5 < '1.2')?'green':(youthPRSportJunContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi5}}
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
                              :color="(youthPRSportJulContents.kpi1 == null)?'grey-2':(youthPRSportJulContents.kpi1 >= '0' && youthPRSportJulContents.kpi1 <= '2.4')?'red':(youthPRSportJulContents.kpi1 > '2.4' && youthPRSportJulContents.kpi1 <= '3.2')?'orange':(youthPRSportJulContents.kpi1 > '3.2' && youthPRSportJulContents.kpi1 < '4')?'yellow-7':(youthPRSportJulContents.kpi1 >= '4' && youthPRSportJulContents.kpi1 < '4.8')?'green':(youthPRSportJulContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJulContents.kpi2 == null)?'grey-2':(youthPRSportJulContents.kpi2 >= '0' && youthPRSportJulContents.kpi2 <= '0.6')?'red':(youthPRSportJulContents.kpi2 > '0.6' && youthPRSportJulContents.kpi2 <= '0.8')?'orange':(youthPRSportJulContents.kpi2 > '0.8' && youthPRSportJulContents.kpi2 < '1')?'yellow-7':(youthPRSportJulContents.kpi2 >= '1' && youthPRSportJulContents.kpi2 < '1.2')?'green':(youthPRSportJulContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJulContents.kpi3 == null)?'grey-2':(youthPRSportJulContents.kpi3 >= '0' && youthPRSportJulContents.kpi3 <= '0.6')?'red':(youthPRSportJulContents.kpi3 > '0.6' && youthPRSportJulContents.kpi3 <= '0.8')?'orange':(youthPRSportJulContents.kpi3 > '0.8' && youthPRSportJulContents.kpi3 < '1')?'yellow-7':(youthPRSportJulContents.kpi3 >= '1' && youthPRSportJulContents.kpi3 < '1.2')?'green':(youthPRSportJulContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJulContents.kpi4 == null)?'grey-2':(youthPRSportJulContents.kpi4 >= '0' && youthPRSportJulContents.kpi4 <= '0.6')?'red':(youthPRSportJulContents.kpi4 > '0.6' && youthPRSportJulContents.kpi4 <= '0.8')?'orange':(youthPRSportJulContents.kpi4 > '0.8' && youthPRSportJulContents.kpi4 < '1')?'yellow-7':(youthPRSportJulContents.kpi4 >= '1' && youthPRSportJulContents.kpi4 < '1.2')?'green':(youthPRSportJulContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJulContents.kpi5 == null)?'grey-2':(youthPRSportJulContents.kpi5 >= '0' && youthPRSportJulContents.kpi5 <= '0.6')?'red':(youthPRSportJulContents.kpi5 > '0.6' && youthPRSportJulContents.kpi5 <= '0.8')?'orange':(youthPRSportJulContents.kpi5 > '0.8' && youthPRSportJulContents.kpi5 < '1')?'yellow-7':(youthPRSportJulContents.kpi5 >= '1' && youthPRSportJulContents.kpi5 < '1.2')?'green':(youthPRSportJulContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi5}}
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
                              :color="(youthPRSportAugContents.kpi1 == null)?'grey-2':(youthPRSportAugContents.kpi1 >= '0' && youthPRSportAugContents.kpi1 <= '2.4')?'red':(youthPRSportAugContents.kpi1 > '2.4' && youthPRSportAugContents.kpi1 <= '3.2')?'orange':(youthPRSportAugContents.kpi1 > '3.2' && youthPRSportAugContents.kpi1 < '4')?'yellow-7':(youthPRSportAugContents.kpi1 >= '4' && youthPRSportAugContents.kpi1 < '4.8')?'green':(youthPRSportAugContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAugContents.kpi2 == null)?'grey-2':(youthPRSportAugContents.kpi2 >= '0' && youthPRSportAugContents.kpi2 <= '0.6')?'red':(youthPRSportAugContents.kpi2 > '0.6' && youthPRSportAugContents.kpi2 <= '0.8')?'orange':(youthPRSportAugContents.kpi2 > '0.8' && youthPRSportAugContents.kpi2 < '1')?'yellow-7':(youthPRSportAugContents.kpi2 >= '1' && youthPRSportAugContents.kpi2 < '1.2')?'green':(youthPRSportAugContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAugContents.kpi3 == null)?'grey-2':(youthPRSportAugContents.kpi3 >= '0' && youthPRSportAugContents.kpi3 <= '0.6')?'red':(youthPRSportAugContents.kpi3 > '0.6' && youthPRSportAugContents.kpi3 <= '0.8')?'orange':(youthPRSportAugContents.kpi3 > '0.8' && youthPRSportAugContents.kpi3 < '1')?'yellow-7':(youthPRSportAugContents.kpi3 >= '1' && youthPRSportAugContents.kpi3 < '1.2')?'green':(youthPRSportAugContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAugContents.kpi4 == null)?'grey-2':(youthPRSportAugContents.kpi4 >= '0' && youthPRSportAugContents.kpi4 <= '0.6')?'red':(youthPRSportAugContents.kpi4 > '0.6' && youthPRSportAugContents.kpi4 <= '0.8')?'orange':(youthPRSportAugContents.kpi4 > '0.8' && youthPRSportAugContents.kpi4 < '1')?'yellow-7':(youthPRSportAugContents.kpi4 >= '1' && youthPRSportAugContents.kpi4 < '1.2')?'green':(youthPRSportAugContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAugContents.kpi5 == null)?'grey-2':(youthPRSportAugContents.kpi5 >= '0' && youthPRSportAugContents.kpi5 <= '0.6')?'red':(youthPRSportAugContents.kpi5 > '0.6' && youthPRSportAugContents.kpi5 <= '0.8')?'orange':(youthPRSportAugContents.kpi5 > '0.8' && youthPRSportAugContents.kpi5 < '1')?'yellow-7':(youthPRSportAugContents.kpi5 >= '1' && youthPRSportAugContents.kpi5 < '1.2')?'green':(youthPRSportAugContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi5}}
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
                              :color="(youthPRSportSepContents.kpi1 == null)?'grey-2':(youthPRSportSepContents.kpi1 >= '0' && youthPRSportSepContents.kpi1 <= '2.4')?'red':(youthPRSportSepContents.kpi1 > '2.4' && youthPRSportSepContents.kpi1 <= '3.2')?'orange':(youthPRSportSepContents.kpi1 > '3.2' && youthPRSportSepContents.kpi1 < '4')?'yellow-7':(youthPRSportSepContents.kpi1 >= '4' && youthPRSportSepContents.kpi1 < '4.8')?'green':(youthPRSportSepContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportSepContents.kpi2 == null)?'grey-2':(youthPRSportSepContents.kpi2 >= '0' && youthPRSportSepContents.kpi2 <= '0.6')?'red':(youthPRSportSepContents.kpi2 > '0.6' && youthPRSportSepContents.kpi2 <= '0.8')?'orange':(youthPRSportSepContents.kpi2 > '0.8' && youthPRSportSepContents.kpi2 < '1')?'yellow-7':(youthPRSportSepContents.kpi2 >= '1' && youthPRSportSepContents.kpi2 < '1.2')?'green':(youthPRSportSepContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportSepContents.kpi3 == null)?'grey-2':(youthPRSportSepContents.kpi3 >= '0' && youthPRSportSepContents.kpi3 <= '0.6')?'red':(youthPRSportSepContents.kpi3 > '0.6' && youthPRSportSepContents.kpi3 <= '0.8')?'orange':(youthPRSportSepContents.kpi3 > '0.8' && youthPRSportSepContents.kpi3 < '1')?'yellow-7':(youthPRSportSepContents.kpi3 >= '1' && youthPRSportSepContents.kpi3 < '1.2')?'green':(youthPRSportSepContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportSepContents.kpi4 == null)?'grey-2':(youthPRSportSepContents.kpi4 >= '0' && youthPRSportSepContents.kpi4 <= '0.6')?'red':(youthPRSportSepContents.kpi4 > '0.6' && youthPRSportSepContents.kpi4 <= '0.8')?'orange':(youthPRSportSepContents.kpi4 > '0.8' && youthPRSportSepContents.kpi4 < '1')?'yellow-7':(youthPRSportSepContents.kpi4 >= '1' && youthPRSportSepContents.kpi4 < '1.2')?'green':(youthPRSportSepContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportSepContents.kpi5 == null)?'grey-2':(youthPRSportSepContents.kpi5 >= '0' && youthPRSportSepContents.kpi5 <= '0.6')?'red':(youthPRSportSepContents.kpi5 > '0.6' && youthPRSportSepContents.kpi5 <= '0.8')?'orange':(youthPRSportSepContents.kpi5 > '0.8' && youthPRSportSepContents.kpi5 < '1')?'yellow-7':(youthPRSportSepContents.kpi5 >= '1' && youthPRSportSepContents.kpi5 < '1.2')?'green':(youthPRSportSepContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi5}}
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
                              :color="(youthPRSportOctContents.kpi1 == null)?'grey-2':(youthPRSportOctContents.kpi1 >= '0' && youthPRSportOctContents.kpi1 <= '2.4')?'red':(youthPRSportOctContents.kpi1 > '2.4' && youthPRSportOctContents.kpi1 <= '3.2')?'orange':(youthPRSportOctContents.kpi1 > '3.2' && youthPRSportOctContents.kpi1 < '4')?'yellow-7':(youthPRSportOctContents.kpi1 >= '4' && youthPRSportOctContents.kpi1 < '4.8')?'green':(youthPRSportOctContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportOctContents.kpi2 == null)?'grey-2':(youthPRSportOctContents.kpi2 >= '0' && youthPRSportOctContents.kpi2 <= '0.6')?'red':(youthPRSportOctContents.kpi2 > '0.6' && youthPRSportOctContents.kpi2 <= '0.8')?'orange':(youthPRSportOctContents.kpi2 > '0.8' && youthPRSportOctContents.kpi2 < '1')?'yellow-7':(youthPRSportOctContents.kpi2 >= '1' && youthPRSportOctContents.kpi2 < '1.2')?'green':(youthPRSportOctContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportOctContents.kpi3 == null)?'grey-2':(youthPRSportOctContents.kpi3 >= '0' && youthPRSportOctContents.kpi3 <= '0.6')?'red':(youthPRSportOctContents.kpi3 > '0.6' && youthPRSportOctContents.kpi3 <= '0.8')?'orange':(youthPRSportOctContents.kpi3 > '0.8' && youthPRSportOctContents.kpi3 < '1')?'yellow-7':(youthPRSportOctContents.kpi3 >= '1' && youthPRSportOctContents.kpi3 < '1.2')?'green':(youthPRSportOctContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportOctContents.kpi4 == null)?'grey-2':(youthPRSportOctContents.kpi4 >= '0' && youthPRSportOctContents.kpi4 <= '0.6')?'red':(youthPRSportOctContents.kpi4 > '0.6' && youthPRSportOctContents.kpi4 <= '0.8')?'orange':(youthPRSportOctContents.kpi4 > '0.8' && youthPRSportOctContents.kpi4 < '1')?'yellow-7':(youthPRSportOctContents.kpi4 >= '1' && youthPRSportOctContents.kpi4 < '1.2')?'green':(youthPRSportOctContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportOctContents.kpi5 == null)?'grey-2':(youthPRSportOctContents.kpi5 >= '0' && youthPRSportOctContents.kpi5 <= '0.6')?'red':(youthPRSportOctContents.kpi5 > '0.6' && youthPRSportOctContents.kpi5 <= '0.8')?'orange':(youthPRSportOctContents.kpi5 > '0.8' && youthPRSportOctContents.kpi5 < '1')?'yellow-7':(youthPRSportOctContents.kpi5 >= '1' && youthPRSportOctContents.kpi5 < '1.2')?'green':(youthPRSportOctContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi5}}
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
                              :color="(youthPRSportNovContents.kpi1 == null)?'grey-2':(youthPRSportNovContents.kpi1 >= '0' && youthPRSportNovContents.kpi1 <= '2.4')?'red':(youthPRSportNovContents.kpi1 > '2.4' && youthPRSportNovContents.kpi1 <= '3.2')?'orange':(youthPRSportNovContents.kpi1 > '3.2' && youthPRSportNovContents.kpi1 < '4')?'yellow-7':(youthPRSportNovContents.kpi1 >= '4' && youthPRSportNovContents.kpi1 < '4.8')?'green':(youthPRSportNovContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportNovContents.kpi2 == null)?'grey-2':(youthPRSportNovContents.kpi2 >= '0' && youthPRSportNovContents.kpi2 <= '0.6')?'red':(youthPRSportNovContents.kpi2 > '0.6' && youthPRSportNovContents.kpi2 <= '0.8')?'orange':(youthPRSportNovContents.kpi2 > '0.8' && youthPRSportNovContents.kpi2 < '1')?'yellow-7':(youthPRSportNovContents.kpi2 >= '1' && youthPRSportNovContents.kpi2 < '1.2')?'green':(youthPRSportNovContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportNovContents.kpi3 == null)?'grey-2':(youthPRSportNovContents.kpi3 >= '0' && youthPRSportNovContents.kpi3 <= '0.6')?'red':(youthPRSportNovContents.kpi3 > '0.6' && youthPRSportNovContents.kpi3 <= '0.8')?'orange':(youthPRSportNovContents.kpi3 > '0.8' && youthPRSportNovContents.kpi3 < '1')?'yellow-7':(youthPRSportNovContents.kpi3 >= '1' && youthPRSportNovContents.kpi3 < '1.2')?'green':(youthPRSportNovContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportNovContents.kpi4 == null)?'grey-2':(youthPRSportNovContents.kpi4 >= '0' && youthPRSportNovContents.kpi4 <= '0.6')?'red':(youthPRSportNovContents.kpi4 > '0.6' && youthPRSportNovContents.kpi4 <= '0.8')?'orange':(youthPRSportNovContents.kpi4 > '0.8' && youthPRSportNovContents.kpi4 < '1')?'yellow-7':(youthPRSportNovContents.kpi4 >= '1' && youthPRSportNovContents.kpi4 < '1.2')?'green':(youthPRSportNovContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportNovContents.kpi5 == null)?'grey-2':(youthPRSportNovContents.kpi5 >= '0' && youthPRSportNovContents.kpi5 <= '0.6')?'red':(youthPRSportNovContents.kpi5 > '0.6' && youthPRSportNovContents.kpi5 <= '0.8')?'orange':(youthPRSportNovContents.kpi5 > '0.8' && youthPRSportNovContents.kpi5 < '1')?'yellow-7':(youthPRSportNovContents.kpi5 >= '1' && youthPRSportNovContents.kpi5 < '1.2')?'green':(youthPRSportNovContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi5}}
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
                              :color="(youthPRSportDecContents.kpi1 == null)?'grey-2':(youthPRSportDecContents.kpi1 >= '0' && youthPRSportDecContents.kpi1 <= '2.4')?'red':(youthPRSportDecContents.kpi1 > '2.4' && youthPRSportDecContents.kpi1 <= '3.2')?'orange':(youthPRSportDecContents.kpi1 > '3.2' && youthPRSportDecContents.kpi1 < '4')?'yellow-7':(youthPRSportDecContents.kpi1 >= '4' && youthPRSportDecContents.kpi1 < '4.8')?'green':(youthPRSportDecContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportDecContents.kpi2 == null)?'grey-2':(youthPRSportDecContents.kpi2 >= '0' && youthPRSportDecContents.kpi2 <= '0.6')?'red':(youthPRSportDecContents.kpi2 > '0.6' && youthPRSportDecContents.kpi2 <= '0.8')?'orange':(youthPRSportDecContents.kpi2 > '0.8' && youthPRSportDecContents.kpi2 < '1')?'yellow-7':(youthPRSportDecContents.kpi2 >= '1' && youthPRSportDecContents.kpi2 < '1.2')?'green':(youthPRSportDecContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportDecContents.kpi3 == null)?'grey-2':(youthPRSportDecContents.kpi3 >= '0' && youthPRSportDecContents.kpi3 <= '0.6')?'red':(youthPRSportDecContents.kpi3 > '0.6' && youthPRSportDecContents.kpi3 <= '0.8')?'orange':(youthPRSportDecContents.kpi3 > '0.8' && youthPRSportDecContents.kpi3 < '1')?'yellow-7':(youthPRSportDecContents.kpi3 >= '1' && youthPRSportDecContents.kpi3 < '1.2')?'green':(youthPRSportDecContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportDecContents.kpi4 == null)?'grey-2':(youthPRSportDecContents.kpi4 >= '0' && youthPRSportDecContents.kpi4 <= '0.6')?'red':(youthPRSportDecContents.kpi4 > '0.6' && youthPRSportDecContents.kpi4 <= '0.8')?'orange':(youthPRSportDecContents.kpi4 > '0.8' && youthPRSportDecContents.kpi4 < '1')?'yellow-7':(youthPRSportDecContents.kpi4 >= '1' && youthPRSportDecContents.kpi4 < '1.2')?'green':(youthPRSportDecContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportDecContents.kpi5 == null)?'grey-2':(youthPRSportDecContents.kpi5 >= '0' && youthPRSportDecContents.kpi5 <= '0.6')?'red':(youthPRSportDecContents.kpi5 > '0.6' && youthPRSportDecContents.kpi5 <= '0.8')?'orange':(youthPRSportDecContents.kpi5 > '0.8' && youthPRSportDecContents.kpi5 < '1')?'yellow-7':(youthPRSportDecContents.kpi5 >= '1' && youthPRSportDecContents.kpi5 < '1.2')?'green':(youthPRSportDecContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi5}}
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
                                <q-tooltip># of unique children</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of total children</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of unique youth</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip># of total youth</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 5
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
                              :color="(youthPRSportJanContents.kpi1 == null)?'grey-2':(youthPRSportJanContents.kpi1 >= '0' && youthPRSportJanContents.kpi1 <= '2.4')?'red':(youthPRSportJanContents.kpi1 > '2.4' && youthPRSportJanContents.kpi1 <= '3.2')?'orange':(youthPRSportJanContents.kpi1 > '3.2' && youthPRSportJanContents.kpi1 < '4')?'yellow-7':(youthPRSportJanContents.kpi1 >= '4' && youthPRSportJanContents.kpi1 < '4.8')?'green':(youthPRSportJanContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJanContents.kpi2 == null)?'grey-2':(youthPRSportJanContents.kpi2 >= '0' && youthPRSportJanContents.kpi2 <= '0.6')?'red':(youthPRSportJanContents.kpi2 > '0.6' && youthPRSportJanContents.kpi2 <= '0.8')?'orange':(youthPRSportJanContents.kpi2 > '0.8' && youthPRSportJanContents.kpi2 < '1')?'yellow-7':(youthPRSportJanContents.kpi2 >= '1' && youthPRSportJanContents.kpi2 < '1.2')?'green':(youthPRSportJanContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJanContents.kpi3 == null)?'grey-2':(youthPRSportJanContents.kpi3 >= '0' && youthPRSportJanContents.kpi3 <= '0.6')?'red':(youthPRSportJanContents.kpi3 > '0.6' && youthPRSportJanContents.kpi3 <= '0.8')?'orange':(youthPRSportJanContents.kpi3 > '0.8' && youthPRSportJanContents.kpi3 < '1')?'yellow-7':(youthPRSportJanContents.kpi3 >= '1' && youthPRSportJanContents.kpi3 < '1.2')?'green':(youthPRSportJanContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJanContents.kpi4 == null)?'grey-2':(youthPRSportJanContents.kpi4 >= '0' && youthPRSportJanContents.kpi4 <= '0.6')?'red':(youthPRSportJanContents.kpi4 > '0.6' && youthPRSportJanContents.kpi4 <= '0.8')?'orange':(youthPRSportJanContents.kpi4 > '0.8' && youthPRSportJanContents.kpi4 < '1')?'yellow-7':(youthPRSportJanContents.kpi4 >= '1' && youthPRSportJanContents.kpi4 < '1.2')?'green':(youthPRSportJanContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJanContents.kpi5 == null)?'grey-2':(youthPRSportJanContents.kpi5 >= '0' && youthPRSportJanContents.kpi5 <= '0.6')?'red':(youthPRSportJanContents.kpi5 > '0.6' && youthPRSportJanContents.kpi5 <= '0.8')?'orange':(youthPRSportJanContents.kpi5 > '0.8' && youthPRSportJanContents.kpi5 < '1')?'yellow-7':(youthPRSportJanContents.kpi5 >= '1' && youthPRSportJanContents.kpi5 < '1.2')?'green':(youthPRSportJanContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi5}}
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
                              :color="(youthPRSportFebContents.kpi1 == null)?'grey-2':(youthPRSportFebContents.kpi1 >= '0' && youthPRSportFebContents.kpi1 <= '2.4')?'red':(youthPRSportFebContents.kpi1 > '2.4' && youthPRSportFebContents.kpi1 <= '3.2')?'orange':(youthPRSportFebContents.kpi1 > '3.2' && youthPRSportFebContents.kpi1 < '4')?'yellow-7':(youthPRSportFebContents.kpi1 >= '4' && youthPRSportFebContents.kpi1 < '4.8')?'green':(youthPRSportFebContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportFebContents.kpi2 == null)?'grey-2':(youthPRSportFebContents.kpi2 >= '0' && youthPRSportFebContents.kpi2 <= '0.6')?'red':(youthPRSportFebContents.kpi2 > '0.6' && youthPRSportFebContents.kpi2 <= '0.8')?'orange':(youthPRSportFebContents.kpi2 > '0.8' && youthPRSportFebContents.kpi2 < '1')?'yellow-7':(youthPRSportFebContents.kpi2 >= '1' && youthPRSportFebContents.kpi2 < '1.2')?'green':(youthPRSportFebContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportFebContents.kpi3 == null)?'grey-2':(youthPRSportFebContents.kpi3 >= '0' && youthPRSportFebContents.kpi3 <= '0.6')?'red':(youthPRSportFebContents.kpi3 > '0.6' && youthPRSportFebContents.kpi3 <= '0.8')?'orange':(youthPRSportFebContents.kpi3 > '0.8' && youthPRSportFebContents.kpi3 < '1')?'yellow-7':(youthPRSportFebContents.kpi3 >= '1' && youthPRSportFebContents.kpi3 < '1.2')?'green':(youthPRSportFebContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportFebContents.kpi4 == null)?'grey-2':(youthPRSportFebContents.kpi4 >= '0' && youthPRSportFebContents.kpi4 <= '0.6')?'red':(youthPRSportFebContents.kpi4 > '0.6' && youthPRSportFebContents.kpi4 <= '0.8')?'orange':(youthPRSportFebContents.kpi4 > '0.8' && youthPRSportFebContents.kpi4 < '1')?'yellow-7':(youthPRSportFebContents.kpi4 >= '1' && youthPRSportFebContents.kpi4 < '1.2')?'green':(youthPRSportFebContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportFebContents.kpi5 == null)?'grey-2':(youthPRSportFebContents.kpi5 >= '0' && youthPRSportFebContents.kpi5 <= '0.6')?'red':(youthPRSportFebContents.kpi5 > '0.6' && youthPRSportFebContents.kpi5 <= '0.8')?'orange':(youthPRSportFebContents.kpi5 > '0.8' && youthPRSportFebContents.kpi5 < '1')?'yellow-7':(youthPRSportFebContents.kpi5 >= '1' && youthPRSportFebContents.kpi5 < '1.2')?'green':(youthPRSportFebContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi5}}
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
                              :color="(youthPRSportMarContents.kpi1 == null)?'grey-2':(youthPRSportMarContents.kpi1 >= '0' && youthPRSportMarContents.kpi1 <= '2.4')?'red':(youthPRSportMarContents.kpi1 > '2.4' && youthPRSportMarContents.kpi1 <= '3.2')?'orange':(youthPRSportMarContents.kpi1 > '3.2' && youthPRSportMarContents.kpi1 < '4')?'yellow-7':(youthPRSportMarContents.kpi1 >= '4' && youthPRSportMarContents.kpi1 < '4.8')?'green':(youthPRSportMarContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMarContents.kpi2 == null)?'grey-2':(youthPRSportMarContents.kpi2 >= '0' && youthPRSportMarContents.kpi2 <= '0.6')?'red':(youthPRSportMarContents.kpi2 > '0.6' && youthPRSportMarContents.kpi2 <= '0.8')?'orange':(youthPRSportMarContents.kpi2 > '0.8' && youthPRSportMarContents.kpi2 < '1')?'yellow-7':(youthPRSportMarContents.kpi2 >= '1' && youthPRSportMarContents.kpi2 < '1.2')?'green':(youthPRSportMarContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMarContents.kpi3 == null)?'grey-2':(youthPRSportMarContents.kpi3 >= '0' && youthPRSportMarContents.kpi3 <= '0.6')?'red':(youthPRSportMarContents.kpi3 > '0.6' && youthPRSportMarContents.kpi3 <= '0.8')?'orange':(youthPRSportMarContents.kpi3 > '0.8' && youthPRSportMarContents.kpi3 < '1')?'yellow-7':(youthPRSportMarContents.kpi3 >= '1' && youthPRSportMarContents.kpi3 < '1.2')?'green':(youthPRSportMarContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMarContents.kpi4 == null)?'grey-2':(youthPRSportMarContents.kpi4 >= '0' && youthPRSportMarContents.kpi4 <= '0.6')?'red':(youthPRSportMarContents.kpi4 > '0.6' && youthPRSportMarContents.kpi4 <= '0.8')?'orange':(youthPRSportMarContents.kpi4 > '0.8' && youthPRSportMarContents.kpi4 < '1')?'yellow-7':(youthPRSportMarContents.kpi4 >= '1' && youthPRSportMarContents.kpi4 < '1.2')?'green':(youthPRSportMarContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMarContents.kpi5 == null)?'grey-2':(youthPRSportMarContents.kpi5 >= '0' && youthPRSportMarContents.kpi5 <= '0.6')?'red':(youthPRSportMarContents.kpi5 > '0.6' && youthPRSportMarContents.kpi5 <= '0.8')?'orange':(youthPRSportMarContents.kpi5 > '0.8' && youthPRSportMarContents.kpi5 < '1')?'yellow-7':(youthPRSportMarContents.kpi5 >= '1' && youthPRSportMarContents.kpi5 < '1.2')?'green':(youthPRSportMarContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi5}}
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
                              :color="(youthPRSportAprContents.kpi1 == null)?'grey-2':(youthPRSportAprContents.kpi1 >= '0' && youthPRSportAprContents.kpi1 <= '2.4')?'red':(youthPRSportAprContents.kpi1 > '2.4' && youthPRSportAprContents.kpi1 <= '3.2')?'orange':(youthPRSportAprContents.kpi1 > '3.2' && youthPRSportAprContents.kpi1 < '4')?'yellow-7':(youthPRSportAprContents.kpi1 >= '4' && youthPRSportAprContents.kpi1 < '4.8')?'green':(youthPRSportAprContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAprContents.kpi2 == null)?'grey-2':(youthPRSportAprContents.kpi2 >= '0' && youthPRSportAprContents.kpi2 <= '0.6')?'red':(youthPRSportAprContents.kpi2 > '0.6' && youthPRSportAprContents.kpi2 <= '0.8')?'orange':(youthPRSportAprContents.kpi2 > '0.8' && youthPRSportAprContents.kpi2 < '1')?'yellow-7':(youthPRSportAprContents.kpi2 >= '1' && youthPRSportAprContents.kpi2 < '1.2')?'green':(youthPRSportAprContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAprContents.kpi3 == null)?'grey-2':(youthPRSportAprContents.kpi3 >= '0' && youthPRSportAprContents.kpi3 <= '0.6')?'red':(youthPRSportAprContents.kpi3 > '0.6' && youthPRSportAprContents.kpi3 <= '0.8')?'orange':(youthPRSportAprContents.kpi3 > '0.8' && youthPRSportAprContents.kpi3 < '1')?'yellow-7':(youthPRSportAprContents.kpi3 >= '1' && youthPRSportAprContents.kpi3 < '1.2')?'green':(youthPRSportAprContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAprContents.kpi4 == null)?'grey-2':(youthPRSportAprContents.kpi4 >= '0' && youthPRSportAprContents.kpi4 <= '0.6')?'red':(youthPRSportAprContents.kpi4 > '0.6' && youthPRSportAprContents.kpi4 <= '0.8')?'orange':(youthPRSportAprContents.kpi4 > '0.8' && youthPRSportAprContents.kpi4 < '1')?'yellow-7':(youthPRSportAprContents.kpi4 >= '1' && youthPRSportAprContents.kpi4 < '1.2')?'green':(youthPRSportAprContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAprContents.kpi5 == null)?'grey-2':(youthPRSportAprContents.kpi5 >= '0' && youthPRSportAprContents.kpi5 <= '0.6')?'red':(youthPRSportAprContents.kpi5 > '0.6' && youthPRSportAprContents.kpi5 <= '0.8')?'orange':(youthPRSportAprContents.kpi5 > '0.8' && youthPRSportAprContents.kpi5 < '1')?'yellow-7':(youthPRSportAprContents.kpi5 >= '1' && youthPRSportAprContents.kpi5 < '1.2')?'green':(youthPRSportAprContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi5}}
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
                              :color="(youthPRSportMayContents.kpi1 == null)?'grey-2':(youthPRSportMayContents.kpi1 >= '0' && youthPRSportMayContents.kpi1 <= '2.4')?'red':(youthPRSportMayContents.kpi1 > '2.4' && youthPRSportMayContents.kpi1 <= '3.2')?'orange':(youthPRSportMayContents.kpi1 > '3.2' && youthPRSportMayContents.kpi1 < '4')?'yellow-7':(youthPRSportMayContents.kpi1 >= '4' && youthPRSportMayContents.kpi1 < '4.8')?'green':(youthPRSportMayContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMayContents.kpi2 == null)?'grey-2':(youthPRSportMayContents.kpi2 >= '0' && youthPRSportMayContents.kpi2 <= '0.6')?'red':(youthPRSportMayContents.kpi2 > '0.6' && youthPRSportMayContents.kpi2 <= '0.8')?'orange':(youthPRSportMayContents.kpi2 > '0.8' && youthPRSportMayContents.kpi2 < '1')?'yellow-7':(youthPRSportMayContents.kpi2 >= '1' && youthPRSportMayContents.kpi2 < '1.2')?'green':(youthPRSportMayContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMayContents.kpi3 == null)?'grey-2':(youthPRSportMayContents.kpi3 >= '0' && youthPRSportMayContents.kpi3 <= '0.6')?'red':(youthPRSportMayContents.kpi3 > '0.6' && youthPRSportMayContents.kpi3 <= '0.8')?'orange':(youthPRSportMayContents.kpi3 > '0.8' && youthPRSportMayContents.kpi3 < '1')?'yellow-7':(youthPRSportMayContents.kpi3 >= '1' && youthPRSportMayContents.kpi3 < '1.2')?'green':(youthPRSportMayContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMayContents.kpi4 == null)?'grey-2':(youthPRSportMayContents.kpi4 >= '0' && youthPRSportMayContents.kpi4 <= '0.6')?'red':(youthPRSportMayContents.kpi4 > '0.6' && youthPRSportMayContents.kpi4 <= '0.8')?'orange':(youthPRSportMayContents.kpi4 > '0.8' && youthPRSportMayContents.kpi4 < '1')?'yellow-7':(youthPRSportMayContents.kpi4 >= '1' && youthPRSportMayContents.kpi4 < '1.2')?'green':(youthPRSportMayContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMayContents.kpi5 == null)?'grey-2':(youthPRSportMayContents.kpi5 >= '0' && youthPRSportMayContents.kpi5 <= '0.6')?'red':(youthPRSportMayContents.kpi5 > '0.6' && youthPRSportMayContents.kpi5 <= '0.8')?'orange':(youthPRSportMayContents.kpi5 > '0.8' && youthPRSportMayContents.kpi5 < '1')?'yellow-7':(youthPRSportMayContents.kpi5 >= '1' && youthPRSportMayContents.kpi5 < '1.2')?'green':(youthPRSportMayContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi5}}
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
                              :color="(youthPRSportJunContents.kpi1 == null)?'grey-2':(youthPRSportJunContents.kpi1 >= '0' && youthPRSportJunContents.kpi1 <= '2.4')?'red':(youthPRSportJunContents.kpi1 > '2.4' && youthPRSportJunContents.kpi1 <= '3.2')?'orange':(youthPRSportJunContents.kpi1 > '3.2' && youthPRSportJunContents.kpi1 < '4')?'yellow-7':(youthPRSportJunContents.kpi1 >= '4' && youthPRSportJunContents.kpi1 < '4.8')?'green':(youthPRSportJunContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJunContents.kpi2 == null)?'grey-2':(youthPRSportJunContents.kpi2 >= '0' && youthPRSportJunContents.kpi2 <= '0.6')?'red':(youthPRSportJunContents.kpi2 > '0.6' && youthPRSportJunContents.kpi2 <= '0.8')?'orange':(youthPRSportJunContents.kpi2 > '0.8' && youthPRSportJunContents.kpi2 < '1')?'yellow-7':(youthPRSportJunContents.kpi2 >= '1' && youthPRSportJunContents.kpi2 < '1.2')?'green':(youthPRSportJunContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJunContents.kpi3 == null)?'grey-2':(youthPRSportJunContents.kpi3 >= '0' && youthPRSportJunContents.kpi3 <= '0.6')?'red':(youthPRSportJunContents.kpi3 > '0.6' && youthPRSportJunContents.kpi3 <= '0.8')?'orange':(youthPRSportJunContents.kpi3 > '0.8' && youthPRSportJunContents.kpi3 < '1')?'yellow-7':(youthPRSportJunContents.kpi3 >= '1' && youthPRSportJunContents.kpi3 < '1.2')?'green':(youthPRSportJunContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJunContents.kpi4 == null)?'grey-2':(youthPRSportJunContents.kpi4 >= '0' && youthPRSportJunContents.kpi4 <= '0.6')?'red':(youthPRSportJunContents.kpi4 > '0.6' && youthPRSportJunContents.kpi4 <= '0.8')?'orange':(youthPRSportJunContents.kpi4 > '0.8' && youthPRSportJunContents.kpi4 < '1')?'yellow-7':(youthPRSportJunContents.kpi4 >= '1' && youthPRSportJunContents.kpi4 < '1.2')?'green':(youthPRSportJunContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJunContents.kpi5 == null)?'grey-2':(youthPRSportJunContents.kpi5 >= '0' && youthPRSportJunContents.kpi5 <= '0.6')?'red':(youthPRSportJunContents.kpi5 > '0.6' && youthPRSportJunContents.kpi5 <= '0.8')?'orange':(youthPRSportJunContents.kpi5 > '0.8' && youthPRSportJunContents.kpi5 < '1')?'yellow-7':(youthPRSportJunContents.kpi5 >= '1' && youthPRSportJunContents.kpi5 < '1.2')?'green':(youthPRSportJunContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi5}}
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
                              :color="(youthPRSportJulContents.kpi1 == null)?'grey-2':(youthPRSportJulContents.kpi1 >= '0' && youthPRSportJulContents.kpi1 <= '2.4')?'red':(youthPRSportJulContents.kpi1 > '2.4' && youthPRSportJulContents.kpi1 <= '3.2')?'orange':(youthPRSportJulContents.kpi1 > '3.2' && youthPRSportJulContents.kpi1 < '4')?'yellow-7':(youthPRSportJulContents.kpi1 >= '4' && youthPRSportJulContents.kpi1 < '4.8')?'green':(youthPRSportJulContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJulContents.kpi2 == null)?'grey-2':(youthPRSportJulContents.kpi2 >= '0' && youthPRSportJulContents.kpi2 <= '0.6')?'red':(youthPRSportJulContents.kpi2 > '0.6' && youthPRSportJulContents.kpi2 <= '0.8')?'orange':(youthPRSportJulContents.kpi2 > '0.8' && youthPRSportJulContents.kpi2 < '1')?'yellow-7':(youthPRSportJulContents.kpi2 >= '1' && youthPRSportJulContents.kpi2 < '1.2')?'green':(youthPRSportJulContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJulContents.kpi3 == null)?'grey-2':(youthPRSportJulContents.kpi3 >= '0' && youthPRSportJulContents.kpi3 <= '0.6')?'red':(youthPRSportJulContents.kpi3 > '0.6' && youthPRSportJulContents.kpi3 <= '0.8')?'orange':(youthPRSportJulContents.kpi3 > '0.8' && youthPRSportJulContents.kpi3 < '1')?'yellow-7':(youthPRSportJulContents.kpi3 >= '1' && youthPRSportJulContents.kpi3 < '1.2')?'green':(youthPRSportJulContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJulContents.kpi4 == null)?'grey-2':(youthPRSportJulContents.kpi4 >= '0' && youthPRSportJulContents.kpi4 <= '0.6')?'red':(youthPRSportJulContents.kpi4 > '0.6' && youthPRSportJulContents.kpi4 <= '0.8')?'orange':(youthPRSportJulContents.kpi4 > '0.8' && youthPRSportJulContents.kpi4 < '1')?'yellow-7':(youthPRSportJulContents.kpi4 >= '1' && youthPRSportJulContents.kpi4 < '1.2')?'green':(youthPRSportJulContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJulContents.kpi5 == null)?'grey-2':(youthPRSportJulContents.kpi5 >= '0' && youthPRSportJulContents.kpi5 <= '0.6')?'red':(youthPRSportJulContents.kpi5 > '0.6' && youthPRSportJulContents.kpi5 <= '0.8')?'orange':(youthPRSportJulContents.kpi5 > '0.8' && youthPRSportJulContents.kpi5 < '1')?'yellow-7':(youthPRSportJulContents.kpi5 >= '1' && youthPRSportJulContents.kpi5 < '1.2')?'green':(youthPRSportJulContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi5}}
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
                              :color="(youthPRSportAugContents.kpi1 == null)?'grey-2':(youthPRSportAugContents.kpi1 >= '0' && youthPRSportAugContents.kpi1 <= '2.4')?'red':(youthPRSportAugContents.kpi1 > '2.4' && youthPRSportAugContents.kpi1 <= '3.2')?'orange':(youthPRSportAugContents.kpi1 > '3.2' && youthPRSportAugContents.kpi1 < '4')?'yellow-7':(youthPRSportAugContents.kpi1 >= '4' && youthPRSportAugContents.kpi1 < '4.8')?'green':(youthPRSportAugContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAugContents.kpi2 == null)?'grey-2':(youthPRSportAugContents.kpi2 >= '0' && youthPRSportAugContents.kpi2 <= '0.6')?'red':(youthPRSportAugContents.kpi2 > '0.6' && youthPRSportAugContents.kpi2 <= '0.8')?'orange':(youthPRSportAugContents.kpi2 > '0.8' && youthPRSportAugContents.kpi2 < '1')?'yellow-7':(youthPRSportAugContents.kpi2 >= '1' && youthPRSportAugContents.kpi2 < '1.2')?'green':(youthPRSportAugContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAugContents.kpi3 == null)?'grey-2':(youthPRSportAugContents.kpi3 >= '0' && youthPRSportAugContents.kpi3 <= '0.6')?'red':(youthPRSportAugContents.kpi3 > '0.6' && youthPRSportAugContents.kpi3 <= '0.8')?'orange':(youthPRSportAugContents.kpi3 > '0.8' && youthPRSportAugContents.kpi3 < '1')?'yellow-7':(youthPRSportAugContents.kpi3 >= '1' && youthPRSportAugContents.kpi3 < '1.2')?'green':(youthPRSportAugContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAugContents.kpi4 == null)?'grey-2':(youthPRSportAugContents.kpi4 >= '0' && youthPRSportAugContents.kpi4 <= '0.6')?'red':(youthPRSportAugContents.kpi4 > '0.6' && youthPRSportAugContents.kpi4 <= '0.8')?'orange':(youthPRSportAugContents.kpi4 > '0.8' && youthPRSportAugContents.kpi4 < '1')?'yellow-7':(youthPRSportAugContents.kpi4 >= '1' && youthPRSportAugContents.kpi4 < '1.2')?'green':(youthPRSportAugContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAugContents.kpi5 == null)?'grey-2':(youthPRSportAugContents.kpi5 >= '0' && youthPRSportAugContents.kpi5 <= '0.6')?'red':(youthPRSportAugContents.kpi5 > '0.6' && youthPRSportAugContents.kpi5 <= '0.8')?'orange':(youthPRSportAugContents.kpi5 > '0.8' && youthPRSportAugContents.kpi5 < '1')?'yellow-7':(youthPRSportAugContents.kpi5 >= '1' && youthPRSportAugContents.kpi5 < '1.2')?'green':(youthPRSportAugContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi5}}
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
                              :color="(youthPRSportSepContents.kpi1 == null)?'grey-2':(youthPRSportSepContents.kpi1 >= '0' && youthPRSportSepContents.kpi1 <= '2.4')?'red':(youthPRSportSepContents.kpi1 > '2.4' && youthPRSportSepContents.kpi1 <= '3.2')?'orange':(youthPRSportSepContents.kpi1 > '3.2' && youthPRSportSepContents.kpi1 < '4')?'yellow-7':(youthPRSportSepContents.kpi1 >= '4' && youthPRSportSepContents.kpi1 < '4.8')?'green':(youthPRSportSepContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportSepContents.kpi2 == null)?'grey-2':(youthPRSportSepContents.kpi2 >= '0' && youthPRSportSepContents.kpi2 <= '0.6')?'red':(youthPRSportSepContents.kpi2 > '0.6' && youthPRSportSepContents.kpi2 <= '0.8')?'orange':(youthPRSportSepContents.kpi2 > '0.8' && youthPRSportSepContents.kpi2 < '1')?'yellow-7':(youthPRSportSepContents.kpi2 >= '1' && youthPRSportSepContents.kpi2 < '1.2')?'green':(youthPRSportSepContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportSepContents.kpi3 == null)?'grey-2':(youthPRSportSepContents.kpi3 >= '0' && youthPRSportSepContents.kpi3 <= '0.6')?'red':(youthPRSportSepContents.kpi3 > '0.6' && youthPRSportSepContents.kpi3 <= '0.8')?'orange':(youthPRSportSepContents.kpi3 > '0.8' && youthPRSportSepContents.kpi3 < '1')?'yellow-7':(youthPRSportSepContents.kpi3 >= '1' && youthPRSportSepContents.kpi3 < '1.2')?'green':(youthPRSportSepContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportSepContents.kpi4 == null)?'grey-2':(youthPRSportSepContents.kpi4 >= '0' && youthPRSportSepContents.kpi4 <= '0.6')?'red':(youthPRSportSepContents.kpi4 > '0.6' && youthPRSportSepContents.kpi4 <= '0.8')?'orange':(youthPRSportSepContents.kpi4 > '0.8' && youthPRSportSepContents.kpi4 < '1')?'yellow-7':(youthPRSportSepContents.kpi4 >= '1' && youthPRSportSepContents.kpi4 < '1.2')?'green':(youthPRSportSepContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportSepContents.kpi5 == null)?'grey-2':(youthPRSportSepContents.kpi5 >= '0' && youthPRSportSepContents.kpi5 <= '0.6')?'red':(youthPRSportSepContents.kpi5 > '0.6' && youthPRSportSepContents.kpi5 <= '0.8')?'orange':(youthPRSportSepContents.kpi5 > '0.8' && youthPRSportSepContents.kpi5 < '1')?'yellow-7':(youthPRSportSepContents.kpi5 >= '1' && youthPRSportSepContents.kpi5 < '1.2')?'green':(youthPRSportSepContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi5}}
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
                              :color="(youthPRSportOctContents.kpi1 == null)?'grey-2':(youthPRSportOctContents.kpi1 >= '0' && youthPRSportOctContents.kpi1 <= '2.4')?'red':(youthPRSportOctContents.kpi1 > '2.4' && youthPRSportOctContents.kpi1 <= '3.2')?'orange':(youthPRSportOctContents.kpi1 > '3.2' && youthPRSportOctContents.kpi1 < '4')?'yellow-7':(youthPRSportOctContents.kpi1 >= '4' && youthPRSportOctContents.kpi1 < '4.8')?'green':(youthPRSportOctContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportOctContents.kpi2 == null)?'grey-2':(youthPRSportOctContents.kpi2 >= '0' && youthPRSportOctContents.kpi2 <= '0.6')?'red':(youthPRSportOctContents.kpi2 > '0.6' && youthPRSportOctContents.kpi2 <= '0.8')?'orange':(youthPRSportOctContents.kpi2 > '0.8' && youthPRSportOctContents.kpi2 < '1')?'yellow-7':(youthPRSportOctContents.kpi2 >= '1' && youthPRSportOctContents.kpi2 < '1.2')?'green':(youthPRSportOctContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportOctContents.kpi3 == null)?'grey-2':(youthPRSportOctContents.kpi3 >= '0' && youthPRSportOctContents.kpi3 <= '0.6')?'red':(youthPRSportOctContents.kpi3 > '0.6' && youthPRSportOctContents.kpi3 <= '0.8')?'orange':(youthPRSportOctContents.kpi3 > '0.8' && youthPRSportOctContents.kpi3 < '1')?'yellow-7':(youthPRSportOctContents.kpi3 >= '1' && youthPRSportOctContents.kpi3 < '1.2')?'green':(youthPRSportOctContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportOctContents.kpi4 == null)?'grey-2':(youthPRSportOctContents.kpi4 >= '0' && youthPRSportOctContents.kpi4 <= '0.6')?'red':(youthPRSportOctContents.kpi4 > '0.6' && youthPRSportOctContents.kpi4 <= '0.8')?'orange':(youthPRSportOctContents.kpi4 > '0.8' && youthPRSportOctContents.kpi4 < '1')?'yellow-7':(youthPRSportOctContents.kpi4 >= '1' && youthPRSportOctContents.kpi4 < '1.2')?'green':(youthPRSportOctContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportOctContents.kpi5 == null)?'grey-2':(youthPRSportOctContents.kpi5 >= '0' && youthPRSportOctContents.kpi5 <= '0.6')?'red':(youthPRSportOctContents.kpi5 > '0.6' && youthPRSportOctContents.kpi5 <= '0.8')?'orange':(youthPRSportOctContents.kpi5 > '0.8' && youthPRSportOctContents.kpi5 < '1')?'yellow-7':(youthPRSportOctContents.kpi5 >= '1' && youthPRSportOctContents.kpi5 < '1.2')?'green':(youthPRSportOctContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi5}}
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
                              :color="(youthPRSportNovContents.kpi1 == null)?'grey-2':(youthPRSportNovContents.kpi1 >= '0' && youthPRSportNovContents.kpi1 <= '2.4')?'red':(youthPRSportNovContents.kpi1 > '2.4' && youthPRSportNovContents.kpi1 <= '3.2')?'orange':(youthPRSportNovContents.kpi1 > '3.2' && youthPRSportNovContents.kpi1 < '4')?'yellow-7':(youthPRSportNovContents.kpi1 >= '4' && youthPRSportNovContents.kpi1 < '4.8')?'green':(youthPRSportNovContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportNovContents.kpi2 == null)?'grey-2':(youthPRSportNovContents.kpi2 >= '0' && youthPRSportNovContents.kpi2 <= '0.6')?'red':(youthPRSportNovContents.kpi2 > '0.6' && youthPRSportNovContents.kpi2 <= '0.8')?'orange':(youthPRSportNovContents.kpi2 > '0.8' && youthPRSportNovContents.kpi2 < '1')?'yellow-7':(youthPRSportNovContents.kpi2 >= '1' && youthPRSportNovContents.kpi2 < '1.2')?'green':(youthPRSportNovContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportNovContents.kpi3 == null)?'grey-2':(youthPRSportNovContents.kpi3 >= '0' && youthPRSportNovContents.kpi3 <= '0.6')?'red':(youthPRSportNovContents.kpi3 > '0.6' && youthPRSportNovContents.kpi3 <= '0.8')?'orange':(youthPRSportNovContents.kpi3 > '0.8' && youthPRSportNovContents.kpi3 < '1')?'yellow-7':(youthPRSportNovContents.kpi3 >= '1' && youthPRSportNovContents.kpi3 < '1.2')?'green':(youthPRSportNovContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportNovContents.kpi4 == null)?'grey-2':(youthPRSportNovContents.kpi4 >= '0' && youthPRSportNovContents.kpi4 <= '0.6')?'red':(youthPRSportNovContents.kpi4 > '0.6' && youthPRSportNovContents.kpi4 <= '0.8')?'orange':(youthPRSportNovContents.kpi4 > '0.8' && youthPRSportNovContents.kpi4 < '1')?'yellow-7':(youthPRSportNovContents.kpi4 >= '1' && youthPRSportNovContents.kpi4 < '1.2')?'green':(youthPRSportNovContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportNovContents.kpi5 == null)?'grey-2':(youthPRSportNovContents.kpi5 >= '0' && youthPRSportNovContents.kpi5 <= '0.6')?'red':(youthPRSportNovContents.kpi5 > '0.6' && youthPRSportNovContents.kpi5 <= '0.8')?'orange':(youthPRSportNovContents.kpi5 > '0.8' && youthPRSportNovContents.kpi5 < '1')?'yellow-7':(youthPRSportNovContents.kpi5 >= '1' && youthPRSportNovContents.kpi5 < '1.2')?'green':(youthPRSportNovContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi5}}
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
                              :color="(youthPRSportDecContents.kpi1 == null)?'grey-2':(youthPRSportDecContents.kpi1 >= '0' && youthPRSportDecContents.kpi1 <= '2.4')?'red':(youthPRSportDecContents.kpi1 > '2.4' && youthPRSportDecContents.kpi1 <= '3.2')?'orange':(youthPRSportDecContents.kpi1 > '3.2' && youthPRSportDecContents.kpi1 < '4')?'yellow-7':(youthPRSportDecContents.kpi1 >= '4' && youthPRSportDecContents.kpi1 < '4.8')?'green':(youthPRSportDecContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportDecContents.kpi2 == null)?'grey-2':(youthPRSportDecContents.kpi2 >= '0' && youthPRSportDecContents.kpi2 <= '0.6')?'red':(youthPRSportDecContents.kpi2 > '0.6' && youthPRSportDecContents.kpi2 <= '0.8')?'orange':(youthPRSportDecContents.kpi2 > '0.8' && youthPRSportDecContents.kpi2 < '1')?'yellow-7':(youthPRSportDecContents.kpi2 >= '1' && youthPRSportDecContents.kpi2 < '1.2')?'green':(youthPRSportDecContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportDecContents.kpi3 == null)?'grey-2':(youthPRSportDecContents.kpi3 >= '0' && youthPRSportDecContents.kpi3 <= '0.6')?'red':(youthPRSportDecContents.kpi3 > '0.6' && youthPRSportDecContents.kpi3 <= '0.8')?'orange':(youthPRSportDecContents.kpi3 > '0.8' && youthPRSportDecContents.kpi3 < '1')?'yellow-7':(youthPRSportDecContents.kpi3 >= '1' && youthPRSportDecContents.kpi3 < '1.2')?'green':(youthPRSportDecContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportDecContents.kpi4 == null)?'grey-2':(youthPRSportDecContents.kpi4 >= '0' && youthPRSportDecContents.kpi4 <= '0.6')?'red':(youthPRSportDecContents.kpi4 > '0.6' && youthPRSportDecContents.kpi4 <= '0.8')?'orange':(youthPRSportDecContents.kpi4 > '0.8' && youthPRSportDecContents.kpi4 < '1')?'yellow-7':(youthPRSportDecContents.kpi4 >= '1' && youthPRSportDecContents.kpi4 < '1.2')?'green':(youthPRSportDecContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportDecContents.kpi5 == null)?'grey-2':(youthPRSportDecContents.kpi5 >= '0' && youthPRSportDecContents.kpi5 <= '0.6')?'red':(youthPRSportDecContents.kpi5 > '0.6' && youthPRSportDecContents.kpi5 <= '0.8')?'orange':(youthPRSportDecContents.kpi5 > '0.8' && youthPRSportDecContents.kpi5 < '1')?'yellow-7':(youthPRSportDecContents.kpi5 >= '1' && youthPRSportDecContents.kpi5 < '1.2')?'green':(youthPRSportDecContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi5}}
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
                                <q-tooltip># of unique children</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of total children</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of unique youth</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip># of total youth</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 5
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
                              :color="(youthPRSportJanContents.kpi1 == null)?'grey-2':(youthPRSportJanContents.kpi1 >= '0' && youthPRSportJanContents.kpi1 <= '2.4')?'red':(youthPRSportJanContents.kpi1 > '2.4' && youthPRSportJanContents.kpi1 <= '3.2')?'orange':(youthPRSportJanContents.kpi1 > '3.2' && youthPRSportJanContents.kpi1 < '4')?'yellow-7':(youthPRSportJanContents.kpi1 >= '4' && youthPRSportJanContents.kpi1 < '4.8')?'green':(youthPRSportJanContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJanContents.kpi2 == null)?'grey-2':(youthPRSportJanContents.kpi2 >= '0' && youthPRSportJanContents.kpi2 <= '0.6')?'red':(youthPRSportJanContents.kpi2 > '0.6' && youthPRSportJanContents.kpi2 <= '0.8')?'orange':(youthPRSportJanContents.kpi2 > '0.8' && youthPRSportJanContents.kpi2 < '1')?'yellow-7':(youthPRSportJanContents.kpi2 >= '1' && youthPRSportJanContents.kpi2 < '1.2')?'green':(youthPRSportJanContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJanContents.kpi3 == null)?'grey-2':(youthPRSportJanContents.kpi3 >= '0' && youthPRSportJanContents.kpi3 <= '0.6')?'red':(youthPRSportJanContents.kpi3 > '0.6' && youthPRSportJanContents.kpi3 <= '0.8')?'orange':(youthPRSportJanContents.kpi3 > '0.8' && youthPRSportJanContents.kpi3 < '1')?'yellow-7':(youthPRSportJanContents.kpi3 >= '1' && youthPRSportJanContents.kpi3 < '1.2')?'green':(youthPRSportJanContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJanContents.kpi4 == null)?'grey-2':(youthPRSportJanContents.kpi4 >= '0' && youthPRSportJanContents.kpi4 <= '0.6')?'red':(youthPRSportJanContents.kpi4 > '0.6' && youthPRSportJanContents.kpi4 <= '0.8')?'orange':(youthPRSportJanContents.kpi4 > '0.8' && youthPRSportJanContents.kpi4 < '1')?'yellow-7':(youthPRSportJanContents.kpi4 >= '1' && youthPRSportJanContents.kpi4 < '1.2')?'green':(youthPRSportJanContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJanContents.kpi5 == null)?'grey-2':(youthPRSportJanContents.kpi5 >= '0' && youthPRSportJanContents.kpi5 <= '0.6')?'red':(youthPRSportJanContents.kpi5 > '0.6' && youthPRSportJanContents.kpi5 <= '0.8')?'orange':(youthPRSportJanContents.kpi5 > '0.8' && youthPRSportJanContents.kpi5 < '1')?'yellow-7':(youthPRSportJanContents.kpi5 >= '1' && youthPRSportJanContents.kpi5 < '1.2')?'green':(youthPRSportJanContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi5}}
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
                              :color="(youthPRSportFebContents.kpi1 == null)?'grey-2':(youthPRSportFebContents.kpi1 >= '0' && youthPRSportFebContents.kpi1 <= '2.4')?'red':(youthPRSportFebContents.kpi1 > '2.4' && youthPRSportFebContents.kpi1 <= '3.2')?'orange':(youthPRSportFebContents.kpi1 > '3.2' && youthPRSportFebContents.kpi1 < '4')?'yellow-7':(youthPRSportFebContents.kpi1 >= '4' && youthPRSportFebContents.kpi1 < '4.8')?'green':(youthPRSportFebContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportFebContents.kpi2 == null)?'grey-2':(youthPRSportFebContents.kpi2 >= '0' && youthPRSportFebContents.kpi2 <= '0.6')?'red':(youthPRSportFebContents.kpi2 > '0.6' && youthPRSportFebContents.kpi2 <= '0.8')?'orange':(youthPRSportFebContents.kpi2 > '0.8' && youthPRSportFebContents.kpi2 < '1')?'yellow-7':(youthPRSportFebContents.kpi2 >= '1' && youthPRSportFebContents.kpi2 < '1.2')?'green':(youthPRSportFebContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportFebContents.kpi3 == null)?'grey-2':(youthPRSportFebContents.kpi3 >= '0' && youthPRSportFebContents.kpi3 <= '0.6')?'red':(youthPRSportFebContents.kpi3 > '0.6' && youthPRSportFebContents.kpi3 <= '0.8')?'orange':(youthPRSportFebContents.kpi3 > '0.8' && youthPRSportFebContents.kpi3 < '1')?'yellow-7':(youthPRSportFebContents.kpi3 >= '1' && youthPRSportFebContents.kpi3 < '1.2')?'green':(youthPRSportFebContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportFebContents.kpi4 == null)?'grey-2':(youthPRSportFebContents.kpi4 >= '0' && youthPRSportFebContents.kpi4 <= '0.6')?'red':(youthPRSportFebContents.kpi4 > '0.6' && youthPRSportFebContents.kpi4 <= '0.8')?'orange':(youthPRSportFebContents.kpi4 > '0.8' && youthPRSportFebContents.kpi4 < '1')?'yellow-7':(youthPRSportFebContents.kpi4 >= '1' && youthPRSportFebContents.kpi4 < '1.2')?'green':(youthPRSportFebContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportFebContents.kpi5 == null)?'grey-2':(youthPRSportFebContents.kpi5 >= '0' && youthPRSportFebContents.kpi5 <= '0.6')?'red':(youthPRSportFebContents.kpi5 > '0.6' && youthPRSportFebContents.kpi5 <= '0.8')?'orange':(youthPRSportFebContents.kpi5 > '0.8' && youthPRSportFebContents.kpi5 < '1')?'yellow-7':(youthPRSportFebContents.kpi5 >= '1' && youthPRSportFebContents.kpi5 < '1.2')?'green':(youthPRSportFebContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi5}}
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
                              :color="(youthPRSportMarContents.kpi1 == null)?'grey-2':(youthPRSportMarContents.kpi1 >= '0' && youthPRSportMarContents.kpi1 <= '2.4')?'red':(youthPRSportMarContents.kpi1 > '2.4' && youthPRSportMarContents.kpi1 <= '3.2')?'orange':(youthPRSportMarContents.kpi1 > '3.2' && youthPRSportMarContents.kpi1 < '4')?'yellow-7':(youthPRSportMarContents.kpi1 >= '4' && youthPRSportMarContents.kpi1 < '4.8')?'green':(youthPRSportMarContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMarContents.kpi2 == null)?'grey-2':(youthPRSportMarContents.kpi2 >= '0' && youthPRSportMarContents.kpi2 <= '0.6')?'red':(youthPRSportMarContents.kpi2 > '0.6' && youthPRSportMarContents.kpi2 <= '0.8')?'orange':(youthPRSportMarContents.kpi2 > '0.8' && youthPRSportMarContents.kpi2 < '1')?'yellow-7':(youthPRSportMarContents.kpi2 >= '1' && youthPRSportMarContents.kpi2 < '1.2')?'green':(youthPRSportMarContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMarContents.kpi3 == null)?'grey-2':(youthPRSportMarContents.kpi3 >= '0' && youthPRSportMarContents.kpi3 <= '0.6')?'red':(youthPRSportMarContents.kpi3 > '0.6' && youthPRSportMarContents.kpi3 <= '0.8')?'orange':(youthPRSportMarContents.kpi3 > '0.8' && youthPRSportMarContents.kpi3 < '1')?'yellow-7':(youthPRSportMarContents.kpi3 >= '1' && youthPRSportMarContents.kpi3 < '1.2')?'green':(youthPRSportMarContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMarContents.kpi4 == null)?'grey-2':(youthPRSportMarContents.kpi4 >= '0' && youthPRSportMarContents.kpi4 <= '0.6')?'red':(youthPRSportMarContents.kpi4 > '0.6' && youthPRSportMarContents.kpi4 <= '0.8')?'orange':(youthPRSportMarContents.kpi4 > '0.8' && youthPRSportMarContents.kpi4 < '1')?'yellow-7':(youthPRSportMarContents.kpi4 >= '1' && youthPRSportMarContents.kpi4 < '1.2')?'green':(youthPRSportMarContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMarContents.kpi5 == null)?'grey-2':(youthPRSportMarContents.kpi5 >= '0' && youthPRSportMarContents.kpi5 <= '0.6')?'red':(youthPRSportMarContents.kpi5 > '0.6' && youthPRSportMarContents.kpi5 <= '0.8')?'orange':(youthPRSportMarContents.kpi5 > '0.8' && youthPRSportMarContents.kpi5 < '1')?'yellow-7':(youthPRSportMarContents.kpi5 >= '1' && youthPRSportMarContents.kpi5 < '1.2')?'green':(youthPRSportMarContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi5}}
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
                              :color="(youthPRSportAprContents.kpi1 == null)?'grey-2':(youthPRSportAprContents.kpi1 >= '0' && youthPRSportAprContents.kpi1 <= '2.4')?'red':(youthPRSportAprContents.kpi1 > '2.4' && youthPRSportAprContents.kpi1 <= '3.2')?'orange':(youthPRSportAprContents.kpi1 > '3.2' && youthPRSportAprContents.kpi1 < '4')?'yellow-7':(youthPRSportAprContents.kpi1 >= '4' && youthPRSportAprContents.kpi1 < '4.8')?'green':(youthPRSportAprContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAprContents.kpi2 == null)?'grey-2':(youthPRSportAprContents.kpi2 >= '0' && youthPRSportAprContents.kpi2 <= '0.6')?'red':(youthPRSportAprContents.kpi2 > '0.6' && youthPRSportAprContents.kpi2 <= '0.8')?'orange':(youthPRSportAprContents.kpi2 > '0.8' && youthPRSportAprContents.kpi2 < '1')?'yellow-7':(youthPRSportAprContents.kpi2 >= '1' && youthPRSportAprContents.kpi2 < '1.2')?'green':(youthPRSportAprContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAprContents.kpi3 == null)?'grey-2':(youthPRSportAprContents.kpi3 >= '0' && youthPRSportAprContents.kpi3 <= '0.6')?'red':(youthPRSportAprContents.kpi3 > '0.6' && youthPRSportAprContents.kpi3 <= '0.8')?'orange':(youthPRSportAprContents.kpi3 > '0.8' && youthPRSportAprContents.kpi3 < '1')?'yellow-7':(youthPRSportAprContents.kpi3 >= '1' && youthPRSportAprContents.kpi3 < '1.2')?'green':(youthPRSportAprContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAprContents.kpi4 == null)?'grey-2':(youthPRSportAprContents.kpi4 >= '0' && youthPRSportAprContents.kpi4 <= '0.6')?'red':(youthPRSportAprContents.kpi4 > '0.6' && youthPRSportAprContents.kpi4 <= '0.8')?'orange':(youthPRSportAprContents.kpi4 > '0.8' && youthPRSportAprContents.kpi4 < '1')?'yellow-7':(youthPRSportAprContents.kpi4 >= '1' && youthPRSportAprContents.kpi4 < '1.2')?'green':(youthPRSportAprContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAprContents.kpi5 == null)?'grey-2':(youthPRSportAprContents.kpi5 >= '0' && youthPRSportAprContents.kpi5 <= '0.6')?'red':(youthPRSportAprContents.kpi5 > '0.6' && youthPRSportAprContents.kpi5 <= '0.8')?'orange':(youthPRSportAprContents.kpi5 > '0.8' && youthPRSportAprContents.kpi5 < '1')?'yellow-7':(youthPRSportAprContents.kpi5 >= '1' && youthPRSportAprContents.kpi5 < '1.2')?'green':(youthPRSportAprContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi5}}
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
                              :color="(youthPRSportMayContents.kpi1 == null)?'grey-2':(youthPRSportMayContents.kpi1 >= '0' && youthPRSportMayContents.kpi1 <= '2.4')?'red':(youthPRSportMayContents.kpi1 > '2.4' && youthPRSportMayContents.kpi1 <= '3.2')?'orange':(youthPRSportMayContents.kpi1 > '3.2' && youthPRSportMayContents.kpi1 < '4')?'yellow-7':(youthPRSportMayContents.kpi1 >= '4' && youthPRSportMayContents.kpi1 < '4.8')?'green':(youthPRSportMayContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMayContents.kpi2 == null)?'grey-2':(youthPRSportMayContents.kpi2 >= '0' && youthPRSportMayContents.kpi2 <= '0.6')?'red':(youthPRSportMayContents.kpi2 > '0.6' && youthPRSportMayContents.kpi2 <= '0.8')?'orange':(youthPRSportMayContents.kpi2 > '0.8' && youthPRSportMayContents.kpi2 < '1')?'yellow-7':(youthPRSportMayContents.kpi2 >= '1' && youthPRSportMayContents.kpi2 < '1.2')?'green':(youthPRSportMayContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMayContents.kpi3 == null)?'grey-2':(youthPRSportMayContents.kpi3 >= '0' && youthPRSportMayContents.kpi3 <= '0.6')?'red':(youthPRSportMayContents.kpi3 > '0.6' && youthPRSportMayContents.kpi3 <= '0.8')?'orange':(youthPRSportMayContents.kpi3 > '0.8' && youthPRSportMayContents.kpi3 < '1')?'yellow-7':(youthPRSportMayContents.kpi3 >= '1' && youthPRSportMayContents.kpi3 < '1.2')?'green':(youthPRSportMayContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMayContents.kpi4 == null)?'grey-2':(youthPRSportMayContents.kpi4 >= '0' && youthPRSportMayContents.kpi4 <= '0.6')?'red':(youthPRSportMayContents.kpi4 > '0.6' && youthPRSportMayContents.kpi4 <= '0.8')?'orange':(youthPRSportMayContents.kpi4 > '0.8' && youthPRSportMayContents.kpi4 < '1')?'yellow-7':(youthPRSportMayContents.kpi4 >= '1' && youthPRSportMayContents.kpi4 < '1.2')?'green':(youthPRSportMayContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMayContents.kpi5 == null)?'grey-2':(youthPRSportMayContents.kpi5 >= '0' && youthPRSportMayContents.kpi5 <= '0.6')?'red':(youthPRSportMayContents.kpi5 > '0.6' && youthPRSportMayContents.kpi5 <= '0.8')?'orange':(youthPRSportMayContents.kpi5 > '0.8' && youthPRSportMayContents.kpi5 < '1')?'yellow-7':(youthPRSportMayContents.kpi5 >= '1' && youthPRSportMayContents.kpi5 < '1.2')?'green':(youthPRSportMayContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi5}}
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
                              :color="(youthPRSportJunContents.kpi1 == null)?'grey-2':(youthPRSportJunContents.kpi1 >= '0' && youthPRSportJunContents.kpi1 <= '2.4')?'red':(youthPRSportJunContents.kpi1 > '2.4' && youthPRSportJunContents.kpi1 <= '3.2')?'orange':(youthPRSportJunContents.kpi1 > '3.2' && youthPRSportJunContents.kpi1 < '4')?'yellow-7':(youthPRSportJunContents.kpi1 >= '4' && youthPRSportJunContents.kpi1 < '4.8')?'green':(youthPRSportJunContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJunContents.kpi2 == null)?'grey-2':(youthPRSportJunContents.kpi2 >= '0' && youthPRSportJunContents.kpi2 <= '0.6')?'red':(youthPRSportJunContents.kpi2 > '0.6' && youthPRSportJunContents.kpi2 <= '0.8')?'orange':(youthPRSportJunContents.kpi2 > '0.8' && youthPRSportJunContents.kpi2 < '1')?'yellow-7':(youthPRSportJunContents.kpi2 >= '1' && youthPRSportJunContents.kpi2 < '1.2')?'green':(youthPRSportJunContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJunContents.kpi3 == null)?'grey-2':(youthPRSportJunContents.kpi3 >= '0' && youthPRSportJunContents.kpi3 <= '0.6')?'red':(youthPRSportJunContents.kpi3 > '0.6' && youthPRSportJunContents.kpi3 <= '0.8')?'orange':(youthPRSportJunContents.kpi3 > '0.8' && youthPRSportJunContents.kpi3 < '1')?'yellow-7':(youthPRSportJunContents.kpi3 >= '1' && youthPRSportJunContents.kpi3 < '1.2')?'green':(youthPRSportJunContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJunContents.kpi4 == null)?'grey-2':(youthPRSportJunContents.kpi4 >= '0' && youthPRSportJunContents.kpi4 <= '0.6')?'red':(youthPRSportJunContents.kpi4 > '0.6' && youthPRSportJunContents.kpi4 <= '0.8')?'orange':(youthPRSportJunContents.kpi4 > '0.8' && youthPRSportJunContents.kpi4 < '1')?'yellow-7':(youthPRSportJunContents.kpi4 >= '1' && youthPRSportJunContents.kpi4 < '1.2')?'green':(youthPRSportJunContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJunContents.kpi5 == null)?'grey-2':(youthPRSportJunContents.kpi5 >= '0' && youthPRSportJunContents.kpi5 <= '0.6')?'red':(youthPRSportJunContents.kpi5 > '0.6' && youthPRSportJunContents.kpi5 <= '0.8')?'orange':(youthPRSportJunContents.kpi5 > '0.8' && youthPRSportJunContents.kpi5 < '1')?'yellow-7':(youthPRSportJunContents.kpi5 >= '1' && youthPRSportJunContents.kpi5 < '1.2')?'green':(youthPRSportJunContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi5}}
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
                              :color="(youthPRSportJulContents.kpi1 == null)?'grey-2':(youthPRSportJulContents.kpi1 >= '0' && youthPRSportJulContents.kpi1 <= '2.4')?'red':(youthPRSportJulContents.kpi1 > '2.4' && youthPRSportJulContents.kpi1 <= '3.2')?'orange':(youthPRSportJulContents.kpi1 > '3.2' && youthPRSportJulContents.kpi1 < '4')?'yellow-7':(youthPRSportJulContents.kpi1 >= '4' && youthPRSportJulContents.kpi1 < '4.8')?'green':(youthPRSportJulContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJulContents.kpi2 == null)?'grey-2':(youthPRSportJulContents.kpi2 >= '0' && youthPRSportJulContents.kpi2 <= '0.6')?'red':(youthPRSportJulContents.kpi2 > '0.6' && youthPRSportJulContents.kpi2 <= '0.8')?'orange':(youthPRSportJulContents.kpi2 > '0.8' && youthPRSportJulContents.kpi2 < '1')?'yellow-7':(youthPRSportJulContents.kpi2 >= '1' && youthPRSportJulContents.kpi2 < '1.2')?'green':(youthPRSportJulContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJulContents.kpi3 == null)?'grey-2':(youthPRSportJulContents.kpi3 >= '0' && youthPRSportJulContents.kpi3 <= '0.6')?'red':(youthPRSportJulContents.kpi3 > '0.6' && youthPRSportJulContents.kpi3 <= '0.8')?'orange':(youthPRSportJulContents.kpi3 > '0.8' && youthPRSportJulContents.kpi3 < '1')?'yellow-7':(youthPRSportJulContents.kpi3 >= '1' && youthPRSportJulContents.kpi3 < '1.2')?'green':(youthPRSportJulContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJulContents.kpi4 == null)?'grey-2':(youthPRSportJulContents.kpi4 >= '0' && youthPRSportJulContents.kpi4 <= '0.6')?'red':(youthPRSportJulContents.kpi4 > '0.6' && youthPRSportJulContents.kpi4 <= '0.8')?'orange':(youthPRSportJulContents.kpi4 > '0.8' && youthPRSportJulContents.kpi4 < '1')?'yellow-7':(youthPRSportJulContents.kpi4 >= '1' && youthPRSportJulContents.kpi4 < '1.2')?'green':(youthPRSportJulContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJulContents.kpi5 == null)?'grey-2':(youthPRSportJulContents.kpi5 >= '0' && youthPRSportJulContents.kpi5 <= '0.6')?'red':(youthPRSportJulContents.kpi5 > '0.6' && youthPRSportJulContents.kpi5 <= '0.8')?'orange':(youthPRSportJulContents.kpi5 > '0.8' && youthPRSportJulContents.kpi5 < '1')?'yellow-7':(youthPRSportJulContents.kpi5 >= '1' && youthPRSportJulContents.kpi5 < '1.2')?'green':(youthPRSportJulContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi5}}
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
                              :color="(youthPRSportAugContents.kpi1 == null)?'grey-2':(youthPRSportAugContents.kpi1 >= '0' && youthPRSportAugContents.kpi1 <= '2.4')?'red':(youthPRSportAugContents.kpi1 > '2.4' && youthPRSportAugContents.kpi1 <= '3.2')?'orange':(youthPRSportAugContents.kpi1 > '3.2' && youthPRSportAugContents.kpi1 < '4')?'yellow-7':(youthPRSportAugContents.kpi1 >= '4' && youthPRSportAugContents.kpi1 < '4.8')?'green':(youthPRSportAugContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAugContents.kpi2 == null)?'grey-2':(youthPRSportAugContents.kpi2 >= '0' && youthPRSportAugContents.kpi2 <= '0.6')?'red':(youthPRSportAugContents.kpi2 > '0.6' && youthPRSportAugContents.kpi2 <= '0.8')?'orange':(youthPRSportAugContents.kpi2 > '0.8' && youthPRSportAugContents.kpi2 < '1')?'yellow-7':(youthPRSportAugContents.kpi2 >= '1' && youthPRSportAugContents.kpi2 < '1.2')?'green':(youthPRSportAugContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAugContents.kpi3 == null)?'grey-2':(youthPRSportAugContents.kpi3 >= '0' && youthPRSportAugContents.kpi3 <= '0.6')?'red':(youthPRSportAugContents.kpi3 > '0.6' && youthPRSportAugContents.kpi3 <= '0.8')?'orange':(youthPRSportAugContents.kpi3 > '0.8' && youthPRSportAugContents.kpi3 < '1')?'yellow-7':(youthPRSportAugContents.kpi3 >= '1' && youthPRSportAugContents.kpi3 < '1.2')?'green':(youthPRSportAugContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAugContents.kpi4 == null)?'grey-2':(youthPRSportAugContents.kpi4 >= '0' && youthPRSportAugContents.kpi4 <= '0.6')?'red':(youthPRSportAugContents.kpi4 > '0.6' && youthPRSportAugContents.kpi4 <= '0.8')?'orange':(youthPRSportAugContents.kpi4 > '0.8' && youthPRSportAugContents.kpi4 < '1')?'yellow-7':(youthPRSportAugContents.kpi4 >= '1' && youthPRSportAugContents.kpi4 < '1.2')?'green':(youthPRSportAugContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAugContents.kpi5 == null)?'grey-2':(youthPRSportAugContents.kpi5 >= '0' && youthPRSportAugContents.kpi5 <= '0.6')?'red':(youthPRSportAugContents.kpi5 > '0.6' && youthPRSportAugContents.kpi5 <= '0.8')?'orange':(youthPRSportAugContents.kpi5 > '0.8' && youthPRSportAugContents.kpi5 < '1')?'yellow-7':(youthPRSportAugContents.kpi5 >= '1' && youthPRSportAugContents.kpi5 < '1.2')?'green':(youthPRSportAugContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi5}}
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
                              :color="(youthPRSportSepContents.kpi1 == null)?'grey-2':(youthPRSportSepContents.kpi1 >= '0' && youthPRSportSepContents.kpi1 <= '2.4')?'red':(youthPRSportSepContents.kpi1 > '2.4' && youthPRSportSepContents.kpi1 <= '3.2')?'orange':(youthPRSportSepContents.kpi1 > '3.2' && youthPRSportSepContents.kpi1 < '4')?'yellow-7':(youthPRSportSepContents.kpi1 >= '4' && youthPRSportSepContents.kpi1 < '4.8')?'green':(youthPRSportSepContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportSepContents.kpi2 == null)?'grey-2':(youthPRSportSepContents.kpi2 >= '0' && youthPRSportSepContents.kpi2 <= '0.6')?'red':(youthPRSportSepContents.kpi2 > '0.6' && youthPRSportSepContents.kpi2 <= '0.8')?'orange':(youthPRSportSepContents.kpi2 > '0.8' && youthPRSportSepContents.kpi2 < '1')?'yellow-7':(youthPRSportSepContents.kpi2 >= '1' && youthPRSportSepContents.kpi2 < '1.2')?'green':(youthPRSportSepContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportSepContents.kpi3 == null)?'grey-2':(youthPRSportSepContents.kpi3 >= '0' && youthPRSportSepContents.kpi3 <= '0.6')?'red':(youthPRSportSepContents.kpi3 > '0.6' && youthPRSportSepContents.kpi3 <= '0.8')?'orange':(youthPRSportSepContents.kpi3 > '0.8' && youthPRSportSepContents.kpi3 < '1')?'yellow-7':(youthPRSportSepContents.kpi3 >= '1' && youthPRSportSepContents.kpi3 < '1.2')?'green':(youthPRSportSepContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportSepContents.kpi4 == null)?'grey-2':(youthPRSportSepContents.kpi4 >= '0' && youthPRSportSepContents.kpi4 <= '0.6')?'red':(youthPRSportSepContents.kpi4 > '0.6' && youthPRSportSepContents.kpi4 <= '0.8')?'orange':(youthPRSportSepContents.kpi4 > '0.8' && youthPRSportSepContents.kpi4 < '1')?'yellow-7':(youthPRSportSepContents.kpi4 >= '1' && youthPRSportSepContents.kpi4 < '1.2')?'green':(youthPRSportSepContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportSepContents.kpi5 == null)?'grey-2':(youthPRSportSepContents.kpi5 >= '0' && youthPRSportSepContents.kpi5 <= '0.6')?'red':(youthPRSportSepContents.kpi5 > '0.6' && youthPRSportSepContents.kpi5 <= '0.8')?'orange':(youthPRSportSepContents.kpi5 > '0.8' && youthPRSportSepContents.kpi5 < '1')?'yellow-7':(youthPRSportSepContents.kpi5 >= '1' && youthPRSportSepContents.kpi5 < '1.2')?'green':(youthPRSportSepContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi5}}
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
                              :color="(youthPRSportOctContents.kpi1 == null)?'grey-2':(youthPRSportOctContents.kpi1 >= '0' && youthPRSportOctContents.kpi1 <= '2.4')?'red':(youthPRSportOctContents.kpi1 > '2.4' && youthPRSportOctContents.kpi1 <= '3.2')?'orange':(youthPRSportOctContents.kpi1 > '3.2' && youthPRSportOctContents.kpi1 < '4')?'yellow-7':(youthPRSportOctContents.kpi1 >= '4' && youthPRSportOctContents.kpi1 < '4.8')?'green':(youthPRSportOctContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportOctContents.kpi2 == null)?'grey-2':(youthPRSportOctContents.kpi2 >= '0' && youthPRSportOctContents.kpi2 <= '0.6')?'red':(youthPRSportOctContents.kpi2 > '0.6' && youthPRSportOctContents.kpi2 <= '0.8')?'orange':(youthPRSportOctContents.kpi2 > '0.8' && youthPRSportOctContents.kpi2 < '1')?'yellow-7':(youthPRSportOctContents.kpi2 >= '1' && youthPRSportOctContents.kpi2 < '1.2')?'green':(youthPRSportOctContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportOctContents.kpi3 == null)?'grey-2':(youthPRSportOctContents.kpi3 >= '0' && youthPRSportOctContents.kpi3 <= '0.6')?'red':(youthPRSportOctContents.kpi3 > '0.6' && youthPRSportOctContents.kpi3 <= '0.8')?'orange':(youthPRSportOctContents.kpi3 > '0.8' && youthPRSportOctContents.kpi3 < '1')?'yellow-7':(youthPRSportOctContents.kpi3 >= '1' && youthPRSportOctContents.kpi3 < '1.2')?'green':(youthPRSportOctContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportOctContents.kpi4 == null)?'grey-2':(youthPRSportOctContents.kpi4 >= '0' && youthPRSportOctContents.kpi4 <= '0.6')?'red':(youthPRSportOctContents.kpi4 > '0.6' && youthPRSportOctContents.kpi4 <= '0.8')?'orange':(youthPRSportOctContents.kpi4 > '0.8' && youthPRSportOctContents.kpi4 < '1')?'yellow-7':(youthPRSportOctContents.kpi4 >= '1' && youthPRSportOctContents.kpi4 < '1.2')?'green':(youthPRSportOctContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportOctContents.kpi5 == null)?'grey-2':(youthPRSportOctContents.kpi5 >= '0' && youthPRSportOctContents.kpi5 <= '0.6')?'red':(youthPRSportOctContents.kpi5 > '0.6' && youthPRSportOctContents.kpi5 <= '0.8')?'orange':(youthPRSportOctContents.kpi5 > '0.8' && youthPRSportOctContents.kpi5 < '1')?'yellow-7':(youthPRSportOctContents.kpi5 >= '1' && youthPRSportOctContents.kpi5 < '1.2')?'green':(youthPRSportOctContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi5}}
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
                              :color="(youthPRSportNovContents.kpi1 == null)?'grey-2':(youthPRSportNovContents.kpi1 >= '0' && youthPRSportNovContents.kpi1 <= '2.4')?'red':(youthPRSportNovContents.kpi1 > '2.4' && youthPRSportNovContents.kpi1 <= '3.2')?'orange':(youthPRSportNovContents.kpi1 > '3.2' && youthPRSportNovContents.kpi1 < '4')?'yellow-7':(youthPRSportNovContents.kpi1 >= '4' && youthPRSportNovContents.kpi1 < '4.8')?'green':(youthPRSportNovContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportNovContents.kpi2 == null)?'grey-2':(youthPRSportNovContents.kpi2 >= '0' && youthPRSportNovContents.kpi2 <= '0.6')?'red':(youthPRSportNovContents.kpi2 > '0.6' && youthPRSportNovContents.kpi2 <= '0.8')?'orange':(youthPRSportNovContents.kpi2 > '0.8' && youthPRSportNovContents.kpi2 < '1')?'yellow-7':(youthPRSportNovContents.kpi2 >= '1' && youthPRSportNovContents.kpi2 < '1.2')?'green':(youthPRSportNovContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportNovContents.kpi3 == null)?'grey-2':(youthPRSportNovContents.kpi3 >= '0' && youthPRSportNovContents.kpi3 <= '0.6')?'red':(youthPRSportNovContents.kpi3 > '0.6' && youthPRSportNovContents.kpi3 <= '0.8')?'orange':(youthPRSportNovContents.kpi3 > '0.8' && youthPRSportNovContents.kpi3 < '1')?'yellow-7':(youthPRSportNovContents.kpi3 >= '1' && youthPRSportNovContents.kpi3 < '1.2')?'green':(youthPRSportNovContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportNovContents.kpi4 == null)?'grey-2':(youthPRSportNovContents.kpi4 >= '0' && youthPRSportNovContents.kpi4 <= '0.6')?'red':(youthPRSportNovContents.kpi4 > '0.6' && youthPRSportNovContents.kpi4 <= '0.8')?'orange':(youthPRSportNovContents.kpi4 > '0.8' && youthPRSportNovContents.kpi4 < '1')?'yellow-7':(youthPRSportNovContents.kpi4 >= '1' && youthPRSportNovContents.kpi4 < '1.2')?'green':(youthPRSportNovContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportNovContents.kpi5 == null)?'grey-2':(youthPRSportNovContents.kpi5 >= '0' && youthPRSportNovContents.kpi5 <= '0.6')?'red':(youthPRSportNovContents.kpi5 > '0.6' && youthPRSportNovContents.kpi5 <= '0.8')?'orange':(youthPRSportNovContents.kpi5 > '0.8' && youthPRSportNovContents.kpi5 < '1')?'yellow-7':(youthPRSportNovContents.kpi5 >= '1' && youthPRSportNovContents.kpi5 < '1.2')?'green':(youthPRSportNovContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi5}}
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
                              :color="(youthPRSportDecContents.kpi1 == null)?'grey-2':(youthPRSportDecContents.kpi1 >= '0' && youthPRSportDecContents.kpi1 <= '2.4')?'red':(youthPRSportDecContents.kpi1 > '2.4' && youthPRSportDecContents.kpi1 <= '3.2')?'orange':(youthPRSportDecContents.kpi1 > '3.2' && youthPRSportDecContents.kpi1 < '4')?'yellow-7':(youthPRSportDecContents.kpi1 >= '4' && youthPRSportDecContents.kpi1 < '4.8')?'green':(youthPRSportDecContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportDecContents.kpi2 == null)?'grey-2':(youthPRSportDecContents.kpi2 >= '0' && youthPRSportDecContents.kpi2 <= '0.6')?'red':(youthPRSportDecContents.kpi2 > '0.6' && youthPRSportDecContents.kpi2 <= '0.8')?'orange':(youthPRSportDecContents.kpi2 > '0.8' && youthPRSportDecContents.kpi2 < '1')?'yellow-7':(youthPRSportDecContents.kpi2 >= '1' && youthPRSportDecContents.kpi2 < '1.2')?'green':(youthPRSportDecContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportDecContents.kpi3 == null)?'grey-2':(youthPRSportDecContents.kpi3 >= '0' && youthPRSportDecContents.kpi3 <= '0.6')?'red':(youthPRSportDecContents.kpi3 > '0.6' && youthPRSportDecContents.kpi3 <= '0.8')?'orange':(youthPRSportDecContents.kpi3 > '0.8' && youthPRSportDecContents.kpi3 < '1')?'yellow-7':(youthPRSportDecContents.kpi3 >= '1' && youthPRSportDecContents.kpi3 < '1.2')?'green':(youthPRSportDecContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportDecContents.kpi4 == null)?'grey-2':(youthPRSportDecContents.kpi4 >= '0' && youthPRSportDecContents.kpi4 <= '0.6')?'red':(youthPRSportDecContents.kpi4 > '0.6' && youthPRSportDecContents.kpi4 <= '0.8')?'orange':(youthPRSportDecContents.kpi4 > '0.8' && youthPRSportDecContents.kpi4 < '1')?'yellow-7':(youthPRSportDecContents.kpi4 >= '1' && youthPRSportDecContents.kpi4 < '1.2')?'green':(youthPRSportDecContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportDecContents.kpi5 == null)?'grey-2':(youthPRSportDecContents.kpi5 >= '0' && youthPRSportDecContents.kpi5 <= '0.6')?'red':(youthPRSportDecContents.kpi5 > '0.6' && youthPRSportDecContents.kpi5 <= '0.8')?'orange':(youthPRSportDecContents.kpi5 > '0.8' && youthPRSportDecContents.kpi5 < '1')?'yellow-7':(youthPRSportDecContents.kpi5 >= '1' && youthPRSportDecContents.kpi5 < '1.2')?'green':(youthPRSportDecContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi5}}
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
                                <q-tooltip># of unique children</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of total children</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of unique youth</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip># of total youth</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 5
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
                              :color="(youthPRSportJanContents.kpi1 == null)?'grey-2':(youthPRSportJanContents.kpi1 >= '0' && youthPRSportJanContents.kpi1 <= '2.4')?'red':(youthPRSportJanContents.kpi1 > '2.4' && youthPRSportJanContents.kpi1 <= '3.2')?'orange':(youthPRSportJanContents.kpi1 > '3.2' && youthPRSportJanContents.kpi1 < '4')?'yellow-7':(youthPRSportJanContents.kpi1 >= '4' && youthPRSportJanContents.kpi1 < '4.8')?'green':(youthPRSportJanContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJanContents.kpi2 == null)?'grey-2':(youthPRSportJanContents.kpi2 >= '0' && youthPRSportJanContents.kpi2 <= '0.6')?'red':(youthPRSportJanContents.kpi2 > '0.6' && youthPRSportJanContents.kpi2 <= '0.8')?'orange':(youthPRSportJanContents.kpi2 > '0.8' && youthPRSportJanContents.kpi2 < '1')?'yellow-7':(youthPRSportJanContents.kpi2 >= '1' && youthPRSportJanContents.kpi2 < '1.2')?'green':(youthPRSportJanContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJanContents.kpi3 == null)?'grey-2':(youthPRSportJanContents.kpi3 >= '0' && youthPRSportJanContents.kpi3 <= '0.6')?'red':(youthPRSportJanContents.kpi3 > '0.6' && youthPRSportJanContents.kpi3 <= '0.8')?'orange':(youthPRSportJanContents.kpi3 > '0.8' && youthPRSportJanContents.kpi3 < '1')?'yellow-7':(youthPRSportJanContents.kpi3 >= '1' && youthPRSportJanContents.kpi3 < '1.2')?'green':(youthPRSportJanContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJanContents.kpi4 == null)?'grey-2':(youthPRSportJanContents.kpi4 >= '0' && youthPRSportJanContents.kpi4 <= '0.6')?'red':(youthPRSportJanContents.kpi4 > '0.6' && youthPRSportJanContents.kpi4 <= '0.8')?'orange':(youthPRSportJanContents.kpi4 > '0.8' && youthPRSportJanContents.kpi4 < '1')?'yellow-7':(youthPRSportJanContents.kpi4 >= '1' && youthPRSportJanContents.kpi4 < '1.2')?'green':(youthPRSportJanContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJanContents.kpi5 == null)?'grey-2':(youthPRSportJanContents.kpi5 >= '0' && youthPRSportJanContents.kpi5 <= '0.6')?'red':(youthPRSportJanContents.kpi5 > '0.6' && youthPRSportJanContents.kpi5 <= '0.8')?'orange':(youthPRSportJanContents.kpi5 > '0.8' && youthPRSportJanContents.kpi5 < '1')?'yellow-7':(youthPRSportJanContents.kpi5 >= '1' && youthPRSportJanContents.kpi5 < '1.2')?'green':(youthPRSportJanContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi5}}
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
                              :color="(youthPRSportFebContents.kpi1 == null)?'grey-2':(youthPRSportFebContents.kpi1 >= '0' && youthPRSportFebContents.kpi1 <= '2.4')?'red':(youthPRSportFebContents.kpi1 > '2.4' && youthPRSportFebContents.kpi1 <= '3.2')?'orange':(youthPRSportFebContents.kpi1 > '3.2' && youthPRSportFebContents.kpi1 < '4')?'yellow-7':(youthPRSportFebContents.kpi1 >= '4' && youthPRSportFebContents.kpi1 < '4.8')?'green':(youthPRSportFebContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportFebContents.kpi2 == null)?'grey-2':(youthPRSportFebContents.kpi2 >= '0' && youthPRSportFebContents.kpi2 <= '0.6')?'red':(youthPRSportFebContents.kpi2 > '0.6' && youthPRSportFebContents.kpi2 <= '0.8')?'orange':(youthPRSportFebContents.kpi2 > '0.8' && youthPRSportFebContents.kpi2 < '1')?'yellow-7':(youthPRSportFebContents.kpi2 >= '1' && youthPRSportFebContents.kpi2 < '1.2')?'green':(youthPRSportFebContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportFebContents.kpi3 == null)?'grey-2':(youthPRSportFebContents.kpi3 >= '0' && youthPRSportFebContents.kpi3 <= '0.6')?'red':(youthPRSportFebContents.kpi3 > '0.6' && youthPRSportFebContents.kpi3 <= '0.8')?'orange':(youthPRSportFebContents.kpi3 > '0.8' && youthPRSportFebContents.kpi3 < '1')?'yellow-7':(youthPRSportFebContents.kpi3 >= '1' && youthPRSportFebContents.kpi3 < '1.2')?'green':(youthPRSportFebContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportFebContents.kpi4 == null)?'grey-2':(youthPRSportFebContents.kpi4 >= '0' && youthPRSportFebContents.kpi4 <= '0.6')?'red':(youthPRSportFebContents.kpi4 > '0.6' && youthPRSportFebContents.kpi4 <= '0.8')?'orange':(youthPRSportFebContents.kpi4 > '0.8' && youthPRSportFebContents.kpi4 < '1')?'yellow-7':(youthPRSportFebContents.kpi4 >= '1' && youthPRSportFebContents.kpi4 < '1.2')?'green':(youthPRSportFebContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportFebContents.kpi5 == null)?'grey-2':(youthPRSportFebContents.kpi5 >= '0' && youthPRSportFebContents.kpi5 <= '0.6')?'red':(youthPRSportFebContents.kpi5 > '0.6' && youthPRSportFebContents.kpi5 <= '0.8')?'orange':(youthPRSportFebContents.kpi5 > '0.8' && youthPRSportFebContents.kpi5 < '1')?'yellow-7':(youthPRSportFebContents.kpi5 >= '1' && youthPRSportFebContents.kpi5 < '1.2')?'green':(youthPRSportFebContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi5}}
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
                              :color="(youthPRSportMarContents.kpi1 == null)?'grey-2':(youthPRSportMarContents.kpi1 >= '0' && youthPRSportMarContents.kpi1 <= '2.4')?'red':(youthPRSportMarContents.kpi1 > '2.4' && youthPRSportMarContents.kpi1 <= '3.2')?'orange':(youthPRSportMarContents.kpi1 > '3.2' && youthPRSportMarContents.kpi1 < '4')?'yellow-7':(youthPRSportMarContents.kpi1 >= '4' && youthPRSportMarContents.kpi1 < '4.8')?'green':(youthPRSportMarContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMarContents.kpi2 == null)?'grey-2':(youthPRSportMarContents.kpi2 >= '0' && youthPRSportMarContents.kpi2 <= '0.6')?'red':(youthPRSportMarContents.kpi2 > '0.6' && youthPRSportMarContents.kpi2 <= '0.8')?'orange':(youthPRSportMarContents.kpi2 > '0.8' && youthPRSportMarContents.kpi2 < '1')?'yellow-7':(youthPRSportMarContents.kpi2 >= '1' && youthPRSportMarContents.kpi2 < '1.2')?'green':(youthPRSportMarContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMarContents.kpi3 == null)?'grey-2':(youthPRSportMarContents.kpi3 >= '0' && youthPRSportMarContents.kpi3 <= '0.6')?'red':(youthPRSportMarContents.kpi3 > '0.6' && youthPRSportMarContents.kpi3 <= '0.8')?'orange':(youthPRSportMarContents.kpi3 > '0.8' && youthPRSportMarContents.kpi3 < '1')?'yellow-7':(youthPRSportMarContents.kpi3 >= '1' && youthPRSportMarContents.kpi3 < '1.2')?'green':(youthPRSportMarContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMarContents.kpi4 == null)?'grey-2':(youthPRSportMarContents.kpi4 >= '0' && youthPRSportMarContents.kpi4 <= '0.6')?'red':(youthPRSportMarContents.kpi4 > '0.6' && youthPRSportMarContents.kpi4 <= '0.8')?'orange':(youthPRSportMarContents.kpi4 > '0.8' && youthPRSportMarContents.kpi4 < '1')?'yellow-7':(youthPRSportMarContents.kpi4 >= '1' && youthPRSportMarContents.kpi4 < '1.2')?'green':(youthPRSportMarContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMarContents.kpi5 == null)?'grey-2':(youthPRSportMarContents.kpi5 >= '0' && youthPRSportMarContents.kpi5 <= '0.6')?'red':(youthPRSportMarContents.kpi5 > '0.6' && youthPRSportMarContents.kpi5 <= '0.8')?'orange':(youthPRSportMarContents.kpi5 > '0.8' && youthPRSportMarContents.kpi5 < '1')?'yellow-7':(youthPRSportMarContents.kpi5 >= '1' && youthPRSportMarContents.kpi5 < '1.2')?'green':(youthPRSportMarContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi5}}
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
                              :color="(youthPRSportAprContents.kpi1 == null)?'grey-2':(youthPRSportAprContents.kpi1 >= '0' && youthPRSportAprContents.kpi1 <= '2.4')?'red':(youthPRSportAprContents.kpi1 > '2.4' && youthPRSportAprContents.kpi1 <= '3.2')?'orange':(youthPRSportAprContents.kpi1 > '3.2' && youthPRSportAprContents.kpi1 < '4')?'yellow-7':(youthPRSportAprContents.kpi1 >= '4' && youthPRSportAprContents.kpi1 < '4.8')?'green':(youthPRSportAprContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAprContents.kpi2 == null)?'grey-2':(youthPRSportAprContents.kpi2 >= '0' && youthPRSportAprContents.kpi2 <= '0.6')?'red':(youthPRSportAprContents.kpi2 > '0.6' && youthPRSportAprContents.kpi2 <= '0.8')?'orange':(youthPRSportAprContents.kpi2 > '0.8' && youthPRSportAprContents.kpi2 < '1')?'yellow-7':(youthPRSportAprContents.kpi2 >= '1' && youthPRSportAprContents.kpi2 < '1.2')?'green':(youthPRSportAprContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAprContents.kpi3 == null)?'grey-2':(youthPRSportAprContents.kpi3 >= '0' && youthPRSportAprContents.kpi3 <= '0.6')?'red':(youthPRSportAprContents.kpi3 > '0.6' && youthPRSportAprContents.kpi3 <= '0.8')?'orange':(youthPRSportAprContents.kpi3 > '0.8' && youthPRSportAprContents.kpi3 < '1')?'yellow-7':(youthPRSportAprContents.kpi3 >= '1' && youthPRSportAprContents.kpi3 < '1.2')?'green':(youthPRSportAprContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAprContents.kpi4 == null)?'grey-2':(youthPRSportAprContents.kpi4 >= '0' && youthPRSportAprContents.kpi4 <= '0.6')?'red':(youthPRSportAprContents.kpi4 > '0.6' && youthPRSportAprContents.kpi4 <= '0.8')?'orange':(youthPRSportAprContents.kpi4 > '0.8' && youthPRSportAprContents.kpi4 < '1')?'yellow-7':(youthPRSportAprContents.kpi4 >= '1' && youthPRSportAprContents.kpi4 < '1.2')?'green':(youthPRSportAprContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAprContents.kpi5 == null)?'grey-2':(youthPRSportAprContents.kpi5 >= '0' && youthPRSportAprContents.kpi5 <= '0.6')?'red':(youthPRSportAprContents.kpi5 > '0.6' && youthPRSportAprContents.kpi5 <= '0.8')?'orange':(youthPRSportAprContents.kpi5 > '0.8' && youthPRSportAprContents.kpi5 < '1')?'yellow-7':(youthPRSportAprContents.kpi5 >= '1' && youthPRSportAprContents.kpi5 < '1.2')?'green':(youthPRSportAprContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi5}}
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
                              :color="(youthPRSportMayContents.kpi1 == null)?'grey-2':(youthPRSportMayContents.kpi1 >= '0' && youthPRSportMayContents.kpi1 <= '2.4')?'red':(youthPRSportMayContents.kpi1 > '2.4' && youthPRSportMayContents.kpi1 <= '3.2')?'orange':(youthPRSportMayContents.kpi1 > '3.2' && youthPRSportMayContents.kpi1 < '4')?'yellow-7':(youthPRSportMayContents.kpi1 >= '4' && youthPRSportMayContents.kpi1 < '4.8')?'green':(youthPRSportMayContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMayContents.kpi2 == null)?'grey-2':(youthPRSportMayContents.kpi2 >= '0' && youthPRSportMayContents.kpi2 <= '0.6')?'red':(youthPRSportMayContents.kpi2 > '0.6' && youthPRSportMayContents.kpi2 <= '0.8')?'orange':(youthPRSportMayContents.kpi2 > '0.8' && youthPRSportMayContents.kpi2 < '1')?'yellow-7':(youthPRSportMayContents.kpi2 >= '1' && youthPRSportMayContents.kpi2 < '1.2')?'green':(youthPRSportMayContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMayContents.kpi3 == null)?'grey-2':(youthPRSportMayContents.kpi3 >= '0' && youthPRSportMayContents.kpi3 <= '0.6')?'red':(youthPRSportMayContents.kpi3 > '0.6' && youthPRSportMayContents.kpi3 <= '0.8')?'orange':(youthPRSportMayContents.kpi3 > '0.8' && youthPRSportMayContents.kpi3 < '1')?'yellow-7':(youthPRSportMayContents.kpi3 >= '1' && youthPRSportMayContents.kpi3 < '1.2')?'green':(youthPRSportMayContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMayContents.kpi4 == null)?'grey-2':(youthPRSportMayContents.kpi4 >= '0' && youthPRSportMayContents.kpi4 <= '0.6')?'red':(youthPRSportMayContents.kpi4 > '0.6' && youthPRSportMayContents.kpi4 <= '0.8')?'orange':(youthPRSportMayContents.kpi4 > '0.8' && youthPRSportMayContents.kpi4 < '1')?'yellow-7':(youthPRSportMayContents.kpi4 >= '1' && youthPRSportMayContents.kpi4 < '1.2')?'green':(youthPRSportMayContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMayContents.kpi5 == null)?'grey-2':(youthPRSportMayContents.kpi5 >= '0' && youthPRSportMayContents.kpi5 <= '0.6')?'red':(youthPRSportMayContents.kpi5 > '0.6' && youthPRSportMayContents.kpi5 <= '0.8')?'orange':(youthPRSportMayContents.kpi5 > '0.8' && youthPRSportMayContents.kpi5 < '1')?'yellow-7':(youthPRSportMayContents.kpi5 >= '1' && youthPRSportMayContents.kpi5 < '1.2')?'green':(youthPRSportMayContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi5}}
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
                              :color="(youthPRSportJunContents.kpi1 == null)?'grey-2':(youthPRSportJunContents.kpi1 >= '0' && youthPRSportJunContents.kpi1 <= '2.4')?'red':(youthPRSportJunContents.kpi1 > '2.4' && youthPRSportJunContents.kpi1 <= '3.2')?'orange':(youthPRSportJunContents.kpi1 > '3.2' && youthPRSportJunContents.kpi1 < '4')?'yellow-7':(youthPRSportJunContents.kpi1 >= '4' && youthPRSportJunContents.kpi1 < '4.8')?'green':(youthPRSportJunContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJunContents.kpi2 == null)?'grey-2':(youthPRSportJunContents.kpi2 >= '0' && youthPRSportJunContents.kpi2 <= '0.6')?'red':(youthPRSportJunContents.kpi2 > '0.6' && youthPRSportJunContents.kpi2 <= '0.8')?'orange':(youthPRSportJunContents.kpi2 > '0.8' && youthPRSportJunContents.kpi2 < '1')?'yellow-7':(youthPRSportJunContents.kpi2 >= '1' && youthPRSportJunContents.kpi2 < '1.2')?'green':(youthPRSportJunContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJunContents.kpi3 == null)?'grey-2':(youthPRSportJunContents.kpi3 >= '0' && youthPRSportJunContents.kpi3 <= '0.6')?'red':(youthPRSportJunContents.kpi3 > '0.6' && youthPRSportJunContents.kpi3 <= '0.8')?'orange':(youthPRSportJunContents.kpi3 > '0.8' && youthPRSportJunContents.kpi3 < '1')?'yellow-7':(youthPRSportJunContents.kpi3 >= '1' && youthPRSportJunContents.kpi3 < '1.2')?'green':(youthPRSportJunContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJunContents.kpi4 == null)?'grey-2':(youthPRSportJunContents.kpi4 >= '0' && youthPRSportJunContents.kpi4 <= '0.6')?'red':(youthPRSportJunContents.kpi4 > '0.6' && youthPRSportJunContents.kpi4 <= '0.8')?'orange':(youthPRSportJunContents.kpi4 > '0.8' && youthPRSportJunContents.kpi4 < '1')?'yellow-7':(youthPRSportJunContents.kpi4 >= '1' && youthPRSportJunContents.kpi4 < '1.2')?'green':(youthPRSportJunContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJunContents.kpi5 == null)?'grey-2':(youthPRSportJunContents.kpi5 >= '0' && youthPRSportJunContents.kpi5 <= '0.6')?'red':(youthPRSportJunContents.kpi5 > '0.6' && youthPRSportJunContents.kpi5 <= '0.8')?'orange':(youthPRSportJunContents.kpi5 > '0.8' && youthPRSportJunContents.kpi5 < '1')?'yellow-7':(youthPRSportJunContents.kpi5 >= '1' && youthPRSportJunContents.kpi5 < '1.2')?'green':(youthPRSportJunContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi5}}
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
                              :color="(youthPRSportJulContents.kpi1 == null)?'grey-2':(youthPRSportJulContents.kpi1 >= '0' && youthPRSportJulContents.kpi1 <= '2.4')?'red':(youthPRSportJulContents.kpi1 > '2.4' && youthPRSportJulContents.kpi1 <= '3.2')?'orange':(youthPRSportJulContents.kpi1 > '3.2' && youthPRSportJulContents.kpi1 < '4')?'yellow-7':(youthPRSportJulContents.kpi1 >= '4' && youthPRSportJulContents.kpi1 < '4.8')?'green':(youthPRSportJulContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJulContents.kpi2 == null)?'grey-2':(youthPRSportJulContents.kpi2 >= '0' && youthPRSportJulContents.kpi2 <= '0.6')?'red':(youthPRSportJulContents.kpi2 > '0.6' && youthPRSportJulContents.kpi2 <= '0.8')?'orange':(youthPRSportJulContents.kpi2 > '0.8' && youthPRSportJulContents.kpi2 < '1')?'yellow-7':(youthPRSportJulContents.kpi2 >= '1' && youthPRSportJulContents.kpi2 < '1.2')?'green':(youthPRSportJulContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJulContents.kpi3 == null)?'grey-2':(youthPRSportJulContents.kpi3 >= '0' && youthPRSportJulContents.kpi3 <= '0.6')?'red':(youthPRSportJulContents.kpi3 > '0.6' && youthPRSportJulContents.kpi3 <= '0.8')?'orange':(youthPRSportJulContents.kpi3 > '0.8' && youthPRSportJulContents.kpi3 < '1')?'yellow-7':(youthPRSportJulContents.kpi3 >= '1' && youthPRSportJulContents.kpi3 < '1.2')?'green':(youthPRSportJulContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJulContents.kpi4 == null)?'grey-2':(youthPRSportJulContents.kpi4 >= '0' && youthPRSportJulContents.kpi4 <= '0.6')?'red':(youthPRSportJulContents.kpi4 > '0.6' && youthPRSportJulContents.kpi4 <= '0.8')?'orange':(youthPRSportJulContents.kpi4 > '0.8' && youthPRSportJulContents.kpi4 < '1')?'yellow-7':(youthPRSportJulContents.kpi4 >= '1' && youthPRSportJulContents.kpi4 < '1.2')?'green':(youthPRSportJulContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJulContents.kpi5 == null)?'grey-2':(youthPRSportJulContents.kpi5 >= '0' && youthPRSportJulContents.kpi5 <= '0.6')?'red':(youthPRSportJulContents.kpi5 > '0.6' && youthPRSportJulContents.kpi5 <= '0.8')?'orange':(youthPRSportJulContents.kpi5 > '0.8' && youthPRSportJulContents.kpi5 < '1')?'yellow-7':(youthPRSportJulContents.kpi5 >= '1' && youthPRSportJulContents.kpi5 < '1.2')?'green':(youthPRSportJulContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi5}}
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
                              :color="(youthPRSportAugContents.kpi1 == null)?'grey-2':(youthPRSportAugContents.kpi1 >= '0' && youthPRSportAugContents.kpi1 <= '2.4')?'red':(youthPRSportAugContents.kpi1 > '2.4' && youthPRSportAugContents.kpi1 <= '3.2')?'orange':(youthPRSportAugContents.kpi1 > '3.2' && youthPRSportAugContents.kpi1 < '4')?'yellow-7':(youthPRSportAugContents.kpi1 >= '4' && youthPRSportAugContents.kpi1 < '4.8')?'green':(youthPRSportAugContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAugContents.kpi2 == null)?'grey-2':(youthPRSportAugContents.kpi2 >= '0' && youthPRSportAugContents.kpi2 <= '0.6')?'red':(youthPRSportAugContents.kpi2 > '0.6' && youthPRSportAugContents.kpi2 <= '0.8')?'orange':(youthPRSportAugContents.kpi2 > '0.8' && youthPRSportAugContents.kpi2 < '1')?'yellow-7':(youthPRSportAugContents.kpi2 >= '1' && youthPRSportAugContents.kpi2 < '1.2')?'green':(youthPRSportAugContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAugContents.kpi3 == null)?'grey-2':(youthPRSportAugContents.kpi3 >= '0' && youthPRSportAugContents.kpi3 <= '0.6')?'red':(youthPRSportAugContents.kpi3 > '0.6' && youthPRSportAugContents.kpi3 <= '0.8')?'orange':(youthPRSportAugContents.kpi3 > '0.8' && youthPRSportAugContents.kpi3 < '1')?'yellow-7':(youthPRSportAugContents.kpi3 >= '1' && youthPRSportAugContents.kpi3 < '1.2')?'green':(youthPRSportAugContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAugContents.kpi4 == null)?'grey-2':(youthPRSportAugContents.kpi4 >= '0' && youthPRSportAugContents.kpi4 <= '0.6')?'red':(youthPRSportAugContents.kpi4 > '0.6' && youthPRSportAugContents.kpi4 <= '0.8')?'orange':(youthPRSportAugContents.kpi4 > '0.8' && youthPRSportAugContents.kpi4 < '1')?'yellow-7':(youthPRSportAugContents.kpi4 >= '1' && youthPRSportAugContents.kpi4 < '1.2')?'green':(youthPRSportAugContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAugContents.kpi5 == null)?'grey-2':(youthPRSportAugContents.kpi5 >= '0' && youthPRSportAugContents.kpi5 <= '0.6')?'red':(youthPRSportAugContents.kpi5 > '0.6' && youthPRSportAugContents.kpi5 <= '0.8')?'orange':(youthPRSportAugContents.kpi5 > '0.8' && youthPRSportAugContents.kpi5 < '1')?'yellow-7':(youthPRSportAugContents.kpi5 >= '1' && youthPRSportAugContents.kpi5 < '1.2')?'green':(youthPRSportAugContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi5}}
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
                              :color="(youthPRSportSepContents.kpi1 == null)?'grey-2':(youthPRSportSepContents.kpi1 >= '0' && youthPRSportSepContents.kpi1 <= '2.4')?'red':(youthPRSportSepContents.kpi1 > '2.4' && youthPRSportSepContents.kpi1 <= '3.2')?'orange':(youthPRSportSepContents.kpi1 > '3.2' && youthPRSportSepContents.kpi1 < '4')?'yellow-7':(youthPRSportSepContents.kpi1 >= '4' && youthPRSportSepContents.kpi1 < '4.8')?'green':(youthPRSportSepContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportSepContents.kpi2 == null)?'grey-2':(youthPRSportSepContents.kpi2 >= '0' && youthPRSportSepContents.kpi2 <= '0.6')?'red':(youthPRSportSepContents.kpi2 > '0.6' && youthPRSportSepContents.kpi2 <= '0.8')?'orange':(youthPRSportSepContents.kpi2 > '0.8' && youthPRSportSepContents.kpi2 < '1')?'yellow-7':(youthPRSportSepContents.kpi2 >= '1' && youthPRSportSepContents.kpi2 < '1.2')?'green':(youthPRSportSepContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportSepContents.kpi3 == null)?'grey-2':(youthPRSportSepContents.kpi3 >= '0' && youthPRSportSepContents.kpi3 <= '0.6')?'red':(youthPRSportSepContents.kpi3 > '0.6' && youthPRSportSepContents.kpi3 <= '0.8')?'orange':(youthPRSportSepContents.kpi3 > '0.8' && youthPRSportSepContents.kpi3 < '1')?'yellow-7':(youthPRSportSepContents.kpi3 >= '1' && youthPRSportSepContents.kpi3 < '1.2')?'green':(youthPRSportSepContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportSepContents.kpi4 == null)?'grey-2':(youthPRSportSepContents.kpi4 >= '0' && youthPRSportSepContents.kpi4 <= '0.6')?'red':(youthPRSportSepContents.kpi4 > '0.6' && youthPRSportSepContents.kpi4 <= '0.8')?'orange':(youthPRSportSepContents.kpi4 > '0.8' && youthPRSportSepContents.kpi4 < '1')?'yellow-7':(youthPRSportSepContents.kpi4 >= '1' && youthPRSportSepContents.kpi4 < '1.2')?'green':(youthPRSportSepContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportSepContents.kpi5 == null)?'grey-2':(youthPRSportSepContents.kpi5 >= '0' && youthPRSportSepContents.kpi5 <= '0.6')?'red':(youthPRSportSepContents.kpi5 > '0.6' && youthPRSportSepContents.kpi5 <= '0.8')?'orange':(youthPRSportSepContents.kpi5 > '0.8' && youthPRSportSepContents.kpi5 < '1')?'yellow-7':(youthPRSportSepContents.kpi5 >= '1' && youthPRSportSepContents.kpi5 < '1.2')?'green':(youthPRSportSepContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi5}}
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
                              :color="(youthPRSportOctContents.kpi1 == null)?'grey-2':(youthPRSportOctContents.kpi1 >= '0' && youthPRSportOctContents.kpi1 <= '2.4')?'red':(youthPRSportOctContents.kpi1 > '2.4' && youthPRSportOctContents.kpi1 <= '3.2')?'orange':(youthPRSportOctContents.kpi1 > '3.2' && youthPRSportOctContents.kpi1 < '4')?'yellow-7':(youthPRSportOctContents.kpi1 >= '4' && youthPRSportOctContents.kpi1 < '4.8')?'green':(youthPRSportOctContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportOctContents.kpi2 == null)?'grey-2':(youthPRSportOctContents.kpi2 >= '0' && youthPRSportOctContents.kpi2 <= '0.6')?'red':(youthPRSportOctContents.kpi2 > '0.6' && youthPRSportOctContents.kpi2 <= '0.8')?'orange':(youthPRSportOctContents.kpi2 > '0.8' && youthPRSportOctContents.kpi2 < '1')?'yellow-7':(youthPRSportOctContents.kpi2 >= '1' && youthPRSportOctContents.kpi2 < '1.2')?'green':(youthPRSportOctContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportOctContents.kpi3 == null)?'grey-2':(youthPRSportOctContents.kpi3 >= '0' && youthPRSportOctContents.kpi3 <= '0.6')?'red':(youthPRSportOctContents.kpi3 > '0.6' && youthPRSportOctContents.kpi3 <= '0.8')?'orange':(youthPRSportOctContents.kpi3 > '0.8' && youthPRSportOctContents.kpi3 < '1')?'yellow-7':(youthPRSportOctContents.kpi3 >= '1' && youthPRSportOctContents.kpi3 < '1.2')?'green':(youthPRSportOctContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportOctContents.kpi4 == null)?'grey-2':(youthPRSportOctContents.kpi4 >= '0' && youthPRSportOctContents.kpi4 <= '0.6')?'red':(youthPRSportOctContents.kpi4 > '0.6' && youthPRSportOctContents.kpi4 <= '0.8')?'orange':(youthPRSportOctContents.kpi4 > '0.8' && youthPRSportOctContents.kpi4 < '1')?'yellow-7':(youthPRSportOctContents.kpi4 >= '1' && youthPRSportOctContents.kpi4 < '1.2')?'green':(youthPRSportOctContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportOctContents.kpi5 == null)?'grey-2':(youthPRSportOctContents.kpi5 >= '0' && youthPRSportOctContents.kpi5 <= '0.6')?'red':(youthPRSportOctContents.kpi5 > '0.6' && youthPRSportOctContents.kpi5 <= '0.8')?'orange':(youthPRSportOctContents.kpi5 > '0.8' && youthPRSportOctContents.kpi5 < '1')?'yellow-7':(youthPRSportOctContents.kpi5 >= '1' && youthPRSportOctContents.kpi5 < '1.2')?'green':(youthPRSportOctContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi5}}
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
                              :color="(youthPRSportNovContents.kpi1 == null)?'grey-2':(youthPRSportNovContents.kpi1 >= '0' && youthPRSportNovContents.kpi1 <= '2.4')?'red':(youthPRSportNovContents.kpi1 > '2.4' && youthPRSportNovContents.kpi1 <= '3.2')?'orange':(youthPRSportNovContents.kpi1 > '3.2' && youthPRSportNovContents.kpi1 < '4')?'yellow-7':(youthPRSportNovContents.kpi1 >= '4' && youthPRSportNovContents.kpi1 < '4.8')?'green':(youthPRSportNovContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportNovContents.kpi2 == null)?'grey-2':(youthPRSportNovContents.kpi2 >= '0' && youthPRSportNovContents.kpi2 <= '0.6')?'red':(youthPRSportNovContents.kpi2 > '0.6' && youthPRSportNovContents.kpi2 <= '0.8')?'orange':(youthPRSportNovContents.kpi2 > '0.8' && youthPRSportNovContents.kpi2 < '1')?'yellow-7':(youthPRSportNovContents.kpi2 >= '1' && youthPRSportNovContents.kpi2 < '1.2')?'green':(youthPRSportNovContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportNovContents.kpi3 == null)?'grey-2':(youthPRSportNovContents.kpi3 >= '0' && youthPRSportNovContents.kpi3 <= '0.6')?'red':(youthPRSportNovContents.kpi3 > '0.6' && youthPRSportNovContents.kpi3 <= '0.8')?'orange':(youthPRSportNovContents.kpi3 > '0.8' && youthPRSportNovContents.kpi3 < '1')?'yellow-7':(youthPRSportNovContents.kpi3 >= '1' && youthPRSportNovContents.kpi3 < '1.2')?'green':(youthPRSportNovContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportNovContents.kpi4 == null)?'grey-2':(youthPRSportNovContents.kpi4 >= '0' && youthPRSportNovContents.kpi4 <= '0.6')?'red':(youthPRSportNovContents.kpi4 > '0.6' && youthPRSportNovContents.kpi4 <= '0.8')?'orange':(youthPRSportNovContents.kpi4 > '0.8' && youthPRSportNovContents.kpi4 < '1')?'yellow-7':(youthPRSportNovContents.kpi4 >= '1' && youthPRSportNovContents.kpi4 < '1.2')?'green':(youthPRSportNovContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportNovContents.kpi5 == null)?'grey-2':(youthPRSportNovContents.kpi5 >= '0' && youthPRSportNovContents.kpi5 <= '0.6')?'red':(youthPRSportNovContents.kpi5 > '0.6' && youthPRSportNovContents.kpi5 <= '0.8')?'orange':(youthPRSportNovContents.kpi5 > '0.8' && youthPRSportNovContents.kpi5 < '1')?'yellow-7':(youthPRSportNovContents.kpi5 >= '1' && youthPRSportNovContents.kpi5 < '1.2')?'green':(youthPRSportNovContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi5}}
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
                              :color="(youthPRSportDecContents.kpi1 == null)?'grey-2':(youthPRSportDecContents.kpi1 >= '0' && youthPRSportDecContents.kpi1 <= '2.4')?'red':(youthPRSportDecContents.kpi1 > '2.4' && youthPRSportDecContents.kpi1 <= '3.2')?'orange':(youthPRSportDecContents.kpi1 > '3.2' && youthPRSportDecContents.kpi1 < '4')?'yellow-7':(youthPRSportDecContents.kpi1 >= '4' && youthPRSportDecContents.kpi1 < '4.8')?'green':(youthPRSportDecContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportDecContents.kpi2 == null)?'grey-2':(youthPRSportDecContents.kpi2 >= '0' && youthPRSportDecContents.kpi2 <= '0.6')?'red':(youthPRSportDecContents.kpi2 > '0.6' && youthPRSportDecContents.kpi2 <= '0.8')?'orange':(youthPRSportDecContents.kpi2 > '0.8' && youthPRSportDecContents.kpi2 < '1')?'yellow-7':(youthPRSportDecContents.kpi2 >= '1' && youthPRSportDecContents.kpi2 < '1.2')?'green':(youthPRSportDecContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportDecContents.kpi3 == null)?'grey-2':(youthPRSportDecContents.kpi3 >= '0' && youthPRSportDecContents.kpi3 <= '0.6')?'red':(youthPRSportDecContents.kpi3 > '0.6' && youthPRSportDecContents.kpi3 <= '0.8')?'orange':(youthPRSportDecContents.kpi3 > '0.8' && youthPRSportDecContents.kpi3 < '1')?'yellow-7':(youthPRSportDecContents.kpi3 >= '1' && youthPRSportDecContents.kpi3 < '1.2')?'green':(youthPRSportDecContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportDecContents.kpi4 == null)?'grey-2':(youthPRSportDecContents.kpi4 >= '0' && youthPRSportDecContents.kpi4 <= '0.6')?'red':(youthPRSportDecContents.kpi4 > '0.6' && youthPRSportDecContents.kpi4 <= '0.8')?'orange':(youthPRSportDecContents.kpi4 > '0.8' && youthPRSportDecContents.kpi4 < '1')?'yellow-7':(youthPRSportDecContents.kpi4 >= '1' && youthPRSportDecContents.kpi4 < '1.2')?'green':(youthPRSportDecContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportDecContents.kpi5 == null)?'grey-2':(youthPRSportDecContents.kpi5 >= '0' && youthPRSportDecContents.kpi5 <= '0.6')?'red':(youthPRSportDecContents.kpi5 > '0.6' && youthPRSportDecContents.kpi5 <= '0.8')?'orange':(youthPRSportDecContents.kpi5 > '0.8' && youthPRSportDecContents.kpi5 < '1')?'yellow-7':(youthPRSportDecContents.kpi5 >= '1' && youthPRSportDecContents.kpi5 < '1.2')?'green':(youthPRSportDecContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi5}}
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
                                <q-tooltip># of unique children</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of total children</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of unique youth</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip># of total youth</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 5
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
                              :color="(youthPRSportJanContents.kpi1 == null)?'grey-2':(youthPRSportJanContents.kpi1 >= '0' && youthPRSportJanContents.kpi1 <= '2.4')?'red':(youthPRSportJanContents.kpi1 > '2.4' && youthPRSportJanContents.kpi1 <= '3.2')?'orange':(youthPRSportJanContents.kpi1 > '3.2' && youthPRSportJanContents.kpi1 < '4')?'yellow-7':(youthPRSportJanContents.kpi1 >= '4' && youthPRSportJanContents.kpi1 < '4.8')?'green':(youthPRSportJanContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJanContents.kpi2 == null)?'grey-2':(youthPRSportJanContents.kpi2 >= '0' && youthPRSportJanContents.kpi2 <= '0.6')?'red':(youthPRSportJanContents.kpi2 > '0.6' && youthPRSportJanContents.kpi2 <= '0.8')?'orange':(youthPRSportJanContents.kpi2 > '0.8' && youthPRSportJanContents.kpi2 < '1')?'yellow-7':(youthPRSportJanContents.kpi2 >= '1' && youthPRSportJanContents.kpi2 < '1.2')?'green':(youthPRSportJanContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJanContents.kpi3 == null)?'grey-2':(youthPRSportJanContents.kpi3 >= '0' && youthPRSportJanContents.kpi3 <= '0.6')?'red':(youthPRSportJanContents.kpi3 > '0.6' && youthPRSportJanContents.kpi3 <= '0.8')?'orange':(youthPRSportJanContents.kpi3 > '0.8' && youthPRSportJanContents.kpi3 < '1')?'yellow-7':(youthPRSportJanContents.kpi3 >= '1' && youthPRSportJanContents.kpi3 < '1.2')?'green':(youthPRSportJanContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJanContents.kpi4 == null)?'grey-2':(youthPRSportJanContents.kpi4 >= '0' && youthPRSportJanContents.kpi4 <= '0.6')?'red':(youthPRSportJanContents.kpi4 > '0.6' && youthPRSportJanContents.kpi4 <= '0.8')?'orange':(youthPRSportJanContents.kpi4 > '0.8' && youthPRSportJanContents.kpi4 < '1')?'yellow-7':(youthPRSportJanContents.kpi4 >= '1' && youthPRSportJanContents.kpi4 < '1.2')?'green':(youthPRSportJanContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJanContents.kpi5 == null)?'grey-2':(youthPRSportJanContents.kpi5 >= '0' && youthPRSportJanContents.kpi5 <= '0.6')?'red':(youthPRSportJanContents.kpi5 > '0.6' && youthPRSportJanContents.kpi5 <= '0.8')?'orange':(youthPRSportJanContents.kpi5 > '0.8' && youthPRSportJanContents.kpi5 < '1')?'yellow-7':(youthPRSportJanContents.kpi5 >= '1' && youthPRSportJanContents.kpi5 < '1.2')?'green':(youthPRSportJanContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJanContents.kpi5}}
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
                              :color="(youthPRSportFebContents.kpi1 == null)?'grey-2':(youthPRSportFebContents.kpi1 >= '0' && youthPRSportFebContents.kpi1 <= '2.4')?'red':(youthPRSportFebContents.kpi1 > '2.4' && youthPRSportFebContents.kpi1 <= '3.2')?'orange':(youthPRSportFebContents.kpi1 > '3.2' && youthPRSportFebContents.kpi1 < '4')?'yellow-7':(youthPRSportFebContents.kpi1 >= '4' && youthPRSportFebContents.kpi1 < '4.8')?'green':(youthPRSportFebContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportFebContents.kpi2 == null)?'grey-2':(youthPRSportFebContents.kpi2 >= '0' && youthPRSportFebContents.kpi2 <= '0.6')?'red':(youthPRSportFebContents.kpi2 > '0.6' && youthPRSportFebContents.kpi2 <= '0.8')?'orange':(youthPRSportFebContents.kpi2 > '0.8' && youthPRSportFebContents.kpi2 < '1')?'yellow-7':(youthPRSportFebContents.kpi2 >= '1' && youthPRSportFebContents.kpi2 < '1.2')?'green':(youthPRSportFebContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportFebContents.kpi3 == null)?'grey-2':(youthPRSportFebContents.kpi3 >= '0' && youthPRSportFebContents.kpi3 <= '0.6')?'red':(youthPRSportFebContents.kpi3 > '0.6' && youthPRSportFebContents.kpi3 <= '0.8')?'orange':(youthPRSportFebContents.kpi3 > '0.8' && youthPRSportFebContents.kpi3 < '1')?'yellow-7':(youthPRSportFebContents.kpi3 >= '1' && youthPRSportFebContents.kpi3 < '1.2')?'green':(youthPRSportFebContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportFebContents.kpi4 == null)?'grey-2':(youthPRSportFebContents.kpi4 >= '0' && youthPRSportFebContents.kpi4 <= '0.6')?'red':(youthPRSportFebContents.kpi4 > '0.6' && youthPRSportFebContents.kpi4 <= '0.8')?'orange':(youthPRSportFebContents.kpi4 > '0.8' && youthPRSportFebContents.kpi4 < '1')?'yellow-7':(youthPRSportFebContents.kpi4 >= '1' && youthPRSportFebContents.kpi4 < '1.2')?'green':(youthPRSportFebContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportFebContents.kpi5 == null)?'grey-2':(youthPRSportFebContents.kpi5 >= '0' && youthPRSportFebContents.kpi5 <= '0.6')?'red':(youthPRSportFebContents.kpi5 > '0.6' && youthPRSportFebContents.kpi5 <= '0.8')?'orange':(youthPRSportFebContents.kpi5 > '0.8' && youthPRSportFebContents.kpi5 < '1')?'yellow-7':(youthPRSportFebContents.kpi5 >= '1' && youthPRSportFebContents.kpi5 < '1.2')?'green':(youthPRSportFebContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportFebContents.kpi5}}
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
                              :color="(youthPRSportMarContents.kpi1 == null)?'grey-2':(youthPRSportMarContents.kpi1 >= '0' && youthPRSportMarContents.kpi1 <= '2.4')?'red':(youthPRSportMarContents.kpi1 > '2.4' && youthPRSportMarContents.kpi1 <= '3.2')?'orange':(youthPRSportMarContents.kpi1 > '3.2' && youthPRSportMarContents.kpi1 < '4')?'yellow-7':(youthPRSportMarContents.kpi1 >= '4' && youthPRSportMarContents.kpi1 < '4.8')?'green':(youthPRSportMarContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMarContents.kpi2 == null)?'grey-2':(youthPRSportMarContents.kpi2 >= '0' && youthPRSportMarContents.kpi2 <= '0.6')?'red':(youthPRSportMarContents.kpi2 > '0.6' && youthPRSportMarContents.kpi2 <= '0.8')?'orange':(youthPRSportMarContents.kpi2 > '0.8' && youthPRSportMarContents.kpi2 < '1')?'yellow-7':(youthPRSportMarContents.kpi2 >= '1' && youthPRSportMarContents.kpi2 < '1.2')?'green':(youthPRSportMarContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMarContents.kpi3 == null)?'grey-2':(youthPRSportMarContents.kpi3 >= '0' && youthPRSportMarContents.kpi3 <= '0.6')?'red':(youthPRSportMarContents.kpi3 > '0.6' && youthPRSportMarContents.kpi3 <= '0.8')?'orange':(youthPRSportMarContents.kpi3 > '0.8' && youthPRSportMarContents.kpi3 < '1')?'yellow-7':(youthPRSportMarContents.kpi3 >= '1' && youthPRSportMarContents.kpi3 < '1.2')?'green':(youthPRSportMarContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMarContents.kpi4 == null)?'grey-2':(youthPRSportMarContents.kpi4 >= '0' && youthPRSportMarContents.kpi4 <= '0.6')?'red':(youthPRSportMarContents.kpi4 > '0.6' && youthPRSportMarContents.kpi4 <= '0.8')?'orange':(youthPRSportMarContents.kpi4 > '0.8' && youthPRSportMarContents.kpi4 < '1')?'yellow-7':(youthPRSportMarContents.kpi4 >= '1' && youthPRSportMarContents.kpi4 < '1.2')?'green':(youthPRSportMarContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMarContents.kpi5 == null)?'grey-2':(youthPRSportMarContents.kpi5 >= '0' && youthPRSportMarContents.kpi5 <= '0.6')?'red':(youthPRSportMarContents.kpi5 > '0.6' && youthPRSportMarContents.kpi5 <= '0.8')?'orange':(youthPRSportMarContents.kpi5 > '0.8' && youthPRSportMarContents.kpi5 < '1')?'yellow-7':(youthPRSportMarContents.kpi5 >= '1' && youthPRSportMarContents.kpi5 < '1.2')?'green':(youthPRSportMarContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMarContents.kpi5}}
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
                              :color="(youthPRSportAprContents.kpi1 == null)?'grey-2':(youthPRSportAprContents.kpi1 >= '0' && youthPRSportAprContents.kpi1 <= '2.4')?'red':(youthPRSportAprContents.kpi1 > '2.4' && youthPRSportAprContents.kpi1 <= '3.2')?'orange':(youthPRSportAprContents.kpi1 > '3.2' && youthPRSportAprContents.kpi1 < '4')?'yellow-7':(youthPRSportAprContents.kpi1 >= '4' && youthPRSportAprContents.kpi1 < '4.8')?'green':(youthPRSportAprContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAprContents.kpi2 == null)?'grey-2':(youthPRSportAprContents.kpi2 >= '0' && youthPRSportAprContents.kpi2 <= '0.6')?'red':(youthPRSportAprContents.kpi2 > '0.6' && youthPRSportAprContents.kpi2 <= '0.8')?'orange':(youthPRSportAprContents.kpi2 > '0.8' && youthPRSportAprContents.kpi2 < '1')?'yellow-7':(youthPRSportAprContents.kpi2 >= '1' && youthPRSportAprContents.kpi2 < '1.2')?'green':(youthPRSportAprContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAprContents.kpi3 == null)?'grey-2':(youthPRSportAprContents.kpi3 >= '0' && youthPRSportAprContents.kpi3 <= '0.6')?'red':(youthPRSportAprContents.kpi3 > '0.6' && youthPRSportAprContents.kpi3 <= '0.8')?'orange':(youthPRSportAprContents.kpi3 > '0.8' && youthPRSportAprContents.kpi3 < '1')?'yellow-7':(youthPRSportAprContents.kpi3 >= '1' && youthPRSportAprContents.kpi3 < '1.2')?'green':(youthPRSportAprContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAprContents.kpi4 == null)?'grey-2':(youthPRSportAprContents.kpi4 >= '0' && youthPRSportAprContents.kpi4 <= '0.6')?'red':(youthPRSportAprContents.kpi4 > '0.6' && youthPRSportAprContents.kpi4 <= '0.8')?'orange':(youthPRSportAprContents.kpi4 > '0.8' && youthPRSportAprContents.kpi4 < '1')?'yellow-7':(youthPRSportAprContents.kpi4 >= '1' && youthPRSportAprContents.kpi4 < '1.2')?'green':(youthPRSportAprContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAprContents.kpi5 == null)?'grey-2':(youthPRSportAprContents.kpi5 >= '0' && youthPRSportAprContents.kpi5 <= '0.6')?'red':(youthPRSportAprContents.kpi5 > '0.6' && youthPRSportAprContents.kpi5 <= '0.8')?'orange':(youthPRSportAprContents.kpi5 > '0.8' && youthPRSportAprContents.kpi5 < '1')?'yellow-7':(youthPRSportAprContents.kpi5 >= '1' && youthPRSportAprContents.kpi5 < '1.2')?'green':(youthPRSportAprContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAprContents.kpi5}}
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
                              :color="(youthPRSportMayContents.kpi1 == null)?'grey-2':(youthPRSportMayContents.kpi1 >= '0' && youthPRSportMayContents.kpi1 <= '2.4')?'red':(youthPRSportMayContents.kpi1 > '2.4' && youthPRSportMayContents.kpi1 <= '3.2')?'orange':(youthPRSportMayContents.kpi1 > '3.2' && youthPRSportMayContents.kpi1 < '4')?'yellow-7':(youthPRSportMayContents.kpi1 >= '4' && youthPRSportMayContents.kpi1 < '4.8')?'green':(youthPRSportMayContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMayContents.kpi2 == null)?'grey-2':(youthPRSportMayContents.kpi2 >= '0' && youthPRSportMayContents.kpi2 <= '0.6')?'red':(youthPRSportMayContents.kpi2 > '0.6' && youthPRSportMayContents.kpi2 <= '0.8')?'orange':(youthPRSportMayContents.kpi2 > '0.8' && youthPRSportMayContents.kpi2 < '1')?'yellow-7':(youthPRSportMayContents.kpi2 >= '1' && youthPRSportMayContents.kpi2 < '1.2')?'green':(youthPRSportMayContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMayContents.kpi3 == null)?'grey-2':(youthPRSportMayContents.kpi3 >= '0' && youthPRSportMayContents.kpi3 <= '0.6')?'red':(youthPRSportMayContents.kpi3 > '0.6' && youthPRSportMayContents.kpi3 <= '0.8')?'orange':(youthPRSportMayContents.kpi3 > '0.8' && youthPRSportMayContents.kpi3 < '1')?'yellow-7':(youthPRSportMayContents.kpi3 >= '1' && youthPRSportMayContents.kpi3 < '1.2')?'green':(youthPRSportMayContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMayContents.kpi4 == null)?'grey-2':(youthPRSportMayContents.kpi4 >= '0' && youthPRSportMayContents.kpi4 <= '0.6')?'red':(youthPRSportMayContents.kpi4 > '0.6' && youthPRSportMayContents.kpi4 <= '0.8')?'orange':(youthPRSportMayContents.kpi4 > '0.8' && youthPRSportMayContents.kpi4 < '1')?'yellow-7':(youthPRSportMayContents.kpi4 >= '1' && youthPRSportMayContents.kpi4 < '1.2')?'green':(youthPRSportMayContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportMayContents.kpi5 == null)?'grey-2':(youthPRSportMayContents.kpi5 >= '0' && youthPRSportMayContents.kpi5 <= '0.6')?'red':(youthPRSportMayContents.kpi5 > '0.6' && youthPRSportMayContents.kpi5 <= '0.8')?'orange':(youthPRSportMayContents.kpi5 > '0.8' && youthPRSportMayContents.kpi5 < '1')?'yellow-7':(youthPRSportMayContents.kpi5 >= '1' && youthPRSportMayContents.kpi5 < '1.2')?'green':(youthPRSportMayContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportMayContents.kpi5}}
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
                              :color="(youthPRSportJunContents.kpi1 == null)?'grey-2':(youthPRSportJunContents.kpi1 >= '0' && youthPRSportJunContents.kpi1 <= '2.4')?'red':(youthPRSportJunContents.kpi1 > '2.4' && youthPRSportJunContents.kpi1 <= '3.2')?'orange':(youthPRSportJunContents.kpi1 > '3.2' && youthPRSportJunContents.kpi1 < '4')?'yellow-7':(youthPRSportJunContents.kpi1 >= '4' && youthPRSportJunContents.kpi1 < '4.8')?'green':(youthPRSportJunContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJunContents.kpi2 == null)?'grey-2':(youthPRSportJunContents.kpi2 >= '0' && youthPRSportJunContents.kpi2 <= '0.6')?'red':(youthPRSportJunContents.kpi2 > '0.6' && youthPRSportJunContents.kpi2 <= '0.8')?'orange':(youthPRSportJunContents.kpi2 > '0.8' && youthPRSportJunContents.kpi2 < '1')?'yellow-7':(youthPRSportJunContents.kpi2 >= '1' && youthPRSportJunContents.kpi2 < '1.2')?'green':(youthPRSportJunContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJunContents.kpi3 == null)?'grey-2':(youthPRSportJunContents.kpi3 >= '0' && youthPRSportJunContents.kpi3 <= '0.6')?'red':(youthPRSportJunContents.kpi3 > '0.6' && youthPRSportJunContents.kpi3 <= '0.8')?'orange':(youthPRSportJunContents.kpi3 > '0.8' && youthPRSportJunContents.kpi3 < '1')?'yellow-7':(youthPRSportJunContents.kpi3 >= '1' && youthPRSportJunContents.kpi3 < '1.2')?'green':(youthPRSportJunContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJunContents.kpi4 == null)?'grey-2':(youthPRSportJunContents.kpi4 >= '0' && youthPRSportJunContents.kpi4 <= '0.6')?'red':(youthPRSportJunContents.kpi4 > '0.6' && youthPRSportJunContents.kpi4 <= '0.8')?'orange':(youthPRSportJunContents.kpi4 > '0.8' && youthPRSportJunContents.kpi4 < '1')?'yellow-7':(youthPRSportJunContents.kpi4 >= '1' && youthPRSportJunContents.kpi4 < '1.2')?'green':(youthPRSportJunContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJunContents.kpi5 == null)?'grey-2':(youthPRSportJunContents.kpi5 >= '0' && youthPRSportJunContents.kpi5 <= '0.6')?'red':(youthPRSportJunContents.kpi5 > '0.6' && youthPRSportJunContents.kpi5 <= '0.8')?'orange':(youthPRSportJunContents.kpi5 > '0.8' && youthPRSportJunContents.kpi5 < '1')?'yellow-7':(youthPRSportJunContents.kpi5 >= '1' && youthPRSportJunContents.kpi5 < '1.2')?'green':(youthPRSportJunContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJunContents.kpi5}}
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
                              :color="(youthPRSportJulContents.kpi1 == null)?'grey-2':(youthPRSportJulContents.kpi1 >= '0' && youthPRSportJulContents.kpi1 <= '2.4')?'red':(youthPRSportJulContents.kpi1 > '2.4' && youthPRSportJulContents.kpi1 <= '3.2')?'orange':(youthPRSportJulContents.kpi1 > '3.2' && youthPRSportJulContents.kpi1 < '4')?'yellow-7':(youthPRSportJulContents.kpi1 >= '4' && youthPRSportJulContents.kpi1 < '4.8')?'green':(youthPRSportJulContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJulContents.kpi2 == null)?'grey-2':(youthPRSportJulContents.kpi2 >= '0' && youthPRSportJulContents.kpi2 <= '0.6')?'red':(youthPRSportJulContents.kpi2 > '0.6' && youthPRSportJulContents.kpi2 <= '0.8')?'orange':(youthPRSportJulContents.kpi2 > '0.8' && youthPRSportJulContents.kpi2 < '1')?'yellow-7':(youthPRSportJulContents.kpi2 >= '1' && youthPRSportJulContents.kpi2 < '1.2')?'green':(youthPRSportJulContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJulContents.kpi3 == null)?'grey-2':(youthPRSportJulContents.kpi3 >= '0' && youthPRSportJulContents.kpi3 <= '0.6')?'red':(youthPRSportJulContents.kpi3 > '0.6' && youthPRSportJulContents.kpi3 <= '0.8')?'orange':(youthPRSportJulContents.kpi3 > '0.8' && youthPRSportJulContents.kpi3 < '1')?'yellow-7':(youthPRSportJulContents.kpi3 >= '1' && youthPRSportJulContents.kpi3 < '1.2')?'green':(youthPRSportJulContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJulContents.kpi4 == null)?'grey-2':(youthPRSportJulContents.kpi4 >= '0' && youthPRSportJulContents.kpi4 <= '0.6')?'red':(youthPRSportJulContents.kpi4 > '0.6' && youthPRSportJulContents.kpi4 <= '0.8')?'orange':(youthPRSportJulContents.kpi4 > '0.8' && youthPRSportJulContents.kpi4 < '1')?'yellow-7':(youthPRSportJulContents.kpi4 >= '1' && youthPRSportJulContents.kpi4 < '1.2')?'green':(youthPRSportJulContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportJulContents.kpi5 == null)?'grey-2':(youthPRSportJulContents.kpi5 >= '0' && youthPRSportJulContents.kpi5 <= '0.6')?'red':(youthPRSportJulContents.kpi5 > '0.6' && youthPRSportJulContents.kpi5 <= '0.8')?'orange':(youthPRSportJulContents.kpi5 > '0.8' && youthPRSportJulContents.kpi5 < '1')?'yellow-7':(youthPRSportJulContents.kpi5 >= '1' && youthPRSportJulContents.kpi5 < '1.2')?'green':(youthPRSportJulContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportJulContents.kpi5}}
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
                              :color="(youthPRSportAugContents.kpi1 == null)?'grey-2':(youthPRSportAugContents.kpi1 >= '0' && youthPRSportAugContents.kpi1 <= '2.4')?'red':(youthPRSportAugContents.kpi1 > '2.4' && youthPRSportAugContents.kpi1 <= '3.2')?'orange':(youthPRSportAugContents.kpi1 > '3.2' && youthPRSportAugContents.kpi1 < '4')?'yellow-7':(youthPRSportAugContents.kpi1 >= '4' && youthPRSportAugContents.kpi1 < '4.8')?'green':(youthPRSportAugContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAugContents.kpi2 == null)?'grey-2':(youthPRSportAugContents.kpi2 >= '0' && youthPRSportAugContents.kpi2 <= '0.6')?'red':(youthPRSportAugContents.kpi2 > '0.6' && youthPRSportAugContents.kpi2 <= '0.8')?'orange':(youthPRSportAugContents.kpi2 > '0.8' && youthPRSportAugContents.kpi2 < '1')?'yellow-7':(youthPRSportAugContents.kpi2 >= '1' && youthPRSportAugContents.kpi2 < '1.2')?'green':(youthPRSportAugContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAugContents.kpi3 == null)?'grey-2':(youthPRSportAugContents.kpi3 >= '0' && youthPRSportAugContents.kpi3 <= '0.6')?'red':(youthPRSportAugContents.kpi3 > '0.6' && youthPRSportAugContents.kpi3 <= '0.8')?'orange':(youthPRSportAugContents.kpi3 > '0.8' && youthPRSportAugContents.kpi3 < '1')?'yellow-7':(youthPRSportAugContents.kpi3 >= '1' && youthPRSportAugContents.kpi3 < '1.2')?'green':(youthPRSportAugContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAugContents.kpi4 == null)?'grey-2':(youthPRSportAugContents.kpi4 >= '0' && youthPRSportAugContents.kpi4 <= '0.6')?'red':(youthPRSportAugContents.kpi4 > '0.6' && youthPRSportAugContents.kpi4 <= '0.8')?'orange':(youthPRSportAugContents.kpi4 > '0.8' && youthPRSportAugContents.kpi4 < '1')?'yellow-7':(youthPRSportAugContents.kpi4 >= '1' && youthPRSportAugContents.kpi4 < '1.2')?'green':(youthPRSportAugContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportAugContents.kpi5 == null)?'grey-2':(youthPRSportAugContents.kpi5 >= '0' && youthPRSportAugContents.kpi5 <= '0.6')?'red':(youthPRSportAugContents.kpi5 > '0.6' && youthPRSportAugContents.kpi5 <= '0.8')?'orange':(youthPRSportAugContents.kpi5 > '0.8' && youthPRSportAugContents.kpi5 < '1')?'yellow-7':(youthPRSportAugContents.kpi5 >= '1' && youthPRSportAugContents.kpi5 < '1.2')?'green':(youthPRSportAugContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportAugContents.kpi5}}
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
                              :color="(youthPRSportSepContents.kpi1 == null)?'grey-2':(youthPRSportSepContents.kpi1 >= '0' && youthPRSportSepContents.kpi1 <= '2.4')?'red':(youthPRSportSepContents.kpi1 > '2.4' && youthPRSportSepContents.kpi1 <= '3.2')?'orange':(youthPRSportSepContents.kpi1 > '3.2' && youthPRSportSepContents.kpi1 < '4')?'yellow-7':(youthPRSportSepContents.kpi1 >= '4' && youthPRSportSepContents.kpi1 < '4.8')?'green':(youthPRSportSepContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportSepContents.kpi2 == null)?'grey-2':(youthPRSportSepContents.kpi2 >= '0' && youthPRSportSepContents.kpi2 <= '0.6')?'red':(youthPRSportSepContents.kpi2 > '0.6' && youthPRSportSepContents.kpi2 <= '0.8')?'orange':(youthPRSportSepContents.kpi2 > '0.8' && youthPRSportSepContents.kpi2 < '1')?'yellow-7':(youthPRSportSepContents.kpi2 >= '1' && youthPRSportSepContents.kpi2 < '1.2')?'green':(youthPRSportSepContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportSepContents.kpi3 == null)?'grey-2':(youthPRSportSepContents.kpi3 >= '0' && youthPRSportSepContents.kpi3 <= '0.6')?'red':(youthPRSportSepContents.kpi3 > '0.6' && youthPRSportSepContents.kpi3 <= '0.8')?'orange':(youthPRSportSepContents.kpi3 > '0.8' && youthPRSportSepContents.kpi3 < '1')?'yellow-7':(youthPRSportSepContents.kpi3 >= '1' && youthPRSportSepContents.kpi3 < '1.2')?'green':(youthPRSportSepContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportSepContents.kpi4 == null)?'grey-2':(youthPRSportSepContents.kpi4 >= '0' && youthPRSportSepContents.kpi4 <= '0.6')?'red':(youthPRSportSepContents.kpi4 > '0.6' && youthPRSportSepContents.kpi4 <= '0.8')?'orange':(youthPRSportSepContents.kpi4 > '0.8' && youthPRSportSepContents.kpi4 < '1')?'yellow-7':(youthPRSportSepContents.kpi4 >= '1' && youthPRSportSepContents.kpi4 < '1.2')?'green':(youthPRSportSepContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportSepContents.kpi5 == null)?'grey-2':(youthPRSportSepContents.kpi5 >= '0' && youthPRSportSepContents.kpi5 <= '0.6')?'red':(youthPRSportSepContents.kpi5 > '0.6' && youthPRSportSepContents.kpi5 <= '0.8')?'orange':(youthPRSportSepContents.kpi5 > '0.8' && youthPRSportSepContents.kpi5 < '1')?'yellow-7':(youthPRSportSepContents.kpi5 >= '1' && youthPRSportSepContents.kpi5 < '1.2')?'green':(youthPRSportSepContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportSepContents.kpi5}}
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
                              :color="(youthPRSportOctContents.kpi1 == null)?'grey-2':(youthPRSportOctContents.kpi1 >= '0' && youthPRSportOctContents.kpi1 <= '2.4')?'red':(youthPRSportOctContents.kpi1 > '2.4' && youthPRSportOctContents.kpi1 <= '3.2')?'orange':(youthPRSportOctContents.kpi1 > '3.2' && youthPRSportOctContents.kpi1 < '4')?'yellow-7':(youthPRSportOctContents.kpi1 >= '4' && youthPRSportOctContents.kpi1 < '4.8')?'green':(youthPRSportOctContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportOctContents.kpi2 == null)?'grey-2':(youthPRSportOctContents.kpi2 >= '0' && youthPRSportOctContents.kpi2 <= '0.6')?'red':(youthPRSportOctContents.kpi2 > '0.6' && youthPRSportOctContents.kpi2 <= '0.8')?'orange':(youthPRSportOctContents.kpi2 > '0.8' && youthPRSportOctContents.kpi2 < '1')?'yellow-7':(youthPRSportOctContents.kpi2 >= '1' && youthPRSportOctContents.kpi2 < '1.2')?'green':(youthPRSportOctContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportOctContents.kpi3 == null)?'grey-2':(youthPRSportOctContents.kpi3 >= '0' && youthPRSportOctContents.kpi3 <= '0.6')?'red':(youthPRSportOctContents.kpi3 > '0.6' && youthPRSportOctContents.kpi3 <= '0.8')?'orange':(youthPRSportOctContents.kpi3 > '0.8' && youthPRSportOctContents.kpi3 < '1')?'yellow-7':(youthPRSportOctContents.kpi3 >= '1' && youthPRSportOctContents.kpi3 < '1.2')?'green':(youthPRSportOctContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportOctContents.kpi4 == null)?'grey-2':(youthPRSportOctContents.kpi4 >= '0' && youthPRSportOctContents.kpi4 <= '0.6')?'red':(youthPRSportOctContents.kpi4 > '0.6' && youthPRSportOctContents.kpi4 <= '0.8')?'orange':(youthPRSportOctContents.kpi4 > '0.8' && youthPRSportOctContents.kpi4 < '1')?'yellow-7':(youthPRSportOctContents.kpi4 >= '1' && youthPRSportOctContents.kpi4 < '1.2')?'green':(youthPRSportOctContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportOctContents.kpi5 == null)?'grey-2':(youthPRSportOctContents.kpi5 >= '0' && youthPRSportOctContents.kpi5 <= '0.6')?'red':(youthPRSportOctContents.kpi5 > '0.6' && youthPRSportOctContents.kpi5 <= '0.8')?'orange':(youthPRSportOctContents.kpi5 > '0.8' && youthPRSportOctContents.kpi5 < '1')?'yellow-7':(youthPRSportOctContents.kpi5 >= '1' && youthPRSportOctContents.kpi5 < '1.2')?'green':(youthPRSportOctContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportOctContents.kpi5}}
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
                              :color="(youthPRSportNovContents.kpi1 == null)?'grey-2':(youthPRSportNovContents.kpi1 >= '0' && youthPRSportNovContents.kpi1 <= '2.4')?'red':(youthPRSportNovContents.kpi1 > '2.4' && youthPRSportNovContents.kpi1 <= '3.2')?'orange':(youthPRSportNovContents.kpi1 > '3.2' && youthPRSportNovContents.kpi1 < '4')?'yellow-7':(youthPRSportNovContents.kpi1 >= '4' && youthPRSportNovContents.kpi1 < '4.8')?'green':(youthPRSportNovContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportNovContents.kpi2 == null)?'grey-2':(youthPRSportNovContents.kpi2 >= '0' && youthPRSportNovContents.kpi2 <= '0.6')?'red':(youthPRSportNovContents.kpi2 > '0.6' && youthPRSportNovContents.kpi2 <= '0.8')?'orange':(youthPRSportNovContents.kpi2 > '0.8' && youthPRSportNovContents.kpi2 < '1')?'yellow-7':(youthPRSportNovContents.kpi2 >= '1' && youthPRSportNovContents.kpi2 < '1.2')?'green':(youthPRSportNovContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportNovContents.kpi3 == null)?'grey-2':(youthPRSportNovContents.kpi3 >= '0' && youthPRSportNovContents.kpi3 <= '0.6')?'red':(youthPRSportNovContents.kpi3 > '0.6' && youthPRSportNovContents.kpi3 <= '0.8')?'orange':(youthPRSportNovContents.kpi3 > '0.8' && youthPRSportNovContents.kpi3 < '1')?'yellow-7':(youthPRSportNovContents.kpi3 >= '1' && youthPRSportNovContents.kpi3 < '1.2')?'green':(youthPRSportNovContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportNovContents.kpi4 == null)?'grey-2':(youthPRSportNovContents.kpi4 >= '0' && youthPRSportNovContents.kpi4 <= '0.6')?'red':(youthPRSportNovContents.kpi4 > '0.6' && youthPRSportNovContents.kpi4 <= '0.8')?'orange':(youthPRSportNovContents.kpi4 > '0.8' && youthPRSportNovContents.kpi4 < '1')?'yellow-7':(youthPRSportNovContents.kpi4 >= '1' && youthPRSportNovContents.kpi4 < '1.2')?'green':(youthPRSportNovContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportNovContents.kpi5 == null)?'grey-2':(youthPRSportNovContents.kpi5 >= '0' && youthPRSportNovContents.kpi5 <= '0.6')?'red':(youthPRSportNovContents.kpi5 > '0.6' && youthPRSportNovContents.kpi5 <= '0.8')?'orange':(youthPRSportNovContents.kpi5 > '0.8' && youthPRSportNovContents.kpi5 < '1')?'yellow-7':(youthPRSportNovContents.kpi5 >= '1' && youthPRSportNovContents.kpi5 < '1.2')?'green':(youthPRSportNovContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportNovContents.kpi5}}
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
                              :color="(youthPRSportDecContents.kpi1 == null)?'grey-2':(youthPRSportDecContents.kpi1 >= '0' && youthPRSportDecContents.kpi1 <= '2.4')?'red':(youthPRSportDecContents.kpi1 > '2.4' && youthPRSportDecContents.kpi1 <= '3.2')?'orange':(youthPRSportDecContents.kpi1 > '3.2' && youthPRSportDecContents.kpi1 < '4')?'yellow-7':(youthPRSportDecContents.kpi1 >= '4' && youthPRSportDecContents.kpi1 < '4.8')?'green':(youthPRSportDecContents.kpi1 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportDecContents.kpi2 == null)?'grey-2':(youthPRSportDecContents.kpi2 >= '0' && youthPRSportDecContents.kpi2 <= '0.6')?'red':(youthPRSportDecContents.kpi2 > '0.6' && youthPRSportDecContents.kpi2 <= '0.8')?'orange':(youthPRSportDecContents.kpi2 > '0.8' && youthPRSportDecContents.kpi2 < '1')?'yellow-7':(youthPRSportDecContents.kpi2 >= '1' && youthPRSportDecContents.kpi2 < '1.2')?'green':(youthPRSportDecContents.kpi2 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportDecContents.kpi3 == null)?'grey-2':(youthPRSportDecContents.kpi3 >= '0' && youthPRSportDecContents.kpi3 <= '0.6')?'red':(youthPRSportDecContents.kpi3 > '0.6' && youthPRSportDecContents.kpi3 <= '0.8')?'orange':(youthPRSportDecContents.kpi3 > '0.8' && youthPRSportDecContents.kpi3 < '1')?'yellow-7':(youthPRSportDecContents.kpi3 >= '1' && youthPRSportDecContents.kpi3 < '1.2')?'green':(youthPRSportDecContents.kpi3 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportDecContents.kpi4 == null)?'grey-2':(youthPRSportDecContents.kpi4 >= '0' && youthPRSportDecContents.kpi4 <= '0.6')?'red':(youthPRSportDecContents.kpi4 > '0.6' && youthPRSportDecContents.kpi4 <= '0.8')?'orange':(youthPRSportDecContents.kpi4 > '0.8' && youthPRSportDecContents.kpi4 < '1')?'yellow-7':(youthPRSportDecContents.kpi4 >= '1' && youthPRSportDecContents.kpi4 < '1.2')?'green':(youthPRSportDecContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRSportDecContents.kpi5 == null)?'grey-2':(youthPRSportDecContents.kpi5 >= '0' && youthPRSportDecContents.kpi5 <= '0.6')?'red':(youthPRSportDecContents.kpi5 > '0.6' && youthPRSportDecContents.kpi5 <= '0.8')?'orange':(youthPRSportDecContents.kpi5 > '0.8' && youthPRSportDecContents.kpi5 < '1')?'yellow-7':(youthPRSportDecContents.kpi5 >= '1' && youthPRSportDecContents.kpi5 < '1.2')?'green':(youthPRSportDecContents.kpi5 >= '1.2'?'blue':'grey-2')"
                            >
                            {{youthPRSportDecContents.kpi5}}
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
              youthPRSportJanContent: {
                
              },
              youthPRSportJanContents : [],
              youthPRSportFebContent: {
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
              youthPRSportFebContents : [],
              youthPRSportMarContent: {
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
              youthPRSportMarContents : [],
              youthPRSportAprContent: {
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
              youthPRSportAprContents : [],
              youthPRSportMayContent: {
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
              youthPRSportMayContents : [],
              youthPRSportJunContent: {
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
              youthPRSportJunContents : [],
              youthPRSportJulContent: {
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
              youthPRSportJulContents : [],
              youthPRSportAugContent: {
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
              youthPRSportAugContents : [],
              youthPRSportSepContent: {
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
              youthPRSportSepContents : [],
              youthPRSportOctContent: {
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
              youthPRSportOctContents : [],
              youthPRSportNovContent: {
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
              youthPRSportNovContents : [],
              youthPRSportDecContent: {
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
              youthPRSportDecContents : []


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
                            {time_period: 'January', expenses: this.youthPRSportJanContents.expenses, revenues: this.youthPRSportJanContents.revenues},
                            {time_period: 'February', expenses: this.youthPRSportFebContents.expenses, revenues: this.youthPRSportFebContents.revenues},
                            {time_period: 'March', expenses: this.youthPRSportMarContents.expenses, revenues: this.youthPRSportMarContents.revenues},
                            {time_period: 'April', expenses: this.youthPRSportAprContents.expenses, revenues: this.youthPRSportAprContents.revenues},
                            {time_period: 'May', expenses: this.youthPRSportMayContents.expenses, revenues: this.youthPRSportMayContents.revenues},
                            {time_period: 'June', expenses: this.youthPRSportJunContents.expenses, revenues: this.youthPRSportJunContents.revenues},
                            {time_period: 'July', expenses: this.youthPRSportJulContents.expenses, revenues: this.youthPRSportJulContents.revenues},
                            {time_period: 'August', expenses: this.youthPRSportAugContents.expenses, revenues: this.youthPRSportAugContents.revenues},
                            {time_period: 'September', expenses: this.youthPRSportSepContents.expenses, revenues: this.youthPRSportSepContents.revenues},
                            {time_period: 'October', expenses: this.youthPRSportOctContents.expenses, revenues: this.youthPRSportOctContents.revenues},
                            {time_period: 'November', expenses: this.youthPRSportNovContents.expenses, revenues: this.youthPRSportNovContents.revenues},
                            {time_period: 'December',expenses: this.youthPRSportDecContents.expenses, revenues: this.youthPRSportDecContents.revenues }
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
                            {months: 'January', kpi1: this.youthPRSportJanContents.kpi1, kpi2: this.youthPRSportJanContents.kpi2, kpi3: this.youthPRSportJanContents.kpi3, kpi4: this.youthPRSportJanContents.kpi4, kpi5: this.youthPRSportJanContents.kpi5, uniqueVol: this.youthPRSportJanContents.uniqueVolunteers, volHours: this.youthPRSportJanContents.volunteerHours},
                            {months: 'February', kpi1: this.youthPRSportFebContents.kpi1, kpi2: this.youthPRSportFebContents.kpi2, kpi3: this.youthPRSportFebContents.kpi3, kpi4: this.youthPRSportFebContents.kpi4, kpi5: this.youthPRSportFebContents.kpi5, uniqueVol: this.youthPRSportFebContents.uniqueVolunteers, volHours: this.youthPRSportFebContents.volunteerHours},
                            {months: 'March', kpi1: this.youthPRSportMarContents.kpi1, kpi2: this.youthPRSportMarContents.kpi2, kpi3: this.youthPRSportMarContents.kpi3, kpi4: this.youthPRSportMarContents.kpi4, kpi5: this.youthPRSportMarContents.kpi5, uniqueVol: this.youthPRSportMarContents.uniqueVolunteers, volHours: this.youthPRSportMarContents.volunteerHours},
                            {months: 'April', kpi1: this.youthPRSportAprContents.kpi1, kpi2: this.youthPRSportAprContents.kpi2, kpi3: this.youthPRSportAprContents.kpi3, kpi4: this.youthPRSportAprContents.kpi4, kpi5: this.youthPRSportAprContents.kpi5, uniqueVol: this.youthPRSportAprContents.uniqueVolunteers, volHours: this.youthPRSportAprContents.volunteerHours},
                            {months: 'May', kpi1: this.youthPRSportMayContents.kpi1, kpi2: this.youthPRSportMayContents.kpi2, kpi3: this.youthPRSportMayContents.kpi3, kpi4: this.youthPRSportMayContents.kpi4, kpi5: this.youthPRSportMayContents.kpi5, uniqueVol: this.youthPRSportMayContents.uniqueVolunteers, volHours: this.youthPRSportMayContents.volunteerHours},
                            {months: 'June', kpi1: this.youthPRSportJunContents.kpi1, kpi2: this.youthPRSportJunContents.kpi2, kpi3: this.youthPRSportJunContents.kpi3, kpi4: this.youthPRSportJunContents.kpi4, kpi5: this.youthPRSportJunContents.kpi5, uniqueVol: this.youthPRSportJunContents.uniqueVolunteers, volHours: this.youthPRSportJunContents.volunteerHours},
                            {months: 'July', kpi1: this.youthPRSportJulContents.kpi1, kpi2: this.youthPRSportJulContents.kpi2, kpi3: this.youthPRSportJulContents.kpi3, kpi4: this.youthPRSportJulContents.kpi4, kpi5: this.youthPRSportJulContents.kpi5, uniqueVol: this.youthPRSportJulContents.uniqueVolunteers, volHours: this.youthPRSportJulContents.volunteerHours},
                            {months: 'August', kpi1: this.youthPRSportAugContents.kpi1, kpi2: this.youthPRSportAugContents.kpi2, kpi3: this.youthPRSportAugContents.kpi3, kpi4: this.youthPRSportAugContents.kpi4, kpi5: this.youthPRSportAugContents.kpi5, uniqueVol: this.youthPRSportAugContents.uniqueVolunteers, volHours: this.youthPRSportAugContents.volunteerHours},
                            {months: 'September', kpi1: this.youthPRSportSepContents.kpi1, kpi2: this.youthPRSportSepContents.kpi2, kpi3: this.youthPRSportSepContents.kpi3, kpi4: this.youthPRSportSepContents.kpi4, kpi5: this.youthPRSportSepContents.kpi5, uniqueVol: this.youthPRSportSepContents.uniqueVolunteers, volHours: this.youthPRSportSepContents.volunteerHours},
                            {months: 'October', kpi1: this.youthPRSportOctContents.kpi1, kpi2: this.youthPRSportOctContents.kpi2, kpi3: this.youthPRSportOctContents.kpi3, kpi4: this.youthPRSportOctContents.kpi4, kpi5: this.youthPRSportOctContents.kpi5, uniqueVol: this.youthPRSportOctContents.uniqueVolunteers, volHours: this.youthPRSportOctContents.volunteerHours},
                            {months: 'November', kpi1: this.youthPRSportNovContents.kpi1, kpi2: this.youthPRSportNovContents.kpi2, kpi3: this.youthPRSportNovContents.kpi3, kpi4: this.youthPRSportNovContents.kpi4, kpi5: this.youthPRSportNovContents.kpi5, uniqueVol: this.youthPRSportNovContents.uniqueVolunteers, volHours: this.youthPRSportNovContents.volunteerHours},
                            {months: 'December',kpi1: this.youthPRSportDecContents.kpi1, kpi2: this.youthPRSportDecContents.kpi2, kpi3: this.youthPRSportDecContents.kpi3, kpi4: this.youthPRSportDecContents.kpi4, kpi5: this.youthPRSportDecContents.kpi5, uniqueVol: this.youthPRSportDecContents.uniqueVolunteers, volHours: this.youthPRSportDecContents.volunteerHours},
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
                            data: [{value: this.youthPRSportJanContents.budgetUsage}],
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
                                {value: this.youthPRSportJanContents.perCategory1, name: this.youthPRSportJanContents.expenseCategory1},
                                {value: this.youthPRSportJanContents.perCategory2, name: this.youthPRSportJanContents.expenseCategory2},
                                {value: this.youthPRSportJanContents.perCategory3, name: this.youthPRSportJanContents.expenseCategory3},
                                {value: this.youthPRSportJanContents.perCategory4, name: this.youthPRSportJanContents.expenseCategory4},
                                {value: this.youthPRSportJanContents.perCategory5, name: this.youthPRSportJanContents.expenseCategory5},
                                {value: this.youthPRSportJanContents.perCategory6, name: this.youthPRSportJanContents.expenseCategory6}
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
                            data: [{value: this.youthPRSportFebContents.budgetUsage}],
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
                                {value: this.youthPRSportFebContents.perCategory1, name: this.youthPRSportFebContents.expenseCategory1},
                                {value: this.youthPRSportFebContents.perCategory2, name: this.youthPRSportFebContents.expenseCategory2},
                                {value: this.youthPRSportFebContents.perCategory3, name: this.youthPRSportFebContents.expenseCategory3},
                                {value: this.youthPRSportFebContents.perCategory4, name: this.youthPRSportFebContents.expenseCategory4},
                                {value: this.youthPRSportFebContents.perCategory5, name: this.youthPRSportFebContents.expenseCategory5},
                                {value: this.youthPRSportFebContents.perCategory6, name: this.youthPRSportFebContents.expenseCategory6}
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
                            data: [{value: this.youthPRSportMarContents.budgetUsage}],
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
                                {value: this.youthPRSportMarContents.perCategory1, name: this.youthPRSportMarContents.expenseCategory1},
                                {value: this.youthPRSportMarContents.perCategory2, name: this.youthPRSportMarContents.expenseCategory2},
                                {value: this.youthPRSportMarContents.perCategory3, name: this.youthPRSportMarContents.expenseCategory3},
                                {value: this.youthPRSportMarContents.perCategory4, name: this.youthPRSportMarContents.expenseCategory4},
                                {value: this.youthPRSportMarContents.perCategory5, name: this.youthPRSportMarContents.expenseCategory5},
                                {value: this.youthPRSportMarContents.perCategory6, name: this.youthPRSportMarContents.expenseCategory6}
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
                            data: [{value: this.youthPRSportAprContents.budgetUsage}],
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
                                {value: this.youthPRSportAprContents.perCategory1, name: this.youthPRSportAprContents.expenseCategory1},
                                {value: this.youthPRSportAprContents.perCategory2, name: this.youthPRSportAprContents.expenseCategory2},
                                {value: this.youthPRSportAprContents.perCategory3, name: this.youthPRSportAprContents.expenseCategory3},
                                {value: this.youthPRSportAprContents.perCategory4, name: this.youthPRSportAprContents.expenseCategory4},
                                {value: this.youthPRSportAprContents.perCategory5, name: this.youthPRSportAprContents.expenseCategory5},
                                {value: this.youthPRSportAprContents.perCategory6, name: this.youthPRSportAprContents.expenseCategory6}  
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
                            data: [{value: this.youthPRSportMayContents.budgetUsage}],
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
                                {value: this.youthPRSportMayContents.perCategory1, name: this.youthPRSportMayContents.expenseCategory1},
                                {value: this.youthPRSportMayContents.perCategory2, name: this.youthPRSportMayContents.expenseCategory2},
                                {value: this.youthPRSportMayContents.perCategory3, name: this.youthPRSportMayContents.expenseCategory3},
                                {value: this.youthPRSportMayContents.perCategory4, name: this.youthPRSportMayContents.expenseCategory4},
                                {value: this.youthPRSportMayContents.perCategory5, name: this.youthPRSportMayContents.expenseCategory5},
                                {value: this.youthPRSportMayContents.perCategory6, name: this.youthPRSportMayContents.expenseCategory6}  
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
                            data: [{value: this.youthPRSportJunContents.budgetUsage}],
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
                                {value: this.youthPRSportJunContents.perCategory1, name: this.youthPRSportJunContents.expenseCategory1},
                                {value: this.youthPRSportJunContents.perCategory2, name: this.youthPRSportJunContents.expenseCategory2},
                                {value: this.youthPRSportJunContents.perCategory3, name: this.youthPRSportJunContents.expenseCategory3},
                                {value: this.youthPRSportJunContents.perCategory4, name: this.youthPRSportJunContents.expenseCategory4},
                                {value: this.youthPRSportJunContents.perCategory5, name: this.youthPRSportJunContents.expenseCategory5},
                                {value: this.youthPRSportJunContents.perCategory6, name: this.youthPRSportJunContents.expenseCategory6}  
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
                            data: [{value: this.youthPRSportJulContents.budgetUsage}],
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
                                {value: this.youthPRSportJulContents.perCategory1, name: this.youthPRSportJulContents.expenseCategory1},
                                {value: this.youthPRSportJulContents.perCategory2, name: this.youthPRSportJulContents.expenseCategory2},
                                {value: this.youthPRSportJulContents.perCategory3, name: this.youthPRSportJulContents.expenseCategory3},
                                {value: this.youthPRSportJulContents.perCategory4, name: this.youthPRSportJulContents.expenseCategory4},
                                {value: this.youthPRSportJulContents.perCategory5, name: this.youthPRSportJulContents.expenseCategory5},
                                {value: this.youthPRSportJulContents.perCategory6, name: this.youthPRSportJulContents.expenseCategory6}  
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
                            data: [{value: this.youthPRSportAugContents.budgetUsage}],
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
                                {value: this.youthPRSportAugContents.perCategory1, name: this.youthPRSportAugContents.expenseCategory1},
                                {value: this.youthPRSportAugContents.perCategory2, name: this.youthPRSportAugContents.expenseCategory2},
                                {value: this.youthPRSportAugContents.perCategory3, name: this.youthPRSportAugContents.expenseCategory3},
                                {value: this.youthPRSportAugContents.perCategory4, name: this.youthPRSportAugContents.expenseCategory4},
                                {value: this.youthPRSportAugContents.perCategory5, name: this.youthPRSportAugContents.expenseCategory5},
                                {value: this.youthPRSportAugContents.perCategory6, name: this.youthPRSportAugContents.expenseCategory6}  
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
                            data: [{value: this.youthPRSportSepContents.budgetUsage}],
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
                                {value: this.youthPRSportSepContents.perCategory1, name: this.youthPRSportSepContents.expenseCategory1},
                                {value: this.youthPRSportSepContents.perCategory2, name: this.youthPRSportSepContents.expenseCategory2},
                                {value: this.youthPRSportSepContents.perCategory3, name: this.youthPRSportSepContents.expenseCategory3},
                                {value: this.youthPRSportSepContents.perCategory4, name: this.youthPRSportSepContents.expenseCategory4},
                                {value: this.youthPRSportSepContents.perCategory5, name: this.youthPRSportSepContents.expenseCategory5},
                                {value: this.youthPRSportSepContents.perCategory6, name: this.youthPRSportSepContents.expenseCategory6}  
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
                            data: [{value: this.youthPRSportOctContents.budgetUsage}],
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
                                {value: this.youthPRSportOctContents.perCategory1, name: this.youthPRSportOctContents.expenseCategory1},
                                {value: this.youthPRSportOctContents.perCategory2, name: this.youthPRSportOctContents.expenseCategory2},
                                {value: this.youthPRSportOctContents.perCategory3, name: this.youthPRSportOctContents.expenseCategory3},
                                {value: this.youthPRSportOctContents.perCategory4, name: this.youthPRSportOctContents.expenseCategory4},
                                {value: this.youthPRSportOctContents.perCategory5, name: this.youthPRSportOctContents.expenseCategory5},
                                {value: this.youthPRSportOctContents.perCategory6, name: this.youthPRSportOctContents.expenseCategory6}  
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
                            data: [{value: this.youthPRSportNovContents.budgetUsage}],
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
                                {value: this.youthPRSportNovContents.perCategory1, name: this.youthPRSportNovContents.expenseCategory1},
                                {value: this.youthPRSportNovContents.perCategory2, name: this.youthPRSportNovContents.expenseCategory2},
                                {value: this.youthPRSportNovContents.perCategory3, name: this.youthPRSportNovContents.expenseCategory3},
                                {value: this.youthPRSportNovContents.perCategory4, name: this.youthPRSportNovContents.expenseCategory4},
                                {value: this.youthPRSportNovContents.perCategory5, name: this.youthPRSportNovContents.expenseCategory5},
                                {value: this.youthPRSportNovContents.perCategory6, name: this.youthPRSportNovContents.expenseCategory6}  
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
                            data: [{value: this.youthPRSportDecContents.budgetUsage}],
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
                                {value: this.youthPRSportDecContents.perCategory1, name: this.youthPRSportDecContents.expenseCategory1},
                                {value: this.youthPRSportDecContents.perCategory2, name: this.youthPRSportDecContents.expenseCategory2},
                                {value: this.youthPRSportDecContents.perCategory3, name: this.youthPRSportDecContents.expenseCategory3},
                                {value: this.youthPRSportDecContents.perCategory4, name: this.youthPRSportDecContents.expenseCategory4},
                                {value: this.youthPRSportDecContents.perCategory5, name: this.youthPRSportDecContents.expenseCategory5},
                                {value: this.youthPRSportDecContents.perCategory6, name: this.youthPRSportDecContents.expenseCategory6}
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
            var docyouthPRSportJanRef = db.collection("youthPRSport").doc("january");

            docyouthPRSportJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.youthPRSportJanContents = doc.data();
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
            var docyouthPRSportFebRef = db.collection("youthPRSport").doc("february");

            docyouthPRSportFebRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.youthPRSportFebContents = doc.data();
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
            var docyouthPRSportMarRef = db.collection("youthPRSport").doc("march");

            docyouthPRSportMarRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.youthPRSportMarContents = doc.data();
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
            var docyouthPRSportAprRef = db.collection("youthPRSport").doc("april1");

            docyouthPRSportAprRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.youthPRSportAprContents = doc.data();
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
            var docyouthPRSportMayRef = db.collection("youthPRSport").doc("may");

            docyouthPRSportMayRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.youthPRSportMayContents = doc.data();
                    this.totalExpenseMay();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    JUNE
            var docyouthPRSportJunRef = db.collection("youthPRSport").doc("june");

            docyouthPRSportJunRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.youthPRSportJunContents = doc.data();
                    this.totalExpenseJun();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    JULY
            var docyouthPRSportJulRef = db.collection("youthPRSport").doc("july");

            docyouthPRSportJulRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.youthPRSportJulContents = doc.data();
                    this.totalExpenseJul();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    AUGUST
            var docyouthPRSportAugRef = db.collection("youthPRSport").doc("august");

            docyouthPRSportAugRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.youthPRSportAugContents = doc.data();
                    this.totalExpenseAug();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    SEPTEMBER
            var docyouthPRSportSepRef = db.collection("youthPRSport").doc("september");

            docyouthPRSportSepRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.youthPRSportSepContents = doc.data();
                    this.totalExpenseSep();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    OCTOBER
            var docyouthPRSportOctRef = db.collection("youthPRSport").doc("october");

            docyouthPRSportOctRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.youthPRSportOctContents = doc.data();
                    this.totalExpenseOct();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    NOVEMBER
            var docyouthPRSportNovRef = db.collection("youthPRSport").doc("november");

            docyouthPRSportNovRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.youthPRSportNovContents = doc.data();
                    this.totalExpenseNov();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    DECEMBER
            var docyouthPRSportDecRef = db.collection("youthPRSport").doc("december");

            docyouthPRSportDecRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.youthPRSportDecContents = doc.data();
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
              return this.youthPRSportJanContents.expenses = getRealValue(this.youthPRSportJanContents.perCategory1) + getRealValue(this.youthPRSportJanContents.perCategory2) + getRealValue(this.youthPRSportJanContents.perCategory3) + getRealValue(this.youthPRSportJanContents.perCategory4) + getRealValue(this.youthPRSportJanContents.perCategory5) + getRealValue(this.youthPRSportJanContents.perCategory6)
              
            },
            cumulativeBudgetUsageJan(){
              const getRealValue = (val) => +val || val;
              return this.youthPRSportJanContents.budgetUsage = ((getRealValue(this.youthPRSportJanContents.expenses) / getRealValue(this.youthPRSportJanContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseFeb(){
              const getRealValue = (val) => +val || val;
              return this.youthPRSportFebContents.expenses = getRealValue(this.youthPRSportFebContents.perCategory1) + getRealValue(this.youthPRSportFebContents.perCategory2) + getRealValue(this.youthPRSportFebContents.perCategory3) + getRealValue(this.youthPRSportFebContents.perCategory4) + getRealValue(this.youthPRSportFebContents.perCategory5) + getRealValue(this.youthPRSportFebContents.perCategory6)
            },
            cumulativeBudgetUsageFeb(){
              const getRealValue = (val) => +val || val;
              return this.youthPRSportFebContents.budgetUsage = (((getRealValue(this.youthPRSportFebContents.expenses) + getRealValue(this.youthPRSportJanContents.expenses)) / getRealValue(this.youthPRSportFebContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseMar(){
              const getRealValue = (val) => +val || val;
              return this.youthPRSportMarContents.expenses = getRealValue(this.youthPRSportMarContents.perCategory1) + getRealValue(this.youthPRSportMarContents.perCategory2) + getRealValue(this.youthPRSportMarContents.perCategory3) + getRealValue(this.youthPRSportMarContents.perCategory4) + getRealValue(this.youthPRSportMarContents.perCategory5) + getRealValue(this.youthPRSportMarContents.perCategory6)
            },
            cumulativeBudgetUsageMar(){
              const getRealValue = (val) => +val || val;
              return this.youthPRSportMarContents.budgetUsage = (((getRealValue(this.youthPRSportMarContents.expenses) + getRealValue(this.youthPRSportFebContents.expenses) + getRealValue(this.youthPRSportJanContents.expenses)) / getRealValue(this.youthPRSportMarContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseApr(){
              const getRealValue = (val) => +val || val;
              return this.youthPRSportAprContents.expenses = getRealValue(this.youthPRSportAprContents.perCategory1) + getRealValue(this.youthPRSportAprContents.perCategory2) + getRealValue(this.youthPRSportAprContents.perCategory3) + getRealValue(this.youthPRSportAprContents.perCategory4) + getRealValue(this.youthPRSportAprContents.perCategory5) + getRealValue(this.youthPRSportAprContents.perCategory6)
            },
            cumulativeBudgetUsageApr(){
              const getRealValue = (val) => +val || val;
              return this.youthPRSportAprContents.budgetUsage = (((getRealValue(this.youthPRSportAprContents.expenses) + getRealValue(this.youthPRSportMarContents.expenses) + getRealValue(this.youthPRSportFebContents.expenses) + getRealValue(this.youthPRSportJanContents.expenses)) / getRealValue(this.youthPRSportAprContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseMay(){
              const getRealValue = (val) => +val || val;
              return this.youthPRSportMayContents.expenses = getRealValue(this.youthPRSportMayContents.perCategory1) + getRealValue(this.youthPRSportMayContents.perCategory2) + getRealValue(this.youthPRSportMayContents.perCategory3) + getRealValue(this.youthPRSportMayContents.perCategory4) + getRealValue(this.youthPRSportMayContents.perCategory5) + getRealValue(this.youthPRSportMayContents.perCategory6)
            },
            cumulativeBudgetUsageMay(){
              const getRealValue = (val) => +val || val;
              return this.youthPRSportMayContents.budgetUsage = (((getRealValue(this.youthPRSportMayContents.expenses) + getRealValue(this.youthPRSportAprContents.expenses) + getRealValue(this.youthPRSportMarContents.expenses) + getRealValue(this.youthPRSportFebContents.expenses) + getRealValue(this.youthPRSportJanContents.expenses)) / getRealValue(this.youthPRSportMayContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseJun(){
              const getRealValue = (val) => +val || val;
              return this.youthPRSportJunContents.expenses = getRealValue(this.youthPRSportJunContents.perCategory1) + getRealValue(this.youthPRSportJunContents.perCategory2) + getRealValue(this.youthPRSportJunContents.perCategory3) + getRealValue(this.youthPRSportJunContents.perCategory4) + getRealValue(this.youthPRSportJunContents.perCategory5) + getRealValue(this.youthPRSportJunContents.perCategory6)
            },
            cumulativeBudgetUsageJun(){
              const getRealValue = (val) => +val || val;
              return this.youthPRSportJunContents.budgetUsage = (((getRealValue(this.youthPRSportJunContents.expenses) + getRealValue(this.youthPRSportMayContents.expenses) + getRealValue(this.youthPRSportAprContents.expenses) + getRealValue(this.youthPRSportMarContents.expenses) + getRealValue(this.youthPRSportFebContents.expenses) + getRealValue(this.youthPRSportJanContents.expenses)) / getRealValue(this.youthPRSportJunContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseJul(){
              const getRealValue = (val) => +val || val;
              return this.youthPRSportJulContents.expenses = getRealValue(this.youthPRSportJulContents.perCategory1) + getRealValue(this.youthPRSportJulContents.perCategory2) + getRealValue(this.youthPRSportJulContents.perCategory3) + getRealValue(this.youthPRSportJulContents.perCategory4) + getRealValue(this.youthPRSportJulContents.perCategory5) + getRealValue(this.youthPRSportJulContents.perCategory6)
            },
            cumulativeBudgetUsageJul(){
              const getRealValue = (val) => +val || val;
              return this.youthPRSportJulContents.budgetUsage = (((getRealValue(this.youthPRSportJulContents.expenses) + getRealValue(this.youthPRSportJunContents.expenses) + getRealValue(this.youthPRSportMayContents.expenses) + getRealValue(this.youthPRSportAprContents.expenses) + getRealValue(this.youthPRSportMarContents.expenses) + getRealValue(this.youthPRSportFebContents.expenses) + getRealValue(this.youthPRSportJanContents.expenses)) / getRealValue(this.youthPRSportJulContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseAug(){
              const getRealValue = (val) => +val || val;
              return this.youthPRSportAugContents.expenses = getRealValue(this.youthPRSportAugContents.perCategory1) + getRealValue(this.youthPRSportAugContents.perCategory2) + getRealValue(this.youthPRSportAugContents.perCategory3) + getRealValue(this.youthPRSportAugContents.perCategory4) + getRealValue(this.youthPRSportAugContents.perCategory5) + getRealValue(this.youthPRSportAugContents.perCategory6)
            },
            cumulativeBudgetUsageAug(){
              const getRealValue = (val) => +val || val;
              return this.youthPRSportAugContents.budgetUsage = (((getRealValue(this.youthPRSportAugContents.expenses) + getRealValue(this.youthPRSportJulContents.expenses) + getRealValue(this.youthPRSportJunContents.expenses) + getRealValue(this.youthPRSportMayContents.expenses) + getRealValue(this.youthPRSportAprContents.expenses) + getRealValue(this.youthPRSportMarContents.expenses) + getRealValue(this.youthPRSportFebContents.expenses) + getRealValue(this.youthPRSportJanContents.expenses)) / getRealValue(this.youthPRSportAugContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseSep(){
              const getRealValue = (val) => +val || val;
              return this.youthPRSportSepContents.expenses = getRealValue(this.youthPRSportSepContents.perCategory1) + getRealValue(this.youthPRSportSepContents.perCategory2) + getRealValue(this.youthPRSportSepContents.perCategory3) + getRealValue(this.youthPRSportSepContents.perCategory4) + getRealValue(this.youthPRSportSepContents.perCategory5) + getRealValue(this.youthPRSportSepContents.perCategory6)
            },
            cumulativeBudgetUsageSep(){
              const getRealValue = (val) => +val || val;
              return this.youthPRSportSepContents.budgetUsage = (((getRealValue(this.youthPRSportSepContents.expenses) + getRealValue(this.youthPRSportAugContents.expenses) + getRealValue(this.youthPRSportJulContents.expenses) + getRealValue(this.youthPRSportJunContents.expenses) + getRealValue(this.youthPRSportMayContents.expenses) + getRealValue(this.youthPRSportAprContents.expenses) + getRealValue(this.youthPRSportMarContents.expenses) + getRealValue(this.youthPRSportFebContents.expenses) + getRealValue(this.youthPRSportJanContents.expenses)) / getRealValue(this.youthPRSportSepContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseOct(){
              const getRealValue = (val) => +val || val;
              return this.youthPRSportOctContents.expenses = getRealValue(this.youthPRSportOctContents.perCategory1) + getRealValue(this.youthPRSportOctContents.perCategory2) + getRealValue(this.youthPRSportOctContents.perCategory3) + getRealValue(this.youthPRSportOctContents.perCategory4) + getRealValue(this.youthPRSportOctContents.perCategory5) + getRealValue(this.youthPRSportOctContents.perCategory6)
            },
            cumulativeBudgetUsageOct(){
              const getRealValue = (val) => +val || val;
              return this.youthPRSportOctContents.budgetUsage = (((getRealValue(this.youthPRSportOctContents.expenses) + getRealValue(this.youthPRSportSepContents.expenses) + getRealValue(this.youthPRSportAugContents.expenses) + getRealValue(this.youthPRSportJulContents.expenses) + getRealValue(this.youthPRSportJunContents.expenses) + getRealValue(this.youthPRSportMayContents.expenses) + getRealValue(this.youthPRSportAprContents.expenses) + getRealValue(this.youthPRSportMarContents.expenses) + getRealValue(this.youthPRSportFebContents.expenses) + getRealValue(this.youthPRSportJanContents.expenses)) / getRealValue(this.youthPRSportOctContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseNov(){
              const getRealValue = (val) => +val || val;
              return this.youthPRSportNovContents.expenses = getRealValue(this.youthPRSportNovContents.perCategory1) + getRealValue(this.youthPRSportNovContents.perCategory2) + getRealValue(this.youthPRSportNovContents.perCategory3) + getRealValue(this.youthPRSportNovContents.perCategory4) + getRealValue(this.youthPRSportNovContents.perCategory5) + getRealValue(this.youthPRSportNovContents.perCategory6)
            },
            cumulativeBudgetUsageNov(){
              const getRealValue = (val) => +val || val;
              return this.youthPRSportNovContents.budgetUsage = (((getRealValue(this.youthPRSportNovContents.expenses) + getRealValue(this.youthPRSportOctContents.expenses) + getRealValue(this.youthPRSportSepContents.expenses) + getRealValue(this.youthPRSportAugContents.expenses) + getRealValue(this.youthPRSportJulContents.expenses) + getRealValue(this.youthPRSportJunContents.expenses) + getRealValue(this.youthPRSportMayContents.expenses) + getRealValue(this.youthPRSportAprContents.expenses) + getRealValue(this.youthPRSportMarContents.expenses) + getRealValue(this.youthPRSportFebContents.expenses) + getRealValue(this.youthPRSportJanContents.expenses)) / getRealValue(this.youthPRSportNovContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseDec(){
              const getRealValue = (val) => +val || val;
              return this.youthPRSportDecContents.expenses = getRealValue(this.youthPRSportDecContents.perCategory1) + getRealValue(this.youthPRSportDecContents.perCategory2) + getRealValue(this.youthPRSportDecContents.perCategory3) + getRealValue(this.youthPRSportDecContents.perCategory4) + getRealValue(this.youthPRSportDecContents.perCategory5) + getRealValue(this.youthPRSportDecContents.perCategory6)
            },
            cumulativeBudgetUsageDec(){
              const getRealValue = (val) => +val || val;
              return this.youthPRSportDecContents.budgetUsage = (((getRealValue(this.youthPRSportDecContents.expenses) + getRealValue(this.youthPRSportNovContents.expenses) + getRealValue(this.youthPRSportOctContents.expenses) + getRealValue(this.youthPRSportSepContents.expenses) + getRealValue(this.youthPRSportAugContents.expenses) + getRealValue(this.youthPRSportJulContents.expenses) + getRealValue(this.youthPRSportJunContents.expenses) + getRealValue(this.youthPRSportMayContents.expenses) + getRealValue(this.youthPRSportAprContents.expenses) + getRealValue(this.youthPRSportMarContents.expenses) + getRealValue(this.youthPRSportFebContents.expenses) + getRealValue(this.youthPRSportJanContents.expenses)) / getRealValue(this.youthPRSportDecContents.actualBudget))*100).toFixed(2)
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
