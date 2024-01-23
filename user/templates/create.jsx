{% load static %}
import React from "react";
import "{% static './style.css' %}";

export const SignUp = () => {
  return (
   <div class="sign-up">
      <div class="div">
          <form method="POST" enctype="multipart/form-data" >
                  {%csrf_token %}
        <div class="frame">
          <div class="frame-2">
            <div class="text-wrapper">Sign Up</div>
            <div class="text-wrapper-2">Create an account</div>
          </div>
          <div class="frame-3">
            <div class="frame-4">
              <div class="frame-5">
               <div class="">{{form}}</div>
              </div>
              <div class="frame-5">

              </div>


            </div>
             <input class="frame-6" type="submit" value="Sign up">
          </div>
        </div>
         </form>
        <div class="frame-7">
          <img class="home" src="{% static 'homepage.png' %}" />
          <div class="text-wrapper-7">Home</div>
        </div>
      </div>
    </div>
  );
};
