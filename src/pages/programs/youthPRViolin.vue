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
                              :color="(youthPRViolinJanContents.kpi1 == null)?'grey-2':(youthPRViolinJanContents.kpi1 >= '0' && youthPRViolinJanContents.kpi1 <= '3.6')?'red':(youthPRViolinJanContents.kpi1 > '3.6' && youthPRViolinJanContents.kpi1 <= '4.8')?'orange':(youthPRViolinJanContents.kpi1 > '4.8' && youthPRViolinJanContents.kpi1 < '6')?'yellow-7':(youthPRViolinJanContents.kpi1 >= '6' && youthPRViolinJanContents.kpi1 < '7.2')?'green':(youthPRViolinJanContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJanContents.kpi2 == null)?'grey-2':(youthPRViolinJanContents.kpi2 >= '0' && youthPRViolinJanContents.kpi2 <= '5.6')?'red':(youthPRViolinJanContents.kpi2 > '5.6' && youthPRViolinJanContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinJanContents.kpi2 > '7.466666667' && youthPRViolinJanContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinJanContents.kpi2 >= '9.333333333' && youthPRViolinJanContents.kpi2 < '11.2')?'green':(youthPRViolinJanContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJanContents.kpi3 == null)?'grey-2':(youthPRViolinJanContents.kpi3 >= '0' && youthPRViolinJanContents.kpi3 <= '2.4')?'red':(youthPRViolinJanContents.kpi3 > '2.4' && youthPRViolinJanContents.kpi3 <= '3.2')?'orange':(youthPRViolinJanContents.kpi3 > '3.2' && youthPRViolinJanContents.kpi3 < '4')?'yellow-7':(youthPRViolinJanContents.kpi3 >= '4' && youthPRViolinJanContents.kpi3 < '4.8')?'green':(youthPRViolinJanContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJanContents.kpi4 == null)?'grey-2':(youthPRViolinJanContents.kpi4 >= '0' && youthPRViolinJanContents.kpi4 <= '4.6')?'red':(youthPRViolinJanContents.kpi4 > '4.6' && youthPRViolinJanContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinJanContents.kpi4 > '6.133333333' && youthPRViolinJanContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinJanContents.kpi4 >= '7.666666667' && youthPRViolinJanContents.kpi4 < '9.2')?'green':(youthPRViolinJanContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJanContents.kpi5 == null)?'grey-2':(youthPRViolinJanContents.kpi5 >= '0' && youthPRViolinJanContents.kpi5 <= '1.6')?'red':(youthPRViolinJanContents.kpi5 > '1.6' && youthPRViolinJanContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinJanContents.kpi5 > '2.133333333' && youthPRViolinJanContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinJanContents.kpi5 >= '2.666666667' && youthPRViolinJanContents.kpi5 < '3.2')?'green':(youthPRViolinJanContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi5}}
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
                              :color="(youthPRViolinFebContents.kpi1 == null)?'grey-2':(youthPRViolinFebContents.kpi1 >= '0' && youthPRViolinFebContents.kpi1 <= '3.6')?'red':(youthPRViolinFebContents.kpi1 > '3.6' && youthPRViolinFebContents.kpi1 <= '4.8')?'orange':(youthPRViolinFebContents.kpi1 > '4.8' && youthPRViolinFebContents.kpi1 < '6')?'yellow-7':(youthPRViolinFebContents.kpi1 >= '6' && youthPRViolinFebContents.kpi1 < '7.2')?'green':(youthPRViolinFebContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinFebContents.kpi2 == null)?'grey-2':(youthPRViolinFebContents.kpi2 >= '0' && youthPRViolinFebContents.kpi2 <= '5.6')?'red':(youthPRViolinFebContents.kpi2 > '5.6' && youthPRViolinFebContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinFebContents.kpi2 > '7.466666667' && youthPRViolinFebContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinFebContents.kpi2 >= '9.333333333' && youthPRViolinFebContents.kpi2 < '11.2')?'green':(youthPRViolinFebContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinFebContents.kpi3 == null)?'grey-2':(youthPRViolinFebContents.kpi3 >= '0' && youthPRViolinFebContents.kpi3 <= '2.4')?'red':(youthPRViolinFebContents.kpi3 > '2.4' && youthPRViolinFebContents.kpi3 <= '3.2')?'orange':(youthPRViolinFebContents.kpi3 > '3.2' && youthPRViolinFebContents.kpi3 < '4')?'yellow-7':(youthPRViolinFebContents.kpi3 >= '4' && youthPRViolinFebContents.kpi3 < '4.8')?'green':(youthPRViolinFebContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinFebContents.kpi4 == null)?'grey-2':(youthPRViolinFebContents.kpi4 >= '0' && youthPRViolinFebContents.kpi4 <= '4.6')?'red':(youthPRViolinFebContents.kpi4 > '4.6' && youthPRViolinFebContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinFebContents.kpi4 > '6.133333333' && youthPRViolinFebContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinFebContents.kpi4 >= '7.666666667' && youthPRViolinFebContents.kpi4 < '9.2')?'green':(youthPRViolinFebContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinFebContents.kpi5 == null)?'grey-2':(youthPRViolinFebContents.kpi5 >= '0' && youthPRViolinFebContents.kpi5 <= '1.6')?'red':(youthPRViolinFebContents.kpi5 > '1.6' && youthPRViolinFebContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinFebContents.kpi5 > '2.133333333' && youthPRViolinFebContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinFebContents.kpi5 >= '2.666666667' && youthPRViolinFebContents.kpi5 < '3.2')?'green':(youthPRViolinFebContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi5}}
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
                              :color="(youthPRViolinMarContents.kpi1 == null)?'grey-2':(youthPRViolinMarContents.kpi1 >= '0' && youthPRViolinMarContents.kpi1 <= '3.6')?'red':(youthPRViolinMarContents.kpi1 > '3.6' && youthPRViolinMarContents.kpi1 <= '4.8')?'orange':(youthPRViolinMarContents.kpi1 > '4.8' && youthPRViolinMarContents.kpi1 < '6')?'yellow-7':(youthPRViolinMarContents.kpi1 >= '6' && youthPRViolinMarContents.kpi1 < '7.2')?'green':(youthPRViolinMarContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMarContents.kpi2 == null)?'grey-2':(youthPRViolinMarContents.kpi2 >= '0' && youthPRViolinMarContents.kpi2 <= '5.6')?'red':(youthPRViolinMarContents.kpi2 > '5.6' && youthPRViolinMarContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinMarContents.kpi2 > '7.466666667' && youthPRViolinMarContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinMarContents.kpi2 >= '9.333333333' && youthPRViolinMarContents.kpi2 < '11.2')?'green':(youthPRViolinMarContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMarContents.kpi3 == null)?'grey-2':(youthPRViolinMarContents.kpi3 >= '0' && youthPRViolinMarContents.kpi3 <= '2.4')?'red':(youthPRViolinMarContents.kpi3 > '2.4' && youthPRViolinMarContents.kpi3 <= '3.2')?'orange':(youthPRViolinMarContents.kpi3 > '3.2' && youthPRViolinMarContents.kpi3 < '4')?'yellow-7':(youthPRViolinMarContents.kpi3 >= '4' && youthPRViolinMarContents.kpi3 < '4.8')?'green':(youthPRViolinMarContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMarContents.kpi4 == null)?'grey-2':(youthPRViolinMarContents.kpi4 >= '0' && youthPRViolinMarContents.kpi4 <= '4.6')?'red':(youthPRViolinMarContents.kpi4 > '4.6' && youthPRViolinMarContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinMarContents.kpi4 > '6.133333333' && youthPRViolinMarContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinMarContents.kpi4 >= '7.666666667' && youthPRViolinMarContents.kpi4 < '9.2')?'green':(youthPRViolinMarContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMarContents.kpi5 == null)?'grey-2':(youthPRViolinMarContents.kpi5 >= '0' && youthPRViolinMarContents.kpi5 <= '1.6')?'red':(youthPRViolinMarContents.kpi5 > '1.6' && youthPRViolinMarContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinMarContents.kpi5 > '2.133333333' && youthPRViolinMarContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinMarContents.kpi5 >= '2.666666667' && youthPRViolinMarContents.kpi5 < '3.2')?'green':(youthPRViolinMarContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi5}}
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
                              :color="(youthPRViolinAprContents.kpi1 == null)?'grey-2':(youthPRViolinAprContents.kpi1 >= '0' && youthPRViolinAprContents.kpi1 <= '3.6')?'red':(youthPRViolinAprContents.kpi1 > '3.6' && youthPRViolinAprContents.kpi1 <= '4.8')?'orange':(youthPRViolinAprContents.kpi1 > '4.8' && youthPRViolinAprContents.kpi1 < '6')?'yellow-7':(youthPRViolinAprContents.kpi1 >= '6' && youthPRViolinAprContents.kpi1 < '7.2')?'green':(youthPRViolinAprContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAprContents.kpi2 == null)?'grey-2':(youthPRViolinAprContents.kpi2 >= '0' && youthPRViolinAprContents.kpi2 <= '5.6')?'red':(youthPRViolinAprContents.kpi2 > '5.6' && youthPRViolinAprContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinAprContents.kpi2 > '7.466666667' && youthPRViolinAprContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinAprContents.kpi2 >= '9.333333333' && youthPRViolinAprContents.kpi2 < '11.2')?'green':(youthPRViolinAprContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAprContents.kpi3 == null)?'grey-2':(youthPRViolinAprContents.kpi3 >= '0' && youthPRViolinAprContents.kpi3 <= '2.4')?'red':(youthPRViolinAprContents.kpi3 > '2.4' && youthPRViolinAprContents.kpi3 <= '3.2')?'orange':(youthPRViolinAprContents.kpi3 > '3.2' && youthPRViolinAprContents.kpi3 < '4')?'yellow-7':(youthPRViolinAprContents.kpi3 >= '4' && youthPRViolinAprContents.kpi3 < '4.8')?'green':(youthPRViolinAprContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAprContents.kpi4 == null)?'grey-2':(youthPRViolinAprContents.kpi4 >= '0' && youthPRViolinAprContents.kpi4 <= '4.6')?'red':(youthPRViolinAprContents.kpi4 > '4.6' && youthPRViolinAprContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinAprContents.kpi4 > '6.133333333' && youthPRViolinAprContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinAprContents.kpi4 >= '7.666666667' && youthPRViolinAprContents.kpi4 < '9.2')?'green':(youthPRViolinAprContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAprContents.kpi5 == null)?'grey-2':(youthPRViolinAprContents.kpi5 >= '0' && youthPRViolinAprContents.kpi5 <= '1.6')?'red':(youthPRViolinAprContents.kpi5 > '1.6' && youthPRViolinAprContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinAprContents.kpi5 > '2.133333333' && youthPRViolinAprContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinAprContents.kpi5 >= '2.666666667' && youthPRViolinAprContents.kpi5 < '3.2')?'green':(youthPRViolinAprContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi5}}
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
                              :color="(youthPRViolinMayContents.kpi1 == null)?'grey-2':(youthPRViolinMayContents.kpi1 >= '0' && youthPRViolinMayContents.kpi1 <= '3.6')?'red':(youthPRViolinMayContents.kpi1 > '3.6' && youthPRViolinMayContents.kpi1 <= '4.8')?'orange':(youthPRViolinMayContents.kpi1 > '4.8' && youthPRViolinMayContents.kpi1 < '6')?'yellow-7':(youthPRViolinMayContents.kpi1 >= '6' && youthPRViolinMayContents.kpi1 < '7.2')?'green':(youthPRViolinMayContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMayContents.kpi2 == null)?'grey-2':(youthPRViolinMayContents.kpi2 >= '0' && youthPRViolinMayContents.kpi2 <= '5.6')?'red':(youthPRViolinMayContents.kpi2 > '5.6' && youthPRViolinMayContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinMayContents.kpi2 > '7.466666667' && youthPRViolinMayContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinMayContents.kpi2 >= '9.333333333' && youthPRViolinMayContents.kpi2 < '11.2')?'green':(youthPRViolinMayContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMayContents.kpi3 == null)?'grey-2':(youthPRViolinMayContents.kpi3 >= '0' && youthPRViolinMayContents.kpi3 <= '2.4')?'red':(youthPRViolinMayContents.kpi3 > '2.4' && youthPRViolinMayContents.kpi3 <= '3.2')?'orange':(youthPRViolinMayContents.kpi3 > '3.2' && youthPRViolinMayContents.kpi3 < '4')?'yellow-7':(youthPRViolinMayContents.kpi3 >= '4' && youthPRViolinMayContents.kpi3 < '4.8')?'green':(youthPRViolinMayContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMayContents.kpi4 == null)?'grey-2':(youthPRViolinMayContents.kpi4 >= '0' && youthPRViolinMayContents.kpi4 <= '4.6')?'red':(youthPRViolinMayContents.kpi4 > '4.6' && youthPRViolinMayContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinMayContents.kpi4 > '6.133333333' && youthPRViolinMayContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinMayContents.kpi4 >= '7.666666667' && youthPRViolinMayContents.kpi4 < '9.2')?'green':(youthPRViolinMayContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMayContents.kpi5 == null)?'grey-2':(youthPRViolinMayContents.kpi5 >= '0' && youthPRViolinMayContents.kpi5 <= '1.6')?'red':(youthPRViolinMayContents.kpi5 > '1.6' && youthPRViolinMayContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinMayContents.kpi5 > '2.133333333' && youthPRViolinMayContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinMayContents.kpi5 >= '2.666666667' && youthPRViolinMayContents.kpi5 < '3.2')?'green':(youthPRViolinMayContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi5}}
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
                              :color="(youthPRViolinJunContents.kpi1 == null)?'grey-2':(youthPRViolinJunContents.kpi1 >= '0' && youthPRViolinJunContents.kpi1 <= '3.6')?'red':(youthPRViolinJunContents.kpi1 > '3.6' && youthPRViolinJunContents.kpi1 <= '4.8')?'orange':(youthPRViolinJunContents.kpi1 > '4.8' && youthPRViolinJunContents.kpi1 < '6')?'yellow-7':(youthPRViolinJunContents.kpi1 >= '6' && youthPRViolinJunContents.kpi1 < '7.2')?'green':(youthPRViolinJunContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJunContents.kpi2 == null)?'grey-2':(youthPRViolinJunContents.kpi2 >= '0' && youthPRViolinJunContents.kpi2 <= '5.6')?'red':(youthPRViolinJunContents.kpi2 > '5.6' && youthPRViolinJunContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinJunContents.kpi2 > '7.466666667' && youthPRViolinJunContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinJunContents.kpi2 >= '9.333333333' && youthPRViolinJunContents.kpi2 < '11.2')?'green':(youthPRViolinJunContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJunContents.kpi3 == null)?'grey-2':(youthPRViolinJunContents.kpi3 >= '0' && youthPRViolinJunContents.kpi3 <= '2.4')?'red':(youthPRViolinJunContents.kpi3 > '2.4' && youthPRViolinJunContents.kpi3 <= '3.2')?'orange':(youthPRViolinJunContents.kpi3 > '3.2' && youthPRViolinJunContents.kpi3 < '4')?'yellow-7':(youthPRViolinJunContents.kpi3 >= '4' && youthPRViolinJunContents.kpi3 < '4.8')?'green':(youthPRViolinJunContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJunContents.kpi4 == null)?'grey-2':(youthPRViolinJunContents.kpi4 >= '0' && youthPRViolinJunContents.kpi4 <= '4.6')?'red':(youthPRViolinJunContents.kpi4 > '4.6' && youthPRViolinJunContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinJunContents.kpi4 > '6.133333333' && youthPRViolinJunContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinJunContents.kpi4 >= '7.666666667' && youthPRViolinJunContents.kpi4 < '9.2')?'green':(youthPRViolinJunContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJunContents.kpi5 == null)?'grey-2':(youthPRViolinJunContents.kpi5 >= '0' && youthPRViolinJunContents.kpi5 <= '1.6')?'red':(youthPRViolinJunContents.kpi5 > '1.6' && youthPRViolinJunContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinJunContents.kpi5 > '2.133333333' && youthPRViolinJunContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinJunContents.kpi5 >= '2.666666667' && youthPRViolinJunContents.kpi5 < '3.2')?'green':(youthPRViolinJunContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi5}}
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
                              :color="(youthPRViolinJulContents.kpi1 == null)?'grey-2':(youthPRViolinJulContents.kpi1 >= '0' && youthPRViolinJulContents.kpi1 <= '3.6')?'red':(youthPRViolinJulContents.kpi1 > '3.6' && youthPRViolinJulContents.kpi1 <= '4.8')?'orange':(youthPRViolinJulContents.kpi1 > '4.8' && youthPRViolinJulContents.kpi1 < '6')?'yellow-7':(youthPRViolinJulContents.kpi1 >= '6' && youthPRViolinJulContents.kpi1 < '7.2')?'green':(youthPRViolinJulContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJulContents.kpi2 == null)?'grey-2':(youthPRViolinJulContents.kpi2 >= '0' && youthPRViolinJulContents.kpi2 <= '5.6')?'red':(youthPRViolinJulContents.kpi2 > '5.6' && youthPRViolinJulContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinJulContents.kpi2 > '7.466666667' && youthPRViolinJulContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinJulContents.kpi2 >= '9.333333333' && youthPRViolinJulContents.kpi2 < '11.2')?'green':(youthPRViolinJulContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJulContents.kpi3 == null)?'grey-2':(youthPRViolinJulContents.kpi3 >= '0' && youthPRViolinJulContents.kpi3 <= '2.4')?'red':(youthPRViolinJulContents.kpi3 > '2.4' && youthPRViolinJulContents.kpi3 <= '3.2')?'orange':(youthPRViolinJulContents.kpi3 > '3.2' && youthPRViolinJulContents.kpi3 < '4')?'yellow-7':(youthPRViolinJulContents.kpi3 >= '4' && youthPRViolinJulContents.kpi3 < '4.8')?'green':(youthPRViolinJulContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJulContents.kpi4 == null)?'grey-2':(youthPRViolinJulContents.kpi4 >= '0' && youthPRViolinJulContents.kpi4 <= '4.6')?'red':(youthPRViolinJulContents.kpi4 > '4.6' && youthPRViolinJulContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinJulContents.kpi4 > '6.133333333' && youthPRViolinJulContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinJulContents.kpi4 >= '7.666666667' && youthPRViolinJulContents.kpi4 < '9.2')?'green':(youthPRViolinJulContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJulContents.kpi5 == null)?'grey-2':(youthPRViolinJulContents.kpi5 >= '0' && youthPRViolinJulContents.kpi5 <= '1.6')?'red':(youthPRViolinJulContents.kpi5 > '1.6' && youthPRViolinJulContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinJulContents.kpi5 > '2.133333333' && youthPRViolinJulContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinJulContents.kpi5 >= '2.666666667' && youthPRViolinJulContents.kpi5 < '3.2')?'green':(youthPRViolinJulContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi5}}
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
                              :color="(youthPRViolinAugContents.kpi1 == null)?'grey-2':(youthPRViolinAugContents.kpi1 >= '0' && youthPRViolinAugContents.kpi1 <= '3.6')?'red':(youthPRViolinAugContents.kpi1 > '3.6' && youthPRViolinAugContents.kpi1 <= '4.8')?'orange':(youthPRViolinAugContents.kpi1 > '4.8' && youthPRViolinAugContents.kpi1 < '6')?'yellow-7':(youthPRViolinAugContents.kpi1 >= '6' && youthPRViolinAugContents.kpi1 < '7.2')?'green':(youthPRViolinAugContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAugContents.kpi2 == null)?'grey-2':(youthPRViolinAugContents.kpi2 >= '0' && youthPRViolinAugContents.kpi2 <= '5.6')?'red':(youthPRViolinAugContents.kpi2 > '5.6' && youthPRViolinAugContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinAugContents.kpi2 > '7.466666667' && youthPRViolinAugContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinAugContents.kpi2 >= '9.333333333' && youthPRViolinAugContents.kpi2 < '11.2')?'green':(youthPRViolinAugContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAugContents.kpi3 == null)?'grey-2':(youthPRViolinAugContents.kpi3 >= '0' && youthPRViolinAugContents.kpi3 <= '2.4')?'red':(youthPRViolinAugContents.kpi3 > '2.4' && youthPRViolinAugContents.kpi3 <= '3.2')?'orange':(youthPRViolinAugContents.kpi3 > '3.2' && youthPRViolinAugContents.kpi3 < '4')?'yellow-7':(youthPRViolinAugContents.kpi3 >= '4' && youthPRViolinAugContents.kpi3 < '4.8')?'green':(youthPRViolinAugContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAugContents.kpi4 == null)?'grey-2':(youthPRViolinAugContents.kpi4 >= '0' && youthPRViolinAugContents.kpi4 <= '4.6')?'red':(youthPRViolinAugContents.kpi4 > '4.6' && youthPRViolinAugContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinAugContents.kpi4 > '6.133333333' && youthPRViolinAugContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinAugContents.kpi4 >= '7.666666667' && youthPRViolinAugContents.kpi4 < '9.2')?'green':(youthPRViolinAugContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAugContents.kpi5 == null)?'grey-2':(youthPRViolinAugContents.kpi5 >= '0' && youthPRViolinAugContents.kpi5 <= '1.6')?'red':(youthPRViolinAugContents.kpi5 > '1.6' && youthPRViolinAugContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinAugContents.kpi5 > '2.133333333' && youthPRViolinAugContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinAugContents.kpi5 >= '2.666666667' && youthPRViolinAugContents.kpi5 < '3.2')?'green':(youthPRViolinAugContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi5}}
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
                              :color="(youthPRViolinSepContents.kpi1 == null)?'grey-2':(youthPRViolinSepContents.kpi1 >= '0' && youthPRViolinSepContents.kpi1 <= '3.6')?'red':(youthPRViolinSepContents.kpi1 > '3.6' && youthPRViolinSepContents.kpi1 <= '4.8')?'orange':(youthPRViolinSepContents.kpi1 > '4.8' && youthPRViolinSepContents.kpi1 < '6')?'yellow-7':(youthPRViolinSepContents.kpi1 >= '6' && youthPRViolinSepContents.kpi1 < '7.2')?'green':(youthPRViolinSepContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinSepContents.kpi2 == null)?'grey-2':(youthPRViolinSepContents.kpi2 >= '0' && youthPRViolinSepContents.kpi2 <= '5.6')?'red':(youthPRViolinSepContents.kpi2 > '5.6' && youthPRViolinSepContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinSepContents.kpi2 > '7.466666667' && youthPRViolinSepContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinSepContents.kpi2 >= '9.333333333' && youthPRViolinSepContents.kpi2 < '11.2')?'green':(youthPRViolinSepContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinSepContents.kpi3 == null)?'grey-2':(youthPRViolinSepContents.kpi3 >= '0' && youthPRViolinSepContents.kpi3 <= '2.4')?'red':(youthPRViolinSepContents.kpi3 > '2.4' && youthPRViolinSepContents.kpi3 <= '3.2')?'orange':(youthPRViolinSepContents.kpi3 > '3.2' && youthPRViolinSepContents.kpi3 < '4')?'yellow-7':(youthPRViolinSepContents.kpi3 >= '4' && youthPRViolinSepContents.kpi3 < '4.8')?'green':(youthPRViolinSepContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinSepContents.kpi4 == null)?'grey-2':(youthPRViolinSepContents.kpi4 >= '0' && youthPRViolinSepContents.kpi4 <= '4.6')?'red':(youthPRViolinSepContents.kpi4 > '4.6' && youthPRViolinSepContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinSepContents.kpi4 > '6.133333333' && youthPRViolinSepContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinSepContents.kpi4 >= '7.666666667' && youthPRViolinSepContents.kpi4 < '9.2')?'green':(youthPRViolinSepContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinSepContents.kpi5 == null)?'grey-2':(youthPRViolinSepContents.kpi5 >= '0' && youthPRViolinSepContents.kpi5 <= '1.6')?'red':(youthPRViolinSepContents.kpi5 > '1.6' && youthPRViolinSepContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinSepContents.kpi5 > '2.133333333' && youthPRViolinSepContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinSepContents.kpi5 >= '2.666666667' && youthPRViolinSepContents.kpi5 < '3.2')?'green':(youthPRViolinSepContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi5}}
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
                              :color="(youthPRViolinOctContents.kpi1 == null)?'grey-2':(youthPRViolinOctContents.kpi1 >= '0' && youthPRViolinOctContents.kpi1 <= '3.6')?'red':(youthPRViolinOctContents.kpi1 > '3.6' && youthPRViolinOctContents.kpi1 <= '4.8')?'orange':(youthPRViolinOctContents.kpi1 > '4.8' && youthPRViolinOctContents.kpi1 < '6')?'yellow-7':(youthPRViolinOctContents.kpi1 >= '6' && youthPRViolinOctContents.kpi1 < '7.2')?'green':(youthPRViolinOctContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinOctContents.kpi2 == null)?'grey-2':(youthPRViolinOctContents.kpi2 >= '0' && youthPRViolinOctContents.kpi2 <= '5.6')?'red':(youthPRViolinOctContents.kpi2 > '5.6' && youthPRViolinOctContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinOctContents.kpi2 > '7.466666667' && youthPRViolinOctContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinOctContents.kpi2 >= '9.333333333' && youthPRViolinOctContents.kpi2 < '11.2')?'green':(youthPRViolinOctContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinOctContents.kpi3 == null)?'grey-2':(youthPRViolinOctContents.kpi3 >= '0' && youthPRViolinOctContents.kpi3 <= '2.4')?'red':(youthPRViolinOctContents.kpi3 > '2.4' && youthPRViolinOctContents.kpi3 <= '3.2')?'orange':(youthPRViolinOctContents.kpi3 > '3.2' && youthPRViolinOctContents.kpi3 < '4')?'yellow-7':(youthPRViolinOctContents.kpi3 >= '4' && youthPRViolinOctContents.kpi3 < '4.8')?'green':(youthPRViolinOctContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinOctContents.kpi4 == null)?'grey-2':(youthPRViolinOctContents.kpi4 >= '0' && youthPRViolinOctContents.kpi4 <= '4.6')?'red':(youthPRViolinOctContents.kpi4 > '4.6' && youthPRViolinOctContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinOctContents.kpi4 > '6.133333333' && youthPRViolinOctContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinOctContents.kpi4 >= '7.666666667' && youthPRViolinOctContents.kpi4 < '9.2')?'green':(youthPRViolinOctContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinOctContents.kpi5 == null)?'grey-2':(youthPRViolinOctContents.kpi5 >= '0' && youthPRViolinOctContents.kpi5 <= '1.6')?'red':(youthPRViolinOctContents.kpi5 > '1.6' && youthPRViolinOctContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinOctContents.kpi5 > '2.133333333' && youthPRViolinOctContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinOctContents.kpi5 >= '2.666666667' && youthPRViolinOctContents.kpi5 < '3.2')?'green':(youthPRViolinOctContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi5}}
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
                              :color="(youthPRViolinNovContents.kpi1 == null)?'grey-2':(youthPRViolinNovContents.kpi1 >= '0' && youthPRViolinNovContents.kpi1 <= '3.6')?'red':(youthPRViolinNovContents.kpi1 > '3.6' && youthPRViolinNovContents.kpi1 <= '4.8')?'orange':(youthPRViolinNovContents.kpi1 > '4.8' && youthPRViolinNovContents.kpi1 < '6')?'yellow-7':(youthPRViolinNovContents.kpi1 >= '6' && youthPRViolinNovContents.kpi1 < '7.2')?'green':(youthPRViolinNovContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinNovContents.kpi2 == null)?'grey-2':(youthPRViolinNovContents.kpi2 >= '0' && youthPRViolinNovContents.kpi2 <= '5.6')?'red':(youthPRViolinNovContents.kpi2 > '5.6' && youthPRViolinNovContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinNovContents.kpi2 > '7.466666667' && youthPRViolinNovContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinNovContents.kpi2 >= '9.333333333' && youthPRViolinNovContents.kpi2 < '11.2')?'green':(youthPRViolinNovContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinNovContents.kpi3 == null)?'grey-2':(youthPRViolinNovContents.kpi3 >= '0' && youthPRViolinNovContents.kpi3 <= '2.4')?'red':(youthPRViolinNovContents.kpi3 > '2.4' && youthPRViolinNovContents.kpi3 <= '3.2')?'orange':(youthPRViolinNovContents.kpi3 > '3.2' && youthPRViolinNovContents.kpi3 < '4')?'yellow-7':(youthPRViolinNovContents.kpi3 >= '4' && youthPRViolinNovContents.kpi3 < '4.8')?'green':(youthPRViolinNovContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinNovContents.kpi4 == null)?'grey-2':(youthPRViolinNovContents.kpi4 >= '0' && youthPRViolinNovContents.kpi4 <= '4.6')?'red':(youthPRViolinNovContents.kpi4 > '4.6' && youthPRViolinNovContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinNovContents.kpi4 > '6.133333333' && youthPRViolinNovContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinNovContents.kpi4 >= '7.666666667' && youthPRViolinNovContents.kpi4 < '9.2')?'green':(youthPRViolinNovContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinNovContents.kpi5 == null)?'grey-2':(youthPRViolinNovContents.kpi5 >= '0' && youthPRViolinNovContents.kpi5 <= '1.6')?'red':(youthPRViolinNovContents.kpi5 > '1.6' && youthPRViolinNovContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinNovContents.kpi5 > '2.133333333' && youthPRViolinNovContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinNovContents.kpi5 >= '2.666666667' && youthPRViolinNovContents.kpi5 < '3.2')?'green':(youthPRViolinNovContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi5}}
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
                              :color="(youthPRViolinDecContents.kpi1 == null)?'grey-2':(youthPRViolinDecContents.kpi1 >= '0' && youthPRViolinDecContents.kpi1 <= '3.6')?'red':(youthPRViolinDecContents.kpi1 > '3.6' && youthPRViolinDecContents.kpi1 <= '4.8')?'orange':(youthPRViolinDecContents.kpi1 > '4.8' && youthPRViolinDecContents.kpi1 < '6')?'yellow-7':(youthPRViolinDecContents.kpi1 >= '6' && youthPRViolinDecContents.kpi1 < '7.2')?'green':(youthPRViolinDecContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinDecContents.kpi2 == null)?'grey-2':(youthPRViolinDecContents.kpi2 >= '0' && youthPRViolinDecContents.kpi2 <= '5.6')?'red':(youthPRViolinDecContents.kpi2 > '5.6' && youthPRViolinDecContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinDecContents.kpi2 > '7.466666667' && youthPRViolinDecContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinDecContents.kpi2 >= '9.333333333' && youthPRViolinDecContents.kpi2 < '11.2')?'green':(youthPRViolinDecContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinDecContents.kpi3 == null)?'grey-2':(youthPRViolinDecContents.kpi3 >= '0' && youthPRViolinDecContents.kpi3 <= '2.4')?'red':(youthPRViolinDecContents.kpi3 > '2.4' && youthPRViolinDecContents.kpi3 <= '3.2')?'orange':(youthPRViolinDecContents.kpi3 > '3.2' && youthPRViolinDecContents.kpi3 < '4')?'yellow-7':(youthPRViolinDecContents.kpi3 >= '4' && youthPRViolinDecContents.kpi3 < '4.8')?'green':(youthPRViolinDecContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinDecContents.kpi4 == null)?'grey-2':(youthPRViolinDecContents.kpi4 >= '0' && youthPRViolinDecContents.kpi4 <= '4.6')?'red':(youthPRViolinDecContents.kpi4 > '4.6' && youthPRViolinDecContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinDecContents.kpi4 > '6.133333333' && youthPRViolinDecContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinDecContents.kpi4 >= '7.666666667' && youthPRViolinDecContents.kpi4 < '9.2')?'green':(youthPRViolinDecContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinDecContents.kpi5 == null)?'grey-2':(youthPRViolinDecContents.kpi5 >= '0' && youthPRViolinDecContents.kpi5 <= '1.6')?'red':(youthPRViolinDecContents.kpi5 > '1.6' && youthPRViolinDecContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinDecContents.kpi5 > '2.133333333' && youthPRViolinDecContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinDecContents.kpi5 >= '2.666666667' && youthPRViolinDecContents.kpi5 < '3.2')?'green':(youthPRViolinDecContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi5}}
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
                              :color="(youthPRViolinJanContents.kpi1 == null)?'grey-2':(youthPRViolinJanContents.kpi1 >= '0' && youthPRViolinJanContents.kpi1 <= '3.6')?'red':(youthPRViolinJanContents.kpi1 > '3.6' && youthPRViolinJanContents.kpi1 <= '4.8')?'orange':(youthPRViolinJanContents.kpi1 > '4.8' && youthPRViolinJanContents.kpi1 < '6')?'yellow-7':(youthPRViolinJanContents.kpi1 >= '6' && youthPRViolinJanContents.kpi1 < '7.2')?'green':(youthPRViolinJanContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJanContents.kpi2 == null)?'grey-2':(youthPRViolinJanContents.kpi2 >= '0' && youthPRViolinJanContents.kpi2 <= '5.6')?'red':(youthPRViolinJanContents.kpi2 > '5.6' && youthPRViolinJanContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinJanContents.kpi2 > '7.466666667' && youthPRViolinJanContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinJanContents.kpi2 >= '9.333333333' && youthPRViolinJanContents.kpi2 < '11.2')?'green':(youthPRViolinJanContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJanContents.kpi3 == null)?'grey-2':(youthPRViolinJanContents.kpi3 >= '0' && youthPRViolinJanContents.kpi3 <= '2.4')?'red':(youthPRViolinJanContents.kpi3 > '2.4' && youthPRViolinJanContents.kpi3 <= '3.2')?'orange':(youthPRViolinJanContents.kpi3 > '3.2' && youthPRViolinJanContents.kpi3 < '4')?'yellow-7':(youthPRViolinJanContents.kpi3 >= '4' && youthPRViolinJanContents.kpi3 < '4.8')?'green':(youthPRViolinJanContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJanContents.kpi4 == null)?'grey-2':(youthPRViolinJanContents.kpi4 >= '0' && youthPRViolinJanContents.kpi4 <= '4.6')?'red':(youthPRViolinJanContents.kpi4 > '4.6' && youthPRViolinJanContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinJanContents.kpi4 > '6.133333333' && youthPRViolinJanContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinJanContents.kpi4 >= '7.666666667' && youthPRViolinJanContents.kpi4 < '9.2')?'green':(youthPRViolinJanContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJanContents.kpi5 == null)?'grey-2':(youthPRViolinJanContents.kpi5 >= '0' && youthPRViolinJanContents.kpi5 <= '1.6')?'red':(youthPRViolinJanContents.kpi5 > '1.6' && youthPRViolinJanContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinJanContents.kpi5 > '2.133333333' && youthPRViolinJanContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinJanContents.kpi5 >= '2.666666667' && youthPRViolinJanContents.kpi5 < '3.2')?'green':(youthPRViolinJanContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi5}}
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
                              :color="(youthPRViolinFebContents.kpi1 == null)?'grey-2':(youthPRViolinFebContents.kpi1 >= '0' && youthPRViolinFebContents.kpi1 <= '3.6')?'red':(youthPRViolinFebContents.kpi1 > '3.6' && youthPRViolinFebContents.kpi1 <= '4.8')?'orange':(youthPRViolinFebContents.kpi1 > '4.8' && youthPRViolinFebContents.kpi1 < '6')?'yellow-7':(youthPRViolinFebContents.kpi1 >= '6' && youthPRViolinFebContents.kpi1 < '7.2')?'green':(youthPRViolinFebContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinFebContents.kpi2 == null)?'grey-2':(youthPRViolinFebContents.kpi2 >= '0' && youthPRViolinFebContents.kpi2 <= '5.6')?'red':(youthPRViolinFebContents.kpi2 > '5.6' && youthPRViolinFebContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinFebContents.kpi2 > '7.466666667' && youthPRViolinFebContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinFebContents.kpi2 >= '9.333333333' && youthPRViolinFebContents.kpi2 < '11.2')?'green':(youthPRViolinFebContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinFebContents.kpi3 == null)?'grey-2':(youthPRViolinFebContents.kpi3 >= '0' && youthPRViolinFebContents.kpi3 <= '2.4')?'red':(youthPRViolinFebContents.kpi3 > '2.4' && youthPRViolinFebContents.kpi3 <= '3.2')?'orange':(youthPRViolinFebContents.kpi3 > '3.2' && youthPRViolinFebContents.kpi3 < '4')?'yellow-7':(youthPRViolinFebContents.kpi3 >= '4' && youthPRViolinFebContents.kpi3 < '4.8')?'green':(youthPRViolinFebContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinFebContents.kpi4 == null)?'grey-2':(youthPRViolinFebContents.kpi4 >= '0' && youthPRViolinFebContents.kpi4 <= '4.6')?'red':(youthPRViolinFebContents.kpi4 > '4.6' && youthPRViolinFebContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinFebContents.kpi4 > '6.133333333' && youthPRViolinFebContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinFebContents.kpi4 >= '7.666666667' && youthPRViolinFebContents.kpi4 < '9.2')?'green':(youthPRViolinFebContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinFebContents.kpi5 == null)?'grey-2':(youthPRViolinFebContents.kpi5 >= '0' && youthPRViolinFebContents.kpi5 <= '1.6')?'red':(youthPRViolinFebContents.kpi5 > '1.6' && youthPRViolinFebContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinFebContents.kpi5 > '2.133333333' && youthPRViolinFebContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinFebContents.kpi5 >= '2.666666667' && youthPRViolinFebContents.kpi5 < '3.2')?'green':(youthPRViolinFebContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi5}}
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
                              :color="(youthPRViolinMarContents.kpi1 == null)?'grey-2':(youthPRViolinMarContents.kpi1 >= '0' && youthPRViolinMarContents.kpi1 <= '3.6')?'red':(youthPRViolinMarContents.kpi1 > '3.6' && youthPRViolinMarContents.kpi1 <= '4.8')?'orange':(youthPRViolinMarContents.kpi1 > '4.8' && youthPRViolinMarContents.kpi1 < '6')?'yellow-7':(youthPRViolinMarContents.kpi1 >= '6' && youthPRViolinMarContents.kpi1 < '7.2')?'green':(youthPRViolinMarContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMarContents.kpi2 == null)?'grey-2':(youthPRViolinMarContents.kpi2 >= '0' && youthPRViolinMarContents.kpi2 <= '5.6')?'red':(youthPRViolinMarContents.kpi2 > '5.6' && youthPRViolinMarContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinMarContents.kpi2 > '7.466666667' && youthPRViolinMarContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinMarContents.kpi2 >= '9.333333333' && youthPRViolinMarContents.kpi2 < '11.2')?'green':(youthPRViolinMarContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMarContents.kpi3 == null)?'grey-2':(youthPRViolinMarContents.kpi3 >= '0' && youthPRViolinMarContents.kpi3 <= '2.4')?'red':(youthPRViolinMarContents.kpi3 > '2.4' && youthPRViolinMarContents.kpi3 <= '3.2')?'orange':(youthPRViolinMarContents.kpi3 > '3.2' && youthPRViolinMarContents.kpi3 < '4')?'yellow-7':(youthPRViolinMarContents.kpi3 >= '4' && youthPRViolinMarContents.kpi3 < '4.8')?'green':(youthPRViolinMarContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMarContents.kpi4 == null)?'grey-2':(youthPRViolinMarContents.kpi4 >= '0' && youthPRViolinMarContents.kpi4 <= '4.6')?'red':(youthPRViolinMarContents.kpi4 > '4.6' && youthPRViolinMarContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinMarContents.kpi4 > '6.133333333' && youthPRViolinMarContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinMarContents.kpi4 >= '7.666666667' && youthPRViolinMarContents.kpi4 < '9.2')?'green':(youthPRViolinMarContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMarContents.kpi5 == null)?'grey-2':(youthPRViolinMarContents.kpi5 >= '0' && youthPRViolinMarContents.kpi5 <= '1.6')?'red':(youthPRViolinMarContents.kpi5 > '1.6' && youthPRViolinMarContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinMarContents.kpi5 > '2.133333333' && youthPRViolinMarContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinMarContents.kpi5 >= '2.666666667' && youthPRViolinMarContents.kpi5 < '3.2')?'green':(youthPRViolinMarContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi5}}
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
                              :color="(youthPRViolinAprContents.kpi1 == null)?'grey-2':(youthPRViolinAprContents.kpi1 >= '0' && youthPRViolinAprContents.kpi1 <= '3.6')?'red':(youthPRViolinAprContents.kpi1 > '3.6' && youthPRViolinAprContents.kpi1 <= '4.8')?'orange':(youthPRViolinAprContents.kpi1 > '4.8' && youthPRViolinAprContents.kpi1 < '6')?'yellow-7':(youthPRViolinAprContents.kpi1 >= '6' && youthPRViolinAprContents.kpi1 < '7.2')?'green':(youthPRViolinAprContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAprContents.kpi2 == null)?'grey-2':(youthPRViolinAprContents.kpi2 >= '0' && youthPRViolinAprContents.kpi2 <= '5.6')?'red':(youthPRViolinAprContents.kpi2 > '5.6' && youthPRViolinAprContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinAprContents.kpi2 > '7.466666667' && youthPRViolinAprContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinAprContents.kpi2 >= '9.333333333' && youthPRViolinAprContents.kpi2 < '11.2')?'green':(youthPRViolinAprContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAprContents.kpi3 == null)?'grey-2':(youthPRViolinAprContents.kpi3 >= '0' && youthPRViolinAprContents.kpi3 <= '2.4')?'red':(youthPRViolinAprContents.kpi3 > '2.4' && youthPRViolinAprContents.kpi3 <= '3.2')?'orange':(youthPRViolinAprContents.kpi3 > '3.2' && youthPRViolinAprContents.kpi3 < '4')?'yellow-7':(youthPRViolinAprContents.kpi3 >= '4' && youthPRViolinAprContents.kpi3 < '4.8')?'green':(youthPRViolinAprContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAprContents.kpi4 == null)?'grey-2':(youthPRViolinAprContents.kpi4 >= '0' && youthPRViolinAprContents.kpi4 <= '4.6')?'red':(youthPRViolinAprContents.kpi4 > '4.6' && youthPRViolinAprContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinAprContents.kpi4 > '6.133333333' && youthPRViolinAprContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinAprContents.kpi4 >= '7.666666667' && youthPRViolinAprContents.kpi4 < '9.2')?'green':(youthPRViolinAprContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAprContents.kpi5 == null)?'grey-2':(youthPRViolinAprContents.kpi5 >= '0' && youthPRViolinAprContents.kpi5 <= '1.6')?'red':(youthPRViolinAprContents.kpi5 > '1.6' && youthPRViolinAprContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinAprContents.kpi5 > '2.133333333' && youthPRViolinAprContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinAprContents.kpi5 >= '2.666666667' && youthPRViolinAprContents.kpi5 < '3.2')?'green':(youthPRViolinAprContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi5}}
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
                              :color="(youthPRViolinMayContents.kpi1 == null)?'grey-2':(youthPRViolinMayContents.kpi1 >= '0' && youthPRViolinMayContents.kpi1 <= '3.6')?'red':(youthPRViolinMayContents.kpi1 > '3.6' && youthPRViolinMayContents.kpi1 <= '4.8')?'orange':(youthPRViolinMayContents.kpi1 > '4.8' && youthPRViolinMayContents.kpi1 < '6')?'yellow-7':(youthPRViolinMayContents.kpi1 >= '6' && youthPRViolinMayContents.kpi1 < '7.2')?'green':(youthPRViolinMayContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMayContents.kpi2 == null)?'grey-2':(youthPRViolinMayContents.kpi2 >= '0' && youthPRViolinMayContents.kpi2 <= '5.6')?'red':(youthPRViolinMayContents.kpi2 > '5.6' && youthPRViolinMayContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinMayContents.kpi2 > '7.466666667' && youthPRViolinMayContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinMayContents.kpi2 >= '9.333333333' && youthPRViolinMayContents.kpi2 < '11.2')?'green':(youthPRViolinMayContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMayContents.kpi3 == null)?'grey-2':(youthPRViolinMayContents.kpi3 >= '0' && youthPRViolinMayContents.kpi3 <= '2.4')?'red':(youthPRViolinMayContents.kpi3 > '2.4' && youthPRViolinMayContents.kpi3 <= '3.2')?'orange':(youthPRViolinMayContents.kpi3 > '3.2' && youthPRViolinMayContents.kpi3 < '4')?'yellow-7':(youthPRViolinMayContents.kpi3 >= '4' && youthPRViolinMayContents.kpi3 < '4.8')?'green':(youthPRViolinMayContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMayContents.kpi4 == null)?'grey-2':(youthPRViolinMayContents.kpi4 >= '0' && youthPRViolinMayContents.kpi4 <= '4.6')?'red':(youthPRViolinMayContents.kpi4 > '4.6' && youthPRViolinMayContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinMayContents.kpi4 > '6.133333333' && youthPRViolinMayContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinMayContents.kpi4 >= '7.666666667' && youthPRViolinMayContents.kpi4 < '9.2')?'green':(youthPRViolinMayContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMayContents.kpi5 == null)?'grey-2':(youthPRViolinMayContents.kpi5 >= '0' && youthPRViolinMayContents.kpi5 <= '1.6')?'red':(youthPRViolinMayContents.kpi5 > '1.6' && youthPRViolinMayContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinMayContents.kpi5 > '2.133333333' && youthPRViolinMayContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinMayContents.kpi5 >= '2.666666667' && youthPRViolinMayContents.kpi5 < '3.2')?'green':(youthPRViolinMayContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi5}}
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
                              :color="(youthPRViolinJunContents.kpi1 == null)?'grey-2':(youthPRViolinJunContents.kpi1 >= '0' && youthPRViolinJunContents.kpi1 <= '3.6')?'red':(youthPRViolinJunContents.kpi1 > '3.6' && youthPRViolinJunContents.kpi1 <= '4.8')?'orange':(youthPRViolinJunContents.kpi1 > '4.8' && youthPRViolinJunContents.kpi1 < '6')?'yellow-7':(youthPRViolinJunContents.kpi1 >= '6' && youthPRViolinJunContents.kpi1 < '7.2')?'green':(youthPRViolinJunContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJunContents.kpi2 == null)?'grey-2':(youthPRViolinJunContents.kpi2 >= '0' && youthPRViolinJunContents.kpi2 <= '5.6')?'red':(youthPRViolinJunContents.kpi2 > '5.6' && youthPRViolinJunContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinJunContents.kpi2 > '7.466666667' && youthPRViolinJunContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinJunContents.kpi2 >= '9.333333333' && youthPRViolinJunContents.kpi2 < '11.2')?'green':(youthPRViolinJunContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJunContents.kpi3 == null)?'grey-2':(youthPRViolinJunContents.kpi3 >= '0' && youthPRViolinJunContents.kpi3 <= '2.4')?'red':(youthPRViolinJunContents.kpi3 > '2.4' && youthPRViolinJunContents.kpi3 <= '3.2')?'orange':(youthPRViolinJunContents.kpi3 > '3.2' && youthPRViolinJunContents.kpi3 < '4')?'yellow-7':(youthPRViolinJunContents.kpi3 >= '4' && youthPRViolinJunContents.kpi3 < '4.8')?'green':(youthPRViolinJunContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJunContents.kpi4 == null)?'grey-2':(youthPRViolinJunContents.kpi4 >= '0' && youthPRViolinJunContents.kpi4 <= '4.6')?'red':(youthPRViolinJunContents.kpi4 > '4.6' && youthPRViolinJunContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinJunContents.kpi4 > '6.133333333' && youthPRViolinJunContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinJunContents.kpi4 >= '7.666666667' && youthPRViolinJunContents.kpi4 < '9.2')?'green':(youthPRViolinJunContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJunContents.kpi5 == null)?'grey-2':(youthPRViolinJunContents.kpi5 >= '0' && youthPRViolinJunContents.kpi5 <= '1.6')?'red':(youthPRViolinJunContents.kpi5 > '1.6' && youthPRViolinJunContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinJunContents.kpi5 > '2.133333333' && youthPRViolinJunContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinJunContents.kpi5 >= '2.666666667' && youthPRViolinJunContents.kpi5 < '3.2')?'green':(youthPRViolinJunContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi5}}
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
                              :color="(youthPRViolinJulContents.kpi1 == null)?'grey-2':(youthPRViolinJulContents.kpi1 >= '0' && youthPRViolinJulContents.kpi1 <= '3.6')?'red':(youthPRViolinJulContents.kpi1 > '3.6' && youthPRViolinJulContents.kpi1 <= '4.8')?'orange':(youthPRViolinJulContents.kpi1 > '4.8' && youthPRViolinJulContents.kpi1 < '6')?'yellow-7':(youthPRViolinJulContents.kpi1 >= '6' && youthPRViolinJulContents.kpi1 < '7.2')?'green':(youthPRViolinJulContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJulContents.kpi2 == null)?'grey-2':(youthPRViolinJulContents.kpi2 >= '0' && youthPRViolinJulContents.kpi2 <= '5.6')?'red':(youthPRViolinJulContents.kpi2 > '5.6' && youthPRViolinJulContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinJulContents.kpi2 > '7.466666667' && youthPRViolinJulContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinJulContents.kpi2 >= '9.333333333' && youthPRViolinJulContents.kpi2 < '11.2')?'green':(youthPRViolinJulContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJulContents.kpi3 == null)?'grey-2':(youthPRViolinJulContents.kpi3 >= '0' && youthPRViolinJulContents.kpi3 <= '2.4')?'red':(youthPRViolinJulContents.kpi3 > '2.4' && youthPRViolinJulContents.kpi3 <= '3.2')?'orange':(youthPRViolinJulContents.kpi3 > '3.2' && youthPRViolinJulContents.kpi3 < '4')?'yellow-7':(youthPRViolinJulContents.kpi3 >= '4' && youthPRViolinJulContents.kpi3 < '4.8')?'green':(youthPRViolinJulContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJulContents.kpi4 == null)?'grey-2':(youthPRViolinJulContents.kpi4 >= '0' && youthPRViolinJulContents.kpi4 <= '4.6')?'red':(youthPRViolinJulContents.kpi4 > '4.6' && youthPRViolinJulContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinJulContents.kpi4 > '6.133333333' && youthPRViolinJulContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinJulContents.kpi4 >= '7.666666667' && youthPRViolinJulContents.kpi4 < '9.2')?'green':(youthPRViolinJulContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJulContents.kpi5 == null)?'grey-2':(youthPRViolinJulContents.kpi5 >= '0' && youthPRViolinJulContents.kpi5 <= '1.6')?'red':(youthPRViolinJulContents.kpi5 > '1.6' && youthPRViolinJulContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinJulContents.kpi5 > '2.133333333' && youthPRViolinJulContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinJulContents.kpi5 >= '2.666666667' && youthPRViolinJulContents.kpi5 < '3.2')?'green':(youthPRViolinJulContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi5}}
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
                              :color="(youthPRViolinAugContents.kpi1 == null)?'grey-2':(youthPRViolinAugContents.kpi1 >= '0' && youthPRViolinAugContents.kpi1 <= '3.6')?'red':(youthPRViolinAugContents.kpi1 > '3.6' && youthPRViolinAugContents.kpi1 <= '4.8')?'orange':(youthPRViolinAugContents.kpi1 > '4.8' && youthPRViolinAugContents.kpi1 < '6')?'yellow-7':(youthPRViolinAugContents.kpi1 >= '6' && youthPRViolinAugContents.kpi1 < '7.2')?'green':(youthPRViolinAugContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAugContents.kpi2 == null)?'grey-2':(youthPRViolinAugContents.kpi2 >= '0' && youthPRViolinAugContents.kpi2 <= '5.6')?'red':(youthPRViolinAugContents.kpi2 > '5.6' && youthPRViolinAugContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinAugContents.kpi2 > '7.466666667' && youthPRViolinAugContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinAugContents.kpi2 >= '9.333333333' && youthPRViolinAugContents.kpi2 < '11.2')?'green':(youthPRViolinAugContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAugContents.kpi3 == null)?'grey-2':(youthPRViolinAugContents.kpi3 >= '0' && youthPRViolinAugContents.kpi3 <= '2.4')?'red':(youthPRViolinAugContents.kpi3 > '2.4' && youthPRViolinAugContents.kpi3 <= '3.2')?'orange':(youthPRViolinAugContents.kpi3 > '3.2' && youthPRViolinAugContents.kpi3 < '4')?'yellow-7':(youthPRViolinAugContents.kpi3 >= '4' && youthPRViolinAugContents.kpi3 < '4.8')?'green':(youthPRViolinAugContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAugContents.kpi4 == null)?'grey-2':(youthPRViolinAugContents.kpi4 >= '0' && youthPRViolinAugContents.kpi4 <= '4.6')?'red':(youthPRViolinAugContents.kpi4 > '4.6' && youthPRViolinAugContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinAugContents.kpi4 > '6.133333333' && youthPRViolinAugContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinAugContents.kpi4 >= '7.666666667' && youthPRViolinAugContents.kpi4 < '9.2')?'green':(youthPRViolinAugContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAugContents.kpi5 == null)?'grey-2':(youthPRViolinAugContents.kpi5 >= '0' && youthPRViolinAugContents.kpi5 <= '1.6')?'red':(youthPRViolinAugContents.kpi5 > '1.6' && youthPRViolinAugContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinAugContents.kpi5 > '2.133333333' && youthPRViolinAugContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinAugContents.kpi5 >= '2.666666667' && youthPRViolinAugContents.kpi5 < '3.2')?'green':(youthPRViolinAugContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi5}}
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
                              :color="(youthPRViolinSepContents.kpi1 == null)?'grey-2':(youthPRViolinSepContents.kpi1 >= '0' && youthPRViolinSepContents.kpi1 <= '3.6')?'red':(youthPRViolinSepContents.kpi1 > '3.6' && youthPRViolinSepContents.kpi1 <= '4.8')?'orange':(youthPRViolinSepContents.kpi1 > '4.8' && youthPRViolinSepContents.kpi1 < '6')?'yellow-7':(youthPRViolinSepContents.kpi1 >= '6' && youthPRViolinSepContents.kpi1 < '7.2')?'green':(youthPRViolinSepContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinSepContents.kpi2 == null)?'grey-2':(youthPRViolinSepContents.kpi2 >= '0' && youthPRViolinSepContents.kpi2 <= '5.6')?'red':(youthPRViolinSepContents.kpi2 > '5.6' && youthPRViolinSepContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinSepContents.kpi2 > '7.466666667' && youthPRViolinSepContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinSepContents.kpi2 >= '9.333333333' && youthPRViolinSepContents.kpi2 < '11.2')?'green':(youthPRViolinSepContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinSepContents.kpi3 == null)?'grey-2':(youthPRViolinSepContents.kpi3 >= '0' && youthPRViolinSepContents.kpi3 <= '2.4')?'red':(youthPRViolinSepContents.kpi3 > '2.4' && youthPRViolinSepContents.kpi3 <= '3.2')?'orange':(youthPRViolinSepContents.kpi3 > '3.2' && youthPRViolinSepContents.kpi3 < '4')?'yellow-7':(youthPRViolinSepContents.kpi3 >= '4' && youthPRViolinSepContents.kpi3 < '4.8')?'green':(youthPRViolinSepContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinSepContents.kpi4 == null)?'grey-2':(youthPRViolinSepContents.kpi4 >= '0' && youthPRViolinSepContents.kpi4 <= '4.6')?'red':(youthPRViolinSepContents.kpi4 > '4.6' && youthPRViolinSepContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinSepContents.kpi4 > '6.133333333' && youthPRViolinSepContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinSepContents.kpi4 >= '7.666666667' && youthPRViolinSepContents.kpi4 < '9.2')?'green':(youthPRViolinSepContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinSepContents.kpi5 == null)?'grey-2':(youthPRViolinSepContents.kpi5 >= '0' && youthPRViolinSepContents.kpi5 <= '1.6')?'red':(youthPRViolinSepContents.kpi5 > '1.6' && youthPRViolinSepContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinSepContents.kpi5 > '2.133333333' && youthPRViolinSepContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinSepContents.kpi5 >= '2.666666667' && youthPRViolinSepContents.kpi5 < '3.2')?'green':(youthPRViolinSepContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi5}}
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
                              :color="(youthPRViolinOctContents.kpi1 == null)?'grey-2':(youthPRViolinOctContents.kpi1 >= '0' && youthPRViolinOctContents.kpi1 <= '3.6')?'red':(youthPRViolinOctContents.kpi1 > '3.6' && youthPRViolinOctContents.kpi1 <= '4.8')?'orange':(youthPRViolinOctContents.kpi1 > '4.8' && youthPRViolinOctContents.kpi1 < '6')?'yellow-7':(youthPRViolinOctContents.kpi1 >= '6' && youthPRViolinOctContents.kpi1 < '7.2')?'green':(youthPRViolinOctContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinOctContents.kpi2 == null)?'grey-2':(youthPRViolinOctContents.kpi2 >= '0' && youthPRViolinOctContents.kpi2 <= '5.6')?'red':(youthPRViolinOctContents.kpi2 > '5.6' && youthPRViolinOctContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinOctContents.kpi2 > '7.466666667' && youthPRViolinOctContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinOctContents.kpi2 >= '9.333333333' && youthPRViolinOctContents.kpi2 < '11.2')?'green':(youthPRViolinOctContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinOctContents.kpi3 == null)?'grey-2':(youthPRViolinOctContents.kpi3 >= '0' && youthPRViolinOctContents.kpi3 <= '2.4')?'red':(youthPRViolinOctContents.kpi3 > '2.4' && youthPRViolinOctContents.kpi3 <= '3.2')?'orange':(youthPRViolinOctContents.kpi3 > '3.2' && youthPRViolinOctContents.kpi3 < '4')?'yellow-7':(youthPRViolinOctContents.kpi3 >= '4' && youthPRViolinOctContents.kpi3 < '4.8')?'green':(youthPRViolinOctContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinOctContents.kpi4 == null)?'grey-2':(youthPRViolinOctContents.kpi4 >= '0' && youthPRViolinOctContents.kpi4 <= '4.6')?'red':(youthPRViolinOctContents.kpi4 > '4.6' && youthPRViolinOctContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinOctContents.kpi4 > '6.133333333' && youthPRViolinOctContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinOctContents.kpi4 >= '7.666666667' && youthPRViolinOctContents.kpi4 < '9.2')?'green':(youthPRViolinOctContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinOctContents.kpi5 == null)?'grey-2':(youthPRViolinOctContents.kpi5 >= '0' && youthPRViolinOctContents.kpi5 <= '1.6')?'red':(youthPRViolinOctContents.kpi5 > '1.6' && youthPRViolinOctContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinOctContents.kpi5 > '2.133333333' && youthPRViolinOctContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinOctContents.kpi5 >= '2.666666667' && youthPRViolinOctContents.kpi5 < '3.2')?'green':(youthPRViolinOctContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi5}}
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
                              :color="(youthPRViolinNovContents.kpi1 == null)?'grey-2':(youthPRViolinNovContents.kpi1 >= '0' && youthPRViolinNovContents.kpi1 <= '3.6')?'red':(youthPRViolinNovContents.kpi1 > '3.6' && youthPRViolinNovContents.kpi1 <= '4.8')?'orange':(youthPRViolinNovContents.kpi1 > '4.8' && youthPRViolinNovContents.kpi1 < '6')?'yellow-7':(youthPRViolinNovContents.kpi1 >= '6' && youthPRViolinNovContents.kpi1 < '7.2')?'green':(youthPRViolinNovContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinNovContents.kpi2 == null)?'grey-2':(youthPRViolinNovContents.kpi2 >= '0' && youthPRViolinNovContents.kpi2 <= '5.6')?'red':(youthPRViolinNovContents.kpi2 > '5.6' && youthPRViolinNovContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinNovContents.kpi2 > '7.466666667' && youthPRViolinNovContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinNovContents.kpi2 >= '9.333333333' && youthPRViolinNovContents.kpi2 < '11.2')?'green':(youthPRViolinNovContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinNovContents.kpi3 == null)?'grey-2':(youthPRViolinNovContents.kpi3 >= '0' && youthPRViolinNovContents.kpi3 <= '2.4')?'red':(youthPRViolinNovContents.kpi3 > '2.4' && youthPRViolinNovContents.kpi3 <= '3.2')?'orange':(youthPRViolinNovContents.kpi3 > '3.2' && youthPRViolinNovContents.kpi3 < '4')?'yellow-7':(youthPRViolinNovContents.kpi3 >= '4' && youthPRViolinNovContents.kpi3 < '4.8')?'green':(youthPRViolinNovContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinNovContents.kpi4 == null)?'grey-2':(youthPRViolinNovContents.kpi4 >= '0' && youthPRViolinNovContents.kpi4 <= '4.6')?'red':(youthPRViolinNovContents.kpi4 > '4.6' && youthPRViolinNovContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinNovContents.kpi4 > '6.133333333' && youthPRViolinNovContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinNovContents.kpi4 >= '7.666666667' && youthPRViolinNovContents.kpi4 < '9.2')?'green':(youthPRViolinNovContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinNovContents.kpi5 == null)?'grey-2':(youthPRViolinNovContents.kpi5 >= '0' && youthPRViolinNovContents.kpi5 <= '1.6')?'red':(youthPRViolinNovContents.kpi5 > '1.6' && youthPRViolinNovContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinNovContents.kpi5 > '2.133333333' && youthPRViolinNovContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinNovContents.kpi5 >= '2.666666667' && youthPRViolinNovContents.kpi5 < '3.2')?'green':(youthPRViolinNovContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi5}}
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
                              :color="(youthPRViolinDecContents.kpi1 == null)?'grey-2':(youthPRViolinDecContents.kpi1 >= '0' && youthPRViolinDecContents.kpi1 <= '3.6')?'red':(youthPRViolinDecContents.kpi1 > '3.6' && youthPRViolinDecContents.kpi1 <= '4.8')?'orange':(youthPRViolinDecContents.kpi1 > '4.8' && youthPRViolinDecContents.kpi1 < '6')?'yellow-7':(youthPRViolinDecContents.kpi1 >= '6' && youthPRViolinDecContents.kpi1 < '7.2')?'green':(youthPRViolinDecContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinDecContents.kpi2 == null)?'grey-2':(youthPRViolinDecContents.kpi2 >= '0' && youthPRViolinDecContents.kpi2 <= '5.6')?'red':(youthPRViolinDecContents.kpi2 > '5.6' && youthPRViolinDecContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinDecContents.kpi2 > '7.466666667' && youthPRViolinDecContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinDecContents.kpi2 >= '9.333333333' && youthPRViolinDecContents.kpi2 < '11.2')?'green':(youthPRViolinDecContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinDecContents.kpi3 == null)?'grey-2':(youthPRViolinDecContents.kpi3 >= '0' && youthPRViolinDecContents.kpi3 <= '2.4')?'red':(youthPRViolinDecContents.kpi3 > '2.4' && youthPRViolinDecContents.kpi3 <= '3.2')?'orange':(youthPRViolinDecContents.kpi3 > '3.2' && youthPRViolinDecContents.kpi3 < '4')?'yellow-7':(youthPRViolinDecContents.kpi3 >= '4' && youthPRViolinDecContents.kpi3 < '4.8')?'green':(youthPRViolinDecContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinDecContents.kpi4 == null)?'grey-2':(youthPRViolinDecContents.kpi4 >= '0' && youthPRViolinDecContents.kpi4 <= '4.6')?'red':(youthPRViolinDecContents.kpi4 > '4.6' && youthPRViolinDecContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinDecContents.kpi4 > '6.133333333' && youthPRViolinDecContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinDecContents.kpi4 >= '7.666666667' && youthPRViolinDecContents.kpi4 < '9.2')?'green':(youthPRViolinDecContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinDecContents.kpi5 == null)?'grey-2':(youthPRViolinDecContents.kpi5 >= '0' && youthPRViolinDecContents.kpi5 <= '1.6')?'red':(youthPRViolinDecContents.kpi5 > '1.6' && youthPRViolinDecContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinDecContents.kpi5 > '2.133333333' && youthPRViolinDecContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinDecContents.kpi5 >= '2.666666667' && youthPRViolinDecContents.kpi5 < '3.2')?'green':(youthPRViolinDecContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi5}}
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
                              :color="(youthPRViolinJanContents.kpi1 == null)?'grey-2':(youthPRViolinJanContents.kpi1 >= '0' && youthPRViolinJanContents.kpi1 <= '3.6')?'red':(youthPRViolinJanContents.kpi1 > '3.6' && youthPRViolinJanContents.kpi1 <= '4.8')?'orange':(youthPRViolinJanContents.kpi1 > '4.8' && youthPRViolinJanContents.kpi1 < '6')?'yellow-7':(youthPRViolinJanContents.kpi1 >= '6' && youthPRViolinJanContents.kpi1 < '7.2')?'green':(youthPRViolinJanContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJanContents.kpi2 == null)?'grey-2':(youthPRViolinJanContents.kpi2 >= '0' && youthPRViolinJanContents.kpi2 <= '5.6')?'red':(youthPRViolinJanContents.kpi2 > '5.6' && youthPRViolinJanContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinJanContents.kpi2 > '7.466666667' && youthPRViolinJanContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinJanContents.kpi2 >= '9.333333333' && youthPRViolinJanContents.kpi2 < '11.2')?'green':(youthPRViolinJanContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJanContents.kpi3 == null)?'grey-2':(youthPRViolinJanContents.kpi3 >= '0' && youthPRViolinJanContents.kpi3 <= '2.4')?'red':(youthPRViolinJanContents.kpi3 > '2.4' && youthPRViolinJanContents.kpi3 <= '3.2')?'orange':(youthPRViolinJanContents.kpi3 > '3.2' && youthPRViolinJanContents.kpi3 < '4')?'yellow-7':(youthPRViolinJanContents.kpi3 >= '4' && youthPRViolinJanContents.kpi3 < '4.8')?'green':(youthPRViolinJanContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJanContents.kpi4 == null)?'grey-2':(youthPRViolinJanContents.kpi4 >= '0' && youthPRViolinJanContents.kpi4 <= '4.6')?'red':(youthPRViolinJanContents.kpi4 > '4.6' && youthPRViolinJanContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinJanContents.kpi4 > '6.133333333' && youthPRViolinJanContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinJanContents.kpi4 >= '7.666666667' && youthPRViolinJanContents.kpi4 < '9.2')?'green':(youthPRViolinJanContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJanContents.kpi5 == null)?'grey-2':(youthPRViolinJanContents.kpi5 >= '0' && youthPRViolinJanContents.kpi5 <= '1.6')?'red':(youthPRViolinJanContents.kpi5 > '1.6' && youthPRViolinJanContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinJanContents.kpi5 > '2.133333333' && youthPRViolinJanContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinJanContents.kpi5 >= '2.666666667' && youthPRViolinJanContents.kpi5 < '3.2')?'green':(youthPRViolinJanContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi5}}
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
                              :color="(youthPRViolinFebContents.kpi1 == null)?'grey-2':(youthPRViolinFebContents.kpi1 >= '0' && youthPRViolinFebContents.kpi1 <= '3.6')?'red':(youthPRViolinFebContents.kpi1 > '3.6' && youthPRViolinFebContents.kpi1 <= '4.8')?'orange':(youthPRViolinFebContents.kpi1 > '4.8' && youthPRViolinFebContents.kpi1 < '6')?'yellow-7':(youthPRViolinFebContents.kpi1 >= '6' && youthPRViolinFebContents.kpi1 < '7.2')?'green':(youthPRViolinFebContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinFebContents.kpi2 == null)?'grey-2':(youthPRViolinFebContents.kpi2 >= '0' && youthPRViolinFebContents.kpi2 <= '5.6')?'red':(youthPRViolinFebContents.kpi2 > '5.6' && youthPRViolinFebContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinFebContents.kpi2 > '7.466666667' && youthPRViolinFebContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinFebContents.kpi2 >= '9.333333333' && youthPRViolinFebContents.kpi2 < '11.2')?'green':(youthPRViolinFebContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinFebContents.kpi3 == null)?'grey-2':(youthPRViolinFebContents.kpi3 >= '0' && youthPRViolinFebContents.kpi3 <= '2.4')?'red':(youthPRViolinFebContents.kpi3 > '2.4' && youthPRViolinFebContents.kpi3 <= '3.2')?'orange':(youthPRViolinFebContents.kpi3 > '3.2' && youthPRViolinFebContents.kpi3 < '4')?'yellow-7':(youthPRViolinFebContents.kpi3 >= '4' && youthPRViolinFebContents.kpi3 < '4.8')?'green':(youthPRViolinFebContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinFebContents.kpi4 == null)?'grey-2':(youthPRViolinFebContents.kpi4 >= '0' && youthPRViolinFebContents.kpi4 <= '4.6')?'red':(youthPRViolinFebContents.kpi4 > '4.6' && youthPRViolinFebContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinFebContents.kpi4 > '6.133333333' && youthPRViolinFebContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinFebContents.kpi4 >= '7.666666667' && youthPRViolinFebContents.kpi4 < '9.2')?'green':(youthPRViolinFebContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinFebContents.kpi5 == null)?'grey-2':(youthPRViolinFebContents.kpi5 >= '0' && youthPRViolinFebContents.kpi5 <= '1.6')?'red':(youthPRViolinFebContents.kpi5 > '1.6' && youthPRViolinFebContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinFebContents.kpi5 > '2.133333333' && youthPRViolinFebContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinFebContents.kpi5 >= '2.666666667' && youthPRViolinFebContents.kpi5 < '3.2')?'green':(youthPRViolinFebContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi5}}
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
                              :color="(youthPRViolinMarContents.kpi1 == null)?'grey-2':(youthPRViolinMarContents.kpi1 >= '0' && youthPRViolinMarContents.kpi1 <= '3.6')?'red':(youthPRViolinMarContents.kpi1 > '3.6' && youthPRViolinMarContents.kpi1 <= '4.8')?'orange':(youthPRViolinMarContents.kpi1 > '4.8' && youthPRViolinMarContents.kpi1 < '6')?'yellow-7':(youthPRViolinMarContents.kpi1 >= '6' && youthPRViolinMarContents.kpi1 < '7.2')?'green':(youthPRViolinMarContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMarContents.kpi2 == null)?'grey-2':(youthPRViolinMarContents.kpi2 >= '0' && youthPRViolinMarContents.kpi2 <= '5.6')?'red':(youthPRViolinMarContents.kpi2 > '5.6' && youthPRViolinMarContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinMarContents.kpi2 > '7.466666667' && youthPRViolinMarContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinMarContents.kpi2 >= '9.333333333' && youthPRViolinMarContents.kpi2 < '11.2')?'green':(youthPRViolinMarContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMarContents.kpi3 == null)?'grey-2':(youthPRViolinMarContents.kpi3 >= '0' && youthPRViolinMarContents.kpi3 <= '2.4')?'red':(youthPRViolinMarContents.kpi3 > '2.4' && youthPRViolinMarContents.kpi3 <= '3.2')?'orange':(youthPRViolinMarContents.kpi3 > '3.2' && youthPRViolinMarContents.kpi3 < '4')?'yellow-7':(youthPRViolinMarContents.kpi3 >= '4' && youthPRViolinMarContents.kpi3 < '4.8')?'green':(youthPRViolinMarContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMarContents.kpi4 == null)?'grey-2':(youthPRViolinMarContents.kpi4 >= '0' && youthPRViolinMarContents.kpi4 <= '4.6')?'red':(youthPRViolinMarContents.kpi4 > '4.6' && youthPRViolinMarContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinMarContents.kpi4 > '6.133333333' && youthPRViolinMarContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinMarContents.kpi4 >= '7.666666667' && youthPRViolinMarContents.kpi4 < '9.2')?'green':(youthPRViolinMarContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMarContents.kpi5 == null)?'grey-2':(youthPRViolinMarContents.kpi5 >= '0' && youthPRViolinMarContents.kpi5 <= '1.6')?'red':(youthPRViolinMarContents.kpi5 > '1.6' && youthPRViolinMarContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinMarContents.kpi5 > '2.133333333' && youthPRViolinMarContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinMarContents.kpi5 >= '2.666666667' && youthPRViolinMarContents.kpi5 < '3.2')?'green':(youthPRViolinMarContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi5}}
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
                              :color="(youthPRViolinAprContents.kpi1 == null)?'grey-2':(youthPRViolinAprContents.kpi1 >= '0' && youthPRViolinAprContents.kpi1 <= '3.6')?'red':(youthPRViolinAprContents.kpi1 > '3.6' && youthPRViolinAprContents.kpi1 <= '4.8')?'orange':(youthPRViolinAprContents.kpi1 > '4.8' && youthPRViolinAprContents.kpi1 < '6')?'yellow-7':(youthPRViolinAprContents.kpi1 >= '6' && youthPRViolinAprContents.kpi1 < '7.2')?'green':(youthPRViolinAprContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAprContents.kpi2 == null)?'grey-2':(youthPRViolinAprContents.kpi2 >= '0' && youthPRViolinAprContents.kpi2 <= '5.6')?'red':(youthPRViolinAprContents.kpi2 > '5.6' && youthPRViolinAprContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinAprContents.kpi2 > '7.466666667' && youthPRViolinAprContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinAprContents.kpi2 >= '9.333333333' && youthPRViolinAprContents.kpi2 < '11.2')?'green':(youthPRViolinAprContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAprContents.kpi3 == null)?'grey-2':(youthPRViolinAprContents.kpi3 >= '0' && youthPRViolinAprContents.kpi3 <= '2.4')?'red':(youthPRViolinAprContents.kpi3 > '2.4' && youthPRViolinAprContents.kpi3 <= '3.2')?'orange':(youthPRViolinAprContents.kpi3 > '3.2' && youthPRViolinAprContents.kpi3 < '4')?'yellow-7':(youthPRViolinAprContents.kpi3 >= '4' && youthPRViolinAprContents.kpi3 < '4.8')?'green':(youthPRViolinAprContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAprContents.kpi4 == null)?'grey-2':(youthPRViolinAprContents.kpi4 >= '0' && youthPRViolinAprContents.kpi4 <= '4.6')?'red':(youthPRViolinAprContents.kpi4 > '4.6' && youthPRViolinAprContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinAprContents.kpi4 > '6.133333333' && youthPRViolinAprContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinAprContents.kpi4 >= '7.666666667' && youthPRViolinAprContents.kpi4 < '9.2')?'green':(youthPRViolinAprContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAprContents.kpi5 == null)?'grey-2':(youthPRViolinAprContents.kpi5 >= '0' && youthPRViolinAprContents.kpi5 <= '1.6')?'red':(youthPRViolinAprContents.kpi5 > '1.6' && youthPRViolinAprContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinAprContents.kpi5 > '2.133333333' && youthPRViolinAprContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinAprContents.kpi5 >= '2.666666667' && youthPRViolinAprContents.kpi5 < '3.2')?'green':(youthPRViolinAprContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi5}}
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
                              :color="(youthPRViolinMayContents.kpi1 == null)?'grey-2':(youthPRViolinMayContents.kpi1 >= '0' && youthPRViolinMayContents.kpi1 <= '3.6')?'red':(youthPRViolinMayContents.kpi1 > '3.6' && youthPRViolinMayContents.kpi1 <= '4.8')?'orange':(youthPRViolinMayContents.kpi1 > '4.8' && youthPRViolinMayContents.kpi1 < '6')?'yellow-7':(youthPRViolinMayContents.kpi1 >= '6' && youthPRViolinMayContents.kpi1 < '7.2')?'green':(youthPRViolinMayContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMayContents.kpi2 == null)?'grey-2':(youthPRViolinMayContents.kpi2 >= '0' && youthPRViolinMayContents.kpi2 <= '5.6')?'red':(youthPRViolinMayContents.kpi2 > '5.6' && youthPRViolinMayContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinMayContents.kpi2 > '7.466666667' && youthPRViolinMayContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinMayContents.kpi2 >= '9.333333333' && youthPRViolinMayContents.kpi2 < '11.2')?'green':(youthPRViolinMayContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMayContents.kpi3 == null)?'grey-2':(youthPRViolinMayContents.kpi3 >= '0' && youthPRViolinMayContents.kpi3 <= '2.4')?'red':(youthPRViolinMayContents.kpi3 > '2.4' && youthPRViolinMayContents.kpi3 <= '3.2')?'orange':(youthPRViolinMayContents.kpi3 > '3.2' && youthPRViolinMayContents.kpi3 < '4')?'yellow-7':(youthPRViolinMayContents.kpi3 >= '4' && youthPRViolinMayContents.kpi3 < '4.8')?'green':(youthPRViolinMayContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMayContents.kpi4 == null)?'grey-2':(youthPRViolinMayContents.kpi4 >= '0' && youthPRViolinMayContents.kpi4 <= '4.6')?'red':(youthPRViolinMayContents.kpi4 > '4.6' && youthPRViolinMayContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinMayContents.kpi4 > '6.133333333' && youthPRViolinMayContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinMayContents.kpi4 >= '7.666666667' && youthPRViolinMayContents.kpi4 < '9.2')?'green':(youthPRViolinMayContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMayContents.kpi5 == null)?'grey-2':(youthPRViolinMayContents.kpi5 >= '0' && youthPRViolinMayContents.kpi5 <= '1.6')?'red':(youthPRViolinMayContents.kpi5 > '1.6' && youthPRViolinMayContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinMayContents.kpi5 > '2.133333333' && youthPRViolinMayContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinMayContents.kpi5 >= '2.666666667' && youthPRViolinMayContents.kpi5 < '3.2')?'green':(youthPRViolinMayContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi5}}
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
                              :color="(youthPRViolinJunContents.kpi1 == null)?'grey-2':(youthPRViolinJunContents.kpi1 >= '0' && youthPRViolinJunContents.kpi1 <= '3.6')?'red':(youthPRViolinJunContents.kpi1 > '3.6' && youthPRViolinJunContents.kpi1 <= '4.8')?'orange':(youthPRViolinJunContents.kpi1 > '4.8' && youthPRViolinJunContents.kpi1 < '6')?'yellow-7':(youthPRViolinJunContents.kpi1 >= '6' && youthPRViolinJunContents.kpi1 < '7.2')?'green':(youthPRViolinJunContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJunContents.kpi2 == null)?'grey-2':(youthPRViolinJunContents.kpi2 >= '0' && youthPRViolinJunContents.kpi2 <= '5.6')?'red':(youthPRViolinJunContents.kpi2 > '5.6' && youthPRViolinJunContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinJunContents.kpi2 > '7.466666667' && youthPRViolinJunContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinJunContents.kpi2 >= '9.333333333' && youthPRViolinJunContents.kpi2 < '11.2')?'green':(youthPRViolinJunContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJunContents.kpi3 == null)?'grey-2':(youthPRViolinJunContents.kpi3 >= '0' && youthPRViolinJunContents.kpi3 <= '2.4')?'red':(youthPRViolinJunContents.kpi3 > '2.4' && youthPRViolinJunContents.kpi3 <= '3.2')?'orange':(youthPRViolinJunContents.kpi3 > '3.2' && youthPRViolinJunContents.kpi3 < '4')?'yellow-7':(youthPRViolinJunContents.kpi3 >= '4' && youthPRViolinJunContents.kpi3 < '4.8')?'green':(youthPRViolinJunContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJunContents.kpi4 == null)?'grey-2':(youthPRViolinJunContents.kpi4 >= '0' && youthPRViolinJunContents.kpi4 <= '4.6')?'red':(youthPRViolinJunContents.kpi4 > '4.6' && youthPRViolinJunContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinJunContents.kpi4 > '6.133333333' && youthPRViolinJunContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinJunContents.kpi4 >= '7.666666667' && youthPRViolinJunContents.kpi4 < '9.2')?'green':(youthPRViolinJunContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJunContents.kpi5 == null)?'grey-2':(youthPRViolinJunContents.kpi5 >= '0' && youthPRViolinJunContents.kpi5 <= '1.6')?'red':(youthPRViolinJunContents.kpi5 > '1.6' && youthPRViolinJunContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinJunContents.kpi5 > '2.133333333' && youthPRViolinJunContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinJunContents.kpi5 >= '2.666666667' && youthPRViolinJunContents.kpi5 < '3.2')?'green':(youthPRViolinJunContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi5}}
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
                              :color="(youthPRViolinJulContents.kpi1 == null)?'grey-2':(youthPRViolinJulContents.kpi1 >= '0' && youthPRViolinJulContents.kpi1 <= '3.6')?'red':(youthPRViolinJulContents.kpi1 > '3.6' && youthPRViolinJulContents.kpi1 <= '4.8')?'orange':(youthPRViolinJulContents.kpi1 > '4.8' && youthPRViolinJulContents.kpi1 < '6')?'yellow-7':(youthPRViolinJulContents.kpi1 >= '6' && youthPRViolinJulContents.kpi1 < '7.2')?'green':(youthPRViolinJulContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJulContents.kpi2 == null)?'grey-2':(youthPRViolinJulContents.kpi2 >= '0' && youthPRViolinJulContents.kpi2 <= '5.6')?'red':(youthPRViolinJulContents.kpi2 > '5.6' && youthPRViolinJulContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinJulContents.kpi2 > '7.466666667' && youthPRViolinJulContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinJulContents.kpi2 >= '9.333333333' && youthPRViolinJulContents.kpi2 < '11.2')?'green':(youthPRViolinJulContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJulContents.kpi3 == null)?'grey-2':(youthPRViolinJulContents.kpi3 >= '0' && youthPRViolinJulContents.kpi3 <= '2.4')?'red':(youthPRViolinJulContents.kpi3 > '2.4' && youthPRViolinJulContents.kpi3 <= '3.2')?'orange':(youthPRViolinJulContents.kpi3 > '3.2' && youthPRViolinJulContents.kpi3 < '4')?'yellow-7':(youthPRViolinJulContents.kpi3 >= '4' && youthPRViolinJulContents.kpi3 < '4.8')?'green':(youthPRViolinJulContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJulContents.kpi4 == null)?'grey-2':(youthPRViolinJulContents.kpi4 >= '0' && youthPRViolinJulContents.kpi4 <= '4.6')?'red':(youthPRViolinJulContents.kpi4 > '4.6' && youthPRViolinJulContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinJulContents.kpi4 > '6.133333333' && youthPRViolinJulContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinJulContents.kpi4 >= '7.666666667' && youthPRViolinJulContents.kpi4 < '9.2')?'green':(youthPRViolinJulContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJulContents.kpi5 == null)?'grey-2':(youthPRViolinJulContents.kpi5 >= '0' && youthPRViolinJulContents.kpi5 <= '1.6')?'red':(youthPRViolinJulContents.kpi5 > '1.6' && youthPRViolinJulContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinJulContents.kpi5 > '2.133333333' && youthPRViolinJulContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinJulContents.kpi5 >= '2.666666667' && youthPRViolinJulContents.kpi5 < '3.2')?'green':(youthPRViolinJulContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi5}}
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
                              :color="(youthPRViolinAugContents.kpi1 == null)?'grey-2':(youthPRViolinAugContents.kpi1 >= '0' && youthPRViolinAugContents.kpi1 <= '3.6')?'red':(youthPRViolinAugContents.kpi1 > '3.6' && youthPRViolinAugContents.kpi1 <= '4.8')?'orange':(youthPRViolinAugContents.kpi1 > '4.8' && youthPRViolinAugContents.kpi1 < '6')?'yellow-7':(youthPRViolinAugContents.kpi1 >= '6' && youthPRViolinAugContents.kpi1 < '7.2')?'green':(youthPRViolinAugContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAugContents.kpi2 == null)?'grey-2':(youthPRViolinAugContents.kpi2 >= '0' && youthPRViolinAugContents.kpi2 <= '5.6')?'red':(youthPRViolinAugContents.kpi2 > '5.6' && youthPRViolinAugContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinAugContents.kpi2 > '7.466666667' && youthPRViolinAugContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinAugContents.kpi2 >= '9.333333333' && youthPRViolinAugContents.kpi2 < '11.2')?'green':(youthPRViolinAugContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAugContents.kpi3 == null)?'grey-2':(youthPRViolinAugContents.kpi3 >= '0' && youthPRViolinAugContents.kpi3 <= '2.4')?'red':(youthPRViolinAugContents.kpi3 > '2.4' && youthPRViolinAugContents.kpi3 <= '3.2')?'orange':(youthPRViolinAugContents.kpi3 > '3.2' && youthPRViolinAugContents.kpi3 < '4')?'yellow-7':(youthPRViolinAugContents.kpi3 >= '4' && youthPRViolinAugContents.kpi3 < '4.8')?'green':(youthPRViolinAugContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAugContents.kpi4 == null)?'grey-2':(youthPRViolinAugContents.kpi4 >= '0' && youthPRViolinAugContents.kpi4 <= '4.6')?'red':(youthPRViolinAugContents.kpi4 > '4.6' && youthPRViolinAugContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinAugContents.kpi4 > '6.133333333' && youthPRViolinAugContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinAugContents.kpi4 >= '7.666666667' && youthPRViolinAugContents.kpi4 < '9.2')?'green':(youthPRViolinAugContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAugContents.kpi5 == null)?'grey-2':(youthPRViolinAugContents.kpi5 >= '0' && youthPRViolinAugContents.kpi5 <= '1.6')?'red':(youthPRViolinAugContents.kpi5 > '1.6' && youthPRViolinAugContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinAugContents.kpi5 > '2.133333333' && youthPRViolinAugContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinAugContents.kpi5 >= '2.666666667' && youthPRViolinAugContents.kpi5 < '3.2')?'green':(youthPRViolinAugContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi5}}
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
                              :color="(youthPRViolinSepContents.kpi1 == null)?'grey-2':(youthPRViolinSepContents.kpi1 >= '0' && youthPRViolinSepContents.kpi1 <= '3.6')?'red':(youthPRViolinSepContents.kpi1 > '3.6' && youthPRViolinSepContents.kpi1 <= '4.8')?'orange':(youthPRViolinSepContents.kpi1 > '4.8' && youthPRViolinSepContents.kpi1 < '6')?'yellow-7':(youthPRViolinSepContents.kpi1 >= '6' && youthPRViolinSepContents.kpi1 < '7.2')?'green':(youthPRViolinSepContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinSepContents.kpi2 == null)?'grey-2':(youthPRViolinSepContents.kpi2 >= '0' && youthPRViolinSepContents.kpi2 <= '5.6')?'red':(youthPRViolinSepContents.kpi2 > '5.6' && youthPRViolinSepContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinSepContents.kpi2 > '7.466666667' && youthPRViolinSepContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinSepContents.kpi2 >= '9.333333333' && youthPRViolinSepContents.kpi2 < '11.2')?'green':(youthPRViolinSepContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinSepContents.kpi3 == null)?'grey-2':(youthPRViolinSepContents.kpi3 >= '0' && youthPRViolinSepContents.kpi3 <= '2.4')?'red':(youthPRViolinSepContents.kpi3 > '2.4' && youthPRViolinSepContents.kpi3 <= '3.2')?'orange':(youthPRViolinSepContents.kpi3 > '3.2' && youthPRViolinSepContents.kpi3 < '4')?'yellow-7':(youthPRViolinSepContents.kpi3 >= '4' && youthPRViolinSepContents.kpi3 < '4.8')?'green':(youthPRViolinSepContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinSepContents.kpi4 == null)?'grey-2':(youthPRViolinSepContents.kpi4 >= '0' && youthPRViolinSepContents.kpi4 <= '4.6')?'red':(youthPRViolinSepContents.kpi4 > '4.6' && youthPRViolinSepContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinSepContents.kpi4 > '6.133333333' && youthPRViolinSepContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinSepContents.kpi4 >= '7.666666667' && youthPRViolinSepContents.kpi4 < '9.2')?'green':(youthPRViolinSepContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinSepContents.kpi5 == null)?'grey-2':(youthPRViolinSepContents.kpi5 >= '0' && youthPRViolinSepContents.kpi5 <= '1.6')?'red':(youthPRViolinSepContents.kpi5 > '1.6' && youthPRViolinSepContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinSepContents.kpi5 > '2.133333333' && youthPRViolinSepContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinSepContents.kpi5 >= '2.666666667' && youthPRViolinSepContents.kpi5 < '3.2')?'green':(youthPRViolinSepContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi5}}
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
                              :color="(youthPRViolinOctContents.kpi1 == null)?'grey-2':(youthPRViolinOctContents.kpi1 >= '0' && youthPRViolinOctContents.kpi1 <= '3.6')?'red':(youthPRViolinOctContents.kpi1 > '3.6' && youthPRViolinOctContents.kpi1 <= '4.8')?'orange':(youthPRViolinOctContents.kpi1 > '4.8' && youthPRViolinOctContents.kpi1 < '6')?'yellow-7':(youthPRViolinOctContents.kpi1 >= '6' && youthPRViolinOctContents.kpi1 < '7.2')?'green':(youthPRViolinOctContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinOctContents.kpi2 == null)?'grey-2':(youthPRViolinOctContents.kpi2 >= '0' && youthPRViolinOctContents.kpi2 <= '5.6')?'red':(youthPRViolinOctContents.kpi2 > '5.6' && youthPRViolinOctContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinOctContents.kpi2 > '7.466666667' && youthPRViolinOctContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinOctContents.kpi2 >= '9.333333333' && youthPRViolinOctContents.kpi2 < '11.2')?'green':(youthPRViolinOctContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinOctContents.kpi3 == null)?'grey-2':(youthPRViolinOctContents.kpi3 >= '0' && youthPRViolinOctContents.kpi3 <= '2.4')?'red':(youthPRViolinOctContents.kpi3 > '2.4' && youthPRViolinOctContents.kpi3 <= '3.2')?'orange':(youthPRViolinOctContents.kpi3 > '3.2' && youthPRViolinOctContents.kpi3 < '4')?'yellow-7':(youthPRViolinOctContents.kpi3 >= '4' && youthPRViolinOctContents.kpi3 < '4.8')?'green':(youthPRViolinOctContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinOctContents.kpi4 == null)?'grey-2':(youthPRViolinOctContents.kpi4 >= '0' && youthPRViolinOctContents.kpi4 <= '4.6')?'red':(youthPRViolinOctContents.kpi4 > '4.6' && youthPRViolinOctContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinOctContents.kpi4 > '6.133333333' && youthPRViolinOctContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinOctContents.kpi4 >= '7.666666667' && youthPRViolinOctContents.kpi4 < '9.2')?'green':(youthPRViolinOctContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinOctContents.kpi5 == null)?'grey-2':(youthPRViolinOctContents.kpi5 >= '0' && youthPRViolinOctContents.kpi5 <= '1.6')?'red':(youthPRViolinOctContents.kpi5 > '1.6' && youthPRViolinOctContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinOctContents.kpi5 > '2.133333333' && youthPRViolinOctContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinOctContents.kpi5 >= '2.666666667' && youthPRViolinOctContents.kpi5 < '3.2')?'green':(youthPRViolinOctContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi5}}
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
                              :color="(youthPRViolinNovContents.kpi1 == null)?'grey-2':(youthPRViolinNovContents.kpi1 >= '0' && youthPRViolinNovContents.kpi1 <= '3.6')?'red':(youthPRViolinNovContents.kpi1 > '3.6' && youthPRViolinNovContents.kpi1 <= '4.8')?'orange':(youthPRViolinNovContents.kpi1 > '4.8' && youthPRViolinNovContents.kpi1 < '6')?'yellow-7':(youthPRViolinNovContents.kpi1 >= '6' && youthPRViolinNovContents.kpi1 < '7.2')?'green':(youthPRViolinNovContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinNovContents.kpi2 == null)?'grey-2':(youthPRViolinNovContents.kpi2 >= '0' && youthPRViolinNovContents.kpi2 <= '5.6')?'red':(youthPRViolinNovContents.kpi2 > '5.6' && youthPRViolinNovContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinNovContents.kpi2 > '7.466666667' && youthPRViolinNovContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinNovContents.kpi2 >= '9.333333333' && youthPRViolinNovContents.kpi2 < '11.2')?'green':(youthPRViolinNovContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinNovContents.kpi3 == null)?'grey-2':(youthPRViolinNovContents.kpi3 >= '0' && youthPRViolinNovContents.kpi3 <= '2.4')?'red':(youthPRViolinNovContents.kpi3 > '2.4' && youthPRViolinNovContents.kpi3 <= '3.2')?'orange':(youthPRViolinNovContents.kpi3 > '3.2' && youthPRViolinNovContents.kpi3 < '4')?'yellow-7':(youthPRViolinNovContents.kpi3 >= '4' && youthPRViolinNovContents.kpi3 < '4.8')?'green':(youthPRViolinNovContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinNovContents.kpi4 == null)?'grey-2':(youthPRViolinNovContents.kpi4 >= '0' && youthPRViolinNovContents.kpi4 <= '4.6')?'red':(youthPRViolinNovContents.kpi4 > '4.6' && youthPRViolinNovContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinNovContents.kpi4 > '6.133333333' && youthPRViolinNovContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinNovContents.kpi4 >= '7.666666667' && youthPRViolinNovContents.kpi4 < '9.2')?'green':(youthPRViolinNovContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinNovContents.kpi5 == null)?'grey-2':(youthPRViolinNovContents.kpi5 >= '0' && youthPRViolinNovContents.kpi5 <= '1.6')?'red':(youthPRViolinNovContents.kpi5 > '1.6' && youthPRViolinNovContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinNovContents.kpi5 > '2.133333333' && youthPRViolinNovContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinNovContents.kpi5 >= '2.666666667' && youthPRViolinNovContents.kpi5 < '3.2')?'green':(youthPRViolinNovContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi5}}
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
                              :color="(youthPRViolinDecContents.kpi1 == null)?'grey-2':(youthPRViolinDecContents.kpi1 >= '0' && youthPRViolinDecContents.kpi1 <= '3.6')?'red':(youthPRViolinDecContents.kpi1 > '3.6' && youthPRViolinDecContents.kpi1 <= '4.8')?'orange':(youthPRViolinDecContents.kpi1 > '4.8' && youthPRViolinDecContents.kpi1 < '6')?'yellow-7':(youthPRViolinDecContents.kpi1 >= '6' && youthPRViolinDecContents.kpi1 < '7.2')?'green':(youthPRViolinDecContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinDecContents.kpi2 == null)?'grey-2':(youthPRViolinDecContents.kpi2 >= '0' && youthPRViolinDecContents.kpi2 <= '5.6')?'red':(youthPRViolinDecContents.kpi2 > '5.6' && youthPRViolinDecContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinDecContents.kpi2 > '7.466666667' && youthPRViolinDecContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinDecContents.kpi2 >= '9.333333333' && youthPRViolinDecContents.kpi2 < '11.2')?'green':(youthPRViolinDecContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinDecContents.kpi3 == null)?'grey-2':(youthPRViolinDecContents.kpi3 >= '0' && youthPRViolinDecContents.kpi3 <= '2.4')?'red':(youthPRViolinDecContents.kpi3 > '2.4' && youthPRViolinDecContents.kpi3 <= '3.2')?'orange':(youthPRViolinDecContents.kpi3 > '3.2' && youthPRViolinDecContents.kpi3 < '4')?'yellow-7':(youthPRViolinDecContents.kpi3 >= '4' && youthPRViolinDecContents.kpi3 < '4.8')?'green':(youthPRViolinDecContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinDecContents.kpi4 == null)?'grey-2':(youthPRViolinDecContents.kpi4 >= '0' && youthPRViolinDecContents.kpi4 <= '4.6')?'red':(youthPRViolinDecContents.kpi4 > '4.6' && youthPRViolinDecContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinDecContents.kpi4 > '6.133333333' && youthPRViolinDecContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinDecContents.kpi4 >= '7.666666667' && youthPRViolinDecContents.kpi4 < '9.2')?'green':(youthPRViolinDecContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinDecContents.kpi5 == null)?'grey-2':(youthPRViolinDecContents.kpi5 >= '0' && youthPRViolinDecContents.kpi5 <= '1.6')?'red':(youthPRViolinDecContents.kpi5 > '1.6' && youthPRViolinDecContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinDecContents.kpi5 > '2.133333333' && youthPRViolinDecContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinDecContents.kpi5 >= '2.666666667' && youthPRViolinDecContents.kpi5 < '3.2')?'green':(youthPRViolinDecContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi5}}
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
                              :color="(youthPRViolinJanContents.kpi1 == null)?'grey-2':(youthPRViolinJanContents.kpi1 >= '0' && youthPRViolinJanContents.kpi1 <= '3.6')?'red':(youthPRViolinJanContents.kpi1 > '3.6' && youthPRViolinJanContents.kpi1 <= '4.8')?'orange':(youthPRViolinJanContents.kpi1 > '4.8' && youthPRViolinJanContents.kpi1 < '6')?'yellow-7':(youthPRViolinJanContents.kpi1 >= '6' && youthPRViolinJanContents.kpi1 < '7.2')?'green':(youthPRViolinJanContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJanContents.kpi2 == null)?'grey-2':(youthPRViolinJanContents.kpi2 >= '0' && youthPRViolinJanContents.kpi2 <= '5.6')?'red':(youthPRViolinJanContents.kpi2 > '5.6' && youthPRViolinJanContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinJanContents.kpi2 > '7.466666667' && youthPRViolinJanContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinJanContents.kpi2 >= '9.333333333' && youthPRViolinJanContents.kpi2 < '11.2')?'green':(youthPRViolinJanContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJanContents.kpi3 == null)?'grey-2':(youthPRViolinJanContents.kpi3 >= '0' && youthPRViolinJanContents.kpi3 <= '2.4')?'red':(youthPRViolinJanContents.kpi3 > '2.4' && youthPRViolinJanContents.kpi3 <= '3.2')?'orange':(youthPRViolinJanContents.kpi3 > '3.2' && youthPRViolinJanContents.kpi3 < '4')?'yellow-7':(youthPRViolinJanContents.kpi3 >= '4' && youthPRViolinJanContents.kpi3 < '4.8')?'green':(youthPRViolinJanContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJanContents.kpi4 == null)?'grey-2':(youthPRViolinJanContents.kpi4 >= '0' && youthPRViolinJanContents.kpi4 <= '4.6')?'red':(youthPRViolinJanContents.kpi4 > '4.6' && youthPRViolinJanContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinJanContents.kpi4 > '6.133333333' && youthPRViolinJanContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinJanContents.kpi4 >= '7.666666667' && youthPRViolinJanContents.kpi4 < '9.2')?'green':(youthPRViolinJanContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJanContents.kpi5 == null)?'grey-2':(youthPRViolinJanContents.kpi5 >= '0' && youthPRViolinJanContents.kpi5 <= '1.6')?'red':(youthPRViolinJanContents.kpi5 > '1.6' && youthPRViolinJanContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinJanContents.kpi5 > '2.133333333' && youthPRViolinJanContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinJanContents.kpi5 >= '2.666666667' && youthPRViolinJanContents.kpi5 < '3.2')?'green':(youthPRViolinJanContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi5}}
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
                              :color="(youthPRViolinFebContents.kpi1 == null)?'grey-2':(youthPRViolinFebContents.kpi1 >= '0' && youthPRViolinFebContents.kpi1 <= '3.6')?'red':(youthPRViolinFebContents.kpi1 > '3.6' && youthPRViolinFebContents.kpi1 <= '4.8')?'orange':(youthPRViolinFebContents.kpi1 > '4.8' && youthPRViolinFebContents.kpi1 < '6')?'yellow-7':(youthPRViolinFebContents.kpi1 >= '6' && youthPRViolinFebContents.kpi1 < '7.2')?'green':(youthPRViolinFebContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinFebContents.kpi2 == null)?'grey-2':(youthPRViolinFebContents.kpi2 >= '0' && youthPRViolinFebContents.kpi2 <= '5.6')?'red':(youthPRViolinFebContents.kpi2 > '5.6' && youthPRViolinFebContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinFebContents.kpi2 > '7.466666667' && youthPRViolinFebContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinFebContents.kpi2 >= '9.333333333' && youthPRViolinFebContents.kpi2 < '11.2')?'green':(youthPRViolinFebContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinFebContents.kpi3 == null)?'grey-2':(youthPRViolinFebContents.kpi3 >= '0' && youthPRViolinFebContents.kpi3 <= '2.4')?'red':(youthPRViolinFebContents.kpi3 > '2.4' && youthPRViolinFebContents.kpi3 <= '3.2')?'orange':(youthPRViolinFebContents.kpi3 > '3.2' && youthPRViolinFebContents.kpi3 < '4')?'yellow-7':(youthPRViolinFebContents.kpi3 >= '4' && youthPRViolinFebContents.kpi3 < '4.8')?'green':(youthPRViolinFebContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinFebContents.kpi4 == null)?'grey-2':(youthPRViolinFebContents.kpi4 >= '0' && youthPRViolinFebContents.kpi4 <= '4.6')?'red':(youthPRViolinFebContents.kpi4 > '4.6' && youthPRViolinFebContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinFebContents.kpi4 > '6.133333333' && youthPRViolinFebContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinFebContents.kpi4 >= '7.666666667' && youthPRViolinFebContents.kpi4 < '9.2')?'green':(youthPRViolinFebContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinFebContents.kpi5 == null)?'grey-2':(youthPRViolinFebContents.kpi5 >= '0' && youthPRViolinFebContents.kpi5 <= '1.6')?'red':(youthPRViolinFebContents.kpi5 > '1.6' && youthPRViolinFebContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinFebContents.kpi5 > '2.133333333' && youthPRViolinFebContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinFebContents.kpi5 >= '2.666666667' && youthPRViolinFebContents.kpi5 < '3.2')?'green':(youthPRViolinFebContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi5}}
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
                              :color="(youthPRViolinMarContents.kpi1 == null)?'grey-2':(youthPRViolinMarContents.kpi1 >= '0' && youthPRViolinMarContents.kpi1 <= '3.6')?'red':(youthPRViolinMarContents.kpi1 > '3.6' && youthPRViolinMarContents.kpi1 <= '4.8')?'orange':(youthPRViolinMarContents.kpi1 > '4.8' && youthPRViolinMarContents.kpi1 < '6')?'yellow-7':(youthPRViolinMarContents.kpi1 >= '6' && youthPRViolinMarContents.kpi1 < '7.2')?'green':(youthPRViolinMarContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMarContents.kpi2 == null)?'grey-2':(youthPRViolinMarContents.kpi2 >= '0' && youthPRViolinMarContents.kpi2 <= '5.6')?'red':(youthPRViolinMarContents.kpi2 > '5.6' && youthPRViolinMarContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinMarContents.kpi2 > '7.466666667' && youthPRViolinMarContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinMarContents.kpi2 >= '9.333333333' && youthPRViolinMarContents.kpi2 < '11.2')?'green':(youthPRViolinMarContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMarContents.kpi3 == null)?'grey-2':(youthPRViolinMarContents.kpi3 >= '0' && youthPRViolinMarContents.kpi3 <= '2.4')?'red':(youthPRViolinMarContents.kpi3 > '2.4' && youthPRViolinMarContents.kpi3 <= '3.2')?'orange':(youthPRViolinMarContents.kpi3 > '3.2' && youthPRViolinMarContents.kpi3 < '4')?'yellow-7':(youthPRViolinMarContents.kpi3 >= '4' && youthPRViolinMarContents.kpi3 < '4.8')?'green':(youthPRViolinMarContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMarContents.kpi4 == null)?'grey-2':(youthPRViolinMarContents.kpi4 >= '0' && youthPRViolinMarContents.kpi4 <= '4.6')?'red':(youthPRViolinMarContents.kpi4 > '4.6' && youthPRViolinMarContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinMarContents.kpi4 > '6.133333333' && youthPRViolinMarContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinMarContents.kpi4 >= '7.666666667' && youthPRViolinMarContents.kpi4 < '9.2')?'green':(youthPRViolinMarContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMarContents.kpi5 == null)?'grey-2':(youthPRViolinMarContents.kpi5 >= '0' && youthPRViolinMarContents.kpi5 <= '1.6')?'red':(youthPRViolinMarContents.kpi5 > '1.6' && youthPRViolinMarContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinMarContents.kpi5 > '2.133333333' && youthPRViolinMarContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinMarContents.kpi5 >= '2.666666667' && youthPRViolinMarContents.kpi5 < '3.2')?'green':(youthPRViolinMarContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi5}}
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
                              :color="(youthPRViolinAprContents.kpi1 == null)?'grey-2':(youthPRViolinAprContents.kpi1 >= '0' && youthPRViolinAprContents.kpi1 <= '3.6')?'red':(youthPRViolinAprContents.kpi1 > '3.6' && youthPRViolinAprContents.kpi1 <= '4.8')?'orange':(youthPRViolinAprContents.kpi1 > '4.8' && youthPRViolinAprContents.kpi1 < '6')?'yellow-7':(youthPRViolinAprContents.kpi1 >= '6' && youthPRViolinAprContents.kpi1 < '7.2')?'green':(youthPRViolinAprContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAprContents.kpi2 == null)?'grey-2':(youthPRViolinAprContents.kpi2 >= '0' && youthPRViolinAprContents.kpi2 <= '5.6')?'red':(youthPRViolinAprContents.kpi2 > '5.6' && youthPRViolinAprContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinAprContents.kpi2 > '7.466666667' && youthPRViolinAprContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinAprContents.kpi2 >= '9.333333333' && youthPRViolinAprContents.kpi2 < '11.2')?'green':(youthPRViolinAprContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAprContents.kpi3 == null)?'grey-2':(youthPRViolinAprContents.kpi3 >= '0' && youthPRViolinAprContents.kpi3 <= '2.4')?'red':(youthPRViolinAprContents.kpi3 > '2.4' && youthPRViolinAprContents.kpi3 <= '3.2')?'orange':(youthPRViolinAprContents.kpi3 > '3.2' && youthPRViolinAprContents.kpi3 < '4')?'yellow-7':(youthPRViolinAprContents.kpi3 >= '4' && youthPRViolinAprContents.kpi3 < '4.8')?'green':(youthPRViolinAprContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAprContents.kpi4 == null)?'grey-2':(youthPRViolinAprContents.kpi4 >= '0' && youthPRViolinAprContents.kpi4 <= '4.6')?'red':(youthPRViolinAprContents.kpi4 > '4.6' && youthPRViolinAprContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinAprContents.kpi4 > '6.133333333' && youthPRViolinAprContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinAprContents.kpi4 >= '7.666666667' && youthPRViolinAprContents.kpi4 < '9.2')?'green':(youthPRViolinAprContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAprContents.kpi5 == null)?'grey-2':(youthPRViolinAprContents.kpi5 >= '0' && youthPRViolinAprContents.kpi5 <= '1.6')?'red':(youthPRViolinAprContents.kpi5 > '1.6' && youthPRViolinAprContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinAprContents.kpi5 > '2.133333333' && youthPRViolinAprContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinAprContents.kpi5 >= '2.666666667' && youthPRViolinAprContents.kpi5 < '3.2')?'green':(youthPRViolinAprContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi5}}
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
                              :color="(youthPRViolinMayContents.kpi1 == null)?'grey-2':(youthPRViolinMayContents.kpi1 >= '0' && youthPRViolinMayContents.kpi1 <= '3.6')?'red':(youthPRViolinMayContents.kpi1 > '3.6' && youthPRViolinMayContents.kpi1 <= '4.8')?'orange':(youthPRViolinMayContents.kpi1 > '4.8' && youthPRViolinMayContents.kpi1 < '6')?'yellow-7':(youthPRViolinMayContents.kpi1 >= '6' && youthPRViolinMayContents.kpi1 < '7.2')?'green':(youthPRViolinMayContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMayContents.kpi2 == null)?'grey-2':(youthPRViolinMayContents.kpi2 >= '0' && youthPRViolinMayContents.kpi2 <= '5.6')?'red':(youthPRViolinMayContents.kpi2 > '5.6' && youthPRViolinMayContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinMayContents.kpi2 > '7.466666667' && youthPRViolinMayContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinMayContents.kpi2 >= '9.333333333' && youthPRViolinMayContents.kpi2 < '11.2')?'green':(youthPRViolinMayContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMayContents.kpi3 == null)?'grey-2':(youthPRViolinMayContents.kpi3 >= '0' && youthPRViolinMayContents.kpi3 <= '2.4')?'red':(youthPRViolinMayContents.kpi3 > '2.4' && youthPRViolinMayContents.kpi3 <= '3.2')?'orange':(youthPRViolinMayContents.kpi3 > '3.2' && youthPRViolinMayContents.kpi3 < '4')?'yellow-7':(youthPRViolinMayContents.kpi3 >= '4' && youthPRViolinMayContents.kpi3 < '4.8')?'green':(youthPRViolinMayContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMayContents.kpi4 == null)?'grey-2':(youthPRViolinMayContents.kpi4 >= '0' && youthPRViolinMayContents.kpi4 <= '4.6')?'red':(youthPRViolinMayContents.kpi4 > '4.6' && youthPRViolinMayContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinMayContents.kpi4 > '6.133333333' && youthPRViolinMayContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinMayContents.kpi4 >= '7.666666667' && youthPRViolinMayContents.kpi4 < '9.2')?'green':(youthPRViolinMayContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMayContents.kpi5 == null)?'grey-2':(youthPRViolinMayContents.kpi5 >= '0' && youthPRViolinMayContents.kpi5 <= '1.6')?'red':(youthPRViolinMayContents.kpi5 > '1.6' && youthPRViolinMayContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinMayContents.kpi5 > '2.133333333' && youthPRViolinMayContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinMayContents.kpi5 >= '2.666666667' && youthPRViolinMayContents.kpi5 < '3.2')?'green':(youthPRViolinMayContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi5}}
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
                              :color="(youthPRViolinJunContents.kpi1 == null)?'grey-2':(youthPRViolinJunContents.kpi1 >= '0' && youthPRViolinJunContents.kpi1 <= '3.6')?'red':(youthPRViolinJunContents.kpi1 > '3.6' && youthPRViolinJunContents.kpi1 <= '4.8')?'orange':(youthPRViolinJunContents.kpi1 > '4.8' && youthPRViolinJunContents.kpi1 < '6')?'yellow-7':(youthPRViolinJunContents.kpi1 >= '6' && youthPRViolinJunContents.kpi1 < '7.2')?'green':(youthPRViolinJunContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJunContents.kpi2 == null)?'grey-2':(youthPRViolinJunContents.kpi2 >= '0' && youthPRViolinJunContents.kpi2 <= '5.6')?'red':(youthPRViolinJunContents.kpi2 > '5.6' && youthPRViolinJunContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinJunContents.kpi2 > '7.466666667' && youthPRViolinJunContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinJunContents.kpi2 >= '9.333333333' && youthPRViolinJunContents.kpi2 < '11.2')?'green':(youthPRViolinJunContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJunContents.kpi3 == null)?'grey-2':(youthPRViolinJunContents.kpi3 >= '0' && youthPRViolinJunContents.kpi3 <= '2.4')?'red':(youthPRViolinJunContents.kpi3 > '2.4' && youthPRViolinJunContents.kpi3 <= '3.2')?'orange':(youthPRViolinJunContents.kpi3 > '3.2' && youthPRViolinJunContents.kpi3 < '4')?'yellow-7':(youthPRViolinJunContents.kpi3 >= '4' && youthPRViolinJunContents.kpi3 < '4.8')?'green':(youthPRViolinJunContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJunContents.kpi4 == null)?'grey-2':(youthPRViolinJunContents.kpi4 >= '0' && youthPRViolinJunContents.kpi4 <= '4.6')?'red':(youthPRViolinJunContents.kpi4 > '4.6' && youthPRViolinJunContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinJunContents.kpi4 > '6.133333333' && youthPRViolinJunContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinJunContents.kpi4 >= '7.666666667' && youthPRViolinJunContents.kpi4 < '9.2')?'green':(youthPRViolinJunContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJunContents.kpi5 == null)?'grey-2':(youthPRViolinJunContents.kpi5 >= '0' && youthPRViolinJunContents.kpi5 <= '1.6')?'red':(youthPRViolinJunContents.kpi5 > '1.6' && youthPRViolinJunContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinJunContents.kpi5 > '2.133333333' && youthPRViolinJunContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinJunContents.kpi5 >= '2.666666667' && youthPRViolinJunContents.kpi5 < '3.2')?'green':(youthPRViolinJunContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi5}}
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
                              :color="(youthPRViolinJulContents.kpi1 == null)?'grey-2':(youthPRViolinJulContents.kpi1 >= '0' && youthPRViolinJulContents.kpi1 <= '3.6')?'red':(youthPRViolinJulContents.kpi1 > '3.6' && youthPRViolinJulContents.kpi1 <= '4.8')?'orange':(youthPRViolinJulContents.kpi1 > '4.8' && youthPRViolinJulContents.kpi1 < '6')?'yellow-7':(youthPRViolinJulContents.kpi1 >= '6' && youthPRViolinJulContents.kpi1 < '7.2')?'green':(youthPRViolinJulContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJulContents.kpi2 == null)?'grey-2':(youthPRViolinJulContents.kpi2 >= '0' && youthPRViolinJulContents.kpi2 <= '5.6')?'red':(youthPRViolinJulContents.kpi2 > '5.6' && youthPRViolinJulContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinJulContents.kpi2 > '7.466666667' && youthPRViolinJulContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinJulContents.kpi2 >= '9.333333333' && youthPRViolinJulContents.kpi2 < '11.2')?'green':(youthPRViolinJulContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJulContents.kpi3 == null)?'grey-2':(youthPRViolinJulContents.kpi3 >= '0' && youthPRViolinJulContents.kpi3 <= '2.4')?'red':(youthPRViolinJulContents.kpi3 > '2.4' && youthPRViolinJulContents.kpi3 <= '3.2')?'orange':(youthPRViolinJulContents.kpi3 > '3.2' && youthPRViolinJulContents.kpi3 < '4')?'yellow-7':(youthPRViolinJulContents.kpi3 >= '4' && youthPRViolinJulContents.kpi3 < '4.8')?'green':(youthPRViolinJulContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJulContents.kpi4 == null)?'grey-2':(youthPRViolinJulContents.kpi4 >= '0' && youthPRViolinJulContents.kpi4 <= '4.6')?'red':(youthPRViolinJulContents.kpi4 > '4.6' && youthPRViolinJulContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinJulContents.kpi4 > '6.133333333' && youthPRViolinJulContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinJulContents.kpi4 >= '7.666666667' && youthPRViolinJulContents.kpi4 < '9.2')?'green':(youthPRViolinJulContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJulContents.kpi5 == null)?'grey-2':(youthPRViolinJulContents.kpi5 >= '0' && youthPRViolinJulContents.kpi5 <= '1.6')?'red':(youthPRViolinJulContents.kpi5 > '1.6' && youthPRViolinJulContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinJulContents.kpi5 > '2.133333333' && youthPRViolinJulContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinJulContents.kpi5 >= '2.666666667' && youthPRViolinJulContents.kpi5 < '3.2')?'green':(youthPRViolinJulContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi5}}
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
                              :color="(youthPRViolinAugContents.kpi1 == null)?'grey-2':(youthPRViolinAugContents.kpi1 >= '0' && youthPRViolinAugContents.kpi1 <= '3.6')?'red':(youthPRViolinAugContents.kpi1 > '3.6' && youthPRViolinAugContents.kpi1 <= '4.8')?'orange':(youthPRViolinAugContents.kpi1 > '4.8' && youthPRViolinAugContents.kpi1 < '6')?'yellow-7':(youthPRViolinAugContents.kpi1 >= '6' && youthPRViolinAugContents.kpi1 < '7.2')?'green':(youthPRViolinAugContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAugContents.kpi2 == null)?'grey-2':(youthPRViolinAugContents.kpi2 >= '0' && youthPRViolinAugContents.kpi2 <= '5.6')?'red':(youthPRViolinAugContents.kpi2 > '5.6' && youthPRViolinAugContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinAugContents.kpi2 > '7.466666667' && youthPRViolinAugContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinAugContents.kpi2 >= '9.333333333' && youthPRViolinAugContents.kpi2 < '11.2')?'green':(youthPRViolinAugContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAugContents.kpi3 == null)?'grey-2':(youthPRViolinAugContents.kpi3 >= '0' && youthPRViolinAugContents.kpi3 <= '2.4')?'red':(youthPRViolinAugContents.kpi3 > '2.4' && youthPRViolinAugContents.kpi3 <= '3.2')?'orange':(youthPRViolinAugContents.kpi3 > '3.2' && youthPRViolinAugContents.kpi3 < '4')?'yellow-7':(youthPRViolinAugContents.kpi3 >= '4' && youthPRViolinAugContents.kpi3 < '4.8')?'green':(youthPRViolinAugContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAugContents.kpi4 == null)?'grey-2':(youthPRViolinAugContents.kpi4 >= '0' && youthPRViolinAugContents.kpi4 <= '4.6')?'red':(youthPRViolinAugContents.kpi4 > '4.6' && youthPRViolinAugContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinAugContents.kpi4 > '6.133333333' && youthPRViolinAugContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinAugContents.kpi4 >= '7.666666667' && youthPRViolinAugContents.kpi4 < '9.2')?'green':(youthPRViolinAugContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAugContents.kpi5 == null)?'grey-2':(youthPRViolinAugContents.kpi5 >= '0' && youthPRViolinAugContents.kpi5 <= '1.6')?'red':(youthPRViolinAugContents.kpi5 > '1.6' && youthPRViolinAugContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinAugContents.kpi5 > '2.133333333' && youthPRViolinAugContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinAugContents.kpi5 >= '2.666666667' && youthPRViolinAugContents.kpi5 < '3.2')?'green':(youthPRViolinAugContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi5}}
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
                              :color="(youthPRViolinSepContents.kpi1 == null)?'grey-2':(youthPRViolinSepContents.kpi1 >= '0' && youthPRViolinSepContents.kpi1 <= '3.6')?'red':(youthPRViolinSepContents.kpi1 > '3.6' && youthPRViolinSepContents.kpi1 <= '4.8')?'orange':(youthPRViolinSepContents.kpi1 > '4.8' && youthPRViolinSepContents.kpi1 < '6')?'yellow-7':(youthPRViolinSepContents.kpi1 >= '6' && youthPRViolinSepContents.kpi1 < '7.2')?'green':(youthPRViolinSepContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinSepContents.kpi2 == null)?'grey-2':(youthPRViolinSepContents.kpi2 >= '0' && youthPRViolinSepContents.kpi2 <= '5.6')?'red':(youthPRViolinSepContents.kpi2 > '5.6' && youthPRViolinSepContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinSepContents.kpi2 > '7.466666667' && youthPRViolinSepContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinSepContents.kpi2 >= '9.333333333' && youthPRViolinSepContents.kpi2 < '11.2')?'green':(youthPRViolinSepContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinSepContents.kpi3 == null)?'grey-2':(youthPRViolinSepContents.kpi3 >= '0' && youthPRViolinSepContents.kpi3 <= '2.4')?'red':(youthPRViolinSepContents.kpi3 > '2.4' && youthPRViolinSepContents.kpi3 <= '3.2')?'orange':(youthPRViolinSepContents.kpi3 > '3.2' && youthPRViolinSepContents.kpi3 < '4')?'yellow-7':(youthPRViolinSepContents.kpi3 >= '4' && youthPRViolinSepContents.kpi3 < '4.8')?'green':(youthPRViolinSepContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinSepContents.kpi4 == null)?'grey-2':(youthPRViolinSepContents.kpi4 >= '0' && youthPRViolinSepContents.kpi4 <= '4.6')?'red':(youthPRViolinSepContents.kpi4 > '4.6' && youthPRViolinSepContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinSepContents.kpi4 > '6.133333333' && youthPRViolinSepContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinSepContents.kpi4 >= '7.666666667' && youthPRViolinSepContents.kpi4 < '9.2')?'green':(youthPRViolinSepContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinSepContents.kpi5 == null)?'grey-2':(youthPRViolinSepContents.kpi5 >= '0' && youthPRViolinSepContents.kpi5 <= '1.6')?'red':(youthPRViolinSepContents.kpi5 > '1.6' && youthPRViolinSepContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinSepContents.kpi5 > '2.133333333' && youthPRViolinSepContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinSepContents.kpi5 >= '2.666666667' && youthPRViolinSepContents.kpi5 < '3.2')?'green':(youthPRViolinSepContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi5}}
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
                              :color="(youthPRViolinOctContents.kpi1 == null)?'grey-2':(youthPRViolinOctContents.kpi1 >= '0' && youthPRViolinOctContents.kpi1 <= '3.6')?'red':(youthPRViolinOctContents.kpi1 > '3.6' && youthPRViolinOctContents.kpi1 <= '4.8')?'orange':(youthPRViolinOctContents.kpi1 > '4.8' && youthPRViolinOctContents.kpi1 < '6')?'yellow-7':(youthPRViolinOctContents.kpi1 >= '6' && youthPRViolinOctContents.kpi1 < '7.2')?'green':(youthPRViolinOctContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinOctContents.kpi2 == null)?'grey-2':(youthPRViolinOctContents.kpi2 >= '0' && youthPRViolinOctContents.kpi2 <= '5.6')?'red':(youthPRViolinOctContents.kpi2 > '5.6' && youthPRViolinOctContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinOctContents.kpi2 > '7.466666667' && youthPRViolinOctContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinOctContents.kpi2 >= '9.333333333' && youthPRViolinOctContents.kpi2 < '11.2')?'green':(youthPRViolinOctContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinOctContents.kpi3 == null)?'grey-2':(youthPRViolinOctContents.kpi3 >= '0' && youthPRViolinOctContents.kpi3 <= '2.4')?'red':(youthPRViolinOctContents.kpi3 > '2.4' && youthPRViolinOctContents.kpi3 <= '3.2')?'orange':(youthPRViolinOctContents.kpi3 > '3.2' && youthPRViolinOctContents.kpi3 < '4')?'yellow-7':(youthPRViolinOctContents.kpi3 >= '4' && youthPRViolinOctContents.kpi3 < '4.8')?'green':(youthPRViolinOctContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinOctContents.kpi4 == null)?'grey-2':(youthPRViolinOctContents.kpi4 >= '0' && youthPRViolinOctContents.kpi4 <= '4.6')?'red':(youthPRViolinOctContents.kpi4 > '4.6' && youthPRViolinOctContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinOctContents.kpi4 > '6.133333333' && youthPRViolinOctContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinOctContents.kpi4 >= '7.666666667' && youthPRViolinOctContents.kpi4 < '9.2')?'green':(youthPRViolinOctContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinOctContents.kpi5 == null)?'grey-2':(youthPRViolinOctContents.kpi5 >= '0' && youthPRViolinOctContents.kpi5 <= '1.6')?'red':(youthPRViolinOctContents.kpi5 > '1.6' && youthPRViolinOctContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinOctContents.kpi5 > '2.133333333' && youthPRViolinOctContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinOctContents.kpi5 >= '2.666666667' && youthPRViolinOctContents.kpi5 < '3.2')?'green':(youthPRViolinOctContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi5}}
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
                              :color="(youthPRViolinNovContents.kpi1 == null)?'grey-2':(youthPRViolinNovContents.kpi1 >= '0' && youthPRViolinNovContents.kpi1 <= '3.6')?'red':(youthPRViolinNovContents.kpi1 > '3.6' && youthPRViolinNovContents.kpi1 <= '4.8')?'orange':(youthPRViolinNovContents.kpi1 > '4.8' && youthPRViolinNovContents.kpi1 < '6')?'yellow-7':(youthPRViolinNovContents.kpi1 >= '6' && youthPRViolinNovContents.kpi1 < '7.2')?'green':(youthPRViolinNovContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinNovContents.kpi2 == null)?'grey-2':(youthPRViolinNovContents.kpi2 >= '0' && youthPRViolinNovContents.kpi2 <= '5.6')?'red':(youthPRViolinNovContents.kpi2 > '5.6' && youthPRViolinNovContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinNovContents.kpi2 > '7.466666667' && youthPRViolinNovContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinNovContents.kpi2 >= '9.333333333' && youthPRViolinNovContents.kpi2 < '11.2')?'green':(youthPRViolinNovContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinNovContents.kpi3 == null)?'grey-2':(youthPRViolinNovContents.kpi3 >= '0' && youthPRViolinNovContents.kpi3 <= '2.4')?'red':(youthPRViolinNovContents.kpi3 > '2.4' && youthPRViolinNovContents.kpi3 <= '3.2')?'orange':(youthPRViolinNovContents.kpi3 > '3.2' && youthPRViolinNovContents.kpi3 < '4')?'yellow-7':(youthPRViolinNovContents.kpi3 >= '4' && youthPRViolinNovContents.kpi3 < '4.8')?'green':(youthPRViolinNovContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinNovContents.kpi4 == null)?'grey-2':(youthPRViolinNovContents.kpi4 >= '0' && youthPRViolinNovContents.kpi4 <= '4.6')?'red':(youthPRViolinNovContents.kpi4 > '4.6' && youthPRViolinNovContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinNovContents.kpi4 > '6.133333333' && youthPRViolinNovContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinNovContents.kpi4 >= '7.666666667' && youthPRViolinNovContents.kpi4 < '9.2')?'green':(youthPRViolinNovContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinNovContents.kpi5 == null)?'grey-2':(youthPRViolinNovContents.kpi5 >= '0' && youthPRViolinNovContents.kpi5 <= '1.6')?'red':(youthPRViolinNovContents.kpi5 > '1.6' && youthPRViolinNovContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinNovContents.kpi5 > '2.133333333' && youthPRViolinNovContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinNovContents.kpi5 >= '2.666666667' && youthPRViolinNovContents.kpi5 < '3.2')?'green':(youthPRViolinNovContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi5}}
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
                              :color="(youthPRViolinDecContents.kpi1 == null)?'grey-2':(youthPRViolinDecContents.kpi1 >= '0' && youthPRViolinDecContents.kpi1 <= '3.6')?'red':(youthPRViolinDecContents.kpi1 > '3.6' && youthPRViolinDecContents.kpi1 <= '4.8')?'orange':(youthPRViolinDecContents.kpi1 > '4.8' && youthPRViolinDecContents.kpi1 < '6')?'yellow-7':(youthPRViolinDecContents.kpi1 >= '6' && youthPRViolinDecContents.kpi1 < '7.2')?'green':(youthPRViolinDecContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinDecContents.kpi2 == null)?'grey-2':(youthPRViolinDecContents.kpi2 >= '0' && youthPRViolinDecContents.kpi2 <= '5.6')?'red':(youthPRViolinDecContents.kpi2 > '5.6' && youthPRViolinDecContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinDecContents.kpi2 > '7.466666667' && youthPRViolinDecContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinDecContents.kpi2 >= '9.333333333' && youthPRViolinDecContents.kpi2 < '11.2')?'green':(youthPRViolinDecContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinDecContents.kpi3 == null)?'grey-2':(youthPRViolinDecContents.kpi3 >= '0' && youthPRViolinDecContents.kpi3 <= '2.4')?'red':(youthPRViolinDecContents.kpi3 > '2.4' && youthPRViolinDecContents.kpi3 <= '3.2')?'orange':(youthPRViolinDecContents.kpi3 > '3.2' && youthPRViolinDecContents.kpi3 < '4')?'yellow-7':(youthPRViolinDecContents.kpi3 >= '4' && youthPRViolinDecContents.kpi3 < '4.8')?'green':(youthPRViolinDecContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinDecContents.kpi4 == null)?'grey-2':(youthPRViolinDecContents.kpi4 >= '0' && youthPRViolinDecContents.kpi4 <= '4.6')?'red':(youthPRViolinDecContents.kpi4 > '4.6' && youthPRViolinDecContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinDecContents.kpi4 > '6.133333333' && youthPRViolinDecContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinDecContents.kpi4 >= '7.666666667' && youthPRViolinDecContents.kpi4 < '9.2')?'green':(youthPRViolinDecContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinDecContents.kpi5 == null)?'grey-2':(youthPRViolinDecContents.kpi5 >= '0' && youthPRViolinDecContents.kpi5 <= '1.6')?'red':(youthPRViolinDecContents.kpi5 > '1.6' && youthPRViolinDecContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinDecContents.kpi5 > '2.133333333' && youthPRViolinDecContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinDecContents.kpi5 >= '2.666666667' && youthPRViolinDecContents.kpi5 < '3.2')?'green':(youthPRViolinDecContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi5}}
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
                              :color="(youthPRViolinJanContents.kpi1 == null)?'grey-2':(youthPRViolinJanContents.kpi1 >= '0' && youthPRViolinJanContents.kpi1 <= '3.6')?'red':(youthPRViolinJanContents.kpi1 > '3.6' && youthPRViolinJanContents.kpi1 <= '4.8')?'orange':(youthPRViolinJanContents.kpi1 > '4.8' && youthPRViolinJanContents.kpi1 < '6')?'yellow-7':(youthPRViolinJanContents.kpi1 >= '6' && youthPRViolinJanContents.kpi1 < '7.2')?'green':(youthPRViolinJanContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJanContents.kpi2 == null)?'grey-2':(youthPRViolinJanContents.kpi2 >= '0' && youthPRViolinJanContents.kpi2 <= '5.6')?'red':(youthPRViolinJanContents.kpi2 > '5.6' && youthPRViolinJanContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinJanContents.kpi2 > '7.466666667' && youthPRViolinJanContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinJanContents.kpi2 >= '9.333333333' && youthPRViolinJanContents.kpi2 < '11.2')?'green':(youthPRViolinJanContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJanContents.kpi3 == null)?'grey-2':(youthPRViolinJanContents.kpi3 >= '0' && youthPRViolinJanContents.kpi3 <= '2.4')?'red':(youthPRViolinJanContents.kpi3 > '2.4' && youthPRViolinJanContents.kpi3 <= '3.2')?'orange':(youthPRViolinJanContents.kpi3 > '3.2' && youthPRViolinJanContents.kpi3 < '4')?'yellow-7':(youthPRViolinJanContents.kpi3 >= '4' && youthPRViolinJanContents.kpi3 < '4.8')?'green':(youthPRViolinJanContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJanContents.kpi4 == null)?'grey-2':(youthPRViolinJanContents.kpi4 >= '0' && youthPRViolinJanContents.kpi4 <= '4.6')?'red':(youthPRViolinJanContents.kpi4 > '4.6' && youthPRViolinJanContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinJanContents.kpi4 > '6.133333333' && youthPRViolinJanContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinJanContents.kpi4 >= '7.666666667' && youthPRViolinJanContents.kpi4 < '9.2')?'green':(youthPRViolinJanContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJanContents.kpi5 == null)?'grey-2':(youthPRViolinJanContents.kpi5 >= '0' && youthPRViolinJanContents.kpi5 <= '1.6')?'red':(youthPRViolinJanContents.kpi5 > '1.6' && youthPRViolinJanContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinJanContents.kpi5 > '2.133333333' && youthPRViolinJanContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinJanContents.kpi5 >= '2.666666667' && youthPRViolinJanContents.kpi5 < '3.2')?'green':(youthPRViolinJanContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi5}}
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
                              :color="(youthPRViolinFebContents.kpi1 == null)?'grey-2':(youthPRViolinFebContents.kpi1 >= '0' && youthPRViolinFebContents.kpi1 <= '3.6')?'red':(youthPRViolinFebContents.kpi1 > '3.6' && youthPRViolinFebContents.kpi1 <= '4.8')?'orange':(youthPRViolinFebContents.kpi1 > '4.8' && youthPRViolinFebContents.kpi1 < '6')?'yellow-7':(youthPRViolinFebContents.kpi1 >= '6' && youthPRViolinFebContents.kpi1 < '7.2')?'green':(youthPRViolinFebContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinFebContents.kpi2 == null)?'grey-2':(youthPRViolinFebContents.kpi2 >= '0' && youthPRViolinFebContents.kpi2 <= '5.6')?'red':(youthPRViolinFebContents.kpi2 > '5.6' && youthPRViolinFebContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinFebContents.kpi2 > '7.466666667' && youthPRViolinFebContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinFebContents.kpi2 >= '9.333333333' && youthPRViolinFebContents.kpi2 < '11.2')?'green':(youthPRViolinFebContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinFebContents.kpi3 == null)?'grey-2':(youthPRViolinFebContents.kpi3 >= '0' && youthPRViolinFebContents.kpi3 <= '2.4')?'red':(youthPRViolinFebContents.kpi3 > '2.4' && youthPRViolinFebContents.kpi3 <= '3.2')?'orange':(youthPRViolinFebContents.kpi3 > '3.2' && youthPRViolinFebContents.kpi3 < '4')?'yellow-7':(youthPRViolinFebContents.kpi3 >= '4' && youthPRViolinFebContents.kpi3 < '4.8')?'green':(youthPRViolinFebContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinFebContents.kpi4 == null)?'grey-2':(youthPRViolinFebContents.kpi4 >= '0' && youthPRViolinFebContents.kpi4 <= '4.6')?'red':(youthPRViolinFebContents.kpi4 > '4.6' && youthPRViolinFebContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinFebContents.kpi4 > '6.133333333' && youthPRViolinFebContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinFebContents.kpi4 >= '7.666666667' && youthPRViolinFebContents.kpi4 < '9.2')?'green':(youthPRViolinFebContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinFebContents.kpi5 == null)?'grey-2':(youthPRViolinFebContents.kpi5 >= '0' && youthPRViolinFebContents.kpi5 <= '1.6')?'red':(youthPRViolinFebContents.kpi5 > '1.6' && youthPRViolinFebContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinFebContents.kpi5 > '2.133333333' && youthPRViolinFebContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinFebContents.kpi5 >= '2.666666667' && youthPRViolinFebContents.kpi5 < '3.2')?'green':(youthPRViolinFebContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi5}}
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
                              :color="(youthPRViolinMarContents.kpi1 == null)?'grey-2':(youthPRViolinMarContents.kpi1 >= '0' && youthPRViolinMarContents.kpi1 <= '3.6')?'red':(youthPRViolinMarContents.kpi1 > '3.6' && youthPRViolinMarContents.kpi1 <= '4.8')?'orange':(youthPRViolinMarContents.kpi1 > '4.8' && youthPRViolinMarContents.kpi1 < '6')?'yellow-7':(youthPRViolinMarContents.kpi1 >= '6' && youthPRViolinMarContents.kpi1 < '7.2')?'green':(youthPRViolinMarContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMarContents.kpi2 == null)?'grey-2':(youthPRViolinMarContents.kpi2 >= '0' && youthPRViolinMarContents.kpi2 <= '5.6')?'red':(youthPRViolinMarContents.kpi2 > '5.6' && youthPRViolinMarContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinMarContents.kpi2 > '7.466666667' && youthPRViolinMarContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinMarContents.kpi2 >= '9.333333333' && youthPRViolinMarContents.kpi2 < '11.2')?'green':(youthPRViolinMarContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMarContents.kpi3 == null)?'grey-2':(youthPRViolinMarContents.kpi3 >= '0' && youthPRViolinMarContents.kpi3 <= '2.4')?'red':(youthPRViolinMarContents.kpi3 > '2.4' && youthPRViolinMarContents.kpi3 <= '3.2')?'orange':(youthPRViolinMarContents.kpi3 > '3.2' && youthPRViolinMarContents.kpi3 < '4')?'yellow-7':(youthPRViolinMarContents.kpi3 >= '4' && youthPRViolinMarContents.kpi3 < '4.8')?'green':(youthPRViolinMarContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMarContents.kpi4 == null)?'grey-2':(youthPRViolinMarContents.kpi4 >= '0' && youthPRViolinMarContents.kpi4 <= '4.6')?'red':(youthPRViolinMarContents.kpi4 > '4.6' && youthPRViolinMarContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinMarContents.kpi4 > '6.133333333' && youthPRViolinMarContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinMarContents.kpi4 >= '7.666666667' && youthPRViolinMarContents.kpi4 < '9.2')?'green':(youthPRViolinMarContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMarContents.kpi5 == null)?'grey-2':(youthPRViolinMarContents.kpi5 >= '0' && youthPRViolinMarContents.kpi5 <= '1.6')?'red':(youthPRViolinMarContents.kpi5 > '1.6' && youthPRViolinMarContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinMarContents.kpi5 > '2.133333333' && youthPRViolinMarContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinMarContents.kpi5 >= '2.666666667' && youthPRViolinMarContents.kpi5 < '3.2')?'green':(youthPRViolinMarContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi5}}
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
                              :color="(youthPRViolinAprContents.kpi1 == null)?'grey-2':(youthPRViolinAprContents.kpi1 >= '0' && youthPRViolinAprContents.kpi1 <= '3.6')?'red':(youthPRViolinAprContents.kpi1 > '3.6' && youthPRViolinAprContents.kpi1 <= '4.8')?'orange':(youthPRViolinAprContents.kpi1 > '4.8' && youthPRViolinAprContents.kpi1 < '6')?'yellow-7':(youthPRViolinAprContents.kpi1 >= '6' && youthPRViolinAprContents.kpi1 < '7.2')?'green':(youthPRViolinAprContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAprContents.kpi2 == null)?'grey-2':(youthPRViolinAprContents.kpi2 >= '0' && youthPRViolinAprContents.kpi2 <= '5.6')?'red':(youthPRViolinAprContents.kpi2 > '5.6' && youthPRViolinAprContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinAprContents.kpi2 > '7.466666667' && youthPRViolinAprContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinAprContents.kpi2 >= '9.333333333' && youthPRViolinAprContents.kpi2 < '11.2')?'green':(youthPRViolinAprContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAprContents.kpi3 == null)?'grey-2':(youthPRViolinAprContents.kpi3 >= '0' && youthPRViolinAprContents.kpi3 <= '2.4')?'red':(youthPRViolinAprContents.kpi3 > '2.4' && youthPRViolinAprContents.kpi3 <= '3.2')?'orange':(youthPRViolinAprContents.kpi3 > '3.2' && youthPRViolinAprContents.kpi3 < '4')?'yellow-7':(youthPRViolinAprContents.kpi3 >= '4' && youthPRViolinAprContents.kpi3 < '4.8')?'green':(youthPRViolinAprContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAprContents.kpi4 == null)?'grey-2':(youthPRViolinAprContents.kpi4 >= '0' && youthPRViolinAprContents.kpi4 <= '4.6')?'red':(youthPRViolinAprContents.kpi4 > '4.6' && youthPRViolinAprContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinAprContents.kpi4 > '6.133333333' && youthPRViolinAprContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinAprContents.kpi4 >= '7.666666667' && youthPRViolinAprContents.kpi4 < '9.2')?'green':(youthPRViolinAprContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAprContents.kpi5 == null)?'grey-2':(youthPRViolinAprContents.kpi5 >= '0' && youthPRViolinAprContents.kpi5 <= '1.6')?'red':(youthPRViolinAprContents.kpi5 > '1.6' && youthPRViolinAprContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinAprContents.kpi5 > '2.133333333' && youthPRViolinAprContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinAprContents.kpi5 >= '2.666666667' && youthPRViolinAprContents.kpi5 < '3.2')?'green':(youthPRViolinAprContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi5}}
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
                              :color="(youthPRViolinMayContents.kpi1 == null)?'grey-2':(youthPRViolinMayContents.kpi1 >= '0' && youthPRViolinMayContents.kpi1 <= '3.6')?'red':(youthPRViolinMayContents.kpi1 > '3.6' && youthPRViolinMayContents.kpi1 <= '4.8')?'orange':(youthPRViolinMayContents.kpi1 > '4.8' && youthPRViolinMayContents.kpi1 < '6')?'yellow-7':(youthPRViolinMayContents.kpi1 >= '6' && youthPRViolinMayContents.kpi1 < '7.2')?'green':(youthPRViolinMayContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMayContents.kpi2 == null)?'grey-2':(youthPRViolinMayContents.kpi2 >= '0' && youthPRViolinMayContents.kpi2 <= '5.6')?'red':(youthPRViolinMayContents.kpi2 > '5.6' && youthPRViolinMayContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinMayContents.kpi2 > '7.466666667' && youthPRViolinMayContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinMayContents.kpi2 >= '9.333333333' && youthPRViolinMayContents.kpi2 < '11.2')?'green':(youthPRViolinMayContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMayContents.kpi3 == null)?'grey-2':(youthPRViolinMayContents.kpi3 >= '0' && youthPRViolinMayContents.kpi3 <= '2.4')?'red':(youthPRViolinMayContents.kpi3 > '2.4' && youthPRViolinMayContents.kpi3 <= '3.2')?'orange':(youthPRViolinMayContents.kpi3 > '3.2' && youthPRViolinMayContents.kpi3 < '4')?'yellow-7':(youthPRViolinMayContents.kpi3 >= '4' && youthPRViolinMayContents.kpi3 < '4.8')?'green':(youthPRViolinMayContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMayContents.kpi4 == null)?'grey-2':(youthPRViolinMayContents.kpi4 >= '0' && youthPRViolinMayContents.kpi4 <= '4.6')?'red':(youthPRViolinMayContents.kpi4 > '4.6' && youthPRViolinMayContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinMayContents.kpi4 > '6.133333333' && youthPRViolinMayContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinMayContents.kpi4 >= '7.666666667' && youthPRViolinMayContents.kpi4 < '9.2')?'green':(youthPRViolinMayContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMayContents.kpi5 == null)?'grey-2':(youthPRViolinMayContents.kpi5 >= '0' && youthPRViolinMayContents.kpi5 <= '1.6')?'red':(youthPRViolinMayContents.kpi5 > '1.6' && youthPRViolinMayContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinMayContents.kpi5 > '2.133333333' && youthPRViolinMayContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinMayContents.kpi5 >= '2.666666667' && youthPRViolinMayContents.kpi5 < '3.2')?'green':(youthPRViolinMayContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi5}}
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
                              :color="(youthPRViolinJunContents.kpi1 == null)?'grey-2':(youthPRViolinJunContents.kpi1 >= '0' && youthPRViolinJunContents.kpi1 <= '3.6')?'red':(youthPRViolinJunContents.kpi1 > '3.6' && youthPRViolinJunContents.kpi1 <= '4.8')?'orange':(youthPRViolinJunContents.kpi1 > '4.8' && youthPRViolinJunContents.kpi1 < '6')?'yellow-7':(youthPRViolinJunContents.kpi1 >= '6' && youthPRViolinJunContents.kpi1 < '7.2')?'green':(youthPRViolinJunContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJunContents.kpi2 == null)?'grey-2':(youthPRViolinJunContents.kpi2 >= '0' && youthPRViolinJunContents.kpi2 <= '5.6')?'red':(youthPRViolinJunContents.kpi2 > '5.6' && youthPRViolinJunContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinJunContents.kpi2 > '7.466666667' && youthPRViolinJunContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinJunContents.kpi2 >= '9.333333333' && youthPRViolinJunContents.kpi2 < '11.2')?'green':(youthPRViolinJunContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJunContents.kpi3 == null)?'grey-2':(youthPRViolinJunContents.kpi3 >= '0' && youthPRViolinJunContents.kpi3 <= '2.4')?'red':(youthPRViolinJunContents.kpi3 > '2.4' && youthPRViolinJunContents.kpi3 <= '3.2')?'orange':(youthPRViolinJunContents.kpi3 > '3.2' && youthPRViolinJunContents.kpi3 < '4')?'yellow-7':(youthPRViolinJunContents.kpi3 >= '4' && youthPRViolinJunContents.kpi3 < '4.8')?'green':(youthPRViolinJunContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJunContents.kpi4 == null)?'grey-2':(youthPRViolinJunContents.kpi4 >= '0' && youthPRViolinJunContents.kpi4 <= '4.6')?'red':(youthPRViolinJunContents.kpi4 > '4.6' && youthPRViolinJunContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinJunContents.kpi4 > '6.133333333' && youthPRViolinJunContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinJunContents.kpi4 >= '7.666666667' && youthPRViolinJunContents.kpi4 < '9.2')?'green':(youthPRViolinJunContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJunContents.kpi5 == null)?'grey-2':(youthPRViolinJunContents.kpi5 >= '0' && youthPRViolinJunContents.kpi5 <= '1.6')?'red':(youthPRViolinJunContents.kpi5 > '1.6' && youthPRViolinJunContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinJunContents.kpi5 > '2.133333333' && youthPRViolinJunContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinJunContents.kpi5 >= '2.666666667' && youthPRViolinJunContents.kpi5 < '3.2')?'green':(youthPRViolinJunContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi5}}
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
                              :color="(youthPRViolinJulContents.kpi1 == null)?'grey-2':(youthPRViolinJulContents.kpi1 >= '0' && youthPRViolinJulContents.kpi1 <= '3.6')?'red':(youthPRViolinJulContents.kpi1 > '3.6' && youthPRViolinJulContents.kpi1 <= '4.8')?'orange':(youthPRViolinJulContents.kpi1 > '4.8' && youthPRViolinJulContents.kpi1 < '6')?'yellow-7':(youthPRViolinJulContents.kpi1 >= '6' && youthPRViolinJulContents.kpi1 < '7.2')?'green':(youthPRViolinJulContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJulContents.kpi2 == null)?'grey-2':(youthPRViolinJulContents.kpi2 >= '0' && youthPRViolinJulContents.kpi2 <= '5.6')?'red':(youthPRViolinJulContents.kpi2 > '5.6' && youthPRViolinJulContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinJulContents.kpi2 > '7.466666667' && youthPRViolinJulContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinJulContents.kpi2 >= '9.333333333' && youthPRViolinJulContents.kpi2 < '11.2')?'green':(youthPRViolinJulContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJulContents.kpi3 == null)?'grey-2':(youthPRViolinJulContents.kpi3 >= '0' && youthPRViolinJulContents.kpi3 <= '2.4')?'red':(youthPRViolinJulContents.kpi3 > '2.4' && youthPRViolinJulContents.kpi3 <= '3.2')?'orange':(youthPRViolinJulContents.kpi3 > '3.2' && youthPRViolinJulContents.kpi3 < '4')?'yellow-7':(youthPRViolinJulContents.kpi3 >= '4' && youthPRViolinJulContents.kpi3 < '4.8')?'green':(youthPRViolinJulContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJulContents.kpi4 == null)?'grey-2':(youthPRViolinJulContents.kpi4 >= '0' && youthPRViolinJulContents.kpi4 <= '4.6')?'red':(youthPRViolinJulContents.kpi4 > '4.6' && youthPRViolinJulContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinJulContents.kpi4 > '6.133333333' && youthPRViolinJulContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinJulContents.kpi4 >= '7.666666667' && youthPRViolinJulContents.kpi4 < '9.2')?'green':(youthPRViolinJulContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJulContents.kpi5 == null)?'grey-2':(youthPRViolinJulContents.kpi5 >= '0' && youthPRViolinJulContents.kpi5 <= '1.6')?'red':(youthPRViolinJulContents.kpi5 > '1.6' && youthPRViolinJulContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinJulContents.kpi5 > '2.133333333' && youthPRViolinJulContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinJulContents.kpi5 >= '2.666666667' && youthPRViolinJulContents.kpi5 < '3.2')?'green':(youthPRViolinJulContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi5}}
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
                              :color="(youthPRViolinAugContents.kpi1 == null)?'grey-2':(youthPRViolinAugContents.kpi1 >= '0' && youthPRViolinAugContents.kpi1 <= '3.6')?'red':(youthPRViolinAugContents.kpi1 > '3.6' && youthPRViolinAugContents.kpi1 <= '4.8')?'orange':(youthPRViolinAugContents.kpi1 > '4.8' && youthPRViolinAugContents.kpi1 < '6')?'yellow-7':(youthPRViolinAugContents.kpi1 >= '6' && youthPRViolinAugContents.kpi1 < '7.2')?'green':(youthPRViolinAugContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAugContents.kpi2 == null)?'grey-2':(youthPRViolinAugContents.kpi2 >= '0' && youthPRViolinAugContents.kpi2 <= '5.6')?'red':(youthPRViolinAugContents.kpi2 > '5.6' && youthPRViolinAugContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinAugContents.kpi2 > '7.466666667' && youthPRViolinAugContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinAugContents.kpi2 >= '9.333333333' && youthPRViolinAugContents.kpi2 < '11.2')?'green':(youthPRViolinAugContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAugContents.kpi3 == null)?'grey-2':(youthPRViolinAugContents.kpi3 >= '0' && youthPRViolinAugContents.kpi3 <= '2.4')?'red':(youthPRViolinAugContents.kpi3 > '2.4' && youthPRViolinAugContents.kpi3 <= '3.2')?'orange':(youthPRViolinAugContents.kpi3 > '3.2' && youthPRViolinAugContents.kpi3 < '4')?'yellow-7':(youthPRViolinAugContents.kpi3 >= '4' && youthPRViolinAugContents.kpi3 < '4.8')?'green':(youthPRViolinAugContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAugContents.kpi4 == null)?'grey-2':(youthPRViolinAugContents.kpi4 >= '0' && youthPRViolinAugContents.kpi4 <= '4.6')?'red':(youthPRViolinAugContents.kpi4 > '4.6' && youthPRViolinAugContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinAugContents.kpi4 > '6.133333333' && youthPRViolinAugContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinAugContents.kpi4 >= '7.666666667' && youthPRViolinAugContents.kpi4 < '9.2')?'green':(youthPRViolinAugContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAugContents.kpi5 == null)?'grey-2':(youthPRViolinAugContents.kpi5 >= '0' && youthPRViolinAugContents.kpi5 <= '1.6')?'red':(youthPRViolinAugContents.kpi5 > '1.6' && youthPRViolinAugContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinAugContents.kpi5 > '2.133333333' && youthPRViolinAugContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinAugContents.kpi5 >= '2.666666667' && youthPRViolinAugContents.kpi5 < '3.2')?'green':(youthPRViolinAugContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi5}}
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
                              :color="(youthPRViolinSepContents.kpi1 == null)?'grey-2':(youthPRViolinSepContents.kpi1 >= '0' && youthPRViolinSepContents.kpi1 <= '3.6')?'red':(youthPRViolinSepContents.kpi1 > '3.6' && youthPRViolinSepContents.kpi1 <= '4.8')?'orange':(youthPRViolinSepContents.kpi1 > '4.8' && youthPRViolinSepContents.kpi1 < '6')?'yellow-7':(youthPRViolinSepContents.kpi1 >= '6' && youthPRViolinSepContents.kpi1 < '7.2')?'green':(youthPRViolinSepContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinSepContents.kpi2 == null)?'grey-2':(youthPRViolinSepContents.kpi2 >= '0' && youthPRViolinSepContents.kpi2 <= '5.6')?'red':(youthPRViolinSepContents.kpi2 > '5.6' && youthPRViolinSepContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinSepContents.kpi2 > '7.466666667' && youthPRViolinSepContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinSepContents.kpi2 >= '9.333333333' && youthPRViolinSepContents.kpi2 < '11.2')?'green':(youthPRViolinSepContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinSepContents.kpi3 == null)?'grey-2':(youthPRViolinSepContents.kpi3 >= '0' && youthPRViolinSepContents.kpi3 <= '2.4')?'red':(youthPRViolinSepContents.kpi3 > '2.4' && youthPRViolinSepContents.kpi3 <= '3.2')?'orange':(youthPRViolinSepContents.kpi3 > '3.2' && youthPRViolinSepContents.kpi3 < '4')?'yellow-7':(youthPRViolinSepContents.kpi3 >= '4' && youthPRViolinSepContents.kpi3 < '4.8')?'green':(youthPRViolinSepContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinSepContents.kpi4 == null)?'grey-2':(youthPRViolinSepContents.kpi4 >= '0' && youthPRViolinSepContents.kpi4 <= '4.6')?'red':(youthPRViolinSepContents.kpi4 > '4.6' && youthPRViolinSepContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinSepContents.kpi4 > '6.133333333' && youthPRViolinSepContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinSepContents.kpi4 >= '7.666666667' && youthPRViolinSepContents.kpi4 < '9.2')?'green':(youthPRViolinSepContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinSepContents.kpi5 == null)?'grey-2':(youthPRViolinSepContents.kpi5 >= '0' && youthPRViolinSepContents.kpi5 <= '1.6')?'red':(youthPRViolinSepContents.kpi5 > '1.6' && youthPRViolinSepContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinSepContents.kpi5 > '2.133333333' && youthPRViolinSepContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinSepContents.kpi5 >= '2.666666667' && youthPRViolinSepContents.kpi5 < '3.2')?'green':(youthPRViolinSepContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi5}}
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
                              :color="(youthPRViolinOctContents.kpi1 == null)?'grey-2':(youthPRViolinOctContents.kpi1 >= '0' && youthPRViolinOctContents.kpi1 <= '3.6')?'red':(youthPRViolinOctContents.kpi1 > '3.6' && youthPRViolinOctContents.kpi1 <= '4.8')?'orange':(youthPRViolinOctContents.kpi1 > '4.8' && youthPRViolinOctContents.kpi1 < '6')?'yellow-7':(youthPRViolinOctContents.kpi1 >= '6' && youthPRViolinOctContents.kpi1 < '7.2')?'green':(youthPRViolinOctContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinOctContents.kpi2 == null)?'grey-2':(youthPRViolinOctContents.kpi2 >= '0' && youthPRViolinOctContents.kpi2 <= '5.6')?'red':(youthPRViolinOctContents.kpi2 > '5.6' && youthPRViolinOctContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinOctContents.kpi2 > '7.466666667' && youthPRViolinOctContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinOctContents.kpi2 >= '9.333333333' && youthPRViolinOctContents.kpi2 < '11.2')?'green':(youthPRViolinOctContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinOctContents.kpi3 == null)?'grey-2':(youthPRViolinOctContents.kpi3 >= '0' && youthPRViolinOctContents.kpi3 <= '2.4')?'red':(youthPRViolinOctContents.kpi3 > '2.4' && youthPRViolinOctContents.kpi3 <= '3.2')?'orange':(youthPRViolinOctContents.kpi3 > '3.2' && youthPRViolinOctContents.kpi3 < '4')?'yellow-7':(youthPRViolinOctContents.kpi3 >= '4' && youthPRViolinOctContents.kpi3 < '4.8')?'green':(youthPRViolinOctContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinOctContents.kpi4 == null)?'grey-2':(youthPRViolinOctContents.kpi4 >= '0' && youthPRViolinOctContents.kpi4 <= '4.6')?'red':(youthPRViolinOctContents.kpi4 > '4.6' && youthPRViolinOctContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinOctContents.kpi4 > '6.133333333' && youthPRViolinOctContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinOctContents.kpi4 >= '7.666666667' && youthPRViolinOctContents.kpi4 < '9.2')?'green':(youthPRViolinOctContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinOctContents.kpi5 == null)?'grey-2':(youthPRViolinOctContents.kpi5 >= '0' && youthPRViolinOctContents.kpi5 <= '1.6')?'red':(youthPRViolinOctContents.kpi5 > '1.6' && youthPRViolinOctContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinOctContents.kpi5 > '2.133333333' && youthPRViolinOctContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinOctContents.kpi5 >= '2.666666667' && youthPRViolinOctContents.kpi5 < '3.2')?'green':(youthPRViolinOctContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi5}}
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
                              :color="(youthPRViolinNovContents.kpi1 == null)?'grey-2':(youthPRViolinNovContents.kpi1 >= '0' && youthPRViolinNovContents.kpi1 <= '3.6')?'red':(youthPRViolinNovContents.kpi1 > '3.6' && youthPRViolinNovContents.kpi1 <= '4.8')?'orange':(youthPRViolinNovContents.kpi1 > '4.8' && youthPRViolinNovContents.kpi1 < '6')?'yellow-7':(youthPRViolinNovContents.kpi1 >= '6' && youthPRViolinNovContents.kpi1 < '7.2')?'green':(youthPRViolinNovContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinNovContents.kpi2 == null)?'grey-2':(youthPRViolinNovContents.kpi2 >= '0' && youthPRViolinNovContents.kpi2 <= '5.6')?'red':(youthPRViolinNovContents.kpi2 > '5.6' && youthPRViolinNovContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinNovContents.kpi2 > '7.466666667' && youthPRViolinNovContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinNovContents.kpi2 >= '9.333333333' && youthPRViolinNovContents.kpi2 < '11.2')?'green':(youthPRViolinNovContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinNovContents.kpi3 == null)?'grey-2':(youthPRViolinNovContents.kpi3 >= '0' && youthPRViolinNovContents.kpi3 <= '2.4')?'red':(youthPRViolinNovContents.kpi3 > '2.4' && youthPRViolinNovContents.kpi3 <= '3.2')?'orange':(youthPRViolinNovContents.kpi3 > '3.2' && youthPRViolinNovContents.kpi3 < '4')?'yellow-7':(youthPRViolinNovContents.kpi3 >= '4' && youthPRViolinNovContents.kpi3 < '4.8')?'green':(youthPRViolinNovContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinNovContents.kpi4 == null)?'grey-2':(youthPRViolinNovContents.kpi4 >= '0' && youthPRViolinNovContents.kpi4 <= '4.6')?'red':(youthPRViolinNovContents.kpi4 > '4.6' && youthPRViolinNovContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinNovContents.kpi4 > '6.133333333' && youthPRViolinNovContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinNovContents.kpi4 >= '7.666666667' && youthPRViolinNovContents.kpi4 < '9.2')?'green':(youthPRViolinNovContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinNovContents.kpi5 == null)?'grey-2':(youthPRViolinNovContents.kpi5 >= '0' && youthPRViolinNovContents.kpi5 <= '1.6')?'red':(youthPRViolinNovContents.kpi5 > '1.6' && youthPRViolinNovContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinNovContents.kpi5 > '2.133333333' && youthPRViolinNovContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinNovContents.kpi5 >= '2.666666667' && youthPRViolinNovContents.kpi5 < '3.2')?'green':(youthPRViolinNovContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi5}}
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
                              :color="(youthPRViolinDecContents.kpi1 == null)?'grey-2':(youthPRViolinDecContents.kpi1 >= '0' && youthPRViolinDecContents.kpi1 <= '3.6')?'red':(youthPRViolinDecContents.kpi1 > '3.6' && youthPRViolinDecContents.kpi1 <= '4.8')?'orange':(youthPRViolinDecContents.kpi1 > '4.8' && youthPRViolinDecContents.kpi1 < '6')?'yellow-7':(youthPRViolinDecContents.kpi1 >= '6' && youthPRViolinDecContents.kpi1 < '7.2')?'green':(youthPRViolinDecContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinDecContents.kpi2 == null)?'grey-2':(youthPRViolinDecContents.kpi2 >= '0' && youthPRViolinDecContents.kpi2 <= '5.6')?'red':(youthPRViolinDecContents.kpi2 > '5.6' && youthPRViolinDecContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinDecContents.kpi2 > '7.466666667' && youthPRViolinDecContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinDecContents.kpi2 >= '9.333333333' && youthPRViolinDecContents.kpi2 < '11.2')?'green':(youthPRViolinDecContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinDecContents.kpi3 == null)?'grey-2':(youthPRViolinDecContents.kpi3 >= '0' && youthPRViolinDecContents.kpi3 <= '2.4')?'red':(youthPRViolinDecContents.kpi3 > '2.4' && youthPRViolinDecContents.kpi3 <= '3.2')?'orange':(youthPRViolinDecContents.kpi3 > '3.2' && youthPRViolinDecContents.kpi3 < '4')?'yellow-7':(youthPRViolinDecContents.kpi3 >= '4' && youthPRViolinDecContents.kpi3 < '4.8')?'green':(youthPRViolinDecContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinDecContents.kpi4 == null)?'grey-2':(youthPRViolinDecContents.kpi4 >= '0' && youthPRViolinDecContents.kpi4 <= '4.6')?'red':(youthPRViolinDecContents.kpi4 > '4.6' && youthPRViolinDecContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinDecContents.kpi4 > '6.133333333' && youthPRViolinDecContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinDecContents.kpi4 >= '7.666666667' && youthPRViolinDecContents.kpi4 < '9.2')?'green':(youthPRViolinDecContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinDecContents.kpi5 == null)?'grey-2':(youthPRViolinDecContents.kpi5 >= '0' && youthPRViolinDecContents.kpi5 <= '1.6')?'red':(youthPRViolinDecContents.kpi5 > '1.6' && youthPRViolinDecContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinDecContents.kpi5 > '2.133333333' && youthPRViolinDecContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinDecContents.kpi5 >= '2.666666667' && youthPRViolinDecContents.kpi5 < '3.2')?'green':(youthPRViolinDecContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi5}}
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
                              :color="(youthPRViolinJanContents.kpi1 == null)?'grey-2':(youthPRViolinJanContents.kpi1 >= '0' && youthPRViolinJanContents.kpi1 <= '3.6')?'red':(youthPRViolinJanContents.kpi1 > '3.6' && youthPRViolinJanContents.kpi1 <= '4.8')?'orange':(youthPRViolinJanContents.kpi1 > '4.8' && youthPRViolinJanContents.kpi1 < '6')?'yellow-7':(youthPRViolinJanContents.kpi1 >= '6' && youthPRViolinJanContents.kpi1 < '7.2')?'green':(youthPRViolinJanContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJanContents.kpi2 == null)?'grey-2':(youthPRViolinJanContents.kpi2 >= '0' && youthPRViolinJanContents.kpi2 <= '5.6')?'red':(youthPRViolinJanContents.kpi2 > '5.6' && youthPRViolinJanContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinJanContents.kpi2 > '7.466666667' && youthPRViolinJanContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinJanContents.kpi2 >= '9.333333333' && youthPRViolinJanContents.kpi2 < '11.2')?'green':(youthPRViolinJanContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJanContents.kpi3 == null)?'grey-2':(youthPRViolinJanContents.kpi3 >= '0' && youthPRViolinJanContents.kpi3 <= '2.4')?'red':(youthPRViolinJanContents.kpi3 > '2.4' && youthPRViolinJanContents.kpi3 <= '3.2')?'orange':(youthPRViolinJanContents.kpi3 > '3.2' && youthPRViolinJanContents.kpi3 < '4')?'yellow-7':(youthPRViolinJanContents.kpi3 >= '4' && youthPRViolinJanContents.kpi3 < '4.8')?'green':(youthPRViolinJanContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJanContents.kpi4 == null)?'grey-2':(youthPRViolinJanContents.kpi4 >= '0' && youthPRViolinJanContents.kpi4 <= '4.6')?'red':(youthPRViolinJanContents.kpi4 > '4.6' && youthPRViolinJanContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinJanContents.kpi4 > '6.133333333' && youthPRViolinJanContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinJanContents.kpi4 >= '7.666666667' && youthPRViolinJanContents.kpi4 < '9.2')?'green':(youthPRViolinJanContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJanContents.kpi5 == null)?'grey-2':(youthPRViolinJanContents.kpi5 >= '0' && youthPRViolinJanContents.kpi5 <= '1.6')?'red':(youthPRViolinJanContents.kpi5 > '1.6' && youthPRViolinJanContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinJanContents.kpi5 > '2.133333333' && youthPRViolinJanContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinJanContents.kpi5 >= '2.666666667' && youthPRViolinJanContents.kpi5 < '3.2')?'green':(youthPRViolinJanContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi5}}
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
                              :color="(youthPRViolinFebContents.kpi1 == null)?'grey-2':(youthPRViolinFebContents.kpi1 >= '0' && youthPRViolinFebContents.kpi1 <= '3.6')?'red':(youthPRViolinFebContents.kpi1 > '3.6' && youthPRViolinFebContents.kpi1 <= '4.8')?'orange':(youthPRViolinFebContents.kpi1 > '4.8' && youthPRViolinFebContents.kpi1 < '6')?'yellow-7':(youthPRViolinFebContents.kpi1 >= '6' && youthPRViolinFebContents.kpi1 < '7.2')?'green':(youthPRViolinFebContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinFebContents.kpi2 == null)?'grey-2':(youthPRViolinFebContents.kpi2 >= '0' && youthPRViolinFebContents.kpi2 <= '5.6')?'red':(youthPRViolinFebContents.kpi2 > '5.6' && youthPRViolinFebContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinFebContents.kpi2 > '7.466666667' && youthPRViolinFebContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinFebContents.kpi2 >= '9.333333333' && youthPRViolinFebContents.kpi2 < '11.2')?'green':(youthPRViolinFebContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinFebContents.kpi3 == null)?'grey-2':(youthPRViolinFebContents.kpi3 >= '0' && youthPRViolinFebContents.kpi3 <= '2.4')?'red':(youthPRViolinFebContents.kpi3 > '2.4' && youthPRViolinFebContents.kpi3 <= '3.2')?'orange':(youthPRViolinFebContents.kpi3 > '3.2' && youthPRViolinFebContents.kpi3 < '4')?'yellow-7':(youthPRViolinFebContents.kpi3 >= '4' && youthPRViolinFebContents.kpi3 < '4.8')?'green':(youthPRViolinFebContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinFebContents.kpi4 == null)?'grey-2':(youthPRViolinFebContents.kpi4 >= '0' && youthPRViolinFebContents.kpi4 <= '4.6')?'red':(youthPRViolinFebContents.kpi4 > '4.6' && youthPRViolinFebContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinFebContents.kpi4 > '6.133333333' && youthPRViolinFebContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinFebContents.kpi4 >= '7.666666667' && youthPRViolinFebContents.kpi4 < '9.2')?'green':(youthPRViolinFebContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinFebContents.kpi5 == null)?'grey-2':(youthPRViolinFebContents.kpi5 >= '0' && youthPRViolinFebContents.kpi5 <= '1.6')?'red':(youthPRViolinFebContents.kpi5 > '1.6' && youthPRViolinFebContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinFebContents.kpi5 > '2.133333333' && youthPRViolinFebContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinFebContents.kpi5 >= '2.666666667' && youthPRViolinFebContents.kpi5 < '3.2')?'green':(youthPRViolinFebContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi5}}
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
                              :color="(youthPRViolinMarContents.kpi1 == null)?'grey-2':(youthPRViolinMarContents.kpi1 >= '0' && youthPRViolinMarContents.kpi1 <= '3.6')?'red':(youthPRViolinMarContents.kpi1 > '3.6' && youthPRViolinMarContents.kpi1 <= '4.8')?'orange':(youthPRViolinMarContents.kpi1 > '4.8' && youthPRViolinMarContents.kpi1 < '6')?'yellow-7':(youthPRViolinMarContents.kpi1 >= '6' && youthPRViolinMarContents.kpi1 < '7.2')?'green':(youthPRViolinMarContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMarContents.kpi2 == null)?'grey-2':(youthPRViolinMarContents.kpi2 >= '0' && youthPRViolinMarContents.kpi2 <= '5.6')?'red':(youthPRViolinMarContents.kpi2 > '5.6' && youthPRViolinMarContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinMarContents.kpi2 > '7.466666667' && youthPRViolinMarContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinMarContents.kpi2 >= '9.333333333' && youthPRViolinMarContents.kpi2 < '11.2')?'green':(youthPRViolinMarContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMarContents.kpi3 == null)?'grey-2':(youthPRViolinMarContents.kpi3 >= '0' && youthPRViolinMarContents.kpi3 <= '2.4')?'red':(youthPRViolinMarContents.kpi3 > '2.4' && youthPRViolinMarContents.kpi3 <= '3.2')?'orange':(youthPRViolinMarContents.kpi3 > '3.2' && youthPRViolinMarContents.kpi3 < '4')?'yellow-7':(youthPRViolinMarContents.kpi3 >= '4' && youthPRViolinMarContents.kpi3 < '4.8')?'green':(youthPRViolinMarContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMarContents.kpi4 == null)?'grey-2':(youthPRViolinMarContents.kpi4 >= '0' && youthPRViolinMarContents.kpi4 <= '4.6')?'red':(youthPRViolinMarContents.kpi4 > '4.6' && youthPRViolinMarContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinMarContents.kpi4 > '6.133333333' && youthPRViolinMarContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinMarContents.kpi4 >= '7.666666667' && youthPRViolinMarContents.kpi4 < '9.2')?'green':(youthPRViolinMarContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMarContents.kpi5 == null)?'grey-2':(youthPRViolinMarContents.kpi5 >= '0' && youthPRViolinMarContents.kpi5 <= '1.6')?'red':(youthPRViolinMarContents.kpi5 > '1.6' && youthPRViolinMarContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinMarContents.kpi5 > '2.133333333' && youthPRViolinMarContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinMarContents.kpi5 >= '2.666666667' && youthPRViolinMarContents.kpi5 < '3.2')?'green':(youthPRViolinMarContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi5}}
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
                              :color="(youthPRViolinAprContents.kpi1 == null)?'grey-2':(youthPRViolinAprContents.kpi1 >= '0' && youthPRViolinAprContents.kpi1 <= '3.6')?'red':(youthPRViolinAprContents.kpi1 > '3.6' && youthPRViolinAprContents.kpi1 <= '4.8')?'orange':(youthPRViolinAprContents.kpi1 > '4.8' && youthPRViolinAprContents.kpi1 < '6')?'yellow-7':(youthPRViolinAprContents.kpi1 >= '6' && youthPRViolinAprContents.kpi1 < '7.2')?'green':(youthPRViolinAprContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAprContents.kpi2 == null)?'grey-2':(youthPRViolinAprContents.kpi2 >= '0' && youthPRViolinAprContents.kpi2 <= '5.6')?'red':(youthPRViolinAprContents.kpi2 > '5.6' && youthPRViolinAprContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinAprContents.kpi2 > '7.466666667' && youthPRViolinAprContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinAprContents.kpi2 >= '9.333333333' && youthPRViolinAprContents.kpi2 < '11.2')?'green':(youthPRViolinAprContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAprContents.kpi3 == null)?'grey-2':(youthPRViolinAprContents.kpi3 >= '0' && youthPRViolinAprContents.kpi3 <= '2.4')?'red':(youthPRViolinAprContents.kpi3 > '2.4' && youthPRViolinAprContents.kpi3 <= '3.2')?'orange':(youthPRViolinAprContents.kpi3 > '3.2' && youthPRViolinAprContents.kpi3 < '4')?'yellow-7':(youthPRViolinAprContents.kpi3 >= '4' && youthPRViolinAprContents.kpi3 < '4.8')?'green':(youthPRViolinAprContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAprContents.kpi4 == null)?'grey-2':(youthPRViolinAprContents.kpi4 >= '0' && youthPRViolinAprContents.kpi4 <= '4.6')?'red':(youthPRViolinAprContents.kpi4 > '4.6' && youthPRViolinAprContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinAprContents.kpi4 > '6.133333333' && youthPRViolinAprContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinAprContents.kpi4 >= '7.666666667' && youthPRViolinAprContents.kpi4 < '9.2')?'green':(youthPRViolinAprContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAprContents.kpi5 == null)?'grey-2':(youthPRViolinAprContents.kpi5 >= '0' && youthPRViolinAprContents.kpi5 <= '1.6')?'red':(youthPRViolinAprContents.kpi5 > '1.6' && youthPRViolinAprContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinAprContents.kpi5 > '2.133333333' && youthPRViolinAprContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinAprContents.kpi5 >= '2.666666667' && youthPRViolinAprContents.kpi5 < '3.2')?'green':(youthPRViolinAprContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi5}}
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
                              :color="(youthPRViolinMayContents.kpi1 == null)?'grey-2':(youthPRViolinMayContents.kpi1 >= '0' && youthPRViolinMayContents.kpi1 <= '3.6')?'red':(youthPRViolinMayContents.kpi1 > '3.6' && youthPRViolinMayContents.kpi1 <= '4.8')?'orange':(youthPRViolinMayContents.kpi1 > '4.8' && youthPRViolinMayContents.kpi1 < '6')?'yellow-7':(youthPRViolinMayContents.kpi1 >= '6' && youthPRViolinMayContents.kpi1 < '7.2')?'green':(youthPRViolinMayContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMayContents.kpi2 == null)?'grey-2':(youthPRViolinMayContents.kpi2 >= '0' && youthPRViolinMayContents.kpi2 <= '5.6')?'red':(youthPRViolinMayContents.kpi2 > '5.6' && youthPRViolinMayContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinMayContents.kpi2 > '7.466666667' && youthPRViolinMayContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinMayContents.kpi2 >= '9.333333333' && youthPRViolinMayContents.kpi2 < '11.2')?'green':(youthPRViolinMayContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMayContents.kpi3 == null)?'grey-2':(youthPRViolinMayContents.kpi3 >= '0' && youthPRViolinMayContents.kpi3 <= '2.4')?'red':(youthPRViolinMayContents.kpi3 > '2.4' && youthPRViolinMayContents.kpi3 <= '3.2')?'orange':(youthPRViolinMayContents.kpi3 > '3.2' && youthPRViolinMayContents.kpi3 < '4')?'yellow-7':(youthPRViolinMayContents.kpi3 >= '4' && youthPRViolinMayContents.kpi3 < '4.8')?'green':(youthPRViolinMayContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMayContents.kpi4 == null)?'grey-2':(youthPRViolinMayContents.kpi4 >= '0' && youthPRViolinMayContents.kpi4 <= '4.6')?'red':(youthPRViolinMayContents.kpi4 > '4.6' && youthPRViolinMayContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinMayContents.kpi4 > '6.133333333' && youthPRViolinMayContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinMayContents.kpi4 >= '7.666666667' && youthPRViolinMayContents.kpi4 < '9.2')?'green':(youthPRViolinMayContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMayContents.kpi5 == null)?'grey-2':(youthPRViolinMayContents.kpi5 >= '0' && youthPRViolinMayContents.kpi5 <= '1.6')?'red':(youthPRViolinMayContents.kpi5 > '1.6' && youthPRViolinMayContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinMayContents.kpi5 > '2.133333333' && youthPRViolinMayContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinMayContents.kpi5 >= '2.666666667' && youthPRViolinMayContents.kpi5 < '3.2')?'green':(youthPRViolinMayContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi5}}
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
                              :color="(youthPRViolinJunContents.kpi1 == null)?'grey-2':(youthPRViolinJunContents.kpi1 >= '0' && youthPRViolinJunContents.kpi1 <= '3.6')?'red':(youthPRViolinJunContents.kpi1 > '3.6' && youthPRViolinJunContents.kpi1 <= '4.8')?'orange':(youthPRViolinJunContents.kpi1 > '4.8' && youthPRViolinJunContents.kpi1 < '6')?'yellow-7':(youthPRViolinJunContents.kpi1 >= '6' && youthPRViolinJunContents.kpi1 < '7.2')?'green':(youthPRViolinJunContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJunContents.kpi2 == null)?'grey-2':(youthPRViolinJunContents.kpi2 >= '0' && youthPRViolinJunContents.kpi2 <= '5.6')?'red':(youthPRViolinJunContents.kpi2 > '5.6' && youthPRViolinJunContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinJunContents.kpi2 > '7.466666667' && youthPRViolinJunContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinJunContents.kpi2 >= '9.333333333' && youthPRViolinJunContents.kpi2 < '11.2')?'green':(youthPRViolinJunContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJunContents.kpi3 == null)?'grey-2':(youthPRViolinJunContents.kpi3 >= '0' && youthPRViolinJunContents.kpi3 <= '2.4')?'red':(youthPRViolinJunContents.kpi3 > '2.4' && youthPRViolinJunContents.kpi3 <= '3.2')?'orange':(youthPRViolinJunContents.kpi3 > '3.2' && youthPRViolinJunContents.kpi3 < '4')?'yellow-7':(youthPRViolinJunContents.kpi3 >= '4' && youthPRViolinJunContents.kpi3 < '4.8')?'green':(youthPRViolinJunContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJunContents.kpi4 == null)?'grey-2':(youthPRViolinJunContents.kpi4 >= '0' && youthPRViolinJunContents.kpi4 <= '4.6')?'red':(youthPRViolinJunContents.kpi4 > '4.6' && youthPRViolinJunContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinJunContents.kpi4 > '6.133333333' && youthPRViolinJunContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinJunContents.kpi4 >= '7.666666667' && youthPRViolinJunContents.kpi4 < '9.2')?'green':(youthPRViolinJunContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJunContents.kpi5 == null)?'grey-2':(youthPRViolinJunContents.kpi5 >= '0' && youthPRViolinJunContents.kpi5 <= '1.6')?'red':(youthPRViolinJunContents.kpi5 > '1.6' && youthPRViolinJunContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinJunContents.kpi5 > '2.133333333' && youthPRViolinJunContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinJunContents.kpi5 >= '2.666666667' && youthPRViolinJunContents.kpi5 < '3.2')?'green':(youthPRViolinJunContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi5}}
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
                              :color="(youthPRViolinJulContents.kpi1 == null)?'grey-2':(youthPRViolinJulContents.kpi1 >= '0' && youthPRViolinJulContents.kpi1 <= '3.6')?'red':(youthPRViolinJulContents.kpi1 > '3.6' && youthPRViolinJulContents.kpi1 <= '4.8')?'orange':(youthPRViolinJulContents.kpi1 > '4.8' && youthPRViolinJulContents.kpi1 < '6')?'yellow-7':(youthPRViolinJulContents.kpi1 >= '6' && youthPRViolinJulContents.kpi1 < '7.2')?'green':(youthPRViolinJulContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJulContents.kpi2 == null)?'grey-2':(youthPRViolinJulContents.kpi2 >= '0' && youthPRViolinJulContents.kpi2 <= '5.6')?'red':(youthPRViolinJulContents.kpi2 > '5.6' && youthPRViolinJulContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinJulContents.kpi2 > '7.466666667' && youthPRViolinJulContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinJulContents.kpi2 >= '9.333333333' && youthPRViolinJulContents.kpi2 < '11.2')?'green':(youthPRViolinJulContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJulContents.kpi3 == null)?'grey-2':(youthPRViolinJulContents.kpi3 >= '0' && youthPRViolinJulContents.kpi3 <= '2.4')?'red':(youthPRViolinJulContents.kpi3 > '2.4' && youthPRViolinJulContents.kpi3 <= '3.2')?'orange':(youthPRViolinJulContents.kpi3 > '3.2' && youthPRViolinJulContents.kpi3 < '4')?'yellow-7':(youthPRViolinJulContents.kpi3 >= '4' && youthPRViolinJulContents.kpi3 < '4.8')?'green':(youthPRViolinJulContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJulContents.kpi4 == null)?'grey-2':(youthPRViolinJulContents.kpi4 >= '0' && youthPRViolinJulContents.kpi4 <= '4.6')?'red':(youthPRViolinJulContents.kpi4 > '4.6' && youthPRViolinJulContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinJulContents.kpi4 > '6.133333333' && youthPRViolinJulContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinJulContents.kpi4 >= '7.666666667' && youthPRViolinJulContents.kpi4 < '9.2')?'green':(youthPRViolinJulContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJulContents.kpi5 == null)?'grey-2':(youthPRViolinJulContents.kpi5 >= '0' && youthPRViolinJulContents.kpi5 <= '1.6')?'red':(youthPRViolinJulContents.kpi5 > '1.6' && youthPRViolinJulContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinJulContents.kpi5 > '2.133333333' && youthPRViolinJulContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinJulContents.kpi5 >= '2.666666667' && youthPRViolinJulContents.kpi5 < '3.2')?'green':(youthPRViolinJulContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi5}}
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
                              :color="(youthPRViolinAugContents.kpi1 == null)?'grey-2':(youthPRViolinAugContents.kpi1 >= '0' && youthPRViolinAugContents.kpi1 <= '3.6')?'red':(youthPRViolinAugContents.kpi1 > '3.6' && youthPRViolinAugContents.kpi1 <= '4.8')?'orange':(youthPRViolinAugContents.kpi1 > '4.8' && youthPRViolinAugContents.kpi1 < '6')?'yellow-7':(youthPRViolinAugContents.kpi1 >= '6' && youthPRViolinAugContents.kpi1 < '7.2')?'green':(youthPRViolinAugContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAugContents.kpi2 == null)?'grey-2':(youthPRViolinAugContents.kpi2 >= '0' && youthPRViolinAugContents.kpi2 <= '5.6')?'red':(youthPRViolinAugContents.kpi2 > '5.6' && youthPRViolinAugContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinAugContents.kpi2 > '7.466666667' && youthPRViolinAugContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinAugContents.kpi2 >= '9.333333333' && youthPRViolinAugContents.kpi2 < '11.2')?'green':(youthPRViolinAugContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAugContents.kpi3 == null)?'grey-2':(youthPRViolinAugContents.kpi3 >= '0' && youthPRViolinAugContents.kpi3 <= '2.4')?'red':(youthPRViolinAugContents.kpi3 > '2.4' && youthPRViolinAugContents.kpi3 <= '3.2')?'orange':(youthPRViolinAugContents.kpi3 > '3.2' && youthPRViolinAugContents.kpi3 < '4')?'yellow-7':(youthPRViolinAugContents.kpi3 >= '4' && youthPRViolinAugContents.kpi3 < '4.8')?'green':(youthPRViolinAugContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAugContents.kpi4 == null)?'grey-2':(youthPRViolinAugContents.kpi4 >= '0' && youthPRViolinAugContents.kpi4 <= '4.6')?'red':(youthPRViolinAugContents.kpi4 > '4.6' && youthPRViolinAugContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinAugContents.kpi4 > '6.133333333' && youthPRViolinAugContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinAugContents.kpi4 >= '7.666666667' && youthPRViolinAugContents.kpi4 < '9.2')?'green':(youthPRViolinAugContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAugContents.kpi5 == null)?'grey-2':(youthPRViolinAugContents.kpi5 >= '0' && youthPRViolinAugContents.kpi5 <= '1.6')?'red':(youthPRViolinAugContents.kpi5 > '1.6' && youthPRViolinAugContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinAugContents.kpi5 > '2.133333333' && youthPRViolinAugContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinAugContents.kpi5 >= '2.666666667' && youthPRViolinAugContents.kpi5 < '3.2')?'green':(youthPRViolinAugContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi5}}
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
                              :color="(youthPRViolinSepContents.kpi1 == null)?'grey-2':(youthPRViolinSepContents.kpi1 >= '0' && youthPRViolinSepContents.kpi1 <= '3.6')?'red':(youthPRViolinSepContents.kpi1 > '3.6' && youthPRViolinSepContents.kpi1 <= '4.8')?'orange':(youthPRViolinSepContents.kpi1 > '4.8' && youthPRViolinSepContents.kpi1 < '6')?'yellow-7':(youthPRViolinSepContents.kpi1 >= '6' && youthPRViolinSepContents.kpi1 < '7.2')?'green':(youthPRViolinSepContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinSepContents.kpi2 == null)?'grey-2':(youthPRViolinSepContents.kpi2 >= '0' && youthPRViolinSepContents.kpi2 <= '5.6')?'red':(youthPRViolinSepContents.kpi2 > '5.6' && youthPRViolinSepContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinSepContents.kpi2 > '7.466666667' && youthPRViolinSepContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinSepContents.kpi2 >= '9.333333333' && youthPRViolinSepContents.kpi2 < '11.2')?'green':(youthPRViolinSepContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinSepContents.kpi3 == null)?'grey-2':(youthPRViolinSepContents.kpi3 >= '0' && youthPRViolinSepContents.kpi3 <= '2.4')?'red':(youthPRViolinSepContents.kpi3 > '2.4' && youthPRViolinSepContents.kpi3 <= '3.2')?'orange':(youthPRViolinSepContents.kpi3 > '3.2' && youthPRViolinSepContents.kpi3 < '4')?'yellow-7':(youthPRViolinSepContents.kpi3 >= '4' && youthPRViolinSepContents.kpi3 < '4.8')?'green':(youthPRViolinSepContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinSepContents.kpi4 == null)?'grey-2':(youthPRViolinSepContents.kpi4 >= '0' && youthPRViolinSepContents.kpi4 <= '4.6')?'red':(youthPRViolinSepContents.kpi4 > '4.6' && youthPRViolinSepContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinSepContents.kpi4 > '6.133333333' && youthPRViolinSepContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinSepContents.kpi4 >= '7.666666667' && youthPRViolinSepContents.kpi4 < '9.2')?'green':(youthPRViolinSepContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinSepContents.kpi5 == null)?'grey-2':(youthPRViolinSepContents.kpi5 >= '0' && youthPRViolinSepContents.kpi5 <= '1.6')?'red':(youthPRViolinSepContents.kpi5 > '1.6' && youthPRViolinSepContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinSepContents.kpi5 > '2.133333333' && youthPRViolinSepContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinSepContents.kpi5 >= '2.666666667' && youthPRViolinSepContents.kpi5 < '3.2')?'green':(youthPRViolinSepContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi5}}
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
                              :color="(youthPRViolinOctContents.kpi1 == null)?'grey-2':(youthPRViolinOctContents.kpi1 >= '0' && youthPRViolinOctContents.kpi1 <= '3.6')?'red':(youthPRViolinOctContents.kpi1 > '3.6' && youthPRViolinOctContents.kpi1 <= '4.8')?'orange':(youthPRViolinOctContents.kpi1 > '4.8' && youthPRViolinOctContents.kpi1 < '6')?'yellow-7':(youthPRViolinOctContents.kpi1 >= '6' && youthPRViolinOctContents.kpi1 < '7.2')?'green':(youthPRViolinOctContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinOctContents.kpi2 == null)?'grey-2':(youthPRViolinOctContents.kpi2 >= '0' && youthPRViolinOctContents.kpi2 <= '5.6')?'red':(youthPRViolinOctContents.kpi2 > '5.6' && youthPRViolinOctContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinOctContents.kpi2 > '7.466666667' && youthPRViolinOctContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinOctContents.kpi2 >= '9.333333333' && youthPRViolinOctContents.kpi2 < '11.2')?'green':(youthPRViolinOctContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinOctContents.kpi3 == null)?'grey-2':(youthPRViolinOctContents.kpi3 >= '0' && youthPRViolinOctContents.kpi3 <= '2.4')?'red':(youthPRViolinOctContents.kpi3 > '2.4' && youthPRViolinOctContents.kpi3 <= '3.2')?'orange':(youthPRViolinOctContents.kpi3 > '3.2' && youthPRViolinOctContents.kpi3 < '4')?'yellow-7':(youthPRViolinOctContents.kpi3 >= '4' && youthPRViolinOctContents.kpi3 < '4.8')?'green':(youthPRViolinOctContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinOctContents.kpi4 == null)?'grey-2':(youthPRViolinOctContents.kpi4 >= '0' && youthPRViolinOctContents.kpi4 <= '4.6')?'red':(youthPRViolinOctContents.kpi4 > '4.6' && youthPRViolinOctContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinOctContents.kpi4 > '6.133333333' && youthPRViolinOctContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinOctContents.kpi4 >= '7.666666667' && youthPRViolinOctContents.kpi4 < '9.2')?'green':(youthPRViolinOctContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinOctContents.kpi5 == null)?'grey-2':(youthPRViolinOctContents.kpi5 >= '0' && youthPRViolinOctContents.kpi5 <= '1.6')?'red':(youthPRViolinOctContents.kpi5 > '1.6' && youthPRViolinOctContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinOctContents.kpi5 > '2.133333333' && youthPRViolinOctContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinOctContents.kpi5 >= '2.666666667' && youthPRViolinOctContents.kpi5 < '3.2')?'green':(youthPRViolinOctContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi5}}
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
                              :color="(youthPRViolinNovContents.kpi1 == null)?'grey-2':(youthPRViolinNovContents.kpi1 >= '0' && youthPRViolinNovContents.kpi1 <= '3.6')?'red':(youthPRViolinNovContents.kpi1 > '3.6' && youthPRViolinNovContents.kpi1 <= '4.8')?'orange':(youthPRViolinNovContents.kpi1 > '4.8' && youthPRViolinNovContents.kpi1 < '6')?'yellow-7':(youthPRViolinNovContents.kpi1 >= '6' && youthPRViolinNovContents.kpi1 < '7.2')?'green':(youthPRViolinNovContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinNovContents.kpi2 == null)?'grey-2':(youthPRViolinNovContents.kpi2 >= '0' && youthPRViolinNovContents.kpi2 <= '5.6')?'red':(youthPRViolinNovContents.kpi2 > '5.6' && youthPRViolinNovContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinNovContents.kpi2 > '7.466666667' && youthPRViolinNovContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinNovContents.kpi2 >= '9.333333333' && youthPRViolinNovContents.kpi2 < '11.2')?'green':(youthPRViolinNovContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinNovContents.kpi3 == null)?'grey-2':(youthPRViolinNovContents.kpi3 >= '0' && youthPRViolinNovContents.kpi3 <= '2.4')?'red':(youthPRViolinNovContents.kpi3 > '2.4' && youthPRViolinNovContents.kpi3 <= '3.2')?'orange':(youthPRViolinNovContents.kpi3 > '3.2' && youthPRViolinNovContents.kpi3 < '4')?'yellow-7':(youthPRViolinNovContents.kpi3 >= '4' && youthPRViolinNovContents.kpi3 < '4.8')?'green':(youthPRViolinNovContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinNovContents.kpi4 == null)?'grey-2':(youthPRViolinNovContents.kpi4 >= '0' && youthPRViolinNovContents.kpi4 <= '4.6')?'red':(youthPRViolinNovContents.kpi4 > '4.6' && youthPRViolinNovContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinNovContents.kpi4 > '6.133333333' && youthPRViolinNovContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinNovContents.kpi4 >= '7.666666667' && youthPRViolinNovContents.kpi4 < '9.2')?'green':(youthPRViolinNovContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinNovContents.kpi5 == null)?'grey-2':(youthPRViolinNovContents.kpi5 >= '0' && youthPRViolinNovContents.kpi5 <= '1.6')?'red':(youthPRViolinNovContents.kpi5 > '1.6' && youthPRViolinNovContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinNovContents.kpi5 > '2.133333333' && youthPRViolinNovContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinNovContents.kpi5 >= '2.666666667' && youthPRViolinNovContents.kpi5 < '3.2')?'green':(youthPRViolinNovContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi5}}
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
                              :color="(youthPRViolinDecContents.kpi1 == null)?'grey-2':(youthPRViolinDecContents.kpi1 >= '0' && youthPRViolinDecContents.kpi1 <= '3.6')?'red':(youthPRViolinDecContents.kpi1 > '3.6' && youthPRViolinDecContents.kpi1 <= '4.8')?'orange':(youthPRViolinDecContents.kpi1 > '4.8' && youthPRViolinDecContents.kpi1 < '6')?'yellow-7':(youthPRViolinDecContents.kpi1 >= '6' && youthPRViolinDecContents.kpi1 < '7.2')?'green':(youthPRViolinDecContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinDecContents.kpi2 == null)?'grey-2':(youthPRViolinDecContents.kpi2 >= '0' && youthPRViolinDecContents.kpi2 <= '5.6')?'red':(youthPRViolinDecContents.kpi2 > '5.6' && youthPRViolinDecContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinDecContents.kpi2 > '7.466666667' && youthPRViolinDecContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinDecContents.kpi2 >= '9.333333333' && youthPRViolinDecContents.kpi2 < '11.2')?'green':(youthPRViolinDecContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinDecContents.kpi3 == null)?'grey-2':(youthPRViolinDecContents.kpi3 >= '0' && youthPRViolinDecContents.kpi3 <= '2.4')?'red':(youthPRViolinDecContents.kpi3 > '2.4' && youthPRViolinDecContents.kpi3 <= '3.2')?'orange':(youthPRViolinDecContents.kpi3 > '3.2' && youthPRViolinDecContents.kpi3 < '4')?'yellow-7':(youthPRViolinDecContents.kpi3 >= '4' && youthPRViolinDecContents.kpi3 < '4.8')?'green':(youthPRViolinDecContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinDecContents.kpi4 == null)?'grey-2':(youthPRViolinDecContents.kpi4 >= '0' && youthPRViolinDecContents.kpi4 <= '4.6')?'red':(youthPRViolinDecContents.kpi4 > '4.6' && youthPRViolinDecContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinDecContents.kpi4 > '6.133333333' && youthPRViolinDecContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinDecContents.kpi4 >= '7.666666667' && youthPRViolinDecContents.kpi4 < '9.2')?'green':(youthPRViolinDecContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinDecContents.kpi5 == null)?'grey-2':(youthPRViolinDecContents.kpi5 >= '0' && youthPRViolinDecContents.kpi5 <= '1.6')?'red':(youthPRViolinDecContents.kpi5 > '1.6' && youthPRViolinDecContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinDecContents.kpi5 > '2.133333333' && youthPRViolinDecContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinDecContents.kpi5 >= '2.666666667' && youthPRViolinDecContents.kpi5 < '3.2')?'green':(youthPRViolinDecContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi5}}
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
                              :color="(youthPRViolinJanContents.kpi1 == null)?'grey-2':(youthPRViolinJanContents.kpi1 >= '0' && youthPRViolinJanContents.kpi1 <= '3.6')?'red':(youthPRViolinJanContents.kpi1 > '3.6' && youthPRViolinJanContents.kpi1 <= '4.8')?'orange':(youthPRViolinJanContents.kpi1 > '4.8' && youthPRViolinJanContents.kpi1 < '6')?'yellow-7':(youthPRViolinJanContents.kpi1 >= '6' && youthPRViolinJanContents.kpi1 < '7.2')?'green':(youthPRViolinJanContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJanContents.kpi2 == null)?'grey-2':(youthPRViolinJanContents.kpi2 >= '0' && youthPRViolinJanContents.kpi2 <= '5.6')?'red':(youthPRViolinJanContents.kpi2 > '5.6' && youthPRViolinJanContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinJanContents.kpi2 > '7.466666667' && youthPRViolinJanContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinJanContents.kpi2 >= '9.333333333' && youthPRViolinJanContents.kpi2 < '11.2')?'green':(youthPRViolinJanContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJanContents.kpi3 == null)?'grey-2':(youthPRViolinJanContents.kpi3 >= '0' && youthPRViolinJanContents.kpi3 <= '2.4')?'red':(youthPRViolinJanContents.kpi3 > '2.4' && youthPRViolinJanContents.kpi3 <= '3.2')?'orange':(youthPRViolinJanContents.kpi3 > '3.2' && youthPRViolinJanContents.kpi3 < '4')?'yellow-7':(youthPRViolinJanContents.kpi3 >= '4' && youthPRViolinJanContents.kpi3 < '4.8')?'green':(youthPRViolinJanContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJanContents.kpi4 == null)?'grey-2':(youthPRViolinJanContents.kpi4 >= '0' && youthPRViolinJanContents.kpi4 <= '4.6')?'red':(youthPRViolinJanContents.kpi4 > '4.6' && youthPRViolinJanContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinJanContents.kpi4 > '6.133333333' && youthPRViolinJanContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinJanContents.kpi4 >= '7.666666667' && youthPRViolinJanContents.kpi4 < '9.2')?'green':(youthPRViolinJanContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJanContents.kpi5 == null)?'grey-2':(youthPRViolinJanContents.kpi5 >= '0' && youthPRViolinJanContents.kpi5 <= '1.6')?'red':(youthPRViolinJanContents.kpi5 > '1.6' && youthPRViolinJanContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinJanContents.kpi5 > '2.133333333' && youthPRViolinJanContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinJanContents.kpi5 >= '2.666666667' && youthPRViolinJanContents.kpi5 < '3.2')?'green':(youthPRViolinJanContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi5}}
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
                              :color="(youthPRViolinFebContents.kpi1 == null)?'grey-2':(youthPRViolinFebContents.kpi1 >= '0' && youthPRViolinFebContents.kpi1 <= '3.6')?'red':(youthPRViolinFebContents.kpi1 > '3.6' && youthPRViolinFebContents.kpi1 <= '4.8')?'orange':(youthPRViolinFebContents.kpi1 > '4.8' && youthPRViolinFebContents.kpi1 < '6')?'yellow-7':(youthPRViolinFebContents.kpi1 >= '6' && youthPRViolinFebContents.kpi1 < '7.2')?'green':(youthPRViolinFebContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinFebContents.kpi2 == null)?'grey-2':(youthPRViolinFebContents.kpi2 >= '0' && youthPRViolinFebContents.kpi2 <= '5.6')?'red':(youthPRViolinFebContents.kpi2 > '5.6' && youthPRViolinFebContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinFebContents.kpi2 > '7.466666667' && youthPRViolinFebContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinFebContents.kpi2 >= '9.333333333' && youthPRViolinFebContents.kpi2 < '11.2')?'green':(youthPRViolinFebContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinFebContents.kpi3 == null)?'grey-2':(youthPRViolinFebContents.kpi3 >= '0' && youthPRViolinFebContents.kpi3 <= '2.4')?'red':(youthPRViolinFebContents.kpi3 > '2.4' && youthPRViolinFebContents.kpi3 <= '3.2')?'orange':(youthPRViolinFebContents.kpi3 > '3.2' && youthPRViolinFebContents.kpi3 < '4')?'yellow-7':(youthPRViolinFebContents.kpi3 >= '4' && youthPRViolinFebContents.kpi3 < '4.8')?'green':(youthPRViolinFebContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinFebContents.kpi4 == null)?'grey-2':(youthPRViolinFebContents.kpi4 >= '0' && youthPRViolinFebContents.kpi4 <= '4.6')?'red':(youthPRViolinFebContents.kpi4 > '4.6' && youthPRViolinFebContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinFebContents.kpi4 > '6.133333333' && youthPRViolinFebContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinFebContents.kpi4 >= '7.666666667' && youthPRViolinFebContents.kpi4 < '9.2')?'green':(youthPRViolinFebContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinFebContents.kpi5 == null)?'grey-2':(youthPRViolinFebContents.kpi5 >= '0' && youthPRViolinFebContents.kpi5 <= '1.6')?'red':(youthPRViolinFebContents.kpi5 > '1.6' && youthPRViolinFebContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinFebContents.kpi5 > '2.133333333' && youthPRViolinFebContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinFebContents.kpi5 >= '2.666666667' && youthPRViolinFebContents.kpi5 < '3.2')?'green':(youthPRViolinFebContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi5}}
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
                              :color="(youthPRViolinMarContents.kpi1 == null)?'grey-2':(youthPRViolinMarContents.kpi1 >= '0' && youthPRViolinMarContents.kpi1 <= '3.6')?'red':(youthPRViolinMarContents.kpi1 > '3.6' && youthPRViolinMarContents.kpi1 <= '4.8')?'orange':(youthPRViolinMarContents.kpi1 > '4.8' && youthPRViolinMarContents.kpi1 < '6')?'yellow-7':(youthPRViolinMarContents.kpi1 >= '6' && youthPRViolinMarContents.kpi1 < '7.2')?'green':(youthPRViolinMarContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMarContents.kpi2 == null)?'grey-2':(youthPRViolinMarContents.kpi2 >= '0' && youthPRViolinMarContents.kpi2 <= '5.6')?'red':(youthPRViolinMarContents.kpi2 > '5.6' && youthPRViolinMarContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinMarContents.kpi2 > '7.466666667' && youthPRViolinMarContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinMarContents.kpi2 >= '9.333333333' && youthPRViolinMarContents.kpi2 < '11.2')?'green':(youthPRViolinMarContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMarContents.kpi3 == null)?'grey-2':(youthPRViolinMarContents.kpi3 >= '0' && youthPRViolinMarContents.kpi3 <= '2.4')?'red':(youthPRViolinMarContents.kpi3 > '2.4' && youthPRViolinMarContents.kpi3 <= '3.2')?'orange':(youthPRViolinMarContents.kpi3 > '3.2' && youthPRViolinMarContents.kpi3 < '4')?'yellow-7':(youthPRViolinMarContents.kpi3 >= '4' && youthPRViolinMarContents.kpi3 < '4.8')?'green':(youthPRViolinMarContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMarContents.kpi4 == null)?'grey-2':(youthPRViolinMarContents.kpi4 >= '0' && youthPRViolinMarContents.kpi4 <= '4.6')?'red':(youthPRViolinMarContents.kpi4 > '4.6' && youthPRViolinMarContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinMarContents.kpi4 > '6.133333333' && youthPRViolinMarContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinMarContents.kpi4 >= '7.666666667' && youthPRViolinMarContents.kpi4 < '9.2')?'green':(youthPRViolinMarContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMarContents.kpi5 == null)?'grey-2':(youthPRViolinMarContents.kpi5 >= '0' && youthPRViolinMarContents.kpi5 <= '1.6')?'red':(youthPRViolinMarContents.kpi5 > '1.6' && youthPRViolinMarContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinMarContents.kpi5 > '2.133333333' && youthPRViolinMarContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinMarContents.kpi5 >= '2.666666667' && youthPRViolinMarContents.kpi5 < '3.2')?'green':(youthPRViolinMarContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi5}}
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
                              :color="(youthPRViolinAprContents.kpi1 == null)?'grey-2':(youthPRViolinAprContents.kpi1 >= '0' && youthPRViolinAprContents.kpi1 <= '3.6')?'red':(youthPRViolinAprContents.kpi1 > '3.6' && youthPRViolinAprContents.kpi1 <= '4.8')?'orange':(youthPRViolinAprContents.kpi1 > '4.8' && youthPRViolinAprContents.kpi1 < '6')?'yellow-7':(youthPRViolinAprContents.kpi1 >= '6' && youthPRViolinAprContents.kpi1 < '7.2')?'green':(youthPRViolinAprContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAprContents.kpi2 == null)?'grey-2':(youthPRViolinAprContents.kpi2 >= '0' && youthPRViolinAprContents.kpi2 <= '5.6')?'red':(youthPRViolinAprContents.kpi2 > '5.6' && youthPRViolinAprContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinAprContents.kpi2 > '7.466666667' && youthPRViolinAprContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinAprContents.kpi2 >= '9.333333333' && youthPRViolinAprContents.kpi2 < '11.2')?'green':(youthPRViolinAprContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAprContents.kpi3 == null)?'grey-2':(youthPRViolinAprContents.kpi3 >= '0' && youthPRViolinAprContents.kpi3 <= '2.4')?'red':(youthPRViolinAprContents.kpi3 > '2.4' && youthPRViolinAprContents.kpi3 <= '3.2')?'orange':(youthPRViolinAprContents.kpi3 > '3.2' && youthPRViolinAprContents.kpi3 < '4')?'yellow-7':(youthPRViolinAprContents.kpi3 >= '4' && youthPRViolinAprContents.kpi3 < '4.8')?'green':(youthPRViolinAprContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAprContents.kpi4 == null)?'grey-2':(youthPRViolinAprContents.kpi4 >= '0' && youthPRViolinAprContents.kpi4 <= '4.6')?'red':(youthPRViolinAprContents.kpi4 > '4.6' && youthPRViolinAprContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinAprContents.kpi4 > '6.133333333' && youthPRViolinAprContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinAprContents.kpi4 >= '7.666666667' && youthPRViolinAprContents.kpi4 < '9.2')?'green':(youthPRViolinAprContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAprContents.kpi5 == null)?'grey-2':(youthPRViolinAprContents.kpi5 >= '0' && youthPRViolinAprContents.kpi5 <= '1.6')?'red':(youthPRViolinAprContents.kpi5 > '1.6' && youthPRViolinAprContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinAprContents.kpi5 > '2.133333333' && youthPRViolinAprContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinAprContents.kpi5 >= '2.666666667' && youthPRViolinAprContents.kpi5 < '3.2')?'green':(youthPRViolinAprContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi5}}
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
                              :color="(youthPRViolinMayContents.kpi1 == null)?'grey-2':(youthPRViolinMayContents.kpi1 >= '0' && youthPRViolinMayContents.kpi1 <= '3.6')?'red':(youthPRViolinMayContents.kpi1 > '3.6' && youthPRViolinMayContents.kpi1 <= '4.8')?'orange':(youthPRViolinMayContents.kpi1 > '4.8' && youthPRViolinMayContents.kpi1 < '6')?'yellow-7':(youthPRViolinMayContents.kpi1 >= '6' && youthPRViolinMayContents.kpi1 < '7.2')?'green':(youthPRViolinMayContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMayContents.kpi2 == null)?'grey-2':(youthPRViolinMayContents.kpi2 >= '0' && youthPRViolinMayContents.kpi2 <= '5.6')?'red':(youthPRViolinMayContents.kpi2 > '5.6' && youthPRViolinMayContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinMayContents.kpi2 > '7.466666667' && youthPRViolinMayContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinMayContents.kpi2 >= '9.333333333' && youthPRViolinMayContents.kpi2 < '11.2')?'green':(youthPRViolinMayContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMayContents.kpi3 == null)?'grey-2':(youthPRViolinMayContents.kpi3 >= '0' && youthPRViolinMayContents.kpi3 <= '2.4')?'red':(youthPRViolinMayContents.kpi3 > '2.4' && youthPRViolinMayContents.kpi3 <= '3.2')?'orange':(youthPRViolinMayContents.kpi3 > '3.2' && youthPRViolinMayContents.kpi3 < '4')?'yellow-7':(youthPRViolinMayContents.kpi3 >= '4' && youthPRViolinMayContents.kpi3 < '4.8')?'green':(youthPRViolinMayContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMayContents.kpi4 == null)?'grey-2':(youthPRViolinMayContents.kpi4 >= '0' && youthPRViolinMayContents.kpi4 <= '4.6')?'red':(youthPRViolinMayContents.kpi4 > '4.6' && youthPRViolinMayContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinMayContents.kpi4 > '6.133333333' && youthPRViolinMayContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinMayContents.kpi4 >= '7.666666667' && youthPRViolinMayContents.kpi4 < '9.2')?'green':(youthPRViolinMayContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMayContents.kpi5 == null)?'grey-2':(youthPRViolinMayContents.kpi5 >= '0' && youthPRViolinMayContents.kpi5 <= '1.6')?'red':(youthPRViolinMayContents.kpi5 > '1.6' && youthPRViolinMayContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinMayContents.kpi5 > '2.133333333' && youthPRViolinMayContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinMayContents.kpi5 >= '2.666666667' && youthPRViolinMayContents.kpi5 < '3.2')?'green':(youthPRViolinMayContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi5}}
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
                              :color="(youthPRViolinJunContents.kpi1 == null)?'grey-2':(youthPRViolinJunContents.kpi1 >= '0' && youthPRViolinJunContents.kpi1 <= '3.6')?'red':(youthPRViolinJunContents.kpi1 > '3.6' && youthPRViolinJunContents.kpi1 <= '4.8')?'orange':(youthPRViolinJunContents.kpi1 > '4.8' && youthPRViolinJunContents.kpi1 < '6')?'yellow-7':(youthPRViolinJunContents.kpi1 >= '6' && youthPRViolinJunContents.kpi1 < '7.2')?'green':(youthPRViolinJunContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJunContents.kpi2 == null)?'grey-2':(youthPRViolinJunContents.kpi2 >= '0' && youthPRViolinJunContents.kpi2 <= '5.6')?'red':(youthPRViolinJunContents.kpi2 > '5.6' && youthPRViolinJunContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinJunContents.kpi2 > '7.466666667' && youthPRViolinJunContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinJunContents.kpi2 >= '9.333333333' && youthPRViolinJunContents.kpi2 < '11.2')?'green':(youthPRViolinJunContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJunContents.kpi3 == null)?'grey-2':(youthPRViolinJunContents.kpi3 >= '0' && youthPRViolinJunContents.kpi3 <= '2.4')?'red':(youthPRViolinJunContents.kpi3 > '2.4' && youthPRViolinJunContents.kpi3 <= '3.2')?'orange':(youthPRViolinJunContents.kpi3 > '3.2' && youthPRViolinJunContents.kpi3 < '4')?'yellow-7':(youthPRViolinJunContents.kpi3 >= '4' && youthPRViolinJunContents.kpi3 < '4.8')?'green':(youthPRViolinJunContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJunContents.kpi4 == null)?'grey-2':(youthPRViolinJunContents.kpi4 >= '0' && youthPRViolinJunContents.kpi4 <= '4.6')?'red':(youthPRViolinJunContents.kpi4 > '4.6' && youthPRViolinJunContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinJunContents.kpi4 > '6.133333333' && youthPRViolinJunContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinJunContents.kpi4 >= '7.666666667' && youthPRViolinJunContents.kpi4 < '9.2')?'green':(youthPRViolinJunContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJunContents.kpi5 == null)?'grey-2':(youthPRViolinJunContents.kpi5 >= '0' && youthPRViolinJunContents.kpi5 <= '1.6')?'red':(youthPRViolinJunContents.kpi5 > '1.6' && youthPRViolinJunContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinJunContents.kpi5 > '2.133333333' && youthPRViolinJunContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinJunContents.kpi5 >= '2.666666667' && youthPRViolinJunContents.kpi5 < '3.2')?'green':(youthPRViolinJunContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi5}}
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
                              :color="(youthPRViolinJulContents.kpi1 == null)?'grey-2':(youthPRViolinJulContents.kpi1 >= '0' && youthPRViolinJulContents.kpi1 <= '3.6')?'red':(youthPRViolinJulContents.kpi1 > '3.6' && youthPRViolinJulContents.kpi1 <= '4.8')?'orange':(youthPRViolinJulContents.kpi1 > '4.8' && youthPRViolinJulContents.kpi1 < '6')?'yellow-7':(youthPRViolinJulContents.kpi1 >= '6' && youthPRViolinJulContents.kpi1 < '7.2')?'green':(youthPRViolinJulContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJulContents.kpi2 == null)?'grey-2':(youthPRViolinJulContents.kpi2 >= '0' && youthPRViolinJulContents.kpi2 <= '5.6')?'red':(youthPRViolinJulContents.kpi2 > '5.6' && youthPRViolinJulContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinJulContents.kpi2 > '7.466666667' && youthPRViolinJulContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinJulContents.kpi2 >= '9.333333333' && youthPRViolinJulContents.kpi2 < '11.2')?'green':(youthPRViolinJulContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJulContents.kpi3 == null)?'grey-2':(youthPRViolinJulContents.kpi3 >= '0' && youthPRViolinJulContents.kpi3 <= '2.4')?'red':(youthPRViolinJulContents.kpi3 > '2.4' && youthPRViolinJulContents.kpi3 <= '3.2')?'orange':(youthPRViolinJulContents.kpi3 > '3.2' && youthPRViolinJulContents.kpi3 < '4')?'yellow-7':(youthPRViolinJulContents.kpi3 >= '4' && youthPRViolinJulContents.kpi3 < '4.8')?'green':(youthPRViolinJulContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJulContents.kpi4 == null)?'grey-2':(youthPRViolinJulContents.kpi4 >= '0' && youthPRViolinJulContents.kpi4 <= '4.6')?'red':(youthPRViolinJulContents.kpi4 > '4.6' && youthPRViolinJulContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinJulContents.kpi4 > '6.133333333' && youthPRViolinJulContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinJulContents.kpi4 >= '7.666666667' && youthPRViolinJulContents.kpi4 < '9.2')?'green':(youthPRViolinJulContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJulContents.kpi5 == null)?'grey-2':(youthPRViolinJulContents.kpi5 >= '0' && youthPRViolinJulContents.kpi5 <= '1.6')?'red':(youthPRViolinJulContents.kpi5 > '1.6' && youthPRViolinJulContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinJulContents.kpi5 > '2.133333333' && youthPRViolinJulContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinJulContents.kpi5 >= '2.666666667' && youthPRViolinJulContents.kpi5 < '3.2')?'green':(youthPRViolinJulContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi5}}
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
                              :color="(youthPRViolinAugContents.kpi1 == null)?'grey-2':(youthPRViolinAugContents.kpi1 >= '0' && youthPRViolinAugContents.kpi1 <= '3.6')?'red':(youthPRViolinAugContents.kpi1 > '3.6' && youthPRViolinAugContents.kpi1 <= '4.8')?'orange':(youthPRViolinAugContents.kpi1 > '4.8' && youthPRViolinAugContents.kpi1 < '6')?'yellow-7':(youthPRViolinAugContents.kpi1 >= '6' && youthPRViolinAugContents.kpi1 < '7.2')?'green':(youthPRViolinAugContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAugContents.kpi2 == null)?'grey-2':(youthPRViolinAugContents.kpi2 >= '0' && youthPRViolinAugContents.kpi2 <= '5.6')?'red':(youthPRViolinAugContents.kpi2 > '5.6' && youthPRViolinAugContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinAugContents.kpi2 > '7.466666667' && youthPRViolinAugContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinAugContents.kpi2 >= '9.333333333' && youthPRViolinAugContents.kpi2 < '11.2')?'green':(youthPRViolinAugContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAugContents.kpi3 == null)?'grey-2':(youthPRViolinAugContents.kpi3 >= '0' && youthPRViolinAugContents.kpi3 <= '2.4')?'red':(youthPRViolinAugContents.kpi3 > '2.4' && youthPRViolinAugContents.kpi3 <= '3.2')?'orange':(youthPRViolinAugContents.kpi3 > '3.2' && youthPRViolinAugContents.kpi3 < '4')?'yellow-7':(youthPRViolinAugContents.kpi3 >= '4' && youthPRViolinAugContents.kpi3 < '4.8')?'green':(youthPRViolinAugContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAugContents.kpi4 == null)?'grey-2':(youthPRViolinAugContents.kpi4 >= '0' && youthPRViolinAugContents.kpi4 <= '4.6')?'red':(youthPRViolinAugContents.kpi4 > '4.6' && youthPRViolinAugContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinAugContents.kpi4 > '6.133333333' && youthPRViolinAugContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinAugContents.kpi4 >= '7.666666667' && youthPRViolinAugContents.kpi4 < '9.2')?'green':(youthPRViolinAugContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAugContents.kpi5 == null)?'grey-2':(youthPRViolinAugContents.kpi5 >= '0' && youthPRViolinAugContents.kpi5 <= '1.6')?'red':(youthPRViolinAugContents.kpi5 > '1.6' && youthPRViolinAugContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinAugContents.kpi5 > '2.133333333' && youthPRViolinAugContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinAugContents.kpi5 >= '2.666666667' && youthPRViolinAugContents.kpi5 < '3.2')?'green':(youthPRViolinAugContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi5}}
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
                              :color="(youthPRViolinSepContents.kpi1 == null)?'grey-2':(youthPRViolinSepContents.kpi1 >= '0' && youthPRViolinSepContents.kpi1 <= '3.6')?'red':(youthPRViolinSepContents.kpi1 > '3.6' && youthPRViolinSepContents.kpi1 <= '4.8')?'orange':(youthPRViolinSepContents.kpi1 > '4.8' && youthPRViolinSepContents.kpi1 < '6')?'yellow-7':(youthPRViolinSepContents.kpi1 >= '6' && youthPRViolinSepContents.kpi1 < '7.2')?'green':(youthPRViolinSepContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinSepContents.kpi2 == null)?'grey-2':(youthPRViolinSepContents.kpi2 >= '0' && youthPRViolinSepContents.kpi2 <= '5.6')?'red':(youthPRViolinSepContents.kpi2 > '5.6' && youthPRViolinSepContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinSepContents.kpi2 > '7.466666667' && youthPRViolinSepContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinSepContents.kpi2 >= '9.333333333' && youthPRViolinSepContents.kpi2 < '11.2')?'green':(youthPRViolinSepContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinSepContents.kpi3 == null)?'grey-2':(youthPRViolinSepContents.kpi3 >= '0' && youthPRViolinSepContents.kpi3 <= '2.4')?'red':(youthPRViolinSepContents.kpi3 > '2.4' && youthPRViolinSepContents.kpi3 <= '3.2')?'orange':(youthPRViolinSepContents.kpi3 > '3.2' && youthPRViolinSepContents.kpi3 < '4')?'yellow-7':(youthPRViolinSepContents.kpi3 >= '4' && youthPRViolinSepContents.kpi3 < '4.8')?'green':(youthPRViolinSepContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinSepContents.kpi4 == null)?'grey-2':(youthPRViolinSepContents.kpi4 >= '0' && youthPRViolinSepContents.kpi4 <= '4.6')?'red':(youthPRViolinSepContents.kpi4 > '4.6' && youthPRViolinSepContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinSepContents.kpi4 > '6.133333333' && youthPRViolinSepContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinSepContents.kpi4 >= '7.666666667' && youthPRViolinSepContents.kpi4 < '9.2')?'green':(youthPRViolinSepContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinSepContents.kpi5 == null)?'grey-2':(youthPRViolinSepContents.kpi5 >= '0' && youthPRViolinSepContents.kpi5 <= '1.6')?'red':(youthPRViolinSepContents.kpi5 > '1.6' && youthPRViolinSepContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinSepContents.kpi5 > '2.133333333' && youthPRViolinSepContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinSepContents.kpi5 >= '2.666666667' && youthPRViolinSepContents.kpi5 < '3.2')?'green':(youthPRViolinSepContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi5}}
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
                              :color="(youthPRViolinOctContents.kpi1 == null)?'grey-2':(youthPRViolinOctContents.kpi1 >= '0' && youthPRViolinOctContents.kpi1 <= '3.6')?'red':(youthPRViolinOctContents.kpi1 > '3.6' && youthPRViolinOctContents.kpi1 <= '4.8')?'orange':(youthPRViolinOctContents.kpi1 > '4.8' && youthPRViolinOctContents.kpi1 < '6')?'yellow-7':(youthPRViolinOctContents.kpi1 >= '6' && youthPRViolinOctContents.kpi1 < '7.2')?'green':(youthPRViolinOctContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinOctContents.kpi2 == null)?'grey-2':(youthPRViolinOctContents.kpi2 >= '0' && youthPRViolinOctContents.kpi2 <= '5.6')?'red':(youthPRViolinOctContents.kpi2 > '5.6' && youthPRViolinOctContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinOctContents.kpi2 > '7.466666667' && youthPRViolinOctContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinOctContents.kpi2 >= '9.333333333' && youthPRViolinOctContents.kpi2 < '11.2')?'green':(youthPRViolinOctContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinOctContents.kpi3 == null)?'grey-2':(youthPRViolinOctContents.kpi3 >= '0' && youthPRViolinOctContents.kpi3 <= '2.4')?'red':(youthPRViolinOctContents.kpi3 > '2.4' && youthPRViolinOctContents.kpi3 <= '3.2')?'orange':(youthPRViolinOctContents.kpi3 > '3.2' && youthPRViolinOctContents.kpi3 < '4')?'yellow-7':(youthPRViolinOctContents.kpi3 >= '4' && youthPRViolinOctContents.kpi3 < '4.8')?'green':(youthPRViolinOctContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinOctContents.kpi4 == null)?'grey-2':(youthPRViolinOctContents.kpi4 >= '0' && youthPRViolinOctContents.kpi4 <= '4.6')?'red':(youthPRViolinOctContents.kpi4 > '4.6' && youthPRViolinOctContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinOctContents.kpi4 > '6.133333333' && youthPRViolinOctContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinOctContents.kpi4 >= '7.666666667' && youthPRViolinOctContents.kpi4 < '9.2')?'green':(youthPRViolinOctContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinOctContents.kpi5 == null)?'grey-2':(youthPRViolinOctContents.kpi5 >= '0' && youthPRViolinOctContents.kpi5 <= '1.6')?'red':(youthPRViolinOctContents.kpi5 > '1.6' && youthPRViolinOctContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinOctContents.kpi5 > '2.133333333' && youthPRViolinOctContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinOctContents.kpi5 >= '2.666666667' && youthPRViolinOctContents.kpi5 < '3.2')?'green':(youthPRViolinOctContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi5}}
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
                              :color="(youthPRViolinNovContents.kpi1 == null)?'grey-2':(youthPRViolinNovContents.kpi1 >= '0' && youthPRViolinNovContents.kpi1 <= '3.6')?'red':(youthPRViolinNovContents.kpi1 > '3.6' && youthPRViolinNovContents.kpi1 <= '4.8')?'orange':(youthPRViolinNovContents.kpi1 > '4.8' && youthPRViolinNovContents.kpi1 < '6')?'yellow-7':(youthPRViolinNovContents.kpi1 >= '6' && youthPRViolinNovContents.kpi1 < '7.2')?'green':(youthPRViolinNovContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinNovContents.kpi2 == null)?'grey-2':(youthPRViolinNovContents.kpi2 >= '0' && youthPRViolinNovContents.kpi2 <= '5.6')?'red':(youthPRViolinNovContents.kpi2 > '5.6' && youthPRViolinNovContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinNovContents.kpi2 > '7.466666667' && youthPRViolinNovContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinNovContents.kpi2 >= '9.333333333' && youthPRViolinNovContents.kpi2 < '11.2')?'green':(youthPRViolinNovContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinNovContents.kpi3 == null)?'grey-2':(youthPRViolinNovContents.kpi3 >= '0' && youthPRViolinNovContents.kpi3 <= '2.4')?'red':(youthPRViolinNovContents.kpi3 > '2.4' && youthPRViolinNovContents.kpi3 <= '3.2')?'orange':(youthPRViolinNovContents.kpi3 > '3.2' && youthPRViolinNovContents.kpi3 < '4')?'yellow-7':(youthPRViolinNovContents.kpi3 >= '4' && youthPRViolinNovContents.kpi3 < '4.8')?'green':(youthPRViolinNovContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinNovContents.kpi4 == null)?'grey-2':(youthPRViolinNovContents.kpi4 >= '0' && youthPRViolinNovContents.kpi4 <= '4.6')?'red':(youthPRViolinNovContents.kpi4 > '4.6' && youthPRViolinNovContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinNovContents.kpi4 > '6.133333333' && youthPRViolinNovContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinNovContents.kpi4 >= '7.666666667' && youthPRViolinNovContents.kpi4 < '9.2')?'green':(youthPRViolinNovContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinNovContents.kpi5 == null)?'grey-2':(youthPRViolinNovContents.kpi5 >= '0' && youthPRViolinNovContents.kpi5 <= '1.6')?'red':(youthPRViolinNovContents.kpi5 > '1.6' && youthPRViolinNovContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinNovContents.kpi5 > '2.133333333' && youthPRViolinNovContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinNovContents.kpi5 >= '2.666666667' && youthPRViolinNovContents.kpi5 < '3.2')?'green':(youthPRViolinNovContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi5}}
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
                              :color="(youthPRViolinDecContents.kpi1 == null)?'grey-2':(youthPRViolinDecContents.kpi1 >= '0' && youthPRViolinDecContents.kpi1 <= '3.6')?'red':(youthPRViolinDecContents.kpi1 > '3.6' && youthPRViolinDecContents.kpi1 <= '4.8')?'orange':(youthPRViolinDecContents.kpi1 > '4.8' && youthPRViolinDecContents.kpi1 < '6')?'yellow-7':(youthPRViolinDecContents.kpi1 >= '6' && youthPRViolinDecContents.kpi1 < '7.2')?'green':(youthPRViolinDecContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinDecContents.kpi2 == null)?'grey-2':(youthPRViolinDecContents.kpi2 >= '0' && youthPRViolinDecContents.kpi2 <= '5.6')?'red':(youthPRViolinDecContents.kpi2 > '5.6' && youthPRViolinDecContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinDecContents.kpi2 > '7.466666667' && youthPRViolinDecContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinDecContents.kpi2 >= '9.333333333' && youthPRViolinDecContents.kpi2 < '11.2')?'green':(youthPRViolinDecContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinDecContents.kpi3 == null)?'grey-2':(youthPRViolinDecContents.kpi3 >= '0' && youthPRViolinDecContents.kpi3 <= '2.4')?'red':(youthPRViolinDecContents.kpi3 > '2.4' && youthPRViolinDecContents.kpi3 <= '3.2')?'orange':(youthPRViolinDecContents.kpi3 > '3.2' && youthPRViolinDecContents.kpi3 < '4')?'yellow-7':(youthPRViolinDecContents.kpi3 >= '4' && youthPRViolinDecContents.kpi3 < '4.8')?'green':(youthPRViolinDecContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinDecContents.kpi4 == null)?'grey-2':(youthPRViolinDecContents.kpi4 >= '0' && youthPRViolinDecContents.kpi4 <= '4.6')?'red':(youthPRViolinDecContents.kpi4 > '4.6' && youthPRViolinDecContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinDecContents.kpi4 > '6.133333333' && youthPRViolinDecContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinDecContents.kpi4 >= '7.666666667' && youthPRViolinDecContents.kpi4 < '9.2')?'green':(youthPRViolinDecContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinDecContents.kpi5 == null)?'grey-2':(youthPRViolinDecContents.kpi5 >= '0' && youthPRViolinDecContents.kpi5 <= '1.6')?'red':(youthPRViolinDecContents.kpi5 > '1.6' && youthPRViolinDecContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinDecContents.kpi5 > '2.133333333' && youthPRViolinDecContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinDecContents.kpi5 >= '2.666666667' && youthPRViolinDecContents.kpi5 < '3.2')?'green':(youthPRViolinDecContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi5}}
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
                              :color="(youthPRViolinJanContents.kpi1 == null)?'grey-2':(youthPRViolinJanContents.kpi1 >= '0' && youthPRViolinJanContents.kpi1 <= '3.6')?'red':(youthPRViolinJanContents.kpi1 > '3.6' && youthPRViolinJanContents.kpi1 <= '4.8')?'orange':(youthPRViolinJanContents.kpi1 > '4.8' && youthPRViolinJanContents.kpi1 < '6')?'yellow-7':(youthPRViolinJanContents.kpi1 >= '6' && youthPRViolinJanContents.kpi1 < '7.2')?'green':(youthPRViolinJanContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJanContents.kpi2 == null)?'grey-2':(youthPRViolinJanContents.kpi2 >= '0' && youthPRViolinJanContents.kpi2 <= '5.6')?'red':(youthPRViolinJanContents.kpi2 > '5.6' && youthPRViolinJanContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinJanContents.kpi2 > '7.466666667' && youthPRViolinJanContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinJanContents.kpi2 >= '9.333333333' && youthPRViolinJanContents.kpi2 < '11.2')?'green':(youthPRViolinJanContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJanContents.kpi3 == null)?'grey-2':(youthPRViolinJanContents.kpi3 >= '0' && youthPRViolinJanContents.kpi3 <= '2.4')?'red':(youthPRViolinJanContents.kpi3 > '2.4' && youthPRViolinJanContents.kpi3 <= '3.2')?'orange':(youthPRViolinJanContents.kpi3 > '3.2' && youthPRViolinJanContents.kpi3 < '4')?'yellow-7':(youthPRViolinJanContents.kpi3 >= '4' && youthPRViolinJanContents.kpi3 < '4.8')?'green':(youthPRViolinJanContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJanContents.kpi4 == null)?'grey-2':(youthPRViolinJanContents.kpi4 >= '0' && youthPRViolinJanContents.kpi4 <= '4.6')?'red':(youthPRViolinJanContents.kpi4 > '4.6' && youthPRViolinJanContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinJanContents.kpi4 > '6.133333333' && youthPRViolinJanContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinJanContents.kpi4 >= '7.666666667' && youthPRViolinJanContents.kpi4 < '9.2')?'green':(youthPRViolinJanContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJanContents.kpi5 == null)?'grey-2':(youthPRViolinJanContents.kpi5 >= '0' && youthPRViolinJanContents.kpi5 <= '1.6')?'red':(youthPRViolinJanContents.kpi5 > '1.6' && youthPRViolinJanContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinJanContents.kpi5 > '2.133333333' && youthPRViolinJanContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinJanContents.kpi5 >= '2.666666667' && youthPRViolinJanContents.kpi5 < '3.2')?'green':(youthPRViolinJanContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi5}}
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
                              :color="(youthPRViolinFebContents.kpi1 == null)?'grey-2':(youthPRViolinFebContents.kpi1 >= '0' && youthPRViolinFebContents.kpi1 <= '3.6')?'red':(youthPRViolinFebContents.kpi1 > '3.6' && youthPRViolinFebContents.kpi1 <= '4.8')?'orange':(youthPRViolinFebContents.kpi1 > '4.8' && youthPRViolinFebContents.kpi1 < '6')?'yellow-7':(youthPRViolinFebContents.kpi1 >= '6' && youthPRViolinFebContents.kpi1 < '7.2')?'green':(youthPRViolinFebContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinFebContents.kpi2 == null)?'grey-2':(youthPRViolinFebContents.kpi2 >= '0' && youthPRViolinFebContents.kpi2 <= '5.6')?'red':(youthPRViolinFebContents.kpi2 > '5.6' && youthPRViolinFebContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinFebContents.kpi2 > '7.466666667' && youthPRViolinFebContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinFebContents.kpi2 >= '9.333333333' && youthPRViolinFebContents.kpi2 < '11.2')?'green':(youthPRViolinFebContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinFebContents.kpi3 == null)?'grey-2':(youthPRViolinFebContents.kpi3 >= '0' && youthPRViolinFebContents.kpi3 <= '2.4')?'red':(youthPRViolinFebContents.kpi3 > '2.4' && youthPRViolinFebContents.kpi3 <= '3.2')?'orange':(youthPRViolinFebContents.kpi3 > '3.2' && youthPRViolinFebContents.kpi3 < '4')?'yellow-7':(youthPRViolinFebContents.kpi3 >= '4' && youthPRViolinFebContents.kpi3 < '4.8')?'green':(youthPRViolinFebContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinFebContents.kpi4 == null)?'grey-2':(youthPRViolinFebContents.kpi4 >= '0' && youthPRViolinFebContents.kpi4 <= '4.6')?'red':(youthPRViolinFebContents.kpi4 > '4.6' && youthPRViolinFebContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinFebContents.kpi4 > '6.133333333' && youthPRViolinFebContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinFebContents.kpi4 >= '7.666666667' && youthPRViolinFebContents.kpi4 < '9.2')?'green':(youthPRViolinFebContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinFebContents.kpi5 == null)?'grey-2':(youthPRViolinFebContents.kpi5 >= '0' && youthPRViolinFebContents.kpi5 <= '1.6')?'red':(youthPRViolinFebContents.kpi5 > '1.6' && youthPRViolinFebContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinFebContents.kpi5 > '2.133333333' && youthPRViolinFebContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinFebContents.kpi5 >= '2.666666667' && youthPRViolinFebContents.kpi5 < '3.2')?'green':(youthPRViolinFebContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi5}}
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
                              :color="(youthPRViolinMarContents.kpi1 == null)?'grey-2':(youthPRViolinMarContents.kpi1 >= '0' && youthPRViolinMarContents.kpi1 <= '3.6')?'red':(youthPRViolinMarContents.kpi1 > '3.6' && youthPRViolinMarContents.kpi1 <= '4.8')?'orange':(youthPRViolinMarContents.kpi1 > '4.8' && youthPRViolinMarContents.kpi1 < '6')?'yellow-7':(youthPRViolinMarContents.kpi1 >= '6' && youthPRViolinMarContents.kpi1 < '7.2')?'green':(youthPRViolinMarContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMarContents.kpi2 == null)?'grey-2':(youthPRViolinMarContents.kpi2 >= '0' && youthPRViolinMarContents.kpi2 <= '5.6')?'red':(youthPRViolinMarContents.kpi2 > '5.6' && youthPRViolinMarContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinMarContents.kpi2 > '7.466666667' && youthPRViolinMarContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinMarContents.kpi2 >= '9.333333333' && youthPRViolinMarContents.kpi2 < '11.2')?'green':(youthPRViolinMarContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMarContents.kpi3 == null)?'grey-2':(youthPRViolinMarContents.kpi3 >= '0' && youthPRViolinMarContents.kpi3 <= '2.4')?'red':(youthPRViolinMarContents.kpi3 > '2.4' && youthPRViolinMarContents.kpi3 <= '3.2')?'orange':(youthPRViolinMarContents.kpi3 > '3.2' && youthPRViolinMarContents.kpi3 < '4')?'yellow-7':(youthPRViolinMarContents.kpi3 >= '4' && youthPRViolinMarContents.kpi3 < '4.8')?'green':(youthPRViolinMarContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMarContents.kpi4 == null)?'grey-2':(youthPRViolinMarContents.kpi4 >= '0' && youthPRViolinMarContents.kpi4 <= '4.6')?'red':(youthPRViolinMarContents.kpi4 > '4.6' && youthPRViolinMarContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinMarContents.kpi4 > '6.133333333' && youthPRViolinMarContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinMarContents.kpi4 >= '7.666666667' && youthPRViolinMarContents.kpi4 < '9.2')?'green':(youthPRViolinMarContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMarContents.kpi5 == null)?'grey-2':(youthPRViolinMarContents.kpi5 >= '0' && youthPRViolinMarContents.kpi5 <= '1.6')?'red':(youthPRViolinMarContents.kpi5 > '1.6' && youthPRViolinMarContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinMarContents.kpi5 > '2.133333333' && youthPRViolinMarContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinMarContents.kpi5 >= '2.666666667' && youthPRViolinMarContents.kpi5 < '3.2')?'green':(youthPRViolinMarContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi5}}
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
                              :color="(youthPRViolinAprContents.kpi1 == null)?'grey-2':(youthPRViolinAprContents.kpi1 >= '0' && youthPRViolinAprContents.kpi1 <= '3.6')?'red':(youthPRViolinAprContents.kpi1 > '3.6' && youthPRViolinAprContents.kpi1 <= '4.8')?'orange':(youthPRViolinAprContents.kpi1 > '4.8' && youthPRViolinAprContents.kpi1 < '6')?'yellow-7':(youthPRViolinAprContents.kpi1 >= '6' && youthPRViolinAprContents.kpi1 < '7.2')?'green':(youthPRViolinAprContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAprContents.kpi2 == null)?'grey-2':(youthPRViolinAprContents.kpi2 >= '0' && youthPRViolinAprContents.kpi2 <= '5.6')?'red':(youthPRViolinAprContents.kpi2 > '5.6' && youthPRViolinAprContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinAprContents.kpi2 > '7.466666667' && youthPRViolinAprContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinAprContents.kpi2 >= '9.333333333' && youthPRViolinAprContents.kpi2 < '11.2')?'green':(youthPRViolinAprContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAprContents.kpi3 == null)?'grey-2':(youthPRViolinAprContents.kpi3 >= '0' && youthPRViolinAprContents.kpi3 <= '2.4')?'red':(youthPRViolinAprContents.kpi3 > '2.4' && youthPRViolinAprContents.kpi3 <= '3.2')?'orange':(youthPRViolinAprContents.kpi3 > '3.2' && youthPRViolinAprContents.kpi3 < '4')?'yellow-7':(youthPRViolinAprContents.kpi3 >= '4' && youthPRViolinAprContents.kpi3 < '4.8')?'green':(youthPRViolinAprContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAprContents.kpi4 == null)?'grey-2':(youthPRViolinAprContents.kpi4 >= '0' && youthPRViolinAprContents.kpi4 <= '4.6')?'red':(youthPRViolinAprContents.kpi4 > '4.6' && youthPRViolinAprContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinAprContents.kpi4 > '6.133333333' && youthPRViolinAprContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinAprContents.kpi4 >= '7.666666667' && youthPRViolinAprContents.kpi4 < '9.2')?'green':(youthPRViolinAprContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAprContents.kpi5 == null)?'grey-2':(youthPRViolinAprContents.kpi5 >= '0' && youthPRViolinAprContents.kpi5 <= '1.6')?'red':(youthPRViolinAprContents.kpi5 > '1.6' && youthPRViolinAprContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinAprContents.kpi5 > '2.133333333' && youthPRViolinAprContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinAprContents.kpi5 >= '2.666666667' && youthPRViolinAprContents.kpi5 < '3.2')?'green':(youthPRViolinAprContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi5}}
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
                              :color="(youthPRViolinMayContents.kpi1 == null)?'grey-2':(youthPRViolinMayContents.kpi1 >= '0' && youthPRViolinMayContents.kpi1 <= '3.6')?'red':(youthPRViolinMayContents.kpi1 > '3.6' && youthPRViolinMayContents.kpi1 <= '4.8')?'orange':(youthPRViolinMayContents.kpi1 > '4.8' && youthPRViolinMayContents.kpi1 < '6')?'yellow-7':(youthPRViolinMayContents.kpi1 >= '6' && youthPRViolinMayContents.kpi1 < '7.2')?'green':(youthPRViolinMayContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMayContents.kpi2 == null)?'grey-2':(youthPRViolinMayContents.kpi2 >= '0' && youthPRViolinMayContents.kpi2 <= '5.6')?'red':(youthPRViolinMayContents.kpi2 > '5.6' && youthPRViolinMayContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinMayContents.kpi2 > '7.466666667' && youthPRViolinMayContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinMayContents.kpi2 >= '9.333333333' && youthPRViolinMayContents.kpi2 < '11.2')?'green':(youthPRViolinMayContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMayContents.kpi3 == null)?'grey-2':(youthPRViolinMayContents.kpi3 >= '0' && youthPRViolinMayContents.kpi3 <= '2.4')?'red':(youthPRViolinMayContents.kpi3 > '2.4' && youthPRViolinMayContents.kpi3 <= '3.2')?'orange':(youthPRViolinMayContents.kpi3 > '3.2' && youthPRViolinMayContents.kpi3 < '4')?'yellow-7':(youthPRViolinMayContents.kpi3 >= '4' && youthPRViolinMayContents.kpi3 < '4.8')?'green':(youthPRViolinMayContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMayContents.kpi4 == null)?'grey-2':(youthPRViolinMayContents.kpi4 >= '0' && youthPRViolinMayContents.kpi4 <= '4.6')?'red':(youthPRViolinMayContents.kpi4 > '4.6' && youthPRViolinMayContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinMayContents.kpi4 > '6.133333333' && youthPRViolinMayContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinMayContents.kpi4 >= '7.666666667' && youthPRViolinMayContents.kpi4 < '9.2')?'green':(youthPRViolinMayContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMayContents.kpi5 == null)?'grey-2':(youthPRViolinMayContents.kpi5 >= '0' && youthPRViolinMayContents.kpi5 <= '1.6')?'red':(youthPRViolinMayContents.kpi5 > '1.6' && youthPRViolinMayContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinMayContents.kpi5 > '2.133333333' && youthPRViolinMayContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinMayContents.kpi5 >= '2.666666667' && youthPRViolinMayContents.kpi5 < '3.2')?'green':(youthPRViolinMayContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi5}}
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
                              :color="(youthPRViolinJunContents.kpi1 == null)?'grey-2':(youthPRViolinJunContents.kpi1 >= '0' && youthPRViolinJunContents.kpi1 <= '3.6')?'red':(youthPRViolinJunContents.kpi1 > '3.6' && youthPRViolinJunContents.kpi1 <= '4.8')?'orange':(youthPRViolinJunContents.kpi1 > '4.8' && youthPRViolinJunContents.kpi1 < '6')?'yellow-7':(youthPRViolinJunContents.kpi1 >= '6' && youthPRViolinJunContents.kpi1 < '7.2')?'green':(youthPRViolinJunContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJunContents.kpi2 == null)?'grey-2':(youthPRViolinJunContents.kpi2 >= '0' && youthPRViolinJunContents.kpi2 <= '5.6')?'red':(youthPRViolinJunContents.kpi2 > '5.6' && youthPRViolinJunContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinJunContents.kpi2 > '7.466666667' && youthPRViolinJunContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinJunContents.kpi2 >= '9.333333333' && youthPRViolinJunContents.kpi2 < '11.2')?'green':(youthPRViolinJunContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJunContents.kpi3 == null)?'grey-2':(youthPRViolinJunContents.kpi3 >= '0' && youthPRViolinJunContents.kpi3 <= '2.4')?'red':(youthPRViolinJunContents.kpi3 > '2.4' && youthPRViolinJunContents.kpi3 <= '3.2')?'orange':(youthPRViolinJunContents.kpi3 > '3.2' && youthPRViolinJunContents.kpi3 < '4')?'yellow-7':(youthPRViolinJunContents.kpi3 >= '4' && youthPRViolinJunContents.kpi3 < '4.8')?'green':(youthPRViolinJunContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJunContents.kpi4 == null)?'grey-2':(youthPRViolinJunContents.kpi4 >= '0' && youthPRViolinJunContents.kpi4 <= '4.6')?'red':(youthPRViolinJunContents.kpi4 > '4.6' && youthPRViolinJunContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinJunContents.kpi4 > '6.133333333' && youthPRViolinJunContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinJunContents.kpi4 >= '7.666666667' && youthPRViolinJunContents.kpi4 < '9.2')?'green':(youthPRViolinJunContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJunContents.kpi5 == null)?'grey-2':(youthPRViolinJunContents.kpi5 >= '0' && youthPRViolinJunContents.kpi5 <= '1.6')?'red':(youthPRViolinJunContents.kpi5 > '1.6' && youthPRViolinJunContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinJunContents.kpi5 > '2.133333333' && youthPRViolinJunContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinJunContents.kpi5 >= '2.666666667' && youthPRViolinJunContents.kpi5 < '3.2')?'green':(youthPRViolinJunContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi5}}
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
                              :color="(youthPRViolinJulContents.kpi1 == null)?'grey-2':(youthPRViolinJulContents.kpi1 >= '0' && youthPRViolinJulContents.kpi1 <= '3.6')?'red':(youthPRViolinJulContents.kpi1 > '3.6' && youthPRViolinJulContents.kpi1 <= '4.8')?'orange':(youthPRViolinJulContents.kpi1 > '4.8' && youthPRViolinJulContents.kpi1 < '6')?'yellow-7':(youthPRViolinJulContents.kpi1 >= '6' && youthPRViolinJulContents.kpi1 < '7.2')?'green':(youthPRViolinJulContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJulContents.kpi2 == null)?'grey-2':(youthPRViolinJulContents.kpi2 >= '0' && youthPRViolinJulContents.kpi2 <= '5.6')?'red':(youthPRViolinJulContents.kpi2 > '5.6' && youthPRViolinJulContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinJulContents.kpi2 > '7.466666667' && youthPRViolinJulContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinJulContents.kpi2 >= '9.333333333' && youthPRViolinJulContents.kpi2 < '11.2')?'green':(youthPRViolinJulContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJulContents.kpi3 == null)?'grey-2':(youthPRViolinJulContents.kpi3 >= '0' && youthPRViolinJulContents.kpi3 <= '2.4')?'red':(youthPRViolinJulContents.kpi3 > '2.4' && youthPRViolinJulContents.kpi3 <= '3.2')?'orange':(youthPRViolinJulContents.kpi3 > '3.2' && youthPRViolinJulContents.kpi3 < '4')?'yellow-7':(youthPRViolinJulContents.kpi3 >= '4' && youthPRViolinJulContents.kpi3 < '4.8')?'green':(youthPRViolinJulContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJulContents.kpi4 == null)?'grey-2':(youthPRViolinJulContents.kpi4 >= '0' && youthPRViolinJulContents.kpi4 <= '4.6')?'red':(youthPRViolinJulContents.kpi4 > '4.6' && youthPRViolinJulContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinJulContents.kpi4 > '6.133333333' && youthPRViolinJulContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinJulContents.kpi4 >= '7.666666667' && youthPRViolinJulContents.kpi4 < '9.2')?'green':(youthPRViolinJulContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJulContents.kpi5 == null)?'grey-2':(youthPRViolinJulContents.kpi5 >= '0' && youthPRViolinJulContents.kpi5 <= '1.6')?'red':(youthPRViolinJulContents.kpi5 > '1.6' && youthPRViolinJulContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinJulContents.kpi5 > '2.133333333' && youthPRViolinJulContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinJulContents.kpi5 >= '2.666666667' && youthPRViolinJulContents.kpi5 < '3.2')?'green':(youthPRViolinJulContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi5}}
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
                              :color="(youthPRViolinAugContents.kpi1 == null)?'grey-2':(youthPRViolinAugContents.kpi1 >= '0' && youthPRViolinAugContents.kpi1 <= '3.6')?'red':(youthPRViolinAugContents.kpi1 > '3.6' && youthPRViolinAugContents.kpi1 <= '4.8')?'orange':(youthPRViolinAugContents.kpi1 > '4.8' && youthPRViolinAugContents.kpi1 < '6')?'yellow-7':(youthPRViolinAugContents.kpi1 >= '6' && youthPRViolinAugContents.kpi1 < '7.2')?'green':(youthPRViolinAugContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAugContents.kpi2 == null)?'grey-2':(youthPRViolinAugContents.kpi2 >= '0' && youthPRViolinAugContents.kpi2 <= '5.6')?'red':(youthPRViolinAugContents.kpi2 > '5.6' && youthPRViolinAugContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinAugContents.kpi2 > '7.466666667' && youthPRViolinAugContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinAugContents.kpi2 >= '9.333333333' && youthPRViolinAugContents.kpi2 < '11.2')?'green':(youthPRViolinAugContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAugContents.kpi3 == null)?'grey-2':(youthPRViolinAugContents.kpi3 >= '0' && youthPRViolinAugContents.kpi3 <= '2.4')?'red':(youthPRViolinAugContents.kpi3 > '2.4' && youthPRViolinAugContents.kpi3 <= '3.2')?'orange':(youthPRViolinAugContents.kpi3 > '3.2' && youthPRViolinAugContents.kpi3 < '4')?'yellow-7':(youthPRViolinAugContents.kpi3 >= '4' && youthPRViolinAugContents.kpi3 < '4.8')?'green':(youthPRViolinAugContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAugContents.kpi4 == null)?'grey-2':(youthPRViolinAugContents.kpi4 >= '0' && youthPRViolinAugContents.kpi4 <= '4.6')?'red':(youthPRViolinAugContents.kpi4 > '4.6' && youthPRViolinAugContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinAugContents.kpi4 > '6.133333333' && youthPRViolinAugContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinAugContents.kpi4 >= '7.666666667' && youthPRViolinAugContents.kpi4 < '9.2')?'green':(youthPRViolinAugContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAugContents.kpi5 == null)?'grey-2':(youthPRViolinAugContents.kpi5 >= '0' && youthPRViolinAugContents.kpi5 <= '1.6')?'red':(youthPRViolinAugContents.kpi5 > '1.6' && youthPRViolinAugContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinAugContents.kpi5 > '2.133333333' && youthPRViolinAugContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinAugContents.kpi5 >= '2.666666667' && youthPRViolinAugContents.kpi5 < '3.2')?'green':(youthPRViolinAugContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi5}}
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
                              :color="(youthPRViolinSepContents.kpi1 == null)?'grey-2':(youthPRViolinSepContents.kpi1 >= '0' && youthPRViolinSepContents.kpi1 <= '3.6')?'red':(youthPRViolinSepContents.kpi1 > '3.6' && youthPRViolinSepContents.kpi1 <= '4.8')?'orange':(youthPRViolinSepContents.kpi1 > '4.8' && youthPRViolinSepContents.kpi1 < '6')?'yellow-7':(youthPRViolinSepContents.kpi1 >= '6' && youthPRViolinSepContents.kpi1 < '7.2')?'green':(youthPRViolinSepContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinSepContents.kpi2 == null)?'grey-2':(youthPRViolinSepContents.kpi2 >= '0' && youthPRViolinSepContents.kpi2 <= '5.6')?'red':(youthPRViolinSepContents.kpi2 > '5.6' && youthPRViolinSepContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinSepContents.kpi2 > '7.466666667' && youthPRViolinSepContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinSepContents.kpi2 >= '9.333333333' && youthPRViolinSepContents.kpi2 < '11.2')?'green':(youthPRViolinSepContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinSepContents.kpi3 == null)?'grey-2':(youthPRViolinSepContents.kpi3 >= '0' && youthPRViolinSepContents.kpi3 <= '2.4')?'red':(youthPRViolinSepContents.kpi3 > '2.4' && youthPRViolinSepContents.kpi3 <= '3.2')?'orange':(youthPRViolinSepContents.kpi3 > '3.2' && youthPRViolinSepContents.kpi3 < '4')?'yellow-7':(youthPRViolinSepContents.kpi3 >= '4' && youthPRViolinSepContents.kpi3 < '4.8')?'green':(youthPRViolinSepContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinSepContents.kpi4 == null)?'grey-2':(youthPRViolinSepContents.kpi4 >= '0' && youthPRViolinSepContents.kpi4 <= '4.6')?'red':(youthPRViolinSepContents.kpi4 > '4.6' && youthPRViolinSepContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinSepContents.kpi4 > '6.133333333' && youthPRViolinSepContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinSepContents.kpi4 >= '7.666666667' && youthPRViolinSepContents.kpi4 < '9.2')?'green':(youthPRViolinSepContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinSepContents.kpi5 == null)?'grey-2':(youthPRViolinSepContents.kpi5 >= '0' && youthPRViolinSepContents.kpi5 <= '1.6')?'red':(youthPRViolinSepContents.kpi5 > '1.6' && youthPRViolinSepContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinSepContents.kpi5 > '2.133333333' && youthPRViolinSepContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinSepContents.kpi5 >= '2.666666667' && youthPRViolinSepContents.kpi5 < '3.2')?'green':(youthPRViolinSepContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi5}}
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
                              :color="(youthPRViolinOctContents.kpi1 == null)?'grey-2':(youthPRViolinOctContents.kpi1 >= '0' && youthPRViolinOctContents.kpi1 <= '3.6')?'red':(youthPRViolinOctContents.kpi1 > '3.6' && youthPRViolinOctContents.kpi1 <= '4.8')?'orange':(youthPRViolinOctContents.kpi1 > '4.8' && youthPRViolinOctContents.kpi1 < '6')?'yellow-7':(youthPRViolinOctContents.kpi1 >= '6' && youthPRViolinOctContents.kpi1 < '7.2')?'green':(youthPRViolinOctContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinOctContents.kpi2 == null)?'grey-2':(youthPRViolinOctContents.kpi2 >= '0' && youthPRViolinOctContents.kpi2 <= '5.6')?'red':(youthPRViolinOctContents.kpi2 > '5.6' && youthPRViolinOctContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinOctContents.kpi2 > '7.466666667' && youthPRViolinOctContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinOctContents.kpi2 >= '9.333333333' && youthPRViolinOctContents.kpi2 < '11.2')?'green':(youthPRViolinOctContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinOctContents.kpi3 == null)?'grey-2':(youthPRViolinOctContents.kpi3 >= '0' && youthPRViolinOctContents.kpi3 <= '2.4')?'red':(youthPRViolinOctContents.kpi3 > '2.4' && youthPRViolinOctContents.kpi3 <= '3.2')?'orange':(youthPRViolinOctContents.kpi3 > '3.2' && youthPRViolinOctContents.kpi3 < '4')?'yellow-7':(youthPRViolinOctContents.kpi3 >= '4' && youthPRViolinOctContents.kpi3 < '4.8')?'green':(youthPRViolinOctContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinOctContents.kpi4 == null)?'grey-2':(youthPRViolinOctContents.kpi4 >= '0' && youthPRViolinOctContents.kpi4 <= '4.6')?'red':(youthPRViolinOctContents.kpi4 > '4.6' && youthPRViolinOctContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinOctContents.kpi4 > '6.133333333' && youthPRViolinOctContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinOctContents.kpi4 >= '7.666666667' && youthPRViolinOctContents.kpi4 < '9.2')?'green':(youthPRViolinOctContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinOctContents.kpi5 == null)?'grey-2':(youthPRViolinOctContents.kpi5 >= '0' && youthPRViolinOctContents.kpi5 <= '1.6')?'red':(youthPRViolinOctContents.kpi5 > '1.6' && youthPRViolinOctContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinOctContents.kpi5 > '2.133333333' && youthPRViolinOctContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinOctContents.kpi5 >= '2.666666667' && youthPRViolinOctContents.kpi5 < '3.2')?'green':(youthPRViolinOctContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi5}}
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
                              :color="(youthPRViolinNovContents.kpi1 == null)?'grey-2':(youthPRViolinNovContents.kpi1 >= '0' && youthPRViolinNovContents.kpi1 <= '3.6')?'red':(youthPRViolinNovContents.kpi1 > '3.6' && youthPRViolinNovContents.kpi1 <= '4.8')?'orange':(youthPRViolinNovContents.kpi1 > '4.8' && youthPRViolinNovContents.kpi1 < '6')?'yellow-7':(youthPRViolinNovContents.kpi1 >= '6' && youthPRViolinNovContents.kpi1 < '7.2')?'green':(youthPRViolinNovContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinNovContents.kpi2 == null)?'grey-2':(youthPRViolinNovContents.kpi2 >= '0' && youthPRViolinNovContents.kpi2 <= '5.6')?'red':(youthPRViolinNovContents.kpi2 > '5.6' && youthPRViolinNovContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinNovContents.kpi2 > '7.466666667' && youthPRViolinNovContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinNovContents.kpi2 >= '9.333333333' && youthPRViolinNovContents.kpi2 < '11.2')?'green':(youthPRViolinNovContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinNovContents.kpi3 == null)?'grey-2':(youthPRViolinNovContents.kpi3 >= '0' && youthPRViolinNovContents.kpi3 <= '2.4')?'red':(youthPRViolinNovContents.kpi3 > '2.4' && youthPRViolinNovContents.kpi3 <= '3.2')?'orange':(youthPRViolinNovContents.kpi3 > '3.2' && youthPRViolinNovContents.kpi3 < '4')?'yellow-7':(youthPRViolinNovContents.kpi3 >= '4' && youthPRViolinNovContents.kpi3 < '4.8')?'green':(youthPRViolinNovContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinNovContents.kpi4 == null)?'grey-2':(youthPRViolinNovContents.kpi4 >= '0' && youthPRViolinNovContents.kpi4 <= '4.6')?'red':(youthPRViolinNovContents.kpi4 > '4.6' && youthPRViolinNovContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinNovContents.kpi4 > '6.133333333' && youthPRViolinNovContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinNovContents.kpi4 >= '7.666666667' && youthPRViolinNovContents.kpi4 < '9.2')?'green':(youthPRViolinNovContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinNovContents.kpi5 == null)?'grey-2':(youthPRViolinNovContents.kpi5 >= '0' && youthPRViolinNovContents.kpi5 <= '1.6')?'red':(youthPRViolinNovContents.kpi5 > '1.6' && youthPRViolinNovContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinNovContents.kpi5 > '2.133333333' && youthPRViolinNovContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinNovContents.kpi5 >= '2.666666667' && youthPRViolinNovContents.kpi5 < '3.2')?'green':(youthPRViolinNovContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi5}}
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
                              :color="(youthPRViolinDecContents.kpi1 == null)?'grey-2':(youthPRViolinDecContents.kpi1 >= '0' && youthPRViolinDecContents.kpi1 <= '3.6')?'red':(youthPRViolinDecContents.kpi1 > '3.6' && youthPRViolinDecContents.kpi1 <= '4.8')?'orange':(youthPRViolinDecContents.kpi1 > '4.8' && youthPRViolinDecContents.kpi1 < '6')?'yellow-7':(youthPRViolinDecContents.kpi1 >= '6' && youthPRViolinDecContents.kpi1 < '7.2')?'green':(youthPRViolinDecContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinDecContents.kpi2 == null)?'grey-2':(youthPRViolinDecContents.kpi2 >= '0' && youthPRViolinDecContents.kpi2 <= '5.6')?'red':(youthPRViolinDecContents.kpi2 > '5.6' && youthPRViolinDecContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinDecContents.kpi2 > '7.466666667' && youthPRViolinDecContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinDecContents.kpi2 >= '9.333333333' && youthPRViolinDecContents.kpi2 < '11.2')?'green':(youthPRViolinDecContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinDecContents.kpi3 == null)?'grey-2':(youthPRViolinDecContents.kpi3 >= '0' && youthPRViolinDecContents.kpi3 <= '2.4')?'red':(youthPRViolinDecContents.kpi3 > '2.4' && youthPRViolinDecContents.kpi3 <= '3.2')?'orange':(youthPRViolinDecContents.kpi3 > '3.2' && youthPRViolinDecContents.kpi3 < '4')?'yellow-7':(youthPRViolinDecContents.kpi3 >= '4' && youthPRViolinDecContents.kpi3 < '4.8')?'green':(youthPRViolinDecContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinDecContents.kpi4 == null)?'grey-2':(youthPRViolinDecContents.kpi4 >= '0' && youthPRViolinDecContents.kpi4 <= '4.6')?'red':(youthPRViolinDecContents.kpi4 > '4.6' && youthPRViolinDecContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinDecContents.kpi4 > '6.133333333' && youthPRViolinDecContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinDecContents.kpi4 >= '7.666666667' && youthPRViolinDecContents.kpi4 < '9.2')?'green':(youthPRViolinDecContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinDecContents.kpi5 == null)?'grey-2':(youthPRViolinDecContents.kpi5 >= '0' && youthPRViolinDecContents.kpi5 <= '1.6')?'red':(youthPRViolinDecContents.kpi5 > '1.6' && youthPRViolinDecContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinDecContents.kpi5 > '2.133333333' && youthPRViolinDecContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinDecContents.kpi5 >= '2.666666667' && youthPRViolinDecContents.kpi5 < '3.2')?'green':(youthPRViolinDecContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi5}}
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
                              :color="(youthPRViolinJanContents.kpi1 == null)?'grey-2':(youthPRViolinJanContents.kpi1 >= '0' && youthPRViolinJanContents.kpi1 <= '3.6')?'red':(youthPRViolinJanContents.kpi1 > '3.6' && youthPRViolinJanContents.kpi1 <= '4.8')?'orange':(youthPRViolinJanContents.kpi1 > '4.8' && youthPRViolinJanContents.kpi1 < '6')?'yellow-7':(youthPRViolinJanContents.kpi1 >= '6' && youthPRViolinJanContents.kpi1 < '7.2')?'green':(youthPRViolinJanContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJanContents.kpi2 == null)?'grey-2':(youthPRViolinJanContents.kpi2 >= '0' && youthPRViolinJanContents.kpi2 <= '5.6')?'red':(youthPRViolinJanContents.kpi2 > '5.6' && youthPRViolinJanContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinJanContents.kpi2 > '7.466666667' && youthPRViolinJanContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinJanContents.kpi2 >= '9.333333333' && youthPRViolinJanContents.kpi2 < '11.2')?'green':(youthPRViolinJanContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJanContents.kpi3 == null)?'grey-2':(youthPRViolinJanContents.kpi3 >= '0' && youthPRViolinJanContents.kpi3 <= '2.4')?'red':(youthPRViolinJanContents.kpi3 > '2.4' && youthPRViolinJanContents.kpi3 <= '3.2')?'orange':(youthPRViolinJanContents.kpi3 > '3.2' && youthPRViolinJanContents.kpi3 < '4')?'yellow-7':(youthPRViolinJanContents.kpi3 >= '4' && youthPRViolinJanContents.kpi3 < '4.8')?'green':(youthPRViolinJanContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJanContents.kpi4 == null)?'grey-2':(youthPRViolinJanContents.kpi4 >= '0' && youthPRViolinJanContents.kpi4 <= '4.6')?'red':(youthPRViolinJanContents.kpi4 > '4.6' && youthPRViolinJanContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinJanContents.kpi4 > '6.133333333' && youthPRViolinJanContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinJanContents.kpi4 >= '7.666666667' && youthPRViolinJanContents.kpi4 < '9.2')?'green':(youthPRViolinJanContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJanContents.kpi5 == null)?'grey-2':(youthPRViolinJanContents.kpi5 >= '0' && youthPRViolinJanContents.kpi5 <= '1.6')?'red':(youthPRViolinJanContents.kpi5 > '1.6' && youthPRViolinJanContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinJanContents.kpi5 > '2.133333333' && youthPRViolinJanContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinJanContents.kpi5 >= '2.666666667' && youthPRViolinJanContents.kpi5 < '3.2')?'green':(youthPRViolinJanContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi5}}
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
                              :color="(youthPRViolinFebContents.kpi1 == null)?'grey-2':(youthPRViolinFebContents.kpi1 >= '0' && youthPRViolinFebContents.kpi1 <= '3.6')?'red':(youthPRViolinFebContents.kpi1 > '3.6' && youthPRViolinFebContents.kpi1 <= '4.8')?'orange':(youthPRViolinFebContents.kpi1 > '4.8' && youthPRViolinFebContents.kpi1 < '6')?'yellow-7':(youthPRViolinFebContents.kpi1 >= '6' && youthPRViolinFebContents.kpi1 < '7.2')?'green':(youthPRViolinFebContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinFebContents.kpi2 == null)?'grey-2':(youthPRViolinFebContents.kpi2 >= '0' && youthPRViolinFebContents.kpi2 <= '5.6')?'red':(youthPRViolinFebContents.kpi2 > '5.6' && youthPRViolinFebContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinFebContents.kpi2 > '7.466666667' && youthPRViolinFebContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinFebContents.kpi2 >= '9.333333333' && youthPRViolinFebContents.kpi2 < '11.2')?'green':(youthPRViolinFebContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinFebContents.kpi3 == null)?'grey-2':(youthPRViolinFebContents.kpi3 >= '0' && youthPRViolinFebContents.kpi3 <= '2.4')?'red':(youthPRViolinFebContents.kpi3 > '2.4' && youthPRViolinFebContents.kpi3 <= '3.2')?'orange':(youthPRViolinFebContents.kpi3 > '3.2' && youthPRViolinFebContents.kpi3 < '4')?'yellow-7':(youthPRViolinFebContents.kpi3 >= '4' && youthPRViolinFebContents.kpi3 < '4.8')?'green':(youthPRViolinFebContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinFebContents.kpi4 == null)?'grey-2':(youthPRViolinFebContents.kpi4 >= '0' && youthPRViolinFebContents.kpi4 <= '4.6')?'red':(youthPRViolinFebContents.kpi4 > '4.6' && youthPRViolinFebContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinFebContents.kpi4 > '6.133333333' && youthPRViolinFebContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinFebContents.kpi4 >= '7.666666667' && youthPRViolinFebContents.kpi4 < '9.2')?'green':(youthPRViolinFebContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinFebContents.kpi5 == null)?'grey-2':(youthPRViolinFebContents.kpi5 >= '0' && youthPRViolinFebContents.kpi5 <= '1.6')?'red':(youthPRViolinFebContents.kpi5 > '1.6' && youthPRViolinFebContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinFebContents.kpi5 > '2.133333333' && youthPRViolinFebContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinFebContents.kpi5 >= '2.666666667' && youthPRViolinFebContents.kpi5 < '3.2')?'green':(youthPRViolinFebContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi5}}
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
                              :color="(youthPRViolinMarContents.kpi1 == null)?'grey-2':(youthPRViolinMarContents.kpi1 >= '0' && youthPRViolinMarContents.kpi1 <= '3.6')?'red':(youthPRViolinMarContents.kpi1 > '3.6' && youthPRViolinMarContents.kpi1 <= '4.8')?'orange':(youthPRViolinMarContents.kpi1 > '4.8' && youthPRViolinMarContents.kpi1 < '6')?'yellow-7':(youthPRViolinMarContents.kpi1 >= '6' && youthPRViolinMarContents.kpi1 < '7.2')?'green':(youthPRViolinMarContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMarContents.kpi2 == null)?'grey-2':(youthPRViolinMarContents.kpi2 >= '0' && youthPRViolinMarContents.kpi2 <= '5.6')?'red':(youthPRViolinMarContents.kpi2 > '5.6' && youthPRViolinMarContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinMarContents.kpi2 > '7.466666667' && youthPRViolinMarContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinMarContents.kpi2 >= '9.333333333' && youthPRViolinMarContents.kpi2 < '11.2')?'green':(youthPRViolinMarContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMarContents.kpi3 == null)?'grey-2':(youthPRViolinMarContents.kpi3 >= '0' && youthPRViolinMarContents.kpi3 <= '2.4')?'red':(youthPRViolinMarContents.kpi3 > '2.4' && youthPRViolinMarContents.kpi3 <= '3.2')?'orange':(youthPRViolinMarContents.kpi3 > '3.2' && youthPRViolinMarContents.kpi3 < '4')?'yellow-7':(youthPRViolinMarContents.kpi3 >= '4' && youthPRViolinMarContents.kpi3 < '4.8')?'green':(youthPRViolinMarContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMarContents.kpi4 == null)?'grey-2':(youthPRViolinMarContents.kpi4 >= '0' && youthPRViolinMarContents.kpi4 <= '4.6')?'red':(youthPRViolinMarContents.kpi4 > '4.6' && youthPRViolinMarContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinMarContents.kpi4 > '6.133333333' && youthPRViolinMarContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinMarContents.kpi4 >= '7.666666667' && youthPRViolinMarContents.kpi4 < '9.2')?'green':(youthPRViolinMarContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMarContents.kpi5 == null)?'grey-2':(youthPRViolinMarContents.kpi5 >= '0' && youthPRViolinMarContents.kpi5 <= '1.6')?'red':(youthPRViolinMarContents.kpi5 > '1.6' && youthPRViolinMarContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinMarContents.kpi5 > '2.133333333' && youthPRViolinMarContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinMarContents.kpi5 >= '2.666666667' && youthPRViolinMarContents.kpi5 < '3.2')?'green':(youthPRViolinMarContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi5}}
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
                              :color="(youthPRViolinAprContents.kpi1 == null)?'grey-2':(youthPRViolinAprContents.kpi1 >= '0' && youthPRViolinAprContents.kpi1 <= '3.6')?'red':(youthPRViolinAprContents.kpi1 > '3.6' && youthPRViolinAprContents.kpi1 <= '4.8')?'orange':(youthPRViolinAprContents.kpi1 > '4.8' && youthPRViolinAprContents.kpi1 < '6')?'yellow-7':(youthPRViolinAprContents.kpi1 >= '6' && youthPRViolinAprContents.kpi1 < '7.2')?'green':(youthPRViolinAprContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAprContents.kpi2 == null)?'grey-2':(youthPRViolinAprContents.kpi2 >= '0' && youthPRViolinAprContents.kpi2 <= '5.6')?'red':(youthPRViolinAprContents.kpi2 > '5.6' && youthPRViolinAprContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinAprContents.kpi2 > '7.466666667' && youthPRViolinAprContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinAprContents.kpi2 >= '9.333333333' && youthPRViolinAprContents.kpi2 < '11.2')?'green':(youthPRViolinAprContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAprContents.kpi3 == null)?'grey-2':(youthPRViolinAprContents.kpi3 >= '0' && youthPRViolinAprContents.kpi3 <= '2.4')?'red':(youthPRViolinAprContents.kpi3 > '2.4' && youthPRViolinAprContents.kpi3 <= '3.2')?'orange':(youthPRViolinAprContents.kpi3 > '3.2' && youthPRViolinAprContents.kpi3 < '4')?'yellow-7':(youthPRViolinAprContents.kpi3 >= '4' && youthPRViolinAprContents.kpi3 < '4.8')?'green':(youthPRViolinAprContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAprContents.kpi4 == null)?'grey-2':(youthPRViolinAprContents.kpi4 >= '0' && youthPRViolinAprContents.kpi4 <= '4.6')?'red':(youthPRViolinAprContents.kpi4 > '4.6' && youthPRViolinAprContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinAprContents.kpi4 > '6.133333333' && youthPRViolinAprContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinAprContents.kpi4 >= '7.666666667' && youthPRViolinAprContents.kpi4 < '9.2')?'green':(youthPRViolinAprContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAprContents.kpi5 == null)?'grey-2':(youthPRViolinAprContents.kpi5 >= '0' && youthPRViolinAprContents.kpi5 <= '1.6')?'red':(youthPRViolinAprContents.kpi5 > '1.6' && youthPRViolinAprContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinAprContents.kpi5 > '2.133333333' && youthPRViolinAprContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinAprContents.kpi5 >= '2.666666667' && youthPRViolinAprContents.kpi5 < '3.2')?'green':(youthPRViolinAprContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi5}}
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
                              :color="(youthPRViolinMayContents.kpi1 == null)?'grey-2':(youthPRViolinMayContents.kpi1 >= '0' && youthPRViolinMayContents.kpi1 <= '3.6')?'red':(youthPRViolinMayContents.kpi1 > '3.6' && youthPRViolinMayContents.kpi1 <= '4.8')?'orange':(youthPRViolinMayContents.kpi1 > '4.8' && youthPRViolinMayContents.kpi1 < '6')?'yellow-7':(youthPRViolinMayContents.kpi1 >= '6' && youthPRViolinMayContents.kpi1 < '7.2')?'green':(youthPRViolinMayContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMayContents.kpi2 == null)?'grey-2':(youthPRViolinMayContents.kpi2 >= '0' && youthPRViolinMayContents.kpi2 <= '5.6')?'red':(youthPRViolinMayContents.kpi2 > '5.6' && youthPRViolinMayContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinMayContents.kpi2 > '7.466666667' && youthPRViolinMayContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinMayContents.kpi2 >= '9.333333333' && youthPRViolinMayContents.kpi2 < '11.2')?'green':(youthPRViolinMayContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMayContents.kpi3 == null)?'grey-2':(youthPRViolinMayContents.kpi3 >= '0' && youthPRViolinMayContents.kpi3 <= '2.4')?'red':(youthPRViolinMayContents.kpi3 > '2.4' && youthPRViolinMayContents.kpi3 <= '3.2')?'orange':(youthPRViolinMayContents.kpi3 > '3.2' && youthPRViolinMayContents.kpi3 < '4')?'yellow-7':(youthPRViolinMayContents.kpi3 >= '4' && youthPRViolinMayContents.kpi3 < '4.8')?'green':(youthPRViolinMayContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMayContents.kpi4 == null)?'grey-2':(youthPRViolinMayContents.kpi4 >= '0' && youthPRViolinMayContents.kpi4 <= '4.6')?'red':(youthPRViolinMayContents.kpi4 > '4.6' && youthPRViolinMayContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinMayContents.kpi4 > '6.133333333' && youthPRViolinMayContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinMayContents.kpi4 >= '7.666666667' && youthPRViolinMayContents.kpi4 < '9.2')?'green':(youthPRViolinMayContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMayContents.kpi5 == null)?'grey-2':(youthPRViolinMayContents.kpi5 >= '0' && youthPRViolinMayContents.kpi5 <= '1.6')?'red':(youthPRViolinMayContents.kpi5 > '1.6' && youthPRViolinMayContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinMayContents.kpi5 > '2.133333333' && youthPRViolinMayContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinMayContents.kpi5 >= '2.666666667' && youthPRViolinMayContents.kpi5 < '3.2')?'green':(youthPRViolinMayContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi5}}
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
                              :color="(youthPRViolinJunContents.kpi1 == null)?'grey-2':(youthPRViolinJunContents.kpi1 >= '0' && youthPRViolinJunContents.kpi1 <= '3.6')?'red':(youthPRViolinJunContents.kpi1 > '3.6' && youthPRViolinJunContents.kpi1 <= '4.8')?'orange':(youthPRViolinJunContents.kpi1 > '4.8' && youthPRViolinJunContents.kpi1 < '6')?'yellow-7':(youthPRViolinJunContents.kpi1 >= '6' && youthPRViolinJunContents.kpi1 < '7.2')?'green':(youthPRViolinJunContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJunContents.kpi2 == null)?'grey-2':(youthPRViolinJunContents.kpi2 >= '0' && youthPRViolinJunContents.kpi2 <= '5.6')?'red':(youthPRViolinJunContents.kpi2 > '5.6' && youthPRViolinJunContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinJunContents.kpi2 > '7.466666667' && youthPRViolinJunContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinJunContents.kpi2 >= '9.333333333' && youthPRViolinJunContents.kpi2 < '11.2')?'green':(youthPRViolinJunContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJunContents.kpi3 == null)?'grey-2':(youthPRViolinJunContents.kpi3 >= '0' && youthPRViolinJunContents.kpi3 <= '2.4')?'red':(youthPRViolinJunContents.kpi3 > '2.4' && youthPRViolinJunContents.kpi3 <= '3.2')?'orange':(youthPRViolinJunContents.kpi3 > '3.2' && youthPRViolinJunContents.kpi3 < '4')?'yellow-7':(youthPRViolinJunContents.kpi3 >= '4' && youthPRViolinJunContents.kpi3 < '4.8')?'green':(youthPRViolinJunContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJunContents.kpi4 == null)?'grey-2':(youthPRViolinJunContents.kpi4 >= '0' && youthPRViolinJunContents.kpi4 <= '4.6')?'red':(youthPRViolinJunContents.kpi4 > '4.6' && youthPRViolinJunContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinJunContents.kpi4 > '6.133333333' && youthPRViolinJunContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinJunContents.kpi4 >= '7.666666667' && youthPRViolinJunContents.kpi4 < '9.2')?'green':(youthPRViolinJunContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJunContents.kpi5 == null)?'grey-2':(youthPRViolinJunContents.kpi5 >= '0' && youthPRViolinJunContents.kpi5 <= '1.6')?'red':(youthPRViolinJunContents.kpi5 > '1.6' && youthPRViolinJunContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinJunContents.kpi5 > '2.133333333' && youthPRViolinJunContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinJunContents.kpi5 >= '2.666666667' && youthPRViolinJunContents.kpi5 < '3.2')?'green':(youthPRViolinJunContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi5}}
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
                              :color="(youthPRViolinJulContents.kpi1 == null)?'grey-2':(youthPRViolinJulContents.kpi1 >= '0' && youthPRViolinJulContents.kpi1 <= '3.6')?'red':(youthPRViolinJulContents.kpi1 > '3.6' && youthPRViolinJulContents.kpi1 <= '4.8')?'orange':(youthPRViolinJulContents.kpi1 > '4.8' && youthPRViolinJulContents.kpi1 < '6')?'yellow-7':(youthPRViolinJulContents.kpi1 >= '6' && youthPRViolinJulContents.kpi1 < '7.2')?'green':(youthPRViolinJulContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJulContents.kpi2 == null)?'grey-2':(youthPRViolinJulContents.kpi2 >= '0' && youthPRViolinJulContents.kpi2 <= '5.6')?'red':(youthPRViolinJulContents.kpi2 > '5.6' && youthPRViolinJulContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinJulContents.kpi2 > '7.466666667' && youthPRViolinJulContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinJulContents.kpi2 >= '9.333333333' && youthPRViolinJulContents.kpi2 < '11.2')?'green':(youthPRViolinJulContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJulContents.kpi3 == null)?'grey-2':(youthPRViolinJulContents.kpi3 >= '0' && youthPRViolinJulContents.kpi3 <= '2.4')?'red':(youthPRViolinJulContents.kpi3 > '2.4' && youthPRViolinJulContents.kpi3 <= '3.2')?'orange':(youthPRViolinJulContents.kpi3 > '3.2' && youthPRViolinJulContents.kpi3 < '4')?'yellow-7':(youthPRViolinJulContents.kpi3 >= '4' && youthPRViolinJulContents.kpi3 < '4.8')?'green':(youthPRViolinJulContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJulContents.kpi4 == null)?'grey-2':(youthPRViolinJulContents.kpi4 >= '0' && youthPRViolinJulContents.kpi4 <= '4.6')?'red':(youthPRViolinJulContents.kpi4 > '4.6' && youthPRViolinJulContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinJulContents.kpi4 > '6.133333333' && youthPRViolinJulContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinJulContents.kpi4 >= '7.666666667' && youthPRViolinJulContents.kpi4 < '9.2')?'green':(youthPRViolinJulContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJulContents.kpi5 == null)?'grey-2':(youthPRViolinJulContents.kpi5 >= '0' && youthPRViolinJulContents.kpi5 <= '1.6')?'red':(youthPRViolinJulContents.kpi5 > '1.6' && youthPRViolinJulContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinJulContents.kpi5 > '2.133333333' && youthPRViolinJulContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinJulContents.kpi5 >= '2.666666667' && youthPRViolinJulContents.kpi5 < '3.2')?'green':(youthPRViolinJulContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi5}}
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
                              :color="(youthPRViolinAugContents.kpi1 == null)?'grey-2':(youthPRViolinAugContents.kpi1 >= '0' && youthPRViolinAugContents.kpi1 <= '3.6')?'red':(youthPRViolinAugContents.kpi1 > '3.6' && youthPRViolinAugContents.kpi1 <= '4.8')?'orange':(youthPRViolinAugContents.kpi1 > '4.8' && youthPRViolinAugContents.kpi1 < '6')?'yellow-7':(youthPRViolinAugContents.kpi1 >= '6' && youthPRViolinAugContents.kpi1 < '7.2')?'green':(youthPRViolinAugContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAugContents.kpi2 == null)?'grey-2':(youthPRViolinAugContents.kpi2 >= '0' && youthPRViolinAugContents.kpi2 <= '5.6')?'red':(youthPRViolinAugContents.kpi2 > '5.6' && youthPRViolinAugContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinAugContents.kpi2 > '7.466666667' && youthPRViolinAugContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinAugContents.kpi2 >= '9.333333333' && youthPRViolinAugContents.kpi2 < '11.2')?'green':(youthPRViolinAugContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAugContents.kpi3 == null)?'grey-2':(youthPRViolinAugContents.kpi3 >= '0' && youthPRViolinAugContents.kpi3 <= '2.4')?'red':(youthPRViolinAugContents.kpi3 > '2.4' && youthPRViolinAugContents.kpi3 <= '3.2')?'orange':(youthPRViolinAugContents.kpi3 > '3.2' && youthPRViolinAugContents.kpi3 < '4')?'yellow-7':(youthPRViolinAugContents.kpi3 >= '4' && youthPRViolinAugContents.kpi3 < '4.8')?'green':(youthPRViolinAugContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAugContents.kpi4 == null)?'grey-2':(youthPRViolinAugContents.kpi4 >= '0' && youthPRViolinAugContents.kpi4 <= '4.6')?'red':(youthPRViolinAugContents.kpi4 > '4.6' && youthPRViolinAugContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinAugContents.kpi4 > '6.133333333' && youthPRViolinAugContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinAugContents.kpi4 >= '7.666666667' && youthPRViolinAugContents.kpi4 < '9.2')?'green':(youthPRViolinAugContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAugContents.kpi5 == null)?'grey-2':(youthPRViolinAugContents.kpi5 >= '0' && youthPRViolinAugContents.kpi5 <= '1.6')?'red':(youthPRViolinAugContents.kpi5 > '1.6' && youthPRViolinAugContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinAugContents.kpi5 > '2.133333333' && youthPRViolinAugContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinAugContents.kpi5 >= '2.666666667' && youthPRViolinAugContents.kpi5 < '3.2')?'green':(youthPRViolinAugContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi5}}
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
                              :color="(youthPRViolinSepContents.kpi1 == null)?'grey-2':(youthPRViolinSepContents.kpi1 >= '0' && youthPRViolinSepContents.kpi1 <= '3.6')?'red':(youthPRViolinSepContents.kpi1 > '3.6' && youthPRViolinSepContents.kpi1 <= '4.8')?'orange':(youthPRViolinSepContents.kpi1 > '4.8' && youthPRViolinSepContents.kpi1 < '6')?'yellow-7':(youthPRViolinSepContents.kpi1 >= '6' && youthPRViolinSepContents.kpi1 < '7.2')?'green':(youthPRViolinSepContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinSepContents.kpi2 == null)?'grey-2':(youthPRViolinSepContents.kpi2 >= '0' && youthPRViolinSepContents.kpi2 <= '5.6')?'red':(youthPRViolinSepContents.kpi2 > '5.6' && youthPRViolinSepContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinSepContents.kpi2 > '7.466666667' && youthPRViolinSepContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinSepContents.kpi2 >= '9.333333333' && youthPRViolinSepContents.kpi2 < '11.2')?'green':(youthPRViolinSepContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinSepContents.kpi3 == null)?'grey-2':(youthPRViolinSepContents.kpi3 >= '0' && youthPRViolinSepContents.kpi3 <= '2.4')?'red':(youthPRViolinSepContents.kpi3 > '2.4' && youthPRViolinSepContents.kpi3 <= '3.2')?'orange':(youthPRViolinSepContents.kpi3 > '3.2' && youthPRViolinSepContents.kpi3 < '4')?'yellow-7':(youthPRViolinSepContents.kpi3 >= '4' && youthPRViolinSepContents.kpi3 < '4.8')?'green':(youthPRViolinSepContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinSepContents.kpi4 == null)?'grey-2':(youthPRViolinSepContents.kpi4 >= '0' && youthPRViolinSepContents.kpi4 <= '4.6')?'red':(youthPRViolinSepContents.kpi4 > '4.6' && youthPRViolinSepContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinSepContents.kpi4 > '6.133333333' && youthPRViolinSepContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinSepContents.kpi4 >= '7.666666667' && youthPRViolinSepContents.kpi4 < '9.2')?'green':(youthPRViolinSepContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinSepContents.kpi5 == null)?'grey-2':(youthPRViolinSepContents.kpi5 >= '0' && youthPRViolinSepContents.kpi5 <= '1.6')?'red':(youthPRViolinSepContents.kpi5 > '1.6' && youthPRViolinSepContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinSepContents.kpi5 > '2.133333333' && youthPRViolinSepContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinSepContents.kpi5 >= '2.666666667' && youthPRViolinSepContents.kpi5 < '3.2')?'green':(youthPRViolinSepContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi5}}
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
                              :color="(youthPRViolinOctContents.kpi1 == null)?'grey-2':(youthPRViolinOctContents.kpi1 >= '0' && youthPRViolinOctContents.kpi1 <= '3.6')?'red':(youthPRViolinOctContents.kpi1 > '3.6' && youthPRViolinOctContents.kpi1 <= '4.8')?'orange':(youthPRViolinOctContents.kpi1 > '4.8' && youthPRViolinOctContents.kpi1 < '6')?'yellow-7':(youthPRViolinOctContents.kpi1 >= '6' && youthPRViolinOctContents.kpi1 < '7.2')?'green':(youthPRViolinOctContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinOctContents.kpi2 == null)?'grey-2':(youthPRViolinOctContents.kpi2 >= '0' && youthPRViolinOctContents.kpi2 <= '5.6')?'red':(youthPRViolinOctContents.kpi2 > '5.6' && youthPRViolinOctContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinOctContents.kpi2 > '7.466666667' && youthPRViolinOctContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinOctContents.kpi2 >= '9.333333333' && youthPRViolinOctContents.kpi2 < '11.2')?'green':(youthPRViolinOctContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinOctContents.kpi3 == null)?'grey-2':(youthPRViolinOctContents.kpi3 >= '0' && youthPRViolinOctContents.kpi3 <= '2.4')?'red':(youthPRViolinOctContents.kpi3 > '2.4' && youthPRViolinOctContents.kpi3 <= '3.2')?'orange':(youthPRViolinOctContents.kpi3 > '3.2' && youthPRViolinOctContents.kpi3 < '4')?'yellow-7':(youthPRViolinOctContents.kpi3 >= '4' && youthPRViolinOctContents.kpi3 < '4.8')?'green':(youthPRViolinOctContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinOctContents.kpi4 == null)?'grey-2':(youthPRViolinOctContents.kpi4 >= '0' && youthPRViolinOctContents.kpi4 <= '4.6')?'red':(youthPRViolinOctContents.kpi4 > '4.6' && youthPRViolinOctContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinOctContents.kpi4 > '6.133333333' && youthPRViolinOctContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinOctContents.kpi4 >= '7.666666667' && youthPRViolinOctContents.kpi4 < '9.2')?'green':(youthPRViolinOctContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinOctContents.kpi5 == null)?'grey-2':(youthPRViolinOctContents.kpi5 >= '0' && youthPRViolinOctContents.kpi5 <= '1.6')?'red':(youthPRViolinOctContents.kpi5 > '1.6' && youthPRViolinOctContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinOctContents.kpi5 > '2.133333333' && youthPRViolinOctContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinOctContents.kpi5 >= '2.666666667' && youthPRViolinOctContents.kpi5 < '3.2')?'green':(youthPRViolinOctContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi5}}
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
                              :color="(youthPRViolinNovContents.kpi1 == null)?'grey-2':(youthPRViolinNovContents.kpi1 >= '0' && youthPRViolinNovContents.kpi1 <= '3.6')?'red':(youthPRViolinNovContents.kpi1 > '3.6' && youthPRViolinNovContents.kpi1 <= '4.8')?'orange':(youthPRViolinNovContents.kpi1 > '4.8' && youthPRViolinNovContents.kpi1 < '6')?'yellow-7':(youthPRViolinNovContents.kpi1 >= '6' && youthPRViolinNovContents.kpi1 < '7.2')?'green':(youthPRViolinNovContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinNovContents.kpi2 == null)?'grey-2':(youthPRViolinNovContents.kpi2 >= '0' && youthPRViolinNovContents.kpi2 <= '5.6')?'red':(youthPRViolinNovContents.kpi2 > '5.6' && youthPRViolinNovContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinNovContents.kpi2 > '7.466666667' && youthPRViolinNovContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinNovContents.kpi2 >= '9.333333333' && youthPRViolinNovContents.kpi2 < '11.2')?'green':(youthPRViolinNovContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinNovContents.kpi3 == null)?'grey-2':(youthPRViolinNovContents.kpi3 >= '0' && youthPRViolinNovContents.kpi3 <= '2.4')?'red':(youthPRViolinNovContents.kpi3 > '2.4' && youthPRViolinNovContents.kpi3 <= '3.2')?'orange':(youthPRViolinNovContents.kpi3 > '3.2' && youthPRViolinNovContents.kpi3 < '4')?'yellow-7':(youthPRViolinNovContents.kpi3 >= '4' && youthPRViolinNovContents.kpi3 < '4.8')?'green':(youthPRViolinNovContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinNovContents.kpi4 == null)?'grey-2':(youthPRViolinNovContents.kpi4 >= '0' && youthPRViolinNovContents.kpi4 <= '4.6')?'red':(youthPRViolinNovContents.kpi4 > '4.6' && youthPRViolinNovContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinNovContents.kpi4 > '6.133333333' && youthPRViolinNovContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinNovContents.kpi4 >= '7.666666667' && youthPRViolinNovContents.kpi4 < '9.2')?'green':(youthPRViolinNovContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinNovContents.kpi5 == null)?'grey-2':(youthPRViolinNovContents.kpi5 >= '0' && youthPRViolinNovContents.kpi5 <= '1.6')?'red':(youthPRViolinNovContents.kpi5 > '1.6' && youthPRViolinNovContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinNovContents.kpi5 > '2.133333333' && youthPRViolinNovContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinNovContents.kpi5 >= '2.666666667' && youthPRViolinNovContents.kpi5 < '3.2')?'green':(youthPRViolinNovContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi5}}
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
                              :color="(youthPRViolinDecContents.kpi1 == null)?'grey-2':(youthPRViolinDecContents.kpi1 >= '0' && youthPRViolinDecContents.kpi1 <= '3.6')?'red':(youthPRViolinDecContents.kpi1 > '3.6' && youthPRViolinDecContents.kpi1 <= '4.8')?'orange':(youthPRViolinDecContents.kpi1 > '4.8' && youthPRViolinDecContents.kpi1 < '6')?'yellow-7':(youthPRViolinDecContents.kpi1 >= '6' && youthPRViolinDecContents.kpi1 < '7.2')?'green':(youthPRViolinDecContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinDecContents.kpi2 == null)?'grey-2':(youthPRViolinDecContents.kpi2 >= '0' && youthPRViolinDecContents.kpi2 <= '5.6')?'red':(youthPRViolinDecContents.kpi2 > '5.6' && youthPRViolinDecContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinDecContents.kpi2 > '7.466666667' && youthPRViolinDecContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinDecContents.kpi2 >= '9.333333333' && youthPRViolinDecContents.kpi2 < '11.2')?'green':(youthPRViolinDecContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinDecContents.kpi3 == null)?'grey-2':(youthPRViolinDecContents.kpi3 >= '0' && youthPRViolinDecContents.kpi3 <= '2.4')?'red':(youthPRViolinDecContents.kpi3 > '2.4' && youthPRViolinDecContents.kpi3 <= '3.2')?'orange':(youthPRViolinDecContents.kpi3 > '3.2' && youthPRViolinDecContents.kpi3 < '4')?'yellow-7':(youthPRViolinDecContents.kpi3 >= '4' && youthPRViolinDecContents.kpi3 < '4.8')?'green':(youthPRViolinDecContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinDecContents.kpi4 == null)?'grey-2':(youthPRViolinDecContents.kpi4 >= '0' && youthPRViolinDecContents.kpi4 <= '4.6')?'red':(youthPRViolinDecContents.kpi4 > '4.6' && youthPRViolinDecContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinDecContents.kpi4 > '6.133333333' && youthPRViolinDecContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinDecContents.kpi4 >= '7.666666667' && youthPRViolinDecContents.kpi4 < '9.2')?'green':(youthPRViolinDecContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinDecContents.kpi5 == null)?'grey-2':(youthPRViolinDecContents.kpi5 >= '0' && youthPRViolinDecContents.kpi5 <= '1.6')?'red':(youthPRViolinDecContents.kpi5 > '1.6' && youthPRViolinDecContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinDecContents.kpi5 > '2.133333333' && youthPRViolinDecContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinDecContents.kpi5 >= '2.666666667' && youthPRViolinDecContents.kpi5 < '3.2')?'green':(youthPRViolinDecContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi5}}
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
                              :color="(youthPRViolinJanContents.kpi1 == null)?'grey-2':(youthPRViolinJanContents.kpi1 >= '0' && youthPRViolinJanContents.kpi1 <= '3.6')?'red':(youthPRViolinJanContents.kpi1 > '3.6' && youthPRViolinJanContents.kpi1 <= '4.8')?'orange':(youthPRViolinJanContents.kpi1 > '4.8' && youthPRViolinJanContents.kpi1 < '6')?'yellow-7':(youthPRViolinJanContents.kpi1 >= '6' && youthPRViolinJanContents.kpi1 < '7.2')?'green':(youthPRViolinJanContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJanContents.kpi2 == null)?'grey-2':(youthPRViolinJanContents.kpi2 >= '0' && youthPRViolinJanContents.kpi2 <= '5.6')?'red':(youthPRViolinJanContents.kpi2 > '5.6' && youthPRViolinJanContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinJanContents.kpi2 > '7.466666667' && youthPRViolinJanContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinJanContents.kpi2 >= '9.333333333' && youthPRViolinJanContents.kpi2 < '11.2')?'green':(youthPRViolinJanContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJanContents.kpi3 == null)?'grey-2':(youthPRViolinJanContents.kpi3 >= '0' && youthPRViolinJanContents.kpi3 <= '2.4')?'red':(youthPRViolinJanContents.kpi3 > '2.4' && youthPRViolinJanContents.kpi3 <= '3.2')?'orange':(youthPRViolinJanContents.kpi3 > '3.2' && youthPRViolinJanContents.kpi3 < '4')?'yellow-7':(youthPRViolinJanContents.kpi3 >= '4' && youthPRViolinJanContents.kpi3 < '4.8')?'green':(youthPRViolinJanContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJanContents.kpi4 == null)?'grey-2':(youthPRViolinJanContents.kpi4 >= '0' && youthPRViolinJanContents.kpi4 <= '4.6')?'red':(youthPRViolinJanContents.kpi4 > '4.6' && youthPRViolinJanContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinJanContents.kpi4 > '6.133333333' && youthPRViolinJanContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinJanContents.kpi4 >= '7.666666667' && youthPRViolinJanContents.kpi4 < '9.2')?'green':(youthPRViolinJanContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJanContents.kpi5 == null)?'grey-2':(youthPRViolinJanContents.kpi5 >= '0' && youthPRViolinJanContents.kpi5 <= '1.6')?'red':(youthPRViolinJanContents.kpi5 > '1.6' && youthPRViolinJanContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinJanContents.kpi5 > '2.133333333' && youthPRViolinJanContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinJanContents.kpi5 >= '2.666666667' && youthPRViolinJanContents.kpi5 < '3.2')?'green':(youthPRViolinJanContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi5}}
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
                              :color="(youthPRViolinFebContents.kpi1 == null)?'grey-2':(youthPRViolinFebContents.kpi1 >= '0' && youthPRViolinFebContents.kpi1 <= '3.6')?'red':(youthPRViolinFebContents.kpi1 > '3.6' && youthPRViolinFebContents.kpi1 <= '4.8')?'orange':(youthPRViolinFebContents.kpi1 > '4.8' && youthPRViolinFebContents.kpi1 < '6')?'yellow-7':(youthPRViolinFebContents.kpi1 >= '6' && youthPRViolinFebContents.kpi1 < '7.2')?'green':(youthPRViolinFebContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinFebContents.kpi2 == null)?'grey-2':(youthPRViolinFebContents.kpi2 >= '0' && youthPRViolinFebContents.kpi2 <= '5.6')?'red':(youthPRViolinFebContents.kpi2 > '5.6' && youthPRViolinFebContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinFebContents.kpi2 > '7.466666667' && youthPRViolinFebContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinFebContents.kpi2 >= '9.333333333' && youthPRViolinFebContents.kpi2 < '11.2')?'green':(youthPRViolinFebContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinFebContents.kpi3 == null)?'grey-2':(youthPRViolinFebContents.kpi3 >= '0' && youthPRViolinFebContents.kpi3 <= '2.4')?'red':(youthPRViolinFebContents.kpi3 > '2.4' && youthPRViolinFebContents.kpi3 <= '3.2')?'orange':(youthPRViolinFebContents.kpi3 > '3.2' && youthPRViolinFebContents.kpi3 < '4')?'yellow-7':(youthPRViolinFebContents.kpi3 >= '4' && youthPRViolinFebContents.kpi3 < '4.8')?'green':(youthPRViolinFebContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinFebContents.kpi4 == null)?'grey-2':(youthPRViolinFebContents.kpi4 >= '0' && youthPRViolinFebContents.kpi4 <= '4.6')?'red':(youthPRViolinFebContents.kpi4 > '4.6' && youthPRViolinFebContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinFebContents.kpi4 > '6.133333333' && youthPRViolinFebContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinFebContents.kpi4 >= '7.666666667' && youthPRViolinFebContents.kpi4 < '9.2')?'green':(youthPRViolinFebContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinFebContents.kpi5 == null)?'grey-2':(youthPRViolinFebContents.kpi5 >= '0' && youthPRViolinFebContents.kpi5 <= '1.6')?'red':(youthPRViolinFebContents.kpi5 > '1.6' && youthPRViolinFebContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinFebContents.kpi5 > '2.133333333' && youthPRViolinFebContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinFebContents.kpi5 >= '2.666666667' && youthPRViolinFebContents.kpi5 < '3.2')?'green':(youthPRViolinFebContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi5}}
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
                              :color="(youthPRViolinMarContents.kpi1 == null)?'grey-2':(youthPRViolinMarContents.kpi1 >= '0' && youthPRViolinMarContents.kpi1 <= '3.6')?'red':(youthPRViolinMarContents.kpi1 > '3.6' && youthPRViolinMarContents.kpi1 <= '4.8')?'orange':(youthPRViolinMarContents.kpi1 > '4.8' && youthPRViolinMarContents.kpi1 < '6')?'yellow-7':(youthPRViolinMarContents.kpi1 >= '6' && youthPRViolinMarContents.kpi1 < '7.2')?'green':(youthPRViolinMarContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMarContents.kpi2 == null)?'grey-2':(youthPRViolinMarContents.kpi2 >= '0' && youthPRViolinMarContents.kpi2 <= '5.6')?'red':(youthPRViolinMarContents.kpi2 > '5.6' && youthPRViolinMarContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinMarContents.kpi2 > '7.466666667' && youthPRViolinMarContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinMarContents.kpi2 >= '9.333333333' && youthPRViolinMarContents.kpi2 < '11.2')?'green':(youthPRViolinMarContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMarContents.kpi3 == null)?'grey-2':(youthPRViolinMarContents.kpi3 >= '0' && youthPRViolinMarContents.kpi3 <= '2.4')?'red':(youthPRViolinMarContents.kpi3 > '2.4' && youthPRViolinMarContents.kpi3 <= '3.2')?'orange':(youthPRViolinMarContents.kpi3 > '3.2' && youthPRViolinMarContents.kpi3 < '4')?'yellow-7':(youthPRViolinMarContents.kpi3 >= '4' && youthPRViolinMarContents.kpi3 < '4.8')?'green':(youthPRViolinMarContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMarContents.kpi4 == null)?'grey-2':(youthPRViolinMarContents.kpi4 >= '0' && youthPRViolinMarContents.kpi4 <= '4.6')?'red':(youthPRViolinMarContents.kpi4 > '4.6' && youthPRViolinMarContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinMarContents.kpi4 > '6.133333333' && youthPRViolinMarContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinMarContents.kpi4 >= '7.666666667' && youthPRViolinMarContents.kpi4 < '9.2')?'green':(youthPRViolinMarContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMarContents.kpi5 == null)?'grey-2':(youthPRViolinMarContents.kpi5 >= '0' && youthPRViolinMarContents.kpi5 <= '1.6')?'red':(youthPRViolinMarContents.kpi5 > '1.6' && youthPRViolinMarContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinMarContents.kpi5 > '2.133333333' && youthPRViolinMarContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinMarContents.kpi5 >= '2.666666667' && youthPRViolinMarContents.kpi5 < '3.2')?'green':(youthPRViolinMarContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi5}}
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
                              :color="(youthPRViolinAprContents.kpi1 == null)?'grey-2':(youthPRViolinAprContents.kpi1 >= '0' && youthPRViolinAprContents.kpi1 <= '3.6')?'red':(youthPRViolinAprContents.kpi1 > '3.6' && youthPRViolinAprContents.kpi1 <= '4.8')?'orange':(youthPRViolinAprContents.kpi1 > '4.8' && youthPRViolinAprContents.kpi1 < '6')?'yellow-7':(youthPRViolinAprContents.kpi1 >= '6' && youthPRViolinAprContents.kpi1 < '7.2')?'green':(youthPRViolinAprContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAprContents.kpi2 == null)?'grey-2':(youthPRViolinAprContents.kpi2 >= '0' && youthPRViolinAprContents.kpi2 <= '5.6')?'red':(youthPRViolinAprContents.kpi2 > '5.6' && youthPRViolinAprContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinAprContents.kpi2 > '7.466666667' && youthPRViolinAprContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinAprContents.kpi2 >= '9.333333333' && youthPRViolinAprContents.kpi2 < '11.2')?'green':(youthPRViolinAprContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAprContents.kpi3 == null)?'grey-2':(youthPRViolinAprContents.kpi3 >= '0' && youthPRViolinAprContents.kpi3 <= '2.4')?'red':(youthPRViolinAprContents.kpi3 > '2.4' && youthPRViolinAprContents.kpi3 <= '3.2')?'orange':(youthPRViolinAprContents.kpi3 > '3.2' && youthPRViolinAprContents.kpi3 < '4')?'yellow-7':(youthPRViolinAprContents.kpi3 >= '4' && youthPRViolinAprContents.kpi3 < '4.8')?'green':(youthPRViolinAprContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAprContents.kpi4 == null)?'grey-2':(youthPRViolinAprContents.kpi4 >= '0' && youthPRViolinAprContents.kpi4 <= '4.6')?'red':(youthPRViolinAprContents.kpi4 > '4.6' && youthPRViolinAprContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinAprContents.kpi4 > '6.133333333' && youthPRViolinAprContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinAprContents.kpi4 >= '7.666666667' && youthPRViolinAprContents.kpi4 < '9.2')?'green':(youthPRViolinAprContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAprContents.kpi5 == null)?'grey-2':(youthPRViolinAprContents.kpi5 >= '0' && youthPRViolinAprContents.kpi5 <= '1.6')?'red':(youthPRViolinAprContents.kpi5 > '1.6' && youthPRViolinAprContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinAprContents.kpi5 > '2.133333333' && youthPRViolinAprContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinAprContents.kpi5 >= '2.666666667' && youthPRViolinAprContents.kpi5 < '3.2')?'green':(youthPRViolinAprContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi5}}
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
                              :color="(youthPRViolinMayContents.kpi1 == null)?'grey-2':(youthPRViolinMayContents.kpi1 >= '0' && youthPRViolinMayContents.kpi1 <= '3.6')?'red':(youthPRViolinMayContents.kpi1 > '3.6' && youthPRViolinMayContents.kpi1 <= '4.8')?'orange':(youthPRViolinMayContents.kpi1 > '4.8' && youthPRViolinMayContents.kpi1 < '6')?'yellow-7':(youthPRViolinMayContents.kpi1 >= '6' && youthPRViolinMayContents.kpi1 < '7.2')?'green':(youthPRViolinMayContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMayContents.kpi2 == null)?'grey-2':(youthPRViolinMayContents.kpi2 >= '0' && youthPRViolinMayContents.kpi2 <= '5.6')?'red':(youthPRViolinMayContents.kpi2 > '5.6' && youthPRViolinMayContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinMayContents.kpi2 > '7.466666667' && youthPRViolinMayContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinMayContents.kpi2 >= '9.333333333' && youthPRViolinMayContents.kpi2 < '11.2')?'green':(youthPRViolinMayContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMayContents.kpi3 == null)?'grey-2':(youthPRViolinMayContents.kpi3 >= '0' && youthPRViolinMayContents.kpi3 <= '2.4')?'red':(youthPRViolinMayContents.kpi3 > '2.4' && youthPRViolinMayContents.kpi3 <= '3.2')?'orange':(youthPRViolinMayContents.kpi3 > '3.2' && youthPRViolinMayContents.kpi3 < '4')?'yellow-7':(youthPRViolinMayContents.kpi3 >= '4' && youthPRViolinMayContents.kpi3 < '4.8')?'green':(youthPRViolinMayContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMayContents.kpi4 == null)?'grey-2':(youthPRViolinMayContents.kpi4 >= '0' && youthPRViolinMayContents.kpi4 <= '4.6')?'red':(youthPRViolinMayContents.kpi4 > '4.6' && youthPRViolinMayContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinMayContents.kpi4 > '6.133333333' && youthPRViolinMayContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinMayContents.kpi4 >= '7.666666667' && youthPRViolinMayContents.kpi4 < '9.2')?'green':(youthPRViolinMayContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMayContents.kpi5 == null)?'grey-2':(youthPRViolinMayContents.kpi5 >= '0' && youthPRViolinMayContents.kpi5 <= '1.6')?'red':(youthPRViolinMayContents.kpi5 > '1.6' && youthPRViolinMayContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinMayContents.kpi5 > '2.133333333' && youthPRViolinMayContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinMayContents.kpi5 >= '2.666666667' && youthPRViolinMayContents.kpi5 < '3.2')?'green':(youthPRViolinMayContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi5}}
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
                              :color="(youthPRViolinJunContents.kpi1 == null)?'grey-2':(youthPRViolinJunContents.kpi1 >= '0' && youthPRViolinJunContents.kpi1 <= '3.6')?'red':(youthPRViolinJunContents.kpi1 > '3.6' && youthPRViolinJunContents.kpi1 <= '4.8')?'orange':(youthPRViolinJunContents.kpi1 > '4.8' && youthPRViolinJunContents.kpi1 < '6')?'yellow-7':(youthPRViolinJunContents.kpi1 >= '6' && youthPRViolinJunContents.kpi1 < '7.2')?'green':(youthPRViolinJunContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJunContents.kpi2 == null)?'grey-2':(youthPRViolinJunContents.kpi2 >= '0' && youthPRViolinJunContents.kpi2 <= '5.6')?'red':(youthPRViolinJunContents.kpi2 > '5.6' && youthPRViolinJunContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinJunContents.kpi2 > '7.466666667' && youthPRViolinJunContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinJunContents.kpi2 >= '9.333333333' && youthPRViolinJunContents.kpi2 < '11.2')?'green':(youthPRViolinJunContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJunContents.kpi3 == null)?'grey-2':(youthPRViolinJunContents.kpi3 >= '0' && youthPRViolinJunContents.kpi3 <= '2.4')?'red':(youthPRViolinJunContents.kpi3 > '2.4' && youthPRViolinJunContents.kpi3 <= '3.2')?'orange':(youthPRViolinJunContents.kpi3 > '3.2' && youthPRViolinJunContents.kpi3 < '4')?'yellow-7':(youthPRViolinJunContents.kpi3 >= '4' && youthPRViolinJunContents.kpi3 < '4.8')?'green':(youthPRViolinJunContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJunContents.kpi4 == null)?'grey-2':(youthPRViolinJunContents.kpi4 >= '0' && youthPRViolinJunContents.kpi4 <= '4.6')?'red':(youthPRViolinJunContents.kpi4 > '4.6' && youthPRViolinJunContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinJunContents.kpi4 > '6.133333333' && youthPRViolinJunContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinJunContents.kpi4 >= '7.666666667' && youthPRViolinJunContents.kpi4 < '9.2')?'green':(youthPRViolinJunContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJunContents.kpi5 == null)?'grey-2':(youthPRViolinJunContents.kpi5 >= '0' && youthPRViolinJunContents.kpi5 <= '1.6')?'red':(youthPRViolinJunContents.kpi5 > '1.6' && youthPRViolinJunContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinJunContents.kpi5 > '2.133333333' && youthPRViolinJunContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinJunContents.kpi5 >= '2.666666667' && youthPRViolinJunContents.kpi5 < '3.2')?'green':(youthPRViolinJunContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi5}}
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
                              :color="(youthPRViolinJulContents.kpi1 == null)?'grey-2':(youthPRViolinJulContents.kpi1 >= '0' && youthPRViolinJulContents.kpi1 <= '3.6')?'red':(youthPRViolinJulContents.kpi1 > '3.6' && youthPRViolinJulContents.kpi1 <= '4.8')?'orange':(youthPRViolinJulContents.kpi1 > '4.8' && youthPRViolinJulContents.kpi1 < '6')?'yellow-7':(youthPRViolinJulContents.kpi1 >= '6' && youthPRViolinJulContents.kpi1 < '7.2')?'green':(youthPRViolinJulContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJulContents.kpi2 == null)?'grey-2':(youthPRViolinJulContents.kpi2 >= '0' && youthPRViolinJulContents.kpi2 <= '5.6')?'red':(youthPRViolinJulContents.kpi2 > '5.6' && youthPRViolinJulContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinJulContents.kpi2 > '7.466666667' && youthPRViolinJulContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinJulContents.kpi2 >= '9.333333333' && youthPRViolinJulContents.kpi2 < '11.2')?'green':(youthPRViolinJulContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJulContents.kpi3 == null)?'grey-2':(youthPRViolinJulContents.kpi3 >= '0' && youthPRViolinJulContents.kpi3 <= '2.4')?'red':(youthPRViolinJulContents.kpi3 > '2.4' && youthPRViolinJulContents.kpi3 <= '3.2')?'orange':(youthPRViolinJulContents.kpi3 > '3.2' && youthPRViolinJulContents.kpi3 < '4')?'yellow-7':(youthPRViolinJulContents.kpi3 >= '4' && youthPRViolinJulContents.kpi3 < '4.8')?'green':(youthPRViolinJulContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJulContents.kpi4 == null)?'grey-2':(youthPRViolinJulContents.kpi4 >= '0' && youthPRViolinJulContents.kpi4 <= '4.6')?'red':(youthPRViolinJulContents.kpi4 > '4.6' && youthPRViolinJulContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinJulContents.kpi4 > '6.133333333' && youthPRViolinJulContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinJulContents.kpi4 >= '7.666666667' && youthPRViolinJulContents.kpi4 < '9.2')?'green':(youthPRViolinJulContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJulContents.kpi5 == null)?'grey-2':(youthPRViolinJulContents.kpi5 >= '0' && youthPRViolinJulContents.kpi5 <= '1.6')?'red':(youthPRViolinJulContents.kpi5 > '1.6' && youthPRViolinJulContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinJulContents.kpi5 > '2.133333333' && youthPRViolinJulContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinJulContents.kpi5 >= '2.666666667' && youthPRViolinJulContents.kpi5 < '3.2')?'green':(youthPRViolinJulContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi5}}
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
                              :color="(youthPRViolinAugContents.kpi1 == null)?'grey-2':(youthPRViolinAugContents.kpi1 >= '0' && youthPRViolinAugContents.kpi1 <= '3.6')?'red':(youthPRViolinAugContents.kpi1 > '3.6' && youthPRViolinAugContents.kpi1 <= '4.8')?'orange':(youthPRViolinAugContents.kpi1 > '4.8' && youthPRViolinAugContents.kpi1 < '6')?'yellow-7':(youthPRViolinAugContents.kpi1 >= '6' && youthPRViolinAugContents.kpi1 < '7.2')?'green':(youthPRViolinAugContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAugContents.kpi2 == null)?'grey-2':(youthPRViolinAugContents.kpi2 >= '0' && youthPRViolinAugContents.kpi2 <= '5.6')?'red':(youthPRViolinAugContents.kpi2 > '5.6' && youthPRViolinAugContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinAugContents.kpi2 > '7.466666667' && youthPRViolinAugContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinAugContents.kpi2 >= '9.333333333' && youthPRViolinAugContents.kpi2 < '11.2')?'green':(youthPRViolinAugContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAugContents.kpi3 == null)?'grey-2':(youthPRViolinAugContents.kpi3 >= '0' && youthPRViolinAugContents.kpi3 <= '2.4')?'red':(youthPRViolinAugContents.kpi3 > '2.4' && youthPRViolinAugContents.kpi3 <= '3.2')?'orange':(youthPRViolinAugContents.kpi3 > '3.2' && youthPRViolinAugContents.kpi3 < '4')?'yellow-7':(youthPRViolinAugContents.kpi3 >= '4' && youthPRViolinAugContents.kpi3 < '4.8')?'green':(youthPRViolinAugContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAugContents.kpi4 == null)?'grey-2':(youthPRViolinAugContents.kpi4 >= '0' && youthPRViolinAugContents.kpi4 <= '4.6')?'red':(youthPRViolinAugContents.kpi4 > '4.6' && youthPRViolinAugContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinAugContents.kpi4 > '6.133333333' && youthPRViolinAugContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinAugContents.kpi4 >= '7.666666667' && youthPRViolinAugContents.kpi4 < '9.2')?'green':(youthPRViolinAugContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAugContents.kpi5 == null)?'grey-2':(youthPRViolinAugContents.kpi5 >= '0' && youthPRViolinAugContents.kpi5 <= '1.6')?'red':(youthPRViolinAugContents.kpi5 > '1.6' && youthPRViolinAugContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinAugContents.kpi5 > '2.133333333' && youthPRViolinAugContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinAugContents.kpi5 >= '2.666666667' && youthPRViolinAugContents.kpi5 < '3.2')?'green':(youthPRViolinAugContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi5}}
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
                              :color="(youthPRViolinSepContents.kpi1 == null)?'grey-2':(youthPRViolinSepContents.kpi1 >= '0' && youthPRViolinSepContents.kpi1 <= '3.6')?'red':(youthPRViolinSepContents.kpi1 > '3.6' && youthPRViolinSepContents.kpi1 <= '4.8')?'orange':(youthPRViolinSepContents.kpi1 > '4.8' && youthPRViolinSepContents.kpi1 < '6')?'yellow-7':(youthPRViolinSepContents.kpi1 >= '6' && youthPRViolinSepContents.kpi1 < '7.2')?'green':(youthPRViolinSepContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinSepContents.kpi2 == null)?'grey-2':(youthPRViolinSepContents.kpi2 >= '0' && youthPRViolinSepContents.kpi2 <= '5.6')?'red':(youthPRViolinSepContents.kpi2 > '5.6' && youthPRViolinSepContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinSepContents.kpi2 > '7.466666667' && youthPRViolinSepContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinSepContents.kpi2 >= '9.333333333' && youthPRViolinSepContents.kpi2 < '11.2')?'green':(youthPRViolinSepContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinSepContents.kpi3 == null)?'grey-2':(youthPRViolinSepContents.kpi3 >= '0' && youthPRViolinSepContents.kpi3 <= '2.4')?'red':(youthPRViolinSepContents.kpi3 > '2.4' && youthPRViolinSepContents.kpi3 <= '3.2')?'orange':(youthPRViolinSepContents.kpi3 > '3.2' && youthPRViolinSepContents.kpi3 < '4')?'yellow-7':(youthPRViolinSepContents.kpi3 >= '4' && youthPRViolinSepContents.kpi3 < '4.8')?'green':(youthPRViolinSepContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinSepContents.kpi4 == null)?'grey-2':(youthPRViolinSepContents.kpi4 >= '0' && youthPRViolinSepContents.kpi4 <= '4.6')?'red':(youthPRViolinSepContents.kpi4 > '4.6' && youthPRViolinSepContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinSepContents.kpi4 > '6.133333333' && youthPRViolinSepContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinSepContents.kpi4 >= '7.666666667' && youthPRViolinSepContents.kpi4 < '9.2')?'green':(youthPRViolinSepContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinSepContents.kpi5 == null)?'grey-2':(youthPRViolinSepContents.kpi5 >= '0' && youthPRViolinSepContents.kpi5 <= '1.6')?'red':(youthPRViolinSepContents.kpi5 > '1.6' && youthPRViolinSepContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinSepContents.kpi5 > '2.133333333' && youthPRViolinSepContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinSepContents.kpi5 >= '2.666666667' && youthPRViolinSepContents.kpi5 < '3.2')?'green':(youthPRViolinSepContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi5}}
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
                              :color="(youthPRViolinOctContents.kpi1 == null)?'grey-2':(youthPRViolinOctContents.kpi1 >= '0' && youthPRViolinOctContents.kpi1 <= '3.6')?'red':(youthPRViolinOctContents.kpi1 > '3.6' && youthPRViolinOctContents.kpi1 <= '4.8')?'orange':(youthPRViolinOctContents.kpi1 > '4.8' && youthPRViolinOctContents.kpi1 < '6')?'yellow-7':(youthPRViolinOctContents.kpi1 >= '6' && youthPRViolinOctContents.kpi1 < '7.2')?'green':(youthPRViolinOctContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinOctContents.kpi2 == null)?'grey-2':(youthPRViolinOctContents.kpi2 >= '0' && youthPRViolinOctContents.kpi2 <= '5.6')?'red':(youthPRViolinOctContents.kpi2 > '5.6' && youthPRViolinOctContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinOctContents.kpi2 > '7.466666667' && youthPRViolinOctContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinOctContents.kpi2 >= '9.333333333' && youthPRViolinOctContents.kpi2 < '11.2')?'green':(youthPRViolinOctContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinOctContents.kpi3 == null)?'grey-2':(youthPRViolinOctContents.kpi3 >= '0' && youthPRViolinOctContents.kpi3 <= '2.4')?'red':(youthPRViolinOctContents.kpi3 > '2.4' && youthPRViolinOctContents.kpi3 <= '3.2')?'orange':(youthPRViolinOctContents.kpi3 > '3.2' && youthPRViolinOctContents.kpi3 < '4')?'yellow-7':(youthPRViolinOctContents.kpi3 >= '4' && youthPRViolinOctContents.kpi3 < '4.8')?'green':(youthPRViolinOctContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinOctContents.kpi4 == null)?'grey-2':(youthPRViolinOctContents.kpi4 >= '0' && youthPRViolinOctContents.kpi4 <= '4.6')?'red':(youthPRViolinOctContents.kpi4 > '4.6' && youthPRViolinOctContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinOctContents.kpi4 > '6.133333333' && youthPRViolinOctContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinOctContents.kpi4 >= '7.666666667' && youthPRViolinOctContents.kpi4 < '9.2')?'green':(youthPRViolinOctContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinOctContents.kpi5 == null)?'grey-2':(youthPRViolinOctContents.kpi5 >= '0' && youthPRViolinOctContents.kpi5 <= '1.6')?'red':(youthPRViolinOctContents.kpi5 > '1.6' && youthPRViolinOctContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinOctContents.kpi5 > '2.133333333' && youthPRViolinOctContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinOctContents.kpi5 >= '2.666666667' && youthPRViolinOctContents.kpi5 < '3.2')?'green':(youthPRViolinOctContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi5}}
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
                              :color="(youthPRViolinNovContents.kpi1 == null)?'grey-2':(youthPRViolinNovContents.kpi1 >= '0' && youthPRViolinNovContents.kpi1 <= '3.6')?'red':(youthPRViolinNovContents.kpi1 > '3.6' && youthPRViolinNovContents.kpi1 <= '4.8')?'orange':(youthPRViolinNovContents.kpi1 > '4.8' && youthPRViolinNovContents.kpi1 < '6')?'yellow-7':(youthPRViolinNovContents.kpi1 >= '6' && youthPRViolinNovContents.kpi1 < '7.2')?'green':(youthPRViolinNovContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinNovContents.kpi2 == null)?'grey-2':(youthPRViolinNovContents.kpi2 >= '0' && youthPRViolinNovContents.kpi2 <= '5.6')?'red':(youthPRViolinNovContents.kpi2 > '5.6' && youthPRViolinNovContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinNovContents.kpi2 > '7.466666667' && youthPRViolinNovContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinNovContents.kpi2 >= '9.333333333' && youthPRViolinNovContents.kpi2 < '11.2')?'green':(youthPRViolinNovContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinNovContents.kpi3 == null)?'grey-2':(youthPRViolinNovContents.kpi3 >= '0' && youthPRViolinNovContents.kpi3 <= '2.4')?'red':(youthPRViolinNovContents.kpi3 > '2.4' && youthPRViolinNovContents.kpi3 <= '3.2')?'orange':(youthPRViolinNovContents.kpi3 > '3.2' && youthPRViolinNovContents.kpi3 < '4')?'yellow-7':(youthPRViolinNovContents.kpi3 >= '4' && youthPRViolinNovContents.kpi3 < '4.8')?'green':(youthPRViolinNovContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinNovContents.kpi4 == null)?'grey-2':(youthPRViolinNovContents.kpi4 >= '0' && youthPRViolinNovContents.kpi4 <= '4.6')?'red':(youthPRViolinNovContents.kpi4 > '4.6' && youthPRViolinNovContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinNovContents.kpi4 > '6.133333333' && youthPRViolinNovContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinNovContents.kpi4 >= '7.666666667' && youthPRViolinNovContents.kpi4 < '9.2')?'green':(youthPRViolinNovContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinNovContents.kpi5 == null)?'grey-2':(youthPRViolinNovContents.kpi5 >= '0' && youthPRViolinNovContents.kpi5 <= '1.6')?'red':(youthPRViolinNovContents.kpi5 > '1.6' && youthPRViolinNovContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinNovContents.kpi5 > '2.133333333' && youthPRViolinNovContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinNovContents.kpi5 >= '2.666666667' && youthPRViolinNovContents.kpi5 < '3.2')?'green':(youthPRViolinNovContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi5}}
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
                              :color="(youthPRViolinDecContents.kpi1 == null)?'grey-2':(youthPRViolinDecContents.kpi1 >= '0' && youthPRViolinDecContents.kpi1 <= '3.6')?'red':(youthPRViolinDecContents.kpi1 > '3.6' && youthPRViolinDecContents.kpi1 <= '4.8')?'orange':(youthPRViolinDecContents.kpi1 > '4.8' && youthPRViolinDecContents.kpi1 < '6')?'yellow-7':(youthPRViolinDecContents.kpi1 >= '6' && youthPRViolinDecContents.kpi1 < '7.2')?'green':(youthPRViolinDecContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinDecContents.kpi2 == null)?'grey-2':(youthPRViolinDecContents.kpi2 >= '0' && youthPRViolinDecContents.kpi2 <= '5.6')?'red':(youthPRViolinDecContents.kpi2 > '5.6' && youthPRViolinDecContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinDecContents.kpi2 > '7.466666667' && youthPRViolinDecContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinDecContents.kpi2 >= '9.333333333' && youthPRViolinDecContents.kpi2 < '11.2')?'green':(youthPRViolinDecContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinDecContents.kpi3 == null)?'grey-2':(youthPRViolinDecContents.kpi3 >= '0' && youthPRViolinDecContents.kpi3 <= '2.4')?'red':(youthPRViolinDecContents.kpi3 > '2.4' && youthPRViolinDecContents.kpi3 <= '3.2')?'orange':(youthPRViolinDecContents.kpi3 > '3.2' && youthPRViolinDecContents.kpi3 < '4')?'yellow-7':(youthPRViolinDecContents.kpi3 >= '4' && youthPRViolinDecContents.kpi3 < '4.8')?'green':(youthPRViolinDecContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinDecContents.kpi4 == null)?'grey-2':(youthPRViolinDecContents.kpi4 >= '0' && youthPRViolinDecContents.kpi4 <= '4.6')?'red':(youthPRViolinDecContents.kpi4 > '4.6' && youthPRViolinDecContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinDecContents.kpi4 > '6.133333333' && youthPRViolinDecContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinDecContents.kpi4 >= '7.666666667' && youthPRViolinDecContents.kpi4 < '9.2')?'green':(youthPRViolinDecContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinDecContents.kpi5 == null)?'grey-2':(youthPRViolinDecContents.kpi5 >= '0' && youthPRViolinDecContents.kpi5 <= '1.6')?'red':(youthPRViolinDecContents.kpi5 > '1.6' && youthPRViolinDecContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinDecContents.kpi5 > '2.133333333' && youthPRViolinDecContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinDecContents.kpi5 >= '2.666666667' && youthPRViolinDecContents.kpi5 < '3.2')?'green':(youthPRViolinDecContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi5}}
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
                              :color="(youthPRViolinJanContents.kpi1 == null)?'grey-2':(youthPRViolinJanContents.kpi1 >= '0' && youthPRViolinJanContents.kpi1 <= '3.6')?'red':(youthPRViolinJanContents.kpi1 > '3.6' && youthPRViolinJanContents.kpi1 <= '4.8')?'orange':(youthPRViolinJanContents.kpi1 > '4.8' && youthPRViolinJanContents.kpi1 < '6')?'yellow-7':(youthPRViolinJanContents.kpi1 >= '6' && youthPRViolinJanContents.kpi1 < '7.2')?'green':(youthPRViolinJanContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJanContents.kpi2 == null)?'grey-2':(youthPRViolinJanContents.kpi2 >= '0' && youthPRViolinJanContents.kpi2 <= '5.6')?'red':(youthPRViolinJanContents.kpi2 > '5.6' && youthPRViolinJanContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinJanContents.kpi2 > '7.466666667' && youthPRViolinJanContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinJanContents.kpi2 >= '9.333333333' && youthPRViolinJanContents.kpi2 < '11.2')?'green':(youthPRViolinJanContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJanContents.kpi3 == null)?'grey-2':(youthPRViolinJanContents.kpi3 >= '0' && youthPRViolinJanContents.kpi3 <= '2.4')?'red':(youthPRViolinJanContents.kpi3 > '2.4' && youthPRViolinJanContents.kpi3 <= '3.2')?'orange':(youthPRViolinJanContents.kpi3 > '3.2' && youthPRViolinJanContents.kpi3 < '4')?'yellow-7':(youthPRViolinJanContents.kpi3 >= '4' && youthPRViolinJanContents.kpi3 < '4.8')?'green':(youthPRViolinJanContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJanContents.kpi4 == null)?'grey-2':(youthPRViolinJanContents.kpi4 >= '0' && youthPRViolinJanContents.kpi4 <= '4.6')?'red':(youthPRViolinJanContents.kpi4 > '4.6' && youthPRViolinJanContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinJanContents.kpi4 > '6.133333333' && youthPRViolinJanContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinJanContents.kpi4 >= '7.666666667' && youthPRViolinJanContents.kpi4 < '9.2')?'green':(youthPRViolinJanContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJanContents.kpi5 == null)?'grey-2':(youthPRViolinJanContents.kpi5 >= '0' && youthPRViolinJanContents.kpi5 <= '1.6')?'red':(youthPRViolinJanContents.kpi5 > '1.6' && youthPRViolinJanContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinJanContents.kpi5 > '2.133333333' && youthPRViolinJanContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinJanContents.kpi5 >= '2.666666667' && youthPRViolinJanContents.kpi5 < '3.2')?'green':(youthPRViolinJanContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi5}}
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
                              :color="(youthPRViolinFebContents.kpi1 == null)?'grey-2':(youthPRViolinFebContents.kpi1 >= '0' && youthPRViolinFebContents.kpi1 <= '3.6')?'red':(youthPRViolinFebContents.kpi1 > '3.6' && youthPRViolinFebContents.kpi1 <= '4.8')?'orange':(youthPRViolinFebContents.kpi1 > '4.8' && youthPRViolinFebContents.kpi1 < '6')?'yellow-7':(youthPRViolinFebContents.kpi1 >= '6' && youthPRViolinFebContents.kpi1 < '7.2')?'green':(youthPRViolinFebContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinFebContents.kpi2 == null)?'grey-2':(youthPRViolinFebContents.kpi2 >= '0' && youthPRViolinFebContents.kpi2 <= '5.6')?'red':(youthPRViolinFebContents.kpi2 > '5.6' && youthPRViolinFebContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinFebContents.kpi2 > '7.466666667' && youthPRViolinFebContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinFebContents.kpi2 >= '9.333333333' && youthPRViolinFebContents.kpi2 < '11.2')?'green':(youthPRViolinFebContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinFebContents.kpi3 == null)?'grey-2':(youthPRViolinFebContents.kpi3 >= '0' && youthPRViolinFebContents.kpi3 <= '2.4')?'red':(youthPRViolinFebContents.kpi3 > '2.4' && youthPRViolinFebContents.kpi3 <= '3.2')?'orange':(youthPRViolinFebContents.kpi3 > '3.2' && youthPRViolinFebContents.kpi3 < '4')?'yellow-7':(youthPRViolinFebContents.kpi3 >= '4' && youthPRViolinFebContents.kpi3 < '4.8')?'green':(youthPRViolinFebContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinFebContents.kpi4 == null)?'grey-2':(youthPRViolinFebContents.kpi4 >= '0' && youthPRViolinFebContents.kpi4 <= '4.6')?'red':(youthPRViolinFebContents.kpi4 > '4.6' && youthPRViolinFebContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinFebContents.kpi4 > '6.133333333' && youthPRViolinFebContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinFebContents.kpi4 >= '7.666666667' && youthPRViolinFebContents.kpi4 < '9.2')?'green':(youthPRViolinFebContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinFebContents.kpi5 == null)?'grey-2':(youthPRViolinFebContents.kpi5 >= '0' && youthPRViolinFebContents.kpi5 <= '1.6')?'red':(youthPRViolinFebContents.kpi5 > '1.6' && youthPRViolinFebContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinFebContents.kpi5 > '2.133333333' && youthPRViolinFebContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinFebContents.kpi5 >= '2.666666667' && youthPRViolinFebContents.kpi5 < '3.2')?'green':(youthPRViolinFebContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi5}}
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
                              :color="(youthPRViolinMarContents.kpi1 == null)?'grey-2':(youthPRViolinMarContents.kpi1 >= '0' && youthPRViolinMarContents.kpi1 <= '3.6')?'red':(youthPRViolinMarContents.kpi1 > '3.6' && youthPRViolinMarContents.kpi1 <= '4.8')?'orange':(youthPRViolinMarContents.kpi1 > '4.8' && youthPRViolinMarContents.kpi1 < '6')?'yellow-7':(youthPRViolinMarContents.kpi1 >= '6' && youthPRViolinMarContents.kpi1 < '7.2')?'green':(youthPRViolinMarContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMarContents.kpi2 == null)?'grey-2':(youthPRViolinMarContents.kpi2 >= '0' && youthPRViolinMarContents.kpi2 <= '5.6')?'red':(youthPRViolinMarContents.kpi2 > '5.6' && youthPRViolinMarContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinMarContents.kpi2 > '7.466666667' && youthPRViolinMarContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinMarContents.kpi2 >= '9.333333333' && youthPRViolinMarContents.kpi2 < '11.2')?'green':(youthPRViolinMarContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMarContents.kpi3 == null)?'grey-2':(youthPRViolinMarContents.kpi3 >= '0' && youthPRViolinMarContents.kpi3 <= '2.4')?'red':(youthPRViolinMarContents.kpi3 > '2.4' && youthPRViolinMarContents.kpi3 <= '3.2')?'orange':(youthPRViolinMarContents.kpi3 > '3.2' && youthPRViolinMarContents.kpi3 < '4')?'yellow-7':(youthPRViolinMarContents.kpi3 >= '4' && youthPRViolinMarContents.kpi3 < '4.8')?'green':(youthPRViolinMarContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMarContents.kpi4 == null)?'grey-2':(youthPRViolinMarContents.kpi4 >= '0' && youthPRViolinMarContents.kpi4 <= '4.6')?'red':(youthPRViolinMarContents.kpi4 > '4.6' && youthPRViolinMarContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinMarContents.kpi4 > '6.133333333' && youthPRViolinMarContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinMarContents.kpi4 >= '7.666666667' && youthPRViolinMarContents.kpi4 < '9.2')?'green':(youthPRViolinMarContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMarContents.kpi5 == null)?'grey-2':(youthPRViolinMarContents.kpi5 >= '0' && youthPRViolinMarContents.kpi5 <= '1.6')?'red':(youthPRViolinMarContents.kpi5 > '1.6' && youthPRViolinMarContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinMarContents.kpi5 > '2.133333333' && youthPRViolinMarContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinMarContents.kpi5 >= '2.666666667' && youthPRViolinMarContents.kpi5 < '3.2')?'green':(youthPRViolinMarContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi5}}
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
                              :color="(youthPRViolinAprContents.kpi1 == null)?'grey-2':(youthPRViolinAprContents.kpi1 >= '0' && youthPRViolinAprContents.kpi1 <= '3.6')?'red':(youthPRViolinAprContents.kpi1 > '3.6' && youthPRViolinAprContents.kpi1 <= '4.8')?'orange':(youthPRViolinAprContents.kpi1 > '4.8' && youthPRViolinAprContents.kpi1 < '6')?'yellow-7':(youthPRViolinAprContents.kpi1 >= '6' && youthPRViolinAprContents.kpi1 < '7.2')?'green':(youthPRViolinAprContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAprContents.kpi2 == null)?'grey-2':(youthPRViolinAprContents.kpi2 >= '0' && youthPRViolinAprContents.kpi2 <= '5.6')?'red':(youthPRViolinAprContents.kpi2 > '5.6' && youthPRViolinAprContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinAprContents.kpi2 > '7.466666667' && youthPRViolinAprContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinAprContents.kpi2 >= '9.333333333' && youthPRViolinAprContents.kpi2 < '11.2')?'green':(youthPRViolinAprContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAprContents.kpi3 == null)?'grey-2':(youthPRViolinAprContents.kpi3 >= '0' && youthPRViolinAprContents.kpi3 <= '2.4')?'red':(youthPRViolinAprContents.kpi3 > '2.4' && youthPRViolinAprContents.kpi3 <= '3.2')?'orange':(youthPRViolinAprContents.kpi3 > '3.2' && youthPRViolinAprContents.kpi3 < '4')?'yellow-7':(youthPRViolinAprContents.kpi3 >= '4' && youthPRViolinAprContents.kpi3 < '4.8')?'green':(youthPRViolinAprContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAprContents.kpi4 == null)?'grey-2':(youthPRViolinAprContents.kpi4 >= '0' && youthPRViolinAprContents.kpi4 <= '4.6')?'red':(youthPRViolinAprContents.kpi4 > '4.6' && youthPRViolinAprContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinAprContents.kpi4 > '6.133333333' && youthPRViolinAprContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinAprContents.kpi4 >= '7.666666667' && youthPRViolinAprContents.kpi4 < '9.2')?'green':(youthPRViolinAprContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAprContents.kpi5 == null)?'grey-2':(youthPRViolinAprContents.kpi5 >= '0' && youthPRViolinAprContents.kpi5 <= '1.6')?'red':(youthPRViolinAprContents.kpi5 > '1.6' && youthPRViolinAprContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinAprContents.kpi5 > '2.133333333' && youthPRViolinAprContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinAprContents.kpi5 >= '2.666666667' && youthPRViolinAprContents.kpi5 < '3.2')?'green':(youthPRViolinAprContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi5}}
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
                              :color="(youthPRViolinMayContents.kpi1 == null)?'grey-2':(youthPRViolinMayContents.kpi1 >= '0' && youthPRViolinMayContents.kpi1 <= '3.6')?'red':(youthPRViolinMayContents.kpi1 > '3.6' && youthPRViolinMayContents.kpi1 <= '4.8')?'orange':(youthPRViolinMayContents.kpi1 > '4.8' && youthPRViolinMayContents.kpi1 < '6')?'yellow-7':(youthPRViolinMayContents.kpi1 >= '6' && youthPRViolinMayContents.kpi1 < '7.2')?'green':(youthPRViolinMayContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMayContents.kpi2 == null)?'grey-2':(youthPRViolinMayContents.kpi2 >= '0' && youthPRViolinMayContents.kpi2 <= '5.6')?'red':(youthPRViolinMayContents.kpi2 > '5.6' && youthPRViolinMayContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinMayContents.kpi2 > '7.466666667' && youthPRViolinMayContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinMayContents.kpi2 >= '9.333333333' && youthPRViolinMayContents.kpi2 < '11.2')?'green':(youthPRViolinMayContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMayContents.kpi3 == null)?'grey-2':(youthPRViolinMayContents.kpi3 >= '0' && youthPRViolinMayContents.kpi3 <= '2.4')?'red':(youthPRViolinMayContents.kpi3 > '2.4' && youthPRViolinMayContents.kpi3 <= '3.2')?'orange':(youthPRViolinMayContents.kpi3 > '3.2' && youthPRViolinMayContents.kpi3 < '4')?'yellow-7':(youthPRViolinMayContents.kpi3 >= '4' && youthPRViolinMayContents.kpi3 < '4.8')?'green':(youthPRViolinMayContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMayContents.kpi4 == null)?'grey-2':(youthPRViolinMayContents.kpi4 >= '0' && youthPRViolinMayContents.kpi4 <= '4.6')?'red':(youthPRViolinMayContents.kpi4 > '4.6' && youthPRViolinMayContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinMayContents.kpi4 > '6.133333333' && youthPRViolinMayContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinMayContents.kpi4 >= '7.666666667' && youthPRViolinMayContents.kpi4 < '9.2')?'green':(youthPRViolinMayContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMayContents.kpi5 == null)?'grey-2':(youthPRViolinMayContents.kpi5 >= '0' && youthPRViolinMayContents.kpi5 <= '1.6')?'red':(youthPRViolinMayContents.kpi5 > '1.6' && youthPRViolinMayContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinMayContents.kpi5 > '2.133333333' && youthPRViolinMayContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinMayContents.kpi5 >= '2.666666667' && youthPRViolinMayContents.kpi5 < '3.2')?'green':(youthPRViolinMayContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi5}}
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
                              :color="(youthPRViolinJunContents.kpi1 == null)?'grey-2':(youthPRViolinJunContents.kpi1 >= '0' && youthPRViolinJunContents.kpi1 <= '3.6')?'red':(youthPRViolinJunContents.kpi1 > '3.6' && youthPRViolinJunContents.kpi1 <= '4.8')?'orange':(youthPRViolinJunContents.kpi1 > '4.8' && youthPRViolinJunContents.kpi1 < '6')?'yellow-7':(youthPRViolinJunContents.kpi1 >= '6' && youthPRViolinJunContents.kpi1 < '7.2')?'green':(youthPRViolinJunContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJunContents.kpi2 == null)?'grey-2':(youthPRViolinJunContents.kpi2 >= '0' && youthPRViolinJunContents.kpi2 <= '5.6')?'red':(youthPRViolinJunContents.kpi2 > '5.6' && youthPRViolinJunContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinJunContents.kpi2 > '7.466666667' && youthPRViolinJunContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinJunContents.kpi2 >= '9.333333333' && youthPRViolinJunContents.kpi2 < '11.2')?'green':(youthPRViolinJunContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJunContents.kpi3 == null)?'grey-2':(youthPRViolinJunContents.kpi3 >= '0' && youthPRViolinJunContents.kpi3 <= '2.4')?'red':(youthPRViolinJunContents.kpi3 > '2.4' && youthPRViolinJunContents.kpi3 <= '3.2')?'orange':(youthPRViolinJunContents.kpi3 > '3.2' && youthPRViolinJunContents.kpi3 < '4')?'yellow-7':(youthPRViolinJunContents.kpi3 >= '4' && youthPRViolinJunContents.kpi3 < '4.8')?'green':(youthPRViolinJunContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJunContents.kpi4 == null)?'grey-2':(youthPRViolinJunContents.kpi4 >= '0' && youthPRViolinJunContents.kpi4 <= '4.6')?'red':(youthPRViolinJunContents.kpi4 > '4.6' && youthPRViolinJunContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinJunContents.kpi4 > '6.133333333' && youthPRViolinJunContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinJunContents.kpi4 >= '7.666666667' && youthPRViolinJunContents.kpi4 < '9.2')?'green':(youthPRViolinJunContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJunContents.kpi5 == null)?'grey-2':(youthPRViolinJunContents.kpi5 >= '0' && youthPRViolinJunContents.kpi5 <= '1.6')?'red':(youthPRViolinJunContents.kpi5 > '1.6' && youthPRViolinJunContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinJunContents.kpi5 > '2.133333333' && youthPRViolinJunContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinJunContents.kpi5 >= '2.666666667' && youthPRViolinJunContents.kpi5 < '3.2')?'green':(youthPRViolinJunContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi5}}
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
                              :color="(youthPRViolinJulContents.kpi1 == null)?'grey-2':(youthPRViolinJulContents.kpi1 >= '0' && youthPRViolinJulContents.kpi1 <= '3.6')?'red':(youthPRViolinJulContents.kpi1 > '3.6' && youthPRViolinJulContents.kpi1 <= '4.8')?'orange':(youthPRViolinJulContents.kpi1 > '4.8' && youthPRViolinJulContents.kpi1 < '6')?'yellow-7':(youthPRViolinJulContents.kpi1 >= '6' && youthPRViolinJulContents.kpi1 < '7.2')?'green':(youthPRViolinJulContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJulContents.kpi2 == null)?'grey-2':(youthPRViolinJulContents.kpi2 >= '0' && youthPRViolinJulContents.kpi2 <= '5.6')?'red':(youthPRViolinJulContents.kpi2 > '5.6' && youthPRViolinJulContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinJulContents.kpi2 > '7.466666667' && youthPRViolinJulContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinJulContents.kpi2 >= '9.333333333' && youthPRViolinJulContents.kpi2 < '11.2')?'green':(youthPRViolinJulContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJulContents.kpi3 == null)?'grey-2':(youthPRViolinJulContents.kpi3 >= '0' && youthPRViolinJulContents.kpi3 <= '2.4')?'red':(youthPRViolinJulContents.kpi3 > '2.4' && youthPRViolinJulContents.kpi3 <= '3.2')?'orange':(youthPRViolinJulContents.kpi3 > '3.2' && youthPRViolinJulContents.kpi3 < '4')?'yellow-7':(youthPRViolinJulContents.kpi3 >= '4' && youthPRViolinJulContents.kpi3 < '4.8')?'green':(youthPRViolinJulContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJulContents.kpi4 == null)?'grey-2':(youthPRViolinJulContents.kpi4 >= '0' && youthPRViolinJulContents.kpi4 <= '4.6')?'red':(youthPRViolinJulContents.kpi4 > '4.6' && youthPRViolinJulContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinJulContents.kpi4 > '6.133333333' && youthPRViolinJulContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinJulContents.kpi4 >= '7.666666667' && youthPRViolinJulContents.kpi4 < '9.2')?'green':(youthPRViolinJulContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJulContents.kpi5 == null)?'grey-2':(youthPRViolinJulContents.kpi5 >= '0' && youthPRViolinJulContents.kpi5 <= '1.6')?'red':(youthPRViolinJulContents.kpi5 > '1.6' && youthPRViolinJulContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinJulContents.kpi5 > '2.133333333' && youthPRViolinJulContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinJulContents.kpi5 >= '2.666666667' && youthPRViolinJulContents.kpi5 < '3.2')?'green':(youthPRViolinJulContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi5}}
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
                              :color="(youthPRViolinAugContents.kpi1 == null)?'grey-2':(youthPRViolinAugContents.kpi1 >= '0' && youthPRViolinAugContents.kpi1 <= '3.6')?'red':(youthPRViolinAugContents.kpi1 > '3.6' && youthPRViolinAugContents.kpi1 <= '4.8')?'orange':(youthPRViolinAugContents.kpi1 > '4.8' && youthPRViolinAugContents.kpi1 < '6')?'yellow-7':(youthPRViolinAugContents.kpi1 >= '6' && youthPRViolinAugContents.kpi1 < '7.2')?'green':(youthPRViolinAugContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAugContents.kpi2 == null)?'grey-2':(youthPRViolinAugContents.kpi2 >= '0' && youthPRViolinAugContents.kpi2 <= '5.6')?'red':(youthPRViolinAugContents.kpi2 > '5.6' && youthPRViolinAugContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinAugContents.kpi2 > '7.466666667' && youthPRViolinAugContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinAugContents.kpi2 >= '9.333333333' && youthPRViolinAugContents.kpi2 < '11.2')?'green':(youthPRViolinAugContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAugContents.kpi3 == null)?'grey-2':(youthPRViolinAugContents.kpi3 >= '0' && youthPRViolinAugContents.kpi3 <= '2.4')?'red':(youthPRViolinAugContents.kpi3 > '2.4' && youthPRViolinAugContents.kpi3 <= '3.2')?'orange':(youthPRViolinAugContents.kpi3 > '3.2' && youthPRViolinAugContents.kpi3 < '4')?'yellow-7':(youthPRViolinAugContents.kpi3 >= '4' && youthPRViolinAugContents.kpi3 < '4.8')?'green':(youthPRViolinAugContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAugContents.kpi4 == null)?'grey-2':(youthPRViolinAugContents.kpi4 >= '0' && youthPRViolinAugContents.kpi4 <= '4.6')?'red':(youthPRViolinAugContents.kpi4 > '4.6' && youthPRViolinAugContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinAugContents.kpi4 > '6.133333333' && youthPRViolinAugContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinAugContents.kpi4 >= '7.666666667' && youthPRViolinAugContents.kpi4 < '9.2')?'green':(youthPRViolinAugContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAugContents.kpi5 == null)?'grey-2':(youthPRViolinAugContents.kpi5 >= '0' && youthPRViolinAugContents.kpi5 <= '1.6')?'red':(youthPRViolinAugContents.kpi5 > '1.6' && youthPRViolinAugContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinAugContents.kpi5 > '2.133333333' && youthPRViolinAugContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinAugContents.kpi5 >= '2.666666667' && youthPRViolinAugContents.kpi5 < '3.2')?'green':(youthPRViolinAugContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi5}}
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
                              :color="(youthPRViolinSepContents.kpi1 == null)?'grey-2':(youthPRViolinSepContents.kpi1 >= '0' && youthPRViolinSepContents.kpi1 <= '3.6')?'red':(youthPRViolinSepContents.kpi1 > '3.6' && youthPRViolinSepContents.kpi1 <= '4.8')?'orange':(youthPRViolinSepContents.kpi1 > '4.8' && youthPRViolinSepContents.kpi1 < '6')?'yellow-7':(youthPRViolinSepContents.kpi1 >= '6' && youthPRViolinSepContents.kpi1 < '7.2')?'green':(youthPRViolinSepContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinSepContents.kpi2 == null)?'grey-2':(youthPRViolinSepContents.kpi2 >= '0' && youthPRViolinSepContents.kpi2 <= '5.6')?'red':(youthPRViolinSepContents.kpi2 > '5.6' && youthPRViolinSepContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinSepContents.kpi2 > '7.466666667' && youthPRViolinSepContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinSepContents.kpi2 >= '9.333333333' && youthPRViolinSepContents.kpi2 < '11.2')?'green':(youthPRViolinSepContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinSepContents.kpi3 == null)?'grey-2':(youthPRViolinSepContents.kpi3 >= '0' && youthPRViolinSepContents.kpi3 <= '2.4')?'red':(youthPRViolinSepContents.kpi3 > '2.4' && youthPRViolinSepContents.kpi3 <= '3.2')?'orange':(youthPRViolinSepContents.kpi3 > '3.2' && youthPRViolinSepContents.kpi3 < '4')?'yellow-7':(youthPRViolinSepContents.kpi3 >= '4' && youthPRViolinSepContents.kpi3 < '4.8')?'green':(youthPRViolinSepContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinSepContents.kpi4 == null)?'grey-2':(youthPRViolinSepContents.kpi4 >= '0' && youthPRViolinSepContents.kpi4 <= '4.6')?'red':(youthPRViolinSepContents.kpi4 > '4.6' && youthPRViolinSepContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinSepContents.kpi4 > '6.133333333' && youthPRViolinSepContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinSepContents.kpi4 >= '7.666666667' && youthPRViolinSepContents.kpi4 < '9.2')?'green':(youthPRViolinSepContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinSepContents.kpi5 == null)?'grey-2':(youthPRViolinSepContents.kpi5 >= '0' && youthPRViolinSepContents.kpi5 <= '1.6')?'red':(youthPRViolinSepContents.kpi5 > '1.6' && youthPRViolinSepContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinSepContents.kpi5 > '2.133333333' && youthPRViolinSepContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinSepContents.kpi5 >= '2.666666667' && youthPRViolinSepContents.kpi5 < '3.2')?'green':(youthPRViolinSepContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi5}}
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
                              :color="(youthPRViolinOctContents.kpi1 == null)?'grey-2':(youthPRViolinOctContents.kpi1 >= '0' && youthPRViolinOctContents.kpi1 <= '3.6')?'red':(youthPRViolinOctContents.kpi1 > '3.6' && youthPRViolinOctContents.kpi1 <= '4.8')?'orange':(youthPRViolinOctContents.kpi1 > '4.8' && youthPRViolinOctContents.kpi1 < '6')?'yellow-7':(youthPRViolinOctContents.kpi1 >= '6' && youthPRViolinOctContents.kpi1 < '7.2')?'green':(youthPRViolinOctContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinOctContents.kpi2 == null)?'grey-2':(youthPRViolinOctContents.kpi2 >= '0' && youthPRViolinOctContents.kpi2 <= '5.6')?'red':(youthPRViolinOctContents.kpi2 > '5.6' && youthPRViolinOctContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinOctContents.kpi2 > '7.466666667' && youthPRViolinOctContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinOctContents.kpi2 >= '9.333333333' && youthPRViolinOctContents.kpi2 < '11.2')?'green':(youthPRViolinOctContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinOctContents.kpi3 == null)?'grey-2':(youthPRViolinOctContents.kpi3 >= '0' && youthPRViolinOctContents.kpi3 <= '2.4')?'red':(youthPRViolinOctContents.kpi3 > '2.4' && youthPRViolinOctContents.kpi3 <= '3.2')?'orange':(youthPRViolinOctContents.kpi3 > '3.2' && youthPRViolinOctContents.kpi3 < '4')?'yellow-7':(youthPRViolinOctContents.kpi3 >= '4' && youthPRViolinOctContents.kpi3 < '4.8')?'green':(youthPRViolinOctContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinOctContents.kpi4 == null)?'grey-2':(youthPRViolinOctContents.kpi4 >= '0' && youthPRViolinOctContents.kpi4 <= '4.6')?'red':(youthPRViolinOctContents.kpi4 > '4.6' && youthPRViolinOctContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinOctContents.kpi4 > '6.133333333' && youthPRViolinOctContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinOctContents.kpi4 >= '7.666666667' && youthPRViolinOctContents.kpi4 < '9.2')?'green':(youthPRViolinOctContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinOctContents.kpi5 == null)?'grey-2':(youthPRViolinOctContents.kpi5 >= '0' && youthPRViolinOctContents.kpi5 <= '1.6')?'red':(youthPRViolinOctContents.kpi5 > '1.6' && youthPRViolinOctContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinOctContents.kpi5 > '2.133333333' && youthPRViolinOctContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinOctContents.kpi5 >= '2.666666667' && youthPRViolinOctContents.kpi5 < '3.2')?'green':(youthPRViolinOctContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi5}}
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
                              :color="(youthPRViolinNovContents.kpi1 == null)?'grey-2':(youthPRViolinNovContents.kpi1 >= '0' && youthPRViolinNovContents.kpi1 <= '3.6')?'red':(youthPRViolinNovContents.kpi1 > '3.6' && youthPRViolinNovContents.kpi1 <= '4.8')?'orange':(youthPRViolinNovContents.kpi1 > '4.8' && youthPRViolinNovContents.kpi1 < '6')?'yellow-7':(youthPRViolinNovContents.kpi1 >= '6' && youthPRViolinNovContents.kpi1 < '7.2')?'green':(youthPRViolinNovContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinNovContents.kpi2 == null)?'grey-2':(youthPRViolinNovContents.kpi2 >= '0' && youthPRViolinNovContents.kpi2 <= '5.6')?'red':(youthPRViolinNovContents.kpi2 > '5.6' && youthPRViolinNovContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinNovContents.kpi2 > '7.466666667' && youthPRViolinNovContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinNovContents.kpi2 >= '9.333333333' && youthPRViolinNovContents.kpi2 < '11.2')?'green':(youthPRViolinNovContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinNovContents.kpi3 == null)?'grey-2':(youthPRViolinNovContents.kpi3 >= '0' && youthPRViolinNovContents.kpi3 <= '2.4')?'red':(youthPRViolinNovContents.kpi3 > '2.4' && youthPRViolinNovContents.kpi3 <= '3.2')?'orange':(youthPRViolinNovContents.kpi3 > '3.2' && youthPRViolinNovContents.kpi3 < '4')?'yellow-7':(youthPRViolinNovContents.kpi3 >= '4' && youthPRViolinNovContents.kpi3 < '4.8')?'green':(youthPRViolinNovContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinNovContents.kpi4 == null)?'grey-2':(youthPRViolinNovContents.kpi4 >= '0' && youthPRViolinNovContents.kpi4 <= '4.6')?'red':(youthPRViolinNovContents.kpi4 > '4.6' && youthPRViolinNovContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinNovContents.kpi4 > '6.133333333' && youthPRViolinNovContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinNovContents.kpi4 >= '7.666666667' && youthPRViolinNovContents.kpi4 < '9.2')?'green':(youthPRViolinNovContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinNovContents.kpi5 == null)?'grey-2':(youthPRViolinNovContents.kpi5 >= '0' && youthPRViolinNovContents.kpi5 <= '1.6')?'red':(youthPRViolinNovContents.kpi5 > '1.6' && youthPRViolinNovContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinNovContents.kpi5 > '2.133333333' && youthPRViolinNovContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinNovContents.kpi5 >= '2.666666667' && youthPRViolinNovContents.kpi5 < '3.2')?'green':(youthPRViolinNovContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi5}}
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
                              :color="(youthPRViolinDecContents.kpi1 == null)?'grey-2':(youthPRViolinDecContents.kpi1 >= '0' && youthPRViolinDecContents.kpi1 <= '3.6')?'red':(youthPRViolinDecContents.kpi1 > '3.6' && youthPRViolinDecContents.kpi1 <= '4.8')?'orange':(youthPRViolinDecContents.kpi1 > '4.8' && youthPRViolinDecContents.kpi1 < '6')?'yellow-7':(youthPRViolinDecContents.kpi1 >= '6' && youthPRViolinDecContents.kpi1 < '7.2')?'green':(youthPRViolinDecContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinDecContents.kpi2 == null)?'grey-2':(youthPRViolinDecContents.kpi2 >= '0' && youthPRViolinDecContents.kpi2 <= '5.6')?'red':(youthPRViolinDecContents.kpi2 > '5.6' && youthPRViolinDecContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinDecContents.kpi2 > '7.466666667' && youthPRViolinDecContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinDecContents.kpi2 >= '9.333333333' && youthPRViolinDecContents.kpi2 < '11.2')?'green':(youthPRViolinDecContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinDecContents.kpi3 == null)?'grey-2':(youthPRViolinDecContents.kpi3 >= '0' && youthPRViolinDecContents.kpi3 <= '2.4')?'red':(youthPRViolinDecContents.kpi3 > '2.4' && youthPRViolinDecContents.kpi3 <= '3.2')?'orange':(youthPRViolinDecContents.kpi3 > '3.2' && youthPRViolinDecContents.kpi3 < '4')?'yellow-7':(youthPRViolinDecContents.kpi3 >= '4' && youthPRViolinDecContents.kpi3 < '4.8')?'green':(youthPRViolinDecContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinDecContents.kpi4 == null)?'grey-2':(youthPRViolinDecContents.kpi4 >= '0' && youthPRViolinDecContents.kpi4 <= '4.6')?'red':(youthPRViolinDecContents.kpi4 > '4.6' && youthPRViolinDecContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinDecContents.kpi4 > '6.133333333' && youthPRViolinDecContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinDecContents.kpi4 >= '7.666666667' && youthPRViolinDecContents.kpi4 < '9.2')?'green':(youthPRViolinDecContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinDecContents.kpi5 == null)?'grey-2':(youthPRViolinDecContents.kpi5 >= '0' && youthPRViolinDecContents.kpi5 <= '1.6')?'red':(youthPRViolinDecContents.kpi5 > '1.6' && youthPRViolinDecContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinDecContents.kpi5 > '2.133333333' && youthPRViolinDecContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinDecContents.kpi5 >= '2.666666667' && youthPRViolinDecContents.kpi5 < '3.2')?'green':(youthPRViolinDecContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi5}}
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
                              :color="(youthPRViolinJanContents.kpi1 == null)?'grey-2':(youthPRViolinJanContents.kpi1 >= '0' && youthPRViolinJanContents.kpi1 <= '3.6')?'red':(youthPRViolinJanContents.kpi1 > '3.6' && youthPRViolinJanContents.kpi1 <= '4.8')?'orange':(youthPRViolinJanContents.kpi1 > '4.8' && youthPRViolinJanContents.kpi1 < '6')?'yellow-7':(youthPRViolinJanContents.kpi1 >= '6' && youthPRViolinJanContents.kpi1 < '7.2')?'green':(youthPRViolinJanContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJanContents.kpi2 == null)?'grey-2':(youthPRViolinJanContents.kpi2 >= '0' && youthPRViolinJanContents.kpi2 <= '5.6')?'red':(youthPRViolinJanContents.kpi2 > '5.6' && youthPRViolinJanContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinJanContents.kpi2 > '7.466666667' && youthPRViolinJanContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinJanContents.kpi2 >= '9.333333333' && youthPRViolinJanContents.kpi2 < '11.2')?'green':(youthPRViolinJanContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJanContents.kpi3 == null)?'grey-2':(youthPRViolinJanContents.kpi3 >= '0' && youthPRViolinJanContents.kpi3 <= '2.4')?'red':(youthPRViolinJanContents.kpi3 > '2.4' && youthPRViolinJanContents.kpi3 <= '3.2')?'orange':(youthPRViolinJanContents.kpi3 > '3.2' && youthPRViolinJanContents.kpi3 < '4')?'yellow-7':(youthPRViolinJanContents.kpi3 >= '4' && youthPRViolinJanContents.kpi3 < '4.8')?'green':(youthPRViolinJanContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJanContents.kpi4 == null)?'grey-2':(youthPRViolinJanContents.kpi4 >= '0' && youthPRViolinJanContents.kpi4 <= '4.6')?'red':(youthPRViolinJanContents.kpi4 > '4.6' && youthPRViolinJanContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinJanContents.kpi4 > '6.133333333' && youthPRViolinJanContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinJanContents.kpi4 >= '7.666666667' && youthPRViolinJanContents.kpi4 < '9.2')?'green':(youthPRViolinJanContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJanContents.kpi5 == null)?'grey-2':(youthPRViolinJanContents.kpi5 >= '0' && youthPRViolinJanContents.kpi5 <= '1.6')?'red':(youthPRViolinJanContents.kpi5 > '1.6' && youthPRViolinJanContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinJanContents.kpi5 > '2.133333333' && youthPRViolinJanContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinJanContents.kpi5 >= '2.666666667' && youthPRViolinJanContents.kpi5 < '3.2')?'green':(youthPRViolinJanContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJanContents.kpi5}}
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
                              :color="(youthPRViolinFebContents.kpi1 == null)?'grey-2':(youthPRViolinFebContents.kpi1 >= '0' && youthPRViolinFebContents.kpi1 <= '3.6')?'red':(youthPRViolinFebContents.kpi1 > '3.6' && youthPRViolinFebContents.kpi1 <= '4.8')?'orange':(youthPRViolinFebContents.kpi1 > '4.8' && youthPRViolinFebContents.kpi1 < '6')?'yellow-7':(youthPRViolinFebContents.kpi1 >= '6' && youthPRViolinFebContents.kpi1 < '7.2')?'green':(youthPRViolinFebContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinFebContents.kpi2 == null)?'grey-2':(youthPRViolinFebContents.kpi2 >= '0' && youthPRViolinFebContents.kpi2 <= '5.6')?'red':(youthPRViolinFebContents.kpi2 > '5.6' && youthPRViolinFebContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinFebContents.kpi2 > '7.466666667' && youthPRViolinFebContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinFebContents.kpi2 >= '9.333333333' && youthPRViolinFebContents.kpi2 < '11.2')?'green':(youthPRViolinFebContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinFebContents.kpi3 == null)?'grey-2':(youthPRViolinFebContents.kpi3 >= '0' && youthPRViolinFebContents.kpi3 <= '2.4')?'red':(youthPRViolinFebContents.kpi3 > '2.4' && youthPRViolinFebContents.kpi3 <= '3.2')?'orange':(youthPRViolinFebContents.kpi3 > '3.2' && youthPRViolinFebContents.kpi3 < '4')?'yellow-7':(youthPRViolinFebContents.kpi3 >= '4' && youthPRViolinFebContents.kpi3 < '4.8')?'green':(youthPRViolinFebContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinFebContents.kpi4 == null)?'grey-2':(youthPRViolinFebContents.kpi4 >= '0' && youthPRViolinFebContents.kpi4 <= '4.6')?'red':(youthPRViolinFebContents.kpi4 > '4.6' && youthPRViolinFebContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinFebContents.kpi4 > '6.133333333' && youthPRViolinFebContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinFebContents.kpi4 >= '7.666666667' && youthPRViolinFebContents.kpi4 < '9.2')?'green':(youthPRViolinFebContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinFebContents.kpi5 == null)?'grey-2':(youthPRViolinFebContents.kpi5 >= '0' && youthPRViolinFebContents.kpi5 <= '1.6')?'red':(youthPRViolinFebContents.kpi5 > '1.6' && youthPRViolinFebContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinFebContents.kpi5 > '2.133333333' && youthPRViolinFebContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinFebContents.kpi5 >= '2.666666667' && youthPRViolinFebContents.kpi5 < '3.2')?'green':(youthPRViolinFebContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinFebContents.kpi5}}
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
                              :color="(youthPRViolinMarContents.kpi1 == null)?'grey-2':(youthPRViolinMarContents.kpi1 >= '0' && youthPRViolinMarContents.kpi1 <= '3.6')?'red':(youthPRViolinMarContents.kpi1 > '3.6' && youthPRViolinMarContents.kpi1 <= '4.8')?'orange':(youthPRViolinMarContents.kpi1 > '4.8' && youthPRViolinMarContents.kpi1 < '6')?'yellow-7':(youthPRViolinMarContents.kpi1 >= '6' && youthPRViolinMarContents.kpi1 < '7.2')?'green':(youthPRViolinMarContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMarContents.kpi2 == null)?'grey-2':(youthPRViolinMarContents.kpi2 >= '0' && youthPRViolinMarContents.kpi2 <= '5.6')?'red':(youthPRViolinMarContents.kpi2 > '5.6' && youthPRViolinMarContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinMarContents.kpi2 > '7.466666667' && youthPRViolinMarContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinMarContents.kpi2 >= '9.333333333' && youthPRViolinMarContents.kpi2 < '11.2')?'green':(youthPRViolinMarContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMarContents.kpi3 == null)?'grey-2':(youthPRViolinMarContents.kpi3 >= '0' && youthPRViolinMarContents.kpi3 <= '2.4')?'red':(youthPRViolinMarContents.kpi3 > '2.4' && youthPRViolinMarContents.kpi3 <= '3.2')?'orange':(youthPRViolinMarContents.kpi3 > '3.2' && youthPRViolinMarContents.kpi3 < '4')?'yellow-7':(youthPRViolinMarContents.kpi3 >= '4' && youthPRViolinMarContents.kpi3 < '4.8')?'green':(youthPRViolinMarContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMarContents.kpi4 == null)?'grey-2':(youthPRViolinMarContents.kpi4 >= '0' && youthPRViolinMarContents.kpi4 <= '4.6')?'red':(youthPRViolinMarContents.kpi4 > '4.6' && youthPRViolinMarContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinMarContents.kpi4 > '6.133333333' && youthPRViolinMarContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinMarContents.kpi4 >= '7.666666667' && youthPRViolinMarContents.kpi4 < '9.2')?'green':(youthPRViolinMarContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMarContents.kpi5 == null)?'grey-2':(youthPRViolinMarContents.kpi5 >= '0' && youthPRViolinMarContents.kpi5 <= '1.6')?'red':(youthPRViolinMarContents.kpi5 > '1.6' && youthPRViolinMarContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinMarContents.kpi5 > '2.133333333' && youthPRViolinMarContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinMarContents.kpi5 >= '2.666666667' && youthPRViolinMarContents.kpi5 < '3.2')?'green':(youthPRViolinMarContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMarContents.kpi5}}
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
                              :color="(youthPRViolinAprContents.kpi1 == null)?'grey-2':(youthPRViolinAprContents.kpi1 >= '0' && youthPRViolinAprContents.kpi1 <= '3.6')?'red':(youthPRViolinAprContents.kpi1 > '3.6' && youthPRViolinAprContents.kpi1 <= '4.8')?'orange':(youthPRViolinAprContents.kpi1 > '4.8' && youthPRViolinAprContents.kpi1 < '6')?'yellow-7':(youthPRViolinAprContents.kpi1 >= '6' && youthPRViolinAprContents.kpi1 < '7.2')?'green':(youthPRViolinAprContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAprContents.kpi2 == null)?'grey-2':(youthPRViolinAprContents.kpi2 >= '0' && youthPRViolinAprContents.kpi2 <= '5.6')?'red':(youthPRViolinAprContents.kpi2 > '5.6' && youthPRViolinAprContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinAprContents.kpi2 > '7.466666667' && youthPRViolinAprContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinAprContents.kpi2 >= '9.333333333' && youthPRViolinAprContents.kpi2 < '11.2')?'green':(youthPRViolinAprContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAprContents.kpi3 == null)?'grey-2':(youthPRViolinAprContents.kpi3 >= '0' && youthPRViolinAprContents.kpi3 <= '2.4')?'red':(youthPRViolinAprContents.kpi3 > '2.4' && youthPRViolinAprContents.kpi3 <= '3.2')?'orange':(youthPRViolinAprContents.kpi3 > '3.2' && youthPRViolinAprContents.kpi3 < '4')?'yellow-7':(youthPRViolinAprContents.kpi3 >= '4' && youthPRViolinAprContents.kpi3 < '4.8')?'green':(youthPRViolinAprContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAprContents.kpi4 == null)?'grey-2':(youthPRViolinAprContents.kpi4 >= '0' && youthPRViolinAprContents.kpi4 <= '4.6')?'red':(youthPRViolinAprContents.kpi4 > '4.6' && youthPRViolinAprContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinAprContents.kpi4 > '6.133333333' && youthPRViolinAprContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinAprContents.kpi4 >= '7.666666667' && youthPRViolinAprContents.kpi4 < '9.2')?'green':(youthPRViolinAprContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAprContents.kpi5 == null)?'grey-2':(youthPRViolinAprContents.kpi5 >= '0' && youthPRViolinAprContents.kpi5 <= '1.6')?'red':(youthPRViolinAprContents.kpi5 > '1.6' && youthPRViolinAprContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinAprContents.kpi5 > '2.133333333' && youthPRViolinAprContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinAprContents.kpi5 >= '2.666666667' && youthPRViolinAprContents.kpi5 < '3.2')?'green':(youthPRViolinAprContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAprContents.kpi5}}
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
                              :color="(youthPRViolinMayContents.kpi1 == null)?'grey-2':(youthPRViolinMayContents.kpi1 >= '0' && youthPRViolinMayContents.kpi1 <= '3.6')?'red':(youthPRViolinMayContents.kpi1 > '3.6' && youthPRViolinMayContents.kpi1 <= '4.8')?'orange':(youthPRViolinMayContents.kpi1 > '4.8' && youthPRViolinMayContents.kpi1 < '6')?'yellow-7':(youthPRViolinMayContents.kpi1 >= '6' && youthPRViolinMayContents.kpi1 < '7.2')?'green':(youthPRViolinMayContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMayContents.kpi2 == null)?'grey-2':(youthPRViolinMayContents.kpi2 >= '0' && youthPRViolinMayContents.kpi2 <= '5.6')?'red':(youthPRViolinMayContents.kpi2 > '5.6' && youthPRViolinMayContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinMayContents.kpi2 > '7.466666667' && youthPRViolinMayContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinMayContents.kpi2 >= '9.333333333' && youthPRViolinMayContents.kpi2 < '11.2')?'green':(youthPRViolinMayContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMayContents.kpi3 == null)?'grey-2':(youthPRViolinMayContents.kpi3 >= '0' && youthPRViolinMayContents.kpi3 <= '2.4')?'red':(youthPRViolinMayContents.kpi3 > '2.4' && youthPRViolinMayContents.kpi3 <= '3.2')?'orange':(youthPRViolinMayContents.kpi3 > '3.2' && youthPRViolinMayContents.kpi3 < '4')?'yellow-7':(youthPRViolinMayContents.kpi3 >= '4' && youthPRViolinMayContents.kpi3 < '4.8')?'green':(youthPRViolinMayContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMayContents.kpi4 == null)?'grey-2':(youthPRViolinMayContents.kpi4 >= '0' && youthPRViolinMayContents.kpi4 <= '4.6')?'red':(youthPRViolinMayContents.kpi4 > '4.6' && youthPRViolinMayContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinMayContents.kpi4 > '6.133333333' && youthPRViolinMayContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinMayContents.kpi4 >= '7.666666667' && youthPRViolinMayContents.kpi4 < '9.2')?'green':(youthPRViolinMayContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinMayContents.kpi5 == null)?'grey-2':(youthPRViolinMayContents.kpi5 >= '0' && youthPRViolinMayContents.kpi5 <= '1.6')?'red':(youthPRViolinMayContents.kpi5 > '1.6' && youthPRViolinMayContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinMayContents.kpi5 > '2.133333333' && youthPRViolinMayContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinMayContents.kpi5 >= '2.666666667' && youthPRViolinMayContents.kpi5 < '3.2')?'green':(youthPRViolinMayContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinMayContents.kpi5}}
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
                              :color="(youthPRViolinJunContents.kpi1 == null)?'grey-2':(youthPRViolinJunContents.kpi1 >= '0' && youthPRViolinJunContents.kpi1 <= '3.6')?'red':(youthPRViolinJunContents.kpi1 > '3.6' && youthPRViolinJunContents.kpi1 <= '4.8')?'orange':(youthPRViolinJunContents.kpi1 > '4.8' && youthPRViolinJunContents.kpi1 < '6')?'yellow-7':(youthPRViolinJunContents.kpi1 >= '6' && youthPRViolinJunContents.kpi1 < '7.2')?'green':(youthPRViolinJunContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJunContents.kpi2 == null)?'grey-2':(youthPRViolinJunContents.kpi2 >= '0' && youthPRViolinJunContents.kpi2 <= '5.6')?'red':(youthPRViolinJunContents.kpi2 > '5.6' && youthPRViolinJunContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinJunContents.kpi2 > '7.466666667' && youthPRViolinJunContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinJunContents.kpi2 >= '9.333333333' && youthPRViolinJunContents.kpi2 < '11.2')?'green':(youthPRViolinJunContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJunContents.kpi3 == null)?'grey-2':(youthPRViolinJunContents.kpi3 >= '0' && youthPRViolinJunContents.kpi3 <= '2.4')?'red':(youthPRViolinJunContents.kpi3 > '2.4' && youthPRViolinJunContents.kpi3 <= '3.2')?'orange':(youthPRViolinJunContents.kpi3 > '3.2' && youthPRViolinJunContents.kpi3 < '4')?'yellow-7':(youthPRViolinJunContents.kpi3 >= '4' && youthPRViolinJunContents.kpi3 < '4.8')?'green':(youthPRViolinJunContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJunContents.kpi4 == null)?'grey-2':(youthPRViolinJunContents.kpi4 >= '0' && youthPRViolinJunContents.kpi4 <= '4.6')?'red':(youthPRViolinJunContents.kpi4 > '4.6' && youthPRViolinJunContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinJunContents.kpi4 > '6.133333333' && youthPRViolinJunContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinJunContents.kpi4 >= '7.666666667' && youthPRViolinJunContents.kpi4 < '9.2')?'green':(youthPRViolinJunContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJunContents.kpi5 == null)?'grey-2':(youthPRViolinJunContents.kpi5 >= '0' && youthPRViolinJunContents.kpi5 <= '1.6')?'red':(youthPRViolinJunContents.kpi5 > '1.6' && youthPRViolinJunContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinJunContents.kpi5 > '2.133333333' && youthPRViolinJunContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinJunContents.kpi5 >= '2.666666667' && youthPRViolinJunContents.kpi5 < '3.2')?'green':(youthPRViolinJunContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJunContents.kpi5}}
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
                              :color="(youthPRViolinJulContents.kpi1 == null)?'grey-2':(youthPRViolinJulContents.kpi1 >= '0' && youthPRViolinJulContents.kpi1 <= '3.6')?'red':(youthPRViolinJulContents.kpi1 > '3.6' && youthPRViolinJulContents.kpi1 <= '4.8')?'orange':(youthPRViolinJulContents.kpi1 > '4.8' && youthPRViolinJulContents.kpi1 < '6')?'yellow-7':(youthPRViolinJulContents.kpi1 >= '6' && youthPRViolinJulContents.kpi1 < '7.2')?'green':(youthPRViolinJulContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJulContents.kpi2 == null)?'grey-2':(youthPRViolinJulContents.kpi2 >= '0' && youthPRViolinJulContents.kpi2 <= '5.6')?'red':(youthPRViolinJulContents.kpi2 > '5.6' && youthPRViolinJulContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinJulContents.kpi2 > '7.466666667' && youthPRViolinJulContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinJulContents.kpi2 >= '9.333333333' && youthPRViolinJulContents.kpi2 < '11.2')?'green':(youthPRViolinJulContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJulContents.kpi3 == null)?'grey-2':(youthPRViolinJulContents.kpi3 >= '0' && youthPRViolinJulContents.kpi3 <= '2.4')?'red':(youthPRViolinJulContents.kpi3 > '2.4' && youthPRViolinJulContents.kpi3 <= '3.2')?'orange':(youthPRViolinJulContents.kpi3 > '3.2' && youthPRViolinJulContents.kpi3 < '4')?'yellow-7':(youthPRViolinJulContents.kpi3 >= '4' && youthPRViolinJulContents.kpi3 < '4.8')?'green':(youthPRViolinJulContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJulContents.kpi4 == null)?'grey-2':(youthPRViolinJulContents.kpi4 >= '0' && youthPRViolinJulContents.kpi4 <= '4.6')?'red':(youthPRViolinJulContents.kpi4 > '4.6' && youthPRViolinJulContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinJulContents.kpi4 > '6.133333333' && youthPRViolinJulContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinJulContents.kpi4 >= '7.666666667' && youthPRViolinJulContents.kpi4 < '9.2')?'green':(youthPRViolinJulContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinJulContents.kpi5 == null)?'grey-2':(youthPRViolinJulContents.kpi5 >= '0' && youthPRViolinJulContents.kpi5 <= '1.6')?'red':(youthPRViolinJulContents.kpi5 > '1.6' && youthPRViolinJulContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinJulContents.kpi5 > '2.133333333' && youthPRViolinJulContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinJulContents.kpi5 >= '2.666666667' && youthPRViolinJulContents.kpi5 < '3.2')?'green':(youthPRViolinJulContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinJulContents.kpi5}}
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
                              :color="(youthPRViolinAugContents.kpi1 == null)?'grey-2':(youthPRViolinAugContents.kpi1 >= '0' && youthPRViolinAugContents.kpi1 <= '3.6')?'red':(youthPRViolinAugContents.kpi1 > '3.6' && youthPRViolinAugContents.kpi1 <= '4.8')?'orange':(youthPRViolinAugContents.kpi1 > '4.8' && youthPRViolinAugContents.kpi1 < '6')?'yellow-7':(youthPRViolinAugContents.kpi1 >= '6' && youthPRViolinAugContents.kpi1 < '7.2')?'green':(youthPRViolinAugContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAugContents.kpi2 == null)?'grey-2':(youthPRViolinAugContents.kpi2 >= '0' && youthPRViolinAugContents.kpi2 <= '5.6')?'red':(youthPRViolinAugContents.kpi2 > '5.6' && youthPRViolinAugContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinAugContents.kpi2 > '7.466666667' && youthPRViolinAugContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinAugContents.kpi2 >= '9.333333333' && youthPRViolinAugContents.kpi2 < '11.2')?'green':(youthPRViolinAugContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAugContents.kpi3 == null)?'grey-2':(youthPRViolinAugContents.kpi3 >= '0' && youthPRViolinAugContents.kpi3 <= '2.4')?'red':(youthPRViolinAugContents.kpi3 > '2.4' && youthPRViolinAugContents.kpi3 <= '3.2')?'orange':(youthPRViolinAugContents.kpi3 > '3.2' && youthPRViolinAugContents.kpi3 < '4')?'yellow-7':(youthPRViolinAugContents.kpi3 >= '4' && youthPRViolinAugContents.kpi3 < '4.8')?'green':(youthPRViolinAugContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAugContents.kpi4 == null)?'grey-2':(youthPRViolinAugContents.kpi4 >= '0' && youthPRViolinAugContents.kpi4 <= '4.6')?'red':(youthPRViolinAugContents.kpi4 > '4.6' && youthPRViolinAugContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinAugContents.kpi4 > '6.133333333' && youthPRViolinAugContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinAugContents.kpi4 >= '7.666666667' && youthPRViolinAugContents.kpi4 < '9.2')?'green':(youthPRViolinAugContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinAugContents.kpi5 == null)?'grey-2':(youthPRViolinAugContents.kpi5 >= '0' && youthPRViolinAugContents.kpi5 <= '1.6')?'red':(youthPRViolinAugContents.kpi5 > '1.6' && youthPRViolinAugContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinAugContents.kpi5 > '2.133333333' && youthPRViolinAugContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinAugContents.kpi5 >= '2.666666667' && youthPRViolinAugContents.kpi5 < '3.2')?'green':(youthPRViolinAugContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinAugContents.kpi5}}
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
                              :color="(youthPRViolinSepContents.kpi1 == null)?'grey-2':(youthPRViolinSepContents.kpi1 >= '0' && youthPRViolinSepContents.kpi1 <= '3.6')?'red':(youthPRViolinSepContents.kpi1 > '3.6' && youthPRViolinSepContents.kpi1 <= '4.8')?'orange':(youthPRViolinSepContents.kpi1 > '4.8' && youthPRViolinSepContents.kpi1 < '6')?'yellow-7':(youthPRViolinSepContents.kpi1 >= '6' && youthPRViolinSepContents.kpi1 < '7.2')?'green':(youthPRViolinSepContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinSepContents.kpi2 == null)?'grey-2':(youthPRViolinSepContents.kpi2 >= '0' && youthPRViolinSepContents.kpi2 <= '5.6')?'red':(youthPRViolinSepContents.kpi2 > '5.6' && youthPRViolinSepContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinSepContents.kpi2 > '7.466666667' && youthPRViolinSepContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinSepContents.kpi2 >= '9.333333333' && youthPRViolinSepContents.kpi2 < '11.2')?'green':(youthPRViolinSepContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinSepContents.kpi3 == null)?'grey-2':(youthPRViolinSepContents.kpi3 >= '0' && youthPRViolinSepContents.kpi3 <= '2.4')?'red':(youthPRViolinSepContents.kpi3 > '2.4' && youthPRViolinSepContents.kpi3 <= '3.2')?'orange':(youthPRViolinSepContents.kpi3 > '3.2' && youthPRViolinSepContents.kpi3 < '4')?'yellow-7':(youthPRViolinSepContents.kpi3 >= '4' && youthPRViolinSepContents.kpi3 < '4.8')?'green':(youthPRViolinSepContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinSepContents.kpi4 == null)?'grey-2':(youthPRViolinSepContents.kpi4 >= '0' && youthPRViolinSepContents.kpi4 <= '4.6')?'red':(youthPRViolinSepContents.kpi4 > '4.6' && youthPRViolinSepContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinSepContents.kpi4 > '6.133333333' && youthPRViolinSepContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinSepContents.kpi4 >= '7.666666667' && youthPRViolinSepContents.kpi4 < '9.2')?'green':(youthPRViolinSepContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinSepContents.kpi5 == null)?'grey-2':(youthPRViolinSepContents.kpi5 >= '0' && youthPRViolinSepContents.kpi5 <= '1.6')?'red':(youthPRViolinSepContents.kpi5 > '1.6' && youthPRViolinSepContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinSepContents.kpi5 > '2.133333333' && youthPRViolinSepContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinSepContents.kpi5 >= '2.666666667' && youthPRViolinSepContents.kpi5 < '3.2')?'green':(youthPRViolinSepContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinSepContents.kpi5}}
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
                              :color="(youthPRViolinOctContents.kpi1 == null)?'grey-2':(youthPRViolinOctContents.kpi1 >= '0' && youthPRViolinOctContents.kpi1 <= '3.6')?'red':(youthPRViolinOctContents.kpi1 > '3.6' && youthPRViolinOctContents.kpi1 <= '4.8')?'orange':(youthPRViolinOctContents.kpi1 > '4.8' && youthPRViolinOctContents.kpi1 < '6')?'yellow-7':(youthPRViolinOctContents.kpi1 >= '6' && youthPRViolinOctContents.kpi1 < '7.2')?'green':(youthPRViolinOctContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinOctContents.kpi2 == null)?'grey-2':(youthPRViolinOctContents.kpi2 >= '0' && youthPRViolinOctContents.kpi2 <= '5.6')?'red':(youthPRViolinOctContents.kpi2 > '5.6' && youthPRViolinOctContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinOctContents.kpi2 > '7.466666667' && youthPRViolinOctContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinOctContents.kpi2 >= '9.333333333' && youthPRViolinOctContents.kpi2 < '11.2')?'green':(youthPRViolinOctContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinOctContents.kpi3 == null)?'grey-2':(youthPRViolinOctContents.kpi3 >= '0' && youthPRViolinOctContents.kpi3 <= '2.4')?'red':(youthPRViolinOctContents.kpi3 > '2.4' && youthPRViolinOctContents.kpi3 <= '3.2')?'orange':(youthPRViolinOctContents.kpi3 > '3.2' && youthPRViolinOctContents.kpi3 < '4')?'yellow-7':(youthPRViolinOctContents.kpi3 >= '4' && youthPRViolinOctContents.kpi3 < '4.8')?'green':(youthPRViolinOctContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinOctContents.kpi4 == null)?'grey-2':(youthPRViolinOctContents.kpi4 >= '0' && youthPRViolinOctContents.kpi4 <= '4.6')?'red':(youthPRViolinOctContents.kpi4 > '4.6' && youthPRViolinOctContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinOctContents.kpi4 > '6.133333333' && youthPRViolinOctContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinOctContents.kpi4 >= '7.666666667' && youthPRViolinOctContents.kpi4 < '9.2')?'green':(youthPRViolinOctContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinOctContents.kpi5 == null)?'grey-2':(youthPRViolinOctContents.kpi5 >= '0' && youthPRViolinOctContents.kpi5 <= '1.6')?'red':(youthPRViolinOctContents.kpi5 > '1.6' && youthPRViolinOctContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinOctContents.kpi5 > '2.133333333' && youthPRViolinOctContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinOctContents.kpi5 >= '2.666666667' && youthPRViolinOctContents.kpi5 < '3.2')?'green':(youthPRViolinOctContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinOctContents.kpi5}}
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
                              :color="(youthPRViolinNovContents.kpi1 == null)?'grey-2':(youthPRViolinNovContents.kpi1 >= '0' && youthPRViolinNovContents.kpi1 <= '3.6')?'red':(youthPRViolinNovContents.kpi1 > '3.6' && youthPRViolinNovContents.kpi1 <= '4.8')?'orange':(youthPRViolinNovContents.kpi1 > '4.8' && youthPRViolinNovContents.kpi1 < '6')?'yellow-7':(youthPRViolinNovContents.kpi1 >= '6' && youthPRViolinNovContents.kpi1 < '7.2')?'green':(youthPRViolinNovContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinNovContents.kpi2 == null)?'grey-2':(youthPRViolinNovContents.kpi2 >= '0' && youthPRViolinNovContents.kpi2 <= '5.6')?'red':(youthPRViolinNovContents.kpi2 > '5.6' && youthPRViolinNovContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinNovContents.kpi2 > '7.466666667' && youthPRViolinNovContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinNovContents.kpi2 >= '9.333333333' && youthPRViolinNovContents.kpi2 < '11.2')?'green':(youthPRViolinNovContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinNovContents.kpi3 == null)?'grey-2':(youthPRViolinNovContents.kpi3 >= '0' && youthPRViolinNovContents.kpi3 <= '2.4')?'red':(youthPRViolinNovContents.kpi3 > '2.4' && youthPRViolinNovContents.kpi3 <= '3.2')?'orange':(youthPRViolinNovContents.kpi3 > '3.2' && youthPRViolinNovContents.kpi3 < '4')?'yellow-7':(youthPRViolinNovContents.kpi3 >= '4' && youthPRViolinNovContents.kpi3 < '4.8')?'green':(youthPRViolinNovContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinNovContents.kpi4 == null)?'grey-2':(youthPRViolinNovContents.kpi4 >= '0' && youthPRViolinNovContents.kpi4 <= '4.6')?'red':(youthPRViolinNovContents.kpi4 > '4.6' && youthPRViolinNovContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinNovContents.kpi4 > '6.133333333' && youthPRViolinNovContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinNovContents.kpi4 >= '7.666666667' && youthPRViolinNovContents.kpi4 < '9.2')?'green':(youthPRViolinNovContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinNovContents.kpi5 == null)?'grey-2':(youthPRViolinNovContents.kpi5 >= '0' && youthPRViolinNovContents.kpi5 <= '1.6')?'red':(youthPRViolinNovContents.kpi5 > '1.6' && youthPRViolinNovContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinNovContents.kpi5 > '2.133333333' && youthPRViolinNovContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinNovContents.kpi5 >= '2.666666667' && youthPRViolinNovContents.kpi5 < '3.2')?'green':(youthPRViolinNovContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinNovContents.kpi5}}
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
                              :color="(youthPRViolinDecContents.kpi1 == null)?'grey-2':(youthPRViolinDecContents.kpi1 >= '0' && youthPRViolinDecContents.kpi1 <= '3.6')?'red':(youthPRViolinDecContents.kpi1 > '3.6' && youthPRViolinDecContents.kpi1 <= '4.8')?'orange':(youthPRViolinDecContents.kpi1 > '4.8' && youthPRViolinDecContents.kpi1 < '6')?'yellow-7':(youthPRViolinDecContents.kpi1 >= '6' && youthPRViolinDecContents.kpi1 < '7.2')?'green':(youthPRViolinDecContents.kpi1 >= '7.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinDecContents.kpi2 == null)?'grey-2':(youthPRViolinDecContents.kpi2 >= '0' && youthPRViolinDecContents.kpi2 <= '5.6')?'red':(youthPRViolinDecContents.kpi2 > '5.6' && youthPRViolinDecContents.kpi2 <= '7.466666667')?'orange':(youthPRViolinDecContents.kpi2 > '7.466666667' && youthPRViolinDecContents.kpi2 < '9.333333333')?'yellow-7':(youthPRViolinDecContents.kpi2 >= '9.333333333' && youthPRViolinDecContents.kpi2 < '11.2')?'green':(youthPRViolinDecContents.kpi2 >= '11.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinDecContents.kpi3 == null)?'grey-2':(youthPRViolinDecContents.kpi3 >= '0' && youthPRViolinDecContents.kpi3 <= '2.4')?'red':(youthPRViolinDecContents.kpi3 > '2.4' && youthPRViolinDecContents.kpi3 <= '3.2')?'orange':(youthPRViolinDecContents.kpi3 > '3.2' && youthPRViolinDecContents.kpi3 < '4')?'yellow-7':(youthPRViolinDecContents.kpi3 >= '4' && youthPRViolinDecContents.kpi3 < '4.8')?'green':(youthPRViolinDecContents.kpi3 >= '4.8'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinDecContents.kpi4 == null)?'grey-2':(youthPRViolinDecContents.kpi4 >= '0' && youthPRViolinDecContents.kpi4 <= '4.6')?'red':(youthPRViolinDecContents.kpi4 > '4.6' && youthPRViolinDecContents.kpi4 <= '6.133333333')?'orange':(youthPRViolinDecContents.kpi4 > '6.133333333' && youthPRViolinDecContents.kpi4 < '7.666666667')?'yellow-7':(youthPRViolinDecContents.kpi4 >= '7.666666667' && youthPRViolinDecContents.kpi4 < '9.2')?'green':(youthPRViolinDecContents.kpi4 >= '9.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPRViolinDecContents.kpi5 == null)?'grey-2':(youthPRViolinDecContents.kpi5 >= '0' && youthPRViolinDecContents.kpi5 <= '1.6')?'red':(youthPRViolinDecContents.kpi5 > '1.6' && youthPRViolinDecContents.kpi5 <= '2.133333333')?'orange':(youthPRViolinDecContents.kpi5 > '2.133333333' && youthPRViolinDecContents.kpi5 < '2.666666667')?'yellow-7':(youthPRViolinDecContents.kpi5 >= '2.666666667' && youthPRViolinDecContents.kpi5 < '3.2')?'green':(youthPRViolinDecContents.kpi5 >= '3.2'?'blue':'grey-2')"
                            >
                            {{youthPRViolinDecContents.kpi5}}
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
              youthPRViolinJanContent: {
                
              },
              youthPRViolinJanContents : [],
              youthPRViolinFebContent: {
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
              youthPRViolinFebContents : [],
              youthPRViolinMarContent: {
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
              youthPRViolinMarContents : [],
              youthPRViolinAprContent: {
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
              youthPRViolinAprContents : [],
              youthPRViolinMayContent: {
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
              youthPRViolinMayContents : [],
              youthPRViolinJunContent: {
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
              youthPRViolinJunContents : [],
              youthPRViolinJulContent: {
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
              youthPRViolinJulContents : [],
              youthPRViolinAugContent: {
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
              youthPRViolinAugContents : [],
              youthPRViolinSepContent: {
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
              youthPRViolinSepContents : [],
              youthPRViolinOctContent: {
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
              youthPRViolinOctContents : [],
              youthPRViolinNovContent: {
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
              youthPRViolinNovContents : [],
              youthPRViolinDecContent: {
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
              youthPRViolinDecContents : []


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
                            {time_period: 'January', expenses: this.youthPRViolinJanContents.expenses, revenues: this.youthPRViolinJanContents.revenues},
                            {time_period: 'February', expenses: this.youthPRViolinFebContents.expenses, revenues: this.youthPRViolinFebContents.revenues},
                            {time_period: 'March', expenses: this.youthPRViolinMarContents.expenses, revenues: this.youthPRViolinMarContents.revenues},
                            {time_period: 'April', expenses: this.youthPRViolinAprContents.expenses, revenues: this.youthPRViolinAprContents.revenues},
                            {time_period: 'May', expenses: this.youthPRViolinMayContents.expenses, revenues: this.youthPRViolinMayContents.revenues},
                            {time_period: 'June', expenses: this.youthPRViolinJunContents.expenses, revenues: this.youthPRViolinJunContents.revenues},
                            {time_period: 'July', expenses: this.youthPRViolinJulContents.expenses, revenues: this.youthPRViolinJulContents.revenues},
                            {time_period: 'August', expenses: this.youthPRViolinAugContents.expenses, revenues: this.youthPRViolinAugContents.revenues},
                            {time_period: 'September', expenses: this.youthPRViolinSepContents.expenses, revenues: this.youthPRViolinSepContents.revenues},
                            {time_period: 'October', expenses: this.youthPRViolinOctContents.expenses, revenues: this.youthPRViolinOctContents.revenues},
                            {time_period: 'November', expenses: this.youthPRViolinNovContents.expenses, revenues: this.youthPRViolinNovContents.revenues},
                            {time_period: 'December',expenses: this.youthPRViolinDecContents.expenses, revenues: this.youthPRViolinDecContents.revenues }
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
                            {months: 'January', kpi1: this.youthPRViolinJanContents.kpi1, kpi2: this.youthPRViolinJanContents.kpi2, kpi3: this.youthPRViolinJanContents.kpi3, kpi4: this.youthPRViolinJanContents.kpi4, kpi5: this.youthPRViolinJanContents.kpi5, uniqueVol: this.youthPRViolinJanContents.uniqueVolunteers, volHours: this.youthPRViolinJanContents.volunteerHours},
                            {months: 'February', kpi1: this.youthPRViolinFebContents.kpi1, kpi2: this.youthPRViolinFebContents.kpi2, kpi3: this.youthPRViolinFebContents.kpi3, kpi4: this.youthPRViolinFebContents.kpi4, kpi5: this.youthPRViolinFebContents.kpi5, uniqueVol: this.youthPRViolinFebContents.uniqueVolunteers, volHours: this.youthPRViolinFebContents.volunteerHours},
                            {months: 'March', kpi1: this.youthPRViolinMarContents.kpi1, kpi2: this.youthPRViolinMarContents.kpi2, kpi3: this.youthPRViolinMarContents.kpi3, kpi4: this.youthPRViolinMarContents.kpi4, kpi5: this.youthPRViolinMarContents.kpi5, uniqueVol: this.youthPRViolinMarContents.uniqueVolunteers, volHours: this.youthPRViolinMarContents.volunteerHours},
                            {months: 'April', kpi1: this.youthPRViolinAprContents.kpi1, kpi2: this.youthPRViolinAprContents.kpi2, kpi3: this.youthPRViolinAprContents.kpi3, kpi4: this.youthPRViolinAprContents.kpi4, kpi5: this.youthPRViolinAprContents.kpi5, uniqueVol: this.youthPRViolinAprContents.uniqueVolunteers, volHours: this.youthPRViolinAprContents.volunteerHours},
                            {months: 'May', kpi1: this.youthPRViolinMayContents.kpi1, kpi2: this.youthPRViolinMayContents.kpi2, kpi3: this.youthPRViolinMayContents.kpi3, kpi4: this.youthPRViolinMayContents.kpi4, kpi5: this.youthPRViolinMayContents.kpi5, uniqueVol: this.youthPRViolinMayContents.uniqueVolunteers, volHours: this.youthPRViolinMayContents.volunteerHours},
                            {months: 'June', kpi1: this.youthPRViolinJunContents.kpi1, kpi2: this.youthPRViolinJunContents.kpi2, kpi3: this.youthPRViolinJunContents.kpi3, kpi4: this.youthPRViolinJunContents.kpi4, kpi5: this.youthPRViolinJunContents.kpi5, uniqueVol: this.youthPRViolinJunContents.uniqueVolunteers, volHours: this.youthPRViolinJunContents.volunteerHours},
                            {months: 'July', kpi1: this.youthPRViolinJulContents.kpi1, kpi2: this.youthPRViolinJulContents.kpi2, kpi3: this.youthPRViolinJulContents.kpi3, kpi4: this.youthPRViolinJulContents.kpi4, kpi5: this.youthPRViolinJulContents.kpi5, uniqueVol: this.youthPRViolinJulContents.uniqueVolunteers, volHours: this.youthPRViolinJulContents.volunteerHours},
                            {months: 'August', kpi1: this.youthPRViolinAugContents.kpi1, kpi2: this.youthPRViolinAugContents.kpi2, kpi3: this.youthPRViolinAugContents.kpi3, kpi4: this.youthPRViolinAugContents.kpi4, kpi5: this.youthPRViolinAugContents.kpi5, uniqueVol: this.youthPRViolinAugContents.uniqueVolunteers, volHours: this.youthPRViolinAugContents.volunteerHours},
                            {months: 'September', kpi1: this.youthPRViolinSepContents.kpi1, kpi2: this.youthPRViolinSepContents.kpi2, kpi3: this.youthPRViolinSepContents.kpi3, kpi4: this.youthPRViolinSepContents.kpi4, kpi5: this.youthPRViolinSepContents.kpi5, uniqueVol: this.youthPRViolinSepContents.uniqueVolunteers, volHours: this.youthPRViolinSepContents.volunteerHours},
                            {months: 'October', kpi1: this.youthPRViolinOctContents.kpi1, kpi2: this.youthPRViolinOctContents.kpi2, kpi3: this.youthPRViolinOctContents.kpi3, kpi4: this.youthPRViolinOctContents.kpi4, kpi5: this.youthPRViolinOctContents.kpi5, uniqueVol: this.youthPRViolinOctContents.uniqueVolunteers, volHours: this.youthPRViolinOctContents.volunteerHours},
                            {months: 'November', kpi1: this.youthPRViolinNovContents.kpi1, kpi2: this.youthPRViolinNovContents.kpi2, kpi3: this.youthPRViolinNovContents.kpi3, kpi4: this.youthPRViolinNovContents.kpi4, kpi5: this.youthPRViolinNovContents.kpi5, uniqueVol: this.youthPRViolinNovContents.uniqueVolunteers, volHours: this.youthPRViolinNovContents.volunteerHours},
                            {months: 'December',kpi1: this.youthPRViolinDecContents.kpi1, kpi2: this.youthPRViolinDecContents.kpi2, kpi3: this.youthPRViolinDecContents.kpi3, kpi4: this.youthPRViolinDecContents.kpi4, kpi5: this.youthPRViolinDecContents.kpi5, uniqueVol: this.youthPRViolinDecContents.uniqueVolunteers, volHours: this.youthPRViolinDecContents.volunteerHours},
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
                            data: [{value: this.youthPRViolinJanContents.budgetUsage}],
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
                                {value: this.youthPRViolinJanContents.perCategory1, name: this.youthPRViolinJanContents.expenseCategory1},
                                {value: this.youthPRViolinJanContents.perCategory2, name: this.youthPRViolinJanContents.expenseCategory2},
                                {value: this.youthPRViolinJanContents.perCategory3, name: this.youthPRViolinJanContents.expenseCategory3},
                                {value: this.youthPRViolinJanContents.perCategory4, name: this.youthPRViolinJanContents.expenseCategory4},
                                {value: this.youthPRViolinJanContents.perCategory5, name: this.youthPRViolinJanContents.expenseCategory5},
                                {value: this.youthPRViolinJanContents.perCategory6, name: this.youthPRViolinJanContents.expenseCategory6}
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
                            data: [{value: this.youthPRViolinFebContents.budgetUsage}],
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
                                {value: this.youthPRViolinFebContents.perCategory1, name: this.youthPRViolinFebContents.expenseCategory1},
                                {value: this.youthPRViolinFebContents.perCategory2, name: this.youthPRViolinFebContents.expenseCategory2},
                                {value: this.youthPRViolinFebContents.perCategory3, name: this.youthPRViolinFebContents.expenseCategory3},
                                {value: this.youthPRViolinFebContents.perCategory4, name: this.youthPRViolinFebContents.expenseCategory4},
                                {value: this.youthPRViolinFebContents.perCategory5, name: this.youthPRViolinFebContents.expenseCategory5},
                                {value: this.youthPRViolinFebContents.perCategory6, name: this.youthPRViolinFebContents.expenseCategory6}
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
                            data: [{value: this.youthPRViolinMarContents.budgetUsage}],
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
                                {value: this.youthPRViolinMarContents.perCategory1, name: this.youthPRViolinMarContents.expenseCategory1},
                                {value: this.youthPRViolinMarContents.perCategory2, name: this.youthPRViolinMarContents.expenseCategory2},
                                {value: this.youthPRViolinMarContents.perCategory3, name: this.youthPRViolinMarContents.expenseCategory3},
                                {value: this.youthPRViolinMarContents.perCategory4, name: this.youthPRViolinMarContents.expenseCategory4},
                                {value: this.youthPRViolinMarContents.perCategory5, name: this.youthPRViolinMarContents.expenseCategory5},
                                {value: this.youthPRViolinMarContents.perCategory6, name: this.youthPRViolinMarContents.expenseCategory6}
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
                            data: [{value: this.youthPRViolinAprContents.budgetUsage}],
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
                                {value: this.youthPRViolinAprContents.perCategory1, name: this.youthPRViolinAprContents.expenseCategory1},
                                {value: this.youthPRViolinAprContents.perCategory2, name: this.youthPRViolinAprContents.expenseCategory2},
                                {value: this.youthPRViolinAprContents.perCategory3, name: this.youthPRViolinAprContents.expenseCategory3},
                                {value: this.youthPRViolinAprContents.perCategory4, name: this.youthPRViolinAprContents.expenseCategory4},
                                {value: this.youthPRViolinAprContents.perCategory5, name: this.youthPRViolinAprContents.expenseCategory5},
                                {value: this.youthPRViolinAprContents.perCategory6, name: this.youthPRViolinAprContents.expenseCategory6}  
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
                            data: [{value: this.youthPRViolinMayContents.budgetUsage}],
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
                                {value: this.youthPRViolinMayContents.perCategory1, name: this.youthPRViolinMayContents.expenseCategory1},
                                {value: this.youthPRViolinMayContents.perCategory2, name: this.youthPRViolinMayContents.expenseCategory2},
                                {value: this.youthPRViolinMayContents.perCategory3, name: this.youthPRViolinMayContents.expenseCategory3},
                                {value: this.youthPRViolinMayContents.perCategory4, name: this.youthPRViolinMayContents.expenseCategory4},
                                {value: this.youthPRViolinMayContents.perCategory5, name: this.youthPRViolinMayContents.expenseCategory5},
                                {value: this.youthPRViolinMayContents.perCategory6, name: this.youthPRViolinMayContents.expenseCategory6}  
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
                            data: [{value: this.youthPRViolinJunContents.budgetUsage}],
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
                                {value: this.youthPRViolinJunContents.perCategory1, name: this.youthPRViolinJunContents.expenseCategory1},
                                {value: this.youthPRViolinJunContents.perCategory2, name: this.youthPRViolinJunContents.expenseCategory2},
                                {value: this.youthPRViolinJunContents.perCategory3, name: this.youthPRViolinJunContents.expenseCategory3},
                                {value: this.youthPRViolinJunContents.perCategory4, name: this.youthPRViolinJunContents.expenseCategory4},
                                {value: this.youthPRViolinJunContents.perCategory5, name: this.youthPRViolinJunContents.expenseCategory5},
                                {value: this.youthPRViolinJunContents.perCategory6, name: this.youthPRViolinJunContents.expenseCategory6}  
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
                            data: [{value: this.youthPRViolinJulContents.budgetUsage}],
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
                                {value: this.youthPRViolinJulContents.perCategory1, name: this.youthPRViolinJulContents.expenseCategory1},
                                {value: this.youthPRViolinJulContents.perCategory2, name: this.youthPRViolinJulContents.expenseCategory2},
                                {value: this.youthPRViolinJulContents.perCategory3, name: this.youthPRViolinJulContents.expenseCategory3},
                                {value: this.youthPRViolinJulContents.perCategory4, name: this.youthPRViolinJulContents.expenseCategory4},
                                {value: this.youthPRViolinJulContents.perCategory5, name: this.youthPRViolinJulContents.expenseCategory5},
                                {value: this.youthPRViolinJulContents.perCategory6, name: this.youthPRViolinJulContents.expenseCategory6}  
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
                            data: [{value: this.youthPRViolinAugContents.budgetUsage}],
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
                                {value: this.youthPRViolinAugContents.perCategory1, name: this.youthPRViolinAugContents.expenseCategory1},
                                {value: this.youthPRViolinAugContents.perCategory2, name: this.youthPRViolinAugContents.expenseCategory2},
                                {value: this.youthPRViolinAugContents.perCategory3, name: this.youthPRViolinAugContents.expenseCategory3},
                                {value: this.youthPRViolinAugContents.perCategory4, name: this.youthPRViolinAugContents.expenseCategory4},
                                {value: this.youthPRViolinAugContents.perCategory5, name: this.youthPRViolinAugContents.expenseCategory5},
                                {value: this.youthPRViolinAugContents.perCategory6, name: this.youthPRViolinAugContents.expenseCategory6}  
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
                            data: [{value: this.youthPRViolinSepContents.budgetUsage}],
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
                                {value: this.youthPRViolinSepContents.perCategory1, name: this.youthPRViolinSepContents.expenseCategory1},
                                {value: this.youthPRViolinSepContents.perCategory2, name: this.youthPRViolinSepContents.expenseCategory2},
                                {value: this.youthPRViolinSepContents.perCategory3, name: this.youthPRViolinSepContents.expenseCategory3},
                                {value: this.youthPRViolinSepContents.perCategory4, name: this.youthPRViolinSepContents.expenseCategory4},
                                {value: this.youthPRViolinSepContents.perCategory5, name: this.youthPRViolinSepContents.expenseCategory5},
                                {value: this.youthPRViolinSepContents.perCategory6, name: this.youthPRViolinSepContents.expenseCategory6}  
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
                            data: [{value: this.youthPRViolinOctContents.budgetUsage}],
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
                                {value: this.youthPRViolinOctContents.perCategory1, name: this.youthPRViolinOctContents.expenseCategory1},
                                {value: this.youthPRViolinOctContents.perCategory2, name: this.youthPRViolinOctContents.expenseCategory2},
                                {value: this.youthPRViolinOctContents.perCategory3, name: this.youthPRViolinOctContents.expenseCategory3},
                                {value: this.youthPRViolinOctContents.perCategory4, name: this.youthPRViolinOctContents.expenseCategory4},
                                {value: this.youthPRViolinOctContents.perCategory5, name: this.youthPRViolinOctContents.expenseCategory5},
                                {value: this.youthPRViolinOctContents.perCategory6, name: this.youthPRViolinOctContents.expenseCategory6}  
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
                            data: [{value: this.youthPRViolinNovContents.budgetUsage}],
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
                                {value: this.youthPRViolinNovContents.perCategory1, name: this.youthPRViolinNovContents.expenseCategory1},
                                {value: this.youthPRViolinNovContents.perCategory2, name: this.youthPRViolinNovContents.expenseCategory2},
                                {value: this.youthPRViolinNovContents.perCategory3, name: this.youthPRViolinNovContents.expenseCategory3},
                                {value: this.youthPRViolinNovContents.perCategory4, name: this.youthPRViolinNovContents.expenseCategory4},
                                {value: this.youthPRViolinNovContents.perCategory5, name: this.youthPRViolinNovContents.expenseCategory5},
                                {value: this.youthPRViolinNovContents.perCategory6, name: this.youthPRViolinNovContents.expenseCategory6}  
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
                            data: [{value: this.youthPRViolinDecContents.budgetUsage}],
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
                                {value: this.youthPRViolinDecContents.perCategory1, name: this.youthPRViolinDecContents.expenseCategory1},
                                {value: this.youthPRViolinDecContents.perCategory2, name: this.youthPRViolinDecContents.expenseCategory2},
                                {value: this.youthPRViolinDecContents.perCategory3, name: this.youthPRViolinDecContents.expenseCategory3},
                                {value: this.youthPRViolinDecContents.perCategory4, name: this.youthPRViolinDecContents.expenseCategory4},
                                {value: this.youthPRViolinDecContents.perCategory5, name: this.youthPRViolinDecContents.expenseCategory5},
                                {value: this.youthPRViolinDecContents.perCategory6, name: this.youthPRViolinDecContents.expenseCategory6}
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
            var docyouthPRViolinJanRef = db.collection("youthPRViolin").doc("january");

            docyouthPRViolinJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.youthPRViolinJanContents = doc.data();
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
            var docyouthPRViolinFebRef = db.collection("youthPRViolin").doc("february");

            docyouthPRViolinFebRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.youthPRViolinFebContents = doc.data();
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
            var docyouthPRViolinMarRef = db.collection("youthPRViolin").doc("march");

            docyouthPRViolinMarRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.youthPRViolinMarContents = doc.data();
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
            var docyouthPRViolinAprRef = db.collection("youthPRViolin").doc("april1");

            docyouthPRViolinAprRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.youthPRViolinAprContents = doc.data();
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
            var docyouthPRViolinMayRef = db.collection("youthPRViolin").doc("may");

            docyouthPRViolinMayRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.youthPRViolinMayContents = doc.data();
                    this.totalExpenseMay();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    JUNE
            var docyouthPRViolinJunRef = db.collection("youthPRViolin").doc("june");

            docyouthPRViolinJunRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.youthPRViolinJunContents = doc.data();
                    this.totalExpenseJun();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    JULY
            var docyouthPRViolinJulRef = db.collection("youthPRViolin").doc("july");

            docyouthPRViolinJulRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.youthPRViolinJulContents = doc.data();
                    this.totalExpenseJul();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    AUGUST
            var docyouthPRViolinAugRef = db.collection("youthPRViolin").doc("august");

            docyouthPRViolinAugRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.youthPRViolinAugContents = doc.data();
                    this.totalExpenseAug();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    SEPTEMBER
            var docyouthPRViolinSepRef = db.collection("youthPRViolin").doc("september");

            docyouthPRViolinSepRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.youthPRViolinSepContents = doc.data();
                    this.totalExpenseSep();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    OCTOBER
            var docyouthPRViolinOctRef = db.collection("youthPRViolin").doc("october");

            docyouthPRViolinOctRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.youthPRViolinOctContents = doc.data();
                    this.totalExpenseOct();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    NOVEMBER
            var docyouthPRViolinNovRef = db.collection("youthPRViolin").doc("november");

            docyouthPRViolinNovRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.youthPRViolinNovContents = doc.data();
                    this.totalExpenseNov();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    DECEMBER
            var docyouthPRViolinDecRef = db.collection("youthPRViolin").doc("december");

            docyouthPRViolinDecRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.youthPRViolinDecContents = doc.data();
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
              return this.youthPRViolinJanContents.expenses = getRealValue(this.youthPRViolinJanContents.perCategory1) + getRealValue(this.youthPRViolinJanContents.perCategory2) + getRealValue(this.youthPRViolinJanContents.perCategory3) + getRealValue(this.youthPRViolinJanContents.perCategory4) + getRealValue(this.youthPRViolinJanContents.perCategory5) + getRealValue(this.youthPRViolinJanContents.perCategory6)
              
            },
            cumulativeBudgetUsageJan(){
              const getRealValue = (val) => +val || val;
              return this.youthPRViolinJanContents.budgetUsage = ((getRealValue(this.youthPRViolinJanContents.expenses) / getRealValue(this.youthPRViolinJanContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseFeb(){
              const getRealValue = (val) => +val || val;
              return this.youthPRViolinFebContents.expenses = getRealValue(this.youthPRViolinFebContents.perCategory1) + getRealValue(this.youthPRViolinFebContents.perCategory2) + getRealValue(this.youthPRViolinFebContents.perCategory3) + getRealValue(this.youthPRViolinFebContents.perCategory4) + getRealValue(this.youthPRViolinFebContents.perCategory5) + getRealValue(this.youthPRViolinFebContents.perCategory6)
            },
            cumulativeBudgetUsageFeb(){
              const getRealValue = (val) => +val || val;
              return this.youthPRViolinFebContents.budgetUsage = (((getRealValue(this.youthPRViolinFebContents.expenses) + getRealValue(this.youthPRViolinJanContents.expenses)) / getRealValue(this.youthPRViolinFebContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseMar(){
              const getRealValue = (val) => +val || val;
              return this.youthPRViolinMarContents.expenses = getRealValue(this.youthPRViolinMarContents.perCategory1) + getRealValue(this.youthPRViolinMarContents.perCategory2) + getRealValue(this.youthPRViolinMarContents.perCategory3) + getRealValue(this.youthPRViolinMarContents.perCategory4) + getRealValue(this.youthPRViolinMarContents.perCategory5) + getRealValue(this.youthPRViolinMarContents.perCategory6)
            },
            cumulativeBudgetUsageMar(){
              const getRealValue = (val) => +val || val;
              return this.youthPRViolinMarContents.budgetUsage = (((getRealValue(this.youthPRViolinMarContents.expenses) + getRealValue(this.youthPRViolinFebContents.expenses) + getRealValue(this.youthPRViolinJanContents.expenses)) / getRealValue(this.youthPRViolinMarContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseApr(){
              const getRealValue = (val) => +val || val;
              return this.youthPRViolinAprContents.expenses = getRealValue(this.youthPRViolinAprContents.perCategory1) + getRealValue(this.youthPRViolinAprContents.perCategory2) + getRealValue(this.youthPRViolinAprContents.perCategory3) + getRealValue(this.youthPRViolinAprContents.perCategory4) + getRealValue(this.youthPRViolinAprContents.perCategory5) + getRealValue(this.youthPRViolinAprContents.perCategory6)
            },
            cumulativeBudgetUsageApr(){
              const getRealValue = (val) => +val || val;
              return this.youthPRViolinAprContents.budgetUsage = (((getRealValue(this.youthPRViolinAprContents.expenses) + getRealValue(this.youthPRViolinMarContents.expenses) + getRealValue(this.youthPRViolinFebContents.expenses) + getRealValue(this.youthPRViolinJanContents.expenses)) / getRealValue(this.youthPRViolinAprContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseMay(){
              const getRealValue = (val) => +val || val;
              return this.youthPRViolinMayContents.expenses = getRealValue(this.youthPRViolinMayContents.perCategory1) + getRealValue(this.youthPRViolinMayContents.perCategory2) + getRealValue(this.youthPRViolinMayContents.perCategory3) + getRealValue(this.youthPRViolinMayContents.perCategory4) + getRealValue(this.youthPRViolinMayContents.perCategory5) + getRealValue(this.youthPRViolinMayContents.perCategory6)
            },
            cumulativeBudgetUsageMay(){
              const getRealValue = (val) => +val || val;
              return this.youthPRViolinMayContents.budgetUsage = (((getRealValue(this.youthPRViolinMayContents.expenses) + getRealValue(this.youthPRViolinAprContents.expenses) + getRealValue(this.youthPRViolinMarContents.expenses) + getRealValue(this.youthPRViolinFebContents.expenses) + getRealValue(this.youthPRViolinJanContents.expenses)) / getRealValue(this.youthPRViolinMayContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseJun(){
              const getRealValue = (val) => +val || val;
              return this.youthPRViolinJunContents.expenses = getRealValue(this.youthPRViolinJunContents.perCategory1) + getRealValue(this.youthPRViolinJunContents.perCategory2) + getRealValue(this.youthPRViolinJunContents.perCategory3) + getRealValue(this.youthPRViolinJunContents.perCategory4) + getRealValue(this.youthPRViolinJunContents.perCategory5) + getRealValue(this.youthPRViolinJunContents.perCategory6)
            },
            cumulativeBudgetUsageJun(){
              const getRealValue = (val) => +val || val;
              return this.youthPRViolinJunContents.budgetUsage = (((getRealValue(this.youthPRViolinJunContents.expenses) + getRealValue(this.youthPRViolinMayContents.expenses) + getRealValue(this.youthPRViolinAprContents.expenses) + getRealValue(this.youthPRViolinMarContents.expenses) + getRealValue(this.youthPRViolinFebContents.expenses) + getRealValue(this.youthPRViolinJanContents.expenses)) / getRealValue(this.youthPRViolinJunContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseJul(){
              const getRealValue = (val) => +val || val;
              return this.youthPRViolinJulContents.expenses = getRealValue(this.youthPRViolinJulContents.perCategory1) + getRealValue(this.youthPRViolinJulContents.perCategory2) + getRealValue(this.youthPRViolinJulContents.perCategory3) + getRealValue(this.youthPRViolinJulContents.perCategory4) + getRealValue(this.youthPRViolinJulContents.perCategory5) + getRealValue(this.youthPRViolinJulContents.perCategory6)
            },
            cumulativeBudgetUsageJul(){
              const getRealValue = (val) => +val || val;
              return this.youthPRViolinJulContents.budgetUsage = (((getRealValue(this.youthPRViolinJulContents.expenses) + getRealValue(this.youthPRViolinJunContents.expenses) + getRealValue(this.youthPRViolinMayContents.expenses) + getRealValue(this.youthPRViolinAprContents.expenses) + getRealValue(this.youthPRViolinMarContents.expenses) + getRealValue(this.youthPRViolinFebContents.expenses) + getRealValue(this.youthPRViolinJanContents.expenses)) / getRealValue(this.youthPRViolinJulContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseAug(){
              const getRealValue = (val) => +val || val;
              return this.youthPRViolinAugContents.expenses = getRealValue(this.youthPRViolinAugContents.perCategory1) + getRealValue(this.youthPRViolinAugContents.perCategory2) + getRealValue(this.youthPRViolinAugContents.perCategory3) + getRealValue(this.youthPRViolinAugContents.perCategory4) + getRealValue(this.youthPRViolinAugContents.perCategory5) + getRealValue(this.youthPRViolinAugContents.perCategory6)
            },
            cumulativeBudgetUsageAug(){
              const getRealValue = (val) => +val || val;
              return this.youthPRViolinAugContents.budgetUsage = (((getRealValue(this.youthPRViolinAugContents.expenses) + getRealValue(this.youthPRViolinJulContents.expenses) + getRealValue(this.youthPRViolinJunContents.expenses) + getRealValue(this.youthPRViolinMayContents.expenses) + getRealValue(this.youthPRViolinAprContents.expenses) + getRealValue(this.youthPRViolinMarContents.expenses) + getRealValue(this.youthPRViolinFebContents.expenses) + getRealValue(this.youthPRViolinJanContents.expenses)) / getRealValue(this.youthPRViolinAugContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseSep(){
              const getRealValue = (val) => +val || val;
              return this.youthPRViolinSepContents.expenses = getRealValue(this.youthPRViolinSepContents.perCategory1) + getRealValue(this.youthPRViolinSepContents.perCategory2) + getRealValue(this.youthPRViolinSepContents.perCategory3) + getRealValue(this.youthPRViolinSepContents.perCategory4) + getRealValue(this.youthPRViolinSepContents.perCategory5) + getRealValue(this.youthPRViolinSepContents.perCategory6)
            },
            cumulativeBudgetUsageSep(){
              const getRealValue = (val) => +val || val;
              return this.youthPRViolinSepContents.budgetUsage = (((getRealValue(this.youthPRViolinSepContents.expenses) + getRealValue(this.youthPRViolinAugContents.expenses) + getRealValue(this.youthPRViolinJulContents.expenses) + getRealValue(this.youthPRViolinJunContents.expenses) + getRealValue(this.youthPRViolinMayContents.expenses) + getRealValue(this.youthPRViolinAprContents.expenses) + getRealValue(this.youthPRViolinMarContents.expenses) + getRealValue(this.youthPRViolinFebContents.expenses) + getRealValue(this.youthPRViolinJanContents.expenses)) / getRealValue(this.youthPRViolinSepContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseOct(){
              const getRealValue = (val) => +val || val;
              return this.youthPRViolinOctContents.expenses = getRealValue(this.youthPRViolinOctContents.perCategory1) + getRealValue(this.youthPRViolinOctContents.perCategory2) + getRealValue(this.youthPRViolinOctContents.perCategory3) + getRealValue(this.youthPRViolinOctContents.perCategory4) + getRealValue(this.youthPRViolinOctContents.perCategory5) + getRealValue(this.youthPRViolinOctContents.perCategory6)
            },
            cumulativeBudgetUsageOct(){
              const getRealValue = (val) => +val || val;
              return this.youthPRViolinOctContents.budgetUsage = (((getRealValue(this.youthPRViolinOctContents.expenses) + getRealValue(this.youthPRViolinSepContents.expenses) + getRealValue(this.youthPRViolinAugContents.expenses) + getRealValue(this.youthPRViolinJulContents.expenses) + getRealValue(this.youthPRViolinJunContents.expenses) + getRealValue(this.youthPRViolinMayContents.expenses) + getRealValue(this.youthPRViolinAprContents.expenses) + getRealValue(this.youthPRViolinMarContents.expenses) + getRealValue(this.youthPRViolinFebContents.expenses) + getRealValue(this.youthPRViolinJanContents.expenses)) / getRealValue(this.youthPRViolinOctContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseNov(){
              const getRealValue = (val) => +val || val;
              return this.youthPRViolinNovContents.expenses = getRealValue(this.youthPRViolinNovContents.perCategory1) + getRealValue(this.youthPRViolinNovContents.perCategory2) + getRealValue(this.youthPRViolinNovContents.perCategory3) + getRealValue(this.youthPRViolinNovContents.perCategory4) + getRealValue(this.youthPRViolinNovContents.perCategory5) + getRealValue(this.youthPRViolinNovContents.perCategory6)
            },
            cumulativeBudgetUsageNov(){
              const getRealValue = (val) => +val || val;
              return this.youthPRViolinNovContents.budgetUsage = (((getRealValue(this.youthPRViolinNovContents.expenses) + getRealValue(this.youthPRViolinOctContents.expenses) + getRealValue(this.youthPRViolinSepContents.expenses) + getRealValue(this.youthPRViolinAugContents.expenses) + getRealValue(this.youthPRViolinJulContents.expenses) + getRealValue(this.youthPRViolinJunContents.expenses) + getRealValue(this.youthPRViolinMayContents.expenses) + getRealValue(this.youthPRViolinAprContents.expenses) + getRealValue(this.youthPRViolinMarContents.expenses) + getRealValue(this.youthPRViolinFebContents.expenses) + getRealValue(this.youthPRViolinJanContents.expenses)) / getRealValue(this.youthPRViolinNovContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseDec(){
              const getRealValue = (val) => +val || val;
              return this.youthPRViolinDecContents.expenses = getRealValue(this.youthPRViolinDecContents.perCategory1) + getRealValue(this.youthPRViolinDecContents.perCategory2) + getRealValue(this.youthPRViolinDecContents.perCategory3) + getRealValue(this.youthPRViolinDecContents.perCategory4) + getRealValue(this.youthPRViolinDecContents.perCategory5) + getRealValue(this.youthPRViolinDecContents.perCategory6)
            },
            cumulativeBudgetUsageDec(){
              const getRealValue = (val) => +val || val;
              return this.youthPRViolinDecContents.budgetUsage = (((getRealValue(this.youthPRViolinDecContents.expenses) + getRealValue(this.youthPRViolinNovContents.expenses) + getRealValue(this.youthPRViolinOctContents.expenses) + getRealValue(this.youthPRViolinSepContents.expenses) + getRealValue(this.youthPRViolinAugContents.expenses) + getRealValue(this.youthPRViolinJulContents.expenses) + getRealValue(this.youthPRViolinJunContents.expenses) + getRealValue(this.youthPRViolinMayContents.expenses) + getRealValue(this.youthPRViolinAprContents.expenses) + getRealValue(this.youthPRViolinMarContents.expenses) + getRealValue(this.youthPRViolinFebContents.expenses) + getRealValue(this.youthPRViolinJanContents.expenses)) / getRealValue(this.youthPRViolinDecContents.actualBudget))*100).toFixed(2)
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
