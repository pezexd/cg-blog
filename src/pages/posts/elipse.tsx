import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Text } from "@/components/ui/text";
import { code } from "../../utils/code";
import Latex from "react-latex-next";
import "katex/dist/katex.min.css";

export default function ElipsePage() {
  const ecuacion = `\\(\\frac{x^2 + h}{a^2} + \\frac{y^2 + k}{b^2} = 1\\)`;
  return (
    <>
      <section className="py-24 sm:py-24 flex items-center max-md:flex-col justify-between">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <Text variant="h1">
            Algoritmo de generación de elipse
          </Text>
          <Text variant="p" className="mt-8">
            En este artículo, exploraremos cómo se genera una elipse
            computacionalmente, qué propiedades y características tiene, y cómo
            implementar su algoritmo de generación en C++.
          </Text>
        </div>

        <figure>
          <img src="/Ellipse-def-dc.svg.png" alt="elipse" className="w-[80%] mx-auto" />
        </figure>
      </section>

      <section className="text-neutral-900 lg:px-56 2xl:px-20 text-xl">
        <Text variant={"h2"} className="text-center">
          ¿Qué es una Elipse?
        </Text>
        <Text variant={"p"}>
          Una elipse es una curva cerrada y plana definida por la siguiente
          ecuación estándar en el plano cartesiano:
        </Text>

        <Text variant={"blockquote"} className="text-center text-4xl">
          <Latex>{ecuacion}</Latex>
        </Text>

        <Text variant={"h5"}>
          Propiedades de la elipse:

          <Text variant={"ul"}>
            <li>
              La suma de las distancias desde cualquier punto sobre la elipse
              hasta dos puntos fijos llamados focos es constante.
            </li>

            <li>
              Los dos ejes son perpendiculares entre sí.
            </li>

            <li>
              La elipse tiene dos focos ubicados en el eje mayor.
            </li>
          </Text>
        </Text>

        <figure>
          <img
            src="/Ellipse-def-e.svg.png"
            alt="elipse 2"
            className="w-[80%] mx-auto"
          />
        </figure>

        <Text variant={"h4"} className="mt-16 text-center">
          Características del Algoritmo de Generación de Elipses
        </Text>
        <Text variant={"p"} className="mt-5">
          El algoritmo de generación de elipses se utiliza para dibujar una
          elipse en una pantalla o en una representación gráfica.
          Tradicionalmente, uno de los métodos más utilizados es el algoritmo de
          Bresenham, que permite trazar una elipse de manera eficiente usando
          solo operaciones de suma y resta, lo cual es ideal para aplicaciones
          de gráficos en tiempo real
        </Text>

        <Text variant={"h5"}>
          Las características clave del algoritmo son:

          <Text variant={"ul"}>
            <li>
              <strong>Eficiencia:</strong> Utiliza una serie de decisiones para trazar puntos en la
              elipse.
            </li>

            <li>
              <strong>Simetría:</strong> Aprovecha la simetría de la elipse, lo que significa que
              si trazamos un punto en un cuadrante, podemos reflejarlo en los otros
              tres cuadrantes.
            </li>

            <li>
              <strong>Iteración eficiente:</strong> Permite calcular los puntos de la elipse de
              forma iterativa sin necesidad de realizar operaciones costosas como
              raíces cuadradas.
            </li>
          </Text>
        </Text>


        <Text variant={"h4"} className="mt-16 text-center">
          Algoritmo de Generación de Elipse en C++
        </Text>

        <Text variant={"p"} className="mb-8">
          A continuación, un ejemplo básico del algoritmo de Bresenham para
          dibujar una elipse en C++.
        </Text>

        <SyntaxHighlighter language="cpp" style={darcula} wrapLines={true}>
          {code}
        </SyntaxHighlighter>

        <Text variant={"h5"}>Explicación del código:</Text>

        <Text variant={"ol"}>
          <Text variant={"p"}>
            1.{" "}
            <Text variant={"code"} className="text-lg">
              putpixel(xc + x, yc - y, WHITE):
            </Text>
            Esta función se utiliza para dibujar un punto en las coordenadas{" "}
            <Text variant={"code"} className="text-lg">
              (xc+x,yc−y)
            </Text>{" "}
            <Text variant={"code"} className="text-lg">
              (xc+x,yc−y)
            </Text>
            , donde
            <Text variant={"code"} className="text-lg">
              xc
            </Text>
            y
            <Text variant={"code"} className="text-lg">
              yc
            </Text>
            son las coordenadas del centro de la elipse,
            <Text variant={"code"} className="text-lg">
              x
            </Text>
            e
            <Text variant={"code"} className="text-lg">
              y
            </Text>
            son las coordenadas actuales de un punto sobre la elipse.
          </Text>

          <Text variant={"p"}>
            2. <strong>Simetría:</strong> Debido a la simetría de la elipse, los
            puntos generados en un cuadrante se reflejan a los otros tres
            cuadrantes.
          </Text>

          <Text variant={"p"}>
            3. <strong>Cálculo de la región superior e inferior: </strong> El
            algoritmo usa dos fases: la primera, para la región superior, y la
            segunda, para la región inferior de la elipse.
          </Text>

          <Text variant={"p"}>
            4. <strong>Condiciones de decisión:</strong> En cada iteración, se
            toma una decisión basada en el error, y dependiendo de esa decisión,
            se ajustan las coordenadas <Text variant={"code"}>x</Text> y{" "}
            <Text variant={"code"}>y</Text>.
          </Text>
        </Text>

        <article className="text-end mt-12">
          <video src="/test.mp4" controls={true}></video>
          <Text variant={"small"}>
            Video demostrativo del algoritmo en ejecucion <br />
          </Text>
          <Text variant={"small"}>
            Autor:{" "}
            <Text variant={"a"} target="_blank" href="https://github.com/danexcode">
              @danexcode
            </Text>
          </Text>
        </article>

        <Text variant={"h4"} className="text-center mt-12">
          Aplicaciones de la Generación de Elipses
        </Text>

        <Text variant={"p"}>
          El algoritmo de generación de elipses tiene diversas aplicaciones en
          el campo de la computación gráfica y la ingeniería, tales como:
        </Text>
        <Text variant={"ul"}>
          <li>
            <strong>Diseño de interfaces gráficas:</strong> Se utiliza para
            dibujar formas geométricas, especialmente en software de diseño
            gráfico.
          </li>

          <li>
            <strong>Simulaciones astronómicas:</strong> Las órbitas de los
            planetas son elipses, por lo que este algoritmo puede ser útil en
            simulaciones astronómicas.
          </li>

          <li>
            <strong>Ingeniería de sistemas ópticos:</strong> Se usa para modelar
            lentes elípticas y otros componentes ópticos.
          </li>

          <li>
            <strong>Gráficos 2D en videojuegos:</strong> Los gráficos de
            videojuegos a menudo requieren el trazado de formas elípticas para
            representar ciertos objetos.
          </li>
        </Text>

        <figure className="flex items-center mt-16">
          <img
            src="/8737618af3 (1).gif"
            alt="orbit"
            className="w-[40%] mx-auto"
          />
          <img src="/tl.webp" alt="guy" className="w-[40%] mx-auto" />
        </figure>

        <Text variant={"h5"} className="pt-12">
          Ventajas del Algoritmo de Generación de Elipses: 
          <Text variant={"ul"}>
            <li>
              <strong>Eficiencia computacional:</strong> El algoritmo de Bresenham no requiere
              operaciones costosas, como divisiones o raíces cuadradas, lo que lo
              hace rápido y adecuado para gráficos en tiempo real.
            </li>

            <li>
              <strong>Simplicidad:</strong> El algoritmo es relativamente fácil de implementar y
              entender.
            </li>

            <li>
              <strong>Simetría:</strong> Aprovecha la simetría de la elipse, lo que reduce la cantidad
              de cálculos necesarios.
            </li>
          </Text>
        </Text>

        <Text variant={"h5"}>
          Limitaciones del Algoritmo: 
          <Text variant={"ul"}>
            <li>
              <strong>Precisión:</strong> Si bien el algoritmo es eficiente, la precisión de los puntos
              generados puede ser limitada por la resolución de la pantalla o el área
              de dibujo.
            </li>

            <li>
              <strong>Uso en elipses muy inclinadas:</strong> Aunque es adecuado para elipses
              centradas en el origen, las elipses rotadas o inclinadas requieren
              transformaciones adicionales, lo que complica el algoritmo.
            </li>

            <li>
              <strong>Dependencia del hardware:</strong> El rendimiento puede variar dependiendo de
              la capacidad del hardware gráfico y la implementación de la función
              putpixel.
            </li>
          </Text>
        </Text>

        <Text variant={"h4"} className="text-center mt-12">
          Conclusión
        </Text>

        <Text variant={"p"} >
          El algoritmo de generación de elipses, especialmente el basado en
          Bresenham, es una herramienta poderosa en la computación gráfica. Su
          eficiencia y simplicidad lo convierten en un componente esencial en muchas
          aplicaciones, desde simulaciones hasta gráficos en tiempo real. Sin embargo,
          como todo algoritmo, tiene sus limitaciones, especialmente cuando se trata de
          precisión o el manejo de elipses no centradas en el origen.
        </Text>

      </section>

      <footer className="text-lg py-16 text-center">
        Gracias por su atencion
      </footer>
    </>
  );
}
