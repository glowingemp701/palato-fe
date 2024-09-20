'use client';

import { z as zod } from 'zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import { useBoolean } from 'src/hooks/use-boolean';

import { Iconify } from 'src/components/iconify';
import { Form, Field } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export const RestaurantOnboardingSchema = zod.object({
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

export function RestaurantOnboardingView() {
  const [errorMsg, setErrorMsg] = useState('');

  const router = useRouter();

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
    resolver: zodResolver(RestaurantOnboardingSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      // Handle the onboarding submission here, e.g., send to API
      // For example:
      console.log('Restaurant Onboarding Data:', data);

      // Navigate to the next page after successful onboarding
      router.push(paths.restaurant.success); // Update with actual path
    } catch (error) {
      console.error(error);
      setErrorMsg(error instanceof Error ? error.message : error);
    }
  });

  const renderHead = (
    <Stack spacing={1.5} sx={{ mb: 5 }}>
      <Typography variant="h5">Restaurant Onboarding</Typography>

      <Stack direction="row" spacing={0.5}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Already onboarded?
        </Typography>

        <Link component={RouterLink} href={paths.restaurant.signIn} variant="subtitle2">
          Sign in
        </Link>
      </Stack>
    </Stack>
  );

  const renderForm = (
    <Stack spacing={3}>
      <Field.Text
        name="restaurantName"
        label="Restaurant Name"
        InputLabelProps={{ shrink: true }}
      />
      <Field.Text name="ownerName" label="Owner/Manager Name" InputLabelProps={{ shrink: true }} />
      <Field.Text name="email" label="Contact Email" InputLabelProps={{ shrink: true }} />
      <Field.Text name="phone" label="Phone Number" InputLabelProps={{ shrink: true }} />

      <Field.Text name="streetAddress" label="Street Address" InputLabelProps={{ shrink: true }} />
      <Field.Text name="city" label="City" InputLabelProps={{ shrink: true }} />
      <Field.Text name="postalCode" label="Postal Code" InputLabelProps={{ shrink: true }} />
      <Field.Text name="country" label="Country" InputLabelProps={{ shrink: true }} />

      <LoadingButton
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}
        loadingIndicator="Submitting..."
      >
        Submit
      </LoadingButton>
    </Stack>
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
      {'By submitting, I agree to '}
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
    <>
      {renderHead}

      {!!errorMsg && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {errorMsg}
        </Alert>
      )}

      <Form methods={methods} onSubmit={onSubmit}>
        {renderForm}
      </Form>

      {renderTerms}
    </>
  );
}
