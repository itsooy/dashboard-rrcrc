<template>
    <div class="row q-col-gutter-sm q-ma-xs">
        <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">  <!--Number of Total Programs-->
                <q-card>
                  <q-card-section :class="$q.dark.isActive?'blue_dark':'bg-blue-8'" class="text-white">
                    <div class="row">
                      <div class="col-10">
                        <div class="text-h6">Number of Total Programs</div>
                        <div class="text-h5">{{generalDashboardFebContents.totalPrograms}}</div>
                      </div>
                      <div class="col-2">
                        <q-icon size="62px" name="home" right/>
                      </div>
                    </div>
                  </q-card-section>
                </q-card>
        </div>
        <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">  <!--Number of Active Programs-->
                <q-card>
                  <q-card-section :class="$q.dark.isActive?'green_dark':'bg-green-8'" class="text-white">
                    <div class="row">
                      <div class="col-10">
                        <div class="text-h6">Number of Active Programs</div>
                        <div class="text-h5">{{generalDashboardFebContents.activePrograms}}</div>
                      </div>
                      <div class="col-2">
                        <q-icon size="62px" name="trending_up" right/>
                      </div>
                    </div>
                  </q-card-section>
                </q-card>
        </div>
        <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">  <!--Number of Projects Going On-->
                <q-card>
                  <q-card-section :class="$q.dark.isActive?'orange_dark':'bg-orange-9'" class="text-white">
                    <div class="row">
                      <div class="col-10">
                        <div class="text-h6">Number of Projects Going On</div>
                        <div class="text-h5">{{generalDashboardFebContents.projectsGoingOn}}</div>
                      </div>
                      <div class="col-2">
                        <q-icon size="62px" name="compare_arrows" right/>
                      </div>
                    </div>
                    <q-tooltip content-class="bg-grey-transparent" content-style="font-size: 16px">
                      <div>
                        1. charIty 13 <br>
                        2. innovator 13 
                      </div>
                    </q-tooltip>
                  </q-card-section>
                </q-card>
        </div>
        <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">  <!--# of Unique Volunteers / Hours-->
                <q-card>
                  <q-card-section :class="$q.dark.isActive?'purple_dark':'bg-purple-9'" class="text-white">
                    <div class="row">
                      <div class="col-10">
                        <div class="text-h6"># of Unique Volunteers / Hours</div>
                        <div class="text-h5">{{generalDashboardFebContents.totalUniqueVolunteers}} / {{generalDashboardFebContents.totalVolunteerHours}}</div>
                      </div>
                      <div class="col-2">
                        <q-icon size="62px" name="favorite" right/>
                      </div>
                    </div>
                  </q-card-section>
                </q-card>
        </div>
        <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12">  <!--Main Table-->
            <q-card>
                <q-card-section>
                    <q-img src="/statics/images/rrcrc-logo_1200x300.png"></q-img>
                </q-card-section>
                <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12" align="center" >
                    <meaningof-colors/> <!--Using component of Meaning of Colors-->
                    <br/>
                </div>
                <!--
                    color scale
                    No-Data ==> grey
                    Warning ==> red-10
                    Need Attention ==> orange-8
                    Monitor Closely ==> yellow-7
                    Good ==> green-9
                    Review Notice ==> blue
                -->
                <div class="q-pa-md">
                    <q-btn-group spread>
                        <q-btn label="Foodbank"
                        push
                        split
                        :color="(foodbankFebContents.overallPerformance == null)?'grey-2':(foodbankFebContents.overallPerformance >= '0' && foodbankFebContents.overallPerformance <= '40')?'red':(foodbankFebContents.overallPerformance > '40' && foodbankFebContents.overallPerformance <= '60')?'orange':(foodbankFebContents.overallPerformance > '60' && foodbankFebContents.overallPerformance < '90')?'yellow-7':(foodbankFebContents.overallPerformance >= '90' && foodbankFebContents.overallPerformance < '120')?'green':(foodbankFebContents.overallPerformance >= '120'?'blue':'grey-2')"
                        to="/foodbank"
                        size="lg"
                        no-caps
                        
                        style="height: 90px"
                    >
                        <q-tooltip content-style="font-size: 16px">
                        KPI1: # Clients (Unique) <br>
                        KPI2: # Contacts <br>
                        KPI3: # of Beneficiaries (Extended) <br>
                        KPI4: Activities (#)
                        </q-tooltip>
                        </q-btn>
                        <q-separator vertical />
                        <q-separator vertical />
                        <q-btn label="Baby Cupboard"
                        push
                        split
                        :color="(babyCupboardFebContents.overallPerformance == null)?'grey-2':(babyCupboardFebContents.overallPerformance >= '0' && babyCupboardFebContents.overallPerformance <= '40')?'red':(babyCupboardFebContents.overallPerformance > '40' && babyCupboardFebContents.overallPerformance <= '60')?'orange':(babyCupboardFebContents.overallPerformance > '60' && babyCupboardFebContents.overallPerformance < '90')?'yellow-7':(babyCupboardFebContents.overallPerformance >= '90' && babyCupboardFebContents.overallPerformance < '120')?'green':(babyCupboardFebContents.overallPerformance >= '120'?'blue':'grey-2')"

                        to="/babycupboard"
                        size="lg"
                        no-caps
                        
                        style="height: 90px"
                    >
                        <q-tooltip content-style="font-size: 16px">
                        KPI1: # Clients 
                        </q-tooltip>
                        </q-btn>
                        <q-separator vertical />
                        <q-separator vertical />
                        <q-btn label="Gifts in Kind"
                        push
                        split
                        :color="(gikFebContents.overallPerformance == null)?'grey-2':(gikFebContents.overallPerformance >= '0' && gikFebContents.overallPerformance <= '40')?'red':(gikFebContents.overallPerformance > '40' && gikFebContents.overallPerformance <= '60')?'orange':(gikFebContents.overallPerformance > '60' && gikFebContents.overallPerformance < '90')?'yellow-7':(gikFebContents.overallPerformance >= '90' && gikFebContents.overallPerformance < '120')?'green':(gikFebContents.overallPerformance >= '120'?'blue':'grey-2')"
                        to="/giftsinkind"
                        size="lg"
                        no-caps
                        style="height: 90px"
                    >
                        <q-tooltip content-style="font-size: 16px">
                        KPI1: # Clients (Unique) <br>
                        KPI2: # Contacts <br>
                        KPI3: # of Beneficiaries (Extended) <br>
                        KPI4: Activities (#)
                        </q-tooltip>
                        </q-btn>
                        <q-separator vertical />
                        <q-separator vertical />
                        <q-btn label="charITy13"
                        push
                        split
                        :color="(charity13FebContents.overallPerformance == null)?'grey-2':(charity13FebContents.overallPerformance >= '0' && charity13FebContents.overallPerformance <= '40')?'red':(charity13FebContents.overallPerformance > '40' && charity13FebContents.overallPerformance <= '60')?'orange':(charity13FebContents.overallPerformance > '60' && charity13FebContents.overallPerformance < '90')?'yellow-7':(charity13FebContents.overallPerformance >= '90' && charity13FebContents.overallPerformance < '120')?'green':(charity13FebContents.overallPerformance >= '120'?'blue':'grey-2')"
                        to="/charity13"
                        size="lg"
                        no-caps
                        
                        style="height: 90px"
                    >
                        <q-tooltip content-style="font-size: 16px">
                        KPI1: # Clients (Unique) <br>
                        KPI2: # Contacts <br>
                        KPI3: # of Beneficiaries (Extended)	<br>
                        KPI4: Activities (#)
                        </q-tooltip>
                        </q-btn>
                    </q-btn-group>
                    <q-btn-group spread>
                        <q-btn label="Entrepreneurship"
                        push
                        split
                        :color="(entrepreneurshipFebContents.overallPerformance == null)?'grey-2':(entrepreneurshipFebContents.overallPerformance >= '0' && entrepreneurshipFebContents.overallPerformance <= '40')?'red':(entrepreneurshipFebContents.overallPerformance > '40' && entrepreneurshipFebContents.overallPerformance <= '60')?'orange':(entrepreneurshipFebContents.overallPerformance > '60' && entrepreneurshipFebContents.overallPerformance < '90')?'yellow-7':(entrepreneurshipFebContents.overallPerformance >= '90' && entrepreneurshipFebContents.overallPerformance < '120')?'green':(entrepreneurshipFebContents.overallPerformance >= '120'?'blue':'grey-2')"
                        to="/enterpreneurship"
                        size="lg"
                        no-caps
                        
                        style="height: 90px"
                    >
                        <q-tooltip content-style="font-size: 16px">
                        KPI1: # Clients (Unique) <br>
                        KPI2: # Contacts <br>
                        KPI3: # of Beneficiaries (Extended)	<br>
                        KPI4: Activities (#)
                        </q-tooltip>
                        </q-btn>
                        <q-separator vertical />
                        <q-separator vertical />
                        <q-btn label="Employment Skills"
                        push
                        split
                        :color="(employmentSkillsFebContents.overallPerformance == null)?'grey-2':(employmentSkillsFebContents.overallPerformance >= '0' && employmentSkillsFebContents.overallPerformance <= '40')?'red':(employmentSkillsFebContents.overallPerformance > '40' && employmentSkillsFebContents.overallPerformance <= '60')?'orange':(employmentSkillsFebContents.overallPerformance > '60' && employmentSkillsFebContents.overallPerformance < '90')?'yellow-7':(employmentSkillsFebContents.overallPerformance >= '90' && employmentSkillsFebContents.overallPerformance < '120')?'green':(employmentSkillsFebContents.overallPerformance >= '120'?'blue':'grey-2')"
                        to="/employementskills"
                        size="lg"
                        no-caps
                        
                        style="height: 90px"
                    >
                        <q-tooltip content-style="font-size: 16px">
                        KPI1: # Clients (Unique) <br>
                        KPI2: # Contacts <br>
                        KPI3: # of Beneficiaries (Extended)	<br>
                        KPI4: Activities (#)
                        </q-tooltip>
                        </q-btn>
                        <q-separator vertical />
                        <q-separator vertical />
                        <q-btn label="Social Harvest"
                        push
                        split
                        :color="(socialHarvestFebContents.overallPerformance == null)?'grey-2':(socialHarvestFebContents.overallPerformance >= '0' && socialHarvestFebContents.overallPerformance <= '40')?'red':(socialHarvestFebContents.overallPerformance > '40' && socialHarvestFebContents.overallPerformance <= '60')?'orange':(socialHarvestFebContents.overallPerformance > '60' && socialHarvestFebContents.overallPerformance < '90')?'yellow-7':(socialHarvestFebContents.overallPerformance >= '90' && socialHarvestFebContents.overallPerformance < '120')?'green':(socialHarvestFebContents.overallPerformance >= '120'?'blue':'grey-2')"
                        to="/socialharvest"
                        size="lg"
                        no-caps
                        
                        style="height: 90px"
                    >
                        <q-tooltip content-style="font-size: 16px">
                        KPI1: # Customers (Unique) <br>
                        KPI2: # Contacts <br>
                        KPI3: Activities (#) <br>
                        KPI4: Production Volume (Kg) <br>
                        KPI5: Active growing stations (#)
                        </q-tooltip>
                        </q-btn>
                        <q-separator vertical />
                        <q-separator vertical />
                        <q-btn label="Market Mobile"
                        push
                        split
                        :color="(marketMobileFebContents.overallPerformance == null)?'grey-2':(marketMobileFebContents.overallPerformance >= '0' && marketMobileFebContents.overallPerformance <= '40')?'red':(marketMobileFebContents.overallPerformance > '40' && marketMobileFebContents.overallPerformance <= '60')?'orange':(marketMobileFebContents.overallPerformance > '60' && marketMobileFebContents.overallPerformance < '90')?'yellow-7':(marketMobileFebContents.overallPerformance >= '90' && marketMobileFebContents.overallPerformance < '120')?'green':(marketMobileFebContents.overallPerformance >= '120'?'blue':'grey-2')"
                        to="/marketmobile"
                        size="lg"
                        no-caps
                        
                        style="height: 90px"
                    >
                        <q-tooltip content-style="font-size: 16px">
                        KPI1: # Clients (Unique) <br>
                        KPI2: # Contacts <br>
                        KPI3: # of Beneficiaries (Extended) <br>
                        KPI4: Activities (#)
                        </q-tooltip>
                        </q-btn>
                    </q-btn-group>
                    <q-btn-group spread>
                        <q-btn label="Clothespin"
                        push
                        split
                        :color="(clothespinFebContents.overallPerformance == null)?'grey-2':(clothespinFebContents.overallPerformance >= '0' && clothespinFebContents.overallPerformance <= '40')?'red':(clothespinFebContents.overallPerformance > '40' && clothespinFebContents.overallPerformance <= '60')?'orange':(clothespinFebContents.overallPerformance > '60' && clothespinFebContents.overallPerformance < '90')?'yellow-7':(clothespinFebContents.overallPerformance >= '90' && clothespinFebContents.overallPerformance < '120')?'green':(clothespinFebContents.overallPerformance >= '120'?'blue':'grey-2')"
                        to="/clothespin"
                        size="lg"
                        no-caps
                        
                        style="height: 90px"
                    >
                        <q-tooltip content-style="font-size: 16px">
                        KPI1: # Contacts <br>
                        KPI2: # of Beneficiaries (Extended) <br>
                        KPI3: # of items given to the families
                        </q-tooltip>
                        </q-btn>
                        <q-separator vertical />
                        <q-separator vertical />
                        <q-btn label="GFB"
                        push
                        split
                        :color="(gfbFebContents.overallPerformance == null)?'grey-2':(gfbFebContents.overallPerformance >= '0' && gfbFebContents.overallPerformance <= '40')?'red':(gfbFebContents.overallPerformance > '40' && gfbFebContents.overallPerformance <= '60')?'orange':(gfbFebContents.overallPerformance > '60' && gfbFebContents.overallPerformance < '90')?'yellow-7':(gfbFebContents.overallPerformance >= '90' && gfbFebContents.overallPerformance < '120')?'green':(gfbFebContents.overallPerformance >= '120'?'blue':'grey-2')"
                        to="/gfb"
                        size="lg"
                        no-caps
                        
                        style="height: 90px"
                    >
                        <q-tooltip content-style="font-size: 16px">
                        KPI1: # Contacts <br>
                        KPI2: Activities (#) <br>
                        KPI3: No. of Boxes Sold (#)            
                        </q-tooltip>
                        </q-btn>
                        <q-separator vertical />
                        <q-separator vertical />
                        <q-btn label="Overbrook SP"
                        push
                        split
                        :color="(overbrookSPFebContents.overallPerformance == null)?'grey-2':(overbrookSPFebContents.overallPerformance >= '0' && overbrookSPFebContents.overallPerformance <= '40')?'red':(overbrookSPFebContents.overallPerformance > '40' && overbrookSPFebContents.overallPerformance <= '60')?'orange':(overbrookSPFebContents.overallPerformance > '60' && overbrookSPFebContents.overallPerformance < '90')?'yellow-7':(overbrookSPFebContents.overallPerformance >= '90' && overbrookSPFebContents.overallPerformance < '120')?'green':(overbrookSPFebContents.overallPerformance >= '120'?'blue':'grey-2')"
                        to="/overbrooksp"
                        size="lg"
                        no-caps
                        
                        style="height: 90px"
                    >
                        <q-tooltip content-style="font-size: 16px">
                        KPI1: # of safety improvement initiatives implemented <br>
                        KPI2: # of vulnerable residents involved in safety improvement initiatives<br>
                        </q-tooltip>
                        </q-btn>
                        <q-separator vertical />
                        <q-separator vertical />
                        <q-btn label="Collective Kitchen"
                            push
                            split
                            :color="(collectiveKitchenFebContents.overallPerformance == null)?'grey-2':(collectiveKitchenFebContents.overallPerformance >= '0' && collectiveKitchenFebContents.overallPerformance <= '40')?'red':(collectiveKitchenFebContents.overallPerformance > '40' && collectiveKitchenFebContents.overallPerformance <= '60')?'orange':(collectiveKitchenFebContents.overallPerformance > '60' && collectiveKitchenFebContents.overallPerformance < '90')?'yellow-7':(collectiveKitchenFebContents.overallPerformance >= '90' && collectiveKitchenFebContents.overallPerformance < '120')?'green':(collectiveKitchenFebContents.overallPerformance >= '120'?'blue':'grey-2')"
                            to="/collectivekitchen"
                            size="lg"
                            no-caps
                            
                            style="height: 90px"
                        >
                            <q-tooltip content-style="font-size: 16px">
                            KPI1: # Clients (Unique) <br>
                            KPI2: # Contacts <br>
                            KPI3: # of Beneficiaries (Extended) <br>
                            KPI4: Activities (#)
                            </q-tooltip>
                        </q-btn>
                    </q-btn-group>
                    <q-btn-group spread>
                        <q-btn label="Community Meals"
                            push
                            split
                            :color="(communityMealsFebContents.overallPerformance == null)?'grey-2':(communityMealsFebContents.overallPerformance >= '0' && communityMealsFebContents.overallPerformance <= '40')?'red':(communityMealsFebContents.overallPerformance > '40' && communityMealsFebContents.overallPerformance <= '60')?'orange':(communityMealsFebContents.overallPerformance > '60' && communityMealsFebContents.overallPerformance < '90')?'yellow-7':(communityMealsFebContents.overallPerformance >= '90' && communityMealsFebContents.overallPerformance < '120')?'green':(communityMealsFebContents.overallPerformance >= '120'?'blue':'grey-2')"
                            to="/communitymeals"
                            size="lg"
                            no-caps
                            
                            style="height: 90px"
                        >
                            <q-tooltip content-style="font-size: 16px">
                            KPI1: # Contacts<br>
                            KPI2: Activities (#) <br>
                            KPI3: # of Meals Served
                            </q-tooltip>
                        </q-btn>
                        <q-separator vertical />
                        <q-separator vertical />
                        <q-btn label="PINS"
                            push
                            split
                            :color="(pinsFebContents.overallPerformance == null)?'grey-2':(pinsFebContents.overallPerformance >= '0' && pinsFebContents.overallPerformance <= '40')?'red':(pinsFebContents.overallPerformance > '40' && pinsFebContents.overallPerformance <= '60')?'orange':(pinsFebContents.overallPerformance > '60' && pinsFebContents.overallPerformance < '90')?'yellow-7':(pinsFebContents.overallPerformance >= '90' && pinsFebContents.overallPerformance < '120')?'green':(pinsFebContents.overallPerformance >= '120'?'blue':'grey-2')"
                            to="/pins"
                            size="lg"
                            no-caps
                            
                            style="height: 90px"
                        >
                            <q-tooltip content-style="font-size: 16px">
                            KPI1: # of network interventions after a traumatic event<br>
                            KPI2: # of community and social service providers in the networks<br>
                            KPI3: # of active PINS networks across the city<br>
                            </q-tooltip>
                        </q-btn>
                        <q-separator vertical />
                        <q-separator vertical />
                        <q-btn label="Yes I Can"
                        push
                        split
                        :color="(yesICanFebContents.overallPerformance == null)?'grey-2':(yesICanFebContents.overallPerformance >= '0' && yesICanFebContents.overallPerformance <= '40')?'red':(yesICanFebContents.overallPerformance > '40' && yesICanFebContents.overallPerformance <= '60')?'orange':(yesICanFebContents.overallPerformance > '60' && yesICanFebContents.overallPerformance < '90')?'yellow-7':(yesICanFebContents.overallPerformance >= '90' && yesICanFebContents.overallPerformance < '120')?'green':(yesICanFebContents.overallPerformance >= '120'?'blue':'grey-2')"
                        to="/yesican"
                        size="lg"
                        no-caps
                        
                        style="height: 90px"
                    >
                        <q-tooltip content-style="font-size: 16px">
                        KPI1: # Contacts (Unique)<br>
                        KPI2: # of first time users at the FB in the yes I can program<br>
                        KPI3: # of poverty reduction plans developed 
                        </q-tooltip>
                        </q-btn>
                        <q-separator vertical />
                        <q-separator vertical />
                        <q-btn label="Crisis Intervention"
                            push
                            split
                            :color="(crisisInterventionFebContents.overallPerformance == null)?'grey-2':(crisisInterventionFebContents.overallPerformance >= '0' && crisisInterventionFebContents.overallPerformance <= '40')?'red':(crisisInterventionFebContents.overallPerformance > '40' && crisisInterventionFebContents.overallPerformance <= '60')?'orange':(crisisInterventionFebContents.overallPerformance > '60' && crisisInterventionFebContents.overallPerformance < '90')?'yellow-7':(crisisInterventionFebContents.overallPerformance >= '90' && crisisInterventionFebContents.overallPerformance < '120')?'green':(crisisInterventionFebContents.overallPerformance >= '120'?'blue':'grey-2')"
                            to="/crisisintervention"
                            size="lg"
                            no-caps
                            
                            style="height: 90px"
                        >
                            <q-tooltip content-style="font-size: 16px">
                            KPI1: # Contacts (Unique) <br>
                            KPI2: # of Contacts
                            </q-tooltip>
                        </q-btn>
                    </q-btn-group>
                    <q-btn-group spread>
                        <q-btn label="YouthPREducation"
                            push
                            split
                            :color="(youthPREducationFebContents.overallPerformance == null)?'grey-2':(youthPREducationFebContents.overallPerformance >= '0' && youthPREducationFebContents.overallPerformance <= '40')?'red':(youthPREducationFebContents.overallPerformance > '40' && youthPREducationFebContents.overallPerformance <= '60')?'orange':(youthPREducationFebContents.overallPerformance > '60' && youthPREducationFebContents.overallPerformance < '90')?'yellow-7':(youthPREducationFebContents.overallPerformance >= '90' && youthPREducationFebContents.overallPerformance < '120')?'green':(youthPREducationFebContents.overallPerformance >= '120'?'blue':'grey-2')"
                            to="/youthpreducation"
                            size="lg"
                            no-caps
                            
                            style="height: 90px"
                        >
                            <q-tooltip content-style="font-size: 16px">
                            KPI1: # of Children (Unique)<br>
                            KPI2: # of Youth (Unique)<br>
                            KPI3: # Total Contacts<br>
                            KPI4: # of Activities
                            </q-tooltip>
                        </q-btn>
                        <q-separator vertical />
                        <q-separator vertical />
                        <q-btn label="YouthPRSport"
                            push
                            split
                            :color="(youthPRSportFebContents.overallPerformance == null)?'grey-2':(youthPRSportFebContents.overallPerformance >= '0' && youthPRSportFebContents.overallPerformance <= '40')?'red':(youthPRSportFebContents.overallPerformance > '40' && youthPRSportFebContents.overallPerformance <= '60')?'orange':(youthPRSportFebContents.overallPerformance > '60' && youthPRSportFebContents.overallPerformance < '90')?'yellow-7':(youthPRSportFebContents.overallPerformance >= '90' && youthPRSportFebContents.overallPerformance < '120')?'green':(youthPRSportFebContents.overallPerformance >= '120'?'blue':'grey-2')"
                            to="/youthprsport"
                            size="lg"
                            no-caps
                            
                            style="height: 90px"
                        >
                            <q-tooltip content-style="font-size: 16px">
                            KPI1: # of Children (Unique)<br>
                            KPI2: # of Youth (Unique)<br>
                            KPI3: # Total Contacts<br>
                            KPI4: # of Activities
                            </q-tooltip>
                        </q-btn>
                        <q-separator vertical />
                        <q-separator vertical />
                        <q-btn label="YouthPRViolin"
                            push
                            split
                            :color="(youthPRViolinFebContents.overallPerformance == null)?'grey-2':(youthPRViolinFebContents.overallPerformance >= '0' && youthPRViolinFebContents.overallPerformance <= '40')?'red':(youthPRViolinFebContents.overallPerformance > '40' && youthPRViolinFebContents.overallPerformance <= '60')?'orange':(youthPRViolinFebContents.overallPerformance > '60' && youthPRViolinFebContents.overallPerformance < '90')?'yellow-7':(youthPRViolinFebContents.overallPerformance >= '90' && youthPRViolinFebContents.overallPerformance < '120')?'green':(youthPRViolinFebContents.overallPerformance >= '120'?'blue':'grey-2')"
                            to="/youthprviolin"
                            size="lg"
                            no-caps
                            
                            style="height: 90px"
                        >
                            <q-tooltip content-style="font-size: 16px">
                            KPI1: # of Children (Unique)<br>
                            KPI2: # of Youth (Unique)<br>
                            KPI3: # Total Contacts<br>
                            KPI4: # of Activities
                            </q-tooltip>
                        </q-btn>
                        <q-separator vertical />
                        <q-separator vertical />
                        <q-btn label="Community Development"
                            push
                            split
                            :color="(communityDevelopmentFebContents.overallPerformance == null)?'grey-2':(communityDevelopmentFebContents.overallPerformance >= '0' && communityDevelopmentFebContents.overallPerformance <= '40')?'red':(communityDevelopmentFebContents.overallPerformance > '40' && communityDevelopmentFebContents.overallPerformance <= '60')?'orange':(communityDevelopmentFebContents.overallPerformance > '60' && communityDevelopmentFebContents.overallPerformance < '90')?'yellow-7':(communityDevelopmentFebContents.overallPerformance >= '90' && communityDevelopmentFebContents.overallPerformance < '120')?'green':(communityDevelopmentFebContents.overallPerformance >= '120'?'blue':'grey-2')"
                            to="/cd"
                            size="lg"
                            no-caps
                            
                            style="height: 90px"
                        >
                            <q-tooltip content-style="font-size: 16px">
                            KPI1: # of residents participating in community events, celebrations, and other CD activities <br>
                            KPI2: # of contact with community associations and tenants circles<br>
                            KPI3: # of collaborative initiatives <br>
                            </q-tooltip>
                        </q-btn>
                    </q-btn-group>
                </div>
            </q-card>
        </div>
        <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">  <!--Overall Performance and Budget Usage-->
                <q-card flat bordered class="">
                  <q-card-section class="row">
                    <div class="text-h6 col-12">Overall Performance (Monthly)
                      <q-btn flat dense icon="fas fa-download" class="float-right"  @click="SaveImage('gauge')"
                              :color="!$q.dark.isActive? 'grey-8':'white'">
                        <q-tooltip>Download</q-tooltip>
                      </q-btn>
                    </div>
                  </q-card-section>
                  <q-separator inset></q-separator>
                  <q-card-section>
                    <IEcharts ref="gauge" :option="overallFebGaugeOptions" :resizable="true" style="height:335px"/>
                  </q-card-section>
                </q-card>
                <q-card flat bordered class="">
                  <q-card-section class="row">
                    <div class="text-h6 col-12">Budget Usage (Cumulative)
                      <q-btn flat dense icon="fas fa-download" class="float-right"  @click="SaveImage('gauge')"
                              :color="!$q.dark.isActive? 'grey-8':'white'">
                        <q-tooltip>Download</q-tooltip>
                      </q-btn>
                    </div>
                  </q-card-section>
                  <q-separator inset></q-separator>
                  <q-card-section>
                    <IEcharts ref="gauge" :option="budgetFebGaugeOptions" :resizable="true" style="height:335px"/>
                  </q-card-section>
                </q-card> 
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">  <!--Expenses (Cumulative)-->
                <q-card flat bordered class="">
                  <q-card-section>
                    <div class="text-h6 col-12">Expenses (Cumulative)
                      <q-btn flat dense icon="fas fa-download" class="float-right" @click="SaveImage('pie')"
                            :color="!$q.dark.isActive? 'grey-8':'white'">
                        <q-tooltip>Download</q-tooltip>
                      </q-btn>
                    </div>
                  </q-card-section>
                  <q-separator inset></q-separator>
                  <q-card-section>
                    <IEcharts ref="pie" :option="expensesFebCumulativePieOptions" :resizable="true" style="height:470px"/>
                  </q-card-section>
                </q-card>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">  <!--Expenses (Monthly)-->
                <q-card flat bordered class="">
                  <q-card-section>
                    <div class="text-h6 col-12">Expenses (Monthly)
                      <q-btn flat dense icon="fas fa-download" class="float-right" @click="SaveImage('pie')"
                            :color="!$q.dark.isActive? 'grey-8':'white'">
                        <q-tooltip>Download</q-tooltip>
                      </q-btn>
                    </div>
                  </q-card-section>
                  <q-separator inset></q-separator>
                  <q-card-section>
                    <IEcharts ref="pie" :option="expensesFebMonthlyPieOptions" :resizable="true" style="height:470px"/>
                  </q-card-section>
                </q-card>
        </div>
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"> <!--Expenses & Revenues-->
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
</template>

<script>
    import db from 'src/boot/firebase';
    import MeaningofColors from 'src/components/meaningofColors.vue';
    export default {
        name:"janMainTable",
        components: { MeaningofColors },
        data(){
          return{
                generalDashboardJanContent: {
                },
                generalDashboardJanContents : [],
                generalDashboardFebContent: { 
                },
                generalDashboardFebContents : [],
                generalDashboardMarContent: { 
                },
                generalDashboardMarContents : [],
                generalDashboardAprContent: { 
                },
                generalDashboardAprContents : [],
                generalDashboardMayContent: { 
                },
                generalDashboardMayContents : [],
                generalDashboardJunContent: { 
                },
                generalDashboardJunContents : [],
                generalDashboardJulContent: { 
                },
                generalDashboardJulContents : [],
                generalDashboardAugContent: { 
                },
                generalDashboardAugContents : [],
                generalDashboardSepContent: { 
                },
                generalDashboardSepContents : [],
                generalDashboardOctContent: { 
                },
                generalDashboardOctContents : [],
                generalDashboardNovContent: { 
                },
                generalDashboardNovContents : [],
                generalDashboardDecContent: { 
                },
                generalDashboardDecContents : [],

                babyCupboardJanContent: {                
                },
                babyCupboardJanContents : [],
                babyCupboardFebContent: { 
                },
                babyCupboardFebContents : [],
                babyCupboardMarContent: { 
                },
                babyCupboardMarContents : [],
                babyCupboardAprContent: { 
                },
                babyCupboardAprContents : [],
                babyCupboardMayContent: { 
                },
                babyCupboardMayContents : [],
                babyCupboardJunContent: { 
                },
                babyCupboardJunContents : [],
                babyCupboardJulContent: { 
                },
                babyCupboardJulContents : [],
                babyCupboardAugContent: { 
                },
                babyCupboardAugContents : [],
                babyCupboardSepContent: { 
                },
                babyCupboardSepContents : [],
                babyCupboardOctContent: { 
                },
                babyCupboardOctContents : [],
                babyCupboardNovContent: { 
                },
                babyCupboardNovContents : [],
                babyCupboardDecContent: { 
                },
                babyCupboardDecContents : [],

                communityDevelopmentJanContent: {                
                },
                communityDevelopmentJanContents : [],
                communityDevelopmentFebContent: { 
                },
                communityDevelopmentFebContents : [],
                communityDevelopmentMarContent: { 
                },
                communityDevelopmentMarContents : [],
                communityDevelopmentAprContent: { 
                },
                communityDevelopmentAprContents : [],
                communityDevelopmentMayContent: { 
                },
                communityDevelopmentMayContents : [],
                communityDevelopmentJunContent: { 
                },
                communityDevelopmentJunContents : [],
                communityDevelopmentJulContent: { 
                },
                communityDevelopmentJulContents : [],
                communityDevelopmentAugContent: { 
                },
                communityDevelopmentAugContents : [],
                communityDevelopmentSepContent: { 
                },
                communityDevelopmentSepContents : [],
                communityDevelopmentOctContent: { 
                },
                communityDevelopmentOctContents : [],
                communityDevelopmentNovContent: { 
                },
                communityDevelopmentNovContents : [],
                communityDevelopmentDecContent: { 
                },
                communityDevelopmentDecContents : [],

                charity13JanContent: {                
                },
                charity13JanContents : [],
                charity13FebContent: { 
                },
                charity13FebContents : [],
                charity13MarContent: { 
                },
                charity13MarContents : [],
                charity13AprContent: { 
                },
                charity13AprContents : [],
                charity13MayContent: { 
                },
                charity13MayContents : [],
                charity13JunContent: { 
                },
                charity13JunContents : [],
                charity13JulContent: { 
                },
                charity13JulContents : [],
                charity13AugContent: { 
                },
                charity13AugContents : [],
                charity13SepContent: { 
                },
                charity13SepContents : [],
                charity13OctContent: { 
                },
                charity13OctContents : [],
                charity13NovContent: { 
                },
                charity13NovContents : [],
                charity13DecContent: { 
                },
                charity13DecContents : [],
  
                clothespinJanContent: {
                },
                clothespinJanContents : [],
                clothespinFebContent: {
                },
                clothespinFebContents : [],
                clothespinMarContent: {
                },
                clothespinMarContents : [],
                clothespinAprContent: {
                },
                clothespinAprContents : [],
                clothespinMayContent: {
                },
                clothespinMayContents : [],
                clothespinJunContent: {
                },
                clothespinJunContents : [],
                clothespinJulContent: {
                },
                clothespinJulContents : [],
                clothespinAugContent: {
                },
                clothespinAugContents : [],
                clothespinSepContent: {
                },
                clothespinSepContents : [],
                clothespinOctContent: {
                },
                clothespinOctContents : [],
                clothespinNovContent: {
                },
                clothespinNovContents : [],
                clothespinDecContent: {
                },
                clothespinDecContents : [],

                collectiveKitchenJanContent: {                
                },
                collectiveKitchenJanContents : [],
                collectiveKitchenFebContent: { 
                },
                collectiveKitchenFebContents : [],
                collectiveKitchenMarContent: { 
                },
                collectiveKitchenMarContents : [],
                collectiveKitchenAprContent: { 
                },
                collectiveKitchenAprContents : [],
                collectiveKitchenMayContent: { 
                },
                collectiveKitchenMayContents : [],
                collectiveKitchenJunContent: { 
                },
                collectiveKitchenJunContents : [],
                collectiveKitchenJulContent: { 
                },
                collectiveKitchenJulContents : [],
                collectiveKitchenAugContent: { 
                },
                collectiveKitchenAugContents : [],
                collectiveKitchenSepContent: { 
                },
                collectiveKitchenSepContents : [],
                collectiveKitchenOctContent: { 
                },
                collectiveKitchenOctContents : [],
                collectiveKitchenNovContent: { 
                },
                collectiveKitchenNovContents : [],
                collectiveKitchenDecContent: { 
                },
                collectiveKitchenDecContents : [],

                foodbankJanContent: {                
                },
                foodbankJanContents : [],
                foodbankFebContent: { 
                },
                foodbankFebContents : [],
                foodbankMarContent: { 
                },
                foodbankMarContents : [],
                foodbankAprContent: { 
                },
                foodbankAprContents : [],
                foodbankMayContent: { 
                },
                foodbankMayContents : [],
                foodbankJunContent: { 
                },
                foodbankJunContents : [],
                foodbankJulContent: { 
                },
                foodbankJulContents : [],
                foodbankAugContent: { 
                },
                foodbankAugContents : [],
                foodbankSepContent: { 
                },
                foodbankSepContents : [],
                foodbankOctContent: { 
                },
                foodbankOctContents : [],
                foodbankNovContent: { 
                },
                foodbankNovContents : [],
                foodbankDecContent: { 
                },
                foodbankDecContents : [],

                communityMealsJanContent: {                
                },
                communityMealsJanContents : [],
                communityMealsFebContent: { 
                },
                communityMealsFebContents : [],
                communityMealsMarContent: { 
                },
                communityMealsMarContents : [],
                communityMealsAprContent: { 
                },
                communityMealsAprContents : [],
                communityMealsMayContent: { 
                },
                communityMealsMayContents : [],
                communityMealsJunContent: { 
                },
                communityMealsJunContents : [],
                communityMealsJulContent: { 
                },
                communityMealsJulContents : [],
                communityMealsAugContent: { 
                },
                communityMealsAugContents : [],
                communityMealsSepContent: { 
                },
                communityMealsSepContents : [],
                communityMealsOctContent: { 
                },
                communityMealsOctContents : [],
                communityMealsNovContent: { 
                },
                communityMealsNovContents : [],
                communityMealsDecContent: { 
                },
                communityMealsDecContents : [],

                crisisInterventionJanContent: {                
                },
                crisisInterventionJanContents : [],
                crisisInterventionFebContent: { 
                },
                crisisInterventionFebContents : [],
                crisisInterventionMarContent: { 
                },
                crisisInterventionMarContents : [],
                crisisInterventionAprContent: { 
                },
                crisisInterventionAprContents : [],
                crisisInterventionMayContent: { 
                },
                crisisInterventionMayContents : [],
                crisisInterventionJunContent: { 
                },
                crisisInterventionJunContents : [],
                crisisInterventionJulContent: { 
                },
                crisisInterventionJulContents : [],
                crisisInterventionAugContent: { 
                },
                crisisInterventionAugContents : [],
                crisisInterventionSepContent: { 
                },
                crisisInterventionSepContents : [],
                crisisInterventionOctContent: { 
                },
                crisisInterventionOctContents : [],
                crisisInterventionNovContent: { 
                },
                crisisInterventionNovContents : [],
                crisisInterventionDecContent: { 
                },
                crisisInterventionDecContents : [],

                employmentSkillsJanContent: {                
                },
                employmentSkillsJanContents : [],
                employmentSkillsFebContent: { 
                },
                employmentSkillsFebContents : [],
                employmentSkillsMarContent: { 
                },
                employmentSkillsMarContents : [],
                employmentSkillsAprContent: { 
                },
                employmentSkillsAprContents : [],
                employmentSkillsMayContent: { 
                },
                employmentSkillsMayContents : [],
                employmentSkillsJunContent: { 
                },
                employmentSkillsJunContents : [],
                employmentSkillsJulContent: { 
                },
                employmentSkillsJulContents : [],
                employmentSkillsAugContent: { 
                },
                employmentSkillsAugContents : [],
                employmentSkillsSepContent: { 
                },
                employmentSkillsSepContents : [],
                employmentSkillsOctContent: { 
                },
                employmentSkillsOctContents : [],
                employmentSkillsNovContent: { 
                },
                employmentSkillsNovContents : [],
                employmentSkillsDecContent: { 
                },
                employmentSkillsDecContents : [],

                entrepreneurshipJanContent: {                
                },
                entrepreneurshipJanContents : [],
                entrepreneurshipFebContent: { 
                },
                entrepreneurshipFebContents : [],
                entrepreneurshipMarContent: { 
                },
                entrepreneurshipMarContents : [],
                entrepreneurshipAprContent: { 
                },
                entrepreneurshipAprContents : [],
                entrepreneurshipMayContent: { 
                },
                entrepreneurshipMayContents : [],
                entrepreneurshipJunContent: { 
                },
                entrepreneurshipJunContents : [],
                entrepreneurshipJulContent: { 
                },
                entrepreneurshipJulContents : [],
                entrepreneurshipAugContent: { 
                },
                entrepreneurshipAugContents : [],
                entrepreneurshipSepContent: { 
                },
                entrepreneurshipSepContents : [],
                entrepreneurshipOctContent: { 
                },
                entrepreneurshipOctContents : [],
                entrepreneurshipNovContent: { 
                },
                entrepreneurshipNovContents : [],
                entrepreneurshipDecContent: { 
                },
                entrepreneurshipDecContents : [],

                gikJanContent: {
                },
                gikJanContents : [],
                gikFebContent: { 
                },
                gikFebContents : [],
                gikMarContent: { 
                },
                gikMarContents : [],
                gikAprContent: { 
                },
                gikAprContents : [],
                gikMayContent: { 
                },
                gikMayContents : [],
                gikJunContent: { 
                },
                gikJunContents : [],
                gikJulContent: { 
                },
                gikJulContents : [],
                gikAugContent: { 
                },
                gikAugContents : [],
                gikSepContent: { 
                },
                gikSepContents : [],
                gikOctContent: { 
                },
                gikOctContents : [],
                gikNovContent: { 
                },
                gikNovContents : [],
                gikDecContent: { 
                },
                gikDecContents : [],

                socialHarvestJanContent: {              
                },
                socialHarvestJanContents : [],
                socialHarvestFebContent: { 
                },
                socialHarvestFebContents : [],
                socialHarvestMarContent: { 
                },
                socialHarvestMarContents : [],
                socialHarvestAprContent: { 
                },
                socialHarvestAprContents : [],
                socialHarvestMayContent: { 
                },
                socialHarvestMayContents : [],
                socialHarvestJunContent: { 
                },
                socialHarvestJunContents : [],
                socialHarvestJulContent: { 
                },
                socialHarvestJulContents : [],
                socialHarvestAugContent: { 
                },
                socialHarvestAugContents : [],
                socialHarvestSepContent: { 
                },
                socialHarvestSepContents : [],
                socialHarvestOctContent: { 
                },
                socialHarvestOctContents : [],
                socialHarvestNovContent: { 
                },
                socialHarvestNovContents : [],
                socialHarvestDecContent: { 
                },
                socialHarvestDecContents : [],

                marketMobileJanContent: {                
                },
                marketMobileJanContents : [],
                marketMobileFebContent: { 
                },
                marketMobileFebContents : [],
                marketMobileMarContent: { 
                },
                marketMobileMarContents : [],
                marketMobileAprContent: { 
                },
                marketMobileAprContents : [],
                marketMobileMayContent: { 
                },
                marketMobileMayContents : [],
                marketMobileJunContent: { 
                },
                marketMobileJunContents : [],
                marketMobileJulContent: { 
                },
                marketMobileJulContents : [],
                marketMobileAugContent: { 
                },
                marketMobileAugContents : [],
                marketMobileSepContent: { 
                },
                marketMobileSepContents : [],
                marketMobileOctContent: { 
                },
                marketMobileOctContents : [],
                marketMobileNovContent: { 
                },
                marketMobileNovContents : [],
                marketMobileDecContent: { 
                },
                marketMobileDecContents : [],
                
                gfbJanContent: {                
                },
                gfbJanContents : [],
                gfbFebContent: { 
                },
                gfbFebContents : [],
                gfbMarContent: { 
                },
                gfbMarContents : [],
                gfbAprContent: { 
                },
                gfbAprContents : [],
                gfbMayContent: { 
                },
                gfbMayContents : [],
                gfbJunContent: { 
                },
                gfbJunContents : [],
                gfbJulContent: { 
                },
                gfbJulContents : [],
                gfbAugContent: { 
                },
                gfbAugContents : [],
                gfbSepContent: { 
                },
                gfbSepContents : [],
                gfbOctContent: { 
                },
                gfbOctContents : [],
                gfbNovContent: { 
                },
                gfbNovContents : [],
                gfbDecContent: { 
                },
                gfbDecContents : [],
                overbrookSPJanContent: {                
                },
                overbrookSPJanContents : [],
                overbrookSPFebContent: { 
                },
                overbrookSPFebContents : [],
                overbrookSPMarContent: { 
                },
                overbrookSPMarContents : [],
                overbrookSPAprContent: { 
                },
                overbrookSPAprContents : [],
                overbrookSPMayContent: { 
                },
                overbrookSPMayContents : [],
                overbrookSPJunContent: { 
                },
                overbrookSPJunContents : [],
                overbrookSPJulContent: { 
                },
                overbrookSPJulContents : [],
                overbrookSPAugContent: { 
                },
                overbrookSPAugContents : [],
                overbrookSPSepContent: { 
                },
                overbrookSPSepContents : [],
                overbrookSPOctContent: { 
                },
                overbrookSPOctContents : [],
                overbrookSPNovContent: { 
                },
                overbrookSPNovContents : [],
                overbrookSPDecContent: { 
                },
                overbrookSPDecContents : [],

                pinsJanContent: {                
                },
                pinsJanContents : [],
                pinsFebContent: { 
                },
                pinsFebContents : [],
                pinsMarContent: { 
                },
                pinsMarContents : [],
                pinsAprContent: { 
                },
                pinsAprContents : [],
                pinsMayContent: { 
                },
                pinsMayContents : [],
                pinsJunContent: { 
                },
                pinsJunContents : [],
                pinsJulContent: { 
                },
                pinsJulContents : [],
                pinsAugContent: { 
                },
                pinsAugContents : [],
                pinsSepContent: { 
                },
                pinsSepContents : [],
                pinsOctContent: { 
                },
                pinsOctContents : [],
                pinsNovContent: { 
                },
                pinsNovContents : [],
                pinsDecContent: { 
                },
                pinsDecContents : [],

                youthPREducationJanContent: {                
                },
                youthPREducationJanContents : [],
                youthPREducationFebContent: { 
                },
                youthPREducationFebContents : [],
                youthPREducationMarContent: { 
                },
                youthPREducationMarContents : [],
                youthPREducationAprContent: { 
                },
                youthPREducationAprContents : [],
                youthPREducationMayContent: { 
                },
                youthPREducationMayContents : [],
                youthPREducationJunContent: { 
                },
                youthPREducationJunContents : [],
                youthPREducationJulContent: { 
                },
                youthPREducationJulContents : [],
                youthPREducationAugContent: { 
                },
                youthPREducationAugContents : [],
                youthPREducationSepContent: { 
                },
                youthPREducationSepContents : [],
                youthPREducationOctContent: { 
                },
                youthPREducationOctContents : [],
                youthPREducationNovContent: { 
                },
                youthPREducationNovContents : [],
                youthPREducationDecContent: { 
                },
                youthPREducationDecContents : [],

                youthPRSportJanContent: {
                },
                youthPRSportJanContents : [],
                youthPRSportFebContent: { 
                },
                youthPRSportFebContents : [],
                youthPRSportMarContent: { 
                },
                youthPRSportMarContents : [],
                youthPRSportAprContent: { 
                },
                youthPRSportAprContents : [],
                youthPRSportMayContent: { 
                },
                youthPRSportMayContents : [],
                youthPRSportJunContent: { 
                },
                youthPRSportJunContents : [],
                youthPRSportJulContent: { 
                },
                youthPRSportJulContents : [],
                youthPRSportAugContent: { 
                },
                youthPRSportAugContents : [],
                youthPRSportSepContent: { 
                },
                youthPRSportSepContents : [],
                youthPRSportOctContent: { 
                },
                youthPRSportOctContents : [],
                youthPRSportNovContent: { 
                },
                youthPRSportNovContents : [],
                youthPRSportDecContent: { 
                },
                youthPRSportDecContents : [],

                youthPRViolinJanContent: {                
                },
                youthPRViolinJanContents : [],
                youthPRViolinFebContent: { 
                },
                youthPRViolinFebContents : [],
                youthPRViolinMarContent: { 
                },
                youthPRViolinMarContents : [],
                youthPRViolinAprContent: { 
                },
                youthPRViolinAprContents : [],
                youthPRViolinMayContent: { 
                },
                youthPRViolinMayContents : [],
                youthPRViolinJunContent: { 
                },
                youthPRViolinJunContents : [],
                youthPRViolinJulContent: { 
                },
                youthPRViolinJulContents : [],
                youthPRViolinAugContent: { 
                },
                youthPRViolinAugContents : [],
                youthPRViolinSepContent: { 
                },
                youthPRViolinSepContents : [],
                youthPRViolinOctContent: { 
                },
                youthPRViolinOctContents : [],
                youthPRViolinNovContent: { 
                },
                youthPRViolinNovContents : [],
                youthPRViolinDecContent: { 
                },
                youthPRViolinDecContents : [],

                yesICanJanContent: {                
                },
                yesICanJanContents : [],
                yesICanFebContent: { 
                },
                yesICanFebContents : [],
                yesICanMarContent: { 
                },
                yesICanMarContents : [],
                yesICanAprContent: { 
                },
                yesICanAprContents : [],
                yesICanMayContent: { 
                },
                yesICanMayContents : [],
                yesICanJunContent: { 
                },
                yesICanJunContents : [],
                yesICanJulContent: { 
                },
                yesICanJulContents : [],
                yesICanAugContent: { 
                },
                yesICanAugContents : [],
                yesICanSepContent: { 
                },
                yesICanSepContents : [],
                yesICanOctContent: { 
                },
                yesICanOctContents : [],
                yesICanNovContent: { 
                },
                yesICanNovContents : [],
                yesICanDecContent: { 
                },
                yesICanDecContents : [],

          }
        },
        computed: {
            overallFebGaugeOptions() {
            return {
              tooltip: {
                  formatter: '{a} {b} : {c}%'
              },
              series: [
                  {
                      type: 'gauge',
                      name: "Overall Performance",
                      detail: {formatter: '{value}%'},
                      data: [{value: this.generalDashboardJanContents.mainOverallPerformance}],
                      min: 0,
                      max: 200,
                      radius: '100%',
                      axisLine: {
                          show: true,
                          lineStyle: {
                              color: [[0.20, '#b71c1c'], [0.30, '#f57c00'], [0.45, '#fdd835'], [0.60, '#2e7d32'], [1, '#2196f3']],
                              width: 30
                          },
                      },

                  }
              ]
            }
            },
            budgetFebGaugeOptions() {
             return {
              tooltip: {
                  formatter: '{a} {b} : {c}%'
              },
              series: [
                  {
                      type: 'gauge',
                      name: "Budget Usage",
                      detail: {formatter: '{value}%'},
                      data: [{value: this.generalDashboardFebContents.budgetUsage}],
                      min: 200,
                      max: 0,
                      radius: '100%',
                      axisLine: {
                          show: true,
                          lineStyle: {
                              color: [[0.30, '#c10015'], [0.50, '#f57c00'], [0.80, '#2e7d32'], [1, '#2196f3']],
                              width: 30
                          },
                      },
                  }
              ]
             }
            },
            expensesFebCumulativePieOptions() {
                return {
                    tooltip: {
                        show: true,
                        formatter: '{a} <br/>{b}: {c} $ ({d}%)'
                    },
                    legend: {
                        orient: 'vertical',
                        bottom: 0,
                        width: 600,
                        left:0,
                        textStyle: {
                            color: this.$q.dark.isActive ? 'white' : '#676767'
                        }
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
                                {value: this.generalDashboardFebContents.cumulativeexpAdmin, name: 'Admin', selected: false},
                                {value: this.generalDashboardFebContents.cumulativeexpPRfftnc, name: 'PR / FFTNC', selected: false},
                                {value: this.generalDashboardFebContents.cumulativeexpIncubator, name: 'Incubator', selected: false},
                                {value: this.generalDashboardFebContents.cumulativeexpAP, name: 'A-P', selected: false},
                                {value: this.generalDashboardFebContents.cumulativeexpGFB, name: 'GFB', selected: false},
                                {value: this.generalDashboardFebContents.cumulativeexpGIK, name: 'GIK', selected: false},
                                {value: this.generalDashboardFebContents.cumulativeexpSH, name: 'SH', selected: false},
                                {value: this.generalDashboardFebContents.cumulativeexpCYFlactation, name: 'CYF / Lactation', selected: false},
                                {value: this.generalDashboardFebContents.cumulativeexpCPO, name: 'CPO', selected: false},
                                {value: this.generalDashboardFebContents.cumulativeexpSeniorsProject, name: 'Seniors Project', selected: false},
                                {value: this.generalDashboardFebContents.cumulativeexpCSDmcConnell, name: 'CSD / McConnell', selected: false},
                                {value: this.generalDashboardFebContents.cumulativeexpOthers, name: 'Others', selected: false}
                            ]
                        }
                    ]
                }
            },
            expensesFebMonthlyPieOptions() {
                return {
                    tooltip: {
                        show: true,
                        formatter: '{a} <br/>{b}: {c} & ({d}%)'
                    },
                    legend: {
                        orient: 'vertical',
                        bottom: 0,
                        width: 600,
                        left:0,
                        textStyle: {
                            color: this.$q.dark.isActive ? 'white' : '#676767'
                        }
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
                                {value: this.generalDashboardFebContents.expAdmin, name: 'Admin', selected: false},
                                {value: this.generalDashboardFebContents.expPRfftnc, name: 'PR / FFTNC', selected: false},
                                {value: this.generalDashboardFebContents.expIncubator, name: 'Incubator', selected: false},
                                {value: this.generalDashboardFebContents.expAP, name: 'A-P', selected: false},
                                {value: this.generalDashboardFebContents.expGFB, name: 'GFB', selected: false},
                                {value: this.generalDashboardFebContents.expGIK, name: 'GIK', selected: false},
                                {value: this.generalDashboardFebContents.expSH, name: 'SH', selected: false},
                                {value: this.generalDashboardFebContents.expCYFlactation, name: 'CYF / Lactation', selected: false},
                                {value: this.generalDashboardFebContents.expCPO, name: 'CPO', selected: false},
                                {value: this.generalDashboardFebContents.expSeniorsProject, name: 'Seniors Project', selected: false},
                                {value: this.generalDashboardFebContents.expCSDmcConnell, name: 'CSD / McConnell', selected: false},
                                {value: this.generalDashboardFebContents.expOthers, name: 'Others', selected: false}
                            ]
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
                            {time_period: 'January', expenses: this.generalDashboardJanContents.expenses, revenues: this.generalDashboardJanContents.revenues},
                            {time_period: 'February', expenses: this.generalDashboardFebContents.expenses, revenues: this.generalDashboardFebContents.revenues},
                            {time_period: 'March', expenses: this.generalDashboardMarContents.expenses, revenues: this.generalDashboardMarContents.revenues},
                            {time_period: 'April', expenses: this.generalDashboardAprContents.expenses, revenues: this.generalDashboardAprContents.revenues},
                            {time_period: 'May', expenses: this.generalDashboardMayContents.expenses, revenues: this.generalDashboardMayContents.revenues},
                            {time_period: 'June', expenses: this.generalDashboardJunContents.expenses, revenues: this.generalDashboardJunContents.revenues},
                            {time_period: 'July', expenses: this.generalDashboardJulContents.expenses, revenues: this.generalDashboardJulContents.revenues},
                            {time_period: 'August', expenses: this.generalDashboardAugContents.expenses, revenues: this.generalDashboardAugContents.revenues},
                            {time_period: 'September', expenses: this.generalDashboardSepContents.expenses, revenues: this.generalDashboardSepContents.revenues},
                            {time_period: 'October', expenses: this.generalDashboardOctContents.expenses, revenues: this.generalDashboardOctContents.revenues},
                            {time_period: 'November', expenses: this.generalDashboardNovContents.expenses, revenues: this.generalDashboardNovContents.revenues},
                            {time_period: 'December', expenses: this.generalDashboardDecContents.expenses, revenues: this.generalDashboardDecContents.revenues}
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
        },
        methods: {
            
          readData(){
            var foodbankOP, babyCupboardOP, gikOP, charity13OP, entrepreneurshipOP, employmentSkillsOP, socialHarvestOP, marketMobileOP, clothespinOP, gfbOP, overbrookSPOP, collectiveKitchenOP, communityMealsOP, pinsOP, yesICanOP, crisisInterventionOP, youthPREducationOP, youthPRSportOP, youthPRViolinOP, communityDevelopmentOP;
            /********************************************************GENERAL DASHBOARD */
            //    GENERAL DASHBOARD | JANUARY
            var docgeneralDashboardJanRef = db.collection("generalDashboard").doc("january");

            docgeneralDashboardJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.generalDashboardJanContents = doc.data();
                    this.totalExpenseJan();
                    
                    
                    
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    GENERAL DASHBOARD | FEBRUARY
            var docgeneralDashboardFebRef = db.collection("generalDashboard").doc("february");

            docgeneralDashboardFebRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.generalDashboardFebContents = doc.data();
                    this.totalExpenseFeb();
                    this.cumulativeBudgetUsageFeb();
                    this.totalCumulativeExpenseFeb();

                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            /********************************************************FOODBANK */
            //    FOODBANK | JANUARY
            var docfoodbankJanRef = db.collection("foodbank").doc("january");

            docfoodbankJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.foodbankJanContents = doc.data();
                      
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    FOODBANK | FEBRUARY
            var docfoodbankFebRef = db.collection("foodbank").doc("february");

            docfoodbankFebRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.foodbankFebContents = doc.data();
                    this.foodbankFebOverallPerformance();
                    var foodbankOP = this.foodbankFebContents.overallPerformance;
                    console.log("hasan" + foodbankOP);
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });

            /********************************************************BABY CUPBOARD */
            //    BABY CUPBOARD | JANUARY
            var docbabyCupboardJanRef = db.collection("babyCupboard").doc("january");

            docbabyCupboardJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.babyCupboardJanContents = doc.data();
                    
                      
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });

            //    BABY CUPBOARD | FEBRUARY
            var docbabyCupboardFebRef = db.collection("babyCupboard").doc("february");

            docbabyCupboardFebRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.babyCupboardFebContents = doc.data();
                    this.babyCupboardFebOverallPerformance();
                      
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });

            /********************************************************GIFTS IN KIND */
            //    GIFTS IN KIND | JANUARY
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
            //    GIFTS IN KIND | FEBRUARY
            var docgikFebRef = db.collection("gik").doc("february");

            docgikFebRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.gikFebContents = doc.data();
                    this.gikFebOverallPerformance();

                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });

            /********************************************************charITy13 */
            //    charITy13 | JANUARY
            var docCharity13JanRef = db.collection("charity13").doc("january");

            docCharity13JanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.charity13JanContents = doc.data();
                    
   
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });

            //    charITy13 | FEBRUARY
            var docCharity13FebRef = db.collection("charity13").doc("february");

            docCharity13FebRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.charity13FebContents = doc.data();
                    this.charity13FebOverallPerformance();
   
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            

            /********************************************************ENTREPRENEURSHIP */
            //    ENTREPRENEURSHIP | JANUARY
            var docentrepreneurshipJanRef = db.collection("entrepreneurship").doc("january");

            docentrepreneurshipJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.entrepreneurshipJanContents = doc.data();
                    

                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    ENTREPRENEURSHIP | FEBRUARY
            var docentrepreneurshipFebRef = db.collection("entrepreneurship").doc("february");

            docentrepreneurshipFebRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.entrepreneurshipFebContents = doc.data();
                    this.entrepreneurshipFebOverallPerformance();

                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });


            /********************************************************EMPLOYEMENT SKILLS */
            //    EMPLOYEMENT SKILLS | JANUARY
            var docemploymentSkillsJanRef = db.collection("employmentSkills").doc("january");

            docemploymentSkillsJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.employmentSkillsJanContents = doc.data();
                    
 
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            }); 
            //    EMPLOYEMENT SKILLS | FEBRUARY
            var docemploymentSkillsFebRef = db.collection("employmentSkills").doc("february");

            docemploymentSkillsFebRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.employmentSkillsFebContents = doc.data();
                    this.employmentSkillsFebOverallPerformance();
 
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
 
            /********************************************************SOCIAL HARVEST */
            //    SOCIAL HARVEST | JANUARY
            var docsocialHarvestJanRef = db.collection("socialHarvest").doc("january");

            docsocialHarvestJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.socialHarvestJanContents = doc.data();
                    
 
                      
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    SOCIAL HARVEST | FEBRUARY
            var docsocialHarvestFebRef = db.collection("socialHarvest").doc("february");

            docsocialHarvestFebRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.socialHarvestFebContents = doc.data();
                    this.socialHarvestFebOverallPerformance();
 
                      
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });

            /********************************************************MARKET MOBILE */
            //    MARKET MOBILE | JANUARY
            var docmarketMobileJanRef = db.collection("marketMobile").doc("january");

            docmarketMobileJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.marketMobileJanContents = doc.data();
                    
 
                      
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    MARKET MOBILE | FEBRUARY
            var docmarketMobileFebRef = db.collection("marketMobile").doc("february");

            docmarketMobileFebRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.marketMobileFebContents = doc.data();
                    this.marketMobileFebOverallPerformance();
 
                      
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            

            /********************************************************CLOTHESPIN */
             //    CLOTHESPIN | JANUARY
            var docclothespinJanRef = db.collection("clothespin").doc("january");

            docclothespinJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.clothespinJanContents = doc.data();
                    
 
                      
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
             //    CLOTHESPIN | FEBRUARY
            var docclothespinFebRef = db.collection("clothespin").doc("february");

            docclothespinFebRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.clothespinFebContents = doc.data();
                    this.clothespinFebOverallPerformance();
 
                      
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });

            /********************************************************GOOD FOOD BOX */
            //    GOOD FOOD BOX | JANUARY
            var docgfbJanRef = db.collection("gfb").doc("january");

            docgfbJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.gfbJanContents = doc.data();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    GOOD FOOD BOX | FEBRUARY
            var docgfbFebRef = db.collection("gfb").doc("february");

            docgfbFebRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.gfbFebContents = doc.data();
                    this.gfbFebOverallPerformance();
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });

            /********************************************************Overbrook SP */
            //    Overbrook SP | JANUARY
            var docoverbrookSPJanRef = db.collection("overbrookSP").doc("january");

            docoverbrookSPJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.overbrookSPJanContents = doc.data();
                    
 
                      
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    Overbrook SP | FEBRUARY
            var docoverbrookSPFebRef = db.collection("overbrookSP").doc("february");

            docoverbrookSPFebRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.overbrookSPFebContents = doc.data();
                    this.overbrookSPFebOverallPerformance();
 
                      
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });

 
            /********************************************************COLLECTIVE KITCHEN */
            //    COLLECTIVE KITCHEN | JANUARY
            var doccollectiveKitchenJanRef = db.collection("collectiveKitchen").doc("january");

            doccollectiveKitchenJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.collectiveKitchenJanContents = doc.data();
                    
                      
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    COLLECTIVE KITCHEN | FEBRUARY
            var doccollectiveKitchenFebRef = db.collection("collectiveKitchen").doc("february");

            doccollectiveKitchenFebRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.collectiveKitchenFebContents = doc.data();
                    this.collectiveKitchenFebOverallPerformance(); 
                    
                      
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
        

            /********************************************************COMMUNITY MEALS */
           //    COMMUNITY MEALS | JANUARY
            var doccommunityMealsJanRef = db.collection("communityMeals").doc("january");

            doccommunityMealsJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.communityMealsJanContents = doc.data();
                    
 
                      
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
           //    COMMUNITY MEALS | FEBRUARY
            var doccommunityMealsFebRef = db.collection("communityMeals").doc("february");

            doccommunityMealsFebRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.communityMealsFebContents = doc.data();
                    this.communityMealsFebOverallPerformance();
 
                      
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });

            /********************************************************PINS */
            //    PINS | JANUARY
            var docpinsJanRef = db.collection("pins").doc("january");

            docpinsJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.pinsJanContents = doc.data();
                    
 
                      
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });

            //    PINS | FEBRUARY
            var docpinsFebRef = db.collection("pins").doc("february");

            docpinsFebRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.pinsFebContents = doc.data();
                    this.pinsFebOverallPerformance();
 
                      
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });

            /********************************************************Yes I Can */
            //    Yes I Can | JANUARY
            var docyesICanJanRef = db.collection("yesICan").doc("january");

            docyesICanJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.yesICanJanContents = doc.data();
                    
 
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    Yes I Can | FEBRUARY
            var docyesICanFebRef = db.collection("yesICan").doc("february");

            docyesICanFebRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.yesICanFebContents = doc.data();
                    this.yesICanFebOverallPerformance();
 
                      
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });

            /********************************************************CRISIS INTERVENTION */
            //    CRISIS INTERVENTION | JANUARY
            var doccrisisInterventionJanRef = db.collection("crisisIntervention").doc("january");

            doccrisisInterventionJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.crisisInterventionJanContents = doc.data();
                    
 
                      
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });

            //    CRISIS INTERVENTION | FEBRUARY
            var doccrisisInterventionFebRef = db.collection("crisisIntervention").doc("february");

            doccrisisInterventionFebRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.crisisInterventionFebContents = doc.data();
                    this.crisisInterventionFebOverallPerformance();
 
                      
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });


            /********************************************************YouthPR Education */
            //    YouthPR Education | JANUARY
            var docyouthPREducationJanRef = db.collection("youthPREducation").doc("january");

            docyouthPREducationJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.youthPREducationJanContents = doc.data();
                    
 
                      
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    YouthPR Education | FEBRUARY
            var docyouthPREducationFebRef = db.collection("youthPREducation").doc("february");

            docyouthPREducationFebRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.youthPREducationFebContents = doc.data();
                    this.youthPREducationFebOverallPerformance();
 
                      
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });

            /********************************************************YouthPR Sport */
            //    YouthPR Sport | JANUARY
            var docyouthPRSportJanRef = db.collection("youthPRSport").doc("january");

            docyouthPRSportJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.youthPRSportJanContents = doc.data();
                    
 
                      
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    YouthPR Sport | FEBRUARY
            var docyouthPRSportFebRef = db.collection("youthPRSport").doc("february");

            docyouthPRSportFebRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.youthPRSportFebContents = doc.data();
                    this.youthPRSportFebOverallPerformance();
 
                      
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });

            /********************************************************YouthPR Violin */
            //    YouthPR Violin | JANUARY
            var docyouthPRViolinJanRef = db.collection("youthPRViolin").doc("january");

            docyouthPRViolinJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.youthPRViolinJanContents = doc.data();
                    
 
                      
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    YouthPR Violin | FEBRUARY
            var docyouthPRViolinFebRef = db.collection("youthPRViolin").doc("february");

            docyouthPRViolinFebRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.youthPRViolinFebContents = doc.data();
                    this.youthPRViolinFebOverallPerformance();
 
                      
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });

            /********************************************************COMMUNITY DEVELOPMENT */
            //    COMMUNITY DEVELOPMENT | JANUARY
            var doccommunityDevelopmentJanRef = db.collection("communityDevelopment").doc("january");

            doccommunityDevelopmentJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.communityDevelopmentJanContents = doc.data();
                    
 
                      
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    COMMUNITY DEVELOPMENT | FEBRUARY
            var doccommunityDevelopmentFebRef = db.collection("communityDevelopment").doc("february");

            doccommunityDevelopmentFebRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.communityDevelopmentFebContents = doc.data();
                    this.communityDevelopmentFebOverallPerformance();
 
                      
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            this.generalJanOverallPerformance();
            
            

            },
            gikFebOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = ((getRealValue(this.gikFebContents.kpi1)*2) + getRealValue(this.gikFebContents.kpi2) + getRealValue(this.gikFebContents.kpi3) + (getRealValue(this.gikFebContents.kpi4)*2))/6;
            this.gikFebContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 29.5 * 100;
            console.log("GIK Overall performance = " + this.gikFebContents.overallPerformance); 
            oguz = this.gikFebContents.overallPerformance;
            return this.gikFebContents.overallPerformance;
            },
            foodbankFebOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = ((getRealValue(this.foodbankFebContents.kpi1)*2) + getRealValue(this.foodbankFebContents.kpi2) + getRealValue(this.foodbankFebContents.kpi3) + (getRealValue(this.foodbankFebContents.kpi4)*2) + getRealValue(this.foodbankFebContents.kpi5) + getRealValue(this.foodbankFebContents.kpi6))/8;
            this.foodbankFebContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 287.09375 * 100;
            console.log("Foodbank Overall performance = " + this.foodbankFebContents.overallPerformance); 
            return this.foodbankFebContents.overallPerformance;
            },
            babyCupboardFebOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = ((getRealValue(this.babyCupboardFebContents.kpi1)*2) + getRealValue(this.babyCupboardFebContents.kpi2) + getRealValue(this.babyCupboardFebContents.kpi3) + (getRealValue(this.babyCupboardFebContents.kpi4)*2))/6;
            this.babyCupboardFebContents.overallPerformance = (getRealValue(baseOverallPerformanceGIK) / 38.125) * 100;
            console.log("Baby Cupboard Overall performance = " + this.babyCupboardFebContents.overallPerformance); 
            return this.babyCupboardFebContents.overallPerformance;
            },
            charity13FebOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = ((getRealValue(this.charity13FebContents.kpi1)*2) + getRealValue(this.charity13FebContents.kpi2) + getRealValue(this.charity13FebContents.kpi3) + getRealValue(this.charity13FebContents.kpi4) + (getRealValue(this.charity13FebContents.kpi5)*2))/7;
            this.charity13FebContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 2.19047619 * 100;
            console.log("charITy13 Overall performance = " + this.charity13FebContents.overallPerformance); 
            return this.charity13FebContents.overallPerformance;
            },
            entrepreneurshipFebOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.entrepreneurshipFebContents.kpi1) + getRealValue(this.entrepreneurshipFebContents.kpi2) + getRealValue(this.entrepreneurshipFebContents.kpi3) + getRealValue(this.entrepreneurshipFebContents.kpi4))/4;
            this.entrepreneurshipFebContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 1217.967792 * 100;
            console.log("entrepreneurship Overall performance = " + this.entrepreneurshipFebContents.overallPerformance); 
            return this.entrepreneurshipFebContents.overallPerformance;
            },
            employmentSkillsFebOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.employmentSkillsFebContents.kpi1) + getRealValue(this.employmentSkillsFebContents.kpi2) + getRealValue(this.employmentSkillsFebContents.kpi3) + getRealValue(this.employmentSkillsFebContents.kpi4))/4;
            this.employmentSkillsFebContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 45.83333333 * 100;
            console.log("employmentSkills Overall performance = " + this.employmentSkillsFebContents.overallPerformance); 
            return this.employmentSkillsFebContents.overallPerformance;
            },
            socialHarvestFebOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.socialHarvestFebContents.kpi1) + getRealValue(this.socialHarvestFebContents.kpi2) + getRealValue(this.socialHarvestFebContents.kpi3) + getRealValue(this.socialHarvestFebContents.kpi4) + getRealValue(this.socialHarvestFebContents.kpi5))/5;
            this.socialHarvestFebContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 29.7409 * 100;
            console.log("socialHarvest Overall performance = " + this.socialHarvestFebContents.overallPerformance); 
            return this.socialHarvestFebContents.overallPerformance;
            },
            marketMobileFebOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.marketMobileFebContents.kpi1) + getRealValue(this.marketMobileFebContents.kpi2) + (getRealValue(this.marketMobileFebContents.kpi3)*2) + (getRealValue(this.marketMobileFebContents.kpi4)*2))/6;
            this.marketMobileFebContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 149.9444444 * 100;
            console.log("marketMobile Overall performance = " + this.marketMobileFebContents.overallPerformance); 
            return this.marketMobileFebContents.overallPerformance;
            },
            clothespinFebOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.clothespinFebContents.kpi1) + getRealValue(this.clothespinFebContents.kpi2) + getRealValue(this.clothespinFebContents.kpi3))/3;
            this.clothespinFebContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 144 * 100;
            console.log("clothespin Overall performance = " + this.clothespinFebContents.overallPerformance); 
            return this.clothespinFebContents.overallPerformance;
            },
            gfbFebOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.gfbFebContents.kpi1) + getRealValue(this.gfbFebContents.kpi2) + getRealValue(this.gfbFebContents.kpi3))/3;
            this.gfbFebContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 274.1111111 * 100;
            console.log("gfb Overall performance = " + this.gfbFebContents.overallPerformance); 
            return this.gfbFebContents.overallPerformance;
            },
            overbrookSPFebOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.overbrookSPFebContents.kpi1) + getRealValue(this.overbrookSPFebContents.kpi2))/2;
            this.overbrookSPFebContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 101.75 * 100;
            console.log("overbrookSP Overall performance = " + this.overbrookSPFebContents.overallPerformance); 
            return this.overbrookSPFebContents.overallPerformance;
            },
            collectiveKitchenFebOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.collectiveKitchenFebContents.kpi1) + getRealValue(this.collectiveKitchenFebContents.kpi2) + getRealValue(this.collectiveKitchenFebContents.kpi3) + getRealValue(this.collectiveKitchenFebContents.kpi4))/4;
            this.collectiveKitchenFebContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 5.75 * 100;
            console.log("collectiveKitchen Overall performance = " + this.collectiveKitchenFebContents.overallPerformance); 
            return this.collectiveKitchenFebContents.overallPerformance;
            },
            communityMealsFebOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.communityMealsFebContents.kpi1) + getRealValue(this.communityMealsFebContents.kpi2) + getRealValue(this.communityMealsFebContents.kpi3) + (getRealValue(this.communityMealsFebContents.kpi4)*2))/5;
            this.communityMealsFebContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 290.2666667 * 100;
            console.log("communityMeals Overall performance = " + this.communityMealsFebContents.overallPerformance); 
            return this.communityMealsFebContents.overallPerformance;
            },
            pinsFebOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.pinsFebContents.kpi1) + getRealValue(this.pinsFebContents.kpi2) + getRealValue(this.pinsFebContents.kpi3))/3;
            this.pinsFebContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 10.33333333 * 100;
            console.log("pins Overall performance = " + this.pinsFebContents.overallPerformance); 
            return this.pinsFebContents.overallPerformance;
            },
            youthPREducationFebOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.youthPREducationFebContents.kpi1) + getRealValue(this.youthPREducationFebContents.kpi2) + getRealValue(this.youthPREducationFebContents.kpi3) + getRealValue(this.youthPREducationFebContents.kpi4) + (getRealValue(this.youthPREducationFebContents.kpi5)*2))/6;
            this.youthPREducationFebContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 13 * 100;
            console.log("youthPREducation Overall performance = " + this.youthPREducationFebContents.overallPerformance); 
            return this.youthPREducationFebContents.overallPerformance;
            },
            youthPRSportFebOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.youthPRSportFebContents.kpi1) + getRealValue(this.youthPRSportFebContents.kpi2) + getRealValue(this.youthPRSportFebContents.kpi3) + getRealValue(this.youthPRSportFebContents.kpi4) + (getRealValue(this.youthPRSportFebContents.kpi5)*2))/6;
            this.youthPRSportFebContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 1.5 * 100;
            console.log("youthPRSport Overall performance = " + this.youthPRSportFebContents.overallPerformance); 
            return this.youthPRSportFebContents.overallPerformance;
            },
            youthPRViolinFebOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.youthPRViolinFebContents.kpi1) + getRealValue(this.youthPRViolinFebContents.kpi2) + getRealValue(this.youthPRViolinFebContents.kpi3) + getRealValue(this.youthPRViolinFebContents.kpi4) + (getRealValue(this.youthPRViolinFebContents.kpi5)*2))/6;
            this.youthPRViolinFebContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 5.388888889 * 100;
            console.log("youthPRViolin Overall performance = " + this.youthPRViolinFebContents.overallPerformance); 
            return this.youthPRViolinFebContents.overallPerformance;
            },
            yesICanFebOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.yesICanFebContents.kpi1) + getRealValue(this.yesICanFebContents.kpi2) + getRealValue(this.yesICanFebContents.kpi3))/3;
            this.yesICanFebContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 11.33333333 * 100;
            console.log("yesICan Overall performance = " + this.yesICanFebContents.overallPerformance); 
            return this.yesICanFebContents.overallPerformance;
            },
            crisisInterventionFebOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.crisisInterventionFebContents.kpi1) + getRealValue(this.crisisInterventionFebContents.kpi2))/2;
            this.crisisInterventionFebContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 104 * 100;
            console.log("crisisIntervention Overall performance = " + this.crisisInterventionFebContents.overallPerformance); 
            return this.crisisInterventionFebContents.overallPerformance;
            },
            communityDevelopmentFebOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.communityDevelopmentFebContents.kpi1) + getRealValue(this.communityDevelopmentFebContents.kpi2) + getRealValue(this.communityDevelopmentFebContents.kpi3))/3;
            this.communityDevelopmentFebContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 77.22222222 * 100;
            console.log("communityDevelopment Overall performance = " + this.communityDevelopmentFebContents.overallPerformance); 
            return this.communityDevelopmentFebContents.overallPerformance;
            },
            totalExpenseJan(){
              const getRealValue = (val) => +val || val;
              return this.generalDashboardJanContents.expenses = getRealValue(this.generalDashboardJanContents.expAdmin) + 
              getRealValue(this.generalDashboardJanContents.expPRfftnc) + getRealValue(this.generalDashboardJanContents.expIncubator) + 
              getRealValue(this.generalDashboardJanContents.expAP) + getRealValue(this.generalDashboardJanContents.expGFB) + 
              getRealValue(this.generalDashboardJanContents.expGIK) + getRealValue(this.generalDashboardJanContents.expSH) + 
              getRealValue(this.generalDashboardJanContents.expCYFlactation) + getRealValue(this.generalDashboardJanContents.expCPO) + 
              getRealValue(this.generalDashboardJanContents.expSeniorsProject) + getRealValue(this.generalDashboardJanContents.expCSDmcConnell) + 
              getRealValue(this.generalDashboardJanContents.expOthers)
            },
            totalExpenseFeb(){
            const getRealValue = (val) => +val || val;
            return this.generalDashboardFebContents.expenses = getRealValue(this.generalDashboardFebContents.expAdmin) + 
            getRealValue(this.generalDashboardFebContents.expPRfftnc) + getRealValue(this.generalDashboardFebContents.expIncubator) + 
            getRealValue(this.generalDashboardFebContents.expAP) + getRealValue(this.generalDashboardFebContents.expGFB) + 
            getRealValue(this.generalDashboardFebContents.expGIK) + getRealValue(this.generalDashboardFebContents.expSH) + 
            getRealValue(this.generalDashboardFebContents.expCYFlactation) + getRealValue(this.generalDashboardFebContents.expCPO) + 
            getRealValue(this.generalDashboardFebContents.expSeniorsProject) + getRealValue(this.generalDashboardFebContents.expCSDmcConnell) + 
            getRealValue(this.generalDashboardFebContents.expOthers)
            },
            cumulativeBudgetUsageFeb(){
            const getRealValue = (val) => +val || val;
            return this.generalDashboardFebContents.budgetUsage = (((getRealValue(this.generalDashboardJanContents.expenses) + getRealValue(this.generalDashboardFebContents.expenses)) / getRealValue(this.generalDashboardFebContents.actualBudget))*100).toFixed(2)
            },
            totalCumulativeExpenseFeb(){
            const getRealValue = (val) => +val || val;
            this.generalDashboardFebContents.cumulativeexpAdmin = (getRealValue(this.generalDashboardJanContents.expAdmin) + getRealValue(this.generalDashboardFebContents.expAdmin)).toFixed(2)
            this.generalDashboardFebContents.cumulativeexpPRfftnc = (getRealValue(this.generalDashboardJanContents.expPRfftnc) + getRealValue(this.generalDashboardFebContents.expPRfftnc)).toFixed(2)
            this.generalDashboardFebContents.cumulativeexpIncubator = (getRealValue(this.generalDashboardJanContents.expIncubator) + getRealValue(this.generalDashboardFebContents.expIncubator)).toFixed(2)
            this.generalDashboardFebContents.cumulativeexpAP = (getRealValue(this.generalDashboardJanContents.expAP) + getRealValue(this.generalDashboardFebContents.expAP)).toFixed(2)
            this.generalDashboardFebContents.cumulativeexpGFB = (getRealValue(this.generalDashboardJanContents.expGFB) + getRealValue(this.generalDashboardFebContents.expGFB)).toFixed(2)
            this.generalDashboardFebContents.cumulativeexpGIK = (getRealValue(this.generalDashboardJanContents.expGIK) + getRealValue(this.generalDashboardFebContents.expGIK)).toFixed(2)
            this.generalDashboardFebContents.cumulativeexpSH = (getRealValue(this.generalDashboardJanContents.expSH) + getRealValue(this.generalDashboardFebContents.expSH)).toFixed(2)
            this.generalDashboardFebContents.cumulativeexpCYFlactation = (getRealValue(this.generalDashboardJanContents.expCYFlactation) + getRealValue(this.generalDashboardFebContents.expCYFlactation)).toFixed(2)
            this.generalDashboardFebContents.cumulativeexpCPO = (getRealValue(this.generalDashboardJanContents.expCPO) + getRealValue(this.generalDashboardFebContents.expCPO)).toFixed(2)
            this.generalDashboardFebContents.cumulativeexpSeniorsProject = (getRealValue(this.generalDashboardJanContents.expSeniorsProject) + getRealValue(this.generalDashboardFebContents.expSeniorsProject)).toFixed(2)
            this.generalDashboardFebContents.cumulativeexpCSDmcConnell = (getRealValue(this.generalDashboardJanContents.expCSDmcConnell) + getRealValue(this.generalDashboardFebContents.expCSDmcConnell)).toFixed(2)
            this.generalDashboardFebContents.cumulativeexpOthers = (getRealValue(this.generalDashboardJanContents.expOthers) + getRealValue(this.generalDashboardFebContents.expOthers)).toFixed(2)
            },
            generalJanOverallPerformance(){
              const getRealValue = (val) => +val || val;
              var baseJanOverallPerformanceGeneralDashboard = ((2 * getRealValue(this.foodbankJanContents.overallPerformance)) + getRealValue(this.babyCupboardJanContents.overallPerformance) + 
              (1.25 * getRealValue(this.gikJanContents.overallPerformance)) + (0.8 * getRealValue(this.charity13JanContents.overallPerformance)) + getRealValue(this.entrepreneurshipJanContents.overallPerformance) + 
              getRealValue(this.employmentSkillsJanContents.overallPerformance) + (0.8 * getRealValue(this.socialHarvestJanContents.overallPerformance)) + (0.8 * getRealValue(this.marketMobileJanContents.overallPerformance)) + 
              (0.8 * getRealValue(this.gfbJanContents.overallPerformance)) + (0.8 * getRealValue(this.collectiveKitchenJanContents.overallPerformance)) + (0.8 * getRealValue(this.communityMealsJanContents.overallPerformance)) + 
              (1.5 * getRealValue(this.clothespinJanContents.overallPerformance)) + (2 * getRealValue(this.crisisInterventionJanContents.overallPerformance)) + (0.8 * getRealValue(this.yesICanJanContents.overallPerformance)) + 
              getRealValue(this.youthPREducationJanContents.overallPerformance) + getRealValue(this.youthPRSportJanContents.overallPerformance) + getRealValue(this.youthPRViolinJanContents.overallPerformance) + 
              getRealValue(this.pinsJanContents.overallPerformance) + getRealValue(this.overbrookSPJanContents.overallPerformance) + getRealValue(this.communityDevelopmentJanContents.overallPerformance));
              this.generalDashboardJanContents.mainOverallPerformance = getRealValue(baseJanOverallPerformanceGeneralDashboard) / 21.35 * 100
              console.log("General Overall Jan Performance: " + this.generalDashboardJanContents.mainOverallPerformance);
              return this.generalDashboardJanContents.mainOverallPerformance
            },
            generalFebOverallPerformance(){
              const getRealValue = (val) => +val || val;
              console.log("General Overall Performance: " + this.generalDashboardFebContents.mainOverallPerformance);
              return this.generalDashboardFebContents.mainOverallPerformance
            },

        },
        created(){
          this.readData()
        }

    }
</script>
