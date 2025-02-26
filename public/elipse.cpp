
#include <iostream>
#include <cmath>
#include <graphics.h>
using namespace std;

void dibujarElipse(int xc, int yc, int a, int b)
{
    int x = 0;
    int y = b;
    int a2 = a * a;
    int b2 = b * b;
    int err = b2 - a2 * b + a2 / 4;
    // Dibujamos los puntos de los 4 cuadrantes utilizando la simetría
    while (x * b2 < y * a2)
    {
        putpixel(xc + x, yc - y, WHITE); // Cuadrante 1
        putpixel(xc - x, yc - y, WHITE); // Cuadrante 2
        putpixel(xc + x, yc + y, WHITE); // Cuadrante 3
        putpixel(xc - x, yc + y, WHITE); // Cuadrante 4
        if (err < 0)
        {
            err += 2 * b2 * x + b2;
        }
        else
        {
            err += 2 * (b2 * x - a2 * y) + a2;
            y--;
        }
        x++;
    }
    // Región inferior
    err = b2 * (x + 1) * (x + 1) + a2 * (y - 1) * (y - 1) - a2 * b2;
    while (y >= 0)
    {
        putpixel(xc + x, yc - y, WHITE);
        putpixel(xc - x, yc - y, WHITE);
        putpixel(xc + x, yc + y, WHITE);
        putpixel(xc - x, yc + y, WHITE);
        if (err > 0)
        {
            err -= 2 * a2 * y + a2;
        }
        else
        {
            err += 2 * b2 * x + b2;
            x++;
        }
        y--;
    }
}

int main()
{
    int gd = DETECT, gm;
    initgraph(&gd, &gm, "");
    // Definimos el centro y los semiejes de la elipse
    int xc = 320, yc = 240;
    int a = 100, b = 50;

    // Llamamos a la función para dibujar la elipse
    dibujarElipse(xc, yc, a, b);
    getch();
    closegraph();
    return 0;
}
