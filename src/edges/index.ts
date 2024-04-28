import type { Edge, EdgeTypes } from "reactflow";
import CustomEdge from "./CustomEdge";
import CustomEdgeStartEnd from "./CustomEdgeStartEnd";

export const edgeTypes: EdgeTypes = {
  'custom': CustomEdge,
  'start-end': CustomEdgeStartEnd,
};

// first nodes left right top bottom
// then when a groups nodes are done then do nodes edeges
export const initialEdges = [
  // ajc
  {
    id: 'ajc-iof',
    source: 'ajc',
    target: 'iof',
    type: 'custom',
    data: {
      label: 'manufacture consent for',
      onClick: () => {
        window.open('https://en.wikipedia.org/wiki/Manufacturing_Consent', '_blank');
      },
    },
  },
  {
    id: 'ajc-movement',
    source: 'ajc',
    target: 'movement',
    type: 'custom',
    data: {
      label: 'vilifies',
      onClick: () => {
        window.open('https://en.wikipedia.org/wiki/Vilification', '_blank');
      },
    },
  },
  {
    id: 'abigail-ajc',
    source: 'ajc',
    target: 'abigail',
    type: 'custom',
    data: {
      label: 'donates',
      onClick: () => {
        window.open('https://en.wikipedia.org/wiki/Donation', '_blank');
      },
    },
  },
  {
    id: 'victor-ajc',
    source: 'ajc',
    target: 'victor',
    type: 'custom',
    data: {
      label: 'donates',
      onClick: () => {
        window.open('https://en.wikipedia.org/wiki/Donation', '_blank');
      },
    },
  },
  // abigail
  {
    id: 'abigail-neighbors',
    source: 'neighbors',
    target: 'abigail',
    type: 'custom',
    data: {
      label: 'displaces',
      onClick: () => {
        window.open('https://en.wikipedia.org/wiki/Displacement', '_blank');
      },
    },
  },
  {
    id: 'abigail-nypd',
    source: 'abigail',
    target: 'nypd',
    type: 'custom',
    data: {
      label: 'Board of NYC Police Foundation',
      onClick: () => {
        window.open('https://en.wikipedia.org/wiki/Board', '_blank');
      },
    },
  },
  // victor
  {
    id: 'victor-heico',
    source: 'victor',
    target: 'heico',
    type: 'custom',
    data: {
      label: 'President',
      onClick: () => {
        window.open('https://en.wikipedia.org/wiki/President', '_blank');
      },
    },
  },
  // jeh
  {
    id: 'jeh-lockheed',
    source: 'jeh',
    target: 'lockheed',
    type: 'custom',
    data: {
      label: 'Board of Directors',
      onClick: () => {
        window.open('https://en.wikipedia.org/wiki/President', '_blank');
      },
    },
  },
  // trustees
  {
    id: 'trustees-minouche',
    source: 'trustees',
    target: 'minouche',
    type: 'custom',
    data: {
      label: 'controls',
      onClick: () => {
        window.open('https://en.wikipedia.org/wiki/Control_(management)', '_blank');
      },
    },
  },
  {
    id: 'trustees-cu',
    source: 'trustees',
    target: 'cu',
    type: 'custom',
    data: {
      label: 'controls',
      onClick: () => {
        window.open('https://en.wikipedia.org/wiki/Control_(management)', '_blank');
      },
    },
  },
  // iof
  {
    id: 'lockheed-iof',
    source: 'lockheed',
    target: 'iof',
    type: 'custom',
    data: {
      label: 'arms',
      onClick: () => {
        window.open('https://en.wikipedia.org/wiki/Weapon', '_blank');
      },
    },
  },
  {
    id: 'heico-iof',
    source: 'heico',
    target: 'iof',
    type: 'custom',
    data: {
      label: 'arms',
      onClick: () => {
        window.open('https://en.wikipedia.org/wiki/Weapon', '_blank');
      },
    },
  },
  {
    id: 'google-iof',
    source: 'google',
    target: 'iof',
    type: 'custom',
    data: {
      label: 'assists',
      onClick: () => {
        window.open('https://en.wikipedia.org/wiki/Assistance', '_blank');
      },
    },
  },
  {
    id: 'microsoft-iof',
    source: 'microsoft',
    target: 'iof',
    type: 'custom',
    data: {
      label: 'assists',
      onClick: () => {
        window.open('https://en.wikipedia.org/wiki/Assistance', '_blank');
      },
    },
  },
  {
    id: 'iof-nypd',
    source: 'nypd',
    target: 'iof',
    type: 'custom',
    data: {
      label: 'trains with',
      onClick: () => {
        window.open('https://en.wikipedia.org/wiki/Training', '_blank');
      },
    },
  },
  {
    id: 'neighbors-students',
    source: 'students',
    target: 'neighbors',
    type: 'custom',
    data: {
      label: 'support',
      onClick: () => {
        window.open('https://en.wikipedia.org/wiki/Support_(social)', '_blank');
      },
    },
  },
  // faculty
  {
    id: 'minouche-faculty',
    source: 'faculty',
    target: 'minouche',
    type: 'custom',
    data: {
      label: 'intimidate',
      onClick: () => {
        window.open('https://en.wikipedia.org/wiki/Intimidation_(social)', '_blank');
      },
    },
  },
  // students
  {
    id: 'cssi-students',
    source: 'students',
    target: 'cssi',
    type: 'custom',
    data: {
      label: 'punish',
      onClick: () => {
        window.open('https://en.wikipedia.org/wiki/Punishment', '_blank');
      },
    },
  },
  {
    id: 'publicSafety-students',
    source: 'students',
    target: 'publicSafety',
    type: 'custom',
    data: {
      label: 'punish',
      onClick: () => {
        window.open('https://en.wikipedia.org/wiki/Punishment', '_blank');
      },
    },
  },
  {
    id: 'nypd-students',
    source: 'students',
    target: 'nypd',
    type: 'custom',
    data: {
      label: 'punish',
      onClick: () => {
        window.open('https://en.wikipedia.org/wiki/Punishment', '_blank');
      },
    },
  },
  {
    id: 'nypd-movement',
    source: 'nypd',
    target: 'movement',
    type: 'custom',
    data: {
      label: 'suppresses',
      onClick: () => {
        window.open('https://en.wikipedia.org/wiki/Suppression', '_blank');
      },
    },
  },
  // minouche
  {
    id: 'ajc-trustees',
    source: 'ajc',
    target: 'trustees',
    type: 'custom',
    data: {
      label: 'donates',
      onClick: () => {
        window.open('https://en.wikipedia.org/wiki/Donation', '_blank');
      },
    },
  },
  {
    id: 'minouche-publicSafety',
    source: 'publicSafety',
    target: 'minouche',
    type: 'custom',
    data: {
      label: 'controls',
      onClick: () => {
        window.open('https://en.wikipedia.org/wiki/Control_(management)', '_blank');
      },
    },
  },
  {
    id: 'minouche-nypd',
    source: 'minouche',
    target: 'nypd',
    type: 'custom',
    data: {
      label: 'calls in',
      onClick: () => {
        window.open('https://en.wikipedia.org/wiki/Call-in', '_blank');
      },
    },
  },
  // cu
  {
    id: 'cu-blackrock',
    source: 'cu',
    target: 'blackrock',
    type: 'custom',
    data: {
      label: 'invests',
      onClick: () => {
        window.open('https://en.wikipedia.org/wiki/Investment', '_blank');
      },
    },
    animated: true,
  },
  {
    id: 'cu-google',
    source: 'cu',
    target: 'google',
    type: 'custom',
    data: {
      label: 'invests',
      onClick: () => {
        window.open('https://en.wikipedia.org/wiki/Investment', '_blank');
      },
    },
    animated: true,
  },
  {
    id: 'cu-microsoft',
    source: 'cu',
    target: 'microsoft',
    type: 'custom',
    data: {
      label: 'invests',
      onClick: () => {
        window.open('https://en.wikipedia.org/wiki/Investment', '_blank');
      },
    },
    animated: true,
  },
  // blackrock
  {
    id: 'blackrock-heico',
    source: 'blackrock',
    target: 'heico',
    type: 'custom',
    data: {
      label: 'invests',
      onClick: () => {
        window.open('https://en.wikipedia.org/wiki/Investment', '_blank');
      },
    },
    animated: true,
  },
  {
    id: 'blackrock-google',
    source: 'blackrock',
    target: 'google',
    type: 'custom',
    data: {
      label: 'invests',
      onClick: () => {
        window.open('https://en.wikipedia.org/wiki/Investment', '_blank');
      },
    },
    animated: true,
  },
  {
    id: 'blackrock-microsoft',
    source: 'blackrock',
    target: 'microsoft',
    type: 'custom',
    data: {
      label: 'invests',
      onClick: () => {
        window.open('https://en.wikipedia.org/wiki/Investment', '_blank');
      },
    },
    animated: true,
  },
  {
    id: 'faculty-students',
    source: 'students',
    target: 'faculty',
    type: 'custom',
    data: {
      label: 'support',
      onClick: () => {
        window.open('https://en.wikipedia.org/wiki/Support_(social)', '_blank');
      },
    },
  },
  {
    id: 'nypd-publicSafety',
    source: 'publicSafety',
    target: 'nypd',
    type: 'custom',
    data: {
      label: 'recruits from',
      onClick: () => {
        window.open('https://en.wikipedia.org/wiki/Recruitment', '_blank');
      },
    },
  },
  {
    id: 'minouche-cssi',
    source: 'cssi',
    target: 'minouche',
    type: 'custom',
    data: {
      label: 'controls',
      onClick: () => {
        window.open('https://en.wikipedia.org/wiki/Control_(management)', '_blank');
      },
    },
  },
  {
    id: 'blackrock-lockheed',
    source: 'blackrock',
    target: 'lockheed',
    type: 'custom',
    data: {
      label: 'invests',
      onClick: () => {
        window.open('https://en.wikipedia.org/wiki/Investment', '_blank');
      },
    },
    animated: true,
  },
] satisfies Edge[];