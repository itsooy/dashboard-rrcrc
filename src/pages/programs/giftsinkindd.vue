<template>
  <q-page>
    <div class="row q-col-gutter-sm q-ma-xs q-mr-sm">
                <!--TABLE-->
      <div class="col-lg-5 col-md-12 col-sm-12 col-xs-12">
        <q-card>
          <h5 class="q-mt-xs q-ml-xl q-mb-md">{{$route.name}}</h5>
          <q-list dense class="rounded-borders" >
            <q-item>
              <q-item-section top>
                <q-item-label class="q-mt-xs q-ml-sm" >Months</q-item-label>
              </q-item-section>
              <q-item-section top>
                  <q-chip class="q-mt-xs q-ml-sm" square color="white">
                    KPI 1
                    <q-tooltip>KPI 1</q-tooltip>
                  </q-chip>        
              </q-item-section>
              <q-item-section top>
                  <q-chip class="q-mt-xs q-ml-sm" square color="white">
                    KPI 2
                    <q-tooltip>KPI 2</q-tooltip>
                  </q-chip>        
              </q-item-section>
              <q-item-section top>
                  <q-chip class="q-mt-xs q-ml-sm" square color="white">
                    KPI 3
                    <q-tooltip>KPI 3</q-tooltip>
                  </q-chip>        
              </q-item-section>
              <q-item-section top>
                  <q-chip class="q-mt-xs q-ml-sm" square color="white">
                    KPI 4
                    <q-tooltip>KPI 4</q-tooltip>
                  </q-chip>        
              </q-item-section>
              <q-item-section top>
                  <q-chip class="q-mt-xs q-ml-sm" square color="white">
                    KPI 5
                    <q-tooltip>KPI 5</q-tooltip>
                  </q-chip>        
              </q-item-section>
              <q-item-section top>
                  <q-chip class="q-mt-xs q-ml-sm" square color="white">
                    KPI 6
                    <q-tooltip>KPI 6</q-tooltip>
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
                  :color="(gikJanContents.kpi1 == null)?'grey-2':(gikJanContents.kpi1 >= '0' && gikJanContents.kpi1 <= '30')?'red':(gikJanContents.kpi1 > '30' && gikJanContents.kpi1 <= '40')?'orange':(gikJanContents.kpi1 > '40' && gikJanContents.kpi1 < '50')?'yellow-7':(gikJanContents.kpi1 >= '50' && gikJanContents.kpi1 < '700')?'green':(gikJanContents.kpi1 >= '700'?'blue':'grey-2')"
                >
                {{gikJanContents.kpi1}}
                  <q-tooltip>KPI 1</q-tooltip>
                </q-chip>        
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikJanContents.kpi2 == null)?'grey-2':(gikJanContents.kpi2 >= '0' && gikJanContents.kpi2 <= '30')?'red':(gikJanContents.kpi2 > '30' && gikJanContents.kpi2 <= '40')?'orange':(gikJanContents.kpi2 > '40' && gikJanContents.kpi2 < '50')?'yellow-7':(gikJanContents.kpi2 >= '50' && gikJanContents.kpi2 < '700')?'green':(gikJanContents.kpi2 >= '700'?'blue':'grey-2')"
                >
                {{gikJanContents.kpi2}}
                  <q-tooltip>KPI 2</q-tooltip>
                </q-chip>     
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikJanContents.kpi3 == null)?'grey-2':(gikJanContents.kpi3 >= '0' && gikJanContents.kpi3 <= '30')?'red':(gikJanContents.kpi3 > '30' && gikJanContents.kpi3 <= '40')?'orange':(gikJanContents.kpi3 > '40' && gikJanContents.kpi3 < '50')?'yellow-7':(gikJanContents.kpi3 >= '50' && gikJanContents.kpi3 < '700')?'green':(gikJanContents.kpi3 >= '700'?'blue':'grey-2')"
                >
                {{gikJanContents.kpi3}}
                  <q-tooltip>KPI 3</q-tooltip>
                </q-chip>       
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikJanContents.kpi4 == null)?'grey-2':(gikJanContents.kpi4 >= '0' && gikJanContents.kpi4 <= '30')?'red':(gikJanContents.kpi4 > '30' && gikJanContents.kpi4 <= '40')?'orange':(gikJanContents.kpi4 > '40' && gikJanContents.kpi4 < '50')?'yellow-7':(gikJanContents.kpi4 >= '50' && gikJanContents.kpi4 < '700')?'green':(gikJanContents.kpi4 >= '700'?'blue':'grey-2')"
                >
                {{gikJanContents.kpi4}}
                  <q-tooltip>KPI 4</q-tooltip>
                </q-chip>       
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikJanContents.kpi5 == null)?'grey-2':(gikJanContents.kpi5 >= '0' && gikJanContents.kpi5 <= '30')?'red':(gikJanContents.kpi5 > '30' && gikJanContents.kpi5 <= '40')?'orange':(gikJanContents.kpi5 > '40' && gikJanContents.kpi5 < '50')?'yellow-7':(gikJanContents.kpi5 >= '50' && gikJanContents.kpi5 < '700')?'green':(gikJanContents.kpi5 >= '700'?'blue':'grey-2')"
                >
                {{gikJanContents.kpi5}}
                  <q-tooltip>KPI 5</q-tooltip>
                </q-chip>      
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikJanContents.kpi6 == null)?'grey-2':(gikJanContents.kpi6 >= '0' && gikJanContents.kpi6 <= '30')?'red':(gikJanContents.kpi6 > '30' && gikJanContents.kpi6 <= '40')?'orange':(gikJanContents.kpi6 > '40' && gikJanContents.kpi6 < '50')?'yellow-7':(gikJanContents.kpi6 >= '50' && gikJanContents.kpi6 < '700')?'green':(gikJanContents.kpi6 >= '700'?'blue':'grey-2')"
                >
                {{gikJanContents.kpi6}}
                  <q-tooltip>KPI 6</q-tooltip>
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
                  :color="(gikFebContents.kpi1 == '')?'grey-2':(gikFebContents.kpi1 >= '0' && gikFebContents.kpi1 <= '30')?'red':(gikFebContents.kpi1 > '30' && gikFebContents.kpi1 <= '40')?'orange':(gikFebContents.kpi1 > '40' && gikFebContents.kpi1 < '50')?'yellow-7':(gikFebContents.kpi1 >= '50' && gikFebContents.kpi1 < '700')?'green':(gikFebContents.kpi1 >= '700'?'blue':'grey-2')"
                >
                {{gikFebContents.kpi1}}
                  <q-tooltip>KPI 1</q-tooltip>
                </q-chip>        
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikFebContents.kpi2 == '')?'grey-2':(gikFebContents.kpi2 >= '0' && gikFebContents.kpi2 <= '30')?'red':(gikFebContents.kpi2 > '30' && gikFebContents.kpi2 <= '40')?'orange':(gikFebContents.kpi2 > '40' && gikFebContents.kpi2 < '50')?'yellow-7':(gikFebContents.kpi2 >= '50' && gikFebContents.kpi2 < '700')?'green':(gikFebContents.kpi2 >= '700'?'blue':'grey-2')"
                >
                {{gikFebContents.kpi2}}
                  <q-tooltip>KPI 2</q-tooltip>
                </q-chip>     
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikFebContents.kpi3 == '')?'grey-2':(gikFebContents.kpi3 >= '0' && gikFebContents.kpi3 <= '30')?'red':(gikFebContents.kpi3 > '30' && gikFebContents.kpi3 <= '40')?'orange':(gikFebContents.kpi3 > '40' && gikFebContents.kpi3 < '50')?'yellow-7':(gikFebContents.kpi3 >= '50' && gikFebContents.kpi3 < '700')?'green':(gikFebContents.kpi3 >= '700'?'blue':'grey-2')"
                >
                {{gikFebContents.kpi3}}
                  <q-tooltip>KPI 3</q-tooltip>
                </q-chip>       
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikFebContents.kpi4 == '')?'grey-2':(gikFebContents.kpi4 >= '0' && gikFebContents.kpi4 <= '30')?'red':(gikFebContents.kpi4 > '30' && gikFebContents.kpi4 <= '40')?'orange':(gikFebContents.kpi4 > '40' && gikFebContents.kpi4 < '50')?'yellow-7':(gikFebContents.kpi4 >= '50' && gikFebContents.kpi4 < '700')?'green':(gikFebContents.kpi4 >= '700'?'blue':'grey-2')"
                >
                {{gikFebContents.kpi4}}
                  <q-tooltip>KPI 4</q-tooltip>
                </q-chip>       
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikFebContents.kpi5 == '')?'grey-2':(gikFebContents.kpi5 >= '0' && gikFebContents.kpi5 <= '30')?'red':(gikFebContents.kpi5 > '30' && gikFebContents.kpi5 <= '40')?'orange':(gikFebContents.kpi5 > '40' && gikFebContents.kpi5 < '50')?'yellow-7':(gikFebContents.kpi5 >= '50' && gikFebContents.kpi5 < '700')?'green':(gikFebContents.kpi5 >= '700'?'blue':'grey-2')"
                >
                {{gikFebContents.kpi5}}
                  <q-tooltip>KPI 5</q-tooltip>
                </q-chip>      
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikFebContents.kpi6 == '')?'grey-2':(gikFebContents.kpi6 >= '0' && gikFebContents.kpi6 <= '30')?'red':(gikFebContents.kpi6 > '30' && gikFebContents.kpi6 <= '40')?'orange':(gikFebContents.kpi6 > '40' && gikFebContents.kpi6 < '50')?'yellow-7':(gikFebContents.kpi6 >= '50' && gikFebContents.kpi6 < '700')?'green':(gikFebContents.kpi6 >= '700'?'blue':'grey-2')"
                >
                {{gikFebContents.kpi6}}
                  <q-tooltip>KPI 6</q-tooltip>
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
                  :color="(gikMarContents.kpi1 == '')?'grey-2':(gikMarContents.kpi1 >= '0' && gikMarContents.kpi1 <= '30')?'red':(gikMarContents.kpi1 > '30' && gikMarContents.kpi1 <= '40')?'orange':(gikMarContents.kpi1 > '40' && gikMarContents.kpi1 < '50')?'yellow-7':(gikMarContents.kpi1 >= '50' && gikMarContents.kpi1 < '700')?'green':(gikMarContents.kpi1 >= '700'?'blue':'grey-2')"
                >
                {{gikMarContents.kpi1}}
                  <q-tooltip>KPI 1</q-tooltip>
                </q-chip>        
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikMarContents.kpi2 == '')?'grey-2':(gikMarContents.kpi2 >= '0' && gikMarContents.kpi2 <= '30')?'red':(gikMarContents.kpi2 > '30' && gikMarContents.kpi2 <= '40')?'orange':(gikMarContents.kpi2 > '40' && gikMarContents.kpi2 < '50')?'yellow-7':(gikMarContents.kpi2 >= '50' && gikMarContents.kpi2 < '700')?'green':(gikMarContents.kpi2 >= '700'?'blue':'grey-2')"
                >
                {{gikMarContents.kpi2}}
                  <q-tooltip>KPI 2</q-tooltip>
                </q-chip>     
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikMarContents.kpi3 == '')?'grey-2':(gikMarContents.kpi3 >= '0' && gikMarContents.kpi3 <= '30')?'red':(gikMarContents.kpi3 > '30' && gikMarContents.kpi3 <= '40')?'orange':(gikMarContents.kpi3 > '40' && gikMarContents.kpi3 < '50')?'yellow-7':(gikMarContents.kpi3 >= '50' && gikMarContents.kpi3 < '700')?'green':(gikMarContents.kpi3 >= '700'?'blue':'grey-2')"
                >
                {{gikMarContents.kpi3}}
                  <q-tooltip>KPI 3</q-tooltip>
                </q-chip>       
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikMarContents.kpi4 == '')?'grey-2':(gikMarContents.kpi4 >= '0' && gikMarContents.kpi4 <= '30')?'red':(gikMarContents.kpi4 > '30' && gikMarContents.kpi4 <= '40')?'orange':(gikMarContents.kpi4 > '40' && gikMarContents.kpi4 < '50')?'yellow-7':(gikMarContents.kpi4 >= '50' && gikMarContents.kpi4 < '700')?'green':(gikMarContents.kpi4 >= '700'?'blue':'grey-2')"
                >
                {{gikMarContents.kpi4}}
                  <q-tooltip>KPI 4</q-tooltip>
                </q-chip>       
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikMarContents.kpi5 == '')?'grey-2':(gikMarContents.kpi5 >= '0' && gikMarContents.kpi5 <= '30')?'red':(gikMarContents.kpi5 > '30' && gikMarContents.kpi5 <= '40')?'orange':(gikMarContents.kpi5 > '40' && gikMarContents.kpi5 < '50')?'yellow-7':(gikMarContents.kpi5 >= '50' && gikMarContents.kpi5 < '700')?'green':(gikMarContents.kpi5 >= '700'?'blue':'grey-2')"
                >
                {{gikMarContents.kpi5}}
                  <q-tooltip>KPI 5</q-tooltip>
                </q-chip>      
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikMarContents.kpi6 == '')?'grey-2':(gikMarContents.kpi6 >= '0' && gikMarContents.kpi6 <= '30')?'red':(gikMarContents.kpi6 > '30' && gikMarContents.kpi6 <= '40')?'orange':(gikMarContents.kpi6 > '40' && gikMarContents.kpi6 < '50')?'yellow-7':(gikMarContents.kpi6 >= '50' && gikMarContents.kpi6 < '700')?'green':(gikMarContents.kpi6 >= '700'?'blue':'grey-2')"
                >
                {{gikMarContents.kpi6}}
                  <q-tooltip>KPI 6</q-tooltip>
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
                  :color="(gikAprContents.kpi1 == '')?'grey-2':(gikAprContents.kpi1 >= '0' && gikAprContents.kpi1 <= '30')?'red':(gikAprContents.kpi1 > '30' && gikAprContents.kpi1 <= '40')?'orange':(gikAprContents.kpi1 > '40' && gikAprContents.kpi1 < '50')?'yellow-7':(gikAprContents.kpi1 >= '50' && gikAprContents.kpi1 < '700')?'green':(gikAprContents.kpi1 >= '700'?'blue':'grey-2')"
                >
                {{gikAprContents.kpi1}}
                  <q-tooltip>KPI 1</q-tooltip>
                </q-chip>        
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikAprContents.kpi2 == '')?'grey-2':(gikAprContents.kpi2 >= '0' && gikAprContents.kpi2 <= '30')?'red':(gikAprContents.kpi2 > '30' && gikAprContents.kpi2 <= '40')?'orange':(gikAprContents.kpi2 > '40' && gikAprContents.kpi2 < '50')?'yellow-7':(gikAprContents.kpi2 >= '50' && gikAprContents.kpi2 < '700')?'green':(gikAprContents.kpi2 >= '700'?'blue':'grey-2')"
                >
                {{gikAprContents.kpi2}}
                  <q-tooltip>KPI 2</q-tooltip>
                </q-chip>     
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikAprContents.kpi3 == '')?'grey-2':(gikAprContents.kpi3 >= '0' && gikAprContents.kpi3 <= '30')?'red':(gikAprContents.kpi3 > '30' && gikAprContents.kpi3 <= '40')?'orange':(gikAprContents.kpi3 > '40' && gikAprContents.kpi3 < '50')?'yellow-7':(gikAprContents.kpi3 >= '50' && gikAprContents.kpi3 < '700')?'green':(gikAprContents.kpi3 >= '700'?'blue':'grey-2')"
                >
                {{gikAprContents.kpi3}}
                  <q-tooltip>KPI 3</q-tooltip>
                </q-chip>       
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikAprContents.kpi4 == '')?'grey-2':(gikAprContents.kpi4 >= '0' && gikAprContents.kpi4 <= '30')?'red':(gikAprContents.kpi4 > '30' && gikAprContents.kpi4 <= '40')?'orange':(gikAprContents.kpi4 > '40' && gikAprContents.kpi4 < '50')?'yellow-7':(gikAprContents.kpi4 >= '50' && gikAprContents.kpi4 < '700')?'green':(gikAprContents.kpi4 >= '700'?'blue':'grey-2')"
                >
                {{gikAprContents.kpi4}}
                  <q-tooltip>KPI 4</q-tooltip>
                </q-chip>       
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikAprContents.kpi5 == '')?'grey-2':(gikAprContents.kpi5 >= '0' && gikAprContents.kpi5 <= '30')?'red':(gikAprContents.kpi5 > '30' && gikAprContents.kpi5 <= '40')?'orange':(gikAprContents.kpi5 > '40' && gikAprContents.kpi5 < '50')?'yellow-7':(gikAprContents.kpi5 >= '50' && gikAprContents.kpi5 < '700')?'green':(gikAprContents.kpi5 >= '700'?'blue':'grey-2')"
                >
                {{gikAprContents.kpi5}}
                  <q-tooltip>KPI 5</q-tooltip>
                </q-chip>      
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikAprContents.kpi6 == '')?'grey-2':(gikAprContents.kpi6 >= '0' && gikAprContents.kpi6 <= '30')?'red':(gikAprContents.kpi6 > '30' && gikAprContents.kpi6 <= '40')?'orange':(gikAprContents.kpi6 > '40' && gikAprContents.kpi6 < '50')?'yellow-7':(gikAprContents.kpi6 >= '50' && gikAprContents.kpi6 < '700')?'green':(gikAprContents.kpi6 >= '700'?'blue':'grey-2')"
                >
                {{gikAprContents.kpi6}}
                  <q-tooltip>KPI 6</q-tooltip>
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
                  :color="(gikMayContents.kpi1 == '')?'grey-2':(gikMayContents.kpi1 >= '0' && gikMayContents.kpi1 <= '30')?'red':(gikMayContents.kpi1 > '30' && gikMayContents.kpi1 <= '40')?'orange':(gikMayContents.kpi1 > '40' && gikMayContents.kpi1 < '50')?'yellow-7':(gikMayContents.kpi1 >= '50' && gikMayContents.kpi1 < '700')?'green':(gikMayContents.kpi1 >= '700'?'blue':'grey-2')"
                >
                {{gikMayContents.kpi1}}
                  <q-tooltip>KPI 1</q-tooltip>
                </q-chip>        
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikMayContents.kpi2 == '')?'grey-2':(gikMayContents.kpi2 >= '0' && gikMayContents.kpi2 <= '30')?'red':(gikMayContents.kpi2 > '30' && gikMayContents.kpi2 <= '40')?'orange':(gikMayContents.kpi2 > '40' && gikMayContents.kpi2 < '50')?'yellow-7':(gikMayContents.kpi2 >= '50' && gikMayContents.kpi2 < '700')?'green':(gikMayContents.kpi2 >= '700'?'blue':'grey-2')"
                >
                {{gikMayContents.kpi2}}
                  <q-tooltip>KPI 2</q-tooltip>
                </q-chip>     
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikMayContents.kpi3 == '')?'grey-2':(gikMayContents.kpi3 >= '0' && gikMayContents.kpi3 <= '30')?'red':(gikMayContents.kpi3 > '30' && gikMayContents.kpi3 <= '40')?'orange':(gikMayContents.kpi3 > '40' && gikMayContents.kpi3 < '50')?'yellow-7':(gikMayContents.kpi3 >= '50' && gikMayContents.kpi3 < '700')?'green':(gikMayContents.kpi3 >= '700'?'blue':'grey-2')"
                >
                {{gikMayContents.kpi3}}
                  <q-tooltip>KPI 3</q-tooltip>
                </q-chip>       
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikMayContents.kpi4 == '')?'grey-2':(gikMayContents.kpi4 >= '0' && gikMayContents.kpi4 <= '30')?'red':(gikMayContents.kpi4 > '30' && gikMayContents.kpi4 <= '40')?'orange':(gikMayContents.kpi4 > '40' && gikMayContents.kpi4 < '50')?'yellow-7':(gikMayContents.kpi4 >= '50' && gikMayContents.kpi4 < '700')?'green':(gikMayContents.kpi4 >= '700'?'blue':'grey-2')"
                >
                {{gikMayContents.kpi4}}
                  <q-tooltip>KPI 4</q-tooltip>
                </q-chip>       
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikMayContents.kpi5 == '')?'grey-2':(gikMayContents.kpi5 >= '0' && gikMayContents.kpi5 <= '30')?'red':(gikMayContents.kpi5 > '30' && gikMayContents.kpi5 <= '40')?'orange':(gikMayContents.kpi5 > '40' && gikMayContents.kpi5 < '50')?'yellow-7':(gikMayContents.kpi5 >= '50' && gikMayContents.kpi5 < '700')?'green':(gikMayContents.kpi5 >= '700'?'blue':'grey-2')"
                >
                {{gikMayContents.kpi5}}
                  <q-tooltip>KPI 5</q-tooltip>
                </q-chip>      
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikMayContents.kpi6 == '')?'grey-2':(gikMayContents.kpi6 >= '0' && gikMayContents.kpi6 <= '30')?'red':(gikMayContents.kpi6 > '30' && gikMayContents.kpi6 <= '40')?'orange':(gikMayContents.kpi6 > '40' && gikMayContents.kpi6 < '50')?'yellow-7':(gikMayContents.kpi6 >= '50' && gikMayContents.kpi6 < '700')?'green':(gikMayContents.kpi6 >= '700'?'blue':'grey-2')"
                >
                {{gikMayContents.kpi6}}
                  <q-tooltip>KPI 6</q-tooltip>
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
                  :color="(gikJunContents.kpi1 == '')?'grey-2':(gikJunContents.kpi1 >= '0' && gikJunContents.kpi1 <= '30')?'red':(gikJunContents.kpi1 > '30' && gikJunContents.kpi1 <= '40')?'orange':(gikJunContents.kpi1 > '40' && gikJunContents.kpi1 < '50')?'yellow-7':(gikJunContents.kpi1 >= '50' && gikJunContents.kpi1 < '700')?'green':(gikJunContents.kpi1 >= '700'?'blue':'grey-2')"
                >
                {{gikJunContents.kpi1}}
                  <q-tooltip>KPI 1</q-tooltip>
                </q-chip>        
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikJunContents.kpi2 == '')?'grey-2':(gikJunContents.kpi2 >= '0' && gikJunContents.kpi2 <= '30')?'red':(gikJunContents.kpi2 > '30' && gikJunContents.kpi2 <= '40')?'orange':(gikJunContents.kpi2 > '40' && gikJunContents.kpi2 < '50')?'yellow-7':(gikJunContents.kpi2 >= '50' && gikJunContents.kpi2 < '700')?'green':(gikJunContents.kpi2 >= '700'?'blue':'grey-2')"
                >
                {{gikJunContents.kpi2}}
                  <q-tooltip>KPI 2</q-tooltip>
                </q-chip>     
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikJunContents.kpi3 == '')?'grey-2':(gikJunContents.kpi3 >= '0' && gikJunContents.kpi3 <= '30')?'red':(gikJunContents.kpi3 > '30' && gikJunContents.kpi3 <= '40')?'orange':(gikJunContents.kpi3 > '40' && gikJunContents.kpi3 < '50')?'yellow-7':(gikJunContents.kpi3 >= '50' && gikJunContents.kpi3 < '700')?'green':(gikJunContents.kpi3 >= '700'?'blue':'grey-2')"
                >
                {{gikJunContents.kpi3}}
                  <q-tooltip>KPI 3</q-tooltip>
                </q-chip>       
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikJunContents.kpi4 == '')?'grey-2':(gikJunContents.kpi4 >= '0' && gikJunContents.kpi4 <= '30')?'red':(gikJunContents.kpi4 > '30' && gikJunContents.kpi4 <= '40')?'orange':(gikJunContents.kpi4 > '40' && gikJunContents.kpi4 < '50')?'yellow-7':(gikJunContents.kpi4 >= '50' && gikJunContents.kpi4 < '700')?'green':(gikJunContents.kpi4 >= '700'?'blue':'grey-2')"
                >
                {{gikJunContents.kpi4}}
                  <q-tooltip>KPI 4</q-tooltip>
                </q-chip>       
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikJunContents.kpi5 == '')?'grey-2':(gikJunContents.kpi5 >= '0' && gikJunContents.kpi5 <= '30')?'red':(gikJunContents.kpi5 > '30' && gikJunContents.kpi5 <= '40')?'orange':(gikJunContents.kpi5 > '40' && gikJunContents.kpi5 < '50')?'yellow-7':(gikJunContents.kpi5 >= '50' && gikJunContents.kpi5 < '700')?'green':(gikJunContents.kpi5 >= '700'?'blue':'grey-2')"
                >
                {{gikJunContents.kpi5}}
                  <q-tooltip>KPI 5</q-tooltip>
                </q-chip>      
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikJunContents.kpi6 == '')?'grey-2':(gikJunContents.kpi6 >= '0' && gikJunContents.kpi6 <= '30')?'red':(gikJunContents.kpi6 > '30' && gikJunContents.kpi6 <= '40')?'orange':(gikJunContents.kpi6 > '40' && gikJunContents.kpi6 < '50')?'yellow-7':(gikJunContents.kpi6 >= '50' && gikJunContents.kpi6 < '700')?'green':(gikJunContents.kpi6 >= '700'?'blue':'grey-2')"
                >
                {{gikJunContents.kpi6}}
                  <q-tooltip>KPI 6</q-tooltip>
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
                  :color="(gikJulContents.kpi1 == '')?'grey-2':(gikJulContents.kpi1 >= '0' && gikJulContents.kpi1 <= '30')?'red':(gikJulContents.kpi1 > '30' && gikJulContents.kpi1 <= '40')?'orange':(gikJulContents.kpi1 > '40' && gikJulContents.kpi1 < '50')?'yellow-7':(gikJulContents.kpi1 >= '50' && gikJulContents.kpi1 < '700')?'green':(gikJulContents.kpi1 >= '700'?'blue':'grey-2')"
                >
                {{gikJulContents.kpi1}}
                  <q-tooltip>KPI 1</q-tooltip>
                </q-chip>        
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikJulContents.kpi2 == '')?'grey-2':(gikJulContents.kpi2 >= '0' && gikJulContents.kpi2 <= '30')?'red':(gikJulContents.kpi2 > '30' && gikJulContents.kpi2 <= '40')?'orange':(gikJulContents.kpi2 > '40' && gikJulContents.kpi2 < '50')?'yellow-7':(gikJulContents.kpi2 >= '50' && gikJulContents.kpi2 < '700')?'green':(gikJulContents.kpi2 >= '700'?'blue':'grey-2')"
                >
                {{gikJulContents.kpi2}}
                  <q-tooltip>KPI 2</q-tooltip>
                </q-chip>     
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikJulContents.kpi3 == '')?'grey-2':(gikJulContents.kpi3 >= '0' && gikJulContents.kpi3 <= '30')?'red':(gikJulContents.kpi3 > '30' && gikJulContents.kpi3 <= '40')?'orange':(gikJulContents.kpi3 > '40' && gikJulContents.kpi3 < '50')?'yellow-7':(gikJulContents.kpi3 >= '50' && gikJulContents.kpi3 < '700')?'green':(gikJulContents.kpi3 >= '700'?'blue':'grey-2')"
                >
                {{gikJulContents.kpi3}}
                  <q-tooltip>KPI 3</q-tooltip>
                </q-chip>       
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikJulContents.kpi4 == '')?'grey-2':(gikJulContents.kpi4 >= '0' && gikJulContents.kpi4 <= '30')?'red':(gikJulContents.kpi4 > '30' && gikJulContents.kpi4 <= '40')?'orange':(gikJulContents.kpi4 > '40' && gikJulContents.kpi4 < '50')?'yellow-7':(gikJulContents.kpi4 >= '50' && gikJulContents.kpi4 < '700')?'green':(gikJulContents.kpi4 >= '700'?'blue':'grey-2')"
                >
                {{gikJulContents.kpi4}}
                  <q-tooltip>KPI 4</q-tooltip>
                </q-chip>       
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikJulContents.kpi5 == '')?'grey-2':(gikJulContents.kpi5 >= '0' && gikJulContents.kpi5 <= '30')?'red':(gikJulContents.kpi5 > '30' && gikJulContents.kpi5 <= '40')?'orange':(gikJulContents.kpi5 > '40' && gikJulContents.kpi5 < '50')?'yellow-7':(gikJulContents.kpi5 >= '50' && gikJulContents.kpi5 < '700')?'green':(gikJulContents.kpi5 >= '700'?'blue':'grey-2')"
                >
                {{gikJulContents.kpi5}}
                  <q-tooltip>KPI 5</q-tooltip>
                </q-chip>      
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikJulContents.kpi6 == '')?'grey-2':(gikJulContents.kpi6 >= '0' && gikJulContents.kpi6 <= '30')?'red':(gikJulContents.kpi6 > '30' && gikJulContents.kpi6 <= '40')?'orange':(gikJulContents.kpi6 > '40' && gikJulContents.kpi6 < '50')?'yellow-7':(gikJulContents.kpi6 >= '50' && gikJulContents.kpi6 < '700')?'green':(gikJulContents.kpi6 >= '700'?'blue':'grey-2')"
                >
                {{gikJulContents.kpi6}}
                  <q-tooltip>KPI 6</q-tooltip>
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
                  :color="(gikAugContents.kpi1 == '')?'grey-2':(gikAugContents.kpi1 >= '0' && gikAugContents.kpi1 <= '30')?'red':(gikAugContents.kpi1 > '30' && gikAugContents.kpi1 <= '40')?'orange':(gikAugContents.kpi1 > '40' && gikAugContents.kpi1 < '50')?'yellow-7':(gikAugContents.kpi1 >= '50' && gikAugContents.kpi1 < '700')?'green':(gikAugContents.kpi1 >= '700'?'blue':'grey-2')"
                >
                {{gikAugContents.kpi1}}
                  <q-tooltip>KPI 1</q-tooltip>
                </q-chip>        
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikAugContents.kpi2 == '')?'grey-2':(gikAugContents.kpi2 >= '0' && gikAugContents.kpi2 <= '30')?'red':(gikAugContents.kpi2 > '30' && gikAugContents.kpi2 <= '40')?'orange':(gikAugContents.kpi2 > '40' && gikAugContents.kpi2 < '50')?'yellow-7':(gikAugContents.kpi2 >= '50' && gikAugContents.kpi2 < '700')?'green':(gikAugContents.kpi2 >= '700'?'blue':'grey-2')"
                >
                {{gikAugContents.kpi2}}
                  <q-tooltip>KPI 2</q-tooltip>
                </q-chip>     
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikAugContents.kpi3 == '')?'grey-2':(gikAugContents.kpi3 >= '0' && gikAugContents.kpi3 <= '30')?'red':(gikAugContents.kpi3 > '30' && gikAugContents.kpi3 <= '40')?'orange':(gikAugContents.kpi3 > '40' && gikAugContents.kpi3 < '50')?'yellow-7':(gikAugContents.kpi3 >= '50' && gikAugContents.kpi3 < '700')?'green':(gikAugContents.kpi3 >= '700'?'blue':'grey-2')"
                >
                {{gikAugContents.kpi3}}
                  <q-tooltip>KPI 3</q-tooltip>
                </q-chip>       
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikAugContents.kpi4 == '')?'grey-2':(gikAugContents.kpi4 >= '0' && gikAugContents.kpi4 <= '30')?'red':(gikAugContents.kpi4 > '30' && gikAugContents.kpi4 <= '40')?'orange':(gikAugContents.kpi4 > '40' && gikAugContents.kpi4 < '50')?'yellow-7':(gikAugContents.kpi4 >= '50' && gikAugContents.kpi4 < '700')?'green':(gikAugContents.kpi4 >= '700'?'blue':'grey-2')"
                >
                {{gikAugContents.kpi4}}
                  <q-tooltip>KPI 4</q-tooltip>
                </q-chip>       
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikAugContents.kpi5 == '')?'grey-2':(gikAugContents.kpi5 >= '0' && gikAugContents.kpi5 <= '30')?'red':(gikAugContents.kpi5 > '30' && gikAugContents.kpi5 <= '40')?'orange':(gikAugContents.kpi5 > '40' && gikAugContents.kpi5 < '50')?'yellow-7':(gikAugContents.kpi5 >= '50' && gikAugContents.kpi5 < '700')?'green':(gikAugContents.kpi5 >= '700'?'blue':'grey-2')"
                >
                {{gikAugContents.kpi5}}
                  <q-tooltip>KPI 5</q-tooltip>
                </q-chip>      
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikAugContents.kpi6 == '')?'grey-2':(gikAugContents.kpi6 >= '0' && gikAugContents.kpi6 <= '30')?'red':(gikAugContents.kpi6 > '30' && gikAugContents.kpi6 <= '40')?'orange':(gikAugContents.kpi6 > '40' && gikAugContents.kpi6 < '50')?'yellow-7':(gikAugContents.kpi6 >= '50' && gikAugContents.kpi6 < '700')?'green':(gikAugContents.kpi6 >= '700'?'blue':'grey-2')"
                >
                {{gikAugContents.kpi6}}
                  <q-tooltip>KPI 6</q-tooltip>
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
                  :color="(gikSepContents.kpi1 == '')?'grey-2':(gikSepContents.kpi1 >= '0' && gikSepContents.kpi1 <= '30')?'red':(gikSepContents.kpi1 > '30' && gikSepContents.kpi1 <= '40')?'orange':(gikSepContents.kpi1 > '40' && gikSepContents.kpi1 < '50')?'yellow-7':(gikSepContents.kpi1 >= '50' && gikSepContents.kpi1 < '700')?'green':(gikSepContents.kpi1 >= '700'?'blue':'grey-2')"
                >
                {{gikSepContents.kpi1}}
                  <q-tooltip>KPI 1</q-tooltip>
                </q-chip>        
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikSepContents.kpi2 == '')?'grey-2':(gikSepContents.kpi2 >= '0' && gikSepContents.kpi2 <= '30')?'red':(gikSepContents.kpi2 > '30' && gikSepContents.kpi2 <= '40')?'orange':(gikSepContents.kpi2 > '40' && gikSepContents.kpi2 < '50')?'yellow-7':(gikSepContents.kpi2 >= '50' && gikSepContents.kpi2 < '700')?'green':(gikSepContents.kpi2 >= '700'?'blue':'grey-2')"
                >
                {{gikSepContents.kpi2}}
                  <q-tooltip>KPI 2</q-tooltip>
                </q-chip>     
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikSepContents.kpi3 == '')?'grey-2':(gikSepContents.kpi3 >= '0' && gikSepContents.kpi3 <= '30')?'red':(gikSepContents.kpi3 > '30' && gikSepContents.kpi3 <= '40')?'orange':(gikSepContents.kpi3 > '40' && gikSepContents.kpi3 < '50')?'yellow-7':(gikSepContents.kpi3 >= '50' && gikSepContents.kpi3 < '700')?'green':(gikSepContents.kpi3 >= '700'?'blue':'grey-2')"
                >
                {{gikSepContents.kpi3}}
                  <q-tooltip>KPI 3</q-tooltip>
                </q-chip>       
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikSepContents.kpi4 == '')?'grey-2':(gikSepContents.kpi4 >= '0' && gikSepContents.kpi4 <= '30')?'red':(gikSepContents.kpi4 > '30' && gikSepContents.kpi4 <= '40')?'orange':(gikSepContents.kpi4 > '40' && gikSepContents.kpi4 < '50')?'yellow-7':(gikSepContents.kpi4 >= '50' && gikSepContents.kpi4 < '700')?'green':(gikSepContents.kpi4 >= '700'?'blue':'grey-2')"
                >
                {{gikSepContents.kpi4}}
                  <q-tooltip>KPI 4</q-tooltip>
                </q-chip>       
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikSepContents.kpi5 == '')?'grey-2':(gikSepContents.kpi5 >= '0' && gikSepContents.kpi5 <= '30')?'red':(gikSepContents.kpi5 > '30' && gikSepContents.kpi5 <= '40')?'orange':(gikSepContents.kpi5 > '40' && gikSepContents.kpi5 < '50')?'yellow-7':(gikSepContents.kpi5 >= '50' && gikSepContents.kpi5 < '700')?'green':(gikSepContents.kpi5 >= '700'?'blue':'grey-2')"
                >
                {{gikSepContents.kpi5}}
                  <q-tooltip>KPI 5</q-tooltip>
                </q-chip>      
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikSepContents.kpi6 == '')?'grey-2':(gikSepContents.kpi6 >= '0' && gikSepContents.kpi6 <= '30')?'red':(gikSepContents.kpi6 > '30' && gikSepContents.kpi6 <= '40')?'orange':(gikSepContents.kpi6 > '40' && gikSepContents.kpi6 < '50')?'yellow-7':(gikSepContents.kpi6 >= '50' && gikSepContents.kpi6 < '700')?'green':(gikSepContents.kpi6 >= '700'?'blue':'grey-2')"
                >
                {{gikSepContents.kpi6}}
                  <q-tooltip>KPI 6</q-tooltip>
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
                  :color="(gikOctContents.kpi1 == '')?'grey-2':(gikOctContents.kpi1 >= '0' && gikOctContents.kpi1 <= '30')?'red':(gikOctContents.kpi1 > '30' && gikOctContents.kpi1 <= '40')?'orange':(gikOctContents.kpi1 > '40' && gikOctContents.kpi1 < '50')?'yellow-7':(gikOctContents.kpi1 >= '50' && gikOctContents.kpi1 < '700')?'green':(gikOctContents.kpi1 >= '700'?'blue':'grey-2')"
                >
                {{gikOctContents.kpi1}}
                  <q-tooltip>KPI 1</q-tooltip>
                </q-chip>        
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikOctContents.kpi2 == '')?'grey-2':(gikOctContents.kpi2 >= '0' && gikOctContents.kpi2 <= '30')?'red':(gikOctContents.kpi2 > '30' && gikOctContents.kpi2 <= '40')?'orange':(gikOctContents.kpi2 > '40' && gikOctContents.kpi2 < '50')?'yellow-7':(gikOctContents.kpi2 >= '50' && gikOctContents.kpi2 < '700')?'green':(gikOctContents.kpi2 >= '700'?'blue':'grey-2')"
                >
                {{gikOctContents.kpi2}}
                  <q-tooltip>KPI 2</q-tooltip>
                </q-chip>     
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikOctContents.kpi3 == '')?'grey-2':(gikOctContents.kpi3 >= '0' && gikOctContents.kpi3 <= '30')?'red':(gikOctContents.kpi3 > '30' && gikOctContents.kpi3 <= '40')?'orange':(gikOctContents.kpi3 > '40' && gikOctContents.kpi3 < '50')?'yellow-7':(gikOctContents.kpi3 >= '50' && gikOctContents.kpi3 < '700')?'green':(gikOctContents.kpi3 >= '700'?'blue':'grey-2')"
                >
                {{gikOctContents.kpi3}}
                  <q-tooltip>KPI 3</q-tooltip>
                </q-chip>       
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikOctContents.kpi4 == '')?'grey-2':(gikOctContents.kpi4 >= '0' && gikOctContents.kpi4 <= '30')?'red':(gikOctContents.kpi4 > '30' && gikOctContents.kpi4 <= '40')?'orange':(gikOctContents.kpi4 > '40' && gikOctContents.kpi4 < '50')?'yellow-7':(gikOctContents.kpi4 >= '50' && gikOctContents.kpi4 < '700')?'green':(gikOctContents.kpi4 >= '700'?'blue':'grey-2')"
                >
                {{gikOctContents.kpi4}}
                  <q-tooltip>KPI 4</q-tooltip>
                </q-chip>       
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikOctContents.kpi5 == '')?'grey-2':(gikOctContents.kpi5 >= '0' && gikOctContents.kpi5 <= '30')?'red':(gikOctContents.kpi5 > '30' && gikOctContents.kpi5 <= '40')?'orange':(gikOctContents.kpi5 > '40' && gikOctContents.kpi5 < '50')?'yellow-7':(gikOctContents.kpi5 >= '50' && gikOctContents.kpi5 < '700')?'green':(gikOctContents.kpi5 >= '700'?'blue':'grey-2')"
                >
                {{gikOctContents.kpi5}}
                  <q-tooltip>KPI 5</q-tooltip>
                </q-chip>      
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikOctContents.kpi6 == '')?'grey-2':(gikOctContents.kpi6 >= '0' && gikOctContents.kpi6 <= '30')?'red':(gikOctContents.kpi6 > '30' && gikOctContents.kpi6 <= '40')?'orange':(gikOctContents.kpi6 > '40' && gikOctContents.kpi6 < '50')?'yellow-7':(gikOctContents.kpi6 >= '50' && gikOctContents.kpi6 < '700')?'green':(gikOctContents.kpi6 >= '700'?'blue':'grey-2')"
                >
                {{gikOctContents.kpi6}}
                  <q-tooltip>KPI 6</q-tooltip>
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
                  :color="(gikNovContents.kpi1 == '')?'grey-2':(gikNovContents.kpi1 >= '0' && gikNovContents.kpi1 <= '30')?'red':(gikNovContents.kpi1 > '30' && gikNovContents.kpi1 <= '40')?'orange':(gikNovContents.kpi1 > '40' && gikNovContents.kpi1 < '50')?'yellow-7':(gikNovContents.kpi1 >= '50' && gikNovContents.kpi1 < '700')?'green':(gikNovContents.kpi1 >= '700'?'blue':'grey-2')"
                >
                {{gikNovContents.kpi1}}
                  <q-tooltip>KPI 1</q-tooltip>
                </q-chip>        
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikNovContents.kpi2 == '')?'grey-2':(gikNovContents.kpi2 >= '0' && gikNovContents.kpi2 <= '30')?'red':(gikNovContents.kpi2 > '30' && gikNovContents.kpi2 <= '40')?'orange':(gikNovContents.kpi2 > '40' && gikNovContents.kpi2 < '50')?'yellow-7':(gikNovContents.kpi2 >= '50' && gikNovContents.kpi2 < '700')?'green':(gikNovContents.kpi2 >= '700'?'blue':'grey-2')"
                >
                {{gikNovContents.kpi2}}
                  <q-tooltip>KPI 2</q-tooltip>
                </q-chip>     
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikNovContents.kpi3 == '')?'grey-2':(gikNovContents.kpi3 >= '0' && gikNovContents.kpi3 <= '30')?'red':(gikNovContents.kpi3 > '30' && gikNovContents.kpi3 <= '40')?'orange':(gikNovContents.kpi3 > '40' && gikNovContents.kpi3 < '50')?'yellow-7':(gikNovContents.kpi3 >= '50' && gikNovContents.kpi3 < '700')?'green':(gikNovContents.kpi3 >= '700'?'blue':'grey-2')"
                >
                {{gikNovContents.kpi3}}
                  <q-tooltip>KPI 3</q-tooltip>
                </q-chip>       
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikNovContents.kpi4 == '')?'grey-2':(gikNovContents.kpi4 >= '0' && gikNovContents.kpi4 <= '30')?'red':(gikNovContents.kpi4 > '30' && gikNovContents.kpi4 <= '40')?'orange':(gikNovContents.kpi4 > '40' && gikNovContents.kpi4 < '50')?'yellow-7':(gikNovContents.kpi4 >= '50' && gikNovContents.kpi4 < '700')?'green':(gikNovContents.kpi4 >= '700'?'blue':'grey-2')"
                >
                {{gikNovContents.kpi4}}
                  <q-tooltip>KPI 4</q-tooltip>
                </q-chip>       
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikNovContents.kpi5 == '')?'grey-2':(gikNovContents.kpi5 >= '0' && gikNovContents.kpi5 <= '30')?'red':(gikNovContents.kpi5 > '30' && gikNovContents.kpi5 <= '40')?'orange':(gikNovContents.kpi5 > '40' && gikNovContents.kpi5 < '50')?'yellow-7':(gikNovContents.kpi5 >= '50' && gikNovContents.kpi5 < '700')?'green':(gikNovContents.kpi5 >= '700'?'blue':'grey-2')"
                >
                {{gikNovContents.kpi5}}
                  <q-tooltip>KPI 5</q-tooltip>
                </q-chip>      
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikNovContents.kpi6 == '')?'grey-2':(gikNovContents.kpi6 >= '0' && gikNovContents.kpi6 <= '30')?'red':(gikNovContents.kpi6 > '30' && gikNovContents.kpi6 <= '40')?'orange':(gikNovContents.kpi6 > '40' && gikNovContents.kpi6 < '50')?'yellow-7':(gikNovContents.kpi6 >= '50' && gikNovContents.kpi6 < '700')?'green':(gikNovContents.kpi6 >= '700'?'blue':'grey-2')"
                >
                {{gikNovContents.kpi6}}
                  <q-tooltip>KPI 6</q-tooltip>
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
                  :color="(gikDecContents.kpi1 == '')?'grey-2':(gikDecContents.kpi1 >= '0' && gikDecContents.kpi1 <= '30')?'red':(gikDecContents.kpi1 > '30' && gikDecContents.kpi1 <= '40')?'orange':(gikDecContents.kpi1 > '40' && gikDecContents.kpi1 < '50')?'yellow-7':(gikDecContents.kpi1 >= '50' && gikDecContents.kpi1 < '700')?'green':(gikDecContents.kpi1 >= '700'?'blue':'grey-2')"
                >
                {{gikDecContents.kpi1}}
                  <q-tooltip>KPI 1</q-tooltip>
                </q-chip>        
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikDecContents.kpi2 == '')?'grey-2':(gikDecContents.kpi2 >= '0' && gikDecContents.kpi2 <= '30')?'red':(gikDecContents.kpi2 > '30' && gikDecContents.kpi2 <= '40')?'orange':(gikDecContents.kpi2 > '40' && gikDecContents.kpi2 < '50')?'yellow-7':(gikDecContents.kpi2 >= '50' && gikDecContents.kpi2 < '700')?'green':(gikDecContents.kpi2 >= '700'?'blue':'grey-2')"
                >
                {{gikDecContents.kpi2}}
                  <q-tooltip>KPI 2</q-tooltip>
                </q-chip>     
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikDecContents.kpi3 == '')?'grey-2':(gikDecContents.kpi3 >= '0' && gikDecContents.kpi3 <= '30')?'red':(gikDecContents.kpi3 > '30' && gikDecContents.kpi3 <= '40')?'orange':(gikDecContents.kpi3 > '40' && gikDecContents.kpi3 < '50')?'yellow-7':(gikDecContents.kpi3 >= '50' && gikDecContents.kpi3 < '700')?'green':(gikDecContents.kpi3 >= '700'?'blue':'grey-2')"
                >
                {{gikDecContents.kpi3}}
                  <q-tooltip>KPI 3</q-tooltip>
                </q-chip>       
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikDecContents.kpi4 == '')?'grey-2':(gikDecContents.kpi4 >= '0' && gikDecContents.kpi4 <= '30')?'red':(gikDecContents.kpi4 > '30' && gikDecContents.kpi4 <= '40')?'orange':(gikDecContents.kpi4 > '40' && gikDecContents.kpi4 < '50')?'yellow-7':(gikDecContents.kpi4 >= '50' && gikDecContents.kpi4 < '700')?'green':(gikDecContents.kpi4 >= '700'?'blue':'grey-2')"
                >
                {{gikDecContents.kpi4}}
                  <q-tooltip>KPI 4</q-tooltip>
                </q-chip>       
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikDecContents.kpi5 == '')?'grey-2':(gikDecContents.kpi5 >= '0' && gikDecContents.kpi5 <= '30')?'red':(gikDecContents.kpi5 > '30' && gikDecContents.kpi5 <= '40')?'orange':(gikDecContents.kpi5 > '40' && gikDecContents.kpi5 < '50')?'yellow-7':(gikDecContents.kpi5 >= '50' && gikDecContents.kpi5 < '700')?'green':(gikDecContents.kpi5 >= '700'?'blue':'grey-2')"
                >
                {{gikDecContents.kpi5}}
                  <q-tooltip>KPI 5</q-tooltip>
                </q-chip>      
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikDecContents.kpi6 == '')?'grey-2':(gikDecContents.kpi6 >= '0' && gikDecContents.kpi6 <= '30')?'red':(gikDecContents.kpi6 > '30' && gikDecContents.kpi6 <= '40')?'orange':(gikDecContents.kpi6 > '40' && gikDecContents.kpi6 < '50')?'yellow-7':(gikDecContents.kpi6 >= '50' && gikDecContents.kpi6 < '700')?'green':(gikDecContents.kpi6 >= '700'?'blue':'grey-2')"
                >
                {{gikDecContents.kpi6}}
                  <q-tooltip>KPI 6</q-tooltip>
                </q-chip>       
              </q-item-section>
            </q-item>
          </q-list>
          <q-separator />
          <meaningof-colors/> <!--Using component of Meaning of Colors-->
        </q-card>
      </div>
      <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
        <q-card flat bordered class="">
          <!--
          <div class="center">
            {{ $route.name }}
          </div>
          -->
          <q-card-section style="height:170px">
            <q-img src="/statics/GIKlogoforTOP.png"></q-img>
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
            <IEcharts ref="gauge" :option="gaugeOptions" :resizable="true" style="height:345px"/>
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
            <IEcharts ref="pie" :option="pieOptions" :resizable="true" style="height:515px"/>
          </q-card-section>
        </q-card>
      </div> 
                <!--TABLE DONE-->
    </div>
    <div>
      <div class="row q-col-gutter-sm q-ma-xs q-mr-sm">

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
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
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
              <IEcharts :option="barOptions" ref="bar" :resizable="true" style="height:270px"/>
            </q-card-section>
          </q-card>
        </div>
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
              gikJanContent: {
                kpi1: null,
                kpi2: null,
                kpi3: null,
                kpi4: null,
                kpi5: null,
                kpi6: null,
                budgetUsage: null,
                actualBudget: null,
                pieChart: [],
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
              gikJanContents : [],
              gikFebContent: {
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
              gikFebContents : [],
              gikMarContent: {
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
              gikMarContents : [],
              gikAprContent: {
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
              gikAprContents : [],
              gikMayContent: {
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
              gikMayContents : [],
              gikJunContent: {
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
              gikJunContents : [],
              gikJulContent: {
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
              gikJulContents : [],
              gikAugContent: {
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
              gikAugContents : [],
              gikSepContent: {
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
              gikSepContents : [],
              gikOctContent: {
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
              gikOctContents : [],
              gikNovContent: {
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
              gikNovContents : [],
              gikDecContent: {
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
              gikDecContents : []


            }
        },
        computed: {
            gaugeOptions() {
                return {    
                  tooltip: {
                        formatter: '{a} <br/>{b} : {c}%'
                    },
                    series: [
                        {
                            type: 'gauge',
                            name: "Budget Usage",
                            detail: {formatter: '{value}%'},
                            data: [{value: this.gikJanContents.budgetUsage}],
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
                            {time_period: 'January', expenses: this.gikJanContents.expenses, revenues: this.gikJanContents.revenues},
                            {time_period: 'February', expenses: this.gikFebContents.expenses, revenues: this.gikFebContents.revenues},
                            {time_period: 'March', expenses: this.gikMarContents.expenses, revenues: this.gikMarContents.revenues},
                            {time_period: 'April', expenses: this.gikAprContents.expenses, revenues: this.gikAprContents.revenues},
                            {time_period: 'May', expenses: this.gikMayContents.expenses, revenues: this.gikMayContents.revenues},
                            {time_period: 'June', expenses: this.gikJunContents.expenses, revenues: this.gikJunContents.revenues},
                            {time_period: 'July', expenses: this.gikJulContents.expenses, revenues: this.gikJulContents.revenues},
                            {time_period: 'August', expenses: this.gikAugContents.expenses, revenues: this.gikAugContents.revenues},
                            {time_period: 'September', expenses: this.gikSepContents.expenses, revenues: this.gikSepContents.revenues},
                            {time_period: 'October', expenses: this.gikOctContents.expenses, revenues: this.gikOctContents.revenues},
                            {time_period: 'November', expenses: this.gikNovContents.expenses, revenues: this.gikNovContents.revenues},
                            {time_period: 'December',expenses: this.gikDecContents.expenses, revenues: this.gikDecContents.revenues }
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
                            //{months: 'January', kpi1: 0, kpi2: 0, kpi3: 0, kpi4: 0, kpi5: 0, kpi6: 0},
                            {months: 'January', kpi1: this.gikJanContents.kpi1, kpi2: this.gikJanContents.kpi2, kpi3: this.gikJanContents.kpi3, kpi4: this.gikJanContents.kpi4, kpi5: this.gikJanContents.kpi5, kpi6: this.gikJanContents.kpi6, uniqueVol: this.gikJanContents.uniqueVolunteers, volHours: this.gikJanContents.volunteerHours},
                            {months: 'February', kpi1: this.gikFebContents.kpi1, kpi2: this.gikFebContents.kpi2, kpi3: this.gikFebContents.kpi3, kpi4: this.gikFebContents.kpi4, kpi5: this.gikFebContents.kpi5, kpi6: this.gikFebContents.kpi6, uniqueVol: this.gikFebContents.uniqueVolunteers, volHours: this.gikFebContents.volunteerHours},
                            {months: 'March', kpi1: this.gikMarContents.kpi1, kpi2: this.gikMarContents.kpi2, kpi3: this.gikMarContents.kpi3, kpi4: this.gikMarContents.kpi4, kpi5: this.gikMarContents.kpi5, kpi6: this.gikMarContents.kpi6, uniqueVol: this.gikMarContents.uniqueVolunteers, volHours: this.gikMarContents.volunteerHours},
                            {months: 'April', kpi1: this.gikAprContents.kpi1, kpi2: this.gikAprContents.kpi2, kpi3: this.gikAprContents.kpi3, kpi4: this.gikAprContents.kpi4, kpi5: this.gikAprContents.kpi5, kpi6: this.gikAprContents.kpi6, uniqueVol: this.gikAprContents.uniqueVolunteers, volHours: this.gikAprContents.volunteerHours},
                            {months: 'May', kpi1: this.gikMayContents.kpi1, kpi2: this.gikMayContents.kpi2, kpi3: this.gikMayContents.kpi3, kpi4: this.gikMayContents.kpi4, kpi5: this.gikMayContents.kpi5, kpi6: this.gikMayContents.kpi6, uniqueVol: this.gikMayContents.uniqueVolunteers, volHours: this.gikMayContents.volunteerHours},
                            {months: 'June', kpi1: this.gikJunContents.kpi1, kpi2: this.gikJunContents.kpi2, kpi3: this.gikJunContents.kpi3, kpi4: this.gikJunContents.kpi4, kpi5: this.gikJunContents.kpi5, kpi6: this.gikJunContents.kpi6, uniqueVol: this.gikJunContents.uniqueVolunteers, volHours: this.gikJunContents.volunteerHours},
                            {months: 'July', kpi1: this.gikJulContents.kpi1, kpi2: this.gikJulContents.kpi2, kpi3: this.gikJulContents.kpi3, kpi4: this.gikJulContents.kpi4, kpi5: this.gikJulContents.kpi5, kpi6: this.gikJulContents.kpi6, uniqueVol: this.gikJulContents.uniqueVolunteers, volHours: this.gikJulContents.volunteerHours},
                            {months: 'August', kpi1: this.gikAugContents.kpi1, kpi2: this.gikAugContents.kpi2, kpi3: this.gikAugContents.kpi3, kpi4: this.gikAugContents.kpi4, kpi5: this.gikAugContents.kpi5, kpi6: this.gikAugContents.kpi6, uniqueVol: this.gikAugContents.uniqueVolunteers, volHours: this.gikAugContents.volunteerHours},
                            {months: 'September', kpi1: this.gikSepContents.kpi1, kpi2: this.gikSepContents.kpi2, kpi3: this.gikSepContents.kpi3, kpi4: this.gikSepContents.kpi4, kpi5: this.gikSepContents.kpi5, kpi6: this.gikSepContents.kpi6, uniqueVol: this.gikSepContents.uniqueVolunteers, volHours: this.gikSepContents.volunteerHours},
                            {months: 'October', kpi1: this.gikOctContents.kpi1, kpi2: this.gikOctContents.kpi2, kpi3: this.gikOctContents.kpi3, kpi4: this.gikOctContents.kpi4, kpi5: this.gikOctContents.kpi5, kpi6: this.gikOctContents.kpi6, uniqueVol: this.gikOctContents.uniqueVolunteers, volHours: this.gikOctContents.volunteerHours},
                            {months: 'November', kpi1: this.gikNovContents.kpi1, kpi2: this.gikNovContents.kpi2, kpi3: this.gikNovContents.kpi3, kpi4: this.gikNovContents.kpi4, kpi5: this.gikNovContents.kpi5, kpi6: this.gikNovContents.kpi6, uniqueVol: this.gikNovContents.uniqueVolunteers, volHours: this.gikNovContents.volunteerHours},
                            {months: 'December',kpi1: this.gikDecContents.kpi1, kpi2: this.gikDecContents.kpi2, kpi3: this.gikDecContents.kpi3, kpi4: this.gikDecContents.kpi4, kpi5: this.gikDecContents.kpi5, kpi6: this.gikDecContents.kpi6, uniqueVol: this.gikDecContents.uniqueVolunteers, volHours: this.gikDecContents.volunteerHours},
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
            pieOptions() {
                return {
                    tooltip: {
                        show: true
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
                                    show: true,
                                    position: 'inner',
                                    formatter: function (param, index) {
                                        return param.value + ' '
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
                            data: [ // buraya bir dizi ekleyerek sorun cozulebilir
                                {value: this.gikJanContents.perCategory1, name: this.gikJanContents.expenseCategory1},
                                {value: this.gikJanContents.perCategory2, name: this.gikJanContents.expenseCategory2},
                                {value: this.gikJanContents.perCategory3, name: this.gikJanContents.expenseCategory3},
                                {value: this.gikJanContents.perCategory4, name: this.gikJanContents.expenseCategory4},
                                {value: this.gikJanContents.perCategory5, name: this.gikJanContents.expenseCategory5},
                                {value: this.gikJanContents.perCategory6, name: this.gikJanContents.expenseCategory6},
                                //{value: 91, name: 'Salaries & Benefits', selected: false},
                                //{value: 3, name: 'Program supplies (GIK)', selected: false},
                                //{value: 3, name: 'Program supplies (Clothes Pin)', selected: false},
                                //{value: 3, name: 'Others', selected: false},
                            ]
                        }
                    ]
                }
            },
            stackedBarOptions() {
                return {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer:
                            {
                                type: 'shadow'
                            },
                        backgroundColor: 'rgba(50,50,50,0.9)',

                    },
                    legend: {
                        bottom: 0,
                        textStyle: {
                            color: this.$q.dark.isActive ? 'white' : '#676767'
                        }
                    },
                    color: ['#3395dd', '#ed892d', '#34393b'],
                    // legend: {
                    //     y: "bottom",
                    //     data: [{name: 'Territory Sales', icon: 'circle'}, {
                    //         name: 'Remaining Nation Sales',
                    //         icon: 'circle'
                    //     }]
                    // },
                    grid:
                        {
                            bottom: '10%',
                            left: '15%',
                            top: '9%'
                        },
                    calculable: true,
                    xAxis:
                        {
                            type: 'value',
                            position:
                                'top',
                            axisLine:
                                {
                                    show: false
                                },
                            axisLabel: {
                                formatter: function (value, index) {
                                    return '$' + value;
                                },
                                color: this.$q.dark.isActive ? 'white' : '#676767'
                            }
                        },
                    yAxis: [
                        {
                            type: 'category',
                            data: ['Budget 4', 'Budget 3', 'Budget 2', 'Budget 1'],
                            axisLabel: {
                                fontSize: 12,
                                color: this.$q.dark.isActive ? 'white' : '#676767'
                            }
                        }
                    ],
                    series:
                        [{
                            name: 'Qualification',
                            type: 'bar',
                            stack: 'A',
                            data: [300, 350, 400, 500]

                        }, {
                            name: 'Discovery',
                            type: 'bar',
                            stack: 'A',
                            data: [100, 180, 250, 300]

                        }, {
                            name: 'Quote',
                            type: 'bar',
                            stack: 'A',
                            data: [100, 120, 200, 220]

                        }]
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
            var docgikJanRef = db.collection("gik").doc("january");

            docgikJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.gikJanContents = doc.data();
                    febCumulativeExp();
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    FEBRUARY
            var docgikFebRef = db.collection("gik").doc("february");

            docgikFebRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.gikFebContents = doc.data();
                    febCumulativeExp();
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    MARCH
            var docgikMarRef = db.collection("gik").doc("march");

            docgikMarRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.gikMarContents = doc.data();
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    APRIL
            var docgikAprRef = db.collection("gik").doc("april");

            docgikAprRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.gikAprContents = doc.data();
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    MAY
            var docgikMayRef = db.collection("gik").doc("may");

            docgikMayRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.gikMayContents = doc.data();
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    JUNE
            var docgikJunRef = db.collection("gik").doc("june");

            docgikJunRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.gikJunContents = doc.data();
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    JULY
            var docgikJulRef = db.collection("gik").doc("july");

            docgikJulRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.gikJulContents = doc.data();
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    AUGUST
            var docgikAugRef = db.collection("gik").doc("august");

            docgikAugRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.gikAugContents = doc.data();
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    SEPTEMBER
            var docgikSepRef = db.collection("gik").doc("september");

            docgikSepRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.gikSepContents = doc.data();
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    OCTOBER
            var docgikOctRef = db.collection("gik").doc("october");

            docgikOctRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.gikOctContents = doc.data();
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    NOVEMBER
            var docgikNovRef = db.collection("gik").doc("november");

            docgikNovRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.gikNovContents = doc.data();
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    DECEMBER
            var docgikDecRef = db.collection("gik").doc("december");

            docgikDecRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.gikDecContents = doc.data();
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
          },
          gikFebBudgetGauge(){
            var febCumulativeExp = this.gikJanContents.expenses + this.gikFebContents.expenses
            console.log(febCumulativeExp);
            return febCumulativeExp;
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
