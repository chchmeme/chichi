$(function () {
	$('.gnb_menu li').click(function () {
		$(this).addClass('active').siblings().removeClass('active');
	});
	$('.fullpage').fullpage({
		verticalCentered: false,
		css3: false,
		anchors: ['firstPage', '2rdPage', '3rdPage', '4thpage', '5thpage', 'lastPage'],
		afterLoad: function (_, index) {
			//화면전환 직후에 실행
			if (index == 1) {
				$(".gnb_menu li:nth-child(1)").addClass('active').siblings().removeClass('active');
			}
			if (index == 2) {
				$(".gnb_menu li:nth-child(2)").addClass('active').siblings().removeClass('active');
			}
			if (index == 3) {
				$(".gnb_menu li:nth-child(3)").addClass('active').siblings().removeClass('active');
			}
			if (index == 4) {
				$(".gnb_menu li:nth-child(4)").addClass('active').siblings().removeClass('active');
			}
			if (index == 5) {
				$(".gnb_menu li:nth-child(5)").addClass('active').siblings().removeClass('active');
			}
			if (index == 6) {
				$(".gnb_menu li").removeClass('active');
			}
			const $section = $('.section').eq(index - 1);
			$section.find('[data-aos]').addClass('aos-animate');
		},
		onLeave: function (index, nextIndex, direction) {
			// //화면전환 직전에 실행
		}
	});

	function init() {
		mainHeaderFunc();
	}
	init();
});

function mainHeaderFunc() {
	$('.btnMainToggle, .panel-overlay').click(function () {
		$('.btnMainToggle, .panel-overlay, .panel').toggleClass('active');
		if ($('.panel-overlay').hasClass('active')) {
			$('.panel-overlay').fadeIn();
		} else {
			$('.panel-overlay').fadeOut();
		}
	});
	$('.mobGnb li').click(function () {
		$('.btnMainToggle, .panel-overlay, .panel').removeClass('active');
		if ($('.panel-overlay').hasClass('active')) {
			$('.panel-overlay').fadeIn();
		} else {
			$('.panel-overlay').fadeOut();
		}
	});

}
