{% load static %}
import React from "react";
import { GoogleAlt } from "./GoogleAlt";
import "./style.css";

export const Login = () => {
  return (
     <div class="login">
      <div class="div">
        <div class="frame">
          <div class="frame-2">
            <div class="text-wrapper">👋Welcome back</div>
            <div class="text-wrapper-2">Login to your account</div>
          </div>
          <div class="frame-3">
            <img class="solid-brands-google" src="{% static 'google.png' %}" />
            <div class="text-wrapper-3">Continue with Google</div>
          </div>
          <img class="line" src="img/line-1.svg" />
          <form method="POST" enctype="multipart/form-data" >
                  {%csrf_token %}
          <div class="frame-4">
            <div class="frame-5">
              <div class="frame-6">
                {{form}}
              </div>
              <div class="frame-6">

              </div>
              <div class="text-wrapper-6"><a href="create">Create new account</a></div>
            </div>
            <input class="frame-7" type="submit" value="Log In">
          </div>
          </form>
        </div>
        <div class="frame-8">
          <img class="home" src="{% static 'homepage.png' %}" />
          <div class="text-wrapper-8">Home</div>
        </div>
      </div>
    </div>
  );
};


