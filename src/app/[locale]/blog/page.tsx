import { Flex, Heading, Text, SmartImage } from '@/once-ui/components';
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
			title: "3. Experiencia",
			display: true,
			items: []
		},
		{
			title: "4. Observaciones",
			display: true,
			items: []
		},
		{
			title: "5. Entrevistas",
			display: true,
			items: []
		},
		{
			title: "6. Momentos Interesantes",
			display: true,
			items: []
		},
		{
			title: "7. Necesidades",
			display: true,
			items: []
		},
		{
			title: "8. Conclusiones",
			display: true,
			items: []
		}
	]

	const image =  // optional: leave the array empty if you don't want to display images
	{
		src: '/images/vision.png',
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
					style={{ top: '50%', width: '50%' }}
					
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
						El uso de sistemas de videovigilancia ha crecido significativamente en áreas de seguridad pública y supervisión privada. Sin embargo, las interfaces actuales suelen ser complicadas y no centradas en la experiencia del usuario. Este proyecto busca desarrollar un sistema de videovigilancia con una interfaz intuitiva y accesible, mejorando la eficiencia y la experiencia de los usuarios en el monitoreo de espacios.
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
						Los usuarios de sistemas de videovigilancia, como operadores de seguridad y administradores, enfrentan desafíos al manejar múltiples cámaras y acceder a funciones específicas en interfaces complejas. Esto puede generar frustración y errores en situaciones críticas. La solución que proponemos facilitará la toma de decisiones en tiempo real y reducirá la carga cognitiva, brindando una experiencia de usuario más eficiente.

					</Text>
				</Flex>
			</Flex>

			<Flex
				id={"3. Experiencia"} direction="column"
				style={{ top: '50%', marginLeft: '5%', marginTop: '5%' }}>
				<Text as="h2" size="m" color="primary">
					Experiencia
				</Text>

				<Flex
					style={{ transform: 'translateY(10%)', marginLeft: '3%' }}>
					<Text as="p" size="m" color="secondary">
						- Usuarios objetivo: Operadores de seguridad y administradores que utilizan sistemas de videovigilancia en entornos públicos y privados.
						<br /><br />
						- Experiencia actual: Los usuarios a menudo se sienten abrumados por la complejidad de las interfaces y la dificultad para acceder a funciones críticas.

					</Text>
				</Flex>
			</Flex>

			<Flex
				id={"4. Observaciones"} direction="column"
				style={{ top: '50%', marginLeft: '5%', marginTop: '5%' }}>
				<Text as="h2" size="m" color="primary">
					Observaciones
				</Text>

				<Flex
					style={{ transform: 'translateY(10%)', marginLeft: '3%' }}>
					<Text as="p" size="m" color="secondary">
						- Interacción con el sistema: Los operadores pasan mucho tiempo tratando de navegar por menús complicados y configuraciones.
						<br /><br />
						- Errores comunes: Frecuentemente, los usuarios cometen errores al intentar cambiar entre cámaras o ajustar configuraciones debido a la falta de claridad en la interfaz.
						<br /><br />
						- Frustración en situaciones críticas: En momentos de alta presión, como emergencias, la complejidad del sistema puede llevar a decisiones erróneas.

					</Text>
				</Flex>
			</Flex>

			<Flex
				id={"5. Entrevistas"} direction="column"
				style={{ top: '50%', marginLeft: '5%', marginTop: '5%' }}>
				<Text as="h2" size="m" color="primary">
					Entrevistas
				</Text>

				<Flex
					style={{ transform: 'translateY(10%)', marginLeft: '3%' }}>
					<Text as="p" size="m" color="secondary">
						- ¿Cuáles son los principales desafíos que enfrenta al usar el sistema de videovigilancia?
						<br /><br />
						- ¿Qué funciones considera más importantes y por qué?
						<br /><br />
						- ¿Ha tenido experiencias frustrantes con la interfaz actual? Describa una situación.
						<br /><br />
						- Resultados de las entrevistas: Los usuarios expresaron la necesidad de una interfaz más clara y accesible, así como de funciones que les permitan actuar rápidamente en situaciones críticas.
						<br /><br />
					</Text>
				</Flex>
			</Flex>

			<Flex
				id={"6. Momentos Interesantes"} direction="column"
				style={{ top: '50%', marginLeft: '5%', marginTop: '5%' }}>
				<Text as="h2" size="m" color="primary">
					Momentos Interesantes
				</Text>

				<Flex
					style={{ transform: 'translateY(10%)', marginLeft: '3%' }}>
					<Text as="p" size="m" color="secondary">
						- Caso de estudio: Un operador mencionó que en una situación de emergencia, perdió tiempo valioso tratando de encontrar la cámara correcta debido a la complejidad del sistema.
						<br /> <br />
						- Sugerencias de los usuarios: Muchos usuarios sugirieron la implementación de un "modo de emergencia" que simplifique la interfaz y priorice las funciones críticas.

					</Text>
				</Flex>
			</Flex>

			<Flex
				id={"7. Necesidades"} direction="column"
				style={{ top: '50%', marginLeft: '5%', marginTop: '5%' }}>
				<Text as="h2" size="m" color="primary">
					Necesidades
				</Text>

				<Flex
					style={{ transform: 'translateY(10%)', marginLeft: '3%' }}>
					<Text as="p" size="m" color="secondary">
						- Interfaz intuitiva: Los usuarios necesitan una interfaz que sea fácil de navegar y que reduzca la carga cognitiva.
						<br /> <br />
						- Acceso rápido a funciones críticas: Es esencial que los operadores puedan acceder rápidamente a las cámaras y configuraciones más relevantes en situaciones de emergencia.
						<br /> <br />
						- Capacitación y soporte: Los usuarios requieren recursos de capacitación que les ayuden a familiarizarse con el sistema de manera efectiva.

					</Text>
				</Flex>
			</Flex>

			<Flex
				id={"8. Conclusiones"} direction="column"
				style={{ top: '50%', marginLeft: '5%', marginTop: '5%' }}>
				<Text as="h2" size="m" color="primary">
					Conclusiones
				</Text>

				<Flex
					style={{ transform: 'translateY(10%)', marginLeft: '3%' }}>
					<Text as="p" size="m" color="secondary">
						El desarrollo de un sistema de videovigilancia centrado en el usuario no solo mejorará la experiencia de los operadores, sino que también contribuirá a una mayor seguridad y eficacia en la supervisión de espacios. Este proyecto tiene el potencial de transformar la forma en que se utilizan los sistemas de videovigilancia en diversas aplicaciones.
					</Text>
				</Flex>
			</Flex>

		</Flex>
	);
}