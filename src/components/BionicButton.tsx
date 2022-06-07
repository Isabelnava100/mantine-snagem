import { Button } from '@mantine/core';
import { useToggle } from '@mantine/hooks';

function BionicButton() {
 
    const [value, toggle] = useToggle('blue', ['blue', 'orange']);
  return (
    <Button color={value} onClick={() => toggle()}>
      {value}
    </Button>
  );
}

export default BionicButton