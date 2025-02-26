import pygame
import sys
from math import sqrt

class GraphicsAlgorithms:
    def __init__(self, window):
        self.window = window
        
        
    def draw_axes(self):
        for x in range(0, WIDTH):
            self.window.set_at((x, CENTER_Y), "black")
        
        for y in range(0, HEIGHT):
            self.window.set_at((CENTER_X, y), "black")


    def draw_pixel(self, x, y, color):
        self.window.set_at((x, y), color)
        
    
    def draw_horizantal_line(self, y, color, inicio_x, fin_x):
        for x in range(inicio_x, fin_x):
            self.draw_pixel(x, y, color)
    
    
    def draw_point(self, ):
        pass
    
    
    # Uses DDA method
    def draw_dda_line(self, x_start, y_start, x_end, y_end, color):
        # 1. Se calculan los diferenciales
        dx = x_start - x_end
        dy = y_start - y_end
        
        # 2. Determino la cantidad de pasos
        steps = max(abs(dx), abs(dy))
        
        # 3. Calculo de incrementos
        x_increment = dx / steps
        y_increment = dy / steps
        
        # 4. Inicializo las coordenadas
        x = x_end 
        y = y_end
        
        # 5. Bucle principal
        for _ in range(int(steps) + 1):
            self.draw_pixel(round(x), round(y), color)
            x = x + x_increment
            y = y + y_increment


    # Uses Bressenham method
    def draw_bressenham_line(self, cords):
        x1, y1 = cords[0]
        x2, y2 = cords[1]
        # calcular el cambio de x y 
        dx = abs(x2 - x1)
        dy = abs(y2 -y1)
        # que direccion tomaran X Y asi sabemos si debe aumentar o disminuir en cada paso
        sx = 1 if x1 < x2 else -1
        sy = 1 if y1 < y2 else -1

        #error que me indicara si hay que moverse mas en Y o en X
        err = dx - dy

        points = []
        while True:
            points.append((x1, y1)) #guardo el punto inicial
            #si llegue a la meta frena
            if x1 == x2 and y1 == y2:
                break
            #el doble del error para decidir la direccion del siguiente punto
            e2 = 2 * err

            if e2 > -dy: #si el error doblado sigue en la zona de X se avanza en X
                err -= dy
                x1 += sx

            if e2 < dx: #si el error doblado sigue en la zona de Y se avanza en Y
                err += dx
                y1 += sy
        return points


    def draw_circunference(self, ):
        pass
    

    def draw_elipse(self, xc, yc, a, b):
        x = 0
        y = b
        a2 = a * a
        b2 = b * b
        err = b2 - a2 * b + a2 / 4
        while (x * b2 < y * a2):
            self.draw_pixel(xc + x, yc - y, "black")
            self.draw_pixel(xc - x, yc - y, "black")
            self.draw_pixel(xc + x, yc + y, "black")
            self.draw_pixel(xc - x, yc + y, "black")
            if (err < 0):
                err += 2 * b2 * x + b2
            else:
                err += 2 * (b2 * x - a2 * y) + a2
                y -= 1
                
            x += 1
        
        err = b2 * (x + 1) * (x + 1) + a2 * (y - 1) * (y - 1) - a2 * b2

        while (y >= 0):
            self.draw_pixel(xc + x, yc - y, "black")
            self.draw_pixel(xc - x, yc - y, "black")
            self.draw_pixel(xc + x, yc + y, "black")
            self.draw_pixel(xc - x, yc + y, "black")
            if (err > 0):
                err -= 2 * a2 * y + a2
            else:
                err += 2 * b2 * x + b2
                x += 1

            y -= 1
    
    
    def draw_bazier_curves(self, ):
        pass


# Constants
WIDTH, HEIGHT = 800, 600
CENTER_X, CENTER_Y = WIDTH // 2, HEIGHT // 2

# Initialize Pygame
pygame.init()
window = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Graphics Algorithms")
clock = pygame.time.Clock()

# Create an instance of GraphicsAlgorithms
graphics = GraphicsAlgorithms(window)

def main_menu():
    font = pygame.font.Font(None, 36)
    menu_items = ["1. Draw Line", "2. Elipse", "3. Exit"]
    while True:
        window.fill((255, 255, 255))
        for i, item in enumerate(menu_items):
            text = font.render(item, True, (0, 0, 0))
            window.blit(text, (50, 50 + i * 40))
        pygame.display.flip()
        
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                sys.exit()
            elif event.type == pygame.KEYDOWN:
                if event.key == pygame.K_1:
                    window.fill("white")
                    draw_line_mode()
                elif event.key == pygame.K_2:
                    window.fill("white")
                    draw_elipse_mode()
                elif event.key == pygame.K_3:
                    pygame.quit()
                    sys.exit()


def draw_line_mode():
    points = []
    graphics.draw_axes()
    font = pygame.font.Font(None, 24)
    while True:
        text = font.render("Esc. Volver", True, (0, 0, 0))
        window.blit(text, (25, 25))
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                sys.exit()
            elif event.type == pygame.MOUSEBUTTONDOWN:
                points.append(event.pos)
                if len(points) == 2:
                    graphics.draw_dda_line(points[0][0], points[0][1], points[1][0], points[1][1], "black")
                    points = []
            elif event.type == pygame.KEYDOWN:
                if event.key == pygame.K_ESCAPE:
                    return
        
        pygame.display.flip()
        clock.tick(60)


def draw_elipse_mode():
    points = []
    graphics.draw_axes()
    
    def calc_a(f1, f2, point3):
        x1, y1 = f1[0], f1[1]
        x2, y2 = f2[0], f2[1]
        x = point3[0]
        y = point3[1]
        
        d1 = sqrt((x - x1)**2 + (y - y1)**2)
        d2 = sqrt((x2 - x)**2 + (y2 - y)**2)
        return round((d1 + d2) / 2)

    def calc_center(f1, f2):
        return ((f1[0] + f2[0]) // 2, (f1[1] + f2[1]) // 2)

    def calc_c(f1, f2):
        return sqrt((f2[0] - f1[0])**2 + (f2[1] - f1[1])**2) // 2

    def calc_b(a, c):
        return round(sqrt(a**2 - c**2))
    
    font = pygame.font.Font(None, 24)
    while True:
        
        text = font.render("Esc. Volver", True, (0, 0, 0))
        window.blit(text, (25, 25))
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                sys.exit()
            elif event.type == pygame.MOUSEBUTTONDOWN:
                points.append(event.pos)
                if len(points) == 2:
                    graphics.draw_horizantal_line(y=points[0][1], color="black", inicio_x=points[0][0], fin_x=points[1][0])
                elif len(points) == 3:
                    p2 = (points[1][0], points[0][1])
                    h, k = calc_center(points[0], p2)
                    f1, f2 = points[0], p2
                    c = calc_c(f1, f2)
                    a = calc_a(f1, f2, points[2])
                    b = calc_b(a, c)
                    graphics.draw_elipse(h, k, a, b)
                    points = []
            elif event.type == pygame.KEYDOWN:
                if event.key == pygame.K_ESCAPE:
                    return
                
        
        pygame.display.flip()
        clock.tick(60)

if __name__ == "__main__":
    main_menu()

