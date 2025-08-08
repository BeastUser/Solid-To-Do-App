export default function SearchBar(props: { query: string; setQuery: (value: string) => void }) {
  return (
    <input
      type="text"
      class="border p-2 w-full mb-4"
      placeholder="🔍 Search tasks..."
      value={props.query}
      onInput={(e) => props.setQuery(e.currentTarget.value)}
    />
  );
}
