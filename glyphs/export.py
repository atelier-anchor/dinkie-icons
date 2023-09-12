"""Glyphs script to export SVG icons.
"""


import copy
import json
import os
import re


def main(jsonPath: str):
	res = {}
	glyphs = Font.selection if Font.selection else (g for g in Font.glyphs if g.export)

	# Effectively set gridLength = 1 such that scaling will work.
	Font.gridSubDivisions = Font.grid
	for glyph in glyphs:
		print(glyph.name)
		path = toSvgPath(glyph.layers[0])
		res[glyph.name] = path
	Font.gridSubDivisions = 1

	with open(os.path.join(os.path.dirname(Font.filepath), jsonPath), "w") as fp:
		json.dump(res, fp, indent=2)


def toSvgPath(layer: GSLayer) -> tuple[int, str]:
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

	return bezierPathToSvgPath(path)


def bezierPathToSvgPath(path) -> str:
	lines = re.split(r"\s*\n\s*", repr(path))
	return " ".join(sub(line) for line in lines[3:])


def sub(s: str) -> str:
	s = re.sub(r"\.0+", "", s)
	s = re.sub(r"(.+)\s+moveto", r"M \1", s)
	s = re.sub(r"(.+)\s+lineto", r"L \1", s)
	s = s.replace("closepath", "Z")
	return s


main(jsonPath="glyphs.json")
