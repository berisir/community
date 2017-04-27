angular.module('app')
    .controller('ctrl',function(){

    })
    .config(function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/first/home/referral')
        $stateProvider
            .state('first',{
                url:'/first',
                templateUrl:'./tempalte/first.html'
            })
            .state('first.list2',{
                url:'/list2',
                template:'<div>1111111111</div>'
            })
            .state('first.list3',{
                url:'/list3',
                template:'<div>222222222</div>'
            })
            .state('first.list4',{
                url:'/list4',
                template:'<div>3333333333</div>'
            })
            .state('first.home',{
                url:'/home',
                templateUrl:'./tempalte/home.html'
            })
            .state('first.home.referral',{
                url:'/referral',
                templateUrl:'./tempalte/h_referral.html'
            })
            .state('first.home.check',{
                url:'/check',
                templateUrl:'./tempalte/h_check.html'
            })
            .state('first.home.msg',{
                url:'/msg',
                templateUrl:'./tempalte/h_msg.html'
            })
            .state('first.home.summarize',{
                url:'/summarize',
                templateUrl:'./tempalte/h_summarize.html'
            })

    })
    .directive('inputFile',function(){
        return {
            restrict:'E',
            template:`<div class="backFile">
                <label for="{{fileid}}"></label>
                <input type="file" id="{{fileid}}">
                </div>`,
            scope:{},
            controller:function($scope){
                $scope.fileid = 'fileid' + $scope.$id;
            },
            link:function(scope,eve){
                eve.find('input').on('change',function(){
                    var reader = new FileReader();
                        reader.readAsDataURL(this.files[0]);

                    reader.onload = function(){
                        eve.find('label').css('background-image','url('+this.result+')');
                    }
                })
            }
        }
    });