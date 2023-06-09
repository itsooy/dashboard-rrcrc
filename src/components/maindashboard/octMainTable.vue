<template>
    <div class="row q-col-gutter-sm q-ma-xs">
        <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">  <!--Number of Total Programs-->
                <q-card>
                  <q-card-section :class="$q.dark.isActive?'blue_dark':'bg-blue-8'" class="text-white">
                    <div class="row">
                      <div class="col-10">
                        <div class="text-h6">Number of Total Programs</div>
                        <div class="text-h5">{{generalDashboardOctContents.totalPrograms}}</div>
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
                        <div class="text-h5">{{generalDashboardOctContents.activePrograms}}</div>
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
                        <div class="text-h5">{{generalDashboardOctContents.projectsGoingOn}}</div>
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
                        <div class="text-h5">{{generalDashboardOctContents.totalUniqueVolunteers}} / {{generalDashboardOctContents.totalVolunteerHours}}</div>
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
                        :color="(foodbankOctContents.overallPerformance == null)?'grey':(foodbankOctContents.overallPerformance >= '0.0001' && foodbankOctContents.overallPerformance <= '40')?'red':(foodbankOctContents.overallPerformance > '40' && foodbankOctContents.overallPerformance <= '60')?'orange':(foodbankOctContents.overallPerformance > '60' && foodbankOctContents.overallPerformance < '90')?'yellow-7':(foodbankOctContents.overallPerformance >= '90' && foodbankOctContents.overallPerformance < '120')?'green':(foodbankOctContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(babyCupboardOctContents.overallPerformance == null)?'grey':(babyCupboardOctContents.overallPerformance >= '0.0001' && babyCupboardOctContents.overallPerformance <= '40')?'red':(babyCupboardOctContents.overallPerformance > '40' && babyCupboardOctContents.overallPerformance <= '60')?'orange':(babyCupboardOctContents.overallPerformance > '60' && babyCupboardOctContents.overallPerformance < '90')?'yellow-7':(babyCupboardOctContents.overallPerformance >= '90' && babyCupboardOctContents.overallPerformance < '120')?'green':(babyCupboardOctContents.overallPerformance >= '120'?'blue':'grey')"

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
                        :color="(gikOctContents.overallPerformance == null)?'grey':(gikOctContents.overallPerformance >= '0.0001' && gikOctContents.overallPerformance <= '40')?'red':(gikOctContents.overallPerformance > '40' && gikOctContents.overallPerformance <= '60')?'orange':(gikOctContents.overallPerformance > '60' && gikOctContents.overallPerformance < '90')?'yellow-7':(gikOctContents.overallPerformance >= '90' && gikOctContents.overallPerformance < '120')?'green':(gikOctContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(charity13OctContents.overallPerformance == null)?'grey':(charity13OctContents.overallPerformance >= '0.0001' && charity13OctContents.overallPerformance <= '40')?'red':(charity13OctContents.overallPerformance > '40' && charity13OctContents.overallPerformance <= '60')?'orange':(charity13OctContents.overallPerformance > '60' && charity13OctContents.overallPerformance < '90')?'yellow-7':(charity13OctContents.overallPerformance >= '90' && charity13OctContents.overallPerformance < '120')?'green':(charity13OctContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(entrepreneurshipOctContents.overallPerformance == null)?'grey':(entrepreneurshipOctContents.overallPerformance >= '0.0001' && entrepreneurshipOctContents.overallPerformance <= '40')?'red':(entrepreneurshipOctContents.overallPerformance > '40' && entrepreneurshipOctContents.overallPerformance <= '60')?'orange':(entrepreneurshipOctContents.overallPerformance > '60' && entrepreneurshipOctContents.overallPerformance < '90')?'yellow-7':(entrepreneurshipOctContents.overallPerformance >= '90' && entrepreneurshipOctContents.overallPerformance < '120')?'green':(entrepreneurshipOctContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(employmentSkillsOctContents.overallPerformance == null)?'grey':(employmentSkillsOctContents.overallPerformance >= '0.0001' && employmentSkillsOctContents.overallPerformance <= '40')?'red':(employmentSkillsOctContents.overallPerformance > '40' && employmentSkillsOctContents.overallPerformance <= '60')?'orange':(employmentSkillsOctContents.overallPerformance > '60' && employmentSkillsOctContents.overallPerformance < '90')?'yellow-7':(employmentSkillsOctContents.overallPerformance >= '90' && employmentSkillsOctContents.overallPerformance < '120')?'green':(employmentSkillsOctContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(socialHarvestOctContents.overallPerformance == null)?'grey':(socialHarvestOctContents.overallPerformance >= '0.0001' && socialHarvestOctContents.overallPerformance <= '40')?'red':(socialHarvestOctContents.overallPerformance > '40' && socialHarvestOctContents.overallPerformance <= '60')?'orange':(socialHarvestOctContents.overallPerformance > '60' && socialHarvestOctContents.overallPerformance < '90')?'yellow-7':(socialHarvestOctContents.overallPerformance >= '90' && socialHarvestOctContents.overallPerformance < '120')?'green':(socialHarvestOctContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(marketMobileOctContents.overallPerformance == null)?'grey':(marketMobileOctContents.overallPerformance >= '0.0001' && marketMobileOctContents.overallPerformance <= '40')?'red':(marketMobileOctContents.overallPerformance > '40' && marketMobileOctContents.overallPerformance <= '60')?'orange':(marketMobileOctContents.overallPerformance > '60' && marketMobileOctContents.overallPerformance < '90')?'yellow-7':(marketMobileOctContents.overallPerformance >= '90' && marketMobileOctContents.overallPerformance < '120')?'green':(marketMobileOctContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(clothespinOctContents.overallPerformance == null)?'grey':(clothespinOctContents.overallPerformance >= '0.0001' && clothespinOctContents.overallPerformance <= '40')?'red':(clothespinOctContents.overallPerformance > '40' && clothespinOctContents.overallPerformance <= '60')?'orange':(clothespinOctContents.overallPerformance > '60' && clothespinOctContents.overallPerformance < '90')?'yellow-7':(clothespinOctContents.overallPerformance >= '90' && clothespinOctContents.overallPerformance < '120')?'green':(clothespinOctContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(gfbOctContents.overallPerformance == null)?'grey':(gfbOctContents.overallPerformance >= '0.0001' && gfbOctContents.overallPerformance <= '40')?'red':(gfbOctContents.overallPerformance > '40' && gfbOctContents.overallPerformance <= '60')?'orange':(gfbOctContents.overallPerformance > '60' && gfbOctContents.overallPerformance < '90')?'yellow-7':(gfbOctContents.overallPerformance >= '90' && gfbOctContents.overallPerformance < '120')?'green':(gfbOctContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(overbrookSPOctContents.overallPerformance == null)?'grey':(overbrookSPOctContents.overallPerformance >= '0.0001' && overbrookSPOctContents.overallPerformance <= '40')?'red':(overbrookSPOctContents.overallPerformance > '40' && overbrookSPOctContents.overallPerformance <= '60')?'orange':(overbrookSPOctContents.overallPerformance > '60' && overbrookSPOctContents.overallPerformance < '90')?'yellow-7':(overbrookSPOctContents.overallPerformance >= '90' && overbrookSPOctContents.overallPerformance < '120')?'green':(overbrookSPOctContents.overallPerformance >= '120'?'blue':'grey')"
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
                            :color="(collectiveKitchenOctContents.overallPerformance == null)?'grey':(collectiveKitchenOctContents.overallPerformance >= '0.0001' && collectiveKitchenOctContents.overallPerformance <= '40')?'red':(collectiveKitchenOctContents.overallPerformance > '40' && collectiveKitchenOctContents.overallPerformance <= '60')?'orange':(collectiveKitchenOctContents.overallPerformance > '60' && collectiveKitchenOctContents.overallPerformance < '90')?'yellow-7':(collectiveKitchenOctContents.overallPerformance >= '90' && collectiveKitchenOctContents.overallPerformance < '120')?'green':(collectiveKitchenOctContents.overallPerformance >= '120'?'blue':'grey')"
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
                            :color="(communityMealsOctContents.overallPerformance == null)?'grey':(communityMealsOctContents.overallPerformance >= '0.0001' && communityMealsOctContents.overallPerformance <= '40')?'red':(communityMealsOctContents.overallPerformance > '40' && communityMealsOctContents.overallPerformance <= '60')?'orange':(communityMealsOctContents.overallPerformance > '60' && communityMealsOctContents.overallPerformance < '90')?'yellow-7':(communityMealsOctContents.overallPerformance >= '90' && communityMealsOctContents.overallPerformance < '120')?'green':(communityMealsOctContents.overallPerformance >= '120'?'blue':'grey')"
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
                            :color="(pinsOctContents.overallPerformance == null)?'grey':(pinsOctContents.overallPerformance >= '0.0001' && pinsOctContents.overallPerformance <= '40')?'red':(pinsOctContents.overallPerformance > '40' && pinsOctContents.overallPerformance <= '60')?'orange':(pinsOctContents.overallPerformance > '60' && pinsOctContents.overallPerformance < '90')?'yellow-7':(pinsOctContents.overallPerformance >= '90' && pinsOctContents.overallPerformance < '120')?'green':(pinsOctContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(yesICanOctContents.overallPerformance == null)?'grey':(yesICanOctContents.overallPerformance >= '0.0001' && yesICanOctContents.overallPerformance <= '40')?'red':(yesICanOctContents.overallPerformance > '40' && yesICanOctContents.overallPerformance <= '60')?'orange':(yesICanOctContents.overallPerformance > '60' && yesICanOctContents.overallPerformance < '90')?'yellow-7':(yesICanOctContents.overallPerformance >= '90' && yesICanOctContents.overallPerformance < '120')?'green':(yesICanOctContents.overallPerformance >= '120'?'blue':'grey')"
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
                            :color="(crisisInterventionOctContents.overallPerformance == null)?'grey':(crisisInterventionOctContents.overallPerformance >= '0.0001' && crisisInterventionOctContents.overallPerformance <= '40')?'red':(crisisInterventionOctContents.overallPerformance > '40' && crisisInterventionOctContents.overallPerformance <= '60')?'orange':(crisisInterventionOctContents.overallPerformance > '60' && crisisInterventionOctContents.overallPerformance < '90')?'yellow-7':(crisisInterventionOctContents.overallPerformance >= '90' && crisisInterventionOctContents.overallPerformance < '120')?'green':(crisisInterventionOctContents.overallPerformance >= '120'?'blue':'grey')"
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
                            :color="(youthPREducationOctContents.overallPerformance == null)?'grey':(youthPREducationOctContents.overallPerformance >= '0.0001' && youthPREducationOctContents.overallPerformance <= '40')?'red':(youthPREducationOctContents.overallPerformance > '40' && youthPREducationOctContents.overallPerformance <= '60')?'orange':(youthPREducationOctContents.overallPerformance > '60' && youthPREducationOctContents.overallPerformance < '90')?'yellow-7':(youthPREducationOctContents.overallPerformance >= '90' && youthPREducationOctContents.overallPerformance < '120')?'green':(youthPREducationOctContents.overallPerformance >= '120'?'blue':'grey')"
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
                            :color="(youthPRSportOctContents.overallPerformance == null)?'grey':(youthPRSportOctContents.overallPerformance >= '0.0001' && youthPRSportOctContents.overallPerformance <= '40')?'red':(youthPRSportOctContents.overallPerformance > '40' && youthPRSportOctContents.overallPerformance <= '60')?'orange':(youthPRSportOctContents.overallPerformance > '60' && youthPRSportOctContents.overallPerformance < '90')?'yellow-7':(youthPRSportOctContents.overallPerformance >= '90' && youthPRSportOctContents.overallPerformance < '120')?'green':(youthPRSportOctContents.overallPerformance >= '120'?'blue':'grey')"
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
                            :color="(youthPRViolinOctContents.overallPerformance == null)?'grey':(youthPRViolinOctContents.overallPerformance >= '0.0001' && youthPRViolinOctContents.overallPerformance <= '40')?'red':(youthPRViolinOctContents.overallPerformance > '40' && youthPRViolinOctContents.overallPerformance <= '60')?'orange':(youthPRViolinOctContents.overallPerformance > '60' && youthPRViolinOctContents.overallPerformance < '90')?'yellow-7':(youthPRViolinOctContents.overallPerformance >= '90' && youthPRViolinOctContents.overallPerformance < '120')?'green':(youthPRViolinOctContents.overallPerformance >= '120'?'blue':'grey')"
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
                            :color="(communityDevelopmentOctContents.overallPerformance == null)?'grey':(communityDevelopmentOctContents.overallPerformance >= '0.0001' && communityDevelopmentOctContents.overallPerformance <= '40')?'red':(communityDevelopmentOctContents.overallPerformance > '40' && communityDevelopmentOctContents.overallPerformance <= '60')?'orange':(communityDevelopmentOctContents.overallPerformance > '60' && communityDevelopmentOctContents.overallPerformance < '90')?'yellow-7':(communityDevelopmentOctContents.overallPerformance >= '90' && communityDevelopmentOctContents.overallPerformance < '120')?'green':(communityDevelopmentOctContents.overallPerformance >= '120'?'blue':'grey')"
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
                      data: [{value: this.generalDashboardOctContents.mainOverallPerformance}],
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
                      data: [{value: this.generalDashboardOctContents.budgetUsage}],
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
                                {value: this.generalDashboardOctContents.cumulativeexpAdmin, name: 'Admin', selected: false},
                                {value: this.generalDashboardOctContents.cumulativeexpPRfftnc, name: 'PR / FFTNC', selected: false},
                                {value: this.generalDashboardOctContents.cumulativeexpIncubator, name: 'Incubator', selected: false},
                                {value: this.generalDashboardOctContents.cumulativeexpAP, name: 'A-P', selected: false},
                                {value: this.generalDashboardOctContents.cumulativeexpGFB, name: 'GFB', selected: false},
                                {value: this.generalDashboardOctContents.cumulativeexpGIK, name: 'GIK', selected: false},
                                {value: this.generalDashboardOctContents.cumulativeexpSH, name: 'SH', selected: false},
                                {value: this.generalDashboardOctContents.cumulativeexpCYFlactation, name: 'CYF / Lactation', selected: false},
                                {value: this.generalDashboardOctContents.cumulativeexpCPO, name: 'CPO', selected: false},
                                {value: this.generalDashboardOctContents.cumulativeexpSeniorsProject, name: 'Seniors Project', selected: false},
                                {value: this.generalDashboardOctContents.cumulativeexpCSDmcConnell, name: 'CSD / McConnell', selected: false},
                                {value: this.generalDashboardOctContents.cumulativeexpOthers, name: 'Others', selected: false}
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
                                {value: this.generalDashboardOctContents.expAdmin, name: 'Admin', selected: false},
                                {value: this.generalDashboardOctContents.expPRfftnc, name: 'PR / FFTNC', selected: false},
                                {value: this.generalDashboardOctContents.expIncubator, name: 'Incubator', selected: false},
                                {value: this.generalDashboardOctContents.expAP, name: 'A-P', selected: false},
                                {value: this.generalDashboardOctContents.expGFB, name: 'GFB', selected: false},
                                {value: this.generalDashboardOctContents.expGIK, name: 'GIK', selected: false},
                                {value: this.generalDashboardOctContents.expSH, name: 'SH', selected: false},
                                {value: this.generalDashboardOctContents.expCYFlactation, name: 'CYF / Lactation', selected: false},
                                {value: this.generalDashboardOctContents.expCPO, name: 'CPO', selected: false},
                                {value: this.generalDashboardOctContents.expSeniorsProject, name: 'Seniors Project', selected: false},
                                {value: this.generalDashboardOctContents.expCSDmcConnell, name: 'CSD / McConnell', selected: false},
                                {value: this.generalDashboardOctContents.expOthers, name: 'Others', selected: false}
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
                    } else {
                        // doc.data() will be undefined in this case
                        console.log("No such document! - generalDashboard");
                    }
                }).catch((error) => {
                    console.log("Error getting document:", error);
                });
                //    GENERAL DASHBOARD | SEPTEMBER
                var docgeneralDashboardSepRef = db.collection("generalDashboard").doc("september");

                docgeneralDashboardSepRef.get().then((doc) => {
                    if (doc.exists) {
                        console.log("Document data:", doc.data());
                        this.generalDashboardSepContents = doc.data();
                        this.totalExpenseSep();
                    } else {
                        // doc.data() will be undefined in this case
                        console.log("No such document! - generalDashboard");
                    }
                }).catch((error) => {
                    console.log("Error getting document:", error);
                });
                //    GENERAL DASHBOARD | OCTOBER
                var docgeneralDashboardOctRef = db.collection("generalDashboard").doc("october");

                docgeneralDashboardOctRef.get().then((doc) => {
                    if (doc.exists) {
                        console.log("Document data:", doc.data());
                        this.generalDashboardOctContents = doc.data();
                        this.totalExpenseOct();
                        this.cumulativeBudgetUsageOct();
                        this.totalCumulativeExpenseOct();

                        this.foodbankOct();
                    } else {
                        // doc.data() will be undefined in this case
                        console.log("No such document! - generalDashboard");
                    }
                }).catch((error) => {
                    console.log("Error getting document:", error);
                });
            },  
                foodbankOct(){
                    //    FOODBANK | MAY
                    var docfoodbankAprRef = db.collection("foodbank").doc("october");

                    docfoodbankAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.foodbankOctContents = doc.data();
                            this.foodbankOctOverallPerformance();

                            this.babyCupboardOct();

                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - foodbank");
                        }

                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                babyCupboardOct(){
                                        //    BABY CUPBOARD | MAY
                    var docbabyCupboardAprRef = db.collection("babyCupboard").doc("october");

                    docbabyCupboardAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.babyCupboardOctContents = doc.data();
                            this.babyCupboardOctOverallPerformance();

                            this.gikOct();
                            

                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - babyCupboard");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                gikOct(){
                    //    GIFTS IN KIND | MAY
                    var docgikAprRef = db.collection("gik").doc("october");

                    docgikAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.gikOctContents = doc.data();
                            this.gikOctOverallPerformance();
                            
                            this.charity13Oct();
                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - gik");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });

                },
                charity13Oct(){
                    //    charITy13 | MAY
                    var docCharity13AprRef = db.collection("charity13").doc("october");

                    docCharity13AprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.charity13OctContents = doc.data();
                            this.charity13OctOverallPerformance();
                            
                            this.entrepreneurshipOct();
                            
                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - charity13");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });

                },entrepreneurshipOct(){
                    //    ENTREPRENEURSHIP | MAY
                    var docentrepreneurshipAprRef = db.collection("entrepreneurship").doc("october");

                    docentrepreneurshipAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.entrepreneurshipOctContents = doc.data();
                            this.entrepreneurshipOctOverallPerformance();

                            this.employmentSkillsOct();

                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - entrepreneurship");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                employmentSkillsOct(){
                    //    EMPLOYEMENT SKILLS | MAY
                    var docemploymentSkillsAprRef = db.collection("employmentSkills").doc("october");

                    docemploymentSkillsAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.employmentSkillsOctContents = doc.data();
                            this.employmentSkillsOctOverallPerformance();

                            this.socialHarvestOct();

                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - employmentSkills");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                socialHarvestOct(){
                    //    SOCIAL HARVEST | MAY
                    var docsocialHarvestAprRef = db.collection("socialHarvest").doc("october");

                    docsocialHarvestAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.socialHarvestOctContents = doc.data();
                            this.socialHarvestOctOverallPerformance();

                            this.marketMobileOct();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - socialHarvest");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });

                },
                marketMobileOct(){
                    //    MARKET MOBILE | MAY
                    var docmarketMobileAprRef = db.collection("marketMobile").doc("october");

                    docmarketMobileAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.marketMobileOctContents = doc.data();
                            this.marketMobileOctOverallPerformance();

                            this.clothespinOct();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - marketMobile");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });

                },
                clothespinOct(){
                    //    CLOTHESPIN | MAY
                    var docclothespinAprRef = db.collection("clothespin").doc("october");

                    docclothespinAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.clothespinOctContents = doc.data();
                            this.clothespinOctOverallPerformance();

                            this.gfbOct();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - clothespin");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });

                },
                gfbOct(){
                    //    GOOD FOOD BOX | MAY
                    var docgfbAprRef = db.collection("gfb").doc("october");

                    docgfbAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.gfbOctContents = doc.data();
                            this.gfbOctOverallPerformance();
                            
                            this.overbrookSPOct();

                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - gfb");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });


                },
                overbrookSPOct(){
                    //    Overbrook SP | MAY
                    var docoverbrookSPAprRef = db.collection("overbrookSP").doc("october");

                    docoverbrookSPAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.overbrookSPOctContents = doc.data();
                            this.overbrookSPOctOverallPerformance();

                            this.collectiveKitchenOct();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - overbrookSP");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });

                },
                collectiveKitchenOct(){
                    //    COLLECTIVE KITCHEN | MAY
                    var doccollectiveKitchenAprRef = db.collection("collectiveKitchen").doc("october");

                    doccollectiveKitchenAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.collectiveKitchenOctContents = doc.data();
                            this.collectiveKitchenOctOverallPerformance(); 

                            this.communityMealsOct();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - collectiveKitchen");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });

                },
                communityMealsOct(){
                    //        COMMUNITY MEALS | MAY
                    var doccommunityMealsAprRef = db.collection("communityMeals").doc("october");

                    doccommunityMealsAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.communityMealsOctContents = doc.data();
                            this.communityMealsOctOverallPerformance();

                            this.pinsOct();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - communityMeals");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });

                },
                pinsOct(){
                    //    PINS | MAY
                    var docpinsAprRef = db.collection("pins").doc("october");

                    docpinsAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.pinsOctContents = doc.data();
                            this.pinsOctOverallPerformance();

                            this.yesICanOct();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - pins");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                yesICanOct(){
                    //    Yes I Can | MAY
                    var docyesICanAprRef = db.collection("yesICan").doc("october");

                    docyesICanAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.yesICanOctContents = doc.data();
                            this.yesICanOctOverallPerformance();

                            this.crisisInterventionOct();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - yesICan");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                crisisInterventionOct(){
                    //    CRISIS INTERVENTION | MAY
                    var doccrisisInterventionAprRef = db.collection("crisisIntervention").doc("october");

                    doccrisisInterventionAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.crisisInterventionOctContents = doc.data();
                            this.crisisInterventionOctOverallPerformance();

                            this.youthPREducationOct();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - crisisIntervention");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                youthPREducationOct(){
                    //    YouthPR Education | MAY
                    var docyouthPREducationAprRef = db.collection("youthPREducation").doc("october");

                    docyouthPREducationAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.youthPREducationOctContents = doc.data();
                            this.youthPREducationOctOverallPerformance();

                            this.youthPRSportOct();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - youthPREducation");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                youthPRSportOct(){
                    //    YouthPR Sport | MAY
                    var docyouthPRSportAprRef = db.collection("youthPRSport").doc("october");

                    docyouthPRSportAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.youthPRSportOctContents = doc.data();
                            this.youthPRSportOctOverallPerformance();

                            this.youthPRViolinOct();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - youthPRSport");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                youthPRViolinOct(){
                    //    YouthPR Violin | MAY
                    var docyouthPRViolinAprRef = db.collection("youthPRViolin").doc("october");

                    docyouthPRViolinAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.youthPRViolinOctContents = doc.data();
                            this.youthPRViolinOctOverallPerformance();

                            this.communityDevelopmentOct();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - youthPRViolin");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                communityDevelopmentOct(){
                    //    COMMUNITY DEVELOPMENT | MAY
                    var doccommunityDevelopmentAprRef = db.collection("communityDevelopment").doc("october");

                    doccommunityDevelopmentAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.communityDevelopmentOctContents = doc.data();
                            this.communityDevelopmentOctOverallPerformance();
                            
                            console.log("denemem: "+ this.foodbankOctContents.kpi1 + " baby: " + this.babyCupboardOctContents.kpi1 + 
                            " GIK: " + this.gikOctContents.kpi1 + " CD: " + this.youthPRViolinOctContents.kpi1);
                            this.generalOctOverallPerformance();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - communityDevelopment");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },

            gikOctOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = ((getRealValue(this.gikOctContents.kpi1)*2) + getRealValue(this.gikOctContents.kpi2) + getRealValue(this.gikOctContents.kpi3) + (getRealValue(this.gikOctContents.kpi4)*2))/6;
            this.gikOctContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 29.5 * 100;
            console.log("GIK Overall performance = " + this.gikOctContents.overallPerformance);             
            return this.gikOctContents.overallPerformance;
            },
            foodbankOctOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = ((getRealValue(this.foodbankOctContents.kpi1)*2) + getRealValue(this.foodbankOctContents.kpi2) + getRealValue(this.foodbankOctContents.kpi3) + (getRealValue(this.foodbankOctContents.kpi4)*2) + getRealValue(this.foodbankOctContents.kpi5) + getRealValue(this.foodbankOctContents.kpi6))/8;
            this.foodbankOctContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 287.09375 * 100;
            console.log("Foodbank Overall performance = " + this.foodbankOctContents.overallPerformance); 
            return this.foodbankOctContents.overallPerformance;
            },
            babyCupboardOctOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = ((getRealValue(this.babyCupboardOctContents.kpi1)*2) + getRealValue(this.babyCupboardOctContents.kpi2) + getRealValue(this.babyCupboardOctContents.kpi3) + (getRealValue(this.babyCupboardOctContents.kpi4)*2))/6;
            this.babyCupboardOctContents.overallPerformance = (getRealValue(baseOverallPerformanceGIK) / 38.125) * 100;
            console.log("Baby Cupboard Overall performance = " + this.babyCupboardOctContents.overallPerformance); 
            return this.babyCupboardOctContents.overallPerformance;
            },
            charity13OctOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = ((getRealValue(this.charity13OctContents.kpi1)*2) + getRealValue(this.charity13OctContents.kpi2) + getRealValue(this.charity13OctContents.kpi3) + getRealValue(this.charity13OctContents.kpi4) + (getRealValue(this.charity13OctContents.kpi5)*2))/7;
            this.charity13OctContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 2.19047619 * 100;
            console.log("charITy13 Overall performance = " + this.charity13OctContents.overallPerformance); 
            return this.charity13OctContents.overallPerformance;
            },
            entrepreneurshipOctOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.entrepreneurshipOctContents.kpi1) + getRealValue(this.entrepreneurshipOctContents.kpi2) + getRealValue(this.entrepreneurshipOctContents.kpi3) + getRealValue(this.entrepreneurshipOctContents.kpi4))/4;
            this.entrepreneurshipOctContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 1217.967792 * 100;
            console.log("entrepreneurship Overall performance = " + this.entrepreneurshipOctContents.overallPerformance); 
            return this.entrepreneurshipOctContents.overallPerformance;
            },
            employmentSkillsOctOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.employmentSkillsOctContents.kpi1) + getRealValue(this.employmentSkillsOctContents.kpi2) + getRealValue(this.employmentSkillsOctContents.kpi3) + getRealValue(this.employmentSkillsOctContents.kpi4))/4;
            this.employmentSkillsOctContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 45.83333333 * 100;
            console.log("employmentSkills Overall performance = " + this.employmentSkillsOctContents.overallPerformance); 
            return this.employmentSkillsOctContents.overallPerformance;
            },
            socialHarvestOctOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.socialHarvestOctContents.kpi1) + getRealValue(this.socialHarvestOctContents.kpi2) + getRealValue(this.socialHarvestOctContents.kpi3) + getRealValue(this.socialHarvestOctContents.kpi4) + getRealValue(this.socialHarvestOctContents.kpi5))/5;
            this.socialHarvestOctContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 29.7409 * 100;
            console.log("socialHarvest Overall performance = " + this.socialHarvestOctContents.overallPerformance); 
            return this.socialHarvestOctContents.overallPerformance;
            },
            marketMobileOctOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.marketMobileOctContents.kpi1) + getRealValue(this.marketMobileOctContents.kpi2) + (getRealValue(this.marketMobileOctContents.kpi3)*2) + (getRealValue(this.marketMobileOctContents.kpi4)*2))/6;
            this.marketMobileOctContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 149.9444444 * 100;
            console.log("marketMobile Overall performance = " + this.marketMobileOctContents.overallPerformance); 
            return this.marketMobileOctContents.overallPerformance;
            },
            clothespinOctOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.clothespinOctContents.kpi1) + getRealValue(this.clothespinOctContents.kpi2) + getRealValue(this.clothespinOctContents.kpi3))/3;
            this.clothespinOctContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 144 * 100;
            console.log("clothespin Overall performance = " + this.clothespinOctContents.overallPerformance); 
            return this.clothespinOctContents.overallPerformance;
            },
            gfbOctOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.gfbOctContents.kpi1) + getRealValue(this.gfbOctContents.kpi2) + getRealValue(this.gfbOctContents.kpi3))/3;
            this.gfbOctContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 274.1111111 * 100;
            console.log("gfb Overall performance = " + this.gfbOctContents.overallPerformance); 
            return this.gfbOctContents.overallPerformance;
            },
            overbrookSPOctOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.overbrookSPOctContents.kpi1) + getRealValue(this.overbrookSPOctContents.kpi2))/2;
            this.overbrookSPOctContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 101.75 * 100;
            console.log("overbrookSP Overall performance = " + this.overbrookSPOctContents.overallPerformance); 
            return this.overbrookSPOctContents.overallPerformance;
            },
            collectiveKitchenOctOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.collectiveKitchenOctContents.kpi1) + getRealValue(this.collectiveKitchenOctContents.kpi2) + getRealValue(this.collectiveKitchenOctContents.kpi3) + getRealValue(this.collectiveKitchenOctContents.kpi4))/4;
            this.collectiveKitchenOctContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 5.75 * 100;
            console.log("collectiveKitchen Overall performance = " + this.collectiveKitchenOctContents.overallPerformance); 
            return this.collectiveKitchenOctContents.overallPerformance;
            },
            communityMealsOctOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.communityMealsOctContents.kpi1) + getRealValue(this.communityMealsOctContents.kpi2) + getRealValue(this.communityMealsOctContents.kpi3) + (getRealValue(this.communityMealsOctContents.kpi4)*2))/5;
            this.communityMealsOctContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 290.2666667 * 100;
            console.log("communityMeals Overall performance = " + this.communityMealsOctContents.overallPerformance); 
            return this.communityMealsOctContents.overallPerformance;
            },
            pinsOctOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.pinsOctContents.kpi1) + getRealValue(this.pinsOctContents.kpi2) + getRealValue(this.pinsOctContents.kpi3))/3;
            this.pinsOctContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 10.33333333 * 100;
            console.log("pins Overall performance = " + this.pinsOctContents.overallPerformance); 
            return this.pinsOctContents.overallPerformance;
            },
            youthPREducationOctOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.youthPREducationOctContents.kpi1) + getRealValue(this.youthPREducationOctContents.kpi2) + getRealValue(this.youthPREducationOctContents.kpi3) + getRealValue(this.youthPREducationOctContents.kpi4) + (getRealValue(this.youthPREducationOctContents.kpi5)*2))/6;
            this.youthPREducationOctContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 13 * 100;
            console.log("youthPREducation Overall performance = " + this.youthPREducationOctContents.overallPerformance); 
            return this.youthPREducationOctContents.overallPerformance;
            },
            youthPRSportOctOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.youthPRSportOctContents.kpi1) + getRealValue(this.youthPRSportOctContents.kpi2) + getRealValue(this.youthPRSportOctContents.kpi3) + getRealValue(this.youthPRSportOctContents.kpi4) + (getRealValue(this.youthPRSportOctContents.kpi5)*2))/6;
            this.youthPRSportOctContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 1.5 * 100;
            console.log("youthPRSport Overall performance = " + this.youthPRSportOctContents.overallPerformance); 
            return this.youthPRSportOctContents.overallPerformance;
            },
            youthPRViolinOctOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.youthPRViolinOctContents.kpi1) + getRealValue(this.youthPRViolinOctContents.kpi2) + getRealValue(this.youthPRViolinOctContents.kpi3) + getRealValue(this.youthPRViolinOctContents.kpi4) + (getRealValue(this.youthPRViolinOctContents.kpi5)*2))/6;
            this.youthPRViolinOctContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 5.388888889 * 100;
            console.log("youthPRViolin Overall performance = " + this.youthPRViolinOctContents.overallPerformance); 
            return this.youthPRViolinOctContents.overallPerformance;
            },
            yesICanOctOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.yesICanOctContents.kpi1) + getRealValue(this.yesICanOctContents.kpi2) + getRealValue(this.yesICanOctContents.kpi3))/3;
            this.yesICanOctContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 11.33333333 * 100;
            console.log("yesICan Overall performance = " + this.yesICanOctContents.overallPerformance); 
            return this.yesICanOctContents.overallPerformance;
            },
            crisisInterventionOctOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.crisisInterventionOctContents.kpi1) + getRealValue(this.crisisInterventionOctContents.kpi2))/2;
            this.crisisInterventionOctContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 104 * 100;
            console.log("crisisIntervention Overall performance = " + this.crisisInterventionOctContents.overallPerformance); 
            return this.crisisInterventionOctContents.overallPerformance;
            },
            communityDevelopmentOctOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.communityDevelopmentOctContents.kpi1) + getRealValue(this.communityDevelopmentOctContents.kpi2) + getRealValue(this.communityDevelopmentOctContents.kpi3))/3;
            this.communityDevelopmentOctContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 77.22222222 * 100;
            console.log("communityDevelopment Overall performance = " + this.communityDevelopmentOctContents.overallPerformance); 
            return this.communityDevelopmentOctContents.overallPerformance;
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
            totalExpenseSep(){
            const getRealValue = (val) => +val || val;
            return this.generalDashboardSepContents.expenses = getRealValue(this.generalDashboardSepContents.expAdmin) + 
            getRealValue(this.generalDashboardSepContents.expPRfftnc) + getRealValue(this.generalDashboardSepContents.expIncubator) + 
            getRealValue(this.generalDashboardSepContents.expAP) + getRealValue(this.generalDashboardSepContents.expGFB) + 
            getRealValue(this.generalDashboardSepContents.expGIK) + getRealValue(this.generalDashboardSepContents.expSH) + 
            getRealValue(this.generalDashboardSepContents.expCYFlactation) + getRealValue(this.generalDashboardSepContents.expCPO) + 
            getRealValue(this.generalDashboardSepContents.expSeniorsProject) + getRealValue(this.generalDashboardSepContents.expCSDmcConnell) + 
            getRealValue(this.generalDashboardSepContents.expOthers)
            },
            totalExpenseOct(){
            const getRealValue = (val) => +val || val;
            return this.generalDashboardOctContents.expenses = getRealValue(this.generalDashboardOctContents.expAdmin) + 
            getRealValue(this.generalDashboardOctContents.expPRfftnc) + getRealValue(this.generalDashboardOctContents.expIncubator) + 
            getRealValue(this.generalDashboardOctContents.expAP) + getRealValue(this.generalDashboardOctContents.expGFB) + 
            getRealValue(this.generalDashboardOctContents.expGIK) + getRealValue(this.generalDashboardOctContents.expSH) + 
            getRealValue(this.generalDashboardOctContents.expCYFlactation) + getRealValue(this.generalDashboardOctContents.expCPO) + 
            getRealValue(this.generalDashboardOctContents.expSeniorsProject) + getRealValue(this.generalDashboardOctContents.expCSDmcConnell) + 
            getRealValue(this.generalDashboardOctContents.expOthers)
            },
            cumulativeBudgetUsageOct(){
            const getRealValue = (val) => +val || val;
            return this.generalDashboardOctContents.budgetUsage = (((getRealValue(this.generalDashboardOctContents.expenses) + getRealValue(this.generalDashboardSepContents.expenses) + getRealValue(this.generalDashboardAugContents.expenses) + getRealValue(this.generalDashboardJulContents.expenses) + getRealValue(this.generalDashboardJunContents.expenses) + getRealValue(this.generalDashboardMayContents.expenses) + getRealValue(this.generalDashboardAprContents.expenses) + getRealValue(this.generalDashboardMarContents.expenses) + getRealValue(this.generalDashboardFebContents.expenses) + getRealValue(this.generalDashboardJanContents.expenses)) / getRealValue(this.generalDashboardAprContents.actualBudget))*100).toFixed(2)
            },
            totalCumulativeExpenseOct(){
            const getRealValue = (val) => +val || val;
            this.generalDashboardOctContents.cumulativeexpAdmin = (getRealValue(this.generalDashboardOctContents.expAdmin) + getRealValue(this.generalDashboardSepContents.expAdmin) + getRealValue(this.generalDashboardAugContents.expAdmin) + getRealValue(this.generalDashboardJulContents.expAdmin) + getRealValue(this.generalDashboardJunContents.expAdmin) + getRealValue(this.generalDashboardMayContents.expAdmin) + getRealValue(this.generalDashboardAprContents.expAdmin) + getRealValue(this.generalDashboardMarContents.expAdmin) + getRealValue(this.generalDashboardFebContents.expAdmin) + getRealValue(this.generalDashboardJanContents.expAdmin)).toFixed(2)
            this.generalDashboardOctContents.cumulativeexpPRfftnc = (getRealValue(this.generalDashboardOctContents.expPRfftnc) + getRealValue(this.generalDashboardSepContents.expPRfftnc) + getRealValue(this.generalDashboardAugContents.expPRfftnc) + getRealValue(this.generalDashboardJulContents.expPRfftnc) + getRealValue(this.generalDashboardJunContents.expPRfftnc) + getRealValue(this.generalDashboardMayContents.expPRfftnc) + getRealValue(this.generalDashboardAprContents.expPRfftnc) + getRealValue(this.generalDashboardMarContents.expPRfftnc) + getRealValue(this.generalDashboardFebContents.expPRfftnc) + getRealValue(this.generalDashboardJanContents.expPRfftnc)).toFixed(2)
            this.generalDashboardOctContents.cumulativeexpIncubator = (getRealValue(this.generalDashboardOctContents.expIncubator) + getRealValue(this.generalDashboardSepContents.expIncubator) + getRealValue(this.generalDashboardAugContents.expIncubator) + getRealValue(this.generalDashboardJulContents.expIncubator) + getRealValue(this.generalDashboardJunContents.expIncubator) + getRealValue(this.generalDashboardMayContents.expIncubator) + getRealValue(this.generalDashboardAprContents.expIncubator) + getRealValue(this.generalDashboardMarContents.expIncubator) + getRealValue(this.generalDashboardFebContents.expIncubator) + getRealValue(this.generalDashboardJanContents.expIncubator)).toFixed(2)
            this.generalDashboardOctContents.cumulativeexpAP = (getRealValue(this.generalDashboardOctContents.expAP) + getRealValue(this.generalDashboardSepContents.expAP) + getRealValue(this.generalDashboardAugContents.expAP) + getRealValue(this.generalDashboardJulContents.expAP) + getRealValue(this.generalDashboardJunContents.expAP) + getRealValue(this.generalDashboardMayContents.expAP) + getRealValue(this.generalDashboardAprContents.expAP) + getRealValue(this.generalDashboardMarContents.expAP) + getRealValue(this.generalDashboardFebContents.expAP) + getRealValue(this.generalDashboardJanContents.expAP)).toFixed(2)
            this.generalDashboardOctContents.cumulativeexpGFB = (getRealValue(this.generalDashboardOctContents.expGFB) + getRealValue(this.generalDashboardSepContents.expGFB) + getRealValue(this.generalDashboardAugContents.expGFB) + getRealValue(this.generalDashboardJulContents.expGFB) + getRealValue(this.generalDashboardJunContents.expGFB) + getRealValue(this.generalDashboardMayContents.expGFB) + getRealValue(this.generalDashboardAprContents.expGFB) + getRealValue(this.generalDashboardMarContents.expGFB) + getRealValue(this.generalDashboardFebContents.expGFB) + getRealValue(this.generalDashboardJanContents.expGFB)).toFixed(2)
            this.generalDashboardOctContents.cumulativeexpGIK = (getRealValue(this.generalDashboardOctContents.expGIK) + getRealValue(this.generalDashboardSepContents.expGIK) + getRealValue(this.generalDashboardAugContents.expGIK) + getRealValue(this.generalDashboardJulContents.expGIK) + getRealValue(this.generalDashboardJunContents.expGIK) + getRealValue(this.generalDashboardMayContents.expGIK) + getRealValue(this.generalDashboardAprContents.expGIK) + getRealValue(this.generalDashboardMarContents.expGIK) + getRealValue(this.generalDashboardFebContents.expGIK) + getRealValue(this.generalDashboardJanContents.expGIK)).toFixed(2)
            this.generalDashboardOctContents.cumulativeexpSH = (getRealValue(this.generalDashboardOctContents.expSH) + getRealValue(this.generalDashboardSepContents.expSH) + getRealValue(this.generalDashboardAugContents.expSH) + getRealValue(this.generalDashboardJulContents.expSH) + getRealValue(this.generalDashboardJunContents.expSH) + getRealValue(this.generalDashboardMayContents.expSH) + getRealValue(this.generalDashboardAprContents.expSH) + getRealValue(this.generalDashboardMarContents.expSH) + getRealValue(this.generalDashboardFebContents.expSH) + getRealValue(this.generalDashboardJanContents.expSH)).toFixed(2)
            this.generalDashboardOctContents.cumulativeexpCYFlactation = (getRealValue(this.generalDashboardOctContents.expCYFlactation) + getRealValue(this.generalDashboardSepContents.expCYFlactation) + getRealValue(this.generalDashboardAugContents.expCYFlactation) + getRealValue(this.generalDashboardJulContents.expCYFlactation) + getRealValue(this.generalDashboardJunContents.expCYFlactation) + getRealValue(this.generalDashboardMayContents.expCYFlactation) + getRealValue(this.generalDashboardAprContents.expCYFlactation) + getRealValue(this.generalDashboardMarContents.expCYFlactation) + getRealValue(this.generalDashboardFebContents.expCYFlactation) + getRealValue(this.generalDashboardJanContents.expCYFlactation)).toFixed(2)
            this.generalDashboardOctContents.cumulativeexpCPO = (getRealValue(this.generalDashboardOctContents.expCPO) + getRealValue(this.generalDashboardSepContents.expCPO) + getRealValue(this.generalDashboardAugContents.expCPO) + getRealValue(this.generalDashboardJulContents.expCPO) + getRealValue(this.generalDashboardJunContents.expCPO) + getRealValue(this.generalDashboardMayContents.expCPO) + getRealValue(this.generalDashboardAprContents.expCPO) + getRealValue(this.generalDashboardMarContents.expCPO) + getRealValue(this.generalDashboardFebContents.expCPO) + getRealValue(this.generalDashboardJanContents.expCPO)).toFixed(2)
            this.generalDashboardOctContents.cumulativeexpSeniorsProject = (getRealValue(this.generalDashboardOctContents.expSeniorsProject) + getRealValue(this.generalDashboardSepContents.expSeniorsProject) + getRealValue(this.generalDashboardAugContents.expSeniorsProject) + getRealValue(this.generalDashboardJulContents.expSeniorsProject) + getRealValue(this.generalDashboardJunContents.expSeniorsProject) + getRealValue(this.generalDashboardMayContents.expSeniorsProject) + getRealValue(this.generalDashboardAprContents.expSeniorsProject) + getRealValue(this.generalDashboardMarContents.expSeniorsProject) + getRealValue(this.generalDashboardFebContents.expSeniorsProject) + getRealValue(this.generalDashboardJanContents.expSeniorsProject)).toFixed(2)
            this.generalDashboardOctContents.cumulativeexpCSDmcConnell = (getRealValue(this.generalDashboardOctContents.expCSDmcConnell) + getRealValue(this.generalDashboardSepContents.expCSDmcConnell) + getRealValue(this.generalDashboardAugContents.expCSDmcConnell) + getRealValue(this.generalDashboardJulContents.expCSDmcConnell) + getRealValue(this.generalDashboardJunContents.expCSDmcConnell) + getRealValue(this.generalDashboardMayContents.expCSDmcConnell) + getRealValue(this.generalDashboardAprContents.expCSDmcConnell) + getRealValue(this.generalDashboardMarContents.expCSDmcConnell) + getRealValue(this.generalDashboardFebContents.expCSDmcConnell) + getRealValue(this.generalDashboardJanContents.expCSDmcConnell)).toFixed(2)
            this.generalDashboardOctContents.cumulativeexpOthers = (getRealValue(this.generalDashboardOctContents.expOthers) + getRealValue(this.generalDashboardSepContents.expOthers) + getRealValue(this.generalDashboardAugContents.expOthers) + getRealValue(this.generalDashboardJulContents.expOthers) + getRealValue(this.generalDashboardJunContents.expOthers) + getRealValue(this.generalDashboardMayContents.expOthers) + getRealValue(this.generalDashboardAprContents.expOthers) + getRealValue(this.generalDashboardMarContents.expOthers) + getRealValue(this.generalDashboardFebContents.expOthers) + getRealValue(this.generalDashboardJanContents.expOthers)).toFixed(2)
            },
            
            generalOctOverallPerformance(){
                const getRealValue = (val) => +val || val;
                var baseFebOverallPerformanceGeneralDashboard = ((2 * getRealValue(this.foodbankOctContents.overallPerformance)) + getRealValue(this.babyCupboardOctContents.overallPerformance) + 
                (1.25 * getRealValue(this.gikOctContents.overallPerformance)) + (0.8 * getRealValue(this.charity13OctContents.overallPerformance)) + getRealValue(this.entrepreneurshipOctContents.overallPerformance) + 
                getRealValue(this.employmentSkillsOctContents.overallPerformance) + (0.8 * getRealValue(this.socialHarvestOctContents.overallPerformance)) + (0.8 * getRealValue(this.marketMobileOctContents.overallPerformance)) + 
                (0.8 * getRealValue(this.gfbOctContents.overallPerformance)) + (0.8 * getRealValue(this.collectiveKitchenOctContents.overallPerformance)) + (0.8 * getRealValue(this.communityMealsOctContents.overallPerformance)) + 
                (1.5 * getRealValue(this.clothespinOctContents.overallPerformance)) + (2 * getRealValue(this.crisisInterventionOctContents.overallPerformance)) + (0.8 * getRealValue(this.yesICanOctContents.overallPerformance)) + 
                getRealValue(this.youthPREducationOctContents.overallPerformance) + getRealValue(this.youthPRSportOctContents.overallPerformance) + getRealValue(this.youthPRViolinOctContents.overallPerformance) + 
                getRealValue(this.pinsOctContents.overallPerformance) + getRealValue(this.overbrookSPOctContents.overallPerformance) + getRealValue(this.communityDevelopmentOctContents.overallPerformance));
                this.generalDashboardOctContents.mainOverallPerformance = (getRealValue(baseFebOverallPerformanceGeneralDashboard) / 21.35).toFixed(2)
                console.log("General Overall Performance: " + this.generalDashboardOctContents.mainOverallPerformance);
                return this.generalDashboardOctContents.mainOverallPerformance
            },

        },
        created(){
          this.readData()
        }

    }
</script>
