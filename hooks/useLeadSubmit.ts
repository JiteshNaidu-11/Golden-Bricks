"use client";

import { useCallback, useRef, useState } from "react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export type LeadPayload = {
  source?: string;
  page?: string;
  name: string;
  email: string;
  phone: string;
  budget?: string;
  location?: string;
  property_slug?: string;
  message?: string;
};

type LeadState = {
  loading: boolean;
  success: boolean;
  error: string | null;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export function useLeadSubmit() {
  const [state, setState] = useState<LeadState>({
    loading: false,
    success: false,
    error: null,
  });

  const lastSubmitAtRef = useRef<number>(0);

  const submit = useCallback(async (payload: LeadPayload) => {
    // Compose WhatsApp message with all form data
    const msg = [
      "Hi, I'm interested in property consultation.",
      payload.name ? `Name: ${payload.name}` : null,
      payload.email ? `Email: ${payload.email}` : null,
      payload.phone ? `Phone: ${payload.phone}` : null,
      payload.budget ? `Budget: ${payload.budget}` : null,
      payload.location ? `Location: ${payload.location}` : null,
      payload.message ? `Message: ${payload.message}` : null,
    ].filter(Boolean).join('\n');
    const url = getWhatsAppUrl(msg);
    window.open(url, '_blank');
    setState({ loading: false, success: true, error: null });
    return true;
  }, []);

  const reset = useCallback(() => {
    setState({ loading: false, success: false, error: null });
  }, []);

  return { ...state, submit, reset };
}

