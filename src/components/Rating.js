import React  from 'react';

    const Rating =({count,onChangeRating = () =>{}}) =>{
        let StarsHtml =[]
        for( let i=0;i<5;i++){
            if(i<count){
                StarsHtml.push(<span onClick ={()=>onChangeRating(i+1)}key={i}>★</span>)
             }
                   else{     
                StarsHtml.push(<span onClick ={()=>onChangeRating(i+1)}key={i}>☆</span>)
                 }
        }
    
    
        return ( 
         <div> {StarsHtml}</div>
         )
      }

 



export default Rating 