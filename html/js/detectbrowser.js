_browser = {};
function detectBrowser() {
    var uagent = navigator.userAgent.toLowerCase();

    _browser.firefox = /mozilla/.test(uagent) && /firefox/.test(uagent);
    _browser.chrome = /webkit/.test(uagent) && /chrome/.test(uagent);
    _browser.safari = /applewebkit/.test(uagent) && /safari/.test(uagent) 
                                                    && !/chrome/.test(uagent);
    _browser.opera = /opera/.test(uagent);
    _browser.msie = /msie/.test(uagent);
    _browser.version = '';

    if (!(_browser.msie || _browser.firefox || _browser.chrome ||
           _browser.safari || _browser.opera))
    {
        if (/trident/.test(uagent)) {
            _browser.msie = true;
            _browser.version = 11;
        }
    }

    if (_browser.version === '') {
        for (x in _browser) {
            if (_browser[x]) {            
                _browser.version = uagent.match(new RegExp("(" + x + ")( |/)([0-9]+)"))[3];
                break;
            }
        }
    }
}
