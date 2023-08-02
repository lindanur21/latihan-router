<template>
    <div class="flex-container">
        <div v-for="kategori in cek" :key="kategori.id" class="card">
            <img :src="getImgSrc(kategori.img)" alt="Category Image" />
            <router-link class="container" :to="{ name: 'DetailE', params: { id_kategori: kategori.id } }">
                <h1> {{ kategori.nama }}</h1>
            </router-link>
        </div>
    </div>
</template>
<script>
import { onMounted, reactive } from 'vue';
import { kategori } from '@/assets/Kategori.js';


export default {
    setup(props, context) {
        const cek = reactive(kategori["kategori"]);

        const getImgSrc = (imgFileName) => {
            return '../src/assets/img/' + imgFileName + '';
        };

        onMounted(() => {
            context.emit("id-menu", 5);
        });


        return {
            cek,
            getImgSrc
        }
    }
}
</script>
<style scoped>
.flex-container {
    margin: 14px;
}

.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0, 2);
    transition: 0.3%;
    ;
    margin: 14px;
    min-width: 200px;
    cursor: pointer;
}

.card:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0, 2);
}

.container {
    margin: 100px;
}

.img {
    width: 250px;
    margin: 100px;
}
</style>