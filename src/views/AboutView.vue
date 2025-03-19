<template>
    <div class="about">
        <div class="half text">
            <h1>ABOUT US</h1>
            <h5>Transforming Ideas into impactful Digital Experiences</h5>
            <p>
                At I-Rush Concepts Afr, We believe in the power of creativity, technology and African ingenuity. As a dynamic graphic design, printing, animation and web development company, we specialize in bringing ideas to life with stunning visuals, seamless digital experiences and innovative solutions tailored to your needs.
            </p>

            <ul>
                <h5>Our Craft</h5>
                <li>
                    <h6>Graphic Design & Branding</h6>
                    <br>
                    <p>
                        We craft bold and memorable visual identities that define brands. From logos to marketing materials, we ensure your brand stands out in a competitive market.
                    </p>
                </li>
                <li>
                    <h6>Printing Services</h6>
                    <br>
                    <p>
                        Quality is everything. We provide high-quality prints, from business cards to banners, ensuring that every detail is sharp and every colour is vibrant.
                    </p>
                </li>
                <li>
                    <h6>Animation & Motion Graphics</h6>
                    <br>
                    <p>
                        We create captivating animations that tell stories, engage audiences and bring static designs to life with movement and emotion.
                    </p>
                </li>
                <li>
                    <h6>Web Design & Development</h6>
                    <br>
                    <p>
                        We design and build modern, fast and responsive websites that align with your brand and enhance your online presence. Whether you need a corporate website, an e-commerce store or a custom platform, we deliver cutting-edge solutions.
                    </p>
                </li>
            </ul>
            <ul>
                <li>African Creativity at its Best - Our designs and solutions reflect the vibrant and diverse spirit of Africa.</li>
                <li>Quality & Innovation - We use the latest tools and techniques to ensure world-class results</li>
                <li>Customer-Centric Approach - Every project is tailored to meet our clients' needs and exceed expectations.</li>
                <li>One-Stop solution - From branding to development, print to digital, we provide a complete creative package under one roof.</li>
            </ul>

            <h5>Lets Build Something Amazing!</h5>
            <p>
                Whether you need a stunning logo, a high-impact website, engaging animations or high-quality prints, I-rush is here to turn your vision into reality.
                <br>
                <br>
                Get in touch with us today and let's create something extraordinary!
            </p>
        </div>
        <div class="half illustration">
            <span>
                <img src="../assets/About.svg" alt="">
            </span>
        </div>
        <div class="glow"></div>
    </div>
</template>

<style scoped>
.about{
    display: flex;
    position: relative;
    left: 0;
}

.half{
    width: 50%;
    height: 100%;
}

.illustration{
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.illustration span{
    border-radius: 50%;
    /* background: radial-gradient(circle, #999999, #7b7b7b, #5e5e5e, #434343, #292929); */
}
.illustration img{
    height: 400px;
    position: fixed;
    right: 0;
    top: 30%;
    transform: translateX(-30%);
    z-index: -1;
}

.glow{
    position: fixed;
    right: 0;
    transform: translateX(-30%);
    z-index: -10;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: #fff;
    filter: blur(100px);
    animation-name: pulsate;
    animation-duration: 3s;
    animation-iteration-count: infinite;
}

@keyframes pulsate{
    0%{filter: blur(100px);}
    10%{filter: blur(120px);}
    20%{filter: blur(140px);}
    30%{filter: blur(160px);}
    40%{filter: blur(180px);}
    50%{filter: blur(200px);}
    60%{filter: blur(180px);}
    70%{filter: blur(160px);}
    80%{filter: blur(140px);}
    90%{filter: blur(120px);}
    100%{filter: blur(100px);}
}

@media only screen and (max-width: 425px) {
    html, body, .HomePage{
        display: block;
        height: 100%;
        width: 100%;
        overflow: hidden;
    }

    .HomePage .half{
        border: 2px solid;
        width: 100%;
    }

    .major-heading{
        height: 30%;
        width: 100%;
    }

    .minor-heading{
        height: 70%;
        width: 100%;
        background: #49494990;
        backdrop-filter: blur(10px);
    }

    h1{
        font-size: 32px;
    }

     h3{
        font-size: 24px;
     }

     p{
        font-size: 18px;
     }
}
</style>