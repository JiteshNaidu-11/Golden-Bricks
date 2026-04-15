"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { requireSupabase } from "@/lib/supabaseClient";

type State<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

export function useSupabaseQuery<T>(
  key: string,
  run: (supabase: ReturnType<typeof requireSupabase>) => Promise<T>,
) {
  const [state, setState] = useState<State<T>>({
    data: null,
    loading: true,
    error: null,
  });

  const stableKey = useMemo(() => key, [key]);
  const runRef = useRef(run);

  // Keep latest callback without retriggering fetch loops.
  useEffect(() => {
    runRef.current = run;
  }, [run]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const supabase = requireSupabase();
        const data = await runRef.current(supabase);
        if (cancelled) return;
        setState({ data, loading: false, error: null });
      } catch (e) {
        if (cancelled) return;
        setState({
          data: null,
          loading: false,
          error: e instanceof Error ? e.message : "Unknown error",
        });
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [stableKey]);

  return state;
}

