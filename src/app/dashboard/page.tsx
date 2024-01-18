async function getDashboardData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
      // .then(response => response.json())
      // .then(json => console.log(json))
  if (!res.ok) {
    throw new Error('OH MY GOD THE WORLD IS BURNING');
  }
  const arr = await res.json();

  return arr.splice(0,15);
}

interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

export default async function Home() {
  let todos = await getDashboardData();
  console.log("(jason.corns) todos", todos.length);

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          This should be some content
          <ul>
            <li>Start of list</li>
          {todos.map((todo: Todo) => (
            <li key={todo.id}>
              {todo.title}
            </li>
          ))}
            <li>End of list</li>
          </ul>
        </div>
      </main>
    </>
  );
}
