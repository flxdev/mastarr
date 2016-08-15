function Tabs(element, config) {
    this.options = {
        lin: '.tab__nav a',
        linkItem: '.tab__nav li',
        item: '.accordion__item',
        parent: '.tab__container'
    };

    $.extend(this.options, config || {});

    this.$el      = element instanceof jQuery ? element : $(element);
    this.$btn     = this.$el.find(this.options.lin);
}
Tabs.prototype = {
    constructor: Tabs,

    _initEvents: function() {
        var _ = this,

        _.$btn.on('click', function(e){
            var btn = $(this);
            var index = btn.data('href');

                btn.parent().addClass('active').siblings().removeClass('active');
                tab_item.fadeOut(0).removeClass('visible');             
                if(parent.hasClass('tab__slider')){
                    parent.find("."+index).fadeIn(0).find('.sliders').slick('setPosition');
                } else {
                    parent.find("."+index).fadeIn(0);
                }
                setTimeout(function(){
                    parent.find("."+index).addClass('visible');
                },10);
                e.preventDefault();
        })
    },
    init: function() {
        this._initEvents();
    }
};

module.exports = Tabs;