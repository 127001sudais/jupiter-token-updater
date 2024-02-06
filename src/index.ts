import { main } from "./utils/connection";

async function runMain(){
    try{
        await main();
        setTimeout(runMain,10000);
    }catch (error){
        console.error('❌ Error in runMain:', error);
    }
}

runMain();
