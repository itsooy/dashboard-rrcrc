<template>

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
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >January</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJanContents.kpi1 == null)?'grey-2':(gikJanContents.kpi1 >= '0' && gikJanContents.kpi1 <= '14.7')?'red':(gikJanContents.kpi1 > '14.7' && gikJanContents.kpi1 <= '19.6')?'orange':(gikJanContents.kpi1 > '19.6' && gikJanContents.kpi1 < '24.5')?'yellow-7':(gikJanContents.kpi1 >= '24.5' && gikJanContents.kpi1 < '29.4')?'green':(gikJanContents.kpi1 >= '29.40'?'blue':'grey-2')"
                            >
                            {{gikJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJanContents.kpi2 == null)?'grey-2':(gikJanContents.kpi2 >= '0' && gikJanContents.kpi2 <= '19.05')?'red':(gikJanContents.kpi2 > '19.05' && gikJanContents.kpi2 <= '25.4')?'orange':(gikJanContents.kpi2 > '25.4' && gikJanContents.kpi2 < '31.75')?'yellow-7':(gikJanContents.kpi2 >= '31.75' && gikJanContents.kpi2 < '38.1')?'green':(gikJanContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJanContents.kpi3 == null)?'grey-2':(gikJanContents.kpi3 >= '0' && gikJanContents.kpi3 <= '19.35')?'red':(gikJanContents.kpi3 > '19.35' && gikJanContents.kpi3 <= '25.8')?'orange':(gikJanContents.kpi3 > '25.8' && gikJanContents.kpi3 < '32.25')?'yellow-7':(gikJanContents.kpi3 >= '32.25' && gikJanContents.kpi3 < '38.7')?'green':(gikJanContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJanContents.kpi4 == null)?'grey-2':(gikJanContents.kpi4 >= '0' && gikJanContents.kpi4 <= '19.2')?'red':(gikJanContents.kpi4 > '19.2' && gikJanContents.kpi4 <= '25.6')?'orange':(gikJanContents.kpi4 > '25.6' && gikJanContents.kpi4 < '32')?'yellow-7':(gikJanContents.kpi4 >= '32' && gikJanContents.kpi4 < '38.4')?'green':(gikJanContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikJanContents.kpi4}}
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
                              :color="(gikFebContents.kpi1 == '')?'grey-2':(gikFebContents.kpi1 >= '0' && gikFebContents.kpi1 <= '14.7')?'red':(gikFebContents.kpi1 > '14.7' && gikFebContents.kpi1 <= '19.6')?'orange':(gikFebContents.kpi1 > '19.6' && gikFebContents.kpi1 < '24.5')?'yellow-7':(gikFebContents.kpi1 >= '24.5' && gikFebContents.kpi1 < '29.40')?'green':(gikFebContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikFebContents.kpi2 == '')?'grey-2':(gikFebContents.kpi2 >= '0' && gikFebContents.kpi2 <= '19.05')?'red':(gikFebContents.kpi2 > '19.05' && gikFebContents.kpi2 <= '25.4')?'orange':(gikFebContents.kpi2 > '25.4' && gikFebContents.kpi2 < '31.75')?'yellow-7':(gikFebContents.kpi2 >= '31.75' && gikFebContents.kpi2 < '38.1')?'green':(gikFebContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikFebContents.kpi3 == '')?'grey-2':(gikFebContents.kpi3 >= '0' && gikFebContents.kpi3 <= '19.35')?'red':(gikFebContents.kpi3 > '19.35' && gikFebContents.kpi3 <= '25.8')?'orange':(gikFebContents.kpi3 > '25.8' && gikFebContents.kpi3 < '32.25')?'yellow-7':(gikFebContents.kpi3 >= '32.25' && gikFebContents.kpi3 < '38.7')?'green':(gikFebContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikFebContents.kpi4 == '')?'grey-2':(gikFebContents.kpi4 >= '0' && gikFebContents.kpi4 <= '19.2')?'red':(gikFebContents.kpi4 > '19.2' && gikFebContents.kpi4 <= '25.6')?'orange':(gikFebContents.kpi4 > '25.6' && gikFebContents.kpi4 < '32')?'yellow-7':(gikFebContents.kpi4 >= '32' && gikFebContents.kpi4 < '38.4')?'green':(gikFebContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikFebContents.kpi4}}
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
                              :color="(gikMarContents.kpi1 == '')?'grey-2':(gikMarContents.kpi1 >= '0' && gikMarContents.kpi1 <= '14.7')?'red':(gikMarContents.kpi1 > '14.7' && gikMarContents.kpi1 <= '19.6')?'orange':(gikMarContents.kpi1 > '19.6' && gikMarContents.kpi1 < '24.5')?'yellow-7':(gikMarContents.kpi1 >= '24.5' && gikMarContents.kpi1 < '29.40')?'green':(gikMarContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMarContents.kpi2 == '')?'grey-2':(gikMarContents.kpi2 >= '0' && gikMarContents.kpi2 <= '19.05')?'red':(gikMarContents.kpi2 > '19.05' && gikMarContents.kpi2 <= '25.4')?'orange':(gikMarContents.kpi2 > '25.4' && gikMarContents.kpi2 < '31.75')?'yellow-7':(gikMarContents.kpi2 >= '31.75' && gikMarContents.kpi2 < '38.1')?'green':(gikMarContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMarContents.kpi3 == '')?'grey-2':(gikMarContents.kpi3 >= '0' && gikMarContents.kpi3 <= '19.35')?'red':(gikMarContents.kpi3 > '19.35' && gikMarContents.kpi3 <= '25.8')?'orange':(gikMarContents.kpi3 > '25.8' && gikMarContents.kpi3 < '32.25')?'yellow-7':(gikMarContents.kpi3 >= '32.25' && gikMarContents.kpi3 < '38.7')?'green':(gikMarContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMarContents.kpi4 == '')?'grey-2':(gikMarContents.kpi4 >= '0' && gikMarContents.kpi4 <= '19.2')?'red':(gikMarContents.kpi4 > '19.2' && gikMarContents.kpi4 <= '25.6')?'orange':(gikMarContents.kpi4 > '25.6' && gikMarContents.kpi4 < '32')?'yellow-7':(gikMarContents.kpi4 >= '32' && gikMarContents.kpi4 < '38.4')?'green':(gikMarContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikMarContents.kpi4}}
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
                              :color="(gikAprContents.kpi1 == '')?'grey-2':(gikAprContents.kpi1 >= '0' && gikAprContents.kpi1 <= '14.7')?'red':(gikAprContents.kpi1 > '14.7' && gikAprContents.kpi1 <= '19.6')?'orange':(gikAprContents.kpi1 > '19.6' && gikAprContents.kpi1 < '24.5')?'yellow-7':(gikAprContents.kpi1 >= '24.5' && gikAprContents.kpi1 < '29.40')?'green':(gikAprContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAprContents.kpi2 == '')?'grey-2':(gikAprContents.kpi2 >= '0' && gikAprContents.kpi2 <= '19.05')?'red':(gikAprContents.kpi2 > '19.05' && gikAprContents.kpi2 <= '25.4')?'orange':(gikAprContents.kpi2 > '25.4' && gikAprContents.kpi2 < '31.75')?'yellow-7':(gikAprContents.kpi2 >= '31.75' && gikAprContents.kpi2 < '38.1')?'green':(gikAprContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAprContents.kpi3 == '')?'grey-2':(gikAprContents.kpi3 >= '0' && gikAprContents.kpi3 <= '19.35')?'red':(gikAprContents.kpi3 > '19.35' && gikAprContents.kpi3 <= '25.8')?'orange':(gikAprContents.kpi3 > '25.8' && gikAprContents.kpi3 < '32.25')?'yellow-7':(gikAprContents.kpi3 >= '32.25' && gikAprContents.kpi3 < '38.7')?'green':(gikAprContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAprContents.kpi4 == '')?'grey-2':(gikAprContents.kpi4 >= '0' && gikAprContents.kpi4 <= '19.2')?'red':(gikAprContents.kpi4 > '19.2' && gikAprContents.kpi4 <= '25.6')?'orange':(gikAprContents.kpi4 > '25.6' && gikAprContents.kpi4 < '32')?'yellow-7':(gikAprContents.kpi4 >= '32' && gikAprContents.kpi4 < '38.4')?'green':(gikAprContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikAprContents.kpi4}}
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
                              :color="(gikMayContents.kpi1 == '')?'grey-2':(gikMayContents.kpi1 >= '0' && gikMayContents.kpi1 <= '14.7')?'red':(gikMayContents.kpi1 > '14.7' && gikMayContents.kpi1 <= '19.6')?'orange':(gikMayContents.kpi1 > '19.6' && gikMayContents.kpi1 < '24.5')?'yellow-7':(gikMayContents.kpi1 >= '24.5' && gikMayContents.kpi1 < '29.40')?'green':(gikMayContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMayContents.kpi2 == '')?'grey-2':(gikMayContents.kpi2 >= '0' && gikMayContents.kpi2 <= '19.05')?'red':(gikMayContents.kpi2 > '19.05' && gikMayContents.kpi2 <= '25.4')?'orange':(gikMayContents.kpi2 > '25.4' && gikMayContents.kpi2 < '31.75')?'yellow-7':(gikMayContents.kpi2 >= '31.75' && gikMayContents.kpi2 < '38.1')?'green':(gikMayContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMayContents.kpi3 == '')?'grey-2':(gikMayContents.kpi3 >= '0' && gikMayContents.kpi3 <= '19.35')?'red':(gikMayContents.kpi3 > '19.35' && gikMayContents.kpi3 <= '25.8')?'orange':(gikMayContents.kpi3 > '25.8' && gikMayContents.kpi3 < '32.25')?'yellow-7':(gikMayContents.kpi3 >= '32.25' && gikMayContents.kpi3 < '38.7')?'green':(gikMayContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMayContents.kpi4 == '')?'grey-2':(gikMayContents.kpi4 >= '0' && gikMayContents.kpi4 <= '19.2')?'red':(gikMayContents.kpi4 > '19.2' && gikMayContents.kpi4 <= '25.6')?'orange':(gikMayContents.kpi4 > '25.6' && gikMayContents.kpi4 < '32')?'yellow-7':(gikMayContents.kpi4 >= '32' && gikMayContents.kpi4 < '38.4')?'green':(gikMayContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikMayContents.kpi4}}
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
                              :color="(gikJunContents.kpi1 == '')?'grey-2':(gikJunContents.kpi1 >= '0' && gikJunContents.kpi1 <= '14.7')?'red':(gikJunContents.kpi1 > '14.7' && gikJunContents.kpi1 <= '19.6')?'orange':(gikJunContents.kpi1 > '19.6' && gikJunContents.kpi1 < '24.5')?'yellow-7':(gikJunContents.kpi1 >= '24.5' && gikJunContents.kpi1 < '29.40')?'green':(gikJunContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJunContents.kpi2 == '')?'grey-2':(gikJunContents.kpi2 >= '0' && gikJunContents.kpi2 <= '19.05')?'red':(gikJunContents.kpi2 > '19.05' && gikJunContents.kpi2 <= '25.4')?'orange':(gikJunContents.kpi2 > '25.4' && gikJunContents.kpi2 < '31.75')?'yellow-7':(gikJunContents.kpi2 >= '31.75' && gikJunContents.kpi2 < '38.1')?'green':(gikJunContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJunContents.kpi3 == '')?'grey-2':(gikJunContents.kpi3 >= '0' && gikJunContents.kpi3 <= '19.35')?'red':(gikJunContents.kpi3 > '19.35' && gikJunContents.kpi3 <= '25.8')?'orange':(gikJunContents.kpi3 > '25.8' && gikJunContents.kpi3 < '32.25')?'yellow-7':(gikJunContents.kpi3 >= '32.25' && gikJunContents.kpi3 < '38.7')?'green':(gikJunContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJunContents.kpi4 == '')?'grey-2':(gikJunContents.kpi4 >= '0' && gikJunContents.kpi4 <= '19.2')?'red':(gikJunContents.kpi4 > '19.2' && gikJunContents.kpi4 <= '25.6')?'orange':(gikJunContents.kpi4 > '25.6' && gikJunContents.kpi4 < '32')?'yellow-7':(gikJunContents.kpi4 >= '32' && gikJunContents.kpi4 < '38.4')?'green':(gikJunContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikJunContents.kpi4}}
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
                              :color="(gikJulContents.kpi1 == '')?'grey-2':(gikJulContents.kpi1 >= '0' && gikJulContents.kpi1 <= '14.7')?'red':(gikJulContents.kpi1 > '14.7' && gikJulContents.kpi1 <= '19.6')?'orange':(gikJulContents.kpi1 > '19.6' && gikJulContents.kpi1 < '24.5')?'yellow-7':(gikJulContents.kpi1 >= '24.5' && gikJulContents.kpi1 < '29.40')?'green':(gikJulContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJulContents.kpi2 == '')?'grey-2':(gikJulContents.kpi2 >= '0' && gikJulContents.kpi2 <= '19.05')?'red':(gikJulContents.kpi2 > '19.05' && gikJulContents.kpi2 <= '25.4')?'orange':(gikJulContents.kpi2 > '25.4' && gikJulContents.kpi2 < '31.75')?'yellow-7':(gikJulContents.kpi2 >= '31.75' && gikJulContents.kpi2 < '38.1')?'green':(gikJulContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJulContents.kpi3 == '')?'grey-2':(gikJulContents.kpi3 >= '0' && gikJulContents.kpi3 <= '19.35')?'red':(gikJulContents.kpi3 > '19.35' && gikJulContents.kpi3 <= '25.8')?'orange':(gikJulContents.kpi3 > '25.8' && gikJulContents.kpi3 < '32.25')?'yellow-7':(gikJulContents.kpi3 >= '32.25' && gikJulContents.kpi3 < '38.7')?'green':(gikJulContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJulContents.kpi4 == '')?'grey-2':(gikJulContents.kpi4 >= '0' && gikJulContents.kpi4 <= '19.2')?'red':(gikJulContents.kpi4 > '19.2' && gikJulContents.kpi4 <= '25.6')?'orange':(gikJulContents.kpi4 > '25.6' && gikJulContents.kpi4 < '32')?'yellow-7':(gikJulContents.kpi4 >= '32' && gikJulContents.kpi4 < '38.4')?'green':(gikJulContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikJulContents.kpi4}}
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
                              :color="(gikAugContents.kpi1 == '')?'grey-2':(gikAugContents.kpi1 >= '0' && gikAugContents.kpi1 <= '14.7')?'red':(gikAugContents.kpi1 > '14.7' && gikAugContents.kpi1 <= '19.6')?'orange':(gikAugContents.kpi1 > '19.6' && gikAugContents.kpi1 < '24.5')?'yellow-7':(gikAugContents.kpi1 >= '24.5' && gikAugContents.kpi1 < '29.40')?'green':(gikAugContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAugContents.kpi2 == '')?'grey-2':(gikAugContents.kpi2 >= '0' && gikAugContents.kpi2 <= '19.05')?'red':(gikAugContents.kpi2 > '19.05' && gikAugContents.kpi2 <= '25.4')?'orange':(gikAugContents.kpi2 > '25.4' && gikAugContents.kpi2 < '31.75')?'yellow-7':(gikAugContents.kpi2 >= '31.75' && gikAugContents.kpi2 < '38.1')?'green':(gikAugContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAugContents.kpi3 == '')?'grey-2':(gikAugContents.kpi3 >= '0' && gikAugContents.kpi3 <= '19.35')?'red':(gikAugContents.kpi3 > '19.35' && gikAugContents.kpi3 <= '25.8')?'orange':(gikAugContents.kpi3 > '25.8' && gikAugContents.kpi3 < '32.25')?'yellow-7':(gikAugContents.kpi3 >= '32.25' && gikAugContents.kpi3 < '38.7')?'green':(gikAugContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAugContents.kpi4 == '')?'grey-2':(gikAugContents.kpi4 >= '0' && gikAugContents.kpi4 <= '19.2')?'red':(gikAugContents.kpi4 > '19.2' && gikAugContents.kpi4 <= '25.6')?'orange':(gikAugContents.kpi4 > '25.6' && gikAugContents.kpi4 < '32')?'yellow-7':(gikAugContents.kpi4 >= '32' && gikAugContents.kpi4 < '38.4')?'green':(gikAugContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikAugContents.kpi4}}
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
                              :color="(gikSepContents.kpi1 == '')?'grey-2':(gikSepContents.kpi1 >= '0' && gikSepContents.kpi1 <= '14.7')?'red':(gikSepContents.kpi1 > '14.7' && gikSepContents.kpi1 <= '19.6')?'orange':(gikSepContents.kpi1 > '19.6' && gikSepContents.kpi1 < '24.5')?'yellow-7':(gikSepContents.kpi1 >= '24.5' && gikSepContents.kpi1 < '29.40')?'green':(gikSepContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikSepContents.kpi2 == '')?'grey-2':(gikSepContents.kpi2 >= '0' && gikSepContents.kpi2 <= '19.05')?'red':(gikSepContents.kpi2 > '19.05' && gikSepContents.kpi2 <= '25.4')?'orange':(gikSepContents.kpi2 > '25.4' && gikSepContents.kpi2 < '31.75')?'yellow-7':(gikSepContents.kpi2 >= '31.75' && gikSepContents.kpi2 < '38.1')?'green':(gikSepContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikSepContents.kpi3 == '')?'grey-2':(gikSepContents.kpi3 >= '0' && gikSepContents.kpi3 <= '19.35')?'red':(gikSepContents.kpi3 > '19.35' && gikSepContents.kpi3 <= '25.8')?'orange':(gikSepContents.kpi3 > '25.8' && gikSepContents.kpi3 < '32.25')?'yellow-7':(gikSepContents.kpi3 >= '32.25' && gikSepContents.kpi3 < '38.7')?'green':(gikSepContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikSepContents.kpi4 == '')?'grey-2':(gikSepContents.kpi4 >= '0' && gikSepContents.kpi4 <= '19.2')?'red':(gikSepContents.kpi4 > '19.2' && gikSepContents.kpi4 <= '25.6')?'orange':(gikSepContents.kpi4 > '25.6' && gikSepContents.kpi4 < '32')?'yellow-7':(gikSepContents.kpi4 >= '32' && gikSepContents.kpi4 < '38.4')?'green':(gikSepContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikSepContents.kpi4}}
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
                              :color="(gikOctContents.kpi1 == '')?'grey-2':(gikOctContents.kpi1 >= '0' && gikOctContents.kpi1 <= '14.7')?'red':(gikOctContents.kpi1 > '14.7' && gikOctContents.kpi1 <= '19.6')?'orange':(gikOctContents.kpi1 > '19.6' && gikOctContents.kpi1 < '24.5')?'yellow-7':(gikOctContents.kpi1 >= '24.5' && gikOctContents.kpi1 < '29.40')?'green':(gikOctContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikOctContents.kpi2 == '')?'grey-2':(gikOctContents.kpi2 >= '0' && gikOctContents.kpi2 <= '19.05')?'red':(gikOctContents.kpi2 > '19.05' && gikOctContents.kpi2 <= '25.4')?'orange':(gikOctContents.kpi2 > '25.4' && gikOctContents.kpi2 < '31.75')?'yellow-7':(gikOctContents.kpi2 >= '31.75' && gikOctContents.kpi2 < '38.1')?'green':(gikOctContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikOctContents.kpi3 == '')?'grey-2':(gikOctContents.kpi3 >= '0' && gikOctContents.kpi3 <= '19.35')?'red':(gikOctContents.kpi3 > '19.35' && gikOctContents.kpi3 <= '25.8')?'orange':(gikOctContents.kpi3 > '25.8' && gikOctContents.kpi3 < '32.25')?'yellow-7':(gikOctContents.kpi3 >= '32.25' && gikOctContents.kpi3 < '38.7')?'green':(gikOctContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikOctContents.kpi4 == '')?'grey-2':(gikOctContents.kpi4 >= '0' && gikOctContents.kpi4 <= '19.2')?'red':(gikOctContents.kpi4 > '19.2' && gikOctContents.kpi4 <= '25.6')?'orange':(gikOctContents.kpi4 > '25.6' && gikOctContents.kpi4 < '32')?'yellow-7':(gikOctContents.kpi4 >= '32' && gikOctContents.kpi4 < '38.4')?'green':(gikOctContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikOctContents.kpi4}}
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
                              :color="(gikNovContents.kpi1 == '')?'grey-2':(gikNovContents.kpi1 >= '0' && gikNovContents.kpi1 <= '14.7')?'red':(gikNovContents.kpi1 > '14.7' && gikNovContents.kpi1 <= '19.6')?'orange':(gikNovContents.kpi1 > '19.6' && gikNovContents.kpi1 < '24.5')?'yellow-7':(gikNovContents.kpi1 >= '24.5' && gikNovContents.kpi1 < '29.40')?'green':(gikNovContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikNovContents.kpi2 == '')?'grey-2':(gikNovContents.kpi2 >= '0' && gikNovContents.kpi2 <= '19.05')?'red':(gikNovContents.kpi2 > '19.05' && gikNovContents.kpi2 <= '25.4')?'orange':(gikNovContents.kpi2 > '25.4' && gikNovContents.kpi2 < '31.75')?'yellow-7':(gikNovContents.kpi2 >= '31.75' && gikNovContents.kpi2 < '38.1')?'green':(gikNovContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikNovContents.kpi3 == '')?'grey-2':(gikNovContents.kpi3 >= '0' && gikNovContents.kpi3 <= '19.35')?'red':(gikNovContents.kpi3 > '19.35' && gikNovContents.kpi3 <= '25.8')?'orange':(gikNovContents.kpi3 > '25.8' && gikNovContents.kpi3 < '32.25')?'yellow-7':(gikNovContents.kpi3 >= '32.25' && gikNovContents.kpi3 < '38.7')?'green':(gikNovContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikNovContents.kpi4 == '')?'grey-2':(gikNovContents.kpi4 >= '0' && gikNovContents.kpi4 <= '19.2')?'red':(gikNovContents.kpi4 > '19.2' && gikNovContents.kpi4 <= '25.6')?'orange':(gikNovContents.kpi4 > '25.6' && gikNovContents.kpi4 < '32')?'yellow-7':(gikNovContents.kpi4 >= '32' && gikNovContents.kpi4 < '38.4')?'green':(gikNovContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikNovContents.kpi4}}
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
                              :color="(gikDecContents.kpi1 == '')?'grey-2':(gikDecContents.kpi1 >= '0' && gikDecContents.kpi1 <= '14.7')?'red':(gikDecContents.kpi1 > '14.7' && gikDecContents.kpi1 <= '19.6')?'orange':(gikDecContents.kpi1 > '19.6' && gikDecContents.kpi1 < '24.5')?'yellow-7':(gikDecContents.kpi1 >= '24.5' && gikDecContents.kpi1 < '29.40')?'green':(gikDecContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikDecContents.kpi2 == '')?'grey-2':(gikDecContents.kpi2 >= '0' && gikDecContents.kpi2 <= '19.05')?'red':(gikDecContents.kpi2 > '19.05' && gikDecContents.kpi2 <= '25.4')?'orange':(gikDecContents.kpi2 > '25.4' && gikDecContents.kpi2 < '31.75')?'yellow-7':(gikDecContents.kpi2 >= '31.75' && gikDecContents.kpi2 < '38.1')?'green':(gikDecContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikDecContents.kpi3 == '')?'grey-2':(gikDecContents.kpi3 >= '0' && gikDecContents.kpi3 <= '19.35')?'red':(gikDecContents.kpi3 > '19.35' && gikDecContents.kpi3 <= '25.8')?'orange':(gikDecContents.kpi3 > '25.8' && gikDecContents.kpi3 < '32.25')?'yellow-7':(gikDecContents.kpi3 >= '32.25' && gikDecContents.kpi3 < '38.7')?'green':(gikDecContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikDecContents.kpi4 == '')?'grey-2':(gikDecContents.kpi4 >= '0' && gikDecContents.kpi4 <= '19.2')?'red':(gikDecContents.kpi4 > '19.2' && gikDecContents.kpi4 <= '25.6')?'orange':(gikDecContents.kpi4 > '25.6' && gikDecContents.kpi4 < '32')?'yellow-7':(gikDecContents.kpi4 >= '32' && gikDecContents.kpi4 < '38.4')?'green':(gikDecContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikDecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>
                      </q-list>

           
</template>

<script>
import MeaningofColors from 'src/components/meaningofColors.vue';

export default {
    name: "gikKpiTable",
    components: { MeaningofColors },
}
</script>

<style>

</style>