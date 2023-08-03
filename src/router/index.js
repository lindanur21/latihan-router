import { createWebHistory, createRouter } from "vue-router";
// Import Component2 Kalian

import Home from "@/views/Home.vue"; 
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";
import Detail from "@/views/Detail.vue";
import Produk from "@/views/Produk.vue";
import Kategori from "@/views/Kategori.vue";
import KategoriProduk2 from "@/views/KategoriProduk2.vue";
import NotFound from "@/views/NotFound.vue";
import Login from "@/views/Login.vue";

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
  // {
  //   path: "/detail",
  //   name: "Detail",
  //   component: Detail,
  // },
  {
    path: "/kategori",
    name: "Kategori",
    component: Kategori,
  },
  // {
  //   path: "/kategoriproduk2",
  //   name: "DetailE",
  //   component: KategoriProduk2,
  // },
  {
    path: "/kategoriproduk2/:id_kategori",
    name: "DetailE",
    component: KategoriProduk2,
    props: true,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    props: true,
  },
  {
    path: "/produk",
    name: "Produk",
    component: Produk,
    beforeEnter: (to, from, next) => {
      const loggedInUser = true;
      if (loggedInUser) {
        next(); //lanjutkan navigasi ke halaman produk jika sudah login
      } else {
        next("/login"); // alihkan ke halaman login jika belum login
      }
    }
  },
  {
    path: "/detail/:id_produk",
    name: "Detail",
    component: Detail,
    props: true,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound
    
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;