{% load static %}
import React from "react";
import { Link } from 'react-router-dom';
import { CaretDown } from "./CaretDown";
import { LocationPinAlt1 } from "./LocationPinAlt1";
import { Logout } from "./Logout";
import { MessageCircleChat } from "./MessageCircleChat";
import { Notification } from "./Notification";
import { Plus } from "./Plus";
import { SearchNormal } from "./SearchNormal";
import "{% static './style.css' %}";

export const Message = () => {
  return (
    <div class="chating">
      <div class="div">
        <div class="sidebar">
          <div class="frame">
            <div class="frame-2">
              <img class="img" src="{% static 'icon.png' %}" />
             <link to="#" style="border:transparent;  text-decoration: none;" > <button class="frame-2" id="toggleBtn" type="submit" value="Messages" style="border:transparent; background-color: transparent; text-decoration: none; color:#fff">Messages</button></link>
             <div class="framex">

             <button class="frame-2" id="toggleBtn2" type="submit" value="Messages" style="border:transparent; background-color: transparent; text-decoration: none; color:#fff">< link to="{% url 'add2' %}" style="text-decoration:none; color:#fff">Add a person</link></button>
             </div>

            </div>
          </div>
          <div class="frame-3">

            <div class="text-wrapper-2"><a href="{% url 'logout' %}">Log out</a></div>
          </div>
          <div class="frame-4">
            <img class="home" src="{% static 'homepage.png' %}" />
            <div class="text-wrapper-3">Home</div>
          </div>
        </div>

         <header class="header">
          <div class="frame-5">
            <div class="frame-6">
              <div class="frame-7">

                <div class="text-wrapper-4">{{ request.user.username }}</div>
              </div>

            </div>
          </div>
          <div class="frame-8">
            <div class="frame-10">

            </div>
          </div>
        </header>
        <div class="frame-11">
          <div class="CHATS">
            <div class="frame-wrapper">
              <div class="frame-12">
                <div class="text-wrapper-7">Inbox</div>

              </div>
            </div>

            <div class="frame-13">
              <div class="frame-14">
                <div class="frame-15"></div>
                <div class="frame-16">
                  <div class="frame-17">
                          {% for x in texts reversed %}

                       {% if request.user.username == x.receiver %}

                    <a href="{{x.randoms}}/{{x.sender}}"><div class="text-wrapper-8" style="text-decoration: underline;">{{x.sender}}</div>
                    <p class="p"></p></a>
                  {% endif %}
                  {% if request.user.username == x.sender %}

                    <link to="{{x.randoms}}/{{x.receiver}}"><div class="text-wrapper-8" style="text-decoration: underline;">{{x.receiver}}</div></link>
                    <p class="p"></p></a>
                  {% endif %}
                            {% endfor %}



                <link to="#"><div class="text-wrapper-8"></div>
                    <p class="p"></p></link>

                  </div>


                </div>
              </div>



            </div>





          <div class="frame-22">
            <div class="frame-23">
              <div class="text-wrapper-11">Nov 23, 2023</div>
              <div class="frame-24">
                <img class="rectangle" src="img/rectangle-15.png" />
                <div class="frame-25">
                  <div class="frame-26"><div class="text-wrapper-12">2 Bedroom Duplex</div></div>
                </div>
              </div>
            </div>
            <div class="frame-27">
              <div class="frame-28">
                <div class="frame-29">
                  <div class="frame-30"></div>
                  <div class="frame-31">
                    <div class="text-wrapper-13">Abraham</div>
                    <div class="text-wrapper-14">Online</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="frame-32">
              <p class="text-wrapper-15"></p>sender</p>
              <div class="text-wrapper-16">12:00pm</div>
            </div>
            <div class="frame-33">
              <p class="text-wrapper-15">{{x.content}}</p>
              <div class="text-wrapper-17">12:00pm</div>
            </div>

            <div class="frame-34">
              <div class="text-wrapper-18">Write your message</div>
              <img class="send" src="{% static 'icons.png' %}" />
            </div>

          </div>

        </div>

      </div>
    </div>
      );
      };
    </div>
  );
};


