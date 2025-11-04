export const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'components', label: 'Components' },
  { id: 'tools', label: 'Tools Required' },
  { id: 'assembly', label: 'Assembly Steps' },
  { id: 'disassembly', label: 'Disassembly' },
  { id: 'maintenance', label: 'Maintenance' }
]

export const structuralComponents = [
  {
    title: '🟫 Back Wall Panel',
    material: 'Pine wood with waterproof coating',
    quantity: '1 panel',
    dimensions: '4.4m × 2.4m',
    features: 'Light, easy to paint, transportable',
    notes: 'Solid back wall for structure stability'
  },
  {
    title: '🟨 Side Wall Panels (Left & Right)',
    material: 'Aluminum frame with hexagon perspex inserts',
    quantity: '2 panels',
    dimensions: '2.4m × 2.4m each',
    features: 'Yellow-tinted perspex (safer and lighter than glass)',
    notes: 'Hexagonal honeycomb pattern with steel framing'
  },
  {
    title: '🟫 Roof Panel',
    material: 'Pine wood with waterproof coating',
    quantity: '1 panel (foldable)',
    dimensions: '2.4m × 4.4m',
    features: 'Piano hinge down the middle (facing upward)',
    notes: 'Can be dismantled and reattached, folds for transport'
  },
  {
    title: '🟫 Floor Panel',
    material: 'Laminated wood or vinyl tiles',
    quantity: '1 panel (foldable)',
    dimensions: '2.4m × 4.4m',
    features: 'Piano hinge down the middle (facing downward)',
    notes: 'Lightweight, easy to clean, folds for transport'
  },
  {
    title: '🪵 Display Tables',
    material: 'Wooden base with laminated flooring',
    quantity: '2 tables',
    dimensions: '1.5m × 0.5m × 0.9m each',
    features: 'Designed in the shape of a "5"',
    notes: 'Movable, for displaying products'
  },
  {
    title: '🌸 Flower Display (Honeycomb)',
    material: 'Honey comb structure',
    quantity: '1 display',
    dimensions: '0.8m diameter',
    features: 'Decorative honeycomb design',
    notes: 'Placed on display table'
  },
  {
    title: '🐝 Bee Statue',
    material: 'Finished foam or light wood',
    quantity: '1 statue',
    dimensions: 'N/A',
    features: 'Carved from wood',
    notes: 'Minimize weight for traveling, decorative element'
  }
]

export const connectionHardware = [
  {
    title: '🔗 Butt Joint Latches',
    quantity: '12-16 latches (depending on configuration)',
    purpose: 'Connect wall panels to floor and roof',
    features: 'Quick-release mechanism, pre-attached to panels',
    location: '3x on the floor for each side, 3x on the roof for each side, 3x on the back panel for each side, 4x on the back panel for the roof'
  },
  {
    title: '🎹 Piano Hinges',
    quantity: '2 hinges (pre-installed)',
    purpose: 'Allow roof and floor to fold',
    features: 'N/A',
    location: 'Center of roof (facing up) and floor (facing down)'
  }
]

