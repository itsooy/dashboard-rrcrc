<template>
    <div class="row q-col-gutter-sm q-ma-xs">
        <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">  <!--Number of Total Programs-->
                <q-card>
                  <q-card-section :class="$q.dark.isActive?'blue_dark':'bg-blue-8'" class="text-white">
                    <div class="row">
                      <div class="col-10">
                        <div class="text-h6">Number of Total Programs</div>
                        <div class="text-h5">{{generalDashboardAugContents.totalPrograms}}</div>
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
                        <div class="text-h5">{{generalDashboardAugContents.activePrograms}}</div>
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
                        <div class="text-h5">{{generalDashboardAugContents.projectsGoingOn}}</div>
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
                        <div class="text-h5">{{generalDashboardAugContents.totalUniqueVolunteers}} / {{generalDashboardAugContents.totalVolunteerHours}}</div>
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
                        :color="(foodbankAugContents.overallPerformance == null)?'grey':(foodbankAugContents.overallPerformance >= '0.0001' && foodbankAugContents.overallPerformance <= '40')?'red':(foodbankAugContents.overallPerformance > '40' && foodbankAugContents.overallPerformance <= '60')?'orange':(foodbankAugContents.overallPerformance > '60' && foodbankAugContents.overallPerformance < '90')?'yellow-7':(foodbankAugContents.overallPerformance >= '90' && foodbankAugContents.overallPerformance < '120')?'green':(foodbankAugContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(babyCupboardAugContents.overallPerformance == null)?'grey':(babyCupboardAugContents.overallPerformance >= '0.0001' && babyCupboardAugContents.overallPerformance <= '40')?'red':(babyCupboardAugContents.overallPerformance > '40' && babyCupboardAugContents.overallPerformance <= '60')?'orange':(babyCupboardAugContents.overallPerformance > '60' && babyCupboardAugContents.overallPerformance < '90')?'yellow-7':(babyCupboardAugContents.overallPerformance >= '90' && babyCupboardAugContents.overallPerformance < '120')?'green':(babyCupboardAugContents.overallPerformance >= '120'?'blue':'grey')"

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
                        :color="(gikAugContents.overallPerformance == null)?'grey':(gikAugContents.overallPerformance >= '0.0001' && gikAugContents.overallPerformance <= '40')?'red':(gikAugContents.overallPerformance > '40' && gikAugContents.overallPerformance <= '60')?'orange':(gikAugContents.overallPerformance > '60' && gikAugContents.overallPerformance < '90')?'yellow-7':(gikAugContents.overallPerformance >= '90' && gikAugContents.overallPerformance < '120')?'green':(gikAugContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(charity13AugContents.overallPerformance == null)?'grey':(charity13AugContents.overallPerformance >= '0.0001' && charity13AugContents.overallPerformance <= '40')?'red':(charity13AugContents.overallPerformance > '40' && charity13AugContents.overallPerformance <= '60')?'orange':(charity13AugContents.overallPerformance > '60' && charity13AugContents.overallPerformance < '90')?'yellow-7':(charity13AugContents.overallPerformance >= '90' && charity13AugContents.overallPerformance < '120')?'green':(charity13AugContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(entrepreneurshipAugContents.overallPerformance == null)?'grey':(entrepreneurshipAugContents.overallPerformance >= '0.0001' && entrepreneurshipAugContents.overallPerformance <= '40')?'red':(entrepreneurshipAugContents.overallPerformance > '40' && entrepreneurshipAugContents.overallPerformance <= '60')?'orange':(entrepreneurshipAugContents.overallPerformance > '60' && entrepreneurshipAugContents.overallPerformance < '90')?'yellow-7':(entrepreneurshipAugContents.overallPerformance >= '90' && entrepreneurshipAugContents.overallPerformance < '120')?'green':(entrepreneurshipAugContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(employmentSkillsAugContents.overallPerformance == null)?'grey':(employmentSkillsAugContents.overallPerformance >= '0.0001' && employmentSkillsAugContents.overallPerformance <= '40')?'red':(employmentSkillsAugContents.overallPerformance > '40' && employmentSkillsAugContents.overallPerformance <= '60')?'orange':(employmentSkillsAugContents.overallPerformance > '60' && employmentSkillsAugContents.overallPerformance < '90')?'yellow-7':(employmentSkillsAugContents.overallPerformance >= '90' && employmentSkillsAugContents.overallPerformance < '120')?'green':(employmentSkillsAugContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(socialHarvestAugContents.overallPerformance == null)?'grey':(socialHarvestAugContents.overallPerformance >= '0.0001' && socialHarvestAugContents.overallPerformance <= '40')?'red':(socialHarvestAugContents.overallPerformance > '40' && socialHarvestAugContents.overallPerformance <= '60')?'orange':(socialHarvestAugContents.overallPerformance > '60' && socialHarvestAugContents.overallPerformance < '90')?'yellow-7':(socialHarvestAugContents.overallPerformance >= '90' && socialHarvestAugContents.overallPerformance < '120')?'green':(socialHarvestAugContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(marketMobileAugContents.overallPerformance == null)?'grey':(marketMobileAugContents.overallPerformance >= '0.0001' && marketMobileAugContents.overallPerformance <= '40')?'red':(marketMobileAugContents.overallPerformance > '40' && marketMobileAugContents.overallPerformance <= '60')?'orange':(marketMobileAugContents.overallPerformance > '60' && marketMobileAugContents.overallPerformance < '90')?'yellow-7':(marketMobileAugContents.overallPerformance >= '90' && marketMobileAugContents.overallPerformance < '120')?'green':(marketMobileAugContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(clothespinAugContents.overallPerformance == null)?'grey':(clothespinAugContents.overallPerformance >= '0.0001' && clothespinAugContents.overallPerformance <= '40')?'red':(clothespinAugContents.overallPerformance > '40' && clothespinAugContents.overallPerformance <= '60')?'orange':(clothespinAugContents.overallPerformance > '60' && clothespinAugContents.overallPerformance < '90')?'yellow-7':(clothespinAugContents.overallPerformance >= '90' && clothespinAugContents.overallPerformance < '120')?'green':(clothespinAugContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(gfbAugContents.overallPerformance == null)?'grey':(gfbAugContents.overallPerformance >= '0.0001' && gfbAugContents.overallPerformance <= '40')?'red':(gfbAugContents.overallPerformance > '40' && gfbAugContents.overallPerformance <= '60')?'orange':(gfbAugContents.overallPerformance > '60' && gfbAugContents.overallPerformance < '90')?'yellow-7':(gfbAugContents.overallPerformance >= '90' && gfbAugContents.overallPerformance < '120')?'green':(gfbAugContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(overbrookSPAugContents.overallPerformance == null)?'grey':(overbrookSPAugContents.overallPerformance >= '0.0001' && overbrookSPAugContents.overallPerformance <= '40')?'red':(overbrookSPAugContents.overallPerformance > '40' && overbrookSPAugContents.overallPerformance <= '60')?'orange':(overbrookSPAugContents.overallPerformance > '60' && overbrookSPAugContents.overallPerformance < '90')?'yellow-7':(overbrookSPAugContents.overallPerformance >= '90' && overbrookSPAugContents.overallPerformance < '120')?'green':(overbrookSPAugContents.overallPerformance >= '120'?'blue':'grey')"
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
                            :color="(collectiveKitchenAugContents.overallPerformance == null)?'grey':(collectiveKitchenAugContents.overallPerformance >= '0.0001' && collectiveKitchenAugContents.overallPerformance <= '40')?'red':(collectiveKitchenAugContents.overallPerformance > '40' && collectiveKitchenAugContents.overallPerformance <= '60')?'orange':(collectiveKitchenAugContents.overallPerformance > '60' && collectiveKitchenAugContents.overallPerformance < '90')?'yellow-7':(collectiveKitchenAugContents.overallPerformance >= '90' && collectiveKitchenAugContents.overallPerformance < '120')?'green':(collectiveKitchenAugContents.overallPerformance >= '120'?'blue':'grey')"
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
                            :color="(communityMealsAugContents.overallPerformance == null)?'grey':(communityMealsAugContents.overallPerformance >= '0.0001' && communityMealsAugContents.overallPerformance <= '40')?'red':(communityMealsAugContents.overallPerformance > '40' && communityMealsAugContents.overallPerformance <= '60')?'orange':(communityMealsAugContents.overallPerformance > '60' && communityMealsAugContents.overallPerformance < '90')?'yellow-7':(communityMealsAugContents.overallPerformance >= '90' && communityMealsAugContents.overallPerformance < '120')?'green':(communityMealsAugContents.overallPerformance >= '120'?'blue':'grey')"
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
                            :color="(pinsAugContents.overallPerformance == null)?'grey':(pinsAugContents.overallPerformance >= '0.0001' && pinsAugContents.overallPerformance <= '40')?'red':(pinsAugContents.overallPerformance > '40' && pinsAugContents.overallPerformance <= '60')?'orange':(pinsAugContents.overallPerformance > '60' && pinsAugContents.overallPerformance < '90')?'yellow-7':(pinsAugContents.overallPerformance >= '90' && pinsAugContents.overallPerformance < '120')?'green':(pinsAugContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(yesICanAugContents.overallPerformance == null)?'grey':(yesICanAugContents.overallPerformance >= '0.0001' && yesICanAugContents.overallPerformance <= '40')?'red':(yesICanAugContents.overallPerformance > '40' && yesICanAugContents.overallPerformance <= '60')?'orange':(yesICanAugContents.overallPerformance > '60' && yesICanAugContents.overallPerformance < '90')?'yellow-7':(yesICanAugContents.overallPerformance >= '90' && yesICanAugContents.overallPerformance < '120')?'green':(yesICanAugContents.overallPerformance >= '120'?'blue':'grey')"
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
                            :color="(crisisInterventionAugContents.overallPerformance == null)?'grey':(crisisInterventionAugContents.overallPerformance >= '0.0001' && crisisInterventionAugContents.overallPerformance <= '40')?'red':(crisisInterventionAugContents.overallPerformance > '40' && crisisInterventionAugContents.overallPerformance <= '60')?'orange':(crisisInterventionAugContents.overallPerformance > '60' && crisisInterventionAugContents.overallPerformance < '90')?'yellow-7':(crisisInterventionAugContents.overallPerformance >= '90' && crisisInterventionAugContents.overallPerformance < '120')?'green':(crisisInterventionAugContents.overallPerformance >= '120'?'blue':'grey')"
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
                            :color="(youthPREducationAugContents.overallPerformance == null)?'grey':(youthPREducationAugContents.overallPerformance >= '0.0001' && youthPREducationAugContents.overallPerformance <= '40')?'red':(youthPREducationAugContents.overallPerformance > '40' && youthPREducationAugContents.overallPerformance <= '60')?'orange':(youthPREducationAugContents.overallPerformance > '60' && youthPREducationAugContents.overallPerformance < '90')?'yellow-7':(youthPREducationAugContents.overallPerformance >= '90' && youthPREducationAugContents.overallPerformance < '120')?'green':(youthPREducationAugContents.overallPerformance >= '120'?'blue':'grey')"
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
                            :color="(youthPRSportAugContents.overallPerformance == null)?'grey':(youthPRSportAugContents.overallPerformance >= '0.0001' && youthPRSportAugContents.overallPerformance <= '40')?'red':(youthPRSportAugContents.overallPerformance > '40' && youthPRSportAugContents.overallPerformance <= '60')?'orange':(youthPRSportAugContents.overallPerformance > '60' && youthPRSportAugContents.overallPerformance < '90')?'yellow-7':(youthPRSportAugContents.overallPerformance >= '90' && youthPRSportAugContents.overallPerformance < '120')?'green':(youthPRSportAugContents.overallPerformance >= '120'?'blue':'grey')"
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
                            :color="(youthPRViolinAugContents.overallPerformance == null)?'grey':(youthPRViolinAugContents.overallPerformance >= '0.0001' && youthPRViolinAugContents.overallPerformance <= '40')?'red':(youthPRViolinAugContents.overallPerformance > '40' && youthPRViolinAugContents.overallPerformance <= '60')?'orange':(youthPRViolinAugContents.overallPerformance > '60' && youthPRViolinAugContents.overallPerformance < '90')?'yellow-7':(youthPRViolinAugContents.overallPerformance >= '90' && youthPRViolinAugContents.overallPerformance < '120')?'green':(youthPRViolinAugContents.overallPerformance >= '120'?'blue':'grey')"
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
                            :color="(communityDevelopmentAugContents.overallPerformance == null)?'grey':(communityDevelopmentAugContents.overallPerformance >= '0.0001' && communityDevelopmentAugContents.overallPerformance <= '40')?'red':(communityDevelopmentAugContents.overallPerformance > '40' && communityDevelopmentAugContents.overallPerformance <= '60')?'orange':(communityDevelopmentAugContents.overallPerformance > '60' && communityDevelopmentAugContents.overallPerformance < '90')?'yellow-7':(communityDevelopmentAugContents.overallPerformance >= '90' && communityDevelopmentAugContents.overallPerformance < '120')?'green':(communityDevelopmentAugContents.overallPerformance >= '120'?'blue':'grey')"
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
                      data: [{value: this.generalDashboardAugContents.mainOverallPerformance}],
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
                      data: [{value: this.generalDashboardAugContents.budgetUsage}],
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
                                {value: this.generalDashboardAugContents.cumulativeexpAdmin, name: 'Admin', selected: false},
                                {value: this.generalDashboardAugContents.cumulativeexpPRfftnc, name: 'PR / FFTNC', selected: false},
                                {value: this.generalDashboardAugContents.cumulativeexpIncubator, name: 'Incubator', selected: false},
                                {value: this.generalDashboardAugContents.cumulativeexpAP, name: 'A-P', selected: false},
                                {value: this.generalDashboardAugContents.cumulativeexpGFB, name: 'GFB', selected: false},
                                {value: this.generalDashboardAugContents.cumulativeexpGIK, name: 'GIK', selected: false},
                                {value: this.generalDashboardAugContents.cumulativeexpSH, name: 'SH', selected: false},
                                {value: this.generalDashboardAugContents.cumulativeexpCYFlactation, name: 'CYF / Lactation', selected: false},
                                {value: this.generalDashboardAugContents.cumulativeexpCPO, name: 'CPO', selected: false},
                                {value: this.generalDashboardAugContents.cumulativeexpSeniorsProject, name: 'Seniors Project', selected: false},
                                {value: this.generalDashboardAugContents.cumulativeexpCSDmcConnell, name: 'CSD / McConnell', selected: false},
                                {value: this.generalDashboardAugContents.cumulativeexpOthers, name: 'Others', selected: false}
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
                                {value: this.generalDashboardAugContents.expAdmin, name: 'Admin', selected: false},
                                {value: this.generalDashboardAugContents.expPRfftnc, name: 'PR / FFTNC', selected: false},
                                {value: this.generalDashboardAugContents.expIncubator, name: 'Incubator', selected: false},
                                {value: this.generalDashboardAugContents.expAP, name: 'A-P', selected: false},
                                {value: this.generalDashboardAugContents.expGFB, name: 'GFB', selected: false},
                                {value: this.generalDashboardAugContents.expGIK, name: 'GIK', selected: false},
                                {value: this.generalDashboardAugContents.expSH, name: 'SH', selected: false},
                                {value: this.generalDashboardAugContents.expCYFlactation, name: 'CYF / Lactation', selected: false},
                                {value: this.generalDashboardAugContents.expCPO, name: 'CPO', selected: false},
                                {value: this.generalDashboardAugContents.expSeniorsProject, name: 'Seniors Project', selected: false},
                                {value: this.generalDashboardAugContents.expCSDmcConnell, name: 'CSD / McConnell', selected: false},
                                {value: this.generalDashboardAugContents.expOthers, name: 'Others', selected: false}
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
                    } else {
                        // doc.data() will be undefined in this case
                        console.log("No such document! - generalDashboard");
                    }
                }).catch((error) => {
                    console.log("Error getting document:", error);
                });
                //    GENERAL DASHBOARD | AUGUST
                var docgeneralDashboardAugRef = db.collection("generalDashboard").doc("august");

                docgeneralDashboardAugRef.get().then((doc) => {
                    if (doc.exists) {
                        console.log("Document data:", doc.data());
                        this.generalDashboardAugContents = doc.data();
                        this.totalExpenseAug();
                        this.cumulativeBudgetUsageAug();
                        this.totalCumulativeExpenseAug();

                        this.foodbankAug();
                    } else {
                        // doc.data() will be undefined in this case
                        console.log("No such document! - generalDashboard");
                    }
                }).catch((error) => {
                    console.log("Error getting document:", error);
                });
            },  
                foodbankAug(){
                    //    FOODBANK | MAY
                    var docfoodbankAprRef = db.collection("foodbank").doc("august");

                    docfoodbankAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.foodbankAugContents = doc.data();
                            this.foodbankAugOverallPerformance();

                            this.babyCupboardAug();

                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - foodbank");
                        }

                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                babyCupboardAug(){
                                        //    BABY CUPBOARD | MAY
                    var docbabyCupboardAprRef = db.collection("babyCupboard").doc("august");

                    docbabyCupboardAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.babyCupboardAugContents = doc.data();
                            this.babyCupboardAugOverallPerformance();

                            this.gikAug();
                            

                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - babyCupboard");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                gikAug(){
                    //    GIFTS IN KIND | MAY
                    var docgikAprRef = db.collection("gik").doc("august");

                    docgikAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.gikAugContents = doc.data();
                            this.gikAugOverallPerformance();
                            
                            this.charity13Aug();
                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - gik");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });

                },
                charity13Aug(){
                    //    charITy13 | MAY
                    var docCharity13AprRef = db.collection("charity13").doc("august");

                    docCharity13AprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.charity13AugContents = doc.data();
                            this.charity13AugOverallPerformance();
                            
                            this.entrepreneurshipAug();
                            
                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - charity13");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });

                },entrepreneurshipAug(){
                    //    ENTREPRENEURSHIP | MAY
                    var docentrepreneurshipAprRef = db.collection("entrepreneurship").doc("august");

                    docentrepreneurshipAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.entrepreneurshipAugContents = doc.data();
                            this.entrepreneurshipAugOverallPerformance();

                            this.employmentSkillsAug();

                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - entrepreneurship");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                employmentSkillsAug(){
                    //    EMPLOYEMENT SKILLS | MAY
                    var docemploymentSkillsAprRef = db.collection("employmentSkills").doc("august");

                    docemploymentSkillsAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.employmentSkillsAugContents = doc.data();
                            this.employmentSkillsAugOverallPerformance();

                            this.socialHarvestAug();

                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - employmentSkills");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                socialHarvestAug(){
                    //    SOCIAL HARVEST | MAY
                    var docsocialHarvestAprRef = db.collection("socialHarvest").doc("august");

                    docsocialHarvestAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.socialHarvestAugContents = doc.data();
                            this.socialHarvestAugOverallPerformance();

                            this.marketMobileAug();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - socialHarvest");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });

                },
                marketMobileAug(){
                    //    MARKET MOBILE | MAY
                    var docmarketMobileAprRef = db.collection("marketMobile").doc("august");

                    docmarketMobileAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.marketMobileAugContents = doc.data();
                            this.marketMobileAugOverallPerformance();

                            this.clothespinAug();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - marketMobile");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });

                },
                clothespinAug(){
                    //    CLOTHESPIN | MAY
                    var docclothespinAprRef = db.collection("clothespin").doc("august");

                    docclothespinAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.clothespinAugContents = doc.data();
                            this.clothespinAugOverallPerformance();

                            this.gfbAug();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - clothespin");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });

                },
                gfbAug(){
                    //    GOOD FOOD BOX | MAY
                    var docgfbAprRef = db.collection("gfb").doc("august");

                    docgfbAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.gfbAugContents = doc.data();
                            this.gfbAugOverallPerformance();
                            
                            this.overbrookSPAug();

                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - gfb");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });


                },
                overbrookSPAug(){
                    //    Overbrook SP | MAY
                    var docoverbrookSPAprRef = db.collection("overbrookSP").doc("august");

                    docoverbrookSPAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.overbrookSPAugContents = doc.data();
                            this.overbrookSPAugOverallPerformance();

                            this.collectiveKitchenAug();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - overbrookSP");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });

                },
                collectiveKitchenAug(){
                    //    COLLECTIVE KITCHEN | MAY
                    var doccollectiveKitchenAprRef = db.collection("collectiveKitchen").doc("august");

                    doccollectiveKitchenAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.collectiveKitchenAugContents = doc.data();
                            this.collectiveKitchenAugOverallPerformance(); 

                            this.communityMealsAug();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - collectiveKitchen");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });

                },
                communityMealsAug(){
                    //        COMMUNITY MEALS | MAY
                    var doccommunityMealsAprRef = db.collection("communityMeals").doc("august");

                    doccommunityMealsAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.communityMealsAugContents = doc.data();
                            this.communityMealsAugOverallPerformance();

                            this.pinsAug();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - communityMeals");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });

                },
                pinsAug(){
                    //    PINS | MAY
                    var docpinsAprRef = db.collection("pins").doc("august");

                    docpinsAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.pinsAugContents = doc.data();
                            this.pinsAugOverallPerformance();

                            this.yesICanAug();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - pins");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                yesICanAug(){
                    //    Yes I Can | MAY
                    var docyesICanAprRef = db.collection("yesICan").doc("august");

                    docyesICanAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.yesICanAugContents = doc.data();
                            this.yesICanAugOverallPerformance();

                            this.crisisInterventionAug();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - yesICan");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                crisisInterventionAug(){
                    //    CRISIS INTERVENTION | MAY
                    var doccrisisInterventionAprRef = db.collection("crisisIntervention").doc("august");

                    doccrisisInterventionAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.crisisInterventionAugContents = doc.data();
                            this.crisisInterventionAugOverallPerformance();

                            this.youthPREducationAug();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - crisisIntervention");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                youthPREducationAug(){
                    //    YouthPR Education | MAY
                    var docyouthPREducationAprRef = db.collection("youthPREducation").doc("august");

                    docyouthPREducationAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.youthPREducationAugContents = doc.data();
                            this.youthPREducationAugOverallPerformance();

                            this.youthPRSportAug();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - youthPREducation");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                youthPRSportAug(){
                    //    YouthPR Sport | MAY
                    var docyouthPRSportAprRef = db.collection("youthPRSport").doc("august");

                    docyouthPRSportAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.youthPRSportAugContents = doc.data();
                            this.youthPRSportAugOverallPerformance();

                            this.youthPRViolinAug();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - youthPRSport");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                youthPRViolinAug(){
                    //    YouthPR Violin | MAY
                    var docyouthPRViolinAprRef = db.collection("youthPRViolin").doc("august");

                    docyouthPRViolinAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.youthPRViolinAugContents = doc.data();
                            this.youthPRViolinAugOverallPerformance();

                            this.communityDevelopmentAug();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - youthPRViolin");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                communityDevelopmentAug(){
                    //    COMMUNITY DEVELOPMENT | MAY
                    var doccommunityDevelopmentAprRef = db.collection("communityDevelopment").doc("august");

                    doccommunityDevelopmentAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.communityDevelopmentAugContents = doc.data();
                            this.communityDevelopmentAugOverallPerformance();
                            
                            console.log("denemem: "+ this.foodbankAugContents.kpi1 + " baby: " + this.babyCupboardAugContents.kpi1 + 
                            " GIK: " + this.gikAugContents.kpi1 + " CD: " + this.youthPRViolinAugContents.kpi1);
                            this.generalAugOverallPerformance();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - communityDevelopment");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },

            gikAugOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = ((getRealValue(this.gikAugContents.kpi1)*2) + getRealValue(this.gikAugContents.kpi2) + getRealValue(this.gikAugContents.kpi3) + (getRealValue(this.gikAugContents.kpi4)*2))/6;
            this.gikAugContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 29.5 * 100;
            console.log("GIK Overall performance = " + this.gikAugContents.overallPerformance);             
            return this.gikAugContents.overallPerformance;
            },
            foodbankAugOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = ((getRealValue(this.foodbankAugContents.kpi1)*2) + getRealValue(this.foodbankAugContents.kpi2) + getRealValue(this.foodbankAugContents.kpi3) + (getRealValue(this.foodbankAugContents.kpi4)*2) + getRealValue(this.foodbankAugContents.kpi5) + getRealValue(this.foodbankAugContents.kpi6))/8;
            this.foodbankAugContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 287.09375 * 100;
            console.log("Foodbank Overall performance = " + this.foodbankAugContents.overallPerformance); 
            return this.foodbankAugContents.overallPerformance;
            },
            babyCupboardAugOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = ((getRealValue(this.babyCupboardAugContents.kpi1)*2) + getRealValue(this.babyCupboardAugContents.kpi2) + getRealValue(this.babyCupboardAugContents.kpi3) + (getRealValue(this.babyCupboardAugContents.kpi4)*2))/6;
            this.babyCupboardAugContents.overallPerformance = (getRealValue(baseOverallPerformanceGIK) / 38.125) * 100;
            console.log("Baby Cupboard Overall performance = " + this.babyCupboardAugContents.overallPerformance); 
            return this.babyCupboardAugContents.overallPerformance;
            },
            charity13AugOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = ((getRealValue(this.charity13AugContents.kpi1)*2) + getRealValue(this.charity13AugContents.kpi2) + getRealValue(this.charity13AugContents.kpi3) + getRealValue(this.charity13AugContents.kpi4) + (getRealValue(this.charity13AugContents.kpi5)*2))/7;
            this.charity13AugContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 2.19047619 * 100;
            console.log("charITy13 Overall performance = " + this.charity13AugContents.overallPerformance); 
            return this.charity13AugContents.overallPerformance;
            },
            entrepreneurshipAugOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.entrepreneurshipAugContents.kpi1) + getRealValue(this.entrepreneurshipAugContents.kpi2) + getRealValue(this.entrepreneurshipAugContents.kpi3) + getRealValue(this.entrepreneurshipAugContents.kpi4))/4;
            this.entrepreneurshipAugContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 1217.967792 * 100;
            console.log("entrepreneurship Overall performance = " + this.entrepreneurshipAugContents.overallPerformance); 
            return this.entrepreneurshipAugContents.overallPerformance;
            },
            employmentSkillsAugOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.employmentSkillsAugContents.kpi1) + getRealValue(this.employmentSkillsAugContents.kpi2) + getRealValue(this.employmentSkillsAugContents.kpi3) + getRealValue(this.employmentSkillsAugContents.kpi4))/4;
            this.employmentSkillsAugContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 45.83333333 * 100;
            console.log("employmentSkills Overall performance = " + this.employmentSkillsAugContents.overallPerformance); 
            return this.employmentSkillsAugContents.overallPerformance;
            },
            socialHarvestAugOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.socialHarvestAugContents.kpi1) + getRealValue(this.socialHarvestAugContents.kpi2) + getRealValue(this.socialHarvestAugContents.kpi3) + getRealValue(this.socialHarvestAugContents.kpi4) + getRealValue(this.socialHarvestAugContents.kpi5))/5;
            this.socialHarvestAugContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 29.7409 * 100;
            console.log("socialHarvest Overall performance = " + this.socialHarvestAugContents.overallPerformance); 
            return this.socialHarvestAugContents.overallPerformance;
            },
            marketMobileAugOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.marketMobileAugContents.kpi1) + getRealValue(this.marketMobileAugContents.kpi2) + (getRealValue(this.marketMobileAugContents.kpi3)*2) + (getRealValue(this.marketMobileAugContents.kpi4)*2))/6;
            this.marketMobileAugContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 149.9444444 * 100;
            console.log("marketMobile Overall performance = " + this.marketMobileAugContents.overallPerformance); 
            return this.marketMobileAugContents.overallPerformance;
            },
            clothespinAugOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.clothespinAugContents.kpi1) + getRealValue(this.clothespinAugContents.kpi2) + getRealValue(this.clothespinAugContents.kpi3))/3;
            this.clothespinAugContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 144 * 100;
            console.log("clothespin Overall performance = " + this.clothespinAugContents.overallPerformance); 
            return this.clothespinAugContents.overallPerformance;
            },
            gfbAugOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.gfbAugContents.kpi1) + getRealValue(this.gfbAugContents.kpi2) + getRealValue(this.gfbAugContents.kpi3))/3;
            this.gfbAugContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 274.1111111 * 100;
            console.log("gfb Overall performance = " + this.gfbAugContents.overallPerformance); 
            return this.gfbAugContents.overallPerformance;
            },
            overbrookSPAugOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.overbrookSPAugContents.kpi1) + getRealValue(this.overbrookSPAugContents.kpi2))/2;
            this.overbrookSPAugContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 101.75 * 100;
            console.log("overbrookSP Overall performance = " + this.overbrookSPAugContents.overallPerformance); 
            return this.overbrookSPAugContents.overallPerformance;
            },
            collectiveKitchenAugOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.collectiveKitchenAugContents.kpi1) + getRealValue(this.collectiveKitchenAugContents.kpi2) + getRealValue(this.collectiveKitchenAugContents.kpi3) + getRealValue(this.collectiveKitchenAugContents.kpi4))/4;
            this.collectiveKitchenAugContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 5.75 * 100;
            console.log("collectiveKitchen Overall performance = " + this.collectiveKitchenAugContents.overallPerformance); 
            return this.collectiveKitchenAugContents.overallPerformance;
            },
            communityMealsAugOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.communityMealsAugContents.kpi1) + getRealValue(this.communityMealsAugContents.kpi2) + getRealValue(this.communityMealsAugContents.kpi3) + (getRealValue(this.communityMealsAugContents.kpi4)*2))/5;
            this.communityMealsAugContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 290.2666667 * 100;
            console.log("communityMeals Overall performance = " + this.communityMealsAugContents.overallPerformance); 
            return this.communityMealsAugContents.overallPerformance;
            },
            pinsAugOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.pinsAugContents.kpi1) + getRealValue(this.pinsAugContents.kpi2) + getRealValue(this.pinsAugContents.kpi3))/3;
            this.pinsAugContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 10.33333333 * 100;
            console.log("pins Overall performance = " + this.pinsAugContents.overallPerformance); 
            return this.pinsAugContents.overallPerformance;
            },
            youthPREducationAugOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.youthPREducationAugContents.kpi1) + getRealValue(this.youthPREducationAugContents.kpi2) + getRealValue(this.youthPREducationAugContents.kpi3) + getRealValue(this.youthPREducationAugContents.kpi4) + (getRealValue(this.youthPREducationAugContents.kpi5)*2))/6;
            this.youthPREducationAugContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 13 * 100;
            console.log("youthPREducation Overall performance = " + this.youthPREducationAugContents.overallPerformance); 
            return this.youthPREducationAugContents.overallPerformance;
            },
            youthPRSportAugOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.youthPRSportAugContents.kpi1) + getRealValue(this.youthPRSportAugContents.kpi2) + getRealValue(this.youthPRSportAugContents.kpi3) + getRealValue(this.youthPRSportAugContents.kpi4) + (getRealValue(this.youthPRSportAugContents.kpi5)*2))/6;
            this.youthPRSportAugContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 1.5 * 100;
            console.log("youthPRSport Overall performance = " + this.youthPRSportAugContents.overallPerformance); 
            return this.youthPRSportAugContents.overallPerformance;
            },
            youthPRViolinAugOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.youthPRViolinAugContents.kpi1) + getRealValue(this.youthPRViolinAugContents.kpi2) + getRealValue(this.youthPRViolinAugContents.kpi3) + getRealValue(this.youthPRViolinAugContents.kpi4) + (getRealValue(this.youthPRViolinAugContents.kpi5)*2))/6;
            this.youthPRViolinAugContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 5.388888889 * 100;
            console.log("youthPRViolin Overall performance = " + this.youthPRViolinAugContents.overallPerformance); 
            return this.youthPRViolinAugContents.overallPerformance;
            },
            yesICanAugOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.yesICanAugContents.kpi1) + getRealValue(this.yesICanAugContents.kpi2) + getRealValue(this.yesICanAugContents.kpi3))/3;
            this.yesICanAugContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 11.33333333 * 100;
            console.log("yesICan Overall performance = " + this.yesICanAugContents.overallPerformance); 
            return this.yesICanAugContents.overallPerformance;
            },
            crisisInterventionAugOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.crisisInterventionAugContents.kpi1) + getRealValue(this.crisisInterventionAugContents.kpi2))/2;
            this.crisisInterventionAugContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 104 * 100;
            console.log("crisisIntervention Overall performance = " + this.crisisInterventionAugContents.overallPerformance); 
            return this.crisisInterventionAugContents.overallPerformance;
            },
            communityDevelopmentAugOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.communityDevelopmentAugContents.kpi1) + getRealValue(this.communityDevelopmentAugContents.kpi2) + getRealValue(this.communityDevelopmentAugContents.kpi3))/3;
            this.communityDevelopmentAugContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 77.22222222 * 100;
            console.log("communityDevelopment Overall performance = " + this.communityDevelopmentAugContents.overallPerformance); 
            return this.communityDevelopmentAugContents.overallPerformance;
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
            totalExpenseAug(){
            const getRealValue = (val) => +val || val;
            return this.generalDashboardAugContents.expenses = getRealValue(this.generalDashboardAugContents.expAdmin) + 
            getRealValue(this.generalDashboardAugContents.expPRfftnc) + getRealValue(this.generalDashboardAugContents.expIncubator) + 
            getRealValue(this.generalDashboardAugContents.expAP) + getRealValue(this.generalDashboardAugContents.expGFB) + 
            getRealValue(this.generalDashboardAugContents.expGIK) + getRealValue(this.generalDashboardAugContents.expSH) + 
            getRealValue(this.generalDashboardAugContents.expCYFlactation) + getRealValue(this.generalDashboardAugContents.expCPO) + 
            getRealValue(this.generalDashboardAugContents.expSeniorsProject) + getRealValue(this.generalDashboardAugContents.expCSDmcConnell) + 
            getRealValue(this.generalDashboardAugContents.expOthers)
            },
            cumulativeBudgetUsageAug(){
            const getRealValue = (val) => +val || val;
            return this.generalDashboardAugContents.budgetUsage = (((getRealValue(this.generalDashboardAugContents.expenses) + getRealValue(this.generalDashboardJulContents.expenses) + getRealValue(this.generalDashboardJunContents.expenses) + getRealValue(this.generalDashboardMayContents.expenses) + getRealValue(this.generalDashboardAprContents.expenses) + getRealValue(this.generalDashboardMarContents.expenses) + getRealValue(this.generalDashboardFebContents.expenses) + getRealValue(this.generalDashboardJanContents.expenses)) / getRealValue(this.generalDashboardAprContents.actualBudget))*100).toFixed(2)
            },
            totalCumulativeExpenseAug(){
            const getRealValue = (val) => +val || val;
            this.generalDashboardAugContents.cumulativeexpAdmin = (getRealValue(this.generalDashboardAugContents.expAdmin) + getRealValue(this.generalDashboardJulContents.expAdmin) + getRealValue(this.generalDashboardJunContents.expAdmin) + getRealValue(this.generalDashboardMayContents.expAdmin) + getRealValue(this.generalDashboardAprContents.expAdmin) + getRealValue(this.generalDashboardMarContents.expAdmin) + getRealValue(this.generalDashboardFebContents.expAdmin) + getRealValue(this.generalDashboardJanContents.expAdmin)).toFixed(2)
            this.generalDashboardAugContents.cumulativeexpPRfftnc = (getRealValue(this.generalDashboardAugContents.expPRfftnc) + getRealValue(this.generalDashboardJulContents.expPRfftnc) + getRealValue(this.generalDashboardJunContents.expPRfftnc) + getRealValue(this.generalDashboardMayContents.expPRfftnc) + getRealValue(this.generalDashboardAprContents.expPRfftnc) + getRealValue(this.generalDashboardMarContents.expPRfftnc) + getRealValue(this.generalDashboardFebContents.expPRfftnc) + getRealValue(this.generalDashboardJanContents.expPRfftnc)).toFixed(2)
            this.generalDashboardAugContents.cumulativeexpIncubator = (getRealValue(this.generalDashboardAugContents.expIncubator) + getRealValue(this.generalDashboardJulContents.expIncubator) + getRealValue(this.generalDashboardJunContents.expIncubator) + getRealValue(this.generalDashboardMayContents.expIncubator) + getRealValue(this.generalDashboardAprContents.expIncubator) + getRealValue(this.generalDashboardMarContents.expIncubator) + getRealValue(this.generalDashboardFebContents.expIncubator) + getRealValue(this.generalDashboardJanContents.expIncubator)).toFixed(2)
            this.generalDashboardAugContents.cumulativeexpAP = (getRealValue(this.generalDashboardAugContents.expAP) + getRealValue(this.generalDashboardJulContents.expAP) + getRealValue(this.generalDashboardJunContents.expAP) + getRealValue(this.generalDashboardMayContents.expAP) + getRealValue(this.generalDashboardAprContents.expAP) + getRealValue(this.generalDashboardMarContents.expAP) + getRealValue(this.generalDashboardFebContents.expAP) + getRealValue(this.generalDashboardJanContents.expAP)).toFixed(2)
            this.generalDashboardAugContents.cumulativeexpGFB = (getRealValue(this.generalDashboardAugContents.expGFB) + getRealValue(this.generalDashboardJulContents.expGFB) + getRealValue(this.generalDashboardJunContents.expGFB) + getRealValue(this.generalDashboardMayContents.expGFB) + getRealValue(this.generalDashboardAprContents.expGFB) + getRealValue(this.generalDashboardMarContents.expGFB) + getRealValue(this.generalDashboardFebContents.expGFB) + getRealValue(this.generalDashboardJanContents.expGFB)).toFixed(2)
            this.generalDashboardAugContents.cumulativeexpGIK = (getRealValue(this.generalDashboardAugContents.expGIK) + getRealValue(this.generalDashboardJulContents.expGIK) + getRealValue(this.generalDashboardJunContents.expGIK) + getRealValue(this.generalDashboardMayContents.expGIK) + getRealValue(this.generalDashboardAprContents.expGIK) + getRealValue(this.generalDashboardMarContents.expGIK) + getRealValue(this.generalDashboardFebContents.expGIK) + getRealValue(this.generalDashboardJanContents.expGIK)).toFixed(2)
            this.generalDashboardAugContents.cumulativeexpSH = (getRealValue(this.generalDashboardAugContents.expSH) + getRealValue(this.generalDashboardJulContents.expSH) + getRealValue(this.generalDashboardJunContents.expSH) + getRealValue(this.generalDashboardMayContents.expSH) + getRealValue(this.generalDashboardAprContents.expSH) + getRealValue(this.generalDashboardMarContents.expSH) + getRealValue(this.generalDashboardFebContents.expSH) + getRealValue(this.generalDashboardJanContents.expSH)).toFixed(2)
            this.generalDashboardAugContents.cumulativeexpCYFlactation = (getRealValue(this.generalDashboardAugContents.expCYFlactation) + getRealValue(this.generalDashboardJulContents.expCYFlactation) + getRealValue(this.generalDashboardJunContents.expCYFlactation) + getRealValue(this.generalDashboardMayContents.expCYFlactation) + getRealValue(this.generalDashboardAprContents.expCYFlactation) + getRealValue(this.generalDashboardMarContents.expCYFlactation) + getRealValue(this.generalDashboardFebContents.expCYFlactation) + getRealValue(this.generalDashboardJanContents.expCYFlactation)).toFixed(2)
            this.generalDashboardAugContents.cumulativeexpCPO = (getRealValue(this.generalDashboardAugContents.expCPO) + getRealValue(this.generalDashboardJulContents.expCPO) + getRealValue(this.generalDashboardJunContents.expCPO) + getRealValue(this.generalDashboardMayContents.expCPO) + getRealValue(this.generalDashboardAprContents.expCPO) + getRealValue(this.generalDashboardMarContents.expCPO) + getRealValue(this.generalDashboardFebContents.expCPO) + getRealValue(this.generalDashboardJanContents.expCPO)).toFixed(2)
            this.generalDashboardAugContents.cumulativeexpSeniorsProject = (getRealValue(this.generalDashboardAugContents.expSeniorsProject) + getRealValue(this.generalDashboardJulContents.expSeniorsProject) + getRealValue(this.generalDashboardJunContents.expSeniorsProject) + getRealValue(this.generalDashboardMayContents.expSeniorsProject) + getRealValue(this.generalDashboardAprContents.expSeniorsProject) + getRealValue(this.generalDashboardMarContents.expSeniorsProject) + getRealValue(this.generalDashboardFebContents.expSeniorsProject) + getRealValue(this.generalDashboardJanContents.expSeniorsProject)).toFixed(2)
            this.generalDashboardAugContents.cumulativeexpCSDmcConnell = (getRealValue(this.generalDashboardAugContents.expCSDmcConnell) + getRealValue(this.generalDashboardJulContents.expCSDmcConnell) + getRealValue(this.generalDashboardJunContents.expCSDmcConnell) + getRealValue(this.generalDashboardMayContents.expCSDmcConnell) + getRealValue(this.generalDashboardAprContents.expCSDmcConnell) + getRealValue(this.generalDashboardMarContents.expCSDmcConnell) + getRealValue(this.generalDashboardFebContents.expCSDmcConnell) + getRealValue(this.generalDashboardJanContents.expCSDmcConnell)).toFixed(2)
            this.generalDashboardAugContents.cumulativeexpOthers = (getRealValue(this.generalDashboardAugContents.expOthers) + getRealValue(this.generalDashboardJulContents.expOthers) + getRealValue(this.generalDashboardJunContents.expOthers) + getRealValue(this.generalDashboardMayContents.expOthers) + getRealValue(this.generalDashboardAprContents.expOthers) + getRealValue(this.generalDashboardMarContents.expOthers) + getRealValue(this.generalDashboardFebContents.expOthers) + getRealValue(this.generalDashboardJanContents.expOthers)).toFixed(2)
            },
            
            generalAugOverallPerformance(){
                const getRealValue = (val) => +val || val;
                var baseFebOverallPerformanceGeneralDashboard = ((2 * getRealValue(this.foodbankAugContents.overallPerformance)) + getRealValue(this.babyCupboardAugContents.overallPerformance) + 
                (1.25 * getRealValue(this.gikAugContents.overallPerformance)) + (0.8 * getRealValue(this.charity13AugContents.overallPerformance)) + getRealValue(this.entrepreneurshipAugContents.overallPerformance) + 
                getRealValue(this.employmentSkillsAugContents.overallPerformance) + (0.8 * getRealValue(this.socialHarvestAugContents.overallPerformance)) + (0.8 * getRealValue(this.marketMobileAugContents.overallPerformance)) + 
                (0.8 * getRealValue(this.gfbAugContents.overallPerformance)) + (0.8 * getRealValue(this.collectiveKitchenAugContents.overallPerformance)) + (0.8 * getRealValue(this.communityMealsAugContents.overallPerformance)) + 
                (1.5 * getRealValue(this.clothespinAugContents.overallPerformance)) + (2 * getRealValue(this.crisisInterventionAugContents.overallPerformance)) + (0.8 * getRealValue(this.yesICanAugContents.overallPerformance)) + 
                getRealValue(this.youthPREducationAugContents.overallPerformance) + getRealValue(this.youthPRSportAugContents.overallPerformance) + getRealValue(this.youthPRViolinAugContents.overallPerformance) + 
                getRealValue(this.pinsAugContents.overallPerformance) + getRealValue(this.overbrookSPAugContents.overallPerformance) + getRealValue(this.communityDevelopmentAugContents.overallPerformance));
                this.generalDashboardAugContents.mainOverallPerformance = (getRealValue(baseFebOverallPerformanceGeneralDashboard) / 21.35).toFixed(2)
                console.log("General Overall Performance: " + this.generalDashboardAugContents.mainOverallPerformance);
                return this.generalDashboardAugContents.mainOverallPerformance
            },

        },
        created(){
          this.readData()
        }

    }
</script>
