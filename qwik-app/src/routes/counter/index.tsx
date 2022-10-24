import { component$, Fragment, useClientEffect$, useStore } from "@builder.io/qwik";

export default component$(() => {
  const state = useStore({ count: 0 });
  return (
    <Fragment>
      <span>{state.count}</span>
      <button
        onClick$={() => {
          console.log("click");
          state.count++;
        }}
      >
        Click Me
      </button>
      <button
        onClick$={() => {
          console.log("click2");
          state.count += 2;
        }}
      >
        Click Me2
      </button>
      <div style={{ height: "1500px" }}></div>
      <Clock />
    </Fragment>
  );
});

export const Clock = component$(() => {
  const state = useStore({ time: "" });
  useClientEffect$(() => {
    const update = () => {
      state.time = new Date().toLocaleTimeString();
    };
    update();
    const tmrId = setInterval(update, 1000);
    return () => clearInterval(tmrId);
  });
  return <span> {state.time}</span>;
});
