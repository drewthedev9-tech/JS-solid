// promises way

function makeRequest(location){
    return new Promise ((resolve,reject)=>{
        console.log(`making request to ${location}`)
        if (location==="Google"){
            resolve ("Google says hi");
        }
        else{
            reject("we cannot connect your request");
        }
    })
}

function processRequest(response){
    return new Promise((resolve, reject)=>{
        console.log("processing response")
        resolve(`Extra information' + ${response}`)
    })
}

// makeRequest("Google").then(response=>{
//     console.log("response recieved")
//     return processRequest(response)
// }).then(processedResponse =>{
//     console.log(processedResponse)
// }).catch(err=>{
//     console.log(err);
// })

// async way//////

async function doWork(){
    try{
       
        const response = await makeRequest("Google")
        console.log('response recieved')
        processRequest(response);
        const processedResponse = await processRequest(response)
        console.log(processedResponse)
    } catch(err){
        console.log(err);
    }
   

}
doWork()