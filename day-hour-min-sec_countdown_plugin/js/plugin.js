(function($){
    $.fn.countdown = function(options, callback) {

        var settings = { 'date': null };
        if(options){
            $.extend(settings, options)
        }
        this_selected = this;
        
        current = settings['from'];

        function countdown_exec() {

            eventDate = Date.parse(settings['date']) / 1000;
            currentDate = Math.floor($.now() / 1000);

            if(eventDate <= currentDate){
                callback.call(this);
                clearInterval(interval);
            }

            seconds = eventDate - currentDate;

            days = Math.floor(seconds / (60 * 60 * 24));
            seconds -= days * 60 * 60 * 24;

            hours = Math.floor(seconds / (60 * 60 ));    
            seconds -= hours * 60 * 60;

            mins = Math.floor(seconds / 60);
            seconds -= mins * 60;

            days = (String(days).length !== 2) ? '0' + days : days;
            hours = (String(hours).length !== 2) ? '0' + hours : hours;
            mins = (String(mins).length !== 2) ? '0' + mins : mins;
            seconds = (String(seconds).length !== 2) ? '0' + seconds : seconds;

            if(!isNaN(eventDate)){
                this_selected.find('.days').text(days);
                this_selected.find('.hours').text(hours);
                this_selected.find('.mins').text(mins);
                this_selected.find('.seconds').text(seconds);
    
            }
        }

        countdown_exec();

        interval = setInterval(countdown_exec, 1000);
    }
})(jQuery);