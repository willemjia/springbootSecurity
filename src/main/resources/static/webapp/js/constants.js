(function() {
  'use strict';

  angular.module('starter.constants', [])
  /*  .constant('LoginUrl', '../login/judge')
    .constant('ServerUrl', '../')*/
      .constant('LoginUrl', 'http://10.25.37.164:8899/AppStore/login/judge')
      .constant('ServerUrl', 'http://10.25.37.164:8899/AppStore/')
    .constant('AUTH_EVENTS', {
      notAuthenticated: 'auth-not-authenticated',
      notAuthorized: 'auth-not-authorized'
    })
    .constant('ACCESS_LEVEL', {
      ADMIN: 'admin_role',
      public: 'public_role'
    });
})();
//http://10.25.37.164:8899/