const nlb = require("nlb")

nlb.setApiKey("your API key here")

nlb.Search({field: "Author", terms: "David Eddings"}).then((res) => {
	console.log("===========================================")
	console.log("NLB SEARCH FOR 'DAVID EDDINGS' AS AN AUTHOR")
	console.log("===========================================")
	console.log(res)
}).catch((err) => {console.error(err)})

nlb.GetTitleDetails({ISBN: "0062433652"}).then((res) => {
	console.log("================================================================")
	console.log("NLB TITLE DETAILS FOR TO KILL A MOCKINGBIRD WITH ISBN 0062433652")
	console.log("================================================================")
	console.log(res)
}).catch((err) => {console.error(err)})

nlb.GetAvailabilityInfo({ISBN: "9789814266727"}).then((res) => {
	console.log("==============================================================================")
	console.log("NLB AVAILABILITY INFO FOR HAN FOOK KWANG'S HARD TRUTHS WITH ISBN 9789814266727")
	console.log("==============================================================================")
	console.log(res)
}).catch((err) => {console.error(err)})