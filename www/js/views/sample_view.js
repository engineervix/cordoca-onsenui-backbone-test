var app = app || {};


$(function () {

    // set the page title
    $(document).prop('title', 'ACME Company Viewer');

    app.CurrentCompanyView = Backbone.View.extend({
        el: $('.the-app'),

        initialize: function () {
            this.template = _.template($("#home")
                .html());
            this.collection.bind("reset", this.render, this);
        },

        render: function () {
            this.$el.html(this.template({
                companies: this.collection.toJSON()
            }));
            return this;
        },

    });

});
