import os
import numpy as np
from PIL import Image

brain_dir = r"C:\Users\Pooja Dhanasekar\.gemini\antigravity-ide\brain\79908399-b809-4be2-aec6-542c18122873"
out_dir = r"c:\Users\Pooja Dhanasekar\OneDrive\Desktop\Birthday\public\images"

hug_src = os.path.join(brain_dir, "caricature_cafe_hug_1792765541448.jpg")
orig = Image.open(hug_src).convert("RGB")
w, h = orig.size
arr = np.array(orig, dtype=np.float32)

r, g, b = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]
gray = (r + g + b) / 3.0

# 1. Background flood fill starting from (0,0) and other outer border points:
bg_mask = np.zeros((h, w), dtype=bool)
# Dark lines that bound characters:
dark_strokes = gray < 135

# Outer points are definitely background
border_seeds = []
for x in range(0, w, 5):
    border_seeds.append((0, x))
    border_seeds.append((h-1, x))
for y in range(0, h, 5):
    border_seeds.append((y, 0))
    border_seeds.append((y, w-1))

queue = [s for s in border_seeds if gray[s[0], s[1]] > 180]
for y, x in queue:
    bg_mask[y, x] = True

head = 0
while head < len(queue):
    cy, cx = queue[head]
    head += 1
    for dy, dx in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
        ny, nx = cy + dy, cx + dx
        if 0 <= ny < h and 0 <= nx < w:
            # Propagate through light paper background
            if not bg_mask[ny, nx] and not dark_strokes[ny, nx] and gray[ny, nx] > 195:
                bg_mask[ny, nx] = True
                queue.append((ny, nx))

# 2. Barath shirt:
# Internal seed inside Barath's white shirt:
# At (y=620, x=720) and (y=800, x=800)
shirt_mask = np.zeros((h, w), dtype=bool)
shirt_seeds = [(580, 700), (620, 680), (700, 750), (780, 800), (850, 850)]

# Grow shirt from inside, stopping at dark strokes or background mask or skin
is_skin = (r > g + 14) & (g > b + 8) & (gray < 235)
queue = [s for s in shirt_seeds if 0 <= s[0] < h and 0 <= s[1] < w]
for y, x in queue:
    shirt_mask[y, x] = True

head = 0
while head < len(queue):
    cy, cx = queue[head]
    head += 1
    for dy, dx in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
        ny, nx = cy + dy, cx + dx
        if 420 <= ny < h and 520 <= nx < w:
            if not shirt_mask[ny, nx] and not bg_mask[ny, nx] and not dark_strokes[ny, nx] and not is_skin[ny, nx] and gray[ny, nx] > 120:
                shirt_mask[ny, nx] = True
                queue.append((ny, nx))

# Barath's left arm sleeve (around Pooja's shoulder):
# Seed at (y=600, x=140)
sleeve_seeds = [(580, 140), (620, 150)]
for s in sleeve_seeds:
    if not bg_mask[s[0], s[1]] and not is_skin[s[0], s[1]]:
        shirt_mask[s[0], s[1]] = True
        queue.append(s)

while head < len(queue):
    cy, cx = queue[head]
    head += 1
    for dy, dx in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
        ny, nx = cy + dy, cx + dx
        if 510 <= ny <= 720 and 80 <= nx <= 220:
            if not shirt_mask[ny, nx] and not bg_mask[ny, nx] and not dark_strokes[ny, nx] and not is_skin[ny, nx] and gray[ny, nx] > 120:
                shirt_mask[ny, nx] = True
                queue.append((ny, nx))

# Apply rich maroon recolor to shirt_mask:
maroon_base = np.array([115.0, 36.0, 52.0])
lum_factor = np.clip(gray / 215.0, 0.4, 1.2)

for c in range(3):
    recolored = maroon_base[c] * lum_factor
    arr[:, :, c] = np.where(shirt_mask, recolored * 0.90 + arr[:, :, c] * 0.10, arr[:, :, c])

# Pooja's top tint: soft blush pink
# Region inside her top (bounded by her arms and hair)
pooja_seeds = [(720, 200), (800, 220), (750, 420), (850, 440)]
pooja_mask = np.zeros((h, w), dtype=bool)
queue = [s for s in pooja_seeds if 0 <= s[0] < h and 0 <= s[1] < w]
for y, x in queue:
    pooja_mask[y, x] = True

head = 0
while head < len(queue):
    cy, cx = queue[head]
    head += 1
    for dy, dx in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
        ny, nx = cy + dy, cx + dx
        if 620 <= ny < h and 80 <= nx <= 600:
            if not pooja_mask[ny, nx] and not shirt_mask[ny, nx] and not bg_mask[ny, nx] and not dark_strokes[ny, nx] and not is_skin[ny, nx] and gray[ny, nx] > 115:
                pooja_mask[ny, nx] = True
                queue.append((ny, nx))

pink_base = np.array([240.0, 185.0, 196.0])
pink_factor = np.clip(gray / 210.0, 0.45, 1.15)
for c in range(3):
    recolored_p = pink_base[c] * pink_factor
    arr[:, :, c] = np.where(pooja_mask, recolored_p * 0.65 + arr[:, :, c] * 0.35, arr[:, :, c])

arr = np.clip(arr, 0, 255).astype(np.uint8)
final_hug = Image.fromarray(arr)
forever_hug_path = os.path.join(out_dir, "our-forever-hug.png")
final_hug.save(forever_hug_path, "PNG", quality=95)
print(f"Perfected our-forever-hug.png ({os.path.getsize(forever_hug_path)} bytes)")
