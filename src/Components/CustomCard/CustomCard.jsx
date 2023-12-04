import React from "react";
// import "./CustomCard.css";
export default function CustomCard(props) {
  return (
    <div className="flex flex-column justify-center text-center my-4">
      <p className="text-5xl font-fheader text-csecondary pb-4">{props.title}</p>
      <p className="text-2xl font-ftext text-con-secondary">{props.description}</p>
    </div>
  );
}
