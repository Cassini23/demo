
/**
 * LANDING page controller
 */
appControllers.controller('LandingAppController', ['$scope', function ($scope) {
/*
    $scope.items = [
        {
            "name":"Mountains",
            "groups":[
                "nature"
            ],
            "src":"demo/img/pictures/1.jpg",
            "date":"10 mins"
        },
        {
            "name":"Empire State Pigeon",
            "groups":[
                "people"
            ],
            "src":"demo/img/pictures/2.jpg",
            "date":"1 hour",
            "like": true
        },
        {
            "name":"Big Lake",
            "groups":[
                "nature"
            ],
            "src":"demo/img/pictures/3.jpg",
            "date":"2 mins",
            "like": true
        },
        {
            "name":"Forest",
            "groups":[
                "nature"
            ],
            "src":"demo/img/pictures/4.jpg",
            "date":"2 mins",
            "like": true
        },
        {
            "name":"Smile",
            "groups":[
                "people"
            ],
            "src":"demo/img/pictures/5.jpg",
            "date":"2 mins"
        },
        {
            "name":"Smile",
            "groups":[
                "people"
            ],
            "src":"demo/img/pictures/6.jpg",
            "date":"1 hour",
            "like": true
        },
        {
            "name":"Fog",
            "groups":[
                "nature"
            ],
            "src":"demo/img/pictures/8.jpg",
            "date":"2 mins",
            "like": true
        },
        {
            "name":"Beach",
            "groups":[
                "people"
            ],
            "src":"demo/img/pictures/9.jpg",
            "date":"2 mins"
        },
        {
            "name":"Pause",
            "groups":[
                "people"
            ],
            "src":"demo/img/pictures/10.jpg",
            "date":"3 hour",
            "like": true
        },
        {
            "name":"Space",
            "groups":[
                "space"
            ],
            "src":"demo/img/pictures/11.jpg",
            "date":"3 hour",
            "like": true
        },
        {
            "name":"Shuttle",
            "groups":[
                "space"
            ],
            "src":"demo/img/pictures/13.jpg",
            "date":"35 mins",
            "like": true
        },
        {
            "name":"Sky",
            "groups":[
                "space"
            ],
            "src":"demo/img/pictures/14.jpg",
            "date":"2 mins"
        }
    ];*/

    $scope.items = [{ title: 'Soccer coach',
        serviceType: 'recreational',
        desc: 'After school soccer training',
        price: '$14 by hour',
        timeslot: '4 to 7',
        providerName: 'Bane C',
        business: 'N/A',
        phoneNumber: '5975756456',
        Address:'Menlo Park',
        Website:'baneccc@yahoo.com'
    },
        {
            title: 'Rashas babysitting service',
            serviceType: 'babysitting',
            desc: 'A baby sitting service',
            price: '$9 by hour',
            timeslot: '2 to 10',
            providerName: 'Rasha Bynes',
            business: 'N/A',
            phoneNumber: '6708976541',
            Address:'Redwood city',
            Website:'rashas@yahoo.com'

        },
        {
            title: 'Babysitter',
            serviceType: 'babysitting',
            desc: 'A baby sitting service',
            price: '$12 by hour',
            timeslot: '11 to 7',
            providerName: 'Jenny',
            business: 'N/A',
            phoneNumber: '7899324555',
            Address:'Mountain View',
            Website:'jennygirl@yahoo.com'
        },
        {
            title: 'Eclectic school of music',
            serviceType: 'music',
            desc: 'After school music classes',
            price: '$14 by hour',
            timeslot: '4 to 8',
            providerName: 'Miriam F',
            business: 'Eclectic school of music',
            phoneNumber: '5975756456',
            Address:'Mountain View',
            Website:'schoolofmusic@gmail.com'
        },
        {
            title: 'Dentist',
            serviceType: 'healthcare',
            desc: 'Let me check your teeth',
            price: '$24 by hour',
            timeslot: '2 to 5',
            providerName: 'Bane C',
            business: 'N/A',
            phoneNumber: '5975756456',
            Address:'Menlo Park',
            Website:'baneccc@yahoo.com'
        }
    ];

    $scope.activeGroup = 'all';

    $scope.order = 'asc';

    $scope.$watch('activeGroup', function(newVal, oldVal){
        if (newVal == oldVal) return;
        $scope.$grid.shuffle( 'shuffle', newVal );
    });

    $scope.$watch('order', function(newVal, oldVal){
        if (newVal == oldVal) return;
        $scope.$grid.shuffle('sort', {
            reverse: newVal === 'desc',
            by: function($el) {
                return $el.data('title').toLowerCase();
            }
        });
    })
}]);