export const assemblySteps = [
  {
    number: 1,
    title: 'Prepare the Site',
    items: [
      'Clear the assembly area of debris and obstacles',
      'Verify ground is level using a level tool',
      'Lay out all components and verify nothing is missing',
      'Identify all butt joint latches on each panel',
      'Brief your team on the assembly sequence'
    ],
    tip: 'Take a photo of the components layout for reference during disassembly.'
  },
  {
    number: 2,
    title: 'Install the Floor Panel',
    items: [
      'Unfold the floor panel completely (piano hinge will be facing ground)',
      'Position the floor panel in the desired location',
      'Ensure the panel is flat and level',
      'The piano hinge should run lengthwise down the center',
      'Verify butt joint latch receivers are facing upward along all edges'
    ],
    tip: 'Mark the front of the floor panel to maintain correct orientation throughout assembly.'
  },
  {
    number: 3,
    title: 'Raise the Back Wall',
    items: [
      'With 2-3 people: Carefully lift the back wall panel',
      'Position the bottom edge along the rear edge of the floor panel',
      'Have one person hold the panel upright while others work on latches',
      'Align the butt joint latches on the back wall with receivers on the floor',
      'Engage all latches along the bottom edge (typically 3-4 latches)',
      'Verify the wall is perpendicular to the floor (90-degree angle)'
    ],
    warning: '⚠️ Safety: Do not release the wall until all bottom latches are securely fastened and verified.'
  },
  {
    number: 4,
    title: 'Install Left Side Wall (Hexagon Panel)',
    items: [
      'With 2 people: Carefully lift the left hexagon side panel',
      "Position the panel's bottom edge along the left side of the floor",
      'Align the rear edge with the back wall',
      'One person holds the panel while the other engages latches',
      'Connect bottom edge latches to floor first (2-3 latches)',
      'Then connect rear edge latches to back wall (2-3 latches)',
      'Ensure the aluminum frame is properly aligned'
    ],
    tip: 'Handle the hexagon perspex panels carefully to avoid damage. The yellow-tinted perspex is lighter than glass but still requires gentle handling.'
  },
  {
    number: 5,
    title: 'Install Right Side Wall (Hexagon Panel)',
    items: [
      'Repeat the process from Step 4 for the right side wall',
      'Position along the right edge of the floor',
      'Align rear edge with back wall',
      'Engage bottom edge latches first',
      'Then engage rear edge latches',
      'Verify both side walls are parallel and vertical'
    ]
  },
  {
    number: 6,
    title: 'Install the Roof Panel',
    items: [
      'With 3 people: Carefully lift the roof panel',
      'The piano hinge should be facing upward (toward the sky)',
      'Position the roof on top of the three walls',
      'Align all edges with the wall panels',
      'Starting at the back, engage butt joint latches to the back wall (3-4 latches)',
      'Move to the left side and engage latches (2-3 latches)',
      'Finish with the right side latches (2-3 latches)',
      'Verify the roof is level and secure'
    ],
    warning: '⚠️ Critical: The roof is the heaviest component when lifted overhead. Ensure all team members have a secure grip and communicate clearly during installation.'
  },
  {
    number: 7,
    title: 'Position Display Tables',
    items: [
      'Move the two display tables (shaped like "5") into the structure',
      'Position them according to your desired layout',
      'Ensure tables are stable and level',
      'Leave clear pathways for customer movement'
    ]
  },
  {
    number: 8,
    title: 'Add Decorative Elements',
    items: [
      'Place the honeycomb flower display (0.8m diameter) on one of the display tables',
      'Position the wooden bee statue in a prominent location',
      'Add any additional products or displays',
      'Step back and verify the overall aesthetic'
    ]
  },
  {
    number: 9,
    title: 'Final Inspection',
    items: [
      'Walk around the entire structure checking all butt joint latches',
      'Gently push on walls to verify stability',
      'Check that the roof is secure and level',
      'Verify floor panel is completely flat with no raised edges',
      'Clean any fingerprints from the hexagon perspex panels',
      'Test the stability by having someone carefully lean against the walls'
    ],
    tip: 'Take photos of the completed assembly for future reference and for promoting the BEE Mindful campaign on social media!'
  }
]

