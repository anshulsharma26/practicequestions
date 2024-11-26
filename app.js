function clickEventAttach(){
    let i = 0;
    document.getElementById("btn").addEventListener('click',function xyx(){
        console.log(`Button Clicked ${++i}`)
    })
}
clickEventAttach();

// what is the diffrence between post and pre increment 

/**
 * 
 *  ++i 
 */