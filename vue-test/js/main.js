//kod skapad av Maria Westlund
//2019-01-19

//denna del läser ut rest innehållet
new Vue({
    el: '#app1',
    data () {
      return {
        info: null
      }
    },
    mounted () {
      axios.get('https://portfolionews.herokuapp.com/News')
      
        .then(response => (this.info = response.data))
        .catch(error => console.log(error))
    }
  }),


//källa https://vuejs.org/v2/examples/modal.html
//--------modal 1----------------
  // register modal component
  Vue.component('modal', {
    template: '#modal-template'
  }),
  // start app
  new Vue({
    el: '#app',
    data: {
      showModal: false
    }
  }),

//--------modal 2----------------
    // register modal component
    Vue.component('modal2', {
      template: '#modal-template2'
    }),   
  // start app
  new Vue({
    el: '#app2',
    data: {
      showModal2: false
    }
  }),

  //--------modal 3----------------
    // register modal component
    Vue.component('modal3', {
      template: '#modal-template3'
    }),   
  // start app
  new Vue({
    el: '#app3',
    data: {
      showModal3: false
    }
  })