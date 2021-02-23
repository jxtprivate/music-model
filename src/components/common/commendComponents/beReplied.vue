<template lang="">
    <div class="container">
        <p v-for="item in bp" :key="item.beRepliedCommentId" style="color:#0b58b7">@{{item.user.nickname}}：<span style="color:#222;font-size:12px">{{item.content}}</span></p>
        
    </div>
</template>
<script>
export default {
    props:['bp']
}
</script>
<style lang="scss" scoped>
.container{
   p{
       width: 100%;
    //    height:30px;
       background-color: #f4f4f4;
       font-size: 13px;
       line-height: 30px;
       margin-bottom: 10px;
       padding-left: 5px;
    //    margin-left: 10px;
   } 
}
    
</style>