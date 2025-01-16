import type { LoginForm } from '@/types/AuthForm'
import type { AuthError } from '@supabase/supabase-js'

//static type declare
// interface formErrors {
//   email: [],
//   password: []
// }


// dynamic type declare
type formErrors<T> = {
  [K in keyof T]: string[]
}

export const useFormError = () => {
  const serverError = ref('')
  const realTimeErrors = ref<formErrors<LoginForm>>()

  const handleServerError = (error: AuthError) => {
    serverError.value =
      error.message === 'Invalid login credentials' ? 'Incorrect email or password' : error.message
  }

  const handleLoginForm = async (formData: LoginForm) => {
    realTimeErrors.value = {
      email: [],
      password: [],
    }

    const { validateEmail, validatePassword } = await import('@/utils/formValidations')

    const emailErrors = validateEmail(formData.email)
    if (emailErrors.length) realTimeErrors.value.email = emailErrors

    const passwordErrors = validatePassword(formData.password)
    if (passwordErrors.length) realTimeErrors.value.password = passwordErrors
  }

  return {
    serverError,
    handleServerError,
    realTimeErrors,
    handleLoginForm
  }
}
