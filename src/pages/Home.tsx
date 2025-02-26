import HomePostList from "@/components/home/post-list";
import { Text } from "@/components/ui/text";

export default function Home() {
  return (
    <>
      <div className="py-24">
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
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <HomePostList />
        </div>
      </div>
    </>
  );
}
