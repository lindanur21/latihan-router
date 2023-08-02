<template>
    <h1>Contact</h1>
</template>
<script>
import { onMounted } from 'vue';
export default {
    setup(props, context) {
        onMounted(() => {
            context.emit("id-menu", 3)
        })
    }
}
</script>