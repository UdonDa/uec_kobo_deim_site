$(function(){
	var Window = $(window),
		blockTop = new Array(),
		active = -1;

	// 各要素 top
	$(".block").each(function(i) {
		blockTop[i] = $(this).offset().top;
	});

	// 該当要素の最後がスクロールを過ぎればループ停止
	Window.scroll(function() {
		for (var i = blockTop.length - 1 ; i >= 0; i--) {
			if (Window.scrollTop() > blockTop[i] - 0.1) {
				changeBlock(i);
				break;
			}
		}
	});

	changeBlock(0); // 第一要素に .active 付与
	function changeBlock(block) {
		if (block != active) {
			active = block;
			blockCurrent = block + 1; // 第二要素以降

			$("#scrollspy, #scrollspy-side").find("a").removeClass("active");
			$('#scrollspy-side li:nth-child(' + blockCurrent + ')').find("a").addClass("active");
			$('#scrollspy li:nth-child(' + blockCurrent + ')').find("a").addClass("active");
		}
	}

	// smooth scroll
	$("a[href^=#]").click(function() {
		var link = $(this).attr("href"),
			target = $(link === "#" || link === "" ? "html" : link);

		target.velocity("scroll", {
			duration: 400,
			easing: "ease-out"
		});
		return false;
	});
});