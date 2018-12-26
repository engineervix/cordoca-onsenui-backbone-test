var app = app || {};

(function () {

    app.CompanyCollection = Backbone.Collection.extend({
        model: app.CompanyModel,
        // url: "data/company_data.json",
        // parse: function(response) {
        //     return response.companies;
        // },
        // initialize: function(){
        //     console.log("Companies initialize ...");
        // },
    });

    // app.Companies = new app.CompanyCollection();
    // app.Companies.fetch();

})();
