const span1 = document.querySelector('h1 span') ;
const span2 = document.querySelector('h2 span') ;

const wordsList1 = ['Developer' , 'Coder' , 'ECE Student'] ;
const wordsList2 = ['Engineer' , 'Coder' , 'Student'] ;

// const word =  'Developer' ;
let wordIndex = 0 ;
let i = 0 ;
let reverseType = false  ;
let skipUpdate = 0 ;

function autoType(wordsList,element){
    let wordIndex = 0 ;
    let i = 0 ;
    let reverseType = false  ;
    let skipUpdate = 0 ;

    const intervalId = setInterval(()=>{

        if(skipUpdate){
            skipUpdate-- ;
            return ;
        }
        
        if(!reverseType){
            skipUpdate = 2 ;
            element.innerText = element.innerText+wordsList[wordIndex][i]
            // console.log(span.innerText,i,word.length) ;
            i++ ; 
        } else{
            element.innerText = element.innerText.slice(0,element.innerText.length-1)
            i-- ;
        }
    
        if(i === wordsList[wordIndex].length){
            skipUpdate = 6 ;
            reverseType = true ;
        }
    
        if(element.innerText.length === 0 && reverseType) {
            reverseType = false ;
            i = 0  ;
            wordIndex++ ;
        }
    
        if(wordIndex  === wordsList.length ) {
            wordIndex = 0 ;
        }
    
    },100)
}

autoType(wordsList1 , span1)
autoType(wordsList2 , span2)
