import type { AuthError } from "@supabase/supabase-js";

export const useFormError = () =>{
  const serverError = ref('');

  const handleServerError = (error: AuthError) =>{
    serverError.value =
    error.message === 'Invalid login credentials'
      ? 'Incorrect email or password'
      : error.message
  }

  return {
    serverError,
    handleServerError
  }
}
