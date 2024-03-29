import React from "react";
import { ErrorMessage , useField } from "formik";

export const TextField =({label, ...props})=>{
    const [field,meta] =useField(props);
  
    return(
    <div>
        <label className= "mt-3" htmlFor={field.name}>{label}</label>
        <input className={`form-control shadow-none ${meta.touched &&  meta.error && "is- invalid"}`}
        {...field}{...props}
        autoComplete="off"
        ></input>
        <ErrorMessage component="div" name={field.name} className="error"/>
    </div>
)
}
