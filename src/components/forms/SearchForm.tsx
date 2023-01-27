import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../Input";

type FormValues = {
  search: string;
}

type Props = {
  onSubmit: SubmitHandler<FormValues>;
}

export default function SearchForm({ onSubmit }: Props) {
  const { handleSubmit, control } = useForm<FormValues>()

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Input
        name="search"
        placeholder="Buscar conteúdo"
        control={control}
      />
    </form>
  )
}