export const disassemblySteps = [
  {
    number: 1,
    title: 'Remove Decorative Elements',
    items: [
      'Carefully remove the bee statue and store safely',
      'Remove the honeycomb flower display from the table',
      'Clear all products and displays from the structure',
      'Remove both display tables from inside the structure'
    ]
  },
  {
    number: 2,
    title: 'Remove Roof Panel',
    items: [
      'With 3 people: Prepare to lift the roof',
      'Starting with the right side, release all butt joint latches',
      'Move to the left side and release all latches',
      'Finally, release back wall latches',
      'Carefully lift the roof panel off and set down safely',
      'Fold the roof panel along the piano hinge for transport'
    ],
    tip: 'Place protective blankets or cardboard under the roof panel when setting it down to prevent scratches.'
  },
  {
    number: 3,
    title: 'Remove Right Side Wall',
    items: [
      'With 2 people: One person steadies the panel',
      'Release latches connecting to the back wall',
      'Release latches connecting to the floor',
      'Carefully tilt the panel outward and lower to the ground',
      'Inspect hexagon perspex inserts for damage'
    ]
  },
  {
    number: 4,
    title: 'Remove Left Side Wall',
    items: [
      'Repeat the process from Step 3 for the left side wall',
      'Release back wall latches first',
      'Then release floor latches',
      'Lower carefully and inspect for damage'
    ]
  },
  {
    number: 5,
    title: 'Remove Back Wall',
    items: [
      'With 2-3 people: Position team members on both sides of the wall',
      'Release all butt joint latches connecting to the floor',
      'Carefully tilt the back wall panel forward',
      'Lower the panel to the ground in a controlled manner',
      'Inspect for any damage or wear'
    ]
  },
  {
    number: 6,
    title: 'Fold and Store Floor Panel',
    items: [
      'Ensure the floor panel is clean and dry',
      'Fold the floor panel along the piano hinge',
      'Secure with straps or ties to prevent unfolding during transport'
    ]
  },
  {
    number: 7,
    title: 'Prepare for Transport',
    items: [
      'Clean all perspex panels with appropriate cleaner',
      'Wrap hexagon panels in protective material',
      'Bundle folded roof and floor panels together',
      'Secure display tables and decorative elements separately',
      'Create an inventory checklist to verify all components are packed',
      'Label components for easier next-time setup'
    ]
  }
]

export const maintenanceSchedules = [
  {
    title: 'After Each Use',
    items: [
      'Clean all perspex hexagon panels with non-abrasive cleaner',
      'Wipe down pine wood panels with damp cloth',
      'Inspect all butt joint latches for wear or damage',
      'Check piano hinges for smooth operation',
      'Remove any debris from floor panel'
    ]
  },
  {
    title: 'Monthly (if in regular use)',
    items: [
      'Apply wood conditioning oil to pine wood panels',
      'Lubricate piano hinges with appropriate lubricant',
      'Tighten any loose butt joint latches',
      'Inspect waterproof coating on roof panel',
      'Check aluminum frames for structural integrity',
      'Clean and condition laminated flooring'
    ]
  },
  {
    title: 'Seasonal (every 3-6 months)',
    items: [
      'Deep clean all components',
      'Reapply waterproof coating to roof if needed',
      'Check for wood warping or splitting',
      'Inspect and replace worn latches',
      'Polish aluminum frames',
      'Touch up paint on pine wood panels'
    ]
  }
]

export const cleaningInstructions = [
  {
    title: 'Pine Wood Panels (Back Wall, Roof)',
    items: [
      'Regular cleaning: Use a damp (not wet) cloth with mild soap',
      'Avoid: Harsh chemicals, excessive water, abrasive scrubbers',
      'Drying: Always dry immediately with a clean cloth',
      'Protection: Reapply waterproof coating annually or as needed'
    ]
  },
  {
    title: 'Perspex/Acrylic Hexagon Panels',
    items: [
      'Regular cleaning: Use soft microfiber cloth with acrylic cleaner or mild soap solution',
      'Avoid: Window cleaners with ammonia, paper towels (they scratch), rough cloths',
      'Technique: Wipe gently in circular motions, don\'t apply pressure',
      'Static removal: Use anti-static spray designed for acrylic',
      'Scratches: Minor scratches can be buffed out with acrylic polish'
    ]
  },
  {
    title: 'Aluminum Frame',
    items: [
      'Regular cleaning: Wipe with damp cloth and mild detergent',
      'Polish: Use aluminum polish for shine (optional)',
      'Oxidation: Remove with fine steel wool and protective coating',
      'Avoid: Acidic cleaners that can corrode aluminum'
    ]
  },
  {
    title: 'Laminated Floor Panel',
    items: [
      'Regular cleaning: Sweep or vacuum, then damp mop',
      'Avoid: Standing water, steam cleaners, wax-based products',
      'Spills: Clean immediately to prevent damage',
      'Protection: Use mats in high-traffic areas'
    ]
  }
]

