<template>
    <div class="row q-col-gutter-sm q-ma-xs">
        <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">  <!--Number of Total Programs-->
                <q-card>
                  <q-card-section :class="$q.dark.isActive?'blue_dark':'bg-blue-8'" class="text-white">
                    <div class="row">
                      <div class="col-10">
                        <div class="text-h6">Number of Total Programs</div>
                        <div class="text-h5">{{generalDashboardJunContents.totalPrograms}}</div>
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
                        <div class="text-h5">{{generalDashboardJunContents.activePrograms}}</div>
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
                        <div class="text-h5">{{generalDashboardJunContents.projectsGoingOn}}</div>
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
                        <div class="text-h5">{{generalDashboardJunContents.totalUniqueVolunteers}} / {{generalDashboardJunContents.totalVolunteerHours}}</div>
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
                        :color="(foodbankJunContents.overallPerformance == null)?'grey':(foodbankJunContents.overallPerformance >= '0.0001' && foodbankJunContents.overallPerformance <= '40')?'red':(foodbankJunContents.overallPerformance > '40' && foodbankJunContents.overallPerformance <= '60')?'orange':(foodbankJunContents.overallPerformance > '60' && foodbankJunContents.overallPerformance < '90')?'yellow-7':(foodbankJunContents.overallPerformance >= '90' && foodbankJunContents.overallPerformance < '120')?'green':(foodbankJunContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(babyCupboardJunContents.overallPerformance == null)?'grey':(babyCupboardJunContents.overallPerformance >= '0.0001' && babyCupboardJunContents.overallPerformance <= '40')?'red':(babyCupboardJunContents.overallPerformance > '40' && babyCupboardJunContents.overallPerformance <= '60')?'orange':(babyCupboardJunContents.overallPerformance > '60' && babyCupboardJunContents.overallPerformance < '90')?'yellow-7':(babyCupboardJunContents.overallPerformance >= '90' && babyCupboardJunContents.overallPerformance < '120')?'green':(babyCupboardJunContents.overallPerformance >= '120'?'blue':'grey')"

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
                        :color="(gikJunContents.overallPerformance == null)?'grey':(gikJunContents.overallPerformance >= '0.0001' && gikJunContents.overallPerformance <= '40')?'red':(gikJunContents.overallPerformance > '40' && gikJunContents.overallPerformance <= '60')?'orange':(gikJunContents.overallPerformance > '60' && gikJunContents.overallPerformance < '90')?'yellow-7':(gikJunContents.overallPerformance >= '90' && gikJunContents.overallPerformance < '120')?'green':(gikJunContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(charity13JunContents.overallPerformance == null)?'grey':(charity13JunContents.overallPerformance >= '0.0001' && charity13JunContents.overallPerformance <= '40')?'red':(charity13JunContents.overallPerformance > '40' && charity13JunContents.overallPerformance <= '60')?'orange':(charity13JunContents.overallPerformance > '60' && charity13JunContents.overallPerformance < '90')?'yellow-7':(charity13JunContents.overallPerformance >= '90' && charity13JunContents.overallPerformance < '120')?'green':(charity13JunContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(entrepreneurshipJunContents.overallPerformance == null)?'grey':(entrepreneurshipJunContents.overallPerformance >= '0.0001' && entrepreneurshipJunContents.overallPerformance <= '40')?'red':(entrepreneurshipJunContents.overallPerformance > '40' && entrepreneurshipJunContents.overallPerformance <= '60')?'orange':(entrepreneurshipJunContents.overallPerformance > '60' && entrepreneurshipJunContents.overallPerformance < '90')?'yellow-7':(entrepreneurshipJunContents.overallPerformance >= '90' && entrepreneurshipJunContents.overallPerformance < '120')?'green':(entrepreneurshipJunContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(employmentSkillsJunContents.overallPerformance == null)?'grey':(employmentSkillsJunContents.overallPerformance >= '0.0001' && employmentSkillsJunContents.overallPerformance <= '40')?'red':(employmentSkillsJunContents.overallPerformance > '40' && employmentSkillsJunContents.overallPerformance <= '60')?'orange':(employmentSkillsJunContents.overallPerformance > '60' && employmentSkillsJunContents.overallPerformance < '90')?'yellow-7':(employmentSkillsJunContents.overallPerformance >= '90' && employmentSkillsJunContents.overallPerformance < '120')?'green':(employmentSkillsJunContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(socialHarvestJunContents.overallPerformance == null)?'grey':(socialHarvestJunContents.overallPerformance >= '0.0001' && socialHarvestJunContents.overallPerformance <= '40')?'red':(socialHarvestJunContents.overallPerformance > '40' && socialHarvestJunContents.overallPerformance <= '60')?'orange':(socialHarvestJunContents.overallPerformance > '60' && socialHarvestJunContents.overallPerformance < '90')?'yellow-7':(socialHarvestJunContents.overallPerformance >= '90' && socialHarvestJunContents.overallPerformance < '120')?'green':(socialHarvestJunContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(marketMobileJunContents.overallPerformance == null)?'grey':(marketMobileJunContents.overallPerformance >= '0.0001' && marketMobileJunContents.overallPerformance <= '40')?'red':(marketMobileJunContents.overallPerformance > '40' && marketMobileJunContents.overallPerformance <= '60')?'orange':(marketMobileJunContents.overallPerformance > '60' && marketMobileJunContents.overallPerformance < '90')?'yellow-7':(marketMobileJunContents.overallPerformance >= '90' && marketMobileJunContents.overallPerformance < '120')?'green':(marketMobileJunContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(clothespinJunContents.overallPerformance == null)?'grey':(clothespinJunContents.overallPerformance >= '0.0001' && clothespinJunContents.overallPerformance <= '40')?'red':(clothespinJunContents.overallPerformance > '40' && clothespinJunContents.overallPerformance <= '60')?'orange':(clothespinJunContents.overallPerformance > '60' && clothespinJunContents.overallPerformance < '90')?'yellow-7':(clothespinJunContents.overallPerformance >= '90' && clothespinJunContents.overallPerformance < '120')?'green':(clothespinJunContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(gfbJunContents.overallPerformance == null)?'grey':(gfbJunContents.overallPerformance >= '0.0001' && gfbJunContents.overallPerformance <= '40')?'red':(gfbJunContents.overallPerformance > '40' && gfbJunContents.overallPerformance <= '60')?'orange':(gfbJunContents.overallPerformance > '60' && gfbJunContents.overallPerformance < '90')?'yellow-7':(gfbJunContents.overallPerformance >= '90' && gfbJunContents.overallPerformance < '120')?'green':(gfbJunContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(overbrookSPJunContents.overallPerformance == null)?'grey':(overbrookSPJunContents.overallPerformance >= '0.0001' && overbrookSPJunContents.overallPerformance <= '40')?'red':(overbrookSPJunContents.overallPerformance > '40' && overbrookSPJunContents.overallPerformance <= '60')?'orange':(overbrookSPJunContents.overallPerformance > '60' && overbrookSPJunContents.overallPerformance < '90')?'yellow-7':(overbrookSPJunContents.overallPerformance >= '90' && overbrookSPJunContents.overallPerformance < '120')?'green':(overbrookSPJunContents.overallPerformance >= '120'?'blue':'grey')"
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
                            :color="(collectiveKitchenJunContents.overallPerformance == null)?'grey':(collectiveKitchenJunContents.overallPerformance >= '0.0001' && collectiveKitchenJunContents.overallPerformance <= '40')?'red':(collectiveKitchenJunContents.overallPerformance > '40' && collectiveKitchenJunContents.overallPerformance <= '60')?'orange':(collectiveKitchenJunContents.overallPerformance > '60' && collectiveKitchenJunContents.overallPerformance < '90')?'yellow-7':(collectiveKitchenJunContents.overallPerformance >= '90' && collectiveKitchenJunContents.overallPerformance < '120')?'green':(collectiveKitchenJunContents.overallPerformance >= '120'?'blue':'grey')"
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
                            :color="(communityMealsJunContents.overallPerformance == null)?'grey':(communityMealsJunContents.overallPerformance >= '0.0001' && communityMealsJunContents.overallPerformance <= '40')?'red':(communityMealsJunContents.overallPerformance > '40' && communityMealsJunContents.overallPerformance <= '60')?'orange':(communityMealsJunContents.overallPerformance > '60' && communityMealsJunContents.overallPerformance < '90')?'yellow-7':(communityMealsJunContents.overallPerformance >= '90' && communityMealsJunContents.overallPerformance < '120')?'green':(communityMealsJunContents.overallPerformance >= '120'?'blue':'grey')"
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
                            :color="(pinsJunContents.overallPerformance == null)?'grey':(pinsJunContents.overallPerformance >= '0.0001' && pinsJunContents.overallPerformance <= '40')?'red':(pinsJunContents.overallPerformance > '40' && pinsJunContents.overallPerformance <= '60')?'orange':(pinsJunContents.overallPerformance > '60' && pinsJunContents.overallPerformance < '90')?'yellow-7':(pinsJunContents.overallPerformance >= '90' && pinsJunContents.overallPerformance < '120')?'green':(pinsJunContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(yesICanJunContents.overallPerformance == null)?'grey':(yesICanJunContents.overallPerformance >= '0.0001' && yesICanJunContents.overallPerformance <= '40')?'red':(yesICanJunContents.overallPerformance > '40' && yesICanJunContents.overallPerformance <= '60')?'orange':(yesICanJunContents.overallPerformance > '60' && yesICanJunContents.overallPerformance < '90')?'yellow-7':(yesICanJunContents.overallPerformance >= '90' && yesICanJunContents.overallPerformance < '120')?'green':(yesICanJunContents.overallPerformance >= '120'?'blue':'grey')"
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
                            :color="(crisisInterventionJunContents.overallPerformance == null)?'grey':(crisisInterventionJunContents.overallPerformance >= '0.0001' && crisisInterventionJunContents.overallPerformance <= '40')?'red':(crisisInterventionJunContents.overallPerformance > '40' && crisisInterventionJunContents.overallPerformance <= '60')?'orange':(crisisInterventionJunContents.overallPerformance > '60' && crisisInterventionJunContents.overallPerformance < '90')?'yellow-7':(crisisInterventionJunContents.overallPerformance >= '90' && crisisInterventionJunContents.overallPerformance < '120')?'green':(crisisInterventionJunContents.overallPerformance >= '120'?'blue':'grey')"
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
                            :color="(youthPREducationJunContents.overallPerformance == null)?'grey':(youthPREducationJunContents.overallPerformance >= '0.0001' && youthPREducationJunContents.overallPerformance <= '40')?'red':(youthPREducationJunContents.overallPerformance > '40' && youthPREducationJunContents.overallPerformance <= '60')?'orange':(youthPREducationJunContents.overallPerformance > '60' && youthPREducationJunContents.overallPerformance < '90')?'yellow-7':(youthPREducationJunContents.overallPerformance >= '90' && youthPREducationJunContents.overallPerformance < '120')?'green':(youthPREducationJunContents.overallPerformance >= '120'?'blue':'grey')"
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
                            :color="(youthPRSportJunContents.overallPerformance == null)?'grey':(youthPRSportJunContents.overallPerformance >= '0.0001' && youthPRSportJunContents.overallPerformance <= '40')?'red':(youthPRSportJunContents.overallPerformance > '40' && youthPRSportJunContents.overallPerformance <= '60')?'orange':(youthPRSportJunContents.overallPerformance > '60' && youthPRSportJunContents.overallPerformance < '90')?'yellow-7':(youthPRSportJunContents.overallPerformance >= '90' && youthPRSportJunContents.overallPerformance < '120')?'green':(youthPRSportJunContents.overallPerformance >= '120'?'blue':'grey')"
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
                            :color="(youthPRViolinJunContents.overallPerformance == null)?'grey':(youthPRViolinJunContents.overallPerformance >= '0.0001' && youthPRViolinJunContents.overallPerformance <= '40')?'red':(youthPRViolinJunContents.overallPerformance > '40' && youthPRViolinJunContents.overallPerformance <= '60')?'orange':(youthPRViolinJunContents.overallPerformance > '60' && youthPRViolinJunContents.overallPerformance < '90')?'yellow-7':(youthPRViolinJunContents.overallPerformance >= '90' && youthPRViolinJunContents.overallPerformance < '120')?'green':(youthPRViolinJunContents.overallPerformance >= '120'?'blue':'grey')"
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
                            :color="(communityDevelopmentJunContents.overallPerformance == null)?'grey':(communityDevelopmentJunContents.overallPerformance >= '0.0001' && communityDevelopmentJunContents.overallPerformance <= '40')?'red':(communityDevelopmentJunContents.overallPerformance > '40' && communityDevelopmentJunContents.overallPerformance <= '60')?'orange':(communityDevelopmentJunContents.overallPerformance > '60' && communityDevelopmentJunContents.overallPerformance < '90')?'yellow-7':(communityDevelopmentJunContents.overallPerformance >= '90' && communityDevelopmentJunContents.overallPerformance < '120')?'green':(communityDevelopmentJunContents.overallPerformance >= '120'?'blue':'grey')"
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
                      data: [{value: this.generalDashboardJunContents.mainOverallPerformance}],
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
                      data: [{value: this.generalDashboardJunContents.budgetUsage}],
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
                                {value: this.generalDashboardJunContents.cumulativeexpAdmin, name: 'Admin', selected: false},
                                {value: this.generalDashboardJunContents.cumulativeexpPRfftnc, name: 'PR / FFTNC', selected: false},
                                {value: this.generalDashboardJunContents.cumulativeexpIncubator, name: 'Incubator', selected: false},
                                {value: this.generalDashboardJunContents.cumulativeexpAP, name: 'A-P', selected: false},
                                {value: this.generalDashboardJunContents.cumulativeexpGFB, name: 'GFB', selected: false},
                                {value: this.generalDashboardJunContents.cumulativeexpGIK, name: 'GIK', selected: false},
                                {value: this.generalDashboardJunContents.cumulativeexpSH, name: 'SH', selected: false},
                                {value: this.generalDashboardJunContents.cumulativeexpCYFlactation, name: 'CYF / Lactation', selected: false},
                                {value: this.generalDashboardJunContents.cumulativeexpCPO, name: 'CPO', selected: false},
                                {value: this.generalDashboardJunContents.cumulativeexpSeniorsProject, name: 'Seniors Project', selected: false},
                                {value: this.generalDashboardJunContents.cumulativeexpCSDmcConnell, name: 'CSD / McConnell', selected: false},
                                {value: this.generalDashboardJunContents.cumulativeexpOthers, name: 'Others', selected: false}
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
                                {value: this.generalDashboardJunContents.expAdmin, name: 'Admin', selected: false},
                                {value: this.generalDashboardJunContents.expPRfftnc, name: 'PR / FFTNC', selected: false},
                                {value: this.generalDashboardJunContents.expIncubator, name: 'Incubator', selected: false},
                                {value: this.generalDashboardJunContents.expAP, name: 'A-P', selected: false},
                                {value: this.generalDashboardJunContents.expGFB, name: 'GFB', selected: false},
                                {value: this.generalDashboardJunContents.expGIK, name: 'GIK', selected: false},
                                {value: this.generalDashboardJunContents.expSH, name: 'SH', selected: false},
                                {value: this.generalDashboardJunContents.expCYFlactation, name: 'CYF / Lactation', selected: false},
                                {value: this.generalDashboardJunContents.expCPO, name: 'CPO', selected: false},
                                {value: this.generalDashboardJunContents.expSeniorsProject, name: 'Seniors Project', selected: false},
                                {value: this.generalDashboardJunContents.expCSDmcConnell, name: 'CSD / McConnell', selected: false},
                                {value: this.generalDashboardJunContents.expOthers, name: 'Others', selected: false}
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
                        this.cumulativeBudgetUsageJun();
                        this.totalCumulativeExpenseJun();

                        this.foodbankJun();
                    } else {
                        // doc.data() will be undefined in this case
                        console.log("No such document! - generalDashboard");
                    }
                }).catch((error) => {
                    console.log("Error getting document:", error);
                });
            },  
                foodbankJun(){
                    //    FOODBANK | MAY
                    var docfoodbankAprRef = db.collection("foodbank").doc("june");

                    docfoodbankAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.foodbankJunContents = doc.data();
                            this.foodbankJunOverallPerformance();

                            this.babyCupboardJun();

                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - foodbank");
                        }

                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                babyCupboardJun(){
                                        //    BABY CUPBOARD | MAY
                    var docbabyCupboardAprRef = db.collection("babyCupboard").doc("june");

                    docbabyCupboardAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.babyCupboardJunContents = doc.data();
                            this.babyCupboardJunOverallPerformance();

                            this.gikJun();
                            

                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - babyCupboard");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                gikJun(){
                    //    GIFTS IN KIND | MAY
                    var docgikAprRef = db.collection("gik").doc("june");

                    docgikAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.gikJunContents = doc.data();
                            this.gikJunOverallPerformance();
                            
                            this.charity13Jun();
                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - gik");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });

                },
                charity13Jun(){
                    //    charITy13 | MAY
                    var docCharity13AprRef = db.collection("charity13").doc("june");

                    docCharity13AprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.charity13JunContents = doc.data();
                            this.charity13JunOverallPerformance();
                            
                            this.entrepreneurshipJun();
                            
                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - charity13");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });

                },entrepreneurshipJun(){
                    //    ENTREPRENEURSHIP | MAY
                    var docentrepreneurshipAprRef = db.collection("entrepreneurship").doc("june");

                    docentrepreneurshipAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.entrepreneurshipJunContents = doc.data();
                            this.entrepreneurshipJunOverallPerformance();

                            this.employmentSkillsJun();

                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - entrepreneurship");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                employmentSkillsJun(){
                    //    EMPLOYEMENT SKILLS | MAY
                    var docemploymentSkillsAprRef = db.collection("employmentSkills").doc("june");

                    docemploymentSkillsAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.employmentSkillsJunContents = doc.data();
                            this.employmentSkillsJunOverallPerformance();

                            this.socialHarvestJun();

                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - employmentSkills");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                socialHarvestJun(){
                    //    SOCIAL HARVEST | MAY
                    var docsocialHarvestAprRef = db.collection("socialHarvest").doc("june");

                    docsocialHarvestAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.socialHarvestJunContents = doc.data();
                            this.socialHarvestJunOverallPerformance();

                            this.marketMobileJun();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - socialHarvest");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });

                },
                marketMobileJun(){
                    //    MARKET MOBILE | MAY
                    var docmarketMobileAprRef = db.collection("marketMobile").doc("june");

                    docmarketMobileAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.marketMobileJunContents = doc.data();
                            this.marketMobileJunOverallPerformance();

                            this.clothespinJun();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - marketMobile");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });

                },
                clothespinJun(){
                    //    CLOTHESPIN | MAY
                    var docclothespinAprRef = db.collection("clothespin").doc("june");

                    docclothespinAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.clothespinJunContents = doc.data();
                            this.clothespinJunOverallPerformance();

                            this.gfbJun();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - clothespin");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });

                },
                gfbJun(){
                    //    GOOD FOOD BOX | MAY
                    var docgfbAprRef = db.collection("gfb").doc("june");

                    docgfbAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.gfbJunContents = doc.data();
                            this.gfbJunOverallPerformance();
                            
                            this.overbrookSPJun();

                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - gfb");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });


                },
                overbrookSPJun(){
                    //    Overbrook SP | MAY
                    var docoverbrookSPAprRef = db.collection("overbrookSP").doc("june");

                    docoverbrookSPAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.overbrookSPJunContents = doc.data();
                            this.overbrookSPJunOverallPerformance();

                            this.collectiveKitchenJun();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - overbrookSP");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });

                },
                collectiveKitchenJun(){
                    //    COLLECTIVE KITCHEN | MAY
                    var doccollectiveKitchenAprRef = db.collection("collectiveKitchen").doc("june");

                    doccollectiveKitchenAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.collectiveKitchenJunContents = doc.data();
                            this.collectiveKitchenJunOverallPerformance(); 

                            this.communityMealsJun();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - collectiveKitchen");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });

                },
                communityMealsJun(){
                    //        COMMUNITY MEALS | MAY
                    var doccommunityMealsAprRef = db.collection("communityMeals").doc("june");

                    doccommunityMealsAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.communityMealsJunContents = doc.data();
                            this.communityMealsJunOverallPerformance();

                            this.pinsJun();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - communityMeals");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });

                },
                pinsJun(){
                    //    PINS | MAY
                    var docpinsAprRef = db.collection("pins").doc("june");

                    docpinsAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.pinsJunContents = doc.data();
                            this.pinsJunOverallPerformance();

                            this.yesICanJun();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - pins");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                yesICanJun(){
                    //    Yes I Can | MAY
                    var docyesICanAprRef = db.collection("yesICan").doc("june");

                    docyesICanAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.yesICanJunContents = doc.data();
                            this.yesICanJunOverallPerformance();

                            this.crisisInterventionJun();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - yesICan");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                crisisInterventionJun(){
                    //    CRISIS INTERVENTION | MAY
                    var doccrisisInterventionAprRef = db.collection("crisisIntervention").doc("june");

                    doccrisisInterventionAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.crisisInterventionJunContents = doc.data();
                            this.crisisInterventionJunOverallPerformance();

                            this.youthPREducationJun();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - crisisIntervention");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                youthPREducationJun(){
                    //    YouthPR Education | MAY
                    var docyouthPREducationAprRef = db.collection("youthPREducation").doc("june");

                    docyouthPREducationAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.youthPREducationJunContents = doc.data();
                            this.youthPREducationJunOverallPerformance();

                            this.youthPRSportJun();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - youthPREducation");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                youthPRSportJun(){
                    //    YouthPR Sport | MAY
                    var docyouthPRSportAprRef = db.collection("youthPRSport").doc("june");

                    docyouthPRSportAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.youthPRSportJunContents = doc.data();
                            this.youthPRSportJunOverallPerformance();

                            this.youthPRViolinJun();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - youthPRSport");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                youthPRViolinJun(){
                    //    YouthPR Violin | MAY
                    var docyouthPRViolinAprRef = db.collection("youthPRViolin").doc("june");

                    docyouthPRViolinAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.youthPRViolinJunContents = doc.data();
                            this.youthPRViolinJunOverallPerformance();

                            this.communityDevelopmentJun();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - youthPRViolin");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                communityDevelopmentJun(){
                    //    COMMUNITY DEVELOPMENT | MAY
                    var doccommunityDevelopmentAprRef = db.collection("communityDevelopment").doc("june");

                    doccommunityDevelopmentAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.communityDevelopmentJunContents = doc.data();
                            this.communityDevelopmentJunOverallPerformance();
                            
                            console.log("denemem: "+ this.foodbankJunContents.kpi1 + " baby: " + this.babyCupboardJunContents.kpi1 + 
                            " GIK: " + this.gikJunContents.kpi1 + " CD: " + this.youthPRViolinJunContents.kpi1);
                            this.generalJunOverallPerformance();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - communityDevelopment");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },

            gikJunOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = ((getRealValue(this.gikJunContents.kpi1)*2) + getRealValue(this.gikJunContents.kpi2) + getRealValue(this.gikJunContents.kpi3) + (getRealValue(this.gikJunContents.kpi4)*2))/6;
            this.gikJunContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 29.5 * 100;
            console.log("GIK Overall performance = " + this.gikJunContents.overallPerformance);             
            return this.gikJunContents.overallPerformance;
            },
            foodbankJunOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = ((getRealValue(this.foodbankJunContents.kpi1)*2) + getRealValue(this.foodbankJunContents.kpi2) + getRealValue(this.foodbankJunContents.kpi3) + (getRealValue(this.foodbankJunContents.kpi4)*2) + getRealValue(this.foodbankJunContents.kpi5) + getRealValue(this.foodbankJunContents.kpi6))/8;
            this.foodbankJunContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 287.09375 * 100;
            console.log("Foodbank Overall performance = " + this.foodbankJunContents.overallPerformance); 
            return this.foodbankJunContents.overallPerformance;
            },
            babyCupboardJunOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = ((getRealValue(this.babyCupboardJunContents.kpi1)*2) + getRealValue(this.babyCupboardJunContents.kpi2) + getRealValue(this.babyCupboardJunContents.kpi3) + (getRealValue(this.babyCupboardJunContents.kpi4)*2))/6;
            this.babyCupboardJunContents.overallPerformance = (getRealValue(baseOverallPerformanceGIK) / 38.125) * 100;
            console.log("Baby Cupboard Overall performance = " + this.babyCupboardJunContents.overallPerformance); 
            return this.babyCupboardJunContents.overallPerformance;
            },
            charity13JunOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = ((getRealValue(this.charity13JunContents.kpi1)*2) + getRealValue(this.charity13JunContents.kpi2) + getRealValue(this.charity13JunContents.kpi3) + getRealValue(this.charity13JunContents.kpi4) + (getRealValue(this.charity13JunContents.kpi5)*2))/7;
            this.charity13JunContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 2.19047619 * 100;
            console.log("charITy13 Overall performance = " + this.charity13JunContents.overallPerformance); 
            return this.charity13JunContents.overallPerformance;
            },
            entrepreneurshipJunOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.entrepreneurshipJunContents.kpi1) + getRealValue(this.entrepreneurshipJunContents.kpi2) + getRealValue(this.entrepreneurshipJunContents.kpi3) + getRealValue(this.entrepreneurshipJunContents.kpi4))/4;
            this.entrepreneurshipJunContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 1217.967792 * 100;
            console.log("entrepreneurship Overall performance = " + this.entrepreneurshipJunContents.overallPerformance); 
            return this.entrepreneurshipJunContents.overallPerformance;
            },
            employmentSkillsJunOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.employmentSkillsJunContents.kpi1) + getRealValue(this.employmentSkillsJunContents.kpi2) + getRealValue(this.employmentSkillsJunContents.kpi3) + getRealValue(this.employmentSkillsJunContents.kpi4))/4;
            this.employmentSkillsJunContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 45.83333333 * 100;
            console.log("employmentSkills Overall performance = " + this.employmentSkillsJunContents.overallPerformance); 
            return this.employmentSkillsJunContents.overallPerformance;
            },
            socialHarvestJunOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.socialHarvestJunContents.kpi1) + getRealValue(this.socialHarvestJunContents.kpi2) + getRealValue(this.socialHarvestJunContents.kpi3) + getRealValue(this.socialHarvestJunContents.kpi4) + getRealValue(this.socialHarvestJunContents.kpi5))/5;
            this.socialHarvestJunContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 29.7409 * 100;
            console.log("socialHarvest Overall performance = " + this.socialHarvestJunContents.overallPerformance); 
            return this.socialHarvestJunContents.overallPerformance;
            },
            marketMobileJunOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.marketMobileJunContents.kpi1) + getRealValue(this.marketMobileJunContents.kpi2) + (getRealValue(this.marketMobileJunContents.kpi3)*2) + (getRealValue(this.marketMobileJunContents.kpi4)*2))/6;
            this.marketMobileJunContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 149.9444444 * 100;
            console.log("marketMobile Overall performance = " + this.marketMobileJunContents.overallPerformance); 
            return this.marketMobileJunContents.overallPerformance;
            },
            clothespinJunOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.clothespinJunContents.kpi1) + getRealValue(this.clothespinJunContents.kpi2) + getRealValue(this.clothespinJunContents.kpi3))/3;
            this.clothespinJunContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 144 * 100;
            console.log("clothespin Overall performance = " + this.clothespinJunContents.overallPerformance); 
            return this.clothespinJunContents.overallPerformance;
            },
            gfbJunOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.gfbJunContents.kpi1) + getRealValue(this.gfbJunContents.kpi2) + getRealValue(this.gfbJunContents.kpi3))/3;
            this.gfbJunContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 274.1111111 * 100;
            console.log("gfb Overall performance = " + this.gfbJunContents.overallPerformance); 
            return this.gfbJunContents.overallPerformance;
            },
            overbrookSPJunOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.overbrookSPJunContents.kpi1) + getRealValue(this.overbrookSPJunContents.kpi2))/2;
            this.overbrookSPJunContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 101.75 * 100;
            console.log("overbrookSP Overall performance = " + this.overbrookSPJunContents.overallPerformance); 
            return this.overbrookSPJunContents.overallPerformance;
            },
            collectiveKitchenJunOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.collectiveKitchenJunContents.kpi1) + getRealValue(this.collectiveKitchenJunContents.kpi2) + getRealValue(this.collectiveKitchenJunContents.kpi3) + getRealValue(this.collectiveKitchenJunContents.kpi4))/4;
            this.collectiveKitchenJunContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 5.75 * 100;
            console.log("collectiveKitchen Overall performance = " + this.collectiveKitchenJunContents.overallPerformance); 
            return this.collectiveKitchenJunContents.overallPerformance;
            },
            communityMealsJunOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.communityMealsJunContents.kpi1) + getRealValue(this.communityMealsJunContents.kpi2) + getRealValue(this.communityMealsJunContents.kpi3) + (getRealValue(this.communityMealsJunContents.kpi4)*2))/5;
            this.communityMealsJunContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 290.2666667 * 100;
            console.log("communityMeals Overall performance = " + this.communityMealsJunContents.overallPerformance); 
            return this.communityMealsJunContents.overallPerformance;
            },
            pinsJunOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.pinsJunContents.kpi1) + getRealValue(this.pinsJunContents.kpi2) + getRealValue(this.pinsJunContents.kpi3))/3;
            this.pinsJunContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 10.33333333 * 100;
            console.log("pins Overall performance = " + this.pinsJunContents.overallPerformance); 
            return this.pinsJunContents.overallPerformance;
            },
            youthPREducationJunOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.youthPREducationJunContents.kpi1) + getRealValue(this.youthPREducationJunContents.kpi2) + getRealValue(this.youthPREducationJunContents.kpi3) + getRealValue(this.youthPREducationJunContents.kpi4) + (getRealValue(this.youthPREducationJunContents.kpi5)*2))/6;
            this.youthPREducationJunContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 13 * 100;
            console.log("youthPREducation Overall performance = " + this.youthPREducationJunContents.overallPerformance); 
            return this.youthPREducationJunContents.overallPerformance;
            },
            youthPRSportJunOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.youthPRSportJunContents.kpi1) + getRealValue(this.youthPRSportJunContents.kpi2) + getRealValue(this.youthPRSportJunContents.kpi3) + getRealValue(this.youthPRSportJunContents.kpi4) + (getRealValue(this.youthPRSportJunContents.kpi5)*2))/6;
            this.youthPRSportJunContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 1.5 * 100;
            console.log("youthPRSport Overall performance = " + this.youthPRSportJunContents.overallPerformance); 
            return this.youthPRSportJunContents.overallPerformance;
            },
            youthPRViolinJunOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.youthPRViolinJunContents.kpi1) + getRealValue(this.youthPRViolinJunContents.kpi2) + getRealValue(this.youthPRViolinJunContents.kpi3) + getRealValue(this.youthPRViolinJunContents.kpi4) + (getRealValue(this.youthPRViolinJunContents.kpi5)*2))/6;
            this.youthPRViolinJunContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 5.388888889 * 100;
            console.log("youthPRViolin Overall performance = " + this.youthPRViolinJunContents.overallPerformance); 
            return this.youthPRViolinJunContents.overallPerformance;
            },
            yesICanJunOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.yesICanJunContents.kpi1) + getRealValue(this.yesICanJunContents.kpi2) + getRealValue(this.yesICanJunContents.kpi3))/3;
            this.yesICanJunContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 11.33333333 * 100;
            console.log("yesICan Overall performance = " + this.yesICanJunContents.overallPerformance); 
            return this.yesICanJunContents.overallPerformance;
            },
            crisisInterventionJunOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.crisisInterventionJunContents.kpi1) + getRealValue(this.crisisInterventionJunContents.kpi2))/2;
            this.crisisInterventionJunContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 104 * 100;
            console.log("crisisIntervention Overall performance = " + this.crisisInterventionJunContents.overallPerformance); 
            return this.crisisInterventionJunContents.overallPerformance;
            },
            communityDevelopmentJunOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.communityDevelopmentJunContents.kpi1) + getRealValue(this.communityDevelopmentJunContents.kpi2) + getRealValue(this.communityDevelopmentJunContents.kpi3))/3;
            this.communityDevelopmentJunContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 77.22222222 * 100;
            console.log("communityDevelopment Overall performance = " + this.communityDevelopmentJunContents.overallPerformance); 
            return this.communityDevelopmentJunContents.overallPerformance;
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
            cumulativeBudgetUsageJun(){
            const getRealValue = (val) => +val || val;
            return this.generalDashboardJunContents.budgetUsage = (((getRealValue(this.generalDashboardJunContents.expenses) + getRealValue(this.generalDashboardMayContents.expenses) + getRealValue(this.generalDashboardAprContents.expenses) + getRealValue(this.generalDashboardMarContents.expenses) + getRealValue(this.generalDashboardFebContents.expenses) + getRealValue(this.generalDashboardJanContents.expenses)) / getRealValue(this.generalDashboardAprContents.actualBudget))*100).toFixed(2)
            },
            totalCumulativeExpenseJun(){
            const getRealValue = (val) => +val || val;
            this.generalDashboardJunContents.cumulativeexpAdmin = (getRealValue(this.generalDashboardJunContents.expAdmin) + getRealValue(this.generalDashboardMayContents.expAdmin) + getRealValue(this.generalDashboardAprContents.expAdmin) + getRealValue(this.generalDashboardMarContents.expAdmin) + getRealValue(this.generalDashboardFebContents.expAdmin) + getRealValue(this.generalDashboardJanContents.expAdmin)).toFixed(2)
            this.generalDashboardJunContents.cumulativeexpPRfftnc = (getRealValue(this.generalDashboardJunContents.expPRfftnc) + getRealValue(this.generalDashboardMayContents.expPRfftnc) + getRealValue(this.generalDashboardAprContents.expPRfftnc) + getRealValue(this.generalDashboardMarContents.expPRfftnc) + getRealValue(this.generalDashboardFebContents.expPRfftnc) + getRealValue(this.generalDashboardJanContents.expPRfftnc)).toFixed(2)
            this.generalDashboardJunContents.cumulativeexpIncubator = (getRealValue(this.generalDashboardJunContents.expIncubator) + getRealValue(this.generalDashboardMayContents.expIncubator) + getRealValue(this.generalDashboardAprContents.expIncubator) + getRealValue(this.generalDashboardMarContents.expIncubator) + getRealValue(this.generalDashboardFebContents.expIncubator) + getRealValue(this.generalDashboardJanContents.expIncubator)).toFixed(2)
            this.generalDashboardJunContents.cumulativeexpAP = (getRealValue(this.generalDashboardJunContents.expAP) + getRealValue(this.generalDashboardMayContents.expAP) + getRealValue(this.generalDashboardAprContents.expAP) + getRealValue(this.generalDashboardMarContents.expAP) + getRealValue(this.generalDashboardFebContents.expAP) + getRealValue(this.generalDashboardJanContents.expAP)).toFixed(2)
            this.generalDashboardJunContents.cumulativeexpGFB = (getRealValue(this.generalDashboardJunContents.expGFB) + getRealValue(this.generalDashboardMayContents.expGFB) + getRealValue(this.generalDashboardAprContents.expGFB) + getRealValue(this.generalDashboardMarContents.expGFB) + getRealValue(this.generalDashboardFebContents.expGFB) + getRealValue(this.generalDashboardJanContents.expGFB)).toFixed(2)
            this.generalDashboardJunContents.cumulativeexpGIK = (getRealValue(this.generalDashboardJunContents.expGIK) + getRealValue(this.generalDashboardMayContents.expGIK) + getRealValue(this.generalDashboardAprContents.expGIK) + getRealValue(this.generalDashboardMarContents.expGIK) + getRealValue(this.generalDashboardFebContents.expGIK) + getRealValue(this.generalDashboardJanContents.expGIK)).toFixed(2)
            this.generalDashboardJunContents.cumulativeexpSH = (getRealValue(this.generalDashboardJunContents.expSH) + getRealValue(this.generalDashboardMayContents.expSH) + getRealValue(this.generalDashboardAprContents.expSH) + getRealValue(this.generalDashboardMarContents.expSH) + getRealValue(this.generalDashboardFebContents.expSH) + getRealValue(this.generalDashboardJanContents.expSH)).toFixed(2)
            this.generalDashboardJunContents.cumulativeexpCYFlactation = (getRealValue(this.generalDashboardJunContents.expCYFlactation) + getRealValue(this.generalDashboardMayContents.expCYFlactation) + getRealValue(this.generalDashboardAprContents.expCYFlactation) + getRealValue(this.generalDashboardMarContents.expCYFlactation) + getRealValue(this.generalDashboardFebContents.expCYFlactation) + getRealValue(this.generalDashboardJanContents.expCYFlactation)).toFixed(2)
            this.generalDashboardJunContents.cumulativeexpCPO = (getRealValue(this.generalDashboardJunContents.expCPO) + getRealValue(this.generalDashboardMayContents.expCPO) + getRealValue(this.generalDashboardAprContents.expCPO) + getRealValue(this.generalDashboardMarContents.expCPO) + getRealValue(this.generalDashboardFebContents.expCPO) + getRealValue(this.generalDashboardJanContents.expCPO)).toFixed(2)
            this.generalDashboardJunContents.cumulativeexpSeniorsProject = (getRealValue(this.generalDashboardJunContents.expSeniorsProject) + getRealValue(this.generalDashboardMayContents.expSeniorsProject) + getRealValue(this.generalDashboardAprContents.expSeniorsProject) + getRealValue(this.generalDashboardMarContents.expSeniorsProject) + getRealValue(this.generalDashboardFebContents.expSeniorsProject) + getRealValue(this.generalDashboardJanContents.expSeniorsProject)).toFixed(2)
            this.generalDashboardJunContents.cumulativeexpCSDmcConnell = (getRealValue(this.generalDashboardJunContents.expCSDmcConnell) + getRealValue(this.generalDashboardMayContents.expCSDmcConnell) + getRealValue(this.generalDashboardAprContents.expCSDmcConnell) + getRealValue(this.generalDashboardMarContents.expCSDmcConnell) + getRealValue(this.generalDashboardFebContents.expCSDmcConnell) + getRealValue(this.generalDashboardJanContents.expCSDmcConnell)).toFixed(2)
            this.generalDashboardJunContents.cumulativeexpOthers = (getRealValue(this.generalDashboardJunContents.expOthers) + getRealValue(this.generalDashboardMayContents.expOthers) + getRealValue(this.generalDashboardAprContents.expOthers) + getRealValue(this.generalDashboardMarContents.expOthers) + getRealValue(this.generalDashboardFebContents.expOthers) + getRealValue(this.generalDashboardJanContents.expOthers)).toFixed(2)
            },
            
            generalJunOverallPerformance(){
                const getRealValue = (val) => +val || val;
                var baseFebOverallPerformanceGeneralDashboard = ((2 * getRealValue(this.foodbankJunContents.overallPerformance)) + getRealValue(this.babyCupboardJunContents.overallPerformance) + 
                (1.25 * getRealValue(this.gikJunContents.overallPerformance)) + (0.8 * getRealValue(this.charity13JunContents.overallPerformance)) + getRealValue(this.entrepreneurshipJunContents.overallPerformance) + 
                getRealValue(this.employmentSkillsJunContents.overallPerformance) + (0.8 * getRealValue(this.socialHarvestJunContents.overallPerformance)) + (0.8 * getRealValue(this.marketMobileJunContents.overallPerformance)) + 
                (0.8 * getRealValue(this.gfbJunContents.overallPerformance)) + (0.8 * getRealValue(this.collectiveKitchenJunContents.overallPerformance)) + (0.8 * getRealValue(this.communityMealsJunContents.overallPerformance)) + 
                (1.5 * getRealValue(this.clothespinJunContents.overallPerformance)) + (2 * getRealValue(this.crisisInterventionJunContents.overallPerformance)) + (0.8 * getRealValue(this.yesICanJunContents.overallPerformance)) + 
                getRealValue(this.youthPREducationJunContents.overallPerformance) + getRealValue(this.youthPRSportJunContents.overallPerformance) + getRealValue(this.youthPRViolinJunContents.overallPerformance) + 
                getRealValue(this.pinsJunContents.overallPerformance) + getRealValue(this.overbrookSPJunContents.overallPerformance) + getRealValue(this.communityDevelopmentJunContents.overallPerformance));
                this.generalDashboardJunContents.mainOverallPerformance = (getRealValue(baseFebOverallPerformanceGeneralDashboard) / 21.35).toFixed(2)
                console.log("General Overall Performance: " + this.generalDashboardJunContents.mainOverallPerformance);
                return this.generalDashboardJunContents.mainOverallPerformance
            },

        },
        created(){
          this.readData()
        }

    }
</script>
