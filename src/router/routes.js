      /** 
       * 
       * export default [
          { path: '/user', component: () => import('layouts/user'),
            children: [
              { path: 'feed', component: () => import('pages/user-feed') },
              { path: 'profile', component: () => import('pages/user-profile') }
            ]
          }
        ]
      */
const routes = [
  { path: '/', name: 'Login', component: () => import('pages/login.vue') },
  {
    path: '/', component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/dashboard', name: 'Dashboard', component: () => import('pages/dashboard.vue')},      
      { path: '/quotes', component: () => import('pages/quotes.vue')},
        
        { path: '/denemem', name:'Denemem', component: () => import('pages/programs/denemem.vue') },
        { path: '/firebaseInput', name:'firebaseInput', component: () => import('pages/firebaseInput.vue') },
        { path: '/giftsinkind', name:'Gifts in Kind', component: () => import('pages/programs/giftsinkind.vue') },
        { path: '/foodbank', name: 'FoodBank', component: () => import('pages/programs/foodbank.vue') },
        { path: '/babycupboard', name: 'Baby Cupboard', component: () => import('pages/programs/babycupboard.vue') },
        { path: '/communityfridge', name: 'Community Fridge', component: () => import('pages/programs/communityfridge.vue') },
        { path: '/enterpreneurship', name: 'Entrepreneurship', component: () => import('src/pages/programs/enterpreneurship.vue') },
        { path: '/employementskills', name: 'Employement Skills', component: () => import('src/pages/programs/employementskills.vue') },
        { path: '/marketmobile', name: 'Market Mobile', component: () => import('pages/programs/marketmobile.vue') },
        { path: '/gfotm', name: 'GFOTM', component: () => import('pages/programs/gfotm.vue') },
        { path: '/charity13', name: 'charITy13', component: () => import('pages/programs/charity13.vue') },
        { path: '/clothespin', name: 'Clothespin', component: () => import('pages/programs/clothespin.vue') },
        { path: '/socialharvest', name: 'Social Harvest', component: () => import('pages/programs/socialharvest.vue') },
        { path: '/communitygardens', name: 'Community Garden', component: () => import('pages/programs/communitygardens.vue') },
        { path: '/gfb', name: 'Good Food Box', component: () => import('pages/programs/gfb.vue') },
        { path: '/healthyconnections', name: 'Healthy Connections', component: () => import('pages/programs/healthyconnections.vue') },
        { path: '/collectivekitchen', name: 'Collective Kitchen', component: () => import('pages/programs/collectivekitchen.vue') },
        { path: '/communitymeals', name: 'Community Meals', component: () => import('pages/programs/communitymeals.vue') },
        { path: '/incometax', name: 'Income Tax', component: () => import('pages/programs/incometax.vue') },
        { path: '/youthprograms', name: 'Youth Programs', component: () => import('pages/programs/youthprograms.vue') },
        { path: '/youthpreducation', name: 'Youth Programs - Education', component: () => import('pages/programs/youthPREducation.vue') },
        { path: '/youthprsport', name: 'Youth Programs - Sport', component: () => import('pages/programs/youthPRSport.vue') },
        { path: '/youthprviolin', name: 'Youth Programs - Violin', component: () => import('pages/programs/youthPRViolin.vue') },
        { path: '/pins', name: 'PINS', component: () => import('pages/programs/pins.vue') },
        { path: '/overbrooksp', name: 'Overbrook SP', component: () => import('pages/programs/overbrooksp.vue') },
        { path: '/seniorsengagement', name: 'Seniors Engagement', component: () => import('pages/programs/seniorsengagement.vue') },
        { path: '/yesican', name: 'Yes I Can', component: () => import('pages/programs/yesican.vue') },
        { path: '/skillsbw', name: 'Skills B&W', component: () => import('pages/programs/skillsbw.vue') },
        { path: '/crisisintervention', name: 'Crisis Intervention', component: () => import('pages/programs/crisisintervention.vue') },
        { path: '/cd', name: 'Community Development', component: () => import('pages/programs/cd.vue') },
        { path: '/deneme', name: 'deneme', component: () => import('pages/programs/deneme.vue') },
        { path: '/powerbi', name: 'powerbi', component: () => import('pages/powerbi.vue') },
        //{ path: '/deneme2', component: () => import('pages/programs/deneme2.vue') },

        { path: '/login1', component: () => import('pages/login1.vue') },  
      { path: '/inputLogin', component: () => import('pages/datainputLogin.vue')},     
      { path: '/datainput', component: () => import('src/pages/datainput.vue')},     
      { path: '/volunteers', component: () => import('pages/volunteers.vue')}, 
      //{ path: '/table', component: () => import('pages/table.vue')},
      //{ path: '/table2', component: () => import('pages/table2.vue')},
      { path: '/table0', component: () => import('pages/table0.vue')},
      //{ path: '/dashboard_v2', component: () => import('pages/dashboard_v2.vue') },
      //{ path: '/customer_management', component: () => import('pages/customer_management.vue') },
      //{ path: '/change_request', component: () => import('pages/change_request.vue') },
      //{ path: '/my_profile', component: () => import('pages/my_profile.vue') },
      //{ path: '/sales_invoices', component: () => import('pages/sales_invoices.vue') },
      //{ path: '/transactions', component: () => import('pages/transactions.vue') },
      //{ path: '/employee_salary_list', component: () => import('pages/employee_salary_list.vue') },
      //{ path: '/calendar', component: () => import('pages/calendar.vue') },
      //{ path: '/department', component: () => import('pages/department.vue') },
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
