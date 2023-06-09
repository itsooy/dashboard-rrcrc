<template>
  <q-page>
                <!--TABLE-->
    <div class="row q-col-gutter-sm q-ma-xs q-mr-sm">
      <div class="col-lg-5 col-md-12 col-sm-12 col-xs-12">
        <q-card>
          <h5 class="q-mt-md q-ml-lg q-mb-md">{{$route.name}}</h5>
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
                  :color="(gikJanContents.kpi1 <= '30')?'red':(gikJanContents.kpi1 > '30' && gikJanContents.kpi1 <= '40')?'orange':(gikJanContents.kpi1 > '40' && gikJanContents.kpi1 < '50')?'yellow-7':(gikJanContents.kpi1 >= '50' && gikJanContents.kpi1 < '700')?'green':(gikJanContents.kpi1 >= '700'?'blue':'grey-2')"
                >
                {{gikJanContents.kpi1}}
                  <q-tooltip>KPI 1</q-tooltip>
                </q-chip>        
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikJanContents.kpi2 <= '30')?'red':(gikJanContents.kpi2 > '30' && gikJanContents.kpi2 <= '40')?'orange':(gikJanContents.kpi2 > '40' && gikJanContents.kpi2 < '50')?'yellow-7':(gikJanContents.kpi2 >= '50' && gikJanContents.kpi2 < '700')?'green':(gikJanContents.kpi2 >= '700'?'blue':'grey-2')"
                >
                {{gikJanContents.kpi2}}
                  <q-tooltip>KPI 2</q-tooltip>
                </q-chip>     
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikJanContents.kpi3 <= '30')?'red':(gikJanContents.kpi3 > '30' && gikJanContents.kpi3 <= '40')?'orange':(gikJanContents.kpi3 > '40' && gikJanContents.kpi3 < '50')?'yellow-7':(gikJanContents.kpi3 >= '50' && gikJanContents.kpi3 < '700')?'green':(gikJanContents.kpi3 >= '700'?'blue':'grey-2')"
                >
                {{gikJanContents.kpi3}}
                  <q-tooltip>KPI 3</q-tooltip>
                </q-chip>       
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikJanContents.kpi4 <= '30')?'red':(gikJanContents.kpi4 > '30' && gikJanContents.kpi4 <= '40')?'orange':(gikJanContents.kpi4 > '40' && gikJanContents.kpi4 < '50')?'yellow-7':(gikJanContents.kpi4 >= '50' && gikJanContents.kpi4 < '700')?'green':(gikJanContents.kpi4 >= '700'?'blue':'grey-2')"
                >
                {{gikJanContents.kpi4}}
                  <q-tooltip>KPI 4</q-tooltip>
                </q-chip>       
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikJanContents.kpi5 <= '30')?'red':(gikJanContents.kpi5 > '30' && gikJanContents.kpi5 <= '40')?'orange':(gikJanContents.kpi5 > '40' && gikJanContents.kpi5 < '50')?'yellow-7':(gikJanContents.kpi5 >= '50' && gikJanContents.kpi5 < '700')?'green':(gikJanContents.kpi5 >= '700'?'blue':'grey-2')"
                >
                {{gikJanContents.kpi5}}
                  <q-tooltip>KPI 5</q-tooltip>
                </q-chip>      
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikJanContents.kpi6 <= '30')?'red':(gikJanContents.kpi6 > '30' && gikJanContents.kpi6 <= '40')?'orange':(gikJanContents.kpi6 > '40' && gikJanContents.kpi6 < '50')?'yellow-7':(gikJanContents.kpi6 >= '50' && gikJanContents.kpi6 < '700')?'green':(gikJanContents.kpi6 >= '700'?'blue':'grey-2')"
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
                  :color="(gikFebContents.kpi1 <= '30')?'red':(gikFebContents.kpi1 > '30' && gikFebContents.kpi1 <= '40')?'orange':(gikFebContents.kpi1 > '40' && gikFebContents.kpi1 < '50')?'yellow-7':(gikFebContents.kpi1 >= '50' && gikFebContents.kpi1 < '700')?'green':(gikFebContents.kpi1 >= '700'?'blue':'grey-2')"
                >
                {{gikFebContents.kpi1}}
                  <q-tooltip>KPI 1</q-tooltip>
                </q-chip>        
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikFebContents.kpi2 <= '30')?'red':(gikFebContents.kpi2 > '30' && gikFebContents.kpi2 <= '40')?'orange':(gikFebContents.kpi2 > '40' && gikFebContents.kpi2 < '50')?'yellow-7':(gikFebContents.kpi2 >= '50' && gikFebContents.kpi2 < '700')?'green':(gikFebContents.kpi2 >= '700'?'blue':'grey-2')"
                >
                {{gikFebContents.kpi2}}
                  <q-tooltip>KPI 2</q-tooltip>
                </q-chip>     
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikFebContents.kpi3 <= '30')?'red':(gikFebContents.kpi3 > '30' && gikFebContents.kpi3 <= '40')?'orange':(gikFebContents.kpi3 > '40' && gikFebContents.kpi3 < '50')?'yellow-7':(gikFebContents.kpi3 >= '50' && gikFebContents.kpi3 < '700')?'green':(gikFebContents.kpi3 >= '700'?'blue':'grey-2')"
                >
                {{gikFebContents.kpi3}}
                  <q-tooltip>KPI 3</q-tooltip>
                </q-chip>       
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikFebContents.kpi4 <= '30')?'red':(gikFebContents.kpi4 > '30' && gikFebContents.kpi4 <= '40')?'orange':(gikFebContents.kpi4 > '40' && gikFebContents.kpi4 < '50')?'yellow-7':(gikFebContents.kpi4 >= '50' && gikFebContents.kpi4 < '700')?'green':(gikFebContents.kpi4 >= '700'?'blue':'grey-2')"
                >
                {{gikFebContents.kpi4}}
                  <q-tooltip>KPI 4</q-tooltip>
                </q-chip>       
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikFebContents.kpi5 <= '30')?'red':(gikFebContents.kpi5 > '30' && gikFebContents.kpi5 <= '40')?'orange':(gikFebContents.kpi5 > '40' && gikFebContents.kpi5 < '50')?'yellow-7':(gikFebContents.kpi5 >= '50' && gikFebContents.kpi5 < '700')?'green':(gikFebContents.kpi5 >= '700'?'blue':'grey-2')"
                >
                {{gikFebContents.kpi5}}
                  <q-tooltip>KPI 5</q-tooltip>
                </q-chip>      
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikFebContents.kpi6 <= '30')?'red':(gikFebContents.kpi6 > '30' && gikFebContents.kpi6 <= '40')?'orange':(gikFebContents.kpi6 > '40' && gikFebContents.kpi6 < '50')?'yellow-7':(gikFebContents.kpi6 >= '50' && gikFebContents.kpi6 < '700')?'green':(gikFebContents.kpi6 >= '700'?'blue':'grey-2')"
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
                  :color="(gikMarContents.kpi1 <= '30')?'red':(gikMarContents.kpi1 > '30' && gikMarContents.kpi1 <= '40')?'orange':(gikMarContents.kpi1 > '40' && gikMarContents.kpi1 < '50')?'yellow-7':(gikMarContents.kpi1 >= '50' && gikMarContents.kpi1 < '700')?'green':(gikMarContents.kpi1 >= '700'?'blue':'grey-2')"
                >
                {{gikMarContents.kpi1}}
                  <q-tooltip>KPI 1</q-tooltip>
                </q-chip>        
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikMarContents.kpi2 <= '30')?'red':(gikMarContents.kpi2 > '30' && gikMarContents.kpi2 <= '40')?'orange':(gikMarContents.kpi2 > '40' && gikMarContents.kpi2 < '50')?'yellow-7':(gikMarContents.kpi2 >= '50' && gikMarContents.kpi2 < '700')?'green':(gikMarContents.kpi2 >= '700'?'blue':'grey-2')"
                >
                {{gikMarContents.kpi2}}
                  <q-tooltip>KPI 2</q-tooltip>
                </q-chip>     
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikMarContents.kpi3 <= '30')?'red':(gikMarContents.kpi3 > '30' && gikMarContents.kpi3 <= '40')?'orange':(gikMarContents.kpi3 > '40' && gikMarContents.kpi3 < '50')?'yellow-7':(gikMarContents.kpi3 >= '50' && gikMarContents.kpi3 < '700')?'green':(gikMarContents.kpi3 >= '700'?'blue':'grey-2')"
                >
                {{gikMarContents.kpi3}}
                  <q-tooltip>KPI 3</q-tooltip>
                </q-chip>       
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikMarContents.kpi4 <= '30')?'red':(gikMarContents.kpi4 > '30' && gikMarContents.kpi4 <= '40')?'orange':(gikMarContents.kpi4 > '40' && gikMarContents.kpi4 < '50')?'yellow-7':(gikMarContents.kpi4 >= '50' && gikMarContents.kpi4 < '700')?'green':(gikMarContents.kpi4 >= '700'?'blue':'grey-2')"
                >
                {{gikMarContents.kpi4}}
                  <q-tooltip>KPI 4</q-tooltip>
                </q-chip>       
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikMarContents.kpi5 <= '30')?'red':(gikMarContents.kpi5 > '30' && gikMarContents.kpi5 <= '40')?'orange':(gikMarContents.kpi5 > '40' && gikMarContents.kpi5 < '50')?'yellow-7':(gikMarContents.kpi5 >= '50' && gikMarContents.kpi5 < '700')?'green':(gikMarContents.kpi5 >= '700'?'blue':'grey-2')"
                >
                {{gikMarContents.kpi5}}
                  <q-tooltip>KPI 5</q-tooltip>
                </q-chip>      
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikMarContents.kpi6 <= '30')?'red':(gikMarContents.kpi6 > '30' && gikMarContents.kpi6 <= '40')?'orange':(gikMarContents.kpi6 > '40' && gikMarContents.kpi6 < '50')?'yellow-7':(gikMarContents.kpi6 >= '50' && gikMarContents.kpi6 < '700')?'green':(gikMarContents.kpi6 >= '700'?'blue':'grey-2')"
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
                  :color="(gikAprContents.kpi1 <= '30')?'red':(gikAprContents.kpi1 > '30' && gikAprContents.kpi1 <= '40')?'orange':(gikAprContents.kpi1 > '40' && gikAprContents.kpi1 < '50')?'yellow-7':(gikAprContents.kpi1 >= '50' && gikAprContents.kpi1 < '700')?'green':(gikAprContents.kpi1 >= '700'?'blue':'grey-2')"
                >
                {{gikAprContents.kpi1}}
                  <q-tooltip>KPI 1</q-tooltip>
                </q-chip>        
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikAprContents.kpi2 <= '30')?'red':(gikAprContents.kpi2 > '30' && gikAprContents.kpi2 <= '40')?'orange':(gikAprContents.kpi2 > '40' && gikAprContents.kpi2 < '50')?'yellow-7':(gikAprContents.kpi2 >= '50' && gikAprContents.kpi2 < '700')?'green':(gikAprContents.kpi2 >= '700'?'blue':'grey-2')"
                >
                {{gikAprContents.kpi2}}
                  <q-tooltip>KPI 2</q-tooltip>
                </q-chip>     
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikAprContents.kpi3 <= '30')?'red':(gikAprContents.kpi3 > '30' && gikAprContents.kpi3 <= '40')?'orange':(gikAprContents.kpi3 > '40' && gikAprContents.kpi3 < '50')?'yellow-7':(gikAprContents.kpi3 >= '50' && gikAprContents.kpi3 < '700')?'green':(gikAprContents.kpi3 >= '700'?'blue':'grey-2')"
                >
                {{gikAprContents.kpi3}}
                  <q-tooltip>KPI 3</q-tooltip>
                </q-chip>       
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikAprContents.kpi4 <= '30')?'red':(gikAprContents.kpi4 > '30' && gikAprContents.kpi4 <= '40')?'orange':(gikAprContents.kpi4 > '40' && gikAprContents.kpi4 < '50')?'yellow-7':(gikAprContents.kpi4 >= '50' && gikAprContents.kpi4 < '700')?'green':(gikAprContents.kpi4 >= '700'?'blue':'grey-2')"
                >
                {{gikAprContents.kpi4}}
                  <q-tooltip>KPI 4</q-tooltip>
                </q-chip>       
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikAprContents.kpi5 <= '30')?'red':(gikAprContents.kpi5 > '30' && gikAprContents.kpi5 <= '40')?'orange':(gikAprContents.kpi5 > '40' && gikAprContents.kpi5 < '50')?'yellow-7':(gikAprContents.kpi5 >= '50' && gikAprContents.kpi5 < '700')?'green':(gikAprContents.kpi5 >= '700'?'blue':'grey-2')"
                >
                {{gikAprContents.kpi5}}
                  <q-tooltip>KPI 5</q-tooltip>
                </q-chip>      
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikAprContents.kpi6 <= '30')?'red':(gikAprContents.kpi6 > '30' && gikAprContents.kpi6 <= '40')?'orange':(gikAprContents.kpi6 > '40' && gikAprContents.kpi6 < '50')?'yellow-7':(gikAprContents.kpi6 >= '50' && gikAprContents.kpi6 < '700')?'green':(gikAprContents.kpi6 >= '700'?'blue':'grey-2')"
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
                  :color="(gikMayContents.kpi1 <= '30')?'red':(gikMayContents.kpi1 > '30' && gikMayContents.kpi1 <= '40')?'orange':(gikMayContents.kpi1 > '40' && gikMayContents.kpi1 < '50')?'yellow-7':(gikMayContents.kpi1 >= '50' && gikMayContents.kpi1 < '700')?'green':(gikMayContents.kpi1 >= '700'?'blue':'grey-2')"
                >
                {{gikMayContents.kpi1}}
                  <q-tooltip>KPI 1</q-tooltip>
                </q-chip>        
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikMayContents.kpi2 <= '30')?'red':(gikMayContents.kpi2 > '30' && gikMayContents.kpi2 <= '40')?'orange':(gikMayContents.kpi2 > '40' && gikMayContents.kpi2 < '50')?'yellow-7':(gikMayContents.kpi2 >= '50' && gikMayContents.kpi2 < '700')?'green':(gikMayContents.kpi2 >= '700'?'blue':'grey-2')"
                >
                {{gikMayContents.kpi2}}
                  <q-tooltip>KPI 2</q-tooltip>
                </q-chip>     
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikMayContents.kpi3 <= '30')?'red':(gikMayContents.kpi3 > '30' && gikMayContents.kpi3 <= '40')?'orange':(gikMayContents.kpi3 > '40' && gikMayContents.kpi3 < '50')?'yellow-7':(gikMayContents.kpi3 >= '50' && gikMayContents.kpi3 < '700')?'green':(gikMayContents.kpi3 >= '700'?'blue':'grey-2')"
                >
                {{gikMayContents.kpi3}}
                  <q-tooltip>KPI 3</q-tooltip>
                </q-chip>       
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikMayContents.kpi4 <= '30')?'red':(gikMayContents.kpi4 > '30' && gikMayContents.kpi4 <= '40')?'orange':(gikMayContents.kpi4 > '40' && gikMayContents.kpi4 < '50')?'yellow-7':(gikMayContents.kpi4 >= '50' && gikMayContents.kpi4 < '700')?'green':(gikMayContents.kpi4 >= '700'?'blue':'grey-2')"
                >
                {{gikMayContents.kpi4}}
                  <q-tooltip>KPI 4</q-tooltip>
                </q-chip>       
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikMayContents.kpi5 <= '30')?'red':(gikMayContents.kpi5 > '30' && gikMayContents.kpi5 <= '40')?'orange':(gikMayContents.kpi5 > '40' && gikMayContents.kpi5 < '50')?'yellow-7':(gikMayContents.kpi5 >= '50' && gikMayContents.kpi5 < '700')?'green':(gikMayContents.kpi5 >= '700'?'blue':'grey-2')"
                >
                {{gikMayContents.kpi5}}
                  <q-tooltip>KPI 5</q-tooltip>
                </q-chip>      
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikMayContents.kpi6 <= '30')?'red':(gikMayContents.kpi6 > '30' && gikMayContents.kpi6 <= '40')?'orange':(gikMayContents.kpi6 > '40' && gikMayContents.kpi6 < '50')?'yellow-7':(gikMayContents.kpi6 >= '50' && gikMayContents.kpi6 < '700')?'green':(gikMayContents.kpi6 >= '700'?'blue':'grey-2')"
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
                  :color="(gikJunContents.kpi1 <= '30')?'red':(gikJunContents.kpi1 > '30' && gikJunContents.kpi1 <= '40')?'orange':(gikJunContents.kpi1 > '40' && gikJunContents.kpi1 < '50')?'yellow-7':(gikJunContents.kpi1 >= '50' && gikJunContents.kpi1 < '700')?'green':(gikJunContents.kpi1 >= '700'?'blue':'grey-2')"
                >
                {{gikJunContents.kpi1}}
                  <q-tooltip>KPI 1</q-tooltip>
                </q-chip>        
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikJunContents.kpi2 == '')?'blue':(gikJunContents.kpi2 >= '0' && gikJunContents.kpi2 <= '30')?'red':(gikJunContents.kpi2 > '30' && gikJunContents.kpi2 <= '40')?'orange':(gikJunContents.kpi2 > '40' && gikJunContents.kpi2 < '50')?'yellow-7':(gikJunContents.kpi2 >= '50' && gikJunContents.kpi2 < '700')?'green':(gikJunContents.kpi2 >= '700'?'blue':'grey-2')"
                >
                {{gikJunContents.kpi2}}
                  <q-tooltip>KPI 2</q-tooltip>
                </q-chip>     
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikJunContents.kpi3 <= '30')?'red':(gikJunContents.kpi3 > '30' && gikJunContents.kpi3 <= '40')?'orange':(gikJunContents.kpi3 > '40' && gikJunContents.kpi3 < '50')?'yellow-7':(gikJunContents.kpi3 >= '50' && gikJunContents.kpi3 < '700')?'green':(gikJunContents.kpi3 >= '700'?'blue':'grey-2')"
                >
                {{gikJunContents.kpi3}}
                  <q-tooltip>KPI 3</q-tooltip>
                </q-chip>       
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikJunContents.kpi4 <= '30')?'red':(gikJunContents.kpi4 > '30' && gikJunContents.kpi4 <= '40')?'orange':(gikJunContents.kpi4 > '40' && gikJunContents.kpi4 < '50')?'yellow-7':(gikJunContents.kpi4 >= '50' && gikJunContents.kpi4 < '700')?'green':(gikJunContents.kpi4 >= '700'?'blue':'grey-2')"
                >
                {{gikJunContents.kpi4}}
                  <q-tooltip>KPI 4</q-tooltip>
                </q-chip>       
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikJunContents.kpi5 <= '30')?'red':(gikJunContents.kpi5 > '30' && gikJunContents.kpi5 <= '40')?'orange':(gikJunContents.kpi5 > '40' && gikJunContents.kpi5 < '50')?'yellow-7':(gikJunContents.kpi5 >= '50' && gikJunContents.kpi5 < '700')?'green':(gikJunContents.kpi5 >= '700'?'blue':'grey-2')"
                >
                {{gikJunContents.kpi5}}
                  <q-tooltip>KPI 5</q-tooltip>
                </q-chip>      
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikJunContents.kpi6 <= '30')?'red':(gikJunContents.kpi6 > '30' && gikJunContents.kpi6 <= '40')?'orange':(gikJunContents.kpi6 > '40' && gikJunContents.kpi6 < '50')?'yellow-7':(gikJunContents.kpi6 >= '50' && gikJunContents.kpi6 < '700')?'green':(gikJunContents.kpi6 >= '700'?'blue':'grey-2')"
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
                  :color="(gikJulContents.kpi1 <= '30')?'red':(gikJulContents.kpi1 > '30' && gikJulContents.kpi1 <= '40')?'orange':(gikJulContents.kpi1 > '40' && gikJulContents.kpi1 < '50')?'yellow-7':(gikJulContents.kpi1 >= '50' && gikJulContents.kpi1 < '700')?'green':(gikJulContents.kpi1 >= '700'?'blue':'grey-2')"
                >
                {{gikJulContents.kpi1}}
                  <q-tooltip>KPI 1</q-tooltip>
                </q-chip>        
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikJulContents.kpi2 <= '30')?'red':(gikJulContents.kpi2 > '30' && gikJulContents.kpi2 <= '40')?'orange':(gikJulContents.kpi2 > '40' && gikJulContents.kpi2 < '50')?'yellow-7':(gikJulContents.kpi2 >= '50' && gikJulContents.kpi2 < '700')?'green':(gikJulContents.kpi2 >= '700'?'blue':'grey-2')"
                >
                {{gikJulContents.kpi2}}
                  <q-tooltip>KPI 2</q-tooltip>
                </q-chip>     
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikJulContents.kpi3 <= '30')?'red':(gikJulContents.kpi3 > '30' && gikJulContents.kpi3 <= '40')?'orange':(gikJulContents.kpi3 > '40' && gikJulContents.kpi3 < '50')?'yellow-7':(gikJulContents.kpi3 >= '50' && gikJulContents.kpi3 < '700')?'green':(gikJulContents.kpi3 >= '700'?'blue':'grey-2')"
                >
                {{gikJulContents.kpi3}}
                  <q-tooltip>KPI 3</q-tooltip>
                </q-chip>       
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikJulContents.kpi4 <= '30')?'red':(gikJulContents.kpi4 > '30' && gikJulContents.kpi4 <= '40')?'orange':(gikJulContents.kpi4 > '40' && gikJulContents.kpi4 < '50')?'yellow-7':(gikJulContents.kpi4 >= '50' && gikJulContents.kpi4 < '700')?'green':(gikJulContents.kpi4 >= '700'?'blue':'grey-2')"
                >
                {{gikJulContents.kpi4}}
                  <q-tooltip>KPI 4</q-tooltip>
                </q-chip>       
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikJulContents.kpi5 <= '30')?'red':(gikJulContents.kpi5 > '30' && gikJulContents.kpi5 <= '40')?'orange':(gikJulContents.kpi5 > '40' && gikJulContents.kpi5 < '50')?'yellow-7':(gikJulContents.kpi5 >= '50' && gikJulContents.kpi5 < '700')?'green':(gikJulContents.kpi5 >= '700'?'blue':'grey-2')"
                >
                {{gikJulContents.kpi5}}
                  <q-tooltip>KPI 5</q-tooltip>
                </q-chip>      
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikJulContents.kpi6 <= '30')?'red':(gikJulContents.kpi6 > '30' && gikJulContents.kpi6 <= '40')?'orange':(gikJulContents.kpi6 > '40' && gikJulContents.kpi6 < '50')?'yellow-7':(gikJulContents.kpi6 >= '50' && gikJulContents.kpi6 < '700')?'green':(gikJulContents.kpi6 >= '700'?'blue':'grey-2')"
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
                  :color="(gikAugContents.kpi1 <= '30')?'red':(gikAugContents.kpi1 > '30' && gikAugContents.kpi1 <= '40')?'orange':(gikAugContents.kpi1 > '40' && gikAugContents.kpi1 < '50')?'yellow-7':(gikAugContents.kpi1 >= '50' && gikAugContents.kpi1 < '700')?'green':(gikAugContents.kpi1 >= '700'?'blue':'grey-2')"
                >
                {{gikAugContents.kpi1}}
                  <q-tooltip>KPI 1</q-tooltip>
                </q-chip>        
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikAugContents.kpi2 <= '30')?'red':(gikAugContents.kpi2 > '30' && gikAugContents.kpi2 <= '40')?'orange':(gikAugContents.kpi2 > '40' && gikAugContents.kpi2 < '50')?'yellow-7':(gikAugContents.kpi2 >= '50' && gikAugContents.kpi2 < '700')?'green':(gikAugContents.kpi2 >= '700'?'blue':'grey-2')"
                >
                {{gikAugContents.kpi2}}
                  <q-tooltip>KPI 2</q-tooltip>
                </q-chip>     
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikAugContents.kpi3 <= '30')?'red':(gikAugContents.kpi3 > '30' && gikAugContents.kpi3 <= '40')?'orange':(gikAugContents.kpi3 > '40' && gikAugContents.kpi3 < '50')?'yellow-7':(gikAugContents.kpi3 >= '50' && gikAugContents.kpi3 < '700')?'green':(gikAugContents.kpi3 >= '700'?'blue':'grey-2')"
                >
                {{gikAugContents.kpi3}}
                  <q-tooltip>KPI 3</q-tooltip>
                </q-chip>       
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikAugContents.kpi4 <= '30')?'red':(gikAugContents.kpi4 > '30' && gikAugContents.kpi4 <= '40')?'orange':(gikAugContents.kpi4 > '40' && gikAugContents.kpi4 < '50')?'yellow-7':(gikAugContents.kpi4 >= '50' && gikAugContents.kpi4 < '700')?'green':(gikAugContents.kpi4 >= '700'?'blue':'grey-2')"
                >
                {{gikAugContents.kpi4}}
                  <q-tooltip>KPI 4</q-tooltip>
                </q-chip>       
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikAugContents.kpi5 <= '30')?'red':(gikAugContents.kpi5 > '30' && gikAugContents.kpi5 <= '40')?'orange':(gikAugContents.kpi5 > '40' && gikAugContents.kpi5 < '50')?'yellow-7':(gikAugContents.kpi5 >= '50' && gikAugContents.kpi5 < '700')?'green':(gikAugContents.kpi5 >= '700'?'blue':'grey-2')"
                >
                {{gikAugContents.kpi5}}
                  <q-tooltip>KPI 5</q-tooltip>
                </q-chip>      
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikAugContents.kpi6 <= '30')?'red':(gikAugContents.kpi6 > '30' && gikAugContents.kpi6 <= '40')?'orange':(gikAugContents.kpi6 > '40' && gikAugContents.kpi6 < '50')?'yellow-7':(gikAugContents.kpi6 >= '50' && gikAugContents.kpi6 < '700')?'green':(gikAugContents.kpi6 >= '700'?'blue':'grey-2')"
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
                  :color="(gikSepContents.kpi1 <= '30')?'red':(gikSepContents.kpi1 > '30' && gikSepContents.kpi1 <= '40')?'orange':(gikSepContents.kpi1 > '40' && gikSepContents.kpi1 < '50')?'yellow-7':(gikSepContents.kpi1 >= '50' && gikSepContents.kpi1 < '700')?'green':(gikSepContents.kpi1 >= '700'?'blue':'grey-2')"
                >
                {{gikSepContents.kpi1}}
                  <q-tooltip>KPI 1</q-tooltip>
                </q-chip>        
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikSepContents.kpi2 <= '30')?'red':(gikSepContents.kpi2 > '30' && gikSepContents.kpi2 <= '40')?'orange':(gikSepContents.kpi2 > '40' && gikSepContents.kpi2 < '50')?'yellow-7':(gikSepContents.kpi2 >= '50' && gikSepContents.kpi2 < '700')?'green':(gikSepContents.kpi2 >= '700'?'blue':'grey-2')"
                >
                {{gikSepContents.kpi2}}
                  <q-tooltip>KPI 2</q-tooltip>
                </q-chip>     
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikSepContents.kpi3 <= '30')?'red':(gikSepContents.kpi3 > '30' && gikSepContents.kpi3 <= '40')?'orange':(gikSepContents.kpi3 > '40' && gikSepContents.kpi3 < '50')?'yellow-7':(gikSepContents.kpi3 >= '50' && gikSepContents.kpi3 < '700')?'green':(gikSepContents.kpi3 >= '700'?'blue':'grey-2')"
                >
                {{gikSepContents.kpi3}}
                  <q-tooltip>KPI 3</q-tooltip>
                </q-chip>       
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikSepContents.kpi4 <= '30')?'red':(gikSepContents.kpi4 > '30' && gikSepContents.kpi4 <= '40')?'orange':(gikSepContents.kpi4 > '40' && gikSepContents.kpi4 < '50')?'yellow-7':(gikSepContents.kpi4 >= '50' && gikSepContents.kpi4 < '700')?'green':(gikSepContents.kpi4 >= '700'?'blue':'grey-2')"
                >
                {{gikSepContents.kpi4}}
                  <q-tooltip>KPI 4</q-tooltip>
                </q-chip>       
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikSepContents.kpi5 <= '30')?'red':(gikSepContents.kpi5 > '30' && gikSepContents.kpi5 <= '40')?'orange':(gikSepContents.kpi5 > '40' && gikSepContents.kpi5 < '50')?'yellow-7':(gikSepContents.kpi5 >= '50' && gikSepContents.kpi5 < '700')?'green':(gikSepContents.kpi5 >= '700'?'blue':'grey-2')"
                >
                {{gikSepContents.kpi5}}
                  <q-tooltip>KPI 5</q-tooltip>
                </q-chip>      
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikSepContents.kpi6 <= '30')?'red':(gikSepContents.kpi6 > '30' && gikSepContents.kpi6 <= '40')?'orange':(gikSepContents.kpi6 > '40' && gikSepContents.kpi6 < '50')?'yellow-7':(gikSepContents.kpi6 >= '50' && gikSepContents.kpi6 < '700')?'green':(gikSepContents.kpi6 >= '700'?'blue':'grey-2')"
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
                  :color="(gikOctContents.kpi1 <= '30')?'red':(gikOctContents.kpi1 > '30' && gikOctContents.kpi1 <= '40')?'orange':(gikOctContents.kpi1 > '40' && gikOctContents.kpi1 < '50')?'yellow-7':(gikOctContents.kpi1 >= '50' && gikOctContents.kpi1 < '700')?'green':(gikOctContents.kpi1 >= '700'?'blue':'grey-2')"
                >
                {{gikOctContents.kpi1}}
                  <q-tooltip>KPI 1</q-tooltip>
                </q-chip>        
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikOctContents.kpi2 <= '30')?'red':(gikOctContents.kpi2 > '30' && gikOctContents.kpi2 <= '40')?'orange':(gikOctContents.kpi2 > '40' && gikOctContents.kpi2 < '50')?'yellow-7':(gikOctContents.kpi2 >= '50' && gikOctContents.kpi2 < '700')?'green':(gikOctContents.kpi2 >= '700'?'blue':'grey-2')"
                >
                {{gikOctContents.kpi2}}
                  <q-tooltip>KPI 2</q-tooltip>
                </q-chip>     
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikOctContents.kpi3 <= '30')?'red':(gikOctContents.kpi3 > '30' && gikOctContents.kpi3 <= '40')?'orange':(gikOctContents.kpi3 > '40' && gikOctContents.kpi3 < '50')?'yellow-7':(gikOctContents.kpi3 >= '50' && gikOctContents.kpi3 < '700')?'green':(gikOctContents.kpi3 >= '700'?'blue':'grey-2')"
                >
                {{gikOctContents.kpi3}}
                  <q-tooltip>KPI 3</q-tooltip>
                </q-chip>       
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikOctContents.kpi4 <= '30')?'red':(gikOctContents.kpi4 > '30' && gikOctContents.kpi4 <= '40')?'orange':(gikOctContents.kpi4 > '40' && gikOctContents.kpi4 < '50')?'yellow-7':(gikOctContents.kpi4 >= '50' && gikOctContents.kpi4 < '700')?'green':(gikOctContents.kpi4 >= '700'?'blue':'grey-2')"
                >
                {{gikOctContents.kpi4}}
                  <q-tooltip>KPI 4</q-tooltip>
                </q-chip>       
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikOctContents.kpi5 <= '30')?'red':(gikOctContents.kpi5 > '30' && gikOctContents.kpi5 <= '40')?'orange':(gikOctContents.kpi5 > '40' && gikOctContents.kpi5 < '50')?'yellow-7':(gikOctContents.kpi5 >= '50' && gikOctContents.kpi5 < '700')?'green':(gikOctContents.kpi5 >= '700'?'blue':'grey-2')"
                >
                {{gikOctContents.kpi5}}
                  <q-tooltip>KPI 5</q-tooltip>
                </q-chip>      
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikOctContents.kpi6 <= '30')?'red':(gikOctContents.kpi6 > '30' && gikOctContents.kpi6 <= '40')?'orange':(gikOctContents.kpi6 > '40' && gikOctContents.kpi6 < '50')?'yellow-7':(gikOctContents.kpi6 >= '50' && gikOctContents.kpi6 < '700')?'green':(gikOctContents.kpi6 >= '700'?'blue':'grey-2')"
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
                  :color="(gikNovContents.kpi1 <= '30')?'red':(gikNovContents.kpi1 > '30' && gikNovContents.kpi1 <= '40')?'orange':(gikNovContents.kpi1 > '40' && gikNovContents.kpi1 < '50')?'yellow-7':(gikNovContents.kpi1 >= '50' && gikNovContents.kpi1 < '700')?'green':(gikNovContents.kpi1 >= '700'?'blue':'grey-2')"
                >
                {{gikNovContents.kpi1}}
                  <q-tooltip>KPI 1</q-tooltip>
                </q-chip>        
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikNovContents.kpi2 <= '30')?'red':(gikNovContents.kpi2 > '30' && gikNovContents.kpi2 <= '40')?'orange':(gikNovContents.kpi2 > '40' && gikNovContents.kpi2 < '50')?'yellow-7':(gikNovContents.kpi2 >= '50' && gikNovContents.kpi2 < '700')?'green':(gikNovContents.kpi2 >= '700'?'blue':'grey-2')"
                >
                {{gikNovContents.kpi2}}
                  <q-tooltip>KPI 2</q-tooltip>
                </q-chip>     
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikNovContents.kpi3 <= '30')?'red':(gikNovContents.kpi3 > '30' && gikNovContents.kpi3 <= '40')?'orange':(gikNovContents.kpi3 > '40' && gikNovContents.kpi3 < '50')?'yellow-7':(gikNovContents.kpi3 >= '50' && gikNovContents.kpi3 < '700')?'green':(gikNovContents.kpi3 >= '700'?'blue':'grey-2')"
                >
                {{gikNovContents.kpi3}}
                  <q-tooltip>KPI 3</q-tooltip>
                </q-chip>       
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikNovContents.kpi4 <= '30')?'red':(gikNovContents.kpi4 > '30' && gikNovContents.kpi4 <= '40')?'orange':(gikNovContents.kpi4 > '40' && gikNovContents.kpi4 < '50')?'yellow-7':(gikNovContents.kpi4 >= '50' && gikNovContents.kpi4 < '700')?'green':(gikNovContents.kpi4 >= '700'?'blue':'grey-2')"
                >
                {{gikNovContents.kpi4}}
                  <q-tooltip>KPI 4</q-tooltip>
                </q-chip>       
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikNovContents.kpi5 <= '30')?'red':(gikNovContents.kpi5 > '30' && gikNovContents.kpi5 <= '40')?'orange':(gikNovContents.kpi5 > '40' && gikNovContents.kpi5 < '50')?'yellow-7':(gikNovContents.kpi5 >= '50' && gikNovContents.kpi5 < '700')?'green':(gikNovContents.kpi5 >= '700'?'blue':'grey-2')"
                >
                {{gikNovContents.kpi5}}
                  <q-tooltip>KPI 5</q-tooltip>
                </q-chip>      
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikNovContents.kpi6 <= '30')?'red':(gikNovContents.kpi6 > '30' && gikNovContents.kpi6 <= '40')?'orange':(gikNovContents.kpi6 > '40' && gikNovContents.kpi6 < '50')?'yellow-7':(gikNovContents.kpi6 >= '50' && gikNovContents.kpi6 < '700')?'green':(gikNovContents.kpi6 >= '700'?'blue':'grey-2')"
                >
                {{gikNovContents.kpi6}}
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
                  :color="(gikAugContents.kpi1 <= '30')?'red':(gikAugContents.kpi1 > '30' && gikAugContents.kpi1 <= '40')?'orange':(gikAugContents.kpi1 > '40' && gikAugContents.kpi1 < '50')?'yellow-7':(gikAugContents.kpi1 >= '50' && gikAugContents.kpi1 < '700')?'green':(gikAugContents.kpi1 >= '700'?'blue':'grey-2')"
                >
                {{gikAugContents.kpi1}}
                  <q-tooltip>KPI 1</q-tooltip>
                </q-chip>        
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikAugContents.kpi2 <= '30')?'red':(gikAugContents.kpi2 > '30' && gikAugContents.kpi2 <= '40')?'orange':(gikAugContents.kpi2 > '40' && gikAugContents.kpi2 < '50')?'yellow-7':(gikAugContents.kpi2 >= '50' && gikAugContents.kpi2 < '700')?'green':(gikAugContents.kpi2 >= '700'?'blue':'grey-2')"
                >
                {{gikAugContents.kpi2}}
                  <q-tooltip>KPI 2</q-tooltip>
                </q-chip>     
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikAugContents.kpi3 <= '30')?'red':(gikAugContents.kpi3 > '30' && gikAugContents.kpi3 <= '40')?'orange':(gikAugContents.kpi3 > '40' && gikAugContents.kpi3 < '50')?'yellow-7':(gikAugContents.kpi3 >= '50' && gikAugContents.kpi3 < '700')?'green':(gikAugContents.kpi3 >= '700'?'blue':'grey-2')"
                >
                {{gikAugContents.kpi3}}
                  <q-tooltip>KPI 3</q-tooltip>
                </q-chip>       
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikAugContents.kpi4 <= '30')?'red':(gikAugContents.kpi4 > '30' && gikAugContents.kpi4 <= '40')?'orange':(gikAugContents.kpi4 > '40' && gikAugContents.kpi4 < '50')?'yellow-7':(gikAugContents.kpi4 >= '50' && gikAugContents.kpi4 < '700')?'green':(gikAugContents.kpi4 >= '700'?'blue':'grey-2')"
                >
                {{gikAugContents.kpi4}}
                  <q-tooltip>KPI 4</q-tooltip>
                </q-chip>       
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikAugContents.kpi5 <= '30')?'red':(gikAugContents.kpi5 > '30' && gikAugContents.kpi5 <= '40')?'orange':(gikAugContents.kpi5 > '40' && gikAugContents.kpi5 < '50')?'yellow-7':(gikAugContents.kpi5 >= '50' && gikAugContents.kpi5 < '700')?'green':(gikAugContents.kpi5 >= '700'?'blue':'grey-2')"
                >
                {{gikAugContents.kpi5}}
                  <q-tooltip>KPI 5</q-tooltip>
                </q-chip>      
              </q-item-section>
              <q-item-section top>
                <q-chip 
                  class="q-mt-xs q-ml-sm" square 
                  :color="(gikAugContents.kpi6 <= '30')?'red':(gikAugContents.kpi6 > '30' && gikAugContents.kpi6 <= '40')?'orange':(gikAugContents.kpi6 > '40' && gikAugContents.kpi6 < '50')?'yellow-7':(gikAugContents.kpi6 >= '50' && gikAugContents.kpi6 < '700')?'green':(gikAugContents.kpi6 >= '700'?'blue':'grey-2')"
                >
                {{gikAugContents.kpi6}}
                  <q-tooltip>KPI 6</q-tooltip>
                </q-chip>       
              </q-item-section>
            </q-item>
          </q-list>
          <q-separator />
          <meaningof-colors/> <!--Using component of Meaning of Colors-->
        </q-card>
      </div>
    </div>
                <!--TABLE DONE-->
  </q-page>
