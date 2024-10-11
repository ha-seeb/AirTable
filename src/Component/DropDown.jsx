import { FormControl, Select, MenuItem, InputLabel, Chip } from '@mui/material';
import { useState } from 'react';

export default function CustomDropdown() {
  const [value, setValue] = useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="dropdown-label">Find an option</InputLabel>
      <Select
        labelId="dropdown-label"
        value={value}
        onChange={handleChange}
        label="Find an option"
      >
        <MenuItem value={1}>
          <Chip label="Less than 1 hour per day" style={{ backgroundColor: '#d0e2ff' }} />
        </MenuItem>
        <MenuItem value={2}>
          <Chip label="1-2 hours per day" style={{ backgroundColor: '#b3e5fc' }} />
        </MenuItem>
        <MenuItem value={3}>
          <Chip label="2-4 hours per day" style={{ backgroundColor: '#c8e6c9' }} />
        </MenuItem>
        <MenuItem value={4}>
          <Chip label="4-8 hours per day" style={{ backgroundColor: '#dce775' }} />
        </MenuItem>
        <MenuItem value={5}>
          <Chip label="Entire day" style={{ backgroundColor: '#ffecb3' }} />
        </MenuItem>
      </Select>
    </FormControl>
  );
}
