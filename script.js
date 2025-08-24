$(function () {
	$('.nav-btn').on('click', function () {
		$(this).toggleClass('open');
	});
});

$(window).ready(function () {
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		if (scroll > 100) {
			$('#header').addClass('glass-effect');
		} else {
			$('#header').removeClass('glass-effect');
		}
	});
});

('use strict');

let numbers = Array.from({ length: 6 }, () => Math.floor(Math.random() * 100));

function filterEven(arr) {
	return arr.filter((n) => n % 2 === 0);
}

const entryForm = document.querySelector('#user-entry-form');
const introBanner = document.querySelector('#entry-banner');
const completeStatus = document.querySelector('#entry-success');
const entryBtn = document.querySelector('#entry-submit');

function calcStats(arr) {
	let sum = arr.reduce((a, b) => a + b, 0);
	return { count: arr.length, sum };
}

async function handleEntry(e) {
	e.preventDefault();
	entryForm.classList.toggle('gone-section');
	introBanner.classList.toggle('gone-section');
	completeStatus.classList.toggle('gone-section');
}

function processStats() {
	let evens = filterEven(numbers);
	let stats = calcStats(evens);
}

entryForm.addEventListener('submit', handleEntry);

processStats();
