/*!
 BY Starter
 @author: BY
 @email: byinfo@bycom.com.pt
 @url: http://bycom.pt/
 @version: 3.0.2
*/
"function"!=typeof Object.create&&(Object.create=function(a){function b(){}return b.prototype=a,new b}),function(a,b,c){var d={init:function(b,c){this.$elem=a(c),this.options=a.extend({},a.fn.owlCarousel.options,this.$elem.data(),b),this.userOptions=b,this.loadContent()},loadContent:function(){function b(a){var b,c="";if("function"==typeof d.options.jsonSuccess)d.options.jsonSuccess.apply(this,[a]);else{for(b in a.owl)a.owl.hasOwnProperty(b)&&(c+=a.owl[b].item);d.$elem.html(c)}d.logIn()}var c,d=this;"function"==typeof d.options.beforeInit&&d.options.beforeInit.apply(this,[d.$elem]),"string"==typeof d.options.jsonPath?(c=d.options.jsonPath,a.getJSON(c,b)):d.logIn()},logIn:function(){this.$elem.data("owl-originalStyles",this.$elem.attr("style")),this.$elem.data("owl-originalClasses",this.$elem.attr("class")),this.$elem.css({opacity:0}),this.orignalItems=this.options.items,this.checkBrowser(),this.wrapperWidth=0,this.checkVisible=null,this.setVars()},setVars:function(){return 0===this.$elem.children().length?!1:(this.baseClass(),this.eventTypes(),this.$userItems=this.$elem.children(),this.itemsAmount=this.$userItems.length,this.wrapItems(),this.$owlItems=this.$elem.find(".owl-item"),this.$owlWrapper=this.$elem.find(".owl-wrapper"),this.playDirection="next",this.prevItem=0,this.prevArr=[0],this.currentItem=0,this.customEvents(),void this.onStartup())},onStartup:function(){this.updateItems(),this.calculateAll(),this.buildControls(),this.updateControls(),this.response(),this.moveEvents(),this.stopOnHover(),this.owlStatus(),!1!==this.options.transitionStyle&&this.transitionTypes(this.options.transitionStyle),!0===this.options.autoPlay&&(this.options.autoPlay=5e3),this.play(),this.$elem.find(".owl-wrapper").css("display","block"),this.$elem.is(":visible")?this.$elem.css("opacity",1):this.watchVisibility(),this.onstartup=!1,this.eachMoveUpdate(),"function"==typeof this.options.afterInit&&this.options.afterInit.apply(this,[this.$elem])},eachMoveUpdate:function(){!0===this.options.lazyLoad&&this.lazyLoad(),!0===this.options.autoHeight&&this.autoHeight(),this.onVisibleItems(),"function"==typeof this.options.afterAction&&this.options.afterAction.apply(this,[this.$elem])},updateVars:function(){"function"==typeof this.options.beforeUpdate&&this.options.beforeUpdate.apply(this,[this.$elem]),this.watchVisibility(),this.updateItems(),this.calculateAll(),this.updatePosition(),this.updateControls(),this.eachMoveUpdate(),"function"==typeof this.options.afterUpdate&&this.options.afterUpdate.apply(this,[this.$elem])},reload:function(){var a=this;b.setTimeout(function(){a.updateVars()},0)},watchVisibility:function(){var a=this;return!1!==a.$elem.is(":visible")?!1:(a.$elem.css({opacity:0}),b.clearInterval(a.autoPlayInterval),b.clearInterval(a.checkVisible),void(a.checkVisible=b.setInterval(function(){a.$elem.is(":visible")&&(a.reload(),a.$elem.animate({opacity:1},200),b.clearInterval(a.checkVisible))},500)))},wrapItems:function(){this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'),this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'),this.wrapperOuter=this.$elem.find(".owl-wrapper-outer"),this.$elem.css("display","block")},baseClass:function(){var a=this.$elem.hasClass(this.options.baseClass),b=this.$elem.hasClass(this.options.theme);a||this.$elem.addClass(this.options.baseClass),b||this.$elem.addClass(this.options.theme)},updateItems:function(){var b,c;if(!1===this.options.responsive)return!1;if(!0===this.options.singleItem)return this.options.items=this.orignalItems=1,this.options.itemsCustom=!1,this.options.itemsDesktop=!1,this.options.itemsDesktopSmall=!1,this.options.itemsTablet=!1,this.options.itemsTabletSmall=!1,this.options.itemsMobile=!1;if(b=a(this.options.responsiveBaseWidth).width(),b>(this.options.itemsDesktop[0]||this.orignalItems)&&(this.options.items=this.orignalItems),!1!==this.options.itemsCustom)for(this.options.itemsCustom.sort(function(a,b){return a[0]-b[0]}),c=0;c<this.options.itemsCustom.length;c+=1)this.options.itemsCustom[c][0]<=b&&(this.options.items=this.options.itemsCustom[c][1]);else b<=this.options.itemsDesktop[0]&&!1!==this.options.itemsDesktop&&(this.options.items=this.options.itemsDesktop[1]),b<=this.options.itemsDesktopSmall[0]&&!1!==this.options.itemsDesktopSmall&&(this.options.items=this.options.itemsDesktopSmall[1]),b<=this.options.itemsTablet[0]&&!1!==this.options.itemsTablet&&(this.options.items=this.options.itemsTablet[1]),b<=this.options.itemsTabletSmall[0]&&!1!==this.options.itemsTabletSmall&&(this.options.items=this.options.itemsTabletSmall[1]),b<=this.options.itemsMobile[0]&&!1!==this.options.itemsMobile&&(this.options.items=this.options.itemsMobile[1]);this.options.items>this.itemsAmount&&!0===this.options.itemsScaleUp&&(this.options.items=this.itemsAmount)},response:function(){var c,d,e=this;return!0!==e.options.responsive?!1:(d=a(b).width(),e.resizer=function(){a(b).width()!==d&&(!1!==e.options.autoPlay&&b.clearInterval(e.autoPlayInterval),b.clearTimeout(c),c=b.setTimeout(function(){d=a(b).width(),e.updateVars()},e.options.responsiveRefreshRate))},void a(b).resize(e.resizer))},updatePosition:function(){this.jumpTo(this.currentItem),!1!==this.options.autoPlay&&this.checkAp()},appendItemsSizes:function(){var b=this,c=0,d=b.itemsAmount-b.options.items;b.$owlItems.each(function(e){var f=a(this);f.css({width:b.itemWidth}).data("owl-item",Number(e)),0!==e%b.options.items&&e!==d||e>d||(c+=1),f.data("owl-roundPages",c)})},appendWrapperSizes:function(){this.$owlWrapper.css({width:this.$owlItems.length*this.itemWidth*2,left:0}),this.appendItemsSizes()},calculateAll:function(){this.calculateWidth(),this.appendWrapperSizes(),this.loops(),this.max()},calculateWidth:function(){this.itemWidth=Math.round(this.$elem.width()/this.options.items)},max:function(){var a=-1*(this.itemsAmount*this.itemWidth-this.options.items*this.itemWidth);return this.options.items>this.itemsAmount?this.maximumPixels=a=this.maximumItem=0:(this.maximumItem=this.itemsAmount-this.options.items,this.maximumPixels=a),a},min:function(){return 0},loops:function(){var b,c,d=0,e=0;for(this.positionsInArray=[0],this.pagesInArray=[],b=0;b<this.itemsAmount;b+=1)e+=this.itemWidth,this.positionsInArray.push(-e),!0===this.options.scrollPerPage&&(c=a(this.$owlItems[b]),c=c.data("owl-roundPages"),c!==d&&(this.pagesInArray[d]=this.positionsInArray[b],d=c))},buildControls:function(){!0!==this.options.navigation&&!0!==this.options.pagination||(this.owlControls=a('<div class="owl-controls"/>').toggleClass("clickable",!this.browser.isTouch).appendTo(this.$elem)),!0===this.options.pagination&&this.buildPagination(),!0===this.options.navigation&&this.buildButtons()},buildButtons:function(){var b=this,c=a('<div class="owl-buttons"/>');b.owlControls.append(c),b.buttonPrev=a("<div/>",{"class":"owl-prev",html:b.options.navigationText[0]||""}),b.buttonNext=a("<div/>",{"class":"owl-next",html:b.options.navigationText[1]||""}),c.append(b.buttonPrev).append(b.buttonNext),c.on("touchstart.owlControls mousedown.owlControls",'div[class^="owl"]',function(a){a.preventDefault()}),c.on("touchend.owlControls mouseup.owlControls",'div[class^="owl"]',function(c){c.preventDefault(),a(this).hasClass("owl-next")?b.next():b.prev()})},buildPagination:function(){var b=this;b.paginationWrapper=a('<div class="owl-pagination"/>'),b.owlControls.append(b.paginationWrapper),b.paginationWrapper.on("touchend.owlControls mouseup.owlControls",".owl-page",function(c){c.preventDefault(),Number(a(this).data("owl-page"))!==b.currentItem&&b.goTo(Number(a(this).data("owl-page")),!0)})},updatePagination:function(){var b,c,d,e,f,g;if(!1===this.options.pagination)return!1;for(this.paginationWrapper.html(""),b=0,c=this.itemsAmount-this.itemsAmount%this.options.items,e=0;e<this.itemsAmount;e+=1)0===e%this.options.items&&(b+=1,c===e&&(d=this.itemsAmount-this.options.items),f=a("<div/>",{"class":"owl-page"}),g=a("<span></span>",{text:!0===this.options.paginationNumbers?b:"","class":!0===this.options.paginationNumbers?"owl-numbers":""}),f.append(g),f.data("owl-page",c===e?d:e),f.data("owl-roundPages",b),this.paginationWrapper.append(f));this.checkPagination()},checkPagination:function(){var b=this;return!1===b.options.pagination?!1:void b.paginationWrapper.find(".owl-page").each(function(){a(this).data("owl-roundPages")===a(b.$owlItems[b.currentItem]).data("owl-roundPages")&&(b.paginationWrapper.find(".owl-page").removeClass("active"),a(this).addClass("active"))})},checkNavigation:function(){return!1===this.options.navigation?!1:void(!1===this.options.rewindNav&&(0===this.currentItem&&0===this.maximumItem?(this.buttonPrev.addClass("disabled"),this.buttonNext.addClass("disabled")):0===this.currentItem&&0!==this.maximumItem?(this.buttonPrev.addClass("disabled"),this.buttonNext.removeClass("disabled")):this.currentItem===this.maximumItem?(this.buttonPrev.removeClass("disabled"),this.buttonNext.addClass("disabled")):0!==this.currentItem&&this.currentItem!==this.maximumItem&&(this.buttonPrev.removeClass("disabled"),this.buttonNext.removeClass("disabled"))))},updateControls:function(){this.updatePagination(),this.checkNavigation(),this.owlControls&&(this.options.items>=this.itemsAmount?this.owlControls.hide():this.owlControls.show())},destroyControls:function(){this.owlControls&&this.owlControls.remove()},next:function(a){if(this.isTransition)return!1;if(this.currentItem+=!0===this.options.scrollPerPage?this.options.items:1,this.currentItem>this.maximumItem+(!0===this.options.scrollPerPage?this.options.items-1:0)){if(!0!==this.options.rewindNav)return this.currentItem=this.maximumItem,!1;this.currentItem=0,a="rewind"}this.goTo(this.currentItem,a)},prev:function(a){if(this.isTransition)return!1;if(this.currentItem=!0===this.options.scrollPerPage&&0<this.currentItem&&this.currentItem<this.options.items?0:this.currentItem-(!0===this.options.scrollPerPage?this.options.items:1),0>this.currentItem){if(!0!==this.options.rewindNav)return this.currentItem=0,!1;this.currentItem=this.maximumItem,a="rewind"}this.goTo(this.currentItem,a)},goTo:function(a,c,d){var e=this;return e.isTransition?!1:("function"==typeof e.options.beforeMove&&e.options.beforeMove.apply(this,[e.$elem]),a>=e.maximumItem?a=e.maximumItem:0>=a&&(a=0),e.currentItem=e.owl.currentItem=a,!1!==e.options.transitionStyle&&"drag"!==d&&1===e.options.items&&!0===e.browser.support3d?(e.swapSpeed(0),!0===e.browser.support3d?e.transition3d(e.positionsInArray[a]):e.css2slide(e.positionsInArray[a],1),e.afterGo(),e.singleItemTransition(),!1):(a=e.positionsInArray[a],!0===e.browser.support3d?(e.isCss3Finish=!1,!0===c?(e.swapSpeed("paginationSpeed"),b.setTimeout(function(){e.isCss3Finish=!0},e.options.paginationSpeed)):"rewind"===c?(e.swapSpeed(e.options.rewindSpeed),b.setTimeout(function(){e.isCss3Finish=!0},e.options.rewindSpeed)):(e.swapSpeed("slideSpeed"),b.setTimeout(function(){e.isCss3Finish=!0},e.options.slideSpeed)),e.transition3d(a)):!0===c?e.css2slide(a,e.options.paginationSpeed):"rewind"===c?e.css2slide(a,e.options.rewindSpeed):e.css2slide(a,e.options.slideSpeed),void e.afterGo()))},jumpTo:function(a){"function"==typeof this.options.beforeMove&&this.options.beforeMove.apply(this,[this.$elem]),a>=this.maximumItem||-1===a?a=this.maximumItem:0>=a&&(a=0),this.swapSpeed(0),!0===this.browser.support3d?this.transition3d(this.positionsInArray[a]):this.css2slide(this.positionsInArray[a],1),this.currentItem=this.owl.currentItem=a,this.afterGo()},afterGo:function(){this.prevArr.push(this.currentItem),this.prevItem=this.owl.prevItem=this.prevArr[this.prevArr.length-2],this.prevArr.shift(0),this.prevItem!==this.currentItem&&(this.checkPagination(),this.checkNavigation(),this.eachMoveUpdate(),!1!==this.options.autoPlay&&this.checkAp()),"function"==typeof this.options.afterMove&&this.prevItem!==this.currentItem&&this.options.afterMove.apply(this,[this.$elem])},stop:function(){this.apStatus="stop",b.clearInterval(this.autoPlayInterval)},checkAp:function(){"stop"!==this.apStatus&&this.play()},play:function(){var a=this;return a.apStatus="play",!1===a.options.autoPlay?!1:(b.clearInterval(a.autoPlayInterval),void(a.autoPlayInterval=b.setInterval(function(){a.next(!0)},a.options.autoPlay)))},swapSpeed:function(a){"slideSpeed"===a?this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)):"paginationSpeed"===a?this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)):"string"!=typeof a&&this.$owlWrapper.css(this.addCssSpeed(a))},addCssSpeed:function(a){return{"-webkit-transition":"all "+a+"ms ease","-moz-transition":"all "+a+"ms ease","-o-transition":"all "+a+"ms ease",transition:"all "+a+"ms ease"}},removeTransition:function(){return{"-webkit-transition":"","-moz-transition":"","-o-transition":"",transition:""}},doTranslate:function(a){return{"-webkit-transform":"translate3d("+a+"px, 0px, 0px)","-moz-transform":"translate3d("+a+"px, 0px, 0px)","-o-transform":"translate3d("+a+"px, 0px, 0px)","-ms-transform":"translate3d("+a+"px, 0px, 0px)",transform:"translate3d("+a+"px, 0px,0px)"}},transition3d:function(a){this.$owlWrapper.css(this.doTranslate(a))},css2move:function(a){this.$owlWrapper.css({left:a})},css2slide:function(a,b){var c=this;c.isCssFinish=!1,c.$owlWrapper.stop(!0,!0).animate({left:a},{duration:b||c.options.slideSpeed,complete:function(){c.isCssFinish=!0}})},checkBrowser:function(){var a=c.createElement("div");a.style.cssText="  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)",a=a.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g),this.browser={support3d:null!==a&&1===a.length,isTouch:"ontouchstart"in b||b.navigator.msMaxTouchPoints}},moveEvents:function(){!1===this.options.mouseDrag&&!1===this.options.touchDrag||(this.gestures(),this.disabledEvents())},eventTypes:function(){var a=["s","e","x"];this.ev_types={},!0===this.options.mouseDrag&&!0===this.options.touchDrag?a=["touchstart.owl mousedown.owl","touchmove.owl mousemove.owl","touchend.owl touchcancel.owl mouseup.owl"]:!1===this.options.mouseDrag&&!0===this.options.touchDrag?a=["touchstart.owl","touchmove.owl","touchend.owl touchcancel.owl"]:!0===this.options.mouseDrag&&!1===this.options.touchDrag&&(a=["mousedown.owl","mousemove.owl","mouseup.owl"]),this.ev_types.start=a[0],this.ev_types.move=a[1],this.ev_types.end=a[2]},disabledEvents:function(){this.$elem.on("dragstart.owl",function(a){a.preventDefault()}),this.$elem.on("mousedown.disableTextSelect",function(b){return a(b.target).is("input, textarea, select, option")})},gestures:function(){function d(a){if(void 0!==a.touches)return{x:a.touches[0].pageX,y:a.touches[0].pageY};if(void 0===a.touches){if(void 0!==a.pageX)return{x:a.pageX,y:a.pageY};if(void 0===a.pageX)return{x:a.clientX,y:a.clientY}}}function e(b){"on"===b?(a(c).on(h.ev_types.move,f),a(c).on(h.ev_types.end,g)):"off"===b&&(a(c).off(h.ev_types.move),a(c).off(h.ev_types.end))}function f(e){e=e.originalEvent||e||b.event,h.newPosX=d(e).x-i.offsetX,h.newPosY=d(e).y-i.offsetY,h.newRelativeX=h.newPosX-i.relativePos,"function"==typeof h.options.startDragging&&!0!==i.dragging&&0!==h.newRelativeX&&(i.dragging=!0,h.options.startDragging.apply(h,[h.$elem])),(8<h.newRelativeX||-8>h.newRelativeX)&&!0===h.browser.isTouch&&(void 0!==e.preventDefault?e.preventDefault():e.returnValue=!1,i.sliding=!0),(10<h.newPosY||-10>h.newPosY)&&!1===i.sliding&&a(c).off("touchmove.owl"),h.newPosX=Math.max(Math.min(h.newPosX,h.newRelativeX/5),h.maximumPixels+h.newRelativeX/5),!0===h.browser.support3d?h.transition3d(h.newPosX):h.css2move(h.newPosX)}function g(c){c=c.originalEvent||c||b.event;var d;c.target=c.target||c.srcElement,i.dragging=!1,!0!==h.browser.isTouch&&h.$owlWrapper.removeClass("grabbing"),h.dragDirection=0>h.newRelativeX?h.owl.dragDirection="left":h.owl.dragDirection="right",0!==h.newRelativeX&&(d=h.getNewPosition(),h.goTo(d,!1,"drag"),i.targetElement===c.target&&!0!==h.browser.isTouch&&(a(c.target).on("click.disable",function(b){b.stopImmediatePropagation(),b.stopPropagation(),b.preventDefault(),a(b.target).off("click.disable")}),c=a._data(c.target,"events").click,d=c.pop(),c.splice(0,0,d))),e("off")}var h=this,i={offsetX:0,offsetY:0,baseElWidth:0,relativePos:0,position:null,minSwipe:null,maxSwipe:null,sliding:null,dargging:null,targetElement:null};h.isCssFinish=!0,h.$elem.on(h.ev_types.start,".owl-wrapper",function(c){c=c.originalEvent||c||b.event;var f;if(3===c.which)return!1;if(!(h.itemsAmount<=h.options.items)){if(!1===h.isCssFinish&&!h.options.dragBeforeAnimFinish||!1===h.isCss3Finish&&!h.options.dragBeforeAnimFinish)return!1;!1!==h.options.autoPlay&&b.clearInterval(h.autoPlayInterval),!0===h.browser.isTouch||h.$owlWrapper.hasClass("grabbing")||h.$owlWrapper.addClass("grabbing"),h.newPosX=0,h.newRelativeX=0,a(this).css(h.removeTransition()),f=a(this).position(),i.relativePos=f.left,i.offsetX=d(c).x-f.left,i.offsetY=d(c).y-f.top,e("on"),i.sliding=!1,i.targetElement=c.target||c.srcElement}})},getNewPosition:function(){var a=this.closestItem();return a>this.maximumItem?a=this.currentItem=this.maximumItem:0<=this.newPosX&&(this.currentItem=a=0),a},closestItem:function(){var b=this,c=!0===b.options.scrollPerPage?b.pagesInArray:b.positionsInArray,d=b.newPosX,e=null;return a.each(c,function(f,g){d-b.itemWidth/20>c[f+1]&&d-b.itemWidth/20<g&&"left"===b.moveDirection()?(e=g,b.currentItem=!0===b.options.scrollPerPage?a.inArray(e,b.positionsInArray):f):d+b.itemWidth/20<g&&d+b.itemWidth/20>(c[f+1]||c[f]-b.itemWidth)&&"right"===b.moveDirection()&&(!0===b.options.scrollPerPage?(e=c[f+1]||c[c.length-1],b.currentItem=a.inArray(e,b.positionsInArray)):(e=c[f+1],b.currentItem=f+1))}),b.currentItem},moveDirection:function(){var a;return 0>this.newRelativeX?(a="right",this.playDirection="next"):(a="left",this.playDirection="prev"),a},customEvents:function(){var a=this;a.$elem.on("owl.next",function(){a.next()}),a.$elem.on("owl.prev",function(){a.prev()}),a.$elem.on("owl.play",function(b,c){a.options.autoPlay=c,a.play(),a.hoverStatus="play"}),a.$elem.on("owl.stop",function(){a.stop(),a.hoverStatus="stop"}),a.$elem.on("owl.goTo",function(b,c){a.goTo(c)}),a.$elem.on("owl.jumpTo",function(b,c){a.jumpTo(c)})},stopOnHover:function(){var a=this;!0===a.options.stopOnHover&&!0!==a.browser.isTouch&&!1!==a.options.autoPlay&&(a.$elem.on("mouseover",function(){a.stop()}),a.$elem.on("mouseout",function(){"stop"!==a.hoverStatus&&a.play()}))},lazyLoad:function(){var b,c,d,e,f;if(!1===this.options.lazyLoad)return!1;for(b=0;b<this.itemsAmount;b+=1)c=a(this.$owlItems[b]),"loaded"!==c.data("owl-loaded")&&(d=c.data("owl-item"),e=c.find(".lazyOwl"),"string"!=typeof e.data("src")?c.data("owl-loaded","loaded"):(void 0===c.data("owl-loaded")&&(e.hide(),c.addClass("loading").data("owl-loaded","checked")),(f=!0===this.options.lazyFollow?d>=this.currentItem:!0)&&d<this.currentItem+this.options.items&&e.length&&this.lazyPreload(c,e)))},lazyPreload:function(a,c){function d(){a.data("owl-loaded","loaded").removeClass("loading"),c.removeAttr("data-src"),"fade"===g.options.lazyEffect?c.fadeIn(400):c.show(),"function"==typeof g.options.afterLazyLoad&&g.options.afterLazyLoad.apply(this,[g.$elem])}function e(){h+=1,g.completeImg(c.get(0))||!0===f?d():100>=h?b.setTimeout(e,100):d()}var f,g=this,h=0;"DIV"===c.prop("tagName")?(c.css("background-image","url("+c.data("src")+")"),f=!0):c[0].src=c.data("src"),e()},autoHeight:function(){function c(){var c=a(f.$owlItems[f.currentItem]).height();f.wrapperOuter.css("height",c+"px"),f.wrapperOuter.hasClass("autoHeight")||b.setTimeout(function(){f.wrapperOuter.addClass("autoHeight")},0)}function d(){e+=1,f.completeImg(g.get(0))?c():100>=e?b.setTimeout(d,100):f.wrapperOuter.css("height","")}var e,f=this,g=a(f.$owlItems[f.currentItem]).find("img");void 0!==g.get(0)?(e=0,d()):c()},completeImg:function(a){return a.complete&&("undefined"==typeof a.naturalWidth||0!==a.naturalWidth)},onVisibleItems:function(){var b;for(!0===this.options.addClassActive&&this.$owlItems.removeClass("active"),this.visibleItems=[],b=this.currentItem;b<this.currentItem+this.options.items;b+=1)this.visibleItems.push(b),!0===this.options.addClassActive&&a(this.$owlItems[b]).addClass("active");this.owl.visibleItems=this.visibleItems},transitionTypes:function(a){this.outClass="owl-"+a+"-out",this.inClass="owl-"+a+"-in"},singleItemTransition:function(){var a=this,b=a.outClass,c=a.inClass,d=a.$owlItems.eq(a.currentItem),e=a.$owlItems.eq(a.prevItem),f=Math.abs(a.positionsInArray[a.currentItem])+a.positionsInArray[a.prevItem],g=Math.abs(a.positionsInArray[a.currentItem])+a.itemWidth/2;a.isTransition=!0,a.$owlWrapper.addClass("owl-origin").css({"-webkit-transform-origin":g+"px","-moz-perspective-origin":g+"px","perspective-origin":g+"px"}),e.css({position:"relative",left:f+"px"}).addClass(b).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend",function(){a.endPrev=!0,e.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend"),a.clearTransStyle(e,b)}),d.addClass(c).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend",function(){a.endCurrent=!0,d.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend"),a.clearTransStyle(d,c)})},clearTransStyle:function(a,b){a.css({position:"",left:""}).removeClass(b),this.endPrev&&this.endCurrent&&(this.$owlWrapper.removeClass("owl-origin"),this.isTransition=this.endCurrent=this.endPrev=!1)},owlStatus:function(){this.owl={userOptions:this.userOptions,baseElement:this.$elem,userItems:this.$userItems,owlItems:this.$owlItems,currentItem:this.currentItem,prevItem:this.prevItem,visibleItems:this.visibleItems,isTouch:this.browser.isTouch,browser:this.browser,dragDirection:this.dragDirection}},clearEvents:function(){this.$elem.off(".owl owl mousedown.disableTextSelect"),a(c).off(".owl owl"),a(b).off("resize",this.resizer)},unWrap:function(){0!==this.$elem.children().length&&(this.$owlWrapper.unwrap(),this.$userItems.unwrap().unwrap(),this.owlControls&&this.owlControls.remove()),this.clearEvents(),this.$elem.attr("style",this.$elem.data("owl-originalStyles")||"").attr("class",this.$elem.data("owl-originalClasses"))},destroy:function(){this.stop(),b.clearInterval(this.checkVisible),this.unWrap(),this.$elem.removeData()},reinit:function(b){b=a.extend({},this.userOptions,b),this.unWrap(),this.init(b,this.$elem)},addItem:function(a,b){var c;return a?0===this.$elem.children().length?(this.$elem.append(a),this.setVars(),!1):(this.unWrap(),c=void 0===b||-1===b?-1:b,c>=this.$userItems.length||-1===c?this.$userItems.eq(-1).after(a):this.$userItems.eq(c).before(a),void this.setVars()):!1},removeItem:function(a){return 0===this.$elem.children().length?!1:(a=void 0===a||-1===a?-1:a,this.unWrap(),this.$userItems.eq(a).remove(),void this.setVars())}};a.fn.owlCarousel=function(b){return this.each(function(){if(!0===a(this).data("owl-init"))return!1;a(this).data("owl-init",!0);var c=Object.create(d);c.init(b,this),a.data(this,"owlCarousel",c)})},a.fn.owlCarousel.options={items:5,itemsCustom:!1,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsTabletSmall:!1,itemsMobile:[479,1],singleItem:!1,itemsScaleUp:!1,slideSpeed:200,paginationSpeed:800,rewindSpeed:1e3,autoPlay:!1,stopOnHover:!1,navigation:!1,navigationText:["prev","next"],rewindNav:!0,scrollPerPage:!1,pagination:!0,paginationNumbers:!1,responsive:!0,responsiveRefreshRate:200,responsiveBaseWidth:b,baseClass:"owl-carousel",theme:"owl-theme",lazyLoad:!1,lazyFollow:!0,lazyEffect:"fade",autoHeight:!1,jsonPath:!1,jsonSuccess:!1,dragBeforeAnimFinish:!0,mouseDrag:!0,touchDrag:!0,addClassActive:!1,transitionStyle:!1,beforeUpdate:!1,afterUpdate:!1,beforeInit:!1,afterInit:!1,beforeMove:!1,afterMove:!1,afterAction:!1,startDragging:!1,afterLazyLoad:!1}}(jQuery,window,document);