<template>
    <div>
        <header>
            <div class='hamburger' @click="toggleMenu()">
                <div class='line-dark'></div>
                <div class='line-dark'></div>
            </div>
            <div class='menu'>
                <div class='menu-item menu-home'><router-link class="hmenu" to="/" @click="closeMenu()">home</router-link></div>
                <div class='menu-item menu-about'><router-link class="hmenu" to="index.html#slide2">about me</router-link></div>
                <div class='menu-item menu-skills'><router-link class="hmenu" to="index.html#slide4">skills</router-link></div>
                <div class='menu-item menu-portfolio'><router-link class="hmenu" to="/portfolio" @click="closeMenu()">portfolio</router-link></div>
                <!-- <div class='menu-item menu-resume'><a class="hmenu" href="#">resume</a></div> -->
            </div>
        </header>
        <main class="content">
            <h1 class="work-title">work</h1>

            <!-- card section -->
            <div class="card-container">
                <div class="card pnt-card">
                    <a href="#pnt-modal">
                        <img class="cardimgcover" src="/assets/img/pnt-cover.png" />
                        <span class="card-text-overlay">Proud and Torn</span>
                    </a>
                    <div id="pnt-modal" class="modal-overlay">
                        <div class="modal">
                        <h2 class="modal-title">Proud and Torn</h2>
                        <a href="#" class="close">&times;</a>
                
                        <div class="modal-content">
                            <div class="modal-text">Proud and Torn is a visual novel detailing Hungarian history from the point of view of a peasant family in the Hungarian countryside. The project contains hundreds of photographs that were altered, isolated into parts, put into animation, or crafted into photomontages. The project is designed to resemble a personalized scrapbook but utilizes groundbreaking web design tactics.
                            <br>My role in the project was mainly comprised of optimizing each page for mobile devices, but I also had tasks that included making pages ADA compliant, converting SVG images to selectable text, and transferring inline styles to external SCSS stylesheets.
                            <br>You can view this project at <a href="https://proudandtorn.org">proudandtorn.org</a>
                            </div>

                            <div class="modal-images">
                                <img src="/assets/img/pnt-fullscreen.png" alt="">
                                <img src="/assets/img/pnt-collage.svg" alt="">
                            </div>
                
                        </div>
                        </div>
                    </div>
                </div>

                <div class="card ava-card">
                    <a href="#ava-modal">
                        <img class="cardimgcover" src="/assets/img/ava-cover.png" />
                        <span class="card-text-overlay">Ava</span>
                    </a>
                    <div id="ava-modal" class="modal-overlay">
                        <div class="modal">
                        <h2 class="modal-title">Ava</h2>
                        <a href="#" class="close">&times;</a>
                
                        <div class="modal-content">
                            <div class="modal-text">Ava is a UI design project I created using InVision Studio to experiment with a more 'cutting edge' modern web design layout. It showcases a photography portfolio with a landing page and three main pages showcasing the photographer's work.
                            <br>I decided to go with a large, bold serif typography called AppleMyungjo to draw attention to the titles, and create a contrast from the simple icons/lines of the site.
                            </div>

                            <div class="modal-images">
                                <video class="avavid" controls preload="none" loop muted playsinline poster="assets/img/ava-cover.png">
                                    <source src="assets/img/avarec.mp4" type="video/mp4">
                                </video>
                                <img src="/assets/img/ava-forest.png" alt="">
                                <img src="/assets/img/ava-menu.png" alt="">
                                <img src="/assets/img/ava-about.png" alt="">
                                <img src="/assets/img/ava-workflow.png" alt="">
                            </div>
                
                        </div>
                        </div>
                    </div>
                </div>

                <div class="card kohls-card">
                    <a href="#kohls-modal">
                        <img class="cardimgcover" src="/assets/img/kohls-cover2.png" />
                        <span class="card-text-overlay">Kohls Re-brand</span>
                    </a>
                    <div id="kohls-modal" class="modal-overlay">
                        <div class="modal">
                        <h2 class="modal-title">Kohls Re-brand</h2>
                        <a href="#" class="close">&times;</a>
                
                        <div class="modal-content">
                            <div class="modal-text">For this project, we were required to create a website using parallax, and I decided to remake the Kohl’s website to make it look like a high-end fashion brand. This was created using HTML, CSS, and Javascript.</div>
                            <div class="modal-images">
                                <!-- <img src="/assets/img/parallaxvid.gif" alt=""> -->
                                <video class="kohlsvid" controls preload="none" loop muted playsinline poster="assets/img/kohlsposter.png">
                                    <source src="assets/img/parallaxrec.mp4" type="video/mp4">
                                </video>
                            </div>
                        </div>
                            
                        </div>
                    </div>
                </div>
                <div class="card vou-card">
                    <a href="#vou-modal">
                        <img class="cardimgcover" src="/assets/img/vouloir-cover.png" />
                        <span class="card-text-overlay">Vouloir</span>
                    </a>
                    <div id="vou-modal" class="modal-overlay">
                        <div class="modal">
                        <h2 class="modal-title">Vouloir</h2>
                        <a href="#" class="close">&times;</a>
                
                        <div class="modal-content">
                            <div class="modal-text">Vouloir is a fashion magazine that I created using Adobe Photoshop and Indesign. This magazine was the final project for a college course titled “Editing and Design”, in which each student was required to create a complete 25+ page magazine containing specific elements such as advertisements, a cover story, photo story, timeline, etc. 
                            
                            </div>

                            <div class="modal-images">
                                <img src="/assets/img/vouloir4.png" alt="">
                                <img src="/assets/img/vouloir1.png" alt="">
                                <img src="/assets/img/vouloir2.png" alt="">
                                <img src="/assets/img/vouloir3.png" alt="">
                            </div>
                
                        </div>
                        </div>
                    </div>
                </div>
                <div class="card disc-card">
                    <a href="#disc-modal">
                        <img class="cardimgcover" src="/assets/img/disc-cover.png" />
                        <span class="card-text-overlay">Community Decision Application</span>
                    </a>
                    <div id="disc-modal" class="modal-overlay">
                        <div class="modal">
                        <h2 class="modal-title">Community Decision Application</h2>
                        <a href="#" class="close">&times;</a>
                
                        <div class="modal-content">
                            <div class="modal-text">This is a desktop application I have been working on, built on the ElectronJS framework. The technologies used include HTML, CSS, JavaScript, jQuery, Python (Django), and NodeJS.
                            <br>I am the main user interface designer and one of the front end developers for this project. I created a series of low and high fidelity mockups for the new design of the application based on feedback from team members, and helped incorporate the design into the development version of the project.
                            </div>
                            <br>

                            <div class="modal-images">
                                <span class="modal-text">This is the first alpha version.</span>
                                <img src="/assets/img/disc-alpha.png" alt="">
                                <span class="modal-text">These are the first and second high-fidelity mockups I created for the re-designed interface, made in InVision Studio.</span>
                                <img src="/assets/img/disc-mockup1.png" alt="">
                                <img src="/assets/img/disc-mockup2.png" alt="">
                                <span class="modal-text">Here are some shots of the current beta version.</span>
                                <img src="/assets/img/disc-snapshot.png" alt="">
                                <img src="/assets/img/disc-domains.png" alt="">
                                <img src="/assets/img/disc-popup.png" alt="">
                            </div>
                
                        </div>
                        </div>
                    </div>
                </div>
                <div class="card infographic-card">
                    <a href="#infographic-modal">
                        <img class="cardimgcover" src="/assets/img/infographic-cover.png" />
                        <span class="card-text-overlay">Dynamic Infographic</span>
                    </a>
                    <div id="infographic-modal" class="modal-overlay">
                        <div class="modal">
                        <h2 class="modal-title">Dynamic Infographic</h2>
                        <a href="#" class="close">&times;</a>
                
                        <div class="modal-content">
                            <div class="modal-text">This project is an experimental dynamic infographic showing the most popular alcoholic drinks for different countries. This was made in a course called “Advanced Digital Visualization”, where we each had to create a static and dynamic infographic using any digital medium we preferred. This was coded from scratch using HTML, CSS, and Javascript.
                            </div>

                            <div class="modal-images">
                                <!-- <img src="/assets/img/infographic.gif" alt=""> -->
                                <video class="infographicvid" controls preload="none" loop muted playsinline poster="assets/img/infographicposter.png">
                                    <source src="assets/img/infographicrec.mp4" type="video/mp4">
                                </video>
                            </div>
                
                        </div>
                        </div>
                    </div>
                </div>
                <div class="card fortepan-card">
                    <a href="#fortepan-modal">
                        <img class="cardimgcover" src="/assets/img/fortepan-cover.png" />
                        <span class="card-text-overlay">Fortepan Iowa</span>
                    </a>
                    <div id="fortepan-modal" class="modal-overlay">
                        <div class="modal">
                        <h2 class="modal-title">Fortepan Iowa</h2>
                        <a href="#" class="close">&times;</a>
                
                        <div class="modal-content">
                            <div class="modal-text">Fortepan Iowa is a website containing thousands of high quality, locally-donated images showcasing the history of Iowa. Each image is part of the public domain and free to use, and are scanned in by students at the University of Northern Iowa. This project is a sister website to Fortepan Hungary, a pre-existing Hungarian project showcasing the same types of images.
                            <br>I was tasked with re-designing this website using Sketch and InVision. I made a total of four working mockups that were presented to the group comprised mainly of professors who worked on other aspects of the Fortepan re-design. These are some shots from the mockups I created.
                            <br>As of right now, the site has yet to be updated with a new design, but you can view the project at <a href="http://fortepan.us">fortepan.us</a>
                            </div>

                            <div class="modal-images">
                                <img src="/assets/img/fortepan-menu.svg" alt="">
                                <img src="/assets/img/fortepan-timeline.svg" alt="">
                                <img src="/assets/img/fortepan-login.svg" alt="">
                                <img src="/assets/img/sketch_workflow.png" alt="">
                            </div>
                
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    </div>
</template>

<script>
export default {
    name: 'Portfolio',
    data: () => {
        return {
            isMenuOpen: false
        }
    },
    methods: {
        openMenu(){
            menu.css("left", "0px");
            line.css("background", "#FFF");
            $('.line, .line-dark').addClass('active');
            this.isMenuOpen = true;
        },
        closeMenu(){
            menu.css("left", "-320px");
            line.css("background", "#fff");
            $('.line, .line-dark').removeClass('active');
            this.isMenuOpen = false;
        },
        toggleMenu() {
            if (this.isMenuOpen == true) {
                this.closeMenu()
            } else {
                this.openMenu()
            }
        }
    }
}
</script>

<style scoped>
  
</style>
