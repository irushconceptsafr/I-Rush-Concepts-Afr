<template>
    <div class="HomePage">
        <div class="half text">
            <h1>I-RUSH</h1>
            <h1>CONCEPTS</h1>
            <h1>AFR</h1>

            <h3>Your Story</h3>
            <h3>Our Design</h3>
            <h3>Africa's Pride</h3>

            <span><RouterLink to="/about"><button @click="">LET US TELL YOUR STORY</button></RouterLink></span>
        </div>
        <div class="half illustration">
            <span>
                <img src="../assets/I-Rush-Logo.svg" alt="">
            </span>
        </div>
    </div>
</template>

<style scoped>
.HomePage{
    display: flex;
    height: 100%;
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
    background: radial-gradient(circle, #999999, #7b7b7b, #5e5e5e, #434343, #292929);
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
</style>