import React from 'react'

const MiddleSection = ({img, heading, money,years}) => {
  return (
    <>
         <div style={{flex:"1", display:"flex", flexDirection:"row",alignItems:"center", gap:"10px"}}> 
             <img src={img} alt="bag" style={{width:"3em"}} />
                <div style={{display:"flex", flexDirection:"column", }}>
                    <p style={{fontSize:"18px"}}>{heading}</p>
                {
                    money ? <h3 style={{marginTop:"-10px"}}>Rs {money}</h3> : 
                    <h3 style={{marginTop:"-10px"}}>{years} years</h3>
                }  
                </div>
           </div>
    </>
  )
}

export default MiddleSection