import { createWebHistory, createRouter } from "vue-router";
// Import Component2 Kalian

import Home from "@/views/Home.vue"; 
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";
import Detail from "@/views/Detail.vue";
import Produk from "@/views/Produk.vue";
import Kategori from "@/views/Kategori.vue"
import KategoriProduk2 from "@/views/KategoriProduk2.vue"
import NotFound from "@/views/NotFound.vue"

const routes = [ 
  {
    path: "/", 
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/detail",
    name: "Detail",
    component: Detail,
  },
  {
    path: "/produk",
    name: "Produk",
    component: Produk,
  },
  {
    path: "/kategori",
    name: "Kategori",
    component: Kategori,
  },
  {
    path: "/kategoriproduk2",
    name: "DetailE",
    component: KategoriProduk2,
  },
  {
    path: "/detail/:id_produk",
    name: "Detail",
    component: Detail,
    props: true
  },
  {
    path: "/kategoriproduk2/:id_kategori",
    name: "DetailE",
    component: KategoriProduk2,
    props: true
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
    
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;