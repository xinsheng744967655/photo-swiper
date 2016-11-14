/**
 * Created by Administrator on 2016/11/7.
 */
$(function(){
    var swiper = new Swiper('.swiper', {
        direction: 'vertical',
        onInit: function(swiper){
            swiperAnimateCache(swiper); //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        }
    });

})