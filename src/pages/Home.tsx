import { Text } from "@/components/ui/text";
import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <div className="py-24 sm:py-24">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <Text variant="h1">
            El blog de computación gráfica para estudiantes de ingeniería
            informática
          </Text>
          <Text variant="p" className="mt-8">
            Encuentra tutoriales, ejemplos prácticos y recursos útiles para
            llevar tus habilidades en computación gráfica al siguiente nivel.
          </Text>
        </div>
      </div>
      <div className="mt-8">
        <Text variant={"h2"}>Posts</Text>

        <ul className="mt-8">
          <li className="w-60 h-60 rounded-md shadow-md p-4">
            <Link to="/posts/elipse">
              <figure>
                <img src="/Ellipse-def-e.svg.png" alt="elipse" />
              </figure>
              <Text variant={"h4"}>Elipse</Text>
              <p>Todo sobre las elipses</p>
            </Link>
          </li>
        </ul>
      </div>

      <footer className="py-6 text-center">
        Todos los derechos reservados 
      </footer>
    </>
  );
}
