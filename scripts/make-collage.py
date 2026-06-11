#!/usr/bin/env python3
"""Build a simple horizontal image collage.

Usage:
    python scripts/make-collage.py output.jpg input1.jpg input2.jpg [input3.jpg ...]

The script scales each image to a common height and assembles the panels into a
single wide collage with only thin separators between images.
"""

from __future__ import annotations

import argparse
from pathlib import Path
from typing import Iterable, Tuple

from PIL import Image, ImageDraw


def parse_color(value: str) -> Tuple[int, int, int]:
    value = value.strip().lstrip("#")
    if len(value) != 6:
        raise argparse.ArgumentTypeError("colors must be 6-digit hex values like #0e121c")
    try:
        return tuple(int(value[index : index + 2], 16) for index in (0, 2, 4))
    except ValueError as exc:
        raise argparse.ArgumentTypeError(f"invalid color value: {value}") from exc


def build_collage(
    output_path: Path,
    input_paths: Iterable[Path],
    panel_height: int = 900,
    background: Tuple[int, int, int] = (14, 18, 28),
    separator_color: Tuple[int, int, int] = (255, 255, 255),
    separator_width: int = 20,
) -> None:
    inputs = [Path(path) for path in input_paths]
    if not inputs:
        raise ValueError("at least one input image is required")

    scaled_images = []
    total_width = 0
    for path in inputs:
        if not path.exists():
            raise FileNotFoundError(path)

        image = Image.open(path).convert("RGB")
        scaled_width = max(1, round(image.width * panel_height / image.height))
        scaled = image.resize((scaled_width, panel_height), Image.Resampling.LANCZOS)
        scaled_images.append(scaled)
        total_width += scaled_width

    separator_count = max(0, len(inputs) - 1)
    canvas_width = total_width + separator_width * separator_count
    canvas = Image.new("RGB", (canvas_width, panel_height), background)
    draw = ImageDraw.Draw(canvas)

    x = 0
    for index, fitted in enumerate(scaled_images):
        canvas.paste(fitted, (x, 0))
        x += fitted.width
        if index < len(scaled_images) - 1:
            draw.rectangle([x, 0, x + separator_width - 1, panel_height], fill=separator_color)
            x += separator_width

    output_path.parent.mkdir(parents=True, exist_ok=True)
    canvas.save(output_path, quality=92, optimize=True)


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("output", type=Path, help="Path to the collage image to write")
    parser.add_argument("inputs", nargs="+", type=Path, help="Input image paths")
    parser.add_argument("--panel-height", type=int, default=900)
    parser.add_argument("--background", type=parse_color, default=parse_color("0e121c"))
    parser.add_argument("--separator-color", type=parse_color, default=parse_color("ffffff"))
    parser.add_argument("--separator-width", type=int, default=20)
    args = parser.parse_args()

    build_collage(
        args.output,
        args.inputs,
        panel_height=args.panel_height,
        background=args.background,
        separator_color=args.separator_color,
        separator_width=args.separator_width,
    )


if __name__ == "__main__":
    main()
