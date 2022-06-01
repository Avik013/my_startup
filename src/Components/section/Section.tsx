import React from "react";
import { ISection, IContentItem } from "../../interfaces/interfaces";
import { Input } from "../input/Input";
import { FiCheck } from "react-icons/fi";

export const Section: React.FC<ISection> = (props: ISection) => {

  return (
    <>
      <p className="my_startup__list-header">
        <span className="number">{props.id}</span>
        <span className="title">{props.title}</span>
        {
          props.list.findIndex((item: IContentItem) => !item.isChecked) < 0 && <span className="done"><FiCheck/></span>
        }
      </p>
      <div className="my_startup__list-items">
        {props.list.map((item: IContentItem) => (
          <Input
            key = {item.id}
            id= {item.id}
            title={item.title}
            isChecked={item.isChecked}
            sectionId = {props.id}
          />))
        }
      </div>
    </>
  )
}
