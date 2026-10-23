import os
import numpy as np
from PIL import Image

brain_dir = r"C:\Users\Pooja Dhanasekar\.gemini\antigravity-ide\brain\79908399-b809-4be2-aec6-542c18122873"
out_dir = r"c:\Users\Pooja Dhanasekar\OneDrive\Desktop\Birthday\public\images"

# Load the authentic hand-drawn caricature hug:
hug_img_path = os.path.join(brain_dir, "caricature_cafe_hug_1792765541448.jpg")
img = Image.open(hug_img_path).convert("RGBA")
arr = np.array(img, dtype=np.float32)

# In caricature_cafe_hug:
# Barath's shirt is white/light cream in the right lower-middle quadrant.
# Pooja's top is yellow/tan floral in the lower left quadrant.
# Let's paint Barath's shirt with the rich maroon/burgundy tone from his reference photo (#6E2636 / #5c1c28)
# and Pooja's top with the soft rose-pink lace tone (#F0C8D2 / #E8B4C0)
# while preserving all pencil lines, creases, buttons, and shading.

h, w, _ = arr.shape
y_indices, x_indices = np.indices((h, w))

# Barath's shirt region: roughly x > w*0.55, y > h*0.42
# White shirt has high brightness (R > 180, G > 180, B > 180) and low saturation
r, g, b = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]
brightness = (r + g + b) / 3.0
max_c = np.maximum(np.maximum(r, g), b)
min_c = np.minimum(np.minimum(r, g), b)
sat = np.where(max_c > 0, (max_c - min_c) / max_c, 0)

# Barath shirt mask:
# x > 540, y > 430, brightness > 140, sat < 0.28
# Exclude Barath's neck/face/arm (skin has warmer tone with R > G + 15)
is_skin = (r > g + 18) & (g > b + 10) & (brightness < 240)
barath_shirt_mask = (x_indices > int(w * 0.54)) & (y_indices > int(h * 0.43)) & (brightness > 135) & (~is_skin) & (sat < 0.25)

# Also Barath's arm around her: sleeve cuff near shoulder x ~ 90..180, y ~ 530..680
sleeve_cuff_mask = (x_indices < int(w * 0.20)) & (y_indices > int(h * 0.52)) & (y_indices < int(h * 0.72)) & (brightness > 140) & (sat < 0.25)
barath_shirt_mask = barath_shirt_mask | sleeve_cuff_mask

# Barath maroon target: #6E2636 -> RGB (110, 38, 54)
# We preserve the pencil shading by multiplying the relative luminance
maroon_base = np.array([118.0, 42.0, 58.0])
lum_factor = np.clip(brightness / 220.0, 0.4, 1.25)
for c in range(3):
    recolored = maroon_base[c] * lum_factor
    # Blend smoothly
    arr[:, :, c] = np.where(barath_shirt_mask, recolored * 0.88 + arr[:, :, c] * 0.12, arr[:, :, c])

# Pooja's top region: lower left, x between 80 and 700, y > 600
# Yellow floral has high R and G, lower B (warm yellowish)
pooja_top_mask = (x_indices > int(w * 0.08)) & (x_indices < int(w * 0.72)) & (y_indices > int(h * 0.63))
# Avoid Barath's hand (around x: 260-520, y: 740-980 - has skin tone)
pooja_top_mask = pooja_top_mask & (~barath_shirt_mask)
is_hand = (x_indices > int(w * 0.28)) & (x_indices < int(w * 0.54)) & (y_indices > int(h * 0.75)) & (r > g + 25)
pooja_top_mask = pooja_top_mask & (~is_hand) & (brightness > 110)

# Pooja soft blush pink top target: #EBB6C2 -> RGB (235, 182, 194)
pink_base = np.array([238.0, 185.0, 196.0])
pink_factor = np.clip(brightness / 215.0, 0.5, 1.15)
for c in range(3):
    recolored_pink = pink_base[c] * pink_factor
    arr[:, :, c] = np.where(pooja_top_mask, recolored_pink * 0.65 + arr[:, :, c] * 0.35, arr[:, :, c])

arr = np.clip(arr, 0, 255).astype(np.uint8)
final_hug = Image.fromarray(arr).convert("RGB")
final_hug.save(os.path.join(out_dir, "our-forever-hug.png"), "PNG", quality=95)
print("Saved authentic caricature recolor to our-forever-hug.png!")
