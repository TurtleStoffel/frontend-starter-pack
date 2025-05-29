import "./style.css";
import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="min-h-screen bg-base-200 flex flex-col items-center justify-center">
    <h1 class="text-4xl font-extrabold text-secondary mb-8 text-center drop-shadow-lg">
      Vite + TailwindCSS + DaisyUI
    </h1>
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body items-center text-center">
        <h2 class="card-title">Welcome!</h2>
        <p class="mb-4">Click the button below to increase the counter.</p>
        <button id="counter" type="button" class="btn btn-primary"></button>
      </div>
    </div>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
