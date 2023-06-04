import React from 'react';
import { NavLink } from 'react-router-dom';

export interface ButtonMediumProps {
  label: string;
  bgColor: string;
}
 type LinkButtonType  = {
  bgColor: string,
  label: string,
  path: string
 }

export const ButtonMedium: React.FC<ButtonMediumProps> = ({ label, bgColor }) => {
  const cssClass = `px-4 py-2 rounded-md text-sm mr-2 ${bgColor}`
    return (
    <button className={cssClass}>{label}</button>
  );
};

export const LinkButton: React.FC<LinkButtonType> = ({bgColor , label , path}) => {
  const cssClassInActive = `px-4 py-2 rounded-md text-sm mr-2 ${bgColor}`
  const cssClassActive = `px-4 py-2 rounded-md text-sm mr-2 bg-green-500`


 return(
  <NavLink
  to={path}
  className={({ isActive }) =>isActive ? cssClassActive : cssClassInActive}
>
  {label}
</NavLink>

 )
}