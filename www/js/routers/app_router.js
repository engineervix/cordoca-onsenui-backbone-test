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

            // https://stackoverflow.com/questions/2177548/load-json-into-variable
            var all_content = (function() {
                var all_content = null;
                $.ajax({
                        'async': false,
                        'global': false,
                        'url': "data/company_data.json",
                        'dataType': "json",
                        'success': function (data) {
                            all_content = data.companies;
                        }
                });
                return all_content;
            })();
            app.theCompanies.reset(all_content);
        }

    });


})();
