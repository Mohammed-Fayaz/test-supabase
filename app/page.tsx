import { supabase } from "../lib/supabaseClient";

export default async function Home() {
  let { data: countries, error } = await supabase.from("countries").select();

  if (error) {
    return (
      <div className="flex items-center justify-center text-5xl min-h-screen">
        Error!
      </div>
    );
  }

  return (
    <ul>
      {countries?.map((country) => (
        <li key={country.id} className="pl-2 text-lg">
          {country.id}. {country.name}
        </li>
      ))}
    </ul>
  );
}
