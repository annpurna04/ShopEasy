export const validateForm = (formData) => {
  const newErrors = {};

  if (!formData.name.trim()) {
    newErrors.name = "Full name is required";
  } else if (formData.name.trim().length < 3) {
    newErrors.name = "Name must be at least 3 characters";
  }

  if (!formData.address.trim()) {
    newErrors.address = "Address is required";
  } else if (formData.address.trim().length < 10) {
    newErrors.address = "Address must be at least 10 characters";
  }

  if (!formData.paymentMethod) {
    newErrors.paymentMethod = "Please select a payment method";
  }

  return newErrors;
};
