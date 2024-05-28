import { ComponentPropsWithoutRef } from 'react';

type ButtonProps = {
  el: 'button';
} & ComponentPropsWithoutRef<'button'>;

type AnchorProps = {
  el: 'anchor';
} & ComponentPropsWithoutRef<'a'>;

const Button = (props: ButtonProps | AnchorProps) => {
  if (props.el === 'anchor') {
    //Typescript knows that here is achor check..so it will assign AnchorProps
    return <a className="button" {...props}></a>;
  }
  return <button className="button" {...props}></button>;
};

export default Button;
