import math
from PIL import Image, ImageDraw, ImageFilter

def create_butterfly_image():
    W, H = 800, 640
    img = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    cx, cy = W // 2, H // 2 - 10

    # Draw soft drop shadow
    shadow = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    sdraw = ImageDraw.Draw(shadow)
    sdraw.ellipse([cx - 280, cy - 140, cx + 280, cy + 220], fill=(0, 0, 0, 90))
    shadow = shadow.filter(ImageFilter.GaussianBlur(radius=24))
    img.paste(shadow, (0, 16), shadow)

    draw = ImageDraw.Draw(img)

    # Left Forewing Points
    l_fore = [
        (cx - 15, cy - 20),
        (cx - 120, cy - 160),
        (cx - 260, cy - 210),
        (cx - 340, cy - 180),
        (cx - 370, cy - 100),
        (cx - 320, cy + 10),
        (cx - 240, cy + 70),
        (cx - 140, cy + 50),
        (cx - 20, cy + 10),
    ]

    # Right Forewing Points (mirrored)
    r_fore = [(cx + (cx - x), y) for (x, y) in l_fore]

    # Left Hindwing Points (with swallowtail extension)
    l_hind = [
        (cx - 15, cy + 10),
        (cx - 140, cy + 50),
        (cx - 220, cy + 120),
        (cx - 230, cy + 190),
        (cx - 180, cy + 250), # tail base
        (cx - 170, cy + 300), # swallowtail tip
        (cx - 155, cy + 295),
        (cx - 150, cy + 245),
        (cx - 90, cy + 230),
        (cx - 20, cy + 120),
    ]

    # Right Hindwing Points (mirrored)
    r_hind = [(cx + (cx - x), y) for (x, y) in l_hind]

    # Draw Wing Bases (Rich Carbon Black)
    black_wing = (24, 24, 28, 255)
    coral_red = (255, 59, 32, 245)
    cream_white = (245, 242, 232, 240)
    gold_ochre = (212, 175, 55, 230)

    # Fill base wings
    draw.polygon(l_fore, fill=black_wing)
    draw.polygon(r_fore, fill=black_wing)
    draw.polygon(l_hind, fill=black_wing)
    draw.polygon(r_hind, fill=black_wing)

    # Coral Red (#ff3b20) Inner Pattern Cells (Left & Right)
    for sign in [-1, 1]:
        # Red submarginal band
        draw.polygon([
            (cx + sign * 60, cy - 30),
            (cx + sign * 160, cy - 110),
            (cx + sign * 260, cy - 120),
            (cx + sign * 280, cy - 60),
            (cx + sign * 220, cy + 10),
            (cx + sign * 110, cy + 15),
        ], fill=coral_red)

        # Cream / Ivory inner highlights
        draw.polygon([
            (cx + sign * 90, cy - 40),
            (cx + sign * 170, cy - 85),
            (cx + sign * 220, cy - 80),
            (cx + sign * 190, cy - 40),
            (cx + sign * 120, cy - 15),
        ], fill=cream_white)

        # Marginal Spots (Row of cream dots along wing outer border)
        for i in range(7):
            t = i / 6.0
            bx = cx + sign * (340 - t * 140)
            by = (cy - 140) + t * 180
            draw.ellipse([bx - 6, by - 6, bx + 6, by + 6], fill=cream_white)
            draw.ellipse([bx - 3, by - 3, bx + 3, by + 3], fill=gold_ochre)

        # Hindwing Eyespots (Coral red + cream + blue-black pupil)
        hx = cx + sign * 140
        hy = cy + 160
        draw.ellipse([hx - 24, hy - 20, hx + 24, hy + 20], fill=coral_red)
        draw.ellipse([hx - 14, hy - 12, hx + 14, hy + 12], fill=black_wing)
        draw.ellipse([hx - 6, hy - 6, hx + 6, hy + 6], fill=cream_white)

        hx2 = cx + sign * 175
        hy2 = cy + 195
        draw.ellipse([hx2 - 16, hy2 - 14, hx2 + 16, hy2 + 14], fill=coral_red)
        draw.ellipse([hx2 - 8, hy2 - 8, hx2 + 8, hy2 + 8], fill=cream_white)

    # Intricate Wing Veins (Delicate contrasting lines)
    vein_color = (15, 15, 18, 255)
    vein_glow = (245, 242, 232, 70)
    for sign in [-1, 1]:
        # Radial veins branching outward
        for angle in range(-45, 35, 10):
            rad = math.radians(angle if sign > 0 else (180 - angle))
            ex = cx + int(math.cos(rad) * 310)
            ey = cy + int(math.sin(rad) * 160) - 40
            draw.line([(cx + sign * 15, cy - 10), (ex, ey)], fill=vein_color, width=3)
            draw.line([(cx + sign * 15, cy - 10), (ex, ey)], fill=vein_glow, width=1)

    # Thorax & Abdomen
    body_fill = (18, 18, 22, 255)
    draw.ellipse([cx - 14, cy - 50, cx + 14, cy + 90], fill=body_fill) # Abdomen segments
    for sy in range(cy - 30, cy + 80, 14):
        draw.line([(cx - 12, sy), (cx + 12, sy)], fill=(50, 48, 55, 255), width=2)
    draw.ellipse([cx - 16, cy - 90, cx + 16, cy - 45], fill=(30, 28, 34, 255)) # Thorax
    draw.ellipse([cx - 11, cy - 115, cx + 11, cy - 88], fill=body_fill) # Head
    draw.ellipse([cx - 13, cy - 108, cx - 7, cy - 96], fill=coral_red) # Left compound eye
    draw.ellipse([cx + 7, cy - 108, cx + 13, cy - 96], fill=coral_red) # Right compound eye

    # Antennae with knob tips
    draw.arc([cx - 85, cy - 190, cx - 5, cy - 80], start=180, end=330, fill=body_fill, width=4)
    draw.ellipse([cx - 86, cy - 188, cx - 74, cy - 176], fill=coral_red)
    draw.arc([cx + 5, cy - 190, cx + 85, cy - 80], start=210, end=360, fill=body_fill, width=4)
    draw.ellipse([cx + 74, cy - 188, cx + 86, cy - 176], fill=coral_red)

    img.save('public/images/butterfly-specimen.png', 'PNG')
    print("Butterfly specimen saved.")

