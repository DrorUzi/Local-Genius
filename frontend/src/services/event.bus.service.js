'use strict';
import Vue from 'vue'

export const eventBus = new Vue();

window.eventBus = eventBus;
