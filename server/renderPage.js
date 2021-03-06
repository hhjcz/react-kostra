/** Created by hhj on 8/23/16. */

export default function(options = { isDevelopment: false }) {
  const { isDevelopment } = options

  return function render(req, res, next) {
    // in devel the style are inlined
    const appStyleSheet = isDevelopment
      ? ''
      : '<link rel="stylesheet" href="app.css">'

    const html = `<!doctype html>
<html lang="">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <title>Kostra</title>
  <meta name="description" content="">
  <link rel="icon" type="image/x-icon" href="img/favicon-skull-simple.ico">
  <link rel="stylesheet" href="css/normalize.css">
  ${appStyleSheet}
  <script src="js/modernizr-2.8.3.min.js"></script>
</head>
<body>

<div id="react-view">sem to prijde</div>

<script src="app.js"></script>

<!--<script>
    window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;
    ga('create','UA-XXXXX-Y','auto');ga('send','pageview')
</script>
<script src="https://www.google-analytics.com/analytics.js" async defer></script>-->

</body>
</html>`

    res.end(html)

  }
}
