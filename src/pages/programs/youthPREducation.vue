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
                              :color="(youthPREducationJanContents.kpi1 == null)?'grey-2':(youthPREducationJanContents.kpi1 >= '0' && youthPREducationJanContents.kpi1 <= '5.8')?'red':(youthPREducationJanContents.kpi1 > '5.8' && youthPREducationJanContents.kpi1 <= '7.733333333')?'orange':(youthPREducationJanContents.kpi1 > '7.733333333' && youthPREducationJanContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationJanContents.kpi1 >= '9.666666667' && youthPREducationJanContents.kpi1 < '11.6')?'green':(youthPREducationJanContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJanContents.kpi2 == null)?'grey-2':(youthPREducationJanContents.kpi2 >= '0' && youthPREducationJanContents.kpi2 <= '18.2')?'red':(youthPREducationJanContents.kpi2 > '18.2' && youthPREducationJanContents.kpi2 <= '24.26666667')?'orange':(youthPREducationJanContents.kpi2 > '24.26666667' && youthPREducationJanContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationJanContents.kpi2 >= '30.33333333' && youthPREducationJanContents.kpi2 < '36.4')?'green':(youthPREducationJanContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJanContents.kpi3 == null)?'grey-2':(youthPREducationJanContents.kpi3 >= '0' && youthPREducationJanContents.kpi3 <= '2.8')?'red':(youthPREducationJanContents.kpi3 > '2.8' && youthPREducationJanContents.kpi3 <= '3.733333333')?'orange':(youthPREducationJanContents.kpi3 > '3.733333333' && youthPREducationJanContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationJanContents.kpi3 >= '4.666666667' && youthPREducationJanContents.kpi3 < '5.6')?'green':(youthPREducationJanContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJanContents.kpi4 == null)?'grey-2':(youthPREducationJanContents.kpi4 >= '0' && youthPREducationJanContents.kpi4 <= '10.4')?'red':(youthPREducationJanContents.kpi4 > '10.4' && youthPREducationJanContents.kpi4 <= '13.86666667')?'orange':(youthPREducationJanContents.kpi4 > '13.86666667' && youthPREducationJanContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationJanContents.kpi4 >= '17.33333333' && youthPREducationJanContents.kpi4 < '20.8')?'green':(youthPREducationJanContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJanContents.kpi5 == null)?'grey-2':(youthPREducationJanContents.kpi5 >= '0' && youthPREducationJanContents.kpi5 <= '4.8')?'red':(youthPREducationJanContents.kpi5 > '4.8' && youthPREducationJanContents.kpi5 <= '6.4')?'orange':(youthPREducationJanContents.kpi5 > '6.4' && youthPREducationJanContents.kpi5 < '8')?'yellow-7':(youthPREducationJanContents.kpi5 >= '8' && youthPREducationJanContents.kpi5 < '9.6')?'green':(youthPREducationJanContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi5}}
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
                              :color="(youthPREducationFebContents.kpi1 == null)?'grey-2':(youthPREducationFebContents.kpi1 >= '0' && youthPREducationFebContents.kpi1 <= '5.8')?'red':(youthPREducationFebContents.kpi1 > '5.8' && youthPREducationFebContents.kpi1 <= '7.733333333')?'orange':(youthPREducationFebContents.kpi1 > '7.733333333' && youthPREducationFebContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationFebContents.kpi1 >= '9.666666667' && youthPREducationFebContents.kpi1 < '11.6')?'green':(youthPREducationFebContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationFebContents.kpi2 == null)?'grey-2':(youthPREducationFebContents.kpi2 >= '0' && youthPREducationFebContents.kpi2 <= '18.2')?'red':(youthPREducationFebContents.kpi2 > '18.2' && youthPREducationFebContents.kpi2 <= '24.26666667')?'orange':(youthPREducationFebContents.kpi2 > '24.26666667' && youthPREducationFebContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationFebContents.kpi2 >= '30.33333333' && youthPREducationFebContents.kpi2 < '36.4')?'green':(youthPREducationFebContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationFebContents.kpi3 == null)?'grey-2':(youthPREducationFebContents.kpi3 >= '0' && youthPREducationFebContents.kpi3 <= '2.8')?'red':(youthPREducationFebContents.kpi3 > '2.8' && youthPREducationFebContents.kpi3 <= '3.733333333')?'orange':(youthPREducationFebContents.kpi3 > '3.733333333' && youthPREducationFebContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationFebContents.kpi3 >= '4.666666667' && youthPREducationFebContents.kpi3 < '5.6')?'green':(youthPREducationFebContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationFebContents.kpi4 == null)?'grey-2':(youthPREducationFebContents.kpi4 >= '0' && youthPREducationFebContents.kpi4 <= '10.4')?'red':(youthPREducationFebContents.kpi4 > '10.4' && youthPREducationFebContents.kpi4 <= '13.86666667')?'orange':(youthPREducationFebContents.kpi4 > '13.86666667' && youthPREducationFebContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationFebContents.kpi4 >= '17.33333333' && youthPREducationFebContents.kpi4 < '20.8')?'green':(youthPREducationFebContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationFebContents.kpi5 == null)?'grey-2':(youthPREducationFebContents.kpi5 >= '0' && youthPREducationFebContents.kpi5 <= '4.8')?'red':(youthPREducationFebContents.kpi5 > '4.8' && youthPREducationFebContents.kpi5 <= '6.4')?'orange':(youthPREducationFebContents.kpi5 > '6.4' && youthPREducationFebContents.kpi5 < '8')?'yellow-7':(youthPREducationFebContents.kpi5 >= '8' && youthPREducationFebContents.kpi5 < '9.6')?'green':(youthPREducationFebContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi5}}
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
                              :color="(youthPREducationMarContents.kpi1 == null)?'grey-2':(youthPREducationMarContents.kpi1 >= '0' && youthPREducationMarContents.kpi1 <= '5.8')?'red':(youthPREducationMarContents.kpi1 > '5.8' && youthPREducationMarContents.kpi1 <= '7.733333333')?'orange':(youthPREducationMarContents.kpi1 > '7.733333333' && youthPREducationMarContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationMarContents.kpi1 >= '9.666666667' && youthPREducationMarContents.kpi1 < '11.6')?'green':(youthPREducationMarContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMarContents.kpi2 == null)?'grey-2':(youthPREducationMarContents.kpi2 >= '0' && youthPREducationMarContents.kpi2 <= '18.2')?'red':(youthPREducationMarContents.kpi2 > '18.2' && youthPREducationMarContents.kpi2 <= '24.26666667')?'orange':(youthPREducationMarContents.kpi2 > '24.26666667' && youthPREducationMarContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationMarContents.kpi2 >= '30.33333333' && youthPREducationMarContents.kpi2 < '36.4')?'green':(youthPREducationMarContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMarContents.kpi3 == null)?'grey-2':(youthPREducationMarContents.kpi3 >= '0' && youthPREducationMarContents.kpi3 <= '2.8')?'red':(youthPREducationMarContents.kpi3 > '2.8' && youthPREducationMarContents.kpi3 <= '3.733333333')?'orange':(youthPREducationMarContents.kpi3 > '3.733333333' && youthPREducationMarContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationMarContents.kpi3 >= '4.666666667' && youthPREducationMarContents.kpi3 < '5.6')?'green':(youthPREducationMarContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMarContents.kpi4 == null)?'grey-2':(youthPREducationMarContents.kpi4 >= '0' && youthPREducationMarContents.kpi4 <= '10.4')?'red':(youthPREducationMarContents.kpi4 > '10.4' && youthPREducationMarContents.kpi4 <= '13.86666667')?'orange':(youthPREducationMarContents.kpi4 > '13.86666667' && youthPREducationMarContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationMarContents.kpi4 >= '17.33333333' && youthPREducationMarContents.kpi4 < '20.8')?'green':(youthPREducationMarContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMarContents.kpi5 == null)?'grey-2':(youthPREducationMarContents.kpi5 >= '0' && youthPREducationMarContents.kpi5 <= '4.8')?'red':(youthPREducationMarContents.kpi5 > '4.8' && youthPREducationMarContents.kpi5 <= '6.4')?'orange':(youthPREducationMarContents.kpi5 > '6.4' && youthPREducationMarContents.kpi5 < '8')?'yellow-7':(youthPREducationMarContents.kpi5 >= '8' && youthPREducationMarContents.kpi5 < '9.6')?'green':(youthPREducationMarContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi5}}
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
                              :color="(youthPREducationAprContents.kpi1 == null)?'grey-2':(youthPREducationAprContents.kpi1 >= '0' && youthPREducationAprContents.kpi1 <= '5.8')?'red':(youthPREducationAprContents.kpi1 > '5.8' && youthPREducationAprContents.kpi1 <= '7.733333333')?'orange':(youthPREducationAprContents.kpi1 > '7.733333333' && youthPREducationAprContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationAprContents.kpi1 >= '9.666666667' && youthPREducationAprContents.kpi1 < '11.6')?'green':(youthPREducationAprContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAprContents.kpi2 == null)?'grey-2':(youthPREducationAprContents.kpi2 >= '0' && youthPREducationAprContents.kpi2 <= '18.2')?'red':(youthPREducationAprContents.kpi2 > '18.2' && youthPREducationAprContents.kpi2 <= '24.26666667')?'orange':(youthPREducationAprContents.kpi2 > '24.26666667' && youthPREducationAprContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationAprContents.kpi2 >= '30.33333333' && youthPREducationAprContents.kpi2 < '36.4')?'green':(youthPREducationAprContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAprContents.kpi3 == null)?'grey-2':(youthPREducationAprContents.kpi3 >= '0' && youthPREducationAprContents.kpi3 <= '2.8')?'red':(youthPREducationAprContents.kpi3 > '2.8' && youthPREducationAprContents.kpi3 <= '3.733333333')?'orange':(youthPREducationAprContents.kpi3 > '3.733333333' && youthPREducationAprContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationAprContents.kpi3 >= '4.666666667' && youthPREducationAprContents.kpi3 < '5.6')?'green':(youthPREducationAprContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAprContents.kpi4 == null)?'grey-2':(youthPREducationAprContents.kpi4 >= '0' && youthPREducationAprContents.kpi4 <= '10.4')?'red':(youthPREducationAprContents.kpi4 > '10.4' && youthPREducationAprContents.kpi4 <= '13.86666667')?'orange':(youthPREducationAprContents.kpi4 > '13.86666667' && youthPREducationAprContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationAprContents.kpi4 >= '17.33333333' && youthPREducationAprContents.kpi4 < '20.8')?'green':(youthPREducationAprContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAprContents.kpi5 == null)?'grey-2':(youthPREducationAprContents.kpi5 >= '0' && youthPREducationAprContents.kpi5 <= '4.8')?'red':(youthPREducationAprContents.kpi5 > '4.8' && youthPREducationAprContents.kpi5 <= '6.4')?'orange':(youthPREducationAprContents.kpi5 > '6.4' && youthPREducationAprContents.kpi5 < '8')?'yellow-7':(youthPREducationAprContents.kpi5 >= '8' && youthPREducationAprContents.kpi5 < '9.6')?'green':(youthPREducationAprContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi5}}
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
                              :color="(youthPREducationMayContents.kpi1 == null)?'grey-2':(youthPREducationMayContents.kpi1 >= '0' && youthPREducationMayContents.kpi1 <= '5.8')?'red':(youthPREducationMayContents.kpi1 > '5.8' && youthPREducationMayContents.kpi1 <= '7.733333333')?'orange':(youthPREducationMayContents.kpi1 > '7.733333333' && youthPREducationMayContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationMayContents.kpi1 >= '9.666666667' && youthPREducationMayContents.kpi1 < '11.6')?'green':(youthPREducationMayContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMayContents.kpi2 == null)?'grey-2':(youthPREducationMayContents.kpi2 >= '0' && youthPREducationMayContents.kpi2 <= '18.2')?'red':(youthPREducationMayContents.kpi2 > '18.2' && youthPREducationMayContents.kpi2 <= '24.26666667')?'orange':(youthPREducationMayContents.kpi2 > '24.26666667' && youthPREducationMayContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationMayContents.kpi2 >= '30.33333333' && youthPREducationMayContents.kpi2 < '36.4')?'green':(youthPREducationMayContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMayContents.kpi3 == null)?'grey-2':(youthPREducationMayContents.kpi3 >= '0' && youthPREducationMayContents.kpi3 <= '2.8')?'red':(youthPREducationMayContents.kpi3 > '2.8' && youthPREducationMayContents.kpi3 <= '3.733333333')?'orange':(youthPREducationMayContents.kpi3 > '3.733333333' && youthPREducationMayContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationMayContents.kpi3 >= '4.666666667' && youthPREducationMayContents.kpi3 < '5.6')?'green':(youthPREducationMayContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMayContents.kpi4 == null)?'grey-2':(youthPREducationMayContents.kpi4 >= '0' && youthPREducationMayContents.kpi4 <= '10.4')?'red':(youthPREducationMayContents.kpi4 > '10.4' && youthPREducationMayContents.kpi4 <= '13.86666667')?'orange':(youthPREducationMayContents.kpi4 > '13.86666667' && youthPREducationMayContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationMayContents.kpi4 >= '17.33333333' && youthPREducationMayContents.kpi4 < '20.8')?'green':(youthPREducationMayContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMayContents.kpi5 == null)?'grey-2':(youthPREducationMayContents.kpi5 >= '0' && youthPREducationMayContents.kpi5 <= '4.8')?'red':(youthPREducationMayContents.kpi5 > '4.8' && youthPREducationMayContents.kpi5 <= '6.4')?'orange':(youthPREducationMayContents.kpi5 > '6.4' && youthPREducationMayContents.kpi5 < '8')?'yellow-7':(youthPREducationMayContents.kpi5 >= '8' && youthPREducationMayContents.kpi5 < '9.6')?'green':(youthPREducationMayContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi5}}
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
                              :color="(youthPREducationJunContents.kpi1 == null)?'grey-2':(youthPREducationJunContents.kpi1 >= '0' && youthPREducationJunContents.kpi1 <= '5.8')?'red':(youthPREducationJunContents.kpi1 > '5.8' && youthPREducationJunContents.kpi1 <= '7.733333333')?'orange':(youthPREducationJunContents.kpi1 > '7.733333333' && youthPREducationJunContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationJunContents.kpi1 >= '9.666666667' && youthPREducationJunContents.kpi1 < '11.6')?'green':(youthPREducationJunContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJunContents.kpi2 == null)?'grey-2':(youthPREducationJunContents.kpi2 >= '0' && youthPREducationJunContents.kpi2 <= '18.2')?'red':(youthPREducationJunContents.kpi2 > '18.2' && youthPREducationJunContents.kpi2 <= '24.26666667')?'orange':(youthPREducationJunContents.kpi2 > '24.26666667' && youthPREducationJunContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationJunContents.kpi2 >= '30.33333333' && youthPREducationJunContents.kpi2 < '36.4')?'green':(youthPREducationJunContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJunContents.kpi3 == null)?'grey-2':(youthPREducationJunContents.kpi3 >= '0' && youthPREducationJunContents.kpi3 <= '2.8')?'red':(youthPREducationJunContents.kpi3 > '2.8' && youthPREducationJunContents.kpi3 <= '3.733333333')?'orange':(youthPREducationJunContents.kpi3 > '3.733333333' && youthPREducationJunContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationJunContents.kpi3 >= '4.666666667' && youthPREducationJunContents.kpi3 < '5.6')?'green':(youthPREducationJunContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJunContents.kpi4 == null)?'grey-2':(youthPREducationJunContents.kpi4 >= '0' && youthPREducationJunContents.kpi4 <= '10.4')?'red':(youthPREducationJunContents.kpi4 > '10.4' && youthPREducationJunContents.kpi4 <= '13.86666667')?'orange':(youthPREducationJunContents.kpi4 > '13.86666667' && youthPREducationJunContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationJunContents.kpi4 >= '17.33333333' && youthPREducationJunContents.kpi4 < '20.8')?'green':(youthPREducationJunContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJunContents.kpi5 == null)?'grey-2':(youthPREducationJunContents.kpi5 >= '0' && youthPREducationJunContents.kpi5 <= '4.8')?'red':(youthPREducationJunContents.kpi5 > '4.8' && youthPREducationJunContents.kpi5 <= '6.4')?'orange':(youthPREducationJunContents.kpi5 > '6.4' && youthPREducationJunContents.kpi5 < '8')?'yellow-7':(youthPREducationJunContents.kpi5 >= '8' && youthPREducationJunContents.kpi5 < '9.6')?'green':(youthPREducationJunContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi5}}
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
                              :color="(youthPREducationJulContents.kpi1 == null)?'grey-2':(youthPREducationJulContents.kpi1 >= '0' && youthPREducationJulContents.kpi1 <= '5.8')?'red':(youthPREducationJulContents.kpi1 > '5.8' && youthPREducationJulContents.kpi1 <= '7.733333333')?'orange':(youthPREducationJulContents.kpi1 > '7.733333333' && youthPREducationJulContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationJulContents.kpi1 >= '9.666666667' && youthPREducationJulContents.kpi1 < '11.6')?'green':(youthPREducationJulContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJulContents.kpi2 == null)?'grey-2':(youthPREducationJulContents.kpi2 >= '0' && youthPREducationJulContents.kpi2 <= '18.2')?'red':(youthPREducationJulContents.kpi2 > '18.2' && youthPREducationJulContents.kpi2 <= '24.26666667')?'orange':(youthPREducationJulContents.kpi2 > '24.26666667' && youthPREducationJulContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationJulContents.kpi2 >= '30.33333333' && youthPREducationJulContents.kpi2 < '36.4')?'green':(youthPREducationJulContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJulContents.kpi3 == null)?'grey-2':(youthPREducationJulContents.kpi3 >= '0' && youthPREducationJulContents.kpi3 <= '2.8')?'red':(youthPREducationJulContents.kpi3 > '2.8' && youthPREducationJulContents.kpi3 <= '3.733333333')?'orange':(youthPREducationJulContents.kpi3 > '3.733333333' && youthPREducationJulContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationJulContents.kpi3 >= '4.666666667' && youthPREducationJulContents.kpi3 < '5.6')?'green':(youthPREducationJulContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJulContents.kpi4 == null)?'grey-2':(youthPREducationJulContents.kpi4 >= '0' && youthPREducationJulContents.kpi4 <= '10.4')?'red':(youthPREducationJulContents.kpi4 > '10.4' && youthPREducationJulContents.kpi4 <= '13.86666667')?'orange':(youthPREducationJulContents.kpi4 > '13.86666667' && youthPREducationJulContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationJulContents.kpi4 >= '17.33333333' && youthPREducationJulContents.kpi4 < '20.8')?'green':(youthPREducationJulContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJulContents.kpi5 == null)?'grey-2':(youthPREducationJulContents.kpi5 >= '0' && youthPREducationJulContents.kpi5 <= '4.8')?'red':(youthPREducationJulContents.kpi5 > '4.8' && youthPREducationJulContents.kpi5 <= '6.4')?'orange':(youthPREducationJulContents.kpi5 > '6.4' && youthPREducationJulContents.kpi5 < '8')?'yellow-7':(youthPREducationJulContents.kpi5 >= '8' && youthPREducationJulContents.kpi5 < '9.6')?'green':(youthPREducationJulContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi5}}
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
                              :color="(youthPREducationAugContents.kpi1 == null)?'grey-2':(youthPREducationAugContents.kpi1 >= '0' && youthPREducationAugContents.kpi1 <= '5.8')?'red':(youthPREducationAugContents.kpi1 > '5.8' && youthPREducationAugContents.kpi1 <= '7.733333333')?'orange':(youthPREducationAugContents.kpi1 > '7.733333333' && youthPREducationAugContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationAugContents.kpi1 >= '9.666666667' && youthPREducationAugContents.kpi1 < '11.6')?'green':(youthPREducationAugContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAugContents.kpi2 == null)?'grey-2':(youthPREducationAugContents.kpi2 >= '0' && youthPREducationAugContents.kpi2 <= '18.2')?'red':(youthPREducationAugContents.kpi2 > '18.2' && youthPREducationAugContents.kpi2 <= '24.26666667')?'orange':(youthPREducationAugContents.kpi2 > '24.26666667' && youthPREducationAugContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationAugContents.kpi2 >= '30.33333333' && youthPREducationAugContents.kpi2 < '36.4')?'green':(youthPREducationAugContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAugContents.kpi3 == null)?'grey-2':(youthPREducationAugContents.kpi3 >= '0' && youthPREducationAugContents.kpi3 <= '2.8')?'red':(youthPREducationAugContents.kpi3 > '2.8' && youthPREducationAugContents.kpi3 <= '3.733333333')?'orange':(youthPREducationAugContents.kpi3 > '3.733333333' && youthPREducationAugContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationAugContents.kpi3 >= '4.666666667' && youthPREducationAugContents.kpi3 < '5.6')?'green':(youthPREducationAugContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAugContents.kpi4 == null)?'grey-2':(youthPREducationAugContents.kpi4 >= '0' && youthPREducationAugContents.kpi4 <= '10.4')?'red':(youthPREducationAugContents.kpi4 > '10.4' && youthPREducationAugContents.kpi4 <= '13.86666667')?'orange':(youthPREducationAugContents.kpi4 > '13.86666667' && youthPREducationAugContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationAugContents.kpi4 >= '17.33333333' && youthPREducationAugContents.kpi4 < '20.8')?'green':(youthPREducationAugContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAugContents.kpi5 == null)?'grey-2':(youthPREducationAugContents.kpi5 >= '0' && youthPREducationAugContents.kpi5 <= '4.8')?'red':(youthPREducationAugContents.kpi5 > '4.8' && youthPREducationAugContents.kpi5 <= '6.4')?'orange':(youthPREducationAugContents.kpi5 > '6.4' && youthPREducationAugContents.kpi5 < '8')?'yellow-7':(youthPREducationAugContents.kpi5 >= '8' && youthPREducationAugContents.kpi5 < '9.6')?'green':(youthPREducationAugContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi5}}
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
                              :color="(youthPREducationSepContents.kpi1 == null)?'grey-2':(youthPREducationSepContents.kpi1 >= '0' && youthPREducationSepContents.kpi1 <= '5.8')?'red':(youthPREducationSepContents.kpi1 > '5.8' && youthPREducationSepContents.kpi1 <= '7.733333333')?'orange':(youthPREducationSepContents.kpi1 > '7.733333333' && youthPREducationSepContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationSepContents.kpi1 >= '9.666666667' && youthPREducationSepContents.kpi1 < '11.6')?'green':(youthPREducationSepContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationSepContents.kpi2 == null)?'grey-2':(youthPREducationSepContents.kpi2 >= '0' && youthPREducationSepContents.kpi2 <= '18.2')?'red':(youthPREducationSepContents.kpi2 > '18.2' && youthPREducationSepContents.kpi2 <= '24.26666667')?'orange':(youthPREducationSepContents.kpi2 > '24.26666667' && youthPREducationSepContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationSepContents.kpi2 >= '30.33333333' && youthPREducationSepContents.kpi2 < '36.4')?'green':(youthPREducationSepContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationSepContents.kpi3 == null)?'grey-2':(youthPREducationSepContents.kpi3 >= '0' && youthPREducationSepContents.kpi3 <= '2.8')?'red':(youthPREducationSepContents.kpi3 > '2.8' && youthPREducationSepContents.kpi3 <= '3.733333333')?'orange':(youthPREducationSepContents.kpi3 > '3.733333333' && youthPREducationSepContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationSepContents.kpi3 >= '4.666666667' && youthPREducationSepContents.kpi3 < '5.6')?'green':(youthPREducationSepContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationSepContents.kpi4 == null)?'grey-2':(youthPREducationSepContents.kpi4 >= '0' && youthPREducationSepContents.kpi4 <= '10.4')?'red':(youthPREducationSepContents.kpi4 > '10.4' && youthPREducationSepContents.kpi4 <= '13.86666667')?'orange':(youthPREducationSepContents.kpi4 > '13.86666667' && youthPREducationSepContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationSepContents.kpi4 >= '17.33333333' && youthPREducationSepContents.kpi4 < '20.8')?'green':(youthPREducationSepContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationSepContents.kpi5 == null)?'grey-2':(youthPREducationSepContents.kpi5 >= '0' && youthPREducationSepContents.kpi5 <= '4.8')?'red':(youthPREducationSepContents.kpi5 > '4.8' && youthPREducationSepContents.kpi5 <= '6.4')?'orange':(youthPREducationSepContents.kpi5 > '6.4' && youthPREducationSepContents.kpi5 < '8')?'yellow-7':(youthPREducationSepContents.kpi5 >= '8' && youthPREducationSepContents.kpi5 < '9.6')?'green':(youthPREducationSepContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi5}}
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
                              :color="(youthPREducationOctContents.kpi1 == null)?'grey-2':(youthPREducationOctContents.kpi1 >= '0' && youthPREducationOctContents.kpi1 <= '5.8')?'red':(youthPREducationOctContents.kpi1 > '5.8' && youthPREducationOctContents.kpi1 <= '7.733333333')?'orange':(youthPREducationOctContents.kpi1 > '7.733333333' && youthPREducationOctContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationOctContents.kpi1 >= '9.666666667' && youthPREducationOctContents.kpi1 < '11.6')?'green':(youthPREducationOctContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationOctContents.kpi2 == null)?'grey-2':(youthPREducationOctContents.kpi2 >= '0' && youthPREducationOctContents.kpi2 <= '18.2')?'red':(youthPREducationOctContents.kpi2 > '18.2' && youthPREducationOctContents.kpi2 <= '24.26666667')?'orange':(youthPREducationOctContents.kpi2 > '24.26666667' && youthPREducationOctContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationOctContents.kpi2 >= '30.33333333' && youthPREducationOctContents.kpi2 < '36.4')?'green':(youthPREducationOctContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationOctContents.kpi3 == null)?'grey-2':(youthPREducationOctContents.kpi3 >= '0' && youthPREducationOctContents.kpi3 <= '2.8')?'red':(youthPREducationOctContents.kpi3 > '2.8' && youthPREducationOctContents.kpi3 <= '3.733333333')?'orange':(youthPREducationOctContents.kpi3 > '3.733333333' && youthPREducationOctContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationOctContents.kpi3 >= '4.666666667' && youthPREducationOctContents.kpi3 < '5.6')?'green':(youthPREducationOctContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationOctContents.kpi4 == null)?'grey-2':(youthPREducationOctContents.kpi4 >= '0' && youthPREducationOctContents.kpi4 <= '10.4')?'red':(youthPREducationOctContents.kpi4 > '10.4' && youthPREducationOctContents.kpi4 <= '13.86666667')?'orange':(youthPREducationOctContents.kpi4 > '13.86666667' && youthPREducationOctContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationOctContents.kpi4 >= '17.33333333' && youthPREducationOctContents.kpi4 < '20.8')?'green':(youthPREducationOctContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationOctContents.kpi5 == null)?'grey-2':(youthPREducationOctContents.kpi5 >= '0' && youthPREducationOctContents.kpi5 <= '4.8')?'red':(youthPREducationOctContents.kpi5 > '4.8' && youthPREducationOctContents.kpi5 <= '6.4')?'orange':(youthPREducationOctContents.kpi5 > '6.4' && youthPREducationOctContents.kpi5 < '8')?'yellow-7':(youthPREducationOctContents.kpi5 >= '8' && youthPREducationOctContents.kpi5 < '9.6')?'green':(youthPREducationOctContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi5}}
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
                              :color="(youthPREducationNovContents.kpi1 == null)?'grey-2':(youthPREducationNovContents.kpi1 >= '0' && youthPREducationNovContents.kpi1 <= '5.8')?'red':(youthPREducationNovContents.kpi1 > '5.8' && youthPREducationNovContents.kpi1 <= '7.733333333')?'orange':(youthPREducationNovContents.kpi1 > '7.733333333' && youthPREducationNovContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationNovContents.kpi1 >= '9.666666667' && youthPREducationNovContents.kpi1 < '11.6')?'green':(youthPREducationNovContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationNovContents.kpi2 == null)?'grey-2':(youthPREducationNovContents.kpi2 >= '0' && youthPREducationNovContents.kpi2 <= '18.2')?'red':(youthPREducationNovContents.kpi2 > '18.2' && youthPREducationNovContents.kpi2 <= '24.26666667')?'orange':(youthPREducationNovContents.kpi2 > '24.26666667' && youthPREducationNovContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationNovContents.kpi2 >= '30.33333333' && youthPREducationNovContents.kpi2 < '36.4')?'green':(youthPREducationNovContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationNovContents.kpi3 == null)?'grey-2':(youthPREducationNovContents.kpi3 >= '0' && youthPREducationNovContents.kpi3 <= '2.8')?'red':(youthPREducationNovContents.kpi3 > '2.8' && youthPREducationNovContents.kpi3 <= '3.733333333')?'orange':(youthPREducationNovContents.kpi3 > '3.733333333' && youthPREducationNovContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationNovContents.kpi3 >= '4.666666667' && youthPREducationNovContents.kpi3 < '5.6')?'green':(youthPREducationNovContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationNovContents.kpi4 == null)?'grey-2':(youthPREducationNovContents.kpi4 >= '0' && youthPREducationNovContents.kpi4 <= '10.4')?'red':(youthPREducationNovContents.kpi4 > '10.4' && youthPREducationNovContents.kpi4 <= '13.86666667')?'orange':(youthPREducationNovContents.kpi4 > '13.86666667' && youthPREducationNovContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationNovContents.kpi4 >= '17.33333333' && youthPREducationNovContents.kpi4 < '20.8')?'green':(youthPREducationNovContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationNovContents.kpi5 == null)?'grey-2':(youthPREducationNovContents.kpi5 >= '0' && youthPREducationNovContents.kpi5 <= '4.8')?'red':(youthPREducationNovContents.kpi5 > '4.8' && youthPREducationNovContents.kpi5 <= '6.4')?'orange':(youthPREducationNovContents.kpi5 > '6.4' && youthPREducationNovContents.kpi5 < '8')?'yellow-7':(youthPREducationNovContents.kpi5 >= '8' && youthPREducationNovContents.kpi5 < '9.6')?'green':(youthPREducationNovContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi5}}
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
                              :color="(youthPREducationDecContents.kpi1 == null)?'grey-2':(youthPREducationDecContents.kpi1 >= '0' && youthPREducationDecContents.kpi1 <= '5.8')?'red':(youthPREducationDecContents.kpi1 > '5.8' && youthPREducationDecContents.kpi1 <= '7.733333333')?'orange':(youthPREducationDecContents.kpi1 > '7.733333333' && youthPREducationDecContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationDecContents.kpi1 >= '9.666666667' && youthPREducationDecContents.kpi1 < '11.6')?'green':(youthPREducationDecContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationDecContents.kpi2 == null)?'grey-2':(youthPREducationDecContents.kpi2 >= '0' && youthPREducationDecContents.kpi2 <= '18.2')?'red':(youthPREducationDecContents.kpi2 > '18.2' && youthPREducationDecContents.kpi2 <= '24.26666667')?'orange':(youthPREducationDecContents.kpi2 > '24.26666667' && youthPREducationDecContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationDecContents.kpi2 >= '30.33333333' && youthPREducationDecContents.kpi2 < '36.4')?'green':(youthPREducationDecContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationDecContents.kpi3 == null)?'grey-2':(youthPREducationDecContents.kpi3 >= '0' && youthPREducationDecContents.kpi3 <= '2.8')?'red':(youthPREducationDecContents.kpi3 > '2.8' && youthPREducationDecContents.kpi3 <= '3.733333333')?'orange':(youthPREducationDecContents.kpi3 > '3.733333333' && youthPREducationDecContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationDecContents.kpi3 >= '4.666666667' && youthPREducationDecContents.kpi3 < '5.6')?'green':(youthPREducationDecContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationDecContents.kpi4 == null)?'grey-2':(youthPREducationDecContents.kpi4 >= '0' && youthPREducationDecContents.kpi4 <= '10.4')?'red':(youthPREducationDecContents.kpi4 > '10.4' && youthPREducationDecContents.kpi4 <= '13.86666667')?'orange':(youthPREducationDecContents.kpi4 > '13.86666667' && youthPREducationDecContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationDecContents.kpi4 >= '17.33333333' && youthPREducationDecContents.kpi4 < '20.8')?'green':(youthPREducationDecContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationDecContents.kpi5 == null)?'grey-2':(youthPREducationDecContents.kpi5 >= '0' && youthPREducationDecContents.kpi5 <= '4.8')?'red':(youthPREducationDecContents.kpi5 > '4.8' && youthPREducationDecContents.kpi5 <= '6.4')?'orange':(youthPREducationDecContents.kpi5 > '6.4' && youthPREducationDecContents.kpi5 < '8')?'yellow-7':(youthPREducationDecContents.kpi5 >= '8' && youthPREducationDecContents.kpi5 < '9.6')?'green':(youthPREducationDecContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi5}}
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
                              :color="(youthPREducationJanContents.kpi1 == null)?'grey-2':(youthPREducationJanContents.kpi1 >= '0' && youthPREducationJanContents.kpi1 <= '5.8')?'red':(youthPREducationJanContents.kpi1 > '5.8' && youthPREducationJanContents.kpi1 <= '7.733333333')?'orange':(youthPREducationJanContents.kpi1 > '7.733333333' && youthPREducationJanContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationJanContents.kpi1 >= '9.666666667' && youthPREducationJanContents.kpi1 < '11.6')?'green':(youthPREducationJanContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJanContents.kpi2 == null)?'grey-2':(youthPREducationJanContents.kpi2 >= '0' && youthPREducationJanContents.kpi2 <= '18.2')?'red':(youthPREducationJanContents.kpi2 > '18.2' && youthPREducationJanContents.kpi2 <= '24.26666667')?'orange':(youthPREducationJanContents.kpi2 > '24.26666667' && youthPREducationJanContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationJanContents.kpi2 >= '30.33333333' && youthPREducationJanContents.kpi2 < '36.4')?'green':(youthPREducationJanContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJanContents.kpi3 == null)?'grey-2':(youthPREducationJanContents.kpi3 >= '0' && youthPREducationJanContents.kpi3 <= '2.8')?'red':(youthPREducationJanContents.kpi3 > '2.8' && youthPREducationJanContents.kpi3 <= '3.733333333')?'orange':(youthPREducationJanContents.kpi3 > '3.733333333' && youthPREducationJanContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationJanContents.kpi3 >= '4.666666667' && youthPREducationJanContents.kpi3 < '5.6')?'green':(youthPREducationJanContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJanContents.kpi4 == null)?'grey-2':(youthPREducationJanContents.kpi4 >= '0' && youthPREducationJanContents.kpi4 <= '10.4')?'red':(youthPREducationJanContents.kpi4 > '10.4' && youthPREducationJanContents.kpi4 <= '13.86666667')?'orange':(youthPREducationJanContents.kpi4 > '13.86666667' && youthPREducationJanContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationJanContents.kpi4 >= '17.33333333' && youthPREducationJanContents.kpi4 < '20.8')?'green':(youthPREducationJanContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJanContents.kpi5 == null)?'grey-2':(youthPREducationJanContents.kpi5 >= '0' && youthPREducationJanContents.kpi5 <= '4.8')?'red':(youthPREducationJanContents.kpi5 > '4.8' && youthPREducationJanContents.kpi5 <= '6.4')?'orange':(youthPREducationJanContents.kpi5 > '6.4' && youthPREducationJanContents.kpi5 < '8')?'yellow-7':(youthPREducationJanContents.kpi5 >= '8' && youthPREducationJanContents.kpi5 < '9.6')?'green':(youthPREducationJanContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi5}}
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
                              :color="(youthPREducationFebContents.kpi1 == null)?'grey-2':(youthPREducationFebContents.kpi1 >= '0' && youthPREducationFebContents.kpi1 <= '5.8')?'red':(youthPREducationFebContents.kpi1 > '5.8' && youthPREducationFebContents.kpi1 <= '7.733333333')?'orange':(youthPREducationFebContents.kpi1 > '7.733333333' && youthPREducationFebContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationFebContents.kpi1 >= '9.666666667' && youthPREducationFebContents.kpi1 < '11.6')?'green':(youthPREducationFebContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationFebContents.kpi2 == null)?'grey-2':(youthPREducationFebContents.kpi2 >= '0' && youthPREducationFebContents.kpi2 <= '18.2')?'red':(youthPREducationFebContents.kpi2 > '18.2' && youthPREducationFebContents.kpi2 <= '24.26666667')?'orange':(youthPREducationFebContents.kpi2 > '24.26666667' && youthPREducationFebContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationFebContents.kpi2 >= '30.33333333' && youthPREducationFebContents.kpi2 < '36.4')?'green':(youthPREducationFebContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationFebContents.kpi3 == null)?'grey-2':(youthPREducationFebContents.kpi3 >= '0' && youthPREducationFebContents.kpi3 <= '2.8')?'red':(youthPREducationFebContents.kpi3 > '2.8' && youthPREducationFebContents.kpi3 <= '3.733333333')?'orange':(youthPREducationFebContents.kpi3 > '3.733333333' && youthPREducationFebContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationFebContents.kpi3 >= '4.666666667' && youthPREducationFebContents.kpi3 < '5.6')?'green':(youthPREducationFebContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationFebContents.kpi4 == null)?'grey-2':(youthPREducationFebContents.kpi4 >= '0' && youthPREducationFebContents.kpi4 <= '10.4')?'red':(youthPREducationFebContents.kpi4 > '10.4' && youthPREducationFebContents.kpi4 <= '13.86666667')?'orange':(youthPREducationFebContents.kpi4 > '13.86666667' && youthPREducationFebContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationFebContents.kpi4 >= '17.33333333' && youthPREducationFebContents.kpi4 < '20.8')?'green':(youthPREducationFebContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationFebContents.kpi5 == null)?'grey-2':(youthPREducationFebContents.kpi5 >= '0' && youthPREducationFebContents.kpi5 <= '4.8')?'red':(youthPREducationFebContents.kpi5 > '4.8' && youthPREducationFebContents.kpi5 <= '6.4')?'orange':(youthPREducationFebContents.kpi5 > '6.4' && youthPREducationFebContents.kpi5 < '8')?'yellow-7':(youthPREducationFebContents.kpi5 >= '8' && youthPREducationFebContents.kpi5 < '9.6')?'green':(youthPREducationFebContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi5}}
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
                              :color="(youthPREducationMarContents.kpi1 == null)?'grey-2':(youthPREducationMarContents.kpi1 >= '0' && youthPREducationMarContents.kpi1 <= '5.8')?'red':(youthPREducationMarContents.kpi1 > '5.8' && youthPREducationMarContents.kpi1 <= '7.733333333')?'orange':(youthPREducationMarContents.kpi1 > '7.733333333' && youthPREducationMarContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationMarContents.kpi1 >= '9.666666667' && youthPREducationMarContents.kpi1 < '11.6')?'green':(youthPREducationMarContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMarContents.kpi2 == null)?'grey-2':(youthPREducationMarContents.kpi2 >= '0' && youthPREducationMarContents.kpi2 <= '18.2')?'red':(youthPREducationMarContents.kpi2 > '18.2' && youthPREducationMarContents.kpi2 <= '24.26666667')?'orange':(youthPREducationMarContents.kpi2 > '24.26666667' && youthPREducationMarContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationMarContents.kpi2 >= '30.33333333' && youthPREducationMarContents.kpi2 < '36.4')?'green':(youthPREducationMarContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMarContents.kpi3 == null)?'grey-2':(youthPREducationMarContents.kpi3 >= '0' && youthPREducationMarContents.kpi3 <= '2.8')?'red':(youthPREducationMarContents.kpi3 > '2.8' && youthPREducationMarContents.kpi3 <= '3.733333333')?'orange':(youthPREducationMarContents.kpi3 > '3.733333333' && youthPREducationMarContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationMarContents.kpi3 >= '4.666666667' && youthPREducationMarContents.kpi3 < '5.6')?'green':(youthPREducationMarContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMarContents.kpi4 == null)?'grey-2':(youthPREducationMarContents.kpi4 >= '0' && youthPREducationMarContents.kpi4 <= '10.4')?'red':(youthPREducationMarContents.kpi4 > '10.4' && youthPREducationMarContents.kpi4 <= '13.86666667')?'orange':(youthPREducationMarContents.kpi4 > '13.86666667' && youthPREducationMarContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationMarContents.kpi4 >= '17.33333333' && youthPREducationMarContents.kpi4 < '20.8')?'green':(youthPREducationMarContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMarContents.kpi5 == null)?'grey-2':(youthPREducationMarContents.kpi5 >= '0' && youthPREducationMarContents.kpi5 <= '4.8')?'red':(youthPREducationMarContents.kpi5 > '4.8' && youthPREducationMarContents.kpi5 <= '6.4')?'orange':(youthPREducationMarContents.kpi5 > '6.4' && youthPREducationMarContents.kpi5 < '8')?'yellow-7':(youthPREducationMarContents.kpi5 >= '8' && youthPREducationMarContents.kpi5 < '9.6')?'green':(youthPREducationMarContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi5}}
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
                              :color="(youthPREducationAprContents.kpi1 == null)?'grey-2':(youthPREducationAprContents.kpi1 >= '0' && youthPREducationAprContents.kpi1 <= '5.8')?'red':(youthPREducationAprContents.kpi1 > '5.8' && youthPREducationAprContents.kpi1 <= '7.733333333')?'orange':(youthPREducationAprContents.kpi1 > '7.733333333' && youthPREducationAprContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationAprContents.kpi1 >= '9.666666667' && youthPREducationAprContents.kpi1 < '11.6')?'green':(youthPREducationAprContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAprContents.kpi2 == null)?'grey-2':(youthPREducationAprContents.kpi2 >= '0' && youthPREducationAprContents.kpi2 <= '18.2')?'red':(youthPREducationAprContents.kpi2 > '18.2' && youthPREducationAprContents.kpi2 <= '24.26666667')?'orange':(youthPREducationAprContents.kpi2 > '24.26666667' && youthPREducationAprContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationAprContents.kpi2 >= '30.33333333' && youthPREducationAprContents.kpi2 < '36.4')?'green':(youthPREducationAprContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAprContents.kpi3 == null)?'grey-2':(youthPREducationAprContents.kpi3 >= '0' && youthPREducationAprContents.kpi3 <= '2.8')?'red':(youthPREducationAprContents.kpi3 > '2.8' && youthPREducationAprContents.kpi3 <= '3.733333333')?'orange':(youthPREducationAprContents.kpi3 > '3.733333333' && youthPREducationAprContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationAprContents.kpi3 >= '4.666666667' && youthPREducationAprContents.kpi3 < '5.6')?'green':(youthPREducationAprContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAprContents.kpi4 == null)?'grey-2':(youthPREducationAprContents.kpi4 >= '0' && youthPREducationAprContents.kpi4 <= '10.4')?'red':(youthPREducationAprContents.kpi4 > '10.4' && youthPREducationAprContents.kpi4 <= '13.86666667')?'orange':(youthPREducationAprContents.kpi4 > '13.86666667' && youthPREducationAprContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationAprContents.kpi4 >= '17.33333333' && youthPREducationAprContents.kpi4 < '20.8')?'green':(youthPREducationAprContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAprContents.kpi5 == null)?'grey-2':(youthPREducationAprContents.kpi5 >= '0' && youthPREducationAprContents.kpi5 <= '4.8')?'red':(youthPREducationAprContents.kpi5 > '4.8' && youthPREducationAprContents.kpi5 <= '6.4')?'orange':(youthPREducationAprContents.kpi5 > '6.4' && youthPREducationAprContents.kpi5 < '8')?'yellow-7':(youthPREducationAprContents.kpi5 >= '8' && youthPREducationAprContents.kpi5 < '9.6')?'green':(youthPREducationAprContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi5}}
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
                              :color="(youthPREducationMayContents.kpi1 == null)?'grey-2':(youthPREducationMayContents.kpi1 >= '0' && youthPREducationMayContents.kpi1 <= '5.8')?'red':(youthPREducationMayContents.kpi1 > '5.8' && youthPREducationMayContents.kpi1 <= '7.733333333')?'orange':(youthPREducationMayContents.kpi1 > '7.733333333' && youthPREducationMayContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationMayContents.kpi1 >= '9.666666667' && youthPREducationMayContents.kpi1 < '11.6')?'green':(youthPREducationMayContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMayContents.kpi2 == null)?'grey-2':(youthPREducationMayContents.kpi2 >= '0' && youthPREducationMayContents.kpi2 <= '18.2')?'red':(youthPREducationMayContents.kpi2 > '18.2' && youthPREducationMayContents.kpi2 <= '24.26666667')?'orange':(youthPREducationMayContents.kpi2 > '24.26666667' && youthPREducationMayContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationMayContents.kpi2 >= '30.33333333' && youthPREducationMayContents.kpi2 < '36.4')?'green':(youthPREducationMayContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMayContents.kpi3 == null)?'grey-2':(youthPREducationMayContents.kpi3 >= '0' && youthPREducationMayContents.kpi3 <= '2.8')?'red':(youthPREducationMayContents.kpi3 > '2.8' && youthPREducationMayContents.kpi3 <= '3.733333333')?'orange':(youthPREducationMayContents.kpi3 > '3.733333333' && youthPREducationMayContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationMayContents.kpi3 >= '4.666666667' && youthPREducationMayContents.kpi3 < '5.6')?'green':(youthPREducationMayContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMayContents.kpi4 == null)?'grey-2':(youthPREducationMayContents.kpi4 >= '0' && youthPREducationMayContents.kpi4 <= '10.4')?'red':(youthPREducationMayContents.kpi4 > '10.4' && youthPREducationMayContents.kpi4 <= '13.86666667')?'orange':(youthPREducationMayContents.kpi4 > '13.86666667' && youthPREducationMayContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationMayContents.kpi4 >= '17.33333333' && youthPREducationMayContents.kpi4 < '20.8')?'green':(youthPREducationMayContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMayContents.kpi5 == null)?'grey-2':(youthPREducationMayContents.kpi5 >= '0' && youthPREducationMayContents.kpi5 <= '4.8')?'red':(youthPREducationMayContents.kpi5 > '4.8' && youthPREducationMayContents.kpi5 <= '6.4')?'orange':(youthPREducationMayContents.kpi5 > '6.4' && youthPREducationMayContents.kpi5 < '8')?'yellow-7':(youthPREducationMayContents.kpi5 >= '8' && youthPREducationMayContents.kpi5 < '9.6')?'green':(youthPREducationMayContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi5}}
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
                              :color="(youthPREducationJunContents.kpi1 == null)?'grey-2':(youthPREducationJunContents.kpi1 >= '0' && youthPREducationJunContents.kpi1 <= '5.8')?'red':(youthPREducationJunContents.kpi1 > '5.8' && youthPREducationJunContents.kpi1 <= '7.733333333')?'orange':(youthPREducationJunContents.kpi1 > '7.733333333' && youthPREducationJunContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationJunContents.kpi1 >= '9.666666667' && youthPREducationJunContents.kpi1 < '11.6')?'green':(youthPREducationJunContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJunContents.kpi2 == null)?'grey-2':(youthPREducationJunContents.kpi2 >= '0' && youthPREducationJunContents.kpi2 <= '18.2')?'red':(youthPREducationJunContents.kpi2 > '18.2' && youthPREducationJunContents.kpi2 <= '24.26666667')?'orange':(youthPREducationJunContents.kpi2 > '24.26666667' && youthPREducationJunContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationJunContents.kpi2 >= '30.33333333' && youthPREducationJunContents.kpi2 < '36.4')?'green':(youthPREducationJunContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJunContents.kpi3 == null)?'grey-2':(youthPREducationJunContents.kpi3 >= '0' && youthPREducationJunContents.kpi3 <= '2.8')?'red':(youthPREducationJunContents.kpi3 > '2.8' && youthPREducationJunContents.kpi3 <= '3.733333333')?'orange':(youthPREducationJunContents.kpi3 > '3.733333333' && youthPREducationJunContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationJunContents.kpi3 >= '4.666666667' && youthPREducationJunContents.kpi3 < '5.6')?'green':(youthPREducationJunContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJunContents.kpi4 == null)?'grey-2':(youthPREducationJunContents.kpi4 >= '0' && youthPREducationJunContents.kpi4 <= '10.4')?'red':(youthPREducationJunContents.kpi4 > '10.4' && youthPREducationJunContents.kpi4 <= '13.86666667')?'orange':(youthPREducationJunContents.kpi4 > '13.86666667' && youthPREducationJunContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationJunContents.kpi4 >= '17.33333333' && youthPREducationJunContents.kpi4 < '20.8')?'green':(youthPREducationJunContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJunContents.kpi5 == null)?'grey-2':(youthPREducationJunContents.kpi5 >= '0' && youthPREducationJunContents.kpi5 <= '4.8')?'red':(youthPREducationJunContents.kpi5 > '4.8' && youthPREducationJunContents.kpi5 <= '6.4')?'orange':(youthPREducationJunContents.kpi5 > '6.4' && youthPREducationJunContents.kpi5 < '8')?'yellow-7':(youthPREducationJunContents.kpi5 >= '8' && youthPREducationJunContents.kpi5 < '9.6')?'green':(youthPREducationJunContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi5}}
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
                              :color="(youthPREducationJulContents.kpi1 == null)?'grey-2':(youthPREducationJulContents.kpi1 >= '0' && youthPREducationJulContents.kpi1 <= '5.8')?'red':(youthPREducationJulContents.kpi1 > '5.8' && youthPREducationJulContents.kpi1 <= '7.733333333')?'orange':(youthPREducationJulContents.kpi1 > '7.733333333' && youthPREducationJulContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationJulContents.kpi1 >= '9.666666667' && youthPREducationJulContents.kpi1 < '11.6')?'green':(youthPREducationJulContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJulContents.kpi2 == null)?'grey-2':(youthPREducationJulContents.kpi2 >= '0' && youthPREducationJulContents.kpi2 <= '18.2')?'red':(youthPREducationJulContents.kpi2 > '18.2' && youthPREducationJulContents.kpi2 <= '24.26666667')?'orange':(youthPREducationJulContents.kpi2 > '24.26666667' && youthPREducationJulContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationJulContents.kpi2 >= '30.33333333' && youthPREducationJulContents.kpi2 < '36.4')?'green':(youthPREducationJulContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJulContents.kpi3 == null)?'grey-2':(youthPREducationJulContents.kpi3 >= '0' && youthPREducationJulContents.kpi3 <= '2.8')?'red':(youthPREducationJulContents.kpi3 > '2.8' && youthPREducationJulContents.kpi3 <= '3.733333333')?'orange':(youthPREducationJulContents.kpi3 > '3.733333333' && youthPREducationJulContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationJulContents.kpi3 >= '4.666666667' && youthPREducationJulContents.kpi3 < '5.6')?'green':(youthPREducationJulContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJulContents.kpi4 == null)?'grey-2':(youthPREducationJulContents.kpi4 >= '0' && youthPREducationJulContents.kpi4 <= '10.4')?'red':(youthPREducationJulContents.kpi4 > '10.4' && youthPREducationJulContents.kpi4 <= '13.86666667')?'orange':(youthPREducationJulContents.kpi4 > '13.86666667' && youthPREducationJulContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationJulContents.kpi4 >= '17.33333333' && youthPREducationJulContents.kpi4 < '20.8')?'green':(youthPREducationJulContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJulContents.kpi5 == null)?'grey-2':(youthPREducationJulContents.kpi5 >= '0' && youthPREducationJulContents.kpi5 <= '4.8')?'red':(youthPREducationJulContents.kpi5 > '4.8' && youthPREducationJulContents.kpi5 <= '6.4')?'orange':(youthPREducationJulContents.kpi5 > '6.4' && youthPREducationJulContents.kpi5 < '8')?'yellow-7':(youthPREducationJulContents.kpi5 >= '8' && youthPREducationJulContents.kpi5 < '9.6')?'green':(youthPREducationJulContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi5}}
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
                              :color="(youthPREducationAugContents.kpi1 == null)?'grey-2':(youthPREducationAugContents.kpi1 >= '0' && youthPREducationAugContents.kpi1 <= '5.8')?'red':(youthPREducationAugContents.kpi1 > '5.8' && youthPREducationAugContents.kpi1 <= '7.733333333')?'orange':(youthPREducationAugContents.kpi1 > '7.733333333' && youthPREducationAugContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationAugContents.kpi1 >= '9.666666667' && youthPREducationAugContents.kpi1 < '11.6')?'green':(youthPREducationAugContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAugContents.kpi2 == null)?'grey-2':(youthPREducationAugContents.kpi2 >= '0' && youthPREducationAugContents.kpi2 <= '18.2')?'red':(youthPREducationAugContents.kpi2 > '18.2' && youthPREducationAugContents.kpi2 <= '24.26666667')?'orange':(youthPREducationAugContents.kpi2 > '24.26666667' && youthPREducationAugContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationAugContents.kpi2 >= '30.33333333' && youthPREducationAugContents.kpi2 < '36.4')?'green':(youthPREducationAugContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAugContents.kpi3 == null)?'grey-2':(youthPREducationAugContents.kpi3 >= '0' && youthPREducationAugContents.kpi3 <= '2.8')?'red':(youthPREducationAugContents.kpi3 > '2.8' && youthPREducationAugContents.kpi3 <= '3.733333333')?'orange':(youthPREducationAugContents.kpi3 > '3.733333333' && youthPREducationAugContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationAugContents.kpi3 >= '4.666666667' && youthPREducationAugContents.kpi3 < '5.6')?'green':(youthPREducationAugContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAugContents.kpi4 == null)?'grey-2':(youthPREducationAugContents.kpi4 >= '0' && youthPREducationAugContents.kpi4 <= '10.4')?'red':(youthPREducationAugContents.kpi4 > '10.4' && youthPREducationAugContents.kpi4 <= '13.86666667')?'orange':(youthPREducationAugContents.kpi4 > '13.86666667' && youthPREducationAugContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationAugContents.kpi4 >= '17.33333333' && youthPREducationAugContents.kpi4 < '20.8')?'green':(youthPREducationAugContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAugContents.kpi5 == null)?'grey-2':(youthPREducationAugContents.kpi5 >= '0' && youthPREducationAugContents.kpi5 <= '4.8')?'red':(youthPREducationAugContents.kpi5 > '4.8' && youthPREducationAugContents.kpi5 <= '6.4')?'orange':(youthPREducationAugContents.kpi5 > '6.4' && youthPREducationAugContents.kpi5 < '8')?'yellow-7':(youthPREducationAugContents.kpi5 >= '8' && youthPREducationAugContents.kpi5 < '9.6')?'green':(youthPREducationAugContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi5}}
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
                              :color="(youthPREducationSepContents.kpi1 == null)?'grey-2':(youthPREducationSepContents.kpi1 >= '0' && youthPREducationSepContents.kpi1 <= '5.8')?'red':(youthPREducationSepContents.kpi1 > '5.8' && youthPREducationSepContents.kpi1 <= '7.733333333')?'orange':(youthPREducationSepContents.kpi1 > '7.733333333' && youthPREducationSepContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationSepContents.kpi1 >= '9.666666667' && youthPREducationSepContents.kpi1 < '11.6')?'green':(youthPREducationSepContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationSepContents.kpi2 == null)?'grey-2':(youthPREducationSepContents.kpi2 >= '0' && youthPREducationSepContents.kpi2 <= '18.2')?'red':(youthPREducationSepContents.kpi2 > '18.2' && youthPREducationSepContents.kpi2 <= '24.26666667')?'orange':(youthPREducationSepContents.kpi2 > '24.26666667' && youthPREducationSepContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationSepContents.kpi2 >= '30.33333333' && youthPREducationSepContents.kpi2 < '36.4')?'green':(youthPREducationSepContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationSepContents.kpi3 == null)?'grey-2':(youthPREducationSepContents.kpi3 >= '0' && youthPREducationSepContents.kpi3 <= '2.8')?'red':(youthPREducationSepContents.kpi3 > '2.8' && youthPREducationSepContents.kpi3 <= '3.733333333')?'orange':(youthPREducationSepContents.kpi3 > '3.733333333' && youthPREducationSepContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationSepContents.kpi3 >= '4.666666667' && youthPREducationSepContents.kpi3 < '5.6')?'green':(youthPREducationSepContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationSepContents.kpi4 == null)?'grey-2':(youthPREducationSepContents.kpi4 >= '0' && youthPREducationSepContents.kpi4 <= '10.4')?'red':(youthPREducationSepContents.kpi4 > '10.4' && youthPREducationSepContents.kpi4 <= '13.86666667')?'orange':(youthPREducationSepContents.kpi4 > '13.86666667' && youthPREducationSepContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationSepContents.kpi4 >= '17.33333333' && youthPREducationSepContents.kpi4 < '20.8')?'green':(youthPREducationSepContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationSepContents.kpi5 == null)?'grey-2':(youthPREducationSepContents.kpi5 >= '0' && youthPREducationSepContents.kpi5 <= '4.8')?'red':(youthPREducationSepContents.kpi5 > '4.8' && youthPREducationSepContents.kpi5 <= '6.4')?'orange':(youthPREducationSepContents.kpi5 > '6.4' && youthPREducationSepContents.kpi5 < '8')?'yellow-7':(youthPREducationSepContents.kpi5 >= '8' && youthPREducationSepContents.kpi5 < '9.6')?'green':(youthPREducationSepContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi5}}
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
                              :color="(youthPREducationOctContents.kpi1 == null)?'grey-2':(youthPREducationOctContents.kpi1 >= '0' && youthPREducationOctContents.kpi1 <= '5.8')?'red':(youthPREducationOctContents.kpi1 > '5.8' && youthPREducationOctContents.kpi1 <= '7.733333333')?'orange':(youthPREducationOctContents.kpi1 > '7.733333333' && youthPREducationOctContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationOctContents.kpi1 >= '9.666666667' && youthPREducationOctContents.kpi1 < '11.6')?'green':(youthPREducationOctContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationOctContents.kpi2 == null)?'grey-2':(youthPREducationOctContents.kpi2 >= '0' && youthPREducationOctContents.kpi2 <= '18.2')?'red':(youthPREducationOctContents.kpi2 > '18.2' && youthPREducationOctContents.kpi2 <= '24.26666667')?'orange':(youthPREducationOctContents.kpi2 > '24.26666667' && youthPREducationOctContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationOctContents.kpi2 >= '30.33333333' && youthPREducationOctContents.kpi2 < '36.4')?'green':(youthPREducationOctContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationOctContents.kpi3 == null)?'grey-2':(youthPREducationOctContents.kpi3 >= '0' && youthPREducationOctContents.kpi3 <= '2.8')?'red':(youthPREducationOctContents.kpi3 > '2.8' && youthPREducationOctContents.kpi3 <= '3.733333333')?'orange':(youthPREducationOctContents.kpi3 > '3.733333333' && youthPREducationOctContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationOctContents.kpi3 >= '4.666666667' && youthPREducationOctContents.kpi3 < '5.6')?'green':(youthPREducationOctContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationOctContents.kpi4 == null)?'grey-2':(youthPREducationOctContents.kpi4 >= '0' && youthPREducationOctContents.kpi4 <= '10.4')?'red':(youthPREducationOctContents.kpi4 > '10.4' && youthPREducationOctContents.kpi4 <= '13.86666667')?'orange':(youthPREducationOctContents.kpi4 > '13.86666667' && youthPREducationOctContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationOctContents.kpi4 >= '17.33333333' && youthPREducationOctContents.kpi4 < '20.8')?'green':(youthPREducationOctContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationOctContents.kpi5 == null)?'grey-2':(youthPREducationOctContents.kpi5 >= '0' && youthPREducationOctContents.kpi5 <= '4.8')?'red':(youthPREducationOctContents.kpi5 > '4.8' && youthPREducationOctContents.kpi5 <= '6.4')?'orange':(youthPREducationOctContents.kpi5 > '6.4' && youthPREducationOctContents.kpi5 < '8')?'yellow-7':(youthPREducationOctContents.kpi5 >= '8' && youthPREducationOctContents.kpi5 < '9.6')?'green':(youthPREducationOctContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi5}}
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
                              :color="(youthPREducationNovContents.kpi1 == null)?'grey-2':(youthPREducationNovContents.kpi1 >= '0' && youthPREducationNovContents.kpi1 <= '5.8')?'red':(youthPREducationNovContents.kpi1 > '5.8' && youthPREducationNovContents.kpi1 <= '7.733333333')?'orange':(youthPREducationNovContents.kpi1 > '7.733333333' && youthPREducationNovContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationNovContents.kpi1 >= '9.666666667' && youthPREducationNovContents.kpi1 < '11.6')?'green':(youthPREducationNovContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationNovContents.kpi2 == null)?'grey-2':(youthPREducationNovContents.kpi2 >= '0' && youthPREducationNovContents.kpi2 <= '18.2')?'red':(youthPREducationNovContents.kpi2 > '18.2' && youthPREducationNovContents.kpi2 <= '24.26666667')?'orange':(youthPREducationNovContents.kpi2 > '24.26666667' && youthPREducationNovContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationNovContents.kpi2 >= '30.33333333' && youthPREducationNovContents.kpi2 < '36.4')?'green':(youthPREducationNovContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationNovContents.kpi3 == null)?'grey-2':(youthPREducationNovContents.kpi3 >= '0' && youthPREducationNovContents.kpi3 <= '2.8')?'red':(youthPREducationNovContents.kpi3 > '2.8' && youthPREducationNovContents.kpi3 <= '3.733333333')?'orange':(youthPREducationNovContents.kpi3 > '3.733333333' && youthPREducationNovContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationNovContents.kpi3 >= '4.666666667' && youthPREducationNovContents.kpi3 < '5.6')?'green':(youthPREducationNovContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationNovContents.kpi4 == null)?'grey-2':(youthPREducationNovContents.kpi4 >= '0' && youthPREducationNovContents.kpi4 <= '10.4')?'red':(youthPREducationNovContents.kpi4 > '10.4' && youthPREducationNovContents.kpi4 <= '13.86666667')?'orange':(youthPREducationNovContents.kpi4 > '13.86666667' && youthPREducationNovContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationNovContents.kpi4 >= '17.33333333' && youthPREducationNovContents.kpi4 < '20.8')?'green':(youthPREducationNovContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationNovContents.kpi5 == null)?'grey-2':(youthPREducationNovContents.kpi5 >= '0' && youthPREducationNovContents.kpi5 <= '4.8')?'red':(youthPREducationNovContents.kpi5 > '4.8' && youthPREducationNovContents.kpi5 <= '6.4')?'orange':(youthPREducationNovContents.kpi5 > '6.4' && youthPREducationNovContents.kpi5 < '8')?'yellow-7':(youthPREducationNovContents.kpi5 >= '8' && youthPREducationNovContents.kpi5 < '9.6')?'green':(youthPREducationNovContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi5}}
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
                              :color="(youthPREducationDecContents.kpi1 == null)?'grey-2':(youthPREducationDecContents.kpi1 >= '0' && youthPREducationDecContents.kpi1 <= '5.8')?'red':(youthPREducationDecContents.kpi1 > '5.8' && youthPREducationDecContents.kpi1 <= '7.733333333')?'orange':(youthPREducationDecContents.kpi1 > '7.733333333' && youthPREducationDecContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationDecContents.kpi1 >= '9.666666667' && youthPREducationDecContents.kpi1 < '11.6')?'green':(youthPREducationDecContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationDecContents.kpi2 == null)?'grey-2':(youthPREducationDecContents.kpi2 >= '0' && youthPREducationDecContents.kpi2 <= '18.2')?'red':(youthPREducationDecContents.kpi2 > '18.2' && youthPREducationDecContents.kpi2 <= '24.26666667')?'orange':(youthPREducationDecContents.kpi2 > '24.26666667' && youthPREducationDecContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationDecContents.kpi2 >= '30.33333333' && youthPREducationDecContents.kpi2 < '36.4')?'green':(youthPREducationDecContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationDecContents.kpi3 == null)?'grey-2':(youthPREducationDecContents.kpi3 >= '0' && youthPREducationDecContents.kpi3 <= '2.8')?'red':(youthPREducationDecContents.kpi3 > '2.8' && youthPREducationDecContents.kpi3 <= '3.733333333')?'orange':(youthPREducationDecContents.kpi3 > '3.733333333' && youthPREducationDecContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationDecContents.kpi3 >= '4.666666667' && youthPREducationDecContents.kpi3 < '5.6')?'green':(youthPREducationDecContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationDecContents.kpi4 == null)?'grey-2':(youthPREducationDecContents.kpi4 >= '0' && youthPREducationDecContents.kpi4 <= '10.4')?'red':(youthPREducationDecContents.kpi4 > '10.4' && youthPREducationDecContents.kpi4 <= '13.86666667')?'orange':(youthPREducationDecContents.kpi4 > '13.86666667' && youthPREducationDecContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationDecContents.kpi4 >= '17.33333333' && youthPREducationDecContents.kpi4 < '20.8')?'green':(youthPREducationDecContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationDecContents.kpi5 == null)?'grey-2':(youthPREducationDecContents.kpi5 >= '0' && youthPREducationDecContents.kpi5 <= '4.8')?'red':(youthPREducationDecContents.kpi5 > '4.8' && youthPREducationDecContents.kpi5 <= '6.4')?'orange':(youthPREducationDecContents.kpi5 > '6.4' && youthPREducationDecContents.kpi5 < '8')?'yellow-7':(youthPREducationDecContents.kpi5 >= '8' && youthPREducationDecContents.kpi5 < '9.6')?'green':(youthPREducationDecContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi5}}
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
                              :color="(youthPREducationJanContents.kpi1 == null)?'grey-2':(youthPREducationJanContents.kpi1 >= '0' && youthPREducationJanContents.kpi1 <= '5.8')?'red':(youthPREducationJanContents.kpi1 > '5.8' && youthPREducationJanContents.kpi1 <= '7.733333333')?'orange':(youthPREducationJanContents.kpi1 > '7.733333333' && youthPREducationJanContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationJanContents.kpi1 >= '9.666666667' && youthPREducationJanContents.kpi1 < '11.6')?'green':(youthPREducationJanContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJanContents.kpi2 == null)?'grey-2':(youthPREducationJanContents.kpi2 >= '0' && youthPREducationJanContents.kpi2 <= '18.2')?'red':(youthPREducationJanContents.kpi2 > '18.2' && youthPREducationJanContents.kpi2 <= '24.26666667')?'orange':(youthPREducationJanContents.kpi2 > '24.26666667' && youthPREducationJanContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationJanContents.kpi2 >= '30.33333333' && youthPREducationJanContents.kpi2 < '36.4')?'green':(youthPREducationJanContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJanContents.kpi3 == null)?'grey-2':(youthPREducationJanContents.kpi3 >= '0' && youthPREducationJanContents.kpi3 <= '2.8')?'red':(youthPREducationJanContents.kpi3 > '2.8' && youthPREducationJanContents.kpi3 <= '3.733333333')?'orange':(youthPREducationJanContents.kpi3 > '3.733333333' && youthPREducationJanContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationJanContents.kpi3 >= '4.666666667' && youthPREducationJanContents.kpi3 < '5.6')?'green':(youthPREducationJanContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJanContents.kpi4 == null)?'grey-2':(youthPREducationJanContents.kpi4 >= '0' && youthPREducationJanContents.kpi4 <= '10.4')?'red':(youthPREducationJanContents.kpi4 > '10.4' && youthPREducationJanContents.kpi4 <= '13.86666667')?'orange':(youthPREducationJanContents.kpi4 > '13.86666667' && youthPREducationJanContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationJanContents.kpi4 >= '17.33333333' && youthPREducationJanContents.kpi4 < '20.8')?'green':(youthPREducationJanContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJanContents.kpi5 == null)?'grey-2':(youthPREducationJanContents.kpi5 >= '0' && youthPREducationJanContents.kpi5 <= '4.8')?'red':(youthPREducationJanContents.kpi5 > '4.8' && youthPREducationJanContents.kpi5 <= '6.4')?'orange':(youthPREducationJanContents.kpi5 > '6.4' && youthPREducationJanContents.kpi5 < '8')?'yellow-7':(youthPREducationJanContents.kpi5 >= '8' && youthPREducationJanContents.kpi5 < '9.6')?'green':(youthPREducationJanContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi5}}
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
                              :color="(youthPREducationFebContents.kpi1 == null)?'grey-2':(youthPREducationFebContents.kpi1 >= '0' && youthPREducationFebContents.kpi1 <= '5.8')?'red':(youthPREducationFebContents.kpi1 > '5.8' && youthPREducationFebContents.kpi1 <= '7.733333333')?'orange':(youthPREducationFebContents.kpi1 > '7.733333333' && youthPREducationFebContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationFebContents.kpi1 >= '9.666666667' && youthPREducationFebContents.kpi1 < '11.6')?'green':(youthPREducationFebContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationFebContents.kpi2 == null)?'grey-2':(youthPREducationFebContents.kpi2 >= '0' && youthPREducationFebContents.kpi2 <= '18.2')?'red':(youthPREducationFebContents.kpi2 > '18.2' && youthPREducationFebContents.kpi2 <= '24.26666667')?'orange':(youthPREducationFebContents.kpi2 > '24.26666667' && youthPREducationFebContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationFebContents.kpi2 >= '30.33333333' && youthPREducationFebContents.kpi2 < '36.4')?'green':(youthPREducationFebContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationFebContents.kpi3 == null)?'grey-2':(youthPREducationFebContents.kpi3 >= '0' && youthPREducationFebContents.kpi3 <= '2.8')?'red':(youthPREducationFebContents.kpi3 > '2.8' && youthPREducationFebContents.kpi3 <= '3.733333333')?'orange':(youthPREducationFebContents.kpi3 > '3.733333333' && youthPREducationFebContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationFebContents.kpi3 >= '4.666666667' && youthPREducationFebContents.kpi3 < '5.6')?'green':(youthPREducationFebContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationFebContents.kpi4 == null)?'grey-2':(youthPREducationFebContents.kpi4 >= '0' && youthPREducationFebContents.kpi4 <= '10.4')?'red':(youthPREducationFebContents.kpi4 > '10.4' && youthPREducationFebContents.kpi4 <= '13.86666667')?'orange':(youthPREducationFebContents.kpi4 > '13.86666667' && youthPREducationFebContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationFebContents.kpi4 >= '17.33333333' && youthPREducationFebContents.kpi4 < '20.8')?'green':(youthPREducationFebContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationFebContents.kpi5 == null)?'grey-2':(youthPREducationFebContents.kpi5 >= '0' && youthPREducationFebContents.kpi5 <= '4.8')?'red':(youthPREducationFebContents.kpi5 > '4.8' && youthPREducationFebContents.kpi5 <= '6.4')?'orange':(youthPREducationFebContents.kpi5 > '6.4' && youthPREducationFebContents.kpi5 < '8')?'yellow-7':(youthPREducationFebContents.kpi5 >= '8' && youthPREducationFebContents.kpi5 < '9.6')?'green':(youthPREducationFebContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi5}}
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
                              :color="(youthPREducationMarContents.kpi1 == null)?'grey-2':(youthPREducationMarContents.kpi1 >= '0' && youthPREducationMarContents.kpi1 <= '5.8')?'red':(youthPREducationMarContents.kpi1 > '5.8' && youthPREducationMarContents.kpi1 <= '7.733333333')?'orange':(youthPREducationMarContents.kpi1 > '7.733333333' && youthPREducationMarContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationMarContents.kpi1 >= '9.666666667' && youthPREducationMarContents.kpi1 < '11.6')?'green':(youthPREducationMarContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMarContents.kpi2 == null)?'grey-2':(youthPREducationMarContents.kpi2 >= '0' && youthPREducationMarContents.kpi2 <= '18.2')?'red':(youthPREducationMarContents.kpi2 > '18.2' && youthPREducationMarContents.kpi2 <= '24.26666667')?'orange':(youthPREducationMarContents.kpi2 > '24.26666667' && youthPREducationMarContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationMarContents.kpi2 >= '30.33333333' && youthPREducationMarContents.kpi2 < '36.4')?'green':(youthPREducationMarContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMarContents.kpi3 == null)?'grey-2':(youthPREducationMarContents.kpi3 >= '0' && youthPREducationMarContents.kpi3 <= '2.8')?'red':(youthPREducationMarContents.kpi3 > '2.8' && youthPREducationMarContents.kpi3 <= '3.733333333')?'orange':(youthPREducationMarContents.kpi3 > '3.733333333' && youthPREducationMarContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationMarContents.kpi3 >= '4.666666667' && youthPREducationMarContents.kpi3 < '5.6')?'green':(youthPREducationMarContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMarContents.kpi4 == null)?'grey-2':(youthPREducationMarContents.kpi4 >= '0' && youthPREducationMarContents.kpi4 <= '10.4')?'red':(youthPREducationMarContents.kpi4 > '10.4' && youthPREducationMarContents.kpi4 <= '13.86666667')?'orange':(youthPREducationMarContents.kpi4 > '13.86666667' && youthPREducationMarContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationMarContents.kpi4 >= '17.33333333' && youthPREducationMarContents.kpi4 < '20.8')?'green':(youthPREducationMarContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMarContents.kpi5 == null)?'grey-2':(youthPREducationMarContents.kpi5 >= '0' && youthPREducationMarContents.kpi5 <= '4.8')?'red':(youthPREducationMarContents.kpi5 > '4.8' && youthPREducationMarContents.kpi5 <= '6.4')?'orange':(youthPREducationMarContents.kpi5 > '6.4' && youthPREducationMarContents.kpi5 < '8')?'yellow-7':(youthPREducationMarContents.kpi5 >= '8' && youthPREducationMarContents.kpi5 < '9.6')?'green':(youthPREducationMarContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi5}}
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
                              :color="(youthPREducationAprContents.kpi1 == null)?'grey-2':(youthPREducationAprContents.kpi1 >= '0' && youthPREducationAprContents.kpi1 <= '5.8')?'red':(youthPREducationAprContents.kpi1 > '5.8' && youthPREducationAprContents.kpi1 <= '7.733333333')?'orange':(youthPREducationAprContents.kpi1 > '7.733333333' && youthPREducationAprContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationAprContents.kpi1 >= '9.666666667' && youthPREducationAprContents.kpi1 < '11.6')?'green':(youthPREducationAprContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAprContents.kpi2 == null)?'grey-2':(youthPREducationAprContents.kpi2 >= '0' && youthPREducationAprContents.kpi2 <= '18.2')?'red':(youthPREducationAprContents.kpi2 > '18.2' && youthPREducationAprContents.kpi2 <= '24.26666667')?'orange':(youthPREducationAprContents.kpi2 > '24.26666667' && youthPREducationAprContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationAprContents.kpi2 >= '30.33333333' && youthPREducationAprContents.kpi2 < '36.4')?'green':(youthPREducationAprContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAprContents.kpi3 == null)?'grey-2':(youthPREducationAprContents.kpi3 >= '0' && youthPREducationAprContents.kpi3 <= '2.8')?'red':(youthPREducationAprContents.kpi3 > '2.8' && youthPREducationAprContents.kpi3 <= '3.733333333')?'orange':(youthPREducationAprContents.kpi3 > '3.733333333' && youthPREducationAprContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationAprContents.kpi3 >= '4.666666667' && youthPREducationAprContents.kpi3 < '5.6')?'green':(youthPREducationAprContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAprContents.kpi4 == null)?'grey-2':(youthPREducationAprContents.kpi4 >= '0' && youthPREducationAprContents.kpi4 <= '10.4')?'red':(youthPREducationAprContents.kpi4 > '10.4' && youthPREducationAprContents.kpi4 <= '13.86666667')?'orange':(youthPREducationAprContents.kpi4 > '13.86666667' && youthPREducationAprContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationAprContents.kpi4 >= '17.33333333' && youthPREducationAprContents.kpi4 < '20.8')?'green':(youthPREducationAprContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAprContents.kpi5 == null)?'grey-2':(youthPREducationAprContents.kpi5 >= '0' && youthPREducationAprContents.kpi5 <= '4.8')?'red':(youthPREducationAprContents.kpi5 > '4.8' && youthPREducationAprContents.kpi5 <= '6.4')?'orange':(youthPREducationAprContents.kpi5 > '6.4' && youthPREducationAprContents.kpi5 < '8')?'yellow-7':(youthPREducationAprContents.kpi5 >= '8' && youthPREducationAprContents.kpi5 < '9.6')?'green':(youthPREducationAprContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi5}}
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
                              :color="(youthPREducationMayContents.kpi1 == null)?'grey-2':(youthPREducationMayContents.kpi1 >= '0' && youthPREducationMayContents.kpi1 <= '5.8')?'red':(youthPREducationMayContents.kpi1 > '5.8' && youthPREducationMayContents.kpi1 <= '7.733333333')?'orange':(youthPREducationMayContents.kpi1 > '7.733333333' && youthPREducationMayContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationMayContents.kpi1 >= '9.666666667' && youthPREducationMayContents.kpi1 < '11.6')?'green':(youthPREducationMayContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMayContents.kpi2 == null)?'grey-2':(youthPREducationMayContents.kpi2 >= '0' && youthPREducationMayContents.kpi2 <= '18.2')?'red':(youthPREducationMayContents.kpi2 > '18.2' && youthPREducationMayContents.kpi2 <= '24.26666667')?'orange':(youthPREducationMayContents.kpi2 > '24.26666667' && youthPREducationMayContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationMayContents.kpi2 >= '30.33333333' && youthPREducationMayContents.kpi2 < '36.4')?'green':(youthPREducationMayContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMayContents.kpi3 == null)?'grey-2':(youthPREducationMayContents.kpi3 >= '0' && youthPREducationMayContents.kpi3 <= '2.8')?'red':(youthPREducationMayContents.kpi3 > '2.8' && youthPREducationMayContents.kpi3 <= '3.733333333')?'orange':(youthPREducationMayContents.kpi3 > '3.733333333' && youthPREducationMayContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationMayContents.kpi3 >= '4.666666667' && youthPREducationMayContents.kpi3 < '5.6')?'green':(youthPREducationMayContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMayContents.kpi4 == null)?'grey-2':(youthPREducationMayContents.kpi4 >= '0' && youthPREducationMayContents.kpi4 <= '10.4')?'red':(youthPREducationMayContents.kpi4 > '10.4' && youthPREducationMayContents.kpi4 <= '13.86666667')?'orange':(youthPREducationMayContents.kpi4 > '13.86666667' && youthPREducationMayContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationMayContents.kpi4 >= '17.33333333' && youthPREducationMayContents.kpi4 < '20.8')?'green':(youthPREducationMayContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMayContents.kpi5 == null)?'grey-2':(youthPREducationMayContents.kpi5 >= '0' && youthPREducationMayContents.kpi5 <= '4.8')?'red':(youthPREducationMayContents.kpi5 > '4.8' && youthPREducationMayContents.kpi5 <= '6.4')?'orange':(youthPREducationMayContents.kpi5 > '6.4' && youthPREducationMayContents.kpi5 < '8')?'yellow-7':(youthPREducationMayContents.kpi5 >= '8' && youthPREducationMayContents.kpi5 < '9.6')?'green':(youthPREducationMayContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi5}}
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
                              :color="(youthPREducationJunContents.kpi1 == null)?'grey-2':(youthPREducationJunContents.kpi1 >= '0' && youthPREducationJunContents.kpi1 <= '5.8')?'red':(youthPREducationJunContents.kpi1 > '5.8' && youthPREducationJunContents.kpi1 <= '7.733333333')?'orange':(youthPREducationJunContents.kpi1 > '7.733333333' && youthPREducationJunContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationJunContents.kpi1 >= '9.666666667' && youthPREducationJunContents.kpi1 < '11.6')?'green':(youthPREducationJunContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJunContents.kpi2 == null)?'grey-2':(youthPREducationJunContents.kpi2 >= '0' && youthPREducationJunContents.kpi2 <= '18.2')?'red':(youthPREducationJunContents.kpi2 > '18.2' && youthPREducationJunContents.kpi2 <= '24.26666667')?'orange':(youthPREducationJunContents.kpi2 > '24.26666667' && youthPREducationJunContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationJunContents.kpi2 >= '30.33333333' && youthPREducationJunContents.kpi2 < '36.4')?'green':(youthPREducationJunContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJunContents.kpi3 == null)?'grey-2':(youthPREducationJunContents.kpi3 >= '0' && youthPREducationJunContents.kpi3 <= '2.8')?'red':(youthPREducationJunContents.kpi3 > '2.8' && youthPREducationJunContents.kpi3 <= '3.733333333')?'orange':(youthPREducationJunContents.kpi3 > '3.733333333' && youthPREducationJunContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationJunContents.kpi3 >= '4.666666667' && youthPREducationJunContents.kpi3 < '5.6')?'green':(youthPREducationJunContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJunContents.kpi4 == null)?'grey-2':(youthPREducationJunContents.kpi4 >= '0' && youthPREducationJunContents.kpi4 <= '10.4')?'red':(youthPREducationJunContents.kpi4 > '10.4' && youthPREducationJunContents.kpi4 <= '13.86666667')?'orange':(youthPREducationJunContents.kpi4 > '13.86666667' && youthPREducationJunContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationJunContents.kpi4 >= '17.33333333' && youthPREducationJunContents.kpi4 < '20.8')?'green':(youthPREducationJunContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJunContents.kpi5 == null)?'grey-2':(youthPREducationJunContents.kpi5 >= '0' && youthPREducationJunContents.kpi5 <= '4.8')?'red':(youthPREducationJunContents.kpi5 > '4.8' && youthPREducationJunContents.kpi5 <= '6.4')?'orange':(youthPREducationJunContents.kpi5 > '6.4' && youthPREducationJunContents.kpi5 < '8')?'yellow-7':(youthPREducationJunContents.kpi5 >= '8' && youthPREducationJunContents.kpi5 < '9.6')?'green':(youthPREducationJunContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi5}}
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
                              :color="(youthPREducationJulContents.kpi1 == null)?'grey-2':(youthPREducationJulContents.kpi1 >= '0' && youthPREducationJulContents.kpi1 <= '5.8')?'red':(youthPREducationJulContents.kpi1 > '5.8' && youthPREducationJulContents.kpi1 <= '7.733333333')?'orange':(youthPREducationJulContents.kpi1 > '7.733333333' && youthPREducationJulContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationJulContents.kpi1 >= '9.666666667' && youthPREducationJulContents.kpi1 < '11.6')?'green':(youthPREducationJulContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJulContents.kpi2 == null)?'grey-2':(youthPREducationJulContents.kpi2 >= '0' && youthPREducationJulContents.kpi2 <= '18.2')?'red':(youthPREducationJulContents.kpi2 > '18.2' && youthPREducationJulContents.kpi2 <= '24.26666667')?'orange':(youthPREducationJulContents.kpi2 > '24.26666667' && youthPREducationJulContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationJulContents.kpi2 >= '30.33333333' && youthPREducationJulContents.kpi2 < '36.4')?'green':(youthPREducationJulContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJulContents.kpi3 == null)?'grey-2':(youthPREducationJulContents.kpi3 >= '0' && youthPREducationJulContents.kpi3 <= '2.8')?'red':(youthPREducationJulContents.kpi3 > '2.8' && youthPREducationJulContents.kpi3 <= '3.733333333')?'orange':(youthPREducationJulContents.kpi3 > '3.733333333' && youthPREducationJulContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationJulContents.kpi3 >= '4.666666667' && youthPREducationJulContents.kpi3 < '5.6')?'green':(youthPREducationJulContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJulContents.kpi4 == null)?'grey-2':(youthPREducationJulContents.kpi4 >= '0' && youthPREducationJulContents.kpi4 <= '10.4')?'red':(youthPREducationJulContents.kpi4 > '10.4' && youthPREducationJulContents.kpi4 <= '13.86666667')?'orange':(youthPREducationJulContents.kpi4 > '13.86666667' && youthPREducationJulContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationJulContents.kpi4 >= '17.33333333' && youthPREducationJulContents.kpi4 < '20.8')?'green':(youthPREducationJulContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJulContents.kpi5 == null)?'grey-2':(youthPREducationJulContents.kpi5 >= '0' && youthPREducationJulContents.kpi5 <= '4.8')?'red':(youthPREducationJulContents.kpi5 > '4.8' && youthPREducationJulContents.kpi5 <= '6.4')?'orange':(youthPREducationJulContents.kpi5 > '6.4' && youthPREducationJulContents.kpi5 < '8')?'yellow-7':(youthPREducationJulContents.kpi5 >= '8' && youthPREducationJulContents.kpi5 < '9.6')?'green':(youthPREducationJulContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi5}}
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
                              :color="(youthPREducationAugContents.kpi1 == null)?'grey-2':(youthPREducationAugContents.kpi1 >= '0' && youthPREducationAugContents.kpi1 <= '5.8')?'red':(youthPREducationAugContents.kpi1 > '5.8' && youthPREducationAugContents.kpi1 <= '7.733333333')?'orange':(youthPREducationAugContents.kpi1 > '7.733333333' && youthPREducationAugContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationAugContents.kpi1 >= '9.666666667' && youthPREducationAugContents.kpi1 < '11.6')?'green':(youthPREducationAugContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAugContents.kpi2 == null)?'grey-2':(youthPREducationAugContents.kpi2 >= '0' && youthPREducationAugContents.kpi2 <= '18.2')?'red':(youthPREducationAugContents.kpi2 > '18.2' && youthPREducationAugContents.kpi2 <= '24.26666667')?'orange':(youthPREducationAugContents.kpi2 > '24.26666667' && youthPREducationAugContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationAugContents.kpi2 >= '30.33333333' && youthPREducationAugContents.kpi2 < '36.4')?'green':(youthPREducationAugContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAugContents.kpi3 == null)?'grey-2':(youthPREducationAugContents.kpi3 >= '0' && youthPREducationAugContents.kpi3 <= '2.8')?'red':(youthPREducationAugContents.kpi3 > '2.8' && youthPREducationAugContents.kpi3 <= '3.733333333')?'orange':(youthPREducationAugContents.kpi3 > '3.733333333' && youthPREducationAugContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationAugContents.kpi3 >= '4.666666667' && youthPREducationAugContents.kpi3 < '5.6')?'green':(youthPREducationAugContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAugContents.kpi4 == null)?'grey-2':(youthPREducationAugContents.kpi4 >= '0' && youthPREducationAugContents.kpi4 <= '10.4')?'red':(youthPREducationAugContents.kpi4 > '10.4' && youthPREducationAugContents.kpi4 <= '13.86666667')?'orange':(youthPREducationAugContents.kpi4 > '13.86666667' && youthPREducationAugContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationAugContents.kpi4 >= '17.33333333' && youthPREducationAugContents.kpi4 < '20.8')?'green':(youthPREducationAugContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAugContents.kpi5 == null)?'grey-2':(youthPREducationAugContents.kpi5 >= '0' && youthPREducationAugContents.kpi5 <= '4.8')?'red':(youthPREducationAugContents.kpi5 > '4.8' && youthPREducationAugContents.kpi5 <= '6.4')?'orange':(youthPREducationAugContents.kpi5 > '6.4' && youthPREducationAugContents.kpi5 < '8')?'yellow-7':(youthPREducationAugContents.kpi5 >= '8' && youthPREducationAugContents.kpi5 < '9.6')?'green':(youthPREducationAugContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi5}}
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
                              :color="(youthPREducationSepContents.kpi1 == null)?'grey-2':(youthPREducationSepContents.kpi1 >= '0' && youthPREducationSepContents.kpi1 <= '5.8')?'red':(youthPREducationSepContents.kpi1 > '5.8' && youthPREducationSepContents.kpi1 <= '7.733333333')?'orange':(youthPREducationSepContents.kpi1 > '7.733333333' && youthPREducationSepContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationSepContents.kpi1 >= '9.666666667' && youthPREducationSepContents.kpi1 < '11.6')?'green':(youthPREducationSepContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationSepContents.kpi2 == null)?'grey-2':(youthPREducationSepContents.kpi2 >= '0' && youthPREducationSepContents.kpi2 <= '18.2')?'red':(youthPREducationSepContents.kpi2 > '18.2' && youthPREducationSepContents.kpi2 <= '24.26666667')?'orange':(youthPREducationSepContents.kpi2 > '24.26666667' && youthPREducationSepContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationSepContents.kpi2 >= '30.33333333' && youthPREducationSepContents.kpi2 < '36.4')?'green':(youthPREducationSepContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationSepContents.kpi3 == null)?'grey-2':(youthPREducationSepContents.kpi3 >= '0' && youthPREducationSepContents.kpi3 <= '2.8')?'red':(youthPREducationSepContents.kpi3 > '2.8' && youthPREducationSepContents.kpi3 <= '3.733333333')?'orange':(youthPREducationSepContents.kpi3 > '3.733333333' && youthPREducationSepContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationSepContents.kpi3 >= '4.666666667' && youthPREducationSepContents.kpi3 < '5.6')?'green':(youthPREducationSepContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationSepContents.kpi4 == null)?'grey-2':(youthPREducationSepContents.kpi4 >= '0' && youthPREducationSepContents.kpi4 <= '10.4')?'red':(youthPREducationSepContents.kpi4 > '10.4' && youthPREducationSepContents.kpi4 <= '13.86666667')?'orange':(youthPREducationSepContents.kpi4 > '13.86666667' && youthPREducationSepContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationSepContents.kpi4 >= '17.33333333' && youthPREducationSepContents.kpi4 < '20.8')?'green':(youthPREducationSepContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationSepContents.kpi5 == null)?'grey-2':(youthPREducationSepContents.kpi5 >= '0' && youthPREducationSepContents.kpi5 <= '4.8')?'red':(youthPREducationSepContents.kpi5 > '4.8' && youthPREducationSepContents.kpi5 <= '6.4')?'orange':(youthPREducationSepContents.kpi5 > '6.4' && youthPREducationSepContents.kpi5 < '8')?'yellow-7':(youthPREducationSepContents.kpi5 >= '8' && youthPREducationSepContents.kpi5 < '9.6')?'green':(youthPREducationSepContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi5}}
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
                              :color="(youthPREducationOctContents.kpi1 == null)?'grey-2':(youthPREducationOctContents.kpi1 >= '0' && youthPREducationOctContents.kpi1 <= '5.8')?'red':(youthPREducationOctContents.kpi1 > '5.8' && youthPREducationOctContents.kpi1 <= '7.733333333')?'orange':(youthPREducationOctContents.kpi1 > '7.733333333' && youthPREducationOctContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationOctContents.kpi1 >= '9.666666667' && youthPREducationOctContents.kpi1 < '11.6')?'green':(youthPREducationOctContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationOctContents.kpi2 == null)?'grey-2':(youthPREducationOctContents.kpi2 >= '0' && youthPREducationOctContents.kpi2 <= '18.2')?'red':(youthPREducationOctContents.kpi2 > '18.2' && youthPREducationOctContents.kpi2 <= '24.26666667')?'orange':(youthPREducationOctContents.kpi2 > '24.26666667' && youthPREducationOctContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationOctContents.kpi2 >= '30.33333333' && youthPREducationOctContents.kpi2 < '36.4')?'green':(youthPREducationOctContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationOctContents.kpi3 == null)?'grey-2':(youthPREducationOctContents.kpi3 >= '0' && youthPREducationOctContents.kpi3 <= '2.8')?'red':(youthPREducationOctContents.kpi3 > '2.8' && youthPREducationOctContents.kpi3 <= '3.733333333')?'orange':(youthPREducationOctContents.kpi3 > '3.733333333' && youthPREducationOctContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationOctContents.kpi3 >= '4.666666667' && youthPREducationOctContents.kpi3 < '5.6')?'green':(youthPREducationOctContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationOctContents.kpi4 == null)?'grey-2':(youthPREducationOctContents.kpi4 >= '0' && youthPREducationOctContents.kpi4 <= '10.4')?'red':(youthPREducationOctContents.kpi4 > '10.4' && youthPREducationOctContents.kpi4 <= '13.86666667')?'orange':(youthPREducationOctContents.kpi4 > '13.86666667' && youthPREducationOctContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationOctContents.kpi4 >= '17.33333333' && youthPREducationOctContents.kpi4 < '20.8')?'green':(youthPREducationOctContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationOctContents.kpi5 == null)?'grey-2':(youthPREducationOctContents.kpi5 >= '0' && youthPREducationOctContents.kpi5 <= '4.8')?'red':(youthPREducationOctContents.kpi5 > '4.8' && youthPREducationOctContents.kpi5 <= '6.4')?'orange':(youthPREducationOctContents.kpi5 > '6.4' && youthPREducationOctContents.kpi5 < '8')?'yellow-7':(youthPREducationOctContents.kpi5 >= '8' && youthPREducationOctContents.kpi5 < '9.6')?'green':(youthPREducationOctContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi5}}
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
                              :color="(youthPREducationNovContents.kpi1 == null)?'grey-2':(youthPREducationNovContents.kpi1 >= '0' && youthPREducationNovContents.kpi1 <= '5.8')?'red':(youthPREducationNovContents.kpi1 > '5.8' && youthPREducationNovContents.kpi1 <= '7.733333333')?'orange':(youthPREducationNovContents.kpi1 > '7.733333333' && youthPREducationNovContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationNovContents.kpi1 >= '9.666666667' && youthPREducationNovContents.kpi1 < '11.6')?'green':(youthPREducationNovContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationNovContents.kpi2 == null)?'grey-2':(youthPREducationNovContents.kpi2 >= '0' && youthPREducationNovContents.kpi2 <= '18.2')?'red':(youthPREducationNovContents.kpi2 > '18.2' && youthPREducationNovContents.kpi2 <= '24.26666667')?'orange':(youthPREducationNovContents.kpi2 > '24.26666667' && youthPREducationNovContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationNovContents.kpi2 >= '30.33333333' && youthPREducationNovContents.kpi2 < '36.4')?'green':(youthPREducationNovContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationNovContents.kpi3 == null)?'grey-2':(youthPREducationNovContents.kpi3 >= '0' && youthPREducationNovContents.kpi3 <= '2.8')?'red':(youthPREducationNovContents.kpi3 > '2.8' && youthPREducationNovContents.kpi3 <= '3.733333333')?'orange':(youthPREducationNovContents.kpi3 > '3.733333333' && youthPREducationNovContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationNovContents.kpi3 >= '4.666666667' && youthPREducationNovContents.kpi3 < '5.6')?'green':(youthPREducationNovContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationNovContents.kpi4 == null)?'grey-2':(youthPREducationNovContents.kpi4 >= '0' && youthPREducationNovContents.kpi4 <= '10.4')?'red':(youthPREducationNovContents.kpi4 > '10.4' && youthPREducationNovContents.kpi4 <= '13.86666667')?'orange':(youthPREducationNovContents.kpi4 > '13.86666667' && youthPREducationNovContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationNovContents.kpi4 >= '17.33333333' && youthPREducationNovContents.kpi4 < '20.8')?'green':(youthPREducationNovContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationNovContents.kpi5 == null)?'grey-2':(youthPREducationNovContents.kpi5 >= '0' && youthPREducationNovContents.kpi5 <= '4.8')?'red':(youthPREducationNovContents.kpi5 > '4.8' && youthPREducationNovContents.kpi5 <= '6.4')?'orange':(youthPREducationNovContents.kpi5 > '6.4' && youthPREducationNovContents.kpi5 < '8')?'yellow-7':(youthPREducationNovContents.kpi5 >= '8' && youthPREducationNovContents.kpi5 < '9.6')?'green':(youthPREducationNovContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi5}}
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
                              :color="(youthPREducationDecContents.kpi1 == null)?'grey-2':(youthPREducationDecContents.kpi1 >= '0' && youthPREducationDecContents.kpi1 <= '5.8')?'red':(youthPREducationDecContents.kpi1 > '5.8' && youthPREducationDecContents.kpi1 <= '7.733333333')?'orange':(youthPREducationDecContents.kpi1 > '7.733333333' && youthPREducationDecContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationDecContents.kpi1 >= '9.666666667' && youthPREducationDecContents.kpi1 < '11.6')?'green':(youthPREducationDecContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationDecContents.kpi2 == null)?'grey-2':(youthPREducationDecContents.kpi2 >= '0' && youthPREducationDecContents.kpi2 <= '18.2')?'red':(youthPREducationDecContents.kpi2 > '18.2' && youthPREducationDecContents.kpi2 <= '24.26666667')?'orange':(youthPREducationDecContents.kpi2 > '24.26666667' && youthPREducationDecContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationDecContents.kpi2 >= '30.33333333' && youthPREducationDecContents.kpi2 < '36.4')?'green':(youthPREducationDecContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationDecContents.kpi3 == null)?'grey-2':(youthPREducationDecContents.kpi3 >= '0' && youthPREducationDecContents.kpi3 <= '2.8')?'red':(youthPREducationDecContents.kpi3 > '2.8' && youthPREducationDecContents.kpi3 <= '3.733333333')?'orange':(youthPREducationDecContents.kpi3 > '3.733333333' && youthPREducationDecContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationDecContents.kpi3 >= '4.666666667' && youthPREducationDecContents.kpi3 < '5.6')?'green':(youthPREducationDecContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationDecContents.kpi4 == null)?'grey-2':(youthPREducationDecContents.kpi4 >= '0' && youthPREducationDecContents.kpi4 <= '10.4')?'red':(youthPREducationDecContents.kpi4 > '10.4' && youthPREducationDecContents.kpi4 <= '13.86666667')?'orange':(youthPREducationDecContents.kpi4 > '13.86666667' && youthPREducationDecContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationDecContents.kpi4 >= '17.33333333' && youthPREducationDecContents.kpi4 < '20.8')?'green':(youthPREducationDecContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationDecContents.kpi5 == null)?'grey-2':(youthPREducationDecContents.kpi5 >= '0' && youthPREducationDecContents.kpi5 <= '4.8')?'red':(youthPREducationDecContents.kpi5 > '4.8' && youthPREducationDecContents.kpi5 <= '6.4')?'orange':(youthPREducationDecContents.kpi5 > '6.4' && youthPREducationDecContents.kpi5 < '8')?'yellow-7':(youthPREducationDecContents.kpi5 >= '8' && youthPREducationDecContents.kpi5 < '9.6')?'green':(youthPREducationDecContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi5}}
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
                              :color="(youthPREducationJanContents.kpi1 == null)?'grey-2':(youthPREducationJanContents.kpi1 >= '0' && youthPREducationJanContents.kpi1 <= '5.8')?'red':(youthPREducationJanContents.kpi1 > '5.8' && youthPREducationJanContents.kpi1 <= '7.733333333')?'orange':(youthPREducationJanContents.kpi1 > '7.733333333' && youthPREducationJanContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationJanContents.kpi1 >= '9.666666667' && youthPREducationJanContents.kpi1 < '11.6')?'green':(youthPREducationJanContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJanContents.kpi2 == null)?'grey-2':(youthPREducationJanContents.kpi2 >= '0' && youthPREducationJanContents.kpi2 <= '18.2')?'red':(youthPREducationJanContents.kpi2 > '18.2' && youthPREducationJanContents.kpi2 <= '24.26666667')?'orange':(youthPREducationJanContents.kpi2 > '24.26666667' && youthPREducationJanContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationJanContents.kpi2 >= '30.33333333' && youthPREducationJanContents.kpi2 < '36.4')?'green':(youthPREducationJanContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJanContents.kpi3 == null)?'grey-2':(youthPREducationJanContents.kpi3 >= '0' && youthPREducationJanContents.kpi3 <= '2.8')?'red':(youthPREducationJanContents.kpi3 > '2.8' && youthPREducationJanContents.kpi3 <= '3.733333333')?'orange':(youthPREducationJanContents.kpi3 > '3.733333333' && youthPREducationJanContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationJanContents.kpi3 >= '4.666666667' && youthPREducationJanContents.kpi3 < '5.6')?'green':(youthPREducationJanContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJanContents.kpi4 == null)?'grey-2':(youthPREducationJanContents.kpi4 >= '0' && youthPREducationJanContents.kpi4 <= '10.4')?'red':(youthPREducationJanContents.kpi4 > '10.4' && youthPREducationJanContents.kpi4 <= '13.86666667')?'orange':(youthPREducationJanContents.kpi4 > '13.86666667' && youthPREducationJanContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationJanContents.kpi4 >= '17.33333333' && youthPREducationJanContents.kpi4 < '20.8')?'green':(youthPREducationJanContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJanContents.kpi5 == null)?'grey-2':(youthPREducationJanContents.kpi5 >= '0' && youthPREducationJanContents.kpi5 <= '4.8')?'red':(youthPREducationJanContents.kpi5 > '4.8' && youthPREducationJanContents.kpi5 <= '6.4')?'orange':(youthPREducationJanContents.kpi5 > '6.4' && youthPREducationJanContents.kpi5 < '8')?'yellow-7':(youthPREducationJanContents.kpi5 >= '8' && youthPREducationJanContents.kpi5 < '9.6')?'green':(youthPREducationJanContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi5}}
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
                              :color="(youthPREducationFebContents.kpi1 == null)?'grey-2':(youthPREducationFebContents.kpi1 >= '0' && youthPREducationFebContents.kpi1 <= '5.8')?'red':(youthPREducationFebContents.kpi1 > '5.8' && youthPREducationFebContents.kpi1 <= '7.733333333')?'orange':(youthPREducationFebContents.kpi1 > '7.733333333' && youthPREducationFebContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationFebContents.kpi1 >= '9.666666667' && youthPREducationFebContents.kpi1 < '11.6')?'green':(youthPREducationFebContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationFebContents.kpi2 == null)?'grey-2':(youthPREducationFebContents.kpi2 >= '0' && youthPREducationFebContents.kpi2 <= '18.2')?'red':(youthPREducationFebContents.kpi2 > '18.2' && youthPREducationFebContents.kpi2 <= '24.26666667')?'orange':(youthPREducationFebContents.kpi2 > '24.26666667' && youthPREducationFebContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationFebContents.kpi2 >= '30.33333333' && youthPREducationFebContents.kpi2 < '36.4')?'green':(youthPREducationFebContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationFebContents.kpi3 == null)?'grey-2':(youthPREducationFebContents.kpi3 >= '0' && youthPREducationFebContents.kpi3 <= '2.8')?'red':(youthPREducationFebContents.kpi3 > '2.8' && youthPREducationFebContents.kpi3 <= '3.733333333')?'orange':(youthPREducationFebContents.kpi3 > '3.733333333' && youthPREducationFebContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationFebContents.kpi3 >= '4.666666667' && youthPREducationFebContents.kpi3 < '5.6')?'green':(youthPREducationFebContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationFebContents.kpi4 == null)?'grey-2':(youthPREducationFebContents.kpi4 >= '0' && youthPREducationFebContents.kpi4 <= '10.4')?'red':(youthPREducationFebContents.kpi4 > '10.4' && youthPREducationFebContents.kpi4 <= '13.86666667')?'orange':(youthPREducationFebContents.kpi4 > '13.86666667' && youthPREducationFebContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationFebContents.kpi4 >= '17.33333333' && youthPREducationFebContents.kpi4 < '20.8')?'green':(youthPREducationFebContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationFebContents.kpi5 == null)?'grey-2':(youthPREducationFebContents.kpi5 >= '0' && youthPREducationFebContents.kpi5 <= '4.8')?'red':(youthPREducationFebContents.kpi5 > '4.8' && youthPREducationFebContents.kpi5 <= '6.4')?'orange':(youthPREducationFebContents.kpi5 > '6.4' && youthPREducationFebContents.kpi5 < '8')?'yellow-7':(youthPREducationFebContents.kpi5 >= '8' && youthPREducationFebContents.kpi5 < '9.6')?'green':(youthPREducationFebContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi5}}
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
                              :color="(youthPREducationMarContents.kpi1 == null)?'grey-2':(youthPREducationMarContents.kpi1 >= '0' && youthPREducationMarContents.kpi1 <= '5.8')?'red':(youthPREducationMarContents.kpi1 > '5.8' && youthPREducationMarContents.kpi1 <= '7.733333333')?'orange':(youthPREducationMarContents.kpi1 > '7.733333333' && youthPREducationMarContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationMarContents.kpi1 >= '9.666666667' && youthPREducationMarContents.kpi1 < '11.6')?'green':(youthPREducationMarContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMarContents.kpi2 == null)?'grey-2':(youthPREducationMarContents.kpi2 >= '0' && youthPREducationMarContents.kpi2 <= '18.2')?'red':(youthPREducationMarContents.kpi2 > '18.2' && youthPREducationMarContents.kpi2 <= '24.26666667')?'orange':(youthPREducationMarContents.kpi2 > '24.26666667' && youthPREducationMarContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationMarContents.kpi2 >= '30.33333333' && youthPREducationMarContents.kpi2 < '36.4')?'green':(youthPREducationMarContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMarContents.kpi3 == null)?'grey-2':(youthPREducationMarContents.kpi3 >= '0' && youthPREducationMarContents.kpi3 <= '2.8')?'red':(youthPREducationMarContents.kpi3 > '2.8' && youthPREducationMarContents.kpi3 <= '3.733333333')?'orange':(youthPREducationMarContents.kpi3 > '3.733333333' && youthPREducationMarContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationMarContents.kpi3 >= '4.666666667' && youthPREducationMarContents.kpi3 < '5.6')?'green':(youthPREducationMarContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMarContents.kpi4 == null)?'grey-2':(youthPREducationMarContents.kpi4 >= '0' && youthPREducationMarContents.kpi4 <= '10.4')?'red':(youthPREducationMarContents.kpi4 > '10.4' && youthPREducationMarContents.kpi4 <= '13.86666667')?'orange':(youthPREducationMarContents.kpi4 > '13.86666667' && youthPREducationMarContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationMarContents.kpi4 >= '17.33333333' && youthPREducationMarContents.kpi4 < '20.8')?'green':(youthPREducationMarContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMarContents.kpi5 == null)?'grey-2':(youthPREducationMarContents.kpi5 >= '0' && youthPREducationMarContents.kpi5 <= '4.8')?'red':(youthPREducationMarContents.kpi5 > '4.8' && youthPREducationMarContents.kpi5 <= '6.4')?'orange':(youthPREducationMarContents.kpi5 > '6.4' && youthPREducationMarContents.kpi5 < '8')?'yellow-7':(youthPREducationMarContents.kpi5 >= '8' && youthPREducationMarContents.kpi5 < '9.6')?'green':(youthPREducationMarContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi5}}
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
                              :color="(youthPREducationAprContents.kpi1 == null)?'grey-2':(youthPREducationAprContents.kpi1 >= '0' && youthPREducationAprContents.kpi1 <= '5.8')?'red':(youthPREducationAprContents.kpi1 > '5.8' && youthPREducationAprContents.kpi1 <= '7.733333333')?'orange':(youthPREducationAprContents.kpi1 > '7.733333333' && youthPREducationAprContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationAprContents.kpi1 >= '9.666666667' && youthPREducationAprContents.kpi1 < '11.6')?'green':(youthPREducationAprContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAprContents.kpi2 == null)?'grey-2':(youthPREducationAprContents.kpi2 >= '0' && youthPREducationAprContents.kpi2 <= '18.2')?'red':(youthPREducationAprContents.kpi2 > '18.2' && youthPREducationAprContents.kpi2 <= '24.26666667')?'orange':(youthPREducationAprContents.kpi2 > '24.26666667' && youthPREducationAprContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationAprContents.kpi2 >= '30.33333333' && youthPREducationAprContents.kpi2 < '36.4')?'green':(youthPREducationAprContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAprContents.kpi3 == null)?'grey-2':(youthPREducationAprContents.kpi3 >= '0' && youthPREducationAprContents.kpi3 <= '2.8')?'red':(youthPREducationAprContents.kpi3 > '2.8' && youthPREducationAprContents.kpi3 <= '3.733333333')?'orange':(youthPREducationAprContents.kpi3 > '3.733333333' && youthPREducationAprContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationAprContents.kpi3 >= '4.666666667' && youthPREducationAprContents.kpi3 < '5.6')?'green':(youthPREducationAprContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAprContents.kpi4 == null)?'grey-2':(youthPREducationAprContents.kpi4 >= '0' && youthPREducationAprContents.kpi4 <= '10.4')?'red':(youthPREducationAprContents.kpi4 > '10.4' && youthPREducationAprContents.kpi4 <= '13.86666667')?'orange':(youthPREducationAprContents.kpi4 > '13.86666667' && youthPREducationAprContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationAprContents.kpi4 >= '17.33333333' && youthPREducationAprContents.kpi4 < '20.8')?'green':(youthPREducationAprContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAprContents.kpi5 == null)?'grey-2':(youthPREducationAprContents.kpi5 >= '0' && youthPREducationAprContents.kpi5 <= '4.8')?'red':(youthPREducationAprContents.kpi5 > '4.8' && youthPREducationAprContents.kpi5 <= '6.4')?'orange':(youthPREducationAprContents.kpi5 > '6.4' && youthPREducationAprContents.kpi5 < '8')?'yellow-7':(youthPREducationAprContents.kpi5 >= '8' && youthPREducationAprContents.kpi5 < '9.6')?'green':(youthPREducationAprContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi5}}
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
                              :color="(youthPREducationMayContents.kpi1 == null)?'grey-2':(youthPREducationMayContents.kpi1 >= '0' && youthPREducationMayContents.kpi1 <= '5.8')?'red':(youthPREducationMayContents.kpi1 > '5.8' && youthPREducationMayContents.kpi1 <= '7.733333333')?'orange':(youthPREducationMayContents.kpi1 > '7.733333333' && youthPREducationMayContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationMayContents.kpi1 >= '9.666666667' && youthPREducationMayContents.kpi1 < '11.6')?'green':(youthPREducationMayContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMayContents.kpi2 == null)?'grey-2':(youthPREducationMayContents.kpi2 >= '0' && youthPREducationMayContents.kpi2 <= '18.2')?'red':(youthPREducationMayContents.kpi2 > '18.2' && youthPREducationMayContents.kpi2 <= '24.26666667')?'orange':(youthPREducationMayContents.kpi2 > '24.26666667' && youthPREducationMayContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationMayContents.kpi2 >= '30.33333333' && youthPREducationMayContents.kpi2 < '36.4')?'green':(youthPREducationMayContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMayContents.kpi3 == null)?'grey-2':(youthPREducationMayContents.kpi3 >= '0' && youthPREducationMayContents.kpi3 <= '2.8')?'red':(youthPREducationMayContents.kpi3 > '2.8' && youthPREducationMayContents.kpi3 <= '3.733333333')?'orange':(youthPREducationMayContents.kpi3 > '3.733333333' && youthPREducationMayContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationMayContents.kpi3 >= '4.666666667' && youthPREducationMayContents.kpi3 < '5.6')?'green':(youthPREducationMayContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMayContents.kpi4 == null)?'grey-2':(youthPREducationMayContents.kpi4 >= '0' && youthPREducationMayContents.kpi4 <= '10.4')?'red':(youthPREducationMayContents.kpi4 > '10.4' && youthPREducationMayContents.kpi4 <= '13.86666667')?'orange':(youthPREducationMayContents.kpi4 > '13.86666667' && youthPREducationMayContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationMayContents.kpi4 >= '17.33333333' && youthPREducationMayContents.kpi4 < '20.8')?'green':(youthPREducationMayContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMayContents.kpi5 == null)?'grey-2':(youthPREducationMayContents.kpi5 >= '0' && youthPREducationMayContents.kpi5 <= '4.8')?'red':(youthPREducationMayContents.kpi5 > '4.8' && youthPREducationMayContents.kpi5 <= '6.4')?'orange':(youthPREducationMayContents.kpi5 > '6.4' && youthPREducationMayContents.kpi5 < '8')?'yellow-7':(youthPREducationMayContents.kpi5 >= '8' && youthPREducationMayContents.kpi5 < '9.6')?'green':(youthPREducationMayContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi5}}
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
                              :color="(youthPREducationJunContents.kpi1 == null)?'grey-2':(youthPREducationJunContents.kpi1 >= '0' && youthPREducationJunContents.kpi1 <= '5.8')?'red':(youthPREducationJunContents.kpi1 > '5.8' && youthPREducationJunContents.kpi1 <= '7.733333333')?'orange':(youthPREducationJunContents.kpi1 > '7.733333333' && youthPREducationJunContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationJunContents.kpi1 >= '9.666666667' && youthPREducationJunContents.kpi1 < '11.6')?'green':(youthPREducationJunContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJunContents.kpi2 == null)?'grey-2':(youthPREducationJunContents.kpi2 >= '0' && youthPREducationJunContents.kpi2 <= '18.2')?'red':(youthPREducationJunContents.kpi2 > '18.2' && youthPREducationJunContents.kpi2 <= '24.26666667')?'orange':(youthPREducationJunContents.kpi2 > '24.26666667' && youthPREducationJunContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationJunContents.kpi2 >= '30.33333333' && youthPREducationJunContents.kpi2 < '36.4')?'green':(youthPREducationJunContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJunContents.kpi3 == null)?'grey-2':(youthPREducationJunContents.kpi3 >= '0' && youthPREducationJunContents.kpi3 <= '2.8')?'red':(youthPREducationJunContents.kpi3 > '2.8' && youthPREducationJunContents.kpi3 <= '3.733333333')?'orange':(youthPREducationJunContents.kpi3 > '3.733333333' && youthPREducationJunContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationJunContents.kpi3 >= '4.666666667' && youthPREducationJunContents.kpi3 < '5.6')?'green':(youthPREducationJunContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJunContents.kpi4 == null)?'grey-2':(youthPREducationJunContents.kpi4 >= '0' && youthPREducationJunContents.kpi4 <= '10.4')?'red':(youthPREducationJunContents.kpi4 > '10.4' && youthPREducationJunContents.kpi4 <= '13.86666667')?'orange':(youthPREducationJunContents.kpi4 > '13.86666667' && youthPREducationJunContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationJunContents.kpi4 >= '17.33333333' && youthPREducationJunContents.kpi4 < '20.8')?'green':(youthPREducationJunContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJunContents.kpi5 == null)?'grey-2':(youthPREducationJunContents.kpi5 >= '0' && youthPREducationJunContents.kpi5 <= '4.8')?'red':(youthPREducationJunContents.kpi5 > '4.8' && youthPREducationJunContents.kpi5 <= '6.4')?'orange':(youthPREducationJunContents.kpi5 > '6.4' && youthPREducationJunContents.kpi5 < '8')?'yellow-7':(youthPREducationJunContents.kpi5 >= '8' && youthPREducationJunContents.kpi5 < '9.6')?'green':(youthPREducationJunContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi5}}
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
                              :color="(youthPREducationJulContents.kpi1 == null)?'grey-2':(youthPREducationJulContents.kpi1 >= '0' && youthPREducationJulContents.kpi1 <= '5.8')?'red':(youthPREducationJulContents.kpi1 > '5.8' && youthPREducationJulContents.kpi1 <= '7.733333333')?'orange':(youthPREducationJulContents.kpi1 > '7.733333333' && youthPREducationJulContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationJulContents.kpi1 >= '9.666666667' && youthPREducationJulContents.kpi1 < '11.6')?'green':(youthPREducationJulContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJulContents.kpi2 == null)?'grey-2':(youthPREducationJulContents.kpi2 >= '0' && youthPREducationJulContents.kpi2 <= '18.2')?'red':(youthPREducationJulContents.kpi2 > '18.2' && youthPREducationJulContents.kpi2 <= '24.26666667')?'orange':(youthPREducationJulContents.kpi2 > '24.26666667' && youthPREducationJulContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationJulContents.kpi2 >= '30.33333333' && youthPREducationJulContents.kpi2 < '36.4')?'green':(youthPREducationJulContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJulContents.kpi3 == null)?'grey-2':(youthPREducationJulContents.kpi3 >= '0' && youthPREducationJulContents.kpi3 <= '2.8')?'red':(youthPREducationJulContents.kpi3 > '2.8' && youthPREducationJulContents.kpi3 <= '3.733333333')?'orange':(youthPREducationJulContents.kpi3 > '3.733333333' && youthPREducationJulContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationJulContents.kpi3 >= '4.666666667' && youthPREducationJulContents.kpi3 < '5.6')?'green':(youthPREducationJulContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJulContents.kpi4 == null)?'grey-2':(youthPREducationJulContents.kpi4 >= '0' && youthPREducationJulContents.kpi4 <= '10.4')?'red':(youthPREducationJulContents.kpi4 > '10.4' && youthPREducationJulContents.kpi4 <= '13.86666667')?'orange':(youthPREducationJulContents.kpi4 > '13.86666667' && youthPREducationJulContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationJulContents.kpi4 >= '17.33333333' && youthPREducationJulContents.kpi4 < '20.8')?'green':(youthPREducationJulContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJulContents.kpi5 == null)?'grey-2':(youthPREducationJulContents.kpi5 >= '0' && youthPREducationJulContents.kpi5 <= '4.8')?'red':(youthPREducationJulContents.kpi5 > '4.8' && youthPREducationJulContents.kpi5 <= '6.4')?'orange':(youthPREducationJulContents.kpi5 > '6.4' && youthPREducationJulContents.kpi5 < '8')?'yellow-7':(youthPREducationJulContents.kpi5 >= '8' && youthPREducationJulContents.kpi5 < '9.6')?'green':(youthPREducationJulContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi5}}
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
                              :color="(youthPREducationAugContents.kpi1 == null)?'grey-2':(youthPREducationAugContents.kpi1 >= '0' && youthPREducationAugContents.kpi1 <= '5.8')?'red':(youthPREducationAugContents.kpi1 > '5.8' && youthPREducationAugContents.kpi1 <= '7.733333333')?'orange':(youthPREducationAugContents.kpi1 > '7.733333333' && youthPREducationAugContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationAugContents.kpi1 >= '9.666666667' && youthPREducationAugContents.kpi1 < '11.6')?'green':(youthPREducationAugContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAugContents.kpi2 == null)?'grey-2':(youthPREducationAugContents.kpi2 >= '0' && youthPREducationAugContents.kpi2 <= '18.2')?'red':(youthPREducationAugContents.kpi2 > '18.2' && youthPREducationAugContents.kpi2 <= '24.26666667')?'orange':(youthPREducationAugContents.kpi2 > '24.26666667' && youthPREducationAugContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationAugContents.kpi2 >= '30.33333333' && youthPREducationAugContents.kpi2 < '36.4')?'green':(youthPREducationAugContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAugContents.kpi3 == null)?'grey-2':(youthPREducationAugContents.kpi3 >= '0' && youthPREducationAugContents.kpi3 <= '2.8')?'red':(youthPREducationAugContents.kpi3 > '2.8' && youthPREducationAugContents.kpi3 <= '3.733333333')?'orange':(youthPREducationAugContents.kpi3 > '3.733333333' && youthPREducationAugContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationAugContents.kpi3 >= '4.666666667' && youthPREducationAugContents.kpi3 < '5.6')?'green':(youthPREducationAugContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAugContents.kpi4 == null)?'grey-2':(youthPREducationAugContents.kpi4 >= '0' && youthPREducationAugContents.kpi4 <= '10.4')?'red':(youthPREducationAugContents.kpi4 > '10.4' && youthPREducationAugContents.kpi4 <= '13.86666667')?'orange':(youthPREducationAugContents.kpi4 > '13.86666667' && youthPREducationAugContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationAugContents.kpi4 >= '17.33333333' && youthPREducationAugContents.kpi4 < '20.8')?'green':(youthPREducationAugContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAugContents.kpi5 == null)?'grey-2':(youthPREducationAugContents.kpi5 >= '0' && youthPREducationAugContents.kpi5 <= '4.8')?'red':(youthPREducationAugContents.kpi5 > '4.8' && youthPREducationAugContents.kpi5 <= '6.4')?'orange':(youthPREducationAugContents.kpi5 > '6.4' && youthPREducationAugContents.kpi5 < '8')?'yellow-7':(youthPREducationAugContents.kpi5 >= '8' && youthPREducationAugContents.kpi5 < '9.6')?'green':(youthPREducationAugContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi5}}
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
                              :color="(youthPREducationSepContents.kpi1 == null)?'grey-2':(youthPREducationSepContents.kpi1 >= '0' && youthPREducationSepContents.kpi1 <= '5.8')?'red':(youthPREducationSepContents.kpi1 > '5.8' && youthPREducationSepContents.kpi1 <= '7.733333333')?'orange':(youthPREducationSepContents.kpi1 > '7.733333333' && youthPREducationSepContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationSepContents.kpi1 >= '9.666666667' && youthPREducationSepContents.kpi1 < '11.6')?'green':(youthPREducationSepContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationSepContents.kpi2 == null)?'grey-2':(youthPREducationSepContents.kpi2 >= '0' && youthPREducationSepContents.kpi2 <= '18.2')?'red':(youthPREducationSepContents.kpi2 > '18.2' && youthPREducationSepContents.kpi2 <= '24.26666667')?'orange':(youthPREducationSepContents.kpi2 > '24.26666667' && youthPREducationSepContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationSepContents.kpi2 >= '30.33333333' && youthPREducationSepContents.kpi2 < '36.4')?'green':(youthPREducationSepContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationSepContents.kpi3 == null)?'grey-2':(youthPREducationSepContents.kpi3 >= '0' && youthPREducationSepContents.kpi3 <= '2.8')?'red':(youthPREducationSepContents.kpi3 > '2.8' && youthPREducationSepContents.kpi3 <= '3.733333333')?'orange':(youthPREducationSepContents.kpi3 > '3.733333333' && youthPREducationSepContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationSepContents.kpi3 >= '4.666666667' && youthPREducationSepContents.kpi3 < '5.6')?'green':(youthPREducationSepContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationSepContents.kpi4 == null)?'grey-2':(youthPREducationSepContents.kpi4 >= '0' && youthPREducationSepContents.kpi4 <= '10.4')?'red':(youthPREducationSepContents.kpi4 > '10.4' && youthPREducationSepContents.kpi4 <= '13.86666667')?'orange':(youthPREducationSepContents.kpi4 > '13.86666667' && youthPREducationSepContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationSepContents.kpi4 >= '17.33333333' && youthPREducationSepContents.kpi4 < '20.8')?'green':(youthPREducationSepContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationSepContents.kpi5 == null)?'grey-2':(youthPREducationSepContents.kpi5 >= '0' && youthPREducationSepContents.kpi5 <= '4.8')?'red':(youthPREducationSepContents.kpi5 > '4.8' && youthPREducationSepContents.kpi5 <= '6.4')?'orange':(youthPREducationSepContents.kpi5 > '6.4' && youthPREducationSepContents.kpi5 < '8')?'yellow-7':(youthPREducationSepContents.kpi5 >= '8' && youthPREducationSepContents.kpi5 < '9.6')?'green':(youthPREducationSepContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi5}}
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
                              :color="(youthPREducationOctContents.kpi1 == null)?'grey-2':(youthPREducationOctContents.kpi1 >= '0' && youthPREducationOctContents.kpi1 <= '5.8')?'red':(youthPREducationOctContents.kpi1 > '5.8' && youthPREducationOctContents.kpi1 <= '7.733333333')?'orange':(youthPREducationOctContents.kpi1 > '7.733333333' && youthPREducationOctContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationOctContents.kpi1 >= '9.666666667' && youthPREducationOctContents.kpi1 < '11.6')?'green':(youthPREducationOctContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationOctContents.kpi2 == null)?'grey-2':(youthPREducationOctContents.kpi2 >= '0' && youthPREducationOctContents.kpi2 <= '18.2')?'red':(youthPREducationOctContents.kpi2 > '18.2' && youthPREducationOctContents.kpi2 <= '24.26666667')?'orange':(youthPREducationOctContents.kpi2 > '24.26666667' && youthPREducationOctContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationOctContents.kpi2 >= '30.33333333' && youthPREducationOctContents.kpi2 < '36.4')?'green':(youthPREducationOctContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationOctContents.kpi3 == null)?'grey-2':(youthPREducationOctContents.kpi3 >= '0' && youthPREducationOctContents.kpi3 <= '2.8')?'red':(youthPREducationOctContents.kpi3 > '2.8' && youthPREducationOctContents.kpi3 <= '3.733333333')?'orange':(youthPREducationOctContents.kpi3 > '3.733333333' && youthPREducationOctContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationOctContents.kpi3 >= '4.666666667' && youthPREducationOctContents.kpi3 < '5.6')?'green':(youthPREducationOctContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationOctContents.kpi4 == null)?'grey-2':(youthPREducationOctContents.kpi4 >= '0' && youthPREducationOctContents.kpi4 <= '10.4')?'red':(youthPREducationOctContents.kpi4 > '10.4' && youthPREducationOctContents.kpi4 <= '13.86666667')?'orange':(youthPREducationOctContents.kpi4 > '13.86666667' && youthPREducationOctContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationOctContents.kpi4 >= '17.33333333' && youthPREducationOctContents.kpi4 < '20.8')?'green':(youthPREducationOctContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationOctContents.kpi5 == null)?'grey-2':(youthPREducationOctContents.kpi5 >= '0' && youthPREducationOctContents.kpi5 <= '4.8')?'red':(youthPREducationOctContents.kpi5 > '4.8' && youthPREducationOctContents.kpi5 <= '6.4')?'orange':(youthPREducationOctContents.kpi5 > '6.4' && youthPREducationOctContents.kpi5 < '8')?'yellow-7':(youthPREducationOctContents.kpi5 >= '8' && youthPREducationOctContents.kpi5 < '9.6')?'green':(youthPREducationOctContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi5}}
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
                              :color="(youthPREducationNovContents.kpi1 == null)?'grey-2':(youthPREducationNovContents.kpi1 >= '0' && youthPREducationNovContents.kpi1 <= '5.8')?'red':(youthPREducationNovContents.kpi1 > '5.8' && youthPREducationNovContents.kpi1 <= '7.733333333')?'orange':(youthPREducationNovContents.kpi1 > '7.733333333' && youthPREducationNovContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationNovContents.kpi1 >= '9.666666667' && youthPREducationNovContents.kpi1 < '11.6')?'green':(youthPREducationNovContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationNovContents.kpi2 == null)?'grey-2':(youthPREducationNovContents.kpi2 >= '0' && youthPREducationNovContents.kpi2 <= '18.2')?'red':(youthPREducationNovContents.kpi2 > '18.2' && youthPREducationNovContents.kpi2 <= '24.26666667')?'orange':(youthPREducationNovContents.kpi2 > '24.26666667' && youthPREducationNovContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationNovContents.kpi2 >= '30.33333333' && youthPREducationNovContents.kpi2 < '36.4')?'green':(youthPREducationNovContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationNovContents.kpi3 == null)?'grey-2':(youthPREducationNovContents.kpi3 >= '0' && youthPREducationNovContents.kpi3 <= '2.8')?'red':(youthPREducationNovContents.kpi3 > '2.8' && youthPREducationNovContents.kpi3 <= '3.733333333')?'orange':(youthPREducationNovContents.kpi3 > '3.733333333' && youthPREducationNovContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationNovContents.kpi3 >= '4.666666667' && youthPREducationNovContents.kpi3 < '5.6')?'green':(youthPREducationNovContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationNovContents.kpi4 == null)?'grey-2':(youthPREducationNovContents.kpi4 >= '0' && youthPREducationNovContents.kpi4 <= '10.4')?'red':(youthPREducationNovContents.kpi4 > '10.4' && youthPREducationNovContents.kpi4 <= '13.86666667')?'orange':(youthPREducationNovContents.kpi4 > '13.86666667' && youthPREducationNovContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationNovContents.kpi4 >= '17.33333333' && youthPREducationNovContents.kpi4 < '20.8')?'green':(youthPREducationNovContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationNovContents.kpi5 == null)?'grey-2':(youthPREducationNovContents.kpi5 >= '0' && youthPREducationNovContents.kpi5 <= '4.8')?'red':(youthPREducationNovContents.kpi5 > '4.8' && youthPREducationNovContents.kpi5 <= '6.4')?'orange':(youthPREducationNovContents.kpi5 > '6.4' && youthPREducationNovContents.kpi5 < '8')?'yellow-7':(youthPREducationNovContents.kpi5 >= '8' && youthPREducationNovContents.kpi5 < '9.6')?'green':(youthPREducationNovContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi5}}
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
                              :color="(youthPREducationDecContents.kpi1 == null)?'grey-2':(youthPREducationDecContents.kpi1 >= '0' && youthPREducationDecContents.kpi1 <= '5.8')?'red':(youthPREducationDecContents.kpi1 > '5.8' && youthPREducationDecContents.kpi1 <= '7.733333333')?'orange':(youthPREducationDecContents.kpi1 > '7.733333333' && youthPREducationDecContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationDecContents.kpi1 >= '9.666666667' && youthPREducationDecContents.kpi1 < '11.6')?'green':(youthPREducationDecContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationDecContents.kpi2 == null)?'grey-2':(youthPREducationDecContents.kpi2 >= '0' && youthPREducationDecContents.kpi2 <= '18.2')?'red':(youthPREducationDecContents.kpi2 > '18.2' && youthPREducationDecContents.kpi2 <= '24.26666667')?'orange':(youthPREducationDecContents.kpi2 > '24.26666667' && youthPREducationDecContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationDecContents.kpi2 >= '30.33333333' && youthPREducationDecContents.kpi2 < '36.4')?'green':(youthPREducationDecContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationDecContents.kpi3 == null)?'grey-2':(youthPREducationDecContents.kpi3 >= '0' && youthPREducationDecContents.kpi3 <= '2.8')?'red':(youthPREducationDecContents.kpi3 > '2.8' && youthPREducationDecContents.kpi3 <= '3.733333333')?'orange':(youthPREducationDecContents.kpi3 > '3.733333333' && youthPREducationDecContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationDecContents.kpi3 >= '4.666666667' && youthPREducationDecContents.kpi3 < '5.6')?'green':(youthPREducationDecContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationDecContents.kpi4 == null)?'grey-2':(youthPREducationDecContents.kpi4 >= '0' && youthPREducationDecContents.kpi4 <= '10.4')?'red':(youthPREducationDecContents.kpi4 > '10.4' && youthPREducationDecContents.kpi4 <= '13.86666667')?'orange':(youthPREducationDecContents.kpi4 > '13.86666667' && youthPREducationDecContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationDecContents.kpi4 >= '17.33333333' && youthPREducationDecContents.kpi4 < '20.8')?'green':(youthPREducationDecContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationDecContents.kpi5 == null)?'grey-2':(youthPREducationDecContents.kpi5 >= '0' && youthPREducationDecContents.kpi5 <= '4.8')?'red':(youthPREducationDecContents.kpi5 > '4.8' && youthPREducationDecContents.kpi5 <= '6.4')?'orange':(youthPREducationDecContents.kpi5 > '6.4' && youthPREducationDecContents.kpi5 < '8')?'yellow-7':(youthPREducationDecContents.kpi5 >= '8' && youthPREducationDecContents.kpi5 < '9.6')?'green':(youthPREducationDecContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi5}}
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
                              :color="(youthPREducationJanContents.kpi1 == null)?'grey-2':(youthPREducationJanContents.kpi1 >= '0' && youthPREducationJanContents.kpi1 <= '5.8')?'red':(youthPREducationJanContents.kpi1 > '5.8' && youthPREducationJanContents.kpi1 <= '7.733333333')?'orange':(youthPREducationJanContents.kpi1 > '7.733333333' && youthPREducationJanContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationJanContents.kpi1 >= '9.666666667' && youthPREducationJanContents.kpi1 < '11.6')?'green':(youthPREducationJanContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJanContents.kpi2 == null)?'grey-2':(youthPREducationJanContents.kpi2 >= '0' && youthPREducationJanContents.kpi2 <= '18.2')?'red':(youthPREducationJanContents.kpi2 > '18.2' && youthPREducationJanContents.kpi2 <= '24.26666667')?'orange':(youthPREducationJanContents.kpi2 > '24.26666667' && youthPREducationJanContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationJanContents.kpi2 >= '30.33333333' && youthPREducationJanContents.kpi2 < '36.4')?'green':(youthPREducationJanContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJanContents.kpi3 == null)?'grey-2':(youthPREducationJanContents.kpi3 >= '0' && youthPREducationJanContents.kpi3 <= '2.8')?'red':(youthPREducationJanContents.kpi3 > '2.8' && youthPREducationJanContents.kpi3 <= '3.733333333')?'orange':(youthPREducationJanContents.kpi3 > '3.733333333' && youthPREducationJanContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationJanContents.kpi3 >= '4.666666667' && youthPREducationJanContents.kpi3 < '5.6')?'green':(youthPREducationJanContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJanContents.kpi4 == null)?'grey-2':(youthPREducationJanContents.kpi4 >= '0' && youthPREducationJanContents.kpi4 <= '10.4')?'red':(youthPREducationJanContents.kpi4 > '10.4' && youthPREducationJanContents.kpi4 <= '13.86666667')?'orange':(youthPREducationJanContents.kpi4 > '13.86666667' && youthPREducationJanContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationJanContents.kpi4 >= '17.33333333' && youthPREducationJanContents.kpi4 < '20.8')?'green':(youthPREducationJanContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJanContents.kpi5 == null)?'grey-2':(youthPREducationJanContents.kpi5 >= '0' && youthPREducationJanContents.kpi5 <= '4.8')?'red':(youthPREducationJanContents.kpi5 > '4.8' && youthPREducationJanContents.kpi5 <= '6.4')?'orange':(youthPREducationJanContents.kpi5 > '6.4' && youthPREducationJanContents.kpi5 < '8')?'yellow-7':(youthPREducationJanContents.kpi5 >= '8' && youthPREducationJanContents.kpi5 < '9.6')?'green':(youthPREducationJanContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi5}}
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
                              :color="(youthPREducationFebContents.kpi1 == null)?'grey-2':(youthPREducationFebContents.kpi1 >= '0' && youthPREducationFebContents.kpi1 <= '5.8')?'red':(youthPREducationFebContents.kpi1 > '5.8' && youthPREducationFebContents.kpi1 <= '7.733333333')?'orange':(youthPREducationFebContents.kpi1 > '7.733333333' && youthPREducationFebContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationFebContents.kpi1 >= '9.666666667' && youthPREducationFebContents.kpi1 < '11.6')?'green':(youthPREducationFebContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationFebContents.kpi2 == null)?'grey-2':(youthPREducationFebContents.kpi2 >= '0' && youthPREducationFebContents.kpi2 <= '18.2')?'red':(youthPREducationFebContents.kpi2 > '18.2' && youthPREducationFebContents.kpi2 <= '24.26666667')?'orange':(youthPREducationFebContents.kpi2 > '24.26666667' && youthPREducationFebContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationFebContents.kpi2 >= '30.33333333' && youthPREducationFebContents.kpi2 < '36.4')?'green':(youthPREducationFebContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationFebContents.kpi3 == null)?'grey-2':(youthPREducationFebContents.kpi3 >= '0' && youthPREducationFebContents.kpi3 <= '2.8')?'red':(youthPREducationFebContents.kpi3 > '2.8' && youthPREducationFebContents.kpi3 <= '3.733333333')?'orange':(youthPREducationFebContents.kpi3 > '3.733333333' && youthPREducationFebContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationFebContents.kpi3 >= '4.666666667' && youthPREducationFebContents.kpi3 < '5.6')?'green':(youthPREducationFebContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationFebContents.kpi4 == null)?'grey-2':(youthPREducationFebContents.kpi4 >= '0' && youthPREducationFebContents.kpi4 <= '10.4')?'red':(youthPREducationFebContents.kpi4 > '10.4' && youthPREducationFebContents.kpi4 <= '13.86666667')?'orange':(youthPREducationFebContents.kpi4 > '13.86666667' && youthPREducationFebContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationFebContents.kpi4 >= '17.33333333' && youthPREducationFebContents.kpi4 < '20.8')?'green':(youthPREducationFebContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationFebContents.kpi5 == null)?'grey-2':(youthPREducationFebContents.kpi5 >= '0' && youthPREducationFebContents.kpi5 <= '4.8')?'red':(youthPREducationFebContents.kpi5 > '4.8' && youthPREducationFebContents.kpi5 <= '6.4')?'orange':(youthPREducationFebContents.kpi5 > '6.4' && youthPREducationFebContents.kpi5 < '8')?'yellow-7':(youthPREducationFebContents.kpi5 >= '8' && youthPREducationFebContents.kpi5 < '9.6')?'green':(youthPREducationFebContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi5}}
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
                              :color="(youthPREducationMarContents.kpi1 == null)?'grey-2':(youthPREducationMarContents.kpi1 >= '0' && youthPREducationMarContents.kpi1 <= '5.8')?'red':(youthPREducationMarContents.kpi1 > '5.8' && youthPREducationMarContents.kpi1 <= '7.733333333')?'orange':(youthPREducationMarContents.kpi1 > '7.733333333' && youthPREducationMarContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationMarContents.kpi1 >= '9.666666667' && youthPREducationMarContents.kpi1 < '11.6')?'green':(youthPREducationMarContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMarContents.kpi2 == null)?'grey-2':(youthPREducationMarContents.kpi2 >= '0' && youthPREducationMarContents.kpi2 <= '18.2')?'red':(youthPREducationMarContents.kpi2 > '18.2' && youthPREducationMarContents.kpi2 <= '24.26666667')?'orange':(youthPREducationMarContents.kpi2 > '24.26666667' && youthPREducationMarContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationMarContents.kpi2 >= '30.33333333' && youthPREducationMarContents.kpi2 < '36.4')?'green':(youthPREducationMarContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMarContents.kpi3 == null)?'grey-2':(youthPREducationMarContents.kpi3 >= '0' && youthPREducationMarContents.kpi3 <= '2.8')?'red':(youthPREducationMarContents.kpi3 > '2.8' && youthPREducationMarContents.kpi3 <= '3.733333333')?'orange':(youthPREducationMarContents.kpi3 > '3.733333333' && youthPREducationMarContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationMarContents.kpi3 >= '4.666666667' && youthPREducationMarContents.kpi3 < '5.6')?'green':(youthPREducationMarContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMarContents.kpi4 == null)?'grey-2':(youthPREducationMarContents.kpi4 >= '0' && youthPREducationMarContents.kpi4 <= '10.4')?'red':(youthPREducationMarContents.kpi4 > '10.4' && youthPREducationMarContents.kpi4 <= '13.86666667')?'orange':(youthPREducationMarContents.kpi4 > '13.86666667' && youthPREducationMarContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationMarContents.kpi4 >= '17.33333333' && youthPREducationMarContents.kpi4 < '20.8')?'green':(youthPREducationMarContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMarContents.kpi5 == null)?'grey-2':(youthPREducationMarContents.kpi5 >= '0' && youthPREducationMarContents.kpi5 <= '4.8')?'red':(youthPREducationMarContents.kpi5 > '4.8' && youthPREducationMarContents.kpi5 <= '6.4')?'orange':(youthPREducationMarContents.kpi5 > '6.4' && youthPREducationMarContents.kpi5 < '8')?'yellow-7':(youthPREducationMarContents.kpi5 >= '8' && youthPREducationMarContents.kpi5 < '9.6')?'green':(youthPREducationMarContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi5}}
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
                              :color="(youthPREducationAprContents.kpi1 == null)?'grey-2':(youthPREducationAprContents.kpi1 >= '0' && youthPREducationAprContents.kpi1 <= '5.8')?'red':(youthPREducationAprContents.kpi1 > '5.8' && youthPREducationAprContents.kpi1 <= '7.733333333')?'orange':(youthPREducationAprContents.kpi1 > '7.733333333' && youthPREducationAprContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationAprContents.kpi1 >= '9.666666667' && youthPREducationAprContents.kpi1 < '11.6')?'green':(youthPREducationAprContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAprContents.kpi2 == null)?'grey-2':(youthPREducationAprContents.kpi2 >= '0' && youthPREducationAprContents.kpi2 <= '18.2')?'red':(youthPREducationAprContents.kpi2 > '18.2' && youthPREducationAprContents.kpi2 <= '24.26666667')?'orange':(youthPREducationAprContents.kpi2 > '24.26666667' && youthPREducationAprContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationAprContents.kpi2 >= '30.33333333' && youthPREducationAprContents.kpi2 < '36.4')?'green':(youthPREducationAprContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAprContents.kpi3 == null)?'grey-2':(youthPREducationAprContents.kpi3 >= '0' && youthPREducationAprContents.kpi3 <= '2.8')?'red':(youthPREducationAprContents.kpi3 > '2.8' && youthPREducationAprContents.kpi3 <= '3.733333333')?'orange':(youthPREducationAprContents.kpi3 > '3.733333333' && youthPREducationAprContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationAprContents.kpi3 >= '4.666666667' && youthPREducationAprContents.kpi3 < '5.6')?'green':(youthPREducationAprContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAprContents.kpi4 == null)?'grey-2':(youthPREducationAprContents.kpi4 >= '0' && youthPREducationAprContents.kpi4 <= '10.4')?'red':(youthPREducationAprContents.kpi4 > '10.4' && youthPREducationAprContents.kpi4 <= '13.86666667')?'orange':(youthPREducationAprContents.kpi4 > '13.86666667' && youthPREducationAprContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationAprContents.kpi4 >= '17.33333333' && youthPREducationAprContents.kpi4 < '20.8')?'green':(youthPREducationAprContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAprContents.kpi5 == null)?'grey-2':(youthPREducationAprContents.kpi5 >= '0' && youthPREducationAprContents.kpi5 <= '4.8')?'red':(youthPREducationAprContents.kpi5 > '4.8' && youthPREducationAprContents.kpi5 <= '6.4')?'orange':(youthPREducationAprContents.kpi5 > '6.4' && youthPREducationAprContents.kpi5 < '8')?'yellow-7':(youthPREducationAprContents.kpi5 >= '8' && youthPREducationAprContents.kpi5 < '9.6')?'green':(youthPREducationAprContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi5}}
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
                              :color="(youthPREducationMayContents.kpi1 == null)?'grey-2':(youthPREducationMayContents.kpi1 >= '0' && youthPREducationMayContents.kpi1 <= '5.8')?'red':(youthPREducationMayContents.kpi1 > '5.8' && youthPREducationMayContents.kpi1 <= '7.733333333')?'orange':(youthPREducationMayContents.kpi1 > '7.733333333' && youthPREducationMayContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationMayContents.kpi1 >= '9.666666667' && youthPREducationMayContents.kpi1 < '11.6')?'green':(youthPREducationMayContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMayContents.kpi2 == null)?'grey-2':(youthPREducationMayContents.kpi2 >= '0' && youthPREducationMayContents.kpi2 <= '18.2')?'red':(youthPREducationMayContents.kpi2 > '18.2' && youthPREducationMayContents.kpi2 <= '24.26666667')?'orange':(youthPREducationMayContents.kpi2 > '24.26666667' && youthPREducationMayContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationMayContents.kpi2 >= '30.33333333' && youthPREducationMayContents.kpi2 < '36.4')?'green':(youthPREducationMayContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMayContents.kpi3 == null)?'grey-2':(youthPREducationMayContents.kpi3 >= '0' && youthPREducationMayContents.kpi3 <= '2.8')?'red':(youthPREducationMayContents.kpi3 > '2.8' && youthPREducationMayContents.kpi3 <= '3.733333333')?'orange':(youthPREducationMayContents.kpi3 > '3.733333333' && youthPREducationMayContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationMayContents.kpi3 >= '4.666666667' && youthPREducationMayContents.kpi3 < '5.6')?'green':(youthPREducationMayContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMayContents.kpi4 == null)?'grey-2':(youthPREducationMayContents.kpi4 >= '0' && youthPREducationMayContents.kpi4 <= '10.4')?'red':(youthPREducationMayContents.kpi4 > '10.4' && youthPREducationMayContents.kpi4 <= '13.86666667')?'orange':(youthPREducationMayContents.kpi4 > '13.86666667' && youthPREducationMayContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationMayContents.kpi4 >= '17.33333333' && youthPREducationMayContents.kpi4 < '20.8')?'green':(youthPREducationMayContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMayContents.kpi5 == null)?'grey-2':(youthPREducationMayContents.kpi5 >= '0' && youthPREducationMayContents.kpi5 <= '4.8')?'red':(youthPREducationMayContents.kpi5 > '4.8' && youthPREducationMayContents.kpi5 <= '6.4')?'orange':(youthPREducationMayContents.kpi5 > '6.4' && youthPREducationMayContents.kpi5 < '8')?'yellow-7':(youthPREducationMayContents.kpi5 >= '8' && youthPREducationMayContents.kpi5 < '9.6')?'green':(youthPREducationMayContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi5}}
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
                              :color="(youthPREducationJunContents.kpi1 == null)?'grey-2':(youthPREducationJunContents.kpi1 >= '0' && youthPREducationJunContents.kpi1 <= '5.8')?'red':(youthPREducationJunContents.kpi1 > '5.8' && youthPREducationJunContents.kpi1 <= '7.733333333')?'orange':(youthPREducationJunContents.kpi1 > '7.733333333' && youthPREducationJunContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationJunContents.kpi1 >= '9.666666667' && youthPREducationJunContents.kpi1 < '11.6')?'green':(youthPREducationJunContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJunContents.kpi2 == null)?'grey-2':(youthPREducationJunContents.kpi2 >= '0' && youthPREducationJunContents.kpi2 <= '18.2')?'red':(youthPREducationJunContents.kpi2 > '18.2' && youthPREducationJunContents.kpi2 <= '24.26666667')?'orange':(youthPREducationJunContents.kpi2 > '24.26666667' && youthPREducationJunContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationJunContents.kpi2 >= '30.33333333' && youthPREducationJunContents.kpi2 < '36.4')?'green':(youthPREducationJunContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJunContents.kpi3 == null)?'grey-2':(youthPREducationJunContents.kpi3 >= '0' && youthPREducationJunContents.kpi3 <= '2.8')?'red':(youthPREducationJunContents.kpi3 > '2.8' && youthPREducationJunContents.kpi3 <= '3.733333333')?'orange':(youthPREducationJunContents.kpi3 > '3.733333333' && youthPREducationJunContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationJunContents.kpi3 >= '4.666666667' && youthPREducationJunContents.kpi3 < '5.6')?'green':(youthPREducationJunContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJunContents.kpi4 == null)?'grey-2':(youthPREducationJunContents.kpi4 >= '0' && youthPREducationJunContents.kpi4 <= '10.4')?'red':(youthPREducationJunContents.kpi4 > '10.4' && youthPREducationJunContents.kpi4 <= '13.86666667')?'orange':(youthPREducationJunContents.kpi4 > '13.86666667' && youthPREducationJunContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationJunContents.kpi4 >= '17.33333333' && youthPREducationJunContents.kpi4 < '20.8')?'green':(youthPREducationJunContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJunContents.kpi5 == null)?'grey-2':(youthPREducationJunContents.kpi5 >= '0' && youthPREducationJunContents.kpi5 <= '4.8')?'red':(youthPREducationJunContents.kpi5 > '4.8' && youthPREducationJunContents.kpi5 <= '6.4')?'orange':(youthPREducationJunContents.kpi5 > '6.4' && youthPREducationJunContents.kpi5 < '8')?'yellow-7':(youthPREducationJunContents.kpi5 >= '8' && youthPREducationJunContents.kpi5 < '9.6')?'green':(youthPREducationJunContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi5}}
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
                              :color="(youthPREducationJulContents.kpi1 == null)?'grey-2':(youthPREducationJulContents.kpi1 >= '0' && youthPREducationJulContents.kpi1 <= '5.8')?'red':(youthPREducationJulContents.kpi1 > '5.8' && youthPREducationJulContents.kpi1 <= '7.733333333')?'orange':(youthPREducationJulContents.kpi1 > '7.733333333' && youthPREducationJulContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationJulContents.kpi1 >= '9.666666667' && youthPREducationJulContents.kpi1 < '11.6')?'green':(youthPREducationJulContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJulContents.kpi2 == null)?'grey-2':(youthPREducationJulContents.kpi2 >= '0' && youthPREducationJulContents.kpi2 <= '18.2')?'red':(youthPREducationJulContents.kpi2 > '18.2' && youthPREducationJulContents.kpi2 <= '24.26666667')?'orange':(youthPREducationJulContents.kpi2 > '24.26666667' && youthPREducationJulContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationJulContents.kpi2 >= '30.33333333' && youthPREducationJulContents.kpi2 < '36.4')?'green':(youthPREducationJulContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJulContents.kpi3 == null)?'grey-2':(youthPREducationJulContents.kpi3 >= '0' && youthPREducationJulContents.kpi3 <= '2.8')?'red':(youthPREducationJulContents.kpi3 > '2.8' && youthPREducationJulContents.kpi3 <= '3.733333333')?'orange':(youthPREducationJulContents.kpi3 > '3.733333333' && youthPREducationJulContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationJulContents.kpi3 >= '4.666666667' && youthPREducationJulContents.kpi3 < '5.6')?'green':(youthPREducationJulContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJulContents.kpi4 == null)?'grey-2':(youthPREducationJulContents.kpi4 >= '0' && youthPREducationJulContents.kpi4 <= '10.4')?'red':(youthPREducationJulContents.kpi4 > '10.4' && youthPREducationJulContents.kpi4 <= '13.86666667')?'orange':(youthPREducationJulContents.kpi4 > '13.86666667' && youthPREducationJulContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationJulContents.kpi4 >= '17.33333333' && youthPREducationJulContents.kpi4 < '20.8')?'green':(youthPREducationJulContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJulContents.kpi5 == null)?'grey-2':(youthPREducationJulContents.kpi5 >= '0' && youthPREducationJulContents.kpi5 <= '4.8')?'red':(youthPREducationJulContents.kpi5 > '4.8' && youthPREducationJulContents.kpi5 <= '6.4')?'orange':(youthPREducationJulContents.kpi5 > '6.4' && youthPREducationJulContents.kpi5 < '8')?'yellow-7':(youthPREducationJulContents.kpi5 >= '8' && youthPREducationJulContents.kpi5 < '9.6')?'green':(youthPREducationJulContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi5}}
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
                              :color="(youthPREducationAugContents.kpi1 == null)?'grey-2':(youthPREducationAugContents.kpi1 >= '0' && youthPREducationAugContents.kpi1 <= '5.8')?'red':(youthPREducationAugContents.kpi1 > '5.8' && youthPREducationAugContents.kpi1 <= '7.733333333')?'orange':(youthPREducationAugContents.kpi1 > '7.733333333' && youthPREducationAugContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationAugContents.kpi1 >= '9.666666667' && youthPREducationAugContents.kpi1 < '11.6')?'green':(youthPREducationAugContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAugContents.kpi2 == null)?'grey-2':(youthPREducationAugContents.kpi2 >= '0' && youthPREducationAugContents.kpi2 <= '18.2')?'red':(youthPREducationAugContents.kpi2 > '18.2' && youthPREducationAugContents.kpi2 <= '24.26666667')?'orange':(youthPREducationAugContents.kpi2 > '24.26666667' && youthPREducationAugContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationAugContents.kpi2 >= '30.33333333' && youthPREducationAugContents.kpi2 < '36.4')?'green':(youthPREducationAugContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAugContents.kpi3 == null)?'grey-2':(youthPREducationAugContents.kpi3 >= '0' && youthPREducationAugContents.kpi3 <= '2.8')?'red':(youthPREducationAugContents.kpi3 > '2.8' && youthPREducationAugContents.kpi3 <= '3.733333333')?'orange':(youthPREducationAugContents.kpi3 > '3.733333333' && youthPREducationAugContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationAugContents.kpi3 >= '4.666666667' && youthPREducationAugContents.kpi3 < '5.6')?'green':(youthPREducationAugContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAugContents.kpi4 == null)?'grey-2':(youthPREducationAugContents.kpi4 >= '0' && youthPREducationAugContents.kpi4 <= '10.4')?'red':(youthPREducationAugContents.kpi4 > '10.4' && youthPREducationAugContents.kpi4 <= '13.86666667')?'orange':(youthPREducationAugContents.kpi4 > '13.86666667' && youthPREducationAugContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationAugContents.kpi4 >= '17.33333333' && youthPREducationAugContents.kpi4 < '20.8')?'green':(youthPREducationAugContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAugContents.kpi5 == null)?'grey-2':(youthPREducationAugContents.kpi5 >= '0' && youthPREducationAugContents.kpi5 <= '4.8')?'red':(youthPREducationAugContents.kpi5 > '4.8' && youthPREducationAugContents.kpi5 <= '6.4')?'orange':(youthPREducationAugContents.kpi5 > '6.4' && youthPREducationAugContents.kpi5 < '8')?'yellow-7':(youthPREducationAugContents.kpi5 >= '8' && youthPREducationAugContents.kpi5 < '9.6')?'green':(youthPREducationAugContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi5}}
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
                              :color="(youthPREducationSepContents.kpi1 == null)?'grey-2':(youthPREducationSepContents.kpi1 >= '0' && youthPREducationSepContents.kpi1 <= '5.8')?'red':(youthPREducationSepContents.kpi1 > '5.8' && youthPREducationSepContents.kpi1 <= '7.733333333')?'orange':(youthPREducationSepContents.kpi1 > '7.733333333' && youthPREducationSepContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationSepContents.kpi1 >= '9.666666667' && youthPREducationSepContents.kpi1 < '11.6')?'green':(youthPREducationSepContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationSepContents.kpi2 == null)?'grey-2':(youthPREducationSepContents.kpi2 >= '0' && youthPREducationSepContents.kpi2 <= '18.2')?'red':(youthPREducationSepContents.kpi2 > '18.2' && youthPREducationSepContents.kpi2 <= '24.26666667')?'orange':(youthPREducationSepContents.kpi2 > '24.26666667' && youthPREducationSepContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationSepContents.kpi2 >= '30.33333333' && youthPREducationSepContents.kpi2 < '36.4')?'green':(youthPREducationSepContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationSepContents.kpi3 == null)?'grey-2':(youthPREducationSepContents.kpi3 >= '0' && youthPREducationSepContents.kpi3 <= '2.8')?'red':(youthPREducationSepContents.kpi3 > '2.8' && youthPREducationSepContents.kpi3 <= '3.733333333')?'orange':(youthPREducationSepContents.kpi3 > '3.733333333' && youthPREducationSepContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationSepContents.kpi3 >= '4.666666667' && youthPREducationSepContents.kpi3 < '5.6')?'green':(youthPREducationSepContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationSepContents.kpi4 == null)?'grey-2':(youthPREducationSepContents.kpi4 >= '0' && youthPREducationSepContents.kpi4 <= '10.4')?'red':(youthPREducationSepContents.kpi4 > '10.4' && youthPREducationSepContents.kpi4 <= '13.86666667')?'orange':(youthPREducationSepContents.kpi4 > '13.86666667' && youthPREducationSepContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationSepContents.kpi4 >= '17.33333333' && youthPREducationSepContents.kpi4 < '20.8')?'green':(youthPREducationSepContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationSepContents.kpi5 == null)?'grey-2':(youthPREducationSepContents.kpi5 >= '0' && youthPREducationSepContents.kpi5 <= '4.8')?'red':(youthPREducationSepContents.kpi5 > '4.8' && youthPREducationSepContents.kpi5 <= '6.4')?'orange':(youthPREducationSepContents.kpi5 > '6.4' && youthPREducationSepContents.kpi5 < '8')?'yellow-7':(youthPREducationSepContents.kpi5 >= '8' && youthPREducationSepContents.kpi5 < '9.6')?'green':(youthPREducationSepContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi5}}
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
                              :color="(youthPREducationOctContents.kpi1 == null)?'grey-2':(youthPREducationOctContents.kpi1 >= '0' && youthPREducationOctContents.kpi1 <= '5.8')?'red':(youthPREducationOctContents.kpi1 > '5.8' && youthPREducationOctContents.kpi1 <= '7.733333333')?'orange':(youthPREducationOctContents.kpi1 > '7.733333333' && youthPREducationOctContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationOctContents.kpi1 >= '9.666666667' && youthPREducationOctContents.kpi1 < '11.6')?'green':(youthPREducationOctContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationOctContents.kpi2 == null)?'grey-2':(youthPREducationOctContents.kpi2 >= '0' && youthPREducationOctContents.kpi2 <= '18.2')?'red':(youthPREducationOctContents.kpi2 > '18.2' && youthPREducationOctContents.kpi2 <= '24.26666667')?'orange':(youthPREducationOctContents.kpi2 > '24.26666667' && youthPREducationOctContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationOctContents.kpi2 >= '30.33333333' && youthPREducationOctContents.kpi2 < '36.4')?'green':(youthPREducationOctContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationOctContents.kpi3 == null)?'grey-2':(youthPREducationOctContents.kpi3 >= '0' && youthPREducationOctContents.kpi3 <= '2.8')?'red':(youthPREducationOctContents.kpi3 > '2.8' && youthPREducationOctContents.kpi3 <= '3.733333333')?'orange':(youthPREducationOctContents.kpi3 > '3.733333333' && youthPREducationOctContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationOctContents.kpi3 >= '4.666666667' && youthPREducationOctContents.kpi3 < '5.6')?'green':(youthPREducationOctContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationOctContents.kpi4 == null)?'grey-2':(youthPREducationOctContents.kpi4 >= '0' && youthPREducationOctContents.kpi4 <= '10.4')?'red':(youthPREducationOctContents.kpi4 > '10.4' && youthPREducationOctContents.kpi4 <= '13.86666667')?'orange':(youthPREducationOctContents.kpi4 > '13.86666667' && youthPREducationOctContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationOctContents.kpi4 >= '17.33333333' && youthPREducationOctContents.kpi4 < '20.8')?'green':(youthPREducationOctContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationOctContents.kpi5 == null)?'grey-2':(youthPREducationOctContents.kpi5 >= '0' && youthPREducationOctContents.kpi5 <= '4.8')?'red':(youthPREducationOctContents.kpi5 > '4.8' && youthPREducationOctContents.kpi5 <= '6.4')?'orange':(youthPREducationOctContents.kpi5 > '6.4' && youthPREducationOctContents.kpi5 < '8')?'yellow-7':(youthPREducationOctContents.kpi5 >= '8' && youthPREducationOctContents.kpi5 < '9.6')?'green':(youthPREducationOctContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi5}}
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
                              :color="(youthPREducationNovContents.kpi1 == null)?'grey-2':(youthPREducationNovContents.kpi1 >= '0' && youthPREducationNovContents.kpi1 <= '5.8')?'red':(youthPREducationNovContents.kpi1 > '5.8' && youthPREducationNovContents.kpi1 <= '7.733333333')?'orange':(youthPREducationNovContents.kpi1 > '7.733333333' && youthPREducationNovContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationNovContents.kpi1 >= '9.666666667' && youthPREducationNovContents.kpi1 < '11.6')?'green':(youthPREducationNovContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationNovContents.kpi2 == null)?'grey-2':(youthPREducationNovContents.kpi2 >= '0' && youthPREducationNovContents.kpi2 <= '18.2')?'red':(youthPREducationNovContents.kpi2 > '18.2' && youthPREducationNovContents.kpi2 <= '24.26666667')?'orange':(youthPREducationNovContents.kpi2 > '24.26666667' && youthPREducationNovContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationNovContents.kpi2 >= '30.33333333' && youthPREducationNovContents.kpi2 < '36.4')?'green':(youthPREducationNovContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationNovContents.kpi3 == null)?'grey-2':(youthPREducationNovContents.kpi3 >= '0' && youthPREducationNovContents.kpi3 <= '2.8')?'red':(youthPREducationNovContents.kpi3 > '2.8' && youthPREducationNovContents.kpi3 <= '3.733333333')?'orange':(youthPREducationNovContents.kpi3 > '3.733333333' && youthPREducationNovContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationNovContents.kpi3 >= '4.666666667' && youthPREducationNovContents.kpi3 < '5.6')?'green':(youthPREducationNovContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationNovContents.kpi4 == null)?'grey-2':(youthPREducationNovContents.kpi4 >= '0' && youthPREducationNovContents.kpi4 <= '10.4')?'red':(youthPREducationNovContents.kpi4 > '10.4' && youthPREducationNovContents.kpi4 <= '13.86666667')?'orange':(youthPREducationNovContents.kpi4 > '13.86666667' && youthPREducationNovContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationNovContents.kpi4 >= '17.33333333' && youthPREducationNovContents.kpi4 < '20.8')?'green':(youthPREducationNovContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationNovContents.kpi5 == null)?'grey-2':(youthPREducationNovContents.kpi5 >= '0' && youthPREducationNovContents.kpi5 <= '4.8')?'red':(youthPREducationNovContents.kpi5 > '4.8' && youthPREducationNovContents.kpi5 <= '6.4')?'orange':(youthPREducationNovContents.kpi5 > '6.4' && youthPREducationNovContents.kpi5 < '8')?'yellow-7':(youthPREducationNovContents.kpi5 >= '8' && youthPREducationNovContents.kpi5 < '9.6')?'green':(youthPREducationNovContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi5}}
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
                              :color="(youthPREducationDecContents.kpi1 == null)?'grey-2':(youthPREducationDecContents.kpi1 >= '0' && youthPREducationDecContents.kpi1 <= '5.8')?'red':(youthPREducationDecContents.kpi1 > '5.8' && youthPREducationDecContents.kpi1 <= '7.733333333')?'orange':(youthPREducationDecContents.kpi1 > '7.733333333' && youthPREducationDecContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationDecContents.kpi1 >= '9.666666667' && youthPREducationDecContents.kpi1 < '11.6')?'green':(youthPREducationDecContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationDecContents.kpi2 == null)?'grey-2':(youthPREducationDecContents.kpi2 >= '0' && youthPREducationDecContents.kpi2 <= '18.2')?'red':(youthPREducationDecContents.kpi2 > '18.2' && youthPREducationDecContents.kpi2 <= '24.26666667')?'orange':(youthPREducationDecContents.kpi2 > '24.26666667' && youthPREducationDecContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationDecContents.kpi2 >= '30.33333333' && youthPREducationDecContents.kpi2 < '36.4')?'green':(youthPREducationDecContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationDecContents.kpi3 == null)?'grey-2':(youthPREducationDecContents.kpi3 >= '0' && youthPREducationDecContents.kpi3 <= '2.8')?'red':(youthPREducationDecContents.kpi3 > '2.8' && youthPREducationDecContents.kpi3 <= '3.733333333')?'orange':(youthPREducationDecContents.kpi3 > '3.733333333' && youthPREducationDecContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationDecContents.kpi3 >= '4.666666667' && youthPREducationDecContents.kpi3 < '5.6')?'green':(youthPREducationDecContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationDecContents.kpi4 == null)?'grey-2':(youthPREducationDecContents.kpi4 >= '0' && youthPREducationDecContents.kpi4 <= '10.4')?'red':(youthPREducationDecContents.kpi4 > '10.4' && youthPREducationDecContents.kpi4 <= '13.86666667')?'orange':(youthPREducationDecContents.kpi4 > '13.86666667' && youthPREducationDecContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationDecContents.kpi4 >= '17.33333333' && youthPREducationDecContents.kpi4 < '20.8')?'green':(youthPREducationDecContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationDecContents.kpi5 == null)?'grey-2':(youthPREducationDecContents.kpi5 >= '0' && youthPREducationDecContents.kpi5 <= '4.8')?'red':(youthPREducationDecContents.kpi5 > '4.8' && youthPREducationDecContents.kpi5 <= '6.4')?'orange':(youthPREducationDecContents.kpi5 > '6.4' && youthPREducationDecContents.kpi5 < '8')?'yellow-7':(youthPREducationDecContents.kpi5 >= '8' && youthPREducationDecContents.kpi5 < '9.6')?'green':(youthPREducationDecContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi5}}
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
                              :color="(youthPREducationJanContents.kpi1 == null)?'grey-2':(youthPREducationJanContents.kpi1 >= '0' && youthPREducationJanContents.kpi1 <= '5.8')?'red':(youthPREducationJanContents.kpi1 > '5.8' && youthPREducationJanContents.kpi1 <= '7.733333333')?'orange':(youthPREducationJanContents.kpi1 > '7.733333333' && youthPREducationJanContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationJanContents.kpi1 >= '9.666666667' && youthPREducationJanContents.kpi1 < '11.6')?'green':(youthPREducationJanContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJanContents.kpi2 == null)?'grey-2':(youthPREducationJanContents.kpi2 >= '0' && youthPREducationJanContents.kpi2 <= '18.2')?'red':(youthPREducationJanContents.kpi2 > '18.2' && youthPREducationJanContents.kpi2 <= '24.26666667')?'orange':(youthPREducationJanContents.kpi2 > '24.26666667' && youthPREducationJanContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationJanContents.kpi2 >= '30.33333333' && youthPREducationJanContents.kpi2 < '36.4')?'green':(youthPREducationJanContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJanContents.kpi3 == null)?'grey-2':(youthPREducationJanContents.kpi3 >= '0' && youthPREducationJanContents.kpi3 <= '2.8')?'red':(youthPREducationJanContents.kpi3 > '2.8' && youthPREducationJanContents.kpi3 <= '3.733333333')?'orange':(youthPREducationJanContents.kpi3 > '3.733333333' && youthPREducationJanContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationJanContents.kpi3 >= '4.666666667' && youthPREducationJanContents.kpi3 < '5.6')?'green':(youthPREducationJanContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJanContents.kpi4 == null)?'grey-2':(youthPREducationJanContents.kpi4 >= '0' && youthPREducationJanContents.kpi4 <= '10.4')?'red':(youthPREducationJanContents.kpi4 > '10.4' && youthPREducationJanContents.kpi4 <= '13.86666667')?'orange':(youthPREducationJanContents.kpi4 > '13.86666667' && youthPREducationJanContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationJanContents.kpi4 >= '17.33333333' && youthPREducationJanContents.kpi4 < '20.8')?'green':(youthPREducationJanContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJanContents.kpi5 == null)?'grey-2':(youthPREducationJanContents.kpi5 >= '0' && youthPREducationJanContents.kpi5 <= '4.8')?'red':(youthPREducationJanContents.kpi5 > '4.8' && youthPREducationJanContents.kpi5 <= '6.4')?'orange':(youthPREducationJanContents.kpi5 > '6.4' && youthPREducationJanContents.kpi5 < '8')?'yellow-7':(youthPREducationJanContents.kpi5 >= '8' && youthPREducationJanContents.kpi5 < '9.6')?'green':(youthPREducationJanContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi5}}
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
                              :color="(youthPREducationFebContents.kpi1 == null)?'grey-2':(youthPREducationFebContents.kpi1 >= '0' && youthPREducationFebContents.kpi1 <= '5.8')?'red':(youthPREducationFebContents.kpi1 > '5.8' && youthPREducationFebContents.kpi1 <= '7.733333333')?'orange':(youthPREducationFebContents.kpi1 > '7.733333333' && youthPREducationFebContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationFebContents.kpi1 >= '9.666666667' && youthPREducationFebContents.kpi1 < '11.6')?'green':(youthPREducationFebContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationFebContents.kpi2 == null)?'grey-2':(youthPREducationFebContents.kpi2 >= '0' && youthPREducationFebContents.kpi2 <= '18.2')?'red':(youthPREducationFebContents.kpi2 > '18.2' && youthPREducationFebContents.kpi2 <= '24.26666667')?'orange':(youthPREducationFebContents.kpi2 > '24.26666667' && youthPREducationFebContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationFebContents.kpi2 >= '30.33333333' && youthPREducationFebContents.kpi2 < '36.4')?'green':(youthPREducationFebContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationFebContents.kpi3 == null)?'grey-2':(youthPREducationFebContents.kpi3 >= '0' && youthPREducationFebContents.kpi3 <= '2.8')?'red':(youthPREducationFebContents.kpi3 > '2.8' && youthPREducationFebContents.kpi3 <= '3.733333333')?'orange':(youthPREducationFebContents.kpi3 > '3.733333333' && youthPREducationFebContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationFebContents.kpi3 >= '4.666666667' && youthPREducationFebContents.kpi3 < '5.6')?'green':(youthPREducationFebContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationFebContents.kpi4 == null)?'grey-2':(youthPREducationFebContents.kpi4 >= '0' && youthPREducationFebContents.kpi4 <= '10.4')?'red':(youthPREducationFebContents.kpi4 > '10.4' && youthPREducationFebContents.kpi4 <= '13.86666667')?'orange':(youthPREducationFebContents.kpi4 > '13.86666667' && youthPREducationFebContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationFebContents.kpi4 >= '17.33333333' && youthPREducationFebContents.kpi4 < '20.8')?'green':(youthPREducationFebContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationFebContents.kpi5 == null)?'grey-2':(youthPREducationFebContents.kpi5 >= '0' && youthPREducationFebContents.kpi5 <= '4.8')?'red':(youthPREducationFebContents.kpi5 > '4.8' && youthPREducationFebContents.kpi5 <= '6.4')?'orange':(youthPREducationFebContents.kpi5 > '6.4' && youthPREducationFebContents.kpi5 < '8')?'yellow-7':(youthPREducationFebContents.kpi5 >= '8' && youthPREducationFebContents.kpi5 < '9.6')?'green':(youthPREducationFebContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi5}}
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
                              :color="(youthPREducationMarContents.kpi1 == null)?'grey-2':(youthPREducationMarContents.kpi1 >= '0' && youthPREducationMarContents.kpi1 <= '5.8')?'red':(youthPREducationMarContents.kpi1 > '5.8' && youthPREducationMarContents.kpi1 <= '7.733333333')?'orange':(youthPREducationMarContents.kpi1 > '7.733333333' && youthPREducationMarContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationMarContents.kpi1 >= '9.666666667' && youthPREducationMarContents.kpi1 < '11.6')?'green':(youthPREducationMarContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMarContents.kpi2 == null)?'grey-2':(youthPREducationMarContents.kpi2 >= '0' && youthPREducationMarContents.kpi2 <= '18.2')?'red':(youthPREducationMarContents.kpi2 > '18.2' && youthPREducationMarContents.kpi2 <= '24.26666667')?'orange':(youthPREducationMarContents.kpi2 > '24.26666667' && youthPREducationMarContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationMarContents.kpi2 >= '30.33333333' && youthPREducationMarContents.kpi2 < '36.4')?'green':(youthPREducationMarContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMarContents.kpi3 == null)?'grey-2':(youthPREducationMarContents.kpi3 >= '0' && youthPREducationMarContents.kpi3 <= '2.8')?'red':(youthPREducationMarContents.kpi3 > '2.8' && youthPREducationMarContents.kpi3 <= '3.733333333')?'orange':(youthPREducationMarContents.kpi3 > '3.733333333' && youthPREducationMarContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationMarContents.kpi3 >= '4.666666667' && youthPREducationMarContents.kpi3 < '5.6')?'green':(youthPREducationMarContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMarContents.kpi4 == null)?'grey-2':(youthPREducationMarContents.kpi4 >= '0' && youthPREducationMarContents.kpi4 <= '10.4')?'red':(youthPREducationMarContents.kpi4 > '10.4' && youthPREducationMarContents.kpi4 <= '13.86666667')?'orange':(youthPREducationMarContents.kpi4 > '13.86666667' && youthPREducationMarContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationMarContents.kpi4 >= '17.33333333' && youthPREducationMarContents.kpi4 < '20.8')?'green':(youthPREducationMarContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMarContents.kpi5 == null)?'grey-2':(youthPREducationMarContents.kpi5 >= '0' && youthPREducationMarContents.kpi5 <= '4.8')?'red':(youthPREducationMarContents.kpi5 > '4.8' && youthPREducationMarContents.kpi5 <= '6.4')?'orange':(youthPREducationMarContents.kpi5 > '6.4' && youthPREducationMarContents.kpi5 < '8')?'yellow-7':(youthPREducationMarContents.kpi5 >= '8' && youthPREducationMarContents.kpi5 < '9.6')?'green':(youthPREducationMarContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi5}}
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
                              :color="(youthPREducationAprContents.kpi1 == null)?'grey-2':(youthPREducationAprContents.kpi1 >= '0' && youthPREducationAprContents.kpi1 <= '5.8')?'red':(youthPREducationAprContents.kpi1 > '5.8' && youthPREducationAprContents.kpi1 <= '7.733333333')?'orange':(youthPREducationAprContents.kpi1 > '7.733333333' && youthPREducationAprContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationAprContents.kpi1 >= '9.666666667' && youthPREducationAprContents.kpi1 < '11.6')?'green':(youthPREducationAprContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAprContents.kpi2 == null)?'grey-2':(youthPREducationAprContents.kpi2 >= '0' && youthPREducationAprContents.kpi2 <= '18.2')?'red':(youthPREducationAprContents.kpi2 > '18.2' && youthPREducationAprContents.kpi2 <= '24.26666667')?'orange':(youthPREducationAprContents.kpi2 > '24.26666667' && youthPREducationAprContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationAprContents.kpi2 >= '30.33333333' && youthPREducationAprContents.kpi2 < '36.4')?'green':(youthPREducationAprContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAprContents.kpi3 == null)?'grey-2':(youthPREducationAprContents.kpi3 >= '0' && youthPREducationAprContents.kpi3 <= '2.8')?'red':(youthPREducationAprContents.kpi3 > '2.8' && youthPREducationAprContents.kpi3 <= '3.733333333')?'orange':(youthPREducationAprContents.kpi3 > '3.733333333' && youthPREducationAprContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationAprContents.kpi3 >= '4.666666667' && youthPREducationAprContents.kpi3 < '5.6')?'green':(youthPREducationAprContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAprContents.kpi4 == null)?'grey-2':(youthPREducationAprContents.kpi4 >= '0' && youthPREducationAprContents.kpi4 <= '10.4')?'red':(youthPREducationAprContents.kpi4 > '10.4' && youthPREducationAprContents.kpi4 <= '13.86666667')?'orange':(youthPREducationAprContents.kpi4 > '13.86666667' && youthPREducationAprContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationAprContents.kpi4 >= '17.33333333' && youthPREducationAprContents.kpi4 < '20.8')?'green':(youthPREducationAprContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAprContents.kpi5 == null)?'grey-2':(youthPREducationAprContents.kpi5 >= '0' && youthPREducationAprContents.kpi5 <= '4.8')?'red':(youthPREducationAprContents.kpi5 > '4.8' && youthPREducationAprContents.kpi5 <= '6.4')?'orange':(youthPREducationAprContents.kpi5 > '6.4' && youthPREducationAprContents.kpi5 < '8')?'yellow-7':(youthPREducationAprContents.kpi5 >= '8' && youthPREducationAprContents.kpi5 < '9.6')?'green':(youthPREducationAprContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi5}}
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
                              :color="(youthPREducationMayContents.kpi1 == null)?'grey-2':(youthPREducationMayContents.kpi1 >= '0' && youthPREducationMayContents.kpi1 <= '5.8')?'red':(youthPREducationMayContents.kpi1 > '5.8' && youthPREducationMayContents.kpi1 <= '7.733333333')?'orange':(youthPREducationMayContents.kpi1 > '7.733333333' && youthPREducationMayContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationMayContents.kpi1 >= '9.666666667' && youthPREducationMayContents.kpi1 < '11.6')?'green':(youthPREducationMayContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMayContents.kpi2 == null)?'grey-2':(youthPREducationMayContents.kpi2 >= '0' && youthPREducationMayContents.kpi2 <= '18.2')?'red':(youthPREducationMayContents.kpi2 > '18.2' && youthPREducationMayContents.kpi2 <= '24.26666667')?'orange':(youthPREducationMayContents.kpi2 > '24.26666667' && youthPREducationMayContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationMayContents.kpi2 >= '30.33333333' && youthPREducationMayContents.kpi2 < '36.4')?'green':(youthPREducationMayContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMayContents.kpi3 == null)?'grey-2':(youthPREducationMayContents.kpi3 >= '0' && youthPREducationMayContents.kpi3 <= '2.8')?'red':(youthPREducationMayContents.kpi3 > '2.8' && youthPREducationMayContents.kpi3 <= '3.733333333')?'orange':(youthPREducationMayContents.kpi3 > '3.733333333' && youthPREducationMayContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationMayContents.kpi3 >= '4.666666667' && youthPREducationMayContents.kpi3 < '5.6')?'green':(youthPREducationMayContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMayContents.kpi4 == null)?'grey-2':(youthPREducationMayContents.kpi4 >= '0' && youthPREducationMayContents.kpi4 <= '10.4')?'red':(youthPREducationMayContents.kpi4 > '10.4' && youthPREducationMayContents.kpi4 <= '13.86666667')?'orange':(youthPREducationMayContents.kpi4 > '13.86666667' && youthPREducationMayContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationMayContents.kpi4 >= '17.33333333' && youthPREducationMayContents.kpi4 < '20.8')?'green':(youthPREducationMayContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMayContents.kpi5 == null)?'grey-2':(youthPREducationMayContents.kpi5 >= '0' && youthPREducationMayContents.kpi5 <= '4.8')?'red':(youthPREducationMayContents.kpi5 > '4.8' && youthPREducationMayContents.kpi5 <= '6.4')?'orange':(youthPREducationMayContents.kpi5 > '6.4' && youthPREducationMayContents.kpi5 < '8')?'yellow-7':(youthPREducationMayContents.kpi5 >= '8' && youthPREducationMayContents.kpi5 < '9.6')?'green':(youthPREducationMayContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi5}}
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
                              :color="(youthPREducationJunContents.kpi1 == null)?'grey-2':(youthPREducationJunContents.kpi1 >= '0' && youthPREducationJunContents.kpi1 <= '5.8')?'red':(youthPREducationJunContents.kpi1 > '5.8' && youthPREducationJunContents.kpi1 <= '7.733333333')?'orange':(youthPREducationJunContents.kpi1 > '7.733333333' && youthPREducationJunContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationJunContents.kpi1 >= '9.666666667' && youthPREducationJunContents.kpi1 < '11.6')?'green':(youthPREducationJunContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJunContents.kpi2 == null)?'grey-2':(youthPREducationJunContents.kpi2 >= '0' && youthPREducationJunContents.kpi2 <= '18.2')?'red':(youthPREducationJunContents.kpi2 > '18.2' && youthPREducationJunContents.kpi2 <= '24.26666667')?'orange':(youthPREducationJunContents.kpi2 > '24.26666667' && youthPREducationJunContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationJunContents.kpi2 >= '30.33333333' && youthPREducationJunContents.kpi2 < '36.4')?'green':(youthPREducationJunContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJunContents.kpi3 == null)?'grey-2':(youthPREducationJunContents.kpi3 >= '0' && youthPREducationJunContents.kpi3 <= '2.8')?'red':(youthPREducationJunContents.kpi3 > '2.8' && youthPREducationJunContents.kpi3 <= '3.733333333')?'orange':(youthPREducationJunContents.kpi3 > '3.733333333' && youthPREducationJunContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationJunContents.kpi3 >= '4.666666667' && youthPREducationJunContents.kpi3 < '5.6')?'green':(youthPREducationJunContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJunContents.kpi4 == null)?'grey-2':(youthPREducationJunContents.kpi4 >= '0' && youthPREducationJunContents.kpi4 <= '10.4')?'red':(youthPREducationJunContents.kpi4 > '10.4' && youthPREducationJunContents.kpi4 <= '13.86666667')?'orange':(youthPREducationJunContents.kpi4 > '13.86666667' && youthPREducationJunContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationJunContents.kpi4 >= '17.33333333' && youthPREducationJunContents.kpi4 < '20.8')?'green':(youthPREducationJunContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJunContents.kpi5 == null)?'grey-2':(youthPREducationJunContents.kpi5 >= '0' && youthPREducationJunContents.kpi5 <= '4.8')?'red':(youthPREducationJunContents.kpi5 > '4.8' && youthPREducationJunContents.kpi5 <= '6.4')?'orange':(youthPREducationJunContents.kpi5 > '6.4' && youthPREducationJunContents.kpi5 < '8')?'yellow-7':(youthPREducationJunContents.kpi5 >= '8' && youthPREducationJunContents.kpi5 < '9.6')?'green':(youthPREducationJunContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi5}}
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
                              :color="(youthPREducationJulContents.kpi1 == null)?'grey-2':(youthPREducationJulContents.kpi1 >= '0' && youthPREducationJulContents.kpi1 <= '5.8')?'red':(youthPREducationJulContents.kpi1 > '5.8' && youthPREducationJulContents.kpi1 <= '7.733333333')?'orange':(youthPREducationJulContents.kpi1 > '7.733333333' && youthPREducationJulContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationJulContents.kpi1 >= '9.666666667' && youthPREducationJulContents.kpi1 < '11.6')?'green':(youthPREducationJulContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJulContents.kpi2 == null)?'grey-2':(youthPREducationJulContents.kpi2 >= '0' && youthPREducationJulContents.kpi2 <= '18.2')?'red':(youthPREducationJulContents.kpi2 > '18.2' && youthPREducationJulContents.kpi2 <= '24.26666667')?'orange':(youthPREducationJulContents.kpi2 > '24.26666667' && youthPREducationJulContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationJulContents.kpi2 >= '30.33333333' && youthPREducationJulContents.kpi2 < '36.4')?'green':(youthPREducationJulContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJulContents.kpi3 == null)?'grey-2':(youthPREducationJulContents.kpi3 >= '0' && youthPREducationJulContents.kpi3 <= '2.8')?'red':(youthPREducationJulContents.kpi3 > '2.8' && youthPREducationJulContents.kpi3 <= '3.733333333')?'orange':(youthPREducationJulContents.kpi3 > '3.733333333' && youthPREducationJulContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationJulContents.kpi3 >= '4.666666667' && youthPREducationJulContents.kpi3 < '5.6')?'green':(youthPREducationJulContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJulContents.kpi4 == null)?'grey-2':(youthPREducationJulContents.kpi4 >= '0' && youthPREducationJulContents.kpi4 <= '10.4')?'red':(youthPREducationJulContents.kpi4 > '10.4' && youthPREducationJulContents.kpi4 <= '13.86666667')?'orange':(youthPREducationJulContents.kpi4 > '13.86666667' && youthPREducationJulContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationJulContents.kpi4 >= '17.33333333' && youthPREducationJulContents.kpi4 < '20.8')?'green':(youthPREducationJulContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJulContents.kpi5 == null)?'grey-2':(youthPREducationJulContents.kpi5 >= '0' && youthPREducationJulContents.kpi5 <= '4.8')?'red':(youthPREducationJulContents.kpi5 > '4.8' && youthPREducationJulContents.kpi5 <= '6.4')?'orange':(youthPREducationJulContents.kpi5 > '6.4' && youthPREducationJulContents.kpi5 < '8')?'yellow-7':(youthPREducationJulContents.kpi5 >= '8' && youthPREducationJulContents.kpi5 < '9.6')?'green':(youthPREducationJulContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi5}}
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
                              :color="(youthPREducationAugContents.kpi1 == null)?'grey-2':(youthPREducationAugContents.kpi1 >= '0' && youthPREducationAugContents.kpi1 <= '5.8')?'red':(youthPREducationAugContents.kpi1 > '5.8' && youthPREducationAugContents.kpi1 <= '7.733333333')?'orange':(youthPREducationAugContents.kpi1 > '7.733333333' && youthPREducationAugContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationAugContents.kpi1 >= '9.666666667' && youthPREducationAugContents.kpi1 < '11.6')?'green':(youthPREducationAugContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAugContents.kpi2 == null)?'grey-2':(youthPREducationAugContents.kpi2 >= '0' && youthPREducationAugContents.kpi2 <= '18.2')?'red':(youthPREducationAugContents.kpi2 > '18.2' && youthPREducationAugContents.kpi2 <= '24.26666667')?'orange':(youthPREducationAugContents.kpi2 > '24.26666667' && youthPREducationAugContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationAugContents.kpi2 >= '30.33333333' && youthPREducationAugContents.kpi2 < '36.4')?'green':(youthPREducationAugContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAugContents.kpi3 == null)?'grey-2':(youthPREducationAugContents.kpi3 >= '0' && youthPREducationAugContents.kpi3 <= '2.8')?'red':(youthPREducationAugContents.kpi3 > '2.8' && youthPREducationAugContents.kpi3 <= '3.733333333')?'orange':(youthPREducationAugContents.kpi3 > '3.733333333' && youthPREducationAugContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationAugContents.kpi3 >= '4.666666667' && youthPREducationAugContents.kpi3 < '5.6')?'green':(youthPREducationAugContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAugContents.kpi4 == null)?'grey-2':(youthPREducationAugContents.kpi4 >= '0' && youthPREducationAugContents.kpi4 <= '10.4')?'red':(youthPREducationAugContents.kpi4 > '10.4' && youthPREducationAugContents.kpi4 <= '13.86666667')?'orange':(youthPREducationAugContents.kpi4 > '13.86666667' && youthPREducationAugContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationAugContents.kpi4 >= '17.33333333' && youthPREducationAugContents.kpi4 < '20.8')?'green':(youthPREducationAugContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAugContents.kpi5 == null)?'grey-2':(youthPREducationAugContents.kpi5 >= '0' && youthPREducationAugContents.kpi5 <= '4.8')?'red':(youthPREducationAugContents.kpi5 > '4.8' && youthPREducationAugContents.kpi5 <= '6.4')?'orange':(youthPREducationAugContents.kpi5 > '6.4' && youthPREducationAugContents.kpi5 < '8')?'yellow-7':(youthPREducationAugContents.kpi5 >= '8' && youthPREducationAugContents.kpi5 < '9.6')?'green':(youthPREducationAugContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi5}}
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
                              :color="(youthPREducationSepContents.kpi1 == null)?'grey-2':(youthPREducationSepContents.kpi1 >= '0' && youthPREducationSepContents.kpi1 <= '5.8')?'red':(youthPREducationSepContents.kpi1 > '5.8' && youthPREducationSepContents.kpi1 <= '7.733333333')?'orange':(youthPREducationSepContents.kpi1 > '7.733333333' && youthPREducationSepContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationSepContents.kpi1 >= '9.666666667' && youthPREducationSepContents.kpi1 < '11.6')?'green':(youthPREducationSepContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationSepContents.kpi2 == null)?'grey-2':(youthPREducationSepContents.kpi2 >= '0' && youthPREducationSepContents.kpi2 <= '18.2')?'red':(youthPREducationSepContents.kpi2 > '18.2' && youthPREducationSepContents.kpi2 <= '24.26666667')?'orange':(youthPREducationSepContents.kpi2 > '24.26666667' && youthPREducationSepContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationSepContents.kpi2 >= '30.33333333' && youthPREducationSepContents.kpi2 < '36.4')?'green':(youthPREducationSepContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationSepContents.kpi3 == null)?'grey-2':(youthPREducationSepContents.kpi3 >= '0' && youthPREducationSepContents.kpi3 <= '2.8')?'red':(youthPREducationSepContents.kpi3 > '2.8' && youthPREducationSepContents.kpi3 <= '3.733333333')?'orange':(youthPREducationSepContents.kpi3 > '3.733333333' && youthPREducationSepContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationSepContents.kpi3 >= '4.666666667' && youthPREducationSepContents.kpi3 < '5.6')?'green':(youthPREducationSepContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationSepContents.kpi4 == null)?'grey-2':(youthPREducationSepContents.kpi4 >= '0' && youthPREducationSepContents.kpi4 <= '10.4')?'red':(youthPREducationSepContents.kpi4 > '10.4' && youthPREducationSepContents.kpi4 <= '13.86666667')?'orange':(youthPREducationSepContents.kpi4 > '13.86666667' && youthPREducationSepContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationSepContents.kpi4 >= '17.33333333' && youthPREducationSepContents.kpi4 < '20.8')?'green':(youthPREducationSepContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationSepContents.kpi5 == null)?'grey-2':(youthPREducationSepContents.kpi5 >= '0' && youthPREducationSepContents.kpi5 <= '4.8')?'red':(youthPREducationSepContents.kpi5 > '4.8' && youthPREducationSepContents.kpi5 <= '6.4')?'orange':(youthPREducationSepContents.kpi5 > '6.4' && youthPREducationSepContents.kpi5 < '8')?'yellow-7':(youthPREducationSepContents.kpi5 >= '8' && youthPREducationSepContents.kpi5 < '9.6')?'green':(youthPREducationSepContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi5}}
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
                              :color="(youthPREducationOctContents.kpi1 == null)?'grey-2':(youthPREducationOctContents.kpi1 >= '0' && youthPREducationOctContents.kpi1 <= '5.8')?'red':(youthPREducationOctContents.kpi1 > '5.8' && youthPREducationOctContents.kpi1 <= '7.733333333')?'orange':(youthPREducationOctContents.kpi1 > '7.733333333' && youthPREducationOctContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationOctContents.kpi1 >= '9.666666667' && youthPREducationOctContents.kpi1 < '11.6')?'green':(youthPREducationOctContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationOctContents.kpi2 == null)?'grey-2':(youthPREducationOctContents.kpi2 >= '0' && youthPREducationOctContents.kpi2 <= '18.2')?'red':(youthPREducationOctContents.kpi2 > '18.2' && youthPREducationOctContents.kpi2 <= '24.26666667')?'orange':(youthPREducationOctContents.kpi2 > '24.26666667' && youthPREducationOctContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationOctContents.kpi2 >= '30.33333333' && youthPREducationOctContents.kpi2 < '36.4')?'green':(youthPREducationOctContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationOctContents.kpi3 == null)?'grey-2':(youthPREducationOctContents.kpi3 >= '0' && youthPREducationOctContents.kpi3 <= '2.8')?'red':(youthPREducationOctContents.kpi3 > '2.8' && youthPREducationOctContents.kpi3 <= '3.733333333')?'orange':(youthPREducationOctContents.kpi3 > '3.733333333' && youthPREducationOctContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationOctContents.kpi3 >= '4.666666667' && youthPREducationOctContents.kpi3 < '5.6')?'green':(youthPREducationOctContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationOctContents.kpi4 == null)?'grey-2':(youthPREducationOctContents.kpi4 >= '0' && youthPREducationOctContents.kpi4 <= '10.4')?'red':(youthPREducationOctContents.kpi4 > '10.4' && youthPREducationOctContents.kpi4 <= '13.86666667')?'orange':(youthPREducationOctContents.kpi4 > '13.86666667' && youthPREducationOctContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationOctContents.kpi4 >= '17.33333333' && youthPREducationOctContents.kpi4 < '20.8')?'green':(youthPREducationOctContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationOctContents.kpi5 == null)?'grey-2':(youthPREducationOctContents.kpi5 >= '0' && youthPREducationOctContents.kpi5 <= '4.8')?'red':(youthPREducationOctContents.kpi5 > '4.8' && youthPREducationOctContents.kpi5 <= '6.4')?'orange':(youthPREducationOctContents.kpi5 > '6.4' && youthPREducationOctContents.kpi5 < '8')?'yellow-7':(youthPREducationOctContents.kpi5 >= '8' && youthPREducationOctContents.kpi5 < '9.6')?'green':(youthPREducationOctContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi5}}
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
                              :color="(youthPREducationNovContents.kpi1 == null)?'grey-2':(youthPREducationNovContents.kpi1 >= '0' && youthPREducationNovContents.kpi1 <= '5.8')?'red':(youthPREducationNovContents.kpi1 > '5.8' && youthPREducationNovContents.kpi1 <= '7.733333333')?'orange':(youthPREducationNovContents.kpi1 > '7.733333333' && youthPREducationNovContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationNovContents.kpi1 >= '9.666666667' && youthPREducationNovContents.kpi1 < '11.6')?'green':(youthPREducationNovContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationNovContents.kpi2 == null)?'grey-2':(youthPREducationNovContents.kpi2 >= '0' && youthPREducationNovContents.kpi2 <= '18.2')?'red':(youthPREducationNovContents.kpi2 > '18.2' && youthPREducationNovContents.kpi2 <= '24.26666667')?'orange':(youthPREducationNovContents.kpi2 > '24.26666667' && youthPREducationNovContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationNovContents.kpi2 >= '30.33333333' && youthPREducationNovContents.kpi2 < '36.4')?'green':(youthPREducationNovContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationNovContents.kpi3 == null)?'grey-2':(youthPREducationNovContents.kpi3 >= '0' && youthPREducationNovContents.kpi3 <= '2.8')?'red':(youthPREducationNovContents.kpi3 > '2.8' && youthPREducationNovContents.kpi3 <= '3.733333333')?'orange':(youthPREducationNovContents.kpi3 > '3.733333333' && youthPREducationNovContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationNovContents.kpi3 >= '4.666666667' && youthPREducationNovContents.kpi3 < '5.6')?'green':(youthPREducationNovContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationNovContents.kpi4 == null)?'grey-2':(youthPREducationNovContents.kpi4 >= '0' && youthPREducationNovContents.kpi4 <= '10.4')?'red':(youthPREducationNovContents.kpi4 > '10.4' && youthPREducationNovContents.kpi4 <= '13.86666667')?'orange':(youthPREducationNovContents.kpi4 > '13.86666667' && youthPREducationNovContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationNovContents.kpi4 >= '17.33333333' && youthPREducationNovContents.kpi4 < '20.8')?'green':(youthPREducationNovContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationNovContents.kpi5 == null)?'grey-2':(youthPREducationNovContents.kpi5 >= '0' && youthPREducationNovContents.kpi5 <= '4.8')?'red':(youthPREducationNovContents.kpi5 > '4.8' && youthPREducationNovContents.kpi5 <= '6.4')?'orange':(youthPREducationNovContents.kpi5 > '6.4' && youthPREducationNovContents.kpi5 < '8')?'yellow-7':(youthPREducationNovContents.kpi5 >= '8' && youthPREducationNovContents.kpi5 < '9.6')?'green':(youthPREducationNovContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi5}}
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
                              :color="(youthPREducationDecContents.kpi1 == null)?'grey-2':(youthPREducationDecContents.kpi1 >= '0' && youthPREducationDecContents.kpi1 <= '5.8')?'red':(youthPREducationDecContents.kpi1 > '5.8' && youthPREducationDecContents.kpi1 <= '7.733333333')?'orange':(youthPREducationDecContents.kpi1 > '7.733333333' && youthPREducationDecContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationDecContents.kpi1 >= '9.666666667' && youthPREducationDecContents.kpi1 < '11.6')?'green':(youthPREducationDecContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationDecContents.kpi2 == null)?'grey-2':(youthPREducationDecContents.kpi2 >= '0' && youthPREducationDecContents.kpi2 <= '18.2')?'red':(youthPREducationDecContents.kpi2 > '18.2' && youthPREducationDecContents.kpi2 <= '24.26666667')?'orange':(youthPREducationDecContents.kpi2 > '24.26666667' && youthPREducationDecContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationDecContents.kpi2 >= '30.33333333' && youthPREducationDecContents.kpi2 < '36.4')?'green':(youthPREducationDecContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationDecContents.kpi3 == null)?'grey-2':(youthPREducationDecContents.kpi3 >= '0' && youthPREducationDecContents.kpi3 <= '2.8')?'red':(youthPREducationDecContents.kpi3 > '2.8' && youthPREducationDecContents.kpi3 <= '3.733333333')?'orange':(youthPREducationDecContents.kpi3 > '3.733333333' && youthPREducationDecContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationDecContents.kpi3 >= '4.666666667' && youthPREducationDecContents.kpi3 < '5.6')?'green':(youthPREducationDecContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationDecContents.kpi4 == null)?'grey-2':(youthPREducationDecContents.kpi4 >= '0' && youthPREducationDecContents.kpi4 <= '10.4')?'red':(youthPREducationDecContents.kpi4 > '10.4' && youthPREducationDecContents.kpi4 <= '13.86666667')?'orange':(youthPREducationDecContents.kpi4 > '13.86666667' && youthPREducationDecContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationDecContents.kpi4 >= '17.33333333' && youthPREducationDecContents.kpi4 < '20.8')?'green':(youthPREducationDecContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationDecContents.kpi5 == null)?'grey-2':(youthPREducationDecContents.kpi5 >= '0' && youthPREducationDecContents.kpi5 <= '4.8')?'red':(youthPREducationDecContents.kpi5 > '4.8' && youthPREducationDecContents.kpi5 <= '6.4')?'orange':(youthPREducationDecContents.kpi5 > '6.4' && youthPREducationDecContents.kpi5 < '8')?'yellow-7':(youthPREducationDecContents.kpi5 >= '8' && youthPREducationDecContents.kpi5 < '9.6')?'green':(youthPREducationDecContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi5}}
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
                              :color="(youthPREducationJanContents.kpi1 == null)?'grey-2':(youthPREducationJanContents.kpi1 >= '0' && youthPREducationJanContents.kpi1 <= '5.8')?'red':(youthPREducationJanContents.kpi1 > '5.8' && youthPREducationJanContents.kpi1 <= '7.733333333')?'orange':(youthPREducationJanContents.kpi1 > '7.733333333' && youthPREducationJanContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationJanContents.kpi1 >= '9.666666667' && youthPREducationJanContents.kpi1 < '11.6')?'green':(youthPREducationJanContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJanContents.kpi2 == null)?'grey-2':(youthPREducationJanContents.kpi2 >= '0' && youthPREducationJanContents.kpi2 <= '18.2')?'red':(youthPREducationJanContents.kpi2 > '18.2' && youthPREducationJanContents.kpi2 <= '24.26666667')?'orange':(youthPREducationJanContents.kpi2 > '24.26666667' && youthPREducationJanContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationJanContents.kpi2 >= '30.33333333' && youthPREducationJanContents.kpi2 < '36.4')?'green':(youthPREducationJanContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJanContents.kpi3 == null)?'grey-2':(youthPREducationJanContents.kpi3 >= '0' && youthPREducationJanContents.kpi3 <= '2.8')?'red':(youthPREducationJanContents.kpi3 > '2.8' && youthPREducationJanContents.kpi3 <= '3.733333333')?'orange':(youthPREducationJanContents.kpi3 > '3.733333333' && youthPREducationJanContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationJanContents.kpi3 >= '4.666666667' && youthPREducationJanContents.kpi3 < '5.6')?'green':(youthPREducationJanContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJanContents.kpi4 == null)?'grey-2':(youthPREducationJanContents.kpi4 >= '0' && youthPREducationJanContents.kpi4 <= '10.4')?'red':(youthPREducationJanContents.kpi4 > '10.4' && youthPREducationJanContents.kpi4 <= '13.86666667')?'orange':(youthPREducationJanContents.kpi4 > '13.86666667' && youthPREducationJanContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationJanContents.kpi4 >= '17.33333333' && youthPREducationJanContents.kpi4 < '20.8')?'green':(youthPREducationJanContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJanContents.kpi5 == null)?'grey-2':(youthPREducationJanContents.kpi5 >= '0' && youthPREducationJanContents.kpi5 <= '4.8')?'red':(youthPREducationJanContents.kpi5 > '4.8' && youthPREducationJanContents.kpi5 <= '6.4')?'orange':(youthPREducationJanContents.kpi5 > '6.4' && youthPREducationJanContents.kpi5 < '8')?'yellow-7':(youthPREducationJanContents.kpi5 >= '8' && youthPREducationJanContents.kpi5 < '9.6')?'green':(youthPREducationJanContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi5}}
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
                              :color="(youthPREducationFebContents.kpi1 == null)?'grey-2':(youthPREducationFebContents.kpi1 >= '0' && youthPREducationFebContents.kpi1 <= '5.8')?'red':(youthPREducationFebContents.kpi1 > '5.8' && youthPREducationFebContents.kpi1 <= '7.733333333')?'orange':(youthPREducationFebContents.kpi1 > '7.733333333' && youthPREducationFebContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationFebContents.kpi1 >= '9.666666667' && youthPREducationFebContents.kpi1 < '11.6')?'green':(youthPREducationFebContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationFebContents.kpi2 == null)?'grey-2':(youthPREducationFebContents.kpi2 >= '0' && youthPREducationFebContents.kpi2 <= '18.2')?'red':(youthPREducationFebContents.kpi2 > '18.2' && youthPREducationFebContents.kpi2 <= '24.26666667')?'orange':(youthPREducationFebContents.kpi2 > '24.26666667' && youthPREducationFebContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationFebContents.kpi2 >= '30.33333333' && youthPREducationFebContents.kpi2 < '36.4')?'green':(youthPREducationFebContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationFebContents.kpi3 == null)?'grey-2':(youthPREducationFebContents.kpi3 >= '0' && youthPREducationFebContents.kpi3 <= '2.8')?'red':(youthPREducationFebContents.kpi3 > '2.8' && youthPREducationFebContents.kpi3 <= '3.733333333')?'orange':(youthPREducationFebContents.kpi3 > '3.733333333' && youthPREducationFebContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationFebContents.kpi3 >= '4.666666667' && youthPREducationFebContents.kpi3 < '5.6')?'green':(youthPREducationFebContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationFebContents.kpi4 == null)?'grey-2':(youthPREducationFebContents.kpi4 >= '0' && youthPREducationFebContents.kpi4 <= '10.4')?'red':(youthPREducationFebContents.kpi4 > '10.4' && youthPREducationFebContents.kpi4 <= '13.86666667')?'orange':(youthPREducationFebContents.kpi4 > '13.86666667' && youthPREducationFebContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationFebContents.kpi4 >= '17.33333333' && youthPREducationFebContents.kpi4 < '20.8')?'green':(youthPREducationFebContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationFebContents.kpi5 == null)?'grey-2':(youthPREducationFebContents.kpi5 >= '0' && youthPREducationFebContents.kpi5 <= '4.8')?'red':(youthPREducationFebContents.kpi5 > '4.8' && youthPREducationFebContents.kpi5 <= '6.4')?'orange':(youthPREducationFebContents.kpi5 > '6.4' && youthPREducationFebContents.kpi5 < '8')?'yellow-7':(youthPREducationFebContents.kpi5 >= '8' && youthPREducationFebContents.kpi5 < '9.6')?'green':(youthPREducationFebContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi5}}
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
                              :color="(youthPREducationMarContents.kpi1 == null)?'grey-2':(youthPREducationMarContents.kpi1 >= '0' && youthPREducationMarContents.kpi1 <= '5.8')?'red':(youthPREducationMarContents.kpi1 > '5.8' && youthPREducationMarContents.kpi1 <= '7.733333333')?'orange':(youthPREducationMarContents.kpi1 > '7.733333333' && youthPREducationMarContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationMarContents.kpi1 >= '9.666666667' && youthPREducationMarContents.kpi1 < '11.6')?'green':(youthPREducationMarContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMarContents.kpi2 == null)?'grey-2':(youthPREducationMarContents.kpi2 >= '0' && youthPREducationMarContents.kpi2 <= '18.2')?'red':(youthPREducationMarContents.kpi2 > '18.2' && youthPREducationMarContents.kpi2 <= '24.26666667')?'orange':(youthPREducationMarContents.kpi2 > '24.26666667' && youthPREducationMarContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationMarContents.kpi2 >= '30.33333333' && youthPREducationMarContents.kpi2 < '36.4')?'green':(youthPREducationMarContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMarContents.kpi3 == null)?'grey-2':(youthPREducationMarContents.kpi3 >= '0' && youthPREducationMarContents.kpi3 <= '2.8')?'red':(youthPREducationMarContents.kpi3 > '2.8' && youthPREducationMarContents.kpi3 <= '3.733333333')?'orange':(youthPREducationMarContents.kpi3 > '3.733333333' && youthPREducationMarContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationMarContents.kpi3 >= '4.666666667' && youthPREducationMarContents.kpi3 < '5.6')?'green':(youthPREducationMarContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMarContents.kpi4 == null)?'grey-2':(youthPREducationMarContents.kpi4 >= '0' && youthPREducationMarContents.kpi4 <= '10.4')?'red':(youthPREducationMarContents.kpi4 > '10.4' && youthPREducationMarContents.kpi4 <= '13.86666667')?'orange':(youthPREducationMarContents.kpi4 > '13.86666667' && youthPREducationMarContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationMarContents.kpi4 >= '17.33333333' && youthPREducationMarContents.kpi4 < '20.8')?'green':(youthPREducationMarContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMarContents.kpi5 == null)?'grey-2':(youthPREducationMarContents.kpi5 >= '0' && youthPREducationMarContents.kpi5 <= '4.8')?'red':(youthPREducationMarContents.kpi5 > '4.8' && youthPREducationMarContents.kpi5 <= '6.4')?'orange':(youthPREducationMarContents.kpi5 > '6.4' && youthPREducationMarContents.kpi5 < '8')?'yellow-7':(youthPREducationMarContents.kpi5 >= '8' && youthPREducationMarContents.kpi5 < '9.6')?'green':(youthPREducationMarContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi5}}
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
                              :color="(youthPREducationAprContents.kpi1 == null)?'grey-2':(youthPREducationAprContents.kpi1 >= '0' && youthPREducationAprContents.kpi1 <= '5.8')?'red':(youthPREducationAprContents.kpi1 > '5.8' && youthPREducationAprContents.kpi1 <= '7.733333333')?'orange':(youthPREducationAprContents.kpi1 > '7.733333333' && youthPREducationAprContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationAprContents.kpi1 >= '9.666666667' && youthPREducationAprContents.kpi1 < '11.6')?'green':(youthPREducationAprContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAprContents.kpi2 == null)?'grey-2':(youthPREducationAprContents.kpi2 >= '0' && youthPREducationAprContents.kpi2 <= '18.2')?'red':(youthPREducationAprContents.kpi2 > '18.2' && youthPREducationAprContents.kpi2 <= '24.26666667')?'orange':(youthPREducationAprContents.kpi2 > '24.26666667' && youthPREducationAprContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationAprContents.kpi2 >= '30.33333333' && youthPREducationAprContents.kpi2 < '36.4')?'green':(youthPREducationAprContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAprContents.kpi3 == null)?'grey-2':(youthPREducationAprContents.kpi3 >= '0' && youthPREducationAprContents.kpi3 <= '2.8')?'red':(youthPREducationAprContents.kpi3 > '2.8' && youthPREducationAprContents.kpi3 <= '3.733333333')?'orange':(youthPREducationAprContents.kpi3 > '3.733333333' && youthPREducationAprContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationAprContents.kpi3 >= '4.666666667' && youthPREducationAprContents.kpi3 < '5.6')?'green':(youthPREducationAprContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAprContents.kpi4 == null)?'grey-2':(youthPREducationAprContents.kpi4 >= '0' && youthPREducationAprContents.kpi4 <= '10.4')?'red':(youthPREducationAprContents.kpi4 > '10.4' && youthPREducationAprContents.kpi4 <= '13.86666667')?'orange':(youthPREducationAprContents.kpi4 > '13.86666667' && youthPREducationAprContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationAprContents.kpi4 >= '17.33333333' && youthPREducationAprContents.kpi4 < '20.8')?'green':(youthPREducationAprContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAprContents.kpi5 == null)?'grey-2':(youthPREducationAprContents.kpi5 >= '0' && youthPREducationAprContents.kpi5 <= '4.8')?'red':(youthPREducationAprContents.kpi5 > '4.8' && youthPREducationAprContents.kpi5 <= '6.4')?'orange':(youthPREducationAprContents.kpi5 > '6.4' && youthPREducationAprContents.kpi5 < '8')?'yellow-7':(youthPREducationAprContents.kpi5 >= '8' && youthPREducationAprContents.kpi5 < '9.6')?'green':(youthPREducationAprContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi5}}
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
                              :color="(youthPREducationMayContents.kpi1 == null)?'grey-2':(youthPREducationMayContents.kpi1 >= '0' && youthPREducationMayContents.kpi1 <= '5.8')?'red':(youthPREducationMayContents.kpi1 > '5.8' && youthPREducationMayContents.kpi1 <= '7.733333333')?'orange':(youthPREducationMayContents.kpi1 > '7.733333333' && youthPREducationMayContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationMayContents.kpi1 >= '9.666666667' && youthPREducationMayContents.kpi1 < '11.6')?'green':(youthPREducationMayContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMayContents.kpi2 == null)?'grey-2':(youthPREducationMayContents.kpi2 >= '0' && youthPREducationMayContents.kpi2 <= '18.2')?'red':(youthPREducationMayContents.kpi2 > '18.2' && youthPREducationMayContents.kpi2 <= '24.26666667')?'orange':(youthPREducationMayContents.kpi2 > '24.26666667' && youthPREducationMayContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationMayContents.kpi2 >= '30.33333333' && youthPREducationMayContents.kpi2 < '36.4')?'green':(youthPREducationMayContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMayContents.kpi3 == null)?'grey-2':(youthPREducationMayContents.kpi3 >= '0' && youthPREducationMayContents.kpi3 <= '2.8')?'red':(youthPREducationMayContents.kpi3 > '2.8' && youthPREducationMayContents.kpi3 <= '3.733333333')?'orange':(youthPREducationMayContents.kpi3 > '3.733333333' && youthPREducationMayContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationMayContents.kpi3 >= '4.666666667' && youthPREducationMayContents.kpi3 < '5.6')?'green':(youthPREducationMayContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMayContents.kpi4 == null)?'grey-2':(youthPREducationMayContents.kpi4 >= '0' && youthPREducationMayContents.kpi4 <= '10.4')?'red':(youthPREducationMayContents.kpi4 > '10.4' && youthPREducationMayContents.kpi4 <= '13.86666667')?'orange':(youthPREducationMayContents.kpi4 > '13.86666667' && youthPREducationMayContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationMayContents.kpi4 >= '17.33333333' && youthPREducationMayContents.kpi4 < '20.8')?'green':(youthPREducationMayContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMayContents.kpi5 == null)?'grey-2':(youthPREducationMayContents.kpi5 >= '0' && youthPREducationMayContents.kpi5 <= '4.8')?'red':(youthPREducationMayContents.kpi5 > '4.8' && youthPREducationMayContents.kpi5 <= '6.4')?'orange':(youthPREducationMayContents.kpi5 > '6.4' && youthPREducationMayContents.kpi5 < '8')?'yellow-7':(youthPREducationMayContents.kpi5 >= '8' && youthPREducationMayContents.kpi5 < '9.6')?'green':(youthPREducationMayContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi5}}
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
                              :color="(youthPREducationJunContents.kpi1 == null)?'grey-2':(youthPREducationJunContents.kpi1 >= '0' && youthPREducationJunContents.kpi1 <= '5.8')?'red':(youthPREducationJunContents.kpi1 > '5.8' && youthPREducationJunContents.kpi1 <= '7.733333333')?'orange':(youthPREducationJunContents.kpi1 > '7.733333333' && youthPREducationJunContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationJunContents.kpi1 >= '9.666666667' && youthPREducationJunContents.kpi1 < '11.6')?'green':(youthPREducationJunContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJunContents.kpi2 == null)?'grey-2':(youthPREducationJunContents.kpi2 >= '0' && youthPREducationJunContents.kpi2 <= '18.2')?'red':(youthPREducationJunContents.kpi2 > '18.2' && youthPREducationJunContents.kpi2 <= '24.26666667')?'orange':(youthPREducationJunContents.kpi2 > '24.26666667' && youthPREducationJunContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationJunContents.kpi2 >= '30.33333333' && youthPREducationJunContents.kpi2 < '36.4')?'green':(youthPREducationJunContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJunContents.kpi3 == null)?'grey-2':(youthPREducationJunContents.kpi3 >= '0' && youthPREducationJunContents.kpi3 <= '2.8')?'red':(youthPREducationJunContents.kpi3 > '2.8' && youthPREducationJunContents.kpi3 <= '3.733333333')?'orange':(youthPREducationJunContents.kpi3 > '3.733333333' && youthPREducationJunContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationJunContents.kpi3 >= '4.666666667' && youthPREducationJunContents.kpi3 < '5.6')?'green':(youthPREducationJunContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJunContents.kpi4 == null)?'grey-2':(youthPREducationJunContents.kpi4 >= '0' && youthPREducationJunContents.kpi4 <= '10.4')?'red':(youthPREducationJunContents.kpi4 > '10.4' && youthPREducationJunContents.kpi4 <= '13.86666667')?'orange':(youthPREducationJunContents.kpi4 > '13.86666667' && youthPREducationJunContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationJunContents.kpi4 >= '17.33333333' && youthPREducationJunContents.kpi4 < '20.8')?'green':(youthPREducationJunContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJunContents.kpi5 == null)?'grey-2':(youthPREducationJunContents.kpi5 >= '0' && youthPREducationJunContents.kpi5 <= '4.8')?'red':(youthPREducationJunContents.kpi5 > '4.8' && youthPREducationJunContents.kpi5 <= '6.4')?'orange':(youthPREducationJunContents.kpi5 > '6.4' && youthPREducationJunContents.kpi5 < '8')?'yellow-7':(youthPREducationJunContents.kpi5 >= '8' && youthPREducationJunContents.kpi5 < '9.6')?'green':(youthPREducationJunContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi5}}
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
                              :color="(youthPREducationJulContents.kpi1 == null)?'grey-2':(youthPREducationJulContents.kpi1 >= '0' && youthPREducationJulContents.kpi1 <= '5.8')?'red':(youthPREducationJulContents.kpi1 > '5.8' && youthPREducationJulContents.kpi1 <= '7.733333333')?'orange':(youthPREducationJulContents.kpi1 > '7.733333333' && youthPREducationJulContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationJulContents.kpi1 >= '9.666666667' && youthPREducationJulContents.kpi1 < '11.6')?'green':(youthPREducationJulContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJulContents.kpi2 == null)?'grey-2':(youthPREducationJulContents.kpi2 >= '0' && youthPREducationJulContents.kpi2 <= '18.2')?'red':(youthPREducationJulContents.kpi2 > '18.2' && youthPREducationJulContents.kpi2 <= '24.26666667')?'orange':(youthPREducationJulContents.kpi2 > '24.26666667' && youthPREducationJulContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationJulContents.kpi2 >= '30.33333333' && youthPREducationJulContents.kpi2 < '36.4')?'green':(youthPREducationJulContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJulContents.kpi3 == null)?'grey-2':(youthPREducationJulContents.kpi3 >= '0' && youthPREducationJulContents.kpi3 <= '2.8')?'red':(youthPREducationJulContents.kpi3 > '2.8' && youthPREducationJulContents.kpi3 <= '3.733333333')?'orange':(youthPREducationJulContents.kpi3 > '3.733333333' && youthPREducationJulContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationJulContents.kpi3 >= '4.666666667' && youthPREducationJulContents.kpi3 < '5.6')?'green':(youthPREducationJulContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJulContents.kpi4 == null)?'grey-2':(youthPREducationJulContents.kpi4 >= '0' && youthPREducationJulContents.kpi4 <= '10.4')?'red':(youthPREducationJulContents.kpi4 > '10.4' && youthPREducationJulContents.kpi4 <= '13.86666667')?'orange':(youthPREducationJulContents.kpi4 > '13.86666667' && youthPREducationJulContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationJulContents.kpi4 >= '17.33333333' && youthPREducationJulContents.kpi4 < '20.8')?'green':(youthPREducationJulContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJulContents.kpi5 == null)?'grey-2':(youthPREducationJulContents.kpi5 >= '0' && youthPREducationJulContents.kpi5 <= '4.8')?'red':(youthPREducationJulContents.kpi5 > '4.8' && youthPREducationJulContents.kpi5 <= '6.4')?'orange':(youthPREducationJulContents.kpi5 > '6.4' && youthPREducationJulContents.kpi5 < '8')?'yellow-7':(youthPREducationJulContents.kpi5 >= '8' && youthPREducationJulContents.kpi5 < '9.6')?'green':(youthPREducationJulContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi5}}
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
                              :color="(youthPREducationAugContents.kpi1 == null)?'grey-2':(youthPREducationAugContents.kpi1 >= '0' && youthPREducationAugContents.kpi1 <= '5.8')?'red':(youthPREducationAugContents.kpi1 > '5.8' && youthPREducationAugContents.kpi1 <= '7.733333333')?'orange':(youthPREducationAugContents.kpi1 > '7.733333333' && youthPREducationAugContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationAugContents.kpi1 >= '9.666666667' && youthPREducationAugContents.kpi1 < '11.6')?'green':(youthPREducationAugContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAugContents.kpi2 == null)?'grey-2':(youthPREducationAugContents.kpi2 >= '0' && youthPREducationAugContents.kpi2 <= '18.2')?'red':(youthPREducationAugContents.kpi2 > '18.2' && youthPREducationAugContents.kpi2 <= '24.26666667')?'orange':(youthPREducationAugContents.kpi2 > '24.26666667' && youthPREducationAugContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationAugContents.kpi2 >= '30.33333333' && youthPREducationAugContents.kpi2 < '36.4')?'green':(youthPREducationAugContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAugContents.kpi3 == null)?'grey-2':(youthPREducationAugContents.kpi3 >= '0' && youthPREducationAugContents.kpi3 <= '2.8')?'red':(youthPREducationAugContents.kpi3 > '2.8' && youthPREducationAugContents.kpi3 <= '3.733333333')?'orange':(youthPREducationAugContents.kpi3 > '3.733333333' && youthPREducationAugContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationAugContents.kpi3 >= '4.666666667' && youthPREducationAugContents.kpi3 < '5.6')?'green':(youthPREducationAugContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAugContents.kpi4 == null)?'grey-2':(youthPREducationAugContents.kpi4 >= '0' && youthPREducationAugContents.kpi4 <= '10.4')?'red':(youthPREducationAugContents.kpi4 > '10.4' && youthPREducationAugContents.kpi4 <= '13.86666667')?'orange':(youthPREducationAugContents.kpi4 > '13.86666667' && youthPREducationAugContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationAugContents.kpi4 >= '17.33333333' && youthPREducationAugContents.kpi4 < '20.8')?'green':(youthPREducationAugContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAugContents.kpi5 == null)?'grey-2':(youthPREducationAugContents.kpi5 >= '0' && youthPREducationAugContents.kpi5 <= '4.8')?'red':(youthPREducationAugContents.kpi5 > '4.8' && youthPREducationAugContents.kpi5 <= '6.4')?'orange':(youthPREducationAugContents.kpi5 > '6.4' && youthPREducationAugContents.kpi5 < '8')?'yellow-7':(youthPREducationAugContents.kpi5 >= '8' && youthPREducationAugContents.kpi5 < '9.6')?'green':(youthPREducationAugContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi5}}
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
                              :color="(youthPREducationSepContents.kpi1 == null)?'grey-2':(youthPREducationSepContents.kpi1 >= '0' && youthPREducationSepContents.kpi1 <= '5.8')?'red':(youthPREducationSepContents.kpi1 > '5.8' && youthPREducationSepContents.kpi1 <= '7.733333333')?'orange':(youthPREducationSepContents.kpi1 > '7.733333333' && youthPREducationSepContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationSepContents.kpi1 >= '9.666666667' && youthPREducationSepContents.kpi1 < '11.6')?'green':(youthPREducationSepContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationSepContents.kpi2 == null)?'grey-2':(youthPREducationSepContents.kpi2 >= '0' && youthPREducationSepContents.kpi2 <= '18.2')?'red':(youthPREducationSepContents.kpi2 > '18.2' && youthPREducationSepContents.kpi2 <= '24.26666667')?'orange':(youthPREducationSepContents.kpi2 > '24.26666667' && youthPREducationSepContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationSepContents.kpi2 >= '30.33333333' && youthPREducationSepContents.kpi2 < '36.4')?'green':(youthPREducationSepContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationSepContents.kpi3 == null)?'grey-2':(youthPREducationSepContents.kpi3 >= '0' && youthPREducationSepContents.kpi3 <= '2.8')?'red':(youthPREducationSepContents.kpi3 > '2.8' && youthPREducationSepContents.kpi3 <= '3.733333333')?'orange':(youthPREducationSepContents.kpi3 > '3.733333333' && youthPREducationSepContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationSepContents.kpi3 >= '4.666666667' && youthPREducationSepContents.kpi3 < '5.6')?'green':(youthPREducationSepContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationSepContents.kpi4 == null)?'grey-2':(youthPREducationSepContents.kpi4 >= '0' && youthPREducationSepContents.kpi4 <= '10.4')?'red':(youthPREducationSepContents.kpi4 > '10.4' && youthPREducationSepContents.kpi4 <= '13.86666667')?'orange':(youthPREducationSepContents.kpi4 > '13.86666667' && youthPREducationSepContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationSepContents.kpi4 >= '17.33333333' && youthPREducationSepContents.kpi4 < '20.8')?'green':(youthPREducationSepContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationSepContents.kpi5 == null)?'grey-2':(youthPREducationSepContents.kpi5 >= '0' && youthPREducationSepContents.kpi5 <= '4.8')?'red':(youthPREducationSepContents.kpi5 > '4.8' && youthPREducationSepContents.kpi5 <= '6.4')?'orange':(youthPREducationSepContents.kpi5 > '6.4' && youthPREducationSepContents.kpi5 < '8')?'yellow-7':(youthPREducationSepContents.kpi5 >= '8' && youthPREducationSepContents.kpi5 < '9.6')?'green':(youthPREducationSepContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi5}}
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
                              :color="(youthPREducationOctContents.kpi1 == null)?'grey-2':(youthPREducationOctContents.kpi1 >= '0' && youthPREducationOctContents.kpi1 <= '5.8')?'red':(youthPREducationOctContents.kpi1 > '5.8' && youthPREducationOctContents.kpi1 <= '7.733333333')?'orange':(youthPREducationOctContents.kpi1 > '7.733333333' && youthPREducationOctContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationOctContents.kpi1 >= '9.666666667' && youthPREducationOctContents.kpi1 < '11.6')?'green':(youthPREducationOctContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationOctContents.kpi2 == null)?'grey-2':(youthPREducationOctContents.kpi2 >= '0' && youthPREducationOctContents.kpi2 <= '18.2')?'red':(youthPREducationOctContents.kpi2 > '18.2' && youthPREducationOctContents.kpi2 <= '24.26666667')?'orange':(youthPREducationOctContents.kpi2 > '24.26666667' && youthPREducationOctContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationOctContents.kpi2 >= '30.33333333' && youthPREducationOctContents.kpi2 < '36.4')?'green':(youthPREducationOctContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationOctContents.kpi3 == null)?'grey-2':(youthPREducationOctContents.kpi3 >= '0' && youthPREducationOctContents.kpi3 <= '2.8')?'red':(youthPREducationOctContents.kpi3 > '2.8' && youthPREducationOctContents.kpi3 <= '3.733333333')?'orange':(youthPREducationOctContents.kpi3 > '3.733333333' && youthPREducationOctContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationOctContents.kpi3 >= '4.666666667' && youthPREducationOctContents.kpi3 < '5.6')?'green':(youthPREducationOctContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationOctContents.kpi4 == null)?'grey-2':(youthPREducationOctContents.kpi4 >= '0' && youthPREducationOctContents.kpi4 <= '10.4')?'red':(youthPREducationOctContents.kpi4 > '10.4' && youthPREducationOctContents.kpi4 <= '13.86666667')?'orange':(youthPREducationOctContents.kpi4 > '13.86666667' && youthPREducationOctContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationOctContents.kpi4 >= '17.33333333' && youthPREducationOctContents.kpi4 < '20.8')?'green':(youthPREducationOctContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationOctContents.kpi5 == null)?'grey-2':(youthPREducationOctContents.kpi5 >= '0' && youthPREducationOctContents.kpi5 <= '4.8')?'red':(youthPREducationOctContents.kpi5 > '4.8' && youthPREducationOctContents.kpi5 <= '6.4')?'orange':(youthPREducationOctContents.kpi5 > '6.4' && youthPREducationOctContents.kpi5 < '8')?'yellow-7':(youthPREducationOctContents.kpi5 >= '8' && youthPREducationOctContents.kpi5 < '9.6')?'green':(youthPREducationOctContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi5}}
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
                              :color="(youthPREducationNovContents.kpi1 == null)?'grey-2':(youthPREducationNovContents.kpi1 >= '0' && youthPREducationNovContents.kpi1 <= '5.8')?'red':(youthPREducationNovContents.kpi1 > '5.8' && youthPREducationNovContents.kpi1 <= '7.733333333')?'orange':(youthPREducationNovContents.kpi1 > '7.733333333' && youthPREducationNovContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationNovContents.kpi1 >= '9.666666667' && youthPREducationNovContents.kpi1 < '11.6')?'green':(youthPREducationNovContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationNovContents.kpi2 == null)?'grey-2':(youthPREducationNovContents.kpi2 >= '0' && youthPREducationNovContents.kpi2 <= '18.2')?'red':(youthPREducationNovContents.kpi2 > '18.2' && youthPREducationNovContents.kpi2 <= '24.26666667')?'orange':(youthPREducationNovContents.kpi2 > '24.26666667' && youthPREducationNovContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationNovContents.kpi2 >= '30.33333333' && youthPREducationNovContents.kpi2 < '36.4')?'green':(youthPREducationNovContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationNovContents.kpi3 == null)?'grey-2':(youthPREducationNovContents.kpi3 >= '0' && youthPREducationNovContents.kpi3 <= '2.8')?'red':(youthPREducationNovContents.kpi3 > '2.8' && youthPREducationNovContents.kpi3 <= '3.733333333')?'orange':(youthPREducationNovContents.kpi3 > '3.733333333' && youthPREducationNovContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationNovContents.kpi3 >= '4.666666667' && youthPREducationNovContents.kpi3 < '5.6')?'green':(youthPREducationNovContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationNovContents.kpi4 == null)?'grey-2':(youthPREducationNovContents.kpi4 >= '0' && youthPREducationNovContents.kpi4 <= '10.4')?'red':(youthPREducationNovContents.kpi4 > '10.4' && youthPREducationNovContents.kpi4 <= '13.86666667')?'orange':(youthPREducationNovContents.kpi4 > '13.86666667' && youthPREducationNovContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationNovContents.kpi4 >= '17.33333333' && youthPREducationNovContents.kpi4 < '20.8')?'green':(youthPREducationNovContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationNovContents.kpi5 == null)?'grey-2':(youthPREducationNovContents.kpi5 >= '0' && youthPREducationNovContents.kpi5 <= '4.8')?'red':(youthPREducationNovContents.kpi5 > '4.8' && youthPREducationNovContents.kpi5 <= '6.4')?'orange':(youthPREducationNovContents.kpi5 > '6.4' && youthPREducationNovContents.kpi5 < '8')?'yellow-7':(youthPREducationNovContents.kpi5 >= '8' && youthPREducationNovContents.kpi5 < '9.6')?'green':(youthPREducationNovContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi5}}
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
                              :color="(youthPREducationDecContents.kpi1 == null)?'grey-2':(youthPREducationDecContents.kpi1 >= '0' && youthPREducationDecContents.kpi1 <= '5.8')?'red':(youthPREducationDecContents.kpi1 > '5.8' && youthPREducationDecContents.kpi1 <= '7.733333333')?'orange':(youthPREducationDecContents.kpi1 > '7.733333333' && youthPREducationDecContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationDecContents.kpi1 >= '9.666666667' && youthPREducationDecContents.kpi1 < '11.6')?'green':(youthPREducationDecContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationDecContents.kpi2 == null)?'grey-2':(youthPREducationDecContents.kpi2 >= '0' && youthPREducationDecContents.kpi2 <= '18.2')?'red':(youthPREducationDecContents.kpi2 > '18.2' && youthPREducationDecContents.kpi2 <= '24.26666667')?'orange':(youthPREducationDecContents.kpi2 > '24.26666667' && youthPREducationDecContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationDecContents.kpi2 >= '30.33333333' && youthPREducationDecContents.kpi2 < '36.4')?'green':(youthPREducationDecContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationDecContents.kpi3 == null)?'grey-2':(youthPREducationDecContents.kpi3 >= '0' && youthPREducationDecContents.kpi3 <= '2.8')?'red':(youthPREducationDecContents.kpi3 > '2.8' && youthPREducationDecContents.kpi3 <= '3.733333333')?'orange':(youthPREducationDecContents.kpi3 > '3.733333333' && youthPREducationDecContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationDecContents.kpi3 >= '4.666666667' && youthPREducationDecContents.kpi3 < '5.6')?'green':(youthPREducationDecContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationDecContents.kpi4 == null)?'grey-2':(youthPREducationDecContents.kpi4 >= '0' && youthPREducationDecContents.kpi4 <= '10.4')?'red':(youthPREducationDecContents.kpi4 > '10.4' && youthPREducationDecContents.kpi4 <= '13.86666667')?'orange':(youthPREducationDecContents.kpi4 > '13.86666667' && youthPREducationDecContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationDecContents.kpi4 >= '17.33333333' && youthPREducationDecContents.kpi4 < '20.8')?'green':(youthPREducationDecContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationDecContents.kpi5 == null)?'grey-2':(youthPREducationDecContents.kpi5 >= '0' && youthPREducationDecContents.kpi5 <= '4.8')?'red':(youthPREducationDecContents.kpi5 > '4.8' && youthPREducationDecContents.kpi5 <= '6.4')?'orange':(youthPREducationDecContents.kpi5 > '6.4' && youthPREducationDecContents.kpi5 < '8')?'yellow-7':(youthPREducationDecContents.kpi5 >= '8' && youthPREducationDecContents.kpi5 < '9.6')?'green':(youthPREducationDecContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi5}}
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
                              :color="(youthPREducationJanContents.kpi1 == null)?'grey-2':(youthPREducationJanContents.kpi1 >= '0' && youthPREducationJanContents.kpi1 <= '5.8')?'red':(youthPREducationJanContents.kpi1 > '5.8' && youthPREducationJanContents.kpi1 <= '7.733333333')?'orange':(youthPREducationJanContents.kpi1 > '7.733333333' && youthPREducationJanContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationJanContents.kpi1 >= '9.666666667' && youthPREducationJanContents.kpi1 < '11.6')?'green':(youthPREducationJanContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJanContents.kpi2 == null)?'grey-2':(youthPREducationJanContents.kpi2 >= '0' && youthPREducationJanContents.kpi2 <= '18.2')?'red':(youthPREducationJanContents.kpi2 > '18.2' && youthPREducationJanContents.kpi2 <= '24.26666667')?'orange':(youthPREducationJanContents.kpi2 > '24.26666667' && youthPREducationJanContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationJanContents.kpi2 >= '30.33333333' && youthPREducationJanContents.kpi2 < '36.4')?'green':(youthPREducationJanContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJanContents.kpi3 == null)?'grey-2':(youthPREducationJanContents.kpi3 >= '0' && youthPREducationJanContents.kpi3 <= '2.8')?'red':(youthPREducationJanContents.kpi3 > '2.8' && youthPREducationJanContents.kpi3 <= '3.733333333')?'orange':(youthPREducationJanContents.kpi3 > '3.733333333' && youthPREducationJanContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationJanContents.kpi3 >= '4.666666667' && youthPREducationJanContents.kpi3 < '5.6')?'green':(youthPREducationJanContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJanContents.kpi4 == null)?'grey-2':(youthPREducationJanContents.kpi4 >= '0' && youthPREducationJanContents.kpi4 <= '10.4')?'red':(youthPREducationJanContents.kpi4 > '10.4' && youthPREducationJanContents.kpi4 <= '13.86666667')?'orange':(youthPREducationJanContents.kpi4 > '13.86666667' && youthPREducationJanContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationJanContents.kpi4 >= '17.33333333' && youthPREducationJanContents.kpi4 < '20.8')?'green':(youthPREducationJanContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJanContents.kpi5 == null)?'grey-2':(youthPREducationJanContents.kpi5 >= '0' && youthPREducationJanContents.kpi5 <= '4.8')?'red':(youthPREducationJanContents.kpi5 > '4.8' && youthPREducationJanContents.kpi5 <= '6.4')?'orange':(youthPREducationJanContents.kpi5 > '6.4' && youthPREducationJanContents.kpi5 < '8')?'yellow-7':(youthPREducationJanContents.kpi5 >= '8' && youthPREducationJanContents.kpi5 < '9.6')?'green':(youthPREducationJanContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi5}}
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
                              :color="(youthPREducationFebContents.kpi1 == null)?'grey-2':(youthPREducationFebContents.kpi1 >= '0' && youthPREducationFebContents.kpi1 <= '5.8')?'red':(youthPREducationFebContents.kpi1 > '5.8' && youthPREducationFebContents.kpi1 <= '7.733333333')?'orange':(youthPREducationFebContents.kpi1 > '7.733333333' && youthPREducationFebContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationFebContents.kpi1 >= '9.666666667' && youthPREducationFebContents.kpi1 < '11.6')?'green':(youthPREducationFebContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationFebContents.kpi2 == null)?'grey-2':(youthPREducationFebContents.kpi2 >= '0' && youthPREducationFebContents.kpi2 <= '18.2')?'red':(youthPREducationFebContents.kpi2 > '18.2' && youthPREducationFebContents.kpi2 <= '24.26666667')?'orange':(youthPREducationFebContents.kpi2 > '24.26666667' && youthPREducationFebContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationFebContents.kpi2 >= '30.33333333' && youthPREducationFebContents.kpi2 < '36.4')?'green':(youthPREducationFebContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationFebContents.kpi3 == null)?'grey-2':(youthPREducationFebContents.kpi3 >= '0' && youthPREducationFebContents.kpi3 <= '2.8')?'red':(youthPREducationFebContents.kpi3 > '2.8' && youthPREducationFebContents.kpi3 <= '3.733333333')?'orange':(youthPREducationFebContents.kpi3 > '3.733333333' && youthPREducationFebContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationFebContents.kpi3 >= '4.666666667' && youthPREducationFebContents.kpi3 < '5.6')?'green':(youthPREducationFebContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationFebContents.kpi4 == null)?'grey-2':(youthPREducationFebContents.kpi4 >= '0' && youthPREducationFebContents.kpi4 <= '10.4')?'red':(youthPREducationFebContents.kpi4 > '10.4' && youthPREducationFebContents.kpi4 <= '13.86666667')?'orange':(youthPREducationFebContents.kpi4 > '13.86666667' && youthPREducationFebContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationFebContents.kpi4 >= '17.33333333' && youthPREducationFebContents.kpi4 < '20.8')?'green':(youthPREducationFebContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationFebContents.kpi5 == null)?'grey-2':(youthPREducationFebContents.kpi5 >= '0' && youthPREducationFebContents.kpi5 <= '4.8')?'red':(youthPREducationFebContents.kpi5 > '4.8' && youthPREducationFebContents.kpi5 <= '6.4')?'orange':(youthPREducationFebContents.kpi5 > '6.4' && youthPREducationFebContents.kpi5 < '8')?'yellow-7':(youthPREducationFebContents.kpi5 >= '8' && youthPREducationFebContents.kpi5 < '9.6')?'green':(youthPREducationFebContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi5}}
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
                              :color="(youthPREducationMarContents.kpi1 == null)?'grey-2':(youthPREducationMarContents.kpi1 >= '0' && youthPREducationMarContents.kpi1 <= '5.8')?'red':(youthPREducationMarContents.kpi1 > '5.8' && youthPREducationMarContents.kpi1 <= '7.733333333')?'orange':(youthPREducationMarContents.kpi1 > '7.733333333' && youthPREducationMarContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationMarContents.kpi1 >= '9.666666667' && youthPREducationMarContents.kpi1 < '11.6')?'green':(youthPREducationMarContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMarContents.kpi2 == null)?'grey-2':(youthPREducationMarContents.kpi2 >= '0' && youthPREducationMarContents.kpi2 <= '18.2')?'red':(youthPREducationMarContents.kpi2 > '18.2' && youthPREducationMarContents.kpi2 <= '24.26666667')?'orange':(youthPREducationMarContents.kpi2 > '24.26666667' && youthPREducationMarContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationMarContents.kpi2 >= '30.33333333' && youthPREducationMarContents.kpi2 < '36.4')?'green':(youthPREducationMarContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMarContents.kpi3 == null)?'grey-2':(youthPREducationMarContents.kpi3 >= '0' && youthPREducationMarContents.kpi3 <= '2.8')?'red':(youthPREducationMarContents.kpi3 > '2.8' && youthPREducationMarContents.kpi3 <= '3.733333333')?'orange':(youthPREducationMarContents.kpi3 > '3.733333333' && youthPREducationMarContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationMarContents.kpi3 >= '4.666666667' && youthPREducationMarContents.kpi3 < '5.6')?'green':(youthPREducationMarContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMarContents.kpi4 == null)?'grey-2':(youthPREducationMarContents.kpi4 >= '0' && youthPREducationMarContents.kpi4 <= '10.4')?'red':(youthPREducationMarContents.kpi4 > '10.4' && youthPREducationMarContents.kpi4 <= '13.86666667')?'orange':(youthPREducationMarContents.kpi4 > '13.86666667' && youthPREducationMarContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationMarContents.kpi4 >= '17.33333333' && youthPREducationMarContents.kpi4 < '20.8')?'green':(youthPREducationMarContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMarContents.kpi5 == null)?'grey-2':(youthPREducationMarContents.kpi5 >= '0' && youthPREducationMarContents.kpi5 <= '4.8')?'red':(youthPREducationMarContents.kpi5 > '4.8' && youthPREducationMarContents.kpi5 <= '6.4')?'orange':(youthPREducationMarContents.kpi5 > '6.4' && youthPREducationMarContents.kpi5 < '8')?'yellow-7':(youthPREducationMarContents.kpi5 >= '8' && youthPREducationMarContents.kpi5 < '9.6')?'green':(youthPREducationMarContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi5}}
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
                              :color="(youthPREducationAprContents.kpi1 == null)?'grey-2':(youthPREducationAprContents.kpi1 >= '0' && youthPREducationAprContents.kpi1 <= '5.8')?'red':(youthPREducationAprContents.kpi1 > '5.8' && youthPREducationAprContents.kpi1 <= '7.733333333')?'orange':(youthPREducationAprContents.kpi1 > '7.733333333' && youthPREducationAprContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationAprContents.kpi1 >= '9.666666667' && youthPREducationAprContents.kpi1 < '11.6')?'green':(youthPREducationAprContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAprContents.kpi2 == null)?'grey-2':(youthPREducationAprContents.kpi2 >= '0' && youthPREducationAprContents.kpi2 <= '18.2')?'red':(youthPREducationAprContents.kpi2 > '18.2' && youthPREducationAprContents.kpi2 <= '24.26666667')?'orange':(youthPREducationAprContents.kpi2 > '24.26666667' && youthPREducationAprContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationAprContents.kpi2 >= '30.33333333' && youthPREducationAprContents.kpi2 < '36.4')?'green':(youthPREducationAprContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAprContents.kpi3 == null)?'grey-2':(youthPREducationAprContents.kpi3 >= '0' && youthPREducationAprContents.kpi3 <= '2.8')?'red':(youthPREducationAprContents.kpi3 > '2.8' && youthPREducationAprContents.kpi3 <= '3.733333333')?'orange':(youthPREducationAprContents.kpi3 > '3.733333333' && youthPREducationAprContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationAprContents.kpi3 >= '4.666666667' && youthPREducationAprContents.kpi3 < '5.6')?'green':(youthPREducationAprContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAprContents.kpi4 == null)?'grey-2':(youthPREducationAprContents.kpi4 >= '0' && youthPREducationAprContents.kpi4 <= '10.4')?'red':(youthPREducationAprContents.kpi4 > '10.4' && youthPREducationAprContents.kpi4 <= '13.86666667')?'orange':(youthPREducationAprContents.kpi4 > '13.86666667' && youthPREducationAprContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationAprContents.kpi4 >= '17.33333333' && youthPREducationAprContents.kpi4 < '20.8')?'green':(youthPREducationAprContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAprContents.kpi5 == null)?'grey-2':(youthPREducationAprContents.kpi5 >= '0' && youthPREducationAprContents.kpi5 <= '4.8')?'red':(youthPREducationAprContents.kpi5 > '4.8' && youthPREducationAprContents.kpi5 <= '6.4')?'orange':(youthPREducationAprContents.kpi5 > '6.4' && youthPREducationAprContents.kpi5 < '8')?'yellow-7':(youthPREducationAprContents.kpi5 >= '8' && youthPREducationAprContents.kpi5 < '9.6')?'green':(youthPREducationAprContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi5}}
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
                              :color="(youthPREducationMayContents.kpi1 == null)?'grey-2':(youthPREducationMayContents.kpi1 >= '0' && youthPREducationMayContents.kpi1 <= '5.8')?'red':(youthPREducationMayContents.kpi1 > '5.8' && youthPREducationMayContents.kpi1 <= '7.733333333')?'orange':(youthPREducationMayContents.kpi1 > '7.733333333' && youthPREducationMayContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationMayContents.kpi1 >= '9.666666667' && youthPREducationMayContents.kpi1 < '11.6')?'green':(youthPREducationMayContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMayContents.kpi2 == null)?'grey-2':(youthPREducationMayContents.kpi2 >= '0' && youthPREducationMayContents.kpi2 <= '18.2')?'red':(youthPREducationMayContents.kpi2 > '18.2' && youthPREducationMayContents.kpi2 <= '24.26666667')?'orange':(youthPREducationMayContents.kpi2 > '24.26666667' && youthPREducationMayContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationMayContents.kpi2 >= '30.33333333' && youthPREducationMayContents.kpi2 < '36.4')?'green':(youthPREducationMayContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMayContents.kpi3 == null)?'grey-2':(youthPREducationMayContents.kpi3 >= '0' && youthPREducationMayContents.kpi3 <= '2.8')?'red':(youthPREducationMayContents.kpi3 > '2.8' && youthPREducationMayContents.kpi3 <= '3.733333333')?'orange':(youthPREducationMayContents.kpi3 > '3.733333333' && youthPREducationMayContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationMayContents.kpi3 >= '4.666666667' && youthPREducationMayContents.kpi3 < '5.6')?'green':(youthPREducationMayContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMayContents.kpi4 == null)?'grey-2':(youthPREducationMayContents.kpi4 >= '0' && youthPREducationMayContents.kpi4 <= '10.4')?'red':(youthPREducationMayContents.kpi4 > '10.4' && youthPREducationMayContents.kpi4 <= '13.86666667')?'orange':(youthPREducationMayContents.kpi4 > '13.86666667' && youthPREducationMayContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationMayContents.kpi4 >= '17.33333333' && youthPREducationMayContents.kpi4 < '20.8')?'green':(youthPREducationMayContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMayContents.kpi5 == null)?'grey-2':(youthPREducationMayContents.kpi5 >= '0' && youthPREducationMayContents.kpi5 <= '4.8')?'red':(youthPREducationMayContents.kpi5 > '4.8' && youthPREducationMayContents.kpi5 <= '6.4')?'orange':(youthPREducationMayContents.kpi5 > '6.4' && youthPREducationMayContents.kpi5 < '8')?'yellow-7':(youthPREducationMayContents.kpi5 >= '8' && youthPREducationMayContents.kpi5 < '9.6')?'green':(youthPREducationMayContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi5}}
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
                              :color="(youthPREducationJunContents.kpi1 == null)?'grey-2':(youthPREducationJunContents.kpi1 >= '0' && youthPREducationJunContents.kpi1 <= '5.8')?'red':(youthPREducationJunContents.kpi1 > '5.8' && youthPREducationJunContents.kpi1 <= '7.733333333')?'orange':(youthPREducationJunContents.kpi1 > '7.733333333' && youthPREducationJunContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationJunContents.kpi1 >= '9.666666667' && youthPREducationJunContents.kpi1 < '11.6')?'green':(youthPREducationJunContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJunContents.kpi2 == null)?'grey-2':(youthPREducationJunContents.kpi2 >= '0' && youthPREducationJunContents.kpi2 <= '18.2')?'red':(youthPREducationJunContents.kpi2 > '18.2' && youthPREducationJunContents.kpi2 <= '24.26666667')?'orange':(youthPREducationJunContents.kpi2 > '24.26666667' && youthPREducationJunContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationJunContents.kpi2 >= '30.33333333' && youthPREducationJunContents.kpi2 < '36.4')?'green':(youthPREducationJunContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJunContents.kpi3 == null)?'grey-2':(youthPREducationJunContents.kpi3 >= '0' && youthPREducationJunContents.kpi3 <= '2.8')?'red':(youthPREducationJunContents.kpi3 > '2.8' && youthPREducationJunContents.kpi3 <= '3.733333333')?'orange':(youthPREducationJunContents.kpi3 > '3.733333333' && youthPREducationJunContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationJunContents.kpi3 >= '4.666666667' && youthPREducationJunContents.kpi3 < '5.6')?'green':(youthPREducationJunContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJunContents.kpi4 == null)?'grey-2':(youthPREducationJunContents.kpi4 >= '0' && youthPREducationJunContents.kpi4 <= '10.4')?'red':(youthPREducationJunContents.kpi4 > '10.4' && youthPREducationJunContents.kpi4 <= '13.86666667')?'orange':(youthPREducationJunContents.kpi4 > '13.86666667' && youthPREducationJunContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationJunContents.kpi4 >= '17.33333333' && youthPREducationJunContents.kpi4 < '20.8')?'green':(youthPREducationJunContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJunContents.kpi5 == null)?'grey-2':(youthPREducationJunContents.kpi5 >= '0' && youthPREducationJunContents.kpi5 <= '4.8')?'red':(youthPREducationJunContents.kpi5 > '4.8' && youthPREducationJunContents.kpi5 <= '6.4')?'orange':(youthPREducationJunContents.kpi5 > '6.4' && youthPREducationJunContents.kpi5 < '8')?'yellow-7':(youthPREducationJunContents.kpi5 >= '8' && youthPREducationJunContents.kpi5 < '9.6')?'green':(youthPREducationJunContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi5}}
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
                              :color="(youthPREducationJulContents.kpi1 == null)?'grey-2':(youthPREducationJulContents.kpi1 >= '0' && youthPREducationJulContents.kpi1 <= '5.8')?'red':(youthPREducationJulContents.kpi1 > '5.8' && youthPREducationJulContents.kpi1 <= '7.733333333')?'orange':(youthPREducationJulContents.kpi1 > '7.733333333' && youthPREducationJulContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationJulContents.kpi1 >= '9.666666667' && youthPREducationJulContents.kpi1 < '11.6')?'green':(youthPREducationJulContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJulContents.kpi2 == null)?'grey-2':(youthPREducationJulContents.kpi2 >= '0' && youthPREducationJulContents.kpi2 <= '18.2')?'red':(youthPREducationJulContents.kpi2 > '18.2' && youthPREducationJulContents.kpi2 <= '24.26666667')?'orange':(youthPREducationJulContents.kpi2 > '24.26666667' && youthPREducationJulContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationJulContents.kpi2 >= '30.33333333' && youthPREducationJulContents.kpi2 < '36.4')?'green':(youthPREducationJulContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJulContents.kpi3 == null)?'grey-2':(youthPREducationJulContents.kpi3 >= '0' && youthPREducationJulContents.kpi3 <= '2.8')?'red':(youthPREducationJulContents.kpi3 > '2.8' && youthPREducationJulContents.kpi3 <= '3.733333333')?'orange':(youthPREducationJulContents.kpi3 > '3.733333333' && youthPREducationJulContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationJulContents.kpi3 >= '4.666666667' && youthPREducationJulContents.kpi3 < '5.6')?'green':(youthPREducationJulContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJulContents.kpi4 == null)?'grey-2':(youthPREducationJulContents.kpi4 >= '0' && youthPREducationJulContents.kpi4 <= '10.4')?'red':(youthPREducationJulContents.kpi4 > '10.4' && youthPREducationJulContents.kpi4 <= '13.86666667')?'orange':(youthPREducationJulContents.kpi4 > '13.86666667' && youthPREducationJulContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationJulContents.kpi4 >= '17.33333333' && youthPREducationJulContents.kpi4 < '20.8')?'green':(youthPREducationJulContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJulContents.kpi5 == null)?'grey-2':(youthPREducationJulContents.kpi5 >= '0' && youthPREducationJulContents.kpi5 <= '4.8')?'red':(youthPREducationJulContents.kpi5 > '4.8' && youthPREducationJulContents.kpi5 <= '6.4')?'orange':(youthPREducationJulContents.kpi5 > '6.4' && youthPREducationJulContents.kpi5 < '8')?'yellow-7':(youthPREducationJulContents.kpi5 >= '8' && youthPREducationJulContents.kpi5 < '9.6')?'green':(youthPREducationJulContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi5}}
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
                              :color="(youthPREducationAugContents.kpi1 == null)?'grey-2':(youthPREducationAugContents.kpi1 >= '0' && youthPREducationAugContents.kpi1 <= '5.8')?'red':(youthPREducationAugContents.kpi1 > '5.8' && youthPREducationAugContents.kpi1 <= '7.733333333')?'orange':(youthPREducationAugContents.kpi1 > '7.733333333' && youthPREducationAugContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationAugContents.kpi1 >= '9.666666667' && youthPREducationAugContents.kpi1 < '11.6')?'green':(youthPREducationAugContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAugContents.kpi2 == null)?'grey-2':(youthPREducationAugContents.kpi2 >= '0' && youthPREducationAugContents.kpi2 <= '18.2')?'red':(youthPREducationAugContents.kpi2 > '18.2' && youthPREducationAugContents.kpi2 <= '24.26666667')?'orange':(youthPREducationAugContents.kpi2 > '24.26666667' && youthPREducationAugContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationAugContents.kpi2 >= '30.33333333' && youthPREducationAugContents.kpi2 < '36.4')?'green':(youthPREducationAugContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAugContents.kpi3 == null)?'grey-2':(youthPREducationAugContents.kpi3 >= '0' && youthPREducationAugContents.kpi3 <= '2.8')?'red':(youthPREducationAugContents.kpi3 > '2.8' && youthPREducationAugContents.kpi3 <= '3.733333333')?'orange':(youthPREducationAugContents.kpi3 > '3.733333333' && youthPREducationAugContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationAugContents.kpi3 >= '4.666666667' && youthPREducationAugContents.kpi3 < '5.6')?'green':(youthPREducationAugContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAugContents.kpi4 == null)?'grey-2':(youthPREducationAugContents.kpi4 >= '0' && youthPREducationAugContents.kpi4 <= '10.4')?'red':(youthPREducationAugContents.kpi4 > '10.4' && youthPREducationAugContents.kpi4 <= '13.86666667')?'orange':(youthPREducationAugContents.kpi4 > '13.86666667' && youthPREducationAugContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationAugContents.kpi4 >= '17.33333333' && youthPREducationAugContents.kpi4 < '20.8')?'green':(youthPREducationAugContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAugContents.kpi5 == null)?'grey-2':(youthPREducationAugContents.kpi5 >= '0' && youthPREducationAugContents.kpi5 <= '4.8')?'red':(youthPREducationAugContents.kpi5 > '4.8' && youthPREducationAugContents.kpi5 <= '6.4')?'orange':(youthPREducationAugContents.kpi5 > '6.4' && youthPREducationAugContents.kpi5 < '8')?'yellow-7':(youthPREducationAugContents.kpi5 >= '8' && youthPREducationAugContents.kpi5 < '9.6')?'green':(youthPREducationAugContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi5}}
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
                              :color="(youthPREducationSepContents.kpi1 == null)?'grey-2':(youthPREducationSepContents.kpi1 >= '0' && youthPREducationSepContents.kpi1 <= '5.8')?'red':(youthPREducationSepContents.kpi1 > '5.8' && youthPREducationSepContents.kpi1 <= '7.733333333')?'orange':(youthPREducationSepContents.kpi1 > '7.733333333' && youthPREducationSepContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationSepContents.kpi1 >= '9.666666667' && youthPREducationSepContents.kpi1 < '11.6')?'green':(youthPREducationSepContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationSepContents.kpi2 == null)?'grey-2':(youthPREducationSepContents.kpi2 >= '0' && youthPREducationSepContents.kpi2 <= '18.2')?'red':(youthPREducationSepContents.kpi2 > '18.2' && youthPREducationSepContents.kpi2 <= '24.26666667')?'orange':(youthPREducationSepContents.kpi2 > '24.26666667' && youthPREducationSepContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationSepContents.kpi2 >= '30.33333333' && youthPREducationSepContents.kpi2 < '36.4')?'green':(youthPREducationSepContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationSepContents.kpi3 == null)?'grey-2':(youthPREducationSepContents.kpi3 >= '0' && youthPREducationSepContents.kpi3 <= '2.8')?'red':(youthPREducationSepContents.kpi3 > '2.8' && youthPREducationSepContents.kpi3 <= '3.733333333')?'orange':(youthPREducationSepContents.kpi3 > '3.733333333' && youthPREducationSepContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationSepContents.kpi3 >= '4.666666667' && youthPREducationSepContents.kpi3 < '5.6')?'green':(youthPREducationSepContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationSepContents.kpi4 == null)?'grey-2':(youthPREducationSepContents.kpi4 >= '0' && youthPREducationSepContents.kpi4 <= '10.4')?'red':(youthPREducationSepContents.kpi4 > '10.4' && youthPREducationSepContents.kpi4 <= '13.86666667')?'orange':(youthPREducationSepContents.kpi4 > '13.86666667' && youthPREducationSepContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationSepContents.kpi4 >= '17.33333333' && youthPREducationSepContents.kpi4 < '20.8')?'green':(youthPREducationSepContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationSepContents.kpi5 == null)?'grey-2':(youthPREducationSepContents.kpi5 >= '0' && youthPREducationSepContents.kpi5 <= '4.8')?'red':(youthPREducationSepContents.kpi5 > '4.8' && youthPREducationSepContents.kpi5 <= '6.4')?'orange':(youthPREducationSepContents.kpi5 > '6.4' && youthPREducationSepContents.kpi5 < '8')?'yellow-7':(youthPREducationSepContents.kpi5 >= '8' && youthPREducationSepContents.kpi5 < '9.6')?'green':(youthPREducationSepContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi5}}
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
                              :color="(youthPREducationOctContents.kpi1 == null)?'grey-2':(youthPREducationOctContents.kpi1 >= '0' && youthPREducationOctContents.kpi1 <= '5.8')?'red':(youthPREducationOctContents.kpi1 > '5.8' && youthPREducationOctContents.kpi1 <= '7.733333333')?'orange':(youthPREducationOctContents.kpi1 > '7.733333333' && youthPREducationOctContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationOctContents.kpi1 >= '9.666666667' && youthPREducationOctContents.kpi1 < '11.6')?'green':(youthPREducationOctContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationOctContents.kpi2 == null)?'grey-2':(youthPREducationOctContents.kpi2 >= '0' && youthPREducationOctContents.kpi2 <= '18.2')?'red':(youthPREducationOctContents.kpi2 > '18.2' && youthPREducationOctContents.kpi2 <= '24.26666667')?'orange':(youthPREducationOctContents.kpi2 > '24.26666667' && youthPREducationOctContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationOctContents.kpi2 >= '30.33333333' && youthPREducationOctContents.kpi2 < '36.4')?'green':(youthPREducationOctContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationOctContents.kpi3 == null)?'grey-2':(youthPREducationOctContents.kpi3 >= '0' && youthPREducationOctContents.kpi3 <= '2.8')?'red':(youthPREducationOctContents.kpi3 > '2.8' && youthPREducationOctContents.kpi3 <= '3.733333333')?'orange':(youthPREducationOctContents.kpi3 > '3.733333333' && youthPREducationOctContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationOctContents.kpi3 >= '4.666666667' && youthPREducationOctContents.kpi3 < '5.6')?'green':(youthPREducationOctContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationOctContents.kpi4 == null)?'grey-2':(youthPREducationOctContents.kpi4 >= '0' && youthPREducationOctContents.kpi4 <= '10.4')?'red':(youthPREducationOctContents.kpi4 > '10.4' && youthPREducationOctContents.kpi4 <= '13.86666667')?'orange':(youthPREducationOctContents.kpi4 > '13.86666667' && youthPREducationOctContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationOctContents.kpi4 >= '17.33333333' && youthPREducationOctContents.kpi4 < '20.8')?'green':(youthPREducationOctContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationOctContents.kpi5 == null)?'grey-2':(youthPREducationOctContents.kpi5 >= '0' && youthPREducationOctContents.kpi5 <= '4.8')?'red':(youthPREducationOctContents.kpi5 > '4.8' && youthPREducationOctContents.kpi5 <= '6.4')?'orange':(youthPREducationOctContents.kpi5 > '6.4' && youthPREducationOctContents.kpi5 < '8')?'yellow-7':(youthPREducationOctContents.kpi5 >= '8' && youthPREducationOctContents.kpi5 < '9.6')?'green':(youthPREducationOctContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi5}}
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
                              :color="(youthPREducationNovContents.kpi1 == null)?'grey-2':(youthPREducationNovContents.kpi1 >= '0' && youthPREducationNovContents.kpi1 <= '5.8')?'red':(youthPREducationNovContents.kpi1 > '5.8' && youthPREducationNovContents.kpi1 <= '7.733333333')?'orange':(youthPREducationNovContents.kpi1 > '7.733333333' && youthPREducationNovContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationNovContents.kpi1 >= '9.666666667' && youthPREducationNovContents.kpi1 < '11.6')?'green':(youthPREducationNovContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationNovContents.kpi2 == null)?'grey-2':(youthPREducationNovContents.kpi2 >= '0' && youthPREducationNovContents.kpi2 <= '18.2')?'red':(youthPREducationNovContents.kpi2 > '18.2' && youthPREducationNovContents.kpi2 <= '24.26666667')?'orange':(youthPREducationNovContents.kpi2 > '24.26666667' && youthPREducationNovContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationNovContents.kpi2 >= '30.33333333' && youthPREducationNovContents.kpi2 < '36.4')?'green':(youthPREducationNovContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationNovContents.kpi3 == null)?'grey-2':(youthPREducationNovContents.kpi3 >= '0' && youthPREducationNovContents.kpi3 <= '2.8')?'red':(youthPREducationNovContents.kpi3 > '2.8' && youthPREducationNovContents.kpi3 <= '3.733333333')?'orange':(youthPREducationNovContents.kpi3 > '3.733333333' && youthPREducationNovContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationNovContents.kpi3 >= '4.666666667' && youthPREducationNovContents.kpi3 < '5.6')?'green':(youthPREducationNovContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationNovContents.kpi4 == null)?'grey-2':(youthPREducationNovContents.kpi4 >= '0' && youthPREducationNovContents.kpi4 <= '10.4')?'red':(youthPREducationNovContents.kpi4 > '10.4' && youthPREducationNovContents.kpi4 <= '13.86666667')?'orange':(youthPREducationNovContents.kpi4 > '13.86666667' && youthPREducationNovContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationNovContents.kpi4 >= '17.33333333' && youthPREducationNovContents.kpi4 < '20.8')?'green':(youthPREducationNovContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationNovContents.kpi5 == null)?'grey-2':(youthPREducationNovContents.kpi5 >= '0' && youthPREducationNovContents.kpi5 <= '4.8')?'red':(youthPREducationNovContents.kpi5 > '4.8' && youthPREducationNovContents.kpi5 <= '6.4')?'orange':(youthPREducationNovContents.kpi5 > '6.4' && youthPREducationNovContents.kpi5 < '8')?'yellow-7':(youthPREducationNovContents.kpi5 >= '8' && youthPREducationNovContents.kpi5 < '9.6')?'green':(youthPREducationNovContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi5}}
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
                              :color="(youthPREducationDecContents.kpi1 == null)?'grey-2':(youthPREducationDecContents.kpi1 >= '0' && youthPREducationDecContents.kpi1 <= '5.8')?'red':(youthPREducationDecContents.kpi1 > '5.8' && youthPREducationDecContents.kpi1 <= '7.733333333')?'orange':(youthPREducationDecContents.kpi1 > '7.733333333' && youthPREducationDecContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationDecContents.kpi1 >= '9.666666667' && youthPREducationDecContents.kpi1 < '11.6')?'green':(youthPREducationDecContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationDecContents.kpi2 == null)?'grey-2':(youthPREducationDecContents.kpi2 >= '0' && youthPREducationDecContents.kpi2 <= '18.2')?'red':(youthPREducationDecContents.kpi2 > '18.2' && youthPREducationDecContents.kpi2 <= '24.26666667')?'orange':(youthPREducationDecContents.kpi2 > '24.26666667' && youthPREducationDecContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationDecContents.kpi2 >= '30.33333333' && youthPREducationDecContents.kpi2 < '36.4')?'green':(youthPREducationDecContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationDecContents.kpi3 == null)?'grey-2':(youthPREducationDecContents.kpi3 >= '0' && youthPREducationDecContents.kpi3 <= '2.8')?'red':(youthPREducationDecContents.kpi3 > '2.8' && youthPREducationDecContents.kpi3 <= '3.733333333')?'orange':(youthPREducationDecContents.kpi3 > '3.733333333' && youthPREducationDecContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationDecContents.kpi3 >= '4.666666667' && youthPREducationDecContents.kpi3 < '5.6')?'green':(youthPREducationDecContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationDecContents.kpi4 == null)?'grey-2':(youthPREducationDecContents.kpi4 >= '0' && youthPREducationDecContents.kpi4 <= '10.4')?'red':(youthPREducationDecContents.kpi4 > '10.4' && youthPREducationDecContents.kpi4 <= '13.86666667')?'orange':(youthPREducationDecContents.kpi4 > '13.86666667' && youthPREducationDecContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationDecContents.kpi4 >= '17.33333333' && youthPREducationDecContents.kpi4 < '20.8')?'green':(youthPREducationDecContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationDecContents.kpi5 == null)?'grey-2':(youthPREducationDecContents.kpi5 >= '0' && youthPREducationDecContents.kpi5 <= '4.8')?'red':(youthPREducationDecContents.kpi5 > '4.8' && youthPREducationDecContents.kpi5 <= '6.4')?'orange':(youthPREducationDecContents.kpi5 > '6.4' && youthPREducationDecContents.kpi5 < '8')?'yellow-7':(youthPREducationDecContents.kpi5 >= '8' && youthPREducationDecContents.kpi5 < '9.6')?'green':(youthPREducationDecContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi5}}
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
                              :color="(youthPREducationJanContents.kpi1 == null)?'grey-2':(youthPREducationJanContents.kpi1 >= '0' && youthPREducationJanContents.kpi1 <= '5.8')?'red':(youthPREducationJanContents.kpi1 > '5.8' && youthPREducationJanContents.kpi1 <= '7.733333333')?'orange':(youthPREducationJanContents.kpi1 > '7.733333333' && youthPREducationJanContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationJanContents.kpi1 >= '9.666666667' && youthPREducationJanContents.kpi1 < '11.6')?'green':(youthPREducationJanContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJanContents.kpi2 == null)?'grey-2':(youthPREducationJanContents.kpi2 >= '0' && youthPREducationJanContents.kpi2 <= '18.2')?'red':(youthPREducationJanContents.kpi2 > '18.2' && youthPREducationJanContents.kpi2 <= '24.26666667')?'orange':(youthPREducationJanContents.kpi2 > '24.26666667' && youthPREducationJanContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationJanContents.kpi2 >= '30.33333333' && youthPREducationJanContents.kpi2 < '36.4')?'green':(youthPREducationJanContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJanContents.kpi3 == null)?'grey-2':(youthPREducationJanContents.kpi3 >= '0' && youthPREducationJanContents.kpi3 <= '2.8')?'red':(youthPREducationJanContents.kpi3 > '2.8' && youthPREducationJanContents.kpi3 <= '3.733333333')?'orange':(youthPREducationJanContents.kpi3 > '3.733333333' && youthPREducationJanContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationJanContents.kpi3 >= '4.666666667' && youthPREducationJanContents.kpi3 < '5.6')?'green':(youthPREducationJanContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJanContents.kpi4 == null)?'grey-2':(youthPREducationJanContents.kpi4 >= '0' && youthPREducationJanContents.kpi4 <= '10.4')?'red':(youthPREducationJanContents.kpi4 > '10.4' && youthPREducationJanContents.kpi4 <= '13.86666667')?'orange':(youthPREducationJanContents.kpi4 > '13.86666667' && youthPREducationJanContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationJanContents.kpi4 >= '17.33333333' && youthPREducationJanContents.kpi4 < '20.8')?'green':(youthPREducationJanContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJanContents.kpi5 == null)?'grey-2':(youthPREducationJanContents.kpi5 >= '0' && youthPREducationJanContents.kpi5 <= '4.8')?'red':(youthPREducationJanContents.kpi5 > '4.8' && youthPREducationJanContents.kpi5 <= '6.4')?'orange':(youthPREducationJanContents.kpi5 > '6.4' && youthPREducationJanContents.kpi5 < '8')?'yellow-7':(youthPREducationJanContents.kpi5 >= '8' && youthPREducationJanContents.kpi5 < '9.6')?'green':(youthPREducationJanContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi5}}
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
                              :color="(youthPREducationFebContents.kpi1 == null)?'grey-2':(youthPREducationFebContents.kpi1 >= '0' && youthPREducationFebContents.kpi1 <= '5.8')?'red':(youthPREducationFebContents.kpi1 > '5.8' && youthPREducationFebContents.kpi1 <= '7.733333333')?'orange':(youthPREducationFebContents.kpi1 > '7.733333333' && youthPREducationFebContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationFebContents.kpi1 >= '9.666666667' && youthPREducationFebContents.kpi1 < '11.6')?'green':(youthPREducationFebContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationFebContents.kpi2 == null)?'grey-2':(youthPREducationFebContents.kpi2 >= '0' && youthPREducationFebContents.kpi2 <= '18.2')?'red':(youthPREducationFebContents.kpi2 > '18.2' && youthPREducationFebContents.kpi2 <= '24.26666667')?'orange':(youthPREducationFebContents.kpi2 > '24.26666667' && youthPREducationFebContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationFebContents.kpi2 >= '30.33333333' && youthPREducationFebContents.kpi2 < '36.4')?'green':(youthPREducationFebContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationFebContents.kpi3 == null)?'grey-2':(youthPREducationFebContents.kpi3 >= '0' && youthPREducationFebContents.kpi3 <= '2.8')?'red':(youthPREducationFebContents.kpi3 > '2.8' && youthPREducationFebContents.kpi3 <= '3.733333333')?'orange':(youthPREducationFebContents.kpi3 > '3.733333333' && youthPREducationFebContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationFebContents.kpi3 >= '4.666666667' && youthPREducationFebContents.kpi3 < '5.6')?'green':(youthPREducationFebContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationFebContents.kpi4 == null)?'grey-2':(youthPREducationFebContents.kpi4 >= '0' && youthPREducationFebContents.kpi4 <= '10.4')?'red':(youthPREducationFebContents.kpi4 > '10.4' && youthPREducationFebContents.kpi4 <= '13.86666667')?'orange':(youthPREducationFebContents.kpi4 > '13.86666667' && youthPREducationFebContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationFebContents.kpi4 >= '17.33333333' && youthPREducationFebContents.kpi4 < '20.8')?'green':(youthPREducationFebContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationFebContents.kpi5 == null)?'grey-2':(youthPREducationFebContents.kpi5 >= '0' && youthPREducationFebContents.kpi5 <= '4.8')?'red':(youthPREducationFebContents.kpi5 > '4.8' && youthPREducationFebContents.kpi5 <= '6.4')?'orange':(youthPREducationFebContents.kpi5 > '6.4' && youthPREducationFebContents.kpi5 < '8')?'yellow-7':(youthPREducationFebContents.kpi5 >= '8' && youthPREducationFebContents.kpi5 < '9.6')?'green':(youthPREducationFebContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi5}}
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
                              :color="(youthPREducationMarContents.kpi1 == null)?'grey-2':(youthPREducationMarContents.kpi1 >= '0' && youthPREducationMarContents.kpi1 <= '5.8')?'red':(youthPREducationMarContents.kpi1 > '5.8' && youthPREducationMarContents.kpi1 <= '7.733333333')?'orange':(youthPREducationMarContents.kpi1 > '7.733333333' && youthPREducationMarContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationMarContents.kpi1 >= '9.666666667' && youthPREducationMarContents.kpi1 < '11.6')?'green':(youthPREducationMarContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMarContents.kpi2 == null)?'grey-2':(youthPREducationMarContents.kpi2 >= '0' && youthPREducationMarContents.kpi2 <= '18.2')?'red':(youthPREducationMarContents.kpi2 > '18.2' && youthPREducationMarContents.kpi2 <= '24.26666667')?'orange':(youthPREducationMarContents.kpi2 > '24.26666667' && youthPREducationMarContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationMarContents.kpi2 >= '30.33333333' && youthPREducationMarContents.kpi2 < '36.4')?'green':(youthPREducationMarContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMarContents.kpi3 == null)?'grey-2':(youthPREducationMarContents.kpi3 >= '0' && youthPREducationMarContents.kpi3 <= '2.8')?'red':(youthPREducationMarContents.kpi3 > '2.8' && youthPREducationMarContents.kpi3 <= '3.733333333')?'orange':(youthPREducationMarContents.kpi3 > '3.733333333' && youthPREducationMarContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationMarContents.kpi3 >= '4.666666667' && youthPREducationMarContents.kpi3 < '5.6')?'green':(youthPREducationMarContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMarContents.kpi4 == null)?'grey-2':(youthPREducationMarContents.kpi4 >= '0' && youthPREducationMarContents.kpi4 <= '10.4')?'red':(youthPREducationMarContents.kpi4 > '10.4' && youthPREducationMarContents.kpi4 <= '13.86666667')?'orange':(youthPREducationMarContents.kpi4 > '13.86666667' && youthPREducationMarContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationMarContents.kpi4 >= '17.33333333' && youthPREducationMarContents.kpi4 < '20.8')?'green':(youthPREducationMarContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMarContents.kpi5 == null)?'grey-2':(youthPREducationMarContents.kpi5 >= '0' && youthPREducationMarContents.kpi5 <= '4.8')?'red':(youthPREducationMarContents.kpi5 > '4.8' && youthPREducationMarContents.kpi5 <= '6.4')?'orange':(youthPREducationMarContents.kpi5 > '6.4' && youthPREducationMarContents.kpi5 < '8')?'yellow-7':(youthPREducationMarContents.kpi5 >= '8' && youthPREducationMarContents.kpi5 < '9.6')?'green':(youthPREducationMarContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi5}}
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
                              :color="(youthPREducationAprContents.kpi1 == null)?'grey-2':(youthPREducationAprContents.kpi1 >= '0' && youthPREducationAprContents.kpi1 <= '5.8')?'red':(youthPREducationAprContents.kpi1 > '5.8' && youthPREducationAprContents.kpi1 <= '7.733333333')?'orange':(youthPREducationAprContents.kpi1 > '7.733333333' && youthPREducationAprContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationAprContents.kpi1 >= '9.666666667' && youthPREducationAprContents.kpi1 < '11.6')?'green':(youthPREducationAprContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAprContents.kpi2 == null)?'grey-2':(youthPREducationAprContents.kpi2 >= '0' && youthPREducationAprContents.kpi2 <= '18.2')?'red':(youthPREducationAprContents.kpi2 > '18.2' && youthPREducationAprContents.kpi2 <= '24.26666667')?'orange':(youthPREducationAprContents.kpi2 > '24.26666667' && youthPREducationAprContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationAprContents.kpi2 >= '30.33333333' && youthPREducationAprContents.kpi2 < '36.4')?'green':(youthPREducationAprContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAprContents.kpi3 == null)?'grey-2':(youthPREducationAprContents.kpi3 >= '0' && youthPREducationAprContents.kpi3 <= '2.8')?'red':(youthPREducationAprContents.kpi3 > '2.8' && youthPREducationAprContents.kpi3 <= '3.733333333')?'orange':(youthPREducationAprContents.kpi3 > '3.733333333' && youthPREducationAprContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationAprContents.kpi3 >= '4.666666667' && youthPREducationAprContents.kpi3 < '5.6')?'green':(youthPREducationAprContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAprContents.kpi4 == null)?'grey-2':(youthPREducationAprContents.kpi4 >= '0' && youthPREducationAprContents.kpi4 <= '10.4')?'red':(youthPREducationAprContents.kpi4 > '10.4' && youthPREducationAprContents.kpi4 <= '13.86666667')?'orange':(youthPREducationAprContents.kpi4 > '13.86666667' && youthPREducationAprContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationAprContents.kpi4 >= '17.33333333' && youthPREducationAprContents.kpi4 < '20.8')?'green':(youthPREducationAprContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAprContents.kpi5 == null)?'grey-2':(youthPREducationAprContents.kpi5 >= '0' && youthPREducationAprContents.kpi5 <= '4.8')?'red':(youthPREducationAprContents.kpi5 > '4.8' && youthPREducationAprContents.kpi5 <= '6.4')?'orange':(youthPREducationAprContents.kpi5 > '6.4' && youthPREducationAprContents.kpi5 < '8')?'yellow-7':(youthPREducationAprContents.kpi5 >= '8' && youthPREducationAprContents.kpi5 < '9.6')?'green':(youthPREducationAprContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi5}}
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
                              :color="(youthPREducationMayContents.kpi1 == null)?'grey-2':(youthPREducationMayContents.kpi1 >= '0' && youthPREducationMayContents.kpi1 <= '5.8')?'red':(youthPREducationMayContents.kpi1 > '5.8' && youthPREducationMayContents.kpi1 <= '7.733333333')?'orange':(youthPREducationMayContents.kpi1 > '7.733333333' && youthPREducationMayContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationMayContents.kpi1 >= '9.666666667' && youthPREducationMayContents.kpi1 < '11.6')?'green':(youthPREducationMayContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMayContents.kpi2 == null)?'grey-2':(youthPREducationMayContents.kpi2 >= '0' && youthPREducationMayContents.kpi2 <= '18.2')?'red':(youthPREducationMayContents.kpi2 > '18.2' && youthPREducationMayContents.kpi2 <= '24.26666667')?'orange':(youthPREducationMayContents.kpi2 > '24.26666667' && youthPREducationMayContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationMayContents.kpi2 >= '30.33333333' && youthPREducationMayContents.kpi2 < '36.4')?'green':(youthPREducationMayContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMayContents.kpi3 == null)?'grey-2':(youthPREducationMayContents.kpi3 >= '0' && youthPREducationMayContents.kpi3 <= '2.8')?'red':(youthPREducationMayContents.kpi3 > '2.8' && youthPREducationMayContents.kpi3 <= '3.733333333')?'orange':(youthPREducationMayContents.kpi3 > '3.733333333' && youthPREducationMayContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationMayContents.kpi3 >= '4.666666667' && youthPREducationMayContents.kpi3 < '5.6')?'green':(youthPREducationMayContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMayContents.kpi4 == null)?'grey-2':(youthPREducationMayContents.kpi4 >= '0' && youthPREducationMayContents.kpi4 <= '10.4')?'red':(youthPREducationMayContents.kpi4 > '10.4' && youthPREducationMayContents.kpi4 <= '13.86666667')?'orange':(youthPREducationMayContents.kpi4 > '13.86666667' && youthPREducationMayContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationMayContents.kpi4 >= '17.33333333' && youthPREducationMayContents.kpi4 < '20.8')?'green':(youthPREducationMayContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMayContents.kpi5 == null)?'grey-2':(youthPREducationMayContents.kpi5 >= '0' && youthPREducationMayContents.kpi5 <= '4.8')?'red':(youthPREducationMayContents.kpi5 > '4.8' && youthPREducationMayContents.kpi5 <= '6.4')?'orange':(youthPREducationMayContents.kpi5 > '6.4' && youthPREducationMayContents.kpi5 < '8')?'yellow-7':(youthPREducationMayContents.kpi5 >= '8' && youthPREducationMayContents.kpi5 < '9.6')?'green':(youthPREducationMayContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi5}}
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
                              :color="(youthPREducationJunContents.kpi1 == null)?'grey-2':(youthPREducationJunContents.kpi1 >= '0' && youthPREducationJunContents.kpi1 <= '5.8')?'red':(youthPREducationJunContents.kpi1 > '5.8' && youthPREducationJunContents.kpi1 <= '7.733333333')?'orange':(youthPREducationJunContents.kpi1 > '7.733333333' && youthPREducationJunContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationJunContents.kpi1 >= '9.666666667' && youthPREducationJunContents.kpi1 < '11.6')?'green':(youthPREducationJunContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJunContents.kpi2 == null)?'grey-2':(youthPREducationJunContents.kpi2 >= '0' && youthPREducationJunContents.kpi2 <= '18.2')?'red':(youthPREducationJunContents.kpi2 > '18.2' && youthPREducationJunContents.kpi2 <= '24.26666667')?'orange':(youthPREducationJunContents.kpi2 > '24.26666667' && youthPREducationJunContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationJunContents.kpi2 >= '30.33333333' && youthPREducationJunContents.kpi2 < '36.4')?'green':(youthPREducationJunContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJunContents.kpi3 == null)?'grey-2':(youthPREducationJunContents.kpi3 >= '0' && youthPREducationJunContents.kpi3 <= '2.8')?'red':(youthPREducationJunContents.kpi3 > '2.8' && youthPREducationJunContents.kpi3 <= '3.733333333')?'orange':(youthPREducationJunContents.kpi3 > '3.733333333' && youthPREducationJunContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationJunContents.kpi3 >= '4.666666667' && youthPREducationJunContents.kpi3 < '5.6')?'green':(youthPREducationJunContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJunContents.kpi4 == null)?'grey-2':(youthPREducationJunContents.kpi4 >= '0' && youthPREducationJunContents.kpi4 <= '10.4')?'red':(youthPREducationJunContents.kpi4 > '10.4' && youthPREducationJunContents.kpi4 <= '13.86666667')?'orange':(youthPREducationJunContents.kpi4 > '13.86666667' && youthPREducationJunContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationJunContents.kpi4 >= '17.33333333' && youthPREducationJunContents.kpi4 < '20.8')?'green':(youthPREducationJunContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJunContents.kpi5 == null)?'grey-2':(youthPREducationJunContents.kpi5 >= '0' && youthPREducationJunContents.kpi5 <= '4.8')?'red':(youthPREducationJunContents.kpi5 > '4.8' && youthPREducationJunContents.kpi5 <= '6.4')?'orange':(youthPREducationJunContents.kpi5 > '6.4' && youthPREducationJunContents.kpi5 < '8')?'yellow-7':(youthPREducationJunContents.kpi5 >= '8' && youthPREducationJunContents.kpi5 < '9.6')?'green':(youthPREducationJunContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi5}}
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
                              :color="(youthPREducationJulContents.kpi1 == null)?'grey-2':(youthPREducationJulContents.kpi1 >= '0' && youthPREducationJulContents.kpi1 <= '5.8')?'red':(youthPREducationJulContents.kpi1 > '5.8' && youthPREducationJulContents.kpi1 <= '7.733333333')?'orange':(youthPREducationJulContents.kpi1 > '7.733333333' && youthPREducationJulContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationJulContents.kpi1 >= '9.666666667' && youthPREducationJulContents.kpi1 < '11.6')?'green':(youthPREducationJulContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJulContents.kpi2 == null)?'grey-2':(youthPREducationJulContents.kpi2 >= '0' && youthPREducationJulContents.kpi2 <= '18.2')?'red':(youthPREducationJulContents.kpi2 > '18.2' && youthPREducationJulContents.kpi2 <= '24.26666667')?'orange':(youthPREducationJulContents.kpi2 > '24.26666667' && youthPREducationJulContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationJulContents.kpi2 >= '30.33333333' && youthPREducationJulContents.kpi2 < '36.4')?'green':(youthPREducationJulContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJulContents.kpi3 == null)?'grey-2':(youthPREducationJulContents.kpi3 >= '0' && youthPREducationJulContents.kpi3 <= '2.8')?'red':(youthPREducationJulContents.kpi3 > '2.8' && youthPREducationJulContents.kpi3 <= '3.733333333')?'orange':(youthPREducationJulContents.kpi3 > '3.733333333' && youthPREducationJulContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationJulContents.kpi3 >= '4.666666667' && youthPREducationJulContents.kpi3 < '5.6')?'green':(youthPREducationJulContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJulContents.kpi4 == null)?'grey-2':(youthPREducationJulContents.kpi4 >= '0' && youthPREducationJulContents.kpi4 <= '10.4')?'red':(youthPREducationJulContents.kpi4 > '10.4' && youthPREducationJulContents.kpi4 <= '13.86666667')?'orange':(youthPREducationJulContents.kpi4 > '13.86666667' && youthPREducationJulContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationJulContents.kpi4 >= '17.33333333' && youthPREducationJulContents.kpi4 < '20.8')?'green':(youthPREducationJulContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJulContents.kpi5 == null)?'grey-2':(youthPREducationJulContents.kpi5 >= '0' && youthPREducationJulContents.kpi5 <= '4.8')?'red':(youthPREducationJulContents.kpi5 > '4.8' && youthPREducationJulContents.kpi5 <= '6.4')?'orange':(youthPREducationJulContents.kpi5 > '6.4' && youthPREducationJulContents.kpi5 < '8')?'yellow-7':(youthPREducationJulContents.kpi5 >= '8' && youthPREducationJulContents.kpi5 < '9.6')?'green':(youthPREducationJulContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi5}}
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
                              :color="(youthPREducationAugContents.kpi1 == null)?'grey-2':(youthPREducationAugContents.kpi1 >= '0' && youthPREducationAugContents.kpi1 <= '5.8')?'red':(youthPREducationAugContents.kpi1 > '5.8' && youthPREducationAugContents.kpi1 <= '7.733333333')?'orange':(youthPREducationAugContents.kpi1 > '7.733333333' && youthPREducationAugContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationAugContents.kpi1 >= '9.666666667' && youthPREducationAugContents.kpi1 < '11.6')?'green':(youthPREducationAugContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAugContents.kpi2 == null)?'grey-2':(youthPREducationAugContents.kpi2 >= '0' && youthPREducationAugContents.kpi2 <= '18.2')?'red':(youthPREducationAugContents.kpi2 > '18.2' && youthPREducationAugContents.kpi2 <= '24.26666667')?'orange':(youthPREducationAugContents.kpi2 > '24.26666667' && youthPREducationAugContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationAugContents.kpi2 >= '30.33333333' && youthPREducationAugContents.kpi2 < '36.4')?'green':(youthPREducationAugContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAugContents.kpi3 == null)?'grey-2':(youthPREducationAugContents.kpi3 >= '0' && youthPREducationAugContents.kpi3 <= '2.8')?'red':(youthPREducationAugContents.kpi3 > '2.8' && youthPREducationAugContents.kpi3 <= '3.733333333')?'orange':(youthPREducationAugContents.kpi3 > '3.733333333' && youthPREducationAugContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationAugContents.kpi3 >= '4.666666667' && youthPREducationAugContents.kpi3 < '5.6')?'green':(youthPREducationAugContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAugContents.kpi4 == null)?'grey-2':(youthPREducationAugContents.kpi4 >= '0' && youthPREducationAugContents.kpi4 <= '10.4')?'red':(youthPREducationAugContents.kpi4 > '10.4' && youthPREducationAugContents.kpi4 <= '13.86666667')?'orange':(youthPREducationAugContents.kpi4 > '13.86666667' && youthPREducationAugContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationAugContents.kpi4 >= '17.33333333' && youthPREducationAugContents.kpi4 < '20.8')?'green':(youthPREducationAugContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAugContents.kpi5 == null)?'grey-2':(youthPREducationAugContents.kpi5 >= '0' && youthPREducationAugContents.kpi5 <= '4.8')?'red':(youthPREducationAugContents.kpi5 > '4.8' && youthPREducationAugContents.kpi5 <= '6.4')?'orange':(youthPREducationAugContents.kpi5 > '6.4' && youthPREducationAugContents.kpi5 < '8')?'yellow-7':(youthPREducationAugContents.kpi5 >= '8' && youthPREducationAugContents.kpi5 < '9.6')?'green':(youthPREducationAugContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi5}}
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
                              :color="(youthPREducationSepContents.kpi1 == null)?'grey-2':(youthPREducationSepContents.kpi1 >= '0' && youthPREducationSepContents.kpi1 <= '5.8')?'red':(youthPREducationSepContents.kpi1 > '5.8' && youthPREducationSepContents.kpi1 <= '7.733333333')?'orange':(youthPREducationSepContents.kpi1 > '7.733333333' && youthPREducationSepContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationSepContents.kpi1 >= '9.666666667' && youthPREducationSepContents.kpi1 < '11.6')?'green':(youthPREducationSepContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationSepContents.kpi2 == null)?'grey-2':(youthPREducationSepContents.kpi2 >= '0' && youthPREducationSepContents.kpi2 <= '18.2')?'red':(youthPREducationSepContents.kpi2 > '18.2' && youthPREducationSepContents.kpi2 <= '24.26666667')?'orange':(youthPREducationSepContents.kpi2 > '24.26666667' && youthPREducationSepContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationSepContents.kpi2 >= '30.33333333' && youthPREducationSepContents.kpi2 < '36.4')?'green':(youthPREducationSepContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationSepContents.kpi3 == null)?'grey-2':(youthPREducationSepContents.kpi3 >= '0' && youthPREducationSepContents.kpi3 <= '2.8')?'red':(youthPREducationSepContents.kpi3 > '2.8' && youthPREducationSepContents.kpi3 <= '3.733333333')?'orange':(youthPREducationSepContents.kpi3 > '3.733333333' && youthPREducationSepContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationSepContents.kpi3 >= '4.666666667' && youthPREducationSepContents.kpi3 < '5.6')?'green':(youthPREducationSepContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationSepContents.kpi4 == null)?'grey-2':(youthPREducationSepContents.kpi4 >= '0' && youthPREducationSepContents.kpi4 <= '10.4')?'red':(youthPREducationSepContents.kpi4 > '10.4' && youthPREducationSepContents.kpi4 <= '13.86666667')?'orange':(youthPREducationSepContents.kpi4 > '13.86666667' && youthPREducationSepContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationSepContents.kpi4 >= '17.33333333' && youthPREducationSepContents.kpi4 < '20.8')?'green':(youthPREducationSepContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationSepContents.kpi5 == null)?'grey-2':(youthPREducationSepContents.kpi5 >= '0' && youthPREducationSepContents.kpi5 <= '4.8')?'red':(youthPREducationSepContents.kpi5 > '4.8' && youthPREducationSepContents.kpi5 <= '6.4')?'orange':(youthPREducationSepContents.kpi5 > '6.4' && youthPREducationSepContents.kpi5 < '8')?'yellow-7':(youthPREducationSepContents.kpi5 >= '8' && youthPREducationSepContents.kpi5 < '9.6')?'green':(youthPREducationSepContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi5}}
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
                              :color="(youthPREducationOctContents.kpi1 == null)?'grey-2':(youthPREducationOctContents.kpi1 >= '0' && youthPREducationOctContents.kpi1 <= '5.8')?'red':(youthPREducationOctContents.kpi1 > '5.8' && youthPREducationOctContents.kpi1 <= '7.733333333')?'orange':(youthPREducationOctContents.kpi1 > '7.733333333' && youthPREducationOctContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationOctContents.kpi1 >= '9.666666667' && youthPREducationOctContents.kpi1 < '11.6')?'green':(youthPREducationOctContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationOctContents.kpi2 == null)?'grey-2':(youthPREducationOctContents.kpi2 >= '0' && youthPREducationOctContents.kpi2 <= '18.2')?'red':(youthPREducationOctContents.kpi2 > '18.2' && youthPREducationOctContents.kpi2 <= '24.26666667')?'orange':(youthPREducationOctContents.kpi2 > '24.26666667' && youthPREducationOctContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationOctContents.kpi2 >= '30.33333333' && youthPREducationOctContents.kpi2 < '36.4')?'green':(youthPREducationOctContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationOctContents.kpi3 == null)?'grey-2':(youthPREducationOctContents.kpi3 >= '0' && youthPREducationOctContents.kpi3 <= '2.8')?'red':(youthPREducationOctContents.kpi3 > '2.8' && youthPREducationOctContents.kpi3 <= '3.733333333')?'orange':(youthPREducationOctContents.kpi3 > '3.733333333' && youthPREducationOctContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationOctContents.kpi3 >= '4.666666667' && youthPREducationOctContents.kpi3 < '5.6')?'green':(youthPREducationOctContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationOctContents.kpi4 == null)?'grey-2':(youthPREducationOctContents.kpi4 >= '0' && youthPREducationOctContents.kpi4 <= '10.4')?'red':(youthPREducationOctContents.kpi4 > '10.4' && youthPREducationOctContents.kpi4 <= '13.86666667')?'orange':(youthPREducationOctContents.kpi4 > '13.86666667' && youthPREducationOctContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationOctContents.kpi4 >= '17.33333333' && youthPREducationOctContents.kpi4 < '20.8')?'green':(youthPREducationOctContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationOctContents.kpi5 == null)?'grey-2':(youthPREducationOctContents.kpi5 >= '0' && youthPREducationOctContents.kpi5 <= '4.8')?'red':(youthPREducationOctContents.kpi5 > '4.8' && youthPREducationOctContents.kpi5 <= '6.4')?'orange':(youthPREducationOctContents.kpi5 > '6.4' && youthPREducationOctContents.kpi5 < '8')?'yellow-7':(youthPREducationOctContents.kpi5 >= '8' && youthPREducationOctContents.kpi5 < '9.6')?'green':(youthPREducationOctContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi5}}
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
                              :color="(youthPREducationNovContents.kpi1 == null)?'grey-2':(youthPREducationNovContents.kpi1 >= '0' && youthPREducationNovContents.kpi1 <= '5.8')?'red':(youthPREducationNovContents.kpi1 > '5.8' && youthPREducationNovContents.kpi1 <= '7.733333333')?'orange':(youthPREducationNovContents.kpi1 > '7.733333333' && youthPREducationNovContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationNovContents.kpi1 >= '9.666666667' && youthPREducationNovContents.kpi1 < '11.6')?'green':(youthPREducationNovContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationNovContents.kpi2 == null)?'grey-2':(youthPREducationNovContents.kpi2 >= '0' && youthPREducationNovContents.kpi2 <= '18.2')?'red':(youthPREducationNovContents.kpi2 > '18.2' && youthPREducationNovContents.kpi2 <= '24.26666667')?'orange':(youthPREducationNovContents.kpi2 > '24.26666667' && youthPREducationNovContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationNovContents.kpi2 >= '30.33333333' && youthPREducationNovContents.kpi2 < '36.4')?'green':(youthPREducationNovContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationNovContents.kpi3 == null)?'grey-2':(youthPREducationNovContents.kpi3 >= '0' && youthPREducationNovContents.kpi3 <= '2.8')?'red':(youthPREducationNovContents.kpi3 > '2.8' && youthPREducationNovContents.kpi3 <= '3.733333333')?'orange':(youthPREducationNovContents.kpi3 > '3.733333333' && youthPREducationNovContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationNovContents.kpi3 >= '4.666666667' && youthPREducationNovContents.kpi3 < '5.6')?'green':(youthPREducationNovContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationNovContents.kpi4 == null)?'grey-2':(youthPREducationNovContents.kpi4 >= '0' && youthPREducationNovContents.kpi4 <= '10.4')?'red':(youthPREducationNovContents.kpi4 > '10.4' && youthPREducationNovContents.kpi4 <= '13.86666667')?'orange':(youthPREducationNovContents.kpi4 > '13.86666667' && youthPREducationNovContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationNovContents.kpi4 >= '17.33333333' && youthPREducationNovContents.kpi4 < '20.8')?'green':(youthPREducationNovContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationNovContents.kpi5 == null)?'grey-2':(youthPREducationNovContents.kpi5 >= '0' && youthPREducationNovContents.kpi5 <= '4.8')?'red':(youthPREducationNovContents.kpi5 > '4.8' && youthPREducationNovContents.kpi5 <= '6.4')?'orange':(youthPREducationNovContents.kpi5 > '6.4' && youthPREducationNovContents.kpi5 < '8')?'yellow-7':(youthPREducationNovContents.kpi5 >= '8' && youthPREducationNovContents.kpi5 < '9.6')?'green':(youthPREducationNovContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi5}}
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
                              :color="(youthPREducationDecContents.kpi1 == null)?'grey-2':(youthPREducationDecContents.kpi1 >= '0' && youthPREducationDecContents.kpi1 <= '5.8')?'red':(youthPREducationDecContents.kpi1 > '5.8' && youthPREducationDecContents.kpi1 <= '7.733333333')?'orange':(youthPREducationDecContents.kpi1 > '7.733333333' && youthPREducationDecContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationDecContents.kpi1 >= '9.666666667' && youthPREducationDecContents.kpi1 < '11.6')?'green':(youthPREducationDecContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationDecContents.kpi2 == null)?'grey-2':(youthPREducationDecContents.kpi2 >= '0' && youthPREducationDecContents.kpi2 <= '18.2')?'red':(youthPREducationDecContents.kpi2 > '18.2' && youthPREducationDecContents.kpi2 <= '24.26666667')?'orange':(youthPREducationDecContents.kpi2 > '24.26666667' && youthPREducationDecContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationDecContents.kpi2 >= '30.33333333' && youthPREducationDecContents.kpi2 < '36.4')?'green':(youthPREducationDecContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationDecContents.kpi3 == null)?'grey-2':(youthPREducationDecContents.kpi3 >= '0' && youthPREducationDecContents.kpi3 <= '2.8')?'red':(youthPREducationDecContents.kpi3 > '2.8' && youthPREducationDecContents.kpi3 <= '3.733333333')?'orange':(youthPREducationDecContents.kpi3 > '3.733333333' && youthPREducationDecContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationDecContents.kpi3 >= '4.666666667' && youthPREducationDecContents.kpi3 < '5.6')?'green':(youthPREducationDecContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationDecContents.kpi4 == null)?'grey-2':(youthPREducationDecContents.kpi4 >= '0' && youthPREducationDecContents.kpi4 <= '10.4')?'red':(youthPREducationDecContents.kpi4 > '10.4' && youthPREducationDecContents.kpi4 <= '13.86666667')?'orange':(youthPREducationDecContents.kpi4 > '13.86666667' && youthPREducationDecContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationDecContents.kpi4 >= '17.33333333' && youthPREducationDecContents.kpi4 < '20.8')?'green':(youthPREducationDecContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationDecContents.kpi5 == null)?'grey-2':(youthPREducationDecContents.kpi5 >= '0' && youthPREducationDecContents.kpi5 <= '4.8')?'red':(youthPREducationDecContents.kpi5 > '4.8' && youthPREducationDecContents.kpi5 <= '6.4')?'orange':(youthPREducationDecContents.kpi5 > '6.4' && youthPREducationDecContents.kpi5 < '8')?'yellow-7':(youthPREducationDecContents.kpi5 >= '8' && youthPREducationDecContents.kpi5 < '9.6')?'green':(youthPREducationDecContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi5}}
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
                              :color="(youthPREducationJanContents.kpi1 == null)?'grey-2':(youthPREducationJanContents.kpi1 >= '0' && youthPREducationJanContents.kpi1 <= '5.8')?'red':(youthPREducationJanContents.kpi1 > '5.8' && youthPREducationJanContents.kpi1 <= '7.733333333')?'orange':(youthPREducationJanContents.kpi1 > '7.733333333' && youthPREducationJanContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationJanContents.kpi1 >= '9.666666667' && youthPREducationJanContents.kpi1 < '11.6')?'green':(youthPREducationJanContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJanContents.kpi2 == null)?'grey-2':(youthPREducationJanContents.kpi2 >= '0' && youthPREducationJanContents.kpi2 <= '18.2')?'red':(youthPREducationJanContents.kpi2 > '18.2' && youthPREducationJanContents.kpi2 <= '24.26666667')?'orange':(youthPREducationJanContents.kpi2 > '24.26666667' && youthPREducationJanContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationJanContents.kpi2 >= '30.33333333' && youthPREducationJanContents.kpi2 < '36.4')?'green':(youthPREducationJanContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJanContents.kpi3 == null)?'grey-2':(youthPREducationJanContents.kpi3 >= '0' && youthPREducationJanContents.kpi3 <= '2.8')?'red':(youthPREducationJanContents.kpi3 > '2.8' && youthPREducationJanContents.kpi3 <= '3.733333333')?'orange':(youthPREducationJanContents.kpi3 > '3.733333333' && youthPREducationJanContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationJanContents.kpi3 >= '4.666666667' && youthPREducationJanContents.kpi3 < '5.6')?'green':(youthPREducationJanContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJanContents.kpi4 == null)?'grey-2':(youthPREducationJanContents.kpi4 >= '0' && youthPREducationJanContents.kpi4 <= '10.4')?'red':(youthPREducationJanContents.kpi4 > '10.4' && youthPREducationJanContents.kpi4 <= '13.86666667')?'orange':(youthPREducationJanContents.kpi4 > '13.86666667' && youthPREducationJanContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationJanContents.kpi4 >= '17.33333333' && youthPREducationJanContents.kpi4 < '20.8')?'green':(youthPREducationJanContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJanContents.kpi5 == null)?'grey-2':(youthPREducationJanContents.kpi5 >= '0' && youthPREducationJanContents.kpi5 <= '4.8')?'red':(youthPREducationJanContents.kpi5 > '4.8' && youthPREducationJanContents.kpi5 <= '6.4')?'orange':(youthPREducationJanContents.kpi5 > '6.4' && youthPREducationJanContents.kpi5 < '8')?'yellow-7':(youthPREducationJanContents.kpi5 >= '8' && youthPREducationJanContents.kpi5 < '9.6')?'green':(youthPREducationJanContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi5}}
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
                              :color="(youthPREducationFebContents.kpi1 == null)?'grey-2':(youthPREducationFebContents.kpi1 >= '0' && youthPREducationFebContents.kpi1 <= '5.8')?'red':(youthPREducationFebContents.kpi1 > '5.8' && youthPREducationFebContents.kpi1 <= '7.733333333')?'orange':(youthPREducationFebContents.kpi1 > '7.733333333' && youthPREducationFebContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationFebContents.kpi1 >= '9.666666667' && youthPREducationFebContents.kpi1 < '11.6')?'green':(youthPREducationFebContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationFebContents.kpi2 == null)?'grey-2':(youthPREducationFebContents.kpi2 >= '0' && youthPREducationFebContents.kpi2 <= '18.2')?'red':(youthPREducationFebContents.kpi2 > '18.2' && youthPREducationFebContents.kpi2 <= '24.26666667')?'orange':(youthPREducationFebContents.kpi2 > '24.26666667' && youthPREducationFebContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationFebContents.kpi2 >= '30.33333333' && youthPREducationFebContents.kpi2 < '36.4')?'green':(youthPREducationFebContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationFebContents.kpi3 == null)?'grey-2':(youthPREducationFebContents.kpi3 >= '0' && youthPREducationFebContents.kpi3 <= '2.8')?'red':(youthPREducationFebContents.kpi3 > '2.8' && youthPREducationFebContents.kpi3 <= '3.733333333')?'orange':(youthPREducationFebContents.kpi3 > '3.733333333' && youthPREducationFebContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationFebContents.kpi3 >= '4.666666667' && youthPREducationFebContents.kpi3 < '5.6')?'green':(youthPREducationFebContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationFebContents.kpi4 == null)?'grey-2':(youthPREducationFebContents.kpi4 >= '0' && youthPREducationFebContents.kpi4 <= '10.4')?'red':(youthPREducationFebContents.kpi4 > '10.4' && youthPREducationFebContents.kpi4 <= '13.86666667')?'orange':(youthPREducationFebContents.kpi4 > '13.86666667' && youthPREducationFebContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationFebContents.kpi4 >= '17.33333333' && youthPREducationFebContents.kpi4 < '20.8')?'green':(youthPREducationFebContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationFebContents.kpi5 == null)?'grey-2':(youthPREducationFebContents.kpi5 >= '0' && youthPREducationFebContents.kpi5 <= '4.8')?'red':(youthPREducationFebContents.kpi5 > '4.8' && youthPREducationFebContents.kpi5 <= '6.4')?'orange':(youthPREducationFebContents.kpi5 > '6.4' && youthPREducationFebContents.kpi5 < '8')?'yellow-7':(youthPREducationFebContents.kpi5 >= '8' && youthPREducationFebContents.kpi5 < '9.6')?'green':(youthPREducationFebContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi5}}
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
                              :color="(youthPREducationMarContents.kpi1 == null)?'grey-2':(youthPREducationMarContents.kpi1 >= '0' && youthPREducationMarContents.kpi1 <= '5.8')?'red':(youthPREducationMarContents.kpi1 > '5.8' && youthPREducationMarContents.kpi1 <= '7.733333333')?'orange':(youthPREducationMarContents.kpi1 > '7.733333333' && youthPREducationMarContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationMarContents.kpi1 >= '9.666666667' && youthPREducationMarContents.kpi1 < '11.6')?'green':(youthPREducationMarContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMarContents.kpi2 == null)?'grey-2':(youthPREducationMarContents.kpi2 >= '0' && youthPREducationMarContents.kpi2 <= '18.2')?'red':(youthPREducationMarContents.kpi2 > '18.2' && youthPREducationMarContents.kpi2 <= '24.26666667')?'orange':(youthPREducationMarContents.kpi2 > '24.26666667' && youthPREducationMarContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationMarContents.kpi2 >= '30.33333333' && youthPREducationMarContents.kpi2 < '36.4')?'green':(youthPREducationMarContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMarContents.kpi3 == null)?'grey-2':(youthPREducationMarContents.kpi3 >= '0' && youthPREducationMarContents.kpi3 <= '2.8')?'red':(youthPREducationMarContents.kpi3 > '2.8' && youthPREducationMarContents.kpi3 <= '3.733333333')?'orange':(youthPREducationMarContents.kpi3 > '3.733333333' && youthPREducationMarContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationMarContents.kpi3 >= '4.666666667' && youthPREducationMarContents.kpi3 < '5.6')?'green':(youthPREducationMarContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMarContents.kpi4 == null)?'grey-2':(youthPREducationMarContents.kpi4 >= '0' && youthPREducationMarContents.kpi4 <= '10.4')?'red':(youthPREducationMarContents.kpi4 > '10.4' && youthPREducationMarContents.kpi4 <= '13.86666667')?'orange':(youthPREducationMarContents.kpi4 > '13.86666667' && youthPREducationMarContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationMarContents.kpi4 >= '17.33333333' && youthPREducationMarContents.kpi4 < '20.8')?'green':(youthPREducationMarContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMarContents.kpi5 == null)?'grey-2':(youthPREducationMarContents.kpi5 >= '0' && youthPREducationMarContents.kpi5 <= '4.8')?'red':(youthPREducationMarContents.kpi5 > '4.8' && youthPREducationMarContents.kpi5 <= '6.4')?'orange':(youthPREducationMarContents.kpi5 > '6.4' && youthPREducationMarContents.kpi5 < '8')?'yellow-7':(youthPREducationMarContents.kpi5 >= '8' && youthPREducationMarContents.kpi5 < '9.6')?'green':(youthPREducationMarContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi5}}
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
                              :color="(youthPREducationAprContents.kpi1 == null)?'grey-2':(youthPREducationAprContents.kpi1 >= '0' && youthPREducationAprContents.kpi1 <= '5.8')?'red':(youthPREducationAprContents.kpi1 > '5.8' && youthPREducationAprContents.kpi1 <= '7.733333333')?'orange':(youthPREducationAprContents.kpi1 > '7.733333333' && youthPREducationAprContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationAprContents.kpi1 >= '9.666666667' && youthPREducationAprContents.kpi1 < '11.6')?'green':(youthPREducationAprContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAprContents.kpi2 == null)?'grey-2':(youthPREducationAprContents.kpi2 >= '0' && youthPREducationAprContents.kpi2 <= '18.2')?'red':(youthPREducationAprContents.kpi2 > '18.2' && youthPREducationAprContents.kpi2 <= '24.26666667')?'orange':(youthPREducationAprContents.kpi2 > '24.26666667' && youthPREducationAprContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationAprContents.kpi2 >= '30.33333333' && youthPREducationAprContents.kpi2 < '36.4')?'green':(youthPREducationAprContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAprContents.kpi3 == null)?'grey-2':(youthPREducationAprContents.kpi3 >= '0' && youthPREducationAprContents.kpi3 <= '2.8')?'red':(youthPREducationAprContents.kpi3 > '2.8' && youthPREducationAprContents.kpi3 <= '3.733333333')?'orange':(youthPREducationAprContents.kpi3 > '3.733333333' && youthPREducationAprContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationAprContents.kpi3 >= '4.666666667' && youthPREducationAprContents.kpi3 < '5.6')?'green':(youthPREducationAprContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAprContents.kpi4 == null)?'grey-2':(youthPREducationAprContents.kpi4 >= '0' && youthPREducationAprContents.kpi4 <= '10.4')?'red':(youthPREducationAprContents.kpi4 > '10.4' && youthPREducationAprContents.kpi4 <= '13.86666667')?'orange':(youthPREducationAprContents.kpi4 > '13.86666667' && youthPREducationAprContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationAprContents.kpi4 >= '17.33333333' && youthPREducationAprContents.kpi4 < '20.8')?'green':(youthPREducationAprContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAprContents.kpi5 == null)?'grey-2':(youthPREducationAprContents.kpi5 >= '0' && youthPREducationAprContents.kpi5 <= '4.8')?'red':(youthPREducationAprContents.kpi5 > '4.8' && youthPREducationAprContents.kpi5 <= '6.4')?'orange':(youthPREducationAprContents.kpi5 > '6.4' && youthPREducationAprContents.kpi5 < '8')?'yellow-7':(youthPREducationAprContents.kpi5 >= '8' && youthPREducationAprContents.kpi5 < '9.6')?'green':(youthPREducationAprContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi5}}
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
                              :color="(youthPREducationMayContents.kpi1 == null)?'grey-2':(youthPREducationMayContents.kpi1 >= '0' && youthPREducationMayContents.kpi1 <= '5.8')?'red':(youthPREducationMayContents.kpi1 > '5.8' && youthPREducationMayContents.kpi1 <= '7.733333333')?'orange':(youthPREducationMayContents.kpi1 > '7.733333333' && youthPREducationMayContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationMayContents.kpi1 >= '9.666666667' && youthPREducationMayContents.kpi1 < '11.6')?'green':(youthPREducationMayContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMayContents.kpi2 == null)?'grey-2':(youthPREducationMayContents.kpi2 >= '0' && youthPREducationMayContents.kpi2 <= '18.2')?'red':(youthPREducationMayContents.kpi2 > '18.2' && youthPREducationMayContents.kpi2 <= '24.26666667')?'orange':(youthPREducationMayContents.kpi2 > '24.26666667' && youthPREducationMayContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationMayContents.kpi2 >= '30.33333333' && youthPREducationMayContents.kpi2 < '36.4')?'green':(youthPREducationMayContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMayContents.kpi3 == null)?'grey-2':(youthPREducationMayContents.kpi3 >= '0' && youthPREducationMayContents.kpi3 <= '2.8')?'red':(youthPREducationMayContents.kpi3 > '2.8' && youthPREducationMayContents.kpi3 <= '3.733333333')?'orange':(youthPREducationMayContents.kpi3 > '3.733333333' && youthPREducationMayContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationMayContents.kpi3 >= '4.666666667' && youthPREducationMayContents.kpi3 < '5.6')?'green':(youthPREducationMayContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMayContents.kpi4 == null)?'grey-2':(youthPREducationMayContents.kpi4 >= '0' && youthPREducationMayContents.kpi4 <= '10.4')?'red':(youthPREducationMayContents.kpi4 > '10.4' && youthPREducationMayContents.kpi4 <= '13.86666667')?'orange':(youthPREducationMayContents.kpi4 > '13.86666667' && youthPREducationMayContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationMayContents.kpi4 >= '17.33333333' && youthPREducationMayContents.kpi4 < '20.8')?'green':(youthPREducationMayContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMayContents.kpi5 == null)?'grey-2':(youthPREducationMayContents.kpi5 >= '0' && youthPREducationMayContents.kpi5 <= '4.8')?'red':(youthPREducationMayContents.kpi5 > '4.8' && youthPREducationMayContents.kpi5 <= '6.4')?'orange':(youthPREducationMayContents.kpi5 > '6.4' && youthPREducationMayContents.kpi5 < '8')?'yellow-7':(youthPREducationMayContents.kpi5 >= '8' && youthPREducationMayContents.kpi5 < '9.6')?'green':(youthPREducationMayContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi5}}
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
                              :color="(youthPREducationJunContents.kpi1 == null)?'grey-2':(youthPREducationJunContents.kpi1 >= '0' && youthPREducationJunContents.kpi1 <= '5.8')?'red':(youthPREducationJunContents.kpi1 > '5.8' && youthPREducationJunContents.kpi1 <= '7.733333333')?'orange':(youthPREducationJunContents.kpi1 > '7.733333333' && youthPREducationJunContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationJunContents.kpi1 >= '9.666666667' && youthPREducationJunContents.kpi1 < '11.6')?'green':(youthPREducationJunContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJunContents.kpi2 == null)?'grey-2':(youthPREducationJunContents.kpi2 >= '0' && youthPREducationJunContents.kpi2 <= '18.2')?'red':(youthPREducationJunContents.kpi2 > '18.2' && youthPREducationJunContents.kpi2 <= '24.26666667')?'orange':(youthPREducationJunContents.kpi2 > '24.26666667' && youthPREducationJunContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationJunContents.kpi2 >= '30.33333333' && youthPREducationJunContents.kpi2 < '36.4')?'green':(youthPREducationJunContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJunContents.kpi3 == null)?'grey-2':(youthPREducationJunContents.kpi3 >= '0' && youthPREducationJunContents.kpi3 <= '2.8')?'red':(youthPREducationJunContents.kpi3 > '2.8' && youthPREducationJunContents.kpi3 <= '3.733333333')?'orange':(youthPREducationJunContents.kpi3 > '3.733333333' && youthPREducationJunContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationJunContents.kpi3 >= '4.666666667' && youthPREducationJunContents.kpi3 < '5.6')?'green':(youthPREducationJunContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJunContents.kpi4 == null)?'grey-2':(youthPREducationJunContents.kpi4 >= '0' && youthPREducationJunContents.kpi4 <= '10.4')?'red':(youthPREducationJunContents.kpi4 > '10.4' && youthPREducationJunContents.kpi4 <= '13.86666667')?'orange':(youthPREducationJunContents.kpi4 > '13.86666667' && youthPREducationJunContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationJunContents.kpi4 >= '17.33333333' && youthPREducationJunContents.kpi4 < '20.8')?'green':(youthPREducationJunContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJunContents.kpi5 == null)?'grey-2':(youthPREducationJunContents.kpi5 >= '0' && youthPREducationJunContents.kpi5 <= '4.8')?'red':(youthPREducationJunContents.kpi5 > '4.8' && youthPREducationJunContents.kpi5 <= '6.4')?'orange':(youthPREducationJunContents.kpi5 > '6.4' && youthPREducationJunContents.kpi5 < '8')?'yellow-7':(youthPREducationJunContents.kpi5 >= '8' && youthPREducationJunContents.kpi5 < '9.6')?'green':(youthPREducationJunContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi5}}
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
                              :color="(youthPREducationJulContents.kpi1 == null)?'grey-2':(youthPREducationJulContents.kpi1 >= '0' && youthPREducationJulContents.kpi1 <= '5.8')?'red':(youthPREducationJulContents.kpi1 > '5.8' && youthPREducationJulContents.kpi1 <= '7.733333333')?'orange':(youthPREducationJulContents.kpi1 > '7.733333333' && youthPREducationJulContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationJulContents.kpi1 >= '9.666666667' && youthPREducationJulContents.kpi1 < '11.6')?'green':(youthPREducationJulContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJulContents.kpi2 == null)?'grey-2':(youthPREducationJulContents.kpi2 >= '0' && youthPREducationJulContents.kpi2 <= '18.2')?'red':(youthPREducationJulContents.kpi2 > '18.2' && youthPREducationJulContents.kpi2 <= '24.26666667')?'orange':(youthPREducationJulContents.kpi2 > '24.26666667' && youthPREducationJulContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationJulContents.kpi2 >= '30.33333333' && youthPREducationJulContents.kpi2 < '36.4')?'green':(youthPREducationJulContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJulContents.kpi3 == null)?'grey-2':(youthPREducationJulContents.kpi3 >= '0' && youthPREducationJulContents.kpi3 <= '2.8')?'red':(youthPREducationJulContents.kpi3 > '2.8' && youthPREducationJulContents.kpi3 <= '3.733333333')?'orange':(youthPREducationJulContents.kpi3 > '3.733333333' && youthPREducationJulContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationJulContents.kpi3 >= '4.666666667' && youthPREducationJulContents.kpi3 < '5.6')?'green':(youthPREducationJulContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJulContents.kpi4 == null)?'grey-2':(youthPREducationJulContents.kpi4 >= '0' && youthPREducationJulContents.kpi4 <= '10.4')?'red':(youthPREducationJulContents.kpi4 > '10.4' && youthPREducationJulContents.kpi4 <= '13.86666667')?'orange':(youthPREducationJulContents.kpi4 > '13.86666667' && youthPREducationJulContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationJulContents.kpi4 >= '17.33333333' && youthPREducationJulContents.kpi4 < '20.8')?'green':(youthPREducationJulContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJulContents.kpi5 == null)?'grey-2':(youthPREducationJulContents.kpi5 >= '0' && youthPREducationJulContents.kpi5 <= '4.8')?'red':(youthPREducationJulContents.kpi5 > '4.8' && youthPREducationJulContents.kpi5 <= '6.4')?'orange':(youthPREducationJulContents.kpi5 > '6.4' && youthPREducationJulContents.kpi5 < '8')?'yellow-7':(youthPREducationJulContents.kpi5 >= '8' && youthPREducationJulContents.kpi5 < '9.6')?'green':(youthPREducationJulContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi5}}
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
                              :color="(youthPREducationAugContents.kpi1 == null)?'grey-2':(youthPREducationAugContents.kpi1 >= '0' && youthPREducationAugContents.kpi1 <= '5.8')?'red':(youthPREducationAugContents.kpi1 > '5.8' && youthPREducationAugContents.kpi1 <= '7.733333333')?'orange':(youthPREducationAugContents.kpi1 > '7.733333333' && youthPREducationAugContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationAugContents.kpi1 >= '9.666666667' && youthPREducationAugContents.kpi1 < '11.6')?'green':(youthPREducationAugContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAugContents.kpi2 == null)?'grey-2':(youthPREducationAugContents.kpi2 >= '0' && youthPREducationAugContents.kpi2 <= '18.2')?'red':(youthPREducationAugContents.kpi2 > '18.2' && youthPREducationAugContents.kpi2 <= '24.26666667')?'orange':(youthPREducationAugContents.kpi2 > '24.26666667' && youthPREducationAugContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationAugContents.kpi2 >= '30.33333333' && youthPREducationAugContents.kpi2 < '36.4')?'green':(youthPREducationAugContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAugContents.kpi3 == null)?'grey-2':(youthPREducationAugContents.kpi3 >= '0' && youthPREducationAugContents.kpi3 <= '2.8')?'red':(youthPREducationAugContents.kpi3 > '2.8' && youthPREducationAugContents.kpi3 <= '3.733333333')?'orange':(youthPREducationAugContents.kpi3 > '3.733333333' && youthPREducationAugContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationAugContents.kpi3 >= '4.666666667' && youthPREducationAugContents.kpi3 < '5.6')?'green':(youthPREducationAugContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAugContents.kpi4 == null)?'grey-2':(youthPREducationAugContents.kpi4 >= '0' && youthPREducationAugContents.kpi4 <= '10.4')?'red':(youthPREducationAugContents.kpi4 > '10.4' && youthPREducationAugContents.kpi4 <= '13.86666667')?'orange':(youthPREducationAugContents.kpi4 > '13.86666667' && youthPREducationAugContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationAugContents.kpi4 >= '17.33333333' && youthPREducationAugContents.kpi4 < '20.8')?'green':(youthPREducationAugContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAugContents.kpi5 == null)?'grey-2':(youthPREducationAugContents.kpi5 >= '0' && youthPREducationAugContents.kpi5 <= '4.8')?'red':(youthPREducationAugContents.kpi5 > '4.8' && youthPREducationAugContents.kpi5 <= '6.4')?'orange':(youthPREducationAugContents.kpi5 > '6.4' && youthPREducationAugContents.kpi5 < '8')?'yellow-7':(youthPREducationAugContents.kpi5 >= '8' && youthPREducationAugContents.kpi5 < '9.6')?'green':(youthPREducationAugContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi5}}
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
                              :color="(youthPREducationSepContents.kpi1 == null)?'grey-2':(youthPREducationSepContents.kpi1 >= '0' && youthPREducationSepContents.kpi1 <= '5.8')?'red':(youthPREducationSepContents.kpi1 > '5.8' && youthPREducationSepContents.kpi1 <= '7.733333333')?'orange':(youthPREducationSepContents.kpi1 > '7.733333333' && youthPREducationSepContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationSepContents.kpi1 >= '9.666666667' && youthPREducationSepContents.kpi1 < '11.6')?'green':(youthPREducationSepContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationSepContents.kpi2 == null)?'grey-2':(youthPREducationSepContents.kpi2 >= '0' && youthPREducationSepContents.kpi2 <= '18.2')?'red':(youthPREducationSepContents.kpi2 > '18.2' && youthPREducationSepContents.kpi2 <= '24.26666667')?'orange':(youthPREducationSepContents.kpi2 > '24.26666667' && youthPREducationSepContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationSepContents.kpi2 >= '30.33333333' && youthPREducationSepContents.kpi2 < '36.4')?'green':(youthPREducationSepContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationSepContents.kpi3 == null)?'grey-2':(youthPREducationSepContents.kpi3 >= '0' && youthPREducationSepContents.kpi3 <= '2.8')?'red':(youthPREducationSepContents.kpi3 > '2.8' && youthPREducationSepContents.kpi3 <= '3.733333333')?'orange':(youthPREducationSepContents.kpi3 > '3.733333333' && youthPREducationSepContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationSepContents.kpi3 >= '4.666666667' && youthPREducationSepContents.kpi3 < '5.6')?'green':(youthPREducationSepContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationSepContents.kpi4 == null)?'grey-2':(youthPREducationSepContents.kpi4 >= '0' && youthPREducationSepContents.kpi4 <= '10.4')?'red':(youthPREducationSepContents.kpi4 > '10.4' && youthPREducationSepContents.kpi4 <= '13.86666667')?'orange':(youthPREducationSepContents.kpi4 > '13.86666667' && youthPREducationSepContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationSepContents.kpi4 >= '17.33333333' && youthPREducationSepContents.kpi4 < '20.8')?'green':(youthPREducationSepContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationSepContents.kpi5 == null)?'grey-2':(youthPREducationSepContents.kpi5 >= '0' && youthPREducationSepContents.kpi5 <= '4.8')?'red':(youthPREducationSepContents.kpi5 > '4.8' && youthPREducationSepContents.kpi5 <= '6.4')?'orange':(youthPREducationSepContents.kpi5 > '6.4' && youthPREducationSepContents.kpi5 < '8')?'yellow-7':(youthPREducationSepContents.kpi5 >= '8' && youthPREducationSepContents.kpi5 < '9.6')?'green':(youthPREducationSepContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi5}}
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
                              :color="(youthPREducationOctContents.kpi1 == null)?'grey-2':(youthPREducationOctContents.kpi1 >= '0' && youthPREducationOctContents.kpi1 <= '5.8')?'red':(youthPREducationOctContents.kpi1 > '5.8' && youthPREducationOctContents.kpi1 <= '7.733333333')?'orange':(youthPREducationOctContents.kpi1 > '7.733333333' && youthPREducationOctContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationOctContents.kpi1 >= '9.666666667' && youthPREducationOctContents.kpi1 < '11.6')?'green':(youthPREducationOctContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationOctContents.kpi2 == null)?'grey-2':(youthPREducationOctContents.kpi2 >= '0' && youthPREducationOctContents.kpi2 <= '18.2')?'red':(youthPREducationOctContents.kpi2 > '18.2' && youthPREducationOctContents.kpi2 <= '24.26666667')?'orange':(youthPREducationOctContents.kpi2 > '24.26666667' && youthPREducationOctContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationOctContents.kpi2 >= '30.33333333' && youthPREducationOctContents.kpi2 < '36.4')?'green':(youthPREducationOctContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationOctContents.kpi3 == null)?'grey-2':(youthPREducationOctContents.kpi3 >= '0' && youthPREducationOctContents.kpi3 <= '2.8')?'red':(youthPREducationOctContents.kpi3 > '2.8' && youthPREducationOctContents.kpi3 <= '3.733333333')?'orange':(youthPREducationOctContents.kpi3 > '3.733333333' && youthPREducationOctContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationOctContents.kpi3 >= '4.666666667' && youthPREducationOctContents.kpi3 < '5.6')?'green':(youthPREducationOctContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationOctContents.kpi4 == null)?'grey-2':(youthPREducationOctContents.kpi4 >= '0' && youthPREducationOctContents.kpi4 <= '10.4')?'red':(youthPREducationOctContents.kpi4 > '10.4' && youthPREducationOctContents.kpi4 <= '13.86666667')?'orange':(youthPREducationOctContents.kpi4 > '13.86666667' && youthPREducationOctContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationOctContents.kpi4 >= '17.33333333' && youthPREducationOctContents.kpi4 < '20.8')?'green':(youthPREducationOctContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationOctContents.kpi5 == null)?'grey-2':(youthPREducationOctContents.kpi5 >= '0' && youthPREducationOctContents.kpi5 <= '4.8')?'red':(youthPREducationOctContents.kpi5 > '4.8' && youthPREducationOctContents.kpi5 <= '6.4')?'orange':(youthPREducationOctContents.kpi5 > '6.4' && youthPREducationOctContents.kpi5 < '8')?'yellow-7':(youthPREducationOctContents.kpi5 >= '8' && youthPREducationOctContents.kpi5 < '9.6')?'green':(youthPREducationOctContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi5}}
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
                              :color="(youthPREducationNovContents.kpi1 == null)?'grey-2':(youthPREducationNovContents.kpi1 >= '0' && youthPREducationNovContents.kpi1 <= '5.8')?'red':(youthPREducationNovContents.kpi1 > '5.8' && youthPREducationNovContents.kpi1 <= '7.733333333')?'orange':(youthPREducationNovContents.kpi1 > '7.733333333' && youthPREducationNovContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationNovContents.kpi1 >= '9.666666667' && youthPREducationNovContents.kpi1 < '11.6')?'green':(youthPREducationNovContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationNovContents.kpi2 == null)?'grey-2':(youthPREducationNovContents.kpi2 >= '0' && youthPREducationNovContents.kpi2 <= '18.2')?'red':(youthPREducationNovContents.kpi2 > '18.2' && youthPREducationNovContents.kpi2 <= '24.26666667')?'orange':(youthPREducationNovContents.kpi2 > '24.26666667' && youthPREducationNovContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationNovContents.kpi2 >= '30.33333333' && youthPREducationNovContents.kpi2 < '36.4')?'green':(youthPREducationNovContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationNovContents.kpi3 == null)?'grey-2':(youthPREducationNovContents.kpi3 >= '0' && youthPREducationNovContents.kpi3 <= '2.8')?'red':(youthPREducationNovContents.kpi3 > '2.8' && youthPREducationNovContents.kpi3 <= '3.733333333')?'orange':(youthPREducationNovContents.kpi3 > '3.733333333' && youthPREducationNovContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationNovContents.kpi3 >= '4.666666667' && youthPREducationNovContents.kpi3 < '5.6')?'green':(youthPREducationNovContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationNovContents.kpi4 == null)?'grey-2':(youthPREducationNovContents.kpi4 >= '0' && youthPREducationNovContents.kpi4 <= '10.4')?'red':(youthPREducationNovContents.kpi4 > '10.4' && youthPREducationNovContents.kpi4 <= '13.86666667')?'orange':(youthPREducationNovContents.kpi4 > '13.86666667' && youthPREducationNovContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationNovContents.kpi4 >= '17.33333333' && youthPREducationNovContents.kpi4 < '20.8')?'green':(youthPREducationNovContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationNovContents.kpi5 == null)?'grey-2':(youthPREducationNovContents.kpi5 >= '0' && youthPREducationNovContents.kpi5 <= '4.8')?'red':(youthPREducationNovContents.kpi5 > '4.8' && youthPREducationNovContents.kpi5 <= '6.4')?'orange':(youthPREducationNovContents.kpi5 > '6.4' && youthPREducationNovContents.kpi5 < '8')?'yellow-7':(youthPREducationNovContents.kpi5 >= '8' && youthPREducationNovContents.kpi5 < '9.6')?'green':(youthPREducationNovContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi5}}
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
                              :color="(youthPREducationDecContents.kpi1 == null)?'grey-2':(youthPREducationDecContents.kpi1 >= '0' && youthPREducationDecContents.kpi1 <= '5.8')?'red':(youthPREducationDecContents.kpi1 > '5.8' && youthPREducationDecContents.kpi1 <= '7.733333333')?'orange':(youthPREducationDecContents.kpi1 > '7.733333333' && youthPREducationDecContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationDecContents.kpi1 >= '9.666666667' && youthPREducationDecContents.kpi1 < '11.6')?'green':(youthPREducationDecContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationDecContents.kpi2 == null)?'grey-2':(youthPREducationDecContents.kpi2 >= '0' && youthPREducationDecContents.kpi2 <= '18.2')?'red':(youthPREducationDecContents.kpi2 > '18.2' && youthPREducationDecContents.kpi2 <= '24.26666667')?'orange':(youthPREducationDecContents.kpi2 > '24.26666667' && youthPREducationDecContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationDecContents.kpi2 >= '30.33333333' && youthPREducationDecContents.kpi2 < '36.4')?'green':(youthPREducationDecContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationDecContents.kpi3 == null)?'grey-2':(youthPREducationDecContents.kpi3 >= '0' && youthPREducationDecContents.kpi3 <= '2.8')?'red':(youthPREducationDecContents.kpi3 > '2.8' && youthPREducationDecContents.kpi3 <= '3.733333333')?'orange':(youthPREducationDecContents.kpi3 > '3.733333333' && youthPREducationDecContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationDecContents.kpi3 >= '4.666666667' && youthPREducationDecContents.kpi3 < '5.6')?'green':(youthPREducationDecContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationDecContents.kpi4 == null)?'grey-2':(youthPREducationDecContents.kpi4 >= '0' && youthPREducationDecContents.kpi4 <= '10.4')?'red':(youthPREducationDecContents.kpi4 > '10.4' && youthPREducationDecContents.kpi4 <= '13.86666667')?'orange':(youthPREducationDecContents.kpi4 > '13.86666667' && youthPREducationDecContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationDecContents.kpi4 >= '17.33333333' && youthPREducationDecContents.kpi4 < '20.8')?'green':(youthPREducationDecContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationDecContents.kpi5 == null)?'grey-2':(youthPREducationDecContents.kpi5 >= '0' && youthPREducationDecContents.kpi5 <= '4.8')?'red':(youthPREducationDecContents.kpi5 > '4.8' && youthPREducationDecContents.kpi5 <= '6.4')?'orange':(youthPREducationDecContents.kpi5 > '6.4' && youthPREducationDecContents.kpi5 < '8')?'yellow-7':(youthPREducationDecContents.kpi5 >= '8' && youthPREducationDecContents.kpi5 < '9.6')?'green':(youthPREducationDecContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi5}}
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
                              :color="(youthPREducationJanContents.kpi1 == null)?'grey-2':(youthPREducationJanContents.kpi1 >= '0' && youthPREducationJanContents.kpi1 <= '5.8')?'red':(youthPREducationJanContents.kpi1 > '5.8' && youthPREducationJanContents.kpi1 <= '7.733333333')?'orange':(youthPREducationJanContents.kpi1 > '7.733333333' && youthPREducationJanContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationJanContents.kpi1 >= '9.666666667' && youthPREducationJanContents.kpi1 < '11.6')?'green':(youthPREducationJanContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJanContents.kpi2 == null)?'grey-2':(youthPREducationJanContents.kpi2 >= '0' && youthPREducationJanContents.kpi2 <= '18.2')?'red':(youthPREducationJanContents.kpi2 > '18.2' && youthPREducationJanContents.kpi2 <= '24.26666667')?'orange':(youthPREducationJanContents.kpi2 > '24.26666667' && youthPREducationJanContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationJanContents.kpi2 >= '30.33333333' && youthPREducationJanContents.kpi2 < '36.4')?'green':(youthPREducationJanContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJanContents.kpi3 == null)?'grey-2':(youthPREducationJanContents.kpi3 >= '0' && youthPREducationJanContents.kpi3 <= '2.8')?'red':(youthPREducationJanContents.kpi3 > '2.8' && youthPREducationJanContents.kpi3 <= '3.733333333')?'orange':(youthPREducationJanContents.kpi3 > '3.733333333' && youthPREducationJanContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationJanContents.kpi3 >= '4.666666667' && youthPREducationJanContents.kpi3 < '5.6')?'green':(youthPREducationJanContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJanContents.kpi4 == null)?'grey-2':(youthPREducationJanContents.kpi4 >= '0' && youthPREducationJanContents.kpi4 <= '10.4')?'red':(youthPREducationJanContents.kpi4 > '10.4' && youthPREducationJanContents.kpi4 <= '13.86666667')?'orange':(youthPREducationJanContents.kpi4 > '13.86666667' && youthPREducationJanContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationJanContents.kpi4 >= '17.33333333' && youthPREducationJanContents.kpi4 < '20.8')?'green':(youthPREducationJanContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJanContents.kpi5 == null)?'grey-2':(youthPREducationJanContents.kpi5 >= '0' && youthPREducationJanContents.kpi5 <= '4.8')?'red':(youthPREducationJanContents.kpi5 > '4.8' && youthPREducationJanContents.kpi5 <= '6.4')?'orange':(youthPREducationJanContents.kpi5 > '6.4' && youthPREducationJanContents.kpi5 < '8')?'yellow-7':(youthPREducationJanContents.kpi5 >= '8' && youthPREducationJanContents.kpi5 < '9.6')?'green':(youthPREducationJanContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi5}}
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
                              :color="(youthPREducationFebContents.kpi1 == null)?'grey-2':(youthPREducationFebContents.kpi1 >= '0' && youthPREducationFebContents.kpi1 <= '5.8')?'red':(youthPREducationFebContents.kpi1 > '5.8' && youthPREducationFebContents.kpi1 <= '7.733333333')?'orange':(youthPREducationFebContents.kpi1 > '7.733333333' && youthPREducationFebContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationFebContents.kpi1 >= '9.666666667' && youthPREducationFebContents.kpi1 < '11.6')?'green':(youthPREducationFebContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationFebContents.kpi2 == null)?'grey-2':(youthPREducationFebContents.kpi2 >= '0' && youthPREducationFebContents.kpi2 <= '18.2')?'red':(youthPREducationFebContents.kpi2 > '18.2' && youthPREducationFebContents.kpi2 <= '24.26666667')?'orange':(youthPREducationFebContents.kpi2 > '24.26666667' && youthPREducationFebContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationFebContents.kpi2 >= '30.33333333' && youthPREducationFebContents.kpi2 < '36.4')?'green':(youthPREducationFebContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationFebContents.kpi3 == null)?'grey-2':(youthPREducationFebContents.kpi3 >= '0' && youthPREducationFebContents.kpi3 <= '2.8')?'red':(youthPREducationFebContents.kpi3 > '2.8' && youthPREducationFebContents.kpi3 <= '3.733333333')?'orange':(youthPREducationFebContents.kpi3 > '3.733333333' && youthPREducationFebContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationFebContents.kpi3 >= '4.666666667' && youthPREducationFebContents.kpi3 < '5.6')?'green':(youthPREducationFebContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationFebContents.kpi4 == null)?'grey-2':(youthPREducationFebContents.kpi4 >= '0' && youthPREducationFebContents.kpi4 <= '10.4')?'red':(youthPREducationFebContents.kpi4 > '10.4' && youthPREducationFebContents.kpi4 <= '13.86666667')?'orange':(youthPREducationFebContents.kpi4 > '13.86666667' && youthPREducationFebContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationFebContents.kpi4 >= '17.33333333' && youthPREducationFebContents.kpi4 < '20.8')?'green':(youthPREducationFebContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationFebContents.kpi5 == null)?'grey-2':(youthPREducationFebContents.kpi5 >= '0' && youthPREducationFebContents.kpi5 <= '4.8')?'red':(youthPREducationFebContents.kpi5 > '4.8' && youthPREducationFebContents.kpi5 <= '6.4')?'orange':(youthPREducationFebContents.kpi5 > '6.4' && youthPREducationFebContents.kpi5 < '8')?'yellow-7':(youthPREducationFebContents.kpi5 >= '8' && youthPREducationFebContents.kpi5 < '9.6')?'green':(youthPREducationFebContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi5}}
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
                              :color="(youthPREducationMarContents.kpi1 == null)?'grey-2':(youthPREducationMarContents.kpi1 >= '0' && youthPREducationMarContents.kpi1 <= '5.8')?'red':(youthPREducationMarContents.kpi1 > '5.8' && youthPREducationMarContents.kpi1 <= '7.733333333')?'orange':(youthPREducationMarContents.kpi1 > '7.733333333' && youthPREducationMarContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationMarContents.kpi1 >= '9.666666667' && youthPREducationMarContents.kpi1 < '11.6')?'green':(youthPREducationMarContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMarContents.kpi2 == null)?'grey-2':(youthPREducationMarContents.kpi2 >= '0' && youthPREducationMarContents.kpi2 <= '18.2')?'red':(youthPREducationMarContents.kpi2 > '18.2' && youthPREducationMarContents.kpi2 <= '24.26666667')?'orange':(youthPREducationMarContents.kpi2 > '24.26666667' && youthPREducationMarContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationMarContents.kpi2 >= '30.33333333' && youthPREducationMarContents.kpi2 < '36.4')?'green':(youthPREducationMarContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMarContents.kpi3 == null)?'grey-2':(youthPREducationMarContents.kpi3 >= '0' && youthPREducationMarContents.kpi3 <= '2.8')?'red':(youthPREducationMarContents.kpi3 > '2.8' && youthPREducationMarContents.kpi3 <= '3.733333333')?'orange':(youthPREducationMarContents.kpi3 > '3.733333333' && youthPREducationMarContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationMarContents.kpi3 >= '4.666666667' && youthPREducationMarContents.kpi3 < '5.6')?'green':(youthPREducationMarContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMarContents.kpi4 == null)?'grey-2':(youthPREducationMarContents.kpi4 >= '0' && youthPREducationMarContents.kpi4 <= '10.4')?'red':(youthPREducationMarContents.kpi4 > '10.4' && youthPREducationMarContents.kpi4 <= '13.86666667')?'orange':(youthPREducationMarContents.kpi4 > '13.86666667' && youthPREducationMarContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationMarContents.kpi4 >= '17.33333333' && youthPREducationMarContents.kpi4 < '20.8')?'green':(youthPREducationMarContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMarContents.kpi5 == null)?'grey-2':(youthPREducationMarContents.kpi5 >= '0' && youthPREducationMarContents.kpi5 <= '4.8')?'red':(youthPREducationMarContents.kpi5 > '4.8' && youthPREducationMarContents.kpi5 <= '6.4')?'orange':(youthPREducationMarContents.kpi5 > '6.4' && youthPREducationMarContents.kpi5 < '8')?'yellow-7':(youthPREducationMarContents.kpi5 >= '8' && youthPREducationMarContents.kpi5 < '9.6')?'green':(youthPREducationMarContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi5}}
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
                              :color="(youthPREducationAprContents.kpi1 == null)?'grey-2':(youthPREducationAprContents.kpi1 >= '0' && youthPREducationAprContents.kpi1 <= '5.8')?'red':(youthPREducationAprContents.kpi1 > '5.8' && youthPREducationAprContents.kpi1 <= '7.733333333')?'orange':(youthPREducationAprContents.kpi1 > '7.733333333' && youthPREducationAprContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationAprContents.kpi1 >= '9.666666667' && youthPREducationAprContents.kpi1 < '11.6')?'green':(youthPREducationAprContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAprContents.kpi2 == null)?'grey-2':(youthPREducationAprContents.kpi2 >= '0' && youthPREducationAprContents.kpi2 <= '18.2')?'red':(youthPREducationAprContents.kpi2 > '18.2' && youthPREducationAprContents.kpi2 <= '24.26666667')?'orange':(youthPREducationAprContents.kpi2 > '24.26666667' && youthPREducationAprContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationAprContents.kpi2 >= '30.33333333' && youthPREducationAprContents.kpi2 < '36.4')?'green':(youthPREducationAprContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAprContents.kpi3 == null)?'grey-2':(youthPREducationAprContents.kpi3 >= '0' && youthPREducationAprContents.kpi3 <= '2.8')?'red':(youthPREducationAprContents.kpi3 > '2.8' && youthPREducationAprContents.kpi3 <= '3.733333333')?'orange':(youthPREducationAprContents.kpi3 > '3.733333333' && youthPREducationAprContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationAprContents.kpi3 >= '4.666666667' && youthPREducationAprContents.kpi3 < '5.6')?'green':(youthPREducationAprContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAprContents.kpi4 == null)?'grey-2':(youthPREducationAprContents.kpi4 >= '0' && youthPREducationAprContents.kpi4 <= '10.4')?'red':(youthPREducationAprContents.kpi4 > '10.4' && youthPREducationAprContents.kpi4 <= '13.86666667')?'orange':(youthPREducationAprContents.kpi4 > '13.86666667' && youthPREducationAprContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationAprContents.kpi4 >= '17.33333333' && youthPREducationAprContents.kpi4 < '20.8')?'green':(youthPREducationAprContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAprContents.kpi5 == null)?'grey-2':(youthPREducationAprContents.kpi5 >= '0' && youthPREducationAprContents.kpi5 <= '4.8')?'red':(youthPREducationAprContents.kpi5 > '4.8' && youthPREducationAprContents.kpi5 <= '6.4')?'orange':(youthPREducationAprContents.kpi5 > '6.4' && youthPREducationAprContents.kpi5 < '8')?'yellow-7':(youthPREducationAprContents.kpi5 >= '8' && youthPREducationAprContents.kpi5 < '9.6')?'green':(youthPREducationAprContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi5}}
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
                              :color="(youthPREducationMayContents.kpi1 == null)?'grey-2':(youthPREducationMayContents.kpi1 >= '0' && youthPREducationMayContents.kpi1 <= '5.8')?'red':(youthPREducationMayContents.kpi1 > '5.8' && youthPREducationMayContents.kpi1 <= '7.733333333')?'orange':(youthPREducationMayContents.kpi1 > '7.733333333' && youthPREducationMayContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationMayContents.kpi1 >= '9.666666667' && youthPREducationMayContents.kpi1 < '11.6')?'green':(youthPREducationMayContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMayContents.kpi2 == null)?'grey-2':(youthPREducationMayContents.kpi2 >= '0' && youthPREducationMayContents.kpi2 <= '18.2')?'red':(youthPREducationMayContents.kpi2 > '18.2' && youthPREducationMayContents.kpi2 <= '24.26666667')?'orange':(youthPREducationMayContents.kpi2 > '24.26666667' && youthPREducationMayContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationMayContents.kpi2 >= '30.33333333' && youthPREducationMayContents.kpi2 < '36.4')?'green':(youthPREducationMayContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMayContents.kpi3 == null)?'grey-2':(youthPREducationMayContents.kpi3 >= '0' && youthPREducationMayContents.kpi3 <= '2.8')?'red':(youthPREducationMayContents.kpi3 > '2.8' && youthPREducationMayContents.kpi3 <= '3.733333333')?'orange':(youthPREducationMayContents.kpi3 > '3.733333333' && youthPREducationMayContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationMayContents.kpi3 >= '4.666666667' && youthPREducationMayContents.kpi3 < '5.6')?'green':(youthPREducationMayContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMayContents.kpi4 == null)?'grey-2':(youthPREducationMayContents.kpi4 >= '0' && youthPREducationMayContents.kpi4 <= '10.4')?'red':(youthPREducationMayContents.kpi4 > '10.4' && youthPREducationMayContents.kpi4 <= '13.86666667')?'orange':(youthPREducationMayContents.kpi4 > '13.86666667' && youthPREducationMayContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationMayContents.kpi4 >= '17.33333333' && youthPREducationMayContents.kpi4 < '20.8')?'green':(youthPREducationMayContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMayContents.kpi5 == null)?'grey-2':(youthPREducationMayContents.kpi5 >= '0' && youthPREducationMayContents.kpi5 <= '4.8')?'red':(youthPREducationMayContents.kpi5 > '4.8' && youthPREducationMayContents.kpi5 <= '6.4')?'orange':(youthPREducationMayContents.kpi5 > '6.4' && youthPREducationMayContents.kpi5 < '8')?'yellow-7':(youthPREducationMayContents.kpi5 >= '8' && youthPREducationMayContents.kpi5 < '9.6')?'green':(youthPREducationMayContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi5}}
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
                              :color="(youthPREducationJunContents.kpi1 == null)?'grey-2':(youthPREducationJunContents.kpi1 >= '0' && youthPREducationJunContents.kpi1 <= '5.8')?'red':(youthPREducationJunContents.kpi1 > '5.8' && youthPREducationJunContents.kpi1 <= '7.733333333')?'orange':(youthPREducationJunContents.kpi1 > '7.733333333' && youthPREducationJunContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationJunContents.kpi1 >= '9.666666667' && youthPREducationJunContents.kpi1 < '11.6')?'green':(youthPREducationJunContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJunContents.kpi2 == null)?'grey-2':(youthPREducationJunContents.kpi2 >= '0' && youthPREducationJunContents.kpi2 <= '18.2')?'red':(youthPREducationJunContents.kpi2 > '18.2' && youthPREducationJunContents.kpi2 <= '24.26666667')?'orange':(youthPREducationJunContents.kpi2 > '24.26666667' && youthPREducationJunContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationJunContents.kpi2 >= '30.33333333' && youthPREducationJunContents.kpi2 < '36.4')?'green':(youthPREducationJunContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJunContents.kpi3 == null)?'grey-2':(youthPREducationJunContents.kpi3 >= '0' && youthPREducationJunContents.kpi3 <= '2.8')?'red':(youthPREducationJunContents.kpi3 > '2.8' && youthPREducationJunContents.kpi3 <= '3.733333333')?'orange':(youthPREducationJunContents.kpi3 > '3.733333333' && youthPREducationJunContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationJunContents.kpi3 >= '4.666666667' && youthPREducationJunContents.kpi3 < '5.6')?'green':(youthPREducationJunContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJunContents.kpi4 == null)?'grey-2':(youthPREducationJunContents.kpi4 >= '0' && youthPREducationJunContents.kpi4 <= '10.4')?'red':(youthPREducationJunContents.kpi4 > '10.4' && youthPREducationJunContents.kpi4 <= '13.86666667')?'orange':(youthPREducationJunContents.kpi4 > '13.86666667' && youthPREducationJunContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationJunContents.kpi4 >= '17.33333333' && youthPREducationJunContents.kpi4 < '20.8')?'green':(youthPREducationJunContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJunContents.kpi5 == null)?'grey-2':(youthPREducationJunContents.kpi5 >= '0' && youthPREducationJunContents.kpi5 <= '4.8')?'red':(youthPREducationJunContents.kpi5 > '4.8' && youthPREducationJunContents.kpi5 <= '6.4')?'orange':(youthPREducationJunContents.kpi5 > '6.4' && youthPREducationJunContents.kpi5 < '8')?'yellow-7':(youthPREducationJunContents.kpi5 >= '8' && youthPREducationJunContents.kpi5 < '9.6')?'green':(youthPREducationJunContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi5}}
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
                              :color="(youthPREducationJulContents.kpi1 == null)?'grey-2':(youthPREducationJulContents.kpi1 >= '0' && youthPREducationJulContents.kpi1 <= '5.8')?'red':(youthPREducationJulContents.kpi1 > '5.8' && youthPREducationJulContents.kpi1 <= '7.733333333')?'orange':(youthPREducationJulContents.kpi1 > '7.733333333' && youthPREducationJulContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationJulContents.kpi1 >= '9.666666667' && youthPREducationJulContents.kpi1 < '11.6')?'green':(youthPREducationJulContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJulContents.kpi2 == null)?'grey-2':(youthPREducationJulContents.kpi2 >= '0' && youthPREducationJulContents.kpi2 <= '18.2')?'red':(youthPREducationJulContents.kpi2 > '18.2' && youthPREducationJulContents.kpi2 <= '24.26666667')?'orange':(youthPREducationJulContents.kpi2 > '24.26666667' && youthPREducationJulContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationJulContents.kpi2 >= '30.33333333' && youthPREducationJulContents.kpi2 < '36.4')?'green':(youthPREducationJulContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJulContents.kpi3 == null)?'grey-2':(youthPREducationJulContents.kpi3 >= '0' && youthPREducationJulContents.kpi3 <= '2.8')?'red':(youthPREducationJulContents.kpi3 > '2.8' && youthPREducationJulContents.kpi3 <= '3.733333333')?'orange':(youthPREducationJulContents.kpi3 > '3.733333333' && youthPREducationJulContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationJulContents.kpi3 >= '4.666666667' && youthPREducationJulContents.kpi3 < '5.6')?'green':(youthPREducationJulContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJulContents.kpi4 == null)?'grey-2':(youthPREducationJulContents.kpi4 >= '0' && youthPREducationJulContents.kpi4 <= '10.4')?'red':(youthPREducationJulContents.kpi4 > '10.4' && youthPREducationJulContents.kpi4 <= '13.86666667')?'orange':(youthPREducationJulContents.kpi4 > '13.86666667' && youthPREducationJulContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationJulContents.kpi4 >= '17.33333333' && youthPREducationJulContents.kpi4 < '20.8')?'green':(youthPREducationJulContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJulContents.kpi5 == null)?'grey-2':(youthPREducationJulContents.kpi5 >= '0' && youthPREducationJulContents.kpi5 <= '4.8')?'red':(youthPREducationJulContents.kpi5 > '4.8' && youthPREducationJulContents.kpi5 <= '6.4')?'orange':(youthPREducationJulContents.kpi5 > '6.4' && youthPREducationJulContents.kpi5 < '8')?'yellow-7':(youthPREducationJulContents.kpi5 >= '8' && youthPREducationJulContents.kpi5 < '9.6')?'green':(youthPREducationJulContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi5}}
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
                              :color="(youthPREducationAugContents.kpi1 == null)?'grey-2':(youthPREducationAugContents.kpi1 >= '0' && youthPREducationAugContents.kpi1 <= '5.8')?'red':(youthPREducationAugContents.kpi1 > '5.8' && youthPREducationAugContents.kpi1 <= '7.733333333')?'orange':(youthPREducationAugContents.kpi1 > '7.733333333' && youthPREducationAugContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationAugContents.kpi1 >= '9.666666667' && youthPREducationAugContents.kpi1 < '11.6')?'green':(youthPREducationAugContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAugContents.kpi2 == null)?'grey-2':(youthPREducationAugContents.kpi2 >= '0' && youthPREducationAugContents.kpi2 <= '18.2')?'red':(youthPREducationAugContents.kpi2 > '18.2' && youthPREducationAugContents.kpi2 <= '24.26666667')?'orange':(youthPREducationAugContents.kpi2 > '24.26666667' && youthPREducationAugContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationAugContents.kpi2 >= '30.33333333' && youthPREducationAugContents.kpi2 < '36.4')?'green':(youthPREducationAugContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAugContents.kpi3 == null)?'grey-2':(youthPREducationAugContents.kpi3 >= '0' && youthPREducationAugContents.kpi3 <= '2.8')?'red':(youthPREducationAugContents.kpi3 > '2.8' && youthPREducationAugContents.kpi3 <= '3.733333333')?'orange':(youthPREducationAugContents.kpi3 > '3.733333333' && youthPREducationAugContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationAugContents.kpi3 >= '4.666666667' && youthPREducationAugContents.kpi3 < '5.6')?'green':(youthPREducationAugContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAugContents.kpi4 == null)?'grey-2':(youthPREducationAugContents.kpi4 >= '0' && youthPREducationAugContents.kpi4 <= '10.4')?'red':(youthPREducationAugContents.kpi4 > '10.4' && youthPREducationAugContents.kpi4 <= '13.86666667')?'orange':(youthPREducationAugContents.kpi4 > '13.86666667' && youthPREducationAugContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationAugContents.kpi4 >= '17.33333333' && youthPREducationAugContents.kpi4 < '20.8')?'green':(youthPREducationAugContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAugContents.kpi5 == null)?'grey-2':(youthPREducationAugContents.kpi5 >= '0' && youthPREducationAugContents.kpi5 <= '4.8')?'red':(youthPREducationAugContents.kpi5 > '4.8' && youthPREducationAugContents.kpi5 <= '6.4')?'orange':(youthPREducationAugContents.kpi5 > '6.4' && youthPREducationAugContents.kpi5 < '8')?'yellow-7':(youthPREducationAugContents.kpi5 >= '8' && youthPREducationAugContents.kpi5 < '9.6')?'green':(youthPREducationAugContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi5}}
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
                              :color="(youthPREducationSepContents.kpi1 == null)?'grey-2':(youthPREducationSepContents.kpi1 >= '0' && youthPREducationSepContents.kpi1 <= '5.8')?'red':(youthPREducationSepContents.kpi1 > '5.8' && youthPREducationSepContents.kpi1 <= '7.733333333')?'orange':(youthPREducationSepContents.kpi1 > '7.733333333' && youthPREducationSepContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationSepContents.kpi1 >= '9.666666667' && youthPREducationSepContents.kpi1 < '11.6')?'green':(youthPREducationSepContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationSepContents.kpi2 == null)?'grey-2':(youthPREducationSepContents.kpi2 >= '0' && youthPREducationSepContents.kpi2 <= '18.2')?'red':(youthPREducationSepContents.kpi2 > '18.2' && youthPREducationSepContents.kpi2 <= '24.26666667')?'orange':(youthPREducationSepContents.kpi2 > '24.26666667' && youthPREducationSepContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationSepContents.kpi2 >= '30.33333333' && youthPREducationSepContents.kpi2 < '36.4')?'green':(youthPREducationSepContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationSepContents.kpi3 == null)?'grey-2':(youthPREducationSepContents.kpi3 >= '0' && youthPREducationSepContents.kpi3 <= '2.8')?'red':(youthPREducationSepContents.kpi3 > '2.8' && youthPREducationSepContents.kpi3 <= '3.733333333')?'orange':(youthPREducationSepContents.kpi3 > '3.733333333' && youthPREducationSepContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationSepContents.kpi3 >= '4.666666667' && youthPREducationSepContents.kpi3 < '5.6')?'green':(youthPREducationSepContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationSepContents.kpi4 == null)?'grey-2':(youthPREducationSepContents.kpi4 >= '0' && youthPREducationSepContents.kpi4 <= '10.4')?'red':(youthPREducationSepContents.kpi4 > '10.4' && youthPREducationSepContents.kpi4 <= '13.86666667')?'orange':(youthPREducationSepContents.kpi4 > '13.86666667' && youthPREducationSepContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationSepContents.kpi4 >= '17.33333333' && youthPREducationSepContents.kpi4 < '20.8')?'green':(youthPREducationSepContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationSepContents.kpi5 == null)?'grey-2':(youthPREducationSepContents.kpi5 >= '0' && youthPREducationSepContents.kpi5 <= '4.8')?'red':(youthPREducationSepContents.kpi5 > '4.8' && youthPREducationSepContents.kpi5 <= '6.4')?'orange':(youthPREducationSepContents.kpi5 > '6.4' && youthPREducationSepContents.kpi5 < '8')?'yellow-7':(youthPREducationSepContents.kpi5 >= '8' && youthPREducationSepContents.kpi5 < '9.6')?'green':(youthPREducationSepContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi5}}
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
                              :color="(youthPREducationOctContents.kpi1 == null)?'grey-2':(youthPREducationOctContents.kpi1 >= '0' && youthPREducationOctContents.kpi1 <= '5.8')?'red':(youthPREducationOctContents.kpi1 > '5.8' && youthPREducationOctContents.kpi1 <= '7.733333333')?'orange':(youthPREducationOctContents.kpi1 > '7.733333333' && youthPREducationOctContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationOctContents.kpi1 >= '9.666666667' && youthPREducationOctContents.kpi1 < '11.6')?'green':(youthPREducationOctContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationOctContents.kpi2 == null)?'grey-2':(youthPREducationOctContents.kpi2 >= '0' && youthPREducationOctContents.kpi2 <= '18.2')?'red':(youthPREducationOctContents.kpi2 > '18.2' && youthPREducationOctContents.kpi2 <= '24.26666667')?'orange':(youthPREducationOctContents.kpi2 > '24.26666667' && youthPREducationOctContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationOctContents.kpi2 >= '30.33333333' && youthPREducationOctContents.kpi2 < '36.4')?'green':(youthPREducationOctContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationOctContents.kpi3 == null)?'grey-2':(youthPREducationOctContents.kpi3 >= '0' && youthPREducationOctContents.kpi3 <= '2.8')?'red':(youthPREducationOctContents.kpi3 > '2.8' && youthPREducationOctContents.kpi3 <= '3.733333333')?'orange':(youthPREducationOctContents.kpi3 > '3.733333333' && youthPREducationOctContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationOctContents.kpi3 >= '4.666666667' && youthPREducationOctContents.kpi3 < '5.6')?'green':(youthPREducationOctContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationOctContents.kpi4 == null)?'grey-2':(youthPREducationOctContents.kpi4 >= '0' && youthPREducationOctContents.kpi4 <= '10.4')?'red':(youthPREducationOctContents.kpi4 > '10.4' && youthPREducationOctContents.kpi4 <= '13.86666667')?'orange':(youthPREducationOctContents.kpi4 > '13.86666667' && youthPREducationOctContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationOctContents.kpi4 >= '17.33333333' && youthPREducationOctContents.kpi4 < '20.8')?'green':(youthPREducationOctContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationOctContents.kpi5 == null)?'grey-2':(youthPREducationOctContents.kpi5 >= '0' && youthPREducationOctContents.kpi5 <= '4.8')?'red':(youthPREducationOctContents.kpi5 > '4.8' && youthPREducationOctContents.kpi5 <= '6.4')?'orange':(youthPREducationOctContents.kpi5 > '6.4' && youthPREducationOctContents.kpi5 < '8')?'yellow-7':(youthPREducationOctContents.kpi5 >= '8' && youthPREducationOctContents.kpi5 < '9.6')?'green':(youthPREducationOctContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi5}}
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
                              :color="(youthPREducationNovContents.kpi1 == null)?'grey-2':(youthPREducationNovContents.kpi1 >= '0' && youthPREducationNovContents.kpi1 <= '5.8')?'red':(youthPREducationNovContents.kpi1 > '5.8' && youthPREducationNovContents.kpi1 <= '7.733333333')?'orange':(youthPREducationNovContents.kpi1 > '7.733333333' && youthPREducationNovContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationNovContents.kpi1 >= '9.666666667' && youthPREducationNovContents.kpi1 < '11.6')?'green':(youthPREducationNovContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationNovContents.kpi2 == null)?'grey-2':(youthPREducationNovContents.kpi2 >= '0' && youthPREducationNovContents.kpi2 <= '18.2')?'red':(youthPREducationNovContents.kpi2 > '18.2' && youthPREducationNovContents.kpi2 <= '24.26666667')?'orange':(youthPREducationNovContents.kpi2 > '24.26666667' && youthPREducationNovContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationNovContents.kpi2 >= '30.33333333' && youthPREducationNovContents.kpi2 < '36.4')?'green':(youthPREducationNovContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationNovContents.kpi3 == null)?'grey-2':(youthPREducationNovContents.kpi3 >= '0' && youthPREducationNovContents.kpi3 <= '2.8')?'red':(youthPREducationNovContents.kpi3 > '2.8' && youthPREducationNovContents.kpi3 <= '3.733333333')?'orange':(youthPREducationNovContents.kpi3 > '3.733333333' && youthPREducationNovContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationNovContents.kpi3 >= '4.666666667' && youthPREducationNovContents.kpi3 < '5.6')?'green':(youthPREducationNovContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationNovContents.kpi4 == null)?'grey-2':(youthPREducationNovContents.kpi4 >= '0' && youthPREducationNovContents.kpi4 <= '10.4')?'red':(youthPREducationNovContents.kpi4 > '10.4' && youthPREducationNovContents.kpi4 <= '13.86666667')?'orange':(youthPREducationNovContents.kpi4 > '13.86666667' && youthPREducationNovContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationNovContents.kpi4 >= '17.33333333' && youthPREducationNovContents.kpi4 < '20.8')?'green':(youthPREducationNovContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationNovContents.kpi5 == null)?'grey-2':(youthPREducationNovContents.kpi5 >= '0' && youthPREducationNovContents.kpi5 <= '4.8')?'red':(youthPREducationNovContents.kpi5 > '4.8' && youthPREducationNovContents.kpi5 <= '6.4')?'orange':(youthPREducationNovContents.kpi5 > '6.4' && youthPREducationNovContents.kpi5 < '8')?'yellow-7':(youthPREducationNovContents.kpi5 >= '8' && youthPREducationNovContents.kpi5 < '9.6')?'green':(youthPREducationNovContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi5}}
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
                              :color="(youthPREducationDecContents.kpi1 == null)?'grey-2':(youthPREducationDecContents.kpi1 >= '0' && youthPREducationDecContents.kpi1 <= '5.8')?'red':(youthPREducationDecContents.kpi1 > '5.8' && youthPREducationDecContents.kpi1 <= '7.733333333')?'orange':(youthPREducationDecContents.kpi1 > '7.733333333' && youthPREducationDecContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationDecContents.kpi1 >= '9.666666667' && youthPREducationDecContents.kpi1 < '11.6')?'green':(youthPREducationDecContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationDecContents.kpi2 == null)?'grey-2':(youthPREducationDecContents.kpi2 >= '0' && youthPREducationDecContents.kpi2 <= '18.2')?'red':(youthPREducationDecContents.kpi2 > '18.2' && youthPREducationDecContents.kpi2 <= '24.26666667')?'orange':(youthPREducationDecContents.kpi2 > '24.26666667' && youthPREducationDecContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationDecContents.kpi2 >= '30.33333333' && youthPREducationDecContents.kpi2 < '36.4')?'green':(youthPREducationDecContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationDecContents.kpi3 == null)?'grey-2':(youthPREducationDecContents.kpi3 >= '0' && youthPREducationDecContents.kpi3 <= '2.8')?'red':(youthPREducationDecContents.kpi3 > '2.8' && youthPREducationDecContents.kpi3 <= '3.733333333')?'orange':(youthPREducationDecContents.kpi3 > '3.733333333' && youthPREducationDecContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationDecContents.kpi3 >= '4.666666667' && youthPREducationDecContents.kpi3 < '5.6')?'green':(youthPREducationDecContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationDecContents.kpi4 == null)?'grey-2':(youthPREducationDecContents.kpi4 >= '0' && youthPREducationDecContents.kpi4 <= '10.4')?'red':(youthPREducationDecContents.kpi4 > '10.4' && youthPREducationDecContents.kpi4 <= '13.86666667')?'orange':(youthPREducationDecContents.kpi4 > '13.86666667' && youthPREducationDecContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationDecContents.kpi4 >= '17.33333333' && youthPREducationDecContents.kpi4 < '20.8')?'green':(youthPREducationDecContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationDecContents.kpi5 == null)?'grey-2':(youthPREducationDecContents.kpi5 >= '0' && youthPREducationDecContents.kpi5 <= '4.8')?'red':(youthPREducationDecContents.kpi5 > '4.8' && youthPREducationDecContents.kpi5 <= '6.4')?'orange':(youthPREducationDecContents.kpi5 > '6.4' && youthPREducationDecContents.kpi5 < '8')?'yellow-7':(youthPREducationDecContents.kpi5 >= '8' && youthPREducationDecContents.kpi5 < '9.6')?'green':(youthPREducationDecContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi5}}
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
                              :color="(youthPREducationJanContents.kpi1 == null)?'grey-2':(youthPREducationJanContents.kpi1 >= '0' && youthPREducationJanContents.kpi1 <= '5.8')?'red':(youthPREducationJanContents.kpi1 > '5.8' && youthPREducationJanContents.kpi1 <= '7.733333333')?'orange':(youthPREducationJanContents.kpi1 > '7.733333333' && youthPREducationJanContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationJanContents.kpi1 >= '9.666666667' && youthPREducationJanContents.kpi1 < '11.6')?'green':(youthPREducationJanContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJanContents.kpi2 == null)?'grey-2':(youthPREducationJanContents.kpi2 >= '0' && youthPREducationJanContents.kpi2 <= '18.2')?'red':(youthPREducationJanContents.kpi2 > '18.2' && youthPREducationJanContents.kpi2 <= '24.26666667')?'orange':(youthPREducationJanContents.kpi2 > '24.26666667' && youthPREducationJanContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationJanContents.kpi2 >= '30.33333333' && youthPREducationJanContents.kpi2 < '36.4')?'green':(youthPREducationJanContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJanContents.kpi3 == null)?'grey-2':(youthPREducationJanContents.kpi3 >= '0' && youthPREducationJanContents.kpi3 <= '2.8')?'red':(youthPREducationJanContents.kpi3 > '2.8' && youthPREducationJanContents.kpi3 <= '3.733333333')?'orange':(youthPREducationJanContents.kpi3 > '3.733333333' && youthPREducationJanContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationJanContents.kpi3 >= '4.666666667' && youthPREducationJanContents.kpi3 < '5.6')?'green':(youthPREducationJanContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJanContents.kpi4 == null)?'grey-2':(youthPREducationJanContents.kpi4 >= '0' && youthPREducationJanContents.kpi4 <= '10.4')?'red':(youthPREducationJanContents.kpi4 > '10.4' && youthPREducationJanContents.kpi4 <= '13.86666667')?'orange':(youthPREducationJanContents.kpi4 > '13.86666667' && youthPREducationJanContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationJanContents.kpi4 >= '17.33333333' && youthPREducationJanContents.kpi4 < '20.8')?'green':(youthPREducationJanContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJanContents.kpi5 == null)?'grey-2':(youthPREducationJanContents.kpi5 >= '0' && youthPREducationJanContents.kpi5 <= '4.8')?'red':(youthPREducationJanContents.kpi5 > '4.8' && youthPREducationJanContents.kpi5 <= '6.4')?'orange':(youthPREducationJanContents.kpi5 > '6.4' && youthPREducationJanContents.kpi5 < '8')?'yellow-7':(youthPREducationJanContents.kpi5 >= '8' && youthPREducationJanContents.kpi5 < '9.6')?'green':(youthPREducationJanContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJanContents.kpi5}}
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
                              :color="(youthPREducationFebContents.kpi1 == null)?'grey-2':(youthPREducationFebContents.kpi1 >= '0' && youthPREducationFebContents.kpi1 <= '5.8')?'red':(youthPREducationFebContents.kpi1 > '5.8' && youthPREducationFebContents.kpi1 <= '7.733333333')?'orange':(youthPREducationFebContents.kpi1 > '7.733333333' && youthPREducationFebContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationFebContents.kpi1 >= '9.666666667' && youthPREducationFebContents.kpi1 < '11.6')?'green':(youthPREducationFebContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationFebContents.kpi2 == null)?'grey-2':(youthPREducationFebContents.kpi2 >= '0' && youthPREducationFebContents.kpi2 <= '18.2')?'red':(youthPREducationFebContents.kpi2 > '18.2' && youthPREducationFebContents.kpi2 <= '24.26666667')?'orange':(youthPREducationFebContents.kpi2 > '24.26666667' && youthPREducationFebContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationFebContents.kpi2 >= '30.33333333' && youthPREducationFebContents.kpi2 < '36.4')?'green':(youthPREducationFebContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationFebContents.kpi3 == null)?'grey-2':(youthPREducationFebContents.kpi3 >= '0' && youthPREducationFebContents.kpi3 <= '2.8')?'red':(youthPREducationFebContents.kpi3 > '2.8' && youthPREducationFebContents.kpi3 <= '3.733333333')?'orange':(youthPREducationFebContents.kpi3 > '3.733333333' && youthPREducationFebContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationFebContents.kpi3 >= '4.666666667' && youthPREducationFebContents.kpi3 < '5.6')?'green':(youthPREducationFebContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationFebContents.kpi4 == null)?'grey-2':(youthPREducationFebContents.kpi4 >= '0' && youthPREducationFebContents.kpi4 <= '10.4')?'red':(youthPREducationFebContents.kpi4 > '10.4' && youthPREducationFebContents.kpi4 <= '13.86666667')?'orange':(youthPREducationFebContents.kpi4 > '13.86666667' && youthPREducationFebContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationFebContents.kpi4 >= '17.33333333' && youthPREducationFebContents.kpi4 < '20.8')?'green':(youthPREducationFebContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationFebContents.kpi5 == null)?'grey-2':(youthPREducationFebContents.kpi5 >= '0' && youthPREducationFebContents.kpi5 <= '4.8')?'red':(youthPREducationFebContents.kpi5 > '4.8' && youthPREducationFebContents.kpi5 <= '6.4')?'orange':(youthPREducationFebContents.kpi5 > '6.4' && youthPREducationFebContents.kpi5 < '8')?'yellow-7':(youthPREducationFebContents.kpi5 >= '8' && youthPREducationFebContents.kpi5 < '9.6')?'green':(youthPREducationFebContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationFebContents.kpi5}}
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
                              :color="(youthPREducationMarContents.kpi1 == null)?'grey-2':(youthPREducationMarContents.kpi1 >= '0' && youthPREducationMarContents.kpi1 <= '5.8')?'red':(youthPREducationMarContents.kpi1 > '5.8' && youthPREducationMarContents.kpi1 <= '7.733333333')?'orange':(youthPREducationMarContents.kpi1 > '7.733333333' && youthPREducationMarContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationMarContents.kpi1 >= '9.666666667' && youthPREducationMarContents.kpi1 < '11.6')?'green':(youthPREducationMarContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMarContents.kpi2 == null)?'grey-2':(youthPREducationMarContents.kpi2 >= '0' && youthPREducationMarContents.kpi2 <= '18.2')?'red':(youthPREducationMarContents.kpi2 > '18.2' && youthPREducationMarContents.kpi2 <= '24.26666667')?'orange':(youthPREducationMarContents.kpi2 > '24.26666667' && youthPREducationMarContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationMarContents.kpi2 >= '30.33333333' && youthPREducationMarContents.kpi2 < '36.4')?'green':(youthPREducationMarContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMarContents.kpi3 == null)?'grey-2':(youthPREducationMarContents.kpi3 >= '0' && youthPREducationMarContents.kpi3 <= '2.8')?'red':(youthPREducationMarContents.kpi3 > '2.8' && youthPREducationMarContents.kpi3 <= '3.733333333')?'orange':(youthPREducationMarContents.kpi3 > '3.733333333' && youthPREducationMarContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationMarContents.kpi3 >= '4.666666667' && youthPREducationMarContents.kpi3 < '5.6')?'green':(youthPREducationMarContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMarContents.kpi4 == null)?'grey-2':(youthPREducationMarContents.kpi4 >= '0' && youthPREducationMarContents.kpi4 <= '10.4')?'red':(youthPREducationMarContents.kpi4 > '10.4' && youthPREducationMarContents.kpi4 <= '13.86666667')?'orange':(youthPREducationMarContents.kpi4 > '13.86666667' && youthPREducationMarContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationMarContents.kpi4 >= '17.33333333' && youthPREducationMarContents.kpi4 < '20.8')?'green':(youthPREducationMarContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMarContents.kpi5 == null)?'grey-2':(youthPREducationMarContents.kpi5 >= '0' && youthPREducationMarContents.kpi5 <= '4.8')?'red':(youthPREducationMarContents.kpi5 > '4.8' && youthPREducationMarContents.kpi5 <= '6.4')?'orange':(youthPREducationMarContents.kpi5 > '6.4' && youthPREducationMarContents.kpi5 < '8')?'yellow-7':(youthPREducationMarContents.kpi5 >= '8' && youthPREducationMarContents.kpi5 < '9.6')?'green':(youthPREducationMarContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMarContents.kpi5}}
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
                              :color="(youthPREducationAprContents.kpi1 == null)?'grey-2':(youthPREducationAprContents.kpi1 >= '0' && youthPREducationAprContents.kpi1 <= '5.8')?'red':(youthPREducationAprContents.kpi1 > '5.8' && youthPREducationAprContents.kpi1 <= '7.733333333')?'orange':(youthPREducationAprContents.kpi1 > '7.733333333' && youthPREducationAprContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationAprContents.kpi1 >= '9.666666667' && youthPREducationAprContents.kpi1 < '11.6')?'green':(youthPREducationAprContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAprContents.kpi2 == null)?'grey-2':(youthPREducationAprContents.kpi2 >= '0' && youthPREducationAprContents.kpi2 <= '18.2')?'red':(youthPREducationAprContents.kpi2 > '18.2' && youthPREducationAprContents.kpi2 <= '24.26666667')?'orange':(youthPREducationAprContents.kpi2 > '24.26666667' && youthPREducationAprContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationAprContents.kpi2 >= '30.33333333' && youthPREducationAprContents.kpi2 < '36.4')?'green':(youthPREducationAprContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAprContents.kpi3 == null)?'grey-2':(youthPREducationAprContents.kpi3 >= '0' && youthPREducationAprContents.kpi3 <= '2.8')?'red':(youthPREducationAprContents.kpi3 > '2.8' && youthPREducationAprContents.kpi3 <= '3.733333333')?'orange':(youthPREducationAprContents.kpi3 > '3.733333333' && youthPREducationAprContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationAprContents.kpi3 >= '4.666666667' && youthPREducationAprContents.kpi3 < '5.6')?'green':(youthPREducationAprContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAprContents.kpi4 == null)?'grey-2':(youthPREducationAprContents.kpi4 >= '0' && youthPREducationAprContents.kpi4 <= '10.4')?'red':(youthPREducationAprContents.kpi4 > '10.4' && youthPREducationAprContents.kpi4 <= '13.86666667')?'orange':(youthPREducationAprContents.kpi4 > '13.86666667' && youthPREducationAprContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationAprContents.kpi4 >= '17.33333333' && youthPREducationAprContents.kpi4 < '20.8')?'green':(youthPREducationAprContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAprContents.kpi5 == null)?'grey-2':(youthPREducationAprContents.kpi5 >= '0' && youthPREducationAprContents.kpi5 <= '4.8')?'red':(youthPREducationAprContents.kpi5 > '4.8' && youthPREducationAprContents.kpi5 <= '6.4')?'orange':(youthPREducationAprContents.kpi5 > '6.4' && youthPREducationAprContents.kpi5 < '8')?'yellow-7':(youthPREducationAprContents.kpi5 >= '8' && youthPREducationAprContents.kpi5 < '9.6')?'green':(youthPREducationAprContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAprContents.kpi5}}
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
                              :color="(youthPREducationMayContents.kpi1 == null)?'grey-2':(youthPREducationMayContents.kpi1 >= '0' && youthPREducationMayContents.kpi1 <= '5.8')?'red':(youthPREducationMayContents.kpi1 > '5.8' && youthPREducationMayContents.kpi1 <= '7.733333333')?'orange':(youthPREducationMayContents.kpi1 > '7.733333333' && youthPREducationMayContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationMayContents.kpi1 >= '9.666666667' && youthPREducationMayContents.kpi1 < '11.6')?'green':(youthPREducationMayContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMayContents.kpi2 == null)?'grey-2':(youthPREducationMayContents.kpi2 >= '0' && youthPREducationMayContents.kpi2 <= '18.2')?'red':(youthPREducationMayContents.kpi2 > '18.2' && youthPREducationMayContents.kpi2 <= '24.26666667')?'orange':(youthPREducationMayContents.kpi2 > '24.26666667' && youthPREducationMayContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationMayContents.kpi2 >= '30.33333333' && youthPREducationMayContents.kpi2 < '36.4')?'green':(youthPREducationMayContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMayContents.kpi3 == null)?'grey-2':(youthPREducationMayContents.kpi3 >= '0' && youthPREducationMayContents.kpi3 <= '2.8')?'red':(youthPREducationMayContents.kpi3 > '2.8' && youthPREducationMayContents.kpi3 <= '3.733333333')?'orange':(youthPREducationMayContents.kpi3 > '3.733333333' && youthPREducationMayContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationMayContents.kpi3 >= '4.666666667' && youthPREducationMayContents.kpi3 < '5.6')?'green':(youthPREducationMayContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMayContents.kpi4 == null)?'grey-2':(youthPREducationMayContents.kpi4 >= '0' && youthPREducationMayContents.kpi4 <= '10.4')?'red':(youthPREducationMayContents.kpi4 > '10.4' && youthPREducationMayContents.kpi4 <= '13.86666667')?'orange':(youthPREducationMayContents.kpi4 > '13.86666667' && youthPREducationMayContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationMayContents.kpi4 >= '17.33333333' && youthPREducationMayContents.kpi4 < '20.8')?'green':(youthPREducationMayContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationMayContents.kpi5 == null)?'grey-2':(youthPREducationMayContents.kpi5 >= '0' && youthPREducationMayContents.kpi5 <= '4.8')?'red':(youthPREducationMayContents.kpi5 > '4.8' && youthPREducationMayContents.kpi5 <= '6.4')?'orange':(youthPREducationMayContents.kpi5 > '6.4' && youthPREducationMayContents.kpi5 < '8')?'yellow-7':(youthPREducationMayContents.kpi5 >= '8' && youthPREducationMayContents.kpi5 < '9.6')?'green':(youthPREducationMayContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationMayContents.kpi5}}
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
                              :color="(youthPREducationJunContents.kpi1 == null)?'grey-2':(youthPREducationJunContents.kpi1 >= '0' && youthPREducationJunContents.kpi1 <= '5.8')?'red':(youthPREducationJunContents.kpi1 > '5.8' && youthPREducationJunContents.kpi1 <= '7.733333333')?'orange':(youthPREducationJunContents.kpi1 > '7.733333333' && youthPREducationJunContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationJunContents.kpi1 >= '9.666666667' && youthPREducationJunContents.kpi1 < '11.6')?'green':(youthPREducationJunContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJunContents.kpi2 == null)?'grey-2':(youthPREducationJunContents.kpi2 >= '0' && youthPREducationJunContents.kpi2 <= '18.2')?'red':(youthPREducationJunContents.kpi2 > '18.2' && youthPREducationJunContents.kpi2 <= '24.26666667')?'orange':(youthPREducationJunContents.kpi2 > '24.26666667' && youthPREducationJunContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationJunContents.kpi2 >= '30.33333333' && youthPREducationJunContents.kpi2 < '36.4')?'green':(youthPREducationJunContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJunContents.kpi3 == null)?'grey-2':(youthPREducationJunContents.kpi3 >= '0' && youthPREducationJunContents.kpi3 <= '2.8')?'red':(youthPREducationJunContents.kpi3 > '2.8' && youthPREducationJunContents.kpi3 <= '3.733333333')?'orange':(youthPREducationJunContents.kpi3 > '3.733333333' && youthPREducationJunContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationJunContents.kpi3 >= '4.666666667' && youthPREducationJunContents.kpi3 < '5.6')?'green':(youthPREducationJunContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJunContents.kpi4 == null)?'grey-2':(youthPREducationJunContents.kpi4 >= '0' && youthPREducationJunContents.kpi4 <= '10.4')?'red':(youthPREducationJunContents.kpi4 > '10.4' && youthPREducationJunContents.kpi4 <= '13.86666667')?'orange':(youthPREducationJunContents.kpi4 > '13.86666667' && youthPREducationJunContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationJunContents.kpi4 >= '17.33333333' && youthPREducationJunContents.kpi4 < '20.8')?'green':(youthPREducationJunContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJunContents.kpi5 == null)?'grey-2':(youthPREducationJunContents.kpi5 >= '0' && youthPREducationJunContents.kpi5 <= '4.8')?'red':(youthPREducationJunContents.kpi5 > '4.8' && youthPREducationJunContents.kpi5 <= '6.4')?'orange':(youthPREducationJunContents.kpi5 > '6.4' && youthPREducationJunContents.kpi5 < '8')?'yellow-7':(youthPREducationJunContents.kpi5 >= '8' && youthPREducationJunContents.kpi5 < '9.6')?'green':(youthPREducationJunContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJunContents.kpi5}}
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
                              :color="(youthPREducationJulContents.kpi1 == null)?'grey-2':(youthPREducationJulContents.kpi1 >= '0' && youthPREducationJulContents.kpi1 <= '5.8')?'red':(youthPREducationJulContents.kpi1 > '5.8' && youthPREducationJulContents.kpi1 <= '7.733333333')?'orange':(youthPREducationJulContents.kpi1 > '7.733333333' && youthPREducationJulContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationJulContents.kpi1 >= '9.666666667' && youthPREducationJulContents.kpi1 < '11.6')?'green':(youthPREducationJulContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJulContents.kpi2 == null)?'grey-2':(youthPREducationJulContents.kpi2 >= '0' && youthPREducationJulContents.kpi2 <= '18.2')?'red':(youthPREducationJulContents.kpi2 > '18.2' && youthPREducationJulContents.kpi2 <= '24.26666667')?'orange':(youthPREducationJulContents.kpi2 > '24.26666667' && youthPREducationJulContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationJulContents.kpi2 >= '30.33333333' && youthPREducationJulContents.kpi2 < '36.4')?'green':(youthPREducationJulContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJulContents.kpi3 == null)?'grey-2':(youthPREducationJulContents.kpi3 >= '0' && youthPREducationJulContents.kpi3 <= '2.8')?'red':(youthPREducationJulContents.kpi3 > '2.8' && youthPREducationJulContents.kpi3 <= '3.733333333')?'orange':(youthPREducationJulContents.kpi3 > '3.733333333' && youthPREducationJulContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationJulContents.kpi3 >= '4.666666667' && youthPREducationJulContents.kpi3 < '5.6')?'green':(youthPREducationJulContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJulContents.kpi4 == null)?'grey-2':(youthPREducationJulContents.kpi4 >= '0' && youthPREducationJulContents.kpi4 <= '10.4')?'red':(youthPREducationJulContents.kpi4 > '10.4' && youthPREducationJulContents.kpi4 <= '13.86666667')?'orange':(youthPREducationJulContents.kpi4 > '13.86666667' && youthPREducationJulContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationJulContents.kpi4 >= '17.33333333' && youthPREducationJulContents.kpi4 < '20.8')?'green':(youthPREducationJulContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationJulContents.kpi5 == null)?'grey-2':(youthPREducationJulContents.kpi5 >= '0' && youthPREducationJulContents.kpi5 <= '4.8')?'red':(youthPREducationJulContents.kpi5 > '4.8' && youthPREducationJulContents.kpi5 <= '6.4')?'orange':(youthPREducationJulContents.kpi5 > '6.4' && youthPREducationJulContents.kpi5 < '8')?'yellow-7':(youthPREducationJulContents.kpi5 >= '8' && youthPREducationJulContents.kpi5 < '9.6')?'green':(youthPREducationJulContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationJulContents.kpi5}}
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
                              :color="(youthPREducationAugContents.kpi1 == null)?'grey-2':(youthPREducationAugContents.kpi1 >= '0' && youthPREducationAugContents.kpi1 <= '5.8')?'red':(youthPREducationAugContents.kpi1 > '5.8' && youthPREducationAugContents.kpi1 <= '7.733333333')?'orange':(youthPREducationAugContents.kpi1 > '7.733333333' && youthPREducationAugContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationAugContents.kpi1 >= '9.666666667' && youthPREducationAugContents.kpi1 < '11.6')?'green':(youthPREducationAugContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAugContents.kpi2 == null)?'grey-2':(youthPREducationAugContents.kpi2 >= '0' && youthPREducationAugContents.kpi2 <= '18.2')?'red':(youthPREducationAugContents.kpi2 > '18.2' && youthPREducationAugContents.kpi2 <= '24.26666667')?'orange':(youthPREducationAugContents.kpi2 > '24.26666667' && youthPREducationAugContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationAugContents.kpi2 >= '30.33333333' && youthPREducationAugContents.kpi2 < '36.4')?'green':(youthPREducationAugContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAugContents.kpi3 == null)?'grey-2':(youthPREducationAugContents.kpi3 >= '0' && youthPREducationAugContents.kpi3 <= '2.8')?'red':(youthPREducationAugContents.kpi3 > '2.8' && youthPREducationAugContents.kpi3 <= '3.733333333')?'orange':(youthPREducationAugContents.kpi3 > '3.733333333' && youthPREducationAugContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationAugContents.kpi3 >= '4.666666667' && youthPREducationAugContents.kpi3 < '5.6')?'green':(youthPREducationAugContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAugContents.kpi4 == null)?'grey-2':(youthPREducationAugContents.kpi4 >= '0' && youthPREducationAugContents.kpi4 <= '10.4')?'red':(youthPREducationAugContents.kpi4 > '10.4' && youthPREducationAugContents.kpi4 <= '13.86666667')?'orange':(youthPREducationAugContents.kpi4 > '13.86666667' && youthPREducationAugContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationAugContents.kpi4 >= '17.33333333' && youthPREducationAugContents.kpi4 < '20.8')?'green':(youthPREducationAugContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationAugContents.kpi5 == null)?'grey-2':(youthPREducationAugContents.kpi5 >= '0' && youthPREducationAugContents.kpi5 <= '4.8')?'red':(youthPREducationAugContents.kpi5 > '4.8' && youthPREducationAugContents.kpi5 <= '6.4')?'orange':(youthPREducationAugContents.kpi5 > '6.4' && youthPREducationAugContents.kpi5 < '8')?'yellow-7':(youthPREducationAugContents.kpi5 >= '8' && youthPREducationAugContents.kpi5 < '9.6')?'green':(youthPREducationAugContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationAugContents.kpi5}}
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
                              :color="(youthPREducationSepContents.kpi1 == null)?'grey-2':(youthPREducationSepContents.kpi1 >= '0' && youthPREducationSepContents.kpi1 <= '5.8')?'red':(youthPREducationSepContents.kpi1 > '5.8' && youthPREducationSepContents.kpi1 <= '7.733333333')?'orange':(youthPREducationSepContents.kpi1 > '7.733333333' && youthPREducationSepContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationSepContents.kpi1 >= '9.666666667' && youthPREducationSepContents.kpi1 < '11.6')?'green':(youthPREducationSepContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationSepContents.kpi2 == null)?'grey-2':(youthPREducationSepContents.kpi2 >= '0' && youthPREducationSepContents.kpi2 <= '18.2')?'red':(youthPREducationSepContents.kpi2 > '18.2' && youthPREducationSepContents.kpi2 <= '24.26666667')?'orange':(youthPREducationSepContents.kpi2 > '24.26666667' && youthPREducationSepContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationSepContents.kpi2 >= '30.33333333' && youthPREducationSepContents.kpi2 < '36.4')?'green':(youthPREducationSepContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationSepContents.kpi3 == null)?'grey-2':(youthPREducationSepContents.kpi3 >= '0' && youthPREducationSepContents.kpi3 <= '2.8')?'red':(youthPREducationSepContents.kpi3 > '2.8' && youthPREducationSepContents.kpi3 <= '3.733333333')?'orange':(youthPREducationSepContents.kpi3 > '3.733333333' && youthPREducationSepContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationSepContents.kpi3 >= '4.666666667' && youthPREducationSepContents.kpi3 < '5.6')?'green':(youthPREducationSepContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationSepContents.kpi4 == null)?'grey-2':(youthPREducationSepContents.kpi4 >= '0' && youthPREducationSepContents.kpi4 <= '10.4')?'red':(youthPREducationSepContents.kpi4 > '10.4' && youthPREducationSepContents.kpi4 <= '13.86666667')?'orange':(youthPREducationSepContents.kpi4 > '13.86666667' && youthPREducationSepContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationSepContents.kpi4 >= '17.33333333' && youthPREducationSepContents.kpi4 < '20.8')?'green':(youthPREducationSepContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationSepContents.kpi5 == null)?'grey-2':(youthPREducationSepContents.kpi5 >= '0' && youthPREducationSepContents.kpi5 <= '4.8')?'red':(youthPREducationSepContents.kpi5 > '4.8' && youthPREducationSepContents.kpi5 <= '6.4')?'orange':(youthPREducationSepContents.kpi5 > '6.4' && youthPREducationSepContents.kpi5 < '8')?'yellow-7':(youthPREducationSepContents.kpi5 >= '8' && youthPREducationSepContents.kpi5 < '9.6')?'green':(youthPREducationSepContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationSepContents.kpi5}}
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
                              :color="(youthPREducationOctContents.kpi1 == null)?'grey-2':(youthPREducationOctContents.kpi1 >= '0' && youthPREducationOctContents.kpi1 <= '5.8')?'red':(youthPREducationOctContents.kpi1 > '5.8' && youthPREducationOctContents.kpi1 <= '7.733333333')?'orange':(youthPREducationOctContents.kpi1 > '7.733333333' && youthPREducationOctContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationOctContents.kpi1 >= '9.666666667' && youthPREducationOctContents.kpi1 < '11.6')?'green':(youthPREducationOctContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationOctContents.kpi2 == null)?'grey-2':(youthPREducationOctContents.kpi2 >= '0' && youthPREducationOctContents.kpi2 <= '18.2')?'red':(youthPREducationOctContents.kpi2 > '18.2' && youthPREducationOctContents.kpi2 <= '24.26666667')?'orange':(youthPREducationOctContents.kpi2 > '24.26666667' && youthPREducationOctContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationOctContents.kpi2 >= '30.33333333' && youthPREducationOctContents.kpi2 < '36.4')?'green':(youthPREducationOctContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationOctContents.kpi3 == null)?'grey-2':(youthPREducationOctContents.kpi3 >= '0' && youthPREducationOctContents.kpi3 <= '2.8')?'red':(youthPREducationOctContents.kpi3 > '2.8' && youthPREducationOctContents.kpi3 <= '3.733333333')?'orange':(youthPREducationOctContents.kpi3 > '3.733333333' && youthPREducationOctContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationOctContents.kpi3 >= '4.666666667' && youthPREducationOctContents.kpi3 < '5.6')?'green':(youthPREducationOctContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationOctContents.kpi4 == null)?'grey-2':(youthPREducationOctContents.kpi4 >= '0' && youthPREducationOctContents.kpi4 <= '10.4')?'red':(youthPREducationOctContents.kpi4 > '10.4' && youthPREducationOctContents.kpi4 <= '13.86666667')?'orange':(youthPREducationOctContents.kpi4 > '13.86666667' && youthPREducationOctContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationOctContents.kpi4 >= '17.33333333' && youthPREducationOctContents.kpi4 < '20.8')?'green':(youthPREducationOctContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationOctContents.kpi5 == null)?'grey-2':(youthPREducationOctContents.kpi5 >= '0' && youthPREducationOctContents.kpi5 <= '4.8')?'red':(youthPREducationOctContents.kpi5 > '4.8' && youthPREducationOctContents.kpi5 <= '6.4')?'orange':(youthPREducationOctContents.kpi5 > '6.4' && youthPREducationOctContents.kpi5 < '8')?'yellow-7':(youthPREducationOctContents.kpi5 >= '8' && youthPREducationOctContents.kpi5 < '9.6')?'green':(youthPREducationOctContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationOctContents.kpi5}}
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
                              :color="(youthPREducationNovContents.kpi1 == null)?'grey-2':(youthPREducationNovContents.kpi1 >= '0' && youthPREducationNovContents.kpi1 <= '5.8')?'red':(youthPREducationNovContents.kpi1 > '5.8' && youthPREducationNovContents.kpi1 <= '7.733333333')?'orange':(youthPREducationNovContents.kpi1 > '7.733333333' && youthPREducationNovContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationNovContents.kpi1 >= '9.666666667' && youthPREducationNovContents.kpi1 < '11.6')?'green':(youthPREducationNovContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationNovContents.kpi2 == null)?'grey-2':(youthPREducationNovContents.kpi2 >= '0' && youthPREducationNovContents.kpi2 <= '18.2')?'red':(youthPREducationNovContents.kpi2 > '18.2' && youthPREducationNovContents.kpi2 <= '24.26666667')?'orange':(youthPREducationNovContents.kpi2 > '24.26666667' && youthPREducationNovContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationNovContents.kpi2 >= '30.33333333' && youthPREducationNovContents.kpi2 < '36.4')?'green':(youthPREducationNovContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationNovContents.kpi3 == null)?'grey-2':(youthPREducationNovContents.kpi3 >= '0' && youthPREducationNovContents.kpi3 <= '2.8')?'red':(youthPREducationNovContents.kpi3 > '2.8' && youthPREducationNovContents.kpi3 <= '3.733333333')?'orange':(youthPREducationNovContents.kpi3 > '3.733333333' && youthPREducationNovContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationNovContents.kpi3 >= '4.666666667' && youthPREducationNovContents.kpi3 < '5.6')?'green':(youthPREducationNovContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationNovContents.kpi4 == null)?'grey-2':(youthPREducationNovContents.kpi4 >= '0' && youthPREducationNovContents.kpi4 <= '10.4')?'red':(youthPREducationNovContents.kpi4 > '10.4' && youthPREducationNovContents.kpi4 <= '13.86666667')?'orange':(youthPREducationNovContents.kpi4 > '13.86666667' && youthPREducationNovContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationNovContents.kpi4 >= '17.33333333' && youthPREducationNovContents.kpi4 < '20.8')?'green':(youthPREducationNovContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationNovContents.kpi5 == null)?'grey-2':(youthPREducationNovContents.kpi5 >= '0' && youthPREducationNovContents.kpi5 <= '4.8')?'red':(youthPREducationNovContents.kpi5 > '4.8' && youthPREducationNovContents.kpi5 <= '6.4')?'orange':(youthPREducationNovContents.kpi5 > '6.4' && youthPREducationNovContents.kpi5 < '8')?'yellow-7':(youthPREducationNovContents.kpi5 >= '8' && youthPREducationNovContents.kpi5 < '9.6')?'green':(youthPREducationNovContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationNovContents.kpi5}}
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
                              :color="(youthPREducationDecContents.kpi1 == null)?'grey-2':(youthPREducationDecContents.kpi1 >= '0' && youthPREducationDecContents.kpi1 <= '5.8')?'red':(youthPREducationDecContents.kpi1 > '5.8' && youthPREducationDecContents.kpi1 <= '7.733333333')?'orange':(youthPREducationDecContents.kpi1 > '7.733333333' && youthPREducationDecContents.kpi1 < '9.666666667')?'yellow-7':(youthPREducationDecContents.kpi1 >= '9.666666667' && youthPREducationDecContents.kpi1 < '11.6')?'green':(youthPREducationDecContents.kpi1 >= '11.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi1}}
                              <q-tooltip># of unique children</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationDecContents.kpi2 == null)?'grey-2':(youthPREducationDecContents.kpi2 >= '0' && youthPREducationDecContents.kpi2 <= '18.2')?'red':(youthPREducationDecContents.kpi2 > '18.2' && youthPREducationDecContents.kpi2 <= '24.26666667')?'orange':(youthPREducationDecContents.kpi2 > '24.26666667' && youthPREducationDecContents.kpi2 < '30.33333333')?'yellow-7':(youthPREducationDecContents.kpi2 >= '30.33333333' && youthPREducationDecContents.kpi2 < '36.4')?'green':(youthPREducationDecContents.kpi2 >= '36.4'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi2}}
                              <q-tooltip># of total children</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationDecContents.kpi3 == null)?'grey-2':(youthPREducationDecContents.kpi3 >= '0' && youthPREducationDecContents.kpi3 <= '2.8')?'red':(youthPREducationDecContents.kpi3 > '2.8' && youthPREducationDecContents.kpi3 <= '3.733333333')?'orange':(youthPREducationDecContents.kpi3 > '3.733333333' && youthPREducationDecContents.kpi3 < '4.666666667')?'yellow-7':(youthPREducationDecContents.kpi3 >= '4.666666667' && youthPREducationDecContents.kpi3 < '5.6')?'green':(youthPREducationDecContents.kpi3 >= '5.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi3}}
                              <q-tooltip># of unique youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationDecContents.kpi4 == null)?'grey-2':(youthPREducationDecContents.kpi4 >= '0' && youthPREducationDecContents.kpi4 <= '10.4')?'red':(youthPREducationDecContents.kpi4 > '10.4' && youthPREducationDecContents.kpi4 <= '13.86666667')?'orange':(youthPREducationDecContents.kpi4 > '13.86666667' && youthPREducationDecContents.kpi4 < '17.33333333')?'yellow-7':(youthPREducationDecContents.kpi4 >= '17.33333333' && youthPREducationDecContents.kpi4 < '20.8')?'green':(youthPREducationDecContents.kpi4 >= '20.8'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi4}}
                              <q-tooltip># of total youth</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(youthPREducationDecContents.kpi5 == null)?'grey-2':(youthPREducationDecContents.kpi5 >= '0' && youthPREducationDecContents.kpi5 <= '4.8')?'red':(youthPREducationDecContents.kpi5 > '4.8' && youthPREducationDecContents.kpi5 <= '6.4')?'orange':(youthPREducationDecContents.kpi5 > '6.4' && youthPREducationDecContents.kpi5 < '8')?'yellow-7':(youthPREducationDecContents.kpi5 >= '8' && youthPREducationDecContents.kpi5 < '9.6')?'green':(youthPREducationDecContents.kpi5 >= '9.6'?'blue':'grey-2')"
                            >
                            {{youthPREducationDecContents.kpi5}}
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
              youthPREducationJanContent: {
                
              },
              youthPREducationJanContents : [],
              youthPREducationFebContent: {
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
              youthPREducationFebContents : [],
              youthPREducationMarContent: {
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
              youthPREducationMarContents : [],
              youthPREducationAprContent: {
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
              youthPREducationAprContents : [],
              youthPREducationMayContent: {
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
              youthPREducationMayContents : [],
              youthPREducationJunContent: {
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
              youthPREducationJunContents : [],
              youthPREducationJulContent: {
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
              youthPREducationJulContents : [],
              youthPREducationAugContent: {
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
              youthPREducationAugContents : [],
              youthPREducationSepContent: {
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
              youthPREducationSepContents : [],
              youthPREducationOctContent: {
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
              youthPREducationOctContents : [],
              youthPREducationNovContent: {
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
              youthPREducationNovContents : [],
              youthPREducationDecContent: {
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
              youthPREducationDecContents : []


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
                            {time_period: 'January', expenses: this.youthPREducationJanContents.expenses, revenues: this.youthPREducationJanContents.revenues},
                            {time_period: 'February', expenses: this.youthPREducationFebContents.expenses, revenues: this.youthPREducationFebContents.revenues},
                            {time_period: 'March', expenses: this.youthPREducationMarContents.expenses, revenues: this.youthPREducationMarContents.revenues},
                            {time_period: 'April', expenses: this.youthPREducationAprContents.expenses, revenues: this.youthPREducationAprContents.revenues},
                            {time_period: 'May', expenses: this.youthPREducationMayContents.expenses, revenues: this.youthPREducationMayContents.revenues},
                            {time_period: 'June', expenses: this.youthPREducationJunContents.expenses, revenues: this.youthPREducationJunContents.revenues},
                            {time_period: 'July', expenses: this.youthPREducationJulContents.expenses, revenues: this.youthPREducationJulContents.revenues},
                            {time_period: 'August', expenses: this.youthPREducationAugContents.expenses, revenues: this.youthPREducationAugContents.revenues},
                            {time_period: 'September', expenses: this.youthPREducationSepContents.expenses, revenues: this.youthPREducationSepContents.revenues},
                            {time_period: 'October', expenses: this.youthPREducationOctContents.expenses, revenues: this.youthPREducationOctContents.revenues},
                            {time_period: 'November', expenses: this.youthPREducationNovContents.expenses, revenues: this.youthPREducationNovContents.revenues},
                            {time_period: 'December',expenses: this.youthPREducationDecContents.expenses, revenues: this.youthPREducationDecContents.revenues }
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
                            {months: 'January', kpi1: this.youthPREducationJanContents.kpi1, kpi2: this.youthPREducationJanContents.kpi2, kpi3: this.youthPREducationJanContents.kpi3, kpi4: this.youthPREducationJanContents.kpi4, kpi5: this.youthPREducationJanContents.kpi5, uniqueVol: this.youthPREducationJanContents.uniqueVolunteers, volHours: this.youthPREducationJanContents.volunteerHours},
                            {months: 'February', kpi1: this.youthPREducationFebContents.kpi1, kpi2: this.youthPREducationFebContents.kpi2, kpi3: this.youthPREducationFebContents.kpi3, kpi4: this.youthPREducationFebContents.kpi4, kpi5: this.youthPREducationFebContents.kpi5, uniqueVol: this.youthPREducationFebContents.uniqueVolunteers, volHours: this.youthPREducationFebContents.volunteerHours},
                            {months: 'March', kpi1: this.youthPREducationMarContents.kpi1, kpi2: this.youthPREducationMarContents.kpi2, kpi3: this.youthPREducationMarContents.kpi3, kpi4: this.youthPREducationMarContents.kpi4, kpi5: this.youthPREducationMarContents.kpi5, uniqueVol: this.youthPREducationMarContents.uniqueVolunteers, volHours: this.youthPREducationMarContents.volunteerHours},
                            {months: 'April', kpi1: this.youthPREducationAprContents.kpi1, kpi2: this.youthPREducationAprContents.kpi2, kpi3: this.youthPREducationAprContents.kpi3, kpi4: this.youthPREducationAprContents.kpi4, kpi5: this.youthPREducationAprContents.kpi5, uniqueVol: this.youthPREducationAprContents.uniqueVolunteers, volHours: this.youthPREducationAprContents.volunteerHours},
                            {months: 'May', kpi1: this.youthPREducationMayContents.kpi1, kpi2: this.youthPREducationMayContents.kpi2, kpi3: this.youthPREducationMayContents.kpi3, kpi4: this.youthPREducationMayContents.kpi4, kpi5: this.youthPREducationMayContents.kpi5, uniqueVol: this.youthPREducationMayContents.uniqueVolunteers, volHours: this.youthPREducationMayContents.volunteerHours},
                            {months: 'June', kpi1: this.youthPREducationJunContents.kpi1, kpi2: this.youthPREducationJunContents.kpi2, kpi3: this.youthPREducationJunContents.kpi3, kpi4: this.youthPREducationJunContents.kpi4, kpi5: this.youthPREducationJunContents.kpi5, uniqueVol: this.youthPREducationJunContents.uniqueVolunteers, volHours: this.youthPREducationJunContents.volunteerHours},
                            {months: 'July', kpi1: this.youthPREducationJulContents.kpi1, kpi2: this.youthPREducationJulContents.kpi2, kpi3: this.youthPREducationJulContents.kpi3, kpi4: this.youthPREducationJulContents.kpi4, kpi5: this.youthPREducationJulContents.kpi5, uniqueVol: this.youthPREducationJulContents.uniqueVolunteers, volHours: this.youthPREducationJulContents.volunteerHours},
                            {months: 'August', kpi1: this.youthPREducationAugContents.kpi1, kpi2: this.youthPREducationAugContents.kpi2, kpi3: this.youthPREducationAugContents.kpi3, kpi4: this.youthPREducationAugContents.kpi4, kpi5: this.youthPREducationAugContents.kpi5, uniqueVol: this.youthPREducationAugContents.uniqueVolunteers, volHours: this.youthPREducationAugContents.volunteerHours},
                            {months: 'September', kpi1: this.youthPREducationSepContents.kpi1, kpi2: this.youthPREducationSepContents.kpi2, kpi3: this.youthPREducationSepContents.kpi3, kpi4: this.youthPREducationSepContents.kpi4, kpi5: this.youthPREducationSepContents.kpi5, uniqueVol: this.youthPREducationSepContents.uniqueVolunteers, volHours: this.youthPREducationSepContents.volunteerHours},
                            {months: 'October', kpi1: this.youthPREducationOctContents.kpi1, kpi2: this.youthPREducationOctContents.kpi2, kpi3: this.youthPREducationOctContents.kpi3, kpi4: this.youthPREducationOctContents.kpi4, kpi5: this.youthPREducationOctContents.kpi5, uniqueVol: this.youthPREducationOctContents.uniqueVolunteers, volHours: this.youthPREducationOctContents.volunteerHours},
                            {months: 'November', kpi1: this.youthPREducationNovContents.kpi1, kpi2: this.youthPREducationNovContents.kpi2, kpi3: this.youthPREducationNovContents.kpi3, kpi4: this.youthPREducationNovContents.kpi4, kpi5: this.youthPREducationNovContents.kpi5, uniqueVol: this.youthPREducationNovContents.uniqueVolunteers, volHours: this.youthPREducationNovContents.volunteerHours},
                            {months: 'December',kpi1: this.youthPREducationDecContents.kpi1, kpi2: this.youthPREducationDecContents.kpi2, kpi3: this.youthPREducationDecContents.kpi3, kpi4: this.youthPREducationDecContents.kpi4, kpi5: this.youthPREducationDecContents.kpi5, uniqueVol: this.youthPREducationDecContents.uniqueVolunteers, volHours: this.youthPREducationDecContents.volunteerHours},
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
                            data: [{value: this.youthPREducationJanContents.budgetUsage}],
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
                                {value: this.youthPREducationJanContents.perCategory1, name: this.youthPREducationJanContents.expenseCategory1},
                                {value: this.youthPREducationJanContents.perCategory2, name: this.youthPREducationJanContents.expenseCategory2},
                                {value: this.youthPREducationJanContents.perCategory3, name: this.youthPREducationJanContents.expenseCategory3},
                                {value: this.youthPREducationJanContents.perCategory4, name: this.youthPREducationJanContents.expenseCategory4},
                                {value: this.youthPREducationJanContents.perCategory5, name: this.youthPREducationJanContents.expenseCategory5},
                                {value: this.youthPREducationJanContents.perCategory6, name: this.youthPREducationJanContents.expenseCategory6}
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
                            data: [{value: this.youthPREducationFebContents.budgetUsage}],
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
                                {value: this.youthPREducationFebContents.perCategory1, name: this.youthPREducationFebContents.expenseCategory1},
                                {value: this.youthPREducationFebContents.perCategory2, name: this.youthPREducationFebContents.expenseCategory2},
                                {value: this.youthPREducationFebContents.perCategory3, name: this.youthPREducationFebContents.expenseCategory3},
                                {value: this.youthPREducationFebContents.perCategory4, name: this.youthPREducationFebContents.expenseCategory4},
                                {value: this.youthPREducationFebContents.perCategory5, name: this.youthPREducationFebContents.expenseCategory5},
                                {value: this.youthPREducationFebContents.perCategory6, name: this.youthPREducationFebContents.expenseCategory6}
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
                            data: [{value: this.youthPREducationMarContents.budgetUsage}],
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
                                {value: this.youthPREducationMarContents.perCategory1, name: this.youthPREducationMarContents.expenseCategory1},
                                {value: this.youthPREducationMarContents.perCategory2, name: this.youthPREducationMarContents.expenseCategory2},
                                {value: this.youthPREducationMarContents.perCategory3, name: this.youthPREducationMarContents.expenseCategory3},
                                {value: this.youthPREducationMarContents.perCategory4, name: this.youthPREducationMarContents.expenseCategory4},
                                {value: this.youthPREducationMarContents.perCategory5, name: this.youthPREducationMarContents.expenseCategory5},
                                {value: this.youthPREducationMarContents.perCategory6, name: this.youthPREducationMarContents.expenseCategory6}
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
                            data: [{value: this.youthPREducationAprContents.budgetUsage}],
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
                                {value: this.youthPREducationAprContents.perCategory1, name: this.youthPREducationAprContents.expenseCategory1},
                                {value: this.youthPREducationAprContents.perCategory2, name: this.youthPREducationAprContents.expenseCategory2},
                                {value: this.youthPREducationAprContents.perCategory3, name: this.youthPREducationAprContents.expenseCategory3},
                                {value: this.youthPREducationAprContents.perCategory4, name: this.youthPREducationAprContents.expenseCategory4},
                                {value: this.youthPREducationAprContents.perCategory5, name: this.youthPREducationAprContents.expenseCategory5},
                                {value: this.youthPREducationAprContents.perCategory6, name: this.youthPREducationAprContents.expenseCategory6}  
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
                            data: [{value: this.youthPREducationMayContents.budgetUsage}],
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
                                {value: this.youthPREducationMayContents.perCategory1, name: this.youthPREducationMayContents.expenseCategory1},
                                {value: this.youthPREducationMayContents.perCategory2, name: this.youthPREducationMayContents.expenseCategory2},
                                {value: this.youthPREducationMayContents.perCategory3, name: this.youthPREducationMayContents.expenseCategory3},
                                {value: this.youthPREducationMayContents.perCategory4, name: this.youthPREducationMayContents.expenseCategory4},
                                {value: this.youthPREducationMayContents.perCategory5, name: this.youthPREducationMayContents.expenseCategory5},
                                {value: this.youthPREducationMayContents.perCategory6, name: this.youthPREducationMayContents.expenseCategory6}  
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
                            data: [{value: this.youthPREducationJunContents.budgetUsage}],
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
                                {value: this.youthPREducationJunContents.perCategory1, name: this.youthPREducationJunContents.expenseCategory1},
                                {value: this.youthPREducationJunContents.perCategory2, name: this.youthPREducationJunContents.expenseCategory2},
                                {value: this.youthPREducationJunContents.perCategory3, name: this.youthPREducationJunContents.expenseCategory3},
                                {value: this.youthPREducationJunContents.perCategory4, name: this.youthPREducationJunContents.expenseCategory4},
                                {value: this.youthPREducationJunContents.perCategory5, name: this.youthPREducationJunContents.expenseCategory5},
                                {value: this.youthPREducationJunContents.perCategory6, name: this.youthPREducationJunContents.expenseCategory6}  
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
                            data: [{value: this.youthPREducationJulContents.budgetUsage}],
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
                                {value: this.youthPREducationJulContents.perCategory1, name: this.youthPREducationJulContents.expenseCategory1},
                                {value: this.youthPREducationJulContents.perCategory2, name: this.youthPREducationJulContents.expenseCategory2},
                                {value: this.youthPREducationJulContents.perCategory3, name: this.youthPREducationJulContents.expenseCategory3},
                                {value: this.youthPREducationJulContents.perCategory4, name: this.youthPREducationJulContents.expenseCategory4},
                                {value: this.youthPREducationJulContents.perCategory5, name: this.youthPREducationJulContents.expenseCategory5},
                                {value: this.youthPREducationJulContents.perCategory6, name: this.youthPREducationJulContents.expenseCategory6}  
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
                            data: [{value: this.youthPREducationAugContents.budgetUsage}],
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
                                {value: this.youthPREducationAugContents.perCategory1, name: this.youthPREducationAugContents.expenseCategory1},
                                {value: this.youthPREducationAugContents.perCategory2, name: this.youthPREducationAugContents.expenseCategory2},
                                {value: this.youthPREducationAugContents.perCategory3, name: this.youthPREducationAugContents.expenseCategory3},
                                {value: this.youthPREducationAugContents.perCategory4, name: this.youthPREducationAugContents.expenseCategory4},
                                {value: this.youthPREducationAugContents.perCategory5, name: this.youthPREducationAugContents.expenseCategory5},
                                {value: this.youthPREducationAugContents.perCategory6, name: this.youthPREducationAugContents.expenseCategory6}  
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
                            data: [{value: this.youthPREducationSepContents.budgetUsage}],
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
                                {value: this.youthPREducationSepContents.perCategory1, name: this.youthPREducationSepContents.expenseCategory1},
                                {value: this.youthPREducationSepContents.perCategory2, name: this.youthPREducationSepContents.expenseCategory2},
                                {value: this.youthPREducationSepContents.perCategory3, name: this.youthPREducationSepContents.expenseCategory3},
                                {value: this.youthPREducationSepContents.perCategory4, name: this.youthPREducationSepContents.expenseCategory4},
                                {value: this.youthPREducationSepContents.perCategory5, name: this.youthPREducationSepContents.expenseCategory5},
                                {value: this.youthPREducationSepContents.perCategory6, name: this.youthPREducationSepContents.expenseCategory6}  
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
                            data: [{value: this.youthPREducationOctContents.budgetUsage}],
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
                                {value: this.youthPREducationOctContents.perCategory1, name: this.youthPREducationOctContents.expenseCategory1},
                                {value: this.youthPREducationOctContents.perCategory2, name: this.youthPREducationOctContents.expenseCategory2},
                                {value: this.youthPREducationOctContents.perCategory3, name: this.youthPREducationOctContents.expenseCategory3},
                                {value: this.youthPREducationOctContents.perCategory4, name: this.youthPREducationOctContents.expenseCategory4},
                                {value: this.youthPREducationOctContents.perCategory5, name: this.youthPREducationOctContents.expenseCategory5},
                                {value: this.youthPREducationOctContents.perCategory6, name: this.youthPREducationOctContents.expenseCategory6}  
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
                            data: [{value: this.youthPREducationNovContents.budgetUsage}],
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
                                {value: this.youthPREducationNovContents.perCategory1, name: this.youthPREducationNovContents.expenseCategory1},
                                {value: this.youthPREducationNovContents.perCategory2, name: this.youthPREducationNovContents.expenseCategory2},
                                {value: this.youthPREducationNovContents.perCategory3, name: this.youthPREducationNovContents.expenseCategory3},
                                {value: this.youthPREducationNovContents.perCategory4, name: this.youthPREducationNovContents.expenseCategory4},
                                {value: this.youthPREducationNovContents.perCategory5, name: this.youthPREducationNovContents.expenseCategory5},
                                {value: this.youthPREducationNovContents.perCategory6, name: this.youthPREducationNovContents.expenseCategory6}  
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
                            data: [{value: this.youthPREducationDecContents.budgetUsage}],
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
                                {value: this.youthPREducationDecContents.perCategory1, name: this.youthPREducationDecContents.expenseCategory1},
                                {value: this.youthPREducationDecContents.perCategory2, name: this.youthPREducationDecContents.expenseCategory2},
                                {value: this.youthPREducationDecContents.perCategory3, name: this.youthPREducationDecContents.expenseCategory3},
                                {value: this.youthPREducationDecContents.perCategory4, name: this.youthPREducationDecContents.expenseCategory4},
                                {value: this.youthPREducationDecContents.perCategory5, name: this.youthPREducationDecContents.expenseCategory5},
                                {value: this.youthPREducationDecContents.perCategory6, name: this.youthPREducationDecContents.expenseCategory6}
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
            var docyouthPREducationJanRef = db.collection("youthPREducation").doc("january");

            docyouthPREducationJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.youthPREducationJanContents = doc.data();
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
            var docyouthPREducationFebRef = db.collection("youthPREducation").doc("february");

            docyouthPREducationFebRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.youthPREducationFebContents = doc.data();
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
            var docyouthPREducationMarRef = db.collection("youthPREducation").doc("march");

            docyouthPREducationMarRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.youthPREducationMarContents = doc.data();
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
            var docyouthPREducationAprRef = db.collection("youthPREducation").doc("april1");

            docyouthPREducationAprRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.youthPREducationAprContents = doc.data();
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
            var docyouthPREducationMayRef = db.collection("youthPREducation").doc("may");

            docyouthPREducationMayRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.youthPREducationMayContents = doc.data();
                    this.totalExpenseMay();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    JUNE
            var docyouthPREducationJunRef = db.collection("youthPREducation").doc("june");

            docyouthPREducationJunRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.youthPREducationJunContents = doc.data();
                    this.totalExpenseJun();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    JULY
            var docyouthPREducationJulRef = db.collection("youthPREducation").doc("july");

            docyouthPREducationJulRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.youthPREducationJulContents = doc.data();
                    this.totalExpenseJul();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    AUGUST
            var docyouthPREducationAugRef = db.collection("youthPREducation").doc("august");

            docyouthPREducationAugRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.youthPREducationAugContents = doc.data();
                    this.totalExpenseAug();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    SEPTEMBER
            var docyouthPREducationSepRef = db.collection("youthPREducation").doc("september");

            docyouthPREducationSepRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.youthPREducationSepContents = doc.data();
                    this.totalExpenseSep();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    OCTOBER
            var docyouthPREducationOctRef = db.collection("youthPREducation").doc("october");

            docyouthPREducationOctRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.youthPREducationOctContents = doc.data();
                    this.totalExpenseOct();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    NOVEMBER
            var docyouthPREducationNovRef = db.collection("youthPREducation").doc("november");

            docyouthPREducationNovRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.youthPREducationNovContents = doc.data();
                    this.totalExpenseNov();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    DECEMBER
            var docyouthPREducationDecRef = db.collection("youthPREducation").doc("december");

            docyouthPREducationDecRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.youthPREducationDecContents = doc.data();
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
              return this.youthPREducationJanContents.expenses = getRealValue(this.youthPREducationJanContents.perCategory1) + getRealValue(this.youthPREducationJanContents.perCategory2) + getRealValue(this.youthPREducationJanContents.perCategory3) + getRealValue(this.youthPREducationJanContents.perCategory4) + getRealValue(this.youthPREducationJanContents.perCategory5) + getRealValue(this.youthPREducationJanContents.perCategory6)
              
            },
            cumulativeBudgetUsageJan(){
              const getRealValue = (val) => +val || val;
              return this.youthPREducationJanContents.budgetUsage = ((getRealValue(this.youthPREducationJanContents.expenses) / getRealValue(this.youthPREducationJanContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseFeb(){
              const getRealValue = (val) => +val || val;
              return this.youthPREducationFebContents.expenses = getRealValue(this.youthPREducationFebContents.perCategory1) + getRealValue(this.youthPREducationFebContents.perCategory2) + getRealValue(this.youthPREducationFebContents.perCategory3) + getRealValue(this.youthPREducationFebContents.perCategory4) + getRealValue(this.youthPREducationFebContents.perCategory5) + getRealValue(this.youthPREducationFebContents.perCategory6)
            },
            cumulativeBudgetUsageFeb(){
              const getRealValue = (val) => +val || val;
              return this.youthPREducationFebContents.budgetUsage = (((getRealValue(this.youthPREducationFebContents.expenses) + getRealValue(this.youthPREducationJanContents.expenses)) / getRealValue(this.youthPREducationFebContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseMar(){
              const getRealValue = (val) => +val || val;
              return this.youthPREducationMarContents.expenses = getRealValue(this.youthPREducationMarContents.perCategory1) + getRealValue(this.youthPREducationMarContents.perCategory2) + getRealValue(this.youthPREducationMarContents.perCategory3) + getRealValue(this.youthPREducationMarContents.perCategory4) + getRealValue(this.youthPREducationMarContents.perCategory5) + getRealValue(this.youthPREducationMarContents.perCategory6)
            },
            cumulativeBudgetUsageMar(){
              const getRealValue = (val) => +val || val;
              return this.youthPREducationMarContents.budgetUsage = (((getRealValue(this.youthPREducationMarContents.expenses) + getRealValue(this.youthPREducationFebContents.expenses) + getRealValue(this.youthPREducationJanContents.expenses)) / getRealValue(this.youthPREducationMarContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseApr(){
              const getRealValue = (val) => +val || val;
              return this.youthPREducationAprContents.expenses = getRealValue(this.youthPREducationAprContents.perCategory1) + getRealValue(this.youthPREducationAprContents.perCategory2) + getRealValue(this.youthPREducationAprContents.perCategory3) + getRealValue(this.youthPREducationAprContents.perCategory4) + getRealValue(this.youthPREducationAprContents.perCategory5) + getRealValue(this.youthPREducationAprContents.perCategory6)
            },
            cumulativeBudgetUsageApr(){
              const getRealValue = (val) => +val || val;
              return this.youthPREducationAprContents.budgetUsage = (((getRealValue(this.youthPREducationAprContents.expenses) + getRealValue(this.youthPREducationMarContents.expenses) + getRealValue(this.youthPREducationFebContents.expenses) + getRealValue(this.youthPREducationJanContents.expenses)) / getRealValue(this.youthPREducationAprContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseMay(){
              const getRealValue = (val) => +val || val;
              return this.youthPREducationMayContents.expenses = getRealValue(this.youthPREducationMayContents.perCategory1) + getRealValue(this.youthPREducationMayContents.perCategory2) + getRealValue(this.youthPREducationMayContents.perCategory3) + getRealValue(this.youthPREducationMayContents.perCategory4) + getRealValue(this.youthPREducationMayContents.perCategory5) + getRealValue(this.youthPREducationMayContents.perCategory6)
            },
            cumulativeBudgetUsageMay(){
              const getRealValue = (val) => +val || val;
              return this.youthPREducationMayContents.budgetUsage = (((getRealValue(this.youthPREducationMayContents.expenses) + getRealValue(this.youthPREducationAprContents.expenses) + getRealValue(this.youthPREducationMarContents.expenses) + getRealValue(this.youthPREducationFebContents.expenses) + getRealValue(this.youthPREducationJanContents.expenses)) / getRealValue(this.youthPREducationMayContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseJun(){
              const getRealValue = (val) => +val || val;
              return this.youthPREducationJunContents.expenses = getRealValue(this.youthPREducationJunContents.perCategory1) + getRealValue(this.youthPREducationJunContents.perCategory2) + getRealValue(this.youthPREducationJunContents.perCategory3) + getRealValue(this.youthPREducationJunContents.perCategory4) + getRealValue(this.youthPREducationJunContents.perCategory5) + getRealValue(this.youthPREducationJunContents.perCategory6)
            },
            cumulativeBudgetUsageJun(){
              const getRealValue = (val) => +val || val;
              return this.youthPREducationJunContents.budgetUsage = (((getRealValue(this.youthPREducationJunContents.expenses) + getRealValue(this.youthPREducationMayContents.expenses) + getRealValue(this.youthPREducationAprContents.expenses) + getRealValue(this.youthPREducationMarContents.expenses) + getRealValue(this.youthPREducationFebContents.expenses) + getRealValue(this.youthPREducationJanContents.expenses)) / getRealValue(this.youthPREducationJunContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseJul(){
              const getRealValue = (val) => +val || val;
              return this.youthPREducationJulContents.expenses = getRealValue(this.youthPREducationJulContents.perCategory1) + getRealValue(this.youthPREducationJulContents.perCategory2) + getRealValue(this.youthPREducationJulContents.perCategory3) + getRealValue(this.youthPREducationJulContents.perCategory4) + getRealValue(this.youthPREducationJulContents.perCategory5) + getRealValue(this.youthPREducationJulContents.perCategory6)
            },
            cumulativeBudgetUsageJul(){
              const getRealValue = (val) => +val || val;
              return this.youthPREducationJulContents.budgetUsage = (((getRealValue(this.youthPREducationJulContents.expenses) + getRealValue(this.youthPREducationJunContents.expenses) + getRealValue(this.youthPREducationMayContents.expenses) + getRealValue(this.youthPREducationAprContents.expenses) + getRealValue(this.youthPREducationMarContents.expenses) + getRealValue(this.youthPREducationFebContents.expenses) + getRealValue(this.youthPREducationJanContents.expenses)) / getRealValue(this.youthPREducationJulContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseAug(){
              const getRealValue = (val) => +val || val;
              return this.youthPREducationAugContents.expenses = getRealValue(this.youthPREducationAugContents.perCategory1) + getRealValue(this.youthPREducationAugContents.perCategory2) + getRealValue(this.youthPREducationAugContents.perCategory3) + getRealValue(this.youthPREducationAugContents.perCategory4) + getRealValue(this.youthPREducationAugContents.perCategory5) + getRealValue(this.youthPREducationAugContents.perCategory6)
            },
            cumulativeBudgetUsageAug(){
              const getRealValue = (val) => +val || val;
              return this.youthPREducationAugContents.budgetUsage = (((getRealValue(this.youthPREducationAugContents.expenses) + getRealValue(this.youthPREducationJulContents.expenses) + getRealValue(this.youthPREducationJunContents.expenses) + getRealValue(this.youthPREducationMayContents.expenses) + getRealValue(this.youthPREducationAprContents.expenses) + getRealValue(this.youthPREducationMarContents.expenses) + getRealValue(this.youthPREducationFebContents.expenses) + getRealValue(this.youthPREducationJanContents.expenses)) / getRealValue(this.youthPREducationAugContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseSep(){
              const getRealValue = (val) => +val || val;
              return this.youthPREducationSepContents.expenses = getRealValue(this.youthPREducationSepContents.perCategory1) + getRealValue(this.youthPREducationSepContents.perCategory2) + getRealValue(this.youthPREducationSepContents.perCategory3) + getRealValue(this.youthPREducationSepContents.perCategory4) + getRealValue(this.youthPREducationSepContents.perCategory5) + getRealValue(this.youthPREducationSepContents.perCategory6)
            },
            cumulativeBudgetUsageSep(){
              const getRealValue = (val) => +val || val;
              return this.youthPREducationSepContents.budgetUsage = (((getRealValue(this.youthPREducationSepContents.expenses) + getRealValue(this.youthPREducationAugContents.expenses) + getRealValue(this.youthPREducationJulContents.expenses) + getRealValue(this.youthPREducationJunContents.expenses) + getRealValue(this.youthPREducationMayContents.expenses) + getRealValue(this.youthPREducationAprContents.expenses) + getRealValue(this.youthPREducationMarContents.expenses) + getRealValue(this.youthPREducationFebContents.expenses) + getRealValue(this.youthPREducationJanContents.expenses)) / getRealValue(this.youthPREducationSepContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseOct(){
              const getRealValue = (val) => +val || val;
              return this.youthPREducationOctContents.expenses = getRealValue(this.youthPREducationOctContents.perCategory1) + getRealValue(this.youthPREducationOctContents.perCategory2) + getRealValue(this.youthPREducationOctContents.perCategory3) + getRealValue(this.youthPREducationOctContents.perCategory4) + getRealValue(this.youthPREducationOctContents.perCategory5) + getRealValue(this.youthPREducationOctContents.perCategory6)
            },
            cumulativeBudgetUsageOct(){
              const getRealValue = (val) => +val || val;
              return this.youthPREducationOctContents.budgetUsage = (((getRealValue(this.youthPREducationOctContents.expenses) + getRealValue(this.youthPREducationSepContents.expenses) + getRealValue(this.youthPREducationAugContents.expenses) + getRealValue(this.youthPREducationJulContents.expenses) + getRealValue(this.youthPREducationJunContents.expenses) + getRealValue(this.youthPREducationMayContents.expenses) + getRealValue(this.youthPREducationAprContents.expenses) + getRealValue(this.youthPREducationMarContents.expenses) + getRealValue(this.youthPREducationFebContents.expenses) + getRealValue(this.youthPREducationJanContents.expenses)) / getRealValue(this.youthPREducationOctContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseNov(){
              const getRealValue = (val) => +val || val;
              return this.youthPREducationNovContents.expenses = getRealValue(this.youthPREducationNovContents.perCategory1) + getRealValue(this.youthPREducationNovContents.perCategory2) + getRealValue(this.youthPREducationNovContents.perCategory3) + getRealValue(this.youthPREducationNovContents.perCategory4) + getRealValue(this.youthPREducationNovContents.perCategory5) + getRealValue(this.youthPREducationNovContents.perCategory6)
            },
            cumulativeBudgetUsageNov(){
              const getRealValue = (val) => +val || val;
              return this.youthPREducationNovContents.budgetUsage = (((getRealValue(this.youthPREducationNovContents.expenses) + getRealValue(this.youthPREducationOctContents.expenses) + getRealValue(this.youthPREducationSepContents.expenses) + getRealValue(this.youthPREducationAugContents.expenses) + getRealValue(this.youthPREducationJulContents.expenses) + getRealValue(this.youthPREducationJunContents.expenses) + getRealValue(this.youthPREducationMayContents.expenses) + getRealValue(this.youthPREducationAprContents.expenses) + getRealValue(this.youthPREducationMarContents.expenses) + getRealValue(this.youthPREducationFebContents.expenses) + getRealValue(this.youthPREducationJanContents.expenses)) / getRealValue(this.youthPREducationNovContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseDec(){
              const getRealValue = (val) => +val || val;
              return this.youthPREducationDecContents.expenses = getRealValue(this.youthPREducationDecContents.perCategory1) + getRealValue(this.youthPREducationDecContents.perCategory2) + getRealValue(this.youthPREducationDecContents.perCategory3) + getRealValue(this.youthPREducationDecContents.perCategory4) + getRealValue(this.youthPREducationDecContents.perCategory5) + getRealValue(this.youthPREducationDecContents.perCategory6)
            },
            cumulativeBudgetUsageDec(){
              const getRealValue = (val) => +val || val;
              return this.youthPREducationDecContents.budgetUsage = (((getRealValue(this.youthPREducationDecContents.expenses) + getRealValue(this.youthPREducationNovContents.expenses) + getRealValue(this.youthPREducationOctContents.expenses) + getRealValue(this.youthPREducationSepContents.expenses) + getRealValue(this.youthPREducationAugContents.expenses) + getRealValue(this.youthPREducationJulContents.expenses) + getRealValue(this.youthPREducationJunContents.expenses) + getRealValue(this.youthPREducationMayContents.expenses) + getRealValue(this.youthPREducationAprContents.expenses) + getRealValue(this.youthPREducationMarContents.expenses) + getRealValue(this.youthPREducationFebContents.expenses) + getRealValue(this.youthPREducationJanContents.expenses)) / getRealValue(this.youthPREducationDecContents.actualBudget))*100).toFixed(2)
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
