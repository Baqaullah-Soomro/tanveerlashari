import { toast as sonnerToast, type ToastT } from "sonner"

type ToastProps = Partial<ToastT> | string

export function toast(props: ToastProps) {
  if (typeof props === 'string') {
    return sonnerToast(props)
  }
  
  // Extract title and other properties from the object
  const { title, ...options } = props as Exclude<ToastProps, string>
  
  // Call sonnerToast with title and options
  return sonnerToast(title as string, options)
}

toast.success = (message: string, options?: Omit<ToastT, "message">) => {
  return sonnerToast.success(message, options)
}

toast.error = (message: string, options?: Omit<ToastT, "message">) => {
  return sonnerToast.error(message, options)
}

toast.info = (message: string, options?: Omit<ToastT, "message">) => {
  return sonnerToast.info(message, options)
}

toast.warning = (message: string, options?: Omit<ToastT, "message">) => {
  return sonnerToast.warning(message, options)
}

toast.loading = (message: string, options?: Omit<ToastT, "message">) => {
  return sonnerToast.loading(message, options)
}