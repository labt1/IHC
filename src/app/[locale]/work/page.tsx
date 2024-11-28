import { getPosts } from '@/app/utils';
import { Flex, Text, SmartImage } from '@/once-ui/components';
import { Projects } from '@/components/work/Projects';
import { baseURL, renderContent } from '@/app/resources';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import TableOfContents from '@/components/about/TableOfContents';

export async function generateMetadata(
    { params: { locale } }: { params: { locale: string } }
) {

    const t = await getTranslations();
    const { work } = renderContent(t);

    const title = work.title;
    const description = work.description;
    const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'website',
            url: `https://${baseURL}/${locale}/work/`,
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

export default function Work(
    { params: { locale } }: { params: { locale: string } }
) {
    unstable_setRequestLocale(locale);
    let allProjects = getPosts(['src', 'app', '[locale]', 'work', 'projects', locale]);

    const t = useTranslations();
    const { person, work } = renderContent(t);

    /*
    const structure = [
        { 
            title: work.intro.title,
            display: work.intro.display,
            items: []
        },
        { 
            title: work.work.title,
            display: work.work.display,
            items: work.work.experiences.map(experience => experience.company)
        },
        { 
            title: work.studies.title,
            display: work.studies.display,
            items: work.studies.institutions.map(institution => institution.name)
        },
        { 
            title: work.technical.title,
            display: work.technical.display,
            items: work.technical.skills.map(skill => skill.title)
        },
    ]*/

    const structure = [
        {
            title: "1. Creacion de la Idea",
            display: true,
            items: []
        },
        {
            title: "2. Sketching",
            display: true,
            items: []
        },
        {
            title: "3. Capturas",
            display: true,
            items: []
        },
        {
            title: "4. Primera evaluación con usuarios",
            display: true,
            items: []
        },
        {
            title: "5. Segunda evaluación con usuarios",
            display: true,
            items: []
        },
        {
            title: "6. Evaluación de pricipios de Gestalt",
            display: true,
            items: []
        },
    ]

    return (
        <Flex
            fillWidth maxWidth="m"
            direction="column">
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'CollectionPage',
                        headline: work.title,
                        description: work.description,
                        url: `https://${baseURL}/projects`,
                        image: `${baseURL}/og?title=Design%20Projects`,
                        author: {
                            '@type': 'Person',
                            name: person.name,
                        },
                        hasPart: allProjects.map(project => ({
                            '@type': 'CreativeWork',
                            headline: project.metadata.title,
                            description: project.metadata.summary,
                            url: `https://${baseURL}/projects/${project.slug}`,
                            image: `${baseURL}/${project.metadata.image}`,
                        })),
                    }),
                }}
            />


            <Flex
                id={work.work.title}
                style={{ left: '0', top: '50%', transform: 'translateY(-50%)' }}
                position="fixed"
                paddingLeft="24" gap="32"
                direction="column" hide="s">
                <TableOfContents
                    structure={structure}
                    about={work} />
            </Flex>

            <Flex
                style={{ left: '0', top: '50%', transform: 'translateY(-50%)' }}>
                <Text as="h2" size="m" color="primary">
                    Escape del Laberinto
                </Text>
            </Flex>

            <Flex
                id={"1. Creacion de la Idea"}
                style={{ top: '50%', marginLeft: '5%' }}
                direction="column" align="start">
                <Text as="h2" size="m" color="primary">
                    Creacion de la Idea
                </Text>

                <Flex
                    style={{ transform: 'translateY(10%)', marginLeft: '3%' }}>
                    <Text as="p" size="m" color="secondary">
                    La idea de este juego VR nació de una pregunta simple: ¿cómo sería estar completamente inmerso en un laberinto lleno de desafíos, donde la única forma de avanzar es usar herramientas y resolver problemas en tiempo real? Inspirado por la emoción de los juegos de escape y superar obstáculos, imaginé un entorno que combine el ingenio, la exploración y la tecnología. Así, se diseño un espacio donde los jugadores no solo enfrentan un reto físico y mental, sino que también experimentan la sensación única de escapar dentro de un mundo virtual completamente envolvente.
                    </Text>
                </Flex>

            </Flex>

            <Flex
                id={"2. Sketching"}
                style={{ top: '50%', marginLeft: '5%', marginTop: '5%'}}
                direction="column">
                <Text as="h2" size="m" color="primary">
                    Sketching
                </Text>

                <Flex
                    border="neutral-medium"
                    borderStyle="solid-1"
                    radius="m"
                    fillWidth
                    align='center'
                    alignItems="center"
                    justifyContent="center"
                    style={{ top: '30%', width: '30%', marginTop: '2%', marginLeft: '33%', marginRight: '33%' }}

                >
                    <SmartImage
                        enlarge
                        aspectRatio="10/10"
                        radius="m"
                        alt={"/images/primera.gif"}
                        src={"/images/sketch.jpg"}
                        objectFit="fill"
                        style={{ width: '100%', height: '100%' }} // Reduce la imagen al 50% del tamaño del contenedor
                    />
                </Flex>

                <Flex
                    style={{ transform: 'translateY(10%)', marginLeft: '3%',  marginTop: '2%' }}>
                    <Text as="p" size="m" color="secondary">
                        
                    </Text>
                </Flex>

            </Flex>

            <Flex
                id={"3. Capturas"}
                style={{ top: '50%', marginLeft: '5%', marginTop: '5%' }}
                direction="column">
                <Text as="h2" size="m" color="primary">
                    Capturas
                </Text>

                <Flex
                    border="neutral-medium"
                    borderStyle="solid-1"
                    radius="m"
                    fillWidth
                    align='center'
                    alignItems="center"
                    justifyContent="center"
                    style={{ top: '70%', width: '70%', marginTop: '2%', marginLeft: '20%' }}

                >
                    <SmartImage
                        enlarge
                        aspectRatio="10/10"
                        radius="m"
                        alt={"/images/evaluacion.jpg"}
                        src={"/images/Part3.gif"}
                        objectFit="contain"
                        style={{ width: '100%', height: '100%' }} // Reduce la imagen al 50% del tamaño del contenedor
                    />

                <Text as="h2" size="m" color="primary" style={{ marginLeft: '3%', marginRight: '3%' }}>
                    Enemigos y obstaculos
                </Text>

                    <SmartImage
                        enlarge
                        aspectRatio="10/10"
                        radius="m"
                        alt={"/images/evaluacion.jpg"}
                        src={"/images/Part4.gif"}
                        objectFit="contain"
                        style={{ width: '100%', height: '100%' }} // Reduce la imagen al 50% del tamaño del contenedor
                    />
                </Flex>

            </Flex>

            <Flex
                id={"4. Primera evaluación con usuarios"}
                style={{ top: '50%', marginLeft: '5%', marginTop: '5%' }}
                direction="column">
                <Text as="h2" size="m" color="primary">
                    Primera evaluación con usuarios
                </Text>


                <Flex
                    border="neutral-medium"
                    borderStyle="solid-1"
                    radius="m"
                    fillWidth
                    align='center'
                    alignItems="center"
                    justifyContent="center"
                    style={{ top: '70%', width: '70%', marginTop: '2%', marginLeft: '20%', marginRight: '20%' }}

                >
                    <SmartImage
                        enlarge
                        aspectRatio="19/10"
                        radius="m"
                        alt={"/images/evaluacion.jpg"}
                        src={"/images/primera.gif"}
                        objectFit="contain"
                        style={{ width: '100%', height: '100%' }} // Reduce la imagen al 50% del tamaño del contenedor
                    />
                </Flex>

                <Flex
                    style={{ transform: 'translateY(10%)', marginLeft: '3%', marginTop: '3%' }}>
                    <Text as="p" size="m" color="secondary">
                        
                    </Text>
                </Flex>

            </Flex>

            <Flex
                id={"5. Segunda evaluación con usuarios"}
                style={{ top: '50%', marginLeft: '5%', marginTop: '5%' }}
                direction="column">
                <Text as="h2" size="m" color="primary">
                    Segunda evaluación con usuarios
                </Text>

                <Flex
                    border="neutral-medium"
                    borderStyle="solid-1"
                    radius="m"
                    fillWidth
                    align='center'
                    alignItems="center"
                    justifyContent="center"
                    style={{ top: '70%', width: '70%', marginTop: '2%', marginLeft: '20%' }}

                >
                    <SmartImage
                        enlarge
                        aspectRatio="19/10"
                        radius="m"
                        alt={"/images/primera.gif"}
                        src={"/images/primera.gif"}
                        objectFit="contain"
                        style={{ width: '100%', height: '100%' }} // Reduce la imagen al 50% del tamaño del contenedor
                    />
                </Flex>

                <Flex
                    style={{ transform: 'translateY(10%)', marginLeft: '3%', marginTop: '3%' }}>
                    <Text as="p" size="m" color="secondary">
                        
                    </Text>
                </Flex>
            </Flex>

            <Flex
                id={"6. Evaluación de pricipios de Gestalt"}
                style={{ top: '50%', marginLeft: '5%', marginTop: '5%' }}>
                <Text as="h2" size="m" color="primary">
                    Evaluación de pricipios de Gestalt
                </Text>
            </Flex>

            {/* <Projects locale={locale} /> */}
        </Flex>
    );
}