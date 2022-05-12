<script>
	import Icon from '../../utils/Icon.svelte';

	const softwares = [
		{ logo: 'figma', title: 'Figma' },
		{ logo: 'xd', title: 'Adobe Xd' },
		{ logo: 'psd', title: 'Sketch' },
		{ logo: 'invision', title: 'Invision' },
		{ logo: 'ai', title: 'Illusrtator' },
		{ logo: 'premiere', title: 'Premiere Pro' },
		{ logo: 'psd', title: 'Photoshop' },
		{ logo: 'after', title: 'After effect' }
	];

	const diplomes = [
		{
			startedAt: '2020',
			endAt: '2022',
			title: 'Master Expert UI/UX',
			school: 'My Digital School',
			location: 'Paris'
		},
		{
			startedAt: '2019',
			endAt: '2020',
			title: '3ème année Bachelor web design',
			school: 'My Digital School',
			location: 'Paris'
		},
		{
			startedAt: '2017',
			endAt: '2019',
			title: 'BTS Design Graphique options médias numériques',
			school: 'LISAA',
			location: 'Bordeaux'
		},
		{
			startedAt: '2016',
			endAt: '2017',
			title: 'MANAA (Mise à niveau en arts appliqués)',
			school: 'Lim’art',
			location: 'Bordeaux'
		}
	];

	const reviews = [
		{
			name: 'Anne Lehec',
			role: 'Manager - Allianz',
			review:
				'Lorem ipsum dolor sit amet bla lorem ipsum dolor sit amet bla lorem ipsum dolor sit amet bla lorem ipsum dolor sit amet bla lorem ipsum dolor sit amet bla lorem ipsum dolor sit amet bla lorem ipsum dolor sit amet bla lorem ipsum dolor sit amet bla lorem ipsum dolor sit amet bla lorem ipsum dolor sit amet bla'
		},
		{
			name: 'Lara Faroux',
			role: 'Ux designer - Allianz',
			review:
				'Lorem ipsum dolor sit amet bla lorem ipsum dolor sit amet bla lorem ipsum dolor sit amet bla lorem ipsum dolor sit amet bla lorem ipsum dolor sit amet bla lorem ipsum dolor sit amet bla lorem ipsum dolor sit amet bla lorem ipsum dolor sit amet bla lorem ipsum dolor sit amet bla lorem ipsum dolor sit amet bla'
		},
		{
			name: 'Gabriella Fedrigo',
			role: 'Ux designer - Allianz',
			review:
				'Lorem ipsum dolor sit amet bla lorem ipsum dolor sit amet bla lorem ipsum dolor sit amet bla lorem ipsum dolor sit amet bla lorem ipsum dolor sit amet bla lorem ipsum dolor sit amet bla lorem ipsum dolor sit amet bla lorem ipsum dolor sit amet bla lorem ipsum dolor sit amet bla lorem ipsum dolor sit amet bla'
		}
	];
</script>

<div class="lg:p-20 p-4 font-pp-regular text-primary">
	<div class="lg:grid grid-cols-3 gap-10">
		<div class="bg-secondary  col-span-1 rounded-3xl p-6">
			<div class="text-[40px] mb-6 font-wg-bold">Logiciels</div>

			{#each softwares as software}
				<div class="bg-white flex items-center gap-4 py-5 px-8 mb-2 rounded-full">
					<Icon name={software.logo} class="fill-primary" />
					<div class="text-lg">{software.title}</div>
				</div>
			{/each}
		</div>

		<div class="bg-secondary col-span-2 rounded-3xl p-6 mt-4 lg:mt-0">
			<div class="text-[40px] mb-6 font-wg-bold">Diplomes</div>
			{#each diplomes as diplome}
				<div class="bg-white flex gap-4 text-xs lg:text-lg items-start py-5 px-4 mb-4 rounded-2xl">
					<div class="bg-primary h-20 lg:w-3 w-1 rounded-full" />
					<div class="">
						<div>{diplome.startedAt}</div>
						<div>{diplome.endAt}</div>
					</div>
					<div>
						<div class="font-pp-bold">{diplome.title}</div>
						<div class="">{diplome.school}</div>
						<div class="">{diplome.location}</div>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<div class="bg-secondary font-pp-regular text-primary mt-10 rounded-3xl lg:p-6">
		<div class="text-[40px] mb-6 p-6 lg:p-0 font-wg-bold">Avis</div>
		<div class="lg:grid space-y-4 lg:space-y-0 grid-cols-3  gap-4">
			{#each reviews as rev}
				<div class="bg-white p-5 col-span-1 text-lg rounded-3xl">
					<div class="font-pp-bold">{rev.name}</div>
					<div>{rev.role}</div>
					<div class="mt-5">{rev.review}</div>
				</div>
			{/each}
		</div>
	</div>
</div>
