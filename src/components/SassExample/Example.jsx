import React from "react";
import "./Example.scss";

export default function Example() {
  return (
    <>
      <div>
        <p>Example Update</p>
        <p className="font">Example</p>
      </div>
      <nav>
        <ul>
          <li>123</li>
          <li>
            <a>456</a>
          </li>
        </ul>
      </nav>
      <p className="base">base import</p>
      <p className="info">info</p>
      <p className="alert">info</p>
      <p className="success">info</p>
      <p className="message">message</p>
      <p className="error">error</p>
      <p className="warning">warning </p>
      <p className="square-av">square </p>
      <p className="circle-av">circle </p>
      <div className="sidebar">사이드바</div>
      <div className="gray">gray</div>
      <div className="button">버튼</div>
    </>
  );
}
