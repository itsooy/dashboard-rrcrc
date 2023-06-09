<template>
    <div class="row q-col-gutter-sm q-ma-xs">
        <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">  <!--Number of Total Programs-->
                <q-card>
                  <q-card-section :class="$q.dark.isActive?'blue_dark':'bg-blue-8'" class="text-white">
                    <div class="row">
                      <div class="col-10">
                        <div class="text-h6">Number of Total Programs</div>
                        <div class="text-h5">{{generalDashboardMarContents.totalPrograms}}</div>
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
                        <div class="text-h5">{{generalDashboardMarContents.activePrograms}}</div>
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
                        <div class="text-h5">{{generalDashboardMarContents.projectsGoingOn}}</div>
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
                        <div class="text-h5">{{generalDashboardMarContents.totalUniqueVolunteers}} / {{generalDashboardMarContents.totalVolunteerHours}}</div>
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
                        :color="(foodbankMarContents.overallPerformance == null)?'grey':(foodbankMarContents.overallPerformance >= '0.0001' && foodbankMarContents.overallPerformance <= '40')?'red':(foodbankMarContents.overallPerformance > '40' && foodbankMarContents.overallPerformance <= '60')?'orange':(foodbankMarContents.overallPerformance > '60' && foodbankMarContents.overallPerformance < '90')?'yellow-7':(foodbankMarContents.overallPerformance >= '90' && foodbankMarContents.overallPerformance < '120')?'green':(foodbankMarContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(babyCupboardMarContents.overallPerformance == null)?'grey':(babyCupboardMarContents.overallPerformance >= '0.0001' && babyCupboardMarContents.overallPerformance <= '40')?'red':(babyCupboardMarContents.overallPerformance > '40' && babyCupboardMarContents.overallPerformance <= '60')?'orange':(babyCupboardMarContents.overallPerformance > '60' && babyCupboardMarContents.overallPerformance < '90')?'yellow-7':(babyCupboardMarContents.overallPerformance >= '90' && babyCupboardMarContents.overallPerformance < '120')?'green':(babyCupboardMarContents.overallPerformance >= '120'?'blue':'grey')"

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
                        :color="(gikMarContents.overallPerformance == null)?'grey':(gikMarContents.overallPerformance >= '0.0001' && gikMarContents.overallPerformance <= '40')?'red':(gikMarContents.overallPerformance > '40' && gikMarContents.overallPerformance <= '60')?'orange':(gikMarContents.overallPerformance > '60' && gikMarContents.overallPerformance < '90')?'yellow-7':(gikMarContents.overallPerformance >= '90' && gikMarContents.overallPerformance < '120')?'green':(gikMarContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(charity13MarContents.overallPerformance == null)?'grey':(charity13MarContents.overallPerformance >= '0.0001' && charity13MarContents.overallPerformance <= '40')?'red':(charity13MarContents.overallPerformance > '40' && charity13MarContents.overallPerformance <= '60')?'orange':(charity13MarContents.overallPerformance > '60' && charity13MarContents.overallPerformance < '90')?'yellow-7':(charity13MarContents.overallPerformance >= '90' && charity13MarContents.overallPerformance < '120')?'green':(charity13MarContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(entrepreneurshipMarContents.overallPerformance == null)?'grey':(entrepreneurshipMarContents.overallPerformance >= '0.0001' && entrepreneurshipMarContents.overallPerformance <= '40')?'red':(entrepreneurshipMarContents.overallPerformance > '40' && entrepreneurshipMarContents.overallPerformance <= '60')?'orange':(entrepreneurshipMarContents.overallPerformance > '60' && entrepreneurshipMarContents.overallPerformance < '90')?'yellow-7':(entrepreneurshipMarContents.overallPerformance >= '90' && entrepreneurshipMarContents.overallPerformance < '120')?'green':(entrepreneurshipMarContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(employmentSkillsMarContents.overallPerformance == null)?'grey':(employmentSkillsMarContents.overallPerformance >= '0.0001' && employmentSkillsMarContents.overallPerformance <= '40')?'red':(employmentSkillsMarContents.overallPerformance > '40' && employmentSkillsMarContents.overallPerformance <= '60')?'orange':(employmentSkillsMarContents.overallPerformance > '60' && employmentSkillsMarContents.overallPerformance < '90')?'yellow-7':(employmentSkillsMarContents.overallPerformance >= '90' && employmentSkillsMarContents.overallPerformance < '120')?'green':(employmentSkillsMarContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(socialHarvestMarContents.overallPerformance == null)?'grey':(socialHarvestMarContents.overallPerformance >= '0.0001' && socialHarvestMarContents.overallPerformance <= '40')?'red':(socialHarvestMarContents.overallPerformance > '40' && socialHarvestMarContents.overallPerformance <= '60')?'orange':(socialHarvestMarContents.overallPerformance > '60' && socialHarvestMarContents.overallPerformance < '90')?'yellow-7':(socialHarvestMarContents.overallPerformance >= '90' && socialHarvestMarContents.overallPerformance < '120')?'green':(socialHarvestMarContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(marketMobileMarContents.overallPerformance == null)?'grey':(marketMobileMarContents.overallPerformance >= '0.0001' && marketMobileMarContents.overallPerformance <= '40')?'red':(marketMobileMarContents.overallPerformance > '40' && marketMobileMarContents.overallPerformance <= '60')?'orange':(marketMobileMarContents.overallPerformance > '60' && marketMobileMarContents.overallPerformance < '90')?'yellow-7':(marketMobileMarContents.overallPerformance >= '90' && marketMobileMarContents.overallPerformance < '120')?'green':(marketMobileMarContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(clothespinMarContents.overallPerformance == null)?'grey':(clothespinMarContents.overallPerformance >= '0.0001' && clothespinMarContents.overallPerformance <= '40')?'red':(clothespinMarContents.overallPerformance > '40' && clothespinMarContents.overallPerformance <= '60')?'orange':(clothespinMarContents.overallPerformance > '60' && clothespinMarContents.overallPerformance < '90')?'yellow-7':(clothespinMarContents.overallPerformance >= '90' && clothespinMarContents.overallPerformance < '120')?'green':(clothespinMarContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(gfbMarContents.overallPerformance == null)?'grey':(gfbMarContents.overallPerformance >= '0.0001' && gfbMarContents.overallPerformance <= '40')?'red':(gfbMarContents.overallPerformance > '40' && gfbMarContents.overallPerformance <= '60')?'orange':(gfbMarContents.overallPerformance > '60' && gfbMarContents.overallPerformance < '90')?'yellow-7':(gfbMarContents.overallPerformance >= '90' && gfbMarContents.overallPerformance < '120')?'green':(gfbMarContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(overbrookSPMarContents.overallPerformance == null)?'grey':(overbrookSPMarContents.overallPerformance >= '0.0001' && overbrookSPMarContents.overallPerformance <= '40')?'red':(overbrookSPMarContents.overallPerformance > '40' && overbrookSPMarContents.overallPerformance <= '60')?'orange':(overbrookSPMarContents.overallPerformance > '60' && overbrookSPMarContents.overallPerformance < '90')?'yellow-7':(overbrookSPMarContents.overallPerformance >= '90' && overbrookSPMarContents.overallPerformance < '120')?'green':(overbrookSPMarContents.overallPerformance >= '120'?'blue':'grey')"
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
                            :color="(collectiveKitchenMarContents.overallPerformance == null)?'grey':(collectiveKitchenMarContents.overallPerformance >= '0.0001' && collectiveKitchenMarContents.overallPerformance <= '40')?'red':(collectiveKitchenMarContents.overallPerformance > '40' && collectiveKitchenMarContents.overallPerformance <= '60')?'orange':(collectiveKitchenMarContents.overallPerformance > '60' && collectiveKitchenMarContents.overallPerformance < '90')?'yellow-7':(collectiveKitchenMarContents.overallPerformance >= '90' && collectiveKitchenMarContents.overallPerformance < '120')?'green':(collectiveKitchenMarContents.overallPerformance >= '120'?'blue':'grey')"
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
                            :color="(communityMealsMarContents.overallPerformance == null)?'grey':(communityMealsMarContents.overallPerformance >= '0.0001' && communityMealsMarContents.overallPerformance <= '40')?'red':(communityMealsMarContents.overallPerformance > '40' && communityMealsMarContents.overallPerformance <= '60')?'orange':(communityMealsMarContents.overallPerformance > '60' && communityMealsMarContents.overallPerformance < '90')?'yellow-7':(communityMealsMarContents.overallPerformance >= '90' && communityMealsMarContents.overallPerformance < '120')?'green':(communityMealsMarContents.overallPerformance >= '120'?'blue':'grey')"
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
                            :color="(pinsMarContents.overallPerformance == null)?'grey':(pinsMarContents.overallPerformance >= '0.0001' && pinsMarContents.overallPerformance <= '40')?'red':(pinsMarContents.overallPerformance > '40' && pinsMarContents.overallPerformance <= '60')?'orange':(pinsMarContents.overallPerformance > '60' && pinsMarContents.overallPerformance < '90')?'yellow-7':(pinsMarContents.overallPerformance >= '90' && pinsMarContents.overallPerformance < '120')?'green':(pinsMarContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(yesICanMarContents.overallPerformance == null)?'grey':(yesICanMarContents.overallPerformance >= '0.0001' && yesICanMarContents.overallPerformance <= '40')?'red':(yesICanMarContents.overallPerformance > '40' && yesICanMarContents.overallPerformance <= '60')?'orange':(yesICanMarContents.overallPerformance > '60' && yesICanMarContents.overallPerformance < '90')?'yellow-7':(yesICanMarContents.overallPerformance >= '90' && yesICanMarContents.overallPerformance < '120')?'green':(yesICanMarContents.overallPerformance >= '120'?'blue':'grey')"
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
                            :color="(crisisInterventionMarContents.overallPerformance == null)?'grey':(crisisInterventionMarContents.overallPerformance >= '0.0001' && crisisInterventionMarContents.overallPerformance <= '40')?'red':(crisisInterventionMarContents.overallPerformance > '40' && crisisInterventionMarContents.overallPerformance <= '60')?'orange':(crisisInterventionMarContents.overallPerformance > '60' && crisisInterventionMarContents.overallPerformance < '90')?'yellow-7':(crisisInterventionMarContents.overallPerformance >= '90' && crisisInterventionMarContents.overallPerformance < '120')?'green':(crisisInterventionMarContents.overallPerformance >= '120'?'blue':'grey')"
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
                            :color="(youthPREducationMarContents.overallPerformance == null)?'grey':(youthPREducationMarContents.overallPerformance >= '0.0001' && youthPREducationMarContents.overallPerformance <= '40')?'red':(youthPREducationMarContents.overallPerformance > '40' && youthPREducationMarContents.overallPerformance <= '60')?'orange':(youthPREducationMarContents.overallPerformance > '60' && youthPREducationMarContents.overallPerformance < '90')?'yellow-7':(youthPREducationMarContents.overallPerformance >= '90' && youthPREducationMarContents.overallPerformance < '120')?'green':(youthPREducationMarContents.overallPerformance >= '120'?'blue':'grey')"
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
                            :color="(youthPRSportMarContents.overallPerformance == null)?'grey':(youthPRSportMarContents.overallPerformance >= '0.0001' && youthPRSportMarContents.overallPerformance <= '40')?'red':(youthPRSportMarContents.overallPerformance > '40' && youthPRSportMarContents.overallPerformance <= '60')?'orange':(youthPRSportMarContents.overallPerformance > '60' && youthPRSportMarContents.overallPerformance < '90')?'yellow-7':(youthPRSportMarContents.overallPerformance >= '90' && youthPRSportMarContents.overallPerformance < '120')?'green':(youthPRSportMarContents.overallPerformance >= '120'?'blue':'grey')"
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
                            :color="(youthPRViolinMarContents.overallPerformance == null)?'grey':(youthPRViolinMarContents.overallPerformance >= '0.0001' && youthPRViolinMarContents.overallPerformance <= '40')?'red':(youthPRViolinMarContents.overallPerformance > '40' && youthPRViolinMarContents.overallPerformance <= '60')?'orange':(youthPRViolinMarContents.overallPerformance > '60' && youthPRViolinMarContents.overallPerformance < '90')?'yellow-7':(youthPRViolinMarContents.overallPerformance >= '90' && youthPRViolinMarContents.overallPerformance < '120')?'green':(youthPRViolinMarContents.overallPerformance >= '120'?'blue':'grey')"
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
                            :color="(communityDevelopmentMarContents.overallPerformance == null)?'grey':(communityDevelopmentMarContents.overallPerformance >= '0.0001' && communityDevelopmentMarContents.overallPerformance <= '40')?'red':(communityDevelopmentMarContents.overallPerformance > '40' && communityDevelopmentMarContents.overallPerformance <= '60')?'orange':(communityDevelopmentMarContents.overallPerformance > '60' && communityDevelopmentMarContents.overallPerformance < '90')?'yellow-7':(communityDevelopmentMarContents.overallPerformance >= '90' && communityDevelopmentMarContents.overallPerformance < '120')?'green':(communityDevelopmentMarContents.overallPerformance >= '120'?'blue':'grey')"
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
                      data: [{value: this.generalDashboardMarContents.mainOverallPerformance}],
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
                      data: [{value: this.generalDashboardMarContents.budgetUsage}],
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
                                {value: this.generalDashboardMarContents.cumulativeexpAdmin, name: 'Admin', selected: false},
                                {value: this.generalDashboardMarContents.cumulativeexpPRfftnc, name: 'PR / FFTNC', selected: false},
                                {value: this.generalDashboardMarContents.cumulativeexpIncubator, name: 'Incubator', selected: false},
                                {value: this.generalDashboardMarContents.cumulativeexpAP, name: 'A-P', selected: false},
                                {value: this.generalDashboardMarContents.cumulativeexpGFB, name: 'GFB', selected: false},
                                {value: this.generalDashboardMarContents.cumulativeexpGIK, name: 'GIK', selected: false},
                                {value: this.generalDashboardMarContents.cumulativeexpSH, name: 'SH', selected: false},
                                {value: this.generalDashboardMarContents.cumulativeexpCYFlactation, name: 'CYF / Lactation', selected: false},
                                {value: this.generalDashboardMarContents.cumulativeexpCPO, name: 'CPO', selected: false},
                                {value: this.generalDashboardMarContents.cumulativeexpSeniorsProject, name: 'Seniors Project', selected: false},
                                {value: this.generalDashboardMarContents.cumulativeexpCSDmcConnell, name: 'CSD / McConnell', selected: false},
                                {value: this.generalDashboardMarContents.cumulativeexpOthers, name: 'Others', selected: false}
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
                                {value: this.generalDashboardMarContents.expAdmin, name: 'Admin', selected: false},
                                {value: this.generalDashboardMarContents.expPRfftnc, name: 'PR / FFTNC', selected: false},
                                {value: this.generalDashboardMarContents.expIncubator, name: 'Incubator', selected: false},
                                {value: this.generalDashboardMarContents.expAP, name: 'A-P', selected: false},
                                {value: this.generalDashboardMarContents.expGFB, name: 'GFB', selected: false},
                                {value: this.generalDashboardMarContents.expGIK, name: 'GIK', selected: false},
                                {value: this.generalDashboardMarContents.expSH, name: 'SH', selected: false},
                                {value: this.generalDashboardMarContents.expCYFlactation, name: 'CYF / Lactation', selected: false},
                                {value: this.generalDashboardMarContents.expCPO, name: 'CPO', selected: false},
                                {value: this.generalDashboardMarContents.expSeniorsProject, name: 'Seniors Project', selected: false},
                                {value: this.generalDashboardMarContents.expCSDmcConnell, name: 'CSD / McConnell', selected: false},
                                {value: this.generalDashboardMarContents.expOthers, name: 'Others', selected: false}
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
                var docgeneralDashboardFebRef = db.collection("generalDashboard").doc("march");

                docgeneralDashboardFebRef.get().then((doc) => {
                    if (doc.exists) {
                        console.log("Document data:", doc.data());
                        this.generalDashboardMarContents = doc.data();
                        this.totalExpenseMar();
                        this.cumulativeBudgetUsageMar();
                        this.totalCumulativeExpenseMar();

                        this.foodbankMar();
                    } else {
                        // doc.data() will be undefined in this case
                        console.log("No such document!");
                    }
                }).catch((error) => {
                    console.log("Error getting document:", error);
                });
            },  
                foodbankMar(){
                    //    FOODBANK | FEBRUARY
                    var docfoodbankFebRef = db.collection("foodbank").doc("march");

                    docfoodbankFebRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.foodbankMarContents = doc.data();
                            this.foodbankMarOverallPerformance();

                            this.babyCupboardMar();

                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document!");
                        }

                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                babyCupboardMar(){
                                        //    BABY CUPBOARD | FEBRUARY
                    var docbabyCupboardFebRef = db.collection("babyCupboard").doc("march");

                    docbabyCupboardFebRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.babyCupboardMarContents = doc.data();
                            this.babyCupboardMarOverallPerformance();

                            this.gikMar();
                            

                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document!");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                gikMar(){
                    //    GIFTS IN KIND | FEBRUARY
                    var docgikFebRef = db.collection("gik").doc("march");

                    docgikFebRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.gikMarContents = doc.data();
                            this.gikMarOverallPerformance();
                            
                            this.charity13Mar();
                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document!");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });

                },
                charity13Mar(){
                    //    charITy13 | FEBRUARY
                    var docCharity13FebRef = db.collection("charity13").doc("march");

                    docCharity13FebRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.charity13MarContents = doc.data();
                            this.charity13MarOverallPerformance();
                            
                            this.entrepreneurshipMar();
                            
                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document!");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });

                },entrepreneurshipMar(){
                    //    ENTREPRENEURSHIP | FEBRUARY
                    var docentrepreneurshipFebRef = db.collection("entrepreneurship").doc("march");

                    docentrepreneurshipFebRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.entrepreneurshipMarContents = doc.data();
                            this.entrepreneurshipMarOverallPerformance();

                            this.employmentSkillsMar();

                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document!");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                employmentSkillsMar(){
                    //    EMPLOYEMENT SKILLS | FEBRUARY
                    var docemploymentSkillsFebRef = db.collection("employmentSkills").doc("march");

                    docemploymentSkillsFebRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.employmentSkillsMarContents = doc.data();
                            this.employmentSkillsMarOverallPerformance();

                            this.socialHarvestMar();

                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document!");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                socialHarvestMar(){
                    //    SOCIAL HARVEST | FEBRUARY
                    var docsocialHarvestFebRef = db.collection("socialHarvest").doc("march");

                    docsocialHarvestFebRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.socialHarvestMarContents = doc.data();
                            this.socialHarvestMarOverallPerformance();

                            this.marketMobileMar();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document!");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });

                },
                marketMobileMar(){
                    //    MARKET MOBILE | FEBRUARY
                    var docmarketMobileFebRef = db.collection("marketMobile").doc("march");

                    docmarketMobileFebRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.marketMobileMarContents = doc.data();
                            this.marketMobileMarOverallPerformance();

                            this.clothespinMar();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document!");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });

                },
                clothespinMar(){
                    //    CLOTHESPIN | FEBRUARY
                    var docclothespinFebRef = db.collection("clothespin").doc("march");

                    docclothespinFebRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.clothespinMarContents = doc.data();
                            this.clothespinMarOverallPerformance();

                            this.gfbMar();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document!");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });

                },
                gfbMar(){
                    //    GOOD FOOD BOX | FEBRUARY
                    var docgfbFebRef = db.collection("gfb").doc("march");

                    docgfbFebRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.gfbMarContents = doc.data();
                            this.gfbMarOverallPerformance();
                            
                            this.overbrookSPMar();

                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document!");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });


                },
                overbrookSPMar(){
                    //    Overbrook SP | FEBRUARY
                    var docoverbrookSPFebRef = db.collection("overbrookSP").doc("march");

                    docoverbrookSPFebRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.overbrookSPMarContents = doc.data();
                            this.overbrookSPMarOverallPerformance();

                            this.collectiveKitchenMar();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document!");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });

                },
                collectiveKitchenMar(){
                    //    COLLECTIVE KITCHEN | FEBRUARY
                    var doccollectiveKitchenFebRef = db.collection("collectiveKitchen").doc("march");

                    doccollectiveKitchenFebRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.collectiveKitchenMarContents = doc.data();
                            this.collectiveKitchenMarOverallPerformance(); 

                            this.communityMealsMar();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document!");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });

                },
                communityMealsMar(){
                    //        COMMUNITY MEALS | FEBRUARY
                    var doccommunityMealsFebRef = db.collection("communityMeals").doc("march");

                    doccommunityMealsFebRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.communityMealsMarContents = doc.data();
                            this.communityMealsMarOverallPerformance();

                            this.pinsMar();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document!");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });

                },
                pinsMar(){
                    //    PINS | FEBRUARY
                    var docpinsFebRef = db.collection("pins").doc("march");

                    docpinsFebRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.pinsMarContents = doc.data();
                            this.pinsMarOverallPerformance();

                            this.yesICanMar();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document!");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                yesICanMar(){
                    //    Yes I Can | FEBRUARY
                    var docyesICanFebRef = db.collection("yesICan").doc("march");

                    docyesICanFebRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.yesICanMarContents = doc.data();
                            this.yesICanMarOverallPerformance();

                            this.crisisInterventionMar();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document!");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                crisisInterventionMar(){
                    //    CRISIS INTERVENTION | FEBRUARY
                    var doccrisisInterventionFebRef = db.collection("crisisIntervention").doc("march");

                    doccrisisInterventionFebRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.crisisInterventionMarContents = doc.data();
                            this.crisisInterventionMarOverallPerformance();

                            this.youthPREducationMar();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document!");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                youthPREducationMar(){
                    //    YouthPR Education | FEBRUARY
                    var docyouthPREducationFebRef = db.collection("youthPREducation").doc("march");

                    docyouthPREducationFebRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.youthPREducationMarContents = doc.data();
                            this.youthPREducationMarOverallPerformance();

                            this.youthPRSportMar();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document!");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                youthPRSportMar(){
                    //    YouthPR Sport | FEBRUARY
                    var docyouthPRSportFebRef = db.collection("youthPRSport").doc("march");

                    docyouthPRSportFebRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.youthPRSportMarContents = doc.data();
                            this.youthPRSportMarOverallPerformance();

                            this.youthPRViolinMar();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document!");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                youthPRViolinMar(){
                    //    YouthPR Violin | FEBRUARY
                    var docyouthPRViolinFebRef = db.collection("youthPRViolin").doc("march");

                    docyouthPRViolinFebRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.youthPRViolinMarContents = doc.data();
                            this.youthPRViolinMarOverallPerformance();

                            this.communityDevelopmentMar();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document!");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                communityDevelopmentMar(){
                    //    COMMUNITY DEVELOPMENT | FEBRUARY
                    var doccommunityDevelopmentFebRef = db.collection("communityDevelopment").doc("march");

                    doccommunityDevelopmentFebRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.communityDevelopmentMarContents = doc.data();
                            this.communityDevelopmentMarOverallPerformance();
                            
                            console.log("denemem: "+ this.foodbankMarContents.kpi1 + " baby: " + this.babyCupboardMarContents.kpi1 + 
                            " GIK: " + this.gikMarContents.kpi1 + " CD: " + this.youthPRViolinMarContents.kpi1);
                            this.generalMarOverallPerformance();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document!");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },

            gikMarOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = ((getRealValue(this.gikMarContents.kpi1)*2) + getRealValue(this.gikMarContents.kpi2) + getRealValue(this.gikMarContents.kpi3) + (getRealValue(this.gikMarContents.kpi4)*2))/6;
            this.gikMarContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 29.5 * 100;
            console.log("GIK Overall performance = " + this.gikMarContents.overallPerformance);             
            return this.gikMarContents.overallPerformance;
            },
            foodbankMarOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = ((getRealValue(this.foodbankMarContents.kpi1)*2) + getRealValue(this.foodbankMarContents.kpi2) + getRealValue(this.foodbankMarContents.kpi3) + (getRealValue(this.foodbankMarContents.kpi4)*2) + getRealValue(this.foodbankMarContents.kpi5) + getRealValue(this.foodbankMarContents.kpi6))/8;
            this.foodbankMarContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 287.09375 * 100;
            console.log("Foodbank Overall performance = " + this.foodbankMarContents.overallPerformance); 
            return this.foodbankMarContents.overallPerformance;
            },
            babyCupboardMarOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = ((getRealValue(this.babyCupboardMarContents.kpi1)*2) + getRealValue(this.babyCupboardMarContents.kpi2) + getRealValue(this.babyCupboardMarContents.kpi3) + (getRealValue(this.babyCupboardMarContents.kpi4)*2))/6;
            this.babyCupboardMarContents.overallPerformance = (getRealValue(baseOverallPerformanceGIK) / 38.125) * 100;
            console.log("Baby Cupboard Overall performance = " + this.babyCupboardMarContents.overallPerformance); 
            return this.babyCupboardMarContents.overallPerformance;
            },
            charity13MarOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = ((getRealValue(this.charity13MarContents.kpi1)*2) + getRealValue(this.charity13MarContents.kpi2) + getRealValue(this.charity13MarContents.kpi3) + getRealValue(this.charity13MarContents.kpi4) + (getRealValue(this.charity13MarContents.kpi5)*2))/7;
            this.charity13MarContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 2.19047619 * 100;
            console.log("charITy13 Overall performance = " + this.charity13MarContents.overallPerformance); 
            return this.charity13MarContents.overallPerformance;
            },
            entrepreneurshipMarOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.entrepreneurshipMarContents.kpi1) + getRealValue(this.entrepreneurshipMarContents.kpi2) + getRealValue(this.entrepreneurshipMarContents.kpi3) + getRealValue(this.entrepreneurshipMarContents.kpi4))/4;
            this.entrepreneurshipMarContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 1217.967792 * 100;
            console.log("entrepreneurship Overall performance = " + this.entrepreneurshipMarContents.overallPerformance); 
            return this.entrepreneurshipMarContents.overallPerformance;
            },
            employmentSkillsMarOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.employmentSkillsMarContents.kpi1) + getRealValue(this.employmentSkillsMarContents.kpi2) + getRealValue(this.employmentSkillsMarContents.kpi3) + getRealValue(this.employmentSkillsMarContents.kpi4))/4;
            this.employmentSkillsMarContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 45.83333333 * 100;
            console.log("employmentSkills Overall performance = " + this.employmentSkillsMarContents.overallPerformance); 
            return this.employmentSkillsMarContents.overallPerformance;
            },
            socialHarvestMarOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.socialHarvestMarContents.kpi1) + getRealValue(this.socialHarvestMarContents.kpi2) + getRealValue(this.socialHarvestMarContents.kpi3) + getRealValue(this.socialHarvestMarContents.kpi4) + getRealValue(this.socialHarvestMarContents.kpi5))/5;
            this.socialHarvestMarContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 29.7409 * 100;
            console.log("socialHarvest Overall performance = " + this.socialHarvestMarContents.overallPerformance); 
            return this.socialHarvestMarContents.overallPerformance;
            },
            marketMobileMarOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.marketMobileMarContents.kpi1) + getRealValue(this.marketMobileMarContents.kpi2) + (getRealValue(this.marketMobileMarContents.kpi3)*2) + (getRealValue(this.marketMobileMarContents.kpi4)*2))/6;
            this.marketMobileMarContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 149.9444444 * 100;
            console.log("marketMobile Overall performance = " + this.marketMobileMarContents.overallPerformance); 
            return this.marketMobileMarContents.overallPerformance;
            },
            clothespinMarOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.clothespinMarContents.kpi1) + getRealValue(this.clothespinMarContents.kpi2) + getRealValue(this.clothespinMarContents.kpi3))/3;
            this.clothespinMarContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 144 * 100;
            console.log("clothespin Overall performance = " + this.clothespinMarContents.overallPerformance); 
            return this.clothespinMarContents.overallPerformance;
            },
            gfbMarOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.gfbMarContents.kpi1) + getRealValue(this.gfbMarContents.kpi2) + getRealValue(this.gfbMarContents.kpi3))/3;
            this.gfbMarContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 274.1111111 * 100;
            console.log("gfb Overall performance = " + this.gfbMarContents.overallPerformance); 
            return this.gfbMarContents.overallPerformance;
            },
            overbrookSPMarOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.overbrookSPMarContents.kpi1) + getRealValue(this.overbrookSPMarContents.kpi2))/2;
            this.overbrookSPMarContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 101.75 * 100;
            console.log("overbrookSP Overall performance = " + this.overbrookSPMarContents.overallPerformance); 
            return this.overbrookSPMarContents.overallPerformance;
            },
            collectiveKitchenMarOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.collectiveKitchenMarContents.kpi1) + getRealValue(this.collectiveKitchenMarContents.kpi2) + getRealValue(this.collectiveKitchenMarContents.kpi3) + getRealValue(this.collectiveKitchenMarContents.kpi4))/4;
            this.collectiveKitchenMarContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 5.75 * 100;
            console.log("collectiveKitchen Overall performance = " + this.collectiveKitchenMarContents.overallPerformance); 
            return this.collectiveKitchenMarContents.overallPerformance;
            },
            communityMealsMarOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.communityMealsMarContents.kpi1) + getRealValue(this.communityMealsMarContents.kpi2) + getRealValue(this.communityMealsMarContents.kpi3) + (getRealValue(this.communityMealsMarContents.kpi4)*2))/5;
            this.communityMealsMarContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 290.2666667 * 100;
            console.log("communityMeals Overall performance = " + this.communityMealsMarContents.overallPerformance); 
            return this.communityMealsMarContents.overallPerformance;
            },
            pinsMarOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.pinsMarContents.kpi1) + getRealValue(this.pinsMarContents.kpi2) + getRealValue(this.pinsMarContents.kpi3))/3;
            this.pinsMarContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 10.33333333 * 100;
            console.log("pins Overall performance = " + this.pinsMarContents.overallPerformance); 
            return this.pinsMarContents.overallPerformance;
            },
            youthPREducationMarOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.youthPREducationMarContents.kpi1) + getRealValue(this.youthPREducationMarContents.kpi2) + getRealValue(this.youthPREducationMarContents.kpi3) + getRealValue(this.youthPREducationMarContents.kpi4) + (getRealValue(this.youthPREducationMarContents.kpi5)*2))/6;
            this.youthPREducationMarContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 13 * 100;
            console.log("youthPREducation Overall performance = " + this.youthPREducationMarContents.overallPerformance); 
            return this.youthPREducationMarContents.overallPerformance;
            },
            youthPRSportMarOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.youthPRSportMarContents.kpi1) + getRealValue(this.youthPRSportMarContents.kpi2) + getRealValue(this.youthPRSportMarContents.kpi3) + getRealValue(this.youthPRSportMarContents.kpi4) + (getRealValue(this.youthPRSportMarContents.kpi5)*2))/6;
            this.youthPRSportMarContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 1.5 * 100;
            console.log("youthPRSport Overall performance = " + this.youthPRSportMarContents.overallPerformance); 
            return this.youthPRSportMarContents.overallPerformance;
            },
            youthPRViolinMarOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.youthPRViolinMarContents.kpi1) + getRealValue(this.youthPRViolinMarContents.kpi2) + getRealValue(this.youthPRViolinMarContents.kpi3) + getRealValue(this.youthPRViolinMarContents.kpi4) + (getRealValue(this.youthPRViolinMarContents.kpi5)*2))/6;
            this.youthPRViolinMarContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 5.388888889 * 100;
            console.log("youthPRViolin Overall performance = " + this.youthPRViolinMarContents.overallPerformance); 
            return this.youthPRViolinMarContents.overallPerformance;
            },
            yesICanMarOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.yesICanMarContents.kpi1) + getRealValue(this.yesICanMarContents.kpi2) + getRealValue(this.yesICanMarContents.kpi3))/3;
            this.yesICanMarContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 11.33333333 * 100;
            console.log("yesICan Overall performance = " + this.yesICanMarContents.overallPerformance); 
            return this.yesICanMarContents.overallPerformance;
            },
            crisisInterventionMarOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.crisisInterventionMarContents.kpi1) + getRealValue(this.crisisInterventionMarContents.kpi2))/2;
            this.crisisInterventionMarContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 104 * 100;
            console.log("crisisIntervention Overall performance = " + this.crisisInterventionMarContents.overallPerformance); 
            return this.crisisInterventionMarContents.overallPerformance;
            },
            communityDevelopmentMarOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.communityDevelopmentMarContents.kpi1) + getRealValue(this.communityDevelopmentMarContents.kpi2) + getRealValue(this.communityDevelopmentMarContents.kpi3))/3;
            this.communityDevelopmentMarContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 77.22222222 * 100;
            console.log("communityDevelopment Overall performance = " + this.communityDevelopmentMarContents.overallPerformance); 
            return this.communityDevelopmentMarContents.overallPerformance;
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
            cumulativeBudgetUsageMar(){
            const getRealValue = (val) => +val || val;
            return this.generalDashboardMarContents.budgetUsage = (((getRealValue(this.generalDashboardMarContents.expenses) + getRealValue(this.generalDashboardFebContents.expenses) + getRealValue(this.generalDashboardJanContents.expenses)) / getRealValue(this.generalDashboardMarContents.actualBudget))*100).toFixed(2)
            },
            totalCumulativeExpenseMar(){
            const getRealValue = (val) => +val || val;
            this.generalDashboardMarContents.cumulativeexpAdmin = (getRealValue(this.generalDashboardMarContents.expAdmin) + getRealValue(this.generalDashboardFebContents.expAdmin) + getRealValue(this.generalDashboardJanContents.expAdmin)).toFixed(2)
            this.generalDashboardMarContents.cumulativeexpPRfftnc = (getRealValue(this.generalDashboardMarContents.expPRfftnc) + getRealValue(this.generalDashboardFebContents.expPRfftnc) + getRealValue(this.generalDashboardJanContents.expPRfftnc)).toFixed(2)
            this.generalDashboardMarContents.cumulativeexpIncubator = (getRealValue(this.generalDashboardMarContents.expIncubator) + getRealValue(this.generalDashboardFebContents.expIncubator) + getRealValue(this.generalDashboardJanContents.expIncubator)).toFixed(2)
            this.generalDashboardMarContents.cumulativeexpAP = (getRealValue(this.generalDashboardMarContents.expAP) + getRealValue(this.generalDashboardFebContents.expAP) + getRealValue(this.generalDashboardJanContents.expAP)).toFixed(2)
            this.generalDashboardMarContents.cumulativeexpGFB = (getRealValue(this.generalDashboardMarContents.expGFB) + getRealValue(this.generalDashboardFebContents.expGFB) + getRealValue(this.generalDashboardJanContents.expGFB)).toFixed(2)
            this.generalDashboardMarContents.cumulativeexpGIK = (getRealValue(this.generalDashboardMarContents.expGIK) + getRealValue(this.generalDashboardFebContents.expGIK) + getRealValue(this.generalDashboardJanContents.expGIK)).toFixed(2)
            this.generalDashboardMarContents.cumulativeexpSH = (getRealValue(this.generalDashboardMarContents.expSH) + getRealValue(this.generalDashboardFebContents.expSH) + getRealValue(this.generalDashboardJanContents.expSH)).toFixed(2)
            this.generalDashboardMarContents.cumulativeexpCYFlactation = (getRealValue(this.generalDashboardMarContents.expCYFlactation) + getRealValue(this.generalDashboardFebContents.expCYFlactation) + getRealValue(this.generalDashboardJanContents.expCYFlactation)).toFixed(2)
            this.generalDashboardMarContents.cumulativeexpCPO = (getRealValue(this.generalDashboardMarContents.expCPO) + getRealValue(this.generalDashboardFebContents.expCPO) + getRealValue(this.generalDashboardJanContents.expCPO)).toFixed(2)
            this.generalDashboardMarContents.cumulativeexpSeniorsProject = (getRealValue(this.generalDashboardMarContents.expSeniorsProject) + getRealValue(this.generalDashboardFebContents.expSeniorsProject) + getRealValue(this.generalDashboardJanContents.expSeniorsProject)).toFixed(2)
            this.generalDashboardMarContents.cumulativeexpCSDmcConnell = (getRealValue(this.generalDashboardMarContents.expCSDmcConnell) + getRealValue(this.generalDashboardFebContents.expCSDmcConnell) + getRealValue(this.generalDashboardJanContents.expCSDmcConnell)).toFixed(2)
            this.generalDashboardMarContents.cumulativeexpOthers = (getRealValue(this.generalDashboardMarContents.expOthers) + getRealValue(this.generalDashboardFebContents.expOthers) + getRealValue(this.generalDashboardJanContents.expOthers)).toFixed(2)
            },
            
            generalMarOverallPerformance(){
                const getRealValue = (val) => +val || val;
                var baseFebOverallPerformanceGeneralDashboard = ((2 * getRealValue(this.foodbankMarContents.overallPerformance)) + getRealValue(this.babyCupboardMarContents.overallPerformance) + 
                (1.25 * getRealValue(this.gikMarContents.overallPerformance)) + (0.8 * getRealValue(this.charity13MarContents.overallPerformance)) + getRealValue(this.entrepreneurshipMarContents.overallPerformance) + 
                getRealValue(this.employmentSkillsMarContents.overallPerformance) + (0.8 * getRealValue(this.socialHarvestMarContents.overallPerformance)) + (0.8 * getRealValue(this.marketMobileMarContents.overallPerformance)) + 
                (0.8 * getRealValue(this.gfbMarContents.overallPerformance)) + (0.8 * getRealValue(this.collectiveKitchenMarContents.overallPerformance)) + (0.8 * getRealValue(this.communityMealsMarContents.overallPerformance)) + 
                (1.5 * getRealValue(this.clothespinMarContents.overallPerformance)) + (2 * getRealValue(this.crisisInterventionMarContents.overallPerformance)) + (0.8 * getRealValue(this.yesICanMarContents.overallPerformance)) + 
                getRealValue(this.youthPREducationMarContents.overallPerformance) + getRealValue(this.youthPRSportMarContents.overallPerformance) + getRealValue(this.youthPRViolinMarContents.overallPerformance) + 
                getRealValue(this.pinsMarContents.overallPerformance) + getRealValue(this.overbrookSPMarContents.overallPerformance) + getRealValue(this.communityDevelopmentMarContents.overallPerformance));
                this.generalDashboardMarContents.mainOverallPerformance = (getRealValue(baseFebOverallPerformanceGeneralDashboard) / 21.35).toFixed(2)
                console.log("General Overall Performance: " + this.generalDashboardMarContents.mainOverallPerformance);
                return this.generalDashboardMarContents.mainOverallPerformance
            },

        },
        created(){
          this.readData()
        }

    }
</script>
