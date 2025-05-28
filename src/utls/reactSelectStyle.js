export const reactStyle = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: '#1f2937',
      color: 'white',
      borderColor: '#4b5563',
      boxShadow: state.isFocused ? '0 0 0 1px #4b5563' : null,
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: '#1f2937',
      color: 'white',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#374151' : '#1f2937',
      color: 'white',
      cursor: 'pointer',
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: '#374151',
      color: 'white',
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: 'white',
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: 'white',
      ':hover': {
        color: '#1f2937',
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#d1d5db',
    }),
}