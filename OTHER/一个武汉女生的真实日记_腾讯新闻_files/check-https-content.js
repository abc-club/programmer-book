function getAttr(arg, attr) {
  var links = document.getElementsByTagName(arg);
  var attrs = [];
  var i;
  var len = links.length;
  for (i = 0; i < len; i++) {
      var attrStr = links[i].getAttribute(attr);
      if (links[i] && attrStr && attrStr.indexOf('http:') !== -1) {
          attrs.push(attrStr);
      }
  }
  return attrs;
}

function checkHttpsContent() {
  if (location.protocol === 'https:') {
      var links = getAttr('link', 'href');
      var scripts = getAttr('script', 'src');
      var imgs = getAttr('img', 'src');
      var url = document.location.href;

      var count = links.length + scripts.length + imgs.length;
      var bossStr = "sUrl=" + encodeURIComponent(url);

      if (links.length > 0) {
          bossStr += "&links=[" + links.length + "]" + links[0];
          // console.log(links);
      }
      if (scripts.length > 0) {
          bossStr += "&scripts=[" + scripts.length + "]" + scripts[0];
          // console.log(scripts);
      }
      if (imgs.length > 0) {
          bossStr += "&imgs=[" + imgs.length + "]" + imgs[0];
          // console.log(imgs);
      }
      if (count > 0) {
          bossStr += "&count=" + count;
          boss(bossStr)
      }
      // console.log(`url: ${url} links: ${links.length} scripts: ${scripts.length} imgs: ${imgs.length}`)
  }
}

function boss(sop) {
  var g_btrace_BOSS = new Image(1,1);
  g_btrace_BOSS.src = "//btrace.qq.com/kvcollect?BossId=2929&Pwd=876756406&" + sop + "&_dc=" + Math.random();
}


setTimeout(function(){
  checkHttpsContent();
}, 1000);

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('/service-worker.js', {scope: 'sw-test'}).then(function(registration) {
//     registration.unregister().then(function(boolean) {
//       boss('sUrl=service-worker-' + boolean)
//       console.log(boolean)
//     });
//   }).catch(function(error) {
//     console.log('Registration failed with ' + error);
//   });
// };/*  |xGv00|67781097766f80bf561cf7693be5ef78 */