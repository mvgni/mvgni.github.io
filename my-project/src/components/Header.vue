<template>
    <header>
        <div class='hamburger' style="mix-blend-mode: difference;">
          <div class='line'></div>
          <div class='line'></div>
        </div>
        <div class='menu'>
            <div class='menu-item menu-home'><a class="hmenu" href="#slide1">home</a></div>
            <div class='menu-item menu-about'><a class="hmenu" href="#slide2">about me</a></div>
            <div class='menu-item menu-skills'><a class="hmenu" href="#slide4">skills</a></div>
            <div class='menu-item menu-portfolio'><a class="hmenu" href="portfolio.html">portfolio</a></div>

        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    data: () => {
        return {

        }
    }, 
    props: {
     
    }, 
    methods: {
        
    }
}
</script>

<style scoped>

</style>
