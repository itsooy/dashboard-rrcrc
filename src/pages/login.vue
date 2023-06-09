<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex flex-center">
        <div
          id="particles-js"
          :class="$q.dark.isActive ? 'dark_gradient' : 'normal_gradient'"
        ></div>
        <q-btn
          color="white"
          class="absolute-top-right"
          flat
          round
          @click="$q.dark.toggle()"
          :icon="$q.dark.isActive ? 'nights_stay' : 'wb_sunny'"
        />
        <q-card
          class="auth-form"
          v-bind:style="
            $q.platform.is.mobile ? { width: '80%' } : { width: '50%' }
          "
        >
          <q-img src="/statics/images/pharmacy.png"></q-img>
          <q-separator />
          <!--
          <q-card-section>
            <q-avatar
              size="84px"
              class="absolute"
              style="top: 0;right: 25px;transform: translateY(-50%);"
            >
              <img src="statics/rrcrc_hands.png" />
            </q-avatar>
            
              <div class="row no-wrap items-center">
                <div class="col text-h6 ellipsis">
                  Welcome to Management Dashboard
                </div>
              </div>
          </q-card-section>
          -->
          <q-tabs v-model="tab" class="text-red-10">
            <q-tab label="Login" name="login" />
            <q-tab label="Register" name="register" />
          </q-tabs>
          <q-separator />
          <q-tab-panels 
            v-model="tab" 
            animated 
            swipeable
            >
            <q-tab-panel name="login">
              <q-card-section>
                <q-form class="q-gutter-md">
                  <q-input 
                    filled 
                    v-model="fromData.email" 
                    label="Email" 
                    lazy-rules
                    :rules="[val => !!val || 'Field is required']"
                  />
                  <q-input
                    type="password"
                    filled
                    v-model="fromData.password"
                    label="Password"
                    lazy-rules
                    :rules="[val => !!val || 'Field is required']"
                  />
                  <div class="row reverse">
                    <q-btn
                      label="Login"
                      type="button"
                      color="teal"
                      @click="letsSignIn"
                      icon="input"
                      rounded
                    />
                  </div>
                </q-form>
              </q-card-section>
            </q-tab-panel>

            <q-tab-panel name="register">
              <q-card-section>
                <br>
                <div><q-icon name="warning" class="text-red-9" style="font-size: 4rem;" /></div>
                <br><br>
                <div class="text-h6">Please contact your <b >system administrator</b> to register.</div>
                <br><br><br>
              </q-card-section>
            </q-tab-panel>
          </q-tab-panels>  
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script type="text/javascript"></script>
<script>
  import auth from 'src/boot/firebaseAuth';
  
    export default {
        data() {
            return {
              tab: 'login',
              fromData:{
                email: '',
                password: ''
              }
            }
        },
        methods: {
          letsSignIn(){
            auth.signInWithEmailAndPassword(this.fromData.email, this.fromData.password)
              .then(response => {
                console.log(response)
                this.$q.notify({
                  message: 'Login Successful',
                })
                this.$router.push({ name: 'Dashboard' })
              })
              .catch(error => {
                console.log(error.message)
                this.$q.notify({
                  message: 'Login Unsuccessful',
                })
              })
          },
          letsRegister(){
            auth.createUserWithEmailAndPassword(this.fromData.email, this.fromData.password)
              .then(response => {
                console.log(response)
                this.$q.notify({
                  message: 'Registration Successful',
                })
                
              })
              .catch(error => {
                console.log(error.message)
                this.$q.notify({
                  message: 'Registration Unsuccessful',
                })
              })
          },
          denemeRegister(){
            console.log("Register islemi icin girilen datalar: " + this.fromData.username + this.fromData.email +  this.fromData.password)
          },
          loginNotify(){
            if(this.fromData.email === 'admin@crcrr.org' && this.fromData.password === 'Dashboard2022@' || this.fromData.email === 'datainput@crcrr.org' && this.fromData.password === 'Dashboard2022@'){
              this.$router.push("/dashboard")
              this.$q.notify({
                message: 'Login Successful',
              })
            }else(
               this.$q.notify({
                message: 'Login Unsuccessful',
              })
            )
          }
        },
        mounted() {
            particlesJS("particles-js", {
                "particles": {
                    "number": {
                        "value": 80,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#ffffff"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        },
                        "polygon": {
                            "nb_sides": 5
                        },
                        "image": {
                            "src": "img/github.svg",
                            "width": 100,
                            "height": 100
                        }
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#ffffff",
                        "opacity": 0.4,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 6,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "grab"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 140,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true
            });
        }
    }
</script>

<style>
#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
}
.normal_gradient {
  background: linear-gradient(145deg, rgb(124, 135, 138) 15%, #b61924 70%);
}
.dark_gradient {
  background: linear-gradient(145deg, rgb(5, 18, 28) 15%, #4c1014 70%);
}
.auth-form {
  position: absolute;
}
b { 
 font-size: 20px;
 color: #b61924;
}
</style>
