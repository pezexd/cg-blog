import { Text } from "@/components/ui/text";
import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <div className="py-24 sm:py-32">
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
        <h1>Posts</h1>
        <ul>
          <li>
            <Link to="/algoritmo-generacion-elipse">Ellipse</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
