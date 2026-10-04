import os
from pypdf import PdfReader
from PIL import Image
import io

pdf_path = r"C:\Users\suman\.gemini\antigravity\brain\4aa0f416-dfb4-48aa-9378-bdf7bb152fd2\.user_uploaded\media_1791112183649.pdf"
output_dir = os.path.abspath("public/images/extracted")
os.makedirs(output_dir, exist_ok=True)

reader = PdfReader(pdf_path)
count = 0

print(f"Total pages: {len(reader.pages)}")

for page_idx, page in enumerate(reader.pages):
    for img_idx, img_file in enumerate(page.images):
        count += 1
        out_name = f"page_{page_idx+1}_img_{img_idx+1}_{img_file.name}"
        out_path = os.path.join(output_dir, out_name)
        with open(out_path, "wb") as fp:
            fp.write(img_file.data)
        print(f"Saved: {out_name} ({len(img_file.data)} bytes)")

print(f"Total images extracted: {count}")
