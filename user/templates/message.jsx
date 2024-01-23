{% load static %}
import React from "react";
import { Logout } from "./Logout";
import { MessageCircleChat } from "./MessageCircleChat";
import "./style.css";
export const Sidebar = () => {
 return (
 
 <div class="message">
      <div class="div">
        <div class="sidebar">
          <div class="frame">
            <div class="frame-2">
              <img class="img" src="img/message-circle-chat.svg" />
              <div class="text-wrapper">Messages</div>
            </div>
          </div>
          <div class="frame-3">
            <img class="img" src="img/logout.svg" />
            <div class="text-wrapper-2">Log out</div>
          </div>
          <div class="frame-4">
            <img class="home" src="img/home.svg" />
            <div class="text-wrapper-3">Home</div>
          </div>
        </div>
        <header class="header">
          <div class="frame-5">
            <div class="vuesax-twotone-wrapper"><img class="vuesax-twotone" src="img/notification.svg" /></div>
            <div class="frame-6">
              <div class="frame-7">
                <img class="ellipse" src="img/ellipse-35.png" />
                <div class="text-wrapper-4">John Doe</div>
              </div>
              <img class="img" src="img/caret-down.svg" />
            </div>
          </div>
          <div class="frame-8">
            <div class="frame-9">
              <img class="search-normal" src="img/search-normal.svg" />
              <div class="text-wrapper-5">Search for house</div>
            </div>
            <div class="frame-10">
              <div class="text-wrapper-6">location</div>
              <img class="location-pin-alt" src="img/location-pin-alt-1.svg" />
            </div>
          </div>
        </header>
        <div class="frame-wrapper">
          <div class="frame-11">
            <div class="frame-12">
              <img class="message-circle-chat" src="img/image.svg" />
              <div class="frame-13">
                <div class="text-wrapper-7">No Chats</div>
                <p class="p">You have not received or send anyone a message.</p>
              </div>
            </div>
            <div class="frame-14">
              <img class="img" src="img/plus.svg" />
              <div class="text-wrapper">Add a person</div>
            </div>
          </div>
        </div>
      </div>
    </div>
 );
};
