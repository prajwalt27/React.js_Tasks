import React from 'react'

const Rainbow =(WrappedComponent)=>{

       const colors=['red','pink','blue','green','orange','crimson'];
       const randomColor= colors[Math.floor(Math.random()*4)]
       const className=randomColor+'-text'
       
       return(props)=>{
           return (
               <div className={className}>
                 <WrappedComponent {...props}/>
               </div>
           )
       }
}

export default Rainbow