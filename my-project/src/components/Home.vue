<template>
    <div class="slidewrap">
        
        <!-- slides -->
        <div id="slide1">
        <div class="content">
            <div id="connor">connor thorson</div>
                
                <section id="scrollarrow">
                    <a href="#slide2"><span></span></a>
                </section>
                
            <!--<div id="down"></div>-->
            <h1></h1>
        </div> <!-- end content -->
        </div> <!-- end slide1 -->


        <div id="slide2">
        <div class="content2">
            <div class="flex-container">
            <div class="textcontainer">
                <h1 class="wd">About Me</h1>
                <!-- <hr width="130px" style="margin-right:90%;"> -->
                <h3 class="text">My name is Connor Thorson. I am a UI designer and front-end web developer currently living in Corvallis, Oregon. I was raised in West Des Moines, Iowa and graduated from the University of Northern Iowa with a BA in Interactive Digital Studies, and with emphases in Computer Science and Visualization.<br><br>I currently work as a web master at Mindz Eye Marketing; a marketing company based in Des Moines, Iowa. I also work as a contracted web developer at the Environmental Protection Agency.<br><br>Feel free to check out my work or say hi!</h3>
            </div> <!-- end textcontainer -->
            <div class="imgcontainer"><img id="graphic" src="/assets/img/me.jpg"></div>
            
            </div> <!-- end flex-container -->
        </div> <!-- end content -->
        </div> <!-- end slide2 -->


        <div id="slide3" data-parallax="scroll" data-image-src="/assets/img/leaves.PNG">
            
        <div class="content">
                
            <div id="anim"> <!--id anim class slideup-->
            <a href="portfolio.html" class="preview-link"><img class="myImg" src="/assets/img/pf-small.png"></a>
            </div> <!-- end anim -->
        </div> <!-- end content -->
        </div> <!-- end slide3 -->



        <div id="slide4">
        <div class="content4">
                <!-- <header id="formheader">get in touch</header>
                <form id="form" class="topBefore">
                <input id="name" type="text" placeholder="NAME">
                <input id="email" type="text" placeholder="E-MAIL">
                <textarea id="message" type="text" placeholder="MESSAGE"></textarea>
                <input id="submit" type="submit" value="GO!">
                </form> -->
            <h1 class="skills">skills</h1>
            <div class="skills-container">
                <div class="sk skill1">
                <i class="fa fa-code"></i> 
                <p class="skill-label">Front-end Technologies</p>
                <p class="skill-text">HTML5, CSS3, Sass, Javascript, jQuery, Bootstrap, NodeJS, ElectronJS</p>
                </div>
                <div class="sk skill2">
                <i class="fab fa-wordpress"></i> 
                <p class="skill-label">CMS</p>
                <p class="skill-text">Wordpress and Drupal</p>
                </div>
                <div class="sk skill3">
                <i class="fab fa-adobe"></i> 
                <p class="skill-label">Adobe Creative Cloud</p>
                <p class="skill-text">Photoshop, Illustrator, After Effects</p>
                </div>
                <div class="sk skill4">
                <i class="fab fa-sketch"></i> 
                <p class="skill-label">UI/UX Design</p>
                <p class="skill-text">Sketch, InVision, InVision Studio, Figma</p>
                </div>
            </div>
        </div> <!-- end content -->
        </div> <!-- end slide4 -->

    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style scoped>
    .slidewrap {
        height: 100vh;
        width: 100%;
    }
</style>
