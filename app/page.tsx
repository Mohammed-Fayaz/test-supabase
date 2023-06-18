import { supabase } from "../lib/supabaseClient";

export default async function Home() {
  let { data } = await supabase.from("countries").select();

  return (
    <ul>
      {data?.map((country) => (
        <li key={country.id} className="pl-2 text-lg">
          {country.id}. {country.name}
        </li>
      ))}
    </ul>
  );
}
