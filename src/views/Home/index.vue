<template>
    <div>
        <Typenav></Typenav>
        <Container></Container>
        <Todayrecommend></Todayrecommend>
        <Rank></Rank>
        <Like></Like>
        <Floor></Floor>
        <Floor></Floor>
        <Brand></Brand>
    </div>
</template>

<script>
import Typenav from '@/views/Home/Typenav'
import Container from '@/views/Home/Container'
import Todayrecommend from '@/views/Home/Todayrecommend'
import Rank from '@/views/Home/Rank'
import Like from '@/views/Home/Like'
import Floor from '@/views/Home/Floor'
import Brand from '@/views/Home/Brand'
export default {
    name: '',
    components:{
        Typenav,
        Container,
        Todayrecommend,
        Rank,
        Like,
        Floor,
        Brand
    }
}
</script>

<style scoped>

</style>