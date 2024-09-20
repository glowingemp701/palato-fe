'use client';

import { z as zod } from 'zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import { useBoolean } from 'src/hooks/use-boolean';

import { Form, Field } from 'src/components/hook-form';

import { signUp } from 'src/auth/context/jwt';
import { useAuthContext } from 'src/auth/hooks';

// ----------------------------------------------------------------------

export const SignUpSchema = zod.object({
  restaurantName: zod.string().min(1, { message: 'Restaurant name is required!' }),
  ownerName: zod.string().min(1, { message: 'Owner/Manager name is required!' }),
  email: zod
    .string()
    .min(1, { message: 'Email is required!' })
    .email({ message: 'Email must be a valid email address!' }),
  phone: zod.string().min(1, { message: 'Phone number is required!' }),
  streetAddress: zod.string().min(1, { message: 'Street address is required!' }),
  city: zod.string().min(1, { message: 'City is required!' }),
  postalCode: zod.string().min(1, { message: 'Postal code is required!' }),
  country: zod.string().min(1, { message: 'Country is required!' }),
});

// ----------------------------------------------------------------------

export function JwtSignUpView() {
  const { checkUserSession } = useAuthContext();

  const router = useRouter();

  const [tabValue, setTabValue] = useState(0);
  const [errorMsg, setErrorMsg] = useState('');

  const defaultValues = {
    restaurantName: '',
    ownerName: '',
    email: '',
    phone: '',
    streetAddress: '',
    city: '',
    postalCode: '',
    country: '',
  };

  const methods = useForm({
    resolver: zodResolver(SignUpSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await signUp({
        restaurantName: data.restaurantName,
        ownerName: data.ownerName,
        email: data.email,
        phone: data.phone,
        streetAddress: data.streetAddress,
        city: data.city,
        postalCode: data.postalCode,
        country: data.country,
      });
      await checkUserSession?.();

      router.refresh();
    } catch (error) {
      console.error(error);
      setErrorMsg(error instanceof Error ? error.message : error);
    }
  });

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const renderHead = (
    <Stack spacing={1.5} sx={{ mb: 5 }}>
      <Typography variant="h5" align="center">
        Restaurant Onboarding
      </Typography>

      <Stack direction="row" spacing={0.5} justifyContent="center">
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Already onboarded?
        </Typography>

        <Link component={RouterLink} href={paths.auth.jwt.signIn} variant="subtitle2">
          Sign in
        </Link>
      </Stack>
    </Stack>
  );

  const renderBasicInfoForm = (
    <Stack spacing={3}>
      <Field.Text
        name="restaurantName"
        label="Restaurant Name"
        InputLabelProps={{ shrink: true }}
        fullWidth
      />
      <Field.Text
        name="ownerName"
        label="Owner/Manager Name"
        InputLabelProps={{ shrink: true }}
        fullWidth
      />
      <Field.Text name="email" label="Contact Email" InputLabelProps={{ shrink: true }} fullWidth />
      <Field.Text name="phone" label="Phone Number" InputLabelProps={{ shrink: true }} fullWidth />
    </Stack>
  );

  const renderLocationForm = (
    <Stack spacing={3}>
      <Field.Text
        name="streetAddress"
        label="Street Address"
        InputLabelProps={{ shrink: true }}
        fullWidth
      />
      <Field.Text name="city" label="City" InputLabelProps={{ shrink: true }} fullWidth />
      <Field.Text
        name="postalCode"
        label="Postal Code"
        InputLabelProps={{ shrink: true }}
        fullWidth
      />
      <Field.Select
        name="country"
        label="Country"
        options={['USA', 'Canada', 'UK', 'Australia']}
        fullWidth
      />
    </Stack>
  );

  const renderTabs = (
    <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
      <Tabs value={tabValue} onChange={handleTabChange} centered>
        <Tab label="Basic Information" />
        <Tab label="Location" />
      </Tabs>
    </Box>
  );

  const renderTabContent = (
    <Box>
      {tabValue === 0 && renderBasicInfoForm}
      {tabValue === 1 && renderLocationForm}
    </Box>
  );

  const renderTerms = (
    <Typography
      component="div"
      sx={{
        mt: 3,
        textAlign: 'center',
        typography: 'caption',
        color: 'text.secondary',
      }}
    >
      {'By signing up, I agree to '}
      <Link underline="always" color="text.primary">
        Terms of service
      </Link>
      {' and '}
      <Link underline="always" color="text.primary">
        Privacy policy
      </Link>
      .
    </Typography>
  );

  return (
    <Box
      sx={{
        maxWidth: 480,
        mx: 'auto',
        px: 2,
        py: 3,
        border: '1px solid #e0e0e0',
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      {renderHead}

      {!!errorMsg && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {errorMsg}
        </Alert>
      )}

      {renderTabs}

      <Form methods={methods} onSubmit={onSubmit}>
        {renderTabContent}
        <LoadingButton
          fullWidth
          color="inherit"
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
          loadingIndicator="Submit..."
          sx={{ mt: 3 }}
        >
          Submit
        </LoadingButton>
      </Form>

      {renderTerms}
    </Box>
  );
}