export const hardwareMaintenance = [
  {
    title: 'Butt Joint Latches',
    items: [
      'Inspect for bent or damaged components monthly',
      'Clean dirt and debris from latch mechanisms',
      'Apply light machine oil if latches become stiff',
      'Test each latch\'s grip strength before each setup',
      'Replace immediately if latch fails to hold securely'
    ]
  },
  {
    title: 'Piano Hinges',
    items: [
      'Clean dirt from hinge pins and knuckles',
      'Apply lightweight lubricant (3-in-1 oil or similar)',
      'Open and close several times after lubricating to distribute oil',
      'Check for rust or corrosion, treat if present',
      'Verify smooth operation before each use'
    ]
  }
]

export const troubleshootingIssues = [
  {
    problem: 'Latches won\'t engage',
    cause: 'Misalignment or debris',
    solution: 'Check panel alignment; clean latch mechanism; verify panels are square'
  },
  {
    problem: 'Panels won\'t stay connected',
    cause: 'Worn or damaged latches',
    solution: 'Replace faulty latches immediately; inspect all latches for wear'
  },
  {
    problem: 'Floor panel won\'t lay flat',
    cause: 'Ground uneven or hinge binding',
    solution: 'Level the ground; lubricate piano hinge; check for debris under panel'
  },
  {
    problem: 'Roof panel sagging',
    cause: 'Insufficient support or warping',
    solution: 'Verify all wall connections are secure; inspect for wood warping; may need support beam'
  },
  {
    problem: 'Perspex panels cloudy',
    cause: 'Improper cleaning or scratches',
    solution: 'Use proper acrylic cleaner; polish with acrylic polish; replace if severely damaged'
  },
  {
    problem: 'Wood panels splitting',
    cause: 'Moisture damage or age',
    solution: 'Apply wood filler; sand smooth; reapply waterproof coating; may require replacement'
  },
  {
    problem: 'Structure unstable',
    cause: 'Loose connections or uneven ground',
    solution: 'Check all latches are fully engaged; level the installation surface; verify panel alignment'
  },
  {
    problem: 'Piano hinge stiff',
    cause: 'Lack of lubrication or debris',
    solution: 'Clean hinge thoroughly; apply lubricant; work hinge back and forth'
  }
]

export const weatherConditions = [
  {
    title: '☀️ Sunny/Hot Conditions',
    items: [
      'Position structure to minimize direct sun exposure (if possible)',
      'Monitor for excessive heat buildup inside',
      'Check wood panels for signs of drying or cracking',
      'Perspex may expand slightly in heat - normal behavior'
    ]
  },
  {
    title: '🌧️ Rainy/Wet Conditions',
    items: [
      'Waterproof roof coating should protect against light rain',
      'Monitor for water pooling on roof',
      'Avoid setup in heavy rain if possible',
      'Dry all components thoroughly before storage',
      'Check for water intrusion at panel joints'
    ]
  },
  {
    title: '💨 Windy Conditions',
    items: [
      'Light wind: Structure should be stable',
      'Moderate wind: Monitor structure closely; may need additional securing',
      'Strong wind: Disassemble structure immediately - risk of damage or injury',
      'Never leave structure unattended in windy conditions',
      'Consider weight anchors if regular wind is expected'
    ]
  }
]

