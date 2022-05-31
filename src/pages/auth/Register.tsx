import { useState, useRef } from 'react';
import { TextInput, Title, Grid, Container, Textarea, PasswordInput, Progress, Text, Popover, Button, Group, Box, Radio, RadioGroup } from '@mantine/core';
import { useForm } from '@mantine/form';
import Gusers from './components/gaiaonlineusers';

function PasswordRequirement({ meets, label }: { meets: boolean; label: string }) {
  return (
    <Text
      color={meets ? 'teal' : 'red'}
      sx={{ display: 'flex', alignItems: 'center' }}
      mt={7}
      size="sm"
    >
      {meets ? 'A' : 'X'} <Box ml={10}>{label}</Box>
    </Text>
  );
}

const requirements = [
  { re: /[0-9]/, label: 'Includes number' },
  { re: /[a-z]/, label: 'Includes lowercase letter' },
  { re: /[A-Z]/, label: 'Includes uppercase letter' },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Includes special symbol' },
];

function getStrength(password: string) {
  let multiplier = password.length > 5 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
}

function Register() {


  const [popoverOpened, setPopoverOpened] = useState(false);
  const [value, setValue] = useState('');
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement key={index} label={requirement.label} meets={requirement.re.test(value)} />
  ));

  const strength = getStrength(value);
  const color = strength === 100 ? 'teal' : strength > 50 ? 'yellow' : 'red';
  //above is pw check

    const [gaia,setGaia]=useState("No");
    const refRadio=useRef<HTMLInputElement>(null);
    const refTextarea=useRef<HTMLTextAreaElement>(null);
    const form = useForm({
      initialValues: {
        email: '',
        username:'',
        isGaia:gaia,
        gaiaName:'',
        application:'',
        password:'',
        confirmPassword:'',
        termsOfService: false,
      },
  
      validate: {
        email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        username: (value) => (/^[a-zA-Z0-9-_]{3,23}$/.test(value) ? null : 'Invalid username'),
        confirmPassword: (value, values) =>
        value !== values.password&& gaia==='Yes' ? 'Passwords did not match' : null,
        application: (value) => value.length < 500 && gaia==='No' ? 'Application must be at least 500 characters long.' : null,
        gaiaName: (value) => gaia==='Yes' && Gusers.findIndex(element => {
          return element.toLowerCase() === value.toLowerCase();
        })<0 ? 'Gaia username does not exist.' : null,
      },
    });


    return (
      <Container size={1200}> 
      <Title order={1}>Apply to Join</Title>
        <form onSubmit={form.onSubmit((values) =>{
        console.log(values);
        })}>
      <Grid gutter="sm" >
        
        <Grid.Col xs={6}>
           
          <TextInput          
            required
            mt="md"
            label="Email"
            placeholder="your@email.com"
            {...form.getInputProps('email')}
          />
     <TextInput
            required
            mt="md"
            label="Username"
            placeholder="username"
            {...form.getInputProps('username')}
          />
          
             <RadioGroup
             size="sm"
             mt="md"
            ref={refRadio}
             value={form.values.isGaia}
             onChange={(val)=>{
               setGaia(val);
               form.setFieldValue("isGaia",val);
              }}
      label="Are you in the gaiaonline Snagem guild?"
      required
    >
      <Radio value="Yes" label="Yes"  />
      <Radio value="No" label="No" />
    </RadioGroup>
    </Grid.Col>
    <Grid.Col xs={6}>
    {
        gaia==='Yes'?
        <>
        <TextInput
            mt="md"
        required
        label="Gaiaonline Username"
        placeholder="Your gaiaonline username"
        {...form.getInputProps('gaiaName')}
      />
       <Popover
      opened={popoverOpened}
      placement="end"
      position="bottom"
      withArrow
      styles={{ popover: { width: '100%' } }}
      trapFocus={false}
      transition="pop-top-left"
      onFocusCapture={() => setPopoverOpened(true)}
      onBlurCapture={() => setPopoverOpened(false)}
      target={
        <PasswordInput
        mt="md"
          required
          {...form.getInputProps('password')}
          label="Your password"
          placeholder="Your password"
          description="Should include letters in lower and uppercase, at least 1 number and at least 1 special symbol."
          value={value}
          onChange={(event) => {setValue(event.currentTarget.value);form.setFieldValue("password",event.currentTarget.value);}}
        />
      }
    >
      <Progress color={color} value={strength} size={5} style={{ marginBottom: 10 }} />
      <PasswordRequirement label="Includes at least 6 characters" meets={value.length > 5} />
      {checks}
    </Popover>
      <PasswordInput
       {...form.getInputProps('confirmPassword')}
      placeholder="Your Password again"
      mt="md"
      label="Confirm Password"
      required
    />
    </>
        :
        <>
        <Textarea
        {...form.getInputProps('application')}
        ref={refTextarea}
        placeholder="Write your answer here."
        description="Write a paragraph about..."
        label="Application"
        minRows={12}
        required
      />
      
      <Group position="right">
      <Text size="xs">
        {refTextarea.current?.value.length ?refTextarea.current?.value.length:0} Characters</Text>
    </Group>
    </>
    }
  
          <Group position="right" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </Grid.Col>
      </Grid>
        </form>
      </Container>
    );
  }
export default Register;
