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
                                <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of community and social service providers in the networks</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsJanContents.kpi1 == null)?'grey-2':(pinsJanContents.kpi1 >= '0' && pinsJanContents.kpi1 <= '0.6')?'red':(pinsJanContents.kpi1 > '0.6' && pinsJanContents.kpi1 <= '0.8')?'orange':(pinsJanContents.kpi1 > '0.8' && pinsJanContents.kpi1 < '1')?'yellow-7':(pinsJanContents.kpi1 >= '1' && pinsJanContents.kpi1 < '1.2')?'green':(pinsJanContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsJanContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJanContents.kpi2 == null)?'grey-2':(pinsJanContents.kpi2 >= '0' && pinsJanContents.kpi2 <= '10.8')?'red':(pinsJanContents.kpi2 > '10.8' && pinsJanContents.kpi2 <= '14.4')?'orange':(pinsJanContents.kpi2 > '14.4' && pinsJanContents.kpi2 < '18')?'yellow-7':(pinsJanContents.kpi2 >= '18' && pinsJanContents.kpi2 < '21.6')?'green':(pinsJanContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsJanContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJanContents.kpi3 == null)?'grey-2':(pinsJanContents.kpi3 >= '0' && pinsJanContents.kpi3 <= '7.2')?'red':(pinsJanContents.kpi3 > '7.2' && pinsJanContents.kpi3 <= '9.6')?'orange':(pinsJanContents.kpi3 > '9.6' && pinsJanContents.kpi3 < '12')?'yellow-7':(pinsJanContents.kpi3 >= '12' && pinsJanContents.kpi3 < '14.4')?'green':(pinsJanContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsJanContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsFebContents.kpi1 == null)?'grey-2':(pinsFebContents.kpi1 >= '0' && pinsFebContents.kpi1 <= '0.6')?'red':(pinsFebContents.kpi1 > '0.6' && pinsFebContents.kpi1 <= '0.8')?'orange':(pinsFebContents.kpi1 > '0.8' && pinsFebContents.kpi1 < '1')?'yellow-7':(pinsFebContents.kpi1 >= '1' && pinsFebContents.kpi1 < '1.2')?'green':(pinsFebContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsFebContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsFebContents.kpi2 == null)?'grey-2':(pinsFebContents.kpi2 >= '0' && pinsFebContents.kpi2 <= '10.8')?'red':(pinsFebContents.kpi2 > '10.8' && pinsFebContents.kpi2 <= '14.4')?'orange':(pinsFebContents.kpi2 > '14.4' && pinsFebContents.kpi2 < '18')?'yellow-7':(pinsFebContents.kpi2 >= '18' && pinsFebContents.kpi2 < '21.6')?'green':(pinsFebContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsFebContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsFebContents.kpi3 == null)?'grey-2':(pinsFebContents.kpi3 >= '0' && pinsFebContents.kpi3 <= '7.2')?'red':(pinsFebContents.kpi3 > '7.2' && pinsFebContents.kpi3 <= '9.6')?'orange':(pinsFebContents.kpi3 > '9.6' && pinsFebContents.kpi3 < '12')?'yellow-7':(pinsFebContents.kpi3 >= '12' && pinsFebContents.kpi3 < '14.4')?'green':(pinsFebContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsFebContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsMarContents.kpi1 == null)?'grey-2':(pinsMarContents.kpi1 >= '0' && pinsMarContents.kpi1 <= '0.6')?'red':(pinsMarContents.kpi1 > '0.6' && pinsMarContents.kpi1 <= '0.8')?'orange':(pinsMarContents.kpi1 > '0.8' && pinsMarContents.kpi1 < '1')?'yellow-7':(pinsMarContents.kpi1 >= '1' && pinsMarContents.kpi1 < '1.2')?'green':(pinsMarContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsMarContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsMarContents.kpi2 == null)?'grey-2':(pinsMarContents.kpi2 >= '0' && pinsMarContents.kpi2 <= '10.8')?'red':(pinsMarContents.kpi2 > '10.8' && pinsMarContents.kpi2 <= '14.4')?'orange':(pinsMarContents.kpi2 > '14.4' && pinsMarContents.kpi2 < '18')?'yellow-7':(pinsMarContents.kpi2 >= '18' && pinsMarContents.kpi2 < '21.6')?'green':(pinsMarContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsMarContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsMarContents.kpi3 == null)?'grey-2':(pinsMarContents.kpi3 >= '0' && pinsMarContents.kpi3 <= '7.2')?'red':(pinsMarContents.kpi3 > '7.2' && pinsMarContents.kpi3 <= '9.6')?'orange':(pinsMarContents.kpi3 > '9.6' && pinsMarContents.kpi3 < '12')?'yellow-7':(pinsMarContents.kpi3 >= '12' && pinsMarContents.kpi3 < '14.4')?'green':(pinsMarContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsMarContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsAprContents.kpi1 == null)?'grey-2':(pinsAprContents.kpi1 >= '0' && pinsAprContents.kpi1 <= '0.6')?'red':(pinsAprContents.kpi1 > '0.6' && pinsAprContents.kpi1 <= '0.8')?'orange':(pinsAprContents.kpi1 > '0.8' && pinsAprContents.kpi1 < '1')?'yellow-7':(pinsAprContents.kpi1 >= '1' && pinsAprContents.kpi1 < '1.2')?'green':(pinsAprContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsAprContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsAprContents.kpi2 == null)?'grey-2':(pinsAprContents.kpi2 >= '0' && pinsAprContents.kpi2 <= '10.8')?'red':(pinsAprContents.kpi2 > '10.8' && pinsAprContents.kpi2 <= '14.4')?'orange':(pinsAprContents.kpi2 > '14.4' && pinsAprContents.kpi2 < '18')?'yellow-7':(pinsAprContents.kpi2 >= '18' && pinsAprContents.kpi2 < '21.6')?'green':(pinsAprContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsAprContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsAprContents.kpi3 == null)?'grey-2':(pinsAprContents.kpi3 >= '0' && pinsAprContents.kpi3 <= '7.2')?'red':(pinsAprContents.kpi3 > '7.2' && pinsAprContents.kpi3 <= '9.6')?'orange':(pinsAprContents.kpi3 > '9.6' && pinsAprContents.kpi3 < '12')?'yellow-7':(pinsAprContents.kpi3 >= '12' && pinsAprContents.kpi3 < '14.4')?'green':(pinsAprContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsAprContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsMayContents.kpi1 == null)?'grey-2':(pinsMayContents.kpi1 >= '0' && pinsMayContents.kpi1 <= '0.6')?'red':(pinsMayContents.kpi1 > '0.6' && pinsMayContents.kpi1 <= '0.8')?'orange':(pinsMayContents.kpi1 > '0.8' && pinsMayContents.kpi1 < '1')?'yellow-7':(pinsMayContents.kpi1 >= '1' && pinsMayContents.kpi1 < '1.2')?'green':(pinsMayContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsMayContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsMayContents.kpi2 == null)?'grey-2':(pinsMayContents.kpi2 >= '0' && pinsMayContents.kpi2 <= '10.8')?'red':(pinsMayContents.kpi2 > '10.8' && pinsMayContents.kpi2 <= '14.4')?'orange':(pinsMayContents.kpi2 > '14.4' && pinsMayContents.kpi2 < '18')?'yellow-7':(pinsMayContents.kpi2 >= '18' && pinsMayContents.kpi2 < '21.6')?'green':(pinsMayContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsMayContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsMayContents.kpi3 == null)?'grey-2':(pinsMayContents.kpi3 >= '0' && pinsMayContents.kpi3 <= '7.2')?'red':(pinsMayContents.kpi3 > '7.2' && pinsMayContents.kpi3 <= '9.6')?'orange':(pinsMayContents.kpi3 > '9.6' && pinsMayContents.kpi3 < '12')?'yellow-7':(pinsMayContents.kpi3 >= '12' && pinsMayContents.kpi3 < '14.4')?'green':(pinsMayContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsMayContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsJunContents.kpi1 == null)?'grey-2':(pinsJunContents.kpi1 >= '0' && pinsJunContents.kpi1 <= '0.6')?'red':(pinsJunContents.kpi1 > '0.6' && pinsJunContents.kpi1 <= '0.8')?'orange':(pinsJunContents.kpi1 > '0.8' && pinsJunContents.kpi1 < '1')?'yellow-7':(pinsJunContents.kpi1 >= '1' && pinsJunContents.kpi1 < '1.2')?'green':(pinsJunContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsJunContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJunContents.kpi2 == null)?'grey-2':(pinsJunContents.kpi2 >= '0' && pinsJunContents.kpi2 <= '10.8')?'red':(pinsJunContents.kpi2 > '10.8' && pinsJunContents.kpi2 <= '14.4')?'orange':(pinsJunContents.kpi2 > '14.4' && pinsJunContents.kpi2 < '18')?'yellow-7':(pinsJunContents.kpi2 >= '18' && pinsJunContents.kpi2 < '21.6')?'green':(pinsJunContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsJunContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJunContents.kpi3 == null)?'grey-2':(pinsJunContents.kpi3 >= '0' && pinsJunContents.kpi3 <= '7.2')?'red':(pinsJunContents.kpi3 > '7.2' && pinsJunContents.kpi3 <= '9.6')?'orange':(pinsJunContents.kpi3 > '9.6' && pinsJunContents.kpi3 < '12')?'yellow-7':(pinsJunContents.kpi3 >= '12' && pinsJunContents.kpi3 < '14.4')?'green':(pinsJunContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsJunContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsJulContents.kpi1 == null)?'grey-2':(pinsJulContents.kpi1 >= '0' && pinsJulContents.kpi1 <= '0.6')?'red':(pinsJulContents.kpi1 > '0.6' && pinsJulContents.kpi1 <= '0.8')?'orange':(pinsJulContents.kpi1 > '0.8' && pinsJulContents.kpi1 < '1')?'yellow-7':(pinsJulContents.kpi1 >= '1' && pinsJulContents.kpi1 < '1.2')?'green':(pinsJulContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsJulContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJulContents.kpi2 == null)?'grey-2':(pinsJulContents.kpi2 >= '0' && pinsJulContents.kpi2 <= '10.8')?'red':(pinsJulContents.kpi2 > '10.8' && pinsJulContents.kpi2 <= '14.4')?'orange':(pinsJulContents.kpi2 > '14.4' && pinsJulContents.kpi2 < '18')?'yellow-7':(pinsJulContents.kpi2 >= '18' && pinsJulContents.kpi2 < '21.6')?'green':(pinsJulContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsJulContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJulContents.kpi3 == null)?'grey-2':(pinsJulContents.kpi3 >= '0' && pinsJulContents.kpi3 <= '7.2')?'red':(pinsJulContents.kpi3 > '7.2' && pinsJulContents.kpi3 <= '9.6')?'orange':(pinsJulContents.kpi3 > '9.6' && pinsJulContents.kpi3 < '12')?'yellow-7':(pinsJulContents.kpi3 >= '12' && pinsJulContents.kpi3 < '14.4')?'green':(pinsJulContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsJulContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsAugContents.kpi1 == null)?'grey-2':(pinsAugContents.kpi1 >= '0' && pinsAugContents.kpi1 <= '0.6')?'red':(pinsAugContents.kpi1 > '0.6' && pinsAugContents.kpi1 <= '0.8')?'orange':(pinsAugContents.kpi1 > '0.8' && pinsAugContents.kpi1 < '1')?'yellow-7':(pinsAugContents.kpi1 >= '1' && pinsAugContents.kpi1 < '1.2')?'green':(pinsAugContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsAugContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsAugContents.kpi2 == null)?'grey-2':(pinsAugContents.kpi2 >= '0' && pinsAugContents.kpi2 <= '10.8')?'red':(pinsAugContents.kpi2 > '10.8' && pinsAugContents.kpi2 <= '14.4')?'orange':(pinsAugContents.kpi2 > '14.4' && pinsAugContents.kpi2 < '18')?'yellow-7':(pinsAugContents.kpi2 >= '18' && pinsAugContents.kpi2 < '21.6')?'green':(pinsAugContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsAugContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsAugContents.kpi3 == null)?'grey-2':(pinsAugContents.kpi3 >= '0' && pinsAugContents.kpi3 <= '7.2')?'red':(pinsAugContents.kpi3 > '7.2' && pinsAugContents.kpi3 <= '9.6')?'orange':(pinsAugContents.kpi3 > '9.6' && pinsAugContents.kpi3 < '12')?'yellow-7':(pinsAugContents.kpi3 >= '12' && pinsAugContents.kpi3 < '14.4')?'green':(pinsAugContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsAugContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsSepContents.kpi1 == null)?'grey-2':(pinsSepContents.kpi1 >= '0' && pinsSepContents.kpi1 <= '0.6')?'red':(pinsSepContents.kpi1 > '0.6' && pinsSepContents.kpi1 <= '0.8')?'orange':(pinsSepContents.kpi1 > '0.8' && pinsSepContents.kpi1 < '1')?'yellow-7':(pinsSepContents.kpi1 >= '1' && pinsSepContents.kpi1 < '1.2')?'green':(pinsSepContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsSepContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsSepContents.kpi2 == null)?'grey-2':(pinsSepContents.kpi2 >= '0' && pinsSepContents.kpi2 <= '10.8')?'red':(pinsSepContents.kpi2 > '10.8' && pinsSepContents.kpi2 <= '14.4')?'orange':(pinsSepContents.kpi2 > '14.4' && pinsSepContents.kpi2 < '18')?'yellow-7':(pinsSepContents.kpi2 >= '18' && pinsSepContents.kpi2 < '21.6')?'green':(pinsSepContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsSepContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsSepContents.kpi3 == null)?'grey-2':(pinsSepContents.kpi3 >= '0' && pinsSepContents.kpi3 <= '7.2')?'red':(pinsSepContents.kpi3 > '7.2' && pinsSepContents.kpi3 <= '9.6')?'orange':(pinsSepContents.kpi3 > '9.6' && pinsSepContents.kpi3 < '12')?'yellow-7':(pinsSepContents.kpi3 >= '12' && pinsSepContents.kpi3 < '14.4')?'green':(pinsSepContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsSepContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsOctContents.kpi1 == null)?'grey-2':(pinsOctContents.kpi1 >= '0' && pinsOctContents.kpi1 <= '0.6')?'red':(pinsOctContents.kpi1 > '0.6' && pinsOctContents.kpi1 <= '0.8')?'orange':(pinsOctContents.kpi1 > '0.8' && pinsOctContents.kpi1 < '1')?'yellow-7':(pinsOctContents.kpi1 >= '1' && pinsOctContents.kpi1 < '1.2')?'green':(pinsOctContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsOctContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsOctContents.kpi2 == null)?'grey-2':(pinsOctContents.kpi2 >= '0' && pinsOctContents.kpi2 <= '10.8')?'red':(pinsOctContents.kpi2 > '10.8' && pinsOctContents.kpi2 <= '14.4')?'orange':(pinsOctContents.kpi2 > '14.4' && pinsOctContents.kpi2 < '18')?'yellow-7':(pinsOctContents.kpi2 >= '18' && pinsOctContents.kpi2 < '21.6')?'green':(pinsOctContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsOctContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsOctContents.kpi3 == null)?'grey-2':(pinsOctContents.kpi3 >= '0' && pinsOctContents.kpi3 <= '7.2')?'red':(pinsOctContents.kpi3 > '7.2' && pinsOctContents.kpi3 <= '9.6')?'orange':(pinsOctContents.kpi3 > '9.6' && pinsOctContents.kpi3 < '12')?'yellow-7':(pinsOctContents.kpi3 >= '12' && pinsOctContents.kpi3 < '14.4')?'green':(pinsOctContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsOctContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsNovContents.kpi1 == null)?'grey-2':(pinsNovContents.kpi1 >= '0' && pinsNovContents.kpi1 <= '0.6')?'red':(pinsNovContents.kpi1 > '0.6' && pinsNovContents.kpi1 <= '0.8')?'orange':(pinsNovContents.kpi1 > '0.8' && pinsNovContents.kpi1 < '1')?'yellow-7':(pinsNovContents.kpi1 >= '1' && pinsNovContents.kpi1 < '1.2')?'green':(pinsNovContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsNovContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsNovContents.kpi2 == null)?'grey-2':(pinsNovContents.kpi2 >= '0' && pinsNovContents.kpi2 <= '10.8')?'red':(pinsNovContents.kpi2 > '10.8' && pinsNovContents.kpi2 <= '14.4')?'orange':(pinsNovContents.kpi2 > '14.4' && pinsNovContents.kpi2 < '18')?'yellow-7':(pinsNovContents.kpi2 >= '18' && pinsNovContents.kpi2 < '21.6')?'green':(pinsNovContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsNovContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsNovContents.kpi3 == null)?'grey-2':(pinsNovContents.kpi3 >= '0' && pinsNovContents.kpi3 <= '7.2')?'red':(pinsNovContents.kpi3 > '7.2' && pinsNovContents.kpi3 <= '9.6')?'orange':(pinsNovContents.kpi3 > '9.6' && pinsNovContents.kpi3 < '12')?'yellow-7':(pinsNovContents.kpi3 >= '12' && pinsNovContents.kpi3 < '14.4')?'green':(pinsNovContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsNovContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsDecContents.kpi1 == null)?'grey-2':(pinsDecContents.kpi1 >= '0' && pinsDecContents.kpi1 <= '0.6')?'red':(pinsDecContents.kpi1 > '0.6' && pinsDecContents.kpi1 <= '0.8')?'orange':(pinsDecContents.kpi1 > '0.8' && pinsDecContents.kpi1 < '1')?'yellow-7':(pinsDecContents.kpi1 >= '1' && pinsDecContents.kpi1 < '1.2')?'green':(pinsDecContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsDecContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsDecContents.kpi2 == null)?'grey-2':(pinsDecContents.kpi2 >= '0' && pinsDecContents.kpi2 <= '10.8')?'red':(pinsDecContents.kpi2 > '10.8' && pinsDecContents.kpi2 <= '14.4')?'orange':(pinsDecContents.kpi2 > '14.4' && pinsDecContents.kpi2 < '18')?'yellow-7':(pinsDecContents.kpi2 >= '18' && pinsDecContents.kpi2 < '21.6')?'green':(pinsDecContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsDecContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsDecContents.kpi3 == null)?'grey-2':(pinsDecContents.kpi3 >= '0' && pinsDecContents.kpi3 <= '7.2')?'red':(pinsDecContents.kpi3 > '7.2' && pinsDecContents.kpi3 <= '9.6')?'orange':(pinsDecContents.kpi3 > '9.6' && pinsDecContents.kpi3 < '12')?'yellow-7':(pinsDecContents.kpi3 >= '12' && pinsDecContents.kpi3 < '14.4')?'green':(pinsDecContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsDecContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                                <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of community and social service providers in the networks</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsJanContents.kpi1 == null)?'grey-2':(pinsJanContents.kpi1 >= '0' && pinsJanContents.kpi1 <= '0.6')?'red':(pinsJanContents.kpi1 > '0.6' && pinsJanContents.kpi1 <= '0.8')?'orange':(pinsJanContents.kpi1 > '0.8' && pinsJanContents.kpi1 < '1')?'yellow-7':(pinsJanContents.kpi1 >= '1' && pinsJanContents.kpi1 < '1.2')?'green':(pinsJanContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsJanContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJanContents.kpi2 == null)?'grey-2':(pinsJanContents.kpi2 >= '0' && pinsJanContents.kpi2 <= '10.8')?'red':(pinsJanContents.kpi2 > '10.8' && pinsJanContents.kpi2 <= '14.4')?'orange':(pinsJanContents.kpi2 > '14.4' && pinsJanContents.kpi2 < '18')?'yellow-7':(pinsJanContents.kpi2 >= '18' && pinsJanContents.kpi2 < '21.6')?'green':(pinsJanContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsJanContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJanContents.kpi3 == null)?'grey-2':(pinsJanContents.kpi3 >= '0' && pinsJanContents.kpi3 <= '7.2')?'red':(pinsJanContents.kpi3 > '7.2' && pinsJanContents.kpi3 <= '9.6')?'orange':(pinsJanContents.kpi3 > '9.6' && pinsJanContents.kpi3 < '12')?'yellow-7':(pinsJanContents.kpi3 >= '12' && pinsJanContents.kpi3 < '14.4')?'green':(pinsJanContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsJanContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsFebContents.kpi1 == null)?'grey-2':(pinsFebContents.kpi1 >= '0' && pinsFebContents.kpi1 <= '0.6')?'red':(pinsFebContents.kpi1 > '0.6' && pinsFebContents.kpi1 <= '0.8')?'orange':(pinsFebContents.kpi1 > '0.8' && pinsFebContents.kpi1 < '1')?'yellow-7':(pinsFebContents.kpi1 >= '1' && pinsFebContents.kpi1 < '1.2')?'green':(pinsFebContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsFebContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsFebContents.kpi2 == null)?'grey-2':(pinsFebContents.kpi2 >= '0' && pinsFebContents.kpi2 <= '10.8')?'red':(pinsFebContents.kpi2 > '10.8' && pinsFebContents.kpi2 <= '14.4')?'orange':(pinsFebContents.kpi2 > '14.4' && pinsFebContents.kpi2 < '18')?'yellow-7':(pinsFebContents.kpi2 >= '18' && pinsFebContents.kpi2 < '21.6')?'green':(pinsFebContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsFebContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsFebContents.kpi3 == null)?'grey-2':(pinsFebContents.kpi3 >= '0' && pinsFebContents.kpi3 <= '7.2')?'red':(pinsFebContents.kpi3 > '7.2' && pinsFebContents.kpi3 <= '9.6')?'orange':(pinsFebContents.kpi3 > '9.6' && pinsFebContents.kpi3 < '12')?'yellow-7':(pinsFebContents.kpi3 >= '12' && pinsFebContents.kpi3 < '14.4')?'green':(pinsFebContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsFebContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsMarContents.kpi1 == null)?'grey-2':(pinsMarContents.kpi1 >= '0' && pinsMarContents.kpi1 <= '0.6')?'red':(pinsMarContents.kpi1 > '0.6' && pinsMarContents.kpi1 <= '0.8')?'orange':(pinsMarContents.kpi1 > '0.8' && pinsMarContents.kpi1 < '1')?'yellow-7':(pinsMarContents.kpi1 >= '1' && pinsMarContents.kpi1 < '1.2')?'green':(pinsMarContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsMarContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsMarContents.kpi2 == null)?'grey-2':(pinsMarContents.kpi2 >= '0' && pinsMarContents.kpi2 <= '10.8')?'red':(pinsMarContents.kpi2 > '10.8' && pinsMarContents.kpi2 <= '14.4')?'orange':(pinsMarContents.kpi2 > '14.4' && pinsMarContents.kpi2 < '18')?'yellow-7':(pinsMarContents.kpi2 >= '18' && pinsMarContents.kpi2 < '21.6')?'green':(pinsMarContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsMarContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsMarContents.kpi3 == null)?'grey-2':(pinsMarContents.kpi3 >= '0' && pinsMarContents.kpi3 <= '7.2')?'red':(pinsMarContents.kpi3 > '7.2' && pinsMarContents.kpi3 <= '9.6')?'orange':(pinsMarContents.kpi3 > '9.6' && pinsMarContents.kpi3 < '12')?'yellow-7':(pinsMarContents.kpi3 >= '12' && pinsMarContents.kpi3 < '14.4')?'green':(pinsMarContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsMarContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsAprContents.kpi1 == null)?'grey-2':(pinsAprContents.kpi1 >= '0' && pinsAprContents.kpi1 <= '0.6')?'red':(pinsAprContents.kpi1 > '0.6' && pinsAprContents.kpi1 <= '0.8')?'orange':(pinsAprContents.kpi1 > '0.8' && pinsAprContents.kpi1 < '1')?'yellow-7':(pinsAprContents.kpi1 >= '1' && pinsAprContents.kpi1 < '1.2')?'green':(pinsAprContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsAprContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsAprContents.kpi2 == null)?'grey-2':(pinsAprContents.kpi2 >= '0' && pinsAprContents.kpi2 <= '10.8')?'red':(pinsAprContents.kpi2 > '10.8' && pinsAprContents.kpi2 <= '14.4')?'orange':(pinsAprContents.kpi2 > '14.4' && pinsAprContents.kpi2 < '18')?'yellow-7':(pinsAprContents.kpi2 >= '18' && pinsAprContents.kpi2 < '21.6')?'green':(pinsAprContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsAprContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsAprContents.kpi3 == null)?'grey-2':(pinsAprContents.kpi3 >= '0' && pinsAprContents.kpi3 <= '7.2')?'red':(pinsAprContents.kpi3 > '7.2' && pinsAprContents.kpi3 <= '9.6')?'orange':(pinsAprContents.kpi3 > '9.6' && pinsAprContents.kpi3 < '12')?'yellow-7':(pinsAprContents.kpi3 >= '12' && pinsAprContents.kpi3 < '14.4')?'green':(pinsAprContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsAprContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsMayContents.kpi1 == null)?'grey-2':(pinsMayContents.kpi1 >= '0' && pinsMayContents.kpi1 <= '0.6')?'red':(pinsMayContents.kpi1 > '0.6' && pinsMayContents.kpi1 <= '0.8')?'orange':(pinsMayContents.kpi1 > '0.8' && pinsMayContents.kpi1 < '1')?'yellow-7':(pinsMayContents.kpi1 >= '1' && pinsMayContents.kpi1 < '1.2')?'green':(pinsMayContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsMayContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsMayContents.kpi2 == null)?'grey-2':(pinsMayContents.kpi2 >= '0' && pinsMayContents.kpi2 <= '10.8')?'red':(pinsMayContents.kpi2 > '10.8' && pinsMayContents.kpi2 <= '14.4')?'orange':(pinsMayContents.kpi2 > '14.4' && pinsMayContents.kpi2 < '18')?'yellow-7':(pinsMayContents.kpi2 >= '18' && pinsMayContents.kpi2 < '21.6')?'green':(pinsMayContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsMayContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsMayContents.kpi3 == null)?'grey-2':(pinsMayContents.kpi3 >= '0' && pinsMayContents.kpi3 <= '7.2')?'red':(pinsMayContents.kpi3 > '7.2' && pinsMayContents.kpi3 <= '9.6')?'orange':(pinsMayContents.kpi3 > '9.6' && pinsMayContents.kpi3 < '12')?'yellow-7':(pinsMayContents.kpi3 >= '12' && pinsMayContents.kpi3 < '14.4')?'green':(pinsMayContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsMayContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsJunContents.kpi1 == null)?'grey-2':(pinsJunContents.kpi1 >= '0' && pinsJunContents.kpi1 <= '0.6')?'red':(pinsJunContents.kpi1 > '0.6' && pinsJunContents.kpi1 <= '0.8')?'orange':(pinsJunContents.kpi1 > '0.8' && pinsJunContents.kpi1 < '1')?'yellow-7':(pinsJunContents.kpi1 >= '1' && pinsJunContents.kpi1 < '1.2')?'green':(pinsJunContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsJunContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJunContents.kpi2 == null)?'grey-2':(pinsJunContents.kpi2 >= '0' && pinsJunContents.kpi2 <= '10.8')?'red':(pinsJunContents.kpi2 > '10.8' && pinsJunContents.kpi2 <= '14.4')?'orange':(pinsJunContents.kpi2 > '14.4' && pinsJunContents.kpi2 < '18')?'yellow-7':(pinsJunContents.kpi2 >= '18' && pinsJunContents.kpi2 < '21.6')?'green':(pinsJunContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsJunContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJunContents.kpi3 == null)?'grey-2':(pinsJunContents.kpi3 >= '0' && pinsJunContents.kpi3 <= '7.2')?'red':(pinsJunContents.kpi3 > '7.2' && pinsJunContents.kpi3 <= '9.6')?'orange':(pinsJunContents.kpi3 > '9.6' && pinsJunContents.kpi3 < '12')?'yellow-7':(pinsJunContents.kpi3 >= '12' && pinsJunContents.kpi3 < '14.4')?'green':(pinsJunContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsJunContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsJulContents.kpi1 == null)?'grey-2':(pinsJulContents.kpi1 >= '0' && pinsJulContents.kpi1 <= '0.6')?'red':(pinsJulContents.kpi1 > '0.6' && pinsJulContents.kpi1 <= '0.8')?'orange':(pinsJulContents.kpi1 > '0.8' && pinsJulContents.kpi1 < '1')?'yellow-7':(pinsJulContents.kpi1 >= '1' && pinsJulContents.kpi1 < '1.2')?'green':(pinsJulContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsJulContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJulContents.kpi2 == null)?'grey-2':(pinsJulContents.kpi2 >= '0' && pinsJulContents.kpi2 <= '10.8')?'red':(pinsJulContents.kpi2 > '10.8' && pinsJulContents.kpi2 <= '14.4')?'orange':(pinsJulContents.kpi2 > '14.4' && pinsJulContents.kpi2 < '18')?'yellow-7':(pinsJulContents.kpi2 >= '18' && pinsJulContents.kpi2 < '21.6')?'green':(pinsJulContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsJulContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJulContents.kpi3 == null)?'grey-2':(pinsJulContents.kpi3 >= '0' && pinsJulContents.kpi3 <= '7.2')?'red':(pinsJulContents.kpi3 > '7.2' && pinsJulContents.kpi3 <= '9.6')?'orange':(pinsJulContents.kpi3 > '9.6' && pinsJulContents.kpi3 < '12')?'yellow-7':(pinsJulContents.kpi3 >= '12' && pinsJulContents.kpi3 < '14.4')?'green':(pinsJulContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsJulContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsAugContents.kpi1 == null)?'grey-2':(pinsAugContents.kpi1 >= '0' && pinsAugContents.kpi1 <= '0.6')?'red':(pinsAugContents.kpi1 > '0.6' && pinsAugContents.kpi1 <= '0.8')?'orange':(pinsAugContents.kpi1 > '0.8' && pinsAugContents.kpi1 < '1')?'yellow-7':(pinsAugContents.kpi1 >= '1' && pinsAugContents.kpi1 < '1.2')?'green':(pinsAugContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsAugContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsAugContents.kpi2 == null)?'grey-2':(pinsAugContents.kpi2 >= '0' && pinsAugContents.kpi2 <= '10.8')?'red':(pinsAugContents.kpi2 > '10.8' && pinsAugContents.kpi2 <= '14.4')?'orange':(pinsAugContents.kpi2 > '14.4' && pinsAugContents.kpi2 < '18')?'yellow-7':(pinsAugContents.kpi2 >= '18' && pinsAugContents.kpi2 < '21.6')?'green':(pinsAugContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsAugContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsAugContents.kpi3 == null)?'grey-2':(pinsAugContents.kpi3 >= '0' && pinsAugContents.kpi3 <= '7.2')?'red':(pinsAugContents.kpi3 > '7.2' && pinsAugContents.kpi3 <= '9.6')?'orange':(pinsAugContents.kpi3 > '9.6' && pinsAugContents.kpi3 < '12')?'yellow-7':(pinsAugContents.kpi3 >= '12' && pinsAugContents.kpi3 < '14.4')?'green':(pinsAugContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsAugContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsSepContents.kpi1 == null)?'grey-2':(pinsSepContents.kpi1 >= '0' && pinsSepContents.kpi1 <= '0.6')?'red':(pinsSepContents.kpi1 > '0.6' && pinsSepContents.kpi1 <= '0.8')?'orange':(pinsSepContents.kpi1 > '0.8' && pinsSepContents.kpi1 < '1')?'yellow-7':(pinsSepContents.kpi1 >= '1' && pinsSepContents.kpi1 < '1.2')?'green':(pinsSepContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsSepContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsSepContents.kpi2 == null)?'grey-2':(pinsSepContents.kpi2 >= '0' && pinsSepContents.kpi2 <= '10.8')?'red':(pinsSepContents.kpi2 > '10.8' && pinsSepContents.kpi2 <= '14.4')?'orange':(pinsSepContents.kpi2 > '14.4' && pinsSepContents.kpi2 < '18')?'yellow-7':(pinsSepContents.kpi2 >= '18' && pinsSepContents.kpi2 < '21.6')?'green':(pinsSepContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsSepContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsSepContents.kpi3 == null)?'grey-2':(pinsSepContents.kpi3 >= '0' && pinsSepContents.kpi3 <= '7.2')?'red':(pinsSepContents.kpi3 > '7.2' && pinsSepContents.kpi3 <= '9.6')?'orange':(pinsSepContents.kpi3 > '9.6' && pinsSepContents.kpi3 < '12')?'yellow-7':(pinsSepContents.kpi3 >= '12' && pinsSepContents.kpi3 < '14.4')?'green':(pinsSepContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsSepContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsOctContents.kpi1 == null)?'grey-2':(pinsOctContents.kpi1 >= '0' && pinsOctContents.kpi1 <= '0.6')?'red':(pinsOctContents.kpi1 > '0.6' && pinsOctContents.kpi1 <= '0.8')?'orange':(pinsOctContents.kpi1 > '0.8' && pinsOctContents.kpi1 < '1')?'yellow-7':(pinsOctContents.kpi1 >= '1' && pinsOctContents.kpi1 < '1.2')?'green':(pinsOctContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsOctContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsOctContents.kpi2 == null)?'grey-2':(pinsOctContents.kpi2 >= '0' && pinsOctContents.kpi2 <= '10.8')?'red':(pinsOctContents.kpi2 > '10.8' && pinsOctContents.kpi2 <= '14.4')?'orange':(pinsOctContents.kpi2 > '14.4' && pinsOctContents.kpi2 < '18')?'yellow-7':(pinsOctContents.kpi2 >= '18' && pinsOctContents.kpi2 < '21.6')?'green':(pinsOctContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsOctContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsOctContents.kpi3 == null)?'grey-2':(pinsOctContents.kpi3 >= '0' && pinsOctContents.kpi3 <= '7.2')?'red':(pinsOctContents.kpi3 > '7.2' && pinsOctContents.kpi3 <= '9.6')?'orange':(pinsOctContents.kpi3 > '9.6' && pinsOctContents.kpi3 < '12')?'yellow-7':(pinsOctContents.kpi3 >= '12' && pinsOctContents.kpi3 < '14.4')?'green':(pinsOctContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsOctContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsNovContents.kpi1 == null)?'grey-2':(pinsNovContents.kpi1 >= '0' && pinsNovContents.kpi1 <= '0.6')?'red':(pinsNovContents.kpi1 > '0.6' && pinsNovContents.kpi1 <= '0.8')?'orange':(pinsNovContents.kpi1 > '0.8' && pinsNovContents.kpi1 < '1')?'yellow-7':(pinsNovContents.kpi1 >= '1' && pinsNovContents.kpi1 < '1.2')?'green':(pinsNovContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsNovContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsNovContents.kpi2 == null)?'grey-2':(pinsNovContents.kpi2 >= '0' && pinsNovContents.kpi2 <= '10.8')?'red':(pinsNovContents.kpi2 > '10.8' && pinsNovContents.kpi2 <= '14.4')?'orange':(pinsNovContents.kpi2 > '14.4' && pinsNovContents.kpi2 < '18')?'yellow-7':(pinsNovContents.kpi2 >= '18' && pinsNovContents.kpi2 < '21.6')?'green':(pinsNovContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsNovContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsNovContents.kpi3 == null)?'grey-2':(pinsNovContents.kpi3 >= '0' && pinsNovContents.kpi3 <= '7.2')?'red':(pinsNovContents.kpi3 > '7.2' && pinsNovContents.kpi3 <= '9.6')?'orange':(pinsNovContents.kpi3 > '9.6' && pinsNovContents.kpi3 < '12')?'yellow-7':(pinsNovContents.kpi3 >= '12' && pinsNovContents.kpi3 < '14.4')?'green':(pinsNovContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsNovContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsDecContents.kpi1 == null)?'grey-2':(pinsDecContents.kpi1 >= '0' && pinsDecContents.kpi1 <= '0.6')?'red':(pinsDecContents.kpi1 > '0.6' && pinsDecContents.kpi1 <= '0.8')?'orange':(pinsDecContents.kpi1 > '0.8' && pinsDecContents.kpi1 < '1')?'yellow-7':(pinsDecContents.kpi1 >= '1' && pinsDecContents.kpi1 < '1.2')?'green':(pinsDecContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsDecContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsDecContents.kpi2 == null)?'grey-2':(pinsDecContents.kpi2 >= '0' && pinsDecContents.kpi2 <= '10.8')?'red':(pinsDecContents.kpi2 > '10.8' && pinsDecContents.kpi2 <= '14.4')?'orange':(pinsDecContents.kpi2 > '14.4' && pinsDecContents.kpi2 < '18')?'yellow-7':(pinsDecContents.kpi2 >= '18' && pinsDecContents.kpi2 < '21.6')?'green':(pinsDecContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsDecContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsDecContents.kpi3 == null)?'grey-2':(pinsDecContents.kpi3 >= '0' && pinsDecContents.kpi3 <= '7.2')?'red':(pinsDecContents.kpi3 > '7.2' && pinsDecContents.kpi3 <= '9.6')?'orange':(pinsDecContents.kpi3 > '9.6' && pinsDecContents.kpi3 < '12')?'yellow-7':(pinsDecContents.kpi3 >= '12' && pinsDecContents.kpi3 < '14.4')?'green':(pinsDecContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsDecContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                                <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of community and social service providers in the networks</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsJanContents.kpi1 == null)?'grey-2':(pinsJanContents.kpi1 >= '0' && pinsJanContents.kpi1 <= '0.6')?'red':(pinsJanContents.kpi1 > '0.6' && pinsJanContents.kpi1 <= '0.8')?'orange':(pinsJanContents.kpi1 > '0.8' && pinsJanContents.kpi1 < '1')?'yellow-7':(pinsJanContents.kpi1 >= '1' && pinsJanContents.kpi1 < '1.2')?'green':(pinsJanContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsJanContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJanContents.kpi2 == null)?'grey-2':(pinsJanContents.kpi2 >= '0' && pinsJanContents.kpi2 <= '10.8')?'red':(pinsJanContents.kpi2 > '10.8' && pinsJanContents.kpi2 <= '14.4')?'orange':(pinsJanContents.kpi2 > '14.4' && pinsJanContents.kpi2 < '18')?'yellow-7':(pinsJanContents.kpi2 >= '18' && pinsJanContents.kpi2 < '21.6')?'green':(pinsJanContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsJanContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJanContents.kpi3 == null)?'grey-2':(pinsJanContents.kpi3 >= '0' && pinsJanContents.kpi3 <= '7.2')?'red':(pinsJanContents.kpi3 > '7.2' && pinsJanContents.kpi3 <= '9.6')?'orange':(pinsJanContents.kpi3 > '9.6' && pinsJanContents.kpi3 < '12')?'yellow-7':(pinsJanContents.kpi3 >= '12' && pinsJanContents.kpi3 < '14.4')?'green':(pinsJanContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsJanContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsFebContents.kpi1 == null)?'grey-2':(pinsFebContents.kpi1 >= '0' && pinsFebContents.kpi1 <= '0.6')?'red':(pinsFebContents.kpi1 > '0.6' && pinsFebContents.kpi1 <= '0.8')?'orange':(pinsFebContents.kpi1 > '0.8' && pinsFebContents.kpi1 < '1')?'yellow-7':(pinsFebContents.kpi1 >= '1' && pinsFebContents.kpi1 < '1.2')?'green':(pinsFebContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsFebContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsFebContents.kpi2 == null)?'grey-2':(pinsFebContents.kpi2 >= '0' && pinsFebContents.kpi2 <= '10.8')?'red':(pinsFebContents.kpi2 > '10.8' && pinsFebContents.kpi2 <= '14.4')?'orange':(pinsFebContents.kpi2 > '14.4' && pinsFebContents.kpi2 < '18')?'yellow-7':(pinsFebContents.kpi2 >= '18' && pinsFebContents.kpi2 < '21.6')?'green':(pinsFebContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsFebContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsFebContents.kpi3 == null)?'grey-2':(pinsFebContents.kpi3 >= '0' && pinsFebContents.kpi3 <= '7.2')?'red':(pinsFebContents.kpi3 > '7.2' && pinsFebContents.kpi3 <= '9.6')?'orange':(pinsFebContents.kpi3 > '9.6' && pinsFebContents.kpi3 < '12')?'yellow-7':(pinsFebContents.kpi3 >= '12' && pinsFebContents.kpi3 < '14.4')?'green':(pinsFebContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsFebContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsMarContents.kpi1 == null)?'grey-2':(pinsMarContents.kpi1 >= '0' && pinsMarContents.kpi1 <= '0.6')?'red':(pinsMarContents.kpi1 > '0.6' && pinsMarContents.kpi1 <= '0.8')?'orange':(pinsMarContents.kpi1 > '0.8' && pinsMarContents.kpi1 < '1')?'yellow-7':(pinsMarContents.kpi1 >= '1' && pinsMarContents.kpi1 < '1.2')?'green':(pinsMarContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsMarContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsMarContents.kpi2 == null)?'grey-2':(pinsMarContents.kpi2 >= '0' && pinsMarContents.kpi2 <= '10.8')?'red':(pinsMarContents.kpi2 > '10.8' && pinsMarContents.kpi2 <= '14.4')?'orange':(pinsMarContents.kpi2 > '14.4' && pinsMarContents.kpi2 < '18')?'yellow-7':(pinsMarContents.kpi2 >= '18' && pinsMarContents.kpi2 < '21.6')?'green':(pinsMarContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsMarContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsMarContents.kpi3 == null)?'grey-2':(pinsMarContents.kpi3 >= '0' && pinsMarContents.kpi3 <= '7.2')?'red':(pinsMarContents.kpi3 > '7.2' && pinsMarContents.kpi3 <= '9.6')?'orange':(pinsMarContents.kpi3 > '9.6' && pinsMarContents.kpi3 < '12')?'yellow-7':(pinsMarContents.kpi3 >= '12' && pinsMarContents.kpi3 < '14.4')?'green':(pinsMarContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsMarContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsAprContents.kpi1 == null)?'grey-2':(pinsAprContents.kpi1 >= '0' && pinsAprContents.kpi1 <= '0.6')?'red':(pinsAprContents.kpi1 > '0.6' && pinsAprContents.kpi1 <= '0.8')?'orange':(pinsAprContents.kpi1 > '0.8' && pinsAprContents.kpi1 < '1')?'yellow-7':(pinsAprContents.kpi1 >= '1' && pinsAprContents.kpi1 < '1.2')?'green':(pinsAprContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsAprContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsAprContents.kpi2 == null)?'grey-2':(pinsAprContents.kpi2 >= '0' && pinsAprContents.kpi2 <= '10.8')?'red':(pinsAprContents.kpi2 > '10.8' && pinsAprContents.kpi2 <= '14.4')?'orange':(pinsAprContents.kpi2 > '14.4' && pinsAprContents.kpi2 < '18')?'yellow-7':(pinsAprContents.kpi2 >= '18' && pinsAprContents.kpi2 < '21.6')?'green':(pinsAprContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsAprContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsAprContents.kpi3 == null)?'grey-2':(pinsAprContents.kpi3 >= '0' && pinsAprContents.kpi3 <= '7.2')?'red':(pinsAprContents.kpi3 > '7.2' && pinsAprContents.kpi3 <= '9.6')?'orange':(pinsAprContents.kpi3 > '9.6' && pinsAprContents.kpi3 < '12')?'yellow-7':(pinsAprContents.kpi3 >= '12' && pinsAprContents.kpi3 < '14.4')?'green':(pinsAprContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsAprContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsMayContents.kpi1 == null)?'grey-2':(pinsMayContents.kpi1 >= '0' && pinsMayContents.kpi1 <= '0.6')?'red':(pinsMayContents.kpi1 > '0.6' && pinsMayContents.kpi1 <= '0.8')?'orange':(pinsMayContents.kpi1 > '0.8' && pinsMayContents.kpi1 < '1')?'yellow-7':(pinsMayContents.kpi1 >= '1' && pinsMayContents.kpi1 < '1.2')?'green':(pinsMayContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsMayContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsMayContents.kpi2 == null)?'grey-2':(pinsMayContents.kpi2 >= '0' && pinsMayContents.kpi2 <= '10.8')?'red':(pinsMayContents.kpi2 > '10.8' && pinsMayContents.kpi2 <= '14.4')?'orange':(pinsMayContents.kpi2 > '14.4' && pinsMayContents.kpi2 < '18')?'yellow-7':(pinsMayContents.kpi2 >= '18' && pinsMayContents.kpi2 < '21.6')?'green':(pinsMayContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsMayContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsMayContents.kpi3 == null)?'grey-2':(pinsMayContents.kpi3 >= '0' && pinsMayContents.kpi3 <= '7.2')?'red':(pinsMayContents.kpi3 > '7.2' && pinsMayContents.kpi3 <= '9.6')?'orange':(pinsMayContents.kpi3 > '9.6' && pinsMayContents.kpi3 < '12')?'yellow-7':(pinsMayContents.kpi3 >= '12' && pinsMayContents.kpi3 < '14.4')?'green':(pinsMayContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsMayContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsJunContents.kpi1 == null)?'grey-2':(pinsJunContents.kpi1 >= '0' && pinsJunContents.kpi1 <= '0.6')?'red':(pinsJunContents.kpi1 > '0.6' && pinsJunContents.kpi1 <= '0.8')?'orange':(pinsJunContents.kpi1 > '0.8' && pinsJunContents.kpi1 < '1')?'yellow-7':(pinsJunContents.kpi1 >= '1' && pinsJunContents.kpi1 < '1.2')?'green':(pinsJunContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsJunContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJunContents.kpi2 == null)?'grey-2':(pinsJunContents.kpi2 >= '0' && pinsJunContents.kpi2 <= '10.8')?'red':(pinsJunContents.kpi2 > '10.8' && pinsJunContents.kpi2 <= '14.4')?'orange':(pinsJunContents.kpi2 > '14.4' && pinsJunContents.kpi2 < '18')?'yellow-7':(pinsJunContents.kpi2 >= '18' && pinsJunContents.kpi2 < '21.6')?'green':(pinsJunContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsJunContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJunContents.kpi3 == null)?'grey-2':(pinsJunContents.kpi3 >= '0' && pinsJunContents.kpi3 <= '7.2')?'red':(pinsJunContents.kpi3 > '7.2' && pinsJunContents.kpi3 <= '9.6')?'orange':(pinsJunContents.kpi3 > '9.6' && pinsJunContents.kpi3 < '12')?'yellow-7':(pinsJunContents.kpi3 >= '12' && pinsJunContents.kpi3 < '14.4')?'green':(pinsJunContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsJunContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsJulContents.kpi1 == null)?'grey-2':(pinsJulContents.kpi1 >= '0' && pinsJulContents.kpi1 <= '0.6')?'red':(pinsJulContents.kpi1 > '0.6' && pinsJulContents.kpi1 <= '0.8')?'orange':(pinsJulContents.kpi1 > '0.8' && pinsJulContents.kpi1 < '1')?'yellow-7':(pinsJulContents.kpi1 >= '1' && pinsJulContents.kpi1 < '1.2')?'green':(pinsJulContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsJulContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJulContents.kpi2 == null)?'grey-2':(pinsJulContents.kpi2 >= '0' && pinsJulContents.kpi2 <= '10.8')?'red':(pinsJulContents.kpi2 > '10.8' && pinsJulContents.kpi2 <= '14.4')?'orange':(pinsJulContents.kpi2 > '14.4' && pinsJulContents.kpi2 < '18')?'yellow-7':(pinsJulContents.kpi2 >= '18' && pinsJulContents.kpi2 < '21.6')?'green':(pinsJulContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsJulContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJulContents.kpi3 == null)?'grey-2':(pinsJulContents.kpi3 >= '0' && pinsJulContents.kpi3 <= '7.2')?'red':(pinsJulContents.kpi3 > '7.2' && pinsJulContents.kpi3 <= '9.6')?'orange':(pinsJulContents.kpi3 > '9.6' && pinsJulContents.kpi3 < '12')?'yellow-7':(pinsJulContents.kpi3 >= '12' && pinsJulContents.kpi3 < '14.4')?'green':(pinsJulContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsJulContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsAugContents.kpi1 == null)?'grey-2':(pinsAugContents.kpi1 >= '0' && pinsAugContents.kpi1 <= '0.6')?'red':(pinsAugContents.kpi1 > '0.6' && pinsAugContents.kpi1 <= '0.8')?'orange':(pinsAugContents.kpi1 > '0.8' && pinsAugContents.kpi1 < '1')?'yellow-7':(pinsAugContents.kpi1 >= '1' && pinsAugContents.kpi1 < '1.2')?'green':(pinsAugContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsAugContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsAugContents.kpi2 == null)?'grey-2':(pinsAugContents.kpi2 >= '0' && pinsAugContents.kpi2 <= '10.8')?'red':(pinsAugContents.kpi2 > '10.8' && pinsAugContents.kpi2 <= '14.4')?'orange':(pinsAugContents.kpi2 > '14.4' && pinsAugContents.kpi2 < '18')?'yellow-7':(pinsAugContents.kpi2 >= '18' && pinsAugContents.kpi2 < '21.6')?'green':(pinsAugContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsAugContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsAugContents.kpi3 == null)?'grey-2':(pinsAugContents.kpi3 >= '0' && pinsAugContents.kpi3 <= '7.2')?'red':(pinsAugContents.kpi3 > '7.2' && pinsAugContents.kpi3 <= '9.6')?'orange':(pinsAugContents.kpi3 > '9.6' && pinsAugContents.kpi3 < '12')?'yellow-7':(pinsAugContents.kpi3 >= '12' && pinsAugContents.kpi3 < '14.4')?'green':(pinsAugContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsAugContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsSepContents.kpi1 == null)?'grey-2':(pinsSepContents.kpi1 >= '0' && pinsSepContents.kpi1 <= '0.6')?'red':(pinsSepContents.kpi1 > '0.6' && pinsSepContents.kpi1 <= '0.8')?'orange':(pinsSepContents.kpi1 > '0.8' && pinsSepContents.kpi1 < '1')?'yellow-7':(pinsSepContents.kpi1 >= '1' && pinsSepContents.kpi1 < '1.2')?'green':(pinsSepContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsSepContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsSepContents.kpi2 == null)?'grey-2':(pinsSepContents.kpi2 >= '0' && pinsSepContents.kpi2 <= '10.8')?'red':(pinsSepContents.kpi2 > '10.8' && pinsSepContents.kpi2 <= '14.4')?'orange':(pinsSepContents.kpi2 > '14.4' && pinsSepContents.kpi2 < '18')?'yellow-7':(pinsSepContents.kpi2 >= '18' && pinsSepContents.kpi2 < '21.6')?'green':(pinsSepContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsSepContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsSepContents.kpi3 == null)?'grey-2':(pinsSepContents.kpi3 >= '0' && pinsSepContents.kpi3 <= '7.2')?'red':(pinsSepContents.kpi3 > '7.2' && pinsSepContents.kpi3 <= '9.6')?'orange':(pinsSepContents.kpi3 > '9.6' && pinsSepContents.kpi3 < '12')?'yellow-7':(pinsSepContents.kpi3 >= '12' && pinsSepContents.kpi3 < '14.4')?'green':(pinsSepContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsSepContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsOctContents.kpi1 == null)?'grey-2':(pinsOctContents.kpi1 >= '0' && pinsOctContents.kpi1 <= '0.6')?'red':(pinsOctContents.kpi1 > '0.6' && pinsOctContents.kpi1 <= '0.8')?'orange':(pinsOctContents.kpi1 > '0.8' && pinsOctContents.kpi1 < '1')?'yellow-7':(pinsOctContents.kpi1 >= '1' && pinsOctContents.kpi1 < '1.2')?'green':(pinsOctContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsOctContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsOctContents.kpi2 == null)?'grey-2':(pinsOctContents.kpi2 >= '0' && pinsOctContents.kpi2 <= '10.8')?'red':(pinsOctContents.kpi2 > '10.8' && pinsOctContents.kpi2 <= '14.4')?'orange':(pinsOctContents.kpi2 > '14.4' && pinsOctContents.kpi2 < '18')?'yellow-7':(pinsOctContents.kpi2 >= '18' && pinsOctContents.kpi2 < '21.6')?'green':(pinsOctContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsOctContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsOctContents.kpi3 == null)?'grey-2':(pinsOctContents.kpi3 >= '0' && pinsOctContents.kpi3 <= '7.2')?'red':(pinsOctContents.kpi3 > '7.2' && pinsOctContents.kpi3 <= '9.6')?'orange':(pinsOctContents.kpi3 > '9.6' && pinsOctContents.kpi3 < '12')?'yellow-7':(pinsOctContents.kpi3 >= '12' && pinsOctContents.kpi3 < '14.4')?'green':(pinsOctContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsOctContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsNovContents.kpi1 == null)?'grey-2':(pinsNovContents.kpi1 >= '0' && pinsNovContents.kpi1 <= '0.6')?'red':(pinsNovContents.kpi1 > '0.6' && pinsNovContents.kpi1 <= '0.8')?'orange':(pinsNovContents.kpi1 > '0.8' && pinsNovContents.kpi1 < '1')?'yellow-7':(pinsNovContents.kpi1 >= '1' && pinsNovContents.kpi1 < '1.2')?'green':(pinsNovContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsNovContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsNovContents.kpi2 == null)?'grey-2':(pinsNovContents.kpi2 >= '0' && pinsNovContents.kpi2 <= '10.8')?'red':(pinsNovContents.kpi2 > '10.8' && pinsNovContents.kpi2 <= '14.4')?'orange':(pinsNovContents.kpi2 > '14.4' && pinsNovContents.kpi2 < '18')?'yellow-7':(pinsNovContents.kpi2 >= '18' && pinsNovContents.kpi2 < '21.6')?'green':(pinsNovContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsNovContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsNovContents.kpi3 == null)?'grey-2':(pinsNovContents.kpi3 >= '0' && pinsNovContents.kpi3 <= '7.2')?'red':(pinsNovContents.kpi3 > '7.2' && pinsNovContents.kpi3 <= '9.6')?'orange':(pinsNovContents.kpi3 > '9.6' && pinsNovContents.kpi3 < '12')?'yellow-7':(pinsNovContents.kpi3 >= '12' && pinsNovContents.kpi3 < '14.4')?'green':(pinsNovContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsNovContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsDecContents.kpi1 == null)?'grey-2':(pinsDecContents.kpi1 >= '0' && pinsDecContents.kpi1 <= '0.6')?'red':(pinsDecContents.kpi1 > '0.6' && pinsDecContents.kpi1 <= '0.8')?'orange':(pinsDecContents.kpi1 > '0.8' && pinsDecContents.kpi1 < '1')?'yellow-7':(pinsDecContents.kpi1 >= '1' && pinsDecContents.kpi1 < '1.2')?'green':(pinsDecContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsDecContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsDecContents.kpi2 == null)?'grey-2':(pinsDecContents.kpi2 >= '0' && pinsDecContents.kpi2 <= '10.8')?'red':(pinsDecContents.kpi2 > '10.8' && pinsDecContents.kpi2 <= '14.4')?'orange':(pinsDecContents.kpi2 > '14.4' && pinsDecContents.kpi2 < '18')?'yellow-7':(pinsDecContents.kpi2 >= '18' && pinsDecContents.kpi2 < '21.6')?'green':(pinsDecContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsDecContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsDecContents.kpi3 == null)?'grey-2':(pinsDecContents.kpi3 >= '0' && pinsDecContents.kpi3 <= '7.2')?'red':(pinsDecContents.kpi3 > '7.2' && pinsDecContents.kpi3 <= '9.6')?'orange':(pinsDecContents.kpi3 > '9.6' && pinsDecContents.kpi3 < '12')?'yellow-7':(pinsDecContents.kpi3 >= '12' && pinsDecContents.kpi3 < '14.4')?'green':(pinsDecContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsDecContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                                <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of community and social service providers in the networks</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsJanContents.kpi1 == null)?'grey-2':(pinsJanContents.kpi1 >= '0' && pinsJanContents.kpi1 <= '0.6')?'red':(pinsJanContents.kpi1 > '0.6' && pinsJanContents.kpi1 <= '0.8')?'orange':(pinsJanContents.kpi1 > '0.8' && pinsJanContents.kpi1 < '1')?'yellow-7':(pinsJanContents.kpi1 >= '1' && pinsJanContents.kpi1 < '1.2')?'green':(pinsJanContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsJanContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJanContents.kpi2 == null)?'grey-2':(pinsJanContents.kpi2 >= '0' && pinsJanContents.kpi2 <= '10.8')?'red':(pinsJanContents.kpi2 > '10.8' && pinsJanContents.kpi2 <= '14.4')?'orange':(pinsJanContents.kpi2 > '14.4' && pinsJanContents.kpi2 < '18')?'yellow-7':(pinsJanContents.kpi2 >= '18' && pinsJanContents.kpi2 < '21.6')?'green':(pinsJanContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsJanContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJanContents.kpi3 == null)?'grey-2':(pinsJanContents.kpi3 >= '0' && pinsJanContents.kpi3 <= '7.2')?'red':(pinsJanContents.kpi3 > '7.2' && pinsJanContents.kpi3 <= '9.6')?'orange':(pinsJanContents.kpi3 > '9.6' && pinsJanContents.kpi3 < '12')?'yellow-7':(pinsJanContents.kpi3 >= '12' && pinsJanContents.kpi3 < '14.4')?'green':(pinsJanContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsJanContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsFebContents.kpi1 == null)?'grey-2':(pinsFebContents.kpi1 >= '0' && pinsFebContents.kpi1 <= '0.6')?'red':(pinsFebContents.kpi1 > '0.6' && pinsFebContents.kpi1 <= '0.8')?'orange':(pinsFebContents.kpi1 > '0.8' && pinsFebContents.kpi1 < '1')?'yellow-7':(pinsFebContents.kpi1 >= '1' && pinsFebContents.kpi1 < '1.2')?'green':(pinsFebContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsFebContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsFebContents.kpi2 == null)?'grey-2':(pinsFebContents.kpi2 >= '0' && pinsFebContents.kpi2 <= '10.8')?'red':(pinsFebContents.kpi2 > '10.8' && pinsFebContents.kpi2 <= '14.4')?'orange':(pinsFebContents.kpi2 > '14.4' && pinsFebContents.kpi2 < '18')?'yellow-7':(pinsFebContents.kpi2 >= '18' && pinsFebContents.kpi2 < '21.6')?'green':(pinsFebContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsFebContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsFebContents.kpi3 == null)?'grey-2':(pinsFebContents.kpi3 >= '0' && pinsFebContents.kpi3 <= '7.2')?'red':(pinsFebContents.kpi3 > '7.2' && pinsFebContents.kpi3 <= '9.6')?'orange':(pinsFebContents.kpi3 > '9.6' && pinsFebContents.kpi3 < '12')?'yellow-7':(pinsFebContents.kpi3 >= '12' && pinsFebContents.kpi3 < '14.4')?'green':(pinsFebContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsFebContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsMarContents.kpi1 == null)?'grey-2':(pinsMarContents.kpi1 >= '0' && pinsMarContents.kpi1 <= '0.6')?'red':(pinsMarContents.kpi1 > '0.6' && pinsMarContents.kpi1 <= '0.8')?'orange':(pinsMarContents.kpi1 > '0.8' && pinsMarContents.kpi1 < '1')?'yellow-7':(pinsMarContents.kpi1 >= '1' && pinsMarContents.kpi1 < '1.2')?'green':(pinsMarContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsMarContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsMarContents.kpi2 == null)?'grey-2':(pinsMarContents.kpi2 >= '0' && pinsMarContents.kpi2 <= '10.8')?'red':(pinsMarContents.kpi2 > '10.8' && pinsMarContents.kpi2 <= '14.4')?'orange':(pinsMarContents.kpi2 > '14.4' && pinsMarContents.kpi2 < '18')?'yellow-7':(pinsMarContents.kpi2 >= '18' && pinsMarContents.kpi2 < '21.6')?'green':(pinsMarContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsMarContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsMarContents.kpi3 == null)?'grey-2':(pinsMarContents.kpi3 >= '0' && pinsMarContents.kpi3 <= '7.2')?'red':(pinsMarContents.kpi3 > '7.2' && pinsMarContents.kpi3 <= '9.6')?'orange':(pinsMarContents.kpi3 > '9.6' && pinsMarContents.kpi3 < '12')?'yellow-7':(pinsMarContents.kpi3 >= '12' && pinsMarContents.kpi3 < '14.4')?'green':(pinsMarContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsMarContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsAprContents.kpi1 == null)?'grey-2':(pinsAprContents.kpi1 >= '0' && pinsAprContents.kpi1 <= '0.6')?'red':(pinsAprContents.kpi1 > '0.6' && pinsAprContents.kpi1 <= '0.8')?'orange':(pinsAprContents.kpi1 > '0.8' && pinsAprContents.kpi1 < '1')?'yellow-7':(pinsAprContents.kpi1 >= '1' && pinsAprContents.kpi1 < '1.2')?'green':(pinsAprContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsAprContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsAprContents.kpi2 == null)?'grey-2':(pinsAprContents.kpi2 >= '0' && pinsAprContents.kpi2 <= '10.8')?'red':(pinsAprContents.kpi2 > '10.8' && pinsAprContents.kpi2 <= '14.4')?'orange':(pinsAprContents.kpi2 > '14.4' && pinsAprContents.kpi2 < '18')?'yellow-7':(pinsAprContents.kpi2 >= '18' && pinsAprContents.kpi2 < '21.6')?'green':(pinsAprContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsAprContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsAprContents.kpi3 == null)?'grey-2':(pinsAprContents.kpi3 >= '0' && pinsAprContents.kpi3 <= '7.2')?'red':(pinsAprContents.kpi3 > '7.2' && pinsAprContents.kpi3 <= '9.6')?'orange':(pinsAprContents.kpi3 > '9.6' && pinsAprContents.kpi3 < '12')?'yellow-7':(pinsAprContents.kpi3 >= '12' && pinsAprContents.kpi3 < '14.4')?'green':(pinsAprContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsAprContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsMayContents.kpi1 == null)?'grey-2':(pinsMayContents.kpi1 >= '0' && pinsMayContents.kpi1 <= '0.6')?'red':(pinsMayContents.kpi1 > '0.6' && pinsMayContents.kpi1 <= '0.8')?'orange':(pinsMayContents.kpi1 > '0.8' && pinsMayContents.kpi1 < '1')?'yellow-7':(pinsMayContents.kpi1 >= '1' && pinsMayContents.kpi1 < '1.2')?'green':(pinsMayContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsMayContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsMayContents.kpi2 == null)?'grey-2':(pinsMayContents.kpi2 >= '0' && pinsMayContents.kpi2 <= '10.8')?'red':(pinsMayContents.kpi2 > '10.8' && pinsMayContents.kpi2 <= '14.4')?'orange':(pinsMayContents.kpi2 > '14.4' && pinsMayContents.kpi2 < '18')?'yellow-7':(pinsMayContents.kpi2 >= '18' && pinsMayContents.kpi2 < '21.6')?'green':(pinsMayContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsMayContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsMayContents.kpi3 == null)?'grey-2':(pinsMayContents.kpi3 >= '0' && pinsMayContents.kpi3 <= '7.2')?'red':(pinsMayContents.kpi3 > '7.2' && pinsMayContents.kpi3 <= '9.6')?'orange':(pinsMayContents.kpi3 > '9.6' && pinsMayContents.kpi3 < '12')?'yellow-7':(pinsMayContents.kpi3 >= '12' && pinsMayContents.kpi3 < '14.4')?'green':(pinsMayContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsMayContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsJunContents.kpi1 == null)?'grey-2':(pinsJunContents.kpi1 >= '0' && pinsJunContents.kpi1 <= '0.6')?'red':(pinsJunContents.kpi1 > '0.6' && pinsJunContents.kpi1 <= '0.8')?'orange':(pinsJunContents.kpi1 > '0.8' && pinsJunContents.kpi1 < '1')?'yellow-7':(pinsJunContents.kpi1 >= '1' && pinsJunContents.kpi1 < '1.2')?'green':(pinsJunContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsJunContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJunContents.kpi2 == null)?'grey-2':(pinsJunContents.kpi2 >= '0' && pinsJunContents.kpi2 <= '10.8')?'red':(pinsJunContents.kpi2 > '10.8' && pinsJunContents.kpi2 <= '14.4')?'orange':(pinsJunContents.kpi2 > '14.4' && pinsJunContents.kpi2 < '18')?'yellow-7':(pinsJunContents.kpi2 >= '18' && pinsJunContents.kpi2 < '21.6')?'green':(pinsJunContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsJunContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJunContents.kpi3 == null)?'grey-2':(pinsJunContents.kpi3 >= '0' && pinsJunContents.kpi3 <= '7.2')?'red':(pinsJunContents.kpi3 > '7.2' && pinsJunContents.kpi3 <= '9.6')?'orange':(pinsJunContents.kpi3 > '9.6' && pinsJunContents.kpi3 < '12')?'yellow-7':(pinsJunContents.kpi3 >= '12' && pinsJunContents.kpi3 < '14.4')?'green':(pinsJunContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsJunContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsJulContents.kpi1 == null)?'grey-2':(pinsJulContents.kpi1 >= '0' && pinsJulContents.kpi1 <= '0.6')?'red':(pinsJulContents.kpi1 > '0.6' && pinsJulContents.kpi1 <= '0.8')?'orange':(pinsJulContents.kpi1 > '0.8' && pinsJulContents.kpi1 < '1')?'yellow-7':(pinsJulContents.kpi1 >= '1' && pinsJulContents.kpi1 < '1.2')?'green':(pinsJulContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsJulContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJulContents.kpi2 == null)?'grey-2':(pinsJulContents.kpi2 >= '0' && pinsJulContents.kpi2 <= '10.8')?'red':(pinsJulContents.kpi2 > '10.8' && pinsJulContents.kpi2 <= '14.4')?'orange':(pinsJulContents.kpi2 > '14.4' && pinsJulContents.kpi2 < '18')?'yellow-7':(pinsJulContents.kpi2 >= '18' && pinsJulContents.kpi2 < '21.6')?'green':(pinsJulContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsJulContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJulContents.kpi3 == null)?'grey-2':(pinsJulContents.kpi3 >= '0' && pinsJulContents.kpi3 <= '7.2')?'red':(pinsJulContents.kpi3 > '7.2' && pinsJulContents.kpi3 <= '9.6')?'orange':(pinsJulContents.kpi3 > '9.6' && pinsJulContents.kpi3 < '12')?'yellow-7':(pinsJulContents.kpi3 >= '12' && pinsJulContents.kpi3 < '14.4')?'green':(pinsJulContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsJulContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsAugContents.kpi1 == null)?'grey-2':(pinsAugContents.kpi1 >= '0' && pinsAugContents.kpi1 <= '0.6')?'red':(pinsAugContents.kpi1 > '0.6' && pinsAugContents.kpi1 <= '0.8')?'orange':(pinsAugContents.kpi1 > '0.8' && pinsAugContents.kpi1 < '1')?'yellow-7':(pinsAugContents.kpi1 >= '1' && pinsAugContents.kpi1 < '1.2')?'green':(pinsAugContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsAugContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsAugContents.kpi2 == null)?'grey-2':(pinsAugContents.kpi2 >= '0' && pinsAugContents.kpi2 <= '10.8')?'red':(pinsAugContents.kpi2 > '10.8' && pinsAugContents.kpi2 <= '14.4')?'orange':(pinsAugContents.kpi2 > '14.4' && pinsAugContents.kpi2 < '18')?'yellow-7':(pinsAugContents.kpi2 >= '18' && pinsAugContents.kpi2 < '21.6')?'green':(pinsAugContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsAugContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsAugContents.kpi3 == null)?'grey-2':(pinsAugContents.kpi3 >= '0' && pinsAugContents.kpi3 <= '7.2')?'red':(pinsAugContents.kpi3 > '7.2' && pinsAugContents.kpi3 <= '9.6')?'orange':(pinsAugContents.kpi3 > '9.6' && pinsAugContents.kpi3 < '12')?'yellow-7':(pinsAugContents.kpi3 >= '12' && pinsAugContents.kpi3 < '14.4')?'green':(pinsAugContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsAugContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsSepContents.kpi1 == null)?'grey-2':(pinsSepContents.kpi1 >= '0' && pinsSepContents.kpi1 <= '0.6')?'red':(pinsSepContents.kpi1 > '0.6' && pinsSepContents.kpi1 <= '0.8')?'orange':(pinsSepContents.kpi1 > '0.8' && pinsSepContents.kpi1 < '1')?'yellow-7':(pinsSepContents.kpi1 >= '1' && pinsSepContents.kpi1 < '1.2')?'green':(pinsSepContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsSepContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsSepContents.kpi2 == null)?'grey-2':(pinsSepContents.kpi2 >= '0' && pinsSepContents.kpi2 <= '10.8')?'red':(pinsSepContents.kpi2 > '10.8' && pinsSepContents.kpi2 <= '14.4')?'orange':(pinsSepContents.kpi2 > '14.4' && pinsSepContents.kpi2 < '18')?'yellow-7':(pinsSepContents.kpi2 >= '18' && pinsSepContents.kpi2 < '21.6')?'green':(pinsSepContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsSepContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsSepContents.kpi3 == null)?'grey-2':(pinsSepContents.kpi3 >= '0' && pinsSepContents.kpi3 <= '7.2')?'red':(pinsSepContents.kpi3 > '7.2' && pinsSepContents.kpi3 <= '9.6')?'orange':(pinsSepContents.kpi3 > '9.6' && pinsSepContents.kpi3 < '12')?'yellow-7':(pinsSepContents.kpi3 >= '12' && pinsSepContents.kpi3 < '14.4')?'green':(pinsSepContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsSepContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsOctContents.kpi1 == null)?'grey-2':(pinsOctContents.kpi1 >= '0' && pinsOctContents.kpi1 <= '0.6')?'red':(pinsOctContents.kpi1 > '0.6' && pinsOctContents.kpi1 <= '0.8')?'orange':(pinsOctContents.kpi1 > '0.8' && pinsOctContents.kpi1 < '1')?'yellow-7':(pinsOctContents.kpi1 >= '1' && pinsOctContents.kpi1 < '1.2')?'green':(pinsOctContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsOctContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsOctContents.kpi2 == null)?'grey-2':(pinsOctContents.kpi2 >= '0' && pinsOctContents.kpi2 <= '10.8')?'red':(pinsOctContents.kpi2 > '10.8' && pinsOctContents.kpi2 <= '14.4')?'orange':(pinsOctContents.kpi2 > '14.4' && pinsOctContents.kpi2 < '18')?'yellow-7':(pinsOctContents.kpi2 >= '18' && pinsOctContents.kpi2 < '21.6')?'green':(pinsOctContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsOctContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsOctContents.kpi3 == null)?'grey-2':(pinsOctContents.kpi3 >= '0' && pinsOctContents.kpi3 <= '7.2')?'red':(pinsOctContents.kpi3 > '7.2' && pinsOctContents.kpi3 <= '9.6')?'orange':(pinsOctContents.kpi3 > '9.6' && pinsOctContents.kpi3 < '12')?'yellow-7':(pinsOctContents.kpi3 >= '12' && pinsOctContents.kpi3 < '14.4')?'green':(pinsOctContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsOctContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsNovContents.kpi1 == null)?'grey-2':(pinsNovContents.kpi1 >= '0' && pinsNovContents.kpi1 <= '0.6')?'red':(pinsNovContents.kpi1 > '0.6' && pinsNovContents.kpi1 <= '0.8')?'orange':(pinsNovContents.kpi1 > '0.8' && pinsNovContents.kpi1 < '1')?'yellow-7':(pinsNovContents.kpi1 >= '1' && pinsNovContents.kpi1 < '1.2')?'green':(pinsNovContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsNovContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsNovContents.kpi2 == null)?'grey-2':(pinsNovContents.kpi2 >= '0' && pinsNovContents.kpi2 <= '10.8')?'red':(pinsNovContents.kpi2 > '10.8' && pinsNovContents.kpi2 <= '14.4')?'orange':(pinsNovContents.kpi2 > '14.4' && pinsNovContents.kpi2 < '18')?'yellow-7':(pinsNovContents.kpi2 >= '18' && pinsNovContents.kpi2 < '21.6')?'green':(pinsNovContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsNovContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsNovContents.kpi3 == null)?'grey-2':(pinsNovContents.kpi3 >= '0' && pinsNovContents.kpi3 <= '7.2')?'red':(pinsNovContents.kpi3 > '7.2' && pinsNovContents.kpi3 <= '9.6')?'orange':(pinsNovContents.kpi3 > '9.6' && pinsNovContents.kpi3 < '12')?'yellow-7':(pinsNovContents.kpi3 >= '12' && pinsNovContents.kpi3 < '14.4')?'green':(pinsNovContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsNovContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsDecContents.kpi1 == null)?'grey-2':(pinsDecContents.kpi1 >= '0' && pinsDecContents.kpi1 <= '0.6')?'red':(pinsDecContents.kpi1 > '0.6' && pinsDecContents.kpi1 <= '0.8')?'orange':(pinsDecContents.kpi1 > '0.8' && pinsDecContents.kpi1 < '1')?'yellow-7':(pinsDecContents.kpi1 >= '1' && pinsDecContents.kpi1 < '1.2')?'green':(pinsDecContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsDecContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsDecContents.kpi2 == null)?'grey-2':(pinsDecContents.kpi2 >= '0' && pinsDecContents.kpi2 <= '10.8')?'red':(pinsDecContents.kpi2 > '10.8' && pinsDecContents.kpi2 <= '14.4')?'orange':(pinsDecContents.kpi2 > '14.4' && pinsDecContents.kpi2 < '18')?'yellow-7':(pinsDecContents.kpi2 >= '18' && pinsDecContents.kpi2 < '21.6')?'green':(pinsDecContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsDecContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsDecContents.kpi3 == null)?'grey-2':(pinsDecContents.kpi3 >= '0' && pinsDecContents.kpi3 <= '7.2')?'red':(pinsDecContents.kpi3 > '7.2' && pinsDecContents.kpi3 <= '9.6')?'orange':(pinsDecContents.kpi3 > '9.6' && pinsDecContents.kpi3 < '12')?'yellow-7':(pinsDecContents.kpi3 >= '12' && pinsDecContents.kpi3 < '14.4')?'green':(pinsDecContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsDecContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                                <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of community and social service providers in the networks</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsJanContents.kpi1 == null)?'grey-2':(pinsJanContents.kpi1 >= '0' && pinsJanContents.kpi1 <= '0.6')?'red':(pinsJanContents.kpi1 > '0.6' && pinsJanContents.kpi1 <= '0.8')?'orange':(pinsJanContents.kpi1 > '0.8' && pinsJanContents.kpi1 < '1')?'yellow-7':(pinsJanContents.kpi1 >= '1' && pinsJanContents.kpi1 < '1.2')?'green':(pinsJanContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsJanContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJanContents.kpi2 == null)?'grey-2':(pinsJanContents.kpi2 >= '0' && pinsJanContents.kpi2 <= '10.8')?'red':(pinsJanContents.kpi2 > '10.8' && pinsJanContents.kpi2 <= '14.4')?'orange':(pinsJanContents.kpi2 > '14.4' && pinsJanContents.kpi2 < '18')?'yellow-7':(pinsJanContents.kpi2 >= '18' && pinsJanContents.kpi2 < '21.6')?'green':(pinsJanContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsJanContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJanContents.kpi3 == null)?'grey-2':(pinsJanContents.kpi3 >= '0' && pinsJanContents.kpi3 <= '7.2')?'red':(pinsJanContents.kpi3 > '7.2' && pinsJanContents.kpi3 <= '9.6')?'orange':(pinsJanContents.kpi3 > '9.6' && pinsJanContents.kpi3 < '12')?'yellow-7':(pinsJanContents.kpi3 >= '12' && pinsJanContents.kpi3 < '14.4')?'green':(pinsJanContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsJanContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsFebContents.kpi1 == null)?'grey-2':(pinsFebContents.kpi1 >= '0' && pinsFebContents.kpi1 <= '0.6')?'red':(pinsFebContents.kpi1 > '0.6' && pinsFebContents.kpi1 <= '0.8')?'orange':(pinsFebContents.kpi1 > '0.8' && pinsFebContents.kpi1 < '1')?'yellow-7':(pinsFebContents.kpi1 >= '1' && pinsFebContents.kpi1 < '1.2')?'green':(pinsFebContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsFebContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsFebContents.kpi2 == null)?'grey-2':(pinsFebContents.kpi2 >= '0' && pinsFebContents.kpi2 <= '10.8')?'red':(pinsFebContents.kpi2 > '10.8' && pinsFebContents.kpi2 <= '14.4')?'orange':(pinsFebContents.kpi2 > '14.4' && pinsFebContents.kpi2 < '18')?'yellow-7':(pinsFebContents.kpi2 >= '18' && pinsFebContents.kpi2 < '21.6')?'green':(pinsFebContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsFebContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsFebContents.kpi3 == null)?'grey-2':(pinsFebContents.kpi3 >= '0' && pinsFebContents.kpi3 <= '7.2')?'red':(pinsFebContents.kpi3 > '7.2' && pinsFebContents.kpi3 <= '9.6')?'orange':(pinsFebContents.kpi3 > '9.6' && pinsFebContents.kpi3 < '12')?'yellow-7':(pinsFebContents.kpi3 >= '12' && pinsFebContents.kpi3 < '14.4')?'green':(pinsFebContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsFebContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsMarContents.kpi1 == null)?'grey-2':(pinsMarContents.kpi1 >= '0' && pinsMarContents.kpi1 <= '0.6')?'red':(pinsMarContents.kpi1 > '0.6' && pinsMarContents.kpi1 <= '0.8')?'orange':(pinsMarContents.kpi1 > '0.8' && pinsMarContents.kpi1 < '1')?'yellow-7':(pinsMarContents.kpi1 >= '1' && pinsMarContents.kpi1 < '1.2')?'green':(pinsMarContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsMarContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsMarContents.kpi2 == null)?'grey-2':(pinsMarContents.kpi2 >= '0' && pinsMarContents.kpi2 <= '10.8')?'red':(pinsMarContents.kpi2 > '10.8' && pinsMarContents.kpi2 <= '14.4')?'orange':(pinsMarContents.kpi2 > '14.4' && pinsMarContents.kpi2 < '18')?'yellow-7':(pinsMarContents.kpi2 >= '18' && pinsMarContents.kpi2 < '21.6')?'green':(pinsMarContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsMarContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsMarContents.kpi3 == null)?'grey-2':(pinsMarContents.kpi3 >= '0' && pinsMarContents.kpi3 <= '7.2')?'red':(pinsMarContents.kpi3 > '7.2' && pinsMarContents.kpi3 <= '9.6')?'orange':(pinsMarContents.kpi3 > '9.6' && pinsMarContents.kpi3 < '12')?'yellow-7':(pinsMarContents.kpi3 >= '12' && pinsMarContents.kpi3 < '14.4')?'green':(pinsMarContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsMarContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsAprContents.kpi1 == null)?'grey-2':(pinsAprContents.kpi1 >= '0' && pinsAprContents.kpi1 <= '0.6')?'red':(pinsAprContents.kpi1 > '0.6' && pinsAprContents.kpi1 <= '0.8')?'orange':(pinsAprContents.kpi1 > '0.8' && pinsAprContents.kpi1 < '1')?'yellow-7':(pinsAprContents.kpi1 >= '1' && pinsAprContents.kpi1 < '1.2')?'green':(pinsAprContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsAprContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsAprContents.kpi2 == null)?'grey-2':(pinsAprContents.kpi2 >= '0' && pinsAprContents.kpi2 <= '10.8')?'red':(pinsAprContents.kpi2 > '10.8' && pinsAprContents.kpi2 <= '14.4')?'orange':(pinsAprContents.kpi2 > '14.4' && pinsAprContents.kpi2 < '18')?'yellow-7':(pinsAprContents.kpi2 >= '18' && pinsAprContents.kpi2 < '21.6')?'green':(pinsAprContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsAprContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsAprContents.kpi3 == null)?'grey-2':(pinsAprContents.kpi3 >= '0' && pinsAprContents.kpi3 <= '7.2')?'red':(pinsAprContents.kpi3 > '7.2' && pinsAprContents.kpi3 <= '9.6')?'orange':(pinsAprContents.kpi3 > '9.6' && pinsAprContents.kpi3 < '12')?'yellow-7':(pinsAprContents.kpi3 >= '12' && pinsAprContents.kpi3 < '14.4')?'green':(pinsAprContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsAprContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsMayContents.kpi1 == null)?'grey-2':(pinsMayContents.kpi1 >= '0' && pinsMayContents.kpi1 <= '0.6')?'red':(pinsMayContents.kpi1 > '0.6' && pinsMayContents.kpi1 <= '0.8')?'orange':(pinsMayContents.kpi1 > '0.8' && pinsMayContents.kpi1 < '1')?'yellow-7':(pinsMayContents.kpi1 >= '1' && pinsMayContents.kpi1 < '1.2')?'green':(pinsMayContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsMayContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsMayContents.kpi2 == null)?'grey-2':(pinsMayContents.kpi2 >= '0' && pinsMayContents.kpi2 <= '10.8')?'red':(pinsMayContents.kpi2 > '10.8' && pinsMayContents.kpi2 <= '14.4')?'orange':(pinsMayContents.kpi2 > '14.4' && pinsMayContents.kpi2 < '18')?'yellow-7':(pinsMayContents.kpi2 >= '18' && pinsMayContents.kpi2 < '21.6')?'green':(pinsMayContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsMayContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsMayContents.kpi3 == null)?'grey-2':(pinsMayContents.kpi3 >= '0' && pinsMayContents.kpi3 <= '7.2')?'red':(pinsMayContents.kpi3 > '7.2' && pinsMayContents.kpi3 <= '9.6')?'orange':(pinsMayContents.kpi3 > '9.6' && pinsMayContents.kpi3 < '12')?'yellow-7':(pinsMayContents.kpi3 >= '12' && pinsMayContents.kpi3 < '14.4')?'green':(pinsMayContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsMayContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsJunContents.kpi1 == null)?'grey-2':(pinsJunContents.kpi1 >= '0' && pinsJunContents.kpi1 <= '0.6')?'red':(pinsJunContents.kpi1 > '0.6' && pinsJunContents.kpi1 <= '0.8')?'orange':(pinsJunContents.kpi1 > '0.8' && pinsJunContents.kpi1 < '1')?'yellow-7':(pinsJunContents.kpi1 >= '1' && pinsJunContents.kpi1 < '1.2')?'green':(pinsJunContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsJunContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJunContents.kpi2 == null)?'grey-2':(pinsJunContents.kpi2 >= '0' && pinsJunContents.kpi2 <= '10.8')?'red':(pinsJunContents.kpi2 > '10.8' && pinsJunContents.kpi2 <= '14.4')?'orange':(pinsJunContents.kpi2 > '14.4' && pinsJunContents.kpi2 < '18')?'yellow-7':(pinsJunContents.kpi2 >= '18' && pinsJunContents.kpi2 < '21.6')?'green':(pinsJunContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsJunContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJunContents.kpi3 == null)?'grey-2':(pinsJunContents.kpi3 >= '0' && pinsJunContents.kpi3 <= '7.2')?'red':(pinsJunContents.kpi3 > '7.2' && pinsJunContents.kpi3 <= '9.6')?'orange':(pinsJunContents.kpi3 > '9.6' && pinsJunContents.kpi3 < '12')?'yellow-7':(pinsJunContents.kpi3 >= '12' && pinsJunContents.kpi3 < '14.4')?'green':(pinsJunContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsJunContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsJulContents.kpi1 == null)?'grey-2':(pinsJulContents.kpi1 >= '0' && pinsJulContents.kpi1 <= '0.6')?'red':(pinsJulContents.kpi1 > '0.6' && pinsJulContents.kpi1 <= '0.8')?'orange':(pinsJulContents.kpi1 > '0.8' && pinsJulContents.kpi1 < '1')?'yellow-7':(pinsJulContents.kpi1 >= '1' && pinsJulContents.kpi1 < '1.2')?'green':(pinsJulContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsJulContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJulContents.kpi2 == null)?'grey-2':(pinsJulContents.kpi2 >= '0' && pinsJulContents.kpi2 <= '10.8')?'red':(pinsJulContents.kpi2 > '10.8' && pinsJulContents.kpi2 <= '14.4')?'orange':(pinsJulContents.kpi2 > '14.4' && pinsJulContents.kpi2 < '18')?'yellow-7':(pinsJulContents.kpi2 >= '18' && pinsJulContents.kpi2 < '21.6')?'green':(pinsJulContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsJulContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJulContents.kpi3 == null)?'grey-2':(pinsJulContents.kpi3 >= '0' && pinsJulContents.kpi3 <= '7.2')?'red':(pinsJulContents.kpi3 > '7.2' && pinsJulContents.kpi3 <= '9.6')?'orange':(pinsJulContents.kpi3 > '9.6' && pinsJulContents.kpi3 < '12')?'yellow-7':(pinsJulContents.kpi3 >= '12' && pinsJulContents.kpi3 < '14.4')?'green':(pinsJulContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsJulContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsAugContents.kpi1 == null)?'grey-2':(pinsAugContents.kpi1 >= '0' && pinsAugContents.kpi1 <= '0.6')?'red':(pinsAugContents.kpi1 > '0.6' && pinsAugContents.kpi1 <= '0.8')?'orange':(pinsAugContents.kpi1 > '0.8' && pinsAugContents.kpi1 < '1')?'yellow-7':(pinsAugContents.kpi1 >= '1' && pinsAugContents.kpi1 < '1.2')?'green':(pinsAugContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsAugContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsAugContents.kpi2 == null)?'grey-2':(pinsAugContents.kpi2 >= '0' && pinsAugContents.kpi2 <= '10.8')?'red':(pinsAugContents.kpi2 > '10.8' && pinsAugContents.kpi2 <= '14.4')?'orange':(pinsAugContents.kpi2 > '14.4' && pinsAugContents.kpi2 < '18')?'yellow-7':(pinsAugContents.kpi2 >= '18' && pinsAugContents.kpi2 < '21.6')?'green':(pinsAugContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsAugContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsAugContents.kpi3 == null)?'grey-2':(pinsAugContents.kpi3 >= '0' && pinsAugContents.kpi3 <= '7.2')?'red':(pinsAugContents.kpi3 > '7.2' && pinsAugContents.kpi3 <= '9.6')?'orange':(pinsAugContents.kpi3 > '9.6' && pinsAugContents.kpi3 < '12')?'yellow-7':(pinsAugContents.kpi3 >= '12' && pinsAugContents.kpi3 < '14.4')?'green':(pinsAugContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsAugContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsSepContents.kpi1 == null)?'grey-2':(pinsSepContents.kpi1 >= '0' && pinsSepContents.kpi1 <= '0.6')?'red':(pinsSepContents.kpi1 > '0.6' && pinsSepContents.kpi1 <= '0.8')?'orange':(pinsSepContents.kpi1 > '0.8' && pinsSepContents.kpi1 < '1')?'yellow-7':(pinsSepContents.kpi1 >= '1' && pinsSepContents.kpi1 < '1.2')?'green':(pinsSepContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsSepContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsSepContents.kpi2 == null)?'grey-2':(pinsSepContents.kpi2 >= '0' && pinsSepContents.kpi2 <= '10.8')?'red':(pinsSepContents.kpi2 > '10.8' && pinsSepContents.kpi2 <= '14.4')?'orange':(pinsSepContents.kpi2 > '14.4' && pinsSepContents.kpi2 < '18')?'yellow-7':(pinsSepContents.kpi2 >= '18' && pinsSepContents.kpi2 < '21.6')?'green':(pinsSepContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsSepContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsSepContents.kpi3 == null)?'grey-2':(pinsSepContents.kpi3 >= '0' && pinsSepContents.kpi3 <= '7.2')?'red':(pinsSepContents.kpi3 > '7.2' && pinsSepContents.kpi3 <= '9.6')?'orange':(pinsSepContents.kpi3 > '9.6' && pinsSepContents.kpi3 < '12')?'yellow-7':(pinsSepContents.kpi3 >= '12' && pinsSepContents.kpi3 < '14.4')?'green':(pinsSepContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsSepContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsOctContents.kpi1 == null)?'grey-2':(pinsOctContents.kpi1 >= '0' && pinsOctContents.kpi1 <= '0.6')?'red':(pinsOctContents.kpi1 > '0.6' && pinsOctContents.kpi1 <= '0.8')?'orange':(pinsOctContents.kpi1 > '0.8' && pinsOctContents.kpi1 < '1')?'yellow-7':(pinsOctContents.kpi1 >= '1' && pinsOctContents.kpi1 < '1.2')?'green':(pinsOctContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsOctContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsOctContents.kpi2 == null)?'grey-2':(pinsOctContents.kpi2 >= '0' && pinsOctContents.kpi2 <= '10.8')?'red':(pinsOctContents.kpi2 > '10.8' && pinsOctContents.kpi2 <= '14.4')?'orange':(pinsOctContents.kpi2 > '14.4' && pinsOctContents.kpi2 < '18')?'yellow-7':(pinsOctContents.kpi2 >= '18' && pinsOctContents.kpi2 < '21.6')?'green':(pinsOctContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsOctContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsOctContents.kpi3 == null)?'grey-2':(pinsOctContents.kpi3 >= '0' && pinsOctContents.kpi3 <= '7.2')?'red':(pinsOctContents.kpi3 > '7.2' && pinsOctContents.kpi3 <= '9.6')?'orange':(pinsOctContents.kpi3 > '9.6' && pinsOctContents.kpi3 < '12')?'yellow-7':(pinsOctContents.kpi3 >= '12' && pinsOctContents.kpi3 < '14.4')?'green':(pinsOctContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsOctContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsNovContents.kpi1 == null)?'grey-2':(pinsNovContents.kpi1 >= '0' && pinsNovContents.kpi1 <= '0.6')?'red':(pinsNovContents.kpi1 > '0.6' && pinsNovContents.kpi1 <= '0.8')?'orange':(pinsNovContents.kpi1 > '0.8' && pinsNovContents.kpi1 < '1')?'yellow-7':(pinsNovContents.kpi1 >= '1' && pinsNovContents.kpi1 < '1.2')?'green':(pinsNovContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsNovContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsNovContents.kpi2 == null)?'grey-2':(pinsNovContents.kpi2 >= '0' && pinsNovContents.kpi2 <= '10.8')?'red':(pinsNovContents.kpi2 > '10.8' && pinsNovContents.kpi2 <= '14.4')?'orange':(pinsNovContents.kpi2 > '14.4' && pinsNovContents.kpi2 < '18')?'yellow-7':(pinsNovContents.kpi2 >= '18' && pinsNovContents.kpi2 < '21.6')?'green':(pinsNovContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsNovContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsNovContents.kpi3 == null)?'grey-2':(pinsNovContents.kpi3 >= '0' && pinsNovContents.kpi3 <= '7.2')?'red':(pinsNovContents.kpi3 > '7.2' && pinsNovContents.kpi3 <= '9.6')?'orange':(pinsNovContents.kpi3 > '9.6' && pinsNovContents.kpi3 < '12')?'yellow-7':(pinsNovContents.kpi3 >= '12' && pinsNovContents.kpi3 < '14.4')?'green':(pinsNovContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsNovContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsDecContents.kpi1 == null)?'grey-2':(pinsDecContents.kpi1 >= '0' && pinsDecContents.kpi1 <= '0.6')?'red':(pinsDecContents.kpi1 > '0.6' && pinsDecContents.kpi1 <= '0.8')?'orange':(pinsDecContents.kpi1 > '0.8' && pinsDecContents.kpi1 < '1')?'yellow-7':(pinsDecContents.kpi1 >= '1' && pinsDecContents.kpi1 < '1.2')?'green':(pinsDecContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsDecContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsDecContents.kpi2 == null)?'grey-2':(pinsDecContents.kpi2 >= '0' && pinsDecContents.kpi2 <= '10.8')?'red':(pinsDecContents.kpi2 > '10.8' && pinsDecContents.kpi2 <= '14.4')?'orange':(pinsDecContents.kpi2 > '14.4' && pinsDecContents.kpi2 < '18')?'yellow-7':(pinsDecContents.kpi2 >= '18' && pinsDecContents.kpi2 < '21.6')?'green':(pinsDecContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsDecContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsDecContents.kpi3 == null)?'grey-2':(pinsDecContents.kpi3 >= '0' && pinsDecContents.kpi3 <= '7.2')?'red':(pinsDecContents.kpi3 > '7.2' && pinsDecContents.kpi3 <= '9.6')?'orange':(pinsDecContents.kpi3 > '9.6' && pinsDecContents.kpi3 < '12')?'yellow-7':(pinsDecContents.kpi3 >= '12' && pinsDecContents.kpi3 < '14.4')?'green':(pinsDecContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsDecContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                                <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of community and social service providers in the networks</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsJanContents.kpi1 == null)?'grey-2':(pinsJanContents.kpi1 >= '0' && pinsJanContents.kpi1 <= '0.6')?'red':(pinsJanContents.kpi1 > '0.6' && pinsJanContents.kpi1 <= '0.8')?'orange':(pinsJanContents.kpi1 > '0.8' && pinsJanContents.kpi1 < '1')?'yellow-7':(pinsJanContents.kpi1 >= '1' && pinsJanContents.kpi1 < '1.2')?'green':(pinsJanContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsJanContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJanContents.kpi2 == null)?'grey-2':(pinsJanContents.kpi2 >= '0' && pinsJanContents.kpi2 <= '10.8')?'red':(pinsJanContents.kpi2 > '10.8' && pinsJanContents.kpi2 <= '14.4')?'orange':(pinsJanContents.kpi2 > '14.4' && pinsJanContents.kpi2 < '18')?'yellow-7':(pinsJanContents.kpi2 >= '18' && pinsJanContents.kpi2 < '21.6')?'green':(pinsJanContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsJanContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJanContents.kpi3 == null)?'grey-2':(pinsJanContents.kpi3 >= '0' && pinsJanContents.kpi3 <= '7.2')?'red':(pinsJanContents.kpi3 > '7.2' && pinsJanContents.kpi3 <= '9.6')?'orange':(pinsJanContents.kpi3 > '9.6' && pinsJanContents.kpi3 < '12')?'yellow-7':(pinsJanContents.kpi3 >= '12' && pinsJanContents.kpi3 < '14.4')?'green':(pinsJanContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsJanContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsFebContents.kpi1 == null)?'grey-2':(pinsFebContents.kpi1 >= '0' && pinsFebContents.kpi1 <= '0.6')?'red':(pinsFebContents.kpi1 > '0.6' && pinsFebContents.kpi1 <= '0.8')?'orange':(pinsFebContents.kpi1 > '0.8' && pinsFebContents.kpi1 < '1')?'yellow-7':(pinsFebContents.kpi1 >= '1' && pinsFebContents.kpi1 < '1.2')?'green':(pinsFebContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsFebContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsFebContents.kpi2 == null)?'grey-2':(pinsFebContents.kpi2 >= '0' && pinsFebContents.kpi2 <= '10.8')?'red':(pinsFebContents.kpi2 > '10.8' && pinsFebContents.kpi2 <= '14.4')?'orange':(pinsFebContents.kpi2 > '14.4' && pinsFebContents.kpi2 < '18')?'yellow-7':(pinsFebContents.kpi2 >= '18' && pinsFebContents.kpi2 < '21.6')?'green':(pinsFebContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsFebContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsFebContents.kpi3 == null)?'grey-2':(pinsFebContents.kpi3 >= '0' && pinsFebContents.kpi3 <= '7.2')?'red':(pinsFebContents.kpi3 > '7.2' && pinsFebContents.kpi3 <= '9.6')?'orange':(pinsFebContents.kpi3 > '9.6' && pinsFebContents.kpi3 < '12')?'yellow-7':(pinsFebContents.kpi3 >= '12' && pinsFebContents.kpi3 < '14.4')?'green':(pinsFebContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsFebContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsMarContents.kpi1 == null)?'grey-2':(pinsMarContents.kpi1 >= '0' && pinsMarContents.kpi1 <= '0.6')?'red':(pinsMarContents.kpi1 > '0.6' && pinsMarContents.kpi1 <= '0.8')?'orange':(pinsMarContents.kpi1 > '0.8' && pinsMarContents.kpi1 < '1')?'yellow-7':(pinsMarContents.kpi1 >= '1' && pinsMarContents.kpi1 < '1.2')?'green':(pinsMarContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsMarContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsMarContents.kpi2 == null)?'grey-2':(pinsMarContents.kpi2 >= '0' && pinsMarContents.kpi2 <= '10.8')?'red':(pinsMarContents.kpi2 > '10.8' && pinsMarContents.kpi2 <= '14.4')?'orange':(pinsMarContents.kpi2 > '14.4' && pinsMarContents.kpi2 < '18')?'yellow-7':(pinsMarContents.kpi2 >= '18' && pinsMarContents.kpi2 < '21.6')?'green':(pinsMarContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsMarContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsMarContents.kpi3 == null)?'grey-2':(pinsMarContents.kpi3 >= '0' && pinsMarContents.kpi3 <= '7.2')?'red':(pinsMarContents.kpi3 > '7.2' && pinsMarContents.kpi3 <= '9.6')?'orange':(pinsMarContents.kpi3 > '9.6' && pinsMarContents.kpi3 < '12')?'yellow-7':(pinsMarContents.kpi3 >= '12' && pinsMarContents.kpi3 < '14.4')?'green':(pinsMarContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsMarContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsAprContents.kpi1 == null)?'grey-2':(pinsAprContents.kpi1 >= '0' && pinsAprContents.kpi1 <= '0.6')?'red':(pinsAprContents.kpi1 > '0.6' && pinsAprContents.kpi1 <= '0.8')?'orange':(pinsAprContents.kpi1 > '0.8' && pinsAprContents.kpi1 < '1')?'yellow-7':(pinsAprContents.kpi1 >= '1' && pinsAprContents.kpi1 < '1.2')?'green':(pinsAprContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsAprContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsAprContents.kpi2 == null)?'grey-2':(pinsAprContents.kpi2 >= '0' && pinsAprContents.kpi2 <= '10.8')?'red':(pinsAprContents.kpi2 > '10.8' && pinsAprContents.kpi2 <= '14.4')?'orange':(pinsAprContents.kpi2 > '14.4' && pinsAprContents.kpi2 < '18')?'yellow-7':(pinsAprContents.kpi2 >= '18' && pinsAprContents.kpi2 < '21.6')?'green':(pinsAprContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsAprContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsAprContents.kpi3 == null)?'grey-2':(pinsAprContents.kpi3 >= '0' && pinsAprContents.kpi3 <= '7.2')?'red':(pinsAprContents.kpi3 > '7.2' && pinsAprContents.kpi3 <= '9.6')?'orange':(pinsAprContents.kpi3 > '9.6' && pinsAprContents.kpi3 < '12')?'yellow-7':(pinsAprContents.kpi3 >= '12' && pinsAprContents.kpi3 < '14.4')?'green':(pinsAprContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsAprContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsMayContents.kpi1 == null)?'grey-2':(pinsMayContents.kpi1 >= '0' && pinsMayContents.kpi1 <= '0.6')?'red':(pinsMayContents.kpi1 > '0.6' && pinsMayContents.kpi1 <= '0.8')?'orange':(pinsMayContents.kpi1 > '0.8' && pinsMayContents.kpi1 < '1')?'yellow-7':(pinsMayContents.kpi1 >= '1' && pinsMayContents.kpi1 < '1.2')?'green':(pinsMayContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsMayContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsMayContents.kpi2 == null)?'grey-2':(pinsMayContents.kpi2 >= '0' && pinsMayContents.kpi2 <= '10.8')?'red':(pinsMayContents.kpi2 > '10.8' && pinsMayContents.kpi2 <= '14.4')?'orange':(pinsMayContents.kpi2 > '14.4' && pinsMayContents.kpi2 < '18')?'yellow-7':(pinsMayContents.kpi2 >= '18' && pinsMayContents.kpi2 < '21.6')?'green':(pinsMayContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsMayContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsMayContents.kpi3 == null)?'grey-2':(pinsMayContents.kpi3 >= '0' && pinsMayContents.kpi3 <= '7.2')?'red':(pinsMayContents.kpi3 > '7.2' && pinsMayContents.kpi3 <= '9.6')?'orange':(pinsMayContents.kpi3 > '9.6' && pinsMayContents.kpi3 < '12')?'yellow-7':(pinsMayContents.kpi3 >= '12' && pinsMayContents.kpi3 < '14.4')?'green':(pinsMayContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsMayContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsJunContents.kpi1 == null)?'grey-2':(pinsJunContents.kpi1 >= '0' && pinsJunContents.kpi1 <= '0.6')?'red':(pinsJunContents.kpi1 > '0.6' && pinsJunContents.kpi1 <= '0.8')?'orange':(pinsJunContents.kpi1 > '0.8' && pinsJunContents.kpi1 < '1')?'yellow-7':(pinsJunContents.kpi1 >= '1' && pinsJunContents.kpi1 < '1.2')?'green':(pinsJunContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsJunContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJunContents.kpi2 == null)?'grey-2':(pinsJunContents.kpi2 >= '0' && pinsJunContents.kpi2 <= '10.8')?'red':(pinsJunContents.kpi2 > '10.8' && pinsJunContents.kpi2 <= '14.4')?'orange':(pinsJunContents.kpi2 > '14.4' && pinsJunContents.kpi2 < '18')?'yellow-7':(pinsJunContents.kpi2 >= '18' && pinsJunContents.kpi2 < '21.6')?'green':(pinsJunContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsJunContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJunContents.kpi3 == null)?'grey-2':(pinsJunContents.kpi3 >= '0' && pinsJunContents.kpi3 <= '7.2')?'red':(pinsJunContents.kpi3 > '7.2' && pinsJunContents.kpi3 <= '9.6')?'orange':(pinsJunContents.kpi3 > '9.6' && pinsJunContents.kpi3 < '12')?'yellow-7':(pinsJunContents.kpi3 >= '12' && pinsJunContents.kpi3 < '14.4')?'green':(pinsJunContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsJunContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsJulContents.kpi1 == null)?'grey-2':(pinsJulContents.kpi1 >= '0' && pinsJulContents.kpi1 <= '0.6')?'red':(pinsJulContents.kpi1 > '0.6' && pinsJulContents.kpi1 <= '0.8')?'orange':(pinsJulContents.kpi1 > '0.8' && pinsJulContents.kpi1 < '1')?'yellow-7':(pinsJulContents.kpi1 >= '1' && pinsJulContents.kpi1 < '1.2')?'green':(pinsJulContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsJulContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJulContents.kpi2 == null)?'grey-2':(pinsJulContents.kpi2 >= '0' && pinsJulContents.kpi2 <= '10.8')?'red':(pinsJulContents.kpi2 > '10.8' && pinsJulContents.kpi2 <= '14.4')?'orange':(pinsJulContents.kpi2 > '14.4' && pinsJulContents.kpi2 < '18')?'yellow-7':(pinsJulContents.kpi2 >= '18' && pinsJulContents.kpi2 < '21.6')?'green':(pinsJulContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsJulContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJulContents.kpi3 == null)?'grey-2':(pinsJulContents.kpi3 >= '0' && pinsJulContents.kpi3 <= '7.2')?'red':(pinsJulContents.kpi3 > '7.2' && pinsJulContents.kpi3 <= '9.6')?'orange':(pinsJulContents.kpi3 > '9.6' && pinsJulContents.kpi3 < '12')?'yellow-7':(pinsJulContents.kpi3 >= '12' && pinsJulContents.kpi3 < '14.4')?'green':(pinsJulContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsJulContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsAugContents.kpi1 == null)?'grey-2':(pinsAugContents.kpi1 >= '0' && pinsAugContents.kpi1 <= '0.6')?'red':(pinsAugContents.kpi1 > '0.6' && pinsAugContents.kpi1 <= '0.8')?'orange':(pinsAugContents.kpi1 > '0.8' && pinsAugContents.kpi1 < '1')?'yellow-7':(pinsAugContents.kpi1 >= '1' && pinsAugContents.kpi1 < '1.2')?'green':(pinsAugContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsAugContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsAugContents.kpi2 == null)?'grey-2':(pinsAugContents.kpi2 >= '0' && pinsAugContents.kpi2 <= '10.8')?'red':(pinsAugContents.kpi2 > '10.8' && pinsAugContents.kpi2 <= '14.4')?'orange':(pinsAugContents.kpi2 > '14.4' && pinsAugContents.kpi2 < '18')?'yellow-7':(pinsAugContents.kpi2 >= '18' && pinsAugContents.kpi2 < '21.6')?'green':(pinsAugContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsAugContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsAugContents.kpi3 == null)?'grey-2':(pinsAugContents.kpi3 >= '0' && pinsAugContents.kpi3 <= '7.2')?'red':(pinsAugContents.kpi3 > '7.2' && pinsAugContents.kpi3 <= '9.6')?'orange':(pinsAugContents.kpi3 > '9.6' && pinsAugContents.kpi3 < '12')?'yellow-7':(pinsAugContents.kpi3 >= '12' && pinsAugContents.kpi3 < '14.4')?'green':(pinsAugContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsAugContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsSepContents.kpi1 == null)?'grey-2':(pinsSepContents.kpi1 >= '0' && pinsSepContents.kpi1 <= '0.6')?'red':(pinsSepContents.kpi1 > '0.6' && pinsSepContents.kpi1 <= '0.8')?'orange':(pinsSepContents.kpi1 > '0.8' && pinsSepContents.kpi1 < '1')?'yellow-7':(pinsSepContents.kpi1 >= '1' && pinsSepContents.kpi1 < '1.2')?'green':(pinsSepContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsSepContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsSepContents.kpi2 == null)?'grey-2':(pinsSepContents.kpi2 >= '0' && pinsSepContents.kpi2 <= '10.8')?'red':(pinsSepContents.kpi2 > '10.8' && pinsSepContents.kpi2 <= '14.4')?'orange':(pinsSepContents.kpi2 > '14.4' && pinsSepContents.kpi2 < '18')?'yellow-7':(pinsSepContents.kpi2 >= '18' && pinsSepContents.kpi2 < '21.6')?'green':(pinsSepContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsSepContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsSepContents.kpi3 == null)?'grey-2':(pinsSepContents.kpi3 >= '0' && pinsSepContents.kpi3 <= '7.2')?'red':(pinsSepContents.kpi3 > '7.2' && pinsSepContents.kpi3 <= '9.6')?'orange':(pinsSepContents.kpi3 > '9.6' && pinsSepContents.kpi3 < '12')?'yellow-7':(pinsSepContents.kpi3 >= '12' && pinsSepContents.kpi3 < '14.4')?'green':(pinsSepContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsSepContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsOctContents.kpi1 == null)?'grey-2':(pinsOctContents.kpi1 >= '0' && pinsOctContents.kpi1 <= '0.6')?'red':(pinsOctContents.kpi1 > '0.6' && pinsOctContents.kpi1 <= '0.8')?'orange':(pinsOctContents.kpi1 > '0.8' && pinsOctContents.kpi1 < '1')?'yellow-7':(pinsOctContents.kpi1 >= '1' && pinsOctContents.kpi1 < '1.2')?'green':(pinsOctContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsOctContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsOctContents.kpi2 == null)?'grey-2':(pinsOctContents.kpi2 >= '0' && pinsOctContents.kpi2 <= '10.8')?'red':(pinsOctContents.kpi2 > '10.8' && pinsOctContents.kpi2 <= '14.4')?'orange':(pinsOctContents.kpi2 > '14.4' && pinsOctContents.kpi2 < '18')?'yellow-7':(pinsOctContents.kpi2 >= '18' && pinsOctContents.kpi2 < '21.6')?'green':(pinsOctContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsOctContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsOctContents.kpi3 == null)?'grey-2':(pinsOctContents.kpi3 >= '0' && pinsOctContents.kpi3 <= '7.2')?'red':(pinsOctContents.kpi3 > '7.2' && pinsOctContents.kpi3 <= '9.6')?'orange':(pinsOctContents.kpi3 > '9.6' && pinsOctContents.kpi3 < '12')?'yellow-7':(pinsOctContents.kpi3 >= '12' && pinsOctContents.kpi3 < '14.4')?'green':(pinsOctContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsOctContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsNovContents.kpi1 == null)?'grey-2':(pinsNovContents.kpi1 >= '0' && pinsNovContents.kpi1 <= '0.6')?'red':(pinsNovContents.kpi1 > '0.6' && pinsNovContents.kpi1 <= '0.8')?'orange':(pinsNovContents.kpi1 > '0.8' && pinsNovContents.kpi1 < '1')?'yellow-7':(pinsNovContents.kpi1 >= '1' && pinsNovContents.kpi1 < '1.2')?'green':(pinsNovContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsNovContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsNovContents.kpi2 == null)?'grey-2':(pinsNovContents.kpi2 >= '0' && pinsNovContents.kpi2 <= '10.8')?'red':(pinsNovContents.kpi2 > '10.8' && pinsNovContents.kpi2 <= '14.4')?'orange':(pinsNovContents.kpi2 > '14.4' && pinsNovContents.kpi2 < '18')?'yellow-7':(pinsNovContents.kpi2 >= '18' && pinsNovContents.kpi2 < '21.6')?'green':(pinsNovContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsNovContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsNovContents.kpi3 == null)?'grey-2':(pinsNovContents.kpi3 >= '0' && pinsNovContents.kpi3 <= '7.2')?'red':(pinsNovContents.kpi3 > '7.2' && pinsNovContents.kpi3 <= '9.6')?'orange':(pinsNovContents.kpi3 > '9.6' && pinsNovContents.kpi3 < '12')?'yellow-7':(pinsNovContents.kpi3 >= '12' && pinsNovContents.kpi3 < '14.4')?'green':(pinsNovContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsNovContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsDecContents.kpi1 == null)?'grey-2':(pinsDecContents.kpi1 >= '0' && pinsDecContents.kpi1 <= '0.6')?'red':(pinsDecContents.kpi1 > '0.6' && pinsDecContents.kpi1 <= '0.8')?'orange':(pinsDecContents.kpi1 > '0.8' && pinsDecContents.kpi1 < '1')?'yellow-7':(pinsDecContents.kpi1 >= '1' && pinsDecContents.kpi1 < '1.2')?'green':(pinsDecContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsDecContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsDecContents.kpi2 == null)?'grey-2':(pinsDecContents.kpi2 >= '0' && pinsDecContents.kpi2 <= '10.8')?'red':(pinsDecContents.kpi2 > '10.8' && pinsDecContents.kpi2 <= '14.4')?'orange':(pinsDecContents.kpi2 > '14.4' && pinsDecContents.kpi2 < '18')?'yellow-7':(pinsDecContents.kpi2 >= '18' && pinsDecContents.kpi2 < '21.6')?'green':(pinsDecContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsDecContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsDecContents.kpi3 == null)?'grey-2':(pinsDecContents.kpi3 >= '0' && pinsDecContents.kpi3 <= '7.2')?'red':(pinsDecContents.kpi3 > '7.2' && pinsDecContents.kpi3 <= '9.6')?'orange':(pinsDecContents.kpi3 > '9.6' && pinsDecContents.kpi3 < '12')?'yellow-7':(pinsDecContents.kpi3 >= '12' && pinsDecContents.kpi3 < '14.4')?'green':(pinsDecContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsDecContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                                <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of community and social service providers in the networks</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsJanContents.kpi1 == null)?'grey-2':(pinsJanContents.kpi1 >= '0' && pinsJanContents.kpi1 <= '0.6')?'red':(pinsJanContents.kpi1 > '0.6' && pinsJanContents.kpi1 <= '0.8')?'orange':(pinsJanContents.kpi1 > '0.8' && pinsJanContents.kpi1 < '1')?'yellow-7':(pinsJanContents.kpi1 >= '1' && pinsJanContents.kpi1 < '1.2')?'green':(pinsJanContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsJanContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJanContents.kpi2 == null)?'grey-2':(pinsJanContents.kpi2 >= '0' && pinsJanContents.kpi2 <= '10.8')?'red':(pinsJanContents.kpi2 > '10.8' && pinsJanContents.kpi2 <= '14.4')?'orange':(pinsJanContents.kpi2 > '14.4' && pinsJanContents.kpi2 < '18')?'yellow-7':(pinsJanContents.kpi2 >= '18' && pinsJanContents.kpi2 < '21.6')?'green':(pinsJanContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsJanContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJanContents.kpi3 == null)?'grey-2':(pinsJanContents.kpi3 >= '0' && pinsJanContents.kpi3 <= '7.2')?'red':(pinsJanContents.kpi3 > '7.2' && pinsJanContents.kpi3 <= '9.6')?'orange':(pinsJanContents.kpi3 > '9.6' && pinsJanContents.kpi3 < '12')?'yellow-7':(pinsJanContents.kpi3 >= '12' && pinsJanContents.kpi3 < '14.4')?'green':(pinsJanContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsJanContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsFebContents.kpi1 == null)?'grey-2':(pinsFebContents.kpi1 >= '0' && pinsFebContents.kpi1 <= '0.6')?'red':(pinsFebContents.kpi1 > '0.6' && pinsFebContents.kpi1 <= '0.8')?'orange':(pinsFebContents.kpi1 > '0.8' && pinsFebContents.kpi1 < '1')?'yellow-7':(pinsFebContents.kpi1 >= '1' && pinsFebContents.kpi1 < '1.2')?'green':(pinsFebContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsFebContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsFebContents.kpi2 == null)?'grey-2':(pinsFebContents.kpi2 >= '0' && pinsFebContents.kpi2 <= '10.8')?'red':(pinsFebContents.kpi2 > '10.8' && pinsFebContents.kpi2 <= '14.4')?'orange':(pinsFebContents.kpi2 > '14.4' && pinsFebContents.kpi2 < '18')?'yellow-7':(pinsFebContents.kpi2 >= '18' && pinsFebContents.kpi2 < '21.6')?'green':(pinsFebContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsFebContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsFebContents.kpi3 == null)?'grey-2':(pinsFebContents.kpi3 >= '0' && pinsFebContents.kpi3 <= '7.2')?'red':(pinsFebContents.kpi3 > '7.2' && pinsFebContents.kpi3 <= '9.6')?'orange':(pinsFebContents.kpi3 > '9.6' && pinsFebContents.kpi3 < '12')?'yellow-7':(pinsFebContents.kpi3 >= '12' && pinsFebContents.kpi3 < '14.4')?'green':(pinsFebContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsFebContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsMarContents.kpi1 == null)?'grey-2':(pinsMarContents.kpi1 >= '0' && pinsMarContents.kpi1 <= '0.6')?'red':(pinsMarContents.kpi1 > '0.6' && pinsMarContents.kpi1 <= '0.8')?'orange':(pinsMarContents.kpi1 > '0.8' && pinsMarContents.kpi1 < '1')?'yellow-7':(pinsMarContents.kpi1 >= '1' && pinsMarContents.kpi1 < '1.2')?'green':(pinsMarContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsMarContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsMarContents.kpi2 == null)?'grey-2':(pinsMarContents.kpi2 >= '0' && pinsMarContents.kpi2 <= '10.8')?'red':(pinsMarContents.kpi2 > '10.8' && pinsMarContents.kpi2 <= '14.4')?'orange':(pinsMarContents.kpi2 > '14.4' && pinsMarContents.kpi2 < '18')?'yellow-7':(pinsMarContents.kpi2 >= '18' && pinsMarContents.kpi2 < '21.6')?'green':(pinsMarContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsMarContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsMarContents.kpi3 == null)?'grey-2':(pinsMarContents.kpi3 >= '0' && pinsMarContents.kpi3 <= '7.2')?'red':(pinsMarContents.kpi3 > '7.2' && pinsMarContents.kpi3 <= '9.6')?'orange':(pinsMarContents.kpi3 > '9.6' && pinsMarContents.kpi3 < '12')?'yellow-7':(pinsMarContents.kpi3 >= '12' && pinsMarContents.kpi3 < '14.4')?'green':(pinsMarContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsMarContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsAprContents.kpi1 == null)?'grey-2':(pinsAprContents.kpi1 >= '0' && pinsAprContents.kpi1 <= '0.6')?'red':(pinsAprContents.kpi1 > '0.6' && pinsAprContents.kpi1 <= '0.8')?'orange':(pinsAprContents.kpi1 > '0.8' && pinsAprContents.kpi1 < '1')?'yellow-7':(pinsAprContents.kpi1 >= '1' && pinsAprContents.kpi1 < '1.2')?'green':(pinsAprContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsAprContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsAprContents.kpi2 == null)?'grey-2':(pinsAprContents.kpi2 >= '0' && pinsAprContents.kpi2 <= '10.8')?'red':(pinsAprContents.kpi2 > '10.8' && pinsAprContents.kpi2 <= '14.4')?'orange':(pinsAprContents.kpi2 > '14.4' && pinsAprContents.kpi2 < '18')?'yellow-7':(pinsAprContents.kpi2 >= '18' && pinsAprContents.kpi2 < '21.6')?'green':(pinsAprContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsAprContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsAprContents.kpi3 == null)?'grey-2':(pinsAprContents.kpi3 >= '0' && pinsAprContents.kpi3 <= '7.2')?'red':(pinsAprContents.kpi3 > '7.2' && pinsAprContents.kpi3 <= '9.6')?'orange':(pinsAprContents.kpi3 > '9.6' && pinsAprContents.kpi3 < '12')?'yellow-7':(pinsAprContents.kpi3 >= '12' && pinsAprContents.kpi3 < '14.4')?'green':(pinsAprContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsAprContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsMayContents.kpi1 == null)?'grey-2':(pinsMayContents.kpi1 >= '0' && pinsMayContents.kpi1 <= '0.6')?'red':(pinsMayContents.kpi1 > '0.6' && pinsMayContents.kpi1 <= '0.8')?'orange':(pinsMayContents.kpi1 > '0.8' && pinsMayContents.kpi1 < '1')?'yellow-7':(pinsMayContents.kpi1 >= '1' && pinsMayContents.kpi1 < '1.2')?'green':(pinsMayContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsMayContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsMayContents.kpi2 == null)?'grey-2':(pinsMayContents.kpi2 >= '0' && pinsMayContents.kpi2 <= '10.8')?'red':(pinsMayContents.kpi2 > '10.8' && pinsMayContents.kpi2 <= '14.4')?'orange':(pinsMayContents.kpi2 > '14.4' && pinsMayContents.kpi2 < '18')?'yellow-7':(pinsMayContents.kpi2 >= '18' && pinsMayContents.kpi2 < '21.6')?'green':(pinsMayContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsMayContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsMayContents.kpi3 == null)?'grey-2':(pinsMayContents.kpi3 >= '0' && pinsMayContents.kpi3 <= '7.2')?'red':(pinsMayContents.kpi3 > '7.2' && pinsMayContents.kpi3 <= '9.6')?'orange':(pinsMayContents.kpi3 > '9.6' && pinsMayContents.kpi3 < '12')?'yellow-7':(pinsMayContents.kpi3 >= '12' && pinsMayContents.kpi3 < '14.4')?'green':(pinsMayContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsMayContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsJunContents.kpi1 == null)?'grey-2':(pinsJunContents.kpi1 >= '0' && pinsJunContents.kpi1 <= '0.6')?'red':(pinsJunContents.kpi1 > '0.6' && pinsJunContents.kpi1 <= '0.8')?'orange':(pinsJunContents.kpi1 > '0.8' && pinsJunContents.kpi1 < '1')?'yellow-7':(pinsJunContents.kpi1 >= '1' && pinsJunContents.kpi1 < '1.2')?'green':(pinsJunContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsJunContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJunContents.kpi2 == null)?'grey-2':(pinsJunContents.kpi2 >= '0' && pinsJunContents.kpi2 <= '10.8')?'red':(pinsJunContents.kpi2 > '10.8' && pinsJunContents.kpi2 <= '14.4')?'orange':(pinsJunContents.kpi2 > '14.4' && pinsJunContents.kpi2 < '18')?'yellow-7':(pinsJunContents.kpi2 >= '18' && pinsJunContents.kpi2 < '21.6')?'green':(pinsJunContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsJunContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJunContents.kpi3 == null)?'grey-2':(pinsJunContents.kpi3 >= '0' && pinsJunContents.kpi3 <= '7.2')?'red':(pinsJunContents.kpi3 > '7.2' && pinsJunContents.kpi3 <= '9.6')?'orange':(pinsJunContents.kpi3 > '9.6' && pinsJunContents.kpi3 < '12')?'yellow-7':(pinsJunContents.kpi3 >= '12' && pinsJunContents.kpi3 < '14.4')?'green':(pinsJunContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsJunContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsJulContents.kpi1 == null)?'grey-2':(pinsJulContents.kpi1 >= '0' && pinsJulContents.kpi1 <= '0.6')?'red':(pinsJulContents.kpi1 > '0.6' && pinsJulContents.kpi1 <= '0.8')?'orange':(pinsJulContents.kpi1 > '0.8' && pinsJulContents.kpi1 < '1')?'yellow-7':(pinsJulContents.kpi1 >= '1' && pinsJulContents.kpi1 < '1.2')?'green':(pinsJulContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsJulContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJulContents.kpi2 == null)?'grey-2':(pinsJulContents.kpi2 >= '0' && pinsJulContents.kpi2 <= '10.8')?'red':(pinsJulContents.kpi2 > '10.8' && pinsJulContents.kpi2 <= '14.4')?'orange':(pinsJulContents.kpi2 > '14.4' && pinsJulContents.kpi2 < '18')?'yellow-7':(pinsJulContents.kpi2 >= '18' && pinsJulContents.kpi2 < '21.6')?'green':(pinsJulContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsJulContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJulContents.kpi3 == null)?'grey-2':(pinsJulContents.kpi3 >= '0' && pinsJulContents.kpi3 <= '7.2')?'red':(pinsJulContents.kpi3 > '7.2' && pinsJulContents.kpi3 <= '9.6')?'orange':(pinsJulContents.kpi3 > '9.6' && pinsJulContents.kpi3 < '12')?'yellow-7':(pinsJulContents.kpi3 >= '12' && pinsJulContents.kpi3 < '14.4')?'green':(pinsJulContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsJulContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsAugContents.kpi1 == null)?'grey-2':(pinsAugContents.kpi1 >= '0' && pinsAugContents.kpi1 <= '0.6')?'red':(pinsAugContents.kpi1 > '0.6' && pinsAugContents.kpi1 <= '0.8')?'orange':(pinsAugContents.kpi1 > '0.8' && pinsAugContents.kpi1 < '1')?'yellow-7':(pinsAugContents.kpi1 >= '1' && pinsAugContents.kpi1 < '1.2')?'green':(pinsAugContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsAugContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsAugContents.kpi2 == null)?'grey-2':(pinsAugContents.kpi2 >= '0' && pinsAugContents.kpi2 <= '10.8')?'red':(pinsAugContents.kpi2 > '10.8' && pinsAugContents.kpi2 <= '14.4')?'orange':(pinsAugContents.kpi2 > '14.4' && pinsAugContents.kpi2 < '18')?'yellow-7':(pinsAugContents.kpi2 >= '18' && pinsAugContents.kpi2 < '21.6')?'green':(pinsAugContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsAugContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsAugContents.kpi3 == null)?'grey-2':(pinsAugContents.kpi3 >= '0' && pinsAugContents.kpi3 <= '7.2')?'red':(pinsAugContents.kpi3 > '7.2' && pinsAugContents.kpi3 <= '9.6')?'orange':(pinsAugContents.kpi3 > '9.6' && pinsAugContents.kpi3 < '12')?'yellow-7':(pinsAugContents.kpi3 >= '12' && pinsAugContents.kpi3 < '14.4')?'green':(pinsAugContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsAugContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsSepContents.kpi1 == null)?'grey-2':(pinsSepContents.kpi1 >= '0' && pinsSepContents.kpi1 <= '0.6')?'red':(pinsSepContents.kpi1 > '0.6' && pinsSepContents.kpi1 <= '0.8')?'orange':(pinsSepContents.kpi1 > '0.8' && pinsSepContents.kpi1 < '1')?'yellow-7':(pinsSepContents.kpi1 >= '1' && pinsSepContents.kpi1 < '1.2')?'green':(pinsSepContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsSepContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsSepContents.kpi2 == null)?'grey-2':(pinsSepContents.kpi2 >= '0' && pinsSepContents.kpi2 <= '10.8')?'red':(pinsSepContents.kpi2 > '10.8' && pinsSepContents.kpi2 <= '14.4')?'orange':(pinsSepContents.kpi2 > '14.4' && pinsSepContents.kpi2 < '18')?'yellow-7':(pinsSepContents.kpi2 >= '18' && pinsSepContents.kpi2 < '21.6')?'green':(pinsSepContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsSepContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsSepContents.kpi3 == null)?'grey-2':(pinsSepContents.kpi3 >= '0' && pinsSepContents.kpi3 <= '7.2')?'red':(pinsSepContents.kpi3 > '7.2' && pinsSepContents.kpi3 <= '9.6')?'orange':(pinsSepContents.kpi3 > '9.6' && pinsSepContents.kpi3 < '12')?'yellow-7':(pinsSepContents.kpi3 >= '12' && pinsSepContents.kpi3 < '14.4')?'green':(pinsSepContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsSepContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsOctContents.kpi1 == null)?'grey-2':(pinsOctContents.kpi1 >= '0' && pinsOctContents.kpi1 <= '0.6')?'red':(pinsOctContents.kpi1 > '0.6' && pinsOctContents.kpi1 <= '0.8')?'orange':(pinsOctContents.kpi1 > '0.8' && pinsOctContents.kpi1 < '1')?'yellow-7':(pinsOctContents.kpi1 >= '1' && pinsOctContents.kpi1 < '1.2')?'green':(pinsOctContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsOctContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsOctContents.kpi2 == null)?'grey-2':(pinsOctContents.kpi2 >= '0' && pinsOctContents.kpi2 <= '10.8')?'red':(pinsOctContents.kpi2 > '10.8' && pinsOctContents.kpi2 <= '14.4')?'orange':(pinsOctContents.kpi2 > '14.4' && pinsOctContents.kpi2 < '18')?'yellow-7':(pinsOctContents.kpi2 >= '18' && pinsOctContents.kpi2 < '21.6')?'green':(pinsOctContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsOctContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsOctContents.kpi3 == null)?'grey-2':(pinsOctContents.kpi3 >= '0' && pinsOctContents.kpi3 <= '7.2')?'red':(pinsOctContents.kpi3 > '7.2' && pinsOctContents.kpi3 <= '9.6')?'orange':(pinsOctContents.kpi3 > '9.6' && pinsOctContents.kpi3 < '12')?'yellow-7':(pinsOctContents.kpi3 >= '12' && pinsOctContents.kpi3 < '14.4')?'green':(pinsOctContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsOctContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsNovContents.kpi1 == null)?'grey-2':(pinsNovContents.kpi1 >= '0' && pinsNovContents.kpi1 <= '0.6')?'red':(pinsNovContents.kpi1 > '0.6' && pinsNovContents.kpi1 <= '0.8')?'orange':(pinsNovContents.kpi1 > '0.8' && pinsNovContents.kpi1 < '1')?'yellow-7':(pinsNovContents.kpi1 >= '1' && pinsNovContents.kpi1 < '1.2')?'green':(pinsNovContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsNovContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsNovContents.kpi2 == null)?'grey-2':(pinsNovContents.kpi2 >= '0' && pinsNovContents.kpi2 <= '10.8')?'red':(pinsNovContents.kpi2 > '10.8' && pinsNovContents.kpi2 <= '14.4')?'orange':(pinsNovContents.kpi2 > '14.4' && pinsNovContents.kpi2 < '18')?'yellow-7':(pinsNovContents.kpi2 >= '18' && pinsNovContents.kpi2 < '21.6')?'green':(pinsNovContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsNovContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsNovContents.kpi3 == null)?'grey-2':(pinsNovContents.kpi3 >= '0' && pinsNovContents.kpi3 <= '7.2')?'red':(pinsNovContents.kpi3 > '7.2' && pinsNovContents.kpi3 <= '9.6')?'orange':(pinsNovContents.kpi3 > '9.6' && pinsNovContents.kpi3 < '12')?'yellow-7':(pinsNovContents.kpi3 >= '12' && pinsNovContents.kpi3 < '14.4')?'green':(pinsNovContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsNovContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsDecContents.kpi1 == null)?'grey-2':(pinsDecContents.kpi1 >= '0' && pinsDecContents.kpi1 <= '0.6')?'red':(pinsDecContents.kpi1 > '0.6' && pinsDecContents.kpi1 <= '0.8')?'orange':(pinsDecContents.kpi1 > '0.8' && pinsDecContents.kpi1 < '1')?'yellow-7':(pinsDecContents.kpi1 >= '1' && pinsDecContents.kpi1 < '1.2')?'green':(pinsDecContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsDecContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsDecContents.kpi2 == null)?'grey-2':(pinsDecContents.kpi2 >= '0' && pinsDecContents.kpi2 <= '10.8')?'red':(pinsDecContents.kpi2 > '10.8' && pinsDecContents.kpi2 <= '14.4')?'orange':(pinsDecContents.kpi2 > '14.4' && pinsDecContents.kpi2 < '18')?'yellow-7':(pinsDecContents.kpi2 >= '18' && pinsDecContents.kpi2 < '21.6')?'green':(pinsDecContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsDecContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsDecContents.kpi3 == null)?'grey-2':(pinsDecContents.kpi3 >= '0' && pinsDecContents.kpi3 <= '7.2')?'red':(pinsDecContents.kpi3 > '7.2' && pinsDecContents.kpi3 <= '9.6')?'orange':(pinsDecContents.kpi3 > '9.6' && pinsDecContents.kpi3 < '12')?'yellow-7':(pinsDecContents.kpi3 >= '12' && pinsDecContents.kpi3 < '14.4')?'green':(pinsDecContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsDecContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                                <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of community and social service providers in the networks</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsJanContents.kpi1 == null)?'grey-2':(pinsJanContents.kpi1 >= '0' && pinsJanContents.kpi1 <= '0.6')?'red':(pinsJanContents.kpi1 > '0.6' && pinsJanContents.kpi1 <= '0.8')?'orange':(pinsJanContents.kpi1 > '0.8' && pinsJanContents.kpi1 < '1')?'yellow-7':(pinsJanContents.kpi1 >= '1' && pinsJanContents.kpi1 < '1.2')?'green':(pinsJanContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsJanContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJanContents.kpi2 == null)?'grey-2':(pinsJanContents.kpi2 >= '0' && pinsJanContents.kpi2 <= '10.8')?'red':(pinsJanContents.kpi2 > '10.8' && pinsJanContents.kpi2 <= '14.4')?'orange':(pinsJanContents.kpi2 > '14.4' && pinsJanContents.kpi2 < '18')?'yellow-7':(pinsJanContents.kpi2 >= '18' && pinsJanContents.kpi2 < '21.6')?'green':(pinsJanContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsJanContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJanContents.kpi3 == null)?'grey-2':(pinsJanContents.kpi3 >= '0' && pinsJanContents.kpi3 <= '7.2')?'red':(pinsJanContents.kpi3 > '7.2' && pinsJanContents.kpi3 <= '9.6')?'orange':(pinsJanContents.kpi3 > '9.6' && pinsJanContents.kpi3 < '12')?'yellow-7':(pinsJanContents.kpi3 >= '12' && pinsJanContents.kpi3 < '14.4')?'green':(pinsJanContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsJanContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsFebContents.kpi1 == null)?'grey-2':(pinsFebContents.kpi1 >= '0' && pinsFebContents.kpi1 <= '0.6')?'red':(pinsFebContents.kpi1 > '0.6' && pinsFebContents.kpi1 <= '0.8')?'orange':(pinsFebContents.kpi1 > '0.8' && pinsFebContents.kpi1 < '1')?'yellow-7':(pinsFebContents.kpi1 >= '1' && pinsFebContents.kpi1 < '1.2')?'green':(pinsFebContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsFebContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsFebContents.kpi2 == null)?'grey-2':(pinsFebContents.kpi2 >= '0' && pinsFebContents.kpi2 <= '10.8')?'red':(pinsFebContents.kpi2 > '10.8' && pinsFebContents.kpi2 <= '14.4')?'orange':(pinsFebContents.kpi2 > '14.4' && pinsFebContents.kpi2 < '18')?'yellow-7':(pinsFebContents.kpi2 >= '18' && pinsFebContents.kpi2 < '21.6')?'green':(pinsFebContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsFebContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsFebContents.kpi3 == null)?'grey-2':(pinsFebContents.kpi3 >= '0' && pinsFebContents.kpi3 <= '7.2')?'red':(pinsFebContents.kpi3 > '7.2' && pinsFebContents.kpi3 <= '9.6')?'orange':(pinsFebContents.kpi3 > '9.6' && pinsFebContents.kpi3 < '12')?'yellow-7':(pinsFebContents.kpi3 >= '12' && pinsFebContents.kpi3 < '14.4')?'green':(pinsFebContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsFebContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsMarContents.kpi1 == null)?'grey-2':(pinsMarContents.kpi1 >= '0' && pinsMarContents.kpi1 <= '0.6')?'red':(pinsMarContents.kpi1 > '0.6' && pinsMarContents.kpi1 <= '0.8')?'orange':(pinsMarContents.kpi1 > '0.8' && pinsMarContents.kpi1 < '1')?'yellow-7':(pinsMarContents.kpi1 >= '1' && pinsMarContents.kpi1 < '1.2')?'green':(pinsMarContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsMarContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsMarContents.kpi2 == null)?'grey-2':(pinsMarContents.kpi2 >= '0' && pinsMarContents.kpi2 <= '10.8')?'red':(pinsMarContents.kpi2 > '10.8' && pinsMarContents.kpi2 <= '14.4')?'orange':(pinsMarContents.kpi2 > '14.4' && pinsMarContents.kpi2 < '18')?'yellow-7':(pinsMarContents.kpi2 >= '18' && pinsMarContents.kpi2 < '21.6')?'green':(pinsMarContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsMarContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsMarContents.kpi3 == null)?'grey-2':(pinsMarContents.kpi3 >= '0' && pinsMarContents.kpi3 <= '7.2')?'red':(pinsMarContents.kpi3 > '7.2' && pinsMarContents.kpi3 <= '9.6')?'orange':(pinsMarContents.kpi3 > '9.6' && pinsMarContents.kpi3 < '12')?'yellow-7':(pinsMarContents.kpi3 >= '12' && pinsMarContents.kpi3 < '14.4')?'green':(pinsMarContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsMarContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsAprContents.kpi1 == null)?'grey-2':(pinsAprContents.kpi1 >= '0' && pinsAprContents.kpi1 <= '0.6')?'red':(pinsAprContents.kpi1 > '0.6' && pinsAprContents.kpi1 <= '0.8')?'orange':(pinsAprContents.kpi1 > '0.8' && pinsAprContents.kpi1 < '1')?'yellow-7':(pinsAprContents.kpi1 >= '1' && pinsAprContents.kpi1 < '1.2')?'green':(pinsAprContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsAprContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsAprContents.kpi2 == null)?'grey-2':(pinsAprContents.kpi2 >= '0' && pinsAprContents.kpi2 <= '10.8')?'red':(pinsAprContents.kpi2 > '10.8' && pinsAprContents.kpi2 <= '14.4')?'orange':(pinsAprContents.kpi2 > '14.4' && pinsAprContents.kpi2 < '18')?'yellow-7':(pinsAprContents.kpi2 >= '18' && pinsAprContents.kpi2 < '21.6')?'green':(pinsAprContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsAprContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsAprContents.kpi3 == null)?'grey-2':(pinsAprContents.kpi3 >= '0' && pinsAprContents.kpi3 <= '7.2')?'red':(pinsAprContents.kpi3 > '7.2' && pinsAprContents.kpi3 <= '9.6')?'orange':(pinsAprContents.kpi3 > '9.6' && pinsAprContents.kpi3 < '12')?'yellow-7':(pinsAprContents.kpi3 >= '12' && pinsAprContents.kpi3 < '14.4')?'green':(pinsAprContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsAprContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsMayContents.kpi1 == null)?'grey-2':(pinsMayContents.kpi1 >= '0' && pinsMayContents.kpi1 <= '0.6')?'red':(pinsMayContents.kpi1 > '0.6' && pinsMayContents.kpi1 <= '0.8')?'orange':(pinsMayContents.kpi1 > '0.8' && pinsMayContents.kpi1 < '1')?'yellow-7':(pinsMayContents.kpi1 >= '1' && pinsMayContents.kpi1 < '1.2')?'green':(pinsMayContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsMayContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsMayContents.kpi2 == null)?'grey-2':(pinsMayContents.kpi2 >= '0' && pinsMayContents.kpi2 <= '10.8')?'red':(pinsMayContents.kpi2 > '10.8' && pinsMayContents.kpi2 <= '14.4')?'orange':(pinsMayContents.kpi2 > '14.4' && pinsMayContents.kpi2 < '18')?'yellow-7':(pinsMayContents.kpi2 >= '18' && pinsMayContents.kpi2 < '21.6')?'green':(pinsMayContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsMayContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsMayContents.kpi3 == null)?'grey-2':(pinsMayContents.kpi3 >= '0' && pinsMayContents.kpi3 <= '7.2')?'red':(pinsMayContents.kpi3 > '7.2' && pinsMayContents.kpi3 <= '9.6')?'orange':(pinsMayContents.kpi3 > '9.6' && pinsMayContents.kpi3 < '12')?'yellow-7':(pinsMayContents.kpi3 >= '12' && pinsMayContents.kpi3 < '14.4')?'green':(pinsMayContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsMayContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsJunContents.kpi1 == null)?'grey-2':(pinsJunContents.kpi1 >= '0' && pinsJunContents.kpi1 <= '0.6')?'red':(pinsJunContents.kpi1 > '0.6' && pinsJunContents.kpi1 <= '0.8')?'orange':(pinsJunContents.kpi1 > '0.8' && pinsJunContents.kpi1 < '1')?'yellow-7':(pinsJunContents.kpi1 >= '1' && pinsJunContents.kpi1 < '1.2')?'green':(pinsJunContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsJunContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJunContents.kpi2 == null)?'grey-2':(pinsJunContents.kpi2 >= '0' && pinsJunContents.kpi2 <= '10.8')?'red':(pinsJunContents.kpi2 > '10.8' && pinsJunContents.kpi2 <= '14.4')?'orange':(pinsJunContents.kpi2 > '14.4' && pinsJunContents.kpi2 < '18')?'yellow-7':(pinsJunContents.kpi2 >= '18' && pinsJunContents.kpi2 < '21.6')?'green':(pinsJunContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsJunContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJunContents.kpi3 == null)?'grey-2':(pinsJunContents.kpi3 >= '0' && pinsJunContents.kpi3 <= '7.2')?'red':(pinsJunContents.kpi3 > '7.2' && pinsJunContents.kpi3 <= '9.6')?'orange':(pinsJunContents.kpi3 > '9.6' && pinsJunContents.kpi3 < '12')?'yellow-7':(pinsJunContents.kpi3 >= '12' && pinsJunContents.kpi3 < '14.4')?'green':(pinsJunContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsJunContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsJulContents.kpi1 == null)?'grey-2':(pinsJulContents.kpi1 >= '0' && pinsJulContents.kpi1 <= '0.6')?'red':(pinsJulContents.kpi1 > '0.6' && pinsJulContents.kpi1 <= '0.8')?'orange':(pinsJulContents.kpi1 > '0.8' && pinsJulContents.kpi1 < '1')?'yellow-7':(pinsJulContents.kpi1 >= '1' && pinsJulContents.kpi1 < '1.2')?'green':(pinsJulContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsJulContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJulContents.kpi2 == null)?'grey-2':(pinsJulContents.kpi2 >= '0' && pinsJulContents.kpi2 <= '10.8')?'red':(pinsJulContents.kpi2 > '10.8' && pinsJulContents.kpi2 <= '14.4')?'orange':(pinsJulContents.kpi2 > '14.4' && pinsJulContents.kpi2 < '18')?'yellow-7':(pinsJulContents.kpi2 >= '18' && pinsJulContents.kpi2 < '21.6')?'green':(pinsJulContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsJulContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJulContents.kpi3 == null)?'grey-2':(pinsJulContents.kpi3 >= '0' && pinsJulContents.kpi3 <= '7.2')?'red':(pinsJulContents.kpi3 > '7.2' && pinsJulContents.kpi3 <= '9.6')?'orange':(pinsJulContents.kpi3 > '9.6' && pinsJulContents.kpi3 < '12')?'yellow-7':(pinsJulContents.kpi3 >= '12' && pinsJulContents.kpi3 < '14.4')?'green':(pinsJulContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsJulContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsAugContents.kpi1 == null)?'grey-2':(pinsAugContents.kpi1 >= '0' && pinsAugContents.kpi1 <= '0.6')?'red':(pinsAugContents.kpi1 > '0.6' && pinsAugContents.kpi1 <= '0.8')?'orange':(pinsAugContents.kpi1 > '0.8' && pinsAugContents.kpi1 < '1')?'yellow-7':(pinsAugContents.kpi1 >= '1' && pinsAugContents.kpi1 < '1.2')?'green':(pinsAugContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsAugContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsAugContents.kpi2 == null)?'grey-2':(pinsAugContents.kpi2 >= '0' && pinsAugContents.kpi2 <= '10.8')?'red':(pinsAugContents.kpi2 > '10.8' && pinsAugContents.kpi2 <= '14.4')?'orange':(pinsAugContents.kpi2 > '14.4' && pinsAugContents.kpi2 < '18')?'yellow-7':(pinsAugContents.kpi2 >= '18' && pinsAugContents.kpi2 < '21.6')?'green':(pinsAugContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsAugContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsAugContents.kpi3 == null)?'grey-2':(pinsAugContents.kpi3 >= '0' && pinsAugContents.kpi3 <= '7.2')?'red':(pinsAugContents.kpi3 > '7.2' && pinsAugContents.kpi3 <= '9.6')?'orange':(pinsAugContents.kpi3 > '9.6' && pinsAugContents.kpi3 < '12')?'yellow-7':(pinsAugContents.kpi3 >= '12' && pinsAugContents.kpi3 < '14.4')?'green':(pinsAugContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsAugContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsSepContents.kpi1 == null)?'grey-2':(pinsSepContents.kpi1 >= '0' && pinsSepContents.kpi1 <= '0.6')?'red':(pinsSepContents.kpi1 > '0.6' && pinsSepContents.kpi1 <= '0.8')?'orange':(pinsSepContents.kpi1 > '0.8' && pinsSepContents.kpi1 < '1')?'yellow-7':(pinsSepContents.kpi1 >= '1' && pinsSepContents.kpi1 < '1.2')?'green':(pinsSepContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsSepContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsSepContents.kpi2 == null)?'grey-2':(pinsSepContents.kpi2 >= '0' && pinsSepContents.kpi2 <= '10.8')?'red':(pinsSepContents.kpi2 > '10.8' && pinsSepContents.kpi2 <= '14.4')?'orange':(pinsSepContents.kpi2 > '14.4' && pinsSepContents.kpi2 < '18')?'yellow-7':(pinsSepContents.kpi2 >= '18' && pinsSepContents.kpi2 < '21.6')?'green':(pinsSepContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsSepContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsSepContents.kpi3 == null)?'grey-2':(pinsSepContents.kpi3 >= '0' && pinsSepContents.kpi3 <= '7.2')?'red':(pinsSepContents.kpi3 > '7.2' && pinsSepContents.kpi3 <= '9.6')?'orange':(pinsSepContents.kpi3 > '9.6' && pinsSepContents.kpi3 < '12')?'yellow-7':(pinsSepContents.kpi3 >= '12' && pinsSepContents.kpi3 < '14.4')?'green':(pinsSepContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsSepContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsOctContents.kpi1 == null)?'grey-2':(pinsOctContents.kpi1 >= '0' && pinsOctContents.kpi1 <= '0.6')?'red':(pinsOctContents.kpi1 > '0.6' && pinsOctContents.kpi1 <= '0.8')?'orange':(pinsOctContents.kpi1 > '0.8' && pinsOctContents.kpi1 < '1')?'yellow-7':(pinsOctContents.kpi1 >= '1' && pinsOctContents.kpi1 < '1.2')?'green':(pinsOctContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsOctContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsOctContents.kpi2 == null)?'grey-2':(pinsOctContents.kpi2 >= '0' && pinsOctContents.kpi2 <= '10.8')?'red':(pinsOctContents.kpi2 > '10.8' && pinsOctContents.kpi2 <= '14.4')?'orange':(pinsOctContents.kpi2 > '14.4' && pinsOctContents.kpi2 < '18')?'yellow-7':(pinsOctContents.kpi2 >= '18' && pinsOctContents.kpi2 < '21.6')?'green':(pinsOctContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsOctContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsOctContents.kpi3 == null)?'grey-2':(pinsOctContents.kpi3 >= '0' && pinsOctContents.kpi3 <= '7.2')?'red':(pinsOctContents.kpi3 > '7.2' && pinsOctContents.kpi3 <= '9.6')?'orange':(pinsOctContents.kpi3 > '9.6' && pinsOctContents.kpi3 < '12')?'yellow-7':(pinsOctContents.kpi3 >= '12' && pinsOctContents.kpi3 < '14.4')?'green':(pinsOctContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsOctContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsNovContents.kpi1 == null)?'grey-2':(pinsNovContents.kpi1 >= '0' && pinsNovContents.kpi1 <= '0.6')?'red':(pinsNovContents.kpi1 > '0.6' && pinsNovContents.kpi1 <= '0.8')?'orange':(pinsNovContents.kpi1 > '0.8' && pinsNovContents.kpi1 < '1')?'yellow-7':(pinsNovContents.kpi1 >= '1' && pinsNovContents.kpi1 < '1.2')?'green':(pinsNovContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsNovContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsNovContents.kpi2 == null)?'grey-2':(pinsNovContents.kpi2 >= '0' && pinsNovContents.kpi2 <= '10.8')?'red':(pinsNovContents.kpi2 > '10.8' && pinsNovContents.kpi2 <= '14.4')?'orange':(pinsNovContents.kpi2 > '14.4' && pinsNovContents.kpi2 < '18')?'yellow-7':(pinsNovContents.kpi2 >= '18' && pinsNovContents.kpi2 < '21.6')?'green':(pinsNovContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsNovContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsNovContents.kpi3 == null)?'grey-2':(pinsNovContents.kpi3 >= '0' && pinsNovContents.kpi3 <= '7.2')?'red':(pinsNovContents.kpi3 > '7.2' && pinsNovContents.kpi3 <= '9.6')?'orange':(pinsNovContents.kpi3 > '9.6' && pinsNovContents.kpi3 < '12')?'yellow-7':(pinsNovContents.kpi3 >= '12' && pinsNovContents.kpi3 < '14.4')?'green':(pinsNovContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsNovContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsDecContents.kpi1 == null)?'grey-2':(pinsDecContents.kpi1 >= '0' && pinsDecContents.kpi1 <= '0.6')?'red':(pinsDecContents.kpi1 > '0.6' && pinsDecContents.kpi1 <= '0.8')?'orange':(pinsDecContents.kpi1 > '0.8' && pinsDecContents.kpi1 < '1')?'yellow-7':(pinsDecContents.kpi1 >= '1' && pinsDecContents.kpi1 < '1.2')?'green':(pinsDecContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsDecContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsDecContents.kpi2 == null)?'grey-2':(pinsDecContents.kpi2 >= '0' && pinsDecContents.kpi2 <= '10.8')?'red':(pinsDecContents.kpi2 > '10.8' && pinsDecContents.kpi2 <= '14.4')?'orange':(pinsDecContents.kpi2 > '14.4' && pinsDecContents.kpi2 < '18')?'yellow-7':(pinsDecContents.kpi2 >= '18' && pinsDecContents.kpi2 < '21.6')?'green':(pinsDecContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsDecContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsDecContents.kpi3 == null)?'grey-2':(pinsDecContents.kpi3 >= '0' && pinsDecContents.kpi3 <= '7.2')?'red':(pinsDecContents.kpi3 > '7.2' && pinsDecContents.kpi3 <= '9.6')?'orange':(pinsDecContents.kpi3 > '9.6' && pinsDecContents.kpi3 < '12')?'yellow-7':(pinsDecContents.kpi3 >= '12' && pinsDecContents.kpi3 < '14.4')?'green':(pinsDecContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsDecContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                                <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of community and social service providers in the networks</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsJanContents.kpi1 == null)?'grey-2':(pinsJanContents.kpi1 >= '0' && pinsJanContents.kpi1 <= '0.6')?'red':(pinsJanContents.kpi1 > '0.6' && pinsJanContents.kpi1 <= '0.8')?'orange':(pinsJanContents.kpi1 > '0.8' && pinsJanContents.kpi1 < '1')?'yellow-7':(pinsJanContents.kpi1 >= '1' && pinsJanContents.kpi1 < '1.2')?'green':(pinsJanContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsJanContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJanContents.kpi2 == null)?'grey-2':(pinsJanContents.kpi2 >= '0' && pinsJanContents.kpi2 <= '10.8')?'red':(pinsJanContents.kpi2 > '10.8' && pinsJanContents.kpi2 <= '14.4')?'orange':(pinsJanContents.kpi2 > '14.4' && pinsJanContents.kpi2 < '18')?'yellow-7':(pinsJanContents.kpi2 >= '18' && pinsJanContents.kpi2 < '21.6')?'green':(pinsJanContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsJanContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJanContents.kpi3 == null)?'grey-2':(pinsJanContents.kpi3 >= '0' && pinsJanContents.kpi3 <= '7.2')?'red':(pinsJanContents.kpi3 > '7.2' && pinsJanContents.kpi3 <= '9.6')?'orange':(pinsJanContents.kpi3 > '9.6' && pinsJanContents.kpi3 < '12')?'yellow-7':(pinsJanContents.kpi3 >= '12' && pinsJanContents.kpi3 < '14.4')?'green':(pinsJanContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsJanContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsFebContents.kpi1 == null)?'grey-2':(pinsFebContents.kpi1 >= '0' && pinsFebContents.kpi1 <= '0.6')?'red':(pinsFebContents.kpi1 > '0.6' && pinsFebContents.kpi1 <= '0.8')?'orange':(pinsFebContents.kpi1 > '0.8' && pinsFebContents.kpi1 < '1')?'yellow-7':(pinsFebContents.kpi1 >= '1' && pinsFebContents.kpi1 < '1.2')?'green':(pinsFebContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsFebContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsFebContents.kpi2 == null)?'grey-2':(pinsFebContents.kpi2 >= '0' && pinsFebContents.kpi2 <= '10.8')?'red':(pinsFebContents.kpi2 > '10.8' && pinsFebContents.kpi2 <= '14.4')?'orange':(pinsFebContents.kpi2 > '14.4' && pinsFebContents.kpi2 < '18')?'yellow-7':(pinsFebContents.kpi2 >= '18' && pinsFebContents.kpi2 < '21.6')?'green':(pinsFebContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsFebContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsFebContents.kpi3 == null)?'grey-2':(pinsFebContents.kpi3 >= '0' && pinsFebContents.kpi3 <= '7.2')?'red':(pinsFebContents.kpi3 > '7.2' && pinsFebContents.kpi3 <= '9.6')?'orange':(pinsFebContents.kpi3 > '9.6' && pinsFebContents.kpi3 < '12')?'yellow-7':(pinsFebContents.kpi3 >= '12' && pinsFebContents.kpi3 < '14.4')?'green':(pinsFebContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsFebContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsMarContents.kpi1 == null)?'grey-2':(pinsMarContents.kpi1 >= '0' && pinsMarContents.kpi1 <= '0.6')?'red':(pinsMarContents.kpi1 > '0.6' && pinsMarContents.kpi1 <= '0.8')?'orange':(pinsMarContents.kpi1 > '0.8' && pinsMarContents.kpi1 < '1')?'yellow-7':(pinsMarContents.kpi1 >= '1' && pinsMarContents.kpi1 < '1.2')?'green':(pinsMarContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsMarContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsMarContents.kpi2 == null)?'grey-2':(pinsMarContents.kpi2 >= '0' && pinsMarContents.kpi2 <= '10.8')?'red':(pinsMarContents.kpi2 > '10.8' && pinsMarContents.kpi2 <= '14.4')?'orange':(pinsMarContents.kpi2 > '14.4' && pinsMarContents.kpi2 < '18')?'yellow-7':(pinsMarContents.kpi2 >= '18' && pinsMarContents.kpi2 < '21.6')?'green':(pinsMarContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsMarContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsMarContents.kpi3 == null)?'grey-2':(pinsMarContents.kpi3 >= '0' && pinsMarContents.kpi3 <= '7.2')?'red':(pinsMarContents.kpi3 > '7.2' && pinsMarContents.kpi3 <= '9.6')?'orange':(pinsMarContents.kpi3 > '9.6' && pinsMarContents.kpi3 < '12')?'yellow-7':(pinsMarContents.kpi3 >= '12' && pinsMarContents.kpi3 < '14.4')?'green':(pinsMarContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsMarContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsAprContents.kpi1 == null)?'grey-2':(pinsAprContents.kpi1 >= '0' && pinsAprContents.kpi1 <= '0.6')?'red':(pinsAprContents.kpi1 > '0.6' && pinsAprContents.kpi1 <= '0.8')?'orange':(pinsAprContents.kpi1 > '0.8' && pinsAprContents.kpi1 < '1')?'yellow-7':(pinsAprContents.kpi1 >= '1' && pinsAprContents.kpi1 < '1.2')?'green':(pinsAprContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsAprContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsAprContents.kpi2 == null)?'grey-2':(pinsAprContents.kpi2 >= '0' && pinsAprContents.kpi2 <= '10.8')?'red':(pinsAprContents.kpi2 > '10.8' && pinsAprContents.kpi2 <= '14.4')?'orange':(pinsAprContents.kpi2 > '14.4' && pinsAprContents.kpi2 < '18')?'yellow-7':(pinsAprContents.kpi2 >= '18' && pinsAprContents.kpi2 < '21.6')?'green':(pinsAprContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsAprContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsAprContents.kpi3 == null)?'grey-2':(pinsAprContents.kpi3 >= '0' && pinsAprContents.kpi3 <= '7.2')?'red':(pinsAprContents.kpi3 > '7.2' && pinsAprContents.kpi3 <= '9.6')?'orange':(pinsAprContents.kpi3 > '9.6' && pinsAprContents.kpi3 < '12')?'yellow-7':(pinsAprContents.kpi3 >= '12' && pinsAprContents.kpi3 < '14.4')?'green':(pinsAprContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsAprContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsMayContents.kpi1 == null)?'grey-2':(pinsMayContents.kpi1 >= '0' && pinsMayContents.kpi1 <= '0.6')?'red':(pinsMayContents.kpi1 > '0.6' && pinsMayContents.kpi1 <= '0.8')?'orange':(pinsMayContents.kpi1 > '0.8' && pinsMayContents.kpi1 < '1')?'yellow-7':(pinsMayContents.kpi1 >= '1' && pinsMayContents.kpi1 < '1.2')?'green':(pinsMayContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsMayContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsMayContents.kpi2 == null)?'grey-2':(pinsMayContents.kpi2 >= '0' && pinsMayContents.kpi2 <= '10.8')?'red':(pinsMayContents.kpi2 > '10.8' && pinsMayContents.kpi2 <= '14.4')?'orange':(pinsMayContents.kpi2 > '14.4' && pinsMayContents.kpi2 < '18')?'yellow-7':(pinsMayContents.kpi2 >= '18' && pinsMayContents.kpi2 < '21.6')?'green':(pinsMayContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsMayContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsMayContents.kpi3 == null)?'grey-2':(pinsMayContents.kpi3 >= '0' && pinsMayContents.kpi3 <= '7.2')?'red':(pinsMayContents.kpi3 > '7.2' && pinsMayContents.kpi3 <= '9.6')?'orange':(pinsMayContents.kpi3 > '9.6' && pinsMayContents.kpi3 < '12')?'yellow-7':(pinsMayContents.kpi3 >= '12' && pinsMayContents.kpi3 < '14.4')?'green':(pinsMayContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsMayContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsJunContents.kpi1 == null)?'grey-2':(pinsJunContents.kpi1 >= '0' && pinsJunContents.kpi1 <= '0.6')?'red':(pinsJunContents.kpi1 > '0.6' && pinsJunContents.kpi1 <= '0.8')?'orange':(pinsJunContents.kpi1 > '0.8' && pinsJunContents.kpi1 < '1')?'yellow-7':(pinsJunContents.kpi1 >= '1' && pinsJunContents.kpi1 < '1.2')?'green':(pinsJunContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsJunContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJunContents.kpi2 == null)?'grey-2':(pinsJunContents.kpi2 >= '0' && pinsJunContents.kpi2 <= '10.8')?'red':(pinsJunContents.kpi2 > '10.8' && pinsJunContents.kpi2 <= '14.4')?'orange':(pinsJunContents.kpi2 > '14.4' && pinsJunContents.kpi2 < '18')?'yellow-7':(pinsJunContents.kpi2 >= '18' && pinsJunContents.kpi2 < '21.6')?'green':(pinsJunContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsJunContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJunContents.kpi3 == null)?'grey-2':(pinsJunContents.kpi3 >= '0' && pinsJunContents.kpi3 <= '7.2')?'red':(pinsJunContents.kpi3 > '7.2' && pinsJunContents.kpi3 <= '9.6')?'orange':(pinsJunContents.kpi3 > '9.6' && pinsJunContents.kpi3 < '12')?'yellow-7':(pinsJunContents.kpi3 >= '12' && pinsJunContents.kpi3 < '14.4')?'green':(pinsJunContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsJunContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsJulContents.kpi1 == null)?'grey-2':(pinsJulContents.kpi1 >= '0' && pinsJulContents.kpi1 <= '0.6')?'red':(pinsJulContents.kpi1 > '0.6' && pinsJulContents.kpi1 <= '0.8')?'orange':(pinsJulContents.kpi1 > '0.8' && pinsJulContents.kpi1 < '1')?'yellow-7':(pinsJulContents.kpi1 >= '1' && pinsJulContents.kpi1 < '1.2')?'green':(pinsJulContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsJulContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJulContents.kpi2 == null)?'grey-2':(pinsJulContents.kpi2 >= '0' && pinsJulContents.kpi2 <= '10.8')?'red':(pinsJulContents.kpi2 > '10.8' && pinsJulContents.kpi2 <= '14.4')?'orange':(pinsJulContents.kpi2 > '14.4' && pinsJulContents.kpi2 < '18')?'yellow-7':(pinsJulContents.kpi2 >= '18' && pinsJulContents.kpi2 < '21.6')?'green':(pinsJulContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsJulContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJulContents.kpi3 == null)?'grey-2':(pinsJulContents.kpi3 >= '0' && pinsJulContents.kpi3 <= '7.2')?'red':(pinsJulContents.kpi3 > '7.2' && pinsJulContents.kpi3 <= '9.6')?'orange':(pinsJulContents.kpi3 > '9.6' && pinsJulContents.kpi3 < '12')?'yellow-7':(pinsJulContents.kpi3 >= '12' && pinsJulContents.kpi3 < '14.4')?'green':(pinsJulContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsJulContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsAugContents.kpi1 == null)?'grey-2':(pinsAugContents.kpi1 >= '0' && pinsAugContents.kpi1 <= '0.6')?'red':(pinsAugContents.kpi1 > '0.6' && pinsAugContents.kpi1 <= '0.8')?'orange':(pinsAugContents.kpi1 > '0.8' && pinsAugContents.kpi1 < '1')?'yellow-7':(pinsAugContents.kpi1 >= '1' && pinsAugContents.kpi1 < '1.2')?'green':(pinsAugContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsAugContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsAugContents.kpi2 == null)?'grey-2':(pinsAugContents.kpi2 >= '0' && pinsAugContents.kpi2 <= '10.8')?'red':(pinsAugContents.kpi2 > '10.8' && pinsAugContents.kpi2 <= '14.4')?'orange':(pinsAugContents.kpi2 > '14.4' && pinsAugContents.kpi2 < '18')?'yellow-7':(pinsAugContents.kpi2 >= '18' && pinsAugContents.kpi2 < '21.6')?'green':(pinsAugContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsAugContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsAugContents.kpi3 == null)?'grey-2':(pinsAugContents.kpi3 >= '0' && pinsAugContents.kpi3 <= '7.2')?'red':(pinsAugContents.kpi3 > '7.2' && pinsAugContents.kpi3 <= '9.6')?'orange':(pinsAugContents.kpi3 > '9.6' && pinsAugContents.kpi3 < '12')?'yellow-7':(pinsAugContents.kpi3 >= '12' && pinsAugContents.kpi3 < '14.4')?'green':(pinsAugContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsAugContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsSepContents.kpi1 == null)?'grey-2':(pinsSepContents.kpi1 >= '0' && pinsSepContents.kpi1 <= '0.6')?'red':(pinsSepContents.kpi1 > '0.6' && pinsSepContents.kpi1 <= '0.8')?'orange':(pinsSepContents.kpi1 > '0.8' && pinsSepContents.kpi1 < '1')?'yellow-7':(pinsSepContents.kpi1 >= '1' && pinsSepContents.kpi1 < '1.2')?'green':(pinsSepContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsSepContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsSepContents.kpi2 == null)?'grey-2':(pinsSepContents.kpi2 >= '0' && pinsSepContents.kpi2 <= '10.8')?'red':(pinsSepContents.kpi2 > '10.8' && pinsSepContents.kpi2 <= '14.4')?'orange':(pinsSepContents.kpi2 > '14.4' && pinsSepContents.kpi2 < '18')?'yellow-7':(pinsSepContents.kpi2 >= '18' && pinsSepContents.kpi2 < '21.6')?'green':(pinsSepContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsSepContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsSepContents.kpi3 == null)?'grey-2':(pinsSepContents.kpi3 >= '0' && pinsSepContents.kpi3 <= '7.2')?'red':(pinsSepContents.kpi3 > '7.2' && pinsSepContents.kpi3 <= '9.6')?'orange':(pinsSepContents.kpi3 > '9.6' && pinsSepContents.kpi3 < '12')?'yellow-7':(pinsSepContents.kpi3 >= '12' && pinsSepContents.kpi3 < '14.4')?'green':(pinsSepContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsSepContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsOctContents.kpi1 == null)?'grey-2':(pinsOctContents.kpi1 >= '0' && pinsOctContents.kpi1 <= '0.6')?'red':(pinsOctContents.kpi1 > '0.6' && pinsOctContents.kpi1 <= '0.8')?'orange':(pinsOctContents.kpi1 > '0.8' && pinsOctContents.kpi1 < '1')?'yellow-7':(pinsOctContents.kpi1 >= '1' && pinsOctContents.kpi1 < '1.2')?'green':(pinsOctContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsOctContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsOctContents.kpi2 == null)?'grey-2':(pinsOctContents.kpi2 >= '0' && pinsOctContents.kpi2 <= '10.8')?'red':(pinsOctContents.kpi2 > '10.8' && pinsOctContents.kpi2 <= '14.4')?'orange':(pinsOctContents.kpi2 > '14.4' && pinsOctContents.kpi2 < '18')?'yellow-7':(pinsOctContents.kpi2 >= '18' && pinsOctContents.kpi2 < '21.6')?'green':(pinsOctContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsOctContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsOctContents.kpi3 == null)?'grey-2':(pinsOctContents.kpi3 >= '0' && pinsOctContents.kpi3 <= '7.2')?'red':(pinsOctContents.kpi3 > '7.2' && pinsOctContents.kpi3 <= '9.6')?'orange':(pinsOctContents.kpi3 > '9.6' && pinsOctContents.kpi3 < '12')?'yellow-7':(pinsOctContents.kpi3 >= '12' && pinsOctContents.kpi3 < '14.4')?'green':(pinsOctContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsOctContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsNovContents.kpi1 == null)?'grey-2':(pinsNovContents.kpi1 >= '0' && pinsNovContents.kpi1 <= '0.6')?'red':(pinsNovContents.kpi1 > '0.6' && pinsNovContents.kpi1 <= '0.8')?'orange':(pinsNovContents.kpi1 > '0.8' && pinsNovContents.kpi1 < '1')?'yellow-7':(pinsNovContents.kpi1 >= '1' && pinsNovContents.kpi1 < '1.2')?'green':(pinsNovContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsNovContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsNovContents.kpi2 == null)?'grey-2':(pinsNovContents.kpi2 >= '0' && pinsNovContents.kpi2 <= '10.8')?'red':(pinsNovContents.kpi2 > '10.8' && pinsNovContents.kpi2 <= '14.4')?'orange':(pinsNovContents.kpi2 > '14.4' && pinsNovContents.kpi2 < '18')?'yellow-7':(pinsNovContents.kpi2 >= '18' && pinsNovContents.kpi2 < '21.6')?'green':(pinsNovContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsNovContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsNovContents.kpi3 == null)?'grey-2':(pinsNovContents.kpi3 >= '0' && pinsNovContents.kpi3 <= '7.2')?'red':(pinsNovContents.kpi3 > '7.2' && pinsNovContents.kpi3 <= '9.6')?'orange':(pinsNovContents.kpi3 > '9.6' && pinsNovContents.kpi3 < '12')?'yellow-7':(pinsNovContents.kpi3 >= '12' && pinsNovContents.kpi3 < '14.4')?'green':(pinsNovContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsNovContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsDecContents.kpi1 == null)?'grey-2':(pinsDecContents.kpi1 >= '0' && pinsDecContents.kpi1 <= '0.6')?'red':(pinsDecContents.kpi1 > '0.6' && pinsDecContents.kpi1 <= '0.8')?'orange':(pinsDecContents.kpi1 > '0.8' && pinsDecContents.kpi1 < '1')?'yellow-7':(pinsDecContents.kpi1 >= '1' && pinsDecContents.kpi1 < '1.2')?'green':(pinsDecContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsDecContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsDecContents.kpi2 == null)?'grey-2':(pinsDecContents.kpi2 >= '0' && pinsDecContents.kpi2 <= '10.8')?'red':(pinsDecContents.kpi2 > '10.8' && pinsDecContents.kpi2 <= '14.4')?'orange':(pinsDecContents.kpi2 > '14.4' && pinsDecContents.kpi2 < '18')?'yellow-7':(pinsDecContents.kpi2 >= '18' && pinsDecContents.kpi2 < '21.6')?'green':(pinsDecContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsDecContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsDecContents.kpi3 == null)?'grey-2':(pinsDecContents.kpi3 >= '0' && pinsDecContents.kpi3 <= '7.2')?'red':(pinsDecContents.kpi3 > '7.2' && pinsDecContents.kpi3 <= '9.6')?'orange':(pinsDecContents.kpi3 > '9.6' && pinsDecContents.kpi3 < '12')?'yellow-7':(pinsDecContents.kpi3 >= '12' && pinsDecContents.kpi3 < '14.4')?'green':(pinsDecContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsDecContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                                <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of community and social service providers in the networks</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsJanContents.kpi1 == null)?'grey-2':(pinsJanContents.kpi1 >= '0' && pinsJanContents.kpi1 <= '0.6')?'red':(pinsJanContents.kpi1 > '0.6' && pinsJanContents.kpi1 <= '0.8')?'orange':(pinsJanContents.kpi1 > '0.8' && pinsJanContents.kpi1 < '1')?'yellow-7':(pinsJanContents.kpi1 >= '1' && pinsJanContents.kpi1 < '1.2')?'green':(pinsJanContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsJanContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJanContents.kpi2 == null)?'grey-2':(pinsJanContents.kpi2 >= '0' && pinsJanContents.kpi2 <= '10.8')?'red':(pinsJanContents.kpi2 > '10.8' && pinsJanContents.kpi2 <= '14.4')?'orange':(pinsJanContents.kpi2 > '14.4' && pinsJanContents.kpi2 < '18')?'yellow-7':(pinsJanContents.kpi2 >= '18' && pinsJanContents.kpi2 < '21.6')?'green':(pinsJanContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsJanContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJanContents.kpi3 == null)?'grey-2':(pinsJanContents.kpi3 >= '0' && pinsJanContents.kpi3 <= '7.2')?'red':(pinsJanContents.kpi3 > '7.2' && pinsJanContents.kpi3 <= '9.6')?'orange':(pinsJanContents.kpi3 > '9.6' && pinsJanContents.kpi3 < '12')?'yellow-7':(pinsJanContents.kpi3 >= '12' && pinsJanContents.kpi3 < '14.4')?'green':(pinsJanContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsJanContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsFebContents.kpi1 == null)?'grey-2':(pinsFebContents.kpi1 >= '0' && pinsFebContents.kpi1 <= '0.6')?'red':(pinsFebContents.kpi1 > '0.6' && pinsFebContents.kpi1 <= '0.8')?'orange':(pinsFebContents.kpi1 > '0.8' && pinsFebContents.kpi1 < '1')?'yellow-7':(pinsFebContents.kpi1 >= '1' && pinsFebContents.kpi1 < '1.2')?'green':(pinsFebContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsFebContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsFebContents.kpi2 == null)?'grey-2':(pinsFebContents.kpi2 >= '0' && pinsFebContents.kpi2 <= '10.8')?'red':(pinsFebContents.kpi2 > '10.8' && pinsFebContents.kpi2 <= '14.4')?'orange':(pinsFebContents.kpi2 > '14.4' && pinsFebContents.kpi2 < '18')?'yellow-7':(pinsFebContents.kpi2 >= '18' && pinsFebContents.kpi2 < '21.6')?'green':(pinsFebContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsFebContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsFebContents.kpi3 == null)?'grey-2':(pinsFebContents.kpi3 >= '0' && pinsFebContents.kpi3 <= '7.2')?'red':(pinsFebContents.kpi3 > '7.2' && pinsFebContents.kpi3 <= '9.6')?'orange':(pinsFebContents.kpi3 > '9.6' && pinsFebContents.kpi3 < '12')?'yellow-7':(pinsFebContents.kpi3 >= '12' && pinsFebContents.kpi3 < '14.4')?'green':(pinsFebContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsFebContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsMarContents.kpi1 == null)?'grey-2':(pinsMarContents.kpi1 >= '0' && pinsMarContents.kpi1 <= '0.6')?'red':(pinsMarContents.kpi1 > '0.6' && pinsMarContents.kpi1 <= '0.8')?'orange':(pinsMarContents.kpi1 > '0.8' && pinsMarContents.kpi1 < '1')?'yellow-7':(pinsMarContents.kpi1 >= '1' && pinsMarContents.kpi1 < '1.2')?'green':(pinsMarContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsMarContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsMarContents.kpi2 == null)?'grey-2':(pinsMarContents.kpi2 >= '0' && pinsMarContents.kpi2 <= '10.8')?'red':(pinsMarContents.kpi2 > '10.8' && pinsMarContents.kpi2 <= '14.4')?'orange':(pinsMarContents.kpi2 > '14.4' && pinsMarContents.kpi2 < '18')?'yellow-7':(pinsMarContents.kpi2 >= '18' && pinsMarContents.kpi2 < '21.6')?'green':(pinsMarContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsMarContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsMarContents.kpi3 == null)?'grey-2':(pinsMarContents.kpi3 >= '0' && pinsMarContents.kpi3 <= '7.2')?'red':(pinsMarContents.kpi3 > '7.2' && pinsMarContents.kpi3 <= '9.6')?'orange':(pinsMarContents.kpi3 > '9.6' && pinsMarContents.kpi3 < '12')?'yellow-7':(pinsMarContents.kpi3 >= '12' && pinsMarContents.kpi3 < '14.4')?'green':(pinsMarContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsMarContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsAprContents.kpi1 == null)?'grey-2':(pinsAprContents.kpi1 >= '0' && pinsAprContents.kpi1 <= '0.6')?'red':(pinsAprContents.kpi1 > '0.6' && pinsAprContents.kpi1 <= '0.8')?'orange':(pinsAprContents.kpi1 > '0.8' && pinsAprContents.kpi1 < '1')?'yellow-7':(pinsAprContents.kpi1 >= '1' && pinsAprContents.kpi1 < '1.2')?'green':(pinsAprContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsAprContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsAprContents.kpi2 == null)?'grey-2':(pinsAprContents.kpi2 >= '0' && pinsAprContents.kpi2 <= '10.8')?'red':(pinsAprContents.kpi2 > '10.8' && pinsAprContents.kpi2 <= '14.4')?'orange':(pinsAprContents.kpi2 > '14.4' && pinsAprContents.kpi2 < '18')?'yellow-7':(pinsAprContents.kpi2 >= '18' && pinsAprContents.kpi2 < '21.6')?'green':(pinsAprContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsAprContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsAprContents.kpi3 == null)?'grey-2':(pinsAprContents.kpi3 >= '0' && pinsAprContents.kpi3 <= '7.2')?'red':(pinsAprContents.kpi3 > '7.2' && pinsAprContents.kpi3 <= '9.6')?'orange':(pinsAprContents.kpi3 > '9.6' && pinsAprContents.kpi3 < '12')?'yellow-7':(pinsAprContents.kpi3 >= '12' && pinsAprContents.kpi3 < '14.4')?'green':(pinsAprContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsAprContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsMayContents.kpi1 == null)?'grey-2':(pinsMayContents.kpi1 >= '0' && pinsMayContents.kpi1 <= '0.6')?'red':(pinsMayContents.kpi1 > '0.6' && pinsMayContents.kpi1 <= '0.8')?'orange':(pinsMayContents.kpi1 > '0.8' && pinsMayContents.kpi1 < '1')?'yellow-7':(pinsMayContents.kpi1 >= '1' && pinsMayContents.kpi1 < '1.2')?'green':(pinsMayContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsMayContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsMayContents.kpi2 == null)?'grey-2':(pinsMayContents.kpi2 >= '0' && pinsMayContents.kpi2 <= '10.8')?'red':(pinsMayContents.kpi2 > '10.8' && pinsMayContents.kpi2 <= '14.4')?'orange':(pinsMayContents.kpi2 > '14.4' && pinsMayContents.kpi2 < '18')?'yellow-7':(pinsMayContents.kpi2 >= '18' && pinsMayContents.kpi2 < '21.6')?'green':(pinsMayContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsMayContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsMayContents.kpi3 == null)?'grey-2':(pinsMayContents.kpi3 >= '0' && pinsMayContents.kpi3 <= '7.2')?'red':(pinsMayContents.kpi3 > '7.2' && pinsMayContents.kpi3 <= '9.6')?'orange':(pinsMayContents.kpi3 > '9.6' && pinsMayContents.kpi3 < '12')?'yellow-7':(pinsMayContents.kpi3 >= '12' && pinsMayContents.kpi3 < '14.4')?'green':(pinsMayContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsMayContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsJunContents.kpi1 == null)?'grey-2':(pinsJunContents.kpi1 >= '0' && pinsJunContents.kpi1 <= '0.6')?'red':(pinsJunContents.kpi1 > '0.6' && pinsJunContents.kpi1 <= '0.8')?'orange':(pinsJunContents.kpi1 > '0.8' && pinsJunContents.kpi1 < '1')?'yellow-7':(pinsJunContents.kpi1 >= '1' && pinsJunContents.kpi1 < '1.2')?'green':(pinsJunContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsJunContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJunContents.kpi2 == null)?'grey-2':(pinsJunContents.kpi2 >= '0' && pinsJunContents.kpi2 <= '10.8')?'red':(pinsJunContents.kpi2 > '10.8' && pinsJunContents.kpi2 <= '14.4')?'orange':(pinsJunContents.kpi2 > '14.4' && pinsJunContents.kpi2 < '18')?'yellow-7':(pinsJunContents.kpi2 >= '18' && pinsJunContents.kpi2 < '21.6')?'green':(pinsJunContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsJunContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJunContents.kpi3 == null)?'grey-2':(pinsJunContents.kpi3 >= '0' && pinsJunContents.kpi3 <= '7.2')?'red':(pinsJunContents.kpi3 > '7.2' && pinsJunContents.kpi3 <= '9.6')?'orange':(pinsJunContents.kpi3 > '9.6' && pinsJunContents.kpi3 < '12')?'yellow-7':(pinsJunContents.kpi3 >= '12' && pinsJunContents.kpi3 < '14.4')?'green':(pinsJunContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsJunContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsJulContents.kpi1 == null)?'grey-2':(pinsJulContents.kpi1 >= '0' && pinsJulContents.kpi1 <= '0.6')?'red':(pinsJulContents.kpi1 > '0.6' && pinsJulContents.kpi1 <= '0.8')?'orange':(pinsJulContents.kpi1 > '0.8' && pinsJulContents.kpi1 < '1')?'yellow-7':(pinsJulContents.kpi1 >= '1' && pinsJulContents.kpi1 < '1.2')?'green':(pinsJulContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsJulContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJulContents.kpi2 == null)?'grey-2':(pinsJulContents.kpi2 >= '0' && pinsJulContents.kpi2 <= '10.8')?'red':(pinsJulContents.kpi2 > '10.8' && pinsJulContents.kpi2 <= '14.4')?'orange':(pinsJulContents.kpi2 > '14.4' && pinsJulContents.kpi2 < '18')?'yellow-7':(pinsJulContents.kpi2 >= '18' && pinsJulContents.kpi2 < '21.6')?'green':(pinsJulContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsJulContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJulContents.kpi3 == null)?'grey-2':(pinsJulContents.kpi3 >= '0' && pinsJulContents.kpi3 <= '7.2')?'red':(pinsJulContents.kpi3 > '7.2' && pinsJulContents.kpi3 <= '9.6')?'orange':(pinsJulContents.kpi3 > '9.6' && pinsJulContents.kpi3 < '12')?'yellow-7':(pinsJulContents.kpi3 >= '12' && pinsJulContents.kpi3 < '14.4')?'green':(pinsJulContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsJulContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsAugContents.kpi1 == null)?'grey-2':(pinsAugContents.kpi1 >= '0' && pinsAugContents.kpi1 <= '0.6')?'red':(pinsAugContents.kpi1 > '0.6' && pinsAugContents.kpi1 <= '0.8')?'orange':(pinsAugContents.kpi1 > '0.8' && pinsAugContents.kpi1 < '1')?'yellow-7':(pinsAugContents.kpi1 >= '1' && pinsAugContents.kpi1 < '1.2')?'green':(pinsAugContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsAugContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsAugContents.kpi2 == null)?'grey-2':(pinsAugContents.kpi2 >= '0' && pinsAugContents.kpi2 <= '10.8')?'red':(pinsAugContents.kpi2 > '10.8' && pinsAugContents.kpi2 <= '14.4')?'orange':(pinsAugContents.kpi2 > '14.4' && pinsAugContents.kpi2 < '18')?'yellow-7':(pinsAugContents.kpi2 >= '18' && pinsAugContents.kpi2 < '21.6')?'green':(pinsAugContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsAugContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsAugContents.kpi3 == null)?'grey-2':(pinsAugContents.kpi3 >= '0' && pinsAugContents.kpi3 <= '7.2')?'red':(pinsAugContents.kpi3 > '7.2' && pinsAugContents.kpi3 <= '9.6')?'orange':(pinsAugContents.kpi3 > '9.6' && pinsAugContents.kpi3 < '12')?'yellow-7':(pinsAugContents.kpi3 >= '12' && pinsAugContents.kpi3 < '14.4')?'green':(pinsAugContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsAugContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsSepContents.kpi1 == null)?'grey-2':(pinsSepContents.kpi1 >= '0' && pinsSepContents.kpi1 <= '0.6')?'red':(pinsSepContents.kpi1 > '0.6' && pinsSepContents.kpi1 <= '0.8')?'orange':(pinsSepContents.kpi1 > '0.8' && pinsSepContents.kpi1 < '1')?'yellow-7':(pinsSepContents.kpi1 >= '1' && pinsSepContents.kpi1 < '1.2')?'green':(pinsSepContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsSepContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsSepContents.kpi2 == null)?'grey-2':(pinsSepContents.kpi2 >= '0' && pinsSepContents.kpi2 <= '10.8')?'red':(pinsSepContents.kpi2 > '10.8' && pinsSepContents.kpi2 <= '14.4')?'orange':(pinsSepContents.kpi2 > '14.4' && pinsSepContents.kpi2 < '18')?'yellow-7':(pinsSepContents.kpi2 >= '18' && pinsSepContents.kpi2 < '21.6')?'green':(pinsSepContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsSepContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsSepContents.kpi3 == null)?'grey-2':(pinsSepContents.kpi3 >= '0' && pinsSepContents.kpi3 <= '7.2')?'red':(pinsSepContents.kpi3 > '7.2' && pinsSepContents.kpi3 <= '9.6')?'orange':(pinsSepContents.kpi3 > '9.6' && pinsSepContents.kpi3 < '12')?'yellow-7':(pinsSepContents.kpi3 >= '12' && pinsSepContents.kpi3 < '14.4')?'green':(pinsSepContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsSepContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsOctContents.kpi1 == null)?'grey-2':(pinsOctContents.kpi1 >= '0' && pinsOctContents.kpi1 <= '0.6')?'red':(pinsOctContents.kpi1 > '0.6' && pinsOctContents.kpi1 <= '0.8')?'orange':(pinsOctContents.kpi1 > '0.8' && pinsOctContents.kpi1 < '1')?'yellow-7':(pinsOctContents.kpi1 >= '1' && pinsOctContents.kpi1 < '1.2')?'green':(pinsOctContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsOctContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsOctContents.kpi2 == null)?'grey-2':(pinsOctContents.kpi2 >= '0' && pinsOctContents.kpi2 <= '10.8')?'red':(pinsOctContents.kpi2 > '10.8' && pinsOctContents.kpi2 <= '14.4')?'orange':(pinsOctContents.kpi2 > '14.4' && pinsOctContents.kpi2 < '18')?'yellow-7':(pinsOctContents.kpi2 >= '18' && pinsOctContents.kpi2 < '21.6')?'green':(pinsOctContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsOctContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsOctContents.kpi3 == null)?'grey-2':(pinsOctContents.kpi3 >= '0' && pinsOctContents.kpi3 <= '7.2')?'red':(pinsOctContents.kpi3 > '7.2' && pinsOctContents.kpi3 <= '9.6')?'orange':(pinsOctContents.kpi3 > '9.6' && pinsOctContents.kpi3 < '12')?'yellow-7':(pinsOctContents.kpi3 >= '12' && pinsOctContents.kpi3 < '14.4')?'green':(pinsOctContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsOctContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsNovContents.kpi1 == null)?'grey-2':(pinsNovContents.kpi1 >= '0' && pinsNovContents.kpi1 <= '0.6')?'red':(pinsNovContents.kpi1 > '0.6' && pinsNovContents.kpi1 <= '0.8')?'orange':(pinsNovContents.kpi1 > '0.8' && pinsNovContents.kpi1 < '1')?'yellow-7':(pinsNovContents.kpi1 >= '1' && pinsNovContents.kpi1 < '1.2')?'green':(pinsNovContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsNovContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsNovContents.kpi2 == null)?'grey-2':(pinsNovContents.kpi2 >= '0' && pinsNovContents.kpi2 <= '10.8')?'red':(pinsNovContents.kpi2 > '10.8' && pinsNovContents.kpi2 <= '14.4')?'orange':(pinsNovContents.kpi2 > '14.4' && pinsNovContents.kpi2 < '18')?'yellow-7':(pinsNovContents.kpi2 >= '18' && pinsNovContents.kpi2 < '21.6')?'green':(pinsNovContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsNovContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsNovContents.kpi3 == null)?'grey-2':(pinsNovContents.kpi3 >= '0' && pinsNovContents.kpi3 <= '7.2')?'red':(pinsNovContents.kpi3 > '7.2' && pinsNovContents.kpi3 <= '9.6')?'orange':(pinsNovContents.kpi3 > '9.6' && pinsNovContents.kpi3 < '12')?'yellow-7':(pinsNovContents.kpi3 >= '12' && pinsNovContents.kpi3 < '14.4')?'green':(pinsNovContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsNovContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsDecContents.kpi1 == null)?'grey-2':(pinsDecContents.kpi1 >= '0' && pinsDecContents.kpi1 <= '0.6')?'red':(pinsDecContents.kpi1 > '0.6' && pinsDecContents.kpi1 <= '0.8')?'orange':(pinsDecContents.kpi1 > '0.8' && pinsDecContents.kpi1 < '1')?'yellow-7':(pinsDecContents.kpi1 >= '1' && pinsDecContents.kpi1 < '1.2')?'green':(pinsDecContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsDecContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsDecContents.kpi2 == null)?'grey-2':(pinsDecContents.kpi2 >= '0' && pinsDecContents.kpi2 <= '10.8')?'red':(pinsDecContents.kpi2 > '10.8' && pinsDecContents.kpi2 <= '14.4')?'orange':(pinsDecContents.kpi2 > '14.4' && pinsDecContents.kpi2 < '18')?'yellow-7':(pinsDecContents.kpi2 >= '18' && pinsDecContents.kpi2 < '21.6')?'green':(pinsDecContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsDecContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsDecContents.kpi3 == null)?'grey-2':(pinsDecContents.kpi3 >= '0' && pinsDecContents.kpi3 <= '7.2')?'red':(pinsDecContents.kpi3 > '7.2' && pinsDecContents.kpi3 <= '9.6')?'orange':(pinsDecContents.kpi3 > '9.6' && pinsDecContents.kpi3 < '12')?'yellow-7':(pinsDecContents.kpi3 >= '12' && pinsDecContents.kpi3 < '14.4')?'green':(pinsDecContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsDecContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                                <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of community and social service providers in the networks</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsJanContents.kpi1 == null)?'grey-2':(pinsJanContents.kpi1 >= '0' && pinsJanContents.kpi1 <= '0.6')?'red':(pinsJanContents.kpi1 > '0.6' && pinsJanContents.kpi1 <= '0.8')?'orange':(pinsJanContents.kpi1 > '0.8' && pinsJanContents.kpi1 < '1')?'yellow-7':(pinsJanContents.kpi1 >= '1' && pinsJanContents.kpi1 < '1.2')?'green':(pinsJanContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsJanContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJanContents.kpi2 == null)?'grey-2':(pinsJanContents.kpi2 >= '0' && pinsJanContents.kpi2 <= '10.8')?'red':(pinsJanContents.kpi2 > '10.8' && pinsJanContents.kpi2 <= '14.4')?'orange':(pinsJanContents.kpi2 > '14.4' && pinsJanContents.kpi2 < '18')?'yellow-7':(pinsJanContents.kpi2 >= '18' && pinsJanContents.kpi2 < '21.6')?'green':(pinsJanContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsJanContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJanContents.kpi3 == null)?'grey-2':(pinsJanContents.kpi3 >= '0' && pinsJanContents.kpi3 <= '7.2')?'red':(pinsJanContents.kpi3 > '7.2' && pinsJanContents.kpi3 <= '9.6')?'orange':(pinsJanContents.kpi3 > '9.6' && pinsJanContents.kpi3 < '12')?'yellow-7':(pinsJanContents.kpi3 >= '12' && pinsJanContents.kpi3 < '14.4')?'green':(pinsJanContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsJanContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsFebContents.kpi1 == null)?'grey-2':(pinsFebContents.kpi1 >= '0' && pinsFebContents.kpi1 <= '0.6')?'red':(pinsFebContents.kpi1 > '0.6' && pinsFebContents.kpi1 <= '0.8')?'orange':(pinsFebContents.kpi1 > '0.8' && pinsFebContents.kpi1 < '1')?'yellow-7':(pinsFebContents.kpi1 >= '1' && pinsFebContents.kpi1 < '1.2')?'green':(pinsFebContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsFebContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsFebContents.kpi2 == null)?'grey-2':(pinsFebContents.kpi2 >= '0' && pinsFebContents.kpi2 <= '10.8')?'red':(pinsFebContents.kpi2 > '10.8' && pinsFebContents.kpi2 <= '14.4')?'orange':(pinsFebContents.kpi2 > '14.4' && pinsFebContents.kpi2 < '18')?'yellow-7':(pinsFebContents.kpi2 >= '18' && pinsFebContents.kpi2 < '21.6')?'green':(pinsFebContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsFebContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsFebContents.kpi3 == null)?'grey-2':(pinsFebContents.kpi3 >= '0' && pinsFebContents.kpi3 <= '7.2')?'red':(pinsFebContents.kpi3 > '7.2' && pinsFebContents.kpi3 <= '9.6')?'orange':(pinsFebContents.kpi3 > '9.6' && pinsFebContents.kpi3 < '12')?'yellow-7':(pinsFebContents.kpi3 >= '12' && pinsFebContents.kpi3 < '14.4')?'green':(pinsFebContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsFebContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsMarContents.kpi1 == null)?'grey-2':(pinsMarContents.kpi1 >= '0' && pinsMarContents.kpi1 <= '0.6')?'red':(pinsMarContents.kpi1 > '0.6' && pinsMarContents.kpi1 <= '0.8')?'orange':(pinsMarContents.kpi1 > '0.8' && pinsMarContents.kpi1 < '1')?'yellow-7':(pinsMarContents.kpi1 >= '1' && pinsMarContents.kpi1 < '1.2')?'green':(pinsMarContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsMarContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsMarContents.kpi2 == null)?'grey-2':(pinsMarContents.kpi2 >= '0' && pinsMarContents.kpi2 <= '10.8')?'red':(pinsMarContents.kpi2 > '10.8' && pinsMarContents.kpi2 <= '14.4')?'orange':(pinsMarContents.kpi2 > '14.4' && pinsMarContents.kpi2 < '18')?'yellow-7':(pinsMarContents.kpi2 >= '18' && pinsMarContents.kpi2 < '21.6')?'green':(pinsMarContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsMarContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsMarContents.kpi3 == null)?'grey-2':(pinsMarContents.kpi3 >= '0' && pinsMarContents.kpi3 <= '7.2')?'red':(pinsMarContents.kpi3 > '7.2' && pinsMarContents.kpi3 <= '9.6')?'orange':(pinsMarContents.kpi3 > '9.6' && pinsMarContents.kpi3 < '12')?'yellow-7':(pinsMarContents.kpi3 >= '12' && pinsMarContents.kpi3 < '14.4')?'green':(pinsMarContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsMarContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsAprContents.kpi1 == null)?'grey-2':(pinsAprContents.kpi1 >= '0' && pinsAprContents.kpi1 <= '0.6')?'red':(pinsAprContents.kpi1 > '0.6' && pinsAprContents.kpi1 <= '0.8')?'orange':(pinsAprContents.kpi1 > '0.8' && pinsAprContents.kpi1 < '1')?'yellow-7':(pinsAprContents.kpi1 >= '1' && pinsAprContents.kpi1 < '1.2')?'green':(pinsAprContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsAprContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsAprContents.kpi2 == null)?'grey-2':(pinsAprContents.kpi2 >= '0' && pinsAprContents.kpi2 <= '10.8')?'red':(pinsAprContents.kpi2 > '10.8' && pinsAprContents.kpi2 <= '14.4')?'orange':(pinsAprContents.kpi2 > '14.4' && pinsAprContents.kpi2 < '18')?'yellow-7':(pinsAprContents.kpi2 >= '18' && pinsAprContents.kpi2 < '21.6')?'green':(pinsAprContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsAprContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsAprContents.kpi3 == null)?'grey-2':(pinsAprContents.kpi3 >= '0' && pinsAprContents.kpi3 <= '7.2')?'red':(pinsAprContents.kpi3 > '7.2' && pinsAprContents.kpi3 <= '9.6')?'orange':(pinsAprContents.kpi3 > '9.6' && pinsAprContents.kpi3 < '12')?'yellow-7':(pinsAprContents.kpi3 >= '12' && pinsAprContents.kpi3 < '14.4')?'green':(pinsAprContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsAprContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsMayContents.kpi1 == null)?'grey-2':(pinsMayContents.kpi1 >= '0' && pinsMayContents.kpi1 <= '0.6')?'red':(pinsMayContents.kpi1 > '0.6' && pinsMayContents.kpi1 <= '0.8')?'orange':(pinsMayContents.kpi1 > '0.8' && pinsMayContents.kpi1 < '1')?'yellow-7':(pinsMayContents.kpi1 >= '1' && pinsMayContents.kpi1 < '1.2')?'green':(pinsMayContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsMayContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsMayContents.kpi2 == null)?'grey-2':(pinsMayContents.kpi2 >= '0' && pinsMayContents.kpi2 <= '10.8')?'red':(pinsMayContents.kpi2 > '10.8' && pinsMayContents.kpi2 <= '14.4')?'orange':(pinsMayContents.kpi2 > '14.4' && pinsMayContents.kpi2 < '18')?'yellow-7':(pinsMayContents.kpi2 >= '18' && pinsMayContents.kpi2 < '21.6')?'green':(pinsMayContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsMayContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsMayContents.kpi3 == null)?'grey-2':(pinsMayContents.kpi3 >= '0' && pinsMayContents.kpi3 <= '7.2')?'red':(pinsMayContents.kpi3 > '7.2' && pinsMayContents.kpi3 <= '9.6')?'orange':(pinsMayContents.kpi3 > '9.6' && pinsMayContents.kpi3 < '12')?'yellow-7':(pinsMayContents.kpi3 >= '12' && pinsMayContents.kpi3 < '14.4')?'green':(pinsMayContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsMayContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsJunContents.kpi1 == null)?'grey-2':(pinsJunContents.kpi1 >= '0' && pinsJunContents.kpi1 <= '0.6')?'red':(pinsJunContents.kpi1 > '0.6' && pinsJunContents.kpi1 <= '0.8')?'orange':(pinsJunContents.kpi1 > '0.8' && pinsJunContents.kpi1 < '1')?'yellow-7':(pinsJunContents.kpi1 >= '1' && pinsJunContents.kpi1 < '1.2')?'green':(pinsJunContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsJunContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJunContents.kpi2 == null)?'grey-2':(pinsJunContents.kpi2 >= '0' && pinsJunContents.kpi2 <= '10.8')?'red':(pinsJunContents.kpi2 > '10.8' && pinsJunContents.kpi2 <= '14.4')?'orange':(pinsJunContents.kpi2 > '14.4' && pinsJunContents.kpi2 < '18')?'yellow-7':(pinsJunContents.kpi2 >= '18' && pinsJunContents.kpi2 < '21.6')?'green':(pinsJunContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsJunContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJunContents.kpi3 == null)?'grey-2':(pinsJunContents.kpi3 >= '0' && pinsJunContents.kpi3 <= '7.2')?'red':(pinsJunContents.kpi3 > '7.2' && pinsJunContents.kpi3 <= '9.6')?'orange':(pinsJunContents.kpi3 > '9.6' && pinsJunContents.kpi3 < '12')?'yellow-7':(pinsJunContents.kpi3 >= '12' && pinsJunContents.kpi3 < '14.4')?'green':(pinsJunContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsJunContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsJulContents.kpi1 == null)?'grey-2':(pinsJulContents.kpi1 >= '0' && pinsJulContents.kpi1 <= '0.6')?'red':(pinsJulContents.kpi1 > '0.6' && pinsJulContents.kpi1 <= '0.8')?'orange':(pinsJulContents.kpi1 > '0.8' && pinsJulContents.kpi1 < '1')?'yellow-7':(pinsJulContents.kpi1 >= '1' && pinsJulContents.kpi1 < '1.2')?'green':(pinsJulContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsJulContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJulContents.kpi2 == null)?'grey-2':(pinsJulContents.kpi2 >= '0' && pinsJulContents.kpi2 <= '10.8')?'red':(pinsJulContents.kpi2 > '10.8' && pinsJulContents.kpi2 <= '14.4')?'orange':(pinsJulContents.kpi2 > '14.4' && pinsJulContents.kpi2 < '18')?'yellow-7':(pinsJulContents.kpi2 >= '18' && pinsJulContents.kpi2 < '21.6')?'green':(pinsJulContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsJulContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJulContents.kpi3 == null)?'grey-2':(pinsJulContents.kpi3 >= '0' && pinsJulContents.kpi3 <= '7.2')?'red':(pinsJulContents.kpi3 > '7.2' && pinsJulContents.kpi3 <= '9.6')?'orange':(pinsJulContents.kpi3 > '9.6' && pinsJulContents.kpi3 < '12')?'yellow-7':(pinsJulContents.kpi3 >= '12' && pinsJulContents.kpi3 < '14.4')?'green':(pinsJulContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsJulContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsAugContents.kpi1 == null)?'grey-2':(pinsAugContents.kpi1 >= '0' && pinsAugContents.kpi1 <= '0.6')?'red':(pinsAugContents.kpi1 > '0.6' && pinsAugContents.kpi1 <= '0.8')?'orange':(pinsAugContents.kpi1 > '0.8' && pinsAugContents.kpi1 < '1')?'yellow-7':(pinsAugContents.kpi1 >= '1' && pinsAugContents.kpi1 < '1.2')?'green':(pinsAugContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsAugContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsAugContents.kpi2 == null)?'grey-2':(pinsAugContents.kpi2 >= '0' && pinsAugContents.kpi2 <= '10.8')?'red':(pinsAugContents.kpi2 > '10.8' && pinsAugContents.kpi2 <= '14.4')?'orange':(pinsAugContents.kpi2 > '14.4' && pinsAugContents.kpi2 < '18')?'yellow-7':(pinsAugContents.kpi2 >= '18' && pinsAugContents.kpi2 < '21.6')?'green':(pinsAugContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsAugContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsAugContents.kpi3 == null)?'grey-2':(pinsAugContents.kpi3 >= '0' && pinsAugContents.kpi3 <= '7.2')?'red':(pinsAugContents.kpi3 > '7.2' && pinsAugContents.kpi3 <= '9.6')?'orange':(pinsAugContents.kpi3 > '9.6' && pinsAugContents.kpi3 < '12')?'yellow-7':(pinsAugContents.kpi3 >= '12' && pinsAugContents.kpi3 < '14.4')?'green':(pinsAugContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsAugContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsSepContents.kpi1 == null)?'grey-2':(pinsSepContents.kpi1 >= '0' && pinsSepContents.kpi1 <= '0.6')?'red':(pinsSepContents.kpi1 > '0.6' && pinsSepContents.kpi1 <= '0.8')?'orange':(pinsSepContents.kpi1 > '0.8' && pinsSepContents.kpi1 < '1')?'yellow-7':(pinsSepContents.kpi1 >= '1' && pinsSepContents.kpi1 < '1.2')?'green':(pinsSepContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsSepContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsSepContents.kpi2 == null)?'grey-2':(pinsSepContents.kpi2 >= '0' && pinsSepContents.kpi2 <= '10.8')?'red':(pinsSepContents.kpi2 > '10.8' && pinsSepContents.kpi2 <= '14.4')?'orange':(pinsSepContents.kpi2 > '14.4' && pinsSepContents.kpi2 < '18')?'yellow-7':(pinsSepContents.kpi2 >= '18' && pinsSepContents.kpi2 < '21.6')?'green':(pinsSepContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsSepContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsSepContents.kpi3 == null)?'grey-2':(pinsSepContents.kpi3 >= '0' && pinsSepContents.kpi3 <= '7.2')?'red':(pinsSepContents.kpi3 > '7.2' && pinsSepContents.kpi3 <= '9.6')?'orange':(pinsSepContents.kpi3 > '9.6' && pinsSepContents.kpi3 < '12')?'yellow-7':(pinsSepContents.kpi3 >= '12' && pinsSepContents.kpi3 < '14.4')?'green':(pinsSepContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsSepContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsOctContents.kpi1 == null)?'grey-2':(pinsOctContents.kpi1 >= '0' && pinsOctContents.kpi1 <= '0.6')?'red':(pinsOctContents.kpi1 > '0.6' && pinsOctContents.kpi1 <= '0.8')?'orange':(pinsOctContents.kpi1 > '0.8' && pinsOctContents.kpi1 < '1')?'yellow-7':(pinsOctContents.kpi1 >= '1' && pinsOctContents.kpi1 < '1.2')?'green':(pinsOctContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsOctContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsOctContents.kpi2 == null)?'grey-2':(pinsOctContents.kpi2 >= '0' && pinsOctContents.kpi2 <= '10.8')?'red':(pinsOctContents.kpi2 > '10.8' && pinsOctContents.kpi2 <= '14.4')?'orange':(pinsOctContents.kpi2 > '14.4' && pinsOctContents.kpi2 < '18')?'yellow-7':(pinsOctContents.kpi2 >= '18' && pinsOctContents.kpi2 < '21.6')?'green':(pinsOctContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsOctContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsOctContents.kpi3 == null)?'grey-2':(pinsOctContents.kpi3 >= '0' && pinsOctContents.kpi3 <= '7.2')?'red':(pinsOctContents.kpi3 > '7.2' && pinsOctContents.kpi3 <= '9.6')?'orange':(pinsOctContents.kpi3 > '9.6' && pinsOctContents.kpi3 < '12')?'yellow-7':(pinsOctContents.kpi3 >= '12' && pinsOctContents.kpi3 < '14.4')?'green':(pinsOctContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsOctContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsNovContents.kpi1 == null)?'grey-2':(pinsNovContents.kpi1 >= '0' && pinsNovContents.kpi1 <= '0.6')?'red':(pinsNovContents.kpi1 > '0.6' && pinsNovContents.kpi1 <= '0.8')?'orange':(pinsNovContents.kpi1 > '0.8' && pinsNovContents.kpi1 < '1')?'yellow-7':(pinsNovContents.kpi1 >= '1' && pinsNovContents.kpi1 < '1.2')?'green':(pinsNovContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsNovContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsNovContents.kpi2 == null)?'grey-2':(pinsNovContents.kpi2 >= '0' && pinsNovContents.kpi2 <= '10.8')?'red':(pinsNovContents.kpi2 > '10.8' && pinsNovContents.kpi2 <= '14.4')?'orange':(pinsNovContents.kpi2 > '14.4' && pinsNovContents.kpi2 < '18')?'yellow-7':(pinsNovContents.kpi2 >= '18' && pinsNovContents.kpi2 < '21.6')?'green':(pinsNovContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsNovContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsNovContents.kpi3 == null)?'grey-2':(pinsNovContents.kpi3 >= '0' && pinsNovContents.kpi3 <= '7.2')?'red':(pinsNovContents.kpi3 > '7.2' && pinsNovContents.kpi3 <= '9.6')?'orange':(pinsNovContents.kpi3 > '9.6' && pinsNovContents.kpi3 < '12')?'yellow-7':(pinsNovContents.kpi3 >= '12' && pinsNovContents.kpi3 < '14.4')?'green':(pinsNovContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsNovContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsDecContents.kpi1 == null)?'grey-2':(pinsDecContents.kpi1 >= '0' && pinsDecContents.kpi1 <= '0.6')?'red':(pinsDecContents.kpi1 > '0.6' && pinsDecContents.kpi1 <= '0.8')?'orange':(pinsDecContents.kpi1 > '0.8' && pinsDecContents.kpi1 < '1')?'yellow-7':(pinsDecContents.kpi1 >= '1' && pinsDecContents.kpi1 < '1.2')?'green':(pinsDecContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsDecContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsDecContents.kpi2 == null)?'grey-2':(pinsDecContents.kpi2 >= '0' && pinsDecContents.kpi2 <= '10.8')?'red':(pinsDecContents.kpi2 > '10.8' && pinsDecContents.kpi2 <= '14.4')?'orange':(pinsDecContents.kpi2 > '14.4' && pinsDecContents.kpi2 < '18')?'yellow-7':(pinsDecContents.kpi2 >= '18' && pinsDecContents.kpi2 < '21.6')?'green':(pinsDecContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsDecContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsDecContents.kpi3 == null)?'grey-2':(pinsDecContents.kpi3 >= '0' && pinsDecContents.kpi3 <= '7.2')?'red':(pinsDecContents.kpi3 > '7.2' && pinsDecContents.kpi3 <= '9.6')?'orange':(pinsDecContents.kpi3 > '9.6' && pinsDecContents.kpi3 < '12')?'yellow-7':(pinsDecContents.kpi3 >= '12' && pinsDecContents.kpi3 < '14.4')?'green':(pinsDecContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsDecContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                                <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of community and social service providers in the networks</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsJanContents.kpi1 == null)?'grey-2':(pinsJanContents.kpi1 >= '0' && pinsJanContents.kpi1 <= '0.6')?'red':(pinsJanContents.kpi1 > '0.6' && pinsJanContents.kpi1 <= '0.8')?'orange':(pinsJanContents.kpi1 > '0.8' && pinsJanContents.kpi1 < '1')?'yellow-7':(pinsJanContents.kpi1 >= '1' && pinsJanContents.kpi1 < '1.2')?'green':(pinsJanContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsJanContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJanContents.kpi2 == null)?'grey-2':(pinsJanContents.kpi2 >= '0' && pinsJanContents.kpi2 <= '10.8')?'red':(pinsJanContents.kpi2 > '10.8' && pinsJanContents.kpi2 <= '14.4')?'orange':(pinsJanContents.kpi2 > '14.4' && pinsJanContents.kpi2 < '18')?'yellow-7':(pinsJanContents.kpi2 >= '18' && pinsJanContents.kpi2 < '21.6')?'green':(pinsJanContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsJanContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJanContents.kpi3 == null)?'grey-2':(pinsJanContents.kpi3 >= '0' && pinsJanContents.kpi3 <= '7.2')?'red':(pinsJanContents.kpi3 > '7.2' && pinsJanContents.kpi3 <= '9.6')?'orange':(pinsJanContents.kpi3 > '9.6' && pinsJanContents.kpi3 < '12')?'yellow-7':(pinsJanContents.kpi3 >= '12' && pinsJanContents.kpi3 < '14.4')?'green':(pinsJanContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsJanContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsFebContents.kpi1 == null)?'grey-2':(pinsFebContents.kpi1 >= '0' && pinsFebContents.kpi1 <= '0.6')?'red':(pinsFebContents.kpi1 > '0.6' && pinsFebContents.kpi1 <= '0.8')?'orange':(pinsFebContents.kpi1 > '0.8' && pinsFebContents.kpi1 < '1')?'yellow-7':(pinsFebContents.kpi1 >= '1' && pinsFebContents.kpi1 < '1.2')?'green':(pinsFebContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsFebContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsFebContents.kpi2 == null)?'grey-2':(pinsFebContents.kpi2 >= '0' && pinsFebContents.kpi2 <= '10.8')?'red':(pinsFebContents.kpi2 > '10.8' && pinsFebContents.kpi2 <= '14.4')?'orange':(pinsFebContents.kpi2 > '14.4' && pinsFebContents.kpi2 < '18')?'yellow-7':(pinsFebContents.kpi2 >= '18' && pinsFebContents.kpi2 < '21.6')?'green':(pinsFebContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsFebContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsFebContents.kpi3 == null)?'grey-2':(pinsFebContents.kpi3 >= '0' && pinsFebContents.kpi3 <= '7.2')?'red':(pinsFebContents.kpi3 > '7.2' && pinsFebContents.kpi3 <= '9.6')?'orange':(pinsFebContents.kpi3 > '9.6' && pinsFebContents.kpi3 < '12')?'yellow-7':(pinsFebContents.kpi3 >= '12' && pinsFebContents.kpi3 < '14.4')?'green':(pinsFebContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsFebContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsMarContents.kpi1 == null)?'grey-2':(pinsMarContents.kpi1 >= '0' && pinsMarContents.kpi1 <= '0.6')?'red':(pinsMarContents.kpi1 > '0.6' && pinsMarContents.kpi1 <= '0.8')?'orange':(pinsMarContents.kpi1 > '0.8' && pinsMarContents.kpi1 < '1')?'yellow-7':(pinsMarContents.kpi1 >= '1' && pinsMarContents.kpi1 < '1.2')?'green':(pinsMarContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsMarContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsMarContents.kpi2 == null)?'grey-2':(pinsMarContents.kpi2 >= '0' && pinsMarContents.kpi2 <= '10.8')?'red':(pinsMarContents.kpi2 > '10.8' && pinsMarContents.kpi2 <= '14.4')?'orange':(pinsMarContents.kpi2 > '14.4' && pinsMarContents.kpi2 < '18')?'yellow-7':(pinsMarContents.kpi2 >= '18' && pinsMarContents.kpi2 < '21.6')?'green':(pinsMarContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsMarContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsMarContents.kpi3 == null)?'grey-2':(pinsMarContents.kpi3 >= '0' && pinsMarContents.kpi3 <= '7.2')?'red':(pinsMarContents.kpi3 > '7.2' && pinsMarContents.kpi3 <= '9.6')?'orange':(pinsMarContents.kpi3 > '9.6' && pinsMarContents.kpi3 < '12')?'yellow-7':(pinsMarContents.kpi3 >= '12' && pinsMarContents.kpi3 < '14.4')?'green':(pinsMarContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsMarContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsAprContents.kpi1 == null)?'grey-2':(pinsAprContents.kpi1 >= '0' && pinsAprContents.kpi1 <= '0.6')?'red':(pinsAprContents.kpi1 > '0.6' && pinsAprContents.kpi1 <= '0.8')?'orange':(pinsAprContents.kpi1 > '0.8' && pinsAprContents.kpi1 < '1')?'yellow-7':(pinsAprContents.kpi1 >= '1' && pinsAprContents.kpi1 < '1.2')?'green':(pinsAprContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsAprContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsAprContents.kpi2 == null)?'grey-2':(pinsAprContents.kpi2 >= '0' && pinsAprContents.kpi2 <= '10.8')?'red':(pinsAprContents.kpi2 > '10.8' && pinsAprContents.kpi2 <= '14.4')?'orange':(pinsAprContents.kpi2 > '14.4' && pinsAprContents.kpi2 < '18')?'yellow-7':(pinsAprContents.kpi2 >= '18' && pinsAprContents.kpi2 < '21.6')?'green':(pinsAprContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsAprContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsAprContents.kpi3 == null)?'grey-2':(pinsAprContents.kpi3 >= '0' && pinsAprContents.kpi3 <= '7.2')?'red':(pinsAprContents.kpi3 > '7.2' && pinsAprContents.kpi3 <= '9.6')?'orange':(pinsAprContents.kpi3 > '9.6' && pinsAprContents.kpi3 < '12')?'yellow-7':(pinsAprContents.kpi3 >= '12' && pinsAprContents.kpi3 < '14.4')?'green':(pinsAprContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsAprContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsMayContents.kpi1 == null)?'grey-2':(pinsMayContents.kpi1 >= '0' && pinsMayContents.kpi1 <= '0.6')?'red':(pinsMayContents.kpi1 > '0.6' && pinsMayContents.kpi1 <= '0.8')?'orange':(pinsMayContents.kpi1 > '0.8' && pinsMayContents.kpi1 < '1')?'yellow-7':(pinsMayContents.kpi1 >= '1' && pinsMayContents.kpi1 < '1.2')?'green':(pinsMayContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsMayContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsMayContents.kpi2 == null)?'grey-2':(pinsMayContents.kpi2 >= '0' && pinsMayContents.kpi2 <= '10.8')?'red':(pinsMayContents.kpi2 > '10.8' && pinsMayContents.kpi2 <= '14.4')?'orange':(pinsMayContents.kpi2 > '14.4' && pinsMayContents.kpi2 < '18')?'yellow-7':(pinsMayContents.kpi2 >= '18' && pinsMayContents.kpi2 < '21.6')?'green':(pinsMayContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsMayContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsMayContents.kpi3 == null)?'grey-2':(pinsMayContents.kpi3 >= '0' && pinsMayContents.kpi3 <= '7.2')?'red':(pinsMayContents.kpi3 > '7.2' && pinsMayContents.kpi3 <= '9.6')?'orange':(pinsMayContents.kpi3 > '9.6' && pinsMayContents.kpi3 < '12')?'yellow-7':(pinsMayContents.kpi3 >= '12' && pinsMayContents.kpi3 < '14.4')?'green':(pinsMayContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsMayContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsJunContents.kpi1 == null)?'grey-2':(pinsJunContents.kpi1 >= '0' && pinsJunContents.kpi1 <= '0.6')?'red':(pinsJunContents.kpi1 > '0.6' && pinsJunContents.kpi1 <= '0.8')?'orange':(pinsJunContents.kpi1 > '0.8' && pinsJunContents.kpi1 < '1')?'yellow-7':(pinsJunContents.kpi1 >= '1' && pinsJunContents.kpi1 < '1.2')?'green':(pinsJunContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsJunContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJunContents.kpi2 == null)?'grey-2':(pinsJunContents.kpi2 >= '0' && pinsJunContents.kpi2 <= '10.8')?'red':(pinsJunContents.kpi2 > '10.8' && pinsJunContents.kpi2 <= '14.4')?'orange':(pinsJunContents.kpi2 > '14.4' && pinsJunContents.kpi2 < '18')?'yellow-7':(pinsJunContents.kpi2 >= '18' && pinsJunContents.kpi2 < '21.6')?'green':(pinsJunContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsJunContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJunContents.kpi3 == null)?'grey-2':(pinsJunContents.kpi3 >= '0' && pinsJunContents.kpi3 <= '7.2')?'red':(pinsJunContents.kpi3 > '7.2' && pinsJunContents.kpi3 <= '9.6')?'orange':(pinsJunContents.kpi3 > '9.6' && pinsJunContents.kpi3 < '12')?'yellow-7':(pinsJunContents.kpi3 >= '12' && pinsJunContents.kpi3 < '14.4')?'green':(pinsJunContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsJunContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsJulContents.kpi1 == null)?'grey-2':(pinsJulContents.kpi1 >= '0' && pinsJulContents.kpi1 <= '0.6')?'red':(pinsJulContents.kpi1 > '0.6' && pinsJulContents.kpi1 <= '0.8')?'orange':(pinsJulContents.kpi1 > '0.8' && pinsJulContents.kpi1 < '1')?'yellow-7':(pinsJulContents.kpi1 >= '1' && pinsJulContents.kpi1 < '1.2')?'green':(pinsJulContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsJulContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJulContents.kpi2 == null)?'grey-2':(pinsJulContents.kpi2 >= '0' && pinsJulContents.kpi2 <= '10.8')?'red':(pinsJulContents.kpi2 > '10.8' && pinsJulContents.kpi2 <= '14.4')?'orange':(pinsJulContents.kpi2 > '14.4' && pinsJulContents.kpi2 < '18')?'yellow-7':(pinsJulContents.kpi2 >= '18' && pinsJulContents.kpi2 < '21.6')?'green':(pinsJulContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsJulContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsJulContents.kpi3 == null)?'grey-2':(pinsJulContents.kpi3 >= '0' && pinsJulContents.kpi3 <= '7.2')?'red':(pinsJulContents.kpi3 > '7.2' && pinsJulContents.kpi3 <= '9.6')?'orange':(pinsJulContents.kpi3 > '9.6' && pinsJulContents.kpi3 < '12')?'yellow-7':(pinsJulContents.kpi3 >= '12' && pinsJulContents.kpi3 < '14.4')?'green':(pinsJulContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsJulContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsAugContents.kpi1 == null)?'grey-2':(pinsAugContents.kpi1 >= '0' && pinsAugContents.kpi1 <= '0.6')?'red':(pinsAugContents.kpi1 > '0.6' && pinsAugContents.kpi1 <= '0.8')?'orange':(pinsAugContents.kpi1 > '0.8' && pinsAugContents.kpi1 < '1')?'yellow-7':(pinsAugContents.kpi1 >= '1' && pinsAugContents.kpi1 < '1.2')?'green':(pinsAugContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsAugContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsAugContents.kpi2 == null)?'grey-2':(pinsAugContents.kpi2 >= '0' && pinsAugContents.kpi2 <= '10.8')?'red':(pinsAugContents.kpi2 > '10.8' && pinsAugContents.kpi2 <= '14.4')?'orange':(pinsAugContents.kpi2 > '14.4' && pinsAugContents.kpi2 < '18')?'yellow-7':(pinsAugContents.kpi2 >= '18' && pinsAugContents.kpi2 < '21.6')?'green':(pinsAugContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsAugContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsAugContents.kpi3 == null)?'grey-2':(pinsAugContents.kpi3 >= '0' && pinsAugContents.kpi3 <= '7.2')?'red':(pinsAugContents.kpi3 > '7.2' && pinsAugContents.kpi3 <= '9.6')?'orange':(pinsAugContents.kpi3 > '9.6' && pinsAugContents.kpi3 < '12')?'yellow-7':(pinsAugContents.kpi3 >= '12' && pinsAugContents.kpi3 < '14.4')?'green':(pinsAugContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsAugContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsSepContents.kpi1 == null)?'grey-2':(pinsSepContents.kpi1 >= '0' && pinsSepContents.kpi1 <= '0.6')?'red':(pinsSepContents.kpi1 > '0.6' && pinsSepContents.kpi1 <= '0.8')?'orange':(pinsSepContents.kpi1 > '0.8' && pinsSepContents.kpi1 < '1')?'yellow-7':(pinsSepContents.kpi1 >= '1' && pinsSepContents.kpi1 < '1.2')?'green':(pinsSepContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsSepContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsSepContents.kpi2 == null)?'grey-2':(pinsSepContents.kpi2 >= '0' && pinsSepContents.kpi2 <= '10.8')?'red':(pinsSepContents.kpi2 > '10.8' && pinsSepContents.kpi2 <= '14.4')?'orange':(pinsSepContents.kpi2 > '14.4' && pinsSepContents.kpi2 < '18')?'yellow-7':(pinsSepContents.kpi2 >= '18' && pinsSepContents.kpi2 < '21.6')?'green':(pinsSepContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsSepContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsSepContents.kpi3 == null)?'grey-2':(pinsSepContents.kpi3 >= '0' && pinsSepContents.kpi3 <= '7.2')?'red':(pinsSepContents.kpi3 > '7.2' && pinsSepContents.kpi3 <= '9.6')?'orange':(pinsSepContents.kpi3 > '9.6' && pinsSepContents.kpi3 < '12')?'yellow-7':(pinsSepContents.kpi3 >= '12' && pinsSepContents.kpi3 < '14.4')?'green':(pinsSepContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsSepContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsOctContents.kpi1 == null)?'grey-2':(pinsOctContents.kpi1 >= '0' && pinsOctContents.kpi1 <= '0.6')?'red':(pinsOctContents.kpi1 > '0.6' && pinsOctContents.kpi1 <= '0.8')?'orange':(pinsOctContents.kpi1 > '0.8' && pinsOctContents.kpi1 < '1')?'yellow-7':(pinsOctContents.kpi1 >= '1' && pinsOctContents.kpi1 < '1.2')?'green':(pinsOctContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsOctContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsOctContents.kpi2 == null)?'grey-2':(pinsOctContents.kpi2 >= '0' && pinsOctContents.kpi2 <= '10.8')?'red':(pinsOctContents.kpi2 > '10.8' && pinsOctContents.kpi2 <= '14.4')?'orange':(pinsOctContents.kpi2 > '14.4' && pinsOctContents.kpi2 < '18')?'yellow-7':(pinsOctContents.kpi2 >= '18' && pinsOctContents.kpi2 < '21.6')?'green':(pinsOctContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsOctContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsOctContents.kpi3 == null)?'grey-2':(pinsOctContents.kpi3 >= '0' && pinsOctContents.kpi3 <= '7.2')?'red':(pinsOctContents.kpi3 > '7.2' && pinsOctContents.kpi3 <= '9.6')?'orange':(pinsOctContents.kpi3 > '9.6' && pinsOctContents.kpi3 < '12')?'yellow-7':(pinsOctContents.kpi3 >= '12' && pinsOctContents.kpi3 < '14.4')?'green':(pinsOctContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsOctContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsNovContents.kpi1 == null)?'grey-2':(pinsNovContents.kpi1 >= '0' && pinsNovContents.kpi1 <= '0.6')?'red':(pinsNovContents.kpi1 > '0.6' && pinsNovContents.kpi1 <= '0.8')?'orange':(pinsNovContents.kpi1 > '0.8' && pinsNovContents.kpi1 < '1')?'yellow-7':(pinsNovContents.kpi1 >= '1' && pinsNovContents.kpi1 < '1.2')?'green':(pinsNovContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsNovContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsNovContents.kpi2 == null)?'grey-2':(pinsNovContents.kpi2 >= '0' && pinsNovContents.kpi2 <= '10.8')?'red':(pinsNovContents.kpi2 > '10.8' && pinsNovContents.kpi2 <= '14.4')?'orange':(pinsNovContents.kpi2 > '14.4' && pinsNovContents.kpi2 < '18')?'yellow-7':(pinsNovContents.kpi2 >= '18' && pinsNovContents.kpi2 < '21.6')?'green':(pinsNovContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsNovContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsNovContents.kpi3 == null)?'grey-2':(pinsNovContents.kpi3 >= '0' && pinsNovContents.kpi3 <= '7.2')?'red':(pinsNovContents.kpi3 > '7.2' && pinsNovContents.kpi3 <= '9.6')?'orange':(pinsNovContents.kpi3 > '9.6' && pinsNovContents.kpi3 < '12')?'yellow-7':(pinsNovContents.kpi3 >= '12' && pinsNovContents.kpi3 < '14.4')?'green':(pinsNovContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsNovContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
                              :color="(pinsDecContents.kpi1 == null)?'grey-2':(pinsDecContents.kpi1 >= '0' && pinsDecContents.kpi1 <= '0.6')?'red':(pinsDecContents.kpi1 > '0.6' && pinsDecContents.kpi1 <= '0.8')?'orange':(pinsDecContents.kpi1 > '0.8' && pinsDecContents.kpi1 < '1')?'yellow-7':(pinsDecContents.kpi1 >= '1' && pinsDecContents.kpi1 < '1.2')?'green':(pinsDecContents.kpi1 >= '1.2'?'blue':'grey-2')"
                            >
                            {{pinsDecContents.kpi1}}
                              <q-tooltip># of network interventions after a traumatic event</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsDecContents.kpi2 == null)?'grey-2':(pinsDecContents.kpi2 >= '0' && pinsDecContents.kpi2 <= '10.8')?'red':(pinsDecContents.kpi2 > '10.8' && pinsDecContents.kpi2 <= '14.4')?'orange':(pinsDecContents.kpi2 > '14.4' && pinsDecContents.kpi2 < '18')?'yellow-7':(pinsDecContents.kpi2 >= '18' && pinsDecContents.kpi2 < '21.6')?'green':(pinsDecContents.kpi2 >= '21.6'?'blue':'grey-2')"
                            >
                            {{pinsDecContents.kpi2}}
                              <q-tooltip># of community and social service providers in the networks</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(pinsDecContents.kpi3 == null)?'grey-2':(pinsDecContents.kpi3 >= '0' && pinsDecContents.kpi3 <= '7.2')?'red':(pinsDecContents.kpi3 > '7.2' && pinsDecContents.kpi3 <= '9.6')?'orange':(pinsDecContents.kpi3 > '9.6' && pinsDecContents.kpi3 < '12')?'yellow-7':(pinsDecContents.kpi3 >= '12' && pinsDecContents.kpi3 < '14.4')?'green':(pinsDecContents.kpi3 >= '14.4'?'blue':'grey-2')"
                            >
                            {{pinsDecContents.kpi3}}
                              <q-tooltip># of active PINS networks across the city</q-tooltip>
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
              pinsJanContent: {
                
              },
              pinsJanContents : [],
              pinsFebContent: {
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
              pinsFebContents : [],
              pinsMarContent: {
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
              pinsMarContents : [],
              pinsAprContent: {
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
              pinsAprContents : [],
              pinsMayContent: {
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
              pinsMayContents : [],
              pinsJunContent: {
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
              pinsJunContents : [],
              pinsJulContent: {
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
              pinsJulContents : [],
              pinsAugContent: {
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
              pinsAugContents : [],
              pinsSepContent: {
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
              pinsSepContents : [],
              pinsOctContent: {
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
              pinsOctContents : [],
              pinsNovContent: {
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
              pinsNovContents : [],
              pinsDecContent: {
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
              pinsDecContents : []


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
                            {time_period: 'January', expenses: this.pinsJanContents.expenses, revenues: this.pinsJanContents.revenues},
                            {time_period: 'February', expenses: this.pinsFebContents.expenses, revenues: this.pinsFebContents.revenues},
                            {time_period: 'March', expenses: this.pinsMarContents.expenses, revenues: this.pinsMarContents.revenues},
                            {time_period: 'April', expenses: this.pinsAprContents.expenses, revenues: this.pinsAprContents.revenues},
                            {time_period: 'May', expenses: this.pinsMayContents.expenses, revenues: this.pinsMayContents.revenues},
                            {time_period: 'June', expenses: this.pinsJunContents.expenses, revenues: this.pinsJunContents.revenues},
                            {time_period: 'July', expenses: this.pinsJulContents.expenses, revenues: this.pinsJulContents.revenues},
                            {time_period: 'August', expenses: this.pinsAugContents.expenses, revenues: this.pinsAugContents.revenues},
                            {time_period: 'September', expenses: this.pinsSepContents.expenses, revenues: this.pinsSepContents.revenues},
                            {time_period: 'October', expenses: this.pinsOctContents.expenses, revenues: this.pinsOctContents.revenues},
                            {time_period: 'November', expenses: this.pinsNovContents.expenses, revenues: this.pinsNovContents.revenues},
                            {time_period: 'December',expenses: this.pinsDecContents.expenses, revenues: this.pinsDecContents.revenues }
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
                            {months: 'January', kpi1: this.pinsJanContents.kpi1, kpi2: this.pinsJanContents.kpi2, kpi3: this.pinsJanContents.kpi3, uniqueVol: this.pinsJanContents.uniqueVolunteers, volHours: this.pinsJanContents.volunteerHours},
                            {months: 'February', kpi1: this.pinsFebContents.kpi1, kpi2: this.pinsFebContents.kpi2, kpi3: this.pinsFebContents.kpi3, uniqueVol: this.pinsFebContents.uniqueVolunteers, volHours: this.pinsFebContents.volunteerHours},
                            {months: 'March', kpi1: this.pinsMarContents.kpi1, kpi2: this.pinsMarContents.kpi2, kpi3: this.pinsMarContents.kpi3, uniqueVol: this.pinsMarContents.uniqueVolunteers, volHours: this.pinsMarContents.volunteerHours},
                            {months: 'April', kpi1: this.pinsAprContents.kpi1, kpi2: this.pinsAprContents.kpi2, kpi3: this.pinsAprContents.kpi3, uniqueVol: this.pinsAprContents.uniqueVolunteers, volHours: this.pinsAprContents.volunteerHours},
                            {months: 'May', kpi1: this.pinsMayContents.kpi1, kpi2: this.pinsMayContents.kpi2, kpi3: this.pinsMayContents.kpi3, uniqueVol: this.pinsMayContents.uniqueVolunteers, volHours: this.pinsMayContents.volunteerHours},
                            {months: 'June', kpi1: this.pinsJunContents.kpi1, kpi2: this.pinsJunContents.kpi2, kpi3: this.pinsJunContents.kpi3, uniqueVol: this.pinsJunContents.uniqueVolunteers, volHours: this.pinsJunContents.volunteerHours},
                            {months: 'July', kpi1: this.pinsJulContents.kpi1, kpi2: this.pinsJulContents.kpi2, kpi3: this.pinsJulContents.kpi3, uniqueVol: this.pinsJulContents.uniqueVolunteers, volHours: this.pinsJulContents.volunteerHours},
                            {months: 'August', kpi1: this.pinsAugContents.kpi1, kpi2: this.pinsAugContents.kpi2, kpi3: this.pinsAugContents.kpi3, uniqueVol: this.pinsAugContents.uniqueVolunteers, volHours: this.pinsAugContents.volunteerHours},
                            {months: 'September', kpi1: this.pinsSepContents.kpi1, kpi2: this.pinsSepContents.kpi2, kpi3: this.pinsSepContents.kpi3, uniqueVol: this.pinsSepContents.uniqueVolunteers, volHours: this.pinsSepContents.volunteerHours},
                            {months: 'October', kpi1: this.pinsOctContents.kpi1, kpi2: this.pinsOctContents.kpi2, kpi3: this.pinsOctContents.kpi3, uniqueVol: this.pinsOctContents.uniqueVolunteers, volHours: this.pinsOctContents.volunteerHours},
                            {months: 'November', kpi1: this.pinsNovContents.kpi1, kpi2: this.pinsNovContents.kpi2, kpi3: this.pinsNovContents.kpi3, uniqueVol: this.pinsNovContents.uniqueVolunteers, volHours: this.pinsNovContents.volunteerHours},
                            {months: 'December',kpi1: this.pinsDecContents.kpi1, kpi2: this.pinsDecContents.kpi2, kpi3: this.pinsDecContents.kpi3, uniqueVol: this.pinsDecContents.uniqueVolunteers, volHours: this.pinsDecContents.volunteerHours},
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
                            data: [{value: this.pinsJanContents.budgetUsage}],
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
                                {value: this.pinsJanContents.perCategory1, name: this.pinsJanContents.expenseCategory1},
                                {value: this.pinsJanContents.perCategory2, name: this.pinsJanContents.expenseCategory2},
                                {value: this.pinsJanContents.perCategory3, name: this.pinsJanContents.expenseCategory3},
                                {value: this.pinsJanContents.perCategory4, name: this.pinsJanContents.expenseCategory4},
                                {value: this.pinsJanContents.perCategory5, name: this.pinsJanContents.expenseCategory5},
                                {value: this.pinsJanContents.perCategory6, name: this.pinsJanContents.expenseCategory6}
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
                            data: [{value: this.pinsFebContents.budgetUsage}],
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
                                {value: this.pinsFebContents.perCategory1, name: this.pinsFebContents.expenseCategory1},
                                {value: this.pinsFebContents.perCategory2, name: this.pinsFebContents.expenseCategory2},
                                {value: this.pinsFebContents.perCategory3, name: this.pinsFebContents.expenseCategory3},
                                {value: this.pinsFebContents.perCategory4, name: this.pinsFebContents.expenseCategory4},
                                {value: this.pinsFebContents.perCategory5, name: this.pinsFebContents.expenseCategory5},
                                {value: this.pinsFebContents.perCategory6, name: this.pinsFebContents.expenseCategory6}
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
                            data: [{value: this.pinsMarContents.budgetUsage}],
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
                                {value: this.pinsMarContents.perCategory1, name: this.pinsMarContents.expenseCategory1},
                                {value: this.pinsMarContents.perCategory2, name: this.pinsMarContents.expenseCategory2},
                                {value: this.pinsMarContents.perCategory3, name: this.pinsMarContents.expenseCategory3},
                                {value: this.pinsMarContents.perCategory4, name: this.pinsMarContents.expenseCategory4},
                                {value: this.pinsMarContents.perCategory5, name: this.pinsMarContents.expenseCategory5},
                                {value: this.pinsMarContents.perCategory6, name: this.pinsMarContents.expenseCategory6}
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
                            data: [{value: this.pinsAprContents.budgetUsage}],
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
                                {value: this.pinsAprContents.perCategory1, name: this.pinsAprContents.expenseCategory1},
                                {value: this.pinsAprContents.perCategory2, name: this.pinsAprContents.expenseCategory2},
                                {value: this.pinsAprContents.perCategory3, name: this.pinsAprContents.expenseCategory3},
                                {value: this.pinsAprContents.perCategory4, name: this.pinsAprContents.expenseCategory4},
                                {value: this.pinsAprContents.perCategory5, name: this.pinsAprContents.expenseCategory5},
                                {value: this.pinsAprContents.perCategory6, name: this.pinsAprContents.expenseCategory6}  
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
                            data: [{value: this.pinsMayContents.budgetUsage}],
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
                                {value: this.pinsMayContents.perCategory1, name: this.pinsMayContents.expenseCategory1},
                                {value: this.pinsMayContents.perCategory2, name: this.pinsMayContents.expenseCategory2},
                                {value: this.pinsMayContents.perCategory3, name: this.pinsMayContents.expenseCategory3},
                                {value: this.pinsMayContents.perCategory4, name: this.pinsMayContents.expenseCategory4},
                                {value: this.pinsMayContents.perCategory5, name: this.pinsMayContents.expenseCategory5},
                                {value: this.pinsMayContents.perCategory6, name: this.pinsMayContents.expenseCategory6}  
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
                            data: [{value: this.pinsJunContents.budgetUsage}],
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
                                {value: this.pinsJunContents.perCategory1, name: this.pinsJunContents.expenseCategory1},
                                {value: this.pinsJunContents.perCategory2, name: this.pinsJunContents.expenseCategory2},
                                {value: this.pinsJunContents.perCategory3, name: this.pinsJunContents.expenseCategory3},
                                {value: this.pinsJunContents.perCategory4, name: this.pinsJunContents.expenseCategory4},
                                {value: this.pinsJunContents.perCategory5, name: this.pinsJunContents.expenseCategory5},
                                {value: this.pinsJunContents.perCategory6, name: this.pinsJunContents.expenseCategory6}  
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
                            data: [{value: this.pinsJulContents.budgetUsage}],
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
                                {value: this.pinsJulContents.perCategory1, name: this.pinsJulContents.expenseCategory1},
                                {value: this.pinsJulContents.perCategory2, name: this.pinsJulContents.expenseCategory2},
                                {value: this.pinsJulContents.perCategory3, name: this.pinsJulContents.expenseCategory3},
                                {value: this.pinsJulContents.perCategory4, name: this.pinsJulContents.expenseCategory4},
                                {value: this.pinsJulContents.perCategory5, name: this.pinsJulContents.expenseCategory5},
                                {value: this.pinsJulContents.perCategory6, name: this.pinsJulContents.expenseCategory6}  
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
                            data: [{value: this.pinsAugContents.budgetUsage}],
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
                                {value: this.pinsAugContents.perCategory1, name: this.pinsAugContents.expenseCategory1},
                                {value: this.pinsAugContents.perCategory2, name: this.pinsAugContents.expenseCategory2},
                                {value: this.pinsAugContents.perCategory3, name: this.pinsAugContents.expenseCategory3},
                                {value: this.pinsAugContents.perCategory4, name: this.pinsAugContents.expenseCategory4},
                                {value: this.pinsAugContents.perCategory5, name: this.pinsAugContents.expenseCategory5},
                                {value: this.pinsAugContents.perCategory6, name: this.pinsAugContents.expenseCategory6}  
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
                            data: [{value: this.pinsSepContents.budgetUsage}],
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
                                {value: this.pinsSepContents.perCategory1, name: this.pinsSepContents.expenseCategory1},
                                {value: this.pinsSepContents.perCategory2, name: this.pinsSepContents.expenseCategory2},
                                {value: this.pinsSepContents.perCategory3, name: this.pinsSepContents.expenseCategory3},
                                {value: this.pinsSepContents.perCategory4, name: this.pinsSepContents.expenseCategory4},
                                {value: this.pinsSepContents.perCategory5, name: this.pinsSepContents.expenseCategory5},
                                {value: this.pinsSepContents.perCategory6, name: this.pinsSepContents.expenseCategory6}  
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
                            data: [{value: this.pinsOctContents.budgetUsage}],
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
                                {value: this.pinsOctContents.perCategory1, name: this.pinsOctContents.expenseCategory1},
                                {value: this.pinsOctContents.perCategory2, name: this.pinsOctContents.expenseCategory2},
                                {value: this.pinsOctContents.perCategory3, name: this.pinsOctContents.expenseCategory3},
                                {value: this.pinsOctContents.perCategory4, name: this.pinsOctContents.expenseCategory4},
                                {value: this.pinsOctContents.perCategory5, name: this.pinsOctContents.expenseCategory5},
                                {value: this.pinsOctContents.perCategory6, name: this.pinsOctContents.expenseCategory6}  
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
                            data: [{value: this.pinsNovContents.budgetUsage}],
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
                                {value: this.pinsNovContents.perCategory1, name: this.pinsNovContents.expenseCategory1},
                                {value: this.pinsNovContents.perCategory2, name: this.pinsNovContents.expenseCategory2},
                                {value: this.pinsNovContents.perCategory3, name: this.pinsNovContents.expenseCategory3},
                                {value: this.pinsNovContents.perCategory4, name: this.pinsNovContents.expenseCategory4},
                                {value: this.pinsNovContents.perCategory5, name: this.pinsNovContents.expenseCategory5},
                                {value: this.pinsNovContents.perCategory6, name: this.pinsNovContents.expenseCategory6}  
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
                            data: [{value: this.pinsDecContents.budgetUsage}],
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
                                {value: this.pinsDecContents.perCategory1, name: this.pinsDecContents.expenseCategory1},
                                {value: this.pinsDecContents.perCategory2, name: this.pinsDecContents.expenseCategory2},
                                {value: this.pinsDecContents.perCategory3, name: this.pinsDecContents.expenseCategory3},
                                {value: this.pinsDecContents.perCategory4, name: this.pinsDecContents.expenseCategory4},
                                {value: this.pinsDecContents.perCategory5, name: this.pinsDecContents.expenseCategory5},
                                {value: this.pinsDecContents.perCategory6, name: this.pinsDecContents.expenseCategory6}
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
            var docpinsJanRef = db.collection("pins").doc("january");

            docpinsJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.pinsJanContents = doc.data();
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
            var docpinsFebRef = db.collection("pins").doc("february");

            docpinsFebRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.pinsFebContents = doc.data();
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
            var docpinsMarRef = db.collection("pins").doc("march");

            docpinsMarRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.pinsMarContents = doc.data();
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
            var docpinsAprRef = db.collection("pins").doc("april1");

            docpinsAprRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.pinsAprContents = doc.data();
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
            var docpinsMayRef = db.collection("pins").doc("may");

            docpinsMayRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.pinsMayContents = doc.data();
                    this.totalExpenseMay();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    JUNE
            var docpinsJunRef = db.collection("pins").doc("june");

            docpinsJunRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.pinsJunContents = doc.data();
                    this.totalExpenseJun();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    JULY
            var docpinsJulRef = db.collection("pins").doc("july");

            docpinsJulRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.pinsJulContents = doc.data();
                    this.totalExpenseJul();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    AUGUST
            var docpinsAugRef = db.collection("pins").doc("august");

            docpinsAugRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.pinsAugContents = doc.data();
                    this.totalExpenseAug();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    SEPTEMBER
            var docpinsSepRef = db.collection("pins").doc("september");

            docpinsSepRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.pinsSepContents = doc.data();
                    this.totalExpenseSep();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    OCTOBER
            var docpinsOctRef = db.collection("pins").doc("october");

            docpinsOctRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.pinsOctContents = doc.data();
                    this.totalExpenseOct();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    NOVEMBER
            var docpinsNovRef = db.collection("pins").doc("november");

            docpinsNovRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.pinsNovContents = doc.data();
                    this.totalExpenseNov();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    DECEMBER
            var docpinsDecRef = db.collection("pins").doc("december");

            docpinsDecRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.pinsDecContents = doc.data();
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
              return this.pinsJanContents.expenses = getRealValue(this.pinsJanContents.perCategory1) + getRealValue(this.pinsJanContents.perCategory2) + getRealValue(this.pinsJanContents.perCategory3) + getRealValue(this.pinsJanContents.perCategory4) + getRealValue(this.pinsJanContents.perCategory5) + getRealValue(this.pinsJanContents.perCategory6)
              
            },
            cumulativeBudgetUsageJan(){
              const getRealValue = (val) => +val || val;
              return this.pinsJanContents.budgetUsage = ((getRealValue(this.pinsJanContents.expenses) / getRealValue(this.pinsJanContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseFeb(){
              const getRealValue = (val) => +val || val;
              return this.pinsFebContents.expenses = getRealValue(this.pinsFebContents.perCategory1) + getRealValue(this.pinsFebContents.perCategory2) + getRealValue(this.pinsFebContents.perCategory3) + getRealValue(this.pinsFebContents.perCategory4) + getRealValue(this.pinsFebContents.perCategory5) + getRealValue(this.pinsFebContents.perCategory6)
            },
            cumulativeBudgetUsageFeb(){
              const getRealValue = (val) => +val || val;
              return this.pinsFebContents.budgetUsage = (((getRealValue(this.pinsFebContents.expenses) + getRealValue(this.pinsJanContents.expenses)) / getRealValue(this.pinsFebContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseMar(){
              const getRealValue = (val) => +val || val;
              return this.pinsMarContents.expenses = getRealValue(this.pinsMarContents.perCategory1) + getRealValue(this.pinsMarContents.perCategory2) + getRealValue(this.pinsMarContents.perCategory3) + getRealValue(this.pinsMarContents.perCategory4) + getRealValue(this.pinsMarContents.perCategory5) + getRealValue(this.pinsMarContents.perCategory6)
            },
            cumulativeBudgetUsageMar(){
              const getRealValue = (val) => +val || val;
              return this.pinsMarContents.budgetUsage = (((getRealValue(this.pinsMarContents.expenses) + getRealValue(this.pinsFebContents.expenses) + getRealValue(this.pinsJanContents.expenses)) / getRealValue(this.pinsMarContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseApr(){
              const getRealValue = (val) => +val || val;
              return this.pinsAprContents.expenses = getRealValue(this.pinsAprContents.perCategory1) + getRealValue(this.pinsAprContents.perCategory2) + getRealValue(this.pinsAprContents.perCategory3) + getRealValue(this.pinsAprContents.perCategory4) + getRealValue(this.pinsAprContents.perCategory5) + getRealValue(this.pinsAprContents.perCategory6)
            },
            cumulativeBudgetUsageApr(){
              const getRealValue = (val) => +val || val;
              return this.pinsAprContents.budgetUsage = (((getRealValue(this.pinsAprContents.expenses) + getRealValue(this.pinsMarContents.expenses) + getRealValue(this.pinsFebContents.expenses) + getRealValue(this.pinsJanContents.expenses)) / getRealValue(this.pinsAprContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseMay(){
              const getRealValue = (val) => +val || val;
              return this.pinsMayContents.expenses = getRealValue(this.pinsMayContents.perCategory1) + getRealValue(this.pinsMayContents.perCategory2) + getRealValue(this.pinsMayContents.perCategory3) + getRealValue(this.pinsMayContents.perCategory4) + getRealValue(this.pinsMayContents.perCategory5) + getRealValue(this.pinsMayContents.perCategory6)
            },
            cumulativeBudgetUsageMay(){
              const getRealValue = (val) => +val || val;
              return this.pinsMayContents.budgetUsage = (((getRealValue(this.pinsMayContents.expenses) + getRealValue(this.pinsAprContents.expenses) + getRealValue(this.pinsMarContents.expenses) + getRealValue(this.pinsFebContents.expenses) + getRealValue(this.pinsJanContents.expenses)) / getRealValue(this.pinsMayContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseJun(){
              const getRealValue = (val) => +val || val;
              return this.pinsJunContents.expenses = getRealValue(this.pinsJunContents.perCategory1) + getRealValue(this.pinsJunContents.perCategory2) + getRealValue(this.pinsJunContents.perCategory3) + getRealValue(this.pinsJunContents.perCategory4) + getRealValue(this.pinsJunContents.perCategory5) + getRealValue(this.pinsJunContents.perCategory6)
            },
            cumulativeBudgetUsageJun(){
              const getRealValue = (val) => +val || val;
              return this.pinsJunContents.budgetUsage = (((getRealValue(this.pinsJunContents.expenses) + getRealValue(this.pinsMayContents.expenses) + getRealValue(this.pinsAprContents.expenses) + getRealValue(this.pinsMarContents.expenses) + getRealValue(this.pinsFebContents.expenses) + getRealValue(this.pinsJanContents.expenses)) / getRealValue(this.pinsJunContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseJul(){
              const getRealValue = (val) => +val || val;
              return this.pinsJulContents.expenses = getRealValue(this.pinsJulContents.perCategory1) + getRealValue(this.pinsJulContents.perCategory2) + getRealValue(this.pinsJulContents.perCategory3) + getRealValue(this.pinsJulContents.perCategory4) + getRealValue(this.pinsJulContents.perCategory5) + getRealValue(this.pinsJulContents.perCategory6)
            },
            cumulativeBudgetUsageJul(){
              const getRealValue = (val) => +val || val;
              return this.pinsJulContents.budgetUsage = (((getRealValue(this.pinsJulContents.expenses) + getRealValue(this.pinsJunContents.expenses) + getRealValue(this.pinsMayContents.expenses) + getRealValue(this.pinsAprContents.expenses) + getRealValue(this.pinsMarContents.expenses) + getRealValue(this.pinsFebContents.expenses) + getRealValue(this.pinsJanContents.expenses)) / getRealValue(this.pinsJulContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseAug(){
              const getRealValue = (val) => +val || val;
              return this.pinsAugContents.expenses = getRealValue(this.pinsAugContents.perCategory1) + getRealValue(this.pinsAugContents.perCategory2) + getRealValue(this.pinsAugContents.perCategory3) + getRealValue(this.pinsAugContents.perCategory4) + getRealValue(this.pinsAugContents.perCategory5) + getRealValue(this.pinsAugContents.perCategory6)
            },
            cumulativeBudgetUsageAug(){
              const getRealValue = (val) => +val || val;
              return this.pinsAugContents.budgetUsage = (((getRealValue(this.pinsAugContents.expenses) + getRealValue(this.pinsJulContents.expenses) + getRealValue(this.pinsJunContents.expenses) + getRealValue(this.pinsMayContents.expenses) + getRealValue(this.pinsAprContents.expenses) + getRealValue(this.pinsMarContents.expenses) + getRealValue(this.pinsFebContents.expenses) + getRealValue(this.pinsJanContents.expenses)) / getRealValue(this.pinsAugContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseSep(){
              const getRealValue = (val) => +val || val;
              return this.pinsSepContents.expenses = getRealValue(this.pinsSepContents.perCategory1) + getRealValue(this.pinsSepContents.perCategory2) + getRealValue(this.pinsSepContents.perCategory3) + getRealValue(this.pinsSepContents.perCategory4) + getRealValue(this.pinsSepContents.perCategory5) + getRealValue(this.pinsSepContents.perCategory6)
            },
            cumulativeBudgetUsageSep(){
              const getRealValue = (val) => +val || val;
              return this.pinsSepContents.budgetUsage = (((getRealValue(this.pinsSepContents.expenses) + getRealValue(this.pinsAugContents.expenses) + getRealValue(this.pinsJulContents.expenses) + getRealValue(this.pinsJunContents.expenses) + getRealValue(this.pinsMayContents.expenses) + getRealValue(this.pinsAprContents.expenses) + getRealValue(this.pinsMarContents.expenses) + getRealValue(this.pinsFebContents.expenses) + getRealValue(this.pinsJanContents.expenses)) / getRealValue(this.pinsSepContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseOct(){
              const getRealValue = (val) => +val || val;
              return this.pinsOctContents.expenses = getRealValue(this.pinsOctContents.perCategory1) + getRealValue(this.pinsOctContents.perCategory2) + getRealValue(this.pinsOctContents.perCategory3) + getRealValue(this.pinsOctContents.perCategory4) + getRealValue(this.pinsOctContents.perCategory5) + getRealValue(this.pinsOctContents.perCategory6)
            },
            cumulativeBudgetUsageOct(){
              const getRealValue = (val) => +val || val;
              return this.pinsOctContents.budgetUsage = (((getRealValue(this.pinsOctContents.expenses) + getRealValue(this.pinsSepContents.expenses) + getRealValue(this.pinsAugContents.expenses) + getRealValue(this.pinsJulContents.expenses) + getRealValue(this.pinsJunContents.expenses) + getRealValue(this.pinsMayContents.expenses) + getRealValue(this.pinsAprContents.expenses) + getRealValue(this.pinsMarContents.expenses) + getRealValue(this.pinsFebContents.expenses) + getRealValue(this.pinsJanContents.expenses)) / getRealValue(this.pinsOctContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseNov(){
              const getRealValue = (val) => +val || val;
              return this.pinsNovContents.expenses = getRealValue(this.pinsNovContents.perCategory1) + getRealValue(this.pinsNovContents.perCategory2) + getRealValue(this.pinsNovContents.perCategory3) + getRealValue(this.pinsNovContents.perCategory4) + getRealValue(this.pinsNovContents.perCategory5) + getRealValue(this.pinsNovContents.perCategory6)
            },
            cumulativeBudgetUsageNov(){
              const getRealValue = (val) => +val || val;
              return this.pinsNovContents.budgetUsage = (((getRealValue(this.pinsNovContents.expenses) + getRealValue(this.pinsOctContents.expenses) + getRealValue(this.pinsSepContents.expenses) + getRealValue(this.pinsAugContents.expenses) + getRealValue(this.pinsJulContents.expenses) + getRealValue(this.pinsJunContents.expenses) + getRealValue(this.pinsMayContents.expenses) + getRealValue(this.pinsAprContents.expenses) + getRealValue(this.pinsMarContents.expenses) + getRealValue(this.pinsFebContents.expenses) + getRealValue(this.pinsJanContents.expenses)) / getRealValue(this.pinsNovContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseDec(){
              const getRealValue = (val) => +val || val;
              return this.pinsDecContents.expenses = getRealValue(this.pinsDecContents.perCategory1) + getRealValue(this.pinsDecContents.perCategory2) + getRealValue(this.pinsDecContents.perCategory3) + getRealValue(this.pinsDecContents.perCategory4) + getRealValue(this.pinsDecContents.perCategory5) + getRealValue(this.pinsDecContents.perCategory6)
            },
            cumulativeBudgetUsageDec(){
              const getRealValue = (val) => +val || val;
              return this.pinsDecContents.budgetUsage = (((getRealValue(this.pinsDecContents.expenses) + getRealValue(this.pinsNovContents.expenses) + getRealValue(this.pinsOctContents.expenses) + getRealValue(this.pinsSepContents.expenses) + getRealValue(this.pinsAugContents.expenses) + getRealValue(this.pinsJulContents.expenses) + getRealValue(this.pinsJunContents.expenses) + getRealValue(this.pinsMayContents.expenses) + getRealValue(this.pinsAprContents.expenses) + getRealValue(this.pinsMarContents.expenses) + getRealValue(this.pinsFebContents.expenses) + getRealValue(this.pinsJanContents.expenses)) / getRealValue(this.pinsDecContents.actualBudget))*100).toFixed(2)
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
