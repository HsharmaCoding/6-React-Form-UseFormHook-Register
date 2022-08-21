import React from "react";

interface IProps{
    items:any;
    name:string;
    register:any;
    [key: string]: any;  
}
export const DropDownList=(props:IProps)=>{

    const {name,register,...rest}=props;

    return(
        <> 
            {
                <select name={name} id={name} {...rest}  {...register(name)}>
                {
                    props.items.map((item:any)=>(
                        <option key={item.value} value={item.value}>{item.title}</option>            
                    ))
                }
                 </select>
            }
    
        </>
           
    )
}