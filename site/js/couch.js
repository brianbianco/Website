(function($){
	//My Models
	var Article = Backbone.Model.extend({
		initialize: function(){
			//console.log('initializing article model');
			
		},
		defaults: {
		}
	});

	//My collections
	var ArticleList = Backbone.Collection.extend({
		initialize: function(){
			console.log('initializing articlelist collection');
		},
		url: '/couchdb/articles/_design/list/_view/all',
		model: Article,
		parse: function(response){
			return response.rows;
		}	
	});

	var myCollection = new ArticleList();

	//My views
	var PageView = Backbone.View.extend({

		el: $('body'), //attaches this.el to an existing element

		events: {
			//'click #getviews': 'addArticle'
		},

		initialize: function(){
			_.bindAll(this,'render'); //fixes loss of context for 'this' within methods
			//myCollection.bind('add',this.addArticle);
			//myCollection.fetch({success: function(){ 
			//		}});

			this.render();
		},
		
		render: function(){
			console.log(myCollection.length);
			for(var i = 0; i < myCollection.length; i++){
				$(this.el).append(myCollection.at(i).attributes.value.content);
				
			} 


		}
	});

	var myPageView = new PageView();

	myCollection.fetch({success: function(){
		myPageView.render();
	}});

})(jQuery);










/* --- Ajax function to pull couchDB articles
         	$.ajax({
                        	url: 'http://www.brianbianco.com/couchdb/articles/_design/list/_view/all',
                        	type: 'GET',
                        	dataType: 'json',
                        	success: function(response){
                                	rows = response.rows;
                                	for(var i = 0; i < rows.length; i++){
                                        	console.log(rows[i].value);
                                	}        
                        	},
                	});
*/


//$(document).ready(function(){
//});
