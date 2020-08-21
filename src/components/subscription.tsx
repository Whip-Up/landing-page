import React, { FunctionComponent } from "react"

export const Subscription: FunctionComponent<unknown> = () => (
  <article className="mt-56 mb-24 mx-8 lg:mx-auto lg:w-content lg:grid lg:col-gap-32">
    <h1 className="font-light sm:text-center sm:text-medium text-lg mb-8 col-start-1 row-start-1 row-span-1">
      Join us build Whip Up together
    </h1>
    <section className="mt-16 col-start-1 col-span-2 row-start-2 text-base">
      <ul className="list-disc px-24 lg:px-0 lg:grid lg:grid-cols-2 gap-5 font-regular text-base">
        <li className="col-start-1 row-start-1">
          Have a say on the app’s design direction
        </li>
        <li className="col-start-1 row-start-2">
          Get notified when the app releases
        </li>
        <li className="col-start-2 row-start-1">
          Suggest what features matter the most to you
        </li>
        <li className="col-start-2 row-start-2">
          <b>Don’t</b> get spam by anything else
        </li>
      </ul>
    </section>
    <form className="col-start-2 self-center mt-8 lg:mt-0">
      <input
        type="email"
        placeholder="Your email address"
        className="w-2/3 bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mb-4"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold ml-4 py-2 px-4 rounded"
      >
        subscribe
      </button>
    </form>
  </article>
)
