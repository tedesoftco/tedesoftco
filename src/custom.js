(function(w, d, u, b) {
    w['Bitrix24FormObject'] = b;
    w[b] = w[b] || function() {
        arguments[0].ref = u;
        (w[b].forms = w[b].forms || []).push(arguments[0])
    };
    if (w[b]['forms']) return;
    var s = d.createElement('script');
    s.async = 1;
    s.src = u + '?' + (1 * new Date());
    var h = d.getElementsByTagName('script')[0];
    h.parentNode.insertBefore(s, h);
})(window, document, 'https://tedesoft.bitrix24.es/bitrix/js/crm/form_loader.js', 'b24form');
b24form({
    "id": "2",
    "lang": "la",
    "sec": "gco1fw",
    "type": "inline"
});