angular.module('starter.services', [])

    .factory('Login', function ($http, $q) {
        var getUser = function () {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post('http://localhost:8888/user/getUser').success(function (resp) {
                deferred.resolve(resp);
            }).error(function (resp) {
                deferred.reject(resp);
            })
            return promise;
        };
        var getAdmin = function () {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post('http://localhost:8888/user/getAdmin').success(function (resp) {
                deferred.resolve(resp);
            }).error(function (resp) {
                deferred.reject(resp);
            })
            return promise;
        };
        var login = function (data) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http({
                method: 'POST',
                url: 'http://localhost:8888/login',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                transformRequest: function(obj) {
                    var str = [];
                    for(var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                },
                data: data
            }).success(function(response){
                deferred.resolve(response);
            }).error(function(reason){
                deferred.reject(reason);
            });
            return promise;
        };

        var loginout = function () {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post('http://localhost:8888/logout').success(function (resp) {
                deferred.resolve(resp);
            }).error(function (resp) {
                deferred.reject(resp);
            })
            return promise;
        };
        return {
            getUser: getUser,
            getAdmin:getAdmin,
            login:login,
            loginout:loginout
        }
    })