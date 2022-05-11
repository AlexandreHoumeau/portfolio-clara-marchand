<script>
import Icon from "../../utils/Icon.svelte";

	const softwares = [
		{ logo: 'figma', title: 'Figma' },
		{ logo: '', title: 'Adobe Xd' },
		{ logo: '', title: 'Sketch' },
		{ logo: '', title: 'Invision' },
		{ logo: '', title: 'Illusrtator' },
		{ logo: '', title: 'Premiere Pro' },
		{ logo: '', title: 'Photoshop' },
		{ logo: '', title: 'After effect' }
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
			endAt: '2917',
			title: 'MANAA (Mise à niveau en arts appliqués)',
			school: 'Lim’art',
			location: 'Bordeaux'
		}
	];
</script>

<div class="p-20 font-pp-regular text-primary">
	<div class="grid grid-cols-3 gap-10">
		<div class="bg-secondary  col-span-1 rounded-3xl p-6">
			<div class="text-5xl mb-6 font-wg-bold">Logiciels</div>

			{#each softwares as software}
				<div class="bg-white flex items-center py-5 px-8 mb-2 rounded-full">
          <Icon name="figma" class="fill-primary " />
					<div class="text-sm">{software.title}</div>
				</div>
			{/each}
		</div>
		<div class="bg-secondary col-span-2 rounded-3xl p-6">
			<div class="text-5xl mb-6 font-wg-bold">Diplomes</div>

			{#each diplomes as diplome}
				<div class="bg-white flex gap-4 items-center py-5 px-4 mb-2 rounded-2xl">
					<div class="bg-primary h-20 w-3 rounded-full" />
					<div>
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
</div>
