<template>
  <q-layout view="lHh LpR lFf">
    <q-header
      reveal
      :class="$q.dark.isActive ? 'header_dark' : 'header_normal'"
    >
      <q-toolbar>
        <q-btn
          @click="left = !left"
          flat
          round
          dense
          icon="menu"
          class="q-mr-sm"
        />
        <!--          <q-avatar>-->
        <!--            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">-->
        <!--          </q-avatar>-->

        <q-toolbar-title>Rideau-Rockcliffe Community Resource Centre</q-toolbar-title>
        <q-btn
          class="q-mr-xs"
          flat
          round
          @click="$q.dark.toggle()"
          :icon="$q.dark.isActive ? 'nights_stay' : 'wb_sunny'"
        />
        <!--<q-btn flat round dense icon="search" class="q-mr-xs" />-->
        <q-btn
          flat
          round
          dense
          icon="fas fa-sign-out-alt"
          @click="logoutNotify"
          to="/"
        />
      </q-toolbar>
    </q-header>
    <q-drawer
      class="left-navigation text-white"
      show-if-above
      v-model="left"
      side="left"
      elevated
    >
      <div
        class="full-height"
        :class="$q.dark.isActive ? 'drawer_dark' : 'drawer_normal'"
      >
        <div style="height: calc(100% - 117px);padding:10px;">
          <q-toolbar>
            <q-avatar>
              <img src="statics/rrcrc_hands.png" />
            </q-avatar>

            <q-toolbar-title>RRCRC-CRCRR</q-toolbar-title>
          </q-toolbar>
          <hr />
          <q-scroll-area style="height:100%;">
            <q-list padding>
              <q-item
                to="/dashboard"
                active-class="tab-active"
                exact
                class="q-ma-sm navigation-item"
                clickable
                v-ripple
              >
                <q-item-section avatar>
                  <q-icon name="dashboard" />
                </q-item-section>
                <q-item-section>
                  Dashboard
                </q-item-section>
              </q-item>
              <q-item
                to="/datainput"
                active-class="tab-active"
                exact
                class="q-ma-sm navigation-item"
                clickable
                v-ripple
              >
                  <q-item-section avatar>
                  <q-icon name="input" />
                </q-item-section>
                  <q-item-section>
                    <q-item-label>Data Entry</q-item-label>
                  </q-item-section>
              </q-item> 
                         
              <q-expansion-item
                icon="menu_open"
                label="Programs"
                exact
                class="q-ma-sm navigation-item"  
                default-opened 
              >
                <q-item to="/foodbank" active-class="q-item-no-link-highlighting" >
                  <q-item-section avatar>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Foodbank</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item to="/babycupboard" active-class="q-item-no-link-highlighting" >
                  <q-item-section avatar>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Baby Cupboard</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item to="/communityfridge" active-class="q-item-no-link-highlighting" >
                  <q-item-section avatar>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Community Fridge</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item to="/giftsinkind" active-class="q-item-no-link-highlighting">
                  <q-item-section avatar>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Gifts in Kind</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item to="/charity13" active-class="q-item-no-link-highlighting" >
                  <q-item-section avatar>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>CharITy 13</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item to="/enterpreneurship" active-class="q-item-no-link-highlighting" >
                  <q-item-section avatar>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Entrepreneurship</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item to="/employementskills" active-class="q-item-no-link-highlighting" >
                  <q-item-section avatar>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Employment Skills</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item to="/socialharvest" active-class="q-item-no-link-highlighting" >
                  <q-item-section avatar>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Social Harvest</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item to="/marketmobile" active-class="q-item-no-link-highlighting" >
                  <q-item-section avatar>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Market Mobile</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item to="/clothespin" active-class="q-item-no-link-highlighting" >
                  <q-item-section avatar>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Clothespin</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item to="/gfb" active-class="q-item-no-link-highlighting" >
                  <q-item-section avatar>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>GFB</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item to="/overbrooksp" active-class="q-item-no-link-highlighting" >
                  <q-item-section avatar>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Overbrook Safety Project</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item to="/collectivekitchen" active-class="q-item-no-link-highlighting" >
                  <q-item-section avatar>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Collective Kitchen</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item to="/communitymeals" active-class="q-item-no-link-highlighting" >
                  <q-item-section avatar>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Community Meals</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item to="/pins" active-class="q-item-no-link-highlighting" >
                  <q-item-section avatar>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>PINS</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item to="/youthpreducation" active-class="q-item-no-link-highlighting" >
                  <q-item-section avatar>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>YouthPREducation </q-item-label>
                  </q-item-section> 
                </q-item>
                <q-item to="/youthprsport" active-class="q-item-no-link-highlighting" >
                  <q-item-section avatar>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>YouthPRSport</q-item-label>
                  </q-item-section> 
                </q-item>
                <q-item to="/youthprviolin" active-class="q-item-no-link-highlighting" >
                  <q-item-section avatar>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>YouthPRViolin</q-item-label>
                  </q-item-section> 
                </q-item>
                <q-item to="/yesican" active-class="q-item-no-link-highlighting" >
                  <q-item-section avatar>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Yes I Can</q-item-label>
                  </q-item-section> 
                </q-item>
                <q-item to="/crisisintervention" active-class="q-item-no-link-highlighting" >
                  <q-item-section avatar>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Crisis Intervention</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item to="/cd" active-class="q-item-no-link-highlighting" >
                  <q-item-section avatar>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Community Development</q-item-label>
                  </q-item-section>
                </q-item>  
              </q-expansion-item>

<!--
              <q-item
                to="/volunteers"
                active-class="tab-active"
                exact
                class="q-ma-sm navigation-item"
                clickable
                v-ripple
              >
                  <q-item-section avatar>
                  <q-icon name="favorite" />
                </q-item-section>
                  <q-item-section>
                    <q-item-label>Volunteers</q-item-label>
                  </q-item-section>
                </q-item>   
                -->
      
            </q-list>
          </q-scroll-area>
        </div>
      </div>
    </q-drawer>

    <q-page-container>
      <q-page class="row no-wrap">
        <div class="col">
          <div class="full-height">
            <q-scroll-area class="col q-pr-sm full-height" visible>
              <router-view />
            </q-scroll-area>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      left: false
    };
  },
  methods: {
    logoutNotify() {
      this.$q.notify({
        message: "Logged out"
      });
    }
  }
};
</script>

<style>
.q-drawer {
  /*background-image: url(https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg) !important;*/
  /*background-image: url("/statics/images/lake.jpg") !important;*/
  background-image: url("/statics/images/ottawamaps-vertical.png") !important;
  background-size: cover !important;
}

.drawer_normal {
  background-color: rgba(1, 1, 1, 0.75);
}

.drawer_dark {
  background-color: #010101f2;
}

.navigation-item {
  border-radius: 5px;
}

.tab-active {
  background-color: green;
}

body {
  background: #f1f1f1 !important;
}

.header_normal {
  background: linear-gradient(
    145deg,
    rgb(32, 106, 80) 25%,
    rgb(21, 57, 102) 80%
  );
}

.header_dark {
  background: linear-gradient(145deg, rgb(61, 14, 42) 15%, rgb(14, 43, 78) 70%);
}
</style>
