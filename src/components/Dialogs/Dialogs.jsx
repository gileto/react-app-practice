import React from "react";
import classes from "./Dialog.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
 return (
  <div className={classes.item}>
   <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
  </div>
 );
};

const Message = (props) => {
 return (
  <div>
   <div className={classes.message}>{props.message}</div>
  </div>
 );
};

const Dialogs = () => {
 let dialogItems = [
  { user: "Maria", id: 1 },
  { user: "Alexander", id: 2 },
 ];

 let dialogsList = dialogItems.map((dialog, i) => (
  <DialogItem name={dialog.user} id={dialog.id} key={i}></DialogItem>
 ));

 return (
  <div className={classes.dialogsWrapper}>
   <div className={classes.dialogs}>
    <div className={classes.dialogItem}>{dialogsList}</div>
   </div>
   <div className={classes.messages}>
    <Message message="Hi" />
   </div>
  </div>
 );
};

export default Dialogs;
