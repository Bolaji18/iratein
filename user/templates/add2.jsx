{% load static %}
import React from "react";
import "{% static './style.css' %}";
export const Box = () => {
 return (
 <div class="add">
      <div class="overlap-group-wrapper">
        <div class="overlap-group">
          <div class="sidebar">
            <div class="frame">
              <div class="div">
                <img class="img" src="img/message-circle-chat.svg" />
                <div class="text-wrapper">Messages</div>
              </div>
            </div>
            <div class="frame-2">
              <img class="img" src="img/logout.svg" />
              <div class="text-wrapper-2">Log out</div>
            </div>
            <div class="frame-3">
              <img class="home" src="img/home.svg" />
              <div class="text-wrapper-3">Home</div>
            </div>
          </div>
          <header class="header">
            <div class="frame-4">
              <div class="vuesax-twotone-wrapper"><img class="vuesax-twotone" src="img/notification.svg" /></div>
              <div class="frame-5">
                <div class="frame-6">
                  <img class="ellipse" src="img/ellipse-35.png" />
                  <div class="text-wrapper-4">John Doe</div>
                </div>
                <img class="img" src="img/caret-down.svg" />
              </div>
            </div>
            <div class="frame-7">
              <div class="frame-8">
                <img class="search-normal" src="img/search-normal.svg" />
                <div class="text-wrapper-5">Search for house</div>
              </div>
              <div class="frame-9">
                <div class="text-wrapper-6">location</div>
                <img class="location-pin-alt" src="img/location-pin-alt-1.svg" />
              </div>
            </div>
          </header>
          <div class="frame-wrapper">
            <div class="frame-10">
              <div class="frame-11">
                <img class="message-circle-chat" src="img/image.svg" />
                <div class="frame-12">
                  <div class="text-wrapper-7">No Chats</div>
                  <p class="p">You have not received or send anyone a message.</p>
                </div>
              </div>
              <div class="div-wrapper"><div class="text-wrapper">Add a mate</div></div>
            </div>
          </div>
          <div class="rectangle"></div>
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
 <input class="div-wrapper-3" type="submit" value="Add Person"style="display: flex; width: 150px; height: 50px; align-items: center; justify-content: center; gap: 8px; padding: 9px 8px; position: relative; border-radius: 8px; border: 1px solid; border-color: var(--gray-5);">
 </div>
 </div>
 </div>
  </form>
        </div>
      </div>
    </div>
 );
};
