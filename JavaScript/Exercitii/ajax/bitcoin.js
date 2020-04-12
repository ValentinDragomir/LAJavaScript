$.getJSON(
    "https://api.coindesk.com/v1/bpi/currentprice.json",
    function(data) {
        $('#rate1').html(data.bpi.EUR.rate_float);
        $('#rate2').html(data.bpi.USD.rate_float);
        $('#rate3').html(data.bpi.GBP.rate_float);
    }
);