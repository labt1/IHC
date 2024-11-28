import { Flex, Heading, Text, SmartImage, Grid } from '@/once-ui/components';
import { Mailchimp } from '@/components';
import { Posts } from '@/components/blog/Posts';
import { baseURL, renderContent } from '@/app/resources'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import TableOfContents from '@/components/about/TableOfContents';

export async function generateMetadata(
	{ params: { locale } }: { params: { locale: string } }
) {

	const t = await getTranslations();
	const { blog } = renderContent(t);

	const title = blog.title;
	const description = blog.description;
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}/${locale}/blog`,
			images: [
				{
					url: ogImage,
					alt: title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage],
		},
	};
}

export default function Blog(
	{ params: { locale } }: { params: { locale: string } }
) {
	unstable_setRequestLocale(locale);

	const t = useTranslations();
	const { person, blog, newsletter } = renderContent(t);

	const structure = [
		{
			title: "1. Introducción",
			display: true,
			items: []
		},
		{
			title: "2. Planteamiento del Problema",
			display: true,
			items: []
		},
		{
			title: "3. Objetivo",
			display: true,
			items: []
		},
		{
			title: "4. Público Objetivo",
			display: true,
			items: []
		},
		{
			title: "5. Qué hará el proyecto",
			display: true,
			items: []
		},
		{
			title: "6. Análisis de sistemas existentes",
			display: true,
			items: []
		},
		{
			title: "7. Artículo Relacionado",
			display: true,
			items: []
		},
	]

	const image =  // optional: leave the array empty if you don't want to display images
	{
		src: '/images/OIP.jpg',
		alt: 'Once UI Project',
		width: 1,
		height: 1
	}


	return (
		<Flex
			fillWidth maxWidth="s"
			direction="column">
			<script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'Blog',
						headline: blog.title,
						description: blog.description,
						url: `https://${baseURL}/blog`,
						image: `${baseURL}/og?title=${encodeURIComponent(blog.title)}`,
						author: {
							'@type': 'Person',
							name: person.name,
							image: {
								'@type': 'ImageObject',
								url: `${baseURL}${person.avatar}`,
							},
						},
					}),
				}}
			/>

			<Flex
				id={blog.title}
				style={{ left: '0', top: '50%', transform: 'translateY(-50%)' }}
				position="fixed"
				paddingLeft="24" gap="32"
				direction="column" hide="s">
				<TableOfContents
					structure={structure}
					about={blog} />
			</Flex>

			<Heading
				marginBottom="l"
				variant="display-strong-s">
				{"Proyecto final"}
			</Heading>



			<Flex
				id={"1. Introducción"}
				style={{ top: '100%', marginLeft: '5%' }}
				direction="column" align="start" >
				<Text as="h2" size="m" color="primary">
					Introducción
				</Text>


				<Flex
					border="neutral-medium"
					borderStyle="solid-1"
					radius="m"
					fillWidth
					align='center'
					alignItems="center"
					justifyContent="center"
					style={{ top: '50%', width: '50%', marginLeft: '25%' }}

				>
					<SmartImage
						enlarge
						aspectRatio="1/1"
						radius="m"
						alt={image.alt}
						src={image.src}
						objectFit="contain"
						style={{ width: '100%', height: '100%' }} // Reduce la imagen al 50% del tamaño del contenedor
					/>
				</Flex>

				<Flex
					style={{ transform: 'translateY(10%)', marginLeft: '3%' }}>
					<Text as="p" size="m" color="secondary">
						En el ámbito educativo, la química es una de las ciencias fundamentales para entender el mundo que nos rodea. Sin embargo, muchos estudiantes enfrentan barreras al momento de realizar prácticas de laboratorio, ya sea por falta de recursos, limitaciones de tiempo o preocupaciones de seguridad. Este proyecto propone el desarrollo de una aplicación móvil para Android que permita simular experimentos de química en un entorno virtual interactivo, ofreciendo una alternativa accesible, segura y educativa que complemente la enseñanza tradicional.
					</Text>
				</Flex>
			</Flex>

			<Flex
				id={"2. Planteamiento del Problema"} direction="column"
				style={{ top: '50%', marginLeft: '5%', right: '100%', marginTop: '5%' }}>
				<Text as="h2" size="m" color="primary">
					Planteamiento del Problema
				</Text>

				<Flex
					style={{ transform: 'translateY(10%)', marginLeft: '3%' }}>
					<Text as="p" size="m" color="secondary">
						La enseñanza práctica de la química presenta diversos desafíos:
						<br /><br />
						- Acceso limitado a laboratorios físicos: Muchos estudiantes no tienen acceso regular a laboratorios debido a costos elevados o falta de infraestructura.
						<br /><br />
						- Riesgos asociados a experimentos químicos: El manejo de sustancias peligrosas puede representar un riesgo tanto para los estudiantes como para el personal docente.
						<br /><br />
						- Barreras tecnológicas en aplicaciones existentes: Algunas herramientas digitales son complejas, poco accesibles o no compatibles con dispositivos de gama baja.
					</Text>
				</Flex>
			</Flex>

			<Flex
				id={"3. Objetivo"} direction="column"
				style={{ top: '50%', marginLeft: '5%', marginTop: '5%' }}>
				<Text as="h2" size="m" color="primary">
					Objetivo
				</Text>

				<Flex
					style={{ transform: 'translateY(10%)', marginLeft: '3%' }}>
					<Text as="p" size="m" color="secondary">
						Desarrollar una aplicación móvil para Android (ChemLab) que permita a los usuarios realizar experimentos de química en un entorno virtual seguro e interactivo.
					</Text>
				</Flex>
			</Flex>

			<Flex
				id={"4. Público Objetivo"} direction="column"
				style={{ top: '50%', marginLeft: '5%', marginTop: '5%' }}>
				<Text as="h2" size="m" color="primary">
					Público Objetivo
				</Text>

				<Flex
					style={{ transform: 'translateY(10%)', marginLeft: '3%' }}>
					<Text as="p" size="m" color="secondary">
						La aplicación está dirigida principalmente a:
						<br /><br />
						- Estudiantes de secundaria y preparatoria que estudian química y necesitan apoyo práctico.
						<br /><br />
						- Estudiantes universitarios en carreras científicas que requieren simulaciones avanzadas.
						<br /><br />
						- Profesores de química que buscan herramientas complementarias para sus clases.
					</Text>
				</Flex>
			</Flex>

			<Flex
				id={"5. Qué hará el proyecto"} direction="column"
				style={{ top: '50%', marginLeft: '5%', marginTop: '5%' }}>
				<Text as="h2" size="m" color="primary">
					Qué hará el proyecto
				</Text>

				<Flex
					style={{ transform: 'translateY(10%)', marginLeft: '3%' }}>
					<Text as="p" size="m" color="secondary">
						La aplicación permitirá a los usuarios:
						<br /><br />
						1. Realizar experimentos virtuales mediante simulaciones interactivas, como mezclas de sustancias químicas y observación de reacciones.
						<br /><br />
						2. Acceder a guías paso a paso para entender los procedimientos experimentales.
						<br /><br />
						3. Consultar explicaciones teóricas relacionadas con cada experimento.
						<br /><br />
						4. Obtener retroalimentación visual y textual sobre el desarrollo de los experimentos.
						<br /><br />
						5. Personalizar la experiencia de usuario, como cambiar el modo de visualización (claro/oscuro) o ajustar el nivel de dificultad de las simulaciones.
					</Text>
				</Flex>
			</Flex>

			<Flex
				id={"6. Análisis de sistemas existentes"} direction="column"
				style={{ top: '50%', marginLeft: '5%', marginTop: '5%' }}>
				<Text as="h2" size="m" color="primary">
					Análisis de sistemas existentes
				</Text>

				<Flex
					style={{ transform: 'translateY(10%)', marginLeft: '3%' }}>
					<Text as="p" size="m" color="secondary">
						Aplicación Competencia, la principal competencia de este proyecto incluye:
						<br /> <br />
						- Labster: Una herramienta avanzada para simulaciones científicas que destaca por su calidad gráfica pero no es accesible para todos los públicos.
						<br /> <br />
						- ChemCollective: Aunque es gratuita, su enfoque es muy académico y menos interactivo.
						<br /> <br />
						La aplicación propuesta se diferenciará al ofrecer una solución educativa gratuita, compatible con dispositivos de gama baja y con una experiencia de usuario amigable.
					</Text>
				</Flex>
			</Flex>

			<Flex
				id={"7. Artículo Relacionado"} direction="column"
				style={{ top: '50%', marginLeft: '5%', marginTop: '5%' }}>
				<Text as="h2" size="m" color="primary">
					Artículo Relacionado
				</Text>

				<Flex
					direction="column" style={{ transform: 'translateY(10%)', marginLeft: '3%' }}>
					<Text as="p" size="m" color="secondary">
						Trujillo Yaipén, W., Curo Maquén, L., Paredes López, L., & Carbajal Cornejo, K. (2023). Eficiencia de los simuladores virtuales en la competencia de indagación para el aprendizaje de física elemental.
						<br /> <br />
						El estudio concluye que, pese a las limitaciones, los simuladores virtuales son una herramienta valiosa para mejorar el aprendizaje en física elemental, destacando la necesidad de combinarlos con otras estrategias educativas para maximizar su efectividad.
					</Text>

					<Grid
						border="brand-medium"
						borderStyle="solid-1"
						columns="repeat(2, 1fr)"
						gap="24"
						padding="24"
						background="brand-medium"
						style={{ marginTop: '3%', marginBottom: '5%' }}
					>
						<Text as="h2" size="m" color="primary">
							Ventajas
						</Text>
						<Text as="h2" size="m" color="primary">
							Desventajas
						</Text>
						<Text as="p" size="m" color="primary">
							Interactividad y Experiencia Práctica: Los simuladores permiten una práctica interactiva entre lo experimental y lo real, ayudando a los estudiantes a comprender fenómenos complejos.
						</Text>
						<Text as="p" size="m" color="primary">
							Dependencia de la Tecnología: La efectividad depende del acceso a dispositivos y conectividad adecuados.
						</Text>
						<Text as="p" size="m" color="primary">
							Accesibilidad: Facilitan el acceso a recursos que, de otro modo, serían costosos o inviables en laboratorios reales.
						</Text>
						<Text as="p" size="m" color="primary">
							Limitaciones de Realismo: Aunque son representaciones avanzadas, no reemplazan la experiencia completa de un laboratorio físico.
						</Text>
						<Text as="p" size="m" color="primary">
							Incremento en el Interés y la Motivación: Los estudiantes se sienten más motivados al utilizar herramientas tecnológicas modernas.
						</Text>
						<Text as="p" size="m" color="primary">
							Formación del Docente: Requiere que los profesores estén capacitados en el uso de simuladores, lo cual no siempre es el caso.
						</Text>
						<Text as="p" size="m" color="primary">
							Adaptabilidad y Seguridad: Ideales para simular experimentos que implican altos costos, riesgos o tiempos prolongados de espera.
						</Text>
						<Text as="p" size="m" color="primary">
							Costo Inicial: Aunque reducen costos a largo plazo, la implementación inicial puede ser costosa.
						</Text>
						<Text as="p" size="m" color="primary">
							Desarrollo de Habilidades Científicas: Promueven la capacidad de indagación y análisis de datos mediante métodos como el científico.
						</Text>
						<Text as="p" size="m" color="primary">
							Desafíos en Evaluación: Es más complejo evaluar habilidades prácticas únicamente con simuladores.
						</Text>
						<Text as="p" size="m" color="primary">
							Flexibilidad: Pueden utilizarse para temas variados, desde cinemática y dinámica hasta electromagnetismo y ondas.
						</Text>

						<Text as="p" size="m" color="primary">

						</Text>

						<Text as="p" size="m" color="primary">
							Enseñanza Eficiente: Los resultados muestran una mejora significativa en las competencias de aprendizaje tras el uso de simuladores.
						</Text>

						<Text as="p" size="m" color="primary">

						</Text>

					</Grid>

				</Flex>
			</Flex>

		</Flex>
	);
}