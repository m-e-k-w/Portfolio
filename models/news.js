var mongoose = require('mongoose');
    // Skapa ett db-schema med hjälp av mongoose
    var Schema = mongoose.Schema;
    var newsSchema = new Schema({
        _Id: String,
        newsHeadline: String, 
    	newsDate: { type: Date, default: Date.now },
        newsText: String,
      
        
	});
    console.log(newsSchema);

module.exports = mongoose.model("News", newsSchema);