## Login登录页面 基本逻辑跳转以及接口处理已完成！

## userInfo用户个人信息页完成，包括查看个人信息，以及修改信息并存库同步更新，后续可继续优化用户体验

## 单页面程序，头部header栏和Asider侧边栏，footer底栏不变，mainer主栏用于切换路由，包括子路由嵌套等，局部页面切换多个组件

## home首页处理，Asider局部样式完成，包括子路由跳转
+ 推荐歌单渲染完毕

## 歌单详情页，设置为/home路径下的子路径，用以切换整个mainer部分的路由

## array.splice(start,end)返回数组的部分，不修改原数组

## element-ui 使用时，如需修改样式，可先在浏览器定位到对应标签，复制样式选择器，再在其中修改,加上scoped无法修改，须在去掉scoped或使用/deep/穿透修改样式，sass、scss不能使用/deep/ 》》》查阅文档。

## 渲染从后端获取的三层数据时，如不加处理，会产生错误，即报错undefined，但正常渲染，此时需要在渲染标签的外层嵌套一层div，在div上绑定v-if，判断第二层数据是否存在，eg：
+ div v-if="data.creator">img>{{ data.creator.img }}/img>/div>
+ 包括访问二层数组，也是如此，data.results[0]

## 从后台获取数据是异步操作，如需对得到的数据进行包装，须在异步操作方法内部的回调里调用包装函数，否则有问题

## 今天做了下性能优化，主要体现在ajax请求数量下降，提高渲染效率，以及缓解服务器压力，避免切换路由或者刷新页面时频繁访问服务器
+ 将axios获取得到的数据处理后缓存于本地浏览器中，localStorage，并做一次判断，若本地缓存中有数据，判断该数据是否过期（我设置的30分钟刷新一次），若不过期，直接渲染数据，过期，重新发送axios请求，并更新本地缓存
- 同时，我还做了所有请求接口的抽象和封装，将axios的基本设置封装于axios.js中，并把所有axios请求方法，放于api/index.js中，方便后期代码接口管理维护。--后期可以考虑对不同分类的接口进行抽象分装，在注入index.js中，实现模块化开发

## 今晚完成歌单的歌曲列表

## 底部播放器样式结构搭载完毕。。

## 今天对vuex有了更深入的了解，action方法是用来处理异步，muration方法用来更新state数据，而state是获取数据，
+ 组件中通过computed属性获取state的数据，如需实时监听该数据，则在watch中监听该变量即可！

## click的点击事件，click.stop阻止事件冒泡

## 歌单分类切换，歌曲播放功能完成

## 文本超出显示省略号，超出部分隐藏

## 歌单、每日推荐歌曲部分完成

## 获取歌手分类部分完成

## 实现vue的滚动触发事件操作
mounted() {
    let box = this.$refs.box;
    box.addEventListener('scroll',this.handleScroll,true);
 },
methods: {
    handleScroll(e){
      //变量scrollTop是滚动条滚动时，距离顶部的距离
      var scrollTop = e.target.scrollTop;
      //变量windowHeight是可视区的高度
      var windowHeight = e.target.clientHeight;
      //变量scrollHeight是滚动条的总高度
           var scrollHeight = e.target.scrollHeight;
      //滚动条到底部的条件
      if(scrollTop + windowHeight == scrollHeight){
        //写后台加载数据的函数
           console.log("距顶部"+scrollTop+"可视区高度"+windowHeight+"滚动条总高度"+scrollHeight);
      }
    },
## 今天优化了路由切换的卡顿问题，加了过渡动画，使路由切换更加流畅

## 完成了mv，评论部分，以及歌手详情部分，进度60%

## video标签无法直接通过v-bind动态绑定后台数据，需要通过js控制dom元素即为video元素上的src动态赋值，才可实现播放

## 修改bug---

   问题：topTag标签导航在点击事件下正常显示切换效果，但当从另一路由页面返回当前页面导致页面刷新或直接点击刷新按钮，出现导航于页面不匹配的问题。
   解决：通过watch对$route进行监听，当当前路径path与传入的导航信息数组中的pick相匹配，动态为selected赋值为匹配的数组下标，实现完美切换。