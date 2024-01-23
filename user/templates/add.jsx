{% load static %}
import React from "react";
import "{% static './style.css' %}";
export const Box = () => {
 return (
<div class="framess">
 <div class="text-wrapper">Invite a Person</div>
 <div class="divs">
 <div class="div-2">
 <div class="div-3">
      <form method="POST" enctype="multipart/form-data" >
          {%csrf_token %}

 <div class="div-wrapper"><div class="text-wrapper-3">{{form}}</div></div>
 </div>

 </div>
 <div class="div-4">
 <input class="div-wrapper-2" type="button" value="Cancel" style="display: flex; width: 150px; height: 50px; align-items: center; justify-content: center; gap: 8px; padding: 9px 8px; position: relative; border-radius: 8px; border: 1px solid; border-color: var(--gray-5);">
 <input class="div-wrapper-3" type="submit" value="Add user"style="display: flex; width: 150px; height: 50px; align-items: center; justify-content: center; gap: 8px; padding: 9px 8px; position: relative; border-radius: 8px; border: 1px solid; border-color: var(--gray-5);">
 </div>
 </div>
 </div>
 );
};
