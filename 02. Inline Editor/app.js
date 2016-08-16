// Creating a new Vue instance and pss in an options object.
var app = new Vue({
  // A DOM elmeent to mount our view model.
  el: '#main',

  // Define properties and give them initial values.
  data: {
    show_tooltip: false,
    text_content: 'Edit me.'
  },

  // Functions we will be using.
  methods: {
    hideTooltip: function(){
      // When a model is changed, the view will be authomatically updated.
      this.show_tooltip = false;
    },
    toggleTooltip: function(){
      this.show_tooltip = !this.show_tooltip;
    }
  }
});