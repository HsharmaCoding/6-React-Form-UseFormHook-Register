import React from "react";

interface IProps{
    name:string;
    id:string;
    label:string;
    [key: string]: any;  
    register:any;
}
export const CheckBox=(props:IProps)=>{

    const {name,id,register,...rest}=props;

    return(
            <table>
                <tbody>
                    <tr>
                        <td>
                            <input
                                name={name}
                                id={id}
                                type="checkbox"
                                {...rest}
                                {...register(name)}
                            />
                        </td>
                    </tr>
                </tbody>               
            </table>
    )
}