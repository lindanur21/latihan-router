<template>
    <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/About">About</router-link></li>
        <li><router-link to="/Contact">Contact</router-link></li>
        <li><router-link to="/Produk">Produk</router-link></li>
        <li><router-link to="/Kategori">Kategori</router-link></li>
        <li><router-link to="/Login">Login</router-link></li>
    </ul>
</template> 
<script>
import router from '../router';

export default {
    components: { router }
}
</script>
<style scoped>
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
}

li {
    float: left;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

li a:hover:not(.active) {
    background-color: green;
}

.active {
    background-color: #4CAF50;
}
</style>