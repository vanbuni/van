const { default: axios } = require("axios")

var app = 'APokFsJzFcw2yaw8n9fa8mck'



function test(){

    axios.put(`https://internal.sandbox-payments-api.com/applications/${app}`,
    {"fee_ready_to_settle_upon": "RECONCILIATION_ACTIVITY_DATE",
    "ready_to_settle_upon": "SUCCESSFUL_CAPTURE"},
    {
    headers : {
        'content-type': 'application/vnd.json+api'
    }
},
{
    auth : {
        username : 'US2PQ4duazn9AN4tFGz2Nuhv',
        password : '4ec87fb5-ba54-43db-8dac-6f2bc302dfa5'

        
    }
}
    )
}
test()
