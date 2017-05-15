const soap = require('strong-soap').soap;
const url = "http://openweb-stg.nlb.gov.sg/OWS/CatalogueService.svc?wsdl";
let apiKey = ""

function nlb (){}

/**
 * @description sets the NLB API key. run before any operations
 * @param {string} api_key - NLB API key
 */
nlb.prototype.setApiKey = function(api_key){
	apiKey = api_key
}
/**
 * @description search NLB's database. wrapper for CatalogueService.Search
 * @param {Object} params
 * @param {String} params.field - Keywords, Author, Title or Subject
 * @param {string} params.terms
 * @returns {Promise} containing array of matching books
 */
nlb.prototype.Search = function (params){
	return new Promise((resolve, reject) => {
		let searchArgs = {
		  SearchRequest : {
		  	APIKey: apiKey,
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
		})
	})
}

/**
 * @description get more information about a book. wrapper for CatalogueService.GetTitleDetails
 * @param {Object} params - either .BID or .ISBN must be set
 * @param {String} BID
 * @param {String} ISBN
 * @returns {Promise} containing object with matching book
 */
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
		  	APIKey: apiKey,
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
		})
	})
}

/**
 * @description check if/where a book is available. wrapper for CatalogueService.GetAvailabilityInfo
 * @param {Object} params - either .BID or .ISBN must be set
 * @param {String} BID
 * @param {String} ISBN
 */
nlb.prototype.GetAvailabilityInfo = function (params){
	if(typeof params.BID === "undefined"){params.BID = ""}
	if(typeof params.ISBN === "undefined"){params.ISBN = ""}
	if(typeof params.BID === "undefined" && typeof params.ISBN === "undefined"){
		throw "Error: Must define either BID or ISBN for GetAvailabilityInfo"
	}
	return new Promise((resolve, reject) => {
		let searchArgs = {
		  GetAvailabilityInfoRequest: {
		  	APIKey: apiKey,
		  	BID: params.BID,
		  	ISBN: params.ISBN,
		  	Modifiers: {}
		  }
		};
		soap.createClient(url, {}, (err, client) => {
			client["CatalogueService"]["BasicHttpBinding_ICatalogueService"]["GetAvailabilityInfo"](searchArgs, (err, res) => {
					if(err){reject(err)}
					if(res.Status === "OK" && "Items" in res && "Item" in res.Items && res.Items.Item){
						resolve(res.Items.Item)
					} else if (res.Status === "OK" && !("ErrorMessage" in res)){
						resolve([])
					} else {
						reject(res.ErrorMessage)
					}
					
			})
		});
	});
}

module.exports = new nlb();
