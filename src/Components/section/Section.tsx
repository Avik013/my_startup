import React from "react";
import {ISection} from "../../interfaces/interfaces";
import { Input } from "../input/Input";
import { FiCheck } from "react-icons/fi";
import { Context } from "../../context/Context";


export const Section: React.FC<ISection> = (props: ISection) => {
  const context = React.useContext(Context);

  return (
    <div>
      <p className="my_startup__list-header">
        <span className="number">{props.id}</span>
        <span className="title">{props.title}</span>
        {// @ts-ignore
          (context.store[`${props.title.toLowerCase()}_checked_count`] === context.store[`${props.title.toLowerCase()}_count`]) && <span className="done">{<FiCheck/>}</span>}
      </p>
      <div className="my_startup__list-items">
      {props.list.map((item: string, index: number) => (
          <Input
            key = {index}
            title = {item}
            section_name = {props.title}
            section_id ={props.id}
          />
        ))
      }
      </div>
    </div>
  )
}
