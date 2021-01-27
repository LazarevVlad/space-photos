import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'FHAZ', label: 'Front Hazard Avoidance Camera' },
  { value: 'RHAZ', label: 'Rear Hazard Avoidance Camera' },
]

export default function CustomSelect() {
  const [selectedOption, setSelectedOption] = useState(null);
  
  return (
    <div className="select">
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  );
}

