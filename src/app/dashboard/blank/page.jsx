'use client'; // Client Component

import { useState } from 'react';
import {
  Box,
  Button,
  Container,
  TextField,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Typography,
  Tabs,
  Tab,
  Select,
  Input,
} from '@mui/material';

// Constants for form fields
const restaurantTypes = ['Fine Dining', 'Casual Dining', 'Café', 'Fast Food', 'Bar'];
const cuisineTypes = ['Italian', 'Chinese', 'Indian', 'Mexican', 'Japanese'];
const diningOptions = ['Indoor', 'Outdoor', 'Private Room'];
const specialFeatures = ['Wi-Fi', 'Parking', 'Wheelchair Accessible', 'Pet-Friendly'];
const countries = ['USA', 'Canada', 'UAE', 'UK', 'Australia'];
const states = ['California', 'Ontario', 'Dubai', 'London', 'New South Wales'];
const timeSlots = ['6:00 AM', '9:00 AM', '12:00 PM', '3:00 PM', '6:00 PM', '9:00 PM', '12:00 AM'];

export default function Page() {
  const [form, setForm] = useState({
    restaurantName: '',
    restaurantType: '',
    ownerName: '',
    email: '',
    phone: '',
    bio: '',
    cuisine: [],
    seatingCapacity: '',
    diningOptions: [],
    specialFeatures: [],
    streetAddress: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    openingHours: {
      Monday: { start: '9:00 AM', end: '12:00 AM', closed: false },
      Tuesday: { start: '9:00 AM', end: '12:00 AM', closed: false },
      Wednesday: { start: '9:00 AM', end: '12:00 AM', closed: false },
      Thursday: { start: '9:00 AM', end: '12:00 AM', closed: false },
      Friday: { start: '9:00 AM', end: '12:00 AM', closed: false },
      Saturday: { closed: true },
      Sunday: { closed: true },
    },
    logo: null,
    photos: null,
  });

  const [activeTab, setActiveTab] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleCheckboxChange = (name, value) => {
    setForm((prevState) => ({
      ...prevState,
      [name]: prevState[name].includes(value)
        ? prevState[name].filter((item) => item !== value)
        : [...prevState[name], value],
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setForm({ ...form, [name]: files });
  };

  const handleTimeChange = (day, key, value) => {
    setForm((prevState) => ({
      ...prevState,
      openingHours: {
        ...prevState.openingHours,
        [day]: { ...prevState.openingHours[day], [key]: value },
      },
    }));
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleClosedToggle = (day) => {
    setForm((prevState) => ({
      ...prevState,
      openingHours: {
        ...prevState.openingHours,
        [day]: { closed: !prevState.openingHours[day].closed },
      },
    }));
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Restaurant Details
      </Typography>

      <Tabs value={activeTab} onChange={handleTabChange} sx={{ mb: 3 }}>
        <Tab label="Basic Information" />
        <Tab label="Restaurant Details" />
        <Tab label="Location" />
        <Tab label="Operating Hours" />
      </Tabs>

      {/* Tab 1: Basic Information */}
      {activeTab === 0 && (
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6">Basic Information</Typography>
          <TextField
            fullWidth
            label="Restaurant Name"
            name="restaurantName"
            value={form.restaurantName}
            onChange={handleInputChange}
            sx={{ mt: 2 }}
          />
          <TextField
            fullWidth
            select
            label="Restaurant Type"
            name="restaurantType"
            value={form.restaurantType}
            onChange={handleInputChange}
            sx={{ mt: 2 }}
          >
            {restaurantTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            label="Owner/Manager Name"
            name="ownerName"
            value={form.ownerName}
            onChange={handleInputChange}
            sx={{ mt: 2 }}
          />
          <TextField
            fullWidth
            label="Email Address"
            name="email"
            value={form.email}
            onChange={handleInputChange}
            sx={{ mt: 2 }}
          />
          <TextField
            fullWidth
            label="Phone Number"
            name="phone"
            value={form.phone}
            onChange={handleInputChange}
            sx={{ mt: 2 }}
          />

          {/* Upload Section (only in the first tab) */}
          <Box sx={{ mt: 3 }}>
            <Typography variant="h6">Upload Restaurant Photos</Typography>
            <Input
              type="file"
              name="photos"
              inputProps={{ multiple: true }}
              onChange={handleFileChange}
              sx={{ mt: 2, display: 'block' }}
            />
            <Typography variant="h6" sx={{ mt: 3 }}>
              Upload Restaurant Logo
            </Typography>
            <Input
              type="file"
              name="logo"
              onChange={handleFileChange}
              sx={{ mt: 2, display: 'block' }}
            />
          </Box>
        </Box>
      )}

      {/* Tab 2: Restaurant Details */}
      {activeTab === 1 && (
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6">Restaurant Details</Typography>
          <TextField
            fullWidth
            label="Bio"
            name="bio"
            multiline
            rows={4}
            value={form.bio}
            onChange={handleInputChange}
            sx={{ mt: 2 }}
          />
          <TextField
            fullWidth
            select
            label="Cuisine Type"
            name="cuisine"
            value={form.cuisine}
            onChange={handleInputChange}
            sx={{ mt: 2 }}
            SelectProps={{ multiple: true }}
          >
            {cuisineTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            label="Seating Capacity"
            name="seatingCapacity"
            value={form.seatingCapacity}
            onChange={handleInputChange}
            sx={{ mt: 2 }}
          />
          <Box sx={{ mt: 2 }}>
            <Typography>Dining Options</Typography>
            {diningOptions.map((option) => (
              <FormControlLabel
                key={option}
                control={
                  <Checkbox
                    checked={form.diningOptions.includes(option)}
                    onChange={() => handleCheckboxChange('diningOptions', option)}
                  />
                }
                label={option}
              />
            ))}
          </Box>
          <Box sx={{ mt: 2 }}>
            <Typography>Special Features</Typography>
            {specialFeatures.map((feature) => (
              <FormControlLabel
                key={feature}
                control={
                  <Checkbox
                    checked={form.specialFeatures.includes(feature)}
                    onChange={() => handleCheckboxChange('specialFeatures', feature)}
                  />
                }
                label={feature}
              />
            ))}
          </Box>
        </Box>
      )}

      {/* Tab 3: Location */}
      {activeTab === 2 && (
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6">Location</Typography>
          <TextField
            fullWidth
            label="Street Address"
            name="streetAddress"
            value={form.streetAddress}
            onChange={handleInputChange}
            sx={{ mt: 2 }}
          />
          <TextField
            fullWidth
            label="City"
            name="city"
            value={form.city}
            onChange={handleInputChange}
            sx={{ mt: 2 }}
          />
          <TextField
            fullWidth
            select
            label="State/Region"
            name="state"
            value={form.state}
            onChange={handleInputChange}
            sx={{ mt: 2 }}
          >
            {states.map((state) => (
              <MenuItem key={state} value={state}>
                {state}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            label="Postal Code"
            name="postalCode"
            value={form.postalCode}
            onChange={handleInputChange}
            sx={{ mt: 2 }}
          />
          <TextField
            fullWidth
            select
            label="Country"
            name="country"
            value={form.country}
            onChange={handleInputChange}
            sx={{ mt: 2 }}
          >
            {countries.map((country) => (
              <MenuItem key={country} value={country}>
                {country}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      )}

      {/* Tab 4: Operating Hours */}
      {activeTab === 3 && (
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6">Operating Hours</Typography>
          {Object.keys(form.openingHours).map((day) => (
            <Box key={day} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Typography variant="body1" sx={{ flex: 1 }}>
                {day}
              </Typography>
              {!form.openingHours[day].closed ? (
                <>
                  <Select
                    value={form.openingHours[day].start}
                    onChange={(e) => handleTimeChange(day, 'start', e.target.value)}
                    sx={{ mr: 1 }}
                  >
                    {timeSlots.map((time) => (
                      <MenuItem key={time} value={time}>
                        {time}
                      </MenuItem>
                    ))}
                  </Select>
                  <Typography sx={{ mr: 1 }}>to</Typography>
                  <Select
                    value={form.openingHours[day].end}
                    onChange={(e) => handleTimeChange(day, 'end', e.target.value)}
                    sx={{ mr: 1 }}
                  >
                    {timeSlots.map((time) => (
                      <MenuItem key={time} value={time}>
                        {time}
                      </MenuItem>
                    ))}
                  </Select>
                  <Button variant="text" color="error" onClick={() => handleClosedToggle(day)}>
                    Close
                  </Button>
                </>
              ) : (
                <Button variant="text" onClick={() => handleClosedToggle(day)}>
                  Closed
                </Button>
              )}
            </Box>
          ))}
        </Box>
      )}

      {/* Submit Button */}
      <Button variant="contained" color="primary" sx={{ mt: 3 }} type="submit">
        Save Restaurant Details
      </Button>
    </Container>
  );
}
