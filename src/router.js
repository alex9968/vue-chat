import Vue from 'vue'
import Router from 'vue-router'
//import Meta from "vue-meta"
import About from "./components/About"
import Home from "./components/Home"

Vue.use(Router)
//Vue.use(Meta)

export function createRouter(){
  return new Router({
    mode: "history",
    routes: [
      {
        path: "/",
        name: "home",
        component: Home
      },
      {
        path: "/about",
        name: "about",
        component: About
      }
    ]
  })
}