def create_pressed_leaf_image():
    W, H = 500, 500
    img = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    cx, cy = W // 2, H // 2 - 20

    # Shadow
    shadow = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    sdraw = ImageDraw.Draw(shadow)
    sdraw.ellipse([cx - 160, cy - 120, cx + 160, cy + 180], fill=(0, 0, 0, 70))
    shadow = shadow.filter(ImageFilter.GaussianBlur(radius=18))
    img.paste(shadow, (0, 12), shadow)

    draw = ImageDraw.Draw(img)

    # Ginkgo biloba fan leaf
    leaf_color = (138, 122, 92, 230)
    accent_ochre = (180, 150, 95, 240)
    stem_color = (80, 68, 48, 255)

    # Fan polygon lobes
    pts = []
    # Left lobe
    for a in range(210, 335, 4):
        rad = math.radians(a)
        r = 180 + 15 * math.sin(a * 5)
        x = cx + int(math.cos(rad) * r)
        y = cy + int(math.sin(rad) * r)
        pts.append((x, y))
    
    # Notch in center of ginkgo leaf
    pts.append((cx, cy - 90))

    # Right lobe
    for a in range(25, 150, 4):
        rad = math.radians(a)
        r = 180 + 15 * math.sin(a * 5)
        x = cx + int(math.cos(rad) * r)
        y = cy - int(math.sin(rad) * r)
        pts.append((x, y))

    # Leaf base
    pts.append((cx + 10, cy + 40))
    pts.append((cx - 10, cy + 40))

    draw.polygon(pts, fill=leaf_color)

    # Fan veins
    for i in range(-160, 160, 8):
        draw.line([(cx, cy + 35), (cx + i, cy - 150 + abs(i) // 3)], fill=accent_ochre, width=1)

    # Petiole (Stem)
    draw.line([(cx, cy + 35), (cx - 25, cy + 220)], fill=stem_color, width=6)
    draw.line([(cx - 2, cy + 35), (cx - 27, cy + 220)], fill=(50, 42, 28, 255), width=2)

    img.save('public/images/pressed-leaf-specimen.png', 'PNG')
    print("Pressed leaf specimen saved.")

def create_gothic_engraving_image():
    W, H = 500, 600
    img = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # Cream plate background with border
    draw.rectangle([20, 20, W - 20, H - 20], fill=(245, 242, 235, 255), outline=(50, 48, 42, 255), width=3)
    draw.rectangle([26, 26, W - 26, H - 26], outline=(120, 115, 105, 200), width=1)

    cx = W // 2
    # Gothic Cathedral Arch
    ink = (32, 30, 26, 255)
    coral = (255, 59, 32, 255)

    # Arch columns
    draw.rectangle([cx - 140, 220, cx - 100, 480], fill=ink)
    draw.rectangle([cx + 100, 220, cx + 140, 480], fill=ink)
    # Fluted column lines
    for x in range(cx - 135, cx - 100, 8):
        draw.line([(x, 220), (x, 480)], fill=(245, 242, 235, 200), width=1)
    for x in range(cx + 105, cx + 140, 8):
        draw.line([(x, 220), (x, 480)], fill=(245, 242, 235, 200), width=1)

    # Pointed Gothic Arch Ribs
    draw.arc([cx - 180, 80, cx + 60, 360], start=270, end=360, fill=ink, width=8)
    draw.arc([cx - 60, 80, cx + 180, 360], start=180, end=270, fill=ink, width=8)
    draw.arc([cx - 160, 100, cx + 40, 340], start=270, end=360, fill=coral, width=3)
    draw.arc([cx - 40, 100, cx + 160, 340], start=180, end=270, fill=coral, width=3)

    # Checkered Perspective Floor
    for row in range(8):
        y1 = 440 + row * 15
        y2 = y1 + 15
        for col in range(12):
            x1 = cx - 120 + col * 20
            x2 = x1 + 20
            if (row + col) % 2 == 0:
                draw.rectangle([x1, y1, x2, y2], fill=ink)
            else:
                draw.rectangle([x1, y1, x2, y2], fill=(245, 242, 235, 255))

    # Mystical Floating Eye Sphere (From user image 3)
    draw.ellipse([cx - 45, 260, cx + 45, 350], fill=(245, 242, 235, 255), outline=ink, width=3)
    draw.arc([cx - 35, 280, cx + 35, 330], start=0, end=180, fill=ink, width=3)
    draw.arc([cx - 35, 280, cx + 35, 330], start=180, end=360, fill=ink, width=3)
    draw.ellipse([cx - 14, 291, cx + 14, 319], fill=coral)
    draw.ellipse([cx - 6, 299, cx + 6, 311], fill=ink)
    draw.ellipse([cx - 3, 302, cx + 1, 306], fill=(255, 255, 255, 255))

    # Classical Top Inscription
    draw.text((cx - 110, 48), "FOLIO 404 // ARS ARCHITECTONICA", fill=ink)
    draw.text((cx - 95, 520), "SPECIMEN NON INVENTUM", fill=coral)

    img.save('public/images/gothic-arch-specimen.png', 'PNG')
    print("Gothic engraving specimen saved.")

if __name__ == '__main__':
    create_butterfly_image()
    create_pressed_leaf_image()
    create_gothic_engraving_image()
