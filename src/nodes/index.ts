import type { Node, NodeTypes } from "reactflow";
import { PositionLoggerNode } from "./PositionLoggerNode";
import SimpleNode from '../SimpleNode';
import GroupNode from '../GroupNode';

// Define the width and height of one grid
const grid_width = 100;
const grid_height = 100;
const grid_gap = 5;

// first groups of nodes then their nodes then nodes
export const initialNodes = [
  // 👯‍♀️ groups
  {
    id: 'trustees',
    type: 'group',
    data: { label: 'The Trustees' },
    position: { x: 2 * grid_width + 1 * grid_gap, y: 1 * grid_height + 1 * grid_gap },
    className: 'light',
    style: { backgroundColor: 'rgba(255, 0, 0, 0.1)', width: 3 * grid_width - 2 * grid_gap, height: 2 * grid_height - 2 * grid_gap },
  },
  {
    id: 'abigail',
    type: 'node',
    data: { label: 'Abigal Black Elbaum' },
    position: { x: 0 * grid_width + 1 * grid_gap, y: 1 * grid_height + 1 * grid_gap },
    parentNode: 'trustees',
  },
  {
    id: 'victor',
    type: 'node',
    data: { label: 'Victor Mendelson' },
    position: { x: 1 * grid_width + 1 * grid_gap, y: 0.5 * grid_height + 1 * grid_gap },
    parentNode: 'trustees',
  },
  {
    id: 'jeh',
    type: 'node',
    data: { label: 'Jeh Johnson' },
    position: { x: 2 * grid_width + 1 * grid_gap, y: 0 * grid_height + 1 * grid_gap },
    parentNode: 'trustees',
  },
  {
    id: 'movement',
    type: 'group',
    data: { label: 'THE MOVEMENT' },
    position: { x: -2 * grid_width + 1 * grid_gap, y: 0 * grid_height + 1 * grid_gap },
    style: { backgroundColor: 'rgba(255, 0, 0, 0.1)', width: 1 * grid_height - 2 * grid_gap, height: 3 * grid_width - 2 * grid_gap },
  },
  {
    id: 'students',
    type: 'node',
    data: { label: 'Student Protestors' },
    position: { x: 0 * grid_width + 1 * grid_gap, y: 0 * grid_height + 1 * grid_gap },
    className: 'light',
    targetPosition: 'top',
    parentNode: 'movement',
  },
  {
    id: 'faculty',
    type: 'node',
    data: { label: 'Faculty, Staff and Alum Allies' },
    position: { x: 0 * grid_width + 1 * grid_gap, y: 2 * grid_height + 1 * grid_gap },
    className: 'light',
    parentNode: 'movement',
  },
  {
    id: 'neighbors',
    type: 'node',
    data: { label: 'Neighbors + Community Orgs in Harlem/NYC' },
    position: { x: 0 * grid_width + 1 * grid_gap, y: 1 * grid_height + 1 * grid_gap },
    className: 'light',
    parentNode: 'movement',
  },
  {
    id: 'genocide',
    type: 'group',
    data: { label: 'APARTHEID OCCUPATION GENOCIDE' },
    position: { x: 10 * grid_width + 1 * grid_gap, y: 0 * grid_height + 1 * grid_gap },
    style: { width: 1 * grid_width - 2 * grid_gap, height: 1 * grid_height - 2 * grid_gap },
  },
  {
    id: 'iof',
    type: 'node',
    data: { label: 'Israeli Occupation Forces (IOF)' },
    position: { x: 0 * grid_width + 1 * grid_gap, y: 0 * grid_height + 1 * grid_gap },
    parentNode: 'genocide',
  },
  {
    id: 'profiteers',
    type: 'group',
    data: { label: 'War Profiteers' },
    position: { x: 6 * grid_width + 1 * grid_gap, y: 1 * grid_height + 1 * grid_gap },
    style: { width: 2 * grid_width - 2 * grid_gap, height: 5 * grid_width - 2 * grid_gap },
  },
  {
    id: 'lockheed',
    type: 'node',
    data: { label: 'Lockheed Martin' },
    position: { x: 1 * grid_width + 1 * grid_gap, y: 0 * grid_height + 1 * grid_gap },
    parentNode: 'profiteers',
  },
  {
    id: 'heico',
    type: 'node',
    data: { label: 'HEICO' },
    position: { x: 1 * grid_width + 1 * grid_gap, y: 1 * grid_height + 1 * grid_gap },
    parentNode: 'profiteers',
  },
  {
    id: 'blackrock',
    type: 'node',
    data: { label: 'Blackrock' },
    position: { x: 0 * grid_width + 1 * grid_gap, y: 2 * grid_height + 1 * grid_gap },
    parentNode: 'profiteers',
  },
  {
    id: 'google',
    type: 'node',
    data: { label: 'Google' },
    position: { x: 1 * grid_width + 1 * grid_gap, y: 3 * grid_height + 1 * grid_gap },
    parentNode: 'profiteers',
  },
  {
    id: 'microsoft',
    type: 'node',
    data: { label: 'Microsoft' },
    position: { x: 1 * grid_width + 1 * grid_gap, y: 4 * grid_height + 1 * grid_gap },
    parentNode: 'profiteers',
  },
  {
    id: 'ajc',
    type: 'node',
    data: { label: 'AJC and other Zionist cultural orgs' },
    position: { x: 0 * grid_width + 2 * grid_gap, y: 0 * grid_height + 2 * grid_gap },
    className: 'light',
  },
  {
    id: 'minouche',
    type: 'node',
    data: { label: 'Minouche Shafik + Upper Admin' },
    position: { x: 2 * grid_width + 2 * grid_gap, y: 3 * grid_height + 2 * grid_gap },
    // parentNode: 'trustees',
  },
  {
    id: 'cu',
    type: 'node',
    data: { label: 'CU Investment Company' },
    position: { x: 4 * grid_width + 2 * grid_gap, y: 3 * grid_height + 2 * grid_gap },
  },
  {
    id: 'cssi',
    type: 'node',
    data: { label: 'CSSI, Rules of Conduct, etc.' },
    position: { x: -0.5 * grid_width + 2 * grid_gap, y: 5 * grid_height + 2 * grid_gap },
  },
  {
    id: 'publicSafety',
    type: 'node',
    data: { label: 'Public Safety' },
    position: { x: 0.5 * grid_width + 2 * grid_gap, y: 5 * grid_height + 2 * grid_gap },
  },
  {
    id: 'nypd',
    type: 'node',
    data: { label: 'NYPD' },
    position: { x: 4 * grid_width + 2 * grid_gap, y: 5 * grid_height + 2 * grid_gap },
  },
] satisfies Node[];

export const nodeTypes = {
  node: SimpleNode,
  group: GroupNode,
  'position-logger': PositionLoggerNode,
} satisfies NodeTypes;