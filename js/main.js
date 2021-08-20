$(document).ready(function () {
	let currentFloor = 2; // Переменная с текущим этажом
	let floorPath = $('.main-image__home path'); // каждый отдельный этаж в SVG 
	let counterUp = $('.main-info__button--up'); // кнопка увеличения этажа
	let counterDown = $('.main-info__button--down'); // кнопка уменьшения этажа
	let counter = $('.counter'); // Счетчик этажей

	// Функция при наведении мышью на этаж

	floorPath.on('mouseover', function () {
		floorPath.removeClass('current-floor'); // удаляем активный класс этажей
		currentFloor = $(this).attr("data-floor"); // получаем значение текущего этажа
		counter.text(currentFloor); // записываем значение этажа в счетчик
		$(`[data-floor=${currentFloor}]`).toggleClass('current-floor');  // подсвечиваем текущий этаж
	});

	counterUp.on('click', function () { // Отслеживаем клик по кнопке вверх
		if (currentFloor < 18) { // Проверяем значение этажа, оно не должно быть больше 18
			currentFloor++; // Увеличиваем на 1
			// Форматируем переменную с этажом, чтобы было 01 вместо 1
			usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
			counter.text(usCurrentFloor); // записываем значение этажа в счетчик
			floorPath.removeClass('current-floor'); // удаляем активный класс этажей
			$(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor'); // подсвечиваем текущий этаж
		}
	});

	counterDown.on('click', function () { // Отслеживаем клик по кнопке вниз
		if (currentFloor > 2) { // Проверяем значение этажа, оно должно быть больше 2
			currentFloor--; // Уменьшаем на 1
			// Форматируем переменную с этажом, чтобы было 01 вместо 1
			usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
			counter.text(usCurrentFloor);  // записываем значение этажа в счетчик
			floorPath.removeClass('current-floor'); // удаляем активный класс этажей
			$(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');  // подсвечиваем текущий этаж
		}
	})

	let modal = $('.modal');
	let closeBtn = $('.modal__close');
	let button = $('.button');

	function toggleModal() {
		modal.toggleClass('is-open');
		modal.toggleClass('fade');
	}

	floorPath.on('click', function() {
		counter.text(currentFloor);
		toggleModal();
	});

	button.on('click', function () {
		toggleModal();
		document.body.style.overflow = "hidden";
	});

	closeBtn.on('click', function () {
		toggleModal();
		document.body.style.overflow = "";
	})


});