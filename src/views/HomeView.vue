<template>
    <div class="HomePage">
        <div class="half text">
            <div class="major-heading">
                <h1>I-RUSH</h1>
                <h1>CONCEPTS</h1>
                <h1>AFR</h1>
            </div>

            <div class="minor-heading">
                <h3>Your Story</h3>
                <h3>Our Design</h3>
                <h3>Africa's Pride</h3>

                <span><RouterLink to="/about"><button @click="">LET US TELL YOUR STORY</button></RouterLink></span>
            </div>
        </div>
        <div class="half illustration">
            <span>
                <img src="../assets/I-Rush-Logo.svg" alt="">
            </span>
        </div>
        <div class="glow"></div>
    </div>
</template>

<style scoped>
.HomePage{
    display: flex;
    height: 100%;
    width: 100%;
}

.half{
    width: 50%;
    height: 100%;
}

.text h3{
    text-align: right;
}

.illustration{
    display: flex;
    align-items: center;
    justify-content: center;
}

.illustration span{
    border-radius: 50%;
    /* background: radial-gradient(#999, #99999999, #99999955, transparent 75%); */
    /* background: radial-gradient(circle, #999999, #7b7b7b, #5e5e5e, #434343, #292929); */
}
.illustration img{
    height: 400px;
    /* width: 400px; */
}

.text span{
    position: relative;
    top: calc(50% - 150px);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

button{
    height: 56px;
    min-width: 180px;
    padding: 16px 32px;
    border: none;
    border-radius: 12px;
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
}
</style>