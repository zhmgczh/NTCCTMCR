var str_Url = '';
var PlayerShare = function(url, ucs, alt, lang) {
	var url = url;
	str_Url = url;
	var init = function() {
		loadScript(url+'js/jquery-3.7.1.min.js', function() {
			loadScript(url+'js/jquery.svg.min.js', function() {
				loadScript(url+'js/jquery.svganim.min.js', function() {
					loadScript(url+'js/howler.js', function() {
						loadScript(url+'stroke_exercise_resources/js/stroke.js', function() {
							loadScript(url+'stroke_exercise_resources/js/stroke-player.js', function() {
								$.get(url+'strokePlayer.do?ucs='+ucs+'&useAlt='+alt+'&lang='+lang, function(data) {
									$('#stroke_player').html(data);
								});
							});
						});
					});
				});
			});
		});
	};
	this.load = function() {
		init();
	};
}
var loadScript = function(url, callback) {
	var script = document.createElement('script');
	script.type = 'text/javascript';
	if (typeof(callback) != 'undefined') {
		if (script.readyState) {
			script.onreadystatechange = function() {
				if (script.readyState == 'loaded' || script.readyState == 'complete') {
					script.onreadystatechange = null;
					callback();
				}
			};
		} else {
			script.onload = function() {
				callback();
			};
		}
	}
	script.src = url;
	document.body.appendChild(script);
}