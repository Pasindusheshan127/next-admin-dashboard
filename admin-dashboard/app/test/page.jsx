const page = () => {
  const handleForm = async (formdata) => {
    "use server";
    console.log("hello");
    console.log(formdata);
    const username = formdata.get("username");
    console.log("username:", username);
  };
  return (
    <div className="">
      <form action={handleForm}>
        <input type="text" name="username" />
        <button>Send</button>
      </form>
    </div>
  );
};

export default page;
