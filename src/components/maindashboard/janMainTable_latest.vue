<template>
    <div class="row q-col-gutter-sm q-ma-xs">
        <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">  <!--Number of Total Programs-->
                <q-card>
                  <q-card-section :class="$q.dark.isActive?'blue_dark':'bg-blue-8'" class="text-white">
                    <div class="row">
                      <div class="col-10">
                        <div class="text-h6">Number of Total Programs</div>
                        <div class="text-h5">{{generalDashboardJanContents.totalPrograms}}</div>
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
                        <div class="text-h5">{{generalDashboardJanContents.activePrograms}}</div>
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
                        <div class="text-h5">{{generalDashboardJanContents.projectsGoingOn}}</div>
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
                        <div class="text-h5">{{generalDashboardJanContents.totalUniqueVolunteers}} / {{generalDashboardJanContents.totalVolunteerHours}}</div>
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
                        :color="(foodbankJanContents.overallPerformance == null)?'grey-2':(foodbankJanContents.overallPerformance >= '0' && foodbankJanContents.overallPerformance <= '40')?'red':(foodbankJanContents.overallPerformance > '40' && foodbankJanContents.overallPerformance <= '60')?'orange':(foodbankJanContents.overallPerformance > '60' && foodbankJanContents.overallPerformance < '90')?'yellow-7':(foodbankJanContents.overallPerformance >= '90' && foodbankJanContents.overallPerformance < '120')?'green':(foodbankJanContents.overallPerformance >= '120'?'blue':'grey-2')"
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
                        :color="(babyCupboardJanContents.overallPerformance == null)?'grey-2':(babyCupboardJanContents.overallPerformance >= '0' && babyCupboardJanContents.overallPerformance <= '40')?'red':(babyCupboardJanContents.overallPerformance > '40' && babyCupboardJanContents.overallPerformance <= '60')?'orange':(babyCupboardJanContents.overallPerformance > '60' && babyCupboardJanContents.overallPerformance < '90')?'yellow-7':(babyCupboardJanContents.overallPerformance >= '90' && babyCupboardJanContents.overallPerformance < '120')?'green':(babyCupboardJanContents.overallPerformance >= '120'?'blue':'grey-2')"

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
                        :color="(gikJanContents.overallPerformance == null)?'grey-2':(gikJanContents.overallPerformance >= '0' && gikJanContents.overallPerformance <= '40')?'red':(gikJanContents.overallPerformance > '40' && gikJanContents.overallPerformance <= '60')?'orange':(gikJanContents.overallPerformance > '60' && gikJanContents.overallPerformance < '90')?'yellow-7':(gikJanContents.overallPerformance >= '90' && gikJanContents.overallPerformance < '120')?'green':(gikJanContents.overallPerformance >= '120'?'blue':'grey-2')"
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
                        :color="(charity13JanContents.overallPerformance == null)?'grey-2':(charity13JanContents.overallPerformance >= '0' && charity13JanContents.overallPerformance <= '40')?'red':(charity13JanContents.overallPerformance > '40' && charity13JanContents.overallPerformance <= '60')?'orange':(charity13JanContents.overallPerformance > '60' && charity13JanContents.overallPerformance < '90')?'yellow-7':(charity13JanContents.overallPerformance >= '90' && charity13JanContents.overallPerformance < '120')?'green':(charity13JanContents.overallPerformance >= '120'?'blue':'grey-2')"
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
                        :color="(entrepreneurshipJanContents.overallPerformance == null)?'grey-2':(entrepreneurshipJanContents.overallPerformance >= '0' && entrepreneurshipJanContents.overallPerformance <= '40')?'red':(entrepreneurshipJanContents.overallPerformance > '40' && entrepreneurshipJanContents.overallPerformance <= '60')?'orange':(entrepreneurshipJanContents.overallPerformance > '60' && entrepreneurshipJanContents.overallPerformance < '90')?'yellow-7':(entrepreneurshipJanContents.overallPerformance >= '90' && entrepreneurshipJanContents.overallPerformance < '120')?'green':(entrepreneurshipJanContents.overallPerformance >= '120'?'blue':'grey-2')"
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
                        :color="(employmentSkillsJanContents.overallPerformance == null)?'grey-2':(employmentSkillsJanContents.overallPerformance >= '0' && employmentSkillsJanContents.overallPerformance <= '40')?'red':(employmentSkillsJanContents.overallPerformance > '40' && employmentSkillsJanContents.overallPerformance <= '60')?'orange':(employmentSkillsJanContents.overallPerformance > '60' && employmentSkillsJanContents.overallPerformance < '90')?'yellow-7':(employmentSkillsJanContents.overallPerformance >= '90' && employmentSkillsJanContents.overallPerformance < '120')?'green':(employmentSkillsJanContents.overallPerformance >= '120'?'blue':'grey-2')"
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
                        :color="(socialHarvestJanContents.overallPerformance == null)?'grey-2':(socialHarvestJanContents.overallPerformance >= '0' && socialHarvestJanContents.overallPerformance <= '40')?'red':(socialHarvestJanContents.overallPerformance > '40' && socialHarvestJanContents.overallPerformance <= '60')?'orange':(socialHarvestJanContents.overallPerformance > '60' && socialHarvestJanContents.overallPerformance < '90')?'yellow-7':(socialHarvestJanContents.overallPerformance >= '90' && socialHarvestJanContents.overallPerformance < '120')?'green':(socialHarvestJanContents.overallPerformance >= '120'?'blue':'grey-2')"
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
                        :color="(marketMobileJanContents.overallPerformance == null)?'grey-2':(marketMobileJanContents.overallPerformance >= '0' && marketMobileJanContents.overallPerformance <= '40')?'red':(marketMobileJanContents.overallPerformance > '40' && marketMobileJanContents.overallPerformance <= '60')?'orange':(marketMobileJanContents.overallPerformance > '60' && marketMobileJanContents.overallPerformance < '90')?'yellow-7':(marketMobileJanContents.overallPerformance >= '90' && marketMobileJanContents.overallPerformance < '120')?'green':(marketMobileJanContents.overallPerformance >= '120'?'blue':'grey-2')"
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
                        :color="(clothespinJanContents.overallPerformance == null)?'grey-2':(clothespinJanContents.overallPerformance >= '0' && clothespinJanContents.overallPerformance <= '40')?'red':(clothespinJanContents.overallPerformance > '40' && clothespinJanContents.overallPerformance <= '60')?'orange':(clothespinJanContents.overallPerformance > '60' && clothespinJanContents.overallPerformance < '90')?'yellow-7':(clothespinJanContents.overallPerformance >= '90' && clothespinJanContents.overallPerformance < '120')?'green':(clothespinJanContents.overallPerformance >= '120'?'blue':'grey-2')"
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
                        :color="(gfbJanContents.overallPerformance == null)?'grey-2':(gfbJanContents.overallPerformance >= '0' && gfbJanContents.overallPerformance <= '40')?'red':(gfbJanContents.overallPerformance > '40' && gfbJanContents.overallPerformance <= '60')?'orange':(gfbJanContents.overallPerformance > '60' && gfbJanContents.overallPerformance < '90')?'yellow-7':(gfbJanContents.overallPerformance >= '90' && gfbJanContents.overallPerformance < '120')?'green':(gfbJanContents.overallPerformance >= '120'?'blue':'grey-2')"
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
                        :color="(overbrookSPJanContents.overallPerformance == null)?'grey-2':(overbrookSPJanContents.overallPerformance >= '0' && overbrookSPJanContents.overallPerformance <= '40')?'red':(overbrookSPJanContents.overallPerformance > '40' && overbrookSPJanContents.overallPerformance <= '60')?'orange':(overbrookSPJanContents.overallPerformance > '60' && overbrookSPJanContents.overallPerformance < '90')?'yellow-7':(overbrookSPJanContents.overallPerformance >= '90' && overbrookSPJanContents.overallPerformance < '120')?'green':(overbrookSPJanContents.overallPerformance >= '120'?'blue':'grey-2')"
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
                            :color="(collectiveKitchenJanContents.overallPerformance == null)?'grey-2':(collectiveKitchenJanContents.overallPerformance >= '0' && collectiveKitchenJanContents.overallPerformance <= '40')?'red':(collectiveKitchenJanContents.overallPerformance > '40' && collectiveKitchenJanContents.overallPerformance <= '60')?'orange':(collectiveKitchenJanContents.overallPerformance > '60' && collectiveKitchenJanContents.overallPerformance < '90')?'yellow-7':(collectiveKitchenJanContents.overallPerformance >= '90' && collectiveKitchenJanContents.overallPerformance < '120')?'green':(collectiveKitchenJanContents.overallPerformance >= '120'?'blue':'grey-2')"
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
                            :color="(communityMealsJanContents.overallPerformance == null)?'grey-2':(communityMealsJanContents.overallPerformance >= '0' && communityMealsJanContents.overallPerformance <= '40')?'red':(communityMealsJanContents.overallPerformance > '40' && communityMealsJanContents.overallPerformance <= '60')?'orange':(communityMealsJanContents.overallPerformance > '60' && communityMealsJanContents.overallPerformance < '90')?'yellow-7':(communityMealsJanContents.overallPerformance >= '90' && communityMealsJanContents.overallPerformance < '120')?'green':(communityMealsJanContents.overallPerformance >= '120'?'blue':'grey-2')"
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
                            :color="(pinsJanContents.overallPerformance == null)?'grey-2':(pinsJanContents.overallPerformance >= '0' && pinsJanContents.overallPerformance <= '40')?'red':(pinsJanContents.overallPerformance > '40' && pinsJanContents.overallPerformance <= '60')?'orange':(pinsJanContents.overallPerformance > '60' && pinsJanContents.overallPerformance < '90')?'yellow-7':(pinsJanContents.overallPerformance >= '90' && pinsJanContents.overallPerformance < '120')?'green':(pinsJanContents.overallPerformance >= '120'?'blue':'grey-2')"
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
                        :color="(yesICanJanContents.overallPerformance == null)?'grey-2':(yesICanJanContents.overallPerformance >= '0' && yesICanJanContents.overallPerformance <= '40')?'red':(yesICanJanContents.overallPerformance > '40' && yesICanJanContents.overallPerformance <= '60')?'orange':(yesICanJanContents.overallPerformance > '60' && yesICanJanContents.overallPerformance < '90')?'yellow-7':(yesICanJanContents.overallPerformance >= '90' && yesICanJanContents.overallPerformance < '120')?'green':(yesICanJanContents.overallPerformance >= '120'?'blue':'grey-2')"
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
                            :color="(crisisInterventionJanContents.overallPerformance == null)?'grey-2':(crisisInterventionJanContents.overallPerformance >= '0' && crisisInterventionJanContents.overallPerformance <= '40')?'red':(crisisInterventionJanContents.overallPerformance > '40' && crisisInterventionJanContents.overallPerformance <= '60')?'orange':(crisisInterventionJanContents.overallPerformance > '60' && crisisInterventionJanContents.overallPerformance < '90')?'yellow-7':(crisisInterventionJanContents.overallPerformance >= '90' && crisisInterventionJanContents.overallPerformance < '120')?'green':(crisisInterventionJanContents.overallPerformance >= '120'?'blue':'grey-2')"
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
                            :color="(youthPREducationJanContents.overallPerformance == null)?'grey-2':(youthPREducationJanContents.overallPerformance >= '0' && youthPREducationJanContents.overallPerformance <= '40')?'red':(youthPREducationJanContents.overallPerformance > '40' && youthPREducationJanContents.overallPerformance <= '60')?'orange':(youthPREducationJanContents.overallPerformance > '60' && youthPREducationJanContents.overallPerformance < '90')?'yellow-7':(youthPREducationJanContents.overallPerformance >= '90' && youthPREducationJanContents.overallPerformance < '120')?'green':(youthPREducationJanContents.overallPerformance >= '120'?'blue':'grey-2')"
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
                            :color="(youthPRSportJanContents.overallPerformance == null)?'grey-2':(youthPRSportJanContents.overallPerformance >= '0' && youthPRSportJanContents.overallPerformance <= '40')?'red':(youthPRSportJanContents.overallPerformance > '40' && youthPRSportJanContents.overallPerformance <= '60')?'orange':(youthPRSportJanContents.overallPerformance > '60' && youthPRSportJanContents.overallPerformance < '90')?'yellow-7':(youthPRSportJanContents.overallPerformance >= '90' && youthPRSportJanContents.overallPerformance < '120')?'green':(youthPRSportJanContents.overallPerformance >= '120'?'blue':'grey-2')"
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
                            :color="(youthPRViolinJanContents.overallPerformance == null)?'grey-2':(youthPRViolinJanContents.overallPerformance >= '0' && youthPRViolinJanContents.overallPerformance <= '40')?'red':(youthPRViolinJanContents.overallPerformance > '40' && youthPRViolinJanContents.overallPerformance <= '60')?'orange':(youthPRViolinJanContents.overallPerformance > '60' && youthPRViolinJanContents.overallPerformance < '90')?'yellow-7':(youthPRViolinJanContents.overallPerformance >= '90' && youthPRViolinJanContents.overallPerformance < '120')?'green':(youthPRViolinJanContents.overallPerformance >= '120'?'blue':'grey-2')"
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
                            :color="(communityDevelopmentJanContents.overallPerformance == null)?'grey-2':(communityDevelopmentJanContents.overallPerformance >= '0' && communityDevelopmentJanContents.overallPerformance <= '40')?'red':(communityDevelopmentJanContents.overallPerformance > '40' && communityDevelopmentJanContents.overallPerformance <= '60')?'orange':(communityDevelopmentJanContents.overallPerformance > '60' && communityDevelopmentJanContents.overallPerformance < '90')?'yellow-7':(communityDevelopmentJanContents.overallPerformance >= '90' && communityDevelopmentJanContents.overallPerformance < '120')?'green':(communityDevelopmentJanContents.overallPerformance >= '120'?'blue':'grey-2')"
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
                    <IEcharts ref="gauge" :option="overallJanGaugeOptions" :resizable="true" style="height:335px"/>
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
                    <IEcharts ref="gauge" :option="budgetJanGaugeOptions" :resizable="true" style="height:335px"/>
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
                    <IEcharts ref="pie" :option="expensesJanCumulativePieOptions" :resizable="true" style="height:470px"/>
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
                    <IEcharts ref="pie" :option="expensesJanMonthlyPieOptions" :resizable="true" style="height:470px"/>
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
            overallJanGaugeOptions() {
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
            budgetJanGaugeOptions() {
             return {
              tooltip: {
                  formatter: '{a} {b} : {c}%'
              },
              series: [
                  {
                      type: 'gauge',
                      name: "Budget Usage",
                      detail: {formatter: '{value}%'},
                      data: [{value: this.generalDashboardJanContents.budgetUsage}],
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
            expensesJanCumulativePieOptions() {
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
                                {value: this.generalDashboardJanContents.expAdmin, name: 'Admin', selected: false},
                                {value: this.generalDashboardJanContents.expPRfftnc, name: 'PR / FFTNC', selected: false},
                                {value: this.generalDashboardJanContents.expIncubator, name: 'Incubator', selected: false},
                                {value: this.generalDashboardJanContents.expAP, name: 'A-P', selected: false},
                                {value: this.generalDashboardJanContents.expGFB, name: 'GFB', selected: false},
                                {value: this.generalDashboardJanContents.expGIK, name: 'GIK', selected: false},
                                {value: this.generalDashboardJanContents.expSH, name: 'SH', selected: false},
                                {value: this.generalDashboardJanContents.expCYFlactation, name: 'CYF / Lactation', selected: false},
                                {value: this.generalDashboardJanContents.expCPO, name: 'CPO', selected: false},
                                {value: this.generalDashboardJanContents.expSeniorsProject, name: 'Seniors Project', selected: false},
                                {value: this.generalDashboardJanContents.expCSDmcConnell, name: 'CSD / McConnell', selected: false},
                                {value: this.generalDashboardJanContents.expOthers, name: 'Others', selected: false}
                            ]
                        }
                    ]
                }
            },
            expensesJanMonthlyPieOptions() {
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
                                {value: this.generalDashboardJanContents.expAdmin, name: 'Admin', selected: false},
                                {value: this.generalDashboardJanContents.expPRfftnc, name: 'PR / FFTNC', selected: false},
                                {value: this.generalDashboardJanContents.expIncubator, name: 'Incubator', selected: false},
                                {value: this.generalDashboardJanContents.expAP, name: 'A-P', selected: false},
                                {value: this.generalDashboardJanContents.expGFB, name: 'GFB', selected: false},
                                {value: this.generalDashboardJanContents.expGIK, name: 'GIK', selected: false},
                                {value: this.generalDashboardJanContents.expSH, name: 'SH', selected: false},
                                {value: this.generalDashboardJanContents.expCYFlactation, name: 'CYF / Lactation', selected: false},
                                {value: this.generalDashboardJanContents.expCPO, name: 'CPO', selected: false},
                                {value: this.generalDashboardJanContents.expSeniorsProject, name: 'Seniors Project', selected: false},
                                {value: this.generalDashboardJanContents.expCSDmcConnell, name: 'CSD / McConnell', selected: false},
                                {value: this.generalDashboardJanContents.expOthers, name: 'Others', selected: false}
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
            var foodbankOP, babyCupboardOP, gikOP, charity13OP, entrepreneurshipOP, employmentSkillsOP, socialHarvestOP, marketMobileOP, clothespinOP, gfbOP, overbrookSPOP, collectiveKitchenOP, communityMealsOP, pinsOP, yesICanOP, crisisInterventionOP, youthPREducationOP, youthPRSportOP, youthPRViolinOP, communityDevelopmentOP
                //    GENERAL DASHBOARD | JANUARY
            var docgeneralDashboardJanRef = db.collection("generalDashboard").doc("january");

            docgeneralDashboardJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.generalDashboardJanContents = doc.data();
                    this.totalExpenseJan();
                    this.cumulativeBudgetUsageJan();
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });

            //    FOODBANK | JANUARY
            var docfoodbankJanRef = db.collection("foodbank").doc("january");

            docfoodbankJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.foodbankJanContents = doc.data();
                    this.foodbankJanOverallPerformance();                   
                      
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });

            //    BABY CUPBOARD | JANUARY
            var docbabyCupboardJanRef = db.collection("babyCupboard").doc("january");

            docbabyCupboardJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.babyCupboardJanContents = doc.data();
                    this.babyCupboardJanOverallPerformance();
                      
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });

            //    GIFTS IN KIND | JANUARY
            var docgikJanRef = db.collection("gik").doc("january");

            docgikJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.gikJanContents = doc.data();
                    this.gikJanOverallPerformance();
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });

            //    charITy13 | JANUARY
            var docCharity13JanRef = db.collection("charity13").doc("january");

            docCharity13JanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.charity13JanContents = doc.data();
                    this.charity13JanOverallPerformance();
 
                      
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            

            //    ENTREPRENEURSHIP | JANUARY
            var docentrepreneurshipJanRef = db.collection("entrepreneurship").doc("january");

            docentrepreneurshipJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.entrepreneurshipJanContents = doc.data();
                    this.entrepreneurshipJanOverallPerformance();
 
                      
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            
            //    EMPLOYEMENT SKILLS | JANUARY
            var docemploymentSkillsJanRef = db.collection("employmentSkills").doc("january");

            docemploymentSkillsJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.employmentSkillsJanContents = doc.data();
                    this.employmentSkillsJanOverallPerformance();
 
                      
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            
            //    SOCIAL HARVEST | JANUARY
            var docsocialHarvestJanRef = db.collection("socialHarvest").doc("january");

            docsocialHarvestJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.socialHarvestJanContents = doc.data();
                    this.socialHarvestJanOverallPerformance();
 
                      
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            
            //    MARKET MOBILE | JANUARY
            var docmarketMobileJanRef = db.collection("marketMobile").doc("january");

            docmarketMobileJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.marketMobileJanContents = doc.data();
                    this.marketMobileJanOverallPerformance();
 
                      
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            

             //    CLOTHESPIN | JANUARY
            var docclothespinJanRef = db.collection("clothespin").doc("january");

            docclothespinJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.clothespinJanContents = doc.data();
                    this.clothespinJanOverallPerformance();
 
                      
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });

            //    GOOD FOOD BOX | JANUARY
            var docgfbJanRef = db.collection("gfb").doc("january");

            docgfbJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.gfbJanContents = doc.data();
                    this.gfbJanOverallPerformance();
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            
            //    Overbrook SP | JANUARY
            var docoverbrookSPJanRef = db.collection("overbrookSP").doc("january");

            docoverbrookSPJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.overbrookSPJanContents = doc.data();
                    this.overbrookSPJanOverallPerformance();
 
                      
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });

            
            //    COLLECTIVE KITCHEN | JANUARY
            var doccollectiveKitchenJanRef = db.collection("collectiveKitchen").doc("january");

            doccollectiveKitchenJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.collectiveKitchenJanContents = doc.data();
                    this.collectiveKitchenJanOverallPerformance(); 
                      
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
        

           //    COMMUNITY MEALS | JANUARY
            var doccommunityMealsJanRef = db.collection("communityMeals").doc("january");

            doccommunityMealsJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.communityMealsJanContents = doc.data();
                    this.communityMealsJanOverallPerformance();
 
                      
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            
            //    PINS | JANUARY
            var docpinsJanRef = db.collection("pins").doc("january");

            docpinsJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.pinsJanContents = doc.data();
                    this.pinsJanOverallPerformance();
 
                      
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });

            //    Yes I Can | JANUARY
            var docyesICanJanRef = db.collection("yesICan").doc("january");

            docyesICanJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.yesICanJanContents = doc.data();
                    this.yesICanJanOverallPerformance();
 
                      
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });

            //    CRISIS INTERVENTION | JANUARY
            var doccrisisInterventionJanRef = db.collection("crisisIntervention").doc("january");

            doccrisisInterventionJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.crisisInterventionJanContents = doc.data();
                    this.crisisInterventionJanOverallPerformance();
 
                      
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });


            //    YouthPR Education | JANUARY
            var docyouthPREducationJanRef = db.collection("youthPREducation").doc("january");

            docyouthPREducationJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.youthPREducationJanContents = doc.data();
                    this.youthPREducationJanOverallPerformance();
 
                      
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            
            //    YouthPR Sport | JANUARY
            var docyouthPRSportJanRef = db.collection("youthPRSport").doc("january");

            docyouthPRSportJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.youthPRSportJanContents = doc.data();
                    this.youthPRSportJanOverallPerformance();
 
                      
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });

            //    YouthPR Violin | JANUARY
            var docyouthPRViolinJanRef = db.collection("youthPRViolin").doc("january");

            docyouthPRViolinJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.youthPRViolinJanContents = doc.data();
                    this.youthPRViolinJanOverallPerformance();
 
                      
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });

            //    COMMUNITY DEVELOPMENT | JANUARY
            var doccommunityDevelopmentJanRef = db.collection("communityDevelopment").doc("january");

            doccommunityDevelopmentJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.communityDevelopmentJanContents = doc.data();
                    this.communityDevelopmentJanOverallPerformance();
 
                      
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            
            this.generalJanOverallPerformance();


            
          },
          gikJanOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = ((getRealValue(this.gikJanContents.kpi1)*2) + getRealValue(this.gikJanContents.kpi2) + getRealValue(this.gikJanContents.kpi3) + (getRealValue(this.gikJanContents.kpi4)*2))/6;
            this.gikJanContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 29.5 * 100;
            console.log("GIK Overall performance = " + this.gikJanContents.overallPerformance); 
            return this.gikJanContents.overallPerformance;
          },
          foodbankJanOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = ((getRealValue(this.foodbankJanContents.kpi1)*2) + getRealValue(this.foodbankJanContents.kpi2) + getRealValue(this.foodbankJanContents.kpi3) + (getRealValue(this.foodbankJanContents.kpi4)*2) + getRealValue(this.foodbankJanContents.kpi5) + getRealValue(this.foodbankJanContents.kpi6))/8;
            this.foodbankJanContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 287.09375 * 100;
            console.log("Foodbank Overall performance = " + this.foodbankJanContents.overallPerformance); 
            return this.foodbankJanContents.overallPerformance, foodbankOP;
          },
          babyCupboardJanOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = ((getRealValue(this.babyCupboardJanContents.kpi1)*2) + getRealValue(this.babyCupboardJanContents.kpi2) + getRealValue(this.babyCupboardJanContents.kpi3) + (getRealValue(this.babyCupboardJanContents.kpi4)*2))/6;
            this.babyCupboardJanContents.overallPerformance = (getRealValue(baseOverallPerformanceGIK) / 38.125) * 100;
            console.log("Baby Cupboard Overall performance = " + this.babyCupboardJanContents.overallPerformance); 
            return this.babyCupboardJanContents.overallPerformance, babyCupboardOP;
          },
          charity13JanOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = ((getRealValue(this.charity13JanContents.kpi1)*2) + getRealValue(this.charity13JanContents.kpi2) + getRealValue(this.charity13JanContents.kpi3) + getRealValue(this.charity13JanContents.kpi4) + (getRealValue(this.charity13JanContents.kpi5)*2))/7;
            this.charity13JanContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 2.19047619 * 100;
            console.log("charITy13 Overall performance = " + this.charity13JanContents.overallPerformance); 
            return this.charity13JanContents.overallPerformance;
          },
          entrepreneurshipJanOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.entrepreneurshipJanContents.kpi1) + getRealValue(this.entrepreneurshipJanContents.kpi2) + getRealValue(this.entrepreneurshipJanContents.kpi3) + getRealValue(this.entrepreneurshipJanContents.kpi4))/4;
            this.entrepreneurshipJanContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 1217.967792 * 100;
            console.log("entrepreneurship Overall performance = " + this.entrepreneurshipJanContents.overallPerformance); 
            return this.entrepreneurshipJanContents.overallPerformance;
          },
          employmentSkillsJanOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.employmentSkillsJanContents.kpi1) + getRealValue(this.employmentSkillsJanContents.kpi2) + getRealValue(this.employmentSkillsJanContents.kpi3) + getRealValue(this.employmentSkillsJanContents.kpi4))/4;
            this.employmentSkillsJanContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 45.83333333 * 100;
            console.log("employmentSkills Overall performance = " + this.employmentSkillsJanContents.overallPerformance); 
            return this.employmentSkillsJanContents.overallPerformance;
          },
          socialHarvestJanOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.socialHarvestJanContents.kpi1) + getRealValue(this.socialHarvestJanContents.kpi2) + getRealValue(this.socialHarvestJanContents.kpi3) + getRealValue(this.socialHarvestJanContents.kpi4) + getRealValue(this.socialHarvestJanContents.kpi5))/5;
            this.socialHarvestJanContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 29.7409 * 100;
            console.log("socialHarvest Overall performance = " + this.socialHarvestJanContents.overallPerformance); 
            return this.socialHarvestJanContents.overallPerformance;
          },
          marketMobileJanOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.marketMobileJanContents.kpi1) + getRealValue(this.marketMobileJanContents.kpi2) + (getRealValue(this.marketMobileJanContents.kpi3)*2) + (getRealValue(this.marketMobileJanContents.kpi4)*2))/6;
            this.marketMobileJanContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 149.9444444 * 100;
            console.log("marketMobile Overall performance = " + this.marketMobileJanContents.overallPerformance); 
            return this.marketMobileJanContents.overallPerformance;
          },
          clothespinJanOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.clothespinJanContents.kpi1) + getRealValue(this.clothespinJanContents.kpi2) + getRealValue(this.clothespinJanContents.kpi3))/3;
            this.clothespinJanContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 144 * 100;
            console.log("clothespin Overall performance = " + this.clothespinJanContents.overallPerformance); 
            return this.clothespinJanContents.overallPerformance;
          },
          gfbJanOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.gfbJanContents.kpi1) + getRealValue(this.gfbJanContents.kpi2) + getRealValue(this.gfbJanContents.kpi3))/3;
            this.gfbJanContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 274.1111111 * 100;
            console.log("gfb Overall performance = " + this.gfbJanContents.overallPerformance); 
            return this.gfbJanContents.overallPerformance;
          },
          overbrookSPJanOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.overbrookSPJanContents.kpi1) + getRealValue(this.overbrookSPJanContents.kpi2))/2;
            this.overbrookSPJanContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 101.75 * 100;
            console.log("overbrookSP Overall performance = " + this.overbrookSPJanContents.overallPerformance); 
            return this.overbrookSPJanContents.overallPerformance;
          },
          collectiveKitchenJanOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.collectiveKitchenJanContents.kpi1) + getRealValue(this.collectiveKitchenJanContents.kpi2) + getRealValue(this.collectiveKitchenJanContents.kpi3) + getRealValue(this.collectiveKitchenJanContents.kpi4))/4;
            this.collectiveKitchenJanContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 5.75 * 100;
            console.log("collectiveKitchen Overall performance = " + this.collectiveKitchenJanContents.overallPerformance); 
            return this.collectiveKitchenJanContents.overallPerformance;
          },
          communityMealsJanOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.communityMealsJanContents.kpi1) + getRealValue(this.communityMealsJanContents.kpi2) + getRealValue(this.communityMealsJanContents.kpi3) + (getRealValue(this.communityMealsJanContents.kpi4)*2))/5;
            this.communityMealsJanContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 290.2666667 * 100;
            console.log("communityMeals Overall performance = " + this.communityMealsJanContents.overallPerformance); 
            return this.communityMealsJanContents.overallPerformance;
          },
          pinsJanOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.pinsJanContents.kpi1) + getRealValue(this.pinsJanContents.kpi2) + getRealValue(this.pinsJanContents.kpi3))/3;
            this.pinsJanContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 10.33333333 * 100;
            console.log("pins Overall performance = " + this.pinsJanContents.overallPerformance); 
            return this.pinsJanContents.overallPerformance;
          },
          youthPREducationJanOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.youthPREducationJanContents.kpi1) + getRealValue(this.youthPREducationJanContents.kpi2) + getRealValue(this.youthPREducationJanContents.kpi3) + getRealValue(this.youthPREducationJanContents.kpi4) + (getRealValue(this.youthPREducationJanContents.kpi5)*2))/6;
            this.youthPREducationJanContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 13 * 100;
            console.log("youthPREducation Overall performance = " + this.youthPREducationJanContents.overallPerformance); 
            return this.youthPREducationJanContents.overallPerformance;
          },
          youthPRSportJanOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.youthPRSportJanContents.kpi1) + getRealValue(this.youthPRSportJanContents.kpi2) + getRealValue(this.youthPRSportJanContents.kpi3) + getRealValue(this.youthPRSportJanContents.kpi4) + (getRealValue(this.youthPRSportJanContents.kpi5)*2))/6;
            this.youthPRSportJanContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 1.5 * 100;
            console.log("youthPRSport Overall performance = " + this.youthPRSportJanContents.overallPerformance); 
            return this.youthPRSportJanContents.overallPerformance;
          },
          youthPRViolinJanOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.youthPRViolinJanContents.kpi1) + getRealValue(this.youthPRViolinJanContents.kpi2) + getRealValue(this.youthPRViolinJanContents.kpi3) + getRealValue(this.youthPRViolinJanContents.kpi4) + (getRealValue(this.youthPRViolinJanContents.kpi5)*2))/6;
            this.youthPRViolinJanContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 5.388888889 * 100;
            console.log("youthPRViolin Overall performance = " + this.youthPRViolinJanContents.overallPerformance); 
            return this.youthPRViolinJanContents.overallPerformance;
          },
          yesICanJanOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.yesICanJanContents.kpi1) + getRealValue(this.yesICanJanContents.kpi2) + getRealValue(this.yesICanJanContents.kpi3))/3;
            this.yesICanJanContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 11.33333333 * 100;
            console.log("yesICan Overall performance = " + this.yesICanJanContents.overallPerformance); 
            return this.yesICanJanContents.overallPerformance;
          },
          crisisInterventionJanOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.crisisInterventionJanContents.kpi1) + getRealValue(this.crisisInterventionJanContents.kpi2))/2;
            this.crisisInterventionJanContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 104 * 100;
            console.log("crisisIntervention Overall performance = " + this.crisisInterventionJanContents.overallPerformance); 
            return this.crisisInterventionJanContents.overallPerformance;
          },
          communityDevelopmentJanOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.communityDevelopmentJanContents.kpi1) + getRealValue(this.communityDevelopmentJanContents.kpi2) + getRealValue(this.communityDevelopmentJanContents.kpi3))/3;
            this.communityDevelopmentJanContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 77.22222222 * 100;
            console.log("communityDevelopment Overall performance = " + this.communityDevelopmentJanContents.overallPerformance); 
            return this.communityDevelopmentJanContents.overallPerformance;
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
            cumulativeBudgetUsageJan(){
              const getRealValue = (val) => +val || val;
              return this.generalDashboardJanContents.budgetUsage = ((getRealValue(this.generalDashboardJanContents.expenses) / getRealValue(this.generalDashboardJanContents.actualBudget))*100).toFixed(2)
            },
            generalJanOverallPerformance(){
              const getRealValue = (val) => +val || val;

              var baseOverallPerformanceGeneralDashboard = ( getRealValue(foodbankOP) + getRealValue(babyCupboardOP));
              this.generalDashboardJanContents.mainOverallPerformance = getRealValue(baseOverallPerformanceGeneralDashboard) / 21.35 * 100
              console.log("General Overall Performance: " + this.foodbankJanContents.overallPerformance);
              return this.generalDashboardJanContents.mainOverallPerformance
            }

        },
        created(){
          this.readData();
          
        }

    }
</script>
