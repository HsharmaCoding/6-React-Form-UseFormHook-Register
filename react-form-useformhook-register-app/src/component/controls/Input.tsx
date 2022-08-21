import React from "react";

interface IProps{
    name:string;
    id:string;
    type:string;
    register?:any;
    error:any;
    [key: string]: any;  
}

export const Input=(props:IProps)=>{

    const {name,id,type,register,error,...rest}=props;

    return(
        <>
            <input
                name={name}
                id={id}
                type={type}
                {...rest}
                {...register(name)}
            />
            <div className='error'>{error}</div>
        </>
    )
}