<template>
    <div class="row q-col-gutter-sm q-ma-xs">
        <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">  <!--Number of Total Programs-->
                <q-card>
                  <q-card-section :class="$q.dark.isActive?'blue_dark':'bg-blue-8'" class="text-white">
                    <div class="row">
                      <div class="col-10">
                        <div class="text-h6">Number of Total Programs</div>
                        <div class="text-h5">{{generalDashboardJulContents.totalPrograms}}</div>
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
                        <div class="text-h5">{{generalDashboardJulContents.activePrograms}}</div>
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
                        <div class="text-h5">{{generalDashboardJulContents.projectsGoingOn}}</div>
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
                        <div class="text-h5">{{generalDashboardJulContents.totalUniqueVolunteers}} / {{generalDashboardJulContents.totalVolunteerHours}}</div>
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
                        :color="(foodbankJulContents.overallPerformance == null)?'grey':(foodbankJulContents.overallPerformance >= '0.0001' && foodbankJulContents.overallPerformance <= '40')?'red':(foodbankJulContents.overallPerformance > '40' && foodbankJulContents.overallPerformance <= '60')?'orange':(foodbankJulContents.overallPerformance > '60' && foodbankJulContents.overallPerformance < '90')?'yellow-7':(foodbankJulContents.overallPerformance >= '90' && foodbankJulContents.overallPerformance < '120')?'green':(foodbankJulContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(babyCupboardJulContents.overallPerformance == null)?'grey':(babyCupboardJulContents.overallPerformance >= '0.0001' && babyCupboardJulContents.overallPerformance <= '40')?'red':(babyCupboardJulContents.overallPerformance > '40' && babyCupboardJulContents.overallPerformance <= '60')?'orange':(babyCupboardJulContents.overallPerformance > '60' && babyCupboardJulContents.overallPerformance < '90')?'yellow-7':(babyCupboardJulContents.overallPerformance >= '90' && babyCupboardJulContents.overallPerformance < '120')?'green':(babyCupboardJulContents.overallPerformance >= '120'?'blue':'grey')"

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
                        :color="(gikJulContents.overallPerformance == null)?'grey':(gikJulContents.overallPerformance >= '0.0001' && gikJulContents.overallPerformance <= '40')?'red':(gikJulContents.overallPerformance > '40' && gikJulContents.overallPerformance <= '60')?'orange':(gikJulContents.overallPerformance > '60' && gikJulContents.overallPerformance < '90')?'yellow-7':(gikJulContents.overallPerformance >= '90' && gikJulContents.overallPerformance < '120')?'green':(gikJulContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(charity13JulContents.overallPerformance == null)?'grey':(charity13JulContents.overallPerformance >= '0.0001' && charity13JulContents.overallPerformance <= '40')?'red':(charity13JulContents.overallPerformance > '40' && charity13JulContents.overallPerformance <= '60')?'orange':(charity13JulContents.overallPerformance > '60' && charity13JulContents.overallPerformance < '90')?'yellow-7':(charity13JulContents.overallPerformance >= '90' && charity13JulContents.overallPerformance < '120')?'green':(charity13JulContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(entrepreneurshipJulContents.overallPerformance == null)?'grey':(entrepreneurshipJulContents.overallPerformance >= '0.0001' && entrepreneurshipJulContents.overallPerformance <= '40')?'red':(entrepreneurshipJulContents.overallPerformance > '40' && entrepreneurshipJulContents.overallPerformance <= '60')?'orange':(entrepreneurshipJulContents.overallPerformance > '60' && entrepreneurshipJulContents.overallPerformance < '90')?'yellow-7':(entrepreneurshipJulContents.overallPerformance >= '90' && entrepreneurshipJulContents.overallPerformance < '120')?'green':(entrepreneurshipJulContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(employmentSkillsJulContents.overallPerformance == null)?'grey':(employmentSkillsJulContents.overallPerformance >= '0.0001' && employmentSkillsJulContents.overallPerformance <= '40')?'red':(employmentSkillsJulContents.overallPerformance > '40' && employmentSkillsJulContents.overallPerformance <= '60')?'orange':(employmentSkillsJulContents.overallPerformance > '60' && employmentSkillsJulContents.overallPerformance < '90')?'yellow-7':(employmentSkillsJulContents.overallPerformance >= '90' && employmentSkillsJulContents.overallPerformance < '120')?'green':(employmentSkillsJulContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(socialHarvestJulContents.overallPerformance == null)?'grey':(socialHarvestJulContents.overallPerformance >= '0.0001' && socialHarvestJulContents.overallPerformance <= '40')?'red':(socialHarvestJulContents.overallPerformance > '40' && socialHarvestJulContents.overallPerformance <= '60')?'orange':(socialHarvestJulContents.overallPerformance > '60' && socialHarvestJulContents.overallPerformance < '90')?'yellow-7':(socialHarvestJulContents.overallPerformance >= '90' && socialHarvestJulContents.overallPerformance < '120')?'green':(socialHarvestJulContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(marketMobileJulContents.overallPerformance == null)?'grey':(marketMobileJulContents.overallPerformance >= '0.0001' && marketMobileJulContents.overallPerformance <= '40')?'red':(marketMobileJulContents.overallPerformance > '40' && marketMobileJulContents.overallPerformance <= '60')?'orange':(marketMobileJulContents.overallPerformance > '60' && marketMobileJulContents.overallPerformance < '90')?'yellow-7':(marketMobileJulContents.overallPerformance >= '90' && marketMobileJulContents.overallPerformance < '120')?'green':(marketMobileJulContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(clothespinJulContents.overallPerformance == null)?'grey':(clothespinJulContents.overallPerformance >= '0.0001' && clothespinJulContents.overallPerformance <= '40')?'red':(clothespinJulContents.overallPerformance > '40' && clothespinJulContents.overallPerformance <= '60')?'orange':(clothespinJulContents.overallPerformance > '60' && clothespinJulContents.overallPerformance < '90')?'yellow-7':(clothespinJulContents.overallPerformance >= '90' && clothespinJulContents.overallPerformance < '120')?'green':(clothespinJulContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(gfbJulContents.overallPerformance == null)?'grey':(gfbJulContents.overallPerformance >= '0.0001' && gfbJulContents.overallPerformance <= '40')?'red':(gfbJulContents.overallPerformance > '40' && gfbJulContents.overallPerformance <= '60')?'orange':(gfbJulContents.overallPerformance > '60' && gfbJulContents.overallPerformance < '90')?'yellow-7':(gfbJulContents.overallPerformance >= '90' && gfbJulContents.overallPerformance < '120')?'green':(gfbJulContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(overbrookSPJulContents.overallPerformance == null)?'grey':(overbrookSPJulContents.overallPerformance >= '0.0001' && overbrookSPJulContents.overallPerformance <= '40')?'red':(overbrookSPJulContents.overallPerformance > '40' && overbrookSPJulContents.overallPerformance <= '60')?'orange':(overbrookSPJulContents.overallPerformance > '60' && overbrookSPJulContents.overallPerformance < '90')?'yellow-7':(overbrookSPJulContents.overallPerformance >= '90' && overbrookSPJulContents.overallPerformance < '120')?'green':(overbrookSPJulContents.overallPerformance >= '120'?'blue':'grey')"
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
                            :color="(collectiveKitchenJulContents.overallPerformance == null)?'grey':(collectiveKitchenJulContents.overallPerformance >= '0.0001' && collectiveKitchenJulContents.overallPerformance <= '40')?'red':(collectiveKitchenJulContents.overallPerformance > '40' && collectiveKitchenJulContents.overallPerformance <= '60')?'orange':(collectiveKitchenJulContents.overallPerformance > '60' && collectiveKitchenJulContents.overallPerformance < '90')?'yellow-7':(collectiveKitchenJulContents.overallPerformance >= '90' && collectiveKitchenJulContents.overallPerformance < '120')?'green':(collectiveKitchenJulContents.overallPerformance >= '120'?'blue':'grey')"
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
                            :color="(communityMealsJulContents.overallPerformance == null)?'grey':(communityMealsJulContents.overallPerformance >= '0.0001' && communityMealsJulContents.overallPerformance <= '40')?'red':(communityMealsJulContents.overallPerformance > '40' && communityMealsJulContents.overallPerformance <= '60')?'orange':(communityMealsJulContents.overallPerformance > '60' && communityMealsJulContents.overallPerformance < '90')?'yellow-7':(communityMealsJulContents.overallPerformance >= '90' && communityMealsJulContents.overallPerformance < '120')?'green':(communityMealsJulContents.overallPerformance >= '120'?'blue':'grey')"
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
                            :color="(pinsJulContents.overallPerformance == null)?'grey':(pinsJulContents.overallPerformance >= '0.0001' && pinsJulContents.overallPerformance <= '40')?'red':(pinsJulContents.overallPerformance > '40' && pinsJulContents.overallPerformance <= '60')?'orange':(pinsJulContents.overallPerformance > '60' && pinsJulContents.overallPerformance < '90')?'yellow-7':(pinsJulContents.overallPerformance >= '90' && pinsJulContents.overallPerformance < '120')?'green':(pinsJulContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(yesICanJulContents.overallPerformance == null)?'grey':(yesICanJulContents.overallPerformance >= '0.0001' && yesICanJulContents.overallPerformance <= '40')?'red':(yesICanJulContents.overallPerformance > '40' && yesICanJulContents.overallPerformance <= '60')?'orange':(yesICanJulContents.overallPerformance > '60' && yesICanJulContents.overallPerformance < '90')?'yellow-7':(yesICanJulContents.overallPerformance >= '90' && yesICanJulContents.overallPerformance < '120')?'green':(yesICanJulContents.overallPerformance >= '120'?'blue':'grey')"
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
                            :color="(crisisInterventionJulContents.overallPerformance == null)?'grey':(crisisInterventionJulContents.overallPerformance >= '0.0001' && crisisInterventionJulContents.overallPerformance <= '40')?'red':(crisisInterventionJulContents.overallPerformance > '40' && crisisInterventionJulContents.overallPerformance <= '60')?'orange':(crisisInterventionJulContents.overallPerformance > '60' && crisisInterventionJulContents.overallPerformance < '90')?'yellow-7':(crisisInterventionJulContents.overallPerformance >= '90' && crisisInterventionJulContents.overallPerformance < '120')?'green':(crisisInterventionJulContents.overallPerformance >= '120'?'blue':'grey')"
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
                            :color="(youthPREducationJulContents.overallPerformance == null)?'grey':(youthPREducationJulContents.overallPerformance >= '0.0001' && youthPREducationJulContents.overallPerformance <= '40')?'red':(youthPREducationJulContents.overallPerformance > '40' && youthPREducationJulContents.overallPerformance <= '60')?'orange':(youthPREducationJulContents.overallPerformance > '60' && youthPREducationJulContents.overallPerformance < '90')?'yellow-7':(youthPREducationJulContents.overallPerformance >= '90' && youthPREducationJulContents.overallPerformance < '120')?'green':(youthPREducationJulContents.overallPerformance >= '120'?'blue':'grey')"
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
                            :color="(youthPRSportJulContents.overallPerformance == null)?'grey':(youthPRSportJulContents.overallPerformance >= '0.0001' && youthPRSportJulContents.overallPerformance <= '40')?'red':(youthPRSportJulContents.overallPerformance > '40' && youthPRSportJulContents.overallPerformance <= '60')?'orange':(youthPRSportJulContents.overallPerformance > '60' && youthPRSportJulContents.overallPerformance < '90')?'yellow-7':(youthPRSportJulContents.overallPerformance >= '90' && youthPRSportJulContents.overallPerformance < '120')?'green':(youthPRSportJulContents.overallPerformance >= '120'?'blue':'grey')"
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
                            :color="(youthPRViolinJulContents.overallPerformance == null)?'grey':(youthPRViolinJulContents.overallPerformance >= '0.0001' && youthPRViolinJulContents.overallPerformance <= '40')?'red':(youthPRViolinJulContents.overallPerformance > '40' && youthPRViolinJulContents.overallPerformance <= '60')?'orange':(youthPRViolinJulContents.overallPerformance > '60' && youthPRViolinJulContents.overallPerformance < '90')?'yellow-7':(youthPRViolinJulContents.overallPerformance >= '90' && youthPRViolinJulContents.overallPerformance < '120')?'green':(youthPRViolinJulContents.overallPerformance >= '120'?'blue':'grey')"
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
                            :color="(communityDevelopmentJulContents.overallPerformance == null)?'grey':(communityDevelopmentJulContents.overallPerformance >= '0.0001' && communityDevelopmentJulContents.overallPerformance <= '40')?'red':(communityDevelopmentJulContents.overallPerformance > '40' && communityDevelopmentJulContents.overallPerformance <= '60')?'orange':(communityDevelopmentJulContents.overallPerformance > '60' && communityDevelopmentJulContents.overallPerformance < '90')?'yellow-7':(communityDevelopmentJulContents.overallPerformance >= '90' && communityDevelopmentJulContents.overallPerformance < '120')?'green':(communityDevelopmentJulContents.overallPerformance >= '120'?'blue':'grey')"
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
                foodbankOP: null,
                generalDashboardJanContent: { 
                    activePrograms: null,
                    actualBudget: null,
                    budgetUsage: null,
                    cumulativeexpAdmin: null,
                    cumulativeexpPRfftnc: null,
                    cumulativeexpIncubator: null,
                    cumulativeexpAP: null,
                    cumulativeexpGFB: null,
                    cumulativeexpGIK: null,
                    cumulativeexpSH: null,
                    cumulativeexpCYFlactation: null,
                    cumulativeexpCPO: null,
                    cumulativeexpSeniorsProject: null,
                    cumulativeexpCSDmcConnell: null,
                    cumulativeexpOthers: null,
                    expAdmin: null,
                    expPRfftnc: null,
                    expIncubator: null,
                    expAP: null,
                    expGFB: null,
                    expGIK: null,
                    expSH: null,
                    expCYFlactation: null,
                    expCPO: null,
                    expSeniorsProject: null,
                    expCSDmcConnell: null,
                    expOthers: null,
                    expenses: null,
                    mainOverallPerformance: null,
                    projectsGoingOn: null,
                    revenues: null,
                    totalPrograms: null,
                    totalUniqueVolunteers: null,
                    totalVolunteerHours: null
                },
                generalDashboardJanContents : [],
                generalDashboardFebContent: { 
                    activePrograms: null,
                    actualBudget: null,
                    budgetUsage: null,
                    cumulativeexpAdmin: null,
                    cumulativeexpPRfftnc: null,
                    cumulativeexpIncubator: null,
                    cumulativeexpAP: null,
                    cumulativeexpGFB: null,
                    cumulativeexpGIK: null,
                    cumulativeexpSH: null,
                    cumulativeexpCYFlactation: null,
                    cumulativeexpCPO: null,
                    cumulativeexpSeniorsProject: null,
                    cumulativeexpCSDmcConnell: null,
                    cumulativeexpOthers: null,
                    expAdmin: null,
                    expPRfftnc: null,
                    expIncubator: null,
                    expAP: null,
                    expGFB: null,
                    expGIK: null,
                    expSH: null,
                    expCYFlactation: null,
                    expCPO: null,
                    expSeniorsProject: null,
                    expCSDmcConnell: null,
                    expOthers: null,
                    expenses: null,
                    mainOverallPerformance: null,
                    projectsGoingOn: null,
                    revenues: null,
                    totalPrograms: null,
                    totalUniqueVolunteers: null,
                    totalVolunteerHours: null
                },
                generalDashboardFebContents : [],
                generalDashboardMarContent: { 
                    activePrograms: null,
                    actualBudget: null,
                    budgetUsage: null,
                    cumulativeexpAdmin: null,
                    cumulativeexpPRfftnc: null,
                    cumulativeexpIncubator: null,
                    cumulativeexpAP: null,
                    cumulativeexpGFB: null,
                    cumulativeexpGIK: null,
                    cumulativeexpSH: null,
                    cumulativeexpCYFlactation: null,
                    cumulativeexpCPO: null,
                    cumulativeexpSeniorsProject: null,
                    cumulativeexpCSDmcConnell: null,
                    cumulativeexpOthers: null,
                    expAdmin: null,
                    expPRfftnc: null,
                    expIncubator: null,
                    expAP: null,
                    expGFB: null,
                    expGIK: null,
                    expSH: null,
                    expCYFlactation: null,
                    expCPO: null,
                    expSeniorsProject: null,
                    expCSDmcConnell: null,
                    expOthers: null,
                    expenses: null,
                    mainOverallPerformance: null,
                    projectsGoingOn: null,
                    revenues: null,
                    totalPrograms: null,
                    totalUniqueVolunteers: null,
                    totalVolunteerHours: null
                },
                generalDashboardMarContents : [],
                generalDashboardAprContent: { 
                    activePrograms: null,
                    actualBudget: null,
                    budgetUsage: null,
                    cumulativeexpAdmin: null,
                    cumulativeexpPRfftnc: null,
                    cumulativeexpIncubator: null,
                    cumulativeexpAP: null,
                    cumulativeexpGFB: null,
                    cumulativeexpGIK: null,
                    cumulativeexpSH: null,
                    cumulativeexpCYFlactation: null,
                    cumulativeexpCPO: null,
                    cumulativeexpSeniorsProject: null,
                    cumulativeexpCSDmcConnell: null,
                    cumulativeexpOthers: null,
                    expAdmin: null,
                    expPRfftnc: null,
                    expIncubator: null,
                    expAP: null,
                    expGFB: null,
                    expGIK: null,
                    expSH: null,
                    expCYFlactation: null,
                    expCPO: null,
                    expSeniorsProject: null,
                    expCSDmcConnell: null,
                    expOthers: null,
                    expenses: null,
                    mainOverallPerformance: null,
                    projectsGoingOn: null,
                    revenues: null,
                    totalPrograms: null,
                    totalUniqueVolunteers: null,
                    totalVolunteerHours: null
                },
                generalDashboardAprContents : [],
                generalDashboardMayContent: { 
                    activePrograms: null,
                    actualBudget: null,
                    budgetUsage: null,
                    cumulativeexpAdmin: null,
                    cumulativeexpPRfftnc: null,
                    cumulativeexpIncubator: null,
                    cumulativeexpAP: null,
                    cumulativeexpGFB: null,
                    cumulativeexpGIK: null,
                    cumulativeexpSH: null,
                    cumulativeexpCYFlactation: null,
                    cumulativeexpCPO: null,
                    cumulativeexpSeniorsProject: null,
                    cumulativeexpCSDmcConnell: null,
                    cumulativeexpOthers: null,
                    expAdmin: null,
                    expPRfftnc: null,
                    expIncubator: null,
                    expAP: null,
                    expGFB: null,
                    expGIK: null,
                    expSH: null,
                    expCYFlactation: null,
                    expCPO: null,
                    expSeniorsProject: null,
                    expCSDmcConnell: null,
                    expOthers: null,
                    expenses: null,
                    mainOverallPerformance: null,
                    projectsGoingOn: null,
                    revenues: null,
                    totalPrograms: null,
                    totalUniqueVolunteers: null,
                    totalVolunteerHours: null
                },
                generalDashboardMayContents : [],
                generalDashboardJunContent: { 
                    activePrograms: null,
                    actualBudget: null,
                    budgetUsage: null,
                    cumulativeexpAdmin: null,
                    cumulativeexpPRfftnc: null,
                    cumulativeexpIncubator: null,
                    cumulativeexpAP: null,
                    cumulativeexpGFB: null,
                    cumulativeexpGIK: null,
                    cumulativeexpSH: null,
                    cumulativeexpCYFlactation: null,
                    cumulativeexpCPO: null,
                    cumulativeexpSeniorsProject: null,
                    cumulativeexpCSDmcConnell: null,
                    cumulativeexpOthers: null,
                    expAdmin: null,
                    expPRfftnc: null,
                    expIncubator: null,
                    expAP: null,
                    expGFB: null,
                    expGIK: null,
                    expSH: null,
                    expCYFlactation: null,
                    expCPO: null,
                    expSeniorsProject: null,
                    expCSDmcConnell: null,
                    expOthers: null,
                    expenses: null,
                    mainOverallPerformance: null,
                    projectsGoingOn: null,
                    revenues: null,
                    totalPrograms: null,
                    totalUniqueVolunteers: null,
                    totalVolunteerHours: null
                },
                generalDashboardJunContents : [],
                generalDashboardJulContent: { 
                    activePrograms: null,
                    actualBudget: null,
                    budgetUsage: null,
                    cumulativeexpAdmin: null,
                    cumulativeexpPRfftnc: null,
                    cumulativeexpIncubator: null,
                    cumulativeexpAP: null,
                    cumulativeexpGFB: null,
                    cumulativeexpGIK: null,
                    cumulativeexpSH: null,
                    cumulativeexpCYFlactation: null,
                    cumulativeexpCPO: null,
                    cumulativeexpSeniorsProject: null,
                    cumulativeexpCSDmcConnell: null,
                    cumulativeexpOthers: null,
                    expAdmin: null,
                    expPRfftnc: null,
                    expIncubator: null,
                    expAP: null,
                    expGFB: null,
                    expGIK: null,
                    expSH: null,
                    expCYFlactation: null,
                    expCPO: null,
                    expSeniorsProject: null,
                    expCSDmcConnell: null,
                    expOthers: null,
                    expenses: null,
                    mainOverallPerformance: null,
                    projectsGoingOn: null,
                    revenues: null,
                    totalPrograms: null,
                    totalUniqueVolunteers: null,
                    totalVolunteerHours: null
                },
                generalDashboardJulContents : [],
                generalDashboardAugContent: { 
                    activePrograms: null,
                    actualBudget: null,
                    budgetUsage: null,
                    cumulativeexpAdmin: null,
                    cumulativeexpPRfftnc: null,
                    cumulativeexpIncubator: null,
                    cumulativeexpAP: null,
                    cumulativeexpGFB: null,
                    cumulativeexpGIK: null,
                    cumulativeexpSH: null,
                    cumulativeexpCYFlactation: null,
                    cumulativeexpCPO: null,
                    cumulativeexpSeniorsProject: null,
                    cumulativeexpCSDmcConnell: null,
                    cumulativeexpOthers: null,
                    expAdmin: null,
                    expPRfftnc: null,
                    expIncubator: null,
                    expAP: null,
                    expGFB: null,
                    expGIK: null,
                    expSH: null,
                    expCYFlactation: null,
                    expCPO: null,
                    expSeniorsProject: null,
                    expCSDmcConnell: null,
                    expOthers: null,
                    expenses: null,
                    mainOverallPerformance: null,
                    projectsGoingOn: null,
                    revenues: null,
                    totalPrograms: null,
                    totalUniqueVolunteers: null,
                    totalVolunteerHours: null
                },
                generalDashboardAugContents : [],
                generalDashboardSepContent: { 
                    activePrograms: null,
                    actualBudget: null,
                    budgetUsage: null,
                    cumulativeexpAdmin: null,
                    cumulativeexpPRfftnc: null,
                    cumulativeexpIncubator: null,
                    cumulativeexpAP: null,
                    cumulativeexpGFB: null,
                    cumulativeexpGIK: null,
                    cumulativeexpSH: null,
                    cumulativeexpCYFlactation: null,
                    cumulativeexpCPO: null,
                    cumulativeexpSeniorsProject: null,
                    cumulativeexpCSDmcConnell: null,
                    cumulativeexpOthers: null,
                    expAdmin: null,
                    expPRfftnc: null,
                    expIncubator: null,
                    expAP: null,
                    expGFB: null,
                    expGIK: null,
                    expSH: null,
                    expCYFlactation: null,
                    expCPO: null,
                    expSeniorsProject: null,
                    expCSDmcConnell: null,
                    expOthers: null,
                    expenses: null,
                    mainOverallPerformance: null,
                    projectsGoingOn: null,
                    revenues: null,
                    totalPrograms: null,
                    totalUniqueVolunteers: null,
                    totalVolunteerHours: null
                },
                generalDashboardSepContents : [],
                generalDashboardOctContent: { 
                    activePrograms: null,
                    actualBudget: null,
                    budgetUsage: null,
                    cumulativeexpAdmin: null,
                    cumulativeexpPRfftnc: null,
                    cumulativeexpIncubator: null,
                    cumulativeexpAP: null,
                    cumulativeexpGFB: null,
                    cumulativeexpGIK: null,
                    cumulativeexpSH: null,
                    cumulativeexpCYFlactation: null,
                    cumulativeexpCPO: null,
                    cumulativeexpSeniorsProject: null,
                    cumulativeexpCSDmcConnell: null,
                    cumulativeexpOthers: null,
                    expAdmin: null,
                    expPRfftnc: null,
                    expIncubator: null,
                    expAP: null,
                    expGFB: null,
                    expGIK: null,
                    expSH: null,
                    expCYFlactation: null,
                    expCPO: null,
                    expSeniorsProject: null,
                    expCSDmcConnell: null,
                    expOthers: null,
                    expenses: null,
                    mainOverallPerformance: null,
                    projectsGoingOn: null,
                    revenues: null,
                    totalPrograms: null,
                    totalUniqueVolunteers: null,
                    totalVolunteerHours: null
                },
                generalDashboardOctContents : [],
                generalDashboardNovContent: { 
                    activePrograms: null,
                    actualBudget: null,
                    budgetUsage: null,
                    cumulativeexpAdmin: null,
                    cumulativeexpPRfftnc: null,
                    cumulativeexpIncubator: null,
                    cumulativeexpAP: null,
                    cumulativeexpGFB: null,
                    cumulativeexpGIK: null,
                    cumulativeexpSH: null,
                    cumulativeexpCYFlactation: null,
                    cumulativeexpCPO: null,
                    cumulativeexpSeniorsProject: null,
                    cumulativeexpCSDmcConnell: null,
                    cumulativeexpOthers: null,
                    expAdmin: null,
                    expPRfftnc: null,
                    expIncubator: null,
                    expAP: null,
                    expGFB: null,
                    expGIK: null,
                    expSH: null,
                    expCYFlactation: null,
                    expCPO: null,
                    expSeniorsProject: null,
                    expCSDmcConnell: null,
                    expOthers: null,
                    expenses: null,
                    mainOverallPerformance: null,
                    projectsGoingOn: null,
                    revenues: null,
                    totalPrograms: null,
                    totalUniqueVolunteers: null,
                    totalVolunteerHours: null
                },
                generalDashboardNovContents : [],
                generalDashboardDecContent: { 
                    activePrograms: null,
                    actualBudget: null,
                    budgetUsage: null,
                    cumulativeexpAdmin: null,
                    cumulativeexpPRfftnc: null,
                    cumulativeexpIncubator: null,
                    cumulativeexpAP: null,
                    cumulativeexpGFB: null,
                    cumulativeexpGIK: null,
                    cumulativeexpSH: null,
                    cumulativeexpCYFlactation: null,
                    cumulativeexpCPO: null,
                    cumulativeexpSeniorsProject: null,
                    cumulativeexpCSDmcConnell: null,
                    cumulativeexpOthers: null,
                    expAdmin: null,
                    expPRfftnc: null,
                    expIncubator: null,
                    expAP: null,
                    expGFB: null,
                    expGIK: null,
                    expSH: null,
                    expCYFlactation: null,
                    expCPO: null,
                    expSeniorsProject: null,
                    expCSDmcConnell: null,
                    expOthers: null,
                    expenses: null,
                    mainOverallPerformance: null,
                    projectsGoingOn: null,
                    revenues: null,
                    totalPrograms: null,
                    totalUniqueVolunteers: null,
                    totalVolunteerHours: null
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
                    actualBudget: null,
                    budgetUsage: null,
                    expenseCategory1: null,
                    expenseCategory2: null,
                    expenseCategory3: null,
                    expenseCategory4: null,
                    expenseCategory5: null,
                    expenseCategory6: null,
                    expenses: null,
                    kpi1 :null,
                    kpi2 :null,
                    kpi3 :null,
                    kpi4 :null,
                    kpi5 :null,
                    kpi6 :null,
                    overallPerformance: null,
                    perCategory1: null,
                    perCategory2: null,
                    perCategory3: null,
                    perCategory4: null,
                    perCategory5: null,
                    perCategory6: null,
                    revenues: null,
                    uniqueVolunteers: null,
                    volunteerHours:null,
                },
                foodbankJanContents : [],
                foodbankFebContent: { 
                    actualBudget: null,
                    budgetUsage: null,
                    expenseCategory1: null,
                    expenseCategory2: null,
                    expenseCategory3: null,
                    expenseCategory4: null,
                    expenseCategory5: null,
                    expenseCategory6: null,
                    expenses: null,
                    kpi1 :null,
                    kpi2 :null,
                    kpi3 :null,
                    kpi4 :null,
                    kpi5 :null,
                    kpi6 :null,
                    overallPerformance: null,
                    perCategory1: null,
                    perCategory2: null,
                    perCategory3: null,
                    perCategory4: null,
                    perCategory5: null,
                    perCategory6: null,
                    revenues: null,
                    uniqueVolunteers: null,
                    volunteerHours:null,
                },
                foodbankFebContents : [],
                foodbankMarContent: { 
                    actualBudget: null,
                    budgetUsage: null,
                    expenseCategory1: null,
                    expenseCategory2: null,
                    expenseCategory3: null,
                    expenseCategory4: null,
                    expenseCategory5: null,
                    expenseCategory6: null,
                    expenses: null,
                    kpi1 :null,
                    kpi2 :null,
                    kpi3 :null,
                    kpi4 :null,
                    kpi5 :null,
                    kpi6 :null,
                    overallPerformance: null,
                    perCategory1: null,
                    perCategory2: null,
                    perCategory3: null,
                    perCategory4: null,
                    perCategory5: null,
                    perCategory6: null,
                    revenues: null,
                    uniqueVolunteers: null,
                    volunteerHours:null,
                },
                foodbankMarContents : [],
                foodbankAprContent: { 
                    actualBudget: null,
                    budgetUsage: null,
                    expenseCategory1: null,
                    expenseCategory2: null,
                    expenseCategory3: null,
                    expenseCategory4: null,
                    expenseCategory5: null,
                    expenseCategory6: null,
                    expenses: null,
                    kpi1 :null,
                    kpi2 :null,
                    kpi3 :null,
                    kpi4 :null,
                    kpi5 :null,
                    kpi6 :null,
                    overallPerformance: null,
                    perCategory1: null,
                    perCategory2: null,
                    perCategory3: null,
                    perCategory4: null,
                    perCategory5: null,
                    perCategory6: null,
                    revenues: null,
                    uniqueVolunteers: null,
                    volunteerHours:null,
                },
                foodbankAprContents : [],
                foodbankMayContent: { 
                    actualBudget: null,
                    budgetUsage: null,
                    expenseCategory1: null,
                    expenseCategory2: null,
                    expenseCategory3: null,
                    expenseCategory4: null,
                    expenseCategory5: null,
                    expenseCategory6: null,
                    expenses: null,
                    kpi1 :null,
                    kpi2 :null,
                    kpi3 :null,
                    kpi4 :null,
                    kpi5 :null,
                    kpi6 :null,
                    overallPerformance: null,
                    perCategory1: null,
                    perCategory2: null,
                    perCategory3: null,
                    perCategory4: null,
                    perCategory5: null,
                    perCategory6: null,
                    revenues: null,
                    uniqueVolunteers: null,
                    volunteerHours:null,
                },
                foodbankMayContents : [],
                foodbankJunContent: { 
                    actualBudget: null,
                    budgetUsage: null,
                    expenseCategory1: null,
                    expenseCategory2: null,
                    expenseCategory3: null,
                    expenseCategory4: null,
                    expenseCategory5: null,
                    expenseCategory6: null,
                    expenses: null,
                    kpi1 :null,
                    kpi2 :null,
                    kpi3 :null,
                    kpi4 :null,
                    kpi5 :null,
                    kpi6 :null,
                    overallPerformance: null,
                    perCategory1: null,
                    perCategory2: null,
                    perCategory3: null,
                    perCategory4: null,
                    perCategory5: null,
                    perCategory6: null,
                    revenues: null,
                    uniqueVolunteers: null,
                    volunteerHours:null,
                },
                foodbankJunContents : [],
                foodbankJulContent: { 
                    actualBudget: null,
                    budgetUsage: null,
                    expenseCategory1: null,
                    expenseCategory2: null,
                    expenseCategory3: null,
                    expenseCategory4: null,
                    expenseCategory5: null,
                    expenseCategory6: null,
                    expenses: null,
                    kpi1 :null,
                    kpi2 :null,
                    kpi3 :null,
                    kpi4 :null,
                    kpi5 :null,
                    kpi6 :null,
                    overallPerformance: null,
                    perCategory1: null,
                    perCategory2: null,
                    perCategory3: null,
                    perCategory4: null,
                    perCategory5: null,
                    perCategory6: null,
                    revenues: null,
                    uniqueVolunteers: null,
                    volunteerHours:null,
                },
                foodbankJulContents : [],
                foodbankAugContent: { 
                    actualBudget: null,
                    budgetUsage: null,
                    expenseCategory1: null,
                    expenseCategory2: null,
                    expenseCategory3: null,
                    expenseCategory4: null,
                    expenseCategory5: null,
                    expenseCategory6: null,
                    expenses: null,
                    kpi1 :null,
                    kpi2 :null,
                    kpi3 :null,
                    kpi4 :null,
                    kpi5 :null,
                    kpi6 :null,
                    overallPerformance: null,
                    perCategory1: null,
                    perCategory2: null,
                    perCategory3: null,
                    perCategory4: null,
                    perCategory5: null,
                    perCategory6: null,
                    revenues: null,
                    uniqueVolunteers: null,
                    volunteerHours:null,
                },
                foodbankAugContents : [],
                foodbankSepContent: { 
                    actualBudget: null,
                    budgetUsage: null,
                    expenseCategory1: null,
                    expenseCategory2: null,
                    expenseCategory3: null,
                    expenseCategory4: null,
                    expenseCategory5: null,
                    expenseCategory6: null,
                    expenses: null,
                    kpi1 :null,
                    kpi2 :null,
                    kpi3 :null,
                    kpi4 :null,
                    kpi5 :null,
                    kpi6 :null,
                    overallPerformance: null,
                    perCategory1: null,
                    perCategory2: null,
                    perCategory3: null,
                    perCategory4: null,
                    perCategory5: null,
                    perCategory6: null,
                    revenues: null,
                    uniqueVolunteers: null,
                    volunteerHours:null,
                },
                foodbankSepContents : [],
                foodbankOctContent: { 
                    actualBudget: null,
                    budgetUsage: null,
                    expenseCategory1: null,
                    expenseCategory2: null,
                    expenseCategory3: null,
                    expenseCategory4: null,
                    expenseCategory5: null,
                    expenseCategory6: null,
                    expenses: null,
                    kpi1 :null,
                    kpi2 :null,
                    kpi3 :null,
                    kpi4 :null,
                    kpi5 :null,
                    kpi6 :null,
                    overallPerformance: null,
                    perCategory1: null,
                    perCategory2: null,
                    perCategory3: null,
                    perCategory4: null,
                    perCategory5: null,
                    perCategory6: null,
                    revenues: null,
                    uniqueVolunteers: null,
                    volunteerHours:null,
                },
                foodbankOctContents : [],
                foodbankNovContent: { 
                    actualBudget: null,
                    budgetUsage: null,
                    expenseCategory1: null,
                    expenseCategory2: null,
                    expenseCategory3: null,
                    expenseCategory4: null,
                    expenseCategory5: null,
                    expenseCategory6: null,
                    expenses: null,
                    kpi1 :null,
                    kpi2 :null,
                    kpi3 :null,
                    kpi4 :null,
                    kpi5 :null,
                    kpi6 :null,
                    overallPerformance: null,
                    perCategory1: null,
                    perCategory2: null,
                    perCategory3: null,
                    perCategory4: null,
                    perCategory5: null,
                    perCategory6: null,
                    revenues: null,
                    uniqueVolunteers: null,
                    volunteerHours:null,
                },
                foodbankNovContents : [],
                foodbankDecContent: { 
                    actualBudget: null,
                    budgetUsage: null,
                    expenseCategory1: null,
                    expenseCategory2: null,
                    expenseCategory3: null,
                    expenseCategory4: null,
                    expenseCategory5: null,
                    expenseCategory6: null,
                    expenses: null,
                    kpi1 :null,
                    kpi2 :null,
                    kpi3 :null,
                    kpi4 :null,
                    kpi5 :null,
                    kpi6 :null,
                    overallPerformance: null,
                    perCategory1: null,
                    perCategory2: null,
                    perCategory3: null,
                    perCategory4: null,
                    perCategory5: null,
                    perCategory6: null,
                    revenues: null,
                    uniqueVolunteers: null,
                    volunteerHours:null,
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
                      data: [{value: this.generalDashboardJulContents.mainOverallPerformance}],
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
                      data: [{value: this.generalDashboardJulContents.budgetUsage}],
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
                                {value: this.generalDashboardJulContents.cumulativeexpAdmin, name: 'Admin', selected: false},
                                {value: this.generalDashboardJulContents.cumulativeexpPRfftnc, name: 'PR / FFTNC', selected: false},
                                {value: this.generalDashboardJulContents.cumulativeexpIncubator, name: 'Incubator', selected: false},
                                {value: this.generalDashboardJulContents.cumulativeexpAP, name: 'A-P', selected: false},
                                {value: this.generalDashboardJulContents.cumulativeexpGFB, name: 'GFB', selected: false},
                                {value: this.generalDashboardJulContents.cumulativeexpGIK, name: 'GIK', selected: false},
                                {value: this.generalDashboardJulContents.cumulativeexpSH, name: 'SH', selected: false},
                                {value: this.generalDashboardJulContents.cumulativeexpCYFlactation, name: 'CYF / Lactation', selected: false},
                                {value: this.generalDashboardJulContents.cumulativeexpCPO, name: 'CPO', selected: false},
                                {value: this.generalDashboardJulContents.cumulativeexpSeniorsProject, name: 'Seniors Project', selected: false},
                                {value: this.generalDashboardJulContents.cumulativeexpCSDmcConnell, name: 'CSD / McConnell', selected: false},
                                {value: this.generalDashboardJulContents.cumulativeexpOthers, name: 'Others', selected: false}
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
                                {value: this.generalDashboardJulContents.expAdmin, name: 'Admin', selected: false},
                                {value: this.generalDashboardJulContents.expPRfftnc, name: 'PR / FFTNC', selected: false},
                                {value: this.generalDashboardJulContents.expIncubator, name: 'Incubator', selected: false},
                                {value: this.generalDashboardJulContents.expAP, name: 'A-P', selected: false},
                                {value: this.generalDashboardJulContents.expGFB, name: 'GFB', selected: false},
                                {value: this.generalDashboardJulContents.expGIK, name: 'GIK', selected: false},
                                {value: this.generalDashboardJulContents.expSH, name: 'SH', selected: false},
                                {value: this.generalDashboardJulContents.expCYFlactation, name: 'CYF / Lactation', selected: false},
                                {value: this.generalDashboardJulContents.expCPO, name: 'CPO', selected: false},
                                {value: this.generalDashboardJulContents.expSeniorsProject, name: 'Seniors Project', selected: false},
                                {value: this.generalDashboardJulContents.expCSDmcConnell, name: 'CSD / McConnell', selected: false},
                                {value: this.generalDashboardJulContents.expOthers, name: 'Others', selected: false}
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

                    } else {
                        // doc.data() will be undefined in this case
                        console.log("No such document!");
                    }
                }).catch((error) => {
                    console.log("Error getting document:", error);
                });
                //    GENERAL DASHBOARD | MARCH
                var docgeneralDashboardMarRef = db.collection("generalDashboard").doc("march");

                docgeneralDashboardMarRef.get().then((doc) => {
                    if (doc.exists) {
                        console.log("Document data:", doc.data());
                        this.generalDashboardMarContents = doc.data();
                        this.totalExpenseMar();

                    } else {
                        // doc.data() will be undefined in this case
                        console.log("No such document!");
                    }
                }).catch((error) => {
                    console.log("Error getting document:", error);
                });
                 //    GENERAL DASHBOARD | APRIL
                var docgeneralDashboardAprRef = db.collection("generalDashboard").doc("april");

                docgeneralDashboardAprRef.get().then((doc) => {
                    if (doc.exists) {
                        console.log("Document data:", doc.data());
                        this.generalDashboardAprContents = doc.data();
                        this.totalExpenseApr();
                        
                    } else {
                        // doc.data() will be undefined in this case
                        console.log("No such document! - generalDashboard");
                    }
                }).catch((error) => {
                    console.log("Error getting document:", error);
                });
                 //    GENERAL DASHBOARD | MAY
                var docgeneralDashboardMayRef = db.collection("generalDashboard").doc("may");

                docgeneralDashboardMayRef.get().then((doc) => {
                    if (doc.exists) {
                        console.log("Document data:", doc.data());
                        this.generalDashboardMayContents = doc.data();
                        this.totalExpenseMay();
                        
                    } else {
                        // doc.data() will be undefined in this case
                        console.log("No such document! - generalDashboard");
                    }
                }).catch((error) => {
                    console.log("Error getting document:", error);
                });
                 //    GENERAL DASHBOARD | JUNE
                var docgeneralDashboardJunRef = db.collection("generalDashboard").doc("june");

                docgeneralDashboardJunRef.get().then((doc) => {
                    if (doc.exists) {
                        console.log("Document data:", doc.data());
                        this.generalDashboardJunContents = doc.data();
                        this.totalExpenseJun();

                    } else {
                        // doc.data() will be undefined in this case
                        console.log("No such document! - generalDashboard");
                    }
                }).catch((error) => {
                    console.log("Error getting document:", error);
                });
                //    GENERAL DASHBOARD | JULY
                var docgeneralDashboardJulRef = db.collection("generalDashboard").doc("july");

                docgeneralDashboardJulRef.get().then((doc) => {
                    if (doc.exists) {
                        console.log("Document data:", doc.data());
                        this.generalDashboardJulContents = doc.data();
                        this.totalExpenseJul();
                        this.cumulativeBudgetUsageJul();
                        this.totalCumulativeExpenseJul();

                        this.foodbankJul();
                    } else {
                        // doc.data() will be undefined in this case
                        console.log("No such document! - generalDashboard");
                    }
                }).catch((error) => {
                    console.log("Error getting document:", error);
                });
            },  
                foodbankJul(){
                    //    FOODBANK | MAY
                    var docfoodbankAprRef = db.collection("foodbank").doc("july");

                    docfoodbankAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.foodbankJulContents = doc.data();
                            this.foodbankJulOverallPerformance();

                            this.babyCupboardJul();

                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - foodbank");
                        }

                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                babyCupboardJul(){
                                        //    BABY CUPBOARD | MAY
                    var docbabyCupboardAprRef = db.collection("babyCupboard").doc("july");

                    docbabyCupboardAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.babyCupboardJulContents = doc.data();
                            this.babyCupboardJulOverallPerformance();

                            this.gikJul();
                            

                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - babyCupboard");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                gikJul(){
                    //    GIFTS IN KIND | MAY
                    var docgikAprRef = db.collection("gik").doc("july");

                    docgikAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.gikJulContents = doc.data();
                            this.gikJulOverallPerformance();
                            
                            this.charity13Jul();
                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - gik");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });

                },
                charity13Jul(){
                    //    charITy13 | MAY
                    var docCharity13AprRef = db.collection("charity13").doc("july");

                    docCharity13AprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.charity13JulContents = doc.data();
                            this.charity13JulOverallPerformance();
                            
                            this.entrepreneurshipJul();
                            
                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - charity13");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });

                },entrepreneurshipJul(){
                    //    ENTREPRENEURSHIP | MAY
                    var docentrepreneurshipAprRef = db.collection("entrepreneurship").doc("july");

                    docentrepreneurshipAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.entrepreneurshipJulContents = doc.data();
                            this.entrepreneurshipJulOverallPerformance();

                            this.employmentSkillsJul();

                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - entrepreneurship");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                employmentSkillsJul(){
                    //    EMPLOYEMENT SKILLS | MAY
                    var docemploymentSkillsAprRef = db.collection("employmentSkills").doc("july");

                    docemploymentSkillsAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.employmentSkillsJulContents = doc.data();
                            this.employmentSkillsJulOverallPerformance();

                            this.socialHarvestJul();

                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - employmentSkills");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                socialHarvestJul(){
                    //    SOCIAL HARVEST | MAY
                    var docsocialHarvestAprRef = db.collection("socialHarvest").doc("july");

                    docsocialHarvestAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.socialHarvestJulContents = doc.data();
                            this.socialHarvestJulOverallPerformance();

                            this.marketMobileJul();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - socialHarvest");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });

                },
                marketMobileJul(){
                    //    MARKET MOBILE | MAY
                    var docmarketMobileAprRef = db.collection("marketMobile").doc("july");

                    docmarketMobileAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.marketMobileJulContents = doc.data();
                            this.marketMobileJulOverallPerformance();

                            this.clothespinJul();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - marketMobile");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });

                },
                clothespinJul(){
                    //    CLOTHESPIN | MAY
                    var docclothespinAprRef = db.collection("clothespin").doc("july");

                    docclothespinAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.clothespinJulContents = doc.data();
                            this.clothespinJulOverallPerformance();

                            this.gfbJul();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - clothespin");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });

                },
                gfbJul(){
                    //    GOOD FOOD BOX | MAY
                    var docgfbAprRef = db.collection("gfb").doc("july");

                    docgfbAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.gfbJulContents = doc.data();
                            this.gfbJulOverallPerformance();
                            
                            this.overbrookSPJul();

                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - gfb");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });


                },
                overbrookSPJul(){
                    //    Overbrook SP | MAY
                    var docoverbrookSPAprRef = db.collection("overbrookSP").doc("july");

                    docoverbrookSPAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.overbrookSPJulContents = doc.data();
                            this.overbrookSPJulOverallPerformance();

                            this.collectiveKitchenJul();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - overbrookSP");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });

                },
                collectiveKitchenJul(){
                    //    COLLECTIVE KITCHEN | MAY
                    var doccollectiveKitchenAprRef = db.collection("collectiveKitchen").doc("july");

                    doccollectiveKitchenAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.collectiveKitchenJulContents = doc.data();
                            this.collectiveKitchenJulOverallPerformance(); 

                            this.communityMealsJul();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - collectiveKitchen");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });

                },
                communityMealsJul(){
                    //        COMMUNITY MEALS | MAY
                    var doccommunityMealsAprRef = db.collection("communityMeals").doc("july");

                    doccommunityMealsAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.communityMealsJulContents = doc.data();
                            this.communityMealsJulOverallPerformance();

                            this.pinsJul();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - communityMeals");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });

                },
                pinsJul(){
                    //    PINS | MAY
                    var docpinsAprRef = db.collection("pins").doc("july");

                    docpinsAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.pinsJulContents = doc.data();
                            this.pinsJulOverallPerformance();

                            this.yesICanJul();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - pins");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                yesICanJul(){
                    //    Yes I Can | MAY
                    var docyesICanAprRef = db.collection("yesICan").doc("july");

                    docyesICanAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.yesICanJulContents = doc.data();
                            this.yesICanJulOverallPerformance();

                            this.crisisInterventionJul();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - yesICan");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                crisisInterventionJul(){
                    //    CRISIS INTERVENTION | MAY
                    var doccrisisInterventionAprRef = db.collection("crisisIntervention").doc("july");

                    doccrisisInterventionAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.crisisInterventionJulContents = doc.data();
                            this.crisisInterventionJulOverallPerformance();

                            this.youthPREducationJul();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - crisisIntervention");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                youthPREducationJul(){
                    //    YouthPR Education | MAY
                    var docyouthPREducationAprRef = db.collection("youthPREducation").doc("july");

                    docyouthPREducationAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.youthPREducationJulContents = doc.data();
                            this.youthPREducationJulOverallPerformance();

                            this.youthPRSportJul();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - youthPREducation");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                youthPRSportJul(){
                    //    YouthPR Sport | MAY
                    var docyouthPRSportAprRef = db.collection("youthPRSport").doc("july");

                    docyouthPRSportAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.youthPRSportJulContents = doc.data();
                            this.youthPRSportJulOverallPerformance();

                            this.youthPRViolinJul();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - youthPRSport");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                youthPRViolinJul(){
                    //    YouthPR Violin | MAY
                    var docyouthPRViolinAprRef = db.collection("youthPRViolin").doc("july");

                    docyouthPRViolinAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.youthPRViolinJulContents = doc.data();
                            this.youthPRViolinJulOverallPerformance();

                            this.communityDevelopmentJul();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - youthPRViolin");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                communityDevelopmentJul(){
                    //    COMMUNITY DEVELOPMENT | MAY
                    var doccommunityDevelopmentAprRef = db.collection("communityDevelopment").doc("july");

                    doccommunityDevelopmentAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.communityDevelopmentJulContents = doc.data();
                            this.communityDevelopmentJulOverallPerformance();
                            
                            console.log("denemem: "+ this.foodbankJulContents.kpi1 + " baby: " + this.babyCupboardJulContents.kpi1 + 
                            " GIK: " + this.gikJulContents.kpi1 + " CD: " + this.youthPRViolinJulContents.kpi1);
                            this.generalJulOverallPerformance();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - communityDevelopment");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },

            gikJulOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = ((getRealValue(this.gikJulContents.kpi1)*2) + getRealValue(this.gikJulContents.kpi2) + getRealValue(this.gikJulContents.kpi3) + (getRealValue(this.gikJulContents.kpi4)*2))/6;
            this.gikJulContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 29.5 * 100;
            console.log("GIK Overall performance = " + this.gikJulContents.overallPerformance);             
            return this.gikJulContents.overallPerformance;
            },
            foodbankJulOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = ((getRealValue(this.foodbankJulContents.kpi1)*2) + getRealValue(this.foodbankJulContents.kpi2) + getRealValue(this.foodbankJulContents.kpi3) + (getRealValue(this.foodbankJulContents.kpi4)*2) + getRealValue(this.foodbankJulContents.kpi5) + getRealValue(this.foodbankJulContents.kpi6))/8;
            this.foodbankJulContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 287.09375 * 100;
            console.log("Foodbank Overall performance = " + this.foodbankJulContents.overallPerformance); 
            return this.foodbankJulContents.overallPerformance;
            },
            babyCupboardJulOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = ((getRealValue(this.babyCupboardJulContents.kpi1)*2) + getRealValue(this.babyCupboardJulContents.kpi2) + getRealValue(this.babyCupboardJulContents.kpi3) + (getRealValue(this.babyCupboardJulContents.kpi4)*2))/6;
            this.babyCupboardJulContents.overallPerformance = (getRealValue(baseOverallPerformanceGIK) / 38.125) * 100;
            console.log("Baby Cupboard Overall performance = " + this.babyCupboardJulContents.overallPerformance); 
            return this.babyCupboardJulContents.overallPerformance;
            },
            charity13JulOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = ((getRealValue(this.charity13JulContents.kpi1)*2) + getRealValue(this.charity13JulContents.kpi2) + getRealValue(this.charity13JulContents.kpi3) + getRealValue(this.charity13JulContents.kpi4) + (getRealValue(this.charity13JulContents.kpi5)*2))/7;
            this.charity13JulContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 2.19047619 * 100;
            console.log("charITy13 Overall performance = " + this.charity13JulContents.overallPerformance); 
            return this.charity13JulContents.overallPerformance;
            },
            entrepreneurshipJulOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.entrepreneurshipJulContents.kpi1) + getRealValue(this.entrepreneurshipJulContents.kpi2) + getRealValue(this.entrepreneurshipJulContents.kpi3) + getRealValue(this.entrepreneurshipJulContents.kpi4))/4;
            this.entrepreneurshipJulContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 1217.967792 * 100;
            console.log("entrepreneurship Overall performance = " + this.entrepreneurshipJulContents.overallPerformance); 
            return this.entrepreneurshipJulContents.overallPerformance;
            },
            employmentSkillsJulOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.employmentSkillsJulContents.kpi1) + getRealValue(this.employmentSkillsJulContents.kpi2) + getRealValue(this.employmentSkillsJulContents.kpi3) + getRealValue(this.employmentSkillsJulContents.kpi4))/4;
            this.employmentSkillsJulContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 45.83333333 * 100;
            console.log("employmentSkills Overall performance = " + this.employmentSkillsJulContents.overallPerformance); 
            return this.employmentSkillsJulContents.overallPerformance;
            },
            socialHarvestJulOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.socialHarvestJulContents.kpi1) + getRealValue(this.socialHarvestJulContents.kpi2) + getRealValue(this.socialHarvestJulContents.kpi3) + getRealValue(this.socialHarvestJulContents.kpi4) + getRealValue(this.socialHarvestJulContents.kpi5))/5;
            this.socialHarvestJulContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 29.7409 * 100;
            console.log("socialHarvest Overall performance = " + this.socialHarvestJulContents.overallPerformance); 
            return this.socialHarvestJulContents.overallPerformance;
            },
            marketMobileJulOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.marketMobileJulContents.kpi1) + getRealValue(this.marketMobileJulContents.kpi2) + (getRealValue(this.marketMobileJulContents.kpi3)*2) + (getRealValue(this.marketMobileJulContents.kpi4)*2))/6;
            this.marketMobileJulContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 149.9444444 * 100;
            console.log("marketMobile Overall performance = " + this.marketMobileJulContents.overallPerformance); 
            return this.marketMobileJulContents.overallPerformance;
            },
            clothespinJulOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.clothespinJulContents.kpi1) + getRealValue(this.clothespinJulContents.kpi2) + getRealValue(this.clothespinJulContents.kpi3))/3;
            this.clothespinJulContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 144 * 100;
            console.log("clothespin Overall performance = " + this.clothespinJulContents.overallPerformance); 
            return this.clothespinJulContents.overallPerformance;
            },
            gfbJulOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.gfbJulContents.kpi1) + getRealValue(this.gfbJulContents.kpi2) + getRealValue(this.gfbJulContents.kpi3))/3;
            this.gfbJulContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 274.1111111 * 100;
            console.log("gfb Overall performance = " + this.gfbJulContents.overallPerformance); 
            return this.gfbJulContents.overallPerformance;
            },
            overbrookSPJulOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.overbrookSPJulContents.kpi1) + getRealValue(this.overbrookSPJulContents.kpi2))/2;
            this.overbrookSPJulContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 101.75 * 100;
            console.log("overbrookSP Overall performance = " + this.overbrookSPJulContents.overallPerformance); 
            return this.overbrookSPJulContents.overallPerformance;
            },
            collectiveKitchenJulOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.collectiveKitchenJulContents.kpi1) + getRealValue(this.collectiveKitchenJulContents.kpi2) + getRealValue(this.collectiveKitchenJulContents.kpi3) + getRealValue(this.collectiveKitchenJulContents.kpi4))/4;
            this.collectiveKitchenJulContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 5.75 * 100;
            console.log("collectiveKitchen Overall performance = " + this.collectiveKitchenJulContents.overallPerformance); 
            return this.collectiveKitchenJulContents.overallPerformance;
            },
            communityMealsJulOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.communityMealsJulContents.kpi1) + getRealValue(this.communityMealsJulContents.kpi2) + getRealValue(this.communityMealsJulContents.kpi3) + (getRealValue(this.communityMealsJulContents.kpi4)*2))/5;
            this.communityMealsJulContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 290.2666667 * 100;
            console.log("communityMeals Overall performance = " + this.communityMealsJulContents.overallPerformance); 
            return this.communityMealsJulContents.overallPerformance;
            },
            pinsJulOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.pinsJulContents.kpi1) + getRealValue(this.pinsJulContents.kpi2) + getRealValue(this.pinsJulContents.kpi3))/3;
            this.pinsJulContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 10.33333333 * 100;
            console.log("pins Overall performance = " + this.pinsJulContents.overallPerformance); 
            return this.pinsJulContents.overallPerformance;
            },
            youthPREducationJulOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.youthPREducationJulContents.kpi1) + getRealValue(this.youthPREducationJulContents.kpi2) + getRealValue(this.youthPREducationJulContents.kpi3) + getRealValue(this.youthPREducationJulContents.kpi4) + (getRealValue(this.youthPREducationJulContents.kpi5)*2))/6;
            this.youthPREducationJulContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 13 * 100;
            console.log("youthPREducation Overall performance = " + this.youthPREducationJulContents.overallPerformance); 
            return this.youthPREducationJulContents.overallPerformance;
            },
            youthPRSportJulOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.youthPRSportJulContents.kpi1) + getRealValue(this.youthPRSportJulContents.kpi2) + getRealValue(this.youthPRSportJulContents.kpi3) + getRealValue(this.youthPRSportJulContents.kpi4) + (getRealValue(this.youthPRSportJulContents.kpi5)*2))/6;
            this.youthPRSportJulContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 1.5 * 100;
            console.log("youthPRSport Overall performance = " + this.youthPRSportJulContents.overallPerformance); 
            return this.youthPRSportJulContents.overallPerformance;
            },
            youthPRViolinJulOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.youthPRViolinJulContents.kpi1) + getRealValue(this.youthPRViolinJulContents.kpi2) + getRealValue(this.youthPRViolinJulContents.kpi3) + getRealValue(this.youthPRViolinJulContents.kpi4) + (getRealValue(this.youthPRViolinJulContents.kpi5)*2))/6;
            this.youthPRViolinJulContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 5.388888889 * 100;
            console.log("youthPRViolin Overall performance = " + this.youthPRViolinJulContents.overallPerformance); 
            return this.youthPRViolinJulContents.overallPerformance;
            },
            yesICanJulOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.yesICanJulContents.kpi1) + getRealValue(this.yesICanJulContents.kpi2) + getRealValue(this.yesICanJulContents.kpi3))/3;
            this.yesICanJulContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 11.33333333 * 100;
            console.log("yesICan Overall performance = " + this.yesICanJulContents.overallPerformance); 
            return this.yesICanJulContents.overallPerformance;
            },
            crisisInterventionJulOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.crisisInterventionJulContents.kpi1) + getRealValue(this.crisisInterventionJulContents.kpi2))/2;
            this.crisisInterventionJulContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 104 * 100;
            console.log("crisisIntervention Overall performance = " + this.crisisInterventionJulContents.overallPerformance); 
            return this.crisisInterventionJulContents.overallPerformance;
            },
            communityDevelopmentJulOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.communityDevelopmentJulContents.kpi1) + getRealValue(this.communityDevelopmentJulContents.kpi2) + getRealValue(this.communityDevelopmentJulContents.kpi3))/3;
            this.communityDevelopmentJulContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 77.22222222 * 100;
            console.log("communityDevelopment Overall performance = " + this.communityDevelopmentJulContents.overallPerformance); 
            return this.communityDevelopmentJulContents.overallPerformance;
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
            totalExpenseMar(){
            const getRealValue = (val) => +val || val;
            return this.generalDashboardMarContents.expenses = getRealValue(this.generalDashboardMarContents.expAdmin) + 
            getRealValue(this.generalDashboardMarContents.expPRfftnc) + getRealValue(this.generalDashboardMarContents.expIncubator) + 
            getRealValue(this.generalDashboardMarContents.expAP) + getRealValue(this.generalDashboardMarContents.expGFB) + 
            getRealValue(this.generalDashboardMarContents.expGIK) + getRealValue(this.generalDashboardMarContents.expSH) + 
            getRealValue(this.generalDashboardMarContents.expCYFlactation) + getRealValue(this.generalDashboardMarContents.expCPO) + 
            getRealValue(this.generalDashboardMarContents.expSeniorsProject) + getRealValue(this.generalDashboardMarContents.expCSDmcConnell) + 
            getRealValue(this.generalDashboardMarContents.expOthers)
            },
            totalExpenseApr(){
            const getRealValue = (val) => +val || val;
            return this.generalDashboardAprContents.expenses = getRealValue(this.generalDashboardAprContents.expAdmin) + 
            getRealValue(this.generalDashboardAprContents.expPRfftnc) + getRealValue(this.generalDashboardAprContents.expIncubator) + 
            getRealValue(this.generalDashboardAprContents.expAP) + getRealValue(this.generalDashboardAprContents.expGFB) + 
            getRealValue(this.generalDashboardAprContents.expGIK) + getRealValue(this.generalDashboardAprContents.expSH) + 
            getRealValue(this.generalDashboardAprContents.expCYFlactation) + getRealValue(this.generalDashboardAprContents.expCPO) + 
            getRealValue(this.generalDashboardAprContents.expSeniorsProject) + getRealValue(this.generalDashboardAprContents.expCSDmcConnell) + 
            getRealValue(this.generalDashboardAprContents.expOthers)
            },
            totalExpenseMay(){
            const getRealValue = (val) => +val || val;
            return this.generalDashboardMayContents.expenses = getRealValue(this.generalDashboardMayContents.expAdmin) + 
            getRealValue(this.generalDashboardMayContents.expPRfftnc) + getRealValue(this.generalDashboardMayContents.expIncubator) + 
            getRealValue(this.generalDashboardMayContents.expAP) + getRealValue(this.generalDashboardMayContents.expGFB) + 
            getRealValue(this.generalDashboardMayContents.expGIK) + getRealValue(this.generalDashboardMayContents.expSH) + 
            getRealValue(this.generalDashboardMayContents.expCYFlactation) + getRealValue(this.generalDashboardMayContents.expCPO) + 
            getRealValue(this.generalDashboardMayContents.expSeniorsProject) + getRealValue(this.generalDashboardMayContents.expCSDmcConnell) + 
            getRealValue(this.generalDashboardMayContents.expOthers)
            },
            totalExpenseJun(){
            const getRealValue = (val) => +val || val;
            return this.generalDashboardJunContents.expenses = getRealValue(this.generalDashboardJunContents.expAdmin) + 
            getRealValue(this.generalDashboardJunContents.expPRfftnc) + getRealValue(this.generalDashboardJunContents.expIncubator) + 
            getRealValue(this.generalDashboardJunContents.expAP) + getRealValue(this.generalDashboardJunContents.expGFB) + 
            getRealValue(this.generalDashboardJunContents.expGIK) + getRealValue(this.generalDashboardJunContents.expSH) + 
            getRealValue(this.generalDashboardJunContents.expCYFlactation) + getRealValue(this.generalDashboardJunContents.expCPO) + 
            getRealValue(this.generalDashboardJunContents.expSeniorsProject) + getRealValue(this.generalDashboardJunContents.expCSDmcConnell) + 
            getRealValue(this.generalDashboardJunContents.expOthers)
            },
            totalExpenseJul(){
            const getRealValue = (val) => +val || val;
            return this.generalDashboardJulContents.expenses = getRealValue(this.generalDashboardJulContents.expAdmin) + 
            getRealValue(this.generalDashboardJulContents.expPRfftnc) + getRealValue(this.generalDashboardJulContents.expIncubator) + 
            getRealValue(this.generalDashboardJulContents.expAP) + getRealValue(this.generalDashboardJulContents.expGFB) + 
            getRealValue(this.generalDashboardJulContents.expGIK) + getRealValue(this.generalDashboardJulContents.expSH) + 
            getRealValue(this.generalDashboardJulContents.expCYFlactation) + getRealValue(this.generalDashboardJulContents.expCPO) + 
            getRealValue(this.generalDashboardJulContents.expSeniorsProject) + getRealValue(this.generalDashboardJulContents.expCSDmcConnell) + 
            getRealValue(this.generalDashboardJulContents.expOthers)
            },
            cumulativeBudgetUsageJul(){
            const getRealValue = (val) => +val || val;
            return this.generalDashboardJulContents.budgetUsage = (((getRealValue(this.generalDashboardJulContents.expenses) + getRealValue(this.generalDashboardJunContents.expenses) + getRealValue(this.generalDashboardMayContents.expenses) + getRealValue(this.generalDashboardAprContents.expenses) + getRealValue(this.generalDashboardMarContents.expenses) + getRealValue(this.generalDashboardFebContents.expenses) + getRealValue(this.generalDashboardJanContents.expenses)) / getRealValue(this.generalDashboardAprContents.actualBudget))*100).toFixed(2)
            },
            totalCumulativeExpenseJul(){
            const getRealValue = (val) => +val || val;
            this.generalDashboardJulContents.cumulativeexpAdmin = (getRealValue(this.generalDashboardJulContents.expAdmin) + getRealValue(this.generalDashboardJunContents.expAdmin) + getRealValue(this.generalDashboardMayContents.expAdmin) + getRealValue(this.generalDashboardAprContents.expAdmin) + getRealValue(this.generalDashboardMarContents.expAdmin) + getRealValue(this.generalDashboardFebContents.expAdmin) + getRealValue(this.generalDashboardJanContents.expAdmin)).toFixed(2)
            this.generalDashboardJulContents.cumulativeexpPRfftnc = (getRealValue(this.generalDashboardJulContents.expPRfftnc) + getRealValue(this.generalDashboardJunContents.expPRfftnc) + getRealValue(this.generalDashboardMayContents.expPRfftnc) + getRealValue(this.generalDashboardAprContents.expPRfftnc) + getRealValue(this.generalDashboardMarContents.expPRfftnc) + getRealValue(this.generalDashboardFebContents.expPRfftnc) + getRealValue(this.generalDashboardJanContents.expPRfftnc)).toFixed(2)
            this.generalDashboardJulContents.cumulativeexpIncubator = (getRealValue(this.generalDashboardJulContents.expIncubator) + getRealValue(this.generalDashboardJunContents.expIncubator) + getRealValue(this.generalDashboardMayContents.expIncubator) + getRealValue(this.generalDashboardAprContents.expIncubator) + getRealValue(this.generalDashboardMarContents.expIncubator) + getRealValue(this.generalDashboardFebContents.expIncubator) + getRealValue(this.generalDashboardJanContents.expIncubator)).toFixed(2)
            this.generalDashboardJulContents.cumulativeexpAP = (getRealValue(this.generalDashboardJulContents.expAP) + getRealValue(this.generalDashboardJunContents.expAP) + getRealValue(this.generalDashboardMayContents.expAP) + getRealValue(this.generalDashboardAprContents.expAP) + getRealValue(this.generalDashboardMarContents.expAP) + getRealValue(this.generalDashboardFebContents.expAP) + getRealValue(this.generalDashboardJanContents.expAP)).toFixed(2)
            this.generalDashboardJulContents.cumulativeexpGFB = (getRealValue(this.generalDashboardJulContents.expGFB) + getRealValue(this.generalDashboardJunContents.expGFB) + getRealValue(this.generalDashboardMayContents.expGFB) + getRealValue(this.generalDashboardAprContents.expGFB) + getRealValue(this.generalDashboardMarContents.expGFB) + getRealValue(this.generalDashboardFebContents.expGFB) + getRealValue(this.generalDashboardJanContents.expGFB)).toFixed(2)
            this.generalDashboardJulContents.cumulativeexpGIK = (getRealValue(this.generalDashboardJulContents.expGIK) + getRealValue(this.generalDashboardJunContents.expGIK) + getRealValue(this.generalDashboardMayContents.expGIK) + getRealValue(this.generalDashboardAprContents.expGIK) + getRealValue(this.generalDashboardMarContents.expGIK) + getRealValue(this.generalDashboardFebContents.expGIK) + getRealValue(this.generalDashboardJanContents.expGIK)).toFixed(2)
            this.generalDashboardJulContents.cumulativeexpSH = (getRealValue(this.generalDashboardJulContents.expSH) + getRealValue(this.generalDashboardJunContents.expSH) + getRealValue(this.generalDashboardMayContents.expSH) + getRealValue(this.generalDashboardAprContents.expSH) + getRealValue(this.generalDashboardMarContents.expSH) + getRealValue(this.generalDashboardFebContents.expSH) + getRealValue(this.generalDashboardJanContents.expSH)).toFixed(2)
            this.generalDashboardJulContents.cumulativeexpCYFlactation = (getRealValue(this.generalDashboardJulContents.expCYFlactation) + getRealValue(this.generalDashboardJunContents.expCYFlactation) + getRealValue(this.generalDashboardMayContents.expCYFlactation) + getRealValue(this.generalDashboardAprContents.expCYFlactation) + getRealValue(this.generalDashboardMarContents.expCYFlactation) + getRealValue(this.generalDashboardFebContents.expCYFlactation) + getRealValue(this.generalDashboardJanContents.expCYFlactation)).toFixed(2)
            this.generalDashboardJulContents.cumulativeexpCPO = (getRealValue(this.generalDashboardJulContents.expCPO) + getRealValue(this.generalDashboardJunContents.expCPO) + getRealValue(this.generalDashboardMayContents.expCPO) + getRealValue(this.generalDashboardAprContents.expCPO) + getRealValue(this.generalDashboardMarContents.expCPO) + getRealValue(this.generalDashboardFebContents.expCPO) + getRealValue(this.generalDashboardJanContents.expCPO)).toFixed(2)
            this.generalDashboardJulContents.cumulativeexpSeniorsProject = (getRealValue(this.generalDashboardJulContents.expSeniorsProject) + getRealValue(this.generalDashboardJunContents.expSeniorsProject) + getRealValue(this.generalDashboardMayContents.expSeniorsProject) + getRealValue(this.generalDashboardAprContents.expSeniorsProject) + getRealValue(this.generalDashboardMarContents.expSeniorsProject) + getRealValue(this.generalDashboardFebContents.expSeniorsProject) + getRealValue(this.generalDashboardJanContents.expSeniorsProject)).toFixed(2)
            this.generalDashboardJulContents.cumulativeexpCSDmcConnell = (getRealValue(this.generalDashboardJulContents.expCSDmcConnell) + getRealValue(this.generalDashboardJunContents.expCSDmcConnell) + getRealValue(this.generalDashboardMayContents.expCSDmcConnell) + getRealValue(this.generalDashboardAprContents.expCSDmcConnell) + getRealValue(this.generalDashboardMarContents.expCSDmcConnell) + getRealValue(this.generalDashboardFebContents.expCSDmcConnell) + getRealValue(this.generalDashboardJanContents.expCSDmcConnell)).toFixed(2)
            this.generalDashboardJulContents.cumulativeexpOthers = (getRealValue(this.generalDashboardJulContents.expOthers) + getRealValue(this.generalDashboardJunContents.expOthers) + getRealValue(this.generalDashboardMayContents.expOthers) + getRealValue(this.generalDashboardAprContents.expOthers) + getRealValue(this.generalDashboardMarContents.expOthers) + getRealValue(this.generalDashboardFebContents.expOthers) + getRealValue(this.generalDashboardJanContents.expOthers)).toFixed(2)
            },
            
            generalJulOverallPerformance(){
                const getRealValue = (val) => +val || val;
                var baseFebOverallPerformanceGeneralDashboard = ((2 * getRealValue(this.foodbankJulContents.overallPerformance)) + getRealValue(this.babyCupboardJulContents.overallPerformance) + 
                (1.25 * getRealValue(this.gikJulContents.overallPerformance)) + (0.8 * getRealValue(this.charity13JulContents.overallPerformance)) + getRealValue(this.entrepreneurshipJulContents.overallPerformance) + 
                getRealValue(this.employmentSkillsJulContents.overallPerformance) + (0.8 * getRealValue(this.socialHarvestJulContents.overallPerformance)) + (0.8 * getRealValue(this.marketMobileJulContents.overallPerformance)) + 
                (0.8 * getRealValue(this.gfbJulContents.overallPerformance)) + (0.8 * getRealValue(this.collectiveKitchenJulContents.overallPerformance)) + (0.8 * getRealValue(this.communityMealsJulContents.overallPerformance)) + 
                (1.5 * getRealValue(this.clothespinJulContents.overallPerformance)) + (2 * getRealValue(this.crisisInterventionJulContents.overallPerformance)) + (0.8 * getRealValue(this.yesICanJulContents.overallPerformance)) + 
                getRealValue(this.youthPREducationJulContents.overallPerformance) + getRealValue(this.youthPRSportJulContents.overallPerformance) + getRealValue(this.youthPRViolinJulContents.overallPerformance) + 
                getRealValue(this.pinsJulContents.overallPerformance) + getRealValue(this.overbrookSPJulContents.overallPerformance) + getRealValue(this.communityDevelopmentJulContents.overallPerformance));
                this.generalDashboardJulContents.mainOverallPerformance = (getRealValue(baseFebOverallPerformanceGeneralDashboard) / 21.35).toFixed(2)
                console.log("General Overall Performance: " + this.generalDashboardJulContents.mainOverallPerformance);
                return this.generalDashboardJulContents.mainOverallPerformance
            },

        },
        created(){
          this.readData()
        }

    }
</script>
