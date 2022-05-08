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

	let mouse;

	const onMouseMove = (e) => {
		coords.set({ x: e.clientX - 500, y: e.clientY - 500 });
	};

	let size = spring(10);
	let path;
	onMount(async () => {
		let deviceWidth = window.innerWidth > 0 ? window.innerWidth : screen.width;
		let isMobile = deviceWidth <= 767;

		let noiseStep = 0.001;

		const simplex = new SimplexNoise();

		let points = createPoints();

		(function animate() {
			path.setAttribute('d', spline(points, 1, true));
			for (let i = 0; i < points.length; i++) {
				const point = points[i];
				const nX = noise(point.noiseOffsetX, point.noiseOffsetX);
				const nY = noise(point.noiseOffsetY, point.noiseOffsetY);
				const x = map(nX, -1, 1, point.originX - 20, point.originX + 10);
				const y = map(nY, -1, 1, point.originY - 10, point.originY + 10);

				point.x = x;
				point.y = y;

				point.noiseOffsetX += noiseStep;
				point.noiseOffsetY += noiseStep;
			}
			requestAnimationFrame(animate);
		});

		requestAnimationFrame(animate);

		function map(n, start1, end1, start2, end2) {
			return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
		}

		function noise(x, y) {
			return simplex.noise2D(x, y);
		}

		function createPoints() {
			const points = [];
			const numPoints = 6;
			const angleStep = (Math.PI * 2) / numPoints;
			const rad = isMobile ? 85 : 85;

			for (let i = 1; i <= numPoints; i++) {
				const theta = i * angleStep;

				const x = 100 + Math.cos(theta) * rad;
				const y = 100 + Math.sin(theta) * rad;

				points.push({
					x: x,
					y: y,
					originX: x,
					originY: y,
					noiseOffsetX: Math.random() * 1000,
					noiseOffsetY: Math.random() * 1000
				});
			}

			return points;
		}
	});
</script>

<svg on:mousemove={onMouseMove} in:fade={{ duration: 300 }} class="h-full w-full" viewBox="0 0 200 200">
	<defs>
		<linearGradient id="gradient" gradientTransform="rotate(90)">
			<stop id="gradientStop1" offset="0%" stop-color="var(--startColor)" />
			<stop id="gradientStop2 " offset="100%" stop-color="var(--stopColor)" />
		</linearGradient>
	</defs>
	<path bind:this={path} id="path" d="" fill="url('#gradient')" />
</svg>

<style>
	svg path {
		/* position: absolute; */
		/* left: 0;
		right: 0; */
		/* width: 100%; */
		/* height: 100%; */
	}

	path {
		fill: #fff;
	}
</style>
