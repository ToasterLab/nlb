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
	if(typeof params.BID === "undefined" && typeof params.ISBN === "undefined"){
		throw "Error: Must define either BID or ISBN for GetTitleDetails"
	}
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

nlb.prototype.GetAvailabilityInfo = function (params){
	/*
		params.BID OR params.ISBN
	*/
	if(typeof params.BID === "undefined"){params.BID = ""}
	if(typeof params.ISBN === "undefined"){params.ISBN = ""}
	if(typeof params.BID === "undefined" && typeof params.ISBN === "undefined"){
		throw "Error: Must define either BID or ISBN for GetAvailabilityInfo"
	}
	return new Promise((resolve, reject) => {
		let searchArgs = {
		  GetAvailabilityInfoRequest: {
		  	APIKey: process.env.NLB_API_KEY,
		  	BID: params.BID,
		  	ISBN: params.ISBN,
		  	Modifiers: {}
		  }
		};
		soap.createClient(url, {}, (err, client) => {
			client["CatalogueService"]["BasicHttpBinding_ICatalogueService"]["GetAvailabilityInfo"](searchArgs, (err, res) => {
					if(err){reject(err)}
					if(res.Status === "OK"){
						resolve(res.Items.Item)
					} else {
						reject(res.ErrorMessage)
					}
					
			})
		});
	});
}

module.exports = new nlb();
