export const AddSection = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      name: data.get('name'),
      color: data.get('color'),
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" />
        <label>Color:</label>
        <input type="text" name="color" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
