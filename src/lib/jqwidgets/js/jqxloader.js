/*
jQWidgets v3.8.0 (2015-Apr)
Copyright (c) 2011-2015 jQWidgets.
License: http://jqwidgets.com/license/
*/

(function ($) {
    $.jqx.jqxWidget("jqxLoader", "", {});
    $.extend($.jqx._jqxLoader.prototype, {
        defineInstance: function () {
            var settings = {
                //properties
                width: 200,
                height: 200,
                text: "Loading...",// string
                html: "",//String !!! нека по default да е null, а не ""
                textPosition: "right",//String, possible values:  "left", "top", "bottom" , "right" !!! по default да е "bottom"
                rtl: false,
                //events
                events: ["create"] // !!! този event трябва да бъде извикан
            };
            $.extend(true, this, settings);
        },

        createInstance: function (args) {
            this.render();
        },

        // methods

        // public methods 
        // renders the widget
        render: function () {
            var that = this;
            that.host.width(that.width);
            that.host.height(that.height);

            //if (that.text !== null && that.text !== '') {
            //    that.host.append('<div class="' + that.toThemeProperty('jqx-loader-text') + '">' + this.text + '</div>');
            //    if (that.textPosition == "left") {
            //        $(".jqx-loader-text").css({ "margin-left": "5px", "position": "absolute", "top": "50%" });//"float": "left", "vertical-align": "middle", "margin-top": "47%", "margin-left": "5px"
            //    }
            //    else if (that.textPosition == "right") {
            //        $(".jqx-loader-text").css({ "margin-right": "5px", "position": "absolute", "top": "50%", "right":"0px" });  // "float": "right", "vertical-align": "middle", "margin-top": "47%", "margin-right": "5px"     
            //    }
            //    else if (that.textPosition == "top") {
            //        $(".jqx-loader-text").css({ "text-align": "center", "margin-top": "5px" });
            //    }
            //    else if (that.textPosition == "bottom") {
            //        $(".jqx-loader").css({ "position": "relative" });
            //        $(".jqx-loader-text").css({ "bottom": "0px", "position": "absolute", "text-align": "center", "margin": "0 auto", "width": "100%", "margin-bottom": "5px" });
            //    }
            //} else that.host.text(this.text);



            if (that.html == '') { // !!! промяна спрямо новата default стойност
                that.host.append('<div id="content" class="' + that.toThemeProperty('jqx-loader-icon') + '"></div>' + '<div class="' + that.toThemeProperty('jqx-loader-text') + '">' + that.text + '</div>');
                if (that.textPosition == "left") {
                    $(".jqx-loader-text").css({ "margin-left": "5px", "position": "absolute", "top": "50%" }); //"float": "left", "vertical-align": "middle", "margin-top": "47%", "margin-left": "5px"
                }
                else if (that.textPosition == "right") {
                    $(".jqx-loader-text").css({ "margin-right": "5px", "position": "absolute", "top": "50%", "right": "0px" }); //"float": "right", "vertical-align": "middle", "margin-top":"47%", "margin-right": "5px"
                    // ;
                }
                else if (that.textPosition == "top") {
                    $(".jqx-loader-text").css({ "text-align": "center", "margin-top": "5px" }); //"text-align": "center", "margin-top": "15%"
                }
                else if (that.textPosition == "bottom") {
                    /*$(".jqx-loader-icon").insertAfter(".jqx-loader-text");
                      $(".jqx-loader-icon").before($(".jqx-loader-text"));*/

                    //$(".jqx-loader").css({ "position": "relative" });

                    //$(".jqx-loader-icon").css({ "position": "relative" });
                    $(".jqx-loader-text").css({ "bottom": "0px", "position": "absolute", "text-align": "center", "margin": "0 auto", "width": "100%", "margin-bottom": "5px" });  //"text-align": "center"                   
                } // !!! всички тези CSS опции да са изнесени като класове, напр. .jqx-loader-text-left, .jqx-loader-text-right и т.н.
            } else that.host.html(this.html);

            // !!! относно горните проверки - задай децата на host елемента като променливи, напр. this._text и this._image, защото $(".jqx-loader-text") ще се отнася за всички loader-и на страницата, а това е грешно.

            // използвай that вместо this
            this._addClass();
            this._addHandlers();
            this.open();
            this.close();
        },

        open: function () {
            var that = this;
            if (that.host.css('display') == "none") { // !!! тук може за по-лесно jQuery .show()
                that.host.css('display', 'block');
            }
            return false;
        },

        close: function () {
            var that = this;
            if (that.host.css('display') == 'block') { // !!! тук може за по-лесно jQuery .hide()
                that.host.css('display', 'none');
            }
            return false;
        },

        // refreshes the widget
        refresh: function (initialRefresh) {
            if (!initialRefresh) {
            // !!! за довършване
            };
        },

        // destroys the widget
        destroy: function () {
            var that = this;
            that._removeHandlers();
            // !!! за довършване
        },

        // private methods
        // called when a property is changed
        propertyChangedHandler: function (object, key, oldvalue, value) {
            //if (key = "height") {
            //    var val = parseInt(value);
            //    var oldv = parseInt(oldvalue);
            //    if (val != oldv) {
            //        object.host.height(object.height);
            //        return;
            //    }
            //}

            if (value != oldvalue) {
                switch (key) {
                    case "width":
                        object.host.width(value);
                        break;
                    case "height":
                        object.host.height(value);
                        break;
                    case "text":
                        //object.host.append("<div class='jqx-loader-text'>" + object.host.text(value) + "</div>");
                        //object.host.text(value);
                        var tmp = "<div class='jqx-loader-text'>" + value + "</div>";
                        object.host.text(value).html(tmp);
                        break;
                    case "html":
                        object.host.html(value);
                        break;
                    case "textPosition":
                        if (value == "top" || value == "bottom" || value == "left" || value == "right") {
                            //object.host.textPosition(value);
                            //break;
                        }
                    case "rtl":
                        if (value == true) {
                            //object.host.addClass(object.toThemeProperty("jqx-loader-rtl"));
                            // object.host.children( "jqx-loader-text" ).css("direction", "rtl");
                            //object.host.children().children("jqx-loader-text").addClass(object.toThemeProperty("jqx-loader-rtl"));
                            //$("jqx-loader-text").addClass(object.toThemeProperty("jqx-loader-rtl"));
                            object.host.children().addClass(object.toThemeProperty("jqx-loader-rtl"));
                            $("jqx-loader-text").addClass(object.toThemeProperty("jqx-loader-rtl"));

                        } else {
                            //object.host.removeClass(object.toThemeProperty("jqx-loader-rtl"));
                            //$("jqx-loader-text").removeClass(object.toThemeProperty("jqx-loader-rtl"));
                            object.host.children().removeClass(object.toThemeProperty("jqx-loader-rtl"));
                            $("jqx-loader-text").removeClass(object.toThemeProperty("jqx-loader-rtl"));
                        }
                        break;

                }
            }
        },

        //text: "Loading...",// string
        //html: "",//String
        //textPosition: "right",//String, possible values:  "left", "top", "bottom" , "right"   
        //rtl: false,


        // raises an event 
        _raiseEvent: function (id, args) {
            var evt = this.events[id];
            var event = new $.Event(evt);
            event.owner = this;
            event.args = args;
            try {
                var result = this.host.trigger(event);
            }
            catch (error) {
            }
            return result;
        },

        // removes event handlers
        _removeHandlers: function () {
            var that = this;
            that.removeHandler(that.host, "create.loader" + that.element.id);//click !!! грешно, това се прави само за вътрешните event-и, а не за публичните
        },

        _addClass: function () {
            var that = this;
            that.host.addClass(that.toThemeProperty('jqx-widget'));
            that.host.addClass(that.toThemeProperty('jqx-loader'));
            if (that.rtl) {
                that.host.children().addClass(that.toThemeProperty('jqx-loader-rtl'));
                //object.host.children().addClass(object.toThemeProperty("jqx-loader-rtl"));
                //$("jqx-loader-text").addClass(object.toThemeProperty("jqx-loader-rtl"));
            }
        },

        _addHandlers: function () {
            var that = this;
            this.addHandler(that.host, "create.loader" + this.element.id, function (event) { // !!! грешно, това се прави само за вътрешните event-и, а не за публичните, ползвай _raiseEvent()
                //if (!that.disabled) {
                //    var index = $(that.items).index(this);
                //    $(that.host[that.selectedItem]).removeClass(that.toThemeProperty('jqx-fill-state-pressed'));
                //    $(that.host[index]).addClass(that.toThemeProperty('jqx-fill-state-pressed'));
                //    that.selectedItem = index;
                //    that.click(index);
                //}
            });
        }
    });
})(jqxBaseFramework);

// !!! за допълване:
// !!! - фонът на целия loader да е спрямо темата (.jqx-fill-state-normal)
// !!! - да може да се променя прозрачността на фона - с ново property opacity. По default да е 0.9, но да има пример където е 0 (само картинката и текстът са видими, без фон).