function User({ nameFirst, nameLast, email }) {
  return (
    <>
      <section className="flex gap-2">
        <h2>Name:</h2>
        <p>
          {nameFirst} {nameLast}
        </p>
      </section>
      <section className="flex gap-2">
        <h2>Email:</h2>
        <p>{email}</p>
      </section>
    </>
  );
}

export default User;
