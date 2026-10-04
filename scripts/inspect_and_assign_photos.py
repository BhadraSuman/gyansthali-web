import os
from PIL import Image

extracted_dir = os.path.abspath("public/images/extracted")
public_images_dir = os.path.abspath("public/images")

# List all images >= 30KB (the actual photos)
photos = []
for f in os.listdir(extracted_dir):
    p = os.path.join(extracted_dir, f)
    size = os.path.getsize(p)
    if size > 30000:
        try:
            with Image.open(p) as im:
                w, h = im.size
                photos.append((f, size, w, h, p))
        except Exception:
            pass

# Sort by size descending
photos.sort(key=lambda x: x[1], reverse=True)

print(f"Found {len(photos)} major photos:")
for name, sz, w, h, _ in photos:
    print(f"{name:30} {sz//1024:5} KB   {w}x{h}")
