<template>
    <div class="services">
        <div class="half">
            <h1>OUR SERVICES</h1>

        <h5>Bringing Creativity & Technology Together</h5>
        <p>
            At I-Rush, we offer a wider range of creative and digital services tailored to help businesses stand out, communicate effectivly and thrive in today's competitive world.
        </p>

        <ul>
            <h5>Graphic Design & Branding</h5>
            <br>
            <li>Logo Design - Create a memorable brand identity.</li>
            <li>Business Cards & Stationery - Professionally designed materials.</li>
            <li>Flyers & Brochures - Informative and eye-catching designs</li>
            <li>Social Media Graphics - Engaging visuals for online presence.</li>
            <li>Packaging Design - Custom designs for product branding.</li>
            <br>
            <br>
            <h5>Why choose us?</h5>
            <p>
                We craft visually stunning and strategically designed graphics to enhance your brand identity and visibility.
            </p>
                
        </ul>
        <ul>
            <h5>Printing Services</h5>
            <br>
            <li>High-Quality Digital & Offset Printing</li>
            <li>Business Cards, Posters & Banners</li>
            <li>Branded Merchendise (T-shirts, Mugs, Pens etc)</li>
            <li>Books, Magazines and Reports Printing</li>
            <br>
            <br>
            <h5>Why Choose Us?</h5>
            <p>We use the best printing technology to ensure sharp details, vibrant colours and premium finishes</p>
        </ul>
        <ul>
            <h5>Animation & Motion Graphics</h5>
            <br>
            <li>2D & 3D Animation - Eye-catching animated content</li>
            <li>Explainer videos - Tell your story with visuals</li>
            <li>Logo Animation - Make your brand dynamic</li>
            <li>Advertising & Social Media Animations - Boost engagement</li>
            <br>
            <br>
            <h5>Why Choose Us?</h5>
            <p>
                We create responsive, fast and user-friendly websites designed to enhance your brand and boost online growth.
            </p>
        </ul>
        <ul>
            <h5>Web Design & Development</h5>
            <br>
            <li>Custom Website Design - Unique and modern UI/UX</li>
            <li>E-Commerce websites - Sell products online seamlessly</li>
            <li>Portfolio & Corporate Websites - Showcase your business.</li>
            <li>SEO & Performance Optimization - Rank higher in searches.</li>
            <li>Website Maintenance & Support - Keep your site running smoothly.</li>
            <br>
            <br>
            <h5>Why Choose Us?</h5>
            <p>
                We create responsive, fast and user-friendly websites designed to enhance your brand and boost online growth.
            </p>
        </ul>

        <h5>Ready to Elevate your brand?</h5>
        <p>Let's design, print, animate and develop something amazing for you.</p>
        <p>Call us Today | Email us | Visit our office</p>
        </div>
        <div class="half illustration">
            <span>
                <img src="../assets/Services.svg" alt="">
            </span>
        </div>
        <div class="glow"></div>
    </div>
</template>
<style>
.services{
    display: flex;
    height: 100%;
}

.half{
    width: 50%;
    height: 100%;
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
</style>