</template>

<script>
    import Vue from 'vue';
    import db from 'src/boot/firebase';
    import MeaningofColors from 'src/components/meaningofColors.vue';
    
    export default {
        name: 'Denemem',
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
                budgetusage: null,
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
                budgetusage: null,
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
                budgetusage: null,
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
                budgetusage: null,
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
                budgetusage: null,
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
                budgetusage: null,
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
                budgetusage: null,
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
                budgetusage: null,
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
                budgetusage: null,
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
                budgetusage: null,
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
                budgetusage: null,
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
              gikDevContent: {
                kpi1: null,
                kpi2: null,
                kpi3: null,
                kpi4: null,
                kpi5: null,
                kpi6: null,
                budgetusage: null,
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
              gikDevContents : []


            }
        },
        methods: {

          readData(){
            //    JANUARY
            var docgikJanRef = db.collection("gik").doc("january");

            docgikJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.gikJanContents = doc.data();
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
            var docgikAugRef = db.collection("gik").doc("february");

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
            var docgikSepRef = db.collection("gik").doc("february");

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
            var docgikOctRef = db.collection("gik").doc("february");

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
            var docgikNovRef = db.collection("gik").doc("february");

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
            var docgikDecRef = db.collection("gik").doc("february");

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

          submitJan(){
            // NOW THIS FUNC. MEANS IS UPDATE DATA 
            var updatenRef = db.collection("gik").doc("january");

              // Set the "capital" field of the city 'DC'
              return updatenRef.update({
                  kpi1: this.gikJanContent.kpi1,
                  kpi2: this.gikJanContent.kpi2,
                  kpi3: this.gikJanContent.kpi3,
                  kpi4: this.gikJanContent.kpi4,
                  kpi5: this.gikJanContent.kpi5,
                  kpi6: this.gikJanContent.kpi6,
                  budgetusage: this.gikJanContent.budgetusage,
                  expenseCategory1: this.gikJanContent.expenseCategory1,
                  perCategory1: this.gikJanContent.perCategory1,
                  expenseCategory2: this.gikJanContent.expenseCategory2,
                  perCategory2: this.gikJanContent.perCategory2,
                  expenseCategory3: this.gikJanContent.expenseCategory3,
                  perCategory3: this.gikJanContent.perCategory3,
                  expenseCategory4: this.gikJanContent.expenseCategory4,
                  perCategory4: this.gikJanContent.perCategory4,
                  expenses: this.gikJanContent.expenses,
                  revenues: this.gikJanContent.revenues,
                  uniqueVolunteers: this.gikJanContent.uniqueVolunteers,
                  volunteerHours: this.gikJanContent.volunteerHours,
                  
              })
              .then(() => {
                console.log("Document successfully updated!");
                this.notifyAlert("Successfull!!", "green");
              })
              .catch((error) => {
                  // The document probably doesn't exist.
                  console.error("Error updating document: ", error);
                  this.notifyAlert(error, "red");
              });

          },
          notifyAlert(message, color){
            this.$q.notify({
                message: message,
                color: color
              })
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
  .kpiclass{
    min-width: 50px;
  }

</style>
