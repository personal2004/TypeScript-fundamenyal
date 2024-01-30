import React from "react";

export type ArrrayofObjectstype={
  names:{
    first:string;
    last:string;
  }[];
};

export type StringRecivertype={
    status:'loading' |'error' | 'pending';
};

export type ChildrenPropType={
   children:string;
};
export type JSXType={
  children:React.ReactNode;
};
export type handleClickFunction=(
  event:React.MouseEvent<HTMLButtonElement>,
  id:number
)=>void;

export type buttonrecivertype={
  handleClick:(event:React.MouseEvent<HTMLButtonElement>,id:number)=>void;
};
export type InputChangeType=(
  event:React.ChangeEvent<HTMLInputElement> | null,
  e:React.KeyboardEvent<HTMLInputElement> | null
)=>void;

export type inputpropstype={
  placeholder:string;
  value:string;
  handleChange:InputChangeType;
};
export type styleExportType={
 style:React.CSSProperties;
 value:string;
};