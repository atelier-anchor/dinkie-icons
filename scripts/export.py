"""Glyphs script to export SVG icons.
"""


import copy
import os
import re


# Effectively set gridLength = 1 such that scaling will work.
Font.gridSubDivisions = Font.grid

SVG_TEMPLATE = """\
<svg xmlns="http://www.w3.org/2000/svg" width="{s}" height="{s}" viewBox="0 0 {s} {s}">
  <path d="{d}"/>
</svg>\
"""


def main():
	for glyph in Font.selection:
		svgPath = os.path.join(
			os.path.dirname(Font.filepath),
			"icons",
			"".join(c + "_" if c.isupper() else c for c in glyph.name) + ".svg"
		)
		svgStr = toSvg(glyph.layers[0])
		with open(svgPath, "w") as f:
			f.write(svgStr)


def toSvg(layer: GSLayer) -> str:
	s = layer.width / Font.grid
	k = 1 / Font.grid

	# Create a new temporary layer and copy all the pixels on it.
	# Then convert the components into paths and simplify them.
	newLayer = GSLayer()
	layer.parent.layers.append(newLayer)
	newLayer.shapes = copy.deepcopy(layer.shapes)
	newLayer.decomposeComponents()
	newLayer.removeOverlap()
	newLayer.correctPathDirection()

	# Scale the paths such that the pixel unit is exactly 1px.
	# TODO: move and viewBox
	newLayer.applyTransform((k, 0, 0, -k, 0, s - 1))
	path = newLayer.bezierPath
	del(layer.parent.layers[-1])
	return SVG_TEMPLATE.format(s=int(s), d=bezierPathToSvgPath(path))


def bezierPathToSvgPath(path) -> str:
	lines = re.split(r"\s*\n\s*", path.__repr__())
	return " ".join(sub(line) for line in lines[3:])


def sub(s: str) -> str:
	s = re.sub(r"\.0+", "", s)
	s = re.sub(r"(.+)\s+moveto", r"M \1", s)
	s = re.sub(r"(.+)\s+lineto", r"L \1", s)
	s = s.replace("closepath", "Z")
	return s


main()
