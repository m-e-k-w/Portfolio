//kod skapad av Maria Westlund
//2019-01-19


//insperations källa  https://www.youtube.com/watch?v=Oyr5X5HwXhM
//insperations källa föreläsning

//denna del lägger till nya nyheter
   new Vue({
    el: '#addnew',
    data: {
        message: '',
        postNews: {_id:'', newsDate:'', newsHeadline: '', newsText: ''}  
    },methods:{
      //denna metod relodar sidan
      reloadPage(){
        window.location.reload()
      },
   
 // postar nya inlägg
 postPost() {

  let newNews = {
    newsHeadline: this.postNews.newsHeadline,
    newsText: this.postNews.newsText
  }
  console.log(newNews);
  axios.post(`https://portfolionews.herokuapp.com/News`, newNews)
  .then(response => {
    window.location.reload()  
   })
  .catch(e => {
    this.errors.push(e)
  })
},
}
})


//denna del tar bort och updatera inlägg
const vm = new Vue({
  el:"#appadmin",
  data: {
    editNews: null,
    componentKey: 0,
    MyNews: [],
    //url = "http://localhost:3000/News"
    //"https://portfolionews.herokuapp.com/News/"
  },
  methods: {
    reloadPage(){
      window.location.reload()
    },
//denna del tar bort nyheter
 deleteNews(_id, i){
    fetch("https://portfolionews.herokuapp.com/News/" + _id, {
     method:"DELETE"
    })
    .then(() => {
      window.location.reload()
      this.mynews.splice(i, 1);
      console.log("deleteed")     
    })      
  },
  //denna del uppdaterar inlägg
  updateNews(mynews){
    fetch(`https://portfolionews.herokuapp.com/News/` + mynews._id,{
   body: JSON.stringify(mynews),    
    method: "PUT",
   headers: {
        "Content-Type": "application/json",
    },
    })
    .then(()=> {
        this.editNews = null;           
    })
  }
},
//denna metod hämtar inläggen
mounted () {
  axios.get('https://portfolionews.herokuapp.com/News') 
    .then(response => (this.MyNews = response.data))
    .catch(error => console.log(error))
},
})