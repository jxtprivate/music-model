<template lang="">
    <div class="container">
        <div class="choice">
            <div class="btn1">新歌速递</div>
            <div class="btn2">新碟上架</div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .container{
        position: relative;
        width: 1100px;
        margin: 20px 100px;
    }
    .choice{
        width: 160px;
        margin: 0px auto;
        display: flex;
        height: 25px;
        border-radius: 30px;
        border: 1px solid #aaa;
        // line-height: 25px;
        .btn1{
            width: 80px;
            height: 25px;
            // background-color: #f4f4f4;
            font-size: 12px;
            text-align: center;
            line-height: 25px;
            border-radius: 13px;
        }
        .btn1:hover,.btn2:hover{
            cursor: pointer;
            background-color: #f4f4f4;
        }
        .btn2{
            width: 80px;
            height: 25px;
            // background-color: #f4f4f4;
            font-size: 12px;
            text-align: center;
            line-height: 25px;
            border-radius: 13px;
            transition: .5s;
        }
    }
</style>