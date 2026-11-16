
(function(){
  var btn = document.getElementById('wisp-toggle');
  if (!btn) return;
  function wispIdx(gd){
    var idx = [], data = gd.data || [];
    for (var i = 0; i < data.length; i++){
      var tr = data[i];
      if (!tr) continue;
      if (tr.meta === 'wisp' || tr.legendgroup === 'wisps' || tr.name === 'wisp') idx.push(i);
    }
    return idx;
  }
  btn.addEventListener('click', function(){
    var on = btn.getAttribute('aria-pressed') !== 'true';
    btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    var plots = document.querySelectorAll('.js-plotly-plot');
    for (var p = 0; p < plots.length; p++){
      var gd = plots[p];
      var idx = wispIdx(gd);
      if (idx.length && window.Plotly) Plotly.restyle(gd, {visible: on}, idx);
    }
  });
})();
