// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import HelloController from "./hello_controller"
application.register("hello", HelloController)

import ComboSelectController from "./combo_select_controller.js";
application.register("combo-select", ComboSelectController);

import DropdownController from "./dropdown_controller.js";
application.register("dropdown", DropdownController);

import ModalController from "./modal_controller.js";
application.register("modal", ModalController);

import TabController from "./tabs_controller.js";
application.register("tabs", TabController);

import NavController from "./nav_controller.js";
application.register("nav", NavController);

import TooltipController from "./tooltip_controller.js";
application.register("tooltip", TooltipController);
