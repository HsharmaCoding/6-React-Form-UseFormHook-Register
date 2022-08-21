import React from "react";

interface IProps{
    items:any;
    register:any;
    [key: string]: any;  
}
export const RadioGroup=(props:IProps)=>{

    const {name,register,...rest}=props;

    return(
        <> 
             <table>
                <tbody>
                    {
                            props.items.map((item:any)=>(
                                <tr key={item.value}>
                                    <td>
                                        <input 
                                            type="radio" 
                                            value={item.value} 
                                            name={item.name}
                                            id={item.id}
                                            {...rest}
                                            {...register(item.name)}
                                        />
                                    </td>
                                    <td> {item.title}</td>
                                </tr>                
                            ))
                        }
                </tbody>                
            </table>       
        </>
           
    )
}