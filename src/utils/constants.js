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


export { optionsCuriosity, optionsOpportunity, optionsSpirit, customStyles, regExpImg };