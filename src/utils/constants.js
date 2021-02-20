const optionsCuriosity = [
  { value: 'FHAZ', label: 'Front Hazard Avoidance Camera' },
  { value: 'RHAZ', label: 'Rear Hazard Avoidance Camera' },
  { value: 'MAST', label: 'Mast Camera' },
  { value: 'CHEMCAM', label: 'Chemistry and Camera Complex' },
  { value: 'MAHLI', label: 'Mars Hand Lens Imager' },
  { value: 'MARDI', label: 'Mars Descent Imager' },
  { value: 'NAVCAM', label: 'Navigation Camera' },
];

const optionsOpportunity = [
  { value: 'FHAZ', label: 'Front Hazard Avoidance Camera' },
  { value: 'RHAZ', label: 'Rear Hazard Avoidance Camera' },
  { value: 'NAVCAM', label: 'Navigation Camera' },
  { value: 'PANCAM', label: 'Panoramic Camera' },
  { value: 'MINITES', label: 'Miniature Thermal Emission Spectrometer (Mini-TES)' },
];

const optionsSpirit = [
  { value: 'FHAZ', label: 'Front Hazard Avoidance Camera' },
  { value: 'RHAZ', label: 'Rear Hazard Avoidance Camera' },
  { value: 'NAVCAM', label: 'Navigation Camera' },
  { value: 'PANCAM', label: 'Panoramic Camera' },
  { value: 'MINITES', label: 'Miniature Thermal Emission Spectrometer (Mini-TES)' },
];

const curiosityDetails = {
  mass: '899 kg',
  size: '3,1 × 2,7 × 2,1 м',
  power: '125 W',
  sourceOfPower: 'Radioisotope thermoelectric generator',
  speed: '4 centimeters per seconds',
  termOfUse: {
    planned: '668 sol',
  },
}

const OpportunityDetails = {
  mass: '185 kg',
  size: '1,6 × 2,3 × 1,5 м',
  power: '140 W',
  sourceOfPower: 'Gallium Arsenide Solar Panels',
  speed: '5 centimeters per seconds',
  termOfUse: {
    planned: '90 sol',
  },
}

const SpiritDetails = {
  mass: '185 kg',
  size: '1,6 × 2,3 × 1,5 м',
  power: '140 W',
  sourceOfPower: 'Gallium Arsenide Solar Panels',
  speed: '5 centimeters per seconds',
  termOfUse: {
    planned: '90 sol',
    operation: 'Sol 2210 - Last Rover Contact'
  },
}


const customStyles = {
  control: styles => ({
    ...styles,
    border: 'none', 
    borderBottom: '1px solid',
    borderRadius: 'none',
  }),
  singleValue: styles => ({
    ...styles,
    fontFamily: 'Space Mono',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '16px',
  }),
  menu: styles => ({
    ...styles,
    fontFamily: 'Space Mono',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '16px',
  }),
  placeholder: styles => ({
    ...styles,
    fontFamily: 'Space Mono',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '16px',
  }),
}

const regExpImg = /.(jpg|png|jpeg|svg)$/;


export { 
  optionsCuriosity, 
  optionsOpportunity, 
  optionsSpirit, 
  curiosityDetails, 
  OpportunityDetails, 
  SpiritDetails, 
  customStyles, 
  regExpImg 
};