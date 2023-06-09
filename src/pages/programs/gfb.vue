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
                                <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbJanContents.kpi1 == null)?'grey-2':(gfbJanContents.kpi1 >= '0' && gfbJanContents.kpi1 <= '232.6')?'red':(gfbJanContents.kpi1 > '232.6' && gfbJanContents.kpi1 <= '310.1333333')?'orange':(gfbJanContents.kpi1 > '310.1333333' && gfbJanContents.kpi1 < '387.6666667')?'yellow-7':(gfbJanContents.kpi1 >= '387.6666667' && gfbJanContents.kpi1 < '465.2')?'green':(gfbJanContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbJanContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJanContents.kpi2 == null)?'grey-2':(gfbJanContents.kpi2 >= '0' && gfbJanContents.kpi2 <= '148')?'red':(gfbJanContents.kpi2 > '148' && gfbJanContents.kpi2 <= '197.3333333')?'orange':(gfbJanContents.kpi2 > '197.3333333' && gfbJanContents.kpi2 < '246.6666667')?'yellow-7':(gfbJanContents.kpi2 >= '246.6666667' && gfbJanContents.kpi2 < '296')?'green':(gfbJanContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbJanContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJanContents.kpi3 == null)?'grey-2':(gfbJanContents.kpi3 >= '0' && gfbJanContents.kpi3 <= '112.8')?'red':(gfbJanContents.kpi3 > '112.8' && gfbJanContents.kpi3 <= '150.4')?'orange':(gfbJanContents.kpi3 > '150.4' && gfbJanContents.kpi3 < '188')?'yellow-7':(gfbJanContents.kpi3 >= '188' && gfbJanContents.kpi3 < '225.6')?'green':(gfbJanContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbJanContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbFebContents.kpi1 == null)?'grey-2':(gfbFebContents.kpi1 >= '0' && gfbFebContents.kpi1 <= '232.6')?'red':(gfbFebContents.kpi1 > '232.6' && gfbFebContents.kpi1 <= '310.1333333')?'orange':(gfbFebContents.kpi1 > '310.1333333' && gfbFebContents.kpi1 < '387.6666667')?'yellow-7':(gfbFebContents.kpi1 >= '387.6666667' && gfbFebContents.kpi1 < '465.2')?'green':(gfbFebContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbFebContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbFebContents.kpi2 == null)?'grey-2':(gfbFebContents.kpi2 >= '0' && gfbFebContents.kpi2 <= '148')?'red':(gfbFebContents.kpi2 > '148' && gfbFebContents.kpi2 <= '197.3333333')?'orange':(gfbFebContents.kpi2 > '197.3333333' && gfbFebContents.kpi2 < '246.6666667')?'yellow-7':(gfbFebContents.kpi2 >= '246.6666667' && gfbFebContents.kpi2 < '296')?'green':(gfbFebContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbFebContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbFebContents.kpi3 == null)?'grey-2':(gfbFebContents.kpi3 >= '0' && gfbFebContents.kpi3 <= '112.8')?'red':(gfbFebContents.kpi3 > '112.8' && gfbFebContents.kpi3 <= '150.4')?'orange':(gfbFebContents.kpi3 > '150.4' && gfbFebContents.kpi3 < '188')?'yellow-7':(gfbFebContents.kpi3 >= '188' && gfbFebContents.kpi3 < '225.6')?'green':(gfbFebContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbFebContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbMarContents.kpi1 == null)?'grey-2':(gfbMarContents.kpi1 >= '0' && gfbMarContents.kpi1 <= '232.6')?'red':(gfbMarContents.kpi1 > '232.6' && gfbMarContents.kpi1 <= '310.1333333')?'orange':(gfbMarContents.kpi1 > '310.1333333' && gfbMarContents.kpi1 < '387.6666667')?'yellow-7':(gfbMarContents.kpi1 >= '387.6666667' && gfbMarContents.kpi1 < '465.2')?'green':(gfbMarContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbMarContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbMarContents.kpi2 == null)?'grey-2':(gfbMarContents.kpi2 >= '0' && gfbMarContents.kpi2 <= '148')?'red':(gfbMarContents.kpi2 > '148' && gfbMarContents.kpi2 <= '197.3333333')?'orange':(gfbMarContents.kpi2 > '197.3333333' && gfbMarContents.kpi2 < '246.6666667')?'yellow-7':(gfbMarContents.kpi2 >= '246.6666667' && gfbMarContents.kpi2 < '296')?'green':(gfbMarContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbMarContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbMarContents.kpi3 == null)?'grey-2':(gfbMarContents.kpi3 >= '0' && gfbMarContents.kpi3 <= '112.8')?'red':(gfbMarContents.kpi3 > '112.8' && gfbMarContents.kpi3 <= '150.4')?'orange':(gfbMarContents.kpi3 > '150.4' && gfbMarContents.kpi3 < '188')?'yellow-7':(gfbMarContents.kpi3 >= '188' && gfbMarContents.kpi3 < '225.6')?'green':(gfbMarContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbMarContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbAprContents.kpi1 == null)?'grey-2':(gfbAprContents.kpi1 >= '0' && gfbAprContents.kpi1 <= '232.6')?'red':(gfbAprContents.kpi1 > '232.6' && gfbAprContents.kpi1 <= '310.1333333')?'orange':(gfbAprContents.kpi1 > '310.1333333' && gfbAprContents.kpi1 < '387.6666667')?'yellow-7':(gfbAprContents.kpi1 >= '387.6666667' && gfbAprContents.kpi1 < '465.2')?'green':(gfbAprContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbAprContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbAprContents.kpi2 == null)?'grey-2':(gfbAprContents.kpi2 >= '0' && gfbAprContents.kpi2 <= '148')?'red':(gfbAprContents.kpi2 > '148' && gfbAprContents.kpi2 <= '197.3333333')?'orange':(gfbAprContents.kpi2 > '197.3333333' && gfbAprContents.kpi2 < '246.6666667')?'yellow-7':(gfbAprContents.kpi2 >= '246.6666667' && gfbAprContents.kpi2 < '296')?'green':(gfbAprContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbAprContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbAprContents.kpi3 == null)?'grey-2':(gfbAprContents.kpi3 >= '0' && gfbAprContents.kpi3 <= '112.8')?'red':(gfbAprContents.kpi3 > '112.8' && gfbAprContents.kpi3 <= '150.4')?'orange':(gfbAprContents.kpi3 > '150.4' && gfbAprContents.kpi3 < '188')?'yellow-7':(gfbAprContents.kpi3 >= '188' && gfbAprContents.kpi3 < '225.6')?'green':(gfbAprContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbAprContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbMayContents.kpi1 == null)?'grey-2':(gfbMayContents.kpi1 >= '0' && gfbMayContents.kpi1 <= '232.6')?'red':(gfbMayContents.kpi1 > '232.6' && gfbMayContents.kpi1 <= '310.1333333')?'orange':(gfbMayContents.kpi1 > '310.1333333' && gfbMayContents.kpi1 < '387.6666667')?'yellow-7':(gfbMayContents.kpi1 >= '387.6666667' && gfbMayContents.kpi1 < '465.2')?'green':(gfbMayContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbMayContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbMayContents.kpi2 == null)?'grey-2':(gfbMayContents.kpi2 >= '0' && gfbMayContents.kpi2 <= '148')?'red':(gfbMayContents.kpi2 > '148' && gfbMayContents.kpi2 <= '197.3333333')?'orange':(gfbMayContents.kpi2 > '197.3333333' && gfbMayContents.kpi2 < '246.6666667')?'yellow-7':(gfbMayContents.kpi2 >= '246.6666667' && gfbMayContents.kpi2 < '296')?'green':(gfbMayContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbMayContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbMayContents.kpi3 == null)?'grey-2':(gfbMayContents.kpi3 >= '0' && gfbMayContents.kpi3 <= '112.8')?'red':(gfbMayContents.kpi3 > '112.8' && gfbMayContents.kpi3 <= '150.4')?'orange':(gfbMayContents.kpi3 > '150.4' && gfbMayContents.kpi3 < '188')?'yellow-7':(gfbMayContents.kpi3 >= '188' && gfbMayContents.kpi3 < '225.6')?'green':(gfbMayContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbMayContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbJunContents.kpi1 == null)?'grey-2':(gfbJunContents.kpi1 >= '0' && gfbJunContents.kpi1 <= '232.6')?'red':(gfbJunContents.kpi1 > '232.6' && gfbJunContents.kpi1 <= '310.1333333')?'orange':(gfbJunContents.kpi1 > '310.1333333' && gfbJunContents.kpi1 < '387.6666667')?'yellow-7':(gfbJunContents.kpi1 >= '387.6666667' && gfbJunContents.kpi1 < '465.2')?'green':(gfbJunContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbJunContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJunContents.kpi2 == null)?'grey-2':(gfbJunContents.kpi2 >= '0' && gfbJunContents.kpi2 <= '148')?'red':(gfbJunContents.kpi2 > '148' && gfbJunContents.kpi2 <= '197.3333333')?'orange':(gfbJunContents.kpi2 > '197.3333333' && gfbJunContents.kpi2 < '246.6666667')?'yellow-7':(gfbJunContents.kpi2 >= '246.6666667' && gfbJunContents.kpi2 < '296')?'green':(gfbJunContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbJunContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJunContents.kpi3 == null)?'grey-2':(gfbJunContents.kpi3 >= '0' && gfbJunContents.kpi3 <= '112.8')?'red':(gfbJunContents.kpi3 > '112.8' && gfbJunContents.kpi3 <= '150.4')?'orange':(gfbJunContents.kpi3 > '150.4' && gfbJunContents.kpi3 < '188')?'yellow-7':(gfbJunContents.kpi3 >= '188' && gfbJunContents.kpi3 < '225.6')?'green':(gfbJunContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbJunContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbJulContents.kpi1 == null)?'grey-2':(gfbJulContents.kpi1 >= '0' && gfbJulContents.kpi1 <= '232.6')?'red':(gfbJulContents.kpi1 > '232.6' && gfbJulContents.kpi1 <= '310.1333333')?'orange':(gfbJulContents.kpi1 > '310.1333333' && gfbJulContents.kpi1 < '387.6666667')?'yellow-7':(gfbJulContents.kpi1 >= '387.6666667' && gfbJulContents.kpi1 < '465.2')?'green':(gfbJulContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbJulContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJulContents.kpi2 == null)?'grey-2':(gfbJulContents.kpi2 >= '0' && gfbJulContents.kpi2 <= '148')?'red':(gfbJulContents.kpi2 > '148' && gfbJulContents.kpi2 <= '197.3333333')?'orange':(gfbJulContents.kpi2 > '197.3333333' && gfbJulContents.kpi2 < '246.6666667')?'yellow-7':(gfbJulContents.kpi2 >= '246.6666667' && gfbJulContents.kpi2 < '296')?'green':(gfbJulContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbJulContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJulContents.kpi3 == null)?'grey-2':(gfbJulContents.kpi3 >= '0' && gfbJulContents.kpi3 <= '112.8')?'red':(gfbJulContents.kpi3 > '112.8' && gfbJulContents.kpi3 <= '150.4')?'orange':(gfbJulContents.kpi3 > '150.4' && gfbJulContents.kpi3 < '188')?'yellow-7':(gfbJulContents.kpi3 >= '188' && gfbJulContents.kpi3 < '225.6')?'green':(gfbJulContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbJulContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbAugContents.kpi1 == null)?'grey-2':(gfbAugContents.kpi1 >= '0' && gfbAugContents.kpi1 <= '232.6')?'red':(gfbAugContents.kpi1 > '232.6' && gfbAugContents.kpi1 <= '310.1333333')?'orange':(gfbAugContents.kpi1 > '310.1333333' && gfbAugContents.kpi1 < '387.6666667')?'yellow-7':(gfbAugContents.kpi1 >= '387.6666667' && gfbAugContents.kpi1 < '465.2')?'green':(gfbAugContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbAugContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbAugContents.kpi2 == null)?'grey-2':(gfbAugContents.kpi2 >= '0' && gfbAugContents.kpi2 <= '148')?'red':(gfbAugContents.kpi2 > '148' && gfbAugContents.kpi2 <= '197.3333333')?'orange':(gfbAugContents.kpi2 > '197.3333333' && gfbAugContents.kpi2 < '246.6666667')?'yellow-7':(gfbAugContents.kpi2 >= '246.6666667' && gfbAugContents.kpi2 < '296')?'green':(gfbAugContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbAugContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbAugContents.kpi3 == null)?'grey-2':(gfbAugContents.kpi3 >= '0' && gfbAugContents.kpi3 <= '112.8')?'red':(gfbAugContents.kpi3 > '112.8' && gfbAugContents.kpi3 <= '150.4')?'orange':(gfbAugContents.kpi3 > '150.4' && gfbAugContents.kpi3 < '188')?'yellow-7':(gfbAugContents.kpi3 >= '188' && gfbAugContents.kpi3 < '225.6')?'green':(gfbAugContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbAugContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbSepContents.kpi1 == null)?'grey-2':(gfbSepContents.kpi1 >= '0' && gfbSepContents.kpi1 <= '232.6')?'red':(gfbSepContents.kpi1 > '232.6' && gfbSepContents.kpi1 <= '310.1333333')?'orange':(gfbSepContents.kpi1 > '310.1333333' && gfbSepContents.kpi1 < '387.6666667')?'yellow-7':(gfbSepContents.kpi1 >= '387.6666667' && gfbSepContents.kpi1 < '465.2')?'green':(gfbSepContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbSepContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbSepContents.kpi2 == null)?'grey-2':(gfbSepContents.kpi2 >= '0' && gfbSepContents.kpi2 <= '148')?'red':(gfbSepContents.kpi2 > '148' && gfbSepContents.kpi2 <= '197.3333333')?'orange':(gfbSepContents.kpi2 > '197.3333333' && gfbSepContents.kpi2 < '246.6666667')?'yellow-7':(gfbSepContents.kpi2 >= '246.6666667' && gfbSepContents.kpi2 < '296')?'green':(gfbSepContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbSepContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbSepContents.kpi3 == null)?'grey-2':(gfbSepContents.kpi3 >= '0' && gfbSepContents.kpi3 <= '112.8')?'red':(gfbSepContents.kpi3 > '112.8' && gfbSepContents.kpi3 <= '150.4')?'orange':(gfbSepContents.kpi3 > '150.4' && gfbSepContents.kpi3 < '188')?'yellow-7':(gfbSepContents.kpi3 >= '188' && gfbSepContents.kpi3 < '225.6')?'green':(gfbSepContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbSepContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbOctContents.kpi1 == null)?'grey-2':(gfbOctContents.kpi1 >= '0' && gfbOctContents.kpi1 <= '232.6')?'red':(gfbOctContents.kpi1 > '232.6' && gfbOctContents.kpi1 <= '310.1333333')?'orange':(gfbOctContents.kpi1 > '310.1333333' && gfbOctContents.kpi1 < '387.6666667')?'yellow-7':(gfbOctContents.kpi1 >= '387.6666667' && gfbOctContents.kpi1 < '465.2')?'green':(gfbOctContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbOctContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbOctContents.kpi2 == null)?'grey-2':(gfbOctContents.kpi2 >= '0' && gfbOctContents.kpi2 <= '148')?'red':(gfbOctContents.kpi2 > '148' && gfbOctContents.kpi2 <= '197.3333333')?'orange':(gfbOctContents.kpi2 > '197.3333333' && gfbOctContents.kpi2 < '246.6666667')?'yellow-7':(gfbOctContents.kpi2 >= '246.6666667' && gfbOctContents.kpi2 < '296')?'green':(gfbOctContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbOctContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbOctContents.kpi3 == null)?'grey-2':(gfbOctContents.kpi3 >= '0' && gfbOctContents.kpi3 <= '112.8')?'red':(gfbOctContents.kpi3 > '112.8' && gfbOctContents.kpi3 <= '150.4')?'orange':(gfbOctContents.kpi3 > '150.4' && gfbOctContents.kpi3 < '188')?'yellow-7':(gfbOctContents.kpi3 >= '188' && gfbOctContents.kpi3 < '225.6')?'green':(gfbOctContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbOctContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbNovContents.kpi1 == null)?'grey-2':(gfbNovContents.kpi1 >= '0' && gfbNovContents.kpi1 <= '232.6')?'red':(gfbNovContents.kpi1 > '232.6' && gfbNovContents.kpi1 <= '310.1333333')?'orange':(gfbNovContents.kpi1 > '310.1333333' && gfbNovContents.kpi1 < '387.6666667')?'yellow-7':(gfbNovContents.kpi1 >= '387.6666667' && gfbNovContents.kpi1 < '465.2')?'green':(gfbNovContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbNovContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbNovContents.kpi2 == null)?'grey-2':(gfbNovContents.kpi2 >= '0' && gfbNovContents.kpi2 <= '148')?'red':(gfbNovContents.kpi2 > '148' && gfbNovContents.kpi2 <= '197.3333333')?'orange':(gfbNovContents.kpi2 > '197.3333333' && gfbNovContents.kpi2 < '246.6666667')?'yellow-7':(gfbNovContents.kpi2 >= '246.6666667' && gfbNovContents.kpi2 < '296')?'green':(gfbNovContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbNovContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbNovContents.kpi3 == null)?'grey-2':(gfbNovContents.kpi3 >= '0' && gfbNovContents.kpi3 <= '112.8')?'red':(gfbNovContents.kpi3 > '112.8' && gfbNovContents.kpi3 <= '150.4')?'orange':(gfbNovContents.kpi3 > '150.4' && gfbNovContents.kpi3 < '188')?'yellow-7':(gfbNovContents.kpi3 >= '188' && gfbNovContents.kpi3 < '225.6')?'green':(gfbNovContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbNovContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbDecContents.kpi1 == null)?'grey-2':(gfbDecContents.kpi1 >= '0' && gfbDecContents.kpi1 <= '232.6')?'red':(gfbDecContents.kpi1 > '232.6' && gfbDecContents.kpi1 <= '310.1333333')?'orange':(gfbDecContents.kpi1 > '310.1333333' && gfbDecContents.kpi1 < '387.6666667')?'yellow-7':(gfbDecContents.kpi1 >= '387.6666667' && gfbDecContents.kpi1 < '465.2')?'green':(gfbDecContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbDecContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbDecContents.kpi2 == null)?'grey-2':(gfbDecContents.kpi2 >= '0' && gfbDecContents.kpi2 <= '148')?'red':(gfbDecContents.kpi2 > '148' && gfbDecContents.kpi2 <= '197.3333333')?'orange':(gfbDecContents.kpi2 > '197.3333333' && gfbDecContents.kpi2 < '246.6666667')?'yellow-7':(gfbDecContents.kpi2 >= '246.6666667' && gfbDecContents.kpi2 < '296')?'green':(gfbDecContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbDecContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbDecContents.kpi3 == null)?'grey-2':(gfbDecContents.kpi3 >= '0' && gfbDecContents.kpi3 <= '112.8')?'red':(gfbDecContents.kpi3 > '112.8' && gfbDecContents.kpi3 <= '150.4')?'orange':(gfbDecContents.kpi3 > '150.4' && gfbDecContents.kpi3 < '188')?'yellow-7':(gfbDecContents.kpi3 >= '188' && gfbDecContents.kpi3 < '225.6')?'green':(gfbDecContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbDecContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                                <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbJanContents.kpi1 == null)?'grey-2':(gfbJanContents.kpi1 >= '0' && gfbJanContents.kpi1 <= '232.6')?'red':(gfbJanContents.kpi1 > '232.6' && gfbJanContents.kpi1 <= '310.1333333')?'orange':(gfbJanContents.kpi1 > '310.1333333' && gfbJanContents.kpi1 < '387.6666667')?'yellow-7':(gfbJanContents.kpi1 >= '387.6666667' && gfbJanContents.kpi1 < '465.2')?'green':(gfbJanContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbJanContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJanContents.kpi2 == null)?'grey-2':(gfbJanContents.kpi2 >= '0' && gfbJanContents.kpi2 <= '148')?'red':(gfbJanContents.kpi2 > '148' && gfbJanContents.kpi2 <= '197.3333333')?'orange':(gfbJanContents.kpi2 > '197.3333333' && gfbJanContents.kpi2 < '246.6666667')?'yellow-7':(gfbJanContents.kpi2 >= '246.6666667' && gfbJanContents.kpi2 < '296')?'green':(gfbJanContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbJanContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJanContents.kpi3 == null)?'grey-2':(gfbJanContents.kpi3 >= '0' && gfbJanContents.kpi3 <= '112.8')?'red':(gfbJanContents.kpi3 > '112.8' && gfbJanContents.kpi3 <= '150.4')?'orange':(gfbJanContents.kpi3 > '150.4' && gfbJanContents.kpi3 < '188')?'yellow-7':(gfbJanContents.kpi3 >= '188' && gfbJanContents.kpi3 < '225.6')?'green':(gfbJanContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbJanContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbFebContents.kpi1 == null)?'grey-2':(gfbFebContents.kpi1 >= '0' && gfbFebContents.kpi1 <= '232.6')?'red':(gfbFebContents.kpi1 > '232.6' && gfbFebContents.kpi1 <= '310.1333333')?'orange':(gfbFebContents.kpi1 > '310.1333333' && gfbFebContents.kpi1 < '387.6666667')?'yellow-7':(gfbFebContents.kpi1 >= '387.6666667' && gfbFebContents.kpi1 < '465.2')?'green':(gfbFebContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbFebContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbFebContents.kpi2 == null)?'grey-2':(gfbFebContents.kpi2 >= '0' && gfbFebContents.kpi2 <= '148')?'red':(gfbFebContents.kpi2 > '148' && gfbFebContents.kpi2 <= '197.3333333')?'orange':(gfbFebContents.kpi2 > '197.3333333' && gfbFebContents.kpi2 < '246.6666667')?'yellow-7':(gfbFebContents.kpi2 >= '246.6666667' && gfbFebContents.kpi2 < '296')?'green':(gfbFebContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbFebContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbFebContents.kpi3 == null)?'grey-2':(gfbFebContents.kpi3 >= '0' && gfbFebContents.kpi3 <= '112.8')?'red':(gfbFebContents.kpi3 > '112.8' && gfbFebContents.kpi3 <= '150.4')?'orange':(gfbFebContents.kpi3 > '150.4' && gfbFebContents.kpi3 < '188')?'yellow-7':(gfbFebContents.kpi3 >= '188' && gfbFebContents.kpi3 < '225.6')?'green':(gfbFebContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbFebContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbMarContents.kpi1 == null)?'grey-2':(gfbMarContents.kpi1 >= '0' && gfbMarContents.kpi1 <= '232.6')?'red':(gfbMarContents.kpi1 > '232.6' && gfbMarContents.kpi1 <= '310.1333333')?'orange':(gfbMarContents.kpi1 > '310.1333333' && gfbMarContents.kpi1 < '387.6666667')?'yellow-7':(gfbMarContents.kpi1 >= '387.6666667' && gfbMarContents.kpi1 < '465.2')?'green':(gfbMarContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbMarContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbMarContents.kpi2 == null)?'grey-2':(gfbMarContents.kpi2 >= '0' && gfbMarContents.kpi2 <= '148')?'red':(gfbMarContents.kpi2 > '148' && gfbMarContents.kpi2 <= '197.3333333')?'orange':(gfbMarContents.kpi2 > '197.3333333' && gfbMarContents.kpi2 < '246.6666667')?'yellow-7':(gfbMarContents.kpi2 >= '246.6666667' && gfbMarContents.kpi2 < '296')?'green':(gfbMarContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbMarContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbMarContents.kpi3 == null)?'grey-2':(gfbMarContents.kpi3 >= '0' && gfbMarContents.kpi3 <= '112.8')?'red':(gfbMarContents.kpi3 > '112.8' && gfbMarContents.kpi3 <= '150.4')?'orange':(gfbMarContents.kpi3 > '150.4' && gfbMarContents.kpi3 < '188')?'yellow-7':(gfbMarContents.kpi3 >= '188' && gfbMarContents.kpi3 < '225.6')?'green':(gfbMarContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbMarContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbAprContents.kpi1 == null)?'grey-2':(gfbAprContents.kpi1 >= '0' && gfbAprContents.kpi1 <= '232.6')?'red':(gfbAprContents.kpi1 > '232.6' && gfbAprContents.kpi1 <= '310.1333333')?'orange':(gfbAprContents.kpi1 > '310.1333333' && gfbAprContents.kpi1 < '387.6666667')?'yellow-7':(gfbAprContents.kpi1 >= '387.6666667' && gfbAprContents.kpi1 < '465.2')?'green':(gfbAprContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbAprContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbAprContents.kpi2 == null)?'grey-2':(gfbAprContents.kpi2 >= '0' && gfbAprContents.kpi2 <= '148')?'red':(gfbAprContents.kpi2 > '148' && gfbAprContents.kpi2 <= '197.3333333')?'orange':(gfbAprContents.kpi2 > '197.3333333' && gfbAprContents.kpi2 < '246.6666667')?'yellow-7':(gfbAprContents.kpi2 >= '246.6666667' && gfbAprContents.kpi2 < '296')?'green':(gfbAprContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbAprContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbAprContents.kpi3 == null)?'grey-2':(gfbAprContents.kpi3 >= '0' && gfbAprContents.kpi3 <= '112.8')?'red':(gfbAprContents.kpi3 > '112.8' && gfbAprContents.kpi3 <= '150.4')?'orange':(gfbAprContents.kpi3 > '150.4' && gfbAprContents.kpi3 < '188')?'yellow-7':(gfbAprContents.kpi3 >= '188' && gfbAprContents.kpi3 < '225.6')?'green':(gfbAprContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbAprContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbMayContents.kpi1 == null)?'grey-2':(gfbMayContents.kpi1 >= '0' && gfbMayContents.kpi1 <= '232.6')?'red':(gfbMayContents.kpi1 > '232.6' && gfbMayContents.kpi1 <= '310.1333333')?'orange':(gfbMayContents.kpi1 > '310.1333333' && gfbMayContents.kpi1 < '387.6666667')?'yellow-7':(gfbMayContents.kpi1 >= '387.6666667' && gfbMayContents.kpi1 < '465.2')?'green':(gfbMayContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbMayContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbMayContents.kpi2 == null)?'grey-2':(gfbMayContents.kpi2 >= '0' && gfbMayContents.kpi2 <= '148')?'red':(gfbMayContents.kpi2 > '148' && gfbMayContents.kpi2 <= '197.3333333')?'orange':(gfbMayContents.kpi2 > '197.3333333' && gfbMayContents.kpi2 < '246.6666667')?'yellow-7':(gfbMayContents.kpi2 >= '246.6666667' && gfbMayContents.kpi2 < '296')?'green':(gfbMayContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbMayContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbMayContents.kpi3 == null)?'grey-2':(gfbMayContents.kpi3 >= '0' && gfbMayContents.kpi3 <= '112.8')?'red':(gfbMayContents.kpi3 > '112.8' && gfbMayContents.kpi3 <= '150.4')?'orange':(gfbMayContents.kpi3 > '150.4' && gfbMayContents.kpi3 < '188')?'yellow-7':(gfbMayContents.kpi3 >= '188' && gfbMayContents.kpi3 < '225.6')?'green':(gfbMayContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbMayContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbJunContents.kpi1 == null)?'grey-2':(gfbJunContents.kpi1 >= '0' && gfbJunContents.kpi1 <= '232.6')?'red':(gfbJunContents.kpi1 > '232.6' && gfbJunContents.kpi1 <= '310.1333333')?'orange':(gfbJunContents.kpi1 > '310.1333333' && gfbJunContents.kpi1 < '387.6666667')?'yellow-7':(gfbJunContents.kpi1 >= '387.6666667' && gfbJunContents.kpi1 < '465.2')?'green':(gfbJunContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbJunContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJunContents.kpi2 == null)?'grey-2':(gfbJunContents.kpi2 >= '0' && gfbJunContents.kpi2 <= '148')?'red':(gfbJunContents.kpi2 > '148' && gfbJunContents.kpi2 <= '197.3333333')?'orange':(gfbJunContents.kpi2 > '197.3333333' && gfbJunContents.kpi2 < '246.6666667')?'yellow-7':(gfbJunContents.kpi2 >= '246.6666667' && gfbJunContents.kpi2 < '296')?'green':(gfbJunContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbJunContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJunContents.kpi3 == null)?'grey-2':(gfbJunContents.kpi3 >= '0' && gfbJunContents.kpi3 <= '112.8')?'red':(gfbJunContents.kpi3 > '112.8' && gfbJunContents.kpi3 <= '150.4')?'orange':(gfbJunContents.kpi3 > '150.4' && gfbJunContents.kpi3 < '188')?'yellow-7':(gfbJunContents.kpi3 >= '188' && gfbJunContents.kpi3 < '225.6')?'green':(gfbJunContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbJunContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbJulContents.kpi1 == null)?'grey-2':(gfbJulContents.kpi1 >= '0' && gfbJulContents.kpi1 <= '232.6')?'red':(gfbJulContents.kpi1 > '232.6' && gfbJulContents.kpi1 <= '310.1333333')?'orange':(gfbJulContents.kpi1 > '310.1333333' && gfbJulContents.kpi1 < '387.6666667')?'yellow-7':(gfbJulContents.kpi1 >= '387.6666667' && gfbJulContents.kpi1 < '465.2')?'green':(gfbJulContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbJulContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJulContents.kpi2 == null)?'grey-2':(gfbJulContents.kpi2 >= '0' && gfbJulContents.kpi2 <= '148')?'red':(gfbJulContents.kpi2 > '148' && gfbJulContents.kpi2 <= '197.3333333')?'orange':(gfbJulContents.kpi2 > '197.3333333' && gfbJulContents.kpi2 < '246.6666667')?'yellow-7':(gfbJulContents.kpi2 >= '246.6666667' && gfbJulContents.kpi2 < '296')?'green':(gfbJulContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbJulContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJulContents.kpi3 == null)?'grey-2':(gfbJulContents.kpi3 >= '0' && gfbJulContents.kpi3 <= '112.8')?'red':(gfbJulContents.kpi3 > '112.8' && gfbJulContents.kpi3 <= '150.4')?'orange':(gfbJulContents.kpi3 > '150.4' && gfbJulContents.kpi3 < '188')?'yellow-7':(gfbJulContents.kpi3 >= '188' && gfbJulContents.kpi3 < '225.6')?'green':(gfbJulContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbJulContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbAugContents.kpi1 == null)?'grey-2':(gfbAugContents.kpi1 >= '0' && gfbAugContents.kpi1 <= '232.6')?'red':(gfbAugContents.kpi1 > '232.6' && gfbAugContents.kpi1 <= '310.1333333')?'orange':(gfbAugContents.kpi1 > '310.1333333' && gfbAugContents.kpi1 < '387.6666667')?'yellow-7':(gfbAugContents.kpi1 >= '387.6666667' && gfbAugContents.kpi1 < '465.2')?'green':(gfbAugContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbAugContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbAugContents.kpi2 == null)?'grey-2':(gfbAugContents.kpi2 >= '0' && gfbAugContents.kpi2 <= '148')?'red':(gfbAugContents.kpi2 > '148' && gfbAugContents.kpi2 <= '197.3333333')?'orange':(gfbAugContents.kpi2 > '197.3333333' && gfbAugContents.kpi2 < '246.6666667')?'yellow-7':(gfbAugContents.kpi2 >= '246.6666667' && gfbAugContents.kpi2 < '296')?'green':(gfbAugContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbAugContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbAugContents.kpi3 == null)?'grey-2':(gfbAugContents.kpi3 >= '0' && gfbAugContents.kpi3 <= '112.8')?'red':(gfbAugContents.kpi3 > '112.8' && gfbAugContents.kpi3 <= '150.4')?'orange':(gfbAugContents.kpi3 > '150.4' && gfbAugContents.kpi3 < '188')?'yellow-7':(gfbAugContents.kpi3 >= '188' && gfbAugContents.kpi3 < '225.6')?'green':(gfbAugContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbAugContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbSepContents.kpi1 == null)?'grey-2':(gfbSepContents.kpi1 >= '0' && gfbSepContents.kpi1 <= '232.6')?'red':(gfbSepContents.kpi1 > '232.6' && gfbSepContents.kpi1 <= '310.1333333')?'orange':(gfbSepContents.kpi1 > '310.1333333' && gfbSepContents.kpi1 < '387.6666667')?'yellow-7':(gfbSepContents.kpi1 >= '387.6666667' && gfbSepContents.kpi1 < '465.2')?'green':(gfbSepContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbSepContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbSepContents.kpi2 == null)?'grey-2':(gfbSepContents.kpi2 >= '0' && gfbSepContents.kpi2 <= '148')?'red':(gfbSepContents.kpi2 > '148' && gfbSepContents.kpi2 <= '197.3333333')?'orange':(gfbSepContents.kpi2 > '197.3333333' && gfbSepContents.kpi2 < '246.6666667')?'yellow-7':(gfbSepContents.kpi2 >= '246.6666667' && gfbSepContents.kpi2 < '296')?'green':(gfbSepContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbSepContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbSepContents.kpi3 == null)?'grey-2':(gfbSepContents.kpi3 >= '0' && gfbSepContents.kpi3 <= '112.8')?'red':(gfbSepContents.kpi3 > '112.8' && gfbSepContents.kpi3 <= '150.4')?'orange':(gfbSepContents.kpi3 > '150.4' && gfbSepContents.kpi3 < '188')?'yellow-7':(gfbSepContents.kpi3 >= '188' && gfbSepContents.kpi3 < '225.6')?'green':(gfbSepContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbSepContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbOctContents.kpi1 == null)?'grey-2':(gfbOctContents.kpi1 >= '0' && gfbOctContents.kpi1 <= '232.6')?'red':(gfbOctContents.kpi1 > '232.6' && gfbOctContents.kpi1 <= '310.1333333')?'orange':(gfbOctContents.kpi1 > '310.1333333' && gfbOctContents.kpi1 < '387.6666667')?'yellow-7':(gfbOctContents.kpi1 >= '387.6666667' && gfbOctContents.kpi1 < '465.2')?'green':(gfbOctContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbOctContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbOctContents.kpi2 == null)?'grey-2':(gfbOctContents.kpi2 >= '0' && gfbOctContents.kpi2 <= '148')?'red':(gfbOctContents.kpi2 > '148' && gfbOctContents.kpi2 <= '197.3333333')?'orange':(gfbOctContents.kpi2 > '197.3333333' && gfbOctContents.kpi2 < '246.6666667')?'yellow-7':(gfbOctContents.kpi2 >= '246.6666667' && gfbOctContents.kpi2 < '296')?'green':(gfbOctContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbOctContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbOctContents.kpi3 == null)?'grey-2':(gfbOctContents.kpi3 >= '0' && gfbOctContents.kpi3 <= '112.8')?'red':(gfbOctContents.kpi3 > '112.8' && gfbOctContents.kpi3 <= '150.4')?'orange':(gfbOctContents.kpi3 > '150.4' && gfbOctContents.kpi3 < '188')?'yellow-7':(gfbOctContents.kpi3 >= '188' && gfbOctContents.kpi3 < '225.6')?'green':(gfbOctContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbOctContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbNovContents.kpi1 == null)?'grey-2':(gfbNovContents.kpi1 >= '0' && gfbNovContents.kpi1 <= '232.6')?'red':(gfbNovContents.kpi1 > '232.6' && gfbNovContents.kpi1 <= '310.1333333')?'orange':(gfbNovContents.kpi1 > '310.1333333' && gfbNovContents.kpi1 < '387.6666667')?'yellow-7':(gfbNovContents.kpi1 >= '387.6666667' && gfbNovContents.kpi1 < '465.2')?'green':(gfbNovContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbNovContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbNovContents.kpi2 == null)?'grey-2':(gfbNovContents.kpi2 >= '0' && gfbNovContents.kpi2 <= '148')?'red':(gfbNovContents.kpi2 > '148' && gfbNovContents.kpi2 <= '197.3333333')?'orange':(gfbNovContents.kpi2 > '197.3333333' && gfbNovContents.kpi2 < '246.6666667')?'yellow-7':(gfbNovContents.kpi2 >= '246.6666667' && gfbNovContents.kpi2 < '296')?'green':(gfbNovContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbNovContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbNovContents.kpi3 == null)?'grey-2':(gfbNovContents.kpi3 >= '0' && gfbNovContents.kpi3 <= '112.8')?'red':(gfbNovContents.kpi3 > '112.8' && gfbNovContents.kpi3 <= '150.4')?'orange':(gfbNovContents.kpi3 > '150.4' && gfbNovContents.kpi3 < '188')?'yellow-7':(gfbNovContents.kpi3 >= '188' && gfbNovContents.kpi3 < '225.6')?'green':(gfbNovContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbNovContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbDecContents.kpi1 == null)?'grey-2':(gfbDecContents.kpi1 >= '0' && gfbDecContents.kpi1 <= '232.6')?'red':(gfbDecContents.kpi1 > '232.6' && gfbDecContents.kpi1 <= '310.1333333')?'orange':(gfbDecContents.kpi1 > '310.1333333' && gfbDecContents.kpi1 < '387.6666667')?'yellow-7':(gfbDecContents.kpi1 >= '387.6666667' && gfbDecContents.kpi1 < '465.2')?'green':(gfbDecContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbDecContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbDecContents.kpi2 == null)?'grey-2':(gfbDecContents.kpi2 >= '0' && gfbDecContents.kpi2 <= '148')?'red':(gfbDecContents.kpi2 > '148' && gfbDecContents.kpi2 <= '197.3333333')?'orange':(gfbDecContents.kpi2 > '197.3333333' && gfbDecContents.kpi2 < '246.6666667')?'yellow-7':(gfbDecContents.kpi2 >= '246.6666667' && gfbDecContents.kpi2 < '296')?'green':(gfbDecContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbDecContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbDecContents.kpi3 == null)?'grey-2':(gfbDecContents.kpi3 >= '0' && gfbDecContents.kpi3 <= '112.8')?'red':(gfbDecContents.kpi3 > '112.8' && gfbDecContents.kpi3 <= '150.4')?'orange':(gfbDecContents.kpi3 > '150.4' && gfbDecContents.kpi3 < '188')?'yellow-7':(gfbDecContents.kpi3 >= '188' && gfbDecContents.kpi3 < '225.6')?'green':(gfbDecContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbDecContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                                <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbJanContents.kpi1 == null)?'grey-2':(gfbJanContents.kpi1 >= '0' && gfbJanContents.kpi1 <= '232.6')?'red':(gfbJanContents.kpi1 > '232.6' && gfbJanContents.kpi1 <= '310.1333333')?'orange':(gfbJanContents.kpi1 > '310.1333333' && gfbJanContents.kpi1 < '387.6666667')?'yellow-7':(gfbJanContents.kpi1 >= '387.6666667' && gfbJanContents.kpi1 < '465.2')?'green':(gfbJanContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbJanContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJanContents.kpi2 == null)?'grey-2':(gfbJanContents.kpi2 >= '0' && gfbJanContents.kpi2 <= '148')?'red':(gfbJanContents.kpi2 > '148' && gfbJanContents.kpi2 <= '197.3333333')?'orange':(gfbJanContents.kpi2 > '197.3333333' && gfbJanContents.kpi2 < '246.6666667')?'yellow-7':(gfbJanContents.kpi2 >= '246.6666667' && gfbJanContents.kpi2 < '296')?'green':(gfbJanContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbJanContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJanContents.kpi3 == null)?'grey-2':(gfbJanContents.kpi3 >= '0' && gfbJanContents.kpi3 <= '112.8')?'red':(gfbJanContents.kpi3 > '112.8' && gfbJanContents.kpi3 <= '150.4')?'orange':(gfbJanContents.kpi3 > '150.4' && gfbJanContents.kpi3 < '188')?'yellow-7':(gfbJanContents.kpi3 >= '188' && gfbJanContents.kpi3 < '225.6')?'green':(gfbJanContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbJanContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbFebContents.kpi1 == null)?'grey-2':(gfbFebContents.kpi1 >= '0' && gfbFebContents.kpi1 <= '232.6')?'red':(gfbFebContents.kpi1 > '232.6' && gfbFebContents.kpi1 <= '310.1333333')?'orange':(gfbFebContents.kpi1 > '310.1333333' && gfbFebContents.kpi1 < '387.6666667')?'yellow-7':(gfbFebContents.kpi1 >= '387.6666667' && gfbFebContents.kpi1 < '465.2')?'green':(gfbFebContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbFebContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbFebContents.kpi2 == null)?'grey-2':(gfbFebContents.kpi2 >= '0' && gfbFebContents.kpi2 <= '148')?'red':(gfbFebContents.kpi2 > '148' && gfbFebContents.kpi2 <= '197.3333333')?'orange':(gfbFebContents.kpi2 > '197.3333333' && gfbFebContents.kpi2 < '246.6666667')?'yellow-7':(gfbFebContents.kpi2 >= '246.6666667' && gfbFebContents.kpi2 < '296')?'green':(gfbFebContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbFebContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbFebContents.kpi3 == null)?'grey-2':(gfbFebContents.kpi3 >= '0' && gfbFebContents.kpi3 <= '112.8')?'red':(gfbFebContents.kpi3 > '112.8' && gfbFebContents.kpi3 <= '150.4')?'orange':(gfbFebContents.kpi3 > '150.4' && gfbFebContents.kpi3 < '188')?'yellow-7':(gfbFebContents.kpi3 >= '188' && gfbFebContents.kpi3 < '225.6')?'green':(gfbFebContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbFebContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbMarContents.kpi1 == null)?'grey-2':(gfbMarContents.kpi1 >= '0' && gfbMarContents.kpi1 <= '232.6')?'red':(gfbMarContents.kpi1 > '232.6' && gfbMarContents.kpi1 <= '310.1333333')?'orange':(gfbMarContents.kpi1 > '310.1333333' && gfbMarContents.kpi1 < '387.6666667')?'yellow-7':(gfbMarContents.kpi1 >= '387.6666667' && gfbMarContents.kpi1 < '465.2')?'green':(gfbMarContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbMarContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbMarContents.kpi2 == null)?'grey-2':(gfbMarContents.kpi2 >= '0' && gfbMarContents.kpi2 <= '148')?'red':(gfbMarContents.kpi2 > '148' && gfbMarContents.kpi2 <= '197.3333333')?'orange':(gfbMarContents.kpi2 > '197.3333333' && gfbMarContents.kpi2 < '246.6666667')?'yellow-7':(gfbMarContents.kpi2 >= '246.6666667' && gfbMarContents.kpi2 < '296')?'green':(gfbMarContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbMarContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbMarContents.kpi3 == null)?'grey-2':(gfbMarContents.kpi3 >= '0' && gfbMarContents.kpi3 <= '112.8')?'red':(gfbMarContents.kpi3 > '112.8' && gfbMarContents.kpi3 <= '150.4')?'orange':(gfbMarContents.kpi3 > '150.4' && gfbMarContents.kpi3 < '188')?'yellow-7':(gfbMarContents.kpi3 >= '188' && gfbMarContents.kpi3 < '225.6')?'green':(gfbMarContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbMarContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbAprContents.kpi1 == null)?'grey-2':(gfbAprContents.kpi1 >= '0' && gfbAprContents.kpi1 <= '232.6')?'red':(gfbAprContents.kpi1 > '232.6' && gfbAprContents.kpi1 <= '310.1333333')?'orange':(gfbAprContents.kpi1 > '310.1333333' && gfbAprContents.kpi1 < '387.6666667')?'yellow-7':(gfbAprContents.kpi1 >= '387.6666667' && gfbAprContents.kpi1 < '465.2')?'green':(gfbAprContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbAprContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbAprContents.kpi2 == null)?'grey-2':(gfbAprContents.kpi2 >= '0' && gfbAprContents.kpi2 <= '148')?'red':(gfbAprContents.kpi2 > '148' && gfbAprContents.kpi2 <= '197.3333333')?'orange':(gfbAprContents.kpi2 > '197.3333333' && gfbAprContents.kpi2 < '246.6666667')?'yellow-7':(gfbAprContents.kpi2 >= '246.6666667' && gfbAprContents.kpi2 < '296')?'green':(gfbAprContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbAprContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbAprContents.kpi3 == null)?'grey-2':(gfbAprContents.kpi3 >= '0' && gfbAprContents.kpi3 <= '112.8')?'red':(gfbAprContents.kpi3 > '112.8' && gfbAprContents.kpi3 <= '150.4')?'orange':(gfbAprContents.kpi3 > '150.4' && gfbAprContents.kpi3 < '188')?'yellow-7':(gfbAprContents.kpi3 >= '188' && gfbAprContents.kpi3 < '225.6')?'green':(gfbAprContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbAprContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbMayContents.kpi1 == null)?'grey-2':(gfbMayContents.kpi1 >= '0' && gfbMayContents.kpi1 <= '232.6')?'red':(gfbMayContents.kpi1 > '232.6' && gfbMayContents.kpi1 <= '310.1333333')?'orange':(gfbMayContents.kpi1 > '310.1333333' && gfbMayContents.kpi1 < '387.6666667')?'yellow-7':(gfbMayContents.kpi1 >= '387.6666667' && gfbMayContents.kpi1 < '465.2')?'green':(gfbMayContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbMayContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbMayContents.kpi2 == null)?'grey-2':(gfbMayContents.kpi2 >= '0' && gfbMayContents.kpi2 <= '148')?'red':(gfbMayContents.kpi2 > '148' && gfbMayContents.kpi2 <= '197.3333333')?'orange':(gfbMayContents.kpi2 > '197.3333333' && gfbMayContents.kpi2 < '246.6666667')?'yellow-7':(gfbMayContents.kpi2 >= '246.6666667' && gfbMayContents.kpi2 < '296')?'green':(gfbMayContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbMayContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbMayContents.kpi3 == null)?'grey-2':(gfbMayContents.kpi3 >= '0' && gfbMayContents.kpi3 <= '112.8')?'red':(gfbMayContents.kpi3 > '112.8' && gfbMayContents.kpi3 <= '150.4')?'orange':(gfbMayContents.kpi3 > '150.4' && gfbMayContents.kpi3 < '188')?'yellow-7':(gfbMayContents.kpi3 >= '188' && gfbMayContents.kpi3 < '225.6')?'green':(gfbMayContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbMayContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbJunContents.kpi1 == null)?'grey-2':(gfbJunContents.kpi1 >= '0' && gfbJunContents.kpi1 <= '232.6')?'red':(gfbJunContents.kpi1 > '232.6' && gfbJunContents.kpi1 <= '310.1333333')?'orange':(gfbJunContents.kpi1 > '310.1333333' && gfbJunContents.kpi1 < '387.6666667')?'yellow-7':(gfbJunContents.kpi1 >= '387.6666667' && gfbJunContents.kpi1 < '465.2')?'green':(gfbJunContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbJunContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJunContents.kpi2 == null)?'grey-2':(gfbJunContents.kpi2 >= '0' && gfbJunContents.kpi2 <= '148')?'red':(gfbJunContents.kpi2 > '148' && gfbJunContents.kpi2 <= '197.3333333')?'orange':(gfbJunContents.kpi2 > '197.3333333' && gfbJunContents.kpi2 < '246.6666667')?'yellow-7':(gfbJunContents.kpi2 >= '246.6666667' && gfbJunContents.kpi2 < '296')?'green':(gfbJunContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbJunContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJunContents.kpi3 == null)?'grey-2':(gfbJunContents.kpi3 >= '0' && gfbJunContents.kpi3 <= '112.8')?'red':(gfbJunContents.kpi3 > '112.8' && gfbJunContents.kpi3 <= '150.4')?'orange':(gfbJunContents.kpi3 > '150.4' && gfbJunContents.kpi3 < '188')?'yellow-7':(gfbJunContents.kpi3 >= '188' && gfbJunContents.kpi3 < '225.6')?'green':(gfbJunContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbJunContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbJulContents.kpi1 == null)?'grey-2':(gfbJulContents.kpi1 >= '0' && gfbJulContents.kpi1 <= '232.6')?'red':(gfbJulContents.kpi1 > '232.6' && gfbJulContents.kpi1 <= '310.1333333')?'orange':(gfbJulContents.kpi1 > '310.1333333' && gfbJulContents.kpi1 < '387.6666667')?'yellow-7':(gfbJulContents.kpi1 >= '387.6666667' && gfbJulContents.kpi1 < '465.2')?'green':(gfbJulContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbJulContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJulContents.kpi2 == null)?'grey-2':(gfbJulContents.kpi2 >= '0' && gfbJulContents.kpi2 <= '148')?'red':(gfbJulContents.kpi2 > '148' && gfbJulContents.kpi2 <= '197.3333333')?'orange':(gfbJulContents.kpi2 > '197.3333333' && gfbJulContents.kpi2 < '246.6666667')?'yellow-7':(gfbJulContents.kpi2 >= '246.6666667' && gfbJulContents.kpi2 < '296')?'green':(gfbJulContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbJulContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJulContents.kpi3 == null)?'grey-2':(gfbJulContents.kpi3 >= '0' && gfbJulContents.kpi3 <= '112.8')?'red':(gfbJulContents.kpi3 > '112.8' && gfbJulContents.kpi3 <= '150.4')?'orange':(gfbJulContents.kpi3 > '150.4' && gfbJulContents.kpi3 < '188')?'yellow-7':(gfbJulContents.kpi3 >= '188' && gfbJulContents.kpi3 < '225.6')?'green':(gfbJulContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbJulContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbAugContents.kpi1 == null)?'grey-2':(gfbAugContents.kpi1 >= '0' && gfbAugContents.kpi1 <= '232.6')?'red':(gfbAugContents.kpi1 > '232.6' && gfbAugContents.kpi1 <= '310.1333333')?'orange':(gfbAugContents.kpi1 > '310.1333333' && gfbAugContents.kpi1 < '387.6666667')?'yellow-7':(gfbAugContents.kpi1 >= '387.6666667' && gfbAugContents.kpi1 < '465.2')?'green':(gfbAugContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbAugContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbAugContents.kpi2 == null)?'grey-2':(gfbAugContents.kpi2 >= '0' && gfbAugContents.kpi2 <= '148')?'red':(gfbAugContents.kpi2 > '148' && gfbAugContents.kpi2 <= '197.3333333')?'orange':(gfbAugContents.kpi2 > '197.3333333' && gfbAugContents.kpi2 < '246.6666667')?'yellow-7':(gfbAugContents.kpi2 >= '246.6666667' && gfbAugContents.kpi2 < '296')?'green':(gfbAugContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbAugContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbAugContents.kpi3 == null)?'grey-2':(gfbAugContents.kpi3 >= '0' && gfbAugContents.kpi3 <= '112.8')?'red':(gfbAugContents.kpi3 > '112.8' && gfbAugContents.kpi3 <= '150.4')?'orange':(gfbAugContents.kpi3 > '150.4' && gfbAugContents.kpi3 < '188')?'yellow-7':(gfbAugContents.kpi3 >= '188' && gfbAugContents.kpi3 < '225.6')?'green':(gfbAugContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbAugContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbSepContents.kpi1 == null)?'grey-2':(gfbSepContents.kpi1 >= '0' && gfbSepContents.kpi1 <= '232.6')?'red':(gfbSepContents.kpi1 > '232.6' && gfbSepContents.kpi1 <= '310.1333333')?'orange':(gfbSepContents.kpi1 > '310.1333333' && gfbSepContents.kpi1 < '387.6666667')?'yellow-7':(gfbSepContents.kpi1 >= '387.6666667' && gfbSepContents.kpi1 < '465.2')?'green':(gfbSepContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbSepContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbSepContents.kpi2 == null)?'grey-2':(gfbSepContents.kpi2 >= '0' && gfbSepContents.kpi2 <= '148')?'red':(gfbSepContents.kpi2 > '148' && gfbSepContents.kpi2 <= '197.3333333')?'orange':(gfbSepContents.kpi2 > '197.3333333' && gfbSepContents.kpi2 < '246.6666667')?'yellow-7':(gfbSepContents.kpi2 >= '246.6666667' && gfbSepContents.kpi2 < '296')?'green':(gfbSepContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbSepContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbSepContents.kpi3 == null)?'grey-2':(gfbSepContents.kpi3 >= '0' && gfbSepContents.kpi3 <= '112.8')?'red':(gfbSepContents.kpi3 > '112.8' && gfbSepContents.kpi3 <= '150.4')?'orange':(gfbSepContents.kpi3 > '150.4' && gfbSepContents.kpi3 < '188')?'yellow-7':(gfbSepContents.kpi3 >= '188' && gfbSepContents.kpi3 < '225.6')?'green':(gfbSepContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbSepContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbOctContents.kpi1 == null)?'grey-2':(gfbOctContents.kpi1 >= '0' && gfbOctContents.kpi1 <= '232.6')?'red':(gfbOctContents.kpi1 > '232.6' && gfbOctContents.kpi1 <= '310.1333333')?'orange':(gfbOctContents.kpi1 > '310.1333333' && gfbOctContents.kpi1 < '387.6666667')?'yellow-7':(gfbOctContents.kpi1 >= '387.6666667' && gfbOctContents.kpi1 < '465.2')?'green':(gfbOctContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbOctContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbOctContents.kpi2 == null)?'grey-2':(gfbOctContents.kpi2 >= '0' && gfbOctContents.kpi2 <= '148')?'red':(gfbOctContents.kpi2 > '148' && gfbOctContents.kpi2 <= '197.3333333')?'orange':(gfbOctContents.kpi2 > '197.3333333' && gfbOctContents.kpi2 < '246.6666667')?'yellow-7':(gfbOctContents.kpi2 >= '246.6666667' && gfbOctContents.kpi2 < '296')?'green':(gfbOctContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbOctContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbOctContents.kpi3 == null)?'grey-2':(gfbOctContents.kpi3 >= '0' && gfbOctContents.kpi3 <= '112.8')?'red':(gfbOctContents.kpi3 > '112.8' && gfbOctContents.kpi3 <= '150.4')?'orange':(gfbOctContents.kpi3 > '150.4' && gfbOctContents.kpi3 < '188')?'yellow-7':(gfbOctContents.kpi3 >= '188' && gfbOctContents.kpi3 < '225.6')?'green':(gfbOctContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbOctContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbNovContents.kpi1 == null)?'grey-2':(gfbNovContents.kpi1 >= '0' && gfbNovContents.kpi1 <= '232.6')?'red':(gfbNovContents.kpi1 > '232.6' && gfbNovContents.kpi1 <= '310.1333333')?'orange':(gfbNovContents.kpi1 > '310.1333333' && gfbNovContents.kpi1 < '387.6666667')?'yellow-7':(gfbNovContents.kpi1 >= '387.6666667' && gfbNovContents.kpi1 < '465.2')?'green':(gfbNovContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbNovContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbNovContents.kpi2 == null)?'grey-2':(gfbNovContents.kpi2 >= '0' && gfbNovContents.kpi2 <= '148')?'red':(gfbNovContents.kpi2 > '148' && gfbNovContents.kpi2 <= '197.3333333')?'orange':(gfbNovContents.kpi2 > '197.3333333' && gfbNovContents.kpi2 < '246.6666667')?'yellow-7':(gfbNovContents.kpi2 >= '246.6666667' && gfbNovContents.kpi2 < '296')?'green':(gfbNovContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbNovContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbNovContents.kpi3 == null)?'grey-2':(gfbNovContents.kpi3 >= '0' && gfbNovContents.kpi3 <= '112.8')?'red':(gfbNovContents.kpi3 > '112.8' && gfbNovContents.kpi3 <= '150.4')?'orange':(gfbNovContents.kpi3 > '150.4' && gfbNovContents.kpi3 < '188')?'yellow-7':(gfbNovContents.kpi3 >= '188' && gfbNovContents.kpi3 < '225.6')?'green':(gfbNovContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbNovContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbDecContents.kpi1 == null)?'grey-2':(gfbDecContents.kpi1 >= '0' && gfbDecContents.kpi1 <= '232.6')?'red':(gfbDecContents.kpi1 > '232.6' && gfbDecContents.kpi1 <= '310.1333333')?'orange':(gfbDecContents.kpi1 > '310.1333333' && gfbDecContents.kpi1 < '387.6666667')?'yellow-7':(gfbDecContents.kpi1 >= '387.6666667' && gfbDecContents.kpi1 < '465.2')?'green':(gfbDecContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbDecContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbDecContents.kpi2 == null)?'grey-2':(gfbDecContents.kpi2 >= '0' && gfbDecContents.kpi2 <= '148')?'red':(gfbDecContents.kpi2 > '148' && gfbDecContents.kpi2 <= '197.3333333')?'orange':(gfbDecContents.kpi2 > '197.3333333' && gfbDecContents.kpi2 < '246.6666667')?'yellow-7':(gfbDecContents.kpi2 >= '246.6666667' && gfbDecContents.kpi2 < '296')?'green':(gfbDecContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbDecContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbDecContents.kpi3 == null)?'grey-2':(gfbDecContents.kpi3 >= '0' && gfbDecContents.kpi3 <= '112.8')?'red':(gfbDecContents.kpi3 > '112.8' && gfbDecContents.kpi3 <= '150.4')?'orange':(gfbDecContents.kpi3 > '150.4' && gfbDecContents.kpi3 < '188')?'yellow-7':(gfbDecContents.kpi3 >= '188' && gfbDecContents.kpi3 < '225.6')?'green':(gfbDecContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbDecContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                                <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbJanContents.kpi1 == null)?'grey-2':(gfbJanContents.kpi1 >= '0' && gfbJanContents.kpi1 <= '232.6')?'red':(gfbJanContents.kpi1 > '232.6' && gfbJanContents.kpi1 <= '310.1333333')?'orange':(gfbJanContents.kpi1 > '310.1333333' && gfbJanContents.kpi1 < '387.6666667')?'yellow-7':(gfbJanContents.kpi1 >= '387.6666667' && gfbJanContents.kpi1 < '465.2')?'green':(gfbJanContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbJanContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJanContents.kpi2 == null)?'grey-2':(gfbJanContents.kpi2 >= '0' && gfbJanContents.kpi2 <= '148')?'red':(gfbJanContents.kpi2 > '148' && gfbJanContents.kpi2 <= '197.3333333')?'orange':(gfbJanContents.kpi2 > '197.3333333' && gfbJanContents.kpi2 < '246.6666667')?'yellow-7':(gfbJanContents.kpi2 >= '246.6666667' && gfbJanContents.kpi2 < '296')?'green':(gfbJanContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbJanContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJanContents.kpi3 == null)?'grey-2':(gfbJanContents.kpi3 >= '0' && gfbJanContents.kpi3 <= '112.8')?'red':(gfbJanContents.kpi3 > '112.8' && gfbJanContents.kpi3 <= '150.4')?'orange':(gfbJanContents.kpi3 > '150.4' && gfbJanContents.kpi3 < '188')?'yellow-7':(gfbJanContents.kpi3 >= '188' && gfbJanContents.kpi3 < '225.6')?'green':(gfbJanContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbJanContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbFebContents.kpi1 == null)?'grey-2':(gfbFebContents.kpi1 >= '0' && gfbFebContents.kpi1 <= '232.6')?'red':(gfbFebContents.kpi1 > '232.6' && gfbFebContents.kpi1 <= '310.1333333')?'orange':(gfbFebContents.kpi1 > '310.1333333' && gfbFebContents.kpi1 < '387.6666667')?'yellow-7':(gfbFebContents.kpi1 >= '387.6666667' && gfbFebContents.kpi1 < '465.2')?'green':(gfbFebContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbFebContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbFebContents.kpi2 == null)?'grey-2':(gfbFebContents.kpi2 >= '0' && gfbFebContents.kpi2 <= '148')?'red':(gfbFebContents.kpi2 > '148' && gfbFebContents.kpi2 <= '197.3333333')?'orange':(gfbFebContents.kpi2 > '197.3333333' && gfbFebContents.kpi2 < '246.6666667')?'yellow-7':(gfbFebContents.kpi2 >= '246.6666667' && gfbFebContents.kpi2 < '296')?'green':(gfbFebContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbFebContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbFebContents.kpi3 == null)?'grey-2':(gfbFebContents.kpi3 >= '0' && gfbFebContents.kpi3 <= '112.8')?'red':(gfbFebContents.kpi3 > '112.8' && gfbFebContents.kpi3 <= '150.4')?'orange':(gfbFebContents.kpi3 > '150.4' && gfbFebContents.kpi3 < '188')?'yellow-7':(gfbFebContents.kpi3 >= '188' && gfbFebContents.kpi3 < '225.6')?'green':(gfbFebContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbFebContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbMarContents.kpi1 == null)?'grey-2':(gfbMarContents.kpi1 >= '0' && gfbMarContents.kpi1 <= '232.6')?'red':(gfbMarContents.kpi1 > '232.6' && gfbMarContents.kpi1 <= '310.1333333')?'orange':(gfbMarContents.kpi1 > '310.1333333' && gfbMarContents.kpi1 < '387.6666667')?'yellow-7':(gfbMarContents.kpi1 >= '387.6666667' && gfbMarContents.kpi1 < '465.2')?'green':(gfbMarContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbMarContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbMarContents.kpi2 == null)?'grey-2':(gfbMarContents.kpi2 >= '0' && gfbMarContents.kpi2 <= '148')?'red':(gfbMarContents.kpi2 > '148' && gfbMarContents.kpi2 <= '197.3333333')?'orange':(gfbMarContents.kpi2 > '197.3333333' && gfbMarContents.kpi2 < '246.6666667')?'yellow-7':(gfbMarContents.kpi2 >= '246.6666667' && gfbMarContents.kpi2 < '296')?'green':(gfbMarContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbMarContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbMarContents.kpi3 == null)?'grey-2':(gfbMarContents.kpi3 >= '0' && gfbMarContents.kpi3 <= '112.8')?'red':(gfbMarContents.kpi3 > '112.8' && gfbMarContents.kpi3 <= '150.4')?'orange':(gfbMarContents.kpi3 > '150.4' && gfbMarContents.kpi3 < '188')?'yellow-7':(gfbMarContents.kpi3 >= '188' && gfbMarContents.kpi3 < '225.6')?'green':(gfbMarContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbMarContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbAprContents.kpi1 == null)?'grey-2':(gfbAprContents.kpi1 >= '0' && gfbAprContents.kpi1 <= '232.6')?'red':(gfbAprContents.kpi1 > '232.6' && gfbAprContents.kpi1 <= '310.1333333')?'orange':(gfbAprContents.kpi1 > '310.1333333' && gfbAprContents.kpi1 < '387.6666667')?'yellow-7':(gfbAprContents.kpi1 >= '387.6666667' && gfbAprContents.kpi1 < '465.2')?'green':(gfbAprContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbAprContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbAprContents.kpi2 == null)?'grey-2':(gfbAprContents.kpi2 >= '0' && gfbAprContents.kpi2 <= '148')?'red':(gfbAprContents.kpi2 > '148' && gfbAprContents.kpi2 <= '197.3333333')?'orange':(gfbAprContents.kpi2 > '197.3333333' && gfbAprContents.kpi2 < '246.6666667')?'yellow-7':(gfbAprContents.kpi2 >= '246.6666667' && gfbAprContents.kpi2 < '296')?'green':(gfbAprContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbAprContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbAprContents.kpi3 == null)?'grey-2':(gfbAprContents.kpi3 >= '0' && gfbAprContents.kpi3 <= '112.8')?'red':(gfbAprContents.kpi3 > '112.8' && gfbAprContents.kpi3 <= '150.4')?'orange':(gfbAprContents.kpi3 > '150.4' && gfbAprContents.kpi3 < '188')?'yellow-7':(gfbAprContents.kpi3 >= '188' && gfbAprContents.kpi3 < '225.6')?'green':(gfbAprContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbAprContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbMayContents.kpi1 == null)?'grey-2':(gfbMayContents.kpi1 >= '0' && gfbMayContents.kpi1 <= '232.6')?'red':(gfbMayContents.kpi1 > '232.6' && gfbMayContents.kpi1 <= '310.1333333')?'orange':(gfbMayContents.kpi1 > '310.1333333' && gfbMayContents.kpi1 < '387.6666667')?'yellow-7':(gfbMayContents.kpi1 >= '387.6666667' && gfbMayContents.kpi1 < '465.2')?'green':(gfbMayContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbMayContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbMayContents.kpi2 == null)?'grey-2':(gfbMayContents.kpi2 >= '0' && gfbMayContents.kpi2 <= '148')?'red':(gfbMayContents.kpi2 > '148' && gfbMayContents.kpi2 <= '197.3333333')?'orange':(gfbMayContents.kpi2 > '197.3333333' && gfbMayContents.kpi2 < '246.6666667')?'yellow-7':(gfbMayContents.kpi2 >= '246.6666667' && gfbMayContents.kpi2 < '296')?'green':(gfbMayContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbMayContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbMayContents.kpi3 == null)?'grey-2':(gfbMayContents.kpi3 >= '0' && gfbMayContents.kpi3 <= '112.8')?'red':(gfbMayContents.kpi3 > '112.8' && gfbMayContents.kpi3 <= '150.4')?'orange':(gfbMayContents.kpi3 > '150.4' && gfbMayContents.kpi3 < '188')?'yellow-7':(gfbMayContents.kpi3 >= '188' && gfbMayContents.kpi3 < '225.6')?'green':(gfbMayContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbMayContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbJunContents.kpi1 == null)?'grey-2':(gfbJunContents.kpi1 >= '0' && gfbJunContents.kpi1 <= '232.6')?'red':(gfbJunContents.kpi1 > '232.6' && gfbJunContents.kpi1 <= '310.1333333')?'orange':(gfbJunContents.kpi1 > '310.1333333' && gfbJunContents.kpi1 < '387.6666667')?'yellow-7':(gfbJunContents.kpi1 >= '387.6666667' && gfbJunContents.kpi1 < '465.2')?'green':(gfbJunContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbJunContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJunContents.kpi2 == null)?'grey-2':(gfbJunContents.kpi2 >= '0' && gfbJunContents.kpi2 <= '148')?'red':(gfbJunContents.kpi2 > '148' && gfbJunContents.kpi2 <= '197.3333333')?'orange':(gfbJunContents.kpi2 > '197.3333333' && gfbJunContents.kpi2 < '246.6666667')?'yellow-7':(gfbJunContents.kpi2 >= '246.6666667' && gfbJunContents.kpi2 < '296')?'green':(gfbJunContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbJunContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJunContents.kpi3 == null)?'grey-2':(gfbJunContents.kpi3 >= '0' && gfbJunContents.kpi3 <= '112.8')?'red':(gfbJunContents.kpi3 > '112.8' && gfbJunContents.kpi3 <= '150.4')?'orange':(gfbJunContents.kpi3 > '150.4' && gfbJunContents.kpi3 < '188')?'yellow-7':(gfbJunContents.kpi3 >= '188' && gfbJunContents.kpi3 < '225.6')?'green':(gfbJunContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbJunContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbJulContents.kpi1 == null)?'grey-2':(gfbJulContents.kpi1 >= '0' && gfbJulContents.kpi1 <= '232.6')?'red':(gfbJulContents.kpi1 > '232.6' && gfbJulContents.kpi1 <= '310.1333333')?'orange':(gfbJulContents.kpi1 > '310.1333333' && gfbJulContents.kpi1 < '387.6666667')?'yellow-7':(gfbJulContents.kpi1 >= '387.6666667' && gfbJulContents.kpi1 < '465.2')?'green':(gfbJulContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbJulContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJulContents.kpi2 == null)?'grey-2':(gfbJulContents.kpi2 >= '0' && gfbJulContents.kpi2 <= '148')?'red':(gfbJulContents.kpi2 > '148' && gfbJulContents.kpi2 <= '197.3333333')?'orange':(gfbJulContents.kpi2 > '197.3333333' && gfbJulContents.kpi2 < '246.6666667')?'yellow-7':(gfbJulContents.kpi2 >= '246.6666667' && gfbJulContents.kpi2 < '296')?'green':(gfbJulContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbJulContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJulContents.kpi3 == null)?'grey-2':(gfbJulContents.kpi3 >= '0' && gfbJulContents.kpi3 <= '112.8')?'red':(gfbJulContents.kpi3 > '112.8' && gfbJulContents.kpi3 <= '150.4')?'orange':(gfbJulContents.kpi3 > '150.4' && gfbJulContents.kpi3 < '188')?'yellow-7':(gfbJulContents.kpi3 >= '188' && gfbJulContents.kpi3 < '225.6')?'green':(gfbJulContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbJulContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbAugContents.kpi1 == null)?'grey-2':(gfbAugContents.kpi1 >= '0' && gfbAugContents.kpi1 <= '232.6')?'red':(gfbAugContents.kpi1 > '232.6' && gfbAugContents.kpi1 <= '310.1333333')?'orange':(gfbAugContents.kpi1 > '310.1333333' && gfbAugContents.kpi1 < '387.6666667')?'yellow-7':(gfbAugContents.kpi1 >= '387.6666667' && gfbAugContents.kpi1 < '465.2')?'green':(gfbAugContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbAugContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbAugContents.kpi2 == null)?'grey-2':(gfbAugContents.kpi2 >= '0' && gfbAugContents.kpi2 <= '148')?'red':(gfbAugContents.kpi2 > '148' && gfbAugContents.kpi2 <= '197.3333333')?'orange':(gfbAugContents.kpi2 > '197.3333333' && gfbAugContents.kpi2 < '246.6666667')?'yellow-7':(gfbAugContents.kpi2 >= '246.6666667' && gfbAugContents.kpi2 < '296')?'green':(gfbAugContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbAugContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbAugContents.kpi3 == null)?'grey-2':(gfbAugContents.kpi3 >= '0' && gfbAugContents.kpi3 <= '112.8')?'red':(gfbAugContents.kpi3 > '112.8' && gfbAugContents.kpi3 <= '150.4')?'orange':(gfbAugContents.kpi3 > '150.4' && gfbAugContents.kpi3 < '188')?'yellow-7':(gfbAugContents.kpi3 >= '188' && gfbAugContents.kpi3 < '225.6')?'green':(gfbAugContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbAugContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbSepContents.kpi1 == null)?'grey-2':(gfbSepContents.kpi1 >= '0' && gfbSepContents.kpi1 <= '232.6')?'red':(gfbSepContents.kpi1 > '232.6' && gfbSepContents.kpi1 <= '310.1333333')?'orange':(gfbSepContents.kpi1 > '310.1333333' && gfbSepContents.kpi1 < '387.6666667')?'yellow-7':(gfbSepContents.kpi1 >= '387.6666667' && gfbSepContents.kpi1 < '465.2')?'green':(gfbSepContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbSepContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbSepContents.kpi2 == null)?'grey-2':(gfbSepContents.kpi2 >= '0' && gfbSepContents.kpi2 <= '148')?'red':(gfbSepContents.kpi2 > '148' && gfbSepContents.kpi2 <= '197.3333333')?'orange':(gfbSepContents.kpi2 > '197.3333333' && gfbSepContents.kpi2 < '246.6666667')?'yellow-7':(gfbSepContents.kpi2 >= '246.6666667' && gfbSepContents.kpi2 < '296')?'green':(gfbSepContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbSepContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbSepContents.kpi3 == null)?'grey-2':(gfbSepContents.kpi3 >= '0' && gfbSepContents.kpi3 <= '112.8')?'red':(gfbSepContents.kpi3 > '112.8' && gfbSepContents.kpi3 <= '150.4')?'orange':(gfbSepContents.kpi3 > '150.4' && gfbSepContents.kpi3 < '188')?'yellow-7':(gfbSepContents.kpi3 >= '188' && gfbSepContents.kpi3 < '225.6')?'green':(gfbSepContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbSepContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbOctContents.kpi1 == null)?'grey-2':(gfbOctContents.kpi1 >= '0' && gfbOctContents.kpi1 <= '232.6')?'red':(gfbOctContents.kpi1 > '232.6' && gfbOctContents.kpi1 <= '310.1333333')?'orange':(gfbOctContents.kpi1 > '310.1333333' && gfbOctContents.kpi1 < '387.6666667')?'yellow-7':(gfbOctContents.kpi1 >= '387.6666667' && gfbOctContents.kpi1 < '465.2')?'green':(gfbOctContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbOctContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbOctContents.kpi2 == null)?'grey-2':(gfbOctContents.kpi2 >= '0' && gfbOctContents.kpi2 <= '148')?'red':(gfbOctContents.kpi2 > '148' && gfbOctContents.kpi2 <= '197.3333333')?'orange':(gfbOctContents.kpi2 > '197.3333333' && gfbOctContents.kpi2 < '246.6666667')?'yellow-7':(gfbOctContents.kpi2 >= '246.6666667' && gfbOctContents.kpi2 < '296')?'green':(gfbOctContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbOctContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbOctContents.kpi3 == null)?'grey-2':(gfbOctContents.kpi3 >= '0' && gfbOctContents.kpi3 <= '112.8')?'red':(gfbOctContents.kpi3 > '112.8' && gfbOctContents.kpi3 <= '150.4')?'orange':(gfbOctContents.kpi3 > '150.4' && gfbOctContents.kpi3 < '188')?'yellow-7':(gfbOctContents.kpi3 >= '188' && gfbOctContents.kpi3 < '225.6')?'green':(gfbOctContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbOctContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbNovContents.kpi1 == null)?'grey-2':(gfbNovContents.kpi1 >= '0' && gfbNovContents.kpi1 <= '232.6')?'red':(gfbNovContents.kpi1 > '232.6' && gfbNovContents.kpi1 <= '310.1333333')?'orange':(gfbNovContents.kpi1 > '310.1333333' && gfbNovContents.kpi1 < '387.6666667')?'yellow-7':(gfbNovContents.kpi1 >= '387.6666667' && gfbNovContents.kpi1 < '465.2')?'green':(gfbNovContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbNovContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbNovContents.kpi2 == null)?'grey-2':(gfbNovContents.kpi2 >= '0' && gfbNovContents.kpi2 <= '148')?'red':(gfbNovContents.kpi2 > '148' && gfbNovContents.kpi2 <= '197.3333333')?'orange':(gfbNovContents.kpi2 > '197.3333333' && gfbNovContents.kpi2 < '246.6666667')?'yellow-7':(gfbNovContents.kpi2 >= '246.6666667' && gfbNovContents.kpi2 < '296')?'green':(gfbNovContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbNovContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbNovContents.kpi3 == null)?'grey-2':(gfbNovContents.kpi3 >= '0' && gfbNovContents.kpi3 <= '112.8')?'red':(gfbNovContents.kpi3 > '112.8' && gfbNovContents.kpi3 <= '150.4')?'orange':(gfbNovContents.kpi3 > '150.4' && gfbNovContents.kpi3 < '188')?'yellow-7':(gfbNovContents.kpi3 >= '188' && gfbNovContents.kpi3 < '225.6')?'green':(gfbNovContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbNovContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbDecContents.kpi1 == null)?'grey-2':(gfbDecContents.kpi1 >= '0' && gfbDecContents.kpi1 <= '232.6')?'red':(gfbDecContents.kpi1 > '232.6' && gfbDecContents.kpi1 <= '310.1333333')?'orange':(gfbDecContents.kpi1 > '310.1333333' && gfbDecContents.kpi1 < '387.6666667')?'yellow-7':(gfbDecContents.kpi1 >= '387.6666667' && gfbDecContents.kpi1 < '465.2')?'green':(gfbDecContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbDecContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbDecContents.kpi2 == null)?'grey-2':(gfbDecContents.kpi2 >= '0' && gfbDecContents.kpi2 <= '148')?'red':(gfbDecContents.kpi2 > '148' && gfbDecContents.kpi2 <= '197.3333333')?'orange':(gfbDecContents.kpi2 > '197.3333333' && gfbDecContents.kpi2 < '246.6666667')?'yellow-7':(gfbDecContents.kpi2 >= '246.6666667' && gfbDecContents.kpi2 < '296')?'green':(gfbDecContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbDecContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbDecContents.kpi3 == null)?'grey-2':(gfbDecContents.kpi3 >= '0' && gfbDecContents.kpi3 <= '112.8')?'red':(gfbDecContents.kpi3 > '112.8' && gfbDecContents.kpi3 <= '150.4')?'orange':(gfbDecContents.kpi3 > '150.4' && gfbDecContents.kpi3 < '188')?'yellow-7':(gfbDecContents.kpi3 >= '188' && gfbDecContents.kpi3 < '225.6')?'green':(gfbDecContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbDecContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                                <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbJanContents.kpi1 == null)?'grey-2':(gfbJanContents.kpi1 >= '0' && gfbJanContents.kpi1 <= '232.6')?'red':(gfbJanContents.kpi1 > '232.6' && gfbJanContents.kpi1 <= '310.1333333')?'orange':(gfbJanContents.kpi1 > '310.1333333' && gfbJanContents.kpi1 < '387.6666667')?'yellow-7':(gfbJanContents.kpi1 >= '387.6666667' && gfbJanContents.kpi1 < '465.2')?'green':(gfbJanContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbJanContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJanContents.kpi2 == null)?'grey-2':(gfbJanContents.kpi2 >= '0' && gfbJanContents.kpi2 <= '148')?'red':(gfbJanContents.kpi2 > '148' && gfbJanContents.kpi2 <= '197.3333333')?'orange':(gfbJanContents.kpi2 > '197.3333333' && gfbJanContents.kpi2 < '246.6666667')?'yellow-7':(gfbJanContents.kpi2 >= '246.6666667' && gfbJanContents.kpi2 < '296')?'green':(gfbJanContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbJanContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJanContents.kpi3 == null)?'grey-2':(gfbJanContents.kpi3 >= '0' && gfbJanContents.kpi3 <= '112.8')?'red':(gfbJanContents.kpi3 > '112.8' && gfbJanContents.kpi3 <= '150.4')?'orange':(gfbJanContents.kpi3 > '150.4' && gfbJanContents.kpi3 < '188')?'yellow-7':(gfbJanContents.kpi3 >= '188' && gfbJanContents.kpi3 < '225.6')?'green':(gfbJanContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbJanContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbFebContents.kpi1 == null)?'grey-2':(gfbFebContents.kpi1 >= '0' && gfbFebContents.kpi1 <= '232.6')?'red':(gfbFebContents.kpi1 > '232.6' && gfbFebContents.kpi1 <= '310.1333333')?'orange':(gfbFebContents.kpi1 > '310.1333333' && gfbFebContents.kpi1 < '387.6666667')?'yellow-7':(gfbFebContents.kpi1 >= '387.6666667' && gfbFebContents.kpi1 < '465.2')?'green':(gfbFebContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbFebContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbFebContents.kpi2 == null)?'grey-2':(gfbFebContents.kpi2 >= '0' && gfbFebContents.kpi2 <= '148')?'red':(gfbFebContents.kpi2 > '148' && gfbFebContents.kpi2 <= '197.3333333')?'orange':(gfbFebContents.kpi2 > '197.3333333' && gfbFebContents.kpi2 < '246.6666667')?'yellow-7':(gfbFebContents.kpi2 >= '246.6666667' && gfbFebContents.kpi2 < '296')?'green':(gfbFebContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbFebContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbFebContents.kpi3 == null)?'grey-2':(gfbFebContents.kpi3 >= '0' && gfbFebContents.kpi3 <= '112.8')?'red':(gfbFebContents.kpi3 > '112.8' && gfbFebContents.kpi3 <= '150.4')?'orange':(gfbFebContents.kpi3 > '150.4' && gfbFebContents.kpi3 < '188')?'yellow-7':(gfbFebContents.kpi3 >= '188' && gfbFebContents.kpi3 < '225.6')?'green':(gfbFebContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbFebContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbMarContents.kpi1 == null)?'grey-2':(gfbMarContents.kpi1 >= '0' && gfbMarContents.kpi1 <= '232.6')?'red':(gfbMarContents.kpi1 > '232.6' && gfbMarContents.kpi1 <= '310.1333333')?'orange':(gfbMarContents.kpi1 > '310.1333333' && gfbMarContents.kpi1 < '387.6666667')?'yellow-7':(gfbMarContents.kpi1 >= '387.6666667' && gfbMarContents.kpi1 < '465.2')?'green':(gfbMarContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbMarContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbMarContents.kpi2 == null)?'grey-2':(gfbMarContents.kpi2 >= '0' && gfbMarContents.kpi2 <= '148')?'red':(gfbMarContents.kpi2 > '148' && gfbMarContents.kpi2 <= '197.3333333')?'orange':(gfbMarContents.kpi2 > '197.3333333' && gfbMarContents.kpi2 < '246.6666667')?'yellow-7':(gfbMarContents.kpi2 >= '246.6666667' && gfbMarContents.kpi2 < '296')?'green':(gfbMarContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbMarContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbMarContents.kpi3 == null)?'grey-2':(gfbMarContents.kpi3 >= '0' && gfbMarContents.kpi3 <= '112.8')?'red':(gfbMarContents.kpi3 > '112.8' && gfbMarContents.kpi3 <= '150.4')?'orange':(gfbMarContents.kpi3 > '150.4' && gfbMarContents.kpi3 < '188')?'yellow-7':(gfbMarContents.kpi3 >= '188' && gfbMarContents.kpi3 < '225.6')?'green':(gfbMarContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbMarContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbAprContents.kpi1 == null)?'grey-2':(gfbAprContents.kpi1 >= '0' && gfbAprContents.kpi1 <= '232.6')?'red':(gfbAprContents.kpi1 > '232.6' && gfbAprContents.kpi1 <= '310.1333333')?'orange':(gfbAprContents.kpi1 > '310.1333333' && gfbAprContents.kpi1 < '387.6666667')?'yellow-7':(gfbAprContents.kpi1 >= '387.6666667' && gfbAprContents.kpi1 < '465.2')?'green':(gfbAprContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbAprContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbAprContents.kpi2 == null)?'grey-2':(gfbAprContents.kpi2 >= '0' && gfbAprContents.kpi2 <= '148')?'red':(gfbAprContents.kpi2 > '148' && gfbAprContents.kpi2 <= '197.3333333')?'orange':(gfbAprContents.kpi2 > '197.3333333' && gfbAprContents.kpi2 < '246.6666667')?'yellow-7':(gfbAprContents.kpi2 >= '246.6666667' && gfbAprContents.kpi2 < '296')?'green':(gfbAprContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbAprContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbAprContents.kpi3 == null)?'grey-2':(gfbAprContents.kpi3 >= '0' && gfbAprContents.kpi3 <= '112.8')?'red':(gfbAprContents.kpi3 > '112.8' && gfbAprContents.kpi3 <= '150.4')?'orange':(gfbAprContents.kpi3 > '150.4' && gfbAprContents.kpi3 < '188')?'yellow-7':(gfbAprContents.kpi3 >= '188' && gfbAprContents.kpi3 < '225.6')?'green':(gfbAprContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbAprContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbMayContents.kpi1 == null)?'grey-2':(gfbMayContents.kpi1 >= '0' && gfbMayContents.kpi1 <= '232.6')?'red':(gfbMayContents.kpi1 > '232.6' && gfbMayContents.kpi1 <= '310.1333333')?'orange':(gfbMayContents.kpi1 > '310.1333333' && gfbMayContents.kpi1 < '387.6666667')?'yellow-7':(gfbMayContents.kpi1 >= '387.6666667' && gfbMayContents.kpi1 < '465.2')?'green':(gfbMayContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbMayContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbMayContents.kpi2 == null)?'grey-2':(gfbMayContents.kpi2 >= '0' && gfbMayContents.kpi2 <= '148')?'red':(gfbMayContents.kpi2 > '148' && gfbMayContents.kpi2 <= '197.3333333')?'orange':(gfbMayContents.kpi2 > '197.3333333' && gfbMayContents.kpi2 < '246.6666667')?'yellow-7':(gfbMayContents.kpi2 >= '246.6666667' && gfbMayContents.kpi2 < '296')?'green':(gfbMayContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbMayContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbMayContents.kpi3 == null)?'grey-2':(gfbMayContents.kpi3 >= '0' && gfbMayContents.kpi3 <= '112.8')?'red':(gfbMayContents.kpi3 > '112.8' && gfbMayContents.kpi3 <= '150.4')?'orange':(gfbMayContents.kpi3 > '150.4' && gfbMayContents.kpi3 < '188')?'yellow-7':(gfbMayContents.kpi3 >= '188' && gfbMayContents.kpi3 < '225.6')?'green':(gfbMayContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbMayContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbJunContents.kpi1 == null)?'grey-2':(gfbJunContents.kpi1 >= '0' && gfbJunContents.kpi1 <= '232.6')?'red':(gfbJunContents.kpi1 > '232.6' && gfbJunContents.kpi1 <= '310.1333333')?'orange':(gfbJunContents.kpi1 > '310.1333333' && gfbJunContents.kpi1 < '387.6666667')?'yellow-7':(gfbJunContents.kpi1 >= '387.6666667' && gfbJunContents.kpi1 < '465.2')?'green':(gfbJunContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbJunContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJunContents.kpi2 == null)?'grey-2':(gfbJunContents.kpi2 >= '0' && gfbJunContents.kpi2 <= '148')?'red':(gfbJunContents.kpi2 > '148' && gfbJunContents.kpi2 <= '197.3333333')?'orange':(gfbJunContents.kpi2 > '197.3333333' && gfbJunContents.kpi2 < '246.6666667')?'yellow-7':(gfbJunContents.kpi2 >= '246.6666667' && gfbJunContents.kpi2 < '296')?'green':(gfbJunContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbJunContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJunContents.kpi3 == null)?'grey-2':(gfbJunContents.kpi3 >= '0' && gfbJunContents.kpi3 <= '112.8')?'red':(gfbJunContents.kpi3 > '112.8' && gfbJunContents.kpi3 <= '150.4')?'orange':(gfbJunContents.kpi3 > '150.4' && gfbJunContents.kpi3 < '188')?'yellow-7':(gfbJunContents.kpi3 >= '188' && gfbJunContents.kpi3 < '225.6')?'green':(gfbJunContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbJunContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbJulContents.kpi1 == null)?'grey-2':(gfbJulContents.kpi1 >= '0' && gfbJulContents.kpi1 <= '232.6')?'red':(gfbJulContents.kpi1 > '232.6' && gfbJulContents.kpi1 <= '310.1333333')?'orange':(gfbJulContents.kpi1 > '310.1333333' && gfbJulContents.kpi1 < '387.6666667')?'yellow-7':(gfbJulContents.kpi1 >= '387.6666667' && gfbJulContents.kpi1 < '465.2')?'green':(gfbJulContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbJulContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJulContents.kpi2 == null)?'grey-2':(gfbJulContents.kpi2 >= '0' && gfbJulContents.kpi2 <= '148')?'red':(gfbJulContents.kpi2 > '148' && gfbJulContents.kpi2 <= '197.3333333')?'orange':(gfbJulContents.kpi2 > '197.3333333' && gfbJulContents.kpi2 < '246.6666667')?'yellow-7':(gfbJulContents.kpi2 >= '246.6666667' && gfbJulContents.kpi2 < '296')?'green':(gfbJulContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbJulContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJulContents.kpi3 == null)?'grey-2':(gfbJulContents.kpi3 >= '0' && gfbJulContents.kpi3 <= '112.8')?'red':(gfbJulContents.kpi3 > '112.8' && gfbJulContents.kpi3 <= '150.4')?'orange':(gfbJulContents.kpi3 > '150.4' && gfbJulContents.kpi3 < '188')?'yellow-7':(gfbJulContents.kpi3 >= '188' && gfbJulContents.kpi3 < '225.6')?'green':(gfbJulContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbJulContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbAugContents.kpi1 == null)?'grey-2':(gfbAugContents.kpi1 >= '0' && gfbAugContents.kpi1 <= '232.6')?'red':(gfbAugContents.kpi1 > '232.6' && gfbAugContents.kpi1 <= '310.1333333')?'orange':(gfbAugContents.kpi1 > '310.1333333' && gfbAugContents.kpi1 < '387.6666667')?'yellow-7':(gfbAugContents.kpi1 >= '387.6666667' && gfbAugContents.kpi1 < '465.2')?'green':(gfbAugContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbAugContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbAugContents.kpi2 == null)?'grey-2':(gfbAugContents.kpi2 >= '0' && gfbAugContents.kpi2 <= '148')?'red':(gfbAugContents.kpi2 > '148' && gfbAugContents.kpi2 <= '197.3333333')?'orange':(gfbAugContents.kpi2 > '197.3333333' && gfbAugContents.kpi2 < '246.6666667')?'yellow-7':(gfbAugContents.kpi2 >= '246.6666667' && gfbAugContents.kpi2 < '296')?'green':(gfbAugContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbAugContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbAugContents.kpi3 == null)?'grey-2':(gfbAugContents.kpi3 >= '0' && gfbAugContents.kpi3 <= '112.8')?'red':(gfbAugContents.kpi3 > '112.8' && gfbAugContents.kpi3 <= '150.4')?'orange':(gfbAugContents.kpi3 > '150.4' && gfbAugContents.kpi3 < '188')?'yellow-7':(gfbAugContents.kpi3 >= '188' && gfbAugContents.kpi3 < '225.6')?'green':(gfbAugContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbAugContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbSepContents.kpi1 == null)?'grey-2':(gfbSepContents.kpi1 >= '0' && gfbSepContents.kpi1 <= '232.6')?'red':(gfbSepContents.kpi1 > '232.6' && gfbSepContents.kpi1 <= '310.1333333')?'orange':(gfbSepContents.kpi1 > '310.1333333' && gfbSepContents.kpi1 < '387.6666667')?'yellow-7':(gfbSepContents.kpi1 >= '387.6666667' && gfbSepContents.kpi1 < '465.2')?'green':(gfbSepContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbSepContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbSepContents.kpi2 == null)?'grey-2':(gfbSepContents.kpi2 >= '0' && gfbSepContents.kpi2 <= '148')?'red':(gfbSepContents.kpi2 > '148' && gfbSepContents.kpi2 <= '197.3333333')?'orange':(gfbSepContents.kpi2 > '197.3333333' && gfbSepContents.kpi2 < '246.6666667')?'yellow-7':(gfbSepContents.kpi2 >= '246.6666667' && gfbSepContents.kpi2 < '296')?'green':(gfbSepContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbSepContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbSepContents.kpi3 == null)?'grey-2':(gfbSepContents.kpi3 >= '0' && gfbSepContents.kpi3 <= '112.8')?'red':(gfbSepContents.kpi3 > '112.8' && gfbSepContents.kpi3 <= '150.4')?'orange':(gfbSepContents.kpi3 > '150.4' && gfbSepContents.kpi3 < '188')?'yellow-7':(gfbSepContents.kpi3 >= '188' && gfbSepContents.kpi3 < '225.6')?'green':(gfbSepContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbSepContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbOctContents.kpi1 == null)?'grey-2':(gfbOctContents.kpi1 >= '0' && gfbOctContents.kpi1 <= '232.6')?'red':(gfbOctContents.kpi1 > '232.6' && gfbOctContents.kpi1 <= '310.1333333')?'orange':(gfbOctContents.kpi1 > '310.1333333' && gfbOctContents.kpi1 < '387.6666667')?'yellow-7':(gfbOctContents.kpi1 >= '387.6666667' && gfbOctContents.kpi1 < '465.2')?'green':(gfbOctContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbOctContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbOctContents.kpi2 == null)?'grey-2':(gfbOctContents.kpi2 >= '0' && gfbOctContents.kpi2 <= '148')?'red':(gfbOctContents.kpi2 > '148' && gfbOctContents.kpi2 <= '197.3333333')?'orange':(gfbOctContents.kpi2 > '197.3333333' && gfbOctContents.kpi2 < '246.6666667')?'yellow-7':(gfbOctContents.kpi2 >= '246.6666667' && gfbOctContents.kpi2 < '296')?'green':(gfbOctContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbOctContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbOctContents.kpi3 == null)?'grey-2':(gfbOctContents.kpi3 >= '0' && gfbOctContents.kpi3 <= '112.8')?'red':(gfbOctContents.kpi3 > '112.8' && gfbOctContents.kpi3 <= '150.4')?'orange':(gfbOctContents.kpi3 > '150.4' && gfbOctContents.kpi3 < '188')?'yellow-7':(gfbOctContents.kpi3 >= '188' && gfbOctContents.kpi3 < '225.6')?'green':(gfbOctContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbOctContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbNovContents.kpi1 == null)?'grey-2':(gfbNovContents.kpi1 >= '0' && gfbNovContents.kpi1 <= '232.6')?'red':(gfbNovContents.kpi1 > '232.6' && gfbNovContents.kpi1 <= '310.1333333')?'orange':(gfbNovContents.kpi1 > '310.1333333' && gfbNovContents.kpi1 < '387.6666667')?'yellow-7':(gfbNovContents.kpi1 >= '387.6666667' && gfbNovContents.kpi1 < '465.2')?'green':(gfbNovContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbNovContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbNovContents.kpi2 == null)?'grey-2':(gfbNovContents.kpi2 >= '0' && gfbNovContents.kpi2 <= '148')?'red':(gfbNovContents.kpi2 > '148' && gfbNovContents.kpi2 <= '197.3333333')?'orange':(gfbNovContents.kpi2 > '197.3333333' && gfbNovContents.kpi2 < '246.6666667')?'yellow-7':(gfbNovContents.kpi2 >= '246.6666667' && gfbNovContents.kpi2 < '296')?'green':(gfbNovContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbNovContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbNovContents.kpi3 == null)?'grey-2':(gfbNovContents.kpi3 >= '0' && gfbNovContents.kpi3 <= '112.8')?'red':(gfbNovContents.kpi3 > '112.8' && gfbNovContents.kpi3 <= '150.4')?'orange':(gfbNovContents.kpi3 > '150.4' && gfbNovContents.kpi3 < '188')?'yellow-7':(gfbNovContents.kpi3 >= '188' && gfbNovContents.kpi3 < '225.6')?'green':(gfbNovContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbNovContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbDecContents.kpi1 == null)?'grey-2':(gfbDecContents.kpi1 >= '0' && gfbDecContents.kpi1 <= '232.6')?'red':(gfbDecContents.kpi1 > '232.6' && gfbDecContents.kpi1 <= '310.1333333')?'orange':(gfbDecContents.kpi1 > '310.1333333' && gfbDecContents.kpi1 < '387.6666667')?'yellow-7':(gfbDecContents.kpi1 >= '387.6666667' && gfbDecContents.kpi1 < '465.2')?'green':(gfbDecContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbDecContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbDecContents.kpi2 == null)?'grey-2':(gfbDecContents.kpi2 >= '0' && gfbDecContents.kpi2 <= '148')?'red':(gfbDecContents.kpi2 > '148' && gfbDecContents.kpi2 <= '197.3333333')?'orange':(gfbDecContents.kpi2 > '197.3333333' && gfbDecContents.kpi2 < '246.6666667')?'yellow-7':(gfbDecContents.kpi2 >= '246.6666667' && gfbDecContents.kpi2 < '296')?'green':(gfbDecContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbDecContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbDecContents.kpi3 == null)?'grey-2':(gfbDecContents.kpi3 >= '0' && gfbDecContents.kpi3 <= '112.8')?'red':(gfbDecContents.kpi3 > '112.8' && gfbDecContents.kpi3 <= '150.4')?'orange':(gfbDecContents.kpi3 > '150.4' && gfbDecContents.kpi3 < '188')?'yellow-7':(gfbDecContents.kpi3 >= '188' && gfbDecContents.kpi3 < '225.6')?'green':(gfbDecContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbDecContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                                <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbJanContents.kpi1 == null)?'grey-2':(gfbJanContents.kpi1 >= '0' && gfbJanContents.kpi1 <= '232.6')?'red':(gfbJanContents.kpi1 > '232.6' && gfbJanContents.kpi1 <= '310.1333333')?'orange':(gfbJanContents.kpi1 > '310.1333333' && gfbJanContents.kpi1 < '387.6666667')?'yellow-7':(gfbJanContents.kpi1 >= '387.6666667' && gfbJanContents.kpi1 < '465.2')?'green':(gfbJanContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbJanContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJanContents.kpi2 == null)?'grey-2':(gfbJanContents.kpi2 >= '0' && gfbJanContents.kpi2 <= '148')?'red':(gfbJanContents.kpi2 > '148' && gfbJanContents.kpi2 <= '197.3333333')?'orange':(gfbJanContents.kpi2 > '197.3333333' && gfbJanContents.kpi2 < '246.6666667')?'yellow-7':(gfbJanContents.kpi2 >= '246.6666667' && gfbJanContents.kpi2 < '296')?'green':(gfbJanContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbJanContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJanContents.kpi3 == null)?'grey-2':(gfbJanContents.kpi3 >= '0' && gfbJanContents.kpi3 <= '112.8')?'red':(gfbJanContents.kpi3 > '112.8' && gfbJanContents.kpi3 <= '150.4')?'orange':(gfbJanContents.kpi3 > '150.4' && gfbJanContents.kpi3 < '188')?'yellow-7':(gfbJanContents.kpi3 >= '188' && gfbJanContents.kpi3 < '225.6')?'green':(gfbJanContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbJanContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbFebContents.kpi1 == null)?'grey-2':(gfbFebContents.kpi1 >= '0' && gfbFebContents.kpi1 <= '232.6')?'red':(gfbFebContents.kpi1 > '232.6' && gfbFebContents.kpi1 <= '310.1333333')?'orange':(gfbFebContents.kpi1 > '310.1333333' && gfbFebContents.kpi1 < '387.6666667')?'yellow-7':(gfbFebContents.kpi1 >= '387.6666667' && gfbFebContents.kpi1 < '465.2')?'green':(gfbFebContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbFebContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbFebContents.kpi2 == null)?'grey-2':(gfbFebContents.kpi2 >= '0' && gfbFebContents.kpi2 <= '148')?'red':(gfbFebContents.kpi2 > '148' && gfbFebContents.kpi2 <= '197.3333333')?'orange':(gfbFebContents.kpi2 > '197.3333333' && gfbFebContents.kpi2 < '246.6666667')?'yellow-7':(gfbFebContents.kpi2 >= '246.6666667' && gfbFebContents.kpi2 < '296')?'green':(gfbFebContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbFebContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbFebContents.kpi3 == null)?'grey-2':(gfbFebContents.kpi3 >= '0' && gfbFebContents.kpi3 <= '112.8')?'red':(gfbFebContents.kpi3 > '112.8' && gfbFebContents.kpi3 <= '150.4')?'orange':(gfbFebContents.kpi3 > '150.4' && gfbFebContents.kpi3 < '188')?'yellow-7':(gfbFebContents.kpi3 >= '188' && gfbFebContents.kpi3 < '225.6')?'green':(gfbFebContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbFebContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbMarContents.kpi1 == null)?'grey-2':(gfbMarContents.kpi1 >= '0' && gfbMarContents.kpi1 <= '232.6')?'red':(gfbMarContents.kpi1 > '232.6' && gfbMarContents.kpi1 <= '310.1333333')?'orange':(gfbMarContents.kpi1 > '310.1333333' && gfbMarContents.kpi1 < '387.6666667')?'yellow-7':(gfbMarContents.kpi1 >= '387.6666667' && gfbMarContents.kpi1 < '465.2')?'green':(gfbMarContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbMarContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbMarContents.kpi2 == null)?'grey-2':(gfbMarContents.kpi2 >= '0' && gfbMarContents.kpi2 <= '148')?'red':(gfbMarContents.kpi2 > '148' && gfbMarContents.kpi2 <= '197.3333333')?'orange':(gfbMarContents.kpi2 > '197.3333333' && gfbMarContents.kpi2 < '246.6666667')?'yellow-7':(gfbMarContents.kpi2 >= '246.6666667' && gfbMarContents.kpi2 < '296')?'green':(gfbMarContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbMarContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbMarContents.kpi3 == null)?'grey-2':(gfbMarContents.kpi3 >= '0' && gfbMarContents.kpi3 <= '112.8')?'red':(gfbMarContents.kpi3 > '112.8' && gfbMarContents.kpi3 <= '150.4')?'orange':(gfbMarContents.kpi3 > '150.4' && gfbMarContents.kpi3 < '188')?'yellow-7':(gfbMarContents.kpi3 >= '188' && gfbMarContents.kpi3 < '225.6')?'green':(gfbMarContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbMarContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbAprContents.kpi1 == null)?'grey-2':(gfbAprContents.kpi1 >= '0' && gfbAprContents.kpi1 <= '232.6')?'red':(gfbAprContents.kpi1 > '232.6' && gfbAprContents.kpi1 <= '310.1333333')?'orange':(gfbAprContents.kpi1 > '310.1333333' && gfbAprContents.kpi1 < '387.6666667')?'yellow-7':(gfbAprContents.kpi1 >= '387.6666667' && gfbAprContents.kpi1 < '465.2')?'green':(gfbAprContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbAprContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbAprContents.kpi2 == null)?'grey-2':(gfbAprContents.kpi2 >= '0' && gfbAprContents.kpi2 <= '148')?'red':(gfbAprContents.kpi2 > '148' && gfbAprContents.kpi2 <= '197.3333333')?'orange':(gfbAprContents.kpi2 > '197.3333333' && gfbAprContents.kpi2 < '246.6666667')?'yellow-7':(gfbAprContents.kpi2 >= '246.6666667' && gfbAprContents.kpi2 < '296')?'green':(gfbAprContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbAprContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbAprContents.kpi3 == null)?'grey-2':(gfbAprContents.kpi3 >= '0' && gfbAprContents.kpi3 <= '112.8')?'red':(gfbAprContents.kpi3 > '112.8' && gfbAprContents.kpi3 <= '150.4')?'orange':(gfbAprContents.kpi3 > '150.4' && gfbAprContents.kpi3 < '188')?'yellow-7':(gfbAprContents.kpi3 >= '188' && gfbAprContents.kpi3 < '225.6')?'green':(gfbAprContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbAprContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbMayContents.kpi1 == null)?'grey-2':(gfbMayContents.kpi1 >= '0' && gfbMayContents.kpi1 <= '232.6')?'red':(gfbMayContents.kpi1 > '232.6' && gfbMayContents.kpi1 <= '310.1333333')?'orange':(gfbMayContents.kpi1 > '310.1333333' && gfbMayContents.kpi1 < '387.6666667')?'yellow-7':(gfbMayContents.kpi1 >= '387.6666667' && gfbMayContents.kpi1 < '465.2')?'green':(gfbMayContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbMayContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbMayContents.kpi2 == null)?'grey-2':(gfbMayContents.kpi2 >= '0' && gfbMayContents.kpi2 <= '148')?'red':(gfbMayContents.kpi2 > '148' && gfbMayContents.kpi2 <= '197.3333333')?'orange':(gfbMayContents.kpi2 > '197.3333333' && gfbMayContents.kpi2 < '246.6666667')?'yellow-7':(gfbMayContents.kpi2 >= '246.6666667' && gfbMayContents.kpi2 < '296')?'green':(gfbMayContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbMayContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbMayContents.kpi3 == null)?'grey-2':(gfbMayContents.kpi3 >= '0' && gfbMayContents.kpi3 <= '112.8')?'red':(gfbMayContents.kpi3 > '112.8' && gfbMayContents.kpi3 <= '150.4')?'orange':(gfbMayContents.kpi3 > '150.4' && gfbMayContents.kpi3 < '188')?'yellow-7':(gfbMayContents.kpi3 >= '188' && gfbMayContents.kpi3 < '225.6')?'green':(gfbMayContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbMayContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbJunContents.kpi1 == null)?'grey-2':(gfbJunContents.kpi1 >= '0' && gfbJunContents.kpi1 <= '232.6')?'red':(gfbJunContents.kpi1 > '232.6' && gfbJunContents.kpi1 <= '310.1333333')?'orange':(gfbJunContents.kpi1 > '310.1333333' && gfbJunContents.kpi1 < '387.6666667')?'yellow-7':(gfbJunContents.kpi1 >= '387.6666667' && gfbJunContents.kpi1 < '465.2')?'green':(gfbJunContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbJunContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJunContents.kpi2 == null)?'grey-2':(gfbJunContents.kpi2 >= '0' && gfbJunContents.kpi2 <= '148')?'red':(gfbJunContents.kpi2 > '148' && gfbJunContents.kpi2 <= '197.3333333')?'orange':(gfbJunContents.kpi2 > '197.3333333' && gfbJunContents.kpi2 < '246.6666667')?'yellow-7':(gfbJunContents.kpi2 >= '246.6666667' && gfbJunContents.kpi2 < '296')?'green':(gfbJunContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbJunContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJunContents.kpi3 == null)?'grey-2':(gfbJunContents.kpi3 >= '0' && gfbJunContents.kpi3 <= '112.8')?'red':(gfbJunContents.kpi3 > '112.8' && gfbJunContents.kpi3 <= '150.4')?'orange':(gfbJunContents.kpi3 > '150.4' && gfbJunContents.kpi3 < '188')?'yellow-7':(gfbJunContents.kpi3 >= '188' && gfbJunContents.kpi3 < '225.6')?'green':(gfbJunContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbJunContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbJulContents.kpi1 == null)?'grey-2':(gfbJulContents.kpi1 >= '0' && gfbJulContents.kpi1 <= '232.6')?'red':(gfbJulContents.kpi1 > '232.6' && gfbJulContents.kpi1 <= '310.1333333')?'orange':(gfbJulContents.kpi1 > '310.1333333' && gfbJulContents.kpi1 < '387.6666667')?'yellow-7':(gfbJulContents.kpi1 >= '387.6666667' && gfbJulContents.kpi1 < '465.2')?'green':(gfbJulContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbJulContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJulContents.kpi2 == null)?'grey-2':(gfbJulContents.kpi2 >= '0' && gfbJulContents.kpi2 <= '148')?'red':(gfbJulContents.kpi2 > '148' && gfbJulContents.kpi2 <= '197.3333333')?'orange':(gfbJulContents.kpi2 > '197.3333333' && gfbJulContents.kpi2 < '246.6666667')?'yellow-7':(gfbJulContents.kpi2 >= '246.6666667' && gfbJulContents.kpi2 < '296')?'green':(gfbJulContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbJulContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJulContents.kpi3 == null)?'grey-2':(gfbJulContents.kpi3 >= '0' && gfbJulContents.kpi3 <= '112.8')?'red':(gfbJulContents.kpi3 > '112.8' && gfbJulContents.kpi3 <= '150.4')?'orange':(gfbJulContents.kpi3 > '150.4' && gfbJulContents.kpi3 < '188')?'yellow-7':(gfbJulContents.kpi3 >= '188' && gfbJulContents.kpi3 < '225.6')?'green':(gfbJulContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbJulContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbAugContents.kpi1 == null)?'grey-2':(gfbAugContents.kpi1 >= '0' && gfbAugContents.kpi1 <= '232.6')?'red':(gfbAugContents.kpi1 > '232.6' && gfbAugContents.kpi1 <= '310.1333333')?'orange':(gfbAugContents.kpi1 > '310.1333333' && gfbAugContents.kpi1 < '387.6666667')?'yellow-7':(gfbAugContents.kpi1 >= '387.6666667' && gfbAugContents.kpi1 < '465.2')?'green':(gfbAugContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbAugContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbAugContents.kpi2 == null)?'grey-2':(gfbAugContents.kpi2 >= '0' && gfbAugContents.kpi2 <= '148')?'red':(gfbAugContents.kpi2 > '148' && gfbAugContents.kpi2 <= '197.3333333')?'orange':(gfbAugContents.kpi2 > '197.3333333' && gfbAugContents.kpi2 < '246.6666667')?'yellow-7':(gfbAugContents.kpi2 >= '246.6666667' && gfbAugContents.kpi2 < '296')?'green':(gfbAugContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbAugContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbAugContents.kpi3 == null)?'grey-2':(gfbAugContents.kpi3 >= '0' && gfbAugContents.kpi3 <= '112.8')?'red':(gfbAugContents.kpi3 > '112.8' && gfbAugContents.kpi3 <= '150.4')?'orange':(gfbAugContents.kpi3 > '150.4' && gfbAugContents.kpi3 < '188')?'yellow-7':(gfbAugContents.kpi3 >= '188' && gfbAugContents.kpi3 < '225.6')?'green':(gfbAugContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbAugContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbSepContents.kpi1 == null)?'grey-2':(gfbSepContents.kpi1 >= '0' && gfbSepContents.kpi1 <= '232.6')?'red':(gfbSepContents.kpi1 > '232.6' && gfbSepContents.kpi1 <= '310.1333333')?'orange':(gfbSepContents.kpi1 > '310.1333333' && gfbSepContents.kpi1 < '387.6666667')?'yellow-7':(gfbSepContents.kpi1 >= '387.6666667' && gfbSepContents.kpi1 < '465.2')?'green':(gfbSepContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbSepContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbSepContents.kpi2 == null)?'grey-2':(gfbSepContents.kpi2 >= '0' && gfbSepContents.kpi2 <= '148')?'red':(gfbSepContents.kpi2 > '148' && gfbSepContents.kpi2 <= '197.3333333')?'orange':(gfbSepContents.kpi2 > '197.3333333' && gfbSepContents.kpi2 < '246.6666667')?'yellow-7':(gfbSepContents.kpi2 >= '246.6666667' && gfbSepContents.kpi2 < '296')?'green':(gfbSepContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbSepContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbSepContents.kpi3 == null)?'grey-2':(gfbSepContents.kpi3 >= '0' && gfbSepContents.kpi3 <= '112.8')?'red':(gfbSepContents.kpi3 > '112.8' && gfbSepContents.kpi3 <= '150.4')?'orange':(gfbSepContents.kpi3 > '150.4' && gfbSepContents.kpi3 < '188')?'yellow-7':(gfbSepContents.kpi3 >= '188' && gfbSepContents.kpi3 < '225.6')?'green':(gfbSepContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbSepContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbOctContents.kpi1 == null)?'grey-2':(gfbOctContents.kpi1 >= '0' && gfbOctContents.kpi1 <= '232.6')?'red':(gfbOctContents.kpi1 > '232.6' && gfbOctContents.kpi1 <= '310.1333333')?'orange':(gfbOctContents.kpi1 > '310.1333333' && gfbOctContents.kpi1 < '387.6666667')?'yellow-7':(gfbOctContents.kpi1 >= '387.6666667' && gfbOctContents.kpi1 < '465.2')?'green':(gfbOctContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbOctContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbOctContents.kpi2 == null)?'grey-2':(gfbOctContents.kpi2 >= '0' && gfbOctContents.kpi2 <= '148')?'red':(gfbOctContents.kpi2 > '148' && gfbOctContents.kpi2 <= '197.3333333')?'orange':(gfbOctContents.kpi2 > '197.3333333' && gfbOctContents.kpi2 < '246.6666667')?'yellow-7':(gfbOctContents.kpi2 >= '246.6666667' && gfbOctContents.kpi2 < '296')?'green':(gfbOctContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbOctContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbOctContents.kpi3 == null)?'grey-2':(gfbOctContents.kpi3 >= '0' && gfbOctContents.kpi3 <= '112.8')?'red':(gfbOctContents.kpi3 > '112.8' && gfbOctContents.kpi3 <= '150.4')?'orange':(gfbOctContents.kpi3 > '150.4' && gfbOctContents.kpi3 < '188')?'yellow-7':(gfbOctContents.kpi3 >= '188' && gfbOctContents.kpi3 < '225.6')?'green':(gfbOctContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbOctContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbNovContents.kpi1 == null)?'grey-2':(gfbNovContents.kpi1 >= '0' && gfbNovContents.kpi1 <= '232.6')?'red':(gfbNovContents.kpi1 > '232.6' && gfbNovContents.kpi1 <= '310.1333333')?'orange':(gfbNovContents.kpi1 > '310.1333333' && gfbNovContents.kpi1 < '387.6666667')?'yellow-7':(gfbNovContents.kpi1 >= '387.6666667' && gfbNovContents.kpi1 < '465.2')?'green':(gfbNovContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbNovContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbNovContents.kpi2 == null)?'grey-2':(gfbNovContents.kpi2 >= '0' && gfbNovContents.kpi2 <= '148')?'red':(gfbNovContents.kpi2 > '148' && gfbNovContents.kpi2 <= '197.3333333')?'orange':(gfbNovContents.kpi2 > '197.3333333' && gfbNovContents.kpi2 < '246.6666667')?'yellow-7':(gfbNovContents.kpi2 >= '246.6666667' && gfbNovContents.kpi2 < '296')?'green':(gfbNovContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbNovContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbNovContents.kpi3 == null)?'grey-2':(gfbNovContents.kpi3 >= '0' && gfbNovContents.kpi3 <= '112.8')?'red':(gfbNovContents.kpi3 > '112.8' && gfbNovContents.kpi3 <= '150.4')?'orange':(gfbNovContents.kpi3 > '150.4' && gfbNovContents.kpi3 < '188')?'yellow-7':(gfbNovContents.kpi3 >= '188' && gfbNovContents.kpi3 < '225.6')?'green':(gfbNovContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbNovContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbDecContents.kpi1 == null)?'grey-2':(gfbDecContents.kpi1 >= '0' && gfbDecContents.kpi1 <= '232.6')?'red':(gfbDecContents.kpi1 > '232.6' && gfbDecContents.kpi1 <= '310.1333333')?'orange':(gfbDecContents.kpi1 > '310.1333333' && gfbDecContents.kpi1 < '387.6666667')?'yellow-7':(gfbDecContents.kpi1 >= '387.6666667' && gfbDecContents.kpi1 < '465.2')?'green':(gfbDecContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbDecContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbDecContents.kpi2 == null)?'grey-2':(gfbDecContents.kpi2 >= '0' && gfbDecContents.kpi2 <= '148')?'red':(gfbDecContents.kpi2 > '148' && gfbDecContents.kpi2 <= '197.3333333')?'orange':(gfbDecContents.kpi2 > '197.3333333' && gfbDecContents.kpi2 < '246.6666667')?'yellow-7':(gfbDecContents.kpi2 >= '246.6666667' && gfbDecContents.kpi2 < '296')?'green':(gfbDecContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbDecContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbDecContents.kpi3 == null)?'grey-2':(gfbDecContents.kpi3 >= '0' && gfbDecContents.kpi3 <= '112.8')?'red':(gfbDecContents.kpi3 > '112.8' && gfbDecContents.kpi3 <= '150.4')?'orange':(gfbDecContents.kpi3 > '150.4' && gfbDecContents.kpi3 < '188')?'yellow-7':(gfbDecContents.kpi3 >= '188' && gfbDecContents.kpi3 < '225.6')?'green':(gfbDecContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbDecContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                                <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbJanContents.kpi1 == null)?'grey-2':(gfbJanContents.kpi1 >= '0' && gfbJanContents.kpi1 <= '232.6')?'red':(gfbJanContents.kpi1 > '232.6' && gfbJanContents.kpi1 <= '310.1333333')?'orange':(gfbJanContents.kpi1 > '310.1333333' && gfbJanContents.kpi1 < '387.6666667')?'yellow-7':(gfbJanContents.kpi1 >= '387.6666667' && gfbJanContents.kpi1 < '465.2')?'green':(gfbJanContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbJanContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJanContents.kpi2 == null)?'grey-2':(gfbJanContents.kpi2 >= '0' && gfbJanContents.kpi2 <= '148')?'red':(gfbJanContents.kpi2 > '148' && gfbJanContents.kpi2 <= '197.3333333')?'orange':(gfbJanContents.kpi2 > '197.3333333' && gfbJanContents.kpi2 < '246.6666667')?'yellow-7':(gfbJanContents.kpi2 >= '246.6666667' && gfbJanContents.kpi2 < '296')?'green':(gfbJanContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbJanContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJanContents.kpi3 == null)?'grey-2':(gfbJanContents.kpi3 >= '0' && gfbJanContents.kpi3 <= '112.8')?'red':(gfbJanContents.kpi3 > '112.8' && gfbJanContents.kpi3 <= '150.4')?'orange':(gfbJanContents.kpi3 > '150.4' && gfbJanContents.kpi3 < '188')?'yellow-7':(gfbJanContents.kpi3 >= '188' && gfbJanContents.kpi3 < '225.6')?'green':(gfbJanContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbJanContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbFebContents.kpi1 == null)?'grey-2':(gfbFebContents.kpi1 >= '0' && gfbFebContents.kpi1 <= '232.6')?'red':(gfbFebContents.kpi1 > '232.6' && gfbFebContents.kpi1 <= '310.1333333')?'orange':(gfbFebContents.kpi1 > '310.1333333' && gfbFebContents.kpi1 < '387.6666667')?'yellow-7':(gfbFebContents.kpi1 >= '387.6666667' && gfbFebContents.kpi1 < '465.2')?'green':(gfbFebContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbFebContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbFebContents.kpi2 == null)?'grey-2':(gfbFebContents.kpi2 >= '0' && gfbFebContents.kpi2 <= '148')?'red':(gfbFebContents.kpi2 > '148' && gfbFebContents.kpi2 <= '197.3333333')?'orange':(gfbFebContents.kpi2 > '197.3333333' && gfbFebContents.kpi2 < '246.6666667')?'yellow-7':(gfbFebContents.kpi2 >= '246.6666667' && gfbFebContents.kpi2 < '296')?'green':(gfbFebContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbFebContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbFebContents.kpi3 == null)?'grey-2':(gfbFebContents.kpi3 >= '0' && gfbFebContents.kpi3 <= '112.8')?'red':(gfbFebContents.kpi3 > '112.8' && gfbFebContents.kpi3 <= '150.4')?'orange':(gfbFebContents.kpi3 > '150.4' && gfbFebContents.kpi3 < '188')?'yellow-7':(gfbFebContents.kpi3 >= '188' && gfbFebContents.kpi3 < '225.6')?'green':(gfbFebContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbFebContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbMarContents.kpi1 == null)?'grey-2':(gfbMarContents.kpi1 >= '0' && gfbMarContents.kpi1 <= '232.6')?'red':(gfbMarContents.kpi1 > '232.6' && gfbMarContents.kpi1 <= '310.1333333')?'orange':(gfbMarContents.kpi1 > '310.1333333' && gfbMarContents.kpi1 < '387.6666667')?'yellow-7':(gfbMarContents.kpi1 >= '387.6666667' && gfbMarContents.kpi1 < '465.2')?'green':(gfbMarContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbMarContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbMarContents.kpi2 == null)?'grey-2':(gfbMarContents.kpi2 >= '0' && gfbMarContents.kpi2 <= '148')?'red':(gfbMarContents.kpi2 > '148' && gfbMarContents.kpi2 <= '197.3333333')?'orange':(gfbMarContents.kpi2 > '197.3333333' && gfbMarContents.kpi2 < '246.6666667')?'yellow-7':(gfbMarContents.kpi2 >= '246.6666667' && gfbMarContents.kpi2 < '296')?'green':(gfbMarContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbMarContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbMarContents.kpi3 == null)?'grey-2':(gfbMarContents.kpi3 >= '0' && gfbMarContents.kpi3 <= '112.8')?'red':(gfbMarContents.kpi3 > '112.8' && gfbMarContents.kpi3 <= '150.4')?'orange':(gfbMarContents.kpi3 > '150.4' && gfbMarContents.kpi3 < '188')?'yellow-7':(gfbMarContents.kpi3 >= '188' && gfbMarContents.kpi3 < '225.6')?'green':(gfbMarContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbMarContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbAprContents.kpi1 == null)?'grey-2':(gfbAprContents.kpi1 >= '0' && gfbAprContents.kpi1 <= '232.6')?'red':(gfbAprContents.kpi1 > '232.6' && gfbAprContents.kpi1 <= '310.1333333')?'orange':(gfbAprContents.kpi1 > '310.1333333' && gfbAprContents.kpi1 < '387.6666667')?'yellow-7':(gfbAprContents.kpi1 >= '387.6666667' && gfbAprContents.kpi1 < '465.2')?'green':(gfbAprContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbAprContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbAprContents.kpi2 == null)?'grey-2':(gfbAprContents.kpi2 >= '0' && gfbAprContents.kpi2 <= '148')?'red':(gfbAprContents.kpi2 > '148' && gfbAprContents.kpi2 <= '197.3333333')?'orange':(gfbAprContents.kpi2 > '197.3333333' && gfbAprContents.kpi2 < '246.6666667')?'yellow-7':(gfbAprContents.kpi2 >= '246.6666667' && gfbAprContents.kpi2 < '296')?'green':(gfbAprContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbAprContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbAprContents.kpi3 == null)?'grey-2':(gfbAprContents.kpi3 >= '0' && gfbAprContents.kpi3 <= '112.8')?'red':(gfbAprContents.kpi3 > '112.8' && gfbAprContents.kpi3 <= '150.4')?'orange':(gfbAprContents.kpi3 > '150.4' && gfbAprContents.kpi3 < '188')?'yellow-7':(gfbAprContents.kpi3 >= '188' && gfbAprContents.kpi3 < '225.6')?'green':(gfbAprContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbAprContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbMayContents.kpi1 == null)?'grey-2':(gfbMayContents.kpi1 >= '0' && gfbMayContents.kpi1 <= '232.6')?'red':(gfbMayContents.kpi1 > '232.6' && gfbMayContents.kpi1 <= '310.1333333')?'orange':(gfbMayContents.kpi1 > '310.1333333' && gfbMayContents.kpi1 < '387.6666667')?'yellow-7':(gfbMayContents.kpi1 >= '387.6666667' && gfbMayContents.kpi1 < '465.2')?'green':(gfbMayContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbMayContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbMayContents.kpi2 == null)?'grey-2':(gfbMayContents.kpi2 >= '0' && gfbMayContents.kpi2 <= '148')?'red':(gfbMayContents.kpi2 > '148' && gfbMayContents.kpi2 <= '197.3333333')?'orange':(gfbMayContents.kpi2 > '197.3333333' && gfbMayContents.kpi2 < '246.6666667')?'yellow-7':(gfbMayContents.kpi2 >= '246.6666667' && gfbMayContents.kpi2 < '296')?'green':(gfbMayContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbMayContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbMayContents.kpi3 == null)?'grey-2':(gfbMayContents.kpi3 >= '0' && gfbMayContents.kpi3 <= '112.8')?'red':(gfbMayContents.kpi3 > '112.8' && gfbMayContents.kpi3 <= '150.4')?'orange':(gfbMayContents.kpi3 > '150.4' && gfbMayContents.kpi3 < '188')?'yellow-7':(gfbMayContents.kpi3 >= '188' && gfbMayContents.kpi3 < '225.6')?'green':(gfbMayContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbMayContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbJunContents.kpi1 == null)?'grey-2':(gfbJunContents.kpi1 >= '0' && gfbJunContents.kpi1 <= '232.6')?'red':(gfbJunContents.kpi1 > '232.6' && gfbJunContents.kpi1 <= '310.1333333')?'orange':(gfbJunContents.kpi1 > '310.1333333' && gfbJunContents.kpi1 < '387.6666667')?'yellow-7':(gfbJunContents.kpi1 >= '387.6666667' && gfbJunContents.kpi1 < '465.2')?'green':(gfbJunContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbJunContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJunContents.kpi2 == null)?'grey-2':(gfbJunContents.kpi2 >= '0' && gfbJunContents.kpi2 <= '148')?'red':(gfbJunContents.kpi2 > '148' && gfbJunContents.kpi2 <= '197.3333333')?'orange':(gfbJunContents.kpi2 > '197.3333333' && gfbJunContents.kpi2 < '246.6666667')?'yellow-7':(gfbJunContents.kpi2 >= '246.6666667' && gfbJunContents.kpi2 < '296')?'green':(gfbJunContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbJunContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJunContents.kpi3 == null)?'grey-2':(gfbJunContents.kpi3 >= '0' && gfbJunContents.kpi3 <= '112.8')?'red':(gfbJunContents.kpi3 > '112.8' && gfbJunContents.kpi3 <= '150.4')?'orange':(gfbJunContents.kpi3 > '150.4' && gfbJunContents.kpi3 < '188')?'yellow-7':(gfbJunContents.kpi3 >= '188' && gfbJunContents.kpi3 < '225.6')?'green':(gfbJunContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbJunContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbJulContents.kpi1 == null)?'grey-2':(gfbJulContents.kpi1 >= '0' && gfbJulContents.kpi1 <= '232.6')?'red':(gfbJulContents.kpi1 > '232.6' && gfbJulContents.kpi1 <= '310.1333333')?'orange':(gfbJulContents.kpi1 > '310.1333333' && gfbJulContents.kpi1 < '387.6666667')?'yellow-7':(gfbJulContents.kpi1 >= '387.6666667' && gfbJulContents.kpi1 < '465.2')?'green':(gfbJulContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbJulContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJulContents.kpi2 == null)?'grey-2':(gfbJulContents.kpi2 >= '0' && gfbJulContents.kpi2 <= '148')?'red':(gfbJulContents.kpi2 > '148' && gfbJulContents.kpi2 <= '197.3333333')?'orange':(gfbJulContents.kpi2 > '197.3333333' && gfbJulContents.kpi2 < '246.6666667')?'yellow-7':(gfbJulContents.kpi2 >= '246.6666667' && gfbJulContents.kpi2 < '296')?'green':(gfbJulContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbJulContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJulContents.kpi3 == null)?'grey-2':(gfbJulContents.kpi3 >= '0' && gfbJulContents.kpi3 <= '112.8')?'red':(gfbJulContents.kpi3 > '112.8' && gfbJulContents.kpi3 <= '150.4')?'orange':(gfbJulContents.kpi3 > '150.4' && gfbJulContents.kpi3 < '188')?'yellow-7':(gfbJulContents.kpi3 >= '188' && gfbJulContents.kpi3 < '225.6')?'green':(gfbJulContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbJulContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbAugContents.kpi1 == null)?'grey-2':(gfbAugContents.kpi1 >= '0' && gfbAugContents.kpi1 <= '232.6')?'red':(gfbAugContents.kpi1 > '232.6' && gfbAugContents.kpi1 <= '310.1333333')?'orange':(gfbAugContents.kpi1 > '310.1333333' && gfbAugContents.kpi1 < '387.6666667')?'yellow-7':(gfbAugContents.kpi1 >= '387.6666667' && gfbAugContents.kpi1 < '465.2')?'green':(gfbAugContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbAugContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbAugContents.kpi2 == null)?'grey-2':(gfbAugContents.kpi2 >= '0' && gfbAugContents.kpi2 <= '148')?'red':(gfbAugContents.kpi2 > '148' && gfbAugContents.kpi2 <= '197.3333333')?'orange':(gfbAugContents.kpi2 > '197.3333333' && gfbAugContents.kpi2 < '246.6666667')?'yellow-7':(gfbAugContents.kpi2 >= '246.6666667' && gfbAugContents.kpi2 < '296')?'green':(gfbAugContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbAugContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbAugContents.kpi3 == null)?'grey-2':(gfbAugContents.kpi3 >= '0' && gfbAugContents.kpi3 <= '112.8')?'red':(gfbAugContents.kpi3 > '112.8' && gfbAugContents.kpi3 <= '150.4')?'orange':(gfbAugContents.kpi3 > '150.4' && gfbAugContents.kpi3 < '188')?'yellow-7':(gfbAugContents.kpi3 >= '188' && gfbAugContents.kpi3 < '225.6')?'green':(gfbAugContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbAugContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbSepContents.kpi1 == null)?'grey-2':(gfbSepContents.kpi1 >= '0' && gfbSepContents.kpi1 <= '232.6')?'red':(gfbSepContents.kpi1 > '232.6' && gfbSepContents.kpi1 <= '310.1333333')?'orange':(gfbSepContents.kpi1 > '310.1333333' && gfbSepContents.kpi1 < '387.6666667')?'yellow-7':(gfbSepContents.kpi1 >= '387.6666667' && gfbSepContents.kpi1 < '465.2')?'green':(gfbSepContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbSepContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbSepContents.kpi2 == null)?'grey-2':(gfbSepContents.kpi2 >= '0' && gfbSepContents.kpi2 <= '148')?'red':(gfbSepContents.kpi2 > '148' && gfbSepContents.kpi2 <= '197.3333333')?'orange':(gfbSepContents.kpi2 > '197.3333333' && gfbSepContents.kpi2 < '246.6666667')?'yellow-7':(gfbSepContents.kpi2 >= '246.6666667' && gfbSepContents.kpi2 < '296')?'green':(gfbSepContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbSepContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbSepContents.kpi3 == null)?'grey-2':(gfbSepContents.kpi3 >= '0' && gfbSepContents.kpi3 <= '112.8')?'red':(gfbSepContents.kpi3 > '112.8' && gfbSepContents.kpi3 <= '150.4')?'orange':(gfbSepContents.kpi3 > '150.4' && gfbSepContents.kpi3 < '188')?'yellow-7':(gfbSepContents.kpi3 >= '188' && gfbSepContents.kpi3 < '225.6')?'green':(gfbSepContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbSepContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbOctContents.kpi1 == null)?'grey-2':(gfbOctContents.kpi1 >= '0' && gfbOctContents.kpi1 <= '232.6')?'red':(gfbOctContents.kpi1 > '232.6' && gfbOctContents.kpi1 <= '310.1333333')?'orange':(gfbOctContents.kpi1 > '310.1333333' && gfbOctContents.kpi1 < '387.6666667')?'yellow-7':(gfbOctContents.kpi1 >= '387.6666667' && gfbOctContents.kpi1 < '465.2')?'green':(gfbOctContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbOctContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbOctContents.kpi2 == null)?'grey-2':(gfbOctContents.kpi2 >= '0' && gfbOctContents.kpi2 <= '148')?'red':(gfbOctContents.kpi2 > '148' && gfbOctContents.kpi2 <= '197.3333333')?'orange':(gfbOctContents.kpi2 > '197.3333333' && gfbOctContents.kpi2 < '246.6666667')?'yellow-7':(gfbOctContents.kpi2 >= '246.6666667' && gfbOctContents.kpi2 < '296')?'green':(gfbOctContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbOctContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbOctContents.kpi3 == null)?'grey-2':(gfbOctContents.kpi3 >= '0' && gfbOctContents.kpi3 <= '112.8')?'red':(gfbOctContents.kpi3 > '112.8' && gfbOctContents.kpi3 <= '150.4')?'orange':(gfbOctContents.kpi3 > '150.4' && gfbOctContents.kpi3 < '188')?'yellow-7':(gfbOctContents.kpi3 >= '188' && gfbOctContents.kpi3 < '225.6')?'green':(gfbOctContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbOctContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbNovContents.kpi1 == null)?'grey-2':(gfbNovContents.kpi1 >= '0' && gfbNovContents.kpi1 <= '232.6')?'red':(gfbNovContents.kpi1 > '232.6' && gfbNovContents.kpi1 <= '310.1333333')?'orange':(gfbNovContents.kpi1 > '310.1333333' && gfbNovContents.kpi1 < '387.6666667')?'yellow-7':(gfbNovContents.kpi1 >= '387.6666667' && gfbNovContents.kpi1 < '465.2')?'green':(gfbNovContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbNovContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbNovContents.kpi2 == null)?'grey-2':(gfbNovContents.kpi2 >= '0' && gfbNovContents.kpi2 <= '148')?'red':(gfbNovContents.kpi2 > '148' && gfbNovContents.kpi2 <= '197.3333333')?'orange':(gfbNovContents.kpi2 > '197.3333333' && gfbNovContents.kpi2 < '246.6666667')?'yellow-7':(gfbNovContents.kpi2 >= '246.6666667' && gfbNovContents.kpi2 < '296')?'green':(gfbNovContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbNovContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbNovContents.kpi3 == null)?'grey-2':(gfbNovContents.kpi3 >= '0' && gfbNovContents.kpi3 <= '112.8')?'red':(gfbNovContents.kpi3 > '112.8' && gfbNovContents.kpi3 <= '150.4')?'orange':(gfbNovContents.kpi3 > '150.4' && gfbNovContents.kpi3 < '188')?'yellow-7':(gfbNovContents.kpi3 >= '188' && gfbNovContents.kpi3 < '225.6')?'green':(gfbNovContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbNovContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbDecContents.kpi1 == null)?'grey-2':(gfbDecContents.kpi1 >= '0' && gfbDecContents.kpi1 <= '232.6')?'red':(gfbDecContents.kpi1 > '232.6' && gfbDecContents.kpi1 <= '310.1333333')?'orange':(gfbDecContents.kpi1 > '310.1333333' && gfbDecContents.kpi1 < '387.6666667')?'yellow-7':(gfbDecContents.kpi1 >= '387.6666667' && gfbDecContents.kpi1 < '465.2')?'green':(gfbDecContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbDecContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbDecContents.kpi2 == null)?'grey-2':(gfbDecContents.kpi2 >= '0' && gfbDecContents.kpi2 <= '148')?'red':(gfbDecContents.kpi2 > '148' && gfbDecContents.kpi2 <= '197.3333333')?'orange':(gfbDecContents.kpi2 > '197.3333333' && gfbDecContents.kpi2 < '246.6666667')?'yellow-7':(gfbDecContents.kpi2 >= '246.6666667' && gfbDecContents.kpi2 < '296')?'green':(gfbDecContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbDecContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbDecContents.kpi3 == null)?'grey-2':(gfbDecContents.kpi3 >= '0' && gfbDecContents.kpi3 <= '112.8')?'red':(gfbDecContents.kpi3 > '112.8' && gfbDecContents.kpi3 <= '150.4')?'orange':(gfbDecContents.kpi3 > '150.4' && gfbDecContents.kpi3 < '188')?'yellow-7':(gfbDecContents.kpi3 >= '188' && gfbDecContents.kpi3 < '225.6')?'green':(gfbDecContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbDecContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                                <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbJanContents.kpi1 == null)?'grey-2':(gfbJanContents.kpi1 >= '0' && gfbJanContents.kpi1 <= '232.6')?'red':(gfbJanContents.kpi1 > '232.6' && gfbJanContents.kpi1 <= '310.1333333')?'orange':(gfbJanContents.kpi1 > '310.1333333' && gfbJanContents.kpi1 < '387.6666667')?'yellow-7':(gfbJanContents.kpi1 >= '387.6666667' && gfbJanContents.kpi1 < '465.2')?'green':(gfbJanContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbJanContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJanContents.kpi2 == null)?'grey-2':(gfbJanContents.kpi2 >= '0' && gfbJanContents.kpi2 <= '148')?'red':(gfbJanContents.kpi2 > '148' && gfbJanContents.kpi2 <= '197.3333333')?'orange':(gfbJanContents.kpi2 > '197.3333333' && gfbJanContents.kpi2 < '246.6666667')?'yellow-7':(gfbJanContents.kpi2 >= '246.6666667' && gfbJanContents.kpi2 < '296')?'green':(gfbJanContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbJanContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJanContents.kpi3 == null)?'grey-2':(gfbJanContents.kpi3 >= '0' && gfbJanContents.kpi3 <= '112.8')?'red':(gfbJanContents.kpi3 > '112.8' && gfbJanContents.kpi3 <= '150.4')?'orange':(gfbJanContents.kpi3 > '150.4' && gfbJanContents.kpi3 < '188')?'yellow-7':(gfbJanContents.kpi3 >= '188' && gfbJanContents.kpi3 < '225.6')?'green':(gfbJanContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbJanContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbFebContents.kpi1 == null)?'grey-2':(gfbFebContents.kpi1 >= '0' && gfbFebContents.kpi1 <= '232.6')?'red':(gfbFebContents.kpi1 > '232.6' && gfbFebContents.kpi1 <= '310.1333333')?'orange':(gfbFebContents.kpi1 > '310.1333333' && gfbFebContents.kpi1 < '387.6666667')?'yellow-7':(gfbFebContents.kpi1 >= '387.6666667' && gfbFebContents.kpi1 < '465.2')?'green':(gfbFebContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbFebContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbFebContents.kpi2 == null)?'grey-2':(gfbFebContents.kpi2 >= '0' && gfbFebContents.kpi2 <= '148')?'red':(gfbFebContents.kpi2 > '148' && gfbFebContents.kpi2 <= '197.3333333')?'orange':(gfbFebContents.kpi2 > '197.3333333' && gfbFebContents.kpi2 < '246.6666667')?'yellow-7':(gfbFebContents.kpi2 >= '246.6666667' && gfbFebContents.kpi2 < '296')?'green':(gfbFebContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbFebContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbFebContents.kpi3 == null)?'grey-2':(gfbFebContents.kpi3 >= '0' && gfbFebContents.kpi3 <= '112.8')?'red':(gfbFebContents.kpi3 > '112.8' && gfbFebContents.kpi3 <= '150.4')?'orange':(gfbFebContents.kpi3 > '150.4' && gfbFebContents.kpi3 < '188')?'yellow-7':(gfbFebContents.kpi3 >= '188' && gfbFebContents.kpi3 < '225.6')?'green':(gfbFebContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbFebContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbMarContents.kpi1 == null)?'grey-2':(gfbMarContents.kpi1 >= '0' && gfbMarContents.kpi1 <= '232.6')?'red':(gfbMarContents.kpi1 > '232.6' && gfbMarContents.kpi1 <= '310.1333333')?'orange':(gfbMarContents.kpi1 > '310.1333333' && gfbMarContents.kpi1 < '387.6666667')?'yellow-7':(gfbMarContents.kpi1 >= '387.6666667' && gfbMarContents.kpi1 < '465.2')?'green':(gfbMarContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbMarContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbMarContents.kpi2 == null)?'grey-2':(gfbMarContents.kpi2 >= '0' && gfbMarContents.kpi2 <= '148')?'red':(gfbMarContents.kpi2 > '148' && gfbMarContents.kpi2 <= '197.3333333')?'orange':(gfbMarContents.kpi2 > '197.3333333' && gfbMarContents.kpi2 < '246.6666667')?'yellow-7':(gfbMarContents.kpi2 >= '246.6666667' && gfbMarContents.kpi2 < '296')?'green':(gfbMarContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbMarContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbMarContents.kpi3 == null)?'grey-2':(gfbMarContents.kpi3 >= '0' && gfbMarContents.kpi3 <= '112.8')?'red':(gfbMarContents.kpi3 > '112.8' && gfbMarContents.kpi3 <= '150.4')?'orange':(gfbMarContents.kpi3 > '150.4' && gfbMarContents.kpi3 < '188')?'yellow-7':(gfbMarContents.kpi3 >= '188' && gfbMarContents.kpi3 < '225.6')?'green':(gfbMarContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbMarContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbAprContents.kpi1 == null)?'grey-2':(gfbAprContents.kpi1 >= '0' && gfbAprContents.kpi1 <= '232.6')?'red':(gfbAprContents.kpi1 > '232.6' && gfbAprContents.kpi1 <= '310.1333333')?'orange':(gfbAprContents.kpi1 > '310.1333333' && gfbAprContents.kpi1 < '387.6666667')?'yellow-7':(gfbAprContents.kpi1 >= '387.6666667' && gfbAprContents.kpi1 < '465.2')?'green':(gfbAprContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbAprContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbAprContents.kpi2 == null)?'grey-2':(gfbAprContents.kpi2 >= '0' && gfbAprContents.kpi2 <= '148')?'red':(gfbAprContents.kpi2 > '148' && gfbAprContents.kpi2 <= '197.3333333')?'orange':(gfbAprContents.kpi2 > '197.3333333' && gfbAprContents.kpi2 < '246.6666667')?'yellow-7':(gfbAprContents.kpi2 >= '246.6666667' && gfbAprContents.kpi2 < '296')?'green':(gfbAprContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbAprContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbAprContents.kpi3 == null)?'grey-2':(gfbAprContents.kpi3 >= '0' && gfbAprContents.kpi3 <= '112.8')?'red':(gfbAprContents.kpi3 > '112.8' && gfbAprContents.kpi3 <= '150.4')?'orange':(gfbAprContents.kpi3 > '150.4' && gfbAprContents.kpi3 < '188')?'yellow-7':(gfbAprContents.kpi3 >= '188' && gfbAprContents.kpi3 < '225.6')?'green':(gfbAprContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbAprContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbMayContents.kpi1 == null)?'grey-2':(gfbMayContents.kpi1 >= '0' && gfbMayContents.kpi1 <= '232.6')?'red':(gfbMayContents.kpi1 > '232.6' && gfbMayContents.kpi1 <= '310.1333333')?'orange':(gfbMayContents.kpi1 > '310.1333333' && gfbMayContents.kpi1 < '387.6666667')?'yellow-7':(gfbMayContents.kpi1 >= '387.6666667' && gfbMayContents.kpi1 < '465.2')?'green':(gfbMayContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbMayContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbMayContents.kpi2 == null)?'grey-2':(gfbMayContents.kpi2 >= '0' && gfbMayContents.kpi2 <= '148')?'red':(gfbMayContents.kpi2 > '148' && gfbMayContents.kpi2 <= '197.3333333')?'orange':(gfbMayContents.kpi2 > '197.3333333' && gfbMayContents.kpi2 < '246.6666667')?'yellow-7':(gfbMayContents.kpi2 >= '246.6666667' && gfbMayContents.kpi2 < '296')?'green':(gfbMayContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbMayContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbMayContents.kpi3 == null)?'grey-2':(gfbMayContents.kpi3 >= '0' && gfbMayContents.kpi3 <= '112.8')?'red':(gfbMayContents.kpi3 > '112.8' && gfbMayContents.kpi3 <= '150.4')?'orange':(gfbMayContents.kpi3 > '150.4' && gfbMayContents.kpi3 < '188')?'yellow-7':(gfbMayContents.kpi3 >= '188' && gfbMayContents.kpi3 < '225.6')?'green':(gfbMayContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbMayContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbJunContents.kpi1 == null)?'grey-2':(gfbJunContents.kpi1 >= '0' && gfbJunContents.kpi1 <= '232.6')?'red':(gfbJunContents.kpi1 > '232.6' && gfbJunContents.kpi1 <= '310.1333333')?'orange':(gfbJunContents.kpi1 > '310.1333333' && gfbJunContents.kpi1 < '387.6666667')?'yellow-7':(gfbJunContents.kpi1 >= '387.6666667' && gfbJunContents.kpi1 < '465.2')?'green':(gfbJunContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbJunContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJunContents.kpi2 == null)?'grey-2':(gfbJunContents.kpi2 >= '0' && gfbJunContents.kpi2 <= '148')?'red':(gfbJunContents.kpi2 > '148' && gfbJunContents.kpi2 <= '197.3333333')?'orange':(gfbJunContents.kpi2 > '197.3333333' && gfbJunContents.kpi2 < '246.6666667')?'yellow-7':(gfbJunContents.kpi2 >= '246.6666667' && gfbJunContents.kpi2 < '296')?'green':(gfbJunContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbJunContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJunContents.kpi3 == null)?'grey-2':(gfbJunContents.kpi3 >= '0' && gfbJunContents.kpi3 <= '112.8')?'red':(gfbJunContents.kpi3 > '112.8' && gfbJunContents.kpi3 <= '150.4')?'orange':(gfbJunContents.kpi3 > '150.4' && gfbJunContents.kpi3 < '188')?'yellow-7':(gfbJunContents.kpi3 >= '188' && gfbJunContents.kpi3 < '225.6')?'green':(gfbJunContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbJunContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbJulContents.kpi1 == null)?'grey-2':(gfbJulContents.kpi1 >= '0' && gfbJulContents.kpi1 <= '232.6')?'red':(gfbJulContents.kpi1 > '232.6' && gfbJulContents.kpi1 <= '310.1333333')?'orange':(gfbJulContents.kpi1 > '310.1333333' && gfbJulContents.kpi1 < '387.6666667')?'yellow-7':(gfbJulContents.kpi1 >= '387.6666667' && gfbJulContents.kpi1 < '465.2')?'green':(gfbJulContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbJulContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJulContents.kpi2 == null)?'grey-2':(gfbJulContents.kpi2 >= '0' && gfbJulContents.kpi2 <= '148')?'red':(gfbJulContents.kpi2 > '148' && gfbJulContents.kpi2 <= '197.3333333')?'orange':(gfbJulContents.kpi2 > '197.3333333' && gfbJulContents.kpi2 < '246.6666667')?'yellow-7':(gfbJulContents.kpi2 >= '246.6666667' && gfbJulContents.kpi2 < '296')?'green':(gfbJulContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbJulContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJulContents.kpi3 == null)?'grey-2':(gfbJulContents.kpi3 >= '0' && gfbJulContents.kpi3 <= '112.8')?'red':(gfbJulContents.kpi3 > '112.8' && gfbJulContents.kpi3 <= '150.4')?'orange':(gfbJulContents.kpi3 > '150.4' && gfbJulContents.kpi3 < '188')?'yellow-7':(gfbJulContents.kpi3 >= '188' && gfbJulContents.kpi3 < '225.6')?'green':(gfbJulContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbJulContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbAugContents.kpi1 == null)?'grey-2':(gfbAugContents.kpi1 >= '0' && gfbAugContents.kpi1 <= '232.6')?'red':(gfbAugContents.kpi1 > '232.6' && gfbAugContents.kpi1 <= '310.1333333')?'orange':(gfbAugContents.kpi1 > '310.1333333' && gfbAugContents.kpi1 < '387.6666667')?'yellow-7':(gfbAugContents.kpi1 >= '387.6666667' && gfbAugContents.kpi1 < '465.2')?'green':(gfbAugContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbAugContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbAugContents.kpi2 == null)?'grey-2':(gfbAugContents.kpi2 >= '0' && gfbAugContents.kpi2 <= '148')?'red':(gfbAugContents.kpi2 > '148' && gfbAugContents.kpi2 <= '197.3333333')?'orange':(gfbAugContents.kpi2 > '197.3333333' && gfbAugContents.kpi2 < '246.6666667')?'yellow-7':(gfbAugContents.kpi2 >= '246.6666667' && gfbAugContents.kpi2 < '296')?'green':(gfbAugContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbAugContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbAugContents.kpi3 == null)?'grey-2':(gfbAugContents.kpi3 >= '0' && gfbAugContents.kpi3 <= '112.8')?'red':(gfbAugContents.kpi3 > '112.8' && gfbAugContents.kpi3 <= '150.4')?'orange':(gfbAugContents.kpi3 > '150.4' && gfbAugContents.kpi3 < '188')?'yellow-7':(gfbAugContents.kpi3 >= '188' && gfbAugContents.kpi3 < '225.6')?'green':(gfbAugContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbAugContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbSepContents.kpi1 == null)?'grey-2':(gfbSepContents.kpi1 >= '0' && gfbSepContents.kpi1 <= '232.6')?'red':(gfbSepContents.kpi1 > '232.6' && gfbSepContents.kpi1 <= '310.1333333')?'orange':(gfbSepContents.kpi1 > '310.1333333' && gfbSepContents.kpi1 < '387.6666667')?'yellow-7':(gfbSepContents.kpi1 >= '387.6666667' && gfbSepContents.kpi1 < '465.2')?'green':(gfbSepContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbSepContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbSepContents.kpi2 == null)?'grey-2':(gfbSepContents.kpi2 >= '0' && gfbSepContents.kpi2 <= '148')?'red':(gfbSepContents.kpi2 > '148' && gfbSepContents.kpi2 <= '197.3333333')?'orange':(gfbSepContents.kpi2 > '197.3333333' && gfbSepContents.kpi2 < '246.6666667')?'yellow-7':(gfbSepContents.kpi2 >= '246.6666667' && gfbSepContents.kpi2 < '296')?'green':(gfbSepContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbSepContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbSepContents.kpi3 == null)?'grey-2':(gfbSepContents.kpi3 >= '0' && gfbSepContents.kpi3 <= '112.8')?'red':(gfbSepContents.kpi3 > '112.8' && gfbSepContents.kpi3 <= '150.4')?'orange':(gfbSepContents.kpi3 > '150.4' && gfbSepContents.kpi3 < '188')?'yellow-7':(gfbSepContents.kpi3 >= '188' && gfbSepContents.kpi3 < '225.6')?'green':(gfbSepContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbSepContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbOctContents.kpi1 == null)?'grey-2':(gfbOctContents.kpi1 >= '0' && gfbOctContents.kpi1 <= '232.6')?'red':(gfbOctContents.kpi1 > '232.6' && gfbOctContents.kpi1 <= '310.1333333')?'orange':(gfbOctContents.kpi1 > '310.1333333' && gfbOctContents.kpi1 < '387.6666667')?'yellow-7':(gfbOctContents.kpi1 >= '387.6666667' && gfbOctContents.kpi1 < '465.2')?'green':(gfbOctContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbOctContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbOctContents.kpi2 == null)?'grey-2':(gfbOctContents.kpi2 >= '0' && gfbOctContents.kpi2 <= '148')?'red':(gfbOctContents.kpi2 > '148' && gfbOctContents.kpi2 <= '197.3333333')?'orange':(gfbOctContents.kpi2 > '197.3333333' && gfbOctContents.kpi2 < '246.6666667')?'yellow-7':(gfbOctContents.kpi2 >= '246.6666667' && gfbOctContents.kpi2 < '296')?'green':(gfbOctContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbOctContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbOctContents.kpi3 == null)?'grey-2':(gfbOctContents.kpi3 >= '0' && gfbOctContents.kpi3 <= '112.8')?'red':(gfbOctContents.kpi3 > '112.8' && gfbOctContents.kpi3 <= '150.4')?'orange':(gfbOctContents.kpi3 > '150.4' && gfbOctContents.kpi3 < '188')?'yellow-7':(gfbOctContents.kpi3 >= '188' && gfbOctContents.kpi3 < '225.6')?'green':(gfbOctContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbOctContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbNovContents.kpi1 == null)?'grey-2':(gfbNovContents.kpi1 >= '0' && gfbNovContents.kpi1 <= '232.6')?'red':(gfbNovContents.kpi1 > '232.6' && gfbNovContents.kpi1 <= '310.1333333')?'orange':(gfbNovContents.kpi1 > '310.1333333' && gfbNovContents.kpi1 < '387.6666667')?'yellow-7':(gfbNovContents.kpi1 >= '387.6666667' && gfbNovContents.kpi1 < '465.2')?'green':(gfbNovContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbNovContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbNovContents.kpi2 == null)?'grey-2':(gfbNovContents.kpi2 >= '0' && gfbNovContents.kpi2 <= '148')?'red':(gfbNovContents.kpi2 > '148' && gfbNovContents.kpi2 <= '197.3333333')?'orange':(gfbNovContents.kpi2 > '197.3333333' && gfbNovContents.kpi2 < '246.6666667')?'yellow-7':(gfbNovContents.kpi2 >= '246.6666667' && gfbNovContents.kpi2 < '296')?'green':(gfbNovContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbNovContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbNovContents.kpi3 == null)?'grey-2':(gfbNovContents.kpi3 >= '0' && gfbNovContents.kpi3 <= '112.8')?'red':(gfbNovContents.kpi3 > '112.8' && gfbNovContents.kpi3 <= '150.4')?'orange':(gfbNovContents.kpi3 > '150.4' && gfbNovContents.kpi3 < '188')?'yellow-7':(gfbNovContents.kpi3 >= '188' && gfbNovContents.kpi3 < '225.6')?'green':(gfbNovContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbNovContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbDecContents.kpi1 == null)?'grey-2':(gfbDecContents.kpi1 >= '0' && gfbDecContents.kpi1 <= '232.6')?'red':(gfbDecContents.kpi1 > '232.6' && gfbDecContents.kpi1 <= '310.1333333')?'orange':(gfbDecContents.kpi1 > '310.1333333' && gfbDecContents.kpi1 < '387.6666667')?'yellow-7':(gfbDecContents.kpi1 >= '387.6666667' && gfbDecContents.kpi1 < '465.2')?'green':(gfbDecContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbDecContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbDecContents.kpi2 == null)?'grey-2':(gfbDecContents.kpi2 >= '0' && gfbDecContents.kpi2 <= '148')?'red':(gfbDecContents.kpi2 > '148' && gfbDecContents.kpi2 <= '197.3333333')?'orange':(gfbDecContents.kpi2 > '197.3333333' && gfbDecContents.kpi2 < '246.6666667')?'yellow-7':(gfbDecContents.kpi2 >= '246.6666667' && gfbDecContents.kpi2 < '296')?'green':(gfbDecContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbDecContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbDecContents.kpi3 == null)?'grey-2':(gfbDecContents.kpi3 >= '0' && gfbDecContents.kpi3 <= '112.8')?'red':(gfbDecContents.kpi3 > '112.8' && gfbDecContents.kpi3 <= '150.4')?'orange':(gfbDecContents.kpi3 > '150.4' && gfbDecContents.kpi3 < '188')?'yellow-7':(gfbDecContents.kpi3 >= '188' && gfbDecContents.kpi3 < '225.6')?'green':(gfbDecContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbDecContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                                <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbJanContents.kpi1 == null)?'grey-2':(gfbJanContents.kpi1 >= '0' && gfbJanContents.kpi1 <= '232.6')?'red':(gfbJanContents.kpi1 > '232.6' && gfbJanContents.kpi1 <= '310.1333333')?'orange':(gfbJanContents.kpi1 > '310.1333333' && gfbJanContents.kpi1 < '387.6666667')?'yellow-7':(gfbJanContents.kpi1 >= '387.6666667' && gfbJanContents.kpi1 < '465.2')?'green':(gfbJanContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbJanContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJanContents.kpi2 == null)?'grey-2':(gfbJanContents.kpi2 >= '0' && gfbJanContents.kpi2 <= '148')?'red':(gfbJanContents.kpi2 > '148' && gfbJanContents.kpi2 <= '197.3333333')?'orange':(gfbJanContents.kpi2 > '197.3333333' && gfbJanContents.kpi2 < '246.6666667')?'yellow-7':(gfbJanContents.kpi2 >= '246.6666667' && gfbJanContents.kpi2 < '296')?'green':(gfbJanContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbJanContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJanContents.kpi3 == null)?'grey-2':(gfbJanContents.kpi3 >= '0' && gfbJanContents.kpi3 <= '112.8')?'red':(gfbJanContents.kpi3 > '112.8' && gfbJanContents.kpi3 <= '150.4')?'orange':(gfbJanContents.kpi3 > '150.4' && gfbJanContents.kpi3 < '188')?'yellow-7':(gfbJanContents.kpi3 >= '188' && gfbJanContents.kpi3 < '225.6')?'green':(gfbJanContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbJanContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbFebContents.kpi1 == null)?'grey-2':(gfbFebContents.kpi1 >= '0' && gfbFebContents.kpi1 <= '232.6')?'red':(gfbFebContents.kpi1 > '232.6' && gfbFebContents.kpi1 <= '310.1333333')?'orange':(gfbFebContents.kpi1 > '310.1333333' && gfbFebContents.kpi1 < '387.6666667')?'yellow-7':(gfbFebContents.kpi1 >= '387.6666667' && gfbFebContents.kpi1 < '465.2')?'green':(gfbFebContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbFebContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbFebContents.kpi2 == null)?'grey-2':(gfbFebContents.kpi2 >= '0' && gfbFebContents.kpi2 <= '148')?'red':(gfbFebContents.kpi2 > '148' && gfbFebContents.kpi2 <= '197.3333333')?'orange':(gfbFebContents.kpi2 > '197.3333333' && gfbFebContents.kpi2 < '246.6666667')?'yellow-7':(gfbFebContents.kpi2 >= '246.6666667' && gfbFebContents.kpi2 < '296')?'green':(gfbFebContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbFebContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbFebContents.kpi3 == null)?'grey-2':(gfbFebContents.kpi3 >= '0' && gfbFebContents.kpi3 <= '112.8')?'red':(gfbFebContents.kpi3 > '112.8' && gfbFebContents.kpi3 <= '150.4')?'orange':(gfbFebContents.kpi3 > '150.4' && gfbFebContents.kpi3 < '188')?'yellow-7':(gfbFebContents.kpi3 >= '188' && gfbFebContents.kpi3 < '225.6')?'green':(gfbFebContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbFebContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbMarContents.kpi1 == null)?'grey-2':(gfbMarContents.kpi1 >= '0' && gfbMarContents.kpi1 <= '232.6')?'red':(gfbMarContents.kpi1 > '232.6' && gfbMarContents.kpi1 <= '310.1333333')?'orange':(gfbMarContents.kpi1 > '310.1333333' && gfbMarContents.kpi1 < '387.6666667')?'yellow-7':(gfbMarContents.kpi1 >= '387.6666667' && gfbMarContents.kpi1 < '465.2')?'green':(gfbMarContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbMarContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbMarContents.kpi2 == null)?'grey-2':(gfbMarContents.kpi2 >= '0' && gfbMarContents.kpi2 <= '148')?'red':(gfbMarContents.kpi2 > '148' && gfbMarContents.kpi2 <= '197.3333333')?'orange':(gfbMarContents.kpi2 > '197.3333333' && gfbMarContents.kpi2 < '246.6666667')?'yellow-7':(gfbMarContents.kpi2 >= '246.6666667' && gfbMarContents.kpi2 < '296')?'green':(gfbMarContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbMarContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbMarContents.kpi3 == null)?'grey-2':(gfbMarContents.kpi3 >= '0' && gfbMarContents.kpi3 <= '112.8')?'red':(gfbMarContents.kpi3 > '112.8' && gfbMarContents.kpi3 <= '150.4')?'orange':(gfbMarContents.kpi3 > '150.4' && gfbMarContents.kpi3 < '188')?'yellow-7':(gfbMarContents.kpi3 >= '188' && gfbMarContents.kpi3 < '225.6')?'green':(gfbMarContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbMarContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbAprContents.kpi1 == null)?'grey-2':(gfbAprContents.kpi1 >= '0' && gfbAprContents.kpi1 <= '232.6')?'red':(gfbAprContents.kpi1 > '232.6' && gfbAprContents.kpi1 <= '310.1333333')?'orange':(gfbAprContents.kpi1 > '310.1333333' && gfbAprContents.kpi1 < '387.6666667')?'yellow-7':(gfbAprContents.kpi1 >= '387.6666667' && gfbAprContents.kpi1 < '465.2')?'green':(gfbAprContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbAprContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbAprContents.kpi2 == null)?'grey-2':(gfbAprContents.kpi2 >= '0' && gfbAprContents.kpi2 <= '148')?'red':(gfbAprContents.kpi2 > '148' && gfbAprContents.kpi2 <= '197.3333333')?'orange':(gfbAprContents.kpi2 > '197.3333333' && gfbAprContents.kpi2 < '246.6666667')?'yellow-7':(gfbAprContents.kpi2 >= '246.6666667' && gfbAprContents.kpi2 < '296')?'green':(gfbAprContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbAprContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbAprContents.kpi3 == null)?'grey-2':(gfbAprContents.kpi3 >= '0' && gfbAprContents.kpi3 <= '112.8')?'red':(gfbAprContents.kpi3 > '112.8' && gfbAprContents.kpi3 <= '150.4')?'orange':(gfbAprContents.kpi3 > '150.4' && gfbAprContents.kpi3 < '188')?'yellow-7':(gfbAprContents.kpi3 >= '188' && gfbAprContents.kpi3 < '225.6')?'green':(gfbAprContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbAprContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbMayContents.kpi1 == null)?'grey-2':(gfbMayContents.kpi1 >= '0' && gfbMayContents.kpi1 <= '232.6')?'red':(gfbMayContents.kpi1 > '232.6' && gfbMayContents.kpi1 <= '310.1333333')?'orange':(gfbMayContents.kpi1 > '310.1333333' && gfbMayContents.kpi1 < '387.6666667')?'yellow-7':(gfbMayContents.kpi1 >= '387.6666667' && gfbMayContents.kpi1 < '465.2')?'green':(gfbMayContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbMayContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbMayContents.kpi2 == null)?'grey-2':(gfbMayContents.kpi2 >= '0' && gfbMayContents.kpi2 <= '148')?'red':(gfbMayContents.kpi2 > '148' && gfbMayContents.kpi2 <= '197.3333333')?'orange':(gfbMayContents.kpi2 > '197.3333333' && gfbMayContents.kpi2 < '246.6666667')?'yellow-7':(gfbMayContents.kpi2 >= '246.6666667' && gfbMayContents.kpi2 < '296')?'green':(gfbMayContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbMayContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbMayContents.kpi3 == null)?'grey-2':(gfbMayContents.kpi3 >= '0' && gfbMayContents.kpi3 <= '112.8')?'red':(gfbMayContents.kpi3 > '112.8' && gfbMayContents.kpi3 <= '150.4')?'orange':(gfbMayContents.kpi3 > '150.4' && gfbMayContents.kpi3 < '188')?'yellow-7':(gfbMayContents.kpi3 >= '188' && gfbMayContents.kpi3 < '225.6')?'green':(gfbMayContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbMayContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbJunContents.kpi1 == null)?'grey-2':(gfbJunContents.kpi1 >= '0' && gfbJunContents.kpi1 <= '232.6')?'red':(gfbJunContents.kpi1 > '232.6' && gfbJunContents.kpi1 <= '310.1333333')?'orange':(gfbJunContents.kpi1 > '310.1333333' && gfbJunContents.kpi1 < '387.6666667')?'yellow-7':(gfbJunContents.kpi1 >= '387.6666667' && gfbJunContents.kpi1 < '465.2')?'green':(gfbJunContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbJunContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJunContents.kpi2 == null)?'grey-2':(gfbJunContents.kpi2 >= '0' && gfbJunContents.kpi2 <= '148')?'red':(gfbJunContents.kpi2 > '148' && gfbJunContents.kpi2 <= '197.3333333')?'orange':(gfbJunContents.kpi2 > '197.3333333' && gfbJunContents.kpi2 < '246.6666667')?'yellow-7':(gfbJunContents.kpi2 >= '246.6666667' && gfbJunContents.kpi2 < '296')?'green':(gfbJunContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbJunContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJunContents.kpi3 == null)?'grey-2':(gfbJunContents.kpi3 >= '0' && gfbJunContents.kpi3 <= '112.8')?'red':(gfbJunContents.kpi3 > '112.8' && gfbJunContents.kpi3 <= '150.4')?'orange':(gfbJunContents.kpi3 > '150.4' && gfbJunContents.kpi3 < '188')?'yellow-7':(gfbJunContents.kpi3 >= '188' && gfbJunContents.kpi3 < '225.6')?'green':(gfbJunContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbJunContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbJulContents.kpi1 == null)?'grey-2':(gfbJulContents.kpi1 >= '0' && gfbJulContents.kpi1 <= '232.6')?'red':(gfbJulContents.kpi1 > '232.6' && gfbJulContents.kpi1 <= '310.1333333')?'orange':(gfbJulContents.kpi1 > '310.1333333' && gfbJulContents.kpi1 < '387.6666667')?'yellow-7':(gfbJulContents.kpi1 >= '387.6666667' && gfbJulContents.kpi1 < '465.2')?'green':(gfbJulContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbJulContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJulContents.kpi2 == null)?'grey-2':(gfbJulContents.kpi2 >= '0' && gfbJulContents.kpi2 <= '148')?'red':(gfbJulContents.kpi2 > '148' && gfbJulContents.kpi2 <= '197.3333333')?'orange':(gfbJulContents.kpi2 > '197.3333333' && gfbJulContents.kpi2 < '246.6666667')?'yellow-7':(gfbJulContents.kpi2 >= '246.6666667' && gfbJulContents.kpi2 < '296')?'green':(gfbJulContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbJulContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJulContents.kpi3 == null)?'grey-2':(gfbJulContents.kpi3 >= '0' && gfbJulContents.kpi3 <= '112.8')?'red':(gfbJulContents.kpi3 > '112.8' && gfbJulContents.kpi3 <= '150.4')?'orange':(gfbJulContents.kpi3 > '150.4' && gfbJulContents.kpi3 < '188')?'yellow-7':(gfbJulContents.kpi3 >= '188' && gfbJulContents.kpi3 < '225.6')?'green':(gfbJulContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbJulContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbAugContents.kpi1 == null)?'grey-2':(gfbAugContents.kpi1 >= '0' && gfbAugContents.kpi1 <= '232.6')?'red':(gfbAugContents.kpi1 > '232.6' && gfbAugContents.kpi1 <= '310.1333333')?'orange':(gfbAugContents.kpi1 > '310.1333333' && gfbAugContents.kpi1 < '387.6666667')?'yellow-7':(gfbAugContents.kpi1 >= '387.6666667' && gfbAugContents.kpi1 < '465.2')?'green':(gfbAugContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbAugContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbAugContents.kpi2 == null)?'grey-2':(gfbAugContents.kpi2 >= '0' && gfbAugContents.kpi2 <= '148')?'red':(gfbAugContents.kpi2 > '148' && gfbAugContents.kpi2 <= '197.3333333')?'orange':(gfbAugContents.kpi2 > '197.3333333' && gfbAugContents.kpi2 < '246.6666667')?'yellow-7':(gfbAugContents.kpi2 >= '246.6666667' && gfbAugContents.kpi2 < '296')?'green':(gfbAugContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbAugContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbAugContents.kpi3 == null)?'grey-2':(gfbAugContents.kpi3 >= '0' && gfbAugContents.kpi3 <= '112.8')?'red':(gfbAugContents.kpi3 > '112.8' && gfbAugContents.kpi3 <= '150.4')?'orange':(gfbAugContents.kpi3 > '150.4' && gfbAugContents.kpi3 < '188')?'yellow-7':(gfbAugContents.kpi3 >= '188' && gfbAugContents.kpi3 < '225.6')?'green':(gfbAugContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbAugContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbSepContents.kpi1 == null)?'grey-2':(gfbSepContents.kpi1 >= '0' && gfbSepContents.kpi1 <= '232.6')?'red':(gfbSepContents.kpi1 > '232.6' && gfbSepContents.kpi1 <= '310.1333333')?'orange':(gfbSepContents.kpi1 > '310.1333333' && gfbSepContents.kpi1 < '387.6666667')?'yellow-7':(gfbSepContents.kpi1 >= '387.6666667' && gfbSepContents.kpi1 < '465.2')?'green':(gfbSepContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbSepContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbSepContents.kpi2 == null)?'grey-2':(gfbSepContents.kpi2 >= '0' && gfbSepContents.kpi2 <= '148')?'red':(gfbSepContents.kpi2 > '148' && gfbSepContents.kpi2 <= '197.3333333')?'orange':(gfbSepContents.kpi2 > '197.3333333' && gfbSepContents.kpi2 < '246.6666667')?'yellow-7':(gfbSepContents.kpi2 >= '246.6666667' && gfbSepContents.kpi2 < '296')?'green':(gfbSepContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbSepContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbSepContents.kpi3 == null)?'grey-2':(gfbSepContents.kpi3 >= '0' && gfbSepContents.kpi3 <= '112.8')?'red':(gfbSepContents.kpi3 > '112.8' && gfbSepContents.kpi3 <= '150.4')?'orange':(gfbSepContents.kpi3 > '150.4' && gfbSepContents.kpi3 < '188')?'yellow-7':(gfbSepContents.kpi3 >= '188' && gfbSepContents.kpi3 < '225.6')?'green':(gfbSepContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbSepContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbOctContents.kpi1 == null)?'grey-2':(gfbOctContents.kpi1 >= '0' && gfbOctContents.kpi1 <= '232.6')?'red':(gfbOctContents.kpi1 > '232.6' && gfbOctContents.kpi1 <= '310.1333333')?'orange':(gfbOctContents.kpi1 > '310.1333333' && gfbOctContents.kpi1 < '387.6666667')?'yellow-7':(gfbOctContents.kpi1 >= '387.6666667' && gfbOctContents.kpi1 < '465.2')?'green':(gfbOctContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbOctContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbOctContents.kpi2 == null)?'grey-2':(gfbOctContents.kpi2 >= '0' && gfbOctContents.kpi2 <= '148')?'red':(gfbOctContents.kpi2 > '148' && gfbOctContents.kpi2 <= '197.3333333')?'orange':(gfbOctContents.kpi2 > '197.3333333' && gfbOctContents.kpi2 < '246.6666667')?'yellow-7':(gfbOctContents.kpi2 >= '246.6666667' && gfbOctContents.kpi2 < '296')?'green':(gfbOctContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbOctContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbOctContents.kpi3 == null)?'grey-2':(gfbOctContents.kpi3 >= '0' && gfbOctContents.kpi3 <= '112.8')?'red':(gfbOctContents.kpi3 > '112.8' && gfbOctContents.kpi3 <= '150.4')?'orange':(gfbOctContents.kpi3 > '150.4' && gfbOctContents.kpi3 < '188')?'yellow-7':(gfbOctContents.kpi3 >= '188' && gfbOctContents.kpi3 < '225.6')?'green':(gfbOctContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbOctContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbNovContents.kpi1 == null)?'grey-2':(gfbNovContents.kpi1 >= '0' && gfbNovContents.kpi1 <= '232.6')?'red':(gfbNovContents.kpi1 > '232.6' && gfbNovContents.kpi1 <= '310.1333333')?'orange':(gfbNovContents.kpi1 > '310.1333333' && gfbNovContents.kpi1 < '387.6666667')?'yellow-7':(gfbNovContents.kpi1 >= '387.6666667' && gfbNovContents.kpi1 < '465.2')?'green':(gfbNovContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbNovContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbNovContents.kpi2 == null)?'grey-2':(gfbNovContents.kpi2 >= '0' && gfbNovContents.kpi2 <= '148')?'red':(gfbNovContents.kpi2 > '148' && gfbNovContents.kpi2 <= '197.3333333')?'orange':(gfbNovContents.kpi2 > '197.3333333' && gfbNovContents.kpi2 < '246.6666667')?'yellow-7':(gfbNovContents.kpi2 >= '246.6666667' && gfbNovContents.kpi2 < '296')?'green':(gfbNovContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbNovContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbNovContents.kpi3 == null)?'grey-2':(gfbNovContents.kpi3 >= '0' && gfbNovContents.kpi3 <= '112.8')?'red':(gfbNovContents.kpi3 > '112.8' && gfbNovContents.kpi3 <= '150.4')?'orange':(gfbNovContents.kpi3 > '150.4' && gfbNovContents.kpi3 < '188')?'yellow-7':(gfbNovContents.kpi3 >= '188' && gfbNovContents.kpi3 < '225.6')?'green':(gfbNovContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbNovContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbDecContents.kpi1 == null)?'grey-2':(gfbDecContents.kpi1 >= '0' && gfbDecContents.kpi1 <= '232.6')?'red':(gfbDecContents.kpi1 > '232.6' && gfbDecContents.kpi1 <= '310.1333333')?'orange':(gfbDecContents.kpi1 > '310.1333333' && gfbDecContents.kpi1 < '387.6666667')?'yellow-7':(gfbDecContents.kpi1 >= '387.6666667' && gfbDecContents.kpi1 < '465.2')?'green':(gfbDecContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbDecContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbDecContents.kpi2 == null)?'grey-2':(gfbDecContents.kpi2 >= '0' && gfbDecContents.kpi2 <= '148')?'red':(gfbDecContents.kpi2 > '148' && gfbDecContents.kpi2 <= '197.3333333')?'orange':(gfbDecContents.kpi2 > '197.3333333' && gfbDecContents.kpi2 < '246.6666667')?'yellow-7':(gfbDecContents.kpi2 >= '246.6666667' && gfbDecContents.kpi2 < '296')?'green':(gfbDecContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbDecContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbDecContents.kpi3 == null)?'grey-2':(gfbDecContents.kpi3 >= '0' && gfbDecContents.kpi3 <= '112.8')?'red':(gfbDecContents.kpi3 > '112.8' && gfbDecContents.kpi3 <= '150.4')?'orange':(gfbDecContents.kpi3 > '150.4' && gfbDecContents.kpi3 < '188')?'yellow-7':(gfbDecContents.kpi3 >= '188' && gfbDecContents.kpi3 < '225.6')?'green':(gfbDecContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbDecContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                                <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbJanContents.kpi1 == null)?'grey-2':(gfbJanContents.kpi1 >= '0' && gfbJanContents.kpi1 <= '232.6')?'red':(gfbJanContents.kpi1 > '232.6' && gfbJanContents.kpi1 <= '310.1333333')?'orange':(gfbJanContents.kpi1 > '310.1333333' && gfbJanContents.kpi1 < '387.6666667')?'yellow-7':(gfbJanContents.kpi1 >= '387.6666667' && gfbJanContents.kpi1 < '465.2')?'green':(gfbJanContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbJanContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJanContents.kpi2 == null)?'grey-2':(gfbJanContents.kpi2 >= '0' && gfbJanContents.kpi2 <= '148')?'red':(gfbJanContents.kpi2 > '148' && gfbJanContents.kpi2 <= '197.3333333')?'orange':(gfbJanContents.kpi2 > '197.3333333' && gfbJanContents.kpi2 < '246.6666667')?'yellow-7':(gfbJanContents.kpi2 >= '246.6666667' && gfbJanContents.kpi2 < '296')?'green':(gfbJanContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbJanContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJanContents.kpi3 == null)?'grey-2':(gfbJanContents.kpi3 >= '0' && gfbJanContents.kpi3 <= '112.8')?'red':(gfbJanContents.kpi3 > '112.8' && gfbJanContents.kpi3 <= '150.4')?'orange':(gfbJanContents.kpi3 > '150.4' && gfbJanContents.kpi3 < '188')?'yellow-7':(gfbJanContents.kpi3 >= '188' && gfbJanContents.kpi3 < '225.6')?'green':(gfbJanContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbJanContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbFebContents.kpi1 == null)?'grey-2':(gfbFebContents.kpi1 >= '0' && gfbFebContents.kpi1 <= '232.6')?'red':(gfbFebContents.kpi1 > '232.6' && gfbFebContents.kpi1 <= '310.1333333')?'orange':(gfbFebContents.kpi1 > '310.1333333' && gfbFebContents.kpi1 < '387.6666667')?'yellow-7':(gfbFebContents.kpi1 >= '387.6666667' && gfbFebContents.kpi1 < '465.2')?'green':(gfbFebContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbFebContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbFebContents.kpi2 == null)?'grey-2':(gfbFebContents.kpi2 >= '0' && gfbFebContents.kpi2 <= '148')?'red':(gfbFebContents.kpi2 > '148' && gfbFebContents.kpi2 <= '197.3333333')?'orange':(gfbFebContents.kpi2 > '197.3333333' && gfbFebContents.kpi2 < '246.6666667')?'yellow-7':(gfbFebContents.kpi2 >= '246.6666667' && gfbFebContents.kpi2 < '296')?'green':(gfbFebContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbFebContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbFebContents.kpi3 == null)?'grey-2':(gfbFebContents.kpi3 >= '0' && gfbFebContents.kpi3 <= '112.8')?'red':(gfbFebContents.kpi3 > '112.8' && gfbFebContents.kpi3 <= '150.4')?'orange':(gfbFebContents.kpi3 > '150.4' && gfbFebContents.kpi3 < '188')?'yellow-7':(gfbFebContents.kpi3 >= '188' && gfbFebContents.kpi3 < '225.6')?'green':(gfbFebContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbFebContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbMarContents.kpi1 == null)?'grey-2':(gfbMarContents.kpi1 >= '0' && gfbMarContents.kpi1 <= '232.6')?'red':(gfbMarContents.kpi1 > '232.6' && gfbMarContents.kpi1 <= '310.1333333')?'orange':(gfbMarContents.kpi1 > '310.1333333' && gfbMarContents.kpi1 < '387.6666667')?'yellow-7':(gfbMarContents.kpi1 >= '387.6666667' && gfbMarContents.kpi1 < '465.2')?'green':(gfbMarContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbMarContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbMarContents.kpi2 == null)?'grey-2':(gfbMarContents.kpi2 >= '0' && gfbMarContents.kpi2 <= '148')?'red':(gfbMarContents.kpi2 > '148' && gfbMarContents.kpi2 <= '197.3333333')?'orange':(gfbMarContents.kpi2 > '197.3333333' && gfbMarContents.kpi2 < '246.6666667')?'yellow-7':(gfbMarContents.kpi2 >= '246.6666667' && gfbMarContents.kpi2 < '296')?'green':(gfbMarContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbMarContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbMarContents.kpi3 == null)?'grey-2':(gfbMarContents.kpi3 >= '0' && gfbMarContents.kpi3 <= '112.8')?'red':(gfbMarContents.kpi3 > '112.8' && gfbMarContents.kpi3 <= '150.4')?'orange':(gfbMarContents.kpi3 > '150.4' && gfbMarContents.kpi3 < '188')?'yellow-7':(gfbMarContents.kpi3 >= '188' && gfbMarContents.kpi3 < '225.6')?'green':(gfbMarContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbMarContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbAprContents.kpi1 == null)?'grey-2':(gfbAprContents.kpi1 >= '0' && gfbAprContents.kpi1 <= '232.6')?'red':(gfbAprContents.kpi1 > '232.6' && gfbAprContents.kpi1 <= '310.1333333')?'orange':(gfbAprContents.kpi1 > '310.1333333' && gfbAprContents.kpi1 < '387.6666667')?'yellow-7':(gfbAprContents.kpi1 >= '387.6666667' && gfbAprContents.kpi1 < '465.2')?'green':(gfbAprContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbAprContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbAprContents.kpi2 == null)?'grey-2':(gfbAprContents.kpi2 >= '0' && gfbAprContents.kpi2 <= '148')?'red':(gfbAprContents.kpi2 > '148' && gfbAprContents.kpi2 <= '197.3333333')?'orange':(gfbAprContents.kpi2 > '197.3333333' && gfbAprContents.kpi2 < '246.6666667')?'yellow-7':(gfbAprContents.kpi2 >= '246.6666667' && gfbAprContents.kpi2 < '296')?'green':(gfbAprContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbAprContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbAprContents.kpi3 == null)?'grey-2':(gfbAprContents.kpi3 >= '0' && gfbAprContents.kpi3 <= '112.8')?'red':(gfbAprContents.kpi3 > '112.8' && gfbAprContents.kpi3 <= '150.4')?'orange':(gfbAprContents.kpi3 > '150.4' && gfbAprContents.kpi3 < '188')?'yellow-7':(gfbAprContents.kpi3 >= '188' && gfbAprContents.kpi3 < '225.6')?'green':(gfbAprContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbAprContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbMayContents.kpi1 == null)?'grey-2':(gfbMayContents.kpi1 >= '0' && gfbMayContents.kpi1 <= '232.6')?'red':(gfbMayContents.kpi1 > '232.6' && gfbMayContents.kpi1 <= '310.1333333')?'orange':(gfbMayContents.kpi1 > '310.1333333' && gfbMayContents.kpi1 < '387.6666667')?'yellow-7':(gfbMayContents.kpi1 >= '387.6666667' && gfbMayContents.kpi1 < '465.2')?'green':(gfbMayContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbMayContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbMayContents.kpi2 == null)?'grey-2':(gfbMayContents.kpi2 >= '0' && gfbMayContents.kpi2 <= '148')?'red':(gfbMayContents.kpi2 > '148' && gfbMayContents.kpi2 <= '197.3333333')?'orange':(gfbMayContents.kpi2 > '197.3333333' && gfbMayContents.kpi2 < '246.6666667')?'yellow-7':(gfbMayContents.kpi2 >= '246.6666667' && gfbMayContents.kpi2 < '296')?'green':(gfbMayContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbMayContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbMayContents.kpi3 == null)?'grey-2':(gfbMayContents.kpi3 >= '0' && gfbMayContents.kpi3 <= '112.8')?'red':(gfbMayContents.kpi3 > '112.8' && gfbMayContents.kpi3 <= '150.4')?'orange':(gfbMayContents.kpi3 > '150.4' && gfbMayContents.kpi3 < '188')?'yellow-7':(gfbMayContents.kpi3 >= '188' && gfbMayContents.kpi3 < '225.6')?'green':(gfbMayContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbMayContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbJunContents.kpi1 == null)?'grey-2':(gfbJunContents.kpi1 >= '0' && gfbJunContents.kpi1 <= '232.6')?'red':(gfbJunContents.kpi1 > '232.6' && gfbJunContents.kpi1 <= '310.1333333')?'orange':(gfbJunContents.kpi1 > '310.1333333' && gfbJunContents.kpi1 < '387.6666667')?'yellow-7':(gfbJunContents.kpi1 >= '387.6666667' && gfbJunContents.kpi1 < '465.2')?'green':(gfbJunContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbJunContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJunContents.kpi2 == null)?'grey-2':(gfbJunContents.kpi2 >= '0' && gfbJunContents.kpi2 <= '148')?'red':(gfbJunContents.kpi2 > '148' && gfbJunContents.kpi2 <= '197.3333333')?'orange':(gfbJunContents.kpi2 > '197.3333333' && gfbJunContents.kpi2 < '246.6666667')?'yellow-7':(gfbJunContents.kpi2 >= '246.6666667' && gfbJunContents.kpi2 < '296')?'green':(gfbJunContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbJunContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJunContents.kpi3 == null)?'grey-2':(gfbJunContents.kpi3 >= '0' && gfbJunContents.kpi3 <= '112.8')?'red':(gfbJunContents.kpi3 > '112.8' && gfbJunContents.kpi3 <= '150.4')?'orange':(gfbJunContents.kpi3 > '150.4' && gfbJunContents.kpi3 < '188')?'yellow-7':(gfbJunContents.kpi3 >= '188' && gfbJunContents.kpi3 < '225.6')?'green':(gfbJunContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbJunContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbJulContents.kpi1 == null)?'grey-2':(gfbJulContents.kpi1 >= '0' && gfbJulContents.kpi1 <= '232.6')?'red':(gfbJulContents.kpi1 > '232.6' && gfbJulContents.kpi1 <= '310.1333333')?'orange':(gfbJulContents.kpi1 > '310.1333333' && gfbJulContents.kpi1 < '387.6666667')?'yellow-7':(gfbJulContents.kpi1 >= '387.6666667' && gfbJulContents.kpi1 < '465.2')?'green':(gfbJulContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbJulContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJulContents.kpi2 == null)?'grey-2':(gfbJulContents.kpi2 >= '0' && gfbJulContents.kpi2 <= '148')?'red':(gfbJulContents.kpi2 > '148' && gfbJulContents.kpi2 <= '197.3333333')?'orange':(gfbJulContents.kpi2 > '197.3333333' && gfbJulContents.kpi2 < '246.6666667')?'yellow-7':(gfbJulContents.kpi2 >= '246.6666667' && gfbJulContents.kpi2 < '296')?'green':(gfbJulContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbJulContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJulContents.kpi3 == null)?'grey-2':(gfbJulContents.kpi3 >= '0' && gfbJulContents.kpi3 <= '112.8')?'red':(gfbJulContents.kpi3 > '112.8' && gfbJulContents.kpi3 <= '150.4')?'orange':(gfbJulContents.kpi3 > '150.4' && gfbJulContents.kpi3 < '188')?'yellow-7':(gfbJulContents.kpi3 >= '188' && gfbJulContents.kpi3 < '225.6')?'green':(gfbJulContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbJulContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbAugContents.kpi1 == null)?'grey-2':(gfbAugContents.kpi1 >= '0' && gfbAugContents.kpi1 <= '232.6')?'red':(gfbAugContents.kpi1 > '232.6' && gfbAugContents.kpi1 <= '310.1333333')?'orange':(gfbAugContents.kpi1 > '310.1333333' && gfbAugContents.kpi1 < '387.6666667')?'yellow-7':(gfbAugContents.kpi1 >= '387.6666667' && gfbAugContents.kpi1 < '465.2')?'green':(gfbAugContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbAugContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbAugContents.kpi2 == null)?'grey-2':(gfbAugContents.kpi2 >= '0' && gfbAugContents.kpi2 <= '148')?'red':(gfbAugContents.kpi2 > '148' && gfbAugContents.kpi2 <= '197.3333333')?'orange':(gfbAugContents.kpi2 > '197.3333333' && gfbAugContents.kpi2 < '246.6666667')?'yellow-7':(gfbAugContents.kpi2 >= '246.6666667' && gfbAugContents.kpi2 < '296')?'green':(gfbAugContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbAugContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbAugContents.kpi3 == null)?'grey-2':(gfbAugContents.kpi3 >= '0' && gfbAugContents.kpi3 <= '112.8')?'red':(gfbAugContents.kpi3 > '112.8' && gfbAugContents.kpi3 <= '150.4')?'orange':(gfbAugContents.kpi3 > '150.4' && gfbAugContents.kpi3 < '188')?'yellow-7':(gfbAugContents.kpi3 >= '188' && gfbAugContents.kpi3 < '225.6')?'green':(gfbAugContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbAugContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbSepContents.kpi1 == null)?'grey-2':(gfbSepContents.kpi1 >= '0' && gfbSepContents.kpi1 <= '232.6')?'red':(gfbSepContents.kpi1 > '232.6' && gfbSepContents.kpi1 <= '310.1333333')?'orange':(gfbSepContents.kpi1 > '310.1333333' && gfbSepContents.kpi1 < '387.6666667')?'yellow-7':(gfbSepContents.kpi1 >= '387.6666667' && gfbSepContents.kpi1 < '465.2')?'green':(gfbSepContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbSepContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbSepContents.kpi2 == null)?'grey-2':(gfbSepContents.kpi2 >= '0' && gfbSepContents.kpi2 <= '148')?'red':(gfbSepContents.kpi2 > '148' && gfbSepContents.kpi2 <= '197.3333333')?'orange':(gfbSepContents.kpi2 > '197.3333333' && gfbSepContents.kpi2 < '246.6666667')?'yellow-7':(gfbSepContents.kpi2 >= '246.6666667' && gfbSepContents.kpi2 < '296')?'green':(gfbSepContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbSepContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbSepContents.kpi3 == null)?'grey-2':(gfbSepContents.kpi3 >= '0' && gfbSepContents.kpi3 <= '112.8')?'red':(gfbSepContents.kpi3 > '112.8' && gfbSepContents.kpi3 <= '150.4')?'orange':(gfbSepContents.kpi3 > '150.4' && gfbSepContents.kpi3 < '188')?'yellow-7':(gfbSepContents.kpi3 >= '188' && gfbSepContents.kpi3 < '225.6')?'green':(gfbSepContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbSepContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbOctContents.kpi1 == null)?'grey-2':(gfbOctContents.kpi1 >= '0' && gfbOctContents.kpi1 <= '232.6')?'red':(gfbOctContents.kpi1 > '232.6' && gfbOctContents.kpi1 <= '310.1333333')?'orange':(gfbOctContents.kpi1 > '310.1333333' && gfbOctContents.kpi1 < '387.6666667')?'yellow-7':(gfbOctContents.kpi1 >= '387.6666667' && gfbOctContents.kpi1 < '465.2')?'green':(gfbOctContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbOctContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbOctContents.kpi2 == null)?'grey-2':(gfbOctContents.kpi2 >= '0' && gfbOctContents.kpi2 <= '148')?'red':(gfbOctContents.kpi2 > '148' && gfbOctContents.kpi2 <= '197.3333333')?'orange':(gfbOctContents.kpi2 > '197.3333333' && gfbOctContents.kpi2 < '246.6666667')?'yellow-7':(gfbOctContents.kpi2 >= '246.6666667' && gfbOctContents.kpi2 < '296')?'green':(gfbOctContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbOctContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbOctContents.kpi3 == null)?'grey-2':(gfbOctContents.kpi3 >= '0' && gfbOctContents.kpi3 <= '112.8')?'red':(gfbOctContents.kpi3 > '112.8' && gfbOctContents.kpi3 <= '150.4')?'orange':(gfbOctContents.kpi3 > '150.4' && gfbOctContents.kpi3 < '188')?'yellow-7':(gfbOctContents.kpi3 >= '188' && gfbOctContents.kpi3 < '225.6')?'green':(gfbOctContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbOctContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbNovContents.kpi1 == null)?'grey-2':(gfbNovContents.kpi1 >= '0' && gfbNovContents.kpi1 <= '232.6')?'red':(gfbNovContents.kpi1 > '232.6' && gfbNovContents.kpi1 <= '310.1333333')?'orange':(gfbNovContents.kpi1 > '310.1333333' && gfbNovContents.kpi1 < '387.6666667')?'yellow-7':(gfbNovContents.kpi1 >= '387.6666667' && gfbNovContents.kpi1 < '465.2')?'green':(gfbNovContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbNovContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbNovContents.kpi2 == null)?'grey-2':(gfbNovContents.kpi2 >= '0' && gfbNovContents.kpi2 <= '148')?'red':(gfbNovContents.kpi2 > '148' && gfbNovContents.kpi2 <= '197.3333333')?'orange':(gfbNovContents.kpi2 > '197.3333333' && gfbNovContents.kpi2 < '246.6666667')?'yellow-7':(gfbNovContents.kpi2 >= '246.6666667' && gfbNovContents.kpi2 < '296')?'green':(gfbNovContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbNovContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbNovContents.kpi3 == null)?'grey-2':(gfbNovContents.kpi3 >= '0' && gfbNovContents.kpi3 <= '112.8')?'red':(gfbNovContents.kpi3 > '112.8' && gfbNovContents.kpi3 <= '150.4')?'orange':(gfbNovContents.kpi3 > '150.4' && gfbNovContents.kpi3 < '188')?'yellow-7':(gfbNovContents.kpi3 >= '188' && gfbNovContents.kpi3 < '225.6')?'green':(gfbNovContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbNovContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbDecContents.kpi1 == null)?'grey-2':(gfbDecContents.kpi1 >= '0' && gfbDecContents.kpi1 <= '232.6')?'red':(gfbDecContents.kpi1 > '232.6' && gfbDecContents.kpi1 <= '310.1333333')?'orange':(gfbDecContents.kpi1 > '310.1333333' && gfbDecContents.kpi1 < '387.6666667')?'yellow-7':(gfbDecContents.kpi1 >= '387.6666667' && gfbDecContents.kpi1 < '465.2')?'green':(gfbDecContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbDecContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbDecContents.kpi2 == null)?'grey-2':(gfbDecContents.kpi2 >= '0' && gfbDecContents.kpi2 <= '148')?'red':(gfbDecContents.kpi2 > '148' && gfbDecContents.kpi2 <= '197.3333333')?'orange':(gfbDecContents.kpi2 > '197.3333333' && gfbDecContents.kpi2 < '246.6666667')?'yellow-7':(gfbDecContents.kpi2 >= '246.6666667' && gfbDecContents.kpi2 < '296')?'green':(gfbDecContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbDecContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbDecContents.kpi3 == null)?'grey-2':(gfbDecContents.kpi3 >= '0' && gfbDecContents.kpi3 <= '112.8')?'red':(gfbDecContents.kpi3 > '112.8' && gfbDecContents.kpi3 <= '150.4')?'orange':(gfbDecContents.kpi3 > '150.4' && gfbDecContents.kpi3 < '188')?'yellow-7':(gfbDecContents.kpi3 >= '188' && gfbDecContents.kpi3 < '225.6')?'green':(gfbDecContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbDecContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                                <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbJanContents.kpi1 == null)?'grey-2':(gfbJanContents.kpi1 >= '0' && gfbJanContents.kpi1 <= '232.6')?'red':(gfbJanContents.kpi1 > '232.6' && gfbJanContents.kpi1 <= '310.1333333')?'orange':(gfbJanContents.kpi1 > '310.1333333' && gfbJanContents.kpi1 < '387.6666667')?'yellow-7':(gfbJanContents.kpi1 >= '387.6666667' && gfbJanContents.kpi1 < '465.2')?'green':(gfbJanContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbJanContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJanContents.kpi2 == null)?'grey-2':(gfbJanContents.kpi2 >= '0' && gfbJanContents.kpi2 <= '148')?'red':(gfbJanContents.kpi2 > '148' && gfbJanContents.kpi2 <= '197.3333333')?'orange':(gfbJanContents.kpi2 > '197.3333333' && gfbJanContents.kpi2 < '246.6666667')?'yellow-7':(gfbJanContents.kpi2 >= '246.6666667' && gfbJanContents.kpi2 < '296')?'green':(gfbJanContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbJanContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJanContents.kpi3 == null)?'grey-2':(gfbJanContents.kpi3 >= '0' && gfbJanContents.kpi3 <= '112.8')?'red':(gfbJanContents.kpi3 > '112.8' && gfbJanContents.kpi3 <= '150.4')?'orange':(gfbJanContents.kpi3 > '150.4' && gfbJanContents.kpi3 < '188')?'yellow-7':(gfbJanContents.kpi3 >= '188' && gfbJanContents.kpi3 < '225.6')?'green':(gfbJanContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbJanContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbFebContents.kpi1 == null)?'grey-2':(gfbFebContents.kpi1 >= '0' && gfbFebContents.kpi1 <= '232.6')?'red':(gfbFebContents.kpi1 > '232.6' && gfbFebContents.kpi1 <= '310.1333333')?'orange':(gfbFebContents.kpi1 > '310.1333333' && gfbFebContents.kpi1 < '387.6666667')?'yellow-7':(gfbFebContents.kpi1 >= '387.6666667' && gfbFebContents.kpi1 < '465.2')?'green':(gfbFebContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbFebContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbFebContents.kpi2 == null)?'grey-2':(gfbFebContents.kpi2 >= '0' && gfbFebContents.kpi2 <= '148')?'red':(gfbFebContents.kpi2 > '148' && gfbFebContents.kpi2 <= '197.3333333')?'orange':(gfbFebContents.kpi2 > '197.3333333' && gfbFebContents.kpi2 < '246.6666667')?'yellow-7':(gfbFebContents.kpi2 >= '246.6666667' && gfbFebContents.kpi2 < '296')?'green':(gfbFebContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbFebContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbFebContents.kpi3 == null)?'grey-2':(gfbFebContents.kpi3 >= '0' && gfbFebContents.kpi3 <= '112.8')?'red':(gfbFebContents.kpi3 > '112.8' && gfbFebContents.kpi3 <= '150.4')?'orange':(gfbFebContents.kpi3 > '150.4' && gfbFebContents.kpi3 < '188')?'yellow-7':(gfbFebContents.kpi3 >= '188' && gfbFebContents.kpi3 < '225.6')?'green':(gfbFebContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbFebContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbMarContents.kpi1 == null)?'grey-2':(gfbMarContents.kpi1 >= '0' && gfbMarContents.kpi1 <= '232.6')?'red':(gfbMarContents.kpi1 > '232.6' && gfbMarContents.kpi1 <= '310.1333333')?'orange':(gfbMarContents.kpi1 > '310.1333333' && gfbMarContents.kpi1 < '387.6666667')?'yellow-7':(gfbMarContents.kpi1 >= '387.6666667' && gfbMarContents.kpi1 < '465.2')?'green':(gfbMarContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbMarContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbMarContents.kpi2 == null)?'grey-2':(gfbMarContents.kpi2 >= '0' && gfbMarContents.kpi2 <= '148')?'red':(gfbMarContents.kpi2 > '148' && gfbMarContents.kpi2 <= '197.3333333')?'orange':(gfbMarContents.kpi2 > '197.3333333' && gfbMarContents.kpi2 < '246.6666667')?'yellow-7':(gfbMarContents.kpi2 >= '246.6666667' && gfbMarContents.kpi2 < '296')?'green':(gfbMarContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbMarContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbMarContents.kpi3 == null)?'grey-2':(gfbMarContents.kpi3 >= '0' && gfbMarContents.kpi3 <= '112.8')?'red':(gfbMarContents.kpi3 > '112.8' && gfbMarContents.kpi3 <= '150.4')?'orange':(gfbMarContents.kpi3 > '150.4' && gfbMarContents.kpi3 < '188')?'yellow-7':(gfbMarContents.kpi3 >= '188' && gfbMarContents.kpi3 < '225.6')?'green':(gfbMarContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbMarContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbAprContents.kpi1 == null)?'grey-2':(gfbAprContents.kpi1 >= '0' && gfbAprContents.kpi1 <= '232.6')?'red':(gfbAprContents.kpi1 > '232.6' && gfbAprContents.kpi1 <= '310.1333333')?'orange':(gfbAprContents.kpi1 > '310.1333333' && gfbAprContents.kpi1 < '387.6666667')?'yellow-7':(gfbAprContents.kpi1 >= '387.6666667' && gfbAprContents.kpi1 < '465.2')?'green':(gfbAprContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbAprContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbAprContents.kpi2 == null)?'grey-2':(gfbAprContents.kpi2 >= '0' && gfbAprContents.kpi2 <= '148')?'red':(gfbAprContents.kpi2 > '148' && gfbAprContents.kpi2 <= '197.3333333')?'orange':(gfbAprContents.kpi2 > '197.3333333' && gfbAprContents.kpi2 < '246.6666667')?'yellow-7':(gfbAprContents.kpi2 >= '246.6666667' && gfbAprContents.kpi2 < '296')?'green':(gfbAprContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbAprContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbAprContents.kpi3 == null)?'grey-2':(gfbAprContents.kpi3 >= '0' && gfbAprContents.kpi3 <= '112.8')?'red':(gfbAprContents.kpi3 > '112.8' && gfbAprContents.kpi3 <= '150.4')?'orange':(gfbAprContents.kpi3 > '150.4' && gfbAprContents.kpi3 < '188')?'yellow-7':(gfbAprContents.kpi3 >= '188' && gfbAprContents.kpi3 < '225.6')?'green':(gfbAprContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbAprContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbMayContents.kpi1 == null)?'grey-2':(gfbMayContents.kpi1 >= '0' && gfbMayContents.kpi1 <= '232.6')?'red':(gfbMayContents.kpi1 > '232.6' && gfbMayContents.kpi1 <= '310.1333333')?'orange':(gfbMayContents.kpi1 > '310.1333333' && gfbMayContents.kpi1 < '387.6666667')?'yellow-7':(gfbMayContents.kpi1 >= '387.6666667' && gfbMayContents.kpi1 < '465.2')?'green':(gfbMayContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbMayContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbMayContents.kpi2 == null)?'grey-2':(gfbMayContents.kpi2 >= '0' && gfbMayContents.kpi2 <= '148')?'red':(gfbMayContents.kpi2 > '148' && gfbMayContents.kpi2 <= '197.3333333')?'orange':(gfbMayContents.kpi2 > '197.3333333' && gfbMayContents.kpi2 < '246.6666667')?'yellow-7':(gfbMayContents.kpi2 >= '246.6666667' && gfbMayContents.kpi2 < '296')?'green':(gfbMayContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbMayContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbMayContents.kpi3 == null)?'grey-2':(gfbMayContents.kpi3 >= '0' && gfbMayContents.kpi3 <= '112.8')?'red':(gfbMayContents.kpi3 > '112.8' && gfbMayContents.kpi3 <= '150.4')?'orange':(gfbMayContents.kpi3 > '150.4' && gfbMayContents.kpi3 < '188')?'yellow-7':(gfbMayContents.kpi3 >= '188' && gfbMayContents.kpi3 < '225.6')?'green':(gfbMayContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbMayContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbJunContents.kpi1 == null)?'grey-2':(gfbJunContents.kpi1 >= '0' && gfbJunContents.kpi1 <= '232.6')?'red':(gfbJunContents.kpi1 > '232.6' && gfbJunContents.kpi1 <= '310.1333333')?'orange':(gfbJunContents.kpi1 > '310.1333333' && gfbJunContents.kpi1 < '387.6666667')?'yellow-7':(gfbJunContents.kpi1 >= '387.6666667' && gfbJunContents.kpi1 < '465.2')?'green':(gfbJunContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbJunContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJunContents.kpi2 == null)?'grey-2':(gfbJunContents.kpi2 >= '0' && gfbJunContents.kpi2 <= '148')?'red':(gfbJunContents.kpi2 > '148' && gfbJunContents.kpi2 <= '197.3333333')?'orange':(gfbJunContents.kpi2 > '197.3333333' && gfbJunContents.kpi2 < '246.6666667')?'yellow-7':(gfbJunContents.kpi2 >= '246.6666667' && gfbJunContents.kpi2 < '296')?'green':(gfbJunContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbJunContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJunContents.kpi3 == null)?'grey-2':(gfbJunContents.kpi3 >= '0' && gfbJunContents.kpi3 <= '112.8')?'red':(gfbJunContents.kpi3 > '112.8' && gfbJunContents.kpi3 <= '150.4')?'orange':(gfbJunContents.kpi3 > '150.4' && gfbJunContents.kpi3 < '188')?'yellow-7':(gfbJunContents.kpi3 >= '188' && gfbJunContents.kpi3 < '225.6')?'green':(gfbJunContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbJunContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbJulContents.kpi1 == null)?'grey-2':(gfbJulContents.kpi1 >= '0' && gfbJulContents.kpi1 <= '232.6')?'red':(gfbJulContents.kpi1 > '232.6' && gfbJulContents.kpi1 <= '310.1333333')?'orange':(gfbJulContents.kpi1 > '310.1333333' && gfbJulContents.kpi1 < '387.6666667')?'yellow-7':(gfbJulContents.kpi1 >= '387.6666667' && gfbJulContents.kpi1 < '465.2')?'green':(gfbJulContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbJulContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJulContents.kpi2 == null)?'grey-2':(gfbJulContents.kpi2 >= '0' && gfbJulContents.kpi2 <= '148')?'red':(gfbJulContents.kpi2 > '148' && gfbJulContents.kpi2 <= '197.3333333')?'orange':(gfbJulContents.kpi2 > '197.3333333' && gfbJulContents.kpi2 < '246.6666667')?'yellow-7':(gfbJulContents.kpi2 >= '246.6666667' && gfbJulContents.kpi2 < '296')?'green':(gfbJulContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbJulContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJulContents.kpi3 == null)?'grey-2':(gfbJulContents.kpi3 >= '0' && gfbJulContents.kpi3 <= '112.8')?'red':(gfbJulContents.kpi3 > '112.8' && gfbJulContents.kpi3 <= '150.4')?'orange':(gfbJulContents.kpi3 > '150.4' && gfbJulContents.kpi3 < '188')?'yellow-7':(gfbJulContents.kpi3 >= '188' && gfbJulContents.kpi3 < '225.6')?'green':(gfbJulContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbJulContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbAugContents.kpi1 == null)?'grey-2':(gfbAugContents.kpi1 >= '0' && gfbAugContents.kpi1 <= '232.6')?'red':(gfbAugContents.kpi1 > '232.6' && gfbAugContents.kpi1 <= '310.1333333')?'orange':(gfbAugContents.kpi1 > '310.1333333' && gfbAugContents.kpi1 < '387.6666667')?'yellow-7':(gfbAugContents.kpi1 >= '387.6666667' && gfbAugContents.kpi1 < '465.2')?'green':(gfbAugContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbAugContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbAugContents.kpi2 == null)?'grey-2':(gfbAugContents.kpi2 >= '0' && gfbAugContents.kpi2 <= '148')?'red':(gfbAugContents.kpi2 > '148' && gfbAugContents.kpi2 <= '197.3333333')?'orange':(gfbAugContents.kpi2 > '197.3333333' && gfbAugContents.kpi2 < '246.6666667')?'yellow-7':(gfbAugContents.kpi2 >= '246.6666667' && gfbAugContents.kpi2 < '296')?'green':(gfbAugContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbAugContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbAugContents.kpi3 == null)?'grey-2':(gfbAugContents.kpi3 >= '0' && gfbAugContents.kpi3 <= '112.8')?'red':(gfbAugContents.kpi3 > '112.8' && gfbAugContents.kpi3 <= '150.4')?'orange':(gfbAugContents.kpi3 > '150.4' && gfbAugContents.kpi3 < '188')?'yellow-7':(gfbAugContents.kpi3 >= '188' && gfbAugContents.kpi3 < '225.6')?'green':(gfbAugContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbAugContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbSepContents.kpi1 == null)?'grey-2':(gfbSepContents.kpi1 >= '0' && gfbSepContents.kpi1 <= '232.6')?'red':(gfbSepContents.kpi1 > '232.6' && gfbSepContents.kpi1 <= '310.1333333')?'orange':(gfbSepContents.kpi1 > '310.1333333' && gfbSepContents.kpi1 < '387.6666667')?'yellow-7':(gfbSepContents.kpi1 >= '387.6666667' && gfbSepContents.kpi1 < '465.2')?'green':(gfbSepContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbSepContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbSepContents.kpi2 == null)?'grey-2':(gfbSepContents.kpi2 >= '0' && gfbSepContents.kpi2 <= '148')?'red':(gfbSepContents.kpi2 > '148' && gfbSepContents.kpi2 <= '197.3333333')?'orange':(gfbSepContents.kpi2 > '197.3333333' && gfbSepContents.kpi2 < '246.6666667')?'yellow-7':(gfbSepContents.kpi2 >= '246.6666667' && gfbSepContents.kpi2 < '296')?'green':(gfbSepContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbSepContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbSepContents.kpi3 == null)?'grey-2':(gfbSepContents.kpi3 >= '0' && gfbSepContents.kpi3 <= '112.8')?'red':(gfbSepContents.kpi3 > '112.8' && gfbSepContents.kpi3 <= '150.4')?'orange':(gfbSepContents.kpi3 > '150.4' && gfbSepContents.kpi3 < '188')?'yellow-7':(gfbSepContents.kpi3 >= '188' && gfbSepContents.kpi3 < '225.6')?'green':(gfbSepContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbSepContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbOctContents.kpi1 == null)?'grey-2':(gfbOctContents.kpi1 >= '0' && gfbOctContents.kpi1 <= '232.6')?'red':(gfbOctContents.kpi1 > '232.6' && gfbOctContents.kpi1 <= '310.1333333')?'orange':(gfbOctContents.kpi1 > '310.1333333' && gfbOctContents.kpi1 < '387.6666667')?'yellow-7':(gfbOctContents.kpi1 >= '387.6666667' && gfbOctContents.kpi1 < '465.2')?'green':(gfbOctContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbOctContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbOctContents.kpi2 == null)?'grey-2':(gfbOctContents.kpi2 >= '0' && gfbOctContents.kpi2 <= '148')?'red':(gfbOctContents.kpi2 > '148' && gfbOctContents.kpi2 <= '197.3333333')?'orange':(gfbOctContents.kpi2 > '197.3333333' && gfbOctContents.kpi2 < '246.6666667')?'yellow-7':(gfbOctContents.kpi2 >= '246.6666667' && gfbOctContents.kpi2 < '296')?'green':(gfbOctContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbOctContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbOctContents.kpi3 == null)?'grey-2':(gfbOctContents.kpi3 >= '0' && gfbOctContents.kpi3 <= '112.8')?'red':(gfbOctContents.kpi3 > '112.8' && gfbOctContents.kpi3 <= '150.4')?'orange':(gfbOctContents.kpi3 > '150.4' && gfbOctContents.kpi3 < '188')?'yellow-7':(gfbOctContents.kpi3 >= '188' && gfbOctContents.kpi3 < '225.6')?'green':(gfbOctContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbOctContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbNovContents.kpi1 == null)?'grey-2':(gfbNovContents.kpi1 >= '0' && gfbNovContents.kpi1 <= '232.6')?'red':(gfbNovContents.kpi1 > '232.6' && gfbNovContents.kpi1 <= '310.1333333')?'orange':(gfbNovContents.kpi1 > '310.1333333' && gfbNovContents.kpi1 < '387.6666667')?'yellow-7':(gfbNovContents.kpi1 >= '387.6666667' && gfbNovContents.kpi1 < '465.2')?'green':(gfbNovContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbNovContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbNovContents.kpi2 == null)?'grey-2':(gfbNovContents.kpi2 >= '0' && gfbNovContents.kpi2 <= '148')?'red':(gfbNovContents.kpi2 > '148' && gfbNovContents.kpi2 <= '197.3333333')?'orange':(gfbNovContents.kpi2 > '197.3333333' && gfbNovContents.kpi2 < '246.6666667')?'yellow-7':(gfbNovContents.kpi2 >= '246.6666667' && gfbNovContents.kpi2 < '296')?'green':(gfbNovContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbNovContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbNovContents.kpi3 == null)?'grey-2':(gfbNovContents.kpi3 >= '0' && gfbNovContents.kpi3 <= '112.8')?'red':(gfbNovContents.kpi3 > '112.8' && gfbNovContents.kpi3 <= '150.4')?'orange':(gfbNovContents.kpi3 > '150.4' && gfbNovContents.kpi3 < '188')?'yellow-7':(gfbNovContents.kpi3 >= '188' && gfbNovContents.kpi3 < '225.6')?'green':(gfbNovContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbNovContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbDecContents.kpi1 == null)?'grey-2':(gfbDecContents.kpi1 >= '0' && gfbDecContents.kpi1 <= '232.6')?'red':(gfbDecContents.kpi1 > '232.6' && gfbDecContents.kpi1 <= '310.1333333')?'orange':(gfbDecContents.kpi1 > '310.1333333' && gfbDecContents.kpi1 < '387.6666667')?'yellow-7':(gfbDecContents.kpi1 >= '387.6666667' && gfbDecContents.kpi1 < '465.2')?'green':(gfbDecContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbDecContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbDecContents.kpi2 == null)?'grey-2':(gfbDecContents.kpi2 >= '0' && gfbDecContents.kpi2 <= '148')?'red':(gfbDecContents.kpi2 > '148' && gfbDecContents.kpi2 <= '197.3333333')?'orange':(gfbDecContents.kpi2 > '197.3333333' && gfbDecContents.kpi2 < '246.6666667')?'yellow-7':(gfbDecContents.kpi2 >= '246.6666667' && gfbDecContents.kpi2 < '296')?'green':(gfbDecContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbDecContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbDecContents.kpi3 == null)?'grey-2':(gfbDecContents.kpi3 >= '0' && gfbDecContents.kpi3 <= '112.8')?'red':(gfbDecContents.kpi3 > '112.8' && gfbDecContents.kpi3 <= '150.4')?'orange':(gfbDecContents.kpi3 > '150.4' && gfbDecContents.kpi3 < '188')?'yellow-7':(gfbDecContents.kpi3 >= '188' && gfbDecContents.kpi3 < '225.6')?'green':(gfbDecContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbDecContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                                <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbJanContents.kpi1 == null)?'grey-2':(gfbJanContents.kpi1 >= '0' && gfbJanContents.kpi1 <= '232.6')?'red':(gfbJanContents.kpi1 > '232.6' && gfbJanContents.kpi1 <= '310.1333333')?'orange':(gfbJanContents.kpi1 > '310.1333333' && gfbJanContents.kpi1 < '387.6666667')?'yellow-7':(gfbJanContents.kpi1 >= '387.6666667' && gfbJanContents.kpi1 < '465.2')?'green':(gfbJanContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbJanContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJanContents.kpi2 == null)?'grey-2':(gfbJanContents.kpi2 >= '0' && gfbJanContents.kpi2 <= '148')?'red':(gfbJanContents.kpi2 > '148' && gfbJanContents.kpi2 <= '197.3333333')?'orange':(gfbJanContents.kpi2 > '197.3333333' && gfbJanContents.kpi2 < '246.6666667')?'yellow-7':(gfbJanContents.kpi2 >= '246.6666667' && gfbJanContents.kpi2 < '296')?'green':(gfbJanContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbJanContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJanContents.kpi3 == null)?'grey-2':(gfbJanContents.kpi3 >= '0' && gfbJanContents.kpi3 <= '112.8')?'red':(gfbJanContents.kpi3 > '112.8' && gfbJanContents.kpi3 <= '150.4')?'orange':(gfbJanContents.kpi3 > '150.4' && gfbJanContents.kpi3 < '188')?'yellow-7':(gfbJanContents.kpi3 >= '188' && gfbJanContents.kpi3 < '225.6')?'green':(gfbJanContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbJanContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbFebContents.kpi1 == null)?'grey-2':(gfbFebContents.kpi1 >= '0' && gfbFebContents.kpi1 <= '232.6')?'red':(gfbFebContents.kpi1 > '232.6' && gfbFebContents.kpi1 <= '310.1333333')?'orange':(gfbFebContents.kpi1 > '310.1333333' && gfbFebContents.kpi1 < '387.6666667')?'yellow-7':(gfbFebContents.kpi1 >= '387.6666667' && gfbFebContents.kpi1 < '465.2')?'green':(gfbFebContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbFebContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbFebContents.kpi2 == null)?'grey-2':(gfbFebContents.kpi2 >= '0' && gfbFebContents.kpi2 <= '148')?'red':(gfbFebContents.kpi2 > '148' && gfbFebContents.kpi2 <= '197.3333333')?'orange':(gfbFebContents.kpi2 > '197.3333333' && gfbFebContents.kpi2 < '246.6666667')?'yellow-7':(gfbFebContents.kpi2 >= '246.6666667' && gfbFebContents.kpi2 < '296')?'green':(gfbFebContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbFebContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbFebContents.kpi3 == null)?'grey-2':(gfbFebContents.kpi3 >= '0' && gfbFebContents.kpi3 <= '112.8')?'red':(gfbFebContents.kpi3 > '112.8' && gfbFebContents.kpi3 <= '150.4')?'orange':(gfbFebContents.kpi3 > '150.4' && gfbFebContents.kpi3 < '188')?'yellow-7':(gfbFebContents.kpi3 >= '188' && gfbFebContents.kpi3 < '225.6')?'green':(gfbFebContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbFebContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbMarContents.kpi1 == null)?'grey-2':(gfbMarContents.kpi1 >= '0' && gfbMarContents.kpi1 <= '232.6')?'red':(gfbMarContents.kpi1 > '232.6' && gfbMarContents.kpi1 <= '310.1333333')?'orange':(gfbMarContents.kpi1 > '310.1333333' && gfbMarContents.kpi1 < '387.6666667')?'yellow-7':(gfbMarContents.kpi1 >= '387.6666667' && gfbMarContents.kpi1 < '465.2')?'green':(gfbMarContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbMarContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbMarContents.kpi2 == null)?'grey-2':(gfbMarContents.kpi2 >= '0' && gfbMarContents.kpi2 <= '148')?'red':(gfbMarContents.kpi2 > '148' && gfbMarContents.kpi2 <= '197.3333333')?'orange':(gfbMarContents.kpi2 > '197.3333333' && gfbMarContents.kpi2 < '246.6666667')?'yellow-7':(gfbMarContents.kpi2 >= '246.6666667' && gfbMarContents.kpi2 < '296')?'green':(gfbMarContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbMarContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbMarContents.kpi3 == null)?'grey-2':(gfbMarContents.kpi3 >= '0' && gfbMarContents.kpi3 <= '112.8')?'red':(gfbMarContents.kpi3 > '112.8' && gfbMarContents.kpi3 <= '150.4')?'orange':(gfbMarContents.kpi3 > '150.4' && gfbMarContents.kpi3 < '188')?'yellow-7':(gfbMarContents.kpi3 >= '188' && gfbMarContents.kpi3 < '225.6')?'green':(gfbMarContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbMarContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbAprContents.kpi1 == null)?'grey-2':(gfbAprContents.kpi1 >= '0' && gfbAprContents.kpi1 <= '232.6')?'red':(gfbAprContents.kpi1 > '232.6' && gfbAprContents.kpi1 <= '310.1333333')?'orange':(gfbAprContents.kpi1 > '310.1333333' && gfbAprContents.kpi1 < '387.6666667')?'yellow-7':(gfbAprContents.kpi1 >= '387.6666667' && gfbAprContents.kpi1 < '465.2')?'green':(gfbAprContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbAprContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbAprContents.kpi2 == null)?'grey-2':(gfbAprContents.kpi2 >= '0' && gfbAprContents.kpi2 <= '148')?'red':(gfbAprContents.kpi2 > '148' && gfbAprContents.kpi2 <= '197.3333333')?'orange':(gfbAprContents.kpi2 > '197.3333333' && gfbAprContents.kpi2 < '246.6666667')?'yellow-7':(gfbAprContents.kpi2 >= '246.6666667' && gfbAprContents.kpi2 < '296')?'green':(gfbAprContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbAprContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbAprContents.kpi3 == null)?'grey-2':(gfbAprContents.kpi3 >= '0' && gfbAprContents.kpi3 <= '112.8')?'red':(gfbAprContents.kpi3 > '112.8' && gfbAprContents.kpi3 <= '150.4')?'orange':(gfbAprContents.kpi3 > '150.4' && gfbAprContents.kpi3 < '188')?'yellow-7':(gfbAprContents.kpi3 >= '188' && gfbAprContents.kpi3 < '225.6')?'green':(gfbAprContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbAprContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbMayContents.kpi1 == null)?'grey-2':(gfbMayContents.kpi1 >= '0' && gfbMayContents.kpi1 <= '232.6')?'red':(gfbMayContents.kpi1 > '232.6' && gfbMayContents.kpi1 <= '310.1333333')?'orange':(gfbMayContents.kpi1 > '310.1333333' && gfbMayContents.kpi1 < '387.6666667')?'yellow-7':(gfbMayContents.kpi1 >= '387.6666667' && gfbMayContents.kpi1 < '465.2')?'green':(gfbMayContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbMayContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbMayContents.kpi2 == null)?'grey-2':(gfbMayContents.kpi2 >= '0' && gfbMayContents.kpi2 <= '148')?'red':(gfbMayContents.kpi2 > '148' && gfbMayContents.kpi2 <= '197.3333333')?'orange':(gfbMayContents.kpi2 > '197.3333333' && gfbMayContents.kpi2 < '246.6666667')?'yellow-7':(gfbMayContents.kpi2 >= '246.6666667' && gfbMayContents.kpi2 < '296')?'green':(gfbMayContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbMayContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbMayContents.kpi3 == null)?'grey-2':(gfbMayContents.kpi3 >= '0' && gfbMayContents.kpi3 <= '112.8')?'red':(gfbMayContents.kpi3 > '112.8' && gfbMayContents.kpi3 <= '150.4')?'orange':(gfbMayContents.kpi3 > '150.4' && gfbMayContents.kpi3 < '188')?'yellow-7':(gfbMayContents.kpi3 >= '188' && gfbMayContents.kpi3 < '225.6')?'green':(gfbMayContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbMayContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbJunContents.kpi1 == null)?'grey-2':(gfbJunContents.kpi1 >= '0' && gfbJunContents.kpi1 <= '232.6')?'red':(gfbJunContents.kpi1 > '232.6' && gfbJunContents.kpi1 <= '310.1333333')?'orange':(gfbJunContents.kpi1 > '310.1333333' && gfbJunContents.kpi1 < '387.6666667')?'yellow-7':(gfbJunContents.kpi1 >= '387.6666667' && gfbJunContents.kpi1 < '465.2')?'green':(gfbJunContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbJunContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJunContents.kpi2 == null)?'grey-2':(gfbJunContents.kpi2 >= '0' && gfbJunContents.kpi2 <= '148')?'red':(gfbJunContents.kpi2 > '148' && gfbJunContents.kpi2 <= '197.3333333')?'orange':(gfbJunContents.kpi2 > '197.3333333' && gfbJunContents.kpi2 < '246.6666667')?'yellow-7':(gfbJunContents.kpi2 >= '246.6666667' && gfbJunContents.kpi2 < '296')?'green':(gfbJunContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbJunContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJunContents.kpi3 == null)?'grey-2':(gfbJunContents.kpi3 >= '0' && gfbJunContents.kpi3 <= '112.8')?'red':(gfbJunContents.kpi3 > '112.8' && gfbJunContents.kpi3 <= '150.4')?'orange':(gfbJunContents.kpi3 > '150.4' && gfbJunContents.kpi3 < '188')?'yellow-7':(gfbJunContents.kpi3 >= '188' && gfbJunContents.kpi3 < '225.6')?'green':(gfbJunContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbJunContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbJulContents.kpi1 == null)?'grey-2':(gfbJulContents.kpi1 >= '0' && gfbJulContents.kpi1 <= '232.6')?'red':(gfbJulContents.kpi1 > '232.6' && gfbJulContents.kpi1 <= '310.1333333')?'orange':(gfbJulContents.kpi1 > '310.1333333' && gfbJulContents.kpi1 < '387.6666667')?'yellow-7':(gfbJulContents.kpi1 >= '387.6666667' && gfbJulContents.kpi1 < '465.2')?'green':(gfbJulContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbJulContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJulContents.kpi2 == null)?'grey-2':(gfbJulContents.kpi2 >= '0' && gfbJulContents.kpi2 <= '148')?'red':(gfbJulContents.kpi2 > '148' && gfbJulContents.kpi2 <= '197.3333333')?'orange':(gfbJulContents.kpi2 > '197.3333333' && gfbJulContents.kpi2 < '246.6666667')?'yellow-7':(gfbJulContents.kpi2 >= '246.6666667' && gfbJulContents.kpi2 < '296')?'green':(gfbJulContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbJulContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbJulContents.kpi3 == null)?'grey-2':(gfbJulContents.kpi3 >= '0' && gfbJulContents.kpi3 <= '112.8')?'red':(gfbJulContents.kpi3 > '112.8' && gfbJulContents.kpi3 <= '150.4')?'orange':(gfbJulContents.kpi3 > '150.4' && gfbJulContents.kpi3 < '188')?'yellow-7':(gfbJulContents.kpi3 >= '188' && gfbJulContents.kpi3 < '225.6')?'green':(gfbJulContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbJulContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbAugContents.kpi1 == null)?'grey-2':(gfbAugContents.kpi1 >= '0' && gfbAugContents.kpi1 <= '232.6')?'red':(gfbAugContents.kpi1 > '232.6' && gfbAugContents.kpi1 <= '310.1333333')?'orange':(gfbAugContents.kpi1 > '310.1333333' && gfbAugContents.kpi1 < '387.6666667')?'yellow-7':(gfbAugContents.kpi1 >= '387.6666667' && gfbAugContents.kpi1 < '465.2')?'green':(gfbAugContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbAugContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbAugContents.kpi2 == null)?'grey-2':(gfbAugContents.kpi2 >= '0' && gfbAugContents.kpi2 <= '148')?'red':(gfbAugContents.kpi2 > '148' && gfbAugContents.kpi2 <= '197.3333333')?'orange':(gfbAugContents.kpi2 > '197.3333333' && gfbAugContents.kpi2 < '246.6666667')?'yellow-7':(gfbAugContents.kpi2 >= '246.6666667' && gfbAugContents.kpi2 < '296')?'green':(gfbAugContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbAugContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbAugContents.kpi3 == null)?'grey-2':(gfbAugContents.kpi3 >= '0' && gfbAugContents.kpi3 <= '112.8')?'red':(gfbAugContents.kpi3 > '112.8' && gfbAugContents.kpi3 <= '150.4')?'orange':(gfbAugContents.kpi3 > '150.4' && gfbAugContents.kpi3 < '188')?'yellow-7':(gfbAugContents.kpi3 >= '188' && gfbAugContents.kpi3 < '225.6')?'green':(gfbAugContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbAugContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbSepContents.kpi1 == null)?'grey-2':(gfbSepContents.kpi1 >= '0' && gfbSepContents.kpi1 <= '232.6')?'red':(gfbSepContents.kpi1 > '232.6' && gfbSepContents.kpi1 <= '310.1333333')?'orange':(gfbSepContents.kpi1 > '310.1333333' && gfbSepContents.kpi1 < '387.6666667')?'yellow-7':(gfbSepContents.kpi1 >= '387.6666667' && gfbSepContents.kpi1 < '465.2')?'green':(gfbSepContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbSepContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbSepContents.kpi2 == null)?'grey-2':(gfbSepContents.kpi2 >= '0' && gfbSepContents.kpi2 <= '148')?'red':(gfbSepContents.kpi2 > '148' && gfbSepContents.kpi2 <= '197.3333333')?'orange':(gfbSepContents.kpi2 > '197.3333333' && gfbSepContents.kpi2 < '246.6666667')?'yellow-7':(gfbSepContents.kpi2 >= '246.6666667' && gfbSepContents.kpi2 < '296')?'green':(gfbSepContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbSepContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbSepContents.kpi3 == null)?'grey-2':(gfbSepContents.kpi3 >= '0' && gfbSepContents.kpi3 <= '112.8')?'red':(gfbSepContents.kpi3 > '112.8' && gfbSepContents.kpi3 <= '150.4')?'orange':(gfbSepContents.kpi3 > '150.4' && gfbSepContents.kpi3 < '188')?'yellow-7':(gfbSepContents.kpi3 >= '188' && gfbSepContents.kpi3 < '225.6')?'green':(gfbSepContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbSepContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbOctContents.kpi1 == null)?'grey-2':(gfbOctContents.kpi1 >= '0' && gfbOctContents.kpi1 <= '232.6')?'red':(gfbOctContents.kpi1 > '232.6' && gfbOctContents.kpi1 <= '310.1333333')?'orange':(gfbOctContents.kpi1 > '310.1333333' && gfbOctContents.kpi1 < '387.6666667')?'yellow-7':(gfbOctContents.kpi1 >= '387.6666667' && gfbOctContents.kpi1 < '465.2')?'green':(gfbOctContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbOctContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbOctContents.kpi2 == null)?'grey-2':(gfbOctContents.kpi2 >= '0' && gfbOctContents.kpi2 <= '148')?'red':(gfbOctContents.kpi2 > '148' && gfbOctContents.kpi2 <= '197.3333333')?'orange':(gfbOctContents.kpi2 > '197.3333333' && gfbOctContents.kpi2 < '246.6666667')?'yellow-7':(gfbOctContents.kpi2 >= '246.6666667' && gfbOctContents.kpi2 < '296')?'green':(gfbOctContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbOctContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbOctContents.kpi3 == null)?'grey-2':(gfbOctContents.kpi3 >= '0' && gfbOctContents.kpi3 <= '112.8')?'red':(gfbOctContents.kpi3 > '112.8' && gfbOctContents.kpi3 <= '150.4')?'orange':(gfbOctContents.kpi3 > '150.4' && gfbOctContents.kpi3 < '188')?'yellow-7':(gfbOctContents.kpi3 >= '188' && gfbOctContents.kpi3 < '225.6')?'green':(gfbOctContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbOctContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbNovContents.kpi1 == null)?'grey-2':(gfbNovContents.kpi1 >= '0' && gfbNovContents.kpi1 <= '232.6')?'red':(gfbNovContents.kpi1 > '232.6' && gfbNovContents.kpi1 <= '310.1333333')?'orange':(gfbNovContents.kpi1 > '310.1333333' && gfbNovContents.kpi1 < '387.6666667')?'yellow-7':(gfbNovContents.kpi1 >= '387.6666667' && gfbNovContents.kpi1 < '465.2')?'green':(gfbNovContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbNovContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbNovContents.kpi2 == null)?'grey-2':(gfbNovContents.kpi2 >= '0' && gfbNovContents.kpi2 <= '148')?'red':(gfbNovContents.kpi2 > '148' && gfbNovContents.kpi2 <= '197.3333333')?'orange':(gfbNovContents.kpi2 > '197.3333333' && gfbNovContents.kpi2 < '246.6666667')?'yellow-7':(gfbNovContents.kpi2 >= '246.6666667' && gfbNovContents.kpi2 < '296')?'green':(gfbNovContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbNovContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbNovContents.kpi3 == null)?'grey-2':(gfbNovContents.kpi3 >= '0' && gfbNovContents.kpi3 <= '112.8')?'red':(gfbNovContents.kpi3 > '112.8' && gfbNovContents.kpi3 <= '150.4')?'orange':(gfbNovContents.kpi3 > '150.4' && gfbNovContents.kpi3 < '188')?'yellow-7':(gfbNovContents.kpi3 >= '188' && gfbNovContents.kpi3 < '225.6')?'green':(gfbNovContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbNovContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
                              :color="(gfbDecContents.kpi1 == null)?'grey-2':(gfbDecContents.kpi1 >= '0' && gfbDecContents.kpi1 <= '232.6')?'red':(gfbDecContents.kpi1 > '232.6' && gfbDecContents.kpi1 <= '310.1333333')?'orange':(gfbDecContents.kpi1 > '310.1333333' && gfbDecContents.kpi1 < '387.6666667')?'yellow-7':(gfbDecContents.kpi1 >= '387.6666667' && gfbDecContents.kpi1 < '465.2')?'green':(gfbDecContents.kpi1 >= '465.2'?'blue':'grey-2')"
                            >
                            {{gfbDecContents.kpi1}}
                              <q-tooltip># total contact</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbDecContents.kpi2 == null)?'grey-2':(gfbDecContents.kpi2 >= '0' && gfbDecContents.kpi2 <= '148')?'red':(gfbDecContents.kpi2 > '148' && gfbDecContents.kpi2 <= '197.3333333')?'orange':(gfbDecContents.kpi2 > '197.3333333' && gfbDecContents.kpi2 < '246.6666667')?'yellow-7':(gfbDecContents.kpi2 >= '246.6666667' && gfbDecContents.kpi2 < '296')?'green':(gfbDecContents.kpi2 >= '296'?'blue':'grey-2')"
                            >
                            {{gfbDecContents.kpi2}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gfbDecContents.kpi3 == null)?'grey-2':(gfbDecContents.kpi3 >= '0' && gfbDecContents.kpi3 <= '112.8')?'red':(gfbDecContents.kpi3 > '112.8' && gfbDecContents.kpi3 <= '150.4')?'orange':(gfbDecContents.kpi3 > '150.4' && gfbDecContents.kpi3 < '188')?'yellow-7':(gfbDecContents.kpi3 >= '188' && gfbDecContents.kpi3 < '225.6')?'green':(gfbDecContents.kpi3 >= '225.6'?'blue':'grey-2')"
                            >
                            {{gfbDecContents.kpi3}}
                              <q-tooltip>No. of Boxes Sold</q-tooltip>
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
              gfbJanContent: {
                
              },
              gfbJanContents : [],
              gfbFebContent: {
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
              gfbFebContents : [],
              gfbMarContent: {
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
              gfbMarContents : [],
              gfbAprContent: {
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
              gfbAprContents : [],
              gfbMayContent: {
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
              gfbMayContents : [],
              gfbJunContent: {
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
              gfbJunContents : [],
              gfbJulContent: {
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
              gfbJulContents : [],
              gfbAugContent: {
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
              gfbAugContents : [],
              gfbSepContent: {
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
              gfbSepContents : [],
              gfbOctContent: {
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
              gfbOctContents : [],
              gfbNovContent: {
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
              gfbNovContents : [],
              gfbDecContent: {
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
              gfbDecContents : []


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
                            {time_period: 'January', expenses: this.gfbJanContents.expenses, revenues: this.gfbJanContents.revenues},
                            {time_period: 'February', expenses: this.gfbFebContents.expenses, revenues: this.gfbFebContents.revenues},
                            {time_period: 'March', expenses: this.gfbMarContents.expenses, revenues: this.gfbMarContents.revenues},
                            {time_period: 'April', expenses: this.gfbAprContents.expenses, revenues: this.gfbAprContents.revenues},
                            {time_period: 'May', expenses: this.gfbMayContents.expenses, revenues: this.gfbMayContents.revenues},
                            {time_period: 'June', expenses: this.gfbJunContents.expenses, revenues: this.gfbJunContents.revenues},
                            {time_period: 'July', expenses: this.gfbJulContents.expenses, revenues: this.gfbJulContents.revenues},
                            {time_period: 'August', expenses: this.gfbAugContents.expenses, revenues: this.gfbAugContents.revenues},
                            {time_period: 'September', expenses: this.gfbSepContents.expenses, revenues: this.gfbSepContents.revenues},
                            {time_period: 'October', expenses: this.gfbOctContents.expenses, revenues: this.gfbOctContents.revenues},
                            {time_period: 'November', expenses: this.gfbNovContents.expenses, revenues: this.gfbNovContents.revenues},
                            {time_period: 'December',expenses: this.gfbDecContents.expenses, revenues: this.gfbDecContents.revenues }
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
                            {months: 'January', kpi1: this.gfbJanContents.kpi1, kpi2: this.gfbJanContents.kpi2, kpi3: this.gfbJanContents.kpi3, uniqueVol: this.gfbJanContents.uniqueVolunteers, volHours: this.gfbJanContents.volunteerHours},
                            {months: 'February', kpi1: this.gfbFebContents.kpi1, kpi2: this.gfbFebContents.kpi2, kpi3: this.gfbFebContents.kpi3, uniqueVol: this.gfbFebContents.uniqueVolunteers, volHours: this.gfbFebContents.volunteerHours},
                            {months: 'March', kpi1: this.gfbMarContents.kpi1, kpi2: this.gfbMarContents.kpi2, kpi3: this.gfbMarContents.kpi3, uniqueVol: this.gfbMarContents.uniqueVolunteers, volHours: this.gfbMarContents.volunteerHours},
                            {months: 'April', kpi1: this.gfbAprContents.kpi1, kpi2: this.gfbAprContents.kpi2, kpi3: this.gfbAprContents.kpi3, uniqueVol: this.gfbAprContents.uniqueVolunteers, volHours: this.gfbAprContents.volunteerHours},
                            {months: 'May', kpi1: this.gfbMayContents.kpi1, kpi2: this.gfbMayContents.kpi2, kpi3: this.gfbMayContents.kpi3, uniqueVol: this.gfbMayContents.uniqueVolunteers, volHours: this.gfbMayContents.volunteerHours},
                            {months: 'June', kpi1: this.gfbJunContents.kpi1, kpi2: this.gfbJunContents.kpi2, kpi3: this.gfbJunContents.kpi3, uniqueVol: this.gfbJunContents.uniqueVolunteers, volHours: this.gfbJunContents.volunteerHours},
                            {months: 'July', kpi1: this.gfbJulContents.kpi1, kpi2: this.gfbJulContents.kpi2, kpi3: this.gfbJulContents.kpi3, uniqueVol: this.gfbJulContents.uniqueVolunteers, volHours: this.gfbJulContents.volunteerHours},
                            {months: 'August', kpi1: this.gfbAugContents.kpi1, kpi2: this.gfbAugContents.kpi2, kpi3: this.gfbAugContents.kpi3, uniqueVol: this.gfbAugContents.uniqueVolunteers, volHours: this.gfbAugContents.volunteerHours},
                            {months: 'September', kpi1: this.gfbSepContents.kpi1, kpi2: this.gfbSepContents.kpi2, kpi3: this.gfbSepContents.kpi3, uniqueVol: this.gfbSepContents.uniqueVolunteers, volHours: this.gfbSepContents.volunteerHours},
                            {months: 'October', kpi1: this.gfbOctContents.kpi1, kpi2: this.gfbOctContents.kpi2, kpi3: this.gfbOctContents.kpi3, uniqueVol: this.gfbOctContents.uniqueVolunteers, volHours: this.gfbOctContents.volunteerHours},
                            {months: 'November', kpi1: this.gfbNovContents.kpi1, kpi2: this.gfbNovContents.kpi2, kpi3: this.gfbNovContents.kpi3, uniqueVol: this.gfbNovContents.uniqueVolunteers, volHours: this.gfbNovContents.volunteerHours},
                            {months: 'December',kpi1: this.gfbDecContents.kpi1, kpi2: this.gfbDecContents.kpi2, kpi3: this.gfbDecContents.kpi3, uniqueVol: this.gfbDecContents.uniqueVolunteers, volHours: this.gfbDecContents.volunteerHours},
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
                            data: [{value: this.gfbJanContents.budgetUsage}],
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
                                {value: this.gfbJanContents.perCategory1, name: this.gfbJanContents.expenseCategory1},
                                {value: this.gfbJanContents.perCategory2, name: this.gfbJanContents.expenseCategory2},
                                {value: this.gfbJanContents.perCategory3, name: this.gfbJanContents.expenseCategory3},
                                {value: this.gfbJanContents.perCategory4, name: this.gfbJanContents.expenseCategory4},
                                {value: this.gfbJanContents.perCategory5, name: this.gfbJanContents.expenseCategory5},
                                {value: this.gfbJanContents.perCategory6, name: this.gfbJanContents.expenseCategory6}
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
                            data: [{value: this.gfbFebContents.budgetUsage}],
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
                                {value: this.gfbFebContents.perCategory1, name: this.gfbFebContents.expenseCategory1},
                                {value: this.gfbFebContents.perCategory2, name: this.gfbFebContents.expenseCategory2},
                                {value: this.gfbFebContents.perCategory3, name: this.gfbFebContents.expenseCategory3},
                                {value: this.gfbFebContents.perCategory4, name: this.gfbFebContents.expenseCategory4},
                                {value: this.gfbFebContents.perCategory5, name: this.gfbFebContents.expenseCategory5},
                                {value: this.gfbFebContents.perCategory6, name: this.gfbFebContents.expenseCategory6}
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
                            data: [{value: this.gfbMarContents.budgetUsage}],
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
                                {value: this.gfbMarContents.perCategory1, name: this.gfbMarContents.expenseCategory1},
                                {value: this.gfbMarContents.perCategory2, name: this.gfbMarContents.expenseCategory2},
                                {value: this.gfbMarContents.perCategory3, name: this.gfbMarContents.expenseCategory3},
                                {value: this.gfbMarContents.perCategory4, name: this.gfbMarContents.expenseCategory4},
                                {value: this.gfbMarContents.perCategory5, name: this.gfbMarContents.expenseCategory5},
                                {value: this.gfbMarContents.perCategory6, name: this.gfbMarContents.expenseCategory6}
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
                            data: [{value: this.gfbAprContents.budgetUsage}],
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
                                {value: this.gfbAprContents.perCategory1, name: this.gfbAprContents.expenseCategory1},
                                {value: this.gfbAprContents.perCategory2, name: this.gfbAprContents.expenseCategory2},
                                {value: this.gfbAprContents.perCategory3, name: this.gfbAprContents.expenseCategory3},
                                {value: this.gfbAprContents.perCategory4, name: this.gfbAprContents.expenseCategory4},
                                {value: this.gfbAprContents.perCategory5, name: this.gfbAprContents.expenseCategory5},
                                {value: this.gfbAprContents.perCategory6, name: this.gfbAprContents.expenseCategory6}  
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
                            data: [{value: this.gfbMayContents.budgetUsage}],
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
                                {value: this.gfbMayContents.perCategory1, name: this.gfbMayContents.expenseCategory1},
                                {value: this.gfbMayContents.perCategory2, name: this.gfbMayContents.expenseCategory2},
                                {value: this.gfbMayContents.perCategory3, name: this.gfbMayContents.expenseCategory3},
                                {value: this.gfbMayContents.perCategory4, name: this.gfbMayContents.expenseCategory4},
                                {value: this.gfbMayContents.perCategory5, name: this.gfbMayContents.expenseCategory5},
                                {value: this.gfbMayContents.perCategory6, name: this.gfbMayContents.expenseCategory6}  
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
                            data: [{value: this.gfbJunContents.budgetUsage}],
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
                                {value: this.gfbJunContents.perCategory1, name: this.gfbJunContents.expenseCategory1},
                                {value: this.gfbJunContents.perCategory2, name: this.gfbJunContents.expenseCategory2},
                                {value: this.gfbJunContents.perCategory3, name: this.gfbJunContents.expenseCategory3},
                                {value: this.gfbJunContents.perCategory4, name: this.gfbJunContents.expenseCategory4},
                                {value: this.gfbJunContents.perCategory5, name: this.gfbJunContents.expenseCategory5},
                                {value: this.gfbJunContents.perCategory6, name: this.gfbJunContents.expenseCategory6}  
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
                            data: [{value: this.gfbJulContents.budgetUsage}],
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
                                {value: this.gfbJulContents.perCategory1, name: this.gfbJulContents.expenseCategory1},
                                {value: this.gfbJulContents.perCategory2, name: this.gfbJulContents.expenseCategory2},
                                {value: this.gfbJulContents.perCategory3, name: this.gfbJulContents.expenseCategory3},
                                {value: this.gfbJulContents.perCategory4, name: this.gfbJulContents.expenseCategory4},
                                {value: this.gfbJulContents.perCategory5, name: this.gfbJulContents.expenseCategory5},
                                {value: this.gfbJulContents.perCategory6, name: this.gfbJulContents.expenseCategory6}  
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
                            data: [{value: this.gfbAugContents.budgetUsage}],
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
                                {value: this.gfbAugContents.perCategory1, name: this.gfbAugContents.expenseCategory1},
                                {value: this.gfbAugContents.perCategory2, name: this.gfbAugContents.expenseCategory2},
                                {value: this.gfbAugContents.perCategory3, name: this.gfbAugContents.expenseCategory3},
                                {value: this.gfbAugContents.perCategory4, name: this.gfbAugContents.expenseCategory4},
                                {value: this.gfbAugContents.perCategory5, name: this.gfbAugContents.expenseCategory5},
                                {value: this.gfbAugContents.perCategory6, name: this.gfbAugContents.expenseCategory6}  
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
                            data: [{value: this.gfbSepContents.budgetUsage}],
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
                                {value: this.gfbSepContents.perCategory1, name: this.gfbSepContents.expenseCategory1},
                                {value: this.gfbSepContents.perCategory2, name: this.gfbSepContents.expenseCategory2},
                                {value: this.gfbSepContents.perCategory3, name: this.gfbSepContents.expenseCategory3},
                                {value: this.gfbSepContents.perCategory4, name: this.gfbSepContents.expenseCategory4},
                                {value: this.gfbSepContents.perCategory5, name: this.gfbSepContents.expenseCategory5},
                                {value: this.gfbSepContents.perCategory6, name: this.gfbSepContents.expenseCategory6}  
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
                            data: [{value: this.gfbOctContents.budgetUsage}],
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
                                {value: this.gfbOctContents.perCategory1, name: this.gfbOctContents.expenseCategory1},
                                {value: this.gfbOctContents.perCategory2, name: this.gfbOctContents.expenseCategory2},
                                {value: this.gfbOctContents.perCategory3, name: this.gfbOctContents.expenseCategory3},
                                {value: this.gfbOctContents.perCategory4, name: this.gfbOctContents.expenseCategory4},
                                {value: this.gfbOctContents.perCategory5, name: this.gfbOctContents.expenseCategory5},
                                {value: this.gfbOctContents.perCategory6, name: this.gfbOctContents.expenseCategory6}  
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
                            data: [{value: this.gfbNovContents.budgetUsage}],
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
                                {value: this.gfbNovContents.perCategory1, name: this.gfbNovContents.expenseCategory1},
                                {value: this.gfbNovContents.perCategory2, name: this.gfbNovContents.expenseCategory2},
                                {value: this.gfbNovContents.perCategory3, name: this.gfbNovContents.expenseCategory3},
                                {value: this.gfbNovContents.perCategory4, name: this.gfbNovContents.expenseCategory4},
                                {value: this.gfbNovContents.perCategory5, name: this.gfbNovContents.expenseCategory5},
                                {value: this.gfbNovContents.perCategory6, name: this.gfbNovContents.expenseCategory6}  
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
                            data: [{value: this.gfbDecContents.budgetUsage}],
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
                                {value: this.gfbDecContents.perCategory1, name: this.gfbDecContents.expenseCategory1},
                                {value: this.gfbDecContents.perCategory2, name: this.gfbDecContents.expenseCategory2},
                                {value: this.gfbDecContents.perCategory3, name: this.gfbDecContents.expenseCategory3},
                                {value: this.gfbDecContents.perCategory4, name: this.gfbDecContents.expenseCategory4},
                                {value: this.gfbDecContents.perCategory5, name: this.gfbDecContents.expenseCategory5},
                                {value: this.gfbDecContents.perCategory6, name: this.gfbDecContents.expenseCategory6}
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
            var docgfbJanRef = db.collection("gfb").doc("january");

            docgfbJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.gfbJanContents = doc.data();
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
            var docgfbFebRef = db.collection("gfb").doc("february");

            docgfbFebRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.gfbFebContents = doc.data();
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
            var docgfbMarRef = db.collection("gfb").doc("march");

            docgfbMarRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.gfbMarContents = doc.data();
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
            var docgfbAprRef = db.collection("gfb").doc("april1");

            docgfbAprRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.gfbAprContents = doc.data();
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
            var docgfbMayRef = db.collection("gfb").doc("may");

            docgfbMayRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.gfbMayContents = doc.data();
                    this.totalExpenseMay();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    JUNE
            var docgfbJunRef = db.collection("gfb").doc("june");

            docgfbJunRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.gfbJunContents = doc.data();
                    this.totalExpenseJun();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    JULY
            var docgfbJulRef = db.collection("gfb").doc("july");

            docgfbJulRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.gfbJulContents = doc.data();
                    this.totalExpenseJul();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    AUGUST
            var docgfbAugRef = db.collection("gfb").doc("august");

            docgfbAugRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.gfbAugContents = doc.data();
                    this.totalExpenseAug();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    SEPTEMBER
            var docgfbSepRef = db.collection("gfb").doc("september");

            docgfbSepRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.gfbSepContents = doc.data();
                    this.totalExpenseSep();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    OCTOBER
            var docgfbOctRef = db.collection("gfb").doc("october");

            docgfbOctRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.gfbOctContents = doc.data();
                    this.totalExpenseOct();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    NOVEMBER
            var docgfbNovRef = db.collection("gfb").doc("november");

            docgfbNovRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.gfbNovContents = doc.data();
                    this.totalExpenseNov();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    DECEMBER
            var docgfbDecRef = db.collection("gfb").doc("december");

            docgfbDecRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.gfbDecContents = doc.data();
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
              return this.gfbJanContents.expenses = getRealValue(this.gfbJanContents.perCategory1) + getRealValue(this.gfbJanContents.perCategory2) + getRealValue(this.gfbJanContents.perCategory3) + getRealValue(this.gfbJanContents.perCategory4) + getRealValue(this.gfbJanContents.perCategory5) + getRealValue(this.gfbJanContents.perCategory6)
              
            },
            cumulativeBudgetUsageJan(){
              const getRealValue = (val) => +val || val;
              return this.gfbJanContents.budgetUsage = ((getRealValue(this.gfbJanContents.expenses) / getRealValue(this.gfbJanContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseFeb(){
              const getRealValue = (val) => +val || val;
              return this.gfbFebContents.expenses = getRealValue(this.gfbFebContents.perCategory1) + getRealValue(this.gfbFebContents.perCategory2) + getRealValue(this.gfbFebContents.perCategory3) + getRealValue(this.gfbFebContents.perCategory4) + getRealValue(this.gfbFebContents.perCategory5) + getRealValue(this.gfbFebContents.perCategory6)
            },
            cumulativeBudgetUsageFeb(){
              const getRealValue = (val) => +val || val;
              return this.gfbFebContents.budgetUsage = (((getRealValue(this.gfbFebContents.expenses) + getRealValue(this.gfbJanContents.expenses)) / getRealValue(this.gfbFebContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseMar(){
              const getRealValue = (val) => +val || val;
              return this.gfbMarContents.expenses = getRealValue(this.gfbMarContents.perCategory1) + getRealValue(this.gfbMarContents.perCategory2) + getRealValue(this.gfbMarContents.perCategory3) + getRealValue(this.gfbMarContents.perCategory4) + getRealValue(this.gfbMarContents.perCategory5) + getRealValue(this.gfbMarContents.perCategory6)
            },
            cumulativeBudgetUsageMar(){
              const getRealValue = (val) => +val || val;
              return this.gfbMarContents.budgetUsage = (((getRealValue(this.gfbMarContents.expenses) + getRealValue(this.gfbFebContents.expenses) + getRealValue(this.gfbJanContents.expenses)) / getRealValue(this.gfbMarContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseApr(){
              const getRealValue = (val) => +val || val;
              return this.gfbAprContents.expenses = getRealValue(this.gfbAprContents.perCategory1) + getRealValue(this.gfbAprContents.perCategory2) + getRealValue(this.gfbAprContents.perCategory3) + getRealValue(this.gfbAprContents.perCategory4) + getRealValue(this.gfbAprContents.perCategory5) + getRealValue(this.gfbAprContents.perCategory6)
            },
            cumulativeBudgetUsageApr(){
              const getRealValue = (val) => +val || val;
              return this.gfbAprContents.budgetUsage = (((getRealValue(this.gfbAprContents.expenses) + getRealValue(this.gfbMarContents.expenses) + getRealValue(this.gfbFebContents.expenses) + getRealValue(this.gfbJanContents.expenses)) / getRealValue(this.gfbAprContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseMay(){
              const getRealValue = (val) => +val || val;
              return this.gfbMayContents.expenses = getRealValue(this.gfbMayContents.perCategory1) + getRealValue(this.gfbMayContents.perCategory2) + getRealValue(this.gfbMayContents.perCategory3) + getRealValue(this.gfbMayContents.perCategory4) + getRealValue(this.gfbMayContents.perCategory5) + getRealValue(this.gfbMayContents.perCategory6)
            },
            cumulativeBudgetUsageMay(){
              const getRealValue = (val) => +val || val;
              return this.gfbMayContents.budgetUsage = (((getRealValue(this.gfbMayContents.expenses) + getRealValue(this.gfbAprContents.expenses) + getRealValue(this.gfbMarContents.expenses) + getRealValue(this.gfbFebContents.expenses) + getRealValue(this.gfbJanContents.expenses)) / getRealValue(this.gfbMayContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseJun(){
              const getRealValue = (val) => +val || val;
              return this.gfbJunContents.expenses = getRealValue(this.gfbJunContents.perCategory1) + getRealValue(this.gfbJunContents.perCategory2) + getRealValue(this.gfbJunContents.perCategory3) + getRealValue(this.gfbJunContents.perCategory4) + getRealValue(this.gfbJunContents.perCategory5) + getRealValue(this.gfbJunContents.perCategory6)
            },
            cumulativeBudgetUsageJun(){
              const getRealValue = (val) => +val || val;
              return this.gfbJunContents.budgetUsage = (((getRealValue(this.gfbJunContents.expenses) + getRealValue(this.gfbMayContents.expenses) + getRealValue(this.gfbAprContents.expenses) + getRealValue(this.gfbMarContents.expenses) + getRealValue(this.gfbFebContents.expenses) + getRealValue(this.gfbJanContents.expenses)) / getRealValue(this.gfbJunContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseJul(){
              const getRealValue = (val) => +val || val;
              return this.gfbJulContents.expenses = getRealValue(this.gfbJulContents.perCategory1) + getRealValue(this.gfbJulContents.perCategory2) + getRealValue(this.gfbJulContents.perCategory3) + getRealValue(this.gfbJulContents.perCategory4) + getRealValue(this.gfbJulContents.perCategory5) + getRealValue(this.gfbJulContents.perCategory6)
            },
            cumulativeBudgetUsageJul(){
              const getRealValue = (val) => +val || val;
              return this.gfbJulContents.budgetUsage = (((getRealValue(this.gfbJulContents.expenses) + getRealValue(this.gfbJunContents.expenses) + getRealValue(this.gfbMayContents.expenses) + getRealValue(this.gfbAprContents.expenses) + getRealValue(this.gfbMarContents.expenses) + getRealValue(this.gfbFebContents.expenses) + getRealValue(this.gfbJanContents.expenses)) / getRealValue(this.gfbJulContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseAug(){
              const getRealValue = (val) => +val || val;
              return this.gfbAugContents.expenses = getRealValue(this.gfbAugContents.perCategory1) + getRealValue(this.gfbAugContents.perCategory2) + getRealValue(this.gfbAugContents.perCategory3) + getRealValue(this.gfbAugContents.perCategory4) + getRealValue(this.gfbAugContents.perCategory5) + getRealValue(this.gfbAugContents.perCategory6)
            },
            cumulativeBudgetUsageAug(){
              const getRealValue = (val) => +val || val;
              return this.gfbAugContents.budgetUsage = (((getRealValue(this.gfbAugContents.expenses) + getRealValue(this.gfbJulContents.expenses) + getRealValue(this.gfbJunContents.expenses) + getRealValue(this.gfbMayContents.expenses) + getRealValue(this.gfbAprContents.expenses) + getRealValue(this.gfbMarContents.expenses) + getRealValue(this.gfbFebContents.expenses) + getRealValue(this.gfbJanContents.expenses)) / getRealValue(this.gfbAugContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseSep(){
              const getRealValue = (val) => +val || val;
              return this.gfbSepContents.expenses = getRealValue(this.gfbSepContents.perCategory1) + getRealValue(this.gfbSepContents.perCategory2) + getRealValue(this.gfbSepContents.perCategory3) + getRealValue(this.gfbSepContents.perCategory4) + getRealValue(this.gfbSepContents.perCategory5) + getRealValue(this.gfbSepContents.perCategory6)
            },
            cumulativeBudgetUsageSep(){
              const getRealValue = (val) => +val || val;
              return this.gfbSepContents.budgetUsage = (((getRealValue(this.gfbSepContents.expenses) + getRealValue(this.gfbAugContents.expenses) + getRealValue(this.gfbJulContents.expenses) + getRealValue(this.gfbJunContents.expenses) + getRealValue(this.gfbMayContents.expenses) + getRealValue(this.gfbAprContents.expenses) + getRealValue(this.gfbMarContents.expenses) + getRealValue(this.gfbFebContents.expenses) + getRealValue(this.gfbJanContents.expenses)) / getRealValue(this.gfbSepContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseOct(){
              const getRealValue = (val) => +val || val;
              return this.gfbOctContents.expenses = getRealValue(this.gfbOctContents.perCategory1) + getRealValue(this.gfbOctContents.perCategory2) + getRealValue(this.gfbOctContents.perCategory3) + getRealValue(this.gfbOctContents.perCategory4) + getRealValue(this.gfbOctContents.perCategory5) + getRealValue(this.gfbOctContents.perCategory6)
            },
            cumulativeBudgetUsageOct(){
              const getRealValue = (val) => +val || val;
              return this.gfbOctContents.budgetUsage = (((getRealValue(this.gfbOctContents.expenses) + getRealValue(this.gfbSepContents.expenses) + getRealValue(this.gfbAugContents.expenses) + getRealValue(this.gfbJulContents.expenses) + getRealValue(this.gfbJunContents.expenses) + getRealValue(this.gfbMayContents.expenses) + getRealValue(this.gfbAprContents.expenses) + getRealValue(this.gfbMarContents.expenses) + getRealValue(this.gfbFebContents.expenses) + getRealValue(this.gfbJanContents.expenses)) / getRealValue(this.gfbOctContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseNov(){
              const getRealValue = (val) => +val || val;
              return this.gfbNovContents.expenses = getRealValue(this.gfbNovContents.perCategory1) + getRealValue(this.gfbNovContents.perCategory2) + getRealValue(this.gfbNovContents.perCategory3) + getRealValue(this.gfbNovContents.perCategory4) + getRealValue(this.gfbNovContents.perCategory5) + getRealValue(this.gfbNovContents.perCategory6)
            },
            cumulativeBudgetUsageNov(){
              const getRealValue = (val) => +val || val;
              return this.gfbNovContents.budgetUsage = (((getRealValue(this.gfbNovContents.expenses) + getRealValue(this.gfbOctContents.expenses) + getRealValue(this.gfbSepContents.expenses) + getRealValue(this.gfbAugContents.expenses) + getRealValue(this.gfbJulContents.expenses) + getRealValue(this.gfbJunContents.expenses) + getRealValue(this.gfbMayContents.expenses) + getRealValue(this.gfbAprContents.expenses) + getRealValue(this.gfbMarContents.expenses) + getRealValue(this.gfbFebContents.expenses) + getRealValue(this.gfbJanContents.expenses)) / getRealValue(this.gfbNovContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseDec(){
              const getRealValue = (val) => +val || val;
              return this.gfbDecContents.expenses = getRealValue(this.gfbDecContents.perCategory1) + getRealValue(this.gfbDecContents.perCategory2) + getRealValue(this.gfbDecContents.perCategory3) + getRealValue(this.gfbDecContents.perCategory4) + getRealValue(this.gfbDecContents.perCategory5) + getRealValue(this.gfbDecContents.perCategory6)
            },
            cumulativeBudgetUsageDec(){
              const getRealValue = (val) => +val || val;
              return this.gfbDecContents.budgetUsage = (((getRealValue(this.gfbDecContents.expenses) + getRealValue(this.gfbNovContents.expenses) + getRealValue(this.gfbOctContents.expenses) + getRealValue(this.gfbSepContents.expenses) + getRealValue(this.gfbAugContents.expenses) + getRealValue(this.gfbJulContents.expenses) + getRealValue(this.gfbJunContents.expenses) + getRealValue(this.gfbMayContents.expenses) + getRealValue(this.gfbAprContents.expenses) + getRealValue(this.gfbMarContents.expenses) + getRealValue(this.gfbFebContents.expenses) + getRealValue(this.gfbJanContents.expenses)) / getRealValue(this.gfbDecContents.actualBudget))*100).toFixed(2)
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
