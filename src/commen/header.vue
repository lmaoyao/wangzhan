<template>
    <div>
        <div class="box">
            {{title}}
        </div>
    </div>
</template>
<script>
export default {
    props:[
        "title"
    ]
}
</script>
<style scoped>
    .box{
        widows: 100%;
        height: 100px;
        background: aqua;
        text-align: center;
        line-height: 100px;
    }
</style>
