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
                                <q-tooltip>Activities (#)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsJanContents.kpi1 == null)?'grey-2':(communityMealsJanContents.kpi1 >= '0' && communityMealsJanContents.kpi1 <= '9.8')?'red':(communityMealsJanContents.kpi1 > '9.8' && communityMealsJanContents.kpi1 <= '13.06666667')?'orange':(communityMealsJanContents.kpi1 > '13.06666667' && communityMealsJanContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsJanContents.kpi1 >= '16.33333333' && communityMealsJanContents.kpi1 < '19.6')?'green':(communityMealsJanContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJanContents.kpi2 == null)?'grey-2':(communityMealsJanContents.kpi2 >= '0' && communityMealsJanContents.kpi2 <= '90')?'red':(communityMealsJanContents.kpi2 > '90' && communityMealsJanContents.kpi2 <= '120')?'orange':(communityMealsJanContents.kpi2 > '120' && communityMealsJanContents.kpi2 < '150')?'yellow-7':(communityMealsJanContents.kpi2 >= '150' && communityMealsJanContents.kpi2 < '180')?'green':(communityMealsJanContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJanContents.kpi3 == null)?'grey-2':(communityMealsJanContents.kpi3 >= '0' && communityMealsJanContents.kpi3 <= '2.6')?'red':(communityMealsJanContents.kpi3 > '2.6' && communityMealsJanContents.kpi3 <= '3.466666667')?'orange':(communityMealsJanContents.kpi3 > '3.466666667' && communityMealsJanContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsJanContents.kpi3 >= '4.333333333' && communityMealsJanContents.kpi3 < '5.2')?'green':(communityMealsJanContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsJanContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJanContents.kpi4 == null)?'grey-2':(communityMealsJanContents.kpi4 >= '0' && communityMealsJanContents.kpi4 <= '384.2')?'red':(communityMealsJanContents.kpi4 > '384.2' && communityMealsJanContents.kpi4 <= '512.2666667')?'orange':(communityMealsJanContents.kpi4 > '512.2666667' && communityMealsJanContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsJanContents.kpi4 >= '640.3333333' && communityMealsJanContents.kpi4 < '768.4')?'green':(communityMealsJanContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsJanContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsFebContents.kpi1 == null)?'grey-2':(communityMealsFebContents.kpi1 >= '0' && communityMealsFebContents.kpi1 <= '9.8')?'red':(communityMealsFebContents.kpi1 > '9.8' && communityMealsFebContents.kpi1 <= '13.06666667')?'orange':(communityMealsFebContents.kpi1 > '13.06666667' && communityMealsFebContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsFebContents.kpi1 >= '16.33333333' && communityMealsFebContents.kpi1 < '19.6')?'green':(communityMealsFebContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsFebContents.kpi2 == null)?'grey-2':(communityMealsFebContents.kpi2 >= '0' && communityMealsFebContents.kpi2 <= '90')?'red':(communityMealsFebContents.kpi2 > '90' && communityMealsFebContents.kpi2 <= '120')?'orange':(communityMealsFebContents.kpi2 > '120' && communityMealsFebContents.kpi2 < '150')?'yellow-7':(communityMealsFebContents.kpi2 >= '150' && communityMealsFebContents.kpi2 < '180')?'green':(communityMealsFebContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsFebContents.kpi3 == null)?'grey-2':(communityMealsFebContents.kpi3 >= '0' && communityMealsFebContents.kpi3 <= '2.6')?'red':(communityMealsFebContents.kpi3 > '2.6' && communityMealsFebContents.kpi3 <= '3.466666667')?'orange':(communityMealsFebContents.kpi3 > '3.466666667' && communityMealsFebContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsFebContents.kpi3 >= '4.333333333' && communityMealsFebContents.kpi3 < '5.2')?'green':(communityMealsFebContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsFebContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsFebContents.kpi4 == null)?'grey-2':(communityMealsFebContents.kpi4 >= '0' && communityMealsFebContents.kpi4 <= '384.2')?'red':(communityMealsFebContents.kpi4 > '384.2' && communityMealsFebContents.kpi4 <= '512.2666667')?'orange':(communityMealsFebContents.kpi4 > '512.2666667' && communityMealsFebContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsFebContents.kpi4 >= '640.3333333' && communityMealsFebContents.kpi4 < '768.4')?'green':(communityMealsFebContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsFebContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsMarContents.kpi1 == null)?'grey-2':(communityMealsMarContents.kpi1 >= '0' && communityMealsMarContents.kpi1 <= '9.8')?'red':(communityMealsMarContents.kpi1 > '9.8' && communityMealsMarContents.kpi1 <= '13.06666667')?'orange':(communityMealsMarContents.kpi1 > '13.06666667' && communityMealsMarContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsMarContents.kpi1 >= '16.33333333' && communityMealsMarContents.kpi1 < '19.6')?'green':(communityMealsMarContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMarContents.kpi2 == null)?'grey-2':(communityMealsMarContents.kpi2 >= '0' && communityMealsMarContents.kpi2 <= '90')?'red':(communityMealsMarContents.kpi2 > '90' && communityMealsMarContents.kpi2 <= '120')?'orange':(communityMealsMarContents.kpi2 > '120' && communityMealsMarContents.kpi2 < '150')?'yellow-7':(communityMealsMarContents.kpi2 >= '150' && communityMealsMarContents.kpi2 < '180')?'green':(communityMealsMarContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMarContents.kpi3 == null)?'grey-2':(communityMealsMarContents.kpi3 >= '0' && communityMealsMarContents.kpi3 <= '2.6')?'red':(communityMealsMarContents.kpi3 > '2.6' && communityMealsMarContents.kpi3 <= '3.466666667')?'orange':(communityMealsMarContents.kpi3 > '3.466666667' && communityMealsMarContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsMarContents.kpi3 >= '4.333333333' && communityMealsMarContents.kpi3 < '5.2')?'green':(communityMealsMarContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsMarContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMarContents.kpi4 == null)?'grey-2':(communityMealsMarContents.kpi4 >= '0' && communityMealsMarContents.kpi4 <= '384.2')?'red':(communityMealsMarContents.kpi4 > '384.2' && communityMealsMarContents.kpi4 <= '512.2666667')?'orange':(communityMealsMarContents.kpi4 > '512.2666667' && communityMealsMarContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsMarContents.kpi4 >= '640.3333333' && communityMealsMarContents.kpi4 < '768.4')?'green':(communityMealsMarContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsMarContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsAprContents.kpi1 == null)?'grey-2':(communityMealsAprContents.kpi1 >= '0' && communityMealsAprContents.kpi1 <= '9.8')?'red':(communityMealsAprContents.kpi1 > '9.8' && communityMealsAprContents.kpi1 <= '13.06666667')?'orange':(communityMealsAprContents.kpi1 > '13.06666667' && communityMealsAprContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsAprContents.kpi1 >= '16.33333333' && communityMealsAprContents.kpi1 < '19.6')?'green':(communityMealsAprContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAprContents.kpi2 == null)?'grey-2':(communityMealsAprContents.kpi2 >= '0' && communityMealsAprContents.kpi2 <= '90')?'red':(communityMealsAprContents.kpi2 > '90' && communityMealsAprContents.kpi2 <= '120')?'orange':(communityMealsAprContents.kpi2 > '120' && communityMealsAprContents.kpi2 < '150')?'yellow-7':(communityMealsAprContents.kpi2 >= '150' && communityMealsAprContents.kpi2 < '180')?'green':(communityMealsAprContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAprContents.kpi3 == null)?'grey-2':(communityMealsAprContents.kpi3 >= '0' && communityMealsAprContents.kpi3 <= '2.6')?'red':(communityMealsAprContents.kpi3 > '2.6' && communityMealsAprContents.kpi3 <= '3.466666667')?'orange':(communityMealsAprContents.kpi3 > '3.466666667' && communityMealsAprContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsAprContents.kpi3 >= '4.333333333' && communityMealsAprContents.kpi3 < '5.2')?'green':(communityMealsAprContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsAprContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAprContents.kpi4 == null)?'grey-2':(communityMealsAprContents.kpi4 >= '0' && communityMealsAprContents.kpi4 <= '384.2')?'red':(communityMealsAprContents.kpi4 > '384.2' && communityMealsAprContents.kpi4 <= '512.2666667')?'orange':(communityMealsAprContents.kpi4 > '512.2666667' && communityMealsAprContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsAprContents.kpi4 >= '640.3333333' && communityMealsAprContents.kpi4 < '768.4')?'green':(communityMealsAprContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsAprContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsMayContents.kpi1 == null)?'grey-2':(communityMealsMayContents.kpi1 >= '0' && communityMealsMayContents.kpi1 <= '9.8')?'red':(communityMealsMayContents.kpi1 > '9.8' && communityMealsMayContents.kpi1 <= '13.06666667')?'orange':(communityMealsMayContents.kpi1 > '13.06666667' && communityMealsMayContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsMayContents.kpi1 >= '16.33333333' && communityMealsMayContents.kpi1 < '19.6')?'green':(communityMealsMayContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMayContents.kpi2 == null)?'grey-2':(communityMealsMayContents.kpi2 >= '0' && communityMealsMayContents.kpi2 <= '90')?'red':(communityMealsMayContents.kpi2 > '90' && communityMealsMayContents.kpi2 <= '120')?'orange':(communityMealsMayContents.kpi2 > '120' && communityMealsMayContents.kpi2 < '150')?'yellow-7':(communityMealsMayContents.kpi2 >= '150' && communityMealsMayContents.kpi2 < '180')?'green':(communityMealsMayContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMayContents.kpi3 == null)?'grey-2':(communityMealsMayContents.kpi3 >= '0' && communityMealsMayContents.kpi3 <= '2.6')?'red':(communityMealsMayContents.kpi3 > '2.6' && communityMealsMayContents.kpi3 <= '3.466666667')?'orange':(communityMealsMayContents.kpi3 > '3.466666667' && communityMealsMayContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsMayContents.kpi3 >= '4.333333333' && communityMealsMayContents.kpi3 < '5.2')?'green':(communityMealsMayContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsMayContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMayContents.kpi4 == null)?'grey-2':(communityMealsMayContents.kpi4 >= '0' && communityMealsMayContents.kpi4 <= '384.2')?'red':(communityMealsMayContents.kpi4 > '384.2' && communityMealsMayContents.kpi4 <= '512.2666667')?'orange':(communityMealsMayContents.kpi4 > '512.2666667' && communityMealsMayContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsMayContents.kpi4 >= '640.3333333' && communityMealsMayContents.kpi4 < '768.4')?'green':(communityMealsMayContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsMayContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsJunContents.kpi1 == null)?'grey-2':(communityMealsJunContents.kpi1 >= '0' && communityMealsJunContents.kpi1 <= '9.8')?'red':(communityMealsJunContents.kpi1 > '9.8' && communityMealsJunContents.kpi1 <= '13.06666667')?'orange':(communityMealsJunContents.kpi1 > '13.06666667' && communityMealsJunContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsJunContents.kpi1 >= '16.33333333' && communityMealsJunContents.kpi1 < '19.6')?'green':(communityMealsJunContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJunContents.kpi2 == null)?'grey-2':(communityMealsJunContents.kpi2 >= '0' && communityMealsJunContents.kpi2 <= '90')?'red':(communityMealsJunContents.kpi2 > '90' && communityMealsJunContents.kpi2 <= '120')?'orange':(communityMealsJunContents.kpi2 > '120' && communityMealsJunContents.kpi2 < '150')?'yellow-7':(communityMealsJunContents.kpi2 >= '150' && communityMealsJunContents.kpi2 < '180')?'green':(communityMealsJunContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJunContents.kpi3 == null)?'grey-2':(communityMealsJunContents.kpi3 >= '0' && communityMealsJunContents.kpi3 <= '2.6')?'red':(communityMealsJunContents.kpi3 > '2.6' && communityMealsJunContents.kpi3 <= '3.466666667')?'orange':(communityMealsJunContents.kpi3 > '3.466666667' && communityMealsJunContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsJunContents.kpi3 >= '4.333333333' && communityMealsJunContents.kpi3 < '5.2')?'green':(communityMealsJunContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsJunContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJunContents.kpi4 == null)?'grey-2':(communityMealsJunContents.kpi4 >= '0' && communityMealsJunContents.kpi4 <= '384.2')?'red':(communityMealsJunContents.kpi4 > '384.2' && communityMealsJunContents.kpi4 <= '512.2666667')?'orange':(communityMealsJunContents.kpi4 > '512.2666667' && communityMealsJunContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsJunContents.kpi4 >= '640.3333333' && communityMealsJunContents.kpi4 < '768.4')?'green':(communityMealsJunContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsJunContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsJulContents.kpi1 == null)?'grey-2':(communityMealsJulContents.kpi1 >= '0' && communityMealsJulContents.kpi1 <= '9.8')?'red':(communityMealsJulContents.kpi1 > '9.8' && communityMealsJulContents.kpi1 <= '13.06666667')?'orange':(communityMealsJulContents.kpi1 > '13.06666667' && communityMealsJulContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsJulContents.kpi1 >= '16.33333333' && communityMealsJulContents.kpi1 < '19.6')?'green':(communityMealsJulContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJulContents.kpi2 == null)?'grey-2':(communityMealsJulContents.kpi2 >= '0' && communityMealsJulContents.kpi2 <= '90')?'red':(communityMealsJulContents.kpi2 > '90' && communityMealsJulContents.kpi2 <= '120')?'orange':(communityMealsJulContents.kpi2 > '120' && communityMealsJulContents.kpi2 < '150')?'yellow-7':(communityMealsJulContents.kpi2 >= '150' && communityMealsJulContents.kpi2 < '180')?'green':(communityMealsJulContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJulContents.kpi3 == null)?'grey-2':(communityMealsJulContents.kpi3 >= '0' && communityMealsJulContents.kpi3 <= '2.6')?'red':(communityMealsJulContents.kpi3 > '2.6' && communityMealsJulContents.kpi3 <= '3.466666667')?'orange':(communityMealsJulContents.kpi3 > '3.466666667' && communityMealsJulContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsJulContents.kpi3 >= '4.333333333' && communityMealsJulContents.kpi3 < '5.2')?'green':(communityMealsJulContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsJulContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJulContents.kpi4 == null)?'grey-2':(communityMealsJulContents.kpi4 >= '0' && communityMealsJulContents.kpi4 <= '384.2')?'red':(communityMealsJulContents.kpi4 > '384.2' && communityMealsJulContents.kpi4 <= '512.2666667')?'orange':(communityMealsJulContents.kpi4 > '512.2666667' && communityMealsJulContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsJulContents.kpi4 >= '640.3333333' && communityMealsJulContents.kpi4 < '768.4')?'green':(communityMealsJulContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsJulContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsAugContents.kpi1 == null)?'grey-2':(communityMealsAugContents.kpi1 >= '0' && communityMealsAugContents.kpi1 <= '9.8')?'red':(communityMealsAugContents.kpi1 > '9.8' && communityMealsAugContents.kpi1 <= '13.06666667')?'orange':(communityMealsAugContents.kpi1 > '13.06666667' && communityMealsAugContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsAugContents.kpi1 >= '16.33333333' && communityMealsAugContents.kpi1 < '19.6')?'green':(communityMealsAugContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAugContents.kpi2 == null)?'grey-2':(communityMealsAugContents.kpi2 >= '0' && communityMealsAugContents.kpi2 <= '90')?'red':(communityMealsAugContents.kpi2 > '90' && communityMealsAugContents.kpi2 <= '120')?'orange':(communityMealsAugContents.kpi2 > '120' && communityMealsAugContents.kpi2 < '150')?'yellow-7':(communityMealsAugContents.kpi2 >= '150' && communityMealsAugContents.kpi2 < '180')?'green':(communityMealsAugContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAugContents.kpi3 == null)?'grey-2':(communityMealsAugContents.kpi3 >= '0' && communityMealsAugContents.kpi3 <= '2.6')?'red':(communityMealsAugContents.kpi3 > '2.6' && communityMealsAugContents.kpi3 <= '3.466666667')?'orange':(communityMealsAugContents.kpi3 > '3.466666667' && communityMealsAugContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsAugContents.kpi3 >= '4.333333333' && communityMealsAugContents.kpi3 < '5.2')?'green':(communityMealsAugContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsAugContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAugContents.kpi4 == null)?'grey-2':(communityMealsAugContents.kpi4 >= '0' && communityMealsAugContents.kpi4 <= '384.2')?'red':(communityMealsAugContents.kpi4 > '384.2' && communityMealsAugContents.kpi4 <= '512.2666667')?'orange':(communityMealsAugContents.kpi4 > '512.2666667' && communityMealsAugContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsAugContents.kpi4 >= '640.3333333' && communityMealsAugContents.kpi4 < '768.4')?'green':(communityMealsAugContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsAugContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsSepContents.kpi1 == null)?'grey-2':(communityMealsSepContents.kpi1 >= '0' && communityMealsSepContents.kpi1 <= '9.8')?'red':(communityMealsSepContents.kpi1 > '9.8' && communityMealsSepContents.kpi1 <= '13.06666667')?'orange':(communityMealsSepContents.kpi1 > '13.06666667' && communityMealsSepContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsSepContents.kpi1 >= '16.33333333' && communityMealsSepContents.kpi1 < '19.6')?'green':(communityMealsSepContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsSepContents.kpi2 == null)?'grey-2':(communityMealsSepContents.kpi2 >= '0' && communityMealsSepContents.kpi2 <= '90')?'red':(communityMealsSepContents.kpi2 > '90' && communityMealsSepContents.kpi2 <= '120')?'orange':(communityMealsSepContents.kpi2 > '120' && communityMealsSepContents.kpi2 < '150')?'yellow-7':(communityMealsSepContents.kpi2 >= '150' && communityMealsSepContents.kpi2 < '180')?'green':(communityMealsSepContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsSepContents.kpi3 == null)?'grey-2':(communityMealsSepContents.kpi3 >= '0' && communityMealsSepContents.kpi3 <= '2.6')?'red':(communityMealsSepContents.kpi3 > '2.6' && communityMealsSepContents.kpi3 <= '3.466666667')?'orange':(communityMealsSepContents.kpi3 > '3.466666667' && communityMealsSepContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsSepContents.kpi3 >= '4.333333333' && communityMealsSepContents.kpi3 < '5.2')?'green':(communityMealsSepContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsSepContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsSepContents.kpi4 == null)?'grey-2':(communityMealsSepContents.kpi4 >= '0' && communityMealsSepContents.kpi4 <= '384.2')?'red':(communityMealsSepContents.kpi4 > '384.2' && communityMealsSepContents.kpi4 <= '512.2666667')?'orange':(communityMealsSepContents.kpi4 > '512.2666667' && communityMealsSepContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsSepContents.kpi4 >= '640.3333333' && communityMealsSepContents.kpi4 < '768.4')?'green':(communityMealsSepContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsSepContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsOctContents.kpi1 == null)?'grey-2':(communityMealsOctContents.kpi1 >= '0' && communityMealsOctContents.kpi1 <= '9.8')?'red':(communityMealsOctContents.kpi1 > '9.8' && communityMealsOctContents.kpi1 <= '13.06666667')?'orange':(communityMealsOctContents.kpi1 > '13.06666667' && communityMealsOctContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsOctContents.kpi1 >= '16.33333333' && communityMealsOctContents.kpi1 < '19.6')?'green':(communityMealsOctContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsOctContents.kpi2 == null)?'grey-2':(communityMealsOctContents.kpi2 >= '0' && communityMealsOctContents.kpi2 <= '90')?'red':(communityMealsOctContents.kpi2 > '90' && communityMealsOctContents.kpi2 <= '120')?'orange':(communityMealsOctContents.kpi2 > '120' && communityMealsOctContents.kpi2 < '150')?'yellow-7':(communityMealsOctContents.kpi2 >= '150' && communityMealsOctContents.kpi2 < '180')?'green':(communityMealsOctContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsOctContents.kpi3 == null)?'grey-2':(communityMealsOctContents.kpi3 >= '0' && communityMealsOctContents.kpi3 <= '2.6')?'red':(communityMealsOctContents.kpi3 > '2.6' && communityMealsOctContents.kpi3 <= '3.466666667')?'orange':(communityMealsOctContents.kpi3 > '3.466666667' && communityMealsOctContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsOctContents.kpi3 >= '4.333333333' && communityMealsOctContents.kpi3 < '5.2')?'green':(communityMealsOctContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsOctContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsOctContents.kpi4 == null)?'grey-2':(communityMealsOctContents.kpi4 >= '0' && communityMealsOctContents.kpi4 <= '384.2')?'red':(communityMealsOctContents.kpi4 > '384.2' && communityMealsOctContents.kpi4 <= '512.2666667')?'orange':(communityMealsOctContents.kpi4 > '512.2666667' && communityMealsOctContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsOctContents.kpi4 >= '640.3333333' && communityMealsOctContents.kpi4 < '768.4')?'green':(communityMealsOctContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsOctContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsNovContents.kpi1 == null)?'grey-2':(communityMealsNovContents.kpi1 >= '0' && communityMealsNovContents.kpi1 <= '9.8')?'red':(communityMealsNovContents.kpi1 > '9.8' && communityMealsNovContents.kpi1 <= '13.06666667')?'orange':(communityMealsNovContents.kpi1 > '13.06666667' && communityMealsNovContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsNovContents.kpi1 >= '16.33333333' && communityMealsNovContents.kpi1 < '19.6')?'green':(communityMealsNovContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsNovContents.kpi2 == null)?'grey-2':(communityMealsNovContents.kpi2 >= '0' && communityMealsNovContents.kpi2 <= '90')?'red':(communityMealsNovContents.kpi2 > '90' && communityMealsNovContents.kpi2 <= '120')?'orange':(communityMealsNovContents.kpi2 > '120' && communityMealsNovContents.kpi2 < '150')?'yellow-7':(communityMealsNovContents.kpi2 >= '150' && communityMealsNovContents.kpi2 < '180')?'green':(communityMealsNovContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsNovContents.kpi3 == null)?'grey-2':(communityMealsNovContents.kpi3 >= '0' && communityMealsNovContents.kpi3 <= '2.6')?'red':(communityMealsNovContents.kpi3 > '2.6' && communityMealsNovContents.kpi3 <= '3.466666667')?'orange':(communityMealsNovContents.kpi3 > '3.466666667' && communityMealsNovContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsNovContents.kpi3 >= '4.333333333' && communityMealsNovContents.kpi3 < '5.2')?'green':(communityMealsNovContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsNovContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsNovContents.kpi4 == null)?'grey-2':(communityMealsNovContents.kpi4 >= '0' && communityMealsNovContents.kpi4 <= '384.2')?'red':(communityMealsNovContents.kpi4 > '384.2' && communityMealsNovContents.kpi4 <= '512.2666667')?'orange':(communityMealsNovContents.kpi4 > '512.2666667' && communityMealsNovContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsNovContents.kpi4 >= '640.3333333' && communityMealsNovContents.kpi4 < '768.4')?'green':(communityMealsNovContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsNovContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsDecContents.kpi1 == null)?'grey-2':(communityMealsDecContents.kpi1 >= '0' && communityMealsDecContents.kpi1 <= '9.8')?'red':(communityMealsDecContents.kpi1 > '9.8' && communityMealsDecContents.kpi1 <= '13.06666667')?'orange':(communityMealsDecContents.kpi1 > '13.06666667' && communityMealsDecContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsDecContents.kpi1 >= '16.33333333' && communityMealsDecContents.kpi1 < '19.6')?'green':(communityMealsDecContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsDecContents.kpi2 == null)?'grey-2':(communityMealsDecContents.kpi2 >= '0' && communityMealsDecContents.kpi2 <= '90')?'red':(communityMealsDecContents.kpi2 > '90' && communityMealsDecContents.kpi2 <= '120')?'orange':(communityMealsDecContents.kpi2 > '120' && communityMealsDecContents.kpi2 < '150')?'yellow-7':(communityMealsDecContents.kpi2 >= '150' && communityMealsDecContents.kpi2 < '180')?'green':(communityMealsDecContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsDecContents.kpi3 == null)?'grey-2':(communityMealsDecContents.kpi3 >= '0' && communityMealsDecContents.kpi3 <= '2.6')?'red':(communityMealsDecContents.kpi3 > '2.6' && communityMealsDecContents.kpi3 <= '3.466666667')?'orange':(communityMealsDecContents.kpi3 > '3.466666667' && communityMealsDecContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsDecContents.kpi3 >= '4.333333333' && communityMealsDecContents.kpi3 < '5.2')?'green':(communityMealsDecContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsDecContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsDecContents.kpi4 == null)?'grey-2':(communityMealsDecContents.kpi4 >= '0' && communityMealsDecContents.kpi4 <= '384.2')?'red':(communityMealsDecContents.kpi4 > '384.2' && communityMealsDecContents.kpi4 <= '512.2666667')?'orange':(communityMealsDecContents.kpi4 > '512.2666667' && communityMealsDecContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsDecContents.kpi4 >= '640.3333333' && communityMealsDecContents.kpi4 < '768.4')?'green':(communityMealsDecContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsDecContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                                <q-tooltip>Activities (#)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsJanContents.kpi1 == null)?'grey-2':(communityMealsJanContents.kpi1 >= '0' && communityMealsJanContents.kpi1 <= '9.8')?'red':(communityMealsJanContents.kpi1 > '9.8' && communityMealsJanContents.kpi1 <= '13.06666667')?'orange':(communityMealsJanContents.kpi1 > '13.06666667' && communityMealsJanContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsJanContents.kpi1 >= '16.33333333' && communityMealsJanContents.kpi1 < '19.6')?'green':(communityMealsJanContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJanContents.kpi2 == null)?'grey-2':(communityMealsJanContents.kpi2 >= '0' && communityMealsJanContents.kpi2 <= '90')?'red':(communityMealsJanContents.kpi2 > '90' && communityMealsJanContents.kpi2 <= '120')?'orange':(communityMealsJanContents.kpi2 > '120' && communityMealsJanContents.kpi2 < '150')?'yellow-7':(communityMealsJanContents.kpi2 >= '150' && communityMealsJanContents.kpi2 < '180')?'green':(communityMealsJanContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJanContents.kpi3 == null)?'grey-2':(communityMealsJanContents.kpi3 >= '0' && communityMealsJanContents.kpi3 <= '2.6')?'red':(communityMealsJanContents.kpi3 > '2.6' && communityMealsJanContents.kpi3 <= '3.466666667')?'orange':(communityMealsJanContents.kpi3 > '3.466666667' && communityMealsJanContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsJanContents.kpi3 >= '4.333333333' && communityMealsJanContents.kpi3 < '5.2')?'green':(communityMealsJanContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsJanContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJanContents.kpi4 == null)?'grey-2':(communityMealsJanContents.kpi4 >= '0' && communityMealsJanContents.kpi4 <= '384.2')?'red':(communityMealsJanContents.kpi4 > '384.2' && communityMealsJanContents.kpi4 <= '512.2666667')?'orange':(communityMealsJanContents.kpi4 > '512.2666667' && communityMealsJanContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsJanContents.kpi4 >= '640.3333333' && communityMealsJanContents.kpi4 < '768.4')?'green':(communityMealsJanContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsJanContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsFebContents.kpi1 == null)?'grey-2':(communityMealsFebContents.kpi1 >= '0' && communityMealsFebContents.kpi1 <= '9.8')?'red':(communityMealsFebContents.kpi1 > '9.8' && communityMealsFebContents.kpi1 <= '13.06666667')?'orange':(communityMealsFebContents.kpi1 > '13.06666667' && communityMealsFebContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsFebContents.kpi1 >= '16.33333333' && communityMealsFebContents.kpi1 < '19.6')?'green':(communityMealsFebContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsFebContents.kpi2 == null)?'grey-2':(communityMealsFebContents.kpi2 >= '0' && communityMealsFebContents.kpi2 <= '90')?'red':(communityMealsFebContents.kpi2 > '90' && communityMealsFebContents.kpi2 <= '120')?'orange':(communityMealsFebContents.kpi2 > '120' && communityMealsFebContents.kpi2 < '150')?'yellow-7':(communityMealsFebContents.kpi2 >= '150' && communityMealsFebContents.kpi2 < '180')?'green':(communityMealsFebContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsFebContents.kpi3 == null)?'grey-2':(communityMealsFebContents.kpi3 >= '0' && communityMealsFebContents.kpi3 <= '2.6')?'red':(communityMealsFebContents.kpi3 > '2.6' && communityMealsFebContents.kpi3 <= '3.466666667')?'orange':(communityMealsFebContents.kpi3 > '3.466666667' && communityMealsFebContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsFebContents.kpi3 >= '4.333333333' && communityMealsFebContents.kpi3 < '5.2')?'green':(communityMealsFebContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsFebContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsFebContents.kpi4 == null)?'grey-2':(communityMealsFebContents.kpi4 >= '0' && communityMealsFebContents.kpi4 <= '384.2')?'red':(communityMealsFebContents.kpi4 > '384.2' && communityMealsFebContents.kpi4 <= '512.2666667')?'orange':(communityMealsFebContents.kpi4 > '512.2666667' && communityMealsFebContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsFebContents.kpi4 >= '640.3333333' && communityMealsFebContents.kpi4 < '768.4')?'green':(communityMealsFebContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsFebContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsMarContents.kpi1 == null)?'grey-2':(communityMealsMarContents.kpi1 >= '0' && communityMealsMarContents.kpi1 <= '9.8')?'red':(communityMealsMarContents.kpi1 > '9.8' && communityMealsMarContents.kpi1 <= '13.06666667')?'orange':(communityMealsMarContents.kpi1 > '13.06666667' && communityMealsMarContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsMarContents.kpi1 >= '16.33333333' && communityMealsMarContents.kpi1 < '19.6')?'green':(communityMealsMarContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMarContents.kpi2 == null)?'grey-2':(communityMealsMarContents.kpi2 >= '0' && communityMealsMarContents.kpi2 <= '90')?'red':(communityMealsMarContents.kpi2 > '90' && communityMealsMarContents.kpi2 <= '120')?'orange':(communityMealsMarContents.kpi2 > '120' && communityMealsMarContents.kpi2 < '150')?'yellow-7':(communityMealsMarContents.kpi2 >= '150' && communityMealsMarContents.kpi2 < '180')?'green':(communityMealsMarContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMarContents.kpi3 == null)?'grey-2':(communityMealsMarContents.kpi3 >= '0' && communityMealsMarContents.kpi3 <= '2.6')?'red':(communityMealsMarContents.kpi3 > '2.6' && communityMealsMarContents.kpi3 <= '3.466666667')?'orange':(communityMealsMarContents.kpi3 > '3.466666667' && communityMealsMarContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsMarContents.kpi3 >= '4.333333333' && communityMealsMarContents.kpi3 < '5.2')?'green':(communityMealsMarContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsMarContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMarContents.kpi4 == null)?'grey-2':(communityMealsMarContents.kpi4 >= '0' && communityMealsMarContents.kpi4 <= '384.2')?'red':(communityMealsMarContents.kpi4 > '384.2' && communityMealsMarContents.kpi4 <= '512.2666667')?'orange':(communityMealsMarContents.kpi4 > '512.2666667' && communityMealsMarContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsMarContents.kpi4 >= '640.3333333' && communityMealsMarContents.kpi4 < '768.4')?'green':(communityMealsMarContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsMarContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsAprContents.kpi1 == null)?'grey-2':(communityMealsAprContents.kpi1 >= '0' && communityMealsAprContents.kpi1 <= '9.8')?'red':(communityMealsAprContents.kpi1 > '9.8' && communityMealsAprContents.kpi1 <= '13.06666667')?'orange':(communityMealsAprContents.kpi1 > '13.06666667' && communityMealsAprContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsAprContents.kpi1 >= '16.33333333' && communityMealsAprContents.kpi1 < '19.6')?'green':(communityMealsAprContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAprContents.kpi2 == null)?'grey-2':(communityMealsAprContents.kpi2 >= '0' && communityMealsAprContents.kpi2 <= '90')?'red':(communityMealsAprContents.kpi2 > '90' && communityMealsAprContents.kpi2 <= '120')?'orange':(communityMealsAprContents.kpi2 > '120' && communityMealsAprContents.kpi2 < '150')?'yellow-7':(communityMealsAprContents.kpi2 >= '150' && communityMealsAprContents.kpi2 < '180')?'green':(communityMealsAprContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAprContents.kpi3 == null)?'grey-2':(communityMealsAprContents.kpi3 >= '0' && communityMealsAprContents.kpi3 <= '2.6')?'red':(communityMealsAprContents.kpi3 > '2.6' && communityMealsAprContents.kpi3 <= '3.466666667')?'orange':(communityMealsAprContents.kpi3 > '3.466666667' && communityMealsAprContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsAprContents.kpi3 >= '4.333333333' && communityMealsAprContents.kpi3 < '5.2')?'green':(communityMealsAprContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsAprContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAprContents.kpi4 == null)?'grey-2':(communityMealsAprContents.kpi4 >= '0' && communityMealsAprContents.kpi4 <= '384.2')?'red':(communityMealsAprContents.kpi4 > '384.2' && communityMealsAprContents.kpi4 <= '512.2666667')?'orange':(communityMealsAprContents.kpi4 > '512.2666667' && communityMealsAprContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsAprContents.kpi4 >= '640.3333333' && communityMealsAprContents.kpi4 < '768.4')?'green':(communityMealsAprContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsAprContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsMayContents.kpi1 == null)?'grey-2':(communityMealsMayContents.kpi1 >= '0' && communityMealsMayContents.kpi1 <= '9.8')?'red':(communityMealsMayContents.kpi1 > '9.8' && communityMealsMayContents.kpi1 <= '13.06666667')?'orange':(communityMealsMayContents.kpi1 > '13.06666667' && communityMealsMayContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsMayContents.kpi1 >= '16.33333333' && communityMealsMayContents.kpi1 < '19.6')?'green':(communityMealsMayContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMayContents.kpi2 == null)?'grey-2':(communityMealsMayContents.kpi2 >= '0' && communityMealsMayContents.kpi2 <= '90')?'red':(communityMealsMayContents.kpi2 > '90' && communityMealsMayContents.kpi2 <= '120')?'orange':(communityMealsMayContents.kpi2 > '120' && communityMealsMayContents.kpi2 < '150')?'yellow-7':(communityMealsMayContents.kpi2 >= '150' && communityMealsMayContents.kpi2 < '180')?'green':(communityMealsMayContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMayContents.kpi3 == null)?'grey-2':(communityMealsMayContents.kpi3 >= '0' && communityMealsMayContents.kpi3 <= '2.6')?'red':(communityMealsMayContents.kpi3 > '2.6' && communityMealsMayContents.kpi3 <= '3.466666667')?'orange':(communityMealsMayContents.kpi3 > '3.466666667' && communityMealsMayContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsMayContents.kpi3 >= '4.333333333' && communityMealsMayContents.kpi3 < '5.2')?'green':(communityMealsMayContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsMayContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMayContents.kpi4 == null)?'grey-2':(communityMealsMayContents.kpi4 >= '0' && communityMealsMayContents.kpi4 <= '384.2')?'red':(communityMealsMayContents.kpi4 > '384.2' && communityMealsMayContents.kpi4 <= '512.2666667')?'orange':(communityMealsMayContents.kpi4 > '512.2666667' && communityMealsMayContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsMayContents.kpi4 >= '640.3333333' && communityMealsMayContents.kpi4 < '768.4')?'green':(communityMealsMayContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsMayContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsJunContents.kpi1 == null)?'grey-2':(communityMealsJunContents.kpi1 >= '0' && communityMealsJunContents.kpi1 <= '9.8')?'red':(communityMealsJunContents.kpi1 > '9.8' && communityMealsJunContents.kpi1 <= '13.06666667')?'orange':(communityMealsJunContents.kpi1 > '13.06666667' && communityMealsJunContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsJunContents.kpi1 >= '16.33333333' && communityMealsJunContents.kpi1 < '19.6')?'green':(communityMealsJunContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJunContents.kpi2 == null)?'grey-2':(communityMealsJunContents.kpi2 >= '0' && communityMealsJunContents.kpi2 <= '90')?'red':(communityMealsJunContents.kpi2 > '90' && communityMealsJunContents.kpi2 <= '120')?'orange':(communityMealsJunContents.kpi2 > '120' && communityMealsJunContents.kpi2 < '150')?'yellow-7':(communityMealsJunContents.kpi2 >= '150' && communityMealsJunContents.kpi2 < '180')?'green':(communityMealsJunContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJunContents.kpi3 == null)?'grey-2':(communityMealsJunContents.kpi3 >= '0' && communityMealsJunContents.kpi3 <= '2.6')?'red':(communityMealsJunContents.kpi3 > '2.6' && communityMealsJunContents.kpi3 <= '3.466666667')?'orange':(communityMealsJunContents.kpi3 > '3.466666667' && communityMealsJunContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsJunContents.kpi3 >= '4.333333333' && communityMealsJunContents.kpi3 < '5.2')?'green':(communityMealsJunContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsJunContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJunContents.kpi4 == null)?'grey-2':(communityMealsJunContents.kpi4 >= '0' && communityMealsJunContents.kpi4 <= '384.2')?'red':(communityMealsJunContents.kpi4 > '384.2' && communityMealsJunContents.kpi4 <= '512.2666667')?'orange':(communityMealsJunContents.kpi4 > '512.2666667' && communityMealsJunContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsJunContents.kpi4 >= '640.3333333' && communityMealsJunContents.kpi4 < '768.4')?'green':(communityMealsJunContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsJunContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsJulContents.kpi1 == null)?'grey-2':(communityMealsJulContents.kpi1 >= '0' && communityMealsJulContents.kpi1 <= '9.8')?'red':(communityMealsJulContents.kpi1 > '9.8' && communityMealsJulContents.kpi1 <= '13.06666667')?'orange':(communityMealsJulContents.kpi1 > '13.06666667' && communityMealsJulContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsJulContents.kpi1 >= '16.33333333' && communityMealsJulContents.kpi1 < '19.6')?'green':(communityMealsJulContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJulContents.kpi2 == null)?'grey-2':(communityMealsJulContents.kpi2 >= '0' && communityMealsJulContents.kpi2 <= '90')?'red':(communityMealsJulContents.kpi2 > '90' && communityMealsJulContents.kpi2 <= '120')?'orange':(communityMealsJulContents.kpi2 > '120' && communityMealsJulContents.kpi2 < '150')?'yellow-7':(communityMealsJulContents.kpi2 >= '150' && communityMealsJulContents.kpi2 < '180')?'green':(communityMealsJulContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJulContents.kpi3 == null)?'grey-2':(communityMealsJulContents.kpi3 >= '0' && communityMealsJulContents.kpi3 <= '2.6')?'red':(communityMealsJulContents.kpi3 > '2.6' && communityMealsJulContents.kpi3 <= '3.466666667')?'orange':(communityMealsJulContents.kpi3 > '3.466666667' && communityMealsJulContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsJulContents.kpi3 >= '4.333333333' && communityMealsJulContents.kpi3 < '5.2')?'green':(communityMealsJulContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsJulContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJulContents.kpi4 == null)?'grey-2':(communityMealsJulContents.kpi4 >= '0' && communityMealsJulContents.kpi4 <= '384.2')?'red':(communityMealsJulContents.kpi4 > '384.2' && communityMealsJulContents.kpi4 <= '512.2666667')?'orange':(communityMealsJulContents.kpi4 > '512.2666667' && communityMealsJulContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsJulContents.kpi4 >= '640.3333333' && communityMealsJulContents.kpi4 < '768.4')?'green':(communityMealsJulContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsJulContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsAugContents.kpi1 == null)?'grey-2':(communityMealsAugContents.kpi1 >= '0' && communityMealsAugContents.kpi1 <= '9.8')?'red':(communityMealsAugContents.kpi1 > '9.8' && communityMealsAugContents.kpi1 <= '13.06666667')?'orange':(communityMealsAugContents.kpi1 > '13.06666667' && communityMealsAugContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsAugContents.kpi1 >= '16.33333333' && communityMealsAugContents.kpi1 < '19.6')?'green':(communityMealsAugContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAugContents.kpi2 == null)?'grey-2':(communityMealsAugContents.kpi2 >= '0' && communityMealsAugContents.kpi2 <= '90')?'red':(communityMealsAugContents.kpi2 > '90' && communityMealsAugContents.kpi2 <= '120')?'orange':(communityMealsAugContents.kpi2 > '120' && communityMealsAugContents.kpi2 < '150')?'yellow-7':(communityMealsAugContents.kpi2 >= '150' && communityMealsAugContents.kpi2 < '180')?'green':(communityMealsAugContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAugContents.kpi3 == null)?'grey-2':(communityMealsAugContents.kpi3 >= '0' && communityMealsAugContents.kpi3 <= '2.6')?'red':(communityMealsAugContents.kpi3 > '2.6' && communityMealsAugContents.kpi3 <= '3.466666667')?'orange':(communityMealsAugContents.kpi3 > '3.466666667' && communityMealsAugContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsAugContents.kpi3 >= '4.333333333' && communityMealsAugContents.kpi3 < '5.2')?'green':(communityMealsAugContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsAugContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAugContents.kpi4 == null)?'grey-2':(communityMealsAugContents.kpi4 >= '0' && communityMealsAugContents.kpi4 <= '384.2')?'red':(communityMealsAugContents.kpi4 > '384.2' && communityMealsAugContents.kpi4 <= '512.2666667')?'orange':(communityMealsAugContents.kpi4 > '512.2666667' && communityMealsAugContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsAugContents.kpi4 >= '640.3333333' && communityMealsAugContents.kpi4 < '768.4')?'green':(communityMealsAugContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsAugContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsSepContents.kpi1 == null)?'grey-2':(communityMealsSepContents.kpi1 >= '0' && communityMealsSepContents.kpi1 <= '9.8')?'red':(communityMealsSepContents.kpi1 > '9.8' && communityMealsSepContents.kpi1 <= '13.06666667')?'orange':(communityMealsSepContents.kpi1 > '13.06666667' && communityMealsSepContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsSepContents.kpi1 >= '16.33333333' && communityMealsSepContents.kpi1 < '19.6')?'green':(communityMealsSepContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsSepContents.kpi2 == null)?'grey-2':(communityMealsSepContents.kpi2 >= '0' && communityMealsSepContents.kpi2 <= '90')?'red':(communityMealsSepContents.kpi2 > '90' && communityMealsSepContents.kpi2 <= '120')?'orange':(communityMealsSepContents.kpi2 > '120' && communityMealsSepContents.kpi2 < '150')?'yellow-7':(communityMealsSepContents.kpi2 >= '150' && communityMealsSepContents.kpi2 < '180')?'green':(communityMealsSepContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsSepContents.kpi3 == null)?'grey-2':(communityMealsSepContents.kpi3 >= '0' && communityMealsSepContents.kpi3 <= '2.6')?'red':(communityMealsSepContents.kpi3 > '2.6' && communityMealsSepContents.kpi3 <= '3.466666667')?'orange':(communityMealsSepContents.kpi3 > '3.466666667' && communityMealsSepContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsSepContents.kpi3 >= '4.333333333' && communityMealsSepContents.kpi3 < '5.2')?'green':(communityMealsSepContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsSepContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsSepContents.kpi4 == null)?'grey-2':(communityMealsSepContents.kpi4 >= '0' && communityMealsSepContents.kpi4 <= '384.2')?'red':(communityMealsSepContents.kpi4 > '384.2' && communityMealsSepContents.kpi4 <= '512.2666667')?'orange':(communityMealsSepContents.kpi4 > '512.2666667' && communityMealsSepContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsSepContents.kpi4 >= '640.3333333' && communityMealsSepContents.kpi4 < '768.4')?'green':(communityMealsSepContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsSepContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsOctContents.kpi1 == null)?'grey-2':(communityMealsOctContents.kpi1 >= '0' && communityMealsOctContents.kpi1 <= '9.8')?'red':(communityMealsOctContents.kpi1 > '9.8' && communityMealsOctContents.kpi1 <= '13.06666667')?'orange':(communityMealsOctContents.kpi1 > '13.06666667' && communityMealsOctContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsOctContents.kpi1 >= '16.33333333' && communityMealsOctContents.kpi1 < '19.6')?'green':(communityMealsOctContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsOctContents.kpi2 == null)?'grey-2':(communityMealsOctContents.kpi2 >= '0' && communityMealsOctContents.kpi2 <= '90')?'red':(communityMealsOctContents.kpi2 > '90' && communityMealsOctContents.kpi2 <= '120')?'orange':(communityMealsOctContents.kpi2 > '120' && communityMealsOctContents.kpi2 < '150')?'yellow-7':(communityMealsOctContents.kpi2 >= '150' && communityMealsOctContents.kpi2 < '180')?'green':(communityMealsOctContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsOctContents.kpi3 == null)?'grey-2':(communityMealsOctContents.kpi3 >= '0' && communityMealsOctContents.kpi3 <= '2.6')?'red':(communityMealsOctContents.kpi3 > '2.6' && communityMealsOctContents.kpi3 <= '3.466666667')?'orange':(communityMealsOctContents.kpi3 > '3.466666667' && communityMealsOctContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsOctContents.kpi3 >= '4.333333333' && communityMealsOctContents.kpi3 < '5.2')?'green':(communityMealsOctContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsOctContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsOctContents.kpi4 == null)?'grey-2':(communityMealsOctContents.kpi4 >= '0' && communityMealsOctContents.kpi4 <= '384.2')?'red':(communityMealsOctContents.kpi4 > '384.2' && communityMealsOctContents.kpi4 <= '512.2666667')?'orange':(communityMealsOctContents.kpi4 > '512.2666667' && communityMealsOctContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsOctContents.kpi4 >= '640.3333333' && communityMealsOctContents.kpi4 < '768.4')?'green':(communityMealsOctContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsOctContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsNovContents.kpi1 == null)?'grey-2':(communityMealsNovContents.kpi1 >= '0' && communityMealsNovContents.kpi1 <= '9.8')?'red':(communityMealsNovContents.kpi1 > '9.8' && communityMealsNovContents.kpi1 <= '13.06666667')?'orange':(communityMealsNovContents.kpi1 > '13.06666667' && communityMealsNovContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsNovContents.kpi1 >= '16.33333333' && communityMealsNovContents.kpi1 < '19.6')?'green':(communityMealsNovContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsNovContents.kpi2 == null)?'grey-2':(communityMealsNovContents.kpi2 >= '0' && communityMealsNovContents.kpi2 <= '90')?'red':(communityMealsNovContents.kpi2 > '90' && communityMealsNovContents.kpi2 <= '120')?'orange':(communityMealsNovContents.kpi2 > '120' && communityMealsNovContents.kpi2 < '150')?'yellow-7':(communityMealsNovContents.kpi2 >= '150' && communityMealsNovContents.kpi2 < '180')?'green':(communityMealsNovContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsNovContents.kpi3 == null)?'grey-2':(communityMealsNovContents.kpi3 >= '0' && communityMealsNovContents.kpi3 <= '2.6')?'red':(communityMealsNovContents.kpi3 > '2.6' && communityMealsNovContents.kpi3 <= '3.466666667')?'orange':(communityMealsNovContents.kpi3 > '3.466666667' && communityMealsNovContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsNovContents.kpi3 >= '4.333333333' && communityMealsNovContents.kpi3 < '5.2')?'green':(communityMealsNovContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsNovContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsNovContents.kpi4 == null)?'grey-2':(communityMealsNovContents.kpi4 >= '0' && communityMealsNovContents.kpi4 <= '384.2')?'red':(communityMealsNovContents.kpi4 > '384.2' && communityMealsNovContents.kpi4 <= '512.2666667')?'orange':(communityMealsNovContents.kpi4 > '512.2666667' && communityMealsNovContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsNovContents.kpi4 >= '640.3333333' && communityMealsNovContents.kpi4 < '768.4')?'green':(communityMealsNovContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsNovContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsDecContents.kpi1 == null)?'grey-2':(communityMealsDecContents.kpi1 >= '0' && communityMealsDecContents.kpi1 <= '9.8')?'red':(communityMealsDecContents.kpi1 > '9.8' && communityMealsDecContents.kpi1 <= '13.06666667')?'orange':(communityMealsDecContents.kpi1 > '13.06666667' && communityMealsDecContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsDecContents.kpi1 >= '16.33333333' && communityMealsDecContents.kpi1 < '19.6')?'green':(communityMealsDecContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsDecContents.kpi2 == null)?'grey-2':(communityMealsDecContents.kpi2 >= '0' && communityMealsDecContents.kpi2 <= '90')?'red':(communityMealsDecContents.kpi2 > '90' && communityMealsDecContents.kpi2 <= '120')?'orange':(communityMealsDecContents.kpi2 > '120' && communityMealsDecContents.kpi2 < '150')?'yellow-7':(communityMealsDecContents.kpi2 >= '150' && communityMealsDecContents.kpi2 < '180')?'green':(communityMealsDecContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsDecContents.kpi3 == null)?'grey-2':(communityMealsDecContents.kpi3 >= '0' && communityMealsDecContents.kpi3 <= '2.6')?'red':(communityMealsDecContents.kpi3 > '2.6' && communityMealsDecContents.kpi3 <= '3.466666667')?'orange':(communityMealsDecContents.kpi3 > '3.466666667' && communityMealsDecContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsDecContents.kpi3 >= '4.333333333' && communityMealsDecContents.kpi3 < '5.2')?'green':(communityMealsDecContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsDecContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsDecContents.kpi4 == null)?'grey-2':(communityMealsDecContents.kpi4 >= '0' && communityMealsDecContents.kpi4 <= '384.2')?'red':(communityMealsDecContents.kpi4 > '384.2' && communityMealsDecContents.kpi4 <= '512.2666667')?'orange':(communityMealsDecContents.kpi4 > '512.2666667' && communityMealsDecContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsDecContents.kpi4 >= '640.3333333' && communityMealsDecContents.kpi4 < '768.4')?'green':(communityMealsDecContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsDecContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                                <q-tooltip>Activities (#)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsJanContents.kpi1 == null)?'grey-2':(communityMealsJanContents.kpi1 >= '0' && communityMealsJanContents.kpi1 <= '9.8')?'red':(communityMealsJanContents.kpi1 > '9.8' && communityMealsJanContents.kpi1 <= '13.06666667')?'orange':(communityMealsJanContents.kpi1 > '13.06666667' && communityMealsJanContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsJanContents.kpi1 >= '16.33333333' && communityMealsJanContents.kpi1 < '19.6')?'green':(communityMealsJanContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJanContents.kpi2 == null)?'grey-2':(communityMealsJanContents.kpi2 >= '0' && communityMealsJanContents.kpi2 <= '90')?'red':(communityMealsJanContents.kpi2 > '90' && communityMealsJanContents.kpi2 <= '120')?'orange':(communityMealsJanContents.kpi2 > '120' && communityMealsJanContents.kpi2 < '150')?'yellow-7':(communityMealsJanContents.kpi2 >= '150' && communityMealsJanContents.kpi2 < '180')?'green':(communityMealsJanContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJanContents.kpi3 == null)?'grey-2':(communityMealsJanContents.kpi3 >= '0' && communityMealsJanContents.kpi3 <= '2.6')?'red':(communityMealsJanContents.kpi3 > '2.6' && communityMealsJanContents.kpi3 <= '3.466666667')?'orange':(communityMealsJanContents.kpi3 > '3.466666667' && communityMealsJanContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsJanContents.kpi3 >= '4.333333333' && communityMealsJanContents.kpi3 < '5.2')?'green':(communityMealsJanContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsJanContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJanContents.kpi4 == null)?'grey-2':(communityMealsJanContents.kpi4 >= '0' && communityMealsJanContents.kpi4 <= '384.2')?'red':(communityMealsJanContents.kpi4 > '384.2' && communityMealsJanContents.kpi4 <= '512.2666667')?'orange':(communityMealsJanContents.kpi4 > '512.2666667' && communityMealsJanContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsJanContents.kpi4 >= '640.3333333' && communityMealsJanContents.kpi4 < '768.4')?'green':(communityMealsJanContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsJanContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsFebContents.kpi1 == null)?'grey-2':(communityMealsFebContents.kpi1 >= '0' && communityMealsFebContents.kpi1 <= '9.8')?'red':(communityMealsFebContents.kpi1 > '9.8' && communityMealsFebContents.kpi1 <= '13.06666667')?'orange':(communityMealsFebContents.kpi1 > '13.06666667' && communityMealsFebContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsFebContents.kpi1 >= '16.33333333' && communityMealsFebContents.kpi1 < '19.6')?'green':(communityMealsFebContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsFebContents.kpi2 == null)?'grey-2':(communityMealsFebContents.kpi2 >= '0' && communityMealsFebContents.kpi2 <= '90')?'red':(communityMealsFebContents.kpi2 > '90' && communityMealsFebContents.kpi2 <= '120')?'orange':(communityMealsFebContents.kpi2 > '120' && communityMealsFebContents.kpi2 < '150')?'yellow-7':(communityMealsFebContents.kpi2 >= '150' && communityMealsFebContents.kpi2 < '180')?'green':(communityMealsFebContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsFebContents.kpi3 == null)?'grey-2':(communityMealsFebContents.kpi3 >= '0' && communityMealsFebContents.kpi3 <= '2.6')?'red':(communityMealsFebContents.kpi3 > '2.6' && communityMealsFebContents.kpi3 <= '3.466666667')?'orange':(communityMealsFebContents.kpi3 > '3.466666667' && communityMealsFebContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsFebContents.kpi3 >= '4.333333333' && communityMealsFebContents.kpi3 < '5.2')?'green':(communityMealsFebContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsFebContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsFebContents.kpi4 == null)?'grey-2':(communityMealsFebContents.kpi4 >= '0' && communityMealsFebContents.kpi4 <= '384.2')?'red':(communityMealsFebContents.kpi4 > '384.2' && communityMealsFebContents.kpi4 <= '512.2666667')?'orange':(communityMealsFebContents.kpi4 > '512.2666667' && communityMealsFebContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsFebContents.kpi4 >= '640.3333333' && communityMealsFebContents.kpi4 < '768.4')?'green':(communityMealsFebContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsFebContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsMarContents.kpi1 == null)?'grey-2':(communityMealsMarContents.kpi1 >= '0' && communityMealsMarContents.kpi1 <= '9.8')?'red':(communityMealsMarContents.kpi1 > '9.8' && communityMealsMarContents.kpi1 <= '13.06666667')?'orange':(communityMealsMarContents.kpi1 > '13.06666667' && communityMealsMarContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsMarContents.kpi1 >= '16.33333333' && communityMealsMarContents.kpi1 < '19.6')?'green':(communityMealsMarContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMarContents.kpi2 == null)?'grey-2':(communityMealsMarContents.kpi2 >= '0' && communityMealsMarContents.kpi2 <= '90')?'red':(communityMealsMarContents.kpi2 > '90' && communityMealsMarContents.kpi2 <= '120')?'orange':(communityMealsMarContents.kpi2 > '120' && communityMealsMarContents.kpi2 < '150')?'yellow-7':(communityMealsMarContents.kpi2 >= '150' && communityMealsMarContents.kpi2 < '180')?'green':(communityMealsMarContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMarContents.kpi3 == null)?'grey-2':(communityMealsMarContents.kpi3 >= '0' && communityMealsMarContents.kpi3 <= '2.6')?'red':(communityMealsMarContents.kpi3 > '2.6' && communityMealsMarContents.kpi3 <= '3.466666667')?'orange':(communityMealsMarContents.kpi3 > '3.466666667' && communityMealsMarContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsMarContents.kpi3 >= '4.333333333' && communityMealsMarContents.kpi3 < '5.2')?'green':(communityMealsMarContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsMarContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMarContents.kpi4 == null)?'grey-2':(communityMealsMarContents.kpi4 >= '0' && communityMealsMarContents.kpi4 <= '384.2')?'red':(communityMealsMarContents.kpi4 > '384.2' && communityMealsMarContents.kpi4 <= '512.2666667')?'orange':(communityMealsMarContents.kpi4 > '512.2666667' && communityMealsMarContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsMarContents.kpi4 >= '640.3333333' && communityMealsMarContents.kpi4 < '768.4')?'green':(communityMealsMarContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsMarContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsAprContents.kpi1 == null)?'grey-2':(communityMealsAprContents.kpi1 >= '0' && communityMealsAprContents.kpi1 <= '9.8')?'red':(communityMealsAprContents.kpi1 > '9.8' && communityMealsAprContents.kpi1 <= '13.06666667')?'orange':(communityMealsAprContents.kpi1 > '13.06666667' && communityMealsAprContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsAprContents.kpi1 >= '16.33333333' && communityMealsAprContents.kpi1 < '19.6')?'green':(communityMealsAprContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAprContents.kpi2 == null)?'grey-2':(communityMealsAprContents.kpi2 >= '0' && communityMealsAprContents.kpi2 <= '90')?'red':(communityMealsAprContents.kpi2 > '90' && communityMealsAprContents.kpi2 <= '120')?'orange':(communityMealsAprContents.kpi2 > '120' && communityMealsAprContents.kpi2 < '150')?'yellow-7':(communityMealsAprContents.kpi2 >= '150' && communityMealsAprContents.kpi2 < '180')?'green':(communityMealsAprContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAprContents.kpi3 == null)?'grey-2':(communityMealsAprContents.kpi3 >= '0' && communityMealsAprContents.kpi3 <= '2.6')?'red':(communityMealsAprContents.kpi3 > '2.6' && communityMealsAprContents.kpi3 <= '3.466666667')?'orange':(communityMealsAprContents.kpi3 > '3.466666667' && communityMealsAprContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsAprContents.kpi3 >= '4.333333333' && communityMealsAprContents.kpi3 < '5.2')?'green':(communityMealsAprContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsAprContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAprContents.kpi4 == null)?'grey-2':(communityMealsAprContents.kpi4 >= '0' && communityMealsAprContents.kpi4 <= '384.2')?'red':(communityMealsAprContents.kpi4 > '384.2' && communityMealsAprContents.kpi4 <= '512.2666667')?'orange':(communityMealsAprContents.kpi4 > '512.2666667' && communityMealsAprContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsAprContents.kpi4 >= '640.3333333' && communityMealsAprContents.kpi4 < '768.4')?'green':(communityMealsAprContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsAprContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsMayContents.kpi1 == null)?'grey-2':(communityMealsMayContents.kpi1 >= '0' && communityMealsMayContents.kpi1 <= '9.8')?'red':(communityMealsMayContents.kpi1 > '9.8' && communityMealsMayContents.kpi1 <= '13.06666667')?'orange':(communityMealsMayContents.kpi1 > '13.06666667' && communityMealsMayContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsMayContents.kpi1 >= '16.33333333' && communityMealsMayContents.kpi1 < '19.6')?'green':(communityMealsMayContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMayContents.kpi2 == null)?'grey-2':(communityMealsMayContents.kpi2 >= '0' && communityMealsMayContents.kpi2 <= '90')?'red':(communityMealsMayContents.kpi2 > '90' && communityMealsMayContents.kpi2 <= '120')?'orange':(communityMealsMayContents.kpi2 > '120' && communityMealsMayContents.kpi2 < '150')?'yellow-7':(communityMealsMayContents.kpi2 >= '150' && communityMealsMayContents.kpi2 < '180')?'green':(communityMealsMayContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMayContents.kpi3 == null)?'grey-2':(communityMealsMayContents.kpi3 >= '0' && communityMealsMayContents.kpi3 <= '2.6')?'red':(communityMealsMayContents.kpi3 > '2.6' && communityMealsMayContents.kpi3 <= '3.466666667')?'orange':(communityMealsMayContents.kpi3 > '3.466666667' && communityMealsMayContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsMayContents.kpi3 >= '4.333333333' && communityMealsMayContents.kpi3 < '5.2')?'green':(communityMealsMayContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsMayContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMayContents.kpi4 == null)?'grey-2':(communityMealsMayContents.kpi4 >= '0' && communityMealsMayContents.kpi4 <= '384.2')?'red':(communityMealsMayContents.kpi4 > '384.2' && communityMealsMayContents.kpi4 <= '512.2666667')?'orange':(communityMealsMayContents.kpi4 > '512.2666667' && communityMealsMayContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsMayContents.kpi4 >= '640.3333333' && communityMealsMayContents.kpi4 < '768.4')?'green':(communityMealsMayContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsMayContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsJunContents.kpi1 == null)?'grey-2':(communityMealsJunContents.kpi1 >= '0' && communityMealsJunContents.kpi1 <= '9.8')?'red':(communityMealsJunContents.kpi1 > '9.8' && communityMealsJunContents.kpi1 <= '13.06666667')?'orange':(communityMealsJunContents.kpi1 > '13.06666667' && communityMealsJunContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsJunContents.kpi1 >= '16.33333333' && communityMealsJunContents.kpi1 < '19.6')?'green':(communityMealsJunContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJunContents.kpi2 == null)?'grey-2':(communityMealsJunContents.kpi2 >= '0' && communityMealsJunContents.kpi2 <= '90')?'red':(communityMealsJunContents.kpi2 > '90' && communityMealsJunContents.kpi2 <= '120')?'orange':(communityMealsJunContents.kpi2 > '120' && communityMealsJunContents.kpi2 < '150')?'yellow-7':(communityMealsJunContents.kpi2 >= '150' && communityMealsJunContents.kpi2 < '180')?'green':(communityMealsJunContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJunContents.kpi3 == null)?'grey-2':(communityMealsJunContents.kpi3 >= '0' && communityMealsJunContents.kpi3 <= '2.6')?'red':(communityMealsJunContents.kpi3 > '2.6' && communityMealsJunContents.kpi3 <= '3.466666667')?'orange':(communityMealsJunContents.kpi3 > '3.466666667' && communityMealsJunContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsJunContents.kpi3 >= '4.333333333' && communityMealsJunContents.kpi3 < '5.2')?'green':(communityMealsJunContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsJunContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJunContents.kpi4 == null)?'grey-2':(communityMealsJunContents.kpi4 >= '0' && communityMealsJunContents.kpi4 <= '384.2')?'red':(communityMealsJunContents.kpi4 > '384.2' && communityMealsJunContents.kpi4 <= '512.2666667')?'orange':(communityMealsJunContents.kpi4 > '512.2666667' && communityMealsJunContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsJunContents.kpi4 >= '640.3333333' && communityMealsJunContents.kpi4 < '768.4')?'green':(communityMealsJunContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsJunContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsJulContents.kpi1 == null)?'grey-2':(communityMealsJulContents.kpi1 >= '0' && communityMealsJulContents.kpi1 <= '9.8')?'red':(communityMealsJulContents.kpi1 > '9.8' && communityMealsJulContents.kpi1 <= '13.06666667')?'orange':(communityMealsJulContents.kpi1 > '13.06666667' && communityMealsJulContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsJulContents.kpi1 >= '16.33333333' && communityMealsJulContents.kpi1 < '19.6')?'green':(communityMealsJulContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJulContents.kpi2 == null)?'grey-2':(communityMealsJulContents.kpi2 >= '0' && communityMealsJulContents.kpi2 <= '90')?'red':(communityMealsJulContents.kpi2 > '90' && communityMealsJulContents.kpi2 <= '120')?'orange':(communityMealsJulContents.kpi2 > '120' && communityMealsJulContents.kpi2 < '150')?'yellow-7':(communityMealsJulContents.kpi2 >= '150' && communityMealsJulContents.kpi2 < '180')?'green':(communityMealsJulContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJulContents.kpi3 == null)?'grey-2':(communityMealsJulContents.kpi3 >= '0' && communityMealsJulContents.kpi3 <= '2.6')?'red':(communityMealsJulContents.kpi3 > '2.6' && communityMealsJulContents.kpi3 <= '3.466666667')?'orange':(communityMealsJulContents.kpi3 > '3.466666667' && communityMealsJulContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsJulContents.kpi3 >= '4.333333333' && communityMealsJulContents.kpi3 < '5.2')?'green':(communityMealsJulContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsJulContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJulContents.kpi4 == null)?'grey-2':(communityMealsJulContents.kpi4 >= '0' && communityMealsJulContents.kpi4 <= '384.2')?'red':(communityMealsJulContents.kpi4 > '384.2' && communityMealsJulContents.kpi4 <= '512.2666667')?'orange':(communityMealsJulContents.kpi4 > '512.2666667' && communityMealsJulContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsJulContents.kpi4 >= '640.3333333' && communityMealsJulContents.kpi4 < '768.4')?'green':(communityMealsJulContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsJulContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsAugContents.kpi1 == null)?'grey-2':(communityMealsAugContents.kpi1 >= '0' && communityMealsAugContents.kpi1 <= '9.8')?'red':(communityMealsAugContents.kpi1 > '9.8' && communityMealsAugContents.kpi1 <= '13.06666667')?'orange':(communityMealsAugContents.kpi1 > '13.06666667' && communityMealsAugContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsAugContents.kpi1 >= '16.33333333' && communityMealsAugContents.kpi1 < '19.6')?'green':(communityMealsAugContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAugContents.kpi2 == null)?'grey-2':(communityMealsAugContents.kpi2 >= '0' && communityMealsAugContents.kpi2 <= '90')?'red':(communityMealsAugContents.kpi2 > '90' && communityMealsAugContents.kpi2 <= '120')?'orange':(communityMealsAugContents.kpi2 > '120' && communityMealsAugContents.kpi2 < '150')?'yellow-7':(communityMealsAugContents.kpi2 >= '150' && communityMealsAugContents.kpi2 < '180')?'green':(communityMealsAugContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAugContents.kpi3 == null)?'grey-2':(communityMealsAugContents.kpi3 >= '0' && communityMealsAugContents.kpi3 <= '2.6')?'red':(communityMealsAugContents.kpi3 > '2.6' && communityMealsAugContents.kpi3 <= '3.466666667')?'orange':(communityMealsAugContents.kpi3 > '3.466666667' && communityMealsAugContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsAugContents.kpi3 >= '4.333333333' && communityMealsAugContents.kpi3 < '5.2')?'green':(communityMealsAugContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsAugContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAugContents.kpi4 == null)?'grey-2':(communityMealsAugContents.kpi4 >= '0' && communityMealsAugContents.kpi4 <= '384.2')?'red':(communityMealsAugContents.kpi4 > '384.2' && communityMealsAugContents.kpi4 <= '512.2666667')?'orange':(communityMealsAugContents.kpi4 > '512.2666667' && communityMealsAugContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsAugContents.kpi4 >= '640.3333333' && communityMealsAugContents.kpi4 < '768.4')?'green':(communityMealsAugContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsAugContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsSepContents.kpi1 == null)?'grey-2':(communityMealsSepContents.kpi1 >= '0' && communityMealsSepContents.kpi1 <= '9.8')?'red':(communityMealsSepContents.kpi1 > '9.8' && communityMealsSepContents.kpi1 <= '13.06666667')?'orange':(communityMealsSepContents.kpi1 > '13.06666667' && communityMealsSepContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsSepContents.kpi1 >= '16.33333333' && communityMealsSepContents.kpi1 < '19.6')?'green':(communityMealsSepContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsSepContents.kpi2 == null)?'grey-2':(communityMealsSepContents.kpi2 >= '0' && communityMealsSepContents.kpi2 <= '90')?'red':(communityMealsSepContents.kpi2 > '90' && communityMealsSepContents.kpi2 <= '120')?'orange':(communityMealsSepContents.kpi2 > '120' && communityMealsSepContents.kpi2 < '150')?'yellow-7':(communityMealsSepContents.kpi2 >= '150' && communityMealsSepContents.kpi2 < '180')?'green':(communityMealsSepContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsSepContents.kpi3 == null)?'grey-2':(communityMealsSepContents.kpi3 >= '0' && communityMealsSepContents.kpi3 <= '2.6')?'red':(communityMealsSepContents.kpi3 > '2.6' && communityMealsSepContents.kpi3 <= '3.466666667')?'orange':(communityMealsSepContents.kpi3 > '3.466666667' && communityMealsSepContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsSepContents.kpi3 >= '4.333333333' && communityMealsSepContents.kpi3 < '5.2')?'green':(communityMealsSepContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsSepContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsSepContents.kpi4 == null)?'grey-2':(communityMealsSepContents.kpi4 >= '0' && communityMealsSepContents.kpi4 <= '384.2')?'red':(communityMealsSepContents.kpi4 > '384.2' && communityMealsSepContents.kpi4 <= '512.2666667')?'orange':(communityMealsSepContents.kpi4 > '512.2666667' && communityMealsSepContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsSepContents.kpi4 >= '640.3333333' && communityMealsSepContents.kpi4 < '768.4')?'green':(communityMealsSepContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsSepContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsOctContents.kpi1 == null)?'grey-2':(communityMealsOctContents.kpi1 >= '0' && communityMealsOctContents.kpi1 <= '9.8')?'red':(communityMealsOctContents.kpi1 > '9.8' && communityMealsOctContents.kpi1 <= '13.06666667')?'orange':(communityMealsOctContents.kpi1 > '13.06666667' && communityMealsOctContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsOctContents.kpi1 >= '16.33333333' && communityMealsOctContents.kpi1 < '19.6')?'green':(communityMealsOctContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsOctContents.kpi2 == null)?'grey-2':(communityMealsOctContents.kpi2 >= '0' && communityMealsOctContents.kpi2 <= '90')?'red':(communityMealsOctContents.kpi2 > '90' && communityMealsOctContents.kpi2 <= '120')?'orange':(communityMealsOctContents.kpi2 > '120' && communityMealsOctContents.kpi2 < '150')?'yellow-7':(communityMealsOctContents.kpi2 >= '150' && communityMealsOctContents.kpi2 < '180')?'green':(communityMealsOctContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsOctContents.kpi3 == null)?'grey-2':(communityMealsOctContents.kpi3 >= '0' && communityMealsOctContents.kpi3 <= '2.6')?'red':(communityMealsOctContents.kpi3 > '2.6' && communityMealsOctContents.kpi3 <= '3.466666667')?'orange':(communityMealsOctContents.kpi3 > '3.466666667' && communityMealsOctContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsOctContents.kpi3 >= '4.333333333' && communityMealsOctContents.kpi3 < '5.2')?'green':(communityMealsOctContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsOctContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsOctContents.kpi4 == null)?'grey-2':(communityMealsOctContents.kpi4 >= '0' && communityMealsOctContents.kpi4 <= '384.2')?'red':(communityMealsOctContents.kpi4 > '384.2' && communityMealsOctContents.kpi4 <= '512.2666667')?'orange':(communityMealsOctContents.kpi4 > '512.2666667' && communityMealsOctContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsOctContents.kpi4 >= '640.3333333' && communityMealsOctContents.kpi4 < '768.4')?'green':(communityMealsOctContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsOctContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsNovContents.kpi1 == null)?'grey-2':(communityMealsNovContents.kpi1 >= '0' && communityMealsNovContents.kpi1 <= '9.8')?'red':(communityMealsNovContents.kpi1 > '9.8' && communityMealsNovContents.kpi1 <= '13.06666667')?'orange':(communityMealsNovContents.kpi1 > '13.06666667' && communityMealsNovContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsNovContents.kpi1 >= '16.33333333' && communityMealsNovContents.kpi1 < '19.6')?'green':(communityMealsNovContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsNovContents.kpi2 == null)?'grey-2':(communityMealsNovContents.kpi2 >= '0' && communityMealsNovContents.kpi2 <= '90')?'red':(communityMealsNovContents.kpi2 > '90' && communityMealsNovContents.kpi2 <= '120')?'orange':(communityMealsNovContents.kpi2 > '120' && communityMealsNovContents.kpi2 < '150')?'yellow-7':(communityMealsNovContents.kpi2 >= '150' && communityMealsNovContents.kpi2 < '180')?'green':(communityMealsNovContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsNovContents.kpi3 == null)?'grey-2':(communityMealsNovContents.kpi3 >= '0' && communityMealsNovContents.kpi3 <= '2.6')?'red':(communityMealsNovContents.kpi3 > '2.6' && communityMealsNovContents.kpi3 <= '3.466666667')?'orange':(communityMealsNovContents.kpi3 > '3.466666667' && communityMealsNovContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsNovContents.kpi3 >= '4.333333333' && communityMealsNovContents.kpi3 < '5.2')?'green':(communityMealsNovContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsNovContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsNovContents.kpi4 == null)?'grey-2':(communityMealsNovContents.kpi4 >= '0' && communityMealsNovContents.kpi4 <= '384.2')?'red':(communityMealsNovContents.kpi4 > '384.2' && communityMealsNovContents.kpi4 <= '512.2666667')?'orange':(communityMealsNovContents.kpi4 > '512.2666667' && communityMealsNovContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsNovContents.kpi4 >= '640.3333333' && communityMealsNovContents.kpi4 < '768.4')?'green':(communityMealsNovContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsNovContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsDecContents.kpi1 == null)?'grey-2':(communityMealsDecContents.kpi1 >= '0' && communityMealsDecContents.kpi1 <= '9.8')?'red':(communityMealsDecContents.kpi1 > '9.8' && communityMealsDecContents.kpi1 <= '13.06666667')?'orange':(communityMealsDecContents.kpi1 > '13.06666667' && communityMealsDecContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsDecContents.kpi1 >= '16.33333333' && communityMealsDecContents.kpi1 < '19.6')?'green':(communityMealsDecContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsDecContents.kpi2 == null)?'grey-2':(communityMealsDecContents.kpi2 >= '0' && communityMealsDecContents.kpi2 <= '90')?'red':(communityMealsDecContents.kpi2 > '90' && communityMealsDecContents.kpi2 <= '120')?'orange':(communityMealsDecContents.kpi2 > '120' && communityMealsDecContents.kpi2 < '150')?'yellow-7':(communityMealsDecContents.kpi2 >= '150' && communityMealsDecContents.kpi2 < '180')?'green':(communityMealsDecContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsDecContents.kpi3 == null)?'grey-2':(communityMealsDecContents.kpi3 >= '0' && communityMealsDecContents.kpi3 <= '2.6')?'red':(communityMealsDecContents.kpi3 > '2.6' && communityMealsDecContents.kpi3 <= '3.466666667')?'orange':(communityMealsDecContents.kpi3 > '3.466666667' && communityMealsDecContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsDecContents.kpi3 >= '4.333333333' && communityMealsDecContents.kpi3 < '5.2')?'green':(communityMealsDecContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsDecContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsDecContents.kpi4 == null)?'grey-2':(communityMealsDecContents.kpi4 >= '0' && communityMealsDecContents.kpi4 <= '384.2')?'red':(communityMealsDecContents.kpi4 > '384.2' && communityMealsDecContents.kpi4 <= '512.2666667')?'orange':(communityMealsDecContents.kpi4 > '512.2666667' && communityMealsDecContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsDecContents.kpi4 >= '640.3333333' && communityMealsDecContents.kpi4 < '768.4')?'green':(communityMealsDecContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsDecContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                                <q-tooltip>Activities (#)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsJanContents.kpi1 == null)?'grey-2':(communityMealsJanContents.kpi1 >= '0' && communityMealsJanContents.kpi1 <= '9.8')?'red':(communityMealsJanContents.kpi1 > '9.8' && communityMealsJanContents.kpi1 <= '13.06666667')?'orange':(communityMealsJanContents.kpi1 > '13.06666667' && communityMealsJanContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsJanContents.kpi1 >= '16.33333333' && communityMealsJanContents.kpi1 < '19.6')?'green':(communityMealsJanContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJanContents.kpi2 == null)?'grey-2':(communityMealsJanContents.kpi2 >= '0' && communityMealsJanContents.kpi2 <= '90')?'red':(communityMealsJanContents.kpi2 > '90' && communityMealsJanContents.kpi2 <= '120')?'orange':(communityMealsJanContents.kpi2 > '120' && communityMealsJanContents.kpi2 < '150')?'yellow-7':(communityMealsJanContents.kpi2 >= '150' && communityMealsJanContents.kpi2 < '180')?'green':(communityMealsJanContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJanContents.kpi3 == null)?'grey-2':(communityMealsJanContents.kpi3 >= '0' && communityMealsJanContents.kpi3 <= '2.6')?'red':(communityMealsJanContents.kpi3 > '2.6' && communityMealsJanContents.kpi3 <= '3.466666667')?'orange':(communityMealsJanContents.kpi3 > '3.466666667' && communityMealsJanContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsJanContents.kpi3 >= '4.333333333' && communityMealsJanContents.kpi3 < '5.2')?'green':(communityMealsJanContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsJanContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJanContents.kpi4 == null)?'grey-2':(communityMealsJanContents.kpi4 >= '0' && communityMealsJanContents.kpi4 <= '384.2')?'red':(communityMealsJanContents.kpi4 > '384.2' && communityMealsJanContents.kpi4 <= '512.2666667')?'orange':(communityMealsJanContents.kpi4 > '512.2666667' && communityMealsJanContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsJanContents.kpi4 >= '640.3333333' && communityMealsJanContents.kpi4 < '768.4')?'green':(communityMealsJanContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsJanContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsFebContents.kpi1 == null)?'grey-2':(communityMealsFebContents.kpi1 >= '0' && communityMealsFebContents.kpi1 <= '9.8')?'red':(communityMealsFebContents.kpi1 > '9.8' && communityMealsFebContents.kpi1 <= '13.06666667')?'orange':(communityMealsFebContents.kpi1 > '13.06666667' && communityMealsFebContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsFebContents.kpi1 >= '16.33333333' && communityMealsFebContents.kpi1 < '19.6')?'green':(communityMealsFebContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsFebContents.kpi2 == null)?'grey-2':(communityMealsFebContents.kpi2 >= '0' && communityMealsFebContents.kpi2 <= '90')?'red':(communityMealsFebContents.kpi2 > '90' && communityMealsFebContents.kpi2 <= '120')?'orange':(communityMealsFebContents.kpi2 > '120' && communityMealsFebContents.kpi2 < '150')?'yellow-7':(communityMealsFebContents.kpi2 >= '150' && communityMealsFebContents.kpi2 < '180')?'green':(communityMealsFebContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsFebContents.kpi3 == null)?'grey-2':(communityMealsFebContents.kpi3 >= '0' && communityMealsFebContents.kpi3 <= '2.6')?'red':(communityMealsFebContents.kpi3 > '2.6' && communityMealsFebContents.kpi3 <= '3.466666667')?'orange':(communityMealsFebContents.kpi3 > '3.466666667' && communityMealsFebContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsFebContents.kpi3 >= '4.333333333' && communityMealsFebContents.kpi3 < '5.2')?'green':(communityMealsFebContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsFebContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsFebContents.kpi4 == null)?'grey-2':(communityMealsFebContents.kpi4 >= '0' && communityMealsFebContents.kpi4 <= '384.2')?'red':(communityMealsFebContents.kpi4 > '384.2' && communityMealsFebContents.kpi4 <= '512.2666667')?'orange':(communityMealsFebContents.kpi4 > '512.2666667' && communityMealsFebContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsFebContents.kpi4 >= '640.3333333' && communityMealsFebContents.kpi4 < '768.4')?'green':(communityMealsFebContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsFebContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsMarContents.kpi1 == null)?'grey-2':(communityMealsMarContents.kpi1 >= '0' && communityMealsMarContents.kpi1 <= '9.8')?'red':(communityMealsMarContents.kpi1 > '9.8' && communityMealsMarContents.kpi1 <= '13.06666667')?'orange':(communityMealsMarContents.kpi1 > '13.06666667' && communityMealsMarContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsMarContents.kpi1 >= '16.33333333' && communityMealsMarContents.kpi1 < '19.6')?'green':(communityMealsMarContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMarContents.kpi2 == null)?'grey-2':(communityMealsMarContents.kpi2 >= '0' && communityMealsMarContents.kpi2 <= '90')?'red':(communityMealsMarContents.kpi2 > '90' && communityMealsMarContents.kpi2 <= '120')?'orange':(communityMealsMarContents.kpi2 > '120' && communityMealsMarContents.kpi2 < '150')?'yellow-7':(communityMealsMarContents.kpi2 >= '150' && communityMealsMarContents.kpi2 < '180')?'green':(communityMealsMarContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMarContents.kpi3 == null)?'grey-2':(communityMealsMarContents.kpi3 >= '0' && communityMealsMarContents.kpi3 <= '2.6')?'red':(communityMealsMarContents.kpi3 > '2.6' && communityMealsMarContents.kpi3 <= '3.466666667')?'orange':(communityMealsMarContents.kpi3 > '3.466666667' && communityMealsMarContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsMarContents.kpi3 >= '4.333333333' && communityMealsMarContents.kpi3 < '5.2')?'green':(communityMealsMarContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsMarContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMarContents.kpi4 == null)?'grey-2':(communityMealsMarContents.kpi4 >= '0' && communityMealsMarContents.kpi4 <= '384.2')?'red':(communityMealsMarContents.kpi4 > '384.2' && communityMealsMarContents.kpi4 <= '512.2666667')?'orange':(communityMealsMarContents.kpi4 > '512.2666667' && communityMealsMarContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsMarContents.kpi4 >= '640.3333333' && communityMealsMarContents.kpi4 < '768.4')?'green':(communityMealsMarContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsMarContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsAprContents.kpi1 == null)?'grey-2':(communityMealsAprContents.kpi1 >= '0' && communityMealsAprContents.kpi1 <= '9.8')?'red':(communityMealsAprContents.kpi1 > '9.8' && communityMealsAprContents.kpi1 <= '13.06666667')?'orange':(communityMealsAprContents.kpi1 > '13.06666667' && communityMealsAprContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsAprContents.kpi1 >= '16.33333333' && communityMealsAprContents.kpi1 < '19.6')?'green':(communityMealsAprContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAprContents.kpi2 == null)?'grey-2':(communityMealsAprContents.kpi2 >= '0' && communityMealsAprContents.kpi2 <= '90')?'red':(communityMealsAprContents.kpi2 > '90' && communityMealsAprContents.kpi2 <= '120')?'orange':(communityMealsAprContents.kpi2 > '120' && communityMealsAprContents.kpi2 < '150')?'yellow-7':(communityMealsAprContents.kpi2 >= '150' && communityMealsAprContents.kpi2 < '180')?'green':(communityMealsAprContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAprContents.kpi3 == null)?'grey-2':(communityMealsAprContents.kpi3 >= '0' && communityMealsAprContents.kpi3 <= '2.6')?'red':(communityMealsAprContents.kpi3 > '2.6' && communityMealsAprContents.kpi3 <= '3.466666667')?'orange':(communityMealsAprContents.kpi3 > '3.466666667' && communityMealsAprContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsAprContents.kpi3 >= '4.333333333' && communityMealsAprContents.kpi3 < '5.2')?'green':(communityMealsAprContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsAprContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAprContents.kpi4 == null)?'grey-2':(communityMealsAprContents.kpi4 >= '0' && communityMealsAprContents.kpi4 <= '384.2')?'red':(communityMealsAprContents.kpi4 > '384.2' && communityMealsAprContents.kpi4 <= '512.2666667')?'orange':(communityMealsAprContents.kpi4 > '512.2666667' && communityMealsAprContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsAprContents.kpi4 >= '640.3333333' && communityMealsAprContents.kpi4 < '768.4')?'green':(communityMealsAprContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsAprContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsMayContents.kpi1 == null)?'grey-2':(communityMealsMayContents.kpi1 >= '0' && communityMealsMayContents.kpi1 <= '9.8')?'red':(communityMealsMayContents.kpi1 > '9.8' && communityMealsMayContents.kpi1 <= '13.06666667')?'orange':(communityMealsMayContents.kpi1 > '13.06666667' && communityMealsMayContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsMayContents.kpi1 >= '16.33333333' && communityMealsMayContents.kpi1 < '19.6')?'green':(communityMealsMayContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMayContents.kpi2 == null)?'grey-2':(communityMealsMayContents.kpi2 >= '0' && communityMealsMayContents.kpi2 <= '90')?'red':(communityMealsMayContents.kpi2 > '90' && communityMealsMayContents.kpi2 <= '120')?'orange':(communityMealsMayContents.kpi2 > '120' && communityMealsMayContents.kpi2 < '150')?'yellow-7':(communityMealsMayContents.kpi2 >= '150' && communityMealsMayContents.kpi2 < '180')?'green':(communityMealsMayContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMayContents.kpi3 == null)?'grey-2':(communityMealsMayContents.kpi3 >= '0' && communityMealsMayContents.kpi3 <= '2.6')?'red':(communityMealsMayContents.kpi3 > '2.6' && communityMealsMayContents.kpi3 <= '3.466666667')?'orange':(communityMealsMayContents.kpi3 > '3.466666667' && communityMealsMayContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsMayContents.kpi3 >= '4.333333333' && communityMealsMayContents.kpi3 < '5.2')?'green':(communityMealsMayContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsMayContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMayContents.kpi4 == null)?'grey-2':(communityMealsMayContents.kpi4 >= '0' && communityMealsMayContents.kpi4 <= '384.2')?'red':(communityMealsMayContents.kpi4 > '384.2' && communityMealsMayContents.kpi4 <= '512.2666667')?'orange':(communityMealsMayContents.kpi4 > '512.2666667' && communityMealsMayContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsMayContents.kpi4 >= '640.3333333' && communityMealsMayContents.kpi4 < '768.4')?'green':(communityMealsMayContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsMayContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsJunContents.kpi1 == null)?'grey-2':(communityMealsJunContents.kpi1 >= '0' && communityMealsJunContents.kpi1 <= '9.8')?'red':(communityMealsJunContents.kpi1 > '9.8' && communityMealsJunContents.kpi1 <= '13.06666667')?'orange':(communityMealsJunContents.kpi1 > '13.06666667' && communityMealsJunContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsJunContents.kpi1 >= '16.33333333' && communityMealsJunContents.kpi1 < '19.6')?'green':(communityMealsJunContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJunContents.kpi2 == null)?'grey-2':(communityMealsJunContents.kpi2 >= '0' && communityMealsJunContents.kpi2 <= '90')?'red':(communityMealsJunContents.kpi2 > '90' && communityMealsJunContents.kpi2 <= '120')?'orange':(communityMealsJunContents.kpi2 > '120' && communityMealsJunContents.kpi2 < '150')?'yellow-7':(communityMealsJunContents.kpi2 >= '150' && communityMealsJunContents.kpi2 < '180')?'green':(communityMealsJunContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJunContents.kpi3 == null)?'grey-2':(communityMealsJunContents.kpi3 >= '0' && communityMealsJunContents.kpi3 <= '2.6')?'red':(communityMealsJunContents.kpi3 > '2.6' && communityMealsJunContents.kpi3 <= '3.466666667')?'orange':(communityMealsJunContents.kpi3 > '3.466666667' && communityMealsJunContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsJunContents.kpi3 >= '4.333333333' && communityMealsJunContents.kpi3 < '5.2')?'green':(communityMealsJunContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsJunContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJunContents.kpi4 == null)?'grey-2':(communityMealsJunContents.kpi4 >= '0' && communityMealsJunContents.kpi4 <= '384.2')?'red':(communityMealsJunContents.kpi4 > '384.2' && communityMealsJunContents.kpi4 <= '512.2666667')?'orange':(communityMealsJunContents.kpi4 > '512.2666667' && communityMealsJunContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsJunContents.kpi4 >= '640.3333333' && communityMealsJunContents.kpi4 < '768.4')?'green':(communityMealsJunContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsJunContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsJulContents.kpi1 == null)?'grey-2':(communityMealsJulContents.kpi1 >= '0' && communityMealsJulContents.kpi1 <= '9.8')?'red':(communityMealsJulContents.kpi1 > '9.8' && communityMealsJulContents.kpi1 <= '13.06666667')?'orange':(communityMealsJulContents.kpi1 > '13.06666667' && communityMealsJulContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsJulContents.kpi1 >= '16.33333333' && communityMealsJulContents.kpi1 < '19.6')?'green':(communityMealsJulContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJulContents.kpi2 == null)?'grey-2':(communityMealsJulContents.kpi2 >= '0' && communityMealsJulContents.kpi2 <= '90')?'red':(communityMealsJulContents.kpi2 > '90' && communityMealsJulContents.kpi2 <= '120')?'orange':(communityMealsJulContents.kpi2 > '120' && communityMealsJulContents.kpi2 < '150')?'yellow-7':(communityMealsJulContents.kpi2 >= '150' && communityMealsJulContents.kpi2 < '180')?'green':(communityMealsJulContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJulContents.kpi3 == null)?'grey-2':(communityMealsJulContents.kpi3 >= '0' && communityMealsJulContents.kpi3 <= '2.6')?'red':(communityMealsJulContents.kpi3 > '2.6' && communityMealsJulContents.kpi3 <= '3.466666667')?'orange':(communityMealsJulContents.kpi3 > '3.466666667' && communityMealsJulContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsJulContents.kpi3 >= '4.333333333' && communityMealsJulContents.kpi3 < '5.2')?'green':(communityMealsJulContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsJulContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJulContents.kpi4 == null)?'grey-2':(communityMealsJulContents.kpi4 >= '0' && communityMealsJulContents.kpi4 <= '384.2')?'red':(communityMealsJulContents.kpi4 > '384.2' && communityMealsJulContents.kpi4 <= '512.2666667')?'orange':(communityMealsJulContents.kpi4 > '512.2666667' && communityMealsJulContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsJulContents.kpi4 >= '640.3333333' && communityMealsJulContents.kpi4 < '768.4')?'green':(communityMealsJulContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsJulContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsAugContents.kpi1 == null)?'grey-2':(communityMealsAugContents.kpi1 >= '0' && communityMealsAugContents.kpi1 <= '9.8')?'red':(communityMealsAugContents.kpi1 > '9.8' && communityMealsAugContents.kpi1 <= '13.06666667')?'orange':(communityMealsAugContents.kpi1 > '13.06666667' && communityMealsAugContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsAugContents.kpi1 >= '16.33333333' && communityMealsAugContents.kpi1 < '19.6')?'green':(communityMealsAugContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAugContents.kpi2 == null)?'grey-2':(communityMealsAugContents.kpi2 >= '0' && communityMealsAugContents.kpi2 <= '90')?'red':(communityMealsAugContents.kpi2 > '90' && communityMealsAugContents.kpi2 <= '120')?'orange':(communityMealsAugContents.kpi2 > '120' && communityMealsAugContents.kpi2 < '150')?'yellow-7':(communityMealsAugContents.kpi2 >= '150' && communityMealsAugContents.kpi2 < '180')?'green':(communityMealsAugContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAugContents.kpi3 == null)?'grey-2':(communityMealsAugContents.kpi3 >= '0' && communityMealsAugContents.kpi3 <= '2.6')?'red':(communityMealsAugContents.kpi3 > '2.6' && communityMealsAugContents.kpi3 <= '3.466666667')?'orange':(communityMealsAugContents.kpi3 > '3.466666667' && communityMealsAugContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsAugContents.kpi3 >= '4.333333333' && communityMealsAugContents.kpi3 < '5.2')?'green':(communityMealsAugContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsAugContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAugContents.kpi4 == null)?'grey-2':(communityMealsAugContents.kpi4 >= '0' && communityMealsAugContents.kpi4 <= '384.2')?'red':(communityMealsAugContents.kpi4 > '384.2' && communityMealsAugContents.kpi4 <= '512.2666667')?'orange':(communityMealsAugContents.kpi4 > '512.2666667' && communityMealsAugContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsAugContents.kpi4 >= '640.3333333' && communityMealsAugContents.kpi4 < '768.4')?'green':(communityMealsAugContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsAugContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsSepContents.kpi1 == null)?'grey-2':(communityMealsSepContents.kpi1 >= '0' && communityMealsSepContents.kpi1 <= '9.8')?'red':(communityMealsSepContents.kpi1 > '9.8' && communityMealsSepContents.kpi1 <= '13.06666667')?'orange':(communityMealsSepContents.kpi1 > '13.06666667' && communityMealsSepContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsSepContents.kpi1 >= '16.33333333' && communityMealsSepContents.kpi1 < '19.6')?'green':(communityMealsSepContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsSepContents.kpi2 == null)?'grey-2':(communityMealsSepContents.kpi2 >= '0' && communityMealsSepContents.kpi2 <= '90')?'red':(communityMealsSepContents.kpi2 > '90' && communityMealsSepContents.kpi2 <= '120')?'orange':(communityMealsSepContents.kpi2 > '120' && communityMealsSepContents.kpi2 < '150')?'yellow-7':(communityMealsSepContents.kpi2 >= '150' && communityMealsSepContents.kpi2 < '180')?'green':(communityMealsSepContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsSepContents.kpi3 == null)?'grey-2':(communityMealsSepContents.kpi3 >= '0' && communityMealsSepContents.kpi3 <= '2.6')?'red':(communityMealsSepContents.kpi3 > '2.6' && communityMealsSepContents.kpi3 <= '3.466666667')?'orange':(communityMealsSepContents.kpi3 > '3.466666667' && communityMealsSepContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsSepContents.kpi3 >= '4.333333333' && communityMealsSepContents.kpi3 < '5.2')?'green':(communityMealsSepContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsSepContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsSepContents.kpi4 == null)?'grey-2':(communityMealsSepContents.kpi4 >= '0' && communityMealsSepContents.kpi4 <= '384.2')?'red':(communityMealsSepContents.kpi4 > '384.2' && communityMealsSepContents.kpi4 <= '512.2666667')?'orange':(communityMealsSepContents.kpi4 > '512.2666667' && communityMealsSepContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsSepContents.kpi4 >= '640.3333333' && communityMealsSepContents.kpi4 < '768.4')?'green':(communityMealsSepContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsSepContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsOctContents.kpi1 == null)?'grey-2':(communityMealsOctContents.kpi1 >= '0' && communityMealsOctContents.kpi1 <= '9.8')?'red':(communityMealsOctContents.kpi1 > '9.8' && communityMealsOctContents.kpi1 <= '13.06666667')?'orange':(communityMealsOctContents.kpi1 > '13.06666667' && communityMealsOctContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsOctContents.kpi1 >= '16.33333333' && communityMealsOctContents.kpi1 < '19.6')?'green':(communityMealsOctContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsOctContents.kpi2 == null)?'grey-2':(communityMealsOctContents.kpi2 >= '0' && communityMealsOctContents.kpi2 <= '90')?'red':(communityMealsOctContents.kpi2 > '90' && communityMealsOctContents.kpi2 <= '120')?'orange':(communityMealsOctContents.kpi2 > '120' && communityMealsOctContents.kpi2 < '150')?'yellow-7':(communityMealsOctContents.kpi2 >= '150' && communityMealsOctContents.kpi2 < '180')?'green':(communityMealsOctContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsOctContents.kpi3 == null)?'grey-2':(communityMealsOctContents.kpi3 >= '0' && communityMealsOctContents.kpi3 <= '2.6')?'red':(communityMealsOctContents.kpi3 > '2.6' && communityMealsOctContents.kpi3 <= '3.466666667')?'orange':(communityMealsOctContents.kpi3 > '3.466666667' && communityMealsOctContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsOctContents.kpi3 >= '4.333333333' && communityMealsOctContents.kpi3 < '5.2')?'green':(communityMealsOctContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsOctContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsOctContents.kpi4 == null)?'grey-2':(communityMealsOctContents.kpi4 >= '0' && communityMealsOctContents.kpi4 <= '384.2')?'red':(communityMealsOctContents.kpi4 > '384.2' && communityMealsOctContents.kpi4 <= '512.2666667')?'orange':(communityMealsOctContents.kpi4 > '512.2666667' && communityMealsOctContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsOctContents.kpi4 >= '640.3333333' && communityMealsOctContents.kpi4 < '768.4')?'green':(communityMealsOctContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsOctContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsNovContents.kpi1 == null)?'grey-2':(communityMealsNovContents.kpi1 >= '0' && communityMealsNovContents.kpi1 <= '9.8')?'red':(communityMealsNovContents.kpi1 > '9.8' && communityMealsNovContents.kpi1 <= '13.06666667')?'orange':(communityMealsNovContents.kpi1 > '13.06666667' && communityMealsNovContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsNovContents.kpi1 >= '16.33333333' && communityMealsNovContents.kpi1 < '19.6')?'green':(communityMealsNovContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsNovContents.kpi2 == null)?'grey-2':(communityMealsNovContents.kpi2 >= '0' && communityMealsNovContents.kpi2 <= '90')?'red':(communityMealsNovContents.kpi2 > '90' && communityMealsNovContents.kpi2 <= '120')?'orange':(communityMealsNovContents.kpi2 > '120' && communityMealsNovContents.kpi2 < '150')?'yellow-7':(communityMealsNovContents.kpi2 >= '150' && communityMealsNovContents.kpi2 < '180')?'green':(communityMealsNovContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsNovContents.kpi3 == null)?'grey-2':(communityMealsNovContents.kpi3 >= '0' && communityMealsNovContents.kpi3 <= '2.6')?'red':(communityMealsNovContents.kpi3 > '2.6' && communityMealsNovContents.kpi3 <= '3.466666667')?'orange':(communityMealsNovContents.kpi3 > '3.466666667' && communityMealsNovContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsNovContents.kpi3 >= '4.333333333' && communityMealsNovContents.kpi3 < '5.2')?'green':(communityMealsNovContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsNovContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsNovContents.kpi4 == null)?'grey-2':(communityMealsNovContents.kpi4 >= '0' && communityMealsNovContents.kpi4 <= '384.2')?'red':(communityMealsNovContents.kpi4 > '384.2' && communityMealsNovContents.kpi4 <= '512.2666667')?'orange':(communityMealsNovContents.kpi4 > '512.2666667' && communityMealsNovContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsNovContents.kpi4 >= '640.3333333' && communityMealsNovContents.kpi4 < '768.4')?'green':(communityMealsNovContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsNovContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsDecContents.kpi1 == null)?'grey-2':(communityMealsDecContents.kpi1 >= '0' && communityMealsDecContents.kpi1 <= '9.8')?'red':(communityMealsDecContents.kpi1 > '9.8' && communityMealsDecContents.kpi1 <= '13.06666667')?'orange':(communityMealsDecContents.kpi1 > '13.06666667' && communityMealsDecContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsDecContents.kpi1 >= '16.33333333' && communityMealsDecContents.kpi1 < '19.6')?'green':(communityMealsDecContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsDecContents.kpi2 == null)?'grey-2':(communityMealsDecContents.kpi2 >= '0' && communityMealsDecContents.kpi2 <= '90')?'red':(communityMealsDecContents.kpi2 > '90' && communityMealsDecContents.kpi2 <= '120')?'orange':(communityMealsDecContents.kpi2 > '120' && communityMealsDecContents.kpi2 < '150')?'yellow-7':(communityMealsDecContents.kpi2 >= '150' && communityMealsDecContents.kpi2 < '180')?'green':(communityMealsDecContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsDecContents.kpi3 == null)?'grey-2':(communityMealsDecContents.kpi3 >= '0' && communityMealsDecContents.kpi3 <= '2.6')?'red':(communityMealsDecContents.kpi3 > '2.6' && communityMealsDecContents.kpi3 <= '3.466666667')?'orange':(communityMealsDecContents.kpi3 > '3.466666667' && communityMealsDecContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsDecContents.kpi3 >= '4.333333333' && communityMealsDecContents.kpi3 < '5.2')?'green':(communityMealsDecContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsDecContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsDecContents.kpi4 == null)?'grey-2':(communityMealsDecContents.kpi4 >= '0' && communityMealsDecContents.kpi4 <= '384.2')?'red':(communityMealsDecContents.kpi4 > '384.2' && communityMealsDecContents.kpi4 <= '512.2666667')?'orange':(communityMealsDecContents.kpi4 > '512.2666667' && communityMealsDecContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsDecContents.kpi4 >= '640.3333333' && communityMealsDecContents.kpi4 < '768.4')?'green':(communityMealsDecContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsDecContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                                <q-tooltip>Activities (#)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsJanContents.kpi1 == null)?'grey-2':(communityMealsJanContents.kpi1 >= '0' && communityMealsJanContents.kpi1 <= '9.8')?'red':(communityMealsJanContents.kpi1 > '9.8' && communityMealsJanContents.kpi1 <= '13.06666667')?'orange':(communityMealsJanContents.kpi1 > '13.06666667' && communityMealsJanContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsJanContents.kpi1 >= '16.33333333' && communityMealsJanContents.kpi1 < '19.6')?'green':(communityMealsJanContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJanContents.kpi2 == null)?'grey-2':(communityMealsJanContents.kpi2 >= '0' && communityMealsJanContents.kpi2 <= '90')?'red':(communityMealsJanContents.kpi2 > '90' && communityMealsJanContents.kpi2 <= '120')?'orange':(communityMealsJanContents.kpi2 > '120' && communityMealsJanContents.kpi2 < '150')?'yellow-7':(communityMealsJanContents.kpi2 >= '150' && communityMealsJanContents.kpi2 < '180')?'green':(communityMealsJanContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJanContents.kpi3 == null)?'grey-2':(communityMealsJanContents.kpi3 >= '0' && communityMealsJanContents.kpi3 <= '2.6')?'red':(communityMealsJanContents.kpi3 > '2.6' && communityMealsJanContents.kpi3 <= '3.466666667')?'orange':(communityMealsJanContents.kpi3 > '3.466666667' && communityMealsJanContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsJanContents.kpi3 >= '4.333333333' && communityMealsJanContents.kpi3 < '5.2')?'green':(communityMealsJanContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsJanContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJanContents.kpi4 == null)?'grey-2':(communityMealsJanContents.kpi4 >= '0' && communityMealsJanContents.kpi4 <= '384.2')?'red':(communityMealsJanContents.kpi4 > '384.2' && communityMealsJanContents.kpi4 <= '512.2666667')?'orange':(communityMealsJanContents.kpi4 > '512.2666667' && communityMealsJanContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsJanContents.kpi4 >= '640.3333333' && communityMealsJanContents.kpi4 < '768.4')?'green':(communityMealsJanContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsJanContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsFebContents.kpi1 == null)?'grey-2':(communityMealsFebContents.kpi1 >= '0' && communityMealsFebContents.kpi1 <= '9.8')?'red':(communityMealsFebContents.kpi1 > '9.8' && communityMealsFebContents.kpi1 <= '13.06666667')?'orange':(communityMealsFebContents.kpi1 > '13.06666667' && communityMealsFebContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsFebContents.kpi1 >= '16.33333333' && communityMealsFebContents.kpi1 < '19.6')?'green':(communityMealsFebContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsFebContents.kpi2 == null)?'grey-2':(communityMealsFebContents.kpi2 >= '0' && communityMealsFebContents.kpi2 <= '90')?'red':(communityMealsFebContents.kpi2 > '90' && communityMealsFebContents.kpi2 <= '120')?'orange':(communityMealsFebContents.kpi2 > '120' && communityMealsFebContents.kpi2 < '150')?'yellow-7':(communityMealsFebContents.kpi2 >= '150' && communityMealsFebContents.kpi2 < '180')?'green':(communityMealsFebContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsFebContents.kpi3 == null)?'grey-2':(communityMealsFebContents.kpi3 >= '0' && communityMealsFebContents.kpi3 <= '2.6')?'red':(communityMealsFebContents.kpi3 > '2.6' && communityMealsFebContents.kpi3 <= '3.466666667')?'orange':(communityMealsFebContents.kpi3 > '3.466666667' && communityMealsFebContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsFebContents.kpi3 >= '4.333333333' && communityMealsFebContents.kpi3 < '5.2')?'green':(communityMealsFebContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsFebContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsFebContents.kpi4 == null)?'grey-2':(communityMealsFebContents.kpi4 >= '0' && communityMealsFebContents.kpi4 <= '384.2')?'red':(communityMealsFebContents.kpi4 > '384.2' && communityMealsFebContents.kpi4 <= '512.2666667')?'orange':(communityMealsFebContents.kpi4 > '512.2666667' && communityMealsFebContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsFebContents.kpi4 >= '640.3333333' && communityMealsFebContents.kpi4 < '768.4')?'green':(communityMealsFebContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsFebContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsMarContents.kpi1 == null)?'grey-2':(communityMealsMarContents.kpi1 >= '0' && communityMealsMarContents.kpi1 <= '9.8')?'red':(communityMealsMarContents.kpi1 > '9.8' && communityMealsMarContents.kpi1 <= '13.06666667')?'orange':(communityMealsMarContents.kpi1 > '13.06666667' && communityMealsMarContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsMarContents.kpi1 >= '16.33333333' && communityMealsMarContents.kpi1 < '19.6')?'green':(communityMealsMarContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMarContents.kpi2 == null)?'grey-2':(communityMealsMarContents.kpi2 >= '0' && communityMealsMarContents.kpi2 <= '90')?'red':(communityMealsMarContents.kpi2 > '90' && communityMealsMarContents.kpi2 <= '120')?'orange':(communityMealsMarContents.kpi2 > '120' && communityMealsMarContents.kpi2 < '150')?'yellow-7':(communityMealsMarContents.kpi2 >= '150' && communityMealsMarContents.kpi2 < '180')?'green':(communityMealsMarContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMarContents.kpi3 == null)?'grey-2':(communityMealsMarContents.kpi3 >= '0' && communityMealsMarContents.kpi3 <= '2.6')?'red':(communityMealsMarContents.kpi3 > '2.6' && communityMealsMarContents.kpi3 <= '3.466666667')?'orange':(communityMealsMarContents.kpi3 > '3.466666667' && communityMealsMarContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsMarContents.kpi3 >= '4.333333333' && communityMealsMarContents.kpi3 < '5.2')?'green':(communityMealsMarContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsMarContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMarContents.kpi4 == null)?'grey-2':(communityMealsMarContents.kpi4 >= '0' && communityMealsMarContents.kpi4 <= '384.2')?'red':(communityMealsMarContents.kpi4 > '384.2' && communityMealsMarContents.kpi4 <= '512.2666667')?'orange':(communityMealsMarContents.kpi4 > '512.2666667' && communityMealsMarContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsMarContents.kpi4 >= '640.3333333' && communityMealsMarContents.kpi4 < '768.4')?'green':(communityMealsMarContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsMarContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsAprContents.kpi1 == null)?'grey-2':(communityMealsAprContents.kpi1 >= '0' && communityMealsAprContents.kpi1 <= '9.8')?'red':(communityMealsAprContents.kpi1 > '9.8' && communityMealsAprContents.kpi1 <= '13.06666667')?'orange':(communityMealsAprContents.kpi1 > '13.06666667' && communityMealsAprContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsAprContents.kpi1 >= '16.33333333' && communityMealsAprContents.kpi1 < '19.6')?'green':(communityMealsAprContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAprContents.kpi2 == null)?'grey-2':(communityMealsAprContents.kpi2 >= '0' && communityMealsAprContents.kpi2 <= '90')?'red':(communityMealsAprContents.kpi2 > '90' && communityMealsAprContents.kpi2 <= '120')?'orange':(communityMealsAprContents.kpi2 > '120' && communityMealsAprContents.kpi2 < '150')?'yellow-7':(communityMealsAprContents.kpi2 >= '150' && communityMealsAprContents.kpi2 < '180')?'green':(communityMealsAprContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAprContents.kpi3 == null)?'grey-2':(communityMealsAprContents.kpi3 >= '0' && communityMealsAprContents.kpi3 <= '2.6')?'red':(communityMealsAprContents.kpi3 > '2.6' && communityMealsAprContents.kpi3 <= '3.466666667')?'orange':(communityMealsAprContents.kpi3 > '3.466666667' && communityMealsAprContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsAprContents.kpi3 >= '4.333333333' && communityMealsAprContents.kpi3 < '5.2')?'green':(communityMealsAprContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsAprContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAprContents.kpi4 == null)?'grey-2':(communityMealsAprContents.kpi4 >= '0' && communityMealsAprContents.kpi4 <= '384.2')?'red':(communityMealsAprContents.kpi4 > '384.2' && communityMealsAprContents.kpi4 <= '512.2666667')?'orange':(communityMealsAprContents.kpi4 > '512.2666667' && communityMealsAprContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsAprContents.kpi4 >= '640.3333333' && communityMealsAprContents.kpi4 < '768.4')?'green':(communityMealsAprContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsAprContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsMayContents.kpi1 == null)?'grey-2':(communityMealsMayContents.kpi1 >= '0' && communityMealsMayContents.kpi1 <= '9.8')?'red':(communityMealsMayContents.kpi1 > '9.8' && communityMealsMayContents.kpi1 <= '13.06666667')?'orange':(communityMealsMayContents.kpi1 > '13.06666667' && communityMealsMayContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsMayContents.kpi1 >= '16.33333333' && communityMealsMayContents.kpi1 < '19.6')?'green':(communityMealsMayContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMayContents.kpi2 == null)?'grey-2':(communityMealsMayContents.kpi2 >= '0' && communityMealsMayContents.kpi2 <= '90')?'red':(communityMealsMayContents.kpi2 > '90' && communityMealsMayContents.kpi2 <= '120')?'orange':(communityMealsMayContents.kpi2 > '120' && communityMealsMayContents.kpi2 < '150')?'yellow-7':(communityMealsMayContents.kpi2 >= '150' && communityMealsMayContents.kpi2 < '180')?'green':(communityMealsMayContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMayContents.kpi3 == null)?'grey-2':(communityMealsMayContents.kpi3 >= '0' && communityMealsMayContents.kpi3 <= '2.6')?'red':(communityMealsMayContents.kpi3 > '2.6' && communityMealsMayContents.kpi3 <= '3.466666667')?'orange':(communityMealsMayContents.kpi3 > '3.466666667' && communityMealsMayContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsMayContents.kpi3 >= '4.333333333' && communityMealsMayContents.kpi3 < '5.2')?'green':(communityMealsMayContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsMayContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMayContents.kpi4 == null)?'grey-2':(communityMealsMayContents.kpi4 >= '0' && communityMealsMayContents.kpi4 <= '384.2')?'red':(communityMealsMayContents.kpi4 > '384.2' && communityMealsMayContents.kpi4 <= '512.2666667')?'orange':(communityMealsMayContents.kpi4 > '512.2666667' && communityMealsMayContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsMayContents.kpi4 >= '640.3333333' && communityMealsMayContents.kpi4 < '768.4')?'green':(communityMealsMayContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsMayContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsJunContents.kpi1 == null)?'grey-2':(communityMealsJunContents.kpi1 >= '0' && communityMealsJunContents.kpi1 <= '9.8')?'red':(communityMealsJunContents.kpi1 > '9.8' && communityMealsJunContents.kpi1 <= '13.06666667')?'orange':(communityMealsJunContents.kpi1 > '13.06666667' && communityMealsJunContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsJunContents.kpi1 >= '16.33333333' && communityMealsJunContents.kpi1 < '19.6')?'green':(communityMealsJunContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJunContents.kpi2 == null)?'grey-2':(communityMealsJunContents.kpi2 >= '0' && communityMealsJunContents.kpi2 <= '90')?'red':(communityMealsJunContents.kpi2 > '90' && communityMealsJunContents.kpi2 <= '120')?'orange':(communityMealsJunContents.kpi2 > '120' && communityMealsJunContents.kpi2 < '150')?'yellow-7':(communityMealsJunContents.kpi2 >= '150' && communityMealsJunContents.kpi2 < '180')?'green':(communityMealsJunContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJunContents.kpi3 == null)?'grey-2':(communityMealsJunContents.kpi3 >= '0' && communityMealsJunContents.kpi3 <= '2.6')?'red':(communityMealsJunContents.kpi3 > '2.6' && communityMealsJunContents.kpi3 <= '3.466666667')?'orange':(communityMealsJunContents.kpi3 > '3.466666667' && communityMealsJunContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsJunContents.kpi3 >= '4.333333333' && communityMealsJunContents.kpi3 < '5.2')?'green':(communityMealsJunContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsJunContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJunContents.kpi4 == null)?'grey-2':(communityMealsJunContents.kpi4 >= '0' && communityMealsJunContents.kpi4 <= '384.2')?'red':(communityMealsJunContents.kpi4 > '384.2' && communityMealsJunContents.kpi4 <= '512.2666667')?'orange':(communityMealsJunContents.kpi4 > '512.2666667' && communityMealsJunContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsJunContents.kpi4 >= '640.3333333' && communityMealsJunContents.kpi4 < '768.4')?'green':(communityMealsJunContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsJunContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsJulContents.kpi1 == null)?'grey-2':(communityMealsJulContents.kpi1 >= '0' && communityMealsJulContents.kpi1 <= '9.8')?'red':(communityMealsJulContents.kpi1 > '9.8' && communityMealsJulContents.kpi1 <= '13.06666667')?'orange':(communityMealsJulContents.kpi1 > '13.06666667' && communityMealsJulContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsJulContents.kpi1 >= '16.33333333' && communityMealsJulContents.kpi1 < '19.6')?'green':(communityMealsJulContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJulContents.kpi2 == null)?'grey-2':(communityMealsJulContents.kpi2 >= '0' && communityMealsJulContents.kpi2 <= '90')?'red':(communityMealsJulContents.kpi2 > '90' && communityMealsJulContents.kpi2 <= '120')?'orange':(communityMealsJulContents.kpi2 > '120' && communityMealsJulContents.kpi2 < '150')?'yellow-7':(communityMealsJulContents.kpi2 >= '150' && communityMealsJulContents.kpi2 < '180')?'green':(communityMealsJulContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJulContents.kpi3 == null)?'grey-2':(communityMealsJulContents.kpi3 >= '0' && communityMealsJulContents.kpi3 <= '2.6')?'red':(communityMealsJulContents.kpi3 > '2.6' && communityMealsJulContents.kpi3 <= '3.466666667')?'orange':(communityMealsJulContents.kpi3 > '3.466666667' && communityMealsJulContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsJulContents.kpi3 >= '4.333333333' && communityMealsJulContents.kpi3 < '5.2')?'green':(communityMealsJulContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsJulContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJulContents.kpi4 == null)?'grey-2':(communityMealsJulContents.kpi4 >= '0' && communityMealsJulContents.kpi4 <= '384.2')?'red':(communityMealsJulContents.kpi4 > '384.2' && communityMealsJulContents.kpi4 <= '512.2666667')?'orange':(communityMealsJulContents.kpi4 > '512.2666667' && communityMealsJulContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsJulContents.kpi4 >= '640.3333333' && communityMealsJulContents.kpi4 < '768.4')?'green':(communityMealsJulContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsJulContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsAugContents.kpi1 == null)?'grey-2':(communityMealsAugContents.kpi1 >= '0' && communityMealsAugContents.kpi1 <= '9.8')?'red':(communityMealsAugContents.kpi1 > '9.8' && communityMealsAugContents.kpi1 <= '13.06666667')?'orange':(communityMealsAugContents.kpi1 > '13.06666667' && communityMealsAugContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsAugContents.kpi1 >= '16.33333333' && communityMealsAugContents.kpi1 < '19.6')?'green':(communityMealsAugContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAugContents.kpi2 == null)?'grey-2':(communityMealsAugContents.kpi2 >= '0' && communityMealsAugContents.kpi2 <= '90')?'red':(communityMealsAugContents.kpi2 > '90' && communityMealsAugContents.kpi2 <= '120')?'orange':(communityMealsAugContents.kpi2 > '120' && communityMealsAugContents.kpi2 < '150')?'yellow-7':(communityMealsAugContents.kpi2 >= '150' && communityMealsAugContents.kpi2 < '180')?'green':(communityMealsAugContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAugContents.kpi3 == null)?'grey-2':(communityMealsAugContents.kpi3 >= '0' && communityMealsAugContents.kpi3 <= '2.6')?'red':(communityMealsAugContents.kpi3 > '2.6' && communityMealsAugContents.kpi3 <= '3.466666667')?'orange':(communityMealsAugContents.kpi3 > '3.466666667' && communityMealsAugContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsAugContents.kpi3 >= '4.333333333' && communityMealsAugContents.kpi3 < '5.2')?'green':(communityMealsAugContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsAugContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAugContents.kpi4 == null)?'grey-2':(communityMealsAugContents.kpi4 >= '0' && communityMealsAugContents.kpi4 <= '384.2')?'red':(communityMealsAugContents.kpi4 > '384.2' && communityMealsAugContents.kpi4 <= '512.2666667')?'orange':(communityMealsAugContents.kpi4 > '512.2666667' && communityMealsAugContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsAugContents.kpi4 >= '640.3333333' && communityMealsAugContents.kpi4 < '768.4')?'green':(communityMealsAugContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsAugContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsSepContents.kpi1 == null)?'grey-2':(communityMealsSepContents.kpi1 >= '0' && communityMealsSepContents.kpi1 <= '9.8')?'red':(communityMealsSepContents.kpi1 > '9.8' && communityMealsSepContents.kpi1 <= '13.06666667')?'orange':(communityMealsSepContents.kpi1 > '13.06666667' && communityMealsSepContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsSepContents.kpi1 >= '16.33333333' && communityMealsSepContents.kpi1 < '19.6')?'green':(communityMealsSepContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsSepContents.kpi2 == null)?'grey-2':(communityMealsSepContents.kpi2 >= '0' && communityMealsSepContents.kpi2 <= '90')?'red':(communityMealsSepContents.kpi2 > '90' && communityMealsSepContents.kpi2 <= '120')?'orange':(communityMealsSepContents.kpi2 > '120' && communityMealsSepContents.kpi2 < '150')?'yellow-7':(communityMealsSepContents.kpi2 >= '150' && communityMealsSepContents.kpi2 < '180')?'green':(communityMealsSepContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsSepContents.kpi3 == null)?'grey-2':(communityMealsSepContents.kpi3 >= '0' && communityMealsSepContents.kpi3 <= '2.6')?'red':(communityMealsSepContents.kpi3 > '2.6' && communityMealsSepContents.kpi3 <= '3.466666667')?'orange':(communityMealsSepContents.kpi3 > '3.466666667' && communityMealsSepContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsSepContents.kpi3 >= '4.333333333' && communityMealsSepContents.kpi3 < '5.2')?'green':(communityMealsSepContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsSepContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsSepContents.kpi4 == null)?'grey-2':(communityMealsSepContents.kpi4 >= '0' && communityMealsSepContents.kpi4 <= '384.2')?'red':(communityMealsSepContents.kpi4 > '384.2' && communityMealsSepContents.kpi4 <= '512.2666667')?'orange':(communityMealsSepContents.kpi4 > '512.2666667' && communityMealsSepContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsSepContents.kpi4 >= '640.3333333' && communityMealsSepContents.kpi4 < '768.4')?'green':(communityMealsSepContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsSepContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsOctContents.kpi1 == null)?'grey-2':(communityMealsOctContents.kpi1 >= '0' && communityMealsOctContents.kpi1 <= '9.8')?'red':(communityMealsOctContents.kpi1 > '9.8' && communityMealsOctContents.kpi1 <= '13.06666667')?'orange':(communityMealsOctContents.kpi1 > '13.06666667' && communityMealsOctContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsOctContents.kpi1 >= '16.33333333' && communityMealsOctContents.kpi1 < '19.6')?'green':(communityMealsOctContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsOctContents.kpi2 == null)?'grey-2':(communityMealsOctContents.kpi2 >= '0' && communityMealsOctContents.kpi2 <= '90')?'red':(communityMealsOctContents.kpi2 > '90' && communityMealsOctContents.kpi2 <= '120')?'orange':(communityMealsOctContents.kpi2 > '120' && communityMealsOctContents.kpi2 < '150')?'yellow-7':(communityMealsOctContents.kpi2 >= '150' && communityMealsOctContents.kpi2 < '180')?'green':(communityMealsOctContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsOctContents.kpi3 == null)?'grey-2':(communityMealsOctContents.kpi3 >= '0' && communityMealsOctContents.kpi3 <= '2.6')?'red':(communityMealsOctContents.kpi3 > '2.6' && communityMealsOctContents.kpi3 <= '3.466666667')?'orange':(communityMealsOctContents.kpi3 > '3.466666667' && communityMealsOctContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsOctContents.kpi3 >= '4.333333333' && communityMealsOctContents.kpi3 < '5.2')?'green':(communityMealsOctContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsOctContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsOctContents.kpi4 == null)?'grey-2':(communityMealsOctContents.kpi4 >= '0' && communityMealsOctContents.kpi4 <= '384.2')?'red':(communityMealsOctContents.kpi4 > '384.2' && communityMealsOctContents.kpi4 <= '512.2666667')?'orange':(communityMealsOctContents.kpi4 > '512.2666667' && communityMealsOctContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsOctContents.kpi4 >= '640.3333333' && communityMealsOctContents.kpi4 < '768.4')?'green':(communityMealsOctContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsOctContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsNovContents.kpi1 == null)?'grey-2':(communityMealsNovContents.kpi1 >= '0' && communityMealsNovContents.kpi1 <= '9.8')?'red':(communityMealsNovContents.kpi1 > '9.8' && communityMealsNovContents.kpi1 <= '13.06666667')?'orange':(communityMealsNovContents.kpi1 > '13.06666667' && communityMealsNovContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsNovContents.kpi1 >= '16.33333333' && communityMealsNovContents.kpi1 < '19.6')?'green':(communityMealsNovContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsNovContents.kpi2 == null)?'grey-2':(communityMealsNovContents.kpi2 >= '0' && communityMealsNovContents.kpi2 <= '90')?'red':(communityMealsNovContents.kpi2 > '90' && communityMealsNovContents.kpi2 <= '120')?'orange':(communityMealsNovContents.kpi2 > '120' && communityMealsNovContents.kpi2 < '150')?'yellow-7':(communityMealsNovContents.kpi2 >= '150' && communityMealsNovContents.kpi2 < '180')?'green':(communityMealsNovContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsNovContents.kpi3 == null)?'grey-2':(communityMealsNovContents.kpi3 >= '0' && communityMealsNovContents.kpi3 <= '2.6')?'red':(communityMealsNovContents.kpi3 > '2.6' && communityMealsNovContents.kpi3 <= '3.466666667')?'orange':(communityMealsNovContents.kpi3 > '3.466666667' && communityMealsNovContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsNovContents.kpi3 >= '4.333333333' && communityMealsNovContents.kpi3 < '5.2')?'green':(communityMealsNovContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsNovContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsNovContents.kpi4 == null)?'grey-2':(communityMealsNovContents.kpi4 >= '0' && communityMealsNovContents.kpi4 <= '384.2')?'red':(communityMealsNovContents.kpi4 > '384.2' && communityMealsNovContents.kpi4 <= '512.2666667')?'orange':(communityMealsNovContents.kpi4 > '512.2666667' && communityMealsNovContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsNovContents.kpi4 >= '640.3333333' && communityMealsNovContents.kpi4 < '768.4')?'green':(communityMealsNovContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsNovContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsDecContents.kpi1 == null)?'grey-2':(communityMealsDecContents.kpi1 >= '0' && communityMealsDecContents.kpi1 <= '9.8')?'red':(communityMealsDecContents.kpi1 > '9.8' && communityMealsDecContents.kpi1 <= '13.06666667')?'orange':(communityMealsDecContents.kpi1 > '13.06666667' && communityMealsDecContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsDecContents.kpi1 >= '16.33333333' && communityMealsDecContents.kpi1 < '19.6')?'green':(communityMealsDecContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsDecContents.kpi2 == null)?'grey-2':(communityMealsDecContents.kpi2 >= '0' && communityMealsDecContents.kpi2 <= '90')?'red':(communityMealsDecContents.kpi2 > '90' && communityMealsDecContents.kpi2 <= '120')?'orange':(communityMealsDecContents.kpi2 > '120' && communityMealsDecContents.kpi2 < '150')?'yellow-7':(communityMealsDecContents.kpi2 >= '150' && communityMealsDecContents.kpi2 < '180')?'green':(communityMealsDecContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsDecContents.kpi3 == null)?'grey-2':(communityMealsDecContents.kpi3 >= '0' && communityMealsDecContents.kpi3 <= '2.6')?'red':(communityMealsDecContents.kpi3 > '2.6' && communityMealsDecContents.kpi3 <= '3.466666667')?'orange':(communityMealsDecContents.kpi3 > '3.466666667' && communityMealsDecContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsDecContents.kpi3 >= '4.333333333' && communityMealsDecContents.kpi3 < '5.2')?'green':(communityMealsDecContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsDecContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsDecContents.kpi4 == null)?'grey-2':(communityMealsDecContents.kpi4 >= '0' && communityMealsDecContents.kpi4 <= '384.2')?'red':(communityMealsDecContents.kpi4 > '384.2' && communityMealsDecContents.kpi4 <= '512.2666667')?'orange':(communityMealsDecContents.kpi4 > '512.2666667' && communityMealsDecContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsDecContents.kpi4 >= '640.3333333' && communityMealsDecContents.kpi4 < '768.4')?'green':(communityMealsDecContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsDecContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                                <q-tooltip>Activities (#)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsJanContents.kpi1 == null)?'grey-2':(communityMealsJanContents.kpi1 >= '0' && communityMealsJanContents.kpi1 <= '9.8')?'red':(communityMealsJanContents.kpi1 > '9.8' && communityMealsJanContents.kpi1 <= '13.06666667')?'orange':(communityMealsJanContents.kpi1 > '13.06666667' && communityMealsJanContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsJanContents.kpi1 >= '16.33333333' && communityMealsJanContents.kpi1 < '19.6')?'green':(communityMealsJanContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJanContents.kpi2 == null)?'grey-2':(communityMealsJanContents.kpi2 >= '0' && communityMealsJanContents.kpi2 <= '90')?'red':(communityMealsJanContents.kpi2 > '90' && communityMealsJanContents.kpi2 <= '120')?'orange':(communityMealsJanContents.kpi2 > '120' && communityMealsJanContents.kpi2 < '150')?'yellow-7':(communityMealsJanContents.kpi2 >= '150' && communityMealsJanContents.kpi2 < '180')?'green':(communityMealsJanContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJanContents.kpi3 == null)?'grey-2':(communityMealsJanContents.kpi3 >= '0' && communityMealsJanContents.kpi3 <= '2.6')?'red':(communityMealsJanContents.kpi3 > '2.6' && communityMealsJanContents.kpi3 <= '3.466666667')?'orange':(communityMealsJanContents.kpi3 > '3.466666667' && communityMealsJanContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsJanContents.kpi3 >= '4.333333333' && communityMealsJanContents.kpi3 < '5.2')?'green':(communityMealsJanContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsJanContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJanContents.kpi4 == null)?'grey-2':(communityMealsJanContents.kpi4 >= '0' && communityMealsJanContents.kpi4 <= '384.2')?'red':(communityMealsJanContents.kpi4 > '384.2' && communityMealsJanContents.kpi4 <= '512.2666667')?'orange':(communityMealsJanContents.kpi4 > '512.2666667' && communityMealsJanContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsJanContents.kpi4 >= '640.3333333' && communityMealsJanContents.kpi4 < '768.4')?'green':(communityMealsJanContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsJanContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsFebContents.kpi1 == null)?'grey-2':(communityMealsFebContents.kpi1 >= '0' && communityMealsFebContents.kpi1 <= '9.8')?'red':(communityMealsFebContents.kpi1 > '9.8' && communityMealsFebContents.kpi1 <= '13.06666667')?'orange':(communityMealsFebContents.kpi1 > '13.06666667' && communityMealsFebContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsFebContents.kpi1 >= '16.33333333' && communityMealsFebContents.kpi1 < '19.6')?'green':(communityMealsFebContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsFebContents.kpi2 == null)?'grey-2':(communityMealsFebContents.kpi2 >= '0' && communityMealsFebContents.kpi2 <= '90')?'red':(communityMealsFebContents.kpi2 > '90' && communityMealsFebContents.kpi2 <= '120')?'orange':(communityMealsFebContents.kpi2 > '120' && communityMealsFebContents.kpi2 < '150')?'yellow-7':(communityMealsFebContents.kpi2 >= '150' && communityMealsFebContents.kpi2 < '180')?'green':(communityMealsFebContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsFebContents.kpi3 == null)?'grey-2':(communityMealsFebContents.kpi3 >= '0' && communityMealsFebContents.kpi3 <= '2.6')?'red':(communityMealsFebContents.kpi3 > '2.6' && communityMealsFebContents.kpi3 <= '3.466666667')?'orange':(communityMealsFebContents.kpi3 > '3.466666667' && communityMealsFebContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsFebContents.kpi3 >= '4.333333333' && communityMealsFebContents.kpi3 < '5.2')?'green':(communityMealsFebContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsFebContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsFebContents.kpi4 == null)?'grey-2':(communityMealsFebContents.kpi4 >= '0' && communityMealsFebContents.kpi4 <= '384.2')?'red':(communityMealsFebContents.kpi4 > '384.2' && communityMealsFebContents.kpi4 <= '512.2666667')?'orange':(communityMealsFebContents.kpi4 > '512.2666667' && communityMealsFebContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsFebContents.kpi4 >= '640.3333333' && communityMealsFebContents.kpi4 < '768.4')?'green':(communityMealsFebContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsFebContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsMarContents.kpi1 == null)?'grey-2':(communityMealsMarContents.kpi1 >= '0' && communityMealsMarContents.kpi1 <= '9.8')?'red':(communityMealsMarContents.kpi1 > '9.8' && communityMealsMarContents.kpi1 <= '13.06666667')?'orange':(communityMealsMarContents.kpi1 > '13.06666667' && communityMealsMarContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsMarContents.kpi1 >= '16.33333333' && communityMealsMarContents.kpi1 < '19.6')?'green':(communityMealsMarContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMarContents.kpi2 == null)?'grey-2':(communityMealsMarContents.kpi2 >= '0' && communityMealsMarContents.kpi2 <= '90')?'red':(communityMealsMarContents.kpi2 > '90' && communityMealsMarContents.kpi2 <= '120')?'orange':(communityMealsMarContents.kpi2 > '120' && communityMealsMarContents.kpi2 < '150')?'yellow-7':(communityMealsMarContents.kpi2 >= '150' && communityMealsMarContents.kpi2 < '180')?'green':(communityMealsMarContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMarContents.kpi3 == null)?'grey-2':(communityMealsMarContents.kpi3 >= '0' && communityMealsMarContents.kpi3 <= '2.6')?'red':(communityMealsMarContents.kpi3 > '2.6' && communityMealsMarContents.kpi3 <= '3.466666667')?'orange':(communityMealsMarContents.kpi3 > '3.466666667' && communityMealsMarContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsMarContents.kpi3 >= '4.333333333' && communityMealsMarContents.kpi3 < '5.2')?'green':(communityMealsMarContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsMarContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMarContents.kpi4 == null)?'grey-2':(communityMealsMarContents.kpi4 >= '0' && communityMealsMarContents.kpi4 <= '384.2')?'red':(communityMealsMarContents.kpi4 > '384.2' && communityMealsMarContents.kpi4 <= '512.2666667')?'orange':(communityMealsMarContents.kpi4 > '512.2666667' && communityMealsMarContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsMarContents.kpi4 >= '640.3333333' && communityMealsMarContents.kpi4 < '768.4')?'green':(communityMealsMarContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsMarContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsAprContents.kpi1 == null)?'grey-2':(communityMealsAprContents.kpi1 >= '0' && communityMealsAprContents.kpi1 <= '9.8')?'red':(communityMealsAprContents.kpi1 > '9.8' && communityMealsAprContents.kpi1 <= '13.06666667')?'orange':(communityMealsAprContents.kpi1 > '13.06666667' && communityMealsAprContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsAprContents.kpi1 >= '16.33333333' && communityMealsAprContents.kpi1 < '19.6')?'green':(communityMealsAprContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAprContents.kpi2 == null)?'grey-2':(communityMealsAprContents.kpi2 >= '0' && communityMealsAprContents.kpi2 <= '90')?'red':(communityMealsAprContents.kpi2 > '90' && communityMealsAprContents.kpi2 <= '120')?'orange':(communityMealsAprContents.kpi2 > '120' && communityMealsAprContents.kpi2 < '150')?'yellow-7':(communityMealsAprContents.kpi2 >= '150' && communityMealsAprContents.kpi2 < '180')?'green':(communityMealsAprContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAprContents.kpi3 == null)?'grey-2':(communityMealsAprContents.kpi3 >= '0' && communityMealsAprContents.kpi3 <= '2.6')?'red':(communityMealsAprContents.kpi3 > '2.6' && communityMealsAprContents.kpi3 <= '3.466666667')?'orange':(communityMealsAprContents.kpi3 > '3.466666667' && communityMealsAprContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsAprContents.kpi3 >= '4.333333333' && communityMealsAprContents.kpi3 < '5.2')?'green':(communityMealsAprContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsAprContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAprContents.kpi4 == null)?'grey-2':(communityMealsAprContents.kpi4 >= '0' && communityMealsAprContents.kpi4 <= '384.2')?'red':(communityMealsAprContents.kpi4 > '384.2' && communityMealsAprContents.kpi4 <= '512.2666667')?'orange':(communityMealsAprContents.kpi4 > '512.2666667' && communityMealsAprContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsAprContents.kpi4 >= '640.3333333' && communityMealsAprContents.kpi4 < '768.4')?'green':(communityMealsAprContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsAprContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsMayContents.kpi1 == null)?'grey-2':(communityMealsMayContents.kpi1 >= '0' && communityMealsMayContents.kpi1 <= '9.8')?'red':(communityMealsMayContents.kpi1 > '9.8' && communityMealsMayContents.kpi1 <= '13.06666667')?'orange':(communityMealsMayContents.kpi1 > '13.06666667' && communityMealsMayContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsMayContents.kpi1 >= '16.33333333' && communityMealsMayContents.kpi1 < '19.6')?'green':(communityMealsMayContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMayContents.kpi2 == null)?'grey-2':(communityMealsMayContents.kpi2 >= '0' && communityMealsMayContents.kpi2 <= '90')?'red':(communityMealsMayContents.kpi2 > '90' && communityMealsMayContents.kpi2 <= '120')?'orange':(communityMealsMayContents.kpi2 > '120' && communityMealsMayContents.kpi2 < '150')?'yellow-7':(communityMealsMayContents.kpi2 >= '150' && communityMealsMayContents.kpi2 < '180')?'green':(communityMealsMayContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMayContents.kpi3 == null)?'grey-2':(communityMealsMayContents.kpi3 >= '0' && communityMealsMayContents.kpi3 <= '2.6')?'red':(communityMealsMayContents.kpi3 > '2.6' && communityMealsMayContents.kpi3 <= '3.466666667')?'orange':(communityMealsMayContents.kpi3 > '3.466666667' && communityMealsMayContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsMayContents.kpi3 >= '4.333333333' && communityMealsMayContents.kpi3 < '5.2')?'green':(communityMealsMayContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsMayContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMayContents.kpi4 == null)?'grey-2':(communityMealsMayContents.kpi4 >= '0' && communityMealsMayContents.kpi4 <= '384.2')?'red':(communityMealsMayContents.kpi4 > '384.2' && communityMealsMayContents.kpi4 <= '512.2666667')?'orange':(communityMealsMayContents.kpi4 > '512.2666667' && communityMealsMayContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsMayContents.kpi4 >= '640.3333333' && communityMealsMayContents.kpi4 < '768.4')?'green':(communityMealsMayContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsMayContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsJunContents.kpi1 == null)?'grey-2':(communityMealsJunContents.kpi1 >= '0' && communityMealsJunContents.kpi1 <= '9.8')?'red':(communityMealsJunContents.kpi1 > '9.8' && communityMealsJunContents.kpi1 <= '13.06666667')?'orange':(communityMealsJunContents.kpi1 > '13.06666667' && communityMealsJunContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsJunContents.kpi1 >= '16.33333333' && communityMealsJunContents.kpi1 < '19.6')?'green':(communityMealsJunContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJunContents.kpi2 == null)?'grey-2':(communityMealsJunContents.kpi2 >= '0' && communityMealsJunContents.kpi2 <= '90')?'red':(communityMealsJunContents.kpi2 > '90' && communityMealsJunContents.kpi2 <= '120')?'orange':(communityMealsJunContents.kpi2 > '120' && communityMealsJunContents.kpi2 < '150')?'yellow-7':(communityMealsJunContents.kpi2 >= '150' && communityMealsJunContents.kpi2 < '180')?'green':(communityMealsJunContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJunContents.kpi3 == null)?'grey-2':(communityMealsJunContents.kpi3 >= '0' && communityMealsJunContents.kpi3 <= '2.6')?'red':(communityMealsJunContents.kpi3 > '2.6' && communityMealsJunContents.kpi3 <= '3.466666667')?'orange':(communityMealsJunContents.kpi3 > '3.466666667' && communityMealsJunContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsJunContents.kpi3 >= '4.333333333' && communityMealsJunContents.kpi3 < '5.2')?'green':(communityMealsJunContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsJunContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJunContents.kpi4 == null)?'grey-2':(communityMealsJunContents.kpi4 >= '0' && communityMealsJunContents.kpi4 <= '384.2')?'red':(communityMealsJunContents.kpi4 > '384.2' && communityMealsJunContents.kpi4 <= '512.2666667')?'orange':(communityMealsJunContents.kpi4 > '512.2666667' && communityMealsJunContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsJunContents.kpi4 >= '640.3333333' && communityMealsJunContents.kpi4 < '768.4')?'green':(communityMealsJunContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsJunContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsJulContents.kpi1 == null)?'grey-2':(communityMealsJulContents.kpi1 >= '0' && communityMealsJulContents.kpi1 <= '9.8')?'red':(communityMealsJulContents.kpi1 > '9.8' && communityMealsJulContents.kpi1 <= '13.06666667')?'orange':(communityMealsJulContents.kpi1 > '13.06666667' && communityMealsJulContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsJulContents.kpi1 >= '16.33333333' && communityMealsJulContents.kpi1 < '19.6')?'green':(communityMealsJulContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJulContents.kpi2 == null)?'grey-2':(communityMealsJulContents.kpi2 >= '0' && communityMealsJulContents.kpi2 <= '90')?'red':(communityMealsJulContents.kpi2 > '90' && communityMealsJulContents.kpi2 <= '120')?'orange':(communityMealsJulContents.kpi2 > '120' && communityMealsJulContents.kpi2 < '150')?'yellow-7':(communityMealsJulContents.kpi2 >= '150' && communityMealsJulContents.kpi2 < '180')?'green':(communityMealsJulContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJulContents.kpi3 == null)?'grey-2':(communityMealsJulContents.kpi3 >= '0' && communityMealsJulContents.kpi3 <= '2.6')?'red':(communityMealsJulContents.kpi3 > '2.6' && communityMealsJulContents.kpi3 <= '3.466666667')?'orange':(communityMealsJulContents.kpi3 > '3.466666667' && communityMealsJulContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsJulContents.kpi3 >= '4.333333333' && communityMealsJulContents.kpi3 < '5.2')?'green':(communityMealsJulContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsJulContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJulContents.kpi4 == null)?'grey-2':(communityMealsJulContents.kpi4 >= '0' && communityMealsJulContents.kpi4 <= '384.2')?'red':(communityMealsJulContents.kpi4 > '384.2' && communityMealsJulContents.kpi4 <= '512.2666667')?'orange':(communityMealsJulContents.kpi4 > '512.2666667' && communityMealsJulContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsJulContents.kpi4 >= '640.3333333' && communityMealsJulContents.kpi4 < '768.4')?'green':(communityMealsJulContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsJulContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsAugContents.kpi1 == null)?'grey-2':(communityMealsAugContents.kpi1 >= '0' && communityMealsAugContents.kpi1 <= '9.8')?'red':(communityMealsAugContents.kpi1 > '9.8' && communityMealsAugContents.kpi1 <= '13.06666667')?'orange':(communityMealsAugContents.kpi1 > '13.06666667' && communityMealsAugContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsAugContents.kpi1 >= '16.33333333' && communityMealsAugContents.kpi1 < '19.6')?'green':(communityMealsAugContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAugContents.kpi2 == null)?'grey-2':(communityMealsAugContents.kpi2 >= '0' && communityMealsAugContents.kpi2 <= '90')?'red':(communityMealsAugContents.kpi2 > '90' && communityMealsAugContents.kpi2 <= '120')?'orange':(communityMealsAugContents.kpi2 > '120' && communityMealsAugContents.kpi2 < '150')?'yellow-7':(communityMealsAugContents.kpi2 >= '150' && communityMealsAugContents.kpi2 < '180')?'green':(communityMealsAugContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAugContents.kpi3 == null)?'grey-2':(communityMealsAugContents.kpi3 >= '0' && communityMealsAugContents.kpi3 <= '2.6')?'red':(communityMealsAugContents.kpi3 > '2.6' && communityMealsAugContents.kpi3 <= '3.466666667')?'orange':(communityMealsAugContents.kpi3 > '3.466666667' && communityMealsAugContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsAugContents.kpi3 >= '4.333333333' && communityMealsAugContents.kpi3 < '5.2')?'green':(communityMealsAugContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsAugContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAugContents.kpi4 == null)?'grey-2':(communityMealsAugContents.kpi4 >= '0' && communityMealsAugContents.kpi4 <= '384.2')?'red':(communityMealsAugContents.kpi4 > '384.2' && communityMealsAugContents.kpi4 <= '512.2666667')?'orange':(communityMealsAugContents.kpi4 > '512.2666667' && communityMealsAugContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsAugContents.kpi4 >= '640.3333333' && communityMealsAugContents.kpi4 < '768.4')?'green':(communityMealsAugContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsAugContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsSepContents.kpi1 == null)?'grey-2':(communityMealsSepContents.kpi1 >= '0' && communityMealsSepContents.kpi1 <= '9.8')?'red':(communityMealsSepContents.kpi1 > '9.8' && communityMealsSepContents.kpi1 <= '13.06666667')?'orange':(communityMealsSepContents.kpi1 > '13.06666667' && communityMealsSepContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsSepContents.kpi1 >= '16.33333333' && communityMealsSepContents.kpi1 < '19.6')?'green':(communityMealsSepContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsSepContents.kpi2 == null)?'grey-2':(communityMealsSepContents.kpi2 >= '0' && communityMealsSepContents.kpi2 <= '90')?'red':(communityMealsSepContents.kpi2 > '90' && communityMealsSepContents.kpi2 <= '120')?'orange':(communityMealsSepContents.kpi2 > '120' && communityMealsSepContents.kpi2 < '150')?'yellow-7':(communityMealsSepContents.kpi2 >= '150' && communityMealsSepContents.kpi2 < '180')?'green':(communityMealsSepContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsSepContents.kpi3 == null)?'grey-2':(communityMealsSepContents.kpi3 >= '0' && communityMealsSepContents.kpi3 <= '2.6')?'red':(communityMealsSepContents.kpi3 > '2.6' && communityMealsSepContents.kpi3 <= '3.466666667')?'orange':(communityMealsSepContents.kpi3 > '3.466666667' && communityMealsSepContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsSepContents.kpi3 >= '4.333333333' && communityMealsSepContents.kpi3 < '5.2')?'green':(communityMealsSepContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsSepContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsSepContents.kpi4 == null)?'grey-2':(communityMealsSepContents.kpi4 >= '0' && communityMealsSepContents.kpi4 <= '384.2')?'red':(communityMealsSepContents.kpi4 > '384.2' && communityMealsSepContents.kpi4 <= '512.2666667')?'orange':(communityMealsSepContents.kpi4 > '512.2666667' && communityMealsSepContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsSepContents.kpi4 >= '640.3333333' && communityMealsSepContents.kpi4 < '768.4')?'green':(communityMealsSepContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsSepContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsOctContents.kpi1 == null)?'grey-2':(communityMealsOctContents.kpi1 >= '0' && communityMealsOctContents.kpi1 <= '9.8')?'red':(communityMealsOctContents.kpi1 > '9.8' && communityMealsOctContents.kpi1 <= '13.06666667')?'orange':(communityMealsOctContents.kpi1 > '13.06666667' && communityMealsOctContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsOctContents.kpi1 >= '16.33333333' && communityMealsOctContents.kpi1 < '19.6')?'green':(communityMealsOctContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsOctContents.kpi2 == null)?'grey-2':(communityMealsOctContents.kpi2 >= '0' && communityMealsOctContents.kpi2 <= '90')?'red':(communityMealsOctContents.kpi2 > '90' && communityMealsOctContents.kpi2 <= '120')?'orange':(communityMealsOctContents.kpi2 > '120' && communityMealsOctContents.kpi2 < '150')?'yellow-7':(communityMealsOctContents.kpi2 >= '150' && communityMealsOctContents.kpi2 < '180')?'green':(communityMealsOctContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsOctContents.kpi3 == null)?'grey-2':(communityMealsOctContents.kpi3 >= '0' && communityMealsOctContents.kpi3 <= '2.6')?'red':(communityMealsOctContents.kpi3 > '2.6' && communityMealsOctContents.kpi3 <= '3.466666667')?'orange':(communityMealsOctContents.kpi3 > '3.466666667' && communityMealsOctContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsOctContents.kpi3 >= '4.333333333' && communityMealsOctContents.kpi3 < '5.2')?'green':(communityMealsOctContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsOctContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsOctContents.kpi4 == null)?'grey-2':(communityMealsOctContents.kpi4 >= '0' && communityMealsOctContents.kpi4 <= '384.2')?'red':(communityMealsOctContents.kpi4 > '384.2' && communityMealsOctContents.kpi4 <= '512.2666667')?'orange':(communityMealsOctContents.kpi4 > '512.2666667' && communityMealsOctContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsOctContents.kpi4 >= '640.3333333' && communityMealsOctContents.kpi4 < '768.4')?'green':(communityMealsOctContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsOctContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsNovContents.kpi1 == null)?'grey-2':(communityMealsNovContents.kpi1 >= '0' && communityMealsNovContents.kpi1 <= '9.8')?'red':(communityMealsNovContents.kpi1 > '9.8' && communityMealsNovContents.kpi1 <= '13.06666667')?'orange':(communityMealsNovContents.kpi1 > '13.06666667' && communityMealsNovContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsNovContents.kpi1 >= '16.33333333' && communityMealsNovContents.kpi1 < '19.6')?'green':(communityMealsNovContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsNovContents.kpi2 == null)?'grey-2':(communityMealsNovContents.kpi2 >= '0' && communityMealsNovContents.kpi2 <= '90')?'red':(communityMealsNovContents.kpi2 > '90' && communityMealsNovContents.kpi2 <= '120')?'orange':(communityMealsNovContents.kpi2 > '120' && communityMealsNovContents.kpi2 < '150')?'yellow-7':(communityMealsNovContents.kpi2 >= '150' && communityMealsNovContents.kpi2 < '180')?'green':(communityMealsNovContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsNovContents.kpi3 == null)?'grey-2':(communityMealsNovContents.kpi3 >= '0' && communityMealsNovContents.kpi3 <= '2.6')?'red':(communityMealsNovContents.kpi3 > '2.6' && communityMealsNovContents.kpi3 <= '3.466666667')?'orange':(communityMealsNovContents.kpi3 > '3.466666667' && communityMealsNovContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsNovContents.kpi3 >= '4.333333333' && communityMealsNovContents.kpi3 < '5.2')?'green':(communityMealsNovContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsNovContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsNovContents.kpi4 == null)?'grey-2':(communityMealsNovContents.kpi4 >= '0' && communityMealsNovContents.kpi4 <= '384.2')?'red':(communityMealsNovContents.kpi4 > '384.2' && communityMealsNovContents.kpi4 <= '512.2666667')?'orange':(communityMealsNovContents.kpi4 > '512.2666667' && communityMealsNovContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsNovContents.kpi4 >= '640.3333333' && communityMealsNovContents.kpi4 < '768.4')?'green':(communityMealsNovContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsNovContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsDecContents.kpi1 == null)?'grey-2':(communityMealsDecContents.kpi1 >= '0' && communityMealsDecContents.kpi1 <= '9.8')?'red':(communityMealsDecContents.kpi1 > '9.8' && communityMealsDecContents.kpi1 <= '13.06666667')?'orange':(communityMealsDecContents.kpi1 > '13.06666667' && communityMealsDecContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsDecContents.kpi1 >= '16.33333333' && communityMealsDecContents.kpi1 < '19.6')?'green':(communityMealsDecContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsDecContents.kpi2 == null)?'grey-2':(communityMealsDecContents.kpi2 >= '0' && communityMealsDecContents.kpi2 <= '90')?'red':(communityMealsDecContents.kpi2 > '90' && communityMealsDecContents.kpi2 <= '120')?'orange':(communityMealsDecContents.kpi2 > '120' && communityMealsDecContents.kpi2 < '150')?'yellow-7':(communityMealsDecContents.kpi2 >= '150' && communityMealsDecContents.kpi2 < '180')?'green':(communityMealsDecContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsDecContents.kpi3 == null)?'grey-2':(communityMealsDecContents.kpi3 >= '0' && communityMealsDecContents.kpi3 <= '2.6')?'red':(communityMealsDecContents.kpi3 > '2.6' && communityMealsDecContents.kpi3 <= '3.466666667')?'orange':(communityMealsDecContents.kpi3 > '3.466666667' && communityMealsDecContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsDecContents.kpi3 >= '4.333333333' && communityMealsDecContents.kpi3 < '5.2')?'green':(communityMealsDecContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsDecContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsDecContents.kpi4 == null)?'grey-2':(communityMealsDecContents.kpi4 >= '0' && communityMealsDecContents.kpi4 <= '384.2')?'red':(communityMealsDecContents.kpi4 > '384.2' && communityMealsDecContents.kpi4 <= '512.2666667')?'orange':(communityMealsDecContents.kpi4 > '512.2666667' && communityMealsDecContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsDecContents.kpi4 >= '640.3333333' && communityMealsDecContents.kpi4 < '768.4')?'green':(communityMealsDecContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsDecContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                                <q-tooltip>Activities (#)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsJanContents.kpi1 == null)?'grey-2':(communityMealsJanContents.kpi1 >= '0' && communityMealsJanContents.kpi1 <= '9.8')?'red':(communityMealsJanContents.kpi1 > '9.8' && communityMealsJanContents.kpi1 <= '13.06666667')?'orange':(communityMealsJanContents.kpi1 > '13.06666667' && communityMealsJanContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsJanContents.kpi1 >= '16.33333333' && communityMealsJanContents.kpi1 < '19.6')?'green':(communityMealsJanContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJanContents.kpi2 == null)?'grey-2':(communityMealsJanContents.kpi2 >= '0' && communityMealsJanContents.kpi2 <= '90')?'red':(communityMealsJanContents.kpi2 > '90' && communityMealsJanContents.kpi2 <= '120')?'orange':(communityMealsJanContents.kpi2 > '120' && communityMealsJanContents.kpi2 < '150')?'yellow-7':(communityMealsJanContents.kpi2 >= '150' && communityMealsJanContents.kpi2 < '180')?'green':(communityMealsJanContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJanContents.kpi3 == null)?'grey-2':(communityMealsJanContents.kpi3 >= '0' && communityMealsJanContents.kpi3 <= '2.6')?'red':(communityMealsJanContents.kpi3 > '2.6' && communityMealsJanContents.kpi3 <= '3.466666667')?'orange':(communityMealsJanContents.kpi3 > '3.466666667' && communityMealsJanContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsJanContents.kpi3 >= '4.333333333' && communityMealsJanContents.kpi3 < '5.2')?'green':(communityMealsJanContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsJanContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJanContents.kpi4 == null)?'grey-2':(communityMealsJanContents.kpi4 >= '0' && communityMealsJanContents.kpi4 <= '384.2')?'red':(communityMealsJanContents.kpi4 > '384.2' && communityMealsJanContents.kpi4 <= '512.2666667')?'orange':(communityMealsJanContents.kpi4 > '512.2666667' && communityMealsJanContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsJanContents.kpi4 >= '640.3333333' && communityMealsJanContents.kpi4 < '768.4')?'green':(communityMealsJanContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsJanContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsFebContents.kpi1 == null)?'grey-2':(communityMealsFebContents.kpi1 >= '0' && communityMealsFebContents.kpi1 <= '9.8')?'red':(communityMealsFebContents.kpi1 > '9.8' && communityMealsFebContents.kpi1 <= '13.06666667')?'orange':(communityMealsFebContents.kpi1 > '13.06666667' && communityMealsFebContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsFebContents.kpi1 >= '16.33333333' && communityMealsFebContents.kpi1 < '19.6')?'green':(communityMealsFebContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsFebContents.kpi2 == null)?'grey-2':(communityMealsFebContents.kpi2 >= '0' && communityMealsFebContents.kpi2 <= '90')?'red':(communityMealsFebContents.kpi2 > '90' && communityMealsFebContents.kpi2 <= '120')?'orange':(communityMealsFebContents.kpi2 > '120' && communityMealsFebContents.kpi2 < '150')?'yellow-7':(communityMealsFebContents.kpi2 >= '150' && communityMealsFebContents.kpi2 < '180')?'green':(communityMealsFebContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsFebContents.kpi3 == null)?'grey-2':(communityMealsFebContents.kpi3 >= '0' && communityMealsFebContents.kpi3 <= '2.6')?'red':(communityMealsFebContents.kpi3 > '2.6' && communityMealsFebContents.kpi3 <= '3.466666667')?'orange':(communityMealsFebContents.kpi3 > '3.466666667' && communityMealsFebContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsFebContents.kpi3 >= '4.333333333' && communityMealsFebContents.kpi3 < '5.2')?'green':(communityMealsFebContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsFebContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsFebContents.kpi4 == null)?'grey-2':(communityMealsFebContents.kpi4 >= '0' && communityMealsFebContents.kpi4 <= '384.2')?'red':(communityMealsFebContents.kpi4 > '384.2' && communityMealsFebContents.kpi4 <= '512.2666667')?'orange':(communityMealsFebContents.kpi4 > '512.2666667' && communityMealsFebContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsFebContents.kpi4 >= '640.3333333' && communityMealsFebContents.kpi4 < '768.4')?'green':(communityMealsFebContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsFebContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsMarContents.kpi1 == null)?'grey-2':(communityMealsMarContents.kpi1 >= '0' && communityMealsMarContents.kpi1 <= '9.8')?'red':(communityMealsMarContents.kpi1 > '9.8' && communityMealsMarContents.kpi1 <= '13.06666667')?'orange':(communityMealsMarContents.kpi1 > '13.06666667' && communityMealsMarContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsMarContents.kpi1 >= '16.33333333' && communityMealsMarContents.kpi1 < '19.6')?'green':(communityMealsMarContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMarContents.kpi2 == null)?'grey-2':(communityMealsMarContents.kpi2 >= '0' && communityMealsMarContents.kpi2 <= '90')?'red':(communityMealsMarContents.kpi2 > '90' && communityMealsMarContents.kpi2 <= '120')?'orange':(communityMealsMarContents.kpi2 > '120' && communityMealsMarContents.kpi2 < '150')?'yellow-7':(communityMealsMarContents.kpi2 >= '150' && communityMealsMarContents.kpi2 < '180')?'green':(communityMealsMarContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMarContents.kpi3 == null)?'grey-2':(communityMealsMarContents.kpi3 >= '0' && communityMealsMarContents.kpi3 <= '2.6')?'red':(communityMealsMarContents.kpi3 > '2.6' && communityMealsMarContents.kpi3 <= '3.466666667')?'orange':(communityMealsMarContents.kpi3 > '3.466666667' && communityMealsMarContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsMarContents.kpi3 >= '4.333333333' && communityMealsMarContents.kpi3 < '5.2')?'green':(communityMealsMarContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsMarContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMarContents.kpi4 == null)?'grey-2':(communityMealsMarContents.kpi4 >= '0' && communityMealsMarContents.kpi4 <= '384.2')?'red':(communityMealsMarContents.kpi4 > '384.2' && communityMealsMarContents.kpi4 <= '512.2666667')?'orange':(communityMealsMarContents.kpi4 > '512.2666667' && communityMealsMarContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsMarContents.kpi4 >= '640.3333333' && communityMealsMarContents.kpi4 < '768.4')?'green':(communityMealsMarContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsMarContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsAprContents.kpi1 == null)?'grey-2':(communityMealsAprContents.kpi1 >= '0' && communityMealsAprContents.kpi1 <= '9.8')?'red':(communityMealsAprContents.kpi1 > '9.8' && communityMealsAprContents.kpi1 <= '13.06666667')?'orange':(communityMealsAprContents.kpi1 > '13.06666667' && communityMealsAprContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsAprContents.kpi1 >= '16.33333333' && communityMealsAprContents.kpi1 < '19.6')?'green':(communityMealsAprContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAprContents.kpi2 == null)?'grey-2':(communityMealsAprContents.kpi2 >= '0' && communityMealsAprContents.kpi2 <= '90')?'red':(communityMealsAprContents.kpi2 > '90' && communityMealsAprContents.kpi2 <= '120')?'orange':(communityMealsAprContents.kpi2 > '120' && communityMealsAprContents.kpi2 < '150')?'yellow-7':(communityMealsAprContents.kpi2 >= '150' && communityMealsAprContents.kpi2 < '180')?'green':(communityMealsAprContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAprContents.kpi3 == null)?'grey-2':(communityMealsAprContents.kpi3 >= '0' && communityMealsAprContents.kpi3 <= '2.6')?'red':(communityMealsAprContents.kpi3 > '2.6' && communityMealsAprContents.kpi3 <= '3.466666667')?'orange':(communityMealsAprContents.kpi3 > '3.466666667' && communityMealsAprContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsAprContents.kpi3 >= '4.333333333' && communityMealsAprContents.kpi3 < '5.2')?'green':(communityMealsAprContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsAprContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAprContents.kpi4 == null)?'grey-2':(communityMealsAprContents.kpi4 >= '0' && communityMealsAprContents.kpi4 <= '384.2')?'red':(communityMealsAprContents.kpi4 > '384.2' && communityMealsAprContents.kpi4 <= '512.2666667')?'orange':(communityMealsAprContents.kpi4 > '512.2666667' && communityMealsAprContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsAprContents.kpi4 >= '640.3333333' && communityMealsAprContents.kpi4 < '768.4')?'green':(communityMealsAprContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsAprContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsMayContents.kpi1 == null)?'grey-2':(communityMealsMayContents.kpi1 >= '0' && communityMealsMayContents.kpi1 <= '9.8')?'red':(communityMealsMayContents.kpi1 > '9.8' && communityMealsMayContents.kpi1 <= '13.06666667')?'orange':(communityMealsMayContents.kpi1 > '13.06666667' && communityMealsMayContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsMayContents.kpi1 >= '16.33333333' && communityMealsMayContents.kpi1 < '19.6')?'green':(communityMealsMayContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMayContents.kpi2 == null)?'grey-2':(communityMealsMayContents.kpi2 >= '0' && communityMealsMayContents.kpi2 <= '90')?'red':(communityMealsMayContents.kpi2 > '90' && communityMealsMayContents.kpi2 <= '120')?'orange':(communityMealsMayContents.kpi2 > '120' && communityMealsMayContents.kpi2 < '150')?'yellow-7':(communityMealsMayContents.kpi2 >= '150' && communityMealsMayContents.kpi2 < '180')?'green':(communityMealsMayContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMayContents.kpi3 == null)?'grey-2':(communityMealsMayContents.kpi3 >= '0' && communityMealsMayContents.kpi3 <= '2.6')?'red':(communityMealsMayContents.kpi3 > '2.6' && communityMealsMayContents.kpi3 <= '3.466666667')?'orange':(communityMealsMayContents.kpi3 > '3.466666667' && communityMealsMayContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsMayContents.kpi3 >= '4.333333333' && communityMealsMayContents.kpi3 < '5.2')?'green':(communityMealsMayContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsMayContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMayContents.kpi4 == null)?'grey-2':(communityMealsMayContents.kpi4 >= '0' && communityMealsMayContents.kpi4 <= '384.2')?'red':(communityMealsMayContents.kpi4 > '384.2' && communityMealsMayContents.kpi4 <= '512.2666667')?'orange':(communityMealsMayContents.kpi4 > '512.2666667' && communityMealsMayContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsMayContents.kpi4 >= '640.3333333' && communityMealsMayContents.kpi4 < '768.4')?'green':(communityMealsMayContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsMayContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsJunContents.kpi1 == null)?'grey-2':(communityMealsJunContents.kpi1 >= '0' && communityMealsJunContents.kpi1 <= '9.8')?'red':(communityMealsJunContents.kpi1 > '9.8' && communityMealsJunContents.kpi1 <= '13.06666667')?'orange':(communityMealsJunContents.kpi1 > '13.06666667' && communityMealsJunContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsJunContents.kpi1 >= '16.33333333' && communityMealsJunContents.kpi1 < '19.6')?'green':(communityMealsJunContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJunContents.kpi2 == null)?'grey-2':(communityMealsJunContents.kpi2 >= '0' && communityMealsJunContents.kpi2 <= '90')?'red':(communityMealsJunContents.kpi2 > '90' && communityMealsJunContents.kpi2 <= '120')?'orange':(communityMealsJunContents.kpi2 > '120' && communityMealsJunContents.kpi2 < '150')?'yellow-7':(communityMealsJunContents.kpi2 >= '150' && communityMealsJunContents.kpi2 < '180')?'green':(communityMealsJunContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJunContents.kpi3 == null)?'grey-2':(communityMealsJunContents.kpi3 >= '0' && communityMealsJunContents.kpi3 <= '2.6')?'red':(communityMealsJunContents.kpi3 > '2.6' && communityMealsJunContents.kpi3 <= '3.466666667')?'orange':(communityMealsJunContents.kpi3 > '3.466666667' && communityMealsJunContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsJunContents.kpi3 >= '4.333333333' && communityMealsJunContents.kpi3 < '5.2')?'green':(communityMealsJunContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsJunContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJunContents.kpi4 == null)?'grey-2':(communityMealsJunContents.kpi4 >= '0' && communityMealsJunContents.kpi4 <= '384.2')?'red':(communityMealsJunContents.kpi4 > '384.2' && communityMealsJunContents.kpi4 <= '512.2666667')?'orange':(communityMealsJunContents.kpi4 > '512.2666667' && communityMealsJunContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsJunContents.kpi4 >= '640.3333333' && communityMealsJunContents.kpi4 < '768.4')?'green':(communityMealsJunContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsJunContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsJulContents.kpi1 == null)?'grey-2':(communityMealsJulContents.kpi1 >= '0' && communityMealsJulContents.kpi1 <= '9.8')?'red':(communityMealsJulContents.kpi1 > '9.8' && communityMealsJulContents.kpi1 <= '13.06666667')?'orange':(communityMealsJulContents.kpi1 > '13.06666667' && communityMealsJulContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsJulContents.kpi1 >= '16.33333333' && communityMealsJulContents.kpi1 < '19.6')?'green':(communityMealsJulContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJulContents.kpi2 == null)?'grey-2':(communityMealsJulContents.kpi2 >= '0' && communityMealsJulContents.kpi2 <= '90')?'red':(communityMealsJulContents.kpi2 > '90' && communityMealsJulContents.kpi2 <= '120')?'orange':(communityMealsJulContents.kpi2 > '120' && communityMealsJulContents.kpi2 < '150')?'yellow-7':(communityMealsJulContents.kpi2 >= '150' && communityMealsJulContents.kpi2 < '180')?'green':(communityMealsJulContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJulContents.kpi3 == null)?'grey-2':(communityMealsJulContents.kpi3 >= '0' && communityMealsJulContents.kpi3 <= '2.6')?'red':(communityMealsJulContents.kpi3 > '2.6' && communityMealsJulContents.kpi3 <= '3.466666667')?'orange':(communityMealsJulContents.kpi3 > '3.466666667' && communityMealsJulContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsJulContents.kpi3 >= '4.333333333' && communityMealsJulContents.kpi3 < '5.2')?'green':(communityMealsJulContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsJulContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJulContents.kpi4 == null)?'grey-2':(communityMealsJulContents.kpi4 >= '0' && communityMealsJulContents.kpi4 <= '384.2')?'red':(communityMealsJulContents.kpi4 > '384.2' && communityMealsJulContents.kpi4 <= '512.2666667')?'orange':(communityMealsJulContents.kpi4 > '512.2666667' && communityMealsJulContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsJulContents.kpi4 >= '640.3333333' && communityMealsJulContents.kpi4 < '768.4')?'green':(communityMealsJulContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsJulContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsAugContents.kpi1 == null)?'grey-2':(communityMealsAugContents.kpi1 >= '0' && communityMealsAugContents.kpi1 <= '9.8')?'red':(communityMealsAugContents.kpi1 > '9.8' && communityMealsAugContents.kpi1 <= '13.06666667')?'orange':(communityMealsAugContents.kpi1 > '13.06666667' && communityMealsAugContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsAugContents.kpi1 >= '16.33333333' && communityMealsAugContents.kpi1 < '19.6')?'green':(communityMealsAugContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAugContents.kpi2 == null)?'grey-2':(communityMealsAugContents.kpi2 >= '0' && communityMealsAugContents.kpi2 <= '90')?'red':(communityMealsAugContents.kpi2 > '90' && communityMealsAugContents.kpi2 <= '120')?'orange':(communityMealsAugContents.kpi2 > '120' && communityMealsAugContents.kpi2 < '150')?'yellow-7':(communityMealsAugContents.kpi2 >= '150' && communityMealsAugContents.kpi2 < '180')?'green':(communityMealsAugContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAugContents.kpi3 == null)?'grey-2':(communityMealsAugContents.kpi3 >= '0' && communityMealsAugContents.kpi3 <= '2.6')?'red':(communityMealsAugContents.kpi3 > '2.6' && communityMealsAugContents.kpi3 <= '3.466666667')?'orange':(communityMealsAugContents.kpi3 > '3.466666667' && communityMealsAugContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsAugContents.kpi3 >= '4.333333333' && communityMealsAugContents.kpi3 < '5.2')?'green':(communityMealsAugContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsAugContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAugContents.kpi4 == null)?'grey-2':(communityMealsAugContents.kpi4 >= '0' && communityMealsAugContents.kpi4 <= '384.2')?'red':(communityMealsAugContents.kpi4 > '384.2' && communityMealsAugContents.kpi4 <= '512.2666667')?'orange':(communityMealsAugContents.kpi4 > '512.2666667' && communityMealsAugContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsAugContents.kpi4 >= '640.3333333' && communityMealsAugContents.kpi4 < '768.4')?'green':(communityMealsAugContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsAugContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsSepContents.kpi1 == null)?'grey-2':(communityMealsSepContents.kpi1 >= '0' && communityMealsSepContents.kpi1 <= '9.8')?'red':(communityMealsSepContents.kpi1 > '9.8' && communityMealsSepContents.kpi1 <= '13.06666667')?'orange':(communityMealsSepContents.kpi1 > '13.06666667' && communityMealsSepContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsSepContents.kpi1 >= '16.33333333' && communityMealsSepContents.kpi1 < '19.6')?'green':(communityMealsSepContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsSepContents.kpi2 == null)?'grey-2':(communityMealsSepContents.kpi2 >= '0' && communityMealsSepContents.kpi2 <= '90')?'red':(communityMealsSepContents.kpi2 > '90' && communityMealsSepContents.kpi2 <= '120')?'orange':(communityMealsSepContents.kpi2 > '120' && communityMealsSepContents.kpi2 < '150')?'yellow-7':(communityMealsSepContents.kpi2 >= '150' && communityMealsSepContents.kpi2 < '180')?'green':(communityMealsSepContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsSepContents.kpi3 == null)?'grey-2':(communityMealsSepContents.kpi3 >= '0' && communityMealsSepContents.kpi3 <= '2.6')?'red':(communityMealsSepContents.kpi3 > '2.6' && communityMealsSepContents.kpi3 <= '3.466666667')?'orange':(communityMealsSepContents.kpi3 > '3.466666667' && communityMealsSepContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsSepContents.kpi3 >= '4.333333333' && communityMealsSepContents.kpi3 < '5.2')?'green':(communityMealsSepContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsSepContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsSepContents.kpi4 == null)?'grey-2':(communityMealsSepContents.kpi4 >= '0' && communityMealsSepContents.kpi4 <= '384.2')?'red':(communityMealsSepContents.kpi4 > '384.2' && communityMealsSepContents.kpi4 <= '512.2666667')?'orange':(communityMealsSepContents.kpi4 > '512.2666667' && communityMealsSepContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsSepContents.kpi4 >= '640.3333333' && communityMealsSepContents.kpi4 < '768.4')?'green':(communityMealsSepContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsSepContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsOctContents.kpi1 == null)?'grey-2':(communityMealsOctContents.kpi1 >= '0' && communityMealsOctContents.kpi1 <= '9.8')?'red':(communityMealsOctContents.kpi1 > '9.8' && communityMealsOctContents.kpi1 <= '13.06666667')?'orange':(communityMealsOctContents.kpi1 > '13.06666667' && communityMealsOctContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsOctContents.kpi1 >= '16.33333333' && communityMealsOctContents.kpi1 < '19.6')?'green':(communityMealsOctContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsOctContents.kpi2 == null)?'grey-2':(communityMealsOctContents.kpi2 >= '0' && communityMealsOctContents.kpi2 <= '90')?'red':(communityMealsOctContents.kpi2 > '90' && communityMealsOctContents.kpi2 <= '120')?'orange':(communityMealsOctContents.kpi2 > '120' && communityMealsOctContents.kpi2 < '150')?'yellow-7':(communityMealsOctContents.kpi2 >= '150' && communityMealsOctContents.kpi2 < '180')?'green':(communityMealsOctContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsOctContents.kpi3 == null)?'grey-2':(communityMealsOctContents.kpi3 >= '0' && communityMealsOctContents.kpi3 <= '2.6')?'red':(communityMealsOctContents.kpi3 > '2.6' && communityMealsOctContents.kpi3 <= '3.466666667')?'orange':(communityMealsOctContents.kpi3 > '3.466666667' && communityMealsOctContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsOctContents.kpi3 >= '4.333333333' && communityMealsOctContents.kpi3 < '5.2')?'green':(communityMealsOctContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsOctContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsOctContents.kpi4 == null)?'grey-2':(communityMealsOctContents.kpi4 >= '0' && communityMealsOctContents.kpi4 <= '384.2')?'red':(communityMealsOctContents.kpi4 > '384.2' && communityMealsOctContents.kpi4 <= '512.2666667')?'orange':(communityMealsOctContents.kpi4 > '512.2666667' && communityMealsOctContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsOctContents.kpi4 >= '640.3333333' && communityMealsOctContents.kpi4 < '768.4')?'green':(communityMealsOctContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsOctContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsNovContents.kpi1 == null)?'grey-2':(communityMealsNovContents.kpi1 >= '0' && communityMealsNovContents.kpi1 <= '9.8')?'red':(communityMealsNovContents.kpi1 > '9.8' && communityMealsNovContents.kpi1 <= '13.06666667')?'orange':(communityMealsNovContents.kpi1 > '13.06666667' && communityMealsNovContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsNovContents.kpi1 >= '16.33333333' && communityMealsNovContents.kpi1 < '19.6')?'green':(communityMealsNovContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsNovContents.kpi2 == null)?'grey-2':(communityMealsNovContents.kpi2 >= '0' && communityMealsNovContents.kpi2 <= '90')?'red':(communityMealsNovContents.kpi2 > '90' && communityMealsNovContents.kpi2 <= '120')?'orange':(communityMealsNovContents.kpi2 > '120' && communityMealsNovContents.kpi2 < '150')?'yellow-7':(communityMealsNovContents.kpi2 >= '150' && communityMealsNovContents.kpi2 < '180')?'green':(communityMealsNovContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsNovContents.kpi3 == null)?'grey-2':(communityMealsNovContents.kpi3 >= '0' && communityMealsNovContents.kpi3 <= '2.6')?'red':(communityMealsNovContents.kpi3 > '2.6' && communityMealsNovContents.kpi3 <= '3.466666667')?'orange':(communityMealsNovContents.kpi3 > '3.466666667' && communityMealsNovContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsNovContents.kpi3 >= '4.333333333' && communityMealsNovContents.kpi3 < '5.2')?'green':(communityMealsNovContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsNovContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsNovContents.kpi4 == null)?'grey-2':(communityMealsNovContents.kpi4 >= '0' && communityMealsNovContents.kpi4 <= '384.2')?'red':(communityMealsNovContents.kpi4 > '384.2' && communityMealsNovContents.kpi4 <= '512.2666667')?'orange':(communityMealsNovContents.kpi4 > '512.2666667' && communityMealsNovContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsNovContents.kpi4 >= '640.3333333' && communityMealsNovContents.kpi4 < '768.4')?'green':(communityMealsNovContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsNovContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsDecContents.kpi1 == null)?'grey-2':(communityMealsDecContents.kpi1 >= '0' && communityMealsDecContents.kpi1 <= '9.8')?'red':(communityMealsDecContents.kpi1 > '9.8' && communityMealsDecContents.kpi1 <= '13.06666667')?'orange':(communityMealsDecContents.kpi1 > '13.06666667' && communityMealsDecContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsDecContents.kpi1 >= '16.33333333' && communityMealsDecContents.kpi1 < '19.6')?'green':(communityMealsDecContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsDecContents.kpi2 == null)?'grey-2':(communityMealsDecContents.kpi2 >= '0' && communityMealsDecContents.kpi2 <= '90')?'red':(communityMealsDecContents.kpi2 > '90' && communityMealsDecContents.kpi2 <= '120')?'orange':(communityMealsDecContents.kpi2 > '120' && communityMealsDecContents.kpi2 < '150')?'yellow-7':(communityMealsDecContents.kpi2 >= '150' && communityMealsDecContents.kpi2 < '180')?'green':(communityMealsDecContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsDecContents.kpi3 == null)?'grey-2':(communityMealsDecContents.kpi3 >= '0' && communityMealsDecContents.kpi3 <= '2.6')?'red':(communityMealsDecContents.kpi3 > '2.6' && communityMealsDecContents.kpi3 <= '3.466666667')?'orange':(communityMealsDecContents.kpi3 > '3.466666667' && communityMealsDecContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsDecContents.kpi3 >= '4.333333333' && communityMealsDecContents.kpi3 < '5.2')?'green':(communityMealsDecContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsDecContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsDecContents.kpi4 == null)?'grey-2':(communityMealsDecContents.kpi4 >= '0' && communityMealsDecContents.kpi4 <= '384.2')?'red':(communityMealsDecContents.kpi4 > '384.2' && communityMealsDecContents.kpi4 <= '512.2666667')?'orange':(communityMealsDecContents.kpi4 > '512.2666667' && communityMealsDecContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsDecContents.kpi4 >= '640.3333333' && communityMealsDecContents.kpi4 < '768.4')?'green':(communityMealsDecContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsDecContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                                <q-tooltip>Activities (#)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsJanContents.kpi1 == null)?'grey-2':(communityMealsJanContents.kpi1 >= '0' && communityMealsJanContents.kpi1 <= '9.8')?'red':(communityMealsJanContents.kpi1 > '9.8' && communityMealsJanContents.kpi1 <= '13.06666667')?'orange':(communityMealsJanContents.kpi1 > '13.06666667' && communityMealsJanContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsJanContents.kpi1 >= '16.33333333' && communityMealsJanContents.kpi1 < '19.6')?'green':(communityMealsJanContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJanContents.kpi2 == null)?'grey-2':(communityMealsJanContents.kpi2 >= '0' && communityMealsJanContents.kpi2 <= '90')?'red':(communityMealsJanContents.kpi2 > '90' && communityMealsJanContents.kpi2 <= '120')?'orange':(communityMealsJanContents.kpi2 > '120' && communityMealsJanContents.kpi2 < '150')?'yellow-7':(communityMealsJanContents.kpi2 >= '150' && communityMealsJanContents.kpi2 < '180')?'green':(communityMealsJanContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJanContents.kpi3 == null)?'grey-2':(communityMealsJanContents.kpi3 >= '0' && communityMealsJanContents.kpi3 <= '2.6')?'red':(communityMealsJanContents.kpi3 > '2.6' && communityMealsJanContents.kpi3 <= '3.466666667')?'orange':(communityMealsJanContents.kpi3 > '3.466666667' && communityMealsJanContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsJanContents.kpi3 >= '4.333333333' && communityMealsJanContents.kpi3 < '5.2')?'green':(communityMealsJanContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsJanContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJanContents.kpi4 == null)?'grey-2':(communityMealsJanContents.kpi4 >= '0' && communityMealsJanContents.kpi4 <= '384.2')?'red':(communityMealsJanContents.kpi4 > '384.2' && communityMealsJanContents.kpi4 <= '512.2666667')?'orange':(communityMealsJanContents.kpi4 > '512.2666667' && communityMealsJanContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsJanContents.kpi4 >= '640.3333333' && communityMealsJanContents.kpi4 < '768.4')?'green':(communityMealsJanContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsJanContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsFebContents.kpi1 == null)?'grey-2':(communityMealsFebContents.kpi1 >= '0' && communityMealsFebContents.kpi1 <= '9.8')?'red':(communityMealsFebContents.kpi1 > '9.8' && communityMealsFebContents.kpi1 <= '13.06666667')?'orange':(communityMealsFebContents.kpi1 > '13.06666667' && communityMealsFebContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsFebContents.kpi1 >= '16.33333333' && communityMealsFebContents.kpi1 < '19.6')?'green':(communityMealsFebContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsFebContents.kpi2 == null)?'grey-2':(communityMealsFebContents.kpi2 >= '0' && communityMealsFebContents.kpi2 <= '90')?'red':(communityMealsFebContents.kpi2 > '90' && communityMealsFebContents.kpi2 <= '120')?'orange':(communityMealsFebContents.kpi2 > '120' && communityMealsFebContents.kpi2 < '150')?'yellow-7':(communityMealsFebContents.kpi2 >= '150' && communityMealsFebContents.kpi2 < '180')?'green':(communityMealsFebContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsFebContents.kpi3 == null)?'grey-2':(communityMealsFebContents.kpi3 >= '0' && communityMealsFebContents.kpi3 <= '2.6')?'red':(communityMealsFebContents.kpi3 > '2.6' && communityMealsFebContents.kpi3 <= '3.466666667')?'orange':(communityMealsFebContents.kpi3 > '3.466666667' && communityMealsFebContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsFebContents.kpi3 >= '4.333333333' && communityMealsFebContents.kpi3 < '5.2')?'green':(communityMealsFebContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsFebContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsFebContents.kpi4 == null)?'grey-2':(communityMealsFebContents.kpi4 >= '0' && communityMealsFebContents.kpi4 <= '384.2')?'red':(communityMealsFebContents.kpi4 > '384.2' && communityMealsFebContents.kpi4 <= '512.2666667')?'orange':(communityMealsFebContents.kpi4 > '512.2666667' && communityMealsFebContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsFebContents.kpi4 >= '640.3333333' && communityMealsFebContents.kpi4 < '768.4')?'green':(communityMealsFebContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsFebContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsMarContents.kpi1 == null)?'grey-2':(communityMealsMarContents.kpi1 >= '0' && communityMealsMarContents.kpi1 <= '9.8')?'red':(communityMealsMarContents.kpi1 > '9.8' && communityMealsMarContents.kpi1 <= '13.06666667')?'orange':(communityMealsMarContents.kpi1 > '13.06666667' && communityMealsMarContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsMarContents.kpi1 >= '16.33333333' && communityMealsMarContents.kpi1 < '19.6')?'green':(communityMealsMarContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMarContents.kpi2 == null)?'grey-2':(communityMealsMarContents.kpi2 >= '0' && communityMealsMarContents.kpi2 <= '90')?'red':(communityMealsMarContents.kpi2 > '90' && communityMealsMarContents.kpi2 <= '120')?'orange':(communityMealsMarContents.kpi2 > '120' && communityMealsMarContents.kpi2 < '150')?'yellow-7':(communityMealsMarContents.kpi2 >= '150' && communityMealsMarContents.kpi2 < '180')?'green':(communityMealsMarContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMarContents.kpi3 == null)?'grey-2':(communityMealsMarContents.kpi3 >= '0' && communityMealsMarContents.kpi3 <= '2.6')?'red':(communityMealsMarContents.kpi3 > '2.6' && communityMealsMarContents.kpi3 <= '3.466666667')?'orange':(communityMealsMarContents.kpi3 > '3.466666667' && communityMealsMarContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsMarContents.kpi3 >= '4.333333333' && communityMealsMarContents.kpi3 < '5.2')?'green':(communityMealsMarContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsMarContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMarContents.kpi4 == null)?'grey-2':(communityMealsMarContents.kpi4 >= '0' && communityMealsMarContents.kpi4 <= '384.2')?'red':(communityMealsMarContents.kpi4 > '384.2' && communityMealsMarContents.kpi4 <= '512.2666667')?'orange':(communityMealsMarContents.kpi4 > '512.2666667' && communityMealsMarContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsMarContents.kpi4 >= '640.3333333' && communityMealsMarContents.kpi4 < '768.4')?'green':(communityMealsMarContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsMarContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsAprContents.kpi1 == null)?'grey-2':(communityMealsAprContents.kpi1 >= '0' && communityMealsAprContents.kpi1 <= '9.8')?'red':(communityMealsAprContents.kpi1 > '9.8' && communityMealsAprContents.kpi1 <= '13.06666667')?'orange':(communityMealsAprContents.kpi1 > '13.06666667' && communityMealsAprContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsAprContents.kpi1 >= '16.33333333' && communityMealsAprContents.kpi1 < '19.6')?'green':(communityMealsAprContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAprContents.kpi2 == null)?'grey-2':(communityMealsAprContents.kpi2 >= '0' && communityMealsAprContents.kpi2 <= '90')?'red':(communityMealsAprContents.kpi2 > '90' && communityMealsAprContents.kpi2 <= '120')?'orange':(communityMealsAprContents.kpi2 > '120' && communityMealsAprContents.kpi2 < '150')?'yellow-7':(communityMealsAprContents.kpi2 >= '150' && communityMealsAprContents.kpi2 < '180')?'green':(communityMealsAprContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAprContents.kpi3 == null)?'grey-2':(communityMealsAprContents.kpi3 >= '0' && communityMealsAprContents.kpi3 <= '2.6')?'red':(communityMealsAprContents.kpi3 > '2.6' && communityMealsAprContents.kpi3 <= '3.466666667')?'orange':(communityMealsAprContents.kpi3 > '3.466666667' && communityMealsAprContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsAprContents.kpi3 >= '4.333333333' && communityMealsAprContents.kpi3 < '5.2')?'green':(communityMealsAprContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsAprContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAprContents.kpi4 == null)?'grey-2':(communityMealsAprContents.kpi4 >= '0' && communityMealsAprContents.kpi4 <= '384.2')?'red':(communityMealsAprContents.kpi4 > '384.2' && communityMealsAprContents.kpi4 <= '512.2666667')?'orange':(communityMealsAprContents.kpi4 > '512.2666667' && communityMealsAprContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsAprContents.kpi4 >= '640.3333333' && communityMealsAprContents.kpi4 < '768.4')?'green':(communityMealsAprContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsAprContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsMayContents.kpi1 == null)?'grey-2':(communityMealsMayContents.kpi1 >= '0' && communityMealsMayContents.kpi1 <= '9.8')?'red':(communityMealsMayContents.kpi1 > '9.8' && communityMealsMayContents.kpi1 <= '13.06666667')?'orange':(communityMealsMayContents.kpi1 > '13.06666667' && communityMealsMayContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsMayContents.kpi1 >= '16.33333333' && communityMealsMayContents.kpi1 < '19.6')?'green':(communityMealsMayContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMayContents.kpi2 == null)?'grey-2':(communityMealsMayContents.kpi2 >= '0' && communityMealsMayContents.kpi2 <= '90')?'red':(communityMealsMayContents.kpi2 > '90' && communityMealsMayContents.kpi2 <= '120')?'orange':(communityMealsMayContents.kpi2 > '120' && communityMealsMayContents.kpi2 < '150')?'yellow-7':(communityMealsMayContents.kpi2 >= '150' && communityMealsMayContents.kpi2 < '180')?'green':(communityMealsMayContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMayContents.kpi3 == null)?'grey-2':(communityMealsMayContents.kpi3 >= '0' && communityMealsMayContents.kpi3 <= '2.6')?'red':(communityMealsMayContents.kpi3 > '2.6' && communityMealsMayContents.kpi3 <= '3.466666667')?'orange':(communityMealsMayContents.kpi3 > '3.466666667' && communityMealsMayContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsMayContents.kpi3 >= '4.333333333' && communityMealsMayContents.kpi3 < '5.2')?'green':(communityMealsMayContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsMayContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMayContents.kpi4 == null)?'grey-2':(communityMealsMayContents.kpi4 >= '0' && communityMealsMayContents.kpi4 <= '384.2')?'red':(communityMealsMayContents.kpi4 > '384.2' && communityMealsMayContents.kpi4 <= '512.2666667')?'orange':(communityMealsMayContents.kpi4 > '512.2666667' && communityMealsMayContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsMayContents.kpi4 >= '640.3333333' && communityMealsMayContents.kpi4 < '768.4')?'green':(communityMealsMayContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsMayContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsJunContents.kpi1 == null)?'grey-2':(communityMealsJunContents.kpi1 >= '0' && communityMealsJunContents.kpi1 <= '9.8')?'red':(communityMealsJunContents.kpi1 > '9.8' && communityMealsJunContents.kpi1 <= '13.06666667')?'orange':(communityMealsJunContents.kpi1 > '13.06666667' && communityMealsJunContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsJunContents.kpi1 >= '16.33333333' && communityMealsJunContents.kpi1 < '19.6')?'green':(communityMealsJunContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJunContents.kpi2 == null)?'grey-2':(communityMealsJunContents.kpi2 >= '0' && communityMealsJunContents.kpi2 <= '90')?'red':(communityMealsJunContents.kpi2 > '90' && communityMealsJunContents.kpi2 <= '120')?'orange':(communityMealsJunContents.kpi2 > '120' && communityMealsJunContents.kpi2 < '150')?'yellow-7':(communityMealsJunContents.kpi2 >= '150' && communityMealsJunContents.kpi2 < '180')?'green':(communityMealsJunContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJunContents.kpi3 == null)?'grey-2':(communityMealsJunContents.kpi3 >= '0' && communityMealsJunContents.kpi3 <= '2.6')?'red':(communityMealsJunContents.kpi3 > '2.6' && communityMealsJunContents.kpi3 <= '3.466666667')?'orange':(communityMealsJunContents.kpi3 > '3.466666667' && communityMealsJunContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsJunContents.kpi3 >= '4.333333333' && communityMealsJunContents.kpi3 < '5.2')?'green':(communityMealsJunContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsJunContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJunContents.kpi4 == null)?'grey-2':(communityMealsJunContents.kpi4 >= '0' && communityMealsJunContents.kpi4 <= '384.2')?'red':(communityMealsJunContents.kpi4 > '384.2' && communityMealsJunContents.kpi4 <= '512.2666667')?'orange':(communityMealsJunContents.kpi4 > '512.2666667' && communityMealsJunContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsJunContents.kpi4 >= '640.3333333' && communityMealsJunContents.kpi4 < '768.4')?'green':(communityMealsJunContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsJunContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsJulContents.kpi1 == null)?'grey-2':(communityMealsJulContents.kpi1 >= '0' && communityMealsJulContents.kpi1 <= '9.8')?'red':(communityMealsJulContents.kpi1 > '9.8' && communityMealsJulContents.kpi1 <= '13.06666667')?'orange':(communityMealsJulContents.kpi1 > '13.06666667' && communityMealsJulContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsJulContents.kpi1 >= '16.33333333' && communityMealsJulContents.kpi1 < '19.6')?'green':(communityMealsJulContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJulContents.kpi2 == null)?'grey-2':(communityMealsJulContents.kpi2 >= '0' && communityMealsJulContents.kpi2 <= '90')?'red':(communityMealsJulContents.kpi2 > '90' && communityMealsJulContents.kpi2 <= '120')?'orange':(communityMealsJulContents.kpi2 > '120' && communityMealsJulContents.kpi2 < '150')?'yellow-7':(communityMealsJulContents.kpi2 >= '150' && communityMealsJulContents.kpi2 < '180')?'green':(communityMealsJulContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJulContents.kpi3 == null)?'grey-2':(communityMealsJulContents.kpi3 >= '0' && communityMealsJulContents.kpi3 <= '2.6')?'red':(communityMealsJulContents.kpi3 > '2.6' && communityMealsJulContents.kpi3 <= '3.466666667')?'orange':(communityMealsJulContents.kpi3 > '3.466666667' && communityMealsJulContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsJulContents.kpi3 >= '4.333333333' && communityMealsJulContents.kpi3 < '5.2')?'green':(communityMealsJulContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsJulContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJulContents.kpi4 == null)?'grey-2':(communityMealsJulContents.kpi4 >= '0' && communityMealsJulContents.kpi4 <= '384.2')?'red':(communityMealsJulContents.kpi4 > '384.2' && communityMealsJulContents.kpi4 <= '512.2666667')?'orange':(communityMealsJulContents.kpi4 > '512.2666667' && communityMealsJulContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsJulContents.kpi4 >= '640.3333333' && communityMealsJulContents.kpi4 < '768.4')?'green':(communityMealsJulContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsJulContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsAugContents.kpi1 == null)?'grey-2':(communityMealsAugContents.kpi1 >= '0' && communityMealsAugContents.kpi1 <= '9.8')?'red':(communityMealsAugContents.kpi1 > '9.8' && communityMealsAugContents.kpi1 <= '13.06666667')?'orange':(communityMealsAugContents.kpi1 > '13.06666667' && communityMealsAugContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsAugContents.kpi1 >= '16.33333333' && communityMealsAugContents.kpi1 < '19.6')?'green':(communityMealsAugContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAugContents.kpi2 == null)?'grey-2':(communityMealsAugContents.kpi2 >= '0' && communityMealsAugContents.kpi2 <= '90')?'red':(communityMealsAugContents.kpi2 > '90' && communityMealsAugContents.kpi2 <= '120')?'orange':(communityMealsAugContents.kpi2 > '120' && communityMealsAugContents.kpi2 < '150')?'yellow-7':(communityMealsAugContents.kpi2 >= '150' && communityMealsAugContents.kpi2 < '180')?'green':(communityMealsAugContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAugContents.kpi3 == null)?'grey-2':(communityMealsAugContents.kpi3 >= '0' && communityMealsAugContents.kpi3 <= '2.6')?'red':(communityMealsAugContents.kpi3 > '2.6' && communityMealsAugContents.kpi3 <= '3.466666667')?'orange':(communityMealsAugContents.kpi3 > '3.466666667' && communityMealsAugContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsAugContents.kpi3 >= '4.333333333' && communityMealsAugContents.kpi3 < '5.2')?'green':(communityMealsAugContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsAugContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAugContents.kpi4 == null)?'grey-2':(communityMealsAugContents.kpi4 >= '0' && communityMealsAugContents.kpi4 <= '384.2')?'red':(communityMealsAugContents.kpi4 > '384.2' && communityMealsAugContents.kpi4 <= '512.2666667')?'orange':(communityMealsAugContents.kpi4 > '512.2666667' && communityMealsAugContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsAugContents.kpi4 >= '640.3333333' && communityMealsAugContents.kpi4 < '768.4')?'green':(communityMealsAugContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsAugContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsSepContents.kpi1 == null)?'grey-2':(communityMealsSepContents.kpi1 >= '0' && communityMealsSepContents.kpi1 <= '9.8')?'red':(communityMealsSepContents.kpi1 > '9.8' && communityMealsSepContents.kpi1 <= '13.06666667')?'orange':(communityMealsSepContents.kpi1 > '13.06666667' && communityMealsSepContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsSepContents.kpi1 >= '16.33333333' && communityMealsSepContents.kpi1 < '19.6')?'green':(communityMealsSepContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsSepContents.kpi2 == null)?'grey-2':(communityMealsSepContents.kpi2 >= '0' && communityMealsSepContents.kpi2 <= '90')?'red':(communityMealsSepContents.kpi2 > '90' && communityMealsSepContents.kpi2 <= '120')?'orange':(communityMealsSepContents.kpi2 > '120' && communityMealsSepContents.kpi2 < '150')?'yellow-7':(communityMealsSepContents.kpi2 >= '150' && communityMealsSepContents.kpi2 < '180')?'green':(communityMealsSepContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsSepContents.kpi3 == null)?'grey-2':(communityMealsSepContents.kpi3 >= '0' && communityMealsSepContents.kpi3 <= '2.6')?'red':(communityMealsSepContents.kpi3 > '2.6' && communityMealsSepContents.kpi3 <= '3.466666667')?'orange':(communityMealsSepContents.kpi3 > '3.466666667' && communityMealsSepContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsSepContents.kpi3 >= '4.333333333' && communityMealsSepContents.kpi3 < '5.2')?'green':(communityMealsSepContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsSepContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsSepContents.kpi4 == null)?'grey-2':(communityMealsSepContents.kpi4 >= '0' && communityMealsSepContents.kpi4 <= '384.2')?'red':(communityMealsSepContents.kpi4 > '384.2' && communityMealsSepContents.kpi4 <= '512.2666667')?'orange':(communityMealsSepContents.kpi4 > '512.2666667' && communityMealsSepContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsSepContents.kpi4 >= '640.3333333' && communityMealsSepContents.kpi4 < '768.4')?'green':(communityMealsSepContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsSepContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsOctContents.kpi1 == null)?'grey-2':(communityMealsOctContents.kpi1 >= '0' && communityMealsOctContents.kpi1 <= '9.8')?'red':(communityMealsOctContents.kpi1 > '9.8' && communityMealsOctContents.kpi1 <= '13.06666667')?'orange':(communityMealsOctContents.kpi1 > '13.06666667' && communityMealsOctContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsOctContents.kpi1 >= '16.33333333' && communityMealsOctContents.kpi1 < '19.6')?'green':(communityMealsOctContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsOctContents.kpi2 == null)?'grey-2':(communityMealsOctContents.kpi2 >= '0' && communityMealsOctContents.kpi2 <= '90')?'red':(communityMealsOctContents.kpi2 > '90' && communityMealsOctContents.kpi2 <= '120')?'orange':(communityMealsOctContents.kpi2 > '120' && communityMealsOctContents.kpi2 < '150')?'yellow-7':(communityMealsOctContents.kpi2 >= '150' && communityMealsOctContents.kpi2 < '180')?'green':(communityMealsOctContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsOctContents.kpi3 == null)?'grey-2':(communityMealsOctContents.kpi3 >= '0' && communityMealsOctContents.kpi3 <= '2.6')?'red':(communityMealsOctContents.kpi3 > '2.6' && communityMealsOctContents.kpi3 <= '3.466666667')?'orange':(communityMealsOctContents.kpi3 > '3.466666667' && communityMealsOctContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsOctContents.kpi3 >= '4.333333333' && communityMealsOctContents.kpi3 < '5.2')?'green':(communityMealsOctContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsOctContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsOctContents.kpi4 == null)?'grey-2':(communityMealsOctContents.kpi4 >= '0' && communityMealsOctContents.kpi4 <= '384.2')?'red':(communityMealsOctContents.kpi4 > '384.2' && communityMealsOctContents.kpi4 <= '512.2666667')?'orange':(communityMealsOctContents.kpi4 > '512.2666667' && communityMealsOctContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsOctContents.kpi4 >= '640.3333333' && communityMealsOctContents.kpi4 < '768.4')?'green':(communityMealsOctContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsOctContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsNovContents.kpi1 == null)?'grey-2':(communityMealsNovContents.kpi1 >= '0' && communityMealsNovContents.kpi1 <= '9.8')?'red':(communityMealsNovContents.kpi1 > '9.8' && communityMealsNovContents.kpi1 <= '13.06666667')?'orange':(communityMealsNovContents.kpi1 > '13.06666667' && communityMealsNovContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsNovContents.kpi1 >= '16.33333333' && communityMealsNovContents.kpi1 < '19.6')?'green':(communityMealsNovContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsNovContents.kpi2 == null)?'grey-2':(communityMealsNovContents.kpi2 >= '0' && communityMealsNovContents.kpi2 <= '90')?'red':(communityMealsNovContents.kpi2 > '90' && communityMealsNovContents.kpi2 <= '120')?'orange':(communityMealsNovContents.kpi2 > '120' && communityMealsNovContents.kpi2 < '150')?'yellow-7':(communityMealsNovContents.kpi2 >= '150' && communityMealsNovContents.kpi2 < '180')?'green':(communityMealsNovContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsNovContents.kpi3 == null)?'grey-2':(communityMealsNovContents.kpi3 >= '0' && communityMealsNovContents.kpi3 <= '2.6')?'red':(communityMealsNovContents.kpi3 > '2.6' && communityMealsNovContents.kpi3 <= '3.466666667')?'orange':(communityMealsNovContents.kpi3 > '3.466666667' && communityMealsNovContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsNovContents.kpi3 >= '4.333333333' && communityMealsNovContents.kpi3 < '5.2')?'green':(communityMealsNovContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsNovContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsNovContents.kpi4 == null)?'grey-2':(communityMealsNovContents.kpi4 >= '0' && communityMealsNovContents.kpi4 <= '384.2')?'red':(communityMealsNovContents.kpi4 > '384.2' && communityMealsNovContents.kpi4 <= '512.2666667')?'orange':(communityMealsNovContents.kpi4 > '512.2666667' && communityMealsNovContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsNovContents.kpi4 >= '640.3333333' && communityMealsNovContents.kpi4 < '768.4')?'green':(communityMealsNovContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsNovContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsDecContents.kpi1 == null)?'grey-2':(communityMealsDecContents.kpi1 >= '0' && communityMealsDecContents.kpi1 <= '9.8')?'red':(communityMealsDecContents.kpi1 > '9.8' && communityMealsDecContents.kpi1 <= '13.06666667')?'orange':(communityMealsDecContents.kpi1 > '13.06666667' && communityMealsDecContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsDecContents.kpi1 >= '16.33333333' && communityMealsDecContents.kpi1 < '19.6')?'green':(communityMealsDecContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsDecContents.kpi2 == null)?'grey-2':(communityMealsDecContents.kpi2 >= '0' && communityMealsDecContents.kpi2 <= '90')?'red':(communityMealsDecContents.kpi2 > '90' && communityMealsDecContents.kpi2 <= '120')?'orange':(communityMealsDecContents.kpi2 > '120' && communityMealsDecContents.kpi2 < '150')?'yellow-7':(communityMealsDecContents.kpi2 >= '150' && communityMealsDecContents.kpi2 < '180')?'green':(communityMealsDecContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsDecContents.kpi3 == null)?'grey-2':(communityMealsDecContents.kpi3 >= '0' && communityMealsDecContents.kpi3 <= '2.6')?'red':(communityMealsDecContents.kpi3 > '2.6' && communityMealsDecContents.kpi3 <= '3.466666667')?'orange':(communityMealsDecContents.kpi3 > '3.466666667' && communityMealsDecContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsDecContents.kpi3 >= '4.333333333' && communityMealsDecContents.kpi3 < '5.2')?'green':(communityMealsDecContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsDecContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsDecContents.kpi4 == null)?'grey-2':(communityMealsDecContents.kpi4 >= '0' && communityMealsDecContents.kpi4 <= '384.2')?'red':(communityMealsDecContents.kpi4 > '384.2' && communityMealsDecContents.kpi4 <= '512.2666667')?'orange':(communityMealsDecContents.kpi4 > '512.2666667' && communityMealsDecContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsDecContents.kpi4 >= '640.3333333' && communityMealsDecContents.kpi4 < '768.4')?'green':(communityMealsDecContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsDecContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                                <q-tooltip>Activities (#)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsJanContents.kpi1 == null)?'grey-2':(communityMealsJanContents.kpi1 >= '0' && communityMealsJanContents.kpi1 <= '9.8')?'red':(communityMealsJanContents.kpi1 > '9.8' && communityMealsJanContents.kpi1 <= '13.06666667')?'orange':(communityMealsJanContents.kpi1 > '13.06666667' && communityMealsJanContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsJanContents.kpi1 >= '16.33333333' && communityMealsJanContents.kpi1 < '19.6')?'green':(communityMealsJanContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJanContents.kpi2 == null)?'grey-2':(communityMealsJanContents.kpi2 >= '0' && communityMealsJanContents.kpi2 <= '90')?'red':(communityMealsJanContents.kpi2 > '90' && communityMealsJanContents.kpi2 <= '120')?'orange':(communityMealsJanContents.kpi2 > '120' && communityMealsJanContents.kpi2 < '150')?'yellow-7':(communityMealsJanContents.kpi2 >= '150' && communityMealsJanContents.kpi2 < '180')?'green':(communityMealsJanContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJanContents.kpi3 == null)?'grey-2':(communityMealsJanContents.kpi3 >= '0' && communityMealsJanContents.kpi3 <= '2.6')?'red':(communityMealsJanContents.kpi3 > '2.6' && communityMealsJanContents.kpi3 <= '3.466666667')?'orange':(communityMealsJanContents.kpi3 > '3.466666667' && communityMealsJanContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsJanContents.kpi3 >= '4.333333333' && communityMealsJanContents.kpi3 < '5.2')?'green':(communityMealsJanContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsJanContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJanContents.kpi4 == null)?'grey-2':(communityMealsJanContents.kpi4 >= '0' && communityMealsJanContents.kpi4 <= '384.2')?'red':(communityMealsJanContents.kpi4 > '384.2' && communityMealsJanContents.kpi4 <= '512.2666667')?'orange':(communityMealsJanContents.kpi4 > '512.2666667' && communityMealsJanContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsJanContents.kpi4 >= '640.3333333' && communityMealsJanContents.kpi4 < '768.4')?'green':(communityMealsJanContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsJanContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsFebContents.kpi1 == null)?'grey-2':(communityMealsFebContents.kpi1 >= '0' && communityMealsFebContents.kpi1 <= '9.8')?'red':(communityMealsFebContents.kpi1 > '9.8' && communityMealsFebContents.kpi1 <= '13.06666667')?'orange':(communityMealsFebContents.kpi1 > '13.06666667' && communityMealsFebContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsFebContents.kpi1 >= '16.33333333' && communityMealsFebContents.kpi1 < '19.6')?'green':(communityMealsFebContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsFebContents.kpi2 == null)?'grey-2':(communityMealsFebContents.kpi2 >= '0' && communityMealsFebContents.kpi2 <= '90')?'red':(communityMealsFebContents.kpi2 > '90' && communityMealsFebContents.kpi2 <= '120')?'orange':(communityMealsFebContents.kpi2 > '120' && communityMealsFebContents.kpi2 < '150')?'yellow-7':(communityMealsFebContents.kpi2 >= '150' && communityMealsFebContents.kpi2 < '180')?'green':(communityMealsFebContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsFebContents.kpi3 == null)?'grey-2':(communityMealsFebContents.kpi3 >= '0' && communityMealsFebContents.kpi3 <= '2.6')?'red':(communityMealsFebContents.kpi3 > '2.6' && communityMealsFebContents.kpi3 <= '3.466666667')?'orange':(communityMealsFebContents.kpi3 > '3.466666667' && communityMealsFebContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsFebContents.kpi3 >= '4.333333333' && communityMealsFebContents.kpi3 < '5.2')?'green':(communityMealsFebContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsFebContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsFebContents.kpi4 == null)?'grey-2':(communityMealsFebContents.kpi4 >= '0' && communityMealsFebContents.kpi4 <= '384.2')?'red':(communityMealsFebContents.kpi4 > '384.2' && communityMealsFebContents.kpi4 <= '512.2666667')?'orange':(communityMealsFebContents.kpi4 > '512.2666667' && communityMealsFebContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsFebContents.kpi4 >= '640.3333333' && communityMealsFebContents.kpi4 < '768.4')?'green':(communityMealsFebContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsFebContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsMarContents.kpi1 == null)?'grey-2':(communityMealsMarContents.kpi1 >= '0' && communityMealsMarContents.kpi1 <= '9.8')?'red':(communityMealsMarContents.kpi1 > '9.8' && communityMealsMarContents.kpi1 <= '13.06666667')?'orange':(communityMealsMarContents.kpi1 > '13.06666667' && communityMealsMarContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsMarContents.kpi1 >= '16.33333333' && communityMealsMarContents.kpi1 < '19.6')?'green':(communityMealsMarContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMarContents.kpi2 == null)?'grey-2':(communityMealsMarContents.kpi2 >= '0' && communityMealsMarContents.kpi2 <= '90')?'red':(communityMealsMarContents.kpi2 > '90' && communityMealsMarContents.kpi2 <= '120')?'orange':(communityMealsMarContents.kpi2 > '120' && communityMealsMarContents.kpi2 < '150')?'yellow-7':(communityMealsMarContents.kpi2 >= '150' && communityMealsMarContents.kpi2 < '180')?'green':(communityMealsMarContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMarContents.kpi3 == null)?'grey-2':(communityMealsMarContents.kpi3 >= '0' && communityMealsMarContents.kpi3 <= '2.6')?'red':(communityMealsMarContents.kpi3 > '2.6' && communityMealsMarContents.kpi3 <= '3.466666667')?'orange':(communityMealsMarContents.kpi3 > '3.466666667' && communityMealsMarContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsMarContents.kpi3 >= '4.333333333' && communityMealsMarContents.kpi3 < '5.2')?'green':(communityMealsMarContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsMarContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMarContents.kpi4 == null)?'grey-2':(communityMealsMarContents.kpi4 >= '0' && communityMealsMarContents.kpi4 <= '384.2')?'red':(communityMealsMarContents.kpi4 > '384.2' && communityMealsMarContents.kpi4 <= '512.2666667')?'orange':(communityMealsMarContents.kpi4 > '512.2666667' && communityMealsMarContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsMarContents.kpi4 >= '640.3333333' && communityMealsMarContents.kpi4 < '768.4')?'green':(communityMealsMarContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsMarContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsAprContents.kpi1 == null)?'grey-2':(communityMealsAprContents.kpi1 >= '0' && communityMealsAprContents.kpi1 <= '9.8')?'red':(communityMealsAprContents.kpi1 > '9.8' && communityMealsAprContents.kpi1 <= '13.06666667')?'orange':(communityMealsAprContents.kpi1 > '13.06666667' && communityMealsAprContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsAprContents.kpi1 >= '16.33333333' && communityMealsAprContents.kpi1 < '19.6')?'green':(communityMealsAprContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAprContents.kpi2 == null)?'grey-2':(communityMealsAprContents.kpi2 >= '0' && communityMealsAprContents.kpi2 <= '90')?'red':(communityMealsAprContents.kpi2 > '90' && communityMealsAprContents.kpi2 <= '120')?'orange':(communityMealsAprContents.kpi2 > '120' && communityMealsAprContents.kpi2 < '150')?'yellow-7':(communityMealsAprContents.kpi2 >= '150' && communityMealsAprContents.kpi2 < '180')?'green':(communityMealsAprContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAprContents.kpi3 == null)?'grey-2':(communityMealsAprContents.kpi3 >= '0' && communityMealsAprContents.kpi3 <= '2.6')?'red':(communityMealsAprContents.kpi3 > '2.6' && communityMealsAprContents.kpi3 <= '3.466666667')?'orange':(communityMealsAprContents.kpi3 > '3.466666667' && communityMealsAprContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsAprContents.kpi3 >= '4.333333333' && communityMealsAprContents.kpi3 < '5.2')?'green':(communityMealsAprContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsAprContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAprContents.kpi4 == null)?'grey-2':(communityMealsAprContents.kpi4 >= '0' && communityMealsAprContents.kpi4 <= '384.2')?'red':(communityMealsAprContents.kpi4 > '384.2' && communityMealsAprContents.kpi4 <= '512.2666667')?'orange':(communityMealsAprContents.kpi4 > '512.2666667' && communityMealsAprContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsAprContents.kpi4 >= '640.3333333' && communityMealsAprContents.kpi4 < '768.4')?'green':(communityMealsAprContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsAprContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsMayContents.kpi1 == null)?'grey-2':(communityMealsMayContents.kpi1 >= '0' && communityMealsMayContents.kpi1 <= '9.8')?'red':(communityMealsMayContents.kpi1 > '9.8' && communityMealsMayContents.kpi1 <= '13.06666667')?'orange':(communityMealsMayContents.kpi1 > '13.06666667' && communityMealsMayContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsMayContents.kpi1 >= '16.33333333' && communityMealsMayContents.kpi1 < '19.6')?'green':(communityMealsMayContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMayContents.kpi2 == null)?'grey-2':(communityMealsMayContents.kpi2 >= '0' && communityMealsMayContents.kpi2 <= '90')?'red':(communityMealsMayContents.kpi2 > '90' && communityMealsMayContents.kpi2 <= '120')?'orange':(communityMealsMayContents.kpi2 > '120' && communityMealsMayContents.kpi2 < '150')?'yellow-7':(communityMealsMayContents.kpi2 >= '150' && communityMealsMayContents.kpi2 < '180')?'green':(communityMealsMayContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMayContents.kpi3 == null)?'grey-2':(communityMealsMayContents.kpi3 >= '0' && communityMealsMayContents.kpi3 <= '2.6')?'red':(communityMealsMayContents.kpi3 > '2.6' && communityMealsMayContents.kpi3 <= '3.466666667')?'orange':(communityMealsMayContents.kpi3 > '3.466666667' && communityMealsMayContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsMayContents.kpi3 >= '4.333333333' && communityMealsMayContents.kpi3 < '5.2')?'green':(communityMealsMayContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsMayContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMayContents.kpi4 == null)?'grey-2':(communityMealsMayContents.kpi4 >= '0' && communityMealsMayContents.kpi4 <= '384.2')?'red':(communityMealsMayContents.kpi4 > '384.2' && communityMealsMayContents.kpi4 <= '512.2666667')?'orange':(communityMealsMayContents.kpi4 > '512.2666667' && communityMealsMayContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsMayContents.kpi4 >= '640.3333333' && communityMealsMayContents.kpi4 < '768.4')?'green':(communityMealsMayContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsMayContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsJunContents.kpi1 == null)?'grey-2':(communityMealsJunContents.kpi1 >= '0' && communityMealsJunContents.kpi1 <= '9.8')?'red':(communityMealsJunContents.kpi1 > '9.8' && communityMealsJunContents.kpi1 <= '13.06666667')?'orange':(communityMealsJunContents.kpi1 > '13.06666667' && communityMealsJunContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsJunContents.kpi1 >= '16.33333333' && communityMealsJunContents.kpi1 < '19.6')?'green':(communityMealsJunContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJunContents.kpi2 == null)?'grey-2':(communityMealsJunContents.kpi2 >= '0' && communityMealsJunContents.kpi2 <= '90')?'red':(communityMealsJunContents.kpi2 > '90' && communityMealsJunContents.kpi2 <= '120')?'orange':(communityMealsJunContents.kpi2 > '120' && communityMealsJunContents.kpi2 < '150')?'yellow-7':(communityMealsJunContents.kpi2 >= '150' && communityMealsJunContents.kpi2 < '180')?'green':(communityMealsJunContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJunContents.kpi3 == null)?'grey-2':(communityMealsJunContents.kpi3 >= '0' && communityMealsJunContents.kpi3 <= '2.6')?'red':(communityMealsJunContents.kpi3 > '2.6' && communityMealsJunContents.kpi3 <= '3.466666667')?'orange':(communityMealsJunContents.kpi3 > '3.466666667' && communityMealsJunContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsJunContents.kpi3 >= '4.333333333' && communityMealsJunContents.kpi3 < '5.2')?'green':(communityMealsJunContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsJunContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJunContents.kpi4 == null)?'grey-2':(communityMealsJunContents.kpi4 >= '0' && communityMealsJunContents.kpi4 <= '384.2')?'red':(communityMealsJunContents.kpi4 > '384.2' && communityMealsJunContents.kpi4 <= '512.2666667')?'orange':(communityMealsJunContents.kpi4 > '512.2666667' && communityMealsJunContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsJunContents.kpi4 >= '640.3333333' && communityMealsJunContents.kpi4 < '768.4')?'green':(communityMealsJunContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsJunContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsJulContents.kpi1 == null)?'grey-2':(communityMealsJulContents.kpi1 >= '0' && communityMealsJulContents.kpi1 <= '9.8')?'red':(communityMealsJulContents.kpi1 > '9.8' && communityMealsJulContents.kpi1 <= '13.06666667')?'orange':(communityMealsJulContents.kpi1 > '13.06666667' && communityMealsJulContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsJulContents.kpi1 >= '16.33333333' && communityMealsJulContents.kpi1 < '19.6')?'green':(communityMealsJulContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJulContents.kpi2 == null)?'grey-2':(communityMealsJulContents.kpi2 >= '0' && communityMealsJulContents.kpi2 <= '90')?'red':(communityMealsJulContents.kpi2 > '90' && communityMealsJulContents.kpi2 <= '120')?'orange':(communityMealsJulContents.kpi2 > '120' && communityMealsJulContents.kpi2 < '150')?'yellow-7':(communityMealsJulContents.kpi2 >= '150' && communityMealsJulContents.kpi2 < '180')?'green':(communityMealsJulContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJulContents.kpi3 == null)?'grey-2':(communityMealsJulContents.kpi3 >= '0' && communityMealsJulContents.kpi3 <= '2.6')?'red':(communityMealsJulContents.kpi3 > '2.6' && communityMealsJulContents.kpi3 <= '3.466666667')?'orange':(communityMealsJulContents.kpi3 > '3.466666667' && communityMealsJulContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsJulContents.kpi3 >= '4.333333333' && communityMealsJulContents.kpi3 < '5.2')?'green':(communityMealsJulContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsJulContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJulContents.kpi4 == null)?'grey-2':(communityMealsJulContents.kpi4 >= '0' && communityMealsJulContents.kpi4 <= '384.2')?'red':(communityMealsJulContents.kpi4 > '384.2' && communityMealsJulContents.kpi4 <= '512.2666667')?'orange':(communityMealsJulContents.kpi4 > '512.2666667' && communityMealsJulContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsJulContents.kpi4 >= '640.3333333' && communityMealsJulContents.kpi4 < '768.4')?'green':(communityMealsJulContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsJulContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsAugContents.kpi1 == null)?'grey-2':(communityMealsAugContents.kpi1 >= '0' && communityMealsAugContents.kpi1 <= '9.8')?'red':(communityMealsAugContents.kpi1 > '9.8' && communityMealsAugContents.kpi1 <= '13.06666667')?'orange':(communityMealsAugContents.kpi1 > '13.06666667' && communityMealsAugContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsAugContents.kpi1 >= '16.33333333' && communityMealsAugContents.kpi1 < '19.6')?'green':(communityMealsAugContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAugContents.kpi2 == null)?'grey-2':(communityMealsAugContents.kpi2 >= '0' && communityMealsAugContents.kpi2 <= '90')?'red':(communityMealsAugContents.kpi2 > '90' && communityMealsAugContents.kpi2 <= '120')?'orange':(communityMealsAugContents.kpi2 > '120' && communityMealsAugContents.kpi2 < '150')?'yellow-7':(communityMealsAugContents.kpi2 >= '150' && communityMealsAugContents.kpi2 < '180')?'green':(communityMealsAugContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAugContents.kpi3 == null)?'grey-2':(communityMealsAugContents.kpi3 >= '0' && communityMealsAugContents.kpi3 <= '2.6')?'red':(communityMealsAugContents.kpi3 > '2.6' && communityMealsAugContents.kpi3 <= '3.466666667')?'orange':(communityMealsAugContents.kpi3 > '3.466666667' && communityMealsAugContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsAugContents.kpi3 >= '4.333333333' && communityMealsAugContents.kpi3 < '5.2')?'green':(communityMealsAugContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsAugContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAugContents.kpi4 == null)?'grey-2':(communityMealsAugContents.kpi4 >= '0' && communityMealsAugContents.kpi4 <= '384.2')?'red':(communityMealsAugContents.kpi4 > '384.2' && communityMealsAugContents.kpi4 <= '512.2666667')?'orange':(communityMealsAugContents.kpi4 > '512.2666667' && communityMealsAugContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsAugContents.kpi4 >= '640.3333333' && communityMealsAugContents.kpi4 < '768.4')?'green':(communityMealsAugContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsAugContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsSepContents.kpi1 == null)?'grey-2':(communityMealsSepContents.kpi1 >= '0' && communityMealsSepContents.kpi1 <= '9.8')?'red':(communityMealsSepContents.kpi1 > '9.8' && communityMealsSepContents.kpi1 <= '13.06666667')?'orange':(communityMealsSepContents.kpi1 > '13.06666667' && communityMealsSepContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsSepContents.kpi1 >= '16.33333333' && communityMealsSepContents.kpi1 < '19.6')?'green':(communityMealsSepContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsSepContents.kpi2 == null)?'grey-2':(communityMealsSepContents.kpi2 >= '0' && communityMealsSepContents.kpi2 <= '90')?'red':(communityMealsSepContents.kpi2 > '90' && communityMealsSepContents.kpi2 <= '120')?'orange':(communityMealsSepContents.kpi2 > '120' && communityMealsSepContents.kpi2 < '150')?'yellow-7':(communityMealsSepContents.kpi2 >= '150' && communityMealsSepContents.kpi2 < '180')?'green':(communityMealsSepContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsSepContents.kpi3 == null)?'grey-2':(communityMealsSepContents.kpi3 >= '0' && communityMealsSepContents.kpi3 <= '2.6')?'red':(communityMealsSepContents.kpi3 > '2.6' && communityMealsSepContents.kpi3 <= '3.466666667')?'orange':(communityMealsSepContents.kpi3 > '3.466666667' && communityMealsSepContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsSepContents.kpi3 >= '4.333333333' && communityMealsSepContents.kpi3 < '5.2')?'green':(communityMealsSepContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsSepContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsSepContents.kpi4 == null)?'grey-2':(communityMealsSepContents.kpi4 >= '0' && communityMealsSepContents.kpi4 <= '384.2')?'red':(communityMealsSepContents.kpi4 > '384.2' && communityMealsSepContents.kpi4 <= '512.2666667')?'orange':(communityMealsSepContents.kpi4 > '512.2666667' && communityMealsSepContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsSepContents.kpi4 >= '640.3333333' && communityMealsSepContents.kpi4 < '768.4')?'green':(communityMealsSepContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsSepContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsOctContents.kpi1 == null)?'grey-2':(communityMealsOctContents.kpi1 >= '0' && communityMealsOctContents.kpi1 <= '9.8')?'red':(communityMealsOctContents.kpi1 > '9.8' && communityMealsOctContents.kpi1 <= '13.06666667')?'orange':(communityMealsOctContents.kpi1 > '13.06666667' && communityMealsOctContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsOctContents.kpi1 >= '16.33333333' && communityMealsOctContents.kpi1 < '19.6')?'green':(communityMealsOctContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsOctContents.kpi2 == null)?'grey-2':(communityMealsOctContents.kpi2 >= '0' && communityMealsOctContents.kpi2 <= '90')?'red':(communityMealsOctContents.kpi2 > '90' && communityMealsOctContents.kpi2 <= '120')?'orange':(communityMealsOctContents.kpi2 > '120' && communityMealsOctContents.kpi2 < '150')?'yellow-7':(communityMealsOctContents.kpi2 >= '150' && communityMealsOctContents.kpi2 < '180')?'green':(communityMealsOctContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsOctContents.kpi3 == null)?'grey-2':(communityMealsOctContents.kpi3 >= '0' && communityMealsOctContents.kpi3 <= '2.6')?'red':(communityMealsOctContents.kpi3 > '2.6' && communityMealsOctContents.kpi3 <= '3.466666667')?'orange':(communityMealsOctContents.kpi3 > '3.466666667' && communityMealsOctContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsOctContents.kpi3 >= '4.333333333' && communityMealsOctContents.kpi3 < '5.2')?'green':(communityMealsOctContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsOctContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsOctContents.kpi4 == null)?'grey-2':(communityMealsOctContents.kpi4 >= '0' && communityMealsOctContents.kpi4 <= '384.2')?'red':(communityMealsOctContents.kpi4 > '384.2' && communityMealsOctContents.kpi4 <= '512.2666667')?'orange':(communityMealsOctContents.kpi4 > '512.2666667' && communityMealsOctContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsOctContents.kpi4 >= '640.3333333' && communityMealsOctContents.kpi4 < '768.4')?'green':(communityMealsOctContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsOctContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsNovContents.kpi1 == null)?'grey-2':(communityMealsNovContents.kpi1 >= '0' && communityMealsNovContents.kpi1 <= '9.8')?'red':(communityMealsNovContents.kpi1 > '9.8' && communityMealsNovContents.kpi1 <= '13.06666667')?'orange':(communityMealsNovContents.kpi1 > '13.06666667' && communityMealsNovContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsNovContents.kpi1 >= '16.33333333' && communityMealsNovContents.kpi1 < '19.6')?'green':(communityMealsNovContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsNovContents.kpi2 == null)?'grey-2':(communityMealsNovContents.kpi2 >= '0' && communityMealsNovContents.kpi2 <= '90')?'red':(communityMealsNovContents.kpi2 > '90' && communityMealsNovContents.kpi2 <= '120')?'orange':(communityMealsNovContents.kpi2 > '120' && communityMealsNovContents.kpi2 < '150')?'yellow-7':(communityMealsNovContents.kpi2 >= '150' && communityMealsNovContents.kpi2 < '180')?'green':(communityMealsNovContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsNovContents.kpi3 == null)?'grey-2':(communityMealsNovContents.kpi3 >= '0' && communityMealsNovContents.kpi3 <= '2.6')?'red':(communityMealsNovContents.kpi3 > '2.6' && communityMealsNovContents.kpi3 <= '3.466666667')?'orange':(communityMealsNovContents.kpi3 > '3.466666667' && communityMealsNovContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsNovContents.kpi3 >= '4.333333333' && communityMealsNovContents.kpi3 < '5.2')?'green':(communityMealsNovContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsNovContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsNovContents.kpi4 == null)?'grey-2':(communityMealsNovContents.kpi4 >= '0' && communityMealsNovContents.kpi4 <= '384.2')?'red':(communityMealsNovContents.kpi4 > '384.2' && communityMealsNovContents.kpi4 <= '512.2666667')?'orange':(communityMealsNovContents.kpi4 > '512.2666667' && communityMealsNovContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsNovContents.kpi4 >= '640.3333333' && communityMealsNovContents.kpi4 < '768.4')?'green':(communityMealsNovContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsNovContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsDecContents.kpi1 == null)?'grey-2':(communityMealsDecContents.kpi1 >= '0' && communityMealsDecContents.kpi1 <= '9.8')?'red':(communityMealsDecContents.kpi1 > '9.8' && communityMealsDecContents.kpi1 <= '13.06666667')?'orange':(communityMealsDecContents.kpi1 > '13.06666667' && communityMealsDecContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsDecContents.kpi1 >= '16.33333333' && communityMealsDecContents.kpi1 < '19.6')?'green':(communityMealsDecContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsDecContents.kpi2 == null)?'grey-2':(communityMealsDecContents.kpi2 >= '0' && communityMealsDecContents.kpi2 <= '90')?'red':(communityMealsDecContents.kpi2 > '90' && communityMealsDecContents.kpi2 <= '120')?'orange':(communityMealsDecContents.kpi2 > '120' && communityMealsDecContents.kpi2 < '150')?'yellow-7':(communityMealsDecContents.kpi2 >= '150' && communityMealsDecContents.kpi2 < '180')?'green':(communityMealsDecContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsDecContents.kpi3 == null)?'grey-2':(communityMealsDecContents.kpi3 >= '0' && communityMealsDecContents.kpi3 <= '2.6')?'red':(communityMealsDecContents.kpi3 > '2.6' && communityMealsDecContents.kpi3 <= '3.466666667')?'orange':(communityMealsDecContents.kpi3 > '3.466666667' && communityMealsDecContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsDecContents.kpi3 >= '4.333333333' && communityMealsDecContents.kpi3 < '5.2')?'green':(communityMealsDecContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsDecContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsDecContents.kpi4 == null)?'grey-2':(communityMealsDecContents.kpi4 >= '0' && communityMealsDecContents.kpi4 <= '384.2')?'red':(communityMealsDecContents.kpi4 > '384.2' && communityMealsDecContents.kpi4 <= '512.2666667')?'orange':(communityMealsDecContents.kpi4 > '512.2666667' && communityMealsDecContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsDecContents.kpi4 >= '640.3333333' && communityMealsDecContents.kpi4 < '768.4')?'green':(communityMealsDecContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsDecContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                                <q-tooltip>Activities (#)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsJanContents.kpi1 == null)?'grey-2':(communityMealsJanContents.kpi1 >= '0' && communityMealsJanContents.kpi1 <= '9.8')?'red':(communityMealsJanContents.kpi1 > '9.8' && communityMealsJanContents.kpi1 <= '13.06666667')?'orange':(communityMealsJanContents.kpi1 > '13.06666667' && communityMealsJanContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsJanContents.kpi1 >= '16.33333333' && communityMealsJanContents.kpi1 < '19.6')?'green':(communityMealsJanContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJanContents.kpi2 == null)?'grey-2':(communityMealsJanContents.kpi2 >= '0' && communityMealsJanContents.kpi2 <= '90')?'red':(communityMealsJanContents.kpi2 > '90' && communityMealsJanContents.kpi2 <= '120')?'orange':(communityMealsJanContents.kpi2 > '120' && communityMealsJanContents.kpi2 < '150')?'yellow-7':(communityMealsJanContents.kpi2 >= '150' && communityMealsJanContents.kpi2 < '180')?'green':(communityMealsJanContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJanContents.kpi3 == null)?'grey-2':(communityMealsJanContents.kpi3 >= '0' && communityMealsJanContents.kpi3 <= '2.6')?'red':(communityMealsJanContents.kpi3 > '2.6' && communityMealsJanContents.kpi3 <= '3.466666667')?'orange':(communityMealsJanContents.kpi3 > '3.466666667' && communityMealsJanContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsJanContents.kpi3 >= '4.333333333' && communityMealsJanContents.kpi3 < '5.2')?'green':(communityMealsJanContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsJanContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJanContents.kpi4 == null)?'grey-2':(communityMealsJanContents.kpi4 >= '0' && communityMealsJanContents.kpi4 <= '384.2')?'red':(communityMealsJanContents.kpi4 > '384.2' && communityMealsJanContents.kpi4 <= '512.2666667')?'orange':(communityMealsJanContents.kpi4 > '512.2666667' && communityMealsJanContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsJanContents.kpi4 >= '640.3333333' && communityMealsJanContents.kpi4 < '768.4')?'green':(communityMealsJanContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsJanContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsFebContents.kpi1 == null)?'grey-2':(communityMealsFebContents.kpi1 >= '0' && communityMealsFebContents.kpi1 <= '9.8')?'red':(communityMealsFebContents.kpi1 > '9.8' && communityMealsFebContents.kpi1 <= '13.06666667')?'orange':(communityMealsFebContents.kpi1 > '13.06666667' && communityMealsFebContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsFebContents.kpi1 >= '16.33333333' && communityMealsFebContents.kpi1 < '19.6')?'green':(communityMealsFebContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsFebContents.kpi2 == null)?'grey-2':(communityMealsFebContents.kpi2 >= '0' && communityMealsFebContents.kpi2 <= '90')?'red':(communityMealsFebContents.kpi2 > '90' && communityMealsFebContents.kpi2 <= '120')?'orange':(communityMealsFebContents.kpi2 > '120' && communityMealsFebContents.kpi2 < '150')?'yellow-7':(communityMealsFebContents.kpi2 >= '150' && communityMealsFebContents.kpi2 < '180')?'green':(communityMealsFebContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsFebContents.kpi3 == null)?'grey-2':(communityMealsFebContents.kpi3 >= '0' && communityMealsFebContents.kpi3 <= '2.6')?'red':(communityMealsFebContents.kpi3 > '2.6' && communityMealsFebContents.kpi3 <= '3.466666667')?'orange':(communityMealsFebContents.kpi3 > '3.466666667' && communityMealsFebContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsFebContents.kpi3 >= '4.333333333' && communityMealsFebContents.kpi3 < '5.2')?'green':(communityMealsFebContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsFebContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsFebContents.kpi4 == null)?'grey-2':(communityMealsFebContents.kpi4 >= '0' && communityMealsFebContents.kpi4 <= '384.2')?'red':(communityMealsFebContents.kpi4 > '384.2' && communityMealsFebContents.kpi4 <= '512.2666667')?'orange':(communityMealsFebContents.kpi4 > '512.2666667' && communityMealsFebContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsFebContents.kpi4 >= '640.3333333' && communityMealsFebContents.kpi4 < '768.4')?'green':(communityMealsFebContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsFebContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsMarContents.kpi1 == null)?'grey-2':(communityMealsMarContents.kpi1 >= '0' && communityMealsMarContents.kpi1 <= '9.8')?'red':(communityMealsMarContents.kpi1 > '9.8' && communityMealsMarContents.kpi1 <= '13.06666667')?'orange':(communityMealsMarContents.kpi1 > '13.06666667' && communityMealsMarContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsMarContents.kpi1 >= '16.33333333' && communityMealsMarContents.kpi1 < '19.6')?'green':(communityMealsMarContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMarContents.kpi2 == null)?'grey-2':(communityMealsMarContents.kpi2 >= '0' && communityMealsMarContents.kpi2 <= '90')?'red':(communityMealsMarContents.kpi2 > '90' && communityMealsMarContents.kpi2 <= '120')?'orange':(communityMealsMarContents.kpi2 > '120' && communityMealsMarContents.kpi2 < '150')?'yellow-7':(communityMealsMarContents.kpi2 >= '150' && communityMealsMarContents.kpi2 < '180')?'green':(communityMealsMarContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMarContents.kpi3 == null)?'grey-2':(communityMealsMarContents.kpi3 >= '0' && communityMealsMarContents.kpi3 <= '2.6')?'red':(communityMealsMarContents.kpi3 > '2.6' && communityMealsMarContents.kpi3 <= '3.466666667')?'orange':(communityMealsMarContents.kpi3 > '3.466666667' && communityMealsMarContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsMarContents.kpi3 >= '4.333333333' && communityMealsMarContents.kpi3 < '5.2')?'green':(communityMealsMarContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsMarContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMarContents.kpi4 == null)?'grey-2':(communityMealsMarContents.kpi4 >= '0' && communityMealsMarContents.kpi4 <= '384.2')?'red':(communityMealsMarContents.kpi4 > '384.2' && communityMealsMarContents.kpi4 <= '512.2666667')?'orange':(communityMealsMarContents.kpi4 > '512.2666667' && communityMealsMarContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsMarContents.kpi4 >= '640.3333333' && communityMealsMarContents.kpi4 < '768.4')?'green':(communityMealsMarContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsMarContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsAprContents.kpi1 == null)?'grey-2':(communityMealsAprContents.kpi1 >= '0' && communityMealsAprContents.kpi1 <= '9.8')?'red':(communityMealsAprContents.kpi1 > '9.8' && communityMealsAprContents.kpi1 <= '13.06666667')?'orange':(communityMealsAprContents.kpi1 > '13.06666667' && communityMealsAprContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsAprContents.kpi1 >= '16.33333333' && communityMealsAprContents.kpi1 < '19.6')?'green':(communityMealsAprContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAprContents.kpi2 == null)?'grey-2':(communityMealsAprContents.kpi2 >= '0' && communityMealsAprContents.kpi2 <= '90')?'red':(communityMealsAprContents.kpi2 > '90' && communityMealsAprContents.kpi2 <= '120')?'orange':(communityMealsAprContents.kpi2 > '120' && communityMealsAprContents.kpi2 < '150')?'yellow-7':(communityMealsAprContents.kpi2 >= '150' && communityMealsAprContents.kpi2 < '180')?'green':(communityMealsAprContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAprContents.kpi3 == null)?'grey-2':(communityMealsAprContents.kpi3 >= '0' && communityMealsAprContents.kpi3 <= '2.6')?'red':(communityMealsAprContents.kpi3 > '2.6' && communityMealsAprContents.kpi3 <= '3.466666667')?'orange':(communityMealsAprContents.kpi3 > '3.466666667' && communityMealsAprContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsAprContents.kpi3 >= '4.333333333' && communityMealsAprContents.kpi3 < '5.2')?'green':(communityMealsAprContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsAprContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAprContents.kpi4 == null)?'grey-2':(communityMealsAprContents.kpi4 >= '0' && communityMealsAprContents.kpi4 <= '384.2')?'red':(communityMealsAprContents.kpi4 > '384.2' && communityMealsAprContents.kpi4 <= '512.2666667')?'orange':(communityMealsAprContents.kpi4 > '512.2666667' && communityMealsAprContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsAprContents.kpi4 >= '640.3333333' && communityMealsAprContents.kpi4 < '768.4')?'green':(communityMealsAprContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsAprContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsMayContents.kpi1 == null)?'grey-2':(communityMealsMayContents.kpi1 >= '0' && communityMealsMayContents.kpi1 <= '9.8')?'red':(communityMealsMayContents.kpi1 > '9.8' && communityMealsMayContents.kpi1 <= '13.06666667')?'orange':(communityMealsMayContents.kpi1 > '13.06666667' && communityMealsMayContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsMayContents.kpi1 >= '16.33333333' && communityMealsMayContents.kpi1 < '19.6')?'green':(communityMealsMayContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMayContents.kpi2 == null)?'grey-2':(communityMealsMayContents.kpi2 >= '0' && communityMealsMayContents.kpi2 <= '90')?'red':(communityMealsMayContents.kpi2 > '90' && communityMealsMayContents.kpi2 <= '120')?'orange':(communityMealsMayContents.kpi2 > '120' && communityMealsMayContents.kpi2 < '150')?'yellow-7':(communityMealsMayContents.kpi2 >= '150' && communityMealsMayContents.kpi2 < '180')?'green':(communityMealsMayContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMayContents.kpi3 == null)?'grey-2':(communityMealsMayContents.kpi3 >= '0' && communityMealsMayContents.kpi3 <= '2.6')?'red':(communityMealsMayContents.kpi3 > '2.6' && communityMealsMayContents.kpi3 <= '3.466666667')?'orange':(communityMealsMayContents.kpi3 > '3.466666667' && communityMealsMayContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsMayContents.kpi3 >= '4.333333333' && communityMealsMayContents.kpi3 < '5.2')?'green':(communityMealsMayContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsMayContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMayContents.kpi4 == null)?'grey-2':(communityMealsMayContents.kpi4 >= '0' && communityMealsMayContents.kpi4 <= '384.2')?'red':(communityMealsMayContents.kpi4 > '384.2' && communityMealsMayContents.kpi4 <= '512.2666667')?'orange':(communityMealsMayContents.kpi4 > '512.2666667' && communityMealsMayContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsMayContents.kpi4 >= '640.3333333' && communityMealsMayContents.kpi4 < '768.4')?'green':(communityMealsMayContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsMayContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsJunContents.kpi1 == null)?'grey-2':(communityMealsJunContents.kpi1 >= '0' && communityMealsJunContents.kpi1 <= '9.8')?'red':(communityMealsJunContents.kpi1 > '9.8' && communityMealsJunContents.kpi1 <= '13.06666667')?'orange':(communityMealsJunContents.kpi1 > '13.06666667' && communityMealsJunContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsJunContents.kpi1 >= '16.33333333' && communityMealsJunContents.kpi1 < '19.6')?'green':(communityMealsJunContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJunContents.kpi2 == null)?'grey-2':(communityMealsJunContents.kpi2 >= '0' && communityMealsJunContents.kpi2 <= '90')?'red':(communityMealsJunContents.kpi2 > '90' && communityMealsJunContents.kpi2 <= '120')?'orange':(communityMealsJunContents.kpi2 > '120' && communityMealsJunContents.kpi2 < '150')?'yellow-7':(communityMealsJunContents.kpi2 >= '150' && communityMealsJunContents.kpi2 < '180')?'green':(communityMealsJunContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJunContents.kpi3 == null)?'grey-2':(communityMealsJunContents.kpi3 >= '0' && communityMealsJunContents.kpi3 <= '2.6')?'red':(communityMealsJunContents.kpi3 > '2.6' && communityMealsJunContents.kpi3 <= '3.466666667')?'orange':(communityMealsJunContents.kpi3 > '3.466666667' && communityMealsJunContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsJunContents.kpi3 >= '4.333333333' && communityMealsJunContents.kpi3 < '5.2')?'green':(communityMealsJunContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsJunContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJunContents.kpi4 == null)?'grey-2':(communityMealsJunContents.kpi4 >= '0' && communityMealsJunContents.kpi4 <= '384.2')?'red':(communityMealsJunContents.kpi4 > '384.2' && communityMealsJunContents.kpi4 <= '512.2666667')?'orange':(communityMealsJunContents.kpi4 > '512.2666667' && communityMealsJunContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsJunContents.kpi4 >= '640.3333333' && communityMealsJunContents.kpi4 < '768.4')?'green':(communityMealsJunContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsJunContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsJulContents.kpi1 == null)?'grey-2':(communityMealsJulContents.kpi1 >= '0' && communityMealsJulContents.kpi1 <= '9.8')?'red':(communityMealsJulContents.kpi1 > '9.8' && communityMealsJulContents.kpi1 <= '13.06666667')?'orange':(communityMealsJulContents.kpi1 > '13.06666667' && communityMealsJulContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsJulContents.kpi1 >= '16.33333333' && communityMealsJulContents.kpi1 < '19.6')?'green':(communityMealsJulContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJulContents.kpi2 == null)?'grey-2':(communityMealsJulContents.kpi2 >= '0' && communityMealsJulContents.kpi2 <= '90')?'red':(communityMealsJulContents.kpi2 > '90' && communityMealsJulContents.kpi2 <= '120')?'orange':(communityMealsJulContents.kpi2 > '120' && communityMealsJulContents.kpi2 < '150')?'yellow-7':(communityMealsJulContents.kpi2 >= '150' && communityMealsJulContents.kpi2 < '180')?'green':(communityMealsJulContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJulContents.kpi3 == null)?'grey-2':(communityMealsJulContents.kpi3 >= '0' && communityMealsJulContents.kpi3 <= '2.6')?'red':(communityMealsJulContents.kpi3 > '2.6' && communityMealsJulContents.kpi3 <= '3.466666667')?'orange':(communityMealsJulContents.kpi3 > '3.466666667' && communityMealsJulContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsJulContents.kpi3 >= '4.333333333' && communityMealsJulContents.kpi3 < '5.2')?'green':(communityMealsJulContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsJulContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJulContents.kpi4 == null)?'grey-2':(communityMealsJulContents.kpi4 >= '0' && communityMealsJulContents.kpi4 <= '384.2')?'red':(communityMealsJulContents.kpi4 > '384.2' && communityMealsJulContents.kpi4 <= '512.2666667')?'orange':(communityMealsJulContents.kpi4 > '512.2666667' && communityMealsJulContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsJulContents.kpi4 >= '640.3333333' && communityMealsJulContents.kpi4 < '768.4')?'green':(communityMealsJulContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsJulContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsAugContents.kpi1 == null)?'grey-2':(communityMealsAugContents.kpi1 >= '0' && communityMealsAugContents.kpi1 <= '9.8')?'red':(communityMealsAugContents.kpi1 > '9.8' && communityMealsAugContents.kpi1 <= '13.06666667')?'orange':(communityMealsAugContents.kpi1 > '13.06666667' && communityMealsAugContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsAugContents.kpi1 >= '16.33333333' && communityMealsAugContents.kpi1 < '19.6')?'green':(communityMealsAugContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAugContents.kpi2 == null)?'grey-2':(communityMealsAugContents.kpi2 >= '0' && communityMealsAugContents.kpi2 <= '90')?'red':(communityMealsAugContents.kpi2 > '90' && communityMealsAugContents.kpi2 <= '120')?'orange':(communityMealsAugContents.kpi2 > '120' && communityMealsAugContents.kpi2 < '150')?'yellow-7':(communityMealsAugContents.kpi2 >= '150' && communityMealsAugContents.kpi2 < '180')?'green':(communityMealsAugContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAugContents.kpi3 == null)?'grey-2':(communityMealsAugContents.kpi3 >= '0' && communityMealsAugContents.kpi3 <= '2.6')?'red':(communityMealsAugContents.kpi3 > '2.6' && communityMealsAugContents.kpi3 <= '3.466666667')?'orange':(communityMealsAugContents.kpi3 > '3.466666667' && communityMealsAugContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsAugContents.kpi3 >= '4.333333333' && communityMealsAugContents.kpi3 < '5.2')?'green':(communityMealsAugContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsAugContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAugContents.kpi4 == null)?'grey-2':(communityMealsAugContents.kpi4 >= '0' && communityMealsAugContents.kpi4 <= '384.2')?'red':(communityMealsAugContents.kpi4 > '384.2' && communityMealsAugContents.kpi4 <= '512.2666667')?'orange':(communityMealsAugContents.kpi4 > '512.2666667' && communityMealsAugContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsAugContents.kpi4 >= '640.3333333' && communityMealsAugContents.kpi4 < '768.4')?'green':(communityMealsAugContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsAugContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsSepContents.kpi1 == null)?'grey-2':(communityMealsSepContents.kpi1 >= '0' && communityMealsSepContents.kpi1 <= '9.8')?'red':(communityMealsSepContents.kpi1 > '9.8' && communityMealsSepContents.kpi1 <= '13.06666667')?'orange':(communityMealsSepContents.kpi1 > '13.06666667' && communityMealsSepContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsSepContents.kpi1 >= '16.33333333' && communityMealsSepContents.kpi1 < '19.6')?'green':(communityMealsSepContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsSepContents.kpi2 == null)?'grey-2':(communityMealsSepContents.kpi2 >= '0' && communityMealsSepContents.kpi2 <= '90')?'red':(communityMealsSepContents.kpi2 > '90' && communityMealsSepContents.kpi2 <= '120')?'orange':(communityMealsSepContents.kpi2 > '120' && communityMealsSepContents.kpi2 < '150')?'yellow-7':(communityMealsSepContents.kpi2 >= '150' && communityMealsSepContents.kpi2 < '180')?'green':(communityMealsSepContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsSepContents.kpi3 == null)?'grey-2':(communityMealsSepContents.kpi3 >= '0' && communityMealsSepContents.kpi3 <= '2.6')?'red':(communityMealsSepContents.kpi3 > '2.6' && communityMealsSepContents.kpi3 <= '3.466666667')?'orange':(communityMealsSepContents.kpi3 > '3.466666667' && communityMealsSepContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsSepContents.kpi3 >= '4.333333333' && communityMealsSepContents.kpi3 < '5.2')?'green':(communityMealsSepContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsSepContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsSepContents.kpi4 == null)?'grey-2':(communityMealsSepContents.kpi4 >= '0' && communityMealsSepContents.kpi4 <= '384.2')?'red':(communityMealsSepContents.kpi4 > '384.2' && communityMealsSepContents.kpi4 <= '512.2666667')?'orange':(communityMealsSepContents.kpi4 > '512.2666667' && communityMealsSepContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsSepContents.kpi4 >= '640.3333333' && communityMealsSepContents.kpi4 < '768.4')?'green':(communityMealsSepContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsSepContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsOctContents.kpi1 == null)?'grey-2':(communityMealsOctContents.kpi1 >= '0' && communityMealsOctContents.kpi1 <= '9.8')?'red':(communityMealsOctContents.kpi1 > '9.8' && communityMealsOctContents.kpi1 <= '13.06666667')?'orange':(communityMealsOctContents.kpi1 > '13.06666667' && communityMealsOctContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsOctContents.kpi1 >= '16.33333333' && communityMealsOctContents.kpi1 < '19.6')?'green':(communityMealsOctContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsOctContents.kpi2 == null)?'grey-2':(communityMealsOctContents.kpi2 >= '0' && communityMealsOctContents.kpi2 <= '90')?'red':(communityMealsOctContents.kpi2 > '90' && communityMealsOctContents.kpi2 <= '120')?'orange':(communityMealsOctContents.kpi2 > '120' && communityMealsOctContents.kpi2 < '150')?'yellow-7':(communityMealsOctContents.kpi2 >= '150' && communityMealsOctContents.kpi2 < '180')?'green':(communityMealsOctContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsOctContents.kpi3 == null)?'grey-2':(communityMealsOctContents.kpi3 >= '0' && communityMealsOctContents.kpi3 <= '2.6')?'red':(communityMealsOctContents.kpi3 > '2.6' && communityMealsOctContents.kpi3 <= '3.466666667')?'orange':(communityMealsOctContents.kpi3 > '3.466666667' && communityMealsOctContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsOctContents.kpi3 >= '4.333333333' && communityMealsOctContents.kpi3 < '5.2')?'green':(communityMealsOctContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsOctContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsOctContents.kpi4 == null)?'grey-2':(communityMealsOctContents.kpi4 >= '0' && communityMealsOctContents.kpi4 <= '384.2')?'red':(communityMealsOctContents.kpi4 > '384.2' && communityMealsOctContents.kpi4 <= '512.2666667')?'orange':(communityMealsOctContents.kpi4 > '512.2666667' && communityMealsOctContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsOctContents.kpi4 >= '640.3333333' && communityMealsOctContents.kpi4 < '768.4')?'green':(communityMealsOctContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsOctContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsNovContents.kpi1 == null)?'grey-2':(communityMealsNovContents.kpi1 >= '0' && communityMealsNovContents.kpi1 <= '9.8')?'red':(communityMealsNovContents.kpi1 > '9.8' && communityMealsNovContents.kpi1 <= '13.06666667')?'orange':(communityMealsNovContents.kpi1 > '13.06666667' && communityMealsNovContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsNovContents.kpi1 >= '16.33333333' && communityMealsNovContents.kpi1 < '19.6')?'green':(communityMealsNovContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsNovContents.kpi2 == null)?'grey-2':(communityMealsNovContents.kpi2 >= '0' && communityMealsNovContents.kpi2 <= '90')?'red':(communityMealsNovContents.kpi2 > '90' && communityMealsNovContents.kpi2 <= '120')?'orange':(communityMealsNovContents.kpi2 > '120' && communityMealsNovContents.kpi2 < '150')?'yellow-7':(communityMealsNovContents.kpi2 >= '150' && communityMealsNovContents.kpi2 < '180')?'green':(communityMealsNovContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsNovContents.kpi3 == null)?'grey-2':(communityMealsNovContents.kpi3 >= '0' && communityMealsNovContents.kpi3 <= '2.6')?'red':(communityMealsNovContents.kpi3 > '2.6' && communityMealsNovContents.kpi3 <= '3.466666667')?'orange':(communityMealsNovContents.kpi3 > '3.466666667' && communityMealsNovContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsNovContents.kpi3 >= '4.333333333' && communityMealsNovContents.kpi3 < '5.2')?'green':(communityMealsNovContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsNovContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsNovContents.kpi4 == null)?'grey-2':(communityMealsNovContents.kpi4 >= '0' && communityMealsNovContents.kpi4 <= '384.2')?'red':(communityMealsNovContents.kpi4 > '384.2' && communityMealsNovContents.kpi4 <= '512.2666667')?'orange':(communityMealsNovContents.kpi4 > '512.2666667' && communityMealsNovContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsNovContents.kpi4 >= '640.3333333' && communityMealsNovContents.kpi4 < '768.4')?'green':(communityMealsNovContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsNovContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsDecContents.kpi1 == null)?'grey-2':(communityMealsDecContents.kpi1 >= '0' && communityMealsDecContents.kpi1 <= '9.8')?'red':(communityMealsDecContents.kpi1 > '9.8' && communityMealsDecContents.kpi1 <= '13.06666667')?'orange':(communityMealsDecContents.kpi1 > '13.06666667' && communityMealsDecContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsDecContents.kpi1 >= '16.33333333' && communityMealsDecContents.kpi1 < '19.6')?'green':(communityMealsDecContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsDecContents.kpi2 == null)?'grey-2':(communityMealsDecContents.kpi2 >= '0' && communityMealsDecContents.kpi2 <= '90')?'red':(communityMealsDecContents.kpi2 > '90' && communityMealsDecContents.kpi2 <= '120')?'orange':(communityMealsDecContents.kpi2 > '120' && communityMealsDecContents.kpi2 < '150')?'yellow-7':(communityMealsDecContents.kpi2 >= '150' && communityMealsDecContents.kpi2 < '180')?'green':(communityMealsDecContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsDecContents.kpi3 == null)?'grey-2':(communityMealsDecContents.kpi3 >= '0' && communityMealsDecContents.kpi3 <= '2.6')?'red':(communityMealsDecContents.kpi3 > '2.6' && communityMealsDecContents.kpi3 <= '3.466666667')?'orange':(communityMealsDecContents.kpi3 > '3.466666667' && communityMealsDecContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsDecContents.kpi3 >= '4.333333333' && communityMealsDecContents.kpi3 < '5.2')?'green':(communityMealsDecContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsDecContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsDecContents.kpi4 == null)?'grey-2':(communityMealsDecContents.kpi4 >= '0' && communityMealsDecContents.kpi4 <= '384.2')?'red':(communityMealsDecContents.kpi4 > '384.2' && communityMealsDecContents.kpi4 <= '512.2666667')?'orange':(communityMealsDecContents.kpi4 > '512.2666667' && communityMealsDecContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsDecContents.kpi4 >= '640.3333333' && communityMealsDecContents.kpi4 < '768.4')?'green':(communityMealsDecContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsDecContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                                <q-tooltip>Activities (#)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsJanContents.kpi1 == null)?'grey-2':(communityMealsJanContents.kpi1 >= '0' && communityMealsJanContents.kpi1 <= '9.8')?'red':(communityMealsJanContents.kpi1 > '9.8' && communityMealsJanContents.kpi1 <= '13.06666667')?'orange':(communityMealsJanContents.kpi1 > '13.06666667' && communityMealsJanContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsJanContents.kpi1 >= '16.33333333' && communityMealsJanContents.kpi1 < '19.6')?'green':(communityMealsJanContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJanContents.kpi2 == null)?'grey-2':(communityMealsJanContents.kpi2 >= '0' && communityMealsJanContents.kpi2 <= '90')?'red':(communityMealsJanContents.kpi2 > '90' && communityMealsJanContents.kpi2 <= '120')?'orange':(communityMealsJanContents.kpi2 > '120' && communityMealsJanContents.kpi2 < '150')?'yellow-7':(communityMealsJanContents.kpi2 >= '150' && communityMealsJanContents.kpi2 < '180')?'green':(communityMealsJanContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJanContents.kpi3 == null)?'grey-2':(communityMealsJanContents.kpi3 >= '0' && communityMealsJanContents.kpi3 <= '2.6')?'red':(communityMealsJanContents.kpi3 > '2.6' && communityMealsJanContents.kpi3 <= '3.466666667')?'orange':(communityMealsJanContents.kpi3 > '3.466666667' && communityMealsJanContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsJanContents.kpi3 >= '4.333333333' && communityMealsJanContents.kpi3 < '5.2')?'green':(communityMealsJanContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsJanContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJanContents.kpi4 == null)?'grey-2':(communityMealsJanContents.kpi4 >= '0' && communityMealsJanContents.kpi4 <= '384.2')?'red':(communityMealsJanContents.kpi4 > '384.2' && communityMealsJanContents.kpi4 <= '512.2666667')?'orange':(communityMealsJanContents.kpi4 > '512.2666667' && communityMealsJanContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsJanContents.kpi4 >= '640.3333333' && communityMealsJanContents.kpi4 < '768.4')?'green':(communityMealsJanContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsJanContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsFebContents.kpi1 == null)?'grey-2':(communityMealsFebContents.kpi1 >= '0' && communityMealsFebContents.kpi1 <= '9.8')?'red':(communityMealsFebContents.kpi1 > '9.8' && communityMealsFebContents.kpi1 <= '13.06666667')?'orange':(communityMealsFebContents.kpi1 > '13.06666667' && communityMealsFebContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsFebContents.kpi1 >= '16.33333333' && communityMealsFebContents.kpi1 < '19.6')?'green':(communityMealsFebContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsFebContents.kpi2 == null)?'grey-2':(communityMealsFebContents.kpi2 >= '0' && communityMealsFebContents.kpi2 <= '90')?'red':(communityMealsFebContents.kpi2 > '90' && communityMealsFebContents.kpi2 <= '120')?'orange':(communityMealsFebContents.kpi2 > '120' && communityMealsFebContents.kpi2 < '150')?'yellow-7':(communityMealsFebContents.kpi2 >= '150' && communityMealsFebContents.kpi2 < '180')?'green':(communityMealsFebContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsFebContents.kpi3 == null)?'grey-2':(communityMealsFebContents.kpi3 >= '0' && communityMealsFebContents.kpi3 <= '2.6')?'red':(communityMealsFebContents.kpi3 > '2.6' && communityMealsFebContents.kpi3 <= '3.466666667')?'orange':(communityMealsFebContents.kpi3 > '3.466666667' && communityMealsFebContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsFebContents.kpi3 >= '4.333333333' && communityMealsFebContents.kpi3 < '5.2')?'green':(communityMealsFebContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsFebContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsFebContents.kpi4 == null)?'grey-2':(communityMealsFebContents.kpi4 >= '0' && communityMealsFebContents.kpi4 <= '384.2')?'red':(communityMealsFebContents.kpi4 > '384.2' && communityMealsFebContents.kpi4 <= '512.2666667')?'orange':(communityMealsFebContents.kpi4 > '512.2666667' && communityMealsFebContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsFebContents.kpi4 >= '640.3333333' && communityMealsFebContents.kpi4 < '768.4')?'green':(communityMealsFebContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsFebContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsMarContents.kpi1 == null)?'grey-2':(communityMealsMarContents.kpi1 >= '0' && communityMealsMarContents.kpi1 <= '9.8')?'red':(communityMealsMarContents.kpi1 > '9.8' && communityMealsMarContents.kpi1 <= '13.06666667')?'orange':(communityMealsMarContents.kpi1 > '13.06666667' && communityMealsMarContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsMarContents.kpi1 >= '16.33333333' && communityMealsMarContents.kpi1 < '19.6')?'green':(communityMealsMarContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMarContents.kpi2 == null)?'grey-2':(communityMealsMarContents.kpi2 >= '0' && communityMealsMarContents.kpi2 <= '90')?'red':(communityMealsMarContents.kpi2 > '90' && communityMealsMarContents.kpi2 <= '120')?'orange':(communityMealsMarContents.kpi2 > '120' && communityMealsMarContents.kpi2 < '150')?'yellow-7':(communityMealsMarContents.kpi2 >= '150' && communityMealsMarContents.kpi2 < '180')?'green':(communityMealsMarContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMarContents.kpi3 == null)?'grey-2':(communityMealsMarContents.kpi3 >= '0' && communityMealsMarContents.kpi3 <= '2.6')?'red':(communityMealsMarContents.kpi3 > '2.6' && communityMealsMarContents.kpi3 <= '3.466666667')?'orange':(communityMealsMarContents.kpi3 > '3.466666667' && communityMealsMarContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsMarContents.kpi3 >= '4.333333333' && communityMealsMarContents.kpi3 < '5.2')?'green':(communityMealsMarContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsMarContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMarContents.kpi4 == null)?'grey-2':(communityMealsMarContents.kpi4 >= '0' && communityMealsMarContents.kpi4 <= '384.2')?'red':(communityMealsMarContents.kpi4 > '384.2' && communityMealsMarContents.kpi4 <= '512.2666667')?'orange':(communityMealsMarContents.kpi4 > '512.2666667' && communityMealsMarContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsMarContents.kpi4 >= '640.3333333' && communityMealsMarContents.kpi4 < '768.4')?'green':(communityMealsMarContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsMarContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsAprContents.kpi1 == null)?'grey-2':(communityMealsAprContents.kpi1 >= '0' && communityMealsAprContents.kpi1 <= '9.8')?'red':(communityMealsAprContents.kpi1 > '9.8' && communityMealsAprContents.kpi1 <= '13.06666667')?'orange':(communityMealsAprContents.kpi1 > '13.06666667' && communityMealsAprContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsAprContents.kpi1 >= '16.33333333' && communityMealsAprContents.kpi1 < '19.6')?'green':(communityMealsAprContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAprContents.kpi2 == null)?'grey-2':(communityMealsAprContents.kpi2 >= '0' && communityMealsAprContents.kpi2 <= '90')?'red':(communityMealsAprContents.kpi2 > '90' && communityMealsAprContents.kpi2 <= '120')?'orange':(communityMealsAprContents.kpi2 > '120' && communityMealsAprContents.kpi2 < '150')?'yellow-7':(communityMealsAprContents.kpi2 >= '150' && communityMealsAprContents.kpi2 < '180')?'green':(communityMealsAprContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAprContents.kpi3 == null)?'grey-2':(communityMealsAprContents.kpi3 >= '0' && communityMealsAprContents.kpi3 <= '2.6')?'red':(communityMealsAprContents.kpi3 > '2.6' && communityMealsAprContents.kpi3 <= '3.466666667')?'orange':(communityMealsAprContents.kpi3 > '3.466666667' && communityMealsAprContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsAprContents.kpi3 >= '4.333333333' && communityMealsAprContents.kpi3 < '5.2')?'green':(communityMealsAprContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsAprContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAprContents.kpi4 == null)?'grey-2':(communityMealsAprContents.kpi4 >= '0' && communityMealsAprContents.kpi4 <= '384.2')?'red':(communityMealsAprContents.kpi4 > '384.2' && communityMealsAprContents.kpi4 <= '512.2666667')?'orange':(communityMealsAprContents.kpi4 > '512.2666667' && communityMealsAprContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsAprContents.kpi4 >= '640.3333333' && communityMealsAprContents.kpi4 < '768.4')?'green':(communityMealsAprContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsAprContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsMayContents.kpi1 == null)?'grey-2':(communityMealsMayContents.kpi1 >= '0' && communityMealsMayContents.kpi1 <= '9.8')?'red':(communityMealsMayContents.kpi1 > '9.8' && communityMealsMayContents.kpi1 <= '13.06666667')?'orange':(communityMealsMayContents.kpi1 > '13.06666667' && communityMealsMayContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsMayContents.kpi1 >= '16.33333333' && communityMealsMayContents.kpi1 < '19.6')?'green':(communityMealsMayContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMayContents.kpi2 == null)?'grey-2':(communityMealsMayContents.kpi2 >= '0' && communityMealsMayContents.kpi2 <= '90')?'red':(communityMealsMayContents.kpi2 > '90' && communityMealsMayContents.kpi2 <= '120')?'orange':(communityMealsMayContents.kpi2 > '120' && communityMealsMayContents.kpi2 < '150')?'yellow-7':(communityMealsMayContents.kpi2 >= '150' && communityMealsMayContents.kpi2 < '180')?'green':(communityMealsMayContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMayContents.kpi3 == null)?'grey-2':(communityMealsMayContents.kpi3 >= '0' && communityMealsMayContents.kpi3 <= '2.6')?'red':(communityMealsMayContents.kpi3 > '2.6' && communityMealsMayContents.kpi3 <= '3.466666667')?'orange':(communityMealsMayContents.kpi3 > '3.466666667' && communityMealsMayContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsMayContents.kpi3 >= '4.333333333' && communityMealsMayContents.kpi3 < '5.2')?'green':(communityMealsMayContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsMayContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMayContents.kpi4 == null)?'grey-2':(communityMealsMayContents.kpi4 >= '0' && communityMealsMayContents.kpi4 <= '384.2')?'red':(communityMealsMayContents.kpi4 > '384.2' && communityMealsMayContents.kpi4 <= '512.2666667')?'orange':(communityMealsMayContents.kpi4 > '512.2666667' && communityMealsMayContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsMayContents.kpi4 >= '640.3333333' && communityMealsMayContents.kpi4 < '768.4')?'green':(communityMealsMayContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsMayContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsJunContents.kpi1 == null)?'grey-2':(communityMealsJunContents.kpi1 >= '0' && communityMealsJunContents.kpi1 <= '9.8')?'red':(communityMealsJunContents.kpi1 > '9.8' && communityMealsJunContents.kpi1 <= '13.06666667')?'orange':(communityMealsJunContents.kpi1 > '13.06666667' && communityMealsJunContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsJunContents.kpi1 >= '16.33333333' && communityMealsJunContents.kpi1 < '19.6')?'green':(communityMealsJunContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJunContents.kpi2 == null)?'grey-2':(communityMealsJunContents.kpi2 >= '0' && communityMealsJunContents.kpi2 <= '90')?'red':(communityMealsJunContents.kpi2 > '90' && communityMealsJunContents.kpi2 <= '120')?'orange':(communityMealsJunContents.kpi2 > '120' && communityMealsJunContents.kpi2 < '150')?'yellow-7':(communityMealsJunContents.kpi2 >= '150' && communityMealsJunContents.kpi2 < '180')?'green':(communityMealsJunContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJunContents.kpi3 == null)?'grey-2':(communityMealsJunContents.kpi3 >= '0' && communityMealsJunContents.kpi3 <= '2.6')?'red':(communityMealsJunContents.kpi3 > '2.6' && communityMealsJunContents.kpi3 <= '3.466666667')?'orange':(communityMealsJunContents.kpi3 > '3.466666667' && communityMealsJunContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsJunContents.kpi3 >= '4.333333333' && communityMealsJunContents.kpi3 < '5.2')?'green':(communityMealsJunContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsJunContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJunContents.kpi4 == null)?'grey-2':(communityMealsJunContents.kpi4 >= '0' && communityMealsJunContents.kpi4 <= '384.2')?'red':(communityMealsJunContents.kpi4 > '384.2' && communityMealsJunContents.kpi4 <= '512.2666667')?'orange':(communityMealsJunContents.kpi4 > '512.2666667' && communityMealsJunContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsJunContents.kpi4 >= '640.3333333' && communityMealsJunContents.kpi4 < '768.4')?'green':(communityMealsJunContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsJunContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsJulContents.kpi1 == null)?'grey-2':(communityMealsJulContents.kpi1 >= '0' && communityMealsJulContents.kpi1 <= '9.8')?'red':(communityMealsJulContents.kpi1 > '9.8' && communityMealsJulContents.kpi1 <= '13.06666667')?'orange':(communityMealsJulContents.kpi1 > '13.06666667' && communityMealsJulContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsJulContents.kpi1 >= '16.33333333' && communityMealsJulContents.kpi1 < '19.6')?'green':(communityMealsJulContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJulContents.kpi2 == null)?'grey-2':(communityMealsJulContents.kpi2 >= '0' && communityMealsJulContents.kpi2 <= '90')?'red':(communityMealsJulContents.kpi2 > '90' && communityMealsJulContents.kpi2 <= '120')?'orange':(communityMealsJulContents.kpi2 > '120' && communityMealsJulContents.kpi2 < '150')?'yellow-7':(communityMealsJulContents.kpi2 >= '150' && communityMealsJulContents.kpi2 < '180')?'green':(communityMealsJulContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJulContents.kpi3 == null)?'grey-2':(communityMealsJulContents.kpi3 >= '0' && communityMealsJulContents.kpi3 <= '2.6')?'red':(communityMealsJulContents.kpi3 > '2.6' && communityMealsJulContents.kpi3 <= '3.466666667')?'orange':(communityMealsJulContents.kpi3 > '3.466666667' && communityMealsJulContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsJulContents.kpi3 >= '4.333333333' && communityMealsJulContents.kpi3 < '5.2')?'green':(communityMealsJulContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsJulContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJulContents.kpi4 == null)?'grey-2':(communityMealsJulContents.kpi4 >= '0' && communityMealsJulContents.kpi4 <= '384.2')?'red':(communityMealsJulContents.kpi4 > '384.2' && communityMealsJulContents.kpi4 <= '512.2666667')?'orange':(communityMealsJulContents.kpi4 > '512.2666667' && communityMealsJulContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsJulContents.kpi4 >= '640.3333333' && communityMealsJulContents.kpi4 < '768.4')?'green':(communityMealsJulContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsJulContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsAugContents.kpi1 == null)?'grey-2':(communityMealsAugContents.kpi1 >= '0' && communityMealsAugContents.kpi1 <= '9.8')?'red':(communityMealsAugContents.kpi1 > '9.8' && communityMealsAugContents.kpi1 <= '13.06666667')?'orange':(communityMealsAugContents.kpi1 > '13.06666667' && communityMealsAugContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsAugContents.kpi1 >= '16.33333333' && communityMealsAugContents.kpi1 < '19.6')?'green':(communityMealsAugContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAugContents.kpi2 == null)?'grey-2':(communityMealsAugContents.kpi2 >= '0' && communityMealsAugContents.kpi2 <= '90')?'red':(communityMealsAugContents.kpi2 > '90' && communityMealsAugContents.kpi2 <= '120')?'orange':(communityMealsAugContents.kpi2 > '120' && communityMealsAugContents.kpi2 < '150')?'yellow-7':(communityMealsAugContents.kpi2 >= '150' && communityMealsAugContents.kpi2 < '180')?'green':(communityMealsAugContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAugContents.kpi3 == null)?'grey-2':(communityMealsAugContents.kpi3 >= '0' && communityMealsAugContents.kpi3 <= '2.6')?'red':(communityMealsAugContents.kpi3 > '2.6' && communityMealsAugContents.kpi3 <= '3.466666667')?'orange':(communityMealsAugContents.kpi3 > '3.466666667' && communityMealsAugContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsAugContents.kpi3 >= '4.333333333' && communityMealsAugContents.kpi3 < '5.2')?'green':(communityMealsAugContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsAugContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAugContents.kpi4 == null)?'grey-2':(communityMealsAugContents.kpi4 >= '0' && communityMealsAugContents.kpi4 <= '384.2')?'red':(communityMealsAugContents.kpi4 > '384.2' && communityMealsAugContents.kpi4 <= '512.2666667')?'orange':(communityMealsAugContents.kpi4 > '512.2666667' && communityMealsAugContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsAugContents.kpi4 >= '640.3333333' && communityMealsAugContents.kpi4 < '768.4')?'green':(communityMealsAugContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsAugContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsSepContents.kpi1 == null)?'grey-2':(communityMealsSepContents.kpi1 >= '0' && communityMealsSepContents.kpi1 <= '9.8')?'red':(communityMealsSepContents.kpi1 > '9.8' && communityMealsSepContents.kpi1 <= '13.06666667')?'orange':(communityMealsSepContents.kpi1 > '13.06666667' && communityMealsSepContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsSepContents.kpi1 >= '16.33333333' && communityMealsSepContents.kpi1 < '19.6')?'green':(communityMealsSepContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsSepContents.kpi2 == null)?'grey-2':(communityMealsSepContents.kpi2 >= '0' && communityMealsSepContents.kpi2 <= '90')?'red':(communityMealsSepContents.kpi2 > '90' && communityMealsSepContents.kpi2 <= '120')?'orange':(communityMealsSepContents.kpi2 > '120' && communityMealsSepContents.kpi2 < '150')?'yellow-7':(communityMealsSepContents.kpi2 >= '150' && communityMealsSepContents.kpi2 < '180')?'green':(communityMealsSepContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsSepContents.kpi3 == null)?'grey-2':(communityMealsSepContents.kpi3 >= '0' && communityMealsSepContents.kpi3 <= '2.6')?'red':(communityMealsSepContents.kpi3 > '2.6' && communityMealsSepContents.kpi3 <= '3.466666667')?'orange':(communityMealsSepContents.kpi3 > '3.466666667' && communityMealsSepContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsSepContents.kpi3 >= '4.333333333' && communityMealsSepContents.kpi3 < '5.2')?'green':(communityMealsSepContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsSepContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsSepContents.kpi4 == null)?'grey-2':(communityMealsSepContents.kpi4 >= '0' && communityMealsSepContents.kpi4 <= '384.2')?'red':(communityMealsSepContents.kpi4 > '384.2' && communityMealsSepContents.kpi4 <= '512.2666667')?'orange':(communityMealsSepContents.kpi4 > '512.2666667' && communityMealsSepContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsSepContents.kpi4 >= '640.3333333' && communityMealsSepContents.kpi4 < '768.4')?'green':(communityMealsSepContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsSepContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsOctContents.kpi1 == null)?'grey-2':(communityMealsOctContents.kpi1 >= '0' && communityMealsOctContents.kpi1 <= '9.8')?'red':(communityMealsOctContents.kpi1 > '9.8' && communityMealsOctContents.kpi1 <= '13.06666667')?'orange':(communityMealsOctContents.kpi1 > '13.06666667' && communityMealsOctContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsOctContents.kpi1 >= '16.33333333' && communityMealsOctContents.kpi1 < '19.6')?'green':(communityMealsOctContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsOctContents.kpi2 == null)?'grey-2':(communityMealsOctContents.kpi2 >= '0' && communityMealsOctContents.kpi2 <= '90')?'red':(communityMealsOctContents.kpi2 > '90' && communityMealsOctContents.kpi2 <= '120')?'orange':(communityMealsOctContents.kpi2 > '120' && communityMealsOctContents.kpi2 < '150')?'yellow-7':(communityMealsOctContents.kpi2 >= '150' && communityMealsOctContents.kpi2 < '180')?'green':(communityMealsOctContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsOctContents.kpi3 == null)?'grey-2':(communityMealsOctContents.kpi3 >= '0' && communityMealsOctContents.kpi3 <= '2.6')?'red':(communityMealsOctContents.kpi3 > '2.6' && communityMealsOctContents.kpi3 <= '3.466666667')?'orange':(communityMealsOctContents.kpi3 > '3.466666667' && communityMealsOctContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsOctContents.kpi3 >= '4.333333333' && communityMealsOctContents.kpi3 < '5.2')?'green':(communityMealsOctContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsOctContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsOctContents.kpi4 == null)?'grey-2':(communityMealsOctContents.kpi4 >= '0' && communityMealsOctContents.kpi4 <= '384.2')?'red':(communityMealsOctContents.kpi4 > '384.2' && communityMealsOctContents.kpi4 <= '512.2666667')?'orange':(communityMealsOctContents.kpi4 > '512.2666667' && communityMealsOctContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsOctContents.kpi4 >= '640.3333333' && communityMealsOctContents.kpi4 < '768.4')?'green':(communityMealsOctContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsOctContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsNovContents.kpi1 == null)?'grey-2':(communityMealsNovContents.kpi1 >= '0' && communityMealsNovContents.kpi1 <= '9.8')?'red':(communityMealsNovContents.kpi1 > '9.8' && communityMealsNovContents.kpi1 <= '13.06666667')?'orange':(communityMealsNovContents.kpi1 > '13.06666667' && communityMealsNovContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsNovContents.kpi1 >= '16.33333333' && communityMealsNovContents.kpi1 < '19.6')?'green':(communityMealsNovContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsNovContents.kpi2 == null)?'grey-2':(communityMealsNovContents.kpi2 >= '0' && communityMealsNovContents.kpi2 <= '90')?'red':(communityMealsNovContents.kpi2 > '90' && communityMealsNovContents.kpi2 <= '120')?'orange':(communityMealsNovContents.kpi2 > '120' && communityMealsNovContents.kpi2 < '150')?'yellow-7':(communityMealsNovContents.kpi2 >= '150' && communityMealsNovContents.kpi2 < '180')?'green':(communityMealsNovContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsNovContents.kpi3 == null)?'grey-2':(communityMealsNovContents.kpi3 >= '0' && communityMealsNovContents.kpi3 <= '2.6')?'red':(communityMealsNovContents.kpi3 > '2.6' && communityMealsNovContents.kpi3 <= '3.466666667')?'orange':(communityMealsNovContents.kpi3 > '3.466666667' && communityMealsNovContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsNovContents.kpi3 >= '4.333333333' && communityMealsNovContents.kpi3 < '5.2')?'green':(communityMealsNovContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsNovContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsNovContents.kpi4 == null)?'grey-2':(communityMealsNovContents.kpi4 >= '0' && communityMealsNovContents.kpi4 <= '384.2')?'red':(communityMealsNovContents.kpi4 > '384.2' && communityMealsNovContents.kpi4 <= '512.2666667')?'orange':(communityMealsNovContents.kpi4 > '512.2666667' && communityMealsNovContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsNovContents.kpi4 >= '640.3333333' && communityMealsNovContents.kpi4 < '768.4')?'green':(communityMealsNovContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsNovContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsDecContents.kpi1 == null)?'grey-2':(communityMealsDecContents.kpi1 >= '0' && communityMealsDecContents.kpi1 <= '9.8')?'red':(communityMealsDecContents.kpi1 > '9.8' && communityMealsDecContents.kpi1 <= '13.06666667')?'orange':(communityMealsDecContents.kpi1 > '13.06666667' && communityMealsDecContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsDecContents.kpi1 >= '16.33333333' && communityMealsDecContents.kpi1 < '19.6')?'green':(communityMealsDecContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsDecContents.kpi2 == null)?'grey-2':(communityMealsDecContents.kpi2 >= '0' && communityMealsDecContents.kpi2 <= '90')?'red':(communityMealsDecContents.kpi2 > '90' && communityMealsDecContents.kpi2 <= '120')?'orange':(communityMealsDecContents.kpi2 > '120' && communityMealsDecContents.kpi2 < '150')?'yellow-7':(communityMealsDecContents.kpi2 >= '150' && communityMealsDecContents.kpi2 < '180')?'green':(communityMealsDecContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsDecContents.kpi3 == null)?'grey-2':(communityMealsDecContents.kpi3 >= '0' && communityMealsDecContents.kpi3 <= '2.6')?'red':(communityMealsDecContents.kpi3 > '2.6' && communityMealsDecContents.kpi3 <= '3.466666667')?'orange':(communityMealsDecContents.kpi3 > '3.466666667' && communityMealsDecContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsDecContents.kpi3 >= '4.333333333' && communityMealsDecContents.kpi3 < '5.2')?'green':(communityMealsDecContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsDecContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsDecContents.kpi4 == null)?'grey-2':(communityMealsDecContents.kpi4 >= '0' && communityMealsDecContents.kpi4 <= '384.2')?'red':(communityMealsDecContents.kpi4 > '384.2' && communityMealsDecContents.kpi4 <= '512.2666667')?'orange':(communityMealsDecContents.kpi4 > '512.2666667' && communityMealsDecContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsDecContents.kpi4 >= '640.3333333' && communityMealsDecContents.kpi4 < '768.4')?'green':(communityMealsDecContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsDecContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                                <q-tooltip>Activities (#)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsJanContents.kpi1 == null)?'grey-2':(communityMealsJanContents.kpi1 >= '0' && communityMealsJanContents.kpi1 <= '9.8')?'red':(communityMealsJanContents.kpi1 > '9.8' && communityMealsJanContents.kpi1 <= '13.06666667')?'orange':(communityMealsJanContents.kpi1 > '13.06666667' && communityMealsJanContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsJanContents.kpi1 >= '16.33333333' && communityMealsJanContents.kpi1 < '19.6')?'green':(communityMealsJanContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJanContents.kpi2 == null)?'grey-2':(communityMealsJanContents.kpi2 >= '0' && communityMealsJanContents.kpi2 <= '90')?'red':(communityMealsJanContents.kpi2 > '90' && communityMealsJanContents.kpi2 <= '120')?'orange':(communityMealsJanContents.kpi2 > '120' && communityMealsJanContents.kpi2 < '150')?'yellow-7':(communityMealsJanContents.kpi2 >= '150' && communityMealsJanContents.kpi2 < '180')?'green':(communityMealsJanContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJanContents.kpi3 == null)?'grey-2':(communityMealsJanContents.kpi3 >= '0' && communityMealsJanContents.kpi3 <= '2.6')?'red':(communityMealsJanContents.kpi3 > '2.6' && communityMealsJanContents.kpi3 <= '3.466666667')?'orange':(communityMealsJanContents.kpi3 > '3.466666667' && communityMealsJanContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsJanContents.kpi3 >= '4.333333333' && communityMealsJanContents.kpi3 < '5.2')?'green':(communityMealsJanContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsJanContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJanContents.kpi4 == null)?'grey-2':(communityMealsJanContents.kpi4 >= '0' && communityMealsJanContents.kpi4 <= '384.2')?'red':(communityMealsJanContents.kpi4 > '384.2' && communityMealsJanContents.kpi4 <= '512.2666667')?'orange':(communityMealsJanContents.kpi4 > '512.2666667' && communityMealsJanContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsJanContents.kpi4 >= '640.3333333' && communityMealsJanContents.kpi4 < '768.4')?'green':(communityMealsJanContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsJanContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsFebContents.kpi1 == null)?'grey-2':(communityMealsFebContents.kpi1 >= '0' && communityMealsFebContents.kpi1 <= '9.8')?'red':(communityMealsFebContents.kpi1 > '9.8' && communityMealsFebContents.kpi1 <= '13.06666667')?'orange':(communityMealsFebContents.kpi1 > '13.06666667' && communityMealsFebContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsFebContents.kpi1 >= '16.33333333' && communityMealsFebContents.kpi1 < '19.6')?'green':(communityMealsFebContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsFebContents.kpi2 == null)?'grey-2':(communityMealsFebContents.kpi2 >= '0' && communityMealsFebContents.kpi2 <= '90')?'red':(communityMealsFebContents.kpi2 > '90' && communityMealsFebContents.kpi2 <= '120')?'orange':(communityMealsFebContents.kpi2 > '120' && communityMealsFebContents.kpi2 < '150')?'yellow-7':(communityMealsFebContents.kpi2 >= '150' && communityMealsFebContents.kpi2 < '180')?'green':(communityMealsFebContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsFebContents.kpi3 == null)?'grey-2':(communityMealsFebContents.kpi3 >= '0' && communityMealsFebContents.kpi3 <= '2.6')?'red':(communityMealsFebContents.kpi3 > '2.6' && communityMealsFebContents.kpi3 <= '3.466666667')?'orange':(communityMealsFebContents.kpi3 > '3.466666667' && communityMealsFebContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsFebContents.kpi3 >= '4.333333333' && communityMealsFebContents.kpi3 < '5.2')?'green':(communityMealsFebContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsFebContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsFebContents.kpi4 == null)?'grey-2':(communityMealsFebContents.kpi4 >= '0' && communityMealsFebContents.kpi4 <= '384.2')?'red':(communityMealsFebContents.kpi4 > '384.2' && communityMealsFebContents.kpi4 <= '512.2666667')?'orange':(communityMealsFebContents.kpi4 > '512.2666667' && communityMealsFebContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsFebContents.kpi4 >= '640.3333333' && communityMealsFebContents.kpi4 < '768.4')?'green':(communityMealsFebContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsFebContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsMarContents.kpi1 == null)?'grey-2':(communityMealsMarContents.kpi1 >= '0' && communityMealsMarContents.kpi1 <= '9.8')?'red':(communityMealsMarContents.kpi1 > '9.8' && communityMealsMarContents.kpi1 <= '13.06666667')?'orange':(communityMealsMarContents.kpi1 > '13.06666667' && communityMealsMarContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsMarContents.kpi1 >= '16.33333333' && communityMealsMarContents.kpi1 < '19.6')?'green':(communityMealsMarContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMarContents.kpi2 == null)?'grey-2':(communityMealsMarContents.kpi2 >= '0' && communityMealsMarContents.kpi2 <= '90')?'red':(communityMealsMarContents.kpi2 > '90' && communityMealsMarContents.kpi2 <= '120')?'orange':(communityMealsMarContents.kpi2 > '120' && communityMealsMarContents.kpi2 < '150')?'yellow-7':(communityMealsMarContents.kpi2 >= '150' && communityMealsMarContents.kpi2 < '180')?'green':(communityMealsMarContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMarContents.kpi3 == null)?'grey-2':(communityMealsMarContents.kpi3 >= '0' && communityMealsMarContents.kpi3 <= '2.6')?'red':(communityMealsMarContents.kpi3 > '2.6' && communityMealsMarContents.kpi3 <= '3.466666667')?'orange':(communityMealsMarContents.kpi3 > '3.466666667' && communityMealsMarContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsMarContents.kpi3 >= '4.333333333' && communityMealsMarContents.kpi3 < '5.2')?'green':(communityMealsMarContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsMarContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMarContents.kpi4 == null)?'grey-2':(communityMealsMarContents.kpi4 >= '0' && communityMealsMarContents.kpi4 <= '384.2')?'red':(communityMealsMarContents.kpi4 > '384.2' && communityMealsMarContents.kpi4 <= '512.2666667')?'orange':(communityMealsMarContents.kpi4 > '512.2666667' && communityMealsMarContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsMarContents.kpi4 >= '640.3333333' && communityMealsMarContents.kpi4 < '768.4')?'green':(communityMealsMarContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsMarContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsAprContents.kpi1 == null)?'grey-2':(communityMealsAprContents.kpi1 >= '0' && communityMealsAprContents.kpi1 <= '9.8')?'red':(communityMealsAprContents.kpi1 > '9.8' && communityMealsAprContents.kpi1 <= '13.06666667')?'orange':(communityMealsAprContents.kpi1 > '13.06666667' && communityMealsAprContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsAprContents.kpi1 >= '16.33333333' && communityMealsAprContents.kpi1 < '19.6')?'green':(communityMealsAprContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAprContents.kpi2 == null)?'grey-2':(communityMealsAprContents.kpi2 >= '0' && communityMealsAprContents.kpi2 <= '90')?'red':(communityMealsAprContents.kpi2 > '90' && communityMealsAprContents.kpi2 <= '120')?'orange':(communityMealsAprContents.kpi2 > '120' && communityMealsAprContents.kpi2 < '150')?'yellow-7':(communityMealsAprContents.kpi2 >= '150' && communityMealsAprContents.kpi2 < '180')?'green':(communityMealsAprContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAprContents.kpi3 == null)?'grey-2':(communityMealsAprContents.kpi3 >= '0' && communityMealsAprContents.kpi3 <= '2.6')?'red':(communityMealsAprContents.kpi3 > '2.6' && communityMealsAprContents.kpi3 <= '3.466666667')?'orange':(communityMealsAprContents.kpi3 > '3.466666667' && communityMealsAprContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsAprContents.kpi3 >= '4.333333333' && communityMealsAprContents.kpi3 < '5.2')?'green':(communityMealsAprContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsAprContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAprContents.kpi4 == null)?'grey-2':(communityMealsAprContents.kpi4 >= '0' && communityMealsAprContents.kpi4 <= '384.2')?'red':(communityMealsAprContents.kpi4 > '384.2' && communityMealsAprContents.kpi4 <= '512.2666667')?'orange':(communityMealsAprContents.kpi4 > '512.2666667' && communityMealsAprContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsAprContents.kpi4 >= '640.3333333' && communityMealsAprContents.kpi4 < '768.4')?'green':(communityMealsAprContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsAprContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsMayContents.kpi1 == null)?'grey-2':(communityMealsMayContents.kpi1 >= '0' && communityMealsMayContents.kpi1 <= '9.8')?'red':(communityMealsMayContents.kpi1 > '9.8' && communityMealsMayContents.kpi1 <= '13.06666667')?'orange':(communityMealsMayContents.kpi1 > '13.06666667' && communityMealsMayContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsMayContents.kpi1 >= '16.33333333' && communityMealsMayContents.kpi1 < '19.6')?'green':(communityMealsMayContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMayContents.kpi2 == null)?'grey-2':(communityMealsMayContents.kpi2 >= '0' && communityMealsMayContents.kpi2 <= '90')?'red':(communityMealsMayContents.kpi2 > '90' && communityMealsMayContents.kpi2 <= '120')?'orange':(communityMealsMayContents.kpi2 > '120' && communityMealsMayContents.kpi2 < '150')?'yellow-7':(communityMealsMayContents.kpi2 >= '150' && communityMealsMayContents.kpi2 < '180')?'green':(communityMealsMayContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMayContents.kpi3 == null)?'grey-2':(communityMealsMayContents.kpi3 >= '0' && communityMealsMayContents.kpi3 <= '2.6')?'red':(communityMealsMayContents.kpi3 > '2.6' && communityMealsMayContents.kpi3 <= '3.466666667')?'orange':(communityMealsMayContents.kpi3 > '3.466666667' && communityMealsMayContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsMayContents.kpi3 >= '4.333333333' && communityMealsMayContents.kpi3 < '5.2')?'green':(communityMealsMayContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsMayContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsMayContents.kpi4 == null)?'grey-2':(communityMealsMayContents.kpi4 >= '0' && communityMealsMayContents.kpi4 <= '384.2')?'red':(communityMealsMayContents.kpi4 > '384.2' && communityMealsMayContents.kpi4 <= '512.2666667')?'orange':(communityMealsMayContents.kpi4 > '512.2666667' && communityMealsMayContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsMayContents.kpi4 >= '640.3333333' && communityMealsMayContents.kpi4 < '768.4')?'green':(communityMealsMayContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsMayContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsJunContents.kpi1 == null)?'grey-2':(communityMealsJunContents.kpi1 >= '0' && communityMealsJunContents.kpi1 <= '9.8')?'red':(communityMealsJunContents.kpi1 > '9.8' && communityMealsJunContents.kpi1 <= '13.06666667')?'orange':(communityMealsJunContents.kpi1 > '13.06666667' && communityMealsJunContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsJunContents.kpi1 >= '16.33333333' && communityMealsJunContents.kpi1 < '19.6')?'green':(communityMealsJunContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJunContents.kpi2 == null)?'grey-2':(communityMealsJunContents.kpi2 >= '0' && communityMealsJunContents.kpi2 <= '90')?'red':(communityMealsJunContents.kpi2 > '90' && communityMealsJunContents.kpi2 <= '120')?'orange':(communityMealsJunContents.kpi2 > '120' && communityMealsJunContents.kpi2 < '150')?'yellow-7':(communityMealsJunContents.kpi2 >= '150' && communityMealsJunContents.kpi2 < '180')?'green':(communityMealsJunContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJunContents.kpi3 == null)?'grey-2':(communityMealsJunContents.kpi3 >= '0' && communityMealsJunContents.kpi3 <= '2.6')?'red':(communityMealsJunContents.kpi3 > '2.6' && communityMealsJunContents.kpi3 <= '3.466666667')?'orange':(communityMealsJunContents.kpi3 > '3.466666667' && communityMealsJunContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsJunContents.kpi3 >= '4.333333333' && communityMealsJunContents.kpi3 < '5.2')?'green':(communityMealsJunContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsJunContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJunContents.kpi4 == null)?'grey-2':(communityMealsJunContents.kpi4 >= '0' && communityMealsJunContents.kpi4 <= '384.2')?'red':(communityMealsJunContents.kpi4 > '384.2' && communityMealsJunContents.kpi4 <= '512.2666667')?'orange':(communityMealsJunContents.kpi4 > '512.2666667' && communityMealsJunContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsJunContents.kpi4 >= '640.3333333' && communityMealsJunContents.kpi4 < '768.4')?'green':(communityMealsJunContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsJunContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsJulContents.kpi1 == null)?'grey-2':(communityMealsJulContents.kpi1 >= '0' && communityMealsJulContents.kpi1 <= '9.8')?'red':(communityMealsJulContents.kpi1 > '9.8' && communityMealsJulContents.kpi1 <= '13.06666667')?'orange':(communityMealsJulContents.kpi1 > '13.06666667' && communityMealsJulContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsJulContents.kpi1 >= '16.33333333' && communityMealsJulContents.kpi1 < '19.6')?'green':(communityMealsJulContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJulContents.kpi2 == null)?'grey-2':(communityMealsJulContents.kpi2 >= '0' && communityMealsJulContents.kpi2 <= '90')?'red':(communityMealsJulContents.kpi2 > '90' && communityMealsJulContents.kpi2 <= '120')?'orange':(communityMealsJulContents.kpi2 > '120' && communityMealsJulContents.kpi2 < '150')?'yellow-7':(communityMealsJulContents.kpi2 >= '150' && communityMealsJulContents.kpi2 < '180')?'green':(communityMealsJulContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJulContents.kpi3 == null)?'grey-2':(communityMealsJulContents.kpi3 >= '0' && communityMealsJulContents.kpi3 <= '2.6')?'red':(communityMealsJulContents.kpi3 > '2.6' && communityMealsJulContents.kpi3 <= '3.466666667')?'orange':(communityMealsJulContents.kpi3 > '3.466666667' && communityMealsJulContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsJulContents.kpi3 >= '4.333333333' && communityMealsJulContents.kpi3 < '5.2')?'green':(communityMealsJulContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsJulContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsJulContents.kpi4 == null)?'grey-2':(communityMealsJulContents.kpi4 >= '0' && communityMealsJulContents.kpi4 <= '384.2')?'red':(communityMealsJulContents.kpi4 > '384.2' && communityMealsJulContents.kpi4 <= '512.2666667')?'orange':(communityMealsJulContents.kpi4 > '512.2666667' && communityMealsJulContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsJulContents.kpi4 >= '640.3333333' && communityMealsJulContents.kpi4 < '768.4')?'green':(communityMealsJulContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsJulContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsAugContents.kpi1 == null)?'grey-2':(communityMealsAugContents.kpi1 >= '0' && communityMealsAugContents.kpi1 <= '9.8')?'red':(communityMealsAugContents.kpi1 > '9.8' && communityMealsAugContents.kpi1 <= '13.06666667')?'orange':(communityMealsAugContents.kpi1 > '13.06666667' && communityMealsAugContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsAugContents.kpi1 >= '16.33333333' && communityMealsAugContents.kpi1 < '19.6')?'green':(communityMealsAugContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAugContents.kpi2 == null)?'grey-2':(communityMealsAugContents.kpi2 >= '0' && communityMealsAugContents.kpi2 <= '90')?'red':(communityMealsAugContents.kpi2 > '90' && communityMealsAugContents.kpi2 <= '120')?'orange':(communityMealsAugContents.kpi2 > '120' && communityMealsAugContents.kpi2 < '150')?'yellow-7':(communityMealsAugContents.kpi2 >= '150' && communityMealsAugContents.kpi2 < '180')?'green':(communityMealsAugContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAugContents.kpi3 == null)?'grey-2':(communityMealsAugContents.kpi3 >= '0' && communityMealsAugContents.kpi3 <= '2.6')?'red':(communityMealsAugContents.kpi3 > '2.6' && communityMealsAugContents.kpi3 <= '3.466666667')?'orange':(communityMealsAugContents.kpi3 > '3.466666667' && communityMealsAugContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsAugContents.kpi3 >= '4.333333333' && communityMealsAugContents.kpi3 < '5.2')?'green':(communityMealsAugContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsAugContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsAugContents.kpi4 == null)?'grey-2':(communityMealsAugContents.kpi4 >= '0' && communityMealsAugContents.kpi4 <= '384.2')?'red':(communityMealsAugContents.kpi4 > '384.2' && communityMealsAugContents.kpi4 <= '512.2666667')?'orange':(communityMealsAugContents.kpi4 > '512.2666667' && communityMealsAugContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsAugContents.kpi4 >= '640.3333333' && communityMealsAugContents.kpi4 < '768.4')?'green':(communityMealsAugContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsAugContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsSepContents.kpi1 == null)?'grey-2':(communityMealsSepContents.kpi1 >= '0' && communityMealsSepContents.kpi1 <= '9.8')?'red':(communityMealsSepContents.kpi1 > '9.8' && communityMealsSepContents.kpi1 <= '13.06666667')?'orange':(communityMealsSepContents.kpi1 > '13.06666667' && communityMealsSepContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsSepContents.kpi1 >= '16.33333333' && communityMealsSepContents.kpi1 < '19.6')?'green':(communityMealsSepContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsSepContents.kpi2 == null)?'grey-2':(communityMealsSepContents.kpi2 >= '0' && communityMealsSepContents.kpi2 <= '90')?'red':(communityMealsSepContents.kpi2 > '90' && communityMealsSepContents.kpi2 <= '120')?'orange':(communityMealsSepContents.kpi2 > '120' && communityMealsSepContents.kpi2 < '150')?'yellow-7':(communityMealsSepContents.kpi2 >= '150' && communityMealsSepContents.kpi2 < '180')?'green':(communityMealsSepContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsSepContents.kpi3 == null)?'grey-2':(communityMealsSepContents.kpi3 >= '0' && communityMealsSepContents.kpi3 <= '2.6')?'red':(communityMealsSepContents.kpi3 > '2.6' && communityMealsSepContents.kpi3 <= '3.466666667')?'orange':(communityMealsSepContents.kpi3 > '3.466666667' && communityMealsSepContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsSepContents.kpi3 >= '4.333333333' && communityMealsSepContents.kpi3 < '5.2')?'green':(communityMealsSepContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsSepContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsSepContents.kpi4 == null)?'grey-2':(communityMealsSepContents.kpi4 >= '0' && communityMealsSepContents.kpi4 <= '384.2')?'red':(communityMealsSepContents.kpi4 > '384.2' && communityMealsSepContents.kpi4 <= '512.2666667')?'orange':(communityMealsSepContents.kpi4 > '512.2666667' && communityMealsSepContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsSepContents.kpi4 >= '640.3333333' && communityMealsSepContents.kpi4 < '768.4')?'green':(communityMealsSepContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsSepContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsOctContents.kpi1 == null)?'grey-2':(communityMealsOctContents.kpi1 >= '0' && communityMealsOctContents.kpi1 <= '9.8')?'red':(communityMealsOctContents.kpi1 > '9.8' && communityMealsOctContents.kpi1 <= '13.06666667')?'orange':(communityMealsOctContents.kpi1 > '13.06666667' && communityMealsOctContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsOctContents.kpi1 >= '16.33333333' && communityMealsOctContents.kpi1 < '19.6')?'green':(communityMealsOctContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsOctContents.kpi2 == null)?'grey-2':(communityMealsOctContents.kpi2 >= '0' && communityMealsOctContents.kpi2 <= '90')?'red':(communityMealsOctContents.kpi2 > '90' && communityMealsOctContents.kpi2 <= '120')?'orange':(communityMealsOctContents.kpi2 > '120' && communityMealsOctContents.kpi2 < '150')?'yellow-7':(communityMealsOctContents.kpi2 >= '150' && communityMealsOctContents.kpi2 < '180')?'green':(communityMealsOctContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsOctContents.kpi3 == null)?'grey-2':(communityMealsOctContents.kpi3 >= '0' && communityMealsOctContents.kpi3 <= '2.6')?'red':(communityMealsOctContents.kpi3 > '2.6' && communityMealsOctContents.kpi3 <= '3.466666667')?'orange':(communityMealsOctContents.kpi3 > '3.466666667' && communityMealsOctContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsOctContents.kpi3 >= '4.333333333' && communityMealsOctContents.kpi3 < '5.2')?'green':(communityMealsOctContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsOctContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsOctContents.kpi4 == null)?'grey-2':(communityMealsOctContents.kpi4 >= '0' && communityMealsOctContents.kpi4 <= '384.2')?'red':(communityMealsOctContents.kpi4 > '384.2' && communityMealsOctContents.kpi4 <= '512.2666667')?'orange':(communityMealsOctContents.kpi4 > '512.2666667' && communityMealsOctContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsOctContents.kpi4 >= '640.3333333' && communityMealsOctContents.kpi4 < '768.4')?'green':(communityMealsOctContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsOctContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsNovContents.kpi1 == null)?'grey-2':(communityMealsNovContents.kpi1 >= '0' && communityMealsNovContents.kpi1 <= '9.8')?'red':(communityMealsNovContents.kpi1 > '9.8' && communityMealsNovContents.kpi1 <= '13.06666667')?'orange':(communityMealsNovContents.kpi1 > '13.06666667' && communityMealsNovContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsNovContents.kpi1 >= '16.33333333' && communityMealsNovContents.kpi1 < '19.6')?'green':(communityMealsNovContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsNovContents.kpi2 == null)?'grey-2':(communityMealsNovContents.kpi2 >= '0' && communityMealsNovContents.kpi2 <= '90')?'red':(communityMealsNovContents.kpi2 > '90' && communityMealsNovContents.kpi2 <= '120')?'orange':(communityMealsNovContents.kpi2 > '120' && communityMealsNovContents.kpi2 < '150')?'yellow-7':(communityMealsNovContents.kpi2 >= '150' && communityMealsNovContents.kpi2 < '180')?'green':(communityMealsNovContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsNovContents.kpi3 == null)?'grey-2':(communityMealsNovContents.kpi3 >= '0' && communityMealsNovContents.kpi3 <= '2.6')?'red':(communityMealsNovContents.kpi3 > '2.6' && communityMealsNovContents.kpi3 <= '3.466666667')?'orange':(communityMealsNovContents.kpi3 > '3.466666667' && communityMealsNovContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsNovContents.kpi3 >= '4.333333333' && communityMealsNovContents.kpi3 < '5.2')?'green':(communityMealsNovContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsNovContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsNovContents.kpi4 == null)?'grey-2':(communityMealsNovContents.kpi4 >= '0' && communityMealsNovContents.kpi4 <= '384.2')?'red':(communityMealsNovContents.kpi4 > '384.2' && communityMealsNovContents.kpi4 <= '512.2666667')?'orange':(communityMealsNovContents.kpi4 > '512.2666667' && communityMealsNovContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsNovContents.kpi4 >= '640.3333333' && communityMealsNovContents.kpi4 < '768.4')?'green':(communityMealsNovContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsNovContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
                              :color="(communityMealsDecContents.kpi1 == null)?'grey-2':(communityMealsDecContents.kpi1 >= '0' && communityMealsDecContents.kpi1 <= '9.8')?'red':(communityMealsDecContents.kpi1 > '9.8' && communityMealsDecContents.kpi1 <= '13.06666667')?'orange':(communityMealsDecContents.kpi1 > '13.06666667' && communityMealsDecContents.kpi1 < '16.33333333')?'yellow-7':(communityMealsDecContents.kpi1 >= '16.33333333' && communityMealsDecContents.kpi1 < '19.6')?'green':(communityMealsDecContents.kpi1 >= '19.6'?'blue':'grey-2')"
                            >
                            {{communityMealsDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsDecContents.kpi2 == null)?'grey-2':(communityMealsDecContents.kpi2 >= '0' && communityMealsDecContents.kpi2 <= '90')?'red':(communityMealsDecContents.kpi2 > '90' && communityMealsDecContents.kpi2 <= '120')?'orange':(communityMealsDecContents.kpi2 > '120' && communityMealsDecContents.kpi2 < '150')?'yellow-7':(communityMealsDecContents.kpi2 >= '150' && communityMealsDecContents.kpi2 < '180')?'green':(communityMealsDecContents.kpi2 >= '180'?'blue':'grey-2')"
                            >
                            {{communityMealsDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsDecContents.kpi3 == null)?'grey-2':(communityMealsDecContents.kpi3 >= '0' && communityMealsDecContents.kpi3 <= '2.6')?'red':(communityMealsDecContents.kpi3 > '2.6' && communityMealsDecContents.kpi3 <= '3.466666667')?'orange':(communityMealsDecContents.kpi3 > '3.466666667' && communityMealsDecContents.kpi3 < '4.333333333')?'yellow-7':(communityMealsDecContents.kpi3 >= '4.333333333' && communityMealsDecContents.kpi3 < '5.2')?'green':(communityMealsDecContents.kpi3 >= '5.2'?'blue':'grey-2')"
                            >
                            {{communityMealsDecContents.kpi3}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityMealsDecContents.kpi4 == null)?'grey-2':(communityMealsDecContents.kpi4 >= '0' && communityMealsDecContents.kpi4 <= '384.2')?'red':(communityMealsDecContents.kpi4 > '384.2' && communityMealsDecContents.kpi4 <= '512.2666667')?'orange':(communityMealsDecContents.kpi4 > '512.2666667' && communityMealsDecContents.kpi4 < '640.3333333')?'yellow-7':(communityMealsDecContents.kpi4 >= '640.3333333' && communityMealsDecContents.kpi4 < '768.4')?'green':(communityMealsDecContents.kpi4 >= '768.4'?'blue':'grey-2')"
                            >
                            {{communityMealsDecContents.kpi4}}
                              <q-tooltip># of meals served</q-tooltip>
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
              communityMealsJanContent: {
                
              },
              communityMealsJanContents : [],
              communityMealsFebContent: {
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
              communityMealsFebContents : [],
              communityMealsMarContent: {
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
              communityMealsMarContents : [],
              communityMealsAprContent: {
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
              communityMealsAprContents : [],
              communityMealsMayContent: {
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
              communityMealsMayContents : [],
              communityMealsJunContent: {
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
              communityMealsJunContents : [],
              communityMealsJulContent: {
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
              communityMealsJulContents : [],
              communityMealsAugContent: {
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
              communityMealsAugContents : [],
              communityMealsSepContent: {
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
              communityMealsSepContents : [],
              communityMealsOctContent: {
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
              communityMealsOctContents : [],
              communityMealsNovContent: {
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
              communityMealsNovContents : [],
              communityMealsDecContent: {
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
              communityMealsDecContents : []


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
                            {time_period: 'January', expenses: this.communityMealsJanContents.expenses, revenues: this.communityMealsJanContents.revenues},
                            {time_period: 'February', expenses: this.communityMealsFebContents.expenses, revenues: this.communityMealsFebContents.revenues},
                            {time_period: 'March', expenses: this.communityMealsMarContents.expenses, revenues: this.communityMealsMarContents.revenues},
                            {time_period: 'April', expenses: this.communityMealsAprContents.expenses, revenues: this.communityMealsAprContents.revenues},
                            {time_period: 'May', expenses: this.communityMealsMayContents.expenses, revenues: this.communityMealsMayContents.revenues},
                            {time_period: 'June', expenses: this.communityMealsJunContents.expenses, revenues: this.communityMealsJunContents.revenues},
                            {time_period: 'July', expenses: this.communityMealsJulContents.expenses, revenues: this.communityMealsJulContents.revenues},
                            {time_period: 'August', expenses: this.communityMealsAugContents.expenses, revenues: this.communityMealsAugContents.revenues},
                            {time_period: 'September', expenses: this.communityMealsSepContents.expenses, revenues: this.communityMealsSepContents.revenues},
                            {time_period: 'October', expenses: this.communityMealsOctContents.expenses, revenues: this.communityMealsOctContents.revenues},
                            {time_period: 'November', expenses: this.communityMealsNovContents.expenses, revenues: this.communityMealsNovContents.revenues},
                            {time_period: 'December',expenses: this.communityMealsDecContents.expenses, revenues: this.communityMealsDecContents.revenues }
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
                            {months: 'January', kpi1: this.communityMealsJanContents.kpi1, kpi2: this.communityMealsJanContents.kpi2, kpi3: this.communityMealsJanContents.kpi3, kpi4: this.communityMealsJanContents.kpi4, uniqueVol: this.communityMealsJanContents.uniqueVolunteers, volHours: this.communityMealsJanContents.volunteerHours},
                            {months: 'February', kpi1: this.communityMealsFebContents.kpi1, kpi2: this.communityMealsFebContents.kpi2, kpi3: this.communityMealsFebContents.kpi3, kpi4: this.communityMealsFebContents.kpi4, uniqueVol: this.communityMealsFebContents.uniqueVolunteers, volHours: this.communityMealsFebContents.volunteerHours},
                            {months: 'March', kpi1: this.communityMealsMarContents.kpi1, kpi2: this.communityMealsMarContents.kpi2, kpi3: this.communityMealsMarContents.kpi3, kpi4: this.communityMealsMarContents.kpi4, uniqueVol: this.communityMealsMarContents.uniqueVolunteers, volHours: this.communityMealsMarContents.volunteerHours},
                            {months: 'April', kpi1: this.communityMealsAprContents.kpi1, kpi2: this.communityMealsAprContents.kpi2, kpi3: this.communityMealsAprContents.kpi3, kpi4: this.communityMealsAprContents.kpi4, uniqueVol: this.communityMealsAprContents.uniqueVolunteers, volHours: this.communityMealsAprContents.volunteerHours},
                            {months: 'May', kpi1: this.communityMealsMayContents.kpi1, kpi2: this.communityMealsMayContents.kpi2, kpi3: this.communityMealsMayContents.kpi3, kpi4: this.communityMealsMayContents.kpi4, uniqueVol: this.communityMealsMayContents.uniqueVolunteers, volHours: this.communityMealsMayContents.volunteerHours},
                            {months: 'June', kpi1: this.communityMealsJunContents.kpi1, kpi2: this.communityMealsJunContents.kpi2, kpi3: this.communityMealsJunContents.kpi3, kpi4: this.communityMealsJunContents.kpi4, uniqueVol: this.communityMealsJunContents.uniqueVolunteers, volHours: this.communityMealsJunContents.volunteerHours},
                            {months: 'July', kpi1: this.communityMealsJulContents.kpi1, kpi2: this.communityMealsJulContents.kpi2, kpi3: this.communityMealsJulContents.kpi3, kpi4: this.communityMealsJulContents.kpi4, uniqueVol: this.communityMealsJulContents.uniqueVolunteers, volHours: this.communityMealsJulContents.volunteerHours},
                            {months: 'August', kpi1: this.communityMealsAugContents.kpi1, kpi2: this.communityMealsAugContents.kpi2, kpi3: this.communityMealsAugContents.kpi3, kpi4: this.communityMealsAugContents.kpi4, uniqueVol: this.communityMealsAugContents.uniqueVolunteers, volHours: this.communityMealsAugContents.volunteerHours},
                            {months: 'September', kpi1: this.communityMealsSepContents.kpi1, kpi2: this.communityMealsSepContents.kpi2, kpi3: this.communityMealsSepContents.kpi3, kpi4: this.communityMealsSepContents.kpi4, uniqueVol: this.communityMealsSepContents.uniqueVolunteers, volHours: this.communityMealsSepContents.volunteerHours},
                            {months: 'October', kpi1: this.communityMealsOctContents.kpi1, kpi2: this.communityMealsOctContents.kpi2, kpi3: this.communityMealsOctContents.kpi3, kpi4: this.communityMealsOctContents.kpi4, uniqueVol: this.communityMealsOctContents.uniqueVolunteers, volHours: this.communityMealsOctContents.volunteerHours},
                            {months: 'November', kpi1: this.communityMealsNovContents.kpi1, kpi2: this.communityMealsNovContents.kpi2, kpi3: this.communityMealsNovContents.kpi3, kpi4: this.communityMealsNovContents.kpi4, uniqueVol: this.communityMealsNovContents.uniqueVolunteers, volHours: this.communityMealsNovContents.volunteerHours},
                            {months: 'December',kpi1: this.communityMealsDecContents.kpi1, kpi2: this.communityMealsDecContents.kpi2, kpi3: this.communityMealsDecContents.kpi3, kpi4: this.communityMealsDecContents.kpi4, uniqueVol: this.communityMealsDecContents.uniqueVolunteers, volHours: this.communityMealsDecContents.volunteerHours},
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
                            data: [{value: this.communityMealsJanContents.budgetUsage}],
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
                                {value: this.communityMealsJanContents.perCategory1, name: this.communityMealsJanContents.expenseCategory1},
                                {value: this.communityMealsJanContents.perCategory2, name: this.communityMealsJanContents.expenseCategory2},
                                {value: this.communityMealsJanContents.perCategory3, name: this.communityMealsJanContents.expenseCategory3},
                                {value: this.communityMealsJanContents.perCategory4, name: this.communityMealsJanContents.expenseCategory4},
                                {value: this.communityMealsJanContents.perCategory5, name: this.communityMealsJanContents.expenseCategory5},
                                {value: this.communityMealsJanContents.perCategory6, name: this.communityMealsJanContents.expenseCategory6}
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
                            data: [{value: this.communityMealsFebContents.budgetUsage}],
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
                                {value: this.communityMealsFebContents.perCategory1, name: this.communityMealsFebContents.expenseCategory1},
                                {value: this.communityMealsFebContents.perCategory2, name: this.communityMealsFebContents.expenseCategory2},
                                {value: this.communityMealsFebContents.perCategory3, name: this.communityMealsFebContents.expenseCategory3},
                                {value: this.communityMealsFebContents.perCategory4, name: this.communityMealsFebContents.expenseCategory4},
                                {value: this.communityMealsFebContents.perCategory5, name: this.communityMealsFebContents.expenseCategory5},
                                {value: this.communityMealsFebContents.perCategory6, name: this.communityMealsFebContents.expenseCategory6}
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
                            data: [{value: this.communityMealsMarContents.budgetUsage}],
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
                                {value: this.communityMealsMarContents.perCategory1, name: this.communityMealsMarContents.expenseCategory1},
                                {value: this.communityMealsMarContents.perCategory2, name: this.communityMealsMarContents.expenseCategory2},
                                {value: this.communityMealsMarContents.perCategory3, name: this.communityMealsMarContents.expenseCategory3},
                                {value: this.communityMealsMarContents.perCategory4, name: this.communityMealsMarContents.expenseCategory4},
                                {value: this.communityMealsMarContents.perCategory5, name: this.communityMealsMarContents.expenseCategory5},
                                {value: this.communityMealsMarContents.perCategory6, name: this.communityMealsMarContents.expenseCategory6}
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
                            data: [{value: this.communityMealsAprContents.budgetUsage}],
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
                                {value: this.communityMealsAprContents.perCategory1, name: this.communityMealsAprContents.expenseCategory1},
                                {value: this.communityMealsAprContents.perCategory2, name: this.communityMealsAprContents.expenseCategory2},
                                {value: this.communityMealsAprContents.perCategory3, name: this.communityMealsAprContents.expenseCategory3},
                                {value: this.communityMealsAprContents.perCategory4, name: this.communityMealsAprContents.expenseCategory4},
                                {value: this.communityMealsAprContents.perCategory5, name: this.communityMealsAprContents.expenseCategory5},
                                {value: this.communityMealsAprContents.perCategory6, name: this.communityMealsAprContents.expenseCategory6}  
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
                            data: [{value: this.communityMealsMayContents.budgetUsage}],
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
                                {value: this.communityMealsMayContents.perCategory1, name: this.communityMealsMayContents.expenseCategory1},
                                {value: this.communityMealsMayContents.perCategory2, name: this.communityMealsMayContents.expenseCategory2},
                                {value: this.communityMealsMayContents.perCategory3, name: this.communityMealsMayContents.expenseCategory3},
                                {value: this.communityMealsMayContents.perCategory4, name: this.communityMealsMayContents.expenseCategory4},
                                {value: this.communityMealsMayContents.perCategory5, name: this.communityMealsMayContents.expenseCategory5},
                                {value: this.communityMealsMayContents.perCategory6, name: this.communityMealsMayContents.expenseCategory6}  
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
                            data: [{value: this.communityMealsJunContents.budgetUsage}],
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
                                {value: this.communityMealsJunContents.perCategory1, name: this.communityMealsJunContents.expenseCategory1},
                                {value: this.communityMealsJunContents.perCategory2, name: this.communityMealsJunContents.expenseCategory2},
                                {value: this.communityMealsJunContents.perCategory3, name: this.communityMealsJunContents.expenseCategory3},
                                {value: this.communityMealsJunContents.perCategory4, name: this.communityMealsJunContents.expenseCategory4},
                                {value: this.communityMealsJunContents.perCategory5, name: this.communityMealsJunContents.expenseCategory5},
                                {value: this.communityMealsJunContents.perCategory6, name: this.communityMealsJunContents.expenseCategory6}  
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
                            data: [{value: this.communityMealsJulContents.budgetUsage}],
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
                                {value: this.communityMealsJulContents.perCategory1, name: this.communityMealsJulContents.expenseCategory1},
                                {value: this.communityMealsJulContents.perCategory2, name: this.communityMealsJulContents.expenseCategory2},
                                {value: this.communityMealsJulContents.perCategory3, name: this.communityMealsJulContents.expenseCategory3},
                                {value: this.communityMealsJulContents.perCategory4, name: this.communityMealsJulContents.expenseCategory4},
                                {value: this.communityMealsJulContents.perCategory5, name: this.communityMealsJulContents.expenseCategory5},
                                {value: this.communityMealsJulContents.perCategory6, name: this.communityMealsJulContents.expenseCategory6}  
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
                            data: [{value: this.communityMealsAugContents.budgetUsage}],
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
                                {value: this.communityMealsAugContents.perCategory1, name: this.communityMealsAugContents.expenseCategory1},
                                {value: this.communityMealsAugContents.perCategory2, name: this.communityMealsAugContents.expenseCategory2},
                                {value: this.communityMealsAugContents.perCategory3, name: this.communityMealsAugContents.expenseCategory3},
                                {value: this.communityMealsAugContents.perCategory4, name: this.communityMealsAugContents.expenseCategory4},
                                {value: this.communityMealsAugContents.perCategory5, name: this.communityMealsAugContents.expenseCategory5},
                                {value: this.communityMealsAugContents.perCategory6, name: this.communityMealsAugContents.expenseCategory6}  
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
                            data: [{value: this.communityMealsSepContents.budgetUsage}],
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
                                {value: this.communityMealsSepContents.perCategory1, name: this.communityMealsSepContents.expenseCategory1},
                                {value: this.communityMealsSepContents.perCategory2, name: this.communityMealsSepContents.expenseCategory2},
                                {value: this.communityMealsSepContents.perCategory3, name: this.communityMealsSepContents.expenseCategory3},
                                {value: this.communityMealsSepContents.perCategory4, name: this.communityMealsSepContents.expenseCategory4},
                                {value: this.communityMealsSepContents.perCategory5, name: this.communityMealsSepContents.expenseCategory5},
                                {value: this.communityMealsSepContents.perCategory6, name: this.communityMealsSepContents.expenseCategory6}  
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
                            data: [{value: this.communityMealsOctContents.budgetUsage}],
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
                                {value: this.communityMealsOctContents.perCategory1, name: this.communityMealsOctContents.expenseCategory1},
                                {value: this.communityMealsOctContents.perCategory2, name: this.communityMealsOctContents.expenseCategory2},
                                {value: this.communityMealsOctContents.perCategory3, name: this.communityMealsOctContents.expenseCategory3},
                                {value: this.communityMealsOctContents.perCategory4, name: this.communityMealsOctContents.expenseCategory4},
                                {value: this.communityMealsOctContents.perCategory5, name: this.communityMealsOctContents.expenseCategory5},
                                {value: this.communityMealsOctContents.perCategory6, name: this.communityMealsOctContents.expenseCategory6}  
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
                            data: [{value: this.communityMealsNovContents.budgetUsage}],
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
                                {value: this.communityMealsNovContents.perCategory1, name: this.communityMealsNovContents.expenseCategory1},
                                {value: this.communityMealsNovContents.perCategory2, name: this.communityMealsNovContents.expenseCategory2},
                                {value: this.communityMealsNovContents.perCategory3, name: this.communityMealsNovContents.expenseCategory3},
                                {value: this.communityMealsNovContents.perCategory4, name: this.communityMealsNovContents.expenseCategory4},
                                {value: this.communityMealsNovContents.perCategory5, name: this.communityMealsNovContents.expenseCategory5},
                                {value: this.communityMealsNovContents.perCategory6, name: this.communityMealsNovContents.expenseCategory6}  
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
                            data: [{value: this.communityMealsDecContents.budgetUsage}],
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
                                {value: this.communityMealsDecContents.perCategory1, name: this.communityMealsDecContents.expenseCategory1},
                                {value: this.communityMealsDecContents.perCategory2, name: this.communityMealsDecContents.expenseCategory2},
                                {value: this.communityMealsDecContents.perCategory3, name: this.communityMealsDecContents.expenseCategory3},
                                {value: this.communityMealsDecContents.perCategory4, name: this.communityMealsDecContents.expenseCategory4},
                                {value: this.communityMealsDecContents.perCategory5, name: this.communityMealsDecContents.expenseCategory5},
                                {value: this.communityMealsDecContents.perCategory6, name: this.communityMealsDecContents.expenseCategory6}
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
            var doccommunityMealsJanRef = db.collection("communityMeals").doc("january");

            doccommunityMealsJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.communityMealsJanContents = doc.data();
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
            var doccommunityMealsFebRef = db.collection("communityMeals").doc("february");

            doccommunityMealsFebRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.communityMealsFebContents = doc.data();
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
            var doccommunityMealsMarRef = db.collection("communityMeals").doc("march");

            doccommunityMealsMarRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.communityMealsMarContents = doc.data();
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
            var doccommunityMealsAprRef = db.collection("communityMeals").doc("april1");

            doccommunityMealsAprRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.communityMealsAprContents = doc.data();
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
            var doccommunityMealsMayRef = db.collection("communityMeals").doc("may");

            doccommunityMealsMayRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.communityMealsMayContents = doc.data();
                    this.totalExpenseMay();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    JUNE
            var doccommunityMealsJunRef = db.collection("communityMeals").doc("june");

            doccommunityMealsJunRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.communityMealsJunContents = doc.data();
                    this.totalExpenseJun();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    JULY
            var doccommunityMealsJulRef = db.collection("communityMeals").doc("july");

            doccommunityMealsJulRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.communityMealsJulContents = doc.data();
                    this.totalExpenseJul();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    AUGUST
            var doccommunityMealsAugRef = db.collection("communityMeals").doc("august");

            doccommunityMealsAugRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.communityMealsAugContents = doc.data();
                    this.totalExpenseAug();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    SEPTEMBER
            var doccommunityMealsSepRef = db.collection("communityMeals").doc("september");

            doccommunityMealsSepRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.communityMealsSepContents = doc.data();
                    this.totalExpenseSep();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    OCTOBER
            var doccommunityMealsOctRef = db.collection("communityMeals").doc("october");

            doccommunityMealsOctRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.communityMealsOctContents = doc.data();
                    this.totalExpenseOct();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    NOVEMBER
            var doccommunityMealsNovRef = db.collection("communityMeals").doc("november");

            doccommunityMealsNovRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.communityMealsNovContents = doc.data();
                    this.totalExpenseNov();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    DECEMBER
            var doccommunityMealsDecRef = db.collection("communityMeals").doc("december");

            doccommunityMealsDecRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.communityMealsDecContents = doc.data();
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
              return this.communityMealsJanContents.expenses = getRealValue(this.communityMealsJanContents.perCategory1) + getRealValue(this.communityMealsJanContents.perCategory2) + getRealValue(this.communityMealsJanContents.perCategory3) + getRealValue(this.communityMealsJanContents.perCategory4) + getRealValue(this.communityMealsJanContents.perCategory5) + getRealValue(this.communityMealsJanContents.perCategory6)
              
            },
            cumulativeBudgetUsageJan(){
              const getRealValue = (val) => +val || val;
              return this.communityMealsJanContents.budgetUsage = ((getRealValue(this.communityMealsJanContents.expenses) / getRealValue(this.communityMealsJanContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseFeb(){
              const getRealValue = (val) => +val || val;
              return this.communityMealsFebContents.expenses = getRealValue(this.communityMealsFebContents.perCategory1) + getRealValue(this.communityMealsFebContents.perCategory2) + getRealValue(this.communityMealsFebContents.perCategory3) + getRealValue(this.communityMealsFebContents.perCategory4) + getRealValue(this.communityMealsFebContents.perCategory5) + getRealValue(this.communityMealsFebContents.perCategory6)
            },
            cumulativeBudgetUsageFeb(){
              const getRealValue = (val) => +val || val;
              return this.communityMealsFebContents.budgetUsage = (((getRealValue(this.communityMealsFebContents.expenses) + getRealValue(this.communityMealsJanContents.expenses)) / getRealValue(this.communityMealsFebContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseMar(){
              const getRealValue = (val) => +val || val;
              return this.communityMealsMarContents.expenses = getRealValue(this.communityMealsMarContents.perCategory1) + getRealValue(this.communityMealsMarContents.perCategory2) + getRealValue(this.communityMealsMarContents.perCategory3) + getRealValue(this.communityMealsMarContents.perCategory4) + getRealValue(this.communityMealsMarContents.perCategory5) + getRealValue(this.communityMealsMarContents.perCategory6)
            },
            cumulativeBudgetUsageMar(){
              const getRealValue = (val) => +val || val;
              return this.communityMealsMarContents.budgetUsage = (((getRealValue(this.communityMealsMarContents.expenses) + getRealValue(this.communityMealsFebContents.expenses) + getRealValue(this.communityMealsJanContents.expenses)) / getRealValue(this.communityMealsMarContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseApr(){
              const getRealValue = (val) => +val || val;
              return this.communityMealsAprContents.expenses = getRealValue(this.communityMealsAprContents.perCategory1) + getRealValue(this.communityMealsAprContents.perCategory2) + getRealValue(this.communityMealsAprContents.perCategory3) + getRealValue(this.communityMealsAprContents.perCategory4) + getRealValue(this.communityMealsAprContents.perCategory5) + getRealValue(this.communityMealsAprContents.perCategory6)
            },
            cumulativeBudgetUsageApr(){
              const getRealValue = (val) => +val || val;
              return this.communityMealsAprContents.budgetUsage = (((getRealValue(this.communityMealsAprContents.expenses) + getRealValue(this.communityMealsMarContents.expenses) + getRealValue(this.communityMealsFebContents.expenses) + getRealValue(this.communityMealsJanContents.expenses)) / getRealValue(this.communityMealsAprContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseMay(){
              const getRealValue = (val) => +val || val;
              return this.communityMealsMayContents.expenses = getRealValue(this.communityMealsMayContents.perCategory1) + getRealValue(this.communityMealsMayContents.perCategory2) + getRealValue(this.communityMealsMayContents.perCategory3) + getRealValue(this.communityMealsMayContents.perCategory4) + getRealValue(this.communityMealsMayContents.perCategory5) + getRealValue(this.communityMealsMayContents.perCategory6)
            },
            cumulativeBudgetUsageMay(){
              const getRealValue = (val) => +val || val;
              return this.communityMealsMayContents.budgetUsage = (((getRealValue(this.communityMealsMayContents.expenses) + getRealValue(this.communityMealsAprContents.expenses) + getRealValue(this.communityMealsMarContents.expenses) + getRealValue(this.communityMealsFebContents.expenses) + getRealValue(this.communityMealsJanContents.expenses)) / getRealValue(this.communityMealsMayContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseJun(){
              const getRealValue = (val) => +val || val;
              return this.communityMealsJunContents.expenses = getRealValue(this.communityMealsJunContents.perCategory1) + getRealValue(this.communityMealsJunContents.perCategory2) + getRealValue(this.communityMealsJunContents.perCategory3) + getRealValue(this.communityMealsJunContents.perCategory4) + getRealValue(this.communityMealsJunContents.perCategory5) + getRealValue(this.communityMealsJunContents.perCategory6)
            },
            cumulativeBudgetUsageJun(){
              const getRealValue = (val) => +val || val;
              return this.communityMealsJunContents.budgetUsage = (((getRealValue(this.communityMealsJunContents.expenses) + getRealValue(this.communityMealsMayContents.expenses) + getRealValue(this.communityMealsAprContents.expenses) + getRealValue(this.communityMealsMarContents.expenses) + getRealValue(this.communityMealsFebContents.expenses) + getRealValue(this.communityMealsJanContents.expenses)) / getRealValue(this.communityMealsJunContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseJul(){
              const getRealValue = (val) => +val || val;
              return this.communityMealsJulContents.expenses = getRealValue(this.communityMealsJulContents.perCategory1) + getRealValue(this.communityMealsJulContents.perCategory2) + getRealValue(this.communityMealsJulContents.perCategory3) + getRealValue(this.communityMealsJulContents.perCategory4) + getRealValue(this.communityMealsJulContents.perCategory5) + getRealValue(this.communityMealsJulContents.perCategory6)
            },
            cumulativeBudgetUsageJul(){
              const getRealValue = (val) => +val || val;
              return this.communityMealsJulContents.budgetUsage = (((getRealValue(this.communityMealsJulContents.expenses) + getRealValue(this.communityMealsJunContents.expenses) + getRealValue(this.communityMealsMayContents.expenses) + getRealValue(this.communityMealsAprContents.expenses) + getRealValue(this.communityMealsMarContents.expenses) + getRealValue(this.communityMealsFebContents.expenses) + getRealValue(this.communityMealsJanContents.expenses)) / getRealValue(this.communityMealsJulContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseAug(){
              const getRealValue = (val) => +val || val;
              return this.communityMealsAugContents.expenses = getRealValue(this.communityMealsAugContents.perCategory1) + getRealValue(this.communityMealsAugContents.perCategory2) + getRealValue(this.communityMealsAugContents.perCategory3) + getRealValue(this.communityMealsAugContents.perCategory4) + getRealValue(this.communityMealsAugContents.perCategory5) + getRealValue(this.communityMealsAugContents.perCategory6)
            },
            cumulativeBudgetUsageAug(){
              const getRealValue = (val) => +val || val;
              return this.communityMealsAugContents.budgetUsage = (((getRealValue(this.communityMealsAugContents.expenses) + getRealValue(this.communityMealsJulContents.expenses) + getRealValue(this.communityMealsJunContents.expenses) + getRealValue(this.communityMealsMayContents.expenses) + getRealValue(this.communityMealsAprContents.expenses) + getRealValue(this.communityMealsMarContents.expenses) + getRealValue(this.communityMealsFebContents.expenses) + getRealValue(this.communityMealsJanContents.expenses)) / getRealValue(this.communityMealsAugContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseSep(){
              const getRealValue = (val) => +val || val;
              return this.communityMealsSepContents.expenses = getRealValue(this.communityMealsSepContents.perCategory1) + getRealValue(this.communityMealsSepContents.perCategory2) + getRealValue(this.communityMealsSepContents.perCategory3) + getRealValue(this.communityMealsSepContents.perCategory4) + getRealValue(this.communityMealsSepContents.perCategory5) + getRealValue(this.communityMealsSepContents.perCategory6)
            },
            cumulativeBudgetUsageSep(){
              const getRealValue = (val) => +val || val;
              return this.communityMealsSepContents.budgetUsage = (((getRealValue(this.communityMealsSepContents.expenses) + getRealValue(this.communityMealsAugContents.expenses) + getRealValue(this.communityMealsJulContents.expenses) + getRealValue(this.communityMealsJunContents.expenses) + getRealValue(this.communityMealsMayContents.expenses) + getRealValue(this.communityMealsAprContents.expenses) + getRealValue(this.communityMealsMarContents.expenses) + getRealValue(this.communityMealsFebContents.expenses) + getRealValue(this.communityMealsJanContents.expenses)) / getRealValue(this.communityMealsSepContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseOct(){
              const getRealValue = (val) => +val || val;
              return this.communityMealsOctContents.expenses = getRealValue(this.communityMealsOctContents.perCategory1) + getRealValue(this.communityMealsOctContents.perCategory2) + getRealValue(this.communityMealsOctContents.perCategory3) + getRealValue(this.communityMealsOctContents.perCategory4) + getRealValue(this.communityMealsOctContents.perCategory5) + getRealValue(this.communityMealsOctContents.perCategory6)
            },
            cumulativeBudgetUsageOct(){
              const getRealValue = (val) => +val || val;
              return this.communityMealsOctContents.budgetUsage = (((getRealValue(this.communityMealsOctContents.expenses) + getRealValue(this.communityMealsSepContents.expenses) + getRealValue(this.communityMealsAugContents.expenses) + getRealValue(this.communityMealsJulContents.expenses) + getRealValue(this.communityMealsJunContents.expenses) + getRealValue(this.communityMealsMayContents.expenses) + getRealValue(this.communityMealsAprContents.expenses) + getRealValue(this.communityMealsMarContents.expenses) + getRealValue(this.communityMealsFebContents.expenses) + getRealValue(this.communityMealsJanContents.expenses)) / getRealValue(this.communityMealsOctContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseNov(){
              const getRealValue = (val) => +val || val;
              return this.communityMealsNovContents.expenses = getRealValue(this.communityMealsNovContents.perCategory1) + getRealValue(this.communityMealsNovContents.perCategory2) + getRealValue(this.communityMealsNovContents.perCategory3) + getRealValue(this.communityMealsNovContents.perCategory4) + getRealValue(this.communityMealsNovContents.perCategory5) + getRealValue(this.communityMealsNovContents.perCategory6)
            },
            cumulativeBudgetUsageNov(){
              const getRealValue = (val) => +val || val;
              return this.communityMealsNovContents.budgetUsage = (((getRealValue(this.communityMealsNovContents.expenses) + getRealValue(this.communityMealsOctContents.expenses) + getRealValue(this.communityMealsSepContents.expenses) + getRealValue(this.communityMealsAugContents.expenses) + getRealValue(this.communityMealsJulContents.expenses) + getRealValue(this.communityMealsJunContents.expenses) + getRealValue(this.communityMealsMayContents.expenses) + getRealValue(this.communityMealsAprContents.expenses) + getRealValue(this.communityMealsMarContents.expenses) + getRealValue(this.communityMealsFebContents.expenses) + getRealValue(this.communityMealsJanContents.expenses)) / getRealValue(this.communityMealsNovContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseDec(){
              const getRealValue = (val) => +val || val;
              return this.communityMealsDecContents.expenses = getRealValue(this.communityMealsDecContents.perCategory1) + getRealValue(this.communityMealsDecContents.perCategory2) + getRealValue(this.communityMealsDecContents.perCategory3) + getRealValue(this.communityMealsDecContents.perCategory4) + getRealValue(this.communityMealsDecContents.perCategory5) + getRealValue(this.communityMealsDecContents.perCategory6)
            },
            cumulativeBudgetUsageDec(){
              const getRealValue = (val) => +val || val;
              return this.communityMealsDecContents.budgetUsage = (((getRealValue(this.communityMealsDecContents.expenses) + getRealValue(this.communityMealsNovContents.expenses) + getRealValue(this.communityMealsOctContents.expenses) + getRealValue(this.communityMealsSepContents.expenses) + getRealValue(this.communityMealsAugContents.expenses) + getRealValue(this.communityMealsJulContents.expenses) + getRealValue(this.communityMealsJunContents.expenses) + getRealValue(this.communityMealsMayContents.expenses) + getRealValue(this.communityMealsAprContents.expenses) + getRealValue(this.communityMealsMarContents.expenses) + getRealValue(this.communityMealsFebContents.expenses) + getRealValue(this.communityMealsJanContents.expenses)) / getRealValue(this.communityMealsDecContents.actualBudget))*100).toFixed(2)
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
