namespace App {
    let app = angular.module ('App', ['ui.router']);

    app.config ([
        '$stateProvider',
        ($stateProvider) => {

            $stateProvider
                .state ('home', {
                    url: '/',
                    templateUrl: 'templates/home.html',
                    controller: App.HomeController,
                    controllerAs: 'homeController'
                })
                .state ('product', {
                    url: '/product',
                    templateUrl: 'templates/product.html',
                    controller: App.ProductController,
                    controllerAs: 'productController'
                })
                .state ('front', {
                    url: '/front',
                    templateUrl: 'templates/front.html',
                    controller: App.FrontController,
                })
        }
    ]);
}
