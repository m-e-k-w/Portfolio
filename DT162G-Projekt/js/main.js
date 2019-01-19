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
  })




