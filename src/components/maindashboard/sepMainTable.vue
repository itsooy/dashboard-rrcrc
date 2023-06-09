<template>
    <div class="row q-col-gutter-sm q-ma-xs">
        <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">  <!--Number of Total Programs-->
                <q-card>
                  <q-card-section :class="$q.dark.isActive?'blue_dark':'bg-blue-8'" class="text-white">
                    <div class="row">
                      <div class="col-10">
                        <div class="text-h6">Number of Total Programs</div>
                        <div class="text-h5">{{generalDashboardSepContents.totalPrograms}}</div>
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
                        <div class="text-h5">{{generalDashboardSepContents.activePrograms}}</div>
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
                        <div class="text-h5">{{generalDashboardSepContents.projectsGoingOn}}</div>
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
                        <div class="text-h5">{{generalDashboardSepContents.totalUniqueVolunteers}} / {{generalDashboardSepContents.totalVolunteerHours}}</div>
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
                        :color="(foodbankSepContents.overallPerformance == null)?'grey':(foodbankSepContents.overallPerformance >= '0.0001' && foodbankSepContents.overallPerformance <= '40')?'red':(foodbankSepContents.overallPerformance > '40' && foodbankSepContents.overallPerformance <= '60')?'orange':(foodbankSepContents.overallPerformance > '60' && foodbankSepContents.overallPerformance < '90')?'yellow-7':(foodbankSepContents.overallPerformance >= '90' && foodbankSepContents.overallPerformance < '120')?'green':(foodbankSepContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(babyCupboardSepContents.overallPerformance == null)?'grey':(babyCupboardSepContents.overallPerformance >= '0.0001' && babyCupboardSepContents.overallPerformance <= '40')?'red':(babyCupboardSepContents.overallPerformance > '40' && babyCupboardSepContents.overallPerformance <= '60')?'orange':(babyCupboardSepContents.overallPerformance > '60' && babyCupboardSepContents.overallPerformance < '90')?'yellow-7':(babyCupboardSepContents.overallPerformance >= '90' && babyCupboardSepContents.overallPerformance < '120')?'green':(babyCupboardSepContents.overallPerformance >= '120'?'blue':'grey')"

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
                        :color="(gikSepContents.overallPerformance == null)?'grey':(gikSepContents.overallPerformance >= '0.0001' && gikSepContents.overallPerformance <= '40')?'red':(gikSepContents.overallPerformance > '40' && gikSepContents.overallPerformance <= '60')?'orange':(gikSepContents.overallPerformance > '60' && gikSepContents.overallPerformance < '90')?'yellow-7':(gikSepContents.overallPerformance >= '90' && gikSepContents.overallPerformance < '120')?'green':(gikSepContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(charity13SepContents.overallPerformance == null)?'grey':(charity13SepContents.overallPerformance >= '0.0001' && charity13SepContents.overallPerformance <= '40')?'red':(charity13SepContents.overallPerformance > '40' && charity13SepContents.overallPerformance <= '60')?'orange':(charity13SepContents.overallPerformance > '60' && charity13SepContents.overallPerformance < '90')?'yellow-7':(charity13SepContents.overallPerformance >= '90' && charity13SepContents.overallPerformance < '120')?'green':(charity13SepContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(entrepreneurshipSepContents.overallPerformance == null)?'grey':(entrepreneurshipSepContents.overallPerformance >= '0.0001' && entrepreneurshipSepContents.overallPerformance <= '40')?'red':(entrepreneurshipSepContents.overallPerformance > '40' && entrepreneurshipSepContents.overallPerformance <= '60')?'orange':(entrepreneurshipSepContents.overallPerformance > '60' && entrepreneurshipSepContents.overallPerformance < '90')?'yellow-7':(entrepreneurshipSepContents.overallPerformance >= '90' && entrepreneurshipSepContents.overallPerformance < '120')?'green':(entrepreneurshipSepContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(employmentSkillsSepContents.overallPerformance == null)?'grey':(employmentSkillsSepContents.overallPerformance >= '0.0001' && employmentSkillsSepContents.overallPerformance <= '40')?'red':(employmentSkillsSepContents.overallPerformance > '40' && employmentSkillsSepContents.overallPerformance <= '60')?'orange':(employmentSkillsSepContents.overallPerformance > '60' && employmentSkillsSepContents.overallPerformance < '90')?'yellow-7':(employmentSkillsSepContents.overallPerformance >= '90' && employmentSkillsSepContents.overallPerformance < '120')?'green':(employmentSkillsSepContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(socialHarvestSepContents.overallPerformance == null)?'grey':(socialHarvestSepContents.overallPerformance >= '0.0001' && socialHarvestSepContents.overallPerformance <= '40')?'red':(socialHarvestSepContents.overallPerformance > '40' && socialHarvestSepContents.overallPerformance <= '60')?'orange':(socialHarvestSepContents.overallPerformance > '60' && socialHarvestSepContents.overallPerformance < '90')?'yellow-7':(socialHarvestSepContents.overallPerformance >= '90' && socialHarvestSepContents.overallPerformance < '120')?'green':(socialHarvestSepContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(marketMobileSepContents.overallPerformance == null)?'grey':(marketMobileSepContents.overallPerformance >= '0.0001' && marketMobileSepContents.overallPerformance <= '40')?'red':(marketMobileSepContents.overallPerformance > '40' && marketMobileSepContents.overallPerformance <= '60')?'orange':(marketMobileSepContents.overallPerformance > '60' && marketMobileSepContents.overallPerformance < '90')?'yellow-7':(marketMobileSepContents.overallPerformance >= '90' && marketMobileSepContents.overallPerformance < '120')?'green':(marketMobileSepContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(clothespinSepContents.overallPerformance == null)?'grey':(clothespinSepContents.overallPerformance >= '0.0001' && clothespinSepContents.overallPerformance <= '40')?'red':(clothespinSepContents.overallPerformance > '40' && clothespinSepContents.overallPerformance <= '60')?'orange':(clothespinSepContents.overallPerformance > '60' && clothespinSepContents.overallPerformance < '90')?'yellow-7':(clothespinSepContents.overallPerformance >= '90' && clothespinSepContents.overallPerformance < '120')?'green':(clothespinSepContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(gfbSepContents.overallPerformance == null)?'grey':(gfbSepContents.overallPerformance >= '0.0001' && gfbSepContents.overallPerformance <= '40')?'red':(gfbSepContents.overallPerformance > '40' && gfbSepContents.overallPerformance <= '60')?'orange':(gfbSepContents.overallPerformance > '60' && gfbSepContents.overallPerformance < '90')?'yellow-7':(gfbSepContents.overallPerformance >= '90' && gfbSepContents.overallPerformance < '120')?'green':(gfbSepContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(overbrookSPSepContents.overallPerformance == null)?'grey':(overbrookSPSepContents.overallPerformance >= '0.0001' && overbrookSPSepContents.overallPerformance <= '40')?'red':(overbrookSPSepContents.overallPerformance > '40' && overbrookSPSepContents.overallPerformance <= '60')?'orange':(overbrookSPSepContents.overallPerformance > '60' && overbrookSPSepContents.overallPerformance < '90')?'yellow-7':(overbrookSPSepContents.overallPerformance >= '90' && overbrookSPSepContents.overallPerformance < '120')?'green':(overbrookSPSepContents.overallPerformance >= '120'?'blue':'grey')"
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
                            :color="(collectiveKitchenSepContents.overallPerformance == null)?'grey':(collectiveKitchenSepContents.overallPerformance >= '0.0001' && collectiveKitchenSepContents.overallPerformance <= '40')?'red':(collectiveKitchenSepContents.overallPerformance > '40' && collectiveKitchenSepContents.overallPerformance <= '60')?'orange':(collectiveKitchenSepContents.overallPerformance > '60' && collectiveKitchenSepContents.overallPerformance < '90')?'yellow-7':(collectiveKitchenSepContents.overallPerformance >= '90' && collectiveKitchenSepContents.overallPerformance < '120')?'green':(collectiveKitchenSepContents.overallPerformance >= '120'?'blue':'grey')"
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
                            :color="(communityMealsSepContents.overallPerformance == null)?'grey':(communityMealsSepContents.overallPerformance >= '0.0001' && communityMealsSepContents.overallPerformance <= '40')?'red':(communityMealsSepContents.overallPerformance > '40' && communityMealsSepContents.overallPerformance <= '60')?'orange':(communityMealsSepContents.overallPerformance > '60' && communityMealsSepContents.overallPerformance < '90')?'yellow-7':(communityMealsSepContents.overallPerformance >= '90' && communityMealsSepContents.overallPerformance < '120')?'green':(communityMealsSepContents.overallPerformance >= '120'?'blue':'grey')"
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
                            :color="(pinsSepContents.overallPerformance == null)?'grey':(pinsSepContents.overallPerformance >= '0.0001' && pinsSepContents.overallPerformance <= '40')?'red':(pinsSepContents.overallPerformance > '40' && pinsSepContents.overallPerformance <= '60')?'orange':(pinsSepContents.overallPerformance > '60' && pinsSepContents.overallPerformance < '90')?'yellow-7':(pinsSepContents.overallPerformance >= '90' && pinsSepContents.overallPerformance < '120')?'green':(pinsSepContents.overallPerformance >= '120'?'blue':'grey')"
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
                        :color="(yesICanSepContents.overallPerformance == null)?'grey':(yesICanSepContents.overallPerformance >= '0.0001' && yesICanSepContents.overallPerformance <= '40')?'red':(yesICanSepContents.overallPerformance > '40' && yesICanSepContents.overallPerformance <= '60')?'orange':(yesICanSepContents.overallPerformance > '60' && yesICanSepContents.overallPerformance < '90')?'yellow-7':(yesICanSepContents.overallPerformance >= '90' && yesICanSepContents.overallPerformance < '120')?'green':(yesICanSepContents.overallPerformance >= '120'?'blue':'grey')"
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
                            :color="(crisisInterventionSepContents.overallPerformance == null)?'grey':(crisisInterventionSepContents.overallPerformance >= '0.0001' && crisisInterventionSepContents.overallPerformance <= '40')?'red':(crisisInterventionSepContents.overallPerformance > '40' && crisisInterventionSepContents.overallPerformance <= '60')?'orange':(crisisInterventionSepContents.overallPerformance > '60' && crisisInterventionSepContents.overallPerformance < '90')?'yellow-7':(crisisInterventionSepContents.overallPerformance >= '90' && crisisInterventionSepContents.overallPerformance < '120')?'green':(crisisInterventionSepContents.overallPerformance >= '120'?'blue':'grey')"
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
                            :color="(youthPREducationSepContents.overallPerformance == null)?'grey':(youthPREducationSepContents.overallPerformance >= '0.0001' && youthPREducationSepContents.overallPerformance <= '40')?'red':(youthPREducationSepContents.overallPerformance > '40' && youthPREducationSepContents.overallPerformance <= '60')?'orange':(youthPREducationSepContents.overallPerformance > '60' && youthPREducationSepContents.overallPerformance < '90')?'yellow-7':(youthPREducationSepContents.overallPerformance >= '90' && youthPREducationSepContents.overallPerformance < '120')?'green':(youthPREducationSepContents.overallPerformance >= '120'?'blue':'grey')"
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
                            :color="(youthPRSportSepContents.overallPerformance == null)?'grey':(youthPRSportSepContents.overallPerformance >= '0.0001' && youthPRSportSepContents.overallPerformance <= '40')?'red':(youthPRSportSepContents.overallPerformance > '40' && youthPRSportSepContents.overallPerformance <= '60')?'orange':(youthPRSportSepContents.overallPerformance > '60' && youthPRSportSepContents.overallPerformance < '90')?'yellow-7':(youthPRSportSepContents.overallPerformance >= '90' && youthPRSportSepContents.overallPerformance < '120')?'green':(youthPRSportSepContents.overallPerformance >= '120'?'blue':'grey')"
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
                            :color="(youthPRViolinSepContents.overallPerformance == null)?'grey':(youthPRViolinSepContents.overallPerformance >= '0.0001' && youthPRViolinSepContents.overallPerformance <= '40')?'red':(youthPRViolinSepContents.overallPerformance > '40' && youthPRViolinSepContents.overallPerformance <= '60')?'orange':(youthPRViolinSepContents.overallPerformance > '60' && youthPRViolinSepContents.overallPerformance < '90')?'yellow-7':(youthPRViolinSepContents.overallPerformance >= '90' && youthPRViolinSepContents.overallPerformance < '120')?'green':(youthPRViolinSepContents.overallPerformance >= '120'?'blue':'grey')"
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
                            :color="(communityDevelopmentSepContents.overallPerformance == null)?'grey':(communityDevelopmentSepContents.overallPerformance >= '0.0001' && communityDevelopmentSepContents.overallPerformance <= '40')?'red':(communityDevelopmentSepContents.overallPerformance > '40' && communityDevelopmentSepContents.overallPerformance <= '60')?'orange':(communityDevelopmentSepContents.overallPerformance > '60' && communityDevelopmentSepContents.overallPerformance < '90')?'yellow-7':(communityDevelopmentSepContents.overallPerformance >= '90' && communityDevelopmentSepContents.overallPerformance < '120')?'green':(communityDevelopmentSepContents.overallPerformance >= '120'?'blue':'grey')"
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
                      data: [{value: this.generalDashboardSepContents.mainOverallPerformance}],
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
                      data: [{value: this.generalDashboardSepContents.budgetUsage}],
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
                                {value: this.generalDashboardSepContents.cumulativeexpAdmin, name: 'Admin', selected: false},
                                {value: this.generalDashboardSepContents.cumulativeexpPRfftnc, name: 'PR / FFTNC', selected: false},
                                {value: this.generalDashboardSepContents.cumulativeexpIncubator, name: 'Incubator', selected: false},
                                {value: this.generalDashboardSepContents.cumulativeexpAP, name: 'A-P', selected: false},
                                {value: this.generalDashboardSepContents.cumulativeexpGFB, name: 'GFB', selected: false},
                                {value: this.generalDashboardSepContents.cumulativeexpGIK, name: 'GIK', selected: false},
                                {value: this.generalDashboardSepContents.cumulativeexpSH, name: 'SH', selected: false},
                                {value: this.generalDashboardSepContents.cumulativeexpCYFlactation, name: 'CYF / Lactation', selected: false},
                                {value: this.generalDashboardSepContents.cumulativeexpCPO, name: 'CPO', selected: false},
                                {value: this.generalDashboardSepContents.cumulativeexpSeniorsProject, name: 'Seniors Project', selected: false},
                                {value: this.generalDashboardSepContents.cumulativeexpCSDmcConnell, name: 'CSD / McConnell', selected: false},
                                {value: this.generalDashboardSepContents.cumulativeexpOthers, name: 'Others', selected: false}
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
                                {value: this.generalDashboardSepContents.expAdmin, name: 'Admin', selected: false},
                                {value: this.generalDashboardSepContents.expPRfftnc, name: 'PR / FFTNC', selected: false},
                                {value: this.generalDashboardSepContents.expIncubator, name: 'Incubator', selected: false},
                                {value: this.generalDashboardSepContents.expAP, name: 'A-P', selected: false},
                                {value: this.generalDashboardSepContents.expGFB, name: 'GFB', selected: false},
                                {value: this.generalDashboardSepContents.expGIK, name: 'GIK', selected: false},
                                {value: this.generalDashboardSepContents.expSH, name: 'SH', selected: false},
                                {value: this.generalDashboardSepContents.expCYFlactation, name: 'CYF / Lactation', selected: false},
                                {value: this.generalDashboardSepContents.expCPO, name: 'CPO', selected: false},
                                {value: this.generalDashboardSepContents.expSeniorsProject, name: 'Seniors Project', selected: false},
                                {value: this.generalDashboardSepContents.expCSDmcConnell, name: 'CSD / McConnell', selected: false},
                                {value: this.generalDashboardSepContents.expOthers, name: 'Others', selected: false}
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
                        this.cumulativeBudgetUsageSep();
                        this.totalCumulativeExpenseSep();

                        this.foodbankSep();
                    } else {
                        // doc.data() will be undefined in this case
                        console.log("No such document! - generalDashboard");
                    }
                }).catch((error) => {
                    console.log("Error getting document:", error);
                });
            },  
                foodbankSep(){
                    //    FOODBANK | MAY
                    var docfoodbankAprRef = db.collection("foodbank").doc("september");

                    docfoodbankAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.foodbankSepContents = doc.data();
                            this.foodbankSepOverallPerformance();

                            this.babyCupboardSep();

                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - foodbank");
                        }

                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                babyCupboardSep(){
                                        //    BABY CUPBOARD | MAY
                    var docbabyCupboardAprRef = db.collection("babyCupboard").doc("september");

                    docbabyCupboardAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.babyCupboardSepContents = doc.data();
                            this.babyCupboardSepOverallPerformance();

                            this.gikSep();
                            

                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - babyCupboard");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                gikSep(){
                    //    GIFTS IN KIND | MAY
                    var docgikAprRef = db.collection("gik").doc("september");

                    docgikAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.gikSepContents = doc.data();
                            this.gikSepOverallPerformance();
                            
                            this.charity13Sep();
                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - gik");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });

                },
                charity13Sep(){
                    //    charITy13 | MAY
                    var docCharity13AprRef = db.collection("charity13").doc("september");

                    docCharity13AprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.charity13SepContents = doc.data();
                            this.charity13SepOverallPerformance();
                            
                            this.entrepreneurshipSep();
                            
                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - charity13");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });

                },entrepreneurshipSep(){
                    //    ENTREPRENEURSHIP | MAY
                    var docentrepreneurshipAprRef = db.collection("entrepreneurship").doc("september");

                    docentrepreneurshipAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.entrepreneurshipSepContents = doc.data();
                            this.entrepreneurshipSepOverallPerformance();

                            this.employmentSkillsSep();

                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - entrepreneurship");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                employmentSkillsSep(){
                    //    EMPLOYEMENT SKILLS | MAY
                    var docemploymentSkillsAprRef = db.collection("employmentSkills").doc("september");

                    docemploymentSkillsAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.employmentSkillsSepContents = doc.data();
                            this.employmentSkillsSepOverallPerformance();

                            this.socialHarvestSep();

                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - employmentSkills");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                socialHarvestSep(){
                    //    SOCIAL HARVEST | MAY
                    var docsocialHarvestAprRef = db.collection("socialHarvest").doc("september");

                    docsocialHarvestAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.socialHarvestSepContents = doc.data();
                            this.socialHarvestSepOverallPerformance();

                            this.marketMobileSep();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - socialHarvest");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });

                },
                marketMobileSep(){
                    //    MARKET MOBILE | MAY
                    var docmarketMobileAprRef = db.collection("marketMobile").doc("september");

                    docmarketMobileAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.marketMobileSepContents = doc.data();
                            this.marketMobileSepOverallPerformance();

                            this.clothespinSep();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - marketMobile");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });

                },
                clothespinSep(){
                    //    CLOTHESPIN | MAY
                    var docclothespinAprRef = db.collection("clothespin").doc("september");

                    docclothespinAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.clothespinSepContents = doc.data();
                            this.clothespinSepOverallPerformance();

                            this.gfbSep();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - clothespin");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });

                },
                gfbSep(){
                    //    GOOD FOOD BOX | MAY
                    var docgfbAprRef = db.collection("gfb").doc("september");

                    docgfbAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.gfbSepContents = doc.data();
                            this.gfbSepOverallPerformance();
                            
                            this.overbrookSPSep();

                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - gfb");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });


                },
                overbrookSPSep(){
                    //    Overbrook SP | MAY
                    var docoverbrookSPAprRef = db.collection("overbrookSP").doc("september");

                    docoverbrookSPAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.overbrookSPSepContents = doc.data();
                            this.overbrookSPSepOverallPerformance();

                            this.collectiveKitchenSep();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - overbrookSP");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });

                },
                collectiveKitchenSep(){
                    //    COLLECTIVE KITCHEN | MAY
                    var doccollectiveKitchenAprRef = db.collection("collectiveKitchen").doc("september");

                    doccollectiveKitchenAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.collectiveKitchenSepContents = doc.data();
                            this.collectiveKitchenSepOverallPerformance(); 

                            this.communityMealsSep();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - collectiveKitchen");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });

                },
                communityMealsSep(){
                    //        COMMUNITY MEALS | MAY
                    var doccommunityMealsAprRef = db.collection("communityMeals").doc("september");

                    doccommunityMealsAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.communityMealsSepContents = doc.data();
                            this.communityMealsSepOverallPerformance();

                            this.pinsSep();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - communityMeals");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });

                },
                pinsSep(){
                    //    PINS | MAY
                    var docpinsAprRef = db.collection("pins").doc("september");

                    docpinsAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.pinsSepContents = doc.data();
                            this.pinsSepOverallPerformance();

                            this.yesICanSep();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - pins");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                yesICanSep(){
                    //    Yes I Can | MAY
                    var docyesICanAprRef = db.collection("yesICan").doc("september");

                    docyesICanAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.yesICanSepContents = doc.data();
                            this.yesICanSepOverallPerformance();

                            this.crisisInterventionSep();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - yesICan");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                crisisInterventionSep(){
                    //    CRISIS INTERVENTION | MAY
                    var doccrisisInterventionAprRef = db.collection("crisisIntervention").doc("september");

                    doccrisisInterventionAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.crisisInterventionSepContents = doc.data();
                            this.crisisInterventionSepOverallPerformance();

                            this.youthPREducationSep();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - crisisIntervention");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                youthPREducationSep(){
                    //    YouthPR Education | MAY
                    var docyouthPREducationAprRef = db.collection("youthPREducation").doc("september");

                    docyouthPREducationAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.youthPREducationSepContents = doc.data();
                            this.youthPREducationSepOverallPerformance();

                            this.youthPRSportSep();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - youthPREducation");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                youthPRSportSep(){
                    //    YouthPR Sport | MAY
                    var docyouthPRSportAprRef = db.collection("youthPRSport").doc("september");

                    docyouthPRSportAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.youthPRSportSepContents = doc.data();
                            this.youthPRSportSepOverallPerformance();

                            this.youthPRViolinSep();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - youthPRSport");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                youthPRViolinSep(){
                    //    YouthPR Violin | MAY
                    var docyouthPRViolinAprRef = db.collection("youthPRViolin").doc("september");

                    docyouthPRViolinAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.youthPRViolinSepContents = doc.data();
                            this.youthPRViolinSepOverallPerformance();

                            this.communityDevelopmentSep();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - youthPRViolin");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },
                communityDevelopmentSep(){
                    //    COMMUNITY DEVELOPMENT | MAY
                    var doccommunityDevelopmentAprRef = db.collection("communityDevelopment").doc("september");

                    doccommunityDevelopmentAprRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            this.communityDevelopmentSepContents = doc.data();
                            this.communityDevelopmentSepOverallPerformance();
                            
                            console.log("denemem: "+ this.foodbankSepContents.kpi1 + " baby: " + this.babyCupboardSepContents.kpi1 + 
                            " GIK: " + this.gikSepContents.kpi1 + " CD: " + this.youthPRViolinSepContents.kpi1);
                            this.generalSepOverallPerformance();


                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document! - communityDevelopment");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                },

            gikSepOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = ((getRealValue(this.gikSepContents.kpi1)*2) + getRealValue(this.gikSepContents.kpi2) + getRealValue(this.gikSepContents.kpi3) + (getRealValue(this.gikSepContents.kpi4)*2))/6;
            this.gikSepContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 29.5 * 100;
            console.log("GIK Overall performance = " + this.gikSepContents.overallPerformance);             
            return this.gikSepContents.overallPerformance;
            },
            foodbankSepOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = ((getRealValue(this.foodbankSepContents.kpi1)*2) + getRealValue(this.foodbankSepContents.kpi2) + getRealValue(this.foodbankSepContents.kpi3) + (getRealValue(this.foodbankSepContents.kpi4)*2) + getRealValue(this.foodbankSepContents.kpi5) + getRealValue(this.foodbankSepContents.kpi6))/8;
            this.foodbankSepContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 287.09375 * 100;
            console.log("Foodbank Overall performance = " + this.foodbankSepContents.overallPerformance); 
            return this.foodbankSepContents.overallPerformance;
            },
            babyCupboardSepOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = ((getRealValue(this.babyCupboardSepContents.kpi1)*2) + getRealValue(this.babyCupboardSepContents.kpi2) + getRealValue(this.babyCupboardSepContents.kpi3) + (getRealValue(this.babyCupboardSepContents.kpi4)*2))/6;
            this.babyCupboardSepContents.overallPerformance = (getRealValue(baseOverallPerformanceGIK) / 38.125) * 100;
            console.log("Baby Cupboard Overall performance = " + this.babyCupboardSepContents.overallPerformance); 
            return this.babyCupboardSepContents.overallPerformance;
            },
            charity13SepOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = ((getRealValue(this.charity13SepContents.kpi1)*2) + getRealValue(this.charity13SepContents.kpi2) + getRealValue(this.charity13SepContents.kpi3) + getRealValue(this.charity13SepContents.kpi4) + (getRealValue(this.charity13SepContents.kpi5)*2))/7;
            this.charity13SepContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 2.19047619 * 100;
            console.log("charITy13 Overall performance = " + this.charity13SepContents.overallPerformance); 
            return this.charity13SepContents.overallPerformance;
            },
            entrepreneurshipSepOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.entrepreneurshipSepContents.kpi1) + getRealValue(this.entrepreneurshipSepContents.kpi2) + getRealValue(this.entrepreneurshipSepContents.kpi3) + getRealValue(this.entrepreneurshipSepContents.kpi4))/4;
            this.entrepreneurshipSepContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 1217.967792 * 100;
            console.log("entrepreneurship Overall performance = " + this.entrepreneurshipSepContents.overallPerformance); 
            return this.entrepreneurshipSepContents.overallPerformance;
            },
            employmentSkillsSepOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.employmentSkillsSepContents.kpi1) + getRealValue(this.employmentSkillsSepContents.kpi2) + getRealValue(this.employmentSkillsSepContents.kpi3) + getRealValue(this.employmentSkillsSepContents.kpi4))/4;
            this.employmentSkillsSepContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 45.83333333 * 100;
            console.log("employmentSkills Overall performance = " + this.employmentSkillsSepContents.overallPerformance); 
            return this.employmentSkillsSepContents.overallPerformance;
            },
            socialHarvestSepOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.socialHarvestSepContents.kpi1) + getRealValue(this.socialHarvestSepContents.kpi2) + getRealValue(this.socialHarvestSepContents.kpi3) + getRealValue(this.socialHarvestSepContents.kpi4) + getRealValue(this.socialHarvestSepContents.kpi5))/5;
            this.socialHarvestSepContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 29.7409 * 100;
            console.log("socialHarvest Overall performance = " + this.socialHarvestSepContents.overallPerformance); 
            return this.socialHarvestSepContents.overallPerformance;
            },
            marketMobileSepOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.marketMobileSepContents.kpi1) + getRealValue(this.marketMobileSepContents.kpi2) + (getRealValue(this.marketMobileSepContents.kpi3)*2) + (getRealValue(this.marketMobileSepContents.kpi4)*2))/6;
            this.marketMobileSepContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 149.9444444 * 100;
            console.log("marketMobile Overall performance = " + this.marketMobileSepContents.overallPerformance); 
            return this.marketMobileSepContents.overallPerformance;
            },
            clothespinSepOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.clothespinSepContents.kpi1) + getRealValue(this.clothespinSepContents.kpi2) + getRealValue(this.clothespinSepContents.kpi3))/3;
            this.clothespinSepContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 144 * 100;
            console.log("clothespin Overall performance = " + this.clothespinSepContents.overallPerformance); 
            return this.clothespinSepContents.overallPerformance;
            },
            gfbSepOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.gfbSepContents.kpi1) + getRealValue(this.gfbSepContents.kpi2) + getRealValue(this.gfbSepContents.kpi3))/3;
            this.gfbSepContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 274.1111111 * 100;
            console.log("gfb Overall performance = " + this.gfbSepContents.overallPerformance); 
            return this.gfbSepContents.overallPerformance;
            },
            overbrookSPSepOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.overbrookSPSepContents.kpi1) + getRealValue(this.overbrookSPSepContents.kpi2))/2;
            this.overbrookSPSepContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 101.75 * 100;
            console.log("overbrookSP Overall performance = " + this.overbrookSPSepContents.overallPerformance); 
            return this.overbrookSPSepContents.overallPerformance;
            },
            collectiveKitchenSepOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.collectiveKitchenSepContents.kpi1) + getRealValue(this.collectiveKitchenSepContents.kpi2) + getRealValue(this.collectiveKitchenSepContents.kpi3) + getRealValue(this.collectiveKitchenSepContents.kpi4))/4;
            this.collectiveKitchenSepContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 5.75 * 100;
            console.log("collectiveKitchen Overall performance = " + this.collectiveKitchenSepContents.overallPerformance); 
            return this.collectiveKitchenSepContents.overallPerformance;
            },
            communityMealsSepOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.communityMealsSepContents.kpi1) + getRealValue(this.communityMealsSepContents.kpi2) + getRealValue(this.communityMealsSepContents.kpi3) + (getRealValue(this.communityMealsSepContents.kpi4)*2))/5;
            this.communityMealsSepContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 290.2666667 * 100;
            console.log("communityMeals Overall performance = " + this.communityMealsSepContents.overallPerformance); 
            return this.communityMealsSepContents.overallPerformance;
            },
            pinsSepOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.pinsSepContents.kpi1) + getRealValue(this.pinsSepContents.kpi2) + getRealValue(this.pinsSepContents.kpi3))/3;
            this.pinsSepContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 10.33333333 * 100;
            console.log("pins Overall performance = " + this.pinsSepContents.overallPerformance); 
            return this.pinsSepContents.overallPerformance;
            },
            youthPREducationSepOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.youthPREducationSepContents.kpi1) + getRealValue(this.youthPREducationSepContents.kpi2) + getRealValue(this.youthPREducationSepContents.kpi3) + getRealValue(this.youthPREducationSepContents.kpi4) + (getRealValue(this.youthPREducationSepContents.kpi5)*2))/6;
            this.youthPREducationSepContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 13 * 100;
            console.log("youthPREducation Overall performance = " + this.youthPREducationSepContents.overallPerformance); 
            return this.youthPREducationSepContents.overallPerformance;
            },
            youthPRSportSepOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.youthPRSportSepContents.kpi1) + getRealValue(this.youthPRSportSepContents.kpi2) + getRealValue(this.youthPRSportSepContents.kpi3) + getRealValue(this.youthPRSportSepContents.kpi4) + (getRealValue(this.youthPRSportSepContents.kpi5)*2))/6;
            this.youthPRSportSepContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 1.5 * 100;
            console.log("youthPRSport Overall performance = " + this.youthPRSportSepContents.overallPerformance); 
            return this.youthPRSportSepContents.overallPerformance;
            },
            youthPRViolinSepOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.youthPRViolinSepContents.kpi1) + getRealValue(this.youthPRViolinSepContents.kpi2) + getRealValue(this.youthPRViolinSepContents.kpi3) + getRealValue(this.youthPRViolinSepContents.kpi4) + (getRealValue(this.youthPRViolinSepContents.kpi5)*2))/6;
            this.youthPRViolinSepContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 5.388888889 * 100;
            console.log("youthPRViolin Overall performance = " + this.youthPRViolinSepContents.overallPerformance); 
            return this.youthPRViolinSepContents.overallPerformance;
            },
            yesICanSepOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.yesICanSepContents.kpi1) + getRealValue(this.yesICanSepContents.kpi2) + getRealValue(this.yesICanSepContents.kpi3))/3;
            this.yesICanSepContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 11.33333333 * 100;
            console.log("yesICan Overall performance = " + this.yesICanSepContents.overallPerformance); 
            return this.yesICanSepContents.overallPerformance;
            },
            crisisInterventionSepOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.crisisInterventionSepContents.kpi1) + getRealValue(this.crisisInterventionSepContents.kpi2))/2;
            this.crisisInterventionSepContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 104 * 100;
            console.log("crisisIntervention Overall performance = " + this.crisisInterventionSepContents.overallPerformance); 
            return this.crisisInterventionSepContents.overallPerformance;
            },
            communityDevelopmentSepOverallPerformance(){
            const getRealValue = (val) => +val || val;
            var baseOverallPerformanceGIK = (getRealValue(this.communityDevelopmentSepContents.kpi1) + getRealValue(this.communityDevelopmentSepContents.kpi2) + getRealValue(this.communityDevelopmentSepContents.kpi3))/3;
            this.communityDevelopmentSepContents.overallPerformance = getRealValue(baseOverallPerformanceGIK) / 77.22222222 * 100;
            console.log("communityDevelopment Overall performance = " + this.communityDevelopmentSepContents.overallPerformance); 
            return this.communityDevelopmentSepContents.overallPerformance;
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
            cumulativeBudgetUsageSep(){
            const getRealValue = (val) => +val || val;
            return this.generalDashboardSepContents.budgetUsage = (((getRealValue(this.generalDashboardSepContents.expenses) + getRealValue(this.generalDashboardAugContents.expenses) + getRealValue(this.generalDashboardJulContents.expenses) + getRealValue(this.generalDashboardJunContents.expenses) + getRealValue(this.generalDashboardMayContents.expenses) + getRealValue(this.generalDashboardAprContents.expenses) + getRealValue(this.generalDashboardMarContents.expenses) + getRealValue(this.generalDashboardFebContents.expenses) + getRealValue(this.generalDashboardJanContents.expenses)) / getRealValue(this.generalDashboardAprContents.actualBudget))*100).toFixed(2)
            },
            totalCumulativeExpenseSep(){
            const getRealValue = (val) => +val || val;
            this.generalDashboardSepContents.cumulativeexpAdmin = (getRealValue(this.generalDashboardSepContents.expAdmin) + getRealValue(this.generalDashboardAugContents.expAdmin) + getRealValue(this.generalDashboardJulContents.expAdmin) + getRealValue(this.generalDashboardJunContents.expAdmin) + getRealValue(this.generalDashboardMayContents.expAdmin) + getRealValue(this.generalDashboardAprContents.expAdmin) + getRealValue(this.generalDashboardMarContents.expAdmin) + getRealValue(this.generalDashboardFebContents.expAdmin) + getRealValue(this.generalDashboardJanContents.expAdmin)).toFixed(2)
            this.generalDashboardSepContents.cumulativeexpPRfftnc = (getRealValue(this.generalDashboardSepContents.expPRfftnc) + getRealValue(this.generalDashboardAugContents.expPRfftnc) + getRealValue(this.generalDashboardJulContents.expPRfftnc) + getRealValue(this.generalDashboardJunContents.expPRfftnc) + getRealValue(this.generalDashboardMayContents.expPRfftnc) + getRealValue(this.generalDashboardAprContents.expPRfftnc) + getRealValue(this.generalDashboardMarContents.expPRfftnc) + getRealValue(this.generalDashboardFebContents.expPRfftnc) + getRealValue(this.generalDashboardJanContents.expPRfftnc)).toFixed(2)
            this.generalDashboardSepContents.cumulativeexpIncubator = (getRealValue(this.generalDashboardSepContents.expIncubator) + getRealValue(this.generalDashboardAugContents.expIncubator) + getRealValue(this.generalDashboardJulContents.expIncubator) + getRealValue(this.generalDashboardJunContents.expIncubator) + getRealValue(this.generalDashboardMayContents.expIncubator) + getRealValue(this.generalDashboardAprContents.expIncubator) + getRealValue(this.generalDashboardMarContents.expIncubator) + getRealValue(this.generalDashboardFebContents.expIncubator) + getRealValue(this.generalDashboardJanContents.expIncubator)).toFixed(2)
            this.generalDashboardSepContents.cumulativeexpAP = (getRealValue(this.generalDashboardSepContents.expAP) + getRealValue(this.generalDashboardAugContents.expAP) + getRealValue(this.generalDashboardJulContents.expAP) + getRealValue(this.generalDashboardJunContents.expAP) + getRealValue(this.generalDashboardMayContents.expAP) + getRealValue(this.generalDashboardAprContents.expAP) + getRealValue(this.generalDashboardMarContents.expAP) + getRealValue(this.generalDashboardFebContents.expAP) + getRealValue(this.generalDashboardJanContents.expAP)).toFixed(2)
            this.generalDashboardSepContents.cumulativeexpGFB = (getRealValue(this.generalDashboardSepContents.expGFB) + getRealValue(this.generalDashboardAugContents.expGFB) + getRealValue(this.generalDashboardJulContents.expGFB) + getRealValue(this.generalDashboardJunContents.expGFB) + getRealValue(this.generalDashboardMayContents.expGFB) + getRealValue(this.generalDashboardAprContents.expGFB) + getRealValue(this.generalDashboardMarContents.expGFB) + getRealValue(this.generalDashboardFebContents.expGFB) + getRealValue(this.generalDashboardJanContents.expGFB)).toFixed(2)
            this.generalDashboardSepContents.cumulativeexpGIK = (getRealValue(this.generalDashboardSepContents.expGIK) + getRealValue(this.generalDashboardAugContents.expGIK) + getRealValue(this.generalDashboardJulContents.expGIK) + getRealValue(this.generalDashboardJunContents.expGIK) + getRealValue(this.generalDashboardMayContents.expGIK) + getRealValue(this.generalDashboardAprContents.expGIK) + getRealValue(this.generalDashboardMarContents.expGIK) + getRealValue(this.generalDashboardFebContents.expGIK) + getRealValue(this.generalDashboardJanContents.expGIK)).toFixed(2)
            this.generalDashboardSepContents.cumulativeexpSH = (getRealValue(this.generalDashboardSepContents.expSH) + getRealValue(this.generalDashboardAugContents.expSH) + getRealValue(this.generalDashboardJulContents.expSH) + getRealValue(this.generalDashboardJunContents.expSH) + getRealValue(this.generalDashboardMayContents.expSH) + getRealValue(this.generalDashboardAprContents.expSH) + getRealValue(this.generalDashboardMarContents.expSH) + getRealValue(this.generalDashboardFebContents.expSH) + getRealValue(this.generalDashboardJanContents.expSH)).toFixed(2)
            this.generalDashboardSepContents.cumulativeexpCYFlactation = (getRealValue(this.generalDashboardSepContents.expCYFlactation) + getRealValue(this.generalDashboardAugContents.expCYFlactation) + getRealValue(this.generalDashboardJulContents.expCYFlactation) + getRealValue(this.generalDashboardJunContents.expCYFlactation) + getRealValue(this.generalDashboardMayContents.expCYFlactation) + getRealValue(this.generalDashboardAprContents.expCYFlactation) + getRealValue(this.generalDashboardMarContents.expCYFlactation) + getRealValue(this.generalDashboardFebContents.expCYFlactation) + getRealValue(this.generalDashboardJanContents.expCYFlactation)).toFixed(2)
            this.generalDashboardSepContents.cumulativeexpCPO = (getRealValue(this.generalDashboardSepContents.expCPO) + getRealValue(this.generalDashboardAugContents.expCPO) + getRealValue(this.generalDashboardJulContents.expCPO) + getRealValue(this.generalDashboardJunContents.expCPO) + getRealValue(this.generalDashboardMayContents.expCPO) + getRealValue(this.generalDashboardAprContents.expCPO) + getRealValue(this.generalDashboardMarContents.expCPO) + getRealValue(this.generalDashboardFebContents.expCPO) + getRealValue(this.generalDashboardJanContents.expCPO)).toFixed(2)
            this.generalDashboardSepContents.cumulativeexpSeniorsProject = (getRealValue(this.generalDashboardSepContents.expSeniorsProject) + getRealValue(this.generalDashboardAugContents.expSeniorsProject) + getRealValue(this.generalDashboardJulContents.expSeniorsProject) + getRealValue(this.generalDashboardJunContents.expSeniorsProject) + getRealValue(this.generalDashboardMayContents.expSeniorsProject) + getRealValue(this.generalDashboardAprContents.expSeniorsProject) + getRealValue(this.generalDashboardMarContents.expSeniorsProject) + getRealValue(this.generalDashboardFebContents.expSeniorsProject) + getRealValue(this.generalDashboardJanContents.expSeniorsProject)).toFixed(2)
            this.generalDashboardSepContents.cumulativeexpCSDmcConnell = (getRealValue(this.generalDashboardSepContents.expCSDmcConnell) + getRealValue(this.generalDashboardAugContents.expCSDmcConnell) + getRealValue(this.generalDashboardJulContents.expCSDmcConnell) + getRealValue(this.generalDashboardJunContents.expCSDmcConnell) + getRealValue(this.generalDashboardMayContents.expCSDmcConnell) + getRealValue(this.generalDashboardAprContents.expCSDmcConnell) + getRealValue(this.generalDashboardMarContents.expCSDmcConnell) + getRealValue(this.generalDashboardFebContents.expCSDmcConnell) + getRealValue(this.generalDashboardJanContents.expCSDmcConnell)).toFixed(2)
            this.generalDashboardSepContents.cumulativeexpOthers = (getRealValue(this.generalDashboardSepContents.expOthers) + getRealValue(this.generalDashboardAugContents.expOthers) + getRealValue(this.generalDashboardJulContents.expOthers) + getRealValue(this.generalDashboardJunContents.expOthers) + getRealValue(this.generalDashboardMayContents.expOthers) + getRealValue(this.generalDashboardAprContents.expOthers) + getRealValue(this.generalDashboardMarContents.expOthers) + getRealValue(this.generalDashboardFebContents.expOthers) + getRealValue(this.generalDashboardJanContents.expOthers)).toFixed(2)
            },
            
            generalSepOverallPerformance(){
                const getRealValue = (val) => +val || val;
                var baseFebOverallPerformanceGeneralDashboard = ((2 * getRealValue(this.foodbankSepContents.overallPerformance)) + getRealValue(this.babyCupboardSepContents.overallPerformance) + 
                (1.25 * getRealValue(this.gikSepContents.overallPerformance)) + (0.8 * getRealValue(this.charity13SepContents.overallPerformance)) + getRealValue(this.entrepreneurshipSepContents.overallPerformance) + 
                getRealValue(this.employmentSkillsSepContents.overallPerformance) + (0.8 * getRealValue(this.socialHarvestSepContents.overallPerformance)) + (0.8 * getRealValue(this.marketMobileSepContents.overallPerformance)) + 
                (0.8 * getRealValue(this.gfbSepContents.overallPerformance)) + (0.8 * getRealValue(this.collectiveKitchenSepContents.overallPerformance)) + (0.8 * getRealValue(this.communityMealsSepContents.overallPerformance)) + 
                (1.5 * getRealValue(this.clothespinSepContents.overallPerformance)) + (2 * getRealValue(this.crisisInterventionSepContents.overallPerformance)) + (0.8 * getRealValue(this.yesICanSepContents.overallPerformance)) + 
                getRealValue(this.youthPREducationSepContents.overallPerformance) + getRealValue(this.youthPRSportSepContents.overallPerformance) + getRealValue(this.youthPRViolinSepContents.overallPerformance) + 
                getRealValue(this.pinsSepContents.overallPerformance) + getRealValue(this.overbrookSPSepContents.overallPerformance) + getRealValue(this.communityDevelopmentSepContents.overallPerformance));
                this.generalDashboardSepContents.mainOverallPerformance = (getRealValue(baseFebOverallPerformanceGeneralDashboard) / 21.35).toFixed(2)
                console.log("General Overall Performance: " + this.generalDashboardSepContents.mainOverallPerformance);
                return this.generalDashboardSepContents.mainOverallPerformance
            },

        },
        created(){
          this.readData()
        }

    }
</script>
