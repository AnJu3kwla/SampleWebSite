function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse((new Date()).toUTCString());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
      var t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
  var date = Date.UTC(2020,6,18,22,47,0)
  var newDate = new Date()
  var newDate = newDate.toUTCString()
  var diff = Date.parse(newDate)-date
  var num = Math.floor(diff/1000/3600/25) + 1
  var deadline = new Date(date + num * 25 * 60 * 60 * 1000 );
  console.log((new Date(date)).toUTCString())
  console.log(newDate)
  initializeClock('clockdiv', deadline);
  console.log(deadline.toUTCString())
