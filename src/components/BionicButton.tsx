import { Button, Group, Modal } from '@mantine/core';
import { Dispatch, SetStateAction, useState } from 'react';

type Props = {
    thestate:Dispatch<SetStateAction<any>>,
    val:object
  };

function BionicButton({thestate, val}:Props) {
    const [opened, setOpened] = useState<boolean>(false);
  return (
   <>
   <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Bionic Reading"
        overlayOpacity={0}
        transition="fade"
      transitionDuration={600}
      transitionTimingFunction="ease"
      closeButtonLabel="Close accessibility modal"
      overflow="inside"
      size="sm"
      shadow="md"
      id="accessmodal"
      >
    <Button onClick={()=>thestate('test')}>
      Change
    </Button>
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
      </Group>
   </>
    
  );
}

export default BionicButton