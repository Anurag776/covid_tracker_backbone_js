var CountryModalView = Backbone.View.extend({
    className:'modal',
    initialize: function(){
        this.template = _.template($(".country-modal-template").html())
    },
    render : function(){
        console.log(this.model)
        this.$el.html(this.template(this.model.toJSON()))
        return this;
    }
})