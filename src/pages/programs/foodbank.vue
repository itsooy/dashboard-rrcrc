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
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip>Activities (#)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 5
                                <q-tooltip># Households Receiving Deliveries</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 6
                                <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankJanContents.kpi1 == null)?'grey-2':(foodbankJanContents.kpi1 >= '0' && foodbankJanContents.kpi1 <= '238.8')?'red':(foodbankJanContents.kpi1 > '238.8' && foodbankJanContents.kpi1 <= '318.4')?'orange':(foodbankJanContents.kpi1 > '318.4' && foodbankJanContents.kpi1 < '398')?'yellow-7':(foodbankJanContents.kpi1 >= '398' && foodbankJanContents.kpi1 < '477.6')?'green':(foodbankJanContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi2 == null)?'grey-2':(foodbankJanContents.kpi2 >= '0' && foodbankJanContents.kpi2 <= '244.2')?'red':(foodbankJanContents.kpi2 > '244.2' && foodbankJanContents.kpi2 <= '325.6')?'orange':(foodbankJanContents.kpi2 > '325.6' && foodbankJanContents.kpi2 < '407')?'yellow-7':(foodbankJanContents.kpi2 >= '407' && foodbankJanContents.kpi2 < '488.4')?'green':(foodbankJanContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi3 == null)?'grey-2':(foodbankJanContents.kpi3 >= '0' && foodbankJanContents.kpi3 <= '524.25')?'red':(foodbankJanContents.kpi3 > '524.25' && foodbankJanContents.kpi3 <= '699')?'orange':(foodbankJanContents.kpi3 > '699' && foodbankJanContents.kpi3 < '873.75')?'yellow-7':(foodbankJanContents.kpi3 >= '873.75' && foodbankJanContents.kpi3 < '1048.5')?'green':(foodbankJanContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi4 == null)?'grey-2':(foodbankJanContents.kpi4 >= '0' && foodbankJanContents.kpi4 <= '12.45')?'red':(foodbankJanContents.kpi4 > '12.45' && foodbankJanContents.kpi4 <= '16.6')?'orange':(foodbankJanContents.kpi4 > '16.6' && foodbankJanContents.kpi4 < '20.75')?'yellow-7':(foodbankJanContents.kpi4 >= '20.75' && foodbankJanContents.kpi4 < '24.9')?'green':(foodbankJanContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi5 == null)?'grey-2':(foodbankJanContents.kpi5 >= '0' && foodbankJanContents.kpi5 <= '92.4')?'red':(foodbankJanContents.kpi5 > '92.4' && foodbankJanContents.kpi5 <= '123.2')?'orange':(foodbankJanContents.kpi5 > '123.2' && foodbankJanContents.kpi5 < '154')?'yellow-7':(foodbankJanContents.kpi5 >= '154' && foodbankJanContents.kpi5 < '184.8')?'green':(foodbankJanContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi6 == null)?'grey-2':(foodbankJanContents.kpi6 >= '0' && foodbankJanContents.kpi6 <= '14.7')?'red':(foodbankJanContents.kpi6 > '14.7' && foodbankJanContents.kpi6 <= '19.6')?'orange':(foodbankJanContents.kpi6 > '19.6' && foodbankJanContents.kpi6 < '24.5')?'yellow-7':(foodbankJanContents.kpi6 >= '24.5' && foodbankJanContents.kpi6 < '29.4')?'green':(foodbankJanContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankFebContents.kpi1 == null)?'grey-2':(foodbankFebContents.kpi1 >= '0' && foodbankFebContents.kpi1 <= '238.8')?'red':(foodbankFebContents.kpi1 > '238.8' && foodbankFebContents.kpi1 <= '318.4')?'orange':(foodbankFebContents.kpi1 > '318.4' && foodbankFebContents.kpi1 < '398')?'yellow-7':(foodbankFebContents.kpi1 >= '398' && foodbankFebContents.kpi1 < '477.6')?'green':(foodbankFebContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi2 == null)?'grey-2':(foodbankFebContents.kpi2 >= '0' && foodbankFebContents.kpi2 <= '244.2')?'red':(foodbankFebContents.kpi2 > '244.2' && foodbankFebContents.kpi2 <= '325.6')?'orange':(foodbankFebContents.kpi2 > '325.6' && foodbankFebContents.kpi2 < '407')?'yellow-7':(foodbankFebContents.kpi2 >= '407' && foodbankFebContents.kpi2 < '488.4')?'green':(foodbankFebContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi3 == null)?'grey-2':(foodbankFebContents.kpi3 >= '0' && foodbankFebContents.kpi3 <= '524.25')?'red':(foodbankFebContents.kpi3 > '524.25' && foodbankFebContents.kpi3 <= '699')?'orange':(foodbankFebContents.kpi3 > '699' && foodbankFebContents.kpi3 < '873.75')?'yellow-7':(foodbankFebContents.kpi3 >= '873.75' && foodbankFebContents.kpi3 < '1048.5')?'green':(foodbankFebContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi4 == null)?'grey-2':(foodbankFebContents.kpi4 >= '0' && foodbankFebContents.kpi4 <= '12.45')?'red':(foodbankFebContents.kpi4 > '12.45' && foodbankFebContents.kpi4 <= '16.6')?'orange':(foodbankFebContents.kpi4 > '16.6' && foodbankFebContents.kpi4 < '20.75')?'yellow-7':(foodbankFebContents.kpi4 >= '20.75' && foodbankFebContents.kpi4 < '24.9')?'green':(foodbankFebContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi5 == null)?'grey-2':(foodbankFebContents.kpi5 >= '0' && foodbankFebContents.kpi5 <= '92.4')?'red':(foodbankFebContents.kpi5 > '92.4' && foodbankFebContents.kpi5 <= '123.2')?'orange':(foodbankFebContents.kpi5 > '123.2' && foodbankFebContents.kpi5 < '154')?'yellow-7':(foodbankFebContents.kpi5 >= '154' && foodbankFebContents.kpi5 < '184.8')?'green':(foodbankFebContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi6 == null)?'grey-2':(foodbankFebContents.kpi6 >= '0' && foodbankFebContents.kpi6 <= '14.7')?'red':(foodbankFebContents.kpi6 > '14.7' && foodbankFebContents.kpi6 <= '19.6')?'orange':(foodbankFebContents.kpi6 > '19.6' && foodbankFebContents.kpi6 < '24.5')?'yellow-7':(foodbankFebContents.kpi6 >= '24.5' && foodbankFebContents.kpi6 < '29.4')?'green':(foodbankFebContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankMarContents.kpi1 == null)?'grey-2':(foodbankMarContents.kpi1 >= '0' && foodbankMarContents.kpi1 <= '238.8')?'red':(foodbankMarContents.kpi1 > '238.8' && foodbankMarContents.kpi1 <= '318.4')?'orange':(foodbankMarContents.kpi1 > '318.4' && foodbankMarContents.kpi1 < '398')?'yellow-7':(foodbankMarContents.kpi1 >= '398' && foodbankMarContents.kpi1 < '477.6')?'green':(foodbankMarContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi2 == null)?'grey-2':(foodbankMarContents.kpi2 >= '0' && foodbankMarContents.kpi2 <= '244.2')?'red':(foodbankMarContents.kpi2 > '244.2' && foodbankMarContents.kpi2 <= '325.6')?'orange':(foodbankMarContents.kpi2 > '325.6' && foodbankMarContents.kpi2 < '407')?'yellow-7':(foodbankMarContents.kpi2 >= '407' && foodbankMarContents.kpi2 < '488.4')?'green':(foodbankMarContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi3 == null)?'grey-2':(foodbankMarContents.kpi3 >= '0' && foodbankMarContents.kpi3 <= '524.25')?'red':(foodbankMarContents.kpi3 > '524.25' && foodbankMarContents.kpi3 <= '699')?'orange':(foodbankMarContents.kpi3 > '699' && foodbankMarContents.kpi3 < '873.75')?'yellow-7':(foodbankMarContents.kpi3 >= '873.75' && foodbankMarContents.kpi3 < '1048.5')?'green':(foodbankMarContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi4 == null)?'grey-2':(foodbankMarContents.kpi4 >= '0' && foodbankMarContents.kpi4 <= '12.45')?'red':(foodbankMarContents.kpi4 > '12.45' && foodbankMarContents.kpi4 <= '16.6')?'orange':(foodbankMarContents.kpi4 > '16.6' && foodbankMarContents.kpi4 < '20.75')?'yellow-7':(foodbankMarContents.kpi4 >= '20.75' && foodbankMarContents.kpi4 < '24.9')?'green':(foodbankMarContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi5 == null)?'grey-2':(foodbankMarContents.kpi5 >= '0' && foodbankMarContents.kpi5 <= '92.4')?'red':(foodbankMarContents.kpi5 > '92.4' && foodbankMarContents.kpi5 <= '123.2')?'orange':(foodbankMarContents.kpi5 > '123.2' && foodbankMarContents.kpi5 < '154')?'yellow-7':(foodbankMarContents.kpi5 >= '154' && foodbankMarContents.kpi5 < '184.8')?'green':(foodbankMarContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi6 == null)?'grey-2':(foodbankMarContents.kpi6 >= '0' && foodbankMarContents.kpi6 <= '14.7')?'red':(foodbankMarContents.kpi6 > '14.7' && foodbankMarContents.kpi6 <= '19.6')?'orange':(foodbankMarContents.kpi6 > '19.6' && foodbankMarContents.kpi6 < '24.5')?'yellow-7':(foodbankMarContents.kpi6 >= '24.5' && foodbankMarContents.kpi6 < '29.4')?'green':(foodbankMarContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankAprContents.kpi1 == null)?'grey-2':(foodbankAprContents.kpi1 >= '0' && foodbankAprContents.kpi1 <= '238.8')?'red':(foodbankAprContents.kpi1 > '238.8' && foodbankAprContents.kpi1 <= '318.4')?'orange':(foodbankAprContents.kpi1 > '318.4' && foodbankAprContents.kpi1 < '398')?'yellow-7':(foodbankAprContents.kpi1 >= '398' && foodbankAprContents.kpi1 < '477.6')?'green':(foodbankAprContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi2 == null)?'grey-2':(foodbankAprContents.kpi2 >= '0' && foodbankAprContents.kpi2 <= '244.2')?'red':(foodbankAprContents.kpi2 > '244.2' && foodbankAprContents.kpi2 <= '325.6')?'orange':(foodbankAprContents.kpi2 > '325.6' && foodbankAprContents.kpi2 < '407')?'yellow-7':(foodbankAprContents.kpi2 >= '407' && foodbankAprContents.kpi2 < '488.4')?'green':(foodbankAprContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi3 == null)?'grey-2':(foodbankAprContents.kpi3 >= '0' && foodbankAprContents.kpi3 <= '524.25')?'red':(foodbankAprContents.kpi3 > '524.25' && foodbankAprContents.kpi3 <= '699')?'orange':(foodbankAprContents.kpi3 > '699' && foodbankAprContents.kpi3 < '873.75')?'yellow-7':(foodbankAprContents.kpi3 >= '873.75' && foodbankAprContents.kpi3 < '1048.5')?'green':(foodbankAprContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi4 == null)?'grey-2':(foodbankAprContents.kpi4 >= '0' && foodbankAprContents.kpi4 <= '12.45')?'red':(foodbankAprContents.kpi4 > '12.45' && foodbankAprContents.kpi4 <= '16.6')?'orange':(foodbankAprContents.kpi4 > '16.6' && foodbankAprContents.kpi4 < '20.75')?'yellow-7':(foodbankAprContents.kpi4 >= '20.75' && foodbankAprContents.kpi4 < '24.9')?'green':(foodbankAprContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi5 == null)?'grey-2':(foodbankAprContents.kpi5 >= '0' && foodbankAprContents.kpi5 <= '92.4')?'red':(foodbankAprContents.kpi5 > '92.4' && foodbankAprContents.kpi5 <= '123.2')?'orange':(foodbankAprContents.kpi5 > '123.2' && foodbankAprContents.kpi5 < '154')?'yellow-7':(foodbankAprContents.kpi5 >= '154' && foodbankAprContents.kpi5 < '184.8')?'green':(foodbankAprContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi6 == null)?'grey-2':(foodbankAprContents.kpi6 >= '0' && foodbankAprContents.kpi6 <= '14.7')?'red':(foodbankAprContents.kpi6 > '14.7' && foodbankAprContents.kpi6 <= '19.6')?'orange':(foodbankAprContents.kpi6 > '19.6' && foodbankAprContents.kpi6 < '24.5')?'yellow-7':(foodbankAprContents.kpi6 >= '24.5' && foodbankAprContents.kpi6 < '29.4')?'green':(foodbankAprContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankMayContents.kpi1 == null)?'grey-2':(foodbankMayContents.kpi1 >= '0' && foodbankMayContents.kpi1 <= '238.8')?'red':(foodbankMayContents.kpi1 > '238.8' && foodbankMayContents.kpi1 <= '318.4')?'orange':(foodbankMayContents.kpi1 > '318.4' && foodbankMayContents.kpi1 < '398')?'yellow-7':(foodbankMayContents.kpi1 >= '398' && foodbankMayContents.kpi1 < '477.6')?'green':(foodbankMayContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi2 == null)?'grey-2':(foodbankMayContents.kpi2 >= '0' && foodbankMayContents.kpi2 <= '244.2')?'red':(foodbankMayContents.kpi2 > '244.2' && foodbankMayContents.kpi2 <= '325.6')?'orange':(foodbankMayContents.kpi2 > '325.6' && foodbankMayContents.kpi2 < '407')?'yellow-7':(foodbankMayContents.kpi2 >= '407' && foodbankMayContents.kpi2 < '488.4')?'green':(foodbankMayContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi3 == null)?'grey-2':(foodbankMayContents.kpi3 >= '0' && foodbankMayContents.kpi3 <= '524.25')?'red':(foodbankMayContents.kpi3 > '524.25' && foodbankMayContents.kpi3 <= '699')?'orange':(foodbankMayContents.kpi3 > '699' && foodbankMayContents.kpi3 < '873.75')?'yellow-7':(foodbankMayContents.kpi3 >= '873.75' && foodbankMayContents.kpi3 < '1048.5')?'green':(foodbankMayContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi4 == null)?'grey-2':(foodbankMayContents.kpi4 >= '0' && foodbankMayContents.kpi4 <= '12.45')?'red':(foodbankMayContents.kpi4 > '12.45' && foodbankMayContents.kpi4 <= '16.6')?'orange':(foodbankMayContents.kpi4 > '16.6' && foodbankMayContents.kpi4 < '20.75')?'yellow-7':(foodbankMayContents.kpi4 >= '20.75' && foodbankMayContents.kpi4 < '24.9')?'green':(foodbankMayContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi5 == null)?'grey-2':(foodbankMayContents.kpi5 >= '0' && foodbankMayContents.kpi5 <= '92.4')?'red':(foodbankMayContents.kpi5 > '92.4' && foodbankMayContents.kpi5 <= '123.2')?'orange':(foodbankMayContents.kpi5 > '123.2' && foodbankMayContents.kpi5 < '154')?'yellow-7':(foodbankMayContents.kpi5 >= '154' && foodbankMayContents.kpi5 < '184.8')?'green':(foodbankMayContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi6 == null)?'grey-2':(foodbankMayContents.kpi6 >= '0' && foodbankMayContents.kpi6 <= '14.7')?'red':(foodbankMayContents.kpi6 > '14.7' && foodbankMayContents.kpi6 <= '19.6')?'orange':(foodbankMayContents.kpi6 > '19.6' && foodbankMayContents.kpi6 < '24.5')?'yellow-7':(foodbankMayContents.kpi6 >= '24.5' && foodbankMayContents.kpi6 < '29.4')?'green':(foodbankMayContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankJunContents.kpi1 == null)?'grey-2':(foodbankJunContents.kpi1 >= '0' && foodbankJunContents.kpi1 <= '238.8')?'red':(foodbankJunContents.kpi1 > '238.8' && foodbankJunContents.kpi1 <= '318.4')?'orange':(foodbankJunContents.kpi1 > '318.4' && foodbankJunContents.kpi1 < '398')?'yellow-7':(foodbankJunContents.kpi1 >= '398' && foodbankJunContents.kpi1 < '477.6')?'green':(foodbankJunContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi2 == null)?'grey-2':(foodbankJunContents.kpi2 >= '0' && foodbankJunContents.kpi2 <= '244.2')?'red':(foodbankJunContents.kpi2 > '244.2' && foodbankJunContents.kpi2 <= '325.6')?'orange':(foodbankJunContents.kpi2 > '325.6' && foodbankJunContents.kpi2 < '407')?'yellow-7':(foodbankJunContents.kpi2 >= '407' && foodbankJunContents.kpi2 < '488.4')?'green':(foodbankJunContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi3 == null)?'grey-2':(foodbankJunContents.kpi3 >= '0' && foodbankJunContents.kpi3 <= '524.25')?'red':(foodbankJunContents.kpi3 > '524.25' && foodbankJunContents.kpi3 <= '699')?'orange':(foodbankJunContents.kpi3 > '699' && foodbankJunContents.kpi3 < '873.75')?'yellow-7':(foodbankJunContents.kpi3 >= '873.75' && foodbankJunContents.kpi3 < '1048.5')?'green':(foodbankJunContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi4 == null)?'grey-2':(foodbankJunContents.kpi4 >= '0' && foodbankJunContents.kpi4 <= '12.45')?'red':(foodbankJunContents.kpi4 > '12.45' && foodbankJunContents.kpi4 <= '16.6')?'orange':(foodbankJunContents.kpi4 > '16.6' && foodbankJunContents.kpi4 < '20.75')?'yellow-7':(foodbankJunContents.kpi4 >= '20.75' && foodbankJunContents.kpi4 < '24.9')?'green':(foodbankJunContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi5 == null)?'grey-2':(foodbankJunContents.kpi5 >= '0' && foodbankJunContents.kpi5 <= '92.4')?'red':(foodbankJunContents.kpi5 > '92.4' && foodbankJunContents.kpi5 <= '123.2')?'orange':(foodbankJunContents.kpi5 > '123.2' && foodbankJunContents.kpi5 < '154')?'yellow-7':(foodbankJunContents.kpi5 >= '154' && foodbankJunContents.kpi5 < '184.8')?'green':(foodbankJunContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi6 == null)?'grey-2':(foodbankJunContents.kpi6 >= '0' && foodbankJunContents.kpi6 <= '14.7')?'red':(foodbankJunContents.kpi6 > '14.7' && foodbankJunContents.kpi6 <= '19.6')?'orange':(foodbankJunContents.kpi6 > '19.6' && foodbankJunContents.kpi6 < '24.5')?'yellow-7':(foodbankJunContents.kpi6 >= '24.5' && foodbankJunContents.kpi6 < '29.4')?'green':(foodbankJunContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankJulContents.kpi1 == null)?'grey-2':(foodbankJulContents.kpi1 >= '0' && foodbankJulContents.kpi1 <= '238.8')?'red':(foodbankJulContents.kpi1 > '238.8' && foodbankJulContents.kpi1 <= '318.4')?'orange':(foodbankJulContents.kpi1 > '318.4' && foodbankJulContents.kpi1 < '398')?'yellow-7':(foodbankJulContents.kpi1 >= '398' && foodbankJulContents.kpi1 < '477.6')?'green':(foodbankJulContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi2 == null)?'grey-2':(foodbankJulContents.kpi2 >= '0' && foodbankJulContents.kpi2 <= '244.2')?'red':(foodbankJulContents.kpi2 > '244.2' && foodbankJulContents.kpi2 <= '325.6')?'orange':(foodbankJulContents.kpi2 > '325.6' && foodbankJulContents.kpi2 < '407')?'yellow-7':(foodbankJulContents.kpi2 >= '407' && foodbankJulContents.kpi2 < '488.4')?'green':(foodbankJulContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi3 == null)?'grey-2':(foodbankJulContents.kpi3 >= '0' && foodbankJulContents.kpi3 <= '524.25')?'red':(foodbankJulContents.kpi3 > '524.25' && foodbankJulContents.kpi3 <= '699')?'orange':(foodbankJulContents.kpi3 > '699' && foodbankJulContents.kpi3 < '873.75')?'yellow-7':(foodbankJulContents.kpi3 >= '873.75' && foodbankJulContents.kpi3 < '1048.5')?'green':(foodbankJulContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi4 == null)?'grey-2':(foodbankJulContents.kpi4 >= '0' && foodbankJulContents.kpi4 <= '12.45')?'red':(foodbankJulContents.kpi4 > '12.45' && foodbankJulContents.kpi4 <= '16.6')?'orange':(foodbankJulContents.kpi4 > '16.6' && foodbankJulContents.kpi4 < '20.75')?'yellow-7':(foodbankJulContents.kpi4 >= '20.75' && foodbankJulContents.kpi4 < '24.9')?'green':(foodbankJulContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi5 == null)?'grey-2':(foodbankJulContents.kpi5 >= '0' && foodbankJulContents.kpi5 <= '92.4')?'red':(foodbankJulContents.kpi5 > '92.4' && foodbankJulContents.kpi5 <= '123.2')?'orange':(foodbankJulContents.kpi5 > '123.2' && foodbankJulContents.kpi5 < '154')?'yellow-7':(foodbankJulContents.kpi5 >= '154' && foodbankJulContents.kpi5 < '184.8')?'green':(foodbankJulContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi6 == null)?'grey-2':(foodbankJulContents.kpi6 >= '0' && foodbankJulContents.kpi6 <= '14.7')?'red':(foodbankJulContents.kpi6 > '14.7' && foodbankJulContents.kpi6 <= '19.6')?'orange':(foodbankJulContents.kpi6 > '19.6' && foodbankJulContents.kpi6 < '24.5')?'yellow-7':(foodbankJulContents.kpi6 >= '24.5' && foodbankJulContents.kpi6 < '29.4')?'green':(foodbankJulContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankAugContents.kpi1 == null)?'grey-2':(foodbankAugContents.kpi1 >= '0' && foodbankAugContents.kpi1 <= '238.8')?'red':(foodbankAugContents.kpi1 > '238.8' && foodbankAugContents.kpi1 <= '318.4')?'orange':(foodbankAugContents.kpi1 > '318.4' && foodbankAugContents.kpi1 < '398')?'yellow-7':(foodbankAugContents.kpi1 >= '398' && foodbankAugContents.kpi1 < '477.6')?'green':(foodbankAugContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi2 == null)?'grey-2':(foodbankAugContents.kpi2 >= '0' && foodbankAugContents.kpi2 <= '244.2')?'red':(foodbankAugContents.kpi2 > '244.2' && foodbankAugContents.kpi2 <= '325.6')?'orange':(foodbankAugContents.kpi2 > '325.6' && foodbankAugContents.kpi2 < '407')?'yellow-7':(foodbankAugContents.kpi2 >= '407' && foodbankAugContents.kpi2 < '488.4')?'green':(foodbankAugContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi3 == null)?'grey-2':(foodbankAugContents.kpi3 >= '0' && foodbankAugContents.kpi3 <= '524.25')?'red':(foodbankAugContents.kpi3 > '524.25' && foodbankAugContents.kpi3 <= '699')?'orange':(foodbankAugContents.kpi3 > '699' && foodbankAugContents.kpi3 < '873.75')?'yellow-7':(foodbankAugContents.kpi3 >= '873.75' && foodbankAugContents.kpi3 < '1048.5')?'green':(foodbankAugContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi4 == null)?'grey-2':(foodbankAugContents.kpi4 >= '0' && foodbankAugContents.kpi4 <= '12.45')?'red':(foodbankAugContents.kpi4 > '12.45' && foodbankAugContents.kpi4 <= '16.6')?'orange':(foodbankAugContents.kpi4 > '16.6' && foodbankAugContents.kpi4 < '20.75')?'yellow-7':(foodbankAugContents.kpi4 >= '20.75' && foodbankAugContents.kpi4 < '24.9')?'green':(foodbankAugContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi5 == null)?'grey-2':(foodbankAugContents.kpi5 >= '0' && foodbankAugContents.kpi5 <= '92.4')?'red':(foodbankAugContents.kpi5 > '92.4' && foodbankAugContents.kpi5 <= '123.2')?'orange':(foodbankAugContents.kpi5 > '123.2' && foodbankAugContents.kpi5 < '154')?'yellow-7':(foodbankAugContents.kpi5 >= '154' && foodbankAugContents.kpi5 < '184.8')?'green':(foodbankAugContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi6 == null)?'grey-2':(foodbankAugContents.kpi6 >= '0' && foodbankAugContents.kpi6 <= '14.7')?'red':(foodbankAugContents.kpi6 > '14.7' && foodbankAugContents.kpi6 <= '19.6')?'orange':(foodbankAugContents.kpi6 > '19.6' && foodbankAugContents.kpi6 < '24.5')?'yellow-7':(foodbankAugContents.kpi6 >= '24.5' && foodbankAugContents.kpi6 < '29.4')?'green':(foodbankAugContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankSepContents.kpi1 == null)?'grey-2':(foodbankSepContents.kpi1 >= '0' && foodbankSepContents.kpi1 <= '238.8')?'red':(foodbankSepContents.kpi1 > '238.8' && foodbankSepContents.kpi1 <= '318.4')?'orange':(foodbankSepContents.kpi1 > '318.4' && foodbankSepContents.kpi1 < '398')?'yellow-7':(foodbankSepContents.kpi1 >= '398' && foodbankSepContents.kpi1 < '477.6')?'green':(foodbankSepContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi2 == null)?'grey-2':(foodbankSepContents.kpi2 >= '0' && foodbankSepContents.kpi2 <= '244.2')?'red':(foodbankSepContents.kpi2 > '244.2' && foodbankSepContents.kpi2 <= '325.6')?'orange':(foodbankSepContents.kpi2 > '325.6' && foodbankSepContents.kpi2 < '407')?'yellow-7':(foodbankSepContents.kpi2 >= '407' && foodbankSepContents.kpi2 < '488.4')?'green':(foodbankSepContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi3 == null)?'grey-2':(foodbankSepContents.kpi3 >= '0' && foodbankSepContents.kpi3 <= '524.25')?'red':(foodbankSepContents.kpi3 > '524.25' && foodbankSepContents.kpi3 <= '699')?'orange':(foodbankSepContents.kpi3 > '699' && foodbankSepContents.kpi3 < '873.75')?'yellow-7':(foodbankSepContents.kpi3 >= '873.75' && foodbankSepContents.kpi3 < '1048.5')?'green':(foodbankSepContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi4 == null)?'grey-2':(foodbankSepContents.kpi4 >= '0' && foodbankSepContents.kpi4 <= '12.45')?'red':(foodbankSepContents.kpi4 > '12.45' && foodbankSepContents.kpi4 <= '16.6')?'orange':(foodbankSepContents.kpi4 > '16.6' && foodbankSepContents.kpi4 < '20.75')?'yellow-7':(foodbankSepContents.kpi4 >= '20.75' && foodbankSepContents.kpi4 < '24.9')?'green':(foodbankSepContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi5 == null)?'grey-2':(foodbankSepContents.kpi5 >= '0' && foodbankSepContents.kpi5 <= '92.4')?'red':(foodbankSepContents.kpi5 > '92.4' && foodbankSepContents.kpi5 <= '123.2')?'orange':(foodbankSepContents.kpi5 > '123.2' && foodbankSepContents.kpi5 < '154')?'yellow-7':(foodbankSepContents.kpi5 >= '154' && foodbankSepContents.kpi5 < '184.8')?'green':(foodbankSepContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi6 == null)?'grey-2':(foodbankSepContents.kpi6 >= '0' && foodbankSepContents.kpi6 <= '14.7')?'red':(foodbankSepContents.kpi6 > '14.7' && foodbankSepContents.kpi6 <= '19.6')?'orange':(foodbankSepContents.kpi6 > '19.6' && foodbankSepContents.kpi6 < '24.5')?'yellow-7':(foodbankSepContents.kpi6 >= '24.5' && foodbankSepContents.kpi6 < '29.4')?'green':(foodbankSepContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankOctContents.kpi1 == null)?'grey-2':(foodbankOctContents.kpi1 >= '0' && foodbankOctContents.kpi1 <= '238.8')?'red':(foodbankOctContents.kpi1 > '238.8' && foodbankOctContents.kpi1 <= '318.4')?'orange':(foodbankOctContents.kpi1 > '318.4' && foodbankOctContents.kpi1 < '398')?'yellow-7':(foodbankOctContents.kpi1 >= '398' && foodbankOctContents.kpi1 < '477.6')?'green':(foodbankOctContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi2 == null)?'grey-2':(foodbankOctContents.kpi2 >= '0' && foodbankOctContents.kpi2 <= '244.2')?'red':(foodbankOctContents.kpi2 > '244.2' && foodbankOctContents.kpi2 <= '325.6')?'orange':(foodbankOctContents.kpi2 > '325.6' && foodbankOctContents.kpi2 < '407')?'yellow-7':(foodbankOctContents.kpi2 >= '407' && foodbankOctContents.kpi2 < '488.4')?'green':(foodbankOctContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi3 == null)?'grey-2':(foodbankOctContents.kpi3 >= '0' && foodbankOctContents.kpi3 <= '524.25')?'red':(foodbankOctContents.kpi3 > '524.25' && foodbankOctContents.kpi3 <= '699')?'orange':(foodbankOctContents.kpi3 > '699' && foodbankOctContents.kpi3 < '873.75')?'yellow-7':(foodbankOctContents.kpi3 >= '873.75' && foodbankOctContents.kpi3 < '1048.5')?'green':(foodbankOctContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi4 == null)?'grey-2':(foodbankOctContents.kpi4 >= '0' && foodbankOctContents.kpi4 <= '12.45')?'red':(foodbankOctContents.kpi4 > '12.45' && foodbankOctContents.kpi4 <= '16.6')?'orange':(foodbankOctContents.kpi4 > '16.6' && foodbankOctContents.kpi4 < '20.75')?'yellow-7':(foodbankOctContents.kpi4 >= '20.75' && foodbankOctContents.kpi4 < '24.9')?'green':(foodbankOctContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi5 == null)?'grey-2':(foodbankOctContents.kpi5 >= '0' && foodbankOctContents.kpi5 <= '92.4')?'red':(foodbankOctContents.kpi5 > '92.4' && foodbankOctContents.kpi5 <= '123.2')?'orange':(foodbankOctContents.kpi5 > '123.2' && foodbankOctContents.kpi5 < '154')?'yellow-7':(foodbankOctContents.kpi5 >= '154' && foodbankOctContents.kpi5 < '184.8')?'green':(foodbankOctContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi6 == null)?'grey-2':(foodbankOctContents.kpi6 >= '0' && foodbankOctContents.kpi6 <= '14.7')?'red':(foodbankOctContents.kpi6 > '14.7' && foodbankOctContents.kpi6 <= '19.6')?'orange':(foodbankOctContents.kpi6 > '19.6' && foodbankOctContents.kpi6 < '24.5')?'yellow-7':(foodbankOctContents.kpi6 >= '24.5' && foodbankOctContents.kpi6 < '29.4')?'green':(foodbankOctContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankNovContents.kpi1 == null)?'grey-2':(foodbankNovContents.kpi1 >= '0' && foodbankNovContents.kpi1 <= '238.8')?'red':(foodbankNovContents.kpi1 > '238.8' && foodbankNovContents.kpi1 <= '318.4')?'orange':(foodbankNovContents.kpi1 > '318.4' && foodbankNovContents.kpi1 < '398')?'yellow-7':(foodbankNovContents.kpi1 >= '398' && foodbankNovContents.kpi1 < '477.6')?'green':(foodbankNovContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi2 == null)?'grey-2':(foodbankNovContents.kpi2 >= '0' && foodbankNovContents.kpi2 <= '244.2')?'red':(foodbankNovContents.kpi2 > '244.2' && foodbankNovContents.kpi2 <= '325.6')?'orange':(foodbankNovContents.kpi2 > '325.6' && foodbankNovContents.kpi2 < '407')?'yellow-7':(foodbankNovContents.kpi2 >= '407' && foodbankNovContents.kpi2 < '488.4')?'green':(foodbankNovContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi3 == null)?'grey-2':(foodbankNovContents.kpi3 >= '0' && foodbankNovContents.kpi3 <= '524.25')?'red':(foodbankNovContents.kpi3 > '524.25' && foodbankNovContents.kpi3 <= '699')?'orange':(foodbankNovContents.kpi3 > '699' && foodbankNovContents.kpi3 < '873.75')?'yellow-7':(foodbankNovContents.kpi3 >= '873.75' && foodbankNovContents.kpi3 < '1048.5')?'green':(foodbankNovContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi4 == null)?'grey-2':(foodbankNovContents.kpi4 >= '0' && foodbankNovContents.kpi4 <= '12.45')?'red':(foodbankNovContents.kpi4 > '12.45' && foodbankNovContents.kpi4 <= '16.6')?'orange':(foodbankNovContents.kpi4 > '16.6' && foodbankNovContents.kpi4 < '20.75')?'yellow-7':(foodbankNovContents.kpi4 >= '20.75' && foodbankNovContents.kpi4 < '24.9')?'green':(foodbankNovContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi5 == null)?'grey-2':(foodbankNovContents.kpi5 >= '0' && foodbankNovContents.kpi5 <= '92.4')?'red':(foodbankNovContents.kpi5 > '92.4' && foodbankNovContents.kpi5 <= '123.2')?'orange':(foodbankNovContents.kpi5 > '123.2' && foodbankNovContents.kpi5 < '154')?'yellow-7':(foodbankNovContents.kpi5 >= '154' && foodbankNovContents.kpi5 < '184.8')?'green':(foodbankNovContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi6 == null)?'grey-2':(foodbankNovContents.kpi6 >= '0' && foodbankNovContents.kpi6 <= '14.7')?'red':(foodbankNovContents.kpi6 > '14.7' && foodbankNovContents.kpi6 <= '19.6')?'orange':(foodbankNovContents.kpi6 > '19.6' && foodbankNovContents.kpi6 < '24.5')?'yellow-7':(foodbankNovContents.kpi6 >= '24.5' && foodbankNovContents.kpi6 < '29.4')?'green':(foodbankNovContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankDecContents.kpi1 == null)?'grey-2':(foodbankDecContents.kpi1 >= '0' && foodbankDecContents.kpi1 <= '238.8')?'red':(foodbankDecContents.kpi1 > '238.8' && foodbankDecContents.kpi1 <= '318.4')?'orange':(foodbankDecContents.kpi1 > '318.4' && foodbankDecContents.kpi1 < '398')?'yellow-7':(foodbankDecContents.kpi1 >= '398' && foodbankDecContents.kpi1 < '477.6')?'green':(foodbankDecContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi2 == null)?'grey-2':(foodbankDecContents.kpi2 >= '0' && foodbankDecContents.kpi2 <= '244.2')?'red':(foodbankDecContents.kpi2 > '244.2' && foodbankDecContents.kpi2 <= '325.6')?'orange':(foodbankDecContents.kpi2 > '325.6' && foodbankDecContents.kpi2 < '407')?'yellow-7':(foodbankDecContents.kpi2 >= '407' && foodbankDecContents.kpi2 < '488.4')?'green':(foodbankDecContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi3 == null)?'grey-2':(foodbankDecContents.kpi3 >= '0' && foodbankDecContents.kpi3 <= '524.25')?'red':(foodbankDecContents.kpi3 > '524.25' && foodbankDecContents.kpi3 <= '699')?'orange':(foodbankDecContents.kpi3 > '699' && foodbankDecContents.kpi3 < '873.75')?'yellow-7':(foodbankDecContents.kpi3 >= '873.75' && foodbankDecContents.kpi3 < '1048.5')?'green':(foodbankDecContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi4 == null)?'grey-2':(foodbankDecContents.kpi4 >= '0' && foodbankDecContents.kpi4 <= '12.45')?'red':(foodbankDecContents.kpi4 > '12.45' && foodbankDecContents.kpi4 <= '16.6')?'orange':(foodbankDecContents.kpi4 > '16.6' && foodbankDecContents.kpi4 < '20.75')?'yellow-7':(foodbankDecContents.kpi4 >= '20.75' && foodbankDecContents.kpi4 < '24.9')?'green':(foodbankDecContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi5 == null)?'grey-2':(foodbankDecContents.kpi5 >= '0' && foodbankDecContents.kpi5 <= '92.4')?'red':(foodbankDecContents.kpi5 > '92.4' && foodbankDecContents.kpi5 <= '123.2')?'orange':(foodbankDecContents.kpi5 > '123.2' && foodbankDecContents.kpi5 < '154')?'yellow-7':(foodbankDecContents.kpi5 >= '154' && foodbankDecContents.kpi5 < '184.8')?'green':(foodbankDecContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi6 == null)?'grey-2':(foodbankDecContents.kpi6 >= '0' && foodbankDecContents.kpi6 <= '14.7')?'red':(foodbankDecContents.kpi6 > '14.7' && foodbankDecContents.kpi6 <= '19.6')?'orange':(foodbankDecContents.kpi6 > '19.6' && foodbankDecContents.kpi6 < '24.5')?'yellow-7':(foodbankDecContents.kpi6 >= '24.5' && foodbankDecContents.kpi6 < '29.4')?'green':(foodbankDecContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip>Activities (#)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 5
                                <q-tooltip># Households Receiving Deliveries</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 6
                                <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankJanContents.kpi1 == null)?'grey-2':(foodbankJanContents.kpi1 >= '0' && foodbankJanContents.kpi1 <= '238.8')?'red':(foodbankJanContents.kpi1 > '238.8' && foodbankJanContents.kpi1 <= '318.4')?'orange':(foodbankJanContents.kpi1 > '318.4' && foodbankJanContents.kpi1 < '398')?'yellow-7':(foodbankJanContents.kpi1 >= '398' && foodbankJanContents.kpi1 < '477.6')?'green':(foodbankJanContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi2 == null)?'grey-2':(foodbankJanContents.kpi2 >= '0' && foodbankJanContents.kpi2 <= '244.2')?'red':(foodbankJanContents.kpi2 > '244.2' && foodbankJanContents.kpi2 <= '325.6')?'orange':(foodbankJanContents.kpi2 > '325.6' && foodbankJanContents.kpi2 < '407')?'yellow-7':(foodbankJanContents.kpi2 >= '407' && foodbankJanContents.kpi2 < '488.4')?'green':(foodbankJanContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi3 == null)?'grey-2':(foodbankJanContents.kpi3 >= '0' && foodbankJanContents.kpi3 <= '524.25')?'red':(foodbankJanContents.kpi3 > '524.25' && foodbankJanContents.kpi3 <= '699')?'orange':(foodbankJanContents.kpi3 > '699' && foodbankJanContents.kpi3 < '873.75')?'yellow-7':(foodbankJanContents.kpi3 >= '873.75' && foodbankJanContents.kpi3 < '1048.5')?'green':(foodbankJanContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi4 == null)?'grey-2':(foodbankJanContents.kpi4 >= '0' && foodbankJanContents.kpi4 <= '12.45')?'red':(foodbankJanContents.kpi4 > '12.45' && foodbankJanContents.kpi4 <= '16.6')?'orange':(foodbankJanContents.kpi4 > '16.6' && foodbankJanContents.kpi4 < '20.75')?'yellow-7':(foodbankJanContents.kpi4 >= '20.75' && foodbankJanContents.kpi4 < '24.9')?'green':(foodbankJanContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi5 == null)?'grey-2':(foodbankJanContents.kpi5 >= '0' && foodbankJanContents.kpi5 <= '92.4')?'red':(foodbankJanContents.kpi5 > '92.4' && foodbankJanContents.kpi5 <= '123.2')?'orange':(foodbankJanContents.kpi5 > '123.2' && foodbankJanContents.kpi5 < '154')?'yellow-7':(foodbankJanContents.kpi5 >= '154' && foodbankJanContents.kpi5 < '184.8')?'green':(foodbankJanContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi6 == null)?'grey-2':(foodbankJanContents.kpi6 >= '0' && foodbankJanContents.kpi6 <= '14.7')?'red':(foodbankJanContents.kpi6 > '14.7' && foodbankJanContents.kpi6 <= '19.6')?'orange':(foodbankJanContents.kpi6 > '19.6' && foodbankJanContents.kpi6 < '24.5')?'yellow-7':(foodbankJanContents.kpi6 >= '24.5' && foodbankJanContents.kpi6 < '29.4')?'green':(foodbankJanContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankFebContents.kpi1 == null)?'grey-2':(foodbankFebContents.kpi1 >= '0' && foodbankFebContents.kpi1 <= '238.8')?'red':(foodbankFebContents.kpi1 > '238.8' && foodbankFebContents.kpi1 <= '318.4')?'orange':(foodbankFebContents.kpi1 > '318.4' && foodbankFebContents.kpi1 < '398')?'yellow-7':(foodbankFebContents.kpi1 >= '398' && foodbankFebContents.kpi1 < '477.6')?'green':(foodbankFebContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi2 == null)?'grey-2':(foodbankFebContents.kpi2 >= '0' && foodbankFebContents.kpi2 <= '244.2')?'red':(foodbankFebContents.kpi2 > '244.2' && foodbankFebContents.kpi2 <= '325.6')?'orange':(foodbankFebContents.kpi2 > '325.6' && foodbankFebContents.kpi2 < '407')?'yellow-7':(foodbankFebContents.kpi2 >= '407' && foodbankFebContents.kpi2 < '488.4')?'green':(foodbankFebContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi3 == null)?'grey-2':(foodbankFebContents.kpi3 >= '0' && foodbankFebContents.kpi3 <= '524.25')?'red':(foodbankFebContents.kpi3 > '524.25' && foodbankFebContents.kpi3 <= '699')?'orange':(foodbankFebContents.kpi3 > '699' && foodbankFebContents.kpi3 < '873.75')?'yellow-7':(foodbankFebContents.kpi3 >= '873.75' && foodbankFebContents.kpi3 < '1048.5')?'green':(foodbankFebContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi4 == null)?'grey-2':(foodbankFebContents.kpi4 >= '0' && foodbankFebContents.kpi4 <= '12.45')?'red':(foodbankFebContents.kpi4 > '12.45' && foodbankFebContents.kpi4 <= '16.6')?'orange':(foodbankFebContents.kpi4 > '16.6' && foodbankFebContents.kpi4 < '20.75')?'yellow-7':(foodbankFebContents.kpi4 >= '20.75' && foodbankFebContents.kpi4 < '24.9')?'green':(foodbankFebContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi5 == null)?'grey-2':(foodbankFebContents.kpi5 >= '0' && foodbankFebContents.kpi5 <= '92.4')?'red':(foodbankFebContents.kpi5 > '92.4' && foodbankFebContents.kpi5 <= '123.2')?'orange':(foodbankFebContents.kpi5 > '123.2' && foodbankFebContents.kpi5 < '154')?'yellow-7':(foodbankFebContents.kpi5 >= '154' && foodbankFebContents.kpi5 < '184.8')?'green':(foodbankFebContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi6 == null)?'grey-2':(foodbankFebContents.kpi6 >= '0' && foodbankFebContents.kpi6 <= '14.7')?'red':(foodbankFebContents.kpi6 > '14.7' && foodbankFebContents.kpi6 <= '19.6')?'orange':(foodbankFebContents.kpi6 > '19.6' && foodbankFebContents.kpi6 < '24.5')?'yellow-7':(foodbankFebContents.kpi6 >= '24.5' && foodbankFebContents.kpi6 < '29.4')?'green':(foodbankFebContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankMarContents.kpi1 == null)?'grey-2':(foodbankMarContents.kpi1 >= '0' && foodbankMarContents.kpi1 <= '238.8')?'red':(foodbankMarContents.kpi1 > '238.8' && foodbankMarContents.kpi1 <= '318.4')?'orange':(foodbankMarContents.kpi1 > '318.4' && foodbankMarContents.kpi1 < '398')?'yellow-7':(foodbankMarContents.kpi1 >= '398' && foodbankMarContents.kpi1 < '477.6')?'green':(foodbankMarContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi2 == null)?'grey-2':(foodbankMarContents.kpi2 >= '0' && foodbankMarContents.kpi2 <= '244.2')?'red':(foodbankMarContents.kpi2 > '244.2' && foodbankMarContents.kpi2 <= '325.6')?'orange':(foodbankMarContents.kpi2 > '325.6' && foodbankMarContents.kpi2 < '407')?'yellow-7':(foodbankMarContents.kpi2 >= '407' && foodbankMarContents.kpi2 < '488.4')?'green':(foodbankMarContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi3 == null)?'grey-2':(foodbankMarContents.kpi3 >= '0' && foodbankMarContents.kpi3 <= '524.25')?'red':(foodbankMarContents.kpi3 > '524.25' && foodbankMarContents.kpi3 <= '699')?'orange':(foodbankMarContents.kpi3 > '699' && foodbankMarContents.kpi3 < '873.75')?'yellow-7':(foodbankMarContents.kpi3 >= '873.75' && foodbankMarContents.kpi3 < '1048.5')?'green':(foodbankMarContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi4 == null)?'grey-2':(foodbankMarContents.kpi4 >= '0' && foodbankMarContents.kpi4 <= '12.45')?'red':(foodbankMarContents.kpi4 > '12.45' && foodbankMarContents.kpi4 <= '16.6')?'orange':(foodbankMarContents.kpi4 > '16.6' && foodbankMarContents.kpi4 < '20.75')?'yellow-7':(foodbankMarContents.kpi4 >= '20.75' && foodbankMarContents.kpi4 < '24.9')?'green':(foodbankMarContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi5 == null)?'grey-2':(foodbankMarContents.kpi5 >= '0' && foodbankMarContents.kpi5 <= '92.4')?'red':(foodbankMarContents.kpi5 > '92.4' && foodbankMarContents.kpi5 <= '123.2')?'orange':(foodbankMarContents.kpi5 > '123.2' && foodbankMarContents.kpi5 < '154')?'yellow-7':(foodbankMarContents.kpi5 >= '154' && foodbankMarContents.kpi5 < '184.8')?'green':(foodbankMarContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi6 == null)?'grey-2':(foodbankMarContents.kpi6 >= '0' && foodbankMarContents.kpi6 <= '14.7')?'red':(foodbankMarContents.kpi6 > '14.7' && foodbankMarContents.kpi6 <= '19.6')?'orange':(foodbankMarContents.kpi6 > '19.6' && foodbankMarContents.kpi6 < '24.5')?'yellow-7':(foodbankMarContents.kpi6 >= '24.5' && foodbankMarContents.kpi6 < '29.4')?'green':(foodbankMarContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankAprContents.kpi1 == null)?'grey-2':(foodbankAprContents.kpi1 >= '0' && foodbankAprContents.kpi1 <= '238.8')?'red':(foodbankAprContents.kpi1 > '238.8' && foodbankAprContents.kpi1 <= '318.4')?'orange':(foodbankAprContents.kpi1 > '318.4' && foodbankAprContents.kpi1 < '398')?'yellow-7':(foodbankAprContents.kpi1 >= '398' && foodbankAprContents.kpi1 < '477.6')?'green':(foodbankAprContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi2 == null)?'grey-2':(foodbankAprContents.kpi2 >= '0' && foodbankAprContents.kpi2 <= '244.2')?'red':(foodbankAprContents.kpi2 > '244.2' && foodbankAprContents.kpi2 <= '325.6')?'orange':(foodbankAprContents.kpi2 > '325.6' && foodbankAprContents.kpi2 < '407')?'yellow-7':(foodbankAprContents.kpi2 >= '407' && foodbankAprContents.kpi2 < '488.4')?'green':(foodbankAprContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi3 == null)?'grey-2':(foodbankAprContents.kpi3 >= '0' && foodbankAprContents.kpi3 <= '524.25')?'red':(foodbankAprContents.kpi3 > '524.25' && foodbankAprContents.kpi3 <= '699')?'orange':(foodbankAprContents.kpi3 > '699' && foodbankAprContents.kpi3 < '873.75')?'yellow-7':(foodbankAprContents.kpi3 >= '873.75' && foodbankAprContents.kpi3 < '1048.5')?'green':(foodbankAprContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi4 == null)?'grey-2':(foodbankAprContents.kpi4 >= '0' && foodbankAprContents.kpi4 <= '12.45')?'red':(foodbankAprContents.kpi4 > '12.45' && foodbankAprContents.kpi4 <= '16.6')?'orange':(foodbankAprContents.kpi4 > '16.6' && foodbankAprContents.kpi4 < '20.75')?'yellow-7':(foodbankAprContents.kpi4 >= '20.75' && foodbankAprContents.kpi4 < '24.9')?'green':(foodbankAprContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi5 == null)?'grey-2':(foodbankAprContents.kpi5 >= '0' && foodbankAprContents.kpi5 <= '92.4')?'red':(foodbankAprContents.kpi5 > '92.4' && foodbankAprContents.kpi5 <= '123.2')?'orange':(foodbankAprContents.kpi5 > '123.2' && foodbankAprContents.kpi5 < '154')?'yellow-7':(foodbankAprContents.kpi5 >= '154' && foodbankAprContents.kpi5 < '184.8')?'green':(foodbankAprContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi6 == null)?'grey-2':(foodbankAprContents.kpi6 >= '0' && foodbankAprContents.kpi6 <= '14.7')?'red':(foodbankAprContents.kpi6 > '14.7' && foodbankAprContents.kpi6 <= '19.6')?'orange':(foodbankAprContents.kpi6 > '19.6' && foodbankAprContents.kpi6 < '24.5')?'yellow-7':(foodbankAprContents.kpi6 >= '24.5' && foodbankAprContents.kpi6 < '29.4')?'green':(foodbankAprContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankMayContents.kpi1 == null)?'grey-2':(foodbankMayContents.kpi1 >= '0' && foodbankMayContents.kpi1 <= '238.8')?'red':(foodbankMayContents.kpi1 > '238.8' && foodbankMayContents.kpi1 <= '318.4')?'orange':(foodbankMayContents.kpi1 > '318.4' && foodbankMayContents.kpi1 < '398')?'yellow-7':(foodbankMayContents.kpi1 >= '398' && foodbankMayContents.kpi1 < '477.6')?'green':(foodbankMayContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi2 == null)?'grey-2':(foodbankMayContents.kpi2 >= '0' && foodbankMayContents.kpi2 <= '244.2')?'red':(foodbankMayContents.kpi2 > '244.2' && foodbankMayContents.kpi2 <= '325.6')?'orange':(foodbankMayContents.kpi2 > '325.6' && foodbankMayContents.kpi2 < '407')?'yellow-7':(foodbankMayContents.kpi2 >= '407' && foodbankMayContents.kpi2 < '488.4')?'green':(foodbankMayContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi3 == null)?'grey-2':(foodbankMayContents.kpi3 >= '0' && foodbankMayContents.kpi3 <= '524.25')?'red':(foodbankMayContents.kpi3 > '524.25' && foodbankMayContents.kpi3 <= '699')?'orange':(foodbankMayContents.kpi3 > '699' && foodbankMayContents.kpi3 < '873.75')?'yellow-7':(foodbankMayContents.kpi3 >= '873.75' && foodbankMayContents.kpi3 < '1048.5')?'green':(foodbankMayContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi4 == null)?'grey-2':(foodbankMayContents.kpi4 >= '0' && foodbankMayContents.kpi4 <= '12.45')?'red':(foodbankMayContents.kpi4 > '12.45' && foodbankMayContents.kpi4 <= '16.6')?'orange':(foodbankMayContents.kpi4 > '16.6' && foodbankMayContents.kpi4 < '20.75')?'yellow-7':(foodbankMayContents.kpi4 >= '20.75' && foodbankMayContents.kpi4 < '24.9')?'green':(foodbankMayContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi5 == null)?'grey-2':(foodbankMayContents.kpi5 >= '0' && foodbankMayContents.kpi5 <= '92.4')?'red':(foodbankMayContents.kpi5 > '92.4' && foodbankMayContents.kpi5 <= '123.2')?'orange':(foodbankMayContents.kpi5 > '123.2' && foodbankMayContents.kpi5 < '154')?'yellow-7':(foodbankMayContents.kpi5 >= '154' && foodbankMayContents.kpi5 < '184.8')?'green':(foodbankMayContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi6 == null)?'grey-2':(foodbankMayContents.kpi6 >= '0' && foodbankMayContents.kpi6 <= '14.7')?'red':(foodbankMayContents.kpi6 > '14.7' && foodbankMayContents.kpi6 <= '19.6')?'orange':(foodbankMayContents.kpi6 > '19.6' && foodbankMayContents.kpi6 < '24.5')?'yellow-7':(foodbankMayContents.kpi6 >= '24.5' && foodbankMayContents.kpi6 < '29.4')?'green':(foodbankMayContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankJunContents.kpi1 == null)?'grey-2':(foodbankJunContents.kpi1 >= '0' && foodbankJunContents.kpi1 <= '238.8')?'red':(foodbankJunContents.kpi1 > '238.8' && foodbankJunContents.kpi1 <= '318.4')?'orange':(foodbankJunContents.kpi1 > '318.4' && foodbankJunContents.kpi1 < '398')?'yellow-7':(foodbankJunContents.kpi1 >= '398' && foodbankJunContents.kpi1 < '477.6')?'green':(foodbankJunContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi2 == null)?'grey-2':(foodbankJunContents.kpi2 >= '0' && foodbankJunContents.kpi2 <= '244.2')?'red':(foodbankJunContents.kpi2 > '244.2' && foodbankJunContents.kpi2 <= '325.6')?'orange':(foodbankJunContents.kpi2 > '325.6' && foodbankJunContents.kpi2 < '407')?'yellow-7':(foodbankJunContents.kpi2 >= '407' && foodbankJunContents.kpi2 < '488.4')?'green':(foodbankJunContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi3 == null)?'grey-2':(foodbankJunContents.kpi3 >= '0' && foodbankJunContents.kpi3 <= '524.25')?'red':(foodbankJunContents.kpi3 > '524.25' && foodbankJunContents.kpi3 <= '699')?'orange':(foodbankJunContents.kpi3 > '699' && foodbankJunContents.kpi3 < '873.75')?'yellow-7':(foodbankJunContents.kpi3 >= '873.75' && foodbankJunContents.kpi3 < '1048.5')?'green':(foodbankJunContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi4 == null)?'grey-2':(foodbankJunContents.kpi4 >= '0' && foodbankJunContents.kpi4 <= '12.45')?'red':(foodbankJunContents.kpi4 > '12.45' && foodbankJunContents.kpi4 <= '16.6')?'orange':(foodbankJunContents.kpi4 > '16.6' && foodbankJunContents.kpi4 < '20.75')?'yellow-7':(foodbankJunContents.kpi4 >= '20.75' && foodbankJunContents.kpi4 < '24.9')?'green':(foodbankJunContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi5 == null)?'grey-2':(foodbankJunContents.kpi5 >= '0' && foodbankJunContents.kpi5 <= '92.4')?'red':(foodbankJunContents.kpi5 > '92.4' && foodbankJunContents.kpi5 <= '123.2')?'orange':(foodbankJunContents.kpi5 > '123.2' && foodbankJunContents.kpi5 < '154')?'yellow-7':(foodbankJunContents.kpi5 >= '154' && foodbankJunContents.kpi5 < '184.8')?'green':(foodbankJunContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi6 == null)?'grey-2':(foodbankJunContents.kpi6 >= '0' && foodbankJunContents.kpi6 <= '14.7')?'red':(foodbankJunContents.kpi6 > '14.7' && foodbankJunContents.kpi6 <= '19.6')?'orange':(foodbankJunContents.kpi6 > '19.6' && foodbankJunContents.kpi6 < '24.5')?'yellow-7':(foodbankJunContents.kpi6 >= '24.5' && foodbankJunContents.kpi6 < '29.4')?'green':(foodbankJunContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankJulContents.kpi1 == null)?'grey-2':(foodbankJulContents.kpi1 >= '0' && foodbankJulContents.kpi1 <= '238.8')?'red':(foodbankJulContents.kpi1 > '238.8' && foodbankJulContents.kpi1 <= '318.4')?'orange':(foodbankJulContents.kpi1 > '318.4' && foodbankJulContents.kpi1 < '398')?'yellow-7':(foodbankJulContents.kpi1 >= '398' && foodbankJulContents.kpi1 < '477.6')?'green':(foodbankJulContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi2 == null)?'grey-2':(foodbankJulContents.kpi2 >= '0' && foodbankJulContents.kpi2 <= '244.2')?'red':(foodbankJulContents.kpi2 > '244.2' && foodbankJulContents.kpi2 <= '325.6')?'orange':(foodbankJulContents.kpi2 > '325.6' && foodbankJulContents.kpi2 < '407')?'yellow-7':(foodbankJulContents.kpi2 >= '407' && foodbankJulContents.kpi2 < '488.4')?'green':(foodbankJulContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi3 == null)?'grey-2':(foodbankJulContents.kpi3 >= '0' && foodbankJulContents.kpi3 <= '524.25')?'red':(foodbankJulContents.kpi3 > '524.25' && foodbankJulContents.kpi3 <= '699')?'orange':(foodbankJulContents.kpi3 > '699' && foodbankJulContents.kpi3 < '873.75')?'yellow-7':(foodbankJulContents.kpi3 >= '873.75' && foodbankJulContents.kpi3 < '1048.5')?'green':(foodbankJulContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi4 == null)?'grey-2':(foodbankJulContents.kpi4 >= '0' && foodbankJulContents.kpi4 <= '12.45')?'red':(foodbankJulContents.kpi4 > '12.45' && foodbankJulContents.kpi4 <= '16.6')?'orange':(foodbankJulContents.kpi4 > '16.6' && foodbankJulContents.kpi4 < '20.75')?'yellow-7':(foodbankJulContents.kpi4 >= '20.75' && foodbankJulContents.kpi4 < '24.9')?'green':(foodbankJulContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi5 == null)?'grey-2':(foodbankJulContents.kpi5 >= '0' && foodbankJulContents.kpi5 <= '92.4')?'red':(foodbankJulContents.kpi5 > '92.4' && foodbankJulContents.kpi5 <= '123.2')?'orange':(foodbankJulContents.kpi5 > '123.2' && foodbankJulContents.kpi5 < '154')?'yellow-7':(foodbankJulContents.kpi5 >= '154' && foodbankJulContents.kpi5 < '184.8')?'green':(foodbankJulContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi6 == null)?'grey-2':(foodbankJulContents.kpi6 >= '0' && foodbankJulContents.kpi6 <= '14.7')?'red':(foodbankJulContents.kpi6 > '14.7' && foodbankJulContents.kpi6 <= '19.6')?'orange':(foodbankJulContents.kpi6 > '19.6' && foodbankJulContents.kpi6 < '24.5')?'yellow-7':(foodbankJulContents.kpi6 >= '24.5' && foodbankJulContents.kpi6 < '29.4')?'green':(foodbankJulContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankAugContents.kpi1 == null)?'grey-2':(foodbankAugContents.kpi1 >= '0' && foodbankAugContents.kpi1 <= '238.8')?'red':(foodbankAugContents.kpi1 > '238.8' && foodbankAugContents.kpi1 <= '318.4')?'orange':(foodbankAugContents.kpi1 > '318.4' && foodbankAugContents.kpi1 < '398')?'yellow-7':(foodbankAugContents.kpi1 >= '398' && foodbankAugContents.kpi1 < '477.6')?'green':(foodbankAugContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi2 == null)?'grey-2':(foodbankAugContents.kpi2 >= '0' && foodbankAugContents.kpi2 <= '244.2')?'red':(foodbankAugContents.kpi2 > '244.2' && foodbankAugContents.kpi2 <= '325.6')?'orange':(foodbankAugContents.kpi2 > '325.6' && foodbankAugContents.kpi2 < '407')?'yellow-7':(foodbankAugContents.kpi2 >= '407' && foodbankAugContents.kpi2 < '488.4')?'green':(foodbankAugContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi3 == null)?'grey-2':(foodbankAugContents.kpi3 >= '0' && foodbankAugContents.kpi3 <= '524.25')?'red':(foodbankAugContents.kpi3 > '524.25' && foodbankAugContents.kpi3 <= '699')?'orange':(foodbankAugContents.kpi3 > '699' && foodbankAugContents.kpi3 < '873.75')?'yellow-7':(foodbankAugContents.kpi3 >= '873.75' && foodbankAugContents.kpi3 < '1048.5')?'green':(foodbankAugContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi4 == null)?'grey-2':(foodbankAugContents.kpi4 >= '0' && foodbankAugContents.kpi4 <= '12.45')?'red':(foodbankAugContents.kpi4 > '12.45' && foodbankAugContents.kpi4 <= '16.6')?'orange':(foodbankAugContents.kpi4 > '16.6' && foodbankAugContents.kpi4 < '20.75')?'yellow-7':(foodbankAugContents.kpi4 >= '20.75' && foodbankAugContents.kpi4 < '24.9')?'green':(foodbankAugContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi5 == null)?'grey-2':(foodbankAugContents.kpi5 >= '0' && foodbankAugContents.kpi5 <= '92.4')?'red':(foodbankAugContents.kpi5 > '92.4' && foodbankAugContents.kpi5 <= '123.2')?'orange':(foodbankAugContents.kpi5 > '123.2' && foodbankAugContents.kpi5 < '154')?'yellow-7':(foodbankAugContents.kpi5 >= '154' && foodbankAugContents.kpi5 < '184.8')?'green':(foodbankAugContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi6 == null)?'grey-2':(foodbankAugContents.kpi6 >= '0' && foodbankAugContents.kpi6 <= '14.7')?'red':(foodbankAugContents.kpi6 > '14.7' && foodbankAugContents.kpi6 <= '19.6')?'orange':(foodbankAugContents.kpi6 > '19.6' && foodbankAugContents.kpi6 < '24.5')?'yellow-7':(foodbankAugContents.kpi6 >= '24.5' && foodbankAugContents.kpi6 < '29.4')?'green':(foodbankAugContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankSepContents.kpi1 == null)?'grey-2':(foodbankSepContents.kpi1 >= '0' && foodbankSepContents.kpi1 <= '238.8')?'red':(foodbankSepContents.kpi1 > '238.8' && foodbankSepContents.kpi1 <= '318.4')?'orange':(foodbankSepContents.kpi1 > '318.4' && foodbankSepContents.kpi1 < '398')?'yellow-7':(foodbankSepContents.kpi1 >= '398' && foodbankSepContents.kpi1 < '477.6')?'green':(foodbankSepContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi2 == null)?'grey-2':(foodbankSepContents.kpi2 >= '0' && foodbankSepContents.kpi2 <= '244.2')?'red':(foodbankSepContents.kpi2 > '244.2' && foodbankSepContents.kpi2 <= '325.6')?'orange':(foodbankSepContents.kpi2 > '325.6' && foodbankSepContents.kpi2 < '407')?'yellow-7':(foodbankSepContents.kpi2 >= '407' && foodbankSepContents.kpi2 < '488.4')?'green':(foodbankSepContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi3 == null)?'grey-2':(foodbankSepContents.kpi3 >= '0' && foodbankSepContents.kpi3 <= '524.25')?'red':(foodbankSepContents.kpi3 > '524.25' && foodbankSepContents.kpi3 <= '699')?'orange':(foodbankSepContents.kpi3 > '699' && foodbankSepContents.kpi3 < '873.75')?'yellow-7':(foodbankSepContents.kpi3 >= '873.75' && foodbankSepContents.kpi3 < '1048.5')?'green':(foodbankSepContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi4 == null)?'grey-2':(foodbankSepContents.kpi4 >= '0' && foodbankSepContents.kpi4 <= '12.45')?'red':(foodbankSepContents.kpi4 > '12.45' && foodbankSepContents.kpi4 <= '16.6')?'orange':(foodbankSepContents.kpi4 > '16.6' && foodbankSepContents.kpi4 < '20.75')?'yellow-7':(foodbankSepContents.kpi4 >= '20.75' && foodbankSepContents.kpi4 < '24.9')?'green':(foodbankSepContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi5 == null)?'grey-2':(foodbankSepContents.kpi5 >= '0' && foodbankSepContents.kpi5 <= '92.4')?'red':(foodbankSepContents.kpi5 > '92.4' && foodbankSepContents.kpi5 <= '123.2')?'orange':(foodbankSepContents.kpi5 > '123.2' && foodbankSepContents.kpi5 < '154')?'yellow-7':(foodbankSepContents.kpi5 >= '154' && foodbankSepContents.kpi5 < '184.8')?'green':(foodbankSepContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi6 == null)?'grey-2':(foodbankSepContents.kpi6 >= '0' && foodbankSepContents.kpi6 <= '14.7')?'red':(foodbankSepContents.kpi6 > '14.7' && foodbankSepContents.kpi6 <= '19.6')?'orange':(foodbankSepContents.kpi6 > '19.6' && foodbankSepContents.kpi6 < '24.5')?'yellow-7':(foodbankSepContents.kpi6 >= '24.5' && foodbankSepContents.kpi6 < '29.4')?'green':(foodbankSepContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankOctContents.kpi1 == null)?'grey-2':(foodbankOctContents.kpi1 >= '0' && foodbankOctContents.kpi1 <= '238.8')?'red':(foodbankOctContents.kpi1 > '238.8' && foodbankOctContents.kpi1 <= '318.4')?'orange':(foodbankOctContents.kpi1 > '318.4' && foodbankOctContents.kpi1 < '398')?'yellow-7':(foodbankOctContents.kpi1 >= '398' && foodbankOctContents.kpi1 < '477.6')?'green':(foodbankOctContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi2 == null)?'grey-2':(foodbankOctContents.kpi2 >= '0' && foodbankOctContents.kpi2 <= '244.2')?'red':(foodbankOctContents.kpi2 > '244.2' && foodbankOctContents.kpi2 <= '325.6')?'orange':(foodbankOctContents.kpi2 > '325.6' && foodbankOctContents.kpi2 < '407')?'yellow-7':(foodbankOctContents.kpi2 >= '407' && foodbankOctContents.kpi2 < '488.4')?'green':(foodbankOctContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi3 == null)?'grey-2':(foodbankOctContents.kpi3 >= '0' && foodbankOctContents.kpi3 <= '524.25')?'red':(foodbankOctContents.kpi3 > '524.25' && foodbankOctContents.kpi3 <= '699')?'orange':(foodbankOctContents.kpi3 > '699' && foodbankOctContents.kpi3 < '873.75')?'yellow-7':(foodbankOctContents.kpi3 >= '873.75' && foodbankOctContents.kpi3 < '1048.5')?'green':(foodbankOctContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi4 == null)?'grey-2':(foodbankOctContents.kpi4 >= '0' && foodbankOctContents.kpi4 <= '12.45')?'red':(foodbankOctContents.kpi4 > '12.45' && foodbankOctContents.kpi4 <= '16.6')?'orange':(foodbankOctContents.kpi4 > '16.6' && foodbankOctContents.kpi4 < '20.75')?'yellow-7':(foodbankOctContents.kpi4 >= '20.75' && foodbankOctContents.kpi4 < '24.9')?'green':(foodbankOctContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi5 == null)?'grey-2':(foodbankOctContents.kpi5 >= '0' && foodbankOctContents.kpi5 <= '92.4')?'red':(foodbankOctContents.kpi5 > '92.4' && foodbankOctContents.kpi5 <= '123.2')?'orange':(foodbankOctContents.kpi5 > '123.2' && foodbankOctContents.kpi5 < '154')?'yellow-7':(foodbankOctContents.kpi5 >= '154' && foodbankOctContents.kpi5 < '184.8')?'green':(foodbankOctContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi6 == null)?'grey-2':(foodbankOctContents.kpi6 >= '0' && foodbankOctContents.kpi6 <= '14.7')?'red':(foodbankOctContents.kpi6 > '14.7' && foodbankOctContents.kpi6 <= '19.6')?'orange':(foodbankOctContents.kpi6 > '19.6' && foodbankOctContents.kpi6 < '24.5')?'yellow-7':(foodbankOctContents.kpi6 >= '24.5' && foodbankOctContents.kpi6 < '29.4')?'green':(foodbankOctContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankNovContents.kpi1 == null)?'grey-2':(foodbankNovContents.kpi1 >= '0' && foodbankNovContents.kpi1 <= '238.8')?'red':(foodbankNovContents.kpi1 > '238.8' && foodbankNovContents.kpi1 <= '318.4')?'orange':(foodbankNovContents.kpi1 > '318.4' && foodbankNovContents.kpi1 < '398')?'yellow-7':(foodbankNovContents.kpi1 >= '398' && foodbankNovContents.kpi1 < '477.6')?'green':(foodbankNovContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi2 == null)?'grey-2':(foodbankNovContents.kpi2 >= '0' && foodbankNovContents.kpi2 <= '244.2')?'red':(foodbankNovContents.kpi2 > '244.2' && foodbankNovContents.kpi2 <= '325.6')?'orange':(foodbankNovContents.kpi2 > '325.6' && foodbankNovContents.kpi2 < '407')?'yellow-7':(foodbankNovContents.kpi2 >= '407' && foodbankNovContents.kpi2 < '488.4')?'green':(foodbankNovContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi3 == null)?'grey-2':(foodbankNovContents.kpi3 >= '0' && foodbankNovContents.kpi3 <= '524.25')?'red':(foodbankNovContents.kpi3 > '524.25' && foodbankNovContents.kpi3 <= '699')?'orange':(foodbankNovContents.kpi3 > '699' && foodbankNovContents.kpi3 < '873.75')?'yellow-7':(foodbankNovContents.kpi3 >= '873.75' && foodbankNovContents.kpi3 < '1048.5')?'green':(foodbankNovContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi4 == null)?'grey-2':(foodbankNovContents.kpi4 >= '0' && foodbankNovContents.kpi4 <= '12.45')?'red':(foodbankNovContents.kpi4 > '12.45' && foodbankNovContents.kpi4 <= '16.6')?'orange':(foodbankNovContents.kpi4 > '16.6' && foodbankNovContents.kpi4 < '20.75')?'yellow-7':(foodbankNovContents.kpi4 >= '20.75' && foodbankNovContents.kpi4 < '24.9')?'green':(foodbankNovContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi5 == null)?'grey-2':(foodbankNovContents.kpi5 >= '0' && foodbankNovContents.kpi5 <= '92.4')?'red':(foodbankNovContents.kpi5 > '92.4' && foodbankNovContents.kpi5 <= '123.2')?'orange':(foodbankNovContents.kpi5 > '123.2' && foodbankNovContents.kpi5 < '154')?'yellow-7':(foodbankNovContents.kpi5 >= '154' && foodbankNovContents.kpi5 < '184.8')?'green':(foodbankNovContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi6 == null)?'grey-2':(foodbankNovContents.kpi6 >= '0' && foodbankNovContents.kpi6 <= '14.7')?'red':(foodbankNovContents.kpi6 > '14.7' && foodbankNovContents.kpi6 <= '19.6')?'orange':(foodbankNovContents.kpi6 > '19.6' && foodbankNovContents.kpi6 < '24.5')?'yellow-7':(foodbankNovContents.kpi6 >= '24.5' && foodbankNovContents.kpi6 < '29.4')?'green':(foodbankNovContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankDecContents.kpi1 == null)?'grey-2':(foodbankDecContents.kpi1 >= '0' && foodbankDecContents.kpi1 <= '238.8')?'red':(foodbankDecContents.kpi1 > '238.8' && foodbankDecContents.kpi1 <= '318.4')?'orange':(foodbankDecContents.kpi1 > '318.4' && foodbankDecContents.kpi1 < '398')?'yellow-7':(foodbankDecContents.kpi1 >= '398' && foodbankDecContents.kpi1 < '477.6')?'green':(foodbankDecContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi2 == null)?'grey-2':(foodbankDecContents.kpi2 >= '0' && foodbankDecContents.kpi2 <= '244.2')?'red':(foodbankDecContents.kpi2 > '244.2' && foodbankDecContents.kpi2 <= '325.6')?'orange':(foodbankDecContents.kpi2 > '325.6' && foodbankDecContents.kpi2 < '407')?'yellow-7':(foodbankDecContents.kpi2 >= '407' && foodbankDecContents.kpi2 < '488.4')?'green':(foodbankDecContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi3 == null)?'grey-2':(foodbankDecContents.kpi3 >= '0' && foodbankDecContents.kpi3 <= '524.25')?'red':(foodbankDecContents.kpi3 > '524.25' && foodbankDecContents.kpi3 <= '699')?'orange':(foodbankDecContents.kpi3 > '699' && foodbankDecContents.kpi3 < '873.75')?'yellow-7':(foodbankDecContents.kpi3 >= '873.75' && foodbankDecContents.kpi3 < '1048.5')?'green':(foodbankDecContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi4 == null)?'grey-2':(foodbankDecContents.kpi4 >= '0' && foodbankDecContents.kpi4 <= '12.45')?'red':(foodbankDecContents.kpi4 > '12.45' && foodbankDecContents.kpi4 <= '16.6')?'orange':(foodbankDecContents.kpi4 > '16.6' && foodbankDecContents.kpi4 < '20.75')?'yellow-7':(foodbankDecContents.kpi4 >= '20.75' && foodbankDecContents.kpi4 < '24.9')?'green':(foodbankDecContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi5 == null)?'grey-2':(foodbankDecContents.kpi5 >= '0' && foodbankDecContents.kpi5 <= '92.4')?'red':(foodbankDecContents.kpi5 > '92.4' && foodbankDecContents.kpi5 <= '123.2')?'orange':(foodbankDecContents.kpi5 > '123.2' && foodbankDecContents.kpi5 < '154')?'yellow-7':(foodbankDecContents.kpi5 >= '154' && foodbankDecContents.kpi5 < '184.8')?'green':(foodbankDecContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi6 == null)?'grey-2':(foodbankDecContents.kpi6 >= '0' && foodbankDecContents.kpi6 <= '14.7')?'red':(foodbankDecContents.kpi6 > '14.7' && foodbankDecContents.kpi6 <= '19.6')?'orange':(foodbankDecContents.kpi6 > '19.6' && foodbankDecContents.kpi6 < '24.5')?'yellow-7':(foodbankDecContents.kpi6 >= '24.5' && foodbankDecContents.kpi6 < '29.4')?'green':(foodbankDecContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip>Activities (#)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 5
                                <q-tooltip># Households Receiving Deliveries</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 6
                                <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankJanContents.kpi1 == null)?'grey-2':(foodbankJanContents.kpi1 >= '0' && foodbankJanContents.kpi1 <= '238.8')?'red':(foodbankJanContents.kpi1 > '238.8' && foodbankJanContents.kpi1 <= '318.4')?'orange':(foodbankJanContents.kpi1 > '318.4' && foodbankJanContents.kpi1 < '398')?'yellow-7':(foodbankJanContents.kpi1 >= '398' && foodbankJanContents.kpi1 < '477.6')?'green':(foodbankJanContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi2 == null)?'grey-2':(foodbankJanContents.kpi2 >= '0' && foodbankJanContents.kpi2 <= '244.2')?'red':(foodbankJanContents.kpi2 > '244.2' && foodbankJanContents.kpi2 <= '325.6')?'orange':(foodbankJanContents.kpi2 > '325.6' && foodbankJanContents.kpi2 < '407')?'yellow-7':(foodbankJanContents.kpi2 >= '407' && foodbankJanContents.kpi2 < '488.4')?'green':(foodbankJanContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi3 == null)?'grey-2':(foodbankJanContents.kpi3 >= '0' && foodbankJanContents.kpi3 <= '524.25')?'red':(foodbankJanContents.kpi3 > '524.25' && foodbankJanContents.kpi3 <= '699')?'orange':(foodbankJanContents.kpi3 > '699' && foodbankJanContents.kpi3 < '873.75')?'yellow-7':(foodbankJanContents.kpi3 >= '873.75' && foodbankJanContents.kpi3 < '1048.5')?'green':(foodbankJanContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi4 == null)?'grey-2':(foodbankJanContents.kpi4 >= '0' && foodbankJanContents.kpi4 <= '12.45')?'red':(foodbankJanContents.kpi4 > '12.45' && foodbankJanContents.kpi4 <= '16.6')?'orange':(foodbankJanContents.kpi4 > '16.6' && foodbankJanContents.kpi4 < '20.75')?'yellow-7':(foodbankJanContents.kpi4 >= '20.75' && foodbankJanContents.kpi4 < '24.9')?'green':(foodbankJanContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi5 == null)?'grey-2':(foodbankJanContents.kpi5 >= '0' && foodbankJanContents.kpi5 <= '92.4')?'red':(foodbankJanContents.kpi5 > '92.4' && foodbankJanContents.kpi5 <= '123.2')?'orange':(foodbankJanContents.kpi5 > '123.2' && foodbankJanContents.kpi5 < '154')?'yellow-7':(foodbankJanContents.kpi5 >= '154' && foodbankJanContents.kpi5 < '184.8')?'green':(foodbankJanContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi6 == null)?'grey-2':(foodbankJanContents.kpi6 >= '0' && foodbankJanContents.kpi6 <= '14.7')?'red':(foodbankJanContents.kpi6 > '14.7' && foodbankJanContents.kpi6 <= '19.6')?'orange':(foodbankJanContents.kpi6 > '19.6' && foodbankJanContents.kpi6 < '24.5')?'yellow-7':(foodbankJanContents.kpi6 >= '24.5' && foodbankJanContents.kpi6 < '29.4')?'green':(foodbankJanContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankFebContents.kpi1 == null)?'grey-2':(foodbankFebContents.kpi1 >= '0' && foodbankFebContents.kpi1 <= '238.8')?'red':(foodbankFebContents.kpi1 > '238.8' && foodbankFebContents.kpi1 <= '318.4')?'orange':(foodbankFebContents.kpi1 > '318.4' && foodbankFebContents.kpi1 < '398')?'yellow-7':(foodbankFebContents.kpi1 >= '398' && foodbankFebContents.kpi1 < '477.6')?'green':(foodbankFebContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi2 == null)?'grey-2':(foodbankFebContents.kpi2 >= '0' && foodbankFebContents.kpi2 <= '244.2')?'red':(foodbankFebContents.kpi2 > '244.2' && foodbankFebContents.kpi2 <= '325.6')?'orange':(foodbankFebContents.kpi2 > '325.6' && foodbankFebContents.kpi2 < '407')?'yellow-7':(foodbankFebContents.kpi2 >= '407' && foodbankFebContents.kpi2 < '488.4')?'green':(foodbankFebContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi3 == null)?'grey-2':(foodbankFebContents.kpi3 >= '0' && foodbankFebContents.kpi3 <= '524.25')?'red':(foodbankFebContents.kpi3 > '524.25' && foodbankFebContents.kpi3 <= '699')?'orange':(foodbankFebContents.kpi3 > '699' && foodbankFebContents.kpi3 < '873.75')?'yellow-7':(foodbankFebContents.kpi3 >= '873.75' && foodbankFebContents.kpi3 < '1048.5')?'green':(foodbankFebContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi4 == null)?'grey-2':(foodbankFebContents.kpi4 >= '0' && foodbankFebContents.kpi4 <= '12.45')?'red':(foodbankFebContents.kpi4 > '12.45' && foodbankFebContents.kpi4 <= '16.6')?'orange':(foodbankFebContents.kpi4 > '16.6' && foodbankFebContents.kpi4 < '20.75')?'yellow-7':(foodbankFebContents.kpi4 >= '20.75' && foodbankFebContents.kpi4 < '24.9')?'green':(foodbankFebContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi5 == null)?'grey-2':(foodbankFebContents.kpi5 >= '0' && foodbankFebContents.kpi5 <= '92.4')?'red':(foodbankFebContents.kpi5 > '92.4' && foodbankFebContents.kpi5 <= '123.2')?'orange':(foodbankFebContents.kpi5 > '123.2' && foodbankFebContents.kpi5 < '154')?'yellow-7':(foodbankFebContents.kpi5 >= '154' && foodbankFebContents.kpi5 < '184.8')?'green':(foodbankFebContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi6 == null)?'grey-2':(foodbankFebContents.kpi6 >= '0' && foodbankFebContents.kpi6 <= '14.7')?'red':(foodbankFebContents.kpi6 > '14.7' && foodbankFebContents.kpi6 <= '19.6')?'orange':(foodbankFebContents.kpi6 > '19.6' && foodbankFebContents.kpi6 < '24.5')?'yellow-7':(foodbankFebContents.kpi6 >= '24.5' && foodbankFebContents.kpi6 < '29.4')?'green':(foodbankFebContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankMarContents.kpi1 == null)?'grey-2':(foodbankMarContents.kpi1 >= '0' && foodbankMarContents.kpi1 <= '238.8')?'red':(foodbankMarContents.kpi1 > '238.8' && foodbankMarContents.kpi1 <= '318.4')?'orange':(foodbankMarContents.kpi1 > '318.4' && foodbankMarContents.kpi1 < '398')?'yellow-7':(foodbankMarContents.kpi1 >= '398' && foodbankMarContents.kpi1 < '477.6')?'green':(foodbankMarContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi2 == null)?'grey-2':(foodbankMarContents.kpi2 >= '0' && foodbankMarContents.kpi2 <= '244.2')?'red':(foodbankMarContents.kpi2 > '244.2' && foodbankMarContents.kpi2 <= '325.6')?'orange':(foodbankMarContents.kpi2 > '325.6' && foodbankMarContents.kpi2 < '407')?'yellow-7':(foodbankMarContents.kpi2 >= '407' && foodbankMarContents.kpi2 < '488.4')?'green':(foodbankMarContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi3 == null)?'grey-2':(foodbankMarContents.kpi3 >= '0' && foodbankMarContents.kpi3 <= '524.25')?'red':(foodbankMarContents.kpi3 > '524.25' && foodbankMarContents.kpi3 <= '699')?'orange':(foodbankMarContents.kpi3 > '699' && foodbankMarContents.kpi3 < '873.75')?'yellow-7':(foodbankMarContents.kpi3 >= '873.75' && foodbankMarContents.kpi3 < '1048.5')?'green':(foodbankMarContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi4 == null)?'grey-2':(foodbankMarContents.kpi4 >= '0' && foodbankMarContents.kpi4 <= '12.45')?'red':(foodbankMarContents.kpi4 > '12.45' && foodbankMarContents.kpi4 <= '16.6')?'orange':(foodbankMarContents.kpi4 > '16.6' && foodbankMarContents.kpi4 < '20.75')?'yellow-7':(foodbankMarContents.kpi4 >= '20.75' && foodbankMarContents.kpi4 < '24.9')?'green':(foodbankMarContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi5 == null)?'grey-2':(foodbankMarContents.kpi5 >= '0' && foodbankMarContents.kpi5 <= '92.4')?'red':(foodbankMarContents.kpi5 > '92.4' && foodbankMarContents.kpi5 <= '123.2')?'orange':(foodbankMarContents.kpi5 > '123.2' && foodbankMarContents.kpi5 < '154')?'yellow-7':(foodbankMarContents.kpi5 >= '154' && foodbankMarContents.kpi5 < '184.8')?'green':(foodbankMarContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi6 == null)?'grey-2':(foodbankMarContents.kpi6 >= '0' && foodbankMarContents.kpi6 <= '14.7')?'red':(foodbankMarContents.kpi6 > '14.7' && foodbankMarContents.kpi6 <= '19.6')?'orange':(foodbankMarContents.kpi6 > '19.6' && foodbankMarContents.kpi6 < '24.5')?'yellow-7':(foodbankMarContents.kpi6 >= '24.5' && foodbankMarContents.kpi6 < '29.4')?'green':(foodbankMarContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankAprContents.kpi1 == null)?'grey-2':(foodbankAprContents.kpi1 >= '0' && foodbankAprContents.kpi1 <= '238.8')?'red':(foodbankAprContents.kpi1 > '238.8' && foodbankAprContents.kpi1 <= '318.4')?'orange':(foodbankAprContents.kpi1 > '318.4' && foodbankAprContents.kpi1 < '398')?'yellow-7':(foodbankAprContents.kpi1 >= '398' && foodbankAprContents.kpi1 < '477.6')?'green':(foodbankAprContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi2 == null)?'grey-2':(foodbankAprContents.kpi2 >= '0' && foodbankAprContents.kpi2 <= '244.2')?'red':(foodbankAprContents.kpi2 > '244.2' && foodbankAprContents.kpi2 <= '325.6')?'orange':(foodbankAprContents.kpi2 > '325.6' && foodbankAprContents.kpi2 < '407')?'yellow-7':(foodbankAprContents.kpi2 >= '407' && foodbankAprContents.kpi2 < '488.4')?'green':(foodbankAprContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi3 == null)?'grey-2':(foodbankAprContents.kpi3 >= '0' && foodbankAprContents.kpi3 <= '524.25')?'red':(foodbankAprContents.kpi3 > '524.25' && foodbankAprContents.kpi3 <= '699')?'orange':(foodbankAprContents.kpi3 > '699' && foodbankAprContents.kpi3 < '873.75')?'yellow-7':(foodbankAprContents.kpi3 >= '873.75' && foodbankAprContents.kpi3 < '1048.5')?'green':(foodbankAprContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi4 == null)?'grey-2':(foodbankAprContents.kpi4 >= '0' && foodbankAprContents.kpi4 <= '12.45')?'red':(foodbankAprContents.kpi4 > '12.45' && foodbankAprContents.kpi4 <= '16.6')?'orange':(foodbankAprContents.kpi4 > '16.6' && foodbankAprContents.kpi4 < '20.75')?'yellow-7':(foodbankAprContents.kpi4 >= '20.75' && foodbankAprContents.kpi4 < '24.9')?'green':(foodbankAprContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi5 == null)?'grey-2':(foodbankAprContents.kpi5 >= '0' && foodbankAprContents.kpi5 <= '92.4')?'red':(foodbankAprContents.kpi5 > '92.4' && foodbankAprContents.kpi5 <= '123.2')?'orange':(foodbankAprContents.kpi5 > '123.2' && foodbankAprContents.kpi5 < '154')?'yellow-7':(foodbankAprContents.kpi5 >= '154' && foodbankAprContents.kpi5 < '184.8')?'green':(foodbankAprContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi6 == null)?'grey-2':(foodbankAprContents.kpi6 >= '0' && foodbankAprContents.kpi6 <= '14.7')?'red':(foodbankAprContents.kpi6 > '14.7' && foodbankAprContents.kpi6 <= '19.6')?'orange':(foodbankAprContents.kpi6 > '19.6' && foodbankAprContents.kpi6 < '24.5')?'yellow-7':(foodbankAprContents.kpi6 >= '24.5' && foodbankAprContents.kpi6 < '29.4')?'green':(foodbankAprContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankMayContents.kpi1 == null)?'grey-2':(foodbankMayContents.kpi1 >= '0' && foodbankMayContents.kpi1 <= '238.8')?'red':(foodbankMayContents.kpi1 > '238.8' && foodbankMayContents.kpi1 <= '318.4')?'orange':(foodbankMayContents.kpi1 > '318.4' && foodbankMayContents.kpi1 < '398')?'yellow-7':(foodbankMayContents.kpi1 >= '398' && foodbankMayContents.kpi1 < '477.6')?'green':(foodbankMayContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi2 == null)?'grey-2':(foodbankMayContents.kpi2 >= '0' && foodbankMayContents.kpi2 <= '244.2')?'red':(foodbankMayContents.kpi2 > '244.2' && foodbankMayContents.kpi2 <= '325.6')?'orange':(foodbankMayContents.kpi2 > '325.6' && foodbankMayContents.kpi2 < '407')?'yellow-7':(foodbankMayContents.kpi2 >= '407' && foodbankMayContents.kpi2 < '488.4')?'green':(foodbankMayContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi3 == null)?'grey-2':(foodbankMayContents.kpi3 >= '0' && foodbankMayContents.kpi3 <= '524.25')?'red':(foodbankMayContents.kpi3 > '524.25' && foodbankMayContents.kpi3 <= '699')?'orange':(foodbankMayContents.kpi3 > '699' && foodbankMayContents.kpi3 < '873.75')?'yellow-7':(foodbankMayContents.kpi3 >= '873.75' && foodbankMayContents.kpi3 < '1048.5')?'green':(foodbankMayContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi4 == null)?'grey-2':(foodbankMayContents.kpi4 >= '0' && foodbankMayContents.kpi4 <= '12.45')?'red':(foodbankMayContents.kpi4 > '12.45' && foodbankMayContents.kpi4 <= '16.6')?'orange':(foodbankMayContents.kpi4 > '16.6' && foodbankMayContents.kpi4 < '20.75')?'yellow-7':(foodbankMayContents.kpi4 >= '20.75' && foodbankMayContents.kpi4 < '24.9')?'green':(foodbankMayContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi5 == null)?'grey-2':(foodbankMayContents.kpi5 >= '0' && foodbankMayContents.kpi5 <= '92.4')?'red':(foodbankMayContents.kpi5 > '92.4' && foodbankMayContents.kpi5 <= '123.2')?'orange':(foodbankMayContents.kpi5 > '123.2' && foodbankMayContents.kpi5 < '154')?'yellow-7':(foodbankMayContents.kpi5 >= '154' && foodbankMayContents.kpi5 < '184.8')?'green':(foodbankMayContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi6 == null)?'grey-2':(foodbankMayContents.kpi6 >= '0' && foodbankMayContents.kpi6 <= '14.7')?'red':(foodbankMayContents.kpi6 > '14.7' && foodbankMayContents.kpi6 <= '19.6')?'orange':(foodbankMayContents.kpi6 > '19.6' && foodbankMayContents.kpi6 < '24.5')?'yellow-7':(foodbankMayContents.kpi6 >= '24.5' && foodbankMayContents.kpi6 < '29.4')?'green':(foodbankMayContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankJunContents.kpi1 == null)?'grey-2':(foodbankJunContents.kpi1 >= '0' && foodbankJunContents.kpi1 <= '238.8')?'red':(foodbankJunContents.kpi1 > '238.8' && foodbankJunContents.kpi1 <= '318.4')?'orange':(foodbankJunContents.kpi1 > '318.4' && foodbankJunContents.kpi1 < '398')?'yellow-7':(foodbankJunContents.kpi1 >= '398' && foodbankJunContents.kpi1 < '477.6')?'green':(foodbankJunContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi2 == null)?'grey-2':(foodbankJunContents.kpi2 >= '0' && foodbankJunContents.kpi2 <= '244.2')?'red':(foodbankJunContents.kpi2 > '244.2' && foodbankJunContents.kpi2 <= '325.6')?'orange':(foodbankJunContents.kpi2 > '325.6' && foodbankJunContents.kpi2 < '407')?'yellow-7':(foodbankJunContents.kpi2 >= '407' && foodbankJunContents.kpi2 < '488.4')?'green':(foodbankJunContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi3 == null)?'grey-2':(foodbankJunContents.kpi3 >= '0' && foodbankJunContents.kpi3 <= '524.25')?'red':(foodbankJunContents.kpi3 > '524.25' && foodbankJunContents.kpi3 <= '699')?'orange':(foodbankJunContents.kpi3 > '699' && foodbankJunContents.kpi3 < '873.75')?'yellow-7':(foodbankJunContents.kpi3 >= '873.75' && foodbankJunContents.kpi3 < '1048.5')?'green':(foodbankJunContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi4 == null)?'grey-2':(foodbankJunContents.kpi4 >= '0' && foodbankJunContents.kpi4 <= '12.45')?'red':(foodbankJunContents.kpi4 > '12.45' && foodbankJunContents.kpi4 <= '16.6')?'orange':(foodbankJunContents.kpi4 > '16.6' && foodbankJunContents.kpi4 < '20.75')?'yellow-7':(foodbankJunContents.kpi4 >= '20.75' && foodbankJunContents.kpi4 < '24.9')?'green':(foodbankJunContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi5 == null)?'grey-2':(foodbankJunContents.kpi5 >= '0' && foodbankJunContents.kpi5 <= '92.4')?'red':(foodbankJunContents.kpi5 > '92.4' && foodbankJunContents.kpi5 <= '123.2')?'orange':(foodbankJunContents.kpi5 > '123.2' && foodbankJunContents.kpi5 < '154')?'yellow-7':(foodbankJunContents.kpi5 >= '154' && foodbankJunContents.kpi5 < '184.8')?'green':(foodbankJunContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi6 == null)?'grey-2':(foodbankJunContents.kpi6 >= '0' && foodbankJunContents.kpi6 <= '14.7')?'red':(foodbankJunContents.kpi6 > '14.7' && foodbankJunContents.kpi6 <= '19.6')?'orange':(foodbankJunContents.kpi6 > '19.6' && foodbankJunContents.kpi6 < '24.5')?'yellow-7':(foodbankJunContents.kpi6 >= '24.5' && foodbankJunContents.kpi6 < '29.4')?'green':(foodbankJunContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankJulContents.kpi1 == null)?'grey-2':(foodbankJulContents.kpi1 >= '0' && foodbankJulContents.kpi1 <= '238.8')?'red':(foodbankJulContents.kpi1 > '238.8' && foodbankJulContents.kpi1 <= '318.4')?'orange':(foodbankJulContents.kpi1 > '318.4' && foodbankJulContents.kpi1 < '398')?'yellow-7':(foodbankJulContents.kpi1 >= '398' && foodbankJulContents.kpi1 < '477.6')?'green':(foodbankJulContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi2 == null)?'grey-2':(foodbankJulContents.kpi2 >= '0' && foodbankJulContents.kpi2 <= '244.2')?'red':(foodbankJulContents.kpi2 > '244.2' && foodbankJulContents.kpi2 <= '325.6')?'orange':(foodbankJulContents.kpi2 > '325.6' && foodbankJulContents.kpi2 < '407')?'yellow-7':(foodbankJulContents.kpi2 >= '407' && foodbankJulContents.kpi2 < '488.4')?'green':(foodbankJulContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi3 == null)?'grey-2':(foodbankJulContents.kpi3 >= '0' && foodbankJulContents.kpi3 <= '524.25')?'red':(foodbankJulContents.kpi3 > '524.25' && foodbankJulContents.kpi3 <= '699')?'orange':(foodbankJulContents.kpi3 > '699' && foodbankJulContents.kpi3 < '873.75')?'yellow-7':(foodbankJulContents.kpi3 >= '873.75' && foodbankJulContents.kpi3 < '1048.5')?'green':(foodbankJulContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi4 == null)?'grey-2':(foodbankJulContents.kpi4 >= '0' && foodbankJulContents.kpi4 <= '12.45')?'red':(foodbankJulContents.kpi4 > '12.45' && foodbankJulContents.kpi4 <= '16.6')?'orange':(foodbankJulContents.kpi4 > '16.6' && foodbankJulContents.kpi4 < '20.75')?'yellow-7':(foodbankJulContents.kpi4 >= '20.75' && foodbankJulContents.kpi4 < '24.9')?'green':(foodbankJulContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi5 == null)?'grey-2':(foodbankJulContents.kpi5 >= '0' && foodbankJulContents.kpi5 <= '92.4')?'red':(foodbankJulContents.kpi5 > '92.4' && foodbankJulContents.kpi5 <= '123.2')?'orange':(foodbankJulContents.kpi5 > '123.2' && foodbankJulContents.kpi5 < '154')?'yellow-7':(foodbankJulContents.kpi5 >= '154' && foodbankJulContents.kpi5 < '184.8')?'green':(foodbankJulContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi6 == null)?'grey-2':(foodbankJulContents.kpi6 >= '0' && foodbankJulContents.kpi6 <= '14.7')?'red':(foodbankJulContents.kpi6 > '14.7' && foodbankJulContents.kpi6 <= '19.6')?'orange':(foodbankJulContents.kpi6 > '19.6' && foodbankJulContents.kpi6 < '24.5')?'yellow-7':(foodbankJulContents.kpi6 >= '24.5' && foodbankJulContents.kpi6 < '29.4')?'green':(foodbankJulContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankAugContents.kpi1 == null)?'grey-2':(foodbankAugContents.kpi1 >= '0' && foodbankAugContents.kpi1 <= '238.8')?'red':(foodbankAugContents.kpi1 > '238.8' && foodbankAugContents.kpi1 <= '318.4')?'orange':(foodbankAugContents.kpi1 > '318.4' && foodbankAugContents.kpi1 < '398')?'yellow-7':(foodbankAugContents.kpi1 >= '398' && foodbankAugContents.kpi1 < '477.6')?'green':(foodbankAugContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi2 == null)?'grey-2':(foodbankAugContents.kpi2 >= '0' && foodbankAugContents.kpi2 <= '244.2')?'red':(foodbankAugContents.kpi2 > '244.2' && foodbankAugContents.kpi2 <= '325.6')?'orange':(foodbankAugContents.kpi2 > '325.6' && foodbankAugContents.kpi2 < '407')?'yellow-7':(foodbankAugContents.kpi2 >= '407' && foodbankAugContents.kpi2 < '488.4')?'green':(foodbankAugContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi3 == null)?'grey-2':(foodbankAugContents.kpi3 >= '0' && foodbankAugContents.kpi3 <= '524.25')?'red':(foodbankAugContents.kpi3 > '524.25' && foodbankAugContents.kpi3 <= '699')?'orange':(foodbankAugContents.kpi3 > '699' && foodbankAugContents.kpi3 < '873.75')?'yellow-7':(foodbankAugContents.kpi3 >= '873.75' && foodbankAugContents.kpi3 < '1048.5')?'green':(foodbankAugContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi4 == null)?'grey-2':(foodbankAugContents.kpi4 >= '0' && foodbankAugContents.kpi4 <= '12.45')?'red':(foodbankAugContents.kpi4 > '12.45' && foodbankAugContents.kpi4 <= '16.6')?'orange':(foodbankAugContents.kpi4 > '16.6' && foodbankAugContents.kpi4 < '20.75')?'yellow-7':(foodbankAugContents.kpi4 >= '20.75' && foodbankAugContents.kpi4 < '24.9')?'green':(foodbankAugContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi5 == null)?'grey-2':(foodbankAugContents.kpi5 >= '0' && foodbankAugContents.kpi5 <= '92.4')?'red':(foodbankAugContents.kpi5 > '92.4' && foodbankAugContents.kpi5 <= '123.2')?'orange':(foodbankAugContents.kpi5 > '123.2' && foodbankAugContents.kpi5 < '154')?'yellow-7':(foodbankAugContents.kpi5 >= '154' && foodbankAugContents.kpi5 < '184.8')?'green':(foodbankAugContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi6 == null)?'grey-2':(foodbankAugContents.kpi6 >= '0' && foodbankAugContents.kpi6 <= '14.7')?'red':(foodbankAugContents.kpi6 > '14.7' && foodbankAugContents.kpi6 <= '19.6')?'orange':(foodbankAugContents.kpi6 > '19.6' && foodbankAugContents.kpi6 < '24.5')?'yellow-7':(foodbankAugContents.kpi6 >= '24.5' && foodbankAugContents.kpi6 < '29.4')?'green':(foodbankAugContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankSepContents.kpi1 == null)?'grey-2':(foodbankSepContents.kpi1 >= '0' && foodbankSepContents.kpi1 <= '238.8')?'red':(foodbankSepContents.kpi1 > '238.8' && foodbankSepContents.kpi1 <= '318.4')?'orange':(foodbankSepContents.kpi1 > '318.4' && foodbankSepContents.kpi1 < '398')?'yellow-7':(foodbankSepContents.kpi1 >= '398' && foodbankSepContents.kpi1 < '477.6')?'green':(foodbankSepContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi2 == null)?'grey-2':(foodbankSepContents.kpi2 >= '0' && foodbankSepContents.kpi2 <= '244.2')?'red':(foodbankSepContents.kpi2 > '244.2' && foodbankSepContents.kpi2 <= '325.6')?'orange':(foodbankSepContents.kpi2 > '325.6' && foodbankSepContents.kpi2 < '407')?'yellow-7':(foodbankSepContents.kpi2 >= '407' && foodbankSepContents.kpi2 < '488.4')?'green':(foodbankSepContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi3 == null)?'grey-2':(foodbankSepContents.kpi3 >= '0' && foodbankSepContents.kpi3 <= '524.25')?'red':(foodbankSepContents.kpi3 > '524.25' && foodbankSepContents.kpi3 <= '699')?'orange':(foodbankSepContents.kpi3 > '699' && foodbankSepContents.kpi3 < '873.75')?'yellow-7':(foodbankSepContents.kpi3 >= '873.75' && foodbankSepContents.kpi3 < '1048.5')?'green':(foodbankSepContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi4 == null)?'grey-2':(foodbankSepContents.kpi4 >= '0' && foodbankSepContents.kpi4 <= '12.45')?'red':(foodbankSepContents.kpi4 > '12.45' && foodbankSepContents.kpi4 <= '16.6')?'orange':(foodbankSepContents.kpi4 > '16.6' && foodbankSepContents.kpi4 < '20.75')?'yellow-7':(foodbankSepContents.kpi4 >= '20.75' && foodbankSepContents.kpi4 < '24.9')?'green':(foodbankSepContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi5 == null)?'grey-2':(foodbankSepContents.kpi5 >= '0' && foodbankSepContents.kpi5 <= '92.4')?'red':(foodbankSepContents.kpi5 > '92.4' && foodbankSepContents.kpi5 <= '123.2')?'orange':(foodbankSepContents.kpi5 > '123.2' && foodbankSepContents.kpi5 < '154')?'yellow-7':(foodbankSepContents.kpi5 >= '154' && foodbankSepContents.kpi5 < '184.8')?'green':(foodbankSepContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi6 == null)?'grey-2':(foodbankSepContents.kpi6 >= '0' && foodbankSepContents.kpi6 <= '14.7')?'red':(foodbankSepContents.kpi6 > '14.7' && foodbankSepContents.kpi6 <= '19.6')?'orange':(foodbankSepContents.kpi6 > '19.6' && foodbankSepContents.kpi6 < '24.5')?'yellow-7':(foodbankSepContents.kpi6 >= '24.5' && foodbankSepContents.kpi6 < '29.4')?'green':(foodbankSepContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankOctContents.kpi1 == null)?'grey-2':(foodbankOctContents.kpi1 >= '0' && foodbankOctContents.kpi1 <= '238.8')?'red':(foodbankOctContents.kpi1 > '238.8' && foodbankOctContents.kpi1 <= '318.4')?'orange':(foodbankOctContents.kpi1 > '318.4' && foodbankOctContents.kpi1 < '398')?'yellow-7':(foodbankOctContents.kpi1 >= '398' && foodbankOctContents.kpi1 < '477.6')?'green':(foodbankOctContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi2 == null)?'grey-2':(foodbankOctContents.kpi2 >= '0' && foodbankOctContents.kpi2 <= '244.2')?'red':(foodbankOctContents.kpi2 > '244.2' && foodbankOctContents.kpi2 <= '325.6')?'orange':(foodbankOctContents.kpi2 > '325.6' && foodbankOctContents.kpi2 < '407')?'yellow-7':(foodbankOctContents.kpi2 >= '407' && foodbankOctContents.kpi2 < '488.4')?'green':(foodbankOctContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi3 == null)?'grey-2':(foodbankOctContents.kpi3 >= '0' && foodbankOctContents.kpi3 <= '524.25')?'red':(foodbankOctContents.kpi3 > '524.25' && foodbankOctContents.kpi3 <= '699')?'orange':(foodbankOctContents.kpi3 > '699' && foodbankOctContents.kpi3 < '873.75')?'yellow-7':(foodbankOctContents.kpi3 >= '873.75' && foodbankOctContents.kpi3 < '1048.5')?'green':(foodbankOctContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi4 == null)?'grey-2':(foodbankOctContents.kpi4 >= '0' && foodbankOctContents.kpi4 <= '12.45')?'red':(foodbankOctContents.kpi4 > '12.45' && foodbankOctContents.kpi4 <= '16.6')?'orange':(foodbankOctContents.kpi4 > '16.6' && foodbankOctContents.kpi4 < '20.75')?'yellow-7':(foodbankOctContents.kpi4 >= '20.75' && foodbankOctContents.kpi4 < '24.9')?'green':(foodbankOctContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi5 == null)?'grey-2':(foodbankOctContents.kpi5 >= '0' && foodbankOctContents.kpi5 <= '92.4')?'red':(foodbankOctContents.kpi5 > '92.4' && foodbankOctContents.kpi5 <= '123.2')?'orange':(foodbankOctContents.kpi5 > '123.2' && foodbankOctContents.kpi5 < '154')?'yellow-7':(foodbankOctContents.kpi5 >= '154' && foodbankOctContents.kpi5 < '184.8')?'green':(foodbankOctContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi6 == null)?'grey-2':(foodbankOctContents.kpi6 >= '0' && foodbankOctContents.kpi6 <= '14.7')?'red':(foodbankOctContents.kpi6 > '14.7' && foodbankOctContents.kpi6 <= '19.6')?'orange':(foodbankOctContents.kpi6 > '19.6' && foodbankOctContents.kpi6 < '24.5')?'yellow-7':(foodbankOctContents.kpi6 >= '24.5' && foodbankOctContents.kpi6 < '29.4')?'green':(foodbankOctContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankNovContents.kpi1 == null)?'grey-2':(foodbankNovContents.kpi1 >= '0' && foodbankNovContents.kpi1 <= '238.8')?'red':(foodbankNovContents.kpi1 > '238.8' && foodbankNovContents.kpi1 <= '318.4')?'orange':(foodbankNovContents.kpi1 > '318.4' && foodbankNovContents.kpi1 < '398')?'yellow-7':(foodbankNovContents.kpi1 >= '398' && foodbankNovContents.kpi1 < '477.6')?'green':(foodbankNovContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi2 == null)?'grey-2':(foodbankNovContents.kpi2 >= '0' && foodbankNovContents.kpi2 <= '244.2')?'red':(foodbankNovContents.kpi2 > '244.2' && foodbankNovContents.kpi2 <= '325.6')?'orange':(foodbankNovContents.kpi2 > '325.6' && foodbankNovContents.kpi2 < '407')?'yellow-7':(foodbankNovContents.kpi2 >= '407' && foodbankNovContents.kpi2 < '488.4')?'green':(foodbankNovContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi3 == null)?'grey-2':(foodbankNovContents.kpi3 >= '0' && foodbankNovContents.kpi3 <= '524.25')?'red':(foodbankNovContents.kpi3 > '524.25' && foodbankNovContents.kpi3 <= '699')?'orange':(foodbankNovContents.kpi3 > '699' && foodbankNovContents.kpi3 < '873.75')?'yellow-7':(foodbankNovContents.kpi3 >= '873.75' && foodbankNovContents.kpi3 < '1048.5')?'green':(foodbankNovContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi4 == null)?'grey-2':(foodbankNovContents.kpi4 >= '0' && foodbankNovContents.kpi4 <= '12.45')?'red':(foodbankNovContents.kpi4 > '12.45' && foodbankNovContents.kpi4 <= '16.6')?'orange':(foodbankNovContents.kpi4 > '16.6' && foodbankNovContents.kpi4 < '20.75')?'yellow-7':(foodbankNovContents.kpi4 >= '20.75' && foodbankNovContents.kpi4 < '24.9')?'green':(foodbankNovContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi5 == null)?'grey-2':(foodbankNovContents.kpi5 >= '0' && foodbankNovContents.kpi5 <= '92.4')?'red':(foodbankNovContents.kpi5 > '92.4' && foodbankNovContents.kpi5 <= '123.2')?'orange':(foodbankNovContents.kpi5 > '123.2' && foodbankNovContents.kpi5 < '154')?'yellow-7':(foodbankNovContents.kpi5 >= '154' && foodbankNovContents.kpi5 < '184.8')?'green':(foodbankNovContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi6 == null)?'grey-2':(foodbankNovContents.kpi6 >= '0' && foodbankNovContents.kpi6 <= '14.7')?'red':(foodbankNovContents.kpi6 > '14.7' && foodbankNovContents.kpi6 <= '19.6')?'orange':(foodbankNovContents.kpi6 > '19.6' && foodbankNovContents.kpi6 < '24.5')?'yellow-7':(foodbankNovContents.kpi6 >= '24.5' && foodbankNovContents.kpi6 < '29.4')?'green':(foodbankNovContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankDecContents.kpi1 == null)?'grey-2':(foodbankDecContents.kpi1 >= '0' && foodbankDecContents.kpi1 <= '238.8')?'red':(foodbankDecContents.kpi1 > '238.8' && foodbankDecContents.kpi1 <= '318.4')?'orange':(foodbankDecContents.kpi1 > '318.4' && foodbankDecContents.kpi1 < '398')?'yellow-7':(foodbankDecContents.kpi1 >= '398' && foodbankDecContents.kpi1 < '477.6')?'green':(foodbankDecContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi2 == null)?'grey-2':(foodbankDecContents.kpi2 >= '0' && foodbankDecContents.kpi2 <= '244.2')?'red':(foodbankDecContents.kpi2 > '244.2' && foodbankDecContents.kpi2 <= '325.6')?'orange':(foodbankDecContents.kpi2 > '325.6' && foodbankDecContents.kpi2 < '407')?'yellow-7':(foodbankDecContents.kpi2 >= '407' && foodbankDecContents.kpi2 < '488.4')?'green':(foodbankDecContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi3 == null)?'grey-2':(foodbankDecContents.kpi3 >= '0' && foodbankDecContents.kpi3 <= '524.25')?'red':(foodbankDecContents.kpi3 > '524.25' && foodbankDecContents.kpi3 <= '699')?'orange':(foodbankDecContents.kpi3 > '699' && foodbankDecContents.kpi3 < '873.75')?'yellow-7':(foodbankDecContents.kpi3 >= '873.75' && foodbankDecContents.kpi3 < '1048.5')?'green':(foodbankDecContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi4 == null)?'grey-2':(foodbankDecContents.kpi4 >= '0' && foodbankDecContents.kpi4 <= '12.45')?'red':(foodbankDecContents.kpi4 > '12.45' && foodbankDecContents.kpi4 <= '16.6')?'orange':(foodbankDecContents.kpi4 > '16.6' && foodbankDecContents.kpi4 < '20.75')?'yellow-7':(foodbankDecContents.kpi4 >= '20.75' && foodbankDecContents.kpi4 < '24.9')?'green':(foodbankDecContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi5 == null)?'grey-2':(foodbankDecContents.kpi5 >= '0' && foodbankDecContents.kpi5 <= '92.4')?'red':(foodbankDecContents.kpi5 > '92.4' && foodbankDecContents.kpi5 <= '123.2')?'orange':(foodbankDecContents.kpi5 > '123.2' && foodbankDecContents.kpi5 < '154')?'yellow-7':(foodbankDecContents.kpi5 >= '154' && foodbankDecContents.kpi5 < '184.8')?'green':(foodbankDecContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi6 == null)?'grey-2':(foodbankDecContents.kpi6 >= '0' && foodbankDecContents.kpi6 <= '14.7')?'red':(foodbankDecContents.kpi6 > '14.7' && foodbankDecContents.kpi6 <= '19.6')?'orange':(foodbankDecContents.kpi6 > '19.6' && foodbankDecContents.kpi6 < '24.5')?'yellow-7':(foodbankDecContents.kpi6 >= '24.5' && foodbankDecContents.kpi6 < '29.4')?'green':(foodbankDecContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip>Activities (#)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 5
                                <q-tooltip># Households Receiving Deliveries</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 6
                                <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankJanContents.kpi1 == null)?'grey-2':(foodbankJanContents.kpi1 >= '0' && foodbankJanContents.kpi1 <= '238.8')?'red':(foodbankJanContents.kpi1 > '238.8' && foodbankJanContents.kpi1 <= '318.4')?'orange':(foodbankJanContents.kpi1 > '318.4' && foodbankJanContents.kpi1 < '398')?'yellow-7':(foodbankJanContents.kpi1 >= '398' && foodbankJanContents.kpi1 < '477.6')?'green':(foodbankJanContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi2 == null)?'grey-2':(foodbankJanContents.kpi2 >= '0' && foodbankJanContents.kpi2 <= '244.2')?'red':(foodbankJanContents.kpi2 > '244.2' && foodbankJanContents.kpi2 <= '325.6')?'orange':(foodbankJanContents.kpi2 > '325.6' && foodbankJanContents.kpi2 < '407')?'yellow-7':(foodbankJanContents.kpi2 >= '407' && foodbankJanContents.kpi2 < '488.4')?'green':(foodbankJanContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi3 == null)?'grey-2':(foodbankJanContents.kpi3 >= '0' && foodbankJanContents.kpi3 <= '524.25')?'red':(foodbankJanContents.kpi3 > '524.25' && foodbankJanContents.kpi3 <= '699')?'orange':(foodbankJanContents.kpi3 > '699' && foodbankJanContents.kpi3 < '873.75')?'yellow-7':(foodbankJanContents.kpi3 >= '873.75' && foodbankJanContents.kpi3 < '1048.5')?'green':(foodbankJanContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi4 == null)?'grey-2':(foodbankJanContents.kpi4 >= '0' && foodbankJanContents.kpi4 <= '12.45')?'red':(foodbankJanContents.kpi4 > '12.45' && foodbankJanContents.kpi4 <= '16.6')?'orange':(foodbankJanContents.kpi4 > '16.6' && foodbankJanContents.kpi4 < '20.75')?'yellow-7':(foodbankJanContents.kpi4 >= '20.75' && foodbankJanContents.kpi4 < '24.9')?'green':(foodbankJanContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi5 == null)?'grey-2':(foodbankJanContents.kpi5 >= '0' && foodbankJanContents.kpi5 <= '92.4')?'red':(foodbankJanContents.kpi5 > '92.4' && foodbankJanContents.kpi5 <= '123.2')?'orange':(foodbankJanContents.kpi5 > '123.2' && foodbankJanContents.kpi5 < '154')?'yellow-7':(foodbankJanContents.kpi5 >= '154' && foodbankJanContents.kpi5 < '184.8')?'green':(foodbankJanContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi6 == null)?'grey-2':(foodbankJanContents.kpi6 >= '0' && foodbankJanContents.kpi6 <= '14.7')?'red':(foodbankJanContents.kpi6 > '14.7' && foodbankJanContents.kpi6 <= '19.6')?'orange':(foodbankJanContents.kpi6 > '19.6' && foodbankJanContents.kpi6 < '24.5')?'yellow-7':(foodbankJanContents.kpi6 >= '24.5' && foodbankJanContents.kpi6 < '29.4')?'green':(foodbankJanContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankFebContents.kpi1 == null)?'grey-2':(foodbankFebContents.kpi1 >= '0' && foodbankFebContents.kpi1 <= '238.8')?'red':(foodbankFebContents.kpi1 > '238.8' && foodbankFebContents.kpi1 <= '318.4')?'orange':(foodbankFebContents.kpi1 > '318.4' && foodbankFebContents.kpi1 < '398')?'yellow-7':(foodbankFebContents.kpi1 >= '398' && foodbankFebContents.kpi1 < '477.6')?'green':(foodbankFebContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi2 == null)?'grey-2':(foodbankFebContents.kpi2 >= '0' && foodbankFebContents.kpi2 <= '244.2')?'red':(foodbankFebContents.kpi2 > '244.2' && foodbankFebContents.kpi2 <= '325.6')?'orange':(foodbankFebContents.kpi2 > '325.6' && foodbankFebContents.kpi2 < '407')?'yellow-7':(foodbankFebContents.kpi2 >= '407' && foodbankFebContents.kpi2 < '488.4')?'green':(foodbankFebContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi3 == null)?'grey-2':(foodbankFebContents.kpi3 >= '0' && foodbankFebContents.kpi3 <= '524.25')?'red':(foodbankFebContents.kpi3 > '524.25' && foodbankFebContents.kpi3 <= '699')?'orange':(foodbankFebContents.kpi3 > '699' && foodbankFebContents.kpi3 < '873.75')?'yellow-7':(foodbankFebContents.kpi3 >= '873.75' && foodbankFebContents.kpi3 < '1048.5')?'green':(foodbankFebContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi4 == null)?'grey-2':(foodbankFebContents.kpi4 >= '0' && foodbankFebContents.kpi4 <= '12.45')?'red':(foodbankFebContents.kpi4 > '12.45' && foodbankFebContents.kpi4 <= '16.6')?'orange':(foodbankFebContents.kpi4 > '16.6' && foodbankFebContents.kpi4 < '20.75')?'yellow-7':(foodbankFebContents.kpi4 >= '20.75' && foodbankFebContents.kpi4 < '24.9')?'green':(foodbankFebContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi5 == null)?'grey-2':(foodbankFebContents.kpi5 >= '0' && foodbankFebContents.kpi5 <= '92.4')?'red':(foodbankFebContents.kpi5 > '92.4' && foodbankFebContents.kpi5 <= '123.2')?'orange':(foodbankFebContents.kpi5 > '123.2' && foodbankFebContents.kpi5 < '154')?'yellow-7':(foodbankFebContents.kpi5 >= '154' && foodbankFebContents.kpi5 < '184.8')?'green':(foodbankFebContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi6 == null)?'grey-2':(foodbankFebContents.kpi6 >= '0' && foodbankFebContents.kpi6 <= '14.7')?'red':(foodbankFebContents.kpi6 > '14.7' && foodbankFebContents.kpi6 <= '19.6')?'orange':(foodbankFebContents.kpi6 > '19.6' && foodbankFebContents.kpi6 < '24.5')?'yellow-7':(foodbankFebContents.kpi6 >= '24.5' && foodbankFebContents.kpi6 < '29.4')?'green':(foodbankFebContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankMarContents.kpi1 == null)?'grey-2':(foodbankMarContents.kpi1 >= '0' && foodbankMarContents.kpi1 <= '238.8')?'red':(foodbankMarContents.kpi1 > '238.8' && foodbankMarContents.kpi1 <= '318.4')?'orange':(foodbankMarContents.kpi1 > '318.4' && foodbankMarContents.kpi1 < '398')?'yellow-7':(foodbankMarContents.kpi1 >= '398' && foodbankMarContents.kpi1 < '477.6')?'green':(foodbankMarContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi2 == null)?'grey-2':(foodbankMarContents.kpi2 >= '0' && foodbankMarContents.kpi2 <= '244.2')?'red':(foodbankMarContents.kpi2 > '244.2' && foodbankMarContents.kpi2 <= '325.6')?'orange':(foodbankMarContents.kpi2 > '325.6' && foodbankMarContents.kpi2 < '407')?'yellow-7':(foodbankMarContents.kpi2 >= '407' && foodbankMarContents.kpi2 < '488.4')?'green':(foodbankMarContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi3 == null)?'grey-2':(foodbankMarContents.kpi3 >= '0' && foodbankMarContents.kpi3 <= '524.25')?'red':(foodbankMarContents.kpi3 > '524.25' && foodbankMarContents.kpi3 <= '699')?'orange':(foodbankMarContents.kpi3 > '699' && foodbankMarContents.kpi3 < '873.75')?'yellow-7':(foodbankMarContents.kpi3 >= '873.75' && foodbankMarContents.kpi3 < '1048.5')?'green':(foodbankMarContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi4 == null)?'grey-2':(foodbankMarContents.kpi4 >= '0' && foodbankMarContents.kpi4 <= '12.45')?'red':(foodbankMarContents.kpi4 > '12.45' && foodbankMarContents.kpi4 <= '16.6')?'orange':(foodbankMarContents.kpi4 > '16.6' && foodbankMarContents.kpi4 < '20.75')?'yellow-7':(foodbankMarContents.kpi4 >= '20.75' && foodbankMarContents.kpi4 < '24.9')?'green':(foodbankMarContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi5 == null)?'grey-2':(foodbankMarContents.kpi5 >= '0' && foodbankMarContents.kpi5 <= '92.4')?'red':(foodbankMarContents.kpi5 > '92.4' && foodbankMarContents.kpi5 <= '123.2')?'orange':(foodbankMarContents.kpi5 > '123.2' && foodbankMarContents.kpi5 < '154')?'yellow-7':(foodbankMarContents.kpi5 >= '154' && foodbankMarContents.kpi5 < '184.8')?'green':(foodbankMarContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi6 == null)?'grey-2':(foodbankMarContents.kpi6 >= '0' && foodbankMarContents.kpi6 <= '14.7')?'red':(foodbankMarContents.kpi6 > '14.7' && foodbankMarContents.kpi6 <= '19.6')?'orange':(foodbankMarContents.kpi6 > '19.6' && foodbankMarContents.kpi6 < '24.5')?'yellow-7':(foodbankMarContents.kpi6 >= '24.5' && foodbankMarContents.kpi6 < '29.4')?'green':(foodbankMarContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankAprContents.kpi1 == null)?'grey-2':(foodbankAprContents.kpi1 >= '0' && foodbankAprContents.kpi1 <= '238.8')?'red':(foodbankAprContents.kpi1 > '238.8' && foodbankAprContents.kpi1 <= '318.4')?'orange':(foodbankAprContents.kpi1 > '318.4' && foodbankAprContents.kpi1 < '398')?'yellow-7':(foodbankAprContents.kpi1 >= '398' && foodbankAprContents.kpi1 < '477.6')?'green':(foodbankAprContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi2 == null)?'grey-2':(foodbankAprContents.kpi2 >= '0' && foodbankAprContents.kpi2 <= '244.2')?'red':(foodbankAprContents.kpi2 > '244.2' && foodbankAprContents.kpi2 <= '325.6')?'orange':(foodbankAprContents.kpi2 > '325.6' && foodbankAprContents.kpi2 < '407')?'yellow-7':(foodbankAprContents.kpi2 >= '407' && foodbankAprContents.kpi2 < '488.4')?'green':(foodbankAprContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi3 == null)?'grey-2':(foodbankAprContents.kpi3 >= '0' && foodbankAprContents.kpi3 <= '524.25')?'red':(foodbankAprContents.kpi3 > '524.25' && foodbankAprContents.kpi3 <= '699')?'orange':(foodbankAprContents.kpi3 > '699' && foodbankAprContents.kpi3 < '873.75')?'yellow-7':(foodbankAprContents.kpi3 >= '873.75' && foodbankAprContents.kpi3 < '1048.5')?'green':(foodbankAprContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi4 == null)?'grey-2':(foodbankAprContents.kpi4 >= '0' && foodbankAprContents.kpi4 <= '12.45')?'red':(foodbankAprContents.kpi4 > '12.45' && foodbankAprContents.kpi4 <= '16.6')?'orange':(foodbankAprContents.kpi4 > '16.6' && foodbankAprContents.kpi4 < '20.75')?'yellow-7':(foodbankAprContents.kpi4 >= '20.75' && foodbankAprContents.kpi4 < '24.9')?'green':(foodbankAprContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi5 == null)?'grey-2':(foodbankAprContents.kpi5 >= '0' && foodbankAprContents.kpi5 <= '92.4')?'red':(foodbankAprContents.kpi5 > '92.4' && foodbankAprContents.kpi5 <= '123.2')?'orange':(foodbankAprContents.kpi5 > '123.2' && foodbankAprContents.kpi5 < '154')?'yellow-7':(foodbankAprContents.kpi5 >= '154' && foodbankAprContents.kpi5 < '184.8')?'green':(foodbankAprContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi6 == null)?'grey-2':(foodbankAprContents.kpi6 >= '0' && foodbankAprContents.kpi6 <= '14.7')?'red':(foodbankAprContents.kpi6 > '14.7' && foodbankAprContents.kpi6 <= '19.6')?'orange':(foodbankAprContents.kpi6 > '19.6' && foodbankAprContents.kpi6 < '24.5')?'yellow-7':(foodbankAprContents.kpi6 >= '24.5' && foodbankAprContents.kpi6 < '29.4')?'green':(foodbankAprContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankMayContents.kpi1 == null)?'grey-2':(foodbankMayContents.kpi1 >= '0' && foodbankMayContents.kpi1 <= '238.8')?'red':(foodbankMayContents.kpi1 > '238.8' && foodbankMayContents.kpi1 <= '318.4')?'orange':(foodbankMayContents.kpi1 > '318.4' && foodbankMayContents.kpi1 < '398')?'yellow-7':(foodbankMayContents.kpi1 >= '398' && foodbankMayContents.kpi1 < '477.6')?'green':(foodbankMayContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi2 == null)?'grey-2':(foodbankMayContents.kpi2 >= '0' && foodbankMayContents.kpi2 <= '244.2')?'red':(foodbankMayContents.kpi2 > '244.2' && foodbankMayContents.kpi2 <= '325.6')?'orange':(foodbankMayContents.kpi2 > '325.6' && foodbankMayContents.kpi2 < '407')?'yellow-7':(foodbankMayContents.kpi2 >= '407' && foodbankMayContents.kpi2 < '488.4')?'green':(foodbankMayContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi3 == null)?'grey-2':(foodbankMayContents.kpi3 >= '0' && foodbankMayContents.kpi3 <= '524.25')?'red':(foodbankMayContents.kpi3 > '524.25' && foodbankMayContents.kpi3 <= '699')?'orange':(foodbankMayContents.kpi3 > '699' && foodbankMayContents.kpi3 < '873.75')?'yellow-7':(foodbankMayContents.kpi3 >= '873.75' && foodbankMayContents.kpi3 < '1048.5')?'green':(foodbankMayContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi4 == null)?'grey-2':(foodbankMayContents.kpi4 >= '0' && foodbankMayContents.kpi4 <= '12.45')?'red':(foodbankMayContents.kpi4 > '12.45' && foodbankMayContents.kpi4 <= '16.6')?'orange':(foodbankMayContents.kpi4 > '16.6' && foodbankMayContents.kpi4 < '20.75')?'yellow-7':(foodbankMayContents.kpi4 >= '20.75' && foodbankMayContents.kpi4 < '24.9')?'green':(foodbankMayContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi5 == null)?'grey-2':(foodbankMayContents.kpi5 >= '0' && foodbankMayContents.kpi5 <= '92.4')?'red':(foodbankMayContents.kpi5 > '92.4' && foodbankMayContents.kpi5 <= '123.2')?'orange':(foodbankMayContents.kpi5 > '123.2' && foodbankMayContents.kpi5 < '154')?'yellow-7':(foodbankMayContents.kpi5 >= '154' && foodbankMayContents.kpi5 < '184.8')?'green':(foodbankMayContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi6 == null)?'grey-2':(foodbankMayContents.kpi6 >= '0' && foodbankMayContents.kpi6 <= '14.7')?'red':(foodbankMayContents.kpi6 > '14.7' && foodbankMayContents.kpi6 <= '19.6')?'orange':(foodbankMayContents.kpi6 > '19.6' && foodbankMayContents.kpi6 < '24.5')?'yellow-7':(foodbankMayContents.kpi6 >= '24.5' && foodbankMayContents.kpi6 < '29.4')?'green':(foodbankMayContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankJunContents.kpi1 == null)?'grey-2':(foodbankJunContents.kpi1 >= '0' && foodbankJunContents.kpi1 <= '238.8')?'red':(foodbankJunContents.kpi1 > '238.8' && foodbankJunContents.kpi1 <= '318.4')?'orange':(foodbankJunContents.kpi1 > '318.4' && foodbankJunContents.kpi1 < '398')?'yellow-7':(foodbankJunContents.kpi1 >= '398' && foodbankJunContents.kpi1 < '477.6')?'green':(foodbankJunContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi2 == null)?'grey-2':(foodbankJunContents.kpi2 >= '0' && foodbankJunContents.kpi2 <= '244.2')?'red':(foodbankJunContents.kpi2 > '244.2' && foodbankJunContents.kpi2 <= '325.6')?'orange':(foodbankJunContents.kpi2 > '325.6' && foodbankJunContents.kpi2 < '407')?'yellow-7':(foodbankJunContents.kpi2 >= '407' && foodbankJunContents.kpi2 < '488.4')?'green':(foodbankJunContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi3 == null)?'grey-2':(foodbankJunContents.kpi3 >= '0' && foodbankJunContents.kpi3 <= '524.25')?'red':(foodbankJunContents.kpi3 > '524.25' && foodbankJunContents.kpi3 <= '699')?'orange':(foodbankJunContents.kpi3 > '699' && foodbankJunContents.kpi3 < '873.75')?'yellow-7':(foodbankJunContents.kpi3 >= '873.75' && foodbankJunContents.kpi3 < '1048.5')?'green':(foodbankJunContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi4 == null)?'grey-2':(foodbankJunContents.kpi4 >= '0' && foodbankJunContents.kpi4 <= '12.45')?'red':(foodbankJunContents.kpi4 > '12.45' && foodbankJunContents.kpi4 <= '16.6')?'orange':(foodbankJunContents.kpi4 > '16.6' && foodbankJunContents.kpi4 < '20.75')?'yellow-7':(foodbankJunContents.kpi4 >= '20.75' && foodbankJunContents.kpi4 < '24.9')?'green':(foodbankJunContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi5 == null)?'grey-2':(foodbankJunContents.kpi5 >= '0' && foodbankJunContents.kpi5 <= '92.4')?'red':(foodbankJunContents.kpi5 > '92.4' && foodbankJunContents.kpi5 <= '123.2')?'orange':(foodbankJunContents.kpi5 > '123.2' && foodbankJunContents.kpi5 < '154')?'yellow-7':(foodbankJunContents.kpi5 >= '154' && foodbankJunContents.kpi5 < '184.8')?'green':(foodbankJunContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi6 == null)?'grey-2':(foodbankJunContents.kpi6 >= '0' && foodbankJunContents.kpi6 <= '14.7')?'red':(foodbankJunContents.kpi6 > '14.7' && foodbankJunContents.kpi6 <= '19.6')?'orange':(foodbankJunContents.kpi6 > '19.6' && foodbankJunContents.kpi6 < '24.5')?'yellow-7':(foodbankJunContents.kpi6 >= '24.5' && foodbankJunContents.kpi6 < '29.4')?'green':(foodbankJunContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankJulContents.kpi1 == null)?'grey-2':(foodbankJulContents.kpi1 >= '0' && foodbankJulContents.kpi1 <= '238.8')?'red':(foodbankJulContents.kpi1 > '238.8' && foodbankJulContents.kpi1 <= '318.4')?'orange':(foodbankJulContents.kpi1 > '318.4' && foodbankJulContents.kpi1 < '398')?'yellow-7':(foodbankJulContents.kpi1 >= '398' && foodbankJulContents.kpi1 < '477.6')?'green':(foodbankJulContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi2 == null)?'grey-2':(foodbankJulContents.kpi2 >= '0' && foodbankJulContents.kpi2 <= '244.2')?'red':(foodbankJulContents.kpi2 > '244.2' && foodbankJulContents.kpi2 <= '325.6')?'orange':(foodbankJulContents.kpi2 > '325.6' && foodbankJulContents.kpi2 < '407')?'yellow-7':(foodbankJulContents.kpi2 >= '407' && foodbankJulContents.kpi2 < '488.4')?'green':(foodbankJulContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi3 == null)?'grey-2':(foodbankJulContents.kpi3 >= '0' && foodbankJulContents.kpi3 <= '524.25')?'red':(foodbankJulContents.kpi3 > '524.25' && foodbankJulContents.kpi3 <= '699')?'orange':(foodbankJulContents.kpi3 > '699' && foodbankJulContents.kpi3 < '873.75')?'yellow-7':(foodbankJulContents.kpi3 >= '873.75' && foodbankJulContents.kpi3 < '1048.5')?'green':(foodbankJulContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi4 == null)?'grey-2':(foodbankJulContents.kpi4 >= '0' && foodbankJulContents.kpi4 <= '12.45')?'red':(foodbankJulContents.kpi4 > '12.45' && foodbankJulContents.kpi4 <= '16.6')?'orange':(foodbankJulContents.kpi4 > '16.6' && foodbankJulContents.kpi4 < '20.75')?'yellow-7':(foodbankJulContents.kpi4 >= '20.75' && foodbankJulContents.kpi4 < '24.9')?'green':(foodbankJulContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi5 == null)?'grey-2':(foodbankJulContents.kpi5 >= '0' && foodbankJulContents.kpi5 <= '92.4')?'red':(foodbankJulContents.kpi5 > '92.4' && foodbankJulContents.kpi5 <= '123.2')?'orange':(foodbankJulContents.kpi5 > '123.2' && foodbankJulContents.kpi5 < '154')?'yellow-7':(foodbankJulContents.kpi5 >= '154' && foodbankJulContents.kpi5 < '184.8')?'green':(foodbankJulContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi6 == null)?'grey-2':(foodbankJulContents.kpi6 >= '0' && foodbankJulContents.kpi6 <= '14.7')?'red':(foodbankJulContents.kpi6 > '14.7' && foodbankJulContents.kpi6 <= '19.6')?'orange':(foodbankJulContents.kpi6 > '19.6' && foodbankJulContents.kpi6 < '24.5')?'yellow-7':(foodbankJulContents.kpi6 >= '24.5' && foodbankJulContents.kpi6 < '29.4')?'green':(foodbankJulContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankAugContents.kpi1 == null)?'grey-2':(foodbankAugContents.kpi1 >= '0' && foodbankAugContents.kpi1 <= '238.8')?'red':(foodbankAugContents.kpi1 > '238.8' && foodbankAugContents.kpi1 <= '318.4')?'orange':(foodbankAugContents.kpi1 > '318.4' && foodbankAugContents.kpi1 < '398')?'yellow-7':(foodbankAugContents.kpi1 >= '398' && foodbankAugContents.kpi1 < '477.6')?'green':(foodbankAugContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi2 == null)?'grey-2':(foodbankAugContents.kpi2 >= '0' && foodbankAugContents.kpi2 <= '244.2')?'red':(foodbankAugContents.kpi2 > '244.2' && foodbankAugContents.kpi2 <= '325.6')?'orange':(foodbankAugContents.kpi2 > '325.6' && foodbankAugContents.kpi2 < '407')?'yellow-7':(foodbankAugContents.kpi2 >= '407' && foodbankAugContents.kpi2 < '488.4')?'green':(foodbankAugContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi3 == null)?'grey-2':(foodbankAugContents.kpi3 >= '0' && foodbankAugContents.kpi3 <= '524.25')?'red':(foodbankAugContents.kpi3 > '524.25' && foodbankAugContents.kpi3 <= '699')?'orange':(foodbankAugContents.kpi3 > '699' && foodbankAugContents.kpi3 < '873.75')?'yellow-7':(foodbankAugContents.kpi3 >= '873.75' && foodbankAugContents.kpi3 < '1048.5')?'green':(foodbankAugContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi4 == null)?'grey-2':(foodbankAugContents.kpi4 >= '0' && foodbankAugContents.kpi4 <= '12.45')?'red':(foodbankAugContents.kpi4 > '12.45' && foodbankAugContents.kpi4 <= '16.6')?'orange':(foodbankAugContents.kpi4 > '16.6' && foodbankAugContents.kpi4 < '20.75')?'yellow-7':(foodbankAugContents.kpi4 >= '20.75' && foodbankAugContents.kpi4 < '24.9')?'green':(foodbankAugContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi5 == null)?'grey-2':(foodbankAugContents.kpi5 >= '0' && foodbankAugContents.kpi5 <= '92.4')?'red':(foodbankAugContents.kpi5 > '92.4' && foodbankAugContents.kpi5 <= '123.2')?'orange':(foodbankAugContents.kpi5 > '123.2' && foodbankAugContents.kpi5 < '154')?'yellow-7':(foodbankAugContents.kpi5 >= '154' && foodbankAugContents.kpi5 < '184.8')?'green':(foodbankAugContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi6 == null)?'grey-2':(foodbankAugContents.kpi6 >= '0' && foodbankAugContents.kpi6 <= '14.7')?'red':(foodbankAugContents.kpi6 > '14.7' && foodbankAugContents.kpi6 <= '19.6')?'orange':(foodbankAugContents.kpi6 > '19.6' && foodbankAugContents.kpi6 < '24.5')?'yellow-7':(foodbankAugContents.kpi6 >= '24.5' && foodbankAugContents.kpi6 < '29.4')?'green':(foodbankAugContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankSepContents.kpi1 == null)?'grey-2':(foodbankSepContents.kpi1 >= '0' && foodbankSepContents.kpi1 <= '238.8')?'red':(foodbankSepContents.kpi1 > '238.8' && foodbankSepContents.kpi1 <= '318.4')?'orange':(foodbankSepContents.kpi1 > '318.4' && foodbankSepContents.kpi1 < '398')?'yellow-7':(foodbankSepContents.kpi1 >= '398' && foodbankSepContents.kpi1 < '477.6')?'green':(foodbankSepContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi2 == null)?'grey-2':(foodbankSepContents.kpi2 >= '0' && foodbankSepContents.kpi2 <= '244.2')?'red':(foodbankSepContents.kpi2 > '244.2' && foodbankSepContents.kpi2 <= '325.6')?'orange':(foodbankSepContents.kpi2 > '325.6' && foodbankSepContents.kpi2 < '407')?'yellow-7':(foodbankSepContents.kpi2 >= '407' && foodbankSepContents.kpi2 < '488.4')?'green':(foodbankSepContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi3 == null)?'grey-2':(foodbankSepContents.kpi3 >= '0' && foodbankSepContents.kpi3 <= '524.25')?'red':(foodbankSepContents.kpi3 > '524.25' && foodbankSepContents.kpi3 <= '699')?'orange':(foodbankSepContents.kpi3 > '699' && foodbankSepContents.kpi3 < '873.75')?'yellow-7':(foodbankSepContents.kpi3 >= '873.75' && foodbankSepContents.kpi3 < '1048.5')?'green':(foodbankSepContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi4 == null)?'grey-2':(foodbankSepContents.kpi4 >= '0' && foodbankSepContents.kpi4 <= '12.45')?'red':(foodbankSepContents.kpi4 > '12.45' && foodbankSepContents.kpi4 <= '16.6')?'orange':(foodbankSepContents.kpi4 > '16.6' && foodbankSepContents.kpi4 < '20.75')?'yellow-7':(foodbankSepContents.kpi4 >= '20.75' && foodbankSepContents.kpi4 < '24.9')?'green':(foodbankSepContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi5 == null)?'grey-2':(foodbankSepContents.kpi5 >= '0' && foodbankSepContents.kpi5 <= '92.4')?'red':(foodbankSepContents.kpi5 > '92.4' && foodbankSepContents.kpi5 <= '123.2')?'orange':(foodbankSepContents.kpi5 > '123.2' && foodbankSepContents.kpi5 < '154')?'yellow-7':(foodbankSepContents.kpi5 >= '154' && foodbankSepContents.kpi5 < '184.8')?'green':(foodbankSepContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi6 == null)?'grey-2':(foodbankSepContents.kpi6 >= '0' && foodbankSepContents.kpi6 <= '14.7')?'red':(foodbankSepContents.kpi6 > '14.7' && foodbankSepContents.kpi6 <= '19.6')?'orange':(foodbankSepContents.kpi6 > '19.6' && foodbankSepContents.kpi6 < '24.5')?'yellow-7':(foodbankSepContents.kpi6 >= '24.5' && foodbankSepContents.kpi6 < '29.4')?'green':(foodbankSepContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankOctContents.kpi1 == null)?'grey-2':(foodbankOctContents.kpi1 >= '0' && foodbankOctContents.kpi1 <= '238.8')?'red':(foodbankOctContents.kpi1 > '238.8' && foodbankOctContents.kpi1 <= '318.4')?'orange':(foodbankOctContents.kpi1 > '318.4' && foodbankOctContents.kpi1 < '398')?'yellow-7':(foodbankOctContents.kpi1 >= '398' && foodbankOctContents.kpi1 < '477.6')?'green':(foodbankOctContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi2 == null)?'grey-2':(foodbankOctContents.kpi2 >= '0' && foodbankOctContents.kpi2 <= '244.2')?'red':(foodbankOctContents.kpi2 > '244.2' && foodbankOctContents.kpi2 <= '325.6')?'orange':(foodbankOctContents.kpi2 > '325.6' && foodbankOctContents.kpi2 < '407')?'yellow-7':(foodbankOctContents.kpi2 >= '407' && foodbankOctContents.kpi2 < '488.4')?'green':(foodbankOctContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi3 == null)?'grey-2':(foodbankOctContents.kpi3 >= '0' && foodbankOctContents.kpi3 <= '524.25')?'red':(foodbankOctContents.kpi3 > '524.25' && foodbankOctContents.kpi3 <= '699')?'orange':(foodbankOctContents.kpi3 > '699' && foodbankOctContents.kpi3 < '873.75')?'yellow-7':(foodbankOctContents.kpi3 >= '873.75' && foodbankOctContents.kpi3 < '1048.5')?'green':(foodbankOctContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi4 == null)?'grey-2':(foodbankOctContents.kpi4 >= '0' && foodbankOctContents.kpi4 <= '12.45')?'red':(foodbankOctContents.kpi4 > '12.45' && foodbankOctContents.kpi4 <= '16.6')?'orange':(foodbankOctContents.kpi4 > '16.6' && foodbankOctContents.kpi4 < '20.75')?'yellow-7':(foodbankOctContents.kpi4 >= '20.75' && foodbankOctContents.kpi4 < '24.9')?'green':(foodbankOctContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi5 == null)?'grey-2':(foodbankOctContents.kpi5 >= '0' && foodbankOctContents.kpi5 <= '92.4')?'red':(foodbankOctContents.kpi5 > '92.4' && foodbankOctContents.kpi5 <= '123.2')?'orange':(foodbankOctContents.kpi5 > '123.2' && foodbankOctContents.kpi5 < '154')?'yellow-7':(foodbankOctContents.kpi5 >= '154' && foodbankOctContents.kpi5 < '184.8')?'green':(foodbankOctContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi6 == null)?'grey-2':(foodbankOctContents.kpi6 >= '0' && foodbankOctContents.kpi6 <= '14.7')?'red':(foodbankOctContents.kpi6 > '14.7' && foodbankOctContents.kpi6 <= '19.6')?'orange':(foodbankOctContents.kpi6 > '19.6' && foodbankOctContents.kpi6 < '24.5')?'yellow-7':(foodbankOctContents.kpi6 >= '24.5' && foodbankOctContents.kpi6 < '29.4')?'green':(foodbankOctContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankNovContents.kpi1 == null)?'grey-2':(foodbankNovContents.kpi1 >= '0' && foodbankNovContents.kpi1 <= '238.8')?'red':(foodbankNovContents.kpi1 > '238.8' && foodbankNovContents.kpi1 <= '318.4')?'orange':(foodbankNovContents.kpi1 > '318.4' && foodbankNovContents.kpi1 < '398')?'yellow-7':(foodbankNovContents.kpi1 >= '398' && foodbankNovContents.kpi1 < '477.6')?'green':(foodbankNovContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi2 == null)?'grey-2':(foodbankNovContents.kpi2 >= '0' && foodbankNovContents.kpi2 <= '244.2')?'red':(foodbankNovContents.kpi2 > '244.2' && foodbankNovContents.kpi2 <= '325.6')?'orange':(foodbankNovContents.kpi2 > '325.6' && foodbankNovContents.kpi2 < '407')?'yellow-7':(foodbankNovContents.kpi2 >= '407' && foodbankNovContents.kpi2 < '488.4')?'green':(foodbankNovContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi3 == null)?'grey-2':(foodbankNovContents.kpi3 >= '0' && foodbankNovContents.kpi3 <= '524.25')?'red':(foodbankNovContents.kpi3 > '524.25' && foodbankNovContents.kpi3 <= '699')?'orange':(foodbankNovContents.kpi3 > '699' && foodbankNovContents.kpi3 < '873.75')?'yellow-7':(foodbankNovContents.kpi3 >= '873.75' && foodbankNovContents.kpi3 < '1048.5')?'green':(foodbankNovContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi4 == null)?'grey-2':(foodbankNovContents.kpi4 >= '0' && foodbankNovContents.kpi4 <= '12.45')?'red':(foodbankNovContents.kpi4 > '12.45' && foodbankNovContents.kpi4 <= '16.6')?'orange':(foodbankNovContents.kpi4 > '16.6' && foodbankNovContents.kpi4 < '20.75')?'yellow-7':(foodbankNovContents.kpi4 >= '20.75' && foodbankNovContents.kpi4 < '24.9')?'green':(foodbankNovContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi5 == null)?'grey-2':(foodbankNovContents.kpi5 >= '0' && foodbankNovContents.kpi5 <= '92.4')?'red':(foodbankNovContents.kpi5 > '92.4' && foodbankNovContents.kpi5 <= '123.2')?'orange':(foodbankNovContents.kpi5 > '123.2' && foodbankNovContents.kpi5 < '154')?'yellow-7':(foodbankNovContents.kpi5 >= '154' && foodbankNovContents.kpi5 < '184.8')?'green':(foodbankNovContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi6 == null)?'grey-2':(foodbankNovContents.kpi6 >= '0' && foodbankNovContents.kpi6 <= '14.7')?'red':(foodbankNovContents.kpi6 > '14.7' && foodbankNovContents.kpi6 <= '19.6')?'orange':(foodbankNovContents.kpi6 > '19.6' && foodbankNovContents.kpi6 < '24.5')?'yellow-7':(foodbankNovContents.kpi6 >= '24.5' && foodbankNovContents.kpi6 < '29.4')?'green':(foodbankNovContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankDecContents.kpi1 == null)?'grey-2':(foodbankDecContents.kpi1 >= '0' && foodbankDecContents.kpi1 <= '238.8')?'red':(foodbankDecContents.kpi1 > '238.8' && foodbankDecContents.kpi1 <= '318.4')?'orange':(foodbankDecContents.kpi1 > '318.4' && foodbankDecContents.kpi1 < '398')?'yellow-7':(foodbankDecContents.kpi1 >= '398' && foodbankDecContents.kpi1 < '477.6')?'green':(foodbankDecContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi2 == null)?'grey-2':(foodbankDecContents.kpi2 >= '0' && foodbankDecContents.kpi2 <= '244.2')?'red':(foodbankDecContents.kpi2 > '244.2' && foodbankDecContents.kpi2 <= '325.6')?'orange':(foodbankDecContents.kpi2 > '325.6' && foodbankDecContents.kpi2 < '407')?'yellow-7':(foodbankDecContents.kpi2 >= '407' && foodbankDecContents.kpi2 < '488.4')?'green':(foodbankDecContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi3 == null)?'grey-2':(foodbankDecContents.kpi3 >= '0' && foodbankDecContents.kpi3 <= '524.25')?'red':(foodbankDecContents.kpi3 > '524.25' && foodbankDecContents.kpi3 <= '699')?'orange':(foodbankDecContents.kpi3 > '699' && foodbankDecContents.kpi3 < '873.75')?'yellow-7':(foodbankDecContents.kpi3 >= '873.75' && foodbankDecContents.kpi3 < '1048.5')?'green':(foodbankDecContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi4 == null)?'grey-2':(foodbankDecContents.kpi4 >= '0' && foodbankDecContents.kpi4 <= '12.45')?'red':(foodbankDecContents.kpi4 > '12.45' && foodbankDecContents.kpi4 <= '16.6')?'orange':(foodbankDecContents.kpi4 > '16.6' && foodbankDecContents.kpi4 < '20.75')?'yellow-7':(foodbankDecContents.kpi4 >= '20.75' && foodbankDecContents.kpi4 < '24.9')?'green':(foodbankDecContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi5 == null)?'grey-2':(foodbankDecContents.kpi5 >= '0' && foodbankDecContents.kpi5 <= '92.4')?'red':(foodbankDecContents.kpi5 > '92.4' && foodbankDecContents.kpi5 <= '123.2')?'orange':(foodbankDecContents.kpi5 > '123.2' && foodbankDecContents.kpi5 < '154')?'yellow-7':(foodbankDecContents.kpi5 >= '154' && foodbankDecContents.kpi5 < '184.8')?'green':(foodbankDecContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi6 == null)?'grey-2':(foodbankDecContents.kpi6 >= '0' && foodbankDecContents.kpi6 <= '14.7')?'red':(foodbankDecContents.kpi6 > '14.7' && foodbankDecContents.kpi6 <= '19.6')?'orange':(foodbankDecContents.kpi6 > '19.6' && foodbankDecContents.kpi6 < '24.5')?'yellow-7':(foodbankDecContents.kpi6 >= '24.5' && foodbankDecContents.kpi6 < '29.4')?'green':(foodbankDecContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip>Activities (#)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 5
                                <q-tooltip># Households Receiving Deliveries</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 6
                                <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankJanContents.kpi1 == null)?'grey-2':(foodbankJanContents.kpi1 >= '0' && foodbankJanContents.kpi1 <= '238.8')?'red':(foodbankJanContents.kpi1 > '238.8' && foodbankJanContents.kpi1 <= '318.4')?'orange':(foodbankJanContents.kpi1 > '318.4' && foodbankJanContents.kpi1 < '398')?'yellow-7':(foodbankJanContents.kpi1 >= '398' && foodbankJanContents.kpi1 < '477.6')?'green':(foodbankJanContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi2 == null)?'grey-2':(foodbankJanContents.kpi2 >= '0' && foodbankJanContents.kpi2 <= '244.2')?'red':(foodbankJanContents.kpi2 > '244.2' && foodbankJanContents.kpi2 <= '325.6')?'orange':(foodbankJanContents.kpi2 > '325.6' && foodbankJanContents.kpi2 < '407')?'yellow-7':(foodbankJanContents.kpi2 >= '407' && foodbankJanContents.kpi2 < '488.4')?'green':(foodbankJanContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi3 == null)?'grey-2':(foodbankJanContents.kpi3 >= '0' && foodbankJanContents.kpi3 <= '524.25')?'red':(foodbankJanContents.kpi3 > '524.25' && foodbankJanContents.kpi3 <= '699')?'orange':(foodbankJanContents.kpi3 > '699' && foodbankJanContents.kpi3 < '873.75')?'yellow-7':(foodbankJanContents.kpi3 >= '873.75' && foodbankJanContents.kpi3 < '1048.5')?'green':(foodbankJanContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi4 == null)?'grey-2':(foodbankJanContents.kpi4 >= '0' && foodbankJanContents.kpi4 <= '12.45')?'red':(foodbankJanContents.kpi4 > '12.45' && foodbankJanContents.kpi4 <= '16.6')?'orange':(foodbankJanContents.kpi4 > '16.6' && foodbankJanContents.kpi4 < '20.75')?'yellow-7':(foodbankJanContents.kpi4 >= '20.75' && foodbankJanContents.kpi4 < '24.9')?'green':(foodbankJanContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi5 == null)?'grey-2':(foodbankJanContents.kpi5 >= '0' && foodbankJanContents.kpi5 <= '92.4')?'red':(foodbankJanContents.kpi5 > '92.4' && foodbankJanContents.kpi5 <= '123.2')?'orange':(foodbankJanContents.kpi5 > '123.2' && foodbankJanContents.kpi5 < '154')?'yellow-7':(foodbankJanContents.kpi5 >= '154' && foodbankJanContents.kpi5 < '184.8')?'green':(foodbankJanContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi6 == null)?'grey-2':(foodbankJanContents.kpi6 >= '0' && foodbankJanContents.kpi6 <= '14.7')?'red':(foodbankJanContents.kpi6 > '14.7' && foodbankJanContents.kpi6 <= '19.6')?'orange':(foodbankJanContents.kpi6 > '19.6' && foodbankJanContents.kpi6 < '24.5')?'yellow-7':(foodbankJanContents.kpi6 >= '24.5' && foodbankJanContents.kpi6 < '29.4')?'green':(foodbankJanContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankFebContents.kpi1 == null)?'grey-2':(foodbankFebContents.kpi1 >= '0' && foodbankFebContents.kpi1 <= '238.8')?'red':(foodbankFebContents.kpi1 > '238.8' && foodbankFebContents.kpi1 <= '318.4')?'orange':(foodbankFebContents.kpi1 > '318.4' && foodbankFebContents.kpi1 < '398')?'yellow-7':(foodbankFebContents.kpi1 >= '398' && foodbankFebContents.kpi1 < '477.6')?'green':(foodbankFebContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi2 == null)?'grey-2':(foodbankFebContents.kpi2 >= '0' && foodbankFebContents.kpi2 <= '244.2')?'red':(foodbankFebContents.kpi2 > '244.2' && foodbankFebContents.kpi2 <= '325.6')?'orange':(foodbankFebContents.kpi2 > '325.6' && foodbankFebContents.kpi2 < '407')?'yellow-7':(foodbankFebContents.kpi2 >= '407' && foodbankFebContents.kpi2 < '488.4')?'green':(foodbankFebContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi3 == null)?'grey-2':(foodbankFebContents.kpi3 >= '0' && foodbankFebContents.kpi3 <= '524.25')?'red':(foodbankFebContents.kpi3 > '524.25' && foodbankFebContents.kpi3 <= '699')?'orange':(foodbankFebContents.kpi3 > '699' && foodbankFebContents.kpi3 < '873.75')?'yellow-7':(foodbankFebContents.kpi3 >= '873.75' && foodbankFebContents.kpi3 < '1048.5')?'green':(foodbankFebContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi4 == null)?'grey-2':(foodbankFebContents.kpi4 >= '0' && foodbankFebContents.kpi4 <= '12.45')?'red':(foodbankFebContents.kpi4 > '12.45' && foodbankFebContents.kpi4 <= '16.6')?'orange':(foodbankFebContents.kpi4 > '16.6' && foodbankFebContents.kpi4 < '20.75')?'yellow-7':(foodbankFebContents.kpi4 >= '20.75' && foodbankFebContents.kpi4 < '24.9')?'green':(foodbankFebContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi5 == null)?'grey-2':(foodbankFebContents.kpi5 >= '0' && foodbankFebContents.kpi5 <= '92.4')?'red':(foodbankFebContents.kpi5 > '92.4' && foodbankFebContents.kpi5 <= '123.2')?'orange':(foodbankFebContents.kpi5 > '123.2' && foodbankFebContents.kpi5 < '154')?'yellow-7':(foodbankFebContents.kpi5 >= '154' && foodbankFebContents.kpi5 < '184.8')?'green':(foodbankFebContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi6 == null)?'grey-2':(foodbankFebContents.kpi6 >= '0' && foodbankFebContents.kpi6 <= '14.7')?'red':(foodbankFebContents.kpi6 > '14.7' && foodbankFebContents.kpi6 <= '19.6')?'orange':(foodbankFebContents.kpi6 > '19.6' && foodbankFebContents.kpi6 < '24.5')?'yellow-7':(foodbankFebContents.kpi6 >= '24.5' && foodbankFebContents.kpi6 < '29.4')?'green':(foodbankFebContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankMarContents.kpi1 == null)?'grey-2':(foodbankMarContents.kpi1 >= '0' && foodbankMarContents.kpi1 <= '238.8')?'red':(foodbankMarContents.kpi1 > '238.8' && foodbankMarContents.kpi1 <= '318.4')?'orange':(foodbankMarContents.kpi1 > '318.4' && foodbankMarContents.kpi1 < '398')?'yellow-7':(foodbankMarContents.kpi1 >= '398' && foodbankMarContents.kpi1 < '477.6')?'green':(foodbankMarContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi2 == null)?'grey-2':(foodbankMarContents.kpi2 >= '0' && foodbankMarContents.kpi2 <= '244.2')?'red':(foodbankMarContents.kpi2 > '244.2' && foodbankMarContents.kpi2 <= '325.6')?'orange':(foodbankMarContents.kpi2 > '325.6' && foodbankMarContents.kpi2 < '407')?'yellow-7':(foodbankMarContents.kpi2 >= '407' && foodbankMarContents.kpi2 < '488.4')?'green':(foodbankMarContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi3 == null)?'grey-2':(foodbankMarContents.kpi3 >= '0' && foodbankMarContents.kpi3 <= '524.25')?'red':(foodbankMarContents.kpi3 > '524.25' && foodbankMarContents.kpi3 <= '699')?'orange':(foodbankMarContents.kpi3 > '699' && foodbankMarContents.kpi3 < '873.75')?'yellow-7':(foodbankMarContents.kpi3 >= '873.75' && foodbankMarContents.kpi3 < '1048.5')?'green':(foodbankMarContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi4 == null)?'grey-2':(foodbankMarContents.kpi4 >= '0' && foodbankMarContents.kpi4 <= '12.45')?'red':(foodbankMarContents.kpi4 > '12.45' && foodbankMarContents.kpi4 <= '16.6')?'orange':(foodbankMarContents.kpi4 > '16.6' && foodbankMarContents.kpi4 < '20.75')?'yellow-7':(foodbankMarContents.kpi4 >= '20.75' && foodbankMarContents.kpi4 < '24.9')?'green':(foodbankMarContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi5 == null)?'grey-2':(foodbankMarContents.kpi5 >= '0' && foodbankMarContents.kpi5 <= '92.4')?'red':(foodbankMarContents.kpi5 > '92.4' && foodbankMarContents.kpi5 <= '123.2')?'orange':(foodbankMarContents.kpi5 > '123.2' && foodbankMarContents.kpi5 < '154')?'yellow-7':(foodbankMarContents.kpi5 >= '154' && foodbankMarContents.kpi5 < '184.8')?'green':(foodbankMarContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi6 == null)?'grey-2':(foodbankMarContents.kpi6 >= '0' && foodbankMarContents.kpi6 <= '14.7')?'red':(foodbankMarContents.kpi6 > '14.7' && foodbankMarContents.kpi6 <= '19.6')?'orange':(foodbankMarContents.kpi6 > '19.6' && foodbankMarContents.kpi6 < '24.5')?'yellow-7':(foodbankMarContents.kpi6 >= '24.5' && foodbankMarContents.kpi6 < '29.4')?'green':(foodbankMarContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankAprContents.kpi1 == null)?'grey-2':(foodbankAprContents.kpi1 >= '0' && foodbankAprContents.kpi1 <= '238.8')?'red':(foodbankAprContents.kpi1 > '238.8' && foodbankAprContents.kpi1 <= '318.4')?'orange':(foodbankAprContents.kpi1 > '318.4' && foodbankAprContents.kpi1 < '398')?'yellow-7':(foodbankAprContents.kpi1 >= '398' && foodbankAprContents.kpi1 < '477.6')?'green':(foodbankAprContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi2 == null)?'grey-2':(foodbankAprContents.kpi2 >= '0' && foodbankAprContents.kpi2 <= '244.2')?'red':(foodbankAprContents.kpi2 > '244.2' && foodbankAprContents.kpi2 <= '325.6')?'orange':(foodbankAprContents.kpi2 > '325.6' && foodbankAprContents.kpi2 < '407')?'yellow-7':(foodbankAprContents.kpi2 >= '407' && foodbankAprContents.kpi2 < '488.4')?'green':(foodbankAprContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi3 == null)?'grey-2':(foodbankAprContents.kpi3 >= '0' && foodbankAprContents.kpi3 <= '524.25')?'red':(foodbankAprContents.kpi3 > '524.25' && foodbankAprContents.kpi3 <= '699')?'orange':(foodbankAprContents.kpi3 > '699' && foodbankAprContents.kpi3 < '873.75')?'yellow-7':(foodbankAprContents.kpi3 >= '873.75' && foodbankAprContents.kpi3 < '1048.5')?'green':(foodbankAprContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi4 == null)?'grey-2':(foodbankAprContents.kpi4 >= '0' && foodbankAprContents.kpi4 <= '12.45')?'red':(foodbankAprContents.kpi4 > '12.45' && foodbankAprContents.kpi4 <= '16.6')?'orange':(foodbankAprContents.kpi4 > '16.6' && foodbankAprContents.kpi4 < '20.75')?'yellow-7':(foodbankAprContents.kpi4 >= '20.75' && foodbankAprContents.kpi4 < '24.9')?'green':(foodbankAprContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi5 == null)?'grey-2':(foodbankAprContents.kpi5 >= '0' && foodbankAprContents.kpi5 <= '92.4')?'red':(foodbankAprContents.kpi5 > '92.4' && foodbankAprContents.kpi5 <= '123.2')?'orange':(foodbankAprContents.kpi5 > '123.2' && foodbankAprContents.kpi5 < '154')?'yellow-7':(foodbankAprContents.kpi5 >= '154' && foodbankAprContents.kpi5 < '184.8')?'green':(foodbankAprContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi6 == null)?'grey-2':(foodbankAprContents.kpi6 >= '0' && foodbankAprContents.kpi6 <= '14.7')?'red':(foodbankAprContents.kpi6 > '14.7' && foodbankAprContents.kpi6 <= '19.6')?'orange':(foodbankAprContents.kpi6 > '19.6' && foodbankAprContents.kpi6 < '24.5')?'yellow-7':(foodbankAprContents.kpi6 >= '24.5' && foodbankAprContents.kpi6 < '29.4')?'green':(foodbankAprContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankMayContents.kpi1 == null)?'grey-2':(foodbankMayContents.kpi1 >= '0' && foodbankMayContents.kpi1 <= '238.8')?'red':(foodbankMayContents.kpi1 > '238.8' && foodbankMayContents.kpi1 <= '318.4')?'orange':(foodbankMayContents.kpi1 > '318.4' && foodbankMayContents.kpi1 < '398')?'yellow-7':(foodbankMayContents.kpi1 >= '398' && foodbankMayContents.kpi1 < '477.6')?'green':(foodbankMayContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi2 == null)?'grey-2':(foodbankMayContents.kpi2 >= '0' && foodbankMayContents.kpi2 <= '244.2')?'red':(foodbankMayContents.kpi2 > '244.2' && foodbankMayContents.kpi2 <= '325.6')?'orange':(foodbankMayContents.kpi2 > '325.6' && foodbankMayContents.kpi2 < '407')?'yellow-7':(foodbankMayContents.kpi2 >= '407' && foodbankMayContents.kpi2 < '488.4')?'green':(foodbankMayContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi3 == null)?'grey-2':(foodbankMayContents.kpi3 >= '0' && foodbankMayContents.kpi3 <= '524.25')?'red':(foodbankMayContents.kpi3 > '524.25' && foodbankMayContents.kpi3 <= '699')?'orange':(foodbankMayContents.kpi3 > '699' && foodbankMayContents.kpi3 < '873.75')?'yellow-7':(foodbankMayContents.kpi3 >= '873.75' && foodbankMayContents.kpi3 < '1048.5')?'green':(foodbankMayContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi4 == null)?'grey-2':(foodbankMayContents.kpi4 >= '0' && foodbankMayContents.kpi4 <= '12.45')?'red':(foodbankMayContents.kpi4 > '12.45' && foodbankMayContents.kpi4 <= '16.6')?'orange':(foodbankMayContents.kpi4 > '16.6' && foodbankMayContents.kpi4 < '20.75')?'yellow-7':(foodbankMayContents.kpi4 >= '20.75' && foodbankMayContents.kpi4 < '24.9')?'green':(foodbankMayContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi5 == null)?'grey-2':(foodbankMayContents.kpi5 >= '0' && foodbankMayContents.kpi5 <= '92.4')?'red':(foodbankMayContents.kpi5 > '92.4' && foodbankMayContents.kpi5 <= '123.2')?'orange':(foodbankMayContents.kpi5 > '123.2' && foodbankMayContents.kpi5 < '154')?'yellow-7':(foodbankMayContents.kpi5 >= '154' && foodbankMayContents.kpi5 < '184.8')?'green':(foodbankMayContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi6 == null)?'grey-2':(foodbankMayContents.kpi6 >= '0' && foodbankMayContents.kpi6 <= '14.7')?'red':(foodbankMayContents.kpi6 > '14.7' && foodbankMayContents.kpi6 <= '19.6')?'orange':(foodbankMayContents.kpi6 > '19.6' && foodbankMayContents.kpi6 < '24.5')?'yellow-7':(foodbankMayContents.kpi6 >= '24.5' && foodbankMayContents.kpi6 < '29.4')?'green':(foodbankMayContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankJunContents.kpi1 == null)?'grey-2':(foodbankJunContents.kpi1 >= '0' && foodbankJunContents.kpi1 <= '238.8')?'red':(foodbankJunContents.kpi1 > '238.8' && foodbankJunContents.kpi1 <= '318.4')?'orange':(foodbankJunContents.kpi1 > '318.4' && foodbankJunContents.kpi1 < '398')?'yellow-7':(foodbankJunContents.kpi1 >= '398' && foodbankJunContents.kpi1 < '477.6')?'green':(foodbankJunContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi2 == null)?'grey-2':(foodbankJunContents.kpi2 >= '0' && foodbankJunContents.kpi2 <= '244.2')?'red':(foodbankJunContents.kpi2 > '244.2' && foodbankJunContents.kpi2 <= '325.6')?'orange':(foodbankJunContents.kpi2 > '325.6' && foodbankJunContents.kpi2 < '407')?'yellow-7':(foodbankJunContents.kpi2 >= '407' && foodbankJunContents.kpi2 < '488.4')?'green':(foodbankJunContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi3 == null)?'grey-2':(foodbankJunContents.kpi3 >= '0' && foodbankJunContents.kpi3 <= '524.25')?'red':(foodbankJunContents.kpi3 > '524.25' && foodbankJunContents.kpi3 <= '699')?'orange':(foodbankJunContents.kpi3 > '699' && foodbankJunContents.kpi3 < '873.75')?'yellow-7':(foodbankJunContents.kpi3 >= '873.75' && foodbankJunContents.kpi3 < '1048.5')?'green':(foodbankJunContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi4 == null)?'grey-2':(foodbankJunContents.kpi4 >= '0' && foodbankJunContents.kpi4 <= '12.45')?'red':(foodbankJunContents.kpi4 > '12.45' && foodbankJunContents.kpi4 <= '16.6')?'orange':(foodbankJunContents.kpi4 > '16.6' && foodbankJunContents.kpi4 < '20.75')?'yellow-7':(foodbankJunContents.kpi4 >= '20.75' && foodbankJunContents.kpi4 < '24.9')?'green':(foodbankJunContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi5 == null)?'grey-2':(foodbankJunContents.kpi5 >= '0' && foodbankJunContents.kpi5 <= '92.4')?'red':(foodbankJunContents.kpi5 > '92.4' && foodbankJunContents.kpi5 <= '123.2')?'orange':(foodbankJunContents.kpi5 > '123.2' && foodbankJunContents.kpi5 < '154')?'yellow-7':(foodbankJunContents.kpi5 >= '154' && foodbankJunContents.kpi5 < '184.8')?'green':(foodbankJunContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi6 == null)?'grey-2':(foodbankJunContents.kpi6 >= '0' && foodbankJunContents.kpi6 <= '14.7')?'red':(foodbankJunContents.kpi6 > '14.7' && foodbankJunContents.kpi6 <= '19.6')?'orange':(foodbankJunContents.kpi6 > '19.6' && foodbankJunContents.kpi6 < '24.5')?'yellow-7':(foodbankJunContents.kpi6 >= '24.5' && foodbankJunContents.kpi6 < '29.4')?'green':(foodbankJunContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankJulContents.kpi1 == null)?'grey-2':(foodbankJulContents.kpi1 >= '0' && foodbankJulContents.kpi1 <= '238.8')?'red':(foodbankJulContents.kpi1 > '238.8' && foodbankJulContents.kpi1 <= '318.4')?'orange':(foodbankJulContents.kpi1 > '318.4' && foodbankJulContents.kpi1 < '398')?'yellow-7':(foodbankJulContents.kpi1 >= '398' && foodbankJulContents.kpi1 < '477.6')?'green':(foodbankJulContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi2 == null)?'grey-2':(foodbankJulContents.kpi2 >= '0' && foodbankJulContents.kpi2 <= '244.2')?'red':(foodbankJulContents.kpi2 > '244.2' && foodbankJulContents.kpi2 <= '325.6')?'orange':(foodbankJulContents.kpi2 > '325.6' && foodbankJulContents.kpi2 < '407')?'yellow-7':(foodbankJulContents.kpi2 >= '407' && foodbankJulContents.kpi2 < '488.4')?'green':(foodbankJulContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi3 == null)?'grey-2':(foodbankJulContents.kpi3 >= '0' && foodbankJulContents.kpi3 <= '524.25')?'red':(foodbankJulContents.kpi3 > '524.25' && foodbankJulContents.kpi3 <= '699')?'orange':(foodbankJulContents.kpi3 > '699' && foodbankJulContents.kpi3 < '873.75')?'yellow-7':(foodbankJulContents.kpi3 >= '873.75' && foodbankJulContents.kpi3 < '1048.5')?'green':(foodbankJulContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi4 == null)?'grey-2':(foodbankJulContents.kpi4 >= '0' && foodbankJulContents.kpi4 <= '12.45')?'red':(foodbankJulContents.kpi4 > '12.45' && foodbankJulContents.kpi4 <= '16.6')?'orange':(foodbankJulContents.kpi4 > '16.6' && foodbankJulContents.kpi4 < '20.75')?'yellow-7':(foodbankJulContents.kpi4 >= '20.75' && foodbankJulContents.kpi4 < '24.9')?'green':(foodbankJulContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi5 == null)?'grey-2':(foodbankJulContents.kpi5 >= '0' && foodbankJulContents.kpi5 <= '92.4')?'red':(foodbankJulContents.kpi5 > '92.4' && foodbankJulContents.kpi5 <= '123.2')?'orange':(foodbankJulContents.kpi5 > '123.2' && foodbankJulContents.kpi5 < '154')?'yellow-7':(foodbankJulContents.kpi5 >= '154' && foodbankJulContents.kpi5 < '184.8')?'green':(foodbankJulContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi6 == null)?'grey-2':(foodbankJulContents.kpi6 >= '0' && foodbankJulContents.kpi6 <= '14.7')?'red':(foodbankJulContents.kpi6 > '14.7' && foodbankJulContents.kpi6 <= '19.6')?'orange':(foodbankJulContents.kpi6 > '19.6' && foodbankJulContents.kpi6 < '24.5')?'yellow-7':(foodbankJulContents.kpi6 >= '24.5' && foodbankJulContents.kpi6 < '29.4')?'green':(foodbankJulContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankAugContents.kpi1 == null)?'grey-2':(foodbankAugContents.kpi1 >= '0' && foodbankAugContents.kpi1 <= '238.8')?'red':(foodbankAugContents.kpi1 > '238.8' && foodbankAugContents.kpi1 <= '318.4')?'orange':(foodbankAugContents.kpi1 > '318.4' && foodbankAugContents.kpi1 < '398')?'yellow-7':(foodbankAugContents.kpi1 >= '398' && foodbankAugContents.kpi1 < '477.6')?'green':(foodbankAugContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi2 == null)?'grey-2':(foodbankAugContents.kpi2 >= '0' && foodbankAugContents.kpi2 <= '244.2')?'red':(foodbankAugContents.kpi2 > '244.2' && foodbankAugContents.kpi2 <= '325.6')?'orange':(foodbankAugContents.kpi2 > '325.6' && foodbankAugContents.kpi2 < '407')?'yellow-7':(foodbankAugContents.kpi2 >= '407' && foodbankAugContents.kpi2 < '488.4')?'green':(foodbankAugContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi3 == null)?'grey-2':(foodbankAugContents.kpi3 >= '0' && foodbankAugContents.kpi3 <= '524.25')?'red':(foodbankAugContents.kpi3 > '524.25' && foodbankAugContents.kpi3 <= '699')?'orange':(foodbankAugContents.kpi3 > '699' && foodbankAugContents.kpi3 < '873.75')?'yellow-7':(foodbankAugContents.kpi3 >= '873.75' && foodbankAugContents.kpi3 < '1048.5')?'green':(foodbankAugContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi4 == null)?'grey-2':(foodbankAugContents.kpi4 >= '0' && foodbankAugContents.kpi4 <= '12.45')?'red':(foodbankAugContents.kpi4 > '12.45' && foodbankAugContents.kpi4 <= '16.6')?'orange':(foodbankAugContents.kpi4 > '16.6' && foodbankAugContents.kpi4 < '20.75')?'yellow-7':(foodbankAugContents.kpi4 >= '20.75' && foodbankAugContents.kpi4 < '24.9')?'green':(foodbankAugContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi5 == null)?'grey-2':(foodbankAugContents.kpi5 >= '0' && foodbankAugContents.kpi5 <= '92.4')?'red':(foodbankAugContents.kpi5 > '92.4' && foodbankAugContents.kpi5 <= '123.2')?'orange':(foodbankAugContents.kpi5 > '123.2' && foodbankAugContents.kpi5 < '154')?'yellow-7':(foodbankAugContents.kpi5 >= '154' && foodbankAugContents.kpi5 < '184.8')?'green':(foodbankAugContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi6 == null)?'grey-2':(foodbankAugContents.kpi6 >= '0' && foodbankAugContents.kpi6 <= '14.7')?'red':(foodbankAugContents.kpi6 > '14.7' && foodbankAugContents.kpi6 <= '19.6')?'orange':(foodbankAugContents.kpi6 > '19.6' && foodbankAugContents.kpi6 < '24.5')?'yellow-7':(foodbankAugContents.kpi6 >= '24.5' && foodbankAugContents.kpi6 < '29.4')?'green':(foodbankAugContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankSepContents.kpi1 == null)?'grey-2':(foodbankSepContents.kpi1 >= '0' && foodbankSepContents.kpi1 <= '238.8')?'red':(foodbankSepContents.kpi1 > '238.8' && foodbankSepContents.kpi1 <= '318.4')?'orange':(foodbankSepContents.kpi1 > '318.4' && foodbankSepContents.kpi1 < '398')?'yellow-7':(foodbankSepContents.kpi1 >= '398' && foodbankSepContents.kpi1 < '477.6')?'green':(foodbankSepContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi2 == null)?'grey-2':(foodbankSepContents.kpi2 >= '0' && foodbankSepContents.kpi2 <= '244.2')?'red':(foodbankSepContents.kpi2 > '244.2' && foodbankSepContents.kpi2 <= '325.6')?'orange':(foodbankSepContents.kpi2 > '325.6' && foodbankSepContents.kpi2 < '407')?'yellow-7':(foodbankSepContents.kpi2 >= '407' && foodbankSepContents.kpi2 < '488.4')?'green':(foodbankSepContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi3 == null)?'grey-2':(foodbankSepContents.kpi3 >= '0' && foodbankSepContents.kpi3 <= '524.25')?'red':(foodbankSepContents.kpi3 > '524.25' && foodbankSepContents.kpi3 <= '699')?'orange':(foodbankSepContents.kpi3 > '699' && foodbankSepContents.kpi3 < '873.75')?'yellow-7':(foodbankSepContents.kpi3 >= '873.75' && foodbankSepContents.kpi3 < '1048.5')?'green':(foodbankSepContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi4 == null)?'grey-2':(foodbankSepContents.kpi4 >= '0' && foodbankSepContents.kpi4 <= '12.45')?'red':(foodbankSepContents.kpi4 > '12.45' && foodbankSepContents.kpi4 <= '16.6')?'orange':(foodbankSepContents.kpi4 > '16.6' && foodbankSepContents.kpi4 < '20.75')?'yellow-7':(foodbankSepContents.kpi4 >= '20.75' && foodbankSepContents.kpi4 < '24.9')?'green':(foodbankSepContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi5 == null)?'grey-2':(foodbankSepContents.kpi5 >= '0' && foodbankSepContents.kpi5 <= '92.4')?'red':(foodbankSepContents.kpi5 > '92.4' && foodbankSepContents.kpi5 <= '123.2')?'orange':(foodbankSepContents.kpi5 > '123.2' && foodbankSepContents.kpi5 < '154')?'yellow-7':(foodbankSepContents.kpi5 >= '154' && foodbankSepContents.kpi5 < '184.8')?'green':(foodbankSepContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi6 == null)?'grey-2':(foodbankSepContents.kpi6 >= '0' && foodbankSepContents.kpi6 <= '14.7')?'red':(foodbankSepContents.kpi6 > '14.7' && foodbankSepContents.kpi6 <= '19.6')?'orange':(foodbankSepContents.kpi6 > '19.6' && foodbankSepContents.kpi6 < '24.5')?'yellow-7':(foodbankSepContents.kpi6 >= '24.5' && foodbankSepContents.kpi6 < '29.4')?'green':(foodbankSepContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankOctContents.kpi1 == null)?'grey-2':(foodbankOctContents.kpi1 >= '0' && foodbankOctContents.kpi1 <= '238.8')?'red':(foodbankOctContents.kpi1 > '238.8' && foodbankOctContents.kpi1 <= '318.4')?'orange':(foodbankOctContents.kpi1 > '318.4' && foodbankOctContents.kpi1 < '398')?'yellow-7':(foodbankOctContents.kpi1 >= '398' && foodbankOctContents.kpi1 < '477.6')?'green':(foodbankOctContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi2 == null)?'grey-2':(foodbankOctContents.kpi2 >= '0' && foodbankOctContents.kpi2 <= '244.2')?'red':(foodbankOctContents.kpi2 > '244.2' && foodbankOctContents.kpi2 <= '325.6')?'orange':(foodbankOctContents.kpi2 > '325.6' && foodbankOctContents.kpi2 < '407')?'yellow-7':(foodbankOctContents.kpi2 >= '407' && foodbankOctContents.kpi2 < '488.4')?'green':(foodbankOctContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi3 == null)?'grey-2':(foodbankOctContents.kpi3 >= '0' && foodbankOctContents.kpi3 <= '524.25')?'red':(foodbankOctContents.kpi3 > '524.25' && foodbankOctContents.kpi3 <= '699')?'orange':(foodbankOctContents.kpi3 > '699' && foodbankOctContents.kpi3 < '873.75')?'yellow-7':(foodbankOctContents.kpi3 >= '873.75' && foodbankOctContents.kpi3 < '1048.5')?'green':(foodbankOctContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi4 == null)?'grey-2':(foodbankOctContents.kpi4 >= '0' && foodbankOctContents.kpi4 <= '12.45')?'red':(foodbankOctContents.kpi4 > '12.45' && foodbankOctContents.kpi4 <= '16.6')?'orange':(foodbankOctContents.kpi4 > '16.6' && foodbankOctContents.kpi4 < '20.75')?'yellow-7':(foodbankOctContents.kpi4 >= '20.75' && foodbankOctContents.kpi4 < '24.9')?'green':(foodbankOctContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi5 == null)?'grey-2':(foodbankOctContents.kpi5 >= '0' && foodbankOctContents.kpi5 <= '92.4')?'red':(foodbankOctContents.kpi5 > '92.4' && foodbankOctContents.kpi5 <= '123.2')?'orange':(foodbankOctContents.kpi5 > '123.2' && foodbankOctContents.kpi5 < '154')?'yellow-7':(foodbankOctContents.kpi5 >= '154' && foodbankOctContents.kpi5 < '184.8')?'green':(foodbankOctContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi6 == null)?'grey-2':(foodbankOctContents.kpi6 >= '0' && foodbankOctContents.kpi6 <= '14.7')?'red':(foodbankOctContents.kpi6 > '14.7' && foodbankOctContents.kpi6 <= '19.6')?'orange':(foodbankOctContents.kpi6 > '19.6' && foodbankOctContents.kpi6 < '24.5')?'yellow-7':(foodbankOctContents.kpi6 >= '24.5' && foodbankOctContents.kpi6 < '29.4')?'green':(foodbankOctContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankNovContents.kpi1 == null)?'grey-2':(foodbankNovContents.kpi1 >= '0' && foodbankNovContents.kpi1 <= '238.8')?'red':(foodbankNovContents.kpi1 > '238.8' && foodbankNovContents.kpi1 <= '318.4')?'orange':(foodbankNovContents.kpi1 > '318.4' && foodbankNovContents.kpi1 < '398')?'yellow-7':(foodbankNovContents.kpi1 >= '398' && foodbankNovContents.kpi1 < '477.6')?'green':(foodbankNovContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi2 == null)?'grey-2':(foodbankNovContents.kpi2 >= '0' && foodbankNovContents.kpi2 <= '244.2')?'red':(foodbankNovContents.kpi2 > '244.2' && foodbankNovContents.kpi2 <= '325.6')?'orange':(foodbankNovContents.kpi2 > '325.6' && foodbankNovContents.kpi2 < '407')?'yellow-7':(foodbankNovContents.kpi2 >= '407' && foodbankNovContents.kpi2 < '488.4')?'green':(foodbankNovContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi3 == null)?'grey-2':(foodbankNovContents.kpi3 >= '0' && foodbankNovContents.kpi3 <= '524.25')?'red':(foodbankNovContents.kpi3 > '524.25' && foodbankNovContents.kpi3 <= '699')?'orange':(foodbankNovContents.kpi3 > '699' && foodbankNovContents.kpi3 < '873.75')?'yellow-7':(foodbankNovContents.kpi3 >= '873.75' && foodbankNovContents.kpi3 < '1048.5')?'green':(foodbankNovContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi4 == null)?'grey-2':(foodbankNovContents.kpi4 >= '0' && foodbankNovContents.kpi4 <= '12.45')?'red':(foodbankNovContents.kpi4 > '12.45' && foodbankNovContents.kpi4 <= '16.6')?'orange':(foodbankNovContents.kpi4 > '16.6' && foodbankNovContents.kpi4 < '20.75')?'yellow-7':(foodbankNovContents.kpi4 >= '20.75' && foodbankNovContents.kpi4 < '24.9')?'green':(foodbankNovContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi5 == null)?'grey-2':(foodbankNovContents.kpi5 >= '0' && foodbankNovContents.kpi5 <= '92.4')?'red':(foodbankNovContents.kpi5 > '92.4' && foodbankNovContents.kpi5 <= '123.2')?'orange':(foodbankNovContents.kpi5 > '123.2' && foodbankNovContents.kpi5 < '154')?'yellow-7':(foodbankNovContents.kpi5 >= '154' && foodbankNovContents.kpi5 < '184.8')?'green':(foodbankNovContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi6 == null)?'grey-2':(foodbankNovContents.kpi6 >= '0' && foodbankNovContents.kpi6 <= '14.7')?'red':(foodbankNovContents.kpi6 > '14.7' && foodbankNovContents.kpi6 <= '19.6')?'orange':(foodbankNovContents.kpi6 > '19.6' && foodbankNovContents.kpi6 < '24.5')?'yellow-7':(foodbankNovContents.kpi6 >= '24.5' && foodbankNovContents.kpi6 < '29.4')?'green':(foodbankNovContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankDecContents.kpi1 == null)?'grey-2':(foodbankDecContents.kpi1 >= '0' && foodbankDecContents.kpi1 <= '238.8')?'red':(foodbankDecContents.kpi1 > '238.8' && foodbankDecContents.kpi1 <= '318.4')?'orange':(foodbankDecContents.kpi1 > '318.4' && foodbankDecContents.kpi1 < '398')?'yellow-7':(foodbankDecContents.kpi1 >= '398' && foodbankDecContents.kpi1 < '477.6')?'green':(foodbankDecContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi2 == null)?'grey-2':(foodbankDecContents.kpi2 >= '0' && foodbankDecContents.kpi2 <= '244.2')?'red':(foodbankDecContents.kpi2 > '244.2' && foodbankDecContents.kpi2 <= '325.6')?'orange':(foodbankDecContents.kpi2 > '325.6' && foodbankDecContents.kpi2 < '407')?'yellow-7':(foodbankDecContents.kpi2 >= '407' && foodbankDecContents.kpi2 < '488.4')?'green':(foodbankDecContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi3 == null)?'grey-2':(foodbankDecContents.kpi3 >= '0' && foodbankDecContents.kpi3 <= '524.25')?'red':(foodbankDecContents.kpi3 > '524.25' && foodbankDecContents.kpi3 <= '699')?'orange':(foodbankDecContents.kpi3 > '699' && foodbankDecContents.kpi3 < '873.75')?'yellow-7':(foodbankDecContents.kpi3 >= '873.75' && foodbankDecContents.kpi3 < '1048.5')?'green':(foodbankDecContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi4 == null)?'grey-2':(foodbankDecContents.kpi4 >= '0' && foodbankDecContents.kpi4 <= '12.45')?'red':(foodbankDecContents.kpi4 > '12.45' && foodbankDecContents.kpi4 <= '16.6')?'orange':(foodbankDecContents.kpi4 > '16.6' && foodbankDecContents.kpi4 < '20.75')?'yellow-7':(foodbankDecContents.kpi4 >= '20.75' && foodbankDecContents.kpi4 < '24.9')?'green':(foodbankDecContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi5 == null)?'grey-2':(foodbankDecContents.kpi5 >= '0' && foodbankDecContents.kpi5 <= '92.4')?'red':(foodbankDecContents.kpi5 > '92.4' && foodbankDecContents.kpi5 <= '123.2')?'orange':(foodbankDecContents.kpi5 > '123.2' && foodbankDecContents.kpi5 < '154')?'yellow-7':(foodbankDecContents.kpi5 >= '154' && foodbankDecContents.kpi5 < '184.8')?'green':(foodbankDecContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi6 == null)?'grey-2':(foodbankDecContents.kpi6 >= '0' && foodbankDecContents.kpi6 <= '14.7')?'red':(foodbankDecContents.kpi6 > '14.7' && foodbankDecContents.kpi6 <= '19.6')?'orange':(foodbankDecContents.kpi6 > '19.6' && foodbankDecContents.kpi6 < '24.5')?'yellow-7':(foodbankDecContents.kpi6 >= '24.5' && foodbankDecContents.kpi6 < '29.4')?'green':(foodbankDecContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip>Activities (#)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 5
                                <q-tooltip># Households Receiving Deliveries</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 6
                                <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankJanContents.kpi1 == null)?'grey-2':(foodbankJanContents.kpi1 >= '0' && foodbankJanContents.kpi1 <= '238.8')?'red':(foodbankJanContents.kpi1 > '238.8' && foodbankJanContents.kpi1 <= '318.4')?'orange':(foodbankJanContents.kpi1 > '318.4' && foodbankJanContents.kpi1 < '398')?'yellow-7':(foodbankJanContents.kpi1 >= '398' && foodbankJanContents.kpi1 < '477.6')?'green':(foodbankJanContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi2 == null)?'grey-2':(foodbankJanContents.kpi2 >= '0' && foodbankJanContents.kpi2 <= '244.2')?'red':(foodbankJanContents.kpi2 > '244.2' && foodbankJanContents.kpi2 <= '325.6')?'orange':(foodbankJanContents.kpi2 > '325.6' && foodbankJanContents.kpi2 < '407')?'yellow-7':(foodbankJanContents.kpi2 >= '407' && foodbankJanContents.kpi2 < '488.4')?'green':(foodbankJanContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi3 == null)?'grey-2':(foodbankJanContents.kpi3 >= '0' && foodbankJanContents.kpi3 <= '524.25')?'red':(foodbankJanContents.kpi3 > '524.25' && foodbankJanContents.kpi3 <= '699')?'orange':(foodbankJanContents.kpi3 > '699' && foodbankJanContents.kpi3 < '873.75')?'yellow-7':(foodbankJanContents.kpi3 >= '873.75' && foodbankJanContents.kpi3 < '1048.5')?'green':(foodbankJanContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi4 == null)?'grey-2':(foodbankJanContents.kpi4 >= '0' && foodbankJanContents.kpi4 <= '12.45')?'red':(foodbankJanContents.kpi4 > '12.45' && foodbankJanContents.kpi4 <= '16.6')?'orange':(foodbankJanContents.kpi4 > '16.6' && foodbankJanContents.kpi4 < '20.75')?'yellow-7':(foodbankJanContents.kpi4 >= '20.75' && foodbankJanContents.kpi4 < '24.9')?'green':(foodbankJanContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi5 == null)?'grey-2':(foodbankJanContents.kpi5 >= '0' && foodbankJanContents.kpi5 <= '92.4')?'red':(foodbankJanContents.kpi5 > '92.4' && foodbankJanContents.kpi5 <= '123.2')?'orange':(foodbankJanContents.kpi5 > '123.2' && foodbankJanContents.kpi5 < '154')?'yellow-7':(foodbankJanContents.kpi5 >= '154' && foodbankJanContents.kpi5 < '184.8')?'green':(foodbankJanContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi6 == null)?'grey-2':(foodbankJanContents.kpi6 >= '0' && foodbankJanContents.kpi6 <= '14.7')?'red':(foodbankJanContents.kpi6 > '14.7' && foodbankJanContents.kpi6 <= '19.6')?'orange':(foodbankJanContents.kpi6 > '19.6' && foodbankJanContents.kpi6 < '24.5')?'yellow-7':(foodbankJanContents.kpi6 >= '24.5' && foodbankJanContents.kpi6 < '29.4')?'green':(foodbankJanContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankFebContents.kpi1 == null)?'grey-2':(foodbankFebContents.kpi1 >= '0' && foodbankFebContents.kpi1 <= '238.8')?'red':(foodbankFebContents.kpi1 > '238.8' && foodbankFebContents.kpi1 <= '318.4')?'orange':(foodbankFebContents.kpi1 > '318.4' && foodbankFebContents.kpi1 < '398')?'yellow-7':(foodbankFebContents.kpi1 >= '398' && foodbankFebContents.kpi1 < '477.6')?'green':(foodbankFebContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi2 == null)?'grey-2':(foodbankFebContents.kpi2 >= '0' && foodbankFebContents.kpi2 <= '244.2')?'red':(foodbankFebContents.kpi2 > '244.2' && foodbankFebContents.kpi2 <= '325.6')?'orange':(foodbankFebContents.kpi2 > '325.6' && foodbankFebContents.kpi2 < '407')?'yellow-7':(foodbankFebContents.kpi2 >= '407' && foodbankFebContents.kpi2 < '488.4')?'green':(foodbankFebContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi3 == null)?'grey-2':(foodbankFebContents.kpi3 >= '0' && foodbankFebContents.kpi3 <= '524.25')?'red':(foodbankFebContents.kpi3 > '524.25' && foodbankFebContents.kpi3 <= '699')?'orange':(foodbankFebContents.kpi3 > '699' && foodbankFebContents.kpi3 < '873.75')?'yellow-7':(foodbankFebContents.kpi3 >= '873.75' && foodbankFebContents.kpi3 < '1048.5')?'green':(foodbankFebContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi4 == null)?'grey-2':(foodbankFebContents.kpi4 >= '0' && foodbankFebContents.kpi4 <= '12.45')?'red':(foodbankFebContents.kpi4 > '12.45' && foodbankFebContents.kpi4 <= '16.6')?'orange':(foodbankFebContents.kpi4 > '16.6' && foodbankFebContents.kpi4 < '20.75')?'yellow-7':(foodbankFebContents.kpi4 >= '20.75' && foodbankFebContents.kpi4 < '24.9')?'green':(foodbankFebContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi5 == null)?'grey-2':(foodbankFebContents.kpi5 >= '0' && foodbankFebContents.kpi5 <= '92.4')?'red':(foodbankFebContents.kpi5 > '92.4' && foodbankFebContents.kpi5 <= '123.2')?'orange':(foodbankFebContents.kpi5 > '123.2' && foodbankFebContents.kpi5 < '154')?'yellow-7':(foodbankFebContents.kpi5 >= '154' && foodbankFebContents.kpi5 < '184.8')?'green':(foodbankFebContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi6 == null)?'grey-2':(foodbankFebContents.kpi6 >= '0' && foodbankFebContents.kpi6 <= '14.7')?'red':(foodbankFebContents.kpi6 > '14.7' && foodbankFebContents.kpi6 <= '19.6')?'orange':(foodbankFebContents.kpi6 > '19.6' && foodbankFebContents.kpi6 < '24.5')?'yellow-7':(foodbankFebContents.kpi6 >= '24.5' && foodbankFebContents.kpi6 < '29.4')?'green':(foodbankFebContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankMarContents.kpi1 == null)?'grey-2':(foodbankMarContents.kpi1 >= '0' && foodbankMarContents.kpi1 <= '238.8')?'red':(foodbankMarContents.kpi1 > '238.8' && foodbankMarContents.kpi1 <= '318.4')?'orange':(foodbankMarContents.kpi1 > '318.4' && foodbankMarContents.kpi1 < '398')?'yellow-7':(foodbankMarContents.kpi1 >= '398' && foodbankMarContents.kpi1 < '477.6')?'green':(foodbankMarContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi2 == null)?'grey-2':(foodbankMarContents.kpi2 >= '0' && foodbankMarContents.kpi2 <= '244.2')?'red':(foodbankMarContents.kpi2 > '244.2' && foodbankMarContents.kpi2 <= '325.6')?'orange':(foodbankMarContents.kpi2 > '325.6' && foodbankMarContents.kpi2 < '407')?'yellow-7':(foodbankMarContents.kpi2 >= '407' && foodbankMarContents.kpi2 < '488.4')?'green':(foodbankMarContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi3 == null)?'grey-2':(foodbankMarContents.kpi3 >= '0' && foodbankMarContents.kpi3 <= '524.25')?'red':(foodbankMarContents.kpi3 > '524.25' && foodbankMarContents.kpi3 <= '699')?'orange':(foodbankMarContents.kpi3 > '699' && foodbankMarContents.kpi3 < '873.75')?'yellow-7':(foodbankMarContents.kpi3 >= '873.75' && foodbankMarContents.kpi3 < '1048.5')?'green':(foodbankMarContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi4 == null)?'grey-2':(foodbankMarContents.kpi4 >= '0' && foodbankMarContents.kpi4 <= '12.45')?'red':(foodbankMarContents.kpi4 > '12.45' && foodbankMarContents.kpi4 <= '16.6')?'orange':(foodbankMarContents.kpi4 > '16.6' && foodbankMarContents.kpi4 < '20.75')?'yellow-7':(foodbankMarContents.kpi4 >= '20.75' && foodbankMarContents.kpi4 < '24.9')?'green':(foodbankMarContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi5 == null)?'grey-2':(foodbankMarContents.kpi5 >= '0' && foodbankMarContents.kpi5 <= '92.4')?'red':(foodbankMarContents.kpi5 > '92.4' && foodbankMarContents.kpi5 <= '123.2')?'orange':(foodbankMarContents.kpi5 > '123.2' && foodbankMarContents.kpi5 < '154')?'yellow-7':(foodbankMarContents.kpi5 >= '154' && foodbankMarContents.kpi5 < '184.8')?'green':(foodbankMarContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi6 == null)?'grey-2':(foodbankMarContents.kpi6 >= '0' && foodbankMarContents.kpi6 <= '14.7')?'red':(foodbankMarContents.kpi6 > '14.7' && foodbankMarContents.kpi6 <= '19.6')?'orange':(foodbankMarContents.kpi6 > '19.6' && foodbankMarContents.kpi6 < '24.5')?'yellow-7':(foodbankMarContents.kpi6 >= '24.5' && foodbankMarContents.kpi6 < '29.4')?'green':(foodbankMarContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankAprContents.kpi1 == null)?'grey-2':(foodbankAprContents.kpi1 >= '0' && foodbankAprContents.kpi1 <= '238.8')?'red':(foodbankAprContents.kpi1 > '238.8' && foodbankAprContents.kpi1 <= '318.4')?'orange':(foodbankAprContents.kpi1 > '318.4' && foodbankAprContents.kpi1 < '398')?'yellow-7':(foodbankAprContents.kpi1 >= '398' && foodbankAprContents.kpi1 < '477.6')?'green':(foodbankAprContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi2 == null)?'grey-2':(foodbankAprContents.kpi2 >= '0' && foodbankAprContents.kpi2 <= '244.2')?'red':(foodbankAprContents.kpi2 > '244.2' && foodbankAprContents.kpi2 <= '325.6')?'orange':(foodbankAprContents.kpi2 > '325.6' && foodbankAprContents.kpi2 < '407')?'yellow-7':(foodbankAprContents.kpi2 >= '407' && foodbankAprContents.kpi2 < '488.4')?'green':(foodbankAprContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi3 == null)?'grey-2':(foodbankAprContents.kpi3 >= '0' && foodbankAprContents.kpi3 <= '524.25')?'red':(foodbankAprContents.kpi3 > '524.25' && foodbankAprContents.kpi3 <= '699')?'orange':(foodbankAprContents.kpi3 > '699' && foodbankAprContents.kpi3 < '873.75')?'yellow-7':(foodbankAprContents.kpi3 >= '873.75' && foodbankAprContents.kpi3 < '1048.5')?'green':(foodbankAprContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi4 == null)?'grey-2':(foodbankAprContents.kpi4 >= '0' && foodbankAprContents.kpi4 <= '12.45')?'red':(foodbankAprContents.kpi4 > '12.45' && foodbankAprContents.kpi4 <= '16.6')?'orange':(foodbankAprContents.kpi4 > '16.6' && foodbankAprContents.kpi4 < '20.75')?'yellow-7':(foodbankAprContents.kpi4 >= '20.75' && foodbankAprContents.kpi4 < '24.9')?'green':(foodbankAprContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi5 == null)?'grey-2':(foodbankAprContents.kpi5 >= '0' && foodbankAprContents.kpi5 <= '92.4')?'red':(foodbankAprContents.kpi5 > '92.4' && foodbankAprContents.kpi5 <= '123.2')?'orange':(foodbankAprContents.kpi5 > '123.2' && foodbankAprContents.kpi5 < '154')?'yellow-7':(foodbankAprContents.kpi5 >= '154' && foodbankAprContents.kpi5 < '184.8')?'green':(foodbankAprContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi6 == null)?'grey-2':(foodbankAprContents.kpi6 >= '0' && foodbankAprContents.kpi6 <= '14.7')?'red':(foodbankAprContents.kpi6 > '14.7' && foodbankAprContents.kpi6 <= '19.6')?'orange':(foodbankAprContents.kpi6 > '19.6' && foodbankAprContents.kpi6 < '24.5')?'yellow-7':(foodbankAprContents.kpi6 >= '24.5' && foodbankAprContents.kpi6 < '29.4')?'green':(foodbankAprContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankMayContents.kpi1 == null)?'grey-2':(foodbankMayContents.kpi1 >= '0' && foodbankMayContents.kpi1 <= '238.8')?'red':(foodbankMayContents.kpi1 > '238.8' && foodbankMayContents.kpi1 <= '318.4')?'orange':(foodbankMayContents.kpi1 > '318.4' && foodbankMayContents.kpi1 < '398')?'yellow-7':(foodbankMayContents.kpi1 >= '398' && foodbankMayContents.kpi1 < '477.6')?'green':(foodbankMayContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi2 == null)?'grey-2':(foodbankMayContents.kpi2 >= '0' && foodbankMayContents.kpi2 <= '244.2')?'red':(foodbankMayContents.kpi2 > '244.2' && foodbankMayContents.kpi2 <= '325.6')?'orange':(foodbankMayContents.kpi2 > '325.6' && foodbankMayContents.kpi2 < '407')?'yellow-7':(foodbankMayContents.kpi2 >= '407' && foodbankMayContents.kpi2 < '488.4')?'green':(foodbankMayContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi3 == null)?'grey-2':(foodbankMayContents.kpi3 >= '0' && foodbankMayContents.kpi3 <= '524.25')?'red':(foodbankMayContents.kpi3 > '524.25' && foodbankMayContents.kpi3 <= '699')?'orange':(foodbankMayContents.kpi3 > '699' && foodbankMayContents.kpi3 < '873.75')?'yellow-7':(foodbankMayContents.kpi3 >= '873.75' && foodbankMayContents.kpi3 < '1048.5')?'green':(foodbankMayContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi4 == null)?'grey-2':(foodbankMayContents.kpi4 >= '0' && foodbankMayContents.kpi4 <= '12.45')?'red':(foodbankMayContents.kpi4 > '12.45' && foodbankMayContents.kpi4 <= '16.6')?'orange':(foodbankMayContents.kpi4 > '16.6' && foodbankMayContents.kpi4 < '20.75')?'yellow-7':(foodbankMayContents.kpi4 >= '20.75' && foodbankMayContents.kpi4 < '24.9')?'green':(foodbankMayContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi5 == null)?'grey-2':(foodbankMayContents.kpi5 >= '0' && foodbankMayContents.kpi5 <= '92.4')?'red':(foodbankMayContents.kpi5 > '92.4' && foodbankMayContents.kpi5 <= '123.2')?'orange':(foodbankMayContents.kpi5 > '123.2' && foodbankMayContents.kpi5 < '154')?'yellow-7':(foodbankMayContents.kpi5 >= '154' && foodbankMayContents.kpi5 < '184.8')?'green':(foodbankMayContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi6 == null)?'grey-2':(foodbankMayContents.kpi6 >= '0' && foodbankMayContents.kpi6 <= '14.7')?'red':(foodbankMayContents.kpi6 > '14.7' && foodbankMayContents.kpi6 <= '19.6')?'orange':(foodbankMayContents.kpi6 > '19.6' && foodbankMayContents.kpi6 < '24.5')?'yellow-7':(foodbankMayContents.kpi6 >= '24.5' && foodbankMayContents.kpi6 < '29.4')?'green':(foodbankMayContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankJunContents.kpi1 == null)?'grey-2':(foodbankJunContents.kpi1 >= '0' && foodbankJunContents.kpi1 <= '238.8')?'red':(foodbankJunContents.kpi1 > '238.8' && foodbankJunContents.kpi1 <= '318.4')?'orange':(foodbankJunContents.kpi1 > '318.4' && foodbankJunContents.kpi1 < '398')?'yellow-7':(foodbankJunContents.kpi1 >= '398' && foodbankJunContents.kpi1 < '477.6')?'green':(foodbankJunContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi2 == null)?'grey-2':(foodbankJunContents.kpi2 >= '0' && foodbankJunContents.kpi2 <= '244.2')?'red':(foodbankJunContents.kpi2 > '244.2' && foodbankJunContents.kpi2 <= '325.6')?'orange':(foodbankJunContents.kpi2 > '325.6' && foodbankJunContents.kpi2 < '407')?'yellow-7':(foodbankJunContents.kpi2 >= '407' && foodbankJunContents.kpi2 < '488.4')?'green':(foodbankJunContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi3 == null)?'grey-2':(foodbankJunContents.kpi3 >= '0' && foodbankJunContents.kpi3 <= '524.25')?'red':(foodbankJunContents.kpi3 > '524.25' && foodbankJunContents.kpi3 <= '699')?'orange':(foodbankJunContents.kpi3 > '699' && foodbankJunContents.kpi3 < '873.75')?'yellow-7':(foodbankJunContents.kpi3 >= '873.75' && foodbankJunContents.kpi3 < '1048.5')?'green':(foodbankJunContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi4 == null)?'grey-2':(foodbankJunContents.kpi4 >= '0' && foodbankJunContents.kpi4 <= '12.45')?'red':(foodbankJunContents.kpi4 > '12.45' && foodbankJunContents.kpi4 <= '16.6')?'orange':(foodbankJunContents.kpi4 > '16.6' && foodbankJunContents.kpi4 < '20.75')?'yellow-7':(foodbankJunContents.kpi4 >= '20.75' && foodbankJunContents.kpi4 < '24.9')?'green':(foodbankJunContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi5 == null)?'grey-2':(foodbankJunContents.kpi5 >= '0' && foodbankJunContents.kpi5 <= '92.4')?'red':(foodbankJunContents.kpi5 > '92.4' && foodbankJunContents.kpi5 <= '123.2')?'orange':(foodbankJunContents.kpi5 > '123.2' && foodbankJunContents.kpi5 < '154')?'yellow-7':(foodbankJunContents.kpi5 >= '154' && foodbankJunContents.kpi5 < '184.8')?'green':(foodbankJunContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi6 == null)?'grey-2':(foodbankJunContents.kpi6 >= '0' && foodbankJunContents.kpi6 <= '14.7')?'red':(foodbankJunContents.kpi6 > '14.7' && foodbankJunContents.kpi6 <= '19.6')?'orange':(foodbankJunContents.kpi6 > '19.6' && foodbankJunContents.kpi6 < '24.5')?'yellow-7':(foodbankJunContents.kpi6 >= '24.5' && foodbankJunContents.kpi6 < '29.4')?'green':(foodbankJunContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankJulContents.kpi1 == null)?'grey-2':(foodbankJulContents.kpi1 >= '0' && foodbankJulContents.kpi1 <= '238.8')?'red':(foodbankJulContents.kpi1 > '238.8' && foodbankJulContents.kpi1 <= '318.4')?'orange':(foodbankJulContents.kpi1 > '318.4' && foodbankJulContents.kpi1 < '398')?'yellow-7':(foodbankJulContents.kpi1 >= '398' && foodbankJulContents.kpi1 < '477.6')?'green':(foodbankJulContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi2 == null)?'grey-2':(foodbankJulContents.kpi2 >= '0' && foodbankJulContents.kpi2 <= '244.2')?'red':(foodbankJulContents.kpi2 > '244.2' && foodbankJulContents.kpi2 <= '325.6')?'orange':(foodbankJulContents.kpi2 > '325.6' && foodbankJulContents.kpi2 < '407')?'yellow-7':(foodbankJulContents.kpi2 >= '407' && foodbankJulContents.kpi2 < '488.4')?'green':(foodbankJulContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi3 == null)?'grey-2':(foodbankJulContents.kpi3 >= '0' && foodbankJulContents.kpi3 <= '524.25')?'red':(foodbankJulContents.kpi3 > '524.25' && foodbankJulContents.kpi3 <= '699')?'orange':(foodbankJulContents.kpi3 > '699' && foodbankJulContents.kpi3 < '873.75')?'yellow-7':(foodbankJulContents.kpi3 >= '873.75' && foodbankJulContents.kpi3 < '1048.5')?'green':(foodbankJulContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi4 == null)?'grey-2':(foodbankJulContents.kpi4 >= '0' && foodbankJulContents.kpi4 <= '12.45')?'red':(foodbankJulContents.kpi4 > '12.45' && foodbankJulContents.kpi4 <= '16.6')?'orange':(foodbankJulContents.kpi4 > '16.6' && foodbankJulContents.kpi4 < '20.75')?'yellow-7':(foodbankJulContents.kpi4 >= '20.75' && foodbankJulContents.kpi4 < '24.9')?'green':(foodbankJulContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi5 == null)?'grey-2':(foodbankJulContents.kpi5 >= '0' && foodbankJulContents.kpi5 <= '92.4')?'red':(foodbankJulContents.kpi5 > '92.4' && foodbankJulContents.kpi5 <= '123.2')?'orange':(foodbankJulContents.kpi5 > '123.2' && foodbankJulContents.kpi5 < '154')?'yellow-7':(foodbankJulContents.kpi5 >= '154' && foodbankJulContents.kpi5 < '184.8')?'green':(foodbankJulContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi6 == null)?'grey-2':(foodbankJulContents.kpi6 >= '0' && foodbankJulContents.kpi6 <= '14.7')?'red':(foodbankJulContents.kpi6 > '14.7' && foodbankJulContents.kpi6 <= '19.6')?'orange':(foodbankJulContents.kpi6 > '19.6' && foodbankJulContents.kpi6 < '24.5')?'yellow-7':(foodbankJulContents.kpi6 >= '24.5' && foodbankJulContents.kpi6 < '29.4')?'green':(foodbankJulContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankAugContents.kpi1 == null)?'grey-2':(foodbankAugContents.kpi1 >= '0' && foodbankAugContents.kpi1 <= '238.8')?'red':(foodbankAugContents.kpi1 > '238.8' && foodbankAugContents.kpi1 <= '318.4')?'orange':(foodbankAugContents.kpi1 > '318.4' && foodbankAugContents.kpi1 < '398')?'yellow-7':(foodbankAugContents.kpi1 >= '398' && foodbankAugContents.kpi1 < '477.6')?'green':(foodbankAugContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi2 == null)?'grey-2':(foodbankAugContents.kpi2 >= '0' && foodbankAugContents.kpi2 <= '244.2')?'red':(foodbankAugContents.kpi2 > '244.2' && foodbankAugContents.kpi2 <= '325.6')?'orange':(foodbankAugContents.kpi2 > '325.6' && foodbankAugContents.kpi2 < '407')?'yellow-7':(foodbankAugContents.kpi2 >= '407' && foodbankAugContents.kpi2 < '488.4')?'green':(foodbankAugContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi3 == null)?'grey-2':(foodbankAugContents.kpi3 >= '0' && foodbankAugContents.kpi3 <= '524.25')?'red':(foodbankAugContents.kpi3 > '524.25' && foodbankAugContents.kpi3 <= '699')?'orange':(foodbankAugContents.kpi3 > '699' && foodbankAugContents.kpi3 < '873.75')?'yellow-7':(foodbankAugContents.kpi3 >= '873.75' && foodbankAugContents.kpi3 < '1048.5')?'green':(foodbankAugContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi4 == null)?'grey-2':(foodbankAugContents.kpi4 >= '0' && foodbankAugContents.kpi4 <= '12.45')?'red':(foodbankAugContents.kpi4 > '12.45' && foodbankAugContents.kpi4 <= '16.6')?'orange':(foodbankAugContents.kpi4 > '16.6' && foodbankAugContents.kpi4 < '20.75')?'yellow-7':(foodbankAugContents.kpi4 >= '20.75' && foodbankAugContents.kpi4 < '24.9')?'green':(foodbankAugContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi5 == null)?'grey-2':(foodbankAugContents.kpi5 >= '0' && foodbankAugContents.kpi5 <= '92.4')?'red':(foodbankAugContents.kpi5 > '92.4' && foodbankAugContents.kpi5 <= '123.2')?'orange':(foodbankAugContents.kpi5 > '123.2' && foodbankAugContents.kpi5 < '154')?'yellow-7':(foodbankAugContents.kpi5 >= '154' && foodbankAugContents.kpi5 < '184.8')?'green':(foodbankAugContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi6 == null)?'grey-2':(foodbankAugContents.kpi6 >= '0' && foodbankAugContents.kpi6 <= '14.7')?'red':(foodbankAugContents.kpi6 > '14.7' && foodbankAugContents.kpi6 <= '19.6')?'orange':(foodbankAugContents.kpi6 > '19.6' && foodbankAugContents.kpi6 < '24.5')?'yellow-7':(foodbankAugContents.kpi6 >= '24.5' && foodbankAugContents.kpi6 < '29.4')?'green':(foodbankAugContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankSepContents.kpi1 == null)?'grey-2':(foodbankSepContents.kpi1 >= '0' && foodbankSepContents.kpi1 <= '238.8')?'red':(foodbankSepContents.kpi1 > '238.8' && foodbankSepContents.kpi1 <= '318.4')?'orange':(foodbankSepContents.kpi1 > '318.4' && foodbankSepContents.kpi1 < '398')?'yellow-7':(foodbankSepContents.kpi1 >= '398' && foodbankSepContents.kpi1 < '477.6')?'green':(foodbankSepContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi2 == null)?'grey-2':(foodbankSepContents.kpi2 >= '0' && foodbankSepContents.kpi2 <= '244.2')?'red':(foodbankSepContents.kpi2 > '244.2' && foodbankSepContents.kpi2 <= '325.6')?'orange':(foodbankSepContents.kpi2 > '325.6' && foodbankSepContents.kpi2 < '407')?'yellow-7':(foodbankSepContents.kpi2 >= '407' && foodbankSepContents.kpi2 < '488.4')?'green':(foodbankSepContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi3 == null)?'grey-2':(foodbankSepContents.kpi3 >= '0' && foodbankSepContents.kpi3 <= '524.25')?'red':(foodbankSepContents.kpi3 > '524.25' && foodbankSepContents.kpi3 <= '699')?'orange':(foodbankSepContents.kpi3 > '699' && foodbankSepContents.kpi3 < '873.75')?'yellow-7':(foodbankSepContents.kpi3 >= '873.75' && foodbankSepContents.kpi3 < '1048.5')?'green':(foodbankSepContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi4 == null)?'grey-2':(foodbankSepContents.kpi4 >= '0' && foodbankSepContents.kpi4 <= '12.45')?'red':(foodbankSepContents.kpi4 > '12.45' && foodbankSepContents.kpi4 <= '16.6')?'orange':(foodbankSepContents.kpi4 > '16.6' && foodbankSepContents.kpi4 < '20.75')?'yellow-7':(foodbankSepContents.kpi4 >= '20.75' && foodbankSepContents.kpi4 < '24.9')?'green':(foodbankSepContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi5 == null)?'grey-2':(foodbankSepContents.kpi5 >= '0' && foodbankSepContents.kpi5 <= '92.4')?'red':(foodbankSepContents.kpi5 > '92.4' && foodbankSepContents.kpi5 <= '123.2')?'orange':(foodbankSepContents.kpi5 > '123.2' && foodbankSepContents.kpi5 < '154')?'yellow-7':(foodbankSepContents.kpi5 >= '154' && foodbankSepContents.kpi5 < '184.8')?'green':(foodbankSepContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi6 == null)?'grey-2':(foodbankSepContents.kpi6 >= '0' && foodbankSepContents.kpi6 <= '14.7')?'red':(foodbankSepContents.kpi6 > '14.7' && foodbankSepContents.kpi6 <= '19.6')?'orange':(foodbankSepContents.kpi6 > '19.6' && foodbankSepContents.kpi6 < '24.5')?'yellow-7':(foodbankSepContents.kpi6 >= '24.5' && foodbankSepContents.kpi6 < '29.4')?'green':(foodbankSepContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankOctContents.kpi1 == null)?'grey-2':(foodbankOctContents.kpi1 >= '0' && foodbankOctContents.kpi1 <= '238.8')?'red':(foodbankOctContents.kpi1 > '238.8' && foodbankOctContents.kpi1 <= '318.4')?'orange':(foodbankOctContents.kpi1 > '318.4' && foodbankOctContents.kpi1 < '398')?'yellow-7':(foodbankOctContents.kpi1 >= '398' && foodbankOctContents.kpi1 < '477.6')?'green':(foodbankOctContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi2 == null)?'grey-2':(foodbankOctContents.kpi2 >= '0' && foodbankOctContents.kpi2 <= '244.2')?'red':(foodbankOctContents.kpi2 > '244.2' && foodbankOctContents.kpi2 <= '325.6')?'orange':(foodbankOctContents.kpi2 > '325.6' && foodbankOctContents.kpi2 < '407')?'yellow-7':(foodbankOctContents.kpi2 >= '407' && foodbankOctContents.kpi2 < '488.4')?'green':(foodbankOctContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi3 == null)?'grey-2':(foodbankOctContents.kpi3 >= '0' && foodbankOctContents.kpi3 <= '524.25')?'red':(foodbankOctContents.kpi3 > '524.25' && foodbankOctContents.kpi3 <= '699')?'orange':(foodbankOctContents.kpi3 > '699' && foodbankOctContents.kpi3 < '873.75')?'yellow-7':(foodbankOctContents.kpi3 >= '873.75' && foodbankOctContents.kpi3 < '1048.5')?'green':(foodbankOctContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi4 == null)?'grey-2':(foodbankOctContents.kpi4 >= '0' && foodbankOctContents.kpi4 <= '12.45')?'red':(foodbankOctContents.kpi4 > '12.45' && foodbankOctContents.kpi4 <= '16.6')?'orange':(foodbankOctContents.kpi4 > '16.6' && foodbankOctContents.kpi4 < '20.75')?'yellow-7':(foodbankOctContents.kpi4 >= '20.75' && foodbankOctContents.kpi4 < '24.9')?'green':(foodbankOctContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi5 == null)?'grey-2':(foodbankOctContents.kpi5 >= '0' && foodbankOctContents.kpi5 <= '92.4')?'red':(foodbankOctContents.kpi5 > '92.4' && foodbankOctContents.kpi5 <= '123.2')?'orange':(foodbankOctContents.kpi5 > '123.2' && foodbankOctContents.kpi5 < '154')?'yellow-7':(foodbankOctContents.kpi5 >= '154' && foodbankOctContents.kpi5 < '184.8')?'green':(foodbankOctContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi6 == null)?'grey-2':(foodbankOctContents.kpi6 >= '0' && foodbankOctContents.kpi6 <= '14.7')?'red':(foodbankOctContents.kpi6 > '14.7' && foodbankOctContents.kpi6 <= '19.6')?'orange':(foodbankOctContents.kpi6 > '19.6' && foodbankOctContents.kpi6 < '24.5')?'yellow-7':(foodbankOctContents.kpi6 >= '24.5' && foodbankOctContents.kpi6 < '29.4')?'green':(foodbankOctContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankNovContents.kpi1 == null)?'grey-2':(foodbankNovContents.kpi1 >= '0' && foodbankNovContents.kpi1 <= '238.8')?'red':(foodbankNovContents.kpi1 > '238.8' && foodbankNovContents.kpi1 <= '318.4')?'orange':(foodbankNovContents.kpi1 > '318.4' && foodbankNovContents.kpi1 < '398')?'yellow-7':(foodbankNovContents.kpi1 >= '398' && foodbankNovContents.kpi1 < '477.6')?'green':(foodbankNovContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi2 == null)?'grey-2':(foodbankNovContents.kpi2 >= '0' && foodbankNovContents.kpi2 <= '244.2')?'red':(foodbankNovContents.kpi2 > '244.2' && foodbankNovContents.kpi2 <= '325.6')?'orange':(foodbankNovContents.kpi2 > '325.6' && foodbankNovContents.kpi2 < '407')?'yellow-7':(foodbankNovContents.kpi2 >= '407' && foodbankNovContents.kpi2 < '488.4')?'green':(foodbankNovContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi3 == null)?'grey-2':(foodbankNovContents.kpi3 >= '0' && foodbankNovContents.kpi3 <= '524.25')?'red':(foodbankNovContents.kpi3 > '524.25' && foodbankNovContents.kpi3 <= '699')?'orange':(foodbankNovContents.kpi3 > '699' && foodbankNovContents.kpi3 < '873.75')?'yellow-7':(foodbankNovContents.kpi3 >= '873.75' && foodbankNovContents.kpi3 < '1048.5')?'green':(foodbankNovContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi4 == null)?'grey-2':(foodbankNovContents.kpi4 >= '0' && foodbankNovContents.kpi4 <= '12.45')?'red':(foodbankNovContents.kpi4 > '12.45' && foodbankNovContents.kpi4 <= '16.6')?'orange':(foodbankNovContents.kpi4 > '16.6' && foodbankNovContents.kpi4 < '20.75')?'yellow-7':(foodbankNovContents.kpi4 >= '20.75' && foodbankNovContents.kpi4 < '24.9')?'green':(foodbankNovContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi5 == null)?'grey-2':(foodbankNovContents.kpi5 >= '0' && foodbankNovContents.kpi5 <= '92.4')?'red':(foodbankNovContents.kpi5 > '92.4' && foodbankNovContents.kpi5 <= '123.2')?'orange':(foodbankNovContents.kpi5 > '123.2' && foodbankNovContents.kpi5 < '154')?'yellow-7':(foodbankNovContents.kpi5 >= '154' && foodbankNovContents.kpi5 < '184.8')?'green':(foodbankNovContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi6 == null)?'grey-2':(foodbankNovContents.kpi6 >= '0' && foodbankNovContents.kpi6 <= '14.7')?'red':(foodbankNovContents.kpi6 > '14.7' && foodbankNovContents.kpi6 <= '19.6')?'orange':(foodbankNovContents.kpi6 > '19.6' && foodbankNovContents.kpi6 < '24.5')?'yellow-7':(foodbankNovContents.kpi6 >= '24.5' && foodbankNovContents.kpi6 < '29.4')?'green':(foodbankNovContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankDecContents.kpi1 == null)?'grey-2':(foodbankDecContents.kpi1 >= '0' && foodbankDecContents.kpi1 <= '238.8')?'red':(foodbankDecContents.kpi1 > '238.8' && foodbankDecContents.kpi1 <= '318.4')?'orange':(foodbankDecContents.kpi1 > '318.4' && foodbankDecContents.kpi1 < '398')?'yellow-7':(foodbankDecContents.kpi1 >= '398' && foodbankDecContents.kpi1 < '477.6')?'green':(foodbankDecContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi2 == null)?'grey-2':(foodbankDecContents.kpi2 >= '0' && foodbankDecContents.kpi2 <= '244.2')?'red':(foodbankDecContents.kpi2 > '244.2' && foodbankDecContents.kpi2 <= '325.6')?'orange':(foodbankDecContents.kpi2 > '325.6' && foodbankDecContents.kpi2 < '407')?'yellow-7':(foodbankDecContents.kpi2 >= '407' && foodbankDecContents.kpi2 < '488.4')?'green':(foodbankDecContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi3 == null)?'grey-2':(foodbankDecContents.kpi3 >= '0' && foodbankDecContents.kpi3 <= '524.25')?'red':(foodbankDecContents.kpi3 > '524.25' && foodbankDecContents.kpi3 <= '699')?'orange':(foodbankDecContents.kpi3 > '699' && foodbankDecContents.kpi3 < '873.75')?'yellow-7':(foodbankDecContents.kpi3 >= '873.75' && foodbankDecContents.kpi3 < '1048.5')?'green':(foodbankDecContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi4 == null)?'grey-2':(foodbankDecContents.kpi4 >= '0' && foodbankDecContents.kpi4 <= '12.45')?'red':(foodbankDecContents.kpi4 > '12.45' && foodbankDecContents.kpi4 <= '16.6')?'orange':(foodbankDecContents.kpi4 > '16.6' && foodbankDecContents.kpi4 < '20.75')?'yellow-7':(foodbankDecContents.kpi4 >= '20.75' && foodbankDecContents.kpi4 < '24.9')?'green':(foodbankDecContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi5 == null)?'grey-2':(foodbankDecContents.kpi5 >= '0' && foodbankDecContents.kpi5 <= '92.4')?'red':(foodbankDecContents.kpi5 > '92.4' && foodbankDecContents.kpi5 <= '123.2')?'orange':(foodbankDecContents.kpi5 > '123.2' && foodbankDecContents.kpi5 < '154')?'yellow-7':(foodbankDecContents.kpi5 >= '154' && foodbankDecContents.kpi5 < '184.8')?'green':(foodbankDecContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi6 == null)?'grey-2':(foodbankDecContents.kpi6 >= '0' && foodbankDecContents.kpi6 <= '14.7')?'red':(foodbankDecContents.kpi6 > '14.7' && foodbankDecContents.kpi6 <= '19.6')?'orange':(foodbankDecContents.kpi6 > '19.6' && foodbankDecContents.kpi6 < '24.5')?'yellow-7':(foodbankDecContents.kpi6 >= '24.5' && foodbankDecContents.kpi6 < '29.4')?'green':(foodbankDecContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip>Activities (#)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 5
                                <q-tooltip># Households Receiving Deliveries</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 6
                                <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankJanContents.kpi1 == null)?'grey-2':(foodbankJanContents.kpi1 >= '0' && foodbankJanContents.kpi1 <= '238.8')?'red':(foodbankJanContents.kpi1 > '238.8' && foodbankJanContents.kpi1 <= '318.4')?'orange':(foodbankJanContents.kpi1 > '318.4' && foodbankJanContents.kpi1 < '398')?'yellow-7':(foodbankJanContents.kpi1 >= '398' && foodbankJanContents.kpi1 < '477.6')?'green':(foodbankJanContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi2 == null)?'grey-2':(foodbankJanContents.kpi2 >= '0' && foodbankJanContents.kpi2 <= '244.2')?'red':(foodbankJanContents.kpi2 > '244.2' && foodbankJanContents.kpi2 <= '325.6')?'orange':(foodbankJanContents.kpi2 > '325.6' && foodbankJanContents.kpi2 < '407')?'yellow-7':(foodbankJanContents.kpi2 >= '407' && foodbankJanContents.kpi2 < '488.4')?'green':(foodbankJanContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi3 == null)?'grey-2':(foodbankJanContents.kpi3 >= '0' && foodbankJanContents.kpi3 <= '524.25')?'red':(foodbankJanContents.kpi3 > '524.25' && foodbankJanContents.kpi3 <= '699')?'orange':(foodbankJanContents.kpi3 > '699' && foodbankJanContents.kpi3 < '873.75')?'yellow-7':(foodbankJanContents.kpi3 >= '873.75' && foodbankJanContents.kpi3 < '1048.5')?'green':(foodbankJanContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi4 == null)?'grey-2':(foodbankJanContents.kpi4 >= '0' && foodbankJanContents.kpi4 <= '12.45')?'red':(foodbankJanContents.kpi4 > '12.45' && foodbankJanContents.kpi4 <= '16.6')?'orange':(foodbankJanContents.kpi4 > '16.6' && foodbankJanContents.kpi4 < '20.75')?'yellow-7':(foodbankJanContents.kpi4 >= '20.75' && foodbankJanContents.kpi4 < '24.9')?'green':(foodbankJanContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi5 == null)?'grey-2':(foodbankJanContents.kpi5 >= '0' && foodbankJanContents.kpi5 <= '92.4')?'red':(foodbankJanContents.kpi5 > '92.4' && foodbankJanContents.kpi5 <= '123.2')?'orange':(foodbankJanContents.kpi5 > '123.2' && foodbankJanContents.kpi5 < '154')?'yellow-7':(foodbankJanContents.kpi5 >= '154' && foodbankJanContents.kpi5 < '184.8')?'green':(foodbankJanContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi6 == null)?'grey-2':(foodbankJanContents.kpi6 >= '0' && foodbankJanContents.kpi6 <= '14.7')?'red':(foodbankJanContents.kpi6 > '14.7' && foodbankJanContents.kpi6 <= '19.6')?'orange':(foodbankJanContents.kpi6 > '19.6' && foodbankJanContents.kpi6 < '24.5')?'yellow-7':(foodbankJanContents.kpi6 >= '24.5' && foodbankJanContents.kpi6 < '29.4')?'green':(foodbankJanContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankFebContents.kpi1 == null)?'grey-2':(foodbankFebContents.kpi1 >= '0' && foodbankFebContents.kpi1 <= '238.8')?'red':(foodbankFebContents.kpi1 > '238.8' && foodbankFebContents.kpi1 <= '318.4')?'orange':(foodbankFebContents.kpi1 > '318.4' && foodbankFebContents.kpi1 < '398')?'yellow-7':(foodbankFebContents.kpi1 >= '398' && foodbankFebContents.kpi1 < '477.6')?'green':(foodbankFebContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi2 == null)?'grey-2':(foodbankFebContents.kpi2 >= '0' && foodbankFebContents.kpi2 <= '244.2')?'red':(foodbankFebContents.kpi2 > '244.2' && foodbankFebContents.kpi2 <= '325.6')?'orange':(foodbankFebContents.kpi2 > '325.6' && foodbankFebContents.kpi2 < '407')?'yellow-7':(foodbankFebContents.kpi2 >= '407' && foodbankFebContents.kpi2 < '488.4')?'green':(foodbankFebContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi3 == null)?'grey-2':(foodbankFebContents.kpi3 >= '0' && foodbankFebContents.kpi3 <= '524.25')?'red':(foodbankFebContents.kpi3 > '524.25' && foodbankFebContents.kpi3 <= '699')?'orange':(foodbankFebContents.kpi3 > '699' && foodbankFebContents.kpi3 < '873.75')?'yellow-7':(foodbankFebContents.kpi3 >= '873.75' && foodbankFebContents.kpi3 < '1048.5')?'green':(foodbankFebContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi4 == null)?'grey-2':(foodbankFebContents.kpi4 >= '0' && foodbankFebContents.kpi4 <= '12.45')?'red':(foodbankFebContents.kpi4 > '12.45' && foodbankFebContents.kpi4 <= '16.6')?'orange':(foodbankFebContents.kpi4 > '16.6' && foodbankFebContents.kpi4 < '20.75')?'yellow-7':(foodbankFebContents.kpi4 >= '20.75' && foodbankFebContents.kpi4 < '24.9')?'green':(foodbankFebContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi5 == null)?'grey-2':(foodbankFebContents.kpi5 >= '0' && foodbankFebContents.kpi5 <= '92.4')?'red':(foodbankFebContents.kpi5 > '92.4' && foodbankFebContents.kpi5 <= '123.2')?'orange':(foodbankFebContents.kpi5 > '123.2' && foodbankFebContents.kpi5 < '154')?'yellow-7':(foodbankFebContents.kpi5 >= '154' && foodbankFebContents.kpi5 < '184.8')?'green':(foodbankFebContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi6 == null)?'grey-2':(foodbankFebContents.kpi6 >= '0' && foodbankFebContents.kpi6 <= '14.7')?'red':(foodbankFebContents.kpi6 > '14.7' && foodbankFebContents.kpi6 <= '19.6')?'orange':(foodbankFebContents.kpi6 > '19.6' && foodbankFebContents.kpi6 < '24.5')?'yellow-7':(foodbankFebContents.kpi6 >= '24.5' && foodbankFebContents.kpi6 < '29.4')?'green':(foodbankFebContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankMarContents.kpi1 == null)?'grey-2':(foodbankMarContents.kpi1 >= '0' && foodbankMarContents.kpi1 <= '238.8')?'red':(foodbankMarContents.kpi1 > '238.8' && foodbankMarContents.kpi1 <= '318.4')?'orange':(foodbankMarContents.kpi1 > '318.4' && foodbankMarContents.kpi1 < '398')?'yellow-7':(foodbankMarContents.kpi1 >= '398' && foodbankMarContents.kpi1 < '477.6')?'green':(foodbankMarContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi2 == null)?'grey-2':(foodbankMarContents.kpi2 >= '0' && foodbankMarContents.kpi2 <= '244.2')?'red':(foodbankMarContents.kpi2 > '244.2' && foodbankMarContents.kpi2 <= '325.6')?'orange':(foodbankMarContents.kpi2 > '325.6' && foodbankMarContents.kpi2 < '407')?'yellow-7':(foodbankMarContents.kpi2 >= '407' && foodbankMarContents.kpi2 < '488.4')?'green':(foodbankMarContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi3 == null)?'grey-2':(foodbankMarContents.kpi3 >= '0' && foodbankMarContents.kpi3 <= '524.25')?'red':(foodbankMarContents.kpi3 > '524.25' && foodbankMarContents.kpi3 <= '699')?'orange':(foodbankMarContents.kpi3 > '699' && foodbankMarContents.kpi3 < '873.75')?'yellow-7':(foodbankMarContents.kpi3 >= '873.75' && foodbankMarContents.kpi3 < '1048.5')?'green':(foodbankMarContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi4 == null)?'grey-2':(foodbankMarContents.kpi4 >= '0' && foodbankMarContents.kpi4 <= '12.45')?'red':(foodbankMarContents.kpi4 > '12.45' && foodbankMarContents.kpi4 <= '16.6')?'orange':(foodbankMarContents.kpi4 > '16.6' && foodbankMarContents.kpi4 < '20.75')?'yellow-7':(foodbankMarContents.kpi4 >= '20.75' && foodbankMarContents.kpi4 < '24.9')?'green':(foodbankMarContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi5 == null)?'grey-2':(foodbankMarContents.kpi5 >= '0' && foodbankMarContents.kpi5 <= '92.4')?'red':(foodbankMarContents.kpi5 > '92.4' && foodbankMarContents.kpi5 <= '123.2')?'orange':(foodbankMarContents.kpi5 > '123.2' && foodbankMarContents.kpi5 < '154')?'yellow-7':(foodbankMarContents.kpi5 >= '154' && foodbankMarContents.kpi5 < '184.8')?'green':(foodbankMarContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi6 == null)?'grey-2':(foodbankMarContents.kpi6 >= '0' && foodbankMarContents.kpi6 <= '14.7')?'red':(foodbankMarContents.kpi6 > '14.7' && foodbankMarContents.kpi6 <= '19.6')?'orange':(foodbankMarContents.kpi6 > '19.6' && foodbankMarContents.kpi6 < '24.5')?'yellow-7':(foodbankMarContents.kpi6 >= '24.5' && foodbankMarContents.kpi6 < '29.4')?'green':(foodbankMarContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankAprContents.kpi1 == null)?'grey-2':(foodbankAprContents.kpi1 >= '0' && foodbankAprContents.kpi1 <= '238.8')?'red':(foodbankAprContents.kpi1 > '238.8' && foodbankAprContents.kpi1 <= '318.4')?'orange':(foodbankAprContents.kpi1 > '318.4' && foodbankAprContents.kpi1 < '398')?'yellow-7':(foodbankAprContents.kpi1 >= '398' && foodbankAprContents.kpi1 < '477.6')?'green':(foodbankAprContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi2 == null)?'grey-2':(foodbankAprContents.kpi2 >= '0' && foodbankAprContents.kpi2 <= '244.2')?'red':(foodbankAprContents.kpi2 > '244.2' && foodbankAprContents.kpi2 <= '325.6')?'orange':(foodbankAprContents.kpi2 > '325.6' && foodbankAprContents.kpi2 < '407')?'yellow-7':(foodbankAprContents.kpi2 >= '407' && foodbankAprContents.kpi2 < '488.4')?'green':(foodbankAprContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi3 == null)?'grey-2':(foodbankAprContents.kpi3 >= '0' && foodbankAprContents.kpi3 <= '524.25')?'red':(foodbankAprContents.kpi3 > '524.25' && foodbankAprContents.kpi3 <= '699')?'orange':(foodbankAprContents.kpi3 > '699' && foodbankAprContents.kpi3 < '873.75')?'yellow-7':(foodbankAprContents.kpi3 >= '873.75' && foodbankAprContents.kpi3 < '1048.5')?'green':(foodbankAprContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi4 == null)?'grey-2':(foodbankAprContents.kpi4 >= '0' && foodbankAprContents.kpi4 <= '12.45')?'red':(foodbankAprContents.kpi4 > '12.45' && foodbankAprContents.kpi4 <= '16.6')?'orange':(foodbankAprContents.kpi4 > '16.6' && foodbankAprContents.kpi4 < '20.75')?'yellow-7':(foodbankAprContents.kpi4 >= '20.75' && foodbankAprContents.kpi4 < '24.9')?'green':(foodbankAprContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi5 == null)?'grey-2':(foodbankAprContents.kpi5 >= '0' && foodbankAprContents.kpi5 <= '92.4')?'red':(foodbankAprContents.kpi5 > '92.4' && foodbankAprContents.kpi5 <= '123.2')?'orange':(foodbankAprContents.kpi5 > '123.2' && foodbankAprContents.kpi5 < '154')?'yellow-7':(foodbankAprContents.kpi5 >= '154' && foodbankAprContents.kpi5 < '184.8')?'green':(foodbankAprContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi6 == null)?'grey-2':(foodbankAprContents.kpi6 >= '0' && foodbankAprContents.kpi6 <= '14.7')?'red':(foodbankAprContents.kpi6 > '14.7' && foodbankAprContents.kpi6 <= '19.6')?'orange':(foodbankAprContents.kpi6 > '19.6' && foodbankAprContents.kpi6 < '24.5')?'yellow-7':(foodbankAprContents.kpi6 >= '24.5' && foodbankAprContents.kpi6 < '29.4')?'green':(foodbankAprContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankMayContents.kpi1 == null)?'grey-2':(foodbankMayContents.kpi1 >= '0' && foodbankMayContents.kpi1 <= '238.8')?'red':(foodbankMayContents.kpi1 > '238.8' && foodbankMayContents.kpi1 <= '318.4')?'orange':(foodbankMayContents.kpi1 > '318.4' && foodbankMayContents.kpi1 < '398')?'yellow-7':(foodbankMayContents.kpi1 >= '398' && foodbankMayContents.kpi1 < '477.6')?'green':(foodbankMayContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi2 == null)?'grey-2':(foodbankMayContents.kpi2 >= '0' && foodbankMayContents.kpi2 <= '244.2')?'red':(foodbankMayContents.kpi2 > '244.2' && foodbankMayContents.kpi2 <= '325.6')?'orange':(foodbankMayContents.kpi2 > '325.6' && foodbankMayContents.kpi2 < '407')?'yellow-7':(foodbankMayContents.kpi2 >= '407' && foodbankMayContents.kpi2 < '488.4')?'green':(foodbankMayContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi3 == null)?'grey-2':(foodbankMayContents.kpi3 >= '0' && foodbankMayContents.kpi3 <= '524.25')?'red':(foodbankMayContents.kpi3 > '524.25' && foodbankMayContents.kpi3 <= '699')?'orange':(foodbankMayContents.kpi3 > '699' && foodbankMayContents.kpi3 < '873.75')?'yellow-7':(foodbankMayContents.kpi3 >= '873.75' && foodbankMayContents.kpi3 < '1048.5')?'green':(foodbankMayContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi4 == null)?'grey-2':(foodbankMayContents.kpi4 >= '0' && foodbankMayContents.kpi4 <= '12.45')?'red':(foodbankMayContents.kpi4 > '12.45' && foodbankMayContents.kpi4 <= '16.6')?'orange':(foodbankMayContents.kpi4 > '16.6' && foodbankMayContents.kpi4 < '20.75')?'yellow-7':(foodbankMayContents.kpi4 >= '20.75' && foodbankMayContents.kpi4 < '24.9')?'green':(foodbankMayContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi5 == null)?'grey-2':(foodbankMayContents.kpi5 >= '0' && foodbankMayContents.kpi5 <= '92.4')?'red':(foodbankMayContents.kpi5 > '92.4' && foodbankMayContents.kpi5 <= '123.2')?'orange':(foodbankMayContents.kpi5 > '123.2' && foodbankMayContents.kpi5 < '154')?'yellow-7':(foodbankMayContents.kpi5 >= '154' && foodbankMayContents.kpi5 < '184.8')?'green':(foodbankMayContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi6 == null)?'grey-2':(foodbankMayContents.kpi6 >= '0' && foodbankMayContents.kpi6 <= '14.7')?'red':(foodbankMayContents.kpi6 > '14.7' && foodbankMayContents.kpi6 <= '19.6')?'orange':(foodbankMayContents.kpi6 > '19.6' && foodbankMayContents.kpi6 < '24.5')?'yellow-7':(foodbankMayContents.kpi6 >= '24.5' && foodbankMayContents.kpi6 < '29.4')?'green':(foodbankMayContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankJunContents.kpi1 == null)?'grey-2':(foodbankJunContents.kpi1 >= '0' && foodbankJunContents.kpi1 <= '238.8')?'red':(foodbankJunContents.kpi1 > '238.8' && foodbankJunContents.kpi1 <= '318.4')?'orange':(foodbankJunContents.kpi1 > '318.4' && foodbankJunContents.kpi1 < '398')?'yellow-7':(foodbankJunContents.kpi1 >= '398' && foodbankJunContents.kpi1 < '477.6')?'green':(foodbankJunContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi2 == null)?'grey-2':(foodbankJunContents.kpi2 >= '0' && foodbankJunContents.kpi2 <= '244.2')?'red':(foodbankJunContents.kpi2 > '244.2' && foodbankJunContents.kpi2 <= '325.6')?'orange':(foodbankJunContents.kpi2 > '325.6' && foodbankJunContents.kpi2 < '407')?'yellow-7':(foodbankJunContents.kpi2 >= '407' && foodbankJunContents.kpi2 < '488.4')?'green':(foodbankJunContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi3 == null)?'grey-2':(foodbankJunContents.kpi3 >= '0' && foodbankJunContents.kpi3 <= '524.25')?'red':(foodbankJunContents.kpi3 > '524.25' && foodbankJunContents.kpi3 <= '699')?'orange':(foodbankJunContents.kpi3 > '699' && foodbankJunContents.kpi3 < '873.75')?'yellow-7':(foodbankJunContents.kpi3 >= '873.75' && foodbankJunContents.kpi3 < '1048.5')?'green':(foodbankJunContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi4 == null)?'grey-2':(foodbankJunContents.kpi4 >= '0' && foodbankJunContents.kpi4 <= '12.45')?'red':(foodbankJunContents.kpi4 > '12.45' && foodbankJunContents.kpi4 <= '16.6')?'orange':(foodbankJunContents.kpi4 > '16.6' && foodbankJunContents.kpi4 < '20.75')?'yellow-7':(foodbankJunContents.kpi4 >= '20.75' && foodbankJunContents.kpi4 < '24.9')?'green':(foodbankJunContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi5 == null)?'grey-2':(foodbankJunContents.kpi5 >= '0' && foodbankJunContents.kpi5 <= '92.4')?'red':(foodbankJunContents.kpi5 > '92.4' && foodbankJunContents.kpi5 <= '123.2')?'orange':(foodbankJunContents.kpi5 > '123.2' && foodbankJunContents.kpi5 < '154')?'yellow-7':(foodbankJunContents.kpi5 >= '154' && foodbankJunContents.kpi5 < '184.8')?'green':(foodbankJunContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi6 == null)?'grey-2':(foodbankJunContents.kpi6 >= '0' && foodbankJunContents.kpi6 <= '14.7')?'red':(foodbankJunContents.kpi6 > '14.7' && foodbankJunContents.kpi6 <= '19.6')?'orange':(foodbankJunContents.kpi6 > '19.6' && foodbankJunContents.kpi6 < '24.5')?'yellow-7':(foodbankJunContents.kpi6 >= '24.5' && foodbankJunContents.kpi6 < '29.4')?'green':(foodbankJunContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankJulContents.kpi1 == null)?'grey-2':(foodbankJulContents.kpi1 >= '0' && foodbankJulContents.kpi1 <= '238.8')?'red':(foodbankJulContents.kpi1 > '238.8' && foodbankJulContents.kpi1 <= '318.4')?'orange':(foodbankJulContents.kpi1 > '318.4' && foodbankJulContents.kpi1 < '398')?'yellow-7':(foodbankJulContents.kpi1 >= '398' && foodbankJulContents.kpi1 < '477.6')?'green':(foodbankJulContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi2 == null)?'grey-2':(foodbankJulContents.kpi2 >= '0' && foodbankJulContents.kpi2 <= '244.2')?'red':(foodbankJulContents.kpi2 > '244.2' && foodbankJulContents.kpi2 <= '325.6')?'orange':(foodbankJulContents.kpi2 > '325.6' && foodbankJulContents.kpi2 < '407')?'yellow-7':(foodbankJulContents.kpi2 >= '407' && foodbankJulContents.kpi2 < '488.4')?'green':(foodbankJulContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi3 == null)?'grey-2':(foodbankJulContents.kpi3 >= '0' && foodbankJulContents.kpi3 <= '524.25')?'red':(foodbankJulContents.kpi3 > '524.25' && foodbankJulContents.kpi3 <= '699')?'orange':(foodbankJulContents.kpi3 > '699' && foodbankJulContents.kpi3 < '873.75')?'yellow-7':(foodbankJulContents.kpi3 >= '873.75' && foodbankJulContents.kpi3 < '1048.5')?'green':(foodbankJulContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi4 == null)?'grey-2':(foodbankJulContents.kpi4 >= '0' && foodbankJulContents.kpi4 <= '12.45')?'red':(foodbankJulContents.kpi4 > '12.45' && foodbankJulContents.kpi4 <= '16.6')?'orange':(foodbankJulContents.kpi4 > '16.6' && foodbankJulContents.kpi4 < '20.75')?'yellow-7':(foodbankJulContents.kpi4 >= '20.75' && foodbankJulContents.kpi4 < '24.9')?'green':(foodbankJulContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi5 == null)?'grey-2':(foodbankJulContents.kpi5 >= '0' && foodbankJulContents.kpi5 <= '92.4')?'red':(foodbankJulContents.kpi5 > '92.4' && foodbankJulContents.kpi5 <= '123.2')?'orange':(foodbankJulContents.kpi5 > '123.2' && foodbankJulContents.kpi5 < '154')?'yellow-7':(foodbankJulContents.kpi5 >= '154' && foodbankJulContents.kpi5 < '184.8')?'green':(foodbankJulContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi6 == null)?'grey-2':(foodbankJulContents.kpi6 >= '0' && foodbankJulContents.kpi6 <= '14.7')?'red':(foodbankJulContents.kpi6 > '14.7' && foodbankJulContents.kpi6 <= '19.6')?'orange':(foodbankJulContents.kpi6 > '19.6' && foodbankJulContents.kpi6 < '24.5')?'yellow-7':(foodbankJulContents.kpi6 >= '24.5' && foodbankJulContents.kpi6 < '29.4')?'green':(foodbankJulContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankAugContents.kpi1 == null)?'grey-2':(foodbankAugContents.kpi1 >= '0' && foodbankAugContents.kpi1 <= '238.8')?'red':(foodbankAugContents.kpi1 > '238.8' && foodbankAugContents.kpi1 <= '318.4')?'orange':(foodbankAugContents.kpi1 > '318.4' && foodbankAugContents.kpi1 < '398')?'yellow-7':(foodbankAugContents.kpi1 >= '398' && foodbankAugContents.kpi1 < '477.6')?'green':(foodbankAugContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi2 == null)?'grey-2':(foodbankAugContents.kpi2 >= '0' && foodbankAugContents.kpi2 <= '244.2')?'red':(foodbankAugContents.kpi2 > '244.2' && foodbankAugContents.kpi2 <= '325.6')?'orange':(foodbankAugContents.kpi2 > '325.6' && foodbankAugContents.kpi2 < '407')?'yellow-7':(foodbankAugContents.kpi2 >= '407' && foodbankAugContents.kpi2 < '488.4')?'green':(foodbankAugContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi3 == null)?'grey-2':(foodbankAugContents.kpi3 >= '0' && foodbankAugContents.kpi3 <= '524.25')?'red':(foodbankAugContents.kpi3 > '524.25' && foodbankAugContents.kpi3 <= '699')?'orange':(foodbankAugContents.kpi3 > '699' && foodbankAugContents.kpi3 < '873.75')?'yellow-7':(foodbankAugContents.kpi3 >= '873.75' && foodbankAugContents.kpi3 < '1048.5')?'green':(foodbankAugContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi4 == null)?'grey-2':(foodbankAugContents.kpi4 >= '0' && foodbankAugContents.kpi4 <= '12.45')?'red':(foodbankAugContents.kpi4 > '12.45' && foodbankAugContents.kpi4 <= '16.6')?'orange':(foodbankAugContents.kpi4 > '16.6' && foodbankAugContents.kpi4 < '20.75')?'yellow-7':(foodbankAugContents.kpi4 >= '20.75' && foodbankAugContents.kpi4 < '24.9')?'green':(foodbankAugContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi5 == null)?'grey-2':(foodbankAugContents.kpi5 >= '0' && foodbankAugContents.kpi5 <= '92.4')?'red':(foodbankAugContents.kpi5 > '92.4' && foodbankAugContents.kpi5 <= '123.2')?'orange':(foodbankAugContents.kpi5 > '123.2' && foodbankAugContents.kpi5 < '154')?'yellow-7':(foodbankAugContents.kpi5 >= '154' && foodbankAugContents.kpi5 < '184.8')?'green':(foodbankAugContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi6 == null)?'grey-2':(foodbankAugContents.kpi6 >= '0' && foodbankAugContents.kpi6 <= '14.7')?'red':(foodbankAugContents.kpi6 > '14.7' && foodbankAugContents.kpi6 <= '19.6')?'orange':(foodbankAugContents.kpi6 > '19.6' && foodbankAugContents.kpi6 < '24.5')?'yellow-7':(foodbankAugContents.kpi6 >= '24.5' && foodbankAugContents.kpi6 < '29.4')?'green':(foodbankAugContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankSepContents.kpi1 == null)?'grey-2':(foodbankSepContents.kpi1 >= '0' && foodbankSepContents.kpi1 <= '238.8')?'red':(foodbankSepContents.kpi1 > '238.8' && foodbankSepContents.kpi1 <= '318.4')?'orange':(foodbankSepContents.kpi1 > '318.4' && foodbankSepContents.kpi1 < '398')?'yellow-7':(foodbankSepContents.kpi1 >= '398' && foodbankSepContents.kpi1 < '477.6')?'green':(foodbankSepContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi2 == null)?'grey-2':(foodbankSepContents.kpi2 >= '0' && foodbankSepContents.kpi2 <= '244.2')?'red':(foodbankSepContents.kpi2 > '244.2' && foodbankSepContents.kpi2 <= '325.6')?'orange':(foodbankSepContents.kpi2 > '325.6' && foodbankSepContents.kpi2 < '407')?'yellow-7':(foodbankSepContents.kpi2 >= '407' && foodbankSepContents.kpi2 < '488.4')?'green':(foodbankSepContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi3 == null)?'grey-2':(foodbankSepContents.kpi3 >= '0' && foodbankSepContents.kpi3 <= '524.25')?'red':(foodbankSepContents.kpi3 > '524.25' && foodbankSepContents.kpi3 <= '699')?'orange':(foodbankSepContents.kpi3 > '699' && foodbankSepContents.kpi3 < '873.75')?'yellow-7':(foodbankSepContents.kpi3 >= '873.75' && foodbankSepContents.kpi3 < '1048.5')?'green':(foodbankSepContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi4 == null)?'grey-2':(foodbankSepContents.kpi4 >= '0' && foodbankSepContents.kpi4 <= '12.45')?'red':(foodbankSepContents.kpi4 > '12.45' && foodbankSepContents.kpi4 <= '16.6')?'orange':(foodbankSepContents.kpi4 > '16.6' && foodbankSepContents.kpi4 < '20.75')?'yellow-7':(foodbankSepContents.kpi4 >= '20.75' && foodbankSepContents.kpi4 < '24.9')?'green':(foodbankSepContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi5 == null)?'grey-2':(foodbankSepContents.kpi5 >= '0' && foodbankSepContents.kpi5 <= '92.4')?'red':(foodbankSepContents.kpi5 > '92.4' && foodbankSepContents.kpi5 <= '123.2')?'orange':(foodbankSepContents.kpi5 > '123.2' && foodbankSepContents.kpi5 < '154')?'yellow-7':(foodbankSepContents.kpi5 >= '154' && foodbankSepContents.kpi5 < '184.8')?'green':(foodbankSepContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi6 == null)?'grey-2':(foodbankSepContents.kpi6 >= '0' && foodbankSepContents.kpi6 <= '14.7')?'red':(foodbankSepContents.kpi6 > '14.7' && foodbankSepContents.kpi6 <= '19.6')?'orange':(foodbankSepContents.kpi6 > '19.6' && foodbankSepContents.kpi6 < '24.5')?'yellow-7':(foodbankSepContents.kpi6 >= '24.5' && foodbankSepContents.kpi6 < '29.4')?'green':(foodbankSepContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankOctContents.kpi1 == null)?'grey-2':(foodbankOctContents.kpi1 >= '0' && foodbankOctContents.kpi1 <= '238.8')?'red':(foodbankOctContents.kpi1 > '238.8' && foodbankOctContents.kpi1 <= '318.4')?'orange':(foodbankOctContents.kpi1 > '318.4' && foodbankOctContents.kpi1 < '398')?'yellow-7':(foodbankOctContents.kpi1 >= '398' && foodbankOctContents.kpi1 < '477.6')?'green':(foodbankOctContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi2 == null)?'grey-2':(foodbankOctContents.kpi2 >= '0' && foodbankOctContents.kpi2 <= '244.2')?'red':(foodbankOctContents.kpi2 > '244.2' && foodbankOctContents.kpi2 <= '325.6')?'orange':(foodbankOctContents.kpi2 > '325.6' && foodbankOctContents.kpi2 < '407')?'yellow-7':(foodbankOctContents.kpi2 >= '407' && foodbankOctContents.kpi2 < '488.4')?'green':(foodbankOctContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi3 == null)?'grey-2':(foodbankOctContents.kpi3 >= '0' && foodbankOctContents.kpi3 <= '524.25')?'red':(foodbankOctContents.kpi3 > '524.25' && foodbankOctContents.kpi3 <= '699')?'orange':(foodbankOctContents.kpi3 > '699' && foodbankOctContents.kpi3 < '873.75')?'yellow-7':(foodbankOctContents.kpi3 >= '873.75' && foodbankOctContents.kpi3 < '1048.5')?'green':(foodbankOctContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi4 == null)?'grey-2':(foodbankOctContents.kpi4 >= '0' && foodbankOctContents.kpi4 <= '12.45')?'red':(foodbankOctContents.kpi4 > '12.45' && foodbankOctContents.kpi4 <= '16.6')?'orange':(foodbankOctContents.kpi4 > '16.6' && foodbankOctContents.kpi4 < '20.75')?'yellow-7':(foodbankOctContents.kpi4 >= '20.75' && foodbankOctContents.kpi4 < '24.9')?'green':(foodbankOctContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi5 == null)?'grey-2':(foodbankOctContents.kpi5 >= '0' && foodbankOctContents.kpi5 <= '92.4')?'red':(foodbankOctContents.kpi5 > '92.4' && foodbankOctContents.kpi5 <= '123.2')?'orange':(foodbankOctContents.kpi5 > '123.2' && foodbankOctContents.kpi5 < '154')?'yellow-7':(foodbankOctContents.kpi5 >= '154' && foodbankOctContents.kpi5 < '184.8')?'green':(foodbankOctContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi6 == null)?'grey-2':(foodbankOctContents.kpi6 >= '0' && foodbankOctContents.kpi6 <= '14.7')?'red':(foodbankOctContents.kpi6 > '14.7' && foodbankOctContents.kpi6 <= '19.6')?'orange':(foodbankOctContents.kpi6 > '19.6' && foodbankOctContents.kpi6 < '24.5')?'yellow-7':(foodbankOctContents.kpi6 >= '24.5' && foodbankOctContents.kpi6 < '29.4')?'green':(foodbankOctContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankNovContents.kpi1 == null)?'grey-2':(foodbankNovContents.kpi1 >= '0' && foodbankNovContents.kpi1 <= '238.8')?'red':(foodbankNovContents.kpi1 > '238.8' && foodbankNovContents.kpi1 <= '318.4')?'orange':(foodbankNovContents.kpi1 > '318.4' && foodbankNovContents.kpi1 < '398')?'yellow-7':(foodbankNovContents.kpi1 >= '398' && foodbankNovContents.kpi1 < '477.6')?'green':(foodbankNovContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi2 == null)?'grey-2':(foodbankNovContents.kpi2 >= '0' && foodbankNovContents.kpi2 <= '244.2')?'red':(foodbankNovContents.kpi2 > '244.2' && foodbankNovContents.kpi2 <= '325.6')?'orange':(foodbankNovContents.kpi2 > '325.6' && foodbankNovContents.kpi2 < '407')?'yellow-7':(foodbankNovContents.kpi2 >= '407' && foodbankNovContents.kpi2 < '488.4')?'green':(foodbankNovContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi3 == null)?'grey-2':(foodbankNovContents.kpi3 >= '0' && foodbankNovContents.kpi3 <= '524.25')?'red':(foodbankNovContents.kpi3 > '524.25' && foodbankNovContents.kpi3 <= '699')?'orange':(foodbankNovContents.kpi3 > '699' && foodbankNovContents.kpi3 < '873.75')?'yellow-7':(foodbankNovContents.kpi3 >= '873.75' && foodbankNovContents.kpi3 < '1048.5')?'green':(foodbankNovContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi4 == null)?'grey-2':(foodbankNovContents.kpi4 >= '0' && foodbankNovContents.kpi4 <= '12.45')?'red':(foodbankNovContents.kpi4 > '12.45' && foodbankNovContents.kpi4 <= '16.6')?'orange':(foodbankNovContents.kpi4 > '16.6' && foodbankNovContents.kpi4 < '20.75')?'yellow-7':(foodbankNovContents.kpi4 >= '20.75' && foodbankNovContents.kpi4 < '24.9')?'green':(foodbankNovContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi5 == null)?'grey-2':(foodbankNovContents.kpi5 >= '0' && foodbankNovContents.kpi5 <= '92.4')?'red':(foodbankNovContents.kpi5 > '92.4' && foodbankNovContents.kpi5 <= '123.2')?'orange':(foodbankNovContents.kpi5 > '123.2' && foodbankNovContents.kpi5 < '154')?'yellow-7':(foodbankNovContents.kpi5 >= '154' && foodbankNovContents.kpi5 < '184.8')?'green':(foodbankNovContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi6 == null)?'grey-2':(foodbankNovContents.kpi6 >= '0' && foodbankNovContents.kpi6 <= '14.7')?'red':(foodbankNovContents.kpi6 > '14.7' && foodbankNovContents.kpi6 <= '19.6')?'orange':(foodbankNovContents.kpi6 > '19.6' && foodbankNovContents.kpi6 < '24.5')?'yellow-7':(foodbankNovContents.kpi6 >= '24.5' && foodbankNovContents.kpi6 < '29.4')?'green':(foodbankNovContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankDecContents.kpi1 == null)?'grey-2':(foodbankDecContents.kpi1 >= '0' && foodbankDecContents.kpi1 <= '238.8')?'red':(foodbankDecContents.kpi1 > '238.8' && foodbankDecContents.kpi1 <= '318.4')?'orange':(foodbankDecContents.kpi1 > '318.4' && foodbankDecContents.kpi1 < '398')?'yellow-7':(foodbankDecContents.kpi1 >= '398' && foodbankDecContents.kpi1 < '477.6')?'green':(foodbankDecContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi2 == null)?'grey-2':(foodbankDecContents.kpi2 >= '0' && foodbankDecContents.kpi2 <= '244.2')?'red':(foodbankDecContents.kpi2 > '244.2' && foodbankDecContents.kpi2 <= '325.6')?'orange':(foodbankDecContents.kpi2 > '325.6' && foodbankDecContents.kpi2 < '407')?'yellow-7':(foodbankDecContents.kpi2 >= '407' && foodbankDecContents.kpi2 < '488.4')?'green':(foodbankDecContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi3 == null)?'grey-2':(foodbankDecContents.kpi3 >= '0' && foodbankDecContents.kpi3 <= '524.25')?'red':(foodbankDecContents.kpi3 > '524.25' && foodbankDecContents.kpi3 <= '699')?'orange':(foodbankDecContents.kpi3 > '699' && foodbankDecContents.kpi3 < '873.75')?'yellow-7':(foodbankDecContents.kpi3 >= '873.75' && foodbankDecContents.kpi3 < '1048.5')?'green':(foodbankDecContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi4 == null)?'grey-2':(foodbankDecContents.kpi4 >= '0' && foodbankDecContents.kpi4 <= '12.45')?'red':(foodbankDecContents.kpi4 > '12.45' && foodbankDecContents.kpi4 <= '16.6')?'orange':(foodbankDecContents.kpi4 > '16.6' && foodbankDecContents.kpi4 < '20.75')?'yellow-7':(foodbankDecContents.kpi4 >= '20.75' && foodbankDecContents.kpi4 < '24.9')?'green':(foodbankDecContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi5 == null)?'grey-2':(foodbankDecContents.kpi5 >= '0' && foodbankDecContents.kpi5 <= '92.4')?'red':(foodbankDecContents.kpi5 > '92.4' && foodbankDecContents.kpi5 <= '123.2')?'orange':(foodbankDecContents.kpi5 > '123.2' && foodbankDecContents.kpi5 < '154')?'yellow-7':(foodbankDecContents.kpi5 >= '154' && foodbankDecContents.kpi5 < '184.8')?'green':(foodbankDecContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi6 == null)?'grey-2':(foodbankDecContents.kpi6 >= '0' && foodbankDecContents.kpi6 <= '14.7')?'red':(foodbankDecContents.kpi6 > '14.7' && foodbankDecContents.kpi6 <= '19.6')?'orange':(foodbankDecContents.kpi6 > '19.6' && foodbankDecContents.kpi6 < '24.5')?'yellow-7':(foodbankDecContents.kpi6 >= '24.5' && foodbankDecContents.kpi6 < '29.4')?'green':(foodbankDecContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip>Activities (#)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 5
                                <q-tooltip># Households Receiving Deliveries</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 6
                                <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankJanContents.kpi1 == null)?'grey-2':(foodbankJanContents.kpi1 >= '0' && foodbankJanContents.kpi1 <= '238.8')?'red':(foodbankJanContents.kpi1 > '238.8' && foodbankJanContents.kpi1 <= '318.4')?'orange':(foodbankJanContents.kpi1 > '318.4' && foodbankJanContents.kpi1 < '398')?'yellow-7':(foodbankJanContents.kpi1 >= '398' && foodbankJanContents.kpi1 < '477.6')?'green':(foodbankJanContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi2 == null)?'grey-2':(foodbankJanContents.kpi2 >= '0' && foodbankJanContents.kpi2 <= '244.2')?'red':(foodbankJanContents.kpi2 > '244.2' && foodbankJanContents.kpi2 <= '325.6')?'orange':(foodbankJanContents.kpi2 > '325.6' && foodbankJanContents.kpi2 < '407')?'yellow-7':(foodbankJanContents.kpi2 >= '407' && foodbankJanContents.kpi2 < '488.4')?'green':(foodbankJanContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi3 == null)?'grey-2':(foodbankJanContents.kpi3 >= '0' && foodbankJanContents.kpi3 <= '524.25')?'red':(foodbankJanContents.kpi3 > '524.25' && foodbankJanContents.kpi3 <= '699')?'orange':(foodbankJanContents.kpi3 > '699' && foodbankJanContents.kpi3 < '873.75')?'yellow-7':(foodbankJanContents.kpi3 >= '873.75' && foodbankJanContents.kpi3 < '1048.5')?'green':(foodbankJanContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi4 == null)?'grey-2':(foodbankJanContents.kpi4 >= '0' && foodbankJanContents.kpi4 <= '12.45')?'red':(foodbankJanContents.kpi4 > '12.45' && foodbankJanContents.kpi4 <= '16.6')?'orange':(foodbankJanContents.kpi4 > '16.6' && foodbankJanContents.kpi4 < '20.75')?'yellow-7':(foodbankJanContents.kpi4 >= '20.75' && foodbankJanContents.kpi4 < '24.9')?'green':(foodbankJanContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi5 == null)?'grey-2':(foodbankJanContents.kpi5 >= '0' && foodbankJanContents.kpi5 <= '92.4')?'red':(foodbankJanContents.kpi5 > '92.4' && foodbankJanContents.kpi5 <= '123.2')?'orange':(foodbankJanContents.kpi5 > '123.2' && foodbankJanContents.kpi5 < '154')?'yellow-7':(foodbankJanContents.kpi5 >= '154' && foodbankJanContents.kpi5 < '184.8')?'green':(foodbankJanContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi6 == null)?'grey-2':(foodbankJanContents.kpi6 >= '0' && foodbankJanContents.kpi6 <= '14.7')?'red':(foodbankJanContents.kpi6 > '14.7' && foodbankJanContents.kpi6 <= '19.6')?'orange':(foodbankJanContents.kpi6 > '19.6' && foodbankJanContents.kpi6 < '24.5')?'yellow-7':(foodbankJanContents.kpi6 >= '24.5' && foodbankJanContents.kpi6 < '29.4')?'green':(foodbankJanContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankFebContents.kpi1 == null)?'grey-2':(foodbankFebContents.kpi1 >= '0' && foodbankFebContents.kpi1 <= '238.8')?'red':(foodbankFebContents.kpi1 > '238.8' && foodbankFebContents.kpi1 <= '318.4')?'orange':(foodbankFebContents.kpi1 > '318.4' && foodbankFebContents.kpi1 < '398')?'yellow-7':(foodbankFebContents.kpi1 >= '398' && foodbankFebContents.kpi1 < '477.6')?'green':(foodbankFebContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi2 == null)?'grey-2':(foodbankFebContents.kpi2 >= '0' && foodbankFebContents.kpi2 <= '244.2')?'red':(foodbankFebContents.kpi2 > '244.2' && foodbankFebContents.kpi2 <= '325.6')?'orange':(foodbankFebContents.kpi2 > '325.6' && foodbankFebContents.kpi2 < '407')?'yellow-7':(foodbankFebContents.kpi2 >= '407' && foodbankFebContents.kpi2 < '488.4')?'green':(foodbankFebContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi3 == null)?'grey-2':(foodbankFebContents.kpi3 >= '0' && foodbankFebContents.kpi3 <= '524.25')?'red':(foodbankFebContents.kpi3 > '524.25' && foodbankFebContents.kpi3 <= '699')?'orange':(foodbankFebContents.kpi3 > '699' && foodbankFebContents.kpi3 < '873.75')?'yellow-7':(foodbankFebContents.kpi3 >= '873.75' && foodbankFebContents.kpi3 < '1048.5')?'green':(foodbankFebContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi4 == null)?'grey-2':(foodbankFebContents.kpi4 >= '0' && foodbankFebContents.kpi4 <= '12.45')?'red':(foodbankFebContents.kpi4 > '12.45' && foodbankFebContents.kpi4 <= '16.6')?'orange':(foodbankFebContents.kpi4 > '16.6' && foodbankFebContents.kpi4 < '20.75')?'yellow-7':(foodbankFebContents.kpi4 >= '20.75' && foodbankFebContents.kpi4 < '24.9')?'green':(foodbankFebContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi5 == null)?'grey-2':(foodbankFebContents.kpi5 >= '0' && foodbankFebContents.kpi5 <= '92.4')?'red':(foodbankFebContents.kpi5 > '92.4' && foodbankFebContents.kpi5 <= '123.2')?'orange':(foodbankFebContents.kpi5 > '123.2' && foodbankFebContents.kpi5 < '154')?'yellow-7':(foodbankFebContents.kpi5 >= '154' && foodbankFebContents.kpi5 < '184.8')?'green':(foodbankFebContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi6 == null)?'grey-2':(foodbankFebContents.kpi6 >= '0' && foodbankFebContents.kpi6 <= '14.7')?'red':(foodbankFebContents.kpi6 > '14.7' && foodbankFebContents.kpi6 <= '19.6')?'orange':(foodbankFebContents.kpi6 > '19.6' && foodbankFebContents.kpi6 < '24.5')?'yellow-7':(foodbankFebContents.kpi6 >= '24.5' && foodbankFebContents.kpi6 < '29.4')?'green':(foodbankFebContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankMarContents.kpi1 == null)?'grey-2':(foodbankMarContents.kpi1 >= '0' && foodbankMarContents.kpi1 <= '238.8')?'red':(foodbankMarContents.kpi1 > '238.8' && foodbankMarContents.kpi1 <= '318.4')?'orange':(foodbankMarContents.kpi1 > '318.4' && foodbankMarContents.kpi1 < '398')?'yellow-7':(foodbankMarContents.kpi1 >= '398' && foodbankMarContents.kpi1 < '477.6')?'green':(foodbankMarContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi2 == null)?'grey-2':(foodbankMarContents.kpi2 >= '0' && foodbankMarContents.kpi2 <= '244.2')?'red':(foodbankMarContents.kpi2 > '244.2' && foodbankMarContents.kpi2 <= '325.6')?'orange':(foodbankMarContents.kpi2 > '325.6' && foodbankMarContents.kpi2 < '407')?'yellow-7':(foodbankMarContents.kpi2 >= '407' && foodbankMarContents.kpi2 < '488.4')?'green':(foodbankMarContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi3 == null)?'grey-2':(foodbankMarContents.kpi3 >= '0' && foodbankMarContents.kpi3 <= '524.25')?'red':(foodbankMarContents.kpi3 > '524.25' && foodbankMarContents.kpi3 <= '699')?'orange':(foodbankMarContents.kpi3 > '699' && foodbankMarContents.kpi3 < '873.75')?'yellow-7':(foodbankMarContents.kpi3 >= '873.75' && foodbankMarContents.kpi3 < '1048.5')?'green':(foodbankMarContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi4 == null)?'grey-2':(foodbankMarContents.kpi4 >= '0' && foodbankMarContents.kpi4 <= '12.45')?'red':(foodbankMarContents.kpi4 > '12.45' && foodbankMarContents.kpi4 <= '16.6')?'orange':(foodbankMarContents.kpi4 > '16.6' && foodbankMarContents.kpi4 < '20.75')?'yellow-7':(foodbankMarContents.kpi4 >= '20.75' && foodbankMarContents.kpi4 < '24.9')?'green':(foodbankMarContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi5 == null)?'grey-2':(foodbankMarContents.kpi5 >= '0' && foodbankMarContents.kpi5 <= '92.4')?'red':(foodbankMarContents.kpi5 > '92.4' && foodbankMarContents.kpi5 <= '123.2')?'orange':(foodbankMarContents.kpi5 > '123.2' && foodbankMarContents.kpi5 < '154')?'yellow-7':(foodbankMarContents.kpi5 >= '154' && foodbankMarContents.kpi5 < '184.8')?'green':(foodbankMarContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi6 == null)?'grey-2':(foodbankMarContents.kpi6 >= '0' && foodbankMarContents.kpi6 <= '14.7')?'red':(foodbankMarContents.kpi6 > '14.7' && foodbankMarContents.kpi6 <= '19.6')?'orange':(foodbankMarContents.kpi6 > '19.6' && foodbankMarContents.kpi6 < '24.5')?'yellow-7':(foodbankMarContents.kpi6 >= '24.5' && foodbankMarContents.kpi6 < '29.4')?'green':(foodbankMarContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankAprContents.kpi1 == null)?'grey-2':(foodbankAprContents.kpi1 >= '0' && foodbankAprContents.kpi1 <= '238.8')?'red':(foodbankAprContents.kpi1 > '238.8' && foodbankAprContents.kpi1 <= '318.4')?'orange':(foodbankAprContents.kpi1 > '318.4' && foodbankAprContents.kpi1 < '398')?'yellow-7':(foodbankAprContents.kpi1 >= '398' && foodbankAprContents.kpi1 < '477.6')?'green':(foodbankAprContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi2 == null)?'grey-2':(foodbankAprContents.kpi2 >= '0' && foodbankAprContents.kpi2 <= '244.2')?'red':(foodbankAprContents.kpi2 > '244.2' && foodbankAprContents.kpi2 <= '325.6')?'orange':(foodbankAprContents.kpi2 > '325.6' && foodbankAprContents.kpi2 < '407')?'yellow-7':(foodbankAprContents.kpi2 >= '407' && foodbankAprContents.kpi2 < '488.4')?'green':(foodbankAprContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi3 == null)?'grey-2':(foodbankAprContents.kpi3 >= '0' && foodbankAprContents.kpi3 <= '524.25')?'red':(foodbankAprContents.kpi3 > '524.25' && foodbankAprContents.kpi3 <= '699')?'orange':(foodbankAprContents.kpi3 > '699' && foodbankAprContents.kpi3 < '873.75')?'yellow-7':(foodbankAprContents.kpi3 >= '873.75' && foodbankAprContents.kpi3 < '1048.5')?'green':(foodbankAprContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi4 == null)?'grey-2':(foodbankAprContents.kpi4 >= '0' && foodbankAprContents.kpi4 <= '12.45')?'red':(foodbankAprContents.kpi4 > '12.45' && foodbankAprContents.kpi4 <= '16.6')?'orange':(foodbankAprContents.kpi4 > '16.6' && foodbankAprContents.kpi4 < '20.75')?'yellow-7':(foodbankAprContents.kpi4 >= '20.75' && foodbankAprContents.kpi4 < '24.9')?'green':(foodbankAprContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi5 == null)?'grey-2':(foodbankAprContents.kpi5 >= '0' && foodbankAprContents.kpi5 <= '92.4')?'red':(foodbankAprContents.kpi5 > '92.4' && foodbankAprContents.kpi5 <= '123.2')?'orange':(foodbankAprContents.kpi5 > '123.2' && foodbankAprContents.kpi5 < '154')?'yellow-7':(foodbankAprContents.kpi5 >= '154' && foodbankAprContents.kpi5 < '184.8')?'green':(foodbankAprContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi6 == null)?'grey-2':(foodbankAprContents.kpi6 >= '0' && foodbankAprContents.kpi6 <= '14.7')?'red':(foodbankAprContents.kpi6 > '14.7' && foodbankAprContents.kpi6 <= '19.6')?'orange':(foodbankAprContents.kpi6 > '19.6' && foodbankAprContents.kpi6 < '24.5')?'yellow-7':(foodbankAprContents.kpi6 >= '24.5' && foodbankAprContents.kpi6 < '29.4')?'green':(foodbankAprContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankMayContents.kpi1 == null)?'grey-2':(foodbankMayContents.kpi1 >= '0' && foodbankMayContents.kpi1 <= '238.8')?'red':(foodbankMayContents.kpi1 > '238.8' && foodbankMayContents.kpi1 <= '318.4')?'orange':(foodbankMayContents.kpi1 > '318.4' && foodbankMayContents.kpi1 < '398')?'yellow-7':(foodbankMayContents.kpi1 >= '398' && foodbankMayContents.kpi1 < '477.6')?'green':(foodbankMayContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi2 == null)?'grey-2':(foodbankMayContents.kpi2 >= '0' && foodbankMayContents.kpi2 <= '244.2')?'red':(foodbankMayContents.kpi2 > '244.2' && foodbankMayContents.kpi2 <= '325.6')?'orange':(foodbankMayContents.kpi2 > '325.6' && foodbankMayContents.kpi2 < '407')?'yellow-7':(foodbankMayContents.kpi2 >= '407' && foodbankMayContents.kpi2 < '488.4')?'green':(foodbankMayContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi3 == null)?'grey-2':(foodbankMayContents.kpi3 >= '0' && foodbankMayContents.kpi3 <= '524.25')?'red':(foodbankMayContents.kpi3 > '524.25' && foodbankMayContents.kpi3 <= '699')?'orange':(foodbankMayContents.kpi3 > '699' && foodbankMayContents.kpi3 < '873.75')?'yellow-7':(foodbankMayContents.kpi3 >= '873.75' && foodbankMayContents.kpi3 < '1048.5')?'green':(foodbankMayContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi4 == null)?'grey-2':(foodbankMayContents.kpi4 >= '0' && foodbankMayContents.kpi4 <= '12.45')?'red':(foodbankMayContents.kpi4 > '12.45' && foodbankMayContents.kpi4 <= '16.6')?'orange':(foodbankMayContents.kpi4 > '16.6' && foodbankMayContents.kpi4 < '20.75')?'yellow-7':(foodbankMayContents.kpi4 >= '20.75' && foodbankMayContents.kpi4 < '24.9')?'green':(foodbankMayContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi5 == null)?'grey-2':(foodbankMayContents.kpi5 >= '0' && foodbankMayContents.kpi5 <= '92.4')?'red':(foodbankMayContents.kpi5 > '92.4' && foodbankMayContents.kpi5 <= '123.2')?'orange':(foodbankMayContents.kpi5 > '123.2' && foodbankMayContents.kpi5 < '154')?'yellow-7':(foodbankMayContents.kpi5 >= '154' && foodbankMayContents.kpi5 < '184.8')?'green':(foodbankMayContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi6 == null)?'grey-2':(foodbankMayContents.kpi6 >= '0' && foodbankMayContents.kpi6 <= '14.7')?'red':(foodbankMayContents.kpi6 > '14.7' && foodbankMayContents.kpi6 <= '19.6')?'orange':(foodbankMayContents.kpi6 > '19.6' && foodbankMayContents.kpi6 < '24.5')?'yellow-7':(foodbankMayContents.kpi6 >= '24.5' && foodbankMayContents.kpi6 < '29.4')?'green':(foodbankMayContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankJunContents.kpi1 == null)?'grey-2':(foodbankJunContents.kpi1 >= '0' && foodbankJunContents.kpi1 <= '238.8')?'red':(foodbankJunContents.kpi1 > '238.8' && foodbankJunContents.kpi1 <= '318.4')?'orange':(foodbankJunContents.kpi1 > '318.4' && foodbankJunContents.kpi1 < '398')?'yellow-7':(foodbankJunContents.kpi1 >= '398' && foodbankJunContents.kpi1 < '477.6')?'green':(foodbankJunContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi2 == null)?'grey-2':(foodbankJunContents.kpi2 >= '0' && foodbankJunContents.kpi2 <= '244.2')?'red':(foodbankJunContents.kpi2 > '244.2' && foodbankJunContents.kpi2 <= '325.6')?'orange':(foodbankJunContents.kpi2 > '325.6' && foodbankJunContents.kpi2 < '407')?'yellow-7':(foodbankJunContents.kpi2 >= '407' && foodbankJunContents.kpi2 < '488.4')?'green':(foodbankJunContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi3 == null)?'grey-2':(foodbankJunContents.kpi3 >= '0' && foodbankJunContents.kpi3 <= '524.25')?'red':(foodbankJunContents.kpi3 > '524.25' && foodbankJunContents.kpi3 <= '699')?'orange':(foodbankJunContents.kpi3 > '699' && foodbankJunContents.kpi3 < '873.75')?'yellow-7':(foodbankJunContents.kpi3 >= '873.75' && foodbankJunContents.kpi3 < '1048.5')?'green':(foodbankJunContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi4 == null)?'grey-2':(foodbankJunContents.kpi4 >= '0' && foodbankJunContents.kpi4 <= '12.45')?'red':(foodbankJunContents.kpi4 > '12.45' && foodbankJunContents.kpi4 <= '16.6')?'orange':(foodbankJunContents.kpi4 > '16.6' && foodbankJunContents.kpi4 < '20.75')?'yellow-7':(foodbankJunContents.kpi4 >= '20.75' && foodbankJunContents.kpi4 < '24.9')?'green':(foodbankJunContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi5 == null)?'grey-2':(foodbankJunContents.kpi5 >= '0' && foodbankJunContents.kpi5 <= '92.4')?'red':(foodbankJunContents.kpi5 > '92.4' && foodbankJunContents.kpi5 <= '123.2')?'orange':(foodbankJunContents.kpi5 > '123.2' && foodbankJunContents.kpi5 < '154')?'yellow-7':(foodbankJunContents.kpi5 >= '154' && foodbankJunContents.kpi5 < '184.8')?'green':(foodbankJunContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi6 == null)?'grey-2':(foodbankJunContents.kpi6 >= '0' && foodbankJunContents.kpi6 <= '14.7')?'red':(foodbankJunContents.kpi6 > '14.7' && foodbankJunContents.kpi6 <= '19.6')?'orange':(foodbankJunContents.kpi6 > '19.6' && foodbankJunContents.kpi6 < '24.5')?'yellow-7':(foodbankJunContents.kpi6 >= '24.5' && foodbankJunContents.kpi6 < '29.4')?'green':(foodbankJunContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankJulContents.kpi1 == null)?'grey-2':(foodbankJulContents.kpi1 >= '0' && foodbankJulContents.kpi1 <= '238.8')?'red':(foodbankJulContents.kpi1 > '238.8' && foodbankJulContents.kpi1 <= '318.4')?'orange':(foodbankJulContents.kpi1 > '318.4' && foodbankJulContents.kpi1 < '398')?'yellow-7':(foodbankJulContents.kpi1 >= '398' && foodbankJulContents.kpi1 < '477.6')?'green':(foodbankJulContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi2 == null)?'grey-2':(foodbankJulContents.kpi2 >= '0' && foodbankJulContents.kpi2 <= '244.2')?'red':(foodbankJulContents.kpi2 > '244.2' && foodbankJulContents.kpi2 <= '325.6')?'orange':(foodbankJulContents.kpi2 > '325.6' && foodbankJulContents.kpi2 < '407')?'yellow-7':(foodbankJulContents.kpi2 >= '407' && foodbankJulContents.kpi2 < '488.4')?'green':(foodbankJulContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi3 == null)?'grey-2':(foodbankJulContents.kpi3 >= '0' && foodbankJulContents.kpi3 <= '524.25')?'red':(foodbankJulContents.kpi3 > '524.25' && foodbankJulContents.kpi3 <= '699')?'orange':(foodbankJulContents.kpi3 > '699' && foodbankJulContents.kpi3 < '873.75')?'yellow-7':(foodbankJulContents.kpi3 >= '873.75' && foodbankJulContents.kpi3 < '1048.5')?'green':(foodbankJulContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi4 == null)?'grey-2':(foodbankJulContents.kpi4 >= '0' && foodbankJulContents.kpi4 <= '12.45')?'red':(foodbankJulContents.kpi4 > '12.45' && foodbankJulContents.kpi4 <= '16.6')?'orange':(foodbankJulContents.kpi4 > '16.6' && foodbankJulContents.kpi4 < '20.75')?'yellow-7':(foodbankJulContents.kpi4 >= '20.75' && foodbankJulContents.kpi4 < '24.9')?'green':(foodbankJulContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi5 == null)?'grey-2':(foodbankJulContents.kpi5 >= '0' && foodbankJulContents.kpi5 <= '92.4')?'red':(foodbankJulContents.kpi5 > '92.4' && foodbankJulContents.kpi5 <= '123.2')?'orange':(foodbankJulContents.kpi5 > '123.2' && foodbankJulContents.kpi5 < '154')?'yellow-7':(foodbankJulContents.kpi5 >= '154' && foodbankJulContents.kpi5 < '184.8')?'green':(foodbankJulContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi6 == null)?'grey-2':(foodbankJulContents.kpi6 >= '0' && foodbankJulContents.kpi6 <= '14.7')?'red':(foodbankJulContents.kpi6 > '14.7' && foodbankJulContents.kpi6 <= '19.6')?'orange':(foodbankJulContents.kpi6 > '19.6' && foodbankJulContents.kpi6 < '24.5')?'yellow-7':(foodbankJulContents.kpi6 >= '24.5' && foodbankJulContents.kpi6 < '29.4')?'green':(foodbankJulContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankAugContents.kpi1 == null)?'grey-2':(foodbankAugContents.kpi1 >= '0' && foodbankAugContents.kpi1 <= '238.8')?'red':(foodbankAugContents.kpi1 > '238.8' && foodbankAugContents.kpi1 <= '318.4')?'orange':(foodbankAugContents.kpi1 > '318.4' && foodbankAugContents.kpi1 < '398')?'yellow-7':(foodbankAugContents.kpi1 >= '398' && foodbankAugContents.kpi1 < '477.6')?'green':(foodbankAugContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi2 == null)?'grey-2':(foodbankAugContents.kpi2 >= '0' && foodbankAugContents.kpi2 <= '244.2')?'red':(foodbankAugContents.kpi2 > '244.2' && foodbankAugContents.kpi2 <= '325.6')?'orange':(foodbankAugContents.kpi2 > '325.6' && foodbankAugContents.kpi2 < '407')?'yellow-7':(foodbankAugContents.kpi2 >= '407' && foodbankAugContents.kpi2 < '488.4')?'green':(foodbankAugContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi3 == null)?'grey-2':(foodbankAugContents.kpi3 >= '0' && foodbankAugContents.kpi3 <= '524.25')?'red':(foodbankAugContents.kpi3 > '524.25' && foodbankAugContents.kpi3 <= '699')?'orange':(foodbankAugContents.kpi3 > '699' && foodbankAugContents.kpi3 < '873.75')?'yellow-7':(foodbankAugContents.kpi3 >= '873.75' && foodbankAugContents.kpi3 < '1048.5')?'green':(foodbankAugContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi4 == null)?'grey-2':(foodbankAugContents.kpi4 >= '0' && foodbankAugContents.kpi4 <= '12.45')?'red':(foodbankAugContents.kpi4 > '12.45' && foodbankAugContents.kpi4 <= '16.6')?'orange':(foodbankAugContents.kpi4 > '16.6' && foodbankAugContents.kpi4 < '20.75')?'yellow-7':(foodbankAugContents.kpi4 >= '20.75' && foodbankAugContents.kpi4 < '24.9')?'green':(foodbankAugContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi5 == null)?'grey-2':(foodbankAugContents.kpi5 >= '0' && foodbankAugContents.kpi5 <= '92.4')?'red':(foodbankAugContents.kpi5 > '92.4' && foodbankAugContents.kpi5 <= '123.2')?'orange':(foodbankAugContents.kpi5 > '123.2' && foodbankAugContents.kpi5 < '154')?'yellow-7':(foodbankAugContents.kpi5 >= '154' && foodbankAugContents.kpi5 < '184.8')?'green':(foodbankAugContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi6 == null)?'grey-2':(foodbankAugContents.kpi6 >= '0' && foodbankAugContents.kpi6 <= '14.7')?'red':(foodbankAugContents.kpi6 > '14.7' && foodbankAugContents.kpi6 <= '19.6')?'orange':(foodbankAugContents.kpi6 > '19.6' && foodbankAugContents.kpi6 < '24.5')?'yellow-7':(foodbankAugContents.kpi6 >= '24.5' && foodbankAugContents.kpi6 < '29.4')?'green':(foodbankAugContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankSepContents.kpi1 == null)?'grey-2':(foodbankSepContents.kpi1 >= '0' && foodbankSepContents.kpi1 <= '238.8')?'red':(foodbankSepContents.kpi1 > '238.8' && foodbankSepContents.kpi1 <= '318.4')?'orange':(foodbankSepContents.kpi1 > '318.4' && foodbankSepContents.kpi1 < '398')?'yellow-7':(foodbankSepContents.kpi1 >= '398' && foodbankSepContents.kpi1 < '477.6')?'green':(foodbankSepContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi2 == null)?'grey-2':(foodbankSepContents.kpi2 >= '0' && foodbankSepContents.kpi2 <= '244.2')?'red':(foodbankSepContents.kpi2 > '244.2' && foodbankSepContents.kpi2 <= '325.6')?'orange':(foodbankSepContents.kpi2 > '325.6' && foodbankSepContents.kpi2 < '407')?'yellow-7':(foodbankSepContents.kpi2 >= '407' && foodbankSepContents.kpi2 < '488.4')?'green':(foodbankSepContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi3 == null)?'grey-2':(foodbankSepContents.kpi3 >= '0' && foodbankSepContents.kpi3 <= '524.25')?'red':(foodbankSepContents.kpi3 > '524.25' && foodbankSepContents.kpi3 <= '699')?'orange':(foodbankSepContents.kpi3 > '699' && foodbankSepContents.kpi3 < '873.75')?'yellow-7':(foodbankSepContents.kpi3 >= '873.75' && foodbankSepContents.kpi3 < '1048.5')?'green':(foodbankSepContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi4 == null)?'grey-2':(foodbankSepContents.kpi4 >= '0' && foodbankSepContents.kpi4 <= '12.45')?'red':(foodbankSepContents.kpi4 > '12.45' && foodbankSepContents.kpi4 <= '16.6')?'orange':(foodbankSepContents.kpi4 > '16.6' && foodbankSepContents.kpi4 < '20.75')?'yellow-7':(foodbankSepContents.kpi4 >= '20.75' && foodbankSepContents.kpi4 < '24.9')?'green':(foodbankSepContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi5 == null)?'grey-2':(foodbankSepContents.kpi5 >= '0' && foodbankSepContents.kpi5 <= '92.4')?'red':(foodbankSepContents.kpi5 > '92.4' && foodbankSepContents.kpi5 <= '123.2')?'orange':(foodbankSepContents.kpi5 > '123.2' && foodbankSepContents.kpi5 < '154')?'yellow-7':(foodbankSepContents.kpi5 >= '154' && foodbankSepContents.kpi5 < '184.8')?'green':(foodbankSepContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi6 == null)?'grey-2':(foodbankSepContents.kpi6 >= '0' && foodbankSepContents.kpi6 <= '14.7')?'red':(foodbankSepContents.kpi6 > '14.7' && foodbankSepContents.kpi6 <= '19.6')?'orange':(foodbankSepContents.kpi6 > '19.6' && foodbankSepContents.kpi6 < '24.5')?'yellow-7':(foodbankSepContents.kpi6 >= '24.5' && foodbankSepContents.kpi6 < '29.4')?'green':(foodbankSepContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankOctContents.kpi1 == null)?'grey-2':(foodbankOctContents.kpi1 >= '0' && foodbankOctContents.kpi1 <= '238.8')?'red':(foodbankOctContents.kpi1 > '238.8' && foodbankOctContents.kpi1 <= '318.4')?'orange':(foodbankOctContents.kpi1 > '318.4' && foodbankOctContents.kpi1 < '398')?'yellow-7':(foodbankOctContents.kpi1 >= '398' && foodbankOctContents.kpi1 < '477.6')?'green':(foodbankOctContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi2 == null)?'grey-2':(foodbankOctContents.kpi2 >= '0' && foodbankOctContents.kpi2 <= '244.2')?'red':(foodbankOctContents.kpi2 > '244.2' && foodbankOctContents.kpi2 <= '325.6')?'orange':(foodbankOctContents.kpi2 > '325.6' && foodbankOctContents.kpi2 < '407')?'yellow-7':(foodbankOctContents.kpi2 >= '407' && foodbankOctContents.kpi2 < '488.4')?'green':(foodbankOctContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi3 == null)?'grey-2':(foodbankOctContents.kpi3 >= '0' && foodbankOctContents.kpi3 <= '524.25')?'red':(foodbankOctContents.kpi3 > '524.25' && foodbankOctContents.kpi3 <= '699')?'orange':(foodbankOctContents.kpi3 > '699' && foodbankOctContents.kpi3 < '873.75')?'yellow-7':(foodbankOctContents.kpi3 >= '873.75' && foodbankOctContents.kpi3 < '1048.5')?'green':(foodbankOctContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi4 == null)?'grey-2':(foodbankOctContents.kpi4 >= '0' && foodbankOctContents.kpi4 <= '12.45')?'red':(foodbankOctContents.kpi4 > '12.45' && foodbankOctContents.kpi4 <= '16.6')?'orange':(foodbankOctContents.kpi4 > '16.6' && foodbankOctContents.kpi4 < '20.75')?'yellow-7':(foodbankOctContents.kpi4 >= '20.75' && foodbankOctContents.kpi4 < '24.9')?'green':(foodbankOctContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi5 == null)?'grey-2':(foodbankOctContents.kpi5 >= '0' && foodbankOctContents.kpi5 <= '92.4')?'red':(foodbankOctContents.kpi5 > '92.4' && foodbankOctContents.kpi5 <= '123.2')?'orange':(foodbankOctContents.kpi5 > '123.2' && foodbankOctContents.kpi5 < '154')?'yellow-7':(foodbankOctContents.kpi5 >= '154' && foodbankOctContents.kpi5 < '184.8')?'green':(foodbankOctContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi6 == null)?'grey-2':(foodbankOctContents.kpi6 >= '0' && foodbankOctContents.kpi6 <= '14.7')?'red':(foodbankOctContents.kpi6 > '14.7' && foodbankOctContents.kpi6 <= '19.6')?'orange':(foodbankOctContents.kpi6 > '19.6' && foodbankOctContents.kpi6 < '24.5')?'yellow-7':(foodbankOctContents.kpi6 >= '24.5' && foodbankOctContents.kpi6 < '29.4')?'green':(foodbankOctContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankNovContents.kpi1 == null)?'grey-2':(foodbankNovContents.kpi1 >= '0' && foodbankNovContents.kpi1 <= '238.8')?'red':(foodbankNovContents.kpi1 > '238.8' && foodbankNovContents.kpi1 <= '318.4')?'orange':(foodbankNovContents.kpi1 > '318.4' && foodbankNovContents.kpi1 < '398')?'yellow-7':(foodbankNovContents.kpi1 >= '398' && foodbankNovContents.kpi1 < '477.6')?'green':(foodbankNovContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi2 == null)?'grey-2':(foodbankNovContents.kpi2 >= '0' && foodbankNovContents.kpi2 <= '244.2')?'red':(foodbankNovContents.kpi2 > '244.2' && foodbankNovContents.kpi2 <= '325.6')?'orange':(foodbankNovContents.kpi2 > '325.6' && foodbankNovContents.kpi2 < '407')?'yellow-7':(foodbankNovContents.kpi2 >= '407' && foodbankNovContents.kpi2 < '488.4')?'green':(foodbankNovContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi3 == null)?'grey-2':(foodbankNovContents.kpi3 >= '0' && foodbankNovContents.kpi3 <= '524.25')?'red':(foodbankNovContents.kpi3 > '524.25' && foodbankNovContents.kpi3 <= '699')?'orange':(foodbankNovContents.kpi3 > '699' && foodbankNovContents.kpi3 < '873.75')?'yellow-7':(foodbankNovContents.kpi3 >= '873.75' && foodbankNovContents.kpi3 < '1048.5')?'green':(foodbankNovContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi4 == null)?'grey-2':(foodbankNovContents.kpi4 >= '0' && foodbankNovContents.kpi4 <= '12.45')?'red':(foodbankNovContents.kpi4 > '12.45' && foodbankNovContents.kpi4 <= '16.6')?'orange':(foodbankNovContents.kpi4 > '16.6' && foodbankNovContents.kpi4 < '20.75')?'yellow-7':(foodbankNovContents.kpi4 >= '20.75' && foodbankNovContents.kpi4 < '24.9')?'green':(foodbankNovContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi5 == null)?'grey-2':(foodbankNovContents.kpi5 >= '0' && foodbankNovContents.kpi5 <= '92.4')?'red':(foodbankNovContents.kpi5 > '92.4' && foodbankNovContents.kpi5 <= '123.2')?'orange':(foodbankNovContents.kpi5 > '123.2' && foodbankNovContents.kpi5 < '154')?'yellow-7':(foodbankNovContents.kpi5 >= '154' && foodbankNovContents.kpi5 < '184.8')?'green':(foodbankNovContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi6 == null)?'grey-2':(foodbankNovContents.kpi6 >= '0' && foodbankNovContents.kpi6 <= '14.7')?'red':(foodbankNovContents.kpi6 > '14.7' && foodbankNovContents.kpi6 <= '19.6')?'orange':(foodbankNovContents.kpi6 > '19.6' && foodbankNovContents.kpi6 < '24.5')?'yellow-7':(foodbankNovContents.kpi6 >= '24.5' && foodbankNovContents.kpi6 < '29.4')?'green':(foodbankNovContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankDecContents.kpi1 == null)?'grey-2':(foodbankDecContents.kpi1 >= '0' && foodbankDecContents.kpi1 <= '238.8')?'red':(foodbankDecContents.kpi1 > '238.8' && foodbankDecContents.kpi1 <= '318.4')?'orange':(foodbankDecContents.kpi1 > '318.4' && foodbankDecContents.kpi1 < '398')?'yellow-7':(foodbankDecContents.kpi1 >= '398' && foodbankDecContents.kpi1 < '477.6')?'green':(foodbankDecContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi2 == null)?'grey-2':(foodbankDecContents.kpi2 >= '0' && foodbankDecContents.kpi2 <= '244.2')?'red':(foodbankDecContents.kpi2 > '244.2' && foodbankDecContents.kpi2 <= '325.6')?'orange':(foodbankDecContents.kpi2 > '325.6' && foodbankDecContents.kpi2 < '407')?'yellow-7':(foodbankDecContents.kpi2 >= '407' && foodbankDecContents.kpi2 < '488.4')?'green':(foodbankDecContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi3 == null)?'grey-2':(foodbankDecContents.kpi3 >= '0' && foodbankDecContents.kpi3 <= '524.25')?'red':(foodbankDecContents.kpi3 > '524.25' && foodbankDecContents.kpi3 <= '699')?'orange':(foodbankDecContents.kpi3 > '699' && foodbankDecContents.kpi3 < '873.75')?'yellow-7':(foodbankDecContents.kpi3 >= '873.75' && foodbankDecContents.kpi3 < '1048.5')?'green':(foodbankDecContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi4 == null)?'grey-2':(foodbankDecContents.kpi4 >= '0' && foodbankDecContents.kpi4 <= '12.45')?'red':(foodbankDecContents.kpi4 > '12.45' && foodbankDecContents.kpi4 <= '16.6')?'orange':(foodbankDecContents.kpi4 > '16.6' && foodbankDecContents.kpi4 < '20.75')?'yellow-7':(foodbankDecContents.kpi4 >= '20.75' && foodbankDecContents.kpi4 < '24.9')?'green':(foodbankDecContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi5 == null)?'grey-2':(foodbankDecContents.kpi5 >= '0' && foodbankDecContents.kpi5 <= '92.4')?'red':(foodbankDecContents.kpi5 > '92.4' && foodbankDecContents.kpi5 <= '123.2')?'orange':(foodbankDecContents.kpi5 > '123.2' && foodbankDecContents.kpi5 < '154')?'yellow-7':(foodbankDecContents.kpi5 >= '154' && foodbankDecContents.kpi5 < '184.8')?'green':(foodbankDecContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi6 == null)?'grey-2':(foodbankDecContents.kpi6 >= '0' && foodbankDecContents.kpi6 <= '14.7')?'red':(foodbankDecContents.kpi6 > '14.7' && foodbankDecContents.kpi6 <= '19.6')?'orange':(foodbankDecContents.kpi6 > '19.6' && foodbankDecContents.kpi6 < '24.5')?'yellow-7':(foodbankDecContents.kpi6 >= '24.5' && foodbankDecContents.kpi6 < '29.4')?'green':(foodbankDecContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip>Activities (#)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 5
                                <q-tooltip># Households Receiving Deliveries</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 6
                                <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankJanContents.kpi1 == null)?'grey-2':(foodbankJanContents.kpi1 >= '0' && foodbankJanContents.kpi1 <= '238.8')?'red':(foodbankJanContents.kpi1 > '238.8' && foodbankJanContents.kpi1 <= '318.4')?'orange':(foodbankJanContents.kpi1 > '318.4' && foodbankJanContents.kpi1 < '398')?'yellow-7':(foodbankJanContents.kpi1 >= '398' && foodbankJanContents.kpi1 < '477.6')?'green':(foodbankJanContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi2 == null)?'grey-2':(foodbankJanContents.kpi2 >= '0' && foodbankJanContents.kpi2 <= '244.2')?'red':(foodbankJanContents.kpi2 > '244.2' && foodbankJanContents.kpi2 <= '325.6')?'orange':(foodbankJanContents.kpi2 > '325.6' && foodbankJanContents.kpi2 < '407')?'yellow-7':(foodbankJanContents.kpi2 >= '407' && foodbankJanContents.kpi2 < '488.4')?'green':(foodbankJanContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi3 == null)?'grey-2':(foodbankJanContents.kpi3 >= '0' && foodbankJanContents.kpi3 <= '524.25')?'red':(foodbankJanContents.kpi3 > '524.25' && foodbankJanContents.kpi3 <= '699')?'orange':(foodbankJanContents.kpi3 > '699' && foodbankJanContents.kpi3 < '873.75')?'yellow-7':(foodbankJanContents.kpi3 >= '873.75' && foodbankJanContents.kpi3 < '1048.5')?'green':(foodbankJanContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi4 == null)?'grey-2':(foodbankJanContents.kpi4 >= '0' && foodbankJanContents.kpi4 <= '12.45')?'red':(foodbankJanContents.kpi4 > '12.45' && foodbankJanContents.kpi4 <= '16.6')?'orange':(foodbankJanContents.kpi4 > '16.6' && foodbankJanContents.kpi4 < '20.75')?'yellow-7':(foodbankJanContents.kpi4 >= '20.75' && foodbankJanContents.kpi4 < '24.9')?'green':(foodbankJanContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi5 == null)?'grey-2':(foodbankJanContents.kpi5 >= '0' && foodbankJanContents.kpi5 <= '92.4')?'red':(foodbankJanContents.kpi5 > '92.4' && foodbankJanContents.kpi5 <= '123.2')?'orange':(foodbankJanContents.kpi5 > '123.2' && foodbankJanContents.kpi5 < '154')?'yellow-7':(foodbankJanContents.kpi5 >= '154' && foodbankJanContents.kpi5 < '184.8')?'green':(foodbankJanContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi6 == null)?'grey-2':(foodbankJanContents.kpi6 >= '0' && foodbankJanContents.kpi6 <= '14.7')?'red':(foodbankJanContents.kpi6 > '14.7' && foodbankJanContents.kpi6 <= '19.6')?'orange':(foodbankJanContents.kpi6 > '19.6' && foodbankJanContents.kpi6 < '24.5')?'yellow-7':(foodbankJanContents.kpi6 >= '24.5' && foodbankJanContents.kpi6 < '29.4')?'green':(foodbankJanContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankFebContents.kpi1 == null)?'grey-2':(foodbankFebContents.kpi1 >= '0' && foodbankFebContents.kpi1 <= '238.8')?'red':(foodbankFebContents.kpi1 > '238.8' && foodbankFebContents.kpi1 <= '318.4')?'orange':(foodbankFebContents.kpi1 > '318.4' && foodbankFebContents.kpi1 < '398')?'yellow-7':(foodbankFebContents.kpi1 >= '398' && foodbankFebContents.kpi1 < '477.6')?'green':(foodbankFebContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi2 == null)?'grey-2':(foodbankFebContents.kpi2 >= '0' && foodbankFebContents.kpi2 <= '244.2')?'red':(foodbankFebContents.kpi2 > '244.2' && foodbankFebContents.kpi2 <= '325.6')?'orange':(foodbankFebContents.kpi2 > '325.6' && foodbankFebContents.kpi2 < '407')?'yellow-7':(foodbankFebContents.kpi2 >= '407' && foodbankFebContents.kpi2 < '488.4')?'green':(foodbankFebContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi3 == null)?'grey-2':(foodbankFebContents.kpi3 >= '0' && foodbankFebContents.kpi3 <= '524.25')?'red':(foodbankFebContents.kpi3 > '524.25' && foodbankFebContents.kpi3 <= '699')?'orange':(foodbankFebContents.kpi3 > '699' && foodbankFebContents.kpi3 < '873.75')?'yellow-7':(foodbankFebContents.kpi3 >= '873.75' && foodbankFebContents.kpi3 < '1048.5')?'green':(foodbankFebContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi4 == null)?'grey-2':(foodbankFebContents.kpi4 >= '0' && foodbankFebContents.kpi4 <= '12.45')?'red':(foodbankFebContents.kpi4 > '12.45' && foodbankFebContents.kpi4 <= '16.6')?'orange':(foodbankFebContents.kpi4 > '16.6' && foodbankFebContents.kpi4 < '20.75')?'yellow-7':(foodbankFebContents.kpi4 >= '20.75' && foodbankFebContents.kpi4 < '24.9')?'green':(foodbankFebContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi5 == null)?'grey-2':(foodbankFebContents.kpi5 >= '0' && foodbankFebContents.kpi5 <= '92.4')?'red':(foodbankFebContents.kpi5 > '92.4' && foodbankFebContents.kpi5 <= '123.2')?'orange':(foodbankFebContents.kpi5 > '123.2' && foodbankFebContents.kpi5 < '154')?'yellow-7':(foodbankFebContents.kpi5 >= '154' && foodbankFebContents.kpi5 < '184.8')?'green':(foodbankFebContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi6 == null)?'grey-2':(foodbankFebContents.kpi6 >= '0' && foodbankFebContents.kpi6 <= '14.7')?'red':(foodbankFebContents.kpi6 > '14.7' && foodbankFebContents.kpi6 <= '19.6')?'orange':(foodbankFebContents.kpi6 > '19.6' && foodbankFebContents.kpi6 < '24.5')?'yellow-7':(foodbankFebContents.kpi6 >= '24.5' && foodbankFebContents.kpi6 < '29.4')?'green':(foodbankFebContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankMarContents.kpi1 == null)?'grey-2':(foodbankMarContents.kpi1 >= '0' && foodbankMarContents.kpi1 <= '238.8')?'red':(foodbankMarContents.kpi1 > '238.8' && foodbankMarContents.kpi1 <= '318.4')?'orange':(foodbankMarContents.kpi1 > '318.4' && foodbankMarContents.kpi1 < '398')?'yellow-7':(foodbankMarContents.kpi1 >= '398' && foodbankMarContents.kpi1 < '477.6')?'green':(foodbankMarContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi2 == null)?'grey-2':(foodbankMarContents.kpi2 >= '0' && foodbankMarContents.kpi2 <= '244.2')?'red':(foodbankMarContents.kpi2 > '244.2' && foodbankMarContents.kpi2 <= '325.6')?'orange':(foodbankMarContents.kpi2 > '325.6' && foodbankMarContents.kpi2 < '407')?'yellow-7':(foodbankMarContents.kpi2 >= '407' && foodbankMarContents.kpi2 < '488.4')?'green':(foodbankMarContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi3 == null)?'grey-2':(foodbankMarContents.kpi3 >= '0' && foodbankMarContents.kpi3 <= '524.25')?'red':(foodbankMarContents.kpi3 > '524.25' && foodbankMarContents.kpi3 <= '699')?'orange':(foodbankMarContents.kpi3 > '699' && foodbankMarContents.kpi3 < '873.75')?'yellow-7':(foodbankMarContents.kpi3 >= '873.75' && foodbankMarContents.kpi3 < '1048.5')?'green':(foodbankMarContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi4 == null)?'grey-2':(foodbankMarContents.kpi4 >= '0' && foodbankMarContents.kpi4 <= '12.45')?'red':(foodbankMarContents.kpi4 > '12.45' && foodbankMarContents.kpi4 <= '16.6')?'orange':(foodbankMarContents.kpi4 > '16.6' && foodbankMarContents.kpi4 < '20.75')?'yellow-7':(foodbankMarContents.kpi4 >= '20.75' && foodbankMarContents.kpi4 < '24.9')?'green':(foodbankMarContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi5 == null)?'grey-2':(foodbankMarContents.kpi5 >= '0' && foodbankMarContents.kpi5 <= '92.4')?'red':(foodbankMarContents.kpi5 > '92.4' && foodbankMarContents.kpi5 <= '123.2')?'orange':(foodbankMarContents.kpi5 > '123.2' && foodbankMarContents.kpi5 < '154')?'yellow-7':(foodbankMarContents.kpi5 >= '154' && foodbankMarContents.kpi5 < '184.8')?'green':(foodbankMarContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi6 == null)?'grey-2':(foodbankMarContents.kpi6 >= '0' && foodbankMarContents.kpi6 <= '14.7')?'red':(foodbankMarContents.kpi6 > '14.7' && foodbankMarContents.kpi6 <= '19.6')?'orange':(foodbankMarContents.kpi6 > '19.6' && foodbankMarContents.kpi6 < '24.5')?'yellow-7':(foodbankMarContents.kpi6 >= '24.5' && foodbankMarContents.kpi6 < '29.4')?'green':(foodbankMarContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankAprContents.kpi1 == null)?'grey-2':(foodbankAprContents.kpi1 >= '0' && foodbankAprContents.kpi1 <= '238.8')?'red':(foodbankAprContents.kpi1 > '238.8' && foodbankAprContents.kpi1 <= '318.4')?'orange':(foodbankAprContents.kpi1 > '318.4' && foodbankAprContents.kpi1 < '398')?'yellow-7':(foodbankAprContents.kpi1 >= '398' && foodbankAprContents.kpi1 < '477.6')?'green':(foodbankAprContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi2 == null)?'grey-2':(foodbankAprContents.kpi2 >= '0' && foodbankAprContents.kpi2 <= '244.2')?'red':(foodbankAprContents.kpi2 > '244.2' && foodbankAprContents.kpi2 <= '325.6')?'orange':(foodbankAprContents.kpi2 > '325.6' && foodbankAprContents.kpi2 < '407')?'yellow-7':(foodbankAprContents.kpi2 >= '407' && foodbankAprContents.kpi2 < '488.4')?'green':(foodbankAprContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi3 == null)?'grey-2':(foodbankAprContents.kpi3 >= '0' && foodbankAprContents.kpi3 <= '524.25')?'red':(foodbankAprContents.kpi3 > '524.25' && foodbankAprContents.kpi3 <= '699')?'orange':(foodbankAprContents.kpi3 > '699' && foodbankAprContents.kpi3 < '873.75')?'yellow-7':(foodbankAprContents.kpi3 >= '873.75' && foodbankAprContents.kpi3 < '1048.5')?'green':(foodbankAprContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi4 == null)?'grey-2':(foodbankAprContents.kpi4 >= '0' && foodbankAprContents.kpi4 <= '12.45')?'red':(foodbankAprContents.kpi4 > '12.45' && foodbankAprContents.kpi4 <= '16.6')?'orange':(foodbankAprContents.kpi4 > '16.6' && foodbankAprContents.kpi4 < '20.75')?'yellow-7':(foodbankAprContents.kpi4 >= '20.75' && foodbankAprContents.kpi4 < '24.9')?'green':(foodbankAprContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi5 == null)?'grey-2':(foodbankAprContents.kpi5 >= '0' && foodbankAprContents.kpi5 <= '92.4')?'red':(foodbankAprContents.kpi5 > '92.4' && foodbankAprContents.kpi5 <= '123.2')?'orange':(foodbankAprContents.kpi5 > '123.2' && foodbankAprContents.kpi5 < '154')?'yellow-7':(foodbankAprContents.kpi5 >= '154' && foodbankAprContents.kpi5 < '184.8')?'green':(foodbankAprContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi6 == null)?'grey-2':(foodbankAprContents.kpi6 >= '0' && foodbankAprContents.kpi6 <= '14.7')?'red':(foodbankAprContents.kpi6 > '14.7' && foodbankAprContents.kpi6 <= '19.6')?'orange':(foodbankAprContents.kpi6 > '19.6' && foodbankAprContents.kpi6 < '24.5')?'yellow-7':(foodbankAprContents.kpi6 >= '24.5' && foodbankAprContents.kpi6 < '29.4')?'green':(foodbankAprContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankMayContents.kpi1 == null)?'grey-2':(foodbankMayContents.kpi1 >= '0' && foodbankMayContents.kpi1 <= '238.8')?'red':(foodbankMayContents.kpi1 > '238.8' && foodbankMayContents.kpi1 <= '318.4')?'orange':(foodbankMayContents.kpi1 > '318.4' && foodbankMayContents.kpi1 < '398')?'yellow-7':(foodbankMayContents.kpi1 >= '398' && foodbankMayContents.kpi1 < '477.6')?'green':(foodbankMayContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi2 == null)?'grey-2':(foodbankMayContents.kpi2 >= '0' && foodbankMayContents.kpi2 <= '244.2')?'red':(foodbankMayContents.kpi2 > '244.2' && foodbankMayContents.kpi2 <= '325.6')?'orange':(foodbankMayContents.kpi2 > '325.6' && foodbankMayContents.kpi2 < '407')?'yellow-7':(foodbankMayContents.kpi2 >= '407' && foodbankMayContents.kpi2 < '488.4')?'green':(foodbankMayContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi3 == null)?'grey-2':(foodbankMayContents.kpi3 >= '0' && foodbankMayContents.kpi3 <= '524.25')?'red':(foodbankMayContents.kpi3 > '524.25' && foodbankMayContents.kpi3 <= '699')?'orange':(foodbankMayContents.kpi3 > '699' && foodbankMayContents.kpi3 < '873.75')?'yellow-7':(foodbankMayContents.kpi3 >= '873.75' && foodbankMayContents.kpi3 < '1048.5')?'green':(foodbankMayContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi4 == null)?'grey-2':(foodbankMayContents.kpi4 >= '0' && foodbankMayContents.kpi4 <= '12.45')?'red':(foodbankMayContents.kpi4 > '12.45' && foodbankMayContents.kpi4 <= '16.6')?'orange':(foodbankMayContents.kpi4 > '16.6' && foodbankMayContents.kpi4 < '20.75')?'yellow-7':(foodbankMayContents.kpi4 >= '20.75' && foodbankMayContents.kpi4 < '24.9')?'green':(foodbankMayContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi5 == null)?'grey-2':(foodbankMayContents.kpi5 >= '0' && foodbankMayContents.kpi5 <= '92.4')?'red':(foodbankMayContents.kpi5 > '92.4' && foodbankMayContents.kpi5 <= '123.2')?'orange':(foodbankMayContents.kpi5 > '123.2' && foodbankMayContents.kpi5 < '154')?'yellow-7':(foodbankMayContents.kpi5 >= '154' && foodbankMayContents.kpi5 < '184.8')?'green':(foodbankMayContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi6 == null)?'grey-2':(foodbankMayContents.kpi6 >= '0' && foodbankMayContents.kpi6 <= '14.7')?'red':(foodbankMayContents.kpi6 > '14.7' && foodbankMayContents.kpi6 <= '19.6')?'orange':(foodbankMayContents.kpi6 > '19.6' && foodbankMayContents.kpi6 < '24.5')?'yellow-7':(foodbankMayContents.kpi6 >= '24.5' && foodbankMayContents.kpi6 < '29.4')?'green':(foodbankMayContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankJunContents.kpi1 == null)?'grey-2':(foodbankJunContents.kpi1 >= '0' && foodbankJunContents.kpi1 <= '238.8')?'red':(foodbankJunContents.kpi1 > '238.8' && foodbankJunContents.kpi1 <= '318.4')?'orange':(foodbankJunContents.kpi1 > '318.4' && foodbankJunContents.kpi1 < '398')?'yellow-7':(foodbankJunContents.kpi1 >= '398' && foodbankJunContents.kpi1 < '477.6')?'green':(foodbankJunContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi2 == null)?'grey-2':(foodbankJunContents.kpi2 >= '0' && foodbankJunContents.kpi2 <= '244.2')?'red':(foodbankJunContents.kpi2 > '244.2' && foodbankJunContents.kpi2 <= '325.6')?'orange':(foodbankJunContents.kpi2 > '325.6' && foodbankJunContents.kpi2 < '407')?'yellow-7':(foodbankJunContents.kpi2 >= '407' && foodbankJunContents.kpi2 < '488.4')?'green':(foodbankJunContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi3 == null)?'grey-2':(foodbankJunContents.kpi3 >= '0' && foodbankJunContents.kpi3 <= '524.25')?'red':(foodbankJunContents.kpi3 > '524.25' && foodbankJunContents.kpi3 <= '699')?'orange':(foodbankJunContents.kpi3 > '699' && foodbankJunContents.kpi3 < '873.75')?'yellow-7':(foodbankJunContents.kpi3 >= '873.75' && foodbankJunContents.kpi3 < '1048.5')?'green':(foodbankJunContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi4 == null)?'grey-2':(foodbankJunContents.kpi4 >= '0' && foodbankJunContents.kpi4 <= '12.45')?'red':(foodbankJunContents.kpi4 > '12.45' && foodbankJunContents.kpi4 <= '16.6')?'orange':(foodbankJunContents.kpi4 > '16.6' && foodbankJunContents.kpi4 < '20.75')?'yellow-7':(foodbankJunContents.kpi4 >= '20.75' && foodbankJunContents.kpi4 < '24.9')?'green':(foodbankJunContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi5 == null)?'grey-2':(foodbankJunContents.kpi5 >= '0' && foodbankJunContents.kpi5 <= '92.4')?'red':(foodbankJunContents.kpi5 > '92.4' && foodbankJunContents.kpi5 <= '123.2')?'orange':(foodbankJunContents.kpi5 > '123.2' && foodbankJunContents.kpi5 < '154')?'yellow-7':(foodbankJunContents.kpi5 >= '154' && foodbankJunContents.kpi5 < '184.8')?'green':(foodbankJunContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi6 == null)?'grey-2':(foodbankJunContents.kpi6 >= '0' && foodbankJunContents.kpi6 <= '14.7')?'red':(foodbankJunContents.kpi6 > '14.7' && foodbankJunContents.kpi6 <= '19.6')?'orange':(foodbankJunContents.kpi6 > '19.6' && foodbankJunContents.kpi6 < '24.5')?'yellow-7':(foodbankJunContents.kpi6 >= '24.5' && foodbankJunContents.kpi6 < '29.4')?'green':(foodbankJunContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankJulContents.kpi1 == null)?'grey-2':(foodbankJulContents.kpi1 >= '0' && foodbankJulContents.kpi1 <= '238.8')?'red':(foodbankJulContents.kpi1 > '238.8' && foodbankJulContents.kpi1 <= '318.4')?'orange':(foodbankJulContents.kpi1 > '318.4' && foodbankJulContents.kpi1 < '398')?'yellow-7':(foodbankJulContents.kpi1 >= '398' && foodbankJulContents.kpi1 < '477.6')?'green':(foodbankJulContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi2 == null)?'grey-2':(foodbankJulContents.kpi2 >= '0' && foodbankJulContents.kpi2 <= '244.2')?'red':(foodbankJulContents.kpi2 > '244.2' && foodbankJulContents.kpi2 <= '325.6')?'orange':(foodbankJulContents.kpi2 > '325.6' && foodbankJulContents.kpi2 < '407')?'yellow-7':(foodbankJulContents.kpi2 >= '407' && foodbankJulContents.kpi2 < '488.4')?'green':(foodbankJulContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi3 == null)?'grey-2':(foodbankJulContents.kpi3 >= '0' && foodbankJulContents.kpi3 <= '524.25')?'red':(foodbankJulContents.kpi3 > '524.25' && foodbankJulContents.kpi3 <= '699')?'orange':(foodbankJulContents.kpi3 > '699' && foodbankJulContents.kpi3 < '873.75')?'yellow-7':(foodbankJulContents.kpi3 >= '873.75' && foodbankJulContents.kpi3 < '1048.5')?'green':(foodbankJulContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi4 == null)?'grey-2':(foodbankJulContents.kpi4 >= '0' && foodbankJulContents.kpi4 <= '12.45')?'red':(foodbankJulContents.kpi4 > '12.45' && foodbankJulContents.kpi4 <= '16.6')?'orange':(foodbankJulContents.kpi4 > '16.6' && foodbankJulContents.kpi4 < '20.75')?'yellow-7':(foodbankJulContents.kpi4 >= '20.75' && foodbankJulContents.kpi4 < '24.9')?'green':(foodbankJulContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi5 == null)?'grey-2':(foodbankJulContents.kpi5 >= '0' && foodbankJulContents.kpi5 <= '92.4')?'red':(foodbankJulContents.kpi5 > '92.4' && foodbankJulContents.kpi5 <= '123.2')?'orange':(foodbankJulContents.kpi5 > '123.2' && foodbankJulContents.kpi5 < '154')?'yellow-7':(foodbankJulContents.kpi5 >= '154' && foodbankJulContents.kpi5 < '184.8')?'green':(foodbankJulContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi6 == null)?'grey-2':(foodbankJulContents.kpi6 >= '0' && foodbankJulContents.kpi6 <= '14.7')?'red':(foodbankJulContents.kpi6 > '14.7' && foodbankJulContents.kpi6 <= '19.6')?'orange':(foodbankJulContents.kpi6 > '19.6' && foodbankJulContents.kpi6 < '24.5')?'yellow-7':(foodbankJulContents.kpi6 >= '24.5' && foodbankJulContents.kpi6 < '29.4')?'green':(foodbankJulContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankAugContents.kpi1 == null)?'grey-2':(foodbankAugContents.kpi1 >= '0' && foodbankAugContents.kpi1 <= '238.8')?'red':(foodbankAugContents.kpi1 > '238.8' && foodbankAugContents.kpi1 <= '318.4')?'orange':(foodbankAugContents.kpi1 > '318.4' && foodbankAugContents.kpi1 < '398')?'yellow-7':(foodbankAugContents.kpi1 >= '398' && foodbankAugContents.kpi1 < '477.6')?'green':(foodbankAugContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi2 == null)?'grey-2':(foodbankAugContents.kpi2 >= '0' && foodbankAugContents.kpi2 <= '244.2')?'red':(foodbankAugContents.kpi2 > '244.2' && foodbankAugContents.kpi2 <= '325.6')?'orange':(foodbankAugContents.kpi2 > '325.6' && foodbankAugContents.kpi2 < '407')?'yellow-7':(foodbankAugContents.kpi2 >= '407' && foodbankAugContents.kpi2 < '488.4')?'green':(foodbankAugContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi3 == null)?'grey-2':(foodbankAugContents.kpi3 >= '0' && foodbankAugContents.kpi3 <= '524.25')?'red':(foodbankAugContents.kpi3 > '524.25' && foodbankAugContents.kpi3 <= '699')?'orange':(foodbankAugContents.kpi3 > '699' && foodbankAugContents.kpi3 < '873.75')?'yellow-7':(foodbankAugContents.kpi3 >= '873.75' && foodbankAugContents.kpi3 < '1048.5')?'green':(foodbankAugContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi4 == null)?'grey-2':(foodbankAugContents.kpi4 >= '0' && foodbankAugContents.kpi4 <= '12.45')?'red':(foodbankAugContents.kpi4 > '12.45' && foodbankAugContents.kpi4 <= '16.6')?'orange':(foodbankAugContents.kpi4 > '16.6' && foodbankAugContents.kpi4 < '20.75')?'yellow-7':(foodbankAugContents.kpi4 >= '20.75' && foodbankAugContents.kpi4 < '24.9')?'green':(foodbankAugContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi5 == null)?'grey-2':(foodbankAugContents.kpi5 >= '0' && foodbankAugContents.kpi5 <= '92.4')?'red':(foodbankAugContents.kpi5 > '92.4' && foodbankAugContents.kpi5 <= '123.2')?'orange':(foodbankAugContents.kpi5 > '123.2' && foodbankAugContents.kpi5 < '154')?'yellow-7':(foodbankAugContents.kpi5 >= '154' && foodbankAugContents.kpi5 < '184.8')?'green':(foodbankAugContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi6 == null)?'grey-2':(foodbankAugContents.kpi6 >= '0' && foodbankAugContents.kpi6 <= '14.7')?'red':(foodbankAugContents.kpi6 > '14.7' && foodbankAugContents.kpi6 <= '19.6')?'orange':(foodbankAugContents.kpi6 > '19.6' && foodbankAugContents.kpi6 < '24.5')?'yellow-7':(foodbankAugContents.kpi6 >= '24.5' && foodbankAugContents.kpi6 < '29.4')?'green':(foodbankAugContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankSepContents.kpi1 == null)?'grey-2':(foodbankSepContents.kpi1 >= '0' && foodbankSepContents.kpi1 <= '238.8')?'red':(foodbankSepContents.kpi1 > '238.8' && foodbankSepContents.kpi1 <= '318.4')?'orange':(foodbankSepContents.kpi1 > '318.4' && foodbankSepContents.kpi1 < '398')?'yellow-7':(foodbankSepContents.kpi1 >= '398' && foodbankSepContents.kpi1 < '477.6')?'green':(foodbankSepContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi2 == null)?'grey-2':(foodbankSepContents.kpi2 >= '0' && foodbankSepContents.kpi2 <= '244.2')?'red':(foodbankSepContents.kpi2 > '244.2' && foodbankSepContents.kpi2 <= '325.6')?'orange':(foodbankSepContents.kpi2 > '325.6' && foodbankSepContents.kpi2 < '407')?'yellow-7':(foodbankSepContents.kpi2 >= '407' && foodbankSepContents.kpi2 < '488.4')?'green':(foodbankSepContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi3 == null)?'grey-2':(foodbankSepContents.kpi3 >= '0' && foodbankSepContents.kpi3 <= '524.25')?'red':(foodbankSepContents.kpi3 > '524.25' && foodbankSepContents.kpi3 <= '699')?'orange':(foodbankSepContents.kpi3 > '699' && foodbankSepContents.kpi3 < '873.75')?'yellow-7':(foodbankSepContents.kpi3 >= '873.75' && foodbankSepContents.kpi3 < '1048.5')?'green':(foodbankSepContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi4 == null)?'grey-2':(foodbankSepContents.kpi4 >= '0' && foodbankSepContents.kpi4 <= '12.45')?'red':(foodbankSepContents.kpi4 > '12.45' && foodbankSepContents.kpi4 <= '16.6')?'orange':(foodbankSepContents.kpi4 > '16.6' && foodbankSepContents.kpi4 < '20.75')?'yellow-7':(foodbankSepContents.kpi4 >= '20.75' && foodbankSepContents.kpi4 < '24.9')?'green':(foodbankSepContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi5 == null)?'grey-2':(foodbankSepContents.kpi5 >= '0' && foodbankSepContents.kpi5 <= '92.4')?'red':(foodbankSepContents.kpi5 > '92.4' && foodbankSepContents.kpi5 <= '123.2')?'orange':(foodbankSepContents.kpi5 > '123.2' && foodbankSepContents.kpi5 < '154')?'yellow-7':(foodbankSepContents.kpi5 >= '154' && foodbankSepContents.kpi5 < '184.8')?'green':(foodbankSepContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi6 == null)?'grey-2':(foodbankSepContents.kpi6 >= '0' && foodbankSepContents.kpi6 <= '14.7')?'red':(foodbankSepContents.kpi6 > '14.7' && foodbankSepContents.kpi6 <= '19.6')?'orange':(foodbankSepContents.kpi6 > '19.6' && foodbankSepContents.kpi6 < '24.5')?'yellow-7':(foodbankSepContents.kpi6 >= '24.5' && foodbankSepContents.kpi6 < '29.4')?'green':(foodbankSepContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankOctContents.kpi1 == null)?'grey-2':(foodbankOctContents.kpi1 >= '0' && foodbankOctContents.kpi1 <= '238.8')?'red':(foodbankOctContents.kpi1 > '238.8' && foodbankOctContents.kpi1 <= '318.4')?'orange':(foodbankOctContents.kpi1 > '318.4' && foodbankOctContents.kpi1 < '398')?'yellow-7':(foodbankOctContents.kpi1 >= '398' && foodbankOctContents.kpi1 < '477.6')?'green':(foodbankOctContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi2 == null)?'grey-2':(foodbankOctContents.kpi2 >= '0' && foodbankOctContents.kpi2 <= '244.2')?'red':(foodbankOctContents.kpi2 > '244.2' && foodbankOctContents.kpi2 <= '325.6')?'orange':(foodbankOctContents.kpi2 > '325.6' && foodbankOctContents.kpi2 < '407')?'yellow-7':(foodbankOctContents.kpi2 >= '407' && foodbankOctContents.kpi2 < '488.4')?'green':(foodbankOctContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi3 == null)?'grey-2':(foodbankOctContents.kpi3 >= '0' && foodbankOctContents.kpi3 <= '524.25')?'red':(foodbankOctContents.kpi3 > '524.25' && foodbankOctContents.kpi3 <= '699')?'orange':(foodbankOctContents.kpi3 > '699' && foodbankOctContents.kpi3 < '873.75')?'yellow-7':(foodbankOctContents.kpi3 >= '873.75' && foodbankOctContents.kpi3 < '1048.5')?'green':(foodbankOctContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi4 == null)?'grey-2':(foodbankOctContents.kpi4 >= '0' && foodbankOctContents.kpi4 <= '12.45')?'red':(foodbankOctContents.kpi4 > '12.45' && foodbankOctContents.kpi4 <= '16.6')?'orange':(foodbankOctContents.kpi4 > '16.6' && foodbankOctContents.kpi4 < '20.75')?'yellow-7':(foodbankOctContents.kpi4 >= '20.75' && foodbankOctContents.kpi4 < '24.9')?'green':(foodbankOctContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi5 == null)?'grey-2':(foodbankOctContents.kpi5 >= '0' && foodbankOctContents.kpi5 <= '92.4')?'red':(foodbankOctContents.kpi5 > '92.4' && foodbankOctContents.kpi5 <= '123.2')?'orange':(foodbankOctContents.kpi5 > '123.2' && foodbankOctContents.kpi5 < '154')?'yellow-7':(foodbankOctContents.kpi5 >= '154' && foodbankOctContents.kpi5 < '184.8')?'green':(foodbankOctContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi6 == null)?'grey-2':(foodbankOctContents.kpi6 >= '0' && foodbankOctContents.kpi6 <= '14.7')?'red':(foodbankOctContents.kpi6 > '14.7' && foodbankOctContents.kpi6 <= '19.6')?'orange':(foodbankOctContents.kpi6 > '19.6' && foodbankOctContents.kpi6 < '24.5')?'yellow-7':(foodbankOctContents.kpi6 >= '24.5' && foodbankOctContents.kpi6 < '29.4')?'green':(foodbankOctContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankNovContents.kpi1 == null)?'grey-2':(foodbankNovContents.kpi1 >= '0' && foodbankNovContents.kpi1 <= '238.8')?'red':(foodbankNovContents.kpi1 > '238.8' && foodbankNovContents.kpi1 <= '318.4')?'orange':(foodbankNovContents.kpi1 > '318.4' && foodbankNovContents.kpi1 < '398')?'yellow-7':(foodbankNovContents.kpi1 >= '398' && foodbankNovContents.kpi1 < '477.6')?'green':(foodbankNovContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi2 == null)?'grey-2':(foodbankNovContents.kpi2 >= '0' && foodbankNovContents.kpi2 <= '244.2')?'red':(foodbankNovContents.kpi2 > '244.2' && foodbankNovContents.kpi2 <= '325.6')?'orange':(foodbankNovContents.kpi2 > '325.6' && foodbankNovContents.kpi2 < '407')?'yellow-7':(foodbankNovContents.kpi2 >= '407' && foodbankNovContents.kpi2 < '488.4')?'green':(foodbankNovContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi3 == null)?'grey-2':(foodbankNovContents.kpi3 >= '0' && foodbankNovContents.kpi3 <= '524.25')?'red':(foodbankNovContents.kpi3 > '524.25' && foodbankNovContents.kpi3 <= '699')?'orange':(foodbankNovContents.kpi3 > '699' && foodbankNovContents.kpi3 < '873.75')?'yellow-7':(foodbankNovContents.kpi3 >= '873.75' && foodbankNovContents.kpi3 < '1048.5')?'green':(foodbankNovContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi4 == null)?'grey-2':(foodbankNovContents.kpi4 >= '0' && foodbankNovContents.kpi4 <= '12.45')?'red':(foodbankNovContents.kpi4 > '12.45' && foodbankNovContents.kpi4 <= '16.6')?'orange':(foodbankNovContents.kpi4 > '16.6' && foodbankNovContents.kpi4 < '20.75')?'yellow-7':(foodbankNovContents.kpi4 >= '20.75' && foodbankNovContents.kpi4 < '24.9')?'green':(foodbankNovContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi5 == null)?'grey-2':(foodbankNovContents.kpi5 >= '0' && foodbankNovContents.kpi5 <= '92.4')?'red':(foodbankNovContents.kpi5 > '92.4' && foodbankNovContents.kpi5 <= '123.2')?'orange':(foodbankNovContents.kpi5 > '123.2' && foodbankNovContents.kpi5 < '154')?'yellow-7':(foodbankNovContents.kpi5 >= '154' && foodbankNovContents.kpi5 < '184.8')?'green':(foodbankNovContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi6 == null)?'grey-2':(foodbankNovContents.kpi6 >= '0' && foodbankNovContents.kpi6 <= '14.7')?'red':(foodbankNovContents.kpi6 > '14.7' && foodbankNovContents.kpi6 <= '19.6')?'orange':(foodbankNovContents.kpi6 > '19.6' && foodbankNovContents.kpi6 < '24.5')?'yellow-7':(foodbankNovContents.kpi6 >= '24.5' && foodbankNovContents.kpi6 < '29.4')?'green':(foodbankNovContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankDecContents.kpi1 == null)?'grey-2':(foodbankDecContents.kpi1 >= '0' && foodbankDecContents.kpi1 <= '238.8')?'red':(foodbankDecContents.kpi1 > '238.8' && foodbankDecContents.kpi1 <= '318.4')?'orange':(foodbankDecContents.kpi1 > '318.4' && foodbankDecContents.kpi1 < '398')?'yellow-7':(foodbankDecContents.kpi1 >= '398' && foodbankDecContents.kpi1 < '477.6')?'green':(foodbankDecContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi2 == null)?'grey-2':(foodbankDecContents.kpi2 >= '0' && foodbankDecContents.kpi2 <= '244.2')?'red':(foodbankDecContents.kpi2 > '244.2' && foodbankDecContents.kpi2 <= '325.6')?'orange':(foodbankDecContents.kpi2 > '325.6' && foodbankDecContents.kpi2 < '407')?'yellow-7':(foodbankDecContents.kpi2 >= '407' && foodbankDecContents.kpi2 < '488.4')?'green':(foodbankDecContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi3 == null)?'grey-2':(foodbankDecContents.kpi3 >= '0' && foodbankDecContents.kpi3 <= '524.25')?'red':(foodbankDecContents.kpi3 > '524.25' && foodbankDecContents.kpi3 <= '699')?'orange':(foodbankDecContents.kpi3 > '699' && foodbankDecContents.kpi3 < '873.75')?'yellow-7':(foodbankDecContents.kpi3 >= '873.75' && foodbankDecContents.kpi3 < '1048.5')?'green':(foodbankDecContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi4 == null)?'grey-2':(foodbankDecContents.kpi4 >= '0' && foodbankDecContents.kpi4 <= '12.45')?'red':(foodbankDecContents.kpi4 > '12.45' && foodbankDecContents.kpi4 <= '16.6')?'orange':(foodbankDecContents.kpi4 > '16.6' && foodbankDecContents.kpi4 < '20.75')?'yellow-7':(foodbankDecContents.kpi4 >= '20.75' && foodbankDecContents.kpi4 < '24.9')?'green':(foodbankDecContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi5 == null)?'grey-2':(foodbankDecContents.kpi5 >= '0' && foodbankDecContents.kpi5 <= '92.4')?'red':(foodbankDecContents.kpi5 > '92.4' && foodbankDecContents.kpi5 <= '123.2')?'orange':(foodbankDecContents.kpi5 > '123.2' && foodbankDecContents.kpi5 < '154')?'yellow-7':(foodbankDecContents.kpi5 >= '154' && foodbankDecContents.kpi5 < '184.8')?'green':(foodbankDecContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi6 == null)?'grey-2':(foodbankDecContents.kpi6 >= '0' && foodbankDecContents.kpi6 <= '14.7')?'red':(foodbankDecContents.kpi6 > '14.7' && foodbankDecContents.kpi6 <= '19.6')?'orange':(foodbankDecContents.kpi6 > '19.6' && foodbankDecContents.kpi6 < '24.5')?'yellow-7':(foodbankDecContents.kpi6 >= '24.5' && foodbankDecContents.kpi6 < '29.4')?'green':(foodbankDecContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip>Activities (#)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 5
                                <q-tooltip># Households Receiving Deliveries</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 6
                                <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankJanContents.kpi1 == null)?'grey-2':(foodbankJanContents.kpi1 >= '0' && foodbankJanContents.kpi1 <= '238.8')?'red':(foodbankJanContents.kpi1 > '238.8' && foodbankJanContents.kpi1 <= '318.4')?'orange':(foodbankJanContents.kpi1 > '318.4' && foodbankJanContents.kpi1 < '398')?'yellow-7':(foodbankJanContents.kpi1 >= '398' && foodbankJanContents.kpi1 < '477.6')?'green':(foodbankJanContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi2 == null)?'grey-2':(foodbankJanContents.kpi2 >= '0' && foodbankJanContents.kpi2 <= '244.2')?'red':(foodbankJanContents.kpi2 > '244.2' && foodbankJanContents.kpi2 <= '325.6')?'orange':(foodbankJanContents.kpi2 > '325.6' && foodbankJanContents.kpi2 < '407')?'yellow-7':(foodbankJanContents.kpi2 >= '407' && foodbankJanContents.kpi2 < '488.4')?'green':(foodbankJanContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi3 == null)?'grey-2':(foodbankJanContents.kpi3 >= '0' && foodbankJanContents.kpi3 <= '524.25')?'red':(foodbankJanContents.kpi3 > '524.25' && foodbankJanContents.kpi3 <= '699')?'orange':(foodbankJanContents.kpi3 > '699' && foodbankJanContents.kpi3 < '873.75')?'yellow-7':(foodbankJanContents.kpi3 >= '873.75' && foodbankJanContents.kpi3 < '1048.5')?'green':(foodbankJanContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi4 == null)?'grey-2':(foodbankJanContents.kpi4 >= '0' && foodbankJanContents.kpi4 <= '12.45')?'red':(foodbankJanContents.kpi4 > '12.45' && foodbankJanContents.kpi4 <= '16.6')?'orange':(foodbankJanContents.kpi4 > '16.6' && foodbankJanContents.kpi4 < '20.75')?'yellow-7':(foodbankJanContents.kpi4 >= '20.75' && foodbankJanContents.kpi4 < '24.9')?'green':(foodbankJanContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi5 == null)?'grey-2':(foodbankJanContents.kpi5 >= '0' && foodbankJanContents.kpi5 <= '92.4')?'red':(foodbankJanContents.kpi5 > '92.4' && foodbankJanContents.kpi5 <= '123.2')?'orange':(foodbankJanContents.kpi5 > '123.2' && foodbankJanContents.kpi5 < '154')?'yellow-7':(foodbankJanContents.kpi5 >= '154' && foodbankJanContents.kpi5 < '184.8')?'green':(foodbankJanContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi6 == null)?'grey-2':(foodbankJanContents.kpi6 >= '0' && foodbankJanContents.kpi6 <= '14.7')?'red':(foodbankJanContents.kpi6 > '14.7' && foodbankJanContents.kpi6 <= '19.6')?'orange':(foodbankJanContents.kpi6 > '19.6' && foodbankJanContents.kpi6 < '24.5')?'yellow-7':(foodbankJanContents.kpi6 >= '24.5' && foodbankJanContents.kpi6 < '29.4')?'green':(foodbankJanContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankFebContents.kpi1 == null)?'grey-2':(foodbankFebContents.kpi1 >= '0' && foodbankFebContents.kpi1 <= '238.8')?'red':(foodbankFebContents.kpi1 > '238.8' && foodbankFebContents.kpi1 <= '318.4')?'orange':(foodbankFebContents.kpi1 > '318.4' && foodbankFebContents.kpi1 < '398')?'yellow-7':(foodbankFebContents.kpi1 >= '398' && foodbankFebContents.kpi1 < '477.6')?'green':(foodbankFebContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi2 == null)?'grey-2':(foodbankFebContents.kpi2 >= '0' && foodbankFebContents.kpi2 <= '244.2')?'red':(foodbankFebContents.kpi2 > '244.2' && foodbankFebContents.kpi2 <= '325.6')?'orange':(foodbankFebContents.kpi2 > '325.6' && foodbankFebContents.kpi2 < '407')?'yellow-7':(foodbankFebContents.kpi2 >= '407' && foodbankFebContents.kpi2 < '488.4')?'green':(foodbankFebContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi3 == null)?'grey-2':(foodbankFebContents.kpi3 >= '0' && foodbankFebContents.kpi3 <= '524.25')?'red':(foodbankFebContents.kpi3 > '524.25' && foodbankFebContents.kpi3 <= '699')?'orange':(foodbankFebContents.kpi3 > '699' && foodbankFebContents.kpi3 < '873.75')?'yellow-7':(foodbankFebContents.kpi3 >= '873.75' && foodbankFebContents.kpi3 < '1048.5')?'green':(foodbankFebContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi4 == null)?'grey-2':(foodbankFebContents.kpi4 >= '0' && foodbankFebContents.kpi4 <= '12.45')?'red':(foodbankFebContents.kpi4 > '12.45' && foodbankFebContents.kpi4 <= '16.6')?'orange':(foodbankFebContents.kpi4 > '16.6' && foodbankFebContents.kpi4 < '20.75')?'yellow-7':(foodbankFebContents.kpi4 >= '20.75' && foodbankFebContents.kpi4 < '24.9')?'green':(foodbankFebContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi5 == null)?'grey-2':(foodbankFebContents.kpi5 >= '0' && foodbankFebContents.kpi5 <= '92.4')?'red':(foodbankFebContents.kpi5 > '92.4' && foodbankFebContents.kpi5 <= '123.2')?'orange':(foodbankFebContents.kpi5 > '123.2' && foodbankFebContents.kpi5 < '154')?'yellow-7':(foodbankFebContents.kpi5 >= '154' && foodbankFebContents.kpi5 < '184.8')?'green':(foodbankFebContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi6 == null)?'grey-2':(foodbankFebContents.kpi6 >= '0' && foodbankFebContents.kpi6 <= '14.7')?'red':(foodbankFebContents.kpi6 > '14.7' && foodbankFebContents.kpi6 <= '19.6')?'orange':(foodbankFebContents.kpi6 > '19.6' && foodbankFebContents.kpi6 < '24.5')?'yellow-7':(foodbankFebContents.kpi6 >= '24.5' && foodbankFebContents.kpi6 < '29.4')?'green':(foodbankFebContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankMarContents.kpi1 == null)?'grey-2':(foodbankMarContents.kpi1 >= '0' && foodbankMarContents.kpi1 <= '238.8')?'red':(foodbankMarContents.kpi1 > '238.8' && foodbankMarContents.kpi1 <= '318.4')?'orange':(foodbankMarContents.kpi1 > '318.4' && foodbankMarContents.kpi1 < '398')?'yellow-7':(foodbankMarContents.kpi1 >= '398' && foodbankMarContents.kpi1 < '477.6')?'green':(foodbankMarContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi2 == null)?'grey-2':(foodbankMarContents.kpi2 >= '0' && foodbankMarContents.kpi2 <= '244.2')?'red':(foodbankMarContents.kpi2 > '244.2' && foodbankMarContents.kpi2 <= '325.6')?'orange':(foodbankMarContents.kpi2 > '325.6' && foodbankMarContents.kpi2 < '407')?'yellow-7':(foodbankMarContents.kpi2 >= '407' && foodbankMarContents.kpi2 < '488.4')?'green':(foodbankMarContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi3 == null)?'grey-2':(foodbankMarContents.kpi3 >= '0' && foodbankMarContents.kpi3 <= '524.25')?'red':(foodbankMarContents.kpi3 > '524.25' && foodbankMarContents.kpi3 <= '699')?'orange':(foodbankMarContents.kpi3 > '699' && foodbankMarContents.kpi3 < '873.75')?'yellow-7':(foodbankMarContents.kpi3 >= '873.75' && foodbankMarContents.kpi3 < '1048.5')?'green':(foodbankMarContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi4 == null)?'grey-2':(foodbankMarContents.kpi4 >= '0' && foodbankMarContents.kpi4 <= '12.45')?'red':(foodbankMarContents.kpi4 > '12.45' && foodbankMarContents.kpi4 <= '16.6')?'orange':(foodbankMarContents.kpi4 > '16.6' && foodbankMarContents.kpi4 < '20.75')?'yellow-7':(foodbankMarContents.kpi4 >= '20.75' && foodbankMarContents.kpi4 < '24.9')?'green':(foodbankMarContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi5 == null)?'grey-2':(foodbankMarContents.kpi5 >= '0' && foodbankMarContents.kpi5 <= '92.4')?'red':(foodbankMarContents.kpi5 > '92.4' && foodbankMarContents.kpi5 <= '123.2')?'orange':(foodbankMarContents.kpi5 > '123.2' && foodbankMarContents.kpi5 < '154')?'yellow-7':(foodbankMarContents.kpi5 >= '154' && foodbankMarContents.kpi5 < '184.8')?'green':(foodbankMarContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi6 == null)?'grey-2':(foodbankMarContents.kpi6 >= '0' && foodbankMarContents.kpi6 <= '14.7')?'red':(foodbankMarContents.kpi6 > '14.7' && foodbankMarContents.kpi6 <= '19.6')?'orange':(foodbankMarContents.kpi6 > '19.6' && foodbankMarContents.kpi6 < '24.5')?'yellow-7':(foodbankMarContents.kpi6 >= '24.5' && foodbankMarContents.kpi6 < '29.4')?'green':(foodbankMarContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankAprContents.kpi1 == null)?'grey-2':(foodbankAprContents.kpi1 >= '0' && foodbankAprContents.kpi1 <= '238.8')?'red':(foodbankAprContents.kpi1 > '238.8' && foodbankAprContents.kpi1 <= '318.4')?'orange':(foodbankAprContents.kpi1 > '318.4' && foodbankAprContents.kpi1 < '398')?'yellow-7':(foodbankAprContents.kpi1 >= '398' && foodbankAprContents.kpi1 < '477.6')?'green':(foodbankAprContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi2 == null)?'grey-2':(foodbankAprContents.kpi2 >= '0' && foodbankAprContents.kpi2 <= '244.2')?'red':(foodbankAprContents.kpi2 > '244.2' && foodbankAprContents.kpi2 <= '325.6')?'orange':(foodbankAprContents.kpi2 > '325.6' && foodbankAprContents.kpi2 < '407')?'yellow-7':(foodbankAprContents.kpi2 >= '407' && foodbankAprContents.kpi2 < '488.4')?'green':(foodbankAprContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi3 == null)?'grey-2':(foodbankAprContents.kpi3 >= '0' && foodbankAprContents.kpi3 <= '524.25')?'red':(foodbankAprContents.kpi3 > '524.25' && foodbankAprContents.kpi3 <= '699')?'orange':(foodbankAprContents.kpi3 > '699' && foodbankAprContents.kpi3 < '873.75')?'yellow-7':(foodbankAprContents.kpi3 >= '873.75' && foodbankAprContents.kpi3 < '1048.5')?'green':(foodbankAprContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi4 == null)?'grey-2':(foodbankAprContents.kpi4 >= '0' && foodbankAprContents.kpi4 <= '12.45')?'red':(foodbankAprContents.kpi4 > '12.45' && foodbankAprContents.kpi4 <= '16.6')?'orange':(foodbankAprContents.kpi4 > '16.6' && foodbankAprContents.kpi4 < '20.75')?'yellow-7':(foodbankAprContents.kpi4 >= '20.75' && foodbankAprContents.kpi4 < '24.9')?'green':(foodbankAprContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi5 == null)?'grey-2':(foodbankAprContents.kpi5 >= '0' && foodbankAprContents.kpi5 <= '92.4')?'red':(foodbankAprContents.kpi5 > '92.4' && foodbankAprContents.kpi5 <= '123.2')?'orange':(foodbankAprContents.kpi5 > '123.2' && foodbankAprContents.kpi5 < '154')?'yellow-7':(foodbankAprContents.kpi5 >= '154' && foodbankAprContents.kpi5 < '184.8')?'green':(foodbankAprContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi6 == null)?'grey-2':(foodbankAprContents.kpi6 >= '0' && foodbankAprContents.kpi6 <= '14.7')?'red':(foodbankAprContents.kpi6 > '14.7' && foodbankAprContents.kpi6 <= '19.6')?'orange':(foodbankAprContents.kpi6 > '19.6' && foodbankAprContents.kpi6 < '24.5')?'yellow-7':(foodbankAprContents.kpi6 >= '24.5' && foodbankAprContents.kpi6 < '29.4')?'green':(foodbankAprContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankMayContents.kpi1 == null)?'grey-2':(foodbankMayContents.kpi1 >= '0' && foodbankMayContents.kpi1 <= '238.8')?'red':(foodbankMayContents.kpi1 > '238.8' && foodbankMayContents.kpi1 <= '318.4')?'orange':(foodbankMayContents.kpi1 > '318.4' && foodbankMayContents.kpi1 < '398')?'yellow-7':(foodbankMayContents.kpi1 >= '398' && foodbankMayContents.kpi1 < '477.6')?'green':(foodbankMayContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi2 == null)?'grey-2':(foodbankMayContents.kpi2 >= '0' && foodbankMayContents.kpi2 <= '244.2')?'red':(foodbankMayContents.kpi2 > '244.2' && foodbankMayContents.kpi2 <= '325.6')?'orange':(foodbankMayContents.kpi2 > '325.6' && foodbankMayContents.kpi2 < '407')?'yellow-7':(foodbankMayContents.kpi2 >= '407' && foodbankMayContents.kpi2 < '488.4')?'green':(foodbankMayContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi3 == null)?'grey-2':(foodbankMayContents.kpi3 >= '0' && foodbankMayContents.kpi3 <= '524.25')?'red':(foodbankMayContents.kpi3 > '524.25' && foodbankMayContents.kpi3 <= '699')?'orange':(foodbankMayContents.kpi3 > '699' && foodbankMayContents.kpi3 < '873.75')?'yellow-7':(foodbankMayContents.kpi3 >= '873.75' && foodbankMayContents.kpi3 < '1048.5')?'green':(foodbankMayContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi4 == null)?'grey-2':(foodbankMayContents.kpi4 >= '0' && foodbankMayContents.kpi4 <= '12.45')?'red':(foodbankMayContents.kpi4 > '12.45' && foodbankMayContents.kpi4 <= '16.6')?'orange':(foodbankMayContents.kpi4 > '16.6' && foodbankMayContents.kpi4 < '20.75')?'yellow-7':(foodbankMayContents.kpi4 >= '20.75' && foodbankMayContents.kpi4 < '24.9')?'green':(foodbankMayContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi5 == null)?'grey-2':(foodbankMayContents.kpi5 >= '0' && foodbankMayContents.kpi5 <= '92.4')?'red':(foodbankMayContents.kpi5 > '92.4' && foodbankMayContents.kpi5 <= '123.2')?'orange':(foodbankMayContents.kpi5 > '123.2' && foodbankMayContents.kpi5 < '154')?'yellow-7':(foodbankMayContents.kpi5 >= '154' && foodbankMayContents.kpi5 < '184.8')?'green':(foodbankMayContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi6 == null)?'grey-2':(foodbankMayContents.kpi6 >= '0' && foodbankMayContents.kpi6 <= '14.7')?'red':(foodbankMayContents.kpi6 > '14.7' && foodbankMayContents.kpi6 <= '19.6')?'orange':(foodbankMayContents.kpi6 > '19.6' && foodbankMayContents.kpi6 < '24.5')?'yellow-7':(foodbankMayContents.kpi6 >= '24.5' && foodbankMayContents.kpi6 < '29.4')?'green':(foodbankMayContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankJunContents.kpi1 == null)?'grey-2':(foodbankJunContents.kpi1 >= '0' && foodbankJunContents.kpi1 <= '238.8')?'red':(foodbankJunContents.kpi1 > '238.8' && foodbankJunContents.kpi1 <= '318.4')?'orange':(foodbankJunContents.kpi1 > '318.4' && foodbankJunContents.kpi1 < '398')?'yellow-7':(foodbankJunContents.kpi1 >= '398' && foodbankJunContents.kpi1 < '477.6')?'green':(foodbankJunContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi2 == null)?'grey-2':(foodbankJunContents.kpi2 >= '0' && foodbankJunContents.kpi2 <= '244.2')?'red':(foodbankJunContents.kpi2 > '244.2' && foodbankJunContents.kpi2 <= '325.6')?'orange':(foodbankJunContents.kpi2 > '325.6' && foodbankJunContents.kpi2 < '407')?'yellow-7':(foodbankJunContents.kpi2 >= '407' && foodbankJunContents.kpi2 < '488.4')?'green':(foodbankJunContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi3 == null)?'grey-2':(foodbankJunContents.kpi3 >= '0' && foodbankJunContents.kpi3 <= '524.25')?'red':(foodbankJunContents.kpi3 > '524.25' && foodbankJunContents.kpi3 <= '699')?'orange':(foodbankJunContents.kpi3 > '699' && foodbankJunContents.kpi3 < '873.75')?'yellow-7':(foodbankJunContents.kpi3 >= '873.75' && foodbankJunContents.kpi3 < '1048.5')?'green':(foodbankJunContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi4 == null)?'grey-2':(foodbankJunContents.kpi4 >= '0' && foodbankJunContents.kpi4 <= '12.45')?'red':(foodbankJunContents.kpi4 > '12.45' && foodbankJunContents.kpi4 <= '16.6')?'orange':(foodbankJunContents.kpi4 > '16.6' && foodbankJunContents.kpi4 < '20.75')?'yellow-7':(foodbankJunContents.kpi4 >= '20.75' && foodbankJunContents.kpi4 < '24.9')?'green':(foodbankJunContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi5 == null)?'grey-2':(foodbankJunContents.kpi5 >= '0' && foodbankJunContents.kpi5 <= '92.4')?'red':(foodbankJunContents.kpi5 > '92.4' && foodbankJunContents.kpi5 <= '123.2')?'orange':(foodbankJunContents.kpi5 > '123.2' && foodbankJunContents.kpi5 < '154')?'yellow-7':(foodbankJunContents.kpi5 >= '154' && foodbankJunContents.kpi5 < '184.8')?'green':(foodbankJunContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi6 == null)?'grey-2':(foodbankJunContents.kpi6 >= '0' && foodbankJunContents.kpi6 <= '14.7')?'red':(foodbankJunContents.kpi6 > '14.7' && foodbankJunContents.kpi6 <= '19.6')?'orange':(foodbankJunContents.kpi6 > '19.6' && foodbankJunContents.kpi6 < '24.5')?'yellow-7':(foodbankJunContents.kpi6 >= '24.5' && foodbankJunContents.kpi6 < '29.4')?'green':(foodbankJunContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankJulContents.kpi1 == null)?'grey-2':(foodbankJulContents.kpi1 >= '0' && foodbankJulContents.kpi1 <= '238.8')?'red':(foodbankJulContents.kpi1 > '238.8' && foodbankJulContents.kpi1 <= '318.4')?'orange':(foodbankJulContents.kpi1 > '318.4' && foodbankJulContents.kpi1 < '398')?'yellow-7':(foodbankJulContents.kpi1 >= '398' && foodbankJulContents.kpi1 < '477.6')?'green':(foodbankJulContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi2 == null)?'grey-2':(foodbankJulContents.kpi2 >= '0' && foodbankJulContents.kpi2 <= '244.2')?'red':(foodbankJulContents.kpi2 > '244.2' && foodbankJulContents.kpi2 <= '325.6')?'orange':(foodbankJulContents.kpi2 > '325.6' && foodbankJulContents.kpi2 < '407')?'yellow-7':(foodbankJulContents.kpi2 >= '407' && foodbankJulContents.kpi2 < '488.4')?'green':(foodbankJulContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi3 == null)?'grey-2':(foodbankJulContents.kpi3 >= '0' && foodbankJulContents.kpi3 <= '524.25')?'red':(foodbankJulContents.kpi3 > '524.25' && foodbankJulContents.kpi3 <= '699')?'orange':(foodbankJulContents.kpi3 > '699' && foodbankJulContents.kpi3 < '873.75')?'yellow-7':(foodbankJulContents.kpi3 >= '873.75' && foodbankJulContents.kpi3 < '1048.5')?'green':(foodbankJulContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi4 == null)?'grey-2':(foodbankJulContents.kpi4 >= '0' && foodbankJulContents.kpi4 <= '12.45')?'red':(foodbankJulContents.kpi4 > '12.45' && foodbankJulContents.kpi4 <= '16.6')?'orange':(foodbankJulContents.kpi4 > '16.6' && foodbankJulContents.kpi4 < '20.75')?'yellow-7':(foodbankJulContents.kpi4 >= '20.75' && foodbankJulContents.kpi4 < '24.9')?'green':(foodbankJulContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi5 == null)?'grey-2':(foodbankJulContents.kpi5 >= '0' && foodbankJulContents.kpi5 <= '92.4')?'red':(foodbankJulContents.kpi5 > '92.4' && foodbankJulContents.kpi5 <= '123.2')?'orange':(foodbankJulContents.kpi5 > '123.2' && foodbankJulContents.kpi5 < '154')?'yellow-7':(foodbankJulContents.kpi5 >= '154' && foodbankJulContents.kpi5 < '184.8')?'green':(foodbankJulContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi6 == null)?'grey-2':(foodbankJulContents.kpi6 >= '0' && foodbankJulContents.kpi6 <= '14.7')?'red':(foodbankJulContents.kpi6 > '14.7' && foodbankJulContents.kpi6 <= '19.6')?'orange':(foodbankJulContents.kpi6 > '19.6' && foodbankJulContents.kpi6 < '24.5')?'yellow-7':(foodbankJulContents.kpi6 >= '24.5' && foodbankJulContents.kpi6 < '29.4')?'green':(foodbankJulContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankAugContents.kpi1 == null)?'grey-2':(foodbankAugContents.kpi1 >= '0' && foodbankAugContents.kpi1 <= '238.8')?'red':(foodbankAugContents.kpi1 > '238.8' && foodbankAugContents.kpi1 <= '318.4')?'orange':(foodbankAugContents.kpi1 > '318.4' && foodbankAugContents.kpi1 < '398')?'yellow-7':(foodbankAugContents.kpi1 >= '398' && foodbankAugContents.kpi1 < '477.6')?'green':(foodbankAugContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi2 == null)?'grey-2':(foodbankAugContents.kpi2 >= '0' && foodbankAugContents.kpi2 <= '244.2')?'red':(foodbankAugContents.kpi2 > '244.2' && foodbankAugContents.kpi2 <= '325.6')?'orange':(foodbankAugContents.kpi2 > '325.6' && foodbankAugContents.kpi2 < '407')?'yellow-7':(foodbankAugContents.kpi2 >= '407' && foodbankAugContents.kpi2 < '488.4')?'green':(foodbankAugContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi3 == null)?'grey-2':(foodbankAugContents.kpi3 >= '0' && foodbankAugContents.kpi3 <= '524.25')?'red':(foodbankAugContents.kpi3 > '524.25' && foodbankAugContents.kpi3 <= '699')?'orange':(foodbankAugContents.kpi3 > '699' && foodbankAugContents.kpi3 < '873.75')?'yellow-7':(foodbankAugContents.kpi3 >= '873.75' && foodbankAugContents.kpi3 < '1048.5')?'green':(foodbankAugContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi4 == null)?'grey-2':(foodbankAugContents.kpi4 >= '0' && foodbankAugContents.kpi4 <= '12.45')?'red':(foodbankAugContents.kpi4 > '12.45' && foodbankAugContents.kpi4 <= '16.6')?'orange':(foodbankAugContents.kpi4 > '16.6' && foodbankAugContents.kpi4 < '20.75')?'yellow-7':(foodbankAugContents.kpi4 >= '20.75' && foodbankAugContents.kpi4 < '24.9')?'green':(foodbankAugContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi5 == null)?'grey-2':(foodbankAugContents.kpi5 >= '0' && foodbankAugContents.kpi5 <= '92.4')?'red':(foodbankAugContents.kpi5 > '92.4' && foodbankAugContents.kpi5 <= '123.2')?'orange':(foodbankAugContents.kpi5 > '123.2' && foodbankAugContents.kpi5 < '154')?'yellow-7':(foodbankAugContents.kpi5 >= '154' && foodbankAugContents.kpi5 < '184.8')?'green':(foodbankAugContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi6 == null)?'grey-2':(foodbankAugContents.kpi6 >= '0' && foodbankAugContents.kpi6 <= '14.7')?'red':(foodbankAugContents.kpi6 > '14.7' && foodbankAugContents.kpi6 <= '19.6')?'orange':(foodbankAugContents.kpi6 > '19.6' && foodbankAugContents.kpi6 < '24.5')?'yellow-7':(foodbankAugContents.kpi6 >= '24.5' && foodbankAugContents.kpi6 < '29.4')?'green':(foodbankAugContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankSepContents.kpi1 == null)?'grey-2':(foodbankSepContents.kpi1 >= '0' && foodbankSepContents.kpi1 <= '238.8')?'red':(foodbankSepContents.kpi1 > '238.8' && foodbankSepContents.kpi1 <= '318.4')?'orange':(foodbankSepContents.kpi1 > '318.4' && foodbankSepContents.kpi1 < '398')?'yellow-7':(foodbankSepContents.kpi1 >= '398' && foodbankSepContents.kpi1 < '477.6')?'green':(foodbankSepContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi2 == null)?'grey-2':(foodbankSepContents.kpi2 >= '0' && foodbankSepContents.kpi2 <= '244.2')?'red':(foodbankSepContents.kpi2 > '244.2' && foodbankSepContents.kpi2 <= '325.6')?'orange':(foodbankSepContents.kpi2 > '325.6' && foodbankSepContents.kpi2 < '407')?'yellow-7':(foodbankSepContents.kpi2 >= '407' && foodbankSepContents.kpi2 < '488.4')?'green':(foodbankSepContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi3 == null)?'grey-2':(foodbankSepContents.kpi3 >= '0' && foodbankSepContents.kpi3 <= '524.25')?'red':(foodbankSepContents.kpi3 > '524.25' && foodbankSepContents.kpi3 <= '699')?'orange':(foodbankSepContents.kpi3 > '699' && foodbankSepContents.kpi3 < '873.75')?'yellow-7':(foodbankSepContents.kpi3 >= '873.75' && foodbankSepContents.kpi3 < '1048.5')?'green':(foodbankSepContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi4 == null)?'grey-2':(foodbankSepContents.kpi4 >= '0' && foodbankSepContents.kpi4 <= '12.45')?'red':(foodbankSepContents.kpi4 > '12.45' && foodbankSepContents.kpi4 <= '16.6')?'orange':(foodbankSepContents.kpi4 > '16.6' && foodbankSepContents.kpi4 < '20.75')?'yellow-7':(foodbankSepContents.kpi4 >= '20.75' && foodbankSepContents.kpi4 < '24.9')?'green':(foodbankSepContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi5 == null)?'grey-2':(foodbankSepContents.kpi5 >= '0' && foodbankSepContents.kpi5 <= '92.4')?'red':(foodbankSepContents.kpi5 > '92.4' && foodbankSepContents.kpi5 <= '123.2')?'orange':(foodbankSepContents.kpi5 > '123.2' && foodbankSepContents.kpi5 < '154')?'yellow-7':(foodbankSepContents.kpi5 >= '154' && foodbankSepContents.kpi5 < '184.8')?'green':(foodbankSepContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi6 == null)?'grey-2':(foodbankSepContents.kpi6 >= '0' && foodbankSepContents.kpi6 <= '14.7')?'red':(foodbankSepContents.kpi6 > '14.7' && foodbankSepContents.kpi6 <= '19.6')?'orange':(foodbankSepContents.kpi6 > '19.6' && foodbankSepContents.kpi6 < '24.5')?'yellow-7':(foodbankSepContents.kpi6 >= '24.5' && foodbankSepContents.kpi6 < '29.4')?'green':(foodbankSepContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankOctContents.kpi1 == null)?'grey-2':(foodbankOctContents.kpi1 >= '0' && foodbankOctContents.kpi1 <= '238.8')?'red':(foodbankOctContents.kpi1 > '238.8' && foodbankOctContents.kpi1 <= '318.4')?'orange':(foodbankOctContents.kpi1 > '318.4' && foodbankOctContents.kpi1 < '398')?'yellow-7':(foodbankOctContents.kpi1 >= '398' && foodbankOctContents.kpi1 < '477.6')?'green':(foodbankOctContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi2 == null)?'grey-2':(foodbankOctContents.kpi2 >= '0' && foodbankOctContents.kpi2 <= '244.2')?'red':(foodbankOctContents.kpi2 > '244.2' && foodbankOctContents.kpi2 <= '325.6')?'orange':(foodbankOctContents.kpi2 > '325.6' && foodbankOctContents.kpi2 < '407')?'yellow-7':(foodbankOctContents.kpi2 >= '407' && foodbankOctContents.kpi2 < '488.4')?'green':(foodbankOctContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi3 == null)?'grey-2':(foodbankOctContents.kpi3 >= '0' && foodbankOctContents.kpi3 <= '524.25')?'red':(foodbankOctContents.kpi3 > '524.25' && foodbankOctContents.kpi3 <= '699')?'orange':(foodbankOctContents.kpi3 > '699' && foodbankOctContents.kpi3 < '873.75')?'yellow-7':(foodbankOctContents.kpi3 >= '873.75' && foodbankOctContents.kpi3 < '1048.5')?'green':(foodbankOctContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi4 == null)?'grey-2':(foodbankOctContents.kpi4 >= '0' && foodbankOctContents.kpi4 <= '12.45')?'red':(foodbankOctContents.kpi4 > '12.45' && foodbankOctContents.kpi4 <= '16.6')?'orange':(foodbankOctContents.kpi4 > '16.6' && foodbankOctContents.kpi4 < '20.75')?'yellow-7':(foodbankOctContents.kpi4 >= '20.75' && foodbankOctContents.kpi4 < '24.9')?'green':(foodbankOctContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi5 == null)?'grey-2':(foodbankOctContents.kpi5 >= '0' && foodbankOctContents.kpi5 <= '92.4')?'red':(foodbankOctContents.kpi5 > '92.4' && foodbankOctContents.kpi5 <= '123.2')?'orange':(foodbankOctContents.kpi5 > '123.2' && foodbankOctContents.kpi5 < '154')?'yellow-7':(foodbankOctContents.kpi5 >= '154' && foodbankOctContents.kpi5 < '184.8')?'green':(foodbankOctContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi6 == null)?'grey-2':(foodbankOctContents.kpi6 >= '0' && foodbankOctContents.kpi6 <= '14.7')?'red':(foodbankOctContents.kpi6 > '14.7' && foodbankOctContents.kpi6 <= '19.6')?'orange':(foodbankOctContents.kpi6 > '19.6' && foodbankOctContents.kpi6 < '24.5')?'yellow-7':(foodbankOctContents.kpi6 >= '24.5' && foodbankOctContents.kpi6 < '29.4')?'green':(foodbankOctContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankNovContents.kpi1 == null)?'grey-2':(foodbankNovContents.kpi1 >= '0' && foodbankNovContents.kpi1 <= '238.8')?'red':(foodbankNovContents.kpi1 > '238.8' && foodbankNovContents.kpi1 <= '318.4')?'orange':(foodbankNovContents.kpi1 > '318.4' && foodbankNovContents.kpi1 < '398')?'yellow-7':(foodbankNovContents.kpi1 >= '398' && foodbankNovContents.kpi1 < '477.6')?'green':(foodbankNovContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi2 == null)?'grey-2':(foodbankNovContents.kpi2 >= '0' && foodbankNovContents.kpi2 <= '244.2')?'red':(foodbankNovContents.kpi2 > '244.2' && foodbankNovContents.kpi2 <= '325.6')?'orange':(foodbankNovContents.kpi2 > '325.6' && foodbankNovContents.kpi2 < '407')?'yellow-7':(foodbankNovContents.kpi2 >= '407' && foodbankNovContents.kpi2 < '488.4')?'green':(foodbankNovContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi3 == null)?'grey-2':(foodbankNovContents.kpi3 >= '0' && foodbankNovContents.kpi3 <= '524.25')?'red':(foodbankNovContents.kpi3 > '524.25' && foodbankNovContents.kpi3 <= '699')?'orange':(foodbankNovContents.kpi3 > '699' && foodbankNovContents.kpi3 < '873.75')?'yellow-7':(foodbankNovContents.kpi3 >= '873.75' && foodbankNovContents.kpi3 < '1048.5')?'green':(foodbankNovContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi4 == null)?'grey-2':(foodbankNovContents.kpi4 >= '0' && foodbankNovContents.kpi4 <= '12.45')?'red':(foodbankNovContents.kpi4 > '12.45' && foodbankNovContents.kpi4 <= '16.6')?'orange':(foodbankNovContents.kpi4 > '16.6' && foodbankNovContents.kpi4 < '20.75')?'yellow-7':(foodbankNovContents.kpi4 >= '20.75' && foodbankNovContents.kpi4 < '24.9')?'green':(foodbankNovContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi5 == null)?'grey-2':(foodbankNovContents.kpi5 >= '0' && foodbankNovContents.kpi5 <= '92.4')?'red':(foodbankNovContents.kpi5 > '92.4' && foodbankNovContents.kpi5 <= '123.2')?'orange':(foodbankNovContents.kpi5 > '123.2' && foodbankNovContents.kpi5 < '154')?'yellow-7':(foodbankNovContents.kpi5 >= '154' && foodbankNovContents.kpi5 < '184.8')?'green':(foodbankNovContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi6 == null)?'grey-2':(foodbankNovContents.kpi6 >= '0' && foodbankNovContents.kpi6 <= '14.7')?'red':(foodbankNovContents.kpi6 > '14.7' && foodbankNovContents.kpi6 <= '19.6')?'orange':(foodbankNovContents.kpi6 > '19.6' && foodbankNovContents.kpi6 < '24.5')?'yellow-7':(foodbankNovContents.kpi6 >= '24.5' && foodbankNovContents.kpi6 < '29.4')?'green':(foodbankNovContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankDecContents.kpi1 == null)?'grey-2':(foodbankDecContents.kpi1 >= '0' && foodbankDecContents.kpi1 <= '238.8')?'red':(foodbankDecContents.kpi1 > '238.8' && foodbankDecContents.kpi1 <= '318.4')?'orange':(foodbankDecContents.kpi1 > '318.4' && foodbankDecContents.kpi1 < '398')?'yellow-7':(foodbankDecContents.kpi1 >= '398' && foodbankDecContents.kpi1 < '477.6')?'green':(foodbankDecContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi2 == null)?'grey-2':(foodbankDecContents.kpi2 >= '0' && foodbankDecContents.kpi2 <= '244.2')?'red':(foodbankDecContents.kpi2 > '244.2' && foodbankDecContents.kpi2 <= '325.6')?'orange':(foodbankDecContents.kpi2 > '325.6' && foodbankDecContents.kpi2 < '407')?'yellow-7':(foodbankDecContents.kpi2 >= '407' && foodbankDecContents.kpi2 < '488.4')?'green':(foodbankDecContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi3 == null)?'grey-2':(foodbankDecContents.kpi3 >= '0' && foodbankDecContents.kpi3 <= '524.25')?'red':(foodbankDecContents.kpi3 > '524.25' && foodbankDecContents.kpi3 <= '699')?'orange':(foodbankDecContents.kpi3 > '699' && foodbankDecContents.kpi3 < '873.75')?'yellow-7':(foodbankDecContents.kpi3 >= '873.75' && foodbankDecContents.kpi3 < '1048.5')?'green':(foodbankDecContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi4 == null)?'grey-2':(foodbankDecContents.kpi4 >= '0' && foodbankDecContents.kpi4 <= '12.45')?'red':(foodbankDecContents.kpi4 > '12.45' && foodbankDecContents.kpi4 <= '16.6')?'orange':(foodbankDecContents.kpi4 > '16.6' && foodbankDecContents.kpi4 < '20.75')?'yellow-7':(foodbankDecContents.kpi4 >= '20.75' && foodbankDecContents.kpi4 < '24.9')?'green':(foodbankDecContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi5 == null)?'grey-2':(foodbankDecContents.kpi5 >= '0' && foodbankDecContents.kpi5 <= '92.4')?'red':(foodbankDecContents.kpi5 > '92.4' && foodbankDecContents.kpi5 <= '123.2')?'orange':(foodbankDecContents.kpi5 > '123.2' && foodbankDecContents.kpi5 < '154')?'yellow-7':(foodbankDecContents.kpi5 >= '154' && foodbankDecContents.kpi5 < '184.8')?'green':(foodbankDecContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi6 == null)?'grey-2':(foodbankDecContents.kpi6 >= '0' && foodbankDecContents.kpi6 <= '14.7')?'red':(foodbankDecContents.kpi6 > '14.7' && foodbankDecContents.kpi6 <= '19.6')?'orange':(foodbankDecContents.kpi6 > '19.6' && foodbankDecContents.kpi6 < '24.5')?'yellow-7':(foodbankDecContents.kpi6 >= '24.5' && foodbankDecContents.kpi6 < '29.4')?'green':(foodbankDecContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip>Activities (#)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 5
                                <q-tooltip># Households Receiving Deliveries</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 6
                                <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankJanContents.kpi1 == null)?'grey-2':(foodbankJanContents.kpi1 >= '0' && foodbankJanContents.kpi1 <= '238.8')?'red':(foodbankJanContents.kpi1 > '238.8' && foodbankJanContents.kpi1 <= '318.4')?'orange':(foodbankJanContents.kpi1 > '318.4' && foodbankJanContents.kpi1 < '398')?'yellow-7':(foodbankJanContents.kpi1 >= '398' && foodbankJanContents.kpi1 < '477.6')?'green':(foodbankJanContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi2 == null)?'grey-2':(foodbankJanContents.kpi2 >= '0' && foodbankJanContents.kpi2 <= '244.2')?'red':(foodbankJanContents.kpi2 > '244.2' && foodbankJanContents.kpi2 <= '325.6')?'orange':(foodbankJanContents.kpi2 > '325.6' && foodbankJanContents.kpi2 < '407')?'yellow-7':(foodbankJanContents.kpi2 >= '407' && foodbankJanContents.kpi2 < '488.4')?'green':(foodbankJanContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi3 == null)?'grey-2':(foodbankJanContents.kpi3 >= '0' && foodbankJanContents.kpi3 <= '524.25')?'red':(foodbankJanContents.kpi3 > '524.25' && foodbankJanContents.kpi3 <= '699')?'orange':(foodbankJanContents.kpi3 > '699' && foodbankJanContents.kpi3 < '873.75')?'yellow-7':(foodbankJanContents.kpi3 >= '873.75' && foodbankJanContents.kpi3 < '1048.5')?'green':(foodbankJanContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi4 == null)?'grey-2':(foodbankJanContents.kpi4 >= '0' && foodbankJanContents.kpi4 <= '12.45')?'red':(foodbankJanContents.kpi4 > '12.45' && foodbankJanContents.kpi4 <= '16.6')?'orange':(foodbankJanContents.kpi4 > '16.6' && foodbankJanContents.kpi4 < '20.75')?'yellow-7':(foodbankJanContents.kpi4 >= '20.75' && foodbankJanContents.kpi4 < '24.9')?'green':(foodbankJanContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi5 == null)?'grey-2':(foodbankJanContents.kpi5 >= '0' && foodbankJanContents.kpi5 <= '92.4')?'red':(foodbankJanContents.kpi5 > '92.4' && foodbankJanContents.kpi5 <= '123.2')?'orange':(foodbankJanContents.kpi5 > '123.2' && foodbankJanContents.kpi5 < '154')?'yellow-7':(foodbankJanContents.kpi5 >= '154' && foodbankJanContents.kpi5 < '184.8')?'green':(foodbankJanContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi6 == null)?'grey-2':(foodbankJanContents.kpi6 >= '0' && foodbankJanContents.kpi6 <= '14.7')?'red':(foodbankJanContents.kpi6 > '14.7' && foodbankJanContents.kpi6 <= '19.6')?'orange':(foodbankJanContents.kpi6 > '19.6' && foodbankJanContents.kpi6 < '24.5')?'yellow-7':(foodbankJanContents.kpi6 >= '24.5' && foodbankJanContents.kpi6 < '29.4')?'green':(foodbankJanContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankFebContents.kpi1 == null)?'grey-2':(foodbankFebContents.kpi1 >= '0' && foodbankFebContents.kpi1 <= '238.8')?'red':(foodbankFebContents.kpi1 > '238.8' && foodbankFebContents.kpi1 <= '318.4')?'orange':(foodbankFebContents.kpi1 > '318.4' && foodbankFebContents.kpi1 < '398')?'yellow-7':(foodbankFebContents.kpi1 >= '398' && foodbankFebContents.kpi1 < '477.6')?'green':(foodbankFebContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi2 == null)?'grey-2':(foodbankFebContents.kpi2 >= '0' && foodbankFebContents.kpi2 <= '244.2')?'red':(foodbankFebContents.kpi2 > '244.2' && foodbankFebContents.kpi2 <= '325.6')?'orange':(foodbankFebContents.kpi2 > '325.6' && foodbankFebContents.kpi2 < '407')?'yellow-7':(foodbankFebContents.kpi2 >= '407' && foodbankFebContents.kpi2 < '488.4')?'green':(foodbankFebContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi3 == null)?'grey-2':(foodbankFebContents.kpi3 >= '0' && foodbankFebContents.kpi3 <= '524.25')?'red':(foodbankFebContents.kpi3 > '524.25' && foodbankFebContents.kpi3 <= '699')?'orange':(foodbankFebContents.kpi3 > '699' && foodbankFebContents.kpi3 < '873.75')?'yellow-7':(foodbankFebContents.kpi3 >= '873.75' && foodbankFebContents.kpi3 < '1048.5')?'green':(foodbankFebContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi4 == null)?'grey-2':(foodbankFebContents.kpi4 >= '0' && foodbankFebContents.kpi4 <= '12.45')?'red':(foodbankFebContents.kpi4 > '12.45' && foodbankFebContents.kpi4 <= '16.6')?'orange':(foodbankFebContents.kpi4 > '16.6' && foodbankFebContents.kpi4 < '20.75')?'yellow-7':(foodbankFebContents.kpi4 >= '20.75' && foodbankFebContents.kpi4 < '24.9')?'green':(foodbankFebContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi5 == null)?'grey-2':(foodbankFebContents.kpi5 >= '0' && foodbankFebContents.kpi5 <= '92.4')?'red':(foodbankFebContents.kpi5 > '92.4' && foodbankFebContents.kpi5 <= '123.2')?'orange':(foodbankFebContents.kpi5 > '123.2' && foodbankFebContents.kpi5 < '154')?'yellow-7':(foodbankFebContents.kpi5 >= '154' && foodbankFebContents.kpi5 < '184.8')?'green':(foodbankFebContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi6 == null)?'grey-2':(foodbankFebContents.kpi6 >= '0' && foodbankFebContents.kpi6 <= '14.7')?'red':(foodbankFebContents.kpi6 > '14.7' && foodbankFebContents.kpi6 <= '19.6')?'orange':(foodbankFebContents.kpi6 > '19.6' && foodbankFebContents.kpi6 < '24.5')?'yellow-7':(foodbankFebContents.kpi6 >= '24.5' && foodbankFebContents.kpi6 < '29.4')?'green':(foodbankFebContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankMarContents.kpi1 == null)?'grey-2':(foodbankMarContents.kpi1 >= '0' && foodbankMarContents.kpi1 <= '238.8')?'red':(foodbankMarContents.kpi1 > '238.8' && foodbankMarContents.kpi1 <= '318.4')?'orange':(foodbankMarContents.kpi1 > '318.4' && foodbankMarContents.kpi1 < '398')?'yellow-7':(foodbankMarContents.kpi1 >= '398' && foodbankMarContents.kpi1 < '477.6')?'green':(foodbankMarContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi2 == null)?'grey-2':(foodbankMarContents.kpi2 >= '0' && foodbankMarContents.kpi2 <= '244.2')?'red':(foodbankMarContents.kpi2 > '244.2' && foodbankMarContents.kpi2 <= '325.6')?'orange':(foodbankMarContents.kpi2 > '325.6' && foodbankMarContents.kpi2 < '407')?'yellow-7':(foodbankMarContents.kpi2 >= '407' && foodbankMarContents.kpi2 < '488.4')?'green':(foodbankMarContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi3 == null)?'grey-2':(foodbankMarContents.kpi3 >= '0' && foodbankMarContents.kpi3 <= '524.25')?'red':(foodbankMarContents.kpi3 > '524.25' && foodbankMarContents.kpi3 <= '699')?'orange':(foodbankMarContents.kpi3 > '699' && foodbankMarContents.kpi3 < '873.75')?'yellow-7':(foodbankMarContents.kpi3 >= '873.75' && foodbankMarContents.kpi3 < '1048.5')?'green':(foodbankMarContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi4 == null)?'grey-2':(foodbankMarContents.kpi4 >= '0' && foodbankMarContents.kpi4 <= '12.45')?'red':(foodbankMarContents.kpi4 > '12.45' && foodbankMarContents.kpi4 <= '16.6')?'orange':(foodbankMarContents.kpi4 > '16.6' && foodbankMarContents.kpi4 < '20.75')?'yellow-7':(foodbankMarContents.kpi4 >= '20.75' && foodbankMarContents.kpi4 < '24.9')?'green':(foodbankMarContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi5 == null)?'grey-2':(foodbankMarContents.kpi5 >= '0' && foodbankMarContents.kpi5 <= '92.4')?'red':(foodbankMarContents.kpi5 > '92.4' && foodbankMarContents.kpi5 <= '123.2')?'orange':(foodbankMarContents.kpi5 > '123.2' && foodbankMarContents.kpi5 < '154')?'yellow-7':(foodbankMarContents.kpi5 >= '154' && foodbankMarContents.kpi5 < '184.8')?'green':(foodbankMarContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi6 == null)?'grey-2':(foodbankMarContents.kpi6 >= '0' && foodbankMarContents.kpi6 <= '14.7')?'red':(foodbankMarContents.kpi6 > '14.7' && foodbankMarContents.kpi6 <= '19.6')?'orange':(foodbankMarContents.kpi6 > '19.6' && foodbankMarContents.kpi6 < '24.5')?'yellow-7':(foodbankMarContents.kpi6 >= '24.5' && foodbankMarContents.kpi6 < '29.4')?'green':(foodbankMarContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankAprContents.kpi1 == null)?'grey-2':(foodbankAprContents.kpi1 >= '0' && foodbankAprContents.kpi1 <= '238.8')?'red':(foodbankAprContents.kpi1 > '238.8' && foodbankAprContents.kpi1 <= '318.4')?'orange':(foodbankAprContents.kpi1 > '318.4' && foodbankAprContents.kpi1 < '398')?'yellow-7':(foodbankAprContents.kpi1 >= '398' && foodbankAprContents.kpi1 < '477.6')?'green':(foodbankAprContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi2 == null)?'grey-2':(foodbankAprContents.kpi2 >= '0' && foodbankAprContents.kpi2 <= '244.2')?'red':(foodbankAprContents.kpi2 > '244.2' && foodbankAprContents.kpi2 <= '325.6')?'orange':(foodbankAprContents.kpi2 > '325.6' && foodbankAprContents.kpi2 < '407')?'yellow-7':(foodbankAprContents.kpi2 >= '407' && foodbankAprContents.kpi2 < '488.4')?'green':(foodbankAprContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi3 == null)?'grey-2':(foodbankAprContents.kpi3 >= '0' && foodbankAprContents.kpi3 <= '524.25')?'red':(foodbankAprContents.kpi3 > '524.25' && foodbankAprContents.kpi3 <= '699')?'orange':(foodbankAprContents.kpi3 > '699' && foodbankAprContents.kpi3 < '873.75')?'yellow-7':(foodbankAprContents.kpi3 >= '873.75' && foodbankAprContents.kpi3 < '1048.5')?'green':(foodbankAprContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi4 == null)?'grey-2':(foodbankAprContents.kpi4 >= '0' && foodbankAprContents.kpi4 <= '12.45')?'red':(foodbankAprContents.kpi4 > '12.45' && foodbankAprContents.kpi4 <= '16.6')?'orange':(foodbankAprContents.kpi4 > '16.6' && foodbankAprContents.kpi4 < '20.75')?'yellow-7':(foodbankAprContents.kpi4 >= '20.75' && foodbankAprContents.kpi4 < '24.9')?'green':(foodbankAprContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi5 == null)?'grey-2':(foodbankAprContents.kpi5 >= '0' && foodbankAprContents.kpi5 <= '92.4')?'red':(foodbankAprContents.kpi5 > '92.4' && foodbankAprContents.kpi5 <= '123.2')?'orange':(foodbankAprContents.kpi5 > '123.2' && foodbankAprContents.kpi5 < '154')?'yellow-7':(foodbankAprContents.kpi5 >= '154' && foodbankAprContents.kpi5 < '184.8')?'green':(foodbankAprContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi6 == null)?'grey-2':(foodbankAprContents.kpi6 >= '0' && foodbankAprContents.kpi6 <= '14.7')?'red':(foodbankAprContents.kpi6 > '14.7' && foodbankAprContents.kpi6 <= '19.6')?'orange':(foodbankAprContents.kpi6 > '19.6' && foodbankAprContents.kpi6 < '24.5')?'yellow-7':(foodbankAprContents.kpi6 >= '24.5' && foodbankAprContents.kpi6 < '29.4')?'green':(foodbankAprContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankMayContents.kpi1 == null)?'grey-2':(foodbankMayContents.kpi1 >= '0' && foodbankMayContents.kpi1 <= '238.8')?'red':(foodbankMayContents.kpi1 > '238.8' && foodbankMayContents.kpi1 <= '318.4')?'orange':(foodbankMayContents.kpi1 > '318.4' && foodbankMayContents.kpi1 < '398')?'yellow-7':(foodbankMayContents.kpi1 >= '398' && foodbankMayContents.kpi1 < '477.6')?'green':(foodbankMayContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi2 == null)?'grey-2':(foodbankMayContents.kpi2 >= '0' && foodbankMayContents.kpi2 <= '244.2')?'red':(foodbankMayContents.kpi2 > '244.2' && foodbankMayContents.kpi2 <= '325.6')?'orange':(foodbankMayContents.kpi2 > '325.6' && foodbankMayContents.kpi2 < '407')?'yellow-7':(foodbankMayContents.kpi2 >= '407' && foodbankMayContents.kpi2 < '488.4')?'green':(foodbankMayContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi3 == null)?'grey-2':(foodbankMayContents.kpi3 >= '0' && foodbankMayContents.kpi3 <= '524.25')?'red':(foodbankMayContents.kpi3 > '524.25' && foodbankMayContents.kpi3 <= '699')?'orange':(foodbankMayContents.kpi3 > '699' && foodbankMayContents.kpi3 < '873.75')?'yellow-7':(foodbankMayContents.kpi3 >= '873.75' && foodbankMayContents.kpi3 < '1048.5')?'green':(foodbankMayContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi4 == null)?'grey-2':(foodbankMayContents.kpi4 >= '0' && foodbankMayContents.kpi4 <= '12.45')?'red':(foodbankMayContents.kpi4 > '12.45' && foodbankMayContents.kpi4 <= '16.6')?'orange':(foodbankMayContents.kpi4 > '16.6' && foodbankMayContents.kpi4 < '20.75')?'yellow-7':(foodbankMayContents.kpi4 >= '20.75' && foodbankMayContents.kpi4 < '24.9')?'green':(foodbankMayContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi5 == null)?'grey-2':(foodbankMayContents.kpi5 >= '0' && foodbankMayContents.kpi5 <= '92.4')?'red':(foodbankMayContents.kpi5 > '92.4' && foodbankMayContents.kpi5 <= '123.2')?'orange':(foodbankMayContents.kpi5 > '123.2' && foodbankMayContents.kpi5 < '154')?'yellow-7':(foodbankMayContents.kpi5 >= '154' && foodbankMayContents.kpi5 < '184.8')?'green':(foodbankMayContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi6 == null)?'grey-2':(foodbankMayContents.kpi6 >= '0' && foodbankMayContents.kpi6 <= '14.7')?'red':(foodbankMayContents.kpi6 > '14.7' && foodbankMayContents.kpi6 <= '19.6')?'orange':(foodbankMayContents.kpi6 > '19.6' && foodbankMayContents.kpi6 < '24.5')?'yellow-7':(foodbankMayContents.kpi6 >= '24.5' && foodbankMayContents.kpi6 < '29.4')?'green':(foodbankMayContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankJunContents.kpi1 == null)?'grey-2':(foodbankJunContents.kpi1 >= '0' && foodbankJunContents.kpi1 <= '238.8')?'red':(foodbankJunContents.kpi1 > '238.8' && foodbankJunContents.kpi1 <= '318.4')?'orange':(foodbankJunContents.kpi1 > '318.4' && foodbankJunContents.kpi1 < '398')?'yellow-7':(foodbankJunContents.kpi1 >= '398' && foodbankJunContents.kpi1 < '477.6')?'green':(foodbankJunContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi2 == null)?'grey-2':(foodbankJunContents.kpi2 >= '0' && foodbankJunContents.kpi2 <= '244.2')?'red':(foodbankJunContents.kpi2 > '244.2' && foodbankJunContents.kpi2 <= '325.6')?'orange':(foodbankJunContents.kpi2 > '325.6' && foodbankJunContents.kpi2 < '407')?'yellow-7':(foodbankJunContents.kpi2 >= '407' && foodbankJunContents.kpi2 < '488.4')?'green':(foodbankJunContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi3 == null)?'grey-2':(foodbankJunContents.kpi3 >= '0' && foodbankJunContents.kpi3 <= '524.25')?'red':(foodbankJunContents.kpi3 > '524.25' && foodbankJunContents.kpi3 <= '699')?'orange':(foodbankJunContents.kpi3 > '699' && foodbankJunContents.kpi3 < '873.75')?'yellow-7':(foodbankJunContents.kpi3 >= '873.75' && foodbankJunContents.kpi3 < '1048.5')?'green':(foodbankJunContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi4 == null)?'grey-2':(foodbankJunContents.kpi4 >= '0' && foodbankJunContents.kpi4 <= '12.45')?'red':(foodbankJunContents.kpi4 > '12.45' && foodbankJunContents.kpi4 <= '16.6')?'orange':(foodbankJunContents.kpi4 > '16.6' && foodbankJunContents.kpi4 < '20.75')?'yellow-7':(foodbankJunContents.kpi4 >= '20.75' && foodbankJunContents.kpi4 < '24.9')?'green':(foodbankJunContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi5 == null)?'grey-2':(foodbankJunContents.kpi5 >= '0' && foodbankJunContents.kpi5 <= '92.4')?'red':(foodbankJunContents.kpi5 > '92.4' && foodbankJunContents.kpi5 <= '123.2')?'orange':(foodbankJunContents.kpi5 > '123.2' && foodbankJunContents.kpi5 < '154')?'yellow-7':(foodbankJunContents.kpi5 >= '154' && foodbankJunContents.kpi5 < '184.8')?'green':(foodbankJunContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi6 == null)?'grey-2':(foodbankJunContents.kpi6 >= '0' && foodbankJunContents.kpi6 <= '14.7')?'red':(foodbankJunContents.kpi6 > '14.7' && foodbankJunContents.kpi6 <= '19.6')?'orange':(foodbankJunContents.kpi6 > '19.6' && foodbankJunContents.kpi6 < '24.5')?'yellow-7':(foodbankJunContents.kpi6 >= '24.5' && foodbankJunContents.kpi6 < '29.4')?'green':(foodbankJunContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankJulContents.kpi1 == null)?'grey-2':(foodbankJulContents.kpi1 >= '0' && foodbankJulContents.kpi1 <= '238.8')?'red':(foodbankJulContents.kpi1 > '238.8' && foodbankJulContents.kpi1 <= '318.4')?'orange':(foodbankJulContents.kpi1 > '318.4' && foodbankJulContents.kpi1 < '398')?'yellow-7':(foodbankJulContents.kpi1 >= '398' && foodbankJulContents.kpi1 < '477.6')?'green':(foodbankJulContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi2 == null)?'grey-2':(foodbankJulContents.kpi2 >= '0' && foodbankJulContents.kpi2 <= '244.2')?'red':(foodbankJulContents.kpi2 > '244.2' && foodbankJulContents.kpi2 <= '325.6')?'orange':(foodbankJulContents.kpi2 > '325.6' && foodbankJulContents.kpi2 < '407')?'yellow-7':(foodbankJulContents.kpi2 >= '407' && foodbankJulContents.kpi2 < '488.4')?'green':(foodbankJulContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi3 == null)?'grey-2':(foodbankJulContents.kpi3 >= '0' && foodbankJulContents.kpi3 <= '524.25')?'red':(foodbankJulContents.kpi3 > '524.25' && foodbankJulContents.kpi3 <= '699')?'orange':(foodbankJulContents.kpi3 > '699' && foodbankJulContents.kpi3 < '873.75')?'yellow-7':(foodbankJulContents.kpi3 >= '873.75' && foodbankJulContents.kpi3 < '1048.5')?'green':(foodbankJulContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi4 == null)?'grey-2':(foodbankJulContents.kpi4 >= '0' && foodbankJulContents.kpi4 <= '12.45')?'red':(foodbankJulContents.kpi4 > '12.45' && foodbankJulContents.kpi4 <= '16.6')?'orange':(foodbankJulContents.kpi4 > '16.6' && foodbankJulContents.kpi4 < '20.75')?'yellow-7':(foodbankJulContents.kpi4 >= '20.75' && foodbankJulContents.kpi4 < '24.9')?'green':(foodbankJulContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi5 == null)?'grey-2':(foodbankJulContents.kpi5 >= '0' && foodbankJulContents.kpi5 <= '92.4')?'red':(foodbankJulContents.kpi5 > '92.4' && foodbankJulContents.kpi5 <= '123.2')?'orange':(foodbankJulContents.kpi5 > '123.2' && foodbankJulContents.kpi5 < '154')?'yellow-7':(foodbankJulContents.kpi5 >= '154' && foodbankJulContents.kpi5 < '184.8')?'green':(foodbankJulContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi6 == null)?'grey-2':(foodbankJulContents.kpi6 >= '0' && foodbankJulContents.kpi6 <= '14.7')?'red':(foodbankJulContents.kpi6 > '14.7' && foodbankJulContents.kpi6 <= '19.6')?'orange':(foodbankJulContents.kpi6 > '19.6' && foodbankJulContents.kpi6 < '24.5')?'yellow-7':(foodbankJulContents.kpi6 >= '24.5' && foodbankJulContents.kpi6 < '29.4')?'green':(foodbankJulContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankAugContents.kpi1 == null)?'grey-2':(foodbankAugContents.kpi1 >= '0' && foodbankAugContents.kpi1 <= '238.8')?'red':(foodbankAugContents.kpi1 > '238.8' && foodbankAugContents.kpi1 <= '318.4')?'orange':(foodbankAugContents.kpi1 > '318.4' && foodbankAugContents.kpi1 < '398')?'yellow-7':(foodbankAugContents.kpi1 >= '398' && foodbankAugContents.kpi1 < '477.6')?'green':(foodbankAugContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi2 == null)?'grey-2':(foodbankAugContents.kpi2 >= '0' && foodbankAugContents.kpi2 <= '244.2')?'red':(foodbankAugContents.kpi2 > '244.2' && foodbankAugContents.kpi2 <= '325.6')?'orange':(foodbankAugContents.kpi2 > '325.6' && foodbankAugContents.kpi2 < '407')?'yellow-7':(foodbankAugContents.kpi2 >= '407' && foodbankAugContents.kpi2 < '488.4')?'green':(foodbankAugContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi3 == null)?'grey-2':(foodbankAugContents.kpi3 >= '0' && foodbankAugContents.kpi3 <= '524.25')?'red':(foodbankAugContents.kpi3 > '524.25' && foodbankAugContents.kpi3 <= '699')?'orange':(foodbankAugContents.kpi3 > '699' && foodbankAugContents.kpi3 < '873.75')?'yellow-7':(foodbankAugContents.kpi3 >= '873.75' && foodbankAugContents.kpi3 < '1048.5')?'green':(foodbankAugContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi4 == null)?'grey-2':(foodbankAugContents.kpi4 >= '0' && foodbankAugContents.kpi4 <= '12.45')?'red':(foodbankAugContents.kpi4 > '12.45' && foodbankAugContents.kpi4 <= '16.6')?'orange':(foodbankAugContents.kpi4 > '16.6' && foodbankAugContents.kpi4 < '20.75')?'yellow-7':(foodbankAugContents.kpi4 >= '20.75' && foodbankAugContents.kpi4 < '24.9')?'green':(foodbankAugContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi5 == null)?'grey-2':(foodbankAugContents.kpi5 >= '0' && foodbankAugContents.kpi5 <= '92.4')?'red':(foodbankAugContents.kpi5 > '92.4' && foodbankAugContents.kpi5 <= '123.2')?'orange':(foodbankAugContents.kpi5 > '123.2' && foodbankAugContents.kpi5 < '154')?'yellow-7':(foodbankAugContents.kpi5 >= '154' && foodbankAugContents.kpi5 < '184.8')?'green':(foodbankAugContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi6 == null)?'grey-2':(foodbankAugContents.kpi6 >= '0' && foodbankAugContents.kpi6 <= '14.7')?'red':(foodbankAugContents.kpi6 > '14.7' && foodbankAugContents.kpi6 <= '19.6')?'orange':(foodbankAugContents.kpi6 > '19.6' && foodbankAugContents.kpi6 < '24.5')?'yellow-7':(foodbankAugContents.kpi6 >= '24.5' && foodbankAugContents.kpi6 < '29.4')?'green':(foodbankAugContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankSepContents.kpi1 == null)?'grey-2':(foodbankSepContents.kpi1 >= '0' && foodbankSepContents.kpi1 <= '238.8')?'red':(foodbankSepContents.kpi1 > '238.8' && foodbankSepContents.kpi1 <= '318.4')?'orange':(foodbankSepContents.kpi1 > '318.4' && foodbankSepContents.kpi1 < '398')?'yellow-7':(foodbankSepContents.kpi1 >= '398' && foodbankSepContents.kpi1 < '477.6')?'green':(foodbankSepContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi2 == null)?'grey-2':(foodbankSepContents.kpi2 >= '0' && foodbankSepContents.kpi2 <= '244.2')?'red':(foodbankSepContents.kpi2 > '244.2' && foodbankSepContents.kpi2 <= '325.6')?'orange':(foodbankSepContents.kpi2 > '325.6' && foodbankSepContents.kpi2 < '407')?'yellow-7':(foodbankSepContents.kpi2 >= '407' && foodbankSepContents.kpi2 < '488.4')?'green':(foodbankSepContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi3 == null)?'grey-2':(foodbankSepContents.kpi3 >= '0' && foodbankSepContents.kpi3 <= '524.25')?'red':(foodbankSepContents.kpi3 > '524.25' && foodbankSepContents.kpi3 <= '699')?'orange':(foodbankSepContents.kpi3 > '699' && foodbankSepContents.kpi3 < '873.75')?'yellow-7':(foodbankSepContents.kpi3 >= '873.75' && foodbankSepContents.kpi3 < '1048.5')?'green':(foodbankSepContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi4 == null)?'grey-2':(foodbankSepContents.kpi4 >= '0' && foodbankSepContents.kpi4 <= '12.45')?'red':(foodbankSepContents.kpi4 > '12.45' && foodbankSepContents.kpi4 <= '16.6')?'orange':(foodbankSepContents.kpi4 > '16.6' && foodbankSepContents.kpi4 < '20.75')?'yellow-7':(foodbankSepContents.kpi4 >= '20.75' && foodbankSepContents.kpi4 < '24.9')?'green':(foodbankSepContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi5 == null)?'grey-2':(foodbankSepContents.kpi5 >= '0' && foodbankSepContents.kpi5 <= '92.4')?'red':(foodbankSepContents.kpi5 > '92.4' && foodbankSepContents.kpi5 <= '123.2')?'orange':(foodbankSepContents.kpi5 > '123.2' && foodbankSepContents.kpi5 < '154')?'yellow-7':(foodbankSepContents.kpi5 >= '154' && foodbankSepContents.kpi5 < '184.8')?'green':(foodbankSepContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi6 == null)?'grey-2':(foodbankSepContents.kpi6 >= '0' && foodbankSepContents.kpi6 <= '14.7')?'red':(foodbankSepContents.kpi6 > '14.7' && foodbankSepContents.kpi6 <= '19.6')?'orange':(foodbankSepContents.kpi6 > '19.6' && foodbankSepContents.kpi6 < '24.5')?'yellow-7':(foodbankSepContents.kpi6 >= '24.5' && foodbankSepContents.kpi6 < '29.4')?'green':(foodbankSepContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankOctContents.kpi1 == null)?'grey-2':(foodbankOctContents.kpi1 >= '0' && foodbankOctContents.kpi1 <= '238.8')?'red':(foodbankOctContents.kpi1 > '238.8' && foodbankOctContents.kpi1 <= '318.4')?'orange':(foodbankOctContents.kpi1 > '318.4' && foodbankOctContents.kpi1 < '398')?'yellow-7':(foodbankOctContents.kpi1 >= '398' && foodbankOctContents.kpi1 < '477.6')?'green':(foodbankOctContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi2 == null)?'grey-2':(foodbankOctContents.kpi2 >= '0' && foodbankOctContents.kpi2 <= '244.2')?'red':(foodbankOctContents.kpi2 > '244.2' && foodbankOctContents.kpi2 <= '325.6')?'orange':(foodbankOctContents.kpi2 > '325.6' && foodbankOctContents.kpi2 < '407')?'yellow-7':(foodbankOctContents.kpi2 >= '407' && foodbankOctContents.kpi2 < '488.4')?'green':(foodbankOctContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi3 == null)?'grey-2':(foodbankOctContents.kpi3 >= '0' && foodbankOctContents.kpi3 <= '524.25')?'red':(foodbankOctContents.kpi3 > '524.25' && foodbankOctContents.kpi3 <= '699')?'orange':(foodbankOctContents.kpi3 > '699' && foodbankOctContents.kpi3 < '873.75')?'yellow-7':(foodbankOctContents.kpi3 >= '873.75' && foodbankOctContents.kpi3 < '1048.5')?'green':(foodbankOctContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi4 == null)?'grey-2':(foodbankOctContents.kpi4 >= '0' && foodbankOctContents.kpi4 <= '12.45')?'red':(foodbankOctContents.kpi4 > '12.45' && foodbankOctContents.kpi4 <= '16.6')?'orange':(foodbankOctContents.kpi4 > '16.6' && foodbankOctContents.kpi4 < '20.75')?'yellow-7':(foodbankOctContents.kpi4 >= '20.75' && foodbankOctContents.kpi4 < '24.9')?'green':(foodbankOctContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi5 == null)?'grey-2':(foodbankOctContents.kpi5 >= '0' && foodbankOctContents.kpi5 <= '92.4')?'red':(foodbankOctContents.kpi5 > '92.4' && foodbankOctContents.kpi5 <= '123.2')?'orange':(foodbankOctContents.kpi5 > '123.2' && foodbankOctContents.kpi5 < '154')?'yellow-7':(foodbankOctContents.kpi5 >= '154' && foodbankOctContents.kpi5 < '184.8')?'green':(foodbankOctContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi6 == null)?'grey-2':(foodbankOctContents.kpi6 >= '0' && foodbankOctContents.kpi6 <= '14.7')?'red':(foodbankOctContents.kpi6 > '14.7' && foodbankOctContents.kpi6 <= '19.6')?'orange':(foodbankOctContents.kpi6 > '19.6' && foodbankOctContents.kpi6 < '24.5')?'yellow-7':(foodbankOctContents.kpi6 >= '24.5' && foodbankOctContents.kpi6 < '29.4')?'green':(foodbankOctContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankNovContents.kpi1 == null)?'grey-2':(foodbankNovContents.kpi1 >= '0' && foodbankNovContents.kpi1 <= '238.8')?'red':(foodbankNovContents.kpi1 > '238.8' && foodbankNovContents.kpi1 <= '318.4')?'orange':(foodbankNovContents.kpi1 > '318.4' && foodbankNovContents.kpi1 < '398')?'yellow-7':(foodbankNovContents.kpi1 >= '398' && foodbankNovContents.kpi1 < '477.6')?'green':(foodbankNovContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi2 == null)?'grey-2':(foodbankNovContents.kpi2 >= '0' && foodbankNovContents.kpi2 <= '244.2')?'red':(foodbankNovContents.kpi2 > '244.2' && foodbankNovContents.kpi2 <= '325.6')?'orange':(foodbankNovContents.kpi2 > '325.6' && foodbankNovContents.kpi2 < '407')?'yellow-7':(foodbankNovContents.kpi2 >= '407' && foodbankNovContents.kpi2 < '488.4')?'green':(foodbankNovContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi3 == null)?'grey-2':(foodbankNovContents.kpi3 >= '0' && foodbankNovContents.kpi3 <= '524.25')?'red':(foodbankNovContents.kpi3 > '524.25' && foodbankNovContents.kpi3 <= '699')?'orange':(foodbankNovContents.kpi3 > '699' && foodbankNovContents.kpi3 < '873.75')?'yellow-7':(foodbankNovContents.kpi3 >= '873.75' && foodbankNovContents.kpi3 < '1048.5')?'green':(foodbankNovContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi4 == null)?'grey-2':(foodbankNovContents.kpi4 >= '0' && foodbankNovContents.kpi4 <= '12.45')?'red':(foodbankNovContents.kpi4 > '12.45' && foodbankNovContents.kpi4 <= '16.6')?'orange':(foodbankNovContents.kpi4 > '16.6' && foodbankNovContents.kpi4 < '20.75')?'yellow-7':(foodbankNovContents.kpi4 >= '20.75' && foodbankNovContents.kpi4 < '24.9')?'green':(foodbankNovContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi5 == null)?'grey-2':(foodbankNovContents.kpi5 >= '0' && foodbankNovContents.kpi5 <= '92.4')?'red':(foodbankNovContents.kpi5 > '92.4' && foodbankNovContents.kpi5 <= '123.2')?'orange':(foodbankNovContents.kpi5 > '123.2' && foodbankNovContents.kpi5 < '154')?'yellow-7':(foodbankNovContents.kpi5 >= '154' && foodbankNovContents.kpi5 < '184.8')?'green':(foodbankNovContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi6 == null)?'grey-2':(foodbankNovContents.kpi6 >= '0' && foodbankNovContents.kpi6 <= '14.7')?'red':(foodbankNovContents.kpi6 > '14.7' && foodbankNovContents.kpi6 <= '19.6')?'orange':(foodbankNovContents.kpi6 > '19.6' && foodbankNovContents.kpi6 < '24.5')?'yellow-7':(foodbankNovContents.kpi6 >= '24.5' && foodbankNovContents.kpi6 < '29.4')?'green':(foodbankNovContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankDecContents.kpi1 == null)?'grey-2':(foodbankDecContents.kpi1 >= '0' && foodbankDecContents.kpi1 <= '238.8')?'red':(foodbankDecContents.kpi1 > '238.8' && foodbankDecContents.kpi1 <= '318.4')?'orange':(foodbankDecContents.kpi1 > '318.4' && foodbankDecContents.kpi1 < '398')?'yellow-7':(foodbankDecContents.kpi1 >= '398' && foodbankDecContents.kpi1 < '477.6')?'green':(foodbankDecContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi2 == null)?'grey-2':(foodbankDecContents.kpi2 >= '0' && foodbankDecContents.kpi2 <= '244.2')?'red':(foodbankDecContents.kpi2 > '244.2' && foodbankDecContents.kpi2 <= '325.6')?'orange':(foodbankDecContents.kpi2 > '325.6' && foodbankDecContents.kpi2 < '407')?'yellow-7':(foodbankDecContents.kpi2 >= '407' && foodbankDecContents.kpi2 < '488.4')?'green':(foodbankDecContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi3 == null)?'grey-2':(foodbankDecContents.kpi3 >= '0' && foodbankDecContents.kpi3 <= '524.25')?'red':(foodbankDecContents.kpi3 > '524.25' && foodbankDecContents.kpi3 <= '699')?'orange':(foodbankDecContents.kpi3 > '699' && foodbankDecContents.kpi3 < '873.75')?'yellow-7':(foodbankDecContents.kpi3 >= '873.75' && foodbankDecContents.kpi3 < '1048.5')?'green':(foodbankDecContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi4 == null)?'grey-2':(foodbankDecContents.kpi4 >= '0' && foodbankDecContents.kpi4 <= '12.45')?'red':(foodbankDecContents.kpi4 > '12.45' && foodbankDecContents.kpi4 <= '16.6')?'orange':(foodbankDecContents.kpi4 > '16.6' && foodbankDecContents.kpi4 < '20.75')?'yellow-7':(foodbankDecContents.kpi4 >= '20.75' && foodbankDecContents.kpi4 < '24.9')?'green':(foodbankDecContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi5 == null)?'grey-2':(foodbankDecContents.kpi5 >= '0' && foodbankDecContents.kpi5 <= '92.4')?'red':(foodbankDecContents.kpi5 > '92.4' && foodbankDecContents.kpi5 <= '123.2')?'orange':(foodbankDecContents.kpi5 > '123.2' && foodbankDecContents.kpi5 < '154')?'yellow-7':(foodbankDecContents.kpi5 >= '154' && foodbankDecContents.kpi5 < '184.8')?'green':(foodbankDecContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi6 == null)?'grey-2':(foodbankDecContents.kpi6 >= '0' && foodbankDecContents.kpi6 <= '14.7')?'red':(foodbankDecContents.kpi6 > '14.7' && foodbankDecContents.kpi6 <= '19.6')?'orange':(foodbankDecContents.kpi6 > '19.6' && foodbankDecContents.kpi6 < '24.5')?'yellow-7':(foodbankDecContents.kpi6 >= '24.5' && foodbankDecContents.kpi6 < '29.4')?'green':(foodbankDecContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip>Activities (#)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 5
                                <q-tooltip># Households Receiving Deliveries</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 6
                                <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankJanContents.kpi1 == null)?'grey-2':(foodbankJanContents.kpi1 >= '0' && foodbankJanContents.kpi1 <= '238.8')?'red':(foodbankJanContents.kpi1 > '238.8' && foodbankJanContents.kpi1 <= '318.4')?'orange':(foodbankJanContents.kpi1 > '318.4' && foodbankJanContents.kpi1 < '398')?'yellow-7':(foodbankJanContents.kpi1 >= '398' && foodbankJanContents.kpi1 < '477.6')?'green':(foodbankJanContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi2 == null)?'grey-2':(foodbankJanContents.kpi2 >= '0' && foodbankJanContents.kpi2 <= '244.2')?'red':(foodbankJanContents.kpi2 > '244.2' && foodbankJanContents.kpi2 <= '325.6')?'orange':(foodbankJanContents.kpi2 > '325.6' && foodbankJanContents.kpi2 < '407')?'yellow-7':(foodbankJanContents.kpi2 >= '407' && foodbankJanContents.kpi2 < '488.4')?'green':(foodbankJanContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi3 == null)?'grey-2':(foodbankJanContents.kpi3 >= '0' && foodbankJanContents.kpi3 <= '524.25')?'red':(foodbankJanContents.kpi3 > '524.25' && foodbankJanContents.kpi3 <= '699')?'orange':(foodbankJanContents.kpi3 > '699' && foodbankJanContents.kpi3 < '873.75')?'yellow-7':(foodbankJanContents.kpi3 >= '873.75' && foodbankJanContents.kpi3 < '1048.5')?'green':(foodbankJanContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi4 == null)?'grey-2':(foodbankJanContents.kpi4 >= '0' && foodbankJanContents.kpi4 <= '12.45')?'red':(foodbankJanContents.kpi4 > '12.45' && foodbankJanContents.kpi4 <= '16.6')?'orange':(foodbankJanContents.kpi4 > '16.6' && foodbankJanContents.kpi4 < '20.75')?'yellow-7':(foodbankJanContents.kpi4 >= '20.75' && foodbankJanContents.kpi4 < '24.9')?'green':(foodbankJanContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi5 == null)?'grey-2':(foodbankJanContents.kpi5 >= '0' && foodbankJanContents.kpi5 <= '92.4')?'red':(foodbankJanContents.kpi5 > '92.4' && foodbankJanContents.kpi5 <= '123.2')?'orange':(foodbankJanContents.kpi5 > '123.2' && foodbankJanContents.kpi5 < '154')?'yellow-7':(foodbankJanContents.kpi5 >= '154' && foodbankJanContents.kpi5 < '184.8')?'green':(foodbankJanContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJanContents.kpi6 == null)?'grey-2':(foodbankJanContents.kpi6 >= '0' && foodbankJanContents.kpi6 <= '14.7')?'red':(foodbankJanContents.kpi6 > '14.7' && foodbankJanContents.kpi6 <= '19.6')?'orange':(foodbankJanContents.kpi6 > '19.6' && foodbankJanContents.kpi6 < '24.5')?'yellow-7':(foodbankJanContents.kpi6 >= '24.5' && foodbankJanContents.kpi6 < '29.4')?'green':(foodbankJanContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankJanContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankFebContents.kpi1 == null)?'grey-2':(foodbankFebContents.kpi1 >= '0' && foodbankFebContents.kpi1 <= '238.8')?'red':(foodbankFebContents.kpi1 > '238.8' && foodbankFebContents.kpi1 <= '318.4')?'orange':(foodbankFebContents.kpi1 > '318.4' && foodbankFebContents.kpi1 < '398')?'yellow-7':(foodbankFebContents.kpi1 >= '398' && foodbankFebContents.kpi1 < '477.6')?'green':(foodbankFebContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi2 == null)?'grey-2':(foodbankFebContents.kpi2 >= '0' && foodbankFebContents.kpi2 <= '244.2')?'red':(foodbankFebContents.kpi2 > '244.2' && foodbankFebContents.kpi2 <= '325.6')?'orange':(foodbankFebContents.kpi2 > '325.6' && foodbankFebContents.kpi2 < '407')?'yellow-7':(foodbankFebContents.kpi2 >= '407' && foodbankFebContents.kpi2 < '488.4')?'green':(foodbankFebContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi3 == null)?'grey-2':(foodbankFebContents.kpi3 >= '0' && foodbankFebContents.kpi3 <= '524.25')?'red':(foodbankFebContents.kpi3 > '524.25' && foodbankFebContents.kpi3 <= '699')?'orange':(foodbankFebContents.kpi3 > '699' && foodbankFebContents.kpi3 < '873.75')?'yellow-7':(foodbankFebContents.kpi3 >= '873.75' && foodbankFebContents.kpi3 < '1048.5')?'green':(foodbankFebContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi4 == null)?'grey-2':(foodbankFebContents.kpi4 >= '0' && foodbankFebContents.kpi4 <= '12.45')?'red':(foodbankFebContents.kpi4 > '12.45' && foodbankFebContents.kpi4 <= '16.6')?'orange':(foodbankFebContents.kpi4 > '16.6' && foodbankFebContents.kpi4 < '20.75')?'yellow-7':(foodbankFebContents.kpi4 >= '20.75' && foodbankFebContents.kpi4 < '24.9')?'green':(foodbankFebContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi5 == null)?'grey-2':(foodbankFebContents.kpi5 >= '0' && foodbankFebContents.kpi5 <= '92.4')?'red':(foodbankFebContents.kpi5 > '92.4' && foodbankFebContents.kpi5 <= '123.2')?'orange':(foodbankFebContents.kpi5 > '123.2' && foodbankFebContents.kpi5 < '154')?'yellow-7':(foodbankFebContents.kpi5 >= '154' && foodbankFebContents.kpi5 < '184.8')?'green':(foodbankFebContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankFebContents.kpi6 == null)?'grey-2':(foodbankFebContents.kpi6 >= '0' && foodbankFebContents.kpi6 <= '14.7')?'red':(foodbankFebContents.kpi6 > '14.7' && foodbankFebContents.kpi6 <= '19.6')?'orange':(foodbankFebContents.kpi6 > '19.6' && foodbankFebContents.kpi6 < '24.5')?'yellow-7':(foodbankFebContents.kpi6 >= '24.5' && foodbankFebContents.kpi6 < '29.4')?'green':(foodbankFebContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankFebContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankMarContents.kpi1 == null)?'grey-2':(foodbankMarContents.kpi1 >= '0' && foodbankMarContents.kpi1 <= '238.8')?'red':(foodbankMarContents.kpi1 > '238.8' && foodbankMarContents.kpi1 <= '318.4')?'orange':(foodbankMarContents.kpi1 > '318.4' && foodbankMarContents.kpi1 < '398')?'yellow-7':(foodbankMarContents.kpi1 >= '398' && foodbankMarContents.kpi1 < '477.6')?'green':(foodbankMarContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi2 == null)?'grey-2':(foodbankMarContents.kpi2 >= '0' && foodbankMarContents.kpi2 <= '244.2')?'red':(foodbankMarContents.kpi2 > '244.2' && foodbankMarContents.kpi2 <= '325.6')?'orange':(foodbankMarContents.kpi2 > '325.6' && foodbankMarContents.kpi2 < '407')?'yellow-7':(foodbankMarContents.kpi2 >= '407' && foodbankMarContents.kpi2 < '488.4')?'green':(foodbankMarContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi3 == null)?'grey-2':(foodbankMarContents.kpi3 >= '0' && foodbankMarContents.kpi3 <= '524.25')?'red':(foodbankMarContents.kpi3 > '524.25' && foodbankMarContents.kpi3 <= '699')?'orange':(foodbankMarContents.kpi3 > '699' && foodbankMarContents.kpi3 < '873.75')?'yellow-7':(foodbankMarContents.kpi3 >= '873.75' && foodbankMarContents.kpi3 < '1048.5')?'green':(foodbankMarContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi4 == null)?'grey-2':(foodbankMarContents.kpi4 >= '0' && foodbankMarContents.kpi4 <= '12.45')?'red':(foodbankMarContents.kpi4 > '12.45' && foodbankMarContents.kpi4 <= '16.6')?'orange':(foodbankMarContents.kpi4 > '16.6' && foodbankMarContents.kpi4 < '20.75')?'yellow-7':(foodbankMarContents.kpi4 >= '20.75' && foodbankMarContents.kpi4 < '24.9')?'green':(foodbankMarContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi5 == null)?'grey-2':(foodbankMarContents.kpi5 >= '0' && foodbankMarContents.kpi5 <= '92.4')?'red':(foodbankMarContents.kpi5 > '92.4' && foodbankMarContents.kpi5 <= '123.2')?'orange':(foodbankMarContents.kpi5 > '123.2' && foodbankMarContents.kpi5 < '154')?'yellow-7':(foodbankMarContents.kpi5 >= '154' && foodbankMarContents.kpi5 < '184.8')?'green':(foodbankMarContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMarContents.kpi6 == null)?'grey-2':(foodbankMarContents.kpi6 >= '0' && foodbankMarContents.kpi6 <= '14.7')?'red':(foodbankMarContents.kpi6 > '14.7' && foodbankMarContents.kpi6 <= '19.6')?'orange':(foodbankMarContents.kpi6 > '19.6' && foodbankMarContents.kpi6 < '24.5')?'yellow-7':(foodbankMarContents.kpi6 >= '24.5' && foodbankMarContents.kpi6 < '29.4')?'green':(foodbankMarContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankMarContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankAprContents.kpi1 == null)?'grey-2':(foodbankAprContents.kpi1 >= '0' && foodbankAprContents.kpi1 <= '238.8')?'red':(foodbankAprContents.kpi1 > '238.8' && foodbankAprContents.kpi1 <= '318.4')?'orange':(foodbankAprContents.kpi1 > '318.4' && foodbankAprContents.kpi1 < '398')?'yellow-7':(foodbankAprContents.kpi1 >= '398' && foodbankAprContents.kpi1 < '477.6')?'green':(foodbankAprContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi2 == null)?'grey-2':(foodbankAprContents.kpi2 >= '0' && foodbankAprContents.kpi2 <= '244.2')?'red':(foodbankAprContents.kpi2 > '244.2' && foodbankAprContents.kpi2 <= '325.6')?'orange':(foodbankAprContents.kpi2 > '325.6' && foodbankAprContents.kpi2 < '407')?'yellow-7':(foodbankAprContents.kpi2 >= '407' && foodbankAprContents.kpi2 < '488.4')?'green':(foodbankAprContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi3 == null)?'grey-2':(foodbankAprContents.kpi3 >= '0' && foodbankAprContents.kpi3 <= '524.25')?'red':(foodbankAprContents.kpi3 > '524.25' && foodbankAprContents.kpi3 <= '699')?'orange':(foodbankAprContents.kpi3 > '699' && foodbankAprContents.kpi3 < '873.75')?'yellow-7':(foodbankAprContents.kpi3 >= '873.75' && foodbankAprContents.kpi3 < '1048.5')?'green':(foodbankAprContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi4 == null)?'grey-2':(foodbankAprContents.kpi4 >= '0' && foodbankAprContents.kpi4 <= '12.45')?'red':(foodbankAprContents.kpi4 > '12.45' && foodbankAprContents.kpi4 <= '16.6')?'orange':(foodbankAprContents.kpi4 > '16.6' && foodbankAprContents.kpi4 < '20.75')?'yellow-7':(foodbankAprContents.kpi4 >= '20.75' && foodbankAprContents.kpi4 < '24.9')?'green':(foodbankAprContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi5 == null)?'grey-2':(foodbankAprContents.kpi5 >= '0' && foodbankAprContents.kpi5 <= '92.4')?'red':(foodbankAprContents.kpi5 > '92.4' && foodbankAprContents.kpi5 <= '123.2')?'orange':(foodbankAprContents.kpi5 > '123.2' && foodbankAprContents.kpi5 < '154')?'yellow-7':(foodbankAprContents.kpi5 >= '154' && foodbankAprContents.kpi5 < '184.8')?'green':(foodbankAprContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAprContents.kpi6 == null)?'grey-2':(foodbankAprContents.kpi6 >= '0' && foodbankAprContents.kpi6 <= '14.7')?'red':(foodbankAprContents.kpi6 > '14.7' && foodbankAprContents.kpi6 <= '19.6')?'orange':(foodbankAprContents.kpi6 > '19.6' && foodbankAprContents.kpi6 < '24.5')?'yellow-7':(foodbankAprContents.kpi6 >= '24.5' && foodbankAprContents.kpi6 < '29.4')?'green':(foodbankAprContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankAprContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankMayContents.kpi1 == null)?'grey-2':(foodbankMayContents.kpi1 >= '0' && foodbankMayContents.kpi1 <= '238.8')?'red':(foodbankMayContents.kpi1 > '238.8' && foodbankMayContents.kpi1 <= '318.4')?'orange':(foodbankMayContents.kpi1 > '318.4' && foodbankMayContents.kpi1 < '398')?'yellow-7':(foodbankMayContents.kpi1 >= '398' && foodbankMayContents.kpi1 < '477.6')?'green':(foodbankMayContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi2 == null)?'grey-2':(foodbankMayContents.kpi2 >= '0' && foodbankMayContents.kpi2 <= '244.2')?'red':(foodbankMayContents.kpi2 > '244.2' && foodbankMayContents.kpi2 <= '325.6')?'orange':(foodbankMayContents.kpi2 > '325.6' && foodbankMayContents.kpi2 < '407')?'yellow-7':(foodbankMayContents.kpi2 >= '407' && foodbankMayContents.kpi2 < '488.4')?'green':(foodbankMayContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi3 == null)?'grey-2':(foodbankMayContents.kpi3 >= '0' && foodbankMayContents.kpi3 <= '524.25')?'red':(foodbankMayContents.kpi3 > '524.25' && foodbankMayContents.kpi3 <= '699')?'orange':(foodbankMayContents.kpi3 > '699' && foodbankMayContents.kpi3 < '873.75')?'yellow-7':(foodbankMayContents.kpi3 >= '873.75' && foodbankMayContents.kpi3 < '1048.5')?'green':(foodbankMayContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi4 == null)?'grey-2':(foodbankMayContents.kpi4 >= '0' && foodbankMayContents.kpi4 <= '12.45')?'red':(foodbankMayContents.kpi4 > '12.45' && foodbankMayContents.kpi4 <= '16.6')?'orange':(foodbankMayContents.kpi4 > '16.6' && foodbankMayContents.kpi4 < '20.75')?'yellow-7':(foodbankMayContents.kpi4 >= '20.75' && foodbankMayContents.kpi4 < '24.9')?'green':(foodbankMayContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi5 == null)?'grey-2':(foodbankMayContents.kpi5 >= '0' && foodbankMayContents.kpi5 <= '92.4')?'red':(foodbankMayContents.kpi5 > '92.4' && foodbankMayContents.kpi5 <= '123.2')?'orange':(foodbankMayContents.kpi5 > '123.2' && foodbankMayContents.kpi5 < '154')?'yellow-7':(foodbankMayContents.kpi5 >= '154' && foodbankMayContents.kpi5 < '184.8')?'green':(foodbankMayContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankMayContents.kpi6 == null)?'grey-2':(foodbankMayContents.kpi6 >= '0' && foodbankMayContents.kpi6 <= '14.7')?'red':(foodbankMayContents.kpi6 > '14.7' && foodbankMayContents.kpi6 <= '19.6')?'orange':(foodbankMayContents.kpi6 > '19.6' && foodbankMayContents.kpi6 < '24.5')?'yellow-7':(foodbankMayContents.kpi6 >= '24.5' && foodbankMayContents.kpi6 < '29.4')?'green':(foodbankMayContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankMayContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankJunContents.kpi1 == null)?'grey-2':(foodbankJunContents.kpi1 >= '0' && foodbankJunContents.kpi1 <= '238.8')?'red':(foodbankJunContents.kpi1 > '238.8' && foodbankJunContents.kpi1 <= '318.4')?'orange':(foodbankJunContents.kpi1 > '318.4' && foodbankJunContents.kpi1 < '398')?'yellow-7':(foodbankJunContents.kpi1 >= '398' && foodbankJunContents.kpi1 < '477.6')?'green':(foodbankJunContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi2 == null)?'grey-2':(foodbankJunContents.kpi2 >= '0' && foodbankJunContents.kpi2 <= '244.2')?'red':(foodbankJunContents.kpi2 > '244.2' && foodbankJunContents.kpi2 <= '325.6')?'orange':(foodbankJunContents.kpi2 > '325.6' && foodbankJunContents.kpi2 < '407')?'yellow-7':(foodbankJunContents.kpi2 >= '407' && foodbankJunContents.kpi2 < '488.4')?'green':(foodbankJunContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi3 == null)?'grey-2':(foodbankJunContents.kpi3 >= '0' && foodbankJunContents.kpi3 <= '524.25')?'red':(foodbankJunContents.kpi3 > '524.25' && foodbankJunContents.kpi3 <= '699')?'orange':(foodbankJunContents.kpi3 > '699' && foodbankJunContents.kpi3 < '873.75')?'yellow-7':(foodbankJunContents.kpi3 >= '873.75' && foodbankJunContents.kpi3 < '1048.5')?'green':(foodbankJunContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi4 == null)?'grey-2':(foodbankJunContents.kpi4 >= '0' && foodbankJunContents.kpi4 <= '12.45')?'red':(foodbankJunContents.kpi4 > '12.45' && foodbankJunContents.kpi4 <= '16.6')?'orange':(foodbankJunContents.kpi4 > '16.6' && foodbankJunContents.kpi4 < '20.75')?'yellow-7':(foodbankJunContents.kpi4 >= '20.75' && foodbankJunContents.kpi4 < '24.9')?'green':(foodbankJunContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi5 == null)?'grey-2':(foodbankJunContents.kpi5 >= '0' && foodbankJunContents.kpi5 <= '92.4')?'red':(foodbankJunContents.kpi5 > '92.4' && foodbankJunContents.kpi5 <= '123.2')?'orange':(foodbankJunContents.kpi5 > '123.2' && foodbankJunContents.kpi5 < '154')?'yellow-7':(foodbankJunContents.kpi5 >= '154' && foodbankJunContents.kpi5 < '184.8')?'green':(foodbankJunContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJunContents.kpi6 == null)?'grey-2':(foodbankJunContents.kpi6 >= '0' && foodbankJunContents.kpi6 <= '14.7')?'red':(foodbankJunContents.kpi6 > '14.7' && foodbankJunContents.kpi6 <= '19.6')?'orange':(foodbankJunContents.kpi6 > '19.6' && foodbankJunContents.kpi6 < '24.5')?'yellow-7':(foodbankJunContents.kpi6 >= '24.5' && foodbankJunContents.kpi6 < '29.4')?'green':(foodbankJunContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankJunContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankJulContents.kpi1 == null)?'grey-2':(foodbankJulContents.kpi1 >= '0' && foodbankJulContents.kpi1 <= '238.8')?'red':(foodbankJulContents.kpi1 > '238.8' && foodbankJulContents.kpi1 <= '318.4')?'orange':(foodbankJulContents.kpi1 > '318.4' && foodbankJulContents.kpi1 < '398')?'yellow-7':(foodbankJulContents.kpi1 >= '398' && foodbankJulContents.kpi1 < '477.6')?'green':(foodbankJulContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi2 == null)?'grey-2':(foodbankJulContents.kpi2 >= '0' && foodbankJulContents.kpi2 <= '244.2')?'red':(foodbankJulContents.kpi2 > '244.2' && foodbankJulContents.kpi2 <= '325.6')?'orange':(foodbankJulContents.kpi2 > '325.6' && foodbankJulContents.kpi2 < '407')?'yellow-7':(foodbankJulContents.kpi2 >= '407' && foodbankJulContents.kpi2 < '488.4')?'green':(foodbankJulContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi3 == null)?'grey-2':(foodbankJulContents.kpi3 >= '0' && foodbankJulContents.kpi3 <= '524.25')?'red':(foodbankJulContents.kpi3 > '524.25' && foodbankJulContents.kpi3 <= '699')?'orange':(foodbankJulContents.kpi3 > '699' && foodbankJulContents.kpi3 < '873.75')?'yellow-7':(foodbankJulContents.kpi3 >= '873.75' && foodbankJulContents.kpi3 < '1048.5')?'green':(foodbankJulContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi4 == null)?'grey-2':(foodbankJulContents.kpi4 >= '0' && foodbankJulContents.kpi4 <= '12.45')?'red':(foodbankJulContents.kpi4 > '12.45' && foodbankJulContents.kpi4 <= '16.6')?'orange':(foodbankJulContents.kpi4 > '16.6' && foodbankJulContents.kpi4 < '20.75')?'yellow-7':(foodbankJulContents.kpi4 >= '20.75' && foodbankJulContents.kpi4 < '24.9')?'green':(foodbankJulContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi5 == null)?'grey-2':(foodbankJulContents.kpi5 >= '0' && foodbankJulContents.kpi5 <= '92.4')?'red':(foodbankJulContents.kpi5 > '92.4' && foodbankJulContents.kpi5 <= '123.2')?'orange':(foodbankJulContents.kpi5 > '123.2' && foodbankJulContents.kpi5 < '154')?'yellow-7':(foodbankJulContents.kpi5 >= '154' && foodbankJulContents.kpi5 < '184.8')?'green':(foodbankJulContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankJulContents.kpi6 == null)?'grey-2':(foodbankJulContents.kpi6 >= '0' && foodbankJulContents.kpi6 <= '14.7')?'red':(foodbankJulContents.kpi6 > '14.7' && foodbankJulContents.kpi6 <= '19.6')?'orange':(foodbankJulContents.kpi6 > '19.6' && foodbankJulContents.kpi6 < '24.5')?'yellow-7':(foodbankJulContents.kpi6 >= '24.5' && foodbankJulContents.kpi6 < '29.4')?'green':(foodbankJulContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankJulContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankAugContents.kpi1 == null)?'grey-2':(foodbankAugContents.kpi1 >= '0' && foodbankAugContents.kpi1 <= '238.8')?'red':(foodbankAugContents.kpi1 > '238.8' && foodbankAugContents.kpi1 <= '318.4')?'orange':(foodbankAugContents.kpi1 > '318.4' && foodbankAugContents.kpi1 < '398')?'yellow-7':(foodbankAugContents.kpi1 >= '398' && foodbankAugContents.kpi1 < '477.6')?'green':(foodbankAugContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi2 == null)?'grey-2':(foodbankAugContents.kpi2 >= '0' && foodbankAugContents.kpi2 <= '244.2')?'red':(foodbankAugContents.kpi2 > '244.2' && foodbankAugContents.kpi2 <= '325.6')?'orange':(foodbankAugContents.kpi2 > '325.6' && foodbankAugContents.kpi2 < '407')?'yellow-7':(foodbankAugContents.kpi2 >= '407' && foodbankAugContents.kpi2 < '488.4')?'green':(foodbankAugContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi3 == null)?'grey-2':(foodbankAugContents.kpi3 >= '0' && foodbankAugContents.kpi3 <= '524.25')?'red':(foodbankAugContents.kpi3 > '524.25' && foodbankAugContents.kpi3 <= '699')?'orange':(foodbankAugContents.kpi3 > '699' && foodbankAugContents.kpi3 < '873.75')?'yellow-7':(foodbankAugContents.kpi3 >= '873.75' && foodbankAugContents.kpi3 < '1048.5')?'green':(foodbankAugContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi4 == null)?'grey-2':(foodbankAugContents.kpi4 >= '0' && foodbankAugContents.kpi4 <= '12.45')?'red':(foodbankAugContents.kpi4 > '12.45' && foodbankAugContents.kpi4 <= '16.6')?'orange':(foodbankAugContents.kpi4 > '16.6' && foodbankAugContents.kpi4 < '20.75')?'yellow-7':(foodbankAugContents.kpi4 >= '20.75' && foodbankAugContents.kpi4 < '24.9')?'green':(foodbankAugContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi5 == null)?'grey-2':(foodbankAugContents.kpi5 >= '0' && foodbankAugContents.kpi5 <= '92.4')?'red':(foodbankAugContents.kpi5 > '92.4' && foodbankAugContents.kpi5 <= '123.2')?'orange':(foodbankAugContents.kpi5 > '123.2' && foodbankAugContents.kpi5 < '154')?'yellow-7':(foodbankAugContents.kpi5 >= '154' && foodbankAugContents.kpi5 < '184.8')?'green':(foodbankAugContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankAugContents.kpi6 == null)?'grey-2':(foodbankAugContents.kpi6 >= '0' && foodbankAugContents.kpi6 <= '14.7')?'red':(foodbankAugContents.kpi6 > '14.7' && foodbankAugContents.kpi6 <= '19.6')?'orange':(foodbankAugContents.kpi6 > '19.6' && foodbankAugContents.kpi6 < '24.5')?'yellow-7':(foodbankAugContents.kpi6 >= '24.5' && foodbankAugContents.kpi6 < '29.4')?'green':(foodbankAugContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankAugContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankSepContents.kpi1 == null)?'grey-2':(foodbankSepContents.kpi1 >= '0' && foodbankSepContents.kpi1 <= '238.8')?'red':(foodbankSepContents.kpi1 > '238.8' && foodbankSepContents.kpi1 <= '318.4')?'orange':(foodbankSepContents.kpi1 > '318.4' && foodbankSepContents.kpi1 < '398')?'yellow-7':(foodbankSepContents.kpi1 >= '398' && foodbankSepContents.kpi1 < '477.6')?'green':(foodbankSepContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi2 == null)?'grey-2':(foodbankSepContents.kpi2 >= '0' && foodbankSepContents.kpi2 <= '244.2')?'red':(foodbankSepContents.kpi2 > '244.2' && foodbankSepContents.kpi2 <= '325.6')?'orange':(foodbankSepContents.kpi2 > '325.6' && foodbankSepContents.kpi2 < '407')?'yellow-7':(foodbankSepContents.kpi2 >= '407' && foodbankSepContents.kpi2 < '488.4')?'green':(foodbankSepContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi3 == null)?'grey-2':(foodbankSepContents.kpi3 >= '0' && foodbankSepContents.kpi3 <= '524.25')?'red':(foodbankSepContents.kpi3 > '524.25' && foodbankSepContents.kpi3 <= '699')?'orange':(foodbankSepContents.kpi3 > '699' && foodbankSepContents.kpi3 < '873.75')?'yellow-7':(foodbankSepContents.kpi3 >= '873.75' && foodbankSepContents.kpi3 < '1048.5')?'green':(foodbankSepContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi4 == null)?'grey-2':(foodbankSepContents.kpi4 >= '0' && foodbankSepContents.kpi4 <= '12.45')?'red':(foodbankSepContents.kpi4 > '12.45' && foodbankSepContents.kpi4 <= '16.6')?'orange':(foodbankSepContents.kpi4 > '16.6' && foodbankSepContents.kpi4 < '20.75')?'yellow-7':(foodbankSepContents.kpi4 >= '20.75' && foodbankSepContents.kpi4 < '24.9')?'green':(foodbankSepContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi5 == null)?'grey-2':(foodbankSepContents.kpi5 >= '0' && foodbankSepContents.kpi5 <= '92.4')?'red':(foodbankSepContents.kpi5 > '92.4' && foodbankSepContents.kpi5 <= '123.2')?'orange':(foodbankSepContents.kpi5 > '123.2' && foodbankSepContents.kpi5 < '154')?'yellow-7':(foodbankSepContents.kpi5 >= '154' && foodbankSepContents.kpi5 < '184.8')?'green':(foodbankSepContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankSepContents.kpi6 == null)?'grey-2':(foodbankSepContents.kpi6 >= '0' && foodbankSepContents.kpi6 <= '14.7')?'red':(foodbankSepContents.kpi6 > '14.7' && foodbankSepContents.kpi6 <= '19.6')?'orange':(foodbankSepContents.kpi6 > '19.6' && foodbankSepContents.kpi6 < '24.5')?'yellow-7':(foodbankSepContents.kpi6 >= '24.5' && foodbankSepContents.kpi6 < '29.4')?'green':(foodbankSepContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankSepContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankOctContents.kpi1 == null)?'grey-2':(foodbankOctContents.kpi1 >= '0' && foodbankOctContents.kpi1 <= '238.8')?'red':(foodbankOctContents.kpi1 > '238.8' && foodbankOctContents.kpi1 <= '318.4')?'orange':(foodbankOctContents.kpi1 > '318.4' && foodbankOctContents.kpi1 < '398')?'yellow-7':(foodbankOctContents.kpi1 >= '398' && foodbankOctContents.kpi1 < '477.6')?'green':(foodbankOctContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi2 == null)?'grey-2':(foodbankOctContents.kpi2 >= '0' && foodbankOctContents.kpi2 <= '244.2')?'red':(foodbankOctContents.kpi2 > '244.2' && foodbankOctContents.kpi2 <= '325.6')?'orange':(foodbankOctContents.kpi2 > '325.6' && foodbankOctContents.kpi2 < '407')?'yellow-7':(foodbankOctContents.kpi2 >= '407' && foodbankOctContents.kpi2 < '488.4')?'green':(foodbankOctContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi3 == null)?'grey-2':(foodbankOctContents.kpi3 >= '0' && foodbankOctContents.kpi3 <= '524.25')?'red':(foodbankOctContents.kpi3 > '524.25' && foodbankOctContents.kpi3 <= '699')?'orange':(foodbankOctContents.kpi3 > '699' && foodbankOctContents.kpi3 < '873.75')?'yellow-7':(foodbankOctContents.kpi3 >= '873.75' && foodbankOctContents.kpi3 < '1048.5')?'green':(foodbankOctContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi4 == null)?'grey-2':(foodbankOctContents.kpi4 >= '0' && foodbankOctContents.kpi4 <= '12.45')?'red':(foodbankOctContents.kpi4 > '12.45' && foodbankOctContents.kpi4 <= '16.6')?'orange':(foodbankOctContents.kpi4 > '16.6' && foodbankOctContents.kpi4 < '20.75')?'yellow-7':(foodbankOctContents.kpi4 >= '20.75' && foodbankOctContents.kpi4 < '24.9')?'green':(foodbankOctContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi5 == null)?'grey-2':(foodbankOctContents.kpi5 >= '0' && foodbankOctContents.kpi5 <= '92.4')?'red':(foodbankOctContents.kpi5 > '92.4' && foodbankOctContents.kpi5 <= '123.2')?'orange':(foodbankOctContents.kpi5 > '123.2' && foodbankOctContents.kpi5 < '154')?'yellow-7':(foodbankOctContents.kpi5 >= '154' && foodbankOctContents.kpi5 < '184.8')?'green':(foodbankOctContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankOctContents.kpi6 == null)?'grey-2':(foodbankOctContents.kpi6 >= '0' && foodbankOctContents.kpi6 <= '14.7')?'red':(foodbankOctContents.kpi6 > '14.7' && foodbankOctContents.kpi6 <= '19.6')?'orange':(foodbankOctContents.kpi6 > '19.6' && foodbankOctContents.kpi6 < '24.5')?'yellow-7':(foodbankOctContents.kpi6 >= '24.5' && foodbankOctContents.kpi6 < '29.4')?'green':(foodbankOctContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankOctContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankNovContents.kpi1 == null)?'grey-2':(foodbankNovContents.kpi1 >= '0' && foodbankNovContents.kpi1 <= '238.8')?'red':(foodbankNovContents.kpi1 > '238.8' && foodbankNovContents.kpi1 <= '318.4')?'orange':(foodbankNovContents.kpi1 > '318.4' && foodbankNovContents.kpi1 < '398')?'yellow-7':(foodbankNovContents.kpi1 >= '398' && foodbankNovContents.kpi1 < '477.6')?'green':(foodbankNovContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi2 == null)?'grey-2':(foodbankNovContents.kpi2 >= '0' && foodbankNovContents.kpi2 <= '244.2')?'red':(foodbankNovContents.kpi2 > '244.2' && foodbankNovContents.kpi2 <= '325.6')?'orange':(foodbankNovContents.kpi2 > '325.6' && foodbankNovContents.kpi2 < '407')?'yellow-7':(foodbankNovContents.kpi2 >= '407' && foodbankNovContents.kpi2 < '488.4')?'green':(foodbankNovContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi3 == null)?'grey-2':(foodbankNovContents.kpi3 >= '0' && foodbankNovContents.kpi3 <= '524.25')?'red':(foodbankNovContents.kpi3 > '524.25' && foodbankNovContents.kpi3 <= '699')?'orange':(foodbankNovContents.kpi3 > '699' && foodbankNovContents.kpi3 < '873.75')?'yellow-7':(foodbankNovContents.kpi3 >= '873.75' && foodbankNovContents.kpi3 < '1048.5')?'green':(foodbankNovContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi4 == null)?'grey-2':(foodbankNovContents.kpi4 >= '0' && foodbankNovContents.kpi4 <= '12.45')?'red':(foodbankNovContents.kpi4 > '12.45' && foodbankNovContents.kpi4 <= '16.6')?'orange':(foodbankNovContents.kpi4 > '16.6' && foodbankNovContents.kpi4 < '20.75')?'yellow-7':(foodbankNovContents.kpi4 >= '20.75' && foodbankNovContents.kpi4 < '24.9')?'green':(foodbankNovContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi5 == null)?'grey-2':(foodbankNovContents.kpi5 >= '0' && foodbankNovContents.kpi5 <= '92.4')?'red':(foodbankNovContents.kpi5 > '92.4' && foodbankNovContents.kpi5 <= '123.2')?'orange':(foodbankNovContents.kpi5 > '123.2' && foodbankNovContents.kpi5 < '154')?'yellow-7':(foodbankNovContents.kpi5 >= '154' && foodbankNovContents.kpi5 < '184.8')?'green':(foodbankNovContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankNovContents.kpi6 == null)?'grey-2':(foodbankNovContents.kpi6 >= '0' && foodbankNovContents.kpi6 <= '14.7')?'red':(foodbankNovContents.kpi6 > '14.7' && foodbankNovContents.kpi6 <= '19.6')?'orange':(foodbankNovContents.kpi6 > '19.6' && foodbankNovContents.kpi6 < '24.5')?'yellow-7':(foodbankNovContents.kpi6 >= '24.5' && foodbankNovContents.kpi6 < '29.4')?'green':(foodbankNovContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankNovContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
                              :color="(foodbankDecContents.kpi1 == null)?'grey-2':(foodbankDecContents.kpi1 >= '0' && foodbankDecContents.kpi1 <= '238.8')?'red':(foodbankDecContents.kpi1 > '238.8' && foodbankDecContents.kpi1 <= '318.4')?'orange':(foodbankDecContents.kpi1 > '318.4' && foodbankDecContents.kpi1 < '398')?'yellow-7':(foodbankDecContents.kpi1 >= '398' && foodbankDecContents.kpi1 < '477.6')?'green':(foodbankDecContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi2 == null)?'grey-2':(foodbankDecContents.kpi2 >= '0' && foodbankDecContents.kpi2 <= '244.2')?'red':(foodbankDecContents.kpi2 > '244.2' && foodbankDecContents.kpi2 <= '325.6')?'orange':(foodbankDecContents.kpi2 > '325.6' && foodbankDecContents.kpi2 < '407')?'yellow-7':(foodbankDecContents.kpi2 >= '407' && foodbankDecContents.kpi2 < '488.4')?'green':(foodbankDecContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi3 == null)?'grey-2':(foodbankDecContents.kpi3 >= '0' && foodbankDecContents.kpi3 <= '524.25')?'red':(foodbankDecContents.kpi3 > '524.25' && foodbankDecContents.kpi3 <= '699')?'orange':(foodbankDecContents.kpi3 > '699' && foodbankDecContents.kpi3 < '873.75')?'yellow-7':(foodbankDecContents.kpi3 >= '873.75' && foodbankDecContents.kpi3 < '1048.5')?'green':(foodbankDecContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi4 == null)?'grey-2':(foodbankDecContents.kpi4 >= '0' && foodbankDecContents.kpi4 <= '12.45')?'red':(foodbankDecContents.kpi4 > '12.45' && foodbankDecContents.kpi4 <= '16.6')?'orange':(foodbankDecContents.kpi4 > '16.6' && foodbankDecContents.kpi4 < '20.75')?'yellow-7':(foodbankDecContents.kpi4 >= '20.75' && foodbankDecContents.kpi4 < '24.9')?'green':(foodbankDecContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi5 == null)?'grey-2':(foodbankDecContents.kpi5 >= '0' && foodbankDecContents.kpi5 <= '92.4')?'red':(foodbankDecContents.kpi5 > '92.4' && foodbankDecContents.kpi5 <= '123.2')?'orange':(foodbankDecContents.kpi5 > '123.2' && foodbankDecContents.kpi5 < '154')?'yellow-7':(foodbankDecContents.kpi5 >= '154' && foodbankDecContents.kpi5 < '184.8')?'green':(foodbankDecContents.kpi5 >= '184.8'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi5}}
                              <q-tooltip># Households Receiving Deliveries</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(foodbankDecContents.kpi6 == null)?'grey-2':(foodbankDecContents.kpi6 >= '0' && foodbankDecContents.kpi6 <= '14.7')?'red':(foodbankDecContents.kpi6 > '14.7' && foodbankDecContents.kpi6 <= '19.6')?'orange':(foodbankDecContents.kpi6 > '19.6' && foodbankDecContents.kpi6 < '24.5')?'yellow-7':(foodbankDecContents.kpi6 >= '24.5' && foodbankDecContents.kpi6 < '29.4')?'green':(foodbankDecContents.kpi6 >= '29.4'?'blue':'grey-2')"
                            >
                            {{foodbankDecContents.kpi6}}
                              <q-tooltip># Referrals to Programs and Services</q-tooltip>
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
              foodbankJanContent: {
                
              },
              foodbankJanContents : [],
              foodbankFebContent: {
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
              foodbankFebContents : [],
              foodbankMarContent: {
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
              foodbankMarContents : [],
              foodbankAprContent: {
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
              foodbankAprContents : [],
              foodbankMayContent: {
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
              foodbankMayContents : [],
              foodbankJunContent: {
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
              foodbankJunContents : [],
              foodbankJulContent: {
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
              foodbankJulContents : [],
              foodbankAugContent: {
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
              foodbankAugContents : [],
              foodbankSepContent: {
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
              foodbankSepContents : [],
              foodbankOctContent: {
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
              foodbankOctContents : [],
              foodbankNovContent: {
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
              foodbankNovContents : [],
              foodbankDecContent: {
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
              foodbankDecContents : []
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
                            {time_period: 'January', expenses: this.foodbankJanContents.expenses, revenues: this.foodbankJanContents.revenues},
                            {time_period: 'February', expenses: this.foodbankFebContents.expenses, revenues: this.foodbankFebContents.revenues},
                            {time_period: 'March', expenses: this.foodbankMarContents.expenses, revenues: this.foodbankMarContents.revenues},
                            {time_period: 'April', expenses: this.foodbankAprContents.expenses, revenues: this.foodbankAprContents.revenues},
                            {time_period: 'May', expenses: this.foodbankMayContents.expenses, revenues: this.foodbankMayContents.revenues},
                            {time_period: 'June', expenses: this.foodbankJunContents.expenses, revenues: this.foodbankJunContents.revenues},
                            {time_period: 'July', expenses: this.foodbankJulContents.expenses, revenues: this.foodbankJulContents.revenues},
                            {time_period: 'August', expenses: this.foodbankAugContents.expenses, revenues: this.foodbankAugContents.revenues},
                            {time_period: 'September', expenses: this.foodbankSepContents.expenses, revenues: this.foodbankSepContents.revenues},
                            {time_period: 'October', expenses: this.foodbankOctContents.expenses, revenues: this.foodbankOctContents.revenues},
                            {time_period: 'November', expenses: this.foodbankNovContents.expenses, revenues: this.foodbankNovContents.revenues},
                            {time_period: 'December',expenses: this.foodbankDecContents.expenses, revenues: this.foodbankDecContents.revenues }
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
                        dimensions: ['months', 'kpi1', 'kpi2', 'kpi3', 'kpi4', 'kpi5', 'kpi6', 'uniqueVol', 'volHours'],
                        source: [
                            //{months: 'January', kpi1: 0, kpi2: 0, kpi3: 0, kpi4: 0, uniqueVol: 0, volHours: 0},
                            {months: 'January', kpi1: this.foodbankJanContents.kpi1, kpi2: this.foodbankJanContents.kpi2, kpi3: this.foodbankJanContents.kpi3, kpi4: this.foodbankJanContents.kpi4, kpi5: this.foodbankJanContents.kpi5, kpi6: this.foodbankJanContents.kpi6, uniqueVol: this.foodbankJanContents.uniqueVolunteers, volHours: this.foodbankJanContents.volunteerHours},
                            {months: 'February', kpi1: this.foodbankFebContents.kpi1, kpi2: this.foodbankFebContents.kpi2, kpi3: this.foodbankFebContents.kpi3, kpi4: this.foodbankFebContents.kpi4, kpi5: this.foodbankFebContents.kpi5, kpi6: this.foodbankFebContents.kpi6, uniqueVol: this.foodbankFebContents.uniqueVolunteers, volHours: this.foodbankFebContents.volunteerHours},
                            {months: 'March', kpi1: this.foodbankMarContents.kpi1, kpi2: this.foodbankMarContents.kpi2, kpi3: this.foodbankMarContents.kpi3, kpi4: this.foodbankMarContents.kpi4, kpi5: this.foodbankMarContents.kpi5, kpi6: this.foodbankMarContents.kpi6, uniqueVol: this.foodbankMarContents.uniqueVolunteers, volHours: this.foodbankMarContents.volunteerHours},
                            {months: 'April', kpi1: this.foodbankAprContents.kpi1, kpi2: this.foodbankAprContents.kpi2, kpi3: this.foodbankAprContents.kpi3, kpi4: this.foodbankAprContents.kpi4, kpi5: this.foodbankAprContents.kpi5, kpi6: this.foodbankAprContents.kpi6, uniqueVol: this.foodbankAprContents.uniqueVolunteers, volHours: this.foodbankAprContents.volunteerHours},
                            {months: 'May', kpi1: this.foodbankMayContents.kpi1, kpi2: this.foodbankMayContents.kpi2, kpi3: this.foodbankMayContents.kpi3, kpi4: this.foodbankMayContents.kpi4, kpi5: this.foodbankMayContents.kpi5, kpi6: this.foodbankMayContents.kpi6, uniqueVol: this.foodbankMayContents.uniqueVolunteers, volHours: this.foodbankMayContents.volunteerHours},
                            {months: 'June', kpi1: this.foodbankJunContents.kpi1, kpi2: this.foodbankJunContents.kpi2, kpi3: this.foodbankJunContents.kpi3, kpi4: this.foodbankJunContents.kpi4, kpi5: this.foodbankJunContents.kpi5, kpi6: this.foodbankJunContents.kpi6, uniqueVol: this.foodbankJunContents.uniqueVolunteers, volHours: this.foodbankJunContents.volunteerHours},
                            {months: 'July', kpi1: this.foodbankJulContents.kpi1, kpi2: this.foodbankJulContents.kpi2, kpi3: this.foodbankJulContents.kpi3, kpi4: this.foodbankJulContents.kpi4, kpi5: this.foodbankJulContents.kpi5, kpi6: this.foodbankJulContents.kpi6, uniqueVol: this.foodbankJulContents.uniqueVolunteers, volHours: this.foodbankJulContents.volunteerHours},
                            {months: 'August', kpi1: this.foodbankAugContents.kpi1, kpi2: this.foodbankAugContents.kpi2, kpi3: this.foodbankAugContents.kpi3, kpi4: this.foodbankAugContents.kpi4, kpi5: this.foodbankAugContents.kpi5, kpi6: this.foodbankAugContents.kpi6, uniqueVol: this.foodbankAugContents.uniqueVolunteers, volHours: this.foodbankAugContents.volunteerHours},
                            {months: 'September', kpi1: this.foodbankSepContents.kpi1, kpi2: this.foodbankSepContents.kpi2, kpi3: this.foodbankSepContents.kpi3, kpi4: this.foodbankSepContents.kpi4, kpi5: this.foodbankSepContents.kpi5, kpi6: this.foodbankSepContents.kpi6, uniqueVol: this.foodbankSepContents.uniqueVolunteers, volHours: this.foodbankSepContents.volunteerHours},
                            {months: 'October', kpi1: this.foodbankOctContents.kpi1, kpi2: this.foodbankOctContents.kpi2, kpi3: this.foodbankOctContents.kpi3, kpi4: this.foodbankOctContents.kpi4, kpi5: this.foodbankOctContents.kpi5, kpi6: this.foodbankOctContents.kpi6, uniqueVol: this.foodbankOctContents.uniqueVolunteers, volHours: this.foodbankOctContents.volunteerHours},
                            {months: 'November', kpi1: this.foodbankNovContents.kpi1, kpi2: this.foodbankNovContents.kpi2, kpi3: this.foodbankNovContents.kpi3, kpi4: this.foodbankNovContents.kpi4, kpi5: this.foodbankNovContents.kpi5, kpi6: this.foodbankNovContents.kpi6, uniqueVol: this.foodbankNovContents.uniqueVolunteers, volHours: this.foodbankNovContents.volunteerHours},
                            {months: 'December',kpi1: this.foodbankDecContents.kpi1, kpi2: this.foodbankDecContents.kpi2, kpi3: this.foodbankDecContents.kpi3, kpi4: this.foodbankDecContents.kpi4, kpi5: this.foodbankDecContents.kpi5, kpi6: this.foodbankDecContents.kpi6, uniqueVol: this.foodbankDecContents.uniqueVolunteers, volHours: this.foodbankDecContents.volunteerHours},
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
                        {type: 'line', name: 'KPI6'},
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
                            data: [{value: this.foodbankJanContents.budgetUsage}],
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
                                {value: this.foodbankJanContents.perCategory1, name: this.foodbankJanContents.expenseCategory1},
                                {value: this.foodbankJanContents.perCategory2, name: this.foodbankJanContents.expenseCategory2},
                                {value: this.foodbankJanContents.perCategory3, name: this.foodbankJanContents.expenseCategory3},
                                {value: this.foodbankJanContents.perCategory4, name: this.foodbankJanContents.expenseCategory4},
                                {value: this.foodbankJanContents.perCategory5, name: this.foodbankJanContents.expenseCategory5},
                                {value: this.foodbankJanContents.perCategory6, name: this.foodbankJanContents.expenseCategory6}
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
                            data: [{value: this.foodbankFebContents.budgetUsage}],
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
                                {value: this.foodbankFebContents.perCategory1, name: this.foodbankFebContents.expenseCategory1},
                                {value: this.foodbankFebContents.perCategory2, name: this.foodbankFebContents.expenseCategory2},
                                {value: this.foodbankFebContents.perCategory3, name: this.foodbankFebContents.expenseCategory3},
                                {value: this.foodbankFebContents.perCategory4, name: this.foodbankFebContents.expenseCategory4},
                                {value: this.foodbankFebContents.perCategory5, name: this.foodbankFebContents.expenseCategory5},
                                {value: this.foodbankFebContents.perCategory6, name: this.foodbankFebContents.expenseCategory6}
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
                            data: [{value: this.foodbankMarContents.budgetUsage}],
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
                                {value: this.foodbankMarContents.perCategory1, name: this.foodbankMarContents.expenseCategory1},
                                {value: this.foodbankMarContents.perCategory2, name: this.foodbankMarContents.expenseCategory2},
                                {value: this.foodbankMarContents.perCategory3, name: this.foodbankMarContents.expenseCategory3},
                                {value: this.foodbankMarContents.perCategory4, name: this.foodbankMarContents.expenseCategory4},
                                {value: this.foodbankMarContents.perCategory5, name: this.foodbankMarContents.expenseCategory5},
                                {value: this.foodbankMarContents.perCategory6, name: this.foodbankMarContents.expenseCategory6}
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
                            data: [{value: this.foodbankAprContents.budgetUsage}],
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
                                {value: this.foodbankAprContents.perCategory1, name: this.foodbankAprContents.expenseCategory1},
                                {value: this.foodbankAprContents.perCategory2, name: this.foodbankAprContents.expenseCategory2},
                                {value: this.foodbankAprContents.perCategory3, name: this.foodbankAprContents.expenseCategory3},
                                {value: this.foodbankAprContents.perCategory4, name: this.foodbankAprContents.expenseCategory4},
                                {value: this.foodbankAprContents.perCategory5, name: this.foodbankAprContents.expenseCategory5},
                                {value: this.foodbankAprContents.perCategory6, name: this.foodbankAprContents.expenseCategory6}  
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
                            data: [{value: this.foodbankMayContents.budgetUsage}],
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
                                {value: this.foodbankMayContents.perCategory1, name: this.foodbankMayContents.expenseCategory1},
                                {value: this.foodbankMayContents.perCategory2, name: this.foodbankMayContents.expenseCategory2},
                                {value: this.foodbankMayContents.perCategory3, name: this.foodbankMayContents.expenseCategory3},
                                {value: this.foodbankMayContents.perCategory4, name: this.foodbankMayContents.expenseCategory4},
                                {value: this.foodbankMayContents.perCategory5, name: this.foodbankMayContents.expenseCategory5},
                                {value: this.foodbankMayContents.perCategory6, name: this.foodbankMayContents.expenseCategory6}  
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
                            data: [{value: this.foodbankJunContents.budgetUsage}],
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
                                {value: this.foodbankJunContents.perCategory1, name: this.foodbankJunContents.expenseCategory1},
                                {value: this.foodbankJunContents.perCategory2, name: this.foodbankJunContents.expenseCategory2},
                                {value: this.foodbankJunContents.perCategory3, name: this.foodbankJunContents.expenseCategory3},
                                {value: this.foodbankJunContents.perCategory4, name: this.foodbankJunContents.expenseCategory4},
                                {value: this.foodbankJunContents.perCategory5, name: this.foodbankJunContents.expenseCategory5},
                                {value: this.foodbankJunContents.perCategory6, name: this.foodbankJunContents.expenseCategory6}  
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
                            data: [{value: this.foodbankJulContents.budgetUsage}],
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
                                {value: this.foodbankJulContents.perCategory1, name: this.foodbankJulContents.expenseCategory1},
                                {value: this.foodbankJulContents.perCategory2, name: this.foodbankJulContents.expenseCategory2},
                                {value: this.foodbankJulContents.perCategory3, name: this.foodbankJulContents.expenseCategory3},
                                {value: this.foodbankJulContents.perCategory4, name: this.foodbankJulContents.expenseCategory4},
                                {value: this.foodbankJulContents.perCategory5, name: this.foodbankJulContents.expenseCategory5},
                                {value: this.foodbankJulContents.perCategory6, name: this.foodbankJulContents.expenseCategory6}  
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
                            data: [{value: this.foodbankAugContents.budgetUsage}],
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
                                {value: this.foodbankAugContents.perCategory1, name: this.foodbankAugContents.expenseCategory1},
                                {value: this.foodbankAugContents.perCategory2, name: this.foodbankAugContents.expenseCategory2},
                                {value: this.foodbankAugContents.perCategory3, name: this.foodbankAugContents.expenseCategory3},
                                {value: this.foodbankAugContents.perCategory4, name: this.foodbankAugContents.expenseCategory4},
                                {value: this.foodbankAugContents.perCategory5, name: this.foodbankAugContents.expenseCategory5},
                                {value: this.foodbankAugContents.perCategory6, name: this.foodbankAugContents.expenseCategory6}  
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
                            data: [{value: this.foodbankSepContents.budgetUsage}],
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
                                {value: this.foodbankSepContents.perCategory1, name: this.foodbankSepContents.expenseCategory1},
                                {value: this.foodbankSepContents.perCategory2, name: this.foodbankSepContents.expenseCategory2},
                                {value: this.foodbankSepContents.perCategory3, name: this.foodbankSepContents.expenseCategory3},
                                {value: this.foodbankSepContents.perCategory4, name: this.foodbankSepContents.expenseCategory4},
                                {value: this.foodbankSepContents.perCategory5, name: this.foodbankSepContents.expenseCategory5},
                                {value: this.foodbankSepContents.perCategory6, name: this.foodbankSepContents.expenseCategory6}  
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
                            data: [{value: this.foodbankOctContents.budgetUsage}],
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
                                {value: this.foodbankOctContents.perCategory1, name: this.foodbankOctContents.expenseCategory1},
                                {value: this.foodbankOctContents.perCategory2, name: this.foodbankOctContents.expenseCategory2},
                                {value: this.foodbankOctContents.perCategory3, name: this.foodbankOctContents.expenseCategory3},
                                {value: this.foodbankOctContents.perCategory4, name: this.foodbankOctContents.expenseCategory4},
                                {value: this.foodbankOctContents.perCategory5, name: this.foodbankOctContents.expenseCategory5},
                                {value: this.foodbankOctContents.perCategory6, name: this.foodbankOctContents.expenseCategory6}  
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
                            data: [{value: this.foodbankNovContents.budgetUsage}],
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
                                {value: this.foodbankNovContents.perCategory1, name: this.foodbankNovContents.expenseCategory1},
                                {value: this.foodbankNovContents.perCategory2, name: this.foodbankNovContents.expenseCategory2},
                                {value: this.foodbankNovContents.perCategory3, name: this.foodbankNovContents.expenseCategory3},
                                {value: this.foodbankNovContents.perCategory4, name: this.foodbankNovContents.expenseCategory4},
                                {value: this.foodbankNovContents.perCategory5, name: this.foodbankNovContents.expenseCategory5},
                                {value: this.foodbankNovContents.perCategory6, name: this.foodbankNovContents.expenseCategory6}  
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
                            data: [{value: this.foodbankDecContents.budgetUsage}],
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
                                {value: this.foodbankDecContents.perCategory1, name: this.foodbankDecContents.expenseCategory1},
                                {value: this.foodbankDecContents.perCategory2, name: this.foodbankDecContents.expenseCategory2},
                                {value: this.foodbankDecContents.perCategory3, name: this.foodbankDecContents.expenseCategory3},
                                {value: this.foodbankDecContents.perCategory4, name: this.foodbankDecContents.expenseCategory4},
                                {value: this.foodbankDecContents.perCategory5, name: this.foodbankDecContents.expenseCategory5},
                                {value: this.foodbankDecContents.perCategory6, name: this.foodbankDecContents.expenseCategory6}
                            ]
                        }
                    ]
                }
            }
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
            var docfoodbankJanRef = db.collection("foodbank").doc("january");

            docfoodbankJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.foodbankJanContents = doc.data();
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
            var docfoodbankFebRef = db.collection("foodbank").doc("february");

            docfoodbankFebRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.foodbankFebContents = doc.data();
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
            var docfoodbankMarRef = db.collection("foodbank").doc("march");

            docfoodbankMarRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.foodbankMarContents = doc.data();
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
            var docfoodbankAprRef = db.collection("foodbank").doc("april1");

            docfoodbankAprRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.foodbankAprContents = doc.data();
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
            var docfoodbankMayRef = db.collection("foodbank").doc("may");

            docfoodbankMayRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.foodbankMayContents = doc.data();
                    this.totalExpenseMay();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    JUNE
            var docfoodbankJunRef = db.collection("foodbank").doc("june");

            docfoodbankJunRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.foodbankJunContents = doc.data();
                    this.totalExpenseJun();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    JULY
            var docfoodbankJulRef = db.collection("foodbank").doc("july");

            docfoodbankJulRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.foodbankJulContents = doc.data();
                    this.totalExpenseJul();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    AUGUST
            var docfoodbankAugRef = db.collection("foodbank").doc("august");

            docfoodbankAugRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.foodbankAugContents = doc.data();
                    this.totalExpenseAug();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    SEPTEMBER
            var docfoodbankSepRef = db.collection("foodbank").doc("september");

            docfoodbankSepRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.foodbankSepContents = doc.data();
                    this.totalExpenseSep();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    OCTOBER
            var docfoodbankOctRef = db.collection("foodbank").doc("october");

            docfoodbankOctRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.foodbankOctContents = doc.data();
                    this.totalExpenseOct();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    NOVEMBER
            var docfoodbankNovRef = db.collection("foodbank").doc("november");

            docfoodbankNovRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.foodbankNovContents = doc.data();
                    this.totalExpenseNov();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    DECEMBER
            var docfoodbankDecRef = db.collection("foodbank").doc("december");

            docfoodbankDecRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.foodbankDecContents = doc.data();
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
              return this.foodbankJanContents.expenses = getRealValue(this.foodbankJanContents.perCategory1) + getRealValue(this.foodbankJanContents.perCategory2) + getRealValue(this.foodbankJanContents.perCategory3) + getRealValue(this.foodbankJanContents.perCategory4) + getRealValue(this.foodbankJanContents.perCategory5) + getRealValue(this.foodbankJanContents.perCategory6)
            },
            cumulativeBudgetUsageJan(){
              const getRealValue = (val) => +val || val;
              return this.foodbankJanContents.budgetUsage = ((getRealValue(this.foodbankJanContents.expenses) / getRealValue(this.foodbankJanContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseFeb(){
              const getRealValue = (val) => +val || val;
              return this.foodbankFebContents.expenses = getRealValue(this.foodbankFebContents.perCategory1) + getRealValue(this.foodbankFebContents.perCategory2) + getRealValue(this.foodbankFebContents.perCategory3) + getRealValue(this.foodbankFebContents.perCategory4) + getRealValue(this.foodbankFebContents.perCategory5) + getRealValue(this.foodbankFebContents.perCategory6)
            },
            cumulativeBudgetUsageFeb(){
              const getRealValue = (val) => +val || val;
              return this.foodbankFebContents.budgetUsage = (((getRealValue(this.foodbankFebContents.expenses) + getRealValue(this.foodbankJanContents.expenses)) / getRealValue(this.foodbankFebContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseMar(){
              const getRealValue = (val) => +val || val;
              return this.foodbankMarContents.expenses = getRealValue(this.foodbankMarContents.perCategory1) + getRealValue(this.foodbankMarContents.perCategory2) + getRealValue(this.foodbankMarContents.perCategory3) + getRealValue(this.foodbankMarContents.perCategory4) + getRealValue(this.foodbankMarContents.perCategory5) + getRealValue(this.foodbankMarContents.perCategory6)
            },
            cumulativeBudgetUsageMar(){
              const getRealValue = (val) => +val || val;
              return this.foodbankMarContents.budgetUsage = (((getRealValue(this.foodbankMarContents.expenses) + getRealValue(this.foodbankFebContents.expenses) + getRealValue(this.foodbankJanContents.expenses)) / getRealValue(this.foodbankMarContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseApr(){
              const getRealValue = (val) => +val || val;
              return this.foodbankAprContents.expenses = getRealValue(this.foodbankAprContents.perCategory1) + getRealValue(this.foodbankAprContents.perCategory2) + getRealValue(this.foodbankAprContents.perCategory3) + getRealValue(this.foodbankAprContents.perCategory4) + getRealValue(this.foodbankAprContents.perCategory5) + getRealValue(this.foodbankAprContents.perCategory6)
            },
            cumulativeBudgetUsageApr(){
              const getRealValue = (val) => +val || val;
              return this.foodbankAprContents.budgetUsage = (((getRealValue(this.foodbankAprContents.expenses) + getRealValue(this.foodbankMarContents.expenses) + getRealValue(this.foodbankFebContents.expenses) + getRealValue(this.foodbankJanContents.expenses)) / getRealValue(this.foodbankAprContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseMay(){
              const getRealValue = (val) => +val || val;
              return this.foodbankMayContents.expenses = getRealValue(this.foodbankMayContents.perCategory1) + getRealValue(this.foodbankMayContents.perCategory2) + getRealValue(this.foodbankMayContents.perCategory3) + getRealValue(this.foodbankMayContents.perCategory4) + getRealValue(this.foodbankMayContents.perCategory5) + getRealValue(this.foodbankMayContents.perCategory6)
            },
            cumulativeBudgetUsageMay(){
              const getRealValue = (val) => +val || val;
              return this.foodbankMayContents.budgetUsage = (((getRealValue(this.foodbankMayContents.expenses) + getRealValue(this.foodbankAprContents.expenses) + getRealValue(this.foodbankMarContents.expenses) + getRealValue(this.foodbankFebContents.expenses) + getRealValue(this.foodbankJanContents.expenses)) / getRealValue(this.foodbankMayContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseJun(){
              const getRealValue = (val) => +val || val;
              return this.foodbankJunContents.expenses = getRealValue(this.foodbankJunContents.perCategory1) + getRealValue(this.foodbankJunContents.perCategory2) + getRealValue(this.foodbankJunContents.perCategory3) + getRealValue(this.foodbankJunContents.perCategory4) + getRealValue(this.foodbankJunContents.perCategory5) + getRealValue(this.foodbankJunContents.perCategory6)
            },
            cumulativeBudgetUsageJun(){
              const getRealValue = (val) => +val || val;
              return this.foodbankJunContents.budgetUsage = (((getRealValue(this.foodbankJunContents.expenses) + getRealValue(this.foodbankMayContents.expenses) + getRealValue(this.foodbankAprContents.expenses) + getRealValue(this.foodbankMarContents.expenses) + getRealValue(this.foodbankFebContents.expenses) + getRealValue(this.foodbankJanContents.expenses)) / getRealValue(this.foodbankJunContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseJul(){
              const getRealValue = (val) => +val || val;
              return this.foodbankJulContents.expenses = getRealValue(this.foodbankJulContents.perCategory1) + getRealValue(this.foodbankJulContents.perCategory2) + getRealValue(this.foodbankJulContents.perCategory3) + getRealValue(this.foodbankJulContents.perCategory4) + getRealValue(this.foodbankJulContents.perCategory5) + getRealValue(this.foodbankJulContents.perCategory6)
            },
            cumulativeBudgetUsageJul(){
              const getRealValue = (val) => +val || val;
              return this.foodbankJulContents.budgetUsage = (((getRealValue(this.foodbankJulContents.expenses) + getRealValue(this.foodbankJunContents.expenses) + getRealValue(this.foodbankMayContents.expenses) + getRealValue(this.foodbankAprContents.expenses) + getRealValue(this.foodbankMarContents.expenses) + getRealValue(this.foodbankFebContents.expenses) + getRealValue(this.foodbankJanContents.expenses)) / getRealValue(this.foodbankJulContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseAug(){
              const getRealValue = (val) => +val || val;
              return this.foodbankAugContents.expenses = getRealValue(this.foodbankAugContents.perCategory1) + getRealValue(this.foodbankAugContents.perCategory2) + getRealValue(this.foodbankAugContents.perCategory3) + getRealValue(this.foodbankAugContents.perCategory4) + getRealValue(this.foodbankAugContents.perCategory5) + getRealValue(this.foodbankAugContents.perCategory6)
            },
            cumulativeBudgetUsageAug(){
              const getRealValue = (val) => +val || val;
              return this.foodbankAugContents.budgetUsage = (((getRealValue(this.foodbankAugContents.expenses) + getRealValue(this.foodbankJulContents.expenses) + getRealValue(this.foodbankJunContents.expenses) + getRealValue(this.foodbankMayContents.expenses) + getRealValue(this.foodbankAprContents.expenses) + getRealValue(this.foodbankMarContents.expenses) + getRealValue(this.foodbankFebContents.expenses) + getRealValue(this.foodbankJanContents.expenses)) / getRealValue(this.foodbankAugContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseSep(){
              const getRealValue = (val) => +val || val;
              return this.foodbankSepContents.expenses = getRealValue(this.foodbankSepContents.perCategory1) + getRealValue(this.foodbankSepContents.perCategory2) + getRealValue(this.foodbankSepContents.perCategory3) + getRealValue(this.foodbankSepContents.perCategory4) + getRealValue(this.foodbankSepContents.perCategory5) + getRealValue(this.foodbankSepContents.perCategory6)
            },
            cumulativeBudgetUsageSep(){
              const getRealValue = (val) => +val || val;
              return this.foodbankSepContents.budgetUsage = (((getRealValue(this.foodbankSepContents.expenses) + getRealValue(this.foodbankAugContents.expenses) + getRealValue(this.foodbankJulContents.expenses) + getRealValue(this.foodbankJunContents.expenses) + getRealValue(this.foodbankMayContents.expenses) + getRealValue(this.foodbankAprContents.expenses) + getRealValue(this.foodbankMarContents.expenses) + getRealValue(this.foodbankFebContents.expenses) + getRealValue(this.foodbankJanContents.expenses)) / getRealValue(this.foodbankSepContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseOct(){
              const getRealValue = (val) => +val || val;
              return this.foodbankOctContents.expenses = getRealValue(this.foodbankOctContents.perCategory1) + getRealValue(this.foodbankOctContents.perCategory2) + getRealValue(this.foodbankOctContents.perCategory3) + getRealValue(this.foodbankOctContents.perCategory4) + getRealValue(this.foodbankOctContents.perCategory5) + getRealValue(this.foodbankOctContents.perCategory6)
            },
            cumulativeBudgetUsageOct(){
              const getRealValue = (val) => +val || val;
              return this.foodbankOctContents.budgetUsage = (((getRealValue(this.foodbankOctContents.expenses) + getRealValue(this.foodbankSepContents.expenses) + getRealValue(this.foodbankAugContents.expenses) + getRealValue(this.foodbankJulContents.expenses) + getRealValue(this.foodbankJunContents.expenses) + getRealValue(this.foodbankMayContents.expenses) + getRealValue(this.foodbankAprContents.expenses) + getRealValue(this.foodbankMarContents.expenses) + getRealValue(this.foodbankFebContents.expenses) + getRealValue(this.foodbankJanContents.expenses)) / getRealValue(this.foodbankOctContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseNov(){
              const getRealValue = (val) => +val || val;
              return this.foodbankNovContents.expenses = getRealValue(this.foodbankNovContents.perCategory1) + getRealValue(this.foodbankNovContents.perCategory2) + getRealValue(this.foodbankNovContents.perCategory3) + getRealValue(this.foodbankNovContents.perCategory4) + getRealValue(this.foodbankNovContents.perCategory5) + getRealValue(this.foodbankNovContents.perCategory6)
            },
            cumulativeBudgetUsageNov(){
              const getRealValue = (val) => +val || val;
              return this.foodbankNovContents.budgetUsage = (((getRealValue(this.foodbankNovContents.expenses) + getRealValue(this.foodbankOctContents.expenses) + getRealValue(this.foodbankSepContents.expenses) + getRealValue(this.foodbankAugContents.expenses) + getRealValue(this.foodbankJulContents.expenses) + getRealValue(this.foodbankJunContents.expenses) + getRealValue(this.foodbankMayContents.expenses) + getRealValue(this.foodbankAprContents.expenses) + getRealValue(this.foodbankMarContents.expenses) + getRealValue(this.foodbankFebContents.expenses) + getRealValue(this.foodbankJanContents.expenses)) / getRealValue(this.foodbankNovContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseDec(){
              const getRealValue = (val) => +val || val;
              return this.foodbankDecContents.expenses = getRealValue(this.foodbankDecContents.perCategory1) + getRealValue(this.foodbankDecContents.perCategory2) + getRealValue(this.foodbankDecContents.perCategory3) + getRealValue(this.foodbankDecContents.perCategory4) + getRealValue(this.foodbankDecContents.perCategory5) + getRealValue(this.foodbankDecContents.perCategory6)
            },
            cumulativeBudgetUsageDec(){
              const getRealValue = (val) => +val || val;
              return this.foodbankDecContents.budgetUsage = (((getRealValue(this.foodbankDecContents.expenses) + getRealValue(this.foodbankNovContents.expenses) + getRealValue(this.foodbankOctContents.expenses) + getRealValue(this.foodbankSepContents.expenses) + getRealValue(this.foodbankAugContents.expenses) + getRealValue(this.foodbankJulContents.expenses) + getRealValue(this.foodbankJunContents.expenses) + getRealValue(this.foodbankMayContents.expenses) + getRealValue(this.foodbankAprContents.expenses) + getRealValue(this.foodbankMarContents.expenses) + getRealValue(this.foodbankFebContents.expenses) + getRealValue(this.foodbankJanContents.expenses)) / getRealValue(this.foodbankDecContents.actualBudget))*100).toFixed(2)
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
