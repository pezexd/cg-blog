import { Link } from "react-router";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { Text } from "../ui/text";

const posts = [
  {
    title: "Elipses",
    description:
      "Cómo se genera una elipse computacionalmente, qué propiedades y características tiene, y cómo implementar su algoritmo de generación en C++",
    imageSrc: "/Ellipse-def-e.svg.png",
    to: "/posts/elipse",
  },
];

function Post(props: {
  title: string;
  description: string;
  imageSrc: string;
  to: string;
}) {
  const { title, description, imageSrc, to } = props;

  return (
    <>
      <CardContainer>
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-auto h-auto rounded-xl p-6 border">
          <CardItem
            translateZ="50"
            className="text-neutral-950 dark:text-white"
          >
            <Text variant="h3">{title}</Text>
          </CardItem>
          <CardItem
            translateZ="60"
            className="line-clamp-3 max-w-sm mt-2 dark:text-gray-300"
          >
            <Text variant="p">{description}</Text>
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <img
              src={imageSrc}
              height="1000"
              width="1000"
              className="h-60 w-full ring-1 ring-gray-200 object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as={Link}
              to={to}
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Ver ahora →
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </>
  );
}

export default function HomePostList() {
  return (
    <>
      {posts.map((post) => (
        <Post
          title={post.title}
          description={post.description}
          imageSrc={post.imageSrc}
          to={post.to}
        />
      ))}
    </>
  );
}
