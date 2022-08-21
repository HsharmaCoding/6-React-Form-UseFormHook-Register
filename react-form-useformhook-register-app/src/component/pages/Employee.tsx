import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {Input,DropDownList,CheckBox,RadioGroup} from "../controls"
import * as yup from "yup";
import {IEmployee} from '../../interface'

const cityItems = [
    { id: 'city', name:'city', title: '--select one--',value:'--select one--'},
    { id: 'city', name:'city', title: 'Ahmedabad',value:'ahmedabad'},
    { id: 'city',name:'city', title: 'Udaipur',value:'udaipur' },
    { id: 'city',name:'city', title: 'Kota',value:'kota' },
]

const genderItems = [
    { id: 'gender', name:'gender', title: 'Male',value:'Male'},
    { id: 'gender',name:'gender', title: 'Female',value:'Female' },
    { id: 'gender',name:'gender', title: 'Other',value:'Other' },
]

export const Employee=()=>{

    const schema = yup.object().shape({
        fullName: yup
          .string()
          .required("First Name is required."),

        email: yup
          .string()
          .required("Email is invalid.")
          .email("Wrong email format."),   

        mobile: yup
          .string(),

        city: yup
          .string(),

        gender: yup
          .string(),

        hireDate: yup
          .string(),

        isActive: yup.bool(),
    });
      
    const { register, handleSubmit,formState:{errors} } = useForm<IEmployee>({
        resolver: yupResolver(schema),
    });

    const submitForm=(data:any)=>{
        console.log(data);

    }
    const tableBorder={
        borderWidth:'3px',
        borderColor:'white',
        borderStyle:'solid'
    }
    return(
        <>
         <form onSubmit={handleSubmit(submitForm)}>
            <table style={tableBorder}>
                <tbody>
                    <tr>
                        <td>Full Name</td>
                        <td>

                            <Input 
                                type="text"
                                name="fullName"
                                id="fullName"
                                placeholder='Full Name'
                                label="fullName"
                                error={errors.fullName?.message}
                                register={register}
                             /> 

                        </td>
                    </tr>

                    <tr>
                        <td>Email</td>
                        <td>

                            <Input 
                                type="email"
                                name="email"
                                id="email"
                                placeholder='Email'
                                label="Email"
                                error={errors.email?.message}
                                register={register}
                             /> 

                        </td>
                    </tr>

                    <tr>
                        <td>Mobile</td>
                        <td>

                            <Input 
                                type="text"
                                name="mobile"
                                id="mobile"
                                placeholder='Mobile'
                                label="Mobile"
                                error={errors.mobile?.message}
                                register={register}
                             /> 

                        </td>
                    </tr>

                    <tr>
                        <td>City</td>
                        <td>
                            <DropDownList
                                name='city'
                                items={cityItems}
                                register={register}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td>Hire Date</td>
                        <td>
                            <Input
                                name='hireDate'
                                id='hireDate'
                                type='date'
                                placeholder='Hire Date'
                                error={errors.hireDate?.message}
                                register={register}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Gender</td>
                        <td>
                            <RadioGroup
                                items={genderItems}
                                register={register}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td>Active</td>
                        <td>
                            <CheckBox
                                name='isActive'
                                id='isActive'
                                label="Active"
                                register={register}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <button type="submit">Submit</button>
                        </td>
                        <td>
                            
                        </td>
                    </tr>
                </tbody>           
            </table>        
        </form>
        </>
    )
}