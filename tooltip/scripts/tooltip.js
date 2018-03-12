;(function ($, window, document, undefined) {
    var pluginName = "Tooltip",
    defaults = {
        trigger: 'hover',
        html: false
    }

    function Plugin (ele, options) {
        var self = this;
        self.ele = $(ele);
        self.ele.attr("data-msg");
        self.settings = $.extend(defaults, options);
        self.init();
    }

    Plugin.prototype = {

        //提示信息定位，传入参数（提示对象，提示信息内容）
        init: function (configObj) {
            var self = this;
            self.show();
            self.eventsHandler();
            self.computePosition();
        },

        computePosition: function () {
            var self = this;

            var objOffset = self.ele.offset();
            var objWidth  = self.ele.outerWidth();
            var objHeight = self.ele.outerHeight();

            var tipWidth  = self.tip.outerWidth();
            var tipHeight = self.tip.outerHeight();

            var hintTop, hintLeft;

            // 计算位置
            switch (self.settings.placement) {
                case "topLeft":
                    break;
                case "top":
                    hintLeft = objOffset.left + (objWidth - tipWidth) / 2;
                    hintTop  = objOffset.top  - tipHeight - 15;
                    break;
                case "topRight ":
                    break;
                case "leftTop":
                    break;
                case "left":
                    hintLeft = objOffset.left - tipWidth - 15;
                    hintTop  = objOffset.top  + (objHeight - tipHeight) / 2;
                    break;
                case "leftBottom":
                    break;
                case "rightTop":
                    hintLeft = objOffset.left + objWidth + 15;
                    hintTop  = objOffset.top  + (objHeight - tipHeight) / 2;
                    break;
                case "right":
                    hintLeft = objOffset.left + objWidth + 15;
                    hintTop  = objOffset.top  + (objHeight - tipHeight) / 2;
                    break;
                case "rightBottom":
                    hintLeft = objOffset.left + objWidth + 15;
                    hintTop  = objOffset.top  + (objHeight - tipHeight) / 2;
                    break;
                case "bottomLeft":
                    break;
                case "bottom":
                    hintLeft = objOffset.left + (objWidth - tipWidth) / 2;
                    hintTop  = objOffset.top  + objHeight + 15;
                    break;
                case "bottomRight":
                    break;
                default:
                    break;
            }

            self.tip.offset({ top: hintTop, left: hintLeft });
        },

        _createTip: function () {
            var self = this;
            var className = "placement-" + this.settings.placement;

            //表单验证提示html
            var $tip = $("<div class='tooltip'><div class='tooltip-text'></div><div class='tooltip-placement'></div></div>");
            var $text = $tip.find(".tooltip-text");
            var $placement = $tip.find(".tooltip-placement");
            $placement.addClass(className);

            self.settings.html ? $text.html(self.settings.message) : $text.text(self.settings.message);
            
            self.tip = $tip;
            self.tip.css('display', 'none');
        },

        show: function () {
            var self = this;
            self._createTip();
            $("body").append(self.tip);
        },
        
        eventsHandler: function () {
            var self = this;

            function fadeIn () { self.tip.fadeIn('slow'); }
            function fadeOut () { self.tip.fadeOut('slow'); }

            switch(self.settings.trigger) {
                case 'focus':
                    self.ele.on('focus', fadeIn);
                    self.ele.on('blur', fadeOut);
                    break;
                    case 'click':
                    self.ele.on('click', fadeIn);
                    $('body').on('click', function (event) {
                        event.stopPropagation();
                        fadeOut();
                    });
                    break;
                case 'hover':
                case 'mouseenter':
                    self.ele.on('mouseenter', fadeIn);
                    self.ele.on('mouseleave', fadeOut);
                    break;
                default:
                    break;
            }
        }

    }

    $.fn[pluginName] = function (options) {
        this.each(function () {
            new Plugin(this, options);
        })

        return this;
    }
})(jQuery, window, document);