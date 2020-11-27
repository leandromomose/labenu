import { useState } from "react";

export const useForm = (initialValue) => {
    const [form, setForm] = useState(initialValue)
  
    const onChange = (value, name) => {
      setForm({...form, [name]: value})
    }
  
    return {form, onChange}
  }