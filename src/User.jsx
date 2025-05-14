function User(data) {

  return (
    <div class="flex w-96 border">
      <div>
      <img src={data.thumbnail}></img>
      </div>
      <div class="grid grid-flow-col grid-rows-2">
        <div>User Name: {data.first} {data.last}</div>
        <div>User Email: {data.email}</div>
      </div>
    </div>
  );
}

export default User;