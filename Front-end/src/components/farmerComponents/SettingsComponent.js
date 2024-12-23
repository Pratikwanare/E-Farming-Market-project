import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Settings = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newAdharNumber, setNewAdharNumber] = useState('');
  const [newPanNumber, setNewPanNumber] = useState('');

  const handleUpdate = () => {
    // Implement update logic here, e.g., send data to the server
    console.log('Updating user information...');
  };

  const handleDeleteAccount = () => {
    // Implement account deletion logic here
    console.log('Deleting user account...');
  };

  return (
    <Container style={{width:'400px'}}>
      <h2>Wholesaler Profile</h2>
      <Form>
        <FormGroup>
          <Label for="currentPassword">Current Password</Label>
          <Input
            type="password"
            id="currentPassword"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder='Enter Password'
          />
        </FormGroup>
        <FormGroup>
          <Label for="newPassword">New Password</Label>
          <Input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder='Enter New Password'
          />
        </FormGroup>
        <FormGroup>
          <Label for="confirmPassword">Confirm Password</Label>
          <Input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder='Enter Confirm Password'
          />
        </FormGroup>

        <FormGroup className='mb-3'>
          <Label for="newEmail">New Email</Label>
          <Input
            type="email"
            id="newEmail"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            placeholder='Enter New Mail'
          />
        </FormGroup>
        <FormGroup>
          <Label for="newAdharNumber">New Adhar Number</Label>
          <Input
            id="newAdharNumber"
            value={newAdharNumber}
            onChange={(e) => setNewAdharNumber(e.target.value)}
            placeholder='Enter New Adhar No '
          />
        </FormGroup>
        <FormGroup>
          <Label for="newPanNumber">New PAN Number</Label>
          <Input
            id="newPanNumber"
            value={newPanNumber}
            onChange={(e) => setNewPanNumber(e.target.value)}
            placeholder='Enter New Pan No'
          />
        </FormGroup>
        <Button color="primary" onClick={handleUpdate}>
          Update Information
        </Button>{' '}
        <Button color="danger" onClick={handleDeleteAccount}>
          Delete Account
        </Button>
      </Form>
    </Container>
  );
};

export default Settings;
