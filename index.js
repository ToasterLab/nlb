require('dotenv').config(); //process.env.APP_ID APP

const soap = require('strong-soap').soap;
const url = "http://openweb-stg.nlb.gov.sg/OWS/CatalogueService.svc?wsdl";

function nlb (){}

nlb.prototype.Search = function (params){
	/*
		params.field = Keywords AND Author AND Subject And Title
	*/
	return new Promise((resolve, reject) => {
		let searchArgs = {
		  SearchRequest : {
		  	APIKey: process.env.NLB_API_KEY,
		  	SearchItems: {
		  		SearchItem: {
		  			SearchField: params.field,
		  			SearchTerms: params.terms
		  		},
		  		Modifiers: {}
		  	}
		  }
		};
		soap.createClient(url, {}, (err, client) => {
			client["CatalogueService"]["BasicHttpBinding_ICatalogueService"]["Search"](searchArgs, (err, res) => {
					if(err){reject(err)}
					if(res.Status === "OK"){
						resolve(res.Titles.Title)
					} else {
						reject(res.ErrorMessage)
					}
					
			})
		});
	});
}

nlb.prototype.GetTitleDetails = function (params){
	/*
		params.BID OR params.ISBN
	*/
	if(typeof params.BID === "undefined"){params.BID = ""}
	if(typeof params.ISBN === "undefined"){params.ISBN = ""}
	return new Promise((resolve, reject) => {
		let searchArgs = {
		  GetTitleDetailsRequest: {
		  	APIKey: process.env.NLB_API_KEY,
		  	BID: params.BID,
		  	ISBN: params.ISBN
		  }
		};
		soap.createClient(url, {}, (err, client) => {
			client["CatalogueService"]["BasicHttpBinding_ICatalogueService"]["GetTitleDetails"](searchArgs, (err, res) => {
					if(err){reject(err)}
					if(res.Status === "OK"){
						resolve(res.TitleDetail)
					} else {
						reject(res.ErrorMessage)
					}
					
			})
		});
	});
}

module.exports = new nlb();

let a = new nlb()
/*
a.Search({field: "Author", terms: "David Eddings"}).then((res) => {
	console.log(res)
})*/

a.GetTitleDetails({ISBN: "0062433652"}).then((res) => {
	console.log(res)
}).catch((err) => {
	console.log(err)
})