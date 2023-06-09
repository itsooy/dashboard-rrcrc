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
                                <q-tooltip># total contact</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip>Activities (#)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of pick-up contacts</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileJanContents.kpi1 == null)?'grey-2':(marketMobileJanContents.kpi1 >= '0' && marketMobileJanContents.kpi1 <= '232.6')?'red':(marketMobileJanContents.kpi1 > '232.6' && marketMobileJanContents.kpi1 <= '310.1333333')?'orange':(marketMobileJanContents.kpi1 > '310.1333333' && marketMobileJanContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileJanContents.kpi1 >= '387.6666667' && marketMobileJanContents.kpi1 < '465.2')?'green':(marketMobileJanContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJanContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJanContents.kpi2 == null)?'grey-2':(marketMobileJanContents.kpi2 >= '0' && marketMobileJanContents.kpi2 <= '11.6')?'red':(marketMobileJanContents.kpi2 > '11.6' && marketMobileJanContents.kpi2 <= '15.46666667')?'orange':(marketMobileJanContents.kpi2 > '15.46666667' && marketMobileJanContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileJanContents.kpi2 >= '19.33333333' && marketMobileJanContents.kpi2 < '23.2')?'green':(marketMobileJanContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJanContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJanContents.kpi3 == null)?'grey-2':(marketMobileJanContents.kpi3 >= '0' && marketMobileJanContents.kpi3 <= '38.2')?'red':(marketMobileJanContents.kpi3 > '38.2' && marketMobileJanContents.kpi3 <= '50.93333333')?'orange':(marketMobileJanContents.kpi3 > '50.93333333' && marketMobileJanContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileJanContents.kpi3 >= '63.66666667' && marketMobileJanContents.kpi3 < '76.4')?'green':(marketMobileJanContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileJanContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJanContents.kpi4 == null)?'grey-2':(marketMobileJanContents.kpi4 >= '0' && marketMobileJanContents.kpi4 <= '109.6')?'red':(marketMobileJanContents.kpi4 > '109.6' && marketMobileJanContents.kpi4 <= '146.1333333')?'orange':(marketMobileJanContents.kpi4 > '146.1333333' && marketMobileJanContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileJanContents.kpi4 >= '182.6666667' && marketMobileJanContents.kpi4 < '219.2')?'green':(marketMobileJanContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJanContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileFebContents.kpi1 == null)?'grey-2':(marketMobileFebContents.kpi1 >= '0' && marketMobileFebContents.kpi1 <= '232.6')?'red':(marketMobileFebContents.kpi1 > '232.6' && marketMobileFebContents.kpi1 <= '310.1333333')?'orange':(marketMobileFebContents.kpi1 > '310.1333333' && marketMobileFebContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileFebContents.kpi1 >= '387.6666667' && marketMobileFebContents.kpi1 < '465.2')?'green':(marketMobileFebContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileFebContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileFebContents.kpi2 == null)?'grey-2':(marketMobileFebContents.kpi2 >= '0' && marketMobileFebContents.kpi2 <= '11.6')?'red':(marketMobileFebContents.kpi2 > '11.6' && marketMobileFebContents.kpi2 <= '15.46666667')?'orange':(marketMobileFebContents.kpi2 > '15.46666667' && marketMobileFebContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileFebContents.kpi2 >= '19.33333333' && marketMobileFebContents.kpi2 < '23.2')?'green':(marketMobileFebContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileFebContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileFebContents.kpi3 == null)?'grey-2':(marketMobileFebContents.kpi3 >= '0' && marketMobileFebContents.kpi3 <= '38.2')?'red':(marketMobileFebContents.kpi3 > '38.2' && marketMobileFebContents.kpi3 <= '50.93333333')?'orange':(marketMobileFebContents.kpi3 > '50.93333333' && marketMobileFebContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileFebContents.kpi3 >= '63.66666667' && marketMobileFebContents.kpi3 < '76.4')?'green':(marketMobileFebContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileFebContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileFebContents.kpi4 == null)?'grey-2':(marketMobileFebContents.kpi4 >= '0' && marketMobileFebContents.kpi4 <= '109.6')?'red':(marketMobileFebContents.kpi4 > '109.6' && marketMobileFebContents.kpi4 <= '146.1333333')?'orange':(marketMobileFebContents.kpi4 > '146.1333333' && marketMobileFebContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileFebContents.kpi4 >= '182.6666667' && marketMobileFebContents.kpi4 < '219.2')?'green':(marketMobileFebContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileFebContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileMarContents.kpi1 == null)?'grey-2':(marketMobileMarContents.kpi1 >= '0' && marketMobileMarContents.kpi1 <= '232.6')?'red':(marketMobileMarContents.kpi1 > '232.6' && marketMobileMarContents.kpi1 <= '310.1333333')?'orange':(marketMobileMarContents.kpi1 > '310.1333333' && marketMobileMarContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileMarContents.kpi1 >= '387.6666667' && marketMobileMarContents.kpi1 < '465.2')?'green':(marketMobileMarContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMarContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMarContents.kpi2 == null)?'grey-2':(marketMobileMarContents.kpi2 >= '0' && marketMobileMarContents.kpi2 <= '11.6')?'red':(marketMobileMarContents.kpi2 > '11.6' && marketMobileMarContents.kpi2 <= '15.46666667')?'orange':(marketMobileMarContents.kpi2 > '15.46666667' && marketMobileMarContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileMarContents.kpi2 >= '19.33333333' && marketMobileMarContents.kpi2 < '23.2')?'green':(marketMobileMarContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMarContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMarContents.kpi3 == null)?'grey-2':(marketMobileMarContents.kpi3 >= '0' && marketMobileMarContents.kpi3 <= '38.2')?'red':(marketMobileMarContents.kpi3 > '38.2' && marketMobileMarContents.kpi3 <= '50.93333333')?'orange':(marketMobileMarContents.kpi3 > '50.93333333' && marketMobileMarContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileMarContents.kpi3 >= '63.66666667' && marketMobileMarContents.kpi3 < '76.4')?'green':(marketMobileMarContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileMarContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMarContents.kpi4 == null)?'grey-2':(marketMobileMarContents.kpi4 >= '0' && marketMobileMarContents.kpi4 <= '109.6')?'red':(marketMobileMarContents.kpi4 > '109.6' && marketMobileMarContents.kpi4 <= '146.1333333')?'orange':(marketMobileMarContents.kpi4 > '146.1333333' && marketMobileMarContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileMarContents.kpi4 >= '182.6666667' && marketMobileMarContents.kpi4 < '219.2')?'green':(marketMobileMarContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMarContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileAprContents.kpi1 == null)?'grey-2':(marketMobileAprContents.kpi1 >= '0' && marketMobileAprContents.kpi1 <= '232.6')?'red':(marketMobileAprContents.kpi1 > '232.6' && marketMobileAprContents.kpi1 <= '310.1333333')?'orange':(marketMobileAprContents.kpi1 > '310.1333333' && marketMobileAprContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileAprContents.kpi1 >= '387.6666667' && marketMobileAprContents.kpi1 < '465.2')?'green':(marketMobileAprContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAprContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAprContents.kpi2 == null)?'grey-2':(marketMobileAprContents.kpi2 >= '0' && marketMobileAprContents.kpi2 <= '11.6')?'red':(marketMobileAprContents.kpi2 > '11.6' && marketMobileAprContents.kpi2 <= '15.46666667')?'orange':(marketMobileAprContents.kpi2 > '15.46666667' && marketMobileAprContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileAprContents.kpi2 >= '19.33333333' && marketMobileAprContents.kpi2 < '23.2')?'green':(marketMobileAprContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAprContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAprContents.kpi3 == null)?'grey-2':(marketMobileAprContents.kpi3 >= '0' && marketMobileAprContents.kpi3 <= '38.2')?'red':(marketMobileAprContents.kpi3 > '38.2' && marketMobileAprContents.kpi3 <= '50.93333333')?'orange':(marketMobileAprContents.kpi3 > '50.93333333' && marketMobileAprContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileAprContents.kpi3 >= '63.66666667' && marketMobileAprContents.kpi3 < '76.4')?'green':(marketMobileAprContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileAprContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAprContents.kpi4 == null)?'grey-2':(marketMobileAprContents.kpi4 >= '0' && marketMobileAprContents.kpi4 <= '109.6')?'red':(marketMobileAprContents.kpi4 > '109.6' && marketMobileAprContents.kpi4 <= '146.1333333')?'orange':(marketMobileAprContents.kpi4 > '146.1333333' && marketMobileAprContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileAprContents.kpi4 >= '182.6666667' && marketMobileAprContents.kpi4 < '219.2')?'green':(marketMobileAprContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAprContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileMayContents.kpi1 == null)?'grey-2':(marketMobileMayContents.kpi1 >= '0' && marketMobileMayContents.kpi1 <= '232.6')?'red':(marketMobileMayContents.kpi1 > '232.6' && marketMobileMayContents.kpi1 <= '310.1333333')?'orange':(marketMobileMayContents.kpi1 > '310.1333333' && marketMobileMayContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileMayContents.kpi1 >= '387.6666667' && marketMobileMayContents.kpi1 < '465.2')?'green':(marketMobileMayContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMayContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMayContents.kpi2 == null)?'grey-2':(marketMobileMayContents.kpi2 >= '0' && marketMobileMayContents.kpi2 <= '11.6')?'red':(marketMobileMayContents.kpi2 > '11.6' && marketMobileMayContents.kpi2 <= '15.46666667')?'orange':(marketMobileMayContents.kpi2 > '15.46666667' && marketMobileMayContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileMayContents.kpi2 >= '19.33333333' && marketMobileMayContents.kpi2 < '23.2')?'green':(marketMobileMayContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMayContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMayContents.kpi3 == null)?'grey-2':(marketMobileMayContents.kpi3 >= '0' && marketMobileMayContents.kpi3 <= '38.2')?'red':(marketMobileMayContents.kpi3 > '38.2' && marketMobileMayContents.kpi3 <= '50.93333333')?'orange':(marketMobileMayContents.kpi3 > '50.93333333' && marketMobileMayContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileMayContents.kpi3 >= '63.66666667' && marketMobileMayContents.kpi3 < '76.4')?'green':(marketMobileMayContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileMayContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMayContents.kpi4 == null)?'grey-2':(marketMobileMayContents.kpi4 >= '0' && marketMobileMayContents.kpi4 <= '109.6')?'red':(marketMobileMayContents.kpi4 > '109.6' && marketMobileMayContents.kpi4 <= '146.1333333')?'orange':(marketMobileMayContents.kpi4 > '146.1333333' && marketMobileMayContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileMayContents.kpi4 >= '182.6666667' && marketMobileMayContents.kpi4 < '219.2')?'green':(marketMobileMayContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMayContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileJunContents.kpi1 == null)?'grey-2':(marketMobileJunContents.kpi1 >= '0' && marketMobileJunContents.kpi1 <= '232.6')?'red':(marketMobileJunContents.kpi1 > '232.6' && marketMobileJunContents.kpi1 <= '310.1333333')?'orange':(marketMobileJunContents.kpi1 > '310.1333333' && marketMobileJunContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileJunContents.kpi1 >= '387.6666667' && marketMobileJunContents.kpi1 < '465.2')?'green':(marketMobileJunContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJunContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJunContents.kpi2 == null)?'grey-2':(marketMobileJunContents.kpi2 >= '0' && marketMobileJunContents.kpi2 <= '11.6')?'red':(marketMobileJunContents.kpi2 > '11.6' && marketMobileJunContents.kpi2 <= '15.46666667')?'orange':(marketMobileJunContents.kpi2 > '15.46666667' && marketMobileJunContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileJunContents.kpi2 >= '19.33333333' && marketMobileJunContents.kpi2 < '23.2')?'green':(marketMobileJunContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJunContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJunContents.kpi3 == null)?'grey-2':(marketMobileJunContents.kpi3 >= '0' && marketMobileJunContents.kpi3 <= '38.2')?'red':(marketMobileJunContents.kpi3 > '38.2' && marketMobileJunContents.kpi3 <= '50.93333333')?'orange':(marketMobileJunContents.kpi3 > '50.93333333' && marketMobileJunContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileJunContents.kpi3 >= '63.66666667' && marketMobileJunContents.kpi3 < '76.4')?'green':(marketMobileJunContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileJunContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJunContents.kpi4 == null)?'grey-2':(marketMobileJunContents.kpi4 >= '0' && marketMobileJunContents.kpi4 <= '109.6')?'red':(marketMobileJunContents.kpi4 > '109.6' && marketMobileJunContents.kpi4 <= '146.1333333')?'orange':(marketMobileJunContents.kpi4 > '146.1333333' && marketMobileJunContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileJunContents.kpi4 >= '182.6666667' && marketMobileJunContents.kpi4 < '219.2')?'green':(marketMobileJunContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJunContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileJulContents.kpi1 == null)?'grey-2':(marketMobileJulContents.kpi1 >= '0' && marketMobileJulContents.kpi1 <= '232.6')?'red':(marketMobileJulContents.kpi1 > '232.6' && marketMobileJulContents.kpi1 <= '310.1333333')?'orange':(marketMobileJulContents.kpi1 > '310.1333333' && marketMobileJulContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileJulContents.kpi1 >= '387.6666667' && marketMobileJulContents.kpi1 < '465.2')?'green':(marketMobileJulContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJulContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJulContents.kpi2 == null)?'grey-2':(marketMobileJulContents.kpi2 >= '0' && marketMobileJulContents.kpi2 <= '11.6')?'red':(marketMobileJulContents.kpi2 > '11.6' && marketMobileJulContents.kpi2 <= '15.46666667')?'orange':(marketMobileJulContents.kpi2 > '15.46666667' && marketMobileJulContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileJulContents.kpi2 >= '19.33333333' && marketMobileJulContents.kpi2 < '23.2')?'green':(marketMobileJulContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJulContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJulContents.kpi3 == null)?'grey-2':(marketMobileJulContents.kpi3 >= '0' && marketMobileJulContents.kpi3 <= '38.2')?'red':(marketMobileJulContents.kpi3 > '38.2' && marketMobileJulContents.kpi3 <= '50.93333333')?'orange':(marketMobileJulContents.kpi3 > '50.93333333' && marketMobileJulContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileJulContents.kpi3 >= '63.66666667' && marketMobileJulContents.kpi3 < '76.4')?'green':(marketMobileJulContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileJulContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJulContents.kpi4 == null)?'grey-2':(marketMobileJulContents.kpi4 >= '0' && marketMobileJulContents.kpi4 <= '109.6')?'red':(marketMobileJulContents.kpi4 > '109.6' && marketMobileJulContents.kpi4 <= '146.1333333')?'orange':(marketMobileJulContents.kpi4 > '146.1333333' && marketMobileJulContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileJulContents.kpi4 >= '182.6666667' && marketMobileJulContents.kpi4 < '219.2')?'green':(marketMobileJulContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJulContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileAugContents.kpi1 == null)?'grey-2':(marketMobileAugContents.kpi1 >= '0' && marketMobileAugContents.kpi1 <= '232.6')?'red':(marketMobileAugContents.kpi1 > '232.6' && marketMobileAugContents.kpi1 <= '310.1333333')?'orange':(marketMobileAugContents.kpi1 > '310.1333333' && marketMobileAugContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileAugContents.kpi1 >= '387.6666667' && marketMobileAugContents.kpi1 < '465.2')?'green':(marketMobileAugContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAugContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAugContents.kpi2 == null)?'grey-2':(marketMobileAugContents.kpi2 >= '0' && marketMobileAugContents.kpi2 <= '11.6')?'red':(marketMobileAugContents.kpi2 > '11.6' && marketMobileAugContents.kpi2 <= '15.46666667')?'orange':(marketMobileAugContents.kpi2 > '15.46666667' && marketMobileAugContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileAugContents.kpi2 >= '19.33333333' && marketMobileAugContents.kpi2 < '23.2')?'green':(marketMobileAugContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAugContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAugContents.kpi3 == null)?'grey-2':(marketMobileAugContents.kpi3 >= '0' && marketMobileAugContents.kpi3 <= '38.2')?'red':(marketMobileAugContents.kpi3 > '38.2' && marketMobileAugContents.kpi3 <= '50.93333333')?'orange':(marketMobileAugContents.kpi3 > '50.93333333' && marketMobileAugContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileAugContents.kpi3 >= '63.66666667' && marketMobileAugContents.kpi3 < '76.4')?'green':(marketMobileAugContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileAugContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAugContents.kpi4 == null)?'grey-2':(marketMobileAugContents.kpi4 >= '0' && marketMobileAugContents.kpi4 <= '109.6')?'red':(marketMobileAugContents.kpi4 > '109.6' && marketMobileAugContents.kpi4 <= '146.1333333')?'orange':(marketMobileAugContents.kpi4 > '146.1333333' && marketMobileAugContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileAugContents.kpi4 >= '182.6666667' && marketMobileAugContents.kpi4 < '219.2')?'green':(marketMobileAugContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAugContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileSepContents.kpi1 == null)?'grey-2':(marketMobileSepContents.kpi1 >= '0' && marketMobileSepContents.kpi1 <= '232.6')?'red':(marketMobileSepContents.kpi1 > '232.6' && marketMobileSepContents.kpi1 <= '310.1333333')?'orange':(marketMobileSepContents.kpi1 > '310.1333333' && marketMobileSepContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileSepContents.kpi1 >= '387.6666667' && marketMobileSepContents.kpi1 < '465.2')?'green':(marketMobileSepContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileSepContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileSepContents.kpi2 == null)?'grey-2':(marketMobileSepContents.kpi2 >= '0' && marketMobileSepContents.kpi2 <= '11.6')?'red':(marketMobileSepContents.kpi2 > '11.6' && marketMobileSepContents.kpi2 <= '15.46666667')?'orange':(marketMobileSepContents.kpi2 > '15.46666667' && marketMobileSepContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileSepContents.kpi2 >= '19.33333333' && marketMobileSepContents.kpi2 < '23.2')?'green':(marketMobileSepContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileSepContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileSepContents.kpi3 == null)?'grey-2':(marketMobileSepContents.kpi3 >= '0' && marketMobileSepContents.kpi3 <= '38.2')?'red':(marketMobileSepContents.kpi3 > '38.2' && marketMobileSepContents.kpi3 <= '50.93333333')?'orange':(marketMobileSepContents.kpi3 > '50.93333333' && marketMobileSepContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileSepContents.kpi3 >= '63.66666667' && marketMobileSepContents.kpi3 < '76.4')?'green':(marketMobileSepContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileSepContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileSepContents.kpi4 == null)?'grey-2':(marketMobileSepContents.kpi4 >= '0' && marketMobileSepContents.kpi4 <= '109.6')?'red':(marketMobileSepContents.kpi4 > '109.6' && marketMobileSepContents.kpi4 <= '146.1333333')?'orange':(marketMobileSepContents.kpi4 > '146.1333333' && marketMobileSepContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileSepContents.kpi4 >= '182.6666667' && marketMobileSepContents.kpi4 < '219.2')?'green':(marketMobileSepContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileSepContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileOctContents.kpi1 == null)?'grey-2':(marketMobileOctContents.kpi1 >= '0' && marketMobileOctContents.kpi1 <= '232.6')?'red':(marketMobileOctContents.kpi1 > '232.6' && marketMobileOctContents.kpi1 <= '310.1333333')?'orange':(marketMobileOctContents.kpi1 > '310.1333333' && marketMobileOctContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileOctContents.kpi1 >= '387.6666667' && marketMobileOctContents.kpi1 < '465.2')?'green':(marketMobileOctContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileOctContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileOctContents.kpi2 == null)?'grey-2':(marketMobileOctContents.kpi2 >= '0' && marketMobileOctContents.kpi2 <= '11.6')?'red':(marketMobileOctContents.kpi2 > '11.6' && marketMobileOctContents.kpi2 <= '15.46666667')?'orange':(marketMobileOctContents.kpi2 > '15.46666667' && marketMobileOctContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileOctContents.kpi2 >= '19.33333333' && marketMobileOctContents.kpi2 < '23.2')?'green':(marketMobileOctContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileOctContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileOctContents.kpi3 == null)?'grey-2':(marketMobileOctContents.kpi3 >= '0' && marketMobileOctContents.kpi3 <= '38.2')?'red':(marketMobileOctContents.kpi3 > '38.2' && marketMobileOctContents.kpi3 <= '50.93333333')?'orange':(marketMobileOctContents.kpi3 > '50.93333333' && marketMobileOctContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileOctContents.kpi3 >= '63.66666667' && marketMobileOctContents.kpi3 < '76.4')?'green':(marketMobileOctContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileOctContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileOctContents.kpi4 == null)?'grey-2':(marketMobileOctContents.kpi4 >= '0' && marketMobileOctContents.kpi4 <= '109.6')?'red':(marketMobileOctContents.kpi4 > '109.6' && marketMobileOctContents.kpi4 <= '146.1333333')?'orange':(marketMobileOctContents.kpi4 > '146.1333333' && marketMobileOctContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileOctContents.kpi4 >= '182.6666667' && marketMobileOctContents.kpi4 < '219.2')?'green':(marketMobileOctContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileOctContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileNovContents.kpi1 == null)?'grey-2':(marketMobileNovContents.kpi1 >= '0' && marketMobileNovContents.kpi1 <= '232.6')?'red':(marketMobileNovContents.kpi1 > '232.6' && marketMobileNovContents.kpi1 <= '310.1333333')?'orange':(marketMobileNovContents.kpi1 > '310.1333333' && marketMobileNovContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileNovContents.kpi1 >= '387.6666667' && marketMobileNovContents.kpi1 < '465.2')?'green':(marketMobileNovContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileNovContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileNovContents.kpi2 == null)?'grey-2':(marketMobileNovContents.kpi2 >= '0' && marketMobileNovContents.kpi2 <= '11.6')?'red':(marketMobileNovContents.kpi2 > '11.6' && marketMobileNovContents.kpi2 <= '15.46666667')?'orange':(marketMobileNovContents.kpi2 > '15.46666667' && marketMobileNovContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileNovContents.kpi2 >= '19.33333333' && marketMobileNovContents.kpi2 < '23.2')?'green':(marketMobileNovContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileNovContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileNovContents.kpi3 == null)?'grey-2':(marketMobileNovContents.kpi3 >= '0' && marketMobileNovContents.kpi3 <= '38.2')?'red':(marketMobileNovContents.kpi3 > '38.2' && marketMobileNovContents.kpi3 <= '50.93333333')?'orange':(marketMobileNovContents.kpi3 > '50.93333333' && marketMobileNovContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileNovContents.kpi3 >= '63.66666667' && marketMobileNovContents.kpi3 < '76.4')?'green':(marketMobileNovContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileNovContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileNovContents.kpi4 == null)?'grey-2':(marketMobileNovContents.kpi4 >= '0' && marketMobileNovContents.kpi4 <= '109.6')?'red':(marketMobileNovContents.kpi4 > '109.6' && marketMobileNovContents.kpi4 <= '146.1333333')?'orange':(marketMobileNovContents.kpi4 > '146.1333333' && marketMobileNovContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileNovContents.kpi4 >= '182.6666667' && marketMobileNovContents.kpi4 < '219.2')?'green':(marketMobileNovContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileNovContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileDecContents.kpi1 == null)?'grey-2':(marketMobileDecContents.kpi1 >= '0' && marketMobileDecContents.kpi1 <= '232.6')?'red':(marketMobileDecContents.kpi1 > '232.6' && marketMobileDecContents.kpi1 <= '310.1333333')?'orange':(marketMobileDecContents.kpi1 > '310.1333333' && marketMobileDecContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileDecContents.kpi1 >= '387.6666667' && marketMobileDecContents.kpi1 < '465.2')?'green':(marketMobileDecContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileDecContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileDecContents.kpi2 == null)?'grey-2':(marketMobileDecContents.kpi2 >= '0' && marketMobileDecContents.kpi2 <= '11.6')?'red':(marketMobileDecContents.kpi2 > '11.6' && marketMobileDecContents.kpi2 <= '15.46666667')?'orange':(marketMobileDecContents.kpi2 > '15.46666667' && marketMobileDecContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileDecContents.kpi2 >= '19.33333333' && marketMobileDecContents.kpi2 < '23.2')?'green':(marketMobileDecContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileDecContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileDecContents.kpi3 == null)?'grey-2':(marketMobileDecContents.kpi3 >= '0' && marketMobileDecContents.kpi3 <= '38.2')?'red':(marketMobileDecContents.kpi3 > '38.2' && marketMobileDecContents.kpi3 <= '50.93333333')?'orange':(marketMobileDecContents.kpi3 > '50.93333333' && marketMobileDecContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileDecContents.kpi3 >= '63.66666667' && marketMobileDecContents.kpi3 < '76.4')?'green':(marketMobileDecContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileDecContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileDecContents.kpi4 == null)?'grey-2':(marketMobileDecContents.kpi4 >= '0' && marketMobileDecContents.kpi4 <= '109.6')?'red':(marketMobileDecContents.kpi4 > '109.6' && marketMobileDecContents.kpi4 <= '146.1333333')?'orange':(marketMobileDecContents.kpi4 > '146.1333333' && marketMobileDecContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileDecContents.kpi4 >= '182.6666667' && marketMobileDecContents.kpi4 < '219.2')?'green':(marketMobileDecContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileDecContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                                <q-tooltip># total contact</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip>Activities (#)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of pick-up contacts</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileJanContents.kpi1 == null)?'grey-2':(marketMobileJanContents.kpi1 >= '0' && marketMobileJanContents.kpi1 <= '232.6')?'red':(marketMobileJanContents.kpi1 > '232.6' && marketMobileJanContents.kpi1 <= '310.1333333')?'orange':(marketMobileJanContents.kpi1 > '310.1333333' && marketMobileJanContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileJanContents.kpi1 >= '387.6666667' && marketMobileJanContents.kpi1 < '465.2')?'green':(marketMobileJanContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJanContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJanContents.kpi2 == null)?'grey-2':(marketMobileJanContents.kpi2 >= '0' && marketMobileJanContents.kpi2 <= '11.6')?'red':(marketMobileJanContents.kpi2 > '11.6' && marketMobileJanContents.kpi2 <= '15.46666667')?'orange':(marketMobileJanContents.kpi2 > '15.46666667' && marketMobileJanContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileJanContents.kpi2 >= '19.33333333' && marketMobileJanContents.kpi2 < '23.2')?'green':(marketMobileJanContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJanContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJanContents.kpi3 == null)?'grey-2':(marketMobileJanContents.kpi3 >= '0' && marketMobileJanContents.kpi3 <= '38.2')?'red':(marketMobileJanContents.kpi3 > '38.2' && marketMobileJanContents.kpi3 <= '50.93333333')?'orange':(marketMobileJanContents.kpi3 > '50.93333333' && marketMobileJanContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileJanContents.kpi3 >= '63.66666667' && marketMobileJanContents.kpi3 < '76.4')?'green':(marketMobileJanContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileJanContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJanContents.kpi4 == null)?'grey-2':(marketMobileJanContents.kpi4 >= '0' && marketMobileJanContents.kpi4 <= '109.6')?'red':(marketMobileJanContents.kpi4 > '109.6' && marketMobileJanContents.kpi4 <= '146.1333333')?'orange':(marketMobileJanContents.kpi4 > '146.1333333' && marketMobileJanContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileJanContents.kpi4 >= '182.6666667' && marketMobileJanContents.kpi4 < '219.2')?'green':(marketMobileJanContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJanContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileFebContents.kpi1 == null)?'grey-2':(marketMobileFebContents.kpi1 >= '0' && marketMobileFebContents.kpi1 <= '232.6')?'red':(marketMobileFebContents.kpi1 > '232.6' && marketMobileFebContents.kpi1 <= '310.1333333')?'orange':(marketMobileFebContents.kpi1 > '310.1333333' && marketMobileFebContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileFebContents.kpi1 >= '387.6666667' && marketMobileFebContents.kpi1 < '465.2')?'green':(marketMobileFebContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileFebContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileFebContents.kpi2 == null)?'grey-2':(marketMobileFebContents.kpi2 >= '0' && marketMobileFebContents.kpi2 <= '11.6')?'red':(marketMobileFebContents.kpi2 > '11.6' && marketMobileFebContents.kpi2 <= '15.46666667')?'orange':(marketMobileFebContents.kpi2 > '15.46666667' && marketMobileFebContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileFebContents.kpi2 >= '19.33333333' && marketMobileFebContents.kpi2 < '23.2')?'green':(marketMobileFebContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileFebContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileFebContents.kpi3 == null)?'grey-2':(marketMobileFebContents.kpi3 >= '0' && marketMobileFebContents.kpi3 <= '38.2')?'red':(marketMobileFebContents.kpi3 > '38.2' && marketMobileFebContents.kpi3 <= '50.93333333')?'orange':(marketMobileFebContents.kpi3 > '50.93333333' && marketMobileFebContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileFebContents.kpi3 >= '63.66666667' && marketMobileFebContents.kpi3 < '76.4')?'green':(marketMobileFebContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileFebContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileFebContents.kpi4 == null)?'grey-2':(marketMobileFebContents.kpi4 >= '0' && marketMobileFebContents.kpi4 <= '109.6')?'red':(marketMobileFebContents.kpi4 > '109.6' && marketMobileFebContents.kpi4 <= '146.1333333')?'orange':(marketMobileFebContents.kpi4 > '146.1333333' && marketMobileFebContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileFebContents.kpi4 >= '182.6666667' && marketMobileFebContents.kpi4 < '219.2')?'green':(marketMobileFebContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileFebContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileMarContents.kpi1 == null)?'grey-2':(marketMobileMarContents.kpi1 >= '0' && marketMobileMarContents.kpi1 <= '232.6')?'red':(marketMobileMarContents.kpi1 > '232.6' && marketMobileMarContents.kpi1 <= '310.1333333')?'orange':(marketMobileMarContents.kpi1 > '310.1333333' && marketMobileMarContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileMarContents.kpi1 >= '387.6666667' && marketMobileMarContents.kpi1 < '465.2')?'green':(marketMobileMarContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMarContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMarContents.kpi2 == null)?'grey-2':(marketMobileMarContents.kpi2 >= '0' && marketMobileMarContents.kpi2 <= '11.6')?'red':(marketMobileMarContents.kpi2 > '11.6' && marketMobileMarContents.kpi2 <= '15.46666667')?'orange':(marketMobileMarContents.kpi2 > '15.46666667' && marketMobileMarContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileMarContents.kpi2 >= '19.33333333' && marketMobileMarContents.kpi2 < '23.2')?'green':(marketMobileMarContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMarContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMarContents.kpi3 == null)?'grey-2':(marketMobileMarContents.kpi3 >= '0' && marketMobileMarContents.kpi3 <= '38.2')?'red':(marketMobileMarContents.kpi3 > '38.2' && marketMobileMarContents.kpi3 <= '50.93333333')?'orange':(marketMobileMarContents.kpi3 > '50.93333333' && marketMobileMarContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileMarContents.kpi3 >= '63.66666667' && marketMobileMarContents.kpi3 < '76.4')?'green':(marketMobileMarContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileMarContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMarContents.kpi4 == null)?'grey-2':(marketMobileMarContents.kpi4 >= '0' && marketMobileMarContents.kpi4 <= '109.6')?'red':(marketMobileMarContents.kpi4 > '109.6' && marketMobileMarContents.kpi4 <= '146.1333333')?'orange':(marketMobileMarContents.kpi4 > '146.1333333' && marketMobileMarContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileMarContents.kpi4 >= '182.6666667' && marketMobileMarContents.kpi4 < '219.2')?'green':(marketMobileMarContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMarContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileAprContents.kpi1 == null)?'grey-2':(marketMobileAprContents.kpi1 >= '0' && marketMobileAprContents.kpi1 <= '232.6')?'red':(marketMobileAprContents.kpi1 > '232.6' && marketMobileAprContents.kpi1 <= '310.1333333')?'orange':(marketMobileAprContents.kpi1 > '310.1333333' && marketMobileAprContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileAprContents.kpi1 >= '387.6666667' && marketMobileAprContents.kpi1 < '465.2')?'green':(marketMobileAprContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAprContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAprContents.kpi2 == null)?'grey-2':(marketMobileAprContents.kpi2 >= '0' && marketMobileAprContents.kpi2 <= '11.6')?'red':(marketMobileAprContents.kpi2 > '11.6' && marketMobileAprContents.kpi2 <= '15.46666667')?'orange':(marketMobileAprContents.kpi2 > '15.46666667' && marketMobileAprContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileAprContents.kpi2 >= '19.33333333' && marketMobileAprContents.kpi2 < '23.2')?'green':(marketMobileAprContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAprContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAprContents.kpi3 == null)?'grey-2':(marketMobileAprContents.kpi3 >= '0' && marketMobileAprContents.kpi3 <= '38.2')?'red':(marketMobileAprContents.kpi3 > '38.2' && marketMobileAprContents.kpi3 <= '50.93333333')?'orange':(marketMobileAprContents.kpi3 > '50.93333333' && marketMobileAprContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileAprContents.kpi3 >= '63.66666667' && marketMobileAprContents.kpi3 < '76.4')?'green':(marketMobileAprContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileAprContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAprContents.kpi4 == null)?'grey-2':(marketMobileAprContents.kpi4 >= '0' && marketMobileAprContents.kpi4 <= '109.6')?'red':(marketMobileAprContents.kpi4 > '109.6' && marketMobileAprContents.kpi4 <= '146.1333333')?'orange':(marketMobileAprContents.kpi4 > '146.1333333' && marketMobileAprContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileAprContents.kpi4 >= '182.6666667' && marketMobileAprContents.kpi4 < '219.2')?'green':(marketMobileAprContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAprContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileMayContents.kpi1 == null)?'grey-2':(marketMobileMayContents.kpi1 >= '0' && marketMobileMayContents.kpi1 <= '232.6')?'red':(marketMobileMayContents.kpi1 > '232.6' && marketMobileMayContents.kpi1 <= '310.1333333')?'orange':(marketMobileMayContents.kpi1 > '310.1333333' && marketMobileMayContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileMayContents.kpi1 >= '387.6666667' && marketMobileMayContents.kpi1 < '465.2')?'green':(marketMobileMayContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMayContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMayContents.kpi2 == null)?'grey-2':(marketMobileMayContents.kpi2 >= '0' && marketMobileMayContents.kpi2 <= '11.6')?'red':(marketMobileMayContents.kpi2 > '11.6' && marketMobileMayContents.kpi2 <= '15.46666667')?'orange':(marketMobileMayContents.kpi2 > '15.46666667' && marketMobileMayContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileMayContents.kpi2 >= '19.33333333' && marketMobileMayContents.kpi2 < '23.2')?'green':(marketMobileMayContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMayContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMayContents.kpi3 == null)?'grey-2':(marketMobileMayContents.kpi3 >= '0' && marketMobileMayContents.kpi3 <= '38.2')?'red':(marketMobileMayContents.kpi3 > '38.2' && marketMobileMayContents.kpi3 <= '50.93333333')?'orange':(marketMobileMayContents.kpi3 > '50.93333333' && marketMobileMayContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileMayContents.kpi3 >= '63.66666667' && marketMobileMayContents.kpi3 < '76.4')?'green':(marketMobileMayContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileMayContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMayContents.kpi4 == null)?'grey-2':(marketMobileMayContents.kpi4 >= '0' && marketMobileMayContents.kpi4 <= '109.6')?'red':(marketMobileMayContents.kpi4 > '109.6' && marketMobileMayContents.kpi4 <= '146.1333333')?'orange':(marketMobileMayContents.kpi4 > '146.1333333' && marketMobileMayContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileMayContents.kpi4 >= '182.6666667' && marketMobileMayContents.kpi4 < '219.2')?'green':(marketMobileMayContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMayContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileJunContents.kpi1 == null)?'grey-2':(marketMobileJunContents.kpi1 >= '0' && marketMobileJunContents.kpi1 <= '232.6')?'red':(marketMobileJunContents.kpi1 > '232.6' && marketMobileJunContents.kpi1 <= '310.1333333')?'orange':(marketMobileJunContents.kpi1 > '310.1333333' && marketMobileJunContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileJunContents.kpi1 >= '387.6666667' && marketMobileJunContents.kpi1 < '465.2')?'green':(marketMobileJunContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJunContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJunContents.kpi2 == null)?'grey-2':(marketMobileJunContents.kpi2 >= '0' && marketMobileJunContents.kpi2 <= '11.6')?'red':(marketMobileJunContents.kpi2 > '11.6' && marketMobileJunContents.kpi2 <= '15.46666667')?'orange':(marketMobileJunContents.kpi2 > '15.46666667' && marketMobileJunContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileJunContents.kpi2 >= '19.33333333' && marketMobileJunContents.kpi2 < '23.2')?'green':(marketMobileJunContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJunContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJunContents.kpi3 == null)?'grey-2':(marketMobileJunContents.kpi3 >= '0' && marketMobileJunContents.kpi3 <= '38.2')?'red':(marketMobileJunContents.kpi3 > '38.2' && marketMobileJunContents.kpi3 <= '50.93333333')?'orange':(marketMobileJunContents.kpi3 > '50.93333333' && marketMobileJunContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileJunContents.kpi3 >= '63.66666667' && marketMobileJunContents.kpi3 < '76.4')?'green':(marketMobileJunContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileJunContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJunContents.kpi4 == null)?'grey-2':(marketMobileJunContents.kpi4 >= '0' && marketMobileJunContents.kpi4 <= '109.6')?'red':(marketMobileJunContents.kpi4 > '109.6' && marketMobileJunContents.kpi4 <= '146.1333333')?'orange':(marketMobileJunContents.kpi4 > '146.1333333' && marketMobileJunContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileJunContents.kpi4 >= '182.6666667' && marketMobileJunContents.kpi4 < '219.2')?'green':(marketMobileJunContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJunContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileJulContents.kpi1 == null)?'grey-2':(marketMobileJulContents.kpi1 >= '0' && marketMobileJulContents.kpi1 <= '232.6')?'red':(marketMobileJulContents.kpi1 > '232.6' && marketMobileJulContents.kpi1 <= '310.1333333')?'orange':(marketMobileJulContents.kpi1 > '310.1333333' && marketMobileJulContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileJulContents.kpi1 >= '387.6666667' && marketMobileJulContents.kpi1 < '465.2')?'green':(marketMobileJulContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJulContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJulContents.kpi2 == null)?'grey-2':(marketMobileJulContents.kpi2 >= '0' && marketMobileJulContents.kpi2 <= '11.6')?'red':(marketMobileJulContents.kpi2 > '11.6' && marketMobileJulContents.kpi2 <= '15.46666667')?'orange':(marketMobileJulContents.kpi2 > '15.46666667' && marketMobileJulContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileJulContents.kpi2 >= '19.33333333' && marketMobileJulContents.kpi2 < '23.2')?'green':(marketMobileJulContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJulContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJulContents.kpi3 == null)?'grey-2':(marketMobileJulContents.kpi3 >= '0' && marketMobileJulContents.kpi3 <= '38.2')?'red':(marketMobileJulContents.kpi3 > '38.2' && marketMobileJulContents.kpi3 <= '50.93333333')?'orange':(marketMobileJulContents.kpi3 > '50.93333333' && marketMobileJulContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileJulContents.kpi3 >= '63.66666667' && marketMobileJulContents.kpi3 < '76.4')?'green':(marketMobileJulContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileJulContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJulContents.kpi4 == null)?'grey-2':(marketMobileJulContents.kpi4 >= '0' && marketMobileJulContents.kpi4 <= '109.6')?'red':(marketMobileJulContents.kpi4 > '109.6' && marketMobileJulContents.kpi4 <= '146.1333333')?'orange':(marketMobileJulContents.kpi4 > '146.1333333' && marketMobileJulContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileJulContents.kpi4 >= '182.6666667' && marketMobileJulContents.kpi4 < '219.2')?'green':(marketMobileJulContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJulContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileAugContents.kpi1 == null)?'grey-2':(marketMobileAugContents.kpi1 >= '0' && marketMobileAugContents.kpi1 <= '232.6')?'red':(marketMobileAugContents.kpi1 > '232.6' && marketMobileAugContents.kpi1 <= '310.1333333')?'orange':(marketMobileAugContents.kpi1 > '310.1333333' && marketMobileAugContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileAugContents.kpi1 >= '387.6666667' && marketMobileAugContents.kpi1 < '465.2')?'green':(marketMobileAugContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAugContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAugContents.kpi2 == null)?'grey-2':(marketMobileAugContents.kpi2 >= '0' && marketMobileAugContents.kpi2 <= '11.6')?'red':(marketMobileAugContents.kpi2 > '11.6' && marketMobileAugContents.kpi2 <= '15.46666667')?'orange':(marketMobileAugContents.kpi2 > '15.46666667' && marketMobileAugContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileAugContents.kpi2 >= '19.33333333' && marketMobileAugContents.kpi2 < '23.2')?'green':(marketMobileAugContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAugContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAugContents.kpi3 == null)?'grey-2':(marketMobileAugContents.kpi3 >= '0' && marketMobileAugContents.kpi3 <= '38.2')?'red':(marketMobileAugContents.kpi3 > '38.2' && marketMobileAugContents.kpi3 <= '50.93333333')?'orange':(marketMobileAugContents.kpi3 > '50.93333333' && marketMobileAugContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileAugContents.kpi3 >= '63.66666667' && marketMobileAugContents.kpi3 < '76.4')?'green':(marketMobileAugContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileAugContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAugContents.kpi4 == null)?'grey-2':(marketMobileAugContents.kpi4 >= '0' && marketMobileAugContents.kpi4 <= '109.6')?'red':(marketMobileAugContents.kpi4 > '109.6' && marketMobileAugContents.kpi4 <= '146.1333333')?'orange':(marketMobileAugContents.kpi4 > '146.1333333' && marketMobileAugContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileAugContents.kpi4 >= '182.6666667' && marketMobileAugContents.kpi4 < '219.2')?'green':(marketMobileAugContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAugContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileSepContents.kpi1 == null)?'grey-2':(marketMobileSepContents.kpi1 >= '0' && marketMobileSepContents.kpi1 <= '232.6')?'red':(marketMobileSepContents.kpi1 > '232.6' && marketMobileSepContents.kpi1 <= '310.1333333')?'orange':(marketMobileSepContents.kpi1 > '310.1333333' && marketMobileSepContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileSepContents.kpi1 >= '387.6666667' && marketMobileSepContents.kpi1 < '465.2')?'green':(marketMobileSepContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileSepContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileSepContents.kpi2 == null)?'grey-2':(marketMobileSepContents.kpi2 >= '0' && marketMobileSepContents.kpi2 <= '11.6')?'red':(marketMobileSepContents.kpi2 > '11.6' && marketMobileSepContents.kpi2 <= '15.46666667')?'orange':(marketMobileSepContents.kpi2 > '15.46666667' && marketMobileSepContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileSepContents.kpi2 >= '19.33333333' && marketMobileSepContents.kpi2 < '23.2')?'green':(marketMobileSepContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileSepContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileSepContents.kpi3 == null)?'grey-2':(marketMobileSepContents.kpi3 >= '0' && marketMobileSepContents.kpi3 <= '38.2')?'red':(marketMobileSepContents.kpi3 > '38.2' && marketMobileSepContents.kpi3 <= '50.93333333')?'orange':(marketMobileSepContents.kpi3 > '50.93333333' && marketMobileSepContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileSepContents.kpi3 >= '63.66666667' && marketMobileSepContents.kpi3 < '76.4')?'green':(marketMobileSepContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileSepContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileSepContents.kpi4 == null)?'grey-2':(marketMobileSepContents.kpi4 >= '0' && marketMobileSepContents.kpi4 <= '109.6')?'red':(marketMobileSepContents.kpi4 > '109.6' && marketMobileSepContents.kpi4 <= '146.1333333')?'orange':(marketMobileSepContents.kpi4 > '146.1333333' && marketMobileSepContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileSepContents.kpi4 >= '182.6666667' && marketMobileSepContents.kpi4 < '219.2')?'green':(marketMobileSepContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileSepContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileOctContents.kpi1 == null)?'grey-2':(marketMobileOctContents.kpi1 >= '0' && marketMobileOctContents.kpi1 <= '232.6')?'red':(marketMobileOctContents.kpi1 > '232.6' && marketMobileOctContents.kpi1 <= '310.1333333')?'orange':(marketMobileOctContents.kpi1 > '310.1333333' && marketMobileOctContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileOctContents.kpi1 >= '387.6666667' && marketMobileOctContents.kpi1 < '465.2')?'green':(marketMobileOctContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileOctContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileOctContents.kpi2 == null)?'grey-2':(marketMobileOctContents.kpi2 >= '0' && marketMobileOctContents.kpi2 <= '11.6')?'red':(marketMobileOctContents.kpi2 > '11.6' && marketMobileOctContents.kpi2 <= '15.46666667')?'orange':(marketMobileOctContents.kpi2 > '15.46666667' && marketMobileOctContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileOctContents.kpi2 >= '19.33333333' && marketMobileOctContents.kpi2 < '23.2')?'green':(marketMobileOctContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileOctContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileOctContents.kpi3 == null)?'grey-2':(marketMobileOctContents.kpi3 >= '0' && marketMobileOctContents.kpi3 <= '38.2')?'red':(marketMobileOctContents.kpi3 > '38.2' && marketMobileOctContents.kpi3 <= '50.93333333')?'orange':(marketMobileOctContents.kpi3 > '50.93333333' && marketMobileOctContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileOctContents.kpi3 >= '63.66666667' && marketMobileOctContents.kpi3 < '76.4')?'green':(marketMobileOctContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileOctContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileOctContents.kpi4 == null)?'grey-2':(marketMobileOctContents.kpi4 >= '0' && marketMobileOctContents.kpi4 <= '109.6')?'red':(marketMobileOctContents.kpi4 > '109.6' && marketMobileOctContents.kpi4 <= '146.1333333')?'orange':(marketMobileOctContents.kpi4 > '146.1333333' && marketMobileOctContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileOctContents.kpi4 >= '182.6666667' && marketMobileOctContents.kpi4 < '219.2')?'green':(marketMobileOctContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileOctContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileNovContents.kpi1 == null)?'grey-2':(marketMobileNovContents.kpi1 >= '0' && marketMobileNovContents.kpi1 <= '232.6')?'red':(marketMobileNovContents.kpi1 > '232.6' && marketMobileNovContents.kpi1 <= '310.1333333')?'orange':(marketMobileNovContents.kpi1 > '310.1333333' && marketMobileNovContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileNovContents.kpi1 >= '387.6666667' && marketMobileNovContents.kpi1 < '465.2')?'green':(marketMobileNovContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileNovContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileNovContents.kpi2 == null)?'grey-2':(marketMobileNovContents.kpi2 >= '0' && marketMobileNovContents.kpi2 <= '11.6')?'red':(marketMobileNovContents.kpi2 > '11.6' && marketMobileNovContents.kpi2 <= '15.46666667')?'orange':(marketMobileNovContents.kpi2 > '15.46666667' && marketMobileNovContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileNovContents.kpi2 >= '19.33333333' && marketMobileNovContents.kpi2 < '23.2')?'green':(marketMobileNovContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileNovContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileNovContents.kpi3 == null)?'grey-2':(marketMobileNovContents.kpi3 >= '0' && marketMobileNovContents.kpi3 <= '38.2')?'red':(marketMobileNovContents.kpi3 > '38.2' && marketMobileNovContents.kpi3 <= '50.93333333')?'orange':(marketMobileNovContents.kpi3 > '50.93333333' && marketMobileNovContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileNovContents.kpi3 >= '63.66666667' && marketMobileNovContents.kpi3 < '76.4')?'green':(marketMobileNovContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileNovContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileNovContents.kpi4 == null)?'grey-2':(marketMobileNovContents.kpi4 >= '0' && marketMobileNovContents.kpi4 <= '109.6')?'red':(marketMobileNovContents.kpi4 > '109.6' && marketMobileNovContents.kpi4 <= '146.1333333')?'orange':(marketMobileNovContents.kpi4 > '146.1333333' && marketMobileNovContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileNovContents.kpi4 >= '182.6666667' && marketMobileNovContents.kpi4 < '219.2')?'green':(marketMobileNovContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileNovContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileDecContents.kpi1 == null)?'grey-2':(marketMobileDecContents.kpi1 >= '0' && marketMobileDecContents.kpi1 <= '232.6')?'red':(marketMobileDecContents.kpi1 > '232.6' && marketMobileDecContents.kpi1 <= '310.1333333')?'orange':(marketMobileDecContents.kpi1 > '310.1333333' && marketMobileDecContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileDecContents.kpi1 >= '387.6666667' && marketMobileDecContents.kpi1 < '465.2')?'green':(marketMobileDecContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileDecContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileDecContents.kpi2 == null)?'grey-2':(marketMobileDecContents.kpi2 >= '0' && marketMobileDecContents.kpi2 <= '11.6')?'red':(marketMobileDecContents.kpi2 > '11.6' && marketMobileDecContents.kpi2 <= '15.46666667')?'orange':(marketMobileDecContents.kpi2 > '15.46666667' && marketMobileDecContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileDecContents.kpi2 >= '19.33333333' && marketMobileDecContents.kpi2 < '23.2')?'green':(marketMobileDecContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileDecContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileDecContents.kpi3 == null)?'grey-2':(marketMobileDecContents.kpi3 >= '0' && marketMobileDecContents.kpi3 <= '38.2')?'red':(marketMobileDecContents.kpi3 > '38.2' && marketMobileDecContents.kpi3 <= '50.93333333')?'orange':(marketMobileDecContents.kpi3 > '50.93333333' && marketMobileDecContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileDecContents.kpi3 >= '63.66666667' && marketMobileDecContents.kpi3 < '76.4')?'green':(marketMobileDecContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileDecContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileDecContents.kpi4 == null)?'grey-2':(marketMobileDecContents.kpi4 >= '0' && marketMobileDecContents.kpi4 <= '109.6')?'red':(marketMobileDecContents.kpi4 > '109.6' && marketMobileDecContents.kpi4 <= '146.1333333')?'orange':(marketMobileDecContents.kpi4 > '146.1333333' && marketMobileDecContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileDecContents.kpi4 >= '182.6666667' && marketMobileDecContents.kpi4 < '219.2')?'green':(marketMobileDecContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileDecContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                                <q-tooltip># total contact</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip>Activities (#)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of pick-up contacts</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileJanContents.kpi1 == null)?'grey-2':(marketMobileJanContents.kpi1 >= '0' && marketMobileJanContents.kpi1 <= '232.6')?'red':(marketMobileJanContents.kpi1 > '232.6' && marketMobileJanContents.kpi1 <= '310.1333333')?'orange':(marketMobileJanContents.kpi1 > '310.1333333' && marketMobileJanContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileJanContents.kpi1 >= '387.6666667' && marketMobileJanContents.kpi1 < '465.2')?'green':(marketMobileJanContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJanContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJanContents.kpi2 == null)?'grey-2':(marketMobileJanContents.kpi2 >= '0' && marketMobileJanContents.kpi2 <= '11.6')?'red':(marketMobileJanContents.kpi2 > '11.6' && marketMobileJanContents.kpi2 <= '15.46666667')?'orange':(marketMobileJanContents.kpi2 > '15.46666667' && marketMobileJanContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileJanContents.kpi2 >= '19.33333333' && marketMobileJanContents.kpi2 < '23.2')?'green':(marketMobileJanContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJanContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJanContents.kpi3 == null)?'grey-2':(marketMobileJanContents.kpi3 >= '0' && marketMobileJanContents.kpi3 <= '38.2')?'red':(marketMobileJanContents.kpi3 > '38.2' && marketMobileJanContents.kpi3 <= '50.93333333')?'orange':(marketMobileJanContents.kpi3 > '50.93333333' && marketMobileJanContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileJanContents.kpi3 >= '63.66666667' && marketMobileJanContents.kpi3 < '76.4')?'green':(marketMobileJanContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileJanContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJanContents.kpi4 == null)?'grey-2':(marketMobileJanContents.kpi4 >= '0' && marketMobileJanContents.kpi4 <= '109.6')?'red':(marketMobileJanContents.kpi4 > '109.6' && marketMobileJanContents.kpi4 <= '146.1333333')?'orange':(marketMobileJanContents.kpi4 > '146.1333333' && marketMobileJanContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileJanContents.kpi4 >= '182.6666667' && marketMobileJanContents.kpi4 < '219.2')?'green':(marketMobileJanContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJanContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileFebContents.kpi1 == null)?'grey-2':(marketMobileFebContents.kpi1 >= '0' && marketMobileFebContents.kpi1 <= '232.6')?'red':(marketMobileFebContents.kpi1 > '232.6' && marketMobileFebContents.kpi1 <= '310.1333333')?'orange':(marketMobileFebContents.kpi1 > '310.1333333' && marketMobileFebContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileFebContents.kpi1 >= '387.6666667' && marketMobileFebContents.kpi1 < '465.2')?'green':(marketMobileFebContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileFebContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileFebContents.kpi2 == null)?'grey-2':(marketMobileFebContents.kpi2 >= '0' && marketMobileFebContents.kpi2 <= '11.6')?'red':(marketMobileFebContents.kpi2 > '11.6' && marketMobileFebContents.kpi2 <= '15.46666667')?'orange':(marketMobileFebContents.kpi2 > '15.46666667' && marketMobileFebContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileFebContents.kpi2 >= '19.33333333' && marketMobileFebContents.kpi2 < '23.2')?'green':(marketMobileFebContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileFebContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileFebContents.kpi3 == null)?'grey-2':(marketMobileFebContents.kpi3 >= '0' && marketMobileFebContents.kpi3 <= '38.2')?'red':(marketMobileFebContents.kpi3 > '38.2' && marketMobileFebContents.kpi3 <= '50.93333333')?'orange':(marketMobileFebContents.kpi3 > '50.93333333' && marketMobileFebContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileFebContents.kpi3 >= '63.66666667' && marketMobileFebContents.kpi3 < '76.4')?'green':(marketMobileFebContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileFebContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileFebContents.kpi4 == null)?'grey-2':(marketMobileFebContents.kpi4 >= '0' && marketMobileFebContents.kpi4 <= '109.6')?'red':(marketMobileFebContents.kpi4 > '109.6' && marketMobileFebContents.kpi4 <= '146.1333333')?'orange':(marketMobileFebContents.kpi4 > '146.1333333' && marketMobileFebContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileFebContents.kpi4 >= '182.6666667' && marketMobileFebContents.kpi4 < '219.2')?'green':(marketMobileFebContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileFebContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileMarContents.kpi1 == null)?'grey-2':(marketMobileMarContents.kpi1 >= '0' && marketMobileMarContents.kpi1 <= '232.6')?'red':(marketMobileMarContents.kpi1 > '232.6' && marketMobileMarContents.kpi1 <= '310.1333333')?'orange':(marketMobileMarContents.kpi1 > '310.1333333' && marketMobileMarContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileMarContents.kpi1 >= '387.6666667' && marketMobileMarContents.kpi1 < '465.2')?'green':(marketMobileMarContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMarContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMarContents.kpi2 == null)?'grey-2':(marketMobileMarContents.kpi2 >= '0' && marketMobileMarContents.kpi2 <= '11.6')?'red':(marketMobileMarContents.kpi2 > '11.6' && marketMobileMarContents.kpi2 <= '15.46666667')?'orange':(marketMobileMarContents.kpi2 > '15.46666667' && marketMobileMarContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileMarContents.kpi2 >= '19.33333333' && marketMobileMarContents.kpi2 < '23.2')?'green':(marketMobileMarContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMarContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMarContents.kpi3 == null)?'grey-2':(marketMobileMarContents.kpi3 >= '0' && marketMobileMarContents.kpi3 <= '38.2')?'red':(marketMobileMarContents.kpi3 > '38.2' && marketMobileMarContents.kpi3 <= '50.93333333')?'orange':(marketMobileMarContents.kpi3 > '50.93333333' && marketMobileMarContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileMarContents.kpi3 >= '63.66666667' && marketMobileMarContents.kpi3 < '76.4')?'green':(marketMobileMarContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileMarContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMarContents.kpi4 == null)?'grey-2':(marketMobileMarContents.kpi4 >= '0' && marketMobileMarContents.kpi4 <= '109.6')?'red':(marketMobileMarContents.kpi4 > '109.6' && marketMobileMarContents.kpi4 <= '146.1333333')?'orange':(marketMobileMarContents.kpi4 > '146.1333333' && marketMobileMarContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileMarContents.kpi4 >= '182.6666667' && marketMobileMarContents.kpi4 < '219.2')?'green':(marketMobileMarContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMarContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileAprContents.kpi1 == null)?'grey-2':(marketMobileAprContents.kpi1 >= '0' && marketMobileAprContents.kpi1 <= '232.6')?'red':(marketMobileAprContents.kpi1 > '232.6' && marketMobileAprContents.kpi1 <= '310.1333333')?'orange':(marketMobileAprContents.kpi1 > '310.1333333' && marketMobileAprContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileAprContents.kpi1 >= '387.6666667' && marketMobileAprContents.kpi1 < '465.2')?'green':(marketMobileAprContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAprContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAprContents.kpi2 == null)?'grey-2':(marketMobileAprContents.kpi2 >= '0' && marketMobileAprContents.kpi2 <= '11.6')?'red':(marketMobileAprContents.kpi2 > '11.6' && marketMobileAprContents.kpi2 <= '15.46666667')?'orange':(marketMobileAprContents.kpi2 > '15.46666667' && marketMobileAprContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileAprContents.kpi2 >= '19.33333333' && marketMobileAprContents.kpi2 < '23.2')?'green':(marketMobileAprContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAprContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAprContents.kpi3 == null)?'grey-2':(marketMobileAprContents.kpi3 >= '0' && marketMobileAprContents.kpi3 <= '38.2')?'red':(marketMobileAprContents.kpi3 > '38.2' && marketMobileAprContents.kpi3 <= '50.93333333')?'orange':(marketMobileAprContents.kpi3 > '50.93333333' && marketMobileAprContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileAprContents.kpi3 >= '63.66666667' && marketMobileAprContents.kpi3 < '76.4')?'green':(marketMobileAprContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileAprContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAprContents.kpi4 == null)?'grey-2':(marketMobileAprContents.kpi4 >= '0' && marketMobileAprContents.kpi4 <= '109.6')?'red':(marketMobileAprContents.kpi4 > '109.6' && marketMobileAprContents.kpi4 <= '146.1333333')?'orange':(marketMobileAprContents.kpi4 > '146.1333333' && marketMobileAprContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileAprContents.kpi4 >= '182.6666667' && marketMobileAprContents.kpi4 < '219.2')?'green':(marketMobileAprContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAprContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileMayContents.kpi1 == null)?'grey-2':(marketMobileMayContents.kpi1 >= '0' && marketMobileMayContents.kpi1 <= '232.6')?'red':(marketMobileMayContents.kpi1 > '232.6' && marketMobileMayContents.kpi1 <= '310.1333333')?'orange':(marketMobileMayContents.kpi1 > '310.1333333' && marketMobileMayContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileMayContents.kpi1 >= '387.6666667' && marketMobileMayContents.kpi1 < '465.2')?'green':(marketMobileMayContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMayContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMayContents.kpi2 == null)?'grey-2':(marketMobileMayContents.kpi2 >= '0' && marketMobileMayContents.kpi2 <= '11.6')?'red':(marketMobileMayContents.kpi2 > '11.6' && marketMobileMayContents.kpi2 <= '15.46666667')?'orange':(marketMobileMayContents.kpi2 > '15.46666667' && marketMobileMayContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileMayContents.kpi2 >= '19.33333333' && marketMobileMayContents.kpi2 < '23.2')?'green':(marketMobileMayContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMayContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMayContents.kpi3 == null)?'grey-2':(marketMobileMayContents.kpi3 >= '0' && marketMobileMayContents.kpi3 <= '38.2')?'red':(marketMobileMayContents.kpi3 > '38.2' && marketMobileMayContents.kpi3 <= '50.93333333')?'orange':(marketMobileMayContents.kpi3 > '50.93333333' && marketMobileMayContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileMayContents.kpi3 >= '63.66666667' && marketMobileMayContents.kpi3 < '76.4')?'green':(marketMobileMayContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileMayContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMayContents.kpi4 == null)?'grey-2':(marketMobileMayContents.kpi4 >= '0' && marketMobileMayContents.kpi4 <= '109.6')?'red':(marketMobileMayContents.kpi4 > '109.6' && marketMobileMayContents.kpi4 <= '146.1333333')?'orange':(marketMobileMayContents.kpi4 > '146.1333333' && marketMobileMayContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileMayContents.kpi4 >= '182.6666667' && marketMobileMayContents.kpi4 < '219.2')?'green':(marketMobileMayContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMayContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileJunContents.kpi1 == null)?'grey-2':(marketMobileJunContents.kpi1 >= '0' && marketMobileJunContents.kpi1 <= '232.6')?'red':(marketMobileJunContents.kpi1 > '232.6' && marketMobileJunContents.kpi1 <= '310.1333333')?'orange':(marketMobileJunContents.kpi1 > '310.1333333' && marketMobileJunContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileJunContents.kpi1 >= '387.6666667' && marketMobileJunContents.kpi1 < '465.2')?'green':(marketMobileJunContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJunContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJunContents.kpi2 == null)?'grey-2':(marketMobileJunContents.kpi2 >= '0' && marketMobileJunContents.kpi2 <= '11.6')?'red':(marketMobileJunContents.kpi2 > '11.6' && marketMobileJunContents.kpi2 <= '15.46666667')?'orange':(marketMobileJunContents.kpi2 > '15.46666667' && marketMobileJunContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileJunContents.kpi2 >= '19.33333333' && marketMobileJunContents.kpi2 < '23.2')?'green':(marketMobileJunContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJunContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJunContents.kpi3 == null)?'grey-2':(marketMobileJunContents.kpi3 >= '0' && marketMobileJunContents.kpi3 <= '38.2')?'red':(marketMobileJunContents.kpi3 > '38.2' && marketMobileJunContents.kpi3 <= '50.93333333')?'orange':(marketMobileJunContents.kpi3 > '50.93333333' && marketMobileJunContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileJunContents.kpi3 >= '63.66666667' && marketMobileJunContents.kpi3 < '76.4')?'green':(marketMobileJunContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileJunContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJunContents.kpi4 == null)?'grey-2':(marketMobileJunContents.kpi4 >= '0' && marketMobileJunContents.kpi4 <= '109.6')?'red':(marketMobileJunContents.kpi4 > '109.6' && marketMobileJunContents.kpi4 <= '146.1333333')?'orange':(marketMobileJunContents.kpi4 > '146.1333333' && marketMobileJunContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileJunContents.kpi4 >= '182.6666667' && marketMobileJunContents.kpi4 < '219.2')?'green':(marketMobileJunContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJunContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileJulContents.kpi1 == null)?'grey-2':(marketMobileJulContents.kpi1 >= '0' && marketMobileJulContents.kpi1 <= '232.6')?'red':(marketMobileJulContents.kpi1 > '232.6' && marketMobileJulContents.kpi1 <= '310.1333333')?'orange':(marketMobileJulContents.kpi1 > '310.1333333' && marketMobileJulContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileJulContents.kpi1 >= '387.6666667' && marketMobileJulContents.kpi1 < '465.2')?'green':(marketMobileJulContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJulContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJulContents.kpi2 == null)?'grey-2':(marketMobileJulContents.kpi2 >= '0' && marketMobileJulContents.kpi2 <= '11.6')?'red':(marketMobileJulContents.kpi2 > '11.6' && marketMobileJulContents.kpi2 <= '15.46666667')?'orange':(marketMobileJulContents.kpi2 > '15.46666667' && marketMobileJulContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileJulContents.kpi2 >= '19.33333333' && marketMobileJulContents.kpi2 < '23.2')?'green':(marketMobileJulContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJulContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJulContents.kpi3 == null)?'grey-2':(marketMobileJulContents.kpi3 >= '0' && marketMobileJulContents.kpi3 <= '38.2')?'red':(marketMobileJulContents.kpi3 > '38.2' && marketMobileJulContents.kpi3 <= '50.93333333')?'orange':(marketMobileJulContents.kpi3 > '50.93333333' && marketMobileJulContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileJulContents.kpi3 >= '63.66666667' && marketMobileJulContents.kpi3 < '76.4')?'green':(marketMobileJulContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileJulContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJulContents.kpi4 == null)?'grey-2':(marketMobileJulContents.kpi4 >= '0' && marketMobileJulContents.kpi4 <= '109.6')?'red':(marketMobileJulContents.kpi4 > '109.6' && marketMobileJulContents.kpi4 <= '146.1333333')?'orange':(marketMobileJulContents.kpi4 > '146.1333333' && marketMobileJulContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileJulContents.kpi4 >= '182.6666667' && marketMobileJulContents.kpi4 < '219.2')?'green':(marketMobileJulContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJulContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileAugContents.kpi1 == null)?'grey-2':(marketMobileAugContents.kpi1 >= '0' && marketMobileAugContents.kpi1 <= '232.6')?'red':(marketMobileAugContents.kpi1 > '232.6' && marketMobileAugContents.kpi1 <= '310.1333333')?'orange':(marketMobileAugContents.kpi1 > '310.1333333' && marketMobileAugContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileAugContents.kpi1 >= '387.6666667' && marketMobileAugContents.kpi1 < '465.2')?'green':(marketMobileAugContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAugContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAugContents.kpi2 == null)?'grey-2':(marketMobileAugContents.kpi2 >= '0' && marketMobileAugContents.kpi2 <= '11.6')?'red':(marketMobileAugContents.kpi2 > '11.6' && marketMobileAugContents.kpi2 <= '15.46666667')?'orange':(marketMobileAugContents.kpi2 > '15.46666667' && marketMobileAugContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileAugContents.kpi2 >= '19.33333333' && marketMobileAugContents.kpi2 < '23.2')?'green':(marketMobileAugContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAugContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAugContents.kpi3 == null)?'grey-2':(marketMobileAugContents.kpi3 >= '0' && marketMobileAugContents.kpi3 <= '38.2')?'red':(marketMobileAugContents.kpi3 > '38.2' && marketMobileAugContents.kpi3 <= '50.93333333')?'orange':(marketMobileAugContents.kpi3 > '50.93333333' && marketMobileAugContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileAugContents.kpi3 >= '63.66666667' && marketMobileAugContents.kpi3 < '76.4')?'green':(marketMobileAugContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileAugContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAugContents.kpi4 == null)?'grey-2':(marketMobileAugContents.kpi4 >= '0' && marketMobileAugContents.kpi4 <= '109.6')?'red':(marketMobileAugContents.kpi4 > '109.6' && marketMobileAugContents.kpi4 <= '146.1333333')?'orange':(marketMobileAugContents.kpi4 > '146.1333333' && marketMobileAugContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileAugContents.kpi4 >= '182.6666667' && marketMobileAugContents.kpi4 < '219.2')?'green':(marketMobileAugContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAugContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileSepContents.kpi1 == null)?'grey-2':(marketMobileSepContents.kpi1 >= '0' && marketMobileSepContents.kpi1 <= '232.6')?'red':(marketMobileSepContents.kpi1 > '232.6' && marketMobileSepContents.kpi1 <= '310.1333333')?'orange':(marketMobileSepContents.kpi1 > '310.1333333' && marketMobileSepContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileSepContents.kpi1 >= '387.6666667' && marketMobileSepContents.kpi1 < '465.2')?'green':(marketMobileSepContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileSepContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileSepContents.kpi2 == null)?'grey-2':(marketMobileSepContents.kpi2 >= '0' && marketMobileSepContents.kpi2 <= '11.6')?'red':(marketMobileSepContents.kpi2 > '11.6' && marketMobileSepContents.kpi2 <= '15.46666667')?'orange':(marketMobileSepContents.kpi2 > '15.46666667' && marketMobileSepContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileSepContents.kpi2 >= '19.33333333' && marketMobileSepContents.kpi2 < '23.2')?'green':(marketMobileSepContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileSepContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileSepContents.kpi3 == null)?'grey-2':(marketMobileSepContents.kpi3 >= '0' && marketMobileSepContents.kpi3 <= '38.2')?'red':(marketMobileSepContents.kpi3 > '38.2' && marketMobileSepContents.kpi3 <= '50.93333333')?'orange':(marketMobileSepContents.kpi3 > '50.93333333' && marketMobileSepContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileSepContents.kpi3 >= '63.66666667' && marketMobileSepContents.kpi3 < '76.4')?'green':(marketMobileSepContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileSepContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileSepContents.kpi4 == null)?'grey-2':(marketMobileSepContents.kpi4 >= '0' && marketMobileSepContents.kpi4 <= '109.6')?'red':(marketMobileSepContents.kpi4 > '109.6' && marketMobileSepContents.kpi4 <= '146.1333333')?'orange':(marketMobileSepContents.kpi4 > '146.1333333' && marketMobileSepContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileSepContents.kpi4 >= '182.6666667' && marketMobileSepContents.kpi4 < '219.2')?'green':(marketMobileSepContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileSepContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileOctContents.kpi1 == null)?'grey-2':(marketMobileOctContents.kpi1 >= '0' && marketMobileOctContents.kpi1 <= '232.6')?'red':(marketMobileOctContents.kpi1 > '232.6' && marketMobileOctContents.kpi1 <= '310.1333333')?'orange':(marketMobileOctContents.kpi1 > '310.1333333' && marketMobileOctContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileOctContents.kpi1 >= '387.6666667' && marketMobileOctContents.kpi1 < '465.2')?'green':(marketMobileOctContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileOctContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileOctContents.kpi2 == null)?'grey-2':(marketMobileOctContents.kpi2 >= '0' && marketMobileOctContents.kpi2 <= '11.6')?'red':(marketMobileOctContents.kpi2 > '11.6' && marketMobileOctContents.kpi2 <= '15.46666667')?'orange':(marketMobileOctContents.kpi2 > '15.46666667' && marketMobileOctContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileOctContents.kpi2 >= '19.33333333' && marketMobileOctContents.kpi2 < '23.2')?'green':(marketMobileOctContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileOctContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileOctContents.kpi3 == null)?'grey-2':(marketMobileOctContents.kpi3 >= '0' && marketMobileOctContents.kpi3 <= '38.2')?'red':(marketMobileOctContents.kpi3 > '38.2' && marketMobileOctContents.kpi3 <= '50.93333333')?'orange':(marketMobileOctContents.kpi3 > '50.93333333' && marketMobileOctContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileOctContents.kpi3 >= '63.66666667' && marketMobileOctContents.kpi3 < '76.4')?'green':(marketMobileOctContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileOctContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileOctContents.kpi4 == null)?'grey-2':(marketMobileOctContents.kpi4 >= '0' && marketMobileOctContents.kpi4 <= '109.6')?'red':(marketMobileOctContents.kpi4 > '109.6' && marketMobileOctContents.kpi4 <= '146.1333333')?'orange':(marketMobileOctContents.kpi4 > '146.1333333' && marketMobileOctContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileOctContents.kpi4 >= '182.6666667' && marketMobileOctContents.kpi4 < '219.2')?'green':(marketMobileOctContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileOctContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileNovContents.kpi1 == null)?'grey-2':(marketMobileNovContents.kpi1 >= '0' && marketMobileNovContents.kpi1 <= '232.6')?'red':(marketMobileNovContents.kpi1 > '232.6' && marketMobileNovContents.kpi1 <= '310.1333333')?'orange':(marketMobileNovContents.kpi1 > '310.1333333' && marketMobileNovContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileNovContents.kpi1 >= '387.6666667' && marketMobileNovContents.kpi1 < '465.2')?'green':(marketMobileNovContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileNovContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileNovContents.kpi2 == null)?'grey-2':(marketMobileNovContents.kpi2 >= '0' && marketMobileNovContents.kpi2 <= '11.6')?'red':(marketMobileNovContents.kpi2 > '11.6' && marketMobileNovContents.kpi2 <= '15.46666667')?'orange':(marketMobileNovContents.kpi2 > '15.46666667' && marketMobileNovContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileNovContents.kpi2 >= '19.33333333' && marketMobileNovContents.kpi2 < '23.2')?'green':(marketMobileNovContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileNovContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileNovContents.kpi3 == null)?'grey-2':(marketMobileNovContents.kpi3 >= '0' && marketMobileNovContents.kpi3 <= '38.2')?'red':(marketMobileNovContents.kpi3 > '38.2' && marketMobileNovContents.kpi3 <= '50.93333333')?'orange':(marketMobileNovContents.kpi3 > '50.93333333' && marketMobileNovContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileNovContents.kpi3 >= '63.66666667' && marketMobileNovContents.kpi3 < '76.4')?'green':(marketMobileNovContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileNovContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileNovContents.kpi4 == null)?'grey-2':(marketMobileNovContents.kpi4 >= '0' && marketMobileNovContents.kpi4 <= '109.6')?'red':(marketMobileNovContents.kpi4 > '109.6' && marketMobileNovContents.kpi4 <= '146.1333333')?'orange':(marketMobileNovContents.kpi4 > '146.1333333' && marketMobileNovContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileNovContents.kpi4 >= '182.6666667' && marketMobileNovContents.kpi4 < '219.2')?'green':(marketMobileNovContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileNovContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileDecContents.kpi1 == null)?'grey-2':(marketMobileDecContents.kpi1 >= '0' && marketMobileDecContents.kpi1 <= '232.6')?'red':(marketMobileDecContents.kpi1 > '232.6' && marketMobileDecContents.kpi1 <= '310.1333333')?'orange':(marketMobileDecContents.kpi1 > '310.1333333' && marketMobileDecContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileDecContents.kpi1 >= '387.6666667' && marketMobileDecContents.kpi1 < '465.2')?'green':(marketMobileDecContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileDecContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileDecContents.kpi2 == null)?'grey-2':(marketMobileDecContents.kpi2 >= '0' && marketMobileDecContents.kpi2 <= '11.6')?'red':(marketMobileDecContents.kpi2 > '11.6' && marketMobileDecContents.kpi2 <= '15.46666667')?'orange':(marketMobileDecContents.kpi2 > '15.46666667' && marketMobileDecContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileDecContents.kpi2 >= '19.33333333' && marketMobileDecContents.kpi2 < '23.2')?'green':(marketMobileDecContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileDecContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileDecContents.kpi3 == null)?'grey-2':(marketMobileDecContents.kpi3 >= '0' && marketMobileDecContents.kpi3 <= '38.2')?'red':(marketMobileDecContents.kpi3 > '38.2' && marketMobileDecContents.kpi3 <= '50.93333333')?'orange':(marketMobileDecContents.kpi3 > '50.93333333' && marketMobileDecContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileDecContents.kpi3 >= '63.66666667' && marketMobileDecContents.kpi3 < '76.4')?'green':(marketMobileDecContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileDecContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileDecContents.kpi4 == null)?'grey-2':(marketMobileDecContents.kpi4 >= '0' && marketMobileDecContents.kpi4 <= '109.6')?'red':(marketMobileDecContents.kpi4 > '109.6' && marketMobileDecContents.kpi4 <= '146.1333333')?'orange':(marketMobileDecContents.kpi4 > '146.1333333' && marketMobileDecContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileDecContents.kpi4 >= '182.6666667' && marketMobileDecContents.kpi4 < '219.2')?'green':(marketMobileDecContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileDecContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                                <q-tooltip># total contact</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip>Activities (#)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of pick-up contacts</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileJanContents.kpi1 == null)?'grey-2':(marketMobileJanContents.kpi1 >= '0' && marketMobileJanContents.kpi1 <= '232.6')?'red':(marketMobileJanContents.kpi1 > '232.6' && marketMobileJanContents.kpi1 <= '310.1333333')?'orange':(marketMobileJanContents.kpi1 > '310.1333333' && marketMobileJanContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileJanContents.kpi1 >= '387.6666667' && marketMobileJanContents.kpi1 < '465.2')?'green':(marketMobileJanContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJanContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJanContents.kpi2 == null)?'grey-2':(marketMobileJanContents.kpi2 >= '0' && marketMobileJanContents.kpi2 <= '11.6')?'red':(marketMobileJanContents.kpi2 > '11.6' && marketMobileJanContents.kpi2 <= '15.46666667')?'orange':(marketMobileJanContents.kpi2 > '15.46666667' && marketMobileJanContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileJanContents.kpi2 >= '19.33333333' && marketMobileJanContents.kpi2 < '23.2')?'green':(marketMobileJanContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJanContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJanContents.kpi3 == null)?'grey-2':(marketMobileJanContents.kpi3 >= '0' && marketMobileJanContents.kpi3 <= '38.2')?'red':(marketMobileJanContents.kpi3 > '38.2' && marketMobileJanContents.kpi3 <= '50.93333333')?'orange':(marketMobileJanContents.kpi3 > '50.93333333' && marketMobileJanContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileJanContents.kpi3 >= '63.66666667' && marketMobileJanContents.kpi3 < '76.4')?'green':(marketMobileJanContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileJanContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJanContents.kpi4 == null)?'grey-2':(marketMobileJanContents.kpi4 >= '0' && marketMobileJanContents.kpi4 <= '109.6')?'red':(marketMobileJanContents.kpi4 > '109.6' && marketMobileJanContents.kpi4 <= '146.1333333')?'orange':(marketMobileJanContents.kpi4 > '146.1333333' && marketMobileJanContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileJanContents.kpi4 >= '182.6666667' && marketMobileJanContents.kpi4 < '219.2')?'green':(marketMobileJanContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJanContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileFebContents.kpi1 == null)?'grey-2':(marketMobileFebContents.kpi1 >= '0' && marketMobileFebContents.kpi1 <= '232.6')?'red':(marketMobileFebContents.kpi1 > '232.6' && marketMobileFebContents.kpi1 <= '310.1333333')?'orange':(marketMobileFebContents.kpi1 > '310.1333333' && marketMobileFebContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileFebContents.kpi1 >= '387.6666667' && marketMobileFebContents.kpi1 < '465.2')?'green':(marketMobileFebContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileFebContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileFebContents.kpi2 == null)?'grey-2':(marketMobileFebContents.kpi2 >= '0' && marketMobileFebContents.kpi2 <= '11.6')?'red':(marketMobileFebContents.kpi2 > '11.6' && marketMobileFebContents.kpi2 <= '15.46666667')?'orange':(marketMobileFebContents.kpi2 > '15.46666667' && marketMobileFebContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileFebContents.kpi2 >= '19.33333333' && marketMobileFebContents.kpi2 < '23.2')?'green':(marketMobileFebContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileFebContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileFebContents.kpi3 == null)?'grey-2':(marketMobileFebContents.kpi3 >= '0' && marketMobileFebContents.kpi3 <= '38.2')?'red':(marketMobileFebContents.kpi3 > '38.2' && marketMobileFebContents.kpi3 <= '50.93333333')?'orange':(marketMobileFebContents.kpi3 > '50.93333333' && marketMobileFebContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileFebContents.kpi3 >= '63.66666667' && marketMobileFebContents.kpi3 < '76.4')?'green':(marketMobileFebContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileFebContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileFebContents.kpi4 == null)?'grey-2':(marketMobileFebContents.kpi4 >= '0' && marketMobileFebContents.kpi4 <= '109.6')?'red':(marketMobileFebContents.kpi4 > '109.6' && marketMobileFebContents.kpi4 <= '146.1333333')?'orange':(marketMobileFebContents.kpi4 > '146.1333333' && marketMobileFebContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileFebContents.kpi4 >= '182.6666667' && marketMobileFebContents.kpi4 < '219.2')?'green':(marketMobileFebContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileFebContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileMarContents.kpi1 == null)?'grey-2':(marketMobileMarContents.kpi1 >= '0' && marketMobileMarContents.kpi1 <= '232.6')?'red':(marketMobileMarContents.kpi1 > '232.6' && marketMobileMarContents.kpi1 <= '310.1333333')?'orange':(marketMobileMarContents.kpi1 > '310.1333333' && marketMobileMarContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileMarContents.kpi1 >= '387.6666667' && marketMobileMarContents.kpi1 < '465.2')?'green':(marketMobileMarContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMarContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMarContents.kpi2 == null)?'grey-2':(marketMobileMarContents.kpi2 >= '0' && marketMobileMarContents.kpi2 <= '11.6')?'red':(marketMobileMarContents.kpi2 > '11.6' && marketMobileMarContents.kpi2 <= '15.46666667')?'orange':(marketMobileMarContents.kpi2 > '15.46666667' && marketMobileMarContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileMarContents.kpi2 >= '19.33333333' && marketMobileMarContents.kpi2 < '23.2')?'green':(marketMobileMarContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMarContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMarContents.kpi3 == null)?'grey-2':(marketMobileMarContents.kpi3 >= '0' && marketMobileMarContents.kpi3 <= '38.2')?'red':(marketMobileMarContents.kpi3 > '38.2' && marketMobileMarContents.kpi3 <= '50.93333333')?'orange':(marketMobileMarContents.kpi3 > '50.93333333' && marketMobileMarContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileMarContents.kpi3 >= '63.66666667' && marketMobileMarContents.kpi3 < '76.4')?'green':(marketMobileMarContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileMarContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMarContents.kpi4 == null)?'grey-2':(marketMobileMarContents.kpi4 >= '0' && marketMobileMarContents.kpi4 <= '109.6')?'red':(marketMobileMarContents.kpi4 > '109.6' && marketMobileMarContents.kpi4 <= '146.1333333')?'orange':(marketMobileMarContents.kpi4 > '146.1333333' && marketMobileMarContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileMarContents.kpi4 >= '182.6666667' && marketMobileMarContents.kpi4 < '219.2')?'green':(marketMobileMarContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMarContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileAprContents.kpi1 == null)?'grey-2':(marketMobileAprContents.kpi1 >= '0' && marketMobileAprContents.kpi1 <= '232.6')?'red':(marketMobileAprContents.kpi1 > '232.6' && marketMobileAprContents.kpi1 <= '310.1333333')?'orange':(marketMobileAprContents.kpi1 > '310.1333333' && marketMobileAprContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileAprContents.kpi1 >= '387.6666667' && marketMobileAprContents.kpi1 < '465.2')?'green':(marketMobileAprContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAprContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAprContents.kpi2 == null)?'grey-2':(marketMobileAprContents.kpi2 >= '0' && marketMobileAprContents.kpi2 <= '11.6')?'red':(marketMobileAprContents.kpi2 > '11.6' && marketMobileAprContents.kpi2 <= '15.46666667')?'orange':(marketMobileAprContents.kpi2 > '15.46666667' && marketMobileAprContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileAprContents.kpi2 >= '19.33333333' && marketMobileAprContents.kpi2 < '23.2')?'green':(marketMobileAprContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAprContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAprContents.kpi3 == null)?'grey-2':(marketMobileAprContents.kpi3 >= '0' && marketMobileAprContents.kpi3 <= '38.2')?'red':(marketMobileAprContents.kpi3 > '38.2' && marketMobileAprContents.kpi3 <= '50.93333333')?'orange':(marketMobileAprContents.kpi3 > '50.93333333' && marketMobileAprContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileAprContents.kpi3 >= '63.66666667' && marketMobileAprContents.kpi3 < '76.4')?'green':(marketMobileAprContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileAprContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAprContents.kpi4 == null)?'grey-2':(marketMobileAprContents.kpi4 >= '0' && marketMobileAprContents.kpi4 <= '109.6')?'red':(marketMobileAprContents.kpi4 > '109.6' && marketMobileAprContents.kpi4 <= '146.1333333')?'orange':(marketMobileAprContents.kpi4 > '146.1333333' && marketMobileAprContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileAprContents.kpi4 >= '182.6666667' && marketMobileAprContents.kpi4 < '219.2')?'green':(marketMobileAprContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAprContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileMayContents.kpi1 == null)?'grey-2':(marketMobileMayContents.kpi1 >= '0' && marketMobileMayContents.kpi1 <= '232.6')?'red':(marketMobileMayContents.kpi1 > '232.6' && marketMobileMayContents.kpi1 <= '310.1333333')?'orange':(marketMobileMayContents.kpi1 > '310.1333333' && marketMobileMayContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileMayContents.kpi1 >= '387.6666667' && marketMobileMayContents.kpi1 < '465.2')?'green':(marketMobileMayContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMayContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMayContents.kpi2 == null)?'grey-2':(marketMobileMayContents.kpi2 >= '0' && marketMobileMayContents.kpi2 <= '11.6')?'red':(marketMobileMayContents.kpi2 > '11.6' && marketMobileMayContents.kpi2 <= '15.46666667')?'orange':(marketMobileMayContents.kpi2 > '15.46666667' && marketMobileMayContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileMayContents.kpi2 >= '19.33333333' && marketMobileMayContents.kpi2 < '23.2')?'green':(marketMobileMayContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMayContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMayContents.kpi3 == null)?'grey-2':(marketMobileMayContents.kpi3 >= '0' && marketMobileMayContents.kpi3 <= '38.2')?'red':(marketMobileMayContents.kpi3 > '38.2' && marketMobileMayContents.kpi3 <= '50.93333333')?'orange':(marketMobileMayContents.kpi3 > '50.93333333' && marketMobileMayContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileMayContents.kpi3 >= '63.66666667' && marketMobileMayContents.kpi3 < '76.4')?'green':(marketMobileMayContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileMayContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMayContents.kpi4 == null)?'grey-2':(marketMobileMayContents.kpi4 >= '0' && marketMobileMayContents.kpi4 <= '109.6')?'red':(marketMobileMayContents.kpi4 > '109.6' && marketMobileMayContents.kpi4 <= '146.1333333')?'orange':(marketMobileMayContents.kpi4 > '146.1333333' && marketMobileMayContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileMayContents.kpi4 >= '182.6666667' && marketMobileMayContents.kpi4 < '219.2')?'green':(marketMobileMayContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMayContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileJunContents.kpi1 == null)?'grey-2':(marketMobileJunContents.kpi1 >= '0' && marketMobileJunContents.kpi1 <= '232.6')?'red':(marketMobileJunContents.kpi1 > '232.6' && marketMobileJunContents.kpi1 <= '310.1333333')?'orange':(marketMobileJunContents.kpi1 > '310.1333333' && marketMobileJunContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileJunContents.kpi1 >= '387.6666667' && marketMobileJunContents.kpi1 < '465.2')?'green':(marketMobileJunContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJunContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJunContents.kpi2 == null)?'grey-2':(marketMobileJunContents.kpi2 >= '0' && marketMobileJunContents.kpi2 <= '11.6')?'red':(marketMobileJunContents.kpi2 > '11.6' && marketMobileJunContents.kpi2 <= '15.46666667')?'orange':(marketMobileJunContents.kpi2 > '15.46666667' && marketMobileJunContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileJunContents.kpi2 >= '19.33333333' && marketMobileJunContents.kpi2 < '23.2')?'green':(marketMobileJunContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJunContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJunContents.kpi3 == null)?'grey-2':(marketMobileJunContents.kpi3 >= '0' && marketMobileJunContents.kpi3 <= '38.2')?'red':(marketMobileJunContents.kpi3 > '38.2' && marketMobileJunContents.kpi3 <= '50.93333333')?'orange':(marketMobileJunContents.kpi3 > '50.93333333' && marketMobileJunContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileJunContents.kpi3 >= '63.66666667' && marketMobileJunContents.kpi3 < '76.4')?'green':(marketMobileJunContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileJunContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJunContents.kpi4 == null)?'grey-2':(marketMobileJunContents.kpi4 >= '0' && marketMobileJunContents.kpi4 <= '109.6')?'red':(marketMobileJunContents.kpi4 > '109.6' && marketMobileJunContents.kpi4 <= '146.1333333')?'orange':(marketMobileJunContents.kpi4 > '146.1333333' && marketMobileJunContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileJunContents.kpi4 >= '182.6666667' && marketMobileJunContents.kpi4 < '219.2')?'green':(marketMobileJunContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJunContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileJulContents.kpi1 == null)?'grey-2':(marketMobileJulContents.kpi1 >= '0' && marketMobileJulContents.kpi1 <= '232.6')?'red':(marketMobileJulContents.kpi1 > '232.6' && marketMobileJulContents.kpi1 <= '310.1333333')?'orange':(marketMobileJulContents.kpi1 > '310.1333333' && marketMobileJulContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileJulContents.kpi1 >= '387.6666667' && marketMobileJulContents.kpi1 < '465.2')?'green':(marketMobileJulContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJulContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJulContents.kpi2 == null)?'grey-2':(marketMobileJulContents.kpi2 >= '0' && marketMobileJulContents.kpi2 <= '11.6')?'red':(marketMobileJulContents.kpi2 > '11.6' && marketMobileJulContents.kpi2 <= '15.46666667')?'orange':(marketMobileJulContents.kpi2 > '15.46666667' && marketMobileJulContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileJulContents.kpi2 >= '19.33333333' && marketMobileJulContents.kpi2 < '23.2')?'green':(marketMobileJulContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJulContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJulContents.kpi3 == null)?'grey-2':(marketMobileJulContents.kpi3 >= '0' && marketMobileJulContents.kpi3 <= '38.2')?'red':(marketMobileJulContents.kpi3 > '38.2' && marketMobileJulContents.kpi3 <= '50.93333333')?'orange':(marketMobileJulContents.kpi3 > '50.93333333' && marketMobileJulContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileJulContents.kpi3 >= '63.66666667' && marketMobileJulContents.kpi3 < '76.4')?'green':(marketMobileJulContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileJulContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJulContents.kpi4 == null)?'grey-2':(marketMobileJulContents.kpi4 >= '0' && marketMobileJulContents.kpi4 <= '109.6')?'red':(marketMobileJulContents.kpi4 > '109.6' && marketMobileJulContents.kpi4 <= '146.1333333')?'orange':(marketMobileJulContents.kpi4 > '146.1333333' && marketMobileJulContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileJulContents.kpi4 >= '182.6666667' && marketMobileJulContents.kpi4 < '219.2')?'green':(marketMobileJulContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJulContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileAugContents.kpi1 == null)?'grey-2':(marketMobileAugContents.kpi1 >= '0' && marketMobileAugContents.kpi1 <= '232.6')?'red':(marketMobileAugContents.kpi1 > '232.6' && marketMobileAugContents.kpi1 <= '310.1333333')?'orange':(marketMobileAugContents.kpi1 > '310.1333333' && marketMobileAugContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileAugContents.kpi1 >= '387.6666667' && marketMobileAugContents.kpi1 < '465.2')?'green':(marketMobileAugContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAugContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAugContents.kpi2 == null)?'grey-2':(marketMobileAugContents.kpi2 >= '0' && marketMobileAugContents.kpi2 <= '11.6')?'red':(marketMobileAugContents.kpi2 > '11.6' && marketMobileAugContents.kpi2 <= '15.46666667')?'orange':(marketMobileAugContents.kpi2 > '15.46666667' && marketMobileAugContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileAugContents.kpi2 >= '19.33333333' && marketMobileAugContents.kpi2 < '23.2')?'green':(marketMobileAugContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAugContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAugContents.kpi3 == null)?'grey-2':(marketMobileAugContents.kpi3 >= '0' && marketMobileAugContents.kpi3 <= '38.2')?'red':(marketMobileAugContents.kpi3 > '38.2' && marketMobileAugContents.kpi3 <= '50.93333333')?'orange':(marketMobileAugContents.kpi3 > '50.93333333' && marketMobileAugContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileAugContents.kpi3 >= '63.66666667' && marketMobileAugContents.kpi3 < '76.4')?'green':(marketMobileAugContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileAugContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAugContents.kpi4 == null)?'grey-2':(marketMobileAugContents.kpi4 >= '0' && marketMobileAugContents.kpi4 <= '109.6')?'red':(marketMobileAugContents.kpi4 > '109.6' && marketMobileAugContents.kpi4 <= '146.1333333')?'orange':(marketMobileAugContents.kpi4 > '146.1333333' && marketMobileAugContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileAugContents.kpi4 >= '182.6666667' && marketMobileAugContents.kpi4 < '219.2')?'green':(marketMobileAugContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAugContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileSepContents.kpi1 == null)?'grey-2':(marketMobileSepContents.kpi1 >= '0' && marketMobileSepContents.kpi1 <= '232.6')?'red':(marketMobileSepContents.kpi1 > '232.6' && marketMobileSepContents.kpi1 <= '310.1333333')?'orange':(marketMobileSepContents.kpi1 > '310.1333333' && marketMobileSepContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileSepContents.kpi1 >= '387.6666667' && marketMobileSepContents.kpi1 < '465.2')?'green':(marketMobileSepContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileSepContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileSepContents.kpi2 == null)?'grey-2':(marketMobileSepContents.kpi2 >= '0' && marketMobileSepContents.kpi2 <= '11.6')?'red':(marketMobileSepContents.kpi2 > '11.6' && marketMobileSepContents.kpi2 <= '15.46666667')?'orange':(marketMobileSepContents.kpi2 > '15.46666667' && marketMobileSepContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileSepContents.kpi2 >= '19.33333333' && marketMobileSepContents.kpi2 < '23.2')?'green':(marketMobileSepContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileSepContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileSepContents.kpi3 == null)?'grey-2':(marketMobileSepContents.kpi3 >= '0' && marketMobileSepContents.kpi3 <= '38.2')?'red':(marketMobileSepContents.kpi3 > '38.2' && marketMobileSepContents.kpi3 <= '50.93333333')?'orange':(marketMobileSepContents.kpi3 > '50.93333333' && marketMobileSepContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileSepContents.kpi3 >= '63.66666667' && marketMobileSepContents.kpi3 < '76.4')?'green':(marketMobileSepContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileSepContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileSepContents.kpi4 == null)?'grey-2':(marketMobileSepContents.kpi4 >= '0' && marketMobileSepContents.kpi4 <= '109.6')?'red':(marketMobileSepContents.kpi4 > '109.6' && marketMobileSepContents.kpi4 <= '146.1333333')?'orange':(marketMobileSepContents.kpi4 > '146.1333333' && marketMobileSepContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileSepContents.kpi4 >= '182.6666667' && marketMobileSepContents.kpi4 < '219.2')?'green':(marketMobileSepContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileSepContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileOctContents.kpi1 == null)?'grey-2':(marketMobileOctContents.kpi1 >= '0' && marketMobileOctContents.kpi1 <= '232.6')?'red':(marketMobileOctContents.kpi1 > '232.6' && marketMobileOctContents.kpi1 <= '310.1333333')?'orange':(marketMobileOctContents.kpi1 > '310.1333333' && marketMobileOctContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileOctContents.kpi1 >= '387.6666667' && marketMobileOctContents.kpi1 < '465.2')?'green':(marketMobileOctContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileOctContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileOctContents.kpi2 == null)?'grey-2':(marketMobileOctContents.kpi2 >= '0' && marketMobileOctContents.kpi2 <= '11.6')?'red':(marketMobileOctContents.kpi2 > '11.6' && marketMobileOctContents.kpi2 <= '15.46666667')?'orange':(marketMobileOctContents.kpi2 > '15.46666667' && marketMobileOctContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileOctContents.kpi2 >= '19.33333333' && marketMobileOctContents.kpi2 < '23.2')?'green':(marketMobileOctContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileOctContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileOctContents.kpi3 == null)?'grey-2':(marketMobileOctContents.kpi3 >= '0' && marketMobileOctContents.kpi3 <= '38.2')?'red':(marketMobileOctContents.kpi3 > '38.2' && marketMobileOctContents.kpi3 <= '50.93333333')?'orange':(marketMobileOctContents.kpi3 > '50.93333333' && marketMobileOctContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileOctContents.kpi3 >= '63.66666667' && marketMobileOctContents.kpi3 < '76.4')?'green':(marketMobileOctContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileOctContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileOctContents.kpi4 == null)?'grey-2':(marketMobileOctContents.kpi4 >= '0' && marketMobileOctContents.kpi4 <= '109.6')?'red':(marketMobileOctContents.kpi4 > '109.6' && marketMobileOctContents.kpi4 <= '146.1333333')?'orange':(marketMobileOctContents.kpi4 > '146.1333333' && marketMobileOctContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileOctContents.kpi4 >= '182.6666667' && marketMobileOctContents.kpi4 < '219.2')?'green':(marketMobileOctContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileOctContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileNovContents.kpi1 == null)?'grey-2':(marketMobileNovContents.kpi1 >= '0' && marketMobileNovContents.kpi1 <= '232.6')?'red':(marketMobileNovContents.kpi1 > '232.6' && marketMobileNovContents.kpi1 <= '310.1333333')?'orange':(marketMobileNovContents.kpi1 > '310.1333333' && marketMobileNovContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileNovContents.kpi1 >= '387.6666667' && marketMobileNovContents.kpi1 < '465.2')?'green':(marketMobileNovContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileNovContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileNovContents.kpi2 == null)?'grey-2':(marketMobileNovContents.kpi2 >= '0' && marketMobileNovContents.kpi2 <= '11.6')?'red':(marketMobileNovContents.kpi2 > '11.6' && marketMobileNovContents.kpi2 <= '15.46666667')?'orange':(marketMobileNovContents.kpi2 > '15.46666667' && marketMobileNovContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileNovContents.kpi2 >= '19.33333333' && marketMobileNovContents.kpi2 < '23.2')?'green':(marketMobileNovContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileNovContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileNovContents.kpi3 == null)?'grey-2':(marketMobileNovContents.kpi3 >= '0' && marketMobileNovContents.kpi3 <= '38.2')?'red':(marketMobileNovContents.kpi3 > '38.2' && marketMobileNovContents.kpi3 <= '50.93333333')?'orange':(marketMobileNovContents.kpi3 > '50.93333333' && marketMobileNovContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileNovContents.kpi3 >= '63.66666667' && marketMobileNovContents.kpi3 < '76.4')?'green':(marketMobileNovContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileNovContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileNovContents.kpi4 == null)?'grey-2':(marketMobileNovContents.kpi4 >= '0' && marketMobileNovContents.kpi4 <= '109.6')?'red':(marketMobileNovContents.kpi4 > '109.6' && marketMobileNovContents.kpi4 <= '146.1333333')?'orange':(marketMobileNovContents.kpi4 > '146.1333333' && marketMobileNovContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileNovContents.kpi4 >= '182.6666667' && marketMobileNovContents.kpi4 < '219.2')?'green':(marketMobileNovContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileNovContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileDecContents.kpi1 == null)?'grey-2':(marketMobileDecContents.kpi1 >= '0' && marketMobileDecContents.kpi1 <= '232.6')?'red':(marketMobileDecContents.kpi1 > '232.6' && marketMobileDecContents.kpi1 <= '310.1333333')?'orange':(marketMobileDecContents.kpi1 > '310.1333333' && marketMobileDecContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileDecContents.kpi1 >= '387.6666667' && marketMobileDecContents.kpi1 < '465.2')?'green':(marketMobileDecContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileDecContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileDecContents.kpi2 == null)?'grey-2':(marketMobileDecContents.kpi2 >= '0' && marketMobileDecContents.kpi2 <= '11.6')?'red':(marketMobileDecContents.kpi2 > '11.6' && marketMobileDecContents.kpi2 <= '15.46666667')?'orange':(marketMobileDecContents.kpi2 > '15.46666667' && marketMobileDecContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileDecContents.kpi2 >= '19.33333333' && marketMobileDecContents.kpi2 < '23.2')?'green':(marketMobileDecContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileDecContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileDecContents.kpi3 == null)?'grey-2':(marketMobileDecContents.kpi3 >= '0' && marketMobileDecContents.kpi3 <= '38.2')?'red':(marketMobileDecContents.kpi3 > '38.2' && marketMobileDecContents.kpi3 <= '50.93333333')?'orange':(marketMobileDecContents.kpi3 > '50.93333333' && marketMobileDecContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileDecContents.kpi3 >= '63.66666667' && marketMobileDecContents.kpi3 < '76.4')?'green':(marketMobileDecContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileDecContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileDecContents.kpi4 == null)?'grey-2':(marketMobileDecContents.kpi4 >= '0' && marketMobileDecContents.kpi4 <= '109.6')?'red':(marketMobileDecContents.kpi4 > '109.6' && marketMobileDecContents.kpi4 <= '146.1333333')?'orange':(marketMobileDecContents.kpi4 > '146.1333333' && marketMobileDecContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileDecContents.kpi4 >= '182.6666667' && marketMobileDecContents.kpi4 < '219.2')?'green':(marketMobileDecContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileDecContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                                <q-tooltip># total contact</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip>Activities (#)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of pick-up contacts</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileJanContents.kpi1 == null)?'grey-2':(marketMobileJanContents.kpi1 >= '0' && marketMobileJanContents.kpi1 <= '232.6')?'red':(marketMobileJanContents.kpi1 > '232.6' && marketMobileJanContents.kpi1 <= '310.1333333')?'orange':(marketMobileJanContents.kpi1 > '310.1333333' && marketMobileJanContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileJanContents.kpi1 >= '387.6666667' && marketMobileJanContents.kpi1 < '465.2')?'green':(marketMobileJanContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJanContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJanContents.kpi2 == null)?'grey-2':(marketMobileJanContents.kpi2 >= '0' && marketMobileJanContents.kpi2 <= '11.6')?'red':(marketMobileJanContents.kpi2 > '11.6' && marketMobileJanContents.kpi2 <= '15.46666667')?'orange':(marketMobileJanContents.kpi2 > '15.46666667' && marketMobileJanContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileJanContents.kpi2 >= '19.33333333' && marketMobileJanContents.kpi2 < '23.2')?'green':(marketMobileJanContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJanContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJanContents.kpi3 == null)?'grey-2':(marketMobileJanContents.kpi3 >= '0' && marketMobileJanContents.kpi3 <= '38.2')?'red':(marketMobileJanContents.kpi3 > '38.2' && marketMobileJanContents.kpi3 <= '50.93333333')?'orange':(marketMobileJanContents.kpi3 > '50.93333333' && marketMobileJanContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileJanContents.kpi3 >= '63.66666667' && marketMobileJanContents.kpi3 < '76.4')?'green':(marketMobileJanContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileJanContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJanContents.kpi4 == null)?'grey-2':(marketMobileJanContents.kpi4 >= '0' && marketMobileJanContents.kpi4 <= '109.6')?'red':(marketMobileJanContents.kpi4 > '109.6' && marketMobileJanContents.kpi4 <= '146.1333333')?'orange':(marketMobileJanContents.kpi4 > '146.1333333' && marketMobileJanContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileJanContents.kpi4 >= '182.6666667' && marketMobileJanContents.kpi4 < '219.2')?'green':(marketMobileJanContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJanContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileFebContents.kpi1 == null)?'grey-2':(marketMobileFebContents.kpi1 >= '0' && marketMobileFebContents.kpi1 <= '232.6')?'red':(marketMobileFebContents.kpi1 > '232.6' && marketMobileFebContents.kpi1 <= '310.1333333')?'orange':(marketMobileFebContents.kpi1 > '310.1333333' && marketMobileFebContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileFebContents.kpi1 >= '387.6666667' && marketMobileFebContents.kpi1 < '465.2')?'green':(marketMobileFebContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileFebContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileFebContents.kpi2 == null)?'grey-2':(marketMobileFebContents.kpi2 >= '0' && marketMobileFebContents.kpi2 <= '11.6')?'red':(marketMobileFebContents.kpi2 > '11.6' && marketMobileFebContents.kpi2 <= '15.46666667')?'orange':(marketMobileFebContents.kpi2 > '15.46666667' && marketMobileFebContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileFebContents.kpi2 >= '19.33333333' && marketMobileFebContents.kpi2 < '23.2')?'green':(marketMobileFebContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileFebContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileFebContents.kpi3 == null)?'grey-2':(marketMobileFebContents.kpi3 >= '0' && marketMobileFebContents.kpi3 <= '38.2')?'red':(marketMobileFebContents.kpi3 > '38.2' && marketMobileFebContents.kpi3 <= '50.93333333')?'orange':(marketMobileFebContents.kpi3 > '50.93333333' && marketMobileFebContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileFebContents.kpi3 >= '63.66666667' && marketMobileFebContents.kpi3 < '76.4')?'green':(marketMobileFebContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileFebContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileFebContents.kpi4 == null)?'grey-2':(marketMobileFebContents.kpi4 >= '0' && marketMobileFebContents.kpi4 <= '109.6')?'red':(marketMobileFebContents.kpi4 > '109.6' && marketMobileFebContents.kpi4 <= '146.1333333')?'orange':(marketMobileFebContents.kpi4 > '146.1333333' && marketMobileFebContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileFebContents.kpi4 >= '182.6666667' && marketMobileFebContents.kpi4 < '219.2')?'green':(marketMobileFebContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileFebContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileMarContents.kpi1 == null)?'grey-2':(marketMobileMarContents.kpi1 >= '0' && marketMobileMarContents.kpi1 <= '232.6')?'red':(marketMobileMarContents.kpi1 > '232.6' && marketMobileMarContents.kpi1 <= '310.1333333')?'orange':(marketMobileMarContents.kpi1 > '310.1333333' && marketMobileMarContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileMarContents.kpi1 >= '387.6666667' && marketMobileMarContents.kpi1 < '465.2')?'green':(marketMobileMarContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMarContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMarContents.kpi2 == null)?'grey-2':(marketMobileMarContents.kpi2 >= '0' && marketMobileMarContents.kpi2 <= '11.6')?'red':(marketMobileMarContents.kpi2 > '11.6' && marketMobileMarContents.kpi2 <= '15.46666667')?'orange':(marketMobileMarContents.kpi2 > '15.46666667' && marketMobileMarContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileMarContents.kpi2 >= '19.33333333' && marketMobileMarContents.kpi2 < '23.2')?'green':(marketMobileMarContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMarContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMarContents.kpi3 == null)?'grey-2':(marketMobileMarContents.kpi3 >= '0' && marketMobileMarContents.kpi3 <= '38.2')?'red':(marketMobileMarContents.kpi3 > '38.2' && marketMobileMarContents.kpi3 <= '50.93333333')?'orange':(marketMobileMarContents.kpi3 > '50.93333333' && marketMobileMarContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileMarContents.kpi3 >= '63.66666667' && marketMobileMarContents.kpi3 < '76.4')?'green':(marketMobileMarContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileMarContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMarContents.kpi4 == null)?'grey-2':(marketMobileMarContents.kpi4 >= '0' && marketMobileMarContents.kpi4 <= '109.6')?'red':(marketMobileMarContents.kpi4 > '109.6' && marketMobileMarContents.kpi4 <= '146.1333333')?'orange':(marketMobileMarContents.kpi4 > '146.1333333' && marketMobileMarContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileMarContents.kpi4 >= '182.6666667' && marketMobileMarContents.kpi4 < '219.2')?'green':(marketMobileMarContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMarContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileAprContents.kpi1 == null)?'grey-2':(marketMobileAprContents.kpi1 >= '0' && marketMobileAprContents.kpi1 <= '232.6')?'red':(marketMobileAprContents.kpi1 > '232.6' && marketMobileAprContents.kpi1 <= '310.1333333')?'orange':(marketMobileAprContents.kpi1 > '310.1333333' && marketMobileAprContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileAprContents.kpi1 >= '387.6666667' && marketMobileAprContents.kpi1 < '465.2')?'green':(marketMobileAprContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAprContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAprContents.kpi2 == null)?'grey-2':(marketMobileAprContents.kpi2 >= '0' && marketMobileAprContents.kpi2 <= '11.6')?'red':(marketMobileAprContents.kpi2 > '11.6' && marketMobileAprContents.kpi2 <= '15.46666667')?'orange':(marketMobileAprContents.kpi2 > '15.46666667' && marketMobileAprContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileAprContents.kpi2 >= '19.33333333' && marketMobileAprContents.kpi2 < '23.2')?'green':(marketMobileAprContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAprContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAprContents.kpi3 == null)?'grey-2':(marketMobileAprContents.kpi3 >= '0' && marketMobileAprContents.kpi3 <= '38.2')?'red':(marketMobileAprContents.kpi3 > '38.2' && marketMobileAprContents.kpi3 <= '50.93333333')?'orange':(marketMobileAprContents.kpi3 > '50.93333333' && marketMobileAprContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileAprContents.kpi3 >= '63.66666667' && marketMobileAprContents.kpi3 < '76.4')?'green':(marketMobileAprContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileAprContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAprContents.kpi4 == null)?'grey-2':(marketMobileAprContents.kpi4 >= '0' && marketMobileAprContents.kpi4 <= '109.6')?'red':(marketMobileAprContents.kpi4 > '109.6' && marketMobileAprContents.kpi4 <= '146.1333333')?'orange':(marketMobileAprContents.kpi4 > '146.1333333' && marketMobileAprContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileAprContents.kpi4 >= '182.6666667' && marketMobileAprContents.kpi4 < '219.2')?'green':(marketMobileAprContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAprContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileMayContents.kpi1 == null)?'grey-2':(marketMobileMayContents.kpi1 >= '0' && marketMobileMayContents.kpi1 <= '232.6')?'red':(marketMobileMayContents.kpi1 > '232.6' && marketMobileMayContents.kpi1 <= '310.1333333')?'orange':(marketMobileMayContents.kpi1 > '310.1333333' && marketMobileMayContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileMayContents.kpi1 >= '387.6666667' && marketMobileMayContents.kpi1 < '465.2')?'green':(marketMobileMayContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMayContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMayContents.kpi2 == null)?'grey-2':(marketMobileMayContents.kpi2 >= '0' && marketMobileMayContents.kpi2 <= '11.6')?'red':(marketMobileMayContents.kpi2 > '11.6' && marketMobileMayContents.kpi2 <= '15.46666667')?'orange':(marketMobileMayContents.kpi2 > '15.46666667' && marketMobileMayContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileMayContents.kpi2 >= '19.33333333' && marketMobileMayContents.kpi2 < '23.2')?'green':(marketMobileMayContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMayContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMayContents.kpi3 == null)?'grey-2':(marketMobileMayContents.kpi3 >= '0' && marketMobileMayContents.kpi3 <= '38.2')?'red':(marketMobileMayContents.kpi3 > '38.2' && marketMobileMayContents.kpi3 <= '50.93333333')?'orange':(marketMobileMayContents.kpi3 > '50.93333333' && marketMobileMayContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileMayContents.kpi3 >= '63.66666667' && marketMobileMayContents.kpi3 < '76.4')?'green':(marketMobileMayContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileMayContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMayContents.kpi4 == null)?'grey-2':(marketMobileMayContents.kpi4 >= '0' && marketMobileMayContents.kpi4 <= '109.6')?'red':(marketMobileMayContents.kpi4 > '109.6' && marketMobileMayContents.kpi4 <= '146.1333333')?'orange':(marketMobileMayContents.kpi4 > '146.1333333' && marketMobileMayContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileMayContents.kpi4 >= '182.6666667' && marketMobileMayContents.kpi4 < '219.2')?'green':(marketMobileMayContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMayContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileJunContents.kpi1 == null)?'grey-2':(marketMobileJunContents.kpi1 >= '0' && marketMobileJunContents.kpi1 <= '232.6')?'red':(marketMobileJunContents.kpi1 > '232.6' && marketMobileJunContents.kpi1 <= '310.1333333')?'orange':(marketMobileJunContents.kpi1 > '310.1333333' && marketMobileJunContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileJunContents.kpi1 >= '387.6666667' && marketMobileJunContents.kpi1 < '465.2')?'green':(marketMobileJunContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJunContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJunContents.kpi2 == null)?'grey-2':(marketMobileJunContents.kpi2 >= '0' && marketMobileJunContents.kpi2 <= '11.6')?'red':(marketMobileJunContents.kpi2 > '11.6' && marketMobileJunContents.kpi2 <= '15.46666667')?'orange':(marketMobileJunContents.kpi2 > '15.46666667' && marketMobileJunContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileJunContents.kpi2 >= '19.33333333' && marketMobileJunContents.kpi2 < '23.2')?'green':(marketMobileJunContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJunContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJunContents.kpi3 == null)?'grey-2':(marketMobileJunContents.kpi3 >= '0' && marketMobileJunContents.kpi3 <= '38.2')?'red':(marketMobileJunContents.kpi3 > '38.2' && marketMobileJunContents.kpi3 <= '50.93333333')?'orange':(marketMobileJunContents.kpi3 > '50.93333333' && marketMobileJunContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileJunContents.kpi3 >= '63.66666667' && marketMobileJunContents.kpi3 < '76.4')?'green':(marketMobileJunContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileJunContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJunContents.kpi4 == null)?'grey-2':(marketMobileJunContents.kpi4 >= '0' && marketMobileJunContents.kpi4 <= '109.6')?'red':(marketMobileJunContents.kpi4 > '109.6' && marketMobileJunContents.kpi4 <= '146.1333333')?'orange':(marketMobileJunContents.kpi4 > '146.1333333' && marketMobileJunContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileJunContents.kpi4 >= '182.6666667' && marketMobileJunContents.kpi4 < '219.2')?'green':(marketMobileJunContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJunContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileJulContents.kpi1 == null)?'grey-2':(marketMobileJulContents.kpi1 >= '0' && marketMobileJulContents.kpi1 <= '232.6')?'red':(marketMobileJulContents.kpi1 > '232.6' && marketMobileJulContents.kpi1 <= '310.1333333')?'orange':(marketMobileJulContents.kpi1 > '310.1333333' && marketMobileJulContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileJulContents.kpi1 >= '387.6666667' && marketMobileJulContents.kpi1 < '465.2')?'green':(marketMobileJulContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJulContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJulContents.kpi2 == null)?'grey-2':(marketMobileJulContents.kpi2 >= '0' && marketMobileJulContents.kpi2 <= '11.6')?'red':(marketMobileJulContents.kpi2 > '11.6' && marketMobileJulContents.kpi2 <= '15.46666667')?'orange':(marketMobileJulContents.kpi2 > '15.46666667' && marketMobileJulContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileJulContents.kpi2 >= '19.33333333' && marketMobileJulContents.kpi2 < '23.2')?'green':(marketMobileJulContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJulContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJulContents.kpi3 == null)?'grey-2':(marketMobileJulContents.kpi3 >= '0' && marketMobileJulContents.kpi3 <= '38.2')?'red':(marketMobileJulContents.kpi3 > '38.2' && marketMobileJulContents.kpi3 <= '50.93333333')?'orange':(marketMobileJulContents.kpi3 > '50.93333333' && marketMobileJulContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileJulContents.kpi3 >= '63.66666667' && marketMobileJulContents.kpi3 < '76.4')?'green':(marketMobileJulContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileJulContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJulContents.kpi4 == null)?'grey-2':(marketMobileJulContents.kpi4 >= '0' && marketMobileJulContents.kpi4 <= '109.6')?'red':(marketMobileJulContents.kpi4 > '109.6' && marketMobileJulContents.kpi4 <= '146.1333333')?'orange':(marketMobileJulContents.kpi4 > '146.1333333' && marketMobileJulContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileJulContents.kpi4 >= '182.6666667' && marketMobileJulContents.kpi4 < '219.2')?'green':(marketMobileJulContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJulContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileAugContents.kpi1 == null)?'grey-2':(marketMobileAugContents.kpi1 >= '0' && marketMobileAugContents.kpi1 <= '232.6')?'red':(marketMobileAugContents.kpi1 > '232.6' && marketMobileAugContents.kpi1 <= '310.1333333')?'orange':(marketMobileAugContents.kpi1 > '310.1333333' && marketMobileAugContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileAugContents.kpi1 >= '387.6666667' && marketMobileAugContents.kpi1 < '465.2')?'green':(marketMobileAugContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAugContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAugContents.kpi2 == null)?'grey-2':(marketMobileAugContents.kpi2 >= '0' && marketMobileAugContents.kpi2 <= '11.6')?'red':(marketMobileAugContents.kpi2 > '11.6' && marketMobileAugContents.kpi2 <= '15.46666667')?'orange':(marketMobileAugContents.kpi2 > '15.46666667' && marketMobileAugContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileAugContents.kpi2 >= '19.33333333' && marketMobileAugContents.kpi2 < '23.2')?'green':(marketMobileAugContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAugContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAugContents.kpi3 == null)?'grey-2':(marketMobileAugContents.kpi3 >= '0' && marketMobileAugContents.kpi3 <= '38.2')?'red':(marketMobileAugContents.kpi3 > '38.2' && marketMobileAugContents.kpi3 <= '50.93333333')?'orange':(marketMobileAugContents.kpi3 > '50.93333333' && marketMobileAugContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileAugContents.kpi3 >= '63.66666667' && marketMobileAugContents.kpi3 < '76.4')?'green':(marketMobileAugContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileAugContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAugContents.kpi4 == null)?'grey-2':(marketMobileAugContents.kpi4 >= '0' && marketMobileAugContents.kpi4 <= '109.6')?'red':(marketMobileAugContents.kpi4 > '109.6' && marketMobileAugContents.kpi4 <= '146.1333333')?'orange':(marketMobileAugContents.kpi4 > '146.1333333' && marketMobileAugContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileAugContents.kpi4 >= '182.6666667' && marketMobileAugContents.kpi4 < '219.2')?'green':(marketMobileAugContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAugContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileSepContents.kpi1 == null)?'grey-2':(marketMobileSepContents.kpi1 >= '0' && marketMobileSepContents.kpi1 <= '232.6')?'red':(marketMobileSepContents.kpi1 > '232.6' && marketMobileSepContents.kpi1 <= '310.1333333')?'orange':(marketMobileSepContents.kpi1 > '310.1333333' && marketMobileSepContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileSepContents.kpi1 >= '387.6666667' && marketMobileSepContents.kpi1 < '465.2')?'green':(marketMobileSepContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileSepContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileSepContents.kpi2 == null)?'grey-2':(marketMobileSepContents.kpi2 >= '0' && marketMobileSepContents.kpi2 <= '11.6')?'red':(marketMobileSepContents.kpi2 > '11.6' && marketMobileSepContents.kpi2 <= '15.46666667')?'orange':(marketMobileSepContents.kpi2 > '15.46666667' && marketMobileSepContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileSepContents.kpi2 >= '19.33333333' && marketMobileSepContents.kpi2 < '23.2')?'green':(marketMobileSepContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileSepContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileSepContents.kpi3 == null)?'grey-2':(marketMobileSepContents.kpi3 >= '0' && marketMobileSepContents.kpi3 <= '38.2')?'red':(marketMobileSepContents.kpi3 > '38.2' && marketMobileSepContents.kpi3 <= '50.93333333')?'orange':(marketMobileSepContents.kpi3 > '50.93333333' && marketMobileSepContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileSepContents.kpi3 >= '63.66666667' && marketMobileSepContents.kpi3 < '76.4')?'green':(marketMobileSepContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileSepContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileSepContents.kpi4 == null)?'grey-2':(marketMobileSepContents.kpi4 >= '0' && marketMobileSepContents.kpi4 <= '109.6')?'red':(marketMobileSepContents.kpi4 > '109.6' && marketMobileSepContents.kpi4 <= '146.1333333')?'orange':(marketMobileSepContents.kpi4 > '146.1333333' && marketMobileSepContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileSepContents.kpi4 >= '182.6666667' && marketMobileSepContents.kpi4 < '219.2')?'green':(marketMobileSepContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileSepContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileOctContents.kpi1 == null)?'grey-2':(marketMobileOctContents.kpi1 >= '0' && marketMobileOctContents.kpi1 <= '232.6')?'red':(marketMobileOctContents.kpi1 > '232.6' && marketMobileOctContents.kpi1 <= '310.1333333')?'orange':(marketMobileOctContents.kpi1 > '310.1333333' && marketMobileOctContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileOctContents.kpi1 >= '387.6666667' && marketMobileOctContents.kpi1 < '465.2')?'green':(marketMobileOctContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileOctContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileOctContents.kpi2 == null)?'grey-2':(marketMobileOctContents.kpi2 >= '0' && marketMobileOctContents.kpi2 <= '11.6')?'red':(marketMobileOctContents.kpi2 > '11.6' && marketMobileOctContents.kpi2 <= '15.46666667')?'orange':(marketMobileOctContents.kpi2 > '15.46666667' && marketMobileOctContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileOctContents.kpi2 >= '19.33333333' && marketMobileOctContents.kpi2 < '23.2')?'green':(marketMobileOctContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileOctContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileOctContents.kpi3 == null)?'grey-2':(marketMobileOctContents.kpi3 >= '0' && marketMobileOctContents.kpi3 <= '38.2')?'red':(marketMobileOctContents.kpi3 > '38.2' && marketMobileOctContents.kpi3 <= '50.93333333')?'orange':(marketMobileOctContents.kpi3 > '50.93333333' && marketMobileOctContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileOctContents.kpi3 >= '63.66666667' && marketMobileOctContents.kpi3 < '76.4')?'green':(marketMobileOctContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileOctContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileOctContents.kpi4 == null)?'grey-2':(marketMobileOctContents.kpi4 >= '0' && marketMobileOctContents.kpi4 <= '109.6')?'red':(marketMobileOctContents.kpi4 > '109.6' && marketMobileOctContents.kpi4 <= '146.1333333')?'orange':(marketMobileOctContents.kpi4 > '146.1333333' && marketMobileOctContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileOctContents.kpi4 >= '182.6666667' && marketMobileOctContents.kpi4 < '219.2')?'green':(marketMobileOctContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileOctContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileNovContents.kpi1 == null)?'grey-2':(marketMobileNovContents.kpi1 >= '0' && marketMobileNovContents.kpi1 <= '232.6')?'red':(marketMobileNovContents.kpi1 > '232.6' && marketMobileNovContents.kpi1 <= '310.1333333')?'orange':(marketMobileNovContents.kpi1 > '310.1333333' && marketMobileNovContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileNovContents.kpi1 >= '387.6666667' && marketMobileNovContents.kpi1 < '465.2')?'green':(marketMobileNovContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileNovContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileNovContents.kpi2 == null)?'grey-2':(marketMobileNovContents.kpi2 >= '0' && marketMobileNovContents.kpi2 <= '11.6')?'red':(marketMobileNovContents.kpi2 > '11.6' && marketMobileNovContents.kpi2 <= '15.46666667')?'orange':(marketMobileNovContents.kpi2 > '15.46666667' && marketMobileNovContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileNovContents.kpi2 >= '19.33333333' && marketMobileNovContents.kpi2 < '23.2')?'green':(marketMobileNovContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileNovContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileNovContents.kpi3 == null)?'grey-2':(marketMobileNovContents.kpi3 >= '0' && marketMobileNovContents.kpi3 <= '38.2')?'red':(marketMobileNovContents.kpi3 > '38.2' && marketMobileNovContents.kpi3 <= '50.93333333')?'orange':(marketMobileNovContents.kpi3 > '50.93333333' && marketMobileNovContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileNovContents.kpi3 >= '63.66666667' && marketMobileNovContents.kpi3 < '76.4')?'green':(marketMobileNovContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileNovContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileNovContents.kpi4 == null)?'grey-2':(marketMobileNovContents.kpi4 >= '0' && marketMobileNovContents.kpi4 <= '109.6')?'red':(marketMobileNovContents.kpi4 > '109.6' && marketMobileNovContents.kpi4 <= '146.1333333')?'orange':(marketMobileNovContents.kpi4 > '146.1333333' && marketMobileNovContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileNovContents.kpi4 >= '182.6666667' && marketMobileNovContents.kpi4 < '219.2')?'green':(marketMobileNovContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileNovContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileDecContents.kpi1 == null)?'grey-2':(marketMobileDecContents.kpi1 >= '0' && marketMobileDecContents.kpi1 <= '232.6')?'red':(marketMobileDecContents.kpi1 > '232.6' && marketMobileDecContents.kpi1 <= '310.1333333')?'orange':(marketMobileDecContents.kpi1 > '310.1333333' && marketMobileDecContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileDecContents.kpi1 >= '387.6666667' && marketMobileDecContents.kpi1 < '465.2')?'green':(marketMobileDecContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileDecContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileDecContents.kpi2 == null)?'grey-2':(marketMobileDecContents.kpi2 >= '0' && marketMobileDecContents.kpi2 <= '11.6')?'red':(marketMobileDecContents.kpi2 > '11.6' && marketMobileDecContents.kpi2 <= '15.46666667')?'orange':(marketMobileDecContents.kpi2 > '15.46666667' && marketMobileDecContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileDecContents.kpi2 >= '19.33333333' && marketMobileDecContents.kpi2 < '23.2')?'green':(marketMobileDecContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileDecContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileDecContents.kpi3 == null)?'grey-2':(marketMobileDecContents.kpi3 >= '0' && marketMobileDecContents.kpi3 <= '38.2')?'red':(marketMobileDecContents.kpi3 > '38.2' && marketMobileDecContents.kpi3 <= '50.93333333')?'orange':(marketMobileDecContents.kpi3 > '50.93333333' && marketMobileDecContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileDecContents.kpi3 >= '63.66666667' && marketMobileDecContents.kpi3 < '76.4')?'green':(marketMobileDecContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileDecContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileDecContents.kpi4 == null)?'grey-2':(marketMobileDecContents.kpi4 >= '0' && marketMobileDecContents.kpi4 <= '109.6')?'red':(marketMobileDecContents.kpi4 > '109.6' && marketMobileDecContents.kpi4 <= '146.1333333')?'orange':(marketMobileDecContents.kpi4 > '146.1333333' && marketMobileDecContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileDecContents.kpi4 >= '182.6666667' && marketMobileDecContents.kpi4 < '219.2')?'green':(marketMobileDecContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileDecContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                                <q-tooltip># total contact</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip>Activities (#)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of pick-up contacts</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileJanContents.kpi1 == null)?'grey-2':(marketMobileJanContents.kpi1 >= '0' && marketMobileJanContents.kpi1 <= '232.6')?'red':(marketMobileJanContents.kpi1 > '232.6' && marketMobileJanContents.kpi1 <= '310.1333333')?'orange':(marketMobileJanContents.kpi1 > '310.1333333' && marketMobileJanContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileJanContents.kpi1 >= '387.6666667' && marketMobileJanContents.kpi1 < '465.2')?'green':(marketMobileJanContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJanContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJanContents.kpi2 == null)?'grey-2':(marketMobileJanContents.kpi2 >= '0' && marketMobileJanContents.kpi2 <= '11.6')?'red':(marketMobileJanContents.kpi2 > '11.6' && marketMobileJanContents.kpi2 <= '15.46666667')?'orange':(marketMobileJanContents.kpi2 > '15.46666667' && marketMobileJanContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileJanContents.kpi2 >= '19.33333333' && marketMobileJanContents.kpi2 < '23.2')?'green':(marketMobileJanContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJanContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJanContents.kpi3 == null)?'grey-2':(marketMobileJanContents.kpi3 >= '0' && marketMobileJanContents.kpi3 <= '38.2')?'red':(marketMobileJanContents.kpi3 > '38.2' && marketMobileJanContents.kpi3 <= '50.93333333')?'orange':(marketMobileJanContents.kpi3 > '50.93333333' && marketMobileJanContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileJanContents.kpi3 >= '63.66666667' && marketMobileJanContents.kpi3 < '76.4')?'green':(marketMobileJanContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileJanContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJanContents.kpi4 == null)?'grey-2':(marketMobileJanContents.kpi4 >= '0' && marketMobileJanContents.kpi4 <= '109.6')?'red':(marketMobileJanContents.kpi4 > '109.6' && marketMobileJanContents.kpi4 <= '146.1333333')?'orange':(marketMobileJanContents.kpi4 > '146.1333333' && marketMobileJanContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileJanContents.kpi4 >= '182.6666667' && marketMobileJanContents.kpi4 < '219.2')?'green':(marketMobileJanContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJanContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileFebContents.kpi1 == null)?'grey-2':(marketMobileFebContents.kpi1 >= '0' && marketMobileFebContents.kpi1 <= '232.6')?'red':(marketMobileFebContents.kpi1 > '232.6' && marketMobileFebContents.kpi1 <= '310.1333333')?'orange':(marketMobileFebContents.kpi1 > '310.1333333' && marketMobileFebContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileFebContents.kpi1 >= '387.6666667' && marketMobileFebContents.kpi1 < '465.2')?'green':(marketMobileFebContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileFebContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileFebContents.kpi2 == null)?'grey-2':(marketMobileFebContents.kpi2 >= '0' && marketMobileFebContents.kpi2 <= '11.6')?'red':(marketMobileFebContents.kpi2 > '11.6' && marketMobileFebContents.kpi2 <= '15.46666667')?'orange':(marketMobileFebContents.kpi2 > '15.46666667' && marketMobileFebContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileFebContents.kpi2 >= '19.33333333' && marketMobileFebContents.kpi2 < '23.2')?'green':(marketMobileFebContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileFebContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileFebContents.kpi3 == null)?'grey-2':(marketMobileFebContents.kpi3 >= '0' && marketMobileFebContents.kpi3 <= '38.2')?'red':(marketMobileFebContents.kpi3 > '38.2' && marketMobileFebContents.kpi3 <= '50.93333333')?'orange':(marketMobileFebContents.kpi3 > '50.93333333' && marketMobileFebContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileFebContents.kpi3 >= '63.66666667' && marketMobileFebContents.kpi3 < '76.4')?'green':(marketMobileFebContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileFebContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileFebContents.kpi4 == null)?'grey-2':(marketMobileFebContents.kpi4 >= '0' && marketMobileFebContents.kpi4 <= '109.6')?'red':(marketMobileFebContents.kpi4 > '109.6' && marketMobileFebContents.kpi4 <= '146.1333333')?'orange':(marketMobileFebContents.kpi4 > '146.1333333' && marketMobileFebContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileFebContents.kpi4 >= '182.6666667' && marketMobileFebContents.kpi4 < '219.2')?'green':(marketMobileFebContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileFebContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileMarContents.kpi1 == null)?'grey-2':(marketMobileMarContents.kpi1 >= '0' && marketMobileMarContents.kpi1 <= '232.6')?'red':(marketMobileMarContents.kpi1 > '232.6' && marketMobileMarContents.kpi1 <= '310.1333333')?'orange':(marketMobileMarContents.kpi1 > '310.1333333' && marketMobileMarContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileMarContents.kpi1 >= '387.6666667' && marketMobileMarContents.kpi1 < '465.2')?'green':(marketMobileMarContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMarContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMarContents.kpi2 == null)?'grey-2':(marketMobileMarContents.kpi2 >= '0' && marketMobileMarContents.kpi2 <= '11.6')?'red':(marketMobileMarContents.kpi2 > '11.6' && marketMobileMarContents.kpi2 <= '15.46666667')?'orange':(marketMobileMarContents.kpi2 > '15.46666667' && marketMobileMarContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileMarContents.kpi2 >= '19.33333333' && marketMobileMarContents.kpi2 < '23.2')?'green':(marketMobileMarContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMarContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMarContents.kpi3 == null)?'grey-2':(marketMobileMarContents.kpi3 >= '0' && marketMobileMarContents.kpi3 <= '38.2')?'red':(marketMobileMarContents.kpi3 > '38.2' && marketMobileMarContents.kpi3 <= '50.93333333')?'orange':(marketMobileMarContents.kpi3 > '50.93333333' && marketMobileMarContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileMarContents.kpi3 >= '63.66666667' && marketMobileMarContents.kpi3 < '76.4')?'green':(marketMobileMarContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileMarContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMarContents.kpi4 == null)?'grey-2':(marketMobileMarContents.kpi4 >= '0' && marketMobileMarContents.kpi4 <= '109.6')?'red':(marketMobileMarContents.kpi4 > '109.6' && marketMobileMarContents.kpi4 <= '146.1333333')?'orange':(marketMobileMarContents.kpi4 > '146.1333333' && marketMobileMarContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileMarContents.kpi4 >= '182.6666667' && marketMobileMarContents.kpi4 < '219.2')?'green':(marketMobileMarContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMarContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileAprContents.kpi1 == null)?'grey-2':(marketMobileAprContents.kpi1 >= '0' && marketMobileAprContents.kpi1 <= '232.6')?'red':(marketMobileAprContents.kpi1 > '232.6' && marketMobileAprContents.kpi1 <= '310.1333333')?'orange':(marketMobileAprContents.kpi1 > '310.1333333' && marketMobileAprContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileAprContents.kpi1 >= '387.6666667' && marketMobileAprContents.kpi1 < '465.2')?'green':(marketMobileAprContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAprContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAprContents.kpi2 == null)?'grey-2':(marketMobileAprContents.kpi2 >= '0' && marketMobileAprContents.kpi2 <= '11.6')?'red':(marketMobileAprContents.kpi2 > '11.6' && marketMobileAprContents.kpi2 <= '15.46666667')?'orange':(marketMobileAprContents.kpi2 > '15.46666667' && marketMobileAprContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileAprContents.kpi2 >= '19.33333333' && marketMobileAprContents.kpi2 < '23.2')?'green':(marketMobileAprContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAprContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAprContents.kpi3 == null)?'grey-2':(marketMobileAprContents.kpi3 >= '0' && marketMobileAprContents.kpi3 <= '38.2')?'red':(marketMobileAprContents.kpi3 > '38.2' && marketMobileAprContents.kpi3 <= '50.93333333')?'orange':(marketMobileAprContents.kpi3 > '50.93333333' && marketMobileAprContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileAprContents.kpi3 >= '63.66666667' && marketMobileAprContents.kpi3 < '76.4')?'green':(marketMobileAprContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileAprContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAprContents.kpi4 == null)?'grey-2':(marketMobileAprContents.kpi4 >= '0' && marketMobileAprContents.kpi4 <= '109.6')?'red':(marketMobileAprContents.kpi4 > '109.6' && marketMobileAprContents.kpi4 <= '146.1333333')?'orange':(marketMobileAprContents.kpi4 > '146.1333333' && marketMobileAprContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileAprContents.kpi4 >= '182.6666667' && marketMobileAprContents.kpi4 < '219.2')?'green':(marketMobileAprContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAprContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileMayContents.kpi1 == null)?'grey-2':(marketMobileMayContents.kpi1 >= '0' && marketMobileMayContents.kpi1 <= '232.6')?'red':(marketMobileMayContents.kpi1 > '232.6' && marketMobileMayContents.kpi1 <= '310.1333333')?'orange':(marketMobileMayContents.kpi1 > '310.1333333' && marketMobileMayContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileMayContents.kpi1 >= '387.6666667' && marketMobileMayContents.kpi1 < '465.2')?'green':(marketMobileMayContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMayContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMayContents.kpi2 == null)?'grey-2':(marketMobileMayContents.kpi2 >= '0' && marketMobileMayContents.kpi2 <= '11.6')?'red':(marketMobileMayContents.kpi2 > '11.6' && marketMobileMayContents.kpi2 <= '15.46666667')?'orange':(marketMobileMayContents.kpi2 > '15.46666667' && marketMobileMayContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileMayContents.kpi2 >= '19.33333333' && marketMobileMayContents.kpi2 < '23.2')?'green':(marketMobileMayContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMayContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMayContents.kpi3 == null)?'grey-2':(marketMobileMayContents.kpi3 >= '0' && marketMobileMayContents.kpi3 <= '38.2')?'red':(marketMobileMayContents.kpi3 > '38.2' && marketMobileMayContents.kpi3 <= '50.93333333')?'orange':(marketMobileMayContents.kpi3 > '50.93333333' && marketMobileMayContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileMayContents.kpi3 >= '63.66666667' && marketMobileMayContents.kpi3 < '76.4')?'green':(marketMobileMayContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileMayContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMayContents.kpi4 == null)?'grey-2':(marketMobileMayContents.kpi4 >= '0' && marketMobileMayContents.kpi4 <= '109.6')?'red':(marketMobileMayContents.kpi4 > '109.6' && marketMobileMayContents.kpi4 <= '146.1333333')?'orange':(marketMobileMayContents.kpi4 > '146.1333333' && marketMobileMayContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileMayContents.kpi4 >= '182.6666667' && marketMobileMayContents.kpi4 < '219.2')?'green':(marketMobileMayContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMayContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileJunContents.kpi1 == null)?'grey-2':(marketMobileJunContents.kpi1 >= '0' && marketMobileJunContents.kpi1 <= '232.6')?'red':(marketMobileJunContents.kpi1 > '232.6' && marketMobileJunContents.kpi1 <= '310.1333333')?'orange':(marketMobileJunContents.kpi1 > '310.1333333' && marketMobileJunContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileJunContents.kpi1 >= '387.6666667' && marketMobileJunContents.kpi1 < '465.2')?'green':(marketMobileJunContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJunContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJunContents.kpi2 == null)?'grey-2':(marketMobileJunContents.kpi2 >= '0' && marketMobileJunContents.kpi2 <= '11.6')?'red':(marketMobileJunContents.kpi2 > '11.6' && marketMobileJunContents.kpi2 <= '15.46666667')?'orange':(marketMobileJunContents.kpi2 > '15.46666667' && marketMobileJunContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileJunContents.kpi2 >= '19.33333333' && marketMobileJunContents.kpi2 < '23.2')?'green':(marketMobileJunContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJunContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJunContents.kpi3 == null)?'grey-2':(marketMobileJunContents.kpi3 >= '0' && marketMobileJunContents.kpi3 <= '38.2')?'red':(marketMobileJunContents.kpi3 > '38.2' && marketMobileJunContents.kpi3 <= '50.93333333')?'orange':(marketMobileJunContents.kpi3 > '50.93333333' && marketMobileJunContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileJunContents.kpi3 >= '63.66666667' && marketMobileJunContents.kpi3 < '76.4')?'green':(marketMobileJunContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileJunContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJunContents.kpi4 == null)?'grey-2':(marketMobileJunContents.kpi4 >= '0' && marketMobileJunContents.kpi4 <= '109.6')?'red':(marketMobileJunContents.kpi4 > '109.6' && marketMobileJunContents.kpi4 <= '146.1333333')?'orange':(marketMobileJunContents.kpi4 > '146.1333333' && marketMobileJunContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileJunContents.kpi4 >= '182.6666667' && marketMobileJunContents.kpi4 < '219.2')?'green':(marketMobileJunContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJunContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileJulContents.kpi1 == null)?'grey-2':(marketMobileJulContents.kpi1 >= '0' && marketMobileJulContents.kpi1 <= '232.6')?'red':(marketMobileJulContents.kpi1 > '232.6' && marketMobileJulContents.kpi1 <= '310.1333333')?'orange':(marketMobileJulContents.kpi1 > '310.1333333' && marketMobileJulContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileJulContents.kpi1 >= '387.6666667' && marketMobileJulContents.kpi1 < '465.2')?'green':(marketMobileJulContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJulContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJulContents.kpi2 == null)?'grey-2':(marketMobileJulContents.kpi2 >= '0' && marketMobileJulContents.kpi2 <= '11.6')?'red':(marketMobileJulContents.kpi2 > '11.6' && marketMobileJulContents.kpi2 <= '15.46666667')?'orange':(marketMobileJulContents.kpi2 > '15.46666667' && marketMobileJulContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileJulContents.kpi2 >= '19.33333333' && marketMobileJulContents.kpi2 < '23.2')?'green':(marketMobileJulContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJulContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJulContents.kpi3 == null)?'grey-2':(marketMobileJulContents.kpi3 >= '0' && marketMobileJulContents.kpi3 <= '38.2')?'red':(marketMobileJulContents.kpi3 > '38.2' && marketMobileJulContents.kpi3 <= '50.93333333')?'orange':(marketMobileJulContents.kpi3 > '50.93333333' && marketMobileJulContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileJulContents.kpi3 >= '63.66666667' && marketMobileJulContents.kpi3 < '76.4')?'green':(marketMobileJulContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileJulContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJulContents.kpi4 == null)?'grey-2':(marketMobileJulContents.kpi4 >= '0' && marketMobileJulContents.kpi4 <= '109.6')?'red':(marketMobileJulContents.kpi4 > '109.6' && marketMobileJulContents.kpi4 <= '146.1333333')?'orange':(marketMobileJulContents.kpi4 > '146.1333333' && marketMobileJulContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileJulContents.kpi4 >= '182.6666667' && marketMobileJulContents.kpi4 < '219.2')?'green':(marketMobileJulContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJulContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileAugContents.kpi1 == null)?'grey-2':(marketMobileAugContents.kpi1 >= '0' && marketMobileAugContents.kpi1 <= '232.6')?'red':(marketMobileAugContents.kpi1 > '232.6' && marketMobileAugContents.kpi1 <= '310.1333333')?'orange':(marketMobileAugContents.kpi1 > '310.1333333' && marketMobileAugContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileAugContents.kpi1 >= '387.6666667' && marketMobileAugContents.kpi1 < '465.2')?'green':(marketMobileAugContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAugContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAugContents.kpi2 == null)?'grey-2':(marketMobileAugContents.kpi2 >= '0' && marketMobileAugContents.kpi2 <= '11.6')?'red':(marketMobileAugContents.kpi2 > '11.6' && marketMobileAugContents.kpi2 <= '15.46666667')?'orange':(marketMobileAugContents.kpi2 > '15.46666667' && marketMobileAugContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileAugContents.kpi2 >= '19.33333333' && marketMobileAugContents.kpi2 < '23.2')?'green':(marketMobileAugContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAugContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAugContents.kpi3 == null)?'grey-2':(marketMobileAugContents.kpi3 >= '0' && marketMobileAugContents.kpi3 <= '38.2')?'red':(marketMobileAugContents.kpi3 > '38.2' && marketMobileAugContents.kpi3 <= '50.93333333')?'orange':(marketMobileAugContents.kpi3 > '50.93333333' && marketMobileAugContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileAugContents.kpi3 >= '63.66666667' && marketMobileAugContents.kpi3 < '76.4')?'green':(marketMobileAugContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileAugContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAugContents.kpi4 == null)?'grey-2':(marketMobileAugContents.kpi4 >= '0' && marketMobileAugContents.kpi4 <= '109.6')?'red':(marketMobileAugContents.kpi4 > '109.6' && marketMobileAugContents.kpi4 <= '146.1333333')?'orange':(marketMobileAugContents.kpi4 > '146.1333333' && marketMobileAugContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileAugContents.kpi4 >= '182.6666667' && marketMobileAugContents.kpi4 < '219.2')?'green':(marketMobileAugContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAugContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileSepContents.kpi1 == null)?'grey-2':(marketMobileSepContents.kpi1 >= '0' && marketMobileSepContents.kpi1 <= '232.6')?'red':(marketMobileSepContents.kpi1 > '232.6' && marketMobileSepContents.kpi1 <= '310.1333333')?'orange':(marketMobileSepContents.kpi1 > '310.1333333' && marketMobileSepContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileSepContents.kpi1 >= '387.6666667' && marketMobileSepContents.kpi1 < '465.2')?'green':(marketMobileSepContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileSepContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileSepContents.kpi2 == null)?'grey-2':(marketMobileSepContents.kpi2 >= '0' && marketMobileSepContents.kpi2 <= '11.6')?'red':(marketMobileSepContents.kpi2 > '11.6' && marketMobileSepContents.kpi2 <= '15.46666667')?'orange':(marketMobileSepContents.kpi2 > '15.46666667' && marketMobileSepContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileSepContents.kpi2 >= '19.33333333' && marketMobileSepContents.kpi2 < '23.2')?'green':(marketMobileSepContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileSepContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileSepContents.kpi3 == null)?'grey-2':(marketMobileSepContents.kpi3 >= '0' && marketMobileSepContents.kpi3 <= '38.2')?'red':(marketMobileSepContents.kpi3 > '38.2' && marketMobileSepContents.kpi3 <= '50.93333333')?'orange':(marketMobileSepContents.kpi3 > '50.93333333' && marketMobileSepContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileSepContents.kpi3 >= '63.66666667' && marketMobileSepContents.kpi3 < '76.4')?'green':(marketMobileSepContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileSepContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileSepContents.kpi4 == null)?'grey-2':(marketMobileSepContents.kpi4 >= '0' && marketMobileSepContents.kpi4 <= '109.6')?'red':(marketMobileSepContents.kpi4 > '109.6' && marketMobileSepContents.kpi4 <= '146.1333333')?'orange':(marketMobileSepContents.kpi4 > '146.1333333' && marketMobileSepContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileSepContents.kpi4 >= '182.6666667' && marketMobileSepContents.kpi4 < '219.2')?'green':(marketMobileSepContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileSepContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileOctContents.kpi1 == null)?'grey-2':(marketMobileOctContents.kpi1 >= '0' && marketMobileOctContents.kpi1 <= '232.6')?'red':(marketMobileOctContents.kpi1 > '232.6' && marketMobileOctContents.kpi1 <= '310.1333333')?'orange':(marketMobileOctContents.kpi1 > '310.1333333' && marketMobileOctContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileOctContents.kpi1 >= '387.6666667' && marketMobileOctContents.kpi1 < '465.2')?'green':(marketMobileOctContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileOctContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileOctContents.kpi2 == null)?'grey-2':(marketMobileOctContents.kpi2 >= '0' && marketMobileOctContents.kpi2 <= '11.6')?'red':(marketMobileOctContents.kpi2 > '11.6' && marketMobileOctContents.kpi2 <= '15.46666667')?'orange':(marketMobileOctContents.kpi2 > '15.46666667' && marketMobileOctContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileOctContents.kpi2 >= '19.33333333' && marketMobileOctContents.kpi2 < '23.2')?'green':(marketMobileOctContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileOctContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileOctContents.kpi3 == null)?'grey-2':(marketMobileOctContents.kpi3 >= '0' && marketMobileOctContents.kpi3 <= '38.2')?'red':(marketMobileOctContents.kpi3 > '38.2' && marketMobileOctContents.kpi3 <= '50.93333333')?'orange':(marketMobileOctContents.kpi3 > '50.93333333' && marketMobileOctContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileOctContents.kpi3 >= '63.66666667' && marketMobileOctContents.kpi3 < '76.4')?'green':(marketMobileOctContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileOctContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileOctContents.kpi4 == null)?'grey-2':(marketMobileOctContents.kpi4 >= '0' && marketMobileOctContents.kpi4 <= '109.6')?'red':(marketMobileOctContents.kpi4 > '109.6' && marketMobileOctContents.kpi4 <= '146.1333333')?'orange':(marketMobileOctContents.kpi4 > '146.1333333' && marketMobileOctContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileOctContents.kpi4 >= '182.6666667' && marketMobileOctContents.kpi4 < '219.2')?'green':(marketMobileOctContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileOctContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileNovContents.kpi1 == null)?'grey-2':(marketMobileNovContents.kpi1 >= '0' && marketMobileNovContents.kpi1 <= '232.6')?'red':(marketMobileNovContents.kpi1 > '232.6' && marketMobileNovContents.kpi1 <= '310.1333333')?'orange':(marketMobileNovContents.kpi1 > '310.1333333' && marketMobileNovContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileNovContents.kpi1 >= '387.6666667' && marketMobileNovContents.kpi1 < '465.2')?'green':(marketMobileNovContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileNovContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileNovContents.kpi2 == null)?'grey-2':(marketMobileNovContents.kpi2 >= '0' && marketMobileNovContents.kpi2 <= '11.6')?'red':(marketMobileNovContents.kpi2 > '11.6' && marketMobileNovContents.kpi2 <= '15.46666667')?'orange':(marketMobileNovContents.kpi2 > '15.46666667' && marketMobileNovContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileNovContents.kpi2 >= '19.33333333' && marketMobileNovContents.kpi2 < '23.2')?'green':(marketMobileNovContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileNovContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileNovContents.kpi3 == null)?'grey-2':(marketMobileNovContents.kpi3 >= '0' && marketMobileNovContents.kpi3 <= '38.2')?'red':(marketMobileNovContents.kpi3 > '38.2' && marketMobileNovContents.kpi3 <= '50.93333333')?'orange':(marketMobileNovContents.kpi3 > '50.93333333' && marketMobileNovContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileNovContents.kpi3 >= '63.66666667' && marketMobileNovContents.kpi3 < '76.4')?'green':(marketMobileNovContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileNovContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileNovContents.kpi4 == null)?'grey-2':(marketMobileNovContents.kpi4 >= '0' && marketMobileNovContents.kpi4 <= '109.6')?'red':(marketMobileNovContents.kpi4 > '109.6' && marketMobileNovContents.kpi4 <= '146.1333333')?'orange':(marketMobileNovContents.kpi4 > '146.1333333' && marketMobileNovContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileNovContents.kpi4 >= '182.6666667' && marketMobileNovContents.kpi4 < '219.2')?'green':(marketMobileNovContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileNovContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileDecContents.kpi1 == null)?'grey-2':(marketMobileDecContents.kpi1 >= '0' && marketMobileDecContents.kpi1 <= '232.6')?'red':(marketMobileDecContents.kpi1 > '232.6' && marketMobileDecContents.kpi1 <= '310.1333333')?'orange':(marketMobileDecContents.kpi1 > '310.1333333' && marketMobileDecContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileDecContents.kpi1 >= '387.6666667' && marketMobileDecContents.kpi1 < '465.2')?'green':(marketMobileDecContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileDecContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileDecContents.kpi2 == null)?'grey-2':(marketMobileDecContents.kpi2 >= '0' && marketMobileDecContents.kpi2 <= '11.6')?'red':(marketMobileDecContents.kpi2 > '11.6' && marketMobileDecContents.kpi2 <= '15.46666667')?'orange':(marketMobileDecContents.kpi2 > '15.46666667' && marketMobileDecContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileDecContents.kpi2 >= '19.33333333' && marketMobileDecContents.kpi2 < '23.2')?'green':(marketMobileDecContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileDecContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileDecContents.kpi3 == null)?'grey-2':(marketMobileDecContents.kpi3 >= '0' && marketMobileDecContents.kpi3 <= '38.2')?'red':(marketMobileDecContents.kpi3 > '38.2' && marketMobileDecContents.kpi3 <= '50.93333333')?'orange':(marketMobileDecContents.kpi3 > '50.93333333' && marketMobileDecContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileDecContents.kpi3 >= '63.66666667' && marketMobileDecContents.kpi3 < '76.4')?'green':(marketMobileDecContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileDecContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileDecContents.kpi4 == null)?'grey-2':(marketMobileDecContents.kpi4 >= '0' && marketMobileDecContents.kpi4 <= '109.6')?'red':(marketMobileDecContents.kpi4 > '109.6' && marketMobileDecContents.kpi4 <= '146.1333333')?'orange':(marketMobileDecContents.kpi4 > '146.1333333' && marketMobileDecContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileDecContents.kpi4 >= '182.6666667' && marketMobileDecContents.kpi4 < '219.2')?'green':(marketMobileDecContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileDecContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                                <q-tooltip># total contact</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip>Activities (#)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of pick-up contacts</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileJanContents.kpi1 == null)?'grey-2':(marketMobileJanContents.kpi1 >= '0' && marketMobileJanContents.kpi1 <= '232.6')?'red':(marketMobileJanContents.kpi1 > '232.6' && marketMobileJanContents.kpi1 <= '310.1333333')?'orange':(marketMobileJanContents.kpi1 > '310.1333333' && marketMobileJanContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileJanContents.kpi1 >= '387.6666667' && marketMobileJanContents.kpi1 < '465.2')?'green':(marketMobileJanContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJanContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJanContents.kpi2 == null)?'grey-2':(marketMobileJanContents.kpi2 >= '0' && marketMobileJanContents.kpi2 <= '11.6')?'red':(marketMobileJanContents.kpi2 > '11.6' && marketMobileJanContents.kpi2 <= '15.46666667')?'orange':(marketMobileJanContents.kpi2 > '15.46666667' && marketMobileJanContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileJanContents.kpi2 >= '19.33333333' && marketMobileJanContents.kpi2 < '23.2')?'green':(marketMobileJanContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJanContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJanContents.kpi3 == null)?'grey-2':(marketMobileJanContents.kpi3 >= '0' && marketMobileJanContents.kpi3 <= '38.2')?'red':(marketMobileJanContents.kpi3 > '38.2' && marketMobileJanContents.kpi3 <= '50.93333333')?'orange':(marketMobileJanContents.kpi3 > '50.93333333' && marketMobileJanContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileJanContents.kpi3 >= '63.66666667' && marketMobileJanContents.kpi3 < '76.4')?'green':(marketMobileJanContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileJanContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJanContents.kpi4 == null)?'grey-2':(marketMobileJanContents.kpi4 >= '0' && marketMobileJanContents.kpi4 <= '109.6')?'red':(marketMobileJanContents.kpi4 > '109.6' && marketMobileJanContents.kpi4 <= '146.1333333')?'orange':(marketMobileJanContents.kpi4 > '146.1333333' && marketMobileJanContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileJanContents.kpi4 >= '182.6666667' && marketMobileJanContents.kpi4 < '219.2')?'green':(marketMobileJanContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJanContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileFebContents.kpi1 == null)?'grey-2':(marketMobileFebContents.kpi1 >= '0' && marketMobileFebContents.kpi1 <= '232.6')?'red':(marketMobileFebContents.kpi1 > '232.6' && marketMobileFebContents.kpi1 <= '310.1333333')?'orange':(marketMobileFebContents.kpi1 > '310.1333333' && marketMobileFebContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileFebContents.kpi1 >= '387.6666667' && marketMobileFebContents.kpi1 < '465.2')?'green':(marketMobileFebContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileFebContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileFebContents.kpi2 == null)?'grey-2':(marketMobileFebContents.kpi2 >= '0' && marketMobileFebContents.kpi2 <= '11.6')?'red':(marketMobileFebContents.kpi2 > '11.6' && marketMobileFebContents.kpi2 <= '15.46666667')?'orange':(marketMobileFebContents.kpi2 > '15.46666667' && marketMobileFebContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileFebContents.kpi2 >= '19.33333333' && marketMobileFebContents.kpi2 < '23.2')?'green':(marketMobileFebContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileFebContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileFebContents.kpi3 == null)?'grey-2':(marketMobileFebContents.kpi3 >= '0' && marketMobileFebContents.kpi3 <= '38.2')?'red':(marketMobileFebContents.kpi3 > '38.2' && marketMobileFebContents.kpi3 <= '50.93333333')?'orange':(marketMobileFebContents.kpi3 > '50.93333333' && marketMobileFebContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileFebContents.kpi3 >= '63.66666667' && marketMobileFebContents.kpi3 < '76.4')?'green':(marketMobileFebContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileFebContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileFebContents.kpi4 == null)?'grey-2':(marketMobileFebContents.kpi4 >= '0' && marketMobileFebContents.kpi4 <= '109.6')?'red':(marketMobileFebContents.kpi4 > '109.6' && marketMobileFebContents.kpi4 <= '146.1333333')?'orange':(marketMobileFebContents.kpi4 > '146.1333333' && marketMobileFebContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileFebContents.kpi4 >= '182.6666667' && marketMobileFebContents.kpi4 < '219.2')?'green':(marketMobileFebContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileFebContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileMarContents.kpi1 == null)?'grey-2':(marketMobileMarContents.kpi1 >= '0' && marketMobileMarContents.kpi1 <= '232.6')?'red':(marketMobileMarContents.kpi1 > '232.6' && marketMobileMarContents.kpi1 <= '310.1333333')?'orange':(marketMobileMarContents.kpi1 > '310.1333333' && marketMobileMarContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileMarContents.kpi1 >= '387.6666667' && marketMobileMarContents.kpi1 < '465.2')?'green':(marketMobileMarContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMarContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMarContents.kpi2 == null)?'grey-2':(marketMobileMarContents.kpi2 >= '0' && marketMobileMarContents.kpi2 <= '11.6')?'red':(marketMobileMarContents.kpi2 > '11.6' && marketMobileMarContents.kpi2 <= '15.46666667')?'orange':(marketMobileMarContents.kpi2 > '15.46666667' && marketMobileMarContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileMarContents.kpi2 >= '19.33333333' && marketMobileMarContents.kpi2 < '23.2')?'green':(marketMobileMarContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMarContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMarContents.kpi3 == null)?'grey-2':(marketMobileMarContents.kpi3 >= '0' && marketMobileMarContents.kpi3 <= '38.2')?'red':(marketMobileMarContents.kpi3 > '38.2' && marketMobileMarContents.kpi3 <= '50.93333333')?'orange':(marketMobileMarContents.kpi3 > '50.93333333' && marketMobileMarContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileMarContents.kpi3 >= '63.66666667' && marketMobileMarContents.kpi3 < '76.4')?'green':(marketMobileMarContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileMarContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMarContents.kpi4 == null)?'grey-2':(marketMobileMarContents.kpi4 >= '0' && marketMobileMarContents.kpi4 <= '109.6')?'red':(marketMobileMarContents.kpi4 > '109.6' && marketMobileMarContents.kpi4 <= '146.1333333')?'orange':(marketMobileMarContents.kpi4 > '146.1333333' && marketMobileMarContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileMarContents.kpi4 >= '182.6666667' && marketMobileMarContents.kpi4 < '219.2')?'green':(marketMobileMarContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMarContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileAprContents.kpi1 == null)?'grey-2':(marketMobileAprContents.kpi1 >= '0' && marketMobileAprContents.kpi1 <= '232.6')?'red':(marketMobileAprContents.kpi1 > '232.6' && marketMobileAprContents.kpi1 <= '310.1333333')?'orange':(marketMobileAprContents.kpi1 > '310.1333333' && marketMobileAprContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileAprContents.kpi1 >= '387.6666667' && marketMobileAprContents.kpi1 < '465.2')?'green':(marketMobileAprContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAprContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAprContents.kpi2 == null)?'grey-2':(marketMobileAprContents.kpi2 >= '0' && marketMobileAprContents.kpi2 <= '11.6')?'red':(marketMobileAprContents.kpi2 > '11.6' && marketMobileAprContents.kpi2 <= '15.46666667')?'orange':(marketMobileAprContents.kpi2 > '15.46666667' && marketMobileAprContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileAprContents.kpi2 >= '19.33333333' && marketMobileAprContents.kpi2 < '23.2')?'green':(marketMobileAprContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAprContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAprContents.kpi3 == null)?'grey-2':(marketMobileAprContents.kpi3 >= '0' && marketMobileAprContents.kpi3 <= '38.2')?'red':(marketMobileAprContents.kpi3 > '38.2' && marketMobileAprContents.kpi3 <= '50.93333333')?'orange':(marketMobileAprContents.kpi3 > '50.93333333' && marketMobileAprContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileAprContents.kpi3 >= '63.66666667' && marketMobileAprContents.kpi3 < '76.4')?'green':(marketMobileAprContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileAprContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAprContents.kpi4 == null)?'grey-2':(marketMobileAprContents.kpi4 >= '0' && marketMobileAprContents.kpi4 <= '109.6')?'red':(marketMobileAprContents.kpi4 > '109.6' && marketMobileAprContents.kpi4 <= '146.1333333')?'orange':(marketMobileAprContents.kpi4 > '146.1333333' && marketMobileAprContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileAprContents.kpi4 >= '182.6666667' && marketMobileAprContents.kpi4 < '219.2')?'green':(marketMobileAprContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAprContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileMayContents.kpi1 == null)?'grey-2':(marketMobileMayContents.kpi1 >= '0' && marketMobileMayContents.kpi1 <= '232.6')?'red':(marketMobileMayContents.kpi1 > '232.6' && marketMobileMayContents.kpi1 <= '310.1333333')?'orange':(marketMobileMayContents.kpi1 > '310.1333333' && marketMobileMayContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileMayContents.kpi1 >= '387.6666667' && marketMobileMayContents.kpi1 < '465.2')?'green':(marketMobileMayContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMayContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMayContents.kpi2 == null)?'grey-2':(marketMobileMayContents.kpi2 >= '0' && marketMobileMayContents.kpi2 <= '11.6')?'red':(marketMobileMayContents.kpi2 > '11.6' && marketMobileMayContents.kpi2 <= '15.46666667')?'orange':(marketMobileMayContents.kpi2 > '15.46666667' && marketMobileMayContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileMayContents.kpi2 >= '19.33333333' && marketMobileMayContents.kpi2 < '23.2')?'green':(marketMobileMayContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMayContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMayContents.kpi3 == null)?'grey-2':(marketMobileMayContents.kpi3 >= '0' && marketMobileMayContents.kpi3 <= '38.2')?'red':(marketMobileMayContents.kpi3 > '38.2' && marketMobileMayContents.kpi3 <= '50.93333333')?'orange':(marketMobileMayContents.kpi3 > '50.93333333' && marketMobileMayContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileMayContents.kpi3 >= '63.66666667' && marketMobileMayContents.kpi3 < '76.4')?'green':(marketMobileMayContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileMayContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMayContents.kpi4 == null)?'grey-2':(marketMobileMayContents.kpi4 >= '0' && marketMobileMayContents.kpi4 <= '109.6')?'red':(marketMobileMayContents.kpi4 > '109.6' && marketMobileMayContents.kpi4 <= '146.1333333')?'orange':(marketMobileMayContents.kpi4 > '146.1333333' && marketMobileMayContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileMayContents.kpi4 >= '182.6666667' && marketMobileMayContents.kpi4 < '219.2')?'green':(marketMobileMayContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMayContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileJunContents.kpi1 == null)?'grey-2':(marketMobileJunContents.kpi1 >= '0' && marketMobileJunContents.kpi1 <= '232.6')?'red':(marketMobileJunContents.kpi1 > '232.6' && marketMobileJunContents.kpi1 <= '310.1333333')?'orange':(marketMobileJunContents.kpi1 > '310.1333333' && marketMobileJunContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileJunContents.kpi1 >= '387.6666667' && marketMobileJunContents.kpi1 < '465.2')?'green':(marketMobileJunContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJunContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJunContents.kpi2 == null)?'grey-2':(marketMobileJunContents.kpi2 >= '0' && marketMobileJunContents.kpi2 <= '11.6')?'red':(marketMobileJunContents.kpi2 > '11.6' && marketMobileJunContents.kpi2 <= '15.46666667')?'orange':(marketMobileJunContents.kpi2 > '15.46666667' && marketMobileJunContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileJunContents.kpi2 >= '19.33333333' && marketMobileJunContents.kpi2 < '23.2')?'green':(marketMobileJunContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJunContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJunContents.kpi3 == null)?'grey-2':(marketMobileJunContents.kpi3 >= '0' && marketMobileJunContents.kpi3 <= '38.2')?'red':(marketMobileJunContents.kpi3 > '38.2' && marketMobileJunContents.kpi3 <= '50.93333333')?'orange':(marketMobileJunContents.kpi3 > '50.93333333' && marketMobileJunContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileJunContents.kpi3 >= '63.66666667' && marketMobileJunContents.kpi3 < '76.4')?'green':(marketMobileJunContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileJunContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJunContents.kpi4 == null)?'grey-2':(marketMobileJunContents.kpi4 >= '0' && marketMobileJunContents.kpi4 <= '109.6')?'red':(marketMobileJunContents.kpi4 > '109.6' && marketMobileJunContents.kpi4 <= '146.1333333')?'orange':(marketMobileJunContents.kpi4 > '146.1333333' && marketMobileJunContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileJunContents.kpi4 >= '182.6666667' && marketMobileJunContents.kpi4 < '219.2')?'green':(marketMobileJunContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJunContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileJulContents.kpi1 == null)?'grey-2':(marketMobileJulContents.kpi1 >= '0' && marketMobileJulContents.kpi1 <= '232.6')?'red':(marketMobileJulContents.kpi1 > '232.6' && marketMobileJulContents.kpi1 <= '310.1333333')?'orange':(marketMobileJulContents.kpi1 > '310.1333333' && marketMobileJulContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileJulContents.kpi1 >= '387.6666667' && marketMobileJulContents.kpi1 < '465.2')?'green':(marketMobileJulContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJulContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJulContents.kpi2 == null)?'grey-2':(marketMobileJulContents.kpi2 >= '0' && marketMobileJulContents.kpi2 <= '11.6')?'red':(marketMobileJulContents.kpi2 > '11.6' && marketMobileJulContents.kpi2 <= '15.46666667')?'orange':(marketMobileJulContents.kpi2 > '15.46666667' && marketMobileJulContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileJulContents.kpi2 >= '19.33333333' && marketMobileJulContents.kpi2 < '23.2')?'green':(marketMobileJulContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJulContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJulContents.kpi3 == null)?'grey-2':(marketMobileJulContents.kpi3 >= '0' && marketMobileJulContents.kpi3 <= '38.2')?'red':(marketMobileJulContents.kpi3 > '38.2' && marketMobileJulContents.kpi3 <= '50.93333333')?'orange':(marketMobileJulContents.kpi3 > '50.93333333' && marketMobileJulContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileJulContents.kpi3 >= '63.66666667' && marketMobileJulContents.kpi3 < '76.4')?'green':(marketMobileJulContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileJulContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJulContents.kpi4 == null)?'grey-2':(marketMobileJulContents.kpi4 >= '0' && marketMobileJulContents.kpi4 <= '109.6')?'red':(marketMobileJulContents.kpi4 > '109.6' && marketMobileJulContents.kpi4 <= '146.1333333')?'orange':(marketMobileJulContents.kpi4 > '146.1333333' && marketMobileJulContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileJulContents.kpi4 >= '182.6666667' && marketMobileJulContents.kpi4 < '219.2')?'green':(marketMobileJulContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJulContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileAugContents.kpi1 == null)?'grey-2':(marketMobileAugContents.kpi1 >= '0' && marketMobileAugContents.kpi1 <= '232.6')?'red':(marketMobileAugContents.kpi1 > '232.6' && marketMobileAugContents.kpi1 <= '310.1333333')?'orange':(marketMobileAugContents.kpi1 > '310.1333333' && marketMobileAugContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileAugContents.kpi1 >= '387.6666667' && marketMobileAugContents.kpi1 < '465.2')?'green':(marketMobileAugContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAugContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAugContents.kpi2 == null)?'grey-2':(marketMobileAugContents.kpi2 >= '0' && marketMobileAugContents.kpi2 <= '11.6')?'red':(marketMobileAugContents.kpi2 > '11.6' && marketMobileAugContents.kpi2 <= '15.46666667')?'orange':(marketMobileAugContents.kpi2 > '15.46666667' && marketMobileAugContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileAugContents.kpi2 >= '19.33333333' && marketMobileAugContents.kpi2 < '23.2')?'green':(marketMobileAugContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAugContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAugContents.kpi3 == null)?'grey-2':(marketMobileAugContents.kpi3 >= '0' && marketMobileAugContents.kpi3 <= '38.2')?'red':(marketMobileAugContents.kpi3 > '38.2' && marketMobileAugContents.kpi3 <= '50.93333333')?'orange':(marketMobileAugContents.kpi3 > '50.93333333' && marketMobileAugContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileAugContents.kpi3 >= '63.66666667' && marketMobileAugContents.kpi3 < '76.4')?'green':(marketMobileAugContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileAugContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAugContents.kpi4 == null)?'grey-2':(marketMobileAugContents.kpi4 >= '0' && marketMobileAugContents.kpi4 <= '109.6')?'red':(marketMobileAugContents.kpi4 > '109.6' && marketMobileAugContents.kpi4 <= '146.1333333')?'orange':(marketMobileAugContents.kpi4 > '146.1333333' && marketMobileAugContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileAugContents.kpi4 >= '182.6666667' && marketMobileAugContents.kpi4 < '219.2')?'green':(marketMobileAugContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAugContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileSepContents.kpi1 == null)?'grey-2':(marketMobileSepContents.kpi1 >= '0' && marketMobileSepContents.kpi1 <= '232.6')?'red':(marketMobileSepContents.kpi1 > '232.6' && marketMobileSepContents.kpi1 <= '310.1333333')?'orange':(marketMobileSepContents.kpi1 > '310.1333333' && marketMobileSepContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileSepContents.kpi1 >= '387.6666667' && marketMobileSepContents.kpi1 < '465.2')?'green':(marketMobileSepContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileSepContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileSepContents.kpi2 == null)?'grey-2':(marketMobileSepContents.kpi2 >= '0' && marketMobileSepContents.kpi2 <= '11.6')?'red':(marketMobileSepContents.kpi2 > '11.6' && marketMobileSepContents.kpi2 <= '15.46666667')?'orange':(marketMobileSepContents.kpi2 > '15.46666667' && marketMobileSepContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileSepContents.kpi2 >= '19.33333333' && marketMobileSepContents.kpi2 < '23.2')?'green':(marketMobileSepContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileSepContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileSepContents.kpi3 == null)?'grey-2':(marketMobileSepContents.kpi3 >= '0' && marketMobileSepContents.kpi3 <= '38.2')?'red':(marketMobileSepContents.kpi3 > '38.2' && marketMobileSepContents.kpi3 <= '50.93333333')?'orange':(marketMobileSepContents.kpi3 > '50.93333333' && marketMobileSepContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileSepContents.kpi3 >= '63.66666667' && marketMobileSepContents.kpi3 < '76.4')?'green':(marketMobileSepContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileSepContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileSepContents.kpi4 == null)?'grey-2':(marketMobileSepContents.kpi4 >= '0' && marketMobileSepContents.kpi4 <= '109.6')?'red':(marketMobileSepContents.kpi4 > '109.6' && marketMobileSepContents.kpi4 <= '146.1333333')?'orange':(marketMobileSepContents.kpi4 > '146.1333333' && marketMobileSepContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileSepContents.kpi4 >= '182.6666667' && marketMobileSepContents.kpi4 < '219.2')?'green':(marketMobileSepContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileSepContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileOctContents.kpi1 == null)?'grey-2':(marketMobileOctContents.kpi1 >= '0' && marketMobileOctContents.kpi1 <= '232.6')?'red':(marketMobileOctContents.kpi1 > '232.6' && marketMobileOctContents.kpi1 <= '310.1333333')?'orange':(marketMobileOctContents.kpi1 > '310.1333333' && marketMobileOctContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileOctContents.kpi1 >= '387.6666667' && marketMobileOctContents.kpi1 < '465.2')?'green':(marketMobileOctContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileOctContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileOctContents.kpi2 == null)?'grey-2':(marketMobileOctContents.kpi2 >= '0' && marketMobileOctContents.kpi2 <= '11.6')?'red':(marketMobileOctContents.kpi2 > '11.6' && marketMobileOctContents.kpi2 <= '15.46666667')?'orange':(marketMobileOctContents.kpi2 > '15.46666667' && marketMobileOctContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileOctContents.kpi2 >= '19.33333333' && marketMobileOctContents.kpi2 < '23.2')?'green':(marketMobileOctContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileOctContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileOctContents.kpi3 == null)?'grey-2':(marketMobileOctContents.kpi3 >= '0' && marketMobileOctContents.kpi3 <= '38.2')?'red':(marketMobileOctContents.kpi3 > '38.2' && marketMobileOctContents.kpi3 <= '50.93333333')?'orange':(marketMobileOctContents.kpi3 > '50.93333333' && marketMobileOctContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileOctContents.kpi3 >= '63.66666667' && marketMobileOctContents.kpi3 < '76.4')?'green':(marketMobileOctContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileOctContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileOctContents.kpi4 == null)?'grey-2':(marketMobileOctContents.kpi4 >= '0' && marketMobileOctContents.kpi4 <= '109.6')?'red':(marketMobileOctContents.kpi4 > '109.6' && marketMobileOctContents.kpi4 <= '146.1333333')?'orange':(marketMobileOctContents.kpi4 > '146.1333333' && marketMobileOctContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileOctContents.kpi4 >= '182.6666667' && marketMobileOctContents.kpi4 < '219.2')?'green':(marketMobileOctContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileOctContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileNovContents.kpi1 == null)?'grey-2':(marketMobileNovContents.kpi1 >= '0' && marketMobileNovContents.kpi1 <= '232.6')?'red':(marketMobileNovContents.kpi1 > '232.6' && marketMobileNovContents.kpi1 <= '310.1333333')?'orange':(marketMobileNovContents.kpi1 > '310.1333333' && marketMobileNovContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileNovContents.kpi1 >= '387.6666667' && marketMobileNovContents.kpi1 < '465.2')?'green':(marketMobileNovContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileNovContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileNovContents.kpi2 == null)?'grey-2':(marketMobileNovContents.kpi2 >= '0' && marketMobileNovContents.kpi2 <= '11.6')?'red':(marketMobileNovContents.kpi2 > '11.6' && marketMobileNovContents.kpi2 <= '15.46666667')?'orange':(marketMobileNovContents.kpi2 > '15.46666667' && marketMobileNovContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileNovContents.kpi2 >= '19.33333333' && marketMobileNovContents.kpi2 < '23.2')?'green':(marketMobileNovContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileNovContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileNovContents.kpi3 == null)?'grey-2':(marketMobileNovContents.kpi3 >= '0' && marketMobileNovContents.kpi3 <= '38.2')?'red':(marketMobileNovContents.kpi3 > '38.2' && marketMobileNovContents.kpi3 <= '50.93333333')?'orange':(marketMobileNovContents.kpi3 > '50.93333333' && marketMobileNovContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileNovContents.kpi3 >= '63.66666667' && marketMobileNovContents.kpi3 < '76.4')?'green':(marketMobileNovContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileNovContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileNovContents.kpi4 == null)?'grey-2':(marketMobileNovContents.kpi4 >= '0' && marketMobileNovContents.kpi4 <= '109.6')?'red':(marketMobileNovContents.kpi4 > '109.6' && marketMobileNovContents.kpi4 <= '146.1333333')?'orange':(marketMobileNovContents.kpi4 > '146.1333333' && marketMobileNovContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileNovContents.kpi4 >= '182.6666667' && marketMobileNovContents.kpi4 < '219.2')?'green':(marketMobileNovContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileNovContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileDecContents.kpi1 == null)?'grey-2':(marketMobileDecContents.kpi1 >= '0' && marketMobileDecContents.kpi1 <= '232.6')?'red':(marketMobileDecContents.kpi1 > '232.6' && marketMobileDecContents.kpi1 <= '310.1333333')?'orange':(marketMobileDecContents.kpi1 > '310.1333333' && marketMobileDecContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileDecContents.kpi1 >= '387.6666667' && marketMobileDecContents.kpi1 < '465.2')?'green':(marketMobileDecContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileDecContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileDecContents.kpi2 == null)?'grey-2':(marketMobileDecContents.kpi2 >= '0' && marketMobileDecContents.kpi2 <= '11.6')?'red':(marketMobileDecContents.kpi2 > '11.6' && marketMobileDecContents.kpi2 <= '15.46666667')?'orange':(marketMobileDecContents.kpi2 > '15.46666667' && marketMobileDecContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileDecContents.kpi2 >= '19.33333333' && marketMobileDecContents.kpi2 < '23.2')?'green':(marketMobileDecContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileDecContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileDecContents.kpi3 == null)?'grey-2':(marketMobileDecContents.kpi3 >= '0' && marketMobileDecContents.kpi3 <= '38.2')?'red':(marketMobileDecContents.kpi3 > '38.2' && marketMobileDecContents.kpi3 <= '50.93333333')?'orange':(marketMobileDecContents.kpi3 > '50.93333333' && marketMobileDecContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileDecContents.kpi3 >= '63.66666667' && marketMobileDecContents.kpi3 < '76.4')?'green':(marketMobileDecContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileDecContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileDecContents.kpi4 == null)?'grey-2':(marketMobileDecContents.kpi4 >= '0' && marketMobileDecContents.kpi4 <= '109.6')?'red':(marketMobileDecContents.kpi4 > '109.6' && marketMobileDecContents.kpi4 <= '146.1333333')?'orange':(marketMobileDecContents.kpi4 > '146.1333333' && marketMobileDecContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileDecContents.kpi4 >= '182.6666667' && marketMobileDecContents.kpi4 < '219.2')?'green':(marketMobileDecContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileDecContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                                <q-tooltip># total contact</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip>Activities (#)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of pick-up contacts</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileJanContents.kpi1 == null)?'grey-2':(marketMobileJanContents.kpi1 >= '0' && marketMobileJanContents.kpi1 <= '232.6')?'red':(marketMobileJanContents.kpi1 > '232.6' && marketMobileJanContents.kpi1 <= '310.1333333')?'orange':(marketMobileJanContents.kpi1 > '310.1333333' && marketMobileJanContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileJanContents.kpi1 >= '387.6666667' && marketMobileJanContents.kpi1 < '465.2')?'green':(marketMobileJanContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJanContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJanContents.kpi2 == null)?'grey-2':(marketMobileJanContents.kpi2 >= '0' && marketMobileJanContents.kpi2 <= '11.6')?'red':(marketMobileJanContents.kpi2 > '11.6' && marketMobileJanContents.kpi2 <= '15.46666667')?'orange':(marketMobileJanContents.kpi2 > '15.46666667' && marketMobileJanContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileJanContents.kpi2 >= '19.33333333' && marketMobileJanContents.kpi2 < '23.2')?'green':(marketMobileJanContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJanContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJanContents.kpi3 == null)?'grey-2':(marketMobileJanContents.kpi3 >= '0' && marketMobileJanContents.kpi3 <= '38.2')?'red':(marketMobileJanContents.kpi3 > '38.2' && marketMobileJanContents.kpi3 <= '50.93333333')?'orange':(marketMobileJanContents.kpi3 > '50.93333333' && marketMobileJanContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileJanContents.kpi3 >= '63.66666667' && marketMobileJanContents.kpi3 < '76.4')?'green':(marketMobileJanContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileJanContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJanContents.kpi4 == null)?'grey-2':(marketMobileJanContents.kpi4 >= '0' && marketMobileJanContents.kpi4 <= '109.6')?'red':(marketMobileJanContents.kpi4 > '109.6' && marketMobileJanContents.kpi4 <= '146.1333333')?'orange':(marketMobileJanContents.kpi4 > '146.1333333' && marketMobileJanContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileJanContents.kpi4 >= '182.6666667' && marketMobileJanContents.kpi4 < '219.2')?'green':(marketMobileJanContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJanContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileFebContents.kpi1 == null)?'grey-2':(marketMobileFebContents.kpi1 >= '0' && marketMobileFebContents.kpi1 <= '232.6')?'red':(marketMobileFebContents.kpi1 > '232.6' && marketMobileFebContents.kpi1 <= '310.1333333')?'orange':(marketMobileFebContents.kpi1 > '310.1333333' && marketMobileFebContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileFebContents.kpi1 >= '387.6666667' && marketMobileFebContents.kpi1 < '465.2')?'green':(marketMobileFebContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileFebContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileFebContents.kpi2 == null)?'grey-2':(marketMobileFebContents.kpi2 >= '0' && marketMobileFebContents.kpi2 <= '11.6')?'red':(marketMobileFebContents.kpi2 > '11.6' && marketMobileFebContents.kpi2 <= '15.46666667')?'orange':(marketMobileFebContents.kpi2 > '15.46666667' && marketMobileFebContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileFebContents.kpi2 >= '19.33333333' && marketMobileFebContents.kpi2 < '23.2')?'green':(marketMobileFebContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileFebContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileFebContents.kpi3 == null)?'grey-2':(marketMobileFebContents.kpi3 >= '0' && marketMobileFebContents.kpi3 <= '38.2')?'red':(marketMobileFebContents.kpi3 > '38.2' && marketMobileFebContents.kpi3 <= '50.93333333')?'orange':(marketMobileFebContents.kpi3 > '50.93333333' && marketMobileFebContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileFebContents.kpi3 >= '63.66666667' && marketMobileFebContents.kpi3 < '76.4')?'green':(marketMobileFebContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileFebContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileFebContents.kpi4 == null)?'grey-2':(marketMobileFebContents.kpi4 >= '0' && marketMobileFebContents.kpi4 <= '109.6')?'red':(marketMobileFebContents.kpi4 > '109.6' && marketMobileFebContents.kpi4 <= '146.1333333')?'orange':(marketMobileFebContents.kpi4 > '146.1333333' && marketMobileFebContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileFebContents.kpi4 >= '182.6666667' && marketMobileFebContents.kpi4 < '219.2')?'green':(marketMobileFebContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileFebContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileMarContents.kpi1 == null)?'grey-2':(marketMobileMarContents.kpi1 >= '0' && marketMobileMarContents.kpi1 <= '232.6')?'red':(marketMobileMarContents.kpi1 > '232.6' && marketMobileMarContents.kpi1 <= '310.1333333')?'orange':(marketMobileMarContents.kpi1 > '310.1333333' && marketMobileMarContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileMarContents.kpi1 >= '387.6666667' && marketMobileMarContents.kpi1 < '465.2')?'green':(marketMobileMarContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMarContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMarContents.kpi2 == null)?'grey-2':(marketMobileMarContents.kpi2 >= '0' && marketMobileMarContents.kpi2 <= '11.6')?'red':(marketMobileMarContents.kpi2 > '11.6' && marketMobileMarContents.kpi2 <= '15.46666667')?'orange':(marketMobileMarContents.kpi2 > '15.46666667' && marketMobileMarContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileMarContents.kpi2 >= '19.33333333' && marketMobileMarContents.kpi2 < '23.2')?'green':(marketMobileMarContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMarContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMarContents.kpi3 == null)?'grey-2':(marketMobileMarContents.kpi3 >= '0' && marketMobileMarContents.kpi3 <= '38.2')?'red':(marketMobileMarContents.kpi3 > '38.2' && marketMobileMarContents.kpi3 <= '50.93333333')?'orange':(marketMobileMarContents.kpi3 > '50.93333333' && marketMobileMarContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileMarContents.kpi3 >= '63.66666667' && marketMobileMarContents.kpi3 < '76.4')?'green':(marketMobileMarContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileMarContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMarContents.kpi4 == null)?'grey-2':(marketMobileMarContents.kpi4 >= '0' && marketMobileMarContents.kpi4 <= '109.6')?'red':(marketMobileMarContents.kpi4 > '109.6' && marketMobileMarContents.kpi4 <= '146.1333333')?'orange':(marketMobileMarContents.kpi4 > '146.1333333' && marketMobileMarContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileMarContents.kpi4 >= '182.6666667' && marketMobileMarContents.kpi4 < '219.2')?'green':(marketMobileMarContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMarContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileAprContents.kpi1 == null)?'grey-2':(marketMobileAprContents.kpi1 >= '0' && marketMobileAprContents.kpi1 <= '232.6')?'red':(marketMobileAprContents.kpi1 > '232.6' && marketMobileAprContents.kpi1 <= '310.1333333')?'orange':(marketMobileAprContents.kpi1 > '310.1333333' && marketMobileAprContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileAprContents.kpi1 >= '387.6666667' && marketMobileAprContents.kpi1 < '465.2')?'green':(marketMobileAprContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAprContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAprContents.kpi2 == null)?'grey-2':(marketMobileAprContents.kpi2 >= '0' && marketMobileAprContents.kpi2 <= '11.6')?'red':(marketMobileAprContents.kpi2 > '11.6' && marketMobileAprContents.kpi2 <= '15.46666667')?'orange':(marketMobileAprContents.kpi2 > '15.46666667' && marketMobileAprContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileAprContents.kpi2 >= '19.33333333' && marketMobileAprContents.kpi2 < '23.2')?'green':(marketMobileAprContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAprContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAprContents.kpi3 == null)?'grey-2':(marketMobileAprContents.kpi3 >= '0' && marketMobileAprContents.kpi3 <= '38.2')?'red':(marketMobileAprContents.kpi3 > '38.2' && marketMobileAprContents.kpi3 <= '50.93333333')?'orange':(marketMobileAprContents.kpi3 > '50.93333333' && marketMobileAprContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileAprContents.kpi3 >= '63.66666667' && marketMobileAprContents.kpi3 < '76.4')?'green':(marketMobileAprContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileAprContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAprContents.kpi4 == null)?'grey-2':(marketMobileAprContents.kpi4 >= '0' && marketMobileAprContents.kpi4 <= '109.6')?'red':(marketMobileAprContents.kpi4 > '109.6' && marketMobileAprContents.kpi4 <= '146.1333333')?'orange':(marketMobileAprContents.kpi4 > '146.1333333' && marketMobileAprContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileAprContents.kpi4 >= '182.6666667' && marketMobileAprContents.kpi4 < '219.2')?'green':(marketMobileAprContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAprContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileMayContents.kpi1 == null)?'grey-2':(marketMobileMayContents.kpi1 >= '0' && marketMobileMayContents.kpi1 <= '232.6')?'red':(marketMobileMayContents.kpi1 > '232.6' && marketMobileMayContents.kpi1 <= '310.1333333')?'orange':(marketMobileMayContents.kpi1 > '310.1333333' && marketMobileMayContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileMayContents.kpi1 >= '387.6666667' && marketMobileMayContents.kpi1 < '465.2')?'green':(marketMobileMayContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMayContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMayContents.kpi2 == null)?'grey-2':(marketMobileMayContents.kpi2 >= '0' && marketMobileMayContents.kpi2 <= '11.6')?'red':(marketMobileMayContents.kpi2 > '11.6' && marketMobileMayContents.kpi2 <= '15.46666667')?'orange':(marketMobileMayContents.kpi2 > '15.46666667' && marketMobileMayContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileMayContents.kpi2 >= '19.33333333' && marketMobileMayContents.kpi2 < '23.2')?'green':(marketMobileMayContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMayContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMayContents.kpi3 == null)?'grey-2':(marketMobileMayContents.kpi3 >= '0' && marketMobileMayContents.kpi3 <= '38.2')?'red':(marketMobileMayContents.kpi3 > '38.2' && marketMobileMayContents.kpi3 <= '50.93333333')?'orange':(marketMobileMayContents.kpi3 > '50.93333333' && marketMobileMayContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileMayContents.kpi3 >= '63.66666667' && marketMobileMayContents.kpi3 < '76.4')?'green':(marketMobileMayContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileMayContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMayContents.kpi4 == null)?'grey-2':(marketMobileMayContents.kpi4 >= '0' && marketMobileMayContents.kpi4 <= '109.6')?'red':(marketMobileMayContents.kpi4 > '109.6' && marketMobileMayContents.kpi4 <= '146.1333333')?'orange':(marketMobileMayContents.kpi4 > '146.1333333' && marketMobileMayContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileMayContents.kpi4 >= '182.6666667' && marketMobileMayContents.kpi4 < '219.2')?'green':(marketMobileMayContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMayContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileJunContents.kpi1 == null)?'grey-2':(marketMobileJunContents.kpi1 >= '0' && marketMobileJunContents.kpi1 <= '232.6')?'red':(marketMobileJunContents.kpi1 > '232.6' && marketMobileJunContents.kpi1 <= '310.1333333')?'orange':(marketMobileJunContents.kpi1 > '310.1333333' && marketMobileJunContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileJunContents.kpi1 >= '387.6666667' && marketMobileJunContents.kpi1 < '465.2')?'green':(marketMobileJunContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJunContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJunContents.kpi2 == null)?'grey-2':(marketMobileJunContents.kpi2 >= '0' && marketMobileJunContents.kpi2 <= '11.6')?'red':(marketMobileJunContents.kpi2 > '11.6' && marketMobileJunContents.kpi2 <= '15.46666667')?'orange':(marketMobileJunContents.kpi2 > '15.46666667' && marketMobileJunContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileJunContents.kpi2 >= '19.33333333' && marketMobileJunContents.kpi2 < '23.2')?'green':(marketMobileJunContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJunContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJunContents.kpi3 == null)?'grey-2':(marketMobileJunContents.kpi3 >= '0' && marketMobileJunContents.kpi3 <= '38.2')?'red':(marketMobileJunContents.kpi3 > '38.2' && marketMobileJunContents.kpi3 <= '50.93333333')?'orange':(marketMobileJunContents.kpi3 > '50.93333333' && marketMobileJunContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileJunContents.kpi3 >= '63.66666667' && marketMobileJunContents.kpi3 < '76.4')?'green':(marketMobileJunContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileJunContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJunContents.kpi4 == null)?'grey-2':(marketMobileJunContents.kpi4 >= '0' && marketMobileJunContents.kpi4 <= '109.6')?'red':(marketMobileJunContents.kpi4 > '109.6' && marketMobileJunContents.kpi4 <= '146.1333333')?'orange':(marketMobileJunContents.kpi4 > '146.1333333' && marketMobileJunContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileJunContents.kpi4 >= '182.6666667' && marketMobileJunContents.kpi4 < '219.2')?'green':(marketMobileJunContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJunContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileJulContents.kpi1 == null)?'grey-2':(marketMobileJulContents.kpi1 >= '0' && marketMobileJulContents.kpi1 <= '232.6')?'red':(marketMobileJulContents.kpi1 > '232.6' && marketMobileJulContents.kpi1 <= '310.1333333')?'orange':(marketMobileJulContents.kpi1 > '310.1333333' && marketMobileJulContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileJulContents.kpi1 >= '387.6666667' && marketMobileJulContents.kpi1 < '465.2')?'green':(marketMobileJulContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJulContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJulContents.kpi2 == null)?'grey-2':(marketMobileJulContents.kpi2 >= '0' && marketMobileJulContents.kpi2 <= '11.6')?'red':(marketMobileJulContents.kpi2 > '11.6' && marketMobileJulContents.kpi2 <= '15.46666667')?'orange':(marketMobileJulContents.kpi2 > '15.46666667' && marketMobileJulContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileJulContents.kpi2 >= '19.33333333' && marketMobileJulContents.kpi2 < '23.2')?'green':(marketMobileJulContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJulContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJulContents.kpi3 == null)?'grey-2':(marketMobileJulContents.kpi3 >= '0' && marketMobileJulContents.kpi3 <= '38.2')?'red':(marketMobileJulContents.kpi3 > '38.2' && marketMobileJulContents.kpi3 <= '50.93333333')?'orange':(marketMobileJulContents.kpi3 > '50.93333333' && marketMobileJulContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileJulContents.kpi3 >= '63.66666667' && marketMobileJulContents.kpi3 < '76.4')?'green':(marketMobileJulContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileJulContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJulContents.kpi4 == null)?'grey-2':(marketMobileJulContents.kpi4 >= '0' && marketMobileJulContents.kpi4 <= '109.6')?'red':(marketMobileJulContents.kpi4 > '109.6' && marketMobileJulContents.kpi4 <= '146.1333333')?'orange':(marketMobileJulContents.kpi4 > '146.1333333' && marketMobileJulContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileJulContents.kpi4 >= '182.6666667' && marketMobileJulContents.kpi4 < '219.2')?'green':(marketMobileJulContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJulContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileAugContents.kpi1 == null)?'grey-2':(marketMobileAugContents.kpi1 >= '0' && marketMobileAugContents.kpi1 <= '232.6')?'red':(marketMobileAugContents.kpi1 > '232.6' && marketMobileAugContents.kpi1 <= '310.1333333')?'orange':(marketMobileAugContents.kpi1 > '310.1333333' && marketMobileAugContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileAugContents.kpi1 >= '387.6666667' && marketMobileAugContents.kpi1 < '465.2')?'green':(marketMobileAugContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAugContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAugContents.kpi2 == null)?'grey-2':(marketMobileAugContents.kpi2 >= '0' && marketMobileAugContents.kpi2 <= '11.6')?'red':(marketMobileAugContents.kpi2 > '11.6' && marketMobileAugContents.kpi2 <= '15.46666667')?'orange':(marketMobileAugContents.kpi2 > '15.46666667' && marketMobileAugContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileAugContents.kpi2 >= '19.33333333' && marketMobileAugContents.kpi2 < '23.2')?'green':(marketMobileAugContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAugContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAugContents.kpi3 == null)?'grey-2':(marketMobileAugContents.kpi3 >= '0' && marketMobileAugContents.kpi3 <= '38.2')?'red':(marketMobileAugContents.kpi3 > '38.2' && marketMobileAugContents.kpi3 <= '50.93333333')?'orange':(marketMobileAugContents.kpi3 > '50.93333333' && marketMobileAugContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileAugContents.kpi3 >= '63.66666667' && marketMobileAugContents.kpi3 < '76.4')?'green':(marketMobileAugContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileAugContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAugContents.kpi4 == null)?'grey-2':(marketMobileAugContents.kpi4 >= '0' && marketMobileAugContents.kpi4 <= '109.6')?'red':(marketMobileAugContents.kpi4 > '109.6' && marketMobileAugContents.kpi4 <= '146.1333333')?'orange':(marketMobileAugContents.kpi4 > '146.1333333' && marketMobileAugContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileAugContents.kpi4 >= '182.6666667' && marketMobileAugContents.kpi4 < '219.2')?'green':(marketMobileAugContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAugContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileSepContents.kpi1 == null)?'grey-2':(marketMobileSepContents.kpi1 >= '0' && marketMobileSepContents.kpi1 <= '232.6')?'red':(marketMobileSepContents.kpi1 > '232.6' && marketMobileSepContents.kpi1 <= '310.1333333')?'orange':(marketMobileSepContents.kpi1 > '310.1333333' && marketMobileSepContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileSepContents.kpi1 >= '387.6666667' && marketMobileSepContents.kpi1 < '465.2')?'green':(marketMobileSepContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileSepContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileSepContents.kpi2 == null)?'grey-2':(marketMobileSepContents.kpi2 >= '0' && marketMobileSepContents.kpi2 <= '11.6')?'red':(marketMobileSepContents.kpi2 > '11.6' && marketMobileSepContents.kpi2 <= '15.46666667')?'orange':(marketMobileSepContents.kpi2 > '15.46666667' && marketMobileSepContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileSepContents.kpi2 >= '19.33333333' && marketMobileSepContents.kpi2 < '23.2')?'green':(marketMobileSepContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileSepContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileSepContents.kpi3 == null)?'grey-2':(marketMobileSepContents.kpi3 >= '0' && marketMobileSepContents.kpi3 <= '38.2')?'red':(marketMobileSepContents.kpi3 > '38.2' && marketMobileSepContents.kpi3 <= '50.93333333')?'orange':(marketMobileSepContents.kpi3 > '50.93333333' && marketMobileSepContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileSepContents.kpi3 >= '63.66666667' && marketMobileSepContents.kpi3 < '76.4')?'green':(marketMobileSepContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileSepContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileSepContents.kpi4 == null)?'grey-2':(marketMobileSepContents.kpi4 >= '0' && marketMobileSepContents.kpi4 <= '109.6')?'red':(marketMobileSepContents.kpi4 > '109.6' && marketMobileSepContents.kpi4 <= '146.1333333')?'orange':(marketMobileSepContents.kpi4 > '146.1333333' && marketMobileSepContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileSepContents.kpi4 >= '182.6666667' && marketMobileSepContents.kpi4 < '219.2')?'green':(marketMobileSepContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileSepContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileOctContents.kpi1 == null)?'grey-2':(marketMobileOctContents.kpi1 >= '0' && marketMobileOctContents.kpi1 <= '232.6')?'red':(marketMobileOctContents.kpi1 > '232.6' && marketMobileOctContents.kpi1 <= '310.1333333')?'orange':(marketMobileOctContents.kpi1 > '310.1333333' && marketMobileOctContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileOctContents.kpi1 >= '387.6666667' && marketMobileOctContents.kpi1 < '465.2')?'green':(marketMobileOctContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileOctContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileOctContents.kpi2 == null)?'grey-2':(marketMobileOctContents.kpi2 >= '0' && marketMobileOctContents.kpi2 <= '11.6')?'red':(marketMobileOctContents.kpi2 > '11.6' && marketMobileOctContents.kpi2 <= '15.46666667')?'orange':(marketMobileOctContents.kpi2 > '15.46666667' && marketMobileOctContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileOctContents.kpi2 >= '19.33333333' && marketMobileOctContents.kpi2 < '23.2')?'green':(marketMobileOctContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileOctContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileOctContents.kpi3 == null)?'grey-2':(marketMobileOctContents.kpi3 >= '0' && marketMobileOctContents.kpi3 <= '38.2')?'red':(marketMobileOctContents.kpi3 > '38.2' && marketMobileOctContents.kpi3 <= '50.93333333')?'orange':(marketMobileOctContents.kpi3 > '50.93333333' && marketMobileOctContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileOctContents.kpi3 >= '63.66666667' && marketMobileOctContents.kpi3 < '76.4')?'green':(marketMobileOctContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileOctContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileOctContents.kpi4 == null)?'grey-2':(marketMobileOctContents.kpi4 >= '0' && marketMobileOctContents.kpi4 <= '109.6')?'red':(marketMobileOctContents.kpi4 > '109.6' && marketMobileOctContents.kpi4 <= '146.1333333')?'orange':(marketMobileOctContents.kpi4 > '146.1333333' && marketMobileOctContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileOctContents.kpi4 >= '182.6666667' && marketMobileOctContents.kpi4 < '219.2')?'green':(marketMobileOctContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileOctContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileNovContents.kpi1 == null)?'grey-2':(marketMobileNovContents.kpi1 >= '0' && marketMobileNovContents.kpi1 <= '232.6')?'red':(marketMobileNovContents.kpi1 > '232.6' && marketMobileNovContents.kpi1 <= '310.1333333')?'orange':(marketMobileNovContents.kpi1 > '310.1333333' && marketMobileNovContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileNovContents.kpi1 >= '387.6666667' && marketMobileNovContents.kpi1 < '465.2')?'green':(marketMobileNovContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileNovContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileNovContents.kpi2 == null)?'grey-2':(marketMobileNovContents.kpi2 >= '0' && marketMobileNovContents.kpi2 <= '11.6')?'red':(marketMobileNovContents.kpi2 > '11.6' && marketMobileNovContents.kpi2 <= '15.46666667')?'orange':(marketMobileNovContents.kpi2 > '15.46666667' && marketMobileNovContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileNovContents.kpi2 >= '19.33333333' && marketMobileNovContents.kpi2 < '23.2')?'green':(marketMobileNovContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileNovContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileNovContents.kpi3 == null)?'grey-2':(marketMobileNovContents.kpi3 >= '0' && marketMobileNovContents.kpi3 <= '38.2')?'red':(marketMobileNovContents.kpi3 > '38.2' && marketMobileNovContents.kpi3 <= '50.93333333')?'orange':(marketMobileNovContents.kpi3 > '50.93333333' && marketMobileNovContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileNovContents.kpi3 >= '63.66666667' && marketMobileNovContents.kpi3 < '76.4')?'green':(marketMobileNovContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileNovContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileNovContents.kpi4 == null)?'grey-2':(marketMobileNovContents.kpi4 >= '0' && marketMobileNovContents.kpi4 <= '109.6')?'red':(marketMobileNovContents.kpi4 > '109.6' && marketMobileNovContents.kpi4 <= '146.1333333')?'orange':(marketMobileNovContents.kpi4 > '146.1333333' && marketMobileNovContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileNovContents.kpi4 >= '182.6666667' && marketMobileNovContents.kpi4 < '219.2')?'green':(marketMobileNovContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileNovContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileDecContents.kpi1 == null)?'grey-2':(marketMobileDecContents.kpi1 >= '0' && marketMobileDecContents.kpi1 <= '232.6')?'red':(marketMobileDecContents.kpi1 > '232.6' && marketMobileDecContents.kpi1 <= '310.1333333')?'orange':(marketMobileDecContents.kpi1 > '310.1333333' && marketMobileDecContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileDecContents.kpi1 >= '387.6666667' && marketMobileDecContents.kpi1 < '465.2')?'green':(marketMobileDecContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileDecContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileDecContents.kpi2 == null)?'grey-2':(marketMobileDecContents.kpi2 >= '0' && marketMobileDecContents.kpi2 <= '11.6')?'red':(marketMobileDecContents.kpi2 > '11.6' && marketMobileDecContents.kpi2 <= '15.46666667')?'orange':(marketMobileDecContents.kpi2 > '15.46666667' && marketMobileDecContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileDecContents.kpi2 >= '19.33333333' && marketMobileDecContents.kpi2 < '23.2')?'green':(marketMobileDecContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileDecContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileDecContents.kpi3 == null)?'grey-2':(marketMobileDecContents.kpi3 >= '0' && marketMobileDecContents.kpi3 <= '38.2')?'red':(marketMobileDecContents.kpi3 > '38.2' && marketMobileDecContents.kpi3 <= '50.93333333')?'orange':(marketMobileDecContents.kpi3 > '50.93333333' && marketMobileDecContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileDecContents.kpi3 >= '63.66666667' && marketMobileDecContents.kpi3 < '76.4')?'green':(marketMobileDecContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileDecContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileDecContents.kpi4 == null)?'grey-2':(marketMobileDecContents.kpi4 >= '0' && marketMobileDecContents.kpi4 <= '109.6')?'red':(marketMobileDecContents.kpi4 > '109.6' && marketMobileDecContents.kpi4 <= '146.1333333')?'orange':(marketMobileDecContents.kpi4 > '146.1333333' && marketMobileDecContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileDecContents.kpi4 >= '182.6666667' && marketMobileDecContents.kpi4 < '219.2')?'green':(marketMobileDecContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileDecContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                                <q-tooltip># total contact</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip>Activities (#)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of pick-up contacts</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileJanContents.kpi1 == null)?'grey-2':(marketMobileJanContents.kpi1 >= '0' && marketMobileJanContents.kpi1 <= '232.6')?'red':(marketMobileJanContents.kpi1 > '232.6' && marketMobileJanContents.kpi1 <= '310.1333333')?'orange':(marketMobileJanContents.kpi1 > '310.1333333' && marketMobileJanContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileJanContents.kpi1 >= '387.6666667' && marketMobileJanContents.kpi1 < '465.2')?'green':(marketMobileJanContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJanContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJanContents.kpi2 == null)?'grey-2':(marketMobileJanContents.kpi2 >= '0' && marketMobileJanContents.kpi2 <= '11.6')?'red':(marketMobileJanContents.kpi2 > '11.6' && marketMobileJanContents.kpi2 <= '15.46666667')?'orange':(marketMobileJanContents.kpi2 > '15.46666667' && marketMobileJanContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileJanContents.kpi2 >= '19.33333333' && marketMobileJanContents.kpi2 < '23.2')?'green':(marketMobileJanContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJanContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJanContents.kpi3 == null)?'grey-2':(marketMobileJanContents.kpi3 >= '0' && marketMobileJanContents.kpi3 <= '38.2')?'red':(marketMobileJanContents.kpi3 > '38.2' && marketMobileJanContents.kpi3 <= '50.93333333')?'orange':(marketMobileJanContents.kpi3 > '50.93333333' && marketMobileJanContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileJanContents.kpi3 >= '63.66666667' && marketMobileJanContents.kpi3 < '76.4')?'green':(marketMobileJanContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileJanContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJanContents.kpi4 == null)?'grey-2':(marketMobileJanContents.kpi4 >= '0' && marketMobileJanContents.kpi4 <= '109.6')?'red':(marketMobileJanContents.kpi4 > '109.6' && marketMobileJanContents.kpi4 <= '146.1333333')?'orange':(marketMobileJanContents.kpi4 > '146.1333333' && marketMobileJanContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileJanContents.kpi4 >= '182.6666667' && marketMobileJanContents.kpi4 < '219.2')?'green':(marketMobileJanContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJanContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileFebContents.kpi1 == null)?'grey-2':(marketMobileFebContents.kpi1 >= '0' && marketMobileFebContents.kpi1 <= '232.6')?'red':(marketMobileFebContents.kpi1 > '232.6' && marketMobileFebContents.kpi1 <= '310.1333333')?'orange':(marketMobileFebContents.kpi1 > '310.1333333' && marketMobileFebContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileFebContents.kpi1 >= '387.6666667' && marketMobileFebContents.kpi1 < '465.2')?'green':(marketMobileFebContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileFebContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileFebContents.kpi2 == null)?'grey-2':(marketMobileFebContents.kpi2 >= '0' && marketMobileFebContents.kpi2 <= '11.6')?'red':(marketMobileFebContents.kpi2 > '11.6' && marketMobileFebContents.kpi2 <= '15.46666667')?'orange':(marketMobileFebContents.kpi2 > '15.46666667' && marketMobileFebContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileFebContents.kpi2 >= '19.33333333' && marketMobileFebContents.kpi2 < '23.2')?'green':(marketMobileFebContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileFebContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileFebContents.kpi3 == null)?'grey-2':(marketMobileFebContents.kpi3 >= '0' && marketMobileFebContents.kpi3 <= '38.2')?'red':(marketMobileFebContents.kpi3 > '38.2' && marketMobileFebContents.kpi3 <= '50.93333333')?'orange':(marketMobileFebContents.kpi3 > '50.93333333' && marketMobileFebContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileFebContents.kpi3 >= '63.66666667' && marketMobileFebContents.kpi3 < '76.4')?'green':(marketMobileFebContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileFebContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileFebContents.kpi4 == null)?'grey-2':(marketMobileFebContents.kpi4 >= '0' && marketMobileFebContents.kpi4 <= '109.6')?'red':(marketMobileFebContents.kpi4 > '109.6' && marketMobileFebContents.kpi4 <= '146.1333333')?'orange':(marketMobileFebContents.kpi4 > '146.1333333' && marketMobileFebContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileFebContents.kpi4 >= '182.6666667' && marketMobileFebContents.kpi4 < '219.2')?'green':(marketMobileFebContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileFebContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileMarContents.kpi1 == null)?'grey-2':(marketMobileMarContents.kpi1 >= '0' && marketMobileMarContents.kpi1 <= '232.6')?'red':(marketMobileMarContents.kpi1 > '232.6' && marketMobileMarContents.kpi1 <= '310.1333333')?'orange':(marketMobileMarContents.kpi1 > '310.1333333' && marketMobileMarContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileMarContents.kpi1 >= '387.6666667' && marketMobileMarContents.kpi1 < '465.2')?'green':(marketMobileMarContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMarContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMarContents.kpi2 == null)?'grey-2':(marketMobileMarContents.kpi2 >= '0' && marketMobileMarContents.kpi2 <= '11.6')?'red':(marketMobileMarContents.kpi2 > '11.6' && marketMobileMarContents.kpi2 <= '15.46666667')?'orange':(marketMobileMarContents.kpi2 > '15.46666667' && marketMobileMarContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileMarContents.kpi2 >= '19.33333333' && marketMobileMarContents.kpi2 < '23.2')?'green':(marketMobileMarContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMarContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMarContents.kpi3 == null)?'grey-2':(marketMobileMarContents.kpi3 >= '0' && marketMobileMarContents.kpi3 <= '38.2')?'red':(marketMobileMarContents.kpi3 > '38.2' && marketMobileMarContents.kpi3 <= '50.93333333')?'orange':(marketMobileMarContents.kpi3 > '50.93333333' && marketMobileMarContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileMarContents.kpi3 >= '63.66666667' && marketMobileMarContents.kpi3 < '76.4')?'green':(marketMobileMarContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileMarContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMarContents.kpi4 == null)?'grey-2':(marketMobileMarContents.kpi4 >= '0' && marketMobileMarContents.kpi4 <= '109.6')?'red':(marketMobileMarContents.kpi4 > '109.6' && marketMobileMarContents.kpi4 <= '146.1333333')?'orange':(marketMobileMarContents.kpi4 > '146.1333333' && marketMobileMarContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileMarContents.kpi4 >= '182.6666667' && marketMobileMarContents.kpi4 < '219.2')?'green':(marketMobileMarContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMarContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileAprContents.kpi1 == null)?'grey-2':(marketMobileAprContents.kpi1 >= '0' && marketMobileAprContents.kpi1 <= '232.6')?'red':(marketMobileAprContents.kpi1 > '232.6' && marketMobileAprContents.kpi1 <= '310.1333333')?'orange':(marketMobileAprContents.kpi1 > '310.1333333' && marketMobileAprContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileAprContents.kpi1 >= '387.6666667' && marketMobileAprContents.kpi1 < '465.2')?'green':(marketMobileAprContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAprContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAprContents.kpi2 == null)?'grey-2':(marketMobileAprContents.kpi2 >= '0' && marketMobileAprContents.kpi2 <= '11.6')?'red':(marketMobileAprContents.kpi2 > '11.6' && marketMobileAprContents.kpi2 <= '15.46666667')?'orange':(marketMobileAprContents.kpi2 > '15.46666667' && marketMobileAprContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileAprContents.kpi2 >= '19.33333333' && marketMobileAprContents.kpi2 < '23.2')?'green':(marketMobileAprContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAprContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAprContents.kpi3 == null)?'grey-2':(marketMobileAprContents.kpi3 >= '0' && marketMobileAprContents.kpi3 <= '38.2')?'red':(marketMobileAprContents.kpi3 > '38.2' && marketMobileAprContents.kpi3 <= '50.93333333')?'orange':(marketMobileAprContents.kpi3 > '50.93333333' && marketMobileAprContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileAprContents.kpi3 >= '63.66666667' && marketMobileAprContents.kpi3 < '76.4')?'green':(marketMobileAprContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileAprContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAprContents.kpi4 == null)?'grey-2':(marketMobileAprContents.kpi4 >= '0' && marketMobileAprContents.kpi4 <= '109.6')?'red':(marketMobileAprContents.kpi4 > '109.6' && marketMobileAprContents.kpi4 <= '146.1333333')?'orange':(marketMobileAprContents.kpi4 > '146.1333333' && marketMobileAprContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileAprContents.kpi4 >= '182.6666667' && marketMobileAprContents.kpi4 < '219.2')?'green':(marketMobileAprContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAprContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileMayContents.kpi1 == null)?'grey-2':(marketMobileMayContents.kpi1 >= '0' && marketMobileMayContents.kpi1 <= '232.6')?'red':(marketMobileMayContents.kpi1 > '232.6' && marketMobileMayContents.kpi1 <= '310.1333333')?'orange':(marketMobileMayContents.kpi1 > '310.1333333' && marketMobileMayContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileMayContents.kpi1 >= '387.6666667' && marketMobileMayContents.kpi1 < '465.2')?'green':(marketMobileMayContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMayContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMayContents.kpi2 == null)?'grey-2':(marketMobileMayContents.kpi2 >= '0' && marketMobileMayContents.kpi2 <= '11.6')?'red':(marketMobileMayContents.kpi2 > '11.6' && marketMobileMayContents.kpi2 <= '15.46666667')?'orange':(marketMobileMayContents.kpi2 > '15.46666667' && marketMobileMayContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileMayContents.kpi2 >= '19.33333333' && marketMobileMayContents.kpi2 < '23.2')?'green':(marketMobileMayContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMayContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMayContents.kpi3 == null)?'grey-2':(marketMobileMayContents.kpi3 >= '0' && marketMobileMayContents.kpi3 <= '38.2')?'red':(marketMobileMayContents.kpi3 > '38.2' && marketMobileMayContents.kpi3 <= '50.93333333')?'orange':(marketMobileMayContents.kpi3 > '50.93333333' && marketMobileMayContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileMayContents.kpi3 >= '63.66666667' && marketMobileMayContents.kpi3 < '76.4')?'green':(marketMobileMayContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileMayContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMayContents.kpi4 == null)?'grey-2':(marketMobileMayContents.kpi4 >= '0' && marketMobileMayContents.kpi4 <= '109.6')?'red':(marketMobileMayContents.kpi4 > '109.6' && marketMobileMayContents.kpi4 <= '146.1333333')?'orange':(marketMobileMayContents.kpi4 > '146.1333333' && marketMobileMayContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileMayContents.kpi4 >= '182.6666667' && marketMobileMayContents.kpi4 < '219.2')?'green':(marketMobileMayContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMayContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileJunContents.kpi1 == null)?'grey-2':(marketMobileJunContents.kpi1 >= '0' && marketMobileJunContents.kpi1 <= '232.6')?'red':(marketMobileJunContents.kpi1 > '232.6' && marketMobileJunContents.kpi1 <= '310.1333333')?'orange':(marketMobileJunContents.kpi1 > '310.1333333' && marketMobileJunContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileJunContents.kpi1 >= '387.6666667' && marketMobileJunContents.kpi1 < '465.2')?'green':(marketMobileJunContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJunContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJunContents.kpi2 == null)?'grey-2':(marketMobileJunContents.kpi2 >= '0' && marketMobileJunContents.kpi2 <= '11.6')?'red':(marketMobileJunContents.kpi2 > '11.6' && marketMobileJunContents.kpi2 <= '15.46666667')?'orange':(marketMobileJunContents.kpi2 > '15.46666667' && marketMobileJunContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileJunContents.kpi2 >= '19.33333333' && marketMobileJunContents.kpi2 < '23.2')?'green':(marketMobileJunContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJunContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJunContents.kpi3 == null)?'grey-2':(marketMobileJunContents.kpi3 >= '0' && marketMobileJunContents.kpi3 <= '38.2')?'red':(marketMobileJunContents.kpi3 > '38.2' && marketMobileJunContents.kpi3 <= '50.93333333')?'orange':(marketMobileJunContents.kpi3 > '50.93333333' && marketMobileJunContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileJunContents.kpi3 >= '63.66666667' && marketMobileJunContents.kpi3 < '76.4')?'green':(marketMobileJunContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileJunContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJunContents.kpi4 == null)?'grey-2':(marketMobileJunContents.kpi4 >= '0' && marketMobileJunContents.kpi4 <= '109.6')?'red':(marketMobileJunContents.kpi4 > '109.6' && marketMobileJunContents.kpi4 <= '146.1333333')?'orange':(marketMobileJunContents.kpi4 > '146.1333333' && marketMobileJunContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileJunContents.kpi4 >= '182.6666667' && marketMobileJunContents.kpi4 < '219.2')?'green':(marketMobileJunContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJunContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileJulContents.kpi1 == null)?'grey-2':(marketMobileJulContents.kpi1 >= '0' && marketMobileJulContents.kpi1 <= '232.6')?'red':(marketMobileJulContents.kpi1 > '232.6' && marketMobileJulContents.kpi1 <= '310.1333333')?'orange':(marketMobileJulContents.kpi1 > '310.1333333' && marketMobileJulContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileJulContents.kpi1 >= '387.6666667' && marketMobileJulContents.kpi1 < '465.2')?'green':(marketMobileJulContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJulContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJulContents.kpi2 == null)?'grey-2':(marketMobileJulContents.kpi2 >= '0' && marketMobileJulContents.kpi2 <= '11.6')?'red':(marketMobileJulContents.kpi2 > '11.6' && marketMobileJulContents.kpi2 <= '15.46666667')?'orange':(marketMobileJulContents.kpi2 > '15.46666667' && marketMobileJulContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileJulContents.kpi2 >= '19.33333333' && marketMobileJulContents.kpi2 < '23.2')?'green':(marketMobileJulContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJulContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJulContents.kpi3 == null)?'grey-2':(marketMobileJulContents.kpi3 >= '0' && marketMobileJulContents.kpi3 <= '38.2')?'red':(marketMobileJulContents.kpi3 > '38.2' && marketMobileJulContents.kpi3 <= '50.93333333')?'orange':(marketMobileJulContents.kpi3 > '50.93333333' && marketMobileJulContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileJulContents.kpi3 >= '63.66666667' && marketMobileJulContents.kpi3 < '76.4')?'green':(marketMobileJulContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileJulContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJulContents.kpi4 == null)?'grey-2':(marketMobileJulContents.kpi4 >= '0' && marketMobileJulContents.kpi4 <= '109.6')?'red':(marketMobileJulContents.kpi4 > '109.6' && marketMobileJulContents.kpi4 <= '146.1333333')?'orange':(marketMobileJulContents.kpi4 > '146.1333333' && marketMobileJulContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileJulContents.kpi4 >= '182.6666667' && marketMobileJulContents.kpi4 < '219.2')?'green':(marketMobileJulContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJulContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileAugContents.kpi1 == null)?'grey-2':(marketMobileAugContents.kpi1 >= '0' && marketMobileAugContents.kpi1 <= '232.6')?'red':(marketMobileAugContents.kpi1 > '232.6' && marketMobileAugContents.kpi1 <= '310.1333333')?'orange':(marketMobileAugContents.kpi1 > '310.1333333' && marketMobileAugContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileAugContents.kpi1 >= '387.6666667' && marketMobileAugContents.kpi1 < '465.2')?'green':(marketMobileAugContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAugContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAugContents.kpi2 == null)?'grey-2':(marketMobileAugContents.kpi2 >= '0' && marketMobileAugContents.kpi2 <= '11.6')?'red':(marketMobileAugContents.kpi2 > '11.6' && marketMobileAugContents.kpi2 <= '15.46666667')?'orange':(marketMobileAugContents.kpi2 > '15.46666667' && marketMobileAugContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileAugContents.kpi2 >= '19.33333333' && marketMobileAugContents.kpi2 < '23.2')?'green':(marketMobileAugContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAugContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAugContents.kpi3 == null)?'grey-2':(marketMobileAugContents.kpi3 >= '0' && marketMobileAugContents.kpi3 <= '38.2')?'red':(marketMobileAugContents.kpi3 > '38.2' && marketMobileAugContents.kpi3 <= '50.93333333')?'orange':(marketMobileAugContents.kpi3 > '50.93333333' && marketMobileAugContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileAugContents.kpi3 >= '63.66666667' && marketMobileAugContents.kpi3 < '76.4')?'green':(marketMobileAugContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileAugContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAugContents.kpi4 == null)?'grey-2':(marketMobileAugContents.kpi4 >= '0' && marketMobileAugContents.kpi4 <= '109.6')?'red':(marketMobileAugContents.kpi4 > '109.6' && marketMobileAugContents.kpi4 <= '146.1333333')?'orange':(marketMobileAugContents.kpi4 > '146.1333333' && marketMobileAugContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileAugContents.kpi4 >= '182.6666667' && marketMobileAugContents.kpi4 < '219.2')?'green':(marketMobileAugContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAugContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileSepContents.kpi1 == null)?'grey-2':(marketMobileSepContents.kpi1 >= '0' && marketMobileSepContents.kpi1 <= '232.6')?'red':(marketMobileSepContents.kpi1 > '232.6' && marketMobileSepContents.kpi1 <= '310.1333333')?'orange':(marketMobileSepContents.kpi1 > '310.1333333' && marketMobileSepContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileSepContents.kpi1 >= '387.6666667' && marketMobileSepContents.kpi1 < '465.2')?'green':(marketMobileSepContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileSepContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileSepContents.kpi2 == null)?'grey-2':(marketMobileSepContents.kpi2 >= '0' && marketMobileSepContents.kpi2 <= '11.6')?'red':(marketMobileSepContents.kpi2 > '11.6' && marketMobileSepContents.kpi2 <= '15.46666667')?'orange':(marketMobileSepContents.kpi2 > '15.46666667' && marketMobileSepContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileSepContents.kpi2 >= '19.33333333' && marketMobileSepContents.kpi2 < '23.2')?'green':(marketMobileSepContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileSepContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileSepContents.kpi3 == null)?'grey-2':(marketMobileSepContents.kpi3 >= '0' && marketMobileSepContents.kpi3 <= '38.2')?'red':(marketMobileSepContents.kpi3 > '38.2' && marketMobileSepContents.kpi3 <= '50.93333333')?'orange':(marketMobileSepContents.kpi3 > '50.93333333' && marketMobileSepContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileSepContents.kpi3 >= '63.66666667' && marketMobileSepContents.kpi3 < '76.4')?'green':(marketMobileSepContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileSepContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileSepContents.kpi4 == null)?'grey-2':(marketMobileSepContents.kpi4 >= '0' && marketMobileSepContents.kpi4 <= '109.6')?'red':(marketMobileSepContents.kpi4 > '109.6' && marketMobileSepContents.kpi4 <= '146.1333333')?'orange':(marketMobileSepContents.kpi4 > '146.1333333' && marketMobileSepContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileSepContents.kpi4 >= '182.6666667' && marketMobileSepContents.kpi4 < '219.2')?'green':(marketMobileSepContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileSepContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileOctContents.kpi1 == null)?'grey-2':(marketMobileOctContents.kpi1 >= '0' && marketMobileOctContents.kpi1 <= '232.6')?'red':(marketMobileOctContents.kpi1 > '232.6' && marketMobileOctContents.kpi1 <= '310.1333333')?'orange':(marketMobileOctContents.kpi1 > '310.1333333' && marketMobileOctContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileOctContents.kpi1 >= '387.6666667' && marketMobileOctContents.kpi1 < '465.2')?'green':(marketMobileOctContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileOctContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileOctContents.kpi2 == null)?'grey-2':(marketMobileOctContents.kpi2 >= '0' && marketMobileOctContents.kpi2 <= '11.6')?'red':(marketMobileOctContents.kpi2 > '11.6' && marketMobileOctContents.kpi2 <= '15.46666667')?'orange':(marketMobileOctContents.kpi2 > '15.46666667' && marketMobileOctContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileOctContents.kpi2 >= '19.33333333' && marketMobileOctContents.kpi2 < '23.2')?'green':(marketMobileOctContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileOctContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileOctContents.kpi3 == null)?'grey-2':(marketMobileOctContents.kpi3 >= '0' && marketMobileOctContents.kpi3 <= '38.2')?'red':(marketMobileOctContents.kpi3 > '38.2' && marketMobileOctContents.kpi3 <= '50.93333333')?'orange':(marketMobileOctContents.kpi3 > '50.93333333' && marketMobileOctContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileOctContents.kpi3 >= '63.66666667' && marketMobileOctContents.kpi3 < '76.4')?'green':(marketMobileOctContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileOctContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileOctContents.kpi4 == null)?'grey-2':(marketMobileOctContents.kpi4 >= '0' && marketMobileOctContents.kpi4 <= '109.6')?'red':(marketMobileOctContents.kpi4 > '109.6' && marketMobileOctContents.kpi4 <= '146.1333333')?'orange':(marketMobileOctContents.kpi4 > '146.1333333' && marketMobileOctContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileOctContents.kpi4 >= '182.6666667' && marketMobileOctContents.kpi4 < '219.2')?'green':(marketMobileOctContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileOctContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileNovContents.kpi1 == null)?'grey-2':(marketMobileNovContents.kpi1 >= '0' && marketMobileNovContents.kpi1 <= '232.6')?'red':(marketMobileNovContents.kpi1 > '232.6' && marketMobileNovContents.kpi1 <= '310.1333333')?'orange':(marketMobileNovContents.kpi1 > '310.1333333' && marketMobileNovContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileNovContents.kpi1 >= '387.6666667' && marketMobileNovContents.kpi1 < '465.2')?'green':(marketMobileNovContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileNovContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileNovContents.kpi2 == null)?'grey-2':(marketMobileNovContents.kpi2 >= '0' && marketMobileNovContents.kpi2 <= '11.6')?'red':(marketMobileNovContents.kpi2 > '11.6' && marketMobileNovContents.kpi2 <= '15.46666667')?'orange':(marketMobileNovContents.kpi2 > '15.46666667' && marketMobileNovContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileNovContents.kpi2 >= '19.33333333' && marketMobileNovContents.kpi2 < '23.2')?'green':(marketMobileNovContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileNovContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileNovContents.kpi3 == null)?'grey-2':(marketMobileNovContents.kpi3 >= '0' && marketMobileNovContents.kpi3 <= '38.2')?'red':(marketMobileNovContents.kpi3 > '38.2' && marketMobileNovContents.kpi3 <= '50.93333333')?'orange':(marketMobileNovContents.kpi3 > '50.93333333' && marketMobileNovContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileNovContents.kpi3 >= '63.66666667' && marketMobileNovContents.kpi3 < '76.4')?'green':(marketMobileNovContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileNovContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileNovContents.kpi4 == null)?'grey-2':(marketMobileNovContents.kpi4 >= '0' && marketMobileNovContents.kpi4 <= '109.6')?'red':(marketMobileNovContents.kpi4 > '109.6' && marketMobileNovContents.kpi4 <= '146.1333333')?'orange':(marketMobileNovContents.kpi4 > '146.1333333' && marketMobileNovContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileNovContents.kpi4 >= '182.6666667' && marketMobileNovContents.kpi4 < '219.2')?'green':(marketMobileNovContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileNovContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileDecContents.kpi1 == null)?'grey-2':(marketMobileDecContents.kpi1 >= '0' && marketMobileDecContents.kpi1 <= '232.6')?'red':(marketMobileDecContents.kpi1 > '232.6' && marketMobileDecContents.kpi1 <= '310.1333333')?'orange':(marketMobileDecContents.kpi1 > '310.1333333' && marketMobileDecContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileDecContents.kpi1 >= '387.6666667' && marketMobileDecContents.kpi1 < '465.2')?'green':(marketMobileDecContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileDecContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileDecContents.kpi2 == null)?'grey-2':(marketMobileDecContents.kpi2 >= '0' && marketMobileDecContents.kpi2 <= '11.6')?'red':(marketMobileDecContents.kpi2 > '11.6' && marketMobileDecContents.kpi2 <= '15.46666667')?'orange':(marketMobileDecContents.kpi2 > '15.46666667' && marketMobileDecContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileDecContents.kpi2 >= '19.33333333' && marketMobileDecContents.kpi2 < '23.2')?'green':(marketMobileDecContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileDecContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileDecContents.kpi3 == null)?'grey-2':(marketMobileDecContents.kpi3 >= '0' && marketMobileDecContents.kpi3 <= '38.2')?'red':(marketMobileDecContents.kpi3 > '38.2' && marketMobileDecContents.kpi3 <= '50.93333333')?'orange':(marketMobileDecContents.kpi3 > '50.93333333' && marketMobileDecContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileDecContents.kpi3 >= '63.66666667' && marketMobileDecContents.kpi3 < '76.4')?'green':(marketMobileDecContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileDecContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileDecContents.kpi4 == null)?'grey-2':(marketMobileDecContents.kpi4 >= '0' && marketMobileDecContents.kpi4 <= '109.6')?'red':(marketMobileDecContents.kpi4 > '109.6' && marketMobileDecContents.kpi4 <= '146.1333333')?'orange':(marketMobileDecContents.kpi4 > '146.1333333' && marketMobileDecContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileDecContents.kpi4 >= '182.6666667' && marketMobileDecContents.kpi4 < '219.2')?'green':(marketMobileDecContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileDecContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                                <q-tooltip># total contact</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip>Activities (#)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of pick-up contacts</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileJanContents.kpi1 == null)?'grey-2':(marketMobileJanContents.kpi1 >= '0' && marketMobileJanContents.kpi1 <= '232.6')?'red':(marketMobileJanContents.kpi1 > '232.6' && marketMobileJanContents.kpi1 <= '310.1333333')?'orange':(marketMobileJanContents.kpi1 > '310.1333333' && marketMobileJanContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileJanContents.kpi1 >= '387.6666667' && marketMobileJanContents.kpi1 < '465.2')?'green':(marketMobileJanContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJanContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJanContents.kpi2 == null)?'grey-2':(marketMobileJanContents.kpi2 >= '0' && marketMobileJanContents.kpi2 <= '11.6')?'red':(marketMobileJanContents.kpi2 > '11.6' && marketMobileJanContents.kpi2 <= '15.46666667')?'orange':(marketMobileJanContents.kpi2 > '15.46666667' && marketMobileJanContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileJanContents.kpi2 >= '19.33333333' && marketMobileJanContents.kpi2 < '23.2')?'green':(marketMobileJanContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJanContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJanContents.kpi3 == null)?'grey-2':(marketMobileJanContents.kpi3 >= '0' && marketMobileJanContents.kpi3 <= '38.2')?'red':(marketMobileJanContents.kpi3 > '38.2' && marketMobileJanContents.kpi3 <= '50.93333333')?'orange':(marketMobileJanContents.kpi3 > '50.93333333' && marketMobileJanContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileJanContents.kpi3 >= '63.66666667' && marketMobileJanContents.kpi3 < '76.4')?'green':(marketMobileJanContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileJanContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJanContents.kpi4 == null)?'grey-2':(marketMobileJanContents.kpi4 >= '0' && marketMobileJanContents.kpi4 <= '109.6')?'red':(marketMobileJanContents.kpi4 > '109.6' && marketMobileJanContents.kpi4 <= '146.1333333')?'orange':(marketMobileJanContents.kpi4 > '146.1333333' && marketMobileJanContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileJanContents.kpi4 >= '182.6666667' && marketMobileJanContents.kpi4 < '219.2')?'green':(marketMobileJanContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJanContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileFebContents.kpi1 == null)?'grey-2':(marketMobileFebContents.kpi1 >= '0' && marketMobileFebContents.kpi1 <= '232.6')?'red':(marketMobileFebContents.kpi1 > '232.6' && marketMobileFebContents.kpi1 <= '310.1333333')?'orange':(marketMobileFebContents.kpi1 > '310.1333333' && marketMobileFebContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileFebContents.kpi1 >= '387.6666667' && marketMobileFebContents.kpi1 < '465.2')?'green':(marketMobileFebContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileFebContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileFebContents.kpi2 == null)?'grey-2':(marketMobileFebContents.kpi2 >= '0' && marketMobileFebContents.kpi2 <= '11.6')?'red':(marketMobileFebContents.kpi2 > '11.6' && marketMobileFebContents.kpi2 <= '15.46666667')?'orange':(marketMobileFebContents.kpi2 > '15.46666667' && marketMobileFebContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileFebContents.kpi2 >= '19.33333333' && marketMobileFebContents.kpi2 < '23.2')?'green':(marketMobileFebContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileFebContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileFebContents.kpi3 == null)?'grey-2':(marketMobileFebContents.kpi3 >= '0' && marketMobileFebContents.kpi3 <= '38.2')?'red':(marketMobileFebContents.kpi3 > '38.2' && marketMobileFebContents.kpi3 <= '50.93333333')?'orange':(marketMobileFebContents.kpi3 > '50.93333333' && marketMobileFebContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileFebContents.kpi3 >= '63.66666667' && marketMobileFebContents.kpi3 < '76.4')?'green':(marketMobileFebContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileFebContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileFebContents.kpi4 == null)?'grey-2':(marketMobileFebContents.kpi4 >= '0' && marketMobileFebContents.kpi4 <= '109.6')?'red':(marketMobileFebContents.kpi4 > '109.6' && marketMobileFebContents.kpi4 <= '146.1333333')?'orange':(marketMobileFebContents.kpi4 > '146.1333333' && marketMobileFebContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileFebContents.kpi4 >= '182.6666667' && marketMobileFebContents.kpi4 < '219.2')?'green':(marketMobileFebContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileFebContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileMarContents.kpi1 == null)?'grey-2':(marketMobileMarContents.kpi1 >= '0' && marketMobileMarContents.kpi1 <= '232.6')?'red':(marketMobileMarContents.kpi1 > '232.6' && marketMobileMarContents.kpi1 <= '310.1333333')?'orange':(marketMobileMarContents.kpi1 > '310.1333333' && marketMobileMarContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileMarContents.kpi1 >= '387.6666667' && marketMobileMarContents.kpi1 < '465.2')?'green':(marketMobileMarContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMarContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMarContents.kpi2 == null)?'grey-2':(marketMobileMarContents.kpi2 >= '0' && marketMobileMarContents.kpi2 <= '11.6')?'red':(marketMobileMarContents.kpi2 > '11.6' && marketMobileMarContents.kpi2 <= '15.46666667')?'orange':(marketMobileMarContents.kpi2 > '15.46666667' && marketMobileMarContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileMarContents.kpi2 >= '19.33333333' && marketMobileMarContents.kpi2 < '23.2')?'green':(marketMobileMarContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMarContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMarContents.kpi3 == null)?'grey-2':(marketMobileMarContents.kpi3 >= '0' && marketMobileMarContents.kpi3 <= '38.2')?'red':(marketMobileMarContents.kpi3 > '38.2' && marketMobileMarContents.kpi3 <= '50.93333333')?'orange':(marketMobileMarContents.kpi3 > '50.93333333' && marketMobileMarContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileMarContents.kpi3 >= '63.66666667' && marketMobileMarContents.kpi3 < '76.4')?'green':(marketMobileMarContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileMarContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMarContents.kpi4 == null)?'grey-2':(marketMobileMarContents.kpi4 >= '0' && marketMobileMarContents.kpi4 <= '109.6')?'red':(marketMobileMarContents.kpi4 > '109.6' && marketMobileMarContents.kpi4 <= '146.1333333')?'orange':(marketMobileMarContents.kpi4 > '146.1333333' && marketMobileMarContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileMarContents.kpi4 >= '182.6666667' && marketMobileMarContents.kpi4 < '219.2')?'green':(marketMobileMarContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMarContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileAprContents.kpi1 == null)?'grey-2':(marketMobileAprContents.kpi1 >= '0' && marketMobileAprContents.kpi1 <= '232.6')?'red':(marketMobileAprContents.kpi1 > '232.6' && marketMobileAprContents.kpi1 <= '310.1333333')?'orange':(marketMobileAprContents.kpi1 > '310.1333333' && marketMobileAprContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileAprContents.kpi1 >= '387.6666667' && marketMobileAprContents.kpi1 < '465.2')?'green':(marketMobileAprContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAprContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAprContents.kpi2 == null)?'grey-2':(marketMobileAprContents.kpi2 >= '0' && marketMobileAprContents.kpi2 <= '11.6')?'red':(marketMobileAprContents.kpi2 > '11.6' && marketMobileAprContents.kpi2 <= '15.46666667')?'orange':(marketMobileAprContents.kpi2 > '15.46666667' && marketMobileAprContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileAprContents.kpi2 >= '19.33333333' && marketMobileAprContents.kpi2 < '23.2')?'green':(marketMobileAprContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAprContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAprContents.kpi3 == null)?'grey-2':(marketMobileAprContents.kpi3 >= '0' && marketMobileAprContents.kpi3 <= '38.2')?'red':(marketMobileAprContents.kpi3 > '38.2' && marketMobileAprContents.kpi3 <= '50.93333333')?'orange':(marketMobileAprContents.kpi3 > '50.93333333' && marketMobileAprContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileAprContents.kpi3 >= '63.66666667' && marketMobileAprContents.kpi3 < '76.4')?'green':(marketMobileAprContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileAprContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAprContents.kpi4 == null)?'grey-2':(marketMobileAprContents.kpi4 >= '0' && marketMobileAprContents.kpi4 <= '109.6')?'red':(marketMobileAprContents.kpi4 > '109.6' && marketMobileAprContents.kpi4 <= '146.1333333')?'orange':(marketMobileAprContents.kpi4 > '146.1333333' && marketMobileAprContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileAprContents.kpi4 >= '182.6666667' && marketMobileAprContents.kpi4 < '219.2')?'green':(marketMobileAprContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAprContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileMayContents.kpi1 == null)?'grey-2':(marketMobileMayContents.kpi1 >= '0' && marketMobileMayContents.kpi1 <= '232.6')?'red':(marketMobileMayContents.kpi1 > '232.6' && marketMobileMayContents.kpi1 <= '310.1333333')?'orange':(marketMobileMayContents.kpi1 > '310.1333333' && marketMobileMayContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileMayContents.kpi1 >= '387.6666667' && marketMobileMayContents.kpi1 < '465.2')?'green':(marketMobileMayContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMayContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMayContents.kpi2 == null)?'grey-2':(marketMobileMayContents.kpi2 >= '0' && marketMobileMayContents.kpi2 <= '11.6')?'red':(marketMobileMayContents.kpi2 > '11.6' && marketMobileMayContents.kpi2 <= '15.46666667')?'orange':(marketMobileMayContents.kpi2 > '15.46666667' && marketMobileMayContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileMayContents.kpi2 >= '19.33333333' && marketMobileMayContents.kpi2 < '23.2')?'green':(marketMobileMayContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMayContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMayContents.kpi3 == null)?'grey-2':(marketMobileMayContents.kpi3 >= '0' && marketMobileMayContents.kpi3 <= '38.2')?'red':(marketMobileMayContents.kpi3 > '38.2' && marketMobileMayContents.kpi3 <= '50.93333333')?'orange':(marketMobileMayContents.kpi3 > '50.93333333' && marketMobileMayContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileMayContents.kpi3 >= '63.66666667' && marketMobileMayContents.kpi3 < '76.4')?'green':(marketMobileMayContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileMayContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMayContents.kpi4 == null)?'grey-2':(marketMobileMayContents.kpi4 >= '0' && marketMobileMayContents.kpi4 <= '109.6')?'red':(marketMobileMayContents.kpi4 > '109.6' && marketMobileMayContents.kpi4 <= '146.1333333')?'orange':(marketMobileMayContents.kpi4 > '146.1333333' && marketMobileMayContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileMayContents.kpi4 >= '182.6666667' && marketMobileMayContents.kpi4 < '219.2')?'green':(marketMobileMayContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMayContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileJunContents.kpi1 == null)?'grey-2':(marketMobileJunContents.kpi1 >= '0' && marketMobileJunContents.kpi1 <= '232.6')?'red':(marketMobileJunContents.kpi1 > '232.6' && marketMobileJunContents.kpi1 <= '310.1333333')?'orange':(marketMobileJunContents.kpi1 > '310.1333333' && marketMobileJunContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileJunContents.kpi1 >= '387.6666667' && marketMobileJunContents.kpi1 < '465.2')?'green':(marketMobileJunContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJunContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJunContents.kpi2 == null)?'grey-2':(marketMobileJunContents.kpi2 >= '0' && marketMobileJunContents.kpi2 <= '11.6')?'red':(marketMobileJunContents.kpi2 > '11.6' && marketMobileJunContents.kpi2 <= '15.46666667')?'orange':(marketMobileJunContents.kpi2 > '15.46666667' && marketMobileJunContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileJunContents.kpi2 >= '19.33333333' && marketMobileJunContents.kpi2 < '23.2')?'green':(marketMobileJunContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJunContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJunContents.kpi3 == null)?'grey-2':(marketMobileJunContents.kpi3 >= '0' && marketMobileJunContents.kpi3 <= '38.2')?'red':(marketMobileJunContents.kpi3 > '38.2' && marketMobileJunContents.kpi3 <= '50.93333333')?'orange':(marketMobileJunContents.kpi3 > '50.93333333' && marketMobileJunContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileJunContents.kpi3 >= '63.66666667' && marketMobileJunContents.kpi3 < '76.4')?'green':(marketMobileJunContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileJunContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJunContents.kpi4 == null)?'grey-2':(marketMobileJunContents.kpi4 >= '0' && marketMobileJunContents.kpi4 <= '109.6')?'red':(marketMobileJunContents.kpi4 > '109.6' && marketMobileJunContents.kpi4 <= '146.1333333')?'orange':(marketMobileJunContents.kpi4 > '146.1333333' && marketMobileJunContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileJunContents.kpi4 >= '182.6666667' && marketMobileJunContents.kpi4 < '219.2')?'green':(marketMobileJunContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJunContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileJulContents.kpi1 == null)?'grey-2':(marketMobileJulContents.kpi1 >= '0' && marketMobileJulContents.kpi1 <= '232.6')?'red':(marketMobileJulContents.kpi1 > '232.6' && marketMobileJulContents.kpi1 <= '310.1333333')?'orange':(marketMobileJulContents.kpi1 > '310.1333333' && marketMobileJulContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileJulContents.kpi1 >= '387.6666667' && marketMobileJulContents.kpi1 < '465.2')?'green':(marketMobileJulContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJulContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJulContents.kpi2 == null)?'grey-2':(marketMobileJulContents.kpi2 >= '0' && marketMobileJulContents.kpi2 <= '11.6')?'red':(marketMobileJulContents.kpi2 > '11.6' && marketMobileJulContents.kpi2 <= '15.46666667')?'orange':(marketMobileJulContents.kpi2 > '15.46666667' && marketMobileJulContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileJulContents.kpi2 >= '19.33333333' && marketMobileJulContents.kpi2 < '23.2')?'green':(marketMobileJulContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJulContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJulContents.kpi3 == null)?'grey-2':(marketMobileJulContents.kpi3 >= '0' && marketMobileJulContents.kpi3 <= '38.2')?'red':(marketMobileJulContents.kpi3 > '38.2' && marketMobileJulContents.kpi3 <= '50.93333333')?'orange':(marketMobileJulContents.kpi3 > '50.93333333' && marketMobileJulContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileJulContents.kpi3 >= '63.66666667' && marketMobileJulContents.kpi3 < '76.4')?'green':(marketMobileJulContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileJulContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJulContents.kpi4 == null)?'grey-2':(marketMobileJulContents.kpi4 >= '0' && marketMobileJulContents.kpi4 <= '109.6')?'red':(marketMobileJulContents.kpi4 > '109.6' && marketMobileJulContents.kpi4 <= '146.1333333')?'orange':(marketMobileJulContents.kpi4 > '146.1333333' && marketMobileJulContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileJulContents.kpi4 >= '182.6666667' && marketMobileJulContents.kpi4 < '219.2')?'green':(marketMobileJulContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJulContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileAugContents.kpi1 == null)?'grey-2':(marketMobileAugContents.kpi1 >= '0' && marketMobileAugContents.kpi1 <= '232.6')?'red':(marketMobileAugContents.kpi1 > '232.6' && marketMobileAugContents.kpi1 <= '310.1333333')?'orange':(marketMobileAugContents.kpi1 > '310.1333333' && marketMobileAugContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileAugContents.kpi1 >= '387.6666667' && marketMobileAugContents.kpi1 < '465.2')?'green':(marketMobileAugContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAugContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAugContents.kpi2 == null)?'grey-2':(marketMobileAugContents.kpi2 >= '0' && marketMobileAugContents.kpi2 <= '11.6')?'red':(marketMobileAugContents.kpi2 > '11.6' && marketMobileAugContents.kpi2 <= '15.46666667')?'orange':(marketMobileAugContents.kpi2 > '15.46666667' && marketMobileAugContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileAugContents.kpi2 >= '19.33333333' && marketMobileAugContents.kpi2 < '23.2')?'green':(marketMobileAugContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAugContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAugContents.kpi3 == null)?'grey-2':(marketMobileAugContents.kpi3 >= '0' && marketMobileAugContents.kpi3 <= '38.2')?'red':(marketMobileAugContents.kpi3 > '38.2' && marketMobileAugContents.kpi3 <= '50.93333333')?'orange':(marketMobileAugContents.kpi3 > '50.93333333' && marketMobileAugContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileAugContents.kpi3 >= '63.66666667' && marketMobileAugContents.kpi3 < '76.4')?'green':(marketMobileAugContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileAugContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAugContents.kpi4 == null)?'grey-2':(marketMobileAugContents.kpi4 >= '0' && marketMobileAugContents.kpi4 <= '109.6')?'red':(marketMobileAugContents.kpi4 > '109.6' && marketMobileAugContents.kpi4 <= '146.1333333')?'orange':(marketMobileAugContents.kpi4 > '146.1333333' && marketMobileAugContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileAugContents.kpi4 >= '182.6666667' && marketMobileAugContents.kpi4 < '219.2')?'green':(marketMobileAugContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAugContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileSepContents.kpi1 == null)?'grey-2':(marketMobileSepContents.kpi1 >= '0' && marketMobileSepContents.kpi1 <= '232.6')?'red':(marketMobileSepContents.kpi1 > '232.6' && marketMobileSepContents.kpi1 <= '310.1333333')?'orange':(marketMobileSepContents.kpi1 > '310.1333333' && marketMobileSepContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileSepContents.kpi1 >= '387.6666667' && marketMobileSepContents.kpi1 < '465.2')?'green':(marketMobileSepContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileSepContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileSepContents.kpi2 == null)?'grey-2':(marketMobileSepContents.kpi2 >= '0' && marketMobileSepContents.kpi2 <= '11.6')?'red':(marketMobileSepContents.kpi2 > '11.6' && marketMobileSepContents.kpi2 <= '15.46666667')?'orange':(marketMobileSepContents.kpi2 > '15.46666667' && marketMobileSepContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileSepContents.kpi2 >= '19.33333333' && marketMobileSepContents.kpi2 < '23.2')?'green':(marketMobileSepContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileSepContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileSepContents.kpi3 == null)?'grey-2':(marketMobileSepContents.kpi3 >= '0' && marketMobileSepContents.kpi3 <= '38.2')?'red':(marketMobileSepContents.kpi3 > '38.2' && marketMobileSepContents.kpi3 <= '50.93333333')?'orange':(marketMobileSepContents.kpi3 > '50.93333333' && marketMobileSepContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileSepContents.kpi3 >= '63.66666667' && marketMobileSepContents.kpi3 < '76.4')?'green':(marketMobileSepContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileSepContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileSepContents.kpi4 == null)?'grey-2':(marketMobileSepContents.kpi4 >= '0' && marketMobileSepContents.kpi4 <= '109.6')?'red':(marketMobileSepContents.kpi4 > '109.6' && marketMobileSepContents.kpi4 <= '146.1333333')?'orange':(marketMobileSepContents.kpi4 > '146.1333333' && marketMobileSepContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileSepContents.kpi4 >= '182.6666667' && marketMobileSepContents.kpi4 < '219.2')?'green':(marketMobileSepContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileSepContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileOctContents.kpi1 == null)?'grey-2':(marketMobileOctContents.kpi1 >= '0' && marketMobileOctContents.kpi1 <= '232.6')?'red':(marketMobileOctContents.kpi1 > '232.6' && marketMobileOctContents.kpi1 <= '310.1333333')?'orange':(marketMobileOctContents.kpi1 > '310.1333333' && marketMobileOctContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileOctContents.kpi1 >= '387.6666667' && marketMobileOctContents.kpi1 < '465.2')?'green':(marketMobileOctContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileOctContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileOctContents.kpi2 == null)?'grey-2':(marketMobileOctContents.kpi2 >= '0' && marketMobileOctContents.kpi2 <= '11.6')?'red':(marketMobileOctContents.kpi2 > '11.6' && marketMobileOctContents.kpi2 <= '15.46666667')?'orange':(marketMobileOctContents.kpi2 > '15.46666667' && marketMobileOctContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileOctContents.kpi2 >= '19.33333333' && marketMobileOctContents.kpi2 < '23.2')?'green':(marketMobileOctContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileOctContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileOctContents.kpi3 == null)?'grey-2':(marketMobileOctContents.kpi3 >= '0' && marketMobileOctContents.kpi3 <= '38.2')?'red':(marketMobileOctContents.kpi3 > '38.2' && marketMobileOctContents.kpi3 <= '50.93333333')?'orange':(marketMobileOctContents.kpi3 > '50.93333333' && marketMobileOctContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileOctContents.kpi3 >= '63.66666667' && marketMobileOctContents.kpi3 < '76.4')?'green':(marketMobileOctContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileOctContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileOctContents.kpi4 == null)?'grey-2':(marketMobileOctContents.kpi4 >= '0' && marketMobileOctContents.kpi4 <= '109.6')?'red':(marketMobileOctContents.kpi4 > '109.6' && marketMobileOctContents.kpi4 <= '146.1333333')?'orange':(marketMobileOctContents.kpi4 > '146.1333333' && marketMobileOctContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileOctContents.kpi4 >= '182.6666667' && marketMobileOctContents.kpi4 < '219.2')?'green':(marketMobileOctContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileOctContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileNovContents.kpi1 == null)?'grey-2':(marketMobileNovContents.kpi1 >= '0' && marketMobileNovContents.kpi1 <= '232.6')?'red':(marketMobileNovContents.kpi1 > '232.6' && marketMobileNovContents.kpi1 <= '310.1333333')?'orange':(marketMobileNovContents.kpi1 > '310.1333333' && marketMobileNovContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileNovContents.kpi1 >= '387.6666667' && marketMobileNovContents.kpi1 < '465.2')?'green':(marketMobileNovContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileNovContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileNovContents.kpi2 == null)?'grey-2':(marketMobileNovContents.kpi2 >= '0' && marketMobileNovContents.kpi2 <= '11.6')?'red':(marketMobileNovContents.kpi2 > '11.6' && marketMobileNovContents.kpi2 <= '15.46666667')?'orange':(marketMobileNovContents.kpi2 > '15.46666667' && marketMobileNovContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileNovContents.kpi2 >= '19.33333333' && marketMobileNovContents.kpi2 < '23.2')?'green':(marketMobileNovContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileNovContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileNovContents.kpi3 == null)?'grey-2':(marketMobileNovContents.kpi3 >= '0' && marketMobileNovContents.kpi3 <= '38.2')?'red':(marketMobileNovContents.kpi3 > '38.2' && marketMobileNovContents.kpi3 <= '50.93333333')?'orange':(marketMobileNovContents.kpi3 > '50.93333333' && marketMobileNovContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileNovContents.kpi3 >= '63.66666667' && marketMobileNovContents.kpi3 < '76.4')?'green':(marketMobileNovContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileNovContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileNovContents.kpi4 == null)?'grey-2':(marketMobileNovContents.kpi4 >= '0' && marketMobileNovContents.kpi4 <= '109.6')?'red':(marketMobileNovContents.kpi4 > '109.6' && marketMobileNovContents.kpi4 <= '146.1333333')?'orange':(marketMobileNovContents.kpi4 > '146.1333333' && marketMobileNovContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileNovContents.kpi4 >= '182.6666667' && marketMobileNovContents.kpi4 < '219.2')?'green':(marketMobileNovContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileNovContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileDecContents.kpi1 == null)?'grey-2':(marketMobileDecContents.kpi1 >= '0' && marketMobileDecContents.kpi1 <= '232.6')?'red':(marketMobileDecContents.kpi1 > '232.6' && marketMobileDecContents.kpi1 <= '310.1333333')?'orange':(marketMobileDecContents.kpi1 > '310.1333333' && marketMobileDecContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileDecContents.kpi1 >= '387.6666667' && marketMobileDecContents.kpi1 < '465.2')?'green':(marketMobileDecContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileDecContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileDecContents.kpi2 == null)?'grey-2':(marketMobileDecContents.kpi2 >= '0' && marketMobileDecContents.kpi2 <= '11.6')?'red':(marketMobileDecContents.kpi2 > '11.6' && marketMobileDecContents.kpi2 <= '15.46666667')?'orange':(marketMobileDecContents.kpi2 > '15.46666667' && marketMobileDecContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileDecContents.kpi2 >= '19.33333333' && marketMobileDecContents.kpi2 < '23.2')?'green':(marketMobileDecContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileDecContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileDecContents.kpi3 == null)?'grey-2':(marketMobileDecContents.kpi3 >= '0' && marketMobileDecContents.kpi3 <= '38.2')?'red':(marketMobileDecContents.kpi3 > '38.2' && marketMobileDecContents.kpi3 <= '50.93333333')?'orange':(marketMobileDecContents.kpi3 > '50.93333333' && marketMobileDecContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileDecContents.kpi3 >= '63.66666667' && marketMobileDecContents.kpi3 < '76.4')?'green':(marketMobileDecContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileDecContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileDecContents.kpi4 == null)?'grey-2':(marketMobileDecContents.kpi4 >= '0' && marketMobileDecContents.kpi4 <= '109.6')?'red':(marketMobileDecContents.kpi4 > '109.6' && marketMobileDecContents.kpi4 <= '146.1333333')?'orange':(marketMobileDecContents.kpi4 > '146.1333333' && marketMobileDecContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileDecContents.kpi4 >= '182.6666667' && marketMobileDecContents.kpi4 < '219.2')?'green':(marketMobileDecContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileDecContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                                <q-tooltip># total contact</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip>Activities (#)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of pick-up contacts</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileJanContents.kpi1 == null)?'grey-2':(marketMobileJanContents.kpi1 >= '0' && marketMobileJanContents.kpi1 <= '232.6')?'red':(marketMobileJanContents.kpi1 > '232.6' && marketMobileJanContents.kpi1 <= '310.1333333')?'orange':(marketMobileJanContents.kpi1 > '310.1333333' && marketMobileJanContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileJanContents.kpi1 >= '387.6666667' && marketMobileJanContents.kpi1 < '465.2')?'green':(marketMobileJanContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJanContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJanContents.kpi2 == null)?'grey-2':(marketMobileJanContents.kpi2 >= '0' && marketMobileJanContents.kpi2 <= '11.6')?'red':(marketMobileJanContents.kpi2 > '11.6' && marketMobileJanContents.kpi2 <= '15.46666667')?'orange':(marketMobileJanContents.kpi2 > '15.46666667' && marketMobileJanContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileJanContents.kpi2 >= '19.33333333' && marketMobileJanContents.kpi2 < '23.2')?'green':(marketMobileJanContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJanContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJanContents.kpi3 == null)?'grey-2':(marketMobileJanContents.kpi3 >= '0' && marketMobileJanContents.kpi3 <= '38.2')?'red':(marketMobileJanContents.kpi3 > '38.2' && marketMobileJanContents.kpi3 <= '50.93333333')?'orange':(marketMobileJanContents.kpi3 > '50.93333333' && marketMobileJanContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileJanContents.kpi3 >= '63.66666667' && marketMobileJanContents.kpi3 < '76.4')?'green':(marketMobileJanContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileJanContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJanContents.kpi4 == null)?'grey-2':(marketMobileJanContents.kpi4 >= '0' && marketMobileJanContents.kpi4 <= '109.6')?'red':(marketMobileJanContents.kpi4 > '109.6' && marketMobileJanContents.kpi4 <= '146.1333333')?'orange':(marketMobileJanContents.kpi4 > '146.1333333' && marketMobileJanContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileJanContents.kpi4 >= '182.6666667' && marketMobileJanContents.kpi4 < '219.2')?'green':(marketMobileJanContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJanContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileFebContents.kpi1 == null)?'grey-2':(marketMobileFebContents.kpi1 >= '0' && marketMobileFebContents.kpi1 <= '232.6')?'red':(marketMobileFebContents.kpi1 > '232.6' && marketMobileFebContents.kpi1 <= '310.1333333')?'orange':(marketMobileFebContents.kpi1 > '310.1333333' && marketMobileFebContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileFebContents.kpi1 >= '387.6666667' && marketMobileFebContents.kpi1 < '465.2')?'green':(marketMobileFebContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileFebContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileFebContents.kpi2 == null)?'grey-2':(marketMobileFebContents.kpi2 >= '0' && marketMobileFebContents.kpi2 <= '11.6')?'red':(marketMobileFebContents.kpi2 > '11.6' && marketMobileFebContents.kpi2 <= '15.46666667')?'orange':(marketMobileFebContents.kpi2 > '15.46666667' && marketMobileFebContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileFebContents.kpi2 >= '19.33333333' && marketMobileFebContents.kpi2 < '23.2')?'green':(marketMobileFebContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileFebContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileFebContents.kpi3 == null)?'grey-2':(marketMobileFebContents.kpi3 >= '0' && marketMobileFebContents.kpi3 <= '38.2')?'red':(marketMobileFebContents.kpi3 > '38.2' && marketMobileFebContents.kpi3 <= '50.93333333')?'orange':(marketMobileFebContents.kpi3 > '50.93333333' && marketMobileFebContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileFebContents.kpi3 >= '63.66666667' && marketMobileFebContents.kpi3 < '76.4')?'green':(marketMobileFebContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileFebContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileFebContents.kpi4 == null)?'grey-2':(marketMobileFebContents.kpi4 >= '0' && marketMobileFebContents.kpi4 <= '109.6')?'red':(marketMobileFebContents.kpi4 > '109.6' && marketMobileFebContents.kpi4 <= '146.1333333')?'orange':(marketMobileFebContents.kpi4 > '146.1333333' && marketMobileFebContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileFebContents.kpi4 >= '182.6666667' && marketMobileFebContents.kpi4 < '219.2')?'green':(marketMobileFebContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileFebContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileMarContents.kpi1 == null)?'grey-2':(marketMobileMarContents.kpi1 >= '0' && marketMobileMarContents.kpi1 <= '232.6')?'red':(marketMobileMarContents.kpi1 > '232.6' && marketMobileMarContents.kpi1 <= '310.1333333')?'orange':(marketMobileMarContents.kpi1 > '310.1333333' && marketMobileMarContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileMarContents.kpi1 >= '387.6666667' && marketMobileMarContents.kpi1 < '465.2')?'green':(marketMobileMarContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMarContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMarContents.kpi2 == null)?'grey-2':(marketMobileMarContents.kpi2 >= '0' && marketMobileMarContents.kpi2 <= '11.6')?'red':(marketMobileMarContents.kpi2 > '11.6' && marketMobileMarContents.kpi2 <= '15.46666667')?'orange':(marketMobileMarContents.kpi2 > '15.46666667' && marketMobileMarContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileMarContents.kpi2 >= '19.33333333' && marketMobileMarContents.kpi2 < '23.2')?'green':(marketMobileMarContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMarContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMarContents.kpi3 == null)?'grey-2':(marketMobileMarContents.kpi3 >= '0' && marketMobileMarContents.kpi3 <= '38.2')?'red':(marketMobileMarContents.kpi3 > '38.2' && marketMobileMarContents.kpi3 <= '50.93333333')?'orange':(marketMobileMarContents.kpi3 > '50.93333333' && marketMobileMarContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileMarContents.kpi3 >= '63.66666667' && marketMobileMarContents.kpi3 < '76.4')?'green':(marketMobileMarContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileMarContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMarContents.kpi4 == null)?'grey-2':(marketMobileMarContents.kpi4 >= '0' && marketMobileMarContents.kpi4 <= '109.6')?'red':(marketMobileMarContents.kpi4 > '109.6' && marketMobileMarContents.kpi4 <= '146.1333333')?'orange':(marketMobileMarContents.kpi4 > '146.1333333' && marketMobileMarContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileMarContents.kpi4 >= '182.6666667' && marketMobileMarContents.kpi4 < '219.2')?'green':(marketMobileMarContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMarContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileAprContents.kpi1 == null)?'grey-2':(marketMobileAprContents.kpi1 >= '0' && marketMobileAprContents.kpi1 <= '232.6')?'red':(marketMobileAprContents.kpi1 > '232.6' && marketMobileAprContents.kpi1 <= '310.1333333')?'orange':(marketMobileAprContents.kpi1 > '310.1333333' && marketMobileAprContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileAprContents.kpi1 >= '387.6666667' && marketMobileAprContents.kpi1 < '465.2')?'green':(marketMobileAprContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAprContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAprContents.kpi2 == null)?'grey-2':(marketMobileAprContents.kpi2 >= '0' && marketMobileAprContents.kpi2 <= '11.6')?'red':(marketMobileAprContents.kpi2 > '11.6' && marketMobileAprContents.kpi2 <= '15.46666667')?'orange':(marketMobileAprContents.kpi2 > '15.46666667' && marketMobileAprContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileAprContents.kpi2 >= '19.33333333' && marketMobileAprContents.kpi2 < '23.2')?'green':(marketMobileAprContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAprContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAprContents.kpi3 == null)?'grey-2':(marketMobileAprContents.kpi3 >= '0' && marketMobileAprContents.kpi3 <= '38.2')?'red':(marketMobileAprContents.kpi3 > '38.2' && marketMobileAprContents.kpi3 <= '50.93333333')?'orange':(marketMobileAprContents.kpi3 > '50.93333333' && marketMobileAprContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileAprContents.kpi3 >= '63.66666667' && marketMobileAprContents.kpi3 < '76.4')?'green':(marketMobileAprContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileAprContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAprContents.kpi4 == null)?'grey-2':(marketMobileAprContents.kpi4 >= '0' && marketMobileAprContents.kpi4 <= '109.6')?'red':(marketMobileAprContents.kpi4 > '109.6' && marketMobileAprContents.kpi4 <= '146.1333333')?'orange':(marketMobileAprContents.kpi4 > '146.1333333' && marketMobileAprContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileAprContents.kpi4 >= '182.6666667' && marketMobileAprContents.kpi4 < '219.2')?'green':(marketMobileAprContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAprContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileMayContents.kpi1 == null)?'grey-2':(marketMobileMayContents.kpi1 >= '0' && marketMobileMayContents.kpi1 <= '232.6')?'red':(marketMobileMayContents.kpi1 > '232.6' && marketMobileMayContents.kpi1 <= '310.1333333')?'orange':(marketMobileMayContents.kpi1 > '310.1333333' && marketMobileMayContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileMayContents.kpi1 >= '387.6666667' && marketMobileMayContents.kpi1 < '465.2')?'green':(marketMobileMayContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMayContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMayContents.kpi2 == null)?'grey-2':(marketMobileMayContents.kpi2 >= '0' && marketMobileMayContents.kpi2 <= '11.6')?'red':(marketMobileMayContents.kpi2 > '11.6' && marketMobileMayContents.kpi2 <= '15.46666667')?'orange':(marketMobileMayContents.kpi2 > '15.46666667' && marketMobileMayContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileMayContents.kpi2 >= '19.33333333' && marketMobileMayContents.kpi2 < '23.2')?'green':(marketMobileMayContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMayContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMayContents.kpi3 == null)?'grey-2':(marketMobileMayContents.kpi3 >= '0' && marketMobileMayContents.kpi3 <= '38.2')?'red':(marketMobileMayContents.kpi3 > '38.2' && marketMobileMayContents.kpi3 <= '50.93333333')?'orange':(marketMobileMayContents.kpi3 > '50.93333333' && marketMobileMayContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileMayContents.kpi3 >= '63.66666667' && marketMobileMayContents.kpi3 < '76.4')?'green':(marketMobileMayContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileMayContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMayContents.kpi4 == null)?'grey-2':(marketMobileMayContents.kpi4 >= '0' && marketMobileMayContents.kpi4 <= '109.6')?'red':(marketMobileMayContents.kpi4 > '109.6' && marketMobileMayContents.kpi4 <= '146.1333333')?'orange':(marketMobileMayContents.kpi4 > '146.1333333' && marketMobileMayContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileMayContents.kpi4 >= '182.6666667' && marketMobileMayContents.kpi4 < '219.2')?'green':(marketMobileMayContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMayContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileJunContents.kpi1 == null)?'grey-2':(marketMobileJunContents.kpi1 >= '0' && marketMobileJunContents.kpi1 <= '232.6')?'red':(marketMobileJunContents.kpi1 > '232.6' && marketMobileJunContents.kpi1 <= '310.1333333')?'orange':(marketMobileJunContents.kpi1 > '310.1333333' && marketMobileJunContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileJunContents.kpi1 >= '387.6666667' && marketMobileJunContents.kpi1 < '465.2')?'green':(marketMobileJunContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJunContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJunContents.kpi2 == null)?'grey-2':(marketMobileJunContents.kpi2 >= '0' && marketMobileJunContents.kpi2 <= '11.6')?'red':(marketMobileJunContents.kpi2 > '11.6' && marketMobileJunContents.kpi2 <= '15.46666667')?'orange':(marketMobileJunContents.kpi2 > '15.46666667' && marketMobileJunContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileJunContents.kpi2 >= '19.33333333' && marketMobileJunContents.kpi2 < '23.2')?'green':(marketMobileJunContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJunContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJunContents.kpi3 == null)?'grey-2':(marketMobileJunContents.kpi3 >= '0' && marketMobileJunContents.kpi3 <= '38.2')?'red':(marketMobileJunContents.kpi3 > '38.2' && marketMobileJunContents.kpi3 <= '50.93333333')?'orange':(marketMobileJunContents.kpi3 > '50.93333333' && marketMobileJunContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileJunContents.kpi3 >= '63.66666667' && marketMobileJunContents.kpi3 < '76.4')?'green':(marketMobileJunContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileJunContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJunContents.kpi4 == null)?'grey-2':(marketMobileJunContents.kpi4 >= '0' && marketMobileJunContents.kpi4 <= '109.6')?'red':(marketMobileJunContents.kpi4 > '109.6' && marketMobileJunContents.kpi4 <= '146.1333333')?'orange':(marketMobileJunContents.kpi4 > '146.1333333' && marketMobileJunContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileJunContents.kpi4 >= '182.6666667' && marketMobileJunContents.kpi4 < '219.2')?'green':(marketMobileJunContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJunContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileJulContents.kpi1 == null)?'grey-2':(marketMobileJulContents.kpi1 >= '0' && marketMobileJulContents.kpi1 <= '232.6')?'red':(marketMobileJulContents.kpi1 > '232.6' && marketMobileJulContents.kpi1 <= '310.1333333')?'orange':(marketMobileJulContents.kpi1 > '310.1333333' && marketMobileJulContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileJulContents.kpi1 >= '387.6666667' && marketMobileJulContents.kpi1 < '465.2')?'green':(marketMobileJulContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJulContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJulContents.kpi2 == null)?'grey-2':(marketMobileJulContents.kpi2 >= '0' && marketMobileJulContents.kpi2 <= '11.6')?'red':(marketMobileJulContents.kpi2 > '11.6' && marketMobileJulContents.kpi2 <= '15.46666667')?'orange':(marketMobileJulContents.kpi2 > '15.46666667' && marketMobileJulContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileJulContents.kpi2 >= '19.33333333' && marketMobileJulContents.kpi2 < '23.2')?'green':(marketMobileJulContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJulContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJulContents.kpi3 == null)?'grey-2':(marketMobileJulContents.kpi3 >= '0' && marketMobileJulContents.kpi3 <= '38.2')?'red':(marketMobileJulContents.kpi3 > '38.2' && marketMobileJulContents.kpi3 <= '50.93333333')?'orange':(marketMobileJulContents.kpi3 > '50.93333333' && marketMobileJulContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileJulContents.kpi3 >= '63.66666667' && marketMobileJulContents.kpi3 < '76.4')?'green':(marketMobileJulContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileJulContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJulContents.kpi4 == null)?'grey-2':(marketMobileJulContents.kpi4 >= '0' && marketMobileJulContents.kpi4 <= '109.6')?'red':(marketMobileJulContents.kpi4 > '109.6' && marketMobileJulContents.kpi4 <= '146.1333333')?'orange':(marketMobileJulContents.kpi4 > '146.1333333' && marketMobileJulContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileJulContents.kpi4 >= '182.6666667' && marketMobileJulContents.kpi4 < '219.2')?'green':(marketMobileJulContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJulContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileAugContents.kpi1 == null)?'grey-2':(marketMobileAugContents.kpi1 >= '0' && marketMobileAugContents.kpi1 <= '232.6')?'red':(marketMobileAugContents.kpi1 > '232.6' && marketMobileAugContents.kpi1 <= '310.1333333')?'orange':(marketMobileAugContents.kpi1 > '310.1333333' && marketMobileAugContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileAugContents.kpi1 >= '387.6666667' && marketMobileAugContents.kpi1 < '465.2')?'green':(marketMobileAugContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAugContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAugContents.kpi2 == null)?'grey-2':(marketMobileAugContents.kpi2 >= '0' && marketMobileAugContents.kpi2 <= '11.6')?'red':(marketMobileAugContents.kpi2 > '11.6' && marketMobileAugContents.kpi2 <= '15.46666667')?'orange':(marketMobileAugContents.kpi2 > '15.46666667' && marketMobileAugContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileAugContents.kpi2 >= '19.33333333' && marketMobileAugContents.kpi2 < '23.2')?'green':(marketMobileAugContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAugContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAugContents.kpi3 == null)?'grey-2':(marketMobileAugContents.kpi3 >= '0' && marketMobileAugContents.kpi3 <= '38.2')?'red':(marketMobileAugContents.kpi3 > '38.2' && marketMobileAugContents.kpi3 <= '50.93333333')?'orange':(marketMobileAugContents.kpi3 > '50.93333333' && marketMobileAugContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileAugContents.kpi3 >= '63.66666667' && marketMobileAugContents.kpi3 < '76.4')?'green':(marketMobileAugContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileAugContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAugContents.kpi4 == null)?'grey-2':(marketMobileAugContents.kpi4 >= '0' && marketMobileAugContents.kpi4 <= '109.6')?'red':(marketMobileAugContents.kpi4 > '109.6' && marketMobileAugContents.kpi4 <= '146.1333333')?'orange':(marketMobileAugContents.kpi4 > '146.1333333' && marketMobileAugContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileAugContents.kpi4 >= '182.6666667' && marketMobileAugContents.kpi4 < '219.2')?'green':(marketMobileAugContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAugContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileSepContents.kpi1 == null)?'grey-2':(marketMobileSepContents.kpi1 >= '0' && marketMobileSepContents.kpi1 <= '232.6')?'red':(marketMobileSepContents.kpi1 > '232.6' && marketMobileSepContents.kpi1 <= '310.1333333')?'orange':(marketMobileSepContents.kpi1 > '310.1333333' && marketMobileSepContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileSepContents.kpi1 >= '387.6666667' && marketMobileSepContents.kpi1 < '465.2')?'green':(marketMobileSepContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileSepContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileSepContents.kpi2 == null)?'grey-2':(marketMobileSepContents.kpi2 >= '0' && marketMobileSepContents.kpi2 <= '11.6')?'red':(marketMobileSepContents.kpi2 > '11.6' && marketMobileSepContents.kpi2 <= '15.46666667')?'orange':(marketMobileSepContents.kpi2 > '15.46666667' && marketMobileSepContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileSepContents.kpi2 >= '19.33333333' && marketMobileSepContents.kpi2 < '23.2')?'green':(marketMobileSepContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileSepContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileSepContents.kpi3 == null)?'grey-2':(marketMobileSepContents.kpi3 >= '0' && marketMobileSepContents.kpi3 <= '38.2')?'red':(marketMobileSepContents.kpi3 > '38.2' && marketMobileSepContents.kpi3 <= '50.93333333')?'orange':(marketMobileSepContents.kpi3 > '50.93333333' && marketMobileSepContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileSepContents.kpi3 >= '63.66666667' && marketMobileSepContents.kpi3 < '76.4')?'green':(marketMobileSepContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileSepContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileSepContents.kpi4 == null)?'grey-2':(marketMobileSepContents.kpi4 >= '0' && marketMobileSepContents.kpi4 <= '109.6')?'red':(marketMobileSepContents.kpi4 > '109.6' && marketMobileSepContents.kpi4 <= '146.1333333')?'orange':(marketMobileSepContents.kpi4 > '146.1333333' && marketMobileSepContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileSepContents.kpi4 >= '182.6666667' && marketMobileSepContents.kpi4 < '219.2')?'green':(marketMobileSepContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileSepContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileOctContents.kpi1 == null)?'grey-2':(marketMobileOctContents.kpi1 >= '0' && marketMobileOctContents.kpi1 <= '232.6')?'red':(marketMobileOctContents.kpi1 > '232.6' && marketMobileOctContents.kpi1 <= '310.1333333')?'orange':(marketMobileOctContents.kpi1 > '310.1333333' && marketMobileOctContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileOctContents.kpi1 >= '387.6666667' && marketMobileOctContents.kpi1 < '465.2')?'green':(marketMobileOctContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileOctContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileOctContents.kpi2 == null)?'grey-2':(marketMobileOctContents.kpi2 >= '0' && marketMobileOctContents.kpi2 <= '11.6')?'red':(marketMobileOctContents.kpi2 > '11.6' && marketMobileOctContents.kpi2 <= '15.46666667')?'orange':(marketMobileOctContents.kpi2 > '15.46666667' && marketMobileOctContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileOctContents.kpi2 >= '19.33333333' && marketMobileOctContents.kpi2 < '23.2')?'green':(marketMobileOctContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileOctContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileOctContents.kpi3 == null)?'grey-2':(marketMobileOctContents.kpi3 >= '0' && marketMobileOctContents.kpi3 <= '38.2')?'red':(marketMobileOctContents.kpi3 > '38.2' && marketMobileOctContents.kpi3 <= '50.93333333')?'orange':(marketMobileOctContents.kpi3 > '50.93333333' && marketMobileOctContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileOctContents.kpi3 >= '63.66666667' && marketMobileOctContents.kpi3 < '76.4')?'green':(marketMobileOctContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileOctContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileOctContents.kpi4 == null)?'grey-2':(marketMobileOctContents.kpi4 >= '0' && marketMobileOctContents.kpi4 <= '109.6')?'red':(marketMobileOctContents.kpi4 > '109.6' && marketMobileOctContents.kpi4 <= '146.1333333')?'orange':(marketMobileOctContents.kpi4 > '146.1333333' && marketMobileOctContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileOctContents.kpi4 >= '182.6666667' && marketMobileOctContents.kpi4 < '219.2')?'green':(marketMobileOctContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileOctContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileNovContents.kpi1 == null)?'grey-2':(marketMobileNovContents.kpi1 >= '0' && marketMobileNovContents.kpi1 <= '232.6')?'red':(marketMobileNovContents.kpi1 > '232.6' && marketMobileNovContents.kpi1 <= '310.1333333')?'orange':(marketMobileNovContents.kpi1 > '310.1333333' && marketMobileNovContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileNovContents.kpi1 >= '387.6666667' && marketMobileNovContents.kpi1 < '465.2')?'green':(marketMobileNovContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileNovContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileNovContents.kpi2 == null)?'grey-2':(marketMobileNovContents.kpi2 >= '0' && marketMobileNovContents.kpi2 <= '11.6')?'red':(marketMobileNovContents.kpi2 > '11.6' && marketMobileNovContents.kpi2 <= '15.46666667')?'orange':(marketMobileNovContents.kpi2 > '15.46666667' && marketMobileNovContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileNovContents.kpi2 >= '19.33333333' && marketMobileNovContents.kpi2 < '23.2')?'green':(marketMobileNovContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileNovContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileNovContents.kpi3 == null)?'grey-2':(marketMobileNovContents.kpi3 >= '0' && marketMobileNovContents.kpi3 <= '38.2')?'red':(marketMobileNovContents.kpi3 > '38.2' && marketMobileNovContents.kpi3 <= '50.93333333')?'orange':(marketMobileNovContents.kpi3 > '50.93333333' && marketMobileNovContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileNovContents.kpi3 >= '63.66666667' && marketMobileNovContents.kpi3 < '76.4')?'green':(marketMobileNovContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileNovContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileNovContents.kpi4 == null)?'grey-2':(marketMobileNovContents.kpi4 >= '0' && marketMobileNovContents.kpi4 <= '109.6')?'red':(marketMobileNovContents.kpi4 > '109.6' && marketMobileNovContents.kpi4 <= '146.1333333')?'orange':(marketMobileNovContents.kpi4 > '146.1333333' && marketMobileNovContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileNovContents.kpi4 >= '182.6666667' && marketMobileNovContents.kpi4 < '219.2')?'green':(marketMobileNovContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileNovContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileDecContents.kpi1 == null)?'grey-2':(marketMobileDecContents.kpi1 >= '0' && marketMobileDecContents.kpi1 <= '232.6')?'red':(marketMobileDecContents.kpi1 > '232.6' && marketMobileDecContents.kpi1 <= '310.1333333')?'orange':(marketMobileDecContents.kpi1 > '310.1333333' && marketMobileDecContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileDecContents.kpi1 >= '387.6666667' && marketMobileDecContents.kpi1 < '465.2')?'green':(marketMobileDecContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileDecContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileDecContents.kpi2 == null)?'grey-2':(marketMobileDecContents.kpi2 >= '0' && marketMobileDecContents.kpi2 <= '11.6')?'red':(marketMobileDecContents.kpi2 > '11.6' && marketMobileDecContents.kpi2 <= '15.46666667')?'orange':(marketMobileDecContents.kpi2 > '15.46666667' && marketMobileDecContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileDecContents.kpi2 >= '19.33333333' && marketMobileDecContents.kpi2 < '23.2')?'green':(marketMobileDecContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileDecContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileDecContents.kpi3 == null)?'grey-2':(marketMobileDecContents.kpi3 >= '0' && marketMobileDecContents.kpi3 <= '38.2')?'red':(marketMobileDecContents.kpi3 > '38.2' && marketMobileDecContents.kpi3 <= '50.93333333')?'orange':(marketMobileDecContents.kpi3 > '50.93333333' && marketMobileDecContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileDecContents.kpi3 >= '63.66666667' && marketMobileDecContents.kpi3 < '76.4')?'green':(marketMobileDecContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileDecContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileDecContents.kpi4 == null)?'grey-2':(marketMobileDecContents.kpi4 >= '0' && marketMobileDecContents.kpi4 <= '109.6')?'red':(marketMobileDecContents.kpi4 > '109.6' && marketMobileDecContents.kpi4 <= '146.1333333')?'orange':(marketMobileDecContents.kpi4 > '146.1333333' && marketMobileDecContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileDecContents.kpi4 >= '182.6666667' && marketMobileDecContents.kpi4 < '219.2')?'green':(marketMobileDecContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileDecContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                                <q-tooltip># total contact</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip>Activities (#)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of pick-up contacts</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileJanContents.kpi1 == null)?'grey-2':(marketMobileJanContents.kpi1 >= '0' && marketMobileJanContents.kpi1 <= '232.6')?'red':(marketMobileJanContents.kpi1 > '232.6' && marketMobileJanContents.kpi1 <= '310.1333333')?'orange':(marketMobileJanContents.kpi1 > '310.1333333' && marketMobileJanContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileJanContents.kpi1 >= '387.6666667' && marketMobileJanContents.kpi1 < '465.2')?'green':(marketMobileJanContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJanContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJanContents.kpi2 == null)?'grey-2':(marketMobileJanContents.kpi2 >= '0' && marketMobileJanContents.kpi2 <= '11.6')?'red':(marketMobileJanContents.kpi2 > '11.6' && marketMobileJanContents.kpi2 <= '15.46666667')?'orange':(marketMobileJanContents.kpi2 > '15.46666667' && marketMobileJanContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileJanContents.kpi2 >= '19.33333333' && marketMobileJanContents.kpi2 < '23.2')?'green':(marketMobileJanContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJanContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJanContents.kpi3 == null)?'grey-2':(marketMobileJanContents.kpi3 >= '0' && marketMobileJanContents.kpi3 <= '38.2')?'red':(marketMobileJanContents.kpi3 > '38.2' && marketMobileJanContents.kpi3 <= '50.93333333')?'orange':(marketMobileJanContents.kpi3 > '50.93333333' && marketMobileJanContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileJanContents.kpi3 >= '63.66666667' && marketMobileJanContents.kpi3 < '76.4')?'green':(marketMobileJanContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileJanContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJanContents.kpi4 == null)?'grey-2':(marketMobileJanContents.kpi4 >= '0' && marketMobileJanContents.kpi4 <= '109.6')?'red':(marketMobileJanContents.kpi4 > '109.6' && marketMobileJanContents.kpi4 <= '146.1333333')?'orange':(marketMobileJanContents.kpi4 > '146.1333333' && marketMobileJanContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileJanContents.kpi4 >= '182.6666667' && marketMobileJanContents.kpi4 < '219.2')?'green':(marketMobileJanContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJanContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileFebContents.kpi1 == null)?'grey-2':(marketMobileFebContents.kpi1 >= '0' && marketMobileFebContents.kpi1 <= '232.6')?'red':(marketMobileFebContents.kpi1 > '232.6' && marketMobileFebContents.kpi1 <= '310.1333333')?'orange':(marketMobileFebContents.kpi1 > '310.1333333' && marketMobileFebContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileFebContents.kpi1 >= '387.6666667' && marketMobileFebContents.kpi1 < '465.2')?'green':(marketMobileFebContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileFebContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileFebContents.kpi2 == null)?'grey-2':(marketMobileFebContents.kpi2 >= '0' && marketMobileFebContents.kpi2 <= '11.6')?'red':(marketMobileFebContents.kpi2 > '11.6' && marketMobileFebContents.kpi2 <= '15.46666667')?'orange':(marketMobileFebContents.kpi2 > '15.46666667' && marketMobileFebContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileFebContents.kpi2 >= '19.33333333' && marketMobileFebContents.kpi2 < '23.2')?'green':(marketMobileFebContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileFebContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileFebContents.kpi3 == null)?'grey-2':(marketMobileFebContents.kpi3 >= '0' && marketMobileFebContents.kpi3 <= '38.2')?'red':(marketMobileFebContents.kpi3 > '38.2' && marketMobileFebContents.kpi3 <= '50.93333333')?'orange':(marketMobileFebContents.kpi3 > '50.93333333' && marketMobileFebContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileFebContents.kpi3 >= '63.66666667' && marketMobileFebContents.kpi3 < '76.4')?'green':(marketMobileFebContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileFebContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileFebContents.kpi4 == null)?'grey-2':(marketMobileFebContents.kpi4 >= '0' && marketMobileFebContents.kpi4 <= '109.6')?'red':(marketMobileFebContents.kpi4 > '109.6' && marketMobileFebContents.kpi4 <= '146.1333333')?'orange':(marketMobileFebContents.kpi4 > '146.1333333' && marketMobileFebContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileFebContents.kpi4 >= '182.6666667' && marketMobileFebContents.kpi4 < '219.2')?'green':(marketMobileFebContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileFebContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileMarContents.kpi1 == null)?'grey-2':(marketMobileMarContents.kpi1 >= '0' && marketMobileMarContents.kpi1 <= '232.6')?'red':(marketMobileMarContents.kpi1 > '232.6' && marketMobileMarContents.kpi1 <= '310.1333333')?'orange':(marketMobileMarContents.kpi1 > '310.1333333' && marketMobileMarContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileMarContents.kpi1 >= '387.6666667' && marketMobileMarContents.kpi1 < '465.2')?'green':(marketMobileMarContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMarContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMarContents.kpi2 == null)?'grey-2':(marketMobileMarContents.kpi2 >= '0' && marketMobileMarContents.kpi2 <= '11.6')?'red':(marketMobileMarContents.kpi2 > '11.6' && marketMobileMarContents.kpi2 <= '15.46666667')?'orange':(marketMobileMarContents.kpi2 > '15.46666667' && marketMobileMarContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileMarContents.kpi2 >= '19.33333333' && marketMobileMarContents.kpi2 < '23.2')?'green':(marketMobileMarContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMarContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMarContents.kpi3 == null)?'grey-2':(marketMobileMarContents.kpi3 >= '0' && marketMobileMarContents.kpi3 <= '38.2')?'red':(marketMobileMarContents.kpi3 > '38.2' && marketMobileMarContents.kpi3 <= '50.93333333')?'orange':(marketMobileMarContents.kpi3 > '50.93333333' && marketMobileMarContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileMarContents.kpi3 >= '63.66666667' && marketMobileMarContents.kpi3 < '76.4')?'green':(marketMobileMarContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileMarContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMarContents.kpi4 == null)?'grey-2':(marketMobileMarContents.kpi4 >= '0' && marketMobileMarContents.kpi4 <= '109.6')?'red':(marketMobileMarContents.kpi4 > '109.6' && marketMobileMarContents.kpi4 <= '146.1333333')?'orange':(marketMobileMarContents.kpi4 > '146.1333333' && marketMobileMarContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileMarContents.kpi4 >= '182.6666667' && marketMobileMarContents.kpi4 < '219.2')?'green':(marketMobileMarContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMarContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileAprContents.kpi1 == null)?'grey-2':(marketMobileAprContents.kpi1 >= '0' && marketMobileAprContents.kpi1 <= '232.6')?'red':(marketMobileAprContents.kpi1 > '232.6' && marketMobileAprContents.kpi1 <= '310.1333333')?'orange':(marketMobileAprContents.kpi1 > '310.1333333' && marketMobileAprContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileAprContents.kpi1 >= '387.6666667' && marketMobileAprContents.kpi1 < '465.2')?'green':(marketMobileAprContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAprContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAprContents.kpi2 == null)?'grey-2':(marketMobileAprContents.kpi2 >= '0' && marketMobileAprContents.kpi2 <= '11.6')?'red':(marketMobileAprContents.kpi2 > '11.6' && marketMobileAprContents.kpi2 <= '15.46666667')?'orange':(marketMobileAprContents.kpi2 > '15.46666667' && marketMobileAprContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileAprContents.kpi2 >= '19.33333333' && marketMobileAprContents.kpi2 < '23.2')?'green':(marketMobileAprContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAprContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAprContents.kpi3 == null)?'grey-2':(marketMobileAprContents.kpi3 >= '0' && marketMobileAprContents.kpi3 <= '38.2')?'red':(marketMobileAprContents.kpi3 > '38.2' && marketMobileAprContents.kpi3 <= '50.93333333')?'orange':(marketMobileAprContents.kpi3 > '50.93333333' && marketMobileAprContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileAprContents.kpi3 >= '63.66666667' && marketMobileAprContents.kpi3 < '76.4')?'green':(marketMobileAprContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileAprContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAprContents.kpi4 == null)?'grey-2':(marketMobileAprContents.kpi4 >= '0' && marketMobileAprContents.kpi4 <= '109.6')?'red':(marketMobileAprContents.kpi4 > '109.6' && marketMobileAprContents.kpi4 <= '146.1333333')?'orange':(marketMobileAprContents.kpi4 > '146.1333333' && marketMobileAprContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileAprContents.kpi4 >= '182.6666667' && marketMobileAprContents.kpi4 < '219.2')?'green':(marketMobileAprContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAprContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileMayContents.kpi1 == null)?'grey-2':(marketMobileMayContents.kpi1 >= '0' && marketMobileMayContents.kpi1 <= '232.6')?'red':(marketMobileMayContents.kpi1 > '232.6' && marketMobileMayContents.kpi1 <= '310.1333333')?'orange':(marketMobileMayContents.kpi1 > '310.1333333' && marketMobileMayContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileMayContents.kpi1 >= '387.6666667' && marketMobileMayContents.kpi1 < '465.2')?'green':(marketMobileMayContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMayContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMayContents.kpi2 == null)?'grey-2':(marketMobileMayContents.kpi2 >= '0' && marketMobileMayContents.kpi2 <= '11.6')?'red':(marketMobileMayContents.kpi2 > '11.6' && marketMobileMayContents.kpi2 <= '15.46666667')?'orange':(marketMobileMayContents.kpi2 > '15.46666667' && marketMobileMayContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileMayContents.kpi2 >= '19.33333333' && marketMobileMayContents.kpi2 < '23.2')?'green':(marketMobileMayContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMayContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMayContents.kpi3 == null)?'grey-2':(marketMobileMayContents.kpi3 >= '0' && marketMobileMayContents.kpi3 <= '38.2')?'red':(marketMobileMayContents.kpi3 > '38.2' && marketMobileMayContents.kpi3 <= '50.93333333')?'orange':(marketMobileMayContents.kpi3 > '50.93333333' && marketMobileMayContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileMayContents.kpi3 >= '63.66666667' && marketMobileMayContents.kpi3 < '76.4')?'green':(marketMobileMayContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileMayContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileMayContents.kpi4 == null)?'grey-2':(marketMobileMayContents.kpi4 >= '0' && marketMobileMayContents.kpi4 <= '109.6')?'red':(marketMobileMayContents.kpi4 > '109.6' && marketMobileMayContents.kpi4 <= '146.1333333')?'orange':(marketMobileMayContents.kpi4 > '146.1333333' && marketMobileMayContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileMayContents.kpi4 >= '182.6666667' && marketMobileMayContents.kpi4 < '219.2')?'green':(marketMobileMayContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileMayContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileJunContents.kpi1 == null)?'grey-2':(marketMobileJunContents.kpi1 >= '0' && marketMobileJunContents.kpi1 <= '232.6')?'red':(marketMobileJunContents.kpi1 > '232.6' && marketMobileJunContents.kpi1 <= '310.1333333')?'orange':(marketMobileJunContents.kpi1 > '310.1333333' && marketMobileJunContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileJunContents.kpi1 >= '387.6666667' && marketMobileJunContents.kpi1 < '465.2')?'green':(marketMobileJunContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJunContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJunContents.kpi2 == null)?'grey-2':(marketMobileJunContents.kpi2 >= '0' && marketMobileJunContents.kpi2 <= '11.6')?'red':(marketMobileJunContents.kpi2 > '11.6' && marketMobileJunContents.kpi2 <= '15.46666667')?'orange':(marketMobileJunContents.kpi2 > '15.46666667' && marketMobileJunContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileJunContents.kpi2 >= '19.33333333' && marketMobileJunContents.kpi2 < '23.2')?'green':(marketMobileJunContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJunContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJunContents.kpi3 == null)?'grey-2':(marketMobileJunContents.kpi3 >= '0' && marketMobileJunContents.kpi3 <= '38.2')?'red':(marketMobileJunContents.kpi3 > '38.2' && marketMobileJunContents.kpi3 <= '50.93333333')?'orange':(marketMobileJunContents.kpi3 > '50.93333333' && marketMobileJunContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileJunContents.kpi3 >= '63.66666667' && marketMobileJunContents.kpi3 < '76.4')?'green':(marketMobileJunContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileJunContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJunContents.kpi4 == null)?'grey-2':(marketMobileJunContents.kpi4 >= '0' && marketMobileJunContents.kpi4 <= '109.6')?'red':(marketMobileJunContents.kpi4 > '109.6' && marketMobileJunContents.kpi4 <= '146.1333333')?'orange':(marketMobileJunContents.kpi4 > '146.1333333' && marketMobileJunContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileJunContents.kpi4 >= '182.6666667' && marketMobileJunContents.kpi4 < '219.2')?'green':(marketMobileJunContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJunContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileJulContents.kpi1 == null)?'grey-2':(marketMobileJulContents.kpi1 >= '0' && marketMobileJulContents.kpi1 <= '232.6')?'red':(marketMobileJulContents.kpi1 > '232.6' && marketMobileJulContents.kpi1 <= '310.1333333')?'orange':(marketMobileJulContents.kpi1 > '310.1333333' && marketMobileJulContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileJulContents.kpi1 >= '387.6666667' && marketMobileJulContents.kpi1 < '465.2')?'green':(marketMobileJulContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJulContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJulContents.kpi2 == null)?'grey-2':(marketMobileJulContents.kpi2 >= '0' && marketMobileJulContents.kpi2 <= '11.6')?'red':(marketMobileJulContents.kpi2 > '11.6' && marketMobileJulContents.kpi2 <= '15.46666667')?'orange':(marketMobileJulContents.kpi2 > '15.46666667' && marketMobileJulContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileJulContents.kpi2 >= '19.33333333' && marketMobileJulContents.kpi2 < '23.2')?'green':(marketMobileJulContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJulContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJulContents.kpi3 == null)?'grey-2':(marketMobileJulContents.kpi3 >= '0' && marketMobileJulContents.kpi3 <= '38.2')?'red':(marketMobileJulContents.kpi3 > '38.2' && marketMobileJulContents.kpi3 <= '50.93333333')?'orange':(marketMobileJulContents.kpi3 > '50.93333333' && marketMobileJulContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileJulContents.kpi3 >= '63.66666667' && marketMobileJulContents.kpi3 < '76.4')?'green':(marketMobileJulContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileJulContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileJulContents.kpi4 == null)?'grey-2':(marketMobileJulContents.kpi4 >= '0' && marketMobileJulContents.kpi4 <= '109.6')?'red':(marketMobileJulContents.kpi4 > '109.6' && marketMobileJulContents.kpi4 <= '146.1333333')?'orange':(marketMobileJulContents.kpi4 > '146.1333333' && marketMobileJulContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileJulContents.kpi4 >= '182.6666667' && marketMobileJulContents.kpi4 < '219.2')?'green':(marketMobileJulContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileJulContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileAugContents.kpi1 == null)?'grey-2':(marketMobileAugContents.kpi1 >= '0' && marketMobileAugContents.kpi1 <= '232.6')?'red':(marketMobileAugContents.kpi1 > '232.6' && marketMobileAugContents.kpi1 <= '310.1333333')?'orange':(marketMobileAugContents.kpi1 > '310.1333333' && marketMobileAugContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileAugContents.kpi1 >= '387.6666667' && marketMobileAugContents.kpi1 < '465.2')?'green':(marketMobileAugContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAugContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAugContents.kpi2 == null)?'grey-2':(marketMobileAugContents.kpi2 >= '0' && marketMobileAugContents.kpi2 <= '11.6')?'red':(marketMobileAugContents.kpi2 > '11.6' && marketMobileAugContents.kpi2 <= '15.46666667')?'orange':(marketMobileAugContents.kpi2 > '15.46666667' && marketMobileAugContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileAugContents.kpi2 >= '19.33333333' && marketMobileAugContents.kpi2 < '23.2')?'green':(marketMobileAugContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAugContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAugContents.kpi3 == null)?'grey-2':(marketMobileAugContents.kpi3 >= '0' && marketMobileAugContents.kpi3 <= '38.2')?'red':(marketMobileAugContents.kpi3 > '38.2' && marketMobileAugContents.kpi3 <= '50.93333333')?'orange':(marketMobileAugContents.kpi3 > '50.93333333' && marketMobileAugContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileAugContents.kpi3 >= '63.66666667' && marketMobileAugContents.kpi3 < '76.4')?'green':(marketMobileAugContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileAugContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileAugContents.kpi4 == null)?'grey-2':(marketMobileAugContents.kpi4 >= '0' && marketMobileAugContents.kpi4 <= '109.6')?'red':(marketMobileAugContents.kpi4 > '109.6' && marketMobileAugContents.kpi4 <= '146.1333333')?'orange':(marketMobileAugContents.kpi4 > '146.1333333' && marketMobileAugContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileAugContents.kpi4 >= '182.6666667' && marketMobileAugContents.kpi4 < '219.2')?'green':(marketMobileAugContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileAugContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileSepContents.kpi1 == null)?'grey-2':(marketMobileSepContents.kpi1 >= '0' && marketMobileSepContents.kpi1 <= '232.6')?'red':(marketMobileSepContents.kpi1 > '232.6' && marketMobileSepContents.kpi1 <= '310.1333333')?'orange':(marketMobileSepContents.kpi1 > '310.1333333' && marketMobileSepContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileSepContents.kpi1 >= '387.6666667' && marketMobileSepContents.kpi1 < '465.2')?'green':(marketMobileSepContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileSepContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileSepContents.kpi2 == null)?'grey-2':(marketMobileSepContents.kpi2 >= '0' && marketMobileSepContents.kpi2 <= '11.6')?'red':(marketMobileSepContents.kpi2 > '11.6' && marketMobileSepContents.kpi2 <= '15.46666667')?'orange':(marketMobileSepContents.kpi2 > '15.46666667' && marketMobileSepContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileSepContents.kpi2 >= '19.33333333' && marketMobileSepContents.kpi2 < '23.2')?'green':(marketMobileSepContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileSepContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileSepContents.kpi3 == null)?'grey-2':(marketMobileSepContents.kpi3 >= '0' && marketMobileSepContents.kpi3 <= '38.2')?'red':(marketMobileSepContents.kpi3 > '38.2' && marketMobileSepContents.kpi3 <= '50.93333333')?'orange':(marketMobileSepContents.kpi3 > '50.93333333' && marketMobileSepContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileSepContents.kpi3 >= '63.66666667' && marketMobileSepContents.kpi3 < '76.4')?'green':(marketMobileSepContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileSepContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileSepContents.kpi4 == null)?'grey-2':(marketMobileSepContents.kpi4 >= '0' && marketMobileSepContents.kpi4 <= '109.6')?'red':(marketMobileSepContents.kpi4 > '109.6' && marketMobileSepContents.kpi4 <= '146.1333333')?'orange':(marketMobileSepContents.kpi4 > '146.1333333' && marketMobileSepContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileSepContents.kpi4 >= '182.6666667' && marketMobileSepContents.kpi4 < '219.2')?'green':(marketMobileSepContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileSepContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileOctContents.kpi1 == null)?'grey-2':(marketMobileOctContents.kpi1 >= '0' && marketMobileOctContents.kpi1 <= '232.6')?'red':(marketMobileOctContents.kpi1 > '232.6' && marketMobileOctContents.kpi1 <= '310.1333333')?'orange':(marketMobileOctContents.kpi1 > '310.1333333' && marketMobileOctContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileOctContents.kpi1 >= '387.6666667' && marketMobileOctContents.kpi1 < '465.2')?'green':(marketMobileOctContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileOctContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileOctContents.kpi2 == null)?'grey-2':(marketMobileOctContents.kpi2 >= '0' && marketMobileOctContents.kpi2 <= '11.6')?'red':(marketMobileOctContents.kpi2 > '11.6' && marketMobileOctContents.kpi2 <= '15.46666667')?'orange':(marketMobileOctContents.kpi2 > '15.46666667' && marketMobileOctContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileOctContents.kpi2 >= '19.33333333' && marketMobileOctContents.kpi2 < '23.2')?'green':(marketMobileOctContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileOctContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileOctContents.kpi3 == null)?'grey-2':(marketMobileOctContents.kpi3 >= '0' && marketMobileOctContents.kpi3 <= '38.2')?'red':(marketMobileOctContents.kpi3 > '38.2' && marketMobileOctContents.kpi3 <= '50.93333333')?'orange':(marketMobileOctContents.kpi3 > '50.93333333' && marketMobileOctContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileOctContents.kpi3 >= '63.66666667' && marketMobileOctContents.kpi3 < '76.4')?'green':(marketMobileOctContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileOctContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileOctContents.kpi4 == null)?'grey-2':(marketMobileOctContents.kpi4 >= '0' && marketMobileOctContents.kpi4 <= '109.6')?'red':(marketMobileOctContents.kpi4 > '109.6' && marketMobileOctContents.kpi4 <= '146.1333333')?'orange':(marketMobileOctContents.kpi4 > '146.1333333' && marketMobileOctContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileOctContents.kpi4 >= '182.6666667' && marketMobileOctContents.kpi4 < '219.2')?'green':(marketMobileOctContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileOctContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileNovContents.kpi1 == null)?'grey-2':(marketMobileNovContents.kpi1 >= '0' && marketMobileNovContents.kpi1 <= '232.6')?'red':(marketMobileNovContents.kpi1 > '232.6' && marketMobileNovContents.kpi1 <= '310.1333333')?'orange':(marketMobileNovContents.kpi1 > '310.1333333' && marketMobileNovContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileNovContents.kpi1 >= '387.6666667' && marketMobileNovContents.kpi1 < '465.2')?'green':(marketMobileNovContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileNovContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileNovContents.kpi2 == null)?'grey-2':(marketMobileNovContents.kpi2 >= '0' && marketMobileNovContents.kpi2 <= '11.6')?'red':(marketMobileNovContents.kpi2 > '11.6' && marketMobileNovContents.kpi2 <= '15.46666667')?'orange':(marketMobileNovContents.kpi2 > '15.46666667' && marketMobileNovContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileNovContents.kpi2 >= '19.33333333' && marketMobileNovContents.kpi2 < '23.2')?'green':(marketMobileNovContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileNovContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileNovContents.kpi3 == null)?'grey-2':(marketMobileNovContents.kpi3 >= '0' && marketMobileNovContents.kpi3 <= '38.2')?'red':(marketMobileNovContents.kpi3 > '38.2' && marketMobileNovContents.kpi3 <= '50.93333333')?'orange':(marketMobileNovContents.kpi3 > '50.93333333' && marketMobileNovContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileNovContents.kpi3 >= '63.66666667' && marketMobileNovContents.kpi3 < '76.4')?'green':(marketMobileNovContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileNovContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileNovContents.kpi4 == null)?'grey-2':(marketMobileNovContents.kpi4 >= '0' && marketMobileNovContents.kpi4 <= '109.6')?'red':(marketMobileNovContents.kpi4 > '109.6' && marketMobileNovContents.kpi4 <= '146.1333333')?'orange':(marketMobileNovContents.kpi4 > '146.1333333' && marketMobileNovContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileNovContents.kpi4 >= '182.6666667' && marketMobileNovContents.kpi4 < '219.2')?'green':(marketMobileNovContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileNovContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
                              :color="(marketMobileDecContents.kpi1 == null)?'grey-2':(marketMobileDecContents.kpi1 >= '0' && marketMobileDecContents.kpi1 <= '232.6')?'red':(marketMobileDecContents.kpi1 > '232.6' && marketMobileDecContents.kpi1 <= '310.1333333')?'orange':(marketMobileDecContents.kpi1 > '310.1333333' && marketMobileDecContents.kpi1 < '387.6666667')?'yellow-7':(marketMobileDecContents.kpi1 >= '387.6666667' && marketMobileDecContents.kpi1 < '465.2')?'green':(marketMobileDecContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{marketMobileDecContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileDecContents.kpi2 == null)?'grey-2':(marketMobileDecContents.kpi2 >= '0' && marketMobileDecContents.kpi2 <= '11.6')?'red':(marketMobileDecContents.kpi2 > '11.6' && marketMobileDecContents.kpi2 <= '15.46666667')?'orange':(marketMobileDecContents.kpi2 > '15.46666667' && marketMobileDecContents.kpi2 < '19.33333333')?'yellow-7':(marketMobileDecContents.kpi2 >= '19.33333333' && marketMobileDecContents.kpi2 < '23.2')?'green':(marketMobileDecContents.kpi2 >= '23.2'?'blue':'grey-2')"
                            >
                            {{marketMobileDecContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileDecContents.kpi3 == null)?'grey-2':(marketMobileDecContents.kpi3 >= '0' && marketMobileDecContents.kpi3 <= '38.2')?'red':(marketMobileDecContents.kpi3 > '38.2' && marketMobileDecContents.kpi3 <= '50.93333333')?'orange':(marketMobileDecContents.kpi3 > '50.93333333' && marketMobileDecContents.kpi3 < '63.66666667')?'yellow-7':(marketMobileDecContents.kpi3 >= '63.66666667' && marketMobileDecContents.kpi3 < '76.4')?'green':(marketMobileDecContents.kpi3 >= '76.4'?'blue':'grey-2')"
                            >
                            {{marketMobileDecContents.kpi3}}
                              <q-tooltip># of pick-up contacts</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(marketMobileDecContents.kpi4 == null)?'grey-2':(marketMobileDecContents.kpi4 >= '0' && marketMobileDecContents.kpi4 <= '109.6')?'red':(marketMobileDecContents.kpi4 > '109.6' && marketMobileDecContents.kpi4 <= '146.1333333')?'orange':(marketMobileDecContents.kpi4 > '146.1333333' && marketMobileDecContents.kpi4 < '182.6666667')?'yellow-7':(marketMobileDecContents.kpi4 >= '182.6666667' && marketMobileDecContents.kpi4 < '219.2')?'green':(marketMobileDecContents.kpi4 >= '219.2'?'blue':'grey-2')"
                            >
                            {{marketMobileDecContents.kpi4}}
                              <q-tooltip># of home delivery</q-tooltip>
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
              marketMobileJanContent: {
                
              },
              marketMobileJanContents : [],
              marketMobileFebContent: {
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
              marketMobileFebContents : [],
              marketMobileMarContent: {
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
              marketMobileMarContents : [],
              marketMobileAprContent: {
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
              marketMobileAprContents : [],
              marketMobileMayContent: {
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
              marketMobileMayContents : [],
              marketMobileJunContent: {
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
              marketMobileJunContents : [],
              marketMobileJulContent: {
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
              marketMobileJulContents : [],
              marketMobileAugContent: {
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
              marketMobileAugContents : [],
              marketMobileSepContent: {
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
              marketMobileSepContents : [],
              marketMobileOctContent: {
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
              marketMobileOctContents : [],
              marketMobileNovContent: {
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
              marketMobileNovContents : [],
              marketMobileDecContent: {
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
              marketMobileDecContents : []


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
                            {time_period: 'January', expenses: this.marketMobileJanContents.expenses, revenues: this.marketMobileJanContents.revenues},
                            {time_period: 'February', expenses: this.marketMobileFebContents.expenses, revenues: this.marketMobileFebContents.revenues},
                            {time_period: 'March', expenses: this.marketMobileMarContents.expenses, revenues: this.marketMobileMarContents.revenues},
                            {time_period: 'April', expenses: this.marketMobileAprContents.expenses, revenues: this.marketMobileAprContents.revenues},
                            {time_period: 'May', expenses: this.marketMobileMayContents.expenses, revenues: this.marketMobileMayContents.revenues},
                            {time_period: 'June', expenses: this.marketMobileJunContents.expenses, revenues: this.marketMobileJunContents.revenues},
                            {time_period: 'July', expenses: this.marketMobileJulContents.expenses, revenues: this.marketMobileJulContents.revenues},
                            {time_period: 'August', expenses: this.marketMobileAugContents.expenses, revenues: this.marketMobileAugContents.revenues},
                            {time_period: 'September', expenses: this.marketMobileSepContents.expenses, revenues: this.marketMobileSepContents.revenues},
                            {time_period: 'October', expenses: this.marketMobileOctContents.expenses, revenues: this.marketMobileOctContents.revenues},
                            {time_period: 'November', expenses: this.marketMobileNovContents.expenses, revenues: this.marketMobileNovContents.revenues},
                            {time_period: 'December',expenses: this.marketMobileDecContents.expenses, revenues: this.marketMobileDecContents.revenues }
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
                            {months: 'January', kpi1: this.marketMobileJanContents.kpi1, kpi2: this.marketMobileJanContents.kpi2, kpi3: this.marketMobileJanContents.kpi3, kpi4: this.marketMobileJanContents.kpi4, uniqueVol: this.marketMobileJanContents.uniqueVolunteers, volHours: this.marketMobileJanContents.volunteerHours},
                            {months: 'February', kpi1: this.marketMobileFebContents.kpi1, kpi2: this.marketMobileFebContents.kpi2, kpi3: this.marketMobileFebContents.kpi3, kpi4: this.marketMobileFebContents.kpi4, uniqueVol: this.marketMobileFebContents.uniqueVolunteers, volHours: this.marketMobileFebContents.volunteerHours},
                            {months: 'March', kpi1: this.marketMobileMarContents.kpi1, kpi2: this.marketMobileMarContents.kpi2, kpi3: this.marketMobileMarContents.kpi3, kpi4: this.marketMobileMarContents.kpi4, uniqueVol: this.marketMobileMarContents.uniqueVolunteers, volHours: this.marketMobileMarContents.volunteerHours},
                            {months: 'April', kpi1: this.marketMobileAprContents.kpi1, kpi2: this.marketMobileAprContents.kpi2, kpi3: this.marketMobileAprContents.kpi3, kpi4: this.marketMobileAprContents.kpi4, uniqueVol: this.marketMobileAprContents.uniqueVolunteers, volHours: this.marketMobileAprContents.volunteerHours},
                            {months: 'May', kpi1: this.marketMobileMayContents.kpi1, kpi2: this.marketMobileMayContents.kpi2, kpi3: this.marketMobileMayContents.kpi3, kpi4: this.marketMobileMayContents.kpi4, uniqueVol: this.marketMobileMayContents.uniqueVolunteers, volHours: this.marketMobileMayContents.volunteerHours},
                            {months: 'June', kpi1: this.marketMobileJunContents.kpi1, kpi2: this.marketMobileJunContents.kpi2, kpi3: this.marketMobileJunContents.kpi3, kpi4: this.marketMobileJunContents.kpi4, uniqueVol: this.marketMobileJunContents.uniqueVolunteers, volHours: this.marketMobileJunContents.volunteerHours},
                            {months: 'July', kpi1: this.marketMobileJulContents.kpi1, kpi2: this.marketMobileJulContents.kpi2, kpi3: this.marketMobileJulContents.kpi3, kpi4: this.marketMobileJulContents.kpi4, uniqueVol: this.marketMobileJulContents.uniqueVolunteers, volHours: this.marketMobileJulContents.volunteerHours},
                            {months: 'August', kpi1: this.marketMobileAugContents.kpi1, kpi2: this.marketMobileAugContents.kpi2, kpi3: this.marketMobileAugContents.kpi3, kpi4: this.marketMobileAugContents.kpi4, uniqueVol: this.marketMobileAugContents.uniqueVolunteers, volHours: this.marketMobileAugContents.volunteerHours},
                            {months: 'September', kpi1: this.marketMobileSepContents.kpi1, kpi2: this.marketMobileSepContents.kpi2, kpi3: this.marketMobileSepContents.kpi3, kpi4: this.marketMobileSepContents.kpi4, uniqueVol: this.marketMobileSepContents.uniqueVolunteers, volHours: this.marketMobileSepContents.volunteerHours},
                            {months: 'October', kpi1: this.marketMobileOctContents.kpi1, kpi2: this.marketMobileOctContents.kpi2, kpi3: this.marketMobileOctContents.kpi3, kpi4: this.marketMobileOctContents.kpi4, uniqueVol: this.marketMobileOctContents.uniqueVolunteers, volHours: this.marketMobileOctContents.volunteerHours},
                            {months: 'November', kpi1: this.marketMobileNovContents.kpi1, kpi2: this.marketMobileNovContents.kpi2, kpi3: this.marketMobileNovContents.kpi3, kpi4: this.marketMobileNovContents.kpi4, uniqueVol: this.marketMobileNovContents.uniqueVolunteers, volHours: this.marketMobileNovContents.volunteerHours},
                            {months: 'December',kpi1: this.marketMobileDecContents.kpi1, kpi2: this.marketMobileDecContents.kpi2, kpi3: this.marketMobileDecContents.kpi3, kpi4: this.marketMobileDecContents.kpi4, uniqueVol: this.marketMobileDecContents.uniqueVolunteers, volHours: this.marketMobileDecContents.volunteerHours},
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
                            data: [{value: this.marketMobileJanContents.budgetUsage}],
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
                                {value: this.marketMobileJanContents.perCategory1, name: this.marketMobileJanContents.expenseCategory1},
                                {value: this.marketMobileJanContents.perCategory2, name: this.marketMobileJanContents.expenseCategory2},
                                {value: this.marketMobileJanContents.perCategory3, name: this.marketMobileJanContents.expenseCategory3},
                                {value: this.marketMobileJanContents.perCategory4, name: this.marketMobileJanContents.expenseCategory4},
                                {value: this.marketMobileJanContents.perCategory5, name: this.marketMobileJanContents.expenseCategory5},
                                {value: this.marketMobileJanContents.perCategory6, name: this.marketMobileJanContents.expenseCategory6}
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
                            data: [{value: this.marketMobileFebContents.budgetUsage}],
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
                                {value: this.marketMobileFebContents.perCategory1, name: this.marketMobileFebContents.expenseCategory1},
                                {value: this.marketMobileFebContents.perCategory2, name: this.marketMobileFebContents.expenseCategory2},
                                {value: this.marketMobileFebContents.perCategory3, name: this.marketMobileFebContents.expenseCategory3},
                                {value: this.marketMobileFebContents.perCategory4, name: this.marketMobileFebContents.expenseCategory4},
                                {value: this.marketMobileFebContents.perCategory5, name: this.marketMobileFebContents.expenseCategory5},
                                {value: this.marketMobileFebContents.perCategory6, name: this.marketMobileFebContents.expenseCategory6}
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
                            data: [{value: this.marketMobileMarContents.budgetUsage}],
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
                                {value: this.marketMobileMarContents.perCategory1, name: this.marketMobileMarContents.expenseCategory1},
                                {value: this.marketMobileMarContents.perCategory2, name: this.marketMobileMarContents.expenseCategory2},
                                {value: this.marketMobileMarContents.perCategory3, name: this.marketMobileMarContents.expenseCategory3},
                                {value: this.marketMobileMarContents.perCategory4, name: this.marketMobileMarContents.expenseCategory4},
                                {value: this.marketMobileMarContents.perCategory5, name: this.marketMobileMarContents.expenseCategory5},
                                {value: this.marketMobileMarContents.perCategory6, name: this.marketMobileMarContents.expenseCategory6}
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
                            data: [{value: this.marketMobileAprContents.budgetUsage}],
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
                                {value: this.marketMobileAprContents.perCategory1, name: this.marketMobileAprContents.expenseCategory1},
                                {value: this.marketMobileAprContents.perCategory2, name: this.marketMobileAprContents.expenseCategory2},
                                {value: this.marketMobileAprContents.perCategory3, name: this.marketMobileAprContents.expenseCategory3},
                                {value: this.marketMobileAprContents.perCategory4, name: this.marketMobileAprContents.expenseCategory4},
                                {value: this.marketMobileAprContents.perCategory5, name: this.marketMobileAprContents.expenseCategory5},
                                {value: this.marketMobileAprContents.perCategory6, name: this.marketMobileAprContents.expenseCategory6}  
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
                            data: [{value: this.marketMobileMayContents.budgetUsage}],
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
                                {value: this.marketMobileMayContents.perCategory1, name: this.marketMobileMayContents.expenseCategory1},
                                {value: this.marketMobileMayContents.perCategory2, name: this.marketMobileMayContents.expenseCategory2},
                                {value: this.marketMobileMayContents.perCategory3, name: this.marketMobileMayContents.expenseCategory3},
                                {value: this.marketMobileMayContents.perCategory4, name: this.marketMobileMayContents.expenseCategory4},
                                {value: this.marketMobileMayContents.perCategory5, name: this.marketMobileMayContents.expenseCategory5},
                                {value: this.marketMobileMayContents.perCategory6, name: this.marketMobileMayContents.expenseCategory6}  
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
                            data: [{value: this.marketMobileJunContents.budgetUsage}],
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
                                {value: this.marketMobileJunContents.perCategory1, name: this.marketMobileJunContents.expenseCategory1},
                                {value: this.marketMobileJunContents.perCategory2, name: this.marketMobileJunContents.expenseCategory2},
                                {value: this.marketMobileJunContents.perCategory3, name: this.marketMobileJunContents.expenseCategory3},
                                {value: this.marketMobileJunContents.perCategory4, name: this.marketMobileJunContents.expenseCategory4},
                                {value: this.marketMobileJunContents.perCategory5, name: this.marketMobileJunContents.expenseCategory5},
                                {value: this.marketMobileJunContents.perCategory6, name: this.marketMobileJunContents.expenseCategory6}  
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
                            data: [{value: this.marketMobileJulContents.budgetUsage}],
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
                                {value: this.marketMobileJulContents.perCategory1, name: this.marketMobileJulContents.expenseCategory1},
                                {value: this.marketMobileJulContents.perCategory2, name: this.marketMobileJulContents.expenseCategory2},
                                {value: this.marketMobileJulContents.perCategory3, name: this.marketMobileJulContents.expenseCategory3},
                                {value: this.marketMobileJulContents.perCategory4, name: this.marketMobileJulContents.expenseCategory4},
                                {value: this.marketMobileJulContents.perCategory5, name: this.marketMobileJulContents.expenseCategory5},
                                {value: this.marketMobileJulContents.perCategory6, name: this.marketMobileJulContents.expenseCategory6}  
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
                            data: [{value: this.marketMobileAugContents.budgetUsage}],
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
                                {value: this.marketMobileAugContents.perCategory1, name: this.marketMobileAugContents.expenseCategory1},
                                {value: this.marketMobileAugContents.perCategory2, name: this.marketMobileAugContents.expenseCategory2},
                                {value: this.marketMobileAugContents.perCategory3, name: this.marketMobileAugContents.expenseCategory3},
                                {value: this.marketMobileAugContents.perCategory4, name: this.marketMobileAugContents.expenseCategory4},
                                {value: this.marketMobileAugContents.perCategory5, name: this.marketMobileAugContents.expenseCategory5},
                                {value: this.marketMobileAugContents.perCategory6, name: this.marketMobileAugContents.expenseCategory6}  
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
                            data: [{value: this.marketMobileSepContents.budgetUsage}],
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
                                {value: this.marketMobileSepContents.perCategory1, name: this.marketMobileSepContents.expenseCategory1},
                                {value: this.marketMobileSepContents.perCategory2, name: this.marketMobileSepContents.expenseCategory2},
                                {value: this.marketMobileSepContents.perCategory3, name: this.marketMobileSepContents.expenseCategory3},
                                {value: this.marketMobileSepContents.perCategory4, name: this.marketMobileSepContents.expenseCategory4},
                                {value: this.marketMobileSepContents.perCategory5, name: this.marketMobileSepContents.expenseCategory5},
                                {value: this.marketMobileSepContents.perCategory6, name: this.marketMobileSepContents.expenseCategory6}  
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
                            data: [{value: this.marketMobileOctContents.budgetUsage}],
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
                                {value: this.marketMobileOctContents.perCategory1, name: this.marketMobileOctContents.expenseCategory1},
                                {value: this.marketMobileOctContents.perCategory2, name: this.marketMobileOctContents.expenseCategory2},
                                {value: this.marketMobileOctContents.perCategory3, name: this.marketMobileOctContents.expenseCategory3},
                                {value: this.marketMobileOctContents.perCategory4, name: this.marketMobileOctContents.expenseCategory4},
                                {value: this.marketMobileOctContents.perCategory5, name: this.marketMobileOctContents.expenseCategory5},
                                {value: this.marketMobileOctContents.perCategory6, name: this.marketMobileOctContents.expenseCategory6}  
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
                            data: [{value: this.marketMobileNovContents.budgetUsage}],
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
                                {value: this.marketMobileNovContents.perCategory1, name: this.marketMobileNovContents.expenseCategory1},
                                {value: this.marketMobileNovContents.perCategory2, name: this.marketMobileNovContents.expenseCategory2},
                                {value: this.marketMobileNovContents.perCategory3, name: this.marketMobileNovContents.expenseCategory3},
                                {value: this.marketMobileNovContents.perCategory4, name: this.marketMobileNovContents.expenseCategory4},
                                {value: this.marketMobileNovContents.perCategory5, name: this.marketMobileNovContents.expenseCategory5},
                                {value: this.marketMobileNovContents.perCategory6, name: this.marketMobileNovContents.expenseCategory6}  
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
                            data: [{value: this.marketMobileDecContents.budgetUsage}],
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
                                {value: this.marketMobileDecContents.perCategory1, name: this.marketMobileDecContents.expenseCategory1},
                                {value: this.marketMobileDecContents.perCategory2, name: this.marketMobileDecContents.expenseCategory2},
                                {value: this.marketMobileDecContents.perCategory3, name: this.marketMobileDecContents.expenseCategory3},
                                {value: this.marketMobileDecContents.perCategory4, name: this.marketMobileDecContents.expenseCategory4},
                                {value: this.marketMobileDecContents.perCategory5, name: this.marketMobileDecContents.expenseCategory5},
                                {value: this.marketMobileDecContents.perCategory6, name: this.marketMobileDecContents.expenseCategory6}
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
            var docmarketMobileJanRef = db.collection("marketMobile").doc("january");

            docmarketMobileJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.marketMobileJanContents = doc.data();
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
            var docmarketMobileFebRef = db.collection("marketMobile").doc("february");

            docmarketMobileFebRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.marketMobileFebContents = doc.data();
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
            var docmarketMobileMarRef = db.collection("marketMobile").doc("march");

            docmarketMobileMarRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.marketMobileMarContents = doc.data();
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
            var docmarketMobileAprRef = db.collection("marketMobile").doc("april1");

            docmarketMobileAprRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.marketMobileAprContents = doc.data();
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
            var docmarketMobileMayRef = db.collection("marketMobile").doc("may");

            docmarketMobileMayRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.marketMobileMayContents = doc.data();
                    this.totalExpenseMay();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    JUNE
            var docmarketMobileJunRef = db.collection("marketMobile").doc("june");

            docmarketMobileJunRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.marketMobileJunContents = doc.data();
                    this.totalExpenseJun();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    JULY
            var docmarketMobileJulRef = db.collection("marketMobile").doc("july");

            docmarketMobileJulRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.marketMobileJulContents = doc.data();
                    this.totalExpenseJul();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    AUGUST
            var docmarketMobileAugRef = db.collection("marketMobile").doc("august");

            docmarketMobileAugRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.marketMobileAugContents = doc.data();
                    this.totalExpenseAug();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    SEPTEMBER
            var docmarketMobileSepRef = db.collection("marketMobile").doc("september");

            docmarketMobileSepRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.marketMobileSepContents = doc.data();
                    this.totalExpenseSep();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    OCTOBER
            var docmarketMobileOctRef = db.collection("marketMobile").doc("october");

            docmarketMobileOctRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.marketMobileOctContents = doc.data();
                    this.totalExpenseOct();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    NOVEMBER
            var docmarketMobileNovRef = db.collection("marketMobile").doc("november");

            docmarketMobileNovRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.marketMobileNovContents = doc.data();
                    this.totalExpenseNov();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    DECEMBER
            var docmarketMobileDecRef = db.collection("marketMobile").doc("december");

            docmarketMobileDecRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.marketMobileDecContents = doc.data();
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
              return this.marketMobileJanContents.expenses = getRealValue(this.marketMobileJanContents.perCategory1) + getRealValue(this.marketMobileJanContents.perCategory2) + getRealValue(this.marketMobileJanContents.perCategory3) + getRealValue(this.marketMobileJanContents.perCategory4) + getRealValue(this.marketMobileJanContents.perCategory5) + getRealValue(this.marketMobileJanContents.perCategory6)
              
            },
            cumulativeBudgetUsageJan(){
              const getRealValue = (val) => +val || val;
              return this.marketMobileJanContents.budgetUsage = ((getRealValue(this.marketMobileJanContents.expenses) / getRealValue(this.marketMobileJanContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseFeb(){
              const getRealValue = (val) => +val || val;
              return this.marketMobileFebContents.expenses = getRealValue(this.marketMobileFebContents.perCategory1) + getRealValue(this.marketMobileFebContents.perCategory2) + getRealValue(this.marketMobileFebContents.perCategory3) + getRealValue(this.marketMobileFebContents.perCategory4) + getRealValue(this.marketMobileFebContents.perCategory5) + getRealValue(this.marketMobileFebContents.perCategory6)
            },
            cumulativeBudgetUsageFeb(){
              const getRealValue = (val) => +val || val;
              return this.marketMobileFebContents.budgetUsage = (((getRealValue(this.marketMobileFebContents.expenses) + getRealValue(this.marketMobileJanContents.expenses)) / getRealValue(this.marketMobileFebContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseMar(){
              const getRealValue = (val) => +val || val;
              return this.marketMobileMarContents.expenses = getRealValue(this.marketMobileMarContents.perCategory1) + getRealValue(this.marketMobileMarContents.perCategory2) + getRealValue(this.marketMobileMarContents.perCategory3) + getRealValue(this.marketMobileMarContents.perCategory4) + getRealValue(this.marketMobileMarContents.perCategory5) + getRealValue(this.marketMobileMarContents.perCategory6)
            },
            cumulativeBudgetUsageMar(){
              const getRealValue = (val) => +val || val;
              return this.marketMobileMarContents.budgetUsage = (((getRealValue(this.marketMobileMarContents.expenses) + getRealValue(this.marketMobileFebContents.expenses) + getRealValue(this.marketMobileJanContents.expenses)) / getRealValue(this.marketMobileMarContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseApr(){
              const getRealValue = (val) => +val || val;
              return this.marketMobileAprContents.expenses = getRealValue(this.marketMobileAprContents.perCategory1) + getRealValue(this.marketMobileAprContents.perCategory2) + getRealValue(this.marketMobileAprContents.perCategory3) + getRealValue(this.marketMobileAprContents.perCategory4) + getRealValue(this.marketMobileAprContents.perCategory5) + getRealValue(this.marketMobileAprContents.perCategory6)
            },
            cumulativeBudgetUsageApr(){
              const getRealValue = (val) => +val || val;
              return this.marketMobileAprContents.budgetUsage = (((getRealValue(this.marketMobileAprContents.expenses) + getRealValue(this.marketMobileMarContents.expenses) + getRealValue(this.marketMobileFebContents.expenses) + getRealValue(this.marketMobileJanContents.expenses)) / getRealValue(this.marketMobileAprContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseMay(){
              const getRealValue = (val) => +val || val;
              return this.marketMobileMayContents.expenses = getRealValue(this.marketMobileMayContents.perCategory1) + getRealValue(this.marketMobileMayContents.perCategory2) + getRealValue(this.marketMobileMayContents.perCategory3) + getRealValue(this.marketMobileMayContents.perCategory4) + getRealValue(this.marketMobileMayContents.perCategory5) + getRealValue(this.marketMobileMayContents.perCategory6)
            },
            cumulativeBudgetUsageMay(){
              const getRealValue = (val) => +val || val;
              return this.marketMobileMayContents.budgetUsage = (((getRealValue(this.marketMobileMayContents.expenses) + getRealValue(this.marketMobileAprContents.expenses) + getRealValue(this.marketMobileMarContents.expenses) + getRealValue(this.marketMobileFebContents.expenses) + getRealValue(this.marketMobileJanContents.expenses)) / getRealValue(this.marketMobileMayContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseJun(){
              const getRealValue = (val) => +val || val;
              return this.marketMobileJunContents.expenses = getRealValue(this.marketMobileJunContents.perCategory1) + getRealValue(this.marketMobileJunContents.perCategory2) + getRealValue(this.marketMobileJunContents.perCategory3) + getRealValue(this.marketMobileJunContents.perCategory4) + getRealValue(this.marketMobileJunContents.perCategory5) + getRealValue(this.marketMobileJunContents.perCategory6)
            },
            cumulativeBudgetUsageJun(){
              const getRealValue = (val) => +val || val;
              return this.marketMobileJunContents.budgetUsage = (((getRealValue(this.marketMobileJunContents.expenses) + getRealValue(this.marketMobileMayContents.expenses) + getRealValue(this.marketMobileAprContents.expenses) + getRealValue(this.marketMobileMarContents.expenses) + getRealValue(this.marketMobileFebContents.expenses) + getRealValue(this.marketMobileJanContents.expenses)) / getRealValue(this.marketMobileJunContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseJul(){
              const getRealValue = (val) => +val || val;
              return this.marketMobileJulContents.expenses = getRealValue(this.marketMobileJulContents.perCategory1) + getRealValue(this.marketMobileJulContents.perCategory2) + getRealValue(this.marketMobileJulContents.perCategory3) + getRealValue(this.marketMobileJulContents.perCategory4) + getRealValue(this.marketMobileJulContents.perCategory5) + getRealValue(this.marketMobileJulContents.perCategory6)
            },
            cumulativeBudgetUsageJul(){
              const getRealValue = (val) => +val || val;
              return this.marketMobileJulContents.budgetUsage = (((getRealValue(this.marketMobileJulContents.expenses) + getRealValue(this.marketMobileJunContents.expenses) + getRealValue(this.marketMobileMayContents.expenses) + getRealValue(this.marketMobileAprContents.expenses) + getRealValue(this.marketMobileMarContents.expenses) + getRealValue(this.marketMobileFebContents.expenses) + getRealValue(this.marketMobileJanContents.expenses)) / getRealValue(this.marketMobileJulContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseAug(){
              const getRealValue = (val) => +val || val;
              return this.marketMobileAugContents.expenses = getRealValue(this.marketMobileAugContents.perCategory1) + getRealValue(this.marketMobileAugContents.perCategory2) + getRealValue(this.marketMobileAugContents.perCategory3) + getRealValue(this.marketMobileAugContents.perCategory4) + getRealValue(this.marketMobileAugContents.perCategory5) + getRealValue(this.marketMobileAugContents.perCategory6)
            },
            cumulativeBudgetUsageAug(){
              const getRealValue = (val) => +val || val;
              return this.marketMobileAugContents.budgetUsage = (((getRealValue(this.marketMobileAugContents.expenses) + getRealValue(this.marketMobileJulContents.expenses) + getRealValue(this.marketMobileJunContents.expenses) + getRealValue(this.marketMobileMayContents.expenses) + getRealValue(this.marketMobileAprContents.expenses) + getRealValue(this.marketMobileMarContents.expenses) + getRealValue(this.marketMobileFebContents.expenses) + getRealValue(this.marketMobileJanContents.expenses)) / getRealValue(this.marketMobileAugContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseSep(){
              const getRealValue = (val) => +val || val;
              return this.marketMobileSepContents.expenses = getRealValue(this.marketMobileSepContents.perCategory1) + getRealValue(this.marketMobileSepContents.perCategory2) + getRealValue(this.marketMobileSepContents.perCategory3) + getRealValue(this.marketMobileSepContents.perCategory4) + getRealValue(this.marketMobileSepContents.perCategory5) + getRealValue(this.marketMobileSepContents.perCategory6)
            },
            cumulativeBudgetUsageSep(){
              const getRealValue = (val) => +val || val;
              return this.marketMobileSepContents.budgetUsage = (((getRealValue(this.marketMobileSepContents.expenses) + getRealValue(this.marketMobileAugContents.expenses) + getRealValue(this.marketMobileJulContents.expenses) + getRealValue(this.marketMobileJunContents.expenses) + getRealValue(this.marketMobileMayContents.expenses) + getRealValue(this.marketMobileAprContents.expenses) + getRealValue(this.marketMobileMarContents.expenses) + getRealValue(this.marketMobileFebContents.expenses) + getRealValue(this.marketMobileJanContents.expenses)) / getRealValue(this.marketMobileSepContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseOct(){
              const getRealValue = (val) => +val || val;
              return this.marketMobileOctContents.expenses = getRealValue(this.marketMobileOctContents.perCategory1) + getRealValue(this.marketMobileOctContents.perCategory2) + getRealValue(this.marketMobileOctContents.perCategory3) + getRealValue(this.marketMobileOctContents.perCategory4) + getRealValue(this.marketMobileOctContents.perCategory5) + getRealValue(this.marketMobileOctContents.perCategory6)
            },
            cumulativeBudgetUsageOct(){
              const getRealValue = (val) => +val || val;
              return this.marketMobileOctContents.budgetUsage = (((getRealValue(this.marketMobileOctContents.expenses) + getRealValue(this.marketMobileSepContents.expenses) + getRealValue(this.marketMobileAugContents.expenses) + getRealValue(this.marketMobileJulContents.expenses) + getRealValue(this.marketMobileJunContents.expenses) + getRealValue(this.marketMobileMayContents.expenses) + getRealValue(this.marketMobileAprContents.expenses) + getRealValue(this.marketMobileMarContents.expenses) + getRealValue(this.marketMobileFebContents.expenses) + getRealValue(this.marketMobileJanContents.expenses)) / getRealValue(this.marketMobileOctContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseNov(){
              const getRealValue = (val) => +val || val;
              return this.marketMobileNovContents.expenses = getRealValue(this.marketMobileNovContents.perCategory1) + getRealValue(this.marketMobileNovContents.perCategory2) + getRealValue(this.marketMobileNovContents.perCategory3) + getRealValue(this.marketMobileNovContents.perCategory4) + getRealValue(this.marketMobileNovContents.perCategory5) + getRealValue(this.marketMobileNovContents.perCategory6)
            },
            cumulativeBudgetUsageNov(){
              const getRealValue = (val) => +val || val;
              return this.marketMobileNovContents.budgetUsage = (((getRealValue(this.marketMobileNovContents.expenses) + getRealValue(this.marketMobileOctContents.expenses) + getRealValue(this.marketMobileSepContents.expenses) + getRealValue(this.marketMobileAugContents.expenses) + getRealValue(this.marketMobileJulContents.expenses) + getRealValue(this.marketMobileJunContents.expenses) + getRealValue(this.marketMobileMayContents.expenses) + getRealValue(this.marketMobileAprContents.expenses) + getRealValue(this.marketMobileMarContents.expenses) + getRealValue(this.marketMobileFebContents.expenses) + getRealValue(this.marketMobileJanContents.expenses)) / getRealValue(this.marketMobileNovContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseDec(){
              const getRealValue = (val) => +val || val;
              return this.marketMobileDecContents.expenses = getRealValue(this.marketMobileDecContents.perCategory1) + getRealValue(this.marketMobileDecContents.perCategory2) + getRealValue(this.marketMobileDecContents.perCategory3) + getRealValue(this.marketMobileDecContents.perCategory4) + getRealValue(this.marketMobileDecContents.perCategory5) + getRealValue(this.marketMobileDecContents.perCategory6)
            },
            cumulativeBudgetUsageDec(){
              const getRealValue = (val) => +val || val;
              return this.marketMobileDecContents.budgetUsage = (((getRealValue(this.marketMobileDecContents.expenses) + getRealValue(this.marketMobileNovContents.expenses) + getRealValue(this.marketMobileOctContents.expenses) + getRealValue(this.marketMobileSepContents.expenses) + getRealValue(this.marketMobileAugContents.expenses) + getRealValue(this.marketMobileJulContents.expenses) + getRealValue(this.marketMobileJunContents.expenses) + getRealValue(this.marketMobileMayContents.expenses) + getRealValue(this.marketMobileAprContents.expenses) + getRealValue(this.marketMobileMarContents.expenses) + getRealValue(this.marketMobileFebContents.expenses) + getRealValue(this.marketMobileJanContents.expenses)) / getRealValue(this.marketMobileDecContents.actualBudget))*100).toFixed(2)
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
