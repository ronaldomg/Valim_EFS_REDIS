/*
 * Bootstrap v3.3.4 (http://getbootstrap.com
 * Copyright 2011-2015 Twitter, Inc
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE
 *
if (typeof jQuery === 'undefined') 
  throw new Error('Bootstrap\'s JavaScript requires jQuery'

+function ($) 
  'use strict'
  var version = $.fn.jquery.split(' ')[0].split('.'
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1)) 
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher'
  
}(jQuery)
/* =======================================================================
 * Bootstrap: transition.js v3.3.
 * http://getbootstrap.com/javascript/#transition
 * =======================================================================
 * Copyright 2011-2015 Twitter, Inc
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE
 * ======================================================================== *

+function ($) 
  'use strict'
  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/
  // ===========================================================
  function transitionEnd() 
    var el = document.createElement('bootstrap'
    var transEndEventNames = 
      WebkitTransition : 'webkitTransitionEnd'
      MozTransition    : 'transitionend'
      OTransition      : 'oTransitionEnd otransitionend'
      transition       : 'transitionend
    
    for (var name in transEndEventNames) 
      if (el.style[name] !== undefined) 
        return { end: transEndEventNames[name] 
      
    
    return false // explicit for ie8 (  ._.
  
  // http://blog.alexmaccaw.com/css-transition
  $.fn.emulateTransitionEnd = function (duration) 
    var called = fals
    var $el = thi
    $(this).one('bsTransitionEnd', function () { called = true }
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) 
    setTimeout(callback, duration
    return thi
  
  $(function () 
    $.support.transition = transitionEnd(
    if (!$.support.transition) retur
    $.event.special.bsTransitionEnd = 
      bindType: $.support.transition.end
      delegateType: $.support.transition.end
      handle: function (e) 
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments
      
    
  }
}(jQuery)
/* =======================================================================
 * Bootstrap: alert.js v3.3.
 * http://getbootstrap.com/javascript/#alert
 * =======================================================================
 * Copyright 2011-2015 Twitter, Inc
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE
 * ======================================================================== *

+function ($) 
  'use strict'
  // ALERT CLASS DEFINITIO
  // =====================
  var dismiss = '[data-dismiss="alert"]
  var Alert   = function (el) 
    $(el).on('click', dismiss, this.close
  
  Alert.VERSION = '3.3.4
  Alert.TRANSITION_DURATION = 15
  Alert.prototype.close = function (e) 
    var $this    = $(this
    var selector = $this.attr('data-target'
    if (!selector) 
      selector = $this.attr('href'
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie
    
    var $parent = $(selector
    if (e) e.preventDefault(
    if (!$parent.length) 
      $parent = $this.closest('.alert'
    
    $parent.trigger(e = $.Event('close.bs.alert')
    if (e.isDefaultPrevented()) retur
    $parent.removeClass('in'
    function removeElement() 
      // detach from parent, fire event then clean up dat
      $parent.detach().trigger('closed.bs.alert').remove(
    
    $.support.transition && $parent.hasClass('fade') 
      $paren
        .one('bsTransitionEnd', removeElement
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) 
      removeElement(
  

  // ALERT PLUGIN DEFINITIO
  // ======================
  function Plugin(option) 
    return this.each(function () 
      var $this = $(this
      var data  = $this.data('bs.alert'
      if (!data) $this.data('bs.alert', (data = new Alert(this))
      if (typeof option == 'string') data[option].call($this
    }
  
  var old = $.fn.aler
  $.fn.alert             = Plugi
  $.fn.alert.Constructor = Aler

  // ALERT NO CONFLIC
  // ================
  $.fn.alert.noConflict = function () 
    $.fn.alert = ol
    return thi
  

  // ALERT DATA-AP
  // =============
  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close
}(jQuery)
/* =======================================================================
 * Bootstrap: button.js v3.3.
 * http://getbootstrap.com/javascript/#button
 * =======================================================================
 * Copyright 2011-2015 Twitter, Inc
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE
 * ======================================================================== *

+function ($) 
  'use strict'
  // BUTTON PUBLIC CLASS DEFINITIO
  // =============================
  var Button = function (element, options) 
    this.$element  = $(element
    this.options   = $.extend({}, Button.DEFAULTS, options
    this.isLoading = fals
  
  Button.VERSION  = '3.3.4
  Button.DEFAULTS = 
    loadingText: 'loading...
  
  Button.prototype.setState = function (state) 
    var d    = 'disabled
    var $el  = this.$elemen
    var val  = $el.is('input') ? 'val' : 'html
    var data = $el.data(
    state = state + 'Text
    if (data.resetText == null) $el.data('resetText', $el[val]()
    // push to event loop to allow forms to submi
    setTimeout($.proxy(function () 
      $el[val](data[state] == null ? this.options[state] : data[state]
      if (state == 'loadingText') 
        this.isLoading = tru
        $el.addClass(d).attr(d, d
      } else if (this.isLoading) 
        this.isLoading = fals
        $el.removeClass(d).removeAttr(d
      
    }, this), 0
  
  Button.prototype.toggle = function () 
    var changed = tru
    var $parent = this.$element.closest('[data-toggle="buttons"]'
    if ($parent.length) 
      var $input = this.$element.find('input'
      if ($input.prop('type') == 'radio') 
        if ($input.prop('checked') && this.$element.hasClass('active')) changed = fals
        else $parent.find('.active').removeClass('active'
      
      if (changed) $input.prop('checked', !this.$element.hasClass('active')).trigger('change'
    } else 
      this.$element.attr('aria-pressed', !this.$element.hasClass('active')
    
    if (changed) this.$element.toggleClass('active'
  

  // BUTTON PLUGIN DEFINITIO
  // =======================
  function Plugin(option) 
    return this.each(function () 
      var $this   = $(this
      var data    = $this.data('bs.button'
      var options = typeof option == 'object' && optio
      if (!data) $this.data('bs.button', (data = new Button(this, options))
      if (option == 'toggle') data.toggle(
      else if (option) data.setState(option
    }
  
  var old = $.fn.butto
  $.fn.button             = Plugi
  $.fn.button.Constructor = Butto

  // BUTTON NO CONFLIC
  // =================
  $.fn.button.noConflict = function () 
    $.fn.button = ol
    return thi
  

  // BUTTON DATA-AP
  // ==============
  $(document
    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) 
      var $btn = $(e.target
      if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn'
      Plugin.call($btn, 'toggle'
      e.preventDefault(
    }
    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) 
      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type)
    }
}(jQuery)
/* =======================================================================
 * Bootstrap: carousel.js v3.3.
 * http://getbootstrap.com/javascript/#carouse
 * =======================================================================
 * Copyright 2011-2015 Twitter, Inc
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE
 * ======================================================================== *

+function ($) 
  'use strict'
  // CAROUSEL CLASS DEFINITIO
  // ========================
  var Carousel = function (element, options) 
    this.$element    = $(element
    this.$indicators = this.$element.find('.carousel-indicators'
    this.options     = option
    this.paused      = nul
    this.sliding     = nul
    this.interval    = nul
    this.$active     = nul
    this.$items      = nul
    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this)
    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$elemen
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this)
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this)
  
  Carousel.VERSION  = '3.3.4
  Carousel.TRANSITION_DURATION = 60
  Carousel.DEFAULTS = 
    interval: 5000
    pause: 'hover'
    wrap: true
    keyboard: tru
  
  Carousel.prototype.keydown = function (e) 
    if (/input|textarea/i.test(e.target.tagName)) retur
    switch (e.which) 
      case 37: this.prev(); brea
      case 39: this.next(); brea
      default: retur
    
    e.preventDefault(
  
  Carousel.prototype.cycle = function (e) 
    e || (this.paused = false
    this.interval && clearInterval(this.interval
    this.options.interva
      && !this.pause
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval)
    return thi
  
  Carousel.prototype.getItemIndex = function (item) 
    this.$items = item.parent().children('.item'
    return this.$items.index(item || this.$active
  
  Carousel.prototype.getItemForDirection = function (direction, active) 
    var activeIndex = this.getItemIndex(active
    var willWrap = (direction == 'prev' && activeIndex === 0
                || (direction == 'next' && activeIndex == (this.$items.length - 1)
    if (willWrap && !this.options.wrap) return activ
    var delta = direction == 'prev' ? -1 : 
    var itemIndex = (activeIndex + delta) % this.$items.lengt
    return this.$items.eq(itemIndex
  
  Carousel.prototype.to = function (pos) 
    var that        = thi
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active')
    if (pos > (this.$items.length - 1) || pos < 0) retur
    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid
    if (activeIndex == pos) return this.pause().cycle(
    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos)
  
  Carousel.prototype.pause = function (e) 
    e || (this.paused = true
    if (this.$element.find('.next, .prev').length && $.support.transition) 
      this.$element.trigger($.support.transition.end
      this.cycle(true
    
    this.interval = clearInterval(this.interval
    return thi
  
  Carousel.prototype.next = function () 
    if (this.sliding) retur
    return this.slide('next'
  
  Carousel.prototype.prev = function () 
    if (this.sliding) retur
    return this.slide('prev'
  
  Carousel.prototype.slide = function (type, next) 
    var $active   = this.$element.find('.item.active'
    var $next     = next || this.getItemForDirection(type, $active
    var isCycling = this.interva
    var direction = type == 'next' ? 'left' : 'right
    var that      = thi
    if ($next.hasClass('active')) return (this.sliding = false
    var relatedTarget = $next[0
    var slideEvent = $.Event('slide.bs.carousel', 
      relatedTarget: relatedTarget
      direction: directio
    }
    this.$element.trigger(slideEvent
    if (slideEvent.isDefaultPrevented()) retur
    this.sliding = tru
    isCycling && this.pause(
    if (this.$indicators.length) 
      this.$indicators.find('.active').removeClass('active'
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)]
      $nextIndicator && $nextIndicator.addClass('active'
    
    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid
    if ($.support.transition && this.$element.hasClass('slide')) 
      $next.addClass(type
      $next[0].offsetWidth // force reflo
      $active.addClass(direction
      $next.addClass(direction
      $activ
        .one('bsTransitionEnd', function () 
          $next.removeClass([type, direction].join(' ')).addClass('active'
          $active.removeClass(['active', direction].join(' ')
          that.sliding = fals
          setTimeout(function () 
            that.$element.trigger(slidEvent
          }, 0
        }
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION
    } else 
      $active.removeClass('active'
      $next.addClass('active'
      this.sliding = fals
      this.$element.trigger(slidEvent
    
    isCycling && this.cycle(
    return thi
  

  // CAROUSEL PLUGIN DEFINITIO
  // =========================
  function Plugin(option) 
    return this.each(function () 
      var $this   = $(this
      var data    = $this.data('bs.carousel'
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option
      var action  = typeof option == 'string' ? option : options.slid
      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options))
      if (typeof option == 'number') data.to(option
      else if (action) data[action](
      else if (options.interval) data.pause().cycle(
    }
  
  var old = $.fn.carouse
  $.fn.carousel             = Plugi
  $.fn.carousel.Constructor = Carouse

  // CAROUSEL NO CONFLIC
  // ===================
  $.fn.carousel.noConflict = function () 
    $.fn.carousel = ol
    return thi
  

  // CAROUSEL DATA-AP
  // ================
  var clickHandler = function (e) 
    var hre
    var $this   = $(this
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie
    if (!$target.hasClass('carousel')) retur
    var options = $.extend({}, $target.data(), $this.data()
    var slideIndex = $this.attr('data-slide-to'
    if (slideIndex) options.interval = fals
    Plugin.call($target, options
    if (slideIndex) 
      $target.data('bs.carousel').to(slideIndex
    
    e.preventDefault(
  
  $(document
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler
  $(window).on('load', function () 
    $('[data-ride="carousel"]').each(function () 
      var $carousel = $(this
      Plugin.call($carousel, $carousel.data()
    }
  }
}(jQuery)
/* =======================================================================
 * Bootstrap: collapse.js v3.3.
 * http://getbootstrap.com/javascript/#collaps
 * =======================================================================
 * Copyright 2011-2015 Twitter, Inc
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE
 * ======================================================================== *

+function ($) 
  'use strict'
  // COLLAPSE PUBLIC CLASS DEFINITIO
  // ===============================
  var Collapse = function (element, options) 
    this.$element      = $(element
    this.options       = $.extend({}, Collapse.DEFAULTS, options
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' 
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]'
    this.transitioning = nul
    if (this.options.parent) 
      this.$parent = this.getParent(
    } else 
      this.addAriaAndCollapsedClass(this.$element, this.$trigger
    
    if (this.options.toggle) this.toggle(
  
  Collapse.VERSION  = '3.3.4
  Collapse.TRANSITION_DURATION = 35
  Collapse.DEFAULTS = 
    toggle: tru
  
  Collapse.prototype.dimension = function () 
    var hasWidth = this.$element.hasClass('width'
    return hasWidth ? 'width' : 'height
  
  Collapse.prototype.show = function () 
    if (this.transitioning || this.$element.hasClass('in')) retur
    var activesDat
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing'
    if (actives && actives.length) 
      activesData = actives.data('bs.collapse'
      if (activesData && activesData.transitioning) retur
    
    var startEvent = $.Event('show.bs.collapse'
    this.$element.trigger(startEvent
    if (startEvent.isDefaultPrevented()) retur
    if (actives && actives.length) 
      Plugin.call(actives, 'hide'
      activesData || actives.data('bs.collapse', null
    
    var dimension = this.dimension(
    this.$elemen
      .removeClass('collapse'
      .addClass('collapsing')[dimension](0
      .attr('aria-expanded', true
    this.$trigge
      .removeClass('collapsed'
      .attr('aria-expanded', true
    this.transitioning = 
    var complete = function () 
      this.$elemen
        .removeClass('collapsing'
        .addClass('collapse in')[dimension](''
      this.transitioning = 
      this.$elemen
        .trigger('shown.bs.collapse'
    
    if (!$.support.transition) return complete.call(this
    var scrollSize = $.camelCase(['scroll', dimension].join('-')
    this.$elemen
      .one('bsTransitionEnd', $.proxy(complete, this)
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize]
  
  Collapse.prototype.hide = function () 
    if (this.transitioning || !this.$element.hasClass('in')) retur
    var startEvent = $.Event('hide.bs.collapse'
    this.$element.trigger(startEvent
    if (startEvent.isDefaultPrevented()) retur
    var dimension = this.dimension(
    this.$element[dimension](this.$element[dimension]())[0].offsetHeigh
    this.$elemen
      .addClass('collapsing'
      .removeClass('collapse in'
      .attr('aria-expanded', false
    this.$trigge
      .addClass('collapsed'
      .attr('aria-expanded', false
    this.transitioning = 
    var complete = function () 
      this.transitioning = 
      this.$elemen
        .removeClass('collapsing'
        .addClass('collapse'
        .trigger('hidden.bs.collapse'
    
    if (!$.support.transition) return complete.call(this
    this.$elemen
      [dimension](0
      .one('bsTransitionEnd', $.proxy(complete, this)
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION
  
  Collapse.prototype.toggle = function () 
    this[this.$element.hasClass('in') ? 'hide' : 'show'](
  
  Collapse.prototype.getParent = function () 
    return $(this.options.parent
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]'
      .each($.proxy(function (i, element) 
        var $element = $(element
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element
      }, this)
      .end(
  
  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) 
    var isOpen = $element.hasClass('in'
    $element.attr('aria-expanded', isOpen
    $trigge
      .toggleClass('collapsed', !isOpen
      .attr('aria-expanded', isOpen
  
  function getTargetFromTrigger($trigger) 
    var hre
    var target = $trigger.attr('data-target'
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie
    return $(target
  

  // COLLAPSE PLUGIN DEFINITIO
  // =========================
  function Plugin(option) 
    return this.each(function () 
      var $this   = $(this
      var data    = $this.data('bs.collapse'
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option
      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = fals
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options))
      if (typeof option == 'string') data[option](
    }
  
  var old = $.fn.collaps
  $.fn.collapse             = Plugi
  $.fn.collapse.Constructor = Collaps

  // COLLAPSE NO CONFLIC
  // ===================
  $.fn.collapse.noConflict = function () 
    $.fn.collapse = ol
    return thi
  

  // COLLAPSE DATA-AP
  // ================
  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) 
    var $this   = $(this
    if (!$this.attr('data-target')) e.preventDefault(
    var $target = getTargetFromTrigger($this
    var data    = $target.data('bs.collapse'
    var option  = data ? 'toggle' : $this.data(
    Plugin.call($target, option
  }
}(jQuery)
/* =======================================================================
 * Bootstrap: dropdown.js v3.3.
 * http://getbootstrap.com/javascript/#dropdown
 * =======================================================================
 * Copyright 2011-2015 Twitter, Inc
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE
 * ======================================================================== *

+function ($) 
  'use strict'
  // DROPDOWN CLASS DEFINITIO
  // ========================
  var backdrop = '.dropdown-backdrop
  var toggle   = '[data-toggle="dropdown"]
  var Dropdown = function (element) 
    $(element).on('click.bs.dropdown', this.toggle
  
  Dropdown.VERSION = '3.3.4
  Dropdown.prototype.toggle = function (e) 
    var $this = $(this
    if ($this.is('.disabled, :disabled')) retur
    var $parent  = getParent($this
    var isActive = $parent.hasClass('open'
    clearMenus(
    if (!isActive) 
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) 
        // if mobile we use a backdrop because click events don't delegat
        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus
      
      var relatedTarget = { relatedTarget: this 
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget)
      if (e.isDefaultPrevented()) retur
      $thi
        .trigger('focus'
        .attr('aria-expanded', 'true'
      $paren
        .toggleClass('open'
        .trigger('shown.bs.dropdown', relatedTarget
    
    return fals
  
  Dropdown.prototype.keydown = function (e) 
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) retur
    var $this = $(this
    e.preventDefault(
    e.stopPropagation(
    if ($this.is('.disabled, :disabled')) retur
    var $parent  = getParent($this
    var isActive = $parent.hasClass('open'
    if ((!isActive && e.which != 27) || (isActive && e.which == 27)) 
      if (e.which == 27) $parent.find(toggle).trigger('focus'
      return $this.trigger('click'
    
    var desc = ' li:not(.disabled):visible a
    var $items = $parent.find('[role="menu"]' + desc + ', [role="listbox"]' + desc
    if (!$items.length) retur
    var index = $items.index(e.target
    if (e.which == 38 && index > 0)                 index--                        // u
    if (e.which == 40 && index < $items.length - 1) index++                        // dow
    if (!~index)                                      index = 
    $items.eq(index).trigger('focus'
  
  function clearMenus(e) 
    if (e && e.which === 3) retur
    $(backdrop).remove(
    $(toggle).each(function () 
      var $this         = $(this
      var $parent       = getParent($this
      var relatedTarget = { relatedTarget: this 
      if (!$parent.hasClass('open')) retur
      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget)
      if (e.isDefaultPrevented()) retur
      $this.attr('aria-expanded', 'false'
      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget
    }
  
  function getParent($this) 
    var selector = $this.attr('data-target'
    if (!selector) 
      selector = $this.attr('href'
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie
    
    var $parent = selector && $(selector
    return $parent && $parent.length ? $parent : $this.parent(
  

  // DROPDOWN PLUGIN DEFINITIO
  // =========================
  function Plugin(option) 
    return this.each(function () 
      var $this = $(this
      var data  = $this.data('bs.dropdown'
      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this))
      if (typeof option == 'string') data[option].call($this
    }
  
  var old = $.fn.dropdow
  $.fn.dropdown             = Plugi
  $.fn.dropdown.Constructor = Dropdow

  // DROPDOWN NO CONFLIC
  // ===================
  $.fn.dropdown.noConflict = function () 
    $.fn.dropdown = ol
    return thi
  

  // APPLY TO STANDARD DROPDOWN ELEMENT
  // ==================================
  $(document
    .on('click.bs.dropdown.data-api', clearMenus
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() }
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown
    .on('keydown.bs.dropdown.data-api', '[role="menu"]', Dropdown.prototype.keydown
    .on('keydown.bs.dropdown.data-api', '[role="listbox"]', Dropdown.prototype.keydown
}(jQuery)
/* =======================================================================
 * Bootstrap: modal.js v3.3.
 * http://getbootstrap.com/javascript/#modal
 * =======================================================================
 * Copyright 2011-2015 Twitter, Inc
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE
 * ======================================================================== *

+function ($) 
  'use strict'
  // MODAL CLASS DEFINITIO
  // =====================
  var Modal = function (element, options) 
    this.options             = option
    this.$body               = $(document.body
    this.$element            = $(element
    this.$dialog             = this.$element.find('.modal-dialog'
    this.$backdrop           = nul
    this.isShown             = nul
    this.originalBodyPad     = nul
    this.scrollbarWidth      = 
    this.ignoreBackdropClick = fals
    if (this.options.remote) 
      this.$elemen
        .find('.modal-content'
        .load(this.options.remote, $.proxy(function () 
          this.$element.trigger('loaded.bs.modal'
        }, this)
    
  
  Modal.VERSION  = '3.3.4
  Modal.TRANSITION_DURATION = 30
  Modal.BACKDROP_TRANSITION_DURATION = 15
  Modal.DEFAULTS = 
    backdrop: true
    keyboard: true
    show: tru
  
  Modal.prototype.toggle = function (_relatedTarget) 
    return this.isShown ? this.hide() : this.show(_relatedTarget
  
  Modal.prototype.show = function (_relatedTarget) 
    var that = thi
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget }
    this.$element.trigger(e
    if (this.isShown || e.isDefaultPrevented()) retur
    this.isShown = tru
    this.checkScrollbar(
    this.setScrollbar(
    this.$body.addClass('modal-open'
    this.escape(
    this.resize(
    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this)
    this.$dialog.on('mousedown.dismiss.bs.modal', function () 
      that.$element.one('mouseup.dismiss.bs.modal', function (e) 
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = tru
      }
    }
    this.backdrop(function () 
      var transition = $.support.transition && that.$element.hasClass('fade'
      if (!that.$element.parent().length) 
        that.$element.appendTo(that.$body) // don't move modals dom positio
      
      that.$elemen
        .show(
        .scrollTop(0
      that.adjustDialog(
      if (transition) 
        that.$element[0].offsetWidth // force reflo
      
      that.$elemen
        .addClass('in'
        .attr('aria-hidden', false
      that.enforceFocus(
      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget }
      transition 
        that.$dialog // wait for modal to slide i
          .one('bsTransitionEnd', function () 
            that.$element.trigger('focus').trigger(e
          }
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) 
        that.$element.trigger('focus').trigger(e
    }
  
  Modal.prototype.hide = function (e) 
    if (e) e.preventDefault(
    e = $.Event('hide.bs.modal'
    this.$element.trigger(e
    if (!this.isShown || e.isDefaultPrevented()) retur
    this.isShown = fals
    this.escape(
    this.resize(
    $(document).off('focusin.bs.modal'
    this.$elemen
      .removeClass('in'
      .attr('aria-hidden', true
      .off('click.dismiss.bs.modal'
      .off('mouseup.dismiss.bs.modal'
    this.$dialog.off('mousedown.dismiss.bs.modal'
    $.support.transition && this.$element.hasClass('fade') 
      this.$elemen
        .one('bsTransitionEnd', $.proxy(this.hideModal, this)
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) 
      this.hideModal(
  
  Modal.prototype.enforceFocus = function () 
    $(document
      .off('focusin.bs.modal') // guard against infinite focus loo
      .on('focusin.bs.modal', $.proxy(function (e) 
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) 
          this.$element.trigger('focus'
        
      }, this)
  
  Modal.prototype.escape = function () 
    if (this.isShown && this.options.keyboard) 
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) 
        e.which == 27 && this.hide(
      }, this)
    } else if (!this.isShown) 
      this.$element.off('keydown.dismiss.bs.modal'
    
  
  Modal.prototype.resize = function () 
    if (this.isShown) 
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this)
    } else 
      $(window).off('resize.bs.modal'
    
  
  Modal.prototype.hideModal = function () 
    var that = thi
    this.$element.hide(
    this.backdrop(function () 
      that.$body.removeClass('modal-open'
      that.resetAdjustments(
      that.resetScrollbar(
      that.$element.trigger('hidden.bs.modal'
    }
  
  Modal.prototype.removeBackdrop = function () 
    this.$backdrop && this.$backdrop.remove(
    this.$backdrop = nul
  
  Modal.prototype.backdrop = function (callback) 
    var that = thi
    var animate = this.$element.hasClass('fade') ? 'fade' : '
    if (this.isShown && this.options.backdrop) 
      var doAnimate = $.support.transition && animat
      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />'
        .appendTo(this.$body
      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) 
        if (this.ignoreBackdropClick) 
          this.ignoreBackdropClick = fals
          retur
        
        if (e.target !== e.currentTarget) retur
        this.options.backdrop == 'static
          ? this.$element[0].focus(
          : this.hide(
      }, this)
      if (doAnimate) this.$backdrop[0].offsetWidth // force reflo
      this.$backdrop.addClass('in'
      if (!callback) retur
      doAnimate 
        this.$backdro
          .one('bsTransitionEnd', callback
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) 
        callback(
    } else if (!this.isShown && this.$backdrop) 
      this.$backdrop.removeClass('in'
      var callbackRemove = function () 
        that.removeBackdrop(
        callback && callback(
      
      $.support.transition && this.$element.hasClass('fade') 
        this.$backdro
          .one('bsTransitionEnd', callbackRemove
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) 
        callbackRemove(
    } else if (callback) 
      callback(
    
  
  // these following methods are used to handle overflowing modal
  Modal.prototype.handleUpdate = function () 
    this.adjustDialog(
  
  Modal.prototype.adjustDialog = function () 
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeigh
    this.$element.css(
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : ''
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : '
    }
  
  Modal.prototype.resetAdjustments = function () 
    this.$element.css(
      paddingLeft: ''
      paddingRight: '
    }
  
  Modal.prototype.checkScrollbar = function () 
    var fullWindowWidth = window.innerWidt
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE
      var documentElementRect = document.documentElement.getBoundingClientRect(
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left
    
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidt
    this.scrollbarWidth = this.measureScrollbar(
  
  Modal.prototype.setScrollbar = function () 
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10
    this.originalBodyPad = document.body.style.paddingRight || '
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth
  
  Modal.prototype.resetScrollbar = function () 
    this.$body.css('padding-right', this.originalBodyPad
  
  Modal.prototype.measureScrollbar = function () { // thx wals
    var scrollDiv = document.createElement('div'
    scrollDiv.className = 'modal-scrollbar-measure
    this.$body.append(scrollDiv
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidt
    this.$body[0].removeChild(scrollDiv
    return scrollbarWidt
  

  // MODAL PLUGIN DEFINITIO
  // ======================
  function Plugin(option, _relatedTarget) 
    return this.each(function () 
      var $this   = $(this
      var data    = $this.data('bs.modal'
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option
      if (!data) $this.data('bs.modal', (data = new Modal(this, options))
      if (typeof option == 'string') data[option](_relatedTarget
      else if (options.show) data.show(_relatedTarget
    }
  
  var old = $.fn.moda
  $.fn.modal             = Plugi
  $.fn.modal.Constructor = Moda

  // MODAL NO CONFLIC
  // ================
  $.fn.modal.noConflict = function () 
    $.fn.modal = ol
    return thi
  

  // MODAL DATA-AP
  // =============
  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) 
    var $this   = $(this
    var href    = $this.attr('href'
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data()
    if ($this.is('a')) e.preventDefault(
    $target.one('show.bs.modal', function (showEvent) 
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get show
      $target.one('hidden.bs.modal', function () 
        $this.is(':visible') && $this.trigger('focus'
      }
    }
    Plugin.call($target, option, this
  }
}(jQuery)
/* =======================================================================
 * Bootstrap: tooltip.js v3.3.
 * http://getbootstrap.com/javascript/#toolti
 * Inspired by the original jQuery.tipsy by Jason Fram
 * =======================================================================
 * Copyright 2011-2015 Twitter, Inc
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE
 * ======================================================================== *

+function ($) 
  'use strict'
  // TOOLTIP PUBLIC CLASS DEFINITIO
  // ==============================
  var Tooltip = function (element, options) 
    this.type       = nul
    this.options    = nul
    this.enabled    = nul
    this.timeout    = nul
    this.hoverState = nul
    this.$element   = nul
    this.init('tooltip', element, options
  
  Tooltip.VERSION  = '3.3.4
  Tooltip.TRANSITION_DURATION = 15
  Tooltip.DEFAULTS = 
    animation: true
    placement: 'top'
    selector: false
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
    trigger: 'hover focus'
    title: ''
    delay: 0
    html: false
    container: false
    viewport: 
      selector: 'body'
      padding: 
    
  
  Tooltip.prototype.init = function (type, element, options) 
    this.enabled   = tru
    this.type      = typ
    this.$element  = $(element
    this.options   = this.getOptions(options
    this.$viewport = this.options.viewport && $(this.options.viewport.selector || this.options.viewport
    if (this.$element[0] instanceof document.constructor && !this.options.selector) 
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!'
    
    var triggers = this.options.trigger.split(' '
    for (var i = triggers.length; i--;) 
      var trigger = triggers[i
      if (trigger == 'click') 
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this)
      } else if (trigger != 'manual') 
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout
        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this)
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this)
      
    
    this.options.selector 
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) 
      this.fixTitle(
  
  Tooltip.prototype.getDefaults = function () 
    return Tooltip.DEFAULT
  
  Tooltip.prototype.getOptions = function (options) 
    options = $.extend({}, this.getDefaults(), this.$element.data(), options
    if (options.delay && typeof options.delay == 'number') 
      options.delay = 
        show: options.delay
        hide: options.dela
      
    
    return option
  
  Tooltip.prototype.getDelegateOptions = function () 
    var options  = {
    var defaults = this.getDefaults(
    this._options && $.each(this._options, function (key, value) 
      if (defaults[key] != value) options[key] = valu
    }
    return option
  
  Tooltip.prototype.enter = function (obj) 
    var self = obj instanceof this.constructor 
      obj : $(obj.currentTarget).data('bs.' + this.type
    if (self && self.$tip && self.$tip.is(':visible')) 
      self.hoverState = 'in
      retur
    
    if (!self) 
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions()
      $(obj.currentTarget).data('bs.' + this.type, self
    
    clearTimeout(self.timeout
    self.hoverState = 'in
    if (!self.options.delay || !self.options.delay.show) return self.show(
    self.timeout = setTimeout(function () 
      if (self.hoverState == 'in') self.show(
    }, self.options.delay.show
  
  Tooltip.prototype.leave = function (obj) 
    var self = obj instanceof this.constructor 
      obj : $(obj.currentTarget).data('bs.' + this.type
    if (!self) 
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions()
      $(obj.currentTarget).data('bs.' + this.type, self
    
    clearTimeout(self.timeout
    self.hoverState = 'out
    if (!self.options.delay || !self.options.delay.hide) return self.hide(
    self.timeout = setTimeout(function () 
      if (self.hoverState == 'out') self.hide(
    }, self.options.delay.hide
  
  Tooltip.prototype.show = function () 
    var e = $.Event('show.bs.' + this.type
    if (this.hasContent() && this.enabled) 
      this.$element.trigger(e
      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]
      if (e.isDefaultPrevented() || !inDom) retur
      var that = thi
      var $tip = this.tip(
      var tipId = this.getUID(this.type
      this.setContent(
      $tip.attr('id', tipId
      this.$element.attr('aria-describedby', tipId
      if (this.options.animation) $tip.addClass('fade'
      var placement = typeof this.options.placement == 'function' 
        this.options.placement.call(this, $tip[0], this.$element[0]) 
        this.options.placemen
      var autoToken = /\s?auto?\s?/
      var autoPlace = autoToken.test(placement
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top
      $ti
        .detach(
        .css({ top: 0, left: 0, display: 'block' }
        .addClass(placement
        .data('bs.' + this.type, this
      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element
      var pos          = this.getPosition(
      var actualWidth  = $tip[0].offsetWidt
      var actualHeight = $tip[0].offsetHeigh
      if (autoPlace) 
        var orgPlacement = placemen
        var $container   = this.options.container ? $(this.options.container) : this.$element.parent(
        var containerDim = this.getPosition($container
        placement = placement == 'bottom' && pos.bottom + actualHeight > containerDim.bottom ? 'top'    
                    placement == 'top'    && pos.top    - actualHeight < containerDim.top    ? 'bottom' 
                    placement == 'right'  && pos.right  + actualWidth  > containerDim.width  ? 'left'   
                    placement == 'left'   && pos.left   - actualWidth  < containerDim.left   ? 'right'  
                    placemen
        $ti
          .removeClass(orgPlacement
          .addClass(placement
      
      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight
      this.applyPlacement(calculatedOffset, placement
      var complete = function () 
        var prevHoverState = that.hoverStat
        that.$element.trigger('shown.bs.' + that.type
        that.hoverState = nul
        if (prevHoverState == 'out') that.leave(that
      
      $.support.transition && this.$tip.hasClass('fade') 
        $ti
          .one('bsTransitionEnd', complete
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) 
        complete(
    
  
  Tooltip.prototype.applyPlacement = function (offset, placement) 
    var $tip   = this.tip(
    var width  = $tip[0].offsetWidt
    var height = $tip[0].offsetHeigh
    // manually read margins because getBoundingClientRect includes differenc
    var marginTop = parseInt($tip.css('margin-top'), 10
    var marginLeft = parseInt($tip.css('margin-left'), 10
    // we must check for NaN for ie 8/
    if (isNaN(marginTop))  marginTop  = 
    if (isNaN(marginLeft)) marginLeft = 
    offset.top  = offset.top  + marginTo
    offset.left = offset.left + marginLef
    // $.fn.offset doesn't round pixel value
    // so we use setOffset directly with our own function B-
    $.offset.setOffset($tip[0], $.extend(
      using: function (props) 
        $tip.css(
          top: Math.round(props.top)
          left: Math.round(props.left
        }
      
    }, offset), 0
    $tip.addClass('in'
    // check to see if placing tip in new offset caused the tip to resize itsel
    var actualWidth  = $tip[0].offsetWidt
    var actualHeight = $tip[0].offsetHeigh
    if (placement == 'top' && actualHeight != height) 
      offset.top = offset.top + height - actualHeigh
    
    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight
    if (delta.left) offset.left += delta.lef
    else offset.top += delta.to
    var isVertical          = /top|bottom/.test(placement
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeigh
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight
    $tip.offset(offset
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical
  
  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) 
    this.arrow(
      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%'
      .css(isVertical ? 'top' : 'left', ''
  
  Tooltip.prototype.setContent = function () 
    var $tip  = this.tip(
    var title = this.getTitle(
    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title
    $tip.removeClass('fade in top bottom left right'
  
  Tooltip.prototype.hide = function (callback) 
    var that = thi
    var $tip = $(this.$tip
    var e    = $.Event('hide.bs.' + this.type
    function complete() 
      if (that.hoverState != 'in') $tip.detach(
      that.$elemen
        .removeAttr('aria-describedby'
        .trigger('hidden.bs.' + that.type
      callback && callback(
    
    this.$element.trigger(e
    if (e.isDefaultPrevented()) retur
    $tip.removeClass('in'
    $.support.transition && $tip.hasClass('fade') 
      $ti
        .one('bsTransitionEnd', complete
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) 
      complete(
    this.hoverState = nul
    return thi
  
  Tooltip.prototype.fixTitle = function () 
    var $e = this.$elemen
    if ($e.attr('title') || typeof ($e.attr('data-original-title')) != 'string') 
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', ''
    
  
  Tooltip.prototype.hasContent = function () 
    return this.getTitle(
  
  Tooltip.prototype.getPosition = function ($element) 
    $element   = $element || this.$elemen
    var el     = $element[0
    var isBody = el.tagName == 'BODY
    var elRect    = el.getBoundingClientRect(
    if (elRect.width == null) 
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/1409
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top }
    
    var elOffset  = isBody ? { top: 0, left: 0 } : $element.offset(
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() 
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : nul
    return $.extend({}, elRect, scroll, outerDims, elOffset
  
  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) 
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } 
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } 
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } 
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width 
  
  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) 
    var delta = { top: 0, left: 0 
    if (!this.$viewport) return delt
    var viewportPadding = this.options.viewport && this.options.viewport.padding || 
    var viewportDimensions = this.getPosition(this.$viewport
    if (/right|left/.test(placement)) 
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scrol
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeigh
      if (topEdgeOffset < viewportDimensions.top) { // top overflo
        delta.top = viewportDimensions.top - topEdgeOffse
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflo
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffse
      
    } else 
      var leftEdgeOffset  = pos.left - viewportPaddin
      var rightEdgeOffset = pos.left + viewportPadding + actualWidt
      if (leftEdgeOffset < viewportDimensions.left) { // left overflo
        delta.left = viewportDimensions.left - leftEdgeOffse
      } else if (rightEdgeOffset > viewportDimensions.width) { // right overflo
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffse
      
    
    return delt
  
  Tooltip.prototype.getTitle = function () 
    var titl
    var $e = this.$elemen
    var o  = this.option
    title = $e.attr('data-original-title'
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title
    return titl
  
  Tooltip.prototype.getUID = function (prefix) 
    do prefix += ~~(Math.random() * 1000000
    while (document.getElementById(prefix)
    return prefi
  
  Tooltip.prototype.tip = function () 
    return (this.$tip = this.$tip || $(this.options.template)
  
  Tooltip.prototype.arrow = function () 
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow')
  
  Tooltip.prototype.enable = function () 
    this.enabled = tru
  
  Tooltip.prototype.disable = function () 
    this.enabled = fals
  
  Tooltip.prototype.toggleEnabled = function () 
    this.enabled = !this.enable
  
  Tooltip.prototype.toggle = function (e) 
    var self = thi
    if (e) 
      self = $(e.currentTarget).data('bs.' + this.type
      if (!self) 
        self = new this.constructor(e.currentTarget, this.getDelegateOptions()
        $(e.currentTarget).data('bs.' + this.type, self
      
    
    self.tip().hasClass('in') ? self.leave(self) : self.enter(self
  
  Tooltip.prototype.destroy = function () 
    var that = thi
    clearTimeout(this.timeout
    this.hide(function () 
      that.$element.off('.' + that.type).removeData('bs.' + that.type
    }
  

  // TOOLTIP PLUGIN DEFINITIO
  // ========================
  function Plugin(option) 
    return this.each(function () 
      var $this   = $(this
      var data    = $this.data('bs.tooltip'
      var options = typeof option == 'object' && optio
      if (!data && /destroy|hide/.test(option)) retur
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options))
      if (typeof option == 'string') data[option](
    }
  
  var old = $.fn.toolti
  $.fn.tooltip             = Plugi
  $.fn.tooltip.Constructor = Toolti

  // TOOLTIP NO CONFLIC
  // ==================
  $.fn.tooltip.noConflict = function () 
    $.fn.tooltip = ol
    return thi
  
}(jQuery)
/* =======================================================================
 * Bootstrap: popover.js v3.3.
 * http://getbootstrap.com/javascript/#popover
 * =======================================================================
 * Copyright 2011-2015 Twitter, Inc
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE
 * ======================================================================== *

+function ($) 
  'use strict'
  // POPOVER PUBLIC CLASS DEFINITIO
  // ==============================
  var Popover = function (element, options) 
    this.init('popover', element, options
  
  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js'
  Popover.VERSION  = '3.3.4
  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, 
    placement: 'right'
    trigger: 'click'
    content: ''
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>
  }

  // NOTE: POPOVER EXTENDS tooltip.j
  // ===============================
  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype
  Popover.prototype.constructor = Popove
  Popover.prototype.getDefaults = function () 
    return Popover.DEFAULT
  
  Popover.prototype.setContent = function () 
    var $tip    = this.tip(
    var title   = this.getTitle(
    var content = this.getContent(
    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title
    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js event
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text
    ](content
    $tip.removeClass('fade top bottom left right in'
    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to d
    // this manually by checking the contents
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide(
  
  Popover.prototype.hasContent = function () 
    return this.getTitle() || this.getContent(
  
  Popover.prototype.getContent = function () 
    var $e = this.$elemen
    var o  = this.option
    return $e.attr('data-content'
      || (typeof o.content == 'function' 
            o.content.call($e[0]) 
            o.content
  
  Popover.prototype.arrow = function () 
    return (this.$arrow = this.$arrow || this.tip().find('.arrow')
  

  // POPOVER PLUGIN DEFINITIO
  // ========================
  function Plugin(option) 
    return this.each(function () 
      var $this   = $(this
      var data    = $this.data('bs.popover'
      var options = typeof option == 'object' && optio
      if (!data && /destroy|hide/.test(option)) retur
      if (!data) $this.data('bs.popover', (data = new Popover(this, options))
      if (typeof option == 'string') data[option](
    }
  
  var old = $.fn.popove
  $.fn.popover             = Plugi
  $.fn.popover.Constructor = Popove

  // POPOVER NO CONFLIC
  // ==================
  $.fn.popover.noConflict = function () 
    $.fn.popover = ol
    return thi
  
}(jQuery)
/* =======================================================================
 * Bootstrap: scrollspy.js v3.3.
 * http://getbootstrap.com/javascript/#scrollsp
 * =======================================================================
 * Copyright 2011-2015 Twitter, Inc
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE
 * ======================================================================== *

+function ($) 
  'use strict'
  // SCROLLSPY CLASS DEFINITIO
  // =========================
  function ScrollSpy(element, options) 
    this.$body          = $(document.body
    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options
    this.selector       = (this.options.target || '') + ' .nav li > a
    this.offsets        = [
    this.targets        = [
    this.activeTarget   = nul
    this.scrollHeight   = 
    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this)
    this.refresh(
    this.process(
  
  ScrollSpy.VERSION  = '3.3.4
  ScrollSpy.DEFAULTS = 
    offset: 1
  
  ScrollSpy.prototype.getScrollHeight = function () 
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight
  
  ScrollSpy.prototype.refresh = function () 
    var that          = thi
    var offsetMethod  = 'offset
    var offsetBase    = 
    this.offsets      = [
    this.targets      = [
    this.scrollHeight = this.getScrollHeight(
    if (!$.isWindow(this.$scrollElement[0])) 
      offsetMethod = 'position
      offsetBase   = this.$scrollElement.scrollTop(
    
    this.$bod
      .find(this.selector
      .map(function () 
        var $el   = $(this
        var href  = $el.data('target') || $el.attr('href'
        var $href = /^#./.test(href) && $(href
        return ($hre
          && $href.lengt
          && $href.is(':visible'
          && [[$href[offsetMethod]().top + offsetBase, href]]) || nul
      }
      .sort(function (a, b) { return a[0] - b[0] }
      .each(function () 
        that.offsets.push(this[0]
        that.targets.push(this[1]
      }
  
  ScrollSpy.prototype.process = function () 
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offse
    var scrollHeight = this.getScrollHeight(
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height(
    var offsets      = this.offset
    var targets      = this.target
    var activeTarget = this.activeTarge
    var 
    if (this.scrollHeight != scrollHeight) 
      this.refresh(
    
    if (scrollTop >= maxScroll) 
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i
    
    if (activeTarget && scrollTop < offsets[0]) 
      this.activeTarget = nul
      return this.clear(
    
    for (i = offsets.length; i--;) 
      activeTarget != targets[i
        && scrollTop >= offsets[i
        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1]
        && this.activate(targets[i]
    
  
  ScrollSpy.prototype.activate = function (target) 
    this.activeTarget = targe
    this.clear(
    var selector = this.selector 
      '[data-target="' + target + '"],' 
      this.selector + '[href="' + target + '"]
    var active = $(selector
      .parents('li'
      .addClass('active'
    if (active.parent('.dropdown-menu').length) 
      active = activ
        .closest('li.dropdown'
        .addClass('active'
    
    active.trigger('activate.bs.scrollspy'
  
  ScrollSpy.prototype.clear = function () 
    $(this.selector
      .parentsUntil(this.options.target, '.active'
      .removeClass('active'
  

  // SCROLLSPY PLUGIN DEFINITIO
  // ==========================
  function Plugin(option) 
    return this.each(function () 
      var $this   = $(this
      var data    = $this.data('bs.scrollspy'
      var options = typeof option == 'object' && optio
      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options))
      if (typeof option == 'string') data[option](
    }
  
  var old = $.fn.scrollsp
  $.fn.scrollspy             = Plugi
  $.fn.scrollspy.Constructor = ScrollSp

  // SCROLLSPY NO CONFLIC
  // ====================
  $.fn.scrollspy.noConflict = function () 
    $.fn.scrollspy = ol
    return thi
  

  // SCROLLSPY DATA-AP
  // =================
  $(window).on('load.bs.scrollspy.data-api', function () 
    $('[data-spy="scroll"]').each(function () 
      var $spy = $(this
      Plugin.call($spy, $spy.data()
    }
  }
}(jQuery)
/* =======================================================================
 * Bootstrap: tab.js v3.3.
 * http://getbootstrap.com/javascript/#tab
 * =======================================================================
 * Copyright 2011-2015 Twitter, Inc
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE
 * ======================================================================== *

+function ($) 
  'use strict'
  // TAB CLASS DEFINITIO
  // ===================
  var Tab = function (element) 
    this.element = $(element
  
  Tab.VERSION = '3.3.4
  Tab.TRANSITION_DURATION = 15
  Tab.prototype.show = function () 
    var $this    = this.elemen
    var $ul      = $this.closest('ul:not(.dropdown-menu)'
    var selector = $this.data('target'
    if (!selector) 
      selector = $this.attr('href'
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie
    
    if ($this.parent('li').hasClass('active')) retur
    var $previous = $ul.find('.active:last a'
    var hideEvent = $.Event('hide.bs.tab', 
      relatedTarget: $this[0
    }
    var showEvent = $.Event('show.bs.tab', 
      relatedTarget: $previous[0
    }
    $previous.trigger(hideEvent
    $this.trigger(showEvent
    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) retur
    var $target = $(selector
    this.activate($this.closest('li'), $ul
    this.activate($target, $target.parent(), function () 
      $previous.trigger(
        type: 'hidden.bs.tab'
        relatedTarget: $this[0
      }
      $this.trigger(
        type: 'shown.bs.tab'
        relatedTarget: $previous[0
      }
    }
  
  Tab.prototype.activate = function (element, container, callback) 
    var $active    = container.find('> .active'
    var transition = callbac
      && $.support.transitio
      && (($active.length && $active.hasClass('fade')) || !!container.find('> .fade').length
    function next() 
      $activ
        .removeClass('active'
        .find('> .dropdown-menu > .active'
          .removeClass('active'
        .end(
        .find('[data-toggle="tab"]'
          .attr('aria-expanded', false
      elemen
        .addClass('active'
        .find('[data-toggle="tab"]'
          .attr('aria-expanded', true
      if (transition) 
        element[0].offsetWidth // reflow for transitio
        element.addClass('in'
      } else 
        element.removeClass('fade'
      
      if (element.parent('.dropdown-menu').length) 
        elemen
          .closest('li.dropdown'
            .addClass('active'
          .end(
          .find('[data-toggle="tab"]'
            .attr('aria-expanded', true
      
      callback && callback(
    
    $active.length && transition 
      $activ
        .one('bsTransitionEnd', next
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) 
      next(
    $active.removeClass('in'
  

  // TAB PLUGIN DEFINITIO
  // ====================
  function Plugin(option) 
    return this.each(function () 
      var $this = $(this
      var data  = $this.data('bs.tab'
      if (!data) $this.data('bs.tab', (data = new Tab(this))
      if (typeof option == 'string') data[option](
    }
  
  var old = $.fn.ta
  $.fn.tab             = Plugi
  $.fn.tab.Constructor = Ta

  // TAB NO CONFLIC
  // ==============
  $.fn.tab.noConflict = function () 
    $.fn.tab = ol
    return thi
  

  // TAB DATA-AP
  // ===========
  var clickHandler = function (e) 
    e.preventDefault(
    Plugin.call($(this), 'show'
  
  $(document
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler
}(jQuery)
/* =======================================================================
 * Bootstrap: affix.js v3.3.
 * http://getbootstrap.com/javascript/#affi
 * =======================================================================
 * Copyright 2011-2015 Twitter, Inc
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE
 * ======================================================================== *

+function ($) 
  'use strict'
  // AFFIX CLASS DEFINITIO
  // =====================
  var Affix = function (element, options) 
    this.options = $.extend({}, Affix.DEFAULTS, options
    this.$target = $(this.options.target
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this)
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this)
    this.$element     = $(element
    this.affixed      = nul
    this.unpin        = nul
    this.pinnedOffset = nul
    this.checkPosition(
  
  Affix.VERSION  = '3.3.4
  Affix.RESET    = 'affix affix-top affix-bottom
  Affix.DEFAULTS = 
    offset: 0
    target: windo
  
  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) 
    var scrollTop    = this.$target.scrollTop(
    var position     = this.$element.offset(
    var targetHeight = this.$target.height(
    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : fals
    if (this.affixed == 'bottom') 
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom
    
    var initializing   = this.affixed == nul
    var colliderTop    = initializing ? scrollTop : position.to
    var colliderHeight = initializing ? targetHeight : heigh
    if (offsetTop != null && scrollTop <= offsetTop) return 'top
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom
    return fals
  
  Affix.prototype.getPinnedOffset = function () 
    if (this.pinnedOffset) return this.pinnedOffse
    this.$element.removeClass(Affix.RESET).addClass('affix'
    var scrollTop = this.$target.scrollTop(
    var position  = this.$element.offset(
    return (this.pinnedOffset = position.top - scrollTop
  
  Affix.prototype.checkPositionWithEventLoop = function () 
    setTimeout($.proxy(this.checkPosition, this), 1
  
  Affix.prototype.checkPosition = function () 
    if (!this.$element.is(':visible')) retur
    var height       = this.$element.height(
    var offset       = this.options.offse
    var offsetTop    = offset.to
    var offsetBottom = offset.botto
    var scrollHeight = $(document.body).height(
    if (typeof offset != 'object')         offsetBottom = offsetTop = offse
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element
    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom
    if (this.affixed != affix) 
      if (this.unpin != null) this.$element.css('top', ''
      var affixType = 'affix' + (affix ? '-' + affix : ''
      var e         = $.Event(affixType + '.bs.affix'
      this.$element.trigger(e
      if (e.isDefaultPrevented()) retur
      this.affixed = affi
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : nul
      this.$elemen
        .removeClass(Affix.RESET
        .addClass(affixType
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix'
    
    if (affix == 'bottom') 
      this.$element.offset(
        top: scrollHeight - height - offsetBotto
      }
    
  

  // AFFIX PLUGIN DEFINITIO
  // ======================
  function Plugin(option) 
    return this.each(function () 
      var $this   = $(this
      var data    = $this.data('bs.affix'
      var options = typeof option == 'object' && optio
      if (!data) $this.data('bs.affix', (data = new Affix(this, options))
      if (typeof option == 'string') data[option](
    }
  
  var old = $.fn.affi
  $.fn.affix             = Plugi
  $.fn.affix.Constructor = Affi

  // AFFIX NO CONFLIC
  // ================
  $.fn.affix.noConflict = function () 
    $.fn.affix = ol
    return thi
  

  // AFFIX DATA-AP
  // =============
  $(window).on('load', function () 
    $('[data-spy="affix"]').each(function () 
      var $spy = $(this
      var data = $spy.data(
      data.offset = data.offset || {
      if (data.offsetBottom != null) data.offset.bottom = data.offsetBotto
      if (data.offsetTop    != null) data.offset.top    = data.offsetTo
      Plugin.call($spy, data
    }
  }
}(jQuery)
