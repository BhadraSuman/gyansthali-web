import os
from PIL import Image

extracted_dir = os.path.abspath("public/images/extracted")
public_images_dir = os.path.abspath("public/images")

mapping = {
    "hero-building.jpg": "page_1_img_1_X5.png",
    "campus-1.jpg": "page_4_img_8_X58.jpg",
    "campus-2.jpg": "page_2_img_2_X25.jpg",
    "campus-3.jpg": "page_6_img_2_X80.jpg",
    "campus-4.jpg": "page_5_img_6_X70.jpg",
    "campus-5.jpg": "page_2_img_4_X28.jpg",
    "campus-6.jpg": "page_7_img_4_X91.jpg",
    "classroom.jpg": "page_7_img_6_X93.jpg",
    "playground.jpg": "page_4_img_4_X54.jpg",
    "events-1.jpg": "page_3_img_4_X43.jpg",
    "events-2.jpg": "page_8_img_2_X100.jpg",
    "events-3.jpg": "page_5_img_4_X68.jpg",
    "events-4.jpg": "page_3_img_6_X45.jpg",
}

for target_name, src_file in mapping.items():
    src_path = os.path.join(extracted_dir, src_file)
    if not os.path.exists(src_path):
        print(f"Warning: {src_file} does not exist!")
        continue
    
    with Image.open(src_path) as img:
        img_rgb = img.convert("RGB")
        target_path = os.path.join(public_images_dir, target_name)
        img_rgb.save(target_path, "JPEG", quality=88, optimize=True)
        size_kb = os.path.getsize(target_path) // 1024
        print(f"Created {target_name} from {src_file} ({size_kb} KB, {img_rgb.size})")

print("All real school photos mapped and saved into public/images/!")
