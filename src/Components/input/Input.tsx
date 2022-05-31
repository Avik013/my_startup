import React from "react";
import {IInput} from "../../interfaces/interfaces";
import { Context } from "../../context/Context";

export const Input: React.FC<IInput> = (props: IInput) =>
{
  const [isChecked, setIsChecked] = React.useState<boolean>(false)
  const context = React.useContext(Context);
  const onChangeHandler = () =>
  {
    let previousValue = null;
    if (isChecked)
    {
      // @ts-ignore
      previousValue = context.store[`${props.section_name.toLowerCase()}_checked_count`] -= 1;
    }
    else
    {
      // @ts-ignore
      previousValue = context.store[`${props.section_name.toLowerCase()}_checked_count`] += 1;
    }
    // @ts-ignore
    if (previousValue === context.store[`${props.section_name.toLowerCase()}_count`])
    {
      context.setCompleteSectionIds([...context.completeSectionIds, props.section_id]);
      if (context.completeSectionIds.length + 1 === (Object.keys(context.store).length / 2))
      {
        fetch('https://uselessfacts.jsph.pl/random.json')
          .then(response => response.json())
          .then(data => {
            alert(data.text);
            window.location.reload();
          });
      }
    }
    context.setStore({ ...context.store, [`${props.section_name.toLowerCase()}_checked_count`]: previousValue })
    setIsChecked(!isChecked)
  }
  const disableHandler = () => {
    return !context.completeSectionIds.includes(props.section_id - 1) && props.section_id !== 1;
  }
  return (

      <label className="item__label">
        <input className="item__checkbox" onChange={() => onChangeHandler()} type={"checkbox"} checked={isChecked} disabled={disableHandler()}/>
        {props.title}
      </label>
  )
}
