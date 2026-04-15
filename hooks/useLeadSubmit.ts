"use client";

import { useCallback, useRef, useState } from "react";
import { requireSupabase } from "@/lib/supabaseClient";

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
    const name = payload.name?.trim();
    const email = payload.email?.trim();
    const phone = payload.phone?.trim();

    if (!name) throw new Error("Please enter your name.");
    if (!email || !isValidEmail(email)) throw new Error("Please enter a valid email.");
    if (!phone) throw new Error("Please enter your phone number.");

    // Basic spam prevention: debounce rapid repeats.
    const now = Date.now();
    if (now - lastSubmitAtRef.current < 1200) {
      throw new Error("Please wait a moment and try again.");
    }
    lastSubmitAtRef.current = now;

    setState({ loading: true, success: false, error: null });
    try {
      const supabase = requireSupabase();
      const { error } = await supabase.from("leads").insert([
        {
          source: payload.source ?? "website",
          page: payload.page ?? null,
          name,
          email,
          phone,
          budget: payload.budget ?? null,
          location: payload.location ?? null,
          property_slug: payload.property_slug ?? null,
          message: payload.message ?? null,
        },
      ]);
      if (error) throw error;
      setState({ loading: false, success: true, error: null });
      return true;
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Something went wrong.";
      setState({ loading: false, success: false, error: msg });
      throw new Error(msg);
    }
  }, []);

  const reset = useCallback(() => {
    setState({ loading: false, success: false, error: null });
  }, []);

  return { ...state, submit, reset };
}

