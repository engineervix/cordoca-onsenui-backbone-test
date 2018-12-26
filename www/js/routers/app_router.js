var app = app || {};

(function () {

    app.Router = Backbone.Router.extend({

        routes: {
            '': 'applicationMain'
        },

        applicationMain: function () {
            app.theCompanies = new app.CompanyCollection();
            appMainView = new app.CurrentCompanyView({
                collection: app.theCompanies
            });
        }

    });


})();
