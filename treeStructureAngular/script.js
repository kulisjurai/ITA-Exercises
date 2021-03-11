const myApp = angular.module('myApp', []);


myApp.controller('MainController', function ($scope) {

    $scope.treeData = [
        {
            name: 'e2e',
            children: [
                { name: 'e2e.script.tests.js' }
            ]
        },
        {
            name: 'node_modules',
            children: [
                { name: 'e2e.script.tests.js' }
            ]
        },
        {
            name: 'src',
            children: [
                {
                    name: 'app',
                    children: [
                        {
                            name: 'treeview',
                            children: [
                                { name: 'treeview.component.css' },
                                { name: 'treeview.component.html' },
                                { name: 'treeview.component.spec.ts' },
                                { name: 'treeview.component.ts' },
                                { name: 'treeview.module.ts' }

                            ],

                        },
                        { name: 'app.component.css' },
                        { name: 'app.component.html' },
                        { name: 'app.component.spec.ts' },
                        { name: 'app.component.ts' },
                        { name: 'app.module.ts' }
                    ],

                }
            ]
        }

    ];
    $scope.showFolder = function (children) {
        if (children === undefined) {
            return;
        }
        for (let i = 0; i < children.length; i++) {
            children[i].visible == true ? children[i].visible = false : children[i].visible = true;
        }
    }
});



