<template>
    <main>
        <img src="/app/images/watermelon.svg" alt="watermelon" title="svg">
        <p>局限性：</p>
        <ul>
            <li>图像渲染时与主界面是分离的。两者之间无法通信。主页面上的样式对svg无效。</li>
            <li>作为图像引用，大多数web浏览器不加载svg自己引用的文件，包括其他图像文件，外部脚本，甚至web字体文件</li>
            <li>根据浏览器和用户的安全设置不同，svg文件定义的脚本也可能被忽略</li>
        </ul>
    </main>
</template>

<script>
    export default {}
</script>
