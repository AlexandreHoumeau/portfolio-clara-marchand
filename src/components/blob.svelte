<script>
	import SimplexNoise from 'simplex-noise';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { spline } from '../utils/spline';
	import { spring } from 'svelte/motion';
	import { circIn } from 'svelte/easing';

	let coords = spring(
		{ x: 50, y: 50 },
		{
			stiffness: 0.1,
			damping: 0.25
		}
	);
	let size = spring(10);
	let path;
	onMount(async () => {
		// let noiseStep = 0.001;

		// const simplex = new SimplexNoise();

		// let points = createPoints();

		// 	(function animate() {
		// 		path.setAttribute('d', spline(points, 1, true));
		// 		for (let i = 0; i < points.length; i++) {
		// 			const point = points[i];
		// 			const nX = noise(point.noiseOffsetX, point.noiseOffsetX);
		// 			const nY = noise(point.noiseOffsetY, point.noiseOffsetY);
		// 			const x = map(nX, -1, 1, point.originX - 20, point.originX + 20);
		// 			const y = map(nY, -1, 1, point.originY - 10, point.originY + 10);

		// 			point.x = x;
		// 			point.y = y;

		// 			point.noiseOffsetX += noiseStep;
		// 			point.noiseOffsetY += noiseStep;
		// 		}
		// 		requestAnimationFrame(animate);
		// 	});

		// 	requestAnimationFrame(animate);

		// 	function map(n, start1, end1, start2, end2) {
		// 		return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
		// 	}

		// 	function noise(x, y) {
		// 		return simplex.noise2D(x, y);
		// 	}

		// 	function createPoints() {
		// 		const points = [];
		// 		const numPoints = 6;
		// 		const angleStep = (Math.PI * 2) / numPoints;
		// 		const rad = 50;

		// 		for (let i = 1; i <= numPoints; i++) {
		// 			const theta = i * angleStep;

		// 			const x = 100 + Math.cos(theta) * rad;
		// 			const y = 100 + Math.sin(theta) * rad;

		// 			points.push({
		// 				x: x,
		// 				y: y,
		// 				originX: x,
		// 				originY: y,
		// 				noiseOffsetX: Math.random() * 1000,
		// 				noiseOffsetY: Math.random() * 1000
		// 			});
		// 		}

		// 		return points;
		// 	}

		document.querySelector('path').addEventListener('mouseover', () => {
			var y = $coords.y;
			var x = $coords.x;
			y = $coords.y - (150 - $coords.y) * 1.1;
			x = $coords.x - (150 - $coords.x) * 1.1;
			console.log(y)
			path.setAttribute('d', 'M38.7,-38.7C52.9,-24.6,68.9,-12.3,69.5,0.6C70.1,13.5,55.2,26.9,41.1,40.6C26.9,54.2,13.5,68.1,-4.9,73.1C-23.3,78,-46.7,74,-51.1,60.3C-55.5,46.7,-41.1,23.3,-39,2.1C-37,-19.2,-47.3,-38.4,-42.9,-52.5C-38.4,-66.6,-19.2,-75.6,-3.5,-72.2C12.3,-68.7,24.6,-52.8,38.7,' + Number(y));

		});

		// document.querySelector('path').addEventListener('mouseleave', () => {
		// 	noiseStep = 0.001;
		// });
	});
</script>

<svg in:fade={{ duration: 300 }} viewBox="0 0 200 200">
	<defs>
		<linearGradient id="gradient" gradientTransform="rotate(90)">
			<stop id="gradientStop1" offset="0%" stop-color="var(--startColor)" />
			<stop id="gradientStop2 " offset="100%" stop-color="var(--stopColor)" />
		</linearGradient>
	</defs>
	<!-- <path
		on:mousemove={(e) => coords.set({ x: e.clientX - 500, y: e.clientY - 500 })}
		bind:this={path}
		id="path"
		d=""
		fill="url('#gradient')"
	/> -->
	<path
		bind:this={path}
		on:mousemove={(e) => coords.set({ x: e.clientX, y: e.clientY })}
		fill="#FF0066"
		d="M38.7,-38.7C52.9,-24.6,68.9,-12.3,69.5,0.6C70.1,13.5,55.2,26.9,41.1,40.6C26.9,54.2,13.5,68.1,-4.9,73.1C-23.3,78,-46.7,74,-51.1,60.3C-55.5,46.7,-41.1,23.3,-39,2.1C-37,-19.2,-47.3,-38.4,-42.9,-52.5C-38.4,-66.6,-19.2,-75.6,-3.5,-72.2C12.3,-68.7,24.6,-52.8,38.7,-38.7Z"
		transform="translate(100 100)"
	/>
</svg>

<style>
	svg path {
		position: absolute;
		left: 0;
		right: 0;
		width: 30vmin;
		height: 30vmin;
	}
	path {
		fill: white;
	}

	circle {
		fill: red;
	}
</style>
