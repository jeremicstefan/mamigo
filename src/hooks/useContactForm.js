import { useState, useCallback } from 'react';

const INITIAL_STATE = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
};

const validateForm = (data) => {
  const errors = {};
  if (!data.name.trim()) errors.name = 'Ime je obavezno';
  if (!data.email.trim()) {
    errors.email = 'Email je obavezan';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Unesite ispravan email';
  }
  return errors;
};

export const useContactForm = () => {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => {
      if (prev[name]) {
        const next = { ...prev };
        delete next[name];
        return next;
      }
      return prev;
    });
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const validationErrors = validateForm(formData);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
      setStatus('submitting');
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setStatus('success');
        setFormData(INITIAL_STATE);
        setErrors({});
      }, 800);
    },
    [formData]
  );

  const resetStatus = useCallback(() => setStatus('idle'), []);

  return { formData, errors, status, handleChange, handleSubmit, resetStatus };
